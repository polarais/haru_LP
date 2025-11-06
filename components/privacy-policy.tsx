'use client'

import React, { useState, useEffect } from 'react'
import { Heart, Shield, Lock, Eye, Database, Globe, FileText, User, BarChart3, Download, Trash2, Edit, Pause, Check, X, Building2, Users } from 'lucide-react'
import { motion } from 'framer-motion'

type Language = 'en' | 'ko' | 'ja' | 'cn'

const translations = {
  en: {
    back: 'Back',
    badge: 'Privacy Policy',
    title: 'Your Privacy Matters',
    subtitle: 'We believe your diary entries are sacred. Here\'s how we protect them.',
    lastUpdated: 'Last updated: November 2025',
    quickSummary: 'Quick Summary',
    encrypted: 'End-to-End Encrypted',
    encryptedDesc: 'Your entries are encrypted before leaving your device',
    noSelling: 'No Data Selling',
    noSellingDesc: 'We make money from subscriptions, not your data',
    minimalCollection: 'Minimal Collection',
    minimalCollectionDesc: 'We only collect what\'s necessary to run the service',
    whatWeCollect: 'What Information We Collect',
    diaryContent: 'Your Diary Content',
    diaryContentDesc: 'Your diary entries, AI conversations, and personal reflections are stored with end-to-end encryption. We cannot read your content - only you can access it with your account.',
    accountInfo: 'Account Information',
    accountInfoDesc: 'Email address, display name (optional), and account preferences. We need this to provide you access to your diary.',
    usageAnalytics: 'Usage Analytics',
    usageAnalyticsDesc: 'Anonymous usage data like "how many entries were written today" to improve the app. This data cannot be linked back to you or your content.',
    howWeUse: 'How We Use Your Information',
    use1: 'Provide AI conversation features and writing assistance',
    use2: 'Sync your diary across your devices securely',
    use3: 'Send you important account and service updates',
    use4: 'Improve the app with anonymous usage insights',
    whatWeDont: 'What We Don\'t Do',
    dont1: 'Sell, rent, or share your personal data with third parties',
    dont2: 'Read your diary entries (they\'re encrypted)',
    dont3: 'Show you ads based on your diary content',
    dont4: 'Track you across other websites or apps',
    howWeProtect: 'How We Protect Your Data',
    encryption: 'Encryption',
    encryptionDesc: 'Your diary entries are encrypted on your device before being sent to our servers. We use AES-256 encryption - the same standard used by banks and governments.',
    infrastructure: 'Infrastructure',
    infrastructureDesc: 'We use enterprise-grade cloud infrastructure with regular security audits, automatic backups, and 99.9% uptime guarantees.',
    accessControls: 'Access Controls',
    accessControlsDesc: 'Only essential team members have access to systems, and no one can access your encrypted diary content.',
    yourRights: 'Your Rights',
    accessData: 'Access Your Data',
    accessDataDesc: 'View all your diary entries anytime in the app. Your data is always accessible to you.',
    deleteData: 'Delete Your Data',
    deleteDataDesc: 'Delete your account and all associated data permanently at any time.',
    correctData: 'Correct Your Data',
    correctDataDesc: 'Update your account information and preferences anytime.',
    pauseProcessing: 'Pause Processing',
    pauseProcessingDesc: 'Disable AI features if you prefer manual diary writing only.',
    questions: 'Questions?',
    questionsDesc1: 'We\'re happy to answer any questions about your privacy and data protection.',
    questionsDesc2: 'Email us at:',
    questionsDesc3: 'We typically respond within 24 hours.',
    policyUpdates: 'Policy Updates',
    policyUpdatesDesc: 'We may update this privacy policy occasionally. When we do, we\'ll notify you via email and update the "Last updated" date at the top. Your continued use of haru after updates means you accept the new terms.'
  },
  ko: {
    back: '뒤로',
    badge: '개인정보 처리방침',
    title: '고객님의 개인정보를 소중히 지킵니다',
    subtitle: '일기는 가장 사적인 공간입니다. haru가 고객님의 정보를 안전하게 보호하는 방법을 안내해 드립니다.',
    lastUpdated: '최종 업데이트: 2025년 11월',
    quickSummary: '핵심 요약',
    encrypted: '종단간 암호화',
    encryptedDesc: '모든 일기는 고객님의 기기에서 암호화된 후 전송됩니다',
    noSelling: '데이터 판매 없음',
    noSellingDesc: '구독료로 운영되며, 고객 데이터는 절대 판매하지 않습니다',
    minimalCollection: '최소한의 수집',
    minimalCollectionDesc: '서비스 제공에 꼭 필요한 정보만 수집합니다',
    whatWeCollect: '수집하는 정보',
    diaryContent: '일기 콘텐츠',
    diaryContentDesc: '일기, AI 대화, 개인 기록은 종단간 암호화로 저장됩니다. 당사는 고객님의 콘텐츠를 열람할 수 없으며, 오직 고객님만 계정을 통해 접근할 수 있습니다.',
    accountInfo: '계정 정보',
    accountInfoDesc: '이메일 주소, 닉네임(선택), 계정 설정 등을 수집합니다. 이는 일기 서비스 제공을 위해 필수적입니다.',
    usageAnalytics: '이용 분석',
    usageAnalyticsDesc: '"오늘 작성된 일기 수" 등 익명화된 사용 데이터를 수집하여 서비스를 개선합니다. 이 데이터는 개인이나 콘텐츠와 연결되지 않습니다.',
    howWeUse: '정보 활용 방식',
    use1: 'AI 대화 기능 및 글쓰기 지원 제공',
    use2: '여러 기기 간 일기 안전한 동기화',
    use3: '중요한 계정 및 서비스 업데이트 전송',
    use4: '익명 사용 패턴 분석을 통한 서비스 개선',
    whatWeDont: '절대 하지 않는 일',
    dont1: '제3자에게 개인정보 판매, 임대, 공유',
    dont2: '고객님의 일기 열람 (암호화되어 있습니다)',
    dont3: '일기 내용 기반 광고 표시',
    dont4: '다른 웹사이트나 앱에서 추적',
    howWeProtect: '데이터 보호 방식',
    encryption: '암호화',
    encryptionDesc: '일기는 서버 전송 전에 고객님의 기기에서 암호화됩니다. 은행과 정부 기관에서 사용하는 AES-256 암호화 기술을 적용하고 있습니다.',
    infrastructure: '인프라',
    infrastructureDesc: '정기 보안 감사, 자동 백업, 99.9% 가동률을 보장하는 엔터프라이즈급 클라우드 인프라를 사용합니다.',
    accessControls: '접근 제어',
    accessControlsDesc: '최소 필수 인원만 시스템 접근 권한을 보유하며, 암호화된 일기 콘텐츠는 누구도 열람할 수 없습니다.',
    yourRights: '고객님의 권리',
    accessData: '데이터 열람',
    accessDataDesc: '앱에서 언제든지 모든 일기를 확인하실 수 있습니다. 고객님의 데이터는 항상 접근 가능합니다.',
    deleteData: '데이터 삭제',
    deleteDataDesc: '언제든지 계정과 모든 관련 데이터를 영구적으로 삭제하실 수 있습니다.',
    correctData: '데이터 수정',
    correctDataDesc: '계정 정보와 설정을 언제든지 업데이트하실 수 있습니다.',
    pauseProcessing: '처리 일시중지',
    pauseProcessingDesc: '수동 일기 작성만 원하시면 AI 기능을 비활성화하실 수 있습니다.',
    questions: '문의사항',
    questionsDesc1: '개인정보 보호 및 데이터 관련 문의사항에 성심껏 답변드립니다.',
    questionsDesc2: '이메일:',
    questionsDesc3: '통상 24시간 이내 회신드립니다.',
    policyUpdates: '방침 변경',
    policyUpdatesDesc: '개인정보 처리방침은 필요 시 업데이트될 수 있습니다. 변경 시 이메일로 안내드리며 상단의 "최종 업데이트" 날짜가 갱신됩니다. 변경 후 haru를 계속 이용하시면 새로운 약관에 동의하신 것으로 간주됩니다.'
  },
  ja: {
    back: '戻る',
    badge: 'プライバシーポリシー',
    title: 'お客様のプライバシーを大切にします',
    subtitle: '日記は最もプライベートな空間です。haruがお客様の情報を安全に保護する方法をご案内いたします。',
    lastUpdated: '最終更新: 2025年11月',
    quickSummary: '要点',
    encrypted: 'エンドツーエンド暗号化',
    encryptedDesc: 'すべての日記はお客様のデバイスで暗号化されてから送信されます',
    noSelling: 'データ販売なし',
    noSellingDesc: 'サブスクリプションで運営しており、お客様のデータは一切販売いたしません',
    minimalCollection: '最小限の収集',
    minimalCollectionDesc: 'サービス提供に必要な情報のみ収集いたします',
    whatWeCollect: '収集する情報',
    diaryContent: '日記コンテンツ',
    diaryContentDesc: '日記、AI会話、個人的な記録はエンドツーエンド暗号化で保存されます。当社はお客様のコンテンツを閲覧できず、お客様のみがアカウントを通じてアクセスできます。',
    accountInfo: 'アカウント情報',
    accountInfoDesc: 'メールアドレス、表示名（任意）、アカウント設定などを収集します。これらは日記サービスの提供に必要不可欠です。',
    usageAnalytics: '利用分析',
    usageAnalyticsDesc: '「本日作成された日記数」などの匿名化された使用データを収集し、サービス改善に活用します。このデータは個人やコンテンツと紐付けられることはありません。',
    howWeUse: '情報の利用方法',
    use1: 'AI会話機能および執筆支援の提供',
    use2: '複数デバイス間での日記の安全な同期',
    use3: '重要なアカウントおよびサービス更新のお知らせ',
    use4: '匿名使用パターン分析によるサービス改善',
    whatWeDont: '絶対に行わないこと',
    dont1: '第三者への個人情報の販売、貸出、共有',
    dont2: 'お客様の日記の閲覧（暗号化されています）',
    dont3: '日記内容に基づく広告表示',
    dont4: '他のウェブサイトやアプリでの追跡',
    howWeProtect: 'データ保護方法',
    encryption: '暗号化',
    encryptionDesc: '日記はサーバー送信前にお客様のデバイスで暗号化されます。銀行や政府機関で使用されるAES-256暗号化技術を採用しています。',
    infrastructure: 'インフラ',
    infrastructureDesc: '定期的なセキュリティ監査、自動バックアップ、99.9%の稼働率を保証するエンタープライズグレードのクラウドインフラを使用しています。',
    accessControls: 'アクセス制御',
    accessControlsDesc: '最小限の必要人員のみがシステムへのアクセス権を保有しており、暗号化された日記コンテンツは誰も閲覧できません。',
    yourRights: 'お客様の権利',
    accessData: 'データ閲覧',
    accessDataDesc: 'アプリでいつでもすべての日記を確認いただけます。お客様のデータは常にアクセス可能です。',
    deleteData: 'データ削除',
    deleteDataDesc: 'いつでもアカウントとすべての関連データを完全に削除いただけます。',
    correctData: 'データ修正',
    correctDataDesc: 'アカウント情報と設定をいつでも更新いただけます。',
    pauseProcessing: '処理の一時停止',
    pauseProcessingDesc: '手動での日記作成のみをご希望の場合、AI機能を無効化いただけます。',
    questions: 'お問い合わせ',
    questionsDesc1: 'プライバシー保護およびデータに関するご質問に誠意を持ってお答えいたします。',
    questionsDesc2: 'メール:',
    questionsDesc3: '通常24時間以内に返信いたします。',
    policyUpdates: 'ポリシー変更',
    policyUpdatesDesc: 'プライバシーポリシーは必要に応じて更新される場合があります。変更時にはメールでお知らせし、上部の「最終更新」日付が更新されます。変更後もharuを継続してご利用いただく場合、新しい規約に同意したものとみなされます。'
  },
  cn: {
    back: '返回',
    badge: '隐私政策',
    title: '您的隐私至关重要',
    subtitle: '日记是最私密的空间。我们向您说明haru如何安全保护您的信息。',
    lastUpdated: '最后更新：2025年11月',
    quickSummary: '核心要点',
    encrypted: '端到端加密',
    encryptedDesc: '所有日记在您的设备上加密后传输',
    noSelling: '不出售数据',
    noSellingDesc: '我们通过订阅运营，绝不出售客户数据',
    minimalCollection: '最小化收集',
    minimalCollectionDesc: '仅收集提供服务所必需的信息',
    whatWeCollect: '收集的信息',
    diaryContent: '日记内容',
    diaryContentDesc: '日记、AI对话、个人记录均采用端到端加密存储。我们无法查看您的内容，只有您可以通过账户访问。',
    accountInfo: '账户信息',
    accountInfoDesc: '收集电子邮件地址、昵称（可选）、账户设置等。这些是提供日记服务的必要信息。',
    usageAnalytics: '使用分析',
    usageAnalyticsDesc: '收集"今日创建日记数"等匿名使用数据以改进服务。此数据不会与个人或内容关联。',
    howWeUse: '信息使用方式',
    use1: '提供AI对话功能和写作辅助',
    use2: '在多设备间安全同步日记',
    use3: '发送重要账户和服务更新',
    use4: '通过匿名使用模式分析改进服务',
    whatWeDont: '我们绝不会',
    dont1: '向第三方出售、出租或共享个人信息',
    dont2: '查看您的日记（已加密）',
    dont3: '基于日记内容显示广告',
    dont4: '在其他网站或应用中跟踪您',
    howWeProtect: '数据保护方式',
    encryption: '加密',
    encryptionDesc: '日记在服务器传输前即在您的设备上加密。我们采用银行和政府机构使用的AES-256加密技术。',
    infrastructure: '基础设施',
    infrastructureDesc: '使用企业级云基础设施，定期进行安全审计、自动备份，保证99.9%的运行时间。',
    accessControls: '访问控制',
    accessControlsDesc: '仅最少必要人员拥有系统访问权限，任何人都无法查看加密的日记内容。',
    yourRights: '您的权利',
    accessData: '访问数据',
    accessDataDesc: '您可以随时在应用中查看所有日记。您的数据始终可访问。',
    deleteData: '删除数据',
    deleteDataDesc: '您可以随时永久删除账户及所有相关数据。',
    correctData: '修正数据',
    correctDataDesc: '您可以随时更新账户信息和设置。',
    pauseProcessing: '暂停处理',
    pauseProcessingDesc: '如果您只希望手动写日记，可以停用AI功能。',
    questions: '咨询',
    questionsDesc1: '我们很乐意回答有关隐私保护和数据的任何问题。',
    questionsDesc2: '电子邮件:',
    questionsDesc3: '我们通常在24小时内回复。',
    policyUpdates: '政策更新',
    policyUpdatesDesc: '隐私政策可能会根据需要进行更新。变更时我们会通过电子邮件通知您，并更新顶部的"最后更新"日期。变更后继续使用haru即表示您同意新条款。'
  }
}

