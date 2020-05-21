import React from 'react';
import { LoadingCircle, LoadingInner, LoadingSpinner } from './_LoadingStyles';

const Loading = () => {
	return (
		<LoadingSpinner>
			<LoadingInner size={300}>
				<LoadingCircle
					zindex='inherit'
					diameter={200}
					bg='117, 93, 99, .7'
					top={100}
					left={100}
					transform={10}
				/>
				<LoadingCircle
					zindex='1001'
					diameter={30}
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
