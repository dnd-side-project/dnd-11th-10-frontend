'use client'

import { useState } from 'react'
import Image from 'next/image'
import Button from '@/components/common/Button'
import RadioBtnBottomSheet from '@/components/shared/RadioBtnBottomSheet'
import { RADIOBTN_MENUS } from '@/constants/bottomSheet'

function EditPofile() {
  const [isComanyOpen, setIsCompanyOpen] = useState(false)
  const [isExperienceOpen, setIsExperienceOpen] = useState(false)
  const [selectedCompanyValue, setSelectedCompanyValue] = useState(0)
  const [selectedExperienceValue, setSelectedExperienceValue] = useState(0)

  const handleCompanyChange = (id: number) => {
    setSelectedCompanyValue(id)
  }

  const handleExperienceChange = (id: number) => {
    setSelectedExperienceValue(id)
  }

  const handleCompanySubmit = () => {
    console.log('선택된 값:', selectedCompanyValue)
    setIsCompanyOpen(false)
  }
  const handleExperienceSubmit = () => {
    console.log('선택된 값:', selectedExperienceValue)
    setIsExperienceOpen(false)
  }
  return (
    <div className="px-4 flex flex-col justify-between gap-[5.375rem]">
      <div className="flex flex-col gap-10">
        <div className="relative m-auto">
          <Image
            src={'images/profile.svg'}
            width={100}
            height={100}
            alt="profile.svg"
          />
          <div className="absolute bottom-0 right-0 p-2 w-[30px] h-[30px] bg-gray-800 rounded-full">
            <Image src={'icons/pen.svg'} alt="pen.svg" width={14} height={14} />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-sub2 text-onSurface-100">이메일</p>
          <input
            readOnly
            className="p-4 w-full bg-gray-800 text-onSurface-100 outline-none"
            defaultValue={'dnwlsnw@gmail.com'}
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-sub2 text-onSurface-200">닉네임</p>
          <input
            className="p-4 w-full bg-gray-800 text-onSurface-300 outline-none"
            defaultValue={'상큼한화성009'}
            placeholder="닉네임을 입력하세요"
            maxLength={10}
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-sub2 text-onSurface-200">직군</p>
          <div className="w-full flex justify-between gap-3 text-center text-onSurface-300 text-sub1">
            <div className="w-full p-4 bg-gray-700 rounded-lg">개발자</div>
            <div className="w-full p-4 bg-gray-700 rounded-lg">디자이너</div>
            <div className="w-full p-4 bg-gray-700 rounded-lg">기타</div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-sub2 text-onSurface-200">기업</p>
          <div className="p-4 flex justify-between bg-gray-700 rounded-lg">
            <p className="text-onSurface-300 text-sub1">
              {RADIOBTN_MENUS.company.options[selectedCompanyValue].item}
            </p>
            <Image
              src={'/icons/arrow_down.svg'}
              alt="arrow_down.svg"
              width={24}
              height={24}
              onClick={() => setIsCompanyOpen((prev) => !prev)}
            />
          </div>
          {isComanyOpen && (
            <RadioBtnBottomSheet
              isOpen={isComanyOpen}
              type={'company'}
              value={selectedCompanyValue}
              onChange={handleCompanyChange}
              onSubmit={handleCompanySubmit}
            />
          )}
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-sub2 text-onSurface-200">경력</p>
          <div className="p-4 flex justify-between bg-gray-700 rounded-lg">
            <p className="text-onSurface-300 text-sub1">
              {RADIOBTN_MENUS.experience.options[selectedExperienceValue].item}
            </p>
            <Image
              src={'/icons/arrow_down.svg'}
              alt="arrow_down.svg"
              width={24}
              height={24}
              onClick={() => setIsExperienceOpen((prev) => !prev)}
            />
          </div>
          {isExperienceOpen && (
            <RadioBtnBottomSheet
              isOpen={isExperienceOpen}
              type="experience"
              value={selectedExperienceValue}
              onChange={handleExperienceChange}
              onSubmit={handleExperienceSubmit}
            />
          )}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <p className="text-onSurface-100">회원정보를 삭제하시겠어요?</p>
          <p className="text-onSurface-200">회원탈퇴</p>
        </div>
        <Button isFullWidth type="gradient">
          수정 완료
        </Button>
      </div>
    </div>
  )
}

export default EditPofile
