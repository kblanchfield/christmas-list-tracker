import { DEFAULT_USER_AUTH } from '../constants'

const allowedNames = ['CLARE', 'KATE', 'KLAS', 'SALLY', 'PETER']

export const validateLoginForm = (name, password, setError) => {
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

export const apiRequest = async (url, method, bodyParams) => {
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

export const getStoredUserAuth = () => {
  const auth = window.sessionStorage.getItem("UserAuth")
  if (auth) {
    return JSON.parse(auth)
  }
  return DEFAULT_USER_AUTH
}
