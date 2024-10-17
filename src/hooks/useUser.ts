import { User } from '@/domain/model/User';
import { useState } from 'react';

type UserHook = {
    users: User[];
    addUser: (user: User) => void;
    updateUser: (user: User) => void;
    removeUser: (user: User) => void;
};

export default function useUser(): UserHook {
    const [users, setUsers] = useState<User[]>([
        {
            id: 1,
            name: 'Wolf'
        },
        {
            id: 2,
            name: 'Wolf2'
        }
    ]);
    const addUser = (user: User) => {
        setUsers([...users, user]);
    };
    const updateUser = (user: User) => {
        setUsers(users.map(u => u.id === user.id ? user : u));
    };
    const removeUser = (user: User) => {
        setUsers(users.filter(u => u.id !== user.id));
    }

    return {
        users,
        addUser,
        updateUser,
        removeUser
    };
}
