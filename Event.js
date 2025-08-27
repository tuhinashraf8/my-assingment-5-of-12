
// call btn function

const callBtns = document.getElementsByClassName('call-card-btn');


for (let callBtn of callBtns) {
    callBtn.addEventListener('click', function () {

        let coinNumber = document.getElementById('coin').innerText;
       
        const serviceName = callBtn.parentNode.parentNode.childNodes[5].innerText;
         const serviceNumber = callBtn.parentNode.parentNode.childNodes[7].innerText;
        if (coinNumber < 20){
            alert('আপনার পর্যাপ্ত কয়েন নেই দয়া করে রিচার্জ করুন।')
            return
        }
        alert( ` 📞 ${serviceName} ${serviceNumber} `)
        document.getElementById('coin').innerText = coinNumber - 20;

        const cardTitel = callBtn.parentNode.parentNode.childNodes[3].innerText;
        // console.log(cardTitel);
        
        // console.log(serviceName);
       
        const CallHistoryContenar = document.getElementById('call-history-contenar')
        // console.log(serviceNumber);
        const now = new Date();
        const localTime = now.toLocaleTimeString();
        // console.log(localTime);
    const newCallHistory = document.createElement("div");
    newCallHistory.innerHTML= `
    <div class="bg-slate-100 flex justify-between items-center p-3 rounded-xl my-3">
                    <div>
                        <p>${cardTitel}</p>
                        <p>${serviceNumber}</p>
                    </div>
                    <p>${localTime}</p>
                    
                </div>`
CallHistoryContenar.appendChild(newCallHistory)


    })
}

// love btn function
const loveBtns = document.getElementsByClassName('heart-btn');
for (let loveBtn of loveBtns) {
    loveBtn.addEventListener('click', function () {
        let HeartNumber = document.getElementById('heart-count').innerText;
        let updetedHeartNumber = Number(HeartNumber) + 1;
        document.getElementById('heart-count').innerText = updetedHeartNumber

    })
}


// copy btn function

const copyBtns = document.getElementsByClassName("copy-card-btn")

for (let copyBtn of copyBtns){
    copyBtn.addEventListener('click',function(){
        const serviceNumber = copyBtn.parentNode.parentNode.childNodes[7].innerText;
        alert(`নম্বর কপি হয়েছে : ${serviceNumber}`)
         navigator.clipboard.writeText(serviceNumber)

        let copyNumber = document.getElementById('copy-Count').innerText;
        let updatedCopyNumber = Number(copyNumber) + 1;
        document.getElementById('copy-Count').innerText = updatedCopyNumber;
    
        
    })
}