
$(document).ready(function(){
	$('.classes__slide').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true
	});

	$('.reviews__slides').slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true,
		asNavFor: '.reviews__squares',
		// arrows: true,
		verticalSwiping: true
	});

	$('.reviews__squares').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.reviews__slides',
		centerMode: true,
		vertical: true,
		infinite: true,
		verticalSwiping: true,
		focusOnSelect: true
	});


	$('.blogs__carousel').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1
		
	});
});








  // Get the CART modal
var cartModal = document.getElementById("cartPopup");

var cartBtn = document.getElementById("cartBtn");

var cartSpan = document.getElementsByClassName("cartClose")[0];

cartBtn.onclick = function() {
  cartModal.style.display = "block";
};

cartSpan.onclick = function() {
  cartModal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == cartModal) {
    cartModal.style.display = "none";
  }
};


// Get the LOGIN modal
var loginModal = document.getElementById("loginPopup");

var loginBtn = document.getElementById("loginBtn");

var loginSpan = document.getElementsByClassName("loginClose")[0];

loginBtn.onclick = function() {
loginModal.style.display = "block";
};

loginSpan.onclick = function() {
loginModal.style.display = "none";
};

window.onclick = function(event) {
if (event.target == loginModal) {
	loginModal.style.display = "none";
}
};




  // Get the video modal
var videoModal = document.getElementById("videoPopup");

var videoBtn = document.getElementById("videoBtn");

var videoSpan = document.getElementsByClassName("videoClose")[0];

videoBtn.onclick = function() {
	videoModal.style.display = "block";
};

videoSpan.onclick = function() {
	videoModal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == videoModal) {
    videoModal.style.display = "none";
  }
};





  // Get the TRIAL FORM modal
  var trialModal = document.getElementById("trialPopup");

  var trialBtn = document.getElementById("trialBtn");
  
  var trialSpan = document.getElementsByClassName("trialClose")[0];
  
  trialBtn.onclick = function() {
	  trialModal.style.display = "block";
  };
  
  trialSpan.onclick = function() {
	  trialModal.style.display = "none";
  };
  
  window.onclick = function(event) {
	if (event.target == trialModal) {
	  trialModal.style.display = "none";
	}
  };



trialForm = function() {
	var valName = document.getElementById('userName').value;
	var valEmail = document.getElementById('userEmail').value;
	var valPhone = document.getElementById('userPhone').value;
	
	document.getElementById('elm1').innerHTML="Вы ввели name: "+valName;
	document.getElementById('elm2').innerHTML="Вы ввели email: "+valEmail;
	document.getElementById('elm3').innerHTML="Вы ввели phone: "+valPhone;

};
  
trialForm();


