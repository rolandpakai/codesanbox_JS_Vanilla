import "./styles.css";

let greetings = () => {
  return "Hello World!";
};

let message = greetings();
console.log(message);

document.getElementById("app").innerHTML = message;
