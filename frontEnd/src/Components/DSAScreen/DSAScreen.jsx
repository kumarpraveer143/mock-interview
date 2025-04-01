import React from 'react'
import CodeEditor from '../CodeEditor/CodeEditor'
import Room from '../VideoCalling/screens/Room'
import "./DSAScreen.css"
export default function DSAScreen() {
    return (
        <>
            <main className='DsaWindow' >
                <aside>
                    <CodeEditor />
                </aside>
                <aside>
                    <Room windowWidth="350px" direction="column" roomWidth="200px" roomHeight="200px" />
                </aside>
            </main>
        </>
    )
}
