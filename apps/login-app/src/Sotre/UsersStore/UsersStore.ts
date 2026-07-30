import { create } from "zustand";
export interface IUser {
    firstname: string
    lastname: string
    email: string
}
interface UserStore {
    users: IUser[]
    setUsers: (user: IUser) => void
}
const useUserStore = create<UserStore>()(
    (set) => ({
        users: [],
        setUsers: (user) => set((state) => ({
            users: [...state.users, user]
        }))
    })
);
export default useUserStore