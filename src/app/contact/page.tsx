"use client";

import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedinIn, FaTwitter, FaExclamationTriangle } from "react-icons/fa";

export default function ContactPage() {
    return (
        <>
            <PageHeader
                title="Contact Us"
                subtitle="Get in Touch"
                backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop"
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 rounded-lg overflow-hidden shadow-xl">

                        {/* Left Panel: Get In Touch (Dark Blue) */}
                        <div className="bg-trust-blue-950 p-12 lg:p-16 text-white space-y-12">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h1 className="font-serif text-4xl md:text-5xl font-bold text-gold-400 mb-8">
                                    Get In Touch
                                </h1>
                            </motion.div>

                            <div className="space-y-8">
                                {/* Compliance Team */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <h3 className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-3">
                                        Compliance Team
                                    </h3>
                                    <div className="space-y-1 text-trust-blue-100">
                                        <p className="font-semibold text-white">Jadi Abboud</p>
                                        <p>jadi@valoraam.com</p>
                                        <p>(714) 743-9987</p>
                                    </div>
                                </motion.div>

                                {/* Office Hours */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                >
                                    <h3 className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-3">
                                        Office Hours
                                    </h3>
                                    <div className="space-y-1 text-trust-blue-100">
                                        <p>Monday - Friday: 8:00 AM - 5:00 PM PST</p>
                                        <p>24/7 Market Monitoring</p>
                                    </div>
                                </motion.div>

                                {/* NFA Resources */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                >
                                    <h3 className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-3">
                                        NFA Resources
                                    </h3>
                                    <div className="space-y-1 text-trust-blue-100">
                                        <p>www.nfa.futures.org</p>
                                        <p>(312) 781-1410 or (800) 621-3570</p>
                                        <p>information@nfa.futures.org</p>
                                    </div>
                                </motion.div>

                                {/* Regulatory Information */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.8 }}
                                >
                                    <h3 className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-3">
                                        Regulatory Information
                                    </h3>
                                    <div className="space-y-2 text-trust-blue-200 text-sm leading-relaxed">
                                        <p>
                                            Valora Asset Management is registered with the NFA as a Commodity Trading Advisor (CTA).
                                        </p>
                                        <p>
                                            All promotional materials comply with NFA Compliance Rules 2-29 and 2-36.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Right Panel: Contact Form (White) */}
                        <div className="bg-gray-50 p-12 lg:p-16">
                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-trust-blue-900">Full Name *</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white border border-gray-300 px-4 py-3 outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all rounded-sm text-trust-blue-950 placeholder:text-gray-400"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-trust-blue-900">Email Address *</label>
                                    <input
                                        type="email"
                                        className="w-full bg-white border border-gray-300 px-4 py-3 outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all rounded-sm text-trust-blue-950 placeholder:text-gray-400"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-trust-blue-900">Phone Number</label>
                                    <input
                                        type="tel"
                                        className="w-full bg-white border border-gray-300 px-4 py-3 outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all rounded-sm text-trust-blue-900 placeholder:text-gray-400"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-trust-blue-900">Area of Interest *</label>
                                    <select className="w-full bg-white border border-gray-300 px-4 py-3 outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all rounded-sm text-trust-blue-950">
                                        <option>Managed Accounts</option>
                                        <option>Consulting</option>
                                        <option>Partnership</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-trust-blue-900">Message *</label>
                                    <textarea
                                        rows={4}
                                        className="w-full bg-white border border-gray-300 px-4 py-3 outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all rounded-sm text-trust-blue-950 placeholder:text-gray-400 resize-none"
                                        placeholder="Tell us about your trading goals and how we can help..."
                                    ></textarea>
                                </div>

                                <Button type="submit" size="lg" variant="gold" className="w-full">
                                    Send Message
                                </Button>
                            </form>
                        </div>

                    </div>


                    {/* Important Compliance Information */}
                    <div className="w-[90%] mx-auto mt-16">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-trust-blue-950 mb-8">
                            Important Compliance Information
                        </h2>

                        <div className="hover:border-yellow-600 hover:border hover:scale-101 transition-all duration-300 bg-white p-8 md:p-12 rounded-md shadow-sm border-l-4 border-yellow-600">
                            <h3 className="font-bold text-xl text-trust-blue-950 mb-6">
                                Regulatory Information
                            </h3>

                            <div className="space-y-4 text-trust-blue-700 leading-relaxed">
                                <p className="text-gray-800 text-sm">
                                    Valora Asset Management is registered with the NFA as a Commodity Trading Advisor (CTA). All
                                    promotional materials comply with NFA Compliance Rules 2-29 and 2-36.
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 hover:border-yellow-600 hover:border hover:scale-101 transition-all duration-300 bg-white p-8 md:p-12 rounded-md shadow-sm border-l-4 border-yellow-600">
                            <h3 className="font-bold text-xl text-trust-blue-950 mb-6">
                                Record Retention
                            </h3>

                            <div className="space-y-4 text-trust-blue-700 leading-relaxed">
                                <p className="text-gray-800 text-sm">
                                    All promotional materials are reviewed and approved in writing by appropriate supervisory personnel before use. Copies of all materials are retained on file for 5 years (2 years readily accessible) as required by NFA regulations.
                                </p>

                                {/* <p className="text-gray-800 text-sm">
                                    Valora Asset Management will provide you a copy of our disclosure document at no cost. You should review our disclosure document and study it carefully to determine whether such trading is appropriate for you in light of your financial condition.
                                </p>

                                <p className="text-gray-800 text-sm">
                                    The CFTC has not passed upon the merits of participating in our trading programs nor on the adequacy or accuracy of our disclosure document.
                                </p> */}
                            </div>
                        </div>
                    </div>

                    {/* Critical Risk Warning */}
                    <div className="w-[90%] mx-auto mt-16 p-6 bg-yellow-50 border border-yellow-400 rounded-sm text-yellow-900">
                        <div className="flex items-center gap-2 mb-3">
                            <FaExclamationTriangle className="text-yellow-600 text-lg" />
                            <h3 className="font-bold text-md text-yellow-800">Critical Risk Warning</h3>
                        </div>
                        <p className="text-sm font-semibold uppercase leading-relaxed text-yellow-800">
                            THE RISK OF LOSS IN TRADING COMMODITY INTERESTS CAN BE SUBSTANTIAL. YOU SHOULD THEREFORE CAREFULLY CONSIDER WHETHER SUCH TRADING IS SUITABLE FOR YOU IN LIGHT OF YOUR FINANCIAL CONDITION.
                        </p>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            {/*  <section className="h-[400px] w-full bg-gray-200 relative grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.214454868263!2d8.66708767690186!3d50.11942851112444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0968962649ad%3A0xa177813a3754948a!2sOpernTurm!5e0!3m2!1sen!2sde!4v1707253456789!5m2!1sen!2sde"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                />
                <div className="absolute inset-0 bg-trust-blue-950/20 pointer-events-none mix-blend-multiply" />
            </section> */}
        </>
    );
}
