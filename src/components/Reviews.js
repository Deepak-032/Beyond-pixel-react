import React from 'react'
import Heading from './Heading'
import './styles/Reviews.css'

function Reviews() {
    return (
        <div className="row m_t_zero p_t_mobile max_width review">
            <div className="col-12 d-lg-none mb-5">
                <Heading LWidth="81px" fontSize="40px" marginTop="0" heading={<>What People<br />Say About Us</>}></Heading>
            </div>
            <div className="col-12 col-lg d-none d-lg-block" style={{ fontSize: "40px", lineHeight: "1.1", fontWeight: "bold" }}>
                <br />What People<br />Say About<br />Us
            </div>
            <div id="carouselExampleFade" className="carousel carousel-fade carousel-dark slide col-12 col-lg-8" data-bs-ride="carousel">
                <span className="review_line d-none d-lg-block"></span>
                <div className="carousel-inner" style={{ minHeight: "290px" }}>
                    <div className="carousel-item active" >
                        <div className="client_name">
                            Beanly
                        </div>
                        We had an amazing experience working with Beyond Pixel. They really went the extra mile working with us and our product is now much more appealing. The level of photography skill they use is quite excellent and the quality of their end results itself is very high as well.
                    </div>
                    <div className="carousel-item">
                        <div className="client_name">
                            CodeupKid
                        </div>
                        Working with Beyond Pixel was a great experience. They were very easy to work with and always listened to any feedback that we had. The end product was exactly what we wanted. Codeupkid is happy with our branding, logo, social media identity, and website! We are looking forward to working together again in the future!
                    </div>
                    <div className="carousel-item">
                        <div className="client_name">
                            Phoenix Solutions
                        </div>
                        Beyond Pixel has been great to work with. They took the time to get to know who we are and where we want to be, which made it much easier for us to come together on our brand identity. They were always prompt in responding and even though there were some delays in getting everything done, they did everything they could so that the result was worth the wait.
                    </div>
                    <div className="carousel-item">
                        <div className="client_name">
                            IITians Caliber
                        </div>
                        Beyond Pixel helped us to establish the social media platforms that helped us with our creative work. They were very careful in curating the strategy that would help us move ahead, and we are grateful for their efforts.
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <i className="bi bi-caret-left-fill navigate"></i>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next width" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <i className="bi bi-caret-right-fill navigate"></i>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div >
    )
}

export default Reviews
