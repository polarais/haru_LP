'use client'

import React, { useState } from 'react'
import { LandingPage, PrivacyPolicy, TermsOfService, Contact } from '../components'

type Page = 'landing' | 'privacy' | 'terms' | 'contact'

export function App() {
  const [currentPage, setCurrentPage] = useState<Page>('landing')

  const handleGetStarted = () => {
    // 실제 앱에서는 여기서 회원가입/로그인 페이지로 이동
    console.log('Get started clicked!')
  }

  const handlePrivacyPolicy = () => {
    setCurrentPage('privacy')
  }

  const handleTermsOfService = () => {
    setCurrentPage('terms')
  }

  const handleContact = () => {
    setCurrentPage('contact')
  }

  const handleBackToLanding = () => {
    setCurrentPage('landing')
  }

  // Override window.history.back for the demo
  if (typeof window !== 'undefined') {
    window.history.back = handleBackToLanding
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'privacy':
        return <PrivacyPolicy />
      case 'terms':
        return <TermsOfService />
      case 'contact':
        return <Contact />
      default:
        return (
          <LandingPage
            onGetStarted={handleGetStarted}
            onPrivacyPolicy={handlePrivacyPolicy}
            onTermsOfService={handleTermsOfService}
            onContact={handleContact}
          />
        )
    }
  }

  return renderCurrentPage()
}