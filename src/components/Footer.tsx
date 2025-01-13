import React from 'react';
import styles from '../styles/NavbarFooter.module.css';
import Link from 'next/link'
import { useTheme } from 'styled-components';
import { FooterTypes } from '@/types/footer';

interface FooterProps {
   
    footerData: FooterTypes
}

const Footer: React.FC<FooterProps> = ({footerData}) => {
    const currentTheme = useTheme();
    const footerColor = currentTheme?.footerColor || '#F0F0F0';
    console.log("footerData", footerData)

    return (
        <div className={styles.footermain} style={{ backgroundColor: footerColor, color: currentTheme.subtext }}>
            <div className={styles.footertable}>
                <Link href={footerData.button.url}><h2 className={styles.footerlogo}>{footerData.button.title}</h2></Link>
                <ul>
                    <li className={styles.listHeading}>Socials</li>
                    {footerData.cards[0] ?
                        footerData.cards[0].text.content.map((social, key) => {
                            return (
                                <Link href={social.content[0].marks[0].attrs.href} key={key}><li>{social.content[0].text}</li></Link>
                            )
                        }) : null
                    }
                </ul>
               
                <ul>
                    <li className={styles.listHeading}>Socials</li>
                    {footerData.cards[1] ?
                        footerData.cards[1].text.content.map((social, key) => {
                            return (
                                <Link href={social.content[0].marks[0].attrs.href} key={key}><li>{social.content[0].text}</li></Link>
                            )
                        }) : null
                    }
                </ul>
            </div>
        </div>
    )
}

export default Footer
