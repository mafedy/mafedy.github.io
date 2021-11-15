function toggle(id){

    let element = document.getElementById(id);
    element.classList.toggle('d-none');
  
  };


  document.getElementById('oxymetreSmall').addEventListener('click', login);
  
  function login(event){
  
    event.preventDefault();
    showStuff('oxymetreBig');
    hideStuff('small');
    document.cookie = event;
  };
  
  
function showStuff(id) {
    document.getElementById(id).style.display = 'flex';
}
              
  
function hideStuff(id) {
    document.getElementById(id).style.display = 'hidden';
}
  
