import './App.css';
import HeroSection from './components/HeroSection';
import MediaGallery from './components/MediaGallery';
import ContactSection from './components/ContactSection';
import SiteFooter from './components/SiteFooter';
import { mediaItems } from './data/mediaItems';

function App() {
  const handleContactSubmit = (event) => {
    event.preventDefault();
    // TODO: 이메일 전송 로직 구현 예정
  };

  return (
    <div className="page">
      <HeroSection />
      <main>
        <MediaGallery items={mediaItems} />
        <ContactSection onSubmit={handleContactSubmit} />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
