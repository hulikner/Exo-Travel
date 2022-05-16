const remoteURL = "http://localhost:8088"


export const getAllItineraries = () => {
    return fetch(`${remoteURL}/itineraries?_expand=exoPlanet&_expand=user&_sort=return&_order=desc`)
    .then(res => res.json())
}

export const getItineraryById = (id) => {
    return fetch(`${remoteURL}/itineraries/${id}?_expand=exoPlanet&_expand=user`)
    .then(res => res.json())
}
export const getItinerariesByUserId = (id) => {
    return fetch(`${remoteURL}/itineraries?_expand=exoPlanet&_expand=user&_sort=return&_order=desc&userId=${id}`)
    .then(res => res.json())
}

export const deleteItinerary = (id) => {
  console.log(id)
    return fetch(`${remoteURL}/itineraries/${id}`, {
        method: "DELETE"
    }).then(res => res.json())
}

export const updateItinerary  = (editedItinerary) => {
    return fetch(`${remoteURL}/itineraries/${editedItinerary.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedItinerary)
    }).then(data => data.json());
  }

  export const addItinerary = newItinerary => {
    return fetch(`${remoteURL}/itineraries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newItinerary)
    }).then(res => res.json())
  }