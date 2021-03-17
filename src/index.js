import "./styles.css";

let greetings = () => {
  return "Hello Tamas!";
};

let message = greetings();
console.log(message);

document.getElementById("app").innerHTML = message;
