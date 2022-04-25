const remoteURL = "http://localhost:8088"

export const getAllAbouts = () => {
    return fetch(`${remoteURL}/abouts`)
    .then(res => res.json())
}

export const getAboutById = (id) => {
    return fetch(`${remoteURL}/abouts/${id}`)
    .then(res => res.json())
}

export const getUsersById = (id) => {
    return fetch(`${remoteURL}/users/${id}`)
    .then(res => res.json())
}