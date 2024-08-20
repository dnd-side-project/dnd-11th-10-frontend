import Button from '@/components/common/Button'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export default function Home() {
  return (
    <div className="">
      <Button type={'white'} isFullWidth={true}>
        <div className="flex justify-center">
          <Image
            src={'/icons/google.svg'}
            alt={'google.svg'}
            width={23}
            height={23}
            className="mr-3"
          />
          <p>Google로 시작하기</p>
        </div>
      </Button>
      <div className="mt-[10px]">
        <Button type={'black'} isFullWidth={true}>
          비회원으로 시작하기
        </Button>
      </div>
    </div>
  )
}
