import Button from '@/components/common/Button'
import Modal from '@/components/common/Modal'

interface QuizProblemStopModalProps {
  isModalOpen: boolean
  totalProblem: number
  currentProblem: number
}

export default function QuizProblemStopModal({
  isModalOpen,
  totalProblem,
  currentProblem,
}: QuizProblemStopModalProps) {
  if (!isModalOpen) return null

  return (
    <Modal>
      <div className="flex flex-col text-center">
        <p className="text-h2">퀴즈를 그만두시겠어요?</p>
        <div className="flex m-auto text-h2">
          <p className="text-primary-400">{totalProblem - currentProblem}</p>
          <p>문제밖에 남지 않았어요!</p>
        </div>
        <p className="text-onSurface-200 text-body2">
          지금 그만두면 다시 처음부터 진행해야해요.
        </p>
      </div>

      <div className="flex justify-between">
        <Button type={'light'} onClick={() => !isModalOpen}>
          계속할게요
        </Button>
        <Button type={'gradient'}>그만할게요</Button>
      </div>
    </Modal>
  )
}
