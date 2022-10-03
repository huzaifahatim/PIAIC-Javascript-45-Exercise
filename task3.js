//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let titleCase = function () {
  let nam = "HUZAIFA HATIM";
  var a = nam.toUpperCase();
  var b = nam.toLowerCase();
  console.log(a);
  console.log(b);

  nam = nam.toLowerCase().split(" ");
  for (var i = 0; i < nam.length; i++) {
    nam[i] = nam[i].charAt(0).toUpperCase() + nam[i].slice(1);
  }
  return nam.join(" ");
};

console.log(titleCase());
