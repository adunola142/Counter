let counter = document.querySelector('.counter');
const addCountBtn = document.querySelector('#addCountBtn');
const lowerCountBtn = document.querySelector('#lowerCountBtn');

addCountBtn.addEventListener('click',addCount)
lowerCountBtn.addEventListener('click', lowerCount)

let count = 0;


function addCount() {

count++;
counter.innerHTML = count;

if (counter.innerHTML> '0') {

	counter.style.color = '#4caf50';
}

else if (counter.innerHTML==='0') {
	counter.style.color = '#fff';
	
}
	
	counter.animate([{opacity :'0.2'},{opacity : '1.5'}],{duration:500, fill:'forwards'});
		
	}


function lowerCount() {

	count--;
	counter.innerHTML = count;

	if (counter.innerHTML<'0') {

		counter.style.color = 'red';
	}

	else if (counter.innerHTML==='0') {
	counter.style.color = '#fff';
	}

	counter.animate([{opacity :'0.2'},{opacity : '1.5'}],{duration:500, fill:'forwards'});
	
}