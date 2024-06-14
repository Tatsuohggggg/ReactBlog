import { Image } from "react-bootstrap";

export const articlestyle = {
    h1: ({ ...props }) => <h1 className={`${props.className}`} style={{ fontSize: "32px", color: "white", width: "80%", marginBottom: "20px", paddingBottom: "4px", borderBottom: "2px solid white" }}>{props.children}</h1>,
    h2: ({ ...props }) => <h2 style={{ color: "white", marginLeft: "8px" }}>{props.children}</h2>,
    p: ({ ...props }) => <p style={{ marginLeft: "12px" }}>{props.children}</p>,

    img: ({ ...props }) => {
        let style = {
            width: "128px",
            height: "128px"
        };
        if (props.alt === 'thumbnail') {
            style = { ...style,width:"100%",height:"auto" }
        };
        return <Image style={style} src={`${process.env.PUBLIC_URL}/image/${props.src}`} alt="aaa">{props.children}</Image>;
    },
}