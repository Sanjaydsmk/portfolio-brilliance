import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Code2 } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-center text-muted-foreground max-w-3xl mx-auto mb-12"
        >
          B.Tech in Computer Science & Engineering at Dayananda Sagar College of Engineering, with a strong foundation in core computing concepts and a passion for building intelligent, real-world solutions. I am particularly interested in Artificial Intelligence and Machine Learning (AI/ML), focusing on developing predictive models and smart systems, along with Data Science, where I work on data analysis, visualization, and extracting meaningful insights from complex datasets. Skilled in Python, SQL, and web technologies, I enjoy integrating AI-driven solutions into practical applications and aim to grow as a professional in AI/ML and Data Science by contributing to innovative and impactful projects.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: GraduationCap,
              title: "Education",
              desc: "B.Tech in CSE at Dayananda Sagar College of Engineering, Bangalore (2023–2027), CGPA: 9.27",
              delay: 0.1,
            },
            {
              icon: Code2,
              title: "What I Do",
              desc: "I build web apps and AI/ML solutions using React and Python. I apply machine learning, deep learning, and data science to solve real-world problems.",
              delay: 0.2,
            },
            {
              icon: MapPin,
              title: "Location",
              desc: "Based in Bangalore, India. Open to remote opportunities and collaborations worldwide.",
              delay: 0.3,
            },
          ].map(({ icon: Icon, title, desc, delay }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay }}
              className="group rounded-2xl border border-border/50 bg-card/85 p-8 shadow-card backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-glow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold font-heading mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
