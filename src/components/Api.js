import React from "react";
import axios from 'axios';
import Button from "react-bootstrap/Button";

export default function Api() {
  const [apiResponse, setApiResponse] = React.useState({
    hashrate: "",
    blockTime: "",
    gasLimit: ""
  })


  const [dog, setDog] = React.useState({
    fileSizeBytes: "",
    url: ""
  })

  const fetchData1 = async () =>{
    try {
      const response1 = await axios.get('https://random.dog/woof.json');
      console.log(response1.data.url);
      setDog({
        fileSizeBytes: response1.data.fileSizeBytes,
        url: response1.data.url
      });
      
    } catch (error) {
      console.error(error.message);
    } 
    
  }
    
    
 
  const handleImg = () => {
    fetchData1();
  };



  const [num, setNum] = React.useState(0);
  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const handleClick = () => {
    setNum(randomNumberInRange(1, 50));
  };
 
  console.log(num);
    React.useEffect(() => {
        const fetchData = async () =>{
          try {
            const response = await axios.get('https://explorer.tsf-platform.com/api/v1/network/stats');
            console.log(response.data);
            setApiResponse({
              hashrate: response.data[0].hashrate,
              blockTime: response.data[0].blockTime,
              gasLimit: response.data[0].gasLimit
            })
          } catch (error) {
            console.error(error.message);
          }
        }
        
        fetchData();
      }, [num]);

      
    return (
        <div className="container-fluid">
            <div>
              <p>Hashrate: {apiResponse.hashrate} GH</p>
              <p>block Time: {apiResponse.blockTime}</p>
              <p>gas Limit: {apiResponse.gasLimit}</p>
            </div>
            <div>
            <Button
              variant="danger"
              size="lg"
              block="block"
              type="submit"
              className="mt-4 create-edit-btn"
              onClick={handleClick}
            >
              Get Result
              </Button>
              <Button
              variant="primary"
              size="lg"
              block="block"
              type="button"
              className="mt-4 create-edit-btn"
              onClick={handleImg}
            >
              Get img of dog
              </Button>
            </div>
            <div>
              <img src={dog.url} />
            </div>
        </div>
    )
}


