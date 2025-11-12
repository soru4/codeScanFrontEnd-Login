import React from 'react'
import { useRouter } from 'expo-router';
'use client'


type Props = {}

export default function AccountPage({}: Props) {
    const router = useRouter();
    return (
        <main style={{ padding: 24 , color: 'white' }}>
            <h1>Profile</h1>
            <p>This is an empty template Profile</p>
        </main>
    )
}