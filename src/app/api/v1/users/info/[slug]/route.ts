// app/api/v1/users/info/user_uuid/route.ts

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  
  const mockUsers = [
    {
      user_uuid: 'abcd',
      result: {
        user_name: "김예빈",
        user_email: "kimyeobin12@gmail.com",
        password: "1234",
        user_phone: "010-0000-0000",
        user_photo: "",
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