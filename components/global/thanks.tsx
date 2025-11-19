import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Ipad } from "../ui/ipad";

const socialLinks = [
  {
    name: "Email",
    href: "aadil15alli@gmail.com",
    icon: Mail,
  },
  {
    name: "GitHub",
    href: "https://github.com/Aadil1505",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aadil-alli/",
    icon: Linkedin,
  },
];

export default function ThankYou() {
  return (
    <section id="contact">
      <div className="py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left side - Text content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-semibold md:text-4xl">
                  Thanks for Stopping By!
                </h2>
                <p className="text-muted-foreground mt-6 text-lg">
                  I'm always excited to connect with fellow developers, discuss new projects, 
                  or explore collaboration opportunities. Feel free to reach out through any 
                  of the platforms below.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-medium">Let's Connect</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.name}
                      asChild
                      variant="outline"
                      size="default"
                      className="gap-2 transition-all duration-300 hover:scale-105 hover:shadow-md"
                    >
                      <Link href={link.href} target="_blank" rel="noopener noreferrer">
                        <link.icon className="size-4" />
                        {link.name}
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <p className="text-muted-foreground text-sm">
                  Whether you have a question, want to collaborate on a project, 
                  or just want to say hi, I'll try my best to get back to you!
                </p>
              </div>
            </div>

            {/* Right side - iPhone component */}
            <div className="flex justify-center lg:justify-end">
              <div className="transition-all duration-300 hover:scale-105">
                <Ipad
                    src="https://gifdb.com/images/high/daffy-duck-burning-money-jo3qpiwzyhnh4v3y.webp"
                    width={520}
                    height={400}
                    className="size-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}