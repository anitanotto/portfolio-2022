import React, { useState } from 'react';

/*import { images } from '../../constants';*/
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    if (contact.email.includes('@') && contact.name.length && contact.message.length) {
    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
    } else {
        setLoading(false)
    }
  };

  return (
    <>
      {!isFormSubmitted ? (
    <>
      <h2 className="head-text">Grab a <span>coffee</span> & <span>chat</span> with me</h2>

        <form method="post" netlify className="app__footer-form app__flex">
          <div className="app__flex">
            <input required className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="app__flex">
            <input required className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea
              required
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="submit" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </form>
          </>
      ) : (
        <>
        <div className='app__footer-cards'></div>
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
        </>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  {/* change to whitebg when adding testimonials */},
  'app__mainbg',
);
