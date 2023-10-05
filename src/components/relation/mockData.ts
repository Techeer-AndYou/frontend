// Mock 데이터 정의
export const mockData = {
  nodes: Array.from({ length: 20 }, (_, i) => ({
    user_uid: i === 0 ? '100' : String(i + 1),
    friend_uid: i === 19 ? '100' : String(i + 2),
    card_name: `사용자${i + 1}`,
    user_photo: `https://picsum.photos/200/200?random=${i + 1}`, // add random images
    relation_name: ['친구', '가족', '직장 동료', '지인'][Math.floor(Math.random() * 4)],
  })),
  links: Array.from({ length: 19 }, (_, i) => ({
    source: i === 0 ? '100' : String(i + 1),
    target: i === 18 ? '100' : String(i + 2),
  })).concat(
    Array.from({ length: 10 }, () => ({
      source: '100',
      target: String(Math.ceil(Math.random() * 19) + 1),
    })),
  ),
}
