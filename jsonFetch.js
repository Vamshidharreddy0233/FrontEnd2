

function fetchData()
{
const Data_Url="http://www.json-generator.com/api/json/get/bOJseWhcEi?indent=2";
const promise=fetch(Data_Url);

promise.then(function(resp)
{
    let jsonData = resp.json()
    // .then(data => {
    //     document.write(data[0].name);
    // });
    //console.log(resp, jsonData, jsonData instanceof Array);

    .then(function (jsonData)
    {
var  table='';
var rows=5;
var cols=1;

table=table+'<th style="background-color:black;color:white;padding:12">'+"Sl No."+'</th>';

table=table+'<th style="background-color:black;color:white">'+"Name"+'</th>';

table=table+'<th style="background-color:black;color:white">'+"Email"+'</th>';
table=table+'<th style="background-color:black;color:white">'+"Company"+'</th>';


for(var r=0;r<rows;r++)
{
    table+='<tr >';


    for(var c=0;c<1;c++)
    {

        table=table+'<th>'+r+'</th>';        
    table+='<td style="padding:12">'+ jsonData[r].name+'</td>';

    table+='<td>'+ jsonData[r].email+'</td>';
    table+='<td>'+ jsonData[r].company+'</td>';
    }
    table+='</tr>';



}
document.write('<table  border="2">'+table+'</table>');


    
    });

} 
);

}





