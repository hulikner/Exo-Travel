# Exo-Travel

## Setup: Follow these steps exactly

1. Clone the Exo-Travel-Database
1. `cd` into the directory it creates for the database
1. Run `json-server -p 8088 -w database.json` from the `api` directory.
1. Clone this repository
1. `cd` into the directory it creates
1. Run `npm install` and wait for all dependencies to be installed.
1. Run `npm start` to verify that installation was successful.


## What is Exo-Travel?

Exo-Travel is a travel app for different Exo-Planets around the universe. After the founder Hulikner cracked FTL, Faster than Light, travel, he quickly monopolized all transportation around the universe for Earth inhabitants.


### users
![Login](./Images/Exo-Travel-Login.png)
```json
{ 
   "id": 1, 
   "firstName": "Genius", 
   "lastName": "Hulikner", 
   "email": "me@me.com" 
}
```

### exoPlanets

```json
{
   "id": 1,
   "name": "Earth",
   "mass": "1",
   "radius": "1",
   "eqTemp": "1",
   "orbit": "365",
   "lightYears": "0",
   "rating": 0
}
```

### itineraries

```json
{
   "id": 1,
   "usersId": 1,
   "exoPlanetsId": 1,
   "departure": 1650931200,
   "return": 1651536000,
   "mode": "Warp-Drive"
}
```
### receipts

```json
{
   "id": 1,
   "usersId": 1,
   "exoPlanetsId": 1,
   "departure": 1650931200,
   "return": 1651536000,
   "mode": "Warp-Drive",
   "itinerariesId": 1
}
```
### hubDrives

```json
{
   "id": 1,
   "name": "The Citadel",
   "detail": "The Citadel is the largest artificial structure in the galaxy, with a population of 13.2 million intelligent beings from across the Milky Way galaxy, and uses centrifugal force to create artificial gravity for its inhabitants. Initially, it was discovered by the asari and the salarians, the earliest post-Prothean races to discover the mass relays - megastructures scattered throughout the galaxy that facilitate FTL travel. Following this, an executive committee known as the Citadel Council was created, with the station functioning as the seat of galactic government. The Council holds great sway in the galaxy, and are recognized as an authority by most of explored space.",
   "cardDetail": "The largest artificial structure in the galaxy.",
   "pic": "./Images/Hub.jpg"
}
```
### abouts

```json
{
   "id": 1,
   "name": "Exo-Travel",
   "cardDetail": "The Space Frontier Corporation",
   "detail": "Exo-Travel is an American space advocacy corporation organized to promote the interests of increased involvement of the private sector, in collaboration with government, in the exploration and development of space. Its advocate members design and lead a collection of projects with goals that align to the organization's goals as described by its credo. Exo-Travel is an organization of people dedicated to opening the Space Frontier to human settlement. Our goals include protecting the Earths fragile biosphere and creating a freer and more prosperous life for each generation by using the unlimited energy and material resources of space. Our purpose is to unleash the power of free enterprise and lead a united humanity permanently into the Universe.",
   "pic": "./Images/Hub.jpg"
}
```
### reviews

```json
{
   "id": 1,
   "usersId": 2,
   "date": 1650937710.123,
   "exoPlanetsId": 2,
   "message": "Really loved this planet and the wormhole shuttle was crazy awesome!",
   "stars": 5
}
```

