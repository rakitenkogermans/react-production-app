import { createRoot } from 'react-dom/client';
import { App } from 'app/App';
import {ThemeProvider} from "app/providers/ThemeProvider";

const container = document.getElementById('root') as HTMLElement;

// import i18n (needs to be bundled ;))
import './shared/config/i18n/i18n'

// create a root
const root = createRoot(container);

//render app to root
root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);
