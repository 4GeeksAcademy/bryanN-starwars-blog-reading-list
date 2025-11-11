import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const DetailPlanet = () => {
    const {uid} = useParams()

    const [planet, setPlanet] = useState(null)
    function detailPeople() {
        fetch("https://www.swapi.tech/api/planet/" + uid)
            .then(res => res.json())
            .then(data => setPlanet(data.results.properties))
            .catch(err => console.error(err))
        }


  return (
    <div>DetailPlanet</div>
  )
}

export default DetailPlanet