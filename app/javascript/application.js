// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import { createRoot } from 'react-dom/client'

function app() {
    return (
        <div>
            <h1>Hello, React!</h1>
        </div>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);