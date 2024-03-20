
/**** select color */
let selectedColor = document.querySelector('.colorButtons');
let umbrela = document.getElementById('umbrela');
let bgColor = document.querySelector('body');

selectedColor.onclick = (e)=>{
    let color = e.target.id;
    if(color==='yellow'){
        //yellow umbrela
        umbrela.src='/images/Yello umbrella.png';
        bgColor.style.background="lightyellow"
    }else if(color==='red'){
        //red umbrela
        umbrela.src='/images/#';
        bgColor.style.background="rgba(255, 0, 0, 0.4)";
    }else if(color==='blue'){
        //blue umbrela
        umbrela.src='/images/Blue umbrella.png';
        bgColor.style.background="lightblue"
    }else if(color==='pink'){
        //pink umbrela
        umbrela.src='/images/Pink umbrella.png';
        bgColor.style.background="lightpink"
    }else if(color==='black'){
        //red umbrela
        umbrela.src='/images/#';
        bgColor.style.background="rgba(0, 0, 0, 0.5)";
    }else if(color==='darkgray'){
        //red umbrela
        umbrela.src='/images/#';
        bgColor.style.background="rgba(0, 0, 0, 0.1)";
    }
    
}

/*** file upload */
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
    console.log('event', event);
}