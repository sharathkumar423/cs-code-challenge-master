var baseUrl = 'https://5dc588200bbd050014fb8ae1.mockapi.io/assessment';

fetch(baseUrl).then((res) => {
    return res.json();
}).then((data) => {
    printData(data);
});

var source = $("#template").html();
var template = Handlebars.compile(source);

function printData(datas){
    for (var i = 0; i < datas.length; i++) {
      var data = datas[i];
        var dataStamp = {
            id: data.id,
            createdAt: data.createdAt,
            name: data.name,
            avatar: data.avatar
        }
        var template1 = template(dataStamp)
        $('.append-here').append(template1);
    }
}

// Show the details of Member's from assessment
showDetails = (id) => {
    
    var elementId = document.getElementById(`item-id-${id}`);
    console.log(elementId);
    elementId.style.display = elementId.style.display === 'none' ? '' : 'none';
}

// Remove Member's from assessment
removeId = (id) => {

    fetch(`${baseUrl}/${id}`, {method: 'DELETE'});
    setTimeout(function(){
      window.location.reload();
    }, 5000);
    

}
