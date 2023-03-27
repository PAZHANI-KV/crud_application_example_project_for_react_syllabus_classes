import React from "react";

export default function AddUser() {
    return (
        <div>

            <input placeholder="id" />
            <input placeholder="name" />
            <input placeholder="batch" />
            <input placeholder="email" />
            <input placeholder="experience" />
            <button
                onClick={() => console.log("clicked")}
            >Add</button>

        </div>
    )
}