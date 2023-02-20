import React from 'react'
import styles from './HeaderIcons.module.scss'
import Like from './../../assets/HeaderIcons/Like.svg'
import Notification from './../../assets/HeaderIcons/Notification.svg'
import Settings from './../../assets/HeaderIcons/Settings.svg'
import Image from 'next/image'
import Avatar from "react-avatar";
function HeaderIcons() {
  return (
    <div className={styles.headerIcons}>
        <Image src={Like} alt="Like" className={styles.IconHeader}/>
        <Image src={Notification} alt="Notification" className={styles.IconHeader}/>
        <Image src={Settings} alt="Settings" className={styles.IconHeader}/>
        <Avatar src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" className={styles.avatar} size="35px" color="blue" />
    </div>
  )
}

export default HeaderIcons