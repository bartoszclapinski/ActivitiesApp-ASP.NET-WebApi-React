import {Container, Header, Segment, Image, Button} from "semantic-ui-react";
import {Link} from "react-router-dom";
import {useStore} from "../../app/stores/store";
import {observer} from "mobx-react-lite";
import LoginForm from "../users/LoginForm";

export default observer (function HomePage() {

    const {userStore, modalStore} = useStore();

    return (
        <Segment inverted textAlign={'center'} vertical className={'masthead'}>
            <Container text>
                <Header as={'h1'} inverted >
                    <Image
                        size={'massive'}
                        src={'/assets/logo.png'}
                        alt={'logo'}
                        style={{marginBottom: 12}}
                    />
                    APPtivities
                </Header>

                {userStore.isLoggedIn ? (
                    <>
                        <Header inverted content={'Welcome to APPtivities!'} />
                        <Button as={Link} to={'/activities'} size={'huge'} inverted>
                            Go to Activities!
                        </Button>
                    </>

                ) : (
                    <>
                        <Button onClick={() => modalStore.openModal(<LoginForm />)} to={'/login'} size={'huge'} inverted>
                            Login
                        </Button>
                        <Button onClick={() => modalStore.openModal(<h1>Register</h1>)} to={'/login'} size={'huge'} inverted>
                            Register
                        </Button>
                    </>
                )}


            </Container>
        </Segment>
    )
})