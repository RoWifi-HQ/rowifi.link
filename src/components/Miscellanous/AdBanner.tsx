import { useEffect } from "react";

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
        <ins className="adsbygoogle container"
            style={{ display: "block" }}
            data-ad-client="ca-pub-1197269638005739"
            data-ad-slot="7242297329"
            data-ad-format="auto" />
    );
}