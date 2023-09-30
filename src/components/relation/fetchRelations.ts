// fetchRelations.ts

import axios from 'axios'
import { NodeType, LinkType, RelationType, RelationResponseType } from './types'
import { domain } from './domain'
import { mockData } from './mockData'

export const fetchRelations = async (): Promise<RelationType> => {
  const user_uuid = localStorage.getItem('user_uuid') // localStorage에서 user_uuid를 가져옵니다.

  try {
    const response = await axios.get(`${domain}:8000/api/v1/relations/all/${user_uuid}/`)
    const result: RelationResponseType[] = response.data.result

    const nodes: NodeType[] = []
    const links: LinkType[] = []

    result.forEach((relation) => {
      // 각 관계를 노드로 변환
      const node: NodeType = {
        user_uid: relation.user_uid,
        friend_uid: relation.friend_uid,
        card_name: relation.card_name,
        user_photo: relation.user_photo,
        relation_name: relation.relation_name,
      }
      console.log('node', node)
      nodes.push(node)

      // 관계를 링크로 변환
      const link: LinkType = {
        source: relation.user_uid,
        target: relation.friend_uid,
      }
      console.log('link', link)
      links.push(link)
    })

    return { nodes, links }
  } catch (error) {
    console.error(`Error fetching relations for user ${user_uuid}: ${error}`)
    console.log('Mock data will be used instead.')
    console.log(mockData)
    return mockData
  }
}
