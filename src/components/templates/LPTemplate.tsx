"use client";

import dynamic from 'next/dynamic';

import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import Campaign from '@/components/sections/Campaign';

import QuestionnaireTestimonials from '@/components/sections/QuestionnaireTestimonials';
import Testimonials from '@/components/sections/Testimonials';
const Reasons = dynamic(() => import('@/components/sections/Reasons'));
const Benefits = dynamic(() => import('@/components/sections/Benefits'));
const Targets = dynamic(() => import('@/components/sections/Targets'));
const Flow = dynamic(() => import('@/components/sections/Flow'));
const Profile = dynamic(() => import('@/components/sections/Profile'));
const Pricing = dynamic(() => import('@/components/sections/Pricing'));
const Blog = dynamic(() => import('@/components/sections/Blog'));
const ContactForm = dynamic(() => import('@/components/sections/ContactForm'));
const CTA = dynamic(() => import('@/components/sections/CTA'));
const AreaCoverage = dynamic(() => import('@/components/sections/AreaCoverage'));
const FAQ = dynamic(() => import('@/components/sections/FAQ'));
const Closing = dynamic(() => import('@/components/sections/Closing'));
const FloatingCTA = dynamic(() => import('@/components/sections/FloatingCTA'));
const Comparison = dynamic(() => import('@/components/sections/Comparison'));
const Roadmap = dynamic(() => import('@/components/sections/Roadmap'));
const Expertise = dynamic(() => import('@/components/sections/Expertise'));
const RegionalAchievements = dynamic(() => import('@/components/sections/RegionalAchievements'));

import RegionAIContent from '@/components/sections/RegionAIContent';

export default function LPTemplate() {
    return (
        <main className="min-h-screen bg-white pb-20 md:pb-0">
            <Hero />
            <RegionAIContent />
            <Problem />
            <Solution />
            <Comparison />
            <Campaign />
            <CTA />
            <Reasons />
            <Benefits />
            <Roadmap />
            <QuestionnaireTestimonials />
            <Testimonials />
            <RegionalAchievements />
            <Targets />
            <Campaign />
            <AreaCoverage />
            <CTA />
            <Flow />
            <Profile />
            <Expertise />
            <Pricing />
            <Campaign />
            <AreaCoverage />
            <CTA />
            <FAQ />
            <Blog />
            <ContactForm />
            <Closing />
            <FloatingCTA />
        </main>
    );
}
