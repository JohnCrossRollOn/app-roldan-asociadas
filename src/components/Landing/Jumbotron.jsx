import elements from '../elements'

export default () => {
  return (
    <div
      className="hero min-h-screen snap-start"
      style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <div className="mb-5">{elements.jumbotron.title}</div>
          <div className="mb-5">{elements.jumbotron.subtitle}</div>
        </div>
      </div>
    </div>
  )
  return (
    <div className="w-full my-16 select-none rounded-lg flex flex-col items-center gap-4 md:gap-16 md:grid md:grid-cols-2">
      <img
        crossOrigin="anonymous"
        loading="lazy"
        src="https://res.cloudinary.com/dse7tzeho/image/upload/v1670084291/app-roldan-asociadas/Sin_t%C3%ADtulo-modified_rsyv8u.png"
        alt="Nosotros con un juez"
        className=""
      />
      <div className="flex flex-col gap-4"></div>
    </div>
  )
}
