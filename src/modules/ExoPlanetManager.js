const remoteURL = "http://localhost:8088"

export const getAllExoPlanets = () => {
    return fetch(`${remoteURL}/exoPlanets`)
    .then(res => res.json())
}

export const updateExoPlanet  = (editedPlanet) => {
    return fetch(`${remoteURL}/exoPlanets/${editedPlanet.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedPlanet)
    }).then(data => data.json());
  }
  
export const getAllExoPlanetsByLightYearsAsc = () => {
    return fetch(`${remoteURL}/exoPlanets&_sort=lightYears&order=asc`)
    .then(res => res.json())
}
export const getAllExoPlanetsByLightYearsDesc = () => {
    return fetch(`${remoteURL}/exoPlanets&_sort=lightYears&order=desc`)
    .then(res => res.json())
}

export const getExoPlanetById = (id) => {
    return fetch(`${remoteURL}/exoPlanets/${id}`)
    .then(res => res.json())
}