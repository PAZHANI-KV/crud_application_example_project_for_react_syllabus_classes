import React from "react";
import { useParams } from "react-router-dom";
import BaseApp from "../core/Base";

export function UserDetails({ user }) {

    // Here, useParams is a function which when used will triger the particular index value of the particular view button 
    //which we are clicking.Hence the index value in user[idx] will dynbamically change and the view button of each user 
    //will dynamically display the output of that particular user.

    const { idx } = useParams();
    const person = user[idx];

    return (

        <BaseApp
            title={"User Details"}>

            <div className="user-content">
                <div className="user-card">
                    <h1>{person.name}</h1>
                    <p>BATCH : {person.batch}</p>
                    <p>E-MAIL : {person.email}</p>
                    <p>EXPERIENCE : {person.experience}</p>
                </div>
            </div>

        </BaseApp>

    )
}