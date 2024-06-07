import { Container } from "react-bootstrap";

export const GameDiary = () => {
    return (
        <Container style={{ width: "80vw" }}>
            <div>
                <header className='d-flex flex-row align-items-end'>
                    <h1 style={{ color: "white" }}>あそんだゲーム</h1>
                    <p style={{ fontSize: "14px",marginBottom: "8px",marginLeft:"5px" }}>遊んだゲームの感想や紹介などなど</p>
                </header>
            </div>
        </Container>
    );
  };