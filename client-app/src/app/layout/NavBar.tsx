import React from 'react';
import {Container, Menu, Button} from "semantic-ui-react";

interface Props {
    openForm: () => void;
}
export default function NavBar({openForm}: Props){
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
                    APPtivities
                </Menu.Item>
                <Menu.Item name="Activities"/>
                <Menu.Item>
                    <Button onClick={openForm} positive content="Create Activity"/>
                </Menu.Item>

            </Container>
        </Menu>
    )
}