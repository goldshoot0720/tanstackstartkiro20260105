import { Link } from '@tanstack/react-router'

import { useState } from 'react'
import {
  Home,
  Menu,
  X,
  ShoppingCart,
  Calendar,
  BarChart3,
  Video,
  Image,
} from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className="p-4 flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
        <div className="ml-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center font-bold text-xl">
            鋒
          </div>
          <h1 className="text-xl font-semibold">鋒兒AI資訊系統</h1>
        </div>
        <div className="ml-auto text-sm opacity-90">
          歡迎使用鋒兒AI資訊系統
        </div>
      </header>

      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-purple-900 to-blue-900 text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center font-bold">
              鋒
            </div>
            <h2 className="text-xl font-bold">鋒兒AI系統</h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/20 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-white/30 hover:bg-white/40 transition-colors mb-2',
            }}
          >
            <Home size={20} />
            <span className="font-medium">內頁</span>
          </Link>

          <Link
            to="/dashboard"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/20 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-white/30 hover:bg-white/40 transition-colors mb-2',
            }}
          >
            <BarChart3 size={20} />
            <span className="font-medium">儀表板</span>
          </Link>

          <Link
            to="/food-management"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/20 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-white/30 hover:bg-white/40 transition-colors mb-2',
            }}
          >
            <ShoppingCart size={20} />
            <span className="font-medium">食品管理</span>
          </Link>

          <Link
            to="/subscription-management"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/20 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-white/30 hover:bg-white/40 transition-colors mb-2',
            }}
          >
            <Calendar size={20} />
            <span className="font-medium">訂閱管理</span>
          </Link>

          <Link
            to="/video-library"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/20 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-white/30 hover:bg-white/40 transition-colors mb-2',
            }}
          >
            <Video size={20} />
            <span className="font-medium">影片庫</span>
          </Link>

          <Link
            to="/image-library"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/20 transition-colors mb-2"
            activeProps={{
              className:
                'flex items-center gap-3 p-3 rounded-lg bg-white/30 hover:bg-white/40 transition-colors mb-2',
            }}
          >
            <Image size={20} />
            <span className="font-medium">圖片庫</span>
          </Link>
        </nav>

        <div className="p-4 border-t border-white/20">
          <div className="text-center text-sm opacity-75">
            鋒兒達哥公開資訊 © 版權所有 2025 - 2125
          </div>
        </div>
      </aside>
    </>
  )
}
