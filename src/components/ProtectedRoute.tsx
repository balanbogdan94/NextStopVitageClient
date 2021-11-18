import { Navigate } from 'react-router-dom';
import { useAuthorization } from '../context/AuthorizationContext';

function ProtectedRoute({ children }: { children: JSX.Element }) {
	const { user } = useAuthorization();
	return user ? children : <Navigate to='/login' />;
}

export default ProtectedRoute;
