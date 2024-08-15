import Image from 'next/image'
import Link from 'next/link'

export default function ViewAllWords() {
  return (
    <Link
      href={'/dictionary'}
      className="flex justify-between items-center p-5 mx-4 rounded-2xl"
      style={{
        backgroundImage: 'linear-gradient(117deg, #1FD5BC 4.97%, #358BF2 54%)',
      }}
    >
      {/* 이미지 변경 필요 */}
      <Image alt="image" src={'/images/logo.svg'} width={75} height={75} />
      <div className="flex flex-col gap-1">
        <p className="leading-5 text-onSurface-300">
          지금까지 등록된 실무 용어{' '}
          <span className="text-primary-200 font-semibold">100</span>개
        </p>
        <p className="text-h2 text-onSurface-300">전체 실무 용어 보러가기</p>
      </div>
      <Image
        alt="보러가기"
        src={'/icons/right_arrow.svg'}
        width={24}
        height={24}
      />
    </Link>
  )
}
