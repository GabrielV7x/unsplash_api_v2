import { useState } from 'react'
const apiKey = import.meta.env.VITE_API_KEY

function App() {
 // URL to the Unsplash API endpoint
//  const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}`;

//  // Function to fetch and display an image
// async function fetchAndDisplayImage() {
//  try {
//      const response = await fetch(apiUrl);
//      if (!response.ok) {
//          throw new Error('Failed to fetch image');
//      }
//      const data = await response.json();

//      // Get the image URL from the response
//      const imageUrl = data.urls.regular;

//      // Create an image element and set its source
//      const image = document.createElement('img');
//      image.src = imageUrl;

//      // Display the image in the container
//      const imageContainer = document.getElementById('image-container');
//      imageContainer.innerHTML = '';
//      imageContainer.appendChild(image);
//  } catch (error) {
//      console.error(error);
//  }
// }

//  // Fetch and display an image when the page loads
// fetchAndDisplayImage();

setTimeout(()=> {
  const imageContainer = document.getElementById('image-container');
  imageContainer.innerHTML = '<h1>Test</h1>';
},
2000)

setTimeout(()=> {
  const imageContainer = document.getElementById('image-container2');
  imageContainer.innerHTML = '<h1>blublu</h1>';
},
4000)

const [color, setColor] = useState("red")


return (
  <>
    <div id="image-container"></div>
    <div id="image-container2"></div>
    <button onClick={()=>setColor("blue")}>Click Me</button>
    <div>{color}</div>

  </>
)
}

export default App
