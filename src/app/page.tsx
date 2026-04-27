import Hero from '@/components/Hero/Hero';
import WorkGrid from '@/components/WorkGrid/WorkGrid';
import ToolboxSection from '@/components/ToolboxSection/ToolboxSection';
import CapabilitiesSection from '@/components/CapabilitiesSection/CapabilitiesSection';
import ContactSection from '@/components/ContactSection/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <WorkGrid />
      <ToolboxSection />
      <CapabilitiesSection />
      <ContactSection />
    </>
  );
}
