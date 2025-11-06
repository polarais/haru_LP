'use client'

import React, { useState, useEffect } from 'react'
import { Heart, Mail, MessageCircle, Clock, Send, CheckCircle, User, HelpCircle } from 'lucide-react'
import { motion } from 'framer-motion'

type Language = 'en' | 'ko' | 'ja' | 'cn'

const translations = {
  en: {
    back: 'Back',
    badge: 'Contact Us',
    title: 'Get in Touch',
    subtitle: 'Have questions or feedback? We\'d love to hear from you.',

    // Form
    formTitle: 'Send us a Message',
    nameLabel: 'Your Name',
    namePlaceholder: 'Enter your name',
    emailLabel: 'Email Address',
    emailPlaceholder: 'Enter your email',
    categoryLabel: 'What can we help you with?',
    categoryPlaceholder: 'Select a category',
    categoryTechnical: 'Technical Support',
    categoryBilling: 'Billing & Subscriptions',
    categoryFeature: 'Feature Request',
    categoryBug: 'Bug Report',
    categoryPrivacy: 'Privacy & Security',
    categoryFeedback: 'General Feedback',
    categoryOther: 'Other',
    messageLabel: 'Your Message',
    messagePlaceholder: 'Tell us how we can help you...',
    sendButton: 'Send Message',

    // Success
    successTitle: 'Message Sent!',
    successMessage: 'Thank you for reaching out. We\'ve received your message and will get back to you within 24 hours.',
    sendAnother: 'Send Another Message',

    // Contact Methods
    emailSupportTitle: 'Email Support',
    emailSupportDesc: 'Get help with your account, billing, or technical issues',
    generalInquiriesTitle: 'General Inquiries',
    generalInquiriesDesc: 'Questions about features, partnerships, or media requests',
    responseTimeTitle: 'Response Time',
    responseTimeDesc: 'We typically respond within',
    responseTime: '24 hours',

    // FAQ
    faqTitle: 'Frequently Asked Questions',
    faq1Q: 'How many entries can I write per day?',
    faq1A: 'You can write up to 3 entries per day. This limit helps you build a sustainable journaling habit while focusing on quality over quantity.',
    faq2Q: 'Can I cancel my subscription anytime?',
    faq2A: 'Yes! You can cancel anytime from Settings → Subscription. You\'ll keep access until your current billing period ends.',
    faq3Q: 'Is my diary content really private?',
    faq3A: 'Absolutely. Your entries are end-to-end encrypted before leaving your device. Even we can\'t read your diary content.',
    faq4Q: 'How does the AI understand my emotions?',
    faq4A: 'Our AI uses advanced language models trained on emotional understanding, but it processes your text locally on your device for privacy.',
    faq5Q: 'Do you offer student discounts?',
    faq5A: 'Yes! Contact us with your student email for a 50% discount on annual subscriptions.',

    // Community
    communityTitle: 'Join Our Community',
    communityDesc: 'Connect with other haru users, share tips, and stay updated on new features.',
    twitterButton: 'Follow us on Twitter',
    discordButton: 'Join our Discord'
  },
  ko: {
    back: '뒤로',
    badge: '문의하기',
    title: '연락하기',
    subtitle: '질문이나 피드백이 있으신가요? 언제든지 연락 주시기 바랍니다.',

    // Form
    formTitle: '메시지 보내기',
    nameLabel: '성함',
    namePlaceholder: '성함을 입력해 주세요',
    emailLabel: '이메일 주소',
    emailPlaceholder: '이메일을 입력해 주세요',
    categoryLabel: '문의 유형을 선택해 주세요',
    categoryPlaceholder: '문의 유형 선택',
    categoryTechnical: '기술 지원',
    categoryBilling: '결제 및 구독',
    categoryFeature: '기능 요청',
    categoryBug: '버그 신고',
    categoryPrivacy: '개인정보 보호 및 보안',
    categoryFeedback: '일반 피드백',
    categoryOther: '기타',
    messageLabel: '문의 내용',
    messagePlaceholder: '문의하실 내용을 작성해 주세요...',
    sendButton: '메시지 전송',

    // Success
    successTitle: '메시지가 전송되었습니다!',
    successMessage: '문의해 주셔서 감사합니다. 24시간 이내에 답변드리겠습니다.',
    sendAnother: '다른 메시지 보내기',

    // Contact Methods
    emailSupportTitle: '이메일 지원',
    emailSupportDesc: '계정, 결제 또는 기술적인 문제에 대한 지원을 받으실 수 있습니다',
    generalInquiriesTitle: '일반 문의',
    generalInquiriesDesc: '기능, 파트너십 또는 미디어 관련 문의',
    responseTimeTitle: '응답 시간',
    responseTimeDesc: '일반적으로 다음 시간 내에 답변드립니다',
    responseTime: '24시간',

    // FAQ
    faqTitle: '자주 묻는 질문',
    faq1Q: '하루에 몇 개의 일기를 작성할 수 있나요?',
    faq1A: '하루 최대 3개의 일기를 작성하실 수 있습니다. 이 제한은 지속 가능한 일기 습관을 형성하고 양보다 질에 집중하실 수 있도록 돕기 위함입니다.',
    faq2Q: '구독을 언제든지 취소할 수 있나요?',
    faq2A: '네! 설정 → 구독에서 언제든지 취소하실 수 있습니다. 현재 결제 기간이 종료될 때까지 서비스를 계속 이용하실 수 있습니다.',
    faq3Q: '일기 내용이 정말 비공개인가요?',
    faq3A: '물론입니다. 일기는 기기에서 나가기 전에 종단간 암호화됩니다. 당사조차 고객님의 일기 내용을 읽을 수 없습니다.',
    faq4Q: 'AI는 어떻게 감정을 이해하나요?',
    faq4A: '당사의 AI는 감정 이해를 위해 훈련된 고급 언어 모델을 사용하지만, 개인정보 보호를 위해 고객님의 기기에서 로컬로 텍스트를 처리합니다.',
    faq5Q: '학생 할인을 제공하나요?',
    faq5A: '네! 학생 이메일과 함께 문의해 주시면 연간 구독에 대해 50% 할인을 제공합니다.',

    // Community
    communityTitle: '커뮤니티에 참여하세요',
    communityDesc: '다른 haru 사용자들과 소통하고, 팁을 공유하며, 새로운 기능에 대한 소식을 받아보세요.',
    twitterButton: 'Twitter에서 팔로우하기',
    discordButton: 'Discord 참여하기'
  },
  ja: {
    back: '戻る',
    badge: 'お問い合わせ',
    title: 'お問い合わせ',
    subtitle: 'ご質問やフィードバックがございますか？お気軽にご連絡ください。',

    // Form
    formTitle: 'メッセージを送信',
    nameLabel: 'お名前',
    namePlaceholder: 'お名前を入力してください',
    emailLabel: 'メールアドレス',
    emailPlaceholder: 'メールアドレスを入力してください',
    categoryLabel: 'お問い合わせ内容',
    categoryPlaceholder: 'カテゴリを選択してください',
    categoryTechnical: '技術サポート',
    categoryBilling: '請求・サブスクリプション',
    categoryFeature: '機能リクエスト',
    categoryBug: 'バグ報告',
    categoryPrivacy: 'プライバシー・セキュリティ',
    categoryFeedback: '一般的なフィードバック',
    categoryOther: 'その他',
    messageLabel: 'メッセージ',
    messagePlaceholder: 'お問い合わせ内容を入力してください...',
    sendButton: 'メッセージを送信',

    // Success
    successTitle: 'メッセージを送信しました！',
    successMessage: 'お問い合わせいただきありがとうございます。24時間以内にご返信いたします。',
    sendAnother: '別のメッセージを送信',

    // Contact Methods
    emailSupportTitle: 'メールサポート',
    emailSupportDesc: 'アカウント、請求、または技術的な問題についてサポートを受けられます',
    generalInquiriesTitle: '一般的なお問い合わせ',
    generalInquiriesDesc: '機能、パートナーシップ、またはメディアに関するご質問',
    responseTimeTitle: '返信時間',
    responseTimeDesc: '通常、以下の時間内に返信いたします',
    responseTime: '24時間',

    // FAQ
    faqTitle: 'よくある質問',
    faq1Q: '1日に何件の日記を書けますか？',
    faq1A: '1日最大3件の日記を書くことができます。この制限は、量より質を重視し、持続可能な日記習慣を築くためのものです。',
    faq2Q: 'サブスクリプションはいつでもキャンセルできますか？',
    faq2A: 'はい！設定 → サブスクリプションからいつでもキャンセルできます。現在の請求期間が終了するまでアクセスできます。',
    faq3Q: '日記の内容は本当にプライベートですか？',
    faq3A: 'もちろんです。日記はデバイスから送信される前にエンドツーエンドで暗号化されます。当社でさえお客様の日記の内容を読むことはできません。',
    faq4Q: 'AIはどのように感情を理解しますか？',
    faq4A: '当社のAIは感情理解のために訓練された高度な言語モデルを使用していますが、プライバシーのためにお客様のデバイスでローカルにテキストを処理します。',
    faq5Q: '学生割引はありますか？',
    faq5A: 'はい！学生メールアドレスでお問い合わせいただければ、年間サブスクリプションが50%割引になります。',

    // Community
    communityTitle: 'コミュニティに参加',
    communityDesc: '他のharuユーザーとつながり、ヒントを共有し、新機能の情報を入手しましょう。',
    twitterButton: 'Twitterでフォロー',
    discordButton: 'Discordに参加'
  },
  cn: {
    back: '返回',
    badge: '联系我们',
    title: '联系我们',
    subtitle: '有问题或反馈？我们很乐意听取您的意见。',

    // Form
    formTitle: '发送消息',
    nameLabel: '您的姓名',
    namePlaceholder: '请输入您的姓名',
    emailLabel: '电子邮件地址',
    emailPlaceholder: '请输入您的电子邮件',
    categoryLabel: '我们可以为您提供什么帮助？',
    categoryPlaceholder: '选择类别',
    categoryTechnical: '技术支持',
    categoryBilling: '付费与订阅',
    categoryFeature: '功能请求',
    categoryBug: 'Bug报告',
    categoryPrivacy: '隐私和安全',
    categoryFeedback: '一般反馈',
    categoryOther: '其他',
    messageLabel: '您的消息',
    messagePlaceholder: '告诉我们如何为您提供帮助...',
    sendButton: '发送消息',

    // Success
    successTitle: '消息已发送！',
    successMessage: '感谢您与我们联系。我们已收到您的消息，将在24小时内回复您。',
    sendAnother: '发送另一条消息',

    // Contact Methods
    emailSupportTitle: '电子邮件支持',
    emailSupportDesc: '获取有关账户、付费或技术问题的帮助',
    generalInquiriesTitle: '一般咨询',
    generalInquiriesDesc: '有关功能、合作伙伴关系或媒体请求的问题',
    responseTimeTitle: '响应时间',
    responseTimeDesc: '我们通常会在以下时间内回复',
    responseTime: '24小时',

    // FAQ
    faqTitle: '常见问题',
    faq1Q: '每天可以写多少篇日记？',
    faq1A: '您每天最多可以写3篇日记。这个限制有助于您建立可持续的日记习惯，同时注重质量而非数量。',
    faq2Q: '可以随时取消订阅吗？',
    faq2A: '可以！您可以随时从设置 → 订阅中取消。您将保留访问权限直到当前计费周期结束。',
    faq3Q: '我的日记内容真的是私密的吗？',
    faq3A: '绝对是。您的日记在离开设备之前会进行端到端加密。即使是我们也无法阅读您的日记内容。',
    faq4Q: 'AI如何理解我的情绪？',
    faq4A: '我们的AI使用为情感理解而训练的高级语言模型，但为了保护隐私，它会在您的设备上本地处理您的文本。',
    faq5Q: '提供学生折扣吗？',
    faq5A: '是的！使用您的学生电子邮件联系我们，可享受年度订阅50%的折扣。',

    // Community
    communityTitle: '加入我们的社区',
    communityDesc: '与其他haru用户交流，分享技巧，了解新功能的最新动态。',
    twitterButton: '在Twitter上关注我们',
    discordButton: '加入我们的Discord'
  }
}

