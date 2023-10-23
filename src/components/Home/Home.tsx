import Services from "./Services";
import Pricing from "./Pricing";
import Reviews from "./Reviews";
import Cover from "./Cover";
import Projects from "./Projects";

const Home = () => {
  return (
    <>
      <Cover />

      <section className="container mt-5">
        {/* Services Section */}
        <Services />

        {/* Pricing Section */}
        <Pricing />

        {/* Reviews Section */}
        <Reviews />

        <Projects/>
      </section>
    </>
  );
};

export default Home;
