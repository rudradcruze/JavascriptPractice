function loadDataUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
		.then((response) => response.json())
		.then((data) => displayData(data));
}

function displayData(data) {
	console.log(data);
}