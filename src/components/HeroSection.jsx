import React from 'react';

function HeroSection() {
  return (
    <header className="hero">
      <div className="hero__inner">
        <p className="hero__badge">THANK YOU TEACHER</p>
        <h1 className="hero__title">키즈티티</h1>
        <p className="hero__subtitle">
          우리 아이들의 건강한 활동을 책임지는 전문 교육 기관
        </p>
        <a className="hero__cta" href="#contact">
          문의하기
        </a>
      </div>
    </header>
  );
}

export default HeroSection;

