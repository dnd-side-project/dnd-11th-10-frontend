import { wordsPopularData } from '@/constants/wordsPopularData'

function WordsPopular() {
  return (
    <div className="flex flex-col justify-between gap-8 px-4">
      <div className="flex justify-between">
        <p className="text-h2 text-onSurface-300">많이 찾아본 용어</p>
        <div className="flex flex-col text-right">
          <p className="text-body3 text-onSurface-200">오후 00:00 업데이트</p>
          <p className="text-caption text-onSurface-100">
            *12시간 간격 업데이트
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        {wordsPopularData.map((popular, idx) => {
          return (
            <div className="flex gap-7" key={idx}>
              <div
                className={`w-6 h-6 rounded  ${idx === 0 || idx === 1 || idx === 2 ? 'bg-primary-400 text-background' : 'bg-gray-800 text-onSurface-300'} ${idx === 9 ? 'py-[0.125rem] px-1' : 'py-[0.125rem] px-2'}`}
              >
                {idx + 1}
              </div>
              <p className="text-body2 text-onSurface-300">{popular.name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WordsPopular
