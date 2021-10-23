import { ClassAttributes, HTMLAttributes } from "react";
import { DocsHeader } from "../Header";
import Sidebar from "./Sidebar";

export default function Layout(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement>) {
    return (
        <div className="text-white font-inter min-h-screen h-full relative">
            <DocsHeader />
            <Sidebar />
            <div className="prose lg:prose-lg max-w-none w-full md:pl-64 pt-12 md:pt-24">
                <div className="px-8 pb-8 pt-12 xl:px-48">
                    <main {...props} />
                </div>
            </div>
        </div>
    );
}