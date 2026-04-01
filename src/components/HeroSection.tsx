import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

const headingCharacters = [
  { value: "H" },
  { value: "i" },
  { value: "," },
  { value: " " },
  { value: "I" },
  { value: "'" },
  { value: "m" },
  { value: " " },
  { value: "S", className: "text-gradient" },
  { value: "a", className: "text-gradient" },
  { value: "n", className: "text-gradient" },
  { value: "j", className: "text-gradient" },
  { value: "a", className: "text-gradient" },
  { value: "y", className: "text-gradient" },
  { value: " " },
  { value: "D", className: "text-gradient" },
  { value: "a", className: "text-gradient" },
  { value: "s", className: "text-gradient" },
  { value: "a", className: "text-gradient" },
  { value: "r", className: "text-gradient" },
  { value: "i", className: "text-gradient" },
];

const headingContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.045,
      delayChildren: 0.1,
    },
  },
};

const headingCharacter = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const HeroSection = () => {
  const profilePhotoUrl = "/sanjay-profile.JPG";
  const resumeUrl = "/Sanjay-Resume.pdf";

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background pt-24 text-foreground transition-colors duration-500">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute left-10 top-20 h-72 w-72 animate-float rounded-full bg-primary/5 blur-3xl" />
      <div
        className="absolute bottom-20 right-10 h-96 w-96 animate-float rounded-full bg-accent/5 blur-3xl"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-20 xl:grid-cols-[minmax(0,1fr)_320px] xl:gap-24">
          <div className="order-2 min-w-0 text-center lg:order-1 lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-2"
            >
              <span className="text-sm font-medium text-primary">Available for opportunities</span>
            </motion.div>

            <motion.h1
              variants={headingContainer}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02 }}
              className="mb-6 whitespace-nowrap font-heading text-[clamp(3.5rem,7vw,5.5rem)] font-bold leading-tight text-foreground transition-all duration-300 hover:tracking-wide"
            >
              <span className="inline-block">
                {headingCharacters.map(({ value, className }, index) => (
                  <motion.span
                    key={`${value}-${index}`}
                    variants={headingCharacter}
                    className={`inline-block ${className ?? ""}`}
                  >
                    {value === " " ? "\u00A0" : value}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto mb-4 max-w-2xl text-lg text-muted-foreground transition-colors duration-300 md:text-xl lg:mx-0"
            >
              AI/ML and Data Science Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mx-auto mb-10 max-w-xl text-base text-muted-foreground/80 lg:mx-0"
            >
              B.Tech in Computer Science & Engineering at Dayananda Sagar College of Engineering. Passionate about building intelligent web applications and solving real-world problems with AI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <a
                href="#projects"
                className="rounded-lg bg-gradient-primary px-8 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-glow"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-border bg-card px-8 py-3 font-semibold text-foreground transition-all duration-300 hover:scale-105 hover:border-primary/50"
              >
                Contact Me
              </a>
              <a
                href={resumeUrl}
                download="Sanjay-Resume.pdf"
                className="inline-flex items-center gap-2 rounded-lg border border-primary/25 bg-card px-8 py-3 font-semibold text-foreground transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:bg-primary/10"
              >
                <Download size={18} className="text-primary" />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center gap-6 lg:justify-start"
            >
              {[
                { icon: Github, href: "https://github.com/Sanjaydsmk", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/sanjay-dasari-75336a2a2", label: "LinkedIn" },
                { icon: Mail, href: "mailto:sanjayd.contact@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.15, rotate: 4 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="rounded-full border border-border/60 bg-card/85 p-3 transition-all duration-300 hover:bg-primary/15 hover:shadow-glow"
                  aria-label={label}
                >
                  <Icon size={20} className="text-muted-foreground transition-colors hover:text-primary" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 mx-auto flex w-full max-w-[220px] justify-center lg:order-2 lg:max-w-[280px] xl:max-w-[320px]"
          >
            <div className="relative">
              <div className="absolute inset-0 scale-105 rounded-full bg-gradient-primary opacity-30 blur-2xl" />
              <div className="relative overflow-hidden rounded-full border-4 border-primary/60 bg-card shadow-2xl">
                <img
                  src={profilePhotoUrl}
                  alt="Sanjay Dasari"
                  className="h-[220px] w-[220px] object-cover sm:h-[250px] sm:w-[250px] lg:h-[280px] lg:w-[280px] xl:h-[300px] xl:w-[300px]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about">
          <ArrowDown className="text-muted-foreground/50" size={24} />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
