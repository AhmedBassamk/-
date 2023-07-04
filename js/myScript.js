var js_action =document.getElementById('js_action');
var js_edit =document.querySelectorAll('.js');
var jq =document.querySelectorAll('.jq');
var step =document.querySelectorAll('#step');
var layer_ =document.querySelectorAll('.layer_');

    js_action.onclick = ()=>{
    js_edit.forEach(element => {
        element.classList.toggle('js')
    });
    $('.buttons').append('<span class="exit" style="background:red;padding:8px 10px;color:white;border-radius:5px;position:relative;top:2px;cursor:pointer">X</span>')
    $("#js_action").html('Editing...');
    $(".start").html('Save Editing');
    $('.layer_').show()

}
$('.layer_').hide()


$('body').on('click' , '.exit' , ()=>{
    js_edit.forEach(element => {
        element.classList.toggle('js')
    });
    $("#js_action").html('<i class="fas fa-pen text-success mr-1"></i> Edit Recipe');
    $('.exit').hide()
    $(".start").html('Start Cooking');
$('.layer_').hide()


})
layer_.forEach(item => {
  item.onclick = ()=>{
    $(item).hide()
    step.forEach(element => {
        $(element).prop('disabled' , false)
        $(this).css('border' , "1px solid red")
        
    });
  }
})
