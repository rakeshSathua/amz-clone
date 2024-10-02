
'use client'
import React, { useState } from 'react'
import { Container, RegisterButton, SignInButton } from './styled'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { signInToAccount } from '@/lib/store/reducers/userReducer';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log("EMAIl : ", email);

    const router = useRouter();
    const dispatch = useDispatch();


    const loginUser = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log("Loggin In User")
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log("User Credential : ", userCredential.user);
            dispatch(signInToAccount(userCredential.user));
            router.push("/");

        }).catch((error) => {
            const errorMessage = error.message;
            alert(`${errorMessage}`);

        })
    }

    const registerUser = (e: React.FormEvent<HTMLButtonElement>) => {
        console.log("User Created ");


        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then(userCred => {
            console.log("User Credential : ", userCred);
            router.push("/");

        }).catch((error) => {
            const errorMessage = error.message;
            alert(`${errorMessage}`);

        })

    }

    return (
        <Container>
            <h1>Sign In</h1>
            <form>
                <label htmlFor='email'>Email</label>
                <input type='text' id='email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
            </form>
            <SignInButton type="submit" onClick={(e) => loginUser(e)}>Sign In</SignInButton>
            <p style={{ textAlign: "center" }}>or</p>
            <RegisterButton type="button" onClick={(e) => registerUser(e)}>Create a new Amz Account</RegisterButton>
        </Container>
    )
}

export default LoginForm