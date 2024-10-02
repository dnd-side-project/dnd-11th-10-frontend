import { useState } from 'react'
import { accountData } from '@/constants/account'
import Image from 'next/image'
import ProfileImgBottomSheet from '../ProfileImgBottomSheet'

function ProfileImg() {
  const [isProfileImgOpen, setIsProfileImgOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(accountData.profileImage)

  const handleImageSelect = (src: string) => {
    setSelectedImage(src)
  }

  const handleSave = () => {
    setIsProfileImgOpen(false)
  }

  return (
    <>
      <div className="relative m-auto">
        <Image src={selectedImage} width={100} height={100} alt="profile.svg" />
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
      {isProfileImgOpen && (
        <ProfileImgBottomSheet
          nickname={accountData.nickname}
          selectedImage={selectedImage}
          handleImageSelect={handleImageSelect}
          handleSave={handleSave}
        />
      )}
    </>
  )
}

export default ProfileImg
