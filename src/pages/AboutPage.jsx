const AboutPage = () => {
  return (
    <div className="flex flex-col items-start min-h-screen pt-12 pl-24 text-left text-white bg-fixed bg-center bg-cover bg-banner">
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
  );
};

export default AboutPage;
