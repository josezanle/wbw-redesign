import Navbar from "../navbar";

const Banner = () => {
  return (
    <header className="banner">
      <Navbar />
      <section className="text">
        <h2 className="text-animate">Webs, Apps y Diseños Deluxe</h2>
        <br />

        <p>En WeBuildWebz nos encargamos de darte un servicio perfecto.</p>
        <br />
      </section>

      <style jsx>
        {`
          .banner {
            width: 100vw;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .text {
            width: 400px;
            margin: 1em;
            padding: 1em;
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
        `}
      </style>
    </header>
  );
};

export default Banner;
