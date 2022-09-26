/* --- FUNCTION FOR THE CLOCK --- */

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
    $('#date').text(`${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}`)

}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

$('.container').css({
    'width':innerWidth+'px',
    "height":innerHeight+'px'
})
$('#notes').val(localStorage.getItem('notes'))
$('.col').css({'height':(innerHeight-100)+'px'})
$('#notesave').click(function(){
    localStorage.setItem('notes',$('#notes').val())
})