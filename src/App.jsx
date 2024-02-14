import { useState } from "react";

function App() {
  let valueArr = [
    "No",
    "Are you Sure?",
    "Ready sure??",
    "Are you positive???",
    "Please",
    "I will be very very sad",
    "I will be very very very sad",
    "Please say yes Please",
    "You are breaking my heart :(",
    "Are you sure ;)",
    "I will be depressed",
    "I am crying ;(",
    "Last option",
  ];
  let imgArr = [
    "https://media.tenor.com/d0nIEAvNYksAAAAi/tkthao219-bubududu.gif",
    "https://media.tenor.com/Beyd-TNKqVMAAAAi/bubududu-panda.gif",
    "https://media.tenor.com/-aW73OVUtyYAAAAi/tkthao219-bubududu.gif",
    "https://media.tenor.com/oDXHIoN9fAEAAAAi/bubududu-panda.gif",
    "https://media.tenor.com/8FvH8NvyECEAAAAi/tkthao219-bubududu.gif",
    "https://media.tenor.com/ZKsi3WzsGKwAAAAi/bubu-dudu-bear-and-panda.gif",
    "https://media.tenor.com/lmZC9oYpaGsAAAAi/tkthao219-bubududu.gif",
    "https://media.tenor.com/Rp6atGbxpAAAAAAi/tkthao219-bubududu.gif",
    "https://media.tenor.com/9jxBvKBeApUAAAAi/bubududu-panda.gif",
    "https://media.tenor.com/v9w5MP3vJBsAAAAi/%E9%96%8B%E5%BF%83%E8%B7%B3%E8%88%9E-%E8%B7%B3%E8%88%9E.gif",
    "https://media.tenor.com/uSUkySupnnUAAAAi/tkthao219-bubududu.gif",
    "https://media.tenor.com/YEkYrAHn70QAAAAi/tkthao219-bubududu.gif",
    "https://media.tenor.com/7MyxXlG5L2IAAAAi/11.gif",
    "https://media.tenor.com/KnQY1gWdatQAAAAi/tkthao219-bubududu.gif"

  ];
  let successImgArr = [
    "https://media.tenor.com/Re3rcuBu4hIAAAAj/love-couple.gif",
    "https://media.tenor.com/-Qq0R9rKNzUAAAAj/panda-bear.gif",
    "https://media.tenor.com/-1ExhbpORWQAAAAj/cute.gif",
    "https://media.tenor.com/4D9h_vwCp-EAAAAj/tkthao219-bubududu.gif"
  ]
  let [counter, setCounter] = useState(0);
  let [text, setText] = useState("Will you be my Valentine ?");
  let [check,setCheck] = useState(false)
  function update() {
    const yesBtn = document.querySelector("#yes");
    const h1 = document.querySelector("h1");
    const noBtn = document.querySelector("#no");
    yesBtn.style.scale = `${(counter + 1) * 45}%`;
    yesBtn.style.transform = `translateY(-${(counter + 1) * 3}%)`;
    h1.style.transform = `translateY(-${(counter + 1) * 30}%)`;
    if (counter === valueArr.length - 1) {
      noBtn.style.display = "none";
      // yesBtn.style.scale = `${(counter + 1) * 1.5}`;
    }
    // console.log(yesBtn.classList)
    // console.log(-(counter+1)*100)
  }
  function reset() {
    const h1 = document.querySelector("h1");
    const noBtn = document.querySelector("#no");
    
    h1.style = "";
  }
  console.log(counter)
  return (
    <div className="h-dvh w-dvw flex flex-col items-center justify-between overflow-hidden">
      {check ? <div>
        <img className="h-40 w-40 object-cover z-10" src={successImgArr[0]} alt="gif" />
        <img className="h-40 w-40 object-cover z-10" src={successImgArr[1]} alt="gif" />
        <img className="h-40 w-40 object-cover z-10" src={successImgArr[2]} alt="gif" />
        <img className="h-40 w-40 object-cover z-10" src={successImgArr[3]} alt="gif" />
         </div> : <img className="h-40 w-40 object-cover z-10" src={imgArr[counter]} alt="gif" />}
      <h1 className="text-xl font-semibold text-center z-20">{text}</h1>
      <button
        id="yes"
        onClick={(e) => {
          e.preventDefault();
          setCheck(true)
          setText("I know you love me so much muah");
          e.target.style = "display : none";
          console.log(e.target.style);
          reset();
        }}
        className="bg-green-500 text-3xl text-white px-4 py-2"
      >
        Yes
      </button>
      <button
        id="no"
        className="bg-red-500 text-3xl text-white px-4 py-2"
        onClick={(e) => {
          e.preventDefault();
          update();
          setCounter((prev) => prev + 1);
        }}
      >
        {valueArr[counter]}
      </button>
    </div>
  );
}

export default App;
