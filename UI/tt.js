var posts = (function () {
    var module = {};
    var photoPosts = [
        {
            id: "1",
            description: "Algebra",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "Main User",
            photoLink: 'img/algebra',
            likes: ["user1", "user2"],
            hashtags: ["science", "math"],
        },
        {
            id: "2",
            description: "Bike",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "Main User",
            photoLink: 'img/bike',
            likes: ["user1", "user2"],
            hashtags: ["mountain", "bike"],
        },
        {
            id: "3",
            description: "bird",
            createdAt: new Date("2018-02-20T23:00:00"),
            author: "Main User",
            photoLink: 'img/bird',
            likes: ["user1", "user2"],
            hashtags: ["animal", "like"],
        },
        {
            id: "4",
            description: "BSU",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "Main User",
            photoLink: 'img/bsu',
            likes: ["user1", "user2"],
            hashtags: ["university", "like", "famcs"],
        },
        {
            id: "5",
            description: "Car",
            createdAt: new Date("2018-02-21T23:00:00"),
            author: "Main User",
            photoLink: 'img/car',
            likes: ["user1", "user2"],
            hashtags: ["sport", "cool"],
        },
        {
            id: "6",
            description: "Cat",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "Main User",
            photoLink: 'img/cat',
            likes: ["user1", "user2"],
            hashtags: ["cat", "like"],
        },
        {
            id: "7",
            description: "Deadpool",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "Main User",
            photoLink: 'img/Deadpool',
            likes: ["user1", "user2"],
            hashtags: ["film", "marvel"],
        },
        {
            id: "8",
            description: "Earth",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "Main User",
            photoLink: 'img/earth',
            likes: ["user1", "user2"],
            hashtags: ["space", "planet", "cool"],
        },
        {
            id: "9",
            description: "Elon Musk",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "Main User",
            photoLink: 'img/Elon',
            likes: ["user1", "user2"],
            hashtags: ["space", "science"],
        },
        {
            id: "10",
            description: "Fish",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "Main User",
            photoLink: 'img/fish',
            likes: ["user1", "user2"],
            hashtags: ["sea", "like"],
        },
        {
            id: "11",
            description: "Fishing",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "Main User",
            photoLink: 'img/fishing',
            likes: ["user1", "user2"],
            hashtags: ["relax", "nature"],
        },
        {
            id: "12",
            description: "Ukraine - Portugal.",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "Main User",
            photoLink: 'img/football',
            likes: ["user1", "user2"],
            hashtags: ["football", "Ukraine","sport"],
        },
        {
            id: "13",
            description: "Friends",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "Main User",
            photoLink: 'img/friends',
            likes: ["user1", "user2"],
            hashtags: ["bestfriends", "cool"],
        },
        {
            id: "14",
            description: "Fruits",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "Main User",
            photoLink: 'img/fruit',
            likes: ["user1", "user2"],
            hashtags: ["food", "fruit"],
        },
        {
            id: "15",
            description: "Pistol",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "Main User",
            photoLink: 'img/gun',
            likes: ["user1", "user2"],
            hashtags: ["gun", "bullet"],
        },
        {
            id: "16",
            description: "Kyiv, Ukraine",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "Main User",
            photoLink: 'img/Kyiv',
            likes: ["user1", "user2"],
            hashtags: ["Ukraine", "Kyiv"],
        },
        {
            id: "17",
            description: "cow gives milk",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "Main User",
            photoLink: 'img/milk',
            likes: ["user1", "user2"],
            hashtags: ["cow", "milk"],
        },
        {
            id: "18",
            description: "Minsk",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "Main User",
            photoLink: 'img/Minsk',
            likes: ["user1", "user2"],
            hashtags: ["Belarus", "Minsk"],
        },
        {
            id: "19",
            description: "monkey",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "Main User",
            photoLink: 'img/mon',
            likes: ["user1", "user2"],
            hashtags: ["annimal", "like"],
        },
        {
            id: "20",
            description: "Moon",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "Main User",
            photoLink: 'img/moon',
            likes: ["user1", "user2"],
            hashtags: ["moon", "city"],
        },
        {
            id: "21",
            description: "Nature",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "Main User",
            photoLink: 'img/nature',
            likes: ["user1", "user2"],
            hashtags: ["cool", "like"],
        },
        {
            id: "22",
            description: "plane",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "Main User",
            photoLink: 'img/plane',
            likes: ["user1", "user2"],
            hashtags: ["plane", "like"],
        },
        {
            id: "23",
            description: "robot Sophia",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "Main User",
            photoLink: 'img/robots',
            likes: ["user1", "user2"],
            hashtags: ["robot", "science"],
        },
        {
            id: "24",
            description: "Japan",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "Main User",
            photoLink: 'img/sak',
            likes: ["user1", "user2"],
            hashtags: ["nature", "cool"],
        },
        {
            id: "25",
            description: "My work",
            createdAt: new Date("2018-02-23T23:00:00"),
            author: "Main User",
            photoLink: 'img/work',
            likes: ["user1", "user2"],
            hashtags: ["work", "like"],
        },
    ];


    var defaultFilterConfig = {
        dateFrom: new Date(-8640000000000000),
        dateTo: new Date(8640000000000000),
        authorName: "",
        hashtags: [],
    };
    function isUnique(post) {
        for(var i = 0 ; i < photoPosts.length; i++) {
            if (photoPosts[i].id == post.id) {
                return false;
            }
        }
        return true;
    }
    function isIntersect(postTags, configTags) {
        for (var i = 0; i < postTags.length; i++) {
            for (var j = 0; j < configTags.length; j++) {
                if (postTags[i] == configTags[j]) {
                    return true;
                }
            }
        }
        return false;
    }

    module.getPhotoPosts = function (skip = 0, count = 10, filterConfig = defaultFilterConfig) {
        var filtratedPosts = photoPosts.filter(post =>
            post.createdAt.valueOf() >= filterConfig.dateFrom.valueOf() &&
            post.createdAt.valueOf() <= filterConfig.dateTo.valueOf() &&
            (post.author == filterConfig.authorName || filterConfig.authorName == "") &&
            (isIntersect(post.hashtags, filterConfig.hashtags) || filterConfig.hashtags.length == 0)
    ).sort(function (a, b) {
            return b.createdAt.valueOf()- a.createdAt.valueOf();
        });
        var result = [];
        var number = 0;
        for(var i = skip; number < count && i < filtratedPosts.length; i++) {
            result.push(filtratedPosts[i]);
            number++;
        }
        console.log("skip: " + skip + "; count: " + count + "; filterConfig:");
        console.log(filterConfig);
        console.log("Result:");
        console.log(result);
        return result;
    };
    module.getPhotoPost = function (id) {
        var result;
        photoPosts.forEach(function (item) {
            if(item.id == id){
                console.log("Post with id " + id + " was found:");
                console.log(item);
                result = item;
            }
        });
        if (result != undefined) {
            return result;
        }
        console.log("Post with id " + id + " not found.");
    };
    module.validatePhotoPost = function (post) {
        if (!post.hasOwnProperty("id") || typeof post.id != "string" || !isUnique(post) ||
            !post.hasOwnProperty("description") || post.description.length >= 200 || typeof post.description != "string" ||
            !post.hasOwnProperty("createdAt") ||
            !post.hasOwnProperty("author") || typeof post.author != "string" || post.author == "" ||
            !post.hasOwnProperty("photoLink") || typeof post.photoLink != "string" || post.author == "" ||
            !post.hasOwnProperty("hashtags") ||
            !post.hasOwnProperty("likes")) {
            console.log("Post with id " + post.id + " not valid.");
            return false;
        }
        else {
            console.log("Post with id " + post.id + " valid.");
            return true;
        }
    };

    module.addPhotoPost = function (post) {
        if (module.validatePhotoPost(post) == true) {
            photoPosts.push(post);
            console.log("Post with id " + post.id + " added.");
            return true;
        }
        else {
            console.log("Post with id " + post.id + " not added.");
            return false;
        }
    };

    module.removePhotoPost = function (id) {
        var index = -1;
        photoPosts.forEach(function (item, i) {
            if (item.id == id) {
                index = i;
            }
        });
        if (index != -1) {
            photoPosts.splice(index, 1);
            console.log("Post with id " + id + " deleted.");
            return true;
        }
        else {
            console.log("Post with id " + id + " not found.");
            return false;
        }
    };

    module.editPhotoPost = function (id, edits) {
        var post = module.getPhotoPost(id);
        var savePost = Object.assign({}, post);
        for (var field in edits) {
            if (field != "id" && field != "author" && field != "createdAt" && field != "likes") {
                post[field] = edits[field];
            }
        }
        module.removePhotoPost(post.id);
        if (module.validatePhotoPost(post) == true) {
            module.addPhotoPost(post);
            console.log("Post successfully changed.");
            return true;
        }
        else {
            module.addPhotoPost(savePost);
            console.log("Post not changed.");
            return false;
        }
    };
    return module;
})();

let ttt = {
    id: "1",
    description: "Algebra",
    createdAt: new Date("2018-02-23T23:00:00"),
    author: "Main User",
    photoLink: 'img/algebra',
    likes: ["user1", "user2"],
    hashtags: ["science", "math"],
};

console.log("////////Add and validation////////");
posts.addPhotoPost(ttt);
console.log("////////Removing////////");
posts.removePhotoPost("29");
posts.removePhotoPost("30");
console.log("////////Get post////////");
posts.getPhotoPost("2");
posts.getPhotoPost("30");
console.log("////////Get posts////////");
posts.getPhotoPosts();
posts.getPhotoPosts(0,5);
posts.getPhotoPosts(4,5);
console.log("////////Edit post////////");
posts.editPhotoPost("2",ttt);
