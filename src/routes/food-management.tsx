import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Search, Plus, Edit, Trash2 } from 'lucide-react'

export const Route = createFileRoute('/food-management')({
  component: FoodManagement,
})

function FoodManagement() {
  const [searchTerm, setSearchTerm] = useState('')

  // 模擬食品資料
  const foods = [
    {
      id: 1,
      name: '【張君雅】五香海苔休閒丸子',
      brand: '張君雅',
      price: 'NT$ 0',
      location: '未設定',
      expiryDate: '2026-01-06',
      daysLeft: 15,
      status: '正常',
      image: '/api/placeholder/80/80'
    },
    {
      id: 2,
      name: '【張君雅】日式串燒休閒丸子',
      brand: '張君雅',
      price: 'NT$ 0',
      location: '未設定',
      expiryDate: '2026-01-07',
      daysLeft: 16,
      status: '正常',
      image: '/api/placeholder/80/80'
    }
  ]

  const filteredFoods = foods.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 p-6">
      <div className="container mx-auto">
        {/* 頁面標題 */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🍎</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">食品管理系統</h1>
              <p className="text-white/70">管理您的食品存貨和到期日提醒</p>
            </div>
          </div>
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
            <Plus size={20} />
            添加食品
          </button>
        </div>

        {/* 搜尋和篩選 */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={20} />
              <input
                type="text"
                placeholder="搜尋食品名稱..."
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

        {/* 食品列表 */}
        <div className="space-y-4">
          {filteredFoods.map((food) => (
            <div key={food.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-6">
                {/* 食品圖片 */}
                <div className="w-20 h-20 bg-green-500 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🍎</span>
                </div>

                {/* 食品資訊 */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{food.name}</h3>
                  <div className="grid md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-white/70">品牌:</span>
                      <span className="text-white ml-2">{food.brand}</span>
                    </div>
                    <div>
                      <span className="text-white/70">價格:</span>
                      <span className="text-white ml-2">{food.price}</span>
                    </div>
                    <div>
                      <span className="text-white/70">位置:</span>
                      <span className="text-white ml-2">{food.location}</span>
                    </div>
                    <div>
                      <span className="text-white/70">到期日期:</span>
                      <span className="text-white ml-2">{food.expiryDate}</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className="text-white/70">剩餘天數:</span>
                    <span className="text-green-300 ml-2 font-bold">{food.daysLeft} 天</span>
                  </div>
                </div>

                {/* 操作按鈕 */}
                <div className="flex gap-2">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition-colors">
                    <Edit size={20} />
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg transition-colors">
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredFoods.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-white mb-2">沒有找到食品</h3>
            <p className="text-white/70">請嘗試不同的搜尋關鍵字或添加新的食品</p>
          </div>
        )}
      </div>
    </div>
  )
}