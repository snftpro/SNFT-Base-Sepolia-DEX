import { ConnectWallet } from "@thirdweb-dev/react";``
import styles from "../styles/Home.module.css";
const Conect = () => {
    return (
        <div className={styles.style}>
          <ConnectWallet
          hideSwitchToPersonalWallet={true}
          theme={"dark"}
          showThirdwebBranding={false}
          btnTitle={"Connect"}
          modalTitle={"SNFT DEX"}
          modalSize={"wide"}
          modalTitleIconUrl={
            "https://i.imgur.com/j1m7Pqo.png"
          }
          welcomeScreen={{
            title: "SNFT Base Sepolia DEX",
            subtitle: "Swap ETH / SNFT Tokens  ",
            img: {
              src: "https://i.imgur.com/j1m7Pqo.png",
              width: 150,
              height: 150,
            },
          }}
        />
    </div>
      );
    }

export default Conect;
