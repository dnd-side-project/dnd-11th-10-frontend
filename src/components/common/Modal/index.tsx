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
      <div
        className="fixed inset-0 bg-[#0E121B] opacity-50"
        onClick={closeModal}
      ></div>
      <div>
        <div className="relative py-5 px-4 bg-gray-700 text-onSurface-300 rounded-2xl">
          {children}
        </div>
      </div>
    </>
  )
}
