import { Award, Users2, Clock, Star } from "lucide-react";

const stats = [
  { icon: Users2, number: "500+", label: "Students Helped" },
  { icon: Award, number: "15+", label: "Years Experience" },
  { icon: Clock, number: "1000+", label: "Hours of Consulting" },
  { icon: Star, number: "4.9", label: "Average Rating" }
];

export default function About() {
  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Empowering <span className="bg-gradient-secondary bg-clip-text text-transparent">Educational Success</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              With over 15 years of experience in educational consulting, I've dedicated my career to helping students, parents, and educational institutions overcome challenges and achieve their goals.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              My approach combines proven methodologies with personalized strategies, ensuring each client receives the support they need to succeed academically and professionally.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-card rounded-xl shadow-soft">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 shadow-elegant">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Why Choose Our Consulting?</h3>
              <ul className="space-y-4">
                {[
                  "Personalized approach tailored to individual needs",
                  "Proven track record of student success",
                  "Comprehensive support from planning to achievement",
                  "Expert knowledge of educational systems and requirements",
                  "Ongoing mentorship and guidance"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-secondary-foreground rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}