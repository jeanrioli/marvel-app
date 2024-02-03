import { RootState } from '../../infraestructure/redux/store';
import { connect, ConnectedProps } from 'react-redux';
import { AuthProvider } from './AuthProvider';
import { AppOperations } from '../../infraestructure/redux/App.operations';

const mapStateToProps = (state: RootState) => ({
	isAuthenticated: state.app.isAuthenticated,
});

const mapDispatchToProps = {
	setIsAuthenticated: AppOperations.setIsAuthenticated,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export type ReduxProps = ConnectedProps<typeof connector>;
const AuthProviderConnected = connector(AuthProvider);
export { AuthProviderConnected as AuthProvider };
