class PostModel {
    constructor(posts) {
        this._photoPosts = posts;
    }

    static _isIntersect(postTags, configTags) {
        let result = false;
        postTags.forEach(tag1 => configTags.forEach((tag2) => {
            if (tag1 === tag2) {
                result = true;
            }
        }));
        return result;
    }

    addAll(posts) {
        const notValid = [];
        posts.forEach((post) => {
            if (this.addPhotoPost(post) === false) {
                notValid.push(post);
            }
        });
        return notValid;
    }

    getPhotoPosts(skip = 0, count = 10, config = PostModel._DEFAULT_FILTER_CONFIG) {
        function filtrate(posts) {
            return posts
                .filter(post => post.createdAt.getTime() >= config.dateFrom.getTime()
                    && post.createdAt.getTime() <= config.dateTo.getTime()
                    && (post.author === config.authorName || config.authorName === '')
                    && (PostModel._isIntersect(post.hashtags, config.hashtags)
                        || config.hashtags.length === 0));
        }
        function sort(posts) {
            return posts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
        }
        const filtratedPosts = sort(filtrate(this._photoPosts));
        const result = [];
        let number = 0;
        for (let i = skip; number < count && i < filtratedPosts.length; i += 1) {
            result.push(filtratedPosts[i]);
            number += 1;
        }
        return result;
    }

    getPhotoPost(id) {
        const result = this._photoPosts.find(post => post.id === id);
        if (result !== undefined) {
            return result;
        }
        return result;
    }

    static _validateChangeableFields(post) {
        return !(!Object.prototype.hasOwnProperty.call(post, 'description')
            || post.description.length >= 200
            || typeof post.description !== 'string'
            || !Object.prototype.hasOwnProperty.call(post, 'photoLink')
            || typeof post.photoLink !== 'string'
            || post.photoLink === ''
            || !Object.prototype.hasOwnProperty.call(post, 'hashtags'));
    }

    _validateUnChangeableFields(post) {
        return !(!Object.prototype.hasOwnProperty.call(post, 'id')
            || typeof post.id !== 'string'
            || this.getPhotoPost(post.id)
            || !Object.prototype.hasOwnProperty.call(post, 'createdAt')
            || !Object.prototype.hasOwnProperty.call(post, 'author')
            || typeof post.author !== 'string'
            || post.author === ''
            || !Object.prototype.hasOwnProperty.call(post, 'likes'));
    }

    _validatePhotoPost(post) {
        return !(this._validateUnChangeableFields(post) === false
            || PostModel._validateChangeableFields(post) === false);
    }

    addPhotoPost(post) {
        if (this._validatePhotoPost(post) === true) {
            this._photoPosts.push(post);
            return true;
        }
        return false;
    }

    removePhotoPost(id) {
        const index = this._photoPosts.findIndex(post => post.id === id);
        if (index !== -1) {
            this._photoPosts.splice(index, 1);
            return true;
        }
        return false;
    }

    editPhotoPost(id, edits) {
        const post = this.getPhotoPost(id);
        if (post !== undefined) {
            const postCopy = Object.assign(post);
            const fields = Object.keys(edits);
            fields.forEach((field) => {
                if (field !== 'id' && field !== 'author' && field !== 'createdAt' && field !== 'likes') {
                    postCopy[field] = edits[field];
                }
            });
            if (PostModel._validateChangeableFields(postCopy) === true) {
                this.removePhotoPost(id);
                this.addPhotoPost(postCopy);
                return true;
            }
            return false;
        }
        return false;
    }
}
PostModel._DEFAULT_FILTER_CONFIG = {
    dateFrom: new Date(-8640000000000000),
    dateTo: new Date(8640000000000000),
    authorName: '',
    hashtags: [],
};

const validPost = {
    id: '29',
    description: 'cool',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Main User',
    photoLink: 'picture/sim',
    likes: ["user1", "user2"],
    hashtags: ['mult'],
};
const notValidPost = {
    id: '2',
    description: 'bike',
    createdAt: new Date('2018-02-23T23:00:00'),
    author: 'Main User',
    photoLink: 'img/bike2',
    likes: ["user1", "user2"],
    hashtags: ['mybike'],
};
const configDate = {
    dateFrom: new Date('2018-02-19T23:00:00'),
    dateTo: new Date('2018-02-22T23:00:00'),
    authorName: '',
    hashtags: [],
};
const configAuthor = {
    dateFrom: new Date(-8640000000000000),
    dateTo: new Date(8640000000000000),
    authorName: 'Main User',
    hashtags: [],
};
const configAuthorHashtags = {
    dateFrom: new Date(-8640000000000000),
    dateTo: new Date(8640000000000000),
    authorName: 'Main User',
    hashtags: ['hashtage'],
};
const validPostEdit = {
    description: 'Bike',
    photoLink: 'img/bike',
    hashtags: ['changedHashtag'],
};
const notValidEditDesc = {
    description: 'bbb',
    photoLink: 'img/bike',
};

const allAdd = [
    {
        id: '41',
        description: 'My cat',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: "Main User",
        photoLink: 'picture/cat',
        likes: ["user1", "user2"],
        hashtags: ['cat'],
    },
    {
        id: '42',
        description: 'king',
        createdAt: new Date('2018-02-23T23:00:00'),
        author: "Main User",
        photoLink: 'picture/lion',
        likes: ["user1", "user2"],
        hashtags: ['bigcat'],
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
];

const posts = [
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

function test() {
    const model = new PostModel(posts);
    model.addPhotoPost(validPost);
    model.addPhotoPost(notValidPost);
    model.removePhotoPost('29');
    model.removePhotoPost('30');
    model.getPhotoPost('2');
    model.getPhotoPost('30');
    model.getPhotoPosts();
    model.getPhotoPosts(0, 5);
    model.getPhotoPosts(4, 5);
    model.getPhotoPosts(1, 7, configDate);
    model.getPhotoPosts(1, 7, configAuthor);
    model.getPhotoPosts(1, 7, configAuthorHashtags);
    model.editPhotoPost('2', validPostEdit);
    model.editPhotoPost('2', notValidEditDesc);
    model.addAll(allAdd);
}

test();