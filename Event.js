
// call btn function

const copyBtns = document.getElementsByClassName('call-card-btn');


for (let copyBtn of copyBtns) {
    copyBtn.addEventListener('click', function () {

        let coinNumber = document.getElementById('coin').innerText;
        let copyNumber = document.getElementById('copy-Count').innerText;
        if (coinNumber < 200){
            alert('taha kom')
            return
        }else{
            console.log('beshi');
        }
        // console.log(copyNumber);
        // console.log(coinNumber);
        // console.log(HeartNumber);
        const iconImg = copyBtn.parentNode.parentNode.childNodes[1].childNodes[1];
        // console.log(iconImg);
        const cardTitel = copyBtn.parentNode.parentNode.childNodes[3].innerText;
        // console.log(cardTitel);
        const serviceName = copyBtn.parentNode.parentNode.childNodes[5].innerText;
        // console.log(serviceName);
        const serviceNumber = copyBtn.parentNode.parentNode.childNodes[7].innerText;
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
        console.log(HeartNumber);
    })
}