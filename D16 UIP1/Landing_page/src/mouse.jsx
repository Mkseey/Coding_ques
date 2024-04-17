
import './App.css'

function Mouse() {
    return (
        <>
            <div className="rrmc-cursor" style={{
                display: "block", top: "4552px",
                transform: "translate3d(444px, 139px, 0px)"
            }}>
                <div className="rrmc-cursor-inner" style={{ opacity: "1" }}>
                    <div className="rrmc-cursor-border" style={{ translate: "none", rotate: "none", scale: "none", transform: "scale(0.3, 0.3)", borderWidth: "4px" }}></div>
                    <div className="rrmc-cursor-icon" style={{ translate: "none", rotate: "none", scale: "none", transform: "scale(0.3, 0.3)" }}></div>
                </div>
            </div>

        </>
    )
}

export default Mouse
