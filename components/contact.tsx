'use client'

import React, { useState } from 'react'
import { Heart, Mail, MessageCircle, Clock, Send, CheckCircle, User, HelpCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you'd send this to your backend
    console.log('Contact form submitted:', formData)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button 
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.history.back()
              }
            }}
            className="py-2 text-gray-600 hover:text-gray-800 transition-colors"
            style={{marginLeft: '0'}}
          >
            ← Back
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 px-4 py-2 rounded-full mb-6">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">Contact Us</span>
            </div>
            <h1 className="text-3xl lg:text-4xl text-gray-800 mb-4 font-bold">
              We'd Love to Hear From You
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Questions, feedback, or just want to say hi? We're here to help and always excited to connect with our haru community.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12">
            {!isSubmitted ? (
              <>
                <h2 className="text-2xl text-gray-800 mb-6 text-center">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                      What can we help you with?
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a category</option>
                      <option value="technical">Technical Support</option>
                      <option value="billing">Billing & Subscriptions</option>
                      <option value="feature">Feature Request</option>
                      <option value="bug">Bug Report</option>
                      <option value="privacy">Privacy & Security</option>
                      <option value="feedback">General Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 px-6 rounded-lg hover:from-pink-600 hover:to-rose-600 transition-all duration-200 flex items-center justify-center gap-2 font-medium"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl text-gray-800 mb-4">Message Sent!</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Thank you for reaching out. We've received your message and will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-pink-600 hover:text-pink-700 font-medium"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg text-gray-800 mb-2">Email Support</h3>
              <p className="text-sm text-gray-600 mb-3">Get help with your account, billing, or technical issues</p>
              <a href="mailto:support@haru-diary.com" className="text-pink-600 hover:text-pink-700 font-medium">
                support@haru-diary.com
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-rose-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-lg text-gray-800 mb-2">General Inquiries</h3>
              <p className="text-sm text-gray-600 mb-3">Questions about features, partnerships, or media requests</p>
              <a href="mailto:hello@haru-diary.com" className="text-pink-600 hover:text-pink-700 font-medium">
                hello@haru-diary.com
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-rose-100 to-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-lg text-gray-800 mb-2">Response Time</h3>
              <p className="text-sm text-gray-600 mb-3">We typically respond within</p>
              <div className="text-pink-600 font-medium">24 hours</div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mt-12">
            <h2 className="text-2xl text-gray-800 mb-6 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h3 className="text-lg text-gray-800 mb-2">How do I export my diary entries?</h3>
                <p className="text-gray-600 text-sm">
                  Go to Settings → Data & Privacy → Export Data. You can download all your entries in JSON or text format.
                </p>
              </div>
              
              <div className="border-b border-gray-100 pb-4">
                <h3 className="text-lg text-gray-800 mb-2">Can I cancel my subscription anytime?</h3>
                <p className="text-gray-600 text-sm">
                  Yes! You can cancel anytime from Settings → Subscription. You'll keep access until your current billing period ends.
                </p>
              </div>
              
              <div className="border-b border-gray-100 pb-4">
                <h3 className="text-lg text-gray-800 mb-2">Is my diary content really private?</h3>
                <p className="text-gray-600 text-sm">
                  Absolutely. Your entries are end-to-end encrypted before leaving your device. Even we can't read your diary content.
                </p>
              </div>
              
              <div className="border-b border-gray-100 pb-4">
                <h3 className="text-lg text-gray-800 mb-2">How does the AI understand my emotions?</h3>
                <p className="text-gray-600 text-sm">
                  Our AI uses advanced language models trained on emotional understanding, but it processes your text locally on your device for privacy.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg text-gray-800 mb-2">Do you offer student discounts?</h3>
                <p className="text-gray-600 text-sm">
                  Yes! Contact us with your student email for a 50% discount on annual subscriptions.
                </p>
              </div>
            </div>
          </div>

          {/* Community Links */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 text-center mt-12">
            <h2 className="text-2xl text-gray-800 mb-4">Join Our Community</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Connect with other haru users, share tips, and stay updated on new features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://twitter.com/haru_diary"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
              >
                Follow us on Twitter
              </a>
              <a
                href="https://discord.gg/haru"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
              >
                Join our Discord
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  )
}