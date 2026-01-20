import React, { useState, useEffect } from "react";
import type { User } from "../Types";

export default function FetchApi() {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const [searchText, setSearchText] = useState<string>("");

    async function FetchData() {
        try {
            setLoading(true)
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            if (!response.ok) {
                throw new Error("not able to get response")
            }
            const data: User[] = await response.json();
            setUsers(data);

        } catch (error) {
            setError("Error try again")
        }
        finally {
            setLoading(false)
        }
    }

    const filteredUsers = users.filter((user) => {
        const query = searchText.toLowerCase();

        return (
            user.name.toLowerCase().includes(query) ||
            user.email.toLowerCase().includes(query) ||
            user.phone.toLowerCase().includes(query) ||
            user.website.toLowerCase().includes(query)
        );
    });


    useEffect(() => {
        FetchData()
    }, [])



    return (
        <div>
            {error && <p>Error Fetching info !</p>}
            <input type="text" placeholder="search users" value={searchText}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value)} />

            {loading && <p>Loading data...</p>}
            {users.length > 0 ?
                filteredUsers?.map((user) => (
                    <div className="userDiv" key={user.id}>
                        <p>id:{user.id}</p>
                        <p>name:{user.name}</p>
                        <p>email:{user.email}</p>
                        <p>phone:{user.phone}</p>
                        <p>website:{user.website}</p>
                    </div>
                ))
                : !loading &&
                <p>No data found</p>
            }
        </div>
    )
}