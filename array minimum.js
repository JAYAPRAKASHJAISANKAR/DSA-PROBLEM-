let y = a[0].stipend;
let a = [
    {
      name: "Kishore",
      age: 19,
      stipend: 1000,
      marks: { maths: 50, physics: 79, chemistry: 80 },
    },
    {
      name: "Razzak",
      age: 18,
      stipend: 10000,
      marks: { maths: 80, physics: 75, chemistry: 70 },
    },
    {
      name: "Ajmal",
      age: 18,
      stipend: 10000,
      marks: { maths: 35, physics: 45, chemistry: 50 },
    },
    {
      name: "Aishwarya",
      age: 21,
      stipend: 10000,
      marks: { maths: 65, physics: 80, chemistry: 85 },
    },
  ];
  


for (let i = 0; i < a.length; i++) {
  if (y >= a[i].stipend) {
    y = a[i].stipend;
    console.log(a[i].name);
  }
}
