import MainHeader from './components/MainHeader/MainHeader';
import Login from './components/Login/Login';
import Posts from './components/Posts/Posts';
import { useContext } from 'react';
import AuthContext from './store/auth-context';

function App() {
	const ctx = useContext(AuthContext);

	return (
		<>
			<MainHeader />
			{!ctx.isLoggedIn && <Login />}
			{ctx.isLoggedIn && <Posts />}
		</>
	);
}

export default App;
