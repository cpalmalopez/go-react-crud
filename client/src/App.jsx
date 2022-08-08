import React from 'react'

function App() {
    return (
        <div>
            <div>App</div>
            <button onClick={async () => {
                const res = await fetch('http://localhost:3000/users')
                const data = await res.json()
                console.log(data)
            }}>Obtener datos</button>
        </div>
    )
}

export default App