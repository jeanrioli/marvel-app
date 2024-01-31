import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
	CharacterDetails,
	Characters,
	Comics,
	ComicDetails,
	Creators,
	CreatorDetails,
	Home,
	Favorites,
} from '../features';

export const Router: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/characters' element={<Characters />} />
			<Route path='/characters/:id' element={<CharacterDetails />} />
			<Route path='/comics' element={<Comics />} />
			<Route path='/comics/:id' element={<ComicDetails />} />
			<Route path='/creators' element={<Creators />} />
			<Route path='/creators/:id' element={<CreatorDetails />} />
			<Route path='/favorites' element={<Favorites />} />
		</Routes>
	);
};
