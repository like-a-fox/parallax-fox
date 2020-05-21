import React from 'react';
import { LoadingCircle, LoadingInner, LoadingSpinner } from './_LoadingStyles';

const Loading = () => {
	return (
		<LoadingSpinner diameter={90}>
			<LoadingInner>
				<LoadingCircle
					zindex='inherit'
					diameter={70}
					bg='117, 93, 99, .7'
					top={100}
					left={100}
					transform={10}
				/>
				<LoadingCircle
					zindex='1001'
					diameter={35}
					bg='86,79,114,0.9'
					top={50}
					left={50}
					transform={50}
				/>
			</LoadingInner>
		</LoadingSpinner>
	);
};

export default Loading;
