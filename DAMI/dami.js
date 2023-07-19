const password = [
  "agree",
  "tornado",
  "try",
  "book",
  "coil",
  "phrase",
  "burst",
  "elbow",
  "want",
  "mobile",
  "galaxy",
  "name",
];

function tobi(reveal) {
  var show = prompt("what is your mother's maiden name ?(in capital letters)");
  if (show === "ALUGO") {
    console.log(`Below are the phrases
    ${password}`);
  } else if (show !== "ALUGO") {
    tobi();
  }
}
tobi();
