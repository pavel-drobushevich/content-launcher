'use strict';

var $ = require('jquery');
var ipc = require('ipc');
var remote = require('remote');
var Tray = remote.require('tray');
var Menu = remote.require('menu');
var path = require('path');
var shell = require('shell');

var categoriesConfig = require('./js/categories.js');

$('.close').on('click', function () {
    ipc.send('close-main-window');
});

$('.i-role-profguide').on('click', function(e) {
  e.preventDefault();
  shell.openExternal('http://profguide.by');
});

var $backButton = $('.i-role-back');
var $categories = $('.i-role-categories');
var $category = $('.i-role-category');
var $categoryContent = $('.i-role-category-content');

var showCategory = function(category) {
  var $items = $('.i-role-items');
  $items.empty();
  var items = categoriesConfig[category].items;
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    $items.append('<li class="category-item"><span class="glyphicon glyphicon-pencil"/>' + item.name +'</li>');
  }
  $categoryContent.show();
}

$category.on('click', function (e) {
  $categories.hide();
  $backButton.show();
  showCategory('test');
});

$backButton.on('click', function (e) {
  $backButton.hide();
  $categoryContent.hide();
  $categories.show();
});
