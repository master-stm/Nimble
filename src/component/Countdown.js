import React, { useState, useEffect } from 'react';
import './countdown.css';
const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-06-14T11:00:00');
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0,seconds: 0  };
    }

    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="py-5 text-center"
      style={{
        backgroundColor: '#E8F8E4',
        backgroundImage:
          'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.01) 10px, rgba(0,0,0,0.01) 20px)',
        fontFamily: 'Lato, sans-serif',
      }}
    >
      <h2 className="fw-bold mb-4" style={{ fontSize: '1.8rem' }}>
        Launching soon! <span role="img" aria-label="rocket">🚀</span>
      </h2>

      <div className="countdown-wrapper d-flex justify-content-center gap-3 flex-wrap">

        {/* Day Box */}
            <div className="px-4 py-3 rounded countdown-box" style={{ backgroundColor: '#E2F5DB' }}>
            <h3 className="fw-bold mb-0 ticker-number" style={{ color: '#074F51', fontSize: '2rem' }} key={timeLeft.days}>
                {timeLeft.days}
            </h3>
            <small className="text-muted">Days</small>
            </div>

            {/* Hour Box */}
            <div className="px-4 py-3 rounded countdown-box" style={{ backgroundColor: '#E2F5DB' }}>
            <h3 className="fw-bold mb-0 ticker-number" style={{ color: '#074F51', fontSize: '2rem' }} key={timeLeft.hours}>
                {timeLeft.hours}
            </h3>
            <small className="text-muted">Hours</small>
            </div>

            {/* Minute Box */}
            <div className="px-4 py-3 rounded countdown-box" style={{ backgroundColor: '#E2F5DB' }}>
            <h3 className="fw-bold mb-0 ticker-number" style={{ color: '#074F51', fontSize: '2rem' }} key={timeLeft.minutes}>
                {timeLeft.minutes}
            </h3>
            <small className="text-muted">Minutes</small>
            </div>
        {/* Second Box */}
            <div className="px-4 py-3 rounded countdown-box" style={{ backgroundColor: '#E2F5DB' }}>
            <h3
                className="fw-bold mb-0 ticker-number-animate"
                style={{ color: '#074F51', fontSize: '2rem' }}
                key={timeLeft.seconds}
            >
                {String(timeLeft.seconds).padStart(2, '0')}
            </h3>
            <small className="text-muted">Seconds</small>
            </div>

      </div>
    </section>
  );
};

export default Countdown;
