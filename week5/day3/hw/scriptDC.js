const input = document.getElementById("category");
const gifForm = document.getElementById("gifForm");
const buttonForm = document.querySelector("button");
const gifContainer = document.getElementById("gifContainer");

async function getGify(event) {
  event.preventDefault();

  try {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=1"
    );
    if (!response.ok) {
      throw new Error("invalid response");
    }
    const gif = await response.json();
    console.log(gif);
  } catch (error) {
    console.error("failed operation", error);
  }
}

function getInput(event) {
  event.preventDefault();
//   event.addEventListener();
// const inputValue=event.targert.category.value;
const dataForm=new FormData(event.target)

console.log()

}
gifForm.addEventListener("click", getGify);
