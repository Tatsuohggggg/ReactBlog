import { Container } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import { useEffect,useState } from 'react';
import './Body.css';
import './pixelArt.css';

export const PixelArt = () => {
    return (
        <Container fluid className='overflow-auto text-left parent' style={{width: "70vw",height: "80vh",marginLeft: "0px" }}>
            <div style={{width: "40vw"}}>
                <header className='d-flex flex-row align-items-end'>
                    <h1 style={{ color: "white" }}>ドット絵</h1>
                    <p style={{ fontSize: "14px",marginBottom: "8px",marginLeft:"5px" }}>気ままにお絵描き</p>
                </header>
                <Text />
            </div>
        </Container>
    );
};

const Text = () => {
    const [markdown, setMarkdown] = useState("");

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/pixelart.md`)
        .then((m) => {
            return m.text();
        })
        .then((md) => {
            setMarkdown(md);
        });
    }, []);

    return (<ReactMarkdown components={components}>{markdown}</ReactMarkdown>)
}

const components = {
    h2: ({ ...props}) => <h2 className='title ' style={{color: "white",marginBottom:"20px",borderBottom: "2px solid white"}}>{props.children}</h2>,
    img: ({ ...props }) => <img className="img-fluid" style={{width: "100%", height: "100%"}} src={`${process.env.PUBLIC_URL}/${props.src}`} alt="aaa">{props.children}</img>,
};