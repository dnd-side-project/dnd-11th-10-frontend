import { accountData } from '@/constants/account'
import { useState } from 'react'

function JobGroup() {
  // 초기값 API에서 받아오기
  const [selected, setSelected] = useState(accountData.careerInfo.jobGroup)

  const options = ['개발자', '디자이너', '기타']

  const handleClick = (option: string) => {
    setSelected(option)
  }

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sub2 text-onSurface-200">직군</p>
      <div className="w-full flex justify-between gap-3 text-center text-onSurface-300 text-sub1">
        {options.map((option, idx) => (
          <div
            className={`w-full p-4 bg-gray-700 rounded-lg cursor-pointer ${selected === option ? 'bg-primary-0 border-solid border-[1px] border-primary-400' : 'bg-gray-700'}`}
            key={idx}
            // 우선은 수정 불가능 하도록
            // onClick={() => handleClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  )
}

export default JobGroup
