function guardar() {
    let edad = document.getElementById("edad").value
    localStorage.setItem('Localedad',edad)
}