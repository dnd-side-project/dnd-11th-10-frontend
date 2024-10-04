import { useEffect, useState } from 'react'

interface Props {
  value: string
  delay: number
}

export const useSearchDebounce = (keyword: string, p0: number, { value, delay }: Props) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}
