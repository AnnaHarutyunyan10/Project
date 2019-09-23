import React, { useContext, useState, useEffect } from 'react';

export const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWidth = setWidth(window.innerWidth);
        window.addEventListener('resize', handleWidth);
        return () => {
            window.removeEventListener('resize', handleWidth);
        };
    });
    return width;
}

export const useDocumentTitle = (title) => {
    useEffect(() => {
        document.title = title;
    });
}

export const useFetch = (flag) => {
    const [user, setUser] = useState(null);

    useEffect(async() => {
        const responce = await fetch('https://api.randomuser.me/');
        const data = await responce.json();
        const [item] = data.results;
        setUser(item); 
    }, [flag]);
    return user;
}