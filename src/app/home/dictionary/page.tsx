import Bookmarks from '@/components/domain/home/dictionary/Bookmarks'
import PopularCommentsList from '@/components/domain/home/dictionary/PopularCommentsList'
import { PopularComments } from '@/components/domain/home/dictionary/PopularCommentsList/data'
import RecentlyAddedWords from '@/components/domain/home/dictionary/RecentlyAddedWords'
import { WordsList } from '@/components/domain/home/dictionary/RecentlyAddedWords/data'
import ViewAllWords from '@/components/domain/home/dictionary/ViewAllWords'

export default function DictionaryTab() {
  return (
    <div className="w-full my-12 flex flex-col gap-[60px]">
      <ViewAllWords />
      <RecentlyAddedWords wordsList={WordsList} />
      <Bookmarks />
      <PopularCommentsList PopularComments={PopularComments} />
    </div>
  )
}
