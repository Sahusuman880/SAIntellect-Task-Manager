import React from "react";

function Header() {
  return (
    <>
      <nav
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "#a71515ff",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img
            src="https://media.licdn.com/dms/image/v2/C4E0BAQHkk4yIrOnn9A/company-logo_200_200/company-logo_200_200/0/1631349741647?e=2147483647&v=beta&t=zKPBglYJ_VW6RVMed--KpP2Q4Lwe6faPcNLU3LzcRoY"
            alt="SAIntellect Logo"
            style={{ width: "30px", height: "30px" }}
          />
          <p style={{ color: "white", fontSize: "20px" }}>Task Manager</p>
        </div>
      </nav>
    </>
  );
}

export default Header;
