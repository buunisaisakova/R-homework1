
const initialState ={
    title: "0",

}

export default function reducer(state = initialState, action) {

    if (action.type === "DECREMENT") {
        return {...state, title: -1}
    }

    else if (action.type === "INCREMENT"){
        return {...state, title: +1}
    }

    return state
}