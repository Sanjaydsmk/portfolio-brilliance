import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "FinGaze",
    subtitle: "AI-Based Stock Portfolio Risk Classifier",
    tech: ["Python", "FinRL", "Reinforcement Learning"],
    bullets: [
      "Designed an automated trading system using Deep Reinforcement Learning with a custom market environment and sentiment-aware features.",
      "Implemented risk-adjusted reward shaping and a hybrid safety layer with stop-loss and position-sizing constraints.",
      "Trained and evaluated multiple DRL agents using backtesting metrics such as Sharpe ratio and maximum drawdown.",
    ],
    live: "https://fingaze.streamlit.app/",
    github: "https://github.com/Sanjaydsmk",
    color: "from-primary to-accent",
  },
  {
    title: "ClusterCart",
    subtitle: "E-commerce Customer Segmentation",
    tech: ["Python", "Machine Learning", "Streamlit"],
    bullets: [
      "Built an end-to-end customer segmentation system using the RFM framework on transactional e-commerce data.",
      "Performed data cleaning, feature scaling, and applied K-Means clustering to identify behavior-based customer segments.",
      "Deployed an interactive Streamlit dashboard for cluster exploration and business insights.",
    ],
    github: "https://github.com/Sanjaydsmk/ClusterCart",
    color: "from-accent to-primary",
  },
  {
    title: "CineAdda",
    subtitle: "Smart Movie Booking Platform",
    tech: ["React", "Node.js", "MongoDB", "ML"],
    bullets: [
      "Built an end-to-end movie ticket booking system with authentication, real-time seat selection, and admin analytics.",
      "Implemented AI-driven movie recommendations and review sentiment analysis for personalized user experience.",
      "Developed a Linear Regression model to predict show revenue and trending performance.",
    ],
    live: "https://cineadda.vercel.app/",
    github: "https://github.com/Sanjaydsmk/CineAdda",
    color: "from-primary via-accent to-primary",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid gap-8 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative rounded-2xl bg-gradient-card border border-border/50 shadow-card overflow-hidden hover:shadow-glow hover:border-primary/30 transition-all duration-500"
            >
              {/* Top gradient bar */}
              <div className={`h-1 bg-gradient-to-r ${project.color}`} />
              
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold font-heading group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">{project.subtitle}</p>
                  </div>
                  <div className="flex gap-3">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-semibold hover:scale-105 hover:shadow-glow transition-all duration-300"
                      >
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-sm font-semibold hover:border-primary/50 hover:scale-105 transition-all duration-300"
                      >
                        <Github size={14} /> GitHub
                      </a>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2">
                  {project.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
