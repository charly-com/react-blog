import React from "react";
import "./create.css";

const Create = () => {
  return (
    <>
      <section className="newPost">
        <div className="container boxItems">
          <div className="img">
            <img
              src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
            <form>
              <div className="inputfile flexCenter">
                <input type="file"  />
              </div>
              <input type="text" placeholder="Title" />

              <textarea name="" id="" cols="30" rows="10"></textarea>

              <button className="button">Create Post</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Create;

// import React from "react";
// import "./create.css";

// const create = () => {
//   return (
//     <>
//       <section className="newPost">
//         <div className="container box">
//           <div className="img">
//             <img
//               src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=600"
//               alt=""
//             />
//           </div>
//           <form>
//             <div className="inputfile flexCenter">
//               <input type="file" accept="image/*" alt="img" />
//             </div>
//             <input type="text" placeholder="Title" />
//             <textarea name="" id="" cols="30" rows="10"></textarea>
//             <button className="button">Create Post</button>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// };

// export default create;
