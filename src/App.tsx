import Select from './components/Select/Select'
const options = [
  { value: 1, label: 'One' },
  { value: 2, label: 'Two' },
  { value: 3, label: 'Three' },
  { value: 4, label: 'Four' },
  { value: 5, label: 'Five' },
  { value: 6, label: 'Six' },
]
function App() {
  return <Select onChange={() => {}} options={options}></Select>
}

export default App
