export default function Contact() {
  return (
    <div className="section">
      <h2>Get in Touch</h2>
      <p style={{ textAlign: 'center', fontSize: '18px', color: 'var(--dark-secondary)', marginBottom: '50px', maxWidth: '700px', margin: '0 auto 50px' }}>
        Ready to kickstart your career? Our training and internship team is here to help you secure your spot. 
        <span className="cert-highlight"> Reply "YES" now to secure your spot and get priority assistance!</span> 
        Get personalized guidance and answers to all your queries about the Adobe + Accenture Certified Training, Internship & Placement Program.
      </p>

      <div className="card contact-card">
        <h3>Pavan Kalyan Sonti</h3>
        <p style={{ fontSize: '18px', color: 'var(--primary)', fontWeight: 700, marginBottom: '8px' }}>
          Business Development Associate
        </p>
        <p style={{ fontSize: '16px', marginBottom: '24px', color: 'var(--dark-secondary)' }}>
          Educational Counsellor
        </p>
        <p style={{ fontSize: '20px', fontWeight: 700, marginBottom: '30px', letterSpacing: '1px' }}>
          📞 +91 9121732069
        </p>

        <a href="tel:+919121732069">
          <button>Call Now</button>
        </a>
        <p style={{ marginTop: '20px', fontSize: '14px', opacity: 0.7 }}>
          Available Monday - Saturday, 9 AM - 7 PM
        </p>
        <p style={{ marginTop: '16px', fontSize: '15px', fontWeight: 600, color: 'var(--primary)' }}>
          ⚡ Limited Seats – Hurry! Batches are starting soon!
        </p>
      </div>
    </div>
  );
}
