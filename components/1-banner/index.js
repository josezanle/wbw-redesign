import Footer from "../footer";
import Navbar from "../navbar";

const Banner = () => {
  return (
    <header className="banner">
      <Navbar />
      <video src="/video/baner.mp4" autoPlay muted loop />
      <section className="overlay" />
      <section className="text">
        <h2 className="animate__animated animate__fadeInUp animate__delay-.5s">
          Webs, Apps y Diseños Deluxe
        </h2>
        <br />

        <p className="animate__animated animate__fadeInUp animate__delay-.8s">
          En WeBuildWebz nos encargamos de darte un servicio perfecto.
        </p>
        <br />
        <h3 className="animate__animated animate__fadeInUp animate__delay-.8s">
          WBW
        </h3>
      </section>

      <Footer />
      <style jsx>
        {`
          .banner {
            width: 100vw;
            min-height: 100vh;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          video {
            width: 100%;
            height: 100%;
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
          }
          .overlay {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: hsla(0, 0%, 11%, 0.7);
            z-index: 10;
          }
          .text {
            width: 400px;
            margin: 1em;
            padding: 1em;
            z-index: 100;
            color: white;
          }

          h2 {
            font-size: 3em;
            font-variant: small-caps;
          }
          p {
            font-size: 1.5em;
            font-style: italic;
          }
          h3 {
            font-size: 2em;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke-width: 1px;
            color: white;
          }
        `}
      </style>
    </header>
  );
};

export default Banner;