import { StatusBar } from 'expo-status-bar';
import React from 'react';

import {
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    Colors,
    ButtonText,
    Line,
    WelcomeContainer,
    WelcomeImage, 
    Avatar
} from './../components/styles';

// Colors
const {brand, hotPink, primary} = Colors;

// rmr to change the source later... (and style of status bar if image is dark)

const Welcome = ({navigation}) => {
    return (
        <>
            <StatusBar style="dark" /> 
            <InnerContainer>
                <WelcomeImage resizeMode="cover" source={require('./../assets/icon.png')} />
                <WelcomeContainer>
                    <PageTitle welcome={true}>Ready to Change your Life?</PageTitle>
                    <SubTitle welcome={true}>FirstName LastName</SubTitle>
                    <SubTitle welcome={true}>email</SubTitle>
                        <StyledFormArea>
                    <Avatar resizeMode="cover" source={require('./../assets/icon.png')}/> 
                    <Line />
                        <StyledButton onPress={() => {navigation.navigate('HabitSelection')}}>
                            <ButtonText>
                                Continue
                            </ButtonText>
                        </StyledButton>

                    </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
        </>
    );
};

export default Welcome;