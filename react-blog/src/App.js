import { BrouserRouter, Link, Routes, Route, BrowserRouter } from "react-router-dom";
import { About } from "./About";
import { Progress } from "./Progress";
import { GameDiary } from "./GameDiary";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <Container fluid style={{
        height: '100vh',
        backgroundImage: `url('./photo1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <Header />
        <div className="d-flex flex-row align-item-start">
          <Tabs />
          <Routes>
            <Route path="/About" element={<About />} />
            <Route path="/GameDiary" element={<GameDiary />} />
            <Route path="/Progress" element={<Progress />} />
          </Routes>
          {/* <RightSpace /> */}
        </div>
      </Container>

    </BrowserRouter>
  );
}

const Header = () => {
  return (
    <Row className="p-3" style={{ color: "white" }}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h1 style={{ fontSize: "36px", color: "white" }}>おててやわらかかに</h1>
      </Link>
      <p style={{ fontSize: "14px" }}>やわらかすぎるおててでゲームを遊ぶ器用なかに</p>
      <span className='border' style={{ width: "60vw", marginTop: "10px" }}></span>
    </Row>
  );
}

const Tabs = () => {
  return (
    <div className="d-flex align-items-start flex-column flex-wrap" style={{ width: "30vw" }}>
      <Link to="/About" href="/page1" className='tab-link' style={{ fontSize: "24px", marginTop: "20px", marginLeft: "20px" }}>About</Link>
      <Link to="/GameDiary" href="/page2" className="tab-link" style={{ fontSize: "24px", marginTop: "20px", marginLeft: "20px" }}>あそんだゲーム</Link>
      <Link to="/Progress" href="/page3" className="tab-link" style={{ fontSize: "24px", marginTop: "20px", marginLeft: "20px" }}>制作進捗</Link>
    </div>
  );
};

const RightSpace = () => {
  return (
    <div className="" style={{ width: "20vw" }}></div>
  )
}

export default App;
