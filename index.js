//Begin by initializing necessary variables:
let charactersUrl = "http://localhost:3000/characters"

document.addEventListener('DOMContentLoaded', ()=>{

  //fetch all animals from json server

function loadAllCharacters(){
  fetch(charactersUrl)
    .then(res => res.json())
    .then((data) =>{
      addingNames(data);
    })
} 
// Rendering only the animal names on the page
function addingNames(chars){
  chars.forEach((element)=>{
    const animalName = document.createElement('h3');

    animalName.textContent = element.name;
    let p = document.getElementById('char-name');
    p.appendChild(animalName);
    animalName.addEventListener('click', ()=>{
      
      document.getElementById('character-name').textContent = element.name
      document.getElementById('char-img').src=element.image

      let btn = document.getElementById('char-votes')
      btn.textContent = `Votes: ${element.votes}`
      btn.addEventListener('click', ()=>{
        element.votes+=1

        btn.textContent = `Votes: ${element.votes}`
      })
  
    
    
      
      })
  })
}

//Rendering of the animal details to the page once name is clicked
//function renderingOneCharacter(chars){


  

 

  // fetch(charactersUrl)
  //   .then(res=>res.json())
  //   .then( (char) =>{
  //     //create a display of all the animal attributes
  //     let allAnimalAttributes = document.createElement('li');
  //     //Using innerHTML to get a full display of all the lists
  //     allAnimalAttributes.innerHTML = `
      
  //     <img src="${char.image}">
  //     <h4 id="votes"> Votes: ${char.votes} </h4>
  //     <button>Vote</button>
  //     <h4>${char.name}</h4>
      
  //     `
  //     //append the displayed attributes to the paragraph to card to be displayed
  //     let displayDiv = document.getElementById('animal-display')
  //     displayDiv.append(allAnimalAttributes);
    




    // }




    // )
  //}



loadAllCharacters()
})