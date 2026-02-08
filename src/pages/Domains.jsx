const domains = [
  {
    title: "Artificial Intelligence",
    desc: "Learn neural networks, deep learning, and real-world AI model building.",
  },
  {
    title: "Data Science",
    desc: "Work with datasets, visualization, statistics, and predictive modeling.",
  },
  {
    title: "Machine Learning",
    desc: "Build ML models using Python, supervised and unsupervised learning.",
  },
  {
    title: "Cloud Computing",
    desc: "Deploy applications using AWS concepts and cloud architecture.",
  },
  {
    title: "Cyber Security",
    desc: "Understand ethical hacking, security testing, and system protection.",
  },
  {
    title: "Full Stack Development",
    desc: "Build complete web applications using frontend and backend technologies.",
  },
  {
    title: "UI/UX Design",
    desc: "Design user interfaces, wireframes, and interactive prototypes.",
  },
  {
    title: "DevOps",
    desc: "Learn CI/CD pipelines, deployment automation, and containerization.",
  },
  {
    title: "IoT",
    desc: "Create smart device systems using sensors and microcontrollers.",
  },
  {
    title: "Digital Marketing",
    desc: "SEO, social media marketing, and analytics-driven campaigns.",
  },
  {
    title: "VLSI Engineering",
    desc: "Design and develop Very Large Scale Integration circuits, chip design, and semiconductor technology.",
  },
];

export default function Domains() {
  return (
    <div className="section">
      <h2>Domains Available</h2>

      <div className="card-grid">
        {domains.map((d, i) => (
          <div className="card" key={i}>
            <h3>{d.title}</h3>
            <p>{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
