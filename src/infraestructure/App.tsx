import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { CookiesProvider } from 'react-cookie';
import { Base, Footer, Header } from '../components';
import { AppProvider } from './AppProvider';
import { ThemeContext } from './ThemeContext';

function App() {
	return (
		<CookiesProvider defaultSetOptions={{ path: '/' }}>
			<AppProvider>
				<ThemeContext>
					<BrowserRouter>
						<Header />
						<Base>
							<Router />
						</Base>
						<Footer />
					</BrowserRouter>
				</ThemeContext>
			</AppProvider>
		</CookiesProvider>
	);
}

export default App;
