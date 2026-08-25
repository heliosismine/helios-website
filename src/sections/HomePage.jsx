import { ArchitectureSection } from "./ArchitectureSection";
import { CtaSection } from "./CtaSection";
import { FeaturesSection } from "./FeaturesSection";
import { HeroSection } from "./HeroSection";
import { StackSection } from "./StackSection";

export function HomePage({ content, theme, onNavigate }) {
  return (
    <>
      <HeroSection content={content.hero} onNavigate={onNavigate} />

      <ArchitectureSection content={content.architecture} theme={theme} />

      <StackSection title={content.stack.title} items={content.stack.items} />

      <FeaturesSection />

      <CtaSection onNavigate={onNavigate} />
    </>
  );
}
