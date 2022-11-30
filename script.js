let popUp = document.getElementById('cookiePopup');

document.getElementById('acceptCookie').addEventListener('click', () => {
  let d = new Date();
  d.setHours(d.getHours() - 1);
  d.setMinutes(1 + d.getMinutes());
  document.cookie = 'cookieName=MyCookie; expires = ' + d + ';';

  popUp.classList.add('hide');
  popUp.classList.remove('show');
});

const checkCookie = () => {
  let input = document.cookie.split('=');
  if (input[0] == 'cookieName') {
    popUp.classList.add('hide');
    popUp.classList.remove('show');
  } else {
    popUp.classList.add('show');
    popUp.classList.remove('hide');
  }
};

window.onload = () => {
  setTimeout(() => {
    checkCookie();
  }, 1000);
};
