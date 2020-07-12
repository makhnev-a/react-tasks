import React, { useEffect, useRef, useState } from "react";

const Counter = () => {
    const [num, setNum] = useState(0);
    const [title, setTitle] = useState('');
    const titleRef = useRef();

    const addNum = () => {
        setNum(num + 1);
        setTitle(titleRef.current.value);
    };

    useEffect(() => {
        alert(title);
    }, [title])

    return (
        <div>
            <div>
                <span>Number - {num}</span>
            </div>
            <div>
                <input type="text" ref={titleRef}/>
                <button onClick={addNum}>Click</button>
            </div>
        </div>
    );
};

export default Counter;