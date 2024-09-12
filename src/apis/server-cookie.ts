import { cookies } from 'next/headers'

export interface TokenData {
  accessToken: string
  refreshToken: string
}

export function setAuthCookies(tokendata: TokenData): void {
  const cookieStore = cookies()

  cookieStore.set('accessToken', tokendata.accessToken, {
    maxAge: 315360000,
    httpOnly: true,
    secure: true,
  })

  cookieStore.set('refreshToken', tokendata.refreshToken, {
    maxAge: 315360000,
    httpOnly: true,
    secure: true,
  })
}

export function clearAuthCookies(): void {
  const cookieStore = cookies()
  cookieStore.delete('accessToken')
  cookieStore.delete('refreshToken')
}
