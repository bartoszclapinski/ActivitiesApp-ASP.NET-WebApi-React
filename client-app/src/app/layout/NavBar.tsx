import React from 'react';
import {Container, Menu, Button} from "semantic-ui-react";

export default function NavBar(){
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo"/>
                    APPtivities
                </Menu.Item>
                <Menu.Item name="Activities"/>
                <Menu.Item>
                    <Button positive content="Create Activity"/>
                </Menu.Item>

            </Container>
        </Menu>
    )
}