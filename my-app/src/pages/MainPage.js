import React from 'react';
import {useSelector, useDispatch} from "react-redux";
function MainPage() {

    const dispatch = useDispatch()
    const title = useSelector(state => state.title)

    const changeTitle = () => {
        dispatch({
            type: "DECREMENT"
        })

    }


    return (
        <div>
            <h1>{title}</h1>
            <button onClick={changeTitle}>-</button>

        </div>
    );
}

export default MainPage;