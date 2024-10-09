import { create } from 'zustand'

type CommentFormType = {
  isEditing: boolean
  setIsEditing: (isEditing: boolean) => void
  editingText: string | null
  setEditingText: (text: string | null) => void
}

const useCommentForm = create<CommentFormType>((set) => ({
  isEditing: false,
  setIsEditing: (isEditing: boolean) => set({ isEditing: isEditing }),
  editingText: null,
  setEditingText: (text: string | null) => set({ editingText: text }),
}))

export default useCommentForm
