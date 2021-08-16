import { ClassAttributes, HTMLAttributes } from "react";
import { DocsHeader } from "../Header";
import Sidebar from "./Sidebar";

export default function Layout(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement>) {
    return (
        <div className="text-white font-inter flex flex-col min-h-screen relative">
            <DocsHeader />
            <div className="flex-1 flex flex-row">
                <Sidebar />
                <main {...props} />
            </div>
        </div>
    );
}