import { useEffect } from "react";

const style = {
    display: "block",
    height: "128px",
    "@media (min-width: 1024px)": {
        width: "1024px",
    }
};

export default function AdBanner() {
    useEffect(() => {
        try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.log(err);
        }
    }, []);

    return (
        <ins className="adsbygoogle"
            style={style}
            data-ad-client="ca-pub-1197269638005739"
            data-ad-slot="7242297329"
            data-ad-format="auto" />
    );
}