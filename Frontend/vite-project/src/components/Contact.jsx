import React, { useEffect } from 'react';

function Contact() {
  useEffect(() => {
    // Initialize AOS
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
    script.onload = () => {
      AOS.init({
        delay: 200, 
        duration: 1500,
        once: false,
        mirror: false,
        anchorPlacement: 'top-bottom',
      });
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const toggleNavbar = (collapseID) => {
    const element = document.getElementById(collapseID);
    if (element) {
      element.classList.toggle('hidden');
      element.classList.toggle('block');
    }
  };

  return (
    <>
      {/* Contact Section */}
      <section className="pb-20 relative block bg-gray-900">
        <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: '80px', transform: 'translateZ(0)' }}>
          <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
            version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon className="text-gray-900 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h2 className="text-4xl font-semibold text-white">Plan your Business Today!</h2>
              <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                With our extensive network of partners and suppliers, we can offer appropriate Job offers 
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center" data-aos="fade-in" data-aos-delay="600">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-medal text-xl"></i>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                Excellent Services
              </h5>
              <p className="mt-2 mb-4 text-gray-500"></p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center" data-aos="fade-in" data-aos-delay="400">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-poll text-xl"></i>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                Grow your Skills
              </h5>
              <p className="mt-2 mb-4 text-gray-500"></p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center" data-aos="fade-in" data-aos-delay="200">
              <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                <i className="fas fa-lightbulb text-xl"></i>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">Your ideas into Reality</h5>
              <p className="mt-2 mb-4 text-gray-500"></p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative block py-24 lg:pt-0 bg-gray-900">
        <div className="container mx-auto px-4" data-aos="fade-in">
          <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                <div className="flex-auto p-5 lg:p-10">
                  <h4 className="text-2xl font-semibold">Want to work with us?</h4>
                  <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                    Complete this form and we will get back to you in 24 hours.
                  </p>
                  <div className="relative w-full mb-3 mt-8">
                    <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="full-name">
                      Full Name
                    </label>
                    <input type="text"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Full Name" style={{ transition: 'all 0.15s ease 0s' }} />
                  </div>
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                      Email
                    </label>
                    <input type="email"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Email" style={{ transition: 'all 0.15s ease 0s' }} />
                  </div>
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-gray-700 text-xs font-bold mb-2" htmlFor="message">
                      Message
                    </label>
                    <textarea rows="4" cols="80"
                      className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Type a message..."></textarea>
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button" style={{ transition: 'all 0.15s ease 0s' }}>
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative bg-gray-300 pt-8 pb-6">
        <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: '80px', transform: 'translateZ(0)' }}>
          <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
            version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon className="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Lets keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-700">
                Contact-us: 9841######
              </h5>
              <div className="mt-6">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter bg-white text-blue-400 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center"></i>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-square bg-white text-blue-600 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center"></i>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-dribbble bg-white text-pink-400 shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center"></i>
                </a>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">Useful Links</span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm" href="">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm" href="">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm" href="">
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">Other Resources</span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm" href="">
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm" href="">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm" href="">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 font-semibold py-1">
                Copyright © 2023 atharvaj898@gmail.com!
                <a href="" className="text-gray-600 hover:text-gray-900">ADJ</a>.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact;
