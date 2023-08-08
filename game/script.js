

// console.log(document.querySelector('.message').textContent);


// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=90;

// document.querySelector('.guess').value=23;
// console.log(document.querySelector('.guess').value);


document.querySelector('.check').addEventListener('click',function(){

    const guess = Number(document.querySelector('.guess').value);
    console.log( guess ,typeof guess);

    if(guess==0){
        document.querySelector('.message').textContent='no number';
    }

});
