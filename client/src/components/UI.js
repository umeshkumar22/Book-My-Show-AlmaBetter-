import React, { useEffect, useState } from "react";
import axios from "axios";
import { movies, slots, seats } from "./data/data";
import "./style/UI.css";

function UI() {

  // movieData object hold and monitor the post method data
  const [movieData, setMovieData] = useState({
    movie: "",
    timeSlot: "",
    seats: {
      A1: 0,
      A2: 0,
      A3: 0,
      A4: 0,
      D1: 0,
      D2: 0,
    },
  });


  //lastBooking object hold and monitor get method data
  const [lastBooking, setLastBooking] = useState([]);


  /*-------------------------------make change here-------------------------------------*/

  // axios get request for getting lastBooking details
  /*change "https://ticket-server-x8vq.onrender.com/api/booking" to
   "http://localhost:8080/api/booking" to run in localhost*/
  const getLastBooking = async () => {
    try {
      const temp = await axios.get("http://localhost:8080/api/booking");
      setLastBooking(temp.data);
    } catch (error) {
      console.log("error in axios call", error);
    }
    setMovieData({
      movie: "",
      timeSlot: "",
      seats: {
        A1: 0,
        A2: 0,
        A3: 0,
        A4: 0,
        D1: 0,
        D2: 0,
      },
    });
  };

  useEffect(() => {
    getLastBooking();
  }, []);


  // set movie in movieData
  const setMovie = (movie) => {
    setMovieData({ ...movieData, movie: movie });
  };


  //  set time in movieData
  const setTime = (time) => {
    setMovieData({ ...movieData, slot: time });
  };


  //set seat details in movieData
  const setSeats = (value, seats) => {
    setMovieData({
      ...movieData,
      seats: { ...movieData.seats, [seats]: parseInt(value.target.value) },
    });
  };



  /*-------------------------------make change here-------------------------------------*/

  // axios post request 
  /*change "https://ticket-server-x8vq.onrender.com/api/booking" to
   "http://localhost:8080/api/booking" to run in localhost*/

  const handleSubmit = async () => {
    await axios
      .post("http://localhost:8080/api/booking", movieData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    getLastBooking();
  };


  return (
    <>
      <div>

        <div className="container mt-5">
          <h1 className="sub-heading text-center pb-1">Book My Show</h1>
          <div className="row main_block p-4 pb-2">
            <div className="content col-8">
              {/*Select Movie Section*/}

              <div className="movies p-2 m-2 pb-4">
                <h4 className="sub-heading py-2 px-3">Select A Movie</h4>
                {movies &&
                  movies.map((elem, index) => (
                    <button
                      key={index}
                      className={`btn mx-3 my-1 
                    ${movieData.movie === elem ? "btn btn-danger" : ""}`}
                      onClick={() => setMovie(elem)}
                    >
                      {elem}
                    </button>
                  ))}
              </div>

              {/*Select Time Section*/}

              <div className="slot p-2 m-2 pb-4">
                <h4 className="sub-heading py-2 px-3">Select A Time Slot</h4>
                {slots &&
                  slots.map((time, num) => (
                    <button
                      key={num}
                      className={`btn mx-3
                    ${movieData.slot === time ? "btn btn-danger" : ""}`}
                      onClick={() => setTime(time)}
                    >
                      {time}
                    </button>
                  ))}
              </div>

              {/*Select Seat Section*/}

              <div className="seats p-1 m-2 pb-3">
                <h4 className="sub-heading px-3 py-2 ">Select the Seats</h4>
                <div className="row">
                  {seats &&
                    seats.map((item, index) => (
                      <div
                        key={index}
                        className="col mx-3 seat_col text-center p-1 ms-4 pb-2"
                      >
                        <h6>{item}</h6>
                        <input
                          onChange={(e) => setSeats(e, item)}
                          type="number"
                          placeholder="0"
                          min="0"
                          max="10"
                          style={{ width: "2.8rem" }}
                        />
                      </div>
                    ))}
                </div>
              </div>

              {/*Submit or Book Now Button*/}

              <button
                className="btn btn-outline-primary mx-3 mt-2"
                onClick={handleSubmit}
              >
                Book Now
              </button>
            </div>
            <div className="left-side-bar col-4">
              {/*Last Booking Details*/}

              <div className="lastbooking p-3 m-2">
                <h4 className="sub-heading text-center pb-3">
                  Last Booking Details:
                </h4>
                {lastBooking.length !== 0 ? (
                  lastBooking.map((elem, index) => (
                    <div
                      key={index}
                      className="border rounded px-3 py-3 bg-light text-secondary"
                      style={{ lineHeight: "3px" }}
                    >
                      <p>
                        <span className="lastBook">seats:</span>
                      </p>
                      <p>
                        <span className="lastBook">A1: </span>
                        <span>{elem.seats.A1}</span>
                      </p>
                      <p>
                        <span className="lastBook">A2: </span>
                        <span>{elem.seats.A2}</span>
                      </p>
                      <p>
                        <span className="lastBook">A3: </span>
                        <span>{elem.seats.A3}</span>
                      </p>
                      <p>
                        <span className="lastBook">A4: </span>
                        <span>{elem.seats.A4}</span>
                      </p>
                      <p>
                        <span className="lastBook">D1: </span>
                        <span>{elem.seats.D1}</span>
                      </p>
                      <p>
                        <span className="lastBook">D2: </span>
                        <span>{elem.seats.D2}</span>
                      </p>
                      <p>
                        <span className="lastBook">slot: </span>
                        <span>{elem.slot}</span>
                      </p>
                      <p>
                        <span className="lastBook">movie: </span>
                        <span style={{ lineHeight: "18px" }}>{elem.movie}</span>
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-danger text-center">
                    No Previous Booking Found!
                  </p>
                )}
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </>
  );
}

export default UI;
