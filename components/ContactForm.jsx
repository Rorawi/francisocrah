"use client"
import React, { useState } from 'react';
import { PiPaperPlaneTilt, PiUser, PiEnvelope, PiChatCircle } from "react-icons/pi";
import Image from 'next/image';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            // Simulate form submission - replace with your actual form handling
            await new Promise(resolve => setTimeout(resolve, 1000));

            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <section className="grid lg:grid-cols-3 gap-8 pt-15 md:pt-5">
                <div className="lg:col-span-1">
                    <div className='h-full border border-gray-200 bg-white p-5 rounded-xl'>
                        <div className="mx-auto w-32 h-32 rounded-full overflow-hidden bg-muted mb-6">
                            <Image
                                src="/images/profile.jpeg"
                                alt="Profile"
                                className="w-full h-full object-cover"
                                width={128}
                                height={128}
                            />
                        </div>
                        <div className="space-y-2 mb-4 pb-4 border-b border-gray-100">
                            <h3 className="text-xl font-semibold">Francis Ocrah</h3>
                            <p className="text-sm">Creative Media Specialist • Graphic Designer • Content Creator</p>
                        </div>

                        <div className="md:space-x-3 lg:space-y-3 flex flex-col md:flex-row lg:flex-col md:justify-center lg:items-center mb-20">
                            <div className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                francis@gmail.com
                            </div>
                            <div className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                +223 (546) 123 747
                            </div>
                        </div>


                    </div>
                </div>
                <div className="lg:col-span-2 space-y-6">
                    <div className='h-full border border-gray-200 bg-white p-5 rounded-xl'>
                            <div className="">
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
                                    <p className="text-gray-600">Let's discuss your next project</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6 grid grid-col-1 text-left md:grid-cols-2 gap-3">
                                    {/* Name Field */}
                                    <div className="relative">
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-600 mb-2">
                                            <PiUser className="inline mr-2" />
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-md border border-gray-600 text-white placeholder-gray-400 focus:border-[#01184A] focus:ring-1 focus:ring-[#01184A] transition-colors"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    {/* Email Field */}
                                    <div className="relative">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
                                            <PiEnvelope className="inline mr-2" />
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-md border border-gray-600 text-white placeholder-gray-400 focus:border-[#01184A] focus:ring-1 focus:ring-[#01184A] transition-colors"
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    {/* Subject Field */}
                                    <div className="relative">
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-600 mb-2">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-md border border-gray-600 text-white placeholder-gray-400 focus:border-[#01184A] focus:ring-1 focus:ring-[#01184A] transition-colors"
                                            placeholder="What's this about?"
                                        />
                                    </div>

                                    {/* Message Field */}
                                    <div className="relative">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-600 mb-2">
                                            <PiChatCircle className="inline mr-2" />
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="5"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-md border border-gray-600 text-white placeholder-gray-400 focus:border-[#01184A] focus:ring-1 focus:ring-[#01184A] transition-colors resize-none"
                                            placeholder="Tell me about your project or inquiry..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-[#01184A] hover:bg-[#012861] text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <PiPaperPlaneTilt />
                                                Send Message
                                            </>
                                        )}
                                    </button>

                                    {/* Status Messages */}
                                    {submitStatus === 'success' && (
                                        <div className="text-center p-4 bg-green-500/20 border border-green-500/50 rounded-md">
                                            <p className="text-green-300">✅ Message sent successfully! I'll get back to you soon.</p>
                                        </div>
                                    )}

                                    {submitStatus === 'error' && (
                                        <div className="text-center p-4 bg-red-500/20 border border-red-500/50 rounded-md">
                                            <p className="text-red-300">❌ Something went wrong. Please try again.</p>
                                        </div>
                                    )}
                                </form>
                            </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default ContactForm;