'use client'
import { SNACKBAR } from '@/constants/snackbar'
import useUIStore from '@/store/useUIStore'
import { useEffect } from 'react'

export default function Snackbar() {
  const { snackbarType, showSnackbar } = useUIStore()

  useEffect(() => {
    showSnackbar(snackbarType)
    const timer = setTimeout(() => {
      showSnackbar(null)
    }, 2500)

    return () => clearTimeout(timer)
  }, [snackbarType, showSnackbar])

  if (!snackbarType) return null
  return (
    <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-[430px]">
      <div className="flex justify-between bg-gray-600 text-sub2 text-center py-4 px-7 rounded-lg mx-4 animate-fade-in">
        <p>{SNACKBAR[snackbarType].text}</p>
        <p>{SNACKBAR[snackbarType].actionText}</p>
      </div>
    </div>
  )
}
