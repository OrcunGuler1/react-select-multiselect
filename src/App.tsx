import { useState } from 'react'
import Select from './components/Select/Select'
import type { SelectOption } from './types/types'
const options = [
  { value: 1, label: 'One' },
  { value: 2, label: 'Two' },
  { value: 3, label: 'Three' },
  { value: 4, label: 'Four' },
  { value: 5, label: 'Five' },
  { value: 6, label: 'Six' },
]
function App() {
  const [value, setValue] = useState<SelectOption | undefined>(options[0])
  const [multiValue, setMultiValue] = useState<SelectOption[]>([options[0]])
  return (
    <>
      <Select onChange={opt => setValue(opt)} options={options} value={value} />
      <br />
      <br />
      <Select
        onChange={opt => setMultiValue(opt)}
        options={options}
        value={multiValue}
        multi
      />
    </>
  )
}

export default App
