'use client'

import { LandingPage } from '@/components/landing-page'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  
  const handleGetStarted = () => {
    // 실제 haru 앱으로 리다이렉트
    // 나중에 실제 URL로 변경하세요
    window.location.href = 'https://your-haru-app-url.com/register'
  }
  
  const handlePrivacyPolicy = () => {
    router.push('/privacy')
  }
  
  const handleTermsOfService = () => {
    router.push('/terms')
  }
  
  const handleContact = () => {
    router.push('/contact')
  }
  
  return (
    <LandingPage 
      onGetStarted={handleGetStarted}
      onPrivacyPolicy={handlePrivacyPolicy}
      onTermsOfService={handleTermsOfService}
      onContact={handleContact}
    />
  )
}