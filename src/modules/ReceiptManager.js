const remoteURL = "http://localhost:8088"


export const getAllReceipts = () => {
    return fetch(`${remoteURL}/receipts?_expand=exoPlanets&_expand=users&_sort=return&_order=desc`)
    .then(res => res.json())
}

export const getReceiptById = (id) => {
    return fetch(`${remoteURL}/receipts/${id}?_expand=exoPlanets&_expand=users&_expand=itineraries`)
    .then(res => res.json())
}

export const deleteReceipt = id => {
    return fetch(`${remoteURL}/receipts/${id}`, {
        method: "DELETE"
    }).then(res => res.json())
}

export const updateReceipt  = (editedReceipt) => {
    return fetch(`${remoteURL}/receipts/${editedReceipt.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedReceipt)
    }).then(data => data.json());
  }

  export const addReceipt = newReceipt => {
    return fetch(`${remoteURL}/receipts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newReceipt)
    }).then(res => res.json())
  }

  export const getReceiptByItineraryId = (id) => {
    return fetch(`${remoteURL}/receipts?_expand=exoPlanets&_expand=users&_expand=itineraries&itinerariesId=${id}`)
    .then(res => res.json())
}