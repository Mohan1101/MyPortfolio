import React, { useState } from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    username: '',
    phoneNumber: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  axios.defaults.withCredentials = true;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    const { username, phoneNumber, email, subject, message } = formData;

    if (!username || !phoneNumber || !email || !subject || !message) {
      setErrMsg('All fields are required!');
      return;
    }

    if (!validateEmail(email)) {
      setErrMsg('Invalid email address');
      return;
    }

    try {
      setIsLoading(true);

      const dateTime = new Date();

      const response = await axios.post(
        'https://my-portfolio-hosting-backend.vercel.app/response',
        {
          ...formData,
          dateTime,
        }
      );

      console.log(response.data);
      setSuccessMsg(`Thank you dear ${username}, Your message has been sent successfully!`);
      setErrMsg('');
      setFormData({
        username: '',
        phoneNumber: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error(error);
      setErrMsg('An error occurred while sending.');
    } finally {
      setIsLoading(false);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,4}$/;
    return emailRegex.test(String(email).toLowerCase());
  };
  
  return (
    <section id="contact" className="w-full py-12 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full mt-4 lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne">
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              {errMsg && (
                <p className="rounded-md py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="rounded-md py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Your name</p>
                  <input
                    onChange={handleChange}
                    value={formData.username}
                    name="username"
                    className={`${errMsg === 'All fields are required!' && 'outline-designColor'
                      } contactInput`}
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">Phone Number</p>
                  <input
                    onChange={handleChange}
                    value={formData.phoneNumber}
                    name="phoneNumber"
                    className={`${errMsg === 'All fields are required!' && 'outline-designColor'
                      } contactInput`}
                    type="tel" // Set inputMode to "tel" for the number pad
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Email</p>
                <input
                  onChange={handleChange}
                  value={formData.email}
                  name="email"
                  className={`${errMsg === 'All fields are required!' && 'outline-designColor'
                    } contactInput`}
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Subject</p>
                <input
                  onChange={handleChange}
                  value={formData.subject}
                  name="subject"
                  className={`${errMsg === 'All fields are required!' && 'outline-designColor'
                    } contactInput`}
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">Message</p>
                <textarea
                  onChange={handleChange}
                  value={formData.message}
                  name="message"
                  className={`${errMsg === 'All fields are required!' && 'outline-designColor'
                    } contactTextArea`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSend}
                  className={`w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent ${isLoading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              {successMsg && (
                <p className=" rounded-md py-3 mt-4 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>)}
                {errMsg && (
                <p className=" rounded-md mt-2 py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;






