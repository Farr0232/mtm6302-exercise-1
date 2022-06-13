const $emoji = document.getElementById('emoji')
const emoji=[]

for(let i=129410; i<=129509; i++){
    emoji.push(`
    <div class="emoji">
    <div class="graphic">&#${i};</div>
    <div class="hex">${i}</div>
    </div>
    `)
}

$emoji.innerHTML +=emoji.join('')