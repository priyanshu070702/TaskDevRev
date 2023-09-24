import fetch from 'node-fetch';

const url = 'https://book-finder1.p.rapidapi.com/api/search?series=Wings%20of%20fire&book_type=Fiction&lexile_min=600&lexile_max=800&results_per_page=25&page=1';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b709c13d49mshb127a24a60f79b8p174f21jsn3f88518c6d9a',
    'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
  }
};

async function getPosts(){
    const myPosts = await fetch(url, options);
    const responses = await myPosts.json();
    const arr=responses?.results;
    for(let i=0; i<arr?.length; i++){
      arr[i].copies = Math.floor(Math.random() * 20)+1;
      console.log("Title of Book: " + arr[i].title);
      // console.log("Search Title: " + arr[i].title_search);
      // console.log("Author: " + arr[i].authors);
      // console.log("Number of Pages: " + arr[i].page_count);
      // console.log("Year of Publishing: " + arr[i].copyright);
      console.log("Number of Copies Available: " + arr[i].copies);
      console.log();
    }
    // console.log(arr[5]);
}

getPosts();