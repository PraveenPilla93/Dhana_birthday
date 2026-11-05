import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowDown,
  CalendarHeart,
  Gift,
  Heart,
  Music2,
  Pause,
  Play,
  Sparkles,
  Star,
} from 'lucide-react';

import memoryOne from './assets/images/memory-1.jpeg';
import memoryTwo from './assets/images/memory-2.jpeg';
import memoryThree from './assets/images/memory-3.jpeg';
import memoryFour from './assets/images/memory-4.jpeg';
import memoryFive from './assets/images/memory-5.jpeg';

const birthdayTarget = new Date('2026-11-19T00:00:00');

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Letter', href: '#letter' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reasons', href: '#reasons' },
  { label: 'Story', href: '#story' },
  { label: 'Music', href: '#music' },
];

const galleryItems = [
  {
    image: memoryOne,
    title: 'Sweetest smile',
    caption: 'Everyday feels brighter when you are in it.',
  },
  {
    image: memoryTwo,
    title: 'Our little magic',
    caption: 'The kind of moments that become forever memories.',
  },
  {
    image: memoryThree,
    title: 'Happy chaos',
    caption: 'Laughing with you is my favourite kind of peace.',
  },
  {
    image: memoryFour,
    title: 'Dreamy dates',
    caption: 'Even the simplest moments feel unforgettable with you.',
  },
  {
    image: memoryFive,
    title: 'Love in bloom',
    caption: 'A little romance, a lot of joy, and so much warmth.',
  },
];

const reasons = [
  {
    title: 'Your beautiful smile',
    message:
      'నీ smile ఒక్కటే చాలు, ఎంత mood off లో ఉన్నా మళ్లీ నవ్వుకోవడానికి, ఏదో మేజిక్ చేసినట్టుగా. Yedo Elaka sound cheysinattu ❤️',
  },
  {
    title: 'Your carring towards me ',
    message:
      'నువ్వు నా మీద చూపించే care అంటే నాకు చాలా ఇష్టం. నా health గురించి, నా body గురించి, నేను ఎలా ఉన్నాను, ఏం తింటున్నాను',
  },
  {
    title: 'The happiness you bring',
    message:
      'నువ్వు ఎప్పుడైతే నా జీవితంలోకి వచ్చావో, అప్పటి నుంచి నా life చాలా happy గా మారిపోయింది. నేను ఈరోజు ఇలా ఉన్నానంటే, దానికి కారణం నువ్వే.❤️',
  },
  {
    title: 'The way youre talking to me',
    message:
      'నువ్వు నాతో మాట్లాడే పద్ధతి అంటే నాకు చాలా ఇష్టం. ఎలాంటి కల్మషం లేకుండా, ఏ intention అయినా సరే చాలా స్వచ్ఛంగా, pure గా మాట్లాడతావు కదా, అది నాకు చాలా ఇష్టం.',
  },
  {
    title: 'I am lucky to have you',
    message:
      'నీతో కలిసి గడిపే ప్రతి చిన్న క్షణం కూడా నాకు ఎంతో special గా, meaningful గా అనిపిస్తుంది. ❤️',
  },
];

const timeline = [
  { title: 'The day we met', description: 'మనమిద్దరం first time కలిసిన రోజు ❤️ ఆ రోజును నేను ఎప్పటికీ మర్చిపోలేను. ఎందుకంటే మనిద్దరం first time కలిసింది ఆ రోజే, నా జీవితంలో ఎప్పటికీ గుర్తుండిపోయే అందమైన జ్ఞాపకాల్లో అది ఒకటి. ❤️' },
  { title: 'Our first memorable conversation', description: 'నేను హైదరాబాద్ వెళ్లిపోతున్నప్పుడు నువ్వు నన్ను కలవడానికి వచ్చావు కదా… ఆ రోజు నేను చాలా emotional అయిపోయాను. ఆ రోజు మనం మాట్లాడుకున్న మాటలు, కలిసి గడిపిన ఆ కొద్దిసేపు… అవన్నీ నాకు ఇప్పటికీ బాగా గుర్తున్నాయి. ఆ రోజును నేను ఎప్పటికీ మర్చిపోలేను. ❤️' },
  { title: 'Our favourite moment', description: 'మన favourite moment అంటే మనిద్దరం కలిసి తిరుపతికి వెళ్లిన రోజే. ❤️ ఆ journey, అక్కడ మనం కలిసి గడిపిన time, ఆ చిన్న చిన్న memories అన్నీ నాకు చాలా special.' },
  { title: 'A special memory', description: 'మన special memory అంటే మనిద్దరం కలిసి నిద్రపోయిన moments. ❤️ నీ పక్కన పడుకుని, నిన్ను హత్తుకుని నిద్రపోవడం ఇచ్చే happiness వేరే దేనితోనూ పోల్చలేను. ఆ moments నాకు ఎప్పటికీ చాలా special. ❤️' },
  { title: 'More memories to come', description: 'There is still so much sweetness waiting for us to create together.' },
];

