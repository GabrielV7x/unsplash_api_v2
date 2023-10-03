// import { useState } from 'react'
const apiKey = import.meta.env.VITE_API_KEY

function App() {
 // URL to the Unsplash API endpoint
 const apiUrl = `https://api.unsplash.com/photos?client_id=${apiKey}`;

 // Function to fetch and display an image
async function fetchAndDisplayImage() {
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
  const per_page=10;

  const response = await fetch(`${apiUrl}&per_page=${per_page}`);
  // console.log(response.json());
  const data = await response.json();
  console.log(data.length);

  for (let img in data) {
    console.log(data[img].urls.regular);
    const imageUrl = data[img].urls.regular;
    const image = document.createElement('img');
    image.src = imageUrl;
    const imageContainer = document.getElementById('image-container');

    imageContainer.appendChild(image);

  }


  // if (!response.ok) {
  //     throw new Error('Failed to fetch image');
  // }
  // const data = await response.json();

  // // Get the image URL from the response
  // const imageUrl = data.urls.regular;

  // // Create an image element and set its source
  // const image = document.createElement('img');
  // image.src = imageUrl;

  // // Display the image in the container
  // const imageContainer = document.getElementById('image-container');
  // imageContainer.innerHTML = '';
  // imageContainer.appendChild(image);

}

 // Fetch and display an image when the page loads
fetchAndDisplayImage();


return (
<>
 <div id="image-container"></div>
</>
)
}

export default App
