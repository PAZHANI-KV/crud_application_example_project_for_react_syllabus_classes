import React from "react";
import { useHistory } from "react-router-dom";

export default function BaseApp({ title, styles, children }) {

    // There is a component called "history" in Router. Before using it, we have to import history first. It will also be in react router dom only.
    // How to import history is shown in the following line.This history component is a prefixed component in router which is more or less like a 
    // href to redirect to another page when clicked a particular button and the event of history component is triggered. this execution is shown 
    // in line 21.

    const history = useHistory();

    return (
        <div>
            <div>

                <div className="nav-styles">
                   
                    <span>
                        <button

// Here push is a functional method. We are passing the route path (url path) "/adduser" as parameter.So that on clicking the button, the page
// be redirected to that url's page. 

                            onClick={() => history.push("/adduser")}
                        >Add User</button>
                    </span>
                   
                    <span>
                        <button
                            onClick={() => history.push("/")}
                        >Dash Board</button>
                    </span>

                </div>

                <div className="title">{title}</div>

            </div>

            {/* There is a property called children in react.If we call children in the function and declarew it inside a tag, then whatever we are typing in the 
component inside the tag in App.JS will be set for children it will be displayed.Here children is a keyword like prop*/}

            <div className="circle" >
                {children}

                <footer>
                    Contact Us
                    <div>email: react@email.com</div>
                    <div>phone:98******64 </div>
                </footer>

            </div>

        </div>

    )

}

