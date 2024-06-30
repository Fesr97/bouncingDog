import { Albero } from "./albero.js";
function spawnTrees(entities) {
 let bosco = [
    new Albero(),
    new Albero(),
 ]
  let altezza = Math.random() * 250 - 250;
  const distanza = 480;
  bosco[0].y = altezza;
  bosco[1].y = altezza + distanza;
 entities.push(bosco[0],bosco[1]);
 console.log("spawnato")
}

export { spawnTrees };

