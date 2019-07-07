<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\zccguagua.github.io\assets\css\APlayer.min.css"><script src="\zccguagua.github.io\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script>/**
 * jQuery Ripples plugin v0.6.2 / https://github.com/sirxemic/jquery.ripples
 * MIT License
 * @author sirxemic / https://sirxemic.com/
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],t):t(e.$)}(this,function(e){"use strict";function t(e){return"%"==e[e.length-1]}function r(e){var t=e.split(" ");if(1!==t.length)return t.map(function(t){switch(e){case"center":return"50%";case"top":case"left":return"0";case"right":case"bottom":return"100%";default:return t}});switch(e){case"center":return["50%","50%"];case"top":return["50%","0"];case"bottom":return["50%","100%"];case"left":return["0","50%"];case"right":return["100%","50%"];default:return[e,"50%"]}}function i(e,t,r){function i(e,t){var r=s.createShader(e);if(s.shaderSource(r,t),s.compileShader(r),!s.getShaderParameter(r,s.COMPILE_STATUS))throw new Error("compile error: "+s.getShaderInfoLog(r));return r}var o={};if(o.id=s.createProgram(),s.attachShader(o.id,i(s.VERTEX_SHADER,e)),s.attachShader(o.id,i(s.FRAGMENT_SHADER,t)),s.linkProgram(o.id),!s.getProgramParameter(o.id,s.LINK_STATUS))throw new Error("link error: "+s.getProgramInfoLog(o.id));o.uniforms={},o.locations={},s.useProgram(o.id),s.enableVertexAttribArray(0);for(var n,a,u=/uniform (\w+) (\w+)/g,h=e+t;null!=(n=u.exec(h));)a=n[2],o.locations[a]=s.getUniformLocation(o.id,a);return o}function o(e,t){s.activeTexture(s.TEXTURE0+(t||0)),s.bindTexture(s.TEXTURE_2D,e)}function n(e){var t=/url\(["']?([^"']*)["']?\)/.exec(e);return null==t?null:t[1]}function a(e){return e.match(/^data:/)}var s,u=(e=e&&"default"in e?e.default:e)(window),h=function(){function e(e,t,i){var o="OES_texture_"+e,n=o+"_linear",a=n in r,s=[o];return a&&s.push(n),{type:t,arrayType:i,linearSupport:a,extensions:s}}var t=document.createElement("canvas");if(!(s=t.getContext("webgl")||t.getContext("experimental-webgl")))return null;var r={};if(["OES_texture_float","OES_texture_half_float","OES_texture_float_linear","OES_texture_half_float_linear"].forEach(function(e){var t=s.getExtension(e);t&&(r[e]=t)}),!r.OES_texture_float)return null;var i=[];i.push(e("float",s.FLOAT,Float32Array)),r.OES_texture_half_float&&i.push(e("half_float",r.OES_texture_half_float.HALF_FLOAT_OES,null));var o=s.createTexture(),n=s.createFramebuffer();s.bindFramebuffer(s.FRAMEBUFFER,n),s.bindTexture(s.TEXTURE_2D,o),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE);for(var a=null,u=0;u<i.length;u++)if(s.teximage2d(s.texture_2d,0,s.rgba,32,32,0,s.rgba,i[u].type,null),s.framebuffertexture2d(s.framebuffer,s.color_attachment0,s.texture_2d,o,0),s.checkframebufferstatus(s.framebuffer)===s.framebuffer_complete){a=i[u];break}return a}(),c="function(e,t){try{return" new imagedata(e,t)}catch(r){return document.createelement("canvas").getcontext("2d").createimagedata(e,t)}}(32,32);e("head").prepend("<style>.jquery-ripples { position: relative; z-index: 0; }");var d=function(t,r){function i(){o.destroyed||(o.step(),requestAnimationFrame(i))}var o=this;this.$el=e(t),this.interactive=r.interactive,this.resolution=r.resolution,this.textureDelta=new Float32Array([1/this.resolution,1/this.resolution]),this.perturbance=r.perturbance,this.dropRadius=r.dropRadius,this.crossOrigin=r.crossOrigin,this.imageUrl=r.imageUrl;var n=document.createElement("canvas");n.width=this.$el.innerWidth(),n.height=this.$el.innerHeight(),this.canvas=n,this.$canvas=e(n),this.$canvas.css({position:"absolute",left:0,top:0,right:0,bottom:0,zIndex:-1}),this.$el.addClass("jquery-ripples").append(n),this.context=s=n.getContext("webgl")||n.getContext("experimental-webgl"),h.extensions.forEach(function(e){s.getExtension(e)}),e(window).on("resize",function(){o.updateSize()}),this.textures=[],this.framebuffers=[],this.bufferWriteIndex=0,this.bufferReadIndex=1;for(var a=h.arrayType,u=a?new a(this.resolution*this.resolution*4):null,c=0;c<2;c++){var 0="=(e&e-1)}s=e.context;var" d="s.createTexture(),f=s.createFramebuffer();s.bindFramebuffer(s.FRAMEBUFFER,f),s.bindTexture(s.TEXTURE_2D,d),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,h.linearSupport?s.LINEAR:s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,h.linearSupport?s.LINEAR:s.NEAREST),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),s.texImage2D(s.TEXTURE_2D,0,s.RGBA,this.resolution,this.resolution,0,s.RGBA,h.type,u),s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,d,0),this.textures.push(d),this.framebuffers.push(f)}this.quad=s.createBuffer(),s.bindBuffer(s.ARRAY_BUFFER,this.quad),s.bufferData(s.ARRAY_BUFFER,new" float32array([-1,-1,1,-1,1,1,-1,1]),s.static_draw),this.initshaders(),this.inittexture(),this.settransparenttexture(),this.loadimage(),s.clearcolor(0,0,0,0),s.blendfunc(s.src_alpha,s.one_minus_src_alpha),this.visible="!0,this.running=!0,this.inited=!0,this.destroyed=!1,this.setupPointerEvents(),requestAnimationFrame(i)};d.DEFAULTS={imageUrl:null,resolution:256,dropRadius:20,perturbance:.03,interactive:!0,crossOrigin:""},d.prototype={setupPointerEvents:function(){function" e(){return r.visible&&r.running&&r.interactive}function t(t,i){e()&&r.dropatpointer(t,r.dropradius*(i?1.5:1),i?.14:.01)}var r="this;this.$el.on("mousemove.ripples",function(e){t(e)}).on("touchmove.ripples," touchstart.ripples",function(e){for(var e="this;s=this.context;var" t="this.imageUrl||n(this.originalCssBackgroundImage)||n(this.$el.css("backgroundImage"));if(t!=this.imageSource)if(this.imageSource=t,this.imageSource){var" image;r.onload="function(){function" t(e){return i="t(r.width)&&t(r.height)?s.REPEAT:s.CLAMP_TO_EDGE;s.bindTexture(s.TEXTURE_2D,e.backgroundTexture),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,i),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,i),s.texImage2D(s.TEXTURE_2D,0,s.RGBA,s.RGBA,s.UNSIGNED_BYTE,r),e.backgroundWidth=r.width,e.backgroundHeight=r.height,e.hideCssBackground()},r.onerror=function(){s=e.context,e.setTransparentTexture()},r.crossOrigin=a(this.imageSource)?null:this.crossOrigin,r.src=this.imageSource}else" this.settransparenttexture()},step:function(){s="this.context,this.visible&&(this.computeTextureBoundaries(),this.running&&this.update(),this.render())},drawQuad:function(){s.bindBuffer(s.ARRAY_BUFFER,this.quad),s.vertexAttribPointer(0,2,s.FLOAT,!1,0,0),s.drawArrays(s.TRIANGLE_FAN,0,4)},render:function(){s.bindFramebuffer(s.FRAMEBUFFER,null),s.viewport(0,0,this.canvas.width,this.canvas.height),s.enable(s.BLEND),s.clear(s.COLOR_BUFFER_BIT|s.DEPTH_BUFFER_BIT),s.useProgram(this.renderProgram.id),o(this.backgroundTexture,0),o(this.textures[0],1),s.uniform1f(this.renderProgram.locations.perturbance,this.perturbance),s.uniform2fv(this.renderProgram.locations.topLeft,this.renderProgram.uniforms.topLeft),s.uniform2fv(this.renderProgram.locations.bottomRight,this.renderProgram.uniforms.bottomRight),s.uniform2fv(this.renderProgram.locations.containerRatio,this.renderProgram.uniforms.containerRatio),s.uniform1i(this.renderProgram.locations.samplerBackground,0),s.uniform1i(this.renderProgram.locations.samplerRipples,1),this.drawQuad(),s.disable(s.BLEND)},update:function(){s.viewport(0,0,this.resolution,this.resolution),s.bindFramebuffer(s.FRAMEBUFFER,this.framebuffers[this.bufferWriteIndex]),o(this.textures[this.bufferReadIndex]),s.useProgram(this.updateProgram.id),this.drawQuad(),this.swapBufferIndices()},swapBufferIndices:function(){this.bufferWriteIndex=1-this.bufferWriteIndex,this.bufferReadIndex=1-this.bufferReadIndex},computeTextureBoundaries:function(){var" e,i="this.$el.css("background-size"),o=this.$el.css("background-attachment"),n=r(this.$el.css("background-position"));if("fixed"==o?((e={left:window.pageXOffset,top:window.pageYOffset}).width=u.width(),e.height=u.height()):((e=this.$el.offset()).width=this.$el.innerWidth(),e.height=this.$el.innerHeight()),"cover"==i)var" a="Math.max(e.width/this.backgroundWidth,e.height/this.backgroundHeight),s=this.backgroundWidth*a,h=this.backgroundHeight*a;else" if("contain"="=i)var" s="(i=i.split("" "))[0]||"",h="i[1]||s;t(s)?s=e.width*parseFloat(s)/100:"auto"!=s&&(s=parseFloat(s)),t(h)?h=e.height*parseFloat(h)/100:"auto"!=h&&(h=parseFloat(h)),"auto"==s&&"auto"==h?(s=this.backgroundWidth,h=this.backgroundHeight):("auto"==s&&(s=this.backgroundWidth*(h/this.backgroundHeight)),"auto"==h&&(h=this.backgroundHeight*(s/this.backgroundWidth)))}var" c="n[0],d=n[1];c=t(c)?e.left+(e.width-s)*parseFloat(c)/100:e.left+parseFloat(c),d=t(d)?e.top+(e.height-h)*parseFloat(d)/100:e.top+parseFloat(d);var" f="this.$el.offset();this.renderProgram.uniforms.topLeft=new" float32array([(f.left-c) s,(f.top-d) h]),this.renderprogram.uniforms.bottomright="new" float32array([this.renderprogram.uniforms.topleft[0]+this.$el.innerwidth() s,this.renderprogram.uniforms.topleft[1]+this.$el.innerheight() h]);var l="Math.max(this.canvas.width,this.canvas.height);this.renderProgram.uniforms.containerRatio=new" float32array([this.canvas.width l,this.canvas.height l])},initshaders:function(){var vec2 vertex;","varying coord;","void main() {","coord="vertex" * 0.5 + 0.5;","gl_position="vec4(vertex," 0.0, 1.0);","}"].join("\n");this.dropprogram="i(e,["precision" highp float;","const float pi="3.141592653589793;","uniform" sampler2d texture;","uniform center;","uniform radius;","uniform strength;","varying {","vec4 info="texture2D(texture," coord);","float drop="max(0.0," 1.0 - length(center coord) radius);","drop="0.5" cos(drop pi) 0.5;","info.r strength;","gl_fragcolor="info;","}"].join("\n")),this.updateProgram=i(e,["precision" float;","uniform delta;","varying coord);","vec2 dx="vec2(delta.x," 0.0);","vec2 dy="vec2(0.0," delta.y);","float average="(","texture2D(texture," coord dx).r +","texture2d(texture, dy).r dy).r",") 0.25;","info.g info.r) 2.0;","info.g = info;","}"].join("\n")),s.uniform2fv(this.updateprogram.locations.delta,this.texturedelta),this.renderprogram="i(["precision" float;","attribute vertex;","uniform topleft;","uniform bottomright;","uniform containerratio;","varying ripplescoord;","varying backgroundcoord;","void {","backgroundcoord="mix(topLeft," bottomright, vertex 0.5);","backgroundcoord.y="1.0" backgroundcoord.y;","ripplescoord="vec2(vertex.x," -vertex.y) containerratio -vertex.y, 1.0);","}"].join("\n"),["precision samplerbackground;","uniform samplerripples;","uniform delta;","uniform perturbance;","varying {","float height="texture2D(samplerRipples," ripplescoord).r;","float heightx="texture2D(samplerRipples," vec2(ripplescoord.x delta.x, ripplescoord.y)).r;","float heighty="texture2D(samplerRipples," vec2(ripplescoord.x, ripplescoord.y delta.y)).r;","vec3 height, 0.0);","vec3 delta.y);","vec2 offset="-normalize(cross(dy," dx)).xz;","float specular="pow(max(0.0," dot(offset, normalize(vec2(-0.6, 1.0)))), 4.0);","gl_fragcolor="texture2D(samplerBackground," backgroundcoord perturbance) specular;","}"].join("\n")),s.uniform2fv(this.renderprogram.locations.delta,this.texturedelta)},inittexture:function(){this.backgroundtexture="s.createTexture(),s.bindTexture(s.TEXTURE_2D,this.backgroundTexture),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,1),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MAG_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR)},setTransparentTexture:function(){s.bindTexture(s.TEXTURE_2D,this.backgroundTexture),s.texImage2D(s.TEXTURE_2D,0,s.RGBA,s.RGBA,s.UNSIGNED_BYTE,c)},hideCssBackground:function(){var" n="this.$el.innerWidth(),a=this.$el.innerHeight(),u=Math.max(n,a);r/=u;var" h="new" float32array([(2*e-n) u,(a-2*t) u]);s.viewport(0,0,this.resolution,this.resolution),s.bindframebuffer(s.framebuffer,this.framebuffers[this.bufferwriteindex]),o(this.textures[this.bufferreadindex]),s.useprogram(this.dropprogram.id),s.uniform2fv(this.dropprogram.locations.center,h),s.uniform1f(this.dropprogram.locations.radius,r),s.uniform1f(this.dropprogram.locations.strength,i),this.drawquad(),this.swapbufferindices()},updatesize:function(){var new error("your browser does not support webgl, the oes_texture_float extension or rendering to floating point textures.");var>1?Array.prototype.slice.call(arguments,1):void 0;return this.each(function(){var i=e(this),o=i.data("ripples"),n=e.extend({},d.DEFAULTS,i.data(),"object"==typeof t&&t);(o||"string"!=typeof t)&&(o?"string"==typeof t&&d.prototype[t].apply(o,r):i.data("ripples",o=new d(this,n)))})},e.fn.ripples.Constructor=d,e.fn.ripples.noConflict=function(){return e.fn.ripples=f,this}});
</2;c++){var></i.length;u++)if(s.teximage2d(s.texture_2d,0,s.rgba,32,32,0,s.rgba,i[u].type,null),s.framebuffertexture2d(s.framebuffer,s.color_attachment0,s.texture_2d,o,0),s.checkframebufferstatus(s.framebuffer)===s.framebuffer_complete){a=i[u];break}return>