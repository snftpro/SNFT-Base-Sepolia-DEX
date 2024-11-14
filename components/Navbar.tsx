import { ConnectWallet } from "@thirdweb-dev/react";
import  Conect from "../components/Conect";
import Link from 'next/link';
import styles from "../styles/Home.module.css";
import Image from "next/image";
export default function Navbar() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "20px",
        }}>
            
            <Link href="https://snft.pro/" className={`${styles.homeLink} ${styles.footerRight}`} rel="noreferrer">
    <Image
       src="/images/h.png"
       width={35}
       height={35}
      alt="" 
    />
  </Link>
            <Conect/>
        </div>
    )
}