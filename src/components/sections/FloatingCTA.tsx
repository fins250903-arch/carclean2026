export default function FloatingCTA() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-[0_-4px_6px_rgba(0,0,0,0.1)] p-4">
            <div className="flex gap-4 max-w-4xl mx-auto">
                <a href="https://lin.ee/Xs8Orp2" target="_blank" rel="noopener noreferrer" className="flex-1 bg-green-500 hover:bg-green-600 text-white rounded-xl py-4 flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-transform">
                    <div className="text-center leading-tight">
                        <span className="block text-sm font-bold opacity-90">必ずお返事！</span>
                        <span className="block text-xl md:text-2xl font-black">LINEで見積もり</span>
                    </div>
                </a>
                <a href="tel:07084280866" className="flex-1 bg-red-600 hover:bg-red-700 text-white rounded-xl py-4 flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-transform animate-shine ring-2 ring-white/50 ring-offset-2 ring-offset-red-600">
                    <div className="text-center leading-tight">
                        <span className="block text-base font-bold opacity-90">最速確認</span>
                        <span className="block text-2xl md:text-3xl font-black">電話相談</span>
                    </div>
                </a>
            </div>
        </div>
    );
}
