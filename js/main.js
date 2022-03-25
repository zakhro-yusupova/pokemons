const elBody = document.querySelector("body");
const elForm = document.querySelector(".form");
const elTForm = document.querySelector(".form-weaknesses");
const elSelect = document.querySelector(".form-select");
const elTSelect = document.querySelector(".select-weaknesses");
const elList = document.querySelector(".list");

let renderNames = pokemons.map(p => p.name);

renderNames.forEach(pokemon =>{

  let newOption = document.createElement("option");
  newOption.value = pokemon;
  newOption.textContent = pokemon;
  elSelect.appendChild(newOption);
})

function renderType(arr, element){

  let renderTypes = [];

  arr.forEach((p) => {

    p.type.forEach(type => {
      if(!renderTypes.includes(type)){
        renderTypes.push(type)
      }
    })
  })

  renderTypes.forEach(type => {
    const newOption = document.createElement("option");
    newOption.value = type;
    newOption.textContent = type;
    element.appendChild(newOption);
  })

}


function renderPokemons(arr, element){

  element.innerHTML = "";

  arr.forEach( pokemon => {

    let newItem = document.createElement( "li");
    let newImg = document.createElement( "img");
    let newDiv = document.createElement("div");
    let newTitle = document.createElement( "h4");
    let newCandy = document.createElement("p");
    let newDescriptionList = document.createElement( "ul");


    newTitle.textContent = pokemon.name;
    newCandy.textContent = pokemon.candy;

    for (let desctibtion of pokemon.type){
      let newSubItem = document.createElement("li");
      newSubItem.textContent = desctibtion;
      newSubItem.setAttribute("class", "card-subitem mx-2");
      newDescriptionList.appendChild(newSubItem);
    }

    elBody.classList.add("bg-dark");
    elForm.setAttribute("class", " d-flex justify-content-between align-items-center ms-3")
    elTForm.setAttribute("class", " d-flex justify-content-between align-items-center me-5")
    elTSelect.setAttribute("class", "form-control w-75 my-5 ms-5 bg-dark  border-warning text-white text-center");
    elSelect.setAttribute("class", "form-select w-50 my-5 ms-5 bg-dark t border-warning text-white text-center");
    newItem.setAttribute("class", "card my-2 border-warning bg-dark bg-opacity-50 me-2");
    newItem.setAttribute("style", "width: 13rem");
    newImg.setAttribute("style", "height: 7rem");
    newImg.setAttribute("src", pokemon.img);
    newImg.setAttribute("class", "card-img-top w-50 mx-auto mt-4");
    newDiv.setAttribute("class", "card-body,  text-center mt-2");
    newTitle.setAttribute("class", "card-title h4 fs-5 text-white")
    newCandy.setAttribute("class", "card-candy text-danger opacity-75 fw-bolder mb-1")
    newDescriptionList.setAttribute("class", "d-flex justify-content-center list-unstyled fs-6 text-warning opacity-75 mb-3 p-0");


    newDiv.appendChild(newTitle);
    newDiv.appendChild(newCandy);
    newDiv.appendChild(newDescriptionList);
    newItem.appendChild(newImg);
    newItem.appendChild(newDiv);
    element.appendChild(newItem);

  })
}


elForm.addEventListener("submit", evt =>{

  evt.preventDefault();

  const elSelectVal = elSelect.value;

  let filterNames = elSelectVal == "all names" ? pokemons : pokemons.filter (p => p.name.includes(elSelectVal)) ;

  console.log(filterNames);

  renderPokemons (filterNames, elList);
})


elTForm.addEventListener("submit", evt => {

  evt.preventDefault();

  const elTSelectVal = elTSelect.value;

  let filterTypes = elTSelectVal == "all types" ? pokemons : pokemons.filter(p => p.type.includes(elTSelectVal));

  console.log(filterTypes);

  renderPokemons(filterTypes, elList);
})

renderPokemons(pokemons, elList);
renderType(pokemons, elTSelect);