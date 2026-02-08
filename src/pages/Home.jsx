import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="hero">
        <h1>Adobe + Accenture Certified Training, Internship & Placement Program</h1>
        <p>Launch Your Career with Real MNC Experience & Placement Support</p>
        <p style={{ fontSize: '18px', marginTop: '10px', opacity: 0.85 }}>
          2-3 Month Job-Oriented Program for Freshers & Career Switchers
        </p>
        <p style={{ fontSize: '16px', marginTop: '8px', opacity: 0.9 }}>
          ⚡ Limited Seats – Batches Starting Soon!
        </p>
        <Link to="/contact">
          <button>Enroll Now - Limited Seats Available</button>
        </Link>
      </div>

      <div className="section">
        <h2>Why Students Choose Krutanics</h2>

        <div className="card-grid">
          <div className="card">
            <h3>🎓 Live Interactive Training</h3>
            <p>Join live sessions via Google Meet with industry experts. Perfect timing after 6:30 PM for students and working professionals. Learn from professionals who've worked at top MNCs.</p>
            <ul>
              <li>Live sessions via Google Meet</li>
              <li>Timing: After 6:30 PM (Student-friendly)</li>
              <li>1 hour training + 30 min doubt-clearing</li>
              <li>Recorded videos for flexible learning</li>
            </ul>
          </div>

          <div className="card">
            <h3>💼 Real MNC Projects</h3>
            <p>Work on 2 real MNC projects during your internship. Gain hands-on experience with industry-standard projects that showcase your capabilities to future employers.</p>
            <ul>
              <li>1 Minor Project (7 days)</li>
              <li>1 Major Project (21 days)</li>
              <li>Real MNC project experience</li>
              <li>Portfolio-building opportunities</li>
            </ul>
          </div>

          <div className="card">
            <h3>🚀 Placement Assistance</h3>
            <p>Get comprehensive placement support in the 3rd month. From mock interviews to resume crafting, we prepare you for success in the job market.</p>
            <ul>
              <li>Mock interviews with expert panels</li>
              <li>Resume crafting to company standards</li>
              <li>Interview line-ups for maximum exposure</li>
              <li>Boost your confidence for interviews</li>
            </ul>
          </div>

          <div className="card">
            <h3>💡 Job-Oriented Program</h3>
            <p>Designed specifically for freshers looking to launch or switch careers. This program gives you the real MNC experience and placement support you need to succeed.</p>
            <ul>
              <li>Perfect for freshers & career switchers</li>
              <li>Real MNC experience</li>
              <li>Comprehensive placement support</li>
              <li>Training fees apply - priceless opportunity</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
