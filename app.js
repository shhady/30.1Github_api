const btn = document.querySelector("button");
const box = document.querySelector(".container");
const input = document.querySelector("input");
input.focus();
const avatar = document.createElement("img");
const logo = document.querySelector(".logo");
let arr = [];

async function getData() {
  let url = `https://api.github.com/users/${input.value}`;
  let source = await fetch(url);
  let data = await source.json();

  if (!data.name) {
    alert("invalid name");
    throw "error";
  }
  if (arr.includes(data.name)) {
    alert("it has been searched");
    throw "error";
  }
  let fullData = data.avatar_url;
  let img = document.createElement("img");
  img.src = fullData;
  let name = `Name: ${data.name} || `;
  arr.push(data.name);

  name.style = "width: 100%";
  let repos = `Number of public repos: ${data.public_repos}`;
  box.append(img);
  box.append(name);
  box.append(repos);
  img.addEventListener("click", () => {
    window.location.href = data.html_url;
  });
}
// getData();
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    getData();
    input.value = "";
  }
});
input.addEventListener("click", function (event) {
  input.value = "";
});
btn.addEventListener("click", getData);
btn.addEventListener("click", function (event) {
  input.value = "";
  input.focus();
});
logo.addEventListener("click", () => {
  window.location.href = "http://www.github.com";
});
