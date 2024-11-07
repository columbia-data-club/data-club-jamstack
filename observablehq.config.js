const pokemon = [
  "pikachu",
  "corsola",
  "morelull", 
  "pancham", 
  "shinx",
  ];

export default {
  title: "Hello Framework",
  dynamicPaths: pokemon.map(pokemon => `/pokemon/` + pokemon),
  head: '<link rel="icon" href="observable.png" type="image/png" sizes="32x32">',
  root: "src",
  interpreters: {
    ".py": ["pyenv", "exec", "python3"],
  },
};
