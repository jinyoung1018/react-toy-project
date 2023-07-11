const MiddleBar = () => {
    return(
        <div className="MiddleBar">
        <ul className="amount">
        <li>
          <div>
            <div class="contents1">사용자 수</div>
            <div class="result">2,734,828</div>
          </div>
        </li>
        <li>
          <div>
            <div class="contents1">방문자 수</div>
            <div class="result">9,432,048</div>
          </div>
        </li>
        <li>
          <div>
            <div class="contents1">리뷰 수</div>
            <div class="result">3,851,938</div>
          </div>
        </li>
        <li>
          <div>
            <div class="contents1">신메뉴 등록 수</div>
            <div class="result">1,000</div>
          </div>
        </li>
      </ul>
      </div>
    )
};
export default MiddleBar;