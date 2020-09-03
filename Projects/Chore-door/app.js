let doorImage1 = document.querySelector('#door1');
let doorImage2 = document.querySelector('#door2');
let doorImage3 = document.querySelector('#door3');
const DoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';

const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';

const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';

doorImage1.onclick =_=> {
  doorImage1.src = DoorPath;
}
doorImage2.onclick =_=> {
  doorImage2.src = beachDoorPath;
}
doorImage3.onclick =_=> {
  doorImage3.src = spaceDoorPath;
}