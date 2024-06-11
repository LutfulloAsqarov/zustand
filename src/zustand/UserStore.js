import { create } from "zustand";

const userStore = create((set) => ({
    users: [],

    fetchUsers: async () => {
        let res = await fetch(
            "https://66458542b8925626f8921932.mockapi.io/api/v1/users"
        );
        let data = await res.json();
        set({ users: data });
    },

    addUser: async (user) => {
        await fetch(
            `https://66458542b8925626f8921932.mockapi.io/api/v1/users`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            }
        );

        set((state) => {
            const newUser = [...state.users, user];
            return { users: newUser };
        });
    },

    deleteUser: async (id) => {
        await fetch(
            `https://66458542b8925626f8921932.mockapi.io/api/v1/users/${id}`,
            {
                method: "DELETE",
            }
        );

        set((state) => ({
            users: state.users.filter((user) => user.id !== id),
        }));
    },

    editUser: (id, updatedUser) => {
        set((state) => {
            const updatedUsers = state.users.map((user) =>
                user.id === id ? { ...user, ...updatedUser } : user
            );
            return { users: updatedUsers };
        });
    },
}));

export default userStore;
