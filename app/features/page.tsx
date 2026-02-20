import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '기능',
  description: 'NeuralX의 AI 기반 예측 분석, 뉴럴 프로세싱, 실시간 스트리밍 등 강력한 기능을 살펴보세요.',
}

export default function FeaturesPage() {
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93L12 22" />
          <path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.58 3.25 3.93" />
          <path d="M8.56 13a8 8 0 0 0-2.3 3.5" />
          <path d="M15.44 13a8 8 0 0 1 2.3 3.5" />
        </svg>
      ),
      title: '예측 분석',
      description: 'ML 모델 기반 예측 분석으로 비즈니스 트렌드를 사전에 파악하고 의사결정을 지원합니다.',
      details: [
        '자연어 처리(NLP) 기반 문서 분석',
        '예측 분석을 통한 의사결정 지원',
        '자동화된 워크플로우 최적화',
        '실시간 데이터 처리 및 분석',
      ],
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M7 7h.01" />
          <path d="M17 7h.01" />
          <path d="M7 17h.01" />
          <path d="M17 17h.01" />
          <path d="M12 12h.01" />
        </svg>
      ),
      title: '뉴럴 프로세싱',
      description: '딥러닝 아키텍처로 비정형 데이터를 처리하고 패턴을 자동으로 인식합니다.',
      details: [
        'Transformer 기반 자연어 이해',
        'CNN/RNN 하이브리드 모델',
        'Transfer Learning 지원',
        'AutoML 파이프라인',
      ],
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
      title: '엔터프라이즈 보안',
      description: 'SOC2 Type II 인증과 E2E 암호화로 데이터를 보호합니다.',
      details: [
        'AES-256-GCM 암호화',
        '2단계 인증(2FA/MFA)',
        'GDPR 및 HIPAA 규정 준수',
        '정기적인 보안 감사 및 침투 테스트',
      ],
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      title: '실시간 스트리밍',
      description: '밀리초 단위의 실시간 데이터 스트리밍으로 지연 없는 인사이트를 제공합니다.',
      details: [
        'Apache Kafka 네이티브 통합',
        'WebSocket 실시간 푸시',
        'Event-driven architecture',
        'Stream processing pipeline',
      ],
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 20V10" />
          <path d="M12 20V4" />
          <path d="M6 20v-6" />
        </svg>
      ),
      title: '오토 스케일링',
      description: '트래픽에 따라 자동으로 리소스를 확장하고 축소하여 비용을 최적화합니다.',
      details: [
        'Kubernetes 기반 오케스트레이션',
        'GPU 클러스터 자동 스케일링',
        '비용 최적화 알고리즘',
        'Zero-downtime 배포',
      ],
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      title: '글로벌 엣지 네트워크',
      description: '전 세계 50+ 리전에 분산된 엣지 네트워크로 빠른 응답을 보장합니다.',
      details: [
        '50+ 글로벌 엣지 로케이션',
        'CDN 통합 캐싱',
        'Anycast DNS 라우팅',
        '자동 failover 및 복구',
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <section className="pt-28 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-primary text-sm font-semibold mb-3 tracking-wide uppercase">Features</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              확장성을 위해 설계,{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                속도를 위해 최적화
              </span>
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              프로덕션 환경에서 검증된 AI 인프라로 아이디어를 빠르게 실현하세요.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white border border-slate-200 rounded-2xl p-6 card-hover"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-500">
                      <svg className="w-4 h-4 text-primary/60 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
            오늘 바로 시작하세요
          </h2>
          <p className="text-slate-500 text-lg mb-8">
            무료 체험으로 모든 기능을 직접 경험해보세요.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-lg transition-all text-sm shadow-lg shadow-blue-500/20"
          >
            무료로 시작하기
          </Link>
        </div>
      </section>
    </main>
  )
}
