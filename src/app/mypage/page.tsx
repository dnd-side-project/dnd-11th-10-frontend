import { GotoCard, Information } from '@/components/domain/mypage'
import { gotoCardData } from '@/constants/gotoCardData'

function MyPage() {
  return (
    <div className="px-4 flex flex-col gap-5">
      <Information />
      <div className="flex flex-col gap-5">
        {gotoCardData.map((data, idx) => {
          return (
            <GotoCard
              icon={data.icon}
              text={data.text}
              subText={data.subText}
              key={idx}
              route={data.route}
            />
          )
        })}
      </div>
    </div>
  )
}

export default MyPage
