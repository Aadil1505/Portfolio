
interface ExperienceItem {
  id: number;
  title: string;
  details: string;
  period: string;
  company: string;
  logo: string;
  description: string;
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    title: "Software Development Intern",
    details: "Part Time • Remote",
    period: "Mar 2025 - Present",
    company: "Disko",
    logo: "https://disko.tv/wp-content/uploads/2023/03/diskologo.png",
    description:
      "Led the migration from a legacy Angular codebase to a modern Next.js stack, improving developer efficiency and deployment workflows. Built dynamic, responsive UI interfaces using Next.js and Tailwind CSS, optimized for cross-device performance and accessibility. Implemented secure authentication using Auth.js and contributed to a fast-paced, agile startup environment.",
  },
  {
    id: 2,
    title: "Maker Space Software Developer",
    details: "Part Time • Hempstead, NY",
    period: "Jun 2024 - Present",
    company: "Hofstra University",
    logo: "https://i.imgur.com/f3PM6J7.png",
    description:
      "Developed and deployed a comprehensive student and employee management system using Next.js, NextAuth, and PostgreSQL, reducing time needed for managing trainings and certifications. Created an API to track student usage data of machines and equipment. Led a 4-person development team using Agile methodology.",
  },
  {
    id: 3,
    title: "Computer Science Technician",
    details: "Part Time • Hempstead, NY",
    period: "Oct 2022 - Present",
    company: "Hofstra University",
    logo: "https://cs.hofstra.edu/docs/images/shield_lockup_cs.png",
    description:
      "Custom-built and enhanced the department's email server following a security breach, implementing advanced security measures using Postfix, ClamAV, and firewalls on AWS EC2. Implemented multi-factor authentication for SSH access, preventing thousands of daily attacks. Designed an automated VM provisioning system using n8n workflows and Ansible playbooks.",
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">Work Experience</h2>
            <p className="text-muted-foreground mt-6">
              My professional career and technical experience.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {experienceData.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ExperienceCard = ({ experience }: { experience: ExperienceItem }) => {
  return (
    <div className="border-border border-b pb-8 last:border-b-0 transition-all duration-300 hover:translate-x-1">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex-1">
          <div className="mb-2 flex items-center gap-3">
            <img
              src={experience.logo}
              alt={`${experience.company} logo`}
              width={20}
              height={20}
              className="object-contain"
            />
            <h3 className="text-xl font-medium">{experience.title}</h3>
          </div>
          <p className="text-muted-foreground mb-3 text-sm">
            {experience.details}
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {experience.description}
          </p>
        </div>
        <div className="text-left md:text-right md:min-w-[200px]">
          <p className="mb-1 text-sm font-medium">{experience.period}</p>
          <p className="text-muted-foreground text-sm">{experience.company}</p>
        </div>
      </div>
    </div>
  );
};