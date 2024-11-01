import { get } from '@/lib/axios'
import { SuccessResponse } from '@/types/response'
import { SearchWord } from '@/types/searchWords'

export const getSearchWords = async (
  keyword: string,
): Promise<SearchWord[]> => {
  const response = await get<{ words: SearchWord[] }>('/words/search', {
    params: {
      name: keyword,
      size: 15,
      sortBy: 'name',
      category: '전체 실무',
    },
  })
  return response.words || []
}

export const getPopularWords = async () => {
  const res = await get<SuccessResponse<Popular[]>>('/words/popular', {
    params: {
      size: 10,
      sortBy: 'viewCount',
    },
  })
  return res.words || []
}
