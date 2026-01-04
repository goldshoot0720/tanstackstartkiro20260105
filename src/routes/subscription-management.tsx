import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Search, Plus, Edit, Trash2, ExternalLink } from 'lucide-react'

export const Route = createFileRoute('/subscription-management')({
  component: SubscriptionManagement,
})

function SubscriptionManagement() {
  const [searchTerm, setSearchTerm] = useState('')

  // 模擬訂閱資料
  const subscriptions = [
    {
      id: 1,
      name: '天虎/黃信訊/心臟內科',
      url: 'https://www.tcmg.com.tw/index.php/main/schedule_time?id=18',
      price: 'NT$ 530',
      nextPayment: '2025-12-26',
      daysLeft: 355,
      status: '正常',
      category: '醫療服務'
    },
    {
      id: 2,
      name: 'kiro pro',
      url: 'https://app.kiro.dev/account/',
      price: 'NT$ 640',
      nextPayment: '2026-01-01',
      daysLeft: 10,
      status: '即將到期',
      category: '軟體服務'
    }
  ]

  const filteredSubscriptions = subscriptions.filter(sub =>
    sub.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case '正常':
        return 'text-green-300'
      case '即將到期':
        return 'text-yellow-300'
      case '已過期':
        return 'text-red-300'
      default:
        return 'text-white'
    }
  }

  const getStatusBg = (status: string) => {
    switch (status) {
      case '正常':
        return 'bg-green-500/20 border-green-500/30'
      case '即將到期':
        return 'bg-yellow-500/20 border-yellow-500/30'
      case '已過期':
        return 'bg-red-500/20 border-red-500/30'
      default:
        return 'bg-white/10 border-white/20'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 p-6">
      <div className="container mx-auto">
        {/* 頁面標題 */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
              <span className="text-2xl">📅</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">訂閱管理系統</h1>
              <p className="text-white/70">管理各種訂閱服務和到期提醒</p>
            </div>
          </div>
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
            <Plus size={20} />
            添加訂閱
          </button>
        </div>

        {/* 搜尋和篩選 */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={20} />
              <input
                type="text"
                placeholder="搜尋訂閱名稱..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors">
              搜尋
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors">
              重新載入
            </button>
          </div>
        </div>

        {/* 訂閱列表 */}
        <div className="space-y-4">
          {filteredSubscriptions.map((subscription) => (
            <div key={subscription.id} className={`backdrop-blur-lg rounded-2xl p-6 border ${getStatusBg(subscription.status)}`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <h3 className="text-xl font-bold text-white">{subscription.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(subscription.status)}`}>
                    {subscription.status}
                  </span>
                </div>
                <div className="flex gap-2">
                  <a
                    href={subscription.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white p-3 rounded-lg transition-colors">
                    <Edit size={20} />
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg transition-colors">
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="text-white/70">網站:</span>
                  <div className="text-white mt-1 break-all">{subscription.url}</div>
                </div>
                <div>
                  <span className="text-white/70">價格:</span>
                  <div className="text-white mt-1 font-bold">{subscription.price}</div>
                </div>
                <div>
                  <span className="text-white/70">下次付款:</span>
                  <div className="text-white mt-1">{subscription.nextPayment}</div>
                </div>
                <div>
                  <span className="text-white/70">剩餘天數:</span>
                  <div className={`mt-1 font-bold ${getStatusColor(subscription.status)}`}>
                    {subscription.daysLeft} 天
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSubscriptions.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-white mb-2">沒有找到訂閱</h3>
            <p className="text-white/70">請嘗試不同的搜尋關鍵字或添加新的訂閱</p>
          </div>
        )}
      </div>
    </div>
  )
}