import Tag from '@/components/common/Tag'
import { CategoryType } from '@/types/word'

const categoryColor = {
  비즈니스: 'bg-primary-0 text-primary-50',
  디자인: 'bg-designPurple-0 text-designPurple-50',
  개발: 'bg-devBlue-0 text-devBlue-50',
}

type CategoryTagProps = {
  category: CategoryType['category']
}

export default function CategoryTag({ category }: CategoryTagProps) {
  return <Tag text={`${category} 용어`} color={categoryColor[category]} />
}
