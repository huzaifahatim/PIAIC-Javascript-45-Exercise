//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in
//a variable called famous_person. Then compose your message and store it
//in a new variable called message. Print your message

let Quote = function (Author_name, Quotation) {
  var famous_person = Author_name;
  var message = Quotation;

  console.log(famous_person, "once said,", message);
};
Quote(
  "ALBERT EINSTEN",
  '"A person who never made a mistake never tried anything new."'
);
