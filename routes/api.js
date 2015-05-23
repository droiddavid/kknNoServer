// initialize our faux database
var picturedata = {
    "slides" : [
        {image: 'precious.jpg',     alternatetext: 'Precious',      imagetext: 'Precious is a great baby.',     thumbnail: 'precious320x150.jpg'},
        {image: 'layingbaby.jpg',   alternatetext: 'Laying Baby',   imagetext: 'Laying Baby is a great baby.',  thumbnail: 'layingbaby320x150.jpg'},
        {image: 'heaven.jpg',       alternatetext: 'Heaven',        imagetext: 'Heaven is a great baby.',       thumbnail: 'heaven320x150.jpg'},
        {image: 'rochelle.jpg',     alternatetext: 'Rochelle',      imagetext: 'Rochelle is a great baby.',     thumbnail: 'rochelle320x150.jpg'},
        {image: 'dana.jpg',         alternatetext: 'Dana',          imagetext: 'Dana is a great baby.',         thumbnail: 'dana320x150.jpg'},
        {image: 'cindy.jpg',        alternatetext: 'Cindy',         imagetext: 'Cindy is a great baby.',        thumbnail: 'cindy320x150.jpg'},
        {image: 'gracy.jpg',        alternatetext: 'Gracy',         imagetext: 'Gracy is a great baby.',        thumbnail: 'gracy320x150.jpg'},
        {image: 'brenda.jpg',       alternatetext: 'Brenda',        imagetext: 'Brenda is a great baby.',       thumbnail: 'brenda320x150.jpg'},
        {image: 'tracy.jpg',        alternatetext: 'Tracy',         imagetext: 'Tracy is a great baby.',        thumbnail: 'tracy320x150.jpg'},
        {image: 'barry.jpg',        alternatetext: 'Barry',         imagetext: 'Barry is a great baby.',        thumbnail: 'barry320x150.jpg'},
        {image: 'alex.jpg',         alternatetext: 'Alex',          imagetext: 'Alex is a great baby.',         thumbnail: 'alex320x150.jpg'}
    ]
};


exports.slides = function(request, response) {
    var slides = [];
    picturedata.slides.forEach(function(slide, i){
        slides.push(
            id: i,
            title: slide.image,
            imagetext: slide.imagetext
        );
    });
    response.json({
        slides: slides
    });
}; //exports.slides


exports.slide = function(request, response){
    var id = request.params.id;
    if (id >= 0 && id < picturedata.slides.length) {
        response.json({
            post: picturedata.slides[id]
        });
    } else {
        response.json(false);
    }
};


var data = {"posts": [{"title": "Lorem ipsum", "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},{"title": "Sed egestas","text": "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus."}]};


exports.posts = function (req, res) {
    var posts = [];
    
    data.posts.forEach(function (post, i) {
        posts.push({
            id: i,
            title: post.title,
            text: post.text.substr(0, 50) + '...'
        });
    });
    
    res.json({posts: posts});
};

exports.post = function (req, res) {
    var id = req.params.id;
    
    if (id >= 0 && id < data.posts.length) {
        res.json({
            post: data.posts[id]
        });
    } else {
        res.json(false);
    }

};