import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { CookiesProvider } from 'react-cookie';

function App() {
	return (
		<CookiesProvider defaultSetOptions={{ path: '/' }}>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</CookiesProvider>
	);
}

export default App;
