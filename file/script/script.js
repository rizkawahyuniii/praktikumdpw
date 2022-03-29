console.log(document);
const navigasi = document.getElementsByTagName('a');
for (let i=0; i<3; i++){
    navigasi[i].style.color = 'rgb(255, 239, 213)';
    navigasi[i].style.fontWeight = 'bold';
}

const ket = document.getElementsByTagName('p');
ket[0].style.color = 'black';
ket[0].style.fontWeight = 'bold';

const judul = document.getElementById('judul');
judul.style.color = 'black';
judul.style.backgroundColor = 'rgb(255, 239, 213)';
judul.style.fontFamily = 'Geneva';
judul.style.display = 'inline-block';

const background = document.getElementsByClassName('sosmed');
background[0].style.backgroundColor = 'rgb(255, 239, 213)';

const h2 = document.querySelector('h2');
h2.style.color = 'red';

const h3 = document.querySelector('.h3');
h3.style.color = 'green';

let desk = document.getElementsByTagName('p');
for (let i=1; i<desk.length; i++){
    desk[i].style.fontWeight = 'bold';
    desk[i].style.fontFamily = 'verdana';
}

const btn = document.querySelectorAll('.button');
btn[0].style.backgroundColor = 'black';
btn[0].style.color = 'red';
btn[0].style.fontWeight = 'bold';
btn[1].style.backgroundColor = 'black';
btn[1].style.color = '#00ff00';
btn[1].style.fontWeight = 'bold';

var footer = document.getElementsByTagName('footer');
footer[0].innerHTML = '&copy 2022 Rizka Wahyuni';
footer[0].style.fontSize = '20px';
