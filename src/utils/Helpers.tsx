import { DEFAULT_USER_AUTH } from '../constants'
import { IAuth } from '../models'

const allowedNames = ['CLARE', 'KATE', 'KLAS', 'SALLY', 'PETER']

export const validateLoginForm = (name: string, password: string, setError: any): boolean => {
  // Check for undefined or empty input fields
  if (!name || !password) {
      setError("Please enter a valid name and password.")
      return false
  }
  // Validate name
  if (!allowedNames.includes(name.toUpperCase())) {
      setError("That name is not approved, sorry.")
      return false
  }
  return true
}

export const apiRequest = async (url: string, method: string, bodyParams: any): Promise<any> => {
  const response = await fetch(url, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: bodyParams ? JSON.stringify(bodyParams) : undefined
  })
  return await response.json()
}

export const getStoredUserAuth = (): IAuth => {
  const auth = window.sessionStorage.getItem("UserAuth")
  if (auth) {
    return JSON.parse(auth)
  }
  return DEFAULT_USER_AUTH
}
