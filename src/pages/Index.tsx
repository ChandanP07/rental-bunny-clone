import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatsBar from '@/components/StatsBar';
import AboutSection from '@/components/AboutSection';
import ProductList from '@/components/ProductList';
import IndustriesSection from '@/components/IndustriesSection';
import TrendingProducts from '@/components/TrendingProducts';
import BrandsSection from '@/components/BrandsSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StatsBar />
        <AboutSection />
        <ProductList />
        <IndustriesSection />
        <TrendingProducts />
        <BrandsSection />
        <WhyChooseUs />
        <TestimonialsSection />
        <CTASection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
