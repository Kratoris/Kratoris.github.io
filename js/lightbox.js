
const imagenes = document.querySelectorAll('.img-historia')
const imagenes1 = document.querySelectorAll('.img-significado')
const imagenes2 = document.querySelectorAll('.img-campos')
const imagenes3 = document.querySelectorAll('.img-inventos')
const imagenes4 = document.querySelectorAll('.img-Aplicaciones')
const imagenes5 = document.querySelectorAll('.img-usos')

const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen')
const hamburguer1 = document.querySelector('.hamburguer');



 imagenes.forEach(imagen =>{
      imagen.addEventListener('click', ()=>{
          aparecerImagen( imagen.getAttribute('src'))
       
      })
  })

  imagenes1.forEach(imagen1 =>{
    imagen1.addEventListener('click', ()=>{
        aparecerImagen( imagen1.getAttribute('src'))
     
    })
})

imagenes2.forEach(imagen2 =>{
    imagen2.addEventListener('click', ()=>{
        aparecerImagen( imagen2.getAttribute('src'))
     
    })
})

imagenes3.forEach(imagen3 =>{
    imagen3.addEventListener('click', ()=>{
        aparecerImagen( imagen3.getAttribute('src'))
     
    })
})

imagenes4.forEach(imagen4 =>{
    imagen4.addEventListener('click', ()=>{
        aparecerImagen( imagen4.getAttribute('src'))
     
    })
})

imagenes5.forEach(imagen5 =>{
    imagen5.addEventListener('click', ()=>{
        aparecerImagen( imagen5.getAttribute('src'))
     
    })
})

    contenedorLight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        hamburguer1.style.opacity = '1'
    }
   })


   const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    hamburguer1.style.opacity = '0'
   }

   const aparecerImagen1 = (imagen1)=>{
    imagenesLight.src = imagen1;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    hamburguer1.style.opacity = '0'
   }

   const aparecerImagen2 = (imagen2)=>{
    imagenesLight.src = imagen2;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    hamburguer1.style.opacity = '0'
   }

   const aparecerImagen3 = (imagen3)=>{
    imagenesLight.src = imagen3;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    hamburguer1.style.opacity = '0'
   }

   const aparecerImagen4 = (imagen4)=>{
    imagenesLight.src = imagen4;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    hamburguer1.style.opacity = '0'
   }

   const aparecerImagen5 = (imagen5)=>{
    imagenesLight.src = imagen5;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    hamburguer1.style.opacity = '0'
   }