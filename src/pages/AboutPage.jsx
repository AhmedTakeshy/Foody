import Map, { FullscreenControl, NavigationControl, Marker, Popup } from 'react-map-gl';
import { FaMapMarkerAlt } from 'react-icons/fa';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState } from 'react';


const AboutPage = () => {
  const [showPopup, setShowPopup] = useState(true);
  return (
    <div className="flex flex-col justify-between w-full min-h-screen gap-4 p-10 pt-12 bg-fixed bg-center bg-cover lg:flex-row bg-banner">
      <Map
        initialViewState={{
          longitude: 35.5,
          latitude: 38.7,
          zoom: 14,
        }}
        style={{ width: 650, height: 500, borderRadius: "1rem" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
      >
        {showPopup && (
          <Popup
            className="text-base"
            longitude={35.5}
            latitude={38.7}
            anchor="top"
            onClose={() => setShowPopup(false)}
          >
            Yenidoğan, Fakülte İçi Küme Evleri No:88, 38280 Talas/Kayseri
          </Popup>
        )}
        <Marker longitude={35.5} latitude={38.7} anchor="bottom">
          <FaMapMarkerAlt size={32} className=" text-secondary" />
        </Marker>
        <FullscreenControl />
        <NavigationControl />
      </Map>
      <div className="flex flex-col max-w-xl gap-6 mt-8 text-left text-white lg:mt-0">
        <div className="flex flex-col p-4 backdrop-blur-sm bg-gray-800/30 rounded-xl border-gray-400/50">
          <h1 className="mb-4 text-4xl font-bold text-transparent bg-gradient-to-r from-white to-black bg-clip-text">
            About us:
          </h1>
          <p className="max-w-3xl text-2xl">
            As our company, we have adopted the vision of existing as a leading
            company in the sector and maintaining the continuity of our
            advantageous position in the sector with an understanding based on
            customer satisfaction, continuous development, production at high
            quality standards, team work, professional management approach,
            follow-up of technological developments and social responsibility.
          </p>
        </div>
        <div className="flex flex-col p-4 backdrop-blur-sm bg-gray-800/30 rounded-xl border-gray-400/50">
          <h1 className="mb-2 text-4xl font-bold text-transparent bg-gradient-to-r from-white to-black bg-clip-text">
            Address:
          </h1>
          <p className="max-w-3xl mb-4 text-2xl">
            Yenidoğan, Fakülte İçi Küme Evleri No:88, 38280 Talas/Kayseri
          </p>
          <h1 className="mb-2 text-4xl font-bold text-transparent bg-gradient-to-r from-white to-black bg-clip-text">
            Phone:
          </h1>
          <p className="max-w-3xl text-2xl">+964 781 454 4243</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
