import { Noto_Sans } from "next/font/google";
import Divider from "./components/Divider";

const Noto = Noto_Sans({   
  weight: '400',
  subsets: ['latin'],
 });

export default function Footer() {
  return (
    <footer className={Noto.className} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '100px',
      fontSize: '14px',
    }}>
      <Divider invert/>
      <p>&copy; {new Date().getFullYear()} Wai Hlaing // Shokkunn</p>
      <div>
        <a href="https://www.shokkunn.art" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>Main Website</a>
        <a href="https://www.linkedin.com/in/wai-hlaing-b9a3a81b8/" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>LinkedIn</a>
        <a href="https://github.com/Jupiternerd/medp-vino" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>GitHub (source code)</a>
      </div>
      <div>
        <p>
            The website uses Cookies to keep track of user choices and data. By using this website, you agree to the use of Cookies.
        </p>
      </div>
    </footer>
  )
}