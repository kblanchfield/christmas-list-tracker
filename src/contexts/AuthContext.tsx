import React, { createContext } from 'react'
import { IAuth } from '../models'

/** Custom Hooks */
import useAuthHandler from '../utils/custom-hooks/AuthHandler'

/** Utils */
import { DEFAULT_USER_AUTH } from '../constants'
import { getStoredUserAuth } from '../utils/Helpers'

export const authContext = createContext({
  auth: DEFAULT_USER_AUTH,
  setAuthStatus: (userAuth: IAuth) => {},
  setUnauthStatus: () => {}
})

const { Provider } = authContext

const AuthProvider = ({ children }: any) => {
    const { auth, setAuthStatus, setUnauthStatus } = useAuthHandler(getStoredUserAuth())

    return (
        <Provider value={{ auth, setAuthStatus, setUnauthStatus }}>
            {children}
        </Provider>
    )
}

export default AuthProvider