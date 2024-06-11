import React from "react";
import wishlistStore from "../../zustand/wishlistStore";

const Wishlist = () => {
    const wishlist = wishlistStore((state) => state.wishlist);

    const toggleWishlist = wishlistStore((state) => state.toggle);

    return (
        <div>
            <div className="users__wrapper">
                {wishlist
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
        </div>
    );
};

export default Wishlist;
