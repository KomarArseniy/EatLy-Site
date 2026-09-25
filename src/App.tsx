import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AdvantagesSection } from './components/sections/AdvantagesSection';
import { RestaurantsSection } from './components/sections/RestaurantsSection';
import { DishesSection } from './components/sections/DishesSection';
import { PurchasesSection } from './components/sections/PurchasesSection';
import { ReviewsSection } from './components/sections/ReviewsSection';
import { DiscountBanner } from './components/sections/DiscountBanner';

export function App() {
    return (
        <>
            <Header />

            <main className="main">
                <HeroSection />
                <AdvantagesSection />
                <RestaurantsSection />
                <DishesSection />
                <PurchasesSection />
                <ReviewsSection />
                <DiscountBanner />
            </main>

            <Footer />
        </>
    );
}
