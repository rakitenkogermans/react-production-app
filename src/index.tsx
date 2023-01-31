import { createRoot } from 'react-dom/client';
import { App } from './App';

const container = document.getElementById('root') as HTMLElement;

// create a root
const root = createRoot(container);

//render app to root
root.render(
    <App />
);
