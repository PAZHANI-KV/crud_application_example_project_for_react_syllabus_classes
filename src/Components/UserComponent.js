import React, { useState } from "react";
import BaseApp from "../core/Base";
import { data } from "../Data/data";
import AddUser from "./AddUser";


export default function UserComponent() {
    const [user, setUser] = useState(data);

    // function 
const deleteUser = (idx) => {
   const alterList = user.filter((per, id) => per.id != idx)
 setUser(alterList);
}

    return (
        <BaseApp
            title="User Details">
                <AddUser/>
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
                          onClick={() => deleteUser(person.id)}  >Delete</button>
                        </div>

                    </div>
                ))}
            </div>
        </BaseApp>
    )
}