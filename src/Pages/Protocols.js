import React, { useEffect, useState } from "react";
import "../styles/Card1.css";

function Protocols({ projectList }) {
  const [protocolsData, setProtocolsData] = useState([]);

  useEffect(() => {
    console.log("projectList:", projectList);
    const newData = projectList?.filter((item) => {
      console.log("category:", item);
      return item?.categories?.includes("protocols");
    });
    console.log(newData);
    setProtocolsData(newData);
  }, []);
  return (
    <>
      <section id="blog" className="blog_wrapper wrapper">
        <div className="container">
          <h3 className="head_Title">
            <span className="span"> |</span>Protocols
          </h3>
          <div className="row">
            {protocolsData.map((data) => (
              <div key={data.id} className="col-md-4 col-sm-6 mb-4">
                <div className="card p-2 position-relative card_setion">
                  <img src={data.image} alt="/" />
                  <div className="blog-content position-absolute">
                    <h6 className="text-white">june 20s, 2022</h6>
                    <div className="blog-data">
                      <h5 className="text-white mb-4">{data.title}</h5>
                      <p className="mt-2 text-white">{data.description}</p>
                      <a href={data.url} className="main-btn mt-2">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Protocols;
