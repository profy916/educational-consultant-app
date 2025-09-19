import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    details: "info@educonsult.com",
    description: "Get in touch via email"
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+1 (555) 123-4567",
    description: "Call for immediate assistance"
  },
  {
    icon: MapPin,
    title: "Location",
    details: "New York, NY",
    description: "Serving clients nationwide"
  },
  {
    icon: Clock,
    title: "Hours",
    details: "Mon-Fri 9AM-6PM",
    description: "Eastern Time Zone"
  }
];

const contactSchema = z.object({
  firstName: z.string().min(2, "First name is too short"),
  lastName: z.string().min(2, "Last name is too short"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Please enter a subject"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    }
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Email service is not configured");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_first_name: values.firstName,
          from_last_name: values.lastName,
          from_email: values.email,
          subject: values.subject,
          message: values.message,
        },
        { publicKey }
      );

      toast({ title: "Message sent", description: "Thanks! We'll get back to you shortly." });
      reset();
    } catch (err) {
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to <span className="bg-gradient-primary bg-clip-text text-transparent">Get Started?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take the first step towards educational success. Let's discuss how we can help you achieve your goals.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">Contact Information</h3>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 bg-card/50 backdrop-blur-sm hover:shadow-soft transition-smooth">
                  <CardHeader className="pb-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-3">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-foreground mb-1">{info.details}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <Card className="border-0 shadow-elegant bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">First Name</label>
                    <Input placeholder="Your first name" className="bg-background/50" {...register("firstName")} />
                    {errors.firstName && (
                      <p className="text-sm text-destructive mt-1">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Last Name</label>
                    <Input placeholder="Your last name" className="bg-background/50" {...register("lastName")} />
                    {errors.lastName && (
                      <p className="text-sm text-destructive mt-1">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input type="email" placeholder="your.email@example.com" className="bg-background/50" {...register("email")} />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                  <Input placeholder="How can we help you?" className="bg-background/50" {...register("subject")} />
                  {errors.subject && (
                    <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>
                  )}
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell us about your educational goals and challenges..."
                    className="min-h-32 bg-background/50"
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                  )}
                </div>
                
                <Button variant="cta" size="lg" className="w-full text-lg" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}