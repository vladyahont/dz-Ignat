import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../HW1";


export type MessagePropsType = {
    message: MessageType
}

const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        <h4>{props.message.user.name}</h4>
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        <p>{props.message.message.text}</p>
                    </pre>
                </div>
                <div>
                <img id={'hw1-avatar-' + props.message.id}
                    src={props.message.user.avatar}/>

                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                <p>{props.message.message.time}</p>
            </div>

        </div>
    )
}
export default Message
