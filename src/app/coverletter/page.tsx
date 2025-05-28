import Image from "next/image";
import questionImg from "../assets/coverletter.jpg"

export default function CoverLetterSection() {
    return (
        <>
        <section className="w-full  py-16 px-6 bg-gradient-to-br from-pink-100 via-white to-blue-100">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Text Section */}
                <div className="max-w-lg text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight    mb-4 leading-tight text-black">
                        AI Cover Letter<br />
                        Done in Seconds
                    </h2>
                    <p className="text-gray-600 mb-20">
                        Our AI Job search tool automatically applies to all the jobs on platforms like LinkedIn, Indeed and Ziprecruiter using Job GPT.
                    </p>
                    <button className="px-9 py-3  bg-[#4A29FF] text-white font-semibold rounded-full shadow hover:bg-indigo-700 transition duration-200">
                        Create Cover Letter
                    </button>
                </div>

                {/* Image Section */}
                <div className="w-full max-w-xl">
                    <Image
                        alt="Cover Letter on Laptop"
                        src={questionImg}
                        height={300}
                        width={300}
                        className='w-full object-contain'
                    />
                </div>
            </div>
        </section>
        <section className="py-16 px-4 w-full bg-white">
      <div className="max-w-8xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-extrabold mb-2">AI Cover Letter Generator</h2>
        <p className="text-gray-600 text-sm">
          Free cover letter creator tool to create cover letter for your job search powered by GPT-3.
        </p>
      </div>

      <div className="max-w-7xl mx-auto bg-gray-50 p-8 rounded-xl shadow-md border border-gray-200">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Side Inputs */}
          <div>
            <label className="block font-semibold  mb-3">Select a Tone*</label>
            <input type="text" placeholder="Select One" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none" />
          </div>

          <div>
            <label className="block font-semibold  mb-3">Name*</label>
            <input type="text" placeholder="Ex. John Doe" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none" />
          </div>

          <div>
            <label className="block font-semibold  mb-3">Job Title*</label>
            <input type="text" placeholder="Select One" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none" />
          </div>

          <div>
            <label className="block font-semibold  mb-3">Applying for Company*</label>
            <input type="text" placeholder="Select One" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none" />
          </div>

          <div>
            <label className="block font-semibold  mb-3">Recipient*</label>
            <input type="text" placeholder="Select One" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none" />
          </div>

          <div>
            <label className="block font-semibold  mb-3">Role Type (Optional)</label>
            <input type="text" placeholder="Select One" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none" />
          </div>

          <div>
            <label className="block font-semibold  mb-3">Position (Optional)</label>
            <input type="text" placeholder="Select One" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none" />
          </div>

          <div>
            <label className="block font-semibold  mb-3">Location (Optional)</label>
            <input type="text" placeholder="Select One" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none" />
          </div>

          {/* Full Width Input */}
          <div className="md:col-span-2">
            <label className="block font-semibold  mb-3">Skills (Optional)</label>
            <input type="text" placeholder="Select One" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none" />
          </div>
          <div className="md:col-span-2 flex justify-center mt-6 ">
             <button className="bg-[#4A29FF] py-2.5 px-8  text-white font-medium rounded-3xl">submit cover letter</button>
          </div>
        </form>
      </div>
    </section>
        </>
    );
}
