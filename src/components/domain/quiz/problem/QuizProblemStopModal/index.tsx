import { Dialog } from '@ark-ui/react'
import Button from '@/components/common/Button'
import Modal from '@/components/common/Modal'
import { useRouter } from 'next/navigation'

interface QuizProblemStopModalProps {
  isModalOpen: boolean
  closeModal: () => void
  totalProblem: number
  currentProblem: number
}

export default function QuizProblemStopModal({
  isModalOpen,
  closeModal,
  totalProblem,
  currentProblem,
}: QuizProblemStopModalProps) {
  const router = useRouter()
  return (
    <Dialog.Root open={isModalOpen} onOpenChange={closeModal}>
      <Dialog.Content>
        <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
          <div className="flex flex-col text-center gap-1">
            <p className="text-h2">퀴즈를 그만두시겠어요?</p>
            <div className="flex m-auto text-h2">
              <p className="text-primary-400">
                {totalProblem - currentProblem}
              </p>
              <p>문제밖에 남지 않았어요!</p>
            </div>
            <p className="text-onSurface-200 text-body2">
              지금 그만두면 다시 처음부터 진행해야해요.
            </p>
          </div>

          <div className="mt-5 flex justify-between gap-3">
            <Button isFullWidth type="light" onClick={closeModal}>
              계속할게요
            </Button>
            <Button
              isFullWidth
              type="gradient"
              onClick={() => router.push('/home/dictionary')}
            >
              그만할게요
            </Button>
          </div>
        </Modal>
      </Dialog.Content>
    </Dialog.Root>
  )
}
