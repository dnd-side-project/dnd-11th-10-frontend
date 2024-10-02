'use client'
import Button from '@/components/common/Button'
import {
  Company,
  Email,
  Experience,
  JobGroup,
  NickName,
  ProfileImg,
} from '@/components/domain/editprofile'

function EditPofile() {
  return (
    <div className="px-4 flex flex-col justify-between gap-[5.375rem]">
      <div className="flex flex-col gap-10">
        <ProfileImg />
        <Email />
        <NickName />
        <JobGroup />
        <Company />
        <Experience />
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
