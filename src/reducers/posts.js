
export const reducers = (posts = [], action) => {
    switch (action.type) {
        case "GET_ALL":
            return action.payload

        default:
            return posts
    }
}