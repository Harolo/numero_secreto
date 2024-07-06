 let titulo = document.querySelector('h1');
 titulo.innerHTML = "Hora del desafio.";
 let n1 = 0;
 let n2 = 0;

 function clickConole(){
    console.log("El botón fue clicado")
 }

 function clickPrompt(){
    let ciudad = prompt("Escriba el nombre de una ciudad de Brasil");
    alert(`Estuve en ${ciudad} y me acordé de ti`)
 }

 function clickAlerta(){
    alert("Yo amo JS");
 }

 function clickSuma(){
    n1 = parseInt(prompt("digite numero 1: "));
    n2 = parseInt(prompt("digite numero 2: "));
    let suma = n1 + n2;
    alert(`la suma de los dos numeros es: ${suma}`)
    
 }