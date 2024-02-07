import { useState, useEffect, useRef } from 'react';

import './carousel.css';

interface Props {
	images_path: string[];
	height: number;
}

function Carousel({ images_path, height }: Props) {
	const carouselScroll = useRef<HTMLDivElement>(null);
	const [scrollPosition, setScrollPosition] = useState<number>(0);
	const [maxReached, setMaxReached] = useState<boolean>(false);
	const maxScrollPosition = carouselScroll.current
		? carouselScroll.current.scrollWidth - carouselScroll.current.clientWidth
		: 0;

	function next() {
		if (carouselScroll.current) {
			const scrollWidth = carouselScroll.current.scrollWidth;
			const scrollAmount = carouselScroll.current.clientWidth * 0.6;

			const newScrollPosition = Math.min(
				scrollPosition + scrollAmount,
				scrollWidth - carouselScroll.current.clientWidth
			);
			setScrollPosition(newScrollPosition);
		}
	}

	function prev() {
		if (carouselScroll.current) {
			const scrollAmount = carouselScroll.current.clientWidth * 0.6;

			const newScrollPosition = Math.max(scrollPosition - scrollAmount, 0);
			setScrollPosition(newScrollPosition);
		}
	}

	useEffect(() => {
		function isMaxReached() {
			if (
				(carouselScroll.current &&
					window.innerWidth >= carouselScroll.current.scrollWidth) ||
				(scrollPosition >= maxScrollPosition && scrollPosition !== 0)
			) {
				setMaxReached(true);
			} else {
				setMaxReached(false);
			}
		}

		isMaxReached();

		window.addEventListener('resize', () => {
			setScrollPosition(0);
			isMaxReached();
		});
	}, [maxScrollPosition, scrollPosition]);

	return (
		<div className='carousel' ref={carouselScroll}>
			{images_path.map((image, index) => (
				<img
					key={index}
					src={window.location.origin + image}
					style={{
						transform: `translateX(-${scrollPosition}px)`,
						transition: 'transform 0.5s ease-in-out',
					}}
				/>
			))}
			{scrollPosition !== 0 && (
				<button
					onClick={prev}
					className='btn-carousel btn-prev'
					style={{ top: `${height * 1.5}%` }}
				>
					&#60;
				</button>
			)}
			{!maxReached && (
				<button
					onClick={next}
					className='btn-carousel btn-next'
					style={{ top: `${height * 1.5}%` }}
				>
					&#62;
				</button>
			)}
		</div>
	);
}

export default Carousel;
