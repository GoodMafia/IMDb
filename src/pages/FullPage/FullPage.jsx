import React from 'react'
import RecentlyViewed from '../../Components/RecentlyViewed/RecentlyViewed'
import ThreeBlocks from '../../Components/ThreeBlocks/ThreeBlocks'
import Main from '../../Components/Main/Main'

export default function FullPage() {
	return (
		<>
			<Main />
			<ThreeBlocks />
			<RecentlyViewed />
		</>
	)
}
