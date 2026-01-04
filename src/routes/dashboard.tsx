import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
  component: Dashboard,
})

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 p-6">
      <div className="container mx-auto">
        {/* 頁面標題 */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
            <span className="text-2xl">📊</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">系統儀表板</h1>
            <p className="text-white/70">即時監控系統狀態和統計資訊</p>
          </div>
        </div>

        {/* 統計卡片 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* 訂閱管理統計 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">📅</span> 訂閱管理
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white/70">總訂閱數</span>
                <span className="text-2xl font-bold text-blue-300">24</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/70">3天內到期</span>
                <span className="text-xl font-bold text-red-300">0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/70">7天內到期</span>
                <span className="text-xl font-bold text-yellow-300">1</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/70">已過期</span>
                <span className="text-xl font-bold text-gray-300">0</span>
              </div>
            </div>
          </div>

          {/* 食品管理統計 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">🍎</span> 食品管理
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white/70">總食品數</span>
                <span className="text-2xl font-bold text-green-300">13</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/70">3天內到期</span>
                <span className="text-xl font-bold text-red-300">0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/70">7天內到期</span>
                <span className="text-xl font-bold text-yellow-300">0</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/70">30天內到期</span>
                <span className="text-xl font-bold text-orange-300">2</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/70">已過期</span>
                <span className="text-xl font-bold text-gray-300">0</span>
              </div>
            </div>
          </div>

          {/* 影片庫統計 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">🎬</span> 影片庫
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white/70">總影片數</span>
                <span className="text-2xl font-bold text-red-300">2</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/70">總大小</span>
                <span className="text-lg font-bold text-blue-300">5.22 MB</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/70">MP4 格式</span>
                <span className="text-lg font-bold text-green-300">2</span>
              </div>
            </div>
          </div>

          {/* 圖片庫統計 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">🖼️</span> 圖片庫
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white/70">總圖片數</span>
                <span className="text-2xl font-bold text-emerald-300">241</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/70">總大小</span>
                <span className="text-lg font-bold text-blue-300">825.95 MB</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/70">JPG 格式</span>
                <span className="text-lg font-bold text-green-300">192</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/70">PNG 格式</span>
                <span className="text-lg font-bold text-purple-300">41</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/70">JPEG 格式</span>
                <span className="text-lg font-bold text-yellow-300">8</span>
              </div>
            </div>
          </div>
        </div>

        {/* 提醒區域 */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* 訂閱到期提醒 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-yellow-400">⚠️</span> 訂閱到期提醒
            </h3>
            <div className="space-y-3">
              <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-white">kiro pro</span>
                  <span className="text-yellow-300 text-sm">7天內到期</span>
                </div>
                <div className="text-white/70 text-sm mt-1">
                  到期日期: 2026-01-01 | 剩餘天數: 10 天
                </div>
              </div>
            </div>
          </div>

          {/* 食品到期提醒 */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-red-400">🍎</span> 食品到期提醒
            </h3>
            <div className="space-y-3">
              <div className="bg-orange-500/20 border border-orange-500/30 rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-white">【張君雅】日式串燒休閒丸子</span>
                  <span className="text-orange-300 text-sm">30天內到期</span>
                </div>
                <div className="text-white/70 text-sm mt-1">
                  到期日期: 2026-01-07 | 剩餘天數: 16 天
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}