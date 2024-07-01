import React, { useState } from 'react';
import './Main.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        message: ''
    });

    const [showModal, setShowModal] = useState(false);  // State for modal visibility

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const webhookURL = 'https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/yDztKWUB#generic-webhook';

        const payload = {
            name: `${formData.firstName} ${formData.lastName}`,
            phone: formData.phoneNumber,
            email: formData.email,
            message: formData.message
        };

        try {
            const response = await fetch(webhookURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                setFormData({
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    email: '',
                    message: ''
                });
                setShowModal(true);  

                setTimeout(() => {
                    setShowModal(false);  
                }, 3000);
            } else {
                const errorData = await response.json();
                console.error('Error Response:', errorData);
                alert(`Error: ${response.statusText}. Details: ${JSON.stringify(errorData)}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error submitting the form.');
        }
    };

    return (
        <div className='h-auto' >
            <div>
                <div className='flex flex-row items-start justify-start bg-[#f8d08d] py-20 px-20' id='contact_main'>
                    <div className='w-1/2 flex flex-col items-start justify-start' id='contact_div1'>
                        <div className='flex flex-col items-start justify-start'>
                            <h1 className='text-[#0d0d0d] font-outfit text-[45px] font-bold leading-[1] whitespace-nowrap' id='contact_heading'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
                                Get in <span className='text-[#efefef]'>Touch</span>
                            </h1>
                            <div className='w-5/12 bg-[#0d0d0d] h-[4px] rounded-lg mt-1 ml-1' data-aos='fade-up' data-aos-duration="1000" data-aos-once="true"></div>
                        </div>
                        <p className='font-poppins text-[25px] text-gray-800 font-bold mt-10 pr-14' id='contact_subheading'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
                            Hi there!
                        </p>
                        <p className='font-poppins text-[16px] text-gray-800 font-medium mt-5 pr-14' id='contact_para'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
                            Thank you for taking the time to visit my portfolio. I’m excited to connect with you! Whether you have a project in mind, a question, or just want to say hello, feel free to reach out using the form on the right.
                        </p>
                        <p className='font-poppins text-[16px] text-gray-800 font-medium mt-8 pr-14' id='contact_para'  data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
                            I am passionate about web development, and I'm always open to new opportunities and collaborations. Let’s create something amazing together!
                        </p>
                        <div className='py-20 flex flex-row items-center gap-3'id='quote_main'>
                            <div className='h-20 w-[8px] bg-white' data-aos='fade-right' data-aos-duration="1000" data-aos-once="true"></div>
                            <p className='font-poppins text-[26px] text-black font-bold pr-14' id='contact_quote'  data-aos='fade-left' data-aos-duration="1000" data-aos-once="true"  >
                                Let's turn your ideas into reality—reach out and let's get started!
                            </p>
                        </div>
                    </div>
                    <div className='w-1/2 flex flex-col' id='contact_div2'>
                        <div className='bg-[#efefef] py-14 px-5 rounded-2xl shadow-2xl'>
                    <h1 className='font-outfit font-bold text-[40px] text-black text-center' data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">Fill In The <span className='text-[#f8d08d]'>Details</span></h1>

                            <div>


                                <form onSubmit={handleSubmit}>
                                    <div className='flex flex-row w-full ' id='contact_names'>

                                        <div className="input-container w-1/2" id='contact_name_input' data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
                                            <input
                                                name="firstName"
                                                placeholder="First Name"
                                                className="input-field bg-[#fffff] rounded-lg"
                                                type="text"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="firstName" className="input-label">First Name</label>
                                            <span className="input-highlight"></span>
                                        </div>

                                        <div className="input-container w-1/2" id='contact_name_input' data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
                                            <input
                                                name="lastName"
                                                placeholder="Last Name"
                                                className="input-field bg-[#fffff] rounded-lg"
                                                type="text"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="lastName" className="input-label">Last Name</label>
                                            <span className="input-highlight"></span>
                                        </div>
                                    </div>
                                    <div className='mb-9'>

                                        <div className="input-container" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
                                            <input
                                                name="phoneNumber"
                                                placeholder="Phone Number With Country Code"
                                                className="input-field bg-[#fffff] rounded-lg"
                                                type="text"
                                                value={formData.phoneNumber}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="phoneNumber" className="input-label">Phone Number</label>
                                            <span className="input-highlight"></span>
                                        </div>
                                    </div>
                                    <div className='mb-9'>

                                        <div className="input-container" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
                                            <input
                                                name="email"
                                                placeholder="Email Address"
                                                className="input-field bg-[#fffff] rounded-lg"
                                                type="text"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="email" className="input-label">Email Address</label>
                                            <span className="input-highlight"></span>
                                        </div>
                                    </div>

                                    <div className="input-container" data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">
                                        <textarea
                                            name="message"
                                            placeholder="Your Message"
                                            className="input-field border bg-white rounded-lg"
                                            rows="4"
                                            value={formData.message}
                                            onChange={handleChange}
                                        ></textarea>
                                        <label htmlFor="message" className="input-label">Message</label>
                                        <span className="input-highlight"></span>
                                    </div>

                                    <div className='pl-5 pt-5' data-aos='fade-up' data-aos-duration="1000" data-aos-once="true">

                                        <button type="submit" className="tick-button">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="tick-1" viewBox="0 0 24 24">
                                                <path d="M9 16.172L4.828 12l-1.414 1.414L9 19 21 7 19.586 5.586 9 16.172z"></path>
                                            </svg>
                                            <span className="tick-text text-black font-poppins font-bold ">S U B M I T</span>
                                            <span className="tick-circle"></span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="tick-2" viewBox="0 0 24 24">
                                                <path d="M9 16.172L4.828 12l-1.414 1.414L9 19 21 7 19.586 5.586 9 16.172z"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50 ">
                    <div className="modal-content bg-white p-5 rounded-lg shadow-lg text-center w-[400px] h-[200px] flex items-center justify-center">
                        <p className="text-black font-poppins font-bold text-[45px]">
                            Thank you! <br />You will be contacted soon.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
