import React from 'react';
import {Image, StyleSheet} from "react-native";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/Button";
import {Formik} from 'formik';
import * as Yup from 'yup';
import AppText from "../components/AppText";
import AppErrorMessage from "../components/AppErrorMessage";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(6).label("Password"),
})

function LoginScreen(props) {


    return (

        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/Tarana.jpg")}/>

            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
                    <>
                        <AppTextInput
                            icon="email"
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="email-address"
                            placeholder="Email"
                            onBlur={() => setFieldTouched("email")}
                            onChangeText={handleChange("email")}
                            textContentType="emailAddress"
                        />
                        <AppErrorMessage error={errors.email} visible={touched.email}/>
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            placeholder="Password"
                            onBlur={() => setFieldTouched("password")}
                            secureTextEntry
                            onChangeText={handleChange("password")}

                            textContentType="password"
                        />
                        <AppErrorMessage error={errors.password} visible={touched.password}/>

                        <AppButton title="Login" onPress={handleSubmit} style={styles.button} color="secondary"/>
                    </>
                )}
            </Formik>


        </Screen>


    )
        ;
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 150,
        height: 150,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 30,
    },
    button: {
        alignSelf: "center",
        marginTop: 10,
    }
})

export default LoginScreen;