const btn = document.querySelector("button");
const img = document.querySelector("img");
const newgif = function(search) {
  fetch("https://api.giphy.com/v1/gifs/translate?api_key=XJZLwyLxPI5v5LEeuKbO8RIfVt9zH9od&s=" + search)
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    img.src = response.data.images.original.url;
  })
  .catch(function(err) {
    alert("Could not find any gifs :(")
  })
}
newgif("cat");
let input;
btn.addEventListener("click", () => {
  input = document.querySelector("input").value;
  if (!input){
    input = "cat";
  }
  newgif(input);
});