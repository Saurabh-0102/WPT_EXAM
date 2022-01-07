import { useState } from "react";

export default function App() {
  return <Compo />;
}

function Compo() {
  const [btn, setbtn] = useState("SENT");
  const [stud_name, setstud_name] = useState("Saurabh Jhariya");
  const [id, setid] = useState("210940320108");
  const [message, setmessage] = useState("");
  const [list, setlist] = useState([]);
  // const [rlist, setrlist] = useState([]);

  const promess = (e) => {
    setmessage(e.target.value);
  };

  // const Messagesent = () => {
  //   for (let i = 2; i < 100; i++) {
  //     const data = {
  //       message: message,
  //     };
  //     if (i % 2 == 0) {
  //       const newlist = [...list, data];
  //       setlist(newlist);
  //       setmessage("");
  //     } else {
  //       const newlist = [...rlist, data];
  //       setrlist(newlist);
  //       setmessage("");
  //     }
  //   }
  // };

  const register = () => {
    const data = {
      message: message,
    };
    const newlist = [...list, data];
    setlist(newlist);
    setmessage("");
  };

  // const submit = () => {
  //   const data = {
  //     message: message,
  //   };
  //   const newlist = [...rlist, data];
  //   setrlist(newlist);
  //   setmessage("");
  // };

  return (
    <div className="container-fluid">
      <div>
        <div className="row bg-dark">
          <div className="col d-flex mt-2">
            <div>
              <h3 className="text-white">MyChatApp</h3>
            </div>
            <div className="mt-3 m-lg-2 text-white">
              <p>
                (by {stud_name}/{id})
              </p>
            </div>
          </div>
        </div>
        <div className="row d-flex gap-0 mt-2 ">
          <div className="col-10">
            <input
              className="form-control fs-2 border rounded border-3"
              style={{ height: "80px" }}
              type="text"
              value={message}
              placeholder="Lets chat here..."
              onChange={promess}
            />
          </div>
          <div className="col-2">
            <input
              className="btn btn-secondary border-3"
              type="btn"
              style={{ height: "80px" }}
              value={btn}
              onClick={register}
            />
          </div>
          <div className="mt-4">
            {list.map((item, index) => (
              <div
                className="m-2  border border-secondary rounded border-2 rounded fs-4 mb-3 "
                style={{ height: "45px" }}
                key={index}
              >
                <div className={index % 2 == 0 ? "text-start" : "text-end"}>
                {item.message}
                </div>
              </div>
            ))}
          </div>
          {/* <div>
            {rlist.map((item, index) => (
              <div
                className="text-end m-2 border border-secondary rounded border-2 rounded fs-4 mb-4 "
                style={{ height: "45px" }}
                key={index}
              >
                {item.message}
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}
