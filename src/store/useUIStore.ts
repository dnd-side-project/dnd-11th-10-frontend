import { create } from 'zustand'

type BottomSheetType = {
  type: 'login' | 'checkbox' | 'filter' | 'comment' | 'radioBtn' | null
}

type UIStoreType = {
  bottomSheetType: BottomSheetType['type']
  openBottomSheet: (type: BottomSheetType['type']) => void
  closeBottomSheet: () => void
  isModalOpen: boolean
  openModal: () => void
  closeModal: () => void
  toastMessage: string | null
  showToast: (message: string) => void
  hideToast: () => void
}

const useUIStore = create<UIStoreType>((set) => ({
  // BottomSheet state
  bottomSheetType: null,
  openBottomSheet: (type: BottomSheetType['type']) =>
    set({ bottomSheetType: type }),
  closeBottomSheet: () => set({ bottomSheetType: null }),

  // Modal state
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),

  // Toast state
  toastMessage: null,
  showToast: (message: string) => set({ toastMessage: message }),
  hideToast: () => set({ toastMessage: null }),
}))

export default useUIStore
