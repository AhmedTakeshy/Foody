import Map, { FullscreenControl, NavigationControl, Marker, Popup } from 'react-map-gl';
import { FaMapMarkerAlt } from 'react-icons/fa';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useState } from 'react';


const AboutPage = () => {
  const [showPopup, setShowPopup] = useState(true);
  return (
    <div className="flex justify-between w-full min-h-screen p-10 pt-12 bg-fixed bg-center bg-cover bg-banner">
      <div className="flex flex-col items-start text-left text-white ">
        <h1 className="mb-5 text-5xl font-bold text-transparent bg-gradient-to-r from-white to-black bg-clip-text">
          Hakkımızda
        </h1>
        <p className="max-w-3xl mb-10 text-2xl">
          Firmamız olarak müşteri memnuniyetini, sürekli gelişmeyi, yüksek kalite
          standartlarında üretimi, ekip çalışmasını, profesyonel yönetim
          anlayışını, teknolojik gelişmelerin takibini ve sosyal sorumluluğu esas
          alan bir anlayışla sektörün öncü kuruluşu olarak var olmayı ve
          sektördeki avantajlı pozisyonumuzun devamlılığını korumayı kendimize
          vizyon edindik.
        </p>
      </div>
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
    </div>
  );
};

export default AboutPage;
