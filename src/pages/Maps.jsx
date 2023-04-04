import React from 'react';
import { GOOGLE_MAPS_API } from '../components/GoogleMapsAPI';
import GoogleMap from 'google-map-react';
import RoomIcon from '@mui/icons-material/Room';

const AnyReactComponent = ({ text }) => (
	<div>
		<RoomIcon sx={{ fontSize: 'large', color: 'royalblue' }} />
		{text}
	</div>
);

export default function SimpleMap() {
	const cords = [21.233523749701856, 72.86360215459648];
	const defaultProps = {
		center: {
			lat: cords[0],
			lng: cords[1],
		},
		zoom: 15,
	};

	return (
		<>
			{/* Important! Always set the container height explicitly */}
			<div style={{ height: 'calc(100vh - 140px)', width: '100%', borderRadius: 'var(--border-radius)', overflow: 'hidden' }}>
				<GoogleMap
					bootstrapURLKeys={{ key: GOOGLE_MAPS_API }}
					defaultCenter={defaultProps.center}
					defaultZoom={defaultProps.zoom}
				>
					<AnyReactComponent
						lat={cords[0]}
						lng={cords[1]}
						text='Silver Business Point'
					/>
				</GoogleMap>
			</div>
		</>
	);
}
