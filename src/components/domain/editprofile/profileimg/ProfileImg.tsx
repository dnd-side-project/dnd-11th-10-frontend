import { accountData } from '@/constants/account'
import Image from 'next/image'
import { useState } from 'react'

function ProfileImg() {
  const [isProfileImgOpen, setIsProfileImgOpen] = useState(false)
  return (
    <>
      <div className="relative m-auto">
        <Image
          src={accountData.profileImage}
          width={100}
          height={100}
          alt="profile.svg"
        />
        <div className="absolute bottom-0 right-0 p-2 w-[30px] h-[30px] bg-gray-800 rounded-full">
          <Image
            src={'icons/pen.svg'}
            alt="pen.svg"
            width={14}
            height={14}
            onClick={() => setIsProfileImgOpen((prev) => !prev)}
          />
        </div>
      </div>
      {isProfileImgOpen && <div></div>}
    </>
  )
}

export default ProfileImg
