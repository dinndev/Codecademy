let doorImage1 = document.querySelector('#door1');
let DoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';

const doors = document.querySelector('.door-frame');
const Adoors Array.from(doors)
 Adoors.forEach(door => {
    door.addEventListener('click',changeImage(door))
});
function changeImage(door){
  door.src = DoorPath;
}