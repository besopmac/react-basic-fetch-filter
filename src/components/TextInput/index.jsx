import './styles.css'

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      type="search"
      value={searchValue}
      className="text-input"
      onChange={handleChange}
    />
  )
}