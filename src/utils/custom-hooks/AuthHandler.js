import { useState } from 'react'
import { DEFAULT_USER_AUTH } from '../../constants'

const useAuthHandler = initialState => {
    const [auth, setAuth] = useState(initialState)

    const setAuthStatus = userAuth => {
        window.sessionStorage.setItem("UserAuth", JSON.stringify(userAuth))
        setAuth(userAuth)
    }

    const setUnauthStatus = () => {
        window.sessionStorage.clear()
        setAuth(DEFAULT_USER_AUTH)
    }

    return {
        auth,
        setAuthStatus,
        setUnauthStatus
    }
}

export default useAuthHandler