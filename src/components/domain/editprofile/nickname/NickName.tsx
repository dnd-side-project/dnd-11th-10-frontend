import { accountData } from '@/constants/account'

function NickName() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sub2 text-onSurface-200">닉네임</p>
      <input
        className="p-4 w-full rounded-lg bg-gray-800 text-onSurface-300 outline-none"
        defaultValue={accountData.nickname}
        placeholder="닉네임을 입력하세요"
        maxLength={10}
      />
    </div>
  )
}

export default NickName
