function romano(num) {
    let numRomano = "";
    switch(num){
        case 1:
            numRomano = 'I'
            break;
        case 2:
            numRomano = 'II'
            break;
        case 3:
            numRomano = 'III'
            break;
        case 4:
            numRomano = 'IV'
            break;
        case 5:
            numRomano = 'V'
            break;
        case 6:
            numRomano = 'VI'
            break;
        case 7:
            numRomano = 'VII'
            break;
        case 8:
            numRomano = 'VIII'
            break;
        case 9:
            numRomano = 'IX'
            break;
        case 10:
            numRomano = 'X'
            break;
    }
    return numRomano;
  }
  
  export default romano;