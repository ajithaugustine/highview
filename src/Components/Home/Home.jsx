import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Navbar from "../Header/Navbar";
import "./Home.css";
import Footer from "../footer/Footer";
function Home() {
  const [hotels, sethotels] = useState([""]);
  const [search, setsearch] = useState('')
  const history = useHistory();
  useEffect(() => {
    fetchhotels();
  }, []);
// fetchdata
  const fetchhotels = async () => {
    const all = await axios.get("http://localhost:3001");
    sethotels(all.data);
  };
// findhotel
  const findhotel =async(e)=>{
      e.preventDefault()
    const all = await axios.get(`http://localhost:3001/search?name=${search}`);
   console.log(all.data);
   if(all.data =='') return alert('no hotel found'), fetchhotels()
   sethotels(all.data)
  }
//   edithotel
  const edithotel = (id) => {
      history.push(`edithotel/${id}`);
    };
    
// deletehotel
  const deletehotel = (id) => {
    axios.delete(`http://localhost:3001/${id}`).then((res) => {
      fetchhotels();
      console.log(res.data);
    });
  };
  return (
    <div>
      <div className="home">
        <Navbar />

        <div className="search">
          <form class="d-flex" onSubmit={findhotel}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search hotel by name"
              aria-label="Search"
              value={search}
              onChange={(e)=>setsearch(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>

        <div className="hotels container-fluid">
          {hotels.map((hotel, index) => {
            return (
              <div key={index} className="hotel">
                <img src={hotel.imgUrl} alt="broken url" />
                <div className="details">
                  <h4>{hotel.name}</h4>
                  <p>
                    {hotel.country}
                    <i className="fas fa-map-marker-alt location"></i>
                  </p>
                  <p>
                    {hotel.address}
                  </p>
                  <p>{hotel.roomtype}</p>
                  <h4>
                    {hotel.price}
                    <i className="fas fa-rupee-sign"></i>
                  </h4>
                  <div className="buttons">
                    <h5>
                      <i
                        className="fas fa-edit edit"
                        onClick={() => edithotel(hotel._id)}
                      ></i>
                    </h5>
                    <h5>
                      <i
                        className="fas fa-trash delete"
                        onClick={() => deletehotel(hotel._id)}
                      ></i>
                    </h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
