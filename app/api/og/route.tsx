import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0f',
          backgroundImage: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
          padding: '40px',
        }}
      >
        {/* Main Content Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          {/* Title */}
          <div
            style={{
              fontSize: 100,
              fontWeight: 'bold',
              color: '#00ffff',
              textShadow: '0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.6)',
              marginBottom: 20,
              letterSpacing: 20,
            }}
          >
            GORK
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 40,
              color: '#00ff88',
              marginBottom: 40,
              textAlign: 'center',
            }}
          >
            🤖 The AI Agent Meme Coin on NEAR
          </div>

          {/* Stats Box */}
          <div
            style={{
              display: 'flex',
              gap: 40,
              marginTop: 30,
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 32, fontWeight: 'bold', color: '#00ffff' }}>$1,222</div>
              <div style={{ fontSize: 16, color: '#888' }}>Market Cap</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 32, fontWeight: 'bold', color: '#00ffff' }}>$0.00000122</div>
              <div style={{ fontSize: 16, color: '#888' }}>Price</div>
            </div>
          </div>

          {/* Call to Action */}
          <div
            style={{
              marginTop: 50,
              padding: '15px 40px',
              fontSize: 32,
              fontWeight: 'bold',
              color: '#000',
              backgroundColor: '#00ffff',
              borderRadius: 10,
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
            }}
          >
            💦 BUY NOW →
          </div>

          {/* NEAR Label */}
          <div
            style={{
              marginTop: 30,
              fontSize: 24,
              color: '#ff00ff',
            }}
          >
            [ NEAR PROTOCOL ]
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