const letterText = `హ్యాపీ బర్త్‌డే, చిన్నా! ❤️🥹

ఈరోజు నేను కోరుకునేది ఒక్కటే… నువ్వు ప్రతిరోజూ ఇలాగే నవ్వుతూ, సంతోషంగా ఉండాలి. 

నా మనసులో ఉన్న ప్రేమను ప్రతిసారీ సరైన మాటల్లో చెప్పలేకపోవచ్చు. కానీ నా జీవితంలో నీకున్న ప్రత్యేకమైన స్థానం ఎప్పటికీ మర్చిపోవద్దు.

ఈ కొత్త ఏడాది నీ జీవితంలో ఎన్నో సంతోషాలను, విజయాలను, ప్రశాంతతను, నువ్వు కోరుకున్న ప్రతి కలను నిజం చేయాలని మనస్ఫూర్తిగా కోరుకుంటున్నాను.

ఇంకో చిన్న కోరిక ఏంటంటే… నీ జీవితంలో వచ్చే మరెన్నో పుట్టినరోజుల్లో నేను కూడా నీ పక్కన ఉండాలి. నీతో ఎన్నో అందమైన జ్ఞాపకాలను సృష్టించుకోవాలి, ఎప్పుడూ నీ ముఖంలో చిరునవ్వు ఉండేలా చూసుకోవాలి.

మరోసారి పుట్టినరోజు శుభాకాంక్షలు! ❤️😘

ఎప్పటికీ నీ సంతోషాన్ని కోరుకునే,

ప్రేమతో,
ప్రవీణ్ ❤️
`;

const finalMessage = `No matter how many birthdays come and go, I hope I get to celebrate many more of them with you. ❤️

ఏదైనా gift ఇద్దామనుకున్నా… కానీ నీ అందం ముందు ఏ gift కూడా పనికిరాదనిపించింది. 🥹❤️

నీకు ఒకటి తెలుసా? నిన్ను నా lucky charm అనుకుంటాను. నువ్వు నా జీవితంలోకి వచ్చి, నాతో ఉండటం వల్లే నేను ఈరోజు ఇలా ఉన్నానేమో అనిపిస్తుంది. నువ్వు నా జీవితంలో లేకపోతే నేను ఎలా ఉండేవాడినో నాకే తెలియదు. I'm genuinely so lucky to have you in my life, Dhana! ❤️

ఈ distance ఇంకొన్ని రోజులు మాత్రమే. మనం అనుకున్నట్టే త్వరలో కలిసి ఉంటాం. నువ్వు కోరుకున్నట్టే కలిసి ఉంటాం, కలిసి నిద్రపోతాం, కలిసి cooking చేసుకుంటాం. మనం కలలు కన్న ప్రతి ఒక్కటి ఒక్కొక్కటిగా నిజం చేసుకుందాం. Everything will happen just the way we dreamed of! ❤️

మనం financial గా settle అయ్యాక పెళ్లి చేసుకుంటే నీకు ఒక మంచి life ఇవ్వగలనని, అందుకే కొంచెం late గా చేసుకుందాం అంటుంటాను. అంతేకానీ నీతో పెళ్లి చేసుకోవడం ఇష్టం లేక కాదు. నిజం చెప్పాలంటే, రోజూ నీతో కలిసి నిద్రపోవాలని, ఉదయం నీ పక్కనే లేవాలని నాకు ఎంతగానో ఉంటుంది. ❤️

Dhana, ఒక్కటి మాత్రం నిజం… నేను నీ జీవితంలో లేకపోతే నీకు ఎంత difference ఉంటుందో నాకు తెలియదు. కానీ నువ్వు నా జీవితంలో లేకపోతే మాత్రం నా life చాలా incomplete గా అనిపిస్తుంది. అది నాకు బాగా అర్థమైంది.

ఇంతకంటే ఇంకేం చెప్పను? నేను ఏం చేసినా, మనం ఎన్ని గొడవలు పడినా, దాని వెనుక ఉన్నది నీ మీద ఉన్న ప్రేమే. కొన్నిసార్లు నువ్వు నా నుంచి దూరమైపోతావేమో అన్న భయం కూడా ఉంటుంది. నిన్ను కోల్పోవడం నాకు అస్సలు ఇష్టం లేదు. I just want us to stay together, no matter what. 🥺❤️

**Happy Birthday, Dhana! 🎂❤️**

నీకు ఇంకొకటి చెప్పాలి…

**I LOVE YOU, DHANU! ❤️😘**

I MISS YOU SO MUCH! I wish I could be with you today, hug you tight and make this day even more special.

No matter what happens, I'll always be cheering for you, loving you and choosing you.

**Forever yours,  
Praveen ❤️**`;

