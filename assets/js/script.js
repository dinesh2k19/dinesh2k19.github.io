const nav=document.querySelector('.nav'), menu=document.querySelector('.menu'), theme=document.querySelector('.theme');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
if(localStorage.getItem('theme')==='dark'){document.body.classList.add('dark');theme.textContent='Light'}
theme?.addEventListener('click',()=>{document.body.classList.toggle('dark');const dark=document.body.classList.contains('dark');localStorage.setItem('theme',dark?'dark':'light');theme.textContent=dark?'Light':'Dark'});
document.getElementById('year').textContent=new Date().getFullYear();
