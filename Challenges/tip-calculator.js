const tipCalculator = (quality , total) =>{
    let tip = 0;
    switch(quality){
       case 'excellent' : tip = 30 / 100 * total
       break;
       case 'good' : tip = 20 / 100 * total
       break;
       case 'ok' : tip = 15 / 100 * total
       break;
       case 'bad' : tip = 5 / 100 * total
       break;
       default: tip = 18 / 100 * total
    }
    return tip
  }
  