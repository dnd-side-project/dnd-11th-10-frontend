import { accountData } from '@/constants/account'
import Image from 'next/image'

function Experience() {
//   const [selectedExperienceValue, setSelectedExperienceValue] = useState(0)

  return (
    <div className="flex flex-col gap-3">
      <p className="text-sub2 text-onSurface-200">경력</p>
      <div className="p-4 flex justify-between bg-gray-700 rounded-lg">
        <p className="text-onSurface-300 text-sub1">
          {accountData.careerInfo.experience}
        </p>
        <Image
          src={'/icons/arrow_down.svg'}
          alt="arrow_down.svg"
          width={24}
          height={24}
          onClick={() => console.log('경력 수정')}
        />
      </div>
    </div>
  )
}

export default Experience
