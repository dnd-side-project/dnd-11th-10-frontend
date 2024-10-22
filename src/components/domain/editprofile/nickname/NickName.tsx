import React, { useState } from 'react'
import { accountData } from '@/constants/account'

function NickName() {
  const [nickname, setNickname] = useState(accountData.nickname || '')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value)
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-3">
        <p className="text-sub2 text-onSurface-200">닉네임</p>
        <input
          className="p-4 w-full rounded-lg bg-gray-800 text-sub1 text-onSurface-300 outline-none"
          value={nickname}
          onChange={handleInputChange}
          placeholder="닉네임을 입력하세요"
          maxLength={10}
        />
      </div>
      <p className="text-right text-sub2 text-onSurface-100">
        {nickname.length}/10
      </p>
    </div>
  )
}

export default NickName
