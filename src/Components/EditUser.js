import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import BaseApp from '../core/Base'

const EditUser = ({ user, setUser }) => {

    const [idx, setIdx] = useState("")
    const [name, setName] = useState("")
    const [batch, setBatch] = useState("")
    const [email, setEmail] = useState("")
    const [experience, setExperience] = useState("")

    const { id } = useParams();
    const history = useHistory()

    const selectedUser = user.find((per, index) => per.id === id)

    useEffect(() => {
        setIdx(selectedUser.id)
        setName(selectedUser.name)
        setBatch(selectedUser.batch)
        setEmail(selectedUser.email)
        setExperience(selectedUser.experience)
    }, [])

    // The following line deals with the operation of editing the user details in the editing page!
    const updateUser = () => {

        // .find is a array method. It will return a object on using it.Here in below line, by using the .find method the id of all the users is
        // compared with the id of the selected user and the data of selected user is found. Then the data of the selected user alone will be returned
        // as an object of data. 


        const editIndex = user.findIndex(per => per.id === id)
        console.log(editIndex)


        const editedData = {
            idx,
            name,
            batch,
            email,
            experience
        }

        // updating the user data after editing is in below lines

        user[editIndex] = editedData;
        setUser([...user])
        history.push("/")

    }

    return (
        <BaseApp

            title={"Edit the existing user!"}>

            <div>


                <input
                    placeholder="id"
                    type="number"
                    value={idx}
                    onChange={(event) => setIdx(event.target.value)}
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


                <button
                    onClick={() => updateUser()}
                >Edit</button>


            </div>
        </BaseApp>

    )
}

export default EditUser