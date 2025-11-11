import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";



export const DetailPeople = () => {
    const { uid } = useParams();
    //necesito estado local 
    const [character, setCharacter] = useState(null)

    function detailPeople() {
        fetch("https://www.swapi.tech/api/people/" + uid)
            .then(res => res.json())
            .then(data => setCharacter(data.result.properties))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        detailPeople()
    }, [uid])



    return (
        
            <div className="container">
                <p>Name: {character?.name}</p>
                 <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/master/public/images/people/${uid}.jpg`} className="card-img-top" alt="..." />
            </div>
        
    );
};