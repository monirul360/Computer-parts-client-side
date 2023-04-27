import { useEffect, useState } from "react";

const Usetoken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`https://computer-parts.onrender.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    const Accestoken = data.token;
                    localStorage.setItem('AccesToken', Accestoken);
                    setToken(Accestoken);
                })
        }
    }, [user])
    return [token];
};

export default Usetoken;