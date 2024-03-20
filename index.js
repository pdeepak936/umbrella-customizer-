
/**** select color */
let selectedColor = document.querySelector('.colorButtons');
let umbrella = document.querySelector('.umbrella');
let bgColor = document.querySelector('div');
let file = document.querySelector('#file');


selectedColor.onclick = (e) => {
    let color = e.target.id;
    switch (color) {
        case 'yellow':
            umbrella.style.backgroundImage = "url('./images/Yello_umbrella.png')"; 
            bgColor.style.background = "lightyellow";
            file.style.background = "yellow"
            break;
        case 'red':
            umbrella.style.backgroundImage = "url('./images/Pink_umbrella.png')"; 
            bgColor.style.background = "rgba(255, 0, 0, 0.4)";
            file.style.background = "red"
            break;
        case 'blue':
            umbrella.style.backgroundImage = "url('./images/Blue_umbrella.png')";
            bgColor.style.background = "lightblue";
            file.style.background = "blue"
            break;
        case 'pink':
            umbrella.style.backgroundImage = "url('./images/Pink_umbrella.png')";
            bgColor.style.background = "lightpink";
            file.style.background = "pink"
            break;
        case 'black':
            umbrella.style.backgroundImage = "url('./images/#')";
            bgColor.style.background = "rgba(0, 0, 0, 0.5)";
            file.style.background = "black"
            break;
        case 'darkgray':
            umbrella.style.backgroundImage = "url('./images/#')";
            bgColor.style.background = "rgba(0, 0, 0, 0.1)";
            file.style.background = "darkgray"
            break;
        // Ensure you have valid image paths for each case
    }
};

/*** file upload */
const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
    console.log('event', event);
}
document.getElementById('file').addEventListener('change', function(event) {
    if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('logo').style.display = "block";
            document.getElementById('logo').src = e.target.result;
        };
        reader.readAsDataURL(event.target.files[0]);
    }
});