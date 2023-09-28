export async function POST(request: Request) {
  const { user_name, user_email, password, user_phone, user_photo, is_user, created_at } =
    await request.json()

  // 실제 데이터베이스 로직 대신 mock 데이터를 사용합니다.
  const mockRegisteredUsers = [
    { user_email: 'existing@example.com' }, // 이미 존재하는 사용자의 이메일을 가정합니다.
  ]

  const existingUser = mockRegisteredUsers.find((user) => user.user_email === user_email)

  if (existingUser) {
    return new Response(
      JSON.stringify({
        message: '이미 존재하는 이메일입니다.',
        result: null,
      }),
      {
        status: 204,
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        },
      },
    )
  }

  // 가정: 성공적으로 회원가입이 이루어졌다면 다음과 같이 mock 데이터를 반환합니다.
  const mockNewUser = {
    user_name,
    user_email,
    password,
    user_phone,
    user_photo: user_photo || '기본 이미지 URL', // 사진이 없을 경우 기본 이미지 URL
    is_user,
    created_at,
    user_uid: 'f1a24cf2-d026-4e0a-af7a-f96d339b89f5', // 새로운 유저의 mock UID
  }

  return new Response(
    JSON.stringify({
      message: '회원가입 성공',
      result: mockNewUser,
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    },
  )
}
