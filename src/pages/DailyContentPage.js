// import React, { useState } from "react";
// import { useHistory, useParams } from "react-router-dom";
// import {
//   Card,
//   Icon,
//   Button,
//   Header,
//   Image,
//   Modal,
//   Segment,
// } from "semantic-ui-react";

// import "../App.css";

// function DailyContent({ setIsLoggedIn }) {
//   const history = useHistory();

//   let { id } = useParams();
//   async function loggedOut() {
//     history.push("/");
//   }

//   async function back() {
//     history.push("/AllContent");
//   }

//   //   let image = Data.data[id].image;
//   //   let t = Data.data[id].title;
//   //   console.log(id);
//   //   let date = 1;

//   return (
//     <>
//       <div className="navbar">
//         <Button
//           labelPosition="left"
//           icon="left chevron"
//           content="Back"
//           onClick={back}
//         />
//         <h2 className="ui left floated header">Today's Content</h2>
//         <h2 className="ui right floated header">
//           <Button onClick={loggedOut} className="ui button">
//             Log Out
//           </Button>
//         </h2>
//       </div>
//       {Data.data[id].topics.map((course, i) => {
//         if (i < date * 4 && i >= (date - 1) * 4) {
//           return (
//             <Image
//               src={image}
//               as="a"
//               size="medium"
//               href="http://google.com"
//               target="     cndfhfhdfddh"
//             />
//           );
//         }
//       })}
//     </>
//   );
// }

// export default DailyContent;
