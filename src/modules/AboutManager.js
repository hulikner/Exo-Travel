const remoteURL = "http://localhost:8088"

export const getAllAbout
 = () => {
    return fetch(`${remoteURL}/abouts`)
    .then(res => res.json())
}