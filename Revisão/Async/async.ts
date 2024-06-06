async function fetchData() {

    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
    
}

fetchData().then(function(data) {
    console.log(data);
    
})