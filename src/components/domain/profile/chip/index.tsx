import { ProfileChip } from '@/types/profileChip'

interface ChipProps extends ProfileChip {
  selected: boolean
  onClick: () => void
}

function Chip({ id, name, selected, onClick }: ChipProps) {
  return (
    <div
      className={`px-5 py-2 rounded-[0.25rem] hover:cursor-pointer ${
        selected
          ? 'bg-primary-400 text-background'
          : 'border-solid border-[1.5px] border-outline text-onSurface-300'
      }`}
      key={id}
      onClick={onClick}
    >
      {name}
    </div>
  )
}

export default Chip
