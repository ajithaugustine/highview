import React, { useState,useEffect } from "react";
import {useParams,useHistory} from 'react-router-dom'
import axios from "axios";
import Navbar from "../Header/Navbar";
import "./Eedithotel.css";
function Edithotel() {
    const [name, setname] = useState('');
    const [country, setcountry] = useState('');
    const [imgUrl, setimgUrl] = useState('');
    const [address, setaddress] = useState('');
    const [roomtype, setroomtype] = useState('');
    const [from, setfrom] = useState('');
    const [to, setto] = useState('');
    const [price, setprice] = useState('');
    const history = useHistory()
    const {id} = useParams()
    useEffect(()=>{
        axios.get(`https://oyo-serverside.herokuapp.com/${id}`).then((res)=>{
            const { name,address,imgUrl,country,roomtype,from,to, price} =res.data
            setname(name)
            setcountry(country)
            setimgUrl(imgUrl)
            setaddress(address)
            setroomtype(roomtype)
            setfrom(from)
            setto(to)
            setprice(price)
           
        })
    },[])

    const register = (e) => {
      e.preventDefault();
      axios.put(`https://oyo-serverside.herokuapp.com/edithotel/${id}`, {
          name,
          address,
          imgUrl,
          country,
          roomtype,
          from,
          to,
          price,
        })
        .then((res) => {
          console.log(res.data);
          alert("success");
            history.push('/')
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    return (
      <div >
        <Navbar />
  
        <div className="add">
          <h3>Update</h3>
          <form className="row g-3" onSubmit={register}>
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input
                type="text"
                autoComplete="off"
                className="form-control"
                required
                value={name}
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Country</label>
              <input
                type="text"
                className="form-control"
                required
                autoComplete='off'
                value={country}
                onChange={(e) => setcountry(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Image Url</label>
              <input
                type="text"
                className="form-control"
                required
                autoComplete='off'
                placeholder="paste url"
                value={imgUrl}
                onChange={(e) => setimgUrl(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                required
                autoComplete='off'
                placeholder="1234 Main St"
                value={address}
                onChange={(e) => setaddress(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Room Category</label>
              <select
                id="inputState"
                className="form-select"
                value={roomtype}
                onChange={(e) => setroomtype(e.target.value)}
              >
                <option value="Single (sleeps 1 adult)">Single</option>
                <option value="Double (sleeps 2 adult)" >Double</option>
                <option value="Twin (sleeps 2 adult)">Twin</option>
                <option value="Triple (sleeps 3 adult)">Triple</option>
                <option value="Quad (sleeps 4 adult)">Quad</option>
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label">From</label>
              <input
                type="date"
                className="form-control"
                value={from}
                onChange={(e) => setfrom(e.target.value)}
                required
              />
            </div>
            <div className="col-md-3">
              <label className="form-label ">To</label>
              <input
                type="date"
                className="form-control"
                value={to}
                onChange={(e) => setto(e.target.value)}
                required
              />
            </div>
            <div className="col-md-2">
              <label className="form-label">Price</label>
              <input
                type="number"
                className="form-control"
                id="inputZip"
                value={price}
                autoComplete='off'
                onChange={(e) => setprice(e.target.value)}
                required
              />
            </div>
  
            <div className="col-12 d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
             Update
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
export default Edithotel
