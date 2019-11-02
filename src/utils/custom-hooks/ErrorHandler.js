import { useState } from 'react'

const useErrorHandler = initialState => {
  const [error, setError] = useState(initialState)

  const showError = errorMessage => {
    setError(errorMessage)
    console.log("error in error handlesr: ", errorMessage)
    window.setTimeout(() => {
      setError(null)
    }, 3000)
  }

  return { error, showError }
}

export default useErrorHandler