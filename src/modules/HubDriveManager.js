const remoteURL = "http://localhost:8088"

export const getAllHubDrives = () => {
    return fetch(`${remoteURL}/hubDrives`)
    .then(res => res.json())
}

export const getHubDriveById = (id) => {
    return fetch(`${remoteURL}/hubDrives/${id}`)
    .then(res => res.json())
}