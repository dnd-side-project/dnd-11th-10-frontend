import Header from '@/components/domain/wordDetail/Header'
import WordInfo from '@/components/domain/wordDetail/WordInfo'
import { wordData } from './data'
import ContactButton from '@/components/domain/wordDetail/ContactButton'

export default function WordDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  return (
    <div className="text-onSurface-300">
      <Header markedCount={wordData.markedCount} />
      <WordInfo word={wordData} />
      <ContactButton />
    </div>
  )
}
