import { Link, Routes, Route, BrowserRouter, useParams, useLocation } from "react-router-dom";
import { About } from "./About";
import { Progress } from "./Progress";
import { GameDiary } from "./GameDiary";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, } from 'react-bootstrap';
import { PixelArt } from "./PixelArt";
import { useState } from "react";
import { RenderPage } from "./RenderPage";

function App() {
  return (
    <BrowserRouter>
      <Container fluid className="overflow-hidden" style={{
        height: '100vh',
        backgroundImage: `url('${process.env.PUBLIC_URL}/photo1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* <img src={`${process.env.PUBLIC_URL}/photo1.jpg`} /> */}
        <Header />
        <div className="d-flex flex-row align-item-start text-left" style={{ fontFamily: "Noto Sans JP" }}>
          <Tabs />
          <Routes>
            <Route path="/About" element={<About />} />
            <Route path="/Progress" element={<Progress />} /> 
            <Route path="/Progress/:article" element={<RenderPage link={"/Progress"} />} />
            <Route path="/GameDiary" element={<GameDiary />} />
            <Route path="/GameDiary/:article" element={<RenderPage link={"/GameDiary"} />} />
            <Route path="/PixelArt" element={<PixelArt />} />
          </Routes>
        </div>
      </Container>
    </BrowserRouter>
  );
}

const Header = () => {
  return (
    <Row className="p-3" style={{ color: "white", fontFamily: "游ゴシック", }}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 className="" style={{ fontSize: "36px", color: "white" }}>今日はもう寝ようぜ</h1>
      </Link>
      <p style={{ fontSize: "14px" }}>早く寝たほうがいいゲーマーブログ</p>
      <span className='border' style={{ width: "60vw", marginTop: "10px" }}></span>
    </Row>
  );
}

const Tabs = () => {
  const [isFinish1, setIsFinish1] = useState(false);
  const AnimationFinish1 = () => { setIsFinish1(true); }
  const [isFinish2, setIsFinish2] = useState(false);
  const AnimationFinish2 = () => { setIsFinish2(true); }
  const [isFinish3, setIsFinish3] = useState(false);
  const AnimationFinish3 = () => { setIsFinish3(true); }
  const [isFinish4, setIsFinish4] = useState(false);
  const AnimationFinish4 = () => { setIsFinish4(true); }
  return (
    <div className="d-flex align-items-start flex-column flex-wrap" style={{ width: "30vw" }}>
      <Link to="/About" href="/page1" className={`tab ${isFinish1 ? "corsorhover" : "tab-slide1"}`} style={{ fontSize: "24px", marginTop: "20px", marginLeft: "20px" }} onAnimationEnd={AnimationFinish1}>About</Link>
      <Link to="/Progress" href="/page2" className={`tab ${isFinish2 ? "corsorhover" : "tab-slide2"}`} style={{ fontSize: "24px", marginTop: "20px", marginLeft: "20px" }} onAnimationEnd={AnimationFinish2}>制作進捗</Link>
      <Link to="/GameDiary" href="/page3" className={`tab ${isFinish3 ? "corsorhover" : "tab-slide3"}`} style={{ fontSize: "24px", marginTop: "20px", marginLeft: "20px" }} onAnimationEnd={AnimationFinish3}>あそんだゲーム</Link>
      <Link to="/PixelArt" href="/page4" className={`tab ${isFinish4 ? "corsorhover" : "tab-slide4"}`} style={{ fontSize: "24px", marginTop: "20px", marginLeft: "20px" }} onAnimationEnd={AnimationFinish4}>ドット絵</Link>
    </div>
  );
};

export default App;