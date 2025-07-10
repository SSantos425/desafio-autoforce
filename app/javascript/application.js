// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import { createRoot } from 'react-dom/client'

function App() {
    return (<h1>Hello, React!</h1>);
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);