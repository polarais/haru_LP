'use client'

import React, { useState, useEffect } from 'react'
import { Heart } from 'lucide-react'
import { motion } from 'framer-motion'

type Language = 'en' | 'ko' | 'ja' | 'cn'

const translations = {
  en: {
    back: 'Back',
    whyHaruTitle: 'Why "haru"?',
    whyHaruDescription1: '"haru" means "a day" in Korean.',
    whyHaruDescription2: 'We named this app haru because every day — no matter how quiet or messy — deserves to be remembered, reflected on, and honored.',
    whyHaruDescription3: 'Some days you need to write.\nSome days you just need someone to listen.',
    whyHaruDescription4: 'haru is here for both.\nTo hold space for your emotions.\nTo help you feel seen, heard, and understood — one day at a time.',
    getStarted: 'Start Your Journey'
  },
  ko: {
    back: '뒤로',
    whyHaruTitle: '왜 "하루"일까요?',
    whyHaruDescription1: '"하루"는 한국어로 "a day"를 의미합니다.',
    whyHaruDescription2: '우리는 이 앱을 haru라고 이름 지었습니다. 조용하든 어지럽든, 모든 하루는 기억되고, 성찰되고, 소중히 여겨질 자격이 있으니까요.',
    whyHaruDescription3: '어떤 날은 글을 써야 하고,\n어떤 날은 그저 누군가가 들어주길 원하죠.',
    whyHaruDescription4: 'haru는 그 둘 모두를 위해 있습니다.\n당신의 감정을 담아두고,\n하루하루 진정으로 보이고, 들리고, 이해받는 느낌을 드리기 위해.',
    getStarted: '여정 시작하기'
  },
  ja: {
    back: '戻る',
    whyHaruTitle: 'なぜ「haru」？',
    whyHaruDescription1: '「haru」は韓国語で「a day（一日）」を意味します。',
    whyHaruDescription2: '私たちはこのアプリをharuと名付けました。どんなに静かでも、どんなに混沌としていても、すべての一日は記憶され、振り返られ、大切にされる価値があるからです。',
    whyHaruDescription3: 'ある日は書く必要があり、\nある日はただ誰かに聞いてもらいたい。',
    whyHaruDescription4: 'haruは両方のためにここにいます。\nあなたの感情を受け止め、\n一日一日、本当に見えて、聞こえて、理解されていると感じさせるために。',
    getStarted: '旅を始める'
  },
  cn: {
    back: '返回',
    whyHaruTitle: '为什么叫"haru"？',
    whyHaruDescription1: '"haru"在韩语中意为"一天"。',
    whyHaruDescription2: '我们将这个应用命名为haru，因为每一天——无论多么平静或混乱——都值得被记住、被反思、被珍惜。',
    whyHaruDescription3: '有些日子你需要写作。\n有些日子你只需要有人倾听。',
    whyHaruDescription4: 'haru为这两者而存在。\n为您的情感留出空间。\n帮助您感受到被看见、被听见、被理解——一天一天地。',
    getStarted: '开始您的旅程'
  }
}

export function WhyHaru() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en')
  
  // Load saved language preference on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('haru-language') as Language
    if (savedLanguage && ['en', 'ko', 'ja', 'cn'].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage)
    }
  }, [])
  
  const t = translations[currentLanguage]
  
  // Function to highlight 'haru' in text
  const highlightHaru = (text: string) => {
    const parts = text.split(/(haru)/gi)
    return parts.map((part, index) => {
      if (part.toLowerCase() === 'haru') {
        return (
          <span key={index} className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
            {part}
          </span>
        )
      }
      return part
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
            ← {t.back}
          </button>
        </div>
      </header>
      
      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl lg:text-5xl text-gray-800 mb-12">
            {t.whyHaruTitle}
          </h1>
          
          <div className="space-y-8 max-w-3xl mx-auto">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-2xl text-gray-700 font-light"
            >
              {t.whyHaruDescription1}
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              {highlightHaru(t.whyHaruDescription2)}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="my-12 py-8 border-t border-b border-pink-200"
            >
              <p className="text-xl text-gray-600 whitespace-pre-line">
                {t.whyHaruDescription3}
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/50 backdrop-blur-sm rounded-3xl p-10 shadow-sm"
            >
              <p className="text-xl text-gray-700 whitespace-pre-line leading-relaxed">
                {highlightHaru(t.whyHaruDescription4)}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-8"
            >
              <button 
                onClick={() => window.location.href = 'https://apps.apple.com/app/haru-mood-tracker-diary/id6444790942'}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-xl hover:from-pink-500 hover:to-rose-500 transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
              >
                {t.getStarted}
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>
      
      {/* Footer */}
      <footer className="mt-auto border-t border-pink-100 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="text-center text-sm text-gray-500">
            © 2025 <a href="https://polaris-lab.net/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors">Polaris</a>. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}