var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
        {
            name: "Cloud's Rest",
            image: "http://weburbanist.com/wp-content/uploads/2014/02/mountain-cabin-by-cliff-468x468.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus libero non tincidunt faucibus. Sed tincidunt, leo quis maximus malesuada, mi ex imperdiet lectus, a varius nisi nibh ac dui. Ut rhoncus tellus at ex tincidunt, in blandit elit blandit. Etiam pretium diam quis risus viverra suscipit vitae vitae diam. Aenean convallis odio et diam gravida lobortis. Nulla pulvinar aliquet ligula a cursus. Maecenas auctor a nisl sed luctus. Sed sed purus erat. "
        },
        {
            name: "Desert Mesa",
            image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcToTA23E2ke0vB-dT_dtRuozbss0t5EFdHWc0gLCu2_nOmJ9062lw",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus libero non tincidunt faucibus. Sed tincidunt, leo quis maximus malesuada, mi ex imperdiet lectus, a varius nisi nibh ac dui. Ut rhoncus tellus at ex tincidunt, in blandit elit blandit. Etiam pretium diam quis risus viverra suscipit vitae vitae diam. Aenean convallis odio et diam gravida lobortis. Nulla pulvinar aliquet ligula a cursus. Maecenas auctor a nisl sed luctus. Sed sed purus erat. "
        },
        {
            name: "Canyon Floor",
            image: "http://www.camping-tent-reviews.com/images/my-eureka-copper-canyon-1610-tent-review-perfect-family-camping-tent-21527066.jpg",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maximus libero non tincidunt faucibus. Sed tincidunt, leo quis maximus malesuada, mi ex imperdiet lectus, a varius nisi nibh ac dui. Ut rhoncus tellus at ex tincidunt, in blandit elit blandit. Etiam pretium diam quis risus viverra suscipit vitae vitae diam. Aenean convallis odio et diam gravida lobortis. Nulla pulvinar aliquet ligula a cursus. Maecenas auctor a nisl sed luctus. Sed sed purus erat. "
        }
    ]

function seedDB(){
    // remove all campgrounds
    Campground.remove({}, function(err) {
        if(err){
            console.log(err);
        }
        console.log("removed campground!");
        //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("added a campground")
                    // create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    });
}

module.exports = seedDB;