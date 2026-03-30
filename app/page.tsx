'use client'
import { useState } from 'react'

type Tab = 'top' | 'menu' | 'info' | 'contact'

export default function Home() {
  const [active, setActive] = useState<Tab>('top')

  const navItems: { key: Tab; label: string }[] = [
    { key: 'top', label: 'TOP' },
    { key: 'menu', label: 'MENU' },
    { key: 'info', label: 'SHOP INFO' },
    { key: 'contact', label: 'CONTACT' },
  ]

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <header style={{
        background: 'var(--bg)',
        borderBottom: '1px solid var(--border)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        padding: '0 40px',
      }}>
        <div className="site-header-inner">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 26,
              fontWeight: 400,
              letterSpacing: '0.18em',
              color: 'var(--text)',
            }}>fiato cafe</span>
            <span style={{ fontSize: 10, letterSpacing: '0.2em', color: 'var(--text-light)', fontFamily: "'Zen Old Mincho', serif" }}>
              札幌・中島公園エリア
            </span>
          </div>
          <nav className="site-nav">
            {navItems.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                style={{
                  whiteSpace: 'nowrap',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px 20px',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 13,
                  letterSpacing: '0.15em',
                  color: active === key ? 'var(--accent)' : 'var(--text-light)',
                  borderBottom: active === key ? '2px solid var(--accent)' : '2px solid transparent',
                  transition: 'all 0.2s',
                }}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {active === 'top' && (
        <>
          <section className="hero-grid" style={{ minHeight: '88vh' }}>
            <div className="hero-pad" style={{
              padding: '80px 60px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              background: 'var(--bg)',
            }}>
              <p style={{ fontSize: 11, letterSpacing: '0.3em', color: 'var(--accent)', marginBottom: 24, fontFamily: "'Cormorant Garamond', serif" }}>
                CAFÉ &amp; BAR — SAPPORO
              </p>
              <h1 className="hero-title" style={{ color: 'var(--text)', marginBottom: 32 }}>
                A moment<br />
                <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>of breath</em><br />
                in the city.
              </h1>
              <p style={{ fontSize: 15, lineHeight: 2, color: 'var(--text-light)', maxWidth: 360, marginBottom: 40 }}>
                すすきのと中島公園の中間に佇む、<br />
                イタリアンカフェ&バー。<br />
                昼の光から深夜の静寂まで、<br />
                あなたの時間に寄り添います。
              </p>
              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <button onClick={() => setActive('menu')} style={{
                  whiteSpace: 'nowrap', background: 'var(--accent)', color: '#fff', border: 'none', cursor: 'pointer',
                  padding: '14px 36px', fontFamily: "'Cormorant Garamond', serif", fontSize: 14, letterSpacing: '0.15em', minHeight: 48,
                }}>MENU を見る</button>
                <button onClick={() => setActive('contact')} style={{
                  whiteSpace: 'nowrap', background: 'none', color: 'var(--accent)', border: '1px solid var(--accent)', cursor: 'pointer',
                  padding: '14px 36px', fontFamily: "'Cormorant Garamond', serif", fontSize: 14, letterSpacing: '0.15em', minHeight: 48,
                }}>ご予約・お問い合わせ</button>
              </div>
            </div>
            <div className="hero-deco" style={{
              background: 'linear-gradient(135deg, #C97E62 0%, #8B4A32 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 40% 60%, rgba(255,220,190,0.18) 0%, transparent 70%)' }} />
              <div style={{ textAlign: 'center', zIndex: 1 }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 120, fontWeight: 300, color: 'rgba(255,255,255,0.12)', lineHeight: 1 }}>f</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontStyle: 'italic', color: 'rgba(255,255,255,0.75)', letterSpacing: '0.2em' }}>italian café & bar</p>
              </div>
            </div>
          </section>
          <div style={{ background: 'var(--accent)', padding: '20px 40px' }}>
            <div className="info-bar" style={{ maxWidth: 1100, margin: '0 auto' }}>
              <span style={{ color: '#fff', fontSize: 13, letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>📍 南8条西5丁目288 5CREA MUSE BLDG. 1F</span>
              <span style={{ color: '#fff', fontSize: 13, whiteSpace: 'nowrap' }}>🕐 11:00 – 翌6:00（年中無休）</span>
              <span style={{ color: '#fff', fontSize: 13, whiteSpace: 'nowrap' }}>📞 011-590-5155</span>
            </div>
          </div>
          <section style={{ padding: '80px 0' }}>
            <div className="main-pad">
              <p style={{ fontSize: 11, letterSpacing: '0.3em', color: 'var(--accent)', marginBottom: 12, textAlign: 'center', fontFamily: "'Cormorant Garamond', serif" }}>OUR FEATURES</p>
              <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 56, color: 'var(--text)' }}>fiato cafe のこだわり</h2>
              <div className="grid-3">
                {[
                  { num: '01', title: '本格イタリアン', body: 'パニーニ・パスタ・サラダなど、毎日食べたくなる本格的なイタリアン料理をご用意しています。' },
                  { num: '02', title: '深夜まで営業', body: '夜11時以降も深夜6時まで営業。仕事終わりや夜遊びの後も、ゆっくりとくつろげる空間です。' },
                  { num: '03', title: '豊富なドリンク', body: 'ワイン・カクテル・クラフトビールなど、食事に合わせたドリンクを豊富に取り揃えています。' },
                ].map(f => (
                  <div key={f.num} style={{ background: 'var(--bg-dark)', padding: '40px 32px', borderTop: '3px solid var(--accent)' }}>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 42, color: 'var(--border)', fontWeight: 300, marginBottom: 16 }}>{f.num}</p>
                    <h3 style={{ fontSize: 18, marginBottom: 16 }}>{f.title}</h3>
                    <p style={{ fontSize: 14, color: 'var(--text-light)', lineHeight: 1.9 }}>{f.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {active === 'menu' && (
        <section style={{ padding: '60px 0 100px' }}>
          <div className="main-pad">
            <p style={{ fontSize: 11, letterSpacing: '0.3em', color: 'var(--accent)', marginBottom: 12, fontFamily: "'Cormorant Garamond', serif" }}>OUR MENU</p>
            <h2 className="section-title" style={{ marginBottom: 48 }}>フードメニュー</h2>
            <div className="grid-2-menu" style={{ background: 'var(--bg-dark)', marginBottom: 48 }}>
              {[
                { cat: 'パニーニ', name: '生ハム & クリームチーズのパニーニ', price: '¥1,100', desc: 'サクサクのバゲットに生ハムとクリームチーズをたっぷり挟んだ定番の一品' },
                { cat: 'パスタ', name: '牡蠣とキノコのアンチョビパスタ', price: '¥1,450', desc: '旬の牡蠣と数種のキノコをアンチョビでまとめた風味豊かな一皿' },
                { cat: 'サラダ', name: 'アボカドサーモンサラダ', price: '¥980', desc: '新鮮なアボカドとサーモンを使った彩り豊かなサラダ' },
                { cat: 'ピザ', name: 'マルゲリータ', price: '¥1,200', desc: 'シンプルながら奥深い、定番のマルゲリータピザ' },
                { cat: 'パスタ', name: 'カルボナーラ', price: '¥1,380', desc: '濃厚なクリームソースと自家製ベーコンが絡む本格カルボナーラ' },
                { cat: 'デザート', name: 'ティラミス', price: '¥680', desc: 'シェフ手作りの本格ティラミス。コーヒーの香りが広がります' },
              ].map((item, i) => (
                <div key={i} style={{ padding: '28px 32px', borderBottom: '1px solid var(--border)', background: 'var(--bg-dark)' }}>
                  <p style={{ fontSize: 10, letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: 8, fontFamily: "'Cormorant Garamond', serif" }}>{item.cat}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 8, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: 16, fontWeight: 500 }}>{item.name}</span>
                    <span style={{ whiteSpace: 'nowrap', fontSize: 18, fontFamily: "'Cormorant Garamond', serif", color: 'var(--accent)', fontWeight: 500 }}>{item.price}</span>
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--text-light)', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <h2 className="section-title" style={{ marginBottom: 32 }}>ドリンクメニュー</h2>
            <div className="grid-3">
              {[
                { cat: 'WINE', items: ['グラスワイン（赤/白/ロゼ） ¥780〜', 'ボトルワイン ¥3,800〜'] },
                { cat: 'COCKTAIL', items: ['季節のカクテル ¥880〜', 'モクテル（ノンアル） ¥680〜'] },
                { cat: 'SOFT DRINK', items: ['コーヒー・紅茶 ¥580〜', 'クラフトソーダ ¥680'] },
              ].map(d => (
                <div key={d.cat} style={{ padding: '32px', background: 'var(--bg-dark)', borderTop: '2px solid var(--accent)' }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, letterSpacing: '0.15em', color: 'var(--accent)', marginBottom: 20 }}>{d.cat}</p>
                  {d.items.map((item, i) => (
                    <p key={i} style={{ fontSize: 14, color: 'var(--text-light)', marginBottom: 10, paddingBottom: 10, borderBottom: '1px solid var(--border)' }}>{item}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {active === 'info' && (
        <section style={{ padding: '60px 0 100px' }}>
          <div className="main-pad">
            <p style={{ fontSize: 11, letterSpacing: '0.3em', color: 'var(--accent)', marginBottom: 12, fontFamily: "'Cormorant Garamond', serif" }}>SHOP INFO</p>
            <h2 className="section-title" style={{ marginBottom: 48 }}>店舗情報・アクセス</h2>
            <div className="grid-2">
              <div style={{ background: 'var(--bg-dark)', padding: '40px' }}>
                {[
                  { label: '店名', value: 'fiato cafe' },
                  { label: '住所', value: '〒064-0808\n北海道札幌市中央区\n南8条西5丁目288\n5CREA MUSE BLDG. 1F' },
                  { label: '電話番号', value: '011-590-5155' },
                  { label: '営業時間', value: '11:00 〜 翌6:00\n（年中無休）' },
                  { label: 'アクセス', value: '市営地下鉄 南北線\n「中島公園」駅 徒歩5分\n「すすきの」駅 徒歩8分' },
                  { label: 'Instagram', value: '@fiato_cafe' },
                ].map(row => (
                  <div key={row.label} style={{ display: 'flex', gap: 24, padding: '16px 0', borderBottom: '1px solid var(--border)' }}>
                    <span style={{ minWidth: 100, fontSize: 12, letterSpacing: '0.1em', color: 'var(--accent)', fontFamily: "'Cormorant Garamond', serif", paddingTop: 2 }}>{row.label}</span>
                    <span style={{ fontSize: 14, lineHeight: 1.8, whiteSpace: 'pre-line' }}>{row.value}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: '#D4C8B8', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 400 }}>
                <div style={{ textAlign: 'center', padding: '40px' }}>
                  <p style={{ fontSize: 40, marginBottom: 16 }}>📍</p>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, marginBottom: 8 }}>fiato cafe</p>
                  <p style={{ fontSize: 13, color: 'var(--text-light)', lineHeight: 1.8 }}>南8条西5丁目288<br />5CREA MUSE BLDG. 1F</p>
                  <a href="https://maps.google.com/?q=43.0503453,141.3514918" target="_blank" rel="noopener noreferrer"
                    style={{ display: 'inline-block', marginTop: 24, padding: '12px 28px', background: 'var(--accent)', color: '#fff', textDecoration: 'none', fontSize: 13, minHeight: 44 }}>
                    Google マップで開く
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {active === 'contact' && (
        <section style={{ padding: '60px 0 100px' }}>
          <div className="main-pad">
            <p style={{ fontSize: 11, letterSpacing: '0.3em', color: 'var(--accent)', marginBottom: 12, fontFamily: "'Cormorant Garamond', serif" }}>CONTACT</p>
            <h2 className="section-title" style={{ marginBottom: 16 }}>ご予約・お問い合わせ</h2>
            <p style={{ fontSize: 15, color: 'var(--text-light)', lineHeight: 1.9, marginBottom: 48, maxWidth: 560 }}>
              ご予約・お問い合わせはお電話またはInstagramのDMにてお気軽にどうぞ。
            </p>
            <div className="contact-grid">
              <div style={{ background: 'var(--bg-dark)', padding: '48px 40px', borderTop: '3px solid var(--accent)' }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 14, letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: 24 }}>PHONE</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 36, marginBottom: 12 }}>011-590-5155</p>
                <p style={{ fontSize: 13, color: 'var(--text-light)', lineHeight: 1.8, marginBottom: 24 }}>受付時間：11:00 〜 翌6:00<br />年中無休</p>
                <a href="tel:0115905155" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', background: 'var(--accent)', color: '#fff', textDecoration: 'none', fontSize: 14, minHeight: 48, whiteSpace: 'nowrap' }}>
                  📞 今すぐ電話する
                </a>
              </div>
              <div style={{ background: 'var(--bg-dark)', padding: '48px 40px', borderTop: '3px solid var(--accent)' }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 14, letterSpacing: '0.2em', color: 'var(--accent)', marginBottom: 24 }}>INSTAGRAM</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, marginBottom: 12 }}>@fiato_cafe</p>
                <p style={{ fontSize: 13, color: 'var(--text-light)', lineHeight: 1.8, marginBottom: 24 }}>最新情報・写真はInstagramでご確認ください。</p>
                <a href="https://www.instagram.com/fiato_cafe/" target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '14px 32px', background: 'none', color: 'var(--accent)', border: '1px solid var(--accent)', textDecoration: 'none', fontSize: 14, minHeight: 48, whiteSpace: 'nowrap' }}>
                  Instagram を開く
                </a>
              </div>
            </div>
            <div style={{ marginTop: 48, padding: '32px 40px', background: 'var(--bg-dark)', borderLeft: '4px solid var(--accent)' }}>
              <p style={{ fontSize: 14, lineHeight: 2 }}>
                <strong>営業時間：</strong>毎日 11:00 〜 翌6:00（年中無休）<br />
                <strong>住所：</strong>〒064-0808 北海道札幌市中央区南8条西5丁目288 5CREA MUSE BLDG. 1F
              </p>
            </div>
          </div>
        </section>
      )}

      <footer style={{ background: 'var(--text)', color: 'rgba(255,255,255,0.6)', padding: '40px', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, color: '#fff', letterSpacing: '0.15em', marginBottom: 8 }}>fiato cafe</p>
        <p style={{ fontSize: 12, letterSpacing: '0.1em', marginBottom: 4 }}>〒064-0808 北海道札幌市中央区南8条西5丁目288 5CREA MUSE BLDG. 1F</p>
        <p style={{ fontSize: 12 }}>TEL: 011-590-5155 ｜ 11:00 – 翌6:00</p>
        <p style={{ fontSize: 11, marginTop: 20, opacity: 0.5 }}>© 2026 fiato cafe. All rights reserved.</p>
      </footer>
    </div>
  )
}
