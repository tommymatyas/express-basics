console.log("loaded");

fetch("/data")
  .then((res) => res.json())
  .then((data) => console.log(data));

fetch("/data/kismacska")
  .then((res) => res.json())
  .then((data) => console.log(data));

fetch("/data/120")
  .then((res) => res.json())
  .then((data) => console.log(data));

fetch("/data", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    id: 999,
    name: "New User",
    age: 99,
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
