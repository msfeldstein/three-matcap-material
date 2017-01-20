This is just a package of @spite's excellent Spherical Environment Mapping code, to give your models a nicer lighting.

Read up on Spherical Environment Mapping here: https://www.clicktorelease.com/blog/creating-spherical-environment-mapping-shader

Usage:

var MatcapMaterial = require('three-matcap-material')(THREE)
var material = new MatcapMaterial(type)
mesh.material = material

Type can be "shinyblack", "skin", or "softred".  You can also pass in your own lit sphere image.