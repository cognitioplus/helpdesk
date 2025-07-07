import React, { useState } from 'react';

// Mock data
const TICKETS = [
  { id: 1, category: 'mental_health', status: 'open', subject: 'Anxiety management support', date: '2023-09-15' },
  { id: 2, category: 'substance_abuse', status: 'in_progress', subject: 'Counseling session request', date: '2023-09-14' },
  { id: 3, category: 'mental_health', status: 'closed', subject: 'Depression support plan', date: '2023-09-13' }
];

const FAQS = [
  {
    question: "How do I submit a help request?",
    answer: "You can submit a request through our helpdesk portal by filling out the form with your details and describing your needs. Our team will review your request and respond within 24 hours."
  },
  {
    question: "What types of assistance are available?",
    answer: "We offer support for mental health conditions, substance abuse recovery, and general wellness guidance. Our community-based approach ensures personalized care plans tailored to your needs."
  },
  {
    question: "Is my information secure?",
    answer: "Yes, we prioritize your privacy. All communications are encrypted and stored securely. We follow strict confidentiality protocols to protect your personal information."
  },
  {
    question: "How long does it take to get a response?",
    answer: "Our team aims to respond to all requests within 24 business hours. For urgent matters, please indicate the urgency in your message and we'll prioritize accordingly."
  }
];

// Utility function for date formatting
const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });

// Navigation Component
function Navigation({ activeTab, setActiveTab, isMenuOpen, setIsMenuOpen }) {
  const NAV_TABS = [
    { name: 'Dashboard', key: 'dashboard' },
    { name: 'Submit Request', key: 'submit' },
    { name: 'FAQ', key: 'faq' },
    { name: 'AI Chat', key: 'messenger' }
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10" aria-label="Primary Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {NAV_TABS.map(tab => (
              <button
                key={tab.key}
                aria-label={tab.name}
                onClick={() => setActiveTab(tab.key)}
                className={`px-3 py-2 rounded-md text-sm font-medium focus:outline-none ${
                  activeTab === tab.key ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.name}
              </button>
            ))}
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
              aria-label="Login"
            >
              Login
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              aria-label="Open menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_TABS.map(tab => (
              <button
                key={tab.key}
                aria-label={tab.name}
                onClick={() => {
                  setActiveTab(tab.key);
                  setIsMenuOpen(false);
                }}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                  activeTab === tab.key ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {tab.name}
              </button>
            ))}
            <button
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
              aria-label="Login"
            >
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

// Logo Component
function Logo() {
  return (
    <div className="flex-shrink-0 flex items-center">
      <svg className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="ml-2 text-xl font-bold text-gray-800">Cognitio-Plus</span>
    </div>
  );
}

// Dashboard Component
function Dashboard({ tickets }) {
  return (
    <section aria-labelledby="dashboard-heading">
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 id="dashboard-heading" className="text-lg leading-6 font-medium text-gray-900 mb-4">
            Your Help Requests
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tickets.map(ticket => (
                  <tr key={ticket.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ticket.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        ticket.category === 'mental_health'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {ticket.category.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        ticket.status === 'open'
                          ? 'bg-yellow-100 text-yellow-800'
                          : ticket.status === 'in_progress'
                          ? 'bg-purple-100 text-purple-800'
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {ticket.status.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{ticket.subject}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(ticket.date)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

// Submit Request Form Component
function SubmitRequestForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'mental_health'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState('');

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormError('Please fill in all required fields.');
      return;
    }
    if (!validateEmail(formData.email)) {
      setFormError('Please enter a valid email address.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setFormSuccess(true);
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        category: 'mental_health'
      });
      if (onSuccess) onSuccess();
      setTimeout(() => setFormSuccess(false), 4000);
    }, 1200);
  };

  return (
    <section aria-labelledby="submit-heading">
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 id="submit-heading" className="text-lg leading-6 font-medium text-gray-900 mb-6">
            Submit a Help Request
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Type of Assistance
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="mental_health">Mental Health Support</option>
                <option value="substance_abuse">Substance Abuse Recovery</option>
              </select>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Describe Your Request<span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
                aria-required="true"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                disabled={isSubmitting}
                aria-disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </div>
            {formError && (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mt-2" role="alert">
                <p className="font-bold">Error</p>
                <p>{formError}</p>
              </div>
            )}
            {formSuccess && (
              <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mt-2" role="status">
                <p className="font-bold">Success!</p>
                <p>Your request has been submitted. We'll get back to you shortly.</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

// FAQ Section with Accordion
function FAQSection({ faqs }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const filteredFAQ = faqs.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section aria-labelledby="faq-heading">
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 id="faq-heading" className="text-lg leading-6 font-medium text-gray-900 mb-6">
            Frequently Asked Questions
          </h3>
          <div className="mb-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 001.414-1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
              <input
                type="text"
                name="search"
                id="search"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search questions..."
                aria-label="Search FAQ"
              />
            </div>
          </div>
          <div className="divide-y divide-gray-200">
            {filteredFAQ.length === 0 && (
              <div className="py-4 text-gray-500">No FAQ results found.</div>
            )}
            {filteredFAQ.map((item, idx) => (
              <div key={idx} className="py-4">
                <button
                  className="w-full text-left flex justify-between items-center focus:outline-none"
                  aria-expanded={openIndex === idx}
                  aria-controls={`faq-panel-${idx}`}
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <span className="text-lg font-medium text-gray-900">{item.question}</span>
                  <svg
                    className={`h-5 w-5 text-blue-500 transform transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === idx && (
                  <div id={`faq-panel-${idx}`} className="mt-2 text-gray-600">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Messenger Chat Section
function MessengerChat() {
  return (
    <section aria-labelledby="messenger-heading">
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 id="messenger-heading" className="text-lg leading-6 font-medium text-gray-900 mb-6">
            AI Chat Support
          </h3>
          <div className="space-y-6">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    Chat with our AI assistant for immediate support. This is a Facebook Messenger chat, so please ensure you're logged into your account.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <a
                href="https://m.me/1202787191563496?is_ai=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Open AI Chat in Messenger"
              >
                <svg className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6.433 16.832a2 2 0 01-2.194.718L4.752 14.091A2.99 2.99 0 003 11.717V6.164a2.99 2.99 0 001.752-2.845l1.548-.718a2 2 0 012.194.718v4.695a2 2 0 01-.559 1.319l-1.271 2.11z" />
                </svg>
                Open AI Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16" aria-label="Footer">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-gray-600">
              Empowering communities to integrate mental health into primary healthcare through accessible, compassionate support.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Helpdesk</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Guidelines</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Training Materials</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-gray-400 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" clipRule="evenodd" />
                </svg>
                <span className="ml-3 text-gray-600">support@cognitio-plus.com</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-gray-400 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="ml-3 text-gray-600">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-gray-400 mt-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 20a8 8 0 100-16 8 8 0 000 16zm-2-9a2 2 0 114 0 2 2 0 01-4 0z" />
                </svg>
                <span className="ml-3 text-gray-600">123 Wellness Street, Mental Health City</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} Cognitio-Plus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main App Component
export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <main className="flex-1 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 w-full">
        {activeTab === 'dashboard' && <Dashboard tickets={TICKETS} />}
        {activeTab === 'submit' && <SubmitRequestForm />}
        {activeTab === 'faq' && <FAQSection faqs={FAQS} />}
        {activeTab === 'messenger' && <MessengerChat />}
      </main>
      <Footer />
    </div>
  );
}
