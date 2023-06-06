
const generator = require("./generator");

const renderer = require("./renderer");

const users = generator.generate();

const userList = document.querySelector("#user-list");

const render = () => {
  renderer({ userList, hash: window.location.hash.slice(1), users });
};

window.addEventListener("hashchange", render);

render();
