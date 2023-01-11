import {Message, MessageItem, MessageList} from "semantic-ui-react";

interface Props {
    errors: string[]
}

export default function ValidationError({errors}: Props) {
    return (
        <Message error>
            {errors && (
                <MessageList>
                    {errors.map((err: string, i) => (
                        <MessageItem key={i}>{err}</MessageItem>
                    ))}
                </MessageList>
            )}
        </Message>
    )
}