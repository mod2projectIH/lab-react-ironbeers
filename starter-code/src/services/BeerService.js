import axios from "axios"

const http = axios.create({baseURL: "https://ih-beers-api2.herokuapp.com/beers"})

const list = () => http.get("/").then(res => res.data)
const detail = (id) => http.get(`/${id}`).then(res => res.data)
const random = () => http.get("/random").then(res => res.data)
const searchBeer = (param) => http.get(`/search?q=${param}`).then(res => res.data)
const newBeer = (beer) => http.post(`/new`, beer)

export default {list, detail, random, searchBeer, newBeer}
