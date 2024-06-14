import { Container, Image } from "react-bootstrap";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { articlestyle } from "./ArticleStyle";

export const RenderPage = (props) => {
    const url = useLocation();
    const path = url.pathname;
    const distination = path.substring(path.lastIndexOf("/"));
    const [jsonpath, setJsonpath] = useState("");
    const [error, setError] = useState(null);
    const [title, setTitle] = useState("");
    const [markdown, setMarkdown] = useState("");

    //markdown.jsonの要素から該当する要素番号を探す
    const fetchJsonIndex = async () => {
        try {
            let path;
            console.log(props.link);
            if (props.link === "/GameDiary") {
                path = "/markdown.json";
            }
            else if(props.link === "/Progress"){
                path = "/progressindex.json";
            }
            //console.log(path);
            //markdown.jsonから、pathと同じtitleを含む要素番号を探す
            const response = await fetch(`${process.env.PUBLIC_URL}${path}`);
            const data = await response.json();
            const articleIndex = data.articles.findIndex(item => item.path === distination);
            if (articleIndex !== -1) {
                fetchJsonData(`/articles${data.articles[articleIndex].link}`);
                setTitle(data.articles[articleIndex].title);
            }
            //指定した要素番号のlinkを読み込んで、記事をセットする
        } catch (error) {
            setError(error.message);
            console.error('Error fetching article:', error);
        }
    };

    //mdファイルの内容をstringに変換する
    const fetchJsonData = async (path) => {
        try {
            const response = await fetch(`${process.env.PUBLIC_URL}${path}`);
            const text = await response.text();
            setMarkdown(text);
        } catch (error) {
            setError(error.message);
            console.error('Error fetching JSON data:', error);
        }
    };

    useEffect(() => {
        // 記事データのインデックスを取得する
        fetchJsonIndex();
    }, []);

    //目次生成用
    const parser = new DOMParser();
    const doc = parser.parseFromString(markdown, 'text/html');
    const headings = doc.querySelectorAll('h3');

    const TOC = () => {
        const toc = Array.from(headings).map((heading, index) => (
            <li style={{ marginBottom: "8px" }} key={index}>{heading.textContent}</li>
        ));

        return <ul style={{ color: "white" }}>{toc}</ul>;
    };

    if (markdown === "") {
        return <div className={"m-3 h1"} style={{ color: "white" }}>Loading...</div>
    }

    return (
        <>
            {error ? (
                <p>Error: {error}</p>
            ) : (
                <Container fluid className="overflow-auto text-left parent" style={{ width: "50%", height: "80vh", marginLeft: "0px" }}>
                    <div className="text-wrap" style={{ width: "40vw" }}>
                        <h1 style={{ color: "white", paddingBottom: "2px", marginBottom: "12px", borderBottom: "2px solid white", opacity: "1" }}>{title}</h1>
                        <div className="index">
                            <TOC />
                        </div>
                        <ReactMarkdown rehypePlugins={rehypeRaw} components={articlestyle}>{markdown}</ReactMarkdown>
                    </div>
                </Container>
            )}
        </>
    )
};