let mapa = { 
  "a" : "d",
  "b" : "a",
  "c" : "e",
  "d" : "n",
  "e" : "f",
  "f" : "o",
  "g" : "g",
  "h" : "p",
  "i" : "m",
  "j" : "q",
  "k" : "h",
  "l" : "r",
  "m" : "l",
  "n" : "z",
  "o" : "i",
  "p" : "s",
  "q" : "t",
  "r" : "u",
  "s" : "b",
  "t" : "v",
  "u" : "k",
  "v" : "w",
  "w" : "j",
  "x" : "x",
  "y" : "y",
  "z" : "c",
  }

function codificaMapeamento (palavra) {
  let mensagem = "";
  
  for(let caractere of palavra) {
    if(mapa[caractere]){
      mensagem = mensagem + mapa[caractere];
    } else {
      mensagem = mensagem + caractere;
    }
  }
  return mensagem;
}
    
    
  


let alfabeto = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";

function codifica(palavra){
  let mensagem = "";
  
  for(let caractere of palavra) {
  let posicao = alfabeto.indexOf(caractere);
    
  if (posicao == -1) {
    mensagem = mensagem + caractere;
    } else {
    let novaPosicao = posicao + 13;
    let codificado = alfabeto[novaPosicao];
    mensagem = mensagem + codificado
    }
  
  }
  
  return mensagem;
  
}


function setup() {
  createCanvas(800, 600);
  let palavra = prompt("O que deseja codificar?");
  
  background("#01050E");
  let codificado = codificaMapeamento(palavra);
//   console.log(codificado)
  
  fill ("yellow");
  textAlign (CENTER, CENTER);
  text (codificado,width/2, height/2);
  textSize (20);
  
 
  noLoop();
}




function draw() {
  
}
