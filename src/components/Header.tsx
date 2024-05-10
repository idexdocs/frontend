import { faBars, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from 'next/link';
import DesktopNavigation from './NavBar/DesktopNavigation';
import MobileNavigation from './NavBar/MobileNavigation';

export default function Header() {
    return (
        <>
            {/* <div className="d-flex justify-content-between align-items-center m-3">
                <div className="me-auto p-2">
                    <Link href="/">
                        <Image
                            src="/images/logo-fort-house.png"
                            width={105}
                            height={70}
                            alt="company logo"
                        />
                    </Link>
                </div>

                <div className="p-2 me-3">
                    <Image
                        src="/images/logo-arabe.png"
                        width={78}
                        height={78}
                        alt="company logo"
                    />
                </div>

                <FontAwesomeIcon
                    className="p-2"
                    icon={faBars}
                    size="2xl"
                    style={{ color: "var(--bg-ternary-color)", cursor: 'pointer' }}
                />
            </div>
            <hr /> */}
            <div>
                <DesktopNavigation />
                <MobileNavigation />
            </div>
            <hr />
        </>
    )
}