import React from 'react'
import HomeSlider from '../HomeSlider'

const Home = () => {
  return (
    <div style={{ margin: "65px 0 0 0" }}>
      <HomeSlider />
      <div className="ratio ratio-16x9 my-3" style={{ width: "60%", height:"60%",margin:"auto"}}>
        <iframe src={`https://www.youtube.com/embed/watch?v=cJhpNmQvocg&list=TLGG1qglGjWZhdoxOTA2MjAyMg&t=15s&autoplay=1`} title="YouTube video" ></iframe>
      </div>
      <div className="ratio ratio-16x9 my-3" style={{ width: "70%", height:"60%",margin:"auto"}}>
        <iframe src={`https://www.youtube.com/embed/watch?v=cJhpNmQvocg&list=TLGG1qglGjWZhdoxOTA2MjAyMg&t=15s&autoplay=1`} title="YouTube video" ></iframe>
      </div>
    </div>
  )
}

export default Home
