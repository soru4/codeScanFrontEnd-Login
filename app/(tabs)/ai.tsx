import React from 'react'
import { useRouter } from 'expo-router';
'use client'


type Props = {}

export default function AIPage({}: Props) {
    const router = useRouter();
    return (
        <main style={{ padding: 24 , color: 'white' }}>
            <h1>AI</h1>
            <p>This is an empty template AI</p>
        </main>
    )
}