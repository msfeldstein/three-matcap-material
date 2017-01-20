const vs = `
varying vec2 vN;

void main() {

    vec4 p = vec4( position, 1. );

    vec3 e = normalize( vec3( modelViewMatrix * p ) );
    vec3 n = normalize( normalMatrix * normal );

    vec3 r = reflect( e, n );
    float m = 2. * sqrt( 
        pow( r.x, 2. ) + 
        pow( r.y, 2. ) + 
        pow( r.z + 1., 2. ) 
    );
    vN = r.xy / m + .5;

    gl_Position = projectionMatrix * modelViewMatrix * p;

}
`

const fs = `
uniform sampler2D tMatCap;

varying vec2 vN;

void main() {
    
    vec3 base = texture2D( tMatCap, vN ).rgb;
    gl_FragColor = vec4( base, 1. );

}
`

module.exports = function(THREE) {
  return function(matcapImage) {
    if (matcapImage == null) {
      matcapImage = '/node_modules/three-matcap-material/assets/softred.jpg'
    } else if (matcapImage.indexOf("/") == -1) {
      matcapImage = `/node_modules/three-matcap-material/assets/${matcapImage}.jpg`
    }
    
    return new THREE.ShaderMaterial({
      uniforms: { 
          tMatCap: { 
              type: 't', 
              value: THREE.ImageUtils.loadTexture( matcapImage ) 
          },
      },
      vertexShader: vs,
      fragmentShader: fs,
      shading: THREE.SmoothShading
    })
  }
}