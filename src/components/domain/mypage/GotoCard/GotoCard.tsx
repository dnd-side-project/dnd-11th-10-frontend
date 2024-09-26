import Image from 'next/image'

interface GotoCardProps {
  icon: string
  text: string
  subText?: string
}

function GotoCard({ icon, text, subText }: GotoCardProps) {
  return (
    <div>
      <Image src={`/icons/${icon}`} width={50} height={50} alt="goto.svg" />
      {subText && <p className="text-onSurface-300">{subText}</p>}
      <p className="text-onSurface-300">{text}</p>
    </div>
  )
}

export default GotoCard
