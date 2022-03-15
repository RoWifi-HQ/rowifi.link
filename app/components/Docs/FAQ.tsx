import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

interface FAQProps {
    question: string,
    children: React.ReactNode
}

export default function FAQ({ question, children }: FAQProps) {
    return (
        <Disclosure>
            {({ open }) => (
                <div className="border-t border-b py-2 border-[#333]">
                    <Disclosure.Button className="flex items-center w-full">
                        <span className="font-semibold">
                            {question}
                        </span>
                        <ChevronDownIcon
                            className={`${open ? "transform rotate-180" : ""} w-7 h-7 ml-auto`}
                        />
                    </Disclosure.Button>
                    <Transition
                        show={open}
                        enter="transition duration-200 ease-out"
                        enterFrom="transform opacity-0 -translate-y-full"
                        enterTo="transform opacity-100 translate-y-0"
                        leave="transition duration-200 ease-out"
                        leaveFrom="transform opacity-100 translate-y-0"
                        leaveTo="transform opacity-0 -translate-y-full"
                    >
                        <Disclosure.Panel static as="p" className="mt-5">
                            {children}
                        </Disclosure.Panel>
                    </Transition>
                </div>
            )}
        </Disclosure>
    );
}