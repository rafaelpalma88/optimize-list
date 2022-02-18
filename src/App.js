import React, { useEffect, useState } from 'react'

export default function App() {

    const [array, setArray] = useState([])
    const [arrayFiltered, setArrayFiltered] = useState([])
    const [filter, setFilter] = useState('')

    useEffect(() => {
        createArray(100);
    }, [])

    useEffect(() => {
        filterArray(filter);
    }, [filter])

    const createArray = (qtyItems) => {

        const array = [];

        for (let i = 1; i <= qtyItems; i++) {
            array.push(i);
        }

        setArray(array);
    }

    const filterArray = (filter) => {

        const result = array
            .filter((item) => String(item).includes(filter))

        setArrayFiltered(result);
        
    }

    return (
        <div>

            <div>Lista de conteúdos</div>

            <div style={{ margin: 25 }}>
                <input type="text" name="filter" id="filter" onChange={e => setFilter(e.target.value)} />
            </div>    

            <ul>
                    {
                        filter === '' ? (
                            array
                                .map(item => (
                                    <li key={item}>Item: {item}</li>
                                ))
                        ) : (
                            arrayFiltered
                                .map(item => (
                                    <li key={item}>Item: {item}</li>
                                ))
                        )
                      
                    }
            </ul>

        </div>
    )
}
