export default function RightArrow({ color }: { color: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="chevron-right">
        <path
          id="Vector"
          d="M9 20.001L17 12.001L9 4.00098"
          stroke={color}
          stroke-opacity="0.87"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  )
}
