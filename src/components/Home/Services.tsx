const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Our expert team can create custom web solutions tailored to your needs.",
    },
    {
      title: "Design Services",
      description:
        "We offer professional design services to make your brand stand out.",
    },
    {
      title: "Consulting",
      description:
        "Get expert advice and guidance on your business strategies and technology decisions.",
    },
  ];

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <h2 className="mb-4">Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            vehicula sem sagittis, lobortis elit quis, rhoncus mauris. Curabitur
            vehicula tortor vitae urna aliquam congue. Quisque venenatis lorem
            in risus pretium facilisis. Ut mattis, dolor nec aliquam aliquet,
            erat libero bibendum risus, ut convallis eros quam in elit.
          </p>
        </div>
      </div>
      <div className="row">
        {services.map((service, index) => (
          <div className="col-md-4" key={index}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
