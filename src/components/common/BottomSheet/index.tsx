import useUIStore from '@/store/useUIStore'

type BottomSheetType = {
  children: React.ReactNode
}
export default function BottomSheet({ children }: BottomSheetType) {
  const { closeBottomSheet } = useUIStore()
  return (
    <>
      <div
        className="w-full max-w-[430px] h-dvh fixed top-0 bg-background bg-opacity-50 z-40"
        onClick={closeBottomSheet}
      />
      <div className="w-full max-w-[430px] fixed bottom-0 rounded-t-2xl py-7 px-6 bg-gray-700 text-onSurface-300 z-50">
        {children}
      </div>
    </>
  )
}
