import{s as ge,n as B,z as We,r as Ke,A as Oe}from"../chunks/scheduler.D4WuhzBw.js";import{S as be,i as we,q as P,t as q,a as T,u as S,v as M,r as j,d as r,b as u,e as h,y as b,h as x,j as g,l as _,c as G,w,f as le,g as Y,k as X,A as oe,B as $e,C as Fe,D as Ne,x as ze,z as Ze}from"../chunks/index.BrheVP-q.js";import{S as y,C as ie,P as Pe,a as Ye}from"../chunks/plantUml.DxlSZiK4.js";import{w as Xe}from"../chunks/index.D8jzovuw.js";const et=!1,tt=!0,Ia=Object.freeze(Object.defineProperty({__proto__:null,prerender:tt,ssr:et},Symbol.toStringTag,{value:"Module"})),lt=""+new URL("../assets/TD1.BPxddsqE.html",import.meta.url).href,st=""+new URL("../assets/TD2.DmF0wZ-D.html",import.meta.url).href,Re=""+new URL("../assets/TP1.wlZYs3rQ.html",import.meta.url).href,Ge=""+new URL("../assets/TP2.BOqwCClJ.html",import.meta.url).href,Qe=""+new URL("../assets/README.wObKFzTv.html",import.meta.url).href;function nt(m){let e,a="En POO, l'héritage est un mécanisme qui permet de créer une nouvelle classe à partir d'une classe existante.";return{c(){e=g("p"),e.textContent=a},l(l){e=h(l,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1cxtphb"&&(e.textContent=a)},m(l,t){u(l,e,t)},p:B,d(l){l&&r(e)}}}function it(m){let e,a=`La classe existante est appelée <span class="text-important">classe mère</span> ou
			<span class="text-important">classe de base</span>.`;return{c(){e=g("p"),e.innerHTML=a},l(l){e=h(l,"P",{"data-svelte-h":!0}),b(e)!=="svelte-17c6x0h"&&(e.innerHTML=a)},m(l,t){u(l,e,t)},p:B,d(l){l&&r(e)}}}function rt(m){let e=`
		class Animal {
			void crier(){
				print("Je suis un animal");
			}
		}

		class Chien extends Animal {
			boolean inscritLOF;
		}
		`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function at(m){let e,a=`La nouvelle classe est appelée <span class="text-important">classe fille</span> ou
			<span class="text-important">classe dérivée</span>.`,l,t,c="La classe fille peut aussi ajouter des attributs et des méthodes qui lui sont propres.",s,n,p,i,$='On utilise le mot-clé <code class="code text-important">extends</code> pour hériter d&#39;une classe.',C;return n=new ie({props:{$$slots:{default:[rt]},$$scope:{ctx:m}}}),{c(){e=g("p"),e.innerHTML=a,l=_(),t=g("p"),t.textContent=c,s=_(),j(n.$$.fragment),p=_(),i=g("p"),i.innerHTML=$},l(o){e=h(o,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1uk6o90"&&(e.innerHTML=a),l=x(o),t=h(o,"P",{"data-svelte-h":!0}),b(t)!=="svelte-hn2jyx"&&(t.textContent=c),s=x(o),M(n.$$.fragment,o),p=x(o),i=h(o,"P",{"data-svelte-h":!0}),b(i)!=="svelte-fb6via"&&(i.innerHTML=$)},m(o,f){u(o,e,f),u(o,l,f),u(o,t,f),u(o,s,f),S(n,o,f),u(o,p,f),u(o,i,f),C=!0},p(o,f){const v={};f&1&&(v.$$scope={dirty:f,ctx:o}),n.$set(v)},i(o){C||(T(n.$$.fragment,o),C=!0)},o(o){q(n.$$.fragment,o),C=!1},d(o){o&&(r(e),r(l),r(t),r(s),r(p),r(i)),P(n,o)}}}function ut(m){let e,a=`La classe fille hérite des attributs et des méthodes de la classe mère. Elle peut aussi\r
			redéfinir les méthodes de la classe mère.`,l,t,c='Redéfinir une méthode s&#39;appelle <span class="text-important">redéfinition</span>.';return{c(){e=g("p"),e.textContent=a,l=_(),t=g("p"),t.innerHTML=c},l(s){e=h(s,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1def0s3"&&(e.textContent=a),l=x(s),t=h(s,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1a0mvav"&&(t.innerHTML=c)},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function ot(m){let e,a="Pourquoi redéfinir une méthode ?",l,t,c="<li>Adapter le comportement de la méthode à la classe fille.</li> <li>Modifier le comportement de la méthode.</li>";return{c(){e=g("p"),e.textContent=a,l=_(),t=g("ul"),t.innerHTML=c},l(s){e=h(s,"P",{"data-svelte-h":!0}),b(e)!=="svelte-j021i9"&&(e.textContent=a),l=x(s),t=h(s,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-1crh2p0"&&(t.innerHTML=c)},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function $t(m){let e=`
class Animal {
	void crier(){
		print("Je suis un animal");
	}
}

class Chien extends Animal {
	void crier(){
		print("Wouaf wouaf");
	}
}`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function ft(m){let e,a="Ici, nous avons une classe Animal et une classe Chien qui hérite de la classe Animal.",l,t,c=`On veut qu'un chien fasse "Wouaf" et qu'un animal, si ce n'est pas précisé, fasse "Je suis un animal".`,s,n,p;return n=new ie({props:{$$slots:{default:[$t]},$$scope:{ctx:m}}}),{c(){e=g("p"),e.textContent=a,l=_(),t=g("p"),t.textContent=c,s=_(),j(n.$$.fragment)},l(i){e=h(i,"P",{"data-svelte-h":!0}),b(e)!=="svelte-ypxylr"&&(e.textContent=a),l=x(i),t=h(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-319dd2"&&(t.textContent=c),s=x(i),M(n.$$.fragment,i)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),S(n,i,$),p=!0},p(i,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:i}),n.$set(C)},i(i){p||(T(n.$$.fragment,i),p=!0)},o(i){q(n.$$.fragment,i),p=!1},d(i){i&&(r(e),r(l),r(t),r(s)),P(n,i)}}}function ct(m){let e=`
class Animal {
	void crier(){
		print("Je suis un animal");
	}
}
	class Chien extends Animal {
		void crier(){
			super.crier();
			print(", Wouaf wouaf");
			// Je suis un animal, Wouaf wouaf
		}
	}
`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function pt(m){let e,a="On peut aussi appeler la méthode de la classe mère.",l,t,c;return t=new ie({props:{lines:"8|1-12",$$slots:{default:[ct]},$$scope:{ctx:m}}}),{c(){e=g("p"),e.textContent=a,l=_(),j(t.$$.fragment)},l(s){e=h(s,"P",{"data-svelte-h":!0}),b(e)!=="svelte-640ijp"&&(e.textContent=a),l=x(s),M(t.$$.fragment,s)},m(s,n){u(s,e,n),u(s,l,n),S(t,s,n),c=!0},p(s,n){const p={};n&1&&(p.$$scope={dirty:n,ctx:s}),t.$set(p)},i(s){c||(T(t.$$.fragment,s),c=!0)},o(s){q(t.$$.fragment,s),c=!1},d(s){s&&(r(e),r(l)),P(t,s)}}}function mt(m){let e,a="Les classes abstraites",l,t,c=`Une classe abstraite est une classe qui ne peut pas être instanciée et qui est destinée à être\r
			héritée par d'autres classes.`,s,n,p=`Elle peut contenir des méthodes abstraites, c'est-à-dire des méthodes sans implémentation, qui\r
			doivent être redéfinies dans les classes filles.`;return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.textContent=c,s=_(),n=g("p"),n.textContent=p},l(i){e=h(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-dn4vrw"&&(e.textContent=a),l=x(i),t=h(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1jofbl9"&&(t.textContent=c),s=x(i),n=h(i,"P",{"data-svelte-h":!0}),b(n)!=="svelte-16o0spv"&&(n.textContent=p)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),u(i,n,$)},p:B,d(i){i&&(r(e),r(l),r(t),r(s),r(n))}}}function dt(m){let e,a="Pourquoi utiliser des classes abstraites ?",l,t,c="<li>Pour définir un comportement commun à plusieurs classes.</li> <li>Pour forcer les classes filles à implémenter certaines méthodes.</li> <li>Surtout, il n&#39;a parfois aucun sens d&#39;instancier une classe.</li>";return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("ul"),t.innerHTML=c},l(s){e=h(s,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1fw1imw"&&(e.textContent=a),l=x(s),t=h(s,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-1jeb803"&&(t.innerHTML=c)},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function vt(m){let e=`
		abstract class Forme {
			abstract double calculerSurface();
		}
			`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function xt(m){let e=`class Cercle extends Forme {
				double rayon;
	
				Cercle(double rayon) {
					this.rayon = rayon;
				}
	
				double calculerSurface() {
					return Math.PI * rayon * rayon;
				}
			}
	
			`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function _t(m){let e=`class Triangle extends Forme {
				double base, hauteur;
	
				Triangle(double base, double hauteur) {
					this.base = base;
					this.hauteur = hauteur;
				}
	
				double calculerSurface() {
					return (base * hauteur) / 2;
				}
			}
			`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Ct(m){let e,a,l,t,c,s,n;return e=new ie({props:{$$slots:{default:[vt]},$$scope:{ctx:m}}}),t=new ie({props:{class:"language-java",$$slots:{default:[xt]},$$scope:{ctx:m}}}),s=new ie({props:{class:"language-java",$$slots:{default:[_t]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment),a=_(),l=g("div"),j(t.$$.fragment),c=_(),j(s.$$.fragment),this.h()},l(p){M(e.$$.fragment,p),a=x(p),l=h(p,"DIV",{class:!0});var i=le(l);M(t.$$.fragment,i),c=x(i),M(s.$$.fragment,i),i.forEach(r),this.h()},h(){w(l,"class","flex flex-row")},m(p,i){S(e,p,i),u(p,a,i),u(p,l,i),S(t,l,null),G(l,c),S(s,l,null),n=!0},p(p,i){const $={};i&1&&($.$$scope={dirty:i,ctx:p}),e.$set($);const C={};i&1&&(C.$$scope={dirty:i,ctx:p}),t.$set(C);const o={};i&1&&(o.$$scope={dirty:i,ctx:p}),s.$set(o)},i(p){n||(T(e.$$.fragment,p),T(t.$$.fragment,p),T(s.$$.fragment,p),n=!0)},o(p){q(e.$$.fragment,p),q(t.$$.fragment,p),q(s.$$.fragment,p),n=!1},d(p){p&&(r(a),r(l)),P(e,p),P(t),P(s)}}}function ht(m){let e,a=`Dans cet exemple, la classe <code class="code text-important">Forme</code> est abstraite et
			contient une méthode abstraite <code class="code text-important">calculerSurface</code>.`,l,t,c=`Les classes <code class="code text-important">Cercle</code> et
			<code class="code text-important">Triangle</code> héritent de <code class="code text-important">Forme</code> et implémentent la méthode
			<code class="code text-important">calculerSurface</code>.`,s,n,p="Comment voudriez-vous coder la surface d'une forme ? C'est impossible !";return{c(){e=g("p"),e.innerHTML=a,l=_(),t=g("p"),t.innerHTML=c,s=_(),n=g("p"),n.textContent=p},l(i){e=h(i,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1211hcu"&&(e.innerHTML=a),l=x(i),t=h(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-cie1c9"&&(t.innerHTML=c),s=x(i),n=h(i,"P",{"data-svelte-h":!0}),b(n)!=="svelte-1ie4rof"&&(n.textContent=p)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),u(i,n,$)},p:B,d(i){i&&(r(e),r(l),r(t),r(s),r(n))}}}function gt(m){let e,a="L'héritage",l,t,c,s,n,p,i,$,C,o,f,v,d,L,U,A,V,O,E,I,z,W,K;return t=new y({props:{$$slots:{default:[nt]},$$scope:{ctx:m}}}),s=new y({props:{$$slots:{default:[it]},$$scope:{ctx:m}}}),p=new y({props:{$$slots:{default:[at]},$$scope:{ctx:m}}}),$=new y({props:{$$slots:{default:[ut]},$$scope:{ctx:m}}}),o=new y({props:{$$slots:{default:[ot]},$$scope:{ctx:m}}}),v=new y({props:{$$slots:{default:[ft]},$$scope:{ctx:m}}}),L=new y({props:{$$slots:{default:[pt]},$$scope:{ctx:m}}}),A=new y({props:{$$slots:{default:[mt]},$$scope:{ctx:m}}}),O=new y({props:{$$slots:{default:[dt]},$$scope:{ctx:m}}}),I=new y({props:{$$slots:{default:[Ct]},$$scope:{ctx:m}}}),W=new y({props:{$$slots:{default:[ht]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),j(t.$$.fragment),c=_(),j(s.$$.fragment),n=_(),j(p.$$.fragment),i=_(),j($.$$.fragment),C=_(),j(o.$$.fragment),f=_(),j(v.$$.fragment),d=_(),j(L.$$.fragment),U=_(),j(A.$$.fragment),V=_(),j(O.$$.fragment),E=_(),j(I.$$.fragment),z=_(),j(W.$$.fragment)},l(k){e=h(k,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-taqcdc"&&(e.textContent=a),l=x(k),M(t.$$.fragment,k),c=x(k),M(s.$$.fragment,k),n=x(k),M(p.$$.fragment,k),i=x(k),M($.$$.fragment,k),C=x(k),M(o.$$.fragment,k),f=x(k),M(v.$$.fragment,k),d=x(k),M(L.$$.fragment,k),U=x(k),M(A.$$.fragment,k),V=x(k),M(O.$$.fragment,k),E=x(k),M(I.$$.fragment,k),z=x(k),M(W.$$.fragment,k)},m(k,D){u(k,e,D),u(k,l,D),S(t,k,D),u(k,c,D),S(s,k,D),u(k,n,D),S(p,k,D),u(k,i,D),S($,k,D),u(k,C,D),S(o,k,D),u(k,f,D),S(v,k,D),u(k,d,D),S(L,k,D),u(k,U,D),S(A,k,D),u(k,V,D),S(O,k,D),u(k,E,D),S(I,k,D),u(k,z,D),S(W,k,D),K=!0},p(k,D){const H={};D&1&&(H.$$scope={dirty:D,ctx:k}),t.$set(H);const R={};D&1&&(R.$$scope={dirty:D,ctx:k}),s.$set(R);const se={};D&1&&(se.$$scope={dirty:D,ctx:k}),p.$set(se);const re={};D&1&&(re.$$scope={dirty:D,ctx:k}),$.$set(re);const Q={};D&1&&(Q.$$scope={dirty:D,ctx:k}),o.$set(Q);const Z={};D&1&&(Z.$$scope={dirty:D,ctx:k}),v.$set(Z);const ae={};D&1&&(ae.$$scope={dirty:D,ctx:k}),L.$set(ae);const N={};D&1&&(N.$$scope={dirty:D,ctx:k}),A.$set(N);const ee={};D&1&&(ee.$$scope={dirty:D,ctx:k}),O.$set(ee);const ue={};D&1&&(ue.$$scope={dirty:D,ctx:k}),I.$set(ue);const fe={};D&1&&(fe.$$scope={dirty:D,ctx:k}),W.$set(fe)},i(k){K||(T(t.$$.fragment,k),T(s.$$.fragment,k),T(p.$$.fragment,k),T($.$$.fragment,k),T(o.$$.fragment,k),T(v.$$.fragment,k),T(L.$$.fragment,k),T(A.$$.fragment,k),T(O.$$.fragment,k),T(I.$$.fragment,k),T(W.$$.fragment,k),K=!0)},o(k){q(t.$$.fragment,k),q(s.$$.fragment,k),q(p.$$.fragment,k),q($.$$.fragment,k),q(o.$$.fragment,k),q(v.$$.fragment,k),q(L.$$.fragment,k),q(A.$$.fragment,k),q(O.$$.fragment,k),q(I.$$.fragment,k),q(W.$$.fragment,k),K=!1},d(k){k&&(r(e),r(l),r(c),r(n),r(i),r(C),r(f),r(d),r(U),r(V),r(E),r(z)),P(t,k),P(s,k),P(p,k),P($,k),P(o,k),P(v,k),P(L,k),P(A,k),P(O,k),P(I,k),P(W,k)}}}function bt(m){let e,a;return e=new y({props:{$$slots:{default:[gt]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,t){S(e,l,t),a=!0},p(l,[t]){const c={};t&1&&(c.$$scope={dirty:t,ctx:l}),e.$set(c)},i(l){a||(T(e.$$.fragment,l),a=!0)},o(l){q(e.$$.fragment,l),a=!1},d(l){P(e,l)}}}class wt extends be{constructor(e){super(),we(this,e,null,bt,ge,{})}}function Lt(m){let e,a,l,t,c,s,n,p,i,$,C,o,f,v,d,L,U,A,V,O;return{c(){e=$e("svg"),a=$e("g"),l=$e("title"),t=X("Layer 1"),c=$e("g"),s=$e("rect"),n=$e("text"),p=X("Données"),i=$e("text"),$=X("FonctionA"),C=$e("text"),o=X("FonctionB"),f=$e("text"),v=X("FonctionC"),d=$e("text"),L=X("FonctionD"),U=$e("line"),A=$e("line"),V=$e("line"),O=$e("line"),this.h()},l(E){e=oe(E,"svg",{width:!0,height:!0,xmlns:!0});var I=le(e);a=oe(I,"g",{});var z=le(a);l=oe(z,"title",{});var W=le(l);t=Y(W,"Layer 1"),W.forEach(r),c=oe(z,"g",{id:!0});var K=le(c);s=oe(K,"rect",{fill:!0,stroke:!0,x:!0,y:!0,width:!0,height:!0,id:!0}),le(s).forEach(r),n=oe(K,"text",{fill:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var k=le(n);p=Y(k,"Données"),k.forEach(r),i=oe(K,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var D=le(i);$=Y(D,"FonctionA"),D.forEach(r),C=oe(K,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var H=le(C);o=Y(H,"FonctionB"),H.forEach(r),f=oe(K,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var R=le(f);v=Y(R,"FonctionC"),R.forEach(r),d=oe(K,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var se=le(d);L=Y(se,"FonctionD"),se.forEach(r),U=oe(K,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),le(U).forEach(r),A=oe(K,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),le(A).forEach(r),V=oe(K,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),le(V).forEach(r),O=oe(K,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),le(O).forEach(r),K.forEach(r),z.forEach(r),I.forEach(r),this.h()},h(){w(s,"fill","#FFDFB8"),w(s,"stroke","none"),w(s,"x","170"),w(s,"y","0"),w(s,"width","150"),w(s,"height","300"),w(s,"id","svg_1"),w(n,"fill","black"),w(n,"stroke","black"),w(n,"x","205"),w(n,"y","150"),w(n,"id","svg_2"),w(n,"font-size","24"),w(n,"font-family","Noto Sans JP"),w(n,"text-anchor","start"),w(n,"xml:space","preserve"),w(i,"class","fill-current"),w(i,"stroke","none"),w(i,"x","0"),w(i,"y","50"),w(i,"id","svg_3"),w(i,"font-size","24"),w(i,"font-family","Noto Sans JP"),w(i,"text-anchor","start"),w(i,"xml:space","preserve"),w(C,"class","fill-current"),w(C,"stroke","none"),w(C,"x","0"),w(C,"y","109.99901"),w(C,"id","svg_4"),w(C,"font-size","24"),w(C,"font-family","Noto Sans JP"),w(C,"text-anchor","start"),w(C,"xml:space","preserve"),w(f,"class","fill-current"),w(f,"stroke","none"),w(f,"x","0"),w(f,"y","170"),w(f,"id","svg_5"),w(f,"font-size","24"),w(f,"font-family","Noto Sans JP"),w(f,"text-anchor","start"),w(f,"xml:space","preserve"),w(d,"class","fill-current"),w(d,"stroke","none"),w(d,"x","0"),w(d,"y","230"),w(d,"id","svg_6"),w(d,"font-size","24"),w(d,"font-family","Noto Sans JP"),w(d,"text-anchor","start"),w(d,"xml:space","preserve"),w(U,"stroke-width","5"),w(U,"class","stroke-current"),w(U,"x1","113.53031"),w(U,"y1","222.00012"),w(U,"x2","158.37456"),w(U,"y2","222.00012"),w(U,"id","svg_7"),w(A,"stroke-width","5"),w(A,"class","stroke-current"),w(A,"x1","113.53031"),w(A,"y1","162.00012"),w(A,"x2","158.37456"),w(A,"y2","162.00012"),w(A,"id","svg_8"),w(V,"stroke-width","5"),w(V,"class","stroke-current"),w(V,"x1","113.53031"),w(V,"y1","101.99914"),w(V,"x2","158.37456"),w(V,"y2","101.99914"),w(V,"id","svg_9"),w(O,"stroke-width","5"),w(O,"class","stroke-current"),w(O,"x1","113.53031"),w(O,"y1","42.00012"),w(O,"x2","158.37455"),w(O,"y2","42.00012"),w(O,"id","svg_10"),w(c,"id","svg_11"),w(e,"width","320"),w(e,"height","300"),w(e,"xmlns","http://www.w3.org/2000/svg")},m(E,I){u(E,e,I),G(e,a),G(a,l),G(l,t),G(a,c),G(c,s),G(c,n),G(n,p),G(c,i),G(i,$),G(c,C),G(C,o),G(c,f),G(f,v),G(c,d),G(d,L),G(c,U),G(c,A),G(c,V),G(c,O)},p:B,i:B,o:B,d(E){E&&r(e)}}}class Ht extends be{constructor(e){super(),we(this,e,null,Lt,ge,{})}}function Pt(m){let e,a,l,t,c,s,n,p,i,$,C,o,f,v,d,L,U,A,V,O,E,I,z,W;return{c(){e=$e("svg"),a=$e("g"),l=$e("title"),t=X("Layer 1"),c=$e("g"),s=$e("path"),n=$e("text"),p=X("Données"),i=$e("text"),$=X("MéthodeA"),C=$e("text"),o=X("MéthodeB"),f=$e("line"),v=$e("line"),d=$e("g"),L=$e("path"),U=$e("text"),A=X("Données"),V=$e("text"),O=X("MéthodeA"),E=$e("text"),I=X("MéthodeB"),z=$e("line"),W=$e("line"),this.h()},l(K){e=oe(K,"svg",{width:!0,height:!0,xmlns:!0});var k=le(e);a=oe(k,"g",{});var D=le(a);l=oe(D,"title",{});var H=le(l);t=Y(H,"Layer 1"),H.forEach(r),c=oe(D,"g",{id:!0});var R=le(c);s=oe(R,"path",{id:!0,d:!0,opacity:!0,stroke:!0,fill:!0}),le(s).forEach(r),n=oe(R,"text",{stroke:!0,fill:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var se=le(n);p=Y(se,"Données"),se.forEach(r),i=oe(R,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var re=le(i);$=Y(re,"MéthodeA"),re.forEach(r),C=oe(R,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var Q=le(C);o=Y(Q,"MéthodeB"),Q.forEach(r),f=oe(R,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),le(f).forEach(r),v=oe(R,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),le(v).forEach(r),R.forEach(r),d=oe(D,"g",{id:!0});var Z=le(d);L=oe(Z,"path",{id:!0,d:!0,opacity:!0,stroke:!0,fill:!0}),le(L).forEach(r),U=oe(Z,"text",{stroke:!0,fill:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var ae=le(U);A=Y(ae,"Données"),ae.forEach(r),V=oe(Z,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var N=le(V);O=Y(N,"MéthodeA"),N.forEach(r),E=oe(Z,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var ee=le(E);I=Y(ee,"MéthodeB"),ee.forEach(r),z=oe(Z,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),le(z).forEach(r),W=oe(Z,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),le(W).forEach(r),Z.forEach(r),D.forEach(r),k.forEach(r),this.h()},h(){w(s,"id","svg_1"),w(s,"d","m170,2.75867l150,0l0,116l-150,0l0,-116z"),w(s,"opacity","undefined"),w(s,"stroke","none"),w(s,"fill","#FFDFB8"),w(n,"stroke","black"),w(n,"fill","black"),w(n,"x","208"),w(n,"y","70"),w(n,"id","svg_2"),w(n,"font-size","24"),w(n,"font-family","Noto Sans JP"),w(n,"text-anchor","start"),w(n,"xml:space","preserve"),w(i,"class","fill-current"),w(i,"stroke","none"),w(i,"x","0"),w(i,"y","40"),w(i,"id","svg_3"),w(i,"font-size","24"),w(i,"font-family","Noto Sans JP"),w(i,"text-anchor","start"),w(i,"xml:space","preserve"),w(C,"class","fill-current"),w(C,"stroke","none"),w(C,"x","0"),w(C,"y","100"),w(C,"id","svg_4"),w(C,"font-size","24"),w(C,"font-family","Noto Sans JP"),w(C,"text-anchor","start"),w(C,"xml:space","preserve"),w(f,"stroke-width","5"),w(f,"class","stroke-current"),w(f,"x1","113.53031"),w(f,"y1","91.75781"),w(f,"x2","158.37456"),w(f,"y2","91.75781"),w(f,"id","svg_9"),w(v,"stroke-width","5"),w(v,"class","stroke-current"),w(v,"x1","113.53031"),w(v,"y1","31.75879"),w(v,"x2","158.37455"),w(v,"y2","31.75879"),w(v,"id","svg_10"),w(c,"id","svg_12"),w(L,"id","svg_13"),w(L,"d","m170,182.07234l150,0l0,116l-150,0l0,-116z"),w(L,"opacity","undefined"),w(L,"stroke","none"),w(L,"fill","#FFDFB8"),w(U,"stroke","black"),w(U,"fill","black"),w(U,"x","208"),w(U,"y","250"),w(U,"id","svg_14"),w(U,"font-size","24"),w(U,"font-family","Noto Sans JP"),w(U,"text-anchor","start"),w(U,"xml:space","preserve"),w(V,"class","fill-current"),w(V,"stroke","none"),w(V,"x","0"),w(V,"y","220"),w(V,"id","svg_15"),w(V,"font-size","24"),w(V,"font-family","Noto Sans JP"),w(V,"text-anchor","start"),w(V,"xml:space","preserve"),w(E,"class","fill-current"),w(E,"stroke","none"),w(E,"x","0"),w(E,"y","280"),w(E,"id","svg_16"),w(E,"font-size","24"),w(E,"font-family","Noto Sans JP"),w(E,"text-anchor","start"),w(E,"xml:space","preserve"),w(z,"stroke-width","5"),w(z,"class","stroke-current"),w(z,"x1","113.53031"),w(z,"y1","271.07148"),w(z,"x2","158.37456"),w(z,"y2","271.07148"),w(z,"id","svg_17"),w(W,"stroke-width","5"),w(W,"class","stroke-current"),w(W,"x1","113.53031"),w(W,"y1","211.07246"),w(W,"x2","158.37455"),w(W,"y2","211.07246"),w(W,"id","svg_18"),w(d,"id","svg_19"),w(e,"width","320"),w(e,"height","300"),w(e,"xmlns","http://www.w3.org/2000/svg")},m(K,k){u(K,e,k),G(e,a),G(a,l),G(l,t),G(a,c),G(c,s),G(c,n),G(n,p),G(c,i),G(i,$),G(c,C),G(C,o),G(c,f),G(c,v),G(a,d),G(d,L),G(d,U),G(U,A),G(d,V),G(V,O),G(d,E),G(E,I),G(d,z),G(d,W)},p:B,i:B,o:B,d(K){K&&r(e)}}}class qt extends be{constructor(e){super(),we(this,e,null,Pt,ge,{})}}function Tt(m){let e,a="Introduction";return{c(){e=g("h1"),e.textContent=a},l(l){e=h(l,"H1",{"data-svelte-h":!0}),b(e)!=="svelte-v1pk48"&&(e.textContent=a)},m(l,t){u(l,e,t)},p:B,d(l){l&&r(e)}}}function St(m){let e,a='La <span data-fragment-index="1" class="fragment highlight-red">Programmation</span> Orientée Objet',l,t,c="La programmation, c'est manipuler des données...",s,n,p="<i>Comment structurer ces données et les traitements associés ?</i>";return{c(){e=g("h2"),e.innerHTML=a,l=_(),t=g("p"),t.textContent=c,s=_(),n=g("p"),n.innerHTML=p,this.h()},l(i){e=h(i,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-idwyvx"&&(e.innerHTML=a),l=x(i),t=h(i,"P",{"data-fragment-index":!0,class:!0,"data-svelte-h":!0}),b(t)!=="svelte-ccoak9"&&(t.textContent=c),s=x(i),n=h(i,"P",{"data-fragment-index":!0,class:!0,"data-svelte-h":!0}),b(n)!=="svelte-ja2tch"&&(n.innerHTML=p),this.h()},h(){w(t,"data-fragment-index","1"),w(t,"class","fragment"),w(n,"data-fragment-index","2"),w(n,"class","fragment")},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),u(i,n,$)},p:B,d(i){i&&(r(e),r(l),r(t),r(s),r(n))}}}function Mt(m){let e,a,l="Programmation procédurale",t,c,s="Programmation orientée objet",n,p,i,$,C,o;return p=new Ht({}),C=new qt({}),{c(){e=g("div"),a=g("h3"),a.textContent=l,t=_(),c=g("h3"),c.textContent=s,n=_(),j(p.$$.fragment),i=_(),$=g("div"),j(C.$$.fragment),this.h()},l(f){e=h(f,"DIV",{class:!0});var v=le(e);a=h(v,"H3",{"data-svelte-h":!0}),b(a)!=="svelte-cax56s"&&(a.textContent=l),t=x(v),c=h(v,"H3",{"data-fragment-index":!0,class:!0,"data-svelte-h":!0}),b(c)!=="svelte-1roygcu"&&(c.textContent=s),n=x(v),M(p.$$.fragment,v),i=x(v),$=h(v,"DIV",{"data-fragment-index":!0,class:!0});var d=le($);M(C.$$.fragment,d),d.forEach(r),v.forEach(r),this.h()},h(){w(c,"data-fragment-index","1"),w(c,"class","fragment"),w($,"data-fragment-index","1"),w($,"class","fragment"),w(e,"class","grid-cols-2 grid justify-items-center items-start")},m(f,v){u(f,e,v),G(e,a),G(e,t),G(e,c),G(e,n),S(p,e,null),G(e,i),G(e,$),S(C,$,null),o=!0},p:B,i(f){o||(T(p.$$.fragment,f),T(C.$$.fragment,f),o=!0)},o(f){q(p.$$.fragment,f),q(C.$$.fragment,f),o=!1},d(f){f&&r(e),P(p),P(C)}}}function jt(m){let e,a="<h3>Programmation procédurale</h3> <h3>Programmation orientée objet</h3> <ul><li>Les données et les traitements sont séparés</li> <li>Les données sont manipulées par des fonctions</li> <li>Les fonctions sont appelées procédures</li></ul> <ul><li>Les données et les traitements sont regroupés dans un objet</li> <li>Un objet est une entité qui regroupe des données et des traitements qui lui sont associés</li></ul>";return{c(){e=g("div"),e.innerHTML=a,this.h()},l(l){e=h(l,"DIV",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-1x5o9oi"&&(e.innerHTML=a),this.h()},h(){w(e,"class","grid-cols-2 grid justify-items-center items-start")},m(l,t){u(l,e,t)},p:B,d(l){l&&r(e)}}}function kt(m){let e=`
string nom = "Jean";
int age = 25;
string nom2 = "Pierre";
int age2 = 30;

direBonjour(nom, age){
	print("Bonjour " + nom 
	+ ", vous avez " + age + " ans");
}

direBonjour(nom, age);
direBonjour(nom2, age2);
`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function At(m){let e=`
class Personne {
	string nom;
	int age;
	
	direBonjour(){
		print("Bonjour " + nom 
		+ ", vous avez " + age + " ans");
	}
}
	var p1 = new Personne("Jean", 25)
	var p2 = new Personne("Pierre", 30)
	p1.direBonjour();
	p2.direBonjour();
`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Dt(m){let e,a,l="Programmation procédurale",t,c,s="Programmation orientée objet",n,p,i,$,C;return p=new ie({props:{$$slots:{default:[kt]},$$scope:{ctx:m}}}),$=new ie({props:{lines:"1-9",class:"fragment","data-fragment-index":"1",$$slots:{default:[At]},$$scope:{ctx:m}}}),{c(){e=g("div"),a=g("h3"),a.textContent=l,t=_(),c=g("h3"),c.textContent=s,n=_(),j(p.$$.fragment),i=_(),j($.$$.fragment),this.h()},l(o){e=h(o,"DIV",{class:!0});var f=le(e);a=h(f,"H3",{"data-svelte-h":!0}),b(a)!=="svelte-cax56s"&&(a.textContent=l),t=x(f),c=h(f,"H3",{class:!0,"data-fragment-index":!0,"data-svelte-h":!0}),b(c)!=="svelte-12kylpq"&&(c.textContent=s),n=x(f),M(p.$$.fragment,f),i=x(f),M($.$$.fragment,f),f.forEach(r),this.h()},h(){w(c,"class","fragment"),w(c,"data-fragment-index","1"),w(e,"class","grid-cols-2 grid justify-items-center items-start")},m(o,f){u(o,e,f),G(e,a),G(e,t),G(e,c),G(e,n),S(p,e,null),G(e,i),S($,e,null),C=!0},p(o,f){const v={};f&1&&(v.$$scope={dirty:f,ctx:o}),p.$set(v);const d={};f&1&&(d.$$scope={dirty:f,ctx:o}),$.$set(d)},i(o){C||(T(p.$$.fragment,o),T($.$$.fragment,o),C=!0)},o(o){q(p.$$.fragment,o),q($.$$.fragment,o),C=!1},d(o){o&&r(e),P(p),P($)}}}function Et(m){let e,a="La programmation orientée objet",l,t,c="Qu'est-ce que c'est ?",s,n,p=`La programmation orientée objet est un paradigme de programmation, c'est-à-dire une manière de\r
			programmer, qui repose sur la notion d'objets.`,i,$,C="Un objet est une entité qui regroupe des données et des traitements qui lui sont associés.",o,f,v="Un objet est censé représenter une entité du monde réel.",d,L,U="Il n'est pas obligatoire de programmer en POO !";return{c(){e=g("h2"),e.textContent=a,l=_(),t=g("h3"),t.textContent=c,s=_(),n=g("p"),n.textContent=p,i=_(),$=g("p"),$.textContent=C,o=_(),f=g("p"),f.textContent=v,d=_(),L=g("p"),L.textContent=U,this.h()},l(A){e=h(A,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-18a0qr8"&&(e.textContent=a),l=x(A),t=h(A,"H3",{"data-svelte-h":!0}),b(t)!=="svelte-a8zqi8"&&(t.textContent=c),s=x(A),n=h(A,"P",{"data-svelte-h":!0}),b(n)!=="svelte-1k4w8ku"&&(n.textContent=p),i=x(A),$=h(A,"P",{"data-svelte-h":!0}),b($)!=="svelte-12m33sn"&&($.textContent=C),o=x(A),f=h(A,"P",{"data-svelte-h":!0}),b(f)!=="svelte-vtaxgj"&&(f.textContent=v),d=x(A),L=h(A,"P",{class:!0,"data-svelte-h":!0}),b(L)!=="svelte-1dwz205"&&(L.textContent=U),this.h()},h(){w(L,"class","text-accent-200 font-bold")},m(A,V){u(A,e,V),u(A,l,V),u(A,t,V),u(A,s,V),u(A,n,V),u(A,i,V),u(A,$,V),u(A,o,V),u(A,f,V),u(A,d,V),u(A,L,V)},p:B,d(A){A&&(r(e),r(l),r(t),r(s),r(n),r(i),r($),r(o),r(f),r(d),r(L))}}}function It(m){let e,a="Un objet est censé représenter une entité du monde réel.",l,t,c=`Par exemple, <span data-fragment-index="3" class="fragment highlight-red">un chien, un chat</span>,
			<span data-fragment-index="3" class="fragment highlight-green">une moto, une voiture</span>,
			<span data-fragment-index="3" class="fragment highlight-blue">un ennemi, un PNJ</span>`,s,n,p=`Ou plus <span class="underline font-bold">génériquement</span>, un
			<span class="text-red-500">un animal</span>, un <span class="text-green-500">véhicule</span>,
			un <span class="text-blue-500">personnage</span>`;return{c(){e=g("p"),e.textContent=a,l=_(),t=g("p"),t.innerHTML=c,s=_(),n=g("p"),n.innerHTML=p,this.h()},l(i){e=h(i,"P",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-1te9lxn"&&(e.textContent=a),l=x(i),t=h(i,"P",{class:!0,"data-fragment-index":!0,"data-svelte-h":!0}),b(t)!=="svelte-12p87au"&&(t.innerHTML=c),s=x(i),n=h(i,"P",{class:!0,"data-fragment-index":!0,"data-svelte-h":!0}),b(n)!=="svelte-v03uzp"&&(n.innerHTML=p),this.h()},h(){w(e,"class","font-bold text-accent-200"),w(t,"class","fragment"),w(t,"data-fragment-index","2"),w(n,"class","fragment"),w(n,"data-fragment-index","3")},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),u(i,n,$)},p:B,d(i){i&&(r(e),r(l),r(t),r(s),r(n))}}}function zt(m){let e,a="La généricité",l,t,c="Généralisez vos concepts !",s,n,p='<ul><li><a href="#">Animal</a> <ul><li><a>Chien</a></li> <li><a>Chat</a></li></ul></li> <li><a href="#">Véhicule</a> <ul><li><a>Voiture</a></li> <li><a>Moto</a></li> <li class="fragment" data-fragment-index="1"><a>Bateau</a></li></ul></li> <li><a href="#">Personnage</a> <ul><li><a>Ennemi</a> <ul class="fragment" data-fragment-index="1"><li><a>Monstre</a></li> <li><a>Boss</a></li></ul></li> <li><a>PNJ</a></li></ul></li></ul>';return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.textContent=c,s=_(),n=g("div"),n.innerHTML=p,this.h()},l(i){e=h(i,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-1t0g1h3"&&(e.textContent=a),l=x(i),t=h(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-ptm47t"&&(t.textContent=c),s=x(i),n=h(i,"DIV",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1dkw2h"&&(n.innerHTML=p),this.h()},h(){w(e,"class","uppercase"),w(n,"class","tree scale-150")},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),u(i,n,$)},p:B,d(i){i&&(r(e),r(l),r(t),r(s),r(n))}}}function Ot(m){let e,a="Comment généraliser",l,t,c='En POO, généraliser s&#39;appelle <span class="text-important">abstraire, faire une abstraction</span>',s,n,p=`Par exemple: <br/>
			Si on vous demande de coder un système de location de voiture, soyez assuré, qu&#39;un jour ou l&#39;autre
			votre client vous demandera de prendre en charge les motos !<br/>
			Aussi soyez certain que s&#39;il propose des sièges auto pour enfant, il proposera un porte vélo, des
			chaînes pour la montagne ou des valises pour la moto`,i,$,C=`Evidemment, vous ne proposerez pas un porte vélo sur une moto !<br/>
			Pour autant que ce soit une moto ou une voiture, vous aurez plus ou moins le même code pour gérer
			la location, le retour, le paiement, etc...`;return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.innerHTML=c,s=_(),n=g("p"),n.innerHTML=p,i=_(),$=g("p"),$.innerHTML=C,this.h()},l(o){e=h(o,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-ykrbcj"&&(e.textContent=a),l=x(o),t=h(o,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1n8l9pz"&&(t.innerHTML=c),s=x(o),n=h(o,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-j2wzwr"&&(n.innerHTML=p),i=x(o),$=h(o,"P",{"data-svelte-h":!0}),b($)!=="svelte-zl5qb0"&&($.innerHTML=C),this.h()},h(){w(e,"class","uppercase"),w(n,"class","text-start text-[30px] p-3 bg-accent-950 font-serif")},m(o,f){u(o,e,f),u(o,l,f),u(o,t,f),u(o,s,f),u(o,n,f),u(o,i,f),u(o,$,f)},p:B,d(o){o&&(r(e),r(l),r(t),r(s),r(n),r(i),r($))}}}function Ut(m){let e=`
			@startuml
			!theme crt-amber
			skinparam backgroundColor transparent
			abstract class Vehicule {		
				+ double prixJour
				+ boolean disponible
				+ int km
				+ string immatriculation
			}
			class Voiture {
				+ int nbPortes
				+ int nbPlaces
			}
			class Moto {
				+ int cylindree
			}
			Vehicule <|-- Voiture
			Vehicule <|-- Moto

			abstract class Accessoire {
				+ double prixJour
				+ boolean disponible
				+ String identifiant
			}
			class SiegeAuto {
				+ int ageMax
			}
			class PorteVelo {
				+ int nbPlaces
			}
			class ChainesMontagne {
				+ string gamme
			}
			Accessoire <|-- SiegeAuto
			Accessoire <|-- PorteVelo
			Accessoire <|-- ChainesMontagne
			@enduml
			`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Vt(m){let e=`
			@startuml
			!theme crt-green
			skinparam backgroundColor transparent
			abstract class Louable{
				+ double prixJour
				+ boolean disponible
			}
			abstract class Vehicule extends Louable{		
				+ int km
				+ string immatriculation
			}
			class Voiture {
				+ int nbPortes
				+ int nbPlaces
			}
			class Moto {
				+ int cylindree
			}
			Vehicule <|-- Voiture
			Vehicule <|-- Moto

			abstract class Accessoire extends Louable {
				+ String identifiant
			}
			class SiegeAuto {
				+ int ageMax
			}
			class PorteVelo {
				+ int nbPlaces
			}
			class ChainesMontagne {
				+ string gamme
			}
			Accessoire <|-- SiegeAuto
			Accessoire <|-- PorteVelo
			Accessoire <|-- ChainesMontagne
			
			@enduml
			`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function yt(m){let e,a="Comment généraliser",l,t,c,s,n,p;return c=new Pe({props:{$$slots:{default:[Ut]},$$scope:{ctx:m}}}),n=new Pe({props:{className:"fragment",$$slots:{default:[Vt]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("div"),j(c.$$.fragment),s=_(),j(n.$$.fragment),this.h()},l(i){e=h(i,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-ykrbcj"&&(e.textContent=a),l=x(i),t=h(i,"DIV",{class:!0});var $=le(t);M(c.$$.fragment,$),s=x($),M(n.$$.fragment,$),$.forEach(r),this.h()},h(){w(e,"class","uppercase"),w(t,"class","flex flex-row justify-center items-baseline")},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),S(c,t,null),G(t,s),S(n,t,null),p=!0},p(i,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:i}),c.$set(C);const o={};$&1&&(o.$$scope={dirty:$,ctx:i}),n.$set(o)},i(i){p||(T(c.$$.fragment,i),T(n.$$.fragment,i),p=!0)},o(i){q(c.$$.fragment,i),q(n.$$.fragment,i),p=!1},d(i){i&&(r(e),r(l),r(t)),P(c),P(n)}}}function Bt(m){let e,a="Comment généraliser",l,t,c=`L&#39;opération que l&#39;on vient de voir s&#39;appelle un <i>refactoring</i>, cela nous rends fier
			d&#39;avoir un code parfaitement propre`,s,n,p=`Si vous l&#39;aviez fait dès le départ, vous auriez gagné plus de temps que si vous devez le faire
			plus tard, c&#39;est une <u>certitude</u> !`,i,$,C=`Le temps d'implémentation (BUILD) augmente si vous faites beaucoup de POO, mais la maintenance\r
			(RUN) coûte moins cher et inversement`;return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.innerHTML=c,s=_(),n=g("p"),n.innerHTML=p,i=_(),$=g("p"),$.textContent=C,this.h()},l(o){e=h(o,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-ykrbcj"&&(e.textContent=a),l=x(o),t=h(o,"P",{"data-svelte-h":!0}),b(t)!=="svelte-19capqt"&&(t.innerHTML=c),s=x(o),n=h(o,"P",{"data-svelte-h":!0}),b(n)!=="svelte-1p4u8wq"&&(n.innerHTML=p),i=x(o),$=h(o,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-1q6rsrm"&&($.textContent=C),this.h()},h(){w(e,"class","uppercase"),w($,"class","text-important")},m(o,f){u(o,e,f),u(o,l,f),u(o,t,f),u(o,s,f),u(o,n,f),u(o,i,f),u(o,$,f)},p:B,d(o){o&&(r(e),r(l),r(t),r(s),r(n),r(i),r($))}}}function Jt(m){let e,a="Comment généraliser",l,t,c="Un <i>bon</i> ingénieur logiciel sait jusqu&#39;à quel niveau il convient d&#39;abstraire",s,n,p="<li>Si vous ne le faites pas, vous devez tout casser pour ajouter une fonctionnalité</li> <li>Si vous le faites trop, votre client paie pour une fonctionnalité qu&#39;il n&#39;utilisera jamais</li>",i,$,C=`En entreprise, tout est question d&#39;équilibre et vient avec l&#39;expérience.
			<br/><span class="text-important">Dans ce module , faites le plus de zèle possible, exagérez !</span>`;return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.innerHTML=c,s=_(),n=g("ul"),n.innerHTML=p,i=_(),$=g("p"),$.innerHTML=C,this.h()},l(o){e=h(o,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-ykrbcj"&&(e.textContent=a),l=x(o),t=h(o,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1yhe1kd"&&(t.innerHTML=c),s=x(o),n=h(o,"UL",{"data-svelte-h":!0}),b(n)!=="svelte-td1gcp"&&(n.innerHTML=p),i=x(o),$=h(o,"P",{"data-svelte-h":!0}),b($)!=="svelte-1xonbz6"&&($.innerHTML=C),this.h()},h(){w(e,"class","uppercase")},m(o,f){u(o,e,f),u(o,l,f),u(o,t,f),u(o,s,f),u(o,n,f),u(o,i,f),u(o,$,f)},p:B,d(o){o&&(r(e),r(l),r(t),r(s),r(n),r(i),r($))}}}function Ft(m){let e,a='Vous venez d&#39;être confronté à un premier concept de la POO: <span class="text-important">l&#39;abstraction</span>. Nous avons abstrait le concept de véhicule en lieu et place de voiture et moto',l,t,c="Il existe d'autres concepts que nous allons voir en détail",s,n,p=`Retenez que la POO est un "outil", si vous faites du Java, même en codant mal,\r
			fondamentalement, vous faites de la POO compte tenu de la nature du langage`,i,$,C=`Si la programmation n'est qu'une suite de blocs de code tels des légos, la POO, c'est\r
			fabriquer des blocs intelligement que vous réutilisez, peu importe que vous construisiez un\r
			pont ou une maison.`;return{c(){e=g("p"),e.innerHTML=a,l=_(),t=g("p"),t.textContent=c,s=_(),n=g("p"),n.textContent=p,i=_(),$=g("p"),$.textContent=C},l(o){e=h(o,"P",{"data-svelte-h":!0}),b(e)!=="svelte-x8us8p"&&(e.innerHTML=a),l=x(o),t=h(o,"P",{"data-svelte-h":!0}),b(t)!=="svelte-shulm4"&&(t.textContent=c),s=x(o),n=h(o,"P",{"data-svelte-h":!0}),b(n)!=="svelte-1j5v9so"&&(n.textContent=p),i=x(o),$=h(o,"P",{"data-svelte-h":!0}),b($)!=="svelte-1mpxnz5"&&($.textContent=C)},m(o,f){u(o,e,f),u(o,l,f),u(o,t,f),u(o,s,f),u(o,n,f),u(o,i,f),u(o,$,f)},p:B,d(o){o&&(r(e),r(l),r(t),r(s),r(n),r(i),r($))}}}function Nt(m){let e,a,l,t,c,s,n,p,i,$,C,o,f,v,d,L,U,A,V,O,E,I,z,W,K,k;return e=new y({props:{$$slots:{default:[Tt]},$$scope:{ctx:m}}}),l=new y({props:{$$slots:{default:[St]},$$scope:{ctx:m}}}),c=new y({props:{$$slots:{default:[Mt]},$$scope:{ctx:m}}}),n=new y({props:{$$slots:{default:[jt]},$$scope:{ctx:m}}}),i=new y({props:{$$slots:{default:[Dt]},$$scope:{ctx:m}}}),C=new y({props:{$$slots:{default:[Et]},$$scope:{ctx:m}}}),f=new y({props:{$$slots:{default:[It]},$$scope:{ctx:m}}}),d=new y({props:{$$slots:{default:[zt]},$$scope:{ctx:m}}}),U=new y({props:{$$slots:{default:[Ot]},$$scope:{ctx:m}}}),V=new y({props:{$$slots:{default:[yt]},$$scope:{ctx:m}}}),E=new y({props:{data_background_color:"#00353F",$$slots:{default:[Bt]},$$scope:{ctx:m}}}),z=new y({props:{data_background_color:"#00353F",$$slots:{default:[Jt]},$$scope:{ctx:m}}}),K=new y({props:{$$slots:{default:[Ft]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment),a=_(),j(l.$$.fragment),t=_(),j(c.$$.fragment),s=_(),j(n.$$.fragment),p=_(),j(i.$$.fragment),$=_(),j(C.$$.fragment),o=_(),j(f.$$.fragment),v=_(),j(d.$$.fragment),L=_(),j(U.$$.fragment),A=_(),j(V.$$.fragment),O=_(),j(E.$$.fragment),I=_(),j(z.$$.fragment),W=_(),j(K.$$.fragment)},l(D){M(e.$$.fragment,D),a=x(D),M(l.$$.fragment,D),t=x(D),M(c.$$.fragment,D),s=x(D),M(n.$$.fragment,D),p=x(D),M(i.$$.fragment,D),$=x(D),M(C.$$.fragment,D),o=x(D),M(f.$$.fragment,D),v=x(D),M(d.$$.fragment,D),L=x(D),M(U.$$.fragment,D),A=x(D),M(V.$$.fragment,D),O=x(D),M(E.$$.fragment,D),I=x(D),M(z.$$.fragment,D),W=x(D),M(K.$$.fragment,D)},m(D,H){S(e,D,H),u(D,a,H),S(l,D,H),u(D,t,H),S(c,D,H),u(D,s,H),S(n,D,H),u(D,p,H),S(i,D,H),u(D,$,H),S(C,D,H),u(D,o,H),S(f,D,H),u(D,v,H),S(d,D,H),u(D,L,H),S(U,D,H),u(D,A,H),S(V,D,H),u(D,O,H),S(E,D,H),u(D,I,H),S(z,D,H),u(D,W,H),S(K,D,H),k=!0},p(D,H){const R={};H&1&&(R.$$scope={dirty:H,ctx:D}),e.$set(R);const se={};H&1&&(se.$$scope={dirty:H,ctx:D}),l.$set(se);const re={};H&1&&(re.$$scope={dirty:H,ctx:D}),c.$set(re);const Q={};H&1&&(Q.$$scope={dirty:H,ctx:D}),n.$set(Q);const Z={};H&1&&(Z.$$scope={dirty:H,ctx:D}),i.$set(Z);const ae={};H&1&&(ae.$$scope={dirty:H,ctx:D}),C.$set(ae);const N={};H&1&&(N.$$scope={dirty:H,ctx:D}),f.$set(N);const ee={};H&1&&(ee.$$scope={dirty:H,ctx:D}),d.$set(ee);const ue={};H&1&&(ue.$$scope={dirty:H,ctx:D}),U.$set(ue);const fe={};H&1&&(fe.$$scope={dirty:H,ctx:D}),V.$set(fe);const ce={};H&1&&(ce.$$scope={dirty:H,ctx:D}),E.$set(ce);const me={};H&1&&(me.$$scope={dirty:H,ctx:D}),z.$set(me);const pe={};H&1&&(pe.$$scope={dirty:H,ctx:D}),K.$set(pe)},i(D){k||(T(e.$$.fragment,D),T(l.$$.fragment,D),T(c.$$.fragment,D),T(n.$$.fragment,D),T(i.$$.fragment,D),T(C.$$.fragment,D),T(f.$$.fragment,D),T(d.$$.fragment,D),T(U.$$.fragment,D),T(V.$$.fragment,D),T(E.$$.fragment,D),T(z.$$.fragment,D),T(K.$$.fragment,D),k=!0)},o(D){q(e.$$.fragment,D),q(l.$$.fragment,D),q(c.$$.fragment,D),q(n.$$.fragment,D),q(i.$$.fragment,D),q(C.$$.fragment,D),q(f.$$.fragment,D),q(d.$$.fragment,D),q(U.$$.fragment,D),q(V.$$.fragment,D),q(E.$$.fragment,D),q(z.$$.fragment,D),q(K.$$.fragment,D),k=!1},d(D){D&&(r(a),r(t),r(s),r(p),r($),r(o),r(v),r(L),r(A),r(O),r(I),r(W)),P(e,D),P(l,D),P(c,D),P(n,D),P(i,D),P(C,D),P(f,D),P(d,D),P(U,D),P(V,D),P(E,D),P(z,D),P(K,D)}}}function Rt(m){let e,a;return e=new y({props:{$$slots:{default:[Nt]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,t){S(e,l,t),a=!0},p(l,[t]){const c={};t&1&&(c.$$scope={dirty:t,ctx:l}),e.$set(c)},i(l){a||(T(e.$$.fragment,l),a=!0)},o(l){q(e.$$.fragment,l),a=!1},d(l){P(e,l)}}}class Gt extends be{constructor(e){super(),we(this,e,null,Rt,ge,{})}}function Qt(m){let e,a=`La composition permet de créer des objets complexes en combinant des objets plus simples.\r
			C'est comme assembler des briques Lego pour construire une structure plus grande.`,l,t,c=`En POO, la composition consiste à avoir des instances de classes en tant qu'attributs d'une autre classe.\r
			Cela rappelle la notion de clé étrangère en base de données.`;return{c(){e=g("p"),e.textContent=a,l=_(),t=g("p"),t.textContent=c},l(s){e=h(s,"P",{"data-svelte-h":!0}),b(e)!=="svelte-8yxrg0"&&(e.textContent=a),l=x(s),t=h(s,"P",{"data-svelte-h":!0}),b(t)!=="svelte-welq6c"&&(t.textContent=c)},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function Wt(m){let e=`
	class Moteur {
	  +demarrer()
	}

	class Roue {
	  +tourner()
	}

	class Voiture {
	  -moteur: Moteur
	  -roues: Roue[]
	  +conduire()
	}
	`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Kt(m){let e,a=`Par exemple, une voiture est composée de plusieurs parties : un moteur, des roues, un châssis, etc.\r
			Chaque partie peut être une instance d'une classe.`,l,t,c,s,n="La composition favorise la réutilisation du code et rend le système plus flexible. Par exemple, on peut remplacer le moteur d'une voiture sans modifier la classe Voiture.",p;return t=new Pe({props:{$$slots:{default:[Wt]},$$scope:{ctx:m}}}),{c(){e=g("p"),e.textContent=a,l=_(),j(t.$$.fragment),c=_(),s=g("p"),s.textContent=n},l(i){e=h(i,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1lp8e9i"&&(e.textContent=a),l=x(i),M(t.$$.fragment,i),c=x(i),s=h(i,"P",{"data-svelte-h":!0}),b(s)!=="svelte-1ahe1ym"&&(s.textContent=n)},m(i,$){u(i,e,$),u(i,l,$),S(t,i,$),u(i,c,$),u(i,s,$),p=!0},p(i,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:i}),t.$set(C)},i(i){p||(T(t.$$.fragment,i),p=!0)},o(i){q(t.$$.fragment,i),p=!1},d(i){i&&(r(e),r(l),r(c),r(s)),P(t,i)}}}function Zt(m){let e,a=`<p>L&#39;un des intérêts de la programmation orientée objet réside dans les relations que les objets entretiennent entre eux.
				Ces relations, construites par les développeurs, constituent l&#39;architecture d&#39;une application.
				Il existe deux relations fondamentales en programmation objet :</p> <dl class="smaller"><dt><strong>est un</strong> (<em>is-a</em>)</dt><dd><p>Cette relation permet d&#39;exprimer qu&#39;une classe peut être assimilée à une autre classe, représentant une notion plus abstraite ou plus générale.
						On parle d&#39;<span class="text-important">héritage</span> pour désigner ce mécanisme.</p> </dd><dt><strong>a un</strong> (<em>has-a</em>)</dt><dd><p>Cette relation permet d&#39;exprimer qu&#39;une classe dépend des services d&#39;une autre.
						On parle également de relation de <span class="text-important">composition</span> pour désigner ce type de relation.</p></dd></dl>`;return{c(){e=g("div"),e.innerHTML=a,this.h()},l(l){e=h(l,"DIV",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-swi48g"&&(e.innerHTML=a),this.h()},h(){w(e,"class","")},m(l,t){u(l,e,t)},p:B,d(l){l&&r(e)}}}function Yt(m){let e=`
		abstract class Animal {
		  +crier()
		}

		class Chien extends Animal {
		  +crier()
		}

		class Chat extends Animal {
		  +crier()
		}

		class Maitre {
		  -animal: Animal
		  +promenerAnimal()
		}
		  Maitre *-- Animal
		`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Xt(m){let e=`
		abstract class Animal {
			abstract void crier();
		}
		class Maitre {
			Animal animal;
			void presenterAnimal() {
				System.out.println("Voici le cri de votre animal");
				animal.crier();
			}
		}
		class Chien extends Animal {
			void crier() {
				System.out.println("Wouaf wouaf");
			}
		}

		class Chat extends Animal {
			void crier() {
				System.out.println("Miaou miaou");
			}
		}

		
		`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function el(m){let e,a,l,t,c;return a=new Pe({props:{$$slots:{default:[Yt]},$$scope:{ctx:m}}}),t=new ie({props:{class:"language-java",$$slots:{default:[Xt]},$$scope:{ctx:m}}}),{c(){e=g("div"),j(a.$$.fragment),l=_(),j(t.$$.fragment),this.h()},l(s){e=h(s,"DIV",{class:!0});var n=le(e);M(a.$$.fragment,n),l=x(n),M(t.$$.fragment,n),n.forEach(r),this.h()},h(){w(e,"class","flex flex-row items-center")},m(s,n){u(s,e,n),S(a,e,null),G(e,l),S(t,e,null),c=!0},p(s,n){const p={};n&1&&(p.$$scope={dirty:n,ctx:s}),a.$set(p);const i={};n&1&&(i.$$scope={dirty:n,ctx:s}),t.$set(i)},i(s){c||(T(a.$$.fragment,s),T(t.$$.fragment,s),c=!0)},o(s){q(a.$$.fragment,s),q(t.$$.fragment,s),c=!1},d(s){s&&r(e),P(a),P(t)}}}function tl(m){let e,a=`Normalement, le maître n'est pas censé adopter le comportement propre à un animal.\r
			Il possède un animal, mais il n'est pas possible de déterminer de quel type d'animal il s'agit.\r
			Chaque langage propose un moyen de tester le type d'un objet.`;return{c(){e=g("p"),e.textContent=a},l(l){e=h(l,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1dnx4w"&&(e.textContent=a)},m(l,t){u(l,e,t)},p:B,d(l){l&&r(e)}}}function ll(m){let e,a="Par exemple, on souhaite promener l'animal uniquement s'il s'agit d'un chien.",l,t,c="Si l&#39;on veut faire cela de manière propre, on devrait créer un attribut <code>animalPromenable</code> dans la classe Animal.",s,n,p="Toutefois, la POO est un concept, pas une règle absolue.",i,$,C="Il est possible de tester si un Animal est un Chien depuis la classe maître";return{c(){e=g("p"),e.textContent=a,l=_(),t=g("p"),t.innerHTML=c,s=_(),n=g("p"),n.textContent=p,i=_(),$=g("p"),$.textContent=C},l(o){e=h(o,"P",{"data-svelte-h":!0}),b(e)!=="svelte-apbbcl"&&(e.textContent=a),l=x(o),t=h(o,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1u2q183"&&(t.innerHTML=c),s=x(o),n=h(o,"P",{"data-svelte-h":!0}),b(n)!=="svelte-65dqp1"&&(n.textContent=p),i=x(o),$=h(o,"P",{"data-svelte-h":!0}),b($)!=="svelte-1fvo9t0"&&($.textContent=C)},m(o,f){u(o,e,f),u(o,l,f),u(o,t,f),u(o,s,f),u(o,n,f),u(o,i,f),u(o,$,f)},p:B,d(o){o&&(r(e),r(l),r(t),r(s),r(n),r(i),r($))}}}function sl(m){let e=`
				class Maitre {
					Animal animal;
					void promenerAnimal() {
						if (animal instanceof Chien) {
							System.out.println("On va promener le chien");
							((Chien) animal).crier();
						} else {
							System.out.println("Cet animal ne peut pas être promené");
						}
					}
				}
				`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function nl(m){let e,a="Cast et instanceof",l,t,c=`En Java, on peut utiliser l&#39;opérateur <code>instanceof</code> pour vérifier si un objet est une
			instance d&#39;une classe spécifique.
			Pour convertir un objet en une instance de classe spécifique, on utilise un <code>(cast)</code>.`,s,n,p,i,$=`Dans cet exemple, on vérifie si l&#39;animal est une instance de la classe <code>Chien</code>
			avant de le promener. Si c&#39;est le cas, on effectue un cast pour appeler la méthode
			<code>crier</code>
			spécifique à la classe <code>Chien</code>.`,C;return n=new ie({props:{class:"language-java",$$slots:{default:[sl]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.innerHTML=c,s=_(),j(n.$$.fragment),p=_(),i=g("p"),i.innerHTML=$},l(o){e=h(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-vuznue"&&(e.textContent=a),l=x(o),t=h(o,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1eg9qwa"&&(t.innerHTML=c),s=x(o),M(n.$$.fragment,o),p=x(o),i=h(o,"P",{"data-svelte-h":!0}),b(i)!=="svelte-1p8crmu"&&(i.innerHTML=$)},m(o,f){u(o,e,f),u(o,l,f),u(o,t,f),u(o,s,f),S(n,o,f),u(o,p,f),u(o,i,f),C=!0},p(o,f){const v={};f&1&&(v.$$scope={dirty:f,ctx:o}),n.$set(v)},i(o){C||(T(n.$$.fragment,o),C=!0)},o(o){q(n.$$.fragment,o),C=!1},d(o){o&&(r(e),r(l),r(t),r(s),r(p),r(i)),P(n,o)}}}function il(m){let e,a="La composition",l,t,c,s,n,p,i,$,C,o,f,v,d,L,U;return t=new y({props:{$$slots:{default:[Qt]},$$scope:{ctx:m}}}),s=new y({props:{$$slots:{default:[Kt]},$$scope:{ctx:m}}}),p=new y({props:{$$slots:{default:[Zt]},$$scope:{ctx:m}}}),$=new y({props:{$$slots:{default:[el]},$$scope:{ctx:m}}}),o=new y({props:{$$slots:{default:[tl]},$$scope:{ctx:m}}}),v=new y({props:{$$slots:{default:[ll]},$$scope:{ctx:m}}}),L=new y({props:{className:"scale-90",$$slots:{default:[nl]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),j(t.$$.fragment),c=_(),j(s.$$.fragment),n=_(),j(p.$$.fragment),i=_(),j($.$$.fragment),C=_(),j(o.$$.fragment),f=_(),j(v.$$.fragment),d=_(),j(L.$$.fragment)},l(A){e=h(A,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1dl0775"&&(e.textContent=a),l=x(A),M(t.$$.fragment,A),c=x(A),M(s.$$.fragment,A),n=x(A),M(p.$$.fragment,A),i=x(A),M($.$$.fragment,A),C=x(A),M(o.$$.fragment,A),f=x(A),M(v.$$.fragment,A),d=x(A),M(L.$$.fragment,A)},m(A,V){u(A,e,V),u(A,l,V),S(t,A,V),u(A,c,V),S(s,A,V),u(A,n,V),S(p,A,V),u(A,i,V),S($,A,V),u(A,C,V),S(o,A,V),u(A,f,V),S(v,A,V),u(A,d,V),S(L,A,V),U=!0},p(A,V){const O={};V&1&&(O.$$scope={dirty:V,ctx:A}),t.$set(O);const E={};V&1&&(E.$$scope={dirty:V,ctx:A}),s.$set(E);const I={};V&1&&(I.$$scope={dirty:V,ctx:A}),p.$set(I);const z={};V&1&&(z.$$scope={dirty:V,ctx:A}),$.$set(z);const W={};V&1&&(W.$$scope={dirty:V,ctx:A}),o.$set(W);const K={};V&1&&(K.$$scope={dirty:V,ctx:A}),v.$set(K);const k={};V&1&&(k.$$scope={dirty:V,ctx:A}),L.$set(k)},i(A){U||(T(t.$$.fragment,A),T(s.$$.fragment,A),T(p.$$.fragment,A),T($.$$.fragment,A),T(o.$$.fragment,A),T(v.$$.fragment,A),T(L.$$.fragment,A),U=!0)},o(A){q(t.$$.fragment,A),q(s.$$.fragment,A),q(p.$$.fragment,A),q($.$$.fragment,A),q(o.$$.fragment,A),q(v.$$.fragment,A),q(L.$$.fragment,A),U=!1},d(A){A&&(r(e),r(l),r(c),r(n),r(i),r(C),r(f),r(d)),P(t,A),P(s,A),P(p,A),P($,A),P(o,A),P(v,A),P(L,A)}}}function rl(m){let e,a;return e=new y({props:{$$slots:{default:[il]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,t){S(e,l,t),a=!0},p(l,[t]){const c={};t&1&&(c.$$scope={dirty:t,ctx:l}),e.$set(c)},i(l){a||(T(e.$$.fragment,l),a=!0)},o(l){q(e.$$.fragment,l),a=!1},d(l){P(e,l)}}}class al extends be{constructor(e){super(),we(this,e,null,rl,ge,{})}}function ul(m){let e=`
                abstract class Animal {}
                abstract class AnimalVolant extends Animal {}
                abstract class AnimalNageur extends Animal {}
                class Canard extends AnimalVolant, AnimalNageur {}
            `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function ol(m){let e,a="L'héritage multiple",l,t,c="Comment hériter de deux classes ?",s,n,p,i,$=`En Java, ce n&#39;est pas possible !
			<br/> En revanche, on peut utiliser une interface pour simuler l&#39;héritage multiple.`,C;return n=new Pe({props:{$$slots:{default:[ul]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.textContent=c,s=_(),j(n.$$.fragment),p=_(),i=g("p"),i.innerHTML=$,this.h()},l(o){e=h(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-lz4bxy"&&(e.textContent=a),l=x(o),t=h(o,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1py5itu"&&(t.textContent=c),s=x(o),M(n.$$.fragment,o),p=x(o),i=h(o,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-mtdftf"&&(i.innerHTML=$),this.h()},h(){w(i,"class","fragment")},m(o,f){u(o,e,f),u(o,l,f),u(o,t,f),u(o,s,f),S(n,o,f),u(o,p,f),u(o,i,f),C=!0},p(o,f){const v={};f&1&&(v.$$scope={dirty:f,ctx:o}),n.$set(v)},i(o){C||(T(n.$$.fragment,o),C=!0)},o(o){q(n.$$.fragment,o),C=!1},d(o){o&&(r(e),r(l),r(t),r(s),r(p),r(i)),P(n,o)}}}function $l(m){let e,a;return e=new y({props:{$$slots:{default:[ol]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,t){S(e,l,t),a=!0},p(l,t){const c={};t&1&&(c.$$scope={dirty:t,ctx:l}),e.$set(c)},i(l){a||(T(e.$$.fragment,l),a=!0)},o(l){q(e.$$.fragment,l),a=!1},d(l){P(e,l)}}}function fl(m){let e=`
    
    public interface ArticleLouable {
      float reserver(Date from, Date to); 
      float rendre(int penalite);    
    }
        `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function cl(m){let e,a="Une interface est un type de référence similaire à une classe abstraite qui ne contient que des méthodes abstraites.",l,t,c=`Une interface n'a pas de code "par défaut", seulement des signatures de méthodes.`,s,n,p;return n=new ie({props:{$$slots:{default:[fl]},$$scope:{ctx:m}}}),{c(){e=g("p"),e.textContent=a,l=_(),t=g("p"),t.textContent=c,s=_(),j(n.$$.fragment)},l(i){e=h(i,"P",{"data-svelte-h":!0}),b(e)!=="svelte-knqkk"&&(e.textContent=a),l=x(i),t=h(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1phkx1u"&&(t.textContent=c),s=x(i),M(n.$$.fragment,i)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),S(n,i,$),p=!0},p(i,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:i}),n.$set(C)},i(i){p||(T(n.$$.fragment,i),p=!0)},o(i){q(n.$$.fragment,i),p=!1},d(i){i&&(r(e),r(l),r(t),r(s)),P(n,i)}}}function pl(m){let e,a="Implémentation d’une interface",l,t,c=`Une classe signale les interfaces qu’elle implémente grâce au mot-clé <code>implements</code>.
			Une classe concrète doit fournir une implémentation pour toutes les méthodes d’une interface,
			soit dans sa déclaration, soit parce qu’elle en hérite.`;return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.innerHTML=c},l(s){e=h(s,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-6vv8ym"&&(e.textContent=a),l=x(s),t=h(s,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1vu2bky"&&(t.innerHTML=c)},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function ml(m){let e=`
    public class SiegeAuto extends Accessoire implements ArticleLouable {
    
        @Override
        public float reserver(Date from, Date to) {
        // ...
        }
    
        @Override
        public float rendre(int penalite) {
        // ...
        }
    }
    `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function dl(m){let e,a="Implémentation d’une interface",l,t,c;return t=new ie({props:{className:"h-[70vh]",$$slots:{default:[ml]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),j(t.$$.fragment)},l(s){e=h(s,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-6vv8ym"&&(e.textContent=a),l=x(s),M(t.$$.fragment,s)},m(s,n){u(s,e,n),u(s,l,n),S(t,s,n),c=!0},p(s,n){const p={};n&1&&(p.$$scope={dirty:n,ctx:s}),t.$set(p)},i(s){c||(T(t.$$.fragment,s),c=!0)},o(s){q(t.$$.fragment,s),c=!1},d(s){s&&(r(e),r(l)),P(t,s)}}}function vl(m){let e,a="Implémentation d’une interface",l,t,c=`Une interface permet de mutualiser une implémentation entre des classes qui n’ont pas de lien
			d’héritage.<br/>
			Si une classe implémente une interface, ses classes dérivées héritent de cette implémentation,
			mais il est toutefois possible de la surcharger.`;return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.innerHTML=c},l(s){e=h(s,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-6vv8ym"&&(e.textContent=a),l=x(s),t=h(s,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1p8gsb2"&&(t.innerHTML=c)},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function xl(m){let e,a="Comment choisir entre une classe abstraite et une interface ?",l,t,c=`<li><b>Classe abstraite</b> : Si, fondamentalement, on peut dire &quot;Un Dauphin est un Animal&quot;,
				alors, vous <i>pouvez</i> utiliser une classe abstraite.<br/></li> <li><b>Interface</b> : S&#39;il est plus juste de dire &quot;Un Dauphin peut nager&quot;, alors vous
				<i>devriez</i>
				utiliser une interface.
				<ul><li>Si quelque chose qui n&#39;aurait rien à voir avec vos animaux pouvait nager, utilisez une
						interface.<br/>
						Par exemple, un avion et un oiseau peuvent voler, mais ils n&#39;ont rien à voir l&#39;un avec l&#39;autre.</li> <li>Sinon, prévoyez plutôt une interface si vous pensez qu&#39;une classe fille pourrait avoir besoin
						d&#39;hériter de plusieurs classes.</li></ul></li>`;return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("ul"),t.innerHTML=c,this.h()},l(s){e=h(s,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-95djsx"&&(e.textContent=a),l=x(s),t=h(s,"UL",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-exxt3p"&&(t.innerHTML=c),this.h()},h(){w(t,"class","text-4xl")},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function _l(m){let e=`
            @startuml
            !theme crt-green
            skinparam backgroundColor transparent
            interface Nager {
                + nager()
            }

            interface Pondre {
                + pondre()
            }

            abstract class Animal
            abstract class Mammifère extends Animal
            abstract class Reptile extends Animal

            class Dauphin extends Mammifère implements Nager
            class Crocodile extends Reptile implements Nager
            class TortueMarine extends Reptile implements Nager, Pondre
            class Lézard extends Reptile implements Pondre
            class Lion extends Mammifère
            @enduml
        `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Cl(m){let e=`
                @startuml
                !theme crt-amber
                skinparam backgroundColor transparent
                abstract class Animal
                abstract class Mammifère extends Animal
                abstract class Reptile extends Animal

                abstract class MammifèreNageur extends Mammifère {
                    + nager()
                }

                abstract class ReptileNageur extends Reptile {
                    + nager()
                }

                abstract class ReptilePondeur extends Reptile {
                    + pondre()
                }

                abstract class ReptileNageurPondeur extends Reptile {
                    + nager()
                    + pondre()
                }

                class Dauphin extends MammifèreNageur
                class Crocodile extends ReptileNageur
                class TortueMarine extends ReptileNageurPondeur
                class Lézard extends ReptilePondeur
                class Lion extends Mammifère
                @enduml

                `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function hl(m){let e,a="Comment choisir entre une classe abstraite et une interface ?",l,t,c,s,n,p;return c=new Pe({props:{$$slots:{default:[_l]},$$scope:{ctx:m}}}),n=new Pe({props:{$$slots:{default:[Cl]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("div"),j(c.$$.fragment),s=_(),j(n.$$.fragment),this.h()},l(i){e=h(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-95djsx"&&(e.textContent=a),l=x(i),t=h(i,"DIV",{class:!0});var $=le(t);M(c.$$.fragment,$),s=x($),M(n.$$.fragment,$),$.forEach(r),this.h()},h(){w(t,"class","flex flex-row justify-center items-center")},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),S(c,t,null),G(t,s),S(n,t,null),p=!0},p(i,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:i}),c.$set(C);const o={};$&1&&(o.$$scope={dirty:$,ctx:i}),n.$set(o)},i(i){p||(T(c.$$.fragment,i),T(n.$$.fragment,i),p=!0)},o(i){q(c.$$.fragment,i),q(n.$$.fragment,i),p=!1},d(i){i&&(r(e),r(l),r(t)),P(c),P(n)}}}function gl(m){let e=`
            public class BassinAquatique {
                public void faireNager(Nageur nageur) {
                    nageur.nager();
                    // Ici, qu'ils soient un humain, un dauphin ou un crocodile, 
                    // les instances de ces classes peuvent nager 
                    // peu importe que ce soit des mammifères ou des reptiles
                }
            }
            `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function bl(m){let e,a="Préambule au polymorphisme",l,t,c="Vos méthodes peuvent prendre en paramètre une interface, ce qui permet de passer n'importe quel objet qui l'implémente.",s,n,p;return n=new ie({props:{class:" highlighter language-java",$$slots:{default:[gl]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.textContent=c,s=_(),j(n.$$.fragment)},l(i){e=h(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-mwdtiv"&&(e.textContent=a),l=x(i),t=h(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1nz7nr5"&&(t.textContent=c),s=x(i),M(n.$$.fragment,i)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),S(n,i,$),p=!0},p(i,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:i}),n.$set(C)},i(i){p||(T(n.$$.fragment,i),p=!0)},o(i){q(n.$$.fragment,i),p=!1},d(i){i&&(r(e),r(l),r(t),r(s)),P(n,i)}}}function wl(m){let e=`
            interface Herbivore {
                void manger(Plante plante);
            }
            interface Carnivore {
                void manger(Animal animal);
            }
            interface Omnivore extends Herbivore, Carnivore {
                void manger(Plante plante);
                void manger(Animal animal);
            }

            `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Ll(m){let e,a="Héritage d’interface",l,t,c=`Une interface peut hériter d’une ou plusieurs autres interfaces. Dans ce cas, elle hérite de
			toutes les méthodes déclarées dans les interfaces parentes. Pour déclarer un héritage, on
			utilise le mot-clé <code>extends</code>.`,s,n,p;return n=new ie({props:{className:"highlighter language-java",$$slots:{default:[wl]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.innerHTML=c,s=_(),j(n.$$.fragment)},l(i){e=h(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-j0acen"&&(e.textContent=a),l=x(i),t=h(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-tpi5ka"&&(t.innerHTML=c),s=x(i),M(n.$$.fragment,i)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),S(n,i,$),p=!0},p(i,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:i}),n.$set(C)},i(i){p||(T(n.$$.fragment,i),p=!0)},o(i){q(n.$$.fragment,i),p=!1},d(i){i&&(r(e),r(l),r(t),r(s)),P(n,i)}}}function Hl(m){let e=`
                interface Omnivore extends Herbivore, Carnivore {...}
                class Humain implements Omnivore {...}

                var bob = new Humain();
                if (bob instanceof Carnivore) {
                    System.out.println("bob mange de la viande");
                }
                if (bob instanceof Herbivore) {
                    System.out.println("bob mange des plantes");
                }
            `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Pl(m){let e,a="Héritage d’interface",l,t,c="Comme chaque interface introduit un nouveau type, il est possible de contrôler, grâce au mot-clé <code>instanceof</code>, qu’une variable, un paramètre ou un attribut est bien une instance compatible avec cette interface.",s,n,p;return n=new ie({props:{className:"highlighter language-java",$$slots:{default:[Hl]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.innerHTML=c,s=_(),j(n.$$.fragment)},l(i){e=h(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-j0acen"&&(e.textContent=a),l=x(i),t=h(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-19uyonh"&&(t.innerHTML=c),s=x(i),M(n.$$.fragment,i)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),S(n,i,$),p=!0},p(i,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:i}),n.$set(C)},i(i){p||(T(n.$$.fragment,i),p=!0)},o(i){q(n.$$.fragment,i),p=!1},d(i){i&&(r(e),r(l),r(t),r(s)),P(n,i)}}}function ql(m){let e=`
            interface IConfidential {}
            class DossierMedical implements IConfidential {}
            ...
            void logguerDansUnFichier(Object p) {
                if (p instanceof IConfidential) {
                    return; // On ne loggue pas les informations confidentielles
                }
            }
            `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Tl(m){let e,a="Les interfaces marqueurs",l,t,c=`Une interface sans méthode est appelée une interface marqueur. <br/>
            Elle est utilisée pour étiqueter une classe.`,s,n,p="On les utilise ainsi",i,$,C,o,f="Rappelez-vous, comme on peut implémenter plusieurs interfaces, n'importe quelle classe peut implémenter une interface marqueur.",v;return $=new ie({props:{className:"highlighter language-java",$$slots:{default:[ql]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.innerHTML=c,s=_(),n=g("p"),n.textContent=p,i=_(),j($.$$.fragment),C=_(),o=g("p"),o.textContent=f},l(d){e=h(d,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-9j49lb"&&(e.textContent=a),l=x(d),t=h(d,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1oln2yg"&&(t.innerHTML=c),s=x(d),n=h(d,"P",{"data-svelte-h":!0}),b(n)!=="svelte-1pg3gma"&&(n.textContent=p),i=x(d),M($.$$.fragment,d),C=x(d),o=h(d,"P",{"data-svelte-h":!0}),b(o)!=="svelte-zr6vig"&&(o.textContent=f)},m(d,L){u(d,e,L),u(d,l,L),u(d,t,L),u(d,s,L),u(d,n,L),u(d,i,L),S($,d,L),u(d,C,L),u(d,o,L),v=!0},p(d,L){const U={};L&1&&(U.$$scope={dirty:L,ctx:d}),$.$set(U)},i(d){v||(T($.$$.fragment,d),v=!0)},o(d){q($.$$.fragment,d),v=!1},d(d){d&&(r(e),r(l),r(t),r(s),r(n),r(i),r(C),r(o)),P($,d)}}}function Sl(m){let e,a="Conventions de nommage",l,t,c=`<li>Les interfaces sont nommées avec un nom qui commence par &quot;I&quot; suivi d&#39;un nom.</li> <li>Le nom est un adjectif ou un nom qui décrit un comportement.</li> <li>Exemple :
                <ul><li>IVolant</li> <li>IConfidentiel</li> <li><s>INageur</s></li> <li><s>Bateau</s></li> <li><s>Vitesse</s></li></ul></li>`;return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("ul"),t.innerHTML=c},l(s){e=h(s,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1cx5ud7"&&(e.textContent=a),l=x(s),t=h(s,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-16lqdjx"&&(t.innerHTML=c)},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function Ml(m){let e,a="Les interfaces",l,t,c,s,n,p,i,$,C,o,f,v,d,L,U,A,V,O,E,I,z,W,K;return t=new y({props:{$$slots:{default:[cl]},$$scope:{ctx:m}}}),s=new y({props:{$$slots:{default:[pl]},$$scope:{ctx:m}}}),p=new y({props:{$$slots:{default:[dl]},$$scope:{ctx:m}}}),$=new y({props:{$$slots:{default:[vl]},$$scope:{ctx:m}}}),o=new y({props:{$$slots:{default:[xl]},$$scope:{ctx:m}}}),v=new y({props:{$$slots:{default:[hl]},$$scope:{ctx:m}}}),L=new y({props:{$$slots:{default:[bl]},$$scope:{ctx:m}}}),A=new y({props:{$$slots:{default:[Ll]},$$scope:{ctx:m}}}),O=new y({props:{$$slots:{default:[Pl]},$$scope:{ctx:m}}}),I=new y({props:{$$slots:{default:[Tl]},$$scope:{ctx:m}}}),W=new y({props:{$$slots:{default:[Sl]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),j(t.$$.fragment),c=_(),j(s.$$.fragment),n=_(),j(p.$$.fragment),i=_(),j($.$$.fragment),C=_(),j(o.$$.fragment),f=_(),j(v.$$.fragment),d=_(),j(L.$$.fragment),U=_(),j(A.$$.fragment),V=_(),j(O.$$.fragment),E=_(),j(I.$$.fragment),z=_(),j(W.$$.fragment)},l(k){e=h(k,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-lczfm4"&&(e.textContent=a),l=x(k),M(t.$$.fragment,k),c=x(k),M(s.$$.fragment,k),n=x(k),M(p.$$.fragment,k),i=x(k),M($.$$.fragment,k),C=x(k),M(o.$$.fragment,k),f=x(k),M(v.$$.fragment,k),d=x(k),M(L.$$.fragment,k),U=x(k),M(A.$$.fragment,k),V=x(k),M(O.$$.fragment,k),E=x(k),M(I.$$.fragment,k),z=x(k),M(W.$$.fragment,k)},m(k,D){u(k,e,D),u(k,l,D),S(t,k,D),u(k,c,D),S(s,k,D),u(k,n,D),S(p,k,D),u(k,i,D),S($,k,D),u(k,C,D),S(o,k,D),u(k,f,D),S(v,k,D),u(k,d,D),S(L,k,D),u(k,U,D),S(A,k,D),u(k,V,D),S(O,k,D),u(k,E,D),S(I,k,D),u(k,z,D),S(W,k,D),K=!0},p(k,D){const H={};D&1&&(H.$$scope={dirty:D,ctx:k}),t.$set(H);const R={};D&1&&(R.$$scope={dirty:D,ctx:k}),s.$set(R);const se={};D&1&&(se.$$scope={dirty:D,ctx:k}),p.$set(se);const re={};D&1&&(re.$$scope={dirty:D,ctx:k}),$.$set(re);const Q={};D&1&&(Q.$$scope={dirty:D,ctx:k}),o.$set(Q);const Z={};D&1&&(Z.$$scope={dirty:D,ctx:k}),v.$set(Z);const ae={};D&1&&(ae.$$scope={dirty:D,ctx:k}),L.$set(ae);const N={};D&1&&(N.$$scope={dirty:D,ctx:k}),A.$set(N);const ee={};D&1&&(ee.$$scope={dirty:D,ctx:k}),O.$set(ee);const ue={};D&1&&(ue.$$scope={dirty:D,ctx:k}),I.$set(ue);const fe={};D&1&&(fe.$$scope={dirty:D,ctx:k}),W.$set(fe)},i(k){K||(T(t.$$.fragment,k),T(s.$$.fragment,k),T(p.$$.fragment,k),T($.$$.fragment,k),T(o.$$.fragment,k),T(v.$$.fragment,k),T(L.$$.fragment,k),T(A.$$.fragment,k),T(O.$$.fragment,k),T(I.$$.fragment,k),T(W.$$.fragment,k),K=!0)},o(k){q(t.$$.fragment,k),q(s.$$.fragment,k),q(p.$$.fragment,k),q($.$$.fragment,k),q(o.$$.fragment,k),q(v.$$.fragment,k),q(L.$$.fragment,k),q(A.$$.fragment,k),q(O.$$.fragment,k),q(I.$$.fragment,k),q(W.$$.fragment,k),K=!1},d(k){k&&(r(e),r(l),r(c),r(n),r(i),r(C),r(f),r(d),r(U),r(V),r(E),r(z)),P(t,k),P(s,k),P(p,k),P($,k),P(o,k),P(v,k),P(L,k),P(A,k),P(O,k),P(I,k),P(W,k)}}}function jl(m){let e,a,l,t;return e=new y({props:{$$slots:{default:[$l]},$$scope:{ctx:m}}}),l=new y({props:{$$slots:{default:[Ml]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment),a=_(),j(l.$$.fragment)},l(c){M(e.$$.fragment,c),a=x(c),M(l.$$.fragment,c)},m(c,s){S(e,c,s),u(c,a,s),S(l,c,s),t=!0},p(c,[s]){const n={};s&1&&(n.$$scope={dirty:s,ctx:c}),e.$set(n);const p={};s&1&&(p.$$scope={dirty:s,ctx:c}),l.$set(p)},i(c){t||(T(e.$$.fragment,c),T(l.$$.fragment,c),t=!0)},o(c){q(e.$$.fragment,c),q(l.$$.fragment,c),t=!1},d(c){c&&r(a),P(e,c),P(l,c)}}}class kl extends be{constructor(e){super(),we(this,e,null,jl,ge,{})}}function Al(m){let e,a="L'encapsulation est un concept fondamental de la programmation orientée objet. Elle consiste à cacher les détails internes d'une classe et à ne fournir qu'une interface publique pour interagir avec cette classe.";return{c(){e=g("p"),e.textContent=a},l(l){e=h(l,"P",{"data-svelte-h":!0}),b(e)!=="svelte-18kz425"&&(e.textContent=a)},m(l,t){u(l,e,t)},p:B,d(l){l&&r(e)}}}function Dl(m){let e,a="L'encapsulation permet de protéger les données et de contrôler leur accès. Elle rend également le code plus modulaire et plus facile à maintenir.";return{c(){e=g("p"),e.textContent=a},l(l){e=h(l,"P",{"data-svelte-h":!0}),b(e)!=="svelte-p7ing"&&(e.textContent=a)},m(l,t){u(l,e,t)},p:B,d(l){l&&r(e)}}}function El(m){let e,a="Pour encapsuler des données, on utilise des modificateurs d'accès qui déterminent la visibilité des attributs et des méthodes d'une classe.",l,t,c="<li><code>public</code> : accessible depuis n&#39;importe où</li> <li><code>private</code> : accessible uniquement depuis la classe elle-même</li> <li><code>protected</code> : accessible depuis la classe et ses sous-classes</li>";return{c(){e=g("p"),e.textContent=a,l=_(),t=g("ul"),t.innerHTML=c},l(s){e=h(s,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1yfugik"&&(e.textContent=a),l=x(s),t=h(s,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-be97eu"&&(t.innerHTML=c)},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function Il(m){let e=`
    class Personne {
        private String nom;
        private int age;

        public String getNom() {
            return nom;
        }

        public void setNom(String nom) {
            this.nom = nom;
        }

        public int getAge() {
            return age;
        }

        public void setAge(int age) {
            this.age = age;
        }
    }
    `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function zl(m){let e,a="Voici un exemple d'encapsulation en Java :",l,t,c;return t=new ie({props:{$$slots:{default:[Il]},$$scope:{ctx:m}}}),{c(){e=g("p"),e.textContent=a,l=_(),j(t.$$.fragment)},l(s){e=h(s,"P",{"data-svelte-h":!0}),b(e)!=="svelte-sf7cl9"&&(e.textContent=a),l=x(s),M(t.$$.fragment,s)},m(s,n){u(s,e,n),u(s,l,n),S(t,s,n),c=!0},p(s,n){const p={};n&1&&(p.$$scope={dirty:n,ctx:s}),t.$set(p)},i(s){c||(T(t.$$.fragment,s),c=!0)},o(s){q(t.$$.fragment,s),c=!1},d(s){s&&(r(e),r(l)),P(t,s)}}}function Ol(m){let e,a=`Dans cet exemple, les attributs <code>nom</code> et <code>age</code> sont privés et ne peuvent pas être accédés directement depuis l&#39;extérieur.
			On utilise des méthodes publiques, <code>getNom</code>, <code>setNom</code>, <code>getAge</code> et <code>setAge</code>, pour y accéder et les modifier.`,l,t,c="Fondamentalement, <code>getNom</code> et <code>setNom</code> sont de simples méthodes, mais compte tenu de leur rôle, on les appelle des <i>accesseurs</i> et des <i>mutateurs</i>.";return{c(){e=g("p"),e.innerHTML=a,l=_(),t=g("p"),t.innerHTML=c,this.h()},l(s){e=h(s,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1kva8j3"&&(e.innerHTML=a),l=x(s),t=h(s,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-h4vula"&&(t.innerHTML=c),this.h()},h(){w(t,"class","text-important")},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function Ul(m){let e=`
    public void setAge(int age) {
        if (age >= 0) {
            this.age = age;
        }
    }
    `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Vl(m){let e,a=`L&#39;encapsulation permet de contrôler l&#39;accès aux données et de s&#39;assurer qu&#39;elles sont manipulées de manière cohérente.
			Par exemple, on peut ajouter des vérifications dans les méthodes <code>set</code> pour s&#39;assurer que les valeurs sont valides.`,l,t,c;return t=new ie({props:{$$slots:{default:[Ul]},$$scope:{ctx:m}}}),{c(){e=g("p"),e.innerHTML=a,l=_(),j(t.$$.fragment)},l(s){e=h(s,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1ykoszv"&&(e.innerHTML=a),l=x(s),M(t.$$.fragment,s)},m(s,n){u(s,e,n),u(s,l,n),S(t,s,n),c=!0},p(s,n){const p={};n&1&&(p.$$scope={dirty:n,ctx:s}),t.$set(p)},i(s){c||(T(t.$$.fragment,s),c=!0)},o(s){q(t.$$.fragment,s),c=!1},d(s){s&&(r(e),r(l)),P(t,s)}}}function yl(m){let e,a=`L&#39;utilisation du modificateur <code>protected</code> permet aux classes dérivées d&#39;accéder aux attributs et méthodes de la classe parente.
			Cela est utile lorsque l&#39;on souhaite permettre à des sous-classes d&#39;utiliser ou de modifier des données tout en les protégeant de l&#39;accès direct extérieur.`;return{c(){e=g("p"),e.innerHTML=a},l(l){e=h(l,"P",{"data-svelte-h":!0}),b(e)!=="svelte-63vpew"&&(e.innerHTML=a)},m(l,t){u(l,e,t)},p:B,d(l){l&&r(e)}}}function Bl(m){let e=`
    class Animal {
        protected String nom;

        public Animal(String nom) {
            this.nom = nom;
        }
    }

    class Chien extends Animal {
        public Chien(String nom) {
            super(nom);
        }

        public void aboyer() {
            System.out.println(nom + " aboie !");
        }
    }
    `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Jl(m){let e,a,l,t="Dans cet exemple, l&#39;attribut <code>nom</code> est protégé, ce qui permet à la classe <code>Chien</code> d&#39;y accéder dans sa méthode <code>aboyer</code>.",c;return e=new ie({props:{$$slots:{default:[Bl]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment),a=_(),l=g("p"),l.innerHTML=t},l(s){M(e.$$.fragment,s),a=x(s),l=h(s,"P",{"data-svelte-h":!0}),b(l)!=="svelte-68bfas"&&(l.innerHTML=t)},m(s,n){S(e,s,n),u(s,a,n),u(s,l,n),c=!0},p(s,n){const p={};n&1&&(p.$$scope={dirty:n,ctx:s}),e.$set(p)},i(s){c||(T(e.$$.fragment,s),c=!0)},o(s){q(e.$$.fragment,s),c=!1},d(s){s&&(r(a),r(l)),P(e,s)}}}function Fl(m){let e=`
    class CompteBancaire {
        private double solde;
        public double getSolde() {
            return solde;
        }
        public void deposer(double montant) {
            if (montant > 0) {
                solde += montant;
            }
        }
        public void retirer(double montant) {
            if (montant > 0 && montant <= solde) {
                solde -= montant;
            }
        }
    }
    `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Nl(m){let e,a=`Les attributs privés sont utilisés pour restreindre l'accès direct aux données sensibles ou critiques,\r
			garantissant ainsi que seules des méthodes contrôlées peuvent les modifier.`,l,t,c,s,n="Dans cet exemple, le solde du compte est privé et ne peut être modifié que par les méthodes <code>deposer</code> et <code>retirer</code>, lesquelles effectuent des vérifications.",p;return t=new ie({props:{$$slots:{default:[Fl]},$$scope:{ctx:m}}}),{c(){e=g("p"),e.textContent=a,l=_(),j(t.$$.fragment),c=_(),s=g("p"),s.innerHTML=n,this.h()},l(i){e=h(i,"P",{"data-svelte-h":!0}),b(e)!=="svelte-c17ad2"&&(e.textContent=a),l=x(i),M(t.$$.fragment,i),c=x(i),s=h(i,"P",{class:!0,"data-svelte-h":!0}),b(s)!=="svelte-13qfjds"&&(s.innerHTML=n),this.h()},h(){w(s,"class","smaller")},m(i,$){u(i,e,$),u(i,l,$),S(t,i,$),u(i,c,$),u(i,s,$),p=!0},p(i,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:i}),t.$set(C)},i(i){p||(T(t.$$.fragment,i),p=!0)},o(i){q(t.$$.fragment,i),p=!1},d(i){i&&(r(e),r(l),r(c),r(s)),P(t,i)}}}function Rl(m){let e,a="Verbosité",l,t,c="Le Java est parfois critiqué pour sa verbosité. En effet, le code Java peut sembler plus long et plus complexe que d'autres langages.",s,n,p="Vous devez écrire environ 7 lignes pour déclarer un simple attribut avec ses accesseurs et mutateurs.";return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.textContent=c,s=_(),n=g("p"),n.textContent=p},l(i){e=h(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-11a3931"&&(e.textContent=a),l=x(i),t=h(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-z5t63c"&&(t.textContent=c),s=x(i),n=h(i,"P",{"data-svelte-h":!0}),b(n)!=="svelte-173up6e"&&(n.textContent=p)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),u(i,n,$)},p:B,d(i){i&&(r(e),r(l),r(t),r(s),r(n))}}}function Gl(m){let e=`
        // C#
        class Personne {
            public string Nom { get; }
            public int Age    { get; set; }
            public int Taille {
                get; 
                set => field = value; 
            }
        }
        `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Ql(m){let e=`
        // Kotlin
        class Personne {
            var nom: String = ""
                private set
            var age: Int = 0
            var taille: Int = 0
                set(value) {
                    field = value
                }
        }
                `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Wl(m){let e,a="D'autres langages permettent de déclarer des accesseurs et mutateurs de manière plus concise :",l,t,c,s,n,p,i,$="En Java, un IDE peut générer automatiquement ces méthodes. Cela peut sembler pénible, mais il faut le faire.",C;return c=new ie({props:{$$slots:{default:[Gl]},$$scope:{ctx:m}}}),n=new ie({props:{$$slots:{default:[Ql]},$$scope:{ctx:m}}}),{c(){e=g("p"),e.textContent=a,l=_(),t=g("div"),j(c.$$.fragment),s=_(),j(n.$$.fragment),p=_(),i=g("p"),i.textContent=$,this.h()},l(o){e=h(o,"P",{"data-svelte-h":!0}),b(e)!=="svelte-v898e4"&&(e.textContent=a),l=x(o),t=h(o,"DIV",{class:!0});var f=le(t);M(c.$$.fragment,f),s=x(f),M(n.$$.fragment,f),f.forEach(r),p=x(o),i=h(o,"P",{"data-svelte-h":!0}),b(i)!=="svelte-1mll0hr"&&(i.textContent=$),this.h()},h(){w(t,"class","flex flex-row")},m(o,f){u(o,e,f),u(o,l,f),u(o,t,f),S(c,t,null),G(t,s),S(n,t,null),u(o,p,f),u(o,i,f),C=!0},p(o,f){const v={};f&1&&(v.$$scope={dirty:f,ctx:o}),c.$set(v);const d={};f&1&&(d.$$scope={dirty:f,ctx:o}),n.$set(d)},i(o){C||(T(c.$$.fragment,o),T(n.$$.fragment,o),C=!0)},o(o){q(c.$$.fragment,o),q(n.$$.fragment,o),C=!1},d(o){o&&(r(e),r(l),r(t),r(p),r(i)),P(c),P(n)}}}function Kl(m){let e=`
    public void setMobilePhoneNumber(String mobilePhoneNumber) {
        this.mobilePhoneNumber = mobilePhoneNumber;
        envoyerEmailPourPrevenirUtilisateurDeLaModification(email, mobilePhoneNumber);
    }
    `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Zl(m){let e,a="Maintenance",l,t,c=`En encapsulant les données et en contrôlant leur accès, vous facilitez la maintenance de votre code.\r
			Imaginez que vous avez laissé un attribut public et que vous le modifiez dans 50 endroits différents.\r
			Si vous souhaitez désormais enregistrer chaque modification, vous devrez intervenir à ces 50 endroits.`,s,n,p;return n=new ie({props:{$$slots:{default:[Kl]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.textContent=c,s=_(),j(n.$$.fragment)},l(i){e=h(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1ky5g9v"&&(e.textContent=a),l=x(i),t=h(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-ucx1td"&&(t.textContent=c),s=x(i),M(n.$$.fragment,i)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),S(n,i,$),p=!0},p(i,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:i}),n.$set(C)},i(i){p||(T(n.$$.fragment,i),p=!0)},o(i){q(n.$$.fragment,i),p=!1},d(i){i&&(r(e),r(l),r(t),r(s)),P(n,i)}}}function Yl(m){let e,a="Encapsulation",l,t,c,s,n,p,i,$,C,o,f,v,d,L,U,A,V,O,E,I,z,W,K,k,D;return t=new y({props:{$$slots:{default:[Al]},$$scope:{ctx:m}}}),s=new y({props:{$$slots:{default:[Dl]},$$scope:{ctx:m}}}),p=new y({props:{$$slots:{default:[El]},$$scope:{ctx:m}}}),$=new y({props:{$$slots:{default:[zl]},$$scope:{ctx:m}}}),o=new y({props:{$$slots:{default:[Ol]},$$scope:{ctx:m}}}),v=new y({props:{$$slots:{default:[Vl]},$$scope:{ctx:m}}}),L=new y({props:{$$slots:{default:[yl]},$$scope:{ctx:m}}}),A=new y({props:{$$slots:{default:[Jl]},$$scope:{ctx:m}}}),O=new y({props:{$$slots:{default:[Nl]},$$scope:{ctx:m}}}),I=new y({props:{data_background_color:"#00353F",$$slots:{default:[Rl]},$$scope:{ctx:m}}}),W=new y({props:{data_background_color:"#00353F",$$slots:{default:[Wl]},$$scope:{ctx:m}}}),k=new y({props:{$$slots:{default:[Zl]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),j(t.$$.fragment),c=_(),j(s.$$.fragment),n=_(),j(p.$$.fragment),i=_(),j($.$$.fragment),C=_(),j(o.$$.fragment),f=_(),j(v.$$.fragment),d=_(),j(L.$$.fragment),U=_(),j(A.$$.fragment),V=_(),j(O.$$.fragment),E=_(),j(I.$$.fragment),z=_(),j(W.$$.fragment),K=_(),j(k.$$.fragment)},l(H){e=h(H,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-d8x7o6"&&(e.textContent=a),l=x(H),M(t.$$.fragment,H),c=x(H),M(s.$$.fragment,H),n=x(H),M(p.$$.fragment,H),i=x(H),M($.$$.fragment,H),C=x(H),M(o.$$.fragment,H),f=x(H),M(v.$$.fragment,H),d=x(H),M(L.$$.fragment,H),U=x(H),M(A.$$.fragment,H),V=x(H),M(O.$$.fragment,H),E=x(H),M(I.$$.fragment,H),z=x(H),M(W.$$.fragment,H),K=x(H),M(k.$$.fragment,H)},m(H,R){u(H,e,R),u(H,l,R),S(t,H,R),u(H,c,R),S(s,H,R),u(H,n,R),S(p,H,R),u(H,i,R),S($,H,R),u(H,C,R),S(o,H,R),u(H,f,R),S(v,H,R),u(H,d,R),S(L,H,R),u(H,U,R),S(A,H,R),u(H,V,R),S(O,H,R),u(H,E,R),S(I,H,R),u(H,z,R),S(W,H,R),u(H,K,R),S(k,H,R),D=!0},p(H,R){const se={};R&1&&(se.$$scope={dirty:R,ctx:H}),t.$set(se);const re={};R&1&&(re.$$scope={dirty:R,ctx:H}),s.$set(re);const Q={};R&1&&(Q.$$scope={dirty:R,ctx:H}),p.$set(Q);const Z={};R&1&&(Z.$$scope={dirty:R,ctx:H}),$.$set(Z);const ae={};R&1&&(ae.$$scope={dirty:R,ctx:H}),o.$set(ae);const N={};R&1&&(N.$$scope={dirty:R,ctx:H}),v.$set(N);const ee={};R&1&&(ee.$$scope={dirty:R,ctx:H}),L.$set(ee);const ue={};R&1&&(ue.$$scope={dirty:R,ctx:H}),A.$set(ue);const fe={};R&1&&(fe.$$scope={dirty:R,ctx:H}),O.$set(fe);const ce={};R&1&&(ce.$$scope={dirty:R,ctx:H}),I.$set(ce);const me={};R&1&&(me.$$scope={dirty:R,ctx:H}),W.$set(me);const pe={};R&1&&(pe.$$scope={dirty:R,ctx:H}),k.$set(pe)},i(H){D||(T(t.$$.fragment,H),T(s.$$.fragment,H),T(p.$$.fragment,H),T($.$$.fragment,H),T(o.$$.fragment,H),T(v.$$.fragment,H),T(L.$$.fragment,H),T(A.$$.fragment,H),T(O.$$.fragment,H),T(I.$$.fragment,H),T(W.$$.fragment,H),T(k.$$.fragment,H),D=!0)},o(H){q(t.$$.fragment,H),q(s.$$.fragment,H),q(p.$$.fragment,H),q($.$$.fragment,H),q(o.$$.fragment,H),q(v.$$.fragment,H),q(L.$$.fragment,H),q(A.$$.fragment,H),q(O.$$.fragment,H),q(I.$$.fragment,H),q(W.$$.fragment,H),q(k.$$.fragment,H),D=!1},d(H){H&&(r(e),r(l),r(c),r(n),r(i),r(C),r(f),r(d),r(U),r(V),r(E),r(z),r(K)),P(t,H),P(s,H),P(p,H),P($,H),P(o,H),P(v,H),P(L,H),P(A,H),P(O,H),P(I,H),P(W,H),P(k,H)}}}function Xl(m){let e,a;return e=new y({props:{$$slots:{default:[Yl]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,t){S(e,l,t),a=!0},p(l,[t]){const c={};t&1&&(c.$$scope={dirty:t,ctx:l}),e.$set(c)},i(l){a||(T(e.$$.fragment,l),a=!0)},o(l){q(e.$$.fragment,l),a=!1},d(l){P(e,l)}}}class es extends be{constructor(e){super(),we(this,e,null,Xl,ge,{})}}function ts(m){let e,a=`La programmation orientée objet (POO) est un paradigme de programmation qui repose sur la notion d'objets.\r
			Un objet est une instance d'une classe, regroupant des données (attributs) et des comportements (méthodes).`;return{c(){e=g("p"),e.textContent=a},l(l){e=h(l,"P",{"data-svelte-h":!0}),b(e)!=="svelte-jh4mu9"&&(e.textContent=a)},m(l,t){u(l,e,t)},p:B,d(l){l&&r(e)}}}function ls(m){let e=`
			public class Personne {
				String nom;
				String prenom;
				int age;

				public Personne(String nom, String prenom, int age) {
					this.nom = nom;
					this.prenom = prenom;
					this.age = age;
				}
			}
			
			var p = new Personne("PICOT", "Alexis", 28);
`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function ss(m){let e,a="Pour créer un objet, on utilise le mot-clé <b>new</b> suivi du nom de la classe.",l,t,c="Chaque classe possède un constructeur par défaut qui peut être redéfini afin de personnaliser la création de l'objet.",s,n,p;return n=new ie({props:{$$slots:{default:[ls]},$$scope:{ctx:m}}}),{c(){e=g("p"),e.innerHTML=a,l=_(),t=g("p"),t.textContent=c,s=_(),j(n.$$.fragment)},l(i){e=h(i,"P",{"data-svelte-h":!0}),b(e)!=="svelte-17k8ka7"&&(e.innerHTML=a),l=x(i),t=h(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-11ogb43"&&(t.textContent=c),s=x(i),M(n.$$.fragment,i)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),S(n,i,$),p=!0},p(i,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:i}),n.$set(C)},i(i){p||(T(n.$$.fragment,i),p=!0)},o(i){q(n.$$.fragment,i),p=!1},d(i){i&&(r(e),r(l),r(t),r(s)),P(n,i)}}}function ns(m){let e=`
			public class Personne {
				String nom;
				String prenom;
				int age;

				public Personne(String nom, String prenom, int age) {
					this.nom = nom;
					this.prenom = prenom;
					this.age = age;
				}
				public Personne(String numéroÉtudiant) {
					// Recherche de l'étudiant dans la base de données à partir de son numéro
					this(nom, prenom, age);
				}
			}
`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function is(m){let e,a="Il peut y avoir plusieurs constructeurs dans une classe, on parle de surcharge de constructeurs.",l,t,c;return t=new ie({props:{$$slots:{default:[ns]},$$scope:{ctx:m}}}),{c(){e=g("p"),e.textContent=a,l=_(),j(t.$$.fragment)},l(s){e=h(s,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1yq3f8o"&&(e.textContent=a),l=x(s),M(t.$$.fragment,s)},m(s,n){u(s,e,n),u(s,l,n),S(t,s,n),c=!0},p(s,n){const p={};n&1&&(p.$$scope={dirty:n,ctx:s}),t.$set(p)},i(s){c||(T(t.$$.fragment,s),c=!0)},o(s){q(t.$$.fragment,s),c=!1},d(s){s&&(r(e),r(l)),P(t,s)}}}function rs(m){let e,a="Les modificateurs d'accès permettent de définir la visibilité des attributs et des méthodes.",l,t,c="Il existe 4 modificateurs d'accès :",s,n,p="<li><code>public</code> : accessible partout</li> <li><code>protected</code> : accessible dans la classe et dans ses sous-classes</li> <li><code>private</code> : accessible uniquement dans la classe</li> <li><code>default</code> : accessible uniquement dans le package</li>",i,$,C="Nous verrons plus tard l'intérêt de ces modificateurs d'accès, ne soyez pas surpris si vous ne les comprenez pas tout de suite.";return{c(){e=g("p"),e.textContent=a,l=_(),t=g("p"),t.textContent=c,s=_(),n=g("ul"),n.innerHTML=p,i=_(),$=g("p"),$.textContent=C,this.h()},l(o){e=h(o,"P",{"data-svelte-h":!0}),b(e)!=="svelte-14phf9s"&&(e.textContent=a),l=x(o),t=h(o,"P",{"data-svelte-h":!0}),b(t)!=="svelte-a3flkn"&&(t.textContent=c),s=x(o),n=h(o,"UL",{"data-svelte-h":!0}),b(n)!=="svelte-101pfey"&&(n.innerHTML=p),i=x(o),$=h(o,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-g1bdlv"&&($.textContent=C),this.h()},h(){w($,"class","text-important")},m(o,f){u(o,e,f),u(o,l,f),u(o,t,f),u(o,s,f),u(o,n,f),u(o,i,f),u(o,$,f)},p:B,d(o){o&&(r(e),r(l),r(t),r(s),r(n),r(i),r($))}}}function as(m){let e=`
				try {
					// Code qui peut générer une exception
					int a = 10/0;
					// ou on peut générer une exception personnalisée
					throw new Exception("Erreur personnalisée");
				} catch (Exception e) {
					// Code pour gérer l'exception
					System.out.println("Erreur : " + e.getMessage());
				} finally {
					// Code qui sera exécuté qu'il y ait une exception ou non
				}
				`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function us(m){let e,a="Gestion des erreurs",l,t,c="La gestion des exceptions permet de gérer les erreurs qui peuvent survenir lors de l'exécution d'un programme.",s,n,p="En Java, on utilise les blocs <code>try</code>, <code>catch</code> et <code>finally</code> pour gérer les exceptions.",i,$,C;return $=new ie({props:{$$slots:{default:[as]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.textContent=c,s=_(),n=g("p"),n.innerHTML=p,i=_(),j($.$$.fragment)},l(o){e=h(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-6lmlz1"&&(e.textContent=a),l=x(o),t=h(o,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1mgrawl"&&(t.textContent=c),s=x(o),n=h(o,"P",{"data-svelte-h":!0}),b(n)!=="svelte-mv2gtj"&&(n.innerHTML=p),i=x(o),M($.$$.fragment,o)},m(o,f){u(o,e,f),u(o,l,f),u(o,t,f),u(o,s,f),u(o,n,f),u(o,i,f),S($,o,f),C=!0},p(o,f){const v={};f&1&&(v.$$scope={dirty:f,ctx:o}),$.$set(v)},i(o){C||(T($.$$.fragment,o),C=!0)},o(o){q($.$$.fragment,o),C=!1},d(o){o&&(r(e),r(l),r(t),r(s),r(n),r(i)),P($,o)}}}function os(m){let e,a="Généralités sur la POO",l,t,c,s,n,p,i,$,C,o,f;return t=new y({props:{$$slots:{default:[ts]},$$scope:{ctx:m}}}),s=new y({props:{$$slots:{default:[ss]},$$scope:{ctx:m}}}),p=new y({props:{$$slots:{default:[is]},$$scope:{ctx:m}}}),$=new y({props:{$$slots:{default:[rs]},$$scope:{ctx:m}}}),o=new y({props:{$$slots:{default:[us]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),j(t.$$.fragment),c=_(),j(s.$$.fragment),n=_(),j(p.$$.fragment),i=_(),j($.$$.fragment),C=_(),j(o.$$.fragment)},l(v){e=h(v,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-lsottk"&&(e.textContent=a),l=x(v),M(t.$$.fragment,v),c=x(v),M(s.$$.fragment,v),n=x(v),M(p.$$.fragment,v),i=x(v),M($.$$.fragment,v),C=x(v),M(o.$$.fragment,v)},m(v,d){u(v,e,d),u(v,l,d),S(t,v,d),u(v,c,d),S(s,v,d),u(v,n,d),S(p,v,d),u(v,i,d),S($,v,d),u(v,C,d),S(o,v,d),f=!0},p(v,d){const L={};d&1&&(L.$$scope={dirty:d,ctx:v}),t.$set(L);const U={};d&1&&(U.$$scope={dirty:d,ctx:v}),s.$set(U);const A={};d&1&&(A.$$scope={dirty:d,ctx:v}),p.$set(A);const V={};d&1&&(V.$$scope={dirty:d,ctx:v}),$.$set(V);const O={};d&1&&(O.$$scope={dirty:d,ctx:v}),o.$set(O)},i(v){f||(T(t.$$.fragment,v),T(s.$$.fragment,v),T(p.$$.fragment,v),T($.$$.fragment,v),T(o.$$.fragment,v),f=!0)},o(v){q(t.$$.fragment,v),q(s.$$.fragment,v),q(p.$$.fragment,v),q($.$$.fragment,v),q(o.$$.fragment,v),f=!1},d(v){v&&(r(e),r(l),r(c),r(n),r(i),r(C)),P(t,v),P(s,v),P(p,v),P($,v),P(o,v)}}}function $s(m){let e,a;return e=new y({props:{$$slots:{default:[os]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,t){S(e,l,t),a=!0},p(l,[t]){const c={};t&1&&(c.$$scope={dirty:t,ctx:l}),e.$set(c)},i(l){a||(T(e.$$.fragment,l),a=!0)},o(l){q(e.$$.fragment,l),a=!1},d(l){P(e,l)}}}class fs extends be{constructor(e){super(),we(this,e,null,$s,ge,{})}}const cs=""+new URL("../assets/TD1.B5LctFM5.pdf",import.meta.url).href,ps=""+new URL("../assets/TD2.D6kSf9tn.pdf",import.meta.url).href,ms=""+new URL("../assets/TD3.Cbwm9oYP.pdf",import.meta.url).href,ds=""+new URL("../assets/TD3Bis.CvsjeAEt.pdf",import.meta.url).href,vs=""+new URL("../assets/TDParc.BMAMZ7Fy.pdf",import.meta.url).href,xs=""+new URL("../assets/Mise-en-place-env.B_q2XZLi.html",import.meta.url).href,_s=""+new URL("../assets/Plantuml.qFHaOZcF.html",import.meta.url).href;function Cs(m){let e,a="Configuration TD",l,t,c="Clonez le dépôt",s,n,p,i,$="Puis collez l'URL de votre répo Git",C,o,f,v;return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("a"),t.textContent=c,s=_(),n=g("br"),p=_(),i=g("p"),i.textContent=$,C=_(),o=g("input"),this.h()},l(d){e=h(d,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1femyhu"&&(e.textContent=a),l=x(d),t=h(d,"A",{target:!0,href:!0,"data-svelte-h":!0}),b(t)!=="svelte-iaex2q"&&(t.textContent=c),s=x(d),n=h(d,"BR",{}),p=x(d),i=h(d,"P",{"data-svelte-h":!0}),b(i)!=="svelte-1h3gyi7"&&(i.textContent=$),C=x(d),o=h(d,"INPUT",{class:!0,type:!0,placeholder:!0}),this.h()},h(){w(t,"target","_blank"),w(t,"href","https://classroom.github.com/a/FKWh2cOe"),w(o,"class","w-full text-accent-950 text-lg z-50 mb-16"),w(o,"type","text"),w(o,"placeholder","URL du dépôt git")},m(d,L){u(d,e,L),u(d,l,L),u(d,t,L),u(d,s,L),u(d,n,L),u(d,p,L),u(d,i,L),u(d,C,L),u(d,o,L),Fe(o,m[1]),f||(v=[Ne(o,"input",m[2]),Ne(o,"input",m[3])],f=!0)},p(d,L){L&2&&o.value!==d[1]&&Fe(o,d[1])},d(d){d&&(r(e),r(l),r(t),r(s),r(n),r(p),r(i),r(C),r(o)),f=!1,Ke(v)}}}function hs(m){let e,a="TD",l,t,c,s,n,p,i,$,C=`/ <a href="${cs}">Corrigé</a>`,o,f,v,d,L,U,A,V=`/ <a href="${ps}">Corrigé</a>`,O,E,I,z,W,K,k,D=`/ <a href="${ms}">Corrigé</a>`,H,R,se,re,Q,Z,ae,N=`/ <a href="${ds}">Corrigé</a>`,ee,ue,fe,ce,me,pe,_e,xe=`/ <a href="${vs}">Corrigé</a>`,Ce,J,te=`<a target="_blank" href="${_s}">Tuto PlantUML</a>`;return{c(){e=g("h2"),e.textContent=a,l=_(),t=g("ul"),c=g("li"),s=g("a"),n=X("TD1"),i=_(),$=g("span"),$.innerHTML=C,o=_(),f=g("li"),v=g("a"),d=X("TD2"),U=_(),A=g("span"),A.innerHTML=V,O=_(),E=g("li"),I=g("a"),z=X("TD3"),K=_(),k=g("span"),k.innerHTML=D,H=_(),R=g("li"),se=g("a"),re=X("TD3 Bis (Optionnel)"),Z=_(),ae=g("span"),ae.innerHTML=N,ee=_(),ue=g("li"),fe=g("a"),ce=X("TD4"),pe=_(),_e=g("span"),_e.innerHTML=xe,Ce=_(),J=g("li"),J.innerHTML=te,this.h()},l(de){e=h(de,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-fqlmo2"&&(e.textContent=a),l=x(de),t=h(de,"UL",{});var ve=le(t);c=h(ve,"LI",{});var he=le(c);s=h(he,"A",{target:!0,href:!0});var Le=le(s);n=Y(Le,"TD1"),Le.forEach(r),i=x(he),$=h(he,"SPAN",{"data-svelte-h":!0}),b($)!=="svelte-1aax1lb"&&($.innerHTML=C),he.forEach(r),o=x(ve),f=h(ve,"LI",{});var F=le(f);v=h(F,"A",{target:!0,href:!0});var ne=le(v);d=Y(ne,"TD2"),ne.forEach(r),U=x(F),A=h(F,"SPAN",{"data-svelte-h":!0}),b(A)!=="svelte-icpeey"&&(A.innerHTML=V),F.forEach(r),O=x(ve),E=h(ve,"LI",{});var He=le(E);I=h(He,"A",{target:!0,href:!0});var Se=le(I);z=Y(Se,"TD3"),Se.forEach(r),K=x(He),k=h(He,"SPAN",{"data-svelte-h":!0}),b(k)!=="svelte-r0lu5h"&&(k.innerHTML=D),He.forEach(r),H=x(ve),R=h(ve,"LI",{});var qe=le(R);se=h(qe,"A",{target:!0,href:!0});var Me=le(se);re=Y(Me,"TD3 Bis (Optionnel)"),Me.forEach(r),Z=x(qe),ae=h(qe,"SPAN",{"data-svelte-h":!0}),b(ae)!=="svelte-18ptfz9"&&(ae.innerHTML=N),qe.forEach(r),ee=x(ve),ue=h(ve,"LI",{});var Te=le(ue);fe=h(Te,"A",{target:!0,href:!0});var je=le(fe);ce=Y(je,"TD4"),je.forEach(r),pe=x(Te),_e=h(Te,"SPAN",{"data-svelte-h":!0}),b(_e)!=="svelte-66ci9c"&&(_e.innerHTML=xe),Te.forEach(r),Ce=x(ve),J=h(ve,"LI",{"data-svelte-h":!0}),b(J)!=="svelte-bz407p"&&(J.innerHTML=te),ve.forEach(r),this.h()},h(){w(s,"target","_blank"),w(s,"href",p=m[1]+"blob/main/TD/TD1.md"),w(v,"target","_blank"),w(v,"href",L=m[1]+"blob/main/TD/TD2.md"),w(I,"target","_blank"),w(I,"href",W=m[1]+"blob/main/TD/TD3.md"),w(se,"target","_blank"),w(se,"href",Q=m[1]+"blob/main/TD/TD3Bis.md"),w(fe,"target","_blank"),w(fe,"href",me=m[1]+"blob/main/TD/TDParc.md")},m(de,ve){u(de,e,ve),u(de,l,ve),u(de,t,ve),G(t,c),G(c,s),G(s,n),G(c,i),G(c,$),G(t,o),G(t,f),G(f,v),G(v,d),G(f,U),G(f,A),G(t,O),G(t,E),G(E,I),G(I,z),G(E,K),G(E,k),G(t,H),G(t,R),G(R,se),G(se,re),G(R,Z),G(R,ae),G(t,ee),G(t,ue),G(ue,fe),G(fe,ce),G(ue,pe),G(ue,_e),G(t,Ce),G(t,J)},p(de,ve){ve&2&&p!==(p=de[1]+"blob/main/TD/TD1.md")&&w(s,"href",p),ve&2&&L!==(L=de[1]+"blob/main/TD/TD2.md")&&w(v,"href",L),ve&2&&W!==(W=de[1]+"blob/main/TD/TD3.md")&&w(I,"href",W),ve&2&&Q!==(Q=de[1]+"blob/main/TD/TD3Bis.md")&&w(se,"href",Q),ve&2&&me!==(me=de[1]+"blob/main/TD/TDParc.md")&&w(fe,"href",me)},d(de){de&&(r(e),r(l),r(t))}}}function gs(m){let e,a="Configuration TP",l,t,c="Configurez votre poste",s,n;return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("a"),t.textContent=c,s=_(),n=g("br"),this.h()},l(p){e=h(p,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-jepq66"&&(e.textContent=a),l=x(p),t=h(p,"A",{target:!0,href:!0,"data-svelte-h":!0}),b(t)!=="svelte-m3anz5"&&(t.textContent=c),s=x(p),n=h(p,"BR",{}),this.h()},h(){w(t,"target","_blank"),w(t,"href",xs)},m(p,i){u(p,e,i),u(p,l,i),u(p,t,i),u(p,s,i),u(p,n,i)},p:B,d(p){p&&(r(e),r(l),r(t),r(s),r(n))}}}function bs(m){let e,a="TP",l,t,c=`<li><a target="_blank" href="${Re}">TP1</a> <span>/ <a target="_blank" href="https://classroom.github.com/a/3pWZu8yR">Clonez le dépot</a></span></li> <li><a target="_blank" href="${Ge}">TP2</a> <span>/ <a target="_blank" href="https://classroom.github.com/a/y58GAhhp">Clonez le dépot</a></span></li> <li><a target="_blank" href="${Qe}">Projet</a> <span>/ <a target="_blank" href="https://classroom.github.com/a/mllsoaOR">Clonez le dépot</a></span></li>`;return{c(){e=g("h2"),e.textContent=a,l=_(),t=g("ul"),t.innerHTML=c},l(s){e=h(s,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-5mz89q"&&(e.textContent=a),l=x(s),t=h(s,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-1ye3vx8"&&(t.innerHTML=c)},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function ws(m){let e,a,l,t,c,s,n,p;return e=new y({props:{$$slots:{default:[Cs]},$$scope:{ctx:m}}}),l=new y({props:{id:"TD",$$slots:{default:[hs]},$$scope:{ctx:m}}}),c=new y({props:{$$slots:{default:[gs]},$$scope:{ctx:m}}}),n=new y({props:{id:"TP",$$slots:{default:[bs]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment),a=_(),j(l.$$.fragment),t=_(),j(c.$$.fragment),s=_(),j(n.$$.fragment)},l(i){M(e.$$.fragment,i),a=x(i),M(l.$$.fragment,i),t=x(i),M(c.$$.fragment,i),s=x(i),M(n.$$.fragment,i)},m(i,$){S(e,i,$),u(i,a,$),S(l,i,$),u(i,t,$),S(c,i,$),u(i,s,$),S(n,i,$),p=!0},p(i,$){const C={};$&18&&(C.$$scope={dirty:$,ctx:i}),e.$set(C);const o={};$&18&&(o.$$scope={dirty:$,ctx:i}),l.$set(o);const f={};$&16&&(f.$$scope={dirty:$,ctx:i}),c.$set(f);const v={};$&16&&(v.$$scope={dirty:$,ctx:i}),n.$set(v)},i(i){p||(T(e.$$.fragment,i),T(l.$$.fragment,i),T(c.$$.fragment,i),T(n.$$.fragment,i),p=!0)},o(i){q(e.$$.fragment,i),q(l.$$.fragment,i),q(c.$$.fragment,i),q(n.$$.fragment,i),p=!1},d(i){i&&(r(a),r(t),r(s)),P(e,i),P(l,i),P(c,i),P(n,i)}}}function Ls(m){let e,a;return e=new y({props:{id:"exercices",$$slots:{default:[ws]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,t){S(e,l,t),a=!0},p(l,[t]){const c={};t&18&&(c.$$scope={dirty:t,ctx:l}),e.$set(c)},i(l){a||(T(e.$$.fragment,l),a=!0)},o(l){q(e.$$.fragment,l),a=!1},d(l){P(e,l)}}}function Hs(m,e,a){let l,t=B,c=()=>(t(),t=We(s,i=>a(1,l=i)),s);m.$$.on_destroy.push(()=>t());const s=Xe(localStorage.getItem("repoUrl")||null);c(),s.subscribe(i=>localStorage.repoUrl=i);const n=i=>s.set((i.currentTarget.value.trimEnd()+"/").replace("github.com","github.dev"));function p(){l=this.value,s.set(l)}return[s,l,n,p]}class Ps extends be{constructor(e){super(),we(this,e,Hs,Ls,ge,{repoUrl:0})}get repoUrl(){return this.$$.ctx[0]}}function qs(m){let e,a="Le langage Java";return{c(){e=g("h3"),e.textContent=a},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1iqgvdm"&&(e.textContent=a)},m(l,t){u(l,e,t)},p:B,d(l){l&&r(e)}}}function Ts(m){let e,a="Le langage Java",l,t,c=`<img class="object-contain h-64 w-full" src="https://upload.wikimedia.org/wikipedia/fr/2/2e/Java_Logo.svg" alt="Java Logo"/> <p class="italic r-strech">Java est un langage de programmation polyvalent, orienté objet et largement utilisé dans le
			développement logiciel. Il a été conçu pour être portable, ce qui signifie qu&#39;il peut
			fonctionner sur différentes plateformes sans nécessiter de modifications importantes.</p>`;return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("div"),t.innerHTML=c,this.h()},l(s){e=h(s,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1iqgvdm"&&(e.textContent=a),l=x(s),t=h(s,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1gfokvd"&&(t.innerHTML=c),this.h()},h(){w(t,"class","flex flex-col justify-center")},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function Ss(m){let e,a="Fonctionnement",l,t,c=`<p>L’indépendance par rapport à l’environnement d’exécution est garantie par la <em>machine virtuelle Java</em>
			(Java Virtual Machine ou <strong>JVM</strong>). En effet, Java est un langage compilé mais le
			compilateur ne produit pas de code natif pour la machine, il produit du
			<a class="reference external" href="https://fr.wikipedia.org/wiki/Bytecode_Java">bytecode</a> :
			un jeu d’instructions compréhensibles par la JVM qu’elle va traduire en code exécutable par la
			machine au moment de l’exécution.</p> <p>Pour qu’un programme Java fonctionne, il faut non seulement que les développeurs aient compilé
			le code source mais il faut également qu’un environnement d’exécution (comprenant la JVM) soit
			installé sur la machine cible.</p> <p>Il existe ainsi deux environnements Java qui peuvent être téléchargés et installés depuis le <a class="reference external" href="https://www.oracle.com/technetwork/java/javase/downloads/index.html">site d’Oracle</a> :</p> <dl class="simple"><dt>JRE - Java Runtime Environment</dt><dd><p>Cet environnement fournit uniquement les outils nécessaires à l’exécution de programmes
					Java. Il fournit entre autres la machine virtuelle Java.</p> </dd><dt>JDK - Java Development Kit</dt><dd><p>Cet environnement fournit tous les outils nécessaires à l’exécution mais aussi au
					développement de programmes Java. Il fournit entre autres la machine virtuelle Java et le
					compilateur.</p></dd></dl>`;return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("div"),t.innerHTML=c,this.h()},l(s){e=h(s,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-zf3p5z"&&(e.textContent=a),l=x(s),t=h(s,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-13aqvf2"&&(t.innerHTML=c),this.h()},h(){w(t,"class","r-fit-text")},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function Ms(m){let e=`
					int i = 0;
					i = 4; // OK
					i = "bonjour"; // ERREUR : on tente d'affecter une chaîne de caractères`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function js(m){let e,a="Le langage Java",l,t,c="Caractéristiques",s,n,p,i,$="S'inspire mais se débarrasse des complexités du C (pointeurs, allocation mémoire, etc.)",C,o,f="Orienté objet !",v,d,L="Gestion automatique de la mémoire",U,A,V,O,E,I,z="Bibliothèque de classes et de packages très riche (graphismes, encryption, etc.)",W,K,k="Polymorphisme et introspection",D;return O=new ie({props:{$$slots:{default:[Ms]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("h4"),t.textContent=c,s=_(),n=g("div"),p=g("ul"),i=g("li"),i.textContent=$,C=_(),o=g("li"),o.textContent=f,v=_(),d=g("li"),d.textContent=L,U=_(),A=g("li"),V=X(`Typage statique fort (à la différence de Python, les variables doivent être déclarées avec\r
				leur type)\r
				`),j(O.$$.fragment),E=_(),I=g("li"),I.textContent=z,W=_(),K=g("li"),K.textContent=k,this.h()},l(H){e=h(H,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1iqgvdm"&&(e.textContent=a),l=x(H),t=h(H,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-18h9ipq"&&(t.textContent=c),s=x(H),n=h(H,"DIV",{class:!0});var R=le(n);p=h(R,"UL",{class:!0});var se=le(p);i=h(se,"LI",{"data-svelte-h":!0}),b(i)!=="svelte-1r1na5t"&&(i.textContent=$),C=x(se),o=h(se,"LI",{"data-svelte-h":!0}),b(o)!=="svelte-ytdrfv"&&(o.textContent=f),v=x(se),d=h(se,"LI",{"data-svelte-h":!0}),b(d)!=="svelte-jh2a8"&&(d.textContent=L),U=x(se),A=h(se,"LI",{});var re=le(A);V=Y(re,`Typage statique fort (à la différence de Python, les variables doivent être déclarées avec\r
				leur type)\r
				`),M(O.$$.fragment,re),re.forEach(r),E=x(se),I=h(se,"LI",{"data-svelte-h":!0}),b(I)!=="svelte-16sf5lx"&&(I.textContent=z),W=x(se),K=h(se,"LI",{"data-svelte-h":!0}),b(K)!=="svelte-1d499ss"&&(K.textContent=k),se.forEach(r),R.forEach(r),this.h()},h(){w(p,"class","r-strech"),w(n,"class","flex flex-col justify-center")},m(H,R){u(H,e,R),u(H,l,R),u(H,t,R),u(H,s,R),u(H,n,R),G(n,p),G(p,i),G(p,C),G(p,o),G(p,v),G(p,d),G(p,U),G(p,A),G(A,V),S(O,A,null),G(p,E),G(p,I),G(p,W),G(p,K),D=!0},p(H,R){const se={};R&1&&(se.$$scope={dirty:R,ctx:H}),O.$set(se)},i(H){D||(T(O.$$.fragment,H),D=!0)},o(H){q(O.$$.fragment,H),D=!1},d(H){H&&(r(e),r(l),r(t),r(s),r(n)),P(O)}}}function ks(m){let e,a="Conventions",l,t,c=`<ul class="r-strech"><li>Les noms de classe commencent par une majuscule
				<ul><li><code>Visage, Objet</code></li></ul></li> <li>Les mots contenus dans un identificateur commencent par une minuscule
				<ul><li><code>uneClasse, uneMethode, uneVariable</code></li></ul></li> <li>Les constantes sont en majuscules
				<ul><li><code>UNE_CONSTANTE</code></li></ul></li></ul>`;return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("div"),t.innerHTML=c,this.h()},l(s){e=h(s,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-tghgi6"&&(e.textContent=a),l=x(s),t=h(s,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1cc378f"&&(t.innerHTML=c),this.h()},h(){w(t,"class","flex flex-col justify-center")},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function As(m){let e,a="Types de données",l,t,c=`<ul class="r-strech"><li>Types primitifs
				<ul><li><code>byte, short, int, long, float, double, char, boolean</code></li></ul></li> <li>Objets (instances de classes)
				<ul><li><code>String, Integer, Float, Double, Boolean, Character, etc.</code></li></ul></li></ul>`;return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("div"),t.innerHTML=c,this.h()},l(s){e=h(s,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-7p2708"&&(e.textContent=a),l=x(s),t=h(s,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-kgkk9f"&&(t.innerHTML=c),this.h()},h(){w(t,"class","flex flex-col justify-center")},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function Ds(m){let e=`
				String str = new String() ;
				str = "ceci est une phrase" ;
				`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Es(m){let e=`
				String str = "ceci est une phrase" ;
				`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Is(m){let e,a="Types de données",l,t,c="Le type String",s,n,p,i="Ce n'est pas un type primitif, c'est une classe (d'où la présence de la majuscule)",$,C,o,f,v,d,L="La chaîne de caractères se met entre guillemets",U,A,V,O,E="new",I,z,W;return f=new ie({props:{$$slots:{default:[Ds]},$$scope:{ctx:m}}}),z=new ie({props:{$$slots:{default:[Es]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("h4"),t.textContent=c,s=_(),n=g("ul"),p=g("li"),p.textContent=i,$=_(),C=g("li"),o=X(`Comme c'est une classe, on utilise le mot-clé new pour créer un objet, on parle d'une\r
			instance de classe de type String\r
			`),j(f.$$.fragment),v=_(),d=g("li"),d.textContent=L,U=_(),A=g("li"),V=X("Exceptionnellement, il est possible de déclarer une chaîne de caractères sans utiliser "),O=g("code"),O.textContent=E,I=_(),j(z.$$.fragment),this.h()},l(K){e=h(K,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-7p2708"&&(e.textContent=a),l=x(K),t=h(K,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-8317wg"&&(t.textContent=c),s=x(K),n=h(K,"UL",{});var k=le(n);p=h(k,"LI",{"data-svelte-h":!0}),b(p)!=="svelte-1q77k0k"&&(p.textContent=i),$=x(k),C=h(k,"LI",{});var D=le(C);o=Y(D,`Comme c'est une classe, on utilise le mot-clé new pour créer un objet, on parle d'une\r
			instance de classe de type String\r
			`),M(f.$$.fragment,D),D.forEach(r),v=x(k),d=h(k,"LI",{"data-svelte-h":!0}),b(d)!=="svelte-1uwz9ag"&&(d.textContent=L),U=x(k),A=h(k,"LI",{});var H=le(A);V=Y(H,"Exceptionnellement, il est possible de déclarer une chaîne de caractères sans utiliser "),O=h(H,"CODE",{class:!0,"data-svelte-h":!0}),b(O)!=="svelte-1ht496d"&&(O.textContent=E),I=x(H),M(z.$$.fragment,H),H.forEach(r),k.forEach(r),this.h()},h(){w(O,"class","text-purple-400")},m(K,k){u(K,e,k),u(K,l,k),u(K,t,k),u(K,s,k),u(K,n,k),G(n,p),G(n,$),G(n,C),G(C,o),S(f,C,null),G(n,v),G(n,d),G(n,U),G(n,A),G(A,V),G(A,O),G(A,I),S(z,A,null),W=!0},p(K,k){const D={};k&1&&(D.$$scope={dirty:k,ctx:K}),f.$set(D);const H={};k&1&&(H.$$scope={dirty:k,ctx:K}),z.$set(H)},i(K){W||(T(f.$$.fragment,K),T(z.$$.fragment,K),W=!0)},o(K){q(f.$$.fragment,K),q(z.$$.fragment,K),W=!1},d(K){K&&(r(e),r(l),r(t),r(s),r(n)),P(f),P(z)}}}function zs(m){let e=`
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Os(m){let e,a="Syntaxe",l,t,c,s,n,p=`La syntaxe de Java est similaire à celle de C++, mais elle a moins de fonctionnalités basées\r
			sur les pointeurs. Java est un langage de programmation orienté objet, ce qui signifie que les\r
			programmes Java sont constitués de classes et d'objets.`,i;return c=new ie({props:{id:"code",lines:"1-5",$$slots:{default:[zs]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("div"),j(c.$$.fragment),s=_(),n=g("p"),n.textContent=p,this.h()},l($){e=h($,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-16353j8"&&(e.textContent=a),l=x($),t=h($,"DIV",{class:!0});var C=le(t);M(c.$$.fragment,C),s=x(C),n=h(C,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-nq5fh3"&&(n.textContent=p),C.forEach(r),this.h()},h(){w(n,"class","italic r-strech"),w(t,"class","flex flex-col justify-center")},m($,C){u($,e,C),u($,l,C),u($,t,C),S(c,t,null),G(t,s),G(t,n),i=!0},p($,C){const o={};C&1&&(o.$$scope={dirty:C,ctx:$}),c.$set(o)},i($){i||(T(c.$$.fragment,$),i=!0)},o($){q(c.$$.fragment,$),i=!1},d($){$&&(r(e),r(l),r(t)),P(c)}}}function Us(m){let e=`
public class Main {
    public static void main(String[] args) {
		String name = "John";
		String name2 = new String("John");
		int age = 30;
		float salary = 1000.0f;
		boolean isJavaFun = false;
		char grade = 'A';
		System.out.println("Hello World");
    }
}`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Vs(m){let e,a="Syntaxe",l,t,c="Les variables",s,n,p,i;return p=new ie({props:{id:"code",lines:"3-7",$$slots:{default:[Us]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("h4"),t.textContent=c,s=_(),n=g("div"),j(p.$$.fragment),this.h()},l($){e=h($,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-16353j8"&&(e.textContent=a),l=x($),t=h($,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-7x7xjx"&&(t.textContent=c),s=x($),n=h($,"DIV",{class:!0});var C=le(n);M(p.$$.fragment,C),C.forEach(r),this.h()},h(){w(n,"class","flex flex-col justify-center")},m($,C){u($,e,C),u($,l,C),u($,t,C),u($,s,C),u($,n,C),S(p,n,null),i=!0},p($,C){const o={};C&1&&(o.$$scope={dirty:C,ctx:$}),p.$set(o)},i($){i||(T(p.$$.fragment,$),i=!0)},o($){q(p.$$.fragment,$),i=!1},d($){$&&(r(e),r(l),r(t),r(s),r(n)),P(p)}}}function ys(m){let e=`
public class Main {
    public static void main(String[] args) {
        if (condition) {
            // code block
        } else {
            // code block
        }
        System.out.println("Hello World");
    }
}`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Bs(m){let e,a="Syntaxe",l,t,c="Les structures de contrôle",s,n,p="Condition",i,$,C,o;return C=new ie({props:{id:"code",lines:"3-7",$$slots:{default:[ys]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("h4"),t.textContent=c,s=_(),n=g("h5"),n.textContent=p,i=_(),$=g("div"),j(C.$$.fragment),this.h()},l(f){e=h(f,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-16353j8"&&(e.textContent=a),l=x(f),t=h(f,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-1ys0pg8"&&(t.textContent=c),s=x(f),n=h(f,"H5",{"data-svelte-h":!0}),b(n)!=="svelte-k67mux"&&(n.textContent=p),i=x(f),$=h(f,"DIV",{class:!0});var v=le($);M(C.$$.fragment,v),v.forEach(r),this.h()},h(){w($,"class","flex flex-col justify-center")},m(f,v){u(f,e,v),u(f,l,v),u(f,t,v),u(f,s,v),u(f,n,v),u(f,i,v),u(f,$,v),S(C,$,null),o=!0},p(f,v){const d={};v&1&&(d.$$scope={dirty:v,ctx:f}),C.$set(d)},i(f){o||(T(C.$$.fragment,f),o=!0)},o(f){q(C.$$.fragment,f),o=!1},d(f){f&&(r(e),r(l),r(t),r(s),r(n),r(i),r($)),P(C)}}}function Js(m){let e=`
public class Main {
    public static void main(String[] args) {
        for (int i = 0; i < 5; i++) {
            // code block
        }
        System.out.println("Hello World");
    }
}`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Fs(m){let e,a="Syntaxe",l,t,c="Les structures de contrôle",s,n,p="Boucle",i,$,C,o;return C=new ie({props:{id:"code",lines:"3-5",$$slots:{default:[Js]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("h4"),t.textContent=c,s=_(),n=g("h5"),n.textContent=p,i=_(),$=g("div"),j(C.$$.fragment),this.h()},l(f){e=h(f,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-16353j8"&&(e.textContent=a),l=x(f),t=h(f,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-1ys0pg8"&&(t.textContent=c),s=x(f),n=h(f,"H5",{"data-svelte-h":!0}),b(n)!=="svelte-fyqcl4"&&(n.textContent=p),i=x(f),$=h(f,"DIV",{class:!0});var v=le($);M(C.$$.fragment,v),v.forEach(r),this.h()},h(){w($,"class","flex flex-col justify-center")},m(f,v){u(f,e,v),u(f,l,v),u(f,t,v),u(f,s,v),u(f,n,v),u(f,i,v),u(f,$,v),S(C,$,null),o=!0},p(f,v){const d={};v&1&&(d.$$scope={dirty:v,ctx:f}),C.$set(d)},i(f){o||(T(C.$$.fragment,f),o=!0)},o(f){q(C.$$.fragment,f),o=!1},d(f){f&&(r(e),r(l),r(t),r(s),r(n),r(i),r($)),P(C)}}}function Ns(m){let e=`
public class Main {
    public static void main(String[] args) {
        int i = 0;
        while (i < 5) {
            // code block
            i++;
        }
        System.out.println("Hello World");
    }
}`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Rs(m){let e,a="Syntaxe",l,t,c="Les structures de contrôle",s,n,p="Boucle",i,$,C,o;return C=new ie({props:{id:"code",lines:"3-7",$$slots:{default:[Ns]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("h4"),t.textContent=c,s=_(),n=g("h5"),n.textContent=p,i=_(),$=g("div"),j(C.$$.fragment),this.h()},l(f){e=h(f,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-16353j8"&&(e.textContent=a),l=x(f),t=h(f,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-1ys0pg8"&&(t.textContent=c),s=x(f),n=h(f,"H5",{"data-svelte-h":!0}),b(n)!=="svelte-fyqcl4"&&(n.textContent=p),i=x(f),$=h(f,"DIV",{class:!0});var v=le($);M(C.$$.fragment,v),v.forEach(r),this.h()},h(){w($,"class","flex flex-col justify-center")},m(f,v){u(f,e,v),u(f,l,v),u(f,t,v),u(f,s,v),u(f,n,v),u(f,i,v),u(f,$,v),S(C,$,null),o=!0},p(f,v){const d={};v&1&&(d.$$scope={dirty:v,ctx:f}),C.$set(d)},i(f){o||(T(C.$$.fragment,f),o=!0)},o(f){q(C.$$.fragment,f),o=!1},d(f){f&&(r(e),r(l),r(t),r(s),r(n),r(i),r($)),P(C)}}}function Gs(m){let e=`
public class Main {
    public static void main(String[] args) {
        int i = 0;
        do {
            // code block
            i++;
        } while (i < 5);
        System.out.println("Hello World");
    }
}`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Qs(m){let e,a="Syntaxe",l,t,c="Les structures de contrôle",s,n,p="Boucle",i,$,C,o;return C=new ie({props:{id:"code",lines:"3-7",$$slots:{default:[Gs]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("h4"),t.textContent=c,s=_(),n=g("h5"),n.textContent=p,i=_(),$=g("div"),j(C.$$.fragment),this.h()},l(f){e=h(f,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-16353j8"&&(e.textContent=a),l=x(f),t=h(f,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-1ys0pg8"&&(t.textContent=c),s=x(f),n=h(f,"H5",{"data-svelte-h":!0}),b(n)!=="svelte-fyqcl4"&&(n.textContent=p),i=x(f),$=h(f,"DIV",{class:!0});var v=le($);M(C.$$.fragment,v),v.forEach(r),this.h()},h(){w($,"class","flex flex-col justify-center")},m(f,v){u(f,e,v),u(f,l,v),u(f,t,v),u(f,s,v),u(f,n,v),u(f,i,v),u(f,$,v),S(C,$,null),o=!0},p(f,v){const d={};v&1&&(d.$$scope={dirty:v,ctx:f}),C.$set(d)},i(f){o||(T(C.$$.fragment,f),o=!0)},o(f){q(C.$$.fragment,f),o=!1},d(f){f&&(r(e),r(l),r(t),r(s),r(n),r(i),r($)),P(C)}}}function Ws(m){let e=`
        public class Main {
            public static void main(String[] args) {
                int age = 30;
                switch (age) {
                    case <10:
                        // code block
                        break;
                    case <18:
                        // code block
                        break;
                    default:
                        // code block
                }
                System.out.println("Hello World");
            }
        }`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Ks(m){let e,a="Syntaxe",l,t,c="Les structures de contrôle",s,n,p="Les switch",i,$,C,o;return C=new ie({props:{id:"code",lines:"3-13",$$slots:{default:[Ws]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("h4"),t.textContent=c,s=_(),n=g("h5"),n.textContent=p,i=_(),$=g("div"),j(C.$$.fragment),this.h()},l(f){e=h(f,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-16353j8"&&(e.textContent=a),l=x(f),t=h(f,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-1ys0pg8"&&(t.textContent=c),s=x(f),n=h(f,"H5",{"data-svelte-h":!0}),b(n)!=="svelte-1f33u0k"&&(n.textContent=p),i=x(f),$=h(f,"DIV",{class:!0});var v=le($);M(C.$$.fragment,v),v.forEach(r),this.h()},h(){w($,"class","flex flex-col justify-center")},m(f,v){u(f,e,v),u(f,l,v),u(f,t,v),u(f,s,v),u(f,n,v),u(f,i,v),u(f,$,v),S(C,$,null),o=!0},p(f,v){const d={};v&1&&(d.$$scope={dirty:v,ctx:f}),C.$set(d)},i(f){o||(T(C.$$.fragment,f),o=!0)},o(f){q(C.$$.fragment,f),o=!1},d(f){f&&(r(e),r(l),r(t),r(s),r(n),r(i),r($)),P(C)}}}function Zs(m){let e=`
			public class Main {
				public static void main(String[] args) {
					try {
						int[] myNumbers = {1, 2, 3};
						System.out.println(myNumbers[10]);
					} catch (Exception e) {
						System.out.println("Something went wrong.");
					}
				}
			}
			`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Ys(m){let e,a="Syntaxe",l,t,c="Les exceptions",s,n,p,i;return p=new ie({props:{id:"code",lines:"3-8",$$slots:{default:[Zs]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("h4"),t.textContent=c,s=_(),n=g("div"),j(p.$$.fragment),this.h()},l($){e=h($,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-16353j8"&&(e.textContent=a),l=x($),t=h($,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-5w960"&&(t.textContent=c),s=x($),n=h($,"DIV",{class:!0});var C=le(n);M(p.$$.fragment,C),C.forEach(r),this.h()},h(){w(n,"class","flex flex-col justify-center")},m($,C){u($,e,C),u($,l,C),u($,t,C),u($,s,C),u($,n,C),S(p,n,null),i=!0},p($,C){const o={};C&1&&(o.$$scope={dirty:C,ctx:$}),p.$set(o)},i($){i||(T(p.$$.fragment,$),i=!0)},o($){q(p.$$.fragment,$),i=!1},d($){$&&(r(e),r(l),r(t),r(s),r(n)),P(p)}}}function Xs(m){let e=`
import java.util.Random;
public class Main {
	public static void main(String [] args){
		Random r = new Random();
		int a;
		a = r.nextInt(100);
		System.out.println(a + "	" + r.nextInt(20));
	}
}
`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function en(m){let e,a='La génération de nombres "aléatoires"',l,t,c,s;return c=new ie({props:{id:"code",lines:"4-6",$$slots:{default:[Xs]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("div"),j(c.$$.fragment),this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1wotoib"&&(e.textContent=a),l=x(n),t=h(n,"DIV",{class:!0});var p=le(t);M(c.$$.fragment,p),p.forEach(r),this.h()},h(){w(t,"class","flex flex-col justify-center")},m(n,p){u(n,e,p),u(n,l,p),u(n,t,p),S(c,t,null),s=!0},p(n,p){const i={};p&1&&(i.$$scope={dirty:p,ctx:n}),c.$set(i)},i(n){s||(T(c.$$.fragment,n),s=!0)},o(n){q(c.$$.fragment,n),s=!1},d(n){n&&(r(e),r(l),r(t)),P(c)}}}function tn(m){let e=`
import java.util.Scanner ;
public class Main {
	public static void main(String[] args) {
		int i;
		System.out.println("Entrez un entier: ");
		Scanner clavier = new Scanner(System.in);
		i = clavier.nextInt();
		System.out.println("Vous avez entré : "+i);
	}
}
			`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function ln(m){let e,a="Syntaxe",l,t,c="La lecture clavier",s,n,p,i,$,C=`<li><code class="inlineCode">nextInt()</code> : gets the next integer</li> <li><code class="inlineCode">nextBoolean()</code> : gets the next Boolean</li> <li><code class="inlineCode">nextDouble()</code> : gets the next double</li> <li><code class="inlineCode">nextFloat()</code> : gets the next float</li> <li><code class="inlineCode">nextShort()</code> : gets the next short</li> <li><code class="inlineCode">next()</code> : gets the next string (a line can have multiple strings
				separated by space)</li> <li><code class="inlineCode">nextLine()</code> : gets the next line</li>`,o;return p=new ie({props:{id:"code",lines:"6-7",$$slots:{default:[tn]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("h4"),t.textContent=c,s=_(),n=g("div"),j(p.$$.fragment),i=_(),$=g("ul"),$.innerHTML=C,this.h()},l(f){e=h(f,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-16353j8"&&(e.textContent=a),l=x(f),t=h(f,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-1f59xtj"&&(t.textContent=c),s=x(f),n=h(f,"DIV",{class:!0});var v=le(n);M(p.$$.fragment,v),i=x(v),$=h(v,"UL",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-yozt3p"&&($.innerHTML=C),v.forEach(r),this.h()},h(){w($,"class","text-2xl w-1/2"),w(n,"class","flex flex-row justify-center items-center")},m(f,v){u(f,e,v),u(f,l,v),u(f,t,v),u(f,s,v),u(f,n,v),S(p,n,null),G(n,i),G(n,$),o=!0},p(f,v){const d={};v&1&&(d.$$scope={dirty:v,ctx:f}),p.$set(d)},i(f){o||(T(p.$$.fragment,f),o=!0)},o(f){q(p.$$.fragment,f),o=!1},d(f){f&&(r(e),r(l),r(t),r(s),r(n)),P(p)}}}function sn(m){let e,a,l,t,c,s,n,p,i,$,C,o,f,v,d,L,U,A,V,O,E,I,z,W,K,k,D,H,R,se,re,Q,Z,ae;return e=new y({props:{$$slots:{default:[qs]},$$scope:{ctx:m}}}),l=new y({props:{$$slots:{default:[Ts]},$$scope:{ctx:m}}}),c=new y({props:{$$slots:{default:[Ss]},$$scope:{ctx:m}}}),n=new y({props:{$$slots:{default:[js]},$$scope:{ctx:m}}}),i=new y({props:{$$slots:{default:[ks]},$$scope:{ctx:m}}}),C=new y({props:{$$slots:{default:[As]},$$scope:{ctx:m}}}),f=new y({props:{$$slots:{default:[Is]},$$scope:{ctx:m}}}),d=new y({props:{$$slots:{default:[Os]},$$scope:{ctx:m}}}),U=new y({props:{$$slots:{default:[Vs]},$$scope:{ctx:m}}}),V=new y({props:{$$slots:{default:[Bs]},$$scope:{ctx:m}}}),E=new y({props:{$$slots:{default:[Fs]},$$scope:{ctx:m}}}),z=new y({props:{$$slots:{default:[Rs]},$$scope:{ctx:m}}}),K=new y({props:{$$slots:{default:[Qs]},$$scope:{ctx:m}}}),D=new y({props:{$$slots:{default:[Ks]},$$scope:{ctx:m}}}),R=new y({props:{$$slots:{default:[Ys]},$$scope:{ctx:m}}}),re=new y({props:{$$slots:{default:[en]},$$scope:{ctx:m}}}),Z=new y({props:{$$slots:{default:[ln]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment),a=_(),j(l.$$.fragment),t=_(),j(c.$$.fragment),s=_(),j(n.$$.fragment),p=_(),j(i.$$.fragment),$=_(),j(C.$$.fragment),o=_(),j(f.$$.fragment),v=_(),j(d.$$.fragment),L=_(),j(U.$$.fragment),A=_(),j(V.$$.fragment),O=_(),j(E.$$.fragment),I=_(),j(z.$$.fragment),W=_(),j(K.$$.fragment),k=_(),j(D.$$.fragment),H=_(),j(R.$$.fragment),se=_(),j(re.$$.fragment),Q=_(),j(Z.$$.fragment)},l(N){M(e.$$.fragment,N),a=x(N),M(l.$$.fragment,N),t=x(N),M(c.$$.fragment,N),s=x(N),M(n.$$.fragment,N),p=x(N),M(i.$$.fragment,N),$=x(N),M(C.$$.fragment,N),o=x(N),M(f.$$.fragment,N),v=x(N),M(d.$$.fragment,N),L=x(N),M(U.$$.fragment,N),A=x(N),M(V.$$.fragment,N),O=x(N),M(E.$$.fragment,N),I=x(N),M(z.$$.fragment,N),W=x(N),M(K.$$.fragment,N),k=x(N),M(D.$$.fragment,N),H=x(N),M(R.$$.fragment,N),se=x(N),M(re.$$.fragment,N),Q=x(N),M(Z.$$.fragment,N)},m(N,ee){S(e,N,ee),u(N,a,ee),S(l,N,ee),u(N,t,ee),S(c,N,ee),u(N,s,ee),S(n,N,ee),u(N,p,ee),S(i,N,ee),u(N,$,ee),S(C,N,ee),u(N,o,ee),S(f,N,ee),u(N,v,ee),S(d,N,ee),u(N,L,ee),S(U,N,ee),u(N,A,ee),S(V,N,ee),u(N,O,ee),S(E,N,ee),u(N,I,ee),S(z,N,ee),u(N,W,ee),S(K,N,ee),u(N,k,ee),S(D,N,ee),u(N,H,ee),S(R,N,ee),u(N,se,ee),S(re,N,ee),u(N,Q,ee),S(Z,N,ee),ae=!0},p(N,[ee]){const ue={};ee&1&&(ue.$$scope={dirty:ee,ctx:N}),e.$set(ue);const fe={};ee&1&&(fe.$$scope={dirty:ee,ctx:N}),l.$set(fe);const ce={};ee&1&&(ce.$$scope={dirty:ee,ctx:N}),c.$set(ce);const me={};ee&1&&(me.$$scope={dirty:ee,ctx:N}),n.$set(me);const pe={};ee&1&&(pe.$$scope={dirty:ee,ctx:N}),i.$set(pe);const _e={};ee&1&&(_e.$$scope={dirty:ee,ctx:N}),C.$set(_e);const xe={};ee&1&&(xe.$$scope={dirty:ee,ctx:N}),f.$set(xe);const Ce={};ee&1&&(Ce.$$scope={dirty:ee,ctx:N}),d.$set(Ce);const J={};ee&1&&(J.$$scope={dirty:ee,ctx:N}),U.$set(J);const te={};ee&1&&(te.$$scope={dirty:ee,ctx:N}),V.$set(te);const de={};ee&1&&(de.$$scope={dirty:ee,ctx:N}),E.$set(de);const ve={};ee&1&&(ve.$$scope={dirty:ee,ctx:N}),z.$set(ve);const he={};ee&1&&(he.$$scope={dirty:ee,ctx:N}),K.$set(he);const Le={};ee&1&&(Le.$$scope={dirty:ee,ctx:N}),D.$set(Le);const F={};ee&1&&(F.$$scope={dirty:ee,ctx:N}),R.$set(F);const ne={};ee&1&&(ne.$$scope={dirty:ee,ctx:N}),re.$set(ne);const He={};ee&1&&(He.$$scope={dirty:ee,ctx:N}),Z.$set(He)},i(N){ae||(T(e.$$.fragment,N),T(l.$$.fragment,N),T(c.$$.fragment,N),T(n.$$.fragment,N),T(i.$$.fragment,N),T(C.$$.fragment,N),T(f.$$.fragment,N),T(d.$$.fragment,N),T(U.$$.fragment,N),T(V.$$.fragment,N),T(E.$$.fragment,N),T(z.$$.fragment,N),T(K.$$.fragment,N),T(D.$$.fragment,N),T(R.$$.fragment,N),T(re.$$.fragment,N),T(Z.$$.fragment,N),ae=!0)},o(N){q(e.$$.fragment,N),q(l.$$.fragment,N),q(c.$$.fragment,N),q(n.$$.fragment,N),q(i.$$.fragment,N),q(C.$$.fragment,N),q(f.$$.fragment,N),q(d.$$.fragment,N),q(U.$$.fragment,N),q(V.$$.fragment,N),q(E.$$.fragment,N),q(z.$$.fragment,N),q(K.$$.fragment,N),q(D.$$.fragment,N),q(R.$$.fragment,N),q(re.$$.fragment,N),q(Z.$$.fragment,N),ae=!1},d(N){N&&(r(a),r(t),r(s),r(p),r($),r(o),r(v),r(L),r(A),r(O),r(I),r(W),r(k),r(H),r(se),r(Q)),P(e,N),P(l,N),P(c,N),P(n,N),P(i,N),P(C,N),P(f,N),P(d,N),P(U,N),P(V,N),P(E,N),P(z,N),P(K,N),P(D,N),P(R,N),P(re,N),P(Z,N)}}}class nn extends be{constructor(e){super(),we(this,e,null,sn,ge,{})}}function rn(m){let e,a=`Le polymorphisme est un concept clé de la programmation orientée objet qui permet à des objets de différents types de\r
			être traités comme des objets du même type.`,l,t,c="Il permet d'utiliser une interface commune pour manipuler des objets de classes différentes.";return{c(){e=g("p"),e.textContent=a,l=_(),t=g("p"),t.textContent=c},l(s){e=h(s,"P",{"data-svelte-h":!0}),b(e)!=="svelte-11q2ge8"&&(e.textContent=a),l=x(s),t=h(s,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1pdh2kw"&&(t.textContent=c)},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function an(m){let e=`
    class MathUtils {
        int additionner(int a, int b) {
            return a + b;
        }

        double additionner(double a, double b) {
            return a + b;
        }
    }
    `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function un(m){let e,a="Polymorphisme à la compilation",l,t,c="Le polymorphisme à la compilation, ou polymorphisme statique, est réalisé par la surcharge de méthodes.",s,n,p,i,$="Dans cet exemple, la méthode <code>additionner</code> est surchargée pour accepter différents types de paramètres.",C;return n=new ie({props:{$$slots:{default:[an]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.textContent=c,s=_(),j(n.$$.fragment),p=_(),i=g("p"),i.innerHTML=$},l(o){e=h(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-plirla"&&(e.textContent=a),l=x(o),t=h(o,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1uiqfmv"&&(t.textContent=c),s=x(o),M(n.$$.fragment,o),p=x(o),i=h(o,"P",{"data-svelte-h":!0}),b(i)!=="svelte-k07nbj"&&(i.innerHTML=$)},m(o,f){u(o,e,f),u(o,l,f),u(o,t,f),u(o,s,f),S(n,o,f),u(o,p,f),u(o,i,f),C=!0},p(o,f){const v={};f&1&&(v.$$scope={dirty:f,ctx:o}),n.$set(v)},i(o){C||(T(n.$$.fragment,o),C=!0)},o(o){q(n.$$.fragment,o),C=!1},d(o){o&&(r(e),r(l),r(t),r(s),r(p),r(i)),P(n,o)}}}function on(m){let e=`
    class Animal {
        void faireDuBruit() {
            System.out.println("L'animal fait du bruit");
        }
    }

    class Chien extends Animal {
        void faireDuBruit() {
            System.out.println("Le chien aboie");
        }
    }

    class Chat extends Animal {
        void faireDuBruit() {
            System.out.println("Le chat miaule");
        }
    }
    `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function $n(m){let e,a="Polymorphisme à l'exécution",l,t,c="Le polymorphisme à l'exécution, ou polymorphisme dynamique, est réalisé par la redéfinition de méthodes.",s,n,p,i,$="Dans cet exemple, les classes <code>Chien</code> et <code>Chat</code> redéfinissent la méthode <code>faireDuBruit</code> de la classe <code>Animal</code>.",C;return n=new ie({props:{$$slots:{default:[on]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.textContent=c,s=_(),j(n.$$.fragment),p=_(),i=g("p"),i.innerHTML=$,this.h()},l(o){e=h(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-18elcun"&&(e.textContent=a),l=x(o),t=h(o,"P",{"data-svelte-h":!0}),b(t)!=="svelte-4x0xhv"&&(t.textContent=c),s=x(o),M(n.$$.fragment,o),p=x(o),i=h(o,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-8ipo21"&&(i.innerHTML=$),this.h()},h(){w(i,"class","smaller")},m(o,f){u(o,e,f),u(o,l,f),u(o,t,f),u(o,s,f),S(n,o,f),u(o,p,f),u(o,i,f),C=!0},p(o,f){const v={};f&1&&(v.$$scope={dirty:f,ctx:o}),n.$set(v)},i(o){C||(T(n.$$.fragment,o),C=!0)},o(o){q(n.$$.fragment,o),C=!1},d(o){o&&(r(e),r(l),r(t),r(s),r(p),r(i)),P(n,o)}}}function fn(m){let e=`
    Animal monAnimal = new Chien();
    monAnimal.faireDuBruit(); // Le chien aboie

    monAnimal = new Chat();
    monAnimal.faireDuBruit(); // Le chat miaule
    `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function cn(m){let e,a="Utilisation du polymorphisme",l,t,c="Le polymorphisme permet de traiter des objets de différentes classes de manière uniforme.",s,n,p,i,$="Dans cet exemple, la variable <code>monAnimal</code> peut référencer des objets de type <code>Chien</code> ou <code>Chat</code> et appeler la méthode <code>faireDuBruit</code>.",C;return n=new ie({props:{$$slots:{default:[fn]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.textContent=c,s=_(),j(n.$$.fragment),p=_(),i=g("p"),i.innerHTML=$},l(o){e=h(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1pudvuy"&&(e.textContent=a),l=x(o),t=h(o,"P",{"data-svelte-h":!0}),b(t)!=="svelte-w2fuv6"&&(t.textContent=c),s=x(o),M(n.$$.fragment,o),p=x(o),i=h(o,"P",{"data-svelte-h":!0}),b(i)!=="svelte-wqomej"&&(i.innerHTML=$)},m(o,f){u(o,e,f),u(o,l,f),u(o,t,f),u(o,s,f),S(n,o,f),u(o,p,f),u(o,i,f),C=!0},p(o,f){const v={};f&1&&(v.$$scope={dirty:f,ctx:o}),n.$set(v)},i(o){C||(T(n.$$.fragment,o),C=!0)},o(o){q(n.$$.fragment,o),C=!1},d(o){o&&(r(e),r(l),r(t),r(s),r(p),r(i)),P(n,o)}}}function pn(m){let e,a="Avantages du polymorphisme",l,t,c="<li>Facilite la maintenance et l&#39;évolution du code.</li> <li>Permet de créer des systèmes plus flexibles et extensibles.</li> <li>Encourage l&#39;utilisation d&#39;interfaces et de classes abstraites.</li>";return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("ul"),t.innerHTML=c},l(s){e=h(s,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-cqy8ul"&&(e.textContent=a),l=x(s),t=h(s,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-xqpuls"&&(t.innerHTML=c)},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function mn(m){let e=`
    abstract class Forme {
        abstract double calculerSurface();
    }

    class Cercle extends Forme {
        double rayon;
        Cercle(double rayon) {
            this.rayon = rayon;
        }
        double calculerSurface() {
            return Math.PI * rayon * rayon;
        }
    }

    class Rectangle extends Forme {
        double largeur, hauteur;
        Rectangle(double largeur, double hauteur) {
            this.largeur = largeur;
            this.hauteur = hauteur;
        }
        double calculerSurface() {
            return largeur * hauteur;
        }
    }
    `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function dn(m){let e,a="Exemple pratique",l,t,c="Imaginons une application de gestion de formes géométriques. Chaque forme doit pouvoir calculer sa surface.",s,n,p;return n=new ie({props:{$$slots:{default:[mn]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.textContent=c,s=_(),j(n.$$.fragment)},l(i){e=h(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-fryfx"&&(e.textContent=a),l=x(i),t=h(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1rk0t8n"&&(t.textContent=c),s=x(i),M(n.$$.fragment,i)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),S(n,i,$),p=!0},p(i,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:i}),n.$set(C)},i(i){p||(T(n.$$.fragment,i),p=!0)},o(i){q(n.$$.fragment,i),p=!1},d(i){i&&(r(e),r(l),r(t),r(s)),P(n,i)}}}function vn(m){let e=`
    Forme maForme = new Cercle(5);
    System.out.println(maForme.calculerSurface()); // Affiche la surface du cercle

    maForme = new Rectangle(4, 6);
    System.out.println(maForme.calculerSurface()); // Affiche la surface du rectangle
    `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function xn(m){let e,a="On peut maintenant utiliser le polymorphisme pour calculer la surface de différentes formes sans se soucier de leur type spécifique.",l,t,c;return t=new ie({props:{$$slots:{default:[vn]},$$scope:{ctx:m}}}),{c(){e=g("p"),e.textContent=a,l=_(),j(t.$$.fragment)},l(s){e=h(s,"P",{"data-svelte-h":!0}),b(e)!=="svelte-og5e84"&&(e.textContent=a),l=x(s),M(t.$$.fragment,s)},m(s,n){u(s,e,n),u(s,l,n),S(t,s,n),c=!0},p(s,n){const p={};n&1&&(p.$$scope={dirty:n,ctx:s}),t.$set(p)},i(s){c||(T(t.$$.fragment,s),c=!0)},o(s){q(t.$$.fragment,s),c=!1},d(s){s&&(r(e),r(l)),P(t,s)}}}function _n(m){let e,a="Utiliser le type le plus générique possible",l,t,c=`Lorsque vous codez des méthodes "polymorphiques", il est recommandé d'utiliser le type le plus générique possible. Cela permet de réutiliser le code plus facilement et de rendre le système plus flexible.`,s,n,p="Par exemple, si une méthode fonctionne pour un <code>Oiseau</code>, il est pertinent de se demander si elle pourrait s&#39;appliquer à tout <code>Animal</code> ou à une de ses interfaces.";return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.textContent=c,s=_(),n=g("p"),n.innerHTML=p},l(i){e=h(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1gonlod"&&(e.textContent=a),l=x(i),t=h(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-4msycu"&&(t.textContent=c),s=x(i),n=h(i,"P",{"data-svelte-h":!0}),b(n)!=="svelte-17qf5k6"&&(n.innerHTML=p)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),u(i,n,$)},p:B,d(i){i&&(r(e),r(l),r(t),r(s),r(n))}}}function Cn(m){let e,a="Polymorphisme",l,t,c,s,n,p,i,$,C,o,f,v,d,L,U,A,V;return t=new y({props:{$$slots:{default:[rn]},$$scope:{ctx:m}}}),s=new y({props:{$$slots:{default:[un]},$$scope:{ctx:m}}}),p=new y({props:{$$slots:{default:[$n]},$$scope:{ctx:m}}}),$=new y({props:{$$slots:{default:[cn]},$$scope:{ctx:m}}}),o=new y({props:{$$slots:{default:[pn]},$$scope:{ctx:m}}}),v=new y({props:{className:"smaller",$$slots:{default:[dn]},$$scope:{ctx:m}}}),L=new y({props:{$$slots:{default:[xn]},$$scope:{ctx:m}}}),A=new y({props:{$$slots:{default:[_n]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),j(t.$$.fragment),c=_(),j(s.$$.fragment),n=_(),j(p.$$.fragment),i=_(),j($.$$.fragment),C=_(),j(o.$$.fragment),f=_(),j(v.$$.fragment),d=_(),j(L.$$.fragment),U=_(),j(A.$$.fragment)},l(O){e=h(O,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-18uzcw"&&(e.textContent=a),l=x(O),M(t.$$.fragment,O),c=x(O),M(s.$$.fragment,O),n=x(O),M(p.$$.fragment,O),i=x(O),M($.$$.fragment,O),C=x(O),M(o.$$.fragment,O),f=x(O),M(v.$$.fragment,O),d=x(O),M(L.$$.fragment,O),U=x(O),M(A.$$.fragment,O)},m(O,E){u(O,e,E),u(O,l,E),S(t,O,E),u(O,c,E),S(s,O,E),u(O,n,E),S(p,O,E),u(O,i,E),S($,O,E),u(O,C,E),S(o,O,E),u(O,f,E),S(v,O,E),u(O,d,E),S(L,O,E),u(O,U,E),S(A,O,E),V=!0},p(O,E){const I={};E&1&&(I.$$scope={dirty:E,ctx:O}),t.$set(I);const z={};E&1&&(z.$$scope={dirty:E,ctx:O}),s.$set(z);const W={};E&1&&(W.$$scope={dirty:E,ctx:O}),p.$set(W);const K={};E&1&&(K.$$scope={dirty:E,ctx:O}),$.$set(K);const k={};E&1&&(k.$$scope={dirty:E,ctx:O}),o.$set(k);const D={};E&1&&(D.$$scope={dirty:E,ctx:O}),v.$set(D);const H={};E&1&&(H.$$scope={dirty:E,ctx:O}),L.$set(H);const R={};E&1&&(R.$$scope={dirty:E,ctx:O}),A.$set(R)},i(O){V||(T(t.$$.fragment,O),T(s.$$.fragment,O),T(p.$$.fragment,O),T($.$$.fragment,O),T(o.$$.fragment,O),T(v.$$.fragment,O),T(L.$$.fragment,O),T(A.$$.fragment,O),V=!0)},o(O){q(t.$$.fragment,O),q(s.$$.fragment,O),q(p.$$.fragment,O),q($.$$.fragment,O),q(o.$$.fragment,O),q(v.$$.fragment,O),q(L.$$.fragment,O),q(A.$$.fragment,O),V=!1},d(O){O&&(r(e),r(l),r(c),r(n),r(i),r(C),r(f),r(d),r(U)),P(t,O),P(s,O),P(p,O),P($,O),P(o,O),P(v,O),P(L,O),P(A,O)}}}function hn(m){let e,a;return e=new y({props:{$$slots:{default:[Cn]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,t){S(e,l,t),a=!0},p(l,[t]){const c={};t&1&&(c.$$scope={dirty:t,ctx:l}),e.$set(c)},i(l){a||(T(e.$$.fragment,l),a=!0)},o(l){q(e.$$.fragment,l),a=!1},d(l){P(e,l)}}}class gn extends be{constructor(e){super(),we(this,e,null,hn,ge,{})}}function bn(m){let e,a=`Les membres statiques appartiennent à la classe plutôt qu'à une instance spécifique de la\r
			classe.`,l,t,c="Ils sont partagés par toutes les instances de la classe.",s,n,p="Cela signifie que vous pouvez accéder à un membre statique sans créer d'instance de la classe.";return{c(){e=g("p"),e.textContent=a,l=_(),t=g("p"),t.textContent=c,s=_(),n=g("p"),n.textContent=p},l(i){e=h(i,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1630q1j"&&(e.textContent=a),l=x(i),t=h(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1eojfzb"&&(t.textContent=c),s=x(i),n=h(i,"P",{"data-svelte-h":!0}),b(n)!=="svelte-5aucu0"&&(n.textContent=p)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),u(i,n,$)},p:B,d(i){i&&(r(e),r(l),r(t),r(s),r(n))}}}function wn(m){let e=`
			// Non-static
			class Compteur {
				int count = 0;

				void increment() {
					count++;
				}
			}

			Compteur c1 = new Compteur();
			Compteur c2 = new Compteur();
			c1.increment();
			c2.increment();
			System.out.println(c1.count); // Affiche 1
			System.out.println(c2.count); // Affiche 1
			`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Ln(m){let e=`
			// Static
			class Compteur {
				static int count = 0;

				static void increment() {
					count++;
				}
			}

			Compteur.increment();
			Compteur.increment();
			System.out.println(Compteur.count); // Affiche 2
			`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Hn(m){let e,a="Attributs statiques",l,t,c,s,n,p,i,$=`Notez qu&#39;il n&#39;est pas nécessaire de créer une instance de la classe <code>Compteur</code> pour accéder à l&#39;attribut statique <code>count</code>.
			En outre <code>count</code> est partagé entre toutes les instances de la classe <code>Compteur</code>.`,C;return c=new ie({props:{class:"language-java",$$slots:{default:[wn]},$$scope:{ctx:m}}}),n=new ie({props:{$$slots:{default:[Ln]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("div"),j(c.$$.fragment),s=_(),j(n.$$.fragment),p=_(),i=g("p"),i.innerHTML=$,this.h()},l(o){e=h(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-toavhx"&&(e.textContent=a),l=x(o),t=h(o,"DIV",{class:!0});var f=le(t);M(c.$$.fragment,f),s=x(f),M(n.$$.fragment,f),f.forEach(r),p=x(o),i=h(o,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-ub3qaw"&&(i.innerHTML=$),this.h()},h(){w(t,"class","flex flex-row "),w(i,"class","smaller")},m(o,f){u(o,e,f),u(o,l,f),u(o,t,f),S(c,t,null),G(t,s),S(n,t,null),u(o,p,f),u(o,i,f),C=!0},p(o,f){const v={};f&1&&(v.$$scope={dirty:f,ctx:o}),c.$set(v);const d={};f&1&&(d.$$scope={dirty:f,ctx:o}),n.$set(d)},i(o){C||(T(c.$$.fragment,o),T(n.$$.fragment,o),C=!0)},o(o){q(c.$$.fragment,o),q(n.$$.fragment,o),C=!1},d(o){o&&(r(e),r(l),r(t),r(p),r(i)),P(c),P(n)}}}function Pn(m){let e=`
	class MathUtils {
		static int additionner(int a, int b) {
			return a + b;
		}
	}
	
	int result = MathUtils.additionner(3, 4);
	`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function qn(m){let e,a="Méthodes statiques",l,t,c,s,n=`La méthode <code>additionner</code> peut être appelée sans créer une instance de la classe
			<code>MathUtils</code>.`,p,i,$="Remarquez que vous utilisez <code>System.out.println()</code> sans créer d&#39;instance de la classe, il s&#39;agit 		d&#39;une méthode statique.",C;return t=new ie({props:{$$slots:{default:[Pn]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),j(t.$$.fragment),c=_(),s=g("p"),s.innerHTML=n,p=_(),i=g("p"),i.innerHTML=$},l(o){e=h(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-n0ip6m"&&(e.textContent=a),l=x(o),M(t.$$.fragment,o),c=x(o),s=h(o,"P",{"data-svelte-h":!0}),b(s)!=="svelte-1ww0p7q"&&(s.innerHTML=n),p=x(o),i=h(o,"P",{"data-svelte-h":!0}),b(i)!=="svelte-17rashm"&&(i.innerHTML=$)},m(o,f){u(o,e,f),u(o,l,f),S(t,o,f),u(o,c,f),u(o,s,f),u(o,p,f),u(o,i,f),C=!0},p(o,f){const v={};f&1&&(v.$$scope={dirty:f,ctx:o}),t.$set(v)},i(o){C||(T(t.$$.fragment,o),C=!0)},o(o){q(t.$$.fragment,o),C=!1},d(o){o&&(r(e),r(l),r(c),r(s),r(p),r(i)),P(t,o)}}}function Tn(m){let e=`
		class Exemple {
			int instanceVariable = 10;

			static void methodeStatique() {
				// Erreur : impossible d'accéder à une variable d'instance depuis une méthode statique
				// System.out.println(instanceVariable);
			}

			void methodeInstance() {
				System.out.println(instanceVariable); // Ceci est valide
			}
		}
			`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Sn(m){let e,a="Limitation des méthodes statiques",l,t,c,s,n=`Une méthode statique ne peut pas accéder directement aux attributs ou méthodes non statiques de la classe. \r
			Cela est dû au fait que les méthodes statiques n'ont pas de référence à une instance spécifique de la classe.`,p;return t=new ie({props:{$$slots:{default:[Tn]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),j(t.$$.fragment),c=_(),s=g("p"),s.textContent=n},l(i){e=h(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-mxao6o"&&(e.textContent=a),l=x(i),M(t.$$.fragment,i),c=x(i),s=h(i,"P",{"data-svelte-h":!0}),b(s)!=="svelte-38klnp"&&(s.textContent=n)},m(i,$){u(i,e,$),u(i,l,$),S(t,i,$),u(i,c,$),u(i,s,$),p=!0},p(i,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:i}),t.$set(C)},i(i){p||(T(t.$$.fragment,i),p=!0)},o(i){q(t.$$.fragment,i),p=!1},d(i){i&&(r(e),r(l),r(c),r(s)),P(t,i)}}}function Mn(m){let e,a="Avantages des membres et méthodes statiques",l,t,c="<li>Partage des ressources : Les membres statiques sont partagés par toutes les instances de la classe, ce qui permet de partager des données ou des états communs.</li> <li>Accès sans instance : Les méthodes et attributs statiques peuvent être utilisés sans créer d&#39;instance de la classe, ce qui simplifie l&#39;accès aux utilitaires et aux constantes.</li> <li>Performance : L&#39;accès aux membres statiques peut être plus rapide car il n&#39;y a pas besoin de créer et de gérer des instances d&#39;objets.</li> <li>Organisation du code : Les méthodes statiques peuvent regrouper des fonctions utilitaires ou des opérations liées à la classe, améliorant ainsi la lisibilité et la maintenance du code.</li>";return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("ul"),t.innerHTML=c},l(s){e=h(s,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-12gnc3a"&&(e.textContent=a),l=x(s),t=h(s,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-1v701z"&&(t.innerHTML=c)},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function jn(m){let e,a="Les membres statiques",l,t,c,s,n,p,i,$,C,o,f;return t=new y({props:{$$slots:{default:[bn]},$$scope:{ctx:m}}}),s=new y({props:{$$slots:{default:[Hn]},$$scope:{ctx:m}}}),p=new y({props:{$$slots:{default:[qn]},$$scope:{ctx:m}}}),$=new y({props:{$$slots:{default:[Sn]},$$scope:{ctx:m}}}),o=new y({props:{$$slots:{default:[Mn]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),j(t.$$.fragment),c=_(),j(s.$$.fragment),n=_(),j(p.$$.fragment),i=_(),j($.$$.fragment),C=_(),j(o.$$.fragment)},l(v){e=h(v,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-11qpvto"&&(e.textContent=a),l=x(v),M(t.$$.fragment,v),c=x(v),M(s.$$.fragment,v),n=x(v),M(p.$$.fragment,v),i=x(v),M($.$$.fragment,v),C=x(v),M(o.$$.fragment,v)},m(v,d){u(v,e,d),u(v,l,d),S(t,v,d),u(v,c,d),S(s,v,d),u(v,n,d),S(p,v,d),u(v,i,d),S($,v,d),u(v,C,d),S(o,v,d),f=!0},p(v,d){const L={};d&1&&(L.$$scope={dirty:d,ctx:v}),t.$set(L);const U={};d&1&&(U.$$scope={dirty:d,ctx:v}),s.$set(U);const A={};d&1&&(A.$$scope={dirty:d,ctx:v}),p.$set(A);const V={};d&1&&(V.$$scope={dirty:d,ctx:v}),$.$set(V);const O={};d&1&&(O.$$scope={dirty:d,ctx:v}),o.$set(O)},i(v){f||(T(t.$$.fragment,v),T(s.$$.fragment,v),T(p.$$.fragment,v),T($.$$.fragment,v),T(o.$$.fragment,v),f=!0)},o(v){q(t.$$.fragment,v),q(s.$$.fragment,v),q(p.$$.fragment,v),q($.$$.fragment,v),q(o.$$.fragment,v),f=!1},d(v){v&&(r(e),r(l),r(c),r(n),r(i),r(C)),P(t,v),P(s,v),P(p,v),P($,v),P(o,v)}}}function kn(m){let e,a;return e=new y({props:{$$slots:{default:[jn]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,t){S(e,l,t),a=!0},p(l,[t]){const c={};t&1&&(c.$$scope={dirty:t,ctx:l}),e.$set(c)},i(l){a||(T(e.$$.fragment,l),a=!0)},o(l){q(e.$$.fragment,l),a=!1},d(l){P(e,l)}}}class An extends be{constructor(e){super(),we(this,e,null,kn,ge,{})}}function Dn(m){let e,a=`La généricité permet de créer des classes, des interfaces et des méthodes avec des types\r
			paramétrés.`,l,t,c="Cela permet de réutiliser du code avec différents types sans le dupliquer.";return{c(){e=g("p"),e.textContent=a,l=_(),t=g("p"),t.textContent=c},l(s){e=h(s,"P",{"data-svelte-h":!0}),b(e)!=="svelte-y92tkb"&&(e.textContent=a),l=x(s),t=h(s,"P",{"data-svelte-h":!0}),b(t)!=="svelte-xc0rvs"&&(t.textContent=c)},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function En(m){let e=`
	class Boite<T> {
		private T contenu;

		public void setContenu(T contenu) {
			this.contenu = contenu;
		}

		public T getContenu() {
			return contenu;
		}
	}

	Boite<String> boiteDeTextes = new Boite<>();
	boiteDeTextes.setContenu("Bonjour");
	System.out.println(boiteDeTextes.getContenu()); // Affiche "Bonjour"
	`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function In(m){let e,a="Classes génériques",l,t,c;return t=new ie({props:{$$slots:{default:[En]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),j(t.$$.fragment)},l(s){e=h(s,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-uwteju"&&(e.textContent=a),l=x(s),M(t.$$.fragment,s)},m(s,n){u(s,e,n),u(s,l,n),S(t,s,n),c=!0},p(s,n){const p={};n&1&&(p.$$scope={dirty:n,ctx:s}),t.$set(p)},i(s){c||(T(t.$$.fragment,s),c=!0)},o(s){q(t.$$.fragment,s),c=!1},d(s){s&&(r(e),r(l)),P(t,s)}}}function zn(m){let e=`
	class Util {
		public static <T> void afficher(T element) {
			if (element instanceof String) {
				System.out.println(""" + element + """);
			} else if (element instanceof Double || element instanceof Float) {
				System.out.printf("%.2f%n", element);
			} else {
				System.out.println(element);
			}
		}
	}

	Util.afficher("Hello"); // Affiche "Hello"
	Util.afficher(123.5); // Affiche 123.50
	`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function On(m){let e,a="Méthodes génériques",l,t,c;return t=new ie({props:{$$slots:{default:[zn]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),j(t.$$.fragment)},l(s){e=h(s,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-ippuop"&&(e.textContent=a),l=x(s),M(t.$$.fragment,s)},m(s,n){u(s,e,n),u(s,l,n),S(t,s,n),c=!0},p(s,n){const p={};n&1&&(p.$$scope={dirty:n,ctx:s}),t.$set(p)},i(s){c||(T(t.$$.fragment,s),c=!0)},o(s){q(t.$$.fragment,s),c=!1},d(s){s&&(r(e),r(l)),P(t,s)}}}function Un(m){let e=`
	interface Comparable<T> {
		int comparer(T autre);
	}

	class Personne implements Comparable<Personne> {
		private String nom;

		public Personne(String nom) {
			this.nom = nom;
		}

		public int comparer(Personne autre) {
			return this.nom.compareTo(autre.nom);
		}
	}
	`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Vn(m){let e,a="Interfaces génériques",l,t,c;return t=new ie({props:{$$slots:{default:[Un]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),j(t.$$.fragment)},l(s){e=h(s,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1vh4c50"&&(e.textContent=a),l=x(s),M(t.$$.fragment,s)},m(s,n){u(s,e,n),u(s,l,n),S(t,s,n),c=!0},p(s,n){const p={};n&1&&(p.$$scope={dirty:n,ctx:s}),t.$set(p)},i(s){c||(T(t.$$.fragment,s),c=!0)},o(s){q(t.$$.fragment,s),c=!1},d(s){s&&(r(e),r(l)),P(t,s)}}}function yn(m){let e=`
		class Boite<T> {
			private T contenu;

			public void setContenu(T contenu) {
				this.contenu = contenu;
			}

			public T getContenu() {
				return contenu;
			}
		}

		Boite<String> boiteDeTextes = new Boite<>();
		boiteDeTextes.setContenu("Bonjour");
		System.out.println(boiteDeTextes.getContenu()); // Affiche "Bonjour"

		// Erreur de compilation
		Boite<Integer> boiteDeNombres = new Boite<>();
		boiteDeNombres.setContenu("Bonjour"); // Erreur: incompatible types: String cannot be converted to Integer
		`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Bn(m){let e,a="Contrôle de type sur les types génériques",l,t,c,s,n=`Le contrôle de type permet de s'assurer que les types utilisés avec les classes et méthodes\r
			génériques sont compatibles, évitant ainsi les erreurs de type à l'exécution.`,p;return t=new ie({props:{$$slots:{default:[yn]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),j(t.$$.fragment),c=_(),s=g("p"),s.textContent=n,this.h()},l(i){e=h(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-n7u5h7"&&(e.textContent=a),l=x(i),M(t.$$.fragment,i),c=x(i),s=h(i,"P",{class:!0,"data-svelte-h":!0}),b(s)!=="svelte-gp9ffm"&&(s.textContent=n),this.h()},h(){w(s,"class","smaller")},m(i,$){u(i,e,$),u(i,l,$),S(t,i,$),u(i,c,$),u(i,s,$),p=!0},p(i,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:i}),t.$set(C)},i(i){p||(T(t.$$.fragment,i),p=!0)},o(i){q(t.$$.fragment,i),p=!1},d(i){i&&(r(e),r(l),r(c),r(s)),P(t,i)}}}function Jn(m){let e=`
    abstract class Animal 
    abstract class Oiseau extends Animal
    class Chien extends Animal
    class Colibri extends Oiseau
    class CageOiseau<T extends Oiseau>{
        T contenu
        void setContenu(T contenu)
    }
    `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Fn(m){let e=`
    public class CageOiseau<T extends Oiseau> {}

    CageOiseau<Oiseau> cageOiseau = new CageOiseau<>();
    cageOiseau.setContenu(new Oiseau());
    cageOiseau.setContenu(new Colibri());
    CageOiseau<Chien> cageChien = new CageOiseau<>(); // Erreur de compilation
    cageChien.setContenu(new Chien()); // Erreur de compilation
    `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Nn(m){let e,a="Restriction des types génériques",l,t,c='Il est possible de "filtrer" les types génériques en utilisant des contraintes.',s,n,p,i,$,C;return p=new Pe({props:{$$slots:{default:[Jn]},$$scope:{ctx:m}}}),$=new ie({props:{$$slots:{default:[Fn]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.textContent=c,s=_(),n=g("div"),j(p.$$.fragment),i=_(),j($.$$.fragment)},l(o){e=h(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-7kmo2z"&&(e.textContent=a),l=x(o),t=h(o,"P",{"data-svelte-h":!0}),b(t)!=="svelte-h5rwf4"&&(t.textContent=c),s=x(o),n=h(o,"DIV",{});var f=le(n);M(p.$$.fragment,f),i=x(f),M($.$$.fragment,f),f.forEach(r)},m(o,f){u(o,e,f),u(o,l,f),u(o,t,f),u(o,s,f),u(o,n,f),S(p,n,null),G(n,i),S($,n,null),C=!0},p(o,f){const v={};f&1&&(v.$$scope={dirty:f,ctx:o}),p.$set(v);const d={};f&1&&(d.$$scope={dirty:f,ctx:o}),$.$set(d)},i(o){C||(T(p.$$.fragment,o),T($.$$.fragment,o),C=!0)},o(o){q(p.$$.fragment,o),q($.$$.fragment,o),C=!1},d(o){o&&(r(e),r(l),r(t),r(s),r(n)),P(p),P($)}}}function Rn(m){let e=`
        class Cage<T extends IVolant & Animal>
        class Oiseau extends Animal implements IVolant
        class Avion extends Vehicule implements IVolant 
        Cage --down[hidden]> IVolant
        
`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Gn(m){let e=`
        interface IVolant {}
        class Cage<T extends IVolant & Animal> {
            T contenu;
            void setContenu(T contenu) {
                this.contenu = contenu;
            }
        }
        class Oiseau extends Animal implements IVolant {}
        class Avion extends Vehicule implements IVolant {}

        Cage<Oiseau> cageOiseau = new Cage<>();
        Cage<Avion> cageAvion = new Cage<>(); // Erreur de compilation
            
        
                
        `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Qn(m){let e,a="Restriction des types génériques",l,t,c,s,n,p;return c=new Pe({props:{$$slots:{default:[Rn]},$$scope:{ctx:m}}}),n=new ie({props:{$$slots:{default:[Gn]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("div"),j(c.$$.fragment),s=_(),j(n.$$.fragment),this.h()},l(i){e=h(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-7kmo2z"&&(e.textContent=a),l=x(i),t=h(i,"DIV",{class:!0});var $=le(t);M(c.$$.fragment,$),s=x($),M(n.$$.fragment,$),$.forEach(r),this.h()},h(){w(t,"class","flex items-start")},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),S(c,t,null),G(t,s),S(n,t,null),p=!0},p(i,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:i}),c.$set(C);const o={};$&1&&(o.$$scope={dirty:$,ctx:i}),n.$set(o)},i(i){p||(T(c.$$.fragment,i),T(n.$$.fragment,i),p=!0)},o(i){q(c.$$.fragment,i),q(n.$$.fragment,i),p=!1},d(i){i&&(r(e),r(l),r(t)),P(c),P(n)}}}function Wn(m){let e=`
        class Paire<T, U> {
            private T premier;
            private U second;

            public Paire(T premier, U second) {
                this.premier = premier;
                this.second = second;
            }

            public T getPremier() {
                return premier;
            }

            public U getSecond() {
                return second;
            }
        }

        Paire<String, Integer> paire = new Paire<>("Age", 30);
        System.out.println(paire.getPremier()); // Affiche "Age"
        System.out.println(paire.getSecond()); // Affiche 30
        `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Kn(m){let e,a="Classes génériques avec plusieurs types",l,t,c;return t=new ie({props:{$$slots:{default:[Wn]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),j(t.$$.fragment)},l(s){e=h(s,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1j91j4"&&(e.textContent=a),l=x(s),M(t.$$.fragment,s)},m(s,n){u(s,e,n),u(s,l,n),S(t,s,n),c=!0},p(s,n){const p={};n&1&&(p.$$scope={dirty:n,ctx:s}),t.$set(p)},i(s){c||(T(t.$$.fragment,s),c=!0)},o(s){q(t.$$.fragment,s),c=!1},d(s){s&&(r(e),r(l)),P(t,s)}}}function Zn(m){let e=`
        class Util {
            public static <T, U> void afficherDeux(T premier, U second) {
                System.out.println("Premier: " + premier);
                System.out.println("Second: " + second);
            }
        }

        Util.afficherDeux("Hello", 123);    // Affiche "Premier: Hello" et "Second: 123"
        Util.afficherDeux(3.14, true);      // Affiche "Premier: 3.14" et "Second: true"
        `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Yn(m){let e,a="Méthodes génériques avec plusieurs types",l,t,c;return t=new ie({props:{$$slots:{default:[Zn]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),j(t.$$.fragment)},l(s){e=h(s,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1btbcib"&&(e.textContent=a),l=x(s),M(t.$$.fragment,s)},m(s,n){u(s,e,n),u(s,l,n),S(t,s,n),c=!0},p(s,n){const p={};n&1&&(p.$$scope={dirty:n,ctx:s}),t.$set(p)},i(s){c||(T(t.$$.fragment,s),c=!0)},o(s){q(t.$$.fragment,s),c=!1},d(s){s&&(r(e),r(l)),P(t,s)}}}function Xn(m){let e,a="Généricité",l,t,c,s,n,p,i,$,C,o,f,v,d,L,U,A,V,O,E;return t=new y({props:{$$slots:{default:[Dn]},$$scope:{ctx:m}}}),s=new y({props:{$$slots:{default:[In]},$$scope:{ctx:m}}}),p=new y({props:{$$slots:{default:[On]},$$scope:{ctx:m}}}),$=new y({props:{$$slots:{default:[Vn]},$$scope:{ctx:m}}}),o=new y({props:{$$slots:{default:[Bn]},$$scope:{ctx:m}}}),v=new y({props:{$$slots:{default:[Nn]},$$scope:{ctx:m}}}),L=new y({props:{$$slots:{default:[Qn]},$$scope:{ctx:m}}}),A=new y({props:{$$slots:{default:[Kn]},$$scope:{ctx:m}}}),O=new y({props:{$$slots:{default:[Yn]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),j(t.$$.fragment),c=_(),j(s.$$.fragment),n=_(),j(p.$$.fragment),i=_(),j($.$$.fragment),C=_(),j(o.$$.fragment),f=_(),j(v.$$.fragment),d=_(),j(L.$$.fragment),U=_(),j(A.$$.fragment),V=_(),j(O.$$.fragment)},l(I){e=h(I,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1konbvn"&&(e.textContent=a),l=x(I),M(t.$$.fragment,I),c=x(I),M(s.$$.fragment,I),n=x(I),M(p.$$.fragment,I),i=x(I),M($.$$.fragment,I),C=x(I),M(o.$$.fragment,I),f=x(I),M(v.$$.fragment,I),d=x(I),M(L.$$.fragment,I),U=x(I),M(A.$$.fragment,I),V=x(I),M(O.$$.fragment,I)},m(I,z){u(I,e,z),u(I,l,z),S(t,I,z),u(I,c,z),S(s,I,z),u(I,n,z),S(p,I,z),u(I,i,z),S($,I,z),u(I,C,z),S(o,I,z),u(I,f,z),S(v,I,z),u(I,d,z),S(L,I,z),u(I,U,z),S(A,I,z),u(I,V,z),S(O,I,z),E=!0},p(I,z){const W={};z&1&&(W.$$scope={dirty:z,ctx:I}),t.$set(W);const K={};z&1&&(K.$$scope={dirty:z,ctx:I}),s.$set(K);const k={};z&1&&(k.$$scope={dirty:z,ctx:I}),p.$set(k);const D={};z&1&&(D.$$scope={dirty:z,ctx:I}),$.$set(D);const H={};z&1&&(H.$$scope={dirty:z,ctx:I}),o.$set(H);const R={};z&1&&(R.$$scope={dirty:z,ctx:I}),v.$set(R);const se={};z&1&&(se.$$scope={dirty:z,ctx:I}),L.$set(se);const re={};z&1&&(re.$$scope={dirty:z,ctx:I}),A.$set(re);const Q={};z&1&&(Q.$$scope={dirty:z,ctx:I}),O.$set(Q)},i(I){E||(T(t.$$.fragment,I),T(s.$$.fragment,I),T(p.$$.fragment,I),T($.$$.fragment,I),T(o.$$.fragment,I),T(v.$$.fragment,I),T(L.$$.fragment,I),T(A.$$.fragment,I),T(O.$$.fragment,I),E=!0)},o(I){q(t.$$.fragment,I),q(s.$$.fragment,I),q(p.$$.fragment,I),q($.$$.fragment,I),q(o.$$.fragment,I),q(v.$$.fragment,I),q(L.$$.fragment,I),q(A.$$.fragment,I),q(O.$$.fragment,I),E=!1},d(I){I&&(r(e),r(l),r(c),r(n),r(i),r(C),r(f),r(d),r(U),r(V)),P(t,I),P(s,I),P(p,I),P($,I),P(o,I),P(v,I),P(L,I),P(A,I),P(O,I)}}}function ei(m){let e,a;return e=new y({props:{$$slots:{default:[Xn]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,t){S(e,l,t),a=!0},p(l,[t]){const c={};t&1&&(c.$$scope={dirty:t,ctx:l}),e.$set(c)},i(l){a||(T(e.$$.fragment,l),a=!0)},o(l){q(e.$$.fragment,l),a=!1},d(l){P(e,l)}}}class ti extends be{constructor(e){super(),we(this,e,null,ei,ge,{})}}function li(m){let e,a="Présentation",l,t,c=`Les lambdas sont des fonctions anonymes qui permettent de simplifier le code en évitant de\r
			créer des classes ou des méthodes supplémentaires. Pensez à elles comme à des raccourcis pour\r
			écrire des fonctions.`,s,n,p=`Elles sont souvent utilisées pour implémenter des interfaces fonctionnelles, c'est-à-dire des\r
			interfaces qui ne contiennent qu'une seule méthode abstraite.`;return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.textContent=c,s=_(),n=g("p"),n.textContent=p},l(i){e=h(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-14nafu8"&&(e.textContent=a),l=x(i),t=h(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1qr4dtq"&&(t.textContent=c),s=x(i),n=h(i,"P",{"data-svelte-h":!0}),b(n)!=="svelte-1lytgjw"&&(n.textContent=p)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),u(i,n,$)},p:B,d(i){i&&(r(e),r(l),r(t),r(s),r(n))}}}function si(m){let e=`
            (paramètres) -> expression
            (paramètres) -> { instructions }
            `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function ni(m){let e=`
            (int a, int b) -> a + b
            () -> System.out.println("Hello, world!")
            (String s) -> { System.out.println(s); }
            `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function ii(m){let e,a="Syntaxe des lambdas",l,t,c="La syntaxe des lambdas en Java est la suivante :",s,n,p,i,$="Exemple :",C,o,f;return n=new ie({props:{$$slots:{default:[si]},$$scope:{ctx:m}}}),o=new ie({props:{$$slots:{default:[ni]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.textContent=c,s=_(),j(n.$$.fragment),p=_(),i=g("p"),i.textContent=$,C=_(),j(o.$$.fragment)},l(v){e=h(v,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1rhlr30"&&(e.textContent=a),l=x(v),t=h(v,"P",{"data-svelte-h":!0}),b(t)!=="svelte-12je3p4"&&(t.textContent=c),s=x(v),M(n.$$.fragment,v),p=x(v),i=h(v,"P",{"data-svelte-h":!0}),b(i)!=="svelte-14lz6sc"&&(i.textContent=$),C=x(v),M(o.$$.fragment,v)},m(v,d){u(v,e,d),u(v,l,d),u(v,t,d),u(v,s,d),S(n,v,d),u(v,p,d),u(v,i,d),u(v,C,d),S(o,v,d),f=!0},p(v,d){const L={};d&1&&(L.$$scope={dirty:d,ctx:v}),n.$set(L);const U={};d&1&&(U.$$scope={dirty:d,ctx:v}),o.$set(U)},i(v){f||(T(n.$$.fragment,v),T(o.$$.fragment,v),f=!0)},o(v){q(n.$$.fragment,v),q(o.$$.fragment,v),f=!1},d(v){v&&(r(e),r(l),r(t),r(s),r(p),r(i),r(C)),P(n,v),P(o,v)}}}function ri(m){let e=`
                import java.util.Arrays;
                import java.util.List;

                public class Lambda {
                    public static void main(String[] args) {
                        List<String> noms = Arrays.asList("Alice", "Bob", "Charlie");
                        // Utilisation de la notation ::
                        noms.forEach(System.out::println);
                        // Affiche Alice, Bob, Charlie
                    }
                }
            `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function ai(m){let e,a="Utilisation de la notation ::",l,t,c="La notation <code>::</code> en Java est utilisée pour faire référence à une méthode ou à un constructeur. Elle est souvent utilisée avec les lambdas pour simplifier le code.",s,n,p="Exemple :",i,$,C;return $=new ie({props:{$$slots:{default:[ri]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.innerHTML=c,s=_(),n=g("p"),n.textContent=p,i=_(),j($.$$.fragment)},l(o){e=h(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-11teg0t"&&(e.textContent=a),l=x(o),t=h(o,"P",{"data-svelte-h":!0}),b(t)!=="svelte-70y9fa"&&(t.innerHTML=c),s=x(o),n=h(o,"P",{"data-svelte-h":!0}),b(n)!=="svelte-14lz6sc"&&(n.textContent=p),i=x(o),M($.$$.fragment,o)},m(o,f){u(o,e,f),u(o,l,f),u(o,t,f),u(o,s,f),u(o,n,f),u(o,i,f),S($,o,f),C=!0},p(o,f){const v={};f&1&&(v.$$scope={dirty:f,ctx:o}),$.$set(v)},i(o){C||(T($.$$.fragment,o),C=!0)},o(o){q($.$$.fragment,o),C=!1},d(o){o&&(r(e),r(l),r(t),r(s),r(n),r(i)),P($,o)}}}function ui(m){let e=`
            @FunctionalInterface
            public interface Operation {
                int calculer(int a, int b);
            }

            public class Lambda {
                public static void main(String[] args) {
                Operation addition = (a, b) -> a + b;
                System.out.println(addition.calculer(5, 3)); // Affiche 8
                }
            }
            `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function oi(m){let e,a="Exemple d'utilisation",l,t,c="Voici un exemple d'utilisation des lambdas avec une interface fonctionnelle :",s,n,p;return n=new ie({props:{$$slots:{default:[ui]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.textContent=c,s=_(),j(n.$$.fragment)},l(i){e=h(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1masex2"&&(e.textContent=a),l=x(i),t=h(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1bzbp9"&&(t.textContent=c),s=x(i),M(n.$$.fragment,i)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),S(n,i,$),p=!0},p(i,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:i}),n.$set(C)},i(i){p||(T(n.$$.fragment,i),p=!0)},o(i){q(n.$$.fragment,i),p=!1},d(i){i&&(r(e),r(l),r(t),r(s)),P(n,i)}}}function $i(m){let e=`
            public class Lambda {
                public static void main(String[] args) {
                    List<Integer> nombres = Arrays.asList(1, 2, 3, 4, 5);
                    // Utilisation de la bibliothèque Stream
                    nombres.stream().filter(n -> n % 2 == 0).forEach(System.out::println);
                    // Affiche 2 et 4
                }
            }
            `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function fi(m){let e,a="La bibliothèque Stream",l,t,c="La bibliothèque Stream permet de manipuler des collections de manière fonctionnelle.",s,n,p;return n=new ie({props:{$$slots:{default:[$i]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.textContent=c,s=_(),j(n.$$.fragment)},l(i){e=h(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-3s5w1x"&&(e.textContent=a),l=x(i),t=h(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1w303ls"&&(t.textContent=c),s=x(i),M(n.$$.fragment,i)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),S(n,i,$),p=!0},p(i,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:i}),n.$set(C)},i(i){p||(T(n.$$.fragment,i),p=!0)},o(i){q(n.$$.fragment,i),p=!1},d(i){i&&(r(e),r(l),r(t),r(s)),P(n,i)}}}function ci(m){let e,a="La bibliothèque Stream",l,t,c="Exemples de fonctions de <code>stream</code>",s,n,p="<li><code>filter</code> : filtre les éléments d&#39;un <code>stream</code></li> <li><code>map</code> : transforme les éléments d&#39;un <code>stream</code></li> <li><code>reduce</code> : réduit les éléments d&#39;un <code>stream</code></li> <li><code>collect</code> : collecte les éléments d&#39;un <code>stream</code></li>";return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("h4"),t.innerHTML=c,s=_(),n=g("ul"),n.innerHTML=p},l(i){e=h(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-3s5w1x"&&(e.textContent=a),l=x(i),t=h(i,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-1jg16if"&&(t.innerHTML=c),s=x(i),n=h(i,"UL",{"data-svelte-h":!0}),b(n)!=="svelte-y0msi3"&&(n.innerHTML=p)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),u(i,n,$)},p:B,d(i){i&&(r(e),r(l),r(t),r(s),r(n))}}}function pi(m){let e=`
                public class Lambda {
                    public static void main(String[] args) {
                        List<Integer> nombres = 
                            Arrays.asList(1, 2, 3, 4, 5);
                        int somme = 0;
                        for (int n : nombres) {
                            if (n % 2 == 0) {
                                somme += n * 2;
                            }
                        }
                        // Affiche 12
                    }
                }
                `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function mi(m){let e=`
                public class Lambda {
                    public static void main(String[] args) {
                        List<Integer> nombres = 
                            Arrays.asList(1, 2, 3, 4, 5);
                        // Utilisation de la bibliothèque Stream
                        nombres.stream()
                            .filter(n -> n % 2 == 0)
                            .map(n -> n * 2)
                            .reduce(0, (a, b) -> a + b);
                        // Affiche 12
                    }
                }
                `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function di(m){let e,a="La bibliothèque Stream",l,t,c="Exemples complet",s,n,p,i,$="Utilisation de boucles",C,o,f,v,d,L="Utilisation de Stream",U,A,V;return o=new ie({props:{$$slots:{default:[pi]},$$scope:{ctx:m}}}),A=new ie({props:{$$slots:{default:[mi]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("h4"),t.textContent=c,s=_(),n=g("div"),p=g("div"),i=g("h6"),i.textContent=$,C=_(),j(o.$$.fragment),f=_(),v=g("div"),d=g("h6"),d.textContent=L,U=_(),j(A.$$.fragment),this.h()},l(O){e=h(O,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-3s5w1x"&&(e.textContent=a),l=x(O),t=h(O,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-yapop1"&&(t.textContent=c),s=x(O),n=h(O,"DIV",{class:!0});var E=le(n);p=h(E,"DIV",{class:!0});var I=le(p);i=h(I,"H6",{"data-svelte-h":!0}),b(i)!=="svelte-1m83sp7"&&(i.textContent=$),C=x(I),M(o.$$.fragment,I),I.forEach(r),f=x(E),v=h(E,"DIV",{class:!0});var z=le(v);d=h(z,"H6",{"data-svelte-h":!0}),b(d)!=="svelte-x4jzjq"&&(d.textContent=L),U=x(z),M(A.$$.fragment,z),z.forEach(r),E.forEach(r),this.h()},h(){w(p,"class","flex-1"),w(v,"class","flex-1"),w(n,"class","flex justify-center")},m(O,E){u(O,e,E),u(O,l,E),u(O,t,E),u(O,s,E),u(O,n,E),G(n,p),G(p,i),G(p,C),S(o,p,null),G(n,f),G(n,v),G(v,d),G(v,U),S(A,v,null),V=!0},p(O,E){const I={};E&1&&(I.$$scope={dirty:E,ctx:O}),o.$set(I);const z={};E&1&&(z.$$scope={dirty:E,ctx:O}),A.$set(z)},i(O){V||(T(o.$$.fragment,O),T(A.$$.fragment,O),V=!0)},o(O){q(o.$$.fragment,O),q(A.$$.fragment,O),V=!1},d(O){O&&(r(e),r(l),r(t),r(s),r(n)),P(o),P(A)}}}function vi(m){let e,a="Généralitées sur les Lambda",l,t,c="<li>Les lambdas sont des fonctions anonymes</li> <li>Elles sont souvent utilisées pour implémenter des interfaces fonctionnelles</li> <li>Une interface fonctionnelle est une interface qui ne contient qu&#39;une seule méthode abstraite</li> <li>La bibliothèque Stream permet de manipuler des collections de manière fonctionnelle</li>";return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("ul"),t.innerHTML=c},l(s){e=h(s,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1yvkeux"&&(e.textContent=a),l=x(s),t=h(s,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-1o4wyjx"&&(t.innerHTML=c)},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function xi(m){let e=`
                public class Lambda {
                    public static void main(String[] args) {
                        int a = 5;
                        Operation addition = (b) -> a + b;
                        System.out.println(addition.calculer(3)); // Affiche 8
                    }
                }
                `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function _i(m){let e=`
                public class Lambda {
                    public static void main(String[] args) {
                        int a = 5;
                        Operation addition = (b) -> a = a + b; // Erreur de compilation
                    }
                }
                `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Ci(m){let e,a="Portée des variables",l,t,c=`Les lambdas peuvent accéder aux variables locales et aux paramètres des méthodes dans\r
			lesquelles elles sont déclarées.`,s,n,p,i,$=`En revanche, elles ne peuvent pas modifier les variables locales et les paramètres des\r
			méthodes dans lesquelles elles sont déclarées.`,C,o,f;return n=new ie({props:{$$slots:{default:[xi]},$$scope:{ctx:m}}}),o=new ie({props:{$$slots:{default:[_i]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.textContent=c,s=_(),j(n.$$.fragment),p=_(),i=g("p"),i.textContent=$,C=_(),j(o.$$.fragment)},l(v){e=h(v,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1e5jpuk"&&(e.textContent=a),l=x(v),t=h(v,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1kgzcpl"&&(t.textContent=c),s=x(v),M(n.$$.fragment,v),p=x(v),i=h(v,"P",{"data-svelte-h":!0}),b(i)!=="svelte-1ngamoe"&&(i.textContent=$),C=x(v),M(o.$$.fragment,v)},m(v,d){u(v,e,d),u(v,l,d),u(v,t,d),u(v,s,d),S(n,v,d),u(v,p,d),u(v,i,d),u(v,C,d),S(o,v,d),f=!0},p(v,d){const L={};d&1&&(L.$$scope={dirty:d,ctx:v}),n.$set(L);const U={};d&1&&(U.$$scope={dirty:d,ctx:v}),o.$set(U)},i(v){f||(T(n.$$.fragment,v),T(o.$$.fragment,v),f=!0)},o(v){q(n.$$.fragment,v),q(o.$$.fragment,v),f=!1},d(v){v&&(r(e),r(l),r(t),r(s),r(p),r(i),r(C)),P(n,v),P(o,v)}}}function hi(m){let e,a="Les collecteurs",l,t,c="Les collecteurs sont utilisés pour accumuler les éléments d'un stream dans une collection, une chaîne de caractères, ou une autre structure de données.",s,n,p="Exemples de collecteurs :",i,$,C="<li><code>toList</code> : collecte les éléments dans une liste</li> <li><code>toSet</code> : collecte les éléments dans un ensemble</li> <li><code>joining</code> : concatène les éléments en une chaîne de caractères</li> <li><code>groupingBy</code> : groupe les éléments par une clé</li> <li><code>partitioningBy</code> : partitionne les éléments en deux groupes</li>";return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.textContent=c,s=_(),n=g("p"),n.textContent=p,i=_(),$=g("ul"),$.innerHTML=C},l(o){e=h(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-g8ycxf"&&(e.textContent=a),l=x(o),t=h(o,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1s91i32"&&(t.textContent=c),s=x(o),n=h(o,"P",{"data-svelte-h":!0}),b(n)!=="svelte-ub31ev"&&(n.textContent=p),i=x(o),$=h(o,"UL",{"data-svelte-h":!0}),b($)!=="svelte-1usc45j"&&($.innerHTML=C)},m(o,f){u(o,e,f),u(o,l,f),u(o,t,f),u(o,s,f),u(o,n,f),u(o,i,f),u(o,$,f)},p:B,d(o){o&&(r(e),r(l),r(t),r(s),r(n),r(i),r($))}}}function gi(m){let e=`
                // Exemples
                var noms = Stream.of("Alice", "Bob", "Charlie").collect(Collectors.toList());
                var nomsSet = Stream.of("Alice", "Bob", "Charlie", "Alice").collect(Collectors.toSet());
                // [Alice, Bob, Charlie] (sans doublons)

                var nomsConcat = Stream.of("Alice", "Bob", "Charlie").collect(Collectors.joining(", "));
                // "Alice, Bob, Charlie"

                var nomsGroupes = Stream.of("Alice", "Bob", "Charlie")
                    .collect(Collectors.groupingBy(String::length));
                // [{3=[Bob], 5=[Alice, Charlie]}
                
                var nomsPartitionnes = Stream.of("Alice", "Bob", "Charlie")
                    .collect(Collectors.partitioningBy(s -> s.length() > 3));
                // {false=[Bob], true=[Alice, Charlie]}
            `,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function bi(m){let e,a="Exemples de collecteurs",l,t,c="Voici quelques exemples d'utilisation des collecteurs :",s,n,p;return n=new ie({props:{$$slots:{default:[gi]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.textContent=c,s=_(),j(n.$$.fragment)},l(i){e=h(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1vo69jl"&&(e.textContent=a),l=x(i),t=h(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-jhz8lh"&&(t.textContent=c),s=x(i),M(n.$$.fragment,i)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),S(n,i,$),p=!0},p(i,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:i}),n.$set(C)},i(i){p||(T(n.$$.fragment,i),p=!0)},o(i){q(n.$$.fragment,i),p=!1},d(i){i&&(r(e),r(l),r(t),r(s)),P(n,i)}}}function wi(m){let e,a="Les intérêts des lambdas",l,t,c="<li>Les lambdas permettent de simplifier le code</li> <li>Elles permettent de rendre le code plus lisible</li> <li>Elles permettent de rendre le code plus concis</li> <li>Elles permettent de rendre le code plus maintenable</li>";return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("ul"),t.innerHTML=c},l(s){e=h(s,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1g293rx"&&(e.textContent=a),l=x(s),t=h(s,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-1a9dw6q"&&(t.innerHTML=c)},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function Li(m){let e,a="Les lambdas",l,t,c,s,n,p,i,$,C,o,f,v,d,L,U,A,V,O,E,I,z,W,K,k,D;return t=new y({props:{$$slots:{default:[li]},$$scope:{ctx:m}}}),s=new y({props:{$$slots:{default:[ii]},$$scope:{ctx:m}}}),p=new y({props:{$$slots:{default:[ai]},$$scope:{ctx:m}}}),$=new y({props:{$$slots:{default:[oi]},$$scope:{ctx:m}}}),o=new y({props:{$$slots:{default:[fi]},$$scope:{ctx:m}}}),v=new y({props:{$$slots:{default:[ci]},$$scope:{ctx:m}}}),L=new y({props:{$$slots:{default:[di]},$$scope:{ctx:m}}}),A=new y({props:{$$slots:{default:[vi]},$$scope:{ctx:m}}}),O=new y({props:{$$slots:{default:[Ci]},$$scope:{ctx:m}}}),I=new y({props:{$$slots:{default:[hi]},$$scope:{ctx:m}}}),W=new y({props:{$$slots:{default:[bi]},$$scope:{ctx:m}}}),k=new y({props:{$$slots:{default:[wi]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),j(t.$$.fragment),c=_(),j(s.$$.fragment),n=_(),j(p.$$.fragment),i=_(),j($.$$.fragment),C=_(),j(o.$$.fragment),f=_(),j(v.$$.fragment),d=_(),j(L.$$.fragment),U=_(),j(A.$$.fragment),V=_(),j(O.$$.fragment),E=_(),j(I.$$.fragment),z=_(),j(W.$$.fragment),K=_(),j(k.$$.fragment)},l(H){e=h(H,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-pgwrm2"&&(e.textContent=a),l=x(H),M(t.$$.fragment,H),c=x(H),M(s.$$.fragment,H),n=x(H),M(p.$$.fragment,H),i=x(H),M($.$$.fragment,H),C=x(H),M(o.$$.fragment,H),f=x(H),M(v.$$.fragment,H),d=x(H),M(L.$$.fragment,H),U=x(H),M(A.$$.fragment,H),V=x(H),M(O.$$.fragment,H),E=x(H),M(I.$$.fragment,H),z=x(H),M(W.$$.fragment,H),K=x(H),M(k.$$.fragment,H)},m(H,R){u(H,e,R),u(H,l,R),S(t,H,R),u(H,c,R),S(s,H,R),u(H,n,R),S(p,H,R),u(H,i,R),S($,H,R),u(H,C,R),S(o,H,R),u(H,f,R),S(v,H,R),u(H,d,R),S(L,H,R),u(H,U,R),S(A,H,R),u(H,V,R),S(O,H,R),u(H,E,R),S(I,H,R),u(H,z,R),S(W,H,R),u(H,K,R),S(k,H,R),D=!0},p(H,R){const se={};R&1&&(se.$$scope={dirty:R,ctx:H}),t.$set(se);const re={};R&1&&(re.$$scope={dirty:R,ctx:H}),s.$set(re);const Q={};R&1&&(Q.$$scope={dirty:R,ctx:H}),p.$set(Q);const Z={};R&1&&(Z.$$scope={dirty:R,ctx:H}),$.$set(Z);const ae={};R&1&&(ae.$$scope={dirty:R,ctx:H}),o.$set(ae);const N={};R&1&&(N.$$scope={dirty:R,ctx:H}),v.$set(N);const ee={};R&1&&(ee.$$scope={dirty:R,ctx:H}),L.$set(ee);const ue={};R&1&&(ue.$$scope={dirty:R,ctx:H}),A.$set(ue);const fe={};R&1&&(fe.$$scope={dirty:R,ctx:H}),O.$set(fe);const ce={};R&1&&(ce.$$scope={dirty:R,ctx:H}),I.$set(ce);const me={};R&1&&(me.$$scope={dirty:R,ctx:H}),W.$set(me);const pe={};R&1&&(pe.$$scope={dirty:R,ctx:H}),k.$set(pe)},i(H){D||(T(t.$$.fragment,H),T(s.$$.fragment,H),T(p.$$.fragment,H),T($.$$.fragment,H),T(o.$$.fragment,H),T(v.$$.fragment,H),T(L.$$.fragment,H),T(A.$$.fragment,H),T(O.$$.fragment,H),T(I.$$.fragment,H),T(W.$$.fragment,H),T(k.$$.fragment,H),D=!0)},o(H){q(t.$$.fragment,H),q(s.$$.fragment,H),q(p.$$.fragment,H),q($.$$.fragment,H),q(o.$$.fragment,H),q(v.$$.fragment,H),q(L.$$.fragment,H),q(A.$$.fragment,H),q(O.$$.fragment,H),q(I.$$.fragment,H),q(W.$$.fragment,H),q(k.$$.fragment,H),D=!1},d(H){H&&(r(e),r(l),r(c),r(n),r(i),r(C),r(f),r(d),r(U),r(V),r(E),r(z),r(K)),P(t,H),P(s,H),P(p,H),P($,H),P(o,H),P(v,H),P(L,H),P(A,H),P(O,H),P(I,H),P(W,H),P(k,H)}}}function Hi(m){let e,a;return e=new y({props:{$$slots:{default:[Li]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,t){S(e,l,t),a=!0},p(l,[t]){const c={};t&1&&(c.$$scope={dirty:t,ctx:l}),e.$set(c)},i(l){a||(T(e.$$.fragment,l),a=!0)},o(l){q(e.$$.fragment,l),a=!1},d(l){P(e,l)}}}class Pi extends be{constructor(e){super(),we(this,e,null,Hi,ge,{})}}function qi(m){let e,a="Présentation",l,t,c=`Les collections en Java sont des classes qui permettent de stocker et de manipuler des
			collections d&#39;objets. <br/>Elles offrent des fonctionnalités avancées pour gérer des
			collections de manière dynamique, en permettant d&#39;ajouter, de supprimer, de rechercher et de
			parcourir les éléments d&#39;une collection. <br/>Les collections en Java sont regroupées dans le
			paquetage <code>java.util</code>.`;return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.innerHTML=c},l(s){e=h(s,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-14nafu8"&&(e.textContent=a),l=x(s),t=h(s,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1yibals"&&(t.innerHTML=c)},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function Ti(m){let e,a="Les différentes collections",l,t,c=`<li>Listes : <code>ArrayList</code>, <code>LinkedList</code>, <code>Vector</code>,
				<code>Stack</code></li> <li>Ensembles : <code>HashSet</code>, <code>LinkedHashSet</code>, <code>TreeSet</code></li> <li>Cartes : <code>HashMap</code>, <code>LinkedHashMap</code>, <code>TreeMap</code></li> <li>Files d&#39;attente : <code>PriorityQueue</code></li>`;return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("ul"),t.innerHTML=c},l(s){e=h(s,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1e6rpuq"&&(e.textContent=a),l=x(s),t=h(s,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-t9j7cd"&&(t.innerHTML=c)},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function Si(m){let e=`
@startuml

interface Iterable
interface Collection
interface Queue
interface List
interface Set
interface SortedSet
interface NavigableSet
abstract class AbstractSet
class TreeSet
interface Deque
class PriorityQueue
abstract class AbstractSequentialList
abstract class AbstractCollection
abstract class AbstractList
class ArrayList
class Vector
class Stack

Iterable <|.. Collection
Collection <|.. Queue
Collection <|.. List
Collection <|.. Set
Queue <|.. Deque
Set <|.. SortedSet
SortedSet <|.. NavigableSet
Queue <|.. PriorityQueue
Collection <|.. AbstractCollection
AbstractCollection  <|-- AbstractSet
Set <|.. AbstractSet

AbstractCollection <|-- AbstractList
List <|.. AbstractList
NavigableSet <|.. TreeSet
AbstractSet <|-- TreeSet
AbstractSequentialList <|-- LinkedList
Deque <|.. LinkedList
AbstractList <|-- AbstractSequentialList
AbstractList <|-- ArrayList
AbstractList <|-- Vector
Vector <|-- Stack
@enduml

`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Mi(m){let e,a,l;return a=new Pe({props:{$$slots:{default:[Si]},$$scope:{ctx:m}}}),{c(){e=g("div"),j(a.$$.fragment),this.h()},l(t){e=h(t,"DIV",{class:!0});var c=le(e);M(a.$$.fragment,c),c.forEach(r),this.h()},h(){w(e,"class","flex mt-10 justify-center")},m(t,c){u(t,e,c),S(a,e,null),l=!0},p(t,c){const s={};c&1&&(s.$$scope={dirty:c,ctx:t}),a.$set(s)},i(t){l||(T(a.$$.fragment,t),l=!0)},o(t){q(a.$$.fragment,t),l=!1},d(t){t&&r(e),P(a)}}}function ji(m){let e,a="L&#39;interface <code>Iterable</code>",l,t,c=`L&#39;interface <code>Iterable</code> est une interface générique qui définit une méthode
			<code>iterator()</code> qui permet de parcourir les éléments d&#39;une collection. <br/>Elle est
			implémentée par toutes les classes qui représentent des collections d&#39;objets.`,s;return{c(){e=g("h3"),e.innerHTML=a,l=_(),t=g("p"),t.innerHTML=c,s=_()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-uyrbon"&&(e.innerHTML=a),l=x(n),t=h(n,"P",{"data-svelte-h":!0}),b(t)!=="svelte-ndrmbw"&&(t.innerHTML=c),s=x(n)},m(n,p){u(n,e,p),u(n,l,p),u(n,t,p),u(n,s,p)},p:B,d(n){n&&(r(e),r(l),r(t),r(s))}}}function ki(m){let e,a="Les collections en Java",l,t,c="L&#39;interface <code>Collection</code>",s,n,p=`L&#39;interface <code>Collection</code> est une interface générique qui définit les méthodes
			permettant de manipuler une collection d&#39;objets. <br/>Elle étend l&#39;interface
			<code>Iterable</code>
			et définit des méthodes pour ajouter, supprimer, rechercher et parcourir les éléments d&#39;une collection.`;return{c(){e=g("h2"),e.textContent=a,l=_(),t=g("h3"),t.innerHTML=c,s=_(),n=g("p"),n.innerHTML=p},l(i){e=h(i,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-l661wu"&&(e.textContent=a),l=x(i),t=h(i,"H3",{"data-svelte-h":!0}),b(t)!=="svelte-9yvwmh"&&(t.innerHTML=c),s=x(i),n=h(i,"P",{"data-svelte-h":!0}),b(n)!=="svelte-1pakf3f"&&(n.innerHTML=p)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),u(i,n,$)},p:B,d(i){i&&(r(e),r(l),r(t),r(s),r(n))}}}function Ai(m){let e,a="L&#39;interface <code>List</code>, <code>Queue</code> et <code>Set</code>",l,t,c=`<p class="flex-1">L&#39;interface <code>List</code> définit les méthodes pour manipuler une collection d&#39;objets ordonnée
				et indexée.</p> <p class="flex-1">L&#39;interface <code>Queue</code> manipule une collection d&#39;objets organisée selon le principe de
				file d&#39;attente.</p> <p class="flex-1">L&#39;interface <code>Set</code> manipule une collection d&#39;objets sans doublons.</p>`;return{c(){e=g("h3"),e.innerHTML=a,l=_(),t=g("div"),t.innerHTML=c,this.h()},l(s){e=h(s,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-w4a6ej"&&(e.innerHTML=a),l=x(s),t=h(s,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-w1y9z7"&&(t.innerHTML=c),this.h()},h(){w(t,"class","flex flex-row gap-4")},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function Di(m){let e,a="Les classes <code>ArrayList</code>, <code>PriorityQueue</code> et <code>TreeSet</code>",l,t,c=`<p class="flex-1">La classe <code>ArrayList</code> est une implémentation de l&#39;interface <code>List</code> qui
				stocke les éléments dans un tableau dynamique.</p> <p class="flex-1">La classe <code>PriorityQueue</code> est une implémentation de l&#39;interface
				<code>Queue</code> qui stocke les éléments dans une file d&#39;attente de priorité.</p> <p class="flex-1">La classe <code>TreeSet</code> est une implémentation de l&#39;interface <code>SortedSet</code> qui
				stocke les éléments dans un arbre binaire équilibré.</p>`;return{c(){e=g("h3"),e.innerHTML=a,l=_(),t=g("div"),t.innerHTML=c,this.h()},l(s){e=h(s,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-lkcebm"&&(e.innerHTML=a),l=x(s),t=h(s,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1cjm5fg"&&(t.innerHTML=c),this.h()},h(){w(t,"class","flex flex-row gap-4")},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function Ei(m){let e=`
		@startuml

interface Iterable {
    + iterator() : Iterator
}

interface Collection {
    + size() : int
    + isEmpty() : boolean
    + contains(Object) : boolean
    + add(Object) : boolean
    + remove(Object) : boolean
    + clear()
}

interface Queue {
    + element() : Object
    + offer(Object) : boolean
    + peek() : Object
    + poll() : Object
}

interface List {
    + get(int) : Object
    + set(int, Object) : Object
    + add(int, Object)
    + remove(int) : Object
    
}

interface Set {

}

class ArrayList {
    + trimToSize()
    + ensureCapacity(int)
	...
}

class PriorityQueue {
	...
    
}

class TreeSet {
    + ceiling(Object) : Object
    + floor(Object) : Object
    + higher(Object) : Object
    + lower(Object) : Object
}

Collection <|.. List
Collection <|.. Queue
Collection <|.. Set
Iterable <|.. Collection
List <|-- ArrayList
Queue <|-- LinkedList
Set <|-- TreeSet

@enduml
`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Ii(m){let e,a="Diagramme de classes des collections en Java",l,t,c;return t=new Pe({props:{$$slots:{default:[Ei]},$$scope:{ctx:m}}}),{c(){e=g("p"),e.textContent=a,l=_(),j(t.$$.fragment)},l(s){e=h(s,"P",{"data-svelte-h":!0}),b(e)!=="svelte-nh95aa"&&(e.textContent=a),l=x(s),M(t.$$.fragment,s)},m(s,n){u(s,e,n),u(s,l,n),S(t,s,n),c=!0},p(s,n){const p={};n&1&&(p.$$scope={dirty:n,ctx:s}),t.$set(p)},i(s){c||(T(t.$$.fragment,s),c=!0)},o(s){q(t.$$.fragment,s),c=!1},d(s){s&&(r(e),r(l)),P(t,s)}}}function zi(m){let e=`
		List<String> arrayList = new ArrayList<>();
		Queue<String> priorityQueue = new PriorityQueue<>();
		Set<String> treeSet = new TreeSet<>();
		
		//Code commun aux collections :
		arrayList.add("Java");
		prorityQueue.add("Java");
		treeSet.add("Java");

		//Code commun au Iterable :
		for (String element : arrayList) {
			System.out.println(element);
		}
		for (String element : priorityQueue) {
			System.out.println(element);
		}
		//Spécifique à chaque implémentation :
		priorityQueue.poll();
		treeSet.ceiling("Java");
		arrayList.get(0);
		`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Oi(m){let e,a="Application",l,t,c;return t=new ie({props:{$$slots:{default:[zi]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),j(t.$$.fragment)},l(s){e=h(s,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-o4ufds"&&(e.textContent=a),l=x(s),M(t.$$.fragment,s)},m(s,n){u(s,e,n),u(s,l,n),S(t,s,n),c=!0},p(s,n){const p={};n&1&&(p.$$scope={dirty:n,ctx:s}),t.$set(p)},i(s){c||(T(t.$$.fragment,s),c=!0)},o(s){q(t.$$.fragment,s),c=!1},d(s){s&&(r(e),r(l)),P(t,s)}}}function Ui(m){let e,a="Les collections en Java",l,t,c,s,n,p,i,$,C,o,f,v,d,L,U,A,V,O;return t=new y({props:{$$slots:{default:[qi]},$$scope:{ctx:m}}}),s=new y({props:{$$slots:{default:[Ti]},$$scope:{ctx:m}}}),p=new y({props:{$$slots:{default:[Mi]},$$scope:{ctx:m}}}),$=new y({props:{$$slots:{default:[ji]},$$scope:{ctx:m}}}),C=new y({props:{$$slots:{default:[ki]},$$scope:{ctx:m}}}),f=new y({props:{$$slots:{default:[Ai]},$$scope:{ctx:m}}}),d=new y({props:{$$slots:{default:[Di]},$$scope:{ctx:m}}}),U=new y({props:{$$slots:{default:[Ii]},$$scope:{ctx:m}}}),V=new y({props:{$$slots:{default:[Oi]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),j(t.$$.fragment),c=_(),j(s.$$.fragment),n=_(),j(p.$$.fragment),i=_(),j($.$$.fragment),j(C.$$.fragment),o=_(),j(f.$$.fragment),v=_(),j(d.$$.fragment),L=_(),j(U.$$.fragment),A=_(),j(V.$$.fragment)},l(E){e=h(E,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1r7hpea"&&(e.textContent=a),l=x(E),M(t.$$.fragment,E),c=x(E),M(s.$$.fragment,E),n=x(E),M(p.$$.fragment,E),i=x(E),M($.$$.fragment,E),M(C.$$.fragment,E),o=x(E),M(f.$$.fragment,E),v=x(E),M(d.$$.fragment,E),L=x(E),M(U.$$.fragment,E),A=x(E),M(V.$$.fragment,E)},m(E,I){u(E,e,I),u(E,l,I),S(t,E,I),u(E,c,I),S(s,E,I),u(E,n,I),S(p,E,I),u(E,i,I),S($,E,I),S(C,E,I),u(E,o,I),S(f,E,I),u(E,v,I),S(d,E,I),u(E,L,I),S(U,E,I),u(E,A,I),S(V,E,I),O=!0},p(E,I){const z={};I&1&&(z.$$scope={dirty:I,ctx:E}),t.$set(z);const W={};I&1&&(W.$$scope={dirty:I,ctx:E}),s.$set(W);const K={};I&1&&(K.$$scope={dirty:I,ctx:E}),p.$set(K);const k={};I&1&&(k.$$scope={dirty:I,ctx:E}),$.$set(k);const D={};I&1&&(D.$$scope={dirty:I,ctx:E}),C.$set(D);const H={};I&1&&(H.$$scope={dirty:I,ctx:E}),f.$set(H);const R={};I&1&&(R.$$scope={dirty:I,ctx:E}),d.$set(R);const se={};I&1&&(se.$$scope={dirty:I,ctx:E}),U.$set(se);const re={};I&1&&(re.$$scope={dirty:I,ctx:E}),V.$set(re)},i(E){O||(T(t.$$.fragment,E),T(s.$$.fragment,E),T(p.$$.fragment,E),T($.$$.fragment,E),T(C.$$.fragment,E),T(f.$$.fragment,E),T(d.$$.fragment,E),T(U.$$.fragment,E),T(V.$$.fragment,E),O=!0)},o(E){q(t.$$.fragment,E),q(s.$$.fragment,E),q(p.$$.fragment,E),q($.$$.fragment,E),q(C.$$.fragment,E),q(f.$$.fragment,E),q(d.$$.fragment,E),q(U.$$.fragment,E),q(V.$$.fragment,E),O=!1},d(E){E&&(r(e),r(l),r(c),r(n),r(i),r(o),r(v),r(L),r(A)),P(t,E),P(s,E),P(p,E),P($,E),P(C,E),P(f,E),P(d,E),P(U,E),P(V,E)}}}function Vi(m){let e,a;return e=new y({props:{$$slots:{default:[Ui]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,t){S(e,l,t),a=!0},p(l,[t]){const c={};t&1&&(c.$$scope={dirty:t,ctx:l}),e.$set(c)},i(l){a||(T(e.$$.fragment,l),a=!0)},o(l){q(e.$$.fragment,l),a=!1},d(l){P(e,l)}}}class yi extends be{constructor(e){super(),we(this,e,null,Vi,ge,{})}}function Bi(m){let e,a="Les annotations";return{c(){e=g("h3"),e.textContent=a},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-uycmsw"&&(e.textContent=a)},m(l,t){u(l,e,t)},p:B,d(l){l&&r(e)}}}function Ji(m){let e=`
                @interface MyAnnotation {
                    String value();
                    int number();
                    Class type();
                }`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Fi(m){let e,a="Les annotations",l,t,c=`Sur la plate-forme Java, une annotation est une interface lors de sa déclaration et une
			instance d&#39;une classe qui implémente cette interface lors de son utilisation.<br/>
			La définition d&#39;une annotation nécessite une syntaxe particulière utilisant le mot clé @interface.
			Une annotation se déclare donc de façon similaire à une interface.`,s,n,p;return n=new ie({props:{$$slots:{default:[Ji]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.innerHTML=c,s=_(),j(n.$$.fragment)},l(i){e=h(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-uycmsw"&&(e.textContent=a),l=x(i),t=h(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-kanb15"&&(t.innerHTML=c),s=x(i),M(n.$$.fragment,i)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),S(n,i,$),p=!0},p(i,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:i}),n.$set(C)},i(i){p||(T(n.$$.fragment,i),p=!0)},o(i){q(n.$$.fragment,i),p=!1},d(i){i&&(r(e),r(l),r(t),r(s)),P(n,i)}}}function Ni(m){let e,a="Les annotations",l,t,c="À quoi ça sert ?",s,n,p=`À la manière des interfaces marqueur, les annotations permettent de marquer des éléments de\r
			code, que ce soit des méthodes ou des types, mais aussi de leur associer des informations\r
			supplémentaires.`,i,$,C=`<strong>Fondamentalement, c&#39;est un peu comme si vous déclariez une méthode getValue() dans une
				interface, et que vous l&#39;implémentiez dans chacune des classes concrètes.<br/>
				Toutefois, la différence est que vous n&#39;avez pas besoin de fournir une implémentation pour les
				méthodes de l&#39;annotation. En plus, l&#39;annotation va se comporter un peu comme une liste d&#39;attributs,
				or, vous savez qu&#39;on ne peut pas mettre d&#39;attributs dans une interface.</strong>`;return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("h4"),t.textContent=c,s=_(),n=g("p"),n.textContent=p,i=_(),$=g("p"),$.innerHTML=C},l(o){e=h(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-uycmsw"&&(e.textContent=a),l=x(o),t=h(o,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-xuio5v"&&(t.textContent=c),s=x(o),n=h(o,"P",{"data-svelte-h":!0}),b(n)!=="svelte-1vagidc"&&(n.textContent=p),i=x(o),$=h(o,"P",{"data-svelte-h":!0}),b($)!=="svelte-17t72gl"&&($.innerHTML=C)},m(o,f){u(o,e,f),u(o,l,f),u(o,t,f),u(o,s,f),u(o,n,f),u(o,i,f),u(o,$,f)},p:B,d(o){o&&(r(e),r(l),r(t),r(s),r(n),r(i),r($))}}}function Ri(m){let e,a="Les annotations",l,t,c="Les annotations prédéfinies",s,n,p=`Java définit un certain nombre d&#39;annotations prédéfinies, qui sont utilisées dans des
			contextes particuliers. Par exemple, l&#39;annotation <code>@Override</code> est utilisée pour indiquer
			qu&#39;une méthode redéfinit une méthode de la classe mère. Vous l&#39;avez déjà utilisée sans le savoir.`,i,$,C=`En l'occurrence, cette dernière ne sert pas à grand-chose, si ce n'est vous mettre un avertissement au\r
			cas où vous vous trompiez dans le nom de la méthode.`;return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("h4"),t.textContent=c,s=_(),n=g("p"),n.innerHTML=p,i=_(),$=g("p"),$.textContent=C},l(o){e=h(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-uycmsw"&&(e.textContent=a),l=x(o),t=h(o,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-10nfps6"&&(t.textContent=c),s=x(o),n=h(o,"P",{"data-svelte-h":!0}),b(n)!=="svelte-17y0hf9"&&(n.innerHTML=p),i=x(o),$=h(o,"P",{"data-svelte-h":!0}),b($)!=="svelte-3k5h4h"&&($.textContent=C)},m(o,f){u(o,e,f),u(o,l,f),u(o,t,f),u(o,s,f),u(o,n,f),u(o,i,f),u(o,$,f)},p:B,d(o){o&&(r(e),r(l),r(t),r(s),r(n),r(i),r($))}}}function Gi(m){let e,a="Les annotations",l,t,c=`Les annotations sont très utilisées dans les frameworks Java, comme Spring, Hibernate, JUnit,\r
			etc. Elles permettent de définir des comportements spécifiques à des classes, des méthodes,\r
			des attributs, etc.`;return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.textContent=c},l(s){e=h(s,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-uycmsw"&&(e.textContent=a),l=x(s),t=h(s,"P",{"data-svelte-h":!0}),b(t)!=="svelte-bo7213"&&(t.textContent=c)},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function Qi(m){let e,a="Les annotations",l,t,c="Utilisation avec Spring",s,n,p="@Service et @Autowired",i,$,C=`Imaginez que vous ayez une classe qui a besoin d&#39;une autre classe pour fonctionner. 
			Vous devrez la passer dans le constructeur à la création de votre objet.<br/>
			Par contre, si cette classe a aussi besoin de 5 autres classes, cela devient vite compliqué.`;return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("h4"),t.textContent=c,s=_(),n=g("h5"),n.textContent=p,i=_(),$=g("p"),$.innerHTML=C},l(o){e=h(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-uycmsw"&&(e.textContent=a),l=x(o),t=h(o,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-1cjkyyt"&&(t.textContent=c),s=x(o),n=h(o,"H5",{"data-svelte-h":!0}),b(n)!=="svelte-1yhbv5q"&&(n.textContent=p),i=x(o),$=h(o,"P",{"data-svelte-h":!0}),b($)!=="svelte-1frhzwg"&&($.innerHTML=C)},m(o,f){u(o,e,f),u(o,l,f),u(o,t,f),u(o,s,f),u(o,n,f),u(o,i,f),u(o,$,f)},p:B,d(o){o&&(r(e),r(l),r(t),r(s),r(n),r(i),r($))}}}function Wi(m){let e=`
				@startuml

				class GameService {
					+IMovementService movementService
					+GameStateService stateService
				}

				class GameStateService {
					+Map<Integer, Snake> snakes
					+Map<Point, AbstractAliment> aliments
					+Map<Point, Obstacle> obstacles
				}

				class AlimentService {
					+GameStateService stateService
				}

				class ScoreService {
					+GameStateService gameStateService
				}

				class ObstacleService {
					+GameStateService gameStateService
				}

				class GameOptionsService {
					+GameService gameService
				}

				class AbstractMovementService implements IMovementService {
					+GameStateService stateService
				}

				class ArrowKeyMovementService extends AbstractMovementService {
					+GameStateService stateService
				}

				class ZqsdKeyMovementService extends AbstractMovementService {
					+GameStateService stateService
				}

				GameService --> GameStateService

				GameService -> IMovementService
				GameService -> AlimentService
				GameService -> ScoreService
				GameService -> ObstacleService

				AlimentService --> GameStateService
				ScoreService --> GameStateService
				ObstacleService --> GameStateService
				GameOptionsService --> GameService
				AbstractMovementService --> GameStateService

				@enduml
				`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Ki(m){let e,a="Les annotations",l,t,c="Utilisation avec Spring",s,n,p="@Service et @Autowired",i,$,C,o,f=`Dans le cadre du prochain TP, votre <code>GameStateService</code> sera injecté dans chacun de
			vos services.<br/>
			Les annotations <code>@Service</code> et <code>@Autowired</code> vous permettront de le faire automatiquement.`,v;return $=new Pe({props:{$$slots:{default:[Wi]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("h4"),t.textContent=c,s=_(),n=g("h5"),n.textContent=p,i=_(),j($.$$.fragment),C=_(),o=g("p"),o.innerHTML=f,this.h()},l(d){e=h(d,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-uycmsw"&&(e.textContent=a),l=x(d),t=h(d,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-1cjkyyt"&&(t.textContent=c),s=x(d),n=h(d,"H5",{"data-svelte-h":!0}),b(n)!=="svelte-1yhbv5q"&&(n.textContent=p),i=x(d),M($.$$.fragment,d),C=x(d),o=h(d,"P",{class:!0,"data-svelte-h":!0}),b(o)!=="svelte-mx7ffi"&&(o.innerHTML=f),this.h()},h(){w(o,"class","smaller")},m(d,L){u(d,e,L),u(d,l,L),u(d,t,L),u(d,s,L),u(d,n,L),u(d,i,L),S($,d,L),u(d,C,L),u(d,o,L),v=!0},p(d,L){const U={};L&1&&(U.$$scope={dirty:L,ctx:d}),$.$set(U)},i(d){v||(T($.$$.fragment,d),v=!0)},o(d){q($.$$.fragment,d),v=!1},d(d){d&&(r(e),r(l),r(t),r(s),r(n),r(i),r(C),r(o)),P($,d)}}}function Zi(m){let e=`
				@Service
				public class MyService {
					@Autowired
					private MyRepository repository;
				}
				@Service
				public class MyRepository {
					@Autowired
					private ConnexionBdd connexionBdd;
					@Autowired
					private Truc truc;
					@Autowired
					private Machin machin;
				}
				`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Yi(m){let e,a="Les annotations",l,t,c="Utilisation avec Spring",s,n,p="@Service et @Autowired",i,$,C,o,f=`Nous avons un service qui utilise un repository.<br/> Ce dernier utilise une connexion à la
			base de données, un truc et un machin. <br/>Spring va se charger de créer les instances de
			ces objets et de les injecter dans les classes qui en ont besoin.`,v;return $=new ie({props:{$$slots:{default:[Zi]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("h4"),t.textContent=c,s=_(),n=g("h5"),n.textContent=p,i=_(),j($.$$.fragment),C=_(),o=g("p"),o.innerHTML=f,this.h()},l(d){e=h(d,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-uycmsw"&&(e.textContent=a),l=x(d),t=h(d,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-1cjkyyt"&&(t.textContent=c),s=x(d),n=h(d,"H5",{"data-svelte-h":!0}),b(n)!=="svelte-1yhbv5q"&&(n.textContent=p),i=x(d),M($.$$.fragment,d),C=x(d),o=h(d,"P",{class:!0,"data-svelte-h":!0}),b(o)!=="svelte-ytj90u"&&(o.innerHTML=f),this.h()},h(){w(o,"class","smaller")},m(d,L){u(d,e,L),u(d,l,L),u(d,t,L),u(d,s,L),u(d,n,L),u(d,i,L),S($,d,L),u(d,C,L),u(d,o,L),v=!0},p(d,L){const U={};L&1&&(U.$$scope={dirty:L,ctx:d}),$.$set(U)},i(d){v||(T($.$$.fragment,d),v=!0)},o(d){q($.$$.fragment,d),v=!1},d(d){d&&(r(e),r(l),r(t),r(s),r(n),r(i),r(C),r(o)),P($,d)}}}function Xi(m){let e=`
			 	IMovementService service = applicationContext.getBean(ZqsdKeyMovementService.class);	
				//Imaginez que ZqsdKeyMovementService ait un constructeur qui prend 50 paramètres, Spring va se charger de les injecter à votre place
			`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function er(m){let e,a="Les annotations",l,t,c="Utilisation avec Spring",s,n,p="@Component et @Primary",i,$,C=`<p>Vous voulez utiliser le DP Strategy ?</p> <p>L&#39;annotation @Component permet de dire qu&#39;il pourra y avoir plusieurs classes qui
				implémentent la même interface.</p> <p>L&#39;annotation @Primary permet de dire que c&#39;est cette classe qui sera utilisée par défaut.</p> <p>Vous avez un <code>ApplicationContext</code> que vous pouvez injecter dans vos services et qui
				vous permet de demander une stratégie en fonction de son nom.</p>`,o,f,v;return f=new ie({props:{$$slots:{default:[Xi]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("h4"),t.textContent=c,s=_(),n=g("h5"),n.textContent=p,i=_(),$=g("div"),$.innerHTML=C,o=_(),j(f.$$.fragment),this.h()},l(d){e=h(d,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-uycmsw"&&(e.textContent=a),l=x(d),t=h(d,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-1cjkyyt"&&(t.textContent=c),s=x(d),n=h(d,"H5",{"data-svelte-h":!0}),b(n)!=="svelte-1h7on3i"&&(n.textContent=p),i=x(d),$=h(d,"DIV",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-1hmkf1x"&&($.innerHTML=C),o=x(d),M(f.$$.fragment,d),this.h()},h(){w($,"class","smaller")},m(d,L){u(d,e,L),u(d,l,L),u(d,t,L),u(d,s,L),u(d,n,L),u(d,i,L),u(d,$,L),u(d,o,L),S(f,d,L),v=!0},p(d,L){const U={};L&1&&(U.$$scope={dirty:L,ctx:d}),f.$set(U)},i(d){v||(T(f.$$.fragment,d),v=!0)},o(d){q(f.$$.fragment,d),v=!1},d(d){d&&(r(e),r(l),r(t),r(s),r(n),r(i),r($),r(o)),P(f,d)}}}function tr(m){let e=`
				@Service
				public class GameService {
					@Autowired
					private IMovementService movementService;
					private changeMovementService(string nom) {
							//...
							movementService = applicationContext.getBean(ZqsdKeyMovementService.class);
						}
					}
				}

				@Component
				@Primary
				public class ArrowKeyMovementService implements IMovementService { }
				@Component
				public class ZqsdKeyMovementService implements IMovementService { }
				`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function lr(m){let e,a="Les annotations",l,t,c="Utilisation avec Spring",s,n,p="@Component et @Primary",i,$,C;return $=new ie({props:{class:"smaller",$$slots:{default:[tr]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("h4"),t.textContent=c,s=_(),n=g("h5"),n.textContent=p,i=_(),j($.$$.fragment)},l(o){e=h(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-uycmsw"&&(e.textContent=a),l=x(o),t=h(o,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-1cjkyyt"&&(t.textContent=c),s=x(o),n=h(o,"H5",{"data-svelte-h":!0}),b(n)!=="svelte-1h7on3i"&&(n.textContent=p),i=x(o),M($.$$.fragment,o)},m(o,f){u(o,e,f),u(o,l,f),u(o,t,f),u(o,s,f),u(o,n,f),u(o,i,f),S($,o,f),C=!0},p(o,f){const v={};f&1&&(v.$$scope={dirty:f,ctx:o}),$.$set(v)},i(o){C||(T($.$$.fragment,o),C=!0)},o(o){q($.$$.fragment,o),C=!1},d(o){o&&(r(e),r(l),r(t),r(s),r(n),r(i)),P($,o)}}}function sr(m){let e,a="Les annotations",l,t,c="Utilisation avec Spring",s,n,p="Le principal avantage de Spring est que juste à l'aide d'annotations, vous pouvez définir des services qui seront utilisés par d'autres services.",i,$,C=`Si vous voulez déplacer du code qui devient complexe <strong>ou</strong> que vous voulez utiliser ailleurs, c&#39;est alors très simple, il suffit de faire une nouvelle classe, l&#39;anotter avec @Service
			et injecter ce service où vous voulez.`,o,f,v="Cette manière de coder est plus ou moins un Design Pattern appelé <strong>Dependency Injection</strong>";return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("h4"),t.textContent=c,s=_(),n=g("p"),n.textContent=p,i=_(),$=g("p"),$.innerHTML=C,o=_(),f=g("p"),f.innerHTML=v,this.h()},l(d){e=h(d,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-uycmsw"&&(e.textContent=a),l=x(d),t=h(d,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-1cjkyyt"&&(t.textContent=c),s=x(d),n=h(d,"P",{"data-svelte-h":!0}),b(n)!=="svelte-18zogyt"&&(n.textContent=p),i=x(d),$=h(d,"P",{"data-svelte-h":!0}),b($)!=="svelte-84n48u"&&($.innerHTML=C),o=x(d),f=h(d,"P",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-13vmlio"&&(f.innerHTML=v),this.h()},h(){w(f,"class","text-important")},m(d,L){u(d,e,L),u(d,l,L),u(d,t,L),u(d,s,L),u(d,n,L),u(d,i,L),u(d,$,L),u(d,o,L),u(d,f,L)},p:B,d(d){d&&(r(e),r(l),r(t),r(s),r(n),r(i),r($),r(o),r(f))}}}function nr(m){let e,a,l,t,c,s,n,p,i,$,C,o,f,v,d,L,U,A,V,O,E,I;return e=new y({props:{$$slots:{default:[Bi]},$$scope:{ctx:m}}}),l=new y({props:{$$slots:{default:[Fi]},$$scope:{ctx:m}}}),c=new y({props:{$$slots:{default:[Ni]},$$scope:{ctx:m}}}),n=new y({props:{$$slots:{default:[Ri]},$$scope:{ctx:m}}}),i=new y({props:{$$slots:{default:[Gi]},$$scope:{ctx:m}}}),C=new y({props:{$$slots:{default:[Qi]},$$scope:{ctx:m}}}),f=new y({props:{$$slots:{default:[Ki]},$$scope:{ctx:m}}}),d=new y({props:{$$slots:{default:[Yi]},$$scope:{ctx:m}}}),U=new y({props:{$$slots:{default:[er]},$$scope:{ctx:m}}}),V=new y({props:{$$slots:{default:[lr]},$$scope:{ctx:m}}}),E=new y({props:{$$slots:{default:[sr]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment),a=_(),j(l.$$.fragment),t=_(),j(c.$$.fragment),s=_(),j(n.$$.fragment),p=_(),j(i.$$.fragment),$=_(),j(C.$$.fragment),o=_(),j(f.$$.fragment),v=_(),j(d.$$.fragment),L=_(),j(U.$$.fragment),A=_(),j(V.$$.fragment),O=_(),j(E.$$.fragment)},l(z){M(e.$$.fragment,z),a=x(z),M(l.$$.fragment,z),t=x(z),M(c.$$.fragment,z),s=x(z),M(n.$$.fragment,z),p=x(z),M(i.$$.fragment,z),$=x(z),M(C.$$.fragment,z),o=x(z),M(f.$$.fragment,z),v=x(z),M(d.$$.fragment,z),L=x(z),M(U.$$.fragment,z),A=x(z),M(V.$$.fragment,z),O=x(z),M(E.$$.fragment,z)},m(z,W){S(e,z,W),u(z,a,W),S(l,z,W),u(z,t,W),S(c,z,W),u(z,s,W),S(n,z,W),u(z,p,W),S(i,z,W),u(z,$,W),S(C,z,W),u(z,o,W),S(f,z,W),u(z,v,W),S(d,z,W),u(z,L,W),S(U,z,W),u(z,A,W),S(V,z,W),u(z,O,W),S(E,z,W),I=!0},p(z,W){const K={};W&1&&(K.$$scope={dirty:W,ctx:z}),e.$set(K);const k={};W&1&&(k.$$scope={dirty:W,ctx:z}),l.$set(k);const D={};W&1&&(D.$$scope={dirty:W,ctx:z}),c.$set(D);const H={};W&1&&(H.$$scope={dirty:W,ctx:z}),n.$set(H);const R={};W&1&&(R.$$scope={dirty:W,ctx:z}),i.$set(R);const se={};W&1&&(se.$$scope={dirty:W,ctx:z}),C.$set(se);const re={};W&1&&(re.$$scope={dirty:W,ctx:z}),f.$set(re);const Q={};W&1&&(Q.$$scope={dirty:W,ctx:z}),d.$set(Q);const Z={};W&1&&(Z.$$scope={dirty:W,ctx:z}),U.$set(Z);const ae={};W&1&&(ae.$$scope={dirty:W,ctx:z}),V.$set(ae);const N={};W&1&&(N.$$scope={dirty:W,ctx:z}),E.$set(N)},i(z){I||(T(e.$$.fragment,z),T(l.$$.fragment,z),T(c.$$.fragment,z),T(n.$$.fragment,z),T(i.$$.fragment,z),T(C.$$.fragment,z),T(f.$$.fragment,z),T(d.$$.fragment,z),T(U.$$.fragment,z),T(V.$$.fragment,z),T(E.$$.fragment,z),I=!0)},o(z){q(e.$$.fragment,z),q(l.$$.fragment,z),q(c.$$.fragment,z),q(n.$$.fragment,z),q(i.$$.fragment,z),q(C.$$.fragment,z),q(f.$$.fragment,z),q(d.$$.fragment,z),q(U.$$.fragment,z),q(V.$$.fragment,z),q(E.$$.fragment,z),I=!1},d(z){z&&(r(a),r(t),r(s),r(p),r($),r(o),r(v),r(L),r(A),r(O)),P(e,z),P(l,z),P(c,z),P(n,z),P(i,z),P(C,z),P(f,z),P(d,z),P(U,z),P(V,z),P(E,z)}}}function ir(m){let e,a;return e=new y({props:{$$slots:{default:[nr]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,t){S(e,l,t),a=!0},p(l,[t]){const c={};t&1&&(c.$$scope={dirty:t,ctx:l}),e.$set(c)},i(l){a||(T(e.$$.fragment,l),a=!0)},o(l){q(e.$$.fragment,l),a=!1},d(l){P(e,l)}}}class rr extends be{constructor(e){super(),we(this,e,null,ir,ge,{})}}function ar(m){let e,a="Patrons de conception",l,t,c='Cours très bien expliqué : <a href="https://refactoring.guru/fr" target="_blank">Refactoring Guru</a>';return{c(){e=g("h2"),e.textContent=a,l=_(),t=g("p"),t.innerHTML=c,this.h()},l(s){e=h(s,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-l6cb4s"&&(e.textContent=a),l=x(s),t=h(s,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-19668a8"&&(t.innerHTML=c),this.h()},h(){w(t,"class","fragment")},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function ur(m){let e,a="Qu'est-ce qu'un patron de conception ?",l,t,c=`Un patron de conception est une solution générale à un problème récurrent en conception\r
			logicielle.`,s,n,p="Les bons développeurs connaissent ces patrons et savent quand les utiliser.",i,$,C="En connaissant bien ces patrons, vous pouvez proposer des fonctionnalités supplémentaires sans surcoût.",o,f,v="Un DP bien identifié permet de communiquer plus facilement avec les autres développeurs !";return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.textContent=c,s=_(),n=g("p"),n.textContent=p,i=_(),$=g("p"),$.textContent=C,o=_(),f=g("p"),f.textContent=v,this.h()},l(d){e=h(d,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-ac53e2"&&(e.textContent=a),l=x(d),t=h(d,"P",{"data-svelte-h":!0}),b(t)!=="svelte-klr3xc"&&(t.textContent=c),s=x(d),n=h(d,"P",{"data-svelte-h":!0}),b(n)!=="svelte-rif0m1"&&(n.textContent=p),i=x(d),$=h(d,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-p9bw1x"&&($.textContent=C),o=x(d),f=h(d,"P",{"data-svelte-h":!0}),b(f)!=="svelte-12jq88p"&&(f.textContent=v),this.h()},h(){w($,"class","text-important")},m(d,L){u(d,e,L),u(d,l,L),u(d,t,L),u(d,s,L),u(d,n,L),u(d,i,L),u(d,$,L),u(d,o,L),u(d,f,L)},p:B,d(d){d&&(r(e),r(l),r(t),r(s),r(n),r(i),r($),r(o),r(f))}}}function or(m){let e,a="Les patrons de conception sont-ils indispensables ?",l,t,c="Non, mais ils sont très utiles pour résoudre des problèmes courants de manière efficace.",s,n,p="Il existe de nombreux patrons de conception, mais il est inutile de tous les connaître par cœur !",i,$,C=`C'est un peu comme si nous avions observé des bouts de code qui marchent bien, et que nous les\r
			avions classés et regroupés pour les proposer à tous.`,o,f,v="Vous utilisez probablement déjà des patrons de conception sans le savoir !";return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.textContent=c,s=_(),n=g("p"),n.textContent=p,i=_(),$=g("p"),$.textContent=C,o=_(),f=g("p"),f.textContent=v,this.h()},l(d){e=h(d,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-qkdteq"&&(e.textContent=a),l=x(d),t=h(d,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1lzbry7"&&(t.textContent=c),s=x(d),n=h(d,"P",{"data-svelte-h":!0}),b(n)!=="svelte-1yjd8fx"&&(n.textContent=p),i=x(d),$=h(d,"P",{"data-svelte-h":!0}),b($)!=="svelte-1gcugiu"&&($.textContent=C),o=x(d),f=h(d,"P",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-1k895an"&&(f.textContent=v),this.h()},h(){w(f,"class","text-important")},m(d,L){u(d,e,L),u(d,l,L),u(d,t,L),u(d,s,L),u(d,n,L),u(d,i,L),u(d,$,L),u(d,o,L),u(d,f,L)},p:B,d(d){d&&(r(e),r(l),r(t),r(s),r(n),r(i),r($),r(o),r(f))}}}function $r(m){let e,a="Analogie",l,t,c=`Une bonne analogie pour les patrons de conception en POO dans la vie réelle serait celle d'une\r
			cuisine professionnelle dans un restaurant. Voici comment cela fonctionne :`;return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.textContent=c},l(s){e=h(s,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-gaiqh2"&&(e.textContent=a),l=x(s),t=h(s,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1e74hoy"&&(t.textContent=c)},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function fr(m){let e,a="Qui prépare les commandes ?",l,t,c="Singleton",s,n,p=`Le chef de cuisine est responsable de la préparation des commandes. Il doit y en avoir
			strictement <b>un seul</b>.<br/>`,i,$,C=`Si vous avez bien suivi, vous connaissez déjà une manière pour qu'un attribut soit partagé par\r
			toutes les instances d'une classe.`;return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("h4"),t.textContent=c,s=_(),n=g("p"),n.innerHTML=p,i=_(),$=g("p"),$.textContent=C,this.h()},l(o){e=h(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1ymnqdo"&&(e.textContent=a),l=x(o),t=h(o,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-ek6eep"&&(t.textContent=c),s=x(o),n=h(o,"P",{"data-svelte-h":!0}),b(n)!=="svelte-igcgyy"&&(n.innerHTML=p),i=x(o),$=h(o,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-sen092"&&($.textContent=C),this.h()},h(){w($,"class","text-important")},m(o,f){u(o,e,f),u(o,l,f),u(o,t,f),u(o,s,f),u(o,n,f),u(o,i,f),u(o,$,f)},p:B,d(o){o&&(r(e),r(l),r(t),r(s),r(n),r(i),r($))}}}function cr(m){let e,a="Qui prépare les commandes ?",l,t,c="Singleton",s,n,p=`Un singleton est une classe avec une méthode statique <code>getInstance</code> qui retourne la
			même instance de la classe à chaque appel.`,i,$,C=`Pour cela, le constructeur de la classe est privé, et la seule manière de créer une instance de
			la classe est d&#39;appeler la méthode <code>getInstance</code> qui fait un <code>new</code>.`,o,f,v='<img src="https://refactoring.guru/images/patterns/diagrams/singleton/structure-fr.png" alt="Singleton"/>';return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("h4"),t.textContent=c,s=_(),n=g("p"),n.innerHTML=p,i=_(),$=g("p"),$.innerHTML=C,o=_(),f=g("div"),f.innerHTML=v,this.h()},l(d){e=h(d,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1ymnqdo"&&(e.textContent=a),l=x(d),t=h(d,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-ek6eep"&&(t.textContent=c),s=x(d),n=h(d,"P",{"data-svelte-h":!0}),b(n)!=="svelte-yw0ri4"&&(n.innerHTML=p),i=x(d),$=h(d,"P",{"data-svelte-h":!0}),b($)!=="svelte-lpvbic"&&($.innerHTML=C),o=x(d),f=h(d,"DIV",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-cupfnk"&&(f.innerHTML=v),this.h()},h(){w(f,"class","flex justify-center")},m(d,L){u(d,e,L),u(d,l,L),u(d,t,L),u(d,s,L),u(d,n,L),u(d,i,L),u(d,$,L),u(d,o,L),u(d,f,L)},p:B,d(d){d&&(r(e),r(l),r(t),r(s),r(n),r(i),r($),r(o),r(f))}}}function pr(m){let e,a="Comment les serveurs passent commande ?",l,t,c="Factory",s,n,p=`Les serveurs prennent les commandes des clients et les transmettent au chef de cuisine. Ils ne\r
			savent pas comment les plats sont préparés, ils ne font que transmettre les commandes.`,i,$,C="Le patron de conception Factory permet de déléguer la création d'objets à une classe Factory.";return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("h4"),t.textContent=c,s=_(),n=g("p"),n.textContent=p,i=_(),$=g("p"),$.textContent=C,this.h()},l(o){e=h(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-syq1eh"&&(e.textContent=a),l=x(o),t=h(o,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-sjvco4"&&(t.textContent=c),s=x(o),n=h(o,"P",{"data-svelte-h":!0}),b(n)!=="svelte-k5nwdz"&&(n.textContent=p),i=x(o),$=h(o,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-xcpn72"&&($.textContent=C),this.h()},h(){w($,"class","text-important")},m(o,f){u(o,e,f),u(o,l,f),u(o,t,f),u(o,s,f),u(o,n,f),u(o,i,f),u(o,$,f)},p:B,d(o){o&&(r(e),r(l),r(t),r(s),r(n),r(i),r($))}}}function mr(m){let e,a="Comment les serveurs passent commande ?",l,t,c="Factory",s,n,p=`Le principe : Je dis au chef de préparer une <code>&quot;Pizza&quot;</code> ou un <code>&quot;Steak&quot;</code>,
			le serveur n&#39;instancie pas une classe &quot;Pizza&quot; car il devrait sinon savoir si on fait`,i,$,C="<li><code>new Pizza(Enum.BaseCreme,[&quot;saumon&quot;,&quot;aneth&quot;],180°, &quot;240 s&quot;)</code></li> <li><code>new Steak(tartare:false)</code></li>",o,f,v=`On préfère lui passer une information standardisée et une <b>Factory</b> utilisée par le chef de
			cuisine se chargera de créer l&#39;objet.`,d,L,U='<img src="https://refactoring.guru/images/patterns/diagrams/factory-method/solution2-fr.png" alt="Factory"/>';return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("h4"),t.textContent=c,s=_(),n=g("p"),n.innerHTML=p,i=_(),$=g("ul"),$.innerHTML=C,o=_(),f=g("p"),f.innerHTML=v,d=_(),L=g("div"),L.innerHTML=U,this.h()},l(A){e=h(A,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-syq1eh"&&(e.textContent=a),l=x(A),t=h(A,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-sjvco4"&&(t.textContent=c),s=x(A),n=h(A,"P",{"data-svelte-h":!0}),b(n)!=="svelte-18f9g3y"&&(n.innerHTML=p),i=x(A),$=h(A,"UL",{"data-svelte-h":!0}),b($)!=="svelte-nyqhyx"&&($.innerHTML=C),o=x(A),f=h(A,"P",{"data-svelte-h":!0}),b(f)!=="svelte-1ea5q7v"&&(f.innerHTML=v),d=x(A),L=h(A,"DIV",{class:!0,"data-svelte-h":!0}),b(L)!=="svelte-110b8ns"&&(L.innerHTML=U),this.h()},h(){w(L,"class","flex justify-center")},m(A,V){u(A,e,V),u(A,l,V),u(A,t,V),u(A,s,V),u(A,n,V),u(A,i,V),u(A,$,V),u(A,o,V),u(A,f,V),u(A,d,V),u(A,L,V)},p:B,d(A){A&&(r(e),r(l),r(t),r(s),r(n),r(i),r($),r(o),r(f),r(d),r(L))}}}function dr(m){let e=`
				class Serveur {
					public Product prendreCommande(string plat) {
						return Chef.getInstance().préparer(plat);
					}
				}
				class Chef {
					public static Chef getInstance();
					public Product préparer(string plat) {
						switch(plat) {
							case "Pizza":
								return new Pizza(); // Pizza hérite de Product
							case "Steak":
								return new Steak(); // Steak hérite de Product
						}
					}
				}	
				`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function vr(m){let e,a="Comment les serveurs passent commande ?",l,t,c="Factory",s,n,p,i,$,C,o,f,v=`Dans notre cas, le chef est un singleton et la factory est une méthode de la classe Chef. Les\r
			DP se combinent !`,d;return C=new ie({props:{$$slots:{default:[dr]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("h4"),t.textContent=c,s=_(),n=g("div"),p=g("img"),$=_(),j(C.$$.fragment),o=_(),f=g("p"),f.textContent=v,this.h()},l(L){e=h(L,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-syq1eh"&&(e.textContent=a),l=x(L),t=h(L,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-sjvco4"&&(t.textContent=c),s=x(L),n=h(L,"DIV",{class:!0});var U=le(n);p=h(U,"IMG",{class:!0,src:!0,alt:!0}),$=x(U),M(C.$$.fragment,U),U.forEach(r),o=x(L),f=h(L,"P",{"data-svelte-h":!0}),b(f)!=="svelte-cyiegd"&&(f.textContent=v),this.h()},h(){w(p,"class","w-2/5"),Oe(p.src,i="https://refactoring.guru/images/patterns/diagrams/factory-method/structure.png")||w(p,"src",i),w(p,"alt","Factory"),w(n,"class","flex items-center")},m(L,U){u(L,e,U),u(L,l,U),u(L,t,U),u(L,s,U),u(L,n,U),G(n,p),G(n,$),S(C,n,null),u(L,o,U),u(L,f,U),d=!0},p(L,U){const A={};U&1&&(A.$$scope={dirty:U,ctx:L}),C.$set(A)},i(L){d||(T(C.$$.fragment,L),d=!0)},o(L){q(C.$$.fragment,L),d=!1},d(L){L&&(r(e),r(l),r(t),r(s),r(n),r(o),r(f)),P(C)}}}function xr(m){let e,a="Comment le chef prévient qu'il a fini ?",l,t,c="Observer",s,n,p=`Lorsque le chef a fini de préparer un plat, il le dépose sur le comptoir. Les serveurs sont\r
			notifiés et peuvent alors servir le plat aux clients.`,i,$,C=`Le patron de conception Observer permet de définir une relation de type "un à plusieurs" entre\r
			objets, de sorte que lorsqu'un objet change d'état, tous les objets qui en dépendent sont\r
			notifiés et mis à jour automatiquement.`;return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("h4"),t.textContent=c,s=_(),n=g("p"),n.textContent=p,i=_(),$=g("p"),$.textContent=C,this.h()},l(o){e=h(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-l8jio1"&&(e.textContent=a),l=x(o),t=h(o,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-ph591o"&&(t.textContent=c),s=x(o),n=h(o,"P",{"data-svelte-h":!0}),b(n)!=="svelte-4x45c1"&&(n.textContent=p),i=x(o),$=h(o,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-1rn4b0j"&&($.textContent=C),this.h()},h(){w($,"class","text-important")},m(o,f){u(o,e,f),u(o,l,f),u(o,t,f),u(o,s,f),u(o,n,f),u(o,i,f),u(o,$,f)},p:B,d(o){o&&(r(e),r(l),r(t),r(s),r(n),r(i),r($))}}}function _r(m){let e,a="Comment le chef prévient qu'il a fini ?",l,t,c="Observer",s,n,p=`Le chef ne va pas maintenir une liste de serveurs, puis lorsqu'il a fini de préparer un\r
			plat, appeler chacun d'entre eux, savoir s'ils sont disponibles. Imaginez qu'il ait en plus\r
			des serveurs des livreurs Deliveroo, c'est ingérable.`,i,$,C=`On va plutôt adopter une approche "Je préviens que j'ai fini, ceux que ça intéresse auront\r
			qu'à venir le chercher".`,o,f,v='<img src="https://refactoring.guru/images/patterns/content/observer/observer-comic-1-fr.png" alt="Observer"/>';return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("h4"),t.textContent=c,s=_(),n=g("p"),n.textContent=p,i=_(),$=g("p"),$.textContent=C,o=_(),f=g("div"),f.innerHTML=v,this.h()},l(d){e=h(d,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-l8jio1"&&(e.textContent=a),l=x(d),t=h(d,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-ph591o"&&(t.textContent=c),s=x(d),n=h(d,"P",{"data-svelte-h":!0}),b(n)!=="svelte-qt5c9m"&&(n.textContent=p),i=x(d),$=h(d,"P",{"data-svelte-h":!0}),b($)!=="svelte-w799ge"&&($.textContent=C),o=x(d),f=h(d,"DIV",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-1u60quo"&&(f.innerHTML=v),this.h()},h(){w(f,"class","flex justify-center")},m(d,L){u(d,e,L),u(d,l,L),u(d,t,L),u(d,s,L),u(d,n,L),u(d,i,L),u(d,$,L),u(d,o,L),u(d,f,L)},p:B,d(d){d&&(r(e),r(l),r(t),r(s),r(n),r(i),r($),r(o),r(f))}}}function Cr(m){let e=`
				class Chef {
					public Product préparer(string plat) {
						var plat = new Plat();
						Publisher.getInstance().notify("ready", plat);
					}
				}	
				class Serveur implements Subscriber {
					public Serveur() {
						Publisher.getInstance().subscribe(this);
					}
					public void update(string event, Object o) {
						if(event == "ready") {
							((Product)o).servir("Table 13");
						}
					}
				}
				`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function hr(m){let e,a="Comment le chef prévient qu'il a fini ?",l,t,c="Observer",s,n,p,i,$,C,o,f,v=`Une fois encore, on a fait le choix que notre Publisher soit un singleton, mais on peut avoir\r
			plusieurs Publisher, par exemple un Publisher restaurant et un Publisher Deliveroo.`,d;return C=new ie({props:{$$slots:{default:[Cr]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("h4"),t.textContent=c,s=_(),n=g("div"),p=g("img"),$=_(),j(C.$$.fragment),o=_(),f=g("p"),f.textContent=v,this.h()},l(L){e=h(L,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-l8jio1"&&(e.textContent=a),l=x(L),t=h(L,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-ph591o"&&(t.textContent=c),s=x(L),n=h(L,"DIV",{class:!0});var U=le(n);p=h(U,"IMG",{class:!0,src:!0,alt:!0}),$=x(U),M(C.$$.fragment,U),U.forEach(r),o=x(L),f=h(L,"P",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-sfk3qa"&&(f.textContent=v),this.h()},h(){w(p,"class","w-2/5"),Oe(p.src,i="https://refactoring.guru/images/patterns/diagrams/observer/structure.png")||w(p,"src",i),w(p,"alt","Observer"),w(n,"class","flex items-center"),w(f,"class","smaller")},m(L,U){u(L,e,U),u(L,l,U),u(L,t,U),u(L,s,U),u(L,n,U),G(n,p),G(n,$),S(C,n,null),u(L,o,U),u(L,f,U),d=!0},p(L,U){const A={};U&1&&(A.$$scope={dirty:U,ctx:L}),C.$set(A)},i(L){d||(T(C.$$.fragment,L),d=!0)},o(L){q(C.$$.fragment,L),d=!1},d(L){L&&(r(e),r(l),r(t),r(s),r(n),r(o),r(f)),P(C)}}}function gr(m){let e,a="Ce client qui fête son anniversaire",l,t,c="Decorator",s,n,p=`Un client fête son anniversaire et demande un gâteau. Le serveur lui apporte un gâteau simple,\r
			mais le client demande à ce qu'on y ajoute des bougies.`,i,$,C=`Le patron de conception Decorator permet d'attacher de nouvelles fonctionnalités à des objets\r
			existants de manière dynamique et transparente, sans affecter leur comportement.`;return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("h4"),t.textContent=c,s=_(),n=g("p"),n.textContent=p,i=_(),$=g("p"),$.textContent=C,this.h()},l(o){e=h(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1bbzra2"&&(e.textContent=a),l=x(o),t=h(o,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-1m84yt9"&&(t.textContent=c),s=x(o),n=h(o,"P",{"data-svelte-h":!0}),b(n)!=="svelte-su940i"&&(n.textContent=p),i=x(o),$=h(o,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-1kbudz2"&&($.textContent=C),this.h()},h(){w($,"class","text-important")},m(o,f){u(o,e,f),u(o,l,f),u(o,t,f),u(o,s,f),u(o,n,f),u(o,i,f),u(o,$,f)},p:B,d(o){o&&(r(e),r(l),r(t),r(s),r(n),r(i),r($))}}}function br(m){let e,a="Ce client qui fête son anniversaire",l,t,c="Decorator",s,n,p=`Le serveur ne va pas demander au chef de préparer un gâteau avec bougies, puis un gâteau sans\r
			bougies, puis un gâteau avec bougies et chantilly, puis un gâteau avec bougies, chantilly et\r
			glaçage au chocolat.`,i,$,C=`Il va plutôt demander un gâteau simple, puis ajouter des décorations en fonction des demandes\r
			du client.`,o,f,v='<img src="https://refactoring.guru/images/patterns/content/decorator/decorator-comic-1.png" alt="Decorator"/>';return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("h4"),t.textContent=c,s=_(),n=g("p"),n.textContent=p,i=_(),$=g("p"),$.textContent=C,o=_(),f=g("div"),f.innerHTML=v,this.h()},l(d){e=h(d,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1bbzra2"&&(e.textContent=a),l=x(d),t=h(d,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-1m84yt9"&&(t.textContent=c),s=x(d),n=h(d,"P",{"data-svelte-h":!0}),b(n)!=="svelte-rakciy"&&(n.textContent=p),i=x(d),$=h(d,"P",{"data-svelte-h":!0}),b($)!=="svelte-1ebgapo"&&($.textContent=C),o=x(d),f=h(d,"DIV",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-xlqfeu"&&(f.innerHTML=v),this.h()},h(){w(f,"class","flex justify-center")},m(d,L){u(d,e,L),u(d,l,L),u(d,t,L),u(d,s,L),u(d,n,L),u(d,i,L),u(d,$,L),u(d,o,L),u(d,f,L)},p:B,d(d){d&&(r(e),r(l),r(t),r(s),r(n),r(i),r($),r(o),r(f))}}}function wr(m){let e=`
				class Produit {}
				class AvecUneBougieDessus extends Produit {
					public AvecUneBougieDessus(Produit p) {}
					@Override
					public void servir(string table) {
						// Bon anniversaire les ptits indiens 🪇🎺…
						p.servir(table);
					}
				}
				class Serveur implements Subscriber {
					public void update(string event, Object o) {
						if(event == "ready") {
							if(cestUnAnniversaire) {
								o = new AvecUneBougieDessus((Produit)o);
							}
							((Product)o).servir("Table 13");
						}
					}
				}
				`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Lr(m){let e,a="Ce client qui fête son anniversaire",l,t,c="Decorator",s,n,p,i,$,C,o;return C=new ie({props:{$$slots:{default:[wr]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("h4"),t.textContent=c,s=_(),n=g("div"),p=g("img"),$=_(),j(C.$$.fragment),this.h()},l(f){e=h(f,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1bbzra2"&&(e.textContent=a),l=x(f),t=h(f,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-1m84yt9"&&(t.textContent=c),s=x(f),n=h(f,"DIV",{class:!0});var v=le(n);p=h(v,"IMG",{class:!0,src:!0,alt:!0}),$=x(v),M(C.$$.fragment,v),v.forEach(r),this.h()},h(){w(p,"class","w-2/5"),Oe(p.src,i="https://refactoring.guru/images/patterns/diagrams/decorator/structure.png")||w(p,"src",i),w(p,"alt","Decorator"),w(n,"class","flex items-center")},m(f,v){u(f,e,v),u(f,l,v),u(f,t,v),u(f,s,v),u(f,n,v),G(n,p),G(n,$),S(C,n,null),o=!0},p(f,v){const d={};v&1&&(d.$$scope={dirty:v,ctx:f}),C.$set(d)},i(f){o||(T(C.$$.fragment,f),o=!0)},o(f){q(C.$$.fragment,f),o=!1},d(f){f&&(r(e),r(l),r(t),r(s),r(n)),P(C)}}}function Hr(m){let e,a="Chacun paie sa part ou on divise ?",l,t,c="Strategy",s,n,p=`Un groupe de clients a fini de manger et doit payer l&#39;addition. Ils peuvent choisir de diviser
			l&#39;addition en parts égales ou de payer chacun sa part.<br/>
			En plus de ça, ils peuvent choisir de payer en liquide, par carte bancaire ou par ticket restaurant.`,i,$,C=`Le patron de conception Strategy permet de définir une famille d'algorithmes, de les\r
			encapsuler et de les rendre interchangeables.`;return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("h4"),t.textContent=c,s=_(),n=g("p"),n.innerHTML=p,i=_(),$=g("p"),$.textContent=C,this.h()},l(o){e=h(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-18nb8g"&&(e.textContent=a),l=x(o),t=h(o,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-26el53"&&(t.textContent=c),s=x(o),n=h(o,"P",{"data-svelte-h":!0}),b(n)!=="svelte-12g4z2l"&&(n.innerHTML=p),i=x(o),$=h(o,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-1x3p561"&&($.textContent=C),this.h()},h(){w($,"class","text-important")},m(o,f){u(o,e,f),u(o,l,f),u(o,t,f),u(o,s,f),u(o,n,f),u(o,i,f),u(o,$,f)},p:B,d(o){o&&(r(e),r(l),r(t),r(s),r(n),r(i),r($))}}}function Pr(m){let e,a="Chacun paie sa part ou on divise ?",l,t,c="Strategy",s,n,p=`Le serveur se charge de faire régler le client, mais comme il y a plein de cas de figure
			différents, il ne va pas faire un <code>if</code> pour chaque cas de figure.`,i,$,C="<li>Je veux payer par ticket resto <i>(valable que le midi)</i></li> <li>J&#39;ai la Mojjo <i>(il faut le prouver)</i></li> <li>En liquide mais gardez la monnaie <i>(l&#39;argent ne va pas dans la caisse directement)</i></li> <li>Sans contact <i>(le TPE fait un appel serveur pour vérifier le solde)</i></li>",o,f,v=`Extrayons chaque type de paiement dans une classe à part, et le serveur n&#39;aura qu&#39;à appeler la
			méthode <code>pay()</code> de l&#39;objet.`;return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("h4"),t.textContent=c,s=_(),n=g("p"),n.innerHTML=p,i=_(),$=g("ul"),$.innerHTML=C,o=_(),f=g("p"),f.innerHTML=v},l(d){e=h(d,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-18nb8g"&&(e.textContent=a),l=x(d),t=h(d,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-26el53"&&(t.textContent=c),s=x(d),n=h(d,"P",{"data-svelte-h":!0}),b(n)!=="svelte-8soov1"&&(n.innerHTML=p),i=x(d),$=h(d,"UL",{"data-svelte-h":!0}),b($)!=="svelte-vzd0n5"&&($.innerHTML=C),o=x(d),f=h(d,"P",{"data-svelte-h":!0}),b(f)!=="svelte-soo1gl"&&(f.innerHTML=v)},m(d,L){u(d,e,L),u(d,l,L),u(d,t,L),u(d,s,L),u(d,n,L),u(d,i,L),u(d,$,L),u(d,o,L),u(d,f,L)},p:B,d(d){d&&(r(e),r(l),r(t),r(s),r(n),r(i),r($),r(o),r(f))}}}function qr(m){let e,a="Chacun paie sa part ou on divise ?",l,t,c="Strategy",s,n,p=`Chaque stratégie de paiement est une classe qui implémente une interface <code>PaymentStrategy</code>
			qui contient une méthode <code>pay()</code>.`,i,$,C=`Le serveur n&#39;a pas à savoir comment chaque stratégie fonctionne, il lui suffit d&#39;appeler la
			méthode <code>pay()</code> de l&#39;objet.`,o,f,v='<img src="https://refactoring.guru/images/patterns/content/strategy/strategy-comic-1-fr.png" alt="Strategy"/>';return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("h4"),t.textContent=c,s=_(),n=g("p"),n.innerHTML=p,i=_(),$=g("p"),$.innerHTML=C,o=_(),f=g("div"),f.innerHTML=v,this.h()},l(d){e=h(d,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-18nb8g"&&(e.textContent=a),l=x(d),t=h(d,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-26el53"&&(t.textContent=c),s=x(d),n=h(d,"P",{"data-svelte-h":!0}),b(n)!=="svelte-lvh3xh"&&(n.innerHTML=p),i=x(d),$=h(d,"P",{"data-svelte-h":!0}),b($)!=="svelte-3626e9"&&($.innerHTML=C),o=x(d),f=h(d,"DIV",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-1yf0ntb"&&(f.innerHTML=v),this.h()},h(){w(f,"class","flex justify-center")},m(d,L){u(d,e,L),u(d,l,L),u(d,t,L),u(d,s,L),u(d,n,L),u(d,i,L),u(d,$,L),u(d,o,L),u(d,f,L)},p:B,d(d){d&&(r(e),r(l),r(t),r(s),r(n),r(i),r($),r(o),r(f))}}}function Tr(m){let e=`
				interface PaymentStrategy {
					public int pay();
				}
				class Serveur {
					public void régler(string table, PaymentStrategy p) {
						p.pay();
						addition[table].solde -= addition[table].montant;
					}
				}
				class TicketResto implements PaymentStrategy {
					public int pay() { }
				}
				class Liquide implements PaymentStrategy {
					public int pay() { }
				}
				`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function Sr(m){let e,a="Chacun paie sa part ou on divise ?",l,t,c="Strategy",s,n,p,i,$,C,o,f,v=`On pourrait toujours Décorer les stratégies de paiement, pour ceux qui veulent le ticket de
			carte ou une facture TVA…<br/>Si ça devient trop compliqué, l&#39;extraire dans une Factory.`,d;return C=new ie({props:{$$slots:{default:[Tr]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),t=g("h4"),t.textContent=c,s=_(),n=g("div"),p=g("img"),$=_(),j(C.$$.fragment),o=_(),f=g("p"),f.innerHTML=v,this.h()},l(L){e=h(L,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-18nb8g"&&(e.textContent=a),l=x(L),t=h(L,"H4",{"data-svelte-h":!0}),b(t)!=="svelte-26el53"&&(t.textContent=c),s=x(L),n=h(L,"DIV",{class:!0});var U=le(n);p=h(U,"IMG",{class:!0,src:!0,alt:!0}),$=x(U),M(C.$$.fragment,U),U.forEach(r),o=x(L),f=h(L,"P",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-100go0c"&&(f.innerHTML=v),this.h()},h(){w(p,"class","w-2/5"),Oe(p.src,i="https://refactoring.guru/images/patterns/diagrams/strategy/structure.png")||w(p,"src",i),w(p,"alt","Strategy"),w(n,"class","flex justify-center items-center"),w(f,"class","smaller")},m(L,U){u(L,e,U),u(L,l,U),u(L,t,U),u(L,s,U),u(L,n,U),G(n,p),G(n,$),S(C,n,null),u(L,o,U),u(L,f,U),d=!0},p(L,U){const A={};U&1&&(A.$$scope={dirty:U,ctx:L}),C.$set(A)},i(L){d||(T(C.$$.fragment,L),d=!0)},o(L){q(C.$$.fragment,L),d=!1},d(L){L&&(r(e),r(l),r(t),r(s),r(n),r(o),r(f)),P(C)}}}function Mr(m){let e,a="Conclusion",l,t,c="Les patrons de conception sont :",s,n,p="<li>Dispensables</li> <li>Très utiles</li> <li>Combinables</li> <li>Universels</li>";return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.textContent=c,s=_(),n=g("ul"),n.innerHTML=p},l(i){e=h(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-d7kqkf"&&(e.textContent=a),l=x(i),t=h(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1lmqdm0"&&(t.textContent=c),s=x(i),n=h(i,"UL",{"data-svelte-h":!0}),b(n)!=="svelte-1vvkxff"&&(n.innerHTML=p)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),u(i,n,$)},p:B,d(i){i&&(r(e),r(l),r(t),r(s),r(n))}}}function jr(m){let e,a="Attendus",l,t,c="À l'aide du cours et du site présenté en début de chapitre, maîtrisez-en le plus possible.",s,n,p=`Sans les DP, vous savez coder en POO, mais c'est le niveau débutant. Les DP font de vous un "bien meilleur" développeur.`;return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.textContent=c,s=_(),n=g("p"),n.textContent=p},l(i){e=h(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-7wwxn0"&&(e.textContent=a),l=x(i),t=h(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-thji73"&&(t.textContent=c),s=x(i),n=h(i,"P",{"data-svelte-h":!0}),b(n)!=="svelte-145t8ff"&&(n.textContent=p)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),u(i,n,$)},p:B,d(i){i&&(r(e),r(l),r(t),r(s),r(n))}}}function kr(m){let e,a="Attendus",l,t,c="Si vous donnez le TP entier à faire à une IA, il est probable qu'elle vous donne une solution avec peu de DP mais qui répond immédiatement à la demande.",s,n,p="Quand on gère le cas de la carte Mojjo ou de l'anniversaire avec la bougie, si on n'a pas eu le réflexe dès le début d'utiliser les DP, on ne fait que casser son code et recommencer.",i,$,C="Pour le projet, faites le plus de DP possible ! S'il n'y en a pas, je vous demanderai de rajouter une nouvelle fonctionnalité qui cassera tout votre code jusqu'à ce que vous soyez assez prévoyant.";return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("p"),t.textContent=c,s=_(),n=g("p"),n.textContent=p,i=_(),$=g("p"),$.textContent=C,this.h()},l(o){e=h(o,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-7wwxn0"&&(e.textContent=a),l=x(o),t=h(o,"P",{"data-svelte-h":!0}),b(t)!=="svelte-nke0b0"&&(t.textContent=c),s=x(o),n=h(o,"P",{"data-svelte-h":!0}),b(n)!=="svelte-29j97r"&&(n.textContent=p),i=x(o),$=h(o,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-4djlv4"&&($.textContent=C),this.h()},h(){w($,"class","text-important")},m(o,f){u(o,e,f),u(o,l,f),u(o,t,f),u(o,s,f),u(o,n,f),u(o,i,f),u(o,$,f)},p:B,d(o){o&&(r(e),r(l),r(t),r(s),r(n),r(i),r($))}}}function Ar(m){let e,a,l,t,c,s,n,p,i,$,C,o,f,v,d,L,U,A,V,O,E,I,z,W,K,k,D,H,R,se,re,Q,Z,ae,N,ee,ue,fe,ce,me,pe,_e,xe,Ce;return e=new y({props:{$$slots:{default:[ar]},$$scope:{ctx:m}}}),l=new y({props:{$$slots:{default:[ur]},$$scope:{ctx:m}}}),c=new y({props:{$$slots:{default:[or]},$$scope:{ctx:m}}}),n=new y({props:{$$slots:{default:[$r]},$$scope:{ctx:m}}}),i=new y({props:{$$slots:{default:[fr]},$$scope:{ctx:m}}}),C=new y({props:{$$slots:{default:[cr]},$$scope:{ctx:m}}}),f=new y({props:{$$slots:{default:[pr]},$$scope:{ctx:m}}}),d=new y({props:{className:"smaller",$$slots:{default:[mr]},$$scope:{ctx:m}}}),U=new y({props:{$$slots:{default:[vr]},$$scope:{ctx:m}}}),V=new y({props:{$$slots:{default:[xr]},$$scope:{ctx:m}}}),E=new y({props:{$$slots:{default:[_r]},$$scope:{ctx:m}}}),z=new y({props:{$$slots:{default:[hr]},$$scope:{ctx:m}}}),K=new y({props:{$$slots:{default:[gr]},$$scope:{ctx:m}}}),D=new y({props:{$$slots:{default:[br]},$$scope:{ctx:m}}}),R=new y({props:{$$slots:{default:[Lr]},$$scope:{ctx:m}}}),re=new y({props:{$$slots:{default:[Hr]},$$scope:{ctx:m}}}),Z=new y({props:{$$slots:{default:[Pr]},$$scope:{ctx:m}}}),N=new y({props:{$$slots:{default:[qr]},$$scope:{ctx:m}}}),ue=new y({props:{$$slots:{default:[Sr]},$$scope:{ctx:m}}}),ce=new y({props:{$$slots:{default:[Mr]},$$scope:{ctx:m}}}),pe=new y({props:{data_background_color:"#00353F",$$slots:{default:[jr]},$$scope:{ctx:m}}}),xe=new y({props:{data_background_color:"#00353F",$$slots:{default:[kr]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment),a=_(),j(l.$$.fragment),t=_(),j(c.$$.fragment),s=_(),j(n.$$.fragment),p=_(),j(i.$$.fragment),$=_(),j(C.$$.fragment),o=_(),j(f.$$.fragment),v=_(),j(d.$$.fragment),L=_(),j(U.$$.fragment),A=_(),j(V.$$.fragment),O=_(),j(E.$$.fragment),I=_(),j(z.$$.fragment),W=_(),j(K.$$.fragment),k=_(),j(D.$$.fragment),H=_(),j(R.$$.fragment),se=_(),j(re.$$.fragment),Q=_(),j(Z.$$.fragment),ae=_(),j(N.$$.fragment),ee=_(),j(ue.$$.fragment),fe=_(),j(ce.$$.fragment),me=_(),j(pe.$$.fragment),_e=_(),j(xe.$$.fragment)},l(J){M(e.$$.fragment,J),a=x(J),M(l.$$.fragment,J),t=x(J),M(c.$$.fragment,J),s=x(J),M(n.$$.fragment,J),p=x(J),M(i.$$.fragment,J),$=x(J),M(C.$$.fragment,J),o=x(J),M(f.$$.fragment,J),v=x(J),M(d.$$.fragment,J),L=x(J),M(U.$$.fragment,J),A=x(J),M(V.$$.fragment,J),O=x(J),M(E.$$.fragment,J),I=x(J),M(z.$$.fragment,J),W=x(J),M(K.$$.fragment,J),k=x(J),M(D.$$.fragment,J),H=x(J),M(R.$$.fragment,J),se=x(J),M(re.$$.fragment,J),Q=x(J),M(Z.$$.fragment,J),ae=x(J),M(N.$$.fragment,J),ee=x(J),M(ue.$$.fragment,J),fe=x(J),M(ce.$$.fragment,J),me=x(J),M(pe.$$.fragment,J),_e=x(J),M(xe.$$.fragment,J)},m(J,te){S(e,J,te),u(J,a,te),S(l,J,te),u(J,t,te),S(c,J,te),u(J,s,te),S(n,J,te),u(J,p,te),S(i,J,te),u(J,$,te),S(C,J,te),u(J,o,te),S(f,J,te),u(J,v,te),S(d,J,te),u(J,L,te),S(U,J,te),u(J,A,te),S(V,J,te),u(J,O,te),S(E,J,te),u(J,I,te),S(z,J,te),u(J,W,te),S(K,J,te),u(J,k,te),S(D,J,te),u(J,H,te),S(R,J,te),u(J,se,te),S(re,J,te),u(J,Q,te),S(Z,J,te),u(J,ae,te),S(N,J,te),u(J,ee,te),S(ue,J,te),u(J,fe,te),S(ce,J,te),u(J,me,te),S(pe,J,te),u(J,_e,te),S(xe,J,te),Ce=!0},p(J,te){const de={};te&1&&(de.$$scope={dirty:te,ctx:J}),e.$set(de);const ve={};te&1&&(ve.$$scope={dirty:te,ctx:J}),l.$set(ve);const he={};te&1&&(he.$$scope={dirty:te,ctx:J}),c.$set(he);const Le={};te&1&&(Le.$$scope={dirty:te,ctx:J}),n.$set(Le);const F={};te&1&&(F.$$scope={dirty:te,ctx:J}),i.$set(F);const ne={};te&1&&(ne.$$scope={dirty:te,ctx:J}),C.$set(ne);const He={};te&1&&(He.$$scope={dirty:te,ctx:J}),f.$set(He);const Se={};te&1&&(Se.$$scope={dirty:te,ctx:J}),d.$set(Se);const qe={};te&1&&(qe.$$scope={dirty:te,ctx:J}),U.$set(qe);const Me={};te&1&&(Me.$$scope={dirty:te,ctx:J}),V.$set(Me);const Te={};te&1&&(Te.$$scope={dirty:te,ctx:J}),E.$set(Te);const je={};te&1&&(je.$$scope={dirty:te,ctx:J}),z.$set(je);const ke={};te&1&&(ke.$$scope={dirty:te,ctx:J}),K.$set(ke);const Ae={};te&1&&(Ae.$$scope={dirty:te,ctx:J}),D.$set(Ae);const De={};te&1&&(De.$$scope={dirty:te,ctx:J}),R.$set(De);const Ee={};te&1&&(Ee.$$scope={dirty:te,ctx:J}),re.$set(Ee);const Ie={};te&1&&(Ie.$$scope={dirty:te,ctx:J}),Z.$set(Ie);const Ue={};te&1&&(Ue.$$scope={dirty:te,ctx:J}),N.$set(Ue);const Ve={};te&1&&(Ve.$$scope={dirty:te,ctx:J}),ue.$set(Ve);const ye={};te&1&&(ye.$$scope={dirty:te,ctx:J}),ce.$set(ye);const Be={};te&1&&(Be.$$scope={dirty:te,ctx:J}),pe.$set(Be);const Je={};te&1&&(Je.$$scope={dirty:te,ctx:J}),xe.$set(Je)},i(J){Ce||(T(e.$$.fragment,J),T(l.$$.fragment,J),T(c.$$.fragment,J),T(n.$$.fragment,J),T(i.$$.fragment,J),T(C.$$.fragment,J),T(f.$$.fragment,J),T(d.$$.fragment,J),T(U.$$.fragment,J),T(V.$$.fragment,J),T(E.$$.fragment,J),T(z.$$.fragment,J),T(K.$$.fragment,J),T(D.$$.fragment,J),T(R.$$.fragment,J),T(re.$$.fragment,J),T(Z.$$.fragment,J),T(N.$$.fragment,J),T(ue.$$.fragment,J),T(ce.$$.fragment,J),T(pe.$$.fragment,J),T(xe.$$.fragment,J),Ce=!0)},o(J){q(e.$$.fragment,J),q(l.$$.fragment,J),q(c.$$.fragment,J),q(n.$$.fragment,J),q(i.$$.fragment,J),q(C.$$.fragment,J),q(f.$$.fragment,J),q(d.$$.fragment,J),q(U.$$.fragment,J),q(V.$$.fragment,J),q(E.$$.fragment,J),q(z.$$.fragment,J),q(K.$$.fragment,J),q(D.$$.fragment,J),q(R.$$.fragment,J),q(re.$$.fragment,J),q(Z.$$.fragment,J),q(N.$$.fragment,J),q(ue.$$.fragment,J),q(ce.$$.fragment,J),q(pe.$$.fragment,J),q(xe.$$.fragment,J),Ce=!1},d(J){J&&(r(a),r(t),r(s),r(p),r($),r(o),r(v),r(L),r(A),r(O),r(I),r(W),r(k),r(H),r(se),r(Q),r(ae),r(ee),r(fe),r(me),r(_e)),P(e,J),P(l,J),P(c,J),P(n,J),P(i,J),P(C,J),P(f,J),P(d,J),P(U,J),P(V,J),P(E,J),P(z,J),P(K,J),P(D,J),P(R,J),P(re,J),P(Z,J),P(N,J),P(ue,J),P(ce,J),P(pe,J),P(xe,J)}}}function Dr(m){let e,a;return e=new y({props:{$$slots:{default:[Ar]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,t){S(e,l,t),a=!0},p(l,[t]){const c={};t&1&&(c.$$scope={dirty:t,ctx:l}),e.$set(c)},i(l){a||(T(e.$$.fragment,l),a=!0)},o(l){q(e.$$.fragment,l),a=!1},d(l){P(e,l)}}}class Er extends be{constructor(e){super(),we(this,e,null,Dr,ge,{})}}function Ir(m){let e,a="Programmation Orientée Objet - CPE Lyon - 2026 - 3ICS",l,t,c,s="Lien vers les TP/TD",n,p,i,$=`- Lien de la présentation sur e-campus\r
		- Suivre depuis le projecteur\r
		- Montrer bouton d'aide\r
		- Overview (touche 'o')`;return{c(){e=g("h1"),l=X(a),t=_(),c=g("a"),c.textContent=s,n=g("br"),p=_(),i=g("aside"),i.textContent=$,this.h()},l(C){e=h(C,"H1",{class:!0});var o=le(e);l=Y(o,a),o.forEach(r),t=x(C),c=h(C,"A",{class:!0,href:!0,"data-svelte-h":!0}),b(c)!=="svelte-g1grt8"&&(c.textContent=s),n=h(C,"BR",{}),p=x(C),i=h(C,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-15aiq79"&&(i.textContent=$),this.h()},h(){w(e,"class","capitalize"),w(c,"class","print:hidden"),w(c,"href","#/exercices"),w(i,"class","notes")},m(C,o){u(C,e,o),G(e,l),u(C,t,o),u(C,c,o),u(C,n,o),u(C,p,o),u(C,i,o)},p:B,d(C){C&&(r(e),r(t),r(c),r(n),r(p),r(i))}}}function zr(m){let e,a="Présentation du module",l,t,c=`<div><ul><li><b>Changer votre manière de penser le code</b></li> <li>Passer du procédural à l’orienté objet</li> <li>Modéliser avant de coder</li> <li>Préparer la suite de votre formation</li></ul> <p class="note">Ce module est simple à valider.<br/>
				Il est <b>fondamental</b> pour la suite.</p></div>`,s,n,p=`Pas obligé de coder en OO, juste une manière de faire différente\r
		- C'est une méthode qui simplifie la modélisation\r
		- Assez largement utilisée`;return{c(){e=g("h2"),e.textContent=a,l=_(),t=g("div"),t.innerHTML=c,s=_(),n=g("aside"),n.textContent=p,this.h()},l(i){e=h(i,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-177x7c7"&&(e.textContent=a),l=x(i),t=h(i,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-og00uc"&&(t.innerHTML=c),s=x(i),n=h(i,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1nodaz6"&&(n.textContent=p),this.h()},h(){w(t,"class","two-columns"),w(n,"class","notes")},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),u(i,n,$)},p:B,d(i){i&&(r(e),r(l),r(t),r(s),r(n))}}}function Or(m){let e,a="Pourquoi vous pourriez décrocher",l,t,c,s,n,p,i,$,C,o,f,v,d,L,U,A,V,O,E,I,z,W,K,k,D,H,R=`Si vous avez l’impression de devenir moins bons,<br/>
		c’est que vous êtes en train d’apprendre.`,se,re,Q=`Au début ça semble plus simple que du C, vous avez pas à gérer les pointeurs, le langage est plus moderne<br/> 
	Mais très vite régression, notamment car il y a des règles à respecter que vous n&#39;aviez pas avant, en // en C vous pouvez faire n&#39;importe quoi et ça marche<br/>
	Puis vous apprenez à maitriser 
	Puis vous égalez votre précédent niveau, si vous sortez du module à ce niveau, vous n&#39;aurez rien appris de plus<br/>
	Restez motivés pour la suite, car après ça décolle vraiment<br/>`;return{c(){e=g("h2"),e.textContent=a,l=_(),t=$e("svg"),c=$e("line"),s=$e("line"),n=$e("text"),p=X("Temps / Expérience"),i=$e("text"),$=X(`Niveau réel en programmation\r
		`),C=$e("g"),o=$e("path"),f=$e("path"),v=$e("g"),d=$e("path"),L=$e("path"),U=$e("g"),A=$e("path"),V=$e("path"),O=$e("g"),E=$e("path"),I=$e("path"),z=$e("text"),W=X(`Procédural\r
			`),K=$e("text"),k=X("POO"),D=_(),H=g("p"),H.innerHTML=R,se=_(),re=g("aside"),re.innerHTML=Q,this.h()},l(Z){e=h(Z,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-1nk3rng"&&(e.textContent=a),l=x(Z),t=oe(Z,"svg",{viewBox:!0,width:!0,style:!0});var ae=le(t);c=oe(ae,"line",{x1:!0,y1:!0,x2:!0,y2:!0,stroke:!0,"stroke-width":!0}),le(c).forEach(r),s=oe(ae,"line",{x1:!0,y1:!0,x2:!0,y2:!0,stroke:!0,"stroke-width":!0}),le(s).forEach(r),n=oe(ae,"text",{x:!0,y:!0,"font-size":!0,fill:!0});var N=le(n);p=Y(N,"Temps / Expérience"),N.forEach(r),i=oe(ae,"text",{x:!0,y:!0,"font-size":!0,fill:!0,transform:!0});var ee=le(i);$=Y(ee,`Niveau réel en programmation\r
		`),ee.forEach(r),C=oe(ae,"g",{});var ue=le(C);o=oe(ue,"path",{d:!0,fill:!0,stroke:!0,"stroke-width":!0}),le(o).forEach(r),f=oe(ue,"path",{d:!0,fill:!0,stroke:!0,"stroke-width":!0}),le(f).forEach(r),ue.forEach(r),v=oe(ae,"g",{class:!0,"data-fragment-index":!0});var fe=le(v);d=oe(fe,"path",{d:!0,fill:!0,stroke:!0,"stroke-width":!0}),le(d).forEach(r),L=oe(fe,"path",{d:!0,fill:!0,stroke:!0,"stroke-width":!0}),le(L).forEach(r),fe.forEach(r),U=oe(ae,"g",{class:!0,"data-fragment-index":!0});var ce=le(U);A=oe(ce,"path",{d:!0,fill:!0,stroke:!0,"stroke-width":!0}),le(A).forEach(r),V=oe(ce,"path",{d:!0,fill:!0,stroke:!0,"stroke-width":!0}),le(V).forEach(r),ce.forEach(r),O=oe(ae,"g",{class:!0,"data-fragment-index":!0});var me=le(O);E=oe(me,"path",{d:!0,fill:!0,stroke:!0,"stroke-width":!0}),le(E).forEach(r),I=oe(me,"path",{d:!0,fill:!0,stroke:!0,"stroke-width":!0}),le(I).forEach(r),me.forEach(r),z=oe(ae,"text",{x:!0,y:!0,"font-size":!0,fill:!0});var pe=le(z);W=Y(pe,`Procédural\r
			`),pe.forEach(r),K=oe(ae,"text",{x:!0,y:!0,"font-size":!0,fill:!0});var _e=le(K);k=Y(_e,"POO"),_e.forEach(r),ae.forEach(r),D=x(Z),H=h(Z,"P",{class:!0,"data-fragment-index":!0,"data-svelte-h":!0}),b(H)!=="svelte-7tbjx6"&&(H.innerHTML=R),se=x(Z),re=h(Z,"ASIDE",{class:!0,"data-svelte-h":!0}),b(re)!=="svelte-1dtncl4"&&(re.innerHTML=Q),this.h()},h(){w(c,"x1","50"),w(c,"y1","250"),w(c,"x2","550"),w(c,"y2","250"),w(c,"stroke","#ccc"),w(c,"stroke-width","2"),w(s,"x1","50"),w(s,"y1","50"),w(s,"x2","50"),w(s,"y2","250"),w(s,"stroke","#ccc"),w(s,"stroke-width","2"),w(n,"x","260"),w(n,"y","270"),w(n,"font-size","14"),w(n,"fill","#ffffff"),w(i,"x","-70"),w(i,"y","185"),w(i,"font-size","14"),w(i,"fill","#ffffff"),w(i,"transform","rotate(-90 15,160)"),w(o,"d","M50 200 C120 185, 180 175, 220 170"),w(o,"fill","none"),w(o,"stroke","#3498db"),w(o,"stroke-width","4"),w(f,"d","M50 200 C120 205, 180 210, 220 190"),w(f,"fill","none"),w(f,"stroke","#f39c12"),w(f,"stroke-width","4"),w(d,"d","M220 170 C260 170, 300 170, 340 170"),w(d,"fill","none"),w(d,"stroke","#3498db"),w(d,"stroke-width","4"),w(L,"d","M220 190 C260 170, 300 155, 340 145"),w(L,"fill","none"),w(L,"stroke","#f39c12"),w(L,"stroke-width","4"),w(v,"class","fragment"),w(v,"data-fragment-index","0"),w(A,"d","M340 145 C380 140, 400 140, 420 140"),w(A,"fill","none"),w(A,"stroke","#f39c12"),w(A,"stroke-width","4"),w(V,"d","M340 170 C380 168, 400 165, 420 140"),w(V,"fill","none"),w(V,"stroke","#3498db"),w(V,"stroke-width","4"),w(U,"class","fragment"),w(U,"data-fragment-index","1"),w(E,"d","M420 140 C470 140, 510 140, 550 140"),w(E,"fill","none"),w(E,"stroke","#f39c12"),w(E,"stroke-width","4"),w(I,"d","M420 140 C470 120, 510 70, 550 50"),w(I,"fill","none"),w(I,"stroke","#3498db"),w(I,"stroke-width","4"),w(O,"class","fragment"),w(O,"data-fragment-index","2"),w(z,"x","60"),w(z,"y","80"),w(z,"font-size","0.5em"),w(z,"fill","#f39c12"),w(K,"x","60"),w(K,"y","100"),w(K,"font-size","0.5em"),w(K,"fill","#3498db"),w(t,"viewBox","0 0 600 300"),w(t,"width","100%"),ze(t,"margin-top","20px"),w(H,"class","note fragment"),w(H,"data-fragment-index","0"),w(re,"class","notes")},m(Z,ae){u(Z,e,ae),u(Z,l,ae),u(Z,t,ae),G(t,c),G(t,s),G(t,n),G(n,p),G(t,i),G(i,$),G(t,C),G(C,o),G(C,f),G(t,v),G(v,d),G(v,L),G(t,U),G(U,A),G(U,V),G(t,O),G(O,E),G(O,I),G(t,z),G(z,W),G(t,K),G(K,k),u(Z,D,ae),u(Z,H,ae),u(Z,se,ae),u(Z,re,ae)},p:B,d(Z){Z&&(r(e),r(l),r(t),r(D),r(H),r(se),r(re))}}}function Ur(m){let e,a="Déroulé",l,t,c="<li>CM en début de cours</li> <li>TD</li> <li>TP/Projet</li>";return{c(){e=g("h2"),e.textContent=a,l=_(),t=g("ol"),t.innerHTML=c},l(s){e=h(s,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-171i1ti"&&(e.textContent=a),l=x(s),t=h(s,"OL",{"data-svelte-h":!0}),b(t)!=="svelte-se5tp"&&(t.innerHTML=c)},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function Vr(m){let e,a="Modalités d’examen",l,t,c="<li>DS écrit <b>basé principalement sur les TD</b></li> <li>Projet en fin de module</li> <li>Contrôle continu sur la rigueur</li>",s,n,p="Ce qui est évalué, ce n’est pas le résultat.<br/> <b>C’est la démarche !</b>";return{c(){e=g("h2"),e.textContent=a,l=_(),t=g("ul"),t.innerHTML=c,s=_(),n=g("p"),n.innerHTML=p,this.h()},l(i){e=h(i,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-33cx1h"&&(e.textContent=a),l=x(i),t=h(i,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-r98nh3"&&(t.innerHTML=c),s=x(i),n=h(i,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-rtfqni"&&(n.innerHTML=p),this.h()},h(){w(n,"class","important")},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),u(i,n,$)},p:B,d(i){i&&(r(e),r(l),r(t),r(s),r(n))}}}function yr(m){let e,a="Découpage du module",l,t,c=`<svg width="1000" height="500" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" style="flex: 1;background:#fafafa;font-family:sans-serif"><line x1="80" y1="50" x2="80" y2="430" stroke="#333"></line><line x1="80" y1="430" x2="950" y2="430" stroke="#333"></line><g fill="#333" font-size="12"><text x="40" y="430">0h</text><text x="40" y="370">2h</text><text x="40" y="310">4h</text><text x="40" y="250">6h</text><text x="40" y="190">8h</text></g><g font-size="13"><rect x="780" y="60" width="15" height="15" fill="#E85D75"></rect><text x="800" y="73">CM (18h)</text><rect x="780" y="85" width="15" height="15" fill="#456990"></rect><text x="800" y="98">TD (12h)</text><rect x="780" y="110" width="15" height="15" fill="#F28F3B"></rect><text x="800" y="123">TP (14h)</text><rect x="780" y="135" width="15" height="15" fill="#F6BD60"></rect><text x="800" y="148">Projet (18h)</text></g><g font-size="11" text-anchor="middle"><g transform="translate(110,430)"><rect y="-120" width="40" height="120" fill="#E85D75"></rect><rect y="-180" width="40" height="60" fill="#456990"></rect><rect y="-240" width="40" height="60" fill="#F28F3B"></rect><text y="20" text-anchor="middle">04/02</text></g><g transform="translate(180,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-120" width="40" height="60" fill="#456990"></rect><text y="20">25/02</text></g><g transform="translate(250,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-120" width="40" height="60" fill="#456990"></rect><rect y="-180" width="40" height="60" fill="#F28F3B"></rect><text y="20">04/03</text></g><g transform="translate(320,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-120" width="40" height="60" fill="#456990"></rect><rect y="-180" width="40" height="60" fill="#F28F3B"></rect><text y="20">18/03</text></g><g transform="translate(390,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-120" width="40" height="60" fill="#456990"></rect><rect y="-180" width="40" height="60" fill="#F28F3B"></rect><text y="20">24/03</text></g><g transform="translate(460,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-120" width="40" height="60" fill="#456990"></rect><rect y="-180" width="40" height="60" fill="#F28F3B"></rect><text y="20">25/03</text></g><g transform="translate(530,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-180" width="40" height="120" fill="#F28F3B"></rect><text y="20">31/03</text></g><g transform="translate(600,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-180" width="40" height="120" fill="#F6BD60"></rect><text y="20">01/04</text></g><g transform="translate(670,430)"><rect y="-180" width="40" height="180" fill="#F6BD60"></rect><text y="20">07/04</text></g><g transform="translate(740,430)"><rect y="-240" width="40" height="240" fill="#F6BD60"></rect><text y="20">05/05</text></g></g></svg> <div style="flex: 1;"><ul><li><b>CM</b> <br/>
					Théorie et introduction des concepts.</li> <li><b>TD</b> <br/> <b class="font-bold text-orange-400">Sans IDE !</b></li> <li><b>TP</b> <br/>
					Guidés, mais il faut improviser, tester, sortir du cadre.</li> <li><b>Projet</b> <br/>
					Mise en situation professionnelle.</li></ul></div>`,s,n,p="Relire le support du CM ne vous suffira pas à réussir l'examen";return{c(){e=g("h2"),e.textContent=a,l=_(),t=g("div"),t.innerHTML=c,s=_(),n=g("p"),n.textContent=p,this.h()},l(i){e=h(i,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-g73up0"&&(e.textContent=a),l=x(i),t=h(i,"DIV",{style:!0,"data-svelte-h":!0}),b(t)!=="svelte-covgel"&&(t.innerHTML=c),s=x(i),n=h(i,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-15fh0qw"&&(n.textContent=p),this.h()},h(){ze(t,"display","flex"),ze(t,"gap","2rem"),ze(t,"align-items","center"),w(n,"class","font-bold text-orange-400 note")},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),u(i,n,$)},p:B,d(i){i&&(r(e),r(l),r(t),r(s),r(n))}}}function Br(m){let e,a="Mise en place des TDs/TPs",l,t,c="Les TD et TP sont à commit régulièrement sur votre dépôt git (voir démonstration)",s,n,p="Seul le projet est à réaliser en binôme";return{c(){e=g("h2"),e.textContent=a,l=_(),t=g("p"),t.textContent=c,s=_(),n=g("p"),n.textContent=p},l(i){e=h(i,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-1xm0e99"&&(e.textContent=a),l=x(i),t=h(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-6avelo"&&(t.textContent=c),s=x(i),n=h(i,"P",{"data-svelte-h":!0}),b(n)!=="svelte-1ufx4cd"&&(n.textContent=p)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),u(i,n,$)},p:B,d(i){i&&(r(e),r(l),r(t),r(s),r(n))}}}function Jr(m){let e,a,l,t,c,s,n,p,i,$,C,o;return e=new y({props:{$$slots:{default:[zr]},$$scope:{ctx:m}}}),l=new y({props:{$$slots:{default:[Or]},$$scope:{ctx:m}}}),c=new y({props:{$$slots:{default:[Ur]},$$scope:{ctx:m}}}),n=new y({props:{$$slots:{default:[Vr]},$$scope:{ctx:m}}}),i=new y({props:{$$slots:{default:[yr]},$$scope:{ctx:m}}}),C=new y({props:{$$slots:{default:[Br]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment),a=_(),j(l.$$.fragment),t=_(),j(c.$$.fragment),s=_(),j(n.$$.fragment),p=_(),j(i.$$.fragment),$=_(),j(C.$$.fragment)},l(f){M(e.$$.fragment,f),a=x(f),M(l.$$.fragment,f),t=x(f),M(c.$$.fragment,f),s=x(f),M(n.$$.fragment,f),p=x(f),M(i.$$.fragment,f),$=x(f),M(C.$$.fragment,f)},m(f,v){S(e,f,v),u(f,a,v),S(l,f,v),u(f,t,v),S(c,f,v),u(f,s,v),S(n,f,v),u(f,p,v),S(i,f,v),u(f,$,v),S(C,f,v),o=!0},p(f,v){const d={};v&1&&(d.$$scope={dirty:v,ctx:f}),e.$set(d);const L={};v&1&&(L.$$scope={dirty:v,ctx:f}),l.$set(L);const U={};v&1&&(U.$$scope={dirty:v,ctx:f}),c.$set(U);const A={};v&1&&(A.$$scope={dirty:v,ctx:f}),n.$set(A);const V={};v&1&&(V.$$scope={dirty:v,ctx:f}),i.$set(V);const O={};v&1&&(O.$$scope={dirty:v,ctx:f}),C.$set(O)},i(f){o||(T(e.$$.fragment,f),T(l.$$.fragment,f),T(c.$$.fragment,f),T(n.$$.fragment,f),T(i.$$.fragment,f),T(C.$$.fragment,f),o=!0)},o(f){q(e.$$.fragment,f),q(l.$$.fragment,f),q(c.$$.fragment,f),q(n.$$.fragment,f),q(i.$$.fragment,f),q(C.$$.fragment,f),o=!1},d(f){f&&(r(a),r(t),r(s),r(p),r($)),P(e,f),P(l,f),P(c,f),P(n,f),P(i,f),P(C,f)}}}function Fr(m){let e,a="Usage de l’IA dans ce module",l,t,c="L’IA n’est <b>pas autorisée</b> pendant le module",s,n,p="Les modalités d'évaluation sont pensées pour que l'IA ne vous apporte aucun avantage, voire vous desserve.";return{c(){e=g("h2"),e.textContent=a,l=_(),t=g("span"),t.innerHTML=c,s=_(),n=g("p"),n.textContent=p,this.h()},l(i){e=h(i,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-1gojwpb"&&(e.textContent=a),l=x(i),t=h(i,"SPAN",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-60ulen"&&(t.innerHTML=c),s=x(i),n=h(i,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1mxpust"&&(n.textContent=p),this.h()},h(){w(t,"class","font-bold text-[2em] underline "),w(n,"class","note")},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),u(i,n,$)},p:B,d(i){i&&(r(e),r(l),r(t),r(s),r(n))}}}function Nr(m){let e,a="Pourquoi l’IA pose problème à ce stade",l,t,c=`<li><b>1. La “dette cognitive”</b><br/>
			L’apprentissage repose sur la pratique, l’erreur et la métacognition.<br/>
			Déléguer ces étapes à l’IA court-circuite l’apprentissage :<br/>
			on obtient une réponse correcte, mais on ne progresse plus.</li> <li><b>2. Accélérateur pour les experts, béquille pour les débutants</b><br/>
			L’IA amplifie ceux qui maîtrisent déjà.<br/>
			Pour un débutant, elle empêche l’acquisition des bases.</li> <li><b>3. Même problème que les révolutions précédentes</b><br/>
			Comme la calculatrice ou Internet, l’IA n’est pas mauvaise en soi.<br/>
			C’est l’usage passif qui entraîne une perte de compétence.</li> <li><b>4. L’illusion de la facilité</b><br/>
			L’IA donne l’impression d’être plus rapide et plus efficace,<br/>
			mais masque le fait qu’on ne réfléchit plus aux étapes.</li>`,s,n,p="<p>Vidéo expliquant mieux que moi ces concepts</p>";return{c(){e=g("h2"),e.textContent=a,l=_(),t=g("ul"),t.innerHTML=c,s=_(),n=g("a"),n.innerHTML=p,this.h()},l(i){e=h(i,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-16y47ua"&&(e.textContent=a),l=x(i),t=h(i,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-1l2x6vn"&&(t.innerHTML=c),s=x(i),n=h(i,"A",{href:!0,target:!0,"data-svelte-h":!0}),b(n)!=="svelte-1r17639"&&(n.innerHTML=p),this.h()},h(){w(n,"href","https://youtu.be/4xq6bVbS-Pw?si=bhTuVdU7iN5ijJzg&t=653"),w(n,"target","_blank")},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),u(i,n,$)},p:B,d(i){i&&(r(e),r(l),r(t),r(s),r(n))}}}function Rr(m){let e,a="Constat côté entreprise",l,t,c="<li>Des profils juniors très à l’aise avec l’IA</li> <li>Mais en difficulté dès qu’il faut :</li> <ul><li>débugger un problème</li> <li>expliquer un choix technique</li> <li>adapter une solution existante</li></ul>",s,n,p=`Le problème n’est pas l’IA,<br/>
		mais son usage trop précoce et non maîtrisé.`;return{c(){e=g("h2"),e.textContent=a,l=_(),t=g("ul"),t.innerHTML=c,s=_(),n=g("p"),n.innerHTML=p,this.h()},l(i){e=h(i,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-qqrjer"&&(e.textContent=a),l=x(i),t=h(i,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-1qy983h"&&(t.innerHTML=c),s=x(i),n=h(i,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-ea4imn"&&(n.innerHTML=p),this.h()},h(){w(n,"class","note")},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),u(i,n,$)},p:B,d(i){i&&(r(e),r(l),r(t),r(s),r(n))}}}function Gr(m){let e,a="Utiliser l’IA intelligemment",l,t,c="<li>IA utilisée comme <b>tuteur</b>, pas comme générateur</li> <li>Pas de réponses directes</li> <li>Questions, feedback, progression guidée</li>",s,n,p=`Apprendre correctement avec l’IA<br/>
		produit de meilleurs résultats<br/>
		que l’utiliser sans méthode.`,i,$,C='<p class="note">Source : AI Tutoring Outperforms Active Learning</p>';return{c(){e=g("h2"),e.textContent=a,l=_(),t=g("ul"),t.innerHTML=c,s=_(),n=g("p"),n.innerHTML=p,i=_(),$=g("a"),$.innerHTML=C,this.h()},l(o){e=h(o,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-1nebpg"&&(e.textContent=a),l=x(o),t=h(o,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-1021b7j"&&(t.innerHTML=c),s=x(o),n=h(o,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1707jb5"&&(n.innerHTML=p),i=x(o),$=h(o,"A",{href:!0,"data-preview-link":!0,"data-svelte-h":!0}),b($)!=="svelte-1084wsu"&&($.innerHTML=C),this.h()},h(){w(n,"class","important"),w($,"href","https://www.nature.com/articles/s41598-025-97652-6.pdf"),w($,"data-preview-link","")},m(o,f){u(o,e,f),u(o,l,f),u(o,t,f),u(o,s,f),u(o,n,f),u(o,i,f),u(o,$,f)},p:B,d(o){o&&(r(e),r(l),r(t),r(s),r(n),r(i),r($))}}}function Qr(m){let e,a="Importance des TD et TP",l,t,c="<li>Les TD construisent le raisonnement</li> <li>Les TP ancrent les concepts par la pratique</li> <li>Ce travail est indispensable pour la suite</li>",s,n,p=`Sans cette phase sérieuse,<br/>
		l’IA n’apporte que peu de valeur.`;return{c(){e=g("h2"),e.textContent=a,l=_(),t=g("ul"),t.innerHTML=c,s=_(),n=g("p"),n.innerHTML=p,this.h()},l(i){e=h(i,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-1pqkdgp"&&(e.textContent=a),l=x(i),t=h(i,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-ispvyp"&&(t.innerHTML=c),s=x(i),n=h(i,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1bx3c35"&&(n.innerHTML=p),this.h()},h(){w(n,"class","note")},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),u(i,n,$)},p:B,d(i){i&&(r(e),r(l),r(t),r(s),r(n))}}}function Wr(m){let e,a="Phase projet",l,t,c="<li>Problème plus ouvert</li> <li>Mise en situation proche du monde professionnel</li> <li>Usage de l’IA <b>possible</b> et encadré</li>",s,n,p=`Des bases solides permettent<br/>
		d’utiliser l’IA pour faire des choses intéressantes.`;return{c(){e=g("h2"),e.textContent=a,l=_(),t=g("ul"),t.innerHTML=c,s=_(),n=g("p"),n.innerHTML=p,this.h()},l(i){e=h(i,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-1u8tpjh"&&(e.textContent=a),l=x(i),t=h(i,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-11cd9z9"&&(t.innerHTML=c),s=x(i),n=h(i,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1xdvnnz"&&(n.innerHTML=p),this.h()},h(){w(n,"class","important")},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),u(i,n,$)},p:B,d(i){i&&(r(e),r(l),r(t),r(s),r(n))}}}function Kr(m){let e,a,l,t,c,s,n,p,i,$,C,o;return e=new y({props:{$$slots:{default:[Fr]},$$scope:{ctx:m}}}),l=new y({props:{$$slots:{default:[Nr]},$$scope:{ctx:m}}}),c=new y({props:{$$slots:{default:[Rr]},$$scope:{ctx:m}}}),n=new y({props:{$$slots:{default:[Gr]},$$scope:{ctx:m}}}),i=new y({props:{$$slots:{default:[Qr]},$$scope:{ctx:m}}}),C=new y({props:{$$slots:{default:[Wr]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment),a=_(),j(l.$$.fragment),t=_(),j(c.$$.fragment),s=_(),j(n.$$.fragment),p=_(),j(i.$$.fragment),$=_(),j(C.$$.fragment)},l(f){M(e.$$.fragment,f),a=x(f),M(l.$$.fragment,f),t=x(f),M(c.$$.fragment,f),s=x(f),M(n.$$.fragment,f),p=x(f),M(i.$$.fragment,f),$=x(f),M(C.$$.fragment,f)},m(f,v){S(e,f,v),u(f,a,v),S(l,f,v),u(f,t,v),S(c,f,v),u(f,s,v),S(n,f,v),u(f,p,v),S(i,f,v),u(f,$,v),S(C,f,v),o=!0},p(f,v){const d={};v&1&&(d.$$scope={dirty:v,ctx:f}),e.$set(d);const L={};v&1&&(L.$$scope={dirty:v,ctx:f}),l.$set(L);const U={};v&1&&(U.$$scope={dirty:v,ctx:f}),c.$set(U);const A={};v&1&&(A.$$scope={dirty:v,ctx:f}),n.$set(A);const V={};v&1&&(V.$$scope={dirty:v,ctx:f}),i.$set(V);const O={};v&1&&(O.$$scope={dirty:v,ctx:f}),C.$set(O)},i(f){o||(T(e.$$.fragment,f),T(l.$$.fragment,f),T(c.$$.fragment,f),T(n.$$.fragment,f),T(i.$$.fragment,f),T(C.$$.fragment,f),o=!0)},o(f){q(e.$$.fragment,f),q(l.$$.fragment,f),q(c.$$.fragment,f),q(n.$$.fragment,f),q(i.$$.fragment,f),q(C.$$.fragment,f),o=!1},d(f){f&&(r(a),r(t),r(s),r(p),r($)),P(e,f),P(l,f),P(c,f),P(n,f),P(i,f),P(C,f)}}}function Zr(m){let e,a="Les concepts de la POO",l,t,c="<li>Généralités</li> <li>L&#39;héritage</li> <li>La composition</li> <li>Les interfaces</li> <li>L&#39;encapsulation</li> <li>Le polymorphisme</li>";return{c(){e=g("h3"),e.textContent=a,l=_(),t=g("ol"),t.innerHTML=c},l(s){e=h(s,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1thzgzl"&&(e.textContent=a),l=x(s),t=h(s,"OL",{"data-svelte-h":!0}),b(t)!=="svelte-136at1n"&&(t.innerHTML=c)},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function Yr(m){let e,a="Séance 2";return{c(){e=g("h3"),e.textContent=a},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-h3jurd"&&(e.textContent=a)},m(l,t){u(l,e,t)},p:B,d(l){l&&r(e)}}}function Xr(m){let e,a="Quelle est la différence entre une classe mère et une classe fille ?",l,t,c=`Une classe mère est une classe dont les propriétés et méthodes peuvent être héritées par une
			classe fille. <br/>
			Une classe fille est une classe qui hérite des propriétés et méthodes d&#39;une classe mère.
			<br/> <span class="font-bold text-orange-400">D&#39;une manière générale on doit pouvoir dire &quot;Un chien est un animal&quot; ou &quot;Un bateau est un
				véhicule&quot; ; Animaux et véhicules sont des classes mères. Chien et bateau sont des classes
				filles.</span>`;return{c(){e=g("h2"),e.textContent=a,l=_(),t=g("div"),t.innerHTML=c,this.h()},l(s){e=h(s,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-1vjx2bc"&&(e.textContent=a),l=x(s),t=h(s,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1obzin6"&&(t.innerHTML=c),this.h()},h(){w(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function ea(m){let e,a="Une classe peut-elle hériter de plusieurs classes ?",l,t,c=`Non, en Java une classe ne peut hériter que d'une seule classe. Cependant, elle peut\r
			implémenter plusieurs interfaces.`;return{c(){e=g("h2"),e.textContent=a,l=_(),t=g("div"),t.textContent=c,this.h()},l(s){e=h(s,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-7y0j9h"&&(e.textContent=a),l=x(s),t=h(s,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1g53i9w"&&(t.textContent=c),this.h()},h(){w(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function ta(m){let e,a="Qu'est ce qu'une classe abstraite ?",l,t,c=`Une classe abstraite est une classe qui ne peut pas être instanciée et qui peut contenir des
			méthodes abstraites, c&#39;est-à-dire des méthodes sans implémentation. <br/> <span class="font-bold text-orange-400">Généralement, on utilise une classe abstraite pour représenter un concept général qui ne
				peut être instancié directement.</span>`;return{c(){e=g("h2"),e.textContent=a,l=_(),t=g("div"),t.innerHTML=c,this.h()},l(s){e=h(s,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-1g8priv"&&(e.textContent=a),l=x(s),t=h(s,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-18yooat"&&(t.innerHTML=c),this.h()},h(){w(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function la(m){let e=`
				class Animal {
					void crier(){
						print("Je suis un animal");
					}
				}
				class Chien extends Animal {
					@Override
					void crier(){
						print("Wouaf wouaf");
					}
				}
				`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function sa(m){let e,a="Comment redéfinir une méthode dans une classe fille ?",l,t,c,s,n;return s=new ie({props:{$$slots:{default:[la]},$$scope:{ctx:m}}}),{c(){e=g("h2"),e.textContent=a,l=_(),t=g("div"),c=X(`Pour redéfinir une méthode dans une classe fille, on utilise le mot-clé @Override au-dessus de\r
			la méthode redéfinie.\r
			`),j(s.$$.fragment),this.h()},l(p){e=h(p,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-ihc9m7"&&(e.textContent=a),l=x(p),t=h(p,"DIV",{class:!0});var i=le(t);c=Y(i,`Pour redéfinir une méthode dans une classe fille, on utilise le mot-clé @Override au-dessus de\r
			la méthode redéfinie.\r
			`),M(s.$$.fragment,i),i.forEach(r),this.h()},h(){w(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(p,i){u(p,e,i),u(p,l,i),u(p,t,i),G(t,c),S(s,t,null),n=!0},p(p,i){const $={};i&1&&($.$$scope={dirty:i,ctx:p}),s.$set($)},i(p){n||(T(s.$$.fragment,p),n=!0)},o(p){q(s.$$.fragment,p),n=!1},d(p){p&&(r(e),r(l),r(t)),P(s)}}}function na(m){let e,a="Qu'est-ce que l'encapsulation ? Pourquoi est-elle importante ?",l,t,c=`L&#39;encapsulation est un concept de la POO qui consiste à cacher les détails internes d&#39;une
			classe et à ne fournir qu&#39;une interface publique pour interagir avec cette classe. <br/> <span class="font-bold text-orange-400">Elle permet de protéger les données et de contrôler leur accès.</span>
			Par exemple, si l&#39;on a un attribut <code>taille</code> dans une classe <code>Personne</code>,
			on ne veut pas que la taille soit négative. On peut donc contrôler l&#39;accès à cet attribut en
			le déclarant privé et en fournissant des méthodes publiques pour y accéder et le modifier.`;return{c(){e=g("h2"),e.textContent=a,l=_(),t=g("div"),t.innerHTML=c,this.h()},l(s){e=h(s,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-xg99l8"&&(e.textContent=a),l=x(s),t=h(s,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-10lcfdv"&&(t.innerHTML=c),this.h()},h(){w(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function ia(m){let e=`
				class Personne {
					private String nom;

					public String getNom() {
						return nom;
					}

					public void setNom(String nom) {
						this.nom = nom;
					}				
				}
				`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function ra(m){let e,a="Comment implémenter l'encapsulation en Java ?",l,t,c,s,n="private",p,i,$="public",C,o,f="protected",v,d,L,U,A,V,O;return V=new ie({props:{$$slots:{default:[ia]},$$scope:{ctx:m}}}),{c(){e=g("h2"),e.textContent=a,l=_(),t=g("div"),c=X("Pour implémenter l'encapsulation en Java, on utilise des modificateurs d'accès comme "),s=g("code"),s.textContent=n,p=X(", "),i=g("code"),i.textContent=$,C=X(", et "),o=g("code"),o.textContent=f,v=X(". "),d=g("br"),L=X(`\r
			Puis, on utilise des méthodes publiques, appelées accesseurs et mutateurs, pour accéder et modifier\r
			les attributs privés. `),U=g("br"),A=_(),j(V.$$.fragment),this.h()},l(E){e=h(E,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-3xw39a"&&(e.textContent=a),l=x(E),t=h(E,"DIV",{class:!0});var I=le(t);c=Y(I,"Pour implémenter l'encapsulation en Java, on utilise des modificateurs d'accès comme "),s=h(I,"CODE",{"data-svelte-h":!0}),b(s)!=="svelte-1f3qn4i"&&(s.textContent=n),p=Y(I,", "),i=h(I,"CODE",{"data-svelte-h":!0}),b(i)!=="svelte-1bnzrax"&&(i.textContent=$),C=Y(I,", et "),o=h(I,"CODE",{"data-svelte-h":!0}),b(o)!=="svelte-cawnbs"&&(o.textContent=f),v=Y(I,". "),d=h(I,"BR",{}),L=Y(I,`\r
			Puis, on utilise des méthodes publiques, appelées accesseurs et mutateurs, pour accéder et modifier\r
			les attributs privés. `),U=h(I,"BR",{}),A=x(I),M(V.$$.fragment,I),I.forEach(r),this.h()},h(){w(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(E,I){u(E,e,I),u(E,l,I),u(E,t,I),G(t,c),G(t,s),G(t,p),G(t,i),G(t,C),G(t,o),G(t,v),G(t,d),G(t,L),G(t,U),G(t,A),S(V,t,null),O=!0},p(E,I){const z={};I&1&&(z.$$scope={dirty:I,ctx:E}),V.$set(z)},i(E){O||(T(V.$$.fragment,E),O=!0)},o(E){q(V.$$.fragment,E),O=!1},d(E){E&&(r(e),r(l),r(t)),P(V)}}}function aa(m){let e,a="Qu'est-ce qu'une interface en Java ?",l,t,c=`Une interface est un type de référence en Java qui ne contient que des méthodes sans
			implémentation. <br/> <span class="font-bold text-orange-400">Elle permet de définir un contrat que les classes doivent respecter.</span>`;return{c(){e=g("h2"),e.textContent=a,l=_(),t=g("div"),t.innerHTML=c,this.h()},l(s){e=h(s,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-qhrkb2"&&(e.textContent=a),l=x(s),t=h(s,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1g1gl0r"&&(t.innerHTML=c),this.h()},h(){w(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function ua(m){let e=`
				public interface ArticleLouable {
					float reserver(Date from, Date to);
					float rendre(int penalite);
				}

				public class SiegeAuto implements ArticleLouable {
					@Override
					public float reserver(Date from, Date to) {
						// ...
					}

					@Override
					public float rendre(int penalite) {
						// ...
					}
				}
				`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function oa(m){let e,a="Comment implémenter une interface en Java ?",l,t,c,s,n="implements",p,i,$,C,o;return C=new ie({props:{$$slots:{default:[ua]},$$scope:{ctx:m}}}),{c(){e=g("h2"),e.textContent=a,l=_(),t=g("div"),c=X("Pour implémenter une interface en Java, une classe doit utiliser le mot-clé "),s=g("code"),s.textContent=n,p=X(`\r
			et fournir une implémentation pour toutes les méthodes de l'interface. `),i=g("br"),$=_(),j(C.$$.fragment),this.h()},l(f){e=h(f,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-p64hds"&&(e.textContent=a),l=x(f),t=h(f,"DIV",{class:!0});var v=le(t);c=Y(v,"Pour implémenter une interface en Java, une classe doit utiliser le mot-clé "),s=h(v,"CODE",{"data-svelte-h":!0}),b(s)!=="svelte-1ljpoqf"&&(s.textContent=n),p=Y(v,`\r
			et fournir une implémentation pour toutes les méthodes de l'interface. `),i=h(v,"BR",{}),$=x(v),M(C.$$.fragment,v),v.forEach(r),this.h()},h(){w(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(f,v){u(f,e,v),u(f,l,v),u(f,t,v),G(t,c),G(t,s),G(t,p),G(t,i),G(t,$),S(C,t,null),o=!0},p(f,v){const d={};v&1&&(d.$$scope={dirty:v,ctx:f}),C.$set(d)},i(f){o||(T(C.$$.fragment,f),o=!0)},o(f){q(C.$$.fragment,f),o=!1},d(f){f&&(r(e),r(l),r(t)),P(C)}}}function $a(m){let e,a="Quelle est la différence entre une classe abstraite et une interface ?",l,t,c=`Une classe abstraite peut contenir des méthodes avec une implémentation, tandis qu&#39;une
			interface ne contient que des méthodes abstraites. <br/> <span class="font-bold text-orange-400">Une classe peut hériter d&#39;une seule classe abstraite mais peut implémenter plusieurs
				interfaces.</span>`;return{c(){e=g("h2"),e.textContent=a,l=_(),t=g("div"),t.innerHTML=c,this.h()},l(s){e=h(s,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-sppbab"&&(e.textContent=a),l=x(s),t=h(s,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1htd280"&&(t.innerHTML=c),this.h()},h(){w(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function fa(m){let e,a="Commet choisir entre une classe abstraite et une interface ?",l,t,c=`Pour choisir entre une classe abstraite et une interface, il faut se poser la question de la
			relation entre les classes. <br/>
			Si la relation est de type &quot;est un&quot;, alors une classe abstraite est plus appropriée. <br/>
			Si la relation est de type &quot;peut faire&quot;, alors une interface est plus appropriée. <br/>
			Par exemple, un Avion et un Oiseau sont tous deux des objets qui peuvent voler, mais ils ne partagent
			pas nécessairement une relation de type &quot;est un&quot;. <br/>
			Dans ce cas, il est plus approprié d&#39;utiliser une interface <code>IVolant</code>.`;return{c(){e=g("h2"),e.textContent=a,l=_(),t=g("div"),t.innerHTML=c,this.h()},l(s){e=h(s,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-15vllnj"&&(e.textContent=a),l=x(s),t=h(s,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-19rffgv"&&(t.innerHTML=c),this.h()},h(){w(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function ca(m){let e=`
				interface Volant {
					void voler();
				}

				interface Nageur {
					void nager();
				}

				class Canard implements Volant, Nageur {
						// ...
						// ...			
				} 
				`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function pa(m){let e,a="Comment utiliser les interfaces pour simuler l'héritage multiple ?",l,t,c,s,n,p,i;return p=new ie({props:{$$slots:{default:[ca]},$$scope:{ctx:m}}}),{c(){e=g("h2"),e.textContent=a,l=_(),t=g("div"),c=X(`En Java, une classe ne peut hériter que d'une seule classe, mais elle peut implémenter\r
			plusieurs interfaces. Cela permet de simuler l'héritage multiple en définissant plusieurs\r
			interfaces que la classe doit implémenter. `),s=g("br"),n=_(),j(p.$$.fragment),this.h()},l($){e=h($,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-15pjdo"&&(e.textContent=a),l=x($),t=h($,"DIV",{class:!0});var C=le(t);c=Y(C,`En Java, une classe ne peut hériter que d'une seule classe, mais elle peut implémenter\r
			plusieurs interfaces. Cela permet de simuler l'héritage multiple en définissant plusieurs\r
			interfaces que la classe doit implémenter. `),s=h(C,"BR",{}),n=x(C),M(p.$$.fragment,C),C.forEach(r),this.h()},h(){w(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m($,C){u($,e,C),u($,l,C),u($,t,C),G(t,c),G(t,s),G(t,n),S(p,t,null),i=!0},p($,C){const o={};C&1&&(o.$$scope={dirty:C,ctx:$}),p.$set(o)},i($){i||(T(p.$$.fragment,$),i=!0)},o($){q(p.$$.fragment,$),i=!1},d($){$&&(r(e),r(l),r(t)),P(p)}}}function ma(m){let e,a="Qu'est-ce que la composition en POO ?",l,t,c=`La composition est un concept de la POO qui permet de créer des objets complexes en combinant
			des objets plus simples. <br/> <span class="font-bold text-orange-400">Elle consiste à avoir des instances de classes en tant qu&#39;attributs d&#39;une autre classe.</span>`;return{c(){e=g("h2"),e.textContent=a,l=_(),t=g("div"),t.innerHTML=c,this.h()},l(s){e=h(s,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-y5qgqo"&&(e.textContent=a),l=x(s),t=h(s,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1cj1jzg"&&(t.innerHTML=c),this.h()},h(){w(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function da(m){let e=`
				class Moteur {
					void demarrer() {
						// ...
					}
				}

				class Voiture {
					private Moteur moteur;

					Voiture() {
						this.moteur = new Moteur();
					}

					void conduire() {
						moteur.demarrer();
						// ...
					}
				}
				`,a;return{c(){a=X(e)},l(l){a=Y(l,e)},m(l,t){u(l,a,t)},p:B,d(l){l&&r(a)}}}function va(m){let e,a="Donnez un exemple de composition en Java.",l,t,c,s;return c=new ie({props:{$$slots:{default:[da]},$$scope:{ctx:m}}}),{c(){e=g("h2"),e.textContent=a,l=_(),t=g("div"),j(c.$$.fragment),this.h()},l(n){e=h(n,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-9ezb79"&&(e.textContent=a),l=x(n),t=h(n,"DIV",{class:!0});var p=le(t);M(c.$$.fragment,p),p.forEach(r),this.h()},h(){w(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(n,p){u(n,e,p),u(n,l,p),u(n,t,p),S(c,t,null),s=!0},p(n,p){const i={};p&1&&(i.$$scope={dirty:p,ctx:n}),c.$set(i)},i(n){s||(T(c.$$.fragment,n),s=!0)},o(n){q(c.$$.fragment,n),s=!1},d(n){n&&(r(e),r(l),r(t)),P(c)}}}function xa(m){let e,a="Qu'est-ce qu'une interface marqueur ?",l,t,c=`Une interface marqueur est une interface sans méthode, utilisée pour étiqueter une classe. <br/> <span class="font-bold text-orange-400">On découvrira plus tard que les annotations sont une alternative plus puissante aux
				interfaces marqueurs.</span>`;return{c(){e=g("h2"),e.textContent=a,l=_(),t=g("div"),t.innerHTML=c,this.h()},l(s){e=h(s,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-9are5n"&&(e.textContent=a),l=x(s),t=h(s,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1qoywxi"&&(t.innerHTML=c),this.h()},h(){w(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function _a(m){let e,a="Révisions",l,t,c,s,n,p,i,$,C,o,f,v,d,L,U,A,V,O,E,I,z,W,K,k,D,H,R,se,re;return t=new y({props:{$$slots:{default:[Xr]},$$scope:{ctx:m}}}),s=new y({props:{$$slots:{default:[ea]},$$scope:{ctx:m}}}),p=new y({props:{$$slots:{default:[ta]},$$scope:{ctx:m}}}),$=new y({props:{$$slots:{default:[sa]},$$scope:{ctx:m}}}),o=new y({props:{$$slots:{default:[na]},$$scope:{ctx:m}}}),v=new y({props:{$$slots:{default:[ra]},$$scope:{ctx:m}}}),L=new y({props:{$$slots:{default:[aa]},$$scope:{ctx:m}}}),A=new y({props:{$$slots:{default:[oa]},$$scope:{ctx:m}}}),O=new y({props:{$$slots:{default:[$a]},$$scope:{ctx:m}}}),I=new y({props:{$$slots:{default:[fa]},$$scope:{ctx:m}}}),W=new y({props:{$$slots:{default:[pa]},$$scope:{ctx:m}}}),k=new y({props:{$$slots:{default:[ma]},$$scope:{ctx:m}}}),H=new y({props:{$$slots:{default:[va]},$$scope:{ctx:m}}}),se=new y({props:{$$slots:{default:[xa]},$$scope:{ctx:m}}}),{c(){e=g("h3"),e.textContent=a,l=_(),j(t.$$.fragment),c=_(),j(s.$$.fragment),n=_(),j(p.$$.fragment),i=_(),j($.$$.fragment),C=_(),j(o.$$.fragment),f=_(),j(v.$$.fragment),d=_(),j(L.$$.fragment),U=_(),j(A.$$.fragment),V=_(),j(O.$$.fragment),E=_(),j(I.$$.fragment),z=_(),j(W.$$.fragment),K=_(),j(k.$$.fragment),D=_(),j(H.$$.fragment),R=_(),j(se.$$.fragment)},l(Q){e=h(Q,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-zmditw"&&(e.textContent=a),l=x(Q),M(t.$$.fragment,Q),c=x(Q),M(s.$$.fragment,Q),n=x(Q),M(p.$$.fragment,Q),i=x(Q),M($.$$.fragment,Q),C=x(Q),M(o.$$.fragment,Q),f=x(Q),M(v.$$.fragment,Q),d=x(Q),M(L.$$.fragment,Q),U=x(Q),M(A.$$.fragment,Q),V=x(Q),M(O.$$.fragment,Q),E=x(Q),M(I.$$.fragment,Q),z=x(Q),M(W.$$.fragment,Q),K=x(Q),M(k.$$.fragment,Q),D=x(Q),M(H.$$.fragment,Q),R=x(Q),M(se.$$.fragment,Q)},m(Q,Z){u(Q,e,Z),u(Q,l,Z),S(t,Q,Z),u(Q,c,Z),S(s,Q,Z),u(Q,n,Z),S(p,Q,Z),u(Q,i,Z),S($,Q,Z),u(Q,C,Z),S(o,Q,Z),u(Q,f,Z),S(v,Q,Z),u(Q,d,Z),S(L,Q,Z),u(Q,U,Z),S(A,Q,Z),u(Q,V,Z),S(O,Q,Z),u(Q,E,Z),S(I,Q,Z),u(Q,z,Z),S(W,Q,Z),u(Q,K,Z),S(k,Q,Z),u(Q,D,Z),S(H,Q,Z),u(Q,R,Z),S(se,Q,Z),re=!0},p(Q,Z){const ae={};Z&1&&(ae.$$scope={dirty:Z,ctx:Q}),t.$set(ae);const N={};Z&1&&(N.$$scope={dirty:Z,ctx:Q}),s.$set(N);const ee={};Z&1&&(ee.$$scope={dirty:Z,ctx:Q}),p.$set(ee);const ue={};Z&1&&(ue.$$scope={dirty:Z,ctx:Q}),$.$set(ue);const fe={};Z&1&&(fe.$$scope={dirty:Z,ctx:Q}),o.$set(fe);const ce={};Z&1&&(ce.$$scope={dirty:Z,ctx:Q}),v.$set(ce);const me={};Z&1&&(me.$$scope={dirty:Z,ctx:Q}),L.$set(me);const pe={};Z&1&&(pe.$$scope={dirty:Z,ctx:Q}),A.$set(pe);const _e={};Z&1&&(_e.$$scope={dirty:Z,ctx:Q}),O.$set(_e);const xe={};Z&1&&(xe.$$scope={dirty:Z,ctx:Q}),I.$set(xe);const Ce={};Z&1&&(Ce.$$scope={dirty:Z,ctx:Q}),W.$set(Ce);const J={};Z&1&&(J.$$scope={dirty:Z,ctx:Q}),k.$set(J);const te={};Z&1&&(te.$$scope={dirty:Z,ctx:Q}),H.$set(te);const de={};Z&1&&(de.$$scope={dirty:Z,ctx:Q}),se.$set(de)},i(Q){re||(T(t.$$.fragment,Q),T(s.$$.fragment,Q),T(p.$$.fragment,Q),T($.$$.fragment,Q),T(o.$$.fragment,Q),T(v.$$.fragment,Q),T(L.$$.fragment,Q),T(A.$$.fragment,Q),T(O.$$.fragment,Q),T(I.$$.fragment,Q),T(W.$$.fragment,Q),T(k.$$.fragment,Q),T(H.$$.fragment,Q),T(se.$$.fragment,Q),re=!0)},o(Q){q(t.$$.fragment,Q),q(s.$$.fragment,Q),q(p.$$.fragment,Q),q($.$$.fragment,Q),q(o.$$.fragment,Q),q(v.$$.fragment,Q),q(L.$$.fragment,Q),q(A.$$.fragment,Q),q(O.$$.fragment,Q),q(I.$$.fragment,Q),q(W.$$.fragment,Q),q(k.$$.fragment,Q),q(H.$$.fragment,Q),q(se.$$.fragment,Q),re=!1},d(Q){Q&&(r(e),r(l),r(c),r(n),r(i),r(C),r(f),r(d),r(U),r(V),r(E),r(z),r(K),r(D),r(R)),P(t,Q),P(s,Q),P(p,Q),P($,Q),P(o,Q),P(v,Q),P(L,Q),P(A,Q),P(O,Q),P(I,Q),P(W,Q),P(k,Q),P(H,Q),P(se,Q)}}}function Ca(m){let e,a="Séance 3";return{c(){e=g("h3"),e.textContent=a},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1ycjlta"&&(e.textContent=a)},m(l,t){u(l,e,t)},p:B,d(l){l&&r(e)}}}function ha(m){let e,a="Nous avons vu les concepts de base de la POO en Java :",l,t,c="<li>L&#39;héritage</li> <li>La composition</li> <li>Les interfaces</li> <li>L&#39;encapsulation</li> <li>Le polymorphisme</li>",s,n,p="Assurez vous de savoir définir chacun de ce concepts et de savoir les différencier.";return{c(){e=g("p"),e.textContent=a,l=_(),t=g("ul"),t.innerHTML=c,s=_(),n=g("p"),n.textContent=p},l(i){e=h(i,"P",{"data-svelte-h":!0}),b(e)!=="svelte-amskfb"&&(e.textContent=a),l=x(i),t=h(i,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-1ddn4m5"&&(t.innerHTML=c),s=x(i),n=h(i,"P",{"data-svelte-h":!0}),b(n)!=="svelte-frup46"&&(n.textContent=p)},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),u(i,n,$)},p:B,d(i){i&&(r(e),r(l),r(t),r(s),r(n))}}}function ga(m){let e,a='En complément, nous avons abordé des notions "avancées" :',l,t,c="<li>La généricité</li> <li>Les collections</li> <li>Les lambdas / programmation fonctionnelle</li> <li>Les classes et méthodes statiques</li>";return{c(){e=g("p"),e.textContent=a,l=_(),t=g("ul"),t.innerHTML=c},l(s){e=h(s,"P",{"data-svelte-h":!0}),b(e)!=="svelte-18k7ohe"&&(e.textContent=a),l=x(s),t=h(s,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-1qhua8d"&&(t.innerHTML=c)},m(s,n){u(s,e,n),u(s,l,n),u(s,t,n)},p:B,d(s){s&&(r(e),r(l),r(t))}}}function ba(m){let e,a="Rappels",l,t,c,s,n;return t=new y({props:{$$slots:{default:[ha]},$$scope:{ctx:m}}}),s=new y({props:{$$slots:{default:[ga]},$$scope:{ctx:m}}}),{c(){e=g("h2"),e.textContent=a,l=_(),j(t.$$.fragment),c=_(),j(s.$$.fragment)},l(p){e=h(p,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-dv36h9"&&(e.textContent=a),l=x(p),M(t.$$.fragment,p),c=x(p),M(s.$$.fragment,p)},m(p,i){u(p,e,i),u(p,l,i),S(t,p,i),u(p,c,i),S(s,p,i),n=!0},p(p,i){const $={};i&1&&($.$$scope={dirty:i,ctx:p}),t.$set($);const C={};i&1&&(C.$$scope={dirty:i,ctx:p}),s.$set(C)},i(p){n||(T(t.$$.fragment,p),T(s.$$.fragment,p),n=!0)},o(p){q(t.$$.fragment,p),q(s.$$.fragment,p),n=!1},d(p){p&&(r(e),r(l),r(c)),P(t,p),P(s,p)}}}function wa(m){let e,a="Fin du cours";return{c(){e=g("h1"),e.textContent=a},l(l){e=h(l,"H1",{"data-svelte-h":!0}),b(e)!=="svelte-qfllbu"&&(e.textContent=a)},m(l,t){u(l,e,t)},p:B,d(l){l&&r(e)}}}function La(m){let e,a="Merci de formuler un feedback sur le cours :",l,t,c="Votre retour aide à améliorer le contenu, le rythme et les exercices. Indiquez ce qui était clair, ce qui mérite d'être approfondi et vos suggestions.",s,n,p="Repondre au questionnaire";return{c(){e=g("p"),e.textContent=a,l=_(),t=g("p"),t.textContent=c,s=_(),n=g("a"),n.textContent=p,this.h()},l(i){e=h(i,"P",{"data-svelte-h":!0}),b(e)!=="svelte-16u3j20"&&(e.textContent=a),l=x(i),t=h(i,"P",{"data-svelte-h":!0}),b(t)!=="svelte-v57zn6"&&(t.textContent=c),s=x(i),n=h(i,"A",{href:!0,title:!0,"data-preview-link":!0,"data-svelte-h":!0}),b(n)!=="svelte-no72tj"&&(n.textContent=p),this.h()},h(){w(n,"href","https://forms.gle/rajvogoRgbi4vWog7"),w(n,"title","Feedback"),w(n,"data-preview-link","")},m(i,$){u(i,e,$),u(i,l,$),u(i,t,$),u(i,s,$),u(i,n,$)},p:B,d(i){i&&(r(e),r(l),r(t),r(s),r(n))}}}function Ha(m){let e,a="Annexes";return{c(){e=g("h1"),e.textContent=a},l(l){e=h(l,"H1",{"data-svelte-h":!0}),b(e)!=="svelte-lwu4ok"&&(e.textContent=a)},m(l,t){u(l,e,t)},p:B,d(l){l&&r(e)}}}function Pa(m){let e,a,l,t;return e=new y({props:{$$slots:{default:[Ha]},$$scope:{ctx:m}}}),l=new nn({}),{c(){j(e.$$.fragment),a=_(),j(l.$$.fragment)},l(c){M(e.$$.fragment,c),a=x(c),M(l.$$.fragment,c)},m(c,s){S(e,c,s),u(c,a,s),S(l,c,s),t=!0},p(c,s){const n={};s&1&&(n.$$scope={dirty:s,ctx:c}),e.$set(n)},i(c){t||(T(e.$$.fragment,c),T(l.$$.fragment,c),t=!0)},o(c){q(e.$$.fragment,c),q(l.$$.fragment,c),t=!1},d(c){c&&r(a),P(e,c),P(l,c)}}}function qa(m){let e,a,l,t,c,s,n,p,i,$,C,o,f,v,d,L,U,A,V,O,E,I,z,W,K,k,D,H,R,se,re,Q,Z,ae,N,ee,ue,fe,ce,me,pe,_e,xe,Ce,J,te,de,ve,he,Le;return e=new y({props:{animate:!0,$$slots:{default:[Ir]},$$scope:{ctx:m}}}),l=new y({props:{data_background_color:"#00353F",$$slots:{default:[Jr]},$$scope:{ctx:m}}}),c=new y({props:{data_background_color:"#511C29",$$slots:{default:[Kr]},$$scope:{ctx:m}}}),n=new Gt({}),i=new y({props:{$$slots:{default:[Zr]},$$scope:{ctx:m}}}),C=new fs({}),f=new wt({}),d=new al({}),U=new kl({}),V=new es({}),E=new y({props:{id:"seance2",$$slots:{default:[Yr]},$$scope:{ctx:m}}}),z=new y({props:{data_background_gradient:"linear-gradient(rgb(40 59 149), rgb(129 23 195 / 41%))",$$slots:{default:[_a]},$$scope:{ctx:m}}}),K=new gn({}),D=new An({}),R=new ti({}),re=new yi({}),Z=new Pi({}),N=new y({props:{id:"seance3",$$slots:{default:[Ca]},$$scope:{ctx:m}}}),ue=new y({props:{$$slots:{default:[ba]},$$scope:{ctx:m}}}),ce=new Er({}),pe=new rr({}),xe=new y({props:{$$slots:{default:[wa]},$$scope:{ctx:m}}}),J=new Ps({}),de=new y({props:{id:"feedback",$$slots:{default:[La]},$$scope:{ctx:m}}}),he=new y({props:{id:"annexes",$$slots:{default:[Pa]},$$scope:{ctx:m}}}),{c(){j(e.$$.fragment),a=_(),j(l.$$.fragment),t=_(),j(c.$$.fragment),s=_(),j(n.$$.fragment),p=_(),j(i.$$.fragment),$=_(),j(C.$$.fragment),o=_(),j(f.$$.fragment),v=_(),j(d.$$.fragment),L=_(),j(U.$$.fragment),A=_(),j(V.$$.fragment),O=_(),j(E.$$.fragment),I=_(),j(z.$$.fragment),W=_(),j(K.$$.fragment),k=_(),j(D.$$.fragment),H=_(),j(R.$$.fragment),se=_(),j(re.$$.fragment),Q=_(),j(Z.$$.fragment),ae=_(),j(N.$$.fragment),ee=_(),j(ue.$$.fragment),fe=_(),j(ce.$$.fragment),me=_(),j(pe.$$.fragment),_e=_(),j(xe.$$.fragment),Ce=_(),j(J.$$.fragment),te=_(),j(de.$$.fragment),ve=_(),j(he.$$.fragment)},l(F){M(e.$$.fragment,F),a=x(F),M(l.$$.fragment,F),t=x(F),M(c.$$.fragment,F),s=x(F),M(n.$$.fragment,F),p=x(F),M(i.$$.fragment,F),$=x(F),M(C.$$.fragment,F),o=x(F),M(f.$$.fragment,F),v=x(F),M(d.$$.fragment,F),L=x(F),M(U.$$.fragment,F),A=x(F),M(V.$$.fragment,F),O=x(F),M(E.$$.fragment,F),I=x(F),M(z.$$.fragment,F),W=x(F),M(K.$$.fragment,F),k=x(F),M(D.$$.fragment,F),H=x(F),M(R.$$.fragment,F),se=x(F),M(re.$$.fragment,F),Q=x(F),M(Z.$$.fragment,F),ae=x(F),M(N.$$.fragment,F),ee=x(F),M(ue.$$.fragment,F),fe=x(F),M(ce.$$.fragment,F),me=x(F),M(pe.$$.fragment,F),_e=x(F),M(xe.$$.fragment,F),Ce=x(F),M(J.$$.fragment,F),te=x(F),M(de.$$.fragment,F),ve=x(F),M(he.$$.fragment,F)},m(F,ne){S(e,F,ne),u(F,a,ne),S(l,F,ne),u(F,t,ne),S(c,F,ne),u(F,s,ne),S(n,F,ne),u(F,p,ne),S(i,F,ne),u(F,$,ne),S(C,F,ne),u(F,o,ne),S(f,F,ne),u(F,v,ne),S(d,F,ne),u(F,L,ne),S(U,F,ne),u(F,A,ne),S(V,F,ne),u(F,O,ne),S(E,F,ne),u(F,I,ne),S(z,F,ne),u(F,W,ne),S(K,F,ne),u(F,k,ne),S(D,F,ne),u(F,H,ne),S(R,F,ne),u(F,se,ne),S(re,F,ne),u(F,Q,ne),S(Z,F,ne),u(F,ae,ne),S(N,F,ne),u(F,ee,ne),S(ue,F,ne),u(F,fe,ne),S(ce,F,ne),u(F,me,ne),S(pe,F,ne),u(F,_e,ne),S(xe,F,ne),u(F,Ce,ne),S(J,F,ne),u(F,te,ne),S(de,F,ne),u(F,ve,ne),S(he,F,ne),Le=!0},p(F,[ne]){const He={};ne&1&&(He.$$scope={dirty:ne,ctx:F}),e.$set(He);const Se={};ne&1&&(Se.$$scope={dirty:ne,ctx:F}),l.$set(Se);const qe={};ne&1&&(qe.$$scope={dirty:ne,ctx:F}),c.$set(qe);const Me={};ne&1&&(Me.$$scope={dirty:ne,ctx:F}),i.$set(Me);const Te={};ne&1&&(Te.$$scope={dirty:ne,ctx:F}),E.$set(Te);const je={};ne&1&&(je.$$scope={dirty:ne,ctx:F}),z.$set(je);const ke={};ne&1&&(ke.$$scope={dirty:ne,ctx:F}),N.$set(ke);const Ae={};ne&1&&(Ae.$$scope={dirty:ne,ctx:F}),ue.$set(Ae);const De={};ne&1&&(De.$$scope={dirty:ne,ctx:F}),xe.$set(De);const Ee={};ne&1&&(Ee.$$scope={dirty:ne,ctx:F}),de.$set(Ee);const Ie={};ne&1&&(Ie.$$scope={dirty:ne,ctx:F}),he.$set(Ie)},i(F){Le||(T(e.$$.fragment,F),T(l.$$.fragment,F),T(c.$$.fragment,F),T(n.$$.fragment,F),T(i.$$.fragment,F),T(C.$$.fragment,F),T(f.$$.fragment,F),T(d.$$.fragment,F),T(U.$$.fragment,F),T(V.$$.fragment,F),T(E.$$.fragment,F),T(z.$$.fragment,F),T(K.$$.fragment,F),T(D.$$.fragment,F),T(R.$$.fragment,F),T(re.$$.fragment,F),T(Z.$$.fragment,F),T(N.$$.fragment,F),T(ue.$$.fragment,F),T(ce.$$.fragment,F),T(pe.$$.fragment,F),T(xe.$$.fragment,F),T(J.$$.fragment,F),T(de.$$.fragment,F),T(he.$$.fragment,F),Le=!0)},o(F){q(e.$$.fragment,F),q(l.$$.fragment,F),q(c.$$.fragment,F),q(n.$$.fragment,F),q(i.$$.fragment,F),q(C.$$.fragment,F),q(f.$$.fragment,F),q(d.$$.fragment,F),q(U.$$.fragment,F),q(V.$$.fragment,F),q(E.$$.fragment,F),q(z.$$.fragment,F),q(K.$$.fragment,F),q(D.$$.fragment,F),q(R.$$.fragment,F),q(re.$$.fragment,F),q(Z.$$.fragment,F),q(N.$$.fragment,F),q(ue.$$.fragment,F),q(ce.$$.fragment,F),q(pe.$$.fragment,F),q(xe.$$.fragment,F),q(J.$$.fragment,F),q(de.$$.fragment,F),q(he.$$.fragment,F),Le=!1},d(F){F&&(r(a),r(t),r(s),r(p),r($),r(o),r(v),r(L),r(A),r(O),r(I),r(W),r(k),r(H),r(se),r(Q),r(ae),r(ee),r(fe),r(me),r(_e),r(Ce),r(te),r(ve)),P(e,F),P(l,F),P(c,F),P(n,F),P(i,F),P(C,F),P(f,F),P(d,F),P(U,F),P(V,F),P(E,F),P(z,F),P(K,F),P(D,F),P(R,F),P(re,F),P(Z,F),P(N,F),P(ue,F),P(ce,F),P(pe,F),P(xe,F),P(J,F),P(de,F),P(he,F)}}}class Ta extends be{constructor(e){super(),we(this,e,null,qa,ge,{})}}function Sa(m){let e,a;return e=new Ta({}),{c(){j(e.$$.fragment)},l(l){M(e.$$.fragment,l)},m(l,t){S(e,l,t),a=!0},i(l){a||(T(e.$$.fragment,l),a=!0)},o(l){q(e.$$.fragment,l),a=!1},d(l){P(e,l)}}}function Ma(m){let e,a,l,t,c;return document.title="Programmation Orientée Objet - CPE Lyon - 2026 - 3ICS - Alexis PICOT",t=new Ye({props:{$$slots:{default:[Sa]},$$scope:{ctx:m}}}),{c(){e=g("link"),a=g("meta"),l=_(),j(t.$$.fragment),this.h()},l(s){const n=Ze("svelte-v7f1ci",document.head);e=h(n,"LINK",{rel:!0,href:!0}),a=h(n,"META",{name:!0,content:!0}),n.forEach(r),l=x(s),M(t.$$.fragment,s),this.h()},h(){w(e,"rel","icon"),w(e,"href","https://fav.farm/💻"),w(a,"name","timestamp"),w(a,"content",new Date(1769785299033).toLocaleString())},m(s,n){G(document.head,e),G(document.head,a),u(s,l,n),S(t,s,n),c=!0},p(s,[n]){const p={};n&1&&(p.$$scope={dirty:n,ctx:s}),t.$set(p)},i(s){c||(T(t.$$.fragment,s),c=!0)},o(s){q(t.$$.fragment,s),c=!1},d(s){s&&r(l),r(e),r(a),P(t,s)}}}function ja(m){switch(new URLSearchParams(window.location.search).get("r")){case"TD1":window.location.href=lt;break;case"TD2":window.location.href=st;break;case"TP1":window.location.href=Re;break;case"TP2":window.location.href=Ge;break;case"Projet":window.location.href=Qe;break}return[]}class za extends be{constructor(e){super(),we(this,e,ja,Ma,ge,{})}}export{za as component,Ia as universal};
