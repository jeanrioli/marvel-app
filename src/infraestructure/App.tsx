import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { CookiesProvider } from 'react-cookie';
import { Base, Footer, Header } from '../components';
import { ThemeContext } from './ThemeContext';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
	return (
		<CookiesProvider defaultSetOptions={{ path: '/' }}>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<ThemeContext>
						<BrowserRouter>
							<Header />
							<Base>
								<Router />
							</Base>
							<Footer />
						</BrowserRouter>
					</ThemeContext>
				</PersistGate>
			</Provider>
		</CookiesProvider>
	);
}

export default App;
