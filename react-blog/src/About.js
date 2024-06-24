import { Container, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import './Body.css';
import './About.css';
import { articlestyle } from "./ArticleStyle";

export const About = () => {
    return (
        <Container fluid className="overflow-auto text-left parent" style={{ width: "70vw", height: "100vh", marginLeft: "0px" }}>
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