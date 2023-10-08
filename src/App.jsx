// import { useState } from 'react'
import './styles/main.css';

const apiKey = import.meta.env.VITE_API_KEY

function App() {
 // URL to the Unsplash API endpoint
 const apiUrl = `https://api.unsplash.com/photos?client_id=${apiKey}`;

  // Function to fetch and display an image
  async function fetchAndDisplayImage() {

    const per_page=10;
    const response = await fetch(`${apiUrl}&per_page=${per_page}`);
    const data = await response.json();

    for (let img in data) {
      console.log(data[img].urls.regular);
      const imageUrl = data[img].urls.regular;

      const image = document.createElement('img');
      image.src = imageUrl;
      const afterContainer = document.createElement('span');
      afterContainer.appendChild(image);
      const imageContainer = document.getElementById('image-container');
      imageContainer.appendChild(afterContainer);
    }
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
