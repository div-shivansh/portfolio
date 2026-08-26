import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Shivansh Tiwari - Full Stack Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const londrinaFont = await fetch(
    new URL('./LondrinaSolid-Regular.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  return new ImageResponse(
    (
      // Outer Canvas: Solid light purple (renders perfectly crisp, no blurry SVGs)
      <div
        tw="flex w-full h-full p-12 items-center justify-center font-sans"
        style={{ backgroundColor: '#e6e1ff' }}
      >
        {/* Main Card: Thick structural border, massive drop shadow */}
        <div 
          tw="flex flex-row w-full h-full bg-white border-[12px] border-black overflow-hidden"
          style={{ boxShadow: '24px 24px 0px 0px rgba(0,0,0,1)' }}
        >
          
          {/* LEFT CONTENT AREA */}
          <div tw="flex flex-col justify-between w-[60%] p-12 bg-white">
            
            <div tw="flex flex-col">
              {/* Badge */}
              <div 
                tw="flex px-6 py-3 bg-yellow-300 border-[6px] border-black text-2xl font-bold uppercase tracking-widest text-black w-max mb-6"
                style={{ boxShadow: '8px 8px 0px 0px rgba(0,0,0,1)' }}
              >
                Available For Work
              </div>

              {/* Title: Pure black with a clean, sharp Cyan shadow (No jagged outlines) */}
              <h1 
                tw="text-[100px] text-black m-0 p-0 leading-none flex" 
                style={{ 
                  fontFamily: 'Londrina Solid',
                  textShadow: '8px 8px 0px #22d3ee' // Tailwind cyan-400
                }}
              >
                SHIVANSH TIWARI
              </h1>

              {/* Role */}
              <div tw="flex text-[40px] font-bold text-black mt-6">
                <span tw="text-rose-600 mr-3">Full Stack</span> & AI Engineer
              </div>
            </div>

            {/* Bottom Bar: Tech Stack Pills */}
            <div tw="flex gap-4 mt-auto">
              <span tw="px-4 py-2 bg-black text-white border-[4px] border-black text-2xl font-bold">Next.js</span>
              <span tw="px-4 py-2 bg-black text-white border-[4px] border-black text-2xl font-bold">React</span>
              <span tw="px-4 py-2 bg-black text-white border-[4px] border-black text-2xl font-bold">MongoDB</span>
            </div>
          </div>

          {/* RIGHT IMAGE AREA: Separated by a thick black line */}
         {/* RIGHT IMAGE AREA: Separated by a thick black line */}
          <div tw="flex w-[40%] bg-red-700 border-l-[12px] border-black relative">
            <img
              src={`${siteUrl}/Shivansh_portrait.jpeg`} 
              alt="Shivansh Tiwari"
              width={480}
              height={630}
              tw="w-full h-full p-2 object-cover"
            />
          </div>

        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Londrina Solid',
          data: londrinaFont,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  )
}