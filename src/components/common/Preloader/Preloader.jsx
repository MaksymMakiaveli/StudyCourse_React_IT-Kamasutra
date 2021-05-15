import React from 'react';
import s from './Preloader.module.css';
import preloader from '../../../assets/images/preloader.svg';

const Preloader = () => {
	return (
		<div className={s.container_preloader}>
			<img className={s.preloader} src={preloader} alt='' />
		</div>
	);
};

export default Preloader;
