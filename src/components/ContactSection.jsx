import React from 'react';

function ContactSection({ onSubmit }) {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-section__inner">
        <h2 className="section-title">문의하기</h2>
        <p className="section-subtitle">
          프로그램, 제휴, 출강 문의를 남겨주시면 빠르게 답변드리겠습니다.
        </p>
        <form className="contact-form" onSubmit={onSubmit}>
          <label className="contact-form__field">
            <span>이름</span>
            <input type="text" name="name" placeholder="홍길동" required />
          </label>
          <label className="contact-form__field">
            <span>연락처</span>
            <input type="tel" name="phone" placeholder="010-0000-0000" required />
          </label>
          <label className="contact-form__field">
            <span>이메일</span>
            <input type="email" name="email" placeholder="example@kidstt.com" required />
          </label>
          <label className="contact-form__field">
            <span>문의 내용</span>
            <textarea name="message" rows="6" placeholder="문의 내용을 입력해주세요." required />
          </label>
          <button type="submit" className="contact-form__submit">
            메일 보내기
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;

