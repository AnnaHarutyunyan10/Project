import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext, PodcastContext } from './context';

import { useWindowWidth, useDocumentTitle, useFetch } from './customHook';

function ReactHook() {

    const podcast = useContext(PodcastContext);
    const theme = useContext(ThemeContext);
    const [count, setCount] = useState(0);
    const [value, changeValue] = useState('first value');  

    const width = useWindowWidth();
    useDocumentTitle(value);
    const user = useFetch(count);

    function handleChangeValue(e) {
        changeValue(e.target.value);
    }

    return (
        <div className={`bg- ${theme}`}>
            <h1>{podcast}</h1>
            <h1>{theme}</h1>

            <div>
                <p>{count}</p>
                <button onClick={() => setCount(count + 1)}>counts</button>
            </div>

            <div>
                <p>{value}</p>
                <input 
                    value={value}
                    onChange={handleChangeValue}
                />
            </div>

            <div>
                <p>{width}</p>
            </div>

            <div>
                <p>{user ? `${user.name.first}` : '' }</p>
            </div>
        </div>
    );
}

export default ReactHook;