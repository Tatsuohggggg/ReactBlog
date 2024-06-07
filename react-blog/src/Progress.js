import { Container } from 'react-bootstrap';
import './Body.css';

export const Progress = () => {
    return (
        <Container style={{ width: "80vw" }}>
            <div>
                <header className='d-flex flex-row align-items-end'>
                    <h1 style={{ color: "white" }}>制作進捗</h1>
                    <p style={{ fontSize: "14px",marginBottom: "8px",marginLeft:"5px" }}>現在作っているゲームの進捗報告や備忘録をまとめていくよ</p>
                </header>
            </div>
        </Container>
    );
};