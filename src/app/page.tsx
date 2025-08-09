import { Header } from '@/components/header';
import { HeroSection } from '@/components/sections/hero-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { ExperienceSection } from '@/components/sections/experience-section';
import { EducationSection } from '@/components/sections/education-section';
import { CertificatesSection } from '@/components/sections/certificates-section';
import { WhatsAppSection } from '@/components/sections/whatsapp-section';
import { BlogSection } from '@/components/sections/blog-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificatesSection />
        <WhatsAppSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
