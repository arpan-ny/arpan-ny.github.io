import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('Root element with ID "root" not found in the DOM.');
} else {
  // Create a root for the React application.
  const root = ReactDOM.createRoot(rootElement);

  // Render the main App component.
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}