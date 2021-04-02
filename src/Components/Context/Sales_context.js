import React, { useState, useEffect, createContext } from 'react';

export const SalesContext = createContext();

export const SalesProvider = ({ children }) => {

    const [pending, setPending] = useState([])
    useEffect(async () => {
        const response = await fetch("http://127.0.0.1:8000/pr/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset = UTF-8",
            },
            // body: JSON.stringify(data),
        })
        const data = await response.json();
        setPending(data)

    }, [])
    console.log(pending);



    const trueFilter = pending.filter((list) => list.approve === true)

    const falseFilter = pending.filter((list) => list.approve !== true)

    return (
        <SalesContext.Provider value={{ pendingList: [pending, setPending], trueFilter: trueFilter, falseFilter: falseFilter }}>
            {children}
        </SalesContext.Provider>
    )
}