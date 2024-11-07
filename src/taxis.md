---
title: Taxi Data
toc: true
---

# NYC Taxi Data for August 2024

```js
const taxis = FileAttachment("./data/taxis.arrow").arquero();
```


```js
Inputs.table(taxis.select("fare_amount", "tip_amount"))
```
