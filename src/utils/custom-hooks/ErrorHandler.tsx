import { useState } from 'react'

const useErrorHandler = (initialState: any) => {
  const [error, setError] = useState<any>(initialState)

  const showError = (errorMessage: any) => {
    setError(errorMessage)
    window.setTimeout(() => {
      setError(null)
    }, 3000)
  }

  return { error, showError }
}

export default useErrorHandler