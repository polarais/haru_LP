'use client'

import React, { useState, useEffect } from 'react'
import { Heart, Calendar, MessageCircle, Sparkles, Image as ImageIcon, Clock, BookOpen, PenTool, Zap, CheckCircle, HelpCircle, Mail, ChevronRight, Edit3, Sunrise, Moon, Coffee } from 'lucide-react'
import { motion } from 'framer-motion'

type Language = 'en' | 'ko' | 'ja' | 'cn'

const translations = {
  en: {
    back: 'Back',
    whyHaruTitle: 'Why "haru"?',
    whyHaruDescription1: '"haru" means "one day" in Korean.',
    whyHaruDescription2: 'We named this app haru because every day — no matter how quiet or messy — deserves to be remembered, reflected on, and honored.',
    whyHaruDescription3: 'Some days you need to write. Some days you just need someone to listen. haru is here for both — to help you feel seen, heard, and understood, one day at a time.',
    getStarted: 'Start Your Journey',

    // How to Use Guide
    guideTitle: 'How to Use haru',
    guideSubtitle: 'Your AI-Powered Personal Diary',

    gettingStartedTitle: 'Getting Started',
    step1Title: 'Create Your Account',
    step1Desc: 'Sign up with your email and password, verify with a 6-digit code, and you\'re all set!',
    step2Title: 'Choose Your View',
    step2Desc: 'Calendar View for monthly overview or Timeline View for chronological entries',

    writingTitle: 'Writing Your First Entry',
    writingSubtitle: 'Click the + button to begin. Write up to 3 entries per day - quality over quantity.',
    chooseMood: 'Choose Your Mood',
    chooseMoodDesc: 'Select an emoji that represents how you\'re feeling today',

    twoWaysTitle: 'Two Ways to Write',
    journalModeTitle: 'Journal Mode',
    journalModeSubtitle: 'Traditional Writing',
    journalModeDesc: 'Add a title, write freely, attach photos. Perfect when you know what to say.',
    aiChatModeTitle: 'AI Chat Mode',
    aiChatModeSubtitle: 'Conversational Writing',
    aiChatModeDesc: 'Let AI guide you with thoughtful questions. Great when you need help getting started.',
    switchAnytime: 'Switch between modes anytime, even mid-entry!',

    aiFeaturesTitle: 'AI Features',
    autoSummaryTitle: 'Auto-Summary',
    autoSummaryDesc: 'AI generates a concise summary capturing key insights and emotions',
    aiReflectionTitle: 'AI Reflection',
    aiReflectionDesc: 'Click "Chat with AI" after writing to explore your entry deeper',
    timelineSummariesTitle: 'Timeline Summaries',
    timelineSummariesDesc: 'See AI-generated summaries for quick scanning in Timeline view',

    viewingTitle: 'Viewing Your Entries',
    calendarViewTitle: 'Calendar View',
    calendarViewDesc: 'See your month with mood emojis, spot patterns, view multiple entries per day',
    timelineViewTitle: 'Timeline View',
    timelineViewDesc: 'Scroll through entries chronologically with AI summaries',
    entryPanelTitle: 'Entry Panel',
    entryPanelDesc: 'Read, edit inline (Notion-style), navigate between entries - auto-saves changes',

    organizingTitle: 'Organizing Your Entries',
    addingPhotosTitle: 'Adding Photos',
    addingPhotosDesc: 'Drag & drop or click to add images (max 5MB each)',
    editingTitle: 'Editing Entries',
    editingDesc: 'Click anywhere to edit, changes save automatically',

    proTipsTitle: 'Pro Tips & Best Practices',
    tip1Title: 'Make the Most of 3 Daily Entries',
    tip1Desc: 'Morning intentions, afternoon moments, evening reflections',
    tip2Title: 'Leverage AI Wisely',
    tip2Desc: 'Use Chat mode when stuck, ask follow-ups for deeper insights',
    tip3Title: 'Build a Sustainable Habit',
    tip3Desc: 'Set consistent time, don\'t force it, quality over quantity',

    limitsTitle: 'Understanding Limits',
    dailyLimitTitle: 'Daily Entry Limit (3 per day)',
    dailyLimitDesc: 'This gentle limit encourages meaningful reflection and sustainable habits',
    photoLimitTitle: 'Photo Limits',
    photoLimitDesc: 'Max 5MB per photo',

    faqTitle: 'Common Questions',
    faq1: 'Can I write about past dates?',
    faq1A: 'Yes! Click any date on the calendar to write an entry for that day.',
    faq2: 'What happens to my AI conversations?',
    faq2A: 'All conversations are saved privately with your entry.',
    faq3: 'Can I export my entries?',
    faq3A: 'This feature is coming soon!',

    needHelpTitle: 'Need Help?',
    contactEmail: 'support@polaris-lab.net',

    closingMessage: 'There\'s no "right" way to journal. Whether you write novels or single sentences, use AI or don\'t, haru is here to support your journey.',
    happyJournaling: 'Happy journaling! 💕'
  },
  ko: {
    back: '뒤로',
    whyHaruTitle: '왜 "하루"일까요?',
    whyHaruDescription1: '"haru"는 하루하루를 의미합니다.',
    whyHaruDescription2: '조용하든 어지럽든, 모든 하루는 기억되고, 성찰되고, 소중히 여겨질 자격이 있으니까요.',
    whyHaruDescription3: '어떤 날은 글을 써야 하고, 어떤 날은 그저 누군가가 들어주길 원하죠. haru는 그 둘 모두를 위해 있습니다. 하루하루 진정으로 보이고, 들리고, 이해받는 느낌을 드리기 위해.',
    getStarted: '여정 시작하기',

    // How to Use Guide
    guideTitle: 'haru 사용 방법',
    guideSubtitle: 'AI 기반 개인 일기장',

    gettingStartedTitle: '시작하기',
    step1Title: '계정 만들기',
    step1Desc: '이메일과 비밀번호로 가입하고, 6자리 코드로 인증하면 완료!',
    step2Title: '보기 선택',
    step2Desc: '월간 개요를 위한 캘린더 뷰 또는 시간순 타임라인 뷰 선택',

    writingTitle: '첫 일기 작성하기',
    writingSubtitle: '+ 버튼을 눌러 시작하세요. 하루 최대 3개 작성 가능 - 양보다 질!',
    chooseMood: '기분 선택하기',
    chooseMoodDesc: '오늘의 기분을 나타내는 이모지를 선택하세요',

    twoWaysTitle: '두 가지 작성 방법',
    journalModeTitle: '일기 모드',
    journalModeSubtitle: '전통적인 글쓰기',
    journalModeDesc: '제목 추가, 자유롭게 작성, 사진 첨부. 쓸 내용이 명확할 때 완벽합니다.',
    aiChatModeTitle: 'AI 채팅 모드',
    aiChatModeSubtitle: '대화형 글쓰기',
    aiChatModeDesc: 'AI가 사려 깊은 질문으로 안내합니다. 시작이 어려울 때 좋아요.',
    switchAnytime: '언제든지 모드 전환 가능, 작성 중에도!',

    aiFeaturesTitle: 'AI 기능',
    autoSummaryTitle: '자동 요약',
    autoSummaryDesc: 'AI가 핵심 통찰과 감정을 담은 간결한 요약을 생성합니다',
    aiReflectionTitle: 'AI 성찰',
    aiReflectionDesc: '작성 후 "AI와 대화하기"를 클릭하여 더 깊이 탐구하세요',
    timelineSummariesTitle: '타임라인 요약',
    timelineSummariesDesc: '타임라인 뷰에서 빠른 스캔을 위한 AI 요약을 확인하세요',

    viewingTitle: '일기 보기',
    calendarViewTitle: '캘린더 뷰',
    calendarViewDesc: '월간 기분 이모지, 패턴 파악, 하루에 여러 일기 보기',
    timelineViewTitle: '타임라인 뷰',
    timelineViewDesc: 'AI 요약과 함께 시간순으로 일기 스크롤',
    entryPanelTitle: '일기 패널',
    entryPanelDesc: '읽기, 인라인 수정(노션 스타일), 일기 간 이동 - 자동 저장',

    organizingTitle: '일기 정리하기',
    addingPhotosTitle: '사진 추가',
    addingPhotosDesc: '드래그 앤 드롭 또는 클릭하여 이미지 추가 (각 최대 5MB)',
    editingTitle: '일기 수정',
    editingDesc: '아무 곳이나 클릭하여 수정, 변경사항 자동 저장',

    proTipsTitle: '프로 팁 & 모범 사례',
    tip1Title: '3개 일일 일기 최대 활용',
    tip1Desc: '아침 다짐, 오후 순간, 저녁 성찰',
    tip2Title: 'AI 현명하게 활용',
    tip2Desc: '막힐 때 채팅 모드 사용, 더 깊은 통찰을 위한 추가 질문',
    tip3Title: '지속 가능한 습관 만들기',
    tip3Desc: '일관된 시간 설정, 억지로 하지 말고, 양보다 질',

    limitsTitle: '제한 사항 이해하기',
    dailyLimitTitle: '일일 일기 제한 (하루 3개)',
    dailyLimitDesc: '이 부드러운 제한은 의미 있는 성찰과 지속 가능한 습관을 장려합니다',
    photoLimitTitle: '사진 제한',
    photoLimitDesc: '사진당 최대 5MB',

    faqTitle: '자주 묻는 질문',
    faq1: '과거 날짜에 대해 쓸 수 있나요?',
    faq1A: '네! 캘린더에서 원하는 날짜를 클릭하여 해당 날짜의 일기를 작성하세요.',
    faq2: 'AI 대화는 어떻게 되나요?',
    faq2A: '모든 대화는 일기와 함께 비공개로 저장됩니다.',
    faq3: '일기를 내보낼 수 있나요?',
    faq3A: '이 기능은 곧 제공될 예정입니다!',

    needHelpTitle: '도움이 필요하신가요?',
    contactEmail: 'support@polaris-lab.net',

    closingMessage: '일기를 쓰는 "올바른" 방법은 없습니다. 소설을 쓰든 한 문장을 쓰든, AI를 사용하든 안 하든, haru는 여러분의 여정을 지원합니다.',
    happyJournaling: '즐거운 일기 쓰기 되세요! 💕'
  },
  ja: {
    back: '戻る',
    whyHaruTitle: 'なぜ「haru」？',
    whyHaruDescription1: '「haru」は韓国語で「一日」を意味します。',
    whyHaruDescription2: 'どんなに静かでも、どんなに混沌としていても、すべての一日は記憶され、振り返られ、大切にされる価値があるからです。',
    whyHaruDescription3: 'ある日は書く必要があり、ある日はただ誰かに聞いてもらいたい。haruは両方のためにここにいます。一日一日、本当に見えて、聞こえて、理解されていると感じさせるために。',
    getStarted: '旅を始める',

    // How to Use Guide
    guideTitle: 'haruの使い方',
    guideSubtitle: 'AI搭載パーソナル日記',

    gettingStartedTitle: '始め方',
    step1Title: 'アカウントを作成',
    step1Desc: 'メールアドレスとパスワードで登録し、6桁のコードで認証すれば完了！',
    step2Title: 'ビューを選択',
    step2Desc: '月間概要のカレンダービュー、または時系列のタイムラインビューを選択',

    writingTitle: '最初の日記を書く',
    writingSubtitle: '+ボタンを押して始めましょう。1日最大3件まで記録可能 - 量より質！',
    chooseMood: '気分を選ぶ',
    chooseMoodDesc: '今日の気分を表す絵文字を選んでください',

    twoWaysTitle: '2つの書き方',
    journalModeTitle: '日記モード',
    journalModeSubtitle: '従来の書き方',
    journalModeDesc: 'タイトル追加、自由に書く、写真添付。書く内容が明確なときに最適です。',
    aiChatModeTitle: 'AIチャットモード',
    aiChatModeSubtitle: '対話型の書き方',
    aiChatModeDesc: 'AIが思慮深い質問で導きます。始め方がわからないときに最適です。',
    switchAnytime: 'いつでもモード切り替え可能、記入中でも！',

    aiFeaturesTitle: 'AI機能',
    autoSummaryTitle: '自動要約',
    autoSummaryDesc: 'AIが重要な洞察と感情を捉えた簡潔な要約を生成します',
    aiReflectionTitle: 'AI振り返り',
    aiReflectionDesc: '記入後に「AIとチャット」をクリックして、より深く探求できます',
    timelineSummariesTitle: 'タイムライン要約',
    timelineSummariesDesc: 'タイムラインビューで素早くスキャンするためのAI要約を確認',

    viewingTitle: '日記を見る',
    calendarViewTitle: 'カレンダービュー',
    calendarViewDesc: '月間の気分絵文字、パターン把握、1日の複数の日記を表示',
    timelineViewTitle: 'タイムラインビュー',
    timelineViewDesc: 'AI要約とともに時系列で日記をスクロール',
    entryPanelTitle: '日記パネル',
    entryPanelDesc: '読む、インライン編集(Notionスタイル)、日記間の移動 - 自動保存',

    organizingTitle: '日記を整理',
    addingPhotosTitle: '写真を追加',
    addingPhotosDesc: 'ドラッグ&ドロップまたはクリックして画像を追加（各最大5MB）',
    editingTitle: '日記を編集',
    editingDesc: 'どこでもクリックして編集、変更は自動保存',

    proTipsTitle: 'プロのヒント＆ベストプラクティス',
    tip1Title: '1日3件を最大限に活用',
    tip1Desc: '朝の意図、午後の瞬間、夜の振り返り',
    tip2Title: 'AIを賢く活用',
    tip2Desc: '詰まったときはチャットモードを使用、より深い洞察のためのフォローアップ質問',
    tip3Title: '持続可能な習慣を作る',
    tip3Desc: '一貫した時間設定、無理をしない、量より質',

    limitsTitle: '制限について理解する',
    dailyLimitTitle: '1日の日記制限（1日3件）',
    dailyLimitDesc: 'この穏やかな制限は、意味のある振り返りと持続可能な習慣を促します',
    photoLimitTitle: '写真制限',
    photoLimitDesc: '写真1枚あたり最大5MB',

    faqTitle: 'よくある質問',
    faq1: '過去の日付について書けますか？',
    faq1A: 'はい！カレンダーで任意の日付をクリックして、その日の日記を書けます。',
    faq2: 'AI会話はどうなりますか？',
    faq2A: 'すべての会話は日記とともにプライベートに保存されます。',
    faq3: '日記をエクスポートできますか？',
    faq3A: 'この機能は近日公開予定です！',

    needHelpTitle: 'ヘルプが必要ですか？',
    contactEmail: 'support@polaris-lab.net',

    closingMessage: '日記を書く「正しい」方法はありません。小説を書いても一文だけでも、AIを使っても使わなくても、haruはあなたの旅をサポートします。',
    happyJournaling: '楽しい日記ライフを！ 💕'
  },
  cn: {
    back: '返回',
    whyHaruTitle: '为什么叫"haru"？',
    whyHaruDescription1: '"haru"在韩语中意为"一天"。',
    whyHaruDescription2: '我们将这个应用命名为haru，因为每一天——无论多么平静或混乱——都值得被记住、被反思、被珍惜。',
    whyHaruDescription3: '有些日子你需要写作。有些日子你只需要有人倾听。haru为这两者而存在——帮助您感受到被看见、被听见、被理解，一天一天地。',
    getStarted: '开始您的旅程',

    // How to Use Guide
    guideTitle: '如何使用haru',
    guideSubtitle: 'AI驱动的个人日记',

    gettingStartedTitle: '开始使用',
    step1Title: '创建账户',
    step1Desc: '使用电子邮箱和密码注册，通过6位验证码完成验证即可！',
    step2Title: '选择您的视图',
    step2Desc: '月度概览的日历视图或按时间顺序的时间线视图',

    writingTitle: '撰写您的第一篇日记',
    writingSubtitle: '点击+按钮开始。每天最多可写3篇 - 质量胜于数量！',
    chooseMood: '选择心情',
    chooseMoodDesc: '选择代表您今天感受的表情符号',

    twoWaysTitle: '两种写作方式',
    journalModeTitle: '日记模式',
    journalModeSubtitle: '传统写作',
    journalModeDesc: '添加标题，自由书写，附加照片。非常适合当您知道想说什么的时候。',
    aiChatModeTitle: 'AI对话模式',
    aiChatModeSubtitle: '对话式写作',
    aiChatModeDesc: '让AI用深思熟虑的问题引导您。非常适合需要帮助开始的时候。',
    switchAnytime: '随时切换模式，甚至在写作过程中！',

    aiFeaturesTitle: 'AI功能',
    autoSummaryTitle: '自动摘要',
    autoSummaryDesc: 'AI生成简洁摘要，捕捉关键洞察和情感',
    aiReflectionTitle: 'AI反思',
    aiReflectionDesc: '写作后点击"与AI聊天"，更深入地探索您的日记',
    timelineSummariesTitle: '时间线摘要',
    timelineSummariesDesc: '在时间线视图中查看AI生成的摘要，便于快速浏览',

    viewingTitle: '查看您的日记',
    calendarViewTitle: '日历视图',
    calendarViewDesc: '使用心情表情符号查看您的月度，发现模式，查看每天的多篇日记',
    timelineViewTitle: '时间线视图',
    timelineViewDesc: '按时间顺序滚动浏览带有AI摘要的日记',
    entryPanelTitle: '日记面板',
    entryPanelDesc: '阅读、内联编辑（Notion风格）、在日记之间导航 - 自动保存更改',

    organizingTitle: '整理您的日记',
    addingPhotosTitle: '添加照片',
    addingPhotosDesc: '拖放或点击添加图片（每张最大5MB）',
    editingTitle: '编辑日记',
    editingDesc: '点击任何位置进行编辑，更改会自动保存',

    proTipsTitle: '专业提示与最佳实践',
    tip1Title: '充分利用每天3篇日记',
    tip1Desc: '早晨的意图，午后的瞬间，晚上的反思',
    tip2Title: '明智地利用AI',
    tip2Desc: '遇到瓶颈时使用聊天模式，提出后续问题以获得更深入的洞察',
    tip3Title: '建立可持续的习惯',
    tip3Desc: '设定固定时间，不要强迫自己，质量胜于数量',

    limitsTitle: '了解限制',
    dailyLimitTitle: '每日日记限制（每天3篇）',
    dailyLimitDesc: '这个温和的限制鼓励有意义的反思和可持续的习惯',
    photoLimitTitle: '照片限制',
    photoLimitDesc: '每张照片最大5MB',

    faqTitle: '常见问题',
    faq1: '我可以写过去日期的日记吗？',
    faq1A: '可以！在日历上点击任何日期，即可为那天写日记。',
    faq2: '我的AI对话会怎样？',
    faq2A: '所有对话都会与您的日记一起私密保存。',
    faq3: '我可以导出日记吗？',
    faq3A: '此功能即将推出！',

    needHelpTitle: '需要帮助？',
    contactEmail: 'support@polaris-lab.net',

    closingMessage: '写日记没有"正确"的方式。无论您是写小说还是单句，使用AI还是不使用，haru都在这里支持您的旅程。',
    happyJournaling: '祝您日记愉快！ 💕'
  }
}

