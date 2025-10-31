'use client'

import { LandingPage } from '@/components/landing-page'

export default function Home() {
  const handleGetStarted = () => {
    // 실제 haru 앱으로 리다이렉트
    // 나중에 실제 URL로 변경하세요
    window.location.href = 'https://your-haru-app-url.com/register'
  }
  
  return <LandingPage onGetStarted={handleGetStarted} />
}