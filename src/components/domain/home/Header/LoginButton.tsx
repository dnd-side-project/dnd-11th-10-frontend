import { useRouter } from 'next/navigation'

export default function LoginButton() {
  const router = useRouter()
  return (
    <>
      <button
        className="px-2 py-1 font-medium text-sm bg-[#47D3AD] text-[#0E121B] rounded-[4px]"
        onClick={() => router.push('/')}
      >
        로그인
      </button>
    </>
  )
}
