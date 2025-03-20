import V1 from "../assets/arrow-curve-left-down.svg";
import V2 from "../assets/arrow-curve-left-right.svg";
import V3 from "../assets/arrow-expand-02.svg";

function SubRectangle() {
  return (
    <div
      style={{
        height: "100%",
        // border: "2px solid blue",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          marginTop: "25px",
          height: "100px",
          //   border: "1px solid maroon",
          display: "flex",
          flexDirection: "column",
          //   alignItems: "center",
        }}
      >
        <div
          style={{
            marginLeft: "20px",
            width: "80%",
            // border: "1px solid blue",
            height: "40px",
            // backgroundColor: "pink",
            display: "flex",
            alignItems: "center",
          }}
        >
          <h4
            style={{
              display: "inline",
              height: "25px",
              //   border: "1px solid orange",
              fontFamily: "OpenSans",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Title
          </h4>
        </div>
        <div
          style={{
            marginLeft: "20px",
            height: "43px",
            width: "90%",
            // border: "1px solid green",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
          }}
        ></div>
      </div>
      <div>
        <div
          style={{
            height: "300px",
            // border: "1px solid maroon",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              //   border: "1px solid blue",
              height: "30px",
              //   backgroundColor: "pink",
              display: "flex",
              alignItems: "center",
            }}
          >
            <h4
              style={{
                marginLeft: "25px",
                display: "inline",
                height: "25px",
                // border: "1px solid orange",
                fontFamily: "OpenSans",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              Content
            </h4>
          </div>
          <div
            style={{
              marginLeft: "25px",
              height: "30px",
              width: "425px",
              //   border: "1px solid green",
              //   boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>File</span>
            <span>Edit</span>
            <span>View</span>
            <span>Insert</span>
            <span>Format</span>
            <span>Tools</span>
            <span>Table</span>
            <span>Help</span>
          </div>
          <div
            style={{
              marginLeft: "25px",
              height: "30px",
              width: "60%",
              //   border: "2px solid rgb(148, 244, 244)",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <img src={V2} alt="v2" />
            <img src={V1} alt="v1" />
            <img src={V3} alt="v3" />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "Poppins_L",
                  display: "inline",
                  width: "102px",
                  height: "18px",
                  backgroundColor: "#EBEBEB",
                  //   border: "1px solid black",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p style={{ display: "inline", padding: "0px", margin: "0px" }}>
                  Paragraph
                </p>
              </div>
            </div>
            <div
              style={{
                display: "inline",
                // border: "1.5px solid blue",
                position: "relative",
              }}
            >
              <span
                style={{
                  color: "#616161",
                  fontSize: "50px",
                  position: "absolute",
                  left: "-7.5px",
                  top: "-38.5px",
                }}
              >
                ...
              </span>
            </div>
          </div>
          <div
            style={{
              height: "60%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                //   backgroundColor: "beige",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                height: "100%",
                width: "90%",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubRectangle;
