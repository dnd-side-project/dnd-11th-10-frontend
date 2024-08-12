type BottomSheetType = {
  children: React.ReactNode
  onClose: () => void
}
export default function BottomSheet({ children, onClose }: BottomSheetType) {
  return (
    <>
      <div
        className="w-full max-w-[430px] h-dvh absolute top-0 bg-background bg-opacity-50"
        onClick={onClose}
      />
      <div className="w-full max-w-[430px] h-fit fixed bottom-0 rounded-t-2xl py-7 px-6 bg-gray-700">
        {children}
      </div>
    </>
  )
}
