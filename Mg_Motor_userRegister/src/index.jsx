
export function Reg(){
    return <>
    <div className="container">
      <div className="subcontainer">
      <button className="btn" style={{ color: "#fff" }} onClick={()=> window.location.replace("/login")}>
        <strong>New Registration</strong>
      </button>
      </div>
    </div>
    </>
}