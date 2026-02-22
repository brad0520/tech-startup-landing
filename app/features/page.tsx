'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const featureBlocks = [
  {
    tag: 'Inference',
    title: '실시간 AI 추론 엔진',
    desc: '수백만 건의 동시 요청을 밀리초 단위로 처리하는 분산 GPU 추론 클러스터. 자동 배치 처리와 모델 캐싱으로 비용 대비 최고 성능을 제공합니다.',
    specs: ['평균 12ms 레이턴시', 'GPU A100 / H100 지원', '자동 배치 최적화', 'WebSocket 스트리밍'],
    code: `const stream = await nx.infer({
  model: "enterprise-v3",
  input: "Q3 매출 분석 요청",
  stream: true,
});

for await (const chunk of stream) {
  process.stdout.write(chunk.text);
}`,
  },
  {
    tag: 'Pipeline',
    title: 'ML 파이프라인 자동화',
    desc: '데이터 수집, 전처리, 학습, 평가, 배포까지 전체 머신러닝 라이프사이클을 선언적 코드로 관리합니다. GitOps 방식의 모델 버전 관리를 지원합니다.',
    specs: ['선언적 파이프라인 DSL', 'GitOps 모델 버전관리', 'A/B 테스트 내장', 'Canary 배포'],
    code: `const pipeline = nx.pipeline("revenue-forecast")
  .extract("s3://sales-data/2026/*")
  .transform([normalize, featureEngineer])
  .train({
    model: "xgboost",
    hyperparams: { depth: 6, lr: 0.01 },
  })
  .evaluate({ metric: "rmse", threshold: 0.05 })
  .deploy({ traffic: { v2: 90, v3: 10 } });`,
  },
  {
    tag: 'Monitor',
    title: '실시간 모니터링 대시보드',
    desc: '모델 성능, API 호출량, 에러율, 비용을 실시간으로 모니터링합니다. 이상 탐지 알림과 자동 스케일링 트리거를 지원합니다.',
    specs: ['실시간 메트릭 수집', '커스텀 알림 설정', '자동 스케일링', '비용 최적화 리포트'],
    code: `nx.monitor.watch("production-model", {
  metrics: ["latency", "error_rate", "throughput"],
  alerts: [{
    condition: "error_rate > 0.01",
    channel: "slack:#ml-ops",
    action: "auto-rollback"
  }],
  scaling: {
    min: 2, max: 16,
    target: { cpu: 0.7, gpu_memory: 0.8 }
  }
});`,
  },
  {
    tag: 'Security',
    title: '엔터프라이즈급 보안',
    desc: 'SOC2 Type II, ISO 27001, GDPR 인증을 보유하고 있으며, 데이터는 전송 중·저장 시 모두 AES-256으로 암호화됩니다.',
    specs: ['SOC2 Type II 인증', 'VPC 내부 배포', 'RBAC / SSO 지원', 'Audit 로그 90일 보관'],
    code: `nx.auth.configure({
  sso: {
    provider: "okta",
    domain: "company.okta.com"
  },
  rbac: {
    "ml-engineer": ["deploy", "train", "read"],
    "data-analyst": ["read", "query"],
    "admin": ["*"]
  },
  audit: { retention: "90d", export: "s3" }
});`,
  },
]

export default function FeaturesPage() {
  const revealRefs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        })
      },
      { threshold: 0.1 }
    )
    revealRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const addRef = (el: HTMLDivElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el)
  }

  return (
    <main className="min-h-screen bg-black pt-24">
      <section className="py-20 lg:py-28 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="font-mono text-xs text-emerald tracking-widest uppercase">Features</span>
          <h1 className="text-4xl lg:text-6xl font-black text-white mt-4 tracking-tight">
            Everything you need to<br />
            <span className="text-emerald glow-emerald">ship AI at scale</span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            추론, 학습, 배포, 모니터링까지 — 하나의 SDK로 전체 AI 인프라를 제어합니다.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        {featureBlocks.map((f, i) => (
          <section
            key={f.tag}
            ref={addRef}
            className={`reveal py-24 lg:py-32 ${i < featureBlocks.length - 1 ? 'border-b border-white/5' : ''}`}
          >
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
              <div className={i % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                <span className="inline-block font-mono text-xs text-black bg-emerald px-2 py-0.5 rounded font-semibold">
                  {f.tag}
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mt-4 tracking-tight">{f.title}</h2>
                <p className="text-slate-400 mt-4 leading-relaxed text-lg">{f.desc}</p>
                <ul className="mt-6 space-y-3">
                  {f.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-3 text-sm text-slate-300">
                      <span className="text-emerald">✓</span>
                      <span className="font-mono">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`terminal-window ${i % 2 === 1 ? 'lg:[direction:ltr]' : ''}`}>
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500/80" />
                  <div className="terminal-dot bg-yellow-500/80" />
                  <div className="terminal-dot bg-green-500/80" />
                  <span className="ml-2 text-xs font-mono text-slate-500">{f.tag.toLowerCase()}.ts</span>
                </div>
                <pre className="p-5 font-mono text-sm text-emerald-light/80 leading-relaxed overflow-x-auto">
                  <code>{f.code}</code>
                </pre>
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="py-24 border-t border-white/5 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-black text-white tracking-tight">Ready to build?</h2>
          <p className="mt-4 text-slate-400 font-mono text-sm">10,000 free API calls. No credit card required.</p>
          <Link
            href="/contact"
            className="inline-block mt-6 font-mono text-sm bg-emerald hover:bg-emerald-light text-black font-semibold px-8 py-3 rounded-md transition-all"
          >
            $ neuralx init
          </Link>
        </div>
      </section>
    </main>
  )
}
