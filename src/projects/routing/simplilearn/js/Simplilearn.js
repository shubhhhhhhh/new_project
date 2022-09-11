import React from "react";


export default class Simplilearn extends React.Component {
    render() {
        return (
            <>
                <div>
                    <h1 style={{color:"dodgerblue"}} className="bg-secondary">hey there</h1>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-10 bg-primary p-2"></div>
                            <div className="col-md-10 bg-success p-2"></div>
                        </div>
                    </div>
                </div>
                <header>
                   
                    <div className="header bglightlavender">
                        <div className="middle-div ">
                            <div className="header-container  ">
                                <ul >
                                    <li><a href="#">Job Guarantee</a></li>
                                    <li><a href="#">Free Online Courses</a></li>
                                    <li><a href="#">Resources</a></li>
                                    <li><a href="#">Corporate Training</a></li>
                                    <li><a href="#">Become an Instructor</a></li>
                                    <li><a href="#">Hire From Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>

                <section>
                    <div className=" search ">
                        <div className="middle-div  ">
                            <div className="search-div ">
                                <div className="search-logo ">
                                    {/* <img src="{{./assets/images/simplilearn1.svgz" width="150px" height="auto" style="position:relative; top: 5px;left: 5px;}}"></img> */}
                                </div>
                                <div className="search-menu ">
                                    {/* <h2 style="{{background-image:url(./assets/icons/bars-solid.svg);}}">All Courses</h2> */}
                                    <input type="search" placeholder="what do you want to learn?" style={{color: "dodgerblue"}}></input>
                                    <h3>
                                        <p>Log in</p>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
{/* 
                <section>
                    <div class="homepage bgred" style={{"background-image: url(./assets/images/banner_v1.webp);"}}>
                        <div class="middle-div ">
                            <div class="left-col ">
                                <h1>World’s #1
                                    Online Bootcamp</h1>
                                <div>
                                    <h2>3,000,000 careers advanced</h2>
                                    <h2>1,500live classes every month</h2>
                                    <h2>85% report career benefits including promotion or a new job</h2>
                                </div>
                                <h3>
                                    <button>Explore Programs</button>
                                </h3>
                            </div>
                            <div class="right-col ">
                                <h1>
                                    <iframe src="https://www.youtube.com/embed/watch?v=6m0Uv9WLMgA&list=RD6m0Uv9WLMgA&start_radio=1" width="520px" height="325px" frameborder="0" allowfullscreen></iframe>
                                </h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div class="partnering">
                        <div class="middle-div ">
                            <div class="full-div ">Partnering with world's leading universities and companies</div>
                            <div class="partnering-img ">
                                <img src="./assets/images/university-d-v2.webp"  ></img>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div class="programs ">
                        <div class="middle-div ">
                            <div class="post-graduate">
                                <h1>Get Certified, Get Ahead with Our Programs</h1>
                                <h2>Post Graduate Programs</h2>
                                <h3>Learn from global experts and get certified by the world's leading universities</h3>
                                <ul>
                                    <li style="background-image: url(./assets/icons/circle-check-solid.svg);"><h4>University Certificates</h4></li>
                                    <li style="background-image: url(./assets/icons/circle-check-solid.svg);"><h4>University Alumni Status</h4></li>
                                    <li style="background-image: url(./assets/icons/circle-check-solid.svg);"><h4>Masterclasses from University</h4></li>
                                    <li style="background-image: url(./assets/icons/circle-check-solid.svg);"><h4>Career Support</h4></li>
                                </ul>
                            </div>
                            <div class="pgslider">
                                <div class="pgtemplate">
                                    <img src="./assets/images/ai.webp" width="100%" alt=""></img>
                                    <div class="inner-pgtemplate">
                                        <h1>AI for decision making : bussiness strategies and applications</h1>
                                        <h2>
                                            <p>3months</p>
                                        </h2>
                                        <h2>
                                            <p>
                                                cohort starts:13may,2022
                                            </p>
                                        </h2>
                                        <h3><img src="./assets/images/ai_university_logo.svgz" width="200px" alt=""></img></h3>
                                    </div>
                                </div>
                                <div class="pgtemplate">
                                    <img src="./assets/images/ai.webp" width="100%" alt=""></img>
                                    <div class="inner-pgtemplate">
                                        <h1>AI for decision making : bussiness strategies and applications</h1>
                                        <h2>
                                            <p>3months</p>
                                        </h2>
                                        <h2>
                                            <p>
                                                cohort starts:13may,2022
                                            </p>
                                        </h2>
                                        <h3><img src="./assets/images/ai_university_logo.svgz" width="200px" alt=""></img></h3>
                                    </div>
                                </div>
                                <div class="pgtemplate">
                                    <img src="./assets/images/ai.webp" width="100%" alt=""></img>
                                    <div class="inner-pgtemplate">
                                        <h1>AI for decision making : bussiness strategies and applications</h1>
                                        <h2>
                                            <p>3months</p>
                                        </h2>
                                        <h2>
                                            <p>
                                                cohort starts:13may,2022
                                            </p>
                                        </h2>
                                        <h3><img src="./assets/images/ai_university_logo.svgz" width="200px" alt=""></img></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

            </>
        )
    }
}