(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{221:function(e,t,a){e.exports=a(541)},541:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(39),l=a.n(i),o=a(85),c=a(86),s=a(90),m=a(87),u=a(91),d=a(220),E=a.n(d),p=a(545),h=a(547),g=a(546),v=a(544),f=a(34),b=Object(f.a)(),w=a(24),j=a(208),y=a.n(j),O=a(210),x=a.n(O),M=a(22),k=a.n(M),_=a(52),N=a.n(_),C=a(211),S=a.n(C),B=a(212),G=a.n(B),P=a(543),A=Object(w.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(y.a,{position:"static"},r.a.createElement(x.a,null,r.a.createElement(S.a,{className:t.menuButton,color:"inherit","aria-label":"Menu"},r.a.createElement(G.a,null)),r.a.createElement(k.a,{variant:"h6",color:"inherit",className:t.grow},r.a.createElement(P.a,{to:"/"},r.a.createElement(N.a,{color:"inherit"},"Event Planner"))),r.a.createElement(P.a,{to:"/"},r.a.createElement(N.a,{color:"inherit"},"Home")))))}),I=a(126),T=a(213),F=a.n(T),L=a(214),W=a.n(L),z=a(215),J=a.n(z),R=a(51),$=a.n(R),D=a(41),H=a.n(D),V=a(216),Z=a.n(V),q=Object(w.withStyles)(function(e){return{card:{maxWidth:"100%",textAlign:"left"},media:{width:"100%",height:230},paper:{padding:2*e.spacing.unit,textAlign:"center",color:e.palette.text.secondary}}})(function(e){var t=e.classes,a=e.name,n=e.time_start,i=e.cost,l=e.business_id,o=e.latitude,c=e.longitude,s=e.distance,m={pathname:"/event/".concat(l),name:a,time_start:n,cost:i,latitude:o,longitude:c,business_id:l,distance:s};return r.a.createElement(H.a,{item:!0,xs:12,md:4},r.a.createElement($.a,{className:t.paper},r.a.createElement(F.a,{className:t.card},r.a.createElement(W.a,{onClick:function(){window.open(e.event_site_url)}},r.a.createElement("img",{className:t.media,src:e.image_url,title:"Contemplative Reptile",onError:function(e){e.target.src="http://fiscalsystems.wpengine.com/wp-content/uploads/2013/10/EVENTS.png"},alt:"Event"}),r.a.createElement(J.a,null,r.a.createElement(k.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.name),r.a.createElement(k.a,{variant:"subtitle2"},"Event Time: ",e.time_start),r.a.createElement(k.a,{variant:"subtitle2"},"distance: ",s," miles"),r.a.createElement(k.a,{variant:"subtitle2"},"Event Cost: ",e.cost))),r.a.createElement(Z.a,null,r.a.createElement(P.a,{to:m},r.a.createElement(N.a,{size:"large",color:"primary"},"Learn more about this Event"))))))}),K=a(217),Q=a.n(K);var U=Object(w.withStyles)(function(e){return{progress:{}}})(function(e){var t=e.classes;return r.a.createElement("div",{style:{position:"absolute",top:"40%",left:"50%",transform:"translate(-50%,-50%)"}},r.a.createElement(Q.a,{className:t.progress}))}),X=a(218),Y=a.n(X),ee=Object(w.withStyles)({root:{flexGrow:1,padding:15}})(function(e){var t=Object(n.useState)(""),a=Object(I.a)(t,2),i=a[0],l=a[1],o=Object(n.useState)(""),c=Object(I.a)(o,2),s=c[0],m=c[1];Object(n.useEffect)(function(){Y.a.get("https://event-planner-backend.herokuapp.com/getEvents",{headers:{Authorization:"key"}}).then(function(e){m(e.data)}).catch(function(e){alert("Error: Try Again")}),navigator.geolocation?navigator.geolocation.getCurrentPosition(function(e){var t=e.coords.latitude,a=e.coords.longitude;l({latitude:t,longitude:a})},function(e){alert("Cannot acess location")}):alert("Cannot acess Location")},[]);var u=e.classes;return r.a.createElement("div",{className:u.root},""===i||""===s?r.a.createElement(U,null):r.a.createElement(H.a,{container:!0,spacing:24},s.data?s.data.map(function(e){var t=e.cost,a=e.time_start,n=e.business_id,l=e.latitude,o=e.longitude;t?t+="$":t="Free Event",a=a.split("T").join("  ,  ");var c=function(e,t,a,n){var r=Math.PI*e/180,i=Math.PI*a/180,l=t-n,o=Math.PI*l/180,c=Math.sin(r)*Math.sin(i)+Math.cos(r)*Math.cos(i)*Math.cos(o);return c=60*(c=180*(c=Math.acos(c))/Math.PI)*1.1515}(l,o,i.latitude,i.longitude).toFixed(2);return r.a.createElement(q,Object.assign({},e,{distance:c,cost:t,time_start:a,key:n}))}):r.a.createElement(U,null)))}),te=a(92),ae=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.latitude,a=e.longitude,n=Object(te.withGoogleMap)(function(e){return r.a.createElement(te.GoogleMap,{defaultCenter:{lat:t,lng:a},defaultZoom:13},r.a.createElement(te.Marker,{position:{lat:t,lng:a}}))});return r.a.createElement("div",null,r.a.createElement(n,{containerElement:r.a.createElement("div",{style:{height:"400px",width:"600px"}}),mapElement:r.a.createElement("div",{style:{height:"100%"}})}))}}]),t}(n.Component),ne=Object(w.withStyles)(function(e){return{root:{flexGrow:1,padding:15,height:"100%"},paper:{padding:2*e.spacing.unit,textAlign:"left",color:e.palette.text.secondary,width:"100%"}}})(function(e){var t=e.classes,a=e.location,n=a.name,i=a.time_start,l=a.cost,o=a.latitude,c=a.longitude,s=a.distance;return e.location.name||b.replace("/"),r.a.createElement("div",{className:t.root},r.a.createElement(H.a,{container:!0,spacing:24},r.a.createElement(H.a,{item:!0,xs:12},r.a.createElement($.a,{className:t.paper},r.a.createElement("div",{style:{marginBottom:20}},r.a.createElement(k.a,{gutterBottom:!0,variant:"h5",component:"h2"},n),r.a.createElement(k.a,{variant:"subtitle2"},"Event Time: ",i),r.a.createElement(k.a,{variant:"subtitle2"},"Distance: ",s," Miles"),r.a.createElement(k.a,{variant:"subtitle2"},"Event Cost: ",l)),r.a.createElement(ae,{latitude:o,longitude:c})))))}),re=function(){return r.a.createElement(p.a,{history:b},r.a.createElement("main",null,r.a.createElement(A,null),r.a.createElement(h.a,null,r.a.createElement(g.a,{exact:!0,path:"/",component:ee}),r.a.createElement(g.a,{exact:!0,path:"/event/:id",component:ne}),r.a.createElement(v.a,{to:"/"}))))},ie=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null),r.a.createElement(re,null))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[221,1,2]]]);
//# sourceMappingURL=main.03072311.chunk.js.map