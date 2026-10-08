import type { Metadata, Viewport } from 'next';
import '../styles.css';

export const metadata: Metadata = {
 title:'GuudPet — Banho e tosa, pet shop e veterinário',
 description:'Descobre os serviços da GuudPet, conhece o espaço e entra em contacto para marcar atendimento para o teu cão ou gato.',
 icons:{icon:'/favicon.svg'},
};
export const viewport: Viewport = {themeColor:'#FFF6E8'};

export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="pt"><head><link rel="preload" href="/fonts/comic-cat.otf" as="font" type="font/otf" crossOrigin="anonymous"/><link rel="preload" href="/fonts/clash-grotesk-variable.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/></head><body>{children}</body></html>;
}
