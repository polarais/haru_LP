'use client'

import React, { useState, useEffect } from 'react'
import { Heart, Calendar, Clock, Sparkles, ChevronRight, ArrowRight, Globe, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Language = 'en' | 'ko' | 'ja' | 'cn'

interface LandingPageProps {
  onGetStarted: () => void
}

// Translation object
const translations = {
  en: {
    // Header
    getStarted: 'Get Started',
    
    // Hero Section
    tagline: 'AI-Powered Personal Diary',
    heroTitle: "Don't know what to write?",
    heroTitleHighlight: 'Just chat with haru.',
    heroSubline: 'haru listens, writes, and understands.',
    heroDescription: 'haru isn\'t just for writing — it\'s for being heard. Speak freely or write silently — haru gently adapts to you. With thoughtful AI chat or classic diary mode, haru helps you process what matters and feel truly seen.',
    startJourney: 'Start Your Diary',
    learnMore: 'Learn More',
    
    // Mode Switching Section
    signatureFeature: 'Signature Feature',
    modeSwitchTitle: 'Switch between chat & writing.',
    modeSwitchHighlight: 'Instantly.',
    modeSwitchDescription: 'Start your journaling as a traditional diary... or begin chatting with AI. You can switch between the two modes anytime, even mid-entry. No other app does this.',
    aiChatMode: 'AI Chat Mode',
    freeWritingMode: 'Free Writing Mode',
    aiSample: 'AI: "How was your day?"',
    userSample: 'You: "Pretty stressful, actually..."',
    yourThoughts: 'Your thoughts',
    thoughtSample: '"Today felt overwhelming. The meeting went better than expected though..."',
    switchAnytime: '💫 Switch modes anytime with one click 💫',
    
    // Features Section
    featuresTitle: 'Three ways to express your inner world',
    featuresDescription: 'Choose your journaling style: AI-guided conversations, traditional writing, or write first then reflect with AI - each helping you explore emotions and discover new insights about yourself.',
    
    // AI Reflection Feature - NEW
    aiReflectionTitle: 'Write First, Reflect with AI',
    aiReflectionDescription: 'Write your journal entry in traditional style, then let our AI companion provide thoughtful reflections and insights about your experience. Perfect for those who prefer to express first, then explore deeper meanings together.',
    reflectionSample: 'AI: "I notice you mentioned feeling anxious but then relieved. What do you think helped the meeting go better than expected?"',
    
    // AI Chat Feature
    aiConversationTitle: 'AI Conversation Journaling',
    aiConversationDescription: 'Chat with haru\'s empathetic AI companion that asks thoughtful questions, helps you process complex emotions, and guides you toward deeper self-understanding. It\'s like having someone who truly listens, available 24/7.',
    aiDialogSample1: '💭 AI: "How did that conversation make you feel?"',
    aiDialogSample2: '🙋‍♀️ You: "It made me realize I need to set boundaries..."',
    
    // Traditional Writing Feature
    traditionalWritingTitle: 'Traditional Free Writing',
    traditionalWritingDescription: 'Express yourself freely with classic diary writing. Pour your thoughts onto the page without any guidance - perfect for stream-of-consciousness writing and personal reflection.',
    yourEntry: 'Your Entry',
    entrySample: '"Today was a whirlwind of emotions. I woke up feeling anxious about the meeting, but it went better than expected..."',
    
    // Supporting Features
    moodCalendarTitle: 'Mood Calendar',
    moodCalendarDescription: 'Track your daily emotions with a beautiful calendar view. See patterns in your moods and celebrate the good days while learning from challenging ones.',
    timelineTitle: 'Timeline View',
    timelineDescription: 'Browse through all your entries in a chronological timeline. Rediscover forgotten memories and see how you\'ve grown over time.',
    smartInsightsTitle: 'Smart Insights',
    smartInsightsDescription: 'Get personalized insights from your journaling patterns. AI analyzes your emotions and provides gentle guidance for your daily diary practice.',
    weeklyInsight: '💭 Weekly Insight',
    insightSample: '"You\'ve shown great resilience this week. Consider celebrating small wins..."',
    
    // Daily Limit Feature
    sustainableHabitTitle: 'Sustainable Journaling Habit',
    sustainableHabitDescription: 'Write up to 3 entries a day. This gentle limit helps you build a sustainable, pressure-free journaling habit without overwhelming yourself. Quality over quantity.',
    
    // AI Understanding Section
    aiUnderstandingTitle: 'AI that truly understands you',
    aiUnderstandingDescription: 'haru\'s AI companion uses advanced emotional intelligence to provide personalized guidance. Unlike generic chatbots, haru\'s AI learns your communication style and offers meaningful support tailored to your personal diary experience.',
    emotionalIntelligence: 'Emotional Intelligence',
    emotionalIntelligenceDescription: 'AI that recognizes subtle emotional cues and responds with empathy',
    thoughtfulQuestions: 'Thoughtful Questions',
    thoughtfulQuestionsDescription: 'Asks the right questions to help you explore deeper feelings',
    privateSecure: 'Takes Time to Build',
    privateSecureDescription: 'Good friendships take time to develop. Building a meaningful connection with your AI companion is a gradual, rewarding process.',
    
    // Real Stories Section
    realStoriesTitle: 'Real moments, real transformations',
    realStoriesDescription: 'See how haru helps people navigate life\'s ups and downs',
    story1Title: 'When exam stress hits hard',
    story1Quote: '"I was drowning in exam anxiety. haru\'s AI asked me \'What\'s the scariest part about tomorrow?\' Suddenly, I could name my fear and work through it."',
    story1Author: 'Soyeon, 22, College Student',
    story2Title: 'After a difficult breakup',
    story2Quote: '"Instead of bottling everything up, I talked to haru. The AI helped me see patterns in my relationships I never noticed before."',
    story2Author: 'Takeshi, 28, Designer',
    story3Title: 'Daily gratitude practice',
    story3Quote: '"Three entries a day? Perfect. Morning intentions, lunch reflections, evening gratitude. It\'s become my mental health routine."',
    story3Author: 'Minji, 31, Teacher',
    
    // Trust & Privacy Section
    trustTitle: 'Your stories are safe with us',
    trustDescription: 'We take your privacy as seriously as you take your journaling',
    encryptionTitle: 'End-to-end encryption',
    encryptionDescription: 'Your entries are encrypted before they even leave your device',
    noAdsTitle: 'No ads, no data selling',
    noAdsDescription: 'We make money from subscriptions, not your personal data',
    activeUsers: '50,000+ active journalers',
    totalEntries: '2M+ entries written',
    userRetention: '87% keep journaling after 2 weeks',
    
    // Why 3 Entries Section
    why3EntriesTitle: 'Why only 3 entries per day?',
    why3EntriesDescription: 'We designed haru to encourage sustainable journaling habits',
    reason1Title: 'Quality over quantity',
    reason1Description: 'Focus on meaningful moments rather than endless documentation',
    reason2Title: 'Prevents overwhelm',
    reason2Description: 'No pressure to write everything - just what matters most',
    reason3Title: 'Natural reflection rhythm',
    reason3Description: 'Morning intentions, midday check-in, evening reflection',
    
    // CTA Section
    ctaTitle: 'Start journaling — your way',
    ctaDescription: 'Whether you prefer thoughtful chats or quiet reflection, haru supports both. Switch anytime, stay consistent, and rediscover yourself.',
    tryharu: 'Try haru now',
    bothIncluded: '✨ Both AI chat and traditional writing included',
    
    // Timeline entries
    eveningReflection: 'Evening Reflection',
    peacefulEvening: 'Peaceful Evening',
    
    // Stats
    streak: 'Streak',
    entries: 'Entries',
    sevenDays: '7 days',
    thisMonth: '23 this month'
  },
  ko: {
    // Header
    getStarted: '시작하기',
    
    // Hero Section
    tagline: 'AI 기반 개인 일기',
    heroTitle: '무엇을 써야 할지 모르겠나요?',
    heroTitleHighlight: '그냥 적어보세요.',
    heroSubline: 'haru가 들어주고, 기록하고, 이해해드려요.',
    heroDescription: 'haru는 단순한 글쓰기가 아닙니다 — 들려주기 위한 공간이에요. 자유롭게 말하거나 조용히 써보세요 — haru가 부드럽게 맞춰드려요. 따뜻한 AI 채팅이나 클래식 일기 모드로, 소중한 마음을 정리하고 진정으로 이해받는 느낌을 드려요.',
    startJourney: '일기 시작하기',
    learnMore: '더 알아보기',
    
    // Mode Switching Section
    signatureFeature: '특별한 기능',
    modeSwitchTitle: '채팅과 글쓰기 사이를',
    modeSwitchHighlight: '즉시 전환하세요.',
    modeSwitchDescription: '전통적인 일기로 시작하거나... AI와 채팅을 시작하세요. 작성 중에도 언제든지 두 모드 사이를 전환할 수 있습니다. 다른 앱에서는 할 수 없는 기능입니다.',
    aiChatMode: 'AI 채팅 모드',
    freeWritingMode: '자유 글쓰기 모드',
    aiSample: 'AI: "오늘 하루는 어떠셨나요?"',
    userSample: '당신: "사실 꽤 스트레스가 많았어요..."',
    yourThoughts: '당신의 생각',
    thoughtSample: '"오늘은 정말 벅찬 하루였다. 회의가 걱정됐는데 예상보다는 잘 풀렸다..."',
    switchAnytime: '💫 언제든지 한 번의 클릭으로 모드 전환 💫',
    
    // Features Section
    featuresTitle: '내면의 세계를 표현하는 세 가지 방법',
    featuresDescription: '일기 스타일을 선택하세요: AI 가이드 대화, 전통적인 글쓰기, 또는 먼저 쓰고 AI와 성찰하기 - 모두 감정을 탐험하고 자신에 대한 새로운 통찰을 발견하도록 도와줍니다.',
    
    // AI Reflection Feature - NEW
    aiReflectionTitle: '먼저 쓰고, AI와 성찰하기',
    aiReflectionDescription: '전통적인 스타일로 일기를 쓴 후, AI 동반자가 당신의 경험에 대해 사려 깊은 성찰과 통찰을 제공하도록 하세요. 먼저 표현하고 나서 더 깊은 의미를 함께 탐구하고 싶은 분들에게 완벽합니다.',
    reflectionSample: 'AI: "불안했다가 안도했다고 하셨는데, 회의가 예상보다 잘 된 이유가 무엇이라고 생각하시나요?"',
    
    // AI Chat Feature
    aiConversationTitle: 'AI 대화형 일기',
    aiConversationDescription: '사려 깊은 질문을 던지고, 복잡한 감정을 처리하도록 도와주며, 더 깊은 자기 이해로 안내하는 공감적인 AI 동반자와 채팅하세요. 24시간 언제나 진정으로 경청해주는 누군가가 있는 것과 같습니다.',
    aiDialogSample1: '💭 AI: "그 대화가 어떤 기분이 들게 했나요?"',
    aiDialogSample2: '🙋‍♀️ 당신: "경계를 설정해야 한다는 걸 깨달았어요..."',
    
    // Traditional Writing Feature
    traditionalWritingTitle: '전통적인 자유 글쓰기',
    traditionalWritingDescription: '클래식한 일기 쓰기로 자유롭게 자신을 표현하세요. 어떤 가이드도 없이 페이지에 생각을 쏟아내세요 - 의식의 흐름 글쓰기와 개인적 성찰에 완벽합니다.',
    yourEntry: '당신의 글',
    entrySample: '"오늘은 감정의 소용돌이 같은 하루였다. 회의 때문에 불안한 마음으로 일어났지만, 예상보다 잘 풀렸다..."',
    
    // Supporting Features
    moodCalendarTitle: '기분 캘린더',
    moodCalendarDescription: '아름다운 캘린더 뷰로 일일 감정을 추적하세요. 기분의 패턴을 보고 좋은 날들을 축하하며 어려운 날들에서 배우세요.',
    timelineTitle: '타임라인 뷰',
    timelineDescription: '시간순으로 모든 일기를 훑어보세요. 잊혀진 기억들을 재발견하고 시간이 흐르며 성장한 모습을 확인하세요.',
    smartInsightsTitle: '스마트 인사이트',
    smartInsightsDescription: '일기 패턴에서 개인화된 통찰을 얻으세요. AI가 감정을 분석하고 웰빙 여정을 위한 부드러운 가이드를 제공합니다.',
    weeklyInsight: '💭 주간 인사이트',
    insightSample: '"이번 주에 큰 회복력을 보여주셨네요. 작은 성취들을 축하하는 것을 고려해보세요..."',
    
    // Daily Limit Feature
    sustainableHabitTitle: '지속 가능한 일기 습관',
    sustainableHabitDescription: '하루에 최대 3개의 일기를 쓸 수 있습니다. 이 부드러운 제한은 압박감 없이 지속 가능한 일기 습관을 기르는 데 도움이 됩니다. 양보다 질.',
    
    // AI Understanding Section
    aiUnderstandingTitle: '당신을 진정으로 이해하는 AI',
    aiUnderstandingDescription: 'AI 동반자는 고급 감정 지능을 사용하여 개인화된 가이드를 제공합니다. 일반적인 챗봇과 달리, haru의 AI는 당신의 소통 스타일을 학습하고 독특한 감정 여정에 맞춤형 의미 있는 지원을 제공합니다.',
    emotionalIntelligence: '감정 지능',
    emotionalIntelligenceDescription: '미묘한 감정 신호를 인식하고 공감으로 반응하는 AI',
    thoughtfulQuestions: '사려 깊은 질문',
    thoughtfulQuestionsDescription: '더 깊은 감정을 탐험하도록 돕는 올바른 질문을 던집니다',
    privateSecure: '시간이 필요한 관계',
    privateSecureDescription: '좋은 친구를 사귀는 데에는 시간이 걸립니다. AI 동반자와 의미 있는 관계를 쌓는 것은 점진적이고 보람 있는 과정입니다.',
    
    // Real Stories Section
    realStoriesTitle: '실제 순간, 진짜 변화',
    realStoriesDescription: 'haru가 사람들의 일상의 기복을 어떻게 도와주는지 보세요',
    story1Title: '시험 스트레스가 극에 달했을 때',
    story1Quote: '"시험 불안에 빠져있었어요. haru AI가 \'내일에 대해 가장 무서운 게 뭐예요?\'라고 물었고, 갑자기 제 두려움을 명확히 말할 수 있게 되었어요."',
    story1Author: '서연, 22세, 대학생',
    story2Title: '힘든 이별 후',
    story2Quote: '"모든 걸 혼자 삭이는 대신 haru와 대화했어요. AI가 제 연애 패턴을 보여줘서 전에는 몰랐던 걸 깨달았죠."',
    story2Author: '민준, 28세, 디자이너',
    story3Title: '매일 감사 일기',
    story3Quote: '"하루 3개 항목? 완벽해요. 아침 다짐, 점심 성찰, 저녁 감사. 이게 제 멘탈 관리 루틴이 됐어요."',
    story3Author: '지은, 31세, 교사',
    
    // Trust & Privacy Section
    trustTitle: '당신의 이야기는 안전하게 보호됩니다',
    trustDescription: '우리는 당신이 일기를 소중히 여기는 만큼 프라이버시를 중요하게 생각합니다',
    encryptionTitle: '종단간 암호화',
    encryptionDescription: '당신의 일기는 기기를 떠나기 전에 이미 암호화됩니다',
    noAdsTitle: '광고 없음, 데이터 판매 없음',
    noAdsDescription: '우리는 개인 데이터가 아닌 구독료로 수익을 얻습니다',
    activeUsers: '50,000+ 활발한 일기 작성자',
    totalEntries: '200만+ 작성된 일기',
    userRetention: '87%가 2주 후에도 계속 작성',
    
    // Why 3 Entries Section
    why3EntriesTitle: '왜 하루에 3개까지일까요?',
    why3EntriesDescription: 'haru는 지속 가능한 일기 습관을 위해 디자인되었습니다',
    reason1Title: '양보다 질',
    reason1Description: '끝없는 기록보다 의미 있는 순간에 집중하세요',
    reason2Title: '부담감 방지',
    reason2Description: '모든 걸 쓸 필요 없어요 - 가장 중요한 것만',
    reason3Title: '자연스러운 성찰 리듬',
    reason3Description: '아침 다짐, 오후 체크인, 저녁 성찰',
    
    // CTA Section
    ctaTitle: '나만의 방식으로 일기 쓰기 시작',
    ctaDescription: '사려 깊은 채팅이든 조용한 성찰이든, haru는 둘 다 지원합니다. 언제든지 전환하고, 꾸준히 이어가며, 자신을 재발견하세요.',
    tryharu: 'haru 체험하기',
    bothIncluded: '✨ AI 채팅과 전통적인 글쓰기 모두 포함',
    
    // Timeline entries
    eveningReflection: '저녁 성찰',
    peacefulEvening: '평화로운 저녁',
    
    // Stats
    streak: '연속 기록',
    entries: '일기 수',
    sevenDays: '7일',
    thisMonth: '이번 달 23개'
  },
  ja: {
    // Header
    getStarted: '始める',
    
    // Hero Section
    tagline: 'AI搭載パーソナル日記',
    heroTitle: '何を書けばいいかわからない？',
    heroTitleHighlight: 'ただ話してください。',
    heroSubline: 'haruが聞いて、記録して、理解してくれます。',
    heroDescription: 'haruは単なる書くためのものではありません — 聞いてもらうための場所です。自由に話すか静かに書くか — haruが優しく寄り添います。思いやりのあるAIチャットやクラシック日記モードで、大切な気持ちを整理し、本当に理解されている実感をお届けします。',
    startJourney: '日記を始める',
    learnMore: 'もっと詳しく',
    
    // Mode Switching Section
    signatureFeature: '特徴的な機能',
    modeSwitchTitle: 'チャットと執筆を',
    modeSwitchHighlight: '瞬時に切り替え。',
    modeSwitchDescription: '従来の日記として始めるか...AIとのチャットを開始してください。記入中でもいつでも2つのモード間を切り替えることができます。他のアプリではできないことです。',
    aiChatMode: 'AIチャットモード',
    freeWritingMode: '自由記述モード',
    aiSample: 'AI: "今日はいかがでしたか？"',
    userSample: 'あなた: "実はとてもストレスが多かったです..."',
    yourThoughts: 'あなたの考え',
    thoughtSample: '"今日は圧倒的な一日だった。会議のことで不安に感じていたが、予想よりもうまくいった..."',
    switchAnytime: '💫 いつでもワンクリックでモード切り替え 💫',
    
    // Features Section
    featuresTitle: '内なる世界を表現する3つの方法',
    featuresDescription: '日記のスタイルを選択してください：AIガイド付き会話、従来の執筆、または最初に書いてからAIと反省する - すべて感情を探求し、自分自身について新しい洞察を発見するのに役立ちます。',
    
    // AI Reflection Feature - NEW
    aiReflectionTitle: '最初に書いて、AIと反省する',
    aiReflectionDescription: '従来のスタイルで日記エントリを書いた後、AIコンパニオンがあなたの体験について思慮深い反省と洞察を提供するようにしてください。最初に表現してから、より深い意味を一緒に探求することを好む方に最適です。',
    reflectionSample: 'AI: "不安を感じてから安心されたとおっしゃいましたが、会議が予想よりもうまくいった理由は何だと思いますか？"',
    
    // AI Chat Feature
    aiConversationTitle: 'AI会話日記',
    aiConversationDescription: '思慮深い質問をし、複雑な感情の処理を助け、より深い自己理解へと導く共感的なAIコンパニオンとチャットしてください。24時間いつでも真に耳を傾けてくれる人がいるようなものです。',
    aiDialogSample1: '💭 AI: "その会話はどのような気持ちにさせましたか？"',
    aiDialogSample2: '🙋‍♀️ あなた: "境界を設定する必要があることに気づきました..."',
    
    // Traditional Writing Feature
    traditionalWritingTitle: '従来の自由記述',
    traditionalWritingDescription: 'クラシックな日記の執筆で自由に自分を表現してください。ガイダンスなしでページに考えを注ぎ込んでください - 意識の流れの執筆と個人的な内省に最適です。',
    yourEntry: 'あなたのエントリ',
    entrySample: '"今日は感情の嵐のような日だった。会議のことで不安な気持ちで目覚めたが、予想よりもうまくいった..."',
    
    // Supporting Features
    moodCalendarTitle: 'ムードカレンダー',
    moodCalendarDescription: '美しいカレンダービューで日々の感情を追跡してください。気分のパターンを見て、良い日を祝い、困難な日から学びます。',
    timelineTitle: 'タイムラインビュー',
    timelineDescription: '時系列ですべてのエントリを閲覧してください。忘れていた記憶を再発見し、時間の経過とともにどのように成長したかを確認してください。',
    smartInsightsTitle: 'スマートインサイト',
    smartInsightsDescription: '日記のパターンからパーソナライズされた洞察を得てください。AIが感情を分析し、ウェルネスの旅のための穏やかなガイダンスを提供します。',
    weeklyInsight: '💭 週間インサイト',
    insightSample: '"今週は素晴らしい回復力を示されましたね。小さな勝利を祝うことを考えてみてください..."',
    
    // Daily Limit Feature
    sustainableHabitTitle: '持続可能な日記習慣',
    sustainableHabitDescription: '1日最大3つのエントリを書くことができます。この穏やかな制限は、圧迫感なく持続可能な日記習慣を築くのに役立ちます。量よりも質。',
    
    // AI Understanding Section
    aiUnderstandingTitle: 'あなたを真に理解するAI',
    aiUnderstandingDescription: 'AIコンパニオンは高度な感情知能を使用してパーソナライズされたガイダンスを提供します。一般的なチャットボットとは異なり、haruのAIはあなたのコミュニケーションスタイルを学習し、独特の感情の旅に合わせた意味のあるサポートを提供します。',
    emotionalIntelligence: '感情知能',
    emotionalIntelligenceDescription: '微妙な感情の手がかりを認識し、共感をもって反応するAI',
    thoughtfulQuestions: '思慮深い質問',
    thoughtfulQuestionsDescription: 'より深い感情を探求するのに役立つ適切な質問をします',
    privateSecure: '時間をかけて築く関係',
    privateSecureDescription: '良い友人関係を築くには時間がかかります。AIコンパニオンとの有意義なつながりを築くことは、段階的で価値のあるプロセスです。',
    
    // Real Stories Section
    realStoriesTitle: '実際の瞬間、本当の変化',
    realStoriesDescription: 'haruがどのように人々の日常の浮き沈みを助けているかご覧ください',
    story1Title: '試験のストレスがピークに達した時',
    story1Quote: '"試験の不安に溺れていました。haruのAIが「明日について一番怖いことは何？」と聞いてくれて、突然、自分の恐怖を言葉にして向き合えるようになりました。"',
    story1Author: 'さくら、22歳、大学生',
    story2Title: 'つらい別れの後',
    story2Quote: '"すべてを内に秘める代わりに、haruと話しました。AIが私の恋愛パターンを見せてくれて、今まで気づかなかったことに気づきました。"',
    story2Author: 'たける、28歳、デザイナー',
    story3Title: '毎日の感謝の練習',
    story3Quote: '"1日3エントリー？完璧です。朝の意図、昼の振り返り、夜の感謝。これが私のメンタルヘルスルーティンになりました。"',
    story3Author: 'えま、31歳、教師',
    
    // Trust & Privacy Section
    trustTitle: 'あなたの物語は安全に守られます',
    trustDescription: '私たちはあなたが日記を大切にするのと同じくらい、プライバシーを重要視しています',
    encryptionTitle: 'エンドツーエンド暗号化',
    encryptionDescription: 'あなたの日記はデバイスを離れる前に暗号化されます',
    noAdsTitle: '広告なし、データ販売なし',
    noAdsDescription: '私たちは個人データではなく、サブスクリプションで収益を得ています',
    activeUsers: '50,000+ のアクティブな日記作成者',
    totalEntries: '200万+ の書かれた日記',
    userRetention: '87%が2週間後も継続',
    
    // Why 3 Entries Section
    why3EntriesTitle: 'なぜ1日3エントリーまでなの？',
    why3EntriesDescription: 'haruは持続可能な日記習慣のためにデザインされています',
    reason1Title: '量より質',
    reason1Description: '終わりのない記録より、意味のある瞬間に焦点を当てます',
    reason2Title: '圧倒感を防ぐ',
    reason2Description: 'すべてを書く必要はありません - 最も重要なことだけ',
    reason3Title: '自然な振り返りのリズム',
    reason3Description: '朝の意図、昼のチェックイン、夜の振り返り',
    
    // CTA Section
    ctaTitle: 'あなたの方法で日記を始めよう',
    ctaDescription: '思慮深いチャットでも静かな内省でも、haruは両方をサポートします。いつでも切り替えて、一貫性を保ち、自分を再発見してください。',
    tryharu: 'haruを試す',
    bothIncluded: '✨ AIチャットと従来の執筆の両方が含まれています',
    
    // Timeline entries
    eveningReflection: '夜の内省',
    peacefulEvening: '平和な夜',
    
    // Stats
    streak: 'ストリーク',
    entries: 'エントリ数',
    sevenDays: '7日',
    thisMonth: '今月23個'
  },
  cn: {
    // Header
    getStarted: '开始使用',
    
    // Hero Section
    tagline: 'AI驱动的个人日记',
    heroTitle: '不知道写什么？',
    heroTitleHighlight: '就讲讲吧。',
    heroSubline: 'haru会倾听您的心声，记录您的想法，理解您的感受。',
    heroDescription: 'haru不只是用来写作的 — 这是一个被倾听的地方。自由地说话或安静地写作 — haru温柔地适应您。通过贴心的AI聊天或经典日记模式，haru帮您整理重要的想法，让您真正感受到被理解。',
    startJourney: '开始写日记',
    learnMore: '了解更多',
    
    // Mode Switching Section
    signatureFeature: '标志性功能',
    modeSwitchTitle: '聊天和写作之间',
    modeSwitchHighlight: '即时切换。',
    modeSwitchDescription: '从传统日记开始...或与AI开始聊天。您可以随时在两种模式之间切换，甚至在记录过程中。其他应用程序都做不到这一点。',
    aiChatMode: 'AI聊天模式',
    freeWritingMode: '自由写作模式',
    aiSample: 'AI: "您今天过得怎么样？"',
    userSample: '您: "实际上压力很大..."',
    yourThoughts: '您的想法',
    thoughtSample: '"今天感觉压力很大。我本来担心会议的事，但结果比预期的要好..."',
    switchAnytime: '💫 随时一键切换模式 💫',
    
    // Features Section
    featuresTitle: '表达内心世界的三种方式',
    featuresDescription: '选择您的日记风格：AI引导的对话、传统写作，或者先写作然后与AI反思 - 每种方式都帮助您探索情感并发现关于自己的新见解。',
    
    // AI Reflection Feature - NEW
    aiReflectionTitle: '先写作，再与AI反思',
    aiReflectionDescription: '以传统风格写日记，然后让我们的AI伙伴为您的体验提供深思熟虑的反思和见解。非常适合那些喜欢先表达然后一起探索更深层含义的人。',
    reflectionSample: 'AI: "我注意到您提到从焦虑到松了一口气，您认为是什么让会议进行得比预期的好？"',
    
    // AI Chat Feature
    aiConversationTitle: 'AI对话日记',
    aiConversationDescription: '与haru富有同理心的AI伙伴聊天，它会提出深思熟虑的问题，帮助您处理复杂的情感，并引导您走向更深的自我理解。就像有一个24/7真正倾听您的人。',
    aiDialogSample1: '💭 AI: "那次对话让您感觉如何？"',
    aiDialogSample2: '🙋‍♀️ 您: "它让我意识到我需要设定界限..."',
    
    // Traditional Writing Feature
    traditionalWritingTitle: '传统自由写作',
    traditionalWritingDescription: '用经典的日记写作自由表达自己。将您的想法倾注在纸上，无需任何指导 - 非常适合意识流写作和个人反思。',
    yourEntry: '您的记录',
    entrySample: '"今天是一个情感波澜的日子。我因为担心会议而焦虑地醒来，但结果比预期的要好..."',
    
    // Supporting Features
    moodCalendarTitle: '情绪日历',
    moodCalendarDescription: '用美丽的日历视图跟踪您的日常情绪。看到您情绪的模式，庆祝美好的日子，从困难的日子中学习。',
    timelineTitle: '时间线视图',
    timelineDescription: '按时间顺序浏览您的所有记录。重新发现被遗忘的回忆，看看您随着时间的推移如何成长。',
    smartInsightsTitle: '智能洞察',
    smartInsightsDescription: '从您的日记模式中获得个性化洞察。AI分析您的情感并为您的健康之旅提供温和的指导。',
    weeklyInsight: '💭 周度洞察',
    insightSample: '"您这周表现出了很强的韧性。考虑庆祝小小的胜利..."',
    
    // Daily Limit Feature
    sustainableHabitTitle: '可持续的日记习惯',
    sustainableHabitDescription: '每天最多可以写3篇记录。这个温和的限制帮助您建立可持续的、无压力的日记习惯，不会让自己感到负担。质量胜过数量。',
    
    // AI Understanding Section
    aiUnderstandingTitle: '真正理解您的AI',
    aiUnderstandingDescription: 'haru的AI伙伴使用先进的情感智能提供个性化指导。与通用聊天机器人不同，haru的AI学习您的沟通风格，并提供针对您独特情感旅程的有意义支持。',
    emotionalIntelligence: '情感智能',
    emotionalIntelligenceDescription: '识别微妙的情感线索并以同理心回应的AI',
    thoughtfulQuestions: '深思熟虑的问题',
    thoughtfulQuestionsDescription: '提出正确的问题帮助您探索更深层的感受',
    privateSecure: '需要时间建立',
    privateSecureDescription: '好友谊需要时间培养。与您的AI伙伴建立有意义的连接是一个循序渐进、充满价值的过程。',
    
    // Real Stories Section
    realStoriesTitle: '真实瞬间，真正改变',
    realStoriesDescription: '看看haru如何帮助人们度过生活的起起伏伏',
    story1Title: '当考试压力达到顶峰时',
    story1Quote: '"我被考试焦虑淹没了。haru的AI问我\'明天最可怕的部分是什么？\'突然间，我能说出我的恐惧并克服它。"',
    story1Author: '小雪，22岁，大学生',
    story2Title: '艰难的分手之后',
    story2Quote: '"我没有把一切都憋在心里，而是和haru聊天。AI帮我看到了我在感情中从未注意到的模式。"',
    story2Author: '志明，28岁，设计师',
    story3Title: '每日感恩练习',
    story3Quote: '"每天3条记录？完美。早晨的意图，午餐的反思，晚上的感恩。这成了我的心理健康日常。"',
    story3Author: '艾玛，31岁，教师',
    
    // Trust & Privacy Section
    trustTitle: '您的故事得到安全保护',
    trustDescription: '我们像您重视日记一样重视您的隐私',
    encryptionTitle: '端到端加密',
    encryptionDescription: '您的日记在离开设备之前就已加密',
    noAdsTitle: '无广告，不出售数据',
    noAdsDescription: '我们通过订阅而非您的个人数据赚钱',
    activeUsers: '50,000+ 活跃的日记作者',
    totalEntries: '200万+ 篇已写日记',
    userRetention: '87%在两周后仍在坚持',
    
    // Why 3 Entries Section
    why3EntriesTitle: '为什么每天只能写3条？',
    why3EntriesDescription: 'haru旨在培养可持续的日记习惯',
    reason1Title: '质量胜过数量',
    reason1Description: '专注于有意义的时刻，而不是无尽的记录',
    reason2Title: '防止不堪重负',
    reason2Description: '无需记录一切 - 只记录最重要的',
    reason3Title: '自然的反思节奏',
    reason3Description: '早晨的意图，中午的检查，晚上的反思',
    
    // CTA Section
    ctaTitle: '以您的方式开始写日记',
    ctaDescription: '无论您偏爱深思的聊天还是安静的反思，haru都支持。随时切换，保持一致，重新发现自己。',
    tryharu: '试用haru',
    bothIncluded: '✨ 包含AI聊天和传统写作',
    
    // Timeline entries
    eveningReflection: '晚间反思',
    peacefulEvening: '宁静之夜',
    
    // Stats
    streak: '连续记录',
    entries: '记录数',
    sevenDays: '7天',
    thisMonth: '本月23篇'
  }
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en')
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false)
  
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
  
  // Load saved language preference on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('haru-language') as Language
    if (savedLanguage && ['en', 'ko', 'ja', 'cn'].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage)
    }
  }, [])
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (showLanguageDropdown) {
        setShowLanguageDropdown(false)
      }
    }
    
    if (showLanguageDropdown) {
      document.addEventListener('click', handleClickOutside)
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [showLanguageDropdown])
  
  // Save language preference
  const handleLanguageChange = (lang: Language) => {
    setCurrentLanguage(lang)
    localStorage.setItem('haru-language', lang)
    setShowLanguageDropdown(false)
  }
  
  const t = translations[currentLanguage]
  
  const languages = [
    { code: 'en', label: 'English', shortLabel: 'EN' },
    { code: 'ko', label: '한국어', shortLabel: 'KO' },
    { code: 'ja', label: '日本語', shortLabel: 'JA' },
    { code: 'cn', label: '中文', shortLabel: 'CN' }
  ] as const
  
  const currentLangInfo = languages.find(lang => lang.code === currentLanguage)
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-rose-400 rounded-xl flex items-center justify-center">
              <Heart className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="text-xl text-gray-800">haru</span>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-800 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">{currentLangInfo?.shortLabel}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              
              {/* Language Dropdown */}
              {showLanguageDropdown && (
                <div className="absolute top-full right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 min-w-[160px]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code as Language)}
                      className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-50 transition-colors ${
                        currentLanguage === lang.code ? 'text-pink-600 bg-pink-50' : 'text-gray-700'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <button 
              onClick={onGetStarted}
              className="px-6 py-2 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-lg hover:from-pink-500 hover:to-rose-500 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              {t.getStarted}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-pink-600 bg-pink-50/50 px-3 py-1 rounded mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">{t.tagline}</span>
            </div>
            
            <h1 className="text-3xl lg:text-4xl text-gray-800 mb-4 leading-tight font-bold">
              {t.heroTitle}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 font-bold">
                {t.heroTitleHighlight}
              </span>
            </h1>

            <h2 className="text-xl text-gray-800 font-semibold mb-6">
              {t.heroSubline}
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {highlightHaru(t.heroDescription)}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onGetStarted}
                className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-xl hover:from-pink-500 hover:to-rose-500 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {t.startJourney}
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button className="flex items-center gap-2 px-8 py-3 bg-white text-gray-700 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors">
                <span>{t.learnMore}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="w-full h-80 bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center">
                <div className="text-center">
                  <Heart className="w-16 h-16 text-pink-400 mx-auto mb-4 fill-pink-200" />
                  <p className="text-gray-600">Beautiful UI Preview</p>
                </div>
              </div>
              
              {/* Floating UI Elements */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-2xl">😊</span>
                  <span className="text-gray-700">Feeling grateful</span>
                </div>
                {/* Speech bubble tail */}
                <div className="absolute -bottom-1 right-6 w-3 h-3 bg-white/90 transform rotate-45"></div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="text-xs text-gray-500 mb-1">Today's Entry</div>
                <div className="text-sm text-gray-700">Morning Reflection</div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full opacity-60 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-orange-200 to-pink-200 rounded-full opacity-60 blur-xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Mode Switching Section - NEW HIGHLIGHT */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-gradient-to-r from-purple-50 via-pink-50 to-rose-50 rounded-3xl mx-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full mb-6">
            <span className="text-sm">{t.signatureFeature}</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl text-gray-800 mb-6">
            {t.modeSwitchTitle}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">{t.modeSwitchHighlight}</span>
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {highlightHaru(t.modeSwitchDescription)}
          </p>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-gray-800 font-medium">{t.aiChatMode}</span>
                </div>
                <div className="text-sm text-gray-600 space-y-2">
                  <div className="bg-purple-50 rounded-lg p-3">
                    <div className="text-purple-600 mb-1">{t.aiSample}</div>
                    <div className="text-gray-700">{t.userSample}</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-100 to-rose-100 rounded-lg flex items-center justify-center">
                    <Heart className="w-4 h-4 text-pink-600" />
                  </div>
                  <span className="text-gray-800 font-medium">{t.freeWritingMode}</span>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-gray-500 mb-1">📝 {t.yourThoughts}</div>
                    <div className="text-gray-700 italic">{t.thoughtSample}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 text-sm text-gray-600">
                <span>{t.switchAnytime}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl text-gray-800 mb-4">
            {t.featuresTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {highlightHaru(t.featuresDescription)}
          </p>
        </motion.div>
        
        {/* Main Writing Methods - Featured prominently */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* AI Chat Method - Main Appeal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-sm border-2 border-purple-200 relative overflow-hidden"
          >
            {/* Featured badge */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs">
              ✨ Featured
            </div>
            
            <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-purple-600" />
            </div>
            
            <h3 className="text-xl text-gray-800 mb-3">{t.aiConversationTitle}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {highlightHaru(t.aiConversationDescription)}
            </p>
            
            <div className="bg-white/60 rounded-xl p-4 mb-4">
              <div className="w-full h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">AI Chat Interface</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="bg-white/60 rounded-lg p-3">
                <div className="text-xs text-purple-600 mb-1">{t.aiDialogSample1}</div>
                <div className="text-xs text-gray-600">{t.aiDialogSample2}</div>
              </div>
            </div>
          </motion.div>
          
          {/* Traditional Method */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-rose-100 rounded-xl flex items-center justify-center mb-6">
              <Heart className="w-6 h-6 text-pink-600" />
            </div>
            
            <h3 className="text-xl text-gray-800 mb-3">{t.traditionalWritingTitle}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {highlightHaru(t.traditionalWritingDescription)}
            </p>
            
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <div className="w-full h-32 bg-gradient-to-br from-pink-100 to-rose-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Heart className="w-12 h-12 text-pink-400 mx-auto mb-2 fill-pink-200" />
                  <p className="text-sm text-gray-600">Journal Writing</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-xs text-gray-500 mb-1">📝 {t.yourEntry}</div>
              <div className="text-xs text-gray-700 italic">
                {t.entrySample}
              </div>
            </div>
          </motion.div>
          
          {/* AI Reflection Method - NEW */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-rose-50 to-orange-50 rounded-2xl p-6 shadow-sm border-2 border-rose-200 relative overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Featured badge */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-rose-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs">
              ✨ Featured
            </div>
            
            <div className="w-12 h-12 bg-gradient-to-r from-rose-100 to-orange-100 rounded-xl flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-rose-600" />
            </div>
            
            <h3 className="text-xl text-gray-800 mb-3">{t.aiReflectionTitle}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t.aiReflectionDescription}
            </p>
            
            <div className="bg-white/60 rounded-xl p-4 mb-4">
              <div className="w-full h-32 bg-gradient-to-br from-rose-100 to-orange-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Heart className="w-8 h-8 text-rose-400 mr-2 fill-rose-200" />
                    <span className="text-2xl">→</span>
                    <Sparkles className="w-8 h-8 text-orange-400 ml-2" />
                  </div>
                  <p className="text-sm text-gray-600">Write → Reflect</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/60 rounded-lg p-3">
              <div className="text-xs text-rose-600 mb-1">🤔 {t.reflectionSample}</div>
            </div>
          </motion.div>
        </div>
        
        {/* Supporting Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Calendar Feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-pink-100 to-rose-100 rounded-xl flex items-center justify-center mb-4">
              <Calendar className="w-5 h-5 text-pink-600" />
            </div>
            
            <h3 className="text-lg text-gray-800 mb-3">{t.moodCalendarTitle}</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              {t.moodCalendarDescription}
            </p>
            
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="grid grid-cols-7 gap-1 text-xs">
                <div className="w-6 h-6 bg-yellow-200 rounded flex items-center justify-center">😊</div>
                <div className="w-6 h-6 bg-blue-200 rounded flex items-center justify-center">😌</div>
                <div className="w-6 h-6 bg-green-200 rounded flex items-center justify-center">🥰</div>
                <div className="w-6 h-6 bg-purple-200 rounded flex items-center justify-center">🤔</div>
                <div className="w-6 h-6 bg-pink-200 rounded flex items-center justify-center">🌟</div>
                <div className="w-6 h-6 bg-orange-200 rounded flex items-center justify-center">📚</div>
                <div className="w-6 h-6 bg-red-200 rounded flex items-center justify-center">☕</div>
              </div>
            </div>
          </motion.div>
          
          {/* Timeline Feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mb-4">
              <Clock className="w-5 h-5 text-purple-600" />
            </div>
            
            <h3 className="text-lg text-gray-800 mb-3">{t.timelineTitle}</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              {t.timelineDescription}
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-2">
                <span className="text-sm">🌟</span>
                <div>
                  <div className="text-xs text-gray-700">{t.eveningReflection}</div>
                  <div className="text-xs text-gray-500">Oct 19</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-2">
                <span className="text-sm">😌</span>
                <div>
                  <div className="text-xs text-gray-700">{t.peacefulEvening}</div>
                  <div className="text-xs text-gray-500">Oct 18</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Smart Insights Feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-rose-100 to-orange-100 rounded-xl flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5 text-rose-600" />
            </div>
            
            <h3 className="text-lg text-gray-800 mb-3">{t.smartInsightsTitle}</h3>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              {t.smartInsightsDescription}
            </p>
            
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-3">
              <div className="text-xs text-gray-700 mb-1">{t.weeklyInsight}</div>
              <p className="text-xs text-gray-600 italic">
                {t.insightSample}
              </p>
            </div>
          </motion.div>
          
          {/* Daily Entry Limit Feature - NEW */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow md:col-span-3"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl flex items-center justify-center">
                <span className="text-green-600 text-sm">📅</span>
              </div>
              <h3 className="text-lg text-gray-800">{t.sustainableHabitTitle}</h3>
            </div>
            
            <p className="text-sm text-gray-600 mb-4 leading-relaxed text-center max-w-2xl mx-auto">
              {highlightHaru(t.sustainableHabitDescription)}
            </p>
            
            <div className="flex justify-center gap-2">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-xs text-green-700">1</div>
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-xs text-green-700">2</div>
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-xs text-green-700">3</div>
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-xs text-gray-400">✓</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="w-full h-80 bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center">
                  <div className="text-center">
                    <Calendar className="w-16 h-16 text-orange-400 mx-auto mb-4" />
                    <p className="text-gray-600">Peaceful journaling space</p>
                  </div>
                </div>
              </div>
              
              {/* Floating stats */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="text-xs text-gray-500 mb-1">{t.streak}</div>
                <div className="text-lg text-gray-800">{t.sevenDays}</div>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="text-xs text-gray-500 mb-1">{t.entries}</div>
                <div className="text-lg text-gray-800">{t.thisMonth}</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl text-gray-800 mb-6">
              {t.aiUnderstandingTitle}
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {highlightHaru(t.aiUnderstandingDescription)}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs">🧠</span>
                </div>
                <div>
                  <div className="text-gray-800 mb-1">{t.emotionalIntelligence}</div>
                  <div className="text-sm text-gray-600">{t.emotionalIntelligenceDescription}</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs">💬</span>
                </div>
                <div>
                  <div className="text-gray-800 mb-1">{t.thoughtfulQuestions}</div>
                  <div className="text-sm text-gray-600">{t.thoughtfulQuestionsDescription}</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs">⏳</span>
                </div>
                <div>
                  <div className="text-gray-800 mb-1">{t.privateSecure}</div>
                  <div className="text-sm text-gray-600">{t.privateSecureDescription}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Real Stories Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 rounded-3xl mx-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl text-gray-800 mb-4">
            {t.realStoriesTitle}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {highlightHaru(t.realStoriesDescription)}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Story 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <div className="mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mb-3">
                <span className="text-xl">📚</span>
              </div>
              <h3 className="text-lg text-gray-800 mb-2">{t.story1Title}</h3>
            </div>
            <blockquote className="text-gray-600 italic mb-4">
              {t.story1Quote}
            </blockquote>
            <p className="text-sm text-gray-500">— {t.story1Author}</p>
          </motion.div>

          {/* Story 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <div className="mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-rose-100 to-orange-100 rounded-xl flex items-center justify-center mb-3">
                <span className="text-xl">💔</span>
              </div>
              <h3 className="text-lg text-gray-800 mb-2">{t.story2Title}</h3>
            </div>
            <blockquote className="text-gray-600 italic mb-4">
              {t.story2Quote}
            </blockquote>
            <p className="text-sm text-gray-500">— {t.story2Author}</p>
          </motion.div>

          {/* Story 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-sm"
          >
            <div className="mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mb-3">
                <span className="text-xl">🙏</span>
              </div>
              <h3 className="text-lg text-gray-800 mb-2">{t.story3Title}</h3>
            </div>
            <blockquote className="text-gray-600 italic mb-4">
              {t.story3Quote}
            </blockquote>
            <p className="text-sm text-gray-500">— {t.story3Author}</p>
          </motion.div>
        </div>
      </section>


      {/* Why 3 Entries Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 bg-gradient-to-r from-orange-50 via-rose-50 to-pink-50 rounded-3xl mx-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl text-gray-800 mb-4">
              {t.why3EntriesTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {highlightHaru(t.why3EntriesDescription)}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-lg text-gray-800 mb-2">{t.reason1Title}</h3>
              <p className="text-sm text-gray-600">{t.reason1Description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-rose-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌊</span>
              </div>
              <h3 className="text-lg text-gray-800 mb-2">{t.reason2Title}</h3>
              <p className="text-sm text-gray-600">{t.reason2Description}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌅</span>
              </div>
              <h3 className="text-lg text-gray-800 mb-2">{t.reason3Title}</h3>
              <p className="text-sm text-gray-600">{t.reason3Description}</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pink-100 via-rose-100 to-orange-100">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl text-gray-800 mb-6">
              {t.ctaTitle}
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {highlightHaru(t.ctaDescription)}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onGetStarted}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
              >
                {t.tryharu}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              {t.bothIncluded}
            </p>
            
            {/* Footer content within CTA section */}
            <div className="mt-12 pt-6 border-t border-pink-200/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-sm text-gray-500">© 2025 <a href="https://polaris-lab.net/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition-colors">Polaris</a>. All rights reserved.</span>
                </div>
                
                <div className="flex items-center gap-6 text-sm text-gray-600">
                  <button className="hover:text-gray-800 transition-colors">Privacy Policy</button>
                  <button className="hover:text-gray-800 transition-colors">Terms of Service</button>
                  <button className="hover:text-gray-800 transition-colors">Contact</button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}