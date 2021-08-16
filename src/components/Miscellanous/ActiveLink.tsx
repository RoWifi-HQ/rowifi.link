import React from 'react';
import { useRouter } from 'next/router';

interface ActiveLinkProps extends React.HTMLProps<HTMLAnchorElement> {
    activeClassName?: string
}

// eslint-disable-next-line react/display-name
const ActiveLink = React.forwardRef<HTMLAnchorElement, ActiveLinkProps>(({ href, children, className, activeClassName = "" }, ref) => {
    const router = useRouter();
    const classNameActual = router.asPath === href ? `${className} ${activeClassName}`.trim() : className;

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        router.push(href ?? '/');
    };

    return (
        <a href={href} ref={ref} onClick={handleClick} className={classNameActual}>
            {children}
        </a>
    );
});

export default ActiveLink;