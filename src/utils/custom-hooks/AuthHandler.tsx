import { useState } from 'react'
import { DEFAULT_USER_AUTH } from '../../constants'
import { IAuth } from '../../models'

const useAuthHandler = (initialState: IAuth) => {
    const [auth, setAuth] = useState<IAuth>(initialState)

    const setAuthStatus = (userAuth: IAuth) => {
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