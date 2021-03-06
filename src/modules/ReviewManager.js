const remoteURL = "http://localhost:8088"


export const getReviewsByExoPlanet = (id) => {
    return fetch(`${remoteURL}/reviews?_expand=exoPlanet&_expand=user&exoPlanetId=${id}`)
    .then(res => res.json())
}

export const getReviewById = (id) => {
    return fetch(`${remoteURL}/reviews/${id}?_expand=exoPlanet&_expand=user`)
    .then(res => res.json())
}

export const deleteReview = id => {
    return fetch(`${remoteURL}/reviews/${id}`, {
        method: "DELETE"
    }).then(res => res.json())
}

export const updateReview  = (editedReview) => {
    return fetch(`${remoteURL}/reviews/${editedReview.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedReview)
    }).then(data => data.json());
  }

  export const addReview = newReview => {
    return fetch(`${remoteURL}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newReview)
    }).then(res => res.json())
  }