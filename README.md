# Cognitio+ Customer Support

A modern, responsive helpdesk application for **Cognitio-Plus**, designed to empower communities in integrating mental health and substance abuse support into primary healthcare.

---

## 📌 Overview

The Cognitio+ Helpdesk provides:
- **AI Chat Support** via Facebook Messenger (integrated via `https://m.me/1202787191563496?is_ai=1`)
- Ticket submission and tracking
- FAQ section for common queries
- Mobile-friendly and accessible design

This is a **Progressive Web App (PWA)** built with React, Tailwind CSS, and designed for seamless deployment on platforms like GitHub Pages, Vercel, or Netlify.

---

## 🧰 Features

- **AI Chat Integration**: Direct access to Facebook Messenger for instant support.
- **Ticket Management**: Submit, track, and view help requests.
- **FAQ Section**: Searchable and organized frequently asked questions.
- **Responsive Design**: Works flawlessly on desktop and mobile devices.
- **PWA Capabilities**: Installable on desktop/mobile with offline support.

---

## 📦 Installation & Deployment

### 1. **Clone the Repository**
```bash
git clone https://github.com/your-username/cognitio-helpdesk.git
cd cognitio-helpdesk
```

### 2. **Install Dependencies**
```bash
npm install
```

### 3. **Run Locally**
```bash
npm start
```

### 4. **Build for Production**
```bash
npm run build
```

### 5. **Deploy**
#### Option A: GitHub Pages
1. Push to a GitHub repo.
2. Go to **Settings > Pages** and select the `main` branch.
3. Set the **custom domain** (e.g., `helpdesk.cognitio-plus.com`).

#### Option B: Vercel / Netlify
1. Import the project into [Vercel](https://vercel.com) or [Netlify](https://www.netlify.com).
2. Deploy with automatic CI/CD.

#### Option C: aiwaapp.ai
1. Upload the `build/` folder to your aiwaapp.ai dashboard.
2. Ensure the PWA manifest and service worker are configured.

---

## ⚠️ Notes

- **AI Chat Link**: The Facebook Messenger link (`https://m.me/1202787191563496?is_ai=1`) may require the user to be logged into their Facebook account. If the link fails, verify the URL or use an alternative support channel.
- **PWA Setup**: Ensure `manifest.json` and service workers are correctly configured for offline support.

---

## 🤝 Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make changes and submit a pull request.

**Code Style**: Follow Prettier and ESLint guidelines.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

For questions or support, contact:
- Email: support@cognitio-plus.com
- GitHub Issues: [https://github.com/your-username/cognitio-helpdesk/issues](https://github.com/your-username/cognitio-helpdesk/issues)

---

## 🧠 Future Enhancements
- Add real-time chat notifications
- Integrate with backend for ticket management
- Expand AI chat capabilities (e.g., NLP for query classification)
