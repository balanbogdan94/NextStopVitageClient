import React from 'react'
import { useHistory } from 'react-router'
import { signOutUser } from '../../firebase/api/authorization'

const Dashboard = () => {

    const history = useHistory()
    async function signOutPressed() {
        await signOutUser()
        history.push("/admin/login")
    }

    return (
        <div>
            <h1>I'm the admin</h1>
            <button onClick={signOutPressed}>Sign Out from here</button>
        </div>
    )
}

export default Dashboard
