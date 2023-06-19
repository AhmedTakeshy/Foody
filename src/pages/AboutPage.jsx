import Map, { FullscreenControl, NavigationControl, Marker, Popup } from 'react-map-gl';
import { FaMapMarkerAlt } from 'react-icons/fa';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState } from 'react';


const AboutPage = () => {
  const [showPopup, setShowPopup] = useState(true);
  return (
    <div className="flex gap-4 flex-col justify-between w-full min-h-screen p-10 pt-12 bg-fixed bg-center bg-cover lg:flex-row bg-banner">
      <Map
        initialViewState={{
          longitude: 35.5,
          latitude: 38.7,
          zoom: 14
        }}
        style={{ width: 600, height: 400, borderRadius: "1rem" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
      >
        {showPopup && <Popup className="text-base" longitude={35.5} latitude={38.7}
          anchor="top"
          onClose={() => setShowPopup(false)}
        >
          Yenidoğan, Fakülte İçi Küme Evleri No:88, 38280 Talas/Kayseri
        </Popup>}
        <Marker longitude={35.5} latitude={38.7} anchor="bottom">
          <FaMapMarkerAlt size={32} className=" text-secondary" />
        </Marker>
        <FullscreenControl />
        <NavigationControl />
      </Map>
      <div className="flex flex-col mt-8 lg:mt-0 gap-6 text-left text-white max-w-xl">
        <div className='flex flex-col backdrop-blur-sm bg-gray-800/30 rounded-xl border-gray-400/50 p-4'>
          <h1 className="mb-4 text-4xl font-bold text-transparent bg-gradient-to-r from-white to-black bg-clip-text">
            Hakkımızda
          </h1>
          <p className="max-w-3xl text-2xl">
            Firmamız olarak müşteri memnuniyetini, sürekli gelişmeyi, yüksek kalite
            standartlarında üretimi, ekip çalışmasını, profesyonel yönetim
            anlayışını, teknolojik gelişmelerin takibini ve sosyal sorumluluğu esas
            alan bir anlayışla sektörün öncü kuruluşu olarak var olmayı ve
            sektördeki avantajlı pozisyonumuzun devamlılığını korumayı kendimize
            vizyon edindik.
          </p>
        </div>
        <div className='flex flex-col backdrop-blur-sm bg-gray-800/30 rounded-xl border-gray-400/50 p-4'>
          <h1 className="mb-2 text-4xl font-bold text-transparent bg-gradient-to-r from-white to-black bg-clip-text">
            Adres:
          </h1>
          <p className="max-w-3xl mb-4 text-2xl">
            Yenidoğan, Fakülte İçi Küme Evleri No:88, 38280 Talas/Kayseri
          </p>
          <h1 className="mb-2 text-4xl font-bold text-transparent bg-gradient-to-r from-white to-black bg-clip-text">
            Telefon:
          </h1>
          <p className="max-w-3xl text-2xl">
            +90 531 656 02 44
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
