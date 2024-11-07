---
toc: true
title: STONKS!
---

# STONKS!

```js
const stonks = FileAttachment("./data/stonks.csv").csv({ typed: true });
const color = ({ domain: [-1, 0, 1], range: ["#e41a1c", "#000000", "#4daf4a"] })
```

Here are the prices of our favorite stock, 
[NTDOY](https://finance.yahoo.com/quote/NTDOY/):

```js
Inputs.table(stonks)
```

```js
resize( width => Plot.plot({
    title: "`NTDOY`s Performance over the Past Year",
    subtitle: "“Link, you must find me!” “Bet.” (proceeds to torture Koroks) 🎮",
    width,
    y: {
    grid: true,
    label: "Nintendo stock price ($)"
  },
  color,
  marks: [
    Plot.ruleX(stonks, {
      x: "Date",
      y1: "Open",
      y2: "Close",
      stroke: (d) => Math.sign(d.Close - d.Open),
      strokeWidth: 4,
      strokeLinecap: "round"
    }),
      Plot.ruleX(stonks, {
      x: "Date",
      y1: "Low",
      y2: "High"
    }),
  ]
}))
```
