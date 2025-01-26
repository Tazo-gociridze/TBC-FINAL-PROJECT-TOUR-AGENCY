
const MapLocation = () => {
  return (
    <div className="h-96 w-screen lg:w-[450px] lg:pb-20 xl:w-[500px] 2xl:w-[700px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d885.8047675235915!2d44.81420015353434!3d41.68856791881165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cf7fba881d3%3A0xc63a1f4a930756f3!2s11%20Vakhtang%20Gorgasali%20St%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1737878730271!5m2!1sen!2sge"
        width="100%"
        height="100%"
        allowFullScreen
        loading="lazy"
        className="border-0"
      ></iframe>
    </div>
  );
};

export default MapLocation;
