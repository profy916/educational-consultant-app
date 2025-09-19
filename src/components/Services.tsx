import { GraduationCap, BookOpen, Users, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: GraduationCap,
    title: "Academic Planning",
    description: "Strategic guidance for course selection, career pathways, and educational goal setting to maximize your academic potential."
  },
  {
    icon: BookOpen,
    title: "Study Skills Development",
    description: "Proven techniques and personalized strategies to improve learning efficiency, retention, and academic performance."
  },
  {
    icon: Users,
    title: "College Admissions",
    description: "Comprehensive support through the college application process, from school selection to essay writing and interview preparation."
  },
  {
    icon: TrendingUp,
    title: "Career Counseling",
    description: "Professional guidance to align your education with career objectives and develop skills for future success."
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Expert <span className="bg-gradient-primary bg-clip-text text-transparent">Consulting Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive educational support tailored to your unique needs and goals
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-smooth border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}