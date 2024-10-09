'use client'
import { useGetPrecedence } from '@/hooks/auth/useGetSkill'
import CategoryChartItem from './CategoryChartItem'
import TotalChart from './TotalChart'
import { StatsInfo } from './data'
import { useAuthStore } from '@/store/useAuthStore'

export type Category = 'develop' | 'design' | 'business'
const categories: Category[] = ['develop', 'design', 'business']

export default function CommunicationStats() {
  const { userId } = useAuthStore()
  const { precedence } = useGetPrecedence()

  return (
    <>
      <div className="w-full flex flex-col items-center text-onSurface-300 px-4">
        <div className="w-full flex justify-between items-end mb-6">
          <div>
            <p className="text-h2 mb-3">나의 업무 소통 능력치 📊</p>
            <p className="text-onSurface-200">
              {userId
                ? '용어 퀴즈로 단어를 학습하고 소통 능력치를 높일 수 있어요.'
                : '로그인을 하고 나의 업무 소통\n능력치를 확인해보세요!'}
            </p>
          </div>
          <TotalChart
            topPercent={userId ? ((precedence as number) ?? 100) : '??'}
            percent={userId ? StatsInfo.totalPercent : 0}
          />
        </div>
        <div className="w-full flex justify-between gap-4 max-xs:flex-col">
          {categories.map((category: Category, idx: number) => (
            <CategoryChartItem
              key={idx}
              category={category}
              percent={userId ? StatsInfo[category].percent : 0}
              cnt={userId ? StatsInfo[category].cnt : 0}
              totalCnt={userId ? StatsInfo[category].totalCnt : 0}
            />
          ))}
        </div>
      </div>
    </>
  )
}
