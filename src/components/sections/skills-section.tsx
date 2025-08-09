import { portfolioData } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Users, Cpu } from 'lucide-react';

const techSkillIcons: { [key: string]: React.ReactNode } = {
  Python: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5"><path d="M13.83 8.67c.36-.36.36-.94 0-1.3-.36-.36-.94-.36-1.3 0-4.24 4.24c-.36.36-.36.94 0 1.3.36.36.94.36 1.3 0l4.24-4.24Z"/><path d="M13.83 15.33c.36.36.36.94 0 1.3-.36.36-.94.36-1.3 0l-4.24-4.24c-.36-.36-.36.94 0-1.3.36-.36.94-.36 1.3 0l4.24 4.24Z"/><path d="M8.67 13.83c-.36.36-.94.36-1.3 0-.36-.36-.36-.94 0-1.3l4.24-4.24c.36-.36.94-.36 1.3 0 .36.36.36.94 0 1.3l-4.24 4.24Z"/><path d="M15.33 13.83c-.36.36-.94.36-1.3 0-.36-.36-.36-.94 0-1.3l4.24-4.24c.36-.36.94-.36 1.3 0 .36.36.36.94 0 1.3l-4.24 4.24Z"/><path d="M16.5 22a3.5 3.5 0 0 0-3.5-3.5H8.5A3.5 3.5 0 0 1 5 15V7.5A3.5 3.5 0 0 0 8.5 4h8A3.5 3.5 0 0 0 20 7.5v1.8"/><path d="M7.5 2a3.5 3.5 0 0 1 3.5 3.5v1H7.5A3.5 3.5 0 0 0 4 10v8a3.5 3.5 0 0 0 3.5 3.5h1.8"/></svg>
  ),
  'Scala(Beginner)': <span className="mr-1.5">📄</span>,
  'Shell Scripting (Bash)': <span className="mr-1.5">💲</span>,
  SQL: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
  ),
  PostgreSQL: <span className="mr-1.5">🐘</span>,
  MySQL: <span className="mr-1.5">🐬</span>,
  MongoDB: <span className="mr-1.5">🍃</span>,
  'Oracle SQL Developer': <span className="mr-1.5">🗄️</span>,
  AWS: <span className="mr-1.5">☁️</span>,
  Azure: (
     <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
      <path d="M6.79 8.79l-2.05 2.05a1.41 1.41 0 0 0 0 2l7.58 7.58a1.41 1.41 0 0 0 2 0l7.58-7.58a1.41 1.41 0 0 0 0-2l-2.05-2.05a1.41 1.41 0 0 0-2 0L12 13.59l-3.21-3.21a1.41 1.41 0 0 0-2 0Z"/><path d="m12 13.59 7.58-7.58a1.41 1.41 0 0 0 0-2l-2.05-2.05a1.41 1.41 0 0 0-2 0l-4.32 4.32"/>
    </svg>
  ),
  'ETL Pipelines': <span className="mr-1.5">⚙️</span>,
  'Data Warehousing': <span className="mr-1.5">📦</span>,
  Databricks: <span className="mr-1.5">🧱</span>,
  Git: <span className="mr-1.5">🌿</span>,
  Docker: <span className="mr-1.5">🐳</span>,
  JIRA: <span className="mr-1.5">🔵</span>,
  Linux: <span className="mr-1.5">🐧</span>,
  Github: (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  Agile: <span className="mr-1.5">🔄</span>,
  Scrum: <span className="mr-1.5">🏉</span>,
  TDD: <span className="mr-1.5">✅</span>,
  'CI/CD': <span className="mr-1.5">🚀</span>,
};

const softSkillEmojis: { [key: string]: string } = {
  'Problem Solving': '🤔',
  'Team Collaboration': '🤝',
  Communication: '🗣️',
  'Agile Methodologies': '🏃‍♂️',
  'Project Management': '📋',
  'Critical Thinking': '🧠',
};


const TechSkillIcon = ({ skill }: { skill: string }) => {
    const icon = techSkillIcons[skill] || <Cpu className="mr-1.5 h-3.5 w-3.5" />;
    return <>{icon}</>;
}

const SoftSkillEmoji = ({ skill }: { skill: string }) => {
    const emoji = softSkillEmojis[skill];
    if (!emoji) return null;
    return <span className="mr-1.5">{emoji}</span>;
}


export function SkillsSection() {
  const { technicalSkills, softSkills } = portfolioData.skills;

  return (
    <section id="skills" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Expertise</h2>
          <p className="text-muted-foreground mt-2 md:text-lg">The tools and abilities I bring to the table.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="text-primary" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <div key={category}>
                  <h3 className="font-semibold mb-2 text-md">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                        <TechSkillIcon skill={skill} />
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="text-primary" />
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                  <SoftSkillEmoji skill={skill} />
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
