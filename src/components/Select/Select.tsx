import styles from './select.module.css'
import type { SelectOption, SelectProps } from '../../types/types'
import { useEffect, useRef, useState } from 'react'
import handler from '../../helper'
const Select = ({ multi, value, onChange, options }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [highlightIndex, setHighlightIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const clearOpts = () => {
    multi ? onChange([]) : onChange(undefined)
  }

  const selectOption = (option: SelectOption) => {
    if (multi) {
      if (value?.includes(option)) {
        onChange(value.filter(opt => opt !== option))
      } else {
        onChange([...value, option])
      }
    } else {
      if (value !== option) onChange(option)
    }
  }

  const isOptSelected = (option: SelectOption) => {
    return multi ? value?.includes(option) : value === option
  }

  useEffect(() => {
    if (isOpen) setHighlightIndex(0)
  }, [isOpen])

  useEffect(() => {
    const handle = (e: KeyboardEvent) =>
      handler({
        e,
        options,
        isOpen,
        setIsOpen,
        selectOption,
        highlightIndex,
        setHighlightIndex,
      })
    containerRef.current?.addEventListener('keydown', handle)

    return () => {
      containerRef.current?.removeEventListener('keydown', handle)
    }
  }, [isOpen, highlightIndex, options])

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      className={styles.container}
      onClick={() => setIsOpen(prev => !prev)}
      onBlur={() => setIsOpen(false)}
    >
      <span className={styles.value}>
        {multi
          ? value?.map(v => (
              <button
                key={v.value}
                onClick={e => {
                  e.stopPropagation()
                  selectOption(v)
                }}
                className={styles['option-badge']}
              >
                {v.label}
                <span className={styles['remove-btn']}>&times;</span>
              </button>
            ))
          : value?.label}
      </span>
      <button
        className={styles['clear-btn']}
        onClick={e => {
          e.stopPropagation()
          clearOpts()
        }}
      >
        &times;
      </button>
      <div className={styles.divider} />
      <div className={styles.caret} />
      <ul className={`${styles.options} ${isOpen ? styles.open : ''}`}>
        {options.map((option, index) => (
          <li
            key={option.value}
            onMouseEnter={() => setHighlightIndex(index)}
            className={`${styles.option} ${
              isOptSelected(option) ? styles.selected : ''
            } ${highlightIndex === index ? styles.highlighted : ''}`}
            onClick={e => {
              e.stopPropagation()
              selectOption(option)
              setIsOpen(false)
            }}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Select
