
class heroi {
    constructor(nome, idade, tipo,){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
    
  }
  
  atacar(){
    let ataque = "";
    switch (this.tipo) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marcias";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;    
      default:
        ataque = "não possui um ataque definido";
        
    }
    console.log(`O ${this.tipo} atacou usando ${ataque} `);
  
  }
  }
  
  
  let oHeroi = new heroi("sandro", 30, "mago")
  oHeroi.atacar()