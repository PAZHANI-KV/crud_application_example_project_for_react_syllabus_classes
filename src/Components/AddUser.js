import React, { useState } from "react";
import BaseApp from "../core/Base";

export default function AddUser({ user, setUser }) {

    // defining states for all the inputs
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [batch, setBatch] = useState("")
    const [email, setEmail] = useState("")
    const [experience, setExperience] = useState("")
    // The following usestate line is declared to explain just the concept of onchange event and also to explain the concept
    // that if we use clr as usestate tthen we can simultaneously change the value of usestate as well as the backgroundcolor
    // if we declare the clr for background too!this is explained with code im[lementation mentioned below in the lines of
    // 64 to 69

    // const [clr, setClr] = useState("")

    const addNewUser = () => {
        const newUser = {
            id,
            name,
            batch,
            email,
            experience
        }
        setUser([...user, newUser]);
        // Here in above line, spread operator which is a method of js is used. Here the already existing data in the setUser will be 
        //  concatinated with the newly entered student data rather than the old data of setUser being replaced by the new student's data!
        setId("")
        setName("")
        setBatch("")
        setEmail("")
        setExperience("")

        // The above 5 lines indicate that after setUser is concadinated with new student data(i.e, immediately after clicking the add button),
        // the entry boxes must be emptied like before.That is why these lines are entered within the same addNewUser function after setUser 
        // is concadinated

    }

    return (
        <BaseApp

            title={"Add a New User!"}>

            <div>


                <input
                    placeholder="id"
                    type="number"
                    value={id}
                    onChange={(event) => setId(event.target.value)}
                />


                <input
                    placeholder="name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />


                <input
                    placeholder="batch"

                    value={batch}
                    onChange={(event) => setBatch(event.target.value)}
                />


                <input
                    placeholder="email"
                    type="text"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />


                <input
                    placeholder="experience"
                    type="number"
                    value={experience}
                    onChange={(event) => setExperience(event.target.value)}
                />

                {/* <input
placeholder="ex:red"
value={clr}
style={{background:clr}}
onChange={(event) => setClr(event.target.value)}
/> */}


                <button
                    onClick={addNewUser}
                >Add</button>


            </div>
        </BaseApp>

    )
}