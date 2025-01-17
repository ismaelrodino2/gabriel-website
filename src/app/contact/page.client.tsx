"use client"
import Image from "next/image";
import styles from "@/styles/Contact.module.css"
import { ContactTypes } from "@/types/contact";
import { render } from "storyblok-rich-text-react-renderer";

export default function ContactScreen({mainContent}:{mainContent: ContactTypes}){
    return(
        <div className={styles.container}>
            <div className={styles.text}>{render(mainContent.text)}</div>

            <div className={styles.image}>
            <Image src={mainContent.image.filename} alt="bg image" fill />
            </div>
        </div>
    )
}