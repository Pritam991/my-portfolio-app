import { portfolioData } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';
import { Badge } from '../ui/badge';

export function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Work Experience</h2>
          <p className="text-muted-foreground mt-2 md:text-lg">My professional journey and accomplishments.</p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-3.5 md:left-4 top-4 h-full w-0.5 bg-border -z-10"></div>
          {experience.map((job, index) => (
            <div key={index} className="mb-8 relative pl-10 md:pl-12">
               <div className="absolute left-0 top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-card border-2 border-primary">
                <Briefcase className="h-4 w-4 text-primary" />
              </div>
              <Card>
                <CardHeader>
                  <div className='flex justify-between items-start'>
                    <div>
                      <CardTitle>{job.role}</CardTitle>
                      <CardDescription>{job.company}</CardDescription>
                    </div>
                    <Badge variant="outline">{job.duration}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{job.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
