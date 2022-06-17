import { useState } from "react"

export const Help = () => {
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
      setClicked(!clicked)
    }
    return (
        <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
            <h1 className={clicked ? "fade-in" : "fade-out"} style={{
                color: "white",
                paddingBottom: 20,
            }}>When your favourite series season ends you are waiting in ...</h1>
            {!clicked && <button style={{
                padding: 20,
                backgroundColor: "white",
                color: "#4ee2fc",
                borderRadius: 10,
                border: 0,
                fontSize: 20,
                fontWeight: 600,
                width: 250
            }} onClick={handleClick}>I'm drowning help</button>}
        </div>
    )
}