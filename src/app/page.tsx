import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import UpdatesSection from "@/components/UpdatesSection";
import PremiereSection from "@/components/PremiereSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <UpdatesSection />
        <PremiereSection />
      </main>
    </>
  );
}
