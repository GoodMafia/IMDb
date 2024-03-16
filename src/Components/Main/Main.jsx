// SCSS
import './Main.scss'

// Images
import FantasticBeasts from '../../img/Fantastic.png'
import Info from '../../img/Info.svg'
import DrStrange from '../../img/Strange.png'
import Ticket from '../../img/Ticket.svg'
import WonderWoman from '../../img/WW.png'
import WatchList from '../../img/WatchList.svg'
import AssasinsCreed from '../../img/assasins-creed.png'
import Flash from '../../img/flash.jpg'

// Components
import { useState } from 'react'

export default function Main() {
	const [activePoster, setActivePoster] = useState(0)
	const [isHover, setIsHover] = useState(false)

	const arrPosters = [
		AssasinsCreed,
		FantasticBeasts,
		DrStrange,
		WonderWoman,
		Flash,
	]
	function prevPost() {
		if (activePoster === 0) {
			setActivePoster(arrPosters.length - 1)
		} else {
			setActivePoster(activePoster - 1)
		}
	}

	function nextPost() {
		if (activePoster === arrPosters.length - 1) {
			setActivePoster(0)
		} else {
			setActivePoster(activePoster + 1)
		}
	}

	return (
		<main>
      <div className="nowPlayingText"><h2>Now Playing</h2></div>
			<div className='parent1 centerBlock'>
				<button className='sliderBtn' onClick={() => prevPost()}>
					🠔
				</button>

				<div
					onMouseLeave={() => setIsHover(false)}
					onMouseEnter={() => setIsHover(true)}
				>
					<img
						className='preview-img'
						src={arrPosters[activePoster]}
						alt='img'
					/>
					<div className='positionClass'>
						<div
							className={isHover === true ? 'whole-block' : 'whole-block none'}
						>
							<div className='wrapper'>
								<img className='small-svg' src={Info} alt='img' />
								<p>Information</p>
							</div>
							<div className='wrapper'>
								<img className='small-svg' src={Ticket} alt='img' />
								<p>Buy Ticket</p>
							</div>
							<div className='wrapper'>
								<img className='small-svg' src={WatchList} alt='img' />
								<p>Add to watch list</p>
							</div>
						</div>
					</div>
				</div>

				<button className='sliderBtn' onClick={() => nextPost()}>
					🠖
				</button>
			</div>
		</main>
	)
}
