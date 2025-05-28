'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function PricingPlans() {
    return (
        <section className="bg-gradient-to-br from-white to-purple-50 py-20 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 ">Plans & Pricing</h2>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-gray-500 max-w-md text-center md:text-left">
                            Whether your time-saving automation needs are large or small, we’re here to help you scale.
                        </p>
                        <div className="flex gap-4">
                            <button className="px-5 py-2.5 rounded-full border border-gray-300 text-sm text-gray-700 bg-white shadow-sm hover:bg-[#4A29FF] hover:text-white transition-colors hover:border-[#4A29FF]">
                                MONTHLY
                            </button>
                            <button className="px-5 py-2.5 rounded-full border  border-gray-300 text-sm text-gray-700 bg-white  shadow-sm hover:bg-[#4A29FF] hover:text-white transition-colors hover:border-[#4A29FF]">
                                YEARLY
                            </button>
                        </div>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid gap-6 md:grid-cols-3">
                    <PlanCard
                        title="BASIC PLAN"
                        price="FREE"
                        isMonthly={false}
                        description="Tools for your utility belt while you're being a JobSeeking SuperHero"
                        features={[
                            'No Hidden Fees or Ads',
                            'Resume Builder',
                            'Cover Letter Generator',
                            'Resume Score',
                            'Glassdoor Automation',
                            'Resume GPT',
                            'Pixel: Interview Prep Voice Agent',
                            'Social Post, Bio and Hashtag Generator',
                            'Limitations Apply',
                        ]}
                    />
                    <PlanCard
                        title="SELECTED PLAN"
                        price="$49.99/"
                        isMonthly={true}
                        description="Boost your chances with powerful job hunt automations"
                        features={[
                            'No Hidden Fees or Ads',
                            'Everything included in BASIC Plan',
                            'Tailored Apply on AutoPilot',
                            '2X Credits – Resume Builder, Generators, Pixel Sessions',
                            'Job Search Email Assistant',
                        ]}
                    />
                    <PlanCard
                        title="PREMIUM PLAN"
                        price="$49.99/"
                        isMonthly={true}
                        description="Full access with max automation and live interview support"
                        features={[
                            'No Hidden Fees or Ads',
                            'Everything included in SELECT Plan',
                            'Navi: Interview Assistance OnCall Support Bot',
                            '4X Credits – Resume Builder, Generators, Pixel Sessions',
                            'Job Search Email Assistant',
                        ]}
                        isPremium
                    />
                </div>
            </div>
        </section>
    );
}

type PlanCardProps = {
    title: string;
    price: string;
    isMonthly: boolean;
    description: string;
    features: string[];
    isPremium?: boolean;
};

function PlanCard({ title, price, isMonthly, description, features, isPremium = false }: PlanCardProps) {
    return (
        <div
            className={`relative border border-gray-300  rounded-2xl p-6 shadow-lg flex flex-col bg-white text-gray-800 transition-all duration-300 group hover:bg-[#4A29FF] hover:text-white`}
        >
            <div className="self-center bg-white text-[#4A29FF] border border-gray-400 px-3 py-1 mb-8 mt-2 rounded-full text-xs font-semibold transition group-hover:border-black  group-hover:bg-black group-hover:text-white">
                MOST POPULAR
            </div>
            <p className="text-3xl font-extrabold">{price}{isMonthly ? <span className='font-medium text-sm'>monthly</span> : ""}</p>
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="mb-6">{description}</p>
            <ul className="text-left space-y-3 mb-6">
                {features.map((feature, index) => {
                    const isComingSoon = feature.toLowerCase().includes('coming soon');
                    return (
                        <li key={index} className="flex items-start gap-3">
                            <span className="min-w-[24px] min-h-[24px] flex items-center justify-center bg-green-200 rounded-full text-green-600 group-hover:bg-white group-hover:text-green-700">
                                <FontAwesomeIcon icon={faCheck} className="w-3.5 h-3.5" />
                            </span>
                            <span
                                className={`${isComingSoon
                                        ? 'text-[#4A29FF] group-hover:text-white font-semibold'
                                        : ''
                                    }`}
                            >
                                {feature}
                            </span>
                        </li>
                    );
                })}
            </ul>
            <button
                className={`w-full px-4 py-3 mt-auto rounded-full font-semibold text-lg transition border border-gray-400 text-primary bg-white  group-hover:bg-black group-hover:border-black group-hover:text-white `}
            >
                Purchase Now
            </button>
        </div>
    );
}
