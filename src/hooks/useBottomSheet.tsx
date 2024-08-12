'use client'
import { useState } from 'react'

export type BottomSheetType = {
  type: 'login' | 'checkbox' | 'menu' | 'profileEdit' | null
}

export default function useBottomSheet() {
  const [type, setType] = useState<BottomSheetType['type'] | null>()

  const openBottomSheet = (type: BottomSheetType['type']) => {
    setType(type)
  }

  const closeBottomSheet = () => {
    setType(null)
  }

  return { type, openBottomSheet, closeBottomSheet }
}