function getTimeLeft() {
  const distance = birthdayTarget.getTime() - Date.now();

  if (distance <= 0) {
    return {
      total: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  return { total: distance, days, hours, minutes, seconds };
}

function TypingLetter() {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const updateText = () => {
      setDisplayedText(letterText.slice(0, index));
      index += 1;
      if (index > letterText.length) {
        clearInterval(timer);
      }
    };

    const timer = window.setInterval(updateText, 18);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <p className="letter-copy" aria-live="polite">
      {displayedText}
      <span className="cursor-blink">|</span>
    </p>
  );
}

function App() {
  const [hasOpened, setHasOpened] = useState(false);
  const [countdown, setCountdown] = useState(getTimeLeft);
  const [selectedReason, setSelectedReason] = useState<number | null>(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [musicEnabled, setMusicEnabled] = useState(false);
  const [giftOpened, setGiftOpened] = useState(false);
  const [finalReveal, setFinalReveal] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getTimeLeft());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    if (musicEnabled) {
      audio.volume = 0.35;
      audio.play().catch(() => setMusicEnabled(false));
      return;
    }

    audio.pause();
  }, [musicEnabled]);

  const isBirthdayHere = countdown.total <= 0;

  return (
    <div className="page-shell">
      <div className="custom-cursor" aria-hidden="true" />

      <div className="floating-hearts" aria-hidden="true">
        {Array.from({ length: 18 }).map((_, index) => (
          <span
            key={index}
            className="heart-particle"
            style={{
              left: `${(index * 14) % 100}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${8 + (index % 5)}s`,
            }}
          />
        ))}
      </div>

      <header className="topbar">
        <div className="brand-wrap">
          <Heart className="brand-icon" />
          <span>For Dhana</span>
        </div>

        <nav className="top-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="content-wrapper">
        <AnimatePresence mode="wait">
          {!hasOpened ? (
            <motion.section
              key="landing"
              className="landing-section"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <div className="landing-background" aria-hidden="true" />
              <div className="welcome-card glass-card">
                <div className="badge-row">
                  <span className="mini-badge">Birthday surprise</span>
                  <Gift className="mini-heart" />
                </div>

                <h1>Hey Dhana, Someone Made Something Special Just For You ❤️</h1>
                <p className="landing-text">
                  Today isn&apos;t just another day. It&apos;s the day someone as beautiful as you came into this world.
                </p>

                <div className="gift-wrapper" onClick={() => setGiftOpened((prev) => !prev)} role="button" tabIndex={0} aria-label="Open gift box" onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setGiftOpened((prev) => !prev);
                  }
                }}>
                  <div className={`gift-box ${giftOpened ? 'opened' : ''}`}>
                    <div className="gift-lid" />
                    <div className="gift-box-body" />
                    <div className="gift-ribbon ribbon-left" />
                    <div className="gift-ribbon ribbon-right" />
                    <div className="gift-bow" />
                  </div>
                </div>

                <button type="button" className="primary-button" onClick={() => setHasOpened(true)}>
                  Open Your Surprise ❤️
                </button>
              </div>
            </motion.section>
          ) : (
            <motion.div
              key="experience"
              className="story-layout"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 32 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              <section id="home" className="hero-section">
                <motion.div
                  className="glass-card hero-card"
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="eyebrow">For the love of my life</p>
                  <h2>Happy Birthday, Dhana! ❤️</h2>
                  <p className="date-line">19 November 2026</p>

                  <div className="countdown-box">
                    <div className="countdown-header">
                      <Sparkles className="sparkle-icon" />
                      <span>{isBirthdayHere ? 'It is officially your birthday!' : 'Birthday countdown'}</span>
                    </div>

                    {isBirthdayHere ? (
                      <p className="birthday-message">The day has arrived — let the celebration begin.</p>
                    ) : (
                      <div className="countdown-grid" aria-live="polite">
                        <div><strong>{countdown.days}</strong><span>Days</span></div>
                        <div><strong>{countdown.hours}</strong><span>Hours</span></div>
                        <div><strong>{countdown.minutes}</strong><span>Minutes</span></div>
                        <div><strong>{countdown.seconds}</strong><span>Seconds</span></div>
                      </div>
                    )}
                  </div>

                  <div className="hero-actions">
                    <a href="#letter" className="primary-button small-button">
                      Read My Letter <ArrowDown size={16} />
                    </a>
                  </div>
                </motion.div>
              </section>

              <section id="letter" className="section-block letter-section">
                <div className="section-heading">
                  <p className="eyebrow">A little note</p>
                  <h3>My birthday letter to you</h3>
                </div>

                <div className="letter-card glass-card">
                  <TypingLetter />
                </div>
              </section>

              <section id="gallery" className="section-block gallery-section">
                <div className="section-heading">
                  <p className="eyebrow">Our moments</p>
                  <h3><Star className="sparkle-icon" /> Memories worth keeping</h3>
                </div>

                <div className="gallery-grid">
                  {galleryItems.map((item, index) => (
                    <motion.button
                      key={item.title}
                      type="button"
                      className="gallery-card"
                      whileHover={{ y: -8, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedImage(index)}
                      aria-label={`Open ${item.title} memory card`}
                    >
                      <img src={item.image} alt={item.title} />
                      <div className="gallery-meta">
                        <h4>{item.title}</h4>
                        <p>{item.caption}</p>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </section>

              <section id="reasons" className="section-block reasons-section">
                <div className="section-heading">
                  <p className="eyebrow">Why you are special</p>
                  <h3>అడిగావు కదా, నీలో నాకు నచ్చిన qualities ఏంటని… అవే ఇవన్నీ!</h3>
                </div>

                <div className="reason-grid">
                  {reasons.map((reason, index) => (
                    <motion.button
                      key={reason.title}
                      type="button"
                      className={`reason-card ${selectedReason === index ? 'active' : ''}`}
                      whileHover={{ y: -6 }}
                      onClick={() => setSelectedReason(index)}
                    >
                      <span className="reason-index">0{index + 1}</span>
                      <h4>{reason.title}</h4>
                      <p>{reason.message}</p>
                    </motion.button>
                  ))}
                </div>
              </section>

              <section id="story" className="section-block story-section">
                <div className="section-heading">
                  <p className="eyebrow">Our story</p>
                  <h3>Beautiful chapters, one lovely journey</h3>
                </div>

                <div className="timeline">
                  {timeline.map((event, index) => (
                    <div className="timeline-item" key={event.title}>
                      <div className="timeline-dot" aria-hidden="true" />
                      <div className="timeline-card glass-card">
                        <span className="timeline-number">{index + 1}</span>
                        <h4>{event.title}</h4>
                        <p>{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="music" className="section-block music-section">
                <div className="section-heading">
                  <p className="eyebrow">Soundtrack</p>
                  <h3>Play a tiny love song for you</h3>
                </div>

                <div className="music-card glass-card">
                  <div className="music-visual" aria-hidden="true">
                    {[1, 2, 3, 4, 5].map((bar) => (
                      <span key={bar} className={musicEnabled ? 'bar active' : 'bar'} style={{ animationDelay: `${bar * 0.14}s` }} />
                    ))}
                  </div>

                  <div className="music-details">
                    <p className="track-name">
                      <Music2 size={16} className="track-icon" />
                      Birthday Mood
                    </p>
                    <p className="track-subtitle">A placeholder track you can personalize later.</p>
                  </div>

                  <button
                    type="button"
                    className="music-button"
                    onClick={() => setMusicEnabled((prev) => !prev)}
                    aria-label={musicEnabled ? 'Pause music' : 'Play music'}
                  >
                    {musicEnabled ? <Pause size={18} /> : <Play size={18} />}
                    {musicEnabled ? 'Pause' : 'Play'}
                  </button>

                  <audio ref={audioRef} loop preload="auto" aria-hidden="true">
                    <source src="/audio/Arere Yekkada.mp3" type="audio/mp3" />
                  </audio>
                </div>
              </section>

              <section id="surprise" className="section-block final-section">
                <div className="surprise-card glass-card">
                  <div className="surprise-header">
                    <CalendarHeart className="surprise-icon" />
                    <p className="eyebrow">One last thing</p>
                  </div>

                  <h3>One Last Thing, Dhana... ❤️</h3>

                  <button type="button" className="primary-button" onClick={() => setFinalReveal(true)}>
                    Click For Your Final Message ❤️
                  </button>

                  <AnimatePresence>
                    {finalReveal && (
                      <motion.div
                        className="final-message-box"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="confetti-field" aria-hidden="true">
                          {Array.from({ length: 28 }).map((_, index) => (
                            <span
                              key={index}
                              className="confetti-piece"
                              style={{
                                left: `${(index * 13) % 100}%`,
                                animationDelay: `${(index % 7) * 0.1}s`,
                                background: index % 2 === 0 ? '#ff9bbd' : '#ffd8a3',
                              }}
                            />
                          ))}
                        </div>

                        <div className="final-message-text">
                          {finalMessage.split('\n').map((line, index) => (
                            <span key={line + index}>{line}<br /></span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={galleryItems[selectedImage].image}
              alt={galleryItems[selectedImage].title}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            />
            <div className="lightbox-caption">
              <h4>{galleryItems[selectedImage].title}</h4>
              <p>{galleryItems[selectedImage].caption}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
