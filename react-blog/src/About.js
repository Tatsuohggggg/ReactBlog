import { Container, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import './Body.css';
import './About.css';
import { articlestyle } from "./ArticleStyle";

export const About = () => {
    return (
        <Container fluid className="overflow-auto text-left parent" style={{ width: "50%", height: "100vh", marginLeft: "0px" }}>
            <div className="text-wrap" style={{ width: "40vw" }}>
                <AboutContent />
            </div>
        </Container>
    );
};

const AboutContent = () => {
    const [aboutContent, setAboutContent] = useState("");

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/About.md`)
            .then((response) => {
                return response.text();
            })
            .then((md) => {
                setAboutContent(md);
            });
    }, []);

    return (<ReactMarkdown rehypePlugins={rehypeRaw} components={articlestyle}>{aboutContent}</ReactMarkdown>);
}

// const components = {
//     h1: ({ ...props }) => <h1 className={`${props.className}`} style={{ fontSize: "32px", color: "white", width: "80%", marginBottom: "20px", paddingBottom: "4px", borderBottom: "2px solid white" }}>{props.children}</h1>,
//     h2: ({ ...props }) => <h2 style={{ color: "white", marginLeft: "8px" }}>{props.children}</h2>,
//     p: ({ ...props }) => <p style={{ marginLeft: "12px" }}>{props.children}</p>,
//     img: ({ ...props }) => <Image style={{ width: "128px", height: "128px" }} src={`${process.env.PUBLIC_URL}/${props.src}`} alt="aaa">{props.children}</Image>,
// };