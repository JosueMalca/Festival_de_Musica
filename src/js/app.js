document.addEventListener('DOMContentLoaded',function(){
    navegacionFija();
    crearGaleria();
    resaltarEnlace();
    scrollNav();
})

function navegacionFija()
{
    const header = document.querySelector('.header');
    const sobreFestival = document.querySelector('.sobre-festival');

    window.addEventListener('scroll',function(){
        if(sobreFestival.getBoundingClientRect().bottom > 200){
            header.classList.remove('fixed');
        }else{
            header.classList.add('fixed');
        }
    })
}

function crearGaleria()
{
    const galeria = document.querySelector('.galeria-imagenes')
    for(let i = 1; i<=16; i++){
        const imagen = document.createElement('IMG');
        imagen.src = `src/img/gallery/full/${i}.jpg`;
        imagen.alt = 'imagen';
        imagen.onclick = function()
        {
            crear_modal(i);
        }
        galeria.appendChild(imagen);
    }
}

function crear_modal(i){
    const imagen = document.createElement('IMG');
        imagen.src = `src/img/gallery/full/${i}.jpg`;
        imagen.alt = 'imagen';
        
    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.onclick = cerrarModal;
    modal.appendChild(imagen);
    

    //cerrar modal
    const cerrarModalbtn = document.createElement('BUTTON');
    cerrarModalbtn.textContent = 'X';
    cerrarModalbtn.onclick = cerrarModal;
    cerrarModalbtn.classList.add('cerrarModalbtn');
    modal.appendChild(cerrarModalbtn);

    const body = document.querySelector('body');
    console.log(modal);
    body.classList.add('overflow-hidden')
    body.appendChild(modal);
}

function cerrarModal(){
    const modal = document.querySelector('.modal');
    const body = document.querySelector('body');
    modal.classList.add('fade-out')
    setTimeout(() => {
        modal?.remove();
        body.classList.remove('overflow-hidden');
    },500);
    
}

//navegacion scroll

function resaltarEnlace(){
    document.addEventListener('scroll', ()=> {
        const sections = document.querySelectorAll('section')
        const navLinks = document.querySelectorAll('.navegacion-principal a')

        let activo = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop //esto mide desde el elementro padre hasta el elemento hijo
            const sectionHeight = section.clientHeight //tamaño en pixeles
            
            
            

            if (window.scrollY >= (sectionTop - sectionHeight / 3)){
                activo = section.id
                
            }
        })
        navLinks.forEach(link => {
            link.classList.remove('active')
            if (link.getAttribute('href') === '#' + activo) {
                link.classList.add('active')
            }

        })
    })
}

function scrollNav(){
    const navLinks = document.querySelectorAll('.navegacion-principal a')
    // console.log(navLinks)
    navLinks.forEach(link =>{
        link.addEventListener('click', e =>{
            e.preventDefault() //es para quitar el movimiento en la pagina
            const sectionScroll = e.target.getAttribute('href')
            const section = document.querySelector(sectionScroll)

            section.scrollIntoView({behavior: 'smooth'})
        })
    })
}