import RightArrow from '@/components/common/Icons/RightArrow'
import Image from 'next/image'
import Link from 'next/link'

export default function ViewAllWords() {
  return (
    <Link
      href={'/dictionary'}
      className="flex justify-between items-center p-5 mx-4 rounded-2xl bg-btn-gradient"
    >
      {/* 이미지 변경 필요 */}
      <Image alt="image" src={'/images/logo.svg'} width={75} height={75} />
      <div className="flex flex-col gap-1">
        <p className="text-body2 text-background">
          지금까지 등록된 실무 용어{' '}
          <span className="text-secondary-300 text-h3">
            100<span className="text-h3 text-background">개</span>
          </span>
        </p>
        <p className="text-h2 text-background">전체 실무 용어 보러가기</p>
      </div>
      <RightArrow color="#0E121B" />
    </Link>
  )
}
