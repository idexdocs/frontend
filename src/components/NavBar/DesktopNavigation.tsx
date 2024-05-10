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
                    alt="company logo1"
                />
            </Link>
            <NavLinks />
            <div className="p-2 me-3">
                <Image
                    src="/images/logo-arabe.png"
                    width={78}
                    height={78}
                    alt="company logo2"
                />
            </div>
        </nav>
    );
}