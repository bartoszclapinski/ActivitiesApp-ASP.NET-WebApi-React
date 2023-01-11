import {Button, Header, Icon, Segment, SegmentInline} from "semantic-ui-react";
import {Link} from "react-router-dom";

export default function NotFound() {
    return (
        <Segment placeholder >
            <Header icon>
                <Icon name={'search'} />
                Ops - we've looked everywhere but could not find what you are looking for!
            </Header>
            <SegmentInline>
                <Button as={Link} to={'/activities'}>
                    Return to activities page
                </Button>
            </SegmentInline>
        </Segment>
    )
}