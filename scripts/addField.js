//Procurar o Botão

document.querySelector("#add-time").addEventListener('click',cloneField)

//Quando clicar no botão



//Executar uma ação 

function cloneField(){


//Duplicar os campos . Que Campos ?
const newFieldContainer =document.querySelector('.schedule-item').cloneNode(true)

//Limpar os campos . Que Campos ?

//pegar os campos 

const fields = newFieldContainer.querySelectorAll('input')

// para cada campo limpar

fields.forEach(function(field){
    // pegar o field do momento e limpar
    field.value=""
})


// Colocar na página . Onde ?
document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

