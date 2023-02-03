import { createRoot } from 'react-dom/client';
import { App } from 'app/App';
import {ThemeProvider} from "app/providers/ThemeProvider";

const container = document.getElementById('root') as HTMLElement;

// create a root
const root = createRoot(container);

//render app to root
root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);
