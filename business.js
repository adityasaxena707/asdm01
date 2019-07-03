var express=require ('express');
var app=express();
var controller=function(req,res){
    console.log('Calling Rest API');
    var AllEntity=[
        {CustomerName:'Alex',Country:'USA',RegOffice:'Portland',AccountInfo:190241,ServiceProvider:'Mark',Status:true},
        {CustomerName:'Heerendra',Country:'INDIA',RegOffice:'Mumbai',AccountInfo:220056,ServiceProvider:'Vinay',Status:true},
        {CustomerName:'Gorge',Country:'IRELAND',RegOffice:'Coursica',AccountInfo:188242,ServiceProvider:'John',Status:true},
        {CustomerName:'Ratan',Country:'AUSTRALIA',RegOffice:'Amstadram',AccountInfo:798770,ServiceProvider:'Ronnie',Status:false},
        {CustomerName:'Suzuka',Country:'JAPAN',RegOffice:'Tokyo',AccountInfo:7700207,ServiceProvider:'Deki-Suki',Status:true},
        {CustomerName:'Marry',Country:'SouthAfrica',RegOffice:'Huston',AccountInfo:907479,ServiceProvider:'Jatin',Status:true},
        {CustomerName:'Bob',Country:'MALASIYA',RegOffice:'Singapore',AccountInfo:932332,ServiceProvider:'Yusus',Status:true}
    ];
    res.send(AllEntity)
};
app.get('/custinfo',controller);
var server=app.listen(2424,function(){
    var host=server.address().address
    var port=server.address().port
    console.log('Server is Running At http://localhost:8080',host,port);
})
