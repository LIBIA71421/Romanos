function romano(num) {
    let numRomano = "";
    if (num == 1){
      numRomano = 'I';
    }
    if (num == 2){
        numRomano = 'II';
    }
    return numRomano;
  }
  
  export default romano;