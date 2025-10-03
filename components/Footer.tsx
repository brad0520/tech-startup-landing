export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent mb-4">
              🚀 TechCorp
            </div>
            <p className="text-gray-400 text-sm">
              미래를 만드는 AI 솔루션
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">제품</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">기능</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">가격</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">데모</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">회사</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">소개</a></li>
              <li><a href="#" className="hover:text-white transition-colors">블로그</a></li>
              <li><a href="#" className="hover:text-white transition-colors">채용</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">지원</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">문서</a></li>
              <li><a href="#" className="hover:text-white transition-colors">고객 지원</a></li>
              <li><a href="#" className="hover:text-white transition-colors">개인정보처리방침</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          © 2024 TechCorp. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
