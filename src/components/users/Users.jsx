import React, { useEffect, useState } from "react";
import "./Users.css";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import { useDispatch } from "react-redux";
import userStore from "../../zustand/UserStore";
import EditUser from "../editUser/EditUser";
import wishlistStore from "../../zustand/wishlistStore";

let initialState = {
    firstName: "",
    email: "",
    phone: "",
};

function Users() {
    const userData = userStore((state) => state.users);
    const fetchUsers = userStore((state) => state.fetchUsers);
    const deleteUser = userStore((state) => state.deleteUser);
    const editUser = userStore((state) => state.editUser);
    const users = userStore((state) => state.users);

    const wishlist = wishlistStore((state) => state.wishlist);
    const toggleWishlist = wishlistStore((state) => state.toggle);

    const [userId, setUserId] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const [formData, setFormData] = useState({
        firstName: "",
        email: "",
        phone: "",
    });

    useEffect(() => {
        if (userId) {
            const user = users.find((user) => user.id === userId);
            setFormData({
                firstName: user.firstName,
                email: user.email,
                phone: user.phone,
            });
        }
    }, [userId]);

    const handleChange = (e) => {
        const { value, name } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        editUser(userId, formData);
        setUserId(null);
    };

    console.log(wishlist);

    return (
        <>
            <div className="users__wrapper">
                {userData
                    ?.map((user) => (
                        <div key={user.id} className="users__card">
                            <img src={user.avatar} alt="img" />
                            <h3>{user.firstName}</h3>
                            <p>{user.email}</p>
                            <p>{user.phone}</p>
                            <button onClick={() => deleteUser(user.id)}>
                                Remove
                            </button>
                            <button
                                className="edit"
                                onClick={() => setUserId(user.id)}
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => toggleWishlist(user)}
                                className="follow"
                            >
                                follow
                            </button>
                        </div>
                    ))
                    .reverse()}
            </div>
            {userId ? (
                <EditUser data={userId} setClose={setUserId}>
                    <form action="" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <button>Save</button>
                    </form>
                </EditUser>
            ) : (
                <></>
            )}
        </>
    );
}

export default Users;
