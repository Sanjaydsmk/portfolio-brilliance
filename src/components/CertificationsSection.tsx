import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Award } from "lucide-react";

const certifications = [
  { title: "Web Development", issuer: "Skill Vertex", link: "https://drive.google.com/file/d/15ZKnZi9ZLu5HLrjR1FSZ6m698allQnVS/view" },
  { title: "Information Security A–Z", issuer: "Infosys Springboard", link: "https://drive.google.com/file/d/1b_Gia9ySv3Hx0S8yZQtnEPanjbYj08BP/view" },
  { title: "Complete UNIX & Linux OS Fundamentals", issuer: "Infosys Springboard", link: "https://drive.google.com/file/d/1USyFgbJGgRFZ-potNoBnDQG_sgD91LNu/view" },
  { title: "OCI AI Foundations", issuer: "Oracle", link: "https://drive.google.com/file/d/18dfQZs0GS7y9tLbPHvTKuRjP5EM_igAp/view" },
  { title: "Programming Using C++", issuer: "Infosys", link: "https://drive.google.com/file/d/1Mu-x5rxEsO1Nzm2p0ZTJ3Ezp5g6ru7Gn/view" },
  { title: "Data Science with Python", issuer: "Certification", link: "https://drive.google.com/file/d/13QK_vMFtZsfE-AgSygUE38hs140FWP5x/view" },
  { title: "CodeSphere Global Codeathon", issuer: "Participation", link: "https://drive.google.com/file/d/18taRAa918OyJIh0dv0eC2FmxbP6W5PU0/view" },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 bg-gradient-hero relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-6 rounded-2xl bg-gradient-card border border-border/50 shadow-card hover:shadow-glow hover:border-primary/30 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Award className="text-primary" size={22} />
                </div>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100" />
              </div>
              <h3 className="font-semibold font-heading mb-1 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              <div className="mt-4 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                View Certificate <ExternalLink size={12} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
