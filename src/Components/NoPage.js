import React from 'react'
import { useHistory } from 'react-router-dom'

export function NoPage() {

    const history = useHistory();

    return (

        <div>

            <h1>Hi, you have entered wrong URL.</h1>

            <button
                onClick={() => history.push("/")}>
                Dashboard</button>

        </div>

    )
}

// This coding is used for redirecting the page to dashboard if we entered a wrong url! This page is exported and used 
// in App.js inside a Route