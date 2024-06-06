import React, { useState } from 'react'
import { View } from 'react-native'
import { Button, Snackbar, Text, TextInput } from 'react-native-paper'
import { styles } from '../theme/styles'
import { CommonActions, useNavigation } from '@react-navigation/native';
import { auth } from '../configs/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

//Interface - formRegister
interface FormRegister {
    email: string;
    password: string;
}

//interface -mensajes
interface MessageSnackBar {
    visible: boolean;
    message: string;
    color: string;
}

export const RegisterScreen = () => {

    //formulario
    const [formRegister, setFormRegister] = useState<FormRegister>({
        email: '',
        password: ''
    });

    //hook useState: visualizar u ocultar mensaje
    const [showMessage, setShowMessage] = useState<MessageSnackBar>({
        visible: false,
        message: '',
        color: '#fff'
    })

    //contraseña
    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true)

    //hook de navgacion
    const navigation = useNavigation();

    //Funcion que cambie los valores de formRegister
    const handlerSetValues = (key: string, value: string) => {
        //operador spread: sacar una copia superficial de un objeto
        setFormRegister({ ...formRegister, [key]: value })
    }

    //Funcion que permita crear y enviar el nuevo usuario
    const handlerRegister = async () => {
        if (!formRegister.email || !formRegister.password) {
            setShowMessage({
                visible: true,
                message: 'Completa todos los campos!',
                color: '#b53333'
            });
            return;
        } 

        //VALIDACIONES en los campos del formulario de registro
        if (!formRegister.email.includes('@')) {
            setShowMessage({
                visible: true,
                message: 'El email debe contener @',
                color: '#b53333'
            });
            return;
        }
        if (formRegister.password.length < 6) {
            setShowMessage({
                visible: true,
                message: 'La contraseña debe tener al menos 6 caracteres',
                color: '#b53333'
            });
            return;
        }

        //console.log(formRegister)
        //Código para registrar usuario
        try {
            const response = await createUserWithEmailAndPassword(
                auth,
                formRegister.email,
                formRegister.password

            );
            setShowMessage({ visible: true, message: 'Registro exitoso', color: '#146525' });
        } catch (ex) {
            console.log(ex);
            setShowMessage({ visible: true, message: 'No se registro, intentelo mas tarde', color: '#b53333' });
        }
    }

    return (
        <View style={styles.root}>
            <Text style={styles.textHead}>Registrate</Text>
            <TextInput
                mode='outlined'
                label='Email'
                keyboardType='email-address'
                style={styles.inputs}
                placeholder='Escriba su correo'
                onChangeText={(value) => handlerSetValues('email', value)}
            />
            <TextInput
                mode='outlined'
                label='Contraseña'
                style={styles.inputs}
                placeholder='Escriba su contraseña'
                secureTextEntry={hiddenPassword}
                right={<TextInput.Icon icon="eye"
                    onPress={() => setHiddenPassword(!hiddenPassword)} />}
                onChangeText={(value) => handlerSetValues('password', value)}
            />
            <Button style={styles.button} mode="contained"
                onPress={handlerRegister}>
                Registrar
            </Button>

            <Text
                style={styles.textRedirect}
                onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
                ¿Ya tienes una cuenta? Inicia Sesión.
            </Text>

            <Snackbar
                visible={showMessage.visible}
                onDismiss={() => setShowMessage({ ...showMessage, visible: false })}
                style={{ backgroundColor: showMessage.color }}>
                {showMessage.message}
            </Snackbar>
        </View >
    )
}
