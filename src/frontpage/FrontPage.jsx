import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import "./FrontPage.css";

export default function FrontPage({ onNewPermitClick, onRenewalClick }) {
  return (
    // ✅ FIXED: Removed .header-offset class - hero-frontpage renders at full height
    <main>
      <div className="frontpage">
        <Hero 
          onNewPermitClick={onNewPermitClick}
          onRenewalClick={onRenewalClick}
        />
        <VideoSection />
      </div>
    </main>
  );
}