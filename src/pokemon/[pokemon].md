---
toc: true
title: ${observable.params.pokemon}
---

```js
const pokemon  = FileAttachment(`../data/${observable.params.pokemon}.json`).json()
```

# ${pokemon.name}

## Stats:

- Height: ${pokemon.height}
- Weight: ${pokemon.weight}
