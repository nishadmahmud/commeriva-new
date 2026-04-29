import HeroPage from "./Components/HeroPage";
// import Category from "./Components/Category";
import OurStacks from "./Components/OurStacks";
import SupplyChain from "./Components/SupplyChain";
import ClientReview from "./Components/ClientReview";
import Blog from "./Components/Blog";
import FAQSection from "./Components/FAQSection";
import OurServices from "./Components/OurService";
import CTASection from "./Components/CTASection";
import CMSFeatures from "./Components/CMSFeatures";
import PlatformHighlights from "./Components/PlatformHighlights";
import TrustedBrandsGrid from "./Components/TrustedBrandsGrid";

export const userId = 217;
export const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  return (
    <div>
      <HeroPage />
      <OurServices />
      <PlatformHighlights />
      <CMSFeatures />
      {/* <Category /> */}
      <OurStacks />
      <SupplyChain />
      <ClientReview />
      <TrustedBrandsGrid />
      <Blog />
      <FAQSection />
      <CTASection />
    </div>
  );
}
