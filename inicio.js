const validarDatos = () => {
  fetch('usuario.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error, no se encontro el archivo JSON')
      }
      return response.json();
    })

    .then(data => {
      console.log(data)
      let correo = document.getElementById("email").value.toLowerCase()
      correo = correo.replace(/\s+/g, '')
      
      const password = document.getElementById("password").value
      console.log(correo)
      console.log(password)
      for (let i = 0; i < data.length; i++) {
        let element = data[i];
        if (correo == element.correo && password === element.contraseña) {

          alert("Bienvenido")


          window.location.href = "../menu/pag2.html"
          return
        }
      }

      alert("Correo o contraseña invalido")

    })
    .catch(error => {
      console.error('Error al leer el archivo JSON:', error)
    });
}