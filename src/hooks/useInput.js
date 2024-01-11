import { useState } from 'react'

export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue)
  const [didEdit, setDidEdit] = useState(false)

  const handleInputChange = (event) => {
    setEnteredValue(event.target.value)
    setDidEdit(false)
  }

  const handleInputBlur = () => {
    setDidEdit(true)
  }

  const valueIsValid = validationFn(enteredValue)

  return {
    value: enteredValue,
    handleInputChange,
    handleInputBlur,
    setValue: setEnteredValue,
    hasError: didEdit && !valueIsValid
  }
}
