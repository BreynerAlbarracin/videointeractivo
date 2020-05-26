import env from '../env/env'

export async function Fetch(path, requestOptions) {
    return await fetch(env + path, requestOptions)
        .then(res => res.json())
        .catch(err => console.log(err))
}

export async function GetService(path) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };

    var response = await Fetch(path, requestOptions)

    if (!response) {
        response = {
            err: 2,
            text: "Servidor Inaccesible"
        }
    }

    return response
}

export async function PostService(path, body) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };

    var response = await Fetch(path, requestOptions)

    if (!response) {
        response = {
            err: 2,
            text: "Servidor Inaccesible"
        }
    }

    return response
}