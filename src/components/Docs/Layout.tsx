import { ClassAttributes, HTMLAttributes } from "react";
import { Header } from "../Header";

export default function Layout(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement>) {
    return (
        <div className="text-white font-inter flex flex-col min-h-screen relative">
            <Header />
            <div className="flex-1 flex flex-row">
                <div className="bg-hover-dark w-1/6">
                    <span>Home</span>
                </div>
                <main {...props} />
            </div>
        </div>
    );
}