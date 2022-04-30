var alert = "alert";

function two(t) {
  console.log(alert, t);
}

function one() {
  var alert = "tt";
  two(alert);
}

one();
