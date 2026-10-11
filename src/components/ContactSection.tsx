import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';
import GridBackground from './GridBackground';

export default function ContactSection() {
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        formData.append("access_key", "8835ab1d-43f6-4fad-be6c-a2af2e62b770");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            })

            const data = await response.json()

            if (data.success) {
                console.log("Form submission response:", data);
                alert("Form submitted successfully!");
                form.reset()
            } else {
                console.error("Form submission error:", data);
                alert("There was an error submitting the form. Please try again.");
            }
        } catch (error) {
            console.error("Form submission error:", error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section id='contact' className="relative w-full font-sans">
            <GridBackground />
            <div className="w-full container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 px-6 md:px-12 lg:px-16 py-16 lg:py-24">

                    {/* LEFT COLUMN: Personal Info */}
                    <div className="flex flex-col items-start justify-start z-10 max-w-xl">
                        <h2 className="font-space-grotesk text-2xl md:text-4xl lg:text-[2.75rem] font-bold text-black leading-[1.1] mb-6">
                            Let&apos;s build something together
                        </h2>

                        <p className="text-gray-800 text-base md:text-lg mb-6 leading-relaxed font-medium">
                            As a Full Stack & AI Developer studying Data Science at IIT Madras, I look forward to turning complex problems into high-performance web applications or custom AI integrations. Have a vision? Let&apos;s plan it out.
                        </p>

                        <p className="text-gray-800 text-base md:text-lg mb-8 leading-relaxed font-medium">
                            After you send an inquiry, I&apos;ll reply in 2-3 working days with a project quote or next steps. From there, we can do an intro call to discuss your goals and check our compatibility.
                        </p>

                        <div className="mb-8">
                            <span className="text-stone-500 font-bold block mb-1 text-sm uppercase tracking-wide">
                                Email me at:
                            </span>
                            <Link
                                href="mailto:bombaldavid3@gmail.com"
                                className="text-lg md:text-2xl font-bold text-black hover:underline underline-offset-4 decoration-2"
                            >
                                24f1000376@ds.study.iitm.ac.in
                            </Link>
                        </div>
                        <div className="mb-8">
                            <span className="text-stone-500 font-bold block mb-3 text-sm uppercase tracking-wide">
                                Follow me at:
                            </span>
                            <div className="flex items-center justify-start gap-5">
                                {/* LinkedIn - Vibrant Blue */}
                                <Button
                                    asChild
                                    className="rounded-full size-12 p-0 bg-[#4e90fc] hover:bg-[#3572f5] transition-all [&_svg]:size-10"
                                >
                                    <Link
                                        href="https://linkedin.com/in/shivansh-tiwari03"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" height="18" width="18" ><path fill="#000" d="M231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z" /></svg>
                                    </Link>
                                </Button>

                                {/* X (Twitter) - Neo-Brutalist Lavender */}
                                <Button
                                    asChild
                                    className="rounded-full size-12 p-0 bg-[#C4A1FF] hover:bg-[#a170e8] transition-all [&_svg]:size-5"
                                >
                                    <Link
                                        href="https://x.com/div_shiansh"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="18" width="18">
                                            <path d="M12.6 0.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867 -5.07 -4.425 5.07H0.316l5.733 -6.57L0 0.75h5.063l3.495 4.633L12.601 0.75Zm-0.86 13.028h1.36L4.323 2.145H2.865z" fill="#000000" strokeWidth="1"></path>
                                        </svg>
                                    </Link>
                                </Button>

                                {/* GitHub - Energetic Lime */}
                                <Button
                                    asChild
                                    className="rounded-full size-12 p-0 bg-[#e4fc74] hover:bg-[#cce35a] transition-all [&_svg]:size-9"
                                >
                                    <Link
                                        href="https://github.com/div-shivansh"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" height="18" width="18">
                                            <path fill="#000000" d="M280.5 426.5C214.5 418.5 168 371 168 309.5C168 284.5 177 257.5 192 239.5C185.5 223 186.5 188 194 173.5C214 171 241 181.5 257 196C276 190 296 187 320.5 187C345 187 365 190 383 195.5C398.5 181.5 426 171 446 173.5C453 187 454 222 447.5 239C463.5 258 472 283.5 472 309.5C472 371 425.5 417.5 358.5 426C375.5 437 387 461 387 488.5L387 540.5C387 555.5 399.5 564 414.5 558C505 523.5 576 433 576 321C576 179.5 461 64 319.5 64C178 64 64 179.5 64 321C64 432 134.5 524 229.5 558.5C243 563.5 256 554.5 256 541L256 501C249 504 240 506 232 506C199 506 179.5 488 165.5 454.5C160 441 154 433 142.5 431.5C136.5 431 134.5 428.5 134.5 425.5C134.5 419.5 144.5 415 154.5 415C169 415 181.5 424 194.5 442.5C204.5 457 215 463.5 227.5 463.5C240 463.5 248 459 259.5 447.5C268 439 274.5 431.5 280.5 426.5z" />
                                        </svg>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Interactive Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-2xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-bold text-black">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Your name"
                                    required
                                    className="w-full bg-white border-2 border-black px-4 py-3 rounded-base focus:shadow-none focus:translate-0.5 transition-all text-black font-medium shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-bold text-black">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Your email"
                                    required
                                    className="w-full bg-white border-2 border-black px-4 py-3 rounded-base focus:shadow-none focus:translate-0.5 transition-all text-black font-medium shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="project-type" className="text-sm font-bold text-black">Project Type</label>
                                <div className="relative">
                                    <select
                                        id="project-type"
                                        name="project-type"
                                        required
                                        defaultValue="project-type"
                                        className="w-full bg-[#1e1e1e] border-2 border-black text-white px-4 py-3 rounded-base focus:shadow-none focus:translate-0.5 transition-all font-medium appearance-none shadow-[4px_4px_0px_rgba(0,0,0,1)] pr-10 cursor-pointer"
                                    >
                                        <option value="project-type" disabled >Project type</option>
                                        <option value="custom-fullstack">Custom Full Stack App</option>
                                        <option value="mobile-app">Mobile App</option>
                                        <option value="ai-integration">Generative AI / SaaS Integration</option>
                                        <option value="consultation">Technical Consultation</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-white">
                                        ▼
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="budget" className="text-sm font-bold text-black">Budget</label>
                                <div className="relative">
                                    <select
                                        id="budget"
                                        name="budget"
                                        required
                                        defaultValue="budget"
                                        className="w-full bg-[#1e1e1e] border-2 border-black text-white px-4 py-3 rounded-base focus:shadow-none focus:translate-0.5 transition-all font-medium appearance-none shadow-[4px_4px_0px_rgba(0,0,0,1)] pr-10 cursor-pointer"
                                    >
                                        <option value="budget" disabled>Budget</option>
                                        <option value="flexible">Flexible / Hourly</option>
                                        <option value="under-1k">Under $1k</option>
                                        <option value="1k-3k">$1k - $3k</option>
                                        <option value="3k-5k">$3k - $5k</option>
                                        <option value="5k-plus">$5k+</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-white">
                                        ▼
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="website" className="text-sm font-bold text-black">Website, if exists</label>
                            <input
                                id="website"
                                name="website"
                                type="url"
                                placeholder="Your website (optional)"
                                className="w-full bg-white border-2 border-black px-4 py-3 rounded-base focus:shadow-none focus:translate-0.5 transition-all text-black font-medium shadow-[4px_4px_0px_rgba(0,0,0,1)]"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm font-bold text-black">Project details, context or how can I help you</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="How can I help you? Give me a brief overlay about your idea."
                                rows={4}
                                required
                                className="w-full bg-white border-2 border-black p-4 rounded-base focus:shadow-none focus:translate-0.5 transition-all text-black font-medium shadow-[4px_4px_0px_rgba(0,0,0,1)] resize-y"
                            ></textarea>
                        </div>

                        <div className="flex justify-end mt-4">
                            <Button
                                type="submit"
                                variant="default"
                                disabled={isSubmitting}
                                className="bg-[#e4fc74] hover:bg-[#dbdd45] px-8 py-4 font-bold text-lg h-auto"
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}