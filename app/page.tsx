import HeroSection from '@/components/home/HeroSection'
import FeatureTour from '@/components/home/FeatureTour'
import TopCategories from '@/components/home/TopCategories'
import PromotionSection from '@/components/home/PromotionSection'
import LuxuryTravel from '@/components/home/LuxuryTravel'
import WhyTravelWithUs from '@/components/home/WhyTravelWithUs '
import Testimonials from '@/components/home/Testimonials'
import NewsSection from '@/components/home/NewsSection'
export default function Home() {
  return (
    <main>
     <HeroSection/>
     <FeatureTour/>
     <TopCategories/>
     <PromotionSection/>
     <LuxuryTravel/>
     <WhyTravelWithUs/>
     <Testimonials/>
     <NewsSection/>
     {/* Other components */}
    </main>
  )
}