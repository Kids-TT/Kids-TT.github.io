import './App.css';
import imageOne from '../image/image_1.jpeg';
import imageTwo from '../image/image_2.jpeg';
import imageThree from '../image/image_3.jpeg';

function App() {
  const handleContactSubmit = (event) => {
    event.preventDefault();
    // TODO: 이메일 전송 로직 구현 예정
  };

  return (
    <div className="page">
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

      <main>
        <section className="media-section">
          <img src={imageOne} alt="키즈티티 활동 소개 1" className="media-section__image" />
        </section>

        <section className="media-section">
          <img src={imageTwo} alt="키즈티티 활동 소개 2" className="media-section__image" />
        </section>

        <section className="media-section">
          <div className="media-section__video">
            <iframe
              title="키즈티티 홍보 영상 1"
              src="https://www.youtube.com/embed/pANiMM79IQg?start=312"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        <section className="media-section">
          <div className="media-section__video">
            <iframe
              title="키즈티티 홍보 영상 2"
              src="https://www.youtube.com/embed/Fz8fz3g5Xh4"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>

        <section className="media-section">
          <img src={imageThree} alt="키즈티티 활동 소개 3" className="media-section__image" />
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-section__inner">
            <h2 className="section-title">문의하기</h2>
            <p className="section-subtitle">
              프로그램, 제휴, 출강 문의를 남겨주시면 빠르게 답변드리겠습니다.
            </p>
            <form className="contact-form" onSubmit={handleContactSubmit}>
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
      </main>

      <footer className="footer">
        <div className="footer__inner">
          <p>대표 : 권영득</p>
          <p>주소 : 인천시 계양구 장제로 708, 310</p>
          <p>연락처 : 1588-1181 | 이메일 : yoci7777@gmail.com</p>
          <p>사업자등록번호 : 790-81-02662</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
