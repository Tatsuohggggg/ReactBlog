import { Container } from "react-bootstrap";
import './Body.css';

export const About = () => {
    return (
        <Container style={{ width: "80vw" }}>
            <div className="text-wrap" style={{ width: "40vw" }}>
                <h1 className="" style={{ color: "white" }}>About</h1>

                <h2 style={{ color: "white", marginTop: "30px", marginBottom: "10px" }}>ここは</h2>
                <p className="text-break">ゲームが大好きなおててやわらかかにが、ゲームを遊び、そして作ります。</p>
                <p className="text-break">かにはゲームを通じて、みんなと仲良くなりたいようです...</p>

                <h2 style={{ color: "white" }}>おてつだい</h2>
                <div className="d-flex flex-row align-items-start">
                    <img src={`${process.env.PUBLIC_URL}/monad.png`} alt="monad"></img>
                    <div className="text-break d-flex flex-column align-items-start" style={{ color: "white", marginLeft: "10px" }}>
                        <h3 >たつお</h3>
                        <p style={{ fontSize: "16px" , marginBottom : "10px" }}>かにの代わりにサイトの管理や記事の作成を行う人。</p>
                        <p style={{ fontSize: "16px" }}>いくらおててが柔らかくても、かににキーボード操作は厳しいらしい。</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};