export function PrivacyPolicy() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('haru-language') as Language
    if (savedLanguage && ['en', 'ko', 'ja', 'cn'].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage)
    }
  }, [])

  const t = translations[currentLanguage]

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
              <span className="text-sm">{t.badge}</span>
            </div>
            <h1 className="text-3xl lg:text-4xl text-gray-800 mb-4 font-bold">
              {t.title}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.subtitle}
            </p>
            <p className="text-sm text-gray-500 mt-4">
              {t.lastUpdated}
            </p>
          </div>

          {/* Quick Summary */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12">
            <h2 className="text-xl text-gray-800 mb-6 flex items-center gap-2">
              <Eye className="w-5 h-5 text-pink-600" />
              {t.quickSummary}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Lock className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-gray-800 mb-2">{t.encrypted}</h3>
                <p className="text-sm text-gray-600">{t.encryptedDesc}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-gray-800 mb-2">{t.noSelling}</h3>
                <p className="text-sm text-gray-600">{t.noSellingDesc}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-gray-800 mb-2">{t.minimalCollection}</h3>
                <p className="text-sm text-gray-600">{t.minimalCollectionDesc}</p>
              </div>
            </div>
          </div>

          {/* Detailed Policy */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-8">
            
            {/* What We Collect */}
            <section>
              <h2 className="text-2xl text-gray-800 mb-4">{t.whatWeCollect}</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg text-gray-800 mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-pink-600" />
                    {t.diaryContent}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {t.diaryContentDesc}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg text-gray-800 mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-pink-600" />
                    {t.accountInfo}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {t.accountInfoDesc}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg text-gray-800 mb-2 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-pink-600" />
                    {t.usageAnalytics}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {t.usageAnalyticsDesc}
                  </p>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl text-gray-800 mb-4">{t.howWeUse}</h2>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-green-600 mt-1" />
                  <p className="text-gray-600">{t.use1}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-green-600 mt-1" />
                  <p className="text-gray-600">{t.use2}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-green-600 mt-1" />
                  <p className="text-gray-600">{t.use3}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-green-600 mt-1" />
                  <p className="text-gray-600">{t.use4}</p>
                </div>
              </div>
            </section>

            {/* What We DON'T Do */}
            <section>
              <h2 className="text-2xl text-gray-800 mb-4">{t.whatWeDont}</h2>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <X className="w-4 h-4 text-red-600 mt-1" />
                  <p className="text-gray-600">{t.dont1}</p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-4 h-4 text-red-600 mt-1" />
                  <p className="text-gray-600">{t.dont2}</p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-4 h-4 text-red-600 mt-1" />
                  <p className="text-gray-600">{t.dont3}</p>
                </div>
                <div className="flex items-start gap-3">
                  <X className="w-4 h-4 text-red-600 mt-1" />
                  <p className="text-gray-600">{t.dont4}</p>
                </div>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl text-gray-800 mb-4">{t.howWeProtect}</h2>

              <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-6">
                <h3 className="text-lg text-gray-800 mb-3 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-green-600" />
                  {t.encryption}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t.encryptionDesc}
                </p>

                <h3 className="text-lg text-gray-800 mb-3 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-blue-600" />
                  {t.infrastructure}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t.infrastructureDesc}
                </p>

                <h3 className="text-lg text-gray-800 mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-600" />
                  {t.accessControls}
                </h3>
                <p className="text-gray-600">
                  {t.accessControlsDesc}
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl text-gray-800 mb-4">{t.yourRights}</h2>

              <div className="space-y-3">
                <div>
                  <h3 className="text-gray-800 flex items-center gap-2">
                    <Download className="w-4 h-4 text-pink-600" />
                    {t.accessData}
                  </h3>
                  <p className="text-gray-600">{t.accessDataDesc}</p>
                </div>
                <div>
                  <h3 className="text-gray-800 flex items-center gap-2">
                    <Trash2 className="w-4 h-4 text-pink-600" />
                    {t.deleteData}
                  </h3>
                  <p className="text-gray-600">{t.deleteDataDesc}</p>
                </div>
                <div>
                  <h3 className="text-gray-800 flex items-center gap-2">
                    <Edit className="w-4 h-4 text-pink-600" />
                    {t.correctData}
                  </h3>
                  <p className="text-gray-600">{t.correctDataDesc}</p>
                </div>
                <div>
                  <h3 className="text-gray-800 flex items-center gap-2">
                    <Pause className="w-4 h-4 text-pink-600" />
                    {t.pauseProcessing}
                  </h3>
                  <p className="text-gray-600">{t.pauseProcessingDesc}</p>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl text-gray-800 mb-4">{t.questions}</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  {t.questionsDesc1}
                </p>
                <p className="text-gray-600">
                  {t.questionsDesc2} <a href="mailto:support@polaris-lab.net" className="text-pink-600 hover:text-pink-700">support@polaris-lab.net</a>
                </p>
                <p className="text-gray-600 mt-2">
                  {t.questionsDesc3}
                </p>
              </div>
            </section>

            {/* Updates */}
            <section>
              <h2 className="text-2xl text-gray-800 mb-4">{t.policyUpdates}</h2>
              <p className="text-gray-600">
                {t.policyUpdatesDesc}
              </p>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  )
}