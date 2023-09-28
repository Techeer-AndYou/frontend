import axios, { AxiosInstance } from 'axios'

export const customAxios: AxiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/api/v1'
      : 'https://localhost:8080/api/v1',
  headers: {
    // 반환되는 타입을 지정합니다. 여기서는 json 입니다.
    'Content-Type': 'application/json',
  },
})
// baseURL 부분은 백엔드와 협의해서 변경합니다.
// 이렇게 만들어진 axios 인스턴스는 api 호출 시 사용합니다.
