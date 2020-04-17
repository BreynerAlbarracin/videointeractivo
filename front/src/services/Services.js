import env from '../env/env'

async function Fetch(path, requestOptions) {
    return await fetch(env + path, requestOptions)
        .then(res => res.json())
        .catch(err => console.log(err))
}

async function PostService(path, body) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };

    return await Fetch(path, requestOptions)
}

export async function LoginService(params) {
    return await PostService('/login', params)
}