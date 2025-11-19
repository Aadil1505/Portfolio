import { ChaseCard } from "./global/chase-card";

export default function HeroSection() {
    return (
        <main className="overflow-hidden">
            <section>
                <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 lg:pt-48 h-screen">
                    <div className="relative z-10 mx-auto max-w-4xl text-center">
                        <h1 className="text-balance text-5xl font-medium md:text-6xl">
                            Hi! I'm Aadil.
                        </h1>

                        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg">
                            I'm a Software Developer, Entreprenuer, and Technician. Below is my Credit Card information.
                        </p>

                        {/* Credit Card Component */}
                        <div className="mt-16 flex items-center justify-center">
                            <ChaseCard />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}