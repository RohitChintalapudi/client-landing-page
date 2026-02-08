import { Link } from "react-router-dom";

export default function Certifications() {
  return (
    <div className="section">
      <h2>Certifications & Credentials</h2>

      <div className="certifications-hero">
        <h3>🎓 Unlock Your Career Potential</h3>
        <p>
          Stand out from the crowd with <span className="cert-highlight">industry-recognized certifications</span> that validate your skills and boost your resume. 
          Our comprehensive program ensures you receive <span className="cert-highlight">not just one, but three powerful credentials</span> that employers value. 
          These certificates are your passport to better job opportunities, higher salaries, and career advancement. 
          <span className="cert-highlight">Don't just learn—get certified and get hired!</span>
        </p>
      </div>

      <div className="card-grid">
        <div className="card">
          <h3>🏆 Accenture Certified Training Certificate</h3>
          <p>
            Earn an official Accenture Certified Training Certificate that demonstrates your mastery of industry-standard tools and technologies. 
            This prestigious credential is recognized by top MNCs worldwide and sets you apart in the competitive job market.
          </p>
          <ul>
            <li>Official Accenture certification upon completion</li>
            <li>Recognized by Fortune 500 companies</li>
            <li>Validates your technical expertise</li>
            <li>Enhances your professional credibility</li>
            <li>Lifetime validity and verification</li>
            <li>Shareable on LinkedIn and job portals</li>
          </ul>
          <span className="cert-badge">Industry Standard</span>
        </div>

        <div className="card">
          <h3>💼 Internship Completion Certificate</h3>
          <p>
            Prove your real-world experience with an Internship Completion Certificate that showcases your hands-on project work. 
            This certificate validates your practical skills and demonstrates to employers that you've worked on actual industry projects, 
            not just theoretical knowledge.
          </p>
          <ul>
            <li>Validates 2-3 months of real MNC experience</li>
            <li>Highlights your project portfolio</li>
            <li>Demonstrates practical skills to employers</li>
            <li>Shows commitment and dedication</li>
            <li>Increases job interview callbacks by 40%</li>
            <li>Perfect for freshers and career changers</li>
          </ul>
          <span className="cert-badge">Real Experience</span>
        </div>

        <div className="card">
          <h3>📜 Letter of Recommendation</h3>
          <p>
            Receive a personalized Letter of Recommendation from industry mentors that highlights your achievements, skills, and potential. 
            This powerful document serves as a professional endorsement and can significantly boost your job applications and career prospects.
          </p>
          <ul>
            <li>Personalized recommendation from industry experts</li>
            <li>Highlights your unique strengths and achievements</li>
            <li>Adds credibility to your job applications</li>
            <li>Perfect for graduate school applications</li>
            <li>Can be used for future job opportunities</li>
            <li>Professional endorsement of your capabilities</li>
          </ul>
          <span className="cert-badge">Professional Endorsement</span>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '60px', padding: '40px', background: 'linear-gradient(135deg, rgba(242, 90, 43, 0.08) 0%, rgba(255, 107, 74, 0.08) 100%)', borderRadius: '20px' }}>
        <h3 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '20px', color: 'var(--dark)' }}>
          🚀 Why These Certifications Matter
        </h3>
        <p style={{ fontSize: '17px', lineHeight: '1.8', color: 'var(--dark-secondary)', maxWidth: '900px', margin: '0 auto', fontWeight: 500 }}>
          In today's competitive job market, <span className="cert-highlight">certifications are no longer optional—they're essential</span>. 
          Studies show that certified professionals earn <span className="cert-highlight">25-30% more</span> than their non-certified peers and have 
          <span className="cert-highlight"> 3x better job placement rates</span>. Our triple-certification program gives you the complete package: 
          technical validation, practical experience proof, and professional endorsement. <span className="cert-highlight">This is your investment in a brighter future!</span>
        </p>
        <Link to="/contact">
          <button style={{ marginTop: '30px' }}>Get Certified Now</button>
        </Link>
      </div>
    </div>
  );
}
