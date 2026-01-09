import FaqSection from '@/sections/faq-section';
import HeroSection from '@/sections/hero-section';
import Newsletter from '@/sections/newsletter';
import OurLatestCreations from '@/sections/our-latest-creations';
import OurTestimonialSection from '@/sections/our-testimonials-section';
import WhatWeDoSection from '@/sections/what-we-do-section';

export default function Page() {
    return (
        <main className='px-4'>
            <HeroSection />
            <WhatWeDoSection />
            <OurLatestCreations />
            <OurTestimonialSection />
            <FaqSection />
            <Newsletter />
        </main>
    );
}
