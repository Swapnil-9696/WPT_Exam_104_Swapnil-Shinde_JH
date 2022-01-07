import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  return (
    <div>
      <MyCompo1 />
    </div>
  );
}

function MyCompo1() {
  return (
    <div className="row d-flex justify-content-center">
      <div className="col-md-8">
        <div className=" row bg-secondary text-light p-3">
          <div className="col-3">
            {" "}
            <h1>MyChatApp</h1>
          </div>
          <div className="col-9 d-flex align-items-end">
            {" "}
            <h6>104_Swapnil Shinde_Jh 210940520104</h6>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-10">
            <input
              className=" form-control w-100"
              style={{ height: "17mm" }}
              type="text"
              placeholder="lets chat here.."
              // value={msg}
              // onChange={msgchange}
            />
          </div>
          <div className="col-2">
            <input
              className=" alert alert-secondary btn btn-lg w-100"
              type="button"
              //value="send"
              // onClick={adduser}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
