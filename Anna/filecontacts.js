
function openCity(evt, cityName) {
  //declare variables
  
  var i, tabcontent, tablinks;

  //get elements from class tabcontent and hide
  
  tabcontent = document.getElementsByClassName(" tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
      
    tabcontent[i].style.display = "none";
  }

  // get elements from tablinks  and remove active
  
  tablinks = document.getElementsByClassName(" tablinks");

  for (i = 0; i < tablinks.length; i++) {
      
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  //display current tub and add active 
  
  document.getElementById(cityName).style.display = "block";

  evt.currentTarget.className += " active";
}

