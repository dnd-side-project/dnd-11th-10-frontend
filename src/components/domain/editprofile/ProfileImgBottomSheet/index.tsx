import BottomSheet from '@/components/common/BottomSheet'
import Button from '@/components/common/Button'
import Image from 'next/image'
import React from 'react'

interface ProfileImgBottomSheetProps {
  nickname: string
  selectedImage: string
  handleImageSelect: (src: string) => void
  handleSave: () => void
}
export default function ProfileImgBottomSheet({
  nickname,
  selectedImage,
  handleImageSelect,
  handleSave,
}: ProfileImgBottomSheetProps) {
  const img = {
    1: '/images/profile_01.svg',
    2: '/images/profile_02.svg',
    3: '/images/profile_03.svg',
    4: '/images/profile_04.svg',
    5: '/images/profile_05.svg',
    6: '/images/profile_06.svg',
    7: '/images/profile_07.svg',
    8: '/images/profile_08.svg',
    9: '/images/profile_09.svg',
    10: '/images/profile_10.svg',
  }

  return (
    <BottomSheet>
      <p className="text-h2 mb-5">
        {`${nickname}님,` + `\n` + '프로필 이미지를 꾸며보세요'}
      </p>
      <div className="flex flex-col gap-6">
        <div className="flex justify-center">
          <Image
            src={selectedImage}
            alt="profile.svg"
            width={100}
            height={100}
          />
        </div>
        <div className="w-full flex flex-wrap justify-center gap-3">
          {Object.values(img).map((src, index) => (
            <div key={index} className="flex">
              <Image
                src={src}
                alt={`profile_${index + 1}.svg`}
                width={60}
                height={60}
                className="cursor-pointer"
                onClick={() => handleImageSelect(src)}
              />
            </div>
          ))}
        </div>
        <Button isFullWidth type="gradient" onClick={handleSave}>
          저장
        </Button>
      </div>
    </BottomSheet>
  )
}
