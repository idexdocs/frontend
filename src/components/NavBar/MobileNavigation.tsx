import NavLinks from "./NavLinks";
import Image from "next/image";
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function MobileNavigation() {

    const [click, setclick] = useState(false);
    const closeMenu = () => setclick(false);

    const Hamburger = <FontAwesomeIcon
        className="hamburgerMenu"
        icon={faBars}
        size="2xl"
        style={{ color: "var(--bg-ternary-color)", cursor: 'pointer' }}
        onClick={() => setclick(!click)}
    />

    const Close = <FontAwesomeIcon
        className="hamburgerMenu"
        icon={faXmark}
        size="2xl"
        style={{ color: "var(--bg-ternary-color)", cursor: 'pointer' }}
        onClick={() => setclick(!click)}
    />

    return (
        <nav className="MobileNavigation d-flex justify-content-between align-items-center m-3">
            <Link href="/">
                <Image
                    src="/images/logo-fort-house.png"
                    width={105}
                    height={70}
                    alt="company logo"
                />
            </Link>
            { click ? Close : Hamburger}
            {click && <NavLinks/>}
        </nav>
    );
}