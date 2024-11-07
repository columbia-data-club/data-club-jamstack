import {parseArgs} from "node:util";

const { values: { pokemon } } = parseArgs({ options: { pokemon: { type: "string"} } });

const pokeUrl = "https://pokeapi.co/api/v2/pokemon/" + pokemon;

const response = await fetch(pokeUrl);
const data = await response.json();

process.stdout.write(JSON.stringify(data));
