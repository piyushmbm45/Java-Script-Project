const timeInput = document.getElementById('time');
const btn = document.querySelector('.btn');
const display = document.querySelector('.display')



btn.addEventListener('click',()=>{
   const time = timeInput.value;

  const days = Math.floor(time / (60 * 60 * 24));
  // no. days in given time

  const daysMinus = time - days * 60 * 60 * 24;
  // no. days/time remaining after subtarcting the days

  const hours = Math.floor(daysMinus / (60 * 60));
  // no. of hours in given time(daysminus in this case)

  const hoursMinus = Math.floor(daysMinus - hours * 60 * 60);
  // no. of minute + sec remaining

  const min = Math.floor(hoursMinus / 60);

  const minMinus = Math.floor(hoursMinus - min * 60);

  const sec = minMinus;
display.innerHTML = `${days} Days : ${hours} Hours :${min} Minutes :${sec} Seconds`;
});