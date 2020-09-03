const emoticon = {
    'shrug' : '|_{"}_|',
    'smiley face' : ':)' ,
    'frowny face' : ':(',
    'winky face' : ';)',
    'heart' : '<3'
  }
  
  const toEmoticon = (emo) => {
    let face = ''
    switch(emo){
      case 'shrug' :face = emoticon['shrug']
      break;
      case 'smiley face' :face = emoticon['smiley face']
      break;
      case 'frowny face' :face = emoticon['frowny face']
      break;
        case 'winky face' :face = emoticon['winky face']
      break;
      case 'heart' :face = emoticon['heart']
      break;
      default: face = '|_(* ~ *)_|'
    }
    return face
  }