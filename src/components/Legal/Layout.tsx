import { ClassAttributes, HTMLAttributes } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";

export default function Layout(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement>) {
    return (
        <div className="text-white font-inter min-h-screen h-full relative">
            <Header />
            <div className="prose lg:prose-lg max-w-none w-full pt-24 pb-24 px-96">
                <main {...props} />
            </div>
            <Footer />
        </div>
    );
}