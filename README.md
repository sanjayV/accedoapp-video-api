# Accedo VOD API's

Accedo VOD API's use in [Accedo VOD app](https://github.com/sanjayV/accedoapp-video-fe) for add/get User Video view history and add/get Video watch later list.

#### Live Demo
[Accedo VOD API](https://accedo-video-app-api.herokuapp.com/)

Accedo VOD API's server provies following API's

#### For Add History

```
URL: https://accedo-video-app-api.herokuapp.com/addHistory

Method Type: Post

Post Data Type: JSON

Post Data Example: {
	"title" : "test",
	"user_email": "skumarverma45@gmail.com",
	"image_url": "http://lorempixel.com/214/317/?t=1",
  "video_object": {
        "url": "http://d2bqeap5aduv6p.cloudfront.net/project_coderush_640x360_521kbs_56min.mp4",
        "format": "mp4",
        "width": 640,
        "height": 360,
        "language": "en",
        "duration": 3600000,
        "geoLock": false,
        "id": "vid_103"
    }
}
```

#### For Get History

```
URL: https://accedo-video-app-api.herokuapp.com/getHistory/

Method Type: Get

Get Data Example: https://accedo-video-app-api.herokuapp.com/getHistory/<userEmalId>
```

#### For Add Video Watch Later
```
URL: https://accedo-video-app-api.herokuapp.com/addlaterVideo

Method Type: Post

Post Data Type: JSON

Post Data Example: {
	"title" : "test",
	"user_email": "skumarverma45@gmail.com",
	"image_url": "http://lorempixel.com/214/317/?t=1",
  "video_object": {
        "url": "http://d2bqeap5aduv6p.cloudfront.net/project_coderush_640x360_521kbs_56min.mp4",
        "format": "mp4",
        "width": 640,
        "height": 360,
        "language": "en",
        "duration": 3600000,
        "geoLock": false,
        "id": "vid_103"
    }
}
```

#### For Get Video Watch Later
```
URL: https://accedo-video-app-api.herokuapp.com/laterVideo/

Method Type: Get

Get Data Example: https://accedo-video-app-api.herokuapp.com/laterVideo/<userEmalId>
```

### Prerequisites and dependency for local setup

If you want install these Api's server on local machine then need to add following dependencies

#### Prerequisites
You need to install latest NPM and Node on local machine if not install 

For more information about How to install NPM and Node pleaes check this link:
[NPM and Node Install](http://blog.teamtreehouse.com/install-node-js-npm-windows)

Install Grunt and Bower if not already install
```
npm install -g grunt-cli
```

```
npm install -g bower
```

#### Dependency

I am using MongoDB for store Data so MongoDB should be installed on local machine.
You can find about how to install MongoDB by following link
[Install MongoDB](https://docs.mongodb.com/manual/installation/)

After install MongoDB, open local connection on MongoDB and create DB with name `accedo` on Post '27017'.

If your local DB name or Connection url different then update it in Accedo API app/config/config.js for `local` environment.

### Run

To Run project you need to get git clonse of project OR download ZIP format of project.

Move to Accedo API project folder using command prompt and run following command for install Grunt and Bower packages 
```
npm install
```
These command will install all dependencies of project in two folder `node_modules`

I am using Restify framework for create API's so [Node Restify](https://www.npmjs.com/package/restify) module will also install as dependency

After install all dependencies, need to build projects by following command

```
node index.js
```
This command will run Accedo Node API server. 
