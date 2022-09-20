type SelectOption = {
  label: string
  value: string | number
}

type MultipleSelectProps = {
  multi: true
  value: SelectOption[]
  onChange: (value: SelectOption[]) => void
}

type SingleSelectProps = {
  multi?: false
  value?: SelectOption
  onChange: (value: SelectOption | undefined) => void
}

type SelectProps = {
  options: SelectOption[]
} & (SingleSelectProps | MultipleSelectProps)

type HandlerProps = {
  e: KeyboardEvent
  options: SelectOption[]
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  selectOption: (option: SelectOption) => void
  highlightIndex: number
  setHighlightIndex: React.Dispatch<React.SetStateAction<number>>
}

export type { SelectProps, SelectOption, HandlerProps }
