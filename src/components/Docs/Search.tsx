import { DocSearch } from "@docsearch/react";
import "@docsearch/css";

export default function Search() {
    return (
        <DocSearch
            appId={process.env.NEXT_PUBLIC_APPLICATION_ID}
            indexName="rowifi-website"
            apiKey={process.env.NEXT_PUBLIC_API_KEY || ""}
        />
    );
}