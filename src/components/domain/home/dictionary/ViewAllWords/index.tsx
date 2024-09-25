import { getWordsCount } from '@/api/admin/words'
import RightArrow from '@/components/common/Icons/RightArrow'
import Image from 'next/image'
import Link from 'next/link'

export default async function ViewAllWords() {
  const count = await getWordsCount()
  return (
    <Link
      href={'/dictionary'}
      className="flex justify-between items-center p-5 mx-4 rounded-2xl box-gradient"
    >
      <div className="flex gap-4 items-center">
        <Image
          alt="image"
          src={'/images/planet_purple.svg'}
          width={75}
          height={75}
        />
        <div className="flex flex-col gap-1">
          <p className="text-body2 text-background">
            지금까지 등록된 용어{' '}
            <span className="text-secondary-300 text-h3">
              {count}
              <span className="text-h3 text-background">개</span>
            </span>
          </p>
          <p className="text-h2 text-background">전체 용어 보러가기</p>
        </div>
      </div>
      <RightArrow color="#0E121B" />
    </Link>
  )
}
