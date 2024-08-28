import Image from 'next/image'

export default function GoogleLoginButton() {
  return (
    <button className="w-full py-4 px-6 rounded-lg flex justify-center bg-white hover:bg-onSurface-300 cursor-pointer">
      <div className="flex gap-3">
        <Image alt="google" src={'/icons/google.svg'} width={20} height={20} />
        <p className="font-medium text-black">Google로 시작하기</p>
      </div>
    </button>
  )
}
