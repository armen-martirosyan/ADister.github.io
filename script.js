let burger = document.querySelector(".burger-icon");
let hidMenu = document.querySelector(".hidden-nav");
let closeBtn = document.querySelector(".close-icon");
let clientBtn1 = document.querySelector(".activ-cl-btn1");
let clientBtn2 = document.querySelector(".activ-cl-btn2");
let clientBtn3 = document.querySelector(".activ-cl-btn3");
let clientPic1 = document.querySelector(".client-pic1");
let clientPic2 = document.querySelector(".client-pic2");
let clientPic3 = document.querySelector(".client-pic3");



burger.addEventListener("click", function () {
	hidMenu.style.display ="flex";
	burger.style.display ="none";
})
closeBtn.addEventListener("click", function () {
	burger.style.display ="block";
	hidMenu.style.display ="none";
})
clientBtn1.addEventListener("click", function () {
	clientPic1.style.display ="block";
	clientBtn1.style.backgroundColor ="#052501";
	clientBtn1.style.border ="solid 1px #052501";
	clientPic2.style.display ="none";
	clientBtn2.style.backgroundColor ="#69c934";
	clientBtn2.style.border ="solid 1px #69c934";
	clientBtn3.style.backgroundColor ="#69c934";
	clientBtn3.style.border ="solid 1px #69c934";
	clientPic3.style.display ="none";
})
clientBtn2.addEventListener("click", function () {
	clientPic2.style.display ="block";
	clientBtn2.style.backgroundColor ="#052501";
	clientBtn2.style.border ="solid 1px #052501";
	clientPic1.style.display ="none";
	clientBtn1.style.backgroundColor ="#69c934";
	clientBtn1.style.border ="solid 1px #69c934";
	clientBtn3.style.backgroundColor ="#69c934";
	clientBtn3.style.border ="solid 1px #69c934";
	clientPic3.style.display ="none";
})
clientBtn3.addEventListener("click", function () {
	clientPic3.style.display ="block";
	clientBtn3.style.backgroundColor ="#052501";
	clientBtn3.style.border ="solid 1px #052501";
	clientPic1.style.display ="none";
	clientBtn1.style.backgroundColor ="#69c934";
	clientBtn1.style.border ="solid 1px #69c934";
	clientPic2.style.display ="none";
	clientBtn2.style.backgroundColor ="#69c934";
	clientBtn2.style.border ="solid 1px #69c934";
})