var url = 'http://api.icndb.com/jokes/random';
var button = document.getElementById('get-joke');
var paragraph = document.getElementById('joke');

function getJoke() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.addEventListener('load', function(){
		var response = JSON.parse(xhr.response);
		if (response.hasOwnProperty('value') && response.value.hasOwnProperty('joke')) {
			paragraph.innerHTML = response.value.joke;
		} else {
			paragraph.innerHTML = "there is no joke found";
		}
	});
	xhr.send();
};

button.addEventListener('click', function() {
	getJoke();
});

getJoke();