import { HandlerProps } from './types/types'

const handler = ({
  e,
  options,
  isOpen,
  setIsOpen,
  selectOption,
  highlightIndex,
  setHighlightIndex,
}: HandlerProps) => {
  switch (e.code) {
    case 'Enter':
    case 'Space':
      setIsOpen(prev => !prev)
      if (isOpen) selectOption(options[highlightIndex])
      break
    case 'ArrowUp':
    case 'ArrowDown': {
      if (!isOpen) {
        setIsOpen(true)
        break
      }

      const newValue = highlightIndex + (e.code === 'ArrowDown' ? 1 : -1)
      if (newValue >= 0 && newValue < options.length) {
        setHighlightIndex(newValue)
      }
      break
    }
    case 'Escape':
      setIsOpen(false)
      break
  }
}

export default handler
