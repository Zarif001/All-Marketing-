const aside = document.querySelector('.aside'),
header = document.querySelector('.header-content')
aside.addEventListener('click', () =>{
if(aside.classList.contains('active')){
    aside.classList.remove('active')
}
else{
    aside.classList.add('active')
}
})
header.addEventListener('click', (e) =>{
  if(e.target.classList.contains('header-content')){
      aside.classList.remove('active')
  }
})