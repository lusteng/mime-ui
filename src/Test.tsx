import React, {useState, useEffect} from 'react'

export const Test: React.FC  = (props) => {
    const [count, setcount] = useState(0)
    useEffect(() => {
        document.title = 'ffffffffff' + count
    }, [])

    useEffect(() => {
        console.log(props);
        
    })

    return (
        <>
    <p>{count}</p>
        <button onClick={e => setcount(count + 1)}>改变</button>
    </>
    )
}