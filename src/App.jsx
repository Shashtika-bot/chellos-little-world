import React, { useState } from 'react';
import { scrapbookData } from './data/scrapbookData';

// Components
import Navbar from './components/Navbar';
import EnvelopeIntro from './components/EnvelopeIntro';
import HeroSection from './components/HeroSection';
import NineteenSection from './components/NineteenSection';
import GirlBehindSection from './components/GirlBehindSection';
import SnapshotsSection from './components/SnapshotsSection';
import LittleThingsSection from './components/LittleThingsSection';
import TinyNoteSection from './components/TinyNoteSection';
import GratitudeSection from './components/GratitudeSection';
import FlipCardsSection from './components/FlipCardsSection';
import ChaosSection from './components/ChaosSection';
import MemoriesWovenSection from './components/MemoriesWovenSection';
import UniverseSection from './components/UniverseSection';
import FinaleSection from './components/FinaleSection';

// Modals
import MemoryModal from './components/MemoryModal';
import LetterModal from './components/LetterModal';
import SurpriseModal from './components/SurpriseModal';

export default function App() {
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [isSurpriseOpen, setIsSurpriseOpen] = useState(false);
  const [activeMemory, setActiveMemory] = useState(null);
  const [activeMemoryIndex, setActiveMemoryIndex] = useState(0);

  // Gallery memory selection
  const handleSelectSnapshot = (snapshot, index) => {
    setActiveMemory(snapshot);
    setActiveMemoryIndex(index);
  };

  const handleSelectArbitraryMemory = (mem) => {
    setActiveMemory(mem);
    setActiveMemoryIndex(0);
  };

  const handlePrevMemory = () => {
    const list = scrapbookData.snapshots;
    const newIdx = (activeMemoryIndex - 1 + list.length) % list.length;
    setActiveMemoryIndex(newIdx);
    setActiveMemory(list[newIdx]);
  };

  const handleNextMemory = () => {
    const list = scrapbookData.snapshots;
    const newIdx = (activeMemoryIndex + 1) % list.length;
    setActiveMemoryIndex(newIdx);
    setActiveMemory(list[newIdx]);
  };

  const handleSkipIntro = () => {
    const hero = document.getElementById('hero');
    if (hero) hero.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="scrapbook-app">
      {/* SECTION 1: Envelope Introduction */}
      <EnvelopeIntro
        introData={scrapbookData.intro}
        onOpenLetter={() => setIsLetterOpen(true)}
        onSkipIntro={handleSkipIntro}
      />

      {/* SECTION 2: Sticky Navigation Bar */}
      <Navbar onOpenLetter={() => setIsLetterOpen(true)} />

      {/* SECTION 3: Birthday Hero */}
      <HeroSection
        heroData={scrapbookData.hero}
        onOpenSurprise={() => setIsSurpriseOpen(true)}
        onSelectMemory={handleSelectArbitraryMemory}
      />

      {/* SECTION 4: Nineteen */}
      <NineteenSection
        nineteenData={scrapbookData.nineteen}
        onSelectMemory={handleSelectArbitraryMemory}
      />

      {/* SECTION 5: The Girl Behind the Memories */}
      <GirlBehindSection
        data={scrapbookData.girlBehind}
        onSelectMemory={handleSelectArbitraryMemory}
      />

      {/* SECTION 6: Snapshots I Refuse To Forget */}
      <SnapshotsSection
        snapshots={scrapbookData.snapshots}
        onSelectMemory={handleSelectSnapshot}
      />

      {/* SECTION 7: You Remember The Little Things */}
      <LittleThingsSection notes={scrapbookData.littleThings} />

      {/* SECTION 8: A Tiny Note */}
      <TinyNoteSection data={scrapbookData.tinyNote} />

      {/* SECTION 9: Things I Will Always Be Grateful For */}
      <GratitudeSection gratitudeNotes={scrapbookData.gratitude} />

      {/* SECTION 10: Things About You That I Adore (Flip Cards) */}
      <FlipCardsSection cards={scrapbookData.flipCards} />

      {/* SECTION 11: A Little Bit Of Our Chaos */}
      <ChaosSection
        categories={scrapbookData.chaos}
        onSelectMemory={handleSelectArbitraryMemory}
      />

      {/* SECTION 12: Some People Become Memories */}
      <MemoriesWovenSection
        data={scrapbookData.memoriesWoven}
        onSelectMemory={handleSelectArbitraryMemory}
      />

      {/* SECTION 13: Our Little Universe */}
      <UniverseSection universeData={scrapbookData.universe} />

      {/* SECTION 14: Birthday Finale */}
      <FinaleSection
        finaleData={scrapbookData.finale}
        onOpenLetter={() => setIsLetterOpen(true)}
      />

      {/* Modals & Overlays */}
      <MemoryModal
        isOpen={Boolean(activeMemory)}
        memory={activeMemory}
        onClose={() => setActiveMemory(null)}
        onPrev={handlePrevMemory}
        onNext={handleNextMemory}
        currentIndex={activeMemoryIndex}
        totalCount={scrapbookData.snapshots.length}
      />

      <LetterModal
        isOpen={isLetterOpen}
        onClose={() => setIsLetterOpen(false)}
        letterData={scrapbookData.intro.fullLetter}
      />

      <SurpriseModal
        isOpen={isSurpriseOpen}
        onClose={() => setIsSurpriseOpen(false)}
        surpriseData={scrapbookData.surprise}
      />
    </div>
  );
}
