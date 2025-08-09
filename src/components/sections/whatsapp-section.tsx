import { portfolioData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99 0-3.903-.52-5.687-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.89-5.451 0-9.887 4.434-9.889 9.884-.001 2.225.651 4.315 1.731 6.086l.001.001-1.045 3.825 3.846-1.041z" />
  </svg>
);


export function WhatsAppSection() {
    if (!portfolioData.whatsAppChannel) {
        return null;
    }
  const { url, title, description } = portfolioData.whatsAppChannel;

  return (
    <section id="whatsapp" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center bg-card p-8 rounded-xl shadow-lg">
          <div className="inline-block bg-primary/10 text-primary p-4 rounded-full mb-4">
              <WhatsAppIcon className="h-10 w-10" />
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold">{title}</h2>
          <p className="text-muted-foreground mt-4 md:text-lg">
            {description}
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href={url} target="_blank" rel="noopener noreferrer">
              Join the Channel
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
