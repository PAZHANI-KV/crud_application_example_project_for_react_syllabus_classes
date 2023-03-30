import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BaseApp from "../core/Base";
import AddUser from "./AddUser";

export default function UserComponent({ user, setUser }) {

const history = useHistory();
   
    // function 
    const deleteUser = (idx) => {
        const alterList = user.filter((per, id) => per.id != idx)
        setUser(alterList);
    }

    return (
        <BaseApp
            title="User Details">
            {/* In order to add details of more students, we take user and setUser as props inside the AddUser tag as shown below so that these 
            user and SetUser can now be passed through AddUser component(which is passed in line 3 of AddUser.js file) and the newly entered  
            student data under the object name newUser can be added to already existing students data using spread operator (which is shown in
            the 26th line of AddUser.js file) */}
            {/* <AddUser user={user} setUser={setUser} /> */}
            <div className="user-content">
                {user.map((person, idx) => (
                    <div key={idx} className="user-card">
                        <h1>{person.name}</h1>
                        <p>BATCH : {person.batch}</p>
                        <p>E-MAIL : {person.email}</p>
                        <p>EXPERIENCE : {person.experience}</p>

                        <div className="btn-grp">

                            <button className="btn">Edit</button>

                            <button className="btn"
                                onClick={() => history.push(`/user${idx}`)}
                            >View</button>

                            <button className="btn"
                                onClick={() => deleteUser(person.id)}  >Delete</button>

                        </div>

                    </div>
                ))}
            </div>
        </BaseApp>
    )
}