const sabad = () => {
    // vars
    const customBoxCollapse = document.querySelectorAll('.custom--box__collapse')
    // funcs

    // handlers
    const handle_customBoxCollapse_click = (e) => {
        e.currentTarget.classList.toggle('opened')
    }
    // events
    customBoxCollapse.forEach(item => item.addEventListener('click', handle_customBoxCollapse_click))
}

window.addEventListener('load', sabad)