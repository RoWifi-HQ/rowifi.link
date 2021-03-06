import { useState, useCallback, useRef, useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";
import { Link, useNavigate } from "remix";
import { DocSearchModal, useDocSearchKeyboardEvents } from "@docsearch/react";
import {
  InternalDocSearchHit,
  StoredDocSearchHit,
} from "@docsearch/react/dist/esm/types";

const ACTION_KEY_DEFAULT = ["Ctrl ", "Control"];
const ACTION_KEY_APPLE = ["⌘", "Command"];

interface HitProps {
  hit: InternalDocSearchHit | StoredDocSearchHit;
  children: ReactNode;
}

function Hit({ hit, children }: HitProps) {
  return <Link to={hit.url}>{children}</Link>;
}

interface SearchProps {
  className?: string;
}

export default function Search({ className }: SearchProps) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const searchButtonRef = useRef<HTMLButtonElement>(null);
  const [initialQuery, setInitialQuery] = useState(null);
  const [browserDetected, setBrowserDetected] = useState(false);
  const [actionKey, setActionKey] = useState(ACTION_KEY_DEFAULT);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const onInput = useCallback(
    (e) => {
      setIsOpen(true);
      setInitialQuery(e.key);
    },
    [setIsOpen, setInitialQuery]
  );

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    onInput,
    searchButtonRef,
  });

  useEffect(() => {
    if (typeof navigator !== "undefined") {
      if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
        setActionKey(ACTION_KEY_APPLE);
      } else {
        setActionKey(ACTION_KEY_DEFAULT);
      }
      setBrowserDetected(true);
    }
  }, []);

  return (
    <div className={className}>
      <button
        type="button"
        ref={searchButtonRef}
        onClick={onOpen}
        className="group mx-auto bg-[#171717] flex leading-6 font-medium items-center space-x-3 sm:space-x-4 hover:text-gray-600 transition-colors duration-200 py-2 px-8 lg:px-24 rounded-lg my-2 md:my-0"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          className="text-gray-400 group-hover:text-gray-500 transition-colors duration-200"
        >
          <path
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Quick search for anything</span>
        <span
          style={{ opacity: browserDetected ? "1" : "0" }}
          className="hidden sm:block text-gray-200 text-sm leading-5 py-0.5 px-1.5 border border-gray-300 rounded-md"
        >
          <span className="sr-only">Press </span>
          <kbd className="font-sans">
            <abbr title={actionKey[1]} className="no-underline">
              {actionKey[0]}
            </abbr>
          </kbd>
          <span className="sr-only"> and </span>
          <kbd className="font-sans">K</kbd>
          <span className="sr-only"> to search</span>
        </span>
      </button>
      {isOpen &&
        createPortal(
          <DocSearchModal
            initialQuery={initialQuery || ""}
            initialScrollY={window.scrollY}
            onClose={onClose}
            indexName="rowifi-website"
            apiKey={"9a1b0d3dd03798e050cc6a9671c5407a"}
            appId={"BTXZGJ6Y7A"}
            navigator={{
              navigate({ itemUrl }) {
                setIsOpen(false);
                navigate(itemUrl);
              },
            }}
            hitComponent={Hit}
            transformItems={(items) => {
              return items.map((item) => {
                const a = document.createElement("a");
                a.href = item.url;
                const hash = a.hash || "";

                return {
                  ...item,
                  url: `${a.pathname}${hash}`,
                };
              });
            }}
          />,
          document.body
        )}
    </div>
  );
}
