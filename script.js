
const botones = document.querySelectorAll('.button-apply-job')

botones.forEach(boton => {
	boton.addEventListener('click', () => {
	  boton.textContent = '¡Aplicado!'
    boton.classList.add('is-applied')
	  boton.disabled = true
	})
})

 const filter = document.querySelector('#filter-location')

 filter.addEventListener('change', () => {
    console.log(filter.value)
 })





    




