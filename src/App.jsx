import React from 'react';
import './App.css';
import Message from "./Message/Message";
import Counter from "./Counter/Counter";

function App() {
    const qualities = [
        'рационалист',
        'комуннист',
        'анимешник'
    ];

    return (
        <div className="App">
            <h2>Task 1</h2>
            <Message/>
            <h2>Task 2</h2>
            {qualities.map((q, index) => {
                if (index + 1 === 2) {
                    return <span key={`qualities${index}`} className={'qualitiesSecond'}>{`${index + 1} качество = ${q}`}</span>;
                }

                return <span key={`qualities${index}`} className={'qualities'}>{`${index + 1} качество = ${q}`}</span>;
            })}
            <h2>Task 3</h2>
            <Counter />
        </div>
    );
}

export default App;