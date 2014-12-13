var Tags = new Mongo.Collection("tags");
var TagsContent = new Mongo.Collection("tagsContent");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getTale(dataArray) {
	var storyAbout = dataArray[getRandomInt(0, dataArray.length-1)];
	var stringForParse = storyAbout.description
	var whoMust='save the world';
	if(stringForParse) {
		var a = [];
		console.log(stringForParse);
		var t = $(stringForParse).find('a').each(function() {
			a.push($(this).text());
		});
		whoMust = a[getRandomInt(0,a.length-1)];
		console.log(whoMust);
	}


	return "This is story about \"" + storyAbout.title +
		"\" what couse " + whoMust + " leak for the global sociaty";
}


if (Meteor.isClient) {
	Meteor.startup(function () {
	});

	Template.index.helpers({
		tags: function() {
			var d = Tags.find().fetch();
			if(d && d.length) {
				return d[0].tagsList;
			}
		},
		content: function() {
			var curlit = Session.get('curTag');
			var data = TagsContent.findOne({'tagName':curlit})
			if(data && data.hasOwnProperty('content')) {
				var s = _.map(data.content, function(v) {
					return v
				});
				if(!s.length) return 'This story has not been written yet';
				return getTale(s);
			}
			return 'This story has not been written yet';
		}

	});

	Template.index.events({
		'change input': function (event) {
			var tag = event.target.id;
			Session.set('curTag',tag);
			Meteor.call('getContent',tag,function(err,result){
				console.log(err,result);
				return result;
			});
			return false;
		}
	});
}

if (Meteor.isServer) {
	var baseApiUrl = 'http://knoema.ru/api/1.0/';
	var clientID = '?client_id=Jd50tCfiwGnDEA';

	function formUrl(line) {
		return baseApiUrl + line + clientID;
	}

	Meteor.startup(function () {
		var list = Meteor.call('getTagsList');
		Tags.remove({});
		Tags.insert({tagsList: list});
	});

	Meteor.methods({
		'getTagsList': function() {
			var url = formUrl('frontend/tags/');
			var result = Meteor.http.get(url, {timeout:30000});
			if(result.statusCode==200) {
				var res = {};
				try {
					res = JSON.parse(result.content);
				} catch(e) {
					console.log(e);
				}
				return res;
			}
		},
		'getContent': function(tag) {
			console.log('calling from server ' + tag);
			this.unblock();
			var url = baseApiUrl + 'frontend/tags'+ clientID + '&tag=' + tag;
			var result = Meteor.http.get(url, {timeout:30000});
			if(result.statusCode==200) {
				var res = {};
				try {
					console.log(tag);
					res = JSON.parse(result.content);
					var obj = {'tagName': tag, 'content': res};
					TagsContent.update({'tagName':tag},obj,{upsert:true});
				} catch(e) {
					console.log(e);
				}
				return res;
			}
		}
	});
}
