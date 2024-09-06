'use client'

import Image from 'next/image'

export default function GoogleLoginButton() {
  const handleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/login/google`
  }

  return (
    <button
      className="w-full py-4 px-6 rounded-lg flex justify-center bg-white"
      onClick={() => handleLogin()}
    >
      <div className="flex gap-3">
        <Image alt="google" src={'/icons/google.svg'} width={20} height={20} />
        <p className="font-medium text-black">Google로 시작하기</p>
      </div>
    </button>
  )
}
