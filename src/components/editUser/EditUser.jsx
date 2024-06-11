import React from "react";
import "./editUser.scss";
const EditUser = ({ children, data, setClose }) => {
    return (
        <>
            <div className="overlay" onClick={() => setClose(null)}></div>
            <div className="modal">{children}</div>
        </>
    );
};

export default EditUser;
