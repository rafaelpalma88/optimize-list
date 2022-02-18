import React, { useEffect, useState } from 'react'

export default function App() {

    const qtyItems = 100;
    const items = [];

    for (let i = 1; i <= qtyItems; i++) {
        items.push(i);
    }

    const ListItems = ({ listItems }) => {

        const [array, setArray] = useState([]);
        const [filter, setFilter] = useState('')

        useEffect(() => {
            setArray(listItems);
        }, [listItems])

        return (
            <div>
                <div>Lista de conteúdos</div>

                <div style={{ margin: 25 }}>
                    <input type="text" name="filter" id="filter" onChange={e => setFilter(e.target.value)} />
                </div>    

                <ul>
                        {
                            array
                                .filter((item) => String(item).includes(filter))
                                .map(item => (
                                    <li key={item}>Item: {item}</li>
                                ))
                        
                        }
                </ul>

            </div>
        )
    };

    return <ListItems listItems={items} />;

}
