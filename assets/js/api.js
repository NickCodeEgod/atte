fetch("https://dog.ceo/api/breeds/" 
+ "image/random")
.then(response => response.json())
.then(data => imgDog.src = data.message);