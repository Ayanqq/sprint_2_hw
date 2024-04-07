import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../HW1";

// создать тип вместо any и отобразить приходящие данные
type FriendMessageType = {
    message: MessageType
}

const FriendMessage = (props: FriendMessageType) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <div className={s.friendIcon_timeWrapper}>
                    <img
                        id={'hw1-friend-avatar-' + props.message.id}
                        // создаёт студент
                        src={props.message.user.avatar}
                        //
                    />

                    <div
                        id={'hw1-friend-time-' + props.message.id}
                        className={s.friendTime}
                    >
                        {/*создаёт студент*/}
                        <span>{props.message.message.time}</span>
                        {/**/}
                    </div>

                </div>
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}
                        <span>{props.message.user.name}</span>
                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                        <span>{props.message.message.text}</span>
                        {/**/}
                    </pre>
                </div>
            </div>

        </div>
    )
}

export default FriendMessage
