'use client'

import React from 'react'
import { Heart, FileText, Users, AlertTriangle, CheckCircle, XCircle, Check, X, User, Smartphone, Target, CreditCard, RefreshCw, Phone, Bot, Shield, Mail, Scale, RotateCcw, Square } from 'lucide-react'
import { motion } from 'framer-motion'

export function TermsOfService() {
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
              <FileText className="w-4 h-4" />
              <span className="text-sm">Terms of Service</span>
            </div>
            <h1 className="text-3xl lg:text-4xl text-gray-800 mb-4 font-bold">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple, fair terms for using haru. We believe in keeping things straightforward.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: November 2025
            </p>
          </div>

          {/* Quick Overview */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12">
            <h2 className="text-xl text-gray-800 mb-6 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              The Basics
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-gray-800 mb-2 flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-1" />
                  What you can do
                </h3>
                <ul className="text-sm text-gray-600 space-y-1 ml-6">
                  <li>• Write up to 3 diary entries per day</li>
                  <li>• Chat with AI about your thoughts</li>
                  <li>• Switch between AI chat and writing modes</li>
                  <li>• Cancel your subscription anytime</li>
                </ul>
              </div>
              <div>
                <h3 className="text-gray-800 mb-2 flex items-center gap-2">
                  <X className="w-4 h-4 text-red-600 mt-1" />
                  What you can't do
                </h3>
                <ul className="text-sm text-gray-600 space-y-1 ml-6">
                  <li>• Share accounts with others</li>
                  <li>• Use the service illegally</li>
                  <li>• Try to hack or abuse the system</li>
                  <li>• Resell or redistribute the service</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Detailed Terms */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-8">
            
            {/* Account & Service */}
            <section>
              <h2 className="text-2xl text-gray-800 mb-4">Using haru</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg text-gray-800 mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-pink-600" />
                    Your Account
                  </h3>
                  <p className="text-gray-600 mb-2">
                    You're responsible for keeping your account secure and for all activities under your account. 
                    Please use a strong password and don't share your login credentials.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg text-gray-800 mb-2 flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-pink-600" />
                    Service Availability
                  </h3>
                  <p className="text-gray-600 mb-2">
                    We aim for 99.9% uptime, but sometimes we need to perform maintenance or updates. 
                    We'll give you advance notice whenever possible.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg text-gray-800 mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4 text-pink-600" />
                    Intended Use
                  </h3>
                  <p className="text-gray-600 mb-2">
                    haru is designed for personal diary writing and self-reflection. 
                    While our AI can provide emotional support, it's not a replacement for professional mental health care.
                  </p>
                </div>
              </div>
            </section>

            {/* Content & Data */}
            <section>
              <h2 className="text-2xl text-gray-800 mb-4">Your Content & Data</h2>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 mb-4">
                <h3 className="text-lg text-gray-800 mb-3 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-pink-600" />
                  Your diary entries belong to you
                </h3>
                <p className="text-gray-600">
                  You own all the content you create in haru. We never claim ownership of your diary entries, 
                  thoughts, or personal reflections. You can delete your content anytime.
                </p>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h3 className="text-gray-800 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-600" />
                    Content Guidelines
                  </h3>
                  <p className="text-gray-600">
                    Please keep your diary entries legal and don't use haru to plan or coordinate illegal activities. 
                    While your entries are private, this helps us maintain a safe service for everyone.
                  </p>
                </div>
                <div>
                  <h3 className="text-gray-800 flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-blue-600" />
                    Backups & Sync
                  </h3>
                  <p className="text-gray-600">
                    We automatically back up your encrypted diary entries to provide sync across devices and prevent data loss. 
                    You can turn off sync in your settings if you prefer local-only storage.
                  </p>
                </div>
              </div>
            </section>

            {/* Payments & Subscriptions */}
            <section>
              <h2 className="text-2xl text-gray-800 mb-4">Payments & Subscriptions</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg text-gray-800 mb-2 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-pink-600" />
                    Subscription Plans
                  </h3>
                  <p className="text-gray-600 mb-2">
                    haru offers monthly and annual subscription plans. All plans include up to 3 daily entries, 
                    AI conversations, and mode switching. You can change or cancel your plan anytime.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg text-gray-800 mb-2 flex items-center gap-2">
                    <RotateCcw className="w-4 h-4 text-pink-600" />
                    Billing & Refunds
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Subscriptions automatically renew unless cancelled. We offer 7-day free trials for new users. 
                    Refunds are available within 14 days of purchase if you're not satisfied.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg text-gray-800 mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-pink-600" />
                    Cancellation
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Cancel anytime from your account settings. You'll keep access until your current billing period ends. 
                    Your data remains accessible for 90 days after cancellation.
                  </p>
                </div>
              </div>
            </section>

            {/* AI & Privacy */}
            <section>
              <h2 className="text-2xl text-gray-800 mb-4">AI Features & Privacy</h2>
              
              <div className="space-y-3">
                <div>
                  <h3 className="text-gray-800 flex items-center gap-2">
                    <Bot className="w-4 h-4 text-blue-600" />
                    AI Conversations
                  </h3>
                  <p className="text-gray-600">
                    Our AI is designed to provide emotional support and writing prompts. It's trained to be helpful, 
                    harmless, and honest, but may occasionally provide inaccurate information. Always use your best judgment.
                  </p>
                </div>
                <div>
                  <h3 className="text-gray-800 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-blue-600" />
                    Privacy Protection
                  </h3>
                  <p className="text-gray-600">
                    Your conversations with AI are end-to-end encrypted and never used to train other AI models. 
                    We process your entries only to provide the AI features you've requested.
                  </p>
                </div>
                <div>
                  <h3 className="text-gray-800 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-600" />
                    Not Medical Advice
                  </h3>
                  <p className="text-gray-600">
                    While our AI can provide emotional support, it's not a replacement for professional therapy, 
                    counseling, or medical advice. Please consult qualified professionals for serious mental health concerns.
                  </p>
                </div>
              </div>
            </section>

            {/* Acceptable Use */}
            <section>
              <h2 className="text-2xl text-gray-800 mb-4">Acceptable Use</h2>
              
              <div className="bg-red-50 rounded-lg p-6 mb-4">
                <h3 className="text-lg text-gray-800 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  Prohibited Activities
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Using haru for illegal activities or planning harmful actions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Attempting to hack, reverse engineer, or compromise the service</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Sharing your account or reselling access to the service</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>Using automated tools to spam or abuse the AI features</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Service Changes */}
            <section>
              <h2 className="text-2xl text-gray-800 mb-4">Service Changes & Termination</h2>
              
              <div className="space-y-3">
                <div>
                  <h3 className="text-gray-800 flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-blue-600" />
                    Updates & Changes
                  </h3>
                  <p className="text-gray-600">
                    We regularly improve haru with new features and updates. We'll notify you of significant changes 
                    that affect these terms or your experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-gray-800 flex items-center gap-2">
                    <Square className="w-4 h-4 text-red-600" />
                    Service Termination
                  </h3>
                  <p className="text-gray-600">
                    We reserve the right to suspend or terminate accounts that violate these terms. 
                    If we discontinue the service, we'll give you 60 days notice to access your data.
                  </p>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl text-gray-800 mb-4">Limitation of Liability</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  We provide haru "as is" and do our best to keep it running smoothly. However, we can't guarantee 
                  the service will always be available or error-free.
                </p>
                <p className="text-gray-600">
                  Our liability is limited to the amount you've paid for the service in the past 12 months. 
                  We're not liable for indirect damages or data loss, though we work hard to prevent these issues.
                </p>
              </div>
            </section>

            {/* Contact & Disputes */}
            <section>
              <h2 className="text-2xl text-gray-800 mb-4">Questions & Disputes</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-gray-800 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-600" />
                    Contact Us
                  </h3>
                  <p className="text-gray-600">
                    Questions about these terms? Email us at <a href="mailto:legal@haru-diary.com" className="text-pink-600 hover:text-pink-700">legal@haru-diary.com</a>
                  </p>
                </div>
                <div>
                  <h3 className="text-gray-800 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-blue-600" />
                    Governing Law
                  </h3>
                  <p className="text-gray-600">
                    These terms are governed by the laws of South Korea. 
                    We'll try to resolve any disputes amicably before pursuing legal action.
                  </p>
                </div>
              </div>
            </section>

            {/* Updates */}
            <section>
              <h2 className="text-2xl text-gray-800 mb-4">Terms Updates</h2>
              <p className="text-gray-600">
                We may update these terms occasionally to reflect service changes or legal requirements. 
                We'll notify you via email and app notification at least 30 days before major changes take effect. 
                Your continued use of haru means you accept the updated terms.
              </p>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  )
}