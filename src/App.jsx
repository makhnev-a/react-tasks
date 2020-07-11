import React from 'react';
import './App.css';
import Message from "./Message/Message";

function App() {
    const qualities = [
        'рационалист',
        'комуннист',
        'анимешник'
    ];

    return (
        <div className="App">
            <Message/>
            {qualities.map((q, index) => {
                if (index + 1 === 2) {
                    return <span key={`qualities${index}`} className={'qualitiesSecond'}>{`${index + 1} качество = ${q}`}</span>;
                }

                return <span key={`qualities${index}`} className={'qualities'}>{`${index + 1} качество = ${q}`}</span>;
            })}
        </div>
    );
}

export default App;