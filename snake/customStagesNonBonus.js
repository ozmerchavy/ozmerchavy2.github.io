const half = [
    ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","🟦","🟦","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ["⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛","⬛"],
  ]