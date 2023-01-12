import React, { useState } from 'react'
// import { Row } from 'react-bootstrap';
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
// import { CgWebsite } from "react-icons/cg";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
    AiFillFacebook,
    AiFillLinkedin
  } from "react-icons/ai";

  
const ContactUs = () => {

    return (
        <>

            <section class="contact section-padding" id="section_7">
            <h2> <strong className='purple' >Contact</strong>  Me</h2>

                <div class="container">
                    <div data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" class="row">

                       
                       

                        <div class="col-lg-3 col-md-6 col-12 pe-lg-0">

                            <div class="contact-info contact-info-border-start d-flex flex-column">
                                <strong class="site-footer-title d-block mb-3">Services</strong>

                                <ul class="footer-menu">
                                    <li class="footer-menu-item"><a href="#" class="footer-menu-link">Website Development</a></li>

                                    <li class="footer-menu-item"><a href="#" class="footer-menu-link">Logo Design</a></li>

                                    <li class="footer-menu-item"><a href="#" class="footer-menu-link">Digital Marketing</a></li>

                                    <li class="footer-menu-item"><a href="#" class="footer-menu-link">SEO</a></li>
                                </ul>

                                {/* <!-- //! Stay Connected --> */}
                                <strong class="site-footer-title d-block mt-4 mb-3">Stay connected</strong>

                                <ul class="social-icon">
                                    <li class="social-icon-item"><a href="https://github.com/imrajkumar-git" target="_blank" class="social-icon-link bi-twitter"><AiFillGithub /></a></li>

                                    <li class="social-icon-item">
                                        <a href="https://www.instagram.com/rajkumar_aryal_official/" target="_blank" class="social-icon-link bi-instagram"><  AiFillInstagram/></a>
                                    </li>

                                    <li class="social-icon-item"><a href="https://twitter.com/RajkumarAryal6" target="_blank" class="social-icon-link bi-linkedin"><AiOutlineTwitter />
                                    </a></li>

                                    <li class="social-icon-item">
                                        <a href="https://www.facebook.com/profile.php?id=100088834186081" target="_blank"
                                            class="social-icon-link bi-facebook">
                                                <AiFillFacebook />
                                        </a>
                                    </li>
                                    <li class="social-icon-item">
                                        <a href="/" target="_blank"
                                            class="social-icon-link bi-facebook">
                                                <AiFillLinkedin />
                                        </a>
                                    </li>
                                    
                                </ul>

                                <strong class="site-footer-title d-block mt-4 mb-3">Start a project</strong>

                                <p class="mb-0 footle-title"  ><a href="https://www.fiverr.com/rajkumararyal/do-designed-the-website">I’m available for freelance projects</a> </p>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 col-12 ps-lg-0">
                            <div class="contact-info d-flex flex-column">
                                <strong class="site-footer-title d-block mb-3">About</strong>

                                <p class="mb-2 footle-title">
                                    Rajkumar is a  web developer. Feel free to get in touch with me.
                                    
                                    <h4 class='purple'>Happy Coding!!!</h4>
                                </p>

                                <strong class="site-footer-title d-block mt-4 mb-3">Email</strong>

                                <p>
                                    <a href="mailto:rajkumararyal0977@gmail.com">
                                        rajkumararyal0977@gmail.com
                                    </a>
                                </p>

                                <strong class="site-footer-title d-block mt-4 mb-3">Call</strong>

                                <p class="mb-0" >
                                    <a href="tel: +9779810299154" class='contactno'>
                                        9810299154,
                                    </a>
                                    <a href="tel: +9779869533015">
                                         9869533015
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* https://getform.io/f/47b01bd9-a75d-49e8-98e2-50d8584a5cf2                   Get form*/}
                        {/* https://formspree.io/f/xrgdnjjy                                           formspree */}

                        {/* <!-- //! Contact Us form --> */}
                        
                        <div class="col-lg-6 col-12 mt-5 mt-lg-0">

                        
                            <form class="custom-form contact-form" role="form" action="https://getform.io/f/adf100fd-4902-43e8-82c9-38203d1b0594" method="POST" name="form">
                                <div class="row">

                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class="form-floating">
                                            <input
                                                type="text"
                                                name="Name"
                                                id="name"
                                                class="form-control"
                                                placeholder="Name"
                                                required
                                                autoComplete='off'
                                            // value={registerUsers.name}
                                            // onChange={onRegisterUsers}
                                            />

                                            <label for="floatingInput">Full Name</label>
                                        </div>
                                    </div>
                                 
                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class="form-floating">
                                            <input
                                                type="email"
                                                name="Email"
                                                id="email"
                                                pattern="[^ @]*@[^ @]*"
                                                class="form-control"
                                                placeholder="someone@gmail.com"
                                                required
                                                autoComplete='off'
                                            // value={registerUsers.email}
                                            // onChange={onRegisterUsers}
                                            />

                                            <label for="floatingInput">Email address</label>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class="form-floating">
                                            <input
                                                type="text"
                                                name="Phone-number"
                                                id="name"
                                                class="form-control"
                                                placeholder="Phone Number"
                                                autoComplete='off'
                                            // value={registerUsers.name}
                                            // onChange={onRegisterUsers}
                                            />

                                            <label>Phone Number</label>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6 col-12">
                                        <div class='form-floating'>
                                            <input
                                                type="text"
                                                name="Address"
                                                
                                                class="form-control"
                                                placeholder="Address"
                                                autoComplete='off'
                                            // value={registerUsers.name}
                                            // onChange={onRegisterUsers}
                                            />

                                            <label for="floatingInput">Address</label>
                                        </div>
                                    </div>


                   

                                    <div class="col-lg-12 col-12">
                                        <div class="form-floating">
                                            <textarea
                                                type="text"
                                                name="Message"
                                                id="name"
                                                class="form-control"
                                                placeholder="Tell me about the project"
                                                required
                                            >
                                            </textarea>

                                            <label for="floatingTextarea">Tell me about the project</label>
                                        </div>
                                    </div>

                                    <div class="col-lg-3 col-12 ms-auto">
                                        <button
                                            type="submit"
                                            value="submit"
                                            class="form-control"
                                            id="sub"

                                        >
                                            Submit
                                        </button>
                                    </div>

                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs