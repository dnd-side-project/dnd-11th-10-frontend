import Button from '@/components/common/Button'

function EditPofile() {
  return (
    <div className="px-4 flex flex-col gap-10">
      <div>
        <p>이메일</p>
      </div>
      <div>
        <p>닉네임</p>
      </div>
      <div>
        <p>직군</p>
      </div>
      <div>
        <p>기업</p>
      </div>
      <div>
        <p>경력</p>
      </div>
      <Button type="gradient">수정 완료</Button>
    </div>
  )
}

export default EditPofile
