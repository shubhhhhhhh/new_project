import React, { Component } from "react";

export default class Matrimony extends Component {
    render() {
        return (
            <>
                <body>
                    {/* <Header>
                        <div style={{width:" 100%" , background-color:"white" , padding: 5px;font-size: 0;"}}>
                            <div style={{"width: 90%;background-color:white;padding: 0px 0px 0px 60px ;margin: auto;"}}>
                                <div
                                    style="width: 20%;background-color: white;padding: 0px;display: inline-block;vertical-align: middle;">
                                    <div style="width: 100%;background-color: white;padding: 5px 0px 5px 30px;">
                                        <img src="./images/bharat_matrimony.png" width="200px"></img>
                                    </div>
                                </div>
                                <div
                                    style="width: 30%;background-color: white;padding: 5px;display: inline-block;vertical-align: middle;">
                                    <div
                                        style="width: 20%;background-color: white;padding: 5px;display: inline-block;vertical-align: middle;">
                                        <img src="./" width="60px" height="60px"></img>
                                    </div>
                                    <div
                                        style="width: 80%;background-color: white;padding: 5px;display: inline-block;vertical-align: middle;">
                                        <h1 style="font-size: 15px;font-family: monospace;font-weight: bold ;">Most Trusted Matrimony
                                            Brand</h1>
                                        <h2 style="font-size: 12px;font-family:monospace;">by The Brand Trust Report by 2014</h2>
                                    </div>
                                </div>
                                <div
                                    style="width: 20%;background-color: white;padding: 5px 0px;display: inline-block;vertical-align: middle;">
                                    <div style="width: 100%;background-color: white;padding: 2px 0px 5px 140px;"><img
                                        src="./images/logos.jpg" alt="" width="80px"></div>
                                </div>
                                <div
                                    style="width: 25%;background-color: white;padding: 5px 0px;display: inline-block;vertical-align: middle;">
                                    <div
                                        style="width: 60%;background-color: white;padding: 5px 0px;display: inline-block;vertical-align: middle;">
                                        <p style="font-size: 12px;color: blue;">Download BharatMatrimony App</p>
                                        <p style="font-size: 12px;">1 Million+ Downloads</p>
                                    </div>
                                    <div
                                        style="width: 30%;background-color: white;padding: 5px 10px;;display: inline-block;vertical-align: middle;font-size: 10px;">
                                        <p
                                            style="width:55px;text-align:center;font-family: 'Courier New', Courier, monospace;font-size:13px;border: 1px solid red;border-radius: 5px;padding: 5px;background-color:orangered;color: white;">
                                            Login</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Header> */}
{/* 
                    <section>
                        <div style="width: 100%;background-color: gainsboro;font-size: 0;padding: 5px;">
                            <div style="width: 90%;background-color: gainsboro;margin: auto;padding: 5px;">
                                <div
                                    style="width:50%;transform: rotate(-5deg) ;background-color: gainsboro;margin: auto;vertical-align: middle;display: inline-block;padding: 5px">
                                    <img src="./images/login2.png" width="100%" style="border: 1px ; border-radius: 10px">
                                </div>
                                <div
                                    style="width:50%;background-color: gainsboro;margin: auto;vertical-align: middle;display: inline-block;padding: 5px;">
                                    <div style="width: 100%;background-color: gainsboro;padding: 5px 30px ;">
                                        <div style="width: 90%;background-color: white;padding: 5px 30px;margin: auto;">
                                            <div
                                                style="width: 100%;background-color: white;font-family: 'Courier New', Courier, monospace;font-weight: bold;padding:20px;margin: auto;">
                                                <p1
                                                    style="font-size:25px;font-family: 'Courier New', Courier, monospace;font-weight: bold;padding: 5px;">
                                                    Existing Member?Login</p1>
                                            </div>
                                            <div style="width: 100%;background-color: white;padding:5px;;margin: auto">
                                                <p style="padding:10px">
                                                    <input type="number;" name="Enter Mobile No/Matri ID/E-Mail ID">
                                                </p>
                                                <p style="padding:10px">
                                                    <input type="password" name="Enter password">
                                                </p>
                                                <p style="padding:10px;font-size: 15px;">
                                                    <input type="checkbox" name="Keep me logged in">Keep Me Logged In
                                                </p>
                                            </div>
                                            <div style="width:100%;background-color: white;padding: 0px 5px;;margin: auto"></div>
                                            <div style="width:100%;background-color: white;padding: 5px;;margin: auto">
                                                <p
                                                    style="width:250px;padding: 10px ;background-color: orange;color: white;border-radius: 30px;font-size: 18px;text-align: center;">
                                                    LOGIN</p>
                                            </div>
                                            <div style="width: 100%;background-color: white;padding: 5px;margin: auto;">
                                                <p
                                                    style="background-color:white;padding: 5px;font-size: 12px;font-family: 'Courier New', Courier, monospace;">
                                                    Trouble Logging In?</p>
                                            </div>
                                            <div style="width: 100%;background-color: white;padding: 5px ;margin: auto;">
                                                <p
                                                    style="font-size: 13px;display: inline-block;vertical-align: middle;font-family: 'Courier New', Courier, monospace;padding: 5px;">
                                                    Login with OTP</p>
                                                <p
                                                    style="font-size: 13px;display: inline-block;vertical-align: middle;font-family: 'Courier New', Courier, monospace;;padding: 5px 50px">
                                                    Forgot password?</p>
                                            </div>

                                        </div>
                                    </div>

                                    <div style="width: 100%;background-color: gainsboro ;padding: 5px 30px;">
                                        <div style="width: 90%;padding: 5px 30px;background-color: white;margin: auto;font-size: 20px;">
                                            <span>Not A Member?</span>
                                            <span
                                                style="font-weight: bold;font-style:normal;color: orange;font-family: 'Courier New', Courier, monospace;">Register
                                                Free</span>
                                        </div>
                                    </div>
                                    <div style="width: 100%;background-color: gainsboro;padding: 5px 30px;">
                                        <div style="width: 90%;background-color: white;padding:5px 20px;margin: auto;">
                                            <div
                                                style="width: 100%;background-color: white;padding: 5px;border: 1px solid grey;border-radius: 10px;">
                                                <div
                                                    style="width: 60%;background-color: white;padding: 5px;margin: auto;vertical-align: middle;display: inline-block;">
                                                    <div
                                                        style="width: 30%;background-color: white;padding: 5px;margin: auto;vertical-align: middle;display: inline-block;">
                                                        <img src="./images/phone logo.jpg " width="100%">
                                                    </div>
                                                    <div
                                                        style="width: 70%;background-color:white;padding: 5px 9px;margin: auto;vertical-align: middle;display: inline-block;font-size: 17px;">
                                                        Get Instant Updates About Your Matches!Download Our App Now!</div>
                                                </div>
                                                <div
                                                    style="width: 40%;background-color: white;padding:5px;margin: auto;vertical-align: middle;display: inline-block;">
                                                    <div
                                                        style="width: 100%;background-color: black;padding: 5px;border: 1px solid black;border-radius: 5px;background-color: black;">
                                                        <div
                                                            style="width: 30%;background-color: white;padding:5px;margin: auto;vertical-align: middle;display: inline-block;">
                                                            <img src="./images/playstore.jpg" width="100%">
                                                        </div>
                                                        <div
                                                            style="width: 70%;background-color: black;padding: 0px 5px;margin: auto;vertical-align: middle;display: inline-block;">
                                                            <p style="font-size: 10px;color: white;">Get It On </p>
                                                            <p
                                                                style="font-size: 18px;color: white;font-family: 'Courier New', Courier, monospace ;font-style: normal;">
                                                                Google Play</p>
                                                        </div>
                                                    </div>
                                                    <div style="width: 100%;background-color: black;padding: 5px;">
                                                        <div
                                                            style="width: 30%;background-color:black;padding: 5px;margin: auto;vertical-align: middle;display: inline-block; ">
                                                            <img src="./images/apple.png" width="30px">
                                                        </div>
                                                        <div
                                                            style="width: 70%;background-color: black;padding: 0px 5px ;margin: auto;vertical-align: middle;display: inline-block;font-size: 10px;">
                                                            <p style="font-size: 10px;color: white;">Download On The </p>
                                                            <p
                                                                style="font-size: 18px;color: white;font-family: 'Courier New', Courier, monospace;">
                                                                App Store</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div style="width: 100%;background-color: rgb(241, 237, 237);font-size: 0;padding: 5px;">
                            <div style="width: 90%;background-color: rgb(241, 237, 237);padding: 5px;margin: auto;">
                                <div
                                    style="width: 30%;background-color: rgb(241, 237, 237);padding: 5px 0px 5px 50px ;display: inline-block;vertical-align: middle;">
                                    <div
                                        style="width:30%;background-color: rgb(241, 237, 237);padding: 5px 0px 5px 40px;display: inline-block;vertical-align: middle;">
                                        <img src="./images/assuarance.jpg" width="50px" alt="">
                                    </div>
                                    <div
                                        style="width:70%;background-color: rgb(241, 237, 237);padding: 5px;display: inline-block;vertical-align: middle;">
                                        <p style="font-size: 18px;">Contact genuine profiles with 100% verified mobile numbers</p>
                                    </div>
                                </div>
                                <div
                                    style="width: 30%;background-color: rgb(241, 237, 237);padding: 5px;;display: inline-block;vertical-align: middle">
                                    <div
                                        style="width:30%;background-color: rgb(241, 237, 237);padding: 5px 0px 5px 40px;display: inline-block;vertical-align: middle;">
                                        <img src="./images/award.jpg" width="50px" alt="">
                                    </div>
                                    <div
                                        style="width:70%;background-color: rgb(241, 237, 237);padding: 5px;display: inline-block;vertical-align: middle;">
                                        <p style="font-size: 18px;font-style: normal;">Highest number Of documented marriages online</p>
                                        <p style="font-size: 12px;font-style: normal;font-family: 'Courier New', Courier, monospace;">
                                            -Limca Book Of Records</p>>
                                    </div>
                                </div>
                                <div
                                    style="width: 30%;background-color: rgb(241, 237, 237);padding: 5px 0px 5px 50px ;display: inline-block;vertical-align: middle;">
                                    <div
                                        style="width:30%;background-color: rgb(241, 237, 237);padding: 5px 0px 5px 40px;display: inline-block;vertical-align: middle;">
                                        <img src="./images/medalist.jpg" width="50px" alt="">
                                    </div>
                                    <div
                                        style="width:70%;background-color: rgb(241, 237, 237);padding: 5px;display: inline-block;vertical-align: middle;">
                                        <p style="font-size: 18px;font-style: normal;">The most trusted matrimony brand</p>
                                        <p style="font-size: 12px;font-style: normal;font-family: 'Courier New', Courier, monospace;">
                                            -The Brand Trust Report</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div style="width: 100%;background-color: gainsboro;padding: 5px;font-size: 0;">


                            <div style="width: 90%;background-color: gainsboro;padding: 5px;margin: auto;">

                                <div style="width: 100%;background-color: gainsboro;padding: 50px 5px 20px 5px;">
                                    <h style="font-size: 20px;text-transform: capitalize;">about BharatMatrimony </h>
                                </div>
                                <div style="width:100%;background-color:gainsboro;padding: 20px 5px;">
                                    <p style="font-size:16px;">BharatMatrimony-the pioneer in online matrimony,is the most trusted
                                        matrimony service for millions of Indians worldwide.BharatMatrimony has been recognised as
                                        the most trusted online matrimony service by the Brand Trust Report.We have also been
                                        featured in Limca Book of records for most number of documented marriages online.Our purpose
                                        is to build a better Bharat through happy marriages.</p>
                                </div>
                                <div style="width:100%;background-color: gainsboro;padding: 20px 5px;">
                                    <p style="font-size: 18px;text-transform: capitalize;">other matrimony sites</p>
                                    <div style="width: 50%;background-color: gainsboro;padding: 30px  0px;display: inline-block;vertical-align: middle;">
                                        <div style="width: 100%;background-color: gainsboro;padding: 10px 0px;">
                                            <div style="width:100%;background-color:white;margin: auto;padding:10px 20px;font-size:15px;border-radius:5px;">
                                                <p style="display: inline-block;font-size: 18px;vertical-align: middle;">regional sites</p>
                                            </div>
                                        </div>
                                        <div style="width:100%;background-color:gainsboro;padding:5px 0px;font-size:15px;">
                                            <div style="width:100%;background-color:white;padding:10px 20px;font-size:15px;border-radius:5px;">
                                                <p style="display: inline-block;font-size: 18px;vertical-align: middle;">community matrimony </p>
                                            </div>
                                        </div>
                                        <div style="width:100%;background-color:gainsboro;padding:5px 0px;font-size:15px;">
                                            <div style="width:100%;background-color:white;padding:10px 20px;font-size:15px;border-radius:5px;">
                                                <p style="display: inline-block;font-size: 18px;vertical-align: middle;">religious sites</p>
                                            </div>
                                        </div>
                                        <div style="width:100%;background-color:gainsboro;padding:5px 0px;font-size:15px;">
                                            <div style="width:100%;background-color:white;padding:10px 20px;font-size:15px;border-radius:5px;">
                                                <p style="display: inline-block;font-size: 18px;vertical-align: middle;">exclusive sites</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style="width: 50%;background-color:gainsboro;padding: 5px 5px 60px 5px;display: inline-block;vertical-align: middle;">
                                        <div style="width:100%;background-color:gainsboro;padding:5px 0px;font-size:15px;">
                                            <div style="width:100%;background-color:white;padding:10px 20px;font-size:15px;border-radius:5px;">
                                                <p style="display: inline-block;font-size: 18px;vertical-align: middle;">mandap</p>
                                            </div>
                                        </div>
                                        <div style="width:100%;background-color:gainsboro;padding:5px 0px;font-size:15px;">
                                            <div style="width:100%;background-color:white;padding:10px 20px;font-size:15px;border-radius:5px;">
                                                <p style="display: inline-block;font-size: 18px;vertical-align: middle;">weddingbazaar</p>
                                            </div>
                                        </div>
                                        <div style="width:100%;background-color:gainsboro;padding:5px 0px;font-size:15px;">
                                            <div style="width:100%;background-color:white;padding:10px 20px;font-size:15px; border-radius:5px;">
                                                <p style="display: inline-block;font-size: 18px;vertical-align: middle;">community shaadi</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                        <div style="width: 100%;background-color: white;padding: 5px;font-size: 0;">
                            <div style="width: 90%;background-color: white;padding: 5px;margin: auto;">
                                <div style="width: 25%;;color: gainsboro;background-color: white;padding: 5px;display: inline-block;vertical-align: middle;border-right: 1px solid gainsboro;">
                                    <h1
                                        style="font-size: 18px;color: black;font-family: 'Courier New', Courier, monospace;text-transform: capitalize;">
                                        regional matrimony services</h1>
                                    <p style="font-size: 15px;">Assamese Matrimony</p>
                                    <p style="font-size: 15px;">Bengali Matrimony</p>
                                    <p style="font-size: 15px;">Bihari Matrimony</p>
                                    <p style="font-size: 15px;">Gujarati Matrimony</p>
                                    <p style="font-size: 15px;">Hindi Matrimony</p>
                                    <p style="font-size: 15px;">Kannada Matrimony</p>
                                    <p style="font-size: 15px;">Marathi Matrimony</p>
                                    <p style="font-size: 15px;">Kerala Matrimony</p>
                                    <p style="font-size: 15px;">Marwadi Matrimony</p>
                                    <p style="font-size: 15px;">Oriya Matrimony</p>
                                    <p style="font-size: 15px;">Punjabi Matrimony</p>
                                    <p style="font-size: 15px;">Parsi Matrimony</p>
                                    <p style="font-size: 15px;">Rajasthani Matrimony</p>
                                    <p style="font-size: 15px;">Tamil Matrimony</p>
                                    <p style="font-size: 15px;">Sindhi Matrimony</p>
                                    <p style="font-size: 15px;">Telugu Matrimony</p>
                                    <p style="font-size: 15px;">Urdu Matrimony</p>
                                </div>

                                <div style="width: 25%;background-color: white;padding: 40px 50px 170px 40px;display: inline-block;vertical-align: middle;border-right: 1px solid gainsboro;">

                                    <div style="width: 100%;color: gainsboro;background-color: white;padding: 5px;">
                                        <h1 style="font-size: 18px;color: black;font-family: 'Courier New', Courier, monospace;">Help&Support
                                        </h1>
                                        <p style="font-size: 15px;">24*7 live Help</p>
                                        <p style="font-size: 15px;">Contact us</p>
                                        <p style="font-size: 15px;">feedback</p>
                                        <p style="font-size: 15px;">faqs</p>
                                    </div>

                                    <div style="width: 100%;background-color: white;padding: 10px 5px;">
                                        <h1 style="font-size: 18px;color: black;font-family: 'Courier New', Courier, monospace;">our other services
                                        </h1>
                                        <p style="font-size: 15px;color: gainsboro;">Elitematrimony</p>
                                    </div>

                                    <div style="width: 100%;background-color: white;padding: 5px;">
                                        <h1 style="font-size: 18px;color: black;font-family: 'Courier New', Courier, monospace;">social initiatives
                                        </h1>
                                        <p style="font-size: 15px;color: gainsboro;">abilitymatrimony.com</p>
                                    </div>
                                </div>

                                <div style="width: 25%;background-color: white;padding: 40px 50px 90px 40px;display: inline-block;vertical-align: middle;border-right: 1px solid gainsboro;">

                                    <div style="width: 100%;color: gainsboro;background-color: white;padding: 5px;text-transform: capitalize;">
                                        <h1 style="font-size: 18px;color: black;font-family: 'Courier New', Courier, monospace;">INFORMAITON
                                        </h1>
                                        <p style="font-size: 15px;">about us</p>
                                        <p style="font-size: 15px;">milestones</p>
                                        <p style="font-size: 15px;">rewards</p>
                                        <p style="font-size: 15px;">register free</p>
                                        <p style="font-size: 15px;">partner search</p>
                                        <p style="font-size: 15px;">member login</p>
                                        <p style="font-size: 15px;">success stories</p>
                                        <p style="font-size: 15px;">payment options</p>
                                        <p style="font-size: 15px;">career</p>
                                        <p style="font-size: 15px;">affiliates</p>
                                        <p style="font-size: 15px;">media room</p>
                                        <p style="font-size: 15px;">tv commercials</p>
                                        <p style="font-size: 15px;">advertise with us</p>
                                        <p style="font-size: 15px;">terms & conditions</p>
                                        <p style="font-size: 15px;">privacy policy</p>
                                    </div>

                                </div>

                                <div style="width: 25%;background-color: white;padding: 5px;display: inline-block;vertical-align: middle ;">
                                    <div style="width: 100%;color: gainsboro;background-color:white;padding: 5px 5px 240px 5px;">
                                        <h1 style="font-size: 18px;color: black;font-family: 'Courier New', Courier, monospace;">RELATEDMATRIMONY
                                        </h1>
                                        <p style="font-size: 15px;">HAPPYMARRIAGE.COM</p>
                                        <p style="font-size: 15px;">MATRIMONIAL SITES</p>
                                        <p style="font-size: 15px;">MATRIMONIAL WEBSITES</p>
                                        <p style="font-size: 15px;">BHARAT MATRIMONY BRANCHES</p>
                                    </div>

                                </div>

                            </div>

                        </div>


                    </section>

                    <section>
                        <div style="width: 100%;background-color: white;padding: 5px;font-size: 0;">
                            <div style="width: 90%;border-top: 1px solid gainsboro;border-bottom: 1px solid gainsboro;background-color: white;padding: 5px;margin: auto;">
                                <div style="width:50%;background-color:white;padding: 5px;display: inline-block;vertical-align: middle;">
                                    <p style="font-size: 18PX;color: black;font-family: 'Courier New', Courier, monospace;">this webisite is strictly for matrimonial purpose only and not website .</p>
                                    <P style="font-size: 18px ;color:black;font-family: 'Courier New', Courier, monospace;">copyright@2022.all rights reserved</P>
                                </div>
                                <div style="width:50%;background-color:white;padding: 5px;display: inline-block;vertical-align: middle;">
                                    <div style="width: 50%;background-color: white;padding:5px;display: inline-block;vertical-align: middle;">
                                        <div style="width: 30%;background-color: white;padding: 5px;display: inline-block;vertical-align: middle;"><img src="./images/limca.jpg" width="100%" alt=""></div>
                                        <div style="width: 70%;background-color: white;padding: 5px;display: inline-block;vertical-align: middle;font-size: 18px;">the limca book of records highest number of marriages.</div>
                                    </div>
                                    <div style="width: 50%;background-color: white;padding:5px;display: inline-block;vertical-align: middle;">
                                        <div style="width: 100%;background-color: white;padding: 5px;font-size: 15px;">follow us on:</div>
                                        <div style="width: 100%;background-color: white;padding: 5px;"><img src="./images/socialmedida.jpg" width="100px" alt=""></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                </body>
            </>
        )
    }
}