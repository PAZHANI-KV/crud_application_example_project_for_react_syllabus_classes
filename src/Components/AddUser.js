import React, { useState } from "react";

export default function AddUser() {

    // defining states for all the inputs
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [batch, setBatch] = useState("")
    const [email, setEmail] = useState("")
    const [experience, setExperience] = useState("")

const addNewUser = () => {
    const newUser = {
        id,
        name,
        batch,
        email,
        experience
    }
}

    return (
        <div>


            <input
                placeholder="id"
                value={id}
                onChange={(event)=> setId(event.target.value)}
            />


            <input
                placeholder="name" 
                value={name}
                onChange={(event)=> setName(event.target.value)}
            />


            <input
                placeholder="batch"
                value={batch}
                onChange={(event)=>setBatch(event.target.value)}
            />


            <input
                placeholder="email"
                value={email}
                onChange={(event)=> setEmail(event.target.value)}
            />


            <input
                placeholder="experience"
                value={experience}
                onChange={(event)=>setExperience(event.target.value)}
            />


            <button
                onClick={addNewUser}
            >Add</button>


        </div>
    )
}