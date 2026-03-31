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

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: GraduationCap,
              title: "Education",
              desc: "B.Tech in CSE at SRMIST, Kattankulathur (2022–2026). CGPA: 8.58. Higher Secondary from Chettinad Vidyashram, Chennai (93.2%).",
              delay: 0.1,
            },
            {
              icon: Code2,
              title: "What I Do",
              desc: "I build full-stack web apps and AI/ML solutions — from React frontends to Python-powered backends with deep learning and data science.",
              delay: 0.2,
            },
            {
              icon: MapPin,
              title: "Location",
              desc: "Based in Chennai, India. Open to remote opportunities and collaborations worldwide.",
              delay: 0.3,
            },
          ].map(({ icon: Icon, title, desc, delay }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay }}
              className="group p-8 rounded-2xl bg-gradient-card border border-border/50 shadow-card hover:shadow-glow hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
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
