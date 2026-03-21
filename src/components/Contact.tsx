import React from "react";
import { cn } from "@/lib/utils";
import FadeIn from "./animations/FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Facebook, Instagram, Music } from "lucide-react";

interface ContactProps {
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ className }) => {
  const contactLinks = [
    {
      icon: Mail,
      title: "Email",
      description:
        "For booking inquiries, collaborations, or general questions",
      link: "mailto:courtyardtheband@gmail.com",
      linkText: "courtyardtheband@gmail.com",
    },
    {
      icon: Instagram,
      title: "Instagram",
      description:
        "Follow for updates, behind-the-scenes, and new music announcements",
      link: "https://www.instagram.com/courtyard_theband/",
      linkText: "@courtyard_theband",
    },
    {
      icon: Facebook,
      title: "Facebook",
      description:
        "Connect for show announcements and updates",
      link: "https://www.facebook.com/profile.php?id=61565740834045",
      linkText: "Courtyard",
    },
  ];

  return (
    <section id="contact" className={cn("py-20 bg-muted", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">
              Get in Touch
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="text-lg text-center text-muted-foreground mb-12">
              Whether you're interested in booking Courtyard, discussing
              collaboration opportunities, or simply want to connect, reach out
              through any of the channels below. You can also stream their music
              on Spotify and Apple Music.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactLinks.map((contact, index) => {
            const IconComponent = contact.icon;
            return (
              <FadeIn key={index} delay={150 + index * 50}>
                <Card className="border-0 shadow-sm h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div className="flex justify-center mb-4">
                      <IconComponent className="w-10 h-10 text-gray-700" />
                    </div>
                    <h3 className="text-xl font-medium mb-3 font-serif">
                      {contact.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {contact.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-border">
                      <a
                        href={contact.link}
                        className="text-sm font-medium hover:underline text-gray-700"
                        target={contact.icon === Mail ? undefined : "_blank"}
                        rel={
                          contact.icon === Mail
                            ? undefined
                            : "noopener noreferrer"
                        }
                      >
                        {contact.linkText}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
          <FadeIn delay={300}>
            <Card className="border-0 shadow-sm h-full hover:shadow-md transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Music className="w-10 h-10 text-gray-700" />
                </div>
                <h3 className="text-xl font-medium mb-3 font-serif">
                  Spotify
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Stream Courtyard on Spotify — including "The Lighthouse" and more
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <a
                    href="https://open.spotify.com/artist/6mbL9LM7UnlZZmrv2UXFad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:underline text-gray-700"
                  >
                    Listen on Spotify
                  </a>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
