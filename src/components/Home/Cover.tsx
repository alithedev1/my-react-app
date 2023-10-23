const Cover = () => {
    const backgroundImageUrl = "https://images.unsplash.com/photo-1517216015940-049a2d4e2da4?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjMyMDc0fQ&s=14035a7d76df29c4697de036fcd005ce";

  const divStyle = {
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundImage: `url("${backgroundImageUrl}")`,
  };
    return <section className="pt-5 pb-1 mt-0 align-items-center d-flex bg-dark"
    style={divStyle}>
    <div className="container">
      <div
        className="row  justify-content-start align-items-center d-flex  h-100 ">
        <div className="col-12 col-md-8  h-50 ">
          <h1 className="display-4  text-light mb-2 mt-5"><strong>Center
              left</strong> </h1>
          <p className="lead  text-light mb-3">Sub-heading. Header 100% height
            with bottom align items</p>
          <p>
            <a href="#"
              className="btn btn-outline-light btn-round m-2 ms-0  btn-lg  ">Get
              started now </a>
            <a href="#" className="btn bg-light btn-round m-2   btn-lg btn-rised">
              <i className="fa fa-play  mr-md-2" aria-hidden="true"></i> Watch
              video</a>
          </p>
          <div className="btn-container-wrapper p-relative d-block  zindex-1">
            <a className="btn btn-link btn-lg   mt-md-3 mb-4 scroll align-self-center text-light"
              href="#section-1">
              <i className="fa fa-angle-down fa-lg text-light"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default Cover;