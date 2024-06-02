import clsx from "clsx"
import React from "react"
import { ProductHit } from "../hit"
import ShowAll from "../show-all"

type HitsProps<THit> = React.ComponentProps<"div"> &
  {
    hitComponent: (props: { hit: THit }) => JSX.Element
    close: () => void
  }

const DesktopHits = ({
  hitComponent: Hit,
  className,
  close,
  ...props
}: HitsProps<ProductHit>) => {

  return (
    <div
      className={clsx(
        "transition-[height,max-height,opacity] duration-300 ease-in-out overflow-y-scroll w-[50vw] mb-1 p-px",
        className,
        {
          "max-h-full opacity-100": '',
          "max-h-0 opacity-0": '',
        }
      )}
    >
      <div className="grid grid-cols-3 gap-4 mb-4">
        {[].slice(0, 6).map((hit, index) => (
          <li key={index} className="list-none">
            <Hit hit={hit as unknown as ProductHit} />
          </li>
        ))}
      </div>
      <ShowAll close={close} />
    </div>
  )
}

export default DesktopHits
