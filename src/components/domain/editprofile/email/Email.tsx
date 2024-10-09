import { accountData } from '@/constants/account'

function Email() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sub2 text-onSurface-100">이메일</p>
      <input
        readOnly
        className="p-4 w-full bg-gray-800 text-sub1 text-onSurface-100 outline-none"
        defaultValue={accountData.email}
      />
    </div>
  )
}

export default Email
