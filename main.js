function mainProc(){
    const searchStr = document.querySelector('#search').value
    const pokemons = loadPokemon();

    const searched = pokemons.find((p,i)=>p===searchStr)

    const result = document.createElement('span')
    result.textContent = searched

    document.querySelector('#resultArea').appendChild(result)
}


window.onload = ()=>{
    document.querySelector('#go').addEventListener('click', ()=>{
        mainProc()
    })
}