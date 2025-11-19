'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'
import Link from 'next/link'

type AboutItem = {
    id: string
    icon: IconName
    question: string
    answer: string
}

export default function AboutMeSection() {
    const aboutItems: AboutItem[] = [
        {
            id: 'item-1',
            icon: 'cpu',
            question: 'How I Started Coding',
            answer: 'My love for coding started years ago when I became obsessed with building PCs. Although it was an incredibly expensive hobby, it fulfilled my desire to create. Years later that passion for building and creating transitioned into coding as I became more familiar with computers and development. Watching a random idea come to life on a screen in front of me continues to serve as inspiration and excitement to always complete a project.',
        },
        {
            id: 'item-2',
            icon: 'graduation-cap',
            question: 'Learning About Programming',
            answer: 'I got my introduction to coding in just the 10th grade in AP Computer Science Principles. For the exam, I created one of my first full-featured apps using Javascript and a New York Stock Exchange database I scavenged online. The app would inform its user of the potential profit they could have earned on a Stock or ETF, if they invested at any user-specified historical point in time. This project sent me spiraling down a rabbit hole of ideas and projects that inspired me to learn more about coding and how I could use it to create my ideas and solve problems.',
        },
        {
            id: 'item-3',
            icon: 'briefcase',
            question: 'Working and Coding Projects',
            answer: 'Today I am a Computer Science Technician at Hofstra University where I both lead and assist in many different projects that aim to implement, develop, and secure department needed infrastructure and systems. Most of these include integrating open source software and solutions to build on the current infrastructure. I am also a Software Developer at the Science and Innovation Center\'s Makerspace where I am currently building out a new employee and student management system to automate training verification and tracking student data. I am also actively pursuing a B.S. in Computer Science at Hofstra University.',
        },
    ]

    return (
        <section id="about" className="py-20">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <div className="md:w-1/3">
                        <div className="sticky top-20">
                            <h2 className="mt-4 text-3xl font-bold">About Me</h2>
                            <p className="text-muted-foreground mt-4">
                                HOW I got into programming and what I'm working on today.{' '}
                            </p>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-2">
                            {aboutItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className="bg-background shadow-xs rounded-lg border px-4 last:border-b">
                                    <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-6">
                                                <DynamicIcon
                                                    name={item.icon}
                                                    className="m-auto size-4"
                                                />
                                            </div>
                                            <span className="text-base">{item.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-5">
                                        <div className="px-9">
                                            <p className="text-base">{item.answer}</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}