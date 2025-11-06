'use client'

import React, { useState, useEffect } from 'react'
import { Heart, FileText, Users, AlertTriangle, CheckCircle, XCircle, Check, X, User, Smartphone, Target, CreditCard, RefreshCw, Phone, Bot, Shield, Mail, Scale, RotateCcw, Square } from 'lucide-react'
import { motion } from 'framer-motion'

type Language = 'en' | 'ko' | 'ja' | 'cn'

const translations = {
  en: {
    back: 'Back',
    badge: 'Terms of Service',
    title: 'Terms of Service',
    subtitle: 'Simple, fair terms for using haru. We believe in keeping things straightforward.',
    lastUpdated: 'Last updated: November 2025',

    // Quick Overview
    basicsTitle: 'The Basics',
    canDoTitle: 'What you can do',
    canDo1: 'Write up to 3 diary entries per day',
    canDo2: 'Chat with AI about your thoughts',
    canDo3: 'Switch between AI chat and writing modes',
    canDo4: 'Cancel your subscription anytime',
    cantDoTitle: "What you can't do",
    cantDo1: 'Share accounts with others',
    cantDo2: 'Use the service illegally',
    cantDo3: 'Try to hack or abuse the system',
    cantDo4: 'Resell or redistribute the service',

    // Using haru
    usingTitle: 'Using haru',
    accountTitle: 'Your Account',
    accountDesc: "You're responsible for keeping your account secure and for all activities under your account. Please use a strong password and don't share your login credentials.",
    availabilityTitle: 'Service Availability',
    availabilityDesc: "We aim for 99.9% uptime, but sometimes we need to perform maintenance or updates. We'll give you advance notice whenever possible.",
    intendedTitle: 'Intended Use',
    intendedDesc: "haru is designed for personal diary writing and self-reflection. While our AI can provide emotional support, it's not a replacement for professional mental health care.",

    // Content & Data
    contentTitle: 'Your Content & Data',
    ownershipTitle: 'Your diary entries belong to you',
    ownershipDesc: 'You own all the content you create in haru. We never claim ownership of your diary entries, thoughts, or personal reflections. You can delete your content anytime.',
    guidelinesTitle: 'Content Guidelines',
    guidelinesDesc: "Please keep your diary entries legal and don't use haru to plan or coordinate illegal activities. While your entries are private, this helps us maintain a safe service for everyone.",
    backupsTitle: 'Backups & Sync',
    backupsDesc: 'We automatically back up your encrypted diary entries to provide sync across devices and prevent data loss. You can turn off sync in your settings if you prefer local-only storage.',

    // Payments
    paymentsTitle: 'Payments & Subscriptions',
    subscriptionTitle: 'Subscription Plans',
    subscriptionDesc: 'haru offers monthly and annual subscription plans. All plans include up to 3 daily entries, AI conversations, and mode switching. You can change or cancel your plan anytime.',
    billingTitle: 'Billing & Refunds',
    billingDesc: 'Subscriptions automatically renew unless cancelled. We offer 7-day free trials for new users. Refunds are available within 14 days of purchase if you\'re not satisfied.',
    cancellationTitle: 'Cancellation',
    cancellationDesc: "Cancel anytime from your account settings. You'll keep access until your current billing period ends. Your data remains accessible for 90 days after cancellation.",

    // AI Features
    aiTitle: 'AI Features & Privacy',
    aiConversationsTitle: 'AI Conversations',
    aiConversationsDesc: "Our AI is designed to provide emotional support and writing prompts. It's trained to be helpful, harmless, and honest, but may occasionally provide inaccurate information. Always use your best judgment.",
    privacyProtectionTitle: 'Privacy Protection',
    privacyProtectionDesc: "Your conversations with AI are end-to-end encrypted and never used to train other AI models. We process your entries only to provide the AI features you've requested.",
    notMedicalTitle: 'Not Medical Advice',
    notMedicalDesc: "While our AI can provide emotional support, it's not a replacement for professional therapy, counseling, or medical advice. Please consult qualified professionals for serious mental health concerns.",

    // Acceptable Use
    acceptableTitle: 'Acceptable Use',
    prohibitedTitle: 'Prohibited Activities',
    prohibited1: 'Using haru for illegal activities or planning harmful actions',
    prohibited2: 'Attempting to hack, reverse engineer, or compromise the service',
    prohibited3: 'Sharing your account or reselling access to the service',
    prohibited4: 'Using automated tools to spam or abuse the AI features',

    // Service Changes
    changesTitle: 'Service Changes & Termination',
    updatesTitle: 'Updates & Changes',
    updatesDesc: "We regularly improve haru with new features and updates. We'll notify you of significant changes that affect these terms or your experience.",
    terminationTitle: 'Service Termination',
    terminationDesc: "We reserve the right to suspend or terminate accounts that violate these terms. If we discontinue the service, we'll give you 60 days notice to access your data.",

    // Liability
    liabilityTitle: 'Limitation of Liability',
    liabilityDesc1: 'We provide haru "as is" and do our best to keep it running smoothly. However, we can\'t guarantee the service will always be available or error-free.',
    liabilityDesc2: "Our liability is limited to the amount you've paid for the service in the past 12 months. We're not liable for indirect damages or data loss, though we work hard to prevent these issues.",

    // Contact & Disputes
    disputesTitle: 'Questions & Disputes',
    contactTitle: 'Contact Us',
    contactDesc: 'Questions about these terms? Email us at',
    governingTitle: 'Governing Law',
    governingDesc: "These terms are governed by the laws of South Korea. We'll try to resolve any disputes amicably before pursuing legal action.",

    // Updates
    termsUpdatesTitle: 'Terms Updates',
    termsUpdatesDesc: "We may update these terms occasionally to reflect service changes or legal requirements. We'll notify you via email and app notification at least 30 days before major changes take effect. Your continued use of haru means you accept the updated terms."
  },
  ko: {
    back: '뒤로',
    badge: '이용약관',
    title: '이용약관',
    subtitle: 'haru를 사용하기 위한 간단하고 공정한 약관입니다. 당사는 명확하고 간결한 약관을 제공하고자 합니다.',
    lastUpdated: '최종 업데이트: 2025년 11월',

    // Quick Overview
    basicsTitle: '기본 사항',
    canDoTitle: '가능한 사항',
    canDo1: '하루 최대 3개의 일기 작성',
    canDo2: 'AI와 생각 나누기',
    canDo3: 'AI 대화 모드와 작성 모드 전환',
    canDo4: '언제든지 구독 취소',
    cantDoTitle: '금지된 사항',
    cantDo1: '계정 타인과 공유',
    cantDo2: '불법적인 서비스 사용',
    cantDo3: '시스템 해킹 또는 악용 시도',
    cantDo4: '서비스 재판매 또는 재배포',

    // Using haru
    usingTitle: 'haru 사용하기',
    accountTitle: '고객님의 계정',
    accountDesc: '고객님께서는 계정 보안 및 계정 내 모든 활동에 대한 책임을 지십니다. 강력한 비밀번호를 사용하시고, 로그인 정보를 타인과 공유하지 마십시오.',
    availabilityTitle: '서비스 가용성',
    availabilityDesc: '당사는 99.9%의 가동 시간을 목표로 하고 있으나, 유지보수 또는 업데이트를 위해 서비스가 일시 중단될 수 있습니다. 가능한 한 사전에 공지해 드리겠습니다.',
    intendedTitle: '사용 목적',
    intendedDesc: 'haru는 개인 일기 작성 및 자기 성찰을 위해 설계되었습니다. AI가 감정적 지원을 제공할 수 있으나, 전문적인 정신건강 치료를 대체하지 않습니다.',

    // Content & Data
    contentTitle: '고객님의 콘텐츠 및 데이터',
    ownershipTitle: '일기는 고객님의 소유입니다',
    ownershipDesc: 'haru에서 작성하신 모든 콘텐츠는 고객님의 소유입니다. 당사는 고객님의 일기, 생각, 개인적 성찰에 대한 소유권을 주장하지 않습니다. 언제든지 콘텐츠를 삭제하실 수 있습니다.',
    guidelinesTitle: '콘텐츠 가이드라인',
    guidelinesDesc: '일기 내용은 법적으로 적법해야 하며, haru를 불법 활동 계획 또는 조직을 위해 사용하지 마십시오. 고객님의 일기는 비공개이지만, 이는 모든 사용자를 위한 안전한 서비스 유지에 도움이 됩니다.',
    backupsTitle: '백업 및 동기화',
    backupsDesc: '당사는 기기 간 동기화 및 데이터 손실 방지를 위해 암호화된 일기를 자동으로 백업합니다. 로컬 저장만 원하시는 경우 설정에서 동기화를 비활성화하실 수 있습니다.',

    // Payments
    paymentsTitle: '결제 및 구독',
    subscriptionTitle: '구독 플랜',
    subscriptionDesc: 'haru는 월간 및 연간 구독 플랜을 제공합니다. 모든 플랜에는 일일 최대 3개 일기 작성, AI 대화, 모드 전환 기능이 포함됩니다. 언제든지 플랜을 변경하거나 취소하실 수 있습니다.',
    billingTitle: '청구 및 환불',
    billingDesc: '구독은 취소하지 않는 한 자동으로 갱신됩니다. 신규 사용자에게는 7일 무료 체험을 제공합니다. 구매 후 14일 이내에 만족하지 않으시면 환불이 가능합니다.',
    cancellationTitle: '구독 취소',
    cancellationDesc: '계정 설정에서 언제든지 취소하실 수 있습니다. 현재 결제 기간이 종료될 때까지 서비스 이용이 가능합니다. 데이터는 취소 후 90일간 접근 가능합니다.',

    // AI Features
    aiTitle: 'AI 기능 및 개인정보 보호',
    aiConversationsTitle: 'AI 대화',
    aiConversationsDesc: '당사의 AI는 감정적 지원과 작성 프롬프트를 제공하도록 설계되었습니다. 유용하고 안전하며 정직하도록 훈련되었으나, 간혹 부정확한 정보를 제공할 수 있습니다. 항상 고객님의 판단을 최우선으로 하십시오.',
    privacyProtectionTitle: '개인정보 보호',
    privacyProtectionDesc: 'AI와의 대화는 종단간 암호화되며 다른 AI 모델 학습에 절대 사용되지 않습니다. 당사는 고객님이 요청하신 AI 기능 제공을 위해서만 일기를 처리합니다.',
    notMedicalTitle: '의료 조언 아님',
    notMedicalDesc: 'AI가 감정적 지원을 제공할 수 있으나, 전문 치료, 상담 또는 의료 조언을 대체하지 않습니다. 심각한 정신건강 문제는 자격을 갖춘 전문가와 상담하시기 바랍니다.',

    // Acceptable Use
    acceptableTitle: '허용 가능한 사용',
    prohibitedTitle: '금지된 활동',
    prohibited1: '불법 활동 또는 유해한 행동 계획을 위한 haru 사용',
    prohibited2: '서비스 해킹, 역설계 또는 침해 시도',
    prohibited3: '계정 공유 또는 서비스 접근 권한 재판매',
    prohibited4: '자동화 도구를 사용한 스팸 또는 AI 기능 악용',

    // Service Changes
    changesTitle: '서비스 변경 및 종료',
    updatesTitle: '업데이트 및 변경사항',
    updatesDesc: '당사는 정기적으로 새로운 기능과 업데이트를 통해 haru를 개선합니다. 본 약관 또는 서비스 경험에 영향을 미치는 중요한 변경사항은 사전에 공지해 드립니다.',
    terminationTitle: '서비스 종료',
    terminationDesc: '당사는 본 약관을 위반하는 계정을 정지하거나 종료할 권리를 보유합니다. 서비스를 중단하는 경우 데이터 접근을 위해 60일 전에 공지해 드립니다.',

    // Liability
    liabilityTitle: '책임의 제한',
    liabilityDesc1: '당사는 haru를 "있는 그대로" 제공하며 원활한 운영을 위해 최선을 다합니다. 그러나 서비스가 항상 이용 가능하거나 오류가 없음을 보장할 수 없습니다.',
    liabilityDesc2: '당사의 책임은 지난 12개월간 고객님께서 서비스에 지불하신 금액으로 제한됩니다. 당사는 간접적 손해나 데이터 손실에 대해 책임지지 않으나, 이러한 문제를 방지하기 위해 노력하고 있습니다.',

    // Contact & Disputes
    disputesTitle: '문의 및 분쟁',
    contactTitle: '문의하기',
    contactDesc: '본 약관에 대한 문의사항이 있으신가요? 다음 이메일로 연락 주십시오:',
    governingTitle: '준거법',
    governingDesc: '본 약관은 대한민국 법률의 적용을 받습니다. 당사는 법적 조치를 취하기 전에 우호적으로 분쟁을 해결하고자 노력할 것입니다.',

    // Updates
    termsUpdatesTitle: '약관 업데이트',
    termsUpdatesDesc: '당사는 서비스 변경 또는 법적 요구사항을 반영하기 위해 때때로 본 약관을 업데이트할 수 있습니다. 주요 변경사항이 적용되기 최소 30일 전에 이메일과 앱 알림을 통해 공지해 드립니다. haru를 계속 사용하시는 것은 업데이트된 약관에 동의하시는 것을 의미합니다.'
  },
  ja: {
    back: '戻る',
    badge: '利用規約',
    title: '利用規約',
    subtitle: 'haruを使用するためのシンプルで公正な規約です。私たちは明確で簡潔な規約の提供を目指しています。',
    lastUpdated: '最終更新: 2025年11月',

    // Quick Overview
    basicsTitle: '基本事項',
    canDoTitle: 'できること',
    canDo1: '1日最大3つの日記を記入',
    canDo2: 'AIとの対話',
    canDo3: 'AIチャットモードと執筆モードの切り替え',
    canDo4: 'いつでもサブスクリプションのキャンセル',
    cantDoTitle: 'できないこと',
    cantDo1: '他者とのアカウント共有',
    cantDo2: '違法なサービスの使用',
    cantDo3: 'システムのハッキングまたは悪用の試み',
    cantDo4: 'サービスの再販売または再配布',

    // Using haru
    usingTitle: 'haruの使用',
    accountTitle: 'お客様のアカウント',
    accountDesc: 'お客様はアカウントのセキュリティおよびアカウント内のすべての活動に責任を負います。強力なパスワードを使用し、ログイン情報を他人と共有しないでください。',
    availabilityTitle: 'サービスの可用性',
    availabilityDesc: '当社は99.9%の稼働時間を目標としておりますが、メンテナンスまたはアップデートのためサービスが一時的に中断される場合があります。可能な限り事前に通知いたします。',
    intendedTitle: '使用目的',
    intendedDesc: 'haruは個人的な日記の記入と自己反省のために設計されています。AIが感情的サポートを提供できますが、専門的なメンタルヘルスケアの代替にはなりません。',

    // Content & Data
    contentTitle: 'お客様のコンテンツとデータ',
    ownershipTitle: '日記はお客様のものです',
    ownershipDesc: 'haruで作成されたすべてのコンテンツはお客様のものです。当社はお客様の日記、思考、個人的な反省に対する所有権を主張いたしません。いつでもコンテンツを削除できます。',
    guidelinesTitle: 'コンテンツガイドライン',
    guidelinesDesc: '日記の内容は合法である必要があり、haruを違法活動の計画や調整に使用しないでください。お客様の日記は非公開ですが、これはすべてのユーザーのための安全なサービス維持に役立ちます。',
    backupsTitle: 'バックアップと同期',
    backupsDesc: '当社はデバイス間の同期とデータ損失の防止のため、暗号化された日記を自動的にバックアップします。ローカル保存のみをご希望の場合は、設定で同期を無効にできます。',

    // Payments
    paymentsTitle: '支払いとサブスクリプション',
    subscriptionTitle: 'サブスクリプションプラン',
    subscriptionDesc: 'haruは月間および年間サブスクリプションプランを提供しています。すべてのプランには1日最大3つの日記記入、AI会話、モード切り替え機能が含まれています。いつでもプランを変更またはキャンセルできます。',
    billingTitle: '請求と払い戻し',
    billingDesc: 'サブスクリプションはキャンセルされない限り自動的に更新されます。新規ユーザーには7日間の無料トライアルを提供しています。購入後14日以内にご満足いただけない場合は払い戻しが可能です。',
    cancellationTitle: 'キャンセル',
    cancellationDesc: 'アカウント設定からいつでもキャンセルできます。現在の請求期間が終了するまでサービスをご利用いただけます。データはキャンセル後90日間アクセス可能です。',

    // AI Features
    aiTitle: 'AI機能とプライバシー',
    aiConversationsTitle: 'AI会話',
    aiConversationsDesc: '当社のAIは感情的サポートと執筆プロンプトを提供するように設計されています。有用で安全かつ誠実であるよう訓練されていますが、時折不正確な情報を提供する可能性があります。常にお客様の判断を最優先してください。',
    privacyProtectionTitle: 'プライバシー保護',
    privacyProtectionDesc: 'AIとの会話はエンドツーエンドで暗号化され、他のAIモデルのトレーニングには決して使用されません。当社はお客様が要求されたAI機能を提供するためにのみ日記を処理します。',
    notMedicalTitle: '医療アドバイスではありません',
    notMedicalDesc: 'AIが感情的サポートを提供できますが、専門的な治療、カウンセリング、または医療アドバイスの代替にはなりません。深刻なメンタルヘルスの問題については、資格のある専門家にご相談ください。',

    // Acceptable Use
    acceptableTitle: '許容される使用',
    prohibitedTitle: '禁止されている活動',
    prohibited1: '違法活動または有害な行動の計画のためのharuの使用',
    prohibited2: 'サービスのハッキング、リバースエンジニアリング、または侵害の試み',
    prohibited3: 'アカウントの共有またはサービスアクセス権の再販売',
    prohibited4: '自動化ツールを使用したスパムまたはAI機能の悪用',

    // Service Changes
    changesTitle: 'サービスの変更と終了',
    updatesTitle: 'アップデートと変更',
    updatesDesc: '当社は定期的に新機能とアップデートによりharuを改善しています。本規約またはサービス体験に影響を与える重要な変更は事前に通知いたします。',
    terminationTitle: 'サービスの終了',
    terminationDesc: '当社は本規約に違反するアカウントを停止または終了する権利を有します。サービスを中止する場合、データへのアクセスのため60日前に通知いたします。',

    // Liability
    liabilityTitle: '責任の制限',
    liabilityDesc1: '当社はharuを「現状のまま」提供し、スムーズな運営のために最善を尽くします。ただし、サービスが常に利用可能またはエラーフリーであることを保証できません。',
    liabilityDesc2: '当社の責任は過去12か月間にお客様がサービスに支払った金額に制限されます。当社は間接的な損害やデータ損失に対して責任を負いませんが、これらの問題を防ぐために努力しています。',

    // Contact & Disputes
    disputesTitle: 'お問い合わせと紛争',
    contactTitle: 'お問い合わせ',
    contactDesc: '本規約についてご質問がありますか？次のメールアドレスまでご連絡ください：',
    governingTitle: '準拠法',
    governingDesc: '本規約は大韓民国の法律の適用を受けます。当社は法的措置を取る前に友好的に紛争を解決するよう努めます。',

    // Updates
    termsUpdatesTitle: '規約の更新',
    termsUpdatesDesc: '当社はサービスの変更または法的要件を反映するため、時折本規約を更新する場合があります。主要な変更が適用される少なくとも30日前にメールとアプリ通知を通じて通知いたします。haruを引き続き使用することは、更新された規約に同意することを意味します。'
  },
  cn: {
    back: '返回',
    badge: '服务条款',
    title: '服务条款',
    subtitle: '使用haru的简单、公平条款。我们致力于提供清晰简洁的条款。',
    lastUpdated: '最后更新：2025年11月',

    // Quick Overview
    basicsTitle: '基本事项',
    canDoTitle: '您可以做的',
    canDo1: '每天最多写3篇日记',
    canDo2: '与AI聊天分享想法',
    canDo3: '在AI聊天模式和写作模式之间切换',
    canDo4: '随时取消订阅',
    cantDoTitle: '您不能做的',
    cantDo1: '与他人共享账户',
    cantDo2: '非法使用服务',
    cantDo3: '尝试黑客攻击或滥用系统',
    cantDo4: '转售或重新分发服务',

    // Using haru
    usingTitle: '使用haru',
    accountTitle: '您的账户',
    accountDesc: '您负责保护账户安全以及账户下的所有活动。请使用强密码，不要与他人共享登录凭据。',
    availabilityTitle: '服务可用性',
    availabilityDesc: '我们的目标是99.9%的正常运行时间，但有时需要进行维护或更新。我们会尽可能提前通知您。',
    intendedTitle: '使用目的',
    intendedDesc: 'haru专为个人日记写作和自我反思而设计。虽然我们的AI可以提供情感支持，但它不能替代专业的心理健康护理。',

    // Content & Data
    contentTitle: '您的内容和数据',
    ownershipTitle: '您的日记归您所有',
    ownershipDesc: '您在haru中创建的所有内容均归您所有。我们绝不会声称拥有您的日记、想法或个人反思的所有权。您可以随时删除内容。',
    guidelinesTitle: '内容指南',
    guidelinesDesc: '请确保您的日记内容合法，不要使用haru计划或协调非法活动。虽然您的日记是私密的，但这有助于我们为所有人维护安全的服务。',
    backupsTitle: '备份与同步',
    backupsDesc: '我们会自动备份您的加密日记，以提供跨设备同步并防止数据丢失。如果您偏好仅本地存储，可以在设置中关闭同步。',

    // Payments
    paymentsTitle: '付款和订阅',
    subscriptionTitle: '订阅计划',
    subscriptionDesc: 'haru提供月度和年度订阅计划。所有计划包括每天最多3篇日记、AI对话和模式切换功能。您可以随时更改或取消计划。',
    billingTitle: '计费和退款',
    billingDesc: '除非取消，否则订阅会自动续订。我们为新用户提供7天免费试用。如果您不满意，可在购买后14天内申请退款。',
    cancellationTitle: '取消',
    cancellationDesc: '您可以随时从账户设置中取消。您将保留访问权限直到当前计费周期结束。数据在取消后90天内仍可访问。',

    // AI Features
    aiTitle: 'AI功能和隐私',
    aiConversationsTitle: 'AI对话',
    aiConversationsDesc: '我们的AI旨在提供情感支持和写作提示。它被训练成有用、安全和诚实的，但偶尔可能提供不准确的信息。请始终运用您的最佳判断。',
    privacyProtectionTitle: '隐私保护',
    privacyProtectionDesc: '您与AI的对话是端到端加密的，绝不会用于训练其他AI模型。我们仅为提供您请求的AI功能而处理您的日记。',
    notMedicalTitle: '非医疗建议',
    notMedicalDesc: '虽然我们的AI可以提供情感支持，但它不能替代专业治疗、咨询或医疗建议。对于严重的心理健康问题，请咨询合格的专业人士。',

    // Acceptable Use
    acceptableTitle: '可接受的使用',
    prohibitedTitle: '禁止的活动',
    prohibited1: '使用haru进行非法活动或策划有害行为',
    prohibited2: '尝试黑客攻击、逆向工程或破坏服务',
    prohibited3: '共享账户或转售服务访问权限',
    prohibited4: '使用自动化工具发送垃圾邮件或滥用AI功能',

    // Service Changes
    changesTitle: '服务变更和终止',
    updatesTitle: '更新和变更',
    updatesDesc: '我们定期通过新功能和更新改进haru。我们会提前通知您影响本条款或您的体验的重大变更。',
    terminationTitle: '服务终止',
    terminationDesc: '我们保留暂停或终止违反本条款的账户的权利。如果我们停止服务，我们会提前60天通知您访问数据。',

    // Liability
    liabilityTitle: '责任限制',
    liabilityDesc1: '我们按"现状"提供haru，并尽最大努力保持其顺利运行。但是，我们不能保证服务始终可用或无错误。',
    liabilityDesc2: '我们的责任限于您在过去12个月内为服务支付的金额。我们不对间接损害或数据丢失负责，但我们努力防止这些问题。',

    // Contact & Disputes
    disputesTitle: '问题和争议',
    contactTitle: '联系我们',
    contactDesc: '对本条款有疑问？请发送电子邮件至：',
    governingTitle: '适用法律',
    governingDesc: '本条款受大韩民国法律管辖。我们会在采取法律行动之前尝试友好解决任何争议。',

    // Updates
    termsUpdatesTitle: '条款变更',
    termsUpdatesDesc: '我们可能会不时更新这些条款以反映服务变更或法律要求。我们会在重大变更生效前至少30天通过电子邮件和应用通知您。您继续使用haru即表示您接受更新的条款。'
  }
}

