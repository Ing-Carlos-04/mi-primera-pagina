document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registroForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const nombre = document.getElementById('nombre').value;
      const correo = document.getElementById('correo').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirm_password').value;
      const terms = document.getElementById('terms').checked;
  
      if (nombre === '' || correo === '' || password === '' || confirmPassword === '' || !terms) {
        alert('Por favor, completa todos los campos y acepta los términos y condiciones.');
        return;
      }
  
      if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
      }
  
      /*Guarda los datos de los usuarios en localStorage*/
      const user = { nombre, correo, password };
      localStorage.setItem('user', JSON.stringify(user));
  
      alert('Registro exitoso');
      form.reset();
    });
});

/*Login*/
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      /*Obtiene los datos del usuarrio desde localStorage*/
      const user = JSON.parse(localStorage.getItem('user'));
  
      if (user && username === user.correo && password === user.password) {
        alert('Inicio de Sesión exitoso');
        /*Dirección hacía la pagina de inicio*/
        window.location.href = 'home.html';
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    });
  });