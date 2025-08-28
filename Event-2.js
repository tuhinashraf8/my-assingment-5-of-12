// heart btn function
const cardContenar = document.getElementById("card-contenar")
cardContenar.addEventListener('click', function (e) {
    if (e.target.className.includes('heart-btn')) {
        let HeartNumber = document.getElementById('heart-count').innerText;
        let updetedHeartNumber = Number(HeartNumber) + 1;
        document.getElementById('heart-count').innerText = updetedHeartNumber
    }
})



// Call Buttons function
cardContenar.addEventListener('click', function (e) {
    if (e.target.className.includes('call-card-btn')) {
        const callBtn = e.target;
        let coinNumber = document.getElementById('coin').innerText;
        const serviceName = callBtn.parentNode.parentNode.childNodes[5].innerText;
        const serviceNumber = callBtn.parentNode.parentNode.childNodes[7].innerText;
        if (coinNumber < 20) {
            alert('আপনার পর্যাপ্ত কয়েন নেই দয়া করে রিচার্জ করুন।')
            return
        }
        alert(` 📞 ${serviceName} ${serviceNumber} `)
        document.getElementById('coin').innerText = coinNumber - 20;

        const cardTitel = callBtn.parentNode.parentNode.childNodes[3].innerText;
        const CallHistoryContenar = document.getElementById('call-history-contenar')
        const now = new Date();
        const localTime = now.toLocaleTimeString();
        const newCallHistory = document.createElement("div");
        newCallHistory.innerHTML = `
    <div class="bg-slate-100 flex justify-between items-center p-3 my-3 rounded-xl transition duration-300 ease-in-out hover:bg-green-200">
                    <div>
                        <p>${cardTitel}</p>
                        <p>${serviceNumber}</p>
                    </div>
                    <p>${localTime}</p>  
                </div>`
        newCallHistory.classList.add("transition", "duration-300", "ease-in-out", "hover:bg-green-200");
        CallHistoryContenar.appendChild(newCallHistory)
    }
})


// copy btn function
cardContenar.addEventListener('click', function (e) {
    if (e.target.className.includes('copy-card-btn')) {
        const copyBtn = e.target;
        const serviceNumber = copyBtn.parentNode.parentNode.childNodes[7].innerText;
        alert(`নম্বর কপি হয়েছে : ${serviceNumber}`)
        navigator.clipboard.writeText(serviceNumber)

        let copyNumber = document.getElementById('copy-Count').innerText;
        let updatedCopyNumber = Number(copyNumber) + 1;
        document.getElementById('copy-Count').innerText = updatedCopyNumber;
    }
})


// clear btn function
const clearContenar = document.getElementById('clear').addEventListener('click', function () {
    const CallHistoryContenar = document.getElementById('call-history-contenar')
    CallHistoryContenar.innerHTML = ''
})