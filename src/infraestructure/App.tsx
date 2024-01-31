import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { CookiesProvider } from 'react-cookie';
import { Base, Footer, Header } from '../components';

function App() {
	return (
		<CookiesProvider defaultSetOptions={{ path: '/' }}>
			<BrowserRouter>
				<Header />
				<Base>
					<Router />
				</Base>
				<Footer />
			</BrowserRouter>
		</CookiesProvider>
	);
}

export default App;
