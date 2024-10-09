import { create } from 'zustand'

type CommentFormType = {
  editingId: number | null
  setEditingId: (id: number | null) => void
  editingText: string | null
  setEditingText: (text: string | null) => void
}

const useCommentForm = create<CommentFormType>((set) => ({
  editingId: null,
  setEditingId: (id: number | null) => set({ editingId: id }),
  editingText: null,
  setEditingText: (text: string | null) => set({ editingText: text }),
}))

export default useCommentForm
