import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {View, TouchableOpacity, Button} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

// icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

// formik
import { Formik } from 'formik';

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
    TextLinkContent
} from './../components/styles';

// Colors
const {brand, hotPink, primary} = Colors;

import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

// Date+Time Picker
import DateTimePicker from '@react-native-community/datetimepicker';

// rmr to change the source later...

const Signup = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
   // const [show, setShow] = useState(false);
   // const [date, setDate] = useState(new Date(2000, 0, 1));

    // Actual date of birth to be sent
  //   const [dob, setDob] = useState();

  //  const onChange = (event, selectedDate) => {
  //      const currentDate = selectedDate || date;
  //      setShow(false);
  //      setDate(currentDate);
  //      setDob(currentDate);
  //  }

  //  const showDatePicker = () => {
  //      setShow(true);
  //  }

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirm = date => {
      console.warn("A date has been picked: ", date);
      hideDatePicker();
    };

    return (
        <KeyboardAvoidingWrapper>
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer> 
                <PageTitle>21Days</PageTitle>
                <SubTitle>Account Signup</SubTitle>

                <Formik
                    initialValues={{fullName: '', email: '', dateOfBirth: '', password: '', confirmPassword: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                        navigation.navigate('Welcome');
                    }}
                >
                    {({handleChange, handleBlur, handleSubmit, values}) => (<StyledFormArea>
                        <MyTextInput 
                            label="Full Name"
                            icon="person"
                            placeholder="Insert Name Here"
                            placeholderTextColor={hotPink}
                            onChangeText={handleChange('fullName')}
                            onBlur={handleBlur('fullName')}
                            value={values.fullName}
                        />
                        <MyTextInput 
                            label="Email Address"
                            icon="mail"
                            placeholder="example@placeholder.com"
                            placeholderTextColor={hotPink}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                        />
                        <View>
                            <Button title="Choose Birthday" onPress={showDatePicker} />
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="date"
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                            />
                            </View>

                        <MyTextInput 
                            label="Password"
                            icon="key"
                            placeholder="* * * * * *"
                            placeholderTextColor={hotPink}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        <MyTextInput 
                            label="Confirm Password"
                            icon="key"
                            placeholder="* * * * * *"
                            placeholderTextColor={hotPink}
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                            value={values.confirmPassword}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        <MsgBox>...</MsgBox>
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>
                                Signup
                            </ButtonText>
                        </StyledButton>
                        <Line />
                        <ExtraView>
                            <ExtraText>Already have an account? </ExtraText>
                            <TextLink onPress={() => navigation.navigate('Login')}>
                                <TextLinkContent>Login</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                    </StyledFormArea>)}
                </Formik>
            </InnerContainer>
        </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
};

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props}) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={brand}/>
                </RightIcon>
            )}
        </View>
    )
}

export default Signup;