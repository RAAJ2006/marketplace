import React from 'react'
import LoggedInHeader from "../components/LoggedInHeader"
import { SessionProvider } from '../context/SessionContext'

const layout = ({ children }) => {
    return (
        <SessionProvider>
            <LoggedInHeader />
            {children}
        </SessionProvider>
    )
}

export default layout