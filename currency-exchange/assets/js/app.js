const select = document.querySelector(".form-select");
const input = document.querySelector(".amount-input");
const button = document.querySelector(".btn-primary");
const resp = document.querySelector(".resp");

let currency;
select.addEventListener("change", function(){
    currency = select.value.toUpperCase();
    // alert(currency);
})

axios({
    method: 'get',
    url: 'https://api.exchangerate.host/latest?base=AZN',
  })
    .then(function (response) {
        button.addEventListener("click", function(){
            // console.log(response.data.rates);
            let money = input.value;
            resp.innerHTML = response.data.rates[currency] * money;
        })
    });