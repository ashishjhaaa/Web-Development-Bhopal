let data = [
  "Hello",
  99,
  false,
  null,
  undefined,
  100n,
  { x: 10 },
  [1, 2],
  function () {},
];

data.forEach((item) => {
  console.log(item, "=>", typeof item);
});
