//import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';

// icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

// formik
//import { Formik } from 'formik';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledButton,
    StyledTextInput,
    RightIcon,
    Colors,
    ButtonText,
    MsgBox,
    Line,
    ExtraView,
    ExtraText,
    TextLink,
    WelcomeImage,
    WelcomeContainer,
    TextLinkContent
} from './../components/styles';

// Colors
const {brand, hotPink, primary} = Colors;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

//import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';
// rmr to change the source later...

// API Client
import axios from 'axios';

const HabitSelection = ({navigation}) => {
    return (
            <InnerContainer>
                <WelcomeImage resizeMode="cover" source={require('./../assets/icon.png')} />
                <WelcomeContainer>
                     <PageTitle>
                          Choose Your Habit:
                     </PageTitle>
                     <View style={styles.fixToText}>
                          <StyledButton onPress={() => Alert.alert('Left button pressed')}>
                                <ButtonText>
                                      Healthy Eating
                                </ButtonText>
                          </StyledButton>
                          <StyledButton onPress={() => Alert.alert('Right button pressed')}>
                                <ButtonText>
                                       Productivity
                                </ButtonText>
                          </StyledButton>
                     </View>
                </WelcomeContainer>
            </InnerContainer>

    );
};



export default HabitSelection;