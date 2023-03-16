const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
	event.preventDefault();

	const nama = document.querySelector('#nama').value;
	const jumlahPilihan = document.querySelector('#jumlah').value;

	alert(`Halo, ${nama}! Kamu memilih ${jumlahPilihan} pilihan.`);
});
function validateForm() {
	var name = document.forms["myForm"]["name"].value;
};