import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronRight, Instagram, Zap } from 'lucide-react'
import Link from 'next/link'
import * as React from 'react'
import { WordRotate } from '../ui/word-rotate'

const projectsData = [
    {
        id: 1,
        title: "Authlink",
        description: "Blockchain & NFC based product authentication system.",
        icon: "https://i.imgur.com/JSYiIWq.png",
        link: "/projects/authlink"
    },
    {
        id: 2,
        title: "SaaStrike",
        description: "An automated SaaS idea generator using Reddit and OpenAI.",
        icon: <Zap/>,
        link: "https://github.com/meschacirung/cnblocks"
    },
    {
        id: 3,
        title: "CS Technician",
        description: "Working as a CS Technician building and developing systems infrastructure.",
        icon: "https://cs.hofstra.edu/docs/images/shield_lockup_cs.png",
        link: "https://github.com/meschacirung/cnblocks"
    },
    {
        id: 4,
        title: "Software Developer",
        description: "Building MakerSpace employee and student management systems.",
        icon: "https://i.imgur.com/f3PM6J7.png",
        link: "https://github.com/meschacirung/cnblocks"
    },
    {
        id: 5,
        title: "Disko",
        description: "Building smart and scalable media and streaming software.",
        icon: "https://disko.tv/wp-content/uploads/2023/03/diskologo.png",
        link: "https://github.com/meschacirung/cnblocks"
    },
    {
        id: 6,
        title: "Ripe Shopping",
        description: "Optimized Grocery Platform using OCR for automated cart creation.",
        icon: "https://aadil-alli.vercel.app/ripe/logo.png",
        link: "https://github.com/meschacirung/cnblocks"
    },
    {
        id: 7,
        title: "Abu Zayn",
        description: "Custom website for restaurant marketing and advertisement.",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkGFlUMG5XOcSTSpUz5lcdmbZUvWjOAqnsWw&s",
        link: "https://github.com/meschacirung/cnblocks"
    }
]

export default function Projects() {
    return (
        <section>
            <div className="py-32">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="text-center flex-col items-center justify-center">
                        <h2 className="text-3xl font-semibold md:text-4xl">Some of My</h2>
                        <WordRotate
                            className="text-3xl font-semibold md:text-4xl"
                            words={["Work", "Projects", "Side Quests"]}
                        />
                        <p className="text-muted-foreground mt-6">Some of the stuff I spend my free time on and get paid to do.</p>
                    </div>

                    <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {projectsData.map((project) => (
                            <IntegrationCard
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                icon={project.icon}
                                link={project.link}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

const IntegrationCard = ({ 
    title, 
    description, 
    icon, 
    link = 'https://github.com/meschacirung/cnblocks' 
}: { 
    title: string; 
    description: string; 
    icon: React.ReactNode | string; 
    link?: string 
}) => {
    return (
        <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50">
            <div className="relative">
                <div className="size-10">
                    {typeof icon === 'string' ? (
                        <img 
                            src={icon} 
                            alt={title}
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                    ) : (
                        <div className="*:size-10">{icon}</div>
                    )}
                </div>

                <div className="space-y-2 py-6">
                    <h3 className="text-base font-medium">{title}</h3>
                    <p className="text-muted-foreground line-clamp-2 text-sm">{description}</p>
                </div>

                <div className="flex gap-3 border-t border-dashed pt-6">
                    <Button
                        asChild
                        variant="secondary"
                        size="sm"
                        className="gap-1 pr-2 shadow-none">
                        <Link href={link}>
                            Learn More
                            <ChevronRight className="ml-0 size-3.5! opacity-50" />
                        </Link>
                    </Button>
                </div>
            </div>
        </Card>
    )
}