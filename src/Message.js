import React from "react";
import classes from './Message.module.css';

const Message = (props) => {
    return (
        <div className={classes.reviews}>
            <div className={classes.comment}>
                <div className={classes.comment_bubble}>
                    <p className={classes.comment_text}>Andrey</p>
                    <p className={classes.comment_text}>
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Message;