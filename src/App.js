import './App.css';
import { useCallback, useEffect, useMemo, useState } from 'react';
import emailjs from '@emailjs/browser';
import HeroSection from './components/HeroSection';
import MediaGallery from './components/MediaGallery';
import ContactSection from './components/ContactSection';
import SiteFooter from './components/SiteFooter';
import { mediaItems } from './data/mediaItems';

function App() {
  const COOLDOWN_MS = 60 * 1000; // 1분
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);
  const [lastSentAt, setLastSentAt] = useState(() => {
    if (typeof window === 'undefined') {
      return null;
    }
    const stored = window.localStorage.getItem('kidstt_contact_last_sent');
    return stored ? Number(stored) : null;
  });
  const [cooldownRemaining, setCooldownRemaining] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    if (lastSentAt) {
      window.localStorage.setItem('kidstt_contact_last_sent', String(lastSentAt));
    }

    const updateRemaining = () => {
      if (!lastSentAt) {
        setCooldownRemaining(0);
        return;
      }
      const elapsed = Date.now() - lastSentAt;
      const remaining = COOLDOWN_MS - elapsed;
      setCooldownRemaining(remaining > 0 ? Math.ceil(remaining / 1000) : 0);
    };

    updateRemaining();
    if (!lastSentAt) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      updateRemaining();
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [lastSentAt, COOLDOWN_MS]);

  useEffect(() => {
    if (cooldownRemaining === 0 && sendStatus === 'cooldown') {
      setSendStatus(null);
    }
  }, [cooldownRemaining, sendStatus]);

  const isInCooldown = useMemo(() => cooldownRemaining > 0, [cooldownRemaining]);

  const PHONE_REGEX = useMemo(() => /^\d{2,3}-\d{3,4}-\d{4}$/, []);

  const handleContactSubmit = useCallback((event) => {
    event.preventDefault();
    if (isSending) {
      return;
    }
    if (isInCooldown) {
      setSendStatus('cooldown');
      return;
    }

    const formData = new FormData(event.target);
    const payload = Object.fromEntries(formData.entries());

    if (!PHONE_REGEX.test(payload.phone)) {
      setSendStatus('invalid-phone');
      return;
    }

    setIsSending(true);
    setSendStatus(null);

    emailjs
      .send('service_0542qpl', 'template_2u9q7vk', payload, 'q0FolUKMIhQqE4HQE')
      .then(() => {
        setSendStatus('success');
        setLastSentAt(Date.now());
        event.target.reset();
      })
      .catch(() => {
        setSendStatus('error');
      })
      .finally(() => {
        setIsSending(false);
      });
  }, [isSending, isInCooldown, PHONE_REGEX]);

  return (
    <div className="page">
      <HeroSection />
      <main>
        <MediaGallery items={mediaItems} />
        <ContactSection
          onSubmit={handleContactSubmit}
          isSending={isSending}
          sendStatus={sendStatus}
          isDisabled={isSending || isInCooldown}
          cooldownSeconds={cooldownRemaining}
        />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
