import { portfolioData } from '@/lib/data';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export function HeroSection() {
  const { name, tagline, introduction, socialLinks, profilePicture } = portfolioData.hero;
  return (
    <section id="hero" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-center">
          <div className="space-y-4">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter">
              {name}
            </h1>
            <p className="text-lg md:text-xl text-primary font-medium">{tagline}</p>
            <p className="max-w-prose text-muted-foreground">
              {introduction}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg">
                <Link href="#experience">
                  View My Work <ArrowDown className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <div className="flex items-center gap-2">
                <Button asChild variant="outline" size="icon">
                  <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <Link href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl bg-gradient-to-br from-primary to-accent p-2">
              <Image
                src={profilePicture}
                alt={name}
                width={320}
                height={320}
                priority
                className="rounded-full object-cover w-full h-full"
                data-ai-hint="profile picture"
              />
            </div>
             <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/20 rounded-full animate-pulse -z-10"></div>
             <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full animate-pulse -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
