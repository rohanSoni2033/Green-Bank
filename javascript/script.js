const loginButton = document.querySelector('.login_btn');
const header = document.querySelector('.header');

loginButton.addEventListener('click', function () {
  header.classList.add('remove');
});

const displayTime = function () {
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOv',
    'DEC',
  ];
  const date = document.querySelector('.date');
  const time = document.querySelector('.time');
  const d = new Date();

  let h = d.getHours();

  if (h > 12) {
    h -= 12;
  }

  const hr = `${h}`.padStart(2, 0);
  const m = `${d.getMinutes()}`.padStart(2, 0);

  date.textContent = `${d.getDate()} ${
    months[d.getMonth()]
  } ${d.getFullYear()}`;
  time.textContent = `${hr}:${m} ${h > 12 ? 'AM' : 'PM'}`;
};

const showPassword = function () {
  const passowrd = document.getElementById('password');
  const showPasswordInput = document.getElementById('show_password');
  showPasswordInput.addEventListener('change', function () {
    if (showPasswordInput.checked) {
      passowrd.setAttribute('type', 'text');
      return;
    }

    passowrd.setAttribute('type', 'password');
  });
};

setInterval(displayTime, 1000);
showPassword();

// LOGIN VALIDATION
//
