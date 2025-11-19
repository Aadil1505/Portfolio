import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronRight, Instagram } from 'lucide-react'
import Link from 'next/link'
import * as React from 'react'
import { WordRotate } from '../ui/word-rotate'

const projectsData = [
    {
        id: 1,
        title: "Google Gemini",
        description: "Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.",
        icon: <Instagram />,
        iconType: "component" as const,
        link: "https://github.com/meschacirung/cnblocks"
    },
    {
        id: 2,
        title: "Replit",
        description: "Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.",
        icon: "/images/replit-logo.png",
        iconType: "image" as const,
        link: "https://github.com/meschacirung/cnblocks"
    },
    {
        id: 3,
        title: "Magic UI",
        description: "Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.",
        icon: <Instagram />,
        iconType: "component" as const,
        link: "https://github.com/meschacirung/cnblocks"
    },
    {
        id: 4,
        title: "VSCodium",
        description: "Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.",
        icon: "/images/vscodium-logo.png",
        iconType: "image" as const,
        link: "https://github.com/meschacirung/cnblocks"
    },
    {
        id: 5,
        title: "MediaWiki",
        description: "Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.",
        icon: <Instagram />,
        iconType: "component" as const,
        link: "https://github.com/meschacirung/cnblocks"
    },
    {
        id: 6,
        title: "Google PaLM",
        description: "Amet praesentium deserunt ex commodi tempore fuga voluptatem. Sit, sapiente.",
        icon: "https://aadil-alli.vercel.app/ripe/logo.png",
        iconType: "image" as const,
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
                        <p className="text-muted-foreground mt-6">Connect seamlessly with popular platforms and services to enhance your workflow.</p>
                    </div>

                    <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                        {projectsData.map((project) => (
                            <IntegrationCard
                                key={project.id}
                                title={project.title}
                                description={project.description}
                                icon={project.icon}
                                iconType={project.iconType}
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
    iconType, 
    link = 'https://github.com/meschacirung/cnblocks' 
}: { 
    title: string; 
    description: string; 
    icon: React.ReactNode | string; 
    iconType: 'component' | 'image';
    link?: string 
}) => {
    return (
        <Card className="p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/50">
            <div className="relative">
                <div className="size-10">
                    {iconType === 'image' ? (
                        <img 
                            src={icon as string} 
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