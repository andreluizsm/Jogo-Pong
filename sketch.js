//variáveis bola
  let xBola = 300;
  let yBola = 200;
  let diametro = 15;
  let raio = diametro / 2;

//Velocidade Bola 
  let velocidadeXBola = 5;
  let velocidadeYBola = 5;

//variáveis raquete 
  let xMinhaRaquete = 5;
  let yMinhaRaquete = 135;
  let larguraRaquete = 9;
  let alturaRaquete = 120;
  
//variáveis raquete oponente
  let xRaqueteOponente = 585;
  let yRaqueteOponente = 135;
  let velocidadeYRaquete = 0;
  
  let colidiu = false;
  let chanceDeErrar = 0;


// variáveis placar
  let meusPontos = 0;
  let pontosOponente = 0;

//variáveis sons 
  let raquetada;
  let ponto;
  let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");

}


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  bola();
  movimentaBola();
  colisoesBorda();
  raquete(xMinhaRaquete, yMinhaRaquete);
  movimentaMinhaRaquete();
  raquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xMinhaRaquete, yMinhaRaquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluirPlacar();
  marcarPonto();
  bolinhaNaoFicaPresa();
}



function bola(){
    
  circle(xBola,yBola,diametro);
}

function movimentaBola(){
  
  xBola += velocidadeXBola;
  yBola += velocidadeYBola;
}

function colisoesBorda(){
    
  if(xBola + raio > width || xBola - raio < 0){
    velocidadeXBola *= -1;
  }
  if(yBola + raio > height || yBola - raio < 0){
    velocidadeYBola *= -1
  }

}

function raquete(x, y){
  rect(x, y, larguraRaquete, alturaRaquete);

}

function movimentaMinhaRaquete (){
  if(keyIsDown(UP_ARROW)){
    yMinhaRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yMinhaRaquete += 10;
  }
}

function movimentaRaqueteOponente(){
  yRaqueteOponente = yBola - alturaRaquete  / 2 - 30 ;
  yRaqueteOponente += velocidadeYRaquete + chanceDeErrar;       function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}
}
function verificaColisaoRaquete(x, y){
  colidiu = 
  collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBola, yBola, raio)  
  if(colidiu){
    velocidadeXBola *= -1;
    raquetada.play();
  }
}
function incluirPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
    fill(color (255, 140,0));
  rect(150, 10, 40,20);
    fill(255);
  text(meusPontos, 170, 26);
    fill(color (255, 140,0));
  rect(450, 10, 40,20);
    fill(255);
  text(pontosOponente, 470, 26);
    

}

function marcarPonto(){
  if(xBola > 594){
    meusPontos += 1;
    ponto.play();
  }
  if(xBola < 10){
    pontosOponente += 1;
    ponto.play();
  }
}

function bolinhaNaoFicaPresa(){
    if (xBola - raio < 0){
    XBolinha = 23
    }
}



