import React from 'react'

const HomeSlider = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade " data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src='https://images.unsplash.com/photo-1468436139062-f60a71c5c892?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60' height="500" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h2>Welcome to Compact Gyan</h2>
                        <p>Arise awake and stop not until the goal is reached.</p>
                        <button className="btn btn-danger mx-2">Coding</button>
                        <button className="btn btn-primary mx-2">Development</button>
                        <button className="btn btn-success mx-2">Ideas</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" height="500" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h2>Welcome to Website</h2>
                        <p>Arise awake and stop not until the goal is reached.</p>
                        <button className="btn btn-danger mx-2">Coding</button>
                        <button className="btn btn-primary mx-2">Development</button>
                        <button className="btn btn-success mx-2">Ideas</button>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" height="500" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h2>Welcome to Blog</h2>
                        <p>Arise awake and stop not until the goal is reached..</p>
                        <button className="btn btn-danger mx-2">Coding</button>
                        <button className="btn btn-primary mx-2">Development</button>
                        <button className="btn btn-success mx-2">Ideas</button>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    )
}

export default HomeSlider
