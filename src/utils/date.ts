const SECONDS_IN_A_DAY = 60 * 60 * 24
const SECONDS_IN_AN_HOUR = 60 * 60
const SECONDS_IN_A_MINUTE = 60

export function getTimeAgo(dateStr: string) {
  const date = new Date(dateStr)
  const now = new Date()
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  let interval = Math.floor(seconds / SECONDS_IN_A_DAY)
  if (interval >= 1) {
    return `${getFormattedDate(dateStr)}`
  }

  interval = Math.floor(seconds / SECONDS_IN_AN_HOUR)
  if (interval >= 1) {
    return `${interval}시간 전`
  }

  interval = Math.floor(seconds / SECONDS_IN_A_MINUTE)
  if (interval >= 1) {
    return `${interval}분 전`
  }

  return '방금 전'
}

// 2024-08-06T17:30:33 -> 24.08.06 format 변경
export function getFormattedDate(dateStr: string) {
  const date = new Date(dateStr)

  const year = date.getFullYear().toString().slice(2)
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')

  return `${year}.${month}.${day}`
}
