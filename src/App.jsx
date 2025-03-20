import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import DropdownLeft from "./Components/DropdownLeft";
import DropdownRight from "./Components/DropdownRight";
import Rectangle from "./Components/Rectangle";
import image13 from "./assets/image13.png";
import Thread from "./Components/Thread";
import SubRectangle from "./Components/SubRectangle";
import SubRectangle2 from "./Components/SubRectangle2";
import meeting from "./assets/meeting.svg";
import questionMark from "./assets/questionMark.svg";
import schedule from "./assets/schedule.svg";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <DropdownRight />
        <div>
          <h2
            className="Poppins_L"
            style={{
              fontSize: "28px",
              color: "#0029FF",
              fontWeight: "800",
              position: "absolute",
              top: "108px",
              left: "187px",
              boxSizing: "border-box",
              margin: "0px",
              padding: "0px",
            }}
          >
            Technical Project Management
          </h2>
        </div>
        <div
          className="poppins"
          style={{ position: "absolute", top: "108px", left: "1132px" }}
        >
          <button
            style={{
              fontFamily: "Poppins_L",
              color: "white",
              width: "121px",
              height: "36px",
              borderRadius: "10px",
              backgroundColor: "#0029FF",
              border: "none",
            }}
          >
            Submit Task
          </button>
        </div>
        <div
          style={{
            position: "absolute",
            backgroundColor: "#E9ECEF",
            width: "1066px",
            height: "135px",
            top: "187px",
            left: "187px",
            borderRadius: "5px",
          }}
        >
          <div
            className="Poppins_L"
            style={{
              fontWeight: "700",
              display: "flex",
              alignItems: "center",
              position: "absolute",
              width: "374px",
              height: "30px",
              top: "25px",
              left: "27px",
              // backgroundColor: "black",
              color: "black",
            }}
          >
            Explore the world of Management
          </div>
          <div
            className="Poppins_L"
            style={{
              fontSize: "14px",
              fontWeight: "400",
              color: "black",
              position: "absolute",
              width: "1012px",
              height: "45px",
              top: "65px",
              left: "27px",
              backgroundColor: "",
              padding: "0px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <p style={{}}>
              As a Project Manager, you play an important role in leading a
              project through initiation, monitoring, controlling and
              completion. How? Do you want to manage each and every step of your
              life?
            </p>
          </div>
        </div>
        <DropdownLeft />
      </div>
      <div
        style={{
          position: "absolute",
          top: "397px",
          left: "187px",
          backgroundColor: "white",
          height: "1300px",
          width: "1066px",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          rowGap: "0",
        }}
      >
        <Rectangle
          header={"Technical Project Management"}
          Description={
            "Story of Alignment Scope of Agility Specific Accountable Staggering Approach"
          }
        >
          <img src={image13} alt="thumbnail" />
        </Rectangle>
        <Rectangle
          header={"Thread Build"}
          Description={
            "Watch the video and threadbuild, and jot out key threads while watching the video"
          }
        >
          <Thread />
        </Rectangle>
        <Rectangle
          header={"Structure Your Pointers"}
          Description={
            "Write a 300 - 400 word article from your thread . Publish your understanding and showcase your understanding to the entire world "
          }
        >
          <SubRectangle />
        </Rectangle>
        <Rectangle
          header={"4SA Method"}
          Description={"To Explore more read more"}
        >
          <SubRectangle2 />
        </Rectangle>
      </div>
      <div
        style={{
          position: "relative",
          top: "750px",
          left: "87.5%",
          height: "275px",
          width: "90px",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            top: "-25px",
            height: "275px",
            width: "90px",
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: "85px",
              width: "85px",
              borderRadius: "50%",
              backgroundColor: "blue",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={questionMark} alt="?" />
          </div>
          <div
            style={{
              height: "85px",
              width: "85px",
              borderRadius: "50%",
              backgroundColor: "blue",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={meeting} alt="meeting" />
          </div>
          <div
            style={{
              height: "85px",
              width: "85px",
              borderRadius: "50%",
              backgroundColor: "blue",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={schedule} alt="schedule" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
