 const heroiXP = 903; 
 const nomes = ["lua", "pedro", "nina", "pratiado", "gui", "sandro", "sand", "san"];
 const niveis = [
   { nome: "Ferro", minXP: 0, maxXP: 1000 },
   { nome: "Bronze", minXP: 1001, maxXP: 2000 },
   { nome: "Prata", minXP: 2001, maxXP: 5000 },
   { nome: "Ouro", minXP: 5001, maxXP: 7000 },
   { nome: "Platina", minXP: 7001, maxXP: 8000 },
   { nome: "Ascendente", minXP: 8001, maxXP: 9000 },
   { nome: "Imortal", minXP: 9001, maxXP: 10000 },
   { nome: "Radiante", minXP: 10001, maxXP: Infinity }, 
 ];
 
 let nivelDoHeroi = "";
 let nomeDoHeroi = "";
 
 for (let i = 0; i < niveis.length; i++) {
   if (heroiXP >= niveis[i].minXP && heroiXP <= niveis[i].maxXP) {
     nivelDoHeroi = niveis[i].nome;
     nomeDoHeroi = nomes[i];
     break; 
   }
 }
 
 console.log(`O Herói de nome ${nomeDoHeroi} está no nível ${nivelDoHeroi}.`);
 
