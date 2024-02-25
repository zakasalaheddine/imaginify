import MobileNav from '@/components/shared/mobile-nav'
import Sidebar from '@/components/shared/sidebar'
import { Toaster } from '@/components/ui/toaster'
import { cn } from '@/lib/utils'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className={cn('root')}>
      <Sidebar />
      <MobileNav />
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
      <Toaster />
    </main>
  )
}
