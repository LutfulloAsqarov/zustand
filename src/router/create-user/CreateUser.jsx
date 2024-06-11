import React, { useState } from "react";
import "./CreateUser.css";
// import { useDispatch } from "react-redux";
import userStore from "../../zustand/UserStore";

// const API_URL = "https://66458542b8925626f8921932.mockapi.io/api/v1";

function CreateUser() {
    // const [formData, setFormData] = useState(initialState);
    // const userData = useSelector((state) => state.user);
    // const dispatch = useDispatch();

    const addUser = userStore((state) => state.addUser);

    const handleSubmit = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);
        let user = Object.fromEntries(formData.entries());

        let { firstName, email, phone } = user;

        let newUser = {
            id: new Date().getTime(),
            firstName,
            email,
            phone,
        };
        addUser(newUser);
    };

    return (
        <div className="create__user">
            <h2>Create User</h2>
            <form
                className="create__user-form"
                onSubmit={handleSubmit}
                action=""
            >
                <input type="text" name="firstName" placeholder="name" />
                <input type="text" name="email" placeholder="email" />
                <input type="number" name="phone" placeholder="phone" />

                <button type="submit">Create</button>
            </form>
        </div>
    );
}

export default CreateUser;
