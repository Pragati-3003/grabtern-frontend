import React from 'react'

function Banner() {
    return (
<section className="slider-area ">
            <div className="slider-active slick-initialized slick-slider">
                <div className="slick-list draggable"><div className="slick-track" style={{opacity: 1, width: "1423px"}}><div className="single-slider slider-height d-flex align-items-center slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabIndex="0" style={{ width: "1423px", position: "relative", left: "0px", top: "0px", zIndex: 999, opacity: 1}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-7 col-md-12">
                                <div className="hero__caption">
                                    <h1 data-animation="fadeInLeft" data-delay="0.2s" className="" style={{animationDelay: "0.2s"}}>Online learning<br /> platform</h1>
                                    <p data-animation="fadeInLeft" data-delay="0.4s" className="" style={{animationDelay: "0.4s"}}>Build skills with courses, certificates, and degrees online from world-className universities and companies</p>
                                    <a href="#" className="btn hero-btn" data-animation="fadeInLeft" data-delay="0.7s" tabIndex="0" style={{animationDelay: "0.7s"}}>Join for Free</a>
                                </div>
                            </div>
                        </div>
                    </div>          
                </div></div></div>
            </div>
        </section>
    )
}

export default Banner