import { SNACKBAR_TYPE } from '@/constants/snackbar'
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
  snackbarType: SNACKBAR_TYPE | null
  showSnackbar: (type: SNACKBAR_TYPE | null) => void
  hideSnackbar: () => void
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

  // Snackbar state
  snackbarType: null,
  showSnackbar: (type: SNACKBAR_TYPE | null) => set({ snackbarType: type }),
  hideSnackbar: () => set({ snackbarType: null }),
}))

export default useUIStore
