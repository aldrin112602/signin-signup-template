(function() {
      'use strict'
      const pwd = document.querySelector('#password'), eye = document.querySelector('#eye');
      eye.onclick = () => {
        if(pwd.type == 'password') {
          eye.classList.replace('fa-eye-slash', 'fa-eye');
          pwd.type = 'text';
        } else {
          eye.classList.replace('fa-eye', 'fa-eye-slash');
          pwd.type = 'password';
        }
      }
    })()
