import { portfolioData } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

export function EducationSection() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Education</h2>
          <p className="text-muted-foreground mt-2 md:text-lg">My academic background and qualifications.</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="overflow-hidden">
               <div className="flex items-start p-6">
                <div className="bg-primary/10 text-primary p-3 rounded-full mr-4 mt-1">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{edu.years}</p>
                  <h3 className="text-xl font-bold font-headline">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.institution}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
