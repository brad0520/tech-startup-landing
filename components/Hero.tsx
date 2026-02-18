'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

function NeuralNetworkVisualization() {
  const nodes = [
    { x: 20, y: 20 }, { x: 20, y: 50 }, { x: 20, y: 80 },
    { x: 50, y: 15 }, { x: 50, y: 40 }, { x: 50, y: 65 }, { x: 50, y: 90 },
    { x: 80, y: 30 }, { x: 80, y: 60 }, { x: 80, y: 85 },
  ]

  const connections = [
    [0, 3], [0, 4], [0, 5],
    [1, 3], [1, 4], [1, 5], [1, 6],
    [2, 4], [2, 5], [2, 6],
    [3, 7], [3, 8],
    [4, 7], [4, 8], [4, 9],
    [5, 7], [5, 8], [5, 9],
    [6, 8], [6, 9],
  ]

  return (
    <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
      {connections.map(([from, to], i) => (
        <line
          key={i}
          x1={nodes[from].x}
          y1={nodes[from].y}
          x2={nodes[to].x}
          y2={nodes[to].y}
          stroke="#10b981"
          strokeWidth="0.3"
          opacity="0.4"
        >
          <animate
            attributeName="opacity"
            values="0.2;0.6;0.2"
            dur={`${2 + (i % 4) * 0.5}s`}
            repeatCount="indefinite"
            begin={`${i * 0.1}s`}
          />
        </line>
      ))}
      {nodes.map((node, i) => (
        <circle
          key={i}
          cx={node.x}
          cy={node.y}
          r="2"
          fill="#10b981"
          opacity="0.6"
        >
          <animate
            attributeName="opacity"
            values="0.3;0.8;0.3"
            dur={`${2 + (i % 3) * 0.7}s`}
            repeatCount="indefinite"
            begin={`${i * 0.2}s`}
          />
          <animate
            attributeName="r"
            values="1.5;2.5;1.5"
            dur={`${3 + (i % 3)}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  )
}

function AIChatMockup() {
  return (
    <div className="w-full max-w-sm">
      <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl shadow-emerald-900/10">
        <div className="px-4 py-3 border-b border-zinc-800 flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div className="w-3 h-3 rounded-full bg-green-500/60" />
          <span className="ml-2 text-xs text-zinc-500 font-mono">NeuralX Terminal</span>
        </div>

        <div className="p-4 space-y-3 text-sm font-mono">
          <div className="flex items-start gap-2">
            <span className="text-emerald-400 shrink-0">$</span>
            <span className="text-zinc-300">neuralx analyze --dataset sales_q4</span>
          </div>
          <div className="pl-4 text-zinc-500 text-xs space-y-1">
            <p className="text-emerald-400/70">&#9654; Processing 2.4M records...</p>
            <p className="text-emerald-400/70">&#9654; Running predictive models...</p>
            <p className="text-cyan-400/70">&#9654; Generating insights...</p>
          </div>
          <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-lg p-3 text-xs">
            <p className="text-emerald-400 font-semibold mb-1">Analysis Complete</p>
            <p className="text-zinc-400">Revenue trend: +23.4% QoQ</p>
            <p className="text-zinc-400">Top segment: Enterprise (+41%)</p>
            <p className="text-zinc-400">Churn risk: 3 accounts flagged</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">$</span>
            <span className="text-zinc-600 animate-pulse">_</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const [stats, setStats] = useState({ models: 0, accuracy: 0, latency: 0 })

  useEffect(() => {
    const targets = { models: 500, accuracy: 99, latency: 12 }
    const duration = 2000
    const steps = 60
    const interval = duration / steps
    let step = 0

    const timer = setInterval(() => {
      step++
      if (step <= steps) {
        setStats({
          models: Math.floor((targets.models / steps) * step),
          accuracy: Math.min(Math.floor((targets.accuracy / steps) * step * 10) / 10, targets.accuracy),
          latency: Math.floor((targets.latency / steps) * step),
        })
      } else {
        clearInterval(timer)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative pt-28 pb-20 px-6 overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="absolute top-20 right-0 w-1/2 h-full opacity-20 hidden lg:block">
        <NeuralNetworkVisualization />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 rounded-full">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-emerald-300 font-medium">Now in public beta</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Build smarter with
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                AI-powered
              </span>
              <br />
              intelligence
            </h1>

            <p className="text-lg text-zinc-400 leading-relaxed max-w-lg">
              NeuralX transforms your data into actionable insights.
              Deploy predictive models, automate workflows, and scale
              your business intelligence with enterprise-grade AI.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-6 py-3 rounded-lg transition-all text-sm"
              >
                Start building free
              </Link>
              <Link
                href="/demo"
                className="border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 px-6 py-3 rounded-lg font-medium transition-all text-sm flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Watch demo
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-6 border-t border-zinc-800">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
                  {stats.models}<span className="text-emerald-400 text-lg">+</span>
                </div>
                <div className="text-xs text-zinc-500 mt-1">Deployed Models</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
                  {stats.accuracy}<span className="text-cyan-400 text-lg">%</span>
                </div>
                <div className="text-xs text-zinc-500 mt-1">Accuracy Rate</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums">
                  {stats.latency}<span className="text-emerald-400 text-lg">ms</span>
                </div>
                <div className="text-xs text-zinc-500 mt-1">Avg Latency</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center">
            <AIChatMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
