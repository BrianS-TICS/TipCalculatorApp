export const reseteaSeleccion = () => {
    const buttons = document.querySelectorAll(".propinas input[type='button']")

    buttons.forEach(btn => {
        btn.classList.remove('activo');
    })
}

export const reseteaFormulario = () =>{
    const form = document.querySelector("#form")
    form.reset();
}