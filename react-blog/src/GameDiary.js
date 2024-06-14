import { Link, Routes, Route, BrowserRouter, useLocation,  } from "react-router-dom";
import { Container, Image } from "react-bootstrap";
import './GameDiary.css';
import { useState, useEffect } from "react";

export const GameDiary = () => {
    const [files, setFiles] = useState([]);
    const location = useLocation();
    const nowpagepath = location.pathname;
    console.log(nowpagepath);

    //JSONファイルを読み込む関数
    const fetchJsonData = async () => {
        try {
            const response = await fetch(`${process.env.PUBLIC_URL}/markdown.json`);
            const data = await response.json();
            setFiles(data.articles);
        } catch (error) {
            console.error('Error fetching JSON data:', error);
        }
    };

    useEffect(() => {
        fetchJsonData();
    }, [])

    return (
        <Container className="overflow-auto text-left parent d-flex flex-column" style={{ width: "40%", height: "80vh", marginLeft: "0px" }}>
            <div>
                <header className='d-flex flex-row align-items-end' style={{ marginBottom: "12px", borderBottom: "2px solid white", opacity: "1" }}>
                    <h1 style={{ color: "white" }}>あそんだゲーム</h1>
                    <p style={{ fontSize: "14px", marginBottom: "8px", marginLeft: "5px" }}>遊んだゲームの感想や紹介などなど</p>
                </header>
            </div>
            <div style={{ width: "100%", height: "100vh", backgroundColor: 'rgba(128,128,128,0.5)' }}>
                {files.map((item, index) => (
                    <ArticleCard key={index} value={item} />
                ))}
            </div>
        </Container>
    );
};

const ArticleCard = ({ value }) => {
    const location = useLocation();
    const nowpagepath = location.pathname;
    return (
        <Link to={`${nowpagepath}${value.path}`} style={{ textDecoration: "none" }}>
            <button className="cardcontent d-flex flex-row" style={{ backgroundColor: "transparent", width: "100%"}}>
                <div className="header">
                    <Image className="thumbnail p-2" src={`${process.env.PUBLIC_URL}${value.thumbnail}`} />
                </div>
                <div className="body d-flex flex-column">
                    <div className="date">{value.date}</div>
                    <div className="title">{value.title}</div>
                </div>
            </button>
        </Link>
    );
};