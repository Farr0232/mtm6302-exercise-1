const $emoji = document.getElementById('emoji')
const emoji=[]

for(let i=128513; i<=128612; i++){
    emoji.push(`
    <div class="emoji">
    <div class="graphic">&#${i};</div>
    <div class="hex">${i}</div>
    </div>
    `)
}

$emoji.innerHTML +=emoji.join('')