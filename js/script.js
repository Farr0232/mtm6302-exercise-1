const $emoji = document.getElementById('emoji')
const emoji=[]

for(let i=129410; i<=129509; i++){
    emoji.push(`
    <div class="emoji">
    <div>&#${i};</div>
    <div>${i}</div>
    </div>
    `)
}

$emoji.innerHTML +=emoji.join('')