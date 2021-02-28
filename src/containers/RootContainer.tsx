import React, { useContext } from 'react'
import { authContext } from "../contexts/AuthContext"
import LogInPage from '../components/LogInPage'
import Lists from '../components/Lists'

function RootContainer(){
    const { auth } = useContext(authContext)

    return (
        <>
            {auth.id
                ? <Lists />
                : <LogInPage />
            }
        </>
    )
}

export default RootContainer