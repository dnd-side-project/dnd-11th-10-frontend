export const loginWithGoogle = (snsType: string | null) => {
  window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?
    client_id=${process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID}&
    redirect_uri=${process.env.NEXT_PUBLIC_OAUTH_REDIRECT}/${snsType}/oauth&
    response_type=code&scope=email`
}
