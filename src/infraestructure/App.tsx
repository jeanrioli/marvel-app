import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { CookiesProvider } from 'react-cookie';
import { Base, Footer, Header } from '../components';
import { AppProvider } from './AppProvider';

function App() {
	return (
		<CookiesProvider defaultSetOptions={{ path: '/' }}>
			<BrowserRouter>
				<Header />
				<Base>
					<AppProvider>
						<Router />
					</AppProvider>
				</Base>
				<Footer />
			</BrowserRouter>
		</CookiesProvider>
	);
}

export default App;
