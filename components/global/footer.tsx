import Link from 'next/link'
import TickerDisplay from './ticker'

const links = [
    {
        title: 'Home',
        href: '/#hero',
    },
    {
        title: 'About',
        href: '/#about',
    },
    {
        title: 'Projects',
        href: '/#projects',
    },
    {
        title: 'Experience',
        href: '/#experience',
    },
    {
        title: 'Contributions',
        href: '/#contributions',
    },
    {
        title: 'Contact',
        href: '/#contact',
    },
]

export default function FooterSection() {
    return (
        <footer className="border-t py-12">
            <div className="mx-auto max-w-5xl px-6">
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                    {/* Ticker on the left */}
                    <div className="order-2 md:order-1">
                        <TickerDisplay />
                    </div>

                    {/* Navigation links on the right */}
                    <div className="order-1 flex flex-wrap justify-center gap-6 text-sm md:order-2 md:justify-end">
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="text-muted-foreground hover:text-primary block transition-colors duration-150">
                                <span>{link.title}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}