import { SVGProps, Ref, forwardRef, memo } from "react"
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={20}
    viewBox="0 0 8 20"
    fill="white"
    ref={ref}
    {...props}
  >
    <path
      d="M8 20L7.99999 0C8.00005 8.88889 0.571428 10 0 10C0.571428 10 8.00599 11.3273 8 20Z"
      fill="#262626"
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)

