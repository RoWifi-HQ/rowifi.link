import { ClassAttributes, HTMLAttributes } from "react";
import { DocsHeader } from "../Header";
import Sidebar from "./Sidebar";

export default function Layout(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement>) {
    return (
        <div className="text-white font-inter flex flex-col min-h-screen h-full relative">
            <DocsHeader />
            <div className="flex-1 flex flex-row">
                <Sidebar />
                <div className="px-8 xl:px-48 pt-24 pb-8 prose lg:prose-lg max-w-none w-full md:w-5/6">
                    <main {...props} />
                </div>
            </div>
        </div>
    );
}