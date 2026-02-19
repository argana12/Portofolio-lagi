function scrollToContent(){
  document.getElementById("content").scrollIntoView({behavior:"smooth"});
}

function openModal(img){
  document.getElementById("modal").style.display="block";
  document.getElementById("modal-img").src = img.src;
}

function closeModal(){
  document.getElementById("modal").style.display="none";
}
