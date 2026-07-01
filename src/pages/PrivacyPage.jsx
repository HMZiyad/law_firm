import './Policy.css';

export const PrivacyPage = () => {
  return (
    <div className="policy-page">
      <div className="container">
        <div className="policy-header">
          <span className="policy-label">LEGALMART</span>
          <h1 className="policy-title">Privacy <em>Policy</em></h1>
          <p className="policy-updated">Last Updated: October 2023</p>
        </div>
        
        <div className="policy-content">
          <section className="policy-section">
            <h2>1. Introduction</h2>
            <p>LegalMart respects your privacy and is committed to protecting your personal data. This Privacy Policy outlines how we collect, use, and safeguard your information when you visit our website or use our services.</p>
          </section>

          <section className="policy-section">
            <h2>2. Information We Collect</h2>
            <p>We may collect personal information that you voluntarily provide to us, such as your name, email address, phone number, and any details you share when contacting us or subscribing to our newsletters. We also automatically collect certain technical information, such as IP addresses and browsing behavior, through cookies.</p>
          </section>

          <section className="policy-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to communicate with you, provide legal updates, improve our website, and ensure the security of our services. We do not sell your personal data to third parties.</p>
          </section>

          <section className="policy-section">
            <h2>4. Confidentiality and Security</h2>
            <p>As a law firm, we adhere to strict confidentiality obligations. We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, loss, or alteration. However, no internet transmission is entirely secure, and we cannot guarantee absolute security.</p>
          </section>

          <section className="policy-section">
            <h2>5. Third-Party Links</h2>
            <p>Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of these external websites. We encourage you to review their privacy policies before providing any personal information.</p>
          </section>

          <section className="policy-section">
            <h2>6. Your Rights</h2>
            <p>Depending on your jurisdiction, you may have rights regarding your personal data, including the right to access, correct, or delete your information. To exercise these rights, please contact us.</p>
          </section>
          
          <section className="policy-section">
            <h2>7. Contact Us</h2>
            <p>If you have questions or concerns about this Privacy Policy or our data practices, please contact us at legalmart22@gmail.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
};
