import { useState } from "react";
import SSS from "../assets/SSS.png";
function DropdownLeft() {
  const [expanded, setexpanded] = useState(true);
  return (
    <div
      style={{
        position: expanded ? "relative" : "",
        zIndex: expanded ? "6" : "0",
        borderBottomRightRadius: "20px",
        borderBottomLeftRadius: "20px",
        borderTopRightRadius: "22px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
        width: "132px",
        width: expanded ? "392px" : "132px",
        height: "692px",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          backgroundColor: "black",
          width: expanded ? "392px" : "132px",
          height: "50px",
          top: "90px",
          borderTopRightRadius: "22px",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        {expanded ? (
          <div
            style={{
              width: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <h4
              style={{
                fontFamily: "Poppins_L",
                fontSize: "18px",
                color: "white",
              }}
            >
              Journey Board
            </h4>
          </div>
        ) : (
          ""
        )}
        <div
          style={{
            width: "40px",
            height: "100%",
            top: "100px",
            left: "81px",
            display: "flex",
            alignItems: "center",
            justifyContent: "end",
          }}
        >
          <img
            src={SSS}
            alt="ss"
            style={{
              width: "39px",
              height: "29px",
              cursor: "pointer",
              rotate: expanded ? "180deg" : "0deg",
            }}
            onClick={() => setexpanded((curr) => !curr)}
          />
        </div>
      </div>
      {expanded ? (
        <div style={{ marginTop: "10px" }}>
          <ul style={{ fontFamily: "Poppins_L", fontSize: "18px" }}>
            <li>
              <h4>Explore the world of Management</h4>
            </li>
            <li>
              <p>Technical Project Management</p>
            </li>
            <li>
              <p>ThreadBuild</p>
            </li>
            <li>
              <p>Structure your Pointers</p>
            </li>
            <li>
              <p>4SA Method</p>
            </li>
          </ul>
        </div>
      ) : (
        <div
          style={{
            position: "absolute",
            border: "1px solid #0029FF",
            borderColor: "black",
            width: "68px",
            height: "68px",
            top: "166px",
            left: "66px",
            transform: "translate(-50%,0)",
            borderRadius: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2
            className="Poppins_L"
            style={{
              color: " #0029FF",
              fontSize: "36px",
              fontWeight: "600",
              height: "54px",
              width: "12px",
            }}
          >
            1
          </h2>
        </div>
      )}
    </div>
  );
}

export default DropdownLeft;
