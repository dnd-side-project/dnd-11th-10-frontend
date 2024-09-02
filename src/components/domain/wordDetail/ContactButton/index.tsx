import Image from 'next/image'
import Link from 'next/link'

export default function ContactButton() {
  return (
    <Link
      href={'#'}
      className="flex justify-between gap-6 bg-gray-800 rounded-2xl py-5 px-7 mx-4"
    >
      <Image alt="image" src={'/images/contact.svg'} width={50} height={50} />
      <div>
        <p className="text-onSurface-200">용어 관련 문의가 있으신가요?</p>
        <p className="text-sub1">문의하러 가기</p>
      </div>
      <Image
        alt="contact"
        src={'/icons/right_arrow.svg'}
        width={24}
        height={24}
      />
    </Link>
  )
}
