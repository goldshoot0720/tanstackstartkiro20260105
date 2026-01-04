import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Search, Plus, Play, Download, Trash2 } from 'lucide-react'

export const Route = createFileRoute('/video-library')({
  component: VideoLibrary,
})

function VideoLibrary() {
  const [searchTerm, setSearchTerm] = useState('')

  // 模擬影片資料
  const videos = [
    {
      id: 1,
      title: '鋒兒的傳奇人生',
      description: '鋒兒人生經歷分享',
      duration: '00:45',
      size: '2.01 MB',
      format: 'MP4',
      uploadDate: '2024-12-01',
      thumbnail: '/api/placeholder/300/200'
    },
    {
      id: 2,
      title: '鋒兒雜仕Show 🔴',
      description: '鋒兒雜仕影片分享',
      duration: '01:23',
      size: '4.21 MB',
      format: 'MP4',
      uploadDate: '2024-11-15',
      thumbnail: '/api/placeholder/300/200'
    }
  ]

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 p-6">
      <div className="container mx-auto">
        {/* 頁面標題 */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🎬</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">鋒兒影片庫</h1>
              <p className="text-white/70">鋒兒的精選人生與生活歷程</p>
            </div>
          </div>
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
            <Plus size={20} />
            添加影片
          </button>
        </div>

        {/* 搜尋和篩選 */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={20} />
              <input
                type="text"
                placeholder="搜尋影片名稱..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors">
              搜尋
            </button>
          </div>
        </div>

        {/* 影片網格 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div key={video.id} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300">
              {/* 影片縮圖 */}
              <div className="relative aspect-video bg-black/50 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-purple-500/20"></div>
                <div className="relative text-6xl">🎬</div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {video.format}
                </div>
                <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {video.duration}
                </div>
                <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors group">
                  <Play className="w-16 h-16 text-white group-hover:scale-110 transition-transform" />
                </button>
              </div>

              {/* 影片資訊 */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
                <p className="text-white/70 text-sm mb-4">{video.description}</p>
                
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-white/70">大小:</span>
                    <span className="text-white">{video.size}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">時長:</span>
                    <span className="text-white">{video.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">上傳日期:</span>
                    <span className="text-white">{video.uploadDate}</span>
                  </div>
                </div>

                {/* 操作按鈕 */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
                    <Play size={16} />
                    播放
                  </button>
                  <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition-colors">
                    <Download size={16} />
                  </button>
                  <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎬</div>
            <h3 className="text-xl font-bold text-white mb-2">沒有找到影片</h3>
            <p className="text-white/70">請嘗試不同的搜尋關鍵字或添加新的影片</p>
          </div>
        )}
      </div>
    </div>
  )
}