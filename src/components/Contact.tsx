import { useState } from 'react';
import { Github, Linkedin, Mail, FileDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error on change
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Placeholder submit action
      console.log('Form submitted:', formData);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 3000);
    }
  };

  const CV_URL = '/cv.pdf';

  return (
    <section id="contact" className="py-24 px-6 bg-neutral-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-neutral-50 mb-12">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-neutral-50 mb-6">Send a Message</h3>
            
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-green-500" size={32} />
                </div>
                <p className="text-neutral-300 font-medium">Message sent successfully!</p>
                <p className="text-neutral-500 text-sm mt-2">I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className={`bg-neutral-800 border-neutral-700 text-neutral-50 focus:border-neutral-500 ${
                      errors.name ? 'border-red-500' : ''
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`bg-neutral-800 border-neutral-700 text-neutral-50 focus:border-neutral-500 ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`bg-neutral-800 border-neutral-700 text-neutral-50 focus:border-neutral-500 min-h-[150px] ${
                      errors.message ? 'border-red-500' : ''
                    }`}
                    placeholder="Tell me about your project or opportunity..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-neutral-300 text-neutral-900 font-medium rounded-md hover:bg-neutral-50 transition-colors duration-150"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-neutral-50 mb-6">Connect</h3>
              <div className="space-y-4">
                <a
                  href="https://github.com/S-phiri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 hover:scale-[1.02] transition-all duration-150"
                >
                  <Github size={24} className="text-neutral-400" />
                  <div>
                    <div className="text-neutral-50 font-medium">GitHub</div>
                    <div className="text-neutral-500 text-sm">View my code</div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/simba-phiri-08a374195/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 hover:scale-[1.02] transition-all duration-150"
                >
                  <Linkedin size={24} className="text-neutral-400" />
                  <div>
                    <div className="text-neutral-50 font-medium">LinkedIn</div>
                    <div className="text-neutral-500 text-sm">Professional profile</div>
                  </div>
                </a>

                <a
                  href={CV_URL}
                  download
                  className="flex items-center gap-4 p-4 w-full bg-neutral-900 border border-neutral-800 rounded-lg hover:border-neutral-700 hover:scale-[1.02] transition-all duration-150 text-left"
                >
                  <FileDown size={24} className="text-neutral-400" />
                  <div>
                    <div className="text-neutral-50 font-medium">Download CV</div>
                    <div className="text-neutral-500 text-sm">Get my resume</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h4 className="text-neutral-50 font-semibold mb-3">Open to Opportunities</h4>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Currently exploring BI, analytics engineering, and data-focused product roles where I can combine financial reasoning, real-world analytics experience, and strong systems design. Open to remote opportunities (USD/EUR) and data-intensive environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
