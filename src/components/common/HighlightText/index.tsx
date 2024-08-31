export type HighlightTextProps = {
  text: string
  target: string
  variant?: '비즈니스' | '디자인' | '개발'
}

const BASE_COLOR = 'text-primary-400'
const COLORS = {
  비즈니스: 'text-[#00946D]',
  디자인: 'text-[#A233CB]',
  개발: 'text-[#2C6DC0]',
}

export default function HighlightText({
  text,
  target,
  variant,
}: HighlightTextProps) {
  const escapeRegExp = (str: string) => {
    return str.replace(/[()]/g, '\\$&') // 특수 문자 이스케이프 처리
  }
  const regex = new RegExp(`(${escapeRegExp(target)})`, 'gi') // target 기준으로 split하지만 ()에 포함시켜 target 포함하여 배열 반환
  const splitted = text.split(regex)

  return (
    <p>
      {splitted.map((item, idx) =>
        item.toLocaleLowerCase() === target.toLocaleLowerCase() ? (
          <span key={idx} className={variant ? COLORS[variant] : BASE_COLOR}>
            {item}
          </span>
        ) : (
          item
        ),
      )}
    </p>
  )
}
