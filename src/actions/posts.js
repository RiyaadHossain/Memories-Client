import * as api from "../api/index"

export const getPosts = async dispatch => {
    try {
        const { data } = await api.fetchPosts()
        console.log(data)
        dispatch({ type: "GET_ALL", payload: data })
    } catch (error) {
        console.log(error)
    }
}