export function Contact() {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const savedLanguage = localStorage.getItem('haru-language') as Language
    if (savedLanguage && ['en', 'ko', 'ja', 'cn'].includes(savedLanguage)) {
      setCurrentLanguage(savedLanguage)
    }
  }, [])

  const t = translations[currentLanguage]

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
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">{t.badge}</span>
            </div>
            <h1 className="text-3xl lg:text-4xl text-gray-800 mb-4 font-bold">
              {t.title}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12">
            {!isSubmitted ? (
              <>
                <h2 className="text-2xl text-gray-800 mb-6 text-center">{t.formTitle}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {t.nameLabel}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                        placeholder={t.namePlaceholder}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t.emailLabel}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                        placeholder={t.emailPlaceholder}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.categoryLabel}
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    >
                      <option value="">{t.categoryPlaceholder}</option>
                      <option value="technical">{t.categoryTechnical}</option>
                      <option value="billing">{t.categoryBilling}</option>
                      <option value="feature">{t.categoryFeature}</option>
                      <option value="bug">{t.categoryBug}</option>
                      <option value="privacy">{t.categoryPrivacy}</option>
                      <option value="feedback">{t.categoryFeedback}</option>
                      <option value="other">{t.categoryOther}</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                      placeholder={t.messagePlaceholder}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 px-6 rounded-lg hover:from-pink-600 hover:to-rose-600 transition-all duration-200 flex items-center justify-center gap-2 font-medium"
                  >
                    <Send className="w-4 h-4" />
                    {t.sendButton}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl text-gray-800 mb-4">{t.successTitle}</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  {t.successMessage}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-pink-600 hover:text-pink-700 font-medium"
                >
                  {t.sendAnother}
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
              <h3 className="text-lg text-gray-800 mb-2">{t.emailSupportTitle}</h3>
              <p className="text-sm text-gray-600 mb-3">{t.emailSupportDesc}</p>
              <a href="mailto:support@polaris-lab.net" className="text-pink-600 hover:text-pink-700 font-medium">
                support@polaris-lab.net
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-rose-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-lg text-gray-800 mb-2">{t.generalInquiriesTitle}</h3>
              <p className="text-sm text-gray-600 mb-3">{t.generalInquiriesDesc}</p>
              <a href="mailto:support@polaris-lab.net" className="text-pink-600 hover:text-pink-700 font-medium">
                support@polaris-lab.net
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-rose-100 to-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-lg text-gray-800 mb-2">{t.responseTimeTitle}</h3>
              <p className="text-sm text-gray-600 mb-3">{t.responseTimeDesc}</p>
              <div className="text-pink-600 font-medium">{t.responseTime}</div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mt-12">
            <h2 className="text-2xl text-gray-800 mb-6 text-center">{t.faqTitle}</h2>

            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <h3 className="text-lg text-gray-800 mb-2">{t.faq1Q}</h3>
                <p className="text-gray-600 text-sm">
                  {t.faq1A}
                </p>
              </div>

              <div className="border-b border-gray-100 pb-4">
                <h3 className="text-lg text-gray-800 mb-2">{t.faq2Q}</h3>
                <p className="text-gray-600 text-sm">
                  {t.faq2A}
                </p>
              </div>

              <div className="border-b border-gray-100 pb-4">
                <h3 className="text-lg text-gray-800 mb-2">{t.faq3Q}</h3>
                <p className="text-gray-600 text-sm">
                  {t.faq3A}
                </p>
              </div>

              <div className="border-b border-gray-100 pb-4">
                <h3 className="text-lg text-gray-800 mb-2">{t.faq4Q}</h3>
                <p className="text-gray-600 text-sm">
                  {t.faq4A}
                </p>
              </div>

              <div>
                <h3 className="text-lg text-gray-800 mb-2">{t.faq5Q}</h3>
                <p className="text-gray-600 text-sm">
                  {t.faq5A}
                </p>
              </div>
            </div>
          </div>

          {/* Community Links */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 text-center mt-12">
            <h2 className="text-2xl text-gray-800 mb-4">{t.communityTitle}</h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              {t.communityDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://twitter.com/haru_diary"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
              >
                {t.twitterButton}
              </a>
              <a
                href="https://discord.gg/haru"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
              >
                {t.discordButton}
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </div>
  )
}