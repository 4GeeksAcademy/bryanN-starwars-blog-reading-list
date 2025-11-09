import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import CardPeople from "../components/CardPeople.jsx";
import CardPlanet from "../components/CardPlanet.jsx";
import { useEffect, useState } from "react";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer();
	const [characters, setCharacters] = useState([]);
	const [planets, setPlanets] = useState([])

	const getCharacters = async () => {
		try {
			const response = await fetch("https://www.swapi.tech/api/people/");
			if (!response.ok) {
				throw new Error(`There was an error getting the characters: ${response.status}`);
			}

			const data = await response.json();
			console.log(data.results);
			setCharacters(data.results);

		} catch (error) {
			console.error("There was an error getting the characters", error);
		}
	};
	const getPlanets = async () => {
		try {
			const response = await fetch("https://www.swapi.tech/api/planets/");
			if (!response.ok) {
				throw new Error(`There was an error getting the characters: ${response.status}`);
			}

			const data = await response.json();
			console.log(data.results);
			setPlanets(data.results);

		} catch (error) {
			console.error("There was an error getting the characters", error);
		}
	};

	useEffect(() => {
		getCharacters();
		getPlanets();
	}, []);


	return (
		<div>
			<h1 className="text-danger">Characters</h1>
			<div className="text-center mt-5 d-flex overflow-auto">
				{characters.map((character, index) => (
					<div key={index} className="flex-shrink-0 me-3">
						<CardPeople information={character} />
					</div>
				))}
			</div>
			<h1 className="text-danger mt-4">Planets</h1>
			<div className="text-center mt-5 d-flex overflow-auto">
				{planets.map((planet, index) => (
					<div key={index} className="flex-shrink-0 me-3">
						<CardPlanet information={planet} />
					</div>
				))}
			</div>
		</div>
	);
};
