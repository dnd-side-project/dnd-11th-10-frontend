import { error } from 'console'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')

  if (!code) {
    return NextResponse.json(
      { error: '[ERROR] 코드 누락, 확인 필요' },
      { status: 400 },
    )
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/login/google`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code }),
  })

  if (!res.ok) {
    console.error('[ERROR] fetcginh data ... ', error)
    return NextResponse.json(
      { error: '[ERROR] 토큰을 확인해주세요.' },
      { status: res.status },
    )
  }

  const data = await res.json()

  // TODO: setCookie

  return NextResponse.json({ data }, { status: res.status })
}
