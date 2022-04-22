// *** 1 ***

var pet = "cat";

function personOneDetails() {
  var pet = "Siri";
  alert(pet); // ??
}

function personTwoDetails() {
  var color = "pink";
  alert(color); // ??
}

personOneDetails();
personTwoDetails();

// *** 2 ***

var n = 5;

function double(x) {
  var n = x * 2;
  return n;
}

x = double(n);

alert(x); // ??

alert(n); // ??

// *** 3 ***

var x = "red";
if (true) {
  var y = "hehe, do you see me ?";
  let m = "hoooiii";
}

alert(y); // ??
alert(m); // ??

// *** 4 ***
var pet = "doggy";
function walk() {
  var pet = "bird";
  alert(pet);
  if (true) {
    var distance = 5;
    let walked = 2;
  }

  alert(distance); // ??
  alert(walked); // ??
}

walk();

var pet;

// *** 5 ***

var pet = "doggy";
function walk() {
  var pet = "bird";
  alert(pet);
  if (false) {
    var distance = 5;
    let walked = 2;
  }
  alert(distance); // ??
  alert(walked); // ??
}

walk();

// *** 6 ***

var pet = "🐶";
function walk() {
  var pet = "🐤";
  alert(pet); // ??
  if (true) {
    var distance = 5;
    let walked = 2;
  }

  alert(distance); // ??
  alert(walked); // ??
}
alert(distance); // ??
alert(walked); // ??
alert(pet); // ??
walk();
alert(distance); // ??
alert(walked); // ??
alert(pet); // ??

// *** 7 ***
var x = "ok";

function modify() {
  alert(y);
  if (true) {
    var y = "😸";
  }
  alert(y);
}

modify();

// *** 8 ***

var x = "ok";
function practice() {
  alert(y); // ??
  alert(z); // ??
  if (false) {
    var y = "thanks";
    let z = "umhm";
  }
  alert(y); // ??
  alert(z); // ??
}

practice();

// *** 9 ***

var x = "red";

function be() {
  y = "🐇";
  x = "🌸";

  alert(x); // ??
  alert(y); // ??
}

alert(x); // ??
alert(y); // ??
be();
alert(x); // ??
alert(y); // ??
