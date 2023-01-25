import {Message, MessageItem, MessageList} from "semantic-ui-react";

interface Props {
    errors: any;
}

export default function ValidationError({errors}: Props) {
    return (
        <Message error>
            {errors && (
                <MessageList>
                    {errors.map((err: any, i: any) => (
                        <MessageItem key={i}>{err}</MessageItem>
                    ))}
                </MessageList>
            )}
        </Message>
    )
}