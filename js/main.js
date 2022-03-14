var elBody = document.querySelector("body");
var elList = document.querySelector(".list");

for (var pokemonGroup of pokemons){

  var newItem = document.createElement( "li");
  var newImg = document.createElement( "img");
  var newDiv = document.createElement("div");
  var newTitle = document.createElement( "h4");
  var newCandy = document.createElement("p");
  var newDescriptionList = document.createElement( "ul");


  newTitle.textContent = pokemonGroup.name;
  newCandy.textContent = pokemonGroup.candy;

  for (var desctibtion of pokemonGroup.type){
    var newSubItem = document.createElement("li");
    newSubItem.textContent = desctibtion;
    newDescriptionList.appendChild(newSubItem);
  }

  elBody.classList.add("bg-dark");
  newItem.setAttribute("class", "card my-2 border-warning bg-dark bg-opacity-50 me-2");
  newItem.setAttribute("style", "width: 13rem");
  newImg.setAttribute("style", "height: 7rem");
  newImg.setAttribute("src", pokemonGroup.img);
  newImg.setAttribute("class", "card-img-top w-50 mx-auto mt-4");
  newDiv.setAttribute("class", "card-body,  text-center mt-2");
  newTitle.setAttribute("class", "card-title h4 fs-5 text-white")
  newCandy.setAttribute("class", "card-candy text-danger opacity-75 fw-bolder mb-1")
  newDescriptionList.setAttribute("class", "d-flex justify-content-center list-unstyled fs-6 text-warning opacity-75 mb-3 p-0");
  newSubItem.setAttribute("class", "card-subitem mx-2");



  newDiv.appendChild(newTitle);
  newDiv.appendChild(newCandy);
  newDiv.appendChild(newDescriptionList);

  newItem.appendChild(newImg);
  newItem.appendChild(newDiv);

  elList.appendChild(newItem);

}