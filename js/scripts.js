
// handler for the submit event
function handleSubmit(e) {
  e.preventDefault();

  // grab the sentence the user types in
  const theSentence = document.getElementById('sentence').value;
  
  // turn the string into an array using a space as a separator
  const arraySentence = theSentence.split(' ');
  // initiate new array for the for-loop
  let newArraySentence = [];
  // for each element/word in the array of our user's sentence, 
  // check if the element/word is 3 letters or more long
  // if it is, add it to our new, empty array
  arraySentence.forEach(function(element) {
    if (element.length >= 3) {
      newArraySentence.push(element);
    }
  });

  // reverse the order of the new array
  newArraySentence.reverse();
  // turn this newly reversed array into a string, 
  // but separate each element/word with a space instead of a comma
  const newSentence = newArraySentence.join(' ');

  // create an h1 element in the DOM to append this new string to,
  // and have it appear in the body of the page
  const h1 = document.createElement('h1');
  h1.append(newSentence);
  document.body.append(h1);

}

function handleForm() {
  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
}

window.addEventListener('load', handleForm);