import Button from '@/components/common/Button'
import Image from 'next/image'
import Link from 'next/link'

export default function Bookmarks() {
  const isLoggedIn = true // 로그인 상태 받아오기

  return (
    <div className="mx-4">
      <div
        className="w-full flex flex-col gap-3 p-5 rounded-2xl"
        style={{
          backgroundImage:
            'linear-gradient(120deg, #0FB -25.6%, #3D7DF3 31.25%, #6E32E6 86.98%)',
        }}
      >
        <div className="flex gap-4">
          <div className="flex-1 flex flex-col gap-2 text-onSurface-300">
            <p className="text-h1">별별 저장소 ⭐</p>
            <p className="text-body2">
              {isLoggedIn ? (
                <>
                  <span className="text-primary-200">별 단어</span>가 다 있다고
                  생각이 드는 생소한 용어를
                  <br />
                  등록하고 학습해보세요.
                </>
              ) : (
                <>
                  로그인을 하면 즐겨찾기 한 용어를{' '}
                  <span className="text-primary-200">별별 저장소</span>에서
                  만나볼 수 있어요!
                </>
              )}
            </p>
          </div>
          <Image
            alt="image"
            src={'/images/star_ring.svg'}
            width={166}
            height={118}
          />
        </div>
        <Link href={'/bookmarks'}>
          <Button type="black" isFullWidth>
            별별 저장소 가기
          </Button>
        </Link>
      </div>
    </div>
  )
}
