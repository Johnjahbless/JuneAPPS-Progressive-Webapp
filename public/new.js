<script type="text/javascript">
$(document).ready(function() {
    if ($('#newContact').length > 0 ) {
        contactScript('forcontact');
    }
});
//firebase
function contactScript(value) {
    var a = { 
      apiKey: "AIzaSyAdqNXW1saxRPpIxBdVArnEOQ1Ow3eLbx8",
      authDomain: "discourse-skcript.firebaseapp.com",
      databaseURL: "https://discourse-skcript.firebaseio.com",
      projectId: "discourse-skcript",
      storageBucket: "discourse-skcript.appspot.com",
      messagingSenderId: "592087480717" };
    firebase.initializeApp(a);
    var b = firebase.database().ref("messages");
        $("#newContact").submit(function(a) { $(this), console.log("Submit to Firebase");
        var c = $("#name").val(),
            d = $("#email").val(),
            e = $("#phone").val(),
            g = $("#text").val(),
            f = { name: c, email: d, phone: e, text: g};
        return b.push(f).then(function(a) { 
            $(".sucess").css("display", "block"), 
            $(".sucess-none").css("display", "none") }), !1 })   
}
</script>