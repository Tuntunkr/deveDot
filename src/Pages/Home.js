import React, { useRef, useState, useEffect } from "react";
import "../styles/Home.css";
import Search from "../assets/search_icons.svg";
import { Form, FormControl } from "react-bootstrap";
import firebaseDB from "../api/firebaseDB";
import Community from "./Community";
import Libraries from "./Libraries";
import Network from "./Network";
import NodeSoftware from "./NodeSoftware";
import Protocols from "./Protocols";
import Service from "./Service";
import Tools from "./Tools";
import { Typewriter } from "react-simple-typewriter";
import Foot from "./Foot";

function Home() {
  const firestoreRef = useRef(firebaseDB.collection("projects"));
  const [loading, setLoading] = useState(true);
  const [projects, setprojects] = useState([]);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const getprojects = async () => {
    try {
      const data = await firestoreRef.current.get();
      let docs = [];
      data.forEach((doc) => docs.push({ ...doc.data(), id: doc.id }));
      setprojects(docs);
      const check = docs.filter((item) => {
        return item?.catogories?.includes("community");
      });
      console.log("check:", check);
      setData(docs);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(`Error ${e}`);
    }
  };

  // console.log(projects);

  useEffect(() => {
    getprojects();
  }, []);

  const handleSearch = (event) => {
    console.log(event.target.value);
    const searchWord = event.target.value;
    if (searchWord.length > 0) {
      const _data = projects.filter((project) =>
        project.title.includes(searchWord)
      );
      setData(_data);
    } else {
      setData(projects);
    }
    setSearch(searchWord);
  };

  return (
    <>
      <div className="heresection">
        <div className="wrapper">
          <h1
            className="hands"
            style={{ paddingTop: "7rem", margin: "auto 0 " }}
          >
            Polkadot resources for you
            <span
              style={{
                color: "#7958D7",
                fontWeight: "bold",
                marginLeft: "10px",
              }}
            >
              <Typewriter
                loop
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={100}
                delaySpeed={1000}
                words={["Start ?", "Grow ?", "Launch ? ", "Build ?"]}
              />
            </span>
          </h1>
        </div>
        <p className="paragraph">
          Get all resources related to polkadot crypto at one place itself
        </p>
        <Form className="btn1">
          <FormControl
            type="search"
            className="place"
            placeholder="Search from multiple categories and resources"
            aria-label="Search"
            onChange={handleSearch}
            value={search}
          />

          <img src={Search} alt="/search_icons" className="search_icons" />
        </Form>
      </div>
      {console.log(data)}
      {data.length !== 0 && <Community projectList={data} />}
      {data.length !== 0 && <Libraries projectList={data} />}
      {data.length !== 0 && <Network projectList={data} />}
      {data.length !== 0 && <NodeSoftware projectList={data} />}
      {data.length !== 0 && <Protocols projectList={data} />}
      {data.length !== 0 && <Service projectList={data} />}
      {data.length !== 0 && <Tools projectList={data} />}

      <Foot />
    </>
  );
}

export default Home;      
