import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import "./FrontPage.css";

export default function FrontPage() {
  // Hero component now handles its own navigation with useNavigate()
  // No need to pass onNewPermitClick and onRenewalClick props anymore!
  
  return (
    <main>
      <div className="frontpage">
        <Hero />
        <VideoSection />
      </div>
    </main>
  );
}