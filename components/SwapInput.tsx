import React from "react";
import styles from "../styles/Home.module.css";

type Props = {
    type: "native" | "token";
    tokenSymbol?: string;
    tokenBalance?: string;
    current: string;
    setValue: (value: string) => void;
    max?: string;
    value: string;
};

export default function SwapInput({
    type,
    tokenSymbol,
    tokenBalance,
    setValue,
    value,
    current,
    max,
}: Props) {
    const truncate = (value: string) => {
        if (value === undefined) return;
        if (value.length > 5) {
            return value.slice(0, 5);
        }
        return value;
    };

    return (
        <div className={styles.swapInputContainer}>
           <input 
                type="number"
                placeholder="0.0"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                disabled={current !== type} 
                className={styles.swapInput}
            /> 
            <div style={{
                position: "absolute",
                top: "10px",
                right: "20px",
                
                
            }}>
                <p style={{
                    fontSize: "14px",
                   
                }}>{tokenSymbol}</p>
                <p style={{
                    fontSize: "12px",
                }}>Balance: {truncate(tokenBalance as string)}</p> {current === type && (
                    <button className={styles.maxButton}

                        onClick={() => setValue(max || "0")}
                         
                    >Max</button>
                )}
               
            </div>
        </div>
    )
}