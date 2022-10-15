const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken () {
  return lamp.src.indexOf ('broken') > -1;
}

function lampOn () {
  if (!isLampBroken ()) {
    lamp.src = 'images/turnOn.jpg';
  }
}

function lampOff () {
  if (!isLampBroken ()) {
    lamp.src = 'images/turnOff.jpg';
  }
}

function lampBroken () {
  lamp.src = 'images/broken.jpg';
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseout', lampOff);
lamp.addEventListener('dblclick', lampBroken);