import Image from 'next/image'

type SortButtonProps = {
  text: string
  onClick: () => void
}

export default function SortButton({ text, onClick }: SortButtonProps) {
  return (
    <div className="flex items-center cursor-pointer" onClick={onClick}>
      <p className="text-body3">{text}</p>
      <Image alt="open" src={'/icons/arrow_down.svg'} width={24} height={24} />
    </div>
  )
}
