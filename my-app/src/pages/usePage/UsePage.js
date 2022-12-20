import React from 'react';
import {useDispatch} from "react-redux";

function UsePage() {
    const dispatch = useDispatch()

    const changeTitle = () => {
        dispatch({
            type: "INCREMENT"
        })

    }
    return (
        <div>
            <button onClick={changeTitle}>+</button>
        </div>
    );
}

export default UsePage;