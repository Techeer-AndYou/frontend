// app/api/v1/cards/info/user_uuid/route.ts

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  
  const mockUsers = [
    {
      user_uuid: 'abcd',
      result: {
        card_name: "김예빈",
        card_email: "kimyeobin12@gmail.com",
        card_intro: "안녕하세요!!",
        card_phone: "010-0000-0000",
        card_photo: "",
      }
    }
  ]

  const userData = mockUsers.find((user) => user.user_uuid === params.slug);

  return new Response(
    JSON.stringify(userData),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      }
    }
  )
  
}