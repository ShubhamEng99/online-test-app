const express=require('express');

const app=express();

app.use(express.static(__dirname + '/dist/online-test-app'));


// all the other apis are supposed to be here 


app.all('*',(req,res)=>{
    res.status(200).sendFile(__dirname + '/dist/online-test-app/indexedDB.html')
}
)

app.listen(process.env.PORT || 8080);

