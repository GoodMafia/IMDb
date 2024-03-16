import { getAuth, signOut } from 'firebase/auth'
import { useState } from 'react'
import {
	NavLink,
	Route,
	BrowserRouter as Router,
	Routes,
	useNavigate
} from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import './css/App.scss'
import ProjectLogo from './img/Logo.svg'
import SearchImg from './img/Search.svg'
import BurgerButton from './img/burgerButton.svg'
import UserLogo from './img/profile.svg'
import FullPage from './pages/FullPage/FullPage.jsx'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Search from './pages/Search/Search.jsx'
import panelSearch from './img/search-3-xxl.png'
import whiteProfile from './img/whiteProfile.png'
import Error404 from './pages/Error404/Error404.jsx'


function App() {
	const navigate = useNavigate()
	const auth = getAuth()
	const [user, setUser] = useState(null)
	function signOutRender() {
		signOut(auth)
		setUser(null)
		navigate('/login')

	}

	const [isVisible, setIsVisible] = useState(false)
	const [regulate, setRegulate] = useState(true)

	const togglePanel = () => {
		setIsVisible(!isVisible)
		setRegulate(!regulate)
	}

	return (
		<>
			<header>
				<div>
					<div className='container parent'>
						{regulate && (
							<button
								className='burger invisible'
								onClick={() => togglePanel()}
							>
								<img src={BurgerButton} className='burger-img' />
							</button>
						)}
						<div className={`leftPanel ${isVisible ? '' : 'strictInvisible'}`}>
							<button onClick={() => togglePanel()} className='burger white'>
								X
							</button>
							{user ? (
								<button onClick={() => signOutRender()} className='user-email'>{user.email}</button>
							) : (
								<NavLink to='/register'>
									<img
										className='profileLogo inPanel'
										src={whiteProfile}
										alt='img'
									/>
								</NavLink>
							)}
							<NavLink to='/search' className='searchBtn'>
								<img className='search-icon' src={panelSearch} alt='img' />
							</NavLink>
							<NavLink to='/' className='link'>
								Box Office
							</NavLink>
							<NavLink to='/' href='#' className='link'>
								Media
							</NavLink>
							<NavLink to='/' href='#' className='link'>
								Society
							</NavLink>
							<NavLink to='/' href='#' className='link'>
								Ratings
							</NavLink>
							<NavLink to='/' href='#' className='link'>
								DVD & Blu-Ray
							</NavLink>
						</div>
						<NavLink to='/' href='#' className='logo'>
							<img src={ProjectLogo} alt='img' />
						</NavLink>
						<NavLink to='/' className='link forAdaptive'>
							Box Office
						</NavLink>
						<NavLink to='/' href='#' className='link forAdaptive'>
							Media
						</NavLink>
						<NavLink to='/' href='#' className='link forAdaptive'>
							Society
						</NavLink>
						<NavLink to='/' href='#' className='link forAdaptive'>
							Ratings
						</NavLink>
						<NavLink to='/' href='#' className='link forAdaptive'>
							DVD & Blu-Ray
						</NavLink>
						<div className='flexJustify'>
							<div className='searchBlock'></div>
							<NavLink to='/search' className='searchBtn forAdaptive'>
								<img className='search-icon' src={SearchImg} alt='img' />
							</NavLink>
							{user ? (
								<button onClick={() => signOutRender()} className='user-email forAdaptive'>{user.email}</button>
							) : (
					
								<NavLink className='forAdaptive' to='/register'>
									<img className='profileLogo' src={UserLogo} alt='img' />
								</NavLink>
							)}
						</div>
					</div>
				</div>
			</header>
			<Routes>
				<Route path='*' element={<Error404/>}></Route>
				<Route path='/' element={<FullPage />}></Route>
				<Route path='/search' element={<Search />}></Route>
				<Route
					path='/register'
					element={<Register setUser={setUser} />}
				></Route>
				<Route path='/login' element={<Login setUser={setUser} />}></Route>
			</Routes>
			<Footer />
		</>
	)
}

export default App
