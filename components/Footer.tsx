import Link from 'next/link';
import styles from "../styles/Home.module.css";
import Image from "next/image";
import React from "react";
export default function Footer() {
  return (





    <><div className={styles.footerMiddle}>



      <Link href="https://x.com/snftpro" className={`${styles.homeLink} ${styles.footerRight}`} target="_blank" rel="noreferrer">
        <Image
          src="/images/twi.png"
          width={40}
          height={40}
          alt="" />
      </Link>

      <Link href="https://github.com/snft-pro" className={`${styles.homeLink} ${styles.footerRight}`} target="_blank" rel="noreferrer">
        <Image
          src="/images/gi.png"
          width={40}
          height={40}
          alt="" />
      </Link>

    </div><div className={styles.footerMiddle2}>
        <h3>SNFT © 2024 - all Rights Reserved</h3>
      </div></>

       
        
    

  );
}
