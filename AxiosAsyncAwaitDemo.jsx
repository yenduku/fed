import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AxiosAsyncAwaitDemo() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const url = 'https://jsonplaceholder.typicode.com/user';

    const fetchUsers = async () => {
        try {
            const res = await axios.get(url);
            setUsers(res.data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h2>Users List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
}
