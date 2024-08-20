import Button from '@/components/common/Button'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export default function Home() {
  return (
    <div className="text-primary-50">
      
      <Button type={'black'} isFullWidth={true}>
        비회원으로 시작하기
      </Button>
    </div>
  )
}
