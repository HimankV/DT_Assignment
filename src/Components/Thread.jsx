import arrow from "../assets/Vector.svg";
import vec1 from "../assets/Vector1.png";
import vec2 from "../assets/Vector2.png";
import vec3 from "../assets/Vector3.png";
import vec4 from "../assets/Vector4.png";
import DArrow from "../assets/downArrow.png";
function Thread() {
  return (
    <div style={{}}>
      <div
        style={{
          height: "40px",
          backgroundColor: "#FEFFC033",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "20%",
            backgroundColor: "",
            paddingLeft: "20px",
            boxSizing: "border-box",
          }}
        >
          <img src={arrow} alt="arrow" />
        </div>
        <h2 style={{ fontFamily: "OpenSans", fontSize: "20px", weight: "700" }}>
          Thread A
        </h2>
      </div>
      <div
        style={{
            // border: "2px solid red",
          height: "130px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div
          style={{
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
            width: "199px",
            backgroundColor: "white",
            height: "95px",
            top: "604px",
            left: "773px",
            borderRadius: " 10px",
          }}
        >
          <div
            style={{
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
              height: "20px",
              backgroundColor: "#EBEBEB",
              fontFamily: "OpenSans",
              fontSize: "12px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h4 style={{ fontWeight: "400" }}>Sub-Thread</h4>
          </div>
          <div style={{ height: "100%", width: "100%", border: "" }}>
            <h4
              style={{
                fontFamily: "OpenSans",
                fontSize: "12px",
                fontWeight: "12px",
                backgroundColor: "",
                display: "inline",
                color: "#6C757D",
                marginLeft: "3px",
              }}
            >
              Enter text here
            </h4>
          </div>
        </div>
        <div
          style={{
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
            width: "199px",
            backgroundColor: "white",
            height: "95px",
            top: "604px",
            left: "773px",
            borderRadius: " 10px",
          }}
        >
          <div
            style={{
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
              height: "20px",
              backgroundColor: "#EBEBEB",
              fontFamily: "OpenSans",
              fontSize: "12px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h4 style={{ fontWeight: "400" }}>Sub-Thread</h4>
          </div>
          <div style={{ height: "100%", width: "100%", border: "" }}>
            <h4
              style={{
                fontFamily: "OpenSans",
                fontSize: "12px",
                fontWeight: "12px",
                backgroundColor: "",
                display: "inline",
                color: "#6C757D",
                marginLeft: "3px",
              }}
            >
              Enter text here
            </h4>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          //   border: "1px solid maroon",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            marginLeft: "50px",
            // border: "1px solid blue",
            width: "118px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src={vec1} alt="v1" />
          <img src={vec2} alt="v2" />
          <img src={vec3} alt="v3" />
          <img src={vec4} alt="v4" />
        </div>
        <div
          style={{
            width: "91px",
            height: "32px",
            // border: "1px solid black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          <p
            style={{
              fontFamily: "Poppins_L",
              fontSize: "10px",
              fontWeight: "600",
            }}
          >
            Select Category
          </p>
          <img src={DArrow} alt="DArrow" />
        </div>
        <div
          style={{
            width: "91px",
            height: "32px",
            // border: "1px solid black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          <p
            style={{
              fontFamily: "Poppins_L",
              fontSize: "10px",
              fontWeight: "700",
            }}
          >
            Select Process
          </p>
          <img src={DArrow} alt="DArrow" />
        </div>
      </div>
      <div style={{ marginTop: "40px" }}>
        <div
          style={{
            height: "50px",
            // border: "1px solid maroon",
            display: "flex",
            alignItems: "center",
          }}
        >
          <button
            style={{
              marginLeft: "25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              fontFamily: "Poppins_L",
              fontSize: "12px",
              width: "97px",
              height: "36px",
              backgroundColor: "#0029FF",
              border: "none",
              color: "white",
              borderRadius: "10px",
              padding: "0px",
            }}
          >
            <span style={{ fontSize: "15px" }}>+</span>Sub-Thread
          </button>
        </div>
        <div
          style={{
            // border: "1px solid brown",
            height: "125px",
            //   width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
              width: "425px",
              backgroundColor: "white",
              height: "95px",
              // top: "604px",
              // left: "773px",
              borderRadius: " 10px",
            }}
          >
            <div
              style={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                height: "20px",
                backgroundColor: "#EBEBEB",
                fontFamily: "OpenSans",
                fontSize: "12px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h4 style={{ fontWeight: "400" }}>Sub-Thread</h4>
            </div>
            <div style={{ height: "100%", width: "100%", border: "" }}>
              <h4
                style={{
                  fontFamily: "OpenSans",
                  fontSize: "12px",
                  fontWeight: "12px",
                  backgroundColor: "",
                  display: "inline",
                  color: "#6C757D",
                  marginLeft: "3px",
                }}
              >
                Enter text here
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thread;