export function TermsOfService() {
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
              <FileText className="w-4 h-4" />
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

          {/* Quick Overview */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12">
            <h2 className="text-xl text-gray-800 mb-6 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              {t.basicsTitle}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-gray-800 mb-2 flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-1" />
                  {t.canDoTitle}
                </h3>
                <ul className="text-sm text-gray-600 space-y-1 ml-6">
                  <li>• {t.canDo1}</li>
                  <li>• {t.canDo2}</li>
                  <li>• {t.canDo3}</li>
                  <li>• {t.canDo4}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-gray-800 mb-2 flex items-center gap-2">
                  <X className="w-4 h-4 text-red-600 mt-1" />
                  {t.cantDoTitle}
                </h3>
                <ul className="text-sm text-gray-600 space-y-1 ml-6">
                  <li>• {t.cantDo1}</li>
                  <li>• {t.cantDo2}</li>
                  <li>• {t.cantDo3}</li>
                  <li>• {t.cantDo4}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Detailed Terms */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-8">
            
            {/* Account & Service */}
            <section>
              <h2 className="text-2xl text-gray-800 mb-4">{t.usingTitle}</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg text-gray-800 mb-2 flex items-center gap-2">
                    <User className="w-4 h-4 text-pink-600" />
                    {t.accountTitle}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {t.accountDesc}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg text-gray-800 mb-2 flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-pink-600" />
                    {t.availabilityTitle}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {t.availabilityDesc}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg text-gray-800 mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4 text-pink-600" />
                    {t.intendedTitle}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {t.intendedDesc}
                  </p>
                </div>
              </div>
            </section>

            {/* Content & Data */}
            <section>
              <h2 className="text-2xl text-gray-800 mb-4">{t.contentTitle}</h2>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 mb-4">
                <h3 className="text-lg text-gray-800 mb-3 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-pink-600" />
                  {t.ownershipTitle}
                </h3>
                <p className="text-gray-600">
                  {t.ownershipDesc}
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <h3 className="text-gray-800 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-600" />
                    {t.guidelinesTitle}
                  </h3>
                  <p className="text-gray-600">
                    {t.guidelinesDesc}
                  </p>
                </div>
                <div>
                  <h3 className="text-gray-800 flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-blue-600" />
                    {t.backupsTitle}
                  </h3>
                  <p className="text-gray-600">
                    {t.backupsDesc}
                  </p>
                </div>
              </div>
            </section>

            {/* Payments & Subscriptions */}
            <section>
              <h2 className="text-2xl text-gray-800 mb-4">{t.paymentsTitle}</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg text-gray-800 mb-2 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-pink-600" />
                    {t.subscriptionTitle}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {t.subscriptionDesc}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg text-gray-800 mb-2 flex items-center gap-2">
                    <RotateCcw className="w-4 h-4 text-pink-600" />
                    {t.billingTitle}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {t.billingDesc}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg text-gray-800 mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-pink-600" />
                    {t.cancellationTitle}
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {t.cancellationDesc}
                  </p>
                </div>
              </div>
            </section>

            {/* AI & Privacy */}
            <section>
              <h2 className="text-2xl text-gray-800 mb-4">{t.aiTitle}</h2>

              <div className="space-y-3">
                <div>
                  <h3 className="text-gray-800 flex items-center gap-2">
                    <Bot className="w-4 h-4 text-blue-600" />
                    {t.aiConversationsTitle}
                  </h3>
                  <p className="text-gray-600">
                    {t.aiConversationsDesc}
                  </p>
                </div>
                <div>
                  <h3 className="text-gray-800 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-blue-600" />
                    {t.privacyProtectionTitle}
                  </h3>
                  <p className="text-gray-600">
                    {t.privacyProtectionDesc}
                  </p>
                </div>
                <div>
                  <h3 className="text-gray-800 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-600" />
                    {t.notMedicalTitle}
                  </h3>
                  <p className="text-gray-600">
                    {t.notMedicalDesc}
                  </p>
                </div>
              </div>
            </section>

            {/* Acceptable Use */}
            <section>
              <h2 className="text-2xl text-gray-800 mb-4">{t.acceptableTitle}</h2>

              <div className="bg-red-50 rounded-lg p-6 mb-4">
                <h3 className="text-lg text-gray-800 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  {t.prohibitedTitle}
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>{t.prohibited1}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>{t.prohibited2}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>{t.prohibited3}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>{t.prohibited4}</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Service Changes */}
            <section>
              <h2 className="text-2xl text-gray-800 mb-4">{t.changesTitle}</h2>

              <div className="space-y-3">
                <div>
                  <h3 className="text-gray-800 flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-blue-600" />
                    {t.updatesTitle}
                  </h3>
                  <p className="text-gray-600">
                    {t.updatesDesc}
                  </p>
                </div>
                <div>
                  <h3 className="text-gray-800 flex items-center gap-2">
                    <Square className="w-4 h-4 text-red-600" />
                    {t.terminationTitle}
                  </h3>
                  <p className="text-gray-600">
                    {t.terminationDesc}
                  </p>
                </div>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl text-gray-800 mb-4">{t.liabilityTitle}</h2>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  {t.liabilityDesc1}
                </p>
                <p className="text-gray-600">
                  {t.liabilityDesc2}
                </p>
              </div>
            </section>

            {/* Contact & Disputes */}
            <section>
              <h2 className="text-2xl text-gray-800 mb-4">{t.disputesTitle}</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-gray-800 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-600" />
                    {t.contactTitle}
                  </h3>
                  <p className="text-gray-600">
                    {t.contactDesc} <a href="mailto:support@polaris-lab.net" className="text-pink-600 hover:text-pink-700">support@polaris-lab.net</a>
                  </p>
                </div>
                <div>
                  <h3 className="text-gray-800 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-blue-600" />
                    {t.governingTitle}
                  </h3>
                  <p className="text-gray-600">
                    {t.governingDesc}
                  </p>
                </div>
              </div>
            </section>

            {/* Updates */}
            <section>
              <h2 className="text-2xl text-gray-800 mb-4">{t.termsUpdatesTitle}</h2>
              <p className="text-gray-600">
                {t.termsUpdatesDesc}
              </p>
            </section>

          </div>
        </motion.div>
      </div>
    </div>
  )
}