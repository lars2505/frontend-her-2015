            // function to show or hide input type field when clicked on radio button
function showHide(hoi) {
   var t1 = document.getElementById('project'),
       t2 = document.getElementById('stage');

   switch (hoi) {
    case 'telephone1':
        project.style.display = 'block';
        stage.style.display = 'none';

         break;
    case 'telephone2':
        project.style.display = 'none';
        stage.style.display = 'block';
   }
}