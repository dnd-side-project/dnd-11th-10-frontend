import Image from 'next/image'
import { accountData } from '@/constants/account'

function Company() {
  // API에서 받아오기(전역 상태 관리 필요)
  // const [selectedCompanyValue, setSelectedCompanyValue] = useState(0)
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sub2 text-onSurface-200">기업</p>
      <div className="p-4 flex justify-between bg-gray-700 rounded-lg">
        <p className="text-onSurface-300 text-sub1">
          {accountData.careerInfo.company}
        </p>
        <Image
          src={'/icons/arrow_down.svg'}
          alt="arrow_down.svg"
          width={24}
          height={24}
          onClick={() => console.log('회사 수정')}
        />
      </div>
    </div>
  )
}

export default Company
