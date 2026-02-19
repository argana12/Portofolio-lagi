function scrollToContent(){
  document.getElementById("content").scrollIntoView({
    behavior:"smooth"
  });
}

function openModal(img){
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");

  modal.style.display = "flex";
  modalImg.src = img.src;
}

function closeModal(){
  document.getElementById("modal").style.display = "none";
}

/* close modal saat klik luar gambar */
window.onclick = function(e){
  const modal = document.getElementById("modal");
  if(e.target === modal){
    modal.style.display = "none";
  }
}
