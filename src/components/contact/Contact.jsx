import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';
import "./contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
      Name: "",
      email: "",
      subject: "",
      message: "",
    });
  
    const [errors, setErrors] = useState({
      Name: "",
      email: "",
      subject: "",
      message: ""
    });
  
    const [ipAddress, setIpAddress] = useState("");
  
    useEffect(() => {
      // Fetch IP address when component mounts
      fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => setIpAddress(data.ip))
        .catch(error => console.error('Error fetching IP:', error));
    }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value ? "" : `${name.charAt(0).toUpperCase() + name.slice(1)} can't be blank`
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;
  
    Object.keys(formData).forEach(key => {
      if (!formData[key]) {
        valid = false;
        setErrors((prevErrors) => ({
          ...prevErrors,
          [key]: `${key.charAt(0).toUpperCase() + key.slice(1)} can't be blank`
        }));
      }
    });
  
    if (!validateEmail(formData.email)) {
      valid = false;
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address"
      }));
    }
  
    if (valid) {
      await sendEmail();
      setFormData({
        Name: "",
        email: "",
        subject: "",
        message: ""
      });
    }
  };

  const sendEmail = async () => {
    const templateParams = {
      from_name: formData.Name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      ip_address: ipAddress
    };

    try {
      const result = await emailjs.send(
        'service_7nf08et',
        'template_f8sz7o9',
        templateParams,
        'user_eJg96NeKIJLf1MWAYCzvt'
      );

      if (result.text === 'OK') {
        Swal.fire({
          title: "SUCCESS!",
          text: "Message sent successfully!",
          icon: "success"
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      Swal.fire({
        title: "ERROR!",
        text: "Unable to send email at this time. Please try again later.",
        icon: "error"
      });
    }
  };

  return (
    <div className="container mb-10 justify-content-center text-center">
      <h1 className="section-title" id="contact">
        Contact Me
      </h1>
      <div className="concst">
        <div className="conc">
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <div className={`input-field field ${errors.Name ? "error" : ""}`}>
                <input
                  type="text"
                  name="Name"
                  placeholder="Full Name"
                  className="iteme"
                  autoComplete="off"
                  value={formData.Name}
                  onChange={handleChange}
                />
                {errors.Name && <div className="error-txt">{errors.Name}</div>}
              </div>
              <div className={`input-field field ${errors.email ? "error" : ""}`}>
                <input
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  className="iteme"
                  autoComplete="off"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <div className="error-txt email">{errors.email}</div>}
              </div>
            </div>

            <div className="input-box">
              <div className={`input-field field ${errors.subject ? "error" : ""}`}>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="iteme"
                  autoComplete="off"
                  value={formData.subject}
                  onChange={handleChange}
                />
                {errors.subject && <div className="error-txt">{errors.subject}</div>}
              </div>
            </div>

            <div className={`textarea-field field ${errors.message ? "error" : ""}`}>
              <textarea
                name="message"
                placeholder="Your Opinion ..."
                className="iteme"
                autoComplete="off"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <div className="error-txt">{errors.message}</div>}
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;