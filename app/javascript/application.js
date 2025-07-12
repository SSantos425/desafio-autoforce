import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import { createRoot } from 'react-dom/client'
import BasicButtons from './components/button';

function App() {
    return (<> 
        <BasicButtons /> 
    </>);
}

const root = createRoot(document.getElementById('button'));
root.render(<App />);
