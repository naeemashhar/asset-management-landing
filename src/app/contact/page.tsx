"use client";

import PageHeader from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedinIn, FaTwitter } from "react-icons/fa";

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
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="w-full lg:w-1/3 space-y-12"
                        >
                            <div>
                                <span className="block text-gold-500 font-medium tracking-widest text-sm uppercase mb-3">
                                    Visit Us
                                </span>
                                <h2 className="font-serif text-3xl font-bold text-trust-blue-950 mb-6">
                                    Global Headquarters
                                </h2>
                                <div className="flex items-start gap-4 text-trust-blue-600 mb-6">
                                    <FaMapMarkerAlt className="mt-1 text-gold-400 text-xl" />
                                    <p className="div leading-relaxed">
                                        OpernTurm, Bockenheimer Landstraße 2-4<br />
                                        60306 Frankfurt am Main<br />
                                        Germany
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <a href="tel:+496912345678" className="flex items-center gap-4 text-trust-blue-600 hover:text-gold-500 transition-colors">
                                        <FaPhone className="text-gold-400" />
                                        <span>+49 (0) 69 1234 5678</span>
                                    </a>
                                    <a href="mailto:info@apexquants.com" className="flex items-center gap-4 text-trust-blue-600 hover:text-gold-500 transition-colors">
                                        <FaEnvelope className="text-gold-400" />
                                        <span>info@apexquants.com</span>
                                    </a>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-serif text-2xl font-bold text-trust-blue-950 mb-6">
                                    Connect
                                </h3>
                                <div className="flex gap-4">
                                    <a href="#" className="w-10 h-10 rounded-full bg-trust-blue-50 text-trust-blue-900 flex items-center justify-center hover:bg-trust-blue-900 hover:text-white transition-all duration-300">
                                        <FaLinkedinIn />
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full bg-trust-blue-50 text-trust-blue-900 flex items-center justify-center hover:bg-trust-blue-900 hover:text-white transition-all duration-300">
                                        <FaTwitter />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="w-full lg:w-2/3 bg-gray-50 p-10 md:p-14 rounded-sm border border-gray-100 shadow-sm"
                        >
                            <h3 className="font-serif text-2xl font-bold text-trust-blue-950 mb-8">
                                Send us a message
                            </h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-trust-blue-800">First Name</label>
                                        <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 outline-none focus:border-gold-400 transition-colors rounded-sm text-trust-blue-900" placeholder="Jane" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-trust-blue-800">Last Name</label>
                                        <input type="text" className="w-full bg-white border border-gray-200 px-4 py-3 outline-none focus:border-gold-400 transition-colors rounded-sm text-trust-blue-900" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-trust-blue-800">Email Address</label>
                                        <input type="email" className="w-full bg-white border border-gray-200 px-4 py-3 outline-none focus:border-gold-400 transition-colors rounded-sm text-trust-blue-900" placeholder="jane@company.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold uppercase tracking-wider text-trust-blue-800">Subject</label>
                                        <select className="w-full bg-white border border-gray-200 px-4 py-3 outline-none focus:border-gold-400 transition-colors rounded-sm text-trust-blue-900">
                                            <option>General Inquiry</option>
                                            <option>Wealth Management</option>
                                            <option>Consulting Services</option>
                                            <option>Partnership</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-semibold uppercase tracking-wider text-trust-blue-800">Message</label>
                                    <textarea rows={5} className="w-full bg-white border border-gray-200 px-4 py-3 outline-none focus:border-gold-400 transition-colors rounded-sm text-trust-blue-900 resize-none" placeholder="How can we assist you?"></textarea>
                                </div>

                                <Button type="submit" size="lg" className="w-full md:w-auto">
                                    Send Message
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="h-[400px] w-full bg-gray-200 relative grayscale hover:grayscale-0 transition-all duration-700">
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
            </section>
        </>
    );
}
