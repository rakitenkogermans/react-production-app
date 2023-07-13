import { createRoot } from 'react-dom/client';
import { App } from '@/app/App';
import { ThemeProvider } from '@/app/providers/ThemeProvider';

// import i18n (needs to be bundled ;))
import './shared/config/i18n/i18n';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import { StoreProvider } from '@/app/providers/StoreProvider';

const container = document.getElementById('root') as HTMLDivElement;

if (!container) {
    throw new Error('root container is not found. Cant mount react application!');
}

// create a root
const root = createRoot(container);

// render app to root
root.render(
    <StoreProvider>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </StoreProvider>,
);
export { THEME } from '@/shared/const/theme';
