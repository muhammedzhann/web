function toggleDarkMode() {
	document.body.dataset.theme = document.body.dataset.theme === 'dark' ? '' : 'dark';
}
function showTab(index) {
	document.querySelectorAll('.tab-content').forEach((tab, i) => {
    tab.classList.toggle('active', i === index);	
});
}
function showModal() {
	document.getElementById('modal').style.display = 'flex';
}
function hideModal(event) {
	if (event.target === event.currentTarget) {
    document.getElementById('modal').style.display = 'none';
}
}
let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;
function changeSlide(direction) {
	currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
   slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}
function toggleMenu() {
	document.getElementById('navbarMenu').classList.toggle('active');
}


const firebaseConfig = {
	apiKey: "AIzaSyAi-ckfqeF0DNDhKT8UTIIuB-uRs492N3g",
	authDomain: "contactform-e6067.firebaseapp.com",
	databaseURL: "https://contactform-e6067-default-rtdb.firebaseio.com",
	projectId: "contactform-e6067",
	storageBucket: "contactform-e6067.appspot.com",
	messagingSenderId: "528854818102",
	appId: "1:528854818102:web:964ca89f2d90bae998a797"
};

firebase.initializeApp(firebaseConfig);

var contactFormDB = firebase.database().ref("cuntactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
	e.preventDefault();
	var name = getElementVal("name");
	var email = getElementVal("email");
	var message = getElementVal("message");
	saveMessages(name, email, message);
	document.querySelector(".alert").style.display = "block";
	setTimeout(() => {
		document.querySelector(".alert").style.display = "none";
	}, 3000);
	name.value = ''
	email.value = ''
	message.value = ''
	document.getElementById("contactForm").reset();
}
const saveMessages = (name, email, message) => {
	var newContactForm = contactFormDB.push();
	newContactForm.set({
		name: name,
		email: email,
		msgContent: message,
	});
};
const getElementVal = (id) => {
	return document.getElementById(id).value;
};
