import { useEffect, useState } from 'react';
import './index.css'; // Make sure this is imported for Tailwind CSS

function App() {
  const [backendMessage, setBackendMessage] = useState('');

  useEffect(() => {
    // Fetch data from your backend's /api/hello endpoint
    // Because of the Vite proxy, '/api/hello' automatically goes to 'http://localhost:3000/api/hello'
    fetch('/api/hello')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setBackendMessage(data.message);
      })
      .catch((error) => {
        console.error('Error fetching data from backend:', error);
        setBackendMessage('Failed to connect to backend.');
      });
  }, []); // The empty array ensures this effect runs only once after the initial render

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center text-center p-4">
      <h1 className="text-5xl font-extrabold text-blue-700 mb-4 animate-fade-in-down">
        Welcome to EasyShopping
      </h1>
      <p className="text-2xl text-gray-800 mb-8 animate-fade-in">
        Shop better. Shop smarter. Shop Easy.
      </p>
      {backendMessage ? (
        <p className="mt-8 p-4 bg-green-200 text-green-800 rounded-lg shadow-md">
          **Message from Backend:** "{backendMessage}"
        </p>
      ) : (
        <p className="mt-8 text-gray-600">
          Loading message from backend...
        </p>
      )}
    </div>
  );
}

export default App;