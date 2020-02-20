import React, { Component } from 'react';
import { Body, Button, Header, Icon, Left, Title } from 'native-base';
import PropTypes from 'prop-types';

export class CustomHeader extends Component {

    renderLeftButton() {
        const { navigation } = this.props;

        if (typeof navigation.openDrawer === 'function') {
            return <Button transparent onPress={() => navigation.openDrawer()}>
                <Icon name='menu' />
            </Button>;
        }

        if (!navigation.isFirstRouteInParent() && typeof navigation.pop === 'function') {
            return <Button transparent onPress={() => navigation.pop()}>
                <Icon name='ios-arrow-back' />
            </Button>;
        }

        return null;
    }

    render() {
        let leftButton = this.renderLeftButton();

        return (
            <Header>
                {leftButton && <Left>{leftButton}</Left>}
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
            </Header >
        );
    }

    static propTypes = {
        title: PropTypes.string,
        navigation: PropTypes.object
    }
}