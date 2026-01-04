import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700">
      <div className="container mx-auto px-6 py-12">
        {/* 主標題區域 */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-red-500 rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="text-3xl font-bold text-white">鋒</span>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            鋒兒AI資訊系統
          </h1>
          <p className="text-xl text-white/80 mb-8">
            智能管理您的影片和圖片收藏，支援智能分類和快速搜尋
          </p>
          <div className="text-white/60">
            鋒兒達哥公開資訊 © 版權所有 2025 - 2125
          </div>
        </div>

        {/* 技術棧展示 */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-12 border border-white/20">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-orange-400">🔧</span> 前端技術
              </h3>
              <ul className="space-y-2 text-white/80">
                <li>• SolidJS (SolidStart)</li>
                <li>• 網頁音效 Netlify</li>
                <li>• 響應式設計 + Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-pink-400">💎</span> 後端技術
              </h3>
              <ul className="space-y-2 text-white/80">
                <li>• Strapi CMS</li>
                <li>• 多片存放校 Strapi</li>
                <li>• RESTful API 支援</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 系統功能選單 */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-2">
            <span className="text-yellow-400">⭐</span> 系統功能選單
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 儀表板 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-bold text-white">系統儀表板</h3>
            </div>
            <p className="text-white/70 text-sm">
              即時監控系統狀態和統計資訊
            </p>
          </div>

          {/* 食品管理 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl">🍎</span>
              </div>
              <h3 className="text-xl font-bold text-white">食品管理系統</h3>
            </div>
            <p className="text-white/70 text-sm">
              管理您的食品存貨和到期日提醒
            </p>
          </div>

          {/* 訂閱管理 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="text-xl font-bold text-white">訂閱管理系統</h3>
            </div>
            <p className="text-white/70 text-sm">
              管理各種訂閱服務和到期提醒
            </p>
          </div>

          {/* 影片庫 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl">🎬</span>
              </div>
              <h3 className="text-xl font-bold text-white">鋒兒影片庫</h3>
            </div>
            <p className="text-white/70 text-sm">
              鋒兒的精選人生與生活歷程
            </p>
          </div>

          {/* 圖片庫 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl">🖼️</span>
              </div>
              <h3 className="text-xl font-bold text-white">鋒兒圖片庫</h3>
            </div>
            <p className="text-white/70 text-sm">
              鋒兒的精選圖片收藏與AI創作 (241 張照片)
            </p>
          </div>

          {/* 系統設定 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gray-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-bold text-white">系統設定</h3>
            </div>
            <p className="text-white/70 text-sm">
              個人化設定和系統偏好設定
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
