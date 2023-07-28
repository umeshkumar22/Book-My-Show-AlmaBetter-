Book My Show 

This is a full stack project on Book My Show.

In this project I have used several Programming technologies like ReactJS, ExpressJS and MongoDB.

This Project is live:
    client :-
    "https://bookmyshow-ja0v.onrender.com/"
    server :-
    "https://ticket-server-x8vq.onrender.com/api/booking"

API Documentation:- https://documenter.getpostman.com/view/26813108/2s93sjW9rH#3caead2d-fc97-4bfe-a750-66dc5fbd93ea
    

The local server of the frontend is running on the port 3000 and backend server is running on port 8080.

To run this project in your local machine

1.clone repo- git clone https://github.com/SNEHANSHU-CODE/BookMyShow.git

2.To run this app locally you have to change axios urls on client->src->components->UI.js
  "https://ticket-server-x8vq.onrender.com/api/booking" to
   "http://localhost:8080/api/booking" on two places in get request and post request.

<---------------------------------client------------------------------------------------->

1. cd client
2. npm install
3. npm start

4. client runs on localhost:3000


<-----------------------------------server------------------------------------------------->

1. open another terminal
2. cd server
3. npm install
4. npm start

5. server listen to localhost:8080

<----------------------To access mongoDb Atlas collection---------------------------------->
1. open mongodb compass
2. paste below link on New Collection Url and press save and connect
    Link -
   mongodb+srv://Admin:t4UaVnaztokq36sm@mernuser.mzkelwc.mongodb.net/test
4. goto test->bookmovietickets


Thank You!!!!!
