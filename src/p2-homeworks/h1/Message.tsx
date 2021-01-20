import React from "react";
import style from './Message.module.css'

type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}

type MessagePropsType = {
    messageData: MessageDataType
}


function Message(props: MessagePropsType) {
    return (
        <div className={style.message}>
            <div className={style.avatar}>
                <img src={props.messageData.avatar} alt=""/>
            </div>

            <div className={style.bobble}>
                <div className={style.name}>{props.messageData.name}</div>
                <div>{props.messageData.message}</div>
                <div className={style.time}>{props.messageData.time}</div>
            </div>
        </div>
    );
}

export default Message;

