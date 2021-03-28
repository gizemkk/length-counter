
const calculateCharacter = () =>{
    const tweet= 'Be your own light!';
    const tweetCount = tweet.length;
    const tweetLeft= 150 - tweetCount;
  
    console.log(`you have written ${tweetCount} characters , you have ${tweetLeft} characters left.`)

}
// Invoke the function when button is clicked

btn.addEventListener('click', calculateCharacter)
