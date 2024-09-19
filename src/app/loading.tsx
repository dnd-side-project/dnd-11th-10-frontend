import Image from 'next/image'

export default function Loading() {
  return (
    <div className="h-full bg-[#000] flex justify-center items-center">
      <Image
        src={'/gif/loading.gif'}
        alt="loading.gif"
        width={100}
        height={100}
      />
    </div>
  )
}
