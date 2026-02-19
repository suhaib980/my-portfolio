function showPopup(id) {
  document.getElementById(id).style.display = "block";
  document.getElementById('overlay').style.display = "block";
}

function closePopup(id) {
  document.getElementById(id).style.display = "none";
  document.getElementById('overlay').style.display = "none";
}
