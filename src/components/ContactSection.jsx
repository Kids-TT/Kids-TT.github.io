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
            <span>지역/원이름</span>
            <input
              type="text"
              name="location"
              placeholder="서울시 강남구 ㅇㅇ원"
              required
            />
          </label>
          <label className="contact-form__field">
            <span>연락처</span>
            <input type="tel" name="phone" placeholder="010-0000-0000" required />
          </label>
          <label className="contact-form__field">
            <span>원하는 과목/타임수</span>
            <input
              type="text"
              name="program"
              placeholder="체육 발레 각 30분 2타임"
              required
            />
          </label>
          <label className="contact-form__field">
            <span>요일/시간</span>
            <textarea
              name="schedule"
              rows="4"
              placeholder="월,화 10:00~13:00 (시간·요일 변경 가능 여부 O/X)"
              required
            />
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

