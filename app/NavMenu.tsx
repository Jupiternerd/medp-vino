import Link from "next/link"
import { Noto_Sans } from "next/font/google";

const Noto = Noto_Sans({   
  weight: '400',
  subsets: ['latin'],
 });

export default function NavMenu() {
    return(
        <>
        <nav>
            <ul className= {Noto.className} style={{ display: 'flex', justifyContent: 'center', listStyle: 'none', marginTop: '20px', fontSize: '17px' }}>
                <li style={{ margin: '0 10px' }}>
                    <Link href={"/"}>
                        Visual Novel
                    </Link>
                </li>
                <li style={{ margin: '0 10px' }}>
                    <Link href={"/about"}>
                        About
                    </Link>
                </li>
                <li style={{ margin: '0 10px' }}>
                    <Link href={'https://www.shokkunn.art'} target="_blank">
                        Personal Website
                    </Link>
                </li>
            </ul>
        </nav>
        </>
    )
}