'use client'

import React from 'react'
import { Heart, Shield, Lock, Eye, Database, Globe, FileText, User, BarChart3, Download, Trash2, Edit, Pause } from 'lucide-react'
import { motion } from 'framer-motion'

export function PrivacyPolicy() {
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
              <Shield className="w-4 h-4" />
              <span className="text-sm">Privacy Policy</span>
            </div>
            <h1 className="text-3xl lg:text-4xl text-gray-800 mb-4 font-bold">
              Your Privacy Matters
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe your diary entries are sacred. Here's how we protect them.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: November 2025
            </p>
          </div>

          {/* Quick Summary */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12">
            <h2 className="text-xl text-gray-800 mb-6 flex items-center gap-2">
              <Eye className="w-5 h-5 text-pink-600" />
              Quick Summary
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Lock className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-gray-800 mb-2">End-to-End Encrypted</h3>
                <p className="text-sm text-gray-600">Your entries are encrypted before leaving your device</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-gray-800 mb-2">No Data Selling</h3>
                <p className="text-sm text-gray-600">We make money from subscriptions, not your data</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-gray-800 mb-2">Minimal Collection</h3>
                <p className="text-sm text-gray-600">We only collect what's necessary to run the service</p>
              </div>
            </div>
          </div>

          {/* Detailed Policy */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-8">
            
            {/* What We Collect */}
            <section>
              <h2 className="text-2xl text-gray-800 mb-4">What Information We Collect</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg text-gray-800 mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-pink-600" />
                    Your Diary Content
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Your diary entries, AI conversations, and personal reflections are stored with end-to-end encryption. 
                    We cannot read your content - only you can access it with your account.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg text-gray-800 mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-pink-600" />
                    Account Information
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Email address, display name (optional), and account preferences. We need this to provide you access to your diary.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg text-gray-800 mb-2 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-pink-600" />
                    Usage Analytics
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Anonymous usage data like "how many entries were written today" to improve the app. 
                    This data cannot be linked back to you or your content.
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl text-gray-800 mb-4">How We Use Your Information</h2>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <p className="text-gray-600">Provide AI conversation features and writing assistance</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <p className="text-gray-600">Sync your diary across your devices securely</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <p className="text-gray-600">Send you important account and service updates</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <p className="text-gray-600">Improve the app with anonymous usage insights</p>
                </div>
              </div>
            </section>

            {/* What We DON'T Do */}
            <section>
              <h2 className="text-2xl text-gray-800 mb-4">What We Don't Do</h2>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">✗</span>
                  <p className="text-gray-600">Sell, rent, or share your personal data with third parties</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">✗</span>
                  <p className="text-gray-600">Read your diary entries (they're encrypted)</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">✗</span>
                  <p className="text-gray-600">Show you ads based on your diary content</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">✗</span>
                  <p className="text-gray-600">Track you across other websites or apps</p>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl text-gray-800 mb-4">How We Protect Your Data</h2>
              
              <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-6">
                <h3 className="text-lg text-gray-800 mb-3 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-green-600" />
                  Encryption
                </h3>
                <p className="text-gray-600 mb-4">
                  Your diary entries are encrypted on your device before being sent to our servers. 
                  We use AES-256 encryption - the same standard used by banks and governments.
                </p>
                
                <h3 className="text-lg text-gray-800 mb-3">🏢 Infrastructure</h3>
                <p className="text-gray-600 mb-4">
                  We use enterprise-grade cloud infrastructure with regular security audits, 
                  automatic backups, and 99.9% uptime guarantees.
                </p>
                
                <h3 className="text-lg text-gray-800 mb-3">👥 Access Controls</h3>
                <p className="text-gray-600">
                  Only essential team members have access to systems, and no one can access your encrypted diary content.
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl text-gray-800 mb-4">Your Rights</h2>
              
              <div className="space-y-3">
                <div>
                  <h3 className="text-gray-800 flex items-center gap-2">
                    <Download className="w-4 h-4 text-blue-600" />
                    Access Your Data
                  </h3>
                  <p className="text-gray-600">Export all your diary entries anytime from your account settings.</p>
                </div>
                <div>
                  <h3 className="text-gray-800 flex items-center gap-2">
                    <Trash2 className="w-4 h-4 text-red-600" />
                    Delete Your Data
                  </h3>
                  <p className="text-gray-600">Delete your account and all associated data permanently at any time.</p>
                </div>
                <div>
                  <h3 className="text-gray-800 flex items-center gap-2">
                    <Edit className="w-4 h-4 text-purple-600" />
                    Correct Your Data
                  </h3>
                  <p className="text-gray-600">Update your account information and preferences anytime.</p>
                </div>
                <div>
                  <h3 className="text-gray-800 flex items-center gap-2">
                    <Pause className="w-4 h-4 text-orange-600" />
                    Pause Processing
                  </h3>
                  <p className="text-gray-600">Disable AI features if you prefer manual diary writing only.</p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl text-gray-800 mb-4">Questions?</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  We're happy to answer any questions about your privacy and data protection.
                </p>
                <p className="text-gray-600">
                  Email us at: <a href="mailto:privacy@haru-diary.com" className="text-pink-600 hover:text-pink-700">privacy@haru-diary.com</a>
                </p>
                <p className="text-gray-600 mt-2">
                  We typically respond within 24 hours.
                </p>
              </div>
            </section>

            {/* Updates */}
            <section>
              <h2 className="text-2xl text-gray-800 mb-4">Policy Updates</h2>
              <p className="text-gray-600">
                We may update this privacy policy occasionally. When we do, we'll notify you via email 
                and update the "Last updated" date at the top. Your continued use of haru after updates 
                means you accept the new terms.
              </p>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  )
}