// Placeholder component for images
const ImagePlaceholder = ({ label, className = "" }: { label: string, className?: string }) => (
  <div className={`bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300 ${className}`}>
    <div className="text-center p-8">
      <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
      <p className="text-sm text-gray-500 font-medium">{label}</p>
    </div>
  </div>
)

export function LearnMore() {
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

      {/* Why Haru Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-3xl lg:text-4xl text-gray-800 mb-8">
            {t.whyHaruTitle}
          </h1>

          <div className="space-y-6 max-w-2xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-700 font-light"
            >
              {t.whyHaruDescription1}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              {highlightHaru(t.whyHaruDescription2)}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-sm"
            >
              <p className="text-base text-gray-700 leading-relaxed">
                {highlightHaru(t.whyHaruDescription3)}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="border-t-2 border-gradient-to-r from-pink-200 via-rose-200 to-orange-200"></div>
      </div>

      {/* How to Use Guide Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 lg:py-24">
        {/* Guide Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl text-gray-800 mb-4">
            {t.guideTitle}
          </h2>
          <p className="text-xl text-gray-600">{t.guideSubtitle}</p>
        </motion.div>

        {/* Getting Started */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-3xl text-gray-800">{t.gettingStartedTitle}</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-100 to-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">1️⃣</span>
                </div>
                <div>
                  <h4 className="text-lg text-gray-800 mb-2">{t.step1Title}</h4>
                  <p className="text-gray-600">{t.step1Desc}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-100 to-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">2️⃣</span>
                </div>
                <div>
                  <h4 className="text-lg text-gray-800 mb-2">{t.step2Title}</h4>
                  <p className="text-gray-600">{t.step2Desc}</p>
                </div>
              </div>
            </div>
          </div>

          <ImagePlaceholder label="📸 Screenshot: Sign up & Calendar/Timeline View Toggle" className="h-80" />
        </motion.div>

        {/* Writing Your First Entry */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-rose-100 to-orange-100 rounded-xl flex items-center justify-center">
              <Edit3 className="w-6 h-6 text-rose-600" />
            </div>
            <h3 className="text-3xl text-gray-800">{t.writingTitle}</h3>
          </div>

          <p className="text-lg text-gray-600 mb-8">{t.writingSubtitle}</p>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Heart className="w-8 h-8 text-pink-600" />
              <div>
                <h4 className="text-xl text-gray-800">{t.chooseMood}</h4>
                <p className="text-gray-600">{t.chooseMoodDesc}</p>
              </div>
            </div>
            <div className="flex gap-2 justify-center mt-6">
              {['😊', '😌', '🥰', '🤔', '😢', '😠', '😴', '🎉', '💪', '🌟'].map((emoji, i) => (
                <div key={i} className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-2xl shadow-sm">
                  {emoji}
                </div>
              ))}
            </div>
          </div>

          <ImagePlaceholder label="📸 Screenshot: New Entry with Mood Selection" className="h-80" />
        </motion.div>

        {/* Two Ways to Write */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-3xl text-gray-800">{t.twoWaysTitle}</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Journal Mode */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border-2 border-pink-200">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-rose-100 rounded-xl flex items-center justify-center mb-4">
                <PenTool className="w-6 h-6 text-pink-600" />
              </div>
              <h4 className="text-xl text-gray-800 mb-2">{t.journalModeTitle}</h4>
              <p className="text-sm text-gray-500 mb-4">{t.journalModeSubtitle}</p>
              <p className="text-gray-600 mb-4">{t.journalModeDesc}</p>
              <ImagePlaceholder label="📸 Journal Mode UI" className="h-48" />
            </div>

            {/* AI Chat Mode */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 shadow-sm border-2 border-purple-200">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="text-xl text-gray-800 mb-2">{t.aiChatModeTitle}</h4>
              <p className="text-sm text-gray-500 mb-4">{t.aiChatModeSubtitle}</p>
              <p className="text-gray-600 mb-4">{t.aiChatModeDesc}</p>
              <ImagePlaceholder label="📸 AI Chat Mode UI" className="h-48" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-2xl p-6 text-center">
            <Sparkles className="w-8 h-8 text-orange-600 mx-auto mb-3" />
            <p className="text-lg text-gray-800 font-medium">{t.switchAnytime}</p>
          </div>

          <div className="mt-8">
            <ImagePlaceholder label="📸 Screenshot: Mode Switch Button in Action" className="h-64" />
          </div>
        </motion.div>

        {/* AI Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-3xl text-gray-800">{t.aiFeaturesTitle}</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5 text-purple-600" />
              </div>
              <h4 className="text-lg text-gray-800 mb-2">{t.autoSummaryTitle}</h4>
              <p className="text-sm text-gray-600">{t.autoSummaryDesc}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-5 h-5 text-pink-600" />
              </div>
              <h4 className="text-lg text-gray-800 mb-2">{t.aiReflectionTitle}</h4>
              <p className="text-sm text-gray-600">{t.aiReflectionDesc}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-rose-600" />
              </div>
              <h4 className="text-lg text-gray-800 mb-2">{t.timelineSummariesTitle}</h4>
              <p className="text-sm text-gray-600">{t.timelineSummariesDesc}</p>
            </div>
          </div>

          <ImagePlaceholder label="📸 Screenshot: AI Summary & Reflection Example" className="h-80" />
        </motion.div>

        {/* Viewing Your Entries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-3xl text-gray-800">{t.viewingTitle}</h3>
          </div>

          <div className="space-y-8">
            {/* Calendar View */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <Calendar className="w-8 h-8 text-green-600" />
                <div>
                  <h4 className="text-xl text-gray-800">{t.calendarViewTitle}</h4>
                  <p className="text-gray-600">{t.calendarViewDesc}</p>
                </div>
              </div>
              <ImagePlaceholder label="📸 Screenshot: Calendar View with Mood Emojis" className="h-80 mt-4" />
            </div>

            {/* Timeline View */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-4">
                <Clock className="w-8 h-8 text-blue-600" />
                <div>
                  <h4 className="text-xl text-gray-800">{t.timelineViewTitle}</h4>
                  <p className="text-gray-600">{t.timelineViewDesc}</p>
                </div>
              </div>
              <ImagePlaceholder label="📸 Screenshot: Timeline View with AI Summaries" className="h-80 mt-4" />
            </div>

            {/* Entry Panel */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <BookOpen className="w-8 h-8 text-purple-600" />
                <div>
                  <h4 className="text-xl text-gray-800">{t.entryPanelTitle}</h4>
                  <p className="text-gray-600">{t.entryPanelDesc}</p>
                </div>
              </div>
              <ImagePlaceholder label="📸 Screenshot: Entry Panel (Side Panel)" className="h-80 mt-4" />
            </div>
          </div>
        </motion.div>

        {/* Organizing Your Entries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-rose-100 rounded-xl flex items-center justify-center">
              <ImageIcon className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-3xl text-gray-800">{t.organizingTitle}</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <ImageIcon className="w-10 h-10 text-orange-500 mb-4" />
              <h4 className="text-xl text-gray-800 mb-2">{t.addingPhotosTitle}</h4>
              <p className="text-gray-600 mb-4">{t.addingPhotosDesc}</p>
              <ImagePlaceholder label="📸 Screenshot: Photo Upload UI" className="h-48" />
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <Edit3 className="w-10 h-10 text-pink-500 mb-4" />
              <h4 className="text-xl text-gray-800 mb-2">{t.editingTitle}</h4>
              <p className="text-gray-600 mb-4">{t.editingDesc}</p>
              <ImagePlaceholder label="📸 Screenshot: Inline Editing (Notion-style)" className="h-48" />
            </div>
          </div>
        </motion.div>

        {/* Pro Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl flex items-center justify-center">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="text-3xl text-gray-800">{t.proTipsTitle}</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200">
              <div className="flex items-center gap-3 mb-4">
                <Sunrise className="w-8 h-8 text-orange-500" />
                <Coffee className="w-8 h-8 text-orange-500" />
                <Moon className="w-8 h-8 text-orange-500" />
              </div>
              <h4 className="text-lg text-gray-800 mb-2">{t.tip1Title}</h4>
              <p className="text-sm text-gray-600">{t.tip1Desc}</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
              <Sparkles className="w-8 h-8 text-purple-500 mb-4" />
              <h4 className="text-lg text-gray-800 mb-2">{t.tip2Title}</h4>
              <p className="text-sm text-gray-600">{t.tip2Desc}</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
              <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
              <h4 className="text-lg text-gray-800 mb-2">{t.tip3Title}</h4>
              <p className="text-sm text-gray-600">{t.tip3Desc}</p>
            </div>
          </div>
        </motion.div>

        {/* Understanding Limits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
              <HelpCircle className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-3xl text-gray-800">{t.limitsTitle}</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">3️⃣</span>
                <h4 className="text-lg text-gray-800">{t.dailyLimitTitle}</h4>
              </div>
              <p className="text-gray-600">{t.dailyLimitDesc}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <ImageIcon className="w-6 h-6 text-orange-600" />
                <h4 className="text-lg text-gray-800">{t.photoLimitTitle}</h4>
              </div>
              <p className="text-gray-600">{t.photoLimitDesc}</p>
            </div>
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-rose-100 rounded-xl flex items-center justify-center">
              <HelpCircle className="w-6 h-6 text-pink-600" />
            </div>
            <h3 className="text-3xl text-gray-800">{t.faqTitle}</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h4 className="text-lg text-gray-800 mb-2">{t.faq1}</h4>
              <p className="text-gray-600">{t.faq1A}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h4 className="text-lg text-gray-800 mb-2">{t.faq2}</h4>
              <p className="text-gray-600">{t.faq2A}</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h4 className="text-lg text-gray-800 mb-2">{t.faq3}</h4>
              <p className="text-gray-600">{t.faq3A}</p>
            </div>
          </div>
        </motion.div>

        {/* Need Help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 text-center">
            <Mail className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-2xl text-gray-800 mb-4">{t.needHelpTitle}</h3>
            <a
              href={`mailto:${t.contactEmail}`}
              className="text-lg text-purple-600 hover:text-purple-700 font-medium"
            >
              {t.contactEmail}
            </a>
          </div>
        </motion.div>

        {/* Closing Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-10 shadow-sm max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {highlightHaru(t.closingMessage)}
            </p>
            <p className="text-2xl text-gray-800">
              {t.happyJournaling}
            </p>
          </div>

          <button
            onClick={() => window.location.href = 'https://apps.apple.com/app/haru-mood-tracker-diary/id6444790942'}
            className="mt-8 inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-xl hover:from-pink-500 hover:to-rose-500 transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
          >
            {t.getStarted}
            <ChevronRight className="w-5 h-5" />
          </button>
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
