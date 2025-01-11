import React from 'react';
import styles from '../styles/NavbarFooter.module.css';
import { userinfo } from '../Constants/userinfo'
import Link from 'next/link'

interface FooterProps {
    currentTheme: {
        footerColor: string;
        subtext: string;
    };
}

const Footer: React.FC<FooterProps> = ({ currentTheme }) => {
    const footerColor = currentTheme?.footerColor || '#F0F0F0';

    return (
        <div className={styles.footermain} style={{ backgroundColor: footerColor, color: currentTheme.subtext }}>
            <div className={styles.footertable}>
                <Link href='/'><h2 className={styles.footerlogo}>{userinfo.logoText}</h2></Link>
                <ul>
                    <li className={styles.listHeading}>Socials</li>
                    {userinfo.socials ?
                        userinfo.socials.map((social, key) => {
                            return (
                                <Link href={social.link} key={key}><li>{social.type}</li></Link>
                            )
                        }) : null
                    }
                    <Link href={`mailto:${userinfo.contact.email ? userinfo.contact.email : ''}`}><li>Mail</li></Link>
                </ul>
                <ul>
                    <li className={styles.listHeading}>Pages</li>
                    <Link href='/'><li>Home</li></Link>
                    <Link href='/#about'><li>About</li></Link>
                    <Link href='/work'><li>Work</li></Link>
                    <Link href='/contact'><li>Contact</li></Link>
                </ul>
            </div>
            <hr style={{ height: '1px', backgroundColor: currentTheme.subtext, border: 'none', opacity: '0.5' }}></hr>
            <h2 className={styles.footercontent}>Template by Asavari Ambavane</h2>
        </div>
    )
}

export default Footer
