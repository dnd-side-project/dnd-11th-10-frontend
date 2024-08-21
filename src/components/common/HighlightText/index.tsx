export type HighlightTextProps = {
  text: string
  target: string
}

export default function HighlightText({ text, target }: HighlightTextProps) {
  const escapeRegExp = (str: string) => {
    return str.replace(/[()]/g, '\\$&') // 특수 문자 이스케이프 처리
  }

  const regex = new RegExp(`(${escapeRegExp(target)})`, 'gi') // target 기준으로 split하지만 ()에 포함시켜 target 포함하여 배열 반환

  const splitted = text.split(regex)

  return (
    <p className="text-sub2 text-background">
      {splitted.map((item, idx) =>
        item.toLocaleLowerCase() === target.toLocaleLowerCase() ? (
          <span key={idx} className="text-[#00946D]">
            {item}
          </span>
        ) : (
          item
        ),
      )}
    </p>
  )
}
