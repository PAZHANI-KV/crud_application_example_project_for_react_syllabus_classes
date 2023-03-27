import React from "react";

export default function BaseApp({ title, styles, children }) {
    return (
        <div>
            <div>
                <div className="nav-styles">nav bar</div>
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

