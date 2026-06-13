import React from 'react';
import Hero from './components/hero/hero.jsx';
import Nav from './components/misc/nav/nav.jsx';
import About from './components/about/about.jsx';
import Skills from './components/skills/skills.jsx';
import Experience from './components/experience/experience.jsx';
import Work from './components/work/work.jsx';
import Education from './components/education/education.jsx';
import Contact from './components/contact/contact.jsx';
import { useTweaks, TweaksPanel, TweakSection, TweakSlider } from './tweaks-panel.jsx';

// Main App
const App = () => {
  const [tweaks, setTweak] = useTweaks(
    window.TWEAK_DEFAULTS || {
      accentHue: 152,
      accentChroma: 0.27,
      accentLight: 0.85,
    }
  );

  // Apply accent live
  React.useEffect(() => {
    const root = document.documentElement;
    const { accentHue, accentChroma, accentLight } = tweaks;
    root.style.setProperty('--accent', `oklch(${accentLight} ${accentChroma} ${accentHue})`);
    root.style.setProperty(
      '--accent-glow',
      `oklch(${accentLight} ${accentChroma} ${accentHue} / 0.5)`
    );
    root.style.setProperty(
      '--accent-soft',
      `oklch(${accentLight} ${accentChroma} ${accentHue} / 0.12)`
    );
  }, [tweaks.accentHue, tweaks.accentChroma, tweaks.accentLight]);

  const presets = [
    { name: 'Cyber green', h: 152, c: 0.27, l: 0.85 },
    { name: 'Toxic lime', h: 130, c: 0.3, l: 0.92 },
    { name: 'Mint', h: 170, c: 0.2, l: 0.85 },
    { name: 'Acid yellow', h: 110, c: 0.28, l: 0.92 },
    { name: 'Hot pink', h: 0, c: 0.28, l: 0.78 },
    { name: 'Electric blue', h: 240, c: 0.24, l: 0.75 },
  ];

  return (
    <>
      <Hero />
      <Nav />
      <main id="hero" />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Education />
      <Contact />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Accent presets">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 8,
              marginBottom: 16,
            }}
          >
            {presets.map((p) => (
              <button
                key={p.name}
                onClick={() => setTweak({ accentHue: p.h, accentChroma: p.c, accentLight: p.l })}
                style={{
                  padding: '10px 8px',
                  background: '#0a0a0a',
                  border: `1px solid ${Math.abs(tweaks.accentHue - p.h) < 2 ? `oklch(${p.l} ${p.c} ${p.h})` : 'rgba(255,255,255,0.12)'}`,
                  color: '#fff',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: 10,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                }}
              >
                <span
                  style={{
                    width: 10,
                    height: 10,
                    background: `oklch(${p.l} ${p.c} ${p.h})`,
                    flexShrink: 0,
                  }}
                />
                {p.name}
              </button>
            ))}
          </div>
        </TweakSection>

        <TweakSlider
          label="Hue"
          value={tweaks.accentHue}
          min={0}
          max={360}
          step={1}
          onChange={(v) => setTweak('accentHue', v)}
        />
        <TweakSlider
          label="Chroma"
          value={tweaks.accentChroma}
          min={0}
          max={0.4}
          step={0.01}
          onChange={(v) => setTweak('accentChroma', v)}
        />
        <TweakSlider
          label="Lightness"
          value={tweaks.accentLight}
          min={0.5}
          max={1}
          step={0.01}
          onChange={(v) => setTweak('accentLight', v)}
        />
      </TweaksPanel>
    </>
  );
};

export default App;
