'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownLong, faMinus, faPlus, faSortDown } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import questionImg from "../assets/questionmark.jpeg"
const questions = [
    "What’s the purpose of a try-catch block?",
    "What is an API, and why is it useful?",
    "What’s the difference between SQL and NoSQL databases?",
    "What does HTTP stand for, and what’s its role?",
    "What is a loop in programming?",
];
const roles = ['Developer', 'Designer', 'Product Manager'];

export default function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [role, setRole] = useState('Developer');
    const [selected, setSelected] = useState('Developer');
    const [open, setOpen] = useState(false);

    const toggleQuestion = (index: number) => {
        setActiveIndex(prev => (prev === index ? null : index));
    };

    return (
        <section className=" py-12 px-4 md:px-16">
            <div className='text-center'>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4 ">Common Interview <br /> Questions</h2>
                <p className="text-gray-600 mb-6">
                    Including feedback from over 100 employers who actively recruit and hire VandaIs.
                </p>

            </div>
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* Left Column */}
                <div>

                    {/* Dropdown */}
                    <div className="mb-6 w-full relative ">
                        <label className="text-lg font-medium block mb-1 text-gray-800">Let me know</label>

                        <button
                            type="button"
                            onClick={() => setOpen(!open)}
                            className="w-full text-left bg-[#4A29FF] text-white px-4 py-3 rounded-md border border-primary shadow-md flex justify-between items-center"
                        >
                            <span className="capitalize">{selected}</span>
                            <FontAwesomeIcon icon={faSortDown} className={`w-5 h-5 transition-transform ${open ? 'rotate-180' : ''}`} />
                        </button>

                        {open && (
                            <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden">
                                {roles.map((role) => (
                                    <li
                                        key={role}
                                        onClick={() => {
                                            setSelected(role);
                                            setOpen(false);
                                        }}
                                        className={`px-4 py-2 text-gray-800 hover:bg-primary hover:text-white cursor-pointer ${selected === role ? 'bg-gray-100' : ''
                                            }`}
                                    >
                                        {role}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Accordion */}
                    <div className="space-y-4">
                        {questions.map((q, i) => (
                            <div
                                key={i}
                                className="border rounded-md border-gray-100  w-full  bg-white shadow-sm transition-all duration-200 py-2 outline-0"
                            >
                                <button
                                    className="w-full flex  items-center justify-between px-4 py-3  font-medium text-gray-800"
                                    onClick={() => toggleQuestion(i)}
                                >

                                    {activeIndex === i ? (
                                        <FontAwesomeIcon icon={faMinus} className="w-5 h-5  text-black" />

                                    ) : (
                                        <FontAwesomeIcon icon={faPlus} className="w-5 h-5  text-black" />
                                    )}
                                    <span className='px-4 justify-self-start text-left flex-1'>{q}</span>
                                    <span className="min-w-[24px] min-h-[24px] flex items-center justify-center bg-black rounded-full text-white ">
                                        <FontAwesomeIcon icon={faPlus} className="w-3.5 h-3.5" />
                                    </span>

                                </button>

                                {activeIndex === i && (
                                    <div className="px-4 pb-4 text-sm text-gray-600 block">
                                        This is a sample answer to "{q}". You can customize this based on your own backend or use OpenAI to generate content dynamically.
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column */}
                <div className="text-center">
                    <h3 className="text-5xl font-bold mb-2 max-sm:text-3xl">Any Question?</h3>
                    <p className="text-gray-700 mb-6 text-xl font-semibold max-sm:text-sm">Explore Questions by Topic</p>
                    <div className="flex justify-center">
                        <div className="">
                            <Image
                                src={questionImg}
                                alt='img'
                                height={200}
                                width={200}
                                className='object-cover'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
