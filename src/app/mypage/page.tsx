import { GotoCard, Information } from '@/components/domain/mypage'
import { gotoCardData } from '@/constants/gotoCardData'

function MyPage() {
  return (
    <div className="px-4">
      <Information />
      {gotoCardData.map((data, idx) => {
        return (
          <GotoCard
            icon={data.icon}
            text={data.text}
            subText={data.subText}
            key={idx}
          />
        )
      })}
    </div>
  )
}

export default MyPage
