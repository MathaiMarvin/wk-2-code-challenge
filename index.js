// // function getCharacters(){

// //     fetch ('http://localhost:3000/characters')
// //     .then(res=>res.json())
// //     .then((data)=>{
// //         renderingCharacters(data)
// //     })
// // }

// // function renderingCharacters(){
// //     CharacterData.foreahc
// // }
// // document.querySelector('DOMContentLoaded', function(){
// //     getCharacters();
// // });

// //DOM Manipulation
// // function renderOneCharacter(character){
// //     //Build the characters
// //     let card = document.createElement('li')
// //     card.className = 'card'
// //     card.innerHTML = `
// //     <img src='${character.image}'>
// //     <div class='display'>
// //         <h4>${character.name}<h4>
// //         <p>
// //             $<span class="card-header button">${character.votes}</span> Votes
// //         </p>
// //     <div>
    
// //     `
// //     //add the charactersto the DOM
// //     document.querySelector('#character-card').appendChild(card);
// // }

// // //Fetch requests
// // function getAllCharacters(){
// //     fetch (' http://localhost:3000/characters')
// //     .then(res => res.json())
// //     .then(characters1 => characters1.forEach(character =>renderOneCharacter(character)))
// // }

// // //The first thing that gets to load from J.S
// // //Get the data and render the characters to the DOM
// // function bringCharacters(){
// //     getAllCharacters()
    
// // }
// // bringCharacters()


// document.addEventListener('DOMContentLoaded', (_)=>{
//     let form = document.querySelector('form')
//     form.addEventListener('submit', (e)=>{
//         e.preventDefault()
//         fetch (' http://localhost:3000/characters')
//         .then(res => res.json())
//         .then(characters =>renderOneCharacter(character))
//         form.reset();
//     })
// })

// function renderOneCharacter(character){
//     //Build the characters
//     let animalCharacter = document.createElement('li')
//     animalCharacter.className = 'animals-done'
//     animalCharacter.innerHTML = `
//     <img src='${character.image}'>
//     <div class='display'>
//         <h4>${character.name}<h4>
//         <br>
//         <p>
//         ${character.votes} Votes
//         </p>
//     <div>
    
//     `
//     //add the charactersto the DOM
//     document.querySelector('#thy-animals').appendChild(animalCharacter);
// }


// document.addEventListener('DOMContentLoaded', (_)=>{
// let charactersUrl = "http://localhost:3000/characters"

// async function getAnimals(){

//     const res = await fetch(charactersUrl)
//     const data = await res.json()
    
//     return data
// }


// const chars = getAnimals()








// get input

// function findCHARACTERbyName(characters){
//     // const inputValue = document.querySelector('#id').value
//     let inputValue = document.querySelector('#animal-name').value

//     let oneChar =  characters.find(char => char.name === inputValue).createElement('li');
//     return oneChar
    
//     document.querySelector('#thy-animals').appendChild(oneChar);
// }


// //  //Getting one name from the list 
//  function findByName (name) {
   
//     return name.find(item = item.name === value)
//  }


// // const names = [{name: 'one', num: 2}, {name: 'two', num: 3},]



// // console.log(findByName(names))

// })

const init =()=>{
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (e)=>{
        e.preventDefault();

        const input = document.querySelector('input#animal-name');

        fetch(`http://localhost:3000/characters/${input.value}`)
        .then(response => response.json())
        .then(
            data=>{
                console.log(data);
            }
        )
    })  
}
init()