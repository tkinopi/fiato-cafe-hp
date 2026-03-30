import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'fiato cafe | 札幌・中島公園エリアのカフェ&バー',
  description: '札幌・すすきのと中島公園の中間に佇むイタリアン系カフェ&バー。昼はランチ、夜は深夜まで営業。パニーニ・パスタ・こだわりドリンクをご堪能ください。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
