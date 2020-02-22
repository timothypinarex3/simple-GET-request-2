'use strict';

function getDogImage(inputValue) {
  let requiredUrl = 
  `https://dog.ceo/api/breed/${inputValue}/images/random`;
   fetch(requiredUrl)
    .then(response => response.json())
    .then(responseJson => 
    displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);

  if (responseJson.status == 'error' && responseJson.code == '404'){
   $('.results-img').html(`<p> Error code :'404', message :'Breed not found'</p>`);
  } else {
      $('.results-img').html(
    `<img src="${responseJson.message}">`);
  }
  
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let inputValue = $('#breed-name').val();
    getDogImage(inputValue);   
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});