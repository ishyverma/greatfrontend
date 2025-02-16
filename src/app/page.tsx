import CraftingGFE from "@/components/main/creafting-gfe";
import Hero from "@/components/main/hero";
import SafariMacbook from "@/components/main/macbook-code";
import Navbar from "@/components/main/navbar";
import Offers from "@/components/main/offers";
import Resources from "@/components/main/resources";
import Interview from "@/components/main/interview";
import Environment from "@/components/main/environment";
import InterviewQuestions from "@/components/main/intervie-questions";
import Automatic from "@/components/main/automatically";
import Companies from "@/components/main/companies";
import Save from "@/components/main/save";
import Footer from "@/components/main/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SafariMacbook />
      <CraftingGFE />
      <Offers />
      <Resources />
      <Environment />
      <InterviewQuestions />
      <Automatic />
      <Companies />
      <Save />
      <div className="w-full h-[1px] bg-[#A1A1AA]/20" />
      <Footer />
    </div>
  );
}
