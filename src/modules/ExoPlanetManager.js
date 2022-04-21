const remoteURL = "http://localhost:8088"

//sends a fetch call to the JSON database to return all exoPlanets
export const getAllExoPlanets = () => {
    return fetch(`${remoteURL}/exoPlanets`)
    .then(res => res.json())
}
