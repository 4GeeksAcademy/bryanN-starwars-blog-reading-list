import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const DetailPlanet = () => {
    const { uid } = useParams()

    const [planet, setPlanet] = useState(null)
    function detailPlanet() {
        fetch("https://www.swapi.tech/api/planet/" + uid)
            .then(res => res.json())
            .then(data => setPlanet(data.result.properties))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        detailPlanet()
    }, [uid])

    return (
        <div>
            <h1>DetailPlanet</h1>
            <div className="container">
                <p>Name: {planet?.name}</p>
                <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${uid}.jpg`} className="card-img-top" alt="..." />
            </div>

        </div>
    )
}

export default DetailPlanet