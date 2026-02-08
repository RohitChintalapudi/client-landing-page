export default function Programs() {
  return (
    <div className="section">
      <h2>Program Structure</h2>
      <p style={{ textAlign: 'center', fontSize: '18px', color: 'var(--dark-secondary)', marginBottom: '50px', maxWidth: '800px', margin: '0 auto 50px' }}>
        A comprehensive 2-3 month job-oriented program designed for freshers looking to launch or switch careers. 
        Our structured program combines intensive training, real MNC project experience, and comprehensive placement assistance.
      </p>

      <div className="card-grid">
        <div className="card">
          <h3>📚 1st Month — Training</h3>
          <p>
            Build a strong foundation with live interactive training sessions. Learn from industry experts 
            via Google Meet and master the skills that employers are looking for.
          </p>
          <ul>
            <li>Live interactive sessions via Google Meet</li>
            <li>Recorded videos for flexible learning</li>
            <li>Timing: After 6:30 PM (Perfect for students & working professionals)</li>
            <li>Duration: 1 hour training + 30 minutes doubt-clearing</li>
            <li>Interactive Q&A sessions</li>
            <li>Hands-on practice assignments</li>
          </ul>
        </div>

        <div className="card">
          <h3>💼 2nd Month — Internship</h3>
          <p>
            Apply your knowledge by working on real MNC projects. Build a portfolio that showcases 
            your capabilities to future employers with actual industry experience.
          </p>
          <ul>
            <li>Work on 2 MNC projects</li>
            <li>1 Minor Project (7 days)</li>
            <li>1 Major Project (21 days)</li>
            <li>Real MNC project experience</li>
            <li>Industry-standard project evaluation</li>
            <li>Portfolio development support</li>
          </ul>
        </div>

        <div className="card">
          <h3>🚀 3rd Month — Placement Assistance</h3>
          <p>
            Get comprehensive placement support to boost your confidence and maximize your industry exposure. 
            We prepare you for success in the job market.
          </p>
          <ul>
            <li>Mock interviews with expert panels</li>
            <li>Resume crafting tailored to company standards</li>
            <li>Interview line-ups for maximum industry exposure</li>
            <li>Boost confidence for real interviews</li>
            <li>Career guidance and support</li>
            <li>Professional networking opportunities</li>
          </ul>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '60px', padding: '40px', background: 'linear-gradient(135deg, rgba(242, 90, 43, 0.08) 0%, rgba(255, 107, 74, 0.08) 100%)', borderRadius: '20px' }}>
        <h3 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '20px', color: 'var(--dark)' }}>
          🎯 What You'll Achieve
        </h3>
        <p style={{ fontSize: '17px', lineHeight: '1.8', color: 'var(--dark-secondary)', maxWidth: '900px', margin: '0 auto', fontWeight: 500 }}>
          By the end of this program, you'll have <span className="cert-highlight">Accenture certification</span>, 
          <span className="cert-highlight"> real MNC project experience</span>, <span className="cert-highlight">comprehensive placement support</span>, 
          and the <span className="cert-highlight">confidence to excel in your career</span>. 
          <span className="cert-highlight"> Training fees apply</span> – but the opportunity to gain real MNC experience and placement support is priceless. 
          <span className="cert-highlight"> ⏳ Hurry! Batches are starting soon and seats are limited.</span>
        </p>
      </div>
    </div>
  );
}
