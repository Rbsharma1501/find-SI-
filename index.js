function populateDiv() {
    const principal = document.getElementById("principalamount").value;
    const rate = document.getElementById("Rateofinterest").value;
    const time = document.getElementById("Timeperiod").value;
    
    fetch(`http://localhost:3000/interest?principal=${principal}&rate=${rate}&time=${time}`)
    .then(function(response) {
        return response.json(); 
        
    })
    .then(function(data) {
        document.getElementById("total").innerHTML = `Total Amount: ${data.total}`;
        document.getElementById("interest").innerHTML = `Interest: ${data.interest}`;
    });
}
