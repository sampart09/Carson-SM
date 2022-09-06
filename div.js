const toggleBtn = document.querySelector('#toggleA');
const divlist = document.querySelector('.About1');

toggleBtn.addEventListener('click', () => {
    if(divlist.style.display === 'block') {
        divlist.style.display = 'none';
      } else {
        divlist.style.display = 'block';
      }
});

const toggleBtnB = document.querySelector('#toggleB');
const divlistB = document.querySelector('.About2');

toggleBtnB.addEventListener('click', () => {
    if(divlistB.style.display === 'block') {
        divlistB.style.display = 'none';
      } else {
        divlistB.style.display = 'block';
      }
});

const toggleBtnC = document.querySelector('#toggleC');
const divlistC = document.querySelector('.About3');

toggleBtnC.addEventListener('click', () => {
    if(divlistC.style.display === 'block') {
        divlistC.style.display = 'none';
      } else {
        divlistC.style.display = 'block';
      }
});

const toggleBtnD = document.querySelector('#toggleD');
const divlistD = document.querySelector('.About4');

toggleBtnD.addEventListener('click', () => {
    if(divlistD.style.display === 'block') {
        divlistD.style.display = 'none';
      } else {
        divlistD.style.display = 'block';
      }
});




