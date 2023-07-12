const About = () => {
    return(
        <div className="About" id="about">
            <h1>About</h1>
            <div class="contents1">우리 아이와 새로운 추억을 만들어보세요.</div>
      <ul class="icons">
        <li>
          <div class="icon_img">
            <img src={process.env.PUBLIC_URL + 'assets/home.png'} />
          </div>
          <div class="contents1_bold">Pawsing</div>
          <div class="contents2">AI와 함께하는 반려동물 온라인 스튜디오</div>
          <div class="more">MORE</div>
        </li>
        <li>
          <div class="icon_img">
          <img src={process.env.PUBLIC_URL + 'assets/user.png'} />
          </div>
          <div class="contents1_bold">앨범 제작</div>
          <div class="contents2">새로운 추억을 모아 나만의 앨범 만들기.</div>
          <div class="more">MORE</div>
        </li>
        <li>
          <div class="icon_img">
          <img src={process.env.PUBLIC_URL + 'assets/cart.png'} />
          </div>
          <div class="contents1_bold">폰 케이스 제작</div>
          <div class="contents2">내 손 안에 우리만의 추억을 만들어 보세요.</div>
          <div class="more">MORE</div>
        </li>
      </ul>
        </div>
    )
};

export default About;