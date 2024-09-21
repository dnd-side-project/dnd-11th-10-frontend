type ModalType = {
  children: React.ReactNode
  isModalOpen: boolean
  closeModal: () => void
}

export default function Modal({
  children,
  isModalOpen,
  closeModal,
}: ModalType) {
  if (!isModalOpen) return null

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-full max-w-[430px] h-full bg-[#0E121B] opacity-50 z-40" />
      </div>

      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="relative py-5 px-4 bg-gray-700 text-onSurface-300 rounded-2xl">
          {children}
        </div>
      </div>
    </>
  )
}
