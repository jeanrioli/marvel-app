import { RootState } from '../../infraestructure/redux/store';
import { connect, ConnectedProps } from 'react-redux';
import { Authentication } from './Authentication';
import { AppOperations } from '../../infraestructure/redux/App.operations';

const mapStateToProps = (state: RootState) => ({
	isAuthenticated: state.app.isAuthenticated,
});

const mapDispatchToProps = {
	setIsAuthenticated: AppOperations.setIsAuthenticated,
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export type ReduxProps = ConnectedProps<typeof connector>;
const AuthenticationConnected = connector(Authentication);
export { AuthenticationConnected as Authentication };

export * from './Authentication';
