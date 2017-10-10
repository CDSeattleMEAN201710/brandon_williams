const express = require('express')
const app = express();
const path = require('path');
const PORT = 8000;
const mongoose = require('mongoose');
const bodyParser = require("body-parser")
mongoose.Promise = global.Promise

//Use bodyparser, set path directory for views, use ejs view engine
app.use(bodyParser.urlencoded({extended: false}));
app.set('views',path.join(__dirname, './views'));
app.set('view engine', 'ejs')

//set up server to listen to PORT
const server = app.listen(PORT, function(){
  console.log("Listening to Port", PORT)
})

//Connect mongoose to MONGODB, make sure mongodb is running
mongoose.connect("mongodb://localhost/message_board_db")

// define Schema variable
var Schema = mongoose.Schema;
// define and set Post Schema
var PostSchema = new mongoose.Schema({
 user: {type: String, required: true, minlength:4 },
 message: {type: String, required: true },
 comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true });
var Posts = mongoose.model('Post', PostSchema);

// define and set Comment Schema
var CommentSchema = new mongoose.Schema({
  user: {type: String, required: true, minlength:4 },
 _post: {type: Schema.Types.ObjectId, ref: 'Post'},
 text: {type: String, required: true }
}, {timestamps: true });
var Comments= mongoose.model('Comment', CommentSchema);


//handle for root route
app.get('/', function(request, response){
  Posts.find().sort({createdAt: -1}).populate('comments').exec(function(error,posts){
    if(error){
      console.log("Could not query Posts")
    }else{
      response.render("index",{'posts': posts})
    }
  })
});


//Handle to process and create Posts
app.post('/process_post', function(request, response){
  var post = new Posts(request.body);
  post.save(function(error){
    if(error){
      console.log('something happened', error)
    }else{
      console.log(post)
      response.redirect('/')
    }
  })
});

//Handle to process and create Comments
app.post('/process_comment/:id', function(request, response){
  Posts.findOne({_id: request.params.id}, function(error,post){
    if(error){
      console.log("Cannot create comment")
    }else{
      var comment = new Comments(request.body)
      comment._post = post.id;
      post.comments.push(comment);
      comment.save(function(err){
        post.save(function(err){
          if(err){
            console.log("couldnt push")
          }else{
            response.redirect('/')
          }
        })
      })
    }
  })
});
