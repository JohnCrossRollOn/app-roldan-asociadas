import elements from '../elements'

export default () => {
  return (
    <div
      className="hero min-h-screen snap-start pt-12"
      style={{ backgroundImage: `url("https://placeimg.com/1920/1080/arch")` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-left text-neutral-content">
        <div className="">
          <h2 className="mb-5 text-[4rem] text-white font-semibold">
            {elements.jumbotron.title}
          </h2>
          <div className="text-2xl font-semibold text-orange-500">
            {elements.jumbotron.subtitle}
          </div>
        </div>
      </div>
    </div>
  )
}
