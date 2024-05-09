import NavLinks from "./NavLinks";
import Image from "next/image";
import Link from 'next/link';

export default function DesktopNavigation() {
    return (
        <nav className="DesktopNavigation d-flex justify-content-between align-items-center m-3">
            <Link href="/">
                <Image
                    src="/images/logo-fort-house.png"
                    width={105}
                    height={70}
                    alt="company logo"
                />
            </Link>
            <NavLinks />
        </nav>
    );
}