import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Characters, Comics, Creators, Favorites, Home } from '../features';

export const Router: FC = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/characters' element={<Characters />} />
			<Route path='/characters/:id' element={<Characters />} />
			<Route path='/comics' element={<Comics />} />
			<Route path='/comics/:id' element={<Comics />} />
			<Route path='/creators' element={<Creators />} />
			<Route path='/creators/:id' element={<Creators />} />
			<Route path='/favorites' element={<Favorites />} />
		</Routes>
	);
};
