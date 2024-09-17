type ModalType = {
  children: React.ReactNode
}

export default function Modal({ children }: ModalType) {
  return (
    <div>
      <div className="fixed bg-#0E121B opacity-50" />
      <div className="py-5 px-4 bg-gray-700 text-onSurface-300 rounded-2xl">
        {children}
      </div>
    </div>
  )
}
