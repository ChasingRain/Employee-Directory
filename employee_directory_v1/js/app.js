
var employees = "";
var arrayId;
var searchQuery = '';
$.ajax({
  url: 'https://randomuser.me/api/?results=12&nat=us',
  dataType: 'json',
  success: function(data) {
    function buildList(){
      employees = data;
      var employeeList = "<ul>";
      $.each(data.results, function(i, employee){
        employeeList += '<li id="' + i + '" class="grid-25 tablet-grid-50 listtext">'
        employeeList += '<img src=' + employee.picture.medium + '>'
        employeeList += '<h2 class="capitalize">';
        employeeList += employee.name.first + " ";
        employeeList += employee.name.last + '</h2>';
        employeeList += '<p>' + employee.email + '</p>';
        employeeList += '<p class="capitalize">' +employee.location.city + '</p></li>';
      })//end each loop
      employeeList += "</ul>"
      $('#directory').html(employeeList);
      $('input').keypress(function(e) {
        if(e.which == 13) {
          var searchQuery = $('input').val();
          console.log(searchQuery.toLowerCase());
          employeeList = '<ul width="100%">';
          $.each(employees.results, function(i, employee){
            if(searchQuery.toLowerCase() === employee.name.first) {
            employeeList += '<li id="' + i + '" class="grid-25 tablet-grid-50 listtext">'
            employeeList += '<img src=' + employee.picture.medium + '>'
            employeeList += '<h2 class="capitalize">';
            employeeList += employee.name.first + " ";
            employeeList += employee.name.last + '</h2>';
            employeeList += '<p>' + employee.email + '</p>';
            employeeList += '<p class="capitalize">' +employee.location.city + '</p></li>';
            }
          })//end each loop
          employeeList += "</ul>"
          $('#directory').html(employeeList);
        }
      });
      $('li').click(function() {
        arrayId = this.id
        var employee = employees.results[arrayId]
        var infoList = "";
        infoList += '<span class="modalcontent"><img src=' + employee.picture.large + '><br>'
        infoList += "<h2 class='capitalize'>" + employee.name.first + " ";
        infoList += employee.name.last + "</h2><br><p class='capitalize'>";
        infoList += employee.email + "<br>";
        infoList += employee.location.city + "</p><hr><p class='capitalize'>";
        infoList += employee.login.username + "<br>";
        infoList += employee.cell + "<br>";
        infoList += employee.location.street + "<br>";
        infoList += employee.location.city + ", ";
        infoList += employee.location.state + " ";
        infoList += employee.location.postcode + "<br>";
        infoList += "Birthday: " + employee.dob + "</p>";
        $('#modalcontent').html(infoList)
        $('.modal').modal();
        $('.previous').removeClass("hide");
        $('.next').removeClass("hide");
        if(arrayId <= 0){
          $('.previous').addClass('hide');
        }
        if(arrayId >= $('li').length - 1){
          $('.next').addClass('hide');
        }
      })
      $('.previous').click(function() {
        arrayId -= 1;
        var employee = employees.results[arrayId];
        var infoList = "";
        infoList += '<span class="modalcontent"><img src=' + employee.picture.large + '><br>'
        infoList += "<h2 class='capitalize'>" + employee.name.first + " ";
        infoList += employee.name.last + "</h2><br><p class='capitalize'>";
        infoList += employee.email + "<br>";
        infoList += employee.location.city + "</p><hr><p class='capitalize'>";
        infoList += employee.login.username + "<br>";
        infoList += employee.cell + "<br>";
        infoList += employee.location.street + "<br>";
        infoList += employee.location.city + ", ";
        infoList += employee.location.state + " ";
        infoList += employee.location.postcode + "<br>";
        infoList += "Birthday: " + employee.dob + "</p>";
        $('#modalcontent').html(infoList)
        $('.modal').modal();
        $('.previous').removeClass("hide");
        $('.next').removeClass("hide");
        if(arrayId <= 0){
          $('.previous').addClass('hide');
        }
        if(arrayId >= $('li').length - 1){
          $('.next').addClass('hide');
        }
      });
      $('.next').click(function() {
        arrayId += 1;
        var employee = employees.results[arrayId]
        var infoList = "";
        infoList += '<span class="modalcontent"><img src=' + employee.picture.large + '><br>'
        infoList += "<h2 class='capitalize'>" + employee.name.first + " ";
        infoList += employee.name.last + "</h2><br><p class='capitalize'>";
        infoList += employee.email + "<br>";
        infoList += employee.location.city + "</p><hr><p class='capitalize'>";
        infoList += employee.login.username + "<br>";
        infoList += employee.cell + "<br>";
        infoList += employee.location.street + "<br>";
        infoList += employee.location.city + ", ";
        infoList += employee.location.state + " ";
        infoList += employee.location.postcode + "<br>";
        infoList += "Birthday: " + employee.dob + "</p>";
        $('#modalcontent').html(infoList)
        $('.modal').modal();
        $('.previous').removeClass("hide");
        $('.next').removeClass("hide");
        if(arrayId <= 0){
          $('.previous').addClass('hide');
        }
        if(arrayId >= $('li').length - 1){
          $('.next').addClass('hide');
        }
      });
      $('li').mouseover(function() {
        $(this).addClass('lihover');
      })
      $('li').mouseout(function() {
        $(this).removeClass('lihover');
      })
    }
    buildList();
    $('#reset').click(function() {
      buildList()
    })
  }
});//end AJAX call
