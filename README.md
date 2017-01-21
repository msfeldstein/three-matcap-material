This is just a package of @spite's excellent Spherical Environment Mapping code, to give your models a nicer lighting.

![Example](https://raw.githubusercontent.com/msfeldstein/three-matcap-material/master/assets/example.jpg)

Read up on Spherical Environment Mapping here: https://www.clicktorelease.com/blog/creating-spherical-environment-mapping-shader

More matcaps pulled from here: http://sespider.deviantart.com/art/163-FREE-MatCaps-258893793

Usage:
```
var MatcapMaterial = require('three-matcap-material')(THREE)
var material = new MatcapMaterial(type)
mesh.material = material
```

Type can be "shinyblack", "skin", "scary", or "softred".  You can also pass in your own lit sphere image.
