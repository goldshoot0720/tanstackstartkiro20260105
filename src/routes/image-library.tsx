import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Search, Plus, Download, Trash2 } from 'lucide-react'

export const Route = createFileRoute('/image-library')({
  component: ImageLibrary,
})

function ImageLibrary() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFormat, setSelectedFormat] = useState('所有類型')
  const [sortBy, setSortBy] = useState('按名稱排序')

  // 模擬圖片資料
  const images = [
    {
      id: 1,
      filename: '1761405813-e...',
      format: 'JPG',
      size: '88.7 KB',
      dimensions: '1024x768',
      uploadDate: '2024-12-01',
      thumbnail: '/api/placeholder/200/200'
    },
    {
      id: 2,
      filename: '1761405863-3...',
      format: 'JPG',
      size: '73.1 KB',
      dimensions: '1920x1080',
      uploadDate: '2024-11-28',
      thumbnail: '/api/placeholder/200/200'
    },
    {
      id: 3,
      filename: '1761405934-7...',
      format: 'JPG',
      size: '94.0 KB',
      dimensions: '1600x900',
      uploadDate: '2024-11-25',
      thumbnail: '/api/placeholder/200/200'
    },
    {
      id: 4,
      filename: '20240917_183...',
      format: 'PNG',
      size: '7.46 MB',
      dimensions: '2048x1536',
      uploadDate: '2024-09-17',
      thumbnail: '/api/placeholder/200/200'
    },
    {
      id: 5,
      filename: '202509_A4_2...',
      format: 'PNG',
      size: '9.78 MB',
      dimensions: '3000x2000',
      uploadDate: '2024-09-01',
      thumbnail: '/api/placeholder/200/200'
    },
    {
      id: 6,
      filename: '20251026_214...',
      format: 'JPG',
      size: '869.1 KB',
      dimensions: '4000x3000',
      uploadDate: '2024-10-26',
      thumbnail: '/api/placeholder/200/200'
    }
  ]

  const formats = ['所有類型', 'JPG', 'PNG', 'JPEG']
  const sortOptions = ['按名稱排序', '按大小排序', '按日期排序']

  const filteredImages = images.filter(image => {
    const matchesSearch = image.filename.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFormat = selectedFormat === '所有類型' || image.format === selectedFormat
    return matchesSearch && matchesFormat
  })

  const getFormatColor = (format: string) => {
    switch (format) {
      case 'JPG':
        return 'bg-green-500/20 text-green-300 border-green-500/30'
      case 'PNG':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30'
      case 'JPEG':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
      default:
        return 'bg-gray-500/20 text-gray-300 border-gray-500/30'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 p-6">
      <div className="container mx-auto">
        {/* 頁面標題 */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🖼️</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">鋒兒圖片庫</h1>
              <p className="text-white/70">鋒兒的精選圖片收藏與AI創作 (241 張照片)</p>
            </div>
          </div>
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
            <Plus size={20} />
            添加圖片
          </button>
        </div>

        {/* 統計資訊 */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-6">
          <div className="grid md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-white">241</div>
              <div className="text-white/70 text-sm">總圖片數</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-300">192</div>
              <div className="text-white/70 text-sm">JPG 格式</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-300">41</div>
              <div className="text-white/70 text-sm">PNG 格式</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-300">8</div>
              <div className="text-white/70 text-sm">JPEG 格式</div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <span className="text-white/70">總大小: </span>
            <span className="text-white font-bold">825.95 MB</span>
          </div>
        </div>

        {/* 搜尋和篩選 */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={20} />
              <input
                type="text"
                placeholder="搜尋圖片名稱..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <select
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
              className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {formats.map(format => (
                <option key={format} value={format} className="bg-gray-800">
                  {format}
                </option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {sortOptions.map(option => (
                <option key={option} value={option} className="bg-gray-800">
                  {option}
                </option>
              ))}
            </select>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors">
              搜尋
            </button>
          </div>
        </div>

        {/* 圖片網格 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {filteredImages.map((image) => (
            <div key={image.id} className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              {/* 圖片縮圖 */}
              <div className="relative aspect-square bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center">
                <div className="text-4xl">🖼️</div>
                <div className={`absolute top-2 right-2 px-2 py-1 rounded text-xs border ${getFormatColor(image.format)}`}>
                  {image.format}
                </div>
              </div>

              {/* 圖片資訊 */}
              <div className="p-3">
                <h4 className="text-sm font-medium text-white mb-2 truncate">{image.filename}</h4>
                <div className="space-y-1 text-xs text-white/70">
                  <div className="flex justify-between">
                    <span>大小:</span>
                    <span>{image.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>尺寸:</span>
                    <span>{image.dimensions}</span>
                  </div>
                </div>

                {/* 操作按鈕 */}
                <div className="flex gap-1 mt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded text-xs transition-colors">
                    預覽
                  </button>
                  <button className="bg-green-500 hover:bg-green-600 text-white p-1 rounded transition-colors">
                    <Download size={12} />
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white p-1 rounded transition-colors">
                    <Trash2 size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🖼️</div>
            <h3 className="text-xl font-bold text-white mb-2">沒有找到圖片</h3>
            <p className="text-white/70">請嘗試不同的搜尋關鍵字或篩選條件</p>
          </div>
        )}
      </div>
    </div>
  )
}