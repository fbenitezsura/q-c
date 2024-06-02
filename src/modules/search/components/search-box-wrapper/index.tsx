import { useRouter } from "next/navigation"
import {
  ChangeEvent,
  FormEvent,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react"

export type ControlledSearchBoxProps = React.ComponentProps<"div"> & {
  inputRef: RefObject<HTMLInputElement>
  isSearchStalled: boolean
  onChange(event: ChangeEvent): void
  onReset(event: FormEvent): void
  onSubmit?(event: FormEvent): void
  close: () => void
  placeholder?: string
  value: string
}

type SearchBoxProps = {
  children: (state: {
    value: string
    inputRef: RefObject<HTMLInputElement>
    isSearchStalled: boolean
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    onReset: () => void
    placeholder: string
  }) => React.ReactNode
  placeholder?: string
}

const SearchBoxWrapper = ({
  children,
  placeholder = "Search products...",
  ...rest
}: SearchBoxProps) => {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const router = useRouter()

  const onReset = () => {
    setValue("")
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }

  const onSubmit = () => {
    if (value) {
      router.replace(`/search/${value}`)
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const state = {
    value,
    inputRef,
    isSearchStalled : false,
    onChange,
    onSubmit,
    onReset,
    placeholder,
  }

  return children(state) as React.ReactElement
}

export default SearchBoxWrapper
