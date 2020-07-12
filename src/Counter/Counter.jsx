import React, {useState} from "react";

const Counter = () => {
    const [num, setNum] = useState(0);
    const [title, setTitle] = useState('');

    const addNum = () => {
        setNum(num + 1);
        alert(title);
        setTitle('');
    };

    const onTitleChange = (event) => setTitle(event.currentTarget.value);

    return (
        <div>
            <div>
                <span>Number - {num}</span>
            </div>
            <div>
                <input
                    type="text"
                    onChange={onTitleChange}
                    value={title}
                />
                <button onClick={addNum}>Click</button>
            </div>
        </div>
    );
};

export default Counter;