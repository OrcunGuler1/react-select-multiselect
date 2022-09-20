import styles from './select.module.css'

const Select = ({ value, onChange, options }: SelectProps) => {
  return (
    <div tabIndex={0} className={styles.container}>
      <span className={styles.value}></span>
      <button className={styles['clear-btn']}>&times;</button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={styles.options}>
        {options.map(option => (
          <li key={option.value} className={styles.option}>
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Select

type SelectProps = {
  value?: SelectOption
  onChange: (value?: SelectOption) => void
  options: SelectOption[]
}

type SelectOption = {
  value: number
  label: string
}
