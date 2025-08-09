import { portfolioData } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Badge } from '../ui/badge';

export function CertificatesSection() {
  const { certificates } = portfolioData;

  return (
    <section id="certificates" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Certificates & Awards</h2>
          <p className="text-muted-foreground mt-2 md:text-lg">Recognition of my skills and achievements.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader className='flex-row items-start gap-4 space-y-0'>
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle>{cert.name}</CardTitle>
                  <CardDescription>{cert.issuingOrganization}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                 <Badge variant="secondary">{cert.date}</Badge>
              </CardContent>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href={cert.url} target="_blank" rel="noopener noreferrer">
                    View Certificate <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
