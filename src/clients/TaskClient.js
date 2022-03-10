export const getUsers = ( ) => {
    return  fetch('http://localhost:8080/v1/auth/users.json')
    .then( res => {
        alert(res);
        if (!res.ok) throw new Error('Response is NOT ok');
        return res.json();
    })
}

export const getTasks = ( ) => {
    return  fetch('http://localhost:8080/v1/auth/tasks.json')
    .then( res => {
        if (!res.ok) throw new Error('Response is NOT ok');
        return res.json();
    })
}

export const postTask = ( newTask ) => {
    return  fetch('http://localhost:8080/v1/auth/tasks.json', {
                method: 'POST',
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify(newTask)
            }).then( res => {
                if (!res.ok) throw new Error('Response is NOT ok');
            });
}

export const getUserByUserName = ( userName ) => {
    return  fetch(`http://localhost:8080/v1/auth/users/${userName}.json`)
    .then( res => {
        if (!res.ok) throw new Error('Response is NOT ok');
        return res.json();
    })
}

export const putUser = ( user, userName ) => {
    return  fetch(`http://localhost:8080/v1/auth/users/${userName}.json`, {
                method: 'PUT',
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            }).then( res => {
                if (!res.ok) throw new Error('Response is NOT ok');
            });
}