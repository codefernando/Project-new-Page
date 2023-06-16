const title = document.querySelector("h1")
typeWrite(title)

function typeWrite(elemento){
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textArray.forEach((letra, i)=> {
        setTimeout(()=> elemento.innerHTML += letra, 80 * i);
    });
}
