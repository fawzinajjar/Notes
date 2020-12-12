var newNoteValue;
document.getElementById("year").innerHTML = new Date().getFullYear();
// Plus Button onClick
$('#newNoteBtn').on('click',function(){
  $('#newNoteBtn').fadeOut(0)
  $('#saveNoteBtn').slideDown(1000)

  $("#inputNoteContainer").fadeIn(1000)
  $('#noteDisplayContainer').fadeOut(0)
})
// Save Button onClick
$('#saveNoteBtn').on('click',function(){
  $('#saveNoteBtn').fadeOut(0)
  $('#newNoteBtn').slideDown(1000)
  $('#inputNoteContainer').fadeOut(0)
  $("#noteDisplayContainer").fadeIn(1000)
  console.log($('#noteDisplayContainer'))
  
  newNoteValue = JSON.stringify({ 
    text : $('#inputNote').val(),
    date : Date.now(),
    id : Math.random()*100+ Date.now(),
    appName: "Notes",
    userId: "facebook_login_ID",
    userName: "facebook_name",
  })
  $.ajax({
    type:"post",
    contentType: "application/json",
    url:"http://localhost:3000/notes",
    data: newNoteValue,
    success: function(newNoteValue){
      console.log(newNoteValue)
    }
  })

})

$.ajax({
  type: "method",
  url: "url",
  data: "data",
  dataType: "dataType",
  success: function (response) {
    
  }
});


var data = $.ajax({
  type:"post",
  url:"http://localhost:3000/notes/1",
})
console.log(data)