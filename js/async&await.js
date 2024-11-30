async function fetchData() {
  try{
    const response =await fetch('https://randomuser.me/api/');
    const data =await response.json();
    console.log(data);
  }
  catch(err){
    console.error('Error Fetching Data : ', err);
  }
}
fetchData();