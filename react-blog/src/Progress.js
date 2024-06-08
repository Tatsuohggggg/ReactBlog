import { Container } from 'react-bootstrap';
import './Body.css';
import { useEffect,useState } from 'react';
import ReactMarkdown from 'react-markdown';

export const Progress = () => {
    return (
        <Container style={{ width: "80vw" }}>
            <div>
                <header className='d-flex flex-row align-items-end'>
                    <h1 style={{ color: "white" }}>制作進捗</h1>
                    <p style={{ fontSize: "14px",marginBottom: "8px",marginLeft:"5px" }}>現在作っているゲームの進捗報告や備忘録をまとめていくよ</p>
                </header>
            <Text style={{color: "white"}} />
            </div>
        </Container>
    );
};

const Text = () => {
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch(`./TestProgress.md`)
        .then((m) => {
            return m.text();
        })
        .then((md) => {
            setMarkdown(md);
        });
    }, []);

    return (<ReactMarkdown>{markdown}</ReactMarkdown>)
}