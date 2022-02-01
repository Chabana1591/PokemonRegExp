function mainProc(){
    alert("ok");
}


window.onload(()=>{
    document.querySelector('#go').addEventListener('click', ()=>{
        mainProc()
    })
})