// Niralawebsolution.com / Website design & Development service Noida India
import React from 'react'
export default function Home() {
  return (
    <div>
    <div className="slider">
          <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="false">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="img/c2.jpg" className="d-block w-100 ih" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h4>Welcome to our website!</h4>
                  <p className="fs-5">We provide you best placement opportunities here.</p>
                  <a href="/Apply"><button type="button" className="btn btn-danger">Apply Now</button></a>
                </div>
              </div>
              <div className="carousel-item">
                <img src="img/c3.jpg" className="d-block w-100 ih" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h4>If you have skill,</h4>
                  <p className="fs-5">dont worry we are here for you.</p>
                  <a href="/Apply"><button type="button" className="btn btn-danger">Apply Now</button></a>
                </div>
              </div>
              <div className="carousel-item">
                <img src="img/c1.jpg" className="d-block w-100 ih" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h4>choose a job you love,</h4>
                  <p className="fs-5">and you will never have to work a day in your life.</p>
                  <a href="/Apply"><button type="button" className="btn btn-danger"> Apply Now </button></a>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="scroll container">
          <h2 style={{color: 'white', marginTop: '40px', textAlign: 'center'}}> <b> Our Leading Recruiters </b></h2>
          <div className="row_companys">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/ZS_Associates.svg" alt="" className="row_company" />
            <img src="https://pbs.twimg.com/media/F55_v2RXwAACscS.png" alt="" className="row_company" />
            <img src="https://www.freshersvoice.com/wp-content/uploads/2019/03/Josh-Technology-Group-Off-Campus.jpg" alt="" className="row_company" />
            <img src="data:image/jpeg;base64,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" alt="" className="row_company" />
            <img src="img/sap.png" alt="" className="row_company" />
            <img src="img/swiggy.png" alt="" className="row_company" />
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAADoCAMAAABVRrFMAAAAllBMVEX///8AAACOUaC9vb2pqamIiIjFxcWPj4+zs7PIyMj4+PhBQUFNTU0wMDD7+/uYmJjY2NhaWlrk5ORUVFSGQZrn5+fR0dGgoKDe3t7t7e11dXUdHR1ISEiKSJ3t5fCAgIBqamo9PT3UwdqDOZf38/hjY2MmJiYODg4XFxefba+zj7/o3euaZaq4lsPFq86TWqWofbbYxt6JJYaHAAAEGElEQVR4nO3YbXeiOByG8VBQEQQVq4C1I3arfZh2Z/f7f7nNPwmgbWfO7DnmuOu5fi8qEYTceTJWKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADnkF+6At68vH6/dBU8ebm/fXu4yo57ubm5ub9//3bpepzf6+29ZLt9ebh0Tc7u8c8fJtztNXbc99fbG+m4Px4vXZPzy/8y0a4u2bf3HzIeb66szx4f3tpF5O9L1+Ws3k2sa1w/Xq51zdd7kOv8nlbq7Ur3VnpdvHQFfKuml66BH2EabC5dBy/CIAgml66EF/+tZEU8nZbjvrzU5bjuy6vy5HQS6stn7riqqkKpcTmNalMsdbJ0WS31dJvNZuYmhT7Q5Vq/6EvruDCfrCL9kMRrruUmsGJbrue2OHHZQne6XRe2tnhYSWGoj+5Uat6JdHXdtcFeqUy/lHLNXh9s297Un5ZGmmX2urXHbMugE0m56Msm2rQrrqWYZ105dMlS1xRB1SdrlIlr7tjog4FN1gz0n1XfWrpZ/EVbyP232yd5kaeYg4Op/8RVPQh2T20U6YCnMmxc8qGrn4teBM9y8CSt0CXb98kOcnZsW28dRpltAz8SeUjhXnXVS/tstXLvS50niR2DqR5FbQNIeeSS7XOVpGZYKhXr14W581fJtM2iat9ReTcyfCQro8hMMBlSeiodAjejGlOxWftsUwkbSOqkaukBl0zKoTuIgnZt/DKZmbxJ2zxqFHTT20+6VRiHE9MJiZ0v8mZVVLXpwtRcVBRFlZvg21jYJJIsk9PjnyebHyUz+0oZD8/mJuu2obwYpt10Htkl4GhbOwjcyuEEJ5J/m8yeiU9usvUVbHT0kJEdfUdnz5Fs0Sebf5HMV5+ZKOs4HNpkRTcF+tzNh2TTsTP8vdH4ZbIsjJ2Vp2TSKdO2ziP7YvYXy2bdRLYS5sJIl2u1aavr/E6yzcdk0prPnvL0ZA6Pj5JN2vEhvVXa7/GllO9MzeXdnfngbrPJfpLMXuC6yi5KJ8nMOmuWqXi32UXKD+kzvRWye6aRW8HK3M6F2tbvMFPJ3g5Lk3SbdOVPycznR8PY3XGlZumnZKY5s9pNhcpTMlOjYNeuIHYlC/ri0ebL9N3AHJktiXyRf0pW20sX7rteZJ+S2YtS89TGU7A+SeOi9NHscjzrgtmpvu7KMog/JXNrrURo7GWDdZ9s4R7a39Tnr9RSZtC8Lu+yO7udH5ps+/Z3SzKVRj8M2hVzJQMxeN6aXdFKT7d5e2DnV6yH352ZqrIvzCI1miwmetM/3iwm3XdXMjAbzNTnBkQek3zccCfJyT+h8tML8qT45Q49787mv/hfVl3Ufn+eAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8D/wBJOjM5WaLboQAAAABJRU5ErkJggg==" alt="" className="row_company" />
            <img src="img/tcs.png" alt="" className="row_company" />
            <img src="img/tech-mahindra.jpg" alt="" className="row_company" />
            <img src="img/wipro.png" alt="" className="row_company" />
            <img src="img/wns.jpg" alt="" className="row_company" />
            <img src="img/zomato.png" alt="" className="row_company" />
            <img src="img/amazone.png" alt="" className="row_company" />
            <img src="img/cisco.png" alt="" className="row_company" />
            <img src="img/facebook.png" alt="" className="row_company" />
            <img src="img/flipkart.png" alt="" className="row_company" />
            <img src="img/hcl.jpg" alt="" className="row_company" />
            <img src="img/hp.png" alt="" className="row_company" />
            <img src="img/infosys.jpg" alt="" className="row_company" />
            <img src="img/lti.png" alt="" className="row_company" />
          </div>
        </div>
        <section className="section-work-data">
          <div className="container container-num">
            <div className="p-3">
              <h2 className="counter-numbers " data-number={2000}>2000+</h2>
              <h4>PRESTIGIOUS RECRUITERS</h4>
            </div>
            <div className="p-3">
              <h2 className="counter-numbers " data-number={2500}>2500+</h2>
              <h4>RECORD PLACEMENT (BATCH 2022)</h4>
            </div>
            <div className="p-3">
              <h2 className="counter-numbers " data-number={5000}>5000+</h2>
              <h4>ALUMNI SERVING TO CORPORATE WORLD</h4>
            </div>
            <div className="p-3">
              <h2 className="counter-numbers " data-number={24}>48 LPA</h2>
              <h4>HIGHEST PACKAGE OFFERED</h4>
            </div>
          </div>
        </section>
        <div className="container mt-5 mb-5">
          <div className="h-1">
            <div className="h-1-1 divhome">
              <h4>Highest Package (last 5 years trends)</h4>
              <img src="img/hi1.jpg" alt="img" className="hig" />
            </div>
            <div className="h-1-2 divhome">
              <h4>Average Package (Last 5 Years Trend)</h4>
              <img src="img/hh.png" alt="img" height={400} width={560} className="hig" />
            </div>
          </div>
          <div className="h-1">
            <div className="h1-1 divhome">
              <h4>Students Selected (Last 5 Years Trend)</h4>
              <img src="img/hi3.jpg" alt="img" className="hig" />
            </div>
            <div className="h1-2 divhome">
              <h4>Companies Visited (Last 5 Years Trend)</h4>
              <img src="img/hi4.jpg" alt="img" className="hig" />
            </div>
          </div>
        </div>
        <div className="contact ">
          <section className="contacts">
            <div className="container ">
              <div className="row">
                <div className="nvblue-bx" />
                <div className="col-sm-12 col-md-7 col-lg-8 nvblue wow fadeInDown" style={{visibility: 'visible', animationName: 'fadeInDown'}}>
                  <div className="contact-info"><br />
                    <h3>Quick Contact</h3>
                    <form className="contact-form" method="post" name="contact_frm" id="contact_frm" action="https://formspree.io/f/xrgdzbvl">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="md-form mb-0"><input type="text" id="name" name="name" className="form-control frm-name" placeholder="Name" required /></div>
                        </div>
                        <div className="col-md-4">
                          <div className="md-form mb-0"><input type="tel" id="phone" name="phone" className="form-control frm-mob" placeholder="Phone" pattern="^\d{10}$" required /></div>
                        </div>
                        <div className="col-md-4">
                          <div className="md-form mb-0"><input type="email" id="email" name="email" className="form-control frm-email" placeholder="Email" required /></div>
                        </div>
                        <div className="col-md-12">
                          <div className="md-form mb-0"><textarea name="message" id="message" className="form-control frm-msg" placeholder="Message" required defaultValue={""} /></div>
                        </div>
                        <div className="col-md-12">
                          <div className="my-4"><input type="submit" name="contact-submit" className="form-btn" defaultValue="Submit" /></div>
                          <br />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="bgc col-sm-12 col-md-5 col-lg-4 ltblue wow fadeInDown" style={{visibility: 'visible', animationName: 'fadeInDown'}}>
                  <div className="addrs-info"><br />
                    <h3 id="contactm">Contact Us</h3><br />
                    <ul>
                      <li className="map"><i className="bi bi-geo-alt icony" />
                        <p>BPIT , Rohini Sec 11, K.N Katju Marg, Delhi
                          110085 </p>
                      </li>
                      <li className="mob"><i className="bi bi-phone icony" />
                        <p>+91 987654321</p>
                      </li>
                      <li className="mail"><i className="bi bi-envelope icony" />
                        <p>bpit33334@gmail.com</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="ltblue-bx" />
              </div>
            </div>
          </section>
        </div>
        <div className="container-fluid back p-4 text-white text-center">
          <h2>About Us</h2>
          <div className="a-1 container contain  text-center">
            <div className="a-1-1 p-4">
              <h4>What We Do?</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae recusandae ullam laboriosam repellat
                doloribus soluta, culpa consequuntur aliquid nemo quibusdam fugiat dolores, omnis vitae debitis itaque!
                Repellat vero sequi ipsam alias aspernatur iste aperiam deserunt rem dicta ut, ad doloribus saepe ea animi
                fuga soluta, exercitationem cumque aliquam eaque provident?</p>
            </div>
            <div className="a-1-2 p-4">
              <h4>Why Choose This Website?</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae recusandae ullam laboriosam repellat
                doloribus soluta, culpa consequuntur aliquid nemo quibusdam fugiat dolores, omnis vitae debitis itaque!
                Repellat vero sequi ipsam alias aspernatur iste aperiam deserunt rem dicta ut, ad doloribus saepe ea animi
                fuga soluta, exercitationem cumque aliquam eaque provident?</p>
            </div>
            <div className="a-1-3 p-4">
              <h4>What's Our Motive?</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae recusandae ullam laboriosam repellat
                doloribus soluta, culpa consequuntur aliquid nemo quibusdam fugiat dolores, omnis vitae debitis itaque!
                Repellat vero sequi ipsam alias aspernatur iste aperiam deserunt rem dicta ut, ad doloribus saepe ea animi
                fuga soluta, exercitationem cumque aliquam eaque provident?</p>
            </div>
          </div>
        </div>
      </div>
      
    
  )
}
