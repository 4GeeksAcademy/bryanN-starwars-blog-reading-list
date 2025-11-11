import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import CardPeople from "../components/CardPeople.jsx";
import CardPlanet from "../components/CardPlanet.jsx";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	async function character() {

		const response = await fetch("https://www.swapi.tech/api/people/")

		const data = await response.json()
		const personajesBasicos = data.results;
		dispatch({
			type: "get_personajes",
			payload: { personaje: personajesBasicos }
		})


	}
	async function planet() {
		const response = await fetch("https://www.swapi.tech/api/planets/")
		const data = await response.json()
		const basicplanets = data.results;
		dispatch({
			type: 'get_planets',
			payload: {planets: basicplanets}
		})
		
	}



	useEffect(() => {
		character()
		planet()
	}, [])

	return (
		<div className="mx-5 mt-5">
			<h1 className="text-danger">Characters</h1>
			<div className='d-flex flex-nowrap overflow-auto'>
				{store.character.map((value, index) => {
					return (
						<CardPeople key={index} people={value} />
					)
				})}
			</div>
			<h1 className="text-danger mt-3">Planets</h1>
			<div className='d-flex flex-nowrap overflow-auto'>
				{store.planet.map((value, index) => {
					return (
						<CardPlanet key={index} planet={value} />
					)
				})}
			</div>
		</div>
	);
}; 