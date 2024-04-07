import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../HW1";

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: MessageType
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <div className={s.icon_timeWrapper}>
                    <img
                        id={'hw1-avatar-' + props.message.id}
                        // создаёт студент
                        src={props.message.user.avatar}
                        alt={props.message.user.name}
                        //
                    />

                    <div id={'hw1-time-' + props.message.id} className={s.time}>
                        {/*создаёт студент*/}
                        {props.message.message.time}
                        {/**/}
                    </div>
                </div>
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {/*создаёт студент*/}
                        <span>{props.message.user.name}</span>
                        {/**/}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {/*создаёт студент*/}
                        <span>{props.message.message.text}</span>
                        {/**/}
                    </pre>
                </div>
            </div>

        </div>
    )
}

export default Message;


