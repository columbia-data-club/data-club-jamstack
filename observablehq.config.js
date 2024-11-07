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
    ".py": "python3",
    // Use the below if you are using pyenv.
    //".py": ["pyenv", "exec", "python3"],
  },
};
