import axios from "axios"

const url = "http://localhost:5000/post"

export const fetchPosts = () => axios.get(url)
export const createPost = (post) => axios.get(url, post)