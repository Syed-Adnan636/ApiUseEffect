import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import SinglePerson from './SinglePerson';
import { BallTriangle } from 'react-loader-spinner';

const FetchData = () => {
    const [people,setPeople] = useState([])
    const [loading,setLoading] = useState(false)
    const api = 'https://api.github.com/users';

    const fetchUser = async () => {
        setLoading(true)
        const response = await fetch(api);
        const data = await response.json();
        setLoading(false)
        setPeople(data)
    }

    useEffect(() => {
        fetchUser()
    },[])

    if(loading) {
        return (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'}} className="spinner">
            
            <BallTriangle
                height={150}
                width={150}
                radius={10}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
                    />
        </div>
        )
    }

return (
    <>

    <div className="container">
        <div className="row">
            {people.map((person) => {
                return (
                    <SinglePerson {...person} />
                )
            })}
        </div>
    </div>
    </>
)
}

export default FetchData