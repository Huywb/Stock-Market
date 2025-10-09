import Image from "next/image"
import Link from "next/link"
import logo from '../../public/icons/logo.svg'
import start from '../../public/icons/star.svg'
import dashboard from '../../public/images/dashboard.png'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className='auth-layout'>
        <section className="auth-left-section scrollbar-hide-default">
            <Link href="/" className="auth-logo">
                <Image src={logo} alt="Signalist logo" width={140} height={32} className="h-8 w-auto"></Image>
            </Link>

            <div className="pb-6 lg:pb-8 flex-1">
                {children}
            </div>
        </section>

        <section className="auth-right-section">
            <div className="z-10 relative lg:mt-4 lg:mb-16">
                <blockquote className="auth-blockquote">
                     Signalist turned my watchlist into a winning list. The alerts are spot-on, and I feel more confident making moves in the market
                </blockquote>
                <div className="flex items-start justify-between">
                    <div>
                        <cite className="auth-testimonial-author">Huy Pham</cite>
                        <p className="max-md:text-xs text-gray-500">Retail Investor</p>
                    </div>
                </div>

                <div className="flex items-center gap-0.5">
                    {[1,2,3,4,5].map((star)=>(
                        <Image className="w-5 h-5" src={start} alt="star" width={20} height={20} key={star}></Image>
                    ))}

                </div>
            </div>

            <div className="flex-1 relative">
                <Image src={dashboard} alt="Dashboard" width={1440} height={1150} className="auth-dashboard-preview absolute top-0"></Image>
            </div>
        </section>
    </main>
  )
}

export default Layout
