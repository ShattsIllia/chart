"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = void 0;

var _AlvelComp = require("./components/AlvelComp");

var _IlliaComp = require("./components/IlliaComp");

var _Leyout = require("./components/Leyout");

var _Users = require("./components/Users");

var routes = [{
  name: 'alex',
  path: '/alex',
  exact: false,
  component: _AlvelComp.AlVelComp,
  layout: _Leyout.Layout,
  config: {
    withHeader: false
  }
}, {
  name: 'illia',
  path: '/illia',
  exact: false,
  component: _IlliaComp.IlliaComp,
  layout: _Leyout.Layout,
  config: {
    withHeader: false
  }
}, {
  name: 'users',
  path: '/users',
  exact: false,
  component: _Users.UsersPage,
  layout: _Leyout.Layout,
  config: {
    withHeader: false
  }
}];
exports.routes = routes;