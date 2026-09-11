const menu=document.querySelector('.menu'),links=document.querySelector('.links'),theme=document.querySelector('.theme');
if(localStorage.getItem('theme')==='dark')document.body.classList.add('dark');
theme?.addEventListener('click',()=>{document.body.classList.toggle('dark');localStorage.setItem('theme',document.body.classList.contains('dark')?'dark':'light')});
menu?.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu?.setAttribute('aria-expanded','false')}));
document.getElementById('year').textContent=new Date().getFullYear();
