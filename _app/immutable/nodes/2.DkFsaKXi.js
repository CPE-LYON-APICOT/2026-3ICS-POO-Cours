import{s as Pe,n as z,z as Ut,r as Bt,A as We}from"../chunks/scheduler.D4WuhzBw.js";import{S as Me,i as Te,q as H,t as q,a as P,u as M,v as T,r as S,d as r,b as a,e as C,y as g,h as v,j as h,l as x,w,c as Y,f as fe,g as ee,k as te,A as be,B as Le,C as It,D as kt,x as Ze,z as Jt}from"../chunks/index.BrheVP-q.js";import{S as U,P as De,C as oe,a as Rt}from"../chunks/plantUml.BMHEPMfz.js";import{w as Nt}from"../chunks/index.D8jzovuw.js";const Ft=!1,Gt=!0,_$=Object.freeze(Object.defineProperty({__proto__:null,prerender:Gt,ssr:Ft},Symbol.toStringTag,{value:"Module"})),Qt=""+new URL("../assets/TD1.BPxddsqE.html",import.meta.url).href,yt=""+new URL("../assets/TD2.DmF0wZ-D.html",import.meta.url).href,Ot=""+new URL("../assets/TP1.wlZYs3rQ.html",import.meta.url).href,Vt=""+new URL("../assets/TP2.BOqwCClJ.html",import.meta.url).href,zt=""+new URL("../assets/README.wObKFzTv.html",import.meta.url).href;function Kt(d){let e,o="En POO, l'héritage est un mécanisme qui permet de créer une nouvelle classe à partir d'une classe existante.";return{c(){e=h("p"),e.textContent=o},l(s){e=C(s,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1cxtphb"&&(e.textContent=o)},m(s,t){a(s,e,t)},p:z,d(s){s&&r(e)}}}function Wt(d){let e,o=`La classe existante est appelée <span class="text-important">classe mère</span> ou
			<span class="text-important">classe de base</span>.`;return{c(){e=h("p"),e.innerHTML=o},l(s){e=C(s,"P",{"data-svelte-h":!0}),g(e)!=="svelte-17c6x0h"&&(e.innerHTML=o)},m(s,t){a(s,e,t)},p:z,d(s){s&&r(e)}}}function Zt(d){let e,o=`La nouvelle classe est appelée <span class="text-important">classe fille</span> ou
			<span class="text-important">classe dérivée</span>.`,s,t,c="La classe fille peut aussi ajouter des attributs et des méthodes qui lui sont propres.";return{c(){e=h("p"),e.innerHTML=o,s=x(),t=h("p"),t.textContent=c},l(n){e=C(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1uk6o90"&&(e.innerHTML=o),s=v(n),t=C(n,"P",{"data-svelte-h":!0}),g(t)!=="svelte-hn2jyx"&&(t.textContent=c)},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function Yt(d){let e=`
@startuml
class Animal {
  + crier()
}

class Chien extends Animal {
  + inscritLOF: boolean
  + crier()
}

class Chat extends Animal {
  + crier()
}
@enduml
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Xt(d){let e,o="Visualisons l'héritage",s,t,c,n,i="La flèche pointe vers la classe mère : <code>Chien</code> et <code>Chat</code> héritent de <code>Animal</code>.",m,l,$=`C'est la notation UML standard. La flèche avec un triangle vide pointe toujours vers le parent.\r
			Chien et Chat sont des spécialisations d'Animal.`,_;return t=new De({props:{$$slots:{default:[Yt]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment),c=x(),n=h("p"),n.innerHTML=i,m=x(),l=h("aside"),l.textContent=$,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-88th8y"&&(e.textContent=o),s=v(u),T(t.$$.fragment,u),c=v(u),n=C(u,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-15afcpd"&&(n.innerHTML=i),m=v(u),l=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-r9k6a2"&&(l.textContent=$),this.h()},h(){w(n,"class","fragment"),w(l,"class","notes")},m(u,f){a(u,e,f),a(u,s,f),M(t,u,f),a(u,c,f),a(u,n,f),a(u,m,f),a(u,l,f),_=!0},p(u,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:u}),t.$set(b)},i(u){_||(P(t.$$.fragment,u),_=!0)},o(u){q(t.$$.fragment,u),_=!1},d(u){u&&(r(e),r(s),r(c),r(n),r(m),r(l)),H(t,u)}}}function es(d){let e=`
class Animal {
    void crier() {
        System.out.println("Je suis un animal");
    }
}

class Chien extends Animal {
    boolean inscritLOF;
}
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function ts(d){let e,o="En code Java",s,t,c,n,i='On utilise le mot-clé <code class="code text-important">extends</code> pour hériter d&#39;une classe.',m,l,$="Le mot-clé extends, c'est le lien d'héritage. Chien étend Animal, donc Chien a tout ce qu'Animal a.",_;return t=new oe({props:{$$slots:{default:[es]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment),c=x(),n=h("p"),n.innerHTML=i,m=x(),l=h("aside"),l.textContent=$,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1w10xpg"&&(e.textContent=o),s=v(u),T(t.$$.fragment,u),c=v(u),n=C(u,"P",{"data-svelte-h":!0}),g(n)!=="svelte-fb6via"&&(n.innerHTML=i),m=v(u),l=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-1efpv08"&&(l.textContent=$),this.h()},h(){w(l,"class","notes")},m(u,f){a(u,e,f),a(u,s,f),M(t,u,f),a(u,c,f),a(u,n,f),a(u,m,f),a(u,l,f),_=!0},p(u,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:u}),t.$set(b)},i(u){_||(P(t.$$.fragment,u),_=!0)},o(u){q(t.$$.fragment,u),_=!1},d(u){u&&(r(e),r(s),r(c),r(n),r(m),r(l)),H(t,u)}}}function ss(d){let e,o=`La classe fille hérite des attributs et des méthodes de la classe mère. Elle peut aussi\r
			redéfinir les méthodes de la classe mère.`,s,t,c='Redéfinir une méthode s&#39;appelle <span class="text-important">redéfinition</span> (ou <em>override</em>).';return{c(){e=h("p"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c},l(n){e=C(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1def0s3"&&(e.textContent=o),s=v(n),t=C(n,"P",{"data-svelte-h":!0}),g(t)!=="svelte-16p7trl"&&(t.innerHTML=c)},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function ls(d){let e,o="Pourquoi redéfinir une méthode ?",s,t,c='<li class="fragment">Adapter le comportement de la méthode à la classe fille</li> <li class="fragment">Spécialiser un comportement générique</li>',n,i,m='<p class="text-accent-200">Exemple : Un animal crie, mais chaque animal crie différemment !</p>';return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("ul"),t.innerHTML=c,n=x(),i=h("div"),i.innerHTML=m,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-110ib47"&&(e.textContent=o),s=v(l),t=C(l,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-r58kxc"&&(t.innerHTML=c),n=v(l),i=C(l,"DIV",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-105ov4u"&&(i.innerHTML=m),this.h()},h(){w(i,"class","fragment mt-8")},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),a(l,i,$)},p:z,d(l){l&&(r(e),r(s),r(t),r(n),r(i))}}}function ns(d){let e=`
class Animal {
    void crier() {
        System.out.println("Je suis un animal");
    }
}

class Chien extends Animal {
    @Override
    void crier() {
        System.out.println("Wouaf wouaf");
    }
}
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function is(d){let e,o="La redéfinition en pratique",s,t,c,n,i=`Regardez le @Override. C'est une annotation qui dit au compilateur : je redéfinis une méthode du parent.\r
			Si vous faites une faute de frappe dans le nom de la méthode, le compilateur vous préviendra.`,m;return t=new oe({props:{lines:"1-5|7-11",$$slots:{default:[ns]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment),c=x(),n=h("aside"),n.textContent=i,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1eurtkj"&&(e.textContent=o),s=v(l),T(t.$$.fragment,l),c=v(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-usptrd"&&(n.textContent=i),this.h()},h(){w(n,"class","notes")},m(l,$){a(l,e,$),a(l,s,$),M(t,l,$),a(l,c,$),a(l,n,$),m=!0},p(l,$){const _={};$&1&&(_.$$scope={dirty:$,ctx:l}),t.$set(_)},i(l){m||(P(t.$$.fragment,l),m=!0)},o(l){q(t.$$.fragment,l),m=!1},d(l){l&&(r(e),r(s),r(c),r(n)),H(t,l)}}}function rs(d){let e=`
void Crier() {  // Oups, majuscule !
    System.out.println("Wouaf");
}
// Compile... mais ne redéfinit rien !
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function as(d){let e=`
@Override
void Crier() {  // Erreur de compilation !
    System.out.println("Wouaf");
}
// Le compilateur détecte l'erreur
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function us(d){let e,o="L'annotation @Override",s,t,c='Bonne pratique : <b>toujours</b> utiliser <code class="text-important">@Override</code> lors d&#39;une redéfinition.',n,i,m,l,$="❌ Sans @Override",_,u,f,b,p,L="✅ Avec @Override",j,E,R,V,I=`Sans Override, si vous vous trompez dans le nom, vous créez une nouvelle méthode au lieu de redéfinir.\r
			Avec Override, le compilateur vérifie que la méthode existe bien dans le parent.`,k;return u=new oe({props:{class:"language-java",$$slots:{default:[rs]},$$scope:{ctx:d}}}),E=new oe({props:{class:"language-java",$$slots:{default:[as]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c,n=x(),i=h("div"),m=h("div"),l=h("h4"),l.textContent=$,_=x(),S(u.$$.fragment),f=x(),b=h("div"),p=h("h4"),p.textContent=L,j=x(),S(E.$$.fragment),R=x(),V=h("aside"),V.textContent=I,this.h()},l(A){e=C(A,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-50lfmg"&&(e.textContent=o),s=v(A),t=C(A,"P",{"data-svelte-h":!0}),g(t)!=="svelte-d96ked"&&(t.innerHTML=c),n=v(A),i=C(A,"DIV",{class:!0});var F=fe(i);m=C(F,"DIV",{});var X=fe(m);l=C(X,"H4",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-15xopgk"&&(l.textContent=$),_=v(X),T(u.$$.fragment,X),X.forEach(r),f=v(F),b=C(F,"DIV",{});var J=fe(b);p=C(J,"H4",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-1wl6p7j"&&(p.textContent=L),j=v(J),T(E.$$.fragment,J),J.forEach(r),F.forEach(r),R=v(A),V=C(A,"ASIDE",{class:!0,"data-svelte-h":!0}),g(V)!=="svelte-ggk4l5"&&(V.textContent=I),this.h()},h(){w(l,"class","text-red-400"),w(p,"class","text-green-400"),w(i,"class","grid grid-cols-2 gap-8 mt-6"),w(V,"class","notes")},m(A,F){a(A,e,F),a(A,s,F),a(A,t,F),a(A,n,F),a(A,i,F),Y(i,m),Y(m,l),Y(m,_),M(u,m,null),Y(i,f),Y(i,b),Y(b,p),Y(b,j),M(E,b,null),a(A,R,F),a(A,V,F),k=!0},p(A,F){const X={};F&1&&(X.$$scope={dirty:F,ctx:A}),u.$set(X);const J={};F&1&&(J.$$scope={dirty:F,ctx:A}),E.$set(J)},i(A){k||(P(u.$$.fragment,A),P(E.$$.fragment,A),k=!0)},o(A){q(u.$$.fragment,A),q(E.$$.fragment,A),k=!1},d(A){A&&(r(e),r(s),r(t),r(n),r(i),r(R),r(V)),H(u),H(E)}}}function os(d){let e=`
class Animal {
    void crier() {
        System.out.println("Je suis un animal");
    }
}

class Chien extends Animal {
    @Override
    void crier() {
        super.crier();  // Appelle Animal.crier()
        System.out.println("Wouaf wouaf");
    }
}
// Affiche : "Je suis un animal" puis "Wouaf wouaf"
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function $s(d){let e,o="Appeler la méthode du parent : super",s,t,c='On peut appeler la méthode de la classe mère avec <code class="text-important">super</code>.',n,i,m,l,$="Super permet d'accéder au comportement du parent. Utile quand on veut étendre le comportement plutôt que le remplacer complètement.",_;return i=new oe({props:{lines:"7-11",$$slots:{default:[os]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c,n=x(),S(i.$$.fragment),m=x(),l=h("aside"),l.textContent=$,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-qjr5g"&&(e.textContent=o),s=v(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-v8yuqg"&&(t.innerHTML=c),n=v(u),T(i.$$.fragment,u),m=v(u),l=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-o07epn"&&(l.textContent=$),this.h()},h(){w(l,"class","notes")},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),M(i,u,f),a(u,m,f),a(u,l,f),_=!0},p(u,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:u}),i.$set(b)},i(u){_||(P(i.$$.fragment,u),_=!0)},o(u){q(i.$$.fragment,u),_=!1},d(u){u&&(r(e),r(s),r(t),r(n),r(m),r(l)),H(i,u)}}}function fs(d){let e=`
class Animal {
    String nom;
    
    Animal(String nom) {
        this.nom = nom;
    }
}

class Chien extends Animal {
    boolean inscritLOF;
    
    Chien(String nom, boolean inscritLOF) {
        super(nom);  // Appelle Animal(nom)
        this.inscritLOF = inscritLOF;
    }
}
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function cs(d){let e,o="Le constructeur et super()",s,t,c="Le constructeur de la classe fille doit appeler celui de la classe mère.",n,i,m,l,$="<code>super()</code> doit être la <b>première instruction</b> du constructeur !",_,u,f=`C'est obligatoire. Le parent doit être construit avant l'enfant.\r
			Si vous oubliez super(), Java appelle super() sans argument par défaut.`,b;return i=new oe({props:{lines:"1-6|8-13",$$slots:{default:[fs]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),S(i.$$.fragment),m=x(),l=h("p"),l.innerHTML=$,_=x(),u=h("aside"),u.textContent=f,this.h()},l(p){e=C(p,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-b6mdxj"&&(e.textContent=o),s=v(p),t=C(p,"P",{"data-svelte-h":!0}),g(t)!=="svelte-kr896n"&&(t.textContent=c),n=v(p),T(i.$$.fragment,p),m=v(p),l=C(p,"P",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-18u9zg8"&&(l.innerHTML=$),_=v(p),u=C(p,"ASIDE",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-18qho2n"&&(u.textContent=f),this.h()},h(){w(l,"class","fragment text-accent-200"),w(u,"class","notes")},m(p,L){a(p,e,L),a(p,s,L),a(p,t,L),a(p,n,L),M(i,p,L),a(p,m,L),a(p,l,L),a(p,_,L),a(p,u,L),b=!0},p(p,L){const j={};L&1&&(j.$$scope={dirty:L,ctx:p}),i.$set(j)},i(p){b||(P(i.$$.fragment,p),b=!0)},o(p){q(i.$$.fragment,p),b=!1},d(p){p&&(r(e),r(s),r(t),r(n),r(m),r(l),r(_),r(u)),H(i,p)}}}function ps(d){let e,o="Les classes abstraites",s,t,c="Quand on ne peut pas tout définir...";return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,this.h()},l(n){e=C(n,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-y699sq"&&(e.textContent=o),s=v(n),t=C(n,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1vlu38n"&&(t.textContent=c),this.h()},h(){w(e,"class","text-5xl"),w(t,"class","text-2xl text-gray-400")},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function ms(d){let e=`
abstract class Animal {
    abstract void crier();  // Pas d'implémentation !
}

// Animal a = new Animal();  // ❌ Erreur de compilation !
Chien c = new Chien();       // ✅ OK
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function ds(d){let e,o="Qu'est-ce qu'une classe abstraite ?",s,t,c='Une classe abstraite est une classe qui <span class="text-important">ne peut pas être instanciée</span>.',n,i,m="Elle est destinée à être héritée par d'autres classes.",l,$,_;return $=new oe({props:{class:"fragment",$$slots:{default:[ms]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c,n=x(),i=h("p"),i.textContent=m,l=x(),S($.$$.fragment),this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-ywas56"&&(e.textContent=o),s=v(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-uh1j94"&&(t.innerHTML=c),n=v(u),i=C(u,"P",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-1e5hthq"&&(i.textContent=m),l=v(u),T($.$$.fragment,u),this.h()},h(){w(i,"class","fragment")},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),a(u,i,f),a(u,l,f),M($,u,f),_=!0},p(u,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:u}),$.$set(b)},i(u){_||(P($.$$.fragment,u),_=!0)},o(u){q($.$$.fragment,u),_=!1},d(u){u&&(r(e),r(s),r(t),r(n),r(i),r(l)),H($,u)}}}function vs(d){let e,o="Pourquoi utiliser des classes abstraites ?",s,t,c='<li class="fragment">Pour définir un <b>contrat</b> que les classes filles doivent respecter</li> <li class="fragment">Pour <b>forcer</b> les classes filles à implémenter certaines méthodes</li> <li class="fragment">Parce qu&#39;il n&#39;a parfois <b>aucun sens</b> d&#39;instancier une classe</li>',n,i,m=`🤔 Comment calculer la surface d'une "Forme" générique ? C'est impossible !`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("ul"),t.innerHTML=c,n=x(),i=h("p"),i.textContent=m,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1fw1imw"&&(e.textContent=o),s=v(l),t=C(l,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-1f0ebwg"&&(t.innerHTML=c),n=v(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-9bhmml"&&(i.textContent=m),this.h()},h(){w(i,"class","fragment mt-8 text-accent-200")},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),a(l,i,$)},p:z,d(l){l&&(r(e),r(s),r(t),r(n),r(i))}}}function xs(d){let e=`
@startuml
abstract class Forme {
  {abstract} + calculerSurface(): double
}

class Cercle extends Forme {
  - rayon: double
  + calculerSurface(): double
}

class Rectangle extends Forme {
  - largeur: double
  - hauteur: double
  + calculerSurface(): double
}
@enduml
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function _s(d){let e,o="Exemple : les formes géométriques",s,t,c,n,i=`Forme est abstraite car on ne sait pas calculer la surface d'une forme générique.\r
			Mais on sait que toute forme DOIT pouvoir calculer sa surface.`,m;return t=new De({props:{$$slots:{default:[xs]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment),c=x(),n=h("aside"),n.textContent=i,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1l1b4vq"&&(e.textContent=o),s=v(l),T(t.$$.fragment,l),c=v(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-19i401s"&&(n.textContent=i),this.h()},h(){w(n,"class","notes")},m(l,$){a(l,e,$),a(l,s,$),M(t,l,$),a(l,c,$),a(l,n,$),m=!0},p(l,$){const _={};$&1&&(_.$$scope={dirty:$,ctx:l}),t.$set(_)},i(l){m||(P(t.$$.fragment,l),m=!0)},o(l){q(t.$$.fragment,l),m=!1},d(l){l&&(r(e),r(s),r(c),r(n)),H(t,l)}}}function Cs(d){let e=`
abstract class Forme {
    abstract double calculerSurface();  // Pas de corps !
}
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function hs(d){let e=`
class Cercle extends Forme {
    double rayon;

    Cercle(double rayon) {
        this.rayon = rayon;
    }

    @Override
    double calculerSurface() {
        return Math.PI * rayon * rayon;
    }
}
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function gs(d){let e=`
class Rectangle extends Forme {
    double largeur, hauteur;

    Rectangle(double l, double h) {
        this.largeur = l;
        this.hauteur = h;
    }

    @Override
    double calculerSurface() {
        return largeur * hauteur;
    }
}
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function bs(d){let e,o="En code Java",s,t,c,n,i,m,l,$;return t=new oe({props:{$$slots:{default:[Cs]},$$scope:{ctx:d}}}),i=new oe({props:{class:"language-java",$$slots:{default:[hs]},$$scope:{ctx:d}}}),l=new oe({props:{class:"language-java",$$slots:{default:[gs]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment),c=x(),n=h("div"),S(i.$$.fragment),m=x(),S(l.$$.fragment),this.h()},l(_){e=C(_,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1w10xpg"&&(e.textContent=o),s=v(_),T(t.$$.fragment,_),c=v(_),n=C(_,"DIV",{class:!0});var u=fe(n);T(i.$$.fragment,u),m=v(u),T(l.$$.fragment,u),u.forEach(r),this.h()},h(){w(n,"class","flex flex-row gap-4 mt-4")},m(_,u){a(_,e,u),a(_,s,u),M(t,_,u),a(_,c,u),a(_,n,u),M(i,n,null),Y(n,m),M(l,n,null),$=!0},p(_,u){const f={};u&1&&(f.$$scope={dirty:u,ctx:_}),t.$set(f);const b={};u&1&&(b.$$scope={dirty:u,ctx:_}),i.$set(b);const p={};u&1&&(p.$$scope={dirty:u,ctx:_}),l.$set(p)},i(_){$||(P(t.$$.fragment,_),P(i.$$.fragment,_),P(l.$$.fragment,_),$=!0)},o(_){q(t.$$.fragment,_),q(i.$$.fragment,_),q(l.$$.fragment,_),$=!1},d(_){_&&(r(e),r(s),r(c),r(n)),H(t,_),H(i),H(l)}}}function Ls(d){let e,o="Ce qu'il faut retenir",s,t,c='La classe <code class="text-important">Forme</code> est abstraite car on ne peut pas calculer la surface d&#39;une forme générique.',n,i,m="Mais <b>toutes les formes</b> doivent pouvoir calculer leur surface → c&#39;est le contrat.",l,$,_="❌ <code>new Forme()</code> → Erreur !",u,f,b="✅ <code>new Cercle(5.0)</code> → OK";return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c,n=x(),i=h("p"),i.innerHTML=m,l=x(),$=h("p"),$.innerHTML=_,u=x(),f=h("p"),f.innerHTML=b,this.h()},l(p){e=C(p,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1c3ns5x"&&(e.textContent=o),s=v(p),t=C(p,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1aglhjf"&&(t.innerHTML=c),n=v(p),i=C(p,"P",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-1yjmjvc"&&(i.innerHTML=m),l=v(p),$=C(p,"P",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-1b5sfkh"&&($.innerHTML=_),u=v(p),f=C(p,"P",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-iu5ucw"&&(f.innerHTML=b),this.h()},h(){w(i,"class","fragment"),w($,"class","fragment mt-8 text-red-400"),w(f,"class","fragment text-green-400")},m(p,L){a(p,e,L),a(p,s,L),a(p,t,L),a(p,n,L),a(p,i,L),a(p,l,L),a(p,$,L),a(p,u,L),a(p,f,L)},p:z,d(p){p&&(r(e),r(s),r(t),r(n),r(i),r(l),r($),r(u),r(f))}}}function ws(d){let e,o="⚠️ Quand NE PAS hériter",s,t,c="L'erreur classique du débutant";return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,this.h()},l(n){e=C(n,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1drmq8k"&&(e.textContent=o),s=v(n),t=C(n,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-3u5bob"&&(t.textContent=c),this.h()},h(){w(e,"class","text-5xl"),w(t,"class","text-2xl text-gray-400")},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function Hs(d){let e=`
// ❌ MAUVAISE IDÉE !
class Pile extends ArrayList {
    void empiler(Object o) { add(o); }
    Object depiler() { return remove(size() - 1); }
}

// Problème : on hérite de TOUT ArrayList !
Pile p = new Pile();
p.empiler("A");
p.add(0, "B");  // 😱 On peut ajouter n'importe où !
p.clear();      // 😱 On peut tout supprimer !
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function qs(d){let e,o="Le piège de l'héritage abusif",s,t,c="L'héritage n'est pas toujours la bonne solution !",n,i,m,l,$="Une Pile n'est PAS une ArrayList, elle UTILISE une ArrayList !",_;return i=new oe({props:{class:"language-java",$$slots:{default:[Hs]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),S(i.$$.fragment),m=x(),l=h("p"),l.textContent=$,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1hvzkw5"&&(e.textContent=o),s=v(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-dgmjh5"&&(t.textContent=c),n=v(u),T(i.$$.fragment,u),m=v(u),l=C(u,"P",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-1pmyb7u"&&(l.textContent=$),this.h()},h(){w(l,"class","fragment text-red-400 font-bold")},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),M(i,u,f),a(u,m,f),a(u,l,f),_=!0},p(u,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:u}),i.$set(b)},i(u){_||(P(i.$$.fragment,u),_=!0)},o(u){q(i.$$.fragment,u),_=!1},d(u){u&&(r(e),r(s),r(t),r(n),r(m),r(l)),H(i,u)}}}function Ps(d){let e=`
// ✅ BONNE IDÉE : composition
class Pile {
    private ArrayList elements = new ArrayList();
    
    void empiler(Object o) { 
        elements.add(o); 
    }
    
    Object depiler() { 
        return elements.remove(elements.size() - 1); 
    }
    
    // Pas d'accès direct à elements !
}
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Ms(d){let e,o="La bonne approche : composition",s,t,c,n,i="On expose uniquement ce qui a du sens pour une Pile.",m;return t=new oe({props:{class:"language-java",$$slots:{default:[Ps]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment),c=x(),n=h("p"),n.textContent=i,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-7t2ot"&&(e.textContent=o),s=v(l),T(t.$$.fragment,l),c=v(l),n=C(l,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-14pjpsh"&&(n.textContent=i),this.h()},h(){w(n,"class","fragment text-green-400 font-bold")},m(l,$){a(l,e,$),a(l,s,$),M(t,l,$),a(l,c,$),a(l,n,$),m=!0},p(l,$){const _={};$&1&&(_.$$scope={dirty:$,ctx:l}),t.$set(_)},i(l){m||(P(t.$$.fragment,l),m=!0)},o(l){q(t.$$.fragment,l),m=!1},d(l){l&&(r(e),r(s),r(c),r(n)),H(t,l)}}}function Ts(d){let e,o="Comment choisir ?",s,t,c='<p class="fragment">🤔 Posez-vous la question :</p> <p class="fragment mt-4 text-3xl">&quot;Est-ce qu&#39;un <b>X</b> <span class="text-important">EST UN</span> <b>Y</b> ?&quot;</p> <div class="fragment mt-8"><p class="text-green-400">✅ Un Chien <b>est un</b> Animal → Héritage</p> <p class="text-green-400">✅ Un Cercle <b>est une</b> Forme → Héritage</p> <p class="text-red-400">❌ Une Pile <b>est une</b> ArrayList → NON !</p> <p class="text-blue-400">✅ Une Pile <b>a une</b> ArrayList → Composition</p></div>',n,i,m=`C'est la règle d'or. Si la phrase "X est un Y" sonne faux, n'héritez pas.\r
			On verra la composition dans le prochain chapitre.`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("div"),t.innerHTML=c,n=x(),i=h("aside"),i.textContent=m,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1sib837"&&(e.textContent=o),s=v(l),t=C(l,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-b6u81r"&&(t.innerHTML=c),n=v(l),i=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-1dryqu3"&&(i.textContent=m),this.h()},h(){w(t,"class","text-2xl mt-8"),w(i,"class","notes")},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),a(l,i,$)},p:z,d(l){l&&(r(e),r(s),r(t),r(n),r(i))}}}function Ss(d){let e,o="Récapitulatif : les mots-clés",s,t,c='<tr><td class="p-4"><code class="text-important">extends</code></td> <td class="p-4">Hériter d&#39;une classe</td></tr> <tr><td class="p-4"><code class="text-important">super</code></td> <td class="p-4">Accéder à la classe mère</td></tr> <tr><td class="p-4"><code class="text-important">super()</code></td> <td class="p-4">Appeler le constructeur parent</td></tr> <tr><td class="p-4"><code class="text-important">@Override</code></td> <td class="p-4">Redéfinir une méthode (annotation)</td></tr> <tr><td class="p-4"><code class="text-important">abstract</code></td> <td class="p-4">Classe/méthode non instanciable</td></tr>';return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("table"),t.innerHTML=c,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-18myzwu"&&(e.textContent=o),s=v(n),t=C(n,"TABLE",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1mjxyt9"&&(t.innerHTML=c),this.h()},h(){w(t,"class","text-xl")},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function js(d){let e,o="L'héritage",s,t,c,n,i,m,l,$,_,u,f,b,p,L,j,E,R,V,I,k,A,F,X,J,le,D,K,$e,pe,Z,ne,me,y,B,ie,de,ve,W,ae,Ce,_e,he,G,ue,xe;return t=new U({props:{$$slots:{default:[Kt]},$$scope:{ctx:d}}}),n=new U({props:{$$slots:{default:[Wt]},$$scope:{ctx:d}}}),m=new U({props:{$$slots:{default:[Zt]},$$scope:{ctx:d}}}),$=new U({props:{$$slots:{default:[Xt]},$$scope:{ctx:d}}}),u=new U({props:{$$slots:{default:[ts]},$$scope:{ctx:d}}}),b=new U({props:{$$slots:{default:[ss]},$$scope:{ctx:d}}}),L=new U({props:{$$slots:{default:[ls]},$$scope:{ctx:d}}}),E=new U({props:{$$slots:{default:[is]},$$scope:{ctx:d}}}),V=new U({props:{$$slots:{default:[us]},$$scope:{ctx:d}}}),k=new U({props:{$$slots:{default:[$s]},$$scope:{ctx:d}}}),F=new U({props:{$$slots:{default:[cs]},$$scope:{ctx:d}}}),J=new U({props:{data_background_color:"#1a1a2e",$$slots:{default:[ps]},$$scope:{ctx:d}}}),D=new U({props:{$$slots:{default:[ds]},$$scope:{ctx:d}}}),$e=new U({props:{$$slots:{default:[vs]},$$scope:{ctx:d}}}),Z=new U({props:{$$slots:{default:[_s]},$$scope:{ctx:d}}}),me=new U({props:{$$slots:{default:[bs]},$$scope:{ctx:d}}}),B=new U({props:{$$slots:{default:[Ls]},$$scope:{ctx:d}}}),de=new U({props:{data_background_color:"#3d1a1a",$$slots:{default:[ws]},$$scope:{ctx:d}}}),W=new U({props:{$$slots:{default:[qs]},$$scope:{ctx:d}}}),Ce=new U({props:{$$slots:{default:[Ms]},$$scope:{ctx:d}}}),he=new U({props:{$$slots:{default:[Ts]},$$scope:{ctx:d}}}),ue=new U({props:{$$slots:{default:[Ss]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment),c=x(),S(n.$$.fragment),i=x(),S(m.$$.fragment),l=x(),S($.$$.fragment),_=x(),S(u.$$.fragment),f=x(),S(b.$$.fragment),p=x(),S(L.$$.fragment),j=x(),S(E.$$.fragment),R=x(),S(V.$$.fragment),I=x(),S(k.$$.fragment),A=x(),S(F.$$.fragment),X=x(),S(J.$$.fragment),le=x(),S(D.$$.fragment),K=x(),S($e.$$.fragment),pe=x(),S(Z.$$.fragment),ne=x(),S(me.$$.fragment),y=x(),S(B.$$.fragment),ie=x(),S(de.$$.fragment),ve=x(),S(W.$$.fragment),ae=x(),S(Ce.$$.fragment),_e=x(),S(he.$$.fragment),G=x(),S(ue.$$.fragment)},l(N){e=C(N,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-taqcdc"&&(e.textContent=o),s=v(N),T(t.$$.fragment,N),c=v(N),T(n.$$.fragment,N),i=v(N),T(m.$$.fragment,N),l=v(N),T($.$$.fragment,N),_=v(N),T(u.$$.fragment,N),f=v(N),T(b.$$.fragment,N),p=v(N),T(L.$$.fragment,N),j=v(N),T(E.$$.fragment,N),R=v(N),T(V.$$.fragment,N),I=v(N),T(k.$$.fragment,N),A=v(N),T(F.$$.fragment,N),X=v(N),T(J.$$.fragment,N),le=v(N),T(D.$$.fragment,N),K=v(N),T($e.$$.fragment,N),pe=v(N),T(Z.$$.fragment,N),ne=v(N),T(me.$$.fragment,N),y=v(N),T(B.$$.fragment,N),ie=v(N),T(de.$$.fragment,N),ve=v(N),T(W.$$.fragment,N),ae=v(N),T(Ce.$$.fragment,N),_e=v(N),T(he.$$.fragment,N),G=v(N),T(ue.$$.fragment,N)},m(N,re){a(N,e,re),a(N,s,re),M(t,N,re),a(N,c,re),M(n,N,re),a(N,i,re),M(m,N,re),a(N,l,re),M($,N,re),a(N,_,re),M(u,N,re),a(N,f,re),M(b,N,re),a(N,p,re),M(L,N,re),a(N,j,re),M(E,N,re),a(N,R,re),M(V,N,re),a(N,I,re),M(k,N,re),a(N,A,re),M(F,N,re),a(N,X,re),M(J,N,re),a(N,le,re),M(D,N,re),a(N,K,re),M($e,N,re),a(N,pe,re),M(Z,N,re),a(N,ne,re),M(me,N,re),a(N,y,re),M(B,N,re),a(N,ie,re),M(de,N,re),a(N,ve,re),M(W,N,re),a(N,ae,re),M(Ce,N,re),a(N,_e,re),M(he,N,re),a(N,G,re),M(ue,N,re),xe=!0},p(N,re){const we={};re&1&&(we.$$scope={dirty:re,ctx:N}),t.$set(we);const Q={};re&1&&(Q.$$scope={dirty:re,ctx:N}),n.$set(Q);const ce={};re&1&&(ce.$$scope={dirty:re,ctx:N}),m.$set(ce);const ge={};re&1&&(ge.$$scope={dirty:re,ctx:N}),$.$set(ge);const je={};re&1&&(je.$$scope={dirty:re,ctx:N}),u.$set(je);const He={};re&1&&(He.$$scope={dirty:re,ctx:N}),b.$set(He);const Ae={};re&1&&(Ae.$$scope={dirty:re,ctx:N}),L.$set(Ae);const qe={};re&1&&(qe.$$scope={dirty:re,ctx:N}),E.$set(qe);const Ee={};re&1&&(Ee.$$scope={dirty:re,ctx:N}),V.$set(Ee);const Se={};re&1&&(Se.$$scope={dirty:re,ctx:N}),k.$set(Se);const ze={};re&1&&(ze.$$scope={dirty:re,ctx:N}),F.$set(ze);const Ie={};re&1&&(Ie.$$scope={dirty:re,ctx:N}),J.$set(Ie);const Je={};re&1&&(Je.$$scope={dirty:re,ctx:N}),D.$set(Je);const ke={};re&1&&(ke.$$scope={dirty:re,ctx:N}),$e.$set(ke);const Re={};re&1&&(Re.$$scope={dirty:re,ctx:N}),Z.$set(Re);const Oe={};re&1&&(Oe.$$scope={dirty:re,ctx:N}),me.$set(Oe);const Ne={};re&1&&(Ne.$$scope={dirty:re,ctx:N}),B.$set(Ne);const Ve={};re&1&&(Ve.$$scope={dirty:re,ctx:N}),de.$set(Ve);const Fe={};re&1&&(Fe.$$scope={dirty:re,ctx:N}),W.$set(Fe);const Ue={};re&1&&(Ue.$$scope={dirty:re,ctx:N}),Ce.$set(Ue);const Qe={};re&1&&(Qe.$$scope={dirty:re,ctx:N}),he.$set(Qe);const Be={};re&1&&(Be.$$scope={dirty:re,ctx:N}),ue.$set(Be)},i(N){xe||(P(t.$$.fragment,N),P(n.$$.fragment,N),P(m.$$.fragment,N),P($.$$.fragment,N),P(u.$$.fragment,N),P(b.$$.fragment,N),P(L.$$.fragment,N),P(E.$$.fragment,N),P(V.$$.fragment,N),P(k.$$.fragment,N),P(F.$$.fragment,N),P(J.$$.fragment,N),P(D.$$.fragment,N),P($e.$$.fragment,N),P(Z.$$.fragment,N),P(me.$$.fragment,N),P(B.$$.fragment,N),P(de.$$.fragment,N),P(W.$$.fragment,N),P(Ce.$$.fragment,N),P(he.$$.fragment,N),P(ue.$$.fragment,N),xe=!0)},o(N){q(t.$$.fragment,N),q(n.$$.fragment,N),q(m.$$.fragment,N),q($.$$.fragment,N),q(u.$$.fragment,N),q(b.$$.fragment,N),q(L.$$.fragment,N),q(E.$$.fragment,N),q(V.$$.fragment,N),q(k.$$.fragment,N),q(F.$$.fragment,N),q(J.$$.fragment,N),q(D.$$.fragment,N),q($e.$$.fragment,N),q(Z.$$.fragment,N),q(me.$$.fragment,N),q(B.$$.fragment,N),q(de.$$.fragment,N),q(W.$$.fragment,N),q(Ce.$$.fragment,N),q(he.$$.fragment,N),q(ue.$$.fragment,N),xe=!1},d(N){N&&(r(e),r(s),r(c),r(i),r(l),r(_),r(f),r(p),r(j),r(R),r(I),r(A),r(X),r(le),r(K),r(pe),r(ne),r(y),r(ie),r(ve),r(ae),r(_e),r(G)),H(t,N),H(n,N),H(m,N),H($,N),H(u,N),H(b,N),H(L,N),H(E,N),H(V,N),H(k,N),H(F,N),H(J,N),H(D,N),H($e,N),H(Z,N),H(me,N),H(B,N),H(de,N),H(W,N),H(Ce,N),H(he,N),H(ue,N)}}}function As(d){let e,o;return e=new U({props:{$$slots:{default:[js]},$$scope:{ctx:d}}}),{c(){S(e.$$.fragment)},l(s){T(e.$$.fragment,s)},m(s,t){M(e,s,t),o=!0},p(s,[t]){const c={};t&1&&(c.$$scope={dirty:t,ctx:s}),e.$set(c)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){q(e.$$.fragment,s),o=!1},d(s){H(e,s)}}}class Es extends Me{constructor(e){super(),Te(this,e,null,As,Pe,{})}}function Ds(d){let e,o,s,t,c,n,i,m,l,$,_,u,f,b,p,L,j,E,R,V;return{c(){e=Le("svg"),o=Le("g"),s=Le("title"),t=te("Layer 1"),c=Le("g"),n=Le("rect"),i=Le("text"),m=te("Données"),l=Le("text"),$=te("FonctionA"),_=Le("text"),u=te("FonctionB"),f=Le("text"),b=te("FonctionC"),p=Le("text"),L=te("FonctionD"),j=Le("line"),E=Le("line"),R=Le("line"),V=Le("line"),this.h()},l(I){e=be(I,"svg",{width:!0,height:!0,xmlns:!0});var k=fe(e);o=be(k,"g",{});var A=fe(o);s=be(A,"title",{});var F=fe(s);t=ee(F,"Layer 1"),F.forEach(r),c=be(A,"g",{id:!0});var X=fe(c);n=be(X,"rect",{fill:!0,stroke:!0,x:!0,y:!0,width:!0,height:!0,id:!0}),fe(n).forEach(r),i=be(X,"text",{fill:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var J=fe(i);m=ee(J,"Données"),J.forEach(r),l=be(X,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var le=fe(l);$=ee(le,"FonctionA"),le.forEach(r),_=be(X,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var D=fe(_);u=ee(D,"FonctionB"),D.forEach(r),f=be(X,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var K=fe(f);b=ee(K,"FonctionC"),K.forEach(r),p=be(X,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var $e=fe(p);L=ee($e,"FonctionD"),$e.forEach(r),j=be(X,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),fe(j).forEach(r),E=be(X,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),fe(E).forEach(r),R=be(X,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),fe(R).forEach(r),V=be(X,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),fe(V).forEach(r),X.forEach(r),A.forEach(r),k.forEach(r),this.h()},h(){w(n,"fill","#FFDFB8"),w(n,"stroke","none"),w(n,"x","170"),w(n,"y","0"),w(n,"width","150"),w(n,"height","300"),w(n,"id","svg_1"),w(i,"fill","black"),w(i,"stroke","black"),w(i,"x","205"),w(i,"y","150"),w(i,"id","svg_2"),w(i,"font-size","24"),w(i,"font-family","Noto Sans JP"),w(i,"text-anchor","start"),w(i,"xml:space","preserve"),w(l,"class","fill-current"),w(l,"stroke","none"),w(l,"x","0"),w(l,"y","50"),w(l,"id","svg_3"),w(l,"font-size","24"),w(l,"font-family","Noto Sans JP"),w(l,"text-anchor","start"),w(l,"xml:space","preserve"),w(_,"class","fill-current"),w(_,"stroke","none"),w(_,"x","0"),w(_,"y","109.99901"),w(_,"id","svg_4"),w(_,"font-size","24"),w(_,"font-family","Noto Sans JP"),w(_,"text-anchor","start"),w(_,"xml:space","preserve"),w(f,"class","fill-current"),w(f,"stroke","none"),w(f,"x","0"),w(f,"y","170"),w(f,"id","svg_5"),w(f,"font-size","24"),w(f,"font-family","Noto Sans JP"),w(f,"text-anchor","start"),w(f,"xml:space","preserve"),w(p,"class","fill-current"),w(p,"stroke","none"),w(p,"x","0"),w(p,"y","230"),w(p,"id","svg_6"),w(p,"font-size","24"),w(p,"font-family","Noto Sans JP"),w(p,"text-anchor","start"),w(p,"xml:space","preserve"),w(j,"stroke-width","5"),w(j,"class","stroke-current"),w(j,"x1","113.53031"),w(j,"y1","222.00012"),w(j,"x2","158.37456"),w(j,"y2","222.00012"),w(j,"id","svg_7"),w(E,"stroke-width","5"),w(E,"class","stroke-current"),w(E,"x1","113.53031"),w(E,"y1","162.00012"),w(E,"x2","158.37456"),w(E,"y2","162.00012"),w(E,"id","svg_8"),w(R,"stroke-width","5"),w(R,"class","stroke-current"),w(R,"x1","113.53031"),w(R,"y1","101.99914"),w(R,"x2","158.37456"),w(R,"y2","101.99914"),w(R,"id","svg_9"),w(V,"stroke-width","5"),w(V,"class","stroke-current"),w(V,"x1","113.53031"),w(V,"y1","42.00012"),w(V,"x2","158.37455"),w(V,"y2","42.00012"),w(V,"id","svg_10"),w(c,"id","svg_11"),w(e,"width","320"),w(e,"height","300"),w(e,"xmlns","http://www.w3.org/2000/svg")},m(I,k){a(I,e,k),Y(e,o),Y(o,s),Y(s,t),Y(o,c),Y(c,n),Y(c,i),Y(i,m),Y(c,l),Y(l,$),Y(c,_),Y(_,u),Y(c,f),Y(f,b),Y(c,p),Y(p,L),Y(c,j),Y(c,E),Y(c,R),Y(c,V)},p:z,i:z,o:z,d(I){I&&r(e)}}}class Is extends Me{constructor(e){super(),Te(this,e,null,Ds,Pe,{})}}function ks(d){let e,o,s,t,c,n,i,m,l,$,_,u,f,b,p,L,j,E,R,V,I,k,A,F;return{c(){e=Le("svg"),o=Le("g"),s=Le("title"),t=te("Layer 1"),c=Le("g"),n=Le("path"),i=Le("text"),m=te("Données"),l=Le("text"),$=te("MéthodeA"),_=Le("text"),u=te("MéthodeB"),f=Le("line"),b=Le("line"),p=Le("g"),L=Le("path"),j=Le("text"),E=te("Données"),R=Le("text"),V=te("MéthodeA"),I=Le("text"),k=te("MéthodeB"),A=Le("line"),F=Le("line"),this.h()},l(X){e=be(X,"svg",{width:!0,height:!0,xmlns:!0});var J=fe(e);o=be(J,"g",{});var le=fe(o);s=be(le,"title",{});var D=fe(s);t=ee(D,"Layer 1"),D.forEach(r),c=be(le,"g",{id:!0});var K=fe(c);n=be(K,"path",{id:!0,d:!0,opacity:!0,stroke:!0,fill:!0}),fe(n).forEach(r),i=be(K,"text",{stroke:!0,fill:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var $e=fe(i);m=ee($e,"Données"),$e.forEach(r),l=be(K,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var pe=fe(l);$=ee(pe,"MéthodeA"),pe.forEach(r),_=be(K,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var Z=fe(_);u=ee(Z,"MéthodeB"),Z.forEach(r),f=be(K,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),fe(f).forEach(r),b=be(K,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),fe(b).forEach(r),K.forEach(r),p=be(le,"g",{id:!0});var ne=fe(p);L=be(ne,"path",{id:!0,d:!0,opacity:!0,stroke:!0,fill:!0}),fe(L).forEach(r),j=be(ne,"text",{stroke:!0,fill:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var me=fe(j);E=ee(me,"Données"),me.forEach(r),R=be(ne,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var y=fe(R);V=ee(y,"MéthodeA"),y.forEach(r),I=be(ne,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var B=fe(I);k=ee(B,"MéthodeB"),B.forEach(r),A=be(ne,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),fe(A).forEach(r),F=be(ne,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),fe(F).forEach(r),ne.forEach(r),le.forEach(r),J.forEach(r),this.h()},h(){w(n,"id","svg_1"),w(n,"d","m170,2.75867l150,0l0,116l-150,0l0,-116z"),w(n,"opacity","undefined"),w(n,"stroke","none"),w(n,"fill","#FFDFB8"),w(i,"stroke","black"),w(i,"fill","black"),w(i,"x","208"),w(i,"y","70"),w(i,"id","svg_2"),w(i,"font-size","24"),w(i,"font-family","Noto Sans JP"),w(i,"text-anchor","start"),w(i,"xml:space","preserve"),w(l,"class","fill-current"),w(l,"stroke","none"),w(l,"x","0"),w(l,"y","40"),w(l,"id","svg_3"),w(l,"font-size","24"),w(l,"font-family","Noto Sans JP"),w(l,"text-anchor","start"),w(l,"xml:space","preserve"),w(_,"class","fill-current"),w(_,"stroke","none"),w(_,"x","0"),w(_,"y","100"),w(_,"id","svg_4"),w(_,"font-size","24"),w(_,"font-family","Noto Sans JP"),w(_,"text-anchor","start"),w(_,"xml:space","preserve"),w(f,"stroke-width","5"),w(f,"class","stroke-current"),w(f,"x1","113.53031"),w(f,"y1","91.75781"),w(f,"x2","158.37456"),w(f,"y2","91.75781"),w(f,"id","svg_9"),w(b,"stroke-width","5"),w(b,"class","stroke-current"),w(b,"x1","113.53031"),w(b,"y1","31.75879"),w(b,"x2","158.37455"),w(b,"y2","31.75879"),w(b,"id","svg_10"),w(c,"id","svg_12"),w(L,"id","svg_13"),w(L,"d","m170,182.07234l150,0l0,116l-150,0l0,-116z"),w(L,"opacity","undefined"),w(L,"stroke","none"),w(L,"fill","#FFDFB8"),w(j,"stroke","black"),w(j,"fill","black"),w(j,"x","208"),w(j,"y","250"),w(j,"id","svg_14"),w(j,"font-size","24"),w(j,"font-family","Noto Sans JP"),w(j,"text-anchor","start"),w(j,"xml:space","preserve"),w(R,"class","fill-current"),w(R,"stroke","none"),w(R,"x","0"),w(R,"y","220"),w(R,"id","svg_15"),w(R,"font-size","24"),w(R,"font-family","Noto Sans JP"),w(R,"text-anchor","start"),w(R,"xml:space","preserve"),w(I,"class","fill-current"),w(I,"stroke","none"),w(I,"x","0"),w(I,"y","280"),w(I,"id","svg_16"),w(I,"font-size","24"),w(I,"font-family","Noto Sans JP"),w(I,"text-anchor","start"),w(I,"xml:space","preserve"),w(A,"stroke-width","5"),w(A,"class","stroke-current"),w(A,"x1","113.53031"),w(A,"y1","271.07148"),w(A,"x2","158.37456"),w(A,"y2","271.07148"),w(A,"id","svg_17"),w(F,"stroke-width","5"),w(F,"class","stroke-current"),w(F,"x1","113.53031"),w(F,"y1","211.07246"),w(F,"x2","158.37455"),w(F,"y2","211.07246"),w(F,"id","svg_18"),w(p,"id","svg_19"),w(e,"width","320"),w(e,"height","300"),w(e,"xmlns","http://www.w3.org/2000/svg")},m(X,J){a(X,e,J),Y(e,o),Y(o,s),Y(s,t),Y(o,c),Y(c,n),Y(c,i),Y(i,m),Y(c,l),Y(l,$),Y(c,_),Y(_,u),Y(c,f),Y(c,b),Y(o,p),Y(p,L),Y(p,j),Y(j,E),Y(p,R),Y(R,V),Y(p,I),Y(I,k),Y(p,A),Y(p,F)},p:z,i:z,o:z,d(X){X&&r(e)}}}class Os extends Me{constructor(e){super(),Te(this,e,null,ks,Pe,{})}}function Vs(d){let e,o="Introduction";return{c(){e=h("h1"),e.textContent=o},l(s){e=C(s,"H1",{"data-svelte-h":!0}),g(e)!=="svelte-v1pk48"&&(e.textContent=o)},m(s,t){a(s,e,t)},p:z,d(s){s&&r(e)}}}function zs(d){let e,o='La <span data-fragment-index="1" class="fragment highlight-red">Programmation</span> Orientée Objet',s,t,c="La programmation, c'est manipuler des données...",n,i,m="<i>Comment structurer ces données et les traitements associés ?</i>",l,$,_=`On commence par poser la question fondamentale. Peu importe le langage, peu importe le projet, \r
			on manipule toujours des données. La vraie question c'est : comment on organise tout ça ?`;return{c(){e=h("h2"),e.innerHTML=o,s=x(),t=h("p"),t.textContent=c,n=x(),i=h("p"),i.innerHTML=m,l=x(),$=h("aside"),$.textContent=_,this.h()},l(u){e=C(u,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-idwyvx"&&(e.innerHTML=o),s=v(u),t=C(u,"P",{"data-fragment-index":!0,class:!0,"data-svelte-h":!0}),g(t)!=="svelte-ccoak9"&&(t.textContent=c),n=v(u),i=C(u,"P",{"data-fragment-index":!0,class:!0,"data-svelte-h":!0}),g(i)!=="svelte-ja2tch"&&(i.innerHTML=m),l=v(u),$=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-1kvz6au"&&($.textContent=_),this.h()},h(){w(t,"data-fragment-index","1"),w(t,"class","fragment"),w(i,"data-fragment-index","2"),w(i,"class","fragment"),w($,"class","notes")},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),a(u,i,f),a(u,l,f),a(u,$,f)},p:z,d(u){u&&(r(e),r(s),r(t),r(n),r(i),r(l),r($))}}}function Us(d){let e,o="La POO en 3 mots",s,t,c='<div class="fragment flex flex-col items-center p-6 bg-accent-950 rounded-lg"><span class="text-6xl mb-4">📦</span> <span class="text-important font-bold">RANGER</span> <span class="text-xl mt-2 text-gray-400">Organiser le code</span></div> <div class="fragment flex flex-col items-center p-6 bg-accent-950 rounded-lg"><span class="text-6xl mb-4">🔒</span> <span class="text-important font-bold">PROTÉGER</span> <span class="text-xl mt-2 text-gray-400">Éviter les erreurs</span></div> <div class="fragment flex flex-col items-center p-6 bg-accent-950 rounded-lg"><span class="text-6xl mb-4">🌳</span> <span class="text-important font-bold">GÉNÉRALISER</span> <span class="text-xl mt-2 text-gray-400">Réutiliser le code</span></div>',n,i,m=`On va voir que la POO apporte 3 bénéfices majeurs, dans cet ordre précis. \r
			D'abord on range, ensuite on protège, et enfin on généralise.\r
			Ces 3 piliers sont la base de tout ce qu'on va voir dans ce module.`;return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("div"),t.innerHTML=c,n=x(),i=h("aside"),i.textContent=m,this.h()},l(l){e=C(l,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-1nirx80"&&(e.textContent=o),s=v(l),t=C(l,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-19dln6f"&&(t.innerHTML=c),n=v(l),i=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-3dwo03"&&(i.textContent=m),this.h()},h(){w(t,"class","flex flex-row justify-around items-center text-3xl mt-10"),w(i,"class","notes")},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),a(l,i,$)},p:z,d(l){l&&(r(e),r(s),r(t),r(n),r(i))}}}function Bs(d){let e,o="📦 RANGER",s,t,c="Premier pilier de la POO",n,i,m="On commence par le premier pilier : ranger. C'est le plus intuitif.";return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),i=h("aside"),i.textContent=m,this.h()},l(l){e=C(l,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-z32rqx"&&(e.textContent=o),s=v(l),t=C(l,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-kfijfp"&&(t.textContent=c),n=v(l),i=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-1iyok1i"&&(i.textContent=m),this.h()},h(){w(e,"class","text-6xl"),w(t,"class","text-3xl text-gray-400"),w(i,"class","notes")},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),a(l,i,$)},p:z,d(l){l&&(r(e),r(s),r(t),r(n),r(i))}}}function Js(d){let e=`
// Des variables partout...
string nomClient = "Jean";
int ageClient = 25;
string emailClient = "jean@mail.com";

string nomProduit = "Ordinateur";
double prixProduit = 999.99;
int stockProduit = 42;

string nomVendeur = "Marie";
string emailVendeur = "marie@shop.com";

// Et des fonctions qui utilisent tout ça...
envoyerFacture(nomClient, emailClient, nomProduit, prixProduit);
notifierVendeur(emailVendeur, nomClient, nomProduit);
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Rs(d){let e,o='Le problème du code "en vrac"',s,t,c,n,i=`Regardez ce code. On a des variables partout, mélangées. \r
			Rien ne dit que nomClient va avec ageClient et emailClient.\r
			Quand le code grossit, c'est le chaos. On ne sait plus quelle variable va avec quelle autre.`,m;return t=new oe({props:{$$slots:{default:[Js]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment),c=x(),n=h("aside"),n.textContent=i,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1iow74n"&&(e.textContent=o),s=v(l),T(t.$$.fragment,l),c=v(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1vg4dbu"&&(n.textContent=i),this.h()},h(){w(n,"class","notes")},m(l,$){a(l,e,$),a(l,s,$),M(t,l,$),a(l,c,$),a(l,n,$),m=!0},p(l,$){const _={};$&1&&(_.$$scope={dirty:$,ctx:l}),t.$set(_)},i(l){m||(P(t.$$.fragment,l),m=!0)},o(l){q(t.$$.fragment,l),m=!1},d(l){l&&(r(e),r(s),r(c),r(n)),H(t,l)}}}function Ns(d){let e=`
class Client {
    string nom;
    int age;
    string email;
}

class Produit {
    string nom;
    double prix;
    int stock;
}

class Vendeur {
    string nom;
    string email;
}

Client jean = new Client("Jean", 25, "jean@mail.com");
Produit ordi = new Produit("Ordinateur", 999.99, 42);
Vendeur marie = new Vendeur("Marie", "marie@shop.com");
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Fs(d){let e,o="La solution : regrouper dans des objets",s,t,c,n,i=`Avec la POO, on regroupe ce qui va ensemble. Un Client a un nom, un âge, un email.\r
			Un Produit a un nom, un prix, un stock. Chaque "boîte" contient ce qui lui appartient.\r
			C'est déjà plus clair, non ?`,m;return t=new oe({props:{lines:"1-5|7-11|13-16|18-20",$$slots:{default:[Ns]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment),c=x(),n=h("aside"),n.textContent=i,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-qf6jcc"&&(e.textContent=o),s=v(l),T(t.$$.fragment,l),c=v(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-6itud3"&&(n.textContent=i),this.h()},h(){w(n,"class","notes")},m(l,$){a(l,e,$),a(l,s,$),M(t,l,$),a(l,c,$),a(l,n,$),m=!0},p(l,$){const _={};$&1&&(_.$$scope={dirty:$,ctx:l}),t.$set(_)},i(l){m||(P(t.$$.fragment,l),m=!0)},o(l){q(t.$$.fragment,l),m=!1},d(l){l&&(r(e),r(s),r(c),r(n)),H(t,l)}}}function Gs(d){let e,o,s="Programmation procédurale",t,c,n="Programmation orientée objet",i,m,l,$,_,u,f,b=`Visuellement, c'est ça la différence. À gauche, les données sont séparées des traitements.\r
			Les fonctions peuvent accéder à n'importe quelle donnée.\r
			À droite, chaque objet contient SES données ET SES traitements.\r
			C'est une vraie boîte autonome.`,p;return m=new Is({}),_=new Os({}),{c(){e=h("div"),o=h("h3"),o.textContent=s,t=x(),c=h("h3"),c.textContent=n,i=x(),S(m.$$.fragment),l=x(),$=h("div"),S(_.$$.fragment),u=x(),f=h("aside"),f.textContent=b,this.h()},l(L){e=C(L,"DIV",{class:!0});var j=fe(e);o=C(j,"H3",{"data-svelte-h":!0}),g(o)!=="svelte-cax56s"&&(o.textContent=s),t=v(j),c=C(j,"H3",{"data-fragment-index":!0,class:!0,"data-svelte-h":!0}),g(c)!=="svelte-1roygcu"&&(c.textContent=n),i=v(j),T(m.$$.fragment,j),l=v(j),$=C(j,"DIV",{"data-fragment-index":!0,class:!0});var E=fe($);T(_.$$.fragment,E),E.forEach(r),j.forEach(r),u=v(L),f=C(L,"ASIDE",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-1llmtkd"&&(f.textContent=b),this.h()},h(){w(c,"data-fragment-index","1"),w(c,"class","fragment"),w($,"data-fragment-index","1"),w($,"class","fragment"),w(e,"class","grid-cols-2 grid justify-items-center items-start"),w(f,"class","notes")},m(L,j){a(L,e,j),Y(e,o),Y(e,t),Y(e,c),Y(e,i),M(m,e,null),Y(e,l),Y(e,$),M(_,$,null),a(L,u,j),a(L,f,j),p=!0},p:z,i(L){p||(P(m.$$.fragment,L),P(_.$$.fragment,L),p=!0)},o(L){q(m.$$.fragment,L),q(_.$$.fragment,L),p=!1},d(L){L&&(r(e),r(u),r(f)),H(m),H(_)}}}function Qs(d){let e,o='<h3>Programmation procédurale</h3> <h3>Programmation orientée objet</h3> <ul><li>Les données et les traitements sont séparés</li> <li class="fragment">Les fonctions accèdent à <span class="text-red-400">tout</span></li> <li class="fragment">Difficile de savoir &quot;qui fait quoi&quot;</li></ul> <ul><li>Les données et les traitements sont regroupés dans un objet</li> <li class="fragment">Les méthodes n&#39;accèdent qu&#39;à <span class="text-green-400">leur objet</span></li> <li class="fragment">Chaque objet est responsable de lui-même</li></ul>',s,t,c="Premier intérêt : le code est mieux organisé",n,i,m=`En procédural, les fonctions peuvent accéder à tout. C'est pratique au début, mais ça devient vite le bazar.\r
			En POO, chaque objet est une entité autonome. Il gère ses propres données avec ses propres méthodes.\r
			C'est le premier bénéfice : on range, on organise.`;return{c(){e=h("div"),e.innerHTML=o,s=x(),t=h("p"),t.textContent=c,n=x(),i=h("aside"),i.textContent=m,this.h()},l(l){e=C(l,"DIV",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-lz1ddw"&&(e.innerHTML=o),s=v(l),t=C(l,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1exegnb"&&(t.textContent=c),n=v(l),i=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-1jxrp5g"&&(i.textContent=m),this.h()},h(){w(e,"class","grid-cols-2 grid justify-items-center items-start"),w(t,"class","fragment font-bold text-accent-200 mt-8"),w(i,"class","notes")},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),a(l,i,$)},p:z,d(l){l&&(r(e),r(s),r(t),r(n),r(i))}}}function ys(d){let e,o="🔒 PROTÉGER",s,t,c="Deuxième pilier de la POO",n,i,m=`Maintenant qu'on a rangé, on va voir le deuxième pilier : protéger.\r
			C'est là que la POO devient vraiment puissante.`;return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),i=h("aside"),i.textContent=m,this.h()},l(l){e=C(l,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-nrad46"&&(e.textContent=o),s=v(l),t=C(l,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1n91bqq"&&(t.textContent=c),n=v(l),i=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-gufwfd"&&(i.textContent=m),this.h()},h(){w(e,"class","text-6xl"),w(t,"class","text-3xl text-gray-400"),w(i,"class","notes")},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),a(l,i,$)},p:z,d(l){l&&(r(e),r(s),r(t),r(n),r(i))}}}function Ks(d){let e=`
string nomPersonne1 = "Jean";
int agePersonne1 = 25;
string nomPersonne2 = "Marie";
int agePersonne2 = 30;

// La fonction attend (nom, age) mais...
void direBonjour(string nom, int valeur) {
    print("Bonjour " + nom + ", vous avez " + valeur + " ans");
}

direBonjour(nomPersonne1, agePersonne1);  // ✅ OK : "Bonjour Jean, vous avez 25 ans"
direBonjour(nomPersonne1, agePersonne2);  // 🐛 Compile... mais BUG !
// "Bonjour Jean, vous avez 30 ans" → C'est l'âge de Marie !
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Ws(d){let e,o="Le problème : les erreurs silencieuses",s,t,c="En procédural, rien ne vous empêche de faire n'importe quoi...",n,i,m,l,$=`Regardez ce code. La fonction direBonjour attend un nom et un âge.\r
			Mais rien ne m'empêche de lui passer l'âge de Marie à la place de celui de Jean !\r
			Le code compile, il s'exécute... mais le résultat est faux.\r
			C'est un bug silencieux, le pire type de bug.`,_;return i=new oe({props:{class:"java",$$slots:{default:[Ks]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),S(i.$$.fragment),m=x(),l=h("aside"),l.textContent=$,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-2a5yxe"&&(e.textContent=o),s=v(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1sotxef"&&(t.textContent=c),n=v(u),T(i.$$.fragment,u),m=v(u),l=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-y6rhv3"&&(l.textContent=$),this.h()},h(){w(l,"class","notes")},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),M(i,u,f),a(u,m,f),a(u,l,f),_=!0},p(u,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:u}),i.$set(b)},i(u){_||(P(i.$$.fragment,u),_=!0)},o(u){q(i.$$.fragment,u),_=!1},d(u){u&&(r(e),r(s),r(t),r(n),r(m),r(l)),H(i,u)}}}function Zs(d){let e=`
// 6 mois plus tard, le code a grossi...
string nomClient = "Jean";
string nomProduit = "Ordinateur";
string nomVendeur = "Marie";
int ageClient = 25;
int stockProduit = 42;
int ancienneteVendeur = 5;
double prixProduit = 999.99;

// Quelle variable va avec quelle autre ?
// C'est quoi le 2ème paramètre déjà ?
envoyerFacture(nomClient, /* ??? */, prixProduit);
calculerRemise(ageClient, /* ou ancienneteVendeur ? */, prixProduit);
notifierStock(nomProduit, stockProduit, /* emailClient ou emailVendeur ? */);
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Ys(d){let e,o="Le problème empire avec le temps...",s,t,c,n,i="Plus le code grossit, plus on se trompe !",m,l,$=`6 mois plus tard, vous avez 50 variables, 30 fonctions.\r
			Vous ne savez plus quelle variable va avec quelle autre.\r
			Vous vous trompez de paramètre, le code compile, mais ça ne marche pas.\r
			Vous passez des heures à débugger.`,_;return t=new oe({props:{class:"java",lines:"1-8|10-15",$$slots:{default:[Zs]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment),c=x(),n=h("p"),n.textContent=i,m=x(),l=h("aside"),l.textContent=$,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-12am7ex"&&(e.textContent=o),s=v(u),T(t.$$.fragment,u),c=v(u),n=C(u,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1u4dzf0"&&(n.textContent=i),m=v(u),l=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-1fxmg3q"&&(l.textContent=$),this.h()},h(){w(n,"class","fragment text-red-400 font-bold"),w(l,"class","notes")},m(u,f){a(u,e,f),a(u,s,f),M(t,u,f),a(u,c,f),a(u,n,f),a(u,m,f),a(u,l,f),_=!0},p(u,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:u}),t.$set(b)},i(u){_||(P(t.$$.fragment,u),_=!0)},o(u){q(t.$$.fragment,u),_=!1},d(u){u&&(r(e),r(s),r(c),r(n),r(m),r(l)),H(t,u)}}}function Xs(d){let e=`
class Personne {
    string nom;    // Appartient à Personne
    int age;       // Appartient à Personne
    
    void direBonjour() {
        // Utilise UNIQUEMENT les données de CET objet
        print("Bonjour " + nom + ", vous avez " + age + " ans");
        // Impossible d'utiliser une variable extérieure ici !
        // Elle n'existe pas dans Personne
    }
}

Personne jean = new Personne("Jean", 25);
Personne marie = new Personne("Marie", 30);

jean.direBonjour();   // ✅ Utilise jean.nom et jean.age
marie.direBonjour();  // ✅ Utilise marie.nom et marie.age
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function el(d){let e,o="La solution POO : impossible de se tromper",s,t,c,n,i=`En POO, la méthode direBonjour est DANS l'objet Personne.\r
			Elle ne prend pas de paramètres, elle utilise directement les données de l'objet.\r
			Chaque personne a sa propre méthode qui utilise SES données.\r
			Impossible de mélanger les données de Jean et Marie.`,m;return t=new oe({props:{class:"java",lines:"1-11|13-17",$$slots:{default:[Xs]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment),c=x(),n=h("aside"),n.textContent=i,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1l4bme7"&&(e.textContent=o),s=v(l),T(t.$$.fragment,l),c=v(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1w7le8t"&&(n.textContent=i),this.h()},h(){w(n,"class","notes")},m(l,$){a(l,e,$),a(l,s,$),M(t,l,$),a(l,c,$),a(l,n,$),m=!0},p(l,$){const _={};$&1&&(_.$$scope={dirty:$,ctx:l}),t.$set(_)},i(l){m||(P(t.$$.fragment,l),m=!0)},o(l){q(t.$$.fragment,l),m=!1},d(l){l&&(r(e),r(s),r(c),r(n)),H(t,l)}}}function tl(d){let e=`
//
direBonjour(nom1, age1);  // OK
direBonjour(nom1, age2);  // BUG !
// Rien ne m'empêche de mélanger
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function sl(d){let e=`
//
jean.direBonjour();
marie.direBonjour();
// Chacun utilise SES données
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function ll(d){let e,o="Comparaison directe",s,t,c,n,i="❌ Procédural",m,l,$,_,u,f="✅ POO",b,p,L,j,E="Les méthodes ne manipulent que les données de LEUR objet",R,V,I=`C'est ça la vraie puissance. En procédural, vous pouvez mélanger les données de personnes différentes.\r
			En POO, chaque méthode n'accède qu'aux données de son objet.\r
			Jean utilise les données de Jean, Marie utilise les données de Marie. Impossible de se tromper.`,k;return l=new oe({props:{class:"java",$$slots:{default:[tl]},$$scope:{ctx:d}}}),p=new oe({props:{class:"java",$$slots:{default:[sl]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("div"),c=h("div"),n=h("h4"),n.textContent=i,m=x(),S(l.$$.fragment),$=x(),_=h("div"),u=h("h4"),u.textContent=f,b=x(),S(p.$$.fragment),L=x(),j=h("p"),j.textContent=E,R=x(),V=h("aside"),V.textContent=I,this.h()},l(A){e=C(A,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-r1ae78"&&(e.textContent=o),s=v(A),t=C(A,"DIV",{class:!0});var F=fe(t);c=C(F,"DIV",{});var X=fe(c);n=C(X,"H4",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-14hrfbc"&&(n.textContent=i),m=v(X),T(l.$$.fragment,X),X.forEach(r),$=v(F),_=C(F,"DIV",{});var J=fe(_);u=C(J,"H4",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-o82dwg"&&(u.textContent=f),b=v(J),T(p.$$.fragment,J),J.forEach(r),F.forEach(r),L=v(A),j=C(A,"P",{class:!0,"data-svelte-h":!0}),g(j)!=="svelte-2a01z8"&&(j.textContent=E),R=v(A),V=C(A,"ASIDE",{class:!0,"data-svelte-h":!0}),g(V)!=="svelte-1qn8314"&&(V.textContent=I),this.h()},h(){w(n,"class","text-red-400"),w(u,"class","text-green-400"),w(t,"class","grid-cols-2 grid justify-items-center items-start gap-4"),w(j,"class","fragment text-accent-200 font-bold text-3xl mt-8"),w(V,"class","notes")},m(A,F){a(A,e,F),a(A,s,F),a(A,t,F),Y(t,c),Y(c,n),Y(c,m),M(l,c,null),Y(t,$),Y(t,_),Y(_,u),Y(_,b),M(p,_,null),a(A,L,F),a(A,j,F),a(A,R,F),a(A,V,F),k=!0},p(A,F){const X={};F&1&&(X.$$scope={dirty:F,ctx:A}),l.$set(X);const J={};F&1&&(J.$$scope={dirty:F,ctx:A}),p.$set(J)},i(A){k||(P(l.$$.fragment,A),P(p.$$.fragment,A),k=!0)},o(A){q(l.$$.fragment,A),q(p.$$.fragment,A),k=!1},d(A){A&&(r(e),r(s),r(t),r(L),r(j),r(R),r(V)),H(l),H(p)}}}function nl(d){let e=`
string nom = "Jean";
int age = 25;
string nom2 = "Pierre";
int age2 = 30;

void direBonjour(string n, int a){
    print("Bonjour " + n 
        + ", vous avez " + a + " ans");
}

direBonjour(nom, age);
direBonjour(nom2, age2);
// direBonjour(nom, age2); // Bug !
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function il(d){let e=`
class Personne {
    string nom;
    int age;
    
    void direBonjour(){
        print("Bonjour " + nom 
            + ", vous avez " + age + " ans");
    }
}
Personne p1 = new Personne("Jean", 25);
Personne p2 = new Personne("Pierre", 30);
p1.direBonjour();  // Utilise p1.nom, p1.age
p2.direBonjour();  // Utilise p2.nom, p2.age
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function rl(d){let e,o="Exemple complet : avant / après",s,t,c,n="Procédural",i,m,l="Orienté Objet",$,_,u,f,b,p,L=`À gauche, on pourrait se tromper et appeler direBonjour avec nom et age2. Bug silencieux.\r
			À droite, chaque Personne est un objet autonome. \r
			Quand on appelle p1.direBonjour(), c'est TOUJOURS les données de p1 qui sont utilisées.\r
			Impossible de mélanger.`,j;return _=new oe({props:{class:"java",$$slots:{default:[nl]},$$scope:{ctx:d}}}),f=new oe({props:{class:"java fragment","data-fragment-index":"1",lines:"1-9|10-13",$$slots:{default:[il]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("div"),c=h("h4"),c.textContent=n,i=x(),m=h("h4"),m.textContent=l,$=x(),S(_.$$.fragment),u=x(),S(f.$$.fragment),b=x(),p=h("aside"),p.textContent=L,this.h()},l(E){e=C(E,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-11nvxg1"&&(e.textContent=o),s=v(E),t=C(E,"DIV",{class:!0});var R=fe(t);c=C(R,"H4",{"data-svelte-h":!0}),g(c)!=="svelte-1bk3u6h"&&(c.textContent=n),i=v(R),m=C(R,"H4",{class:!0,"data-fragment-index":!0,"data-svelte-h":!0}),g(m)!=="svelte-1rzdg3v"&&(m.textContent=l),$=v(R),T(_.$$.fragment,R),u=v(R),T(f.$$.fragment,R),R.forEach(r),b=v(E),p=C(E,"ASIDE",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-12fdd0p"&&(p.textContent=L),this.h()},h(){w(m,"class","fragment"),w(m,"data-fragment-index","1"),w(t,"class","grid-cols-2 grid justify-items-center items-start"),w(p,"class","notes")},m(E,R){a(E,e,R),a(E,s,R),a(E,t,R),Y(t,c),Y(t,i),Y(t,m),Y(t,$),M(_,t,null),Y(t,u),M(f,t,null),a(E,b,R),a(E,p,R),j=!0},p(E,R){const V={};R&1&&(V.$$scope={dirty:R,ctx:E}),_.$set(V);const I={};R&1&&(I.$$scope={dirty:R,ctx:E}),f.$set(I)},i(E){j||(P(_.$$.fragment,E),P(f.$$.fragment,E),j=!0)},o(E){q(_.$$.fragment,E),q(f.$$.fragment,E),j=!1},d(E){E&&(r(e),r(s),r(t),r(b),r(p)),H(_),H(f)}}}function al(d){let e,o="Récapitulatif : Ranger + Protéger",s,t,c='<div class="p-6 bg-accent-950 rounded-lg"><h4 class="text-important">📦 RANGER</h4> <ul class="text-2xl"><li>Données regroupées par entité</li> <li>Code plus lisible</li> <li>Plus facile à maintenir</li></ul></div> <div class="p-6 bg-accent-950 rounded-lg"><h4 class="text-important">🔒 PROTÉGER</h4> <ul class="text-2xl"><li>Méthodes liées à leurs données</li> <li>Impossible de se tromper de paramètre</li> <li>Le compilateur vous aide</li></ul></div>',n,i,m="Mais ce n'est pas tout...",l,$,_=`On a vu les deux premiers piliers. On range le code, on le protège des erreurs.\r
			Mais la POO offre un troisième bénéfice, peut-être le plus puissant : la généralisation.`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("div"),t.innerHTML=c,n=x(),i=h("p"),i.textContent=m,l=x(),$=h("aside"),$.textContent=_,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-wok7w1"&&(e.textContent=o),s=v(u),t=C(u,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1hsd1m7"&&(t.innerHTML=c),n=v(u),i=C(u,"P",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-3ya9un"&&(i.textContent=m),l=v(u),$=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-9i3rwm"&&($.textContent=_),this.h()},h(){w(t,"class","flex flex-row justify-around items-start mt-8"),w(i,"class","fragment text-3xl mt-8"),w($,"class","notes")},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),a(u,i,f),a(u,l,f),a(u,$,f)},p:z,d(u){u&&(r(e),r(s),r(t),r(n),r(i),r(l),r($))}}}function ul(d){let e,o="🌳 GÉNÉRALISER",s,t,c="Troisième pilier de la POO",n,i,m=`Le troisième pilier, c'est la généralisation. C'est là qu'on va parler d'héritage, d'abstraction.\r
			C'est ce qui rend la POO vraiment unique.`;return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),i=h("aside"),i.textContent=m,this.h()},l(l){e=C(l,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-ptnj3f"&&(e.textContent=o),s=v(l),t=C(l,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-188gx3t"&&(t.textContent=c),n=v(l),i=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-p7kbya"&&(i.textContent=m),this.h()},h(){w(e,"class","text-6xl"),w(t,"class","text-3xl text-gray-400"),w(i,"class","notes")},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),a(l,i,$)},p:z,d(l){l&&(r(e),r(s),r(t),r(n),r(i))}}}function ol(d){let e,o="La programmation orientée objet",s,t,c="Qu'est-ce que c'est ?",n,i,m=`La programmation orientée objet est un <span class="text-important">paradigme de programmation</span>, 
			c&#39;est-à-dire une manière de programmer, qui repose sur la notion d&#39;objets.`,l,$,_="Un objet est une entité qui regroupe des données et des traitements qui lui sont associés.",u,f,b='Un objet est censé représenter <span class="text-important">une entité du monde réel</span>.',p,L,j="Il n'est pas obligatoire de programmer en POO !",E,R,V=`La POO c'est un paradigme, une façon de penser le code.\r
			L'idée c'est de modéliser le monde réel : des personnes, des voitures, des produits...\r
			Ce n'est pas obligatoire, mais c'est très puissant quand on sait s'en servir.`;return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("h3"),t.textContent=c,n=x(),i=h("p"),i.innerHTML=m,l=x(),$=h("p"),$.textContent=_,u=x(),f=h("p"),f.innerHTML=b,p=x(),L=h("p"),L.textContent=j,E=x(),R=h("aside"),R.textContent=V,this.h()},l(I){e=C(I,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-18a0qr8"&&(e.textContent=o),s=v(I),t=C(I,"H3",{"data-svelte-h":!0}),g(t)!=="svelte-a8zqi8"&&(t.textContent=c),n=v(I),i=C(I,"P",{"data-svelte-h":!0}),g(i)!=="svelte-7kqrts"&&(i.innerHTML=m),l=v(I),$=C(I,"P",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-18xem7k"&&($.textContent=_),u=v(I),f=C(I,"P",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-1bfxiwy"&&(f.innerHTML=b),p=v(I),L=C(I,"P",{class:!0,"data-svelte-h":!0}),g(L)!=="svelte-xrfz5"&&(L.textContent=j),E=v(I),R=C(I,"ASIDE",{class:!0,"data-svelte-h":!0}),g(R)!=="svelte-lbwg3w"&&(R.textContent=V),this.h()},h(){w($,"class","fragment"),w(f,"class","fragment"),w(L,"class","fragment text-accent-200 font-bold"),w(R,"class","notes")},m(I,k){a(I,e,k),a(I,s,k),a(I,t,k),a(I,n,k),a(I,i,k),a(I,l,k),a(I,$,k),a(I,u,k),a(I,f,k),a(I,p,k),a(I,L,k),a(I,E,k),a(I,R,k)},p:z,d(I){I&&(r(e),r(s),r(t),r(n),r(i),r(l),r($),r(u),r(f),r(p),r(L),r(E),r(R))}}}function $l(d){let e,o="Représenter le monde réel",s,t,c="Un objet est censé représenter une entité du monde réel.",n,i,m=`Par exemple, <span data-fragment-index="3" class="fragment highlight-red">un chien, un chat</span>,
			<span data-fragment-index="3" class="fragment highlight-green">une moto, une voiture</span>,
			<span data-fragment-index="3" class="fragment highlight-blue">un ennemi, un PNJ</span>`,l,$,_=`Ou plus <span class="underline font-bold">génériquement</span>, un
			<span class="text-red-500">animal</span>, un <span class="text-green-500">véhicule</span>,
			un <span class="text-blue-500">personnage</span>`,u,f,b=`On modélise le monde réel. Un chien, un chat, ce sont des objets.\r
			Mais on peut aller plus loin : un chien et un chat, c'est un animal.\r
			Une moto et une voiture, c'est un véhicule.\r
			C'est ça la généralisation : trouver le concept commun.`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),i=h("p"),i.innerHTML=m,l=x(),$=h("p"),$.innerHTML=_,u=x(),f=h("aside"),f.textContent=b,this.h()},l(p){e=C(p,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1nsqnl5"&&(e.textContent=o),s=v(p),t=C(p,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1te9lxn"&&(t.textContent=c),n=v(p),i=C(p,"P",{class:!0,"data-fragment-index":!0,"data-svelte-h":!0}),g(i)!=="svelte-12p87au"&&(i.innerHTML=m),l=v(p),$=C(p,"P",{class:!0,"data-fragment-index":!0,"data-svelte-h":!0}),g($)!=="svelte-oi8m30"&&($.innerHTML=_),u=v(p),f=C(p,"ASIDE",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-4g27ls"&&(f.textContent=b),this.h()},h(){w(t,"class","font-bold text-accent-200"),w(i,"class","fragment"),w(i,"data-fragment-index","2"),w($,"class","fragment"),w($,"data-fragment-index","3"),w(f,"class","notes")},m(p,L){a(p,e,L),a(p,s,L),a(p,t,L),a(p,n,L),a(p,i,L),a(p,l,L),a(p,$,L),a(p,u,L),a(p,f,L)},p:z,d(p){p&&(r(e),r(s),r(t),r(n),r(i),r(l),r($),r(u),r(f))}}}function fl(d){let e=`
class Guerrier { 
    void attaquer() {...}
    void seDeplacer() {...}
}
class Mage { 
    void attaquer() {...}
    void seDeplacer() {...}
}
class Archer { 
    void attaquer() {...}
    void seDeplacer() {...}
}
// Code dupliqué partout !
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function cl(d){let e=`
class Personnage {
    void seDeplacer() {...}
    // Code commun une seule fois
}
class Guerrier extends Personnage { 
    void attaquer() {...}
}
class Mage extends Personnage { 
    void attaquer() {...}
}
class Archer extends Personnage { 
    void attaquer() {...}
}
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function pl(d){let e,o="Pourquoi généraliser ?",s,t,c="Imaginons que vous codez un jeu vidéo...",n,i,m,l,$="❌ Sans généralisation",_,u,f,b,p,L="✅ Avec généralisation",j,E,R,V,I=`Sans généralisation, on duplique le code. Chaque personnage a sa méthode seDeplacer, même si c'est la même.\r
			Avec la généralisation, on met le code commun dans une classe parente.\r
			Si on change seDeplacer, on le change une seule fois, et tous les personnages en bénéficient.`,k;return u=new oe({props:{class:"java",$$slots:{default:[fl]},$$scope:{ctx:d}}}),E=new oe({props:{class:"java",$$slots:{default:[cl]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),i=h("div"),m=h("div"),l=h("h4"),l.textContent=$,_=x(),S(u.$$.fragment),f=x(),b=h("div"),p=h("h4"),p.textContent=L,j=x(),S(E.$$.fragment),R=x(),V=h("aside"),V.textContent=I,this.h()},l(A){e=C(A,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1tyfy6u"&&(e.textContent=o),s=v(A),t=C(A,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1piptso"&&(t.textContent=c),n=v(A),i=C(A,"DIV",{class:!0});var F=fe(i);m=C(F,"DIV",{class:!0});var X=fe(m);l=C(X,"H4",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-1dno5ot"&&(l.textContent=$),_=v(X),T(u.$$.fragment,X),X.forEach(r),f=v(F),b=C(F,"DIV",{class:!0});var J=fe(b);p=C(J,"H4",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-11tuyq2"&&(p.textContent=L),j=v(J),T(E.$$.fragment,J),J.forEach(r),F.forEach(r),R=v(A),V=C(A,"ASIDE",{class:!0,"data-svelte-h":!0}),g(V)!=="svelte-1xj81ej"&&(V.textContent=I),this.h()},h(){w(l,"class","text-red-400"),w(m,"class","fragment"),w(p,"class","text-green-400"),w(b,"class","fragment"),w(i,"class","grid-cols-2 grid gap-8 mt-8"),w(V,"class","notes")},m(A,F){a(A,e,F),a(A,s,F),a(A,t,F),a(A,n,F),a(A,i,F),Y(i,m),Y(m,l),Y(m,_),M(u,m,null),Y(i,f),Y(i,b),Y(b,p),Y(b,j),M(E,b,null),a(A,R,F),a(A,V,F),k=!0},p(A,F){const X={};F&1&&(X.$$scope={dirty:F,ctx:A}),u.$set(X);const J={};F&1&&(J.$$scope={dirty:F,ctx:A}),E.$set(J)},i(A){k||(P(u.$$.fragment,A),P(E.$$.fragment,A),k=!0)},o(A){q(u.$$.fragment,A),q(E.$$.fragment,A),k=!1},d(A){A&&(r(e),r(s),r(t),r(n),r(i),r(R),r(V)),H(u),H(E)}}}function ml(d){let e,o="La généricité",s,t,c="Généralisez vos concepts !",n,i,m='<ul><li><a href="#">Animal</a> <ul><li><a>Chien</a></li> <li><a>Chat</a></li></ul></li> <li><a href="#">Véhicule</a> <ul><li><a>Voiture</a></li> <li><a>Moto</a></li> <li class="fragment" data-fragment-index="1"><a>Bateau</a></li></ul></li> <li><a href="#">Personnage</a> <ul><li><a>Ennemi</a> <ul class="fragment" data-fragment-index="1"><li><a>Monstre</a></li> <li><a>Boss</a></li></ul></li> <li><a>PNJ</a></li></ul></li></ul>',l,$,_=`On peut représenter ça sous forme d'arbre. Animal se décline en Chien et Chat.\r
			Véhicule se décline en Voiture, Moto, et pourquoi pas Bateau demain.\r
			Personnage se décline en Ennemi et PNJ, et Ennemi peut lui-même se décliner en Monstre et Boss.\r
			C'est ce qu'on appelle l'héritage : les enfants héritent des caractéristiques du parent.`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),i=h("div"),i.innerHTML=m,l=x(),$=h("aside"),$.textContent=_,this.h()},l(u){e=C(u,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1t0g1h3"&&(e.textContent=o),s=v(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-ptm47t"&&(t.textContent=c),n=v(u),i=C(u,"DIV",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-18iior2"&&(i.innerHTML=m),l=v(u),$=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-nieicf"&&($.textContent=_),this.h()},h(){w(e,"class","uppercase"),w(i,"class","tree scale-150"),w($,"class","notes")},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),a(u,i,f),a(u,l,f),a(u,$,f)},p:z,d(u){u&&(r(e),r(s),r(t),r(n),r(i),r(l),r($))}}}function dl(d){let e,o="L'héritage : le cœur de la POO",s,t,c="Quand <code>Voiture</code> hérite de <code>Véhicule</code> :",n,i,m='<li class="fragment">✅ Elle récupère automatiquement toutes les données de Véhicule</li> <li class="fragment">✅ Elle récupère automatiquement toutes les méthodes de Véhicule</li> <li class="fragment">✅ Elle peut ajouter ses propres données (nbPortes, nbPlaces...)</li> <li class="fragment">✅ Elle peut modifier le comportement hérité si besoin</li>',l,$,_="Écrivez le code une fois, réutilisez-le partout !",u,f,b=`L'héritage c'est ça : on écrit le code une fois dans le parent, et tous les enfants en bénéficient.\r
			Si on ajoute un attribut "couleur" à Véhicule, Voiture et Moto l'ont automatiquement.\r
			C'est un gain de temps énorme, et surtout, moins de bugs car moins de code dupliqué.`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c,n=x(),i=h("ul"),i.innerHTML=m,l=x(),$=h("p"),$.textContent=_,u=x(),f=h("aside"),f.textContent=b,this.h()},l(p){e=C(p,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1lb9yfa"&&(e.textContent=o),s=v(p),t=C(p,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1bwq09e"&&(t.innerHTML=c),n=v(p),i=C(p,"UL",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-xxefp4"&&(i.innerHTML=m),l=v(p),$=C(p,"P",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-74izuf"&&($.textContent=_),u=v(p),f=C(p,"ASIDE",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-1tecwv5"&&(f.textContent=b),this.h()},h(){w(i,"class","text-2xl"),w($,"class","fragment text-accent-200 font-bold mt-8"),w(f,"class","notes")},m(p,L){a(p,e,L),a(p,s,L),a(p,t,L),a(p,n,L),a(p,i,L),a(p,l,L),a(p,$,L),a(p,u,L),a(p,f,L)},p:z,d(p){p&&(r(e),r(s),r(t),r(n),r(i),r(l),r($),r(u),r(f))}}}function vl(d){let e,o="L'abstraction : penser au futur",s,t,c='En POO, généraliser s&#39;appelle <span class="text-important">abstraire, faire une abstraction</span>',n,i,m="C'est anticiper les évolutions de votre code.",l,$,_=`Abstraire, c'est trouver le concept commun entre plusieurs choses.\r
			Mais c'est aussi penser au futur : qu'est-ce que mon client va me demander demain ?`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c,n=x(),i=h("p"),i.textContent=m,l=x(),$=h("aside"),$.textContent=_,this.h()},l(u){e=C(u,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1rpalwv"&&(e.textContent=o),s=v(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1n8l9pz"&&(t.innerHTML=c),n=v(u),i=C(u,"P",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-44luki"&&(i.textContent=m),l=v(u),$=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-1c6mp89"&&($.textContent=_),this.h()},h(){w(e,"class","uppercase"),w(i,"class","fragment"),w($,"class","notes")},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),a(u,i,f),a(u,l,f),a(u,$,f)},p:z,d(u){u&&(r(e),r(s),r(t),r(n),r(i),r(l),r($))}}}function xl(d){let e,o="Exemple concret : location de voiture",s,t,c='<span class="text-important">Situation :</span> On vous demande de coder un système de location de voiture.<br/><br/> <span class="fragment">📅 <b>6 mois plus tard :</b> &quot;On aimerait aussi proposer des motos !&quot;</span><br/> <span class="fragment">📅 <b>1 an plus tard :</b> &quot;Et des vélos électriques !&quot;</span><br/> <span class="fragment">📅 <b>2 ans plus tard :</b> &quot;Et des accessoires : sièges auto, porte-vélos, chaînes neige...&quot;</span>',n,i,m='Si vous aviez anticipé, vous auriez codé "Véhicule" dès le départ !',l,$,_=`C'est un scénario classique. On vous demande de gérer des voitures, mais évidemment, \r
			ça va évoluer. Motos, vélos, accessoires...\r
			Si vous codez "Voiture" partout, vous allez devoir tout refaire.\r
			Si vous codez "Véhicule" dès le départ, ajouter une Moto c'est 5 minutes.`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c,n=x(),i=h("p"),i.textContent=m,l=x(),$=h("aside"),$.textContent=_,this.h()},l(u){e=C(u,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1fhmnzb"&&(e.textContent=o),s=v(u),t=C(u,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-oek129"&&(t.innerHTML=c),n=v(u),i=C(u,"P",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-m4py0l"&&(i.textContent=m),l=v(u),$=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-3xo8vv"&&($.textContent=_),this.h()},h(){w(e,"class","uppercase"),w(t,"class","text-start text-[28px] p-4 bg-accent-950 font-serif rounded-lg"),w(i,"class","fragment text-accent-200 font-bold mt-6"),w($,"class","notes")},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),a(u,i,f),a(u,l,f),a(u,$,f)},p:z,d(u){u&&(r(e),r(s),r(t),r(n),r(i),r(l),r($))}}}function _l(d){let e=`
// Code naïf : tout est spécifique à Voiture
class Voiture {
    double prixJour;
    boolean disponible;
    int km;
    String immatriculation;
    int nbPortes;      // Spécifique Voiture
    int nbPlaces;      // Spécifique Voiture
}

// Gestion de location
void louerVoiture(Voiture v, Client c) {...}
void retournerVoiture(Voiture v) {...}
double calculerPrixVoiture(Voiture v, int nbJours) {...}
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Cl(d){let e,o="Le piège du code non généralisé",s,t,c,n,i="Demain on ajoute les motos... on doit tout dupliquer ? 😱",m,l,$=`Voilà le piège. On a codé tout autour de Voiture.\r
			Si on veut ajouter Moto, il faut créer louerMoto, retournerMoto, calculerPrixMoto...\r
			C'est du code dupliqué, c'est des bugs, c'est un cauchemar.`,_;return t=new oe({props:{class:"java",$$slots:{default:[_l]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment),c=x(),n=h("p"),n.textContent=i,m=x(),l=h("aside"),l.textContent=$,this.h()},l(u){e=C(u,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1h7w9x1"&&(e.textContent=o),s=v(u),T(t.$$.fragment,u),c=v(u),n=C(u,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1psvyp1"&&(n.textContent=i),m=v(u),l=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-ccmilh"&&(l.textContent=$),this.h()},h(){w(e,"class","uppercase"),w(n,"class","fragment text-red-400 font-bold"),w(l,"class","notes")},m(u,f){a(u,e,f),a(u,s,f),M(t,u,f),a(u,c,f),a(u,n,f),a(u,m,f),a(u,l,f),_=!0},p(u,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:u}),t.$set(b)},i(u){_||(P(t.$$.fragment,u),_=!0)},o(u){q(t.$$.fragment,u),_=!1},d(u){u&&(r(e),r(s),r(c),r(n),r(m),r(l)),H(t,u)}}}function hl(d){let e=`
			@startuml
			!theme crt-amber
			skinparam backgroundColor transparent
			abstract class Vehicule {		
				+ double prixJour
				+ boolean disponible
				+ int km
				+ String immatriculation
				+ void louer()
				+ void retourner()
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
			@enduml
			`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function gl(d){let e,o="Étape 1 : Créer la hiérarchie Véhicule",s,t,c="On commence par regrouper Voiture et Moto sous Véhicule",n,i,m,l,$="<b>Voiture</b> est un <b>Véhicule</b> → elle hérite de prixJour, disponible, louer()...",_,u,f=`Première étape : on crée Véhicule qui contient tout ce qui est commun.\r
			Voiture et Moto héritent de Véhicule. \r
			Donc Voiture EST UN Véhicule. Elle a automatiquement prixJour, disponible, km, immatriculation.\r
			Elle a aussi les méthodes louer() et retourner() sans les recoder.`,b;return i=new De({props:{$$slots:{default:[hl]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),S(i.$$.fragment),m=x(),l=h("p"),l.innerHTML=$,_=x(),u=h("aside"),u.textContent=f,this.h()},l(p){e=C(p,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1uw0g5w"&&(e.textContent=o),s=v(p),t=C(p,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1ko5xlx"&&(t.textContent=c),n=v(p),T(i.$$.fragment,p),m=v(p),l=C(p,"P",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-1hq4dgl"&&(l.innerHTML=$),_=v(p),u=C(p,"ASIDE",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-1watvdw"&&(u.textContent=f),this.h()},h(){w(e,"class","uppercase"),w(l,"class","fragment text-accent-200"),w(u,"class","notes")},m(p,L){a(p,e,L),a(p,s,L),a(p,t,L),a(p,n,L),M(i,p,L),a(p,m,L),a(p,l,L),a(p,_,L),a(p,u,L),b=!0},p(p,L){const j={};L&1&&(j.$$scope={dirty:L,ctx:p}),i.$set(j)},i(p){b||(P(i.$$.fragment,p),b=!0)},o(p){q(i.$$.fragment,p),b=!1},d(p){p&&(r(e),r(s),r(t),r(n),r(m),r(l),r(_),r(u)),H(i,p)}}}function bl(d){let e=`
			@startuml
			!theme crt-amber
			skinparam backgroundColor transparent
			abstract class Vehicule {		
				+ double prixJour
				+ boolean disponible
				+ int km
				+ String immatriculation
			}
			class Voiture {
				+ int nbPortes
			}
			class Moto {
				+ int cylindree
			}
			Vehicule <|-- Voiture
			Vehicule <|-- Moto
			@enduml
			`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Ll(d){let e=`
			@startuml
			!theme crt-amber
			skinparam backgroundColor transparent
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
			Accessoire <|-- SiegeAuto
			Accessoire <|-- PorteVelo
			@enduml
			`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function wl(d){let e,o="Étape 2 : Ajouter les Accessoires",s,t,c="Les accessoires ont aussi un prix et une disponibilité...",n,i,m,l,$,_,u,f="⚠️ prixJour et disponible sont dupliqués dans Véhicule ET Accessoire !",b,p,L=`On ajoute les accessoires. SiègeAuto et PorteVelo héritent de Accessoire.\r
			Mais attendez... prixJour et disponible sont dans Véhicule ET dans Accessoire.\r
			C'est de la duplication ! On peut faire mieux.`,j;return m=new De({props:{$$slots:{default:[bl]},$$scope:{ctx:d}}}),$=new De({props:{$$slots:{default:[Ll]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),i=h("div"),S(m.$$.fragment),l=x(),S($.$$.fragment),_=x(),u=h("p"),u.textContent=f,b=x(),p=h("aside"),p.textContent=L,this.h()},l(E){e=C(E,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-dpgmf6"&&(e.textContent=o),s=v(E),t=C(E,"P",{"data-svelte-h":!0}),g(t)!=="svelte-447yeq"&&(t.textContent=c),n=v(E),i=C(E,"DIV",{class:!0});var R=fe(i);T(m.$$.fragment,R),l=v(R),T($.$$.fragment,R),R.forEach(r),_=v(E),u=C(E,"P",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-138h9qb"&&(u.textContent=f),b=v(E),p=C(E,"ASIDE",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-16xd6el"&&(p.textContent=L),this.h()},h(){w(e,"class","uppercase"),w(i,"class","flex flex-row justify-center items-start gap-8"),w(u,"class","fragment text-red-400 font-bold mt-4"),w(p,"class","notes")},m(E,R){a(E,e,R),a(E,s,R),a(E,t,R),a(E,n,R),a(E,i,R),M(m,i,null),Y(i,l),M($,i,null),a(E,_,R),a(E,u,R),a(E,b,R),a(E,p,R),j=!0},p(E,R){const V={};R&1&&(V.$$scope={dirty:R,ctx:E}),m.$set(V);const I={};R&1&&(I.$$scope={dirty:R,ctx:E}),$.$set(I)},i(E){j||(P(m.$$.fragment,E),P($.$$.fragment,E),j=!0)},o(E){q(m.$$.fragment,E),q($.$$.fragment,E),j=!1},d(E){E&&(r(e),r(s),r(t),r(n),r(i),r(_),r(u),r(b),r(p)),H(m),H($)}}}function Hl(d){let e=`
			@startuml
			!theme crt-green
			skinparam backgroundColor transparent
			abstract class Louable{
				+ double prixJour
				+ boolean disponible
				+ void louer()
				+ void retourner()
				+ double calculerPrix(int nbJours)
			}
			abstract class Vehicule extends Louable{		
				+ int km
				+ String immatriculation
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
			Accessoire <|-- SiegeAuto
			Accessoire <|-- PorteVelo
			
			@enduml
			`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function ql(d){let e,o="Étape 3 : Abstraire encore plus avec Louable",s,t,c='Véhicule et Accessoire ont des points communs → on crée <span class="text-important">Louable</span>',n,i,m,l,$=`On crée Louable qui contient prixJour, disponible, et les méthodes louer, retourner, calculerPrix.\r
			Véhicule hérite de Louable, et Accessoire aussi.\r
			Du coup Voiture hérite de Véhicule qui hérite de Louable : Voiture a TOUT !`,_;return i=new De({props:{$$slots:{default:[Hl]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c,n=x(),S(i.$$.fragment),m=x(),l=h("aside"),l.textContent=$,this.h()},l(u){e=C(u,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-14ipspf"&&(e.textContent=o),s=v(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1wr25ud"&&(t.innerHTML=c),n=v(u),T(i.$$.fragment,u),m=v(u),l=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-12fyek1"&&(l.textContent=$),this.h()},h(){w(e,"class","uppercase"),w(l,"class","notes")},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),M(i,u,f),a(u,m,f),a(u,l,f),_=!0},p(u,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:u}),i.$set(b)},i(u){_||(P(i.$$.fragment,u),_=!0)},o(u){q(i.$$.fragment,u),_=!1},d(u){u&&(r(e),r(s),r(t),r(n),r(m),r(l)),H(i,u)}}}function Pl(d){let e,o="Visualisons la chaîne d'héritage",s,t,c="Une <b>Voiture</b> c&#39;est quoi maintenant ?",n,i,m='<div class="fragment p-4 bg-green-950 rounded-lg mb-2"><b>Voiture</b> hérite de <b>Véhicule</b></div> <div class="fragment text-4xl">↓</div> <div class="fragment p-4 bg-blue-950 rounded-lg mb-2"><b>Véhicule</b> hérite de <b>Louable</b></div> <div class="fragment text-4xl">↓</div> <div class="fragment p-4 bg-accent-950 rounded-lg">Donc <b>Voiture</b> a : prixJour, disponible, louer(), retourner(), km, immatriculation, nbPortes, nbPlaces</div>',l,$,_="On n'a codé louer() qu'une seule fois, dans Louable !",u,f,b=`Suivons la chaîne. Voiture hérite de Véhicule. Véhicule hérite de Louable.\r
			Donc Voiture a tout : les attributs de Louable, plus ceux de Véhicule, plus les siens.\r
			Et surtout, la méthode louer() n'est codée qu'une seule fois, dans Louable.\r
			Voiture, Moto, SiègeAuto, PorteVelo... tous peuvent être loués avec le même code !`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c,n=x(),i=h("div"),i.innerHTML=m,l=x(),$=h("p"),$.textContent=_,u=x(),f=h("aside"),f.textContent=b,this.h()},l(p){e=C(p,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-13fx6rx"&&(e.textContent=o),s=v(p),t=C(p,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1pgak5l"&&(t.innerHTML=c),n=v(p),i=C(p,"DIV",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-1i1rucq"&&(i.innerHTML=m),l=v(p),$=C(p,"P",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-mgjp0b"&&($.textContent=_),u=v(p),f=C(p,"ASIDE",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-l0jfgv"&&(f.textContent=b),this.h()},h(){w(e,"class","uppercase"),w(i,"class","flex flex-col items-center mt-8 text-2xl"),w($,"class","fragment text-accent-200 font-bold mt-6"),w(f,"class","notes")},m(p,L){a(p,e,L),a(p,s,L),a(p,t,L),a(p,n,L),a(p,i,L),a(p,l,L),a(p,$,L),a(p,u,L),a(p,f,L)},p:z,d(p){p&&(r(e),r(s),r(t),r(n),r(i),r(l),r($),r(u),r(f))}}}function Ml(d){let e=`
// Une seule méthode pour TOUT louer !
void louer(Louable item, Client c) {
    item.louer();
    // Fonctionne pour Voiture, Moto, SiegeAuto, PorteVelo...
}

// Ajouter un vélo électrique demain ?
class VeloElectrique extends Vehicule {
    int autonomieKm;
}
// C'est tout ! Il hérite automatiquement de louer(), retourner()...
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Tl(d){let e,o="Le code devient simple",s,t,c,n,i=`✅ Une seule méthode pour tout louer<br/>
			✅ Ajouter un nouveau type = quelques lignes<br/>
			✅ Zéro duplication de code`,m,l,$=`Regardez la puissance. Une seule méthode louer() qui fonctionne pour tout.\r
			Demain on ajoute VeloElectrique ? 3 lignes de code. Il hérite de tout le reste.\r
			C'est ça la vraie puissance de la POO : écrire moins, faire plus.`,_;return t=new oe({props:{class:"java",$$slots:{default:[Ml]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment),c=x(),n=h("p"),n.innerHTML=i,m=x(),l=h("aside"),l.textContent=$,this.h()},l(u){e=C(u,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1bcwfrg"&&(e.textContent=o),s=v(u),T(t.$$.fragment,u),c=v(u),n=C(u,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1s4i3jl"&&(n.innerHTML=i),m=v(u),l=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-518ia8"&&(l.textContent=$),this.h()},h(){w(e,"class","uppercase"),w(n,"class","fragment text-green-400 font-bold"),w(l,"class","notes")},m(u,f){a(u,e,f),a(u,s,f),M(t,u,f),a(u,c,f),a(u,n,f),a(u,m,f),a(u,l,f),_=!0},p(u,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:u}),t.$set(b)},i(u){_||(P(t.$$.fragment,u),_=!0)},o(u){q(t.$$.fragment,u),_=!1},d(u){u&&(r(e),r(s),r(c),r(n),r(m),r(l)),H(t,u)}}}function Sl(d){let e,o="Le refactoring",s,t,c='L&#39;opération que l&#39;on vient de voir s&#39;appelle un <span class="text-important">refactoring</span>',n,i,m="C'est réorganiser le code sans changer son comportement.",l,$,_=`Si vous l&#39;aviez fait dès le départ, vous auriez gagné plus de temps que si vous devez le faire
			plus tard, c&#39;est une <u>certitude</u> !`,u,f,b=`Le refactoring, c'est améliorer la structure du code sans changer ce qu'il fait.\r
			C'est toujours plus facile de bien faire dès le début que de réparer après.\r
			Un code bien conçu, c'est des heures de debug en moins.`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c,n=x(),i=h("p"),i.textContent=m,l=x(),$=h("p"),$.innerHTML=_,u=x(),f=h("aside"),f.textContent=b,this.h()},l(p){e=C(p,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-t8lx1u"&&(e.textContent=o),s=v(p),t=C(p,"P",{"data-svelte-h":!0}),g(t)!=="svelte-xrsm89"&&(t.innerHTML=c),n=v(p),i=C(p,"P",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-1nmzwcc"&&(i.textContent=m),l=v(p),$=C(p,"P",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-b3fier"&&($.innerHTML=_),u=v(p),f=C(p,"ASIDE",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-1ecc74i"&&(f.textContent=b),this.h()},h(){w(e,"class","uppercase"),w(i,"class","fragment"),w($,"class","fragment"),w(f,"class","notes")},m(p,L){a(p,e,L),a(p,s,L),a(p,t,L),a(p,n,L),a(p,i,L),a(p,l,L),a(p,$,L),a(p,u,L),a(p,f,L)},p:z,d(p){p&&(r(e),r(s),r(t),r(n),r(i),r(l),r($),r(u),r(f))}}}function jl(d){let e,o="BUILD vs RUN",s,t,c="Le temps d'implémentation (BUILD) augmente si vous faites beaucoup de POO",n,i,m="...mais la maintenance (RUN) coûte moins cher !",l,$,_='<div class="p-4 bg-red-950 rounded-lg"><h4 class="text-red-400">❌ Code vite fait</h4> <ul class="text-xl"><li>Rapide à écrire</li> <li>Difficile à maintenir</li> <li>Bugs fréquents</li> <li>Évolutions coûteuses</li></ul></div> <div class="p-4 bg-green-950 rounded-lg"><h4 class="text-green-400">✅ Code bien conçu</h4> <ul class="text-xl"><li>Plus long à écrire</li> <li>Facile à maintenir</li> <li>Moins de bugs</li> <li>Évolutions simples</li></ul></div>',u,f,b=`En entreprise, on parle de BUILD (le développement initial) et de RUN (la maintenance).\r
			Un code bien conçu coûte plus cher au BUILD mais beaucoup moins au RUN.\r
			Et le RUN, c'est souvent 80% du coût total d'un projet !`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),i=h("p"),i.textContent=m,l=x(),$=h("div"),$.innerHTML=_,u=x(),f=h("aside"),f.textContent=b,this.h()},l(p){e=C(p,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-bv5mk1"&&(e.textContent=o),s=v(p),t=C(p,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-10nhqsg"&&(t.textContent=c),n=v(p),i=C(p,"P",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-ywkeo"&&(i.textContent=m),l=v(p),$=C(p,"DIV",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-4svqpn"&&($.innerHTML=_),u=v(p),f=C(p,"ASIDE",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-fk979b"&&(f.textContent=b),this.h()},h(){w(e,"class","uppercase"),w(t,"class","text-important"),w(i,"class","fragment"),w($,"class","fragment grid grid-cols-2 gap-8 mt-8"),w(f,"class","notes")},m(p,L){a(p,e,L),a(p,s,L),a(p,t,L),a(p,n,L),a(p,i,L),a(p,l,L),a(p,$,L),a(p,u,L),a(p,f,L)},p:z,d(p){p&&(r(e),r(s),r(t),r(n),r(i),r(l),r($),r(u),r(f))}}}function Al(d){let e,o="L'équilibre à trouver",s,t,c="Un <i>bon</i> ingénieur logiciel sait jusqu&#39;à quel niveau il convient d&#39;abstraire",n,i,m='<li class="fragment">❌ <b>Pas assez d&#39;abstraction :</b> vous devez tout casser pour ajouter une fonctionnalité</li> <li class="fragment">❌ <b>Trop d&#39;abstraction :</b> votre client paie pour du code qu&#39;il n&#39;utilisera jamais</li>',l,$,_="En entreprise, tout est question d'équilibre et vient avec l'expérience.",u,f,b=`C'est un équilibre à trouver. Pas assez d'abstraction, et chaque évolution est un cauchemar.\r
			Trop d'abstraction, et vous passez des semaines à coder des trucs inutiles.\r
			Ça vient avec l'expérience, avec les projets, avec les erreurs qu'on fait.`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c,n=x(),i=h("ul"),i.innerHTML=m,l=x(),$=h("p"),$.textContent=_,u=x(),f=h("aside"),f.textContent=b,this.h()},l(p){e=C(p,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1082o8n"&&(e.textContent=o),s=v(p),t=C(p,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1yhe1kd"&&(t.innerHTML=c),n=v(p),i=C(p,"UL",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-5s0pz5"&&(i.innerHTML=m),l=v(p),$=C(p,"P",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-b8ucny"&&($.textContent=_),u=v(p),f=C(p,"ASIDE",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-1hg71ga"&&(f.textContent=b),this.h()},h(){w(e,"class","uppercase"),w(i,"class","mt-8"),w($,"class","fragment mt-8"),w(f,"class","notes")},m(p,L){a(p,e,L),a(p,s,L),a(p,t,L),a(p,n,L),a(p,i,L),a(p,l,L),a(p,$,L),a(p,u,L),a(p,f,L)},p:z,d(p){p&&(r(e),r(s),r(t),r(n),r(i),r(l),r($),r(u),r(f))}}}function El(d){let e,o="Dans ce module",s,t,c="Faites le plus de zèle possible, exagérez !",n,i,m="C'est en allant trop loin qu'on apprend où sont les limites.",l,$,_="Vous apprendrez à doser en entreprise, avec de vrais projets et de vraies contraintes.",u,f,b=`Dans ce module, je vous encourage à en faire trop. Abstraire partout, hériter de tout.\r
			C'est comme ça qu'on apprend où sont les limites.\r
			En entreprise, vous aurez des contraintes de temps, de budget. Là, vous apprendrez à doser.\r
			Ici, c'est le moment d'expérimenter.`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),i=h("p"),i.textContent=m,l=x(),$=h("p"),$.textContent=_,u=x(),f=h("aside"),f.textContent=b,this.h()},l(p){e=C(p,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-x5naxz"&&(e.textContent=o),s=v(p),t=C(p,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-10elw5s"&&(t.textContent=c),n=v(p),i=C(p,"P",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-lvdult"&&(i.textContent=m),l=v(p),$=C(p,"P",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-1akob0d"&&($.textContent=_),u=v(p),f=C(p,"ASIDE",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-7aoov6"&&(f.textContent=b),this.h()},h(){w(e,"class","uppercase"),w(t,"class","text-important text-4xl"),w(i,"class","fragment mt-8 text-2xl"),w($,"class","fragment text-2xl"),w(f,"class","notes")},m(p,L){a(p,e,L),a(p,s,L),a(p,t,L),a(p,n,L),a(p,i,L),a(p,l,L),a(p,$,L),a(p,u,L),a(p,f,L)},p:z,d(p){p&&(r(e),r(s),r(t),r(n),r(i),r(l),r($),r(u),r(f))}}}function Dl(d){let e,o="Récapitulatif",s,t,c='<div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">📦 RANGER</h4> <p class="text-xl">Données + méthodes<br/>dans un même objet</p></div> <div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">🔒 PROTÉGER</h4> <p class="text-xl">Chaque méthode n&#39;accède<br/>qu&#39;à son objet</p></div> <div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">🌳 GÉNÉRALISER</h4> <p class="text-xl">Héritage et abstraction<br/>pour réutiliser le code</p></div>',n,i,m=`On récapitule. La POO c'est 3 piliers.\r
			Ranger : on met ensemble ce qui va ensemble.\r
			Protéger : chaque méthode ne touche qu'à son objet, le compilateur vous aide.\r
			Généraliser : on écrit le code une fois, on le réutilise partout grâce à l'héritage.`;return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("div"),t.innerHTML=c,n=x(),i=h("aside"),i.textContent=m,this.h()},l(l){e=C(l,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-j5vxp9"&&(e.textContent=o),s=v(l),t=C(l,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-q3x4dl"&&(t.innerHTML=c),n=v(l),i=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-1cunl28"&&(i.textContent=m),this.h()},h(){w(t,"class","flex flex-row justify-around items-start mt-8"),w(i,"class","notes")},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),a(l,i,$)},p:z,d(l){l&&(r(e),r(s),r(t),r(n),r(i))}}}function Il(d){let e,o="La POO, c'est quoi au final ?",s,t,c="Vous venez d'être confronté aux concepts fondamentaux de la POO :",n,i,m='<li><span class="text-important">L&#39;encapsulation</span> : ranger et protéger les données</li> <li><span class="text-important">L&#39;abstraction</span> : généraliser les concepts</li> <li><span class="text-important">L&#39;héritage</span> : réutiliser le code des parents</li>',l,$,_="Nous allons voir ces concepts en détail dans les chapitres suivants.",u,f,b=`On a vu les bases. Encapsulation, abstraction, héritage.\r
			Ce sont les piliers de la POO, et on va les approfondir tout au long du module.\r
			Chaque chapitre va détailler un de ces concepts.`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),i=h("ul"),i.innerHTML=m,l=x(),$=h("p"),$.textContent=_,u=x(),f=h("aside"),f.textContent=b,this.h()},l(p){e=C(p,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-5i67l6"&&(e.textContent=o),s=v(p),t=C(p,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1gjgr08"&&(t.textContent=c),n=v(p),i=C(p,"UL",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-i42s8"&&(i.innerHTML=m),l=v(p),$=C(p,"P",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-zjtr2j"&&($.textContent=_),u=v(p),f=C(p,"ASIDE",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-ywaarn"&&(f.textContent=b),this.h()},h(){w(t,"class","fragment"),w(i,"class","fragment text-2xl mt-4"),w($,"class","fragment mt-8"),w(f,"class","notes")},m(p,L){a(p,e,L),a(p,s,L),a(p,t,L),a(p,n,L),a(p,i,L),a(p,l,L),a(p,$,L),a(p,u,L),a(p,f,L)},p:z,d(p){p&&(r(e),r(s),r(t),r(n),r(i),r(l),r($),r(u),r(f))}}}function kl(d){let e,o="Retenez ceci",s,t,c='La POO est un <span class="text-important">&quot;outil&quot;</span>.',n,i,m=`Si vous faites du Java, même en codant mal, vous faites de la POO \r
			compte tenu de la nature du langage.`,l,$,_=`Si la programmation n&#39;est qu&#39;une suite de blocs de code tels des <b>légos</b>, 
			la POO, c&#39;est fabriquer des blocs <span class="text-important">intelligemment</span> 
			que vous réutilisez, peu importe que vous construisiez un pont ou une maison.`,u,f,b=`La POO c'est un outil, pas une obligation. Mais c'est un outil puissant.\r
			En Java, vous faites de la POO que vous le vouliez ou non, c'est la nature du langage.\r
			L'idée c'est de fabriquer des briques réutilisables. Comme des légos bien conçus.\r
			Une brique "Véhicule" peut servir pour une voiture aujourd'hui, une moto demain, un vaisseau spatial dans 5 ans.`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c,n=x(),i=h("p"),i.textContent=m,l=x(),$=h("p"),$.innerHTML=_,u=x(),f=h("aside"),f.textContent=b,this.h()},l(p){e=C(p,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-79cey5"&&(e.textContent=o),s=v(p),t=C(p,"P",{"data-svelte-h":!0}),g(t)!=="svelte-equxbg"&&(t.innerHTML=c),n=v(p),i=C(p,"P",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-16o7pcm"&&(i.textContent=m),l=v(p),$=C(p,"P",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-qnckm3"&&($.innerHTML=_),u=v(p),f=C(p,"ASIDE",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-11mjtse"&&(f.textContent=b),this.h()},h(){w(i,"class","fragment"),w($,"class","fragment mt-8 text-2xl bg-accent-950 p-4 rounded-lg"),w(f,"class","notes")},m(p,L){a(p,e,L),a(p,s,L),a(p,t,L),a(p,n,L),a(p,i,L),a(p,l,L),a(p,$,L),a(p,u,L),a(p,f,L)},p:z,d(p){p&&(r(e),r(s),r(t),r(n),r(i),r(l),r($),r(u),r(f))}}}function Ol(d){let e,o="À vous de jouer !",s,t,c="Dans les prochains chapitres, nous allons :",n,i,m='<li class="fragment">📦 Approfondir l&#39;<b>encapsulation</b> et la visibilité</li> <li class="fragment">🔗 Maîtriser l&#39;<b>héritage</b> et le polymorphisme</li> <li class="fragment">📋 Découvrir les <b>interfaces</b> et les classes abstraites</li> <li class="fragment">🎨 Apprendre les <b>Design Patterns</b> classiques</li>',l,$,_=`C'est parti pour la suite ! On va approfondir chaque concept.\r
			L'encapsulation, l'héritage, les interfaces, et même les Design Patterns.\r
			À la fin du module, vous saurez concevoir du code propre, évolutif, maintenable.`;return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),i=h("ul"),i.innerHTML=m,l=x(),$=h("aside"),$.textContent=_,this.h()},l(u){e=C(u,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-cgpepy"&&(e.textContent=o),s=v(u),t=C(u,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-16xre1k"&&(t.textContent=c),n=v(u),i=C(u,"UL",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-m1w35p"&&(i.innerHTML=m),l=v(u),$=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-tic23m"&&($.textContent=_),this.h()},h(){w(t,"class","text-3xl mt-8"),w(i,"class","text-2xl mt-4"),w($,"class","notes")},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),a(u,i,f),a(u,l,f),a(u,$,f)},p:z,d(u){u&&(r(e),r(s),r(t),r(n),r(i),r(l),r($))}}}function Vl(d){let e,o,s,t,c,n,i,m,l,$,_,u,f,b,p,L,j,E,R,V,I,k,A,F,X,J,le,D,K,$e,pe,Z,ne,me,y,B,ie,de,ve,W,ae,Ce,_e,he,G,ue,xe,N,re,we,Q,ce,ge,je,He,Ae,qe,Ee,Se,ze,Ie,Je,ke,Re,Oe,Ne,Ve,Fe,Ue,Qe,Be,ye,Ge,Ke;return e=new U({props:{$$slots:{default:[Vs]},$$scope:{ctx:d}}}),s=new U({props:{$$slots:{default:[zs]},$$scope:{ctx:d}}}),c=new U({props:{$$slots:{default:[Us]},$$scope:{ctx:d}}}),i=new U({props:{data_background_color:"#1a1a2e",$$slots:{default:[Bs]},$$scope:{ctx:d}}}),l=new U({props:{$$slots:{default:[Rs]},$$scope:{ctx:d}}}),_=new U({props:{$$slots:{default:[Fs]},$$scope:{ctx:d}}}),f=new U({props:{$$slots:{default:[Gs]},$$scope:{ctx:d}}}),p=new U({props:{$$slots:{default:[Qs]},$$scope:{ctx:d}}}),j=new U({props:{data_background_color:"#1a1a2e",$$slots:{default:[ys]},$$scope:{ctx:d}}}),R=new U({props:{$$slots:{default:[Ws]},$$scope:{ctx:d}}}),I=new U({props:{$$slots:{default:[Ys]},$$scope:{ctx:d}}}),A=new U({props:{$$slots:{default:[el]},$$scope:{ctx:d}}}),X=new U({props:{$$slots:{default:[ll]},$$scope:{ctx:d}}}),le=new U({props:{$$slots:{default:[rl]},$$scope:{ctx:d}}}),K=new U({props:{$$slots:{default:[al]},$$scope:{ctx:d}}}),pe=new U({props:{data_background_color:"#1a1a2e",$$slots:{default:[ul]},$$scope:{ctx:d}}}),ne=new U({props:{$$slots:{default:[ol]},$$scope:{ctx:d}}}),y=new U({props:{$$slots:{default:[$l]},$$scope:{ctx:d}}}),ie=new U({props:{$$slots:{default:[pl]},$$scope:{ctx:d}}}),ve=new U({props:{$$slots:{default:[ml]},$$scope:{ctx:d}}}),ae=new U({props:{$$slots:{default:[dl]},$$scope:{ctx:d}}}),_e=new U({props:{$$slots:{default:[vl]},$$scope:{ctx:d}}}),G=new U({props:{$$slots:{default:[xl]},$$scope:{ctx:d}}}),xe=new U({props:{$$slots:{default:[Cl]},$$scope:{ctx:d}}}),re=new U({props:{$$slots:{default:[gl]},$$scope:{ctx:d}}}),Q=new U({props:{$$slots:{default:[wl]},$$scope:{ctx:d}}}),ge=new U({props:{$$slots:{default:[ql]},$$scope:{ctx:d}}}),He=new U({props:{$$slots:{default:[Pl]},$$scope:{ctx:d}}}),qe=new U({props:{$$slots:{default:[Tl]},$$scope:{ctx:d}}}),Se=new U({props:{data_background_color:"#00353F",$$slots:{default:[Sl]},$$scope:{ctx:d}}}),Ie=new U({props:{data_background_color:"#00353F",$$slots:{default:[jl]},$$scope:{ctx:d}}}),ke=new U({props:{data_background_color:"#00353F",$$slots:{default:[Al]},$$scope:{ctx:d}}}),Oe=new U({props:{data_background_color:"#00353F",$$slots:{default:[El]},$$scope:{ctx:d}}}),Ve=new U({props:{$$slots:{default:[Dl]},$$scope:{ctx:d}}}),Ue=new U({props:{$$slots:{default:[Il]},$$scope:{ctx:d}}}),Be=new U({props:{$$slots:{default:[kl]},$$scope:{ctx:d}}}),Ge=new U({props:{$$slots:{default:[Ol]},$$scope:{ctx:d}}}),{c(){S(e.$$.fragment),o=x(),S(s.$$.fragment),t=x(),S(c.$$.fragment),n=x(),S(i.$$.fragment),m=x(),S(l.$$.fragment),$=x(),S(_.$$.fragment),u=x(),S(f.$$.fragment),b=x(),S(p.$$.fragment),L=x(),S(j.$$.fragment),E=x(),S(R.$$.fragment),V=x(),S(I.$$.fragment),k=x(),S(A.$$.fragment),F=x(),S(X.$$.fragment),J=x(),S(le.$$.fragment),D=x(),S(K.$$.fragment),$e=x(),S(pe.$$.fragment),Z=x(),S(ne.$$.fragment),me=x(),S(y.$$.fragment),B=x(),S(ie.$$.fragment),de=x(),S(ve.$$.fragment),W=x(),S(ae.$$.fragment),Ce=x(),S(_e.$$.fragment),he=x(),S(G.$$.fragment),ue=x(),S(xe.$$.fragment),N=x(),S(re.$$.fragment),we=x(),S(Q.$$.fragment),ce=x(),S(ge.$$.fragment),je=x(),S(He.$$.fragment),Ae=x(),S(qe.$$.fragment),Ee=x(),S(Se.$$.fragment),ze=x(),S(Ie.$$.fragment),Je=x(),S(ke.$$.fragment),Re=x(),S(Oe.$$.fragment),Ne=x(),S(Ve.$$.fragment),Fe=x(),S(Ue.$$.fragment),Qe=x(),S(Be.$$.fragment),ye=x(),S(Ge.$$.fragment)},l(O){T(e.$$.fragment,O),o=v(O),T(s.$$.fragment,O),t=v(O),T(c.$$.fragment,O),n=v(O),T(i.$$.fragment,O),m=v(O),T(l.$$.fragment,O),$=v(O),T(_.$$.fragment,O),u=v(O),T(f.$$.fragment,O),b=v(O),T(p.$$.fragment,O),L=v(O),T(j.$$.fragment,O),E=v(O),T(R.$$.fragment,O),V=v(O),T(I.$$.fragment,O),k=v(O),T(A.$$.fragment,O),F=v(O),T(X.$$.fragment,O),J=v(O),T(le.$$.fragment,O),D=v(O),T(K.$$.fragment,O),$e=v(O),T(pe.$$.fragment,O),Z=v(O),T(ne.$$.fragment,O),me=v(O),T(y.$$.fragment,O),B=v(O),T(ie.$$.fragment,O),de=v(O),T(ve.$$.fragment,O),W=v(O),T(ae.$$.fragment,O),Ce=v(O),T(_e.$$.fragment,O),he=v(O),T(G.$$.fragment,O),ue=v(O),T(xe.$$.fragment,O),N=v(O),T(re.$$.fragment,O),we=v(O),T(Q.$$.fragment,O),ce=v(O),T(ge.$$.fragment,O),je=v(O),T(He.$$.fragment,O),Ae=v(O),T(qe.$$.fragment,O),Ee=v(O),T(Se.$$.fragment,O),ze=v(O),T(Ie.$$.fragment,O),Je=v(O),T(ke.$$.fragment,O),Re=v(O),T(Oe.$$.fragment,O),Ne=v(O),T(Ve.$$.fragment,O),Fe=v(O),T(Ue.$$.fragment,O),Qe=v(O),T(Be.$$.fragment,O),ye=v(O),T(Ge.$$.fragment,O)},m(O,se){M(e,O,se),a(O,o,se),M(s,O,se),a(O,t,se),M(c,O,se),a(O,n,se),M(i,O,se),a(O,m,se),M(l,O,se),a(O,$,se),M(_,O,se),a(O,u,se),M(f,O,se),a(O,b,se),M(p,O,se),a(O,L,se),M(j,O,se),a(O,E,se),M(R,O,se),a(O,V,se),M(I,O,se),a(O,k,se),M(A,O,se),a(O,F,se),M(X,O,se),a(O,J,se),M(le,O,se),a(O,D,se),M(K,O,se),a(O,$e,se),M(pe,O,se),a(O,Z,se),M(ne,O,se),a(O,me,se),M(y,O,se),a(O,B,se),M(ie,O,se),a(O,de,se),M(ve,O,se),a(O,W,se),M(ae,O,se),a(O,Ce,se),M(_e,O,se),a(O,he,se),M(G,O,se),a(O,ue,se),M(xe,O,se),a(O,N,se),M(re,O,se),a(O,we,se),M(Q,O,se),a(O,ce,se),M(ge,O,se),a(O,je,se),M(He,O,se),a(O,Ae,se),M(qe,O,se),a(O,Ee,se),M(Se,O,se),a(O,ze,se),M(Ie,O,se),a(O,Je,se),M(ke,O,se),a(O,Re,se),M(Oe,O,se),a(O,Ne,se),M(Ve,O,se),a(O,Fe,se),M(Ue,O,se),a(O,Qe,se),M(Be,O,se),a(O,ye,se),M(Ge,O,se),Ke=!0},p(O,se){const Ye={};se&1&&(Ye.$$scope={dirty:se,ctx:O}),e.$set(Ye);const Xe={};se&1&&(Xe.$$scope={dirty:se,ctx:O}),s.$set(Xe);const et={};se&1&&(et.$$scope={dirty:se,ctx:O}),c.$set(et);const tt={};se&1&&(tt.$$scope={dirty:se,ctx:O}),i.$set(tt);const st={};se&1&&(st.$$scope={dirty:se,ctx:O}),l.$set(st);const lt={};se&1&&(lt.$$scope={dirty:se,ctx:O}),_.$set(lt);const nt={};se&1&&(nt.$$scope={dirty:se,ctx:O}),f.$set(nt);const it={};se&1&&(it.$$scope={dirty:se,ctx:O}),p.$set(it);const rt={};se&1&&(rt.$$scope={dirty:se,ctx:O}),j.$set(rt);const at={};se&1&&(at.$$scope={dirty:se,ctx:O}),R.$set(at);const ut={};se&1&&(ut.$$scope={dirty:se,ctx:O}),I.$set(ut);const ot={};se&1&&(ot.$$scope={dirty:se,ctx:O}),A.$set(ot);const $t={};se&1&&($t.$$scope={dirty:se,ctx:O}),X.$set($t);const ft={};se&1&&(ft.$$scope={dirty:se,ctx:O}),le.$set(ft);const ct={};se&1&&(ct.$$scope={dirty:se,ctx:O}),K.$set(ct);const pt={};se&1&&(pt.$$scope={dirty:se,ctx:O}),pe.$set(pt);const mt={};se&1&&(mt.$$scope={dirty:se,ctx:O}),ne.$set(mt);const dt={};se&1&&(dt.$$scope={dirty:se,ctx:O}),y.$set(dt);const vt={};se&1&&(vt.$$scope={dirty:se,ctx:O}),ie.$set(vt);const xt={};se&1&&(xt.$$scope={dirty:se,ctx:O}),ve.$set(xt);const _t={};se&1&&(_t.$$scope={dirty:se,ctx:O}),ae.$set(_t);const Ct={};se&1&&(Ct.$$scope={dirty:se,ctx:O}),_e.$set(Ct);const ht={};se&1&&(ht.$$scope={dirty:se,ctx:O}),G.$set(ht);const gt={};se&1&&(gt.$$scope={dirty:se,ctx:O}),xe.$set(gt);const bt={};se&1&&(bt.$$scope={dirty:se,ctx:O}),re.$set(bt);const Lt={};se&1&&(Lt.$$scope={dirty:se,ctx:O}),Q.$set(Lt);const wt={};se&1&&(wt.$$scope={dirty:se,ctx:O}),ge.$set(wt);const Ht={};se&1&&(Ht.$$scope={dirty:se,ctx:O}),He.$set(Ht);const qt={};se&1&&(qt.$$scope={dirty:se,ctx:O}),qe.$set(qt);const Pt={};se&1&&(Pt.$$scope={dirty:se,ctx:O}),Se.$set(Pt);const Mt={};se&1&&(Mt.$$scope={dirty:se,ctx:O}),Ie.$set(Mt);const Tt={};se&1&&(Tt.$$scope={dirty:se,ctx:O}),ke.$set(Tt);const St={};se&1&&(St.$$scope={dirty:se,ctx:O}),Oe.$set(St);const jt={};se&1&&(jt.$$scope={dirty:se,ctx:O}),Ve.$set(jt);const At={};se&1&&(At.$$scope={dirty:se,ctx:O}),Ue.$set(At);const Et={};se&1&&(Et.$$scope={dirty:se,ctx:O}),Be.$set(Et);const Dt={};se&1&&(Dt.$$scope={dirty:se,ctx:O}),Ge.$set(Dt)},i(O){Ke||(P(e.$$.fragment,O),P(s.$$.fragment,O),P(c.$$.fragment,O),P(i.$$.fragment,O),P(l.$$.fragment,O),P(_.$$.fragment,O),P(f.$$.fragment,O),P(p.$$.fragment,O),P(j.$$.fragment,O),P(R.$$.fragment,O),P(I.$$.fragment,O),P(A.$$.fragment,O),P(X.$$.fragment,O),P(le.$$.fragment,O),P(K.$$.fragment,O),P(pe.$$.fragment,O),P(ne.$$.fragment,O),P(y.$$.fragment,O),P(ie.$$.fragment,O),P(ve.$$.fragment,O),P(ae.$$.fragment,O),P(_e.$$.fragment,O),P(G.$$.fragment,O),P(xe.$$.fragment,O),P(re.$$.fragment,O),P(Q.$$.fragment,O),P(ge.$$.fragment,O),P(He.$$.fragment,O),P(qe.$$.fragment,O),P(Se.$$.fragment,O),P(Ie.$$.fragment,O),P(ke.$$.fragment,O),P(Oe.$$.fragment,O),P(Ve.$$.fragment,O),P(Ue.$$.fragment,O),P(Be.$$.fragment,O),P(Ge.$$.fragment,O),Ke=!0)},o(O){q(e.$$.fragment,O),q(s.$$.fragment,O),q(c.$$.fragment,O),q(i.$$.fragment,O),q(l.$$.fragment,O),q(_.$$.fragment,O),q(f.$$.fragment,O),q(p.$$.fragment,O),q(j.$$.fragment,O),q(R.$$.fragment,O),q(I.$$.fragment,O),q(A.$$.fragment,O),q(X.$$.fragment,O),q(le.$$.fragment,O),q(K.$$.fragment,O),q(pe.$$.fragment,O),q(ne.$$.fragment,O),q(y.$$.fragment,O),q(ie.$$.fragment,O),q(ve.$$.fragment,O),q(ae.$$.fragment,O),q(_e.$$.fragment,O),q(G.$$.fragment,O),q(xe.$$.fragment,O),q(re.$$.fragment,O),q(Q.$$.fragment,O),q(ge.$$.fragment,O),q(He.$$.fragment,O),q(qe.$$.fragment,O),q(Se.$$.fragment,O),q(Ie.$$.fragment,O),q(ke.$$.fragment,O),q(Oe.$$.fragment,O),q(Ve.$$.fragment,O),q(Ue.$$.fragment,O),q(Be.$$.fragment,O),q(Ge.$$.fragment,O),Ke=!1},d(O){O&&(r(o),r(t),r(n),r(m),r($),r(u),r(b),r(L),r(E),r(V),r(k),r(F),r(J),r(D),r($e),r(Z),r(me),r(B),r(de),r(W),r(Ce),r(he),r(ue),r(N),r(we),r(ce),r(je),r(Ae),r(Ee),r(ze),r(Je),r(Re),r(Ne),r(Fe),r(Qe),r(ye)),H(e,O),H(s,O),H(c,O),H(i,O),H(l,O),H(_,O),H(f,O),H(p,O),H(j,O),H(R,O),H(I,O),H(A,O),H(X,O),H(le,O),H(K,O),H(pe,O),H(ne,O),H(y,O),H(ie,O),H(ve,O),H(ae,O),H(_e,O),H(G,O),H(xe,O),H(re,O),H(Q,O),H(ge,O),H(He,O),H(qe,O),H(Se,O),H(Ie,O),H(ke,O),H(Oe,O),H(Ve,O),H(Ue,O),H(Be,O),H(Ge,O)}}}function zl(d){let e,o;return e=new U({props:{$$slots:{default:[Vl]},$$scope:{ctx:d}}}),{c(){S(e.$$.fragment)},l(s){T(e.$$.fragment,s)},m(s,t){M(e,s,t),o=!0},p(s,[t]){const c={};t&1&&(c.$$scope={dirty:t,ctx:s}),e.$set(c)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){q(e.$$.fragment,s),o=!1},d(s){H(e,s)}}}class Ul extends Me{constructor(e){super(),Te(this,e,null,zl,Pe,{})}}function Bl(d){let e,o="Et si on ne veut pas hériter ?",s,t,c="L'héritage, c'est puissant... mais pas toujours adapté.",n,i,m='<p class="text-2xl">🤔 Une Voiture <b>est un</b> Moteur ?</p> <p class="text-red-400 text-3xl fragment">❌ Non !</p>',l,$,_='<p class="text-2xl">🤔 Une Voiture <b>a un</b> Moteur ?</p> <p class="text-green-400 text-3xl fragment">✅ Oui !</p>',u,f,b='C&#39;est la <span class="text-important">composition</span> !';return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),i=h("div"),i.innerHTML=m,l=x(),$=h("div"),$.innerHTML=_,u=x(),f=h("p"),f.innerHTML=b,this.h()},l(p){e=C(p,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-kyeugj"&&(e.textContent=o),s=v(p),t=C(p,"P",{"data-svelte-h":!0}),g(t)!=="svelte-135l6z7"&&(t.textContent=c),n=v(p),i=C(p,"DIV",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-bjhwhv"&&(i.innerHTML=m),l=v(p),$=C(p,"DIV",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-1iidfrd"&&($.innerHTML=_),u=v(p),f=C(p,"P",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-11ppavm"&&(f.innerHTML=b),this.h()},h(){w(i,"class","fragment mt-8"),w($,"class","fragment mt-4"),w(f,"class","fragment mt-8 text-accent-200 font-bold")},m(p,L){a(p,e,L),a(p,s,L),a(p,t,L),a(p,n,L),a(p,i,L),a(p,l,L),a(p,$,L),a(p,u,L),a(p,f,L)},p:z,d(p){p&&(r(e),r(s),r(t),r(n),r(i),r(l),r($),r(u),r(f))}}}function Jl(d){let e,o="Qu'est-ce que la composition ?",s,t,c="La composition permet de créer des objets complexes en combinant des objets plus simples.",n,i,m="C&#39;est comme assembler des <b>briques Lego</b> pour construire une structure plus grande.",l,$,_='En POO, la composition consiste à avoir des <span class="text-important">instances de classes en tant qu&#39;attributs</span> d&#39;une autre classe.',u,f,b=`Si vous connaissez les bases de données, c'est comme une clé étrangère.\r
			Un objet "possède" un autre objet.`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),i=h("p"),i.innerHTML=m,l=x(),$=h("p"),$.innerHTML=_,u=x(),f=h("aside"),f.textContent=b,this.h()},l(p){e=C(p,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1ey692r"&&(e.textContent=o),s=v(p),t=C(p,"P",{"data-svelte-h":!0}),g(t)!=="svelte-rt4662"&&(t.textContent=c),n=v(p),i=C(p,"P",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-12yvhve"&&(i.innerHTML=m),l=v(p),$=C(p,"P",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-1o3qgtw"&&($.innerHTML=_),u=v(p),f=C(p,"ASIDE",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-1aur1sf"&&(f.textContent=b),this.h()},h(){w(i,"class","fragment mt-4"),w($,"class","fragment mt-4"),w(f,"class","notes")},m(p,L){a(p,e,L),a(p,s,L),a(p,t,L),a(p,n,L),a(p,i,L),a(p,l,L),a(p,$,L),a(p,u,L),a(p,f,L)},p:z,d(p){p&&(r(e),r(s),r(t),r(n),r(i),r(l),r($),r(u),r(f))}}}function Rl(d){let e,o="Comment choisir : Héritage ou Composition ?",s,t,c='<div class="p-6 bg-accent-950 rounded-lg"><p class="fragment">🤔 &quot;Est-ce qu&#39;un X <b class="text-important">est un</b> Y ?&quot;</p> <p class="fragment text-green-400 ml-8">→ OUI : <b>Héritage</b> (extends)</p> <p class="fragment text-red-400 ml-8">→ NON : ↓</p> <p class="fragment mt-4">🤔 &quot;Est-ce qu&#39;un X <b class="text-important">a un</b> Y ?&quot;</p> <p class="fragment text-blue-400 ml-8">→ OUI : <b>Composition</b> (attribut)</p></div>',n,i,m=`C'est LA règle d'or. Apprenez-la par cœur. \r
			Si "X est un Y" sonne faux, n'héritez pas, composez.`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("div"),t.innerHTML=c,n=x(),i=h("aside"),i.textContent=m,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1jpzxsy"&&(e.textContent=o),s=v(l),t=C(l,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1t58sxf"&&(t.innerHTML=c),n=v(l),i=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-1ngtekj"&&(i.textContent=m),this.h()},h(){w(t,"class","text-2xl mt-8"),w(i,"class","notes")},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),a(l,i,$)},p:z,d(l){l&&(r(e),r(s),r(t),r(n),r(i))}}}function Nl(d){let e,o="Exemples concrets",s,t,c='<thead><tr><th class="p-3">Question</th> <th class="p-3">Réponse</th> <th class="p-3">Relation</th></tr></thead> <tbody><tr class="fragment"><td class="p-3">Un Chien <b>est un</b> Animal ?</td> <td class="p-3 text-green-400">✅ Oui</td> <td class="p-3">Héritage</td></tr> <tr class="fragment"><td class="p-3">Une Voiture <b>est un</b> Moteur ?</td> <td class="p-3 text-red-400">❌ Non</td> <td class="p-3">-</td></tr> <tr class="fragment"><td class="p-3">Une Voiture <b>a un</b> Moteur ?</td> <td class="p-3 text-green-400">✅ Oui</td> <td class="p-3">Composition</td></tr> <tr class="fragment"><td class="p-3">Un Maître <b>a un</b> Animal ?</td> <td class="p-3 text-green-400">✅ Oui</td> <td class="p-3">Composition</td></tr></tbody>';return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("table"),t.innerHTML=c,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1yrhyzi"&&(e.textContent=o),s=v(n),t=C(n,"TABLE",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1lueyjo"&&(t.innerHTML=c),this.h()},h(){w(t,"class","text-xl mt-6")},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function Fl(d){let e=`
@startuml
class Moteur {
  - puissance: int
  + demarrer()
  + arreter()
}

class Roue {
  - taille: int
  + tourner()
}

class Voiture {
  - moteur: Moteur
  - roues: Roue[4]
  + conduire()
}

Voiture *-- Moteur
Voiture *-- "4" Roue
@enduml
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Gl(d){let e,o="Exemple : Voiture et Moteur",s,t,c,n,i=`Le losange plein (◆) indique une <span class="text-important">composition</span> : 
			la Voiture <b>possède</b> le Moteur.`,m;return t=new De({props:{$$slots:{default:[Fl]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment),c=x(),n=h("p"),n.innerHTML=i,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-12o3qzv"&&(e.textContent=o),s=v(l),T(t.$$.fragment,l),c=v(l),n=C(l,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1hsx20"&&(n.innerHTML=i),this.h()},h(){w(n,"class","fragment")},m(l,$){a(l,e,$),a(l,s,$),M(t,l,$),a(l,c,$),a(l,n,$),m=!0},p(l,$){const _={};$&1&&(_.$$scope={dirty:$,ctx:l}),t.$set(_)},i(l){m||(P(t.$$.fragment,l),m=!0)},o(l){q(t.$$.fragment,l),m=!1},d(l){l&&(r(e),r(s),r(c),r(n)),H(t,l)}}}function Ql(d){let e=`
class Moteur {
    private int puissance;
    
    void demarrer() {
        System.out.println("Vrooom !");
    }
}

class Voiture {
    private Moteur moteur;      // Composition !
    private Roue[] roues;
    
    Voiture() {
        this.moteur = new Moteur();  // La Voiture CRÉE son Moteur
        this.roues = new Roue[4];
    }
    
    void conduire() {
        moteur.demarrer();  // Délègue au moteur
        System.out.println("La voiture roule");
    }
}

// Utilisation
Voiture maVoiture = new Voiture();
maVoiture.conduire();  // "Vrooom !" puis "La voiture roule"
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function yl(d){let e,o="En code Java",s,t,c;return t=new oe({props:{lines:"1-8|10-20|22-25",$$slots:{default:[Ql]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment)},l(n){e=C(n,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1w10xpg"&&(e.textContent=o),s=v(n),T(t.$$.fragment,n)},m(n,i){a(n,e,i),a(n,s,i),M(t,n,i),c=!0},p(n,i){const m={};i&1&&(m.$$scope={dirty:i,ctx:n}),t.$set(m)},i(n){c||(P(t.$$.fragment,n),c=!0)},o(n){q(t.$$.fragment,n),c=!1},d(n){n&&(r(e),r(s)),H(t,n)}}}function Kl(d){let e=`
class MoteurElectrique extends Moteur {
    @Override
    void demarrer() {
        System.out.println("... (silence)");
    }
}

class VoitureElectrique {
    private Moteur moteur = new MoteurElectrique();
    // Le reste est identique !
}
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Wl(d){let e,o="Avantage : flexibilité",s,t,c="La composition favorise la <b>réutilisation</b> et la <b>flexibilité</b>.",n,i,m,l,$="On peut changer le moteur sans modifier la classe Voiture !",_;return i=new oe({props:{$$slots:{default:[Kl]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c,n=x(),S(i.$$.fragment),m=x(),l=h("p"),l.textContent=$,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1y64iq2"&&(e.textContent=o),s=v(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-mbviv2"&&(t.innerHTML=c),n=v(u),T(i.$$.fragment,u),m=v(u),l=C(u,"P",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-ybembw"&&(l.textContent=$),this.h()},h(){w(l,"class","fragment text-accent-200")},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),M(i,u,f),a(u,m,f),a(u,l,f),_=!0},p(u,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:u}),i.$set(b)},i(u){_||(P(i.$$.fragment,u),_=!0)},o(u){q(i.$$.fragment,u),_=!1},d(u){u&&(r(e),r(s),r(t),r(n),r(m),r(l)),H(i,u)}}}function Zl(d){let e,o="Les deux relations fondamentales",s,t,c="Le cœur de l'architecture objet";return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,this.h()},l(n){e=C(n,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-fh7ab8"&&(e.textContent=o),s=v(n),t=C(n,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1cmiiew"&&(t.textContent=c),this.h()},h(){w(e,"class","text-5xl"),w(t,"class","text-2xl text-gray-400")},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function Yl(d){let e,o=`<p>L&#39;un des intérêts de la POO réside dans les <b>relations</b> entre les objets.
				Ces relations constituent l&#39;<span class="text-important">architecture</span> de votre application.</p> <dl class="mt-6 text-xl"><dt class="fragment"><strong class="text-important">&quot;est un&quot;</strong> (<em>is-a</em>)</dt><dd class="fragment ml-8"><p>Une classe peut être assimilée à une autre, plus générale.
						→ <span class="text-important">Héritage</span></p> </dd><dt class="fragment mt-4"><strong class="text-important">&quot;a un&quot;</strong> (<em>has-a</em>)</dt><dd class="fragment ml-8"><p>Une classe dépend des services d&#39;une autre.
						→ <span class="text-important">Composition</span></p></dd></dl>`;return{c(){e=h("div"),e.innerHTML=o,this.h()},l(s){e=C(s,"DIV",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1keq8ku"&&(e.innerHTML=o),this.h()},h(){w(e,"class","")},m(s,t){a(s,e,t)},p:z,d(s){s&&r(e)}}}function Xl(d){let e=`
@startuml
abstract class Animal {
  + crier()
}

class Chien extends Animal {
  + crier()
}

class Chat extends Animal {
  + crier()
}

class Maitre {
  - animal: Animal
  + presenterAnimal()
}

Maitre *-- Animal : possède
@enduml
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function en(d){let e,o="Exemple : Maître et Animal",s,t,c="Un Maître <b>a un</b> Animal (composition), et l&#39;Animal peut être un Chien ou un Chat (héritage).",n,i,m;return i=new De({props:{$$slots:{default:[Xl]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c,n=x(),S(i.$$.fragment)},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1defcuq"&&(e.textContent=o),s=v(l),t=C(l,"P",{"data-svelte-h":!0}),g(t)!=="svelte-12t7nrs"&&(t.innerHTML=c),n=v(l),T(i.$$.fragment,l)},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),M(i,l,$),m=!0},p(l,$){const _={};$&1&&(_.$$scope={dirty:$,ctx:l}),i.$set(_)},i(l){m||(P(i.$$.fragment,l),m=!0)},o(l){q(i.$$.fragment,l),m=!1},d(l){l&&(r(e),r(s),r(t),r(n)),H(i,l)}}}function tn(d){let e=`
abstract class Animal {
    abstract void crier();
}

class Chien extends Animal {
    @Override
    void crier() {
        System.out.println("Wouaf !");
    }
}

class Chat extends Animal {
    @Override
    void crier() {
        System.out.println("Miaou !");
    }
}
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function sn(d){let e=`
class Maitre {
    private Animal animal;  // Composition
    
    Maitre(Animal animal) {
        this.animal = animal;
    }
    
    void presenterAnimal() {
        System.out.println("Mon animal fait :");
        animal.crier();
    }
}

// Utilisation
Maitre jean = new Maitre(new Chien());
jean.presenterAnimal();
// "Mon animal fait :" puis "Wouaf !"
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function ln(d){let e,o="En code Java",s,t,c,n,i,m;return c=new oe({props:{class:"language-java",$$slots:{default:[tn]},$$scope:{ctx:d}}}),i=new oe({props:{class:"language-java",$$slots:{default:[sn]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("div"),S(c.$$.fragment),n=x(),S(i.$$.fragment),this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1w10xpg"&&(e.textContent=o),s=v(l),t=C(l,"DIV",{class:!0});var $=fe(t);T(c.$$.fragment,$),n=v($),T(i.$$.fragment,$),$.forEach(r),this.h()},h(){w(t,"class","flex flex-row items-start gap-4")},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),M(c,t,null),Y(t,n),M(i,t,null),m=!0},p(l,$){const _={};$&1&&(_.$$scope={dirty:$,ctx:l}),c.$set(_);const u={};$&1&&(u.$$scope={dirty:$,ctx:l}),i.$set(u)},i(l){m||(P(c.$$.fragment,l),P(i.$$.fragment,l),m=!0)},o(l){q(c.$$.fragment,l),q(i.$$.fragment,l),m=!1},d(l){l&&(r(e),r(s),r(t)),H(c),H(i)}}}function nn(d){let e=`
Maitre jean = new Maitre(new Chien());
Maitre marie = new Maitre(new Chat());

jean.presenterAnimal();   // "Wouaf !"
marie.presenterAnimal();  // "Miaou !"

// On peut changer d'animal sans modifier la classe Maitre !
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function rn(d){let e,o="La puissance de la combinaison",s,t,c="Le Maître ne sait pas quel type d&#39;animal il a... et c&#39;est <b>voulu</b> !",n,i,m,l,$=`C&#39;est le <span class="text-important">polymorphisme</span> en action !<br/>
			(on le verra en détail plus tard)`,_;return i=new oe({props:{$$slots:{default:[nn]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c,n=x(),S(i.$$.fragment),m=x(),l=h("p"),l.innerHTML=$,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-cj68oa"&&(e.textContent=o),s=v(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-kzsg9e"&&(t.innerHTML=c),n=v(u),T(i.$$.fragment,u),m=v(u),l=C(u,"P",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-11u4aoh"&&(l.innerHTML=$),this.h()},h(){w(l,"class","fragment text-accent-200 font-bold")},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),M(i,u,f),a(u,m,f),a(u,l,f),_=!0},p(u,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:u}),i.$set(b)},i(u){_||(P(i.$$.fragment,u),_=!0)},o(u){q(i.$$.fragment,u),_=!1},d(u){u&&(r(e),r(s),r(t),r(n),r(m),r(l)),H(i,u)}}}function an(d){let e,o="Composition vs Agrégation",s,t,c="Il existe une nuance importante :",n,i,m='<div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">◆ Composition</h4> <p class="text-xl mt-2">L&#39;objet contenu <b>appartient</b> à l&#39;objet conteneur.</p> <p class="text-sm text-gray-400 mt-2">Si la Voiture est détruite, le Moteur aussi.</p></div> <div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">◇ Agrégation</h4> <p class="text-xl mt-2">L&#39;objet contenu <b>existe indépendamment</b>.</p> <p class="text-sm text-gray-400 mt-2">Si l&#39;Équipe est dissoute, les Joueurs existent toujours.</p></div>';return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),i=h("div"),i.innerHTML=m,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-s3132y"&&(e.textContent=o),s=v(l),t=C(l,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1v8b0oy"&&(t.textContent=c),n=v(l),i=C(l,"DIV",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-trpxdf"&&(i.innerHTML=m),this.h()},h(){w(i,"class","grid grid-cols-2 gap-8 mt-6")},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),a(l,i,$)},p:z,d(l){l&&(r(e),r(s),r(t),r(n),r(i))}}}function un(d){let e=`
@startuml
class Voiture
class Moteur
class Equipe
class Joueur

Voiture *-- Moteur : composition
Equipe o-- Joueur : agrégation
@enduml
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function on(d){let e,o="En UML",s,t,c,n,i="◆ = Composition (losange plein) | ◇ = Agrégation (losange vide)",m,l,$=`En pratique, la différence est subtile. L'important c'est de comprendre qui "possède" quoi.\r
			En composition, le conteneur crée l'objet. En agrégation, on le reçoit de l'extérieur.`,_;return t=new De({props:{$$slots:{default:[un]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment),c=x(),n=h("p"),n.textContent=i,m=x(),l=h("aside"),l.textContent=$,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1dfk95l"&&(e.textContent=o),s=v(u),T(t.$$.fragment,u),c=v(u),n=C(u,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-17uix3y"&&(n.textContent=i),m=v(u),l=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-18s0euw"&&(l.textContent=$),this.h()},h(){w(n,"class","mt-4"),w(l,"class","notes")},m(u,f){a(u,e,f),a(u,s,f),M(t,u,f),a(u,c,f),a(u,n,f),a(u,m,f),a(u,l,f),_=!0},p(u,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:u}),t.$set(b)},i(u){_||(P(t.$$.fragment,u),_=!0)},o(u){q(t.$$.fragment,u),_=!1},d(u){u&&(r(e),r(s),r(c),r(n),r(m),r(l)),H(t,u)}}}function $n(d){let e=`
class Voiture {
    // Le moteur est CRÉÉ par la voiture
    private Moteur moteur = new Moteur();
    
    // Si Voiture est garbage collecté,
    // Moteur l'est aussi
}
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function fn(d){let e=`
class Equipe {
    // Les joueurs sont REÇUS de l'extérieur
    private List<Joueur> joueurs;
    
    void ajouterJoueur(Joueur j) {
        joueurs.add(j);
    }
    // Les joueurs existent avant/après
}
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function cn(d){let e,o="En code : qui crée quoi ?",s,t,c,n,i="◆ Composition",m,l,$,_,u,f="◇ Agrégation",b,p,L;return l=new oe({props:{class:"language-java",$$slots:{default:[$n]},$$scope:{ctx:d}}}),p=new oe({props:{class:"language-java",$$slots:{default:[fn]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("div"),c=h("div"),n=h("h4"),n.textContent=i,m=x(),S(l.$$.fragment),$=x(),_=h("div"),u=h("h4"),u.textContent=f,b=x(),S(p.$$.fragment),this.h()},l(j){e=C(j,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-13g76yp"&&(e.textContent=o),s=v(j),t=C(j,"DIV",{class:!0});var E=fe(t);c=C(E,"DIV",{});var R=fe(c);n=C(R,"H4",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-13iofgd"&&(n.textContent=i),m=v(R),T(l.$$.fragment,R),R.forEach(r),$=v(E),_=C(E,"DIV",{});var V=fe(_);u=C(V,"H4",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-b2romh"&&(u.textContent=f),b=v(V),T(p.$$.fragment,V),V.forEach(r),E.forEach(r),this.h()},h(){w(n,"class","text-important"),w(u,"class","text-important"),w(t,"class","grid grid-cols-2 gap-4")},m(j,E){a(j,e,E),a(j,s,E),a(j,t,E),Y(t,c),Y(c,n),Y(c,m),M(l,c,null),Y(t,$),Y(t,_),Y(_,u),Y(_,b),M(p,_,null),L=!0},p(j,E){const R={};E&1&&(R.$$scope={dirty:E,ctx:j}),l.$set(R);const V={};E&1&&(V.$$scope={dirty:E,ctx:j}),p.$set(V)},i(j){L||(P(l.$$.fragment,j),P(p.$$.fragment,j),L=!0)},o(j){q(l.$$.fragment,j),q(p.$$.fragment,j),L=!1},d(j){j&&(r(e),r(s),r(t)),H(l),H(p)}}}function pn(d){let e,o="Récapitulatif",s,t,c='<thead><tr><th class="p-3">Relation</th> <th class="p-3">Question</th> <th class="p-3">Implémentation</th> <th class="p-3">UML</th></tr></thead> <tbody><tr class="fragment"><td class="p-3 text-important">Héritage</td> <td class="p-3">&quot;X est un Y&quot;</td> <td class="p-3"><code>extends</code></td> <td class="p-3">Flèche △</td></tr> <tr class="fragment"><td class="p-3 text-important">Composition</td> <td class="p-3">&quot;X a un Y&quot; (possède)</td> <td class="p-3">Attribut (créé)</td> <td class="p-3">Losange ◆</td></tr> <tr class="fragment"><td class="p-3 text-important">Agrégation</td> <td class="p-3">&quot;X a un Y&quot; (référence)</td> <td class="p-3">Attribut (reçu)</td> <td class="p-3">Losange ◇</td></tr></tbody>';return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("table"),t.innerHTML=c,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-ri7iuh"&&(e.textContent=o),s=v(n),t=C(n,"TABLE",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-9czqcv"&&(t.innerHTML=c),this.h()},h(){w(t,"class","text-xl")},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function mn(d){let e,o="La composition",s,t,c,n,i,m,l,$,_,u,f,b,p,L,j,E,R,V,I,k,A,F,X,J,le,D,K,$e,pe,Z,ne,me,y;return t=new U({props:{$$slots:{default:[Bl]},$$scope:{ctx:d}}}),n=new U({props:{$$slots:{default:[Jl]},$$scope:{ctx:d}}}),m=new U({props:{$$slots:{default:[Rl]},$$scope:{ctx:d}}}),$=new U({props:{$$slots:{default:[Nl]},$$scope:{ctx:d}}}),u=new U({props:{$$slots:{default:[Gl]},$$scope:{ctx:d}}}),b=new U({props:{$$slots:{default:[yl]},$$scope:{ctx:d}}}),L=new U({props:{$$slots:{default:[Wl]},$$scope:{ctx:d}}}),E=new U({props:{data_background_color:"#1a1a2e",$$slots:{default:[Zl]},$$scope:{ctx:d}}}),V=new U({props:{$$slots:{default:[Yl]},$$scope:{ctx:d}}}),k=new U({props:{$$slots:{default:[en]},$$scope:{ctx:d}}}),F=new U({props:{$$slots:{default:[ln]},$$scope:{ctx:d}}}),J=new U({props:{$$slots:{default:[rn]},$$scope:{ctx:d}}}),D=new U({props:{$$slots:{default:[an]},$$scope:{ctx:d}}}),$e=new U({props:{$$slots:{default:[on]},$$scope:{ctx:d}}}),Z=new U({props:{$$slots:{default:[cn]},$$scope:{ctx:d}}}),me=new U({props:{$$slots:{default:[pn]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment),c=x(),S(n.$$.fragment),i=x(),S(m.$$.fragment),l=x(),S($.$$.fragment),_=x(),S(u.$$.fragment),f=x(),S(b.$$.fragment),p=x(),S(L.$$.fragment),j=x(),S(E.$$.fragment),R=x(),S(V.$$.fragment),I=x(),S(k.$$.fragment),A=x(),S(F.$$.fragment),X=x(),S(J.$$.fragment),le=x(),S(D.$$.fragment),K=x(),S($e.$$.fragment),pe=x(),S(Z.$$.fragment),ne=x(),S(me.$$.fragment)},l(B){e=C(B,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1dl0775"&&(e.textContent=o),s=v(B),T(t.$$.fragment,B),c=v(B),T(n.$$.fragment,B),i=v(B),T(m.$$.fragment,B),l=v(B),T($.$$.fragment,B),_=v(B),T(u.$$.fragment,B),f=v(B),T(b.$$.fragment,B),p=v(B),T(L.$$.fragment,B),j=v(B),T(E.$$.fragment,B),R=v(B),T(V.$$.fragment,B),I=v(B),T(k.$$.fragment,B),A=v(B),T(F.$$.fragment,B),X=v(B),T(J.$$.fragment,B),le=v(B),T(D.$$.fragment,B),K=v(B),T($e.$$.fragment,B),pe=v(B),T(Z.$$.fragment,B),ne=v(B),T(me.$$.fragment,B)},m(B,ie){a(B,e,ie),a(B,s,ie),M(t,B,ie),a(B,c,ie),M(n,B,ie),a(B,i,ie),M(m,B,ie),a(B,l,ie),M($,B,ie),a(B,_,ie),M(u,B,ie),a(B,f,ie),M(b,B,ie),a(B,p,ie),M(L,B,ie),a(B,j,ie),M(E,B,ie),a(B,R,ie),M(V,B,ie),a(B,I,ie),M(k,B,ie),a(B,A,ie),M(F,B,ie),a(B,X,ie),M(J,B,ie),a(B,le,ie),M(D,B,ie),a(B,K,ie),M($e,B,ie),a(B,pe,ie),M(Z,B,ie),a(B,ne,ie),M(me,B,ie),y=!0},p(B,ie){const de={};ie&1&&(de.$$scope={dirty:ie,ctx:B}),t.$set(de);const ve={};ie&1&&(ve.$$scope={dirty:ie,ctx:B}),n.$set(ve);const W={};ie&1&&(W.$$scope={dirty:ie,ctx:B}),m.$set(W);const ae={};ie&1&&(ae.$$scope={dirty:ie,ctx:B}),$.$set(ae);const Ce={};ie&1&&(Ce.$$scope={dirty:ie,ctx:B}),u.$set(Ce);const _e={};ie&1&&(_e.$$scope={dirty:ie,ctx:B}),b.$set(_e);const he={};ie&1&&(he.$$scope={dirty:ie,ctx:B}),L.$set(he);const G={};ie&1&&(G.$$scope={dirty:ie,ctx:B}),E.$set(G);const ue={};ie&1&&(ue.$$scope={dirty:ie,ctx:B}),V.$set(ue);const xe={};ie&1&&(xe.$$scope={dirty:ie,ctx:B}),k.$set(xe);const N={};ie&1&&(N.$$scope={dirty:ie,ctx:B}),F.$set(N);const re={};ie&1&&(re.$$scope={dirty:ie,ctx:B}),J.$set(re);const we={};ie&1&&(we.$$scope={dirty:ie,ctx:B}),D.$set(we);const Q={};ie&1&&(Q.$$scope={dirty:ie,ctx:B}),$e.$set(Q);const ce={};ie&1&&(ce.$$scope={dirty:ie,ctx:B}),Z.$set(ce);const ge={};ie&1&&(ge.$$scope={dirty:ie,ctx:B}),me.$set(ge)},i(B){y||(P(t.$$.fragment,B),P(n.$$.fragment,B),P(m.$$.fragment,B),P($.$$.fragment,B),P(u.$$.fragment,B),P(b.$$.fragment,B),P(L.$$.fragment,B),P(E.$$.fragment,B),P(V.$$.fragment,B),P(k.$$.fragment,B),P(F.$$.fragment,B),P(J.$$.fragment,B),P(D.$$.fragment,B),P($e.$$.fragment,B),P(Z.$$.fragment,B),P(me.$$.fragment,B),y=!0)},o(B){q(t.$$.fragment,B),q(n.$$.fragment,B),q(m.$$.fragment,B),q($.$$.fragment,B),q(u.$$.fragment,B),q(b.$$.fragment,B),q(L.$$.fragment,B),q(E.$$.fragment,B),q(V.$$.fragment,B),q(k.$$.fragment,B),q(F.$$.fragment,B),q(J.$$.fragment,B),q(D.$$.fragment,B),q($e.$$.fragment,B),q(Z.$$.fragment,B),q(me.$$.fragment,B),y=!1},d(B){B&&(r(e),r(s),r(c),r(i),r(l),r(_),r(f),r(p),r(j),r(R),r(I),r(A),r(X),r(le),r(K),r(pe),r(ne)),H(t,B),H(n,B),H(m,B),H($,B),H(u,B),H(b,B),H(L,B),H(E,B),H(V,B),H(k,B),H(F,B),H(J,B),H(D,B),H($e,B),H(Z,B),H(me,B)}}}function dn(d){let e,o;return e=new U({props:{$$slots:{default:[mn]},$$scope:{ctx:d}}}),{c(){S(e.$$.fragment)},l(s){T(e.$$.fragment,s)},m(s,t){M(e,s,t),o=!0},p(s,[t]){const c={};t&1&&(c.$$scope={dirty:t,ctx:s}),e.$set(c)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){q(e.$$.fragment,s),o=!1},d(s){H(e,s)}}}class vn extends Me{constructor(e){super(),Te(this,e,null,dn,Pe,{})}}function xn(d){let e=`
                abstract class Animal {}
                abstract class AnimalVolant extends Animal {}
                abstract class AnimalNageur extends Animal {}
                class Canard extends AnimalVolant, AnimalNageur {}
            `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function _n(d){let e,o="L'héritage multiple",s,t,c="Comment hériter de deux classes ?",n,i,m,l,$=`En Java, ce n&#39;est pas possible !
			<br/> En revanche, on peut utiliser une interface pour simuler l&#39;héritage multiple.`,_;return i=new De({props:{$$slots:{default:[xn]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),S(i.$$.fragment),m=x(),l=h("p"),l.innerHTML=$,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-lz4bxy"&&(e.textContent=o),s=v(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1py5itu"&&(t.textContent=c),n=v(u),T(i.$$.fragment,u),m=v(u),l=C(u,"P",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-mtdftf"&&(l.innerHTML=$),this.h()},h(){w(l,"class","fragment")},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),M(i,u,f),a(u,m,f),a(u,l,f),_=!0},p(u,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:u}),i.$set(b)},i(u){_||(P(i.$$.fragment,u),_=!0)},o(u){q(i.$$.fragment,u),_=!1},d(u){u&&(r(e),r(s),r(t),r(n),r(m),r(l)),H(i,u)}}}function Cn(d){let e,o;return e=new U({props:{$$slots:{default:[_n]},$$scope:{ctx:d}}}),{c(){S(e.$$.fragment)},l(s){T(e.$$.fragment,s)},m(s,t){M(e,s,t),o=!0},p(s,t){const c={};t&1&&(c.$$scope={dirty:t,ctx:s}),e.$set(c)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){q(e.$$.fragment,s),o=!1},d(s){H(e,s)}}}function hn(d){let e=`
    
    public interface ArticleLouable {
      float reserver(Date from, Date to); 
      float rendre(int penalite);    
    }
        `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function gn(d){let e,o="Une interface est un type de référence similaire à une classe abstraite qui ne contient que des méthodes abstraites.",s,t,c=`Une interface n'a pas de code "par défaut", seulement des signatures de méthodes.`,n,i,m;return i=new oe({props:{$$slots:{default:[hn]},$$scope:{ctx:d}}}),{c(){e=h("p"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),S(i.$$.fragment)},l(l){e=C(l,"P",{"data-svelte-h":!0}),g(e)!=="svelte-knqkk"&&(e.textContent=o),s=v(l),t=C(l,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1phkx1u"&&(t.textContent=c),n=v(l),T(i.$$.fragment,l)},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),M(i,l,$),m=!0},p(l,$){const _={};$&1&&(_.$$scope={dirty:$,ctx:l}),i.$set(_)},i(l){m||(P(i.$$.fragment,l),m=!0)},o(l){q(i.$$.fragment,l),m=!1},d(l){l&&(r(e),r(s),r(t),r(n)),H(i,l)}}}function bn(d){let e,o="Implémentation d’une interface",s,t,c=`Une classe signale les interfaces qu’elle implémente grâce au mot-clé <code>implements</code>.
			Une classe concrète doit fournir une implémentation pour toutes les méthodes d’une interface,
			soit dans sa déclaration, soit parce qu’elle en hérite.`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c},l(n){e=C(n,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-6vv8ym"&&(e.textContent=o),s=v(n),t=C(n,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1vu2bky"&&(t.innerHTML=c)},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function Ln(d){let e=`
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
    `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function wn(d){let e,o="Implémentation d’une interface",s,t,c;return t=new oe({props:{className:"h-[70vh]",$$slots:{default:[Ln]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment)},l(n){e=C(n,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-6vv8ym"&&(e.textContent=o),s=v(n),T(t.$$.fragment,n)},m(n,i){a(n,e,i),a(n,s,i),M(t,n,i),c=!0},p(n,i){const m={};i&1&&(m.$$scope={dirty:i,ctx:n}),t.$set(m)},i(n){c||(P(t.$$.fragment,n),c=!0)},o(n){q(t.$$.fragment,n),c=!1},d(n){n&&(r(e),r(s)),H(t,n)}}}function Hn(d){let e,o="Implémentation d’une interface",s,t,c=`Une interface permet de mutualiser une implémentation entre des classes qui n’ont pas de lien
			d’héritage.<br/>
			Si une classe implémente une interface, ses classes dérivées héritent de cette implémentation,
			mais il est toutefois possible de la surcharger.`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c},l(n){e=C(n,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-6vv8ym"&&(e.textContent=o),s=v(n),t=C(n,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1p8gsb2"&&(t.innerHTML=c)},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function qn(d){let e,o="Comment choisir entre une classe abstraite et une interface ?",s,t,c=`<li><b>Classe abstraite</b> : Si, fondamentalement, on peut dire &quot;Un Dauphin est un Animal&quot;,
				alors, vous <i>pouvez</i> utiliser une classe abstraite.<br/></li> <li><b>Interface</b> : S&#39;il est plus juste de dire &quot;Un Dauphin peut nager&quot;, alors vous
				<i>devriez</i>
				utiliser une interface.
				<ul><li>Si quelque chose qui n&#39;aurait rien à voir avec vos animaux pouvait nager, utilisez une
						interface.<br/>
						Par exemple, un avion et un oiseau peuvent voler, mais ils n&#39;ont rien à voir l&#39;un avec l&#39;autre.</li> <li>Sinon, prévoyez plutôt une interface si vous pensez qu&#39;une classe fille pourrait avoir besoin
						d&#39;hériter de plusieurs classes.</li></ul></li>`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("ul"),t.innerHTML=c,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-95djsx"&&(e.textContent=o),s=v(n),t=C(n,"UL",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-exxt3p"&&(t.innerHTML=c),this.h()},h(){w(t,"class","text-4xl")},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function Pn(d){let e=`
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
        `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Mn(d){let e=`
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

                `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Tn(d){let e,o="Comment choisir entre une classe abstraite et une interface ?",s,t,c,n,i,m;return c=new De({props:{$$slots:{default:[Pn]},$$scope:{ctx:d}}}),i=new De({props:{$$slots:{default:[Mn]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("div"),S(c.$$.fragment),n=x(),S(i.$$.fragment),this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-95djsx"&&(e.textContent=o),s=v(l),t=C(l,"DIV",{class:!0});var $=fe(t);T(c.$$.fragment,$),n=v($),T(i.$$.fragment,$),$.forEach(r),this.h()},h(){w(t,"class","flex flex-row justify-center items-center")},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),M(c,t,null),Y(t,n),M(i,t,null),m=!0},p(l,$){const _={};$&1&&(_.$$scope={dirty:$,ctx:l}),c.$set(_);const u={};$&1&&(u.$$scope={dirty:$,ctx:l}),i.$set(u)},i(l){m||(P(c.$$.fragment,l),P(i.$$.fragment,l),m=!0)},o(l){q(c.$$.fragment,l),q(i.$$.fragment,l),m=!1},d(l){l&&(r(e),r(s),r(t)),H(c),H(i)}}}function Sn(d){let e=`
            public class BassinAquatique {
                public void faireNager(Nageur nageur) {
                    nageur.nager();
                    // Ici, qu'ils soient un humain, un dauphin ou un crocodile, 
                    // les instances de ces classes peuvent nager 
                    // peu importe que ce soit des mammifères ou des reptiles
                }
            }
            `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function jn(d){let e,o="Préambule au polymorphisme",s,t,c="Vos méthodes peuvent prendre en paramètre une interface, ce qui permet de passer n'importe quel objet qui l'implémente.",n,i,m;return i=new oe({props:{class:" highlighter language-java",$$slots:{default:[Sn]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),S(i.$$.fragment)},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-mwdtiv"&&(e.textContent=o),s=v(l),t=C(l,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1nz7nr5"&&(t.textContent=c),n=v(l),T(i.$$.fragment,l)},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),M(i,l,$),m=!0},p(l,$){const _={};$&1&&(_.$$scope={dirty:$,ctx:l}),i.$set(_)},i(l){m||(P(i.$$.fragment,l),m=!0)},o(l){q(i.$$.fragment,l),m=!1},d(l){l&&(r(e),r(s),r(t),r(n)),H(i,l)}}}function An(d){let e=`
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

            `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function En(d){let e,o="Héritage d’interface",s,t,c=`Une interface peut hériter d’une ou plusieurs autres interfaces. Dans ce cas, elle hérite de
			toutes les méthodes déclarées dans les interfaces parentes. Pour déclarer un héritage, on
			utilise le mot-clé <code>extends</code>.`,n,i,m;return i=new oe({props:{className:"highlighter language-java",$$slots:{default:[An]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c,n=x(),S(i.$$.fragment)},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-j0acen"&&(e.textContent=o),s=v(l),t=C(l,"P",{"data-svelte-h":!0}),g(t)!=="svelte-tpi5ka"&&(t.innerHTML=c),n=v(l),T(i.$$.fragment,l)},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),M(i,l,$),m=!0},p(l,$){const _={};$&1&&(_.$$scope={dirty:$,ctx:l}),i.$set(_)},i(l){m||(P(i.$$.fragment,l),m=!0)},o(l){q(i.$$.fragment,l),m=!1},d(l){l&&(r(e),r(s),r(t),r(n)),H(i,l)}}}function Dn(d){let e=`
                interface Omnivore extends Herbivore, Carnivore {...}
                class Humain implements Omnivore {...}

                var bob = new Humain();
                if (bob instanceof Carnivore) {
                    System.out.println("bob mange de la viande");
                }
                if (bob instanceof Herbivore) {
                    System.out.println("bob mange des plantes");
                }
            `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function In(d){let e,o="Héritage d’interface",s,t,c="Comme chaque interface introduit un nouveau type, il est possible de contrôler, grâce au mot-clé <code>instanceof</code>, qu’une variable, un paramètre ou un attribut est bien une instance compatible avec cette interface.",n,i,m;return i=new oe({props:{className:"highlighter language-java",$$slots:{default:[Dn]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c,n=x(),S(i.$$.fragment)},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-j0acen"&&(e.textContent=o),s=v(l),t=C(l,"P",{"data-svelte-h":!0}),g(t)!=="svelte-19uyonh"&&(t.innerHTML=c),n=v(l),T(i.$$.fragment,l)},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),M(i,l,$),m=!0},p(l,$){const _={};$&1&&(_.$$scope={dirty:$,ctx:l}),i.$set(_)},i(l){m||(P(i.$$.fragment,l),m=!0)},o(l){q(i.$$.fragment,l),m=!1},d(l){l&&(r(e),r(s),r(t),r(n)),H(i,l)}}}function kn(d){let e=`
            interface IConfidential {}
            class DossierMedical implements IConfidential {}
            ...
            void logguerDansUnFichier(Object p) {
                if (p instanceof IConfidential) {
                    return; // On ne loggue pas les informations confidentielles
                }
            }
            `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function On(d){let e,o="Les interfaces marqueurs",s,t,c=`Une interface sans méthode est appelée une interface marqueur. <br/>
            Elle est utilisée pour étiqueter une classe.`,n,i,m="On les utilise ainsi",l,$,_,u,f="Rappelez-vous, comme on peut implémenter plusieurs interfaces, n'importe quelle classe peut implémenter une interface marqueur.",b;return $=new oe({props:{className:"highlighter language-java",$$slots:{default:[kn]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c,n=x(),i=h("p"),i.textContent=m,l=x(),S($.$$.fragment),_=x(),u=h("p"),u.textContent=f},l(p){e=C(p,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-9j49lb"&&(e.textContent=o),s=v(p),t=C(p,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1oln2yg"&&(t.innerHTML=c),n=v(p),i=C(p,"P",{"data-svelte-h":!0}),g(i)!=="svelte-1pg3gma"&&(i.textContent=m),l=v(p),T($.$$.fragment,p),_=v(p),u=C(p,"P",{"data-svelte-h":!0}),g(u)!=="svelte-zr6vig"&&(u.textContent=f)},m(p,L){a(p,e,L),a(p,s,L),a(p,t,L),a(p,n,L),a(p,i,L),a(p,l,L),M($,p,L),a(p,_,L),a(p,u,L),b=!0},p(p,L){const j={};L&1&&(j.$$scope={dirty:L,ctx:p}),$.$set(j)},i(p){b||(P($.$$.fragment,p),b=!0)},o(p){q($.$$.fragment,p),b=!1},d(p){p&&(r(e),r(s),r(t),r(n),r(i),r(l),r(_),r(u)),H($,p)}}}function Vn(d){let e,o="Conventions de nommage",s,t,c=`<li>Les interfaces sont nommées avec un nom qui commence par &quot;I&quot; suivi d&#39;un nom.</li> <li>Le nom est un adjectif ou un nom qui décrit un comportement.</li> <li>Exemple :
                <ul><li>IVolant</li> <li>IConfidentiel</li> <li><s>INageur</s></li> <li><s>Bateau</s></li> <li><s>Vitesse</s></li></ul></li>`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("ul"),t.innerHTML=c},l(n){e=C(n,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1cx5ud7"&&(e.textContent=o),s=v(n),t=C(n,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-16lqdjx"&&(t.innerHTML=c)},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function zn(d){let e,o="Les interfaces",s,t,c,n,i,m,l,$,_,u,f,b,p,L,j,E,R,V,I,k,A,F,X;return t=new U({props:{$$slots:{default:[gn]},$$scope:{ctx:d}}}),n=new U({props:{$$slots:{default:[bn]},$$scope:{ctx:d}}}),m=new U({props:{$$slots:{default:[wn]},$$scope:{ctx:d}}}),$=new U({props:{$$slots:{default:[Hn]},$$scope:{ctx:d}}}),u=new U({props:{$$slots:{default:[qn]},$$scope:{ctx:d}}}),b=new U({props:{$$slots:{default:[Tn]},$$scope:{ctx:d}}}),L=new U({props:{$$slots:{default:[jn]},$$scope:{ctx:d}}}),E=new U({props:{$$slots:{default:[En]},$$scope:{ctx:d}}}),V=new U({props:{$$slots:{default:[In]},$$scope:{ctx:d}}}),k=new U({props:{$$slots:{default:[On]},$$scope:{ctx:d}}}),F=new U({props:{$$slots:{default:[Vn]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment),c=x(),S(n.$$.fragment),i=x(),S(m.$$.fragment),l=x(),S($.$$.fragment),_=x(),S(u.$$.fragment),f=x(),S(b.$$.fragment),p=x(),S(L.$$.fragment),j=x(),S(E.$$.fragment),R=x(),S(V.$$.fragment),I=x(),S(k.$$.fragment),A=x(),S(F.$$.fragment)},l(J){e=C(J,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-lczfm4"&&(e.textContent=o),s=v(J),T(t.$$.fragment,J),c=v(J),T(n.$$.fragment,J),i=v(J),T(m.$$.fragment,J),l=v(J),T($.$$.fragment,J),_=v(J),T(u.$$.fragment,J),f=v(J),T(b.$$.fragment,J),p=v(J),T(L.$$.fragment,J),j=v(J),T(E.$$.fragment,J),R=v(J),T(V.$$.fragment,J),I=v(J),T(k.$$.fragment,J),A=v(J),T(F.$$.fragment,J)},m(J,le){a(J,e,le),a(J,s,le),M(t,J,le),a(J,c,le),M(n,J,le),a(J,i,le),M(m,J,le),a(J,l,le),M($,J,le),a(J,_,le),M(u,J,le),a(J,f,le),M(b,J,le),a(J,p,le),M(L,J,le),a(J,j,le),M(E,J,le),a(J,R,le),M(V,J,le),a(J,I,le),M(k,J,le),a(J,A,le),M(F,J,le),X=!0},p(J,le){const D={};le&1&&(D.$$scope={dirty:le,ctx:J}),t.$set(D);const K={};le&1&&(K.$$scope={dirty:le,ctx:J}),n.$set(K);const $e={};le&1&&($e.$$scope={dirty:le,ctx:J}),m.$set($e);const pe={};le&1&&(pe.$$scope={dirty:le,ctx:J}),$.$set(pe);const Z={};le&1&&(Z.$$scope={dirty:le,ctx:J}),u.$set(Z);const ne={};le&1&&(ne.$$scope={dirty:le,ctx:J}),b.$set(ne);const me={};le&1&&(me.$$scope={dirty:le,ctx:J}),L.$set(me);const y={};le&1&&(y.$$scope={dirty:le,ctx:J}),E.$set(y);const B={};le&1&&(B.$$scope={dirty:le,ctx:J}),V.$set(B);const ie={};le&1&&(ie.$$scope={dirty:le,ctx:J}),k.$set(ie);const de={};le&1&&(de.$$scope={dirty:le,ctx:J}),F.$set(de)},i(J){X||(P(t.$$.fragment,J),P(n.$$.fragment,J),P(m.$$.fragment,J),P($.$$.fragment,J),P(u.$$.fragment,J),P(b.$$.fragment,J),P(L.$$.fragment,J),P(E.$$.fragment,J),P(V.$$.fragment,J),P(k.$$.fragment,J),P(F.$$.fragment,J),X=!0)},o(J){q(t.$$.fragment,J),q(n.$$.fragment,J),q(m.$$.fragment,J),q($.$$.fragment,J),q(u.$$.fragment,J),q(b.$$.fragment,J),q(L.$$.fragment,J),q(E.$$.fragment,J),q(V.$$.fragment,J),q(k.$$.fragment,J),q(F.$$.fragment,J),X=!1},d(J){J&&(r(e),r(s),r(c),r(i),r(l),r(_),r(f),r(p),r(j),r(R),r(I),r(A)),H(t,J),H(n,J),H(m,J),H($,J),H(u,J),H(b,J),H(L,J),H(E,J),H(V,J),H(k,J),H(F,J)}}}function Un(d){let e,o,s,t;return e=new U({props:{$$slots:{default:[Cn]},$$scope:{ctx:d}}}),s=new U({props:{$$slots:{default:[zn]},$$scope:{ctx:d}}}),{c(){S(e.$$.fragment),o=x(),S(s.$$.fragment)},l(c){T(e.$$.fragment,c),o=v(c),T(s.$$.fragment,c)},m(c,n){M(e,c,n),a(c,o,n),M(s,c,n),t=!0},p(c,[n]){const i={};n&1&&(i.$$scope={dirty:n,ctx:c}),e.$set(i);const m={};n&1&&(m.$$scope={dirty:n,ctx:c}),s.$set(m)},i(c){t||(P(e.$$.fragment,c),P(s.$$.fragment,c),t=!0)},o(c){q(e.$$.fragment,c),q(s.$$.fragment,c),t=!1},d(c){c&&r(o),H(e,c),H(s,c)}}}class Bn extends Me{constructor(e){super(),Te(this,e,null,Un,Pe,{})}}function Jn(d){let e,o="L'encapsulation est un concept fondamental de la programmation orientée objet. Elle consiste à cacher les détails internes d'une classe et à ne fournir qu'une interface publique pour interagir avec cette classe.";return{c(){e=h("p"),e.textContent=o},l(s){e=C(s,"P",{"data-svelte-h":!0}),g(e)!=="svelte-18kz425"&&(e.textContent=o)},m(s,t){a(s,e,t)},p:z,d(s){s&&r(e)}}}function Rn(d){let e,o="L'encapsulation permet de protéger les données et de contrôler leur accès. Elle rend également le code plus modulaire et plus facile à maintenir.";return{c(){e=h("p"),e.textContent=o},l(s){e=C(s,"P",{"data-svelte-h":!0}),g(e)!=="svelte-p7ing"&&(e.textContent=o)},m(s,t){a(s,e,t)},p:z,d(s){s&&r(e)}}}function Nn(d){let e,o="Pour encapsuler des données, on utilise des modificateurs d'accès qui déterminent la visibilité des attributs et des méthodes d'une classe.",s,t,c="<li><code>public</code> : accessible depuis n&#39;importe où</li> <li><code>private</code> : accessible uniquement depuis la classe elle-même</li> <li><code>protected</code> : accessible depuis la classe et ses sous-classes</li>";return{c(){e=h("p"),e.textContent=o,s=x(),t=h("ul"),t.innerHTML=c},l(n){e=C(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1yfugik"&&(e.textContent=o),s=v(n),t=C(n,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-be97eu"&&(t.innerHTML=c)},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function Fn(d){let e=`
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
    `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Gn(d){let e,o="Voici un exemple d'encapsulation en Java :",s,t,c;return t=new oe({props:{$$slots:{default:[Fn]},$$scope:{ctx:d}}}),{c(){e=h("p"),e.textContent=o,s=x(),S(t.$$.fragment)},l(n){e=C(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-sf7cl9"&&(e.textContent=o),s=v(n),T(t.$$.fragment,n)},m(n,i){a(n,e,i),a(n,s,i),M(t,n,i),c=!0},p(n,i){const m={};i&1&&(m.$$scope={dirty:i,ctx:n}),t.$set(m)},i(n){c||(P(t.$$.fragment,n),c=!0)},o(n){q(t.$$.fragment,n),c=!1},d(n){n&&(r(e),r(s)),H(t,n)}}}function Qn(d){let e,o=`Dans cet exemple, les attributs <code>nom</code> et <code>age</code> sont privés et ne peuvent pas être accédés directement depuis l&#39;extérieur.
			On utilise des méthodes publiques, <code>getNom</code>, <code>setNom</code>, <code>getAge</code> et <code>setAge</code>, pour y accéder et les modifier.`,s,t,c="Fondamentalement, <code>getNom</code> et <code>setNom</code> sont de simples méthodes, mais compte tenu de leur rôle, on les appelle des <i>accesseurs</i> et des <i>mutateurs</i>.";return{c(){e=h("p"),e.innerHTML=o,s=x(),t=h("p"),t.innerHTML=c,this.h()},l(n){e=C(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1kva8j3"&&(e.innerHTML=o),s=v(n),t=C(n,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-h4vula"&&(t.innerHTML=c),this.h()},h(){w(t,"class","text-important")},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function yn(d){let e=`
    public void setAge(int age) {
        if (age >= 0) {
            this.age = age;
        }
    }
    `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Kn(d){let e,o=`L&#39;encapsulation permet de contrôler l&#39;accès aux données et de s&#39;assurer qu&#39;elles sont manipulées de manière cohérente.
			Par exemple, on peut ajouter des vérifications dans les méthodes <code>set</code> pour s&#39;assurer que les valeurs sont valides.`,s,t,c;return t=new oe({props:{$$slots:{default:[yn]},$$scope:{ctx:d}}}),{c(){e=h("p"),e.innerHTML=o,s=x(),S(t.$$.fragment)},l(n){e=C(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1ykoszv"&&(e.innerHTML=o),s=v(n),T(t.$$.fragment,n)},m(n,i){a(n,e,i),a(n,s,i),M(t,n,i),c=!0},p(n,i){const m={};i&1&&(m.$$scope={dirty:i,ctx:n}),t.$set(m)},i(n){c||(P(t.$$.fragment,n),c=!0)},o(n){q(t.$$.fragment,n),c=!1},d(n){n&&(r(e),r(s)),H(t,n)}}}function Wn(d){let e,o=`L&#39;utilisation du modificateur <code>protected</code> permet aux classes dérivées d&#39;accéder aux attributs et méthodes de la classe parente.
			Cela est utile lorsque l&#39;on souhaite permettre à des sous-classes d&#39;utiliser ou de modifier des données tout en les protégeant de l&#39;accès direct extérieur.`;return{c(){e=h("p"),e.innerHTML=o},l(s){e=C(s,"P",{"data-svelte-h":!0}),g(e)!=="svelte-63vpew"&&(e.innerHTML=o)},m(s,t){a(s,e,t)},p:z,d(s){s&&r(e)}}}function Zn(d){let e=`
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
    `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Yn(d){let e,o,s,t="Dans cet exemple, l&#39;attribut <code>nom</code> est protégé, ce qui permet à la classe <code>Chien</code> d&#39;y accéder dans sa méthode <code>aboyer</code>.",c;return e=new oe({props:{$$slots:{default:[Zn]},$$scope:{ctx:d}}}),{c(){S(e.$$.fragment),o=x(),s=h("p"),s.innerHTML=t},l(n){T(e.$$.fragment,n),o=v(n),s=C(n,"P",{"data-svelte-h":!0}),g(s)!=="svelte-68bfas"&&(s.innerHTML=t)},m(n,i){M(e,n,i),a(n,o,i),a(n,s,i),c=!0},p(n,i){const m={};i&1&&(m.$$scope={dirty:i,ctx:n}),e.$set(m)},i(n){c||(P(e.$$.fragment,n),c=!0)},o(n){q(e.$$.fragment,n),c=!1},d(n){n&&(r(o),r(s)),H(e,n)}}}function Xn(d){let e=`
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
    `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function ei(d){let e,o=`Les attributs privés sont utilisés pour restreindre l'accès direct aux données sensibles ou critiques,\r
			garantissant ainsi que seules des méthodes contrôlées peuvent les modifier.`,s,t,c,n,i="Dans cet exemple, le solde du compte est privé et ne peut être modifié que par les méthodes <code>deposer</code> et <code>retirer</code>, lesquelles effectuent des vérifications.",m;return t=new oe({props:{$$slots:{default:[Xn]},$$scope:{ctx:d}}}),{c(){e=h("p"),e.textContent=o,s=x(),S(t.$$.fragment),c=x(),n=h("p"),n.innerHTML=i,this.h()},l(l){e=C(l,"P",{"data-svelte-h":!0}),g(e)!=="svelte-c17ad2"&&(e.textContent=o),s=v(l),T(t.$$.fragment,l),c=v(l),n=C(l,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-13qfjds"&&(n.innerHTML=i),this.h()},h(){w(n,"class","smaller")},m(l,$){a(l,e,$),a(l,s,$),M(t,l,$),a(l,c,$),a(l,n,$),m=!0},p(l,$){const _={};$&1&&(_.$$scope={dirty:$,ctx:l}),t.$set(_)},i(l){m||(P(t.$$.fragment,l),m=!0)},o(l){q(t.$$.fragment,l),m=!1},d(l){l&&(r(e),r(s),r(c),r(n)),H(t,l)}}}function ti(d){let e,o="Verbosité",s,t,c="Le Java est parfois critiqué pour sa verbosité. En effet, le code Java peut sembler plus long et plus complexe que d'autres langages.",n,i,m="Vous devez écrire environ 7 lignes pour déclarer un simple attribut avec ses accesseurs et mutateurs.";return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),i=h("p"),i.textContent=m},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-11a3931"&&(e.textContent=o),s=v(l),t=C(l,"P",{"data-svelte-h":!0}),g(t)!=="svelte-z5t63c"&&(t.textContent=c),n=v(l),i=C(l,"P",{"data-svelte-h":!0}),g(i)!=="svelte-173up6e"&&(i.textContent=m)},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),a(l,i,$)},p:z,d(l){l&&(r(e),r(s),r(t),r(n),r(i))}}}function si(d){let e=`
        // C#
        class Personne {
            public string Nom { get; }
            public int Age    { get; set; }
            public int Taille {
                get; 
                set => field = value; 
            }
        }
        `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function li(d){let e=`
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
                `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function ni(d){let e,o="D'autres langages permettent de déclarer des accesseurs et mutateurs de manière plus concise :",s,t,c,n,i,m,l,$="En Java, un IDE peut générer automatiquement ces méthodes. Cela peut sembler pénible, mais il faut le faire.",_;return c=new oe({props:{$$slots:{default:[si]},$$scope:{ctx:d}}}),i=new oe({props:{$$slots:{default:[li]},$$scope:{ctx:d}}}),{c(){e=h("p"),e.textContent=o,s=x(),t=h("div"),S(c.$$.fragment),n=x(),S(i.$$.fragment),m=x(),l=h("p"),l.textContent=$,this.h()},l(u){e=C(u,"P",{"data-svelte-h":!0}),g(e)!=="svelte-v898e4"&&(e.textContent=o),s=v(u),t=C(u,"DIV",{class:!0});var f=fe(t);T(c.$$.fragment,f),n=v(f),T(i.$$.fragment,f),f.forEach(r),m=v(u),l=C(u,"P",{"data-svelte-h":!0}),g(l)!=="svelte-1mll0hr"&&(l.textContent=$),this.h()},h(){w(t,"class","flex flex-row")},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),M(c,t,null),Y(t,n),M(i,t,null),a(u,m,f),a(u,l,f),_=!0},p(u,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:u}),c.$set(b);const p={};f&1&&(p.$$scope={dirty:f,ctx:u}),i.$set(p)},i(u){_||(P(c.$$.fragment,u),P(i.$$.fragment,u),_=!0)},o(u){q(c.$$.fragment,u),q(i.$$.fragment,u),_=!1},d(u){u&&(r(e),r(s),r(t),r(m),r(l)),H(c),H(i)}}}function ii(d){let e=`
    public void setMobilePhoneNumber(String mobilePhoneNumber) {
        this.mobilePhoneNumber = mobilePhoneNumber;
        envoyerEmailPourPrevenirUtilisateurDeLaModification(email, mobilePhoneNumber);
    }
    `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function ri(d){let e,o="Maintenance",s,t,c=`En encapsulant les données et en contrôlant leur accès, vous facilitez la maintenance de votre code.\r
			Imaginez que vous avez laissé un attribut public et que vous le modifiez dans 50 endroits différents.\r
			Si vous souhaitez désormais enregistrer chaque modification, vous devrez intervenir à ces 50 endroits.`,n,i,m;return i=new oe({props:{$$slots:{default:[ii]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),S(i.$$.fragment)},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1ky5g9v"&&(e.textContent=o),s=v(l),t=C(l,"P",{"data-svelte-h":!0}),g(t)!=="svelte-ucx1td"&&(t.textContent=c),n=v(l),T(i.$$.fragment,l)},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),M(i,l,$),m=!0},p(l,$){const _={};$&1&&(_.$$scope={dirty:$,ctx:l}),i.$set(_)},i(l){m||(P(i.$$.fragment,l),m=!0)},o(l){q(i.$$.fragment,l),m=!1},d(l){l&&(r(e),r(s),r(t),r(n)),H(i,l)}}}function ai(d){let e,o="Encapsulation",s,t,c,n,i,m,l,$,_,u,f,b,p,L,j,E,R,V,I,k,A,F,X,J,le;return t=new U({props:{$$slots:{default:[Jn]},$$scope:{ctx:d}}}),n=new U({props:{$$slots:{default:[Rn]},$$scope:{ctx:d}}}),m=new U({props:{$$slots:{default:[Nn]},$$scope:{ctx:d}}}),$=new U({props:{$$slots:{default:[Gn]},$$scope:{ctx:d}}}),u=new U({props:{$$slots:{default:[Qn]},$$scope:{ctx:d}}}),b=new U({props:{$$slots:{default:[Kn]},$$scope:{ctx:d}}}),L=new U({props:{$$slots:{default:[Wn]},$$scope:{ctx:d}}}),E=new U({props:{$$slots:{default:[Yn]},$$scope:{ctx:d}}}),V=new U({props:{$$slots:{default:[ei]},$$scope:{ctx:d}}}),k=new U({props:{data_background_color:"#00353F",$$slots:{default:[ti]},$$scope:{ctx:d}}}),F=new U({props:{data_background_color:"#00353F",$$slots:{default:[ni]},$$scope:{ctx:d}}}),J=new U({props:{$$slots:{default:[ri]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment),c=x(),S(n.$$.fragment),i=x(),S(m.$$.fragment),l=x(),S($.$$.fragment),_=x(),S(u.$$.fragment),f=x(),S(b.$$.fragment),p=x(),S(L.$$.fragment),j=x(),S(E.$$.fragment),R=x(),S(V.$$.fragment),I=x(),S(k.$$.fragment),A=x(),S(F.$$.fragment),X=x(),S(J.$$.fragment)},l(D){e=C(D,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-d8x7o6"&&(e.textContent=o),s=v(D),T(t.$$.fragment,D),c=v(D),T(n.$$.fragment,D),i=v(D),T(m.$$.fragment,D),l=v(D),T($.$$.fragment,D),_=v(D),T(u.$$.fragment,D),f=v(D),T(b.$$.fragment,D),p=v(D),T(L.$$.fragment,D),j=v(D),T(E.$$.fragment,D),R=v(D),T(V.$$.fragment,D),I=v(D),T(k.$$.fragment,D),A=v(D),T(F.$$.fragment,D),X=v(D),T(J.$$.fragment,D)},m(D,K){a(D,e,K),a(D,s,K),M(t,D,K),a(D,c,K),M(n,D,K),a(D,i,K),M(m,D,K),a(D,l,K),M($,D,K),a(D,_,K),M(u,D,K),a(D,f,K),M(b,D,K),a(D,p,K),M(L,D,K),a(D,j,K),M(E,D,K),a(D,R,K),M(V,D,K),a(D,I,K),M(k,D,K),a(D,A,K),M(F,D,K),a(D,X,K),M(J,D,K),le=!0},p(D,K){const $e={};K&1&&($e.$$scope={dirty:K,ctx:D}),t.$set($e);const pe={};K&1&&(pe.$$scope={dirty:K,ctx:D}),n.$set(pe);const Z={};K&1&&(Z.$$scope={dirty:K,ctx:D}),m.$set(Z);const ne={};K&1&&(ne.$$scope={dirty:K,ctx:D}),$.$set(ne);const me={};K&1&&(me.$$scope={dirty:K,ctx:D}),u.$set(me);const y={};K&1&&(y.$$scope={dirty:K,ctx:D}),b.$set(y);const B={};K&1&&(B.$$scope={dirty:K,ctx:D}),L.$set(B);const ie={};K&1&&(ie.$$scope={dirty:K,ctx:D}),E.$set(ie);const de={};K&1&&(de.$$scope={dirty:K,ctx:D}),V.$set(de);const ve={};K&1&&(ve.$$scope={dirty:K,ctx:D}),k.$set(ve);const W={};K&1&&(W.$$scope={dirty:K,ctx:D}),F.$set(W);const ae={};K&1&&(ae.$$scope={dirty:K,ctx:D}),J.$set(ae)},i(D){le||(P(t.$$.fragment,D),P(n.$$.fragment,D),P(m.$$.fragment,D),P($.$$.fragment,D),P(u.$$.fragment,D),P(b.$$.fragment,D),P(L.$$.fragment,D),P(E.$$.fragment,D),P(V.$$.fragment,D),P(k.$$.fragment,D),P(F.$$.fragment,D),P(J.$$.fragment,D),le=!0)},o(D){q(t.$$.fragment,D),q(n.$$.fragment,D),q(m.$$.fragment,D),q($.$$.fragment,D),q(u.$$.fragment,D),q(b.$$.fragment,D),q(L.$$.fragment,D),q(E.$$.fragment,D),q(V.$$.fragment,D),q(k.$$.fragment,D),q(F.$$.fragment,D),q(J.$$.fragment,D),le=!1},d(D){D&&(r(e),r(s),r(c),r(i),r(l),r(_),r(f),r(p),r(j),r(R),r(I),r(A),r(X)),H(t,D),H(n,D),H(m,D),H($,D),H(u,D),H(b,D),H(L,D),H(E,D),H(V,D),H(k,D),H(F,D),H(J,D)}}}function ui(d){let e,o;return e=new U({props:{$$slots:{default:[ai]},$$scope:{ctx:d}}}),{c(){S(e.$$.fragment)},l(s){T(e.$$.fragment,s)},m(s,t){M(e,s,t),o=!0},p(s,[t]){const c={};t&1&&(c.$$scope={dirty:t,ctx:s}),e.$set(c)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){q(e.$$.fragment,s),o=!1},d(s){H(e,s)}}}class oi extends Me{constructor(e){super(),Te(this,e,null,ui,Pe,{})}}function $i(d){let e,o="Qu'est-ce qu'un objet ?",s,t,c='Un <span class="text-important">objet</span> est une entité qui regroupe :',n,i,m='<li class="fragment"><b>Des données</b> → les <span class="text-important">attributs</span></li> <li class="fragment"><b>Des comportements</b> → les <span class="text-important">méthodes</span></li>',l,$,_='Un objet est une <b>instance</b> d&#39;une <span class="text-important">classe</span>.',u,f,b=`La classe c'est le plan, l'objet c'est la maison construite à partir du plan.\r
			On peut construire plusieurs maisons à partir du même plan.`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c,n=x(),i=h("ul"),i.innerHTML=m,l=x(),$=h("p"),$.innerHTML=_,u=x(),f=h("aside"),f.textContent=b,this.h()},l(p){e=C(p,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1j2xnsl"&&(e.textContent=o),s=v(p),t=C(p,"P",{"data-svelte-h":!0}),g(t)!=="svelte-ikoph5"&&(t.innerHTML=c),n=v(p),i=C(p,"UL",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-urcwzy"&&(i.innerHTML=m),l=v(p),$=C(p,"P",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-126jdov"&&($.innerHTML=_),u=v(p),f=C(p,"ASIDE",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-1j9siwx"&&(f.textContent=b),this.h()},h(){w(i,"class","mt-4"),w($,"class","fragment mt-6"),w(f,"class","notes")},m(p,L){a(p,e,L),a(p,s,L),a(p,t,L),a(p,n,L),a(p,i,L),a(p,l,L),a(p,$,L),a(p,u,L),a(p,f,L)},p:z,d(p){p&&(r(e),r(s),r(t),r(n),r(i),r(l),r($),r(u),r(f))}}}function fi(d){let e=`
@startuml
class Personne {
  - nom: String
  - age: int
  + sePresenter()
}

object "jean : Personne" as jean {
  nom = "Jean"
  age = 25
}

object "marie : Personne" as marie {
  nom = "Marie"
  age = 30
}

Personne <|.. jean
Personne <|.. marie
@enduml
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function ci(d){let e,o="Classe vs Objet",s,t,c='<div class="p-4 bg-accent-950 rounded-lg"><h4 class="text-important">📐 Classe</h4> <p class="text-xl mt-2">Le <b>plan</b>, le modèle</p> <p class="text-sm text-gray-400 mt-2">Définit les attributs et méthodes</p></div> <div class="p-4 bg-accent-950 rounded-lg"><h4 class="text-important">🏠 Objet</h4> <p class="text-xl mt-2">L&#39;<b>instance</b>, la réalisation</p> <p class="text-sm text-gray-400 mt-2">Créé à partir de la classe</p></div>',n,i,m;return i=new De({props:{className:"mt-6 fragment",$$slots:{default:[fi]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("div"),t.innerHTML=c,n=x(),S(i.$$.fragment),this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-aj9wlo"&&(e.textContent=o),s=v(l),t=C(l,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-17fw1f8"&&(t.innerHTML=c),n=v(l),T(i.$$.fragment,l),this.h()},h(){w(t,"class","grid grid-cols-2 gap-8 mt-6")},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),M(i,l,$),m=!0},p(l,$){const _={};$&1&&(_.$$scope={dirty:$,ctx:l}),i.$set(_)},i(l){m||(P(i.$$.fragment,l),m=!0)},o(l){q(i.$$.fragment,l),m=!1},d(l){l&&(r(e),r(s),r(t),r(n)),H(i,l)}}}function pi(d){let e,o="Créer des objets",s,t,c="Le mot-clé new et les constructeurs";return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,this.h()},l(n){e=C(n,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1mkb5o2"&&(e.textContent=o),s=v(n),t=C(n,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-4k1pcc"&&(t.textContent=c),this.h()},h(){w(e,"class","text-5xl"),w(t,"class","text-2xl text-gray-400")},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function mi(d){let e=`
Personne jean = new Personne();
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function di(d){let e,o="Créer un objet avec new",s,t,c='Pour créer un objet, on utilise le mot-clé <code class="text-important">new</code> suivi du nom de la classe.',n,i,m,l,$='<p>Que se passe-t-il ?</p> <ol class="text-xl"><li class="fragment">Java alloue de la mémoire pour l&#39;objet</li> <li class="fragment">Le <b>constructeur</b> de la classe est appelé</li> <li class="fragment">L&#39;objet est prêt à être utilisé</li></ol>',_;return i=new oe({props:{$$slots:{default:[mi]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c,n=x(),S(i.$$.fragment),m=x(),l=h("div"),l.innerHTML=$,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1b88vsb"&&(e.textContent=o),s=v(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1d9k2wi"&&(t.innerHTML=c),n=v(u),T(i.$$.fragment,u),m=v(u),l=C(u,"DIV",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-u2udmp"&&(l.innerHTML=$),this.h()},h(){w(l,"class","fragment mt-6")},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),M(i,u,f),a(u,m,f),a(u,l,f),_=!0},p(u,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:u}),i.$set(b)},i(u){_||(P(i.$$.fragment,u),_=!0)},o(u){q(i.$$.fragment,u),_=!1},d(u){u&&(r(e),r(s),r(t),r(n),r(m),r(l)),H(i,u)}}}function vi(d){let e=`
public class Personne {
    String nom;
    String prenom;
    int age;

    // Constructeur
    public Personne(String nom, String prenom, int age) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
}

Personne p = new Personne("PICOT", "Alexis", 28);
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function xi(d){let e,o="Le constructeur",s,t,c="Le constructeur est une <b>méthode spéciale</b> qui initialise l&#39;objet.",n,i,m,l,$=`Le constructeur a le même nom que la classe, et pas de type de retour.\r
			this fait référence à l'objet en cours de création.`,_;return i=new oe({props:{lines:"5-9|12",$$slots:{default:[vi]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c,n=x(),S(i.$$.fragment),m=x(),l=h("aside"),l.textContent=$,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1mde0ng"&&(e.textContent=o),s=v(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-acm114"&&(t.innerHTML=c),n=v(u),T(i.$$.fragment,u),m=v(u),l=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-czfue9"&&(l.textContent=$),this.h()},h(){w(l,"class","notes")},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),M(i,u,f),a(u,m,f),a(u,l,f),_=!0},p(u,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:u}),i.$set(b)},i(u){_||(P(i.$$.fragment,u),_=!0)},o(u){q(i.$$.fragment,u),_=!1},d(u){u&&(r(e),r(s),r(t),r(n),r(m),r(l)),H(i,u)}}}function _i(d){let e=`
public Personne(String nom, String prenom, int age) {
    this.nom = nom;      // this.nom = attribut de l'objet
    this.prenom = prenom; // nom = paramètre du constructeur
    this.age = age;
}
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Ci(d){let e,o="Le mot-clé this",s,t,c='<code class="text-important">this</code> fait référence à l&#39;objet <b>courant</b>.',n,i,m,l,$="<code>this</code> permet de distinguer l&#39;attribut du paramètre quand ils ont le même nom.",_;return i=new oe({props:{$$slots:{default:[_i]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c,n=x(),S(i.$$.fragment),m=x(),l=h("p"),l.innerHTML=$,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-639qc6"&&(e.textContent=o),s=v(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1d8cgp5"&&(t.innerHTML=c),n=v(u),T(i.$$.fragment,u),m=v(u),l=C(u,"P",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-vxfnkp"&&(l.innerHTML=$),this.h()},h(){w(l,"class","fragment mt-4 text-accent-200")},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),M(i,u,f),a(u,m,f),a(u,l,f),_=!0},p(u,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:u}),i.$set(b)},i(u){_||(P(i.$$.fragment,u),_=!0)},o(u){q(i.$$.fragment,u),_=!1},d(u){u&&(r(e),r(s),r(t),r(n),r(m),r(l)),H(i,u)}}}function hi(d){let e=`
public class Personne {
    String nom;
    int age;
    // Pas de constructeur défini → constructeur par défaut
}

Personne p = new Personne();  // ✅ OK
p.nom = "Jean";               // On initialise après
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function gi(d){let e,o="Constructeur par défaut",s,t,c="Si vous ne définissez aucun constructeur, Java en crée un <b>par défaut</b> (sans paramètres).",n,i,m,l,$="⚠️ Dès que vous définissez un constructeur, le constructeur par défaut disparaît !",_;return i=new oe({props:{$$slots:{default:[hi]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c,n=x(),S(i.$$.fragment),m=x(),l=h("p"),l.textContent=$,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-u9v1v7"&&(e.textContent=o),s=v(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-m9el1s"&&(t.innerHTML=c),n=v(u),T(i.$$.fragment,u),m=v(u),l=C(u,"P",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-108fh85"&&(l.textContent=$),this.h()},h(){w(l,"class","fragment text-red-400 mt-4")},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),M(i,u,f),a(u,m,f),a(u,l,f),_=!0},p(u,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:u}),i.$set(b)},i(u){_||(P(i.$$.fragment,u),_=!0)},o(u){q(i.$$.fragment,u),_=!1},d(u){u&&(r(e),r(s),r(t),r(n),r(m),r(l)),H(i,u)}}}function bi(d){let e=`
public class Personne {
    String nom;
    String prenom;
    int age;

    // Constructeur complet
    public Personne(String nom, String prenom, int age) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }

    // Constructeur simplifié
    public Personne(String nom) {
        this(nom, "Inconnu", 0);  // Appelle l'autre constructeur
    }
}
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Li(d){let e,o="Surcharge de constructeurs",s,t,c="Une classe peut avoir <b>plusieurs constructeurs</b> avec des paramètres différents.",n,i,m,l,$="<code>this(...)</code> permet d&#39;appeler un autre constructeur de la même classe.",_;return i=new oe({props:{lines:"6-10|12-15",$$slots:{default:[bi]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c,n=x(),S(i.$$.fragment),m=x(),l=h("p"),l.innerHTML=$,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1v37pf9"&&(e.textContent=o),s=v(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1x1viiv"&&(t.innerHTML=c),n=v(u),T(i.$$.fragment,u),m=v(u),l=C(u,"P",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-sqjnx"&&(l.innerHTML=$),this.h()},h(){w(l,"class","fragment text-accent-200 mt-4")},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),M(i,u,f),a(u,m,f),a(u,l,f),_=!0},p(u,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:u}),i.$set(b)},i(u){_||(P(i.$$.fragment,u),_=!0)},o(u){q(i.$$.fragment,u),_=!1},d(u){u&&(r(e),r(s),r(t),r(n),r(m),r(l)),H(i,u)}}}function wi(d){let e,o="Modificateurs d'accès",s,t,c="Qui peut voir quoi ?";return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,this.h()},l(n){e=C(n,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-u0d6ta"&&(e.textContent=o),s=v(n),t=C(n,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-2x4853"&&(t.textContent=c),this.h()},h(){w(e,"class","text-5xl"),w(t,"class","text-2xl text-gray-400")},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function Hi(d){let e,o="Les 4 niveaux de visibilité",s,t,c="Les modificateurs d&#39;accès contrôlent la <b>visibilité</b> des attributs et méthodes.",n,i,m='<thead><tr><th class="p-3">Modificateur</th> <th class="p-3">Classe</th> <th class="p-3">Package</th> <th class="p-3">Sous-classe</th> <th class="p-3">Partout</th></tr></thead> <tbody><tr class="fragment"><td class="p-3"><code class="text-important">public</code></td> <td class="p-3 text-green-400">✅</td> <td class="p-3 text-green-400">✅</td> <td class="p-3 text-green-400">✅</td> <td class="p-3 text-green-400">✅</td></tr> <tr class="fragment"><td class="p-3"><code class="text-important">protected</code></td> <td class="p-3 text-green-400">✅</td> <td class="p-3 text-green-400">✅</td> <td class="p-3 text-green-400">✅</td> <td class="p-3 text-red-400">❌</td></tr> <tr class="fragment"><td class="p-3"><code class="text-gray-400">(default)</code></td> <td class="p-3 text-green-400">✅</td> <td class="p-3 text-green-400">✅</td> <td class="p-3 text-red-400">❌</td> <td class="p-3 text-red-400">❌</td></tr> <tr class="fragment"><td class="p-3"><code class="text-important">private</code></td> <td class="p-3 text-green-400">✅</td> <td class="p-3 text-red-400">❌</td> <td class="p-3 text-red-400">❌</td> <td class="p-3 text-red-400">❌</td></tr></tbody>';return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c,n=x(),i=h("table"),i.innerHTML=m,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1t4iunv"&&(e.textContent=o),s=v(l),t=C(l,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1vppkil"&&(t.innerHTML=c),n=v(l),i=C(l,"TABLE",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-14nol29"&&(i.innerHTML=m),this.h()},h(){w(i,"class","text-xl mt-6")},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),a(l,i,$)},p:z,d(l){l&&(r(e),r(s),r(t),r(n),r(i))}}}function qi(d){let e=`
public class Personne {
    public String nom;       // Accessible partout
    protected int age;       // Accessible dans le package et sous-classes
    String prenom;           // (default) Accessible dans le package
    private String motDePasse; // Accessible uniquement dans Personne
}
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Pi(d){let e,o="En pratique",s,t,c,n,i='🔮 Nous verrons l&#39;intérêt de ces modificateurs dans le chapitre sur l&#39;<span class="text-important">encapsulation</span>.',m,l,$="Pour l'instant, retenez juste que ça existe. On verra pourquoi c'est important quand on parlera d'encapsulation.",_;return t=new oe({props:{$$slots:{default:[qi]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment),c=x(),n=h("p"),n.innerHTML=i,m=x(),l=h("aside"),l.textContent=$,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-43iqwg"&&(e.textContent=o),s=v(u),T(t.$$.fragment,u),c=v(u),n=C(u,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1lz5ez7"&&(n.innerHTML=i),m=v(u),l=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-10v2vbl"&&(l.textContent=$),this.h()},h(){w(n,"class","fragment mt-6 text-accent-200 font-bold"),w(l,"class","notes")},m(u,f){a(u,e,f),a(u,s,f),M(t,u,f),a(u,c,f),a(u,n,f),a(u,m,f),a(u,l,f),_=!0},p(u,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:u}),t.$set(b)},i(u){_||(P(t.$$.fragment,u),_=!0)},o(u){q(t.$$.fragment,u),_=!1},d(u){u&&(r(e),r(s),r(c),r(n),r(m),r(l)),H(t,u)}}}function Mi(d){let e,o="Règle générale",s,t,c='<div class="fragment p-4 bg-green-950 rounded-lg"><h4 class="text-green-400">✅ Bonne pratique</h4> <ul class="text-xl mt-2"><li>Attributs → <code>private</code></li> <li>Méthodes utiles → <code>public</code></li> <li>Méthodes internes → <code>private</code></li></ul></div> <div class="fragment p-4 bg-red-950 rounded-lg"><h4 class="text-red-400">❌ À éviter</h4> <ul class="text-xl mt-2"><li>Tout mettre en <code>public</code></li> <li>Ne pas réfléchir à la visibilité</li></ul></div>',n,i,m="💡 En cas de doute, commencez par <code>private</code> et élargissez si nécessaire.";return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("div"),t.innerHTML=c,n=x(),i=h("p"),i.innerHTML=m,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-s809ln"&&(e.textContent=o),s=v(l),t=C(l,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-k5mxro"&&(t.innerHTML=c),n=v(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-oskcgk"&&(i.innerHTML=m),this.h()},h(){w(t,"class","grid grid-cols-2 gap-8 mt-6"),w(i,"class","fragment mt-6 text-xl")},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),a(l,i,$)},p:z,d(l){l&&(r(e),r(s),r(t),r(n),r(i))}}}function Ti(d){let e,o="Gestion des erreurs",s,t,c="Les exceptions en Java";return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,this.h()},l(n){e=C(n,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1nmax2r"&&(e.textContent=o),s=v(n),t=C(n,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1imhj9u"&&(t.textContent=c),this.h()},h(){w(e,"class","text-5xl"),w(t,"class","text-2xl text-gray-400")},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function Si(d){let e=`
int a = 10 / 0;  // ArithmeticException !

String s = null;
s.length();      // NullPointerException !

int[] tab = new int[5];
tab[10] = 42;    // ArrayIndexOutOfBoundsException !
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function ji(d){let e,o="Qu'est-ce qu'une exception ?",s,t,c='Une <span class="text-important">exception</span> est une erreur qui survient pendant l&#39;exécution.',n,i,m,l,$="Sans gestion, ces erreurs <b>crashent</b> votre programme !",_;return i=new oe({props:{$$slots:{default:[Si]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c,n=x(),S(i.$$.fragment),m=x(),l=h("p"),l.innerHTML=$,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1egq31j"&&(e.textContent=o),s=v(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-gxx03w"&&(t.innerHTML=c),n=v(u),T(i.$$.fragment,u),m=v(u),l=C(u,"P",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-1kd8eyz"&&(l.innerHTML=$),this.h()},h(){w(l,"class","fragment mt-4 text-red-400")},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),M(i,u,f),a(u,m,f),a(u,l,f),_=!0},p(u,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:u}),i.$set(b)},i(u){_||(P(i.$$.fragment,u),_=!0)},o(u){q(i.$$.fragment,u),_=!1},d(u){u&&(r(e),r(s),r(t),r(n),r(m),r(l)),H(i,u)}}}function Ai(d){let e=`
try {
    // Code qui peut générer une exception
    int resultat = 10 / 0;
    System.out.println(resultat);
} catch (ArithmeticException e) {
    // Code exécuté SI une exception se produit
    System.out.println("Erreur : " + e.getMessage());
}
finally {
    // Code exécuté TOUJOURS (avec ou sans exception)
    System.out.println("Fin du bloc");
}
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Ei(d){let e,o="try / catch / finally",s,t,c="On utilise des blocs pour <b>capturer</b> et <b>gérer</b> les exceptions.",n,i,m;return i=new oe({props:{lines:"1-4|5-8|9-11",$$slots:{default:[Ai]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c,n=x(),S(i.$$.fragment)},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1v9mfjh"&&(e.textContent=o),s=v(l),t=C(l,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1g5ymj1"&&(t.innerHTML=c),n=v(l),T(i.$$.fragment,l)},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),M(i,l,$),m=!0},p(l,$){const _={};$&1&&(_.$$scope={dirty:$,ctx:l}),i.$set(_)},i(l){m||(P(i.$$.fragment,l),m=!0)},o(l){q(i.$$.fragment,l),m=!1},d(l){l&&(r(e),r(s),r(t),r(n)),H(i,l)}}}function Di(d){let e=`
public void setAge(int age) {
    if (age < 0) {
        throw new IllegalArgumentException("L'âge ne peut pas être négatif !");
    }
    this.age = age;
}

// Utilisation
try {
    personne.setAge(-5);
} catch (IllegalArgumentException e) {
    System.out.println("Erreur : " + e.getMessage());
}
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Ii(d){let e,o="Lancer une exception",s,t,c="On peut aussi <b>créer</b> et <b>lancer</b> nos propres exceptions.",n,i,m,l,$=`C'est une bonne pratique de vérifier les paramètres et de lancer des exceptions explicites.\r
			Ça aide au debug.`,_;return i=new oe({props:{$$slots:{default:[Di]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c,n=x(),S(i.$$.fragment),m=x(),l=h("aside"),l.textContent=$,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-4yg9v0"&&(e.textContent=o),s=v(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-lmiq0q"&&(t.innerHTML=c),n=v(u),T(i.$$.fragment,u),m=v(u),l=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-gsyf8y"&&(l.textContent=$),this.h()},h(){w(l,"class","notes")},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),M(i,u,f),a(u,m,f),a(u,l,f),_=!0},p(u,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:u}),i.$set(b)},i(u){_||(P(i.$$.fragment,u),_=!0)},o(u){q(i.$$.fragment,u),_=!1},d(u){u&&(r(e),r(s),r(t),r(n),r(m),r(l)),H(i,u)}}}function ki(d){let e,o="Exceptions courantes",s,t,c='<tr class="fragment"><td class="p-3"><code>NullPointerException</code></td> <td class="p-3">Accès à un objet null</td></tr> <tr class="fragment"><td class="p-3"><code>ArrayIndexOutOfBoundsException</code></td> <td class="p-3">Index hors limites d&#39;un tableau</td></tr> <tr class="fragment"><td class="p-3"><code>ArithmeticException</code></td> <td class="p-3">Division par zéro</td></tr> <tr class="fragment"><td class="p-3"><code>IllegalArgumentException</code></td> <td class="p-3">Argument invalide</td></tr> <tr class="fragment"><td class="p-3"><code>IOException</code></td> <td class="p-3">Erreur d&#39;entrée/sortie (fichiers)</td></tr>';return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("table"),t.innerHTML=c,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-lf1a5g"&&(e.textContent=o),s=v(n),t=C(n,"TABLE",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1sfej0h"&&(t.innerHTML=c),this.h()},h(){w(t,"class","text-xl")},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function Oi(d){let e,o="Récapitulatif",s,t,c='<div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">🏗️ Création</h4> <ul class="text-sm mt-2"><li><code>new</code> crée un objet</li> <li>Constructeur initialise</li> <li><code>this</code> = objet courant</li></ul></div> <div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">🔒 Visibilité</h4> <ul class="text-sm mt-2"><li><code>public</code> = partout</li> <li><code>private</code> = classe</li> <li><code>protected</code> = héritage</li></ul></div> <div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">⚠️ Exceptions</h4> <ul class="text-sm mt-2"><li><code>try/catch</code> = gérer</li> <li><code>throw</code> = lancer</li> <li><code>finally</code> = toujours</li></ul></div>';return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("div"),t.innerHTML=c,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-ri7iuh"&&(e.textContent=o),s=v(n),t=C(n,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1omxml7"&&(t.innerHTML=c),this.h()},h(){w(t,"class","grid grid-cols-3 gap-4 mt-6")},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function Vi(d){let e,o="Généralités sur la POO",s,t,c,n,i,m,l,$,_,u,f,b,p,L,j,E,R,V,I,k,A,F,X,J,le,D,K,$e,pe,Z,ne,me,y,B,ie,de,ve;return t=new U({props:{$$slots:{default:[$i]},$$scope:{ctx:d}}}),n=new U({props:{$$slots:{default:[ci]},$$scope:{ctx:d}}}),m=new U({props:{data_background_color:"#1a1a2e",$$slots:{default:[pi]},$$scope:{ctx:d}}}),$=new U({props:{$$slots:{default:[di]},$$scope:{ctx:d}}}),u=new U({props:{$$slots:{default:[xi]},$$scope:{ctx:d}}}),b=new U({props:{$$slots:{default:[Ci]},$$scope:{ctx:d}}}),L=new U({props:{$$slots:{default:[gi]},$$scope:{ctx:d}}}),E=new U({props:{$$slots:{default:[Li]},$$scope:{ctx:d}}}),V=new U({props:{data_background_color:"#1a1a2e",$$slots:{default:[wi]},$$scope:{ctx:d}}}),k=new U({props:{$$slots:{default:[Hi]},$$scope:{ctx:d}}}),F=new U({props:{$$slots:{default:[Pi]},$$scope:{ctx:d}}}),J=new U({props:{$$slots:{default:[Mi]},$$scope:{ctx:d}}}),D=new U({props:{data_background_color:"#1a1a2e",$$slots:{default:[Ti]},$$scope:{ctx:d}}}),$e=new U({props:{$$slots:{default:[ji]},$$scope:{ctx:d}}}),Z=new U({props:{$$slots:{default:[Ei]},$$scope:{ctx:d}}}),me=new U({props:{$$slots:{default:[Ii]},$$scope:{ctx:d}}}),B=new U({props:{$$slots:{default:[ki]},$$scope:{ctx:d}}}),de=new U({props:{$$slots:{default:[Oi]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment),c=x(),S(n.$$.fragment),i=x(),S(m.$$.fragment),l=x(),S($.$$.fragment),_=x(),S(u.$$.fragment),f=x(),S(b.$$.fragment),p=x(),S(L.$$.fragment),j=x(),S(E.$$.fragment),R=x(),S(V.$$.fragment),I=x(),S(k.$$.fragment),A=x(),S(F.$$.fragment),X=x(),S(J.$$.fragment),le=x(),S(D.$$.fragment),K=x(),S($e.$$.fragment),pe=x(),S(Z.$$.fragment),ne=x(),S(me.$$.fragment),y=x(),S(B.$$.fragment),ie=x(),S(de.$$.fragment)},l(W){e=C(W,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-lsottk"&&(e.textContent=o),s=v(W),T(t.$$.fragment,W),c=v(W),T(n.$$.fragment,W),i=v(W),T(m.$$.fragment,W),l=v(W),T($.$$.fragment,W),_=v(W),T(u.$$.fragment,W),f=v(W),T(b.$$.fragment,W),p=v(W),T(L.$$.fragment,W),j=v(W),T(E.$$.fragment,W),R=v(W),T(V.$$.fragment,W),I=v(W),T(k.$$.fragment,W),A=v(W),T(F.$$.fragment,W),X=v(W),T(J.$$.fragment,W),le=v(W),T(D.$$.fragment,W),K=v(W),T($e.$$.fragment,W),pe=v(W),T(Z.$$.fragment,W),ne=v(W),T(me.$$.fragment,W),y=v(W),T(B.$$.fragment,W),ie=v(W),T(de.$$.fragment,W)},m(W,ae){a(W,e,ae),a(W,s,ae),M(t,W,ae),a(W,c,ae),M(n,W,ae),a(W,i,ae),M(m,W,ae),a(W,l,ae),M($,W,ae),a(W,_,ae),M(u,W,ae),a(W,f,ae),M(b,W,ae),a(W,p,ae),M(L,W,ae),a(W,j,ae),M(E,W,ae),a(W,R,ae),M(V,W,ae),a(W,I,ae),M(k,W,ae),a(W,A,ae),M(F,W,ae),a(W,X,ae),M(J,W,ae),a(W,le,ae),M(D,W,ae),a(W,K,ae),M($e,W,ae),a(W,pe,ae),M(Z,W,ae),a(W,ne,ae),M(me,W,ae),a(W,y,ae),M(B,W,ae),a(W,ie,ae),M(de,W,ae),ve=!0},p(W,ae){const Ce={};ae&1&&(Ce.$$scope={dirty:ae,ctx:W}),t.$set(Ce);const _e={};ae&1&&(_e.$$scope={dirty:ae,ctx:W}),n.$set(_e);const he={};ae&1&&(he.$$scope={dirty:ae,ctx:W}),m.$set(he);const G={};ae&1&&(G.$$scope={dirty:ae,ctx:W}),$.$set(G);const ue={};ae&1&&(ue.$$scope={dirty:ae,ctx:W}),u.$set(ue);const xe={};ae&1&&(xe.$$scope={dirty:ae,ctx:W}),b.$set(xe);const N={};ae&1&&(N.$$scope={dirty:ae,ctx:W}),L.$set(N);const re={};ae&1&&(re.$$scope={dirty:ae,ctx:W}),E.$set(re);const we={};ae&1&&(we.$$scope={dirty:ae,ctx:W}),V.$set(we);const Q={};ae&1&&(Q.$$scope={dirty:ae,ctx:W}),k.$set(Q);const ce={};ae&1&&(ce.$$scope={dirty:ae,ctx:W}),F.$set(ce);const ge={};ae&1&&(ge.$$scope={dirty:ae,ctx:W}),J.$set(ge);const je={};ae&1&&(je.$$scope={dirty:ae,ctx:W}),D.$set(je);const He={};ae&1&&(He.$$scope={dirty:ae,ctx:W}),$e.$set(He);const Ae={};ae&1&&(Ae.$$scope={dirty:ae,ctx:W}),Z.$set(Ae);const qe={};ae&1&&(qe.$$scope={dirty:ae,ctx:W}),me.$set(qe);const Ee={};ae&1&&(Ee.$$scope={dirty:ae,ctx:W}),B.$set(Ee);const Se={};ae&1&&(Se.$$scope={dirty:ae,ctx:W}),de.$set(Se)},i(W){ve||(P(t.$$.fragment,W),P(n.$$.fragment,W),P(m.$$.fragment,W),P($.$$.fragment,W),P(u.$$.fragment,W),P(b.$$.fragment,W),P(L.$$.fragment,W),P(E.$$.fragment,W),P(V.$$.fragment,W),P(k.$$.fragment,W),P(F.$$.fragment,W),P(J.$$.fragment,W),P(D.$$.fragment,W),P($e.$$.fragment,W),P(Z.$$.fragment,W),P(me.$$.fragment,W),P(B.$$.fragment,W),P(de.$$.fragment,W),ve=!0)},o(W){q(t.$$.fragment,W),q(n.$$.fragment,W),q(m.$$.fragment,W),q($.$$.fragment,W),q(u.$$.fragment,W),q(b.$$.fragment,W),q(L.$$.fragment,W),q(E.$$.fragment,W),q(V.$$.fragment,W),q(k.$$.fragment,W),q(F.$$.fragment,W),q(J.$$.fragment,W),q(D.$$.fragment,W),q($e.$$.fragment,W),q(Z.$$.fragment,W),q(me.$$.fragment,W),q(B.$$.fragment,W),q(de.$$.fragment,W),ve=!1},d(W){W&&(r(e),r(s),r(c),r(i),r(l),r(_),r(f),r(p),r(j),r(R),r(I),r(A),r(X),r(le),r(K),r(pe),r(ne),r(y),r(ie)),H(t,W),H(n,W),H(m,W),H($,W),H(u,W),H(b,W),H(L,W),H(E,W),H(V,W),H(k,W),H(F,W),H(J,W),H(D,W),H($e,W),H(Z,W),H(me,W),H(B,W),H(de,W)}}}function zi(d){let e,o;return e=new U({props:{$$slots:{default:[Vi]},$$scope:{ctx:d}}}),{c(){S(e.$$.fragment)},l(s){T(e.$$.fragment,s)},m(s,t){M(e,s,t),o=!0},p(s,[t]){const c={};t&1&&(c.$$scope={dirty:t,ctx:s}),e.$set(c)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){q(e.$$.fragment,s),o=!1},d(s){H(e,s)}}}class Ui extends Me{constructor(e){super(),Te(this,e,null,zi,Pe,{})}}const Bi=""+new URL("../assets/TD1.B5LctFM5.pdf",import.meta.url).href,Ji=""+new URL("../assets/TD2.D6kSf9tn.pdf",import.meta.url).href,Ri=""+new URL("../assets/TD3.Cbwm9oYP.pdf",import.meta.url).href,Ni=""+new URL("../assets/TD3Bis.CvsjeAEt.pdf",import.meta.url).href,Fi=""+new URL("../assets/TDParc.BMAMZ7Fy.pdf",import.meta.url).href,Gi=""+new URL("../assets/Mise-en-place-env.B_q2XZLi.html",import.meta.url).href,Qi=""+new URL("../assets/Plantuml.qFHaOZcF.html",import.meta.url).href;function yi(d){let e,o="Configuration TD",s,t,c="Clonez le dépôt",n,i,m,l,$="Puis collez l'URL de votre répo Git",_,u,f,b;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("a"),t.textContent=c,n=x(),i=h("br"),m=x(),l=h("p"),l.textContent=$,_=x(),u=h("input"),this.h()},l(p){e=C(p,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1femyhu"&&(e.textContent=o),s=v(p),t=C(p,"A",{target:!0,href:!0,"data-svelte-h":!0}),g(t)!=="svelte-iaex2q"&&(t.textContent=c),n=v(p),i=C(p,"BR",{}),m=v(p),l=C(p,"P",{"data-svelte-h":!0}),g(l)!=="svelte-1h3gyi7"&&(l.textContent=$),_=v(p),u=C(p,"INPUT",{class:!0,type:!0,placeholder:!0}),this.h()},h(){w(t,"target","_blank"),w(t,"href","https://classroom.github.com/a/FKWh2cOe"),w(u,"class","w-full text-accent-950 text-lg z-50 mb-16"),w(u,"type","text"),w(u,"placeholder","URL du dépôt git")},m(p,L){a(p,e,L),a(p,s,L),a(p,t,L),a(p,n,L),a(p,i,L),a(p,m,L),a(p,l,L),a(p,_,L),a(p,u,L),It(u,d[1]),f||(b=[kt(u,"input",d[2]),kt(u,"input",d[3])],f=!0)},p(p,L){L&2&&u.value!==p[1]&&It(u,p[1])},d(p){p&&(r(e),r(s),r(t),r(n),r(i),r(m),r(l),r(_),r(u)),f=!1,Bt(b)}}}function Ki(d){let e,o="TD",s,t,c,n,i,m,l,$,_=`/ <a href="${Bi}">Corrigé</a>`,u,f,b,p,L,j,E,R=`/ <a href="${Ji}">Corrigé</a>`,V,I,k,A,F,X,J,le=`/ <a href="${Ri}">Corrigé</a>`,D,K,$e,pe,Z,ne,me,y=`/ <a href="${Ni}">Corrigé</a>`,B,ie,de,ve,W,ae,Ce,_e=`/ <a href="${Fi}">Corrigé</a>`,he,G,ue=`<a target="_blank" href="${Qi}">Tuto PlantUML</a>`;return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("ul"),c=h("li"),n=h("a"),i=te("TD1"),l=x(),$=h("span"),$.innerHTML=_,u=x(),f=h("li"),b=h("a"),p=te("TD2"),j=x(),E=h("span"),E.innerHTML=R,V=x(),I=h("li"),k=h("a"),A=te("TD3"),X=x(),J=h("span"),J.innerHTML=le,D=x(),K=h("li"),$e=h("a"),pe=te("TD3 Bis (Optionnel)"),ne=x(),me=h("span"),me.innerHTML=y,B=x(),ie=h("li"),de=h("a"),ve=te("TD4"),ae=x(),Ce=h("span"),Ce.innerHTML=_e,he=x(),G=h("li"),G.innerHTML=ue,this.h()},l(xe){e=C(xe,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-fqlmo2"&&(e.textContent=o),s=v(xe),t=C(xe,"UL",{});var N=fe(t);c=C(N,"LI",{});var re=fe(c);n=C(re,"A",{target:!0,href:!0});var we=fe(n);i=ee(we,"TD1"),we.forEach(r),l=v(re),$=C(re,"SPAN",{"data-svelte-h":!0}),g($)!=="svelte-1aax1lb"&&($.innerHTML=_),re.forEach(r),u=v(N),f=C(N,"LI",{});var Q=fe(f);b=C(Q,"A",{target:!0,href:!0});var ce=fe(b);p=ee(ce,"TD2"),ce.forEach(r),j=v(Q),E=C(Q,"SPAN",{"data-svelte-h":!0}),g(E)!=="svelte-icpeey"&&(E.innerHTML=R),Q.forEach(r),V=v(N),I=C(N,"LI",{});var ge=fe(I);k=C(ge,"A",{target:!0,href:!0});var je=fe(k);A=ee(je,"TD3"),je.forEach(r),X=v(ge),J=C(ge,"SPAN",{"data-svelte-h":!0}),g(J)!=="svelte-r0lu5h"&&(J.innerHTML=le),ge.forEach(r),D=v(N),K=C(N,"LI",{});var He=fe(K);$e=C(He,"A",{target:!0,href:!0});var Ae=fe($e);pe=ee(Ae,"TD3 Bis (Optionnel)"),Ae.forEach(r),ne=v(He),me=C(He,"SPAN",{"data-svelte-h":!0}),g(me)!=="svelte-18ptfz9"&&(me.innerHTML=y),He.forEach(r),B=v(N),ie=C(N,"LI",{});var qe=fe(ie);de=C(qe,"A",{target:!0,href:!0});var Ee=fe(de);ve=ee(Ee,"TD4"),Ee.forEach(r),ae=v(qe),Ce=C(qe,"SPAN",{"data-svelte-h":!0}),g(Ce)!=="svelte-66ci9c"&&(Ce.innerHTML=_e),qe.forEach(r),he=v(N),G=C(N,"LI",{"data-svelte-h":!0}),g(G)!=="svelte-bz407p"&&(G.innerHTML=ue),N.forEach(r),this.h()},h(){w(n,"target","_blank"),w(n,"href",m=d[1]+"blob/main/TD/TD1.md"),w(b,"target","_blank"),w(b,"href",L=d[1]+"blob/main/TD/TD2.md"),w(k,"target","_blank"),w(k,"href",F=d[1]+"blob/main/TD/TD3.md"),w($e,"target","_blank"),w($e,"href",Z=d[1]+"blob/main/TD/TD3Bis.md"),w(de,"target","_blank"),w(de,"href",W=d[1]+"blob/main/TD/TDParc.md")},m(xe,N){a(xe,e,N),a(xe,s,N),a(xe,t,N),Y(t,c),Y(c,n),Y(n,i),Y(c,l),Y(c,$),Y(t,u),Y(t,f),Y(f,b),Y(b,p),Y(f,j),Y(f,E),Y(t,V),Y(t,I),Y(I,k),Y(k,A),Y(I,X),Y(I,J),Y(t,D),Y(t,K),Y(K,$e),Y($e,pe),Y(K,ne),Y(K,me),Y(t,B),Y(t,ie),Y(ie,de),Y(de,ve),Y(ie,ae),Y(ie,Ce),Y(t,he),Y(t,G)},p(xe,N){N&2&&m!==(m=xe[1]+"blob/main/TD/TD1.md")&&w(n,"href",m),N&2&&L!==(L=xe[1]+"blob/main/TD/TD2.md")&&w(b,"href",L),N&2&&F!==(F=xe[1]+"blob/main/TD/TD3.md")&&w(k,"href",F),N&2&&Z!==(Z=xe[1]+"blob/main/TD/TD3Bis.md")&&w($e,"href",Z),N&2&&W!==(W=xe[1]+"blob/main/TD/TDParc.md")&&w(de,"href",W)},d(xe){xe&&(r(e),r(s),r(t))}}}function Wi(d){let e,o="Configuration TP",s,t,c="Configurez votre poste",n,i;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("a"),t.textContent=c,n=x(),i=h("br"),this.h()},l(m){e=C(m,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-jepq66"&&(e.textContent=o),s=v(m),t=C(m,"A",{target:!0,href:!0,"data-svelte-h":!0}),g(t)!=="svelte-m3anz5"&&(t.textContent=c),n=v(m),i=C(m,"BR",{}),this.h()},h(){w(t,"target","_blank"),w(t,"href",Gi)},m(m,l){a(m,e,l),a(m,s,l),a(m,t,l),a(m,n,l),a(m,i,l)},p:z,d(m){m&&(r(e),r(s),r(t),r(n),r(i))}}}function Zi(d){let e,o="TP",s,t,c=`<li><a target="_blank" href="${Ot}">TP1</a> <span>/ <a target="_blank" href="https://classroom.github.com/a/3pWZu8yR">Clonez le dépot</a></span></li> <li><a target="_blank" href="${Vt}">TP2</a> <span>/ <a target="_blank" href="https://classroom.github.com/a/y58GAhhp">Clonez le dépot</a></span></li> <li><a target="_blank" href="${zt}">Projet</a> <span>/ <a target="_blank" href="https://classroom.github.com/a/mllsoaOR">Clonez le dépot</a></span></li>`;return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("ul"),t.innerHTML=c},l(n){e=C(n,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-5mz89q"&&(e.textContent=o),s=v(n),t=C(n,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-1ye3vx8"&&(t.innerHTML=c)},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function Yi(d){let e,o,s,t,c,n,i,m;return e=new U({props:{$$slots:{default:[yi]},$$scope:{ctx:d}}}),s=new U({props:{id:"TD",$$slots:{default:[Ki]},$$scope:{ctx:d}}}),c=new U({props:{$$slots:{default:[Wi]},$$scope:{ctx:d}}}),i=new U({props:{id:"TP",$$slots:{default:[Zi]},$$scope:{ctx:d}}}),{c(){S(e.$$.fragment),o=x(),S(s.$$.fragment),t=x(),S(c.$$.fragment),n=x(),S(i.$$.fragment)},l(l){T(e.$$.fragment,l),o=v(l),T(s.$$.fragment,l),t=v(l),T(c.$$.fragment,l),n=v(l),T(i.$$.fragment,l)},m(l,$){M(e,l,$),a(l,o,$),M(s,l,$),a(l,t,$),M(c,l,$),a(l,n,$),M(i,l,$),m=!0},p(l,$){const _={};$&18&&(_.$$scope={dirty:$,ctx:l}),e.$set(_);const u={};$&18&&(u.$$scope={dirty:$,ctx:l}),s.$set(u);const f={};$&16&&(f.$$scope={dirty:$,ctx:l}),c.$set(f);const b={};$&16&&(b.$$scope={dirty:$,ctx:l}),i.$set(b)},i(l){m||(P(e.$$.fragment,l),P(s.$$.fragment,l),P(c.$$.fragment,l),P(i.$$.fragment,l),m=!0)},o(l){q(e.$$.fragment,l),q(s.$$.fragment,l),q(c.$$.fragment,l),q(i.$$.fragment,l),m=!1},d(l){l&&(r(o),r(t),r(n)),H(e,l),H(s,l),H(c,l),H(i,l)}}}function Xi(d){let e,o;return e=new U({props:{id:"exercices",$$slots:{default:[Yi]},$$scope:{ctx:d}}}),{c(){S(e.$$.fragment)},l(s){T(e.$$.fragment,s)},m(s,t){M(e,s,t),o=!0},p(s,[t]){const c={};t&18&&(c.$$scope={dirty:t,ctx:s}),e.$set(c)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){q(e.$$.fragment,s),o=!1},d(s){H(e,s)}}}function er(d,e,o){let s,t=z,c=()=>(t(),t=Ut(n,l=>o(1,s=l)),n);d.$$.on_destroy.push(()=>t());const n=Nt(localStorage.getItem("repoUrl")||null);c(),n.subscribe(l=>localStorage.repoUrl=l);const i=l=>n.set((l.currentTarget.value.trimEnd()+"/").replace("github.com","github.dev"));function m(){s=this.value,n.set(s)}return[n,s,i,m]}class tr extends Me{constructor(e){super(),Te(this,e,er,Xi,Pe,{repoUrl:0})}get repoUrl(){return this.$$.ctx[0]}}function sr(d){let e,o="Le langage Java";return{c(){e=h("h3"),e.textContent=o},l(s){e=C(s,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1iqgvdm"&&(e.textContent=o)},m(s,t){a(s,e,t)},p:z,d(s){s&&r(e)}}}function lr(d){let e,o="Le langage Java",s,t,c=`<img class="object-contain h-64 w-full" src="https://upload.wikimedia.org/wikipedia/fr/2/2e/Java_Logo.svg" alt="Java Logo"/> <p class="italic r-strech">Java est un langage de programmation polyvalent, orienté objet et largement utilisé dans le
			développement logiciel. Il a été conçu pour être portable, ce qui signifie qu&#39;il peut
			fonctionner sur différentes plateformes sans nécessiter de modifications importantes.</p>`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("div"),t.innerHTML=c,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1iqgvdm"&&(e.textContent=o),s=v(n),t=C(n,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1gfokvd"&&(t.innerHTML=c),this.h()},h(){w(t,"class","flex flex-col justify-center")},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function nr(d){let e,o="Fonctionnement",s,t,c=`<p>L’indépendance par rapport à l’environnement d’exécution est garantie par la <em>machine virtuelle Java</em>
			(Java Virtual Machine ou <strong>JVM</strong>). En effet, Java est un langage compilé mais le
			compilateur ne produit pas de code natif pour la machine, il produit du
			<a class="reference external" href="https://fr.wikipedia.org/wiki/Bytecode_Java">bytecode</a> :
			un jeu d’instructions compréhensibles par la JVM qu’elle va traduire en code exécutable par la
			machine au moment de l’exécution.</p> <p>Pour qu’un programme Java fonctionne, il faut non seulement que les développeurs aient compilé
			le code source mais il faut également qu’un environnement d’exécution (comprenant la JVM) soit
			installé sur la machine cible.</p> <p>Il existe ainsi deux environnements Java qui peuvent être téléchargés et installés depuis le <a class="reference external" href="https://www.oracle.com/technetwork/java/javase/downloads/index.html">site d’Oracle</a> :</p> <dl class="simple"><dt>JRE - Java Runtime Environment</dt><dd><p>Cet environnement fournit uniquement les outils nécessaires à l’exécution de programmes
					Java. Il fournit entre autres la machine virtuelle Java.</p> </dd><dt>JDK - Java Development Kit</dt><dd><p>Cet environnement fournit tous les outils nécessaires à l’exécution mais aussi au
					développement de programmes Java. Il fournit entre autres la machine virtuelle Java et le
					compilateur.</p></dd></dl>`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("div"),t.innerHTML=c,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-zf3p5z"&&(e.textContent=o),s=v(n),t=C(n,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-13aqvf2"&&(t.innerHTML=c),this.h()},h(){w(t,"class","r-fit-text")},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function ir(d){let e=`
					int i = 0;
					i = 4; // OK
					i = "bonjour"; // ERREUR : on tente d'affecter une chaîne de caractères`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function rr(d){let e,o="Le langage Java",s,t,c="Caractéristiques",n,i,m,l,$="S'inspire mais se débarrasse des complexités du C (pointeurs, allocation mémoire, etc.)",_,u,f="Orienté objet !",b,p,L="Gestion automatique de la mémoire",j,E,R,V,I,k,A="Bibliothèque de classes et de packages très riche (graphismes, encryption, etc.)",F,X,J="Polymorphisme et introspection",le;return V=new oe({props:{$$slots:{default:[ir]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("h4"),t.textContent=c,n=x(),i=h("div"),m=h("ul"),l=h("li"),l.textContent=$,_=x(),u=h("li"),u.textContent=f,b=x(),p=h("li"),p.textContent=L,j=x(),E=h("li"),R=te(`Typage statique fort (à la différence de Python, les variables doivent être déclarées avec\r
				leur type)\r
				`),S(V.$$.fragment),I=x(),k=h("li"),k.textContent=A,F=x(),X=h("li"),X.textContent=J,this.h()},l(D){e=C(D,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1iqgvdm"&&(e.textContent=o),s=v(D),t=C(D,"H4",{"data-svelte-h":!0}),g(t)!=="svelte-18h9ipq"&&(t.textContent=c),n=v(D),i=C(D,"DIV",{class:!0});var K=fe(i);m=C(K,"UL",{class:!0});var $e=fe(m);l=C($e,"LI",{"data-svelte-h":!0}),g(l)!=="svelte-1r1na5t"&&(l.textContent=$),_=v($e),u=C($e,"LI",{"data-svelte-h":!0}),g(u)!=="svelte-ytdrfv"&&(u.textContent=f),b=v($e),p=C($e,"LI",{"data-svelte-h":!0}),g(p)!=="svelte-jh2a8"&&(p.textContent=L),j=v($e),E=C($e,"LI",{});var pe=fe(E);R=ee(pe,`Typage statique fort (à la différence de Python, les variables doivent être déclarées avec\r
				leur type)\r
				`),T(V.$$.fragment,pe),pe.forEach(r),I=v($e),k=C($e,"LI",{"data-svelte-h":!0}),g(k)!=="svelte-16sf5lx"&&(k.textContent=A),F=v($e),X=C($e,"LI",{"data-svelte-h":!0}),g(X)!=="svelte-1d499ss"&&(X.textContent=J),$e.forEach(r),K.forEach(r),this.h()},h(){w(m,"class","r-strech"),w(i,"class","flex flex-col justify-center")},m(D,K){a(D,e,K),a(D,s,K),a(D,t,K),a(D,n,K),a(D,i,K),Y(i,m),Y(m,l),Y(m,_),Y(m,u),Y(m,b),Y(m,p),Y(m,j),Y(m,E),Y(E,R),M(V,E,null),Y(m,I),Y(m,k),Y(m,F),Y(m,X),le=!0},p(D,K){const $e={};K&1&&($e.$$scope={dirty:K,ctx:D}),V.$set($e)},i(D){le||(P(V.$$.fragment,D),le=!0)},o(D){q(V.$$.fragment,D),le=!1},d(D){D&&(r(e),r(s),r(t),r(n),r(i)),H(V)}}}function ar(d){let e,o="Conventions",s,t,c=`<ul class="r-strech"><li>Les noms de classe commencent par une majuscule
				<ul><li><code>Visage, Objet</code></li></ul></li> <li>Les mots contenus dans un identificateur commencent par une minuscule
				<ul><li><code>uneClasse, uneMethode, uneVariable</code></li></ul></li> <li>Les constantes sont en majuscules
				<ul><li><code>UNE_CONSTANTE</code></li></ul></li></ul>`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("div"),t.innerHTML=c,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-tghgi6"&&(e.textContent=o),s=v(n),t=C(n,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1cc378f"&&(t.innerHTML=c),this.h()},h(){w(t,"class","flex flex-col justify-center")},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function ur(d){let e,o="Types de données",s,t,c=`<ul class="r-strech"><li>Types primitifs
				<ul><li><code>byte, short, int, long, float, double, char, boolean</code></li></ul></li> <li>Objets (instances de classes)
				<ul><li><code>String, Integer, Float, Double, Boolean, Character, etc.</code></li></ul></li></ul>`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("div"),t.innerHTML=c,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-7p2708"&&(e.textContent=o),s=v(n),t=C(n,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-kgkk9f"&&(t.innerHTML=c),this.h()},h(){w(t,"class","flex flex-col justify-center")},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function or(d){let e=`
				String str = new String() ;
				str = "ceci est une phrase" ;
				`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function $r(d){let e=`
				String str = "ceci est une phrase" ;
				`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function fr(d){let e,o="Types de données",s,t,c="Le type String",n,i,m,l="Ce n'est pas un type primitif, c'est une classe (d'où la présence de la majuscule)",$,_,u,f,b,p,L="La chaîne de caractères se met entre guillemets",j,E,R,V,I="new",k,A,F;return f=new oe({props:{$$slots:{default:[or]},$$scope:{ctx:d}}}),A=new oe({props:{$$slots:{default:[$r]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("h4"),t.textContent=c,n=x(),i=h("ul"),m=h("li"),m.textContent=l,$=x(),_=h("li"),u=te(`Comme c'est une classe, on utilise le mot-clé new pour créer un objet, on parle d'une\r
			instance de classe de type String\r
			`),S(f.$$.fragment),b=x(),p=h("li"),p.textContent=L,j=x(),E=h("li"),R=te("Exceptionnellement, il est possible de déclarer une chaîne de caractères sans utiliser "),V=h("code"),V.textContent=I,k=x(),S(A.$$.fragment),this.h()},l(X){e=C(X,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-7p2708"&&(e.textContent=o),s=v(X),t=C(X,"H4",{"data-svelte-h":!0}),g(t)!=="svelte-8317wg"&&(t.textContent=c),n=v(X),i=C(X,"UL",{});var J=fe(i);m=C(J,"LI",{"data-svelte-h":!0}),g(m)!=="svelte-1q77k0k"&&(m.textContent=l),$=v(J),_=C(J,"LI",{});var le=fe(_);u=ee(le,`Comme c'est une classe, on utilise le mot-clé new pour créer un objet, on parle d'une\r
			instance de classe de type String\r
			`),T(f.$$.fragment,le),le.forEach(r),b=v(J),p=C(J,"LI",{"data-svelte-h":!0}),g(p)!=="svelte-1uwz9ag"&&(p.textContent=L),j=v(J),E=C(J,"LI",{});var D=fe(E);R=ee(D,"Exceptionnellement, il est possible de déclarer une chaîne de caractères sans utiliser "),V=C(D,"CODE",{class:!0,"data-svelte-h":!0}),g(V)!=="svelte-1ht496d"&&(V.textContent=I),k=v(D),T(A.$$.fragment,D),D.forEach(r),J.forEach(r),this.h()},h(){w(V,"class","text-purple-400")},m(X,J){a(X,e,J),a(X,s,J),a(X,t,J),a(X,n,J),a(X,i,J),Y(i,m),Y(i,$),Y(i,_),Y(_,u),M(f,_,null),Y(i,b),Y(i,p),Y(i,j),Y(i,E),Y(E,R),Y(E,V),Y(E,k),M(A,E,null),F=!0},p(X,J){const le={};J&1&&(le.$$scope={dirty:J,ctx:X}),f.$set(le);const D={};J&1&&(D.$$scope={dirty:J,ctx:X}),A.$set(D)},i(X){F||(P(f.$$.fragment,X),P(A.$$.fragment,X),F=!0)},o(X){q(f.$$.fragment,X),q(A.$$.fragment,X),F=!1},d(X){X&&(r(e),r(s),r(t),r(n),r(i)),H(f),H(A)}}}function cr(d){let e=`
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function pr(d){let e,o="Syntaxe",s,t,c,n,i,m=`La syntaxe de Java est similaire à celle de C++, mais elle a moins de fonctionnalités basées\r
			sur les pointeurs. Java est un langage de programmation orienté objet, ce qui signifie que les\r
			programmes Java sont constitués de classes et d'objets.`,l;return c=new oe({props:{id:"code",lines:"1-5",$$slots:{default:[cr]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("div"),S(c.$$.fragment),n=x(),i=h("p"),i.textContent=m,this.h()},l($){e=C($,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-16353j8"&&(e.textContent=o),s=v($),t=C($,"DIV",{class:!0});var _=fe(t);T(c.$$.fragment,_),n=v(_),i=C(_,"P",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-nq5fh3"&&(i.textContent=m),_.forEach(r),this.h()},h(){w(i,"class","italic r-strech"),w(t,"class","flex flex-col justify-center")},m($,_){a($,e,_),a($,s,_),a($,t,_),M(c,t,null),Y(t,n),Y(t,i),l=!0},p($,_){const u={};_&1&&(u.$$scope={dirty:_,ctx:$}),c.$set(u)},i($){l||(P(c.$$.fragment,$),l=!0)},o($){q(c.$$.fragment,$),l=!1},d($){$&&(r(e),r(s),r(t)),H(c)}}}function mr(d){let e=`
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
}`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function dr(d){let e,o="Syntaxe",s,t,c="Les variables",n,i,m,l;return m=new oe({props:{id:"code",lines:"3-7",$$slots:{default:[mr]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("h4"),t.textContent=c,n=x(),i=h("div"),S(m.$$.fragment),this.h()},l($){e=C($,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-16353j8"&&(e.textContent=o),s=v($),t=C($,"H4",{"data-svelte-h":!0}),g(t)!=="svelte-7x7xjx"&&(t.textContent=c),n=v($),i=C($,"DIV",{class:!0});var _=fe(i);T(m.$$.fragment,_),_.forEach(r),this.h()},h(){w(i,"class","flex flex-col justify-center")},m($,_){a($,e,_),a($,s,_),a($,t,_),a($,n,_),a($,i,_),M(m,i,null),l=!0},p($,_){const u={};_&1&&(u.$$scope={dirty:_,ctx:$}),m.$set(u)},i($){l||(P(m.$$.fragment,$),l=!0)},o($){q(m.$$.fragment,$),l=!1},d($){$&&(r(e),r(s),r(t),r(n),r(i)),H(m)}}}function vr(d){let e=`
public class Main {
    public static void main(String[] args) {
        if (condition) {
            // code block
        } else {
            // code block
        }
        System.out.println("Hello World");
    }
}`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function xr(d){let e,o="Syntaxe",s,t,c="Les structures de contrôle",n,i,m="Condition",l,$,_,u;return _=new oe({props:{id:"code",lines:"3-7",$$slots:{default:[vr]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("h4"),t.textContent=c,n=x(),i=h("h5"),i.textContent=m,l=x(),$=h("div"),S(_.$$.fragment),this.h()},l(f){e=C(f,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-16353j8"&&(e.textContent=o),s=v(f),t=C(f,"H4",{"data-svelte-h":!0}),g(t)!=="svelte-1ys0pg8"&&(t.textContent=c),n=v(f),i=C(f,"H5",{"data-svelte-h":!0}),g(i)!=="svelte-k67mux"&&(i.textContent=m),l=v(f),$=C(f,"DIV",{class:!0});var b=fe($);T(_.$$.fragment,b),b.forEach(r),this.h()},h(){w($,"class","flex flex-col justify-center")},m(f,b){a(f,e,b),a(f,s,b),a(f,t,b),a(f,n,b),a(f,i,b),a(f,l,b),a(f,$,b),M(_,$,null),u=!0},p(f,b){const p={};b&1&&(p.$$scope={dirty:b,ctx:f}),_.$set(p)},i(f){u||(P(_.$$.fragment,f),u=!0)},o(f){q(_.$$.fragment,f),u=!1},d(f){f&&(r(e),r(s),r(t),r(n),r(i),r(l),r($)),H(_)}}}function _r(d){let e=`
public class Main {
    public static void main(String[] args) {
        for (int i = 0; i < 5; i++) {
            // code block
        }
        System.out.println("Hello World");
    }
}`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Cr(d){let e,o="Syntaxe",s,t,c="Les structures de contrôle",n,i,m="Boucle",l,$,_,u;return _=new oe({props:{id:"code",lines:"3-5",$$slots:{default:[_r]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("h4"),t.textContent=c,n=x(),i=h("h5"),i.textContent=m,l=x(),$=h("div"),S(_.$$.fragment),this.h()},l(f){e=C(f,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-16353j8"&&(e.textContent=o),s=v(f),t=C(f,"H4",{"data-svelte-h":!0}),g(t)!=="svelte-1ys0pg8"&&(t.textContent=c),n=v(f),i=C(f,"H5",{"data-svelte-h":!0}),g(i)!=="svelte-fyqcl4"&&(i.textContent=m),l=v(f),$=C(f,"DIV",{class:!0});var b=fe($);T(_.$$.fragment,b),b.forEach(r),this.h()},h(){w($,"class","flex flex-col justify-center")},m(f,b){a(f,e,b),a(f,s,b),a(f,t,b),a(f,n,b),a(f,i,b),a(f,l,b),a(f,$,b),M(_,$,null),u=!0},p(f,b){const p={};b&1&&(p.$$scope={dirty:b,ctx:f}),_.$set(p)},i(f){u||(P(_.$$.fragment,f),u=!0)},o(f){q(_.$$.fragment,f),u=!1},d(f){f&&(r(e),r(s),r(t),r(n),r(i),r(l),r($)),H(_)}}}function hr(d){let e=`
public class Main {
    public static void main(String[] args) {
        int i = 0;
        while (i < 5) {
            // code block
            i++;
        }
        System.out.println("Hello World");
    }
}`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function gr(d){let e,o="Syntaxe",s,t,c="Les structures de contrôle",n,i,m="Boucle",l,$,_,u;return _=new oe({props:{id:"code",lines:"3-7",$$slots:{default:[hr]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("h4"),t.textContent=c,n=x(),i=h("h5"),i.textContent=m,l=x(),$=h("div"),S(_.$$.fragment),this.h()},l(f){e=C(f,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-16353j8"&&(e.textContent=o),s=v(f),t=C(f,"H4",{"data-svelte-h":!0}),g(t)!=="svelte-1ys0pg8"&&(t.textContent=c),n=v(f),i=C(f,"H5",{"data-svelte-h":!0}),g(i)!=="svelte-fyqcl4"&&(i.textContent=m),l=v(f),$=C(f,"DIV",{class:!0});var b=fe($);T(_.$$.fragment,b),b.forEach(r),this.h()},h(){w($,"class","flex flex-col justify-center")},m(f,b){a(f,e,b),a(f,s,b),a(f,t,b),a(f,n,b),a(f,i,b),a(f,l,b),a(f,$,b),M(_,$,null),u=!0},p(f,b){const p={};b&1&&(p.$$scope={dirty:b,ctx:f}),_.$set(p)},i(f){u||(P(_.$$.fragment,f),u=!0)},o(f){q(_.$$.fragment,f),u=!1},d(f){f&&(r(e),r(s),r(t),r(n),r(i),r(l),r($)),H(_)}}}function br(d){let e=`
public class Main {
    public static void main(String[] args) {
        int i = 0;
        do {
            // code block
            i++;
        } while (i < 5);
        System.out.println("Hello World");
    }
}`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Lr(d){let e,o="Syntaxe",s,t,c="Les structures de contrôle",n,i,m="Boucle",l,$,_,u;return _=new oe({props:{id:"code",lines:"3-7",$$slots:{default:[br]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("h4"),t.textContent=c,n=x(),i=h("h5"),i.textContent=m,l=x(),$=h("div"),S(_.$$.fragment),this.h()},l(f){e=C(f,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-16353j8"&&(e.textContent=o),s=v(f),t=C(f,"H4",{"data-svelte-h":!0}),g(t)!=="svelte-1ys0pg8"&&(t.textContent=c),n=v(f),i=C(f,"H5",{"data-svelte-h":!0}),g(i)!=="svelte-fyqcl4"&&(i.textContent=m),l=v(f),$=C(f,"DIV",{class:!0});var b=fe($);T(_.$$.fragment,b),b.forEach(r),this.h()},h(){w($,"class","flex flex-col justify-center")},m(f,b){a(f,e,b),a(f,s,b),a(f,t,b),a(f,n,b),a(f,i,b),a(f,l,b),a(f,$,b),M(_,$,null),u=!0},p(f,b){const p={};b&1&&(p.$$scope={dirty:b,ctx:f}),_.$set(p)},i(f){u||(P(_.$$.fragment,f),u=!0)},o(f){q(_.$$.fragment,f),u=!1},d(f){f&&(r(e),r(s),r(t),r(n),r(i),r(l),r($)),H(_)}}}function wr(d){let e=`
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
        }`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Hr(d){let e,o="Syntaxe",s,t,c="Les structures de contrôle",n,i,m="Les switch",l,$,_,u;return _=new oe({props:{id:"code",lines:"3-13",$$slots:{default:[wr]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("h4"),t.textContent=c,n=x(),i=h("h5"),i.textContent=m,l=x(),$=h("div"),S(_.$$.fragment),this.h()},l(f){e=C(f,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-16353j8"&&(e.textContent=o),s=v(f),t=C(f,"H4",{"data-svelte-h":!0}),g(t)!=="svelte-1ys0pg8"&&(t.textContent=c),n=v(f),i=C(f,"H5",{"data-svelte-h":!0}),g(i)!=="svelte-1f33u0k"&&(i.textContent=m),l=v(f),$=C(f,"DIV",{class:!0});var b=fe($);T(_.$$.fragment,b),b.forEach(r),this.h()},h(){w($,"class","flex flex-col justify-center")},m(f,b){a(f,e,b),a(f,s,b),a(f,t,b),a(f,n,b),a(f,i,b),a(f,l,b),a(f,$,b),M(_,$,null),u=!0},p(f,b){const p={};b&1&&(p.$$scope={dirty:b,ctx:f}),_.$set(p)},i(f){u||(P(_.$$.fragment,f),u=!0)},o(f){q(_.$$.fragment,f),u=!1},d(f){f&&(r(e),r(s),r(t),r(n),r(i),r(l),r($)),H(_)}}}function qr(d){let e=`
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
			`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Pr(d){let e,o="Syntaxe",s,t,c="Les exceptions",n,i,m,l;return m=new oe({props:{id:"code",lines:"3-8",$$slots:{default:[qr]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("h4"),t.textContent=c,n=x(),i=h("div"),S(m.$$.fragment),this.h()},l($){e=C($,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-16353j8"&&(e.textContent=o),s=v($),t=C($,"H4",{"data-svelte-h":!0}),g(t)!=="svelte-5w960"&&(t.textContent=c),n=v($),i=C($,"DIV",{class:!0});var _=fe(i);T(m.$$.fragment,_),_.forEach(r),this.h()},h(){w(i,"class","flex flex-col justify-center")},m($,_){a($,e,_),a($,s,_),a($,t,_),a($,n,_),a($,i,_),M(m,i,null),l=!0},p($,_){const u={};_&1&&(u.$$scope={dirty:_,ctx:$}),m.$set(u)},i($){l||(P(m.$$.fragment,$),l=!0)},o($){q(m.$$.fragment,$),l=!1},d($){$&&(r(e),r(s),r(t),r(n),r(i)),H(m)}}}function Mr(d){let e=`
import java.util.Random;
public class Main {
	public static void main(String [] args){
		Random r = new Random();
		int a;
		a = r.nextInt(100);
		System.out.println(a + "	" + r.nextInt(20));
	}
}
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Tr(d){let e,o='La génération de nombres "aléatoires"',s,t,c,n;return c=new oe({props:{id:"code",lines:"4-6",$$slots:{default:[Mr]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("div"),S(c.$$.fragment),this.h()},l(i){e=C(i,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1wotoib"&&(e.textContent=o),s=v(i),t=C(i,"DIV",{class:!0});var m=fe(t);T(c.$$.fragment,m),m.forEach(r),this.h()},h(){w(t,"class","flex flex-col justify-center")},m(i,m){a(i,e,m),a(i,s,m),a(i,t,m),M(c,t,null),n=!0},p(i,m){const l={};m&1&&(l.$$scope={dirty:m,ctx:i}),c.$set(l)},i(i){n||(P(c.$$.fragment,i),n=!0)},o(i){q(c.$$.fragment,i),n=!1},d(i){i&&(r(e),r(s),r(t)),H(c)}}}function Sr(d){let e=`
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
			`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function jr(d){let e,o="Syntaxe",s,t,c="La lecture clavier",n,i,m,l,$,_=`<li><code class="inlineCode">nextInt()</code> : gets the next integer</li> <li><code class="inlineCode">nextBoolean()</code> : gets the next Boolean</li> <li><code class="inlineCode">nextDouble()</code> : gets the next double</li> <li><code class="inlineCode">nextFloat()</code> : gets the next float</li> <li><code class="inlineCode">nextShort()</code> : gets the next short</li> <li><code class="inlineCode">next()</code> : gets the next string (a line can have multiple strings
				separated by space)</li> <li><code class="inlineCode">nextLine()</code> : gets the next line</li>`,u;return m=new oe({props:{id:"code",lines:"6-7",$$slots:{default:[Sr]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("h4"),t.textContent=c,n=x(),i=h("div"),S(m.$$.fragment),l=x(),$=h("ul"),$.innerHTML=_,this.h()},l(f){e=C(f,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-16353j8"&&(e.textContent=o),s=v(f),t=C(f,"H4",{"data-svelte-h":!0}),g(t)!=="svelte-1f59xtj"&&(t.textContent=c),n=v(f),i=C(f,"DIV",{class:!0});var b=fe(i);T(m.$$.fragment,b),l=v(b),$=C(b,"UL",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-yozt3p"&&($.innerHTML=_),b.forEach(r),this.h()},h(){w($,"class","text-2xl w-1/2"),w(i,"class","flex flex-row justify-center items-center")},m(f,b){a(f,e,b),a(f,s,b),a(f,t,b),a(f,n,b),a(f,i,b),M(m,i,null),Y(i,l),Y(i,$),u=!0},p(f,b){const p={};b&1&&(p.$$scope={dirty:b,ctx:f}),m.$set(p)},i(f){u||(P(m.$$.fragment,f),u=!0)},o(f){q(m.$$.fragment,f),u=!1},d(f){f&&(r(e),r(s),r(t),r(n),r(i)),H(m)}}}function Ar(d){let e,o,s,t,c,n,i,m,l,$,_,u,f,b,p,L,j,E,R,V,I,k,A,F,X,J,le,D,K,$e,pe,Z,ne,me;return e=new U({props:{$$slots:{default:[sr]},$$scope:{ctx:d}}}),s=new U({props:{$$slots:{default:[lr]},$$scope:{ctx:d}}}),c=new U({props:{$$slots:{default:[nr]},$$scope:{ctx:d}}}),i=new U({props:{$$slots:{default:[rr]},$$scope:{ctx:d}}}),l=new U({props:{$$slots:{default:[ar]},$$scope:{ctx:d}}}),_=new U({props:{$$slots:{default:[ur]},$$scope:{ctx:d}}}),f=new U({props:{$$slots:{default:[fr]},$$scope:{ctx:d}}}),p=new U({props:{$$slots:{default:[pr]},$$scope:{ctx:d}}}),j=new U({props:{$$slots:{default:[dr]},$$scope:{ctx:d}}}),R=new U({props:{$$slots:{default:[xr]},$$scope:{ctx:d}}}),I=new U({props:{$$slots:{default:[Cr]},$$scope:{ctx:d}}}),A=new U({props:{$$slots:{default:[gr]},$$scope:{ctx:d}}}),X=new U({props:{$$slots:{default:[Lr]},$$scope:{ctx:d}}}),le=new U({props:{$$slots:{default:[Hr]},$$scope:{ctx:d}}}),K=new U({props:{$$slots:{default:[Pr]},$$scope:{ctx:d}}}),pe=new U({props:{$$slots:{default:[Tr]},$$scope:{ctx:d}}}),ne=new U({props:{$$slots:{default:[jr]},$$scope:{ctx:d}}}),{c(){S(e.$$.fragment),o=x(),S(s.$$.fragment),t=x(),S(c.$$.fragment),n=x(),S(i.$$.fragment),m=x(),S(l.$$.fragment),$=x(),S(_.$$.fragment),u=x(),S(f.$$.fragment),b=x(),S(p.$$.fragment),L=x(),S(j.$$.fragment),E=x(),S(R.$$.fragment),V=x(),S(I.$$.fragment),k=x(),S(A.$$.fragment),F=x(),S(X.$$.fragment),J=x(),S(le.$$.fragment),D=x(),S(K.$$.fragment),$e=x(),S(pe.$$.fragment),Z=x(),S(ne.$$.fragment)},l(y){T(e.$$.fragment,y),o=v(y),T(s.$$.fragment,y),t=v(y),T(c.$$.fragment,y),n=v(y),T(i.$$.fragment,y),m=v(y),T(l.$$.fragment,y),$=v(y),T(_.$$.fragment,y),u=v(y),T(f.$$.fragment,y),b=v(y),T(p.$$.fragment,y),L=v(y),T(j.$$.fragment,y),E=v(y),T(R.$$.fragment,y),V=v(y),T(I.$$.fragment,y),k=v(y),T(A.$$.fragment,y),F=v(y),T(X.$$.fragment,y),J=v(y),T(le.$$.fragment,y),D=v(y),T(K.$$.fragment,y),$e=v(y),T(pe.$$.fragment,y),Z=v(y),T(ne.$$.fragment,y)},m(y,B){M(e,y,B),a(y,o,B),M(s,y,B),a(y,t,B),M(c,y,B),a(y,n,B),M(i,y,B),a(y,m,B),M(l,y,B),a(y,$,B),M(_,y,B),a(y,u,B),M(f,y,B),a(y,b,B),M(p,y,B),a(y,L,B),M(j,y,B),a(y,E,B),M(R,y,B),a(y,V,B),M(I,y,B),a(y,k,B),M(A,y,B),a(y,F,B),M(X,y,B),a(y,J,B),M(le,y,B),a(y,D,B),M(K,y,B),a(y,$e,B),M(pe,y,B),a(y,Z,B),M(ne,y,B),me=!0},p(y,[B]){const ie={};B&1&&(ie.$$scope={dirty:B,ctx:y}),e.$set(ie);const de={};B&1&&(de.$$scope={dirty:B,ctx:y}),s.$set(de);const ve={};B&1&&(ve.$$scope={dirty:B,ctx:y}),c.$set(ve);const W={};B&1&&(W.$$scope={dirty:B,ctx:y}),i.$set(W);const ae={};B&1&&(ae.$$scope={dirty:B,ctx:y}),l.$set(ae);const Ce={};B&1&&(Ce.$$scope={dirty:B,ctx:y}),_.$set(Ce);const _e={};B&1&&(_e.$$scope={dirty:B,ctx:y}),f.$set(_e);const he={};B&1&&(he.$$scope={dirty:B,ctx:y}),p.$set(he);const G={};B&1&&(G.$$scope={dirty:B,ctx:y}),j.$set(G);const ue={};B&1&&(ue.$$scope={dirty:B,ctx:y}),R.$set(ue);const xe={};B&1&&(xe.$$scope={dirty:B,ctx:y}),I.$set(xe);const N={};B&1&&(N.$$scope={dirty:B,ctx:y}),A.$set(N);const re={};B&1&&(re.$$scope={dirty:B,ctx:y}),X.$set(re);const we={};B&1&&(we.$$scope={dirty:B,ctx:y}),le.$set(we);const Q={};B&1&&(Q.$$scope={dirty:B,ctx:y}),K.$set(Q);const ce={};B&1&&(ce.$$scope={dirty:B,ctx:y}),pe.$set(ce);const ge={};B&1&&(ge.$$scope={dirty:B,ctx:y}),ne.$set(ge)},i(y){me||(P(e.$$.fragment,y),P(s.$$.fragment,y),P(c.$$.fragment,y),P(i.$$.fragment,y),P(l.$$.fragment,y),P(_.$$.fragment,y),P(f.$$.fragment,y),P(p.$$.fragment,y),P(j.$$.fragment,y),P(R.$$.fragment,y),P(I.$$.fragment,y),P(A.$$.fragment,y),P(X.$$.fragment,y),P(le.$$.fragment,y),P(K.$$.fragment,y),P(pe.$$.fragment,y),P(ne.$$.fragment,y),me=!0)},o(y){q(e.$$.fragment,y),q(s.$$.fragment,y),q(c.$$.fragment,y),q(i.$$.fragment,y),q(l.$$.fragment,y),q(_.$$.fragment,y),q(f.$$.fragment,y),q(p.$$.fragment,y),q(j.$$.fragment,y),q(R.$$.fragment,y),q(I.$$.fragment,y),q(A.$$.fragment,y),q(X.$$.fragment,y),q(le.$$.fragment,y),q(K.$$.fragment,y),q(pe.$$.fragment,y),q(ne.$$.fragment,y),me=!1},d(y){y&&(r(o),r(t),r(n),r(m),r($),r(u),r(b),r(L),r(E),r(V),r(k),r(F),r(J),r(D),r($e),r(Z)),H(e,y),H(s,y),H(c,y),H(i,y),H(l,y),H(_,y),H(f,y),H(p,y),H(j,y),H(R,y),H(I,y),H(A,y),H(X,y),H(le,y),H(K,y),H(pe,y),H(ne,y)}}}class Er extends Me{constructor(e){super(),Te(this,e,null,Ar,Pe,{})}}function Dr(d){let e,o=`Le polymorphisme est un concept clé de la programmation orientée objet qui permet à des objets de différents types de\r
			être traités comme des objets du même type.`,s,t,c="Il permet d'utiliser une interface commune pour manipuler des objets de classes différentes.";return{c(){e=h("p"),e.textContent=o,s=x(),t=h("p"),t.textContent=c},l(n){e=C(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-11q2ge8"&&(e.textContent=o),s=v(n),t=C(n,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1pdh2kw"&&(t.textContent=c)},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function Ir(d){let e=`
    class MathUtils {
        int additionner(int a, int b) {
            return a + b;
        }

        double additionner(double a, double b) {
            return a + b;
        }
    }
    `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function kr(d){let e,o="Polymorphisme à la compilation",s,t,c="Le polymorphisme à la compilation, ou polymorphisme statique, est réalisé par la surcharge de méthodes.",n,i,m,l,$="Dans cet exemple, la méthode <code>additionner</code> est surchargée pour accepter différents types de paramètres.",_;return i=new oe({props:{$$slots:{default:[Ir]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),S(i.$$.fragment),m=x(),l=h("p"),l.innerHTML=$},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-plirla"&&(e.textContent=o),s=v(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1uiqfmv"&&(t.textContent=c),n=v(u),T(i.$$.fragment,u),m=v(u),l=C(u,"P",{"data-svelte-h":!0}),g(l)!=="svelte-k07nbj"&&(l.innerHTML=$)},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),M(i,u,f),a(u,m,f),a(u,l,f),_=!0},p(u,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:u}),i.$set(b)},i(u){_||(P(i.$$.fragment,u),_=!0)},o(u){q(i.$$.fragment,u),_=!1},d(u){u&&(r(e),r(s),r(t),r(n),r(m),r(l)),H(i,u)}}}function Or(d){let e=`
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
    `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Vr(d){let e,o="Polymorphisme à l'exécution",s,t,c="Le polymorphisme à l'exécution, ou polymorphisme dynamique, est réalisé par la redéfinition de méthodes.",n,i,m,l,$="Dans cet exemple, les classes <code>Chien</code> et <code>Chat</code> redéfinissent la méthode <code>faireDuBruit</code> de la classe <code>Animal</code>.",_;return i=new oe({props:{$$slots:{default:[Or]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),S(i.$$.fragment),m=x(),l=h("p"),l.innerHTML=$,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-18elcun"&&(e.textContent=o),s=v(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-4x0xhv"&&(t.textContent=c),n=v(u),T(i.$$.fragment,u),m=v(u),l=C(u,"P",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-8ipo21"&&(l.innerHTML=$),this.h()},h(){w(l,"class","smaller")},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),M(i,u,f),a(u,m,f),a(u,l,f),_=!0},p(u,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:u}),i.$set(b)},i(u){_||(P(i.$$.fragment,u),_=!0)},o(u){q(i.$$.fragment,u),_=!1},d(u){u&&(r(e),r(s),r(t),r(n),r(m),r(l)),H(i,u)}}}function zr(d){let e=`
    Animal monAnimal = new Chien();
    monAnimal.faireDuBruit(); // Le chien aboie

    monAnimal = new Chat();
    monAnimal.faireDuBruit(); // Le chat miaule
    `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Ur(d){let e,o="Utilisation du polymorphisme",s,t,c="Le polymorphisme permet de traiter des objets de différentes classes de manière uniforme.",n,i,m,l,$="Dans cet exemple, la variable <code>monAnimal</code> peut référencer des objets de type <code>Chien</code> ou <code>Chat</code> et appeler la méthode <code>faireDuBruit</code>.",_;return i=new oe({props:{$$slots:{default:[zr]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),S(i.$$.fragment),m=x(),l=h("p"),l.innerHTML=$},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1pudvuy"&&(e.textContent=o),s=v(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-w2fuv6"&&(t.textContent=c),n=v(u),T(i.$$.fragment,u),m=v(u),l=C(u,"P",{"data-svelte-h":!0}),g(l)!=="svelte-wqomej"&&(l.innerHTML=$)},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),M(i,u,f),a(u,m,f),a(u,l,f),_=!0},p(u,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:u}),i.$set(b)},i(u){_||(P(i.$$.fragment,u),_=!0)},o(u){q(i.$$.fragment,u),_=!1},d(u){u&&(r(e),r(s),r(t),r(n),r(m),r(l)),H(i,u)}}}function Br(d){let e,o="Avantages du polymorphisme",s,t,c="<li>Facilite la maintenance et l&#39;évolution du code.</li> <li>Permet de créer des systèmes plus flexibles et extensibles.</li> <li>Encourage l&#39;utilisation d&#39;interfaces et de classes abstraites.</li>";return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("ul"),t.innerHTML=c},l(n){e=C(n,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-cqy8ul"&&(e.textContent=o),s=v(n),t=C(n,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-xqpuls"&&(t.innerHTML=c)},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function Jr(d){let e=`
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
    `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Rr(d){let e,o="Exemple pratique",s,t,c="Imaginons une application de gestion de formes géométriques. Chaque forme doit pouvoir calculer sa surface.",n,i,m;return i=new oe({props:{$$slots:{default:[Jr]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),S(i.$$.fragment)},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-fryfx"&&(e.textContent=o),s=v(l),t=C(l,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1rk0t8n"&&(t.textContent=c),n=v(l),T(i.$$.fragment,l)},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),M(i,l,$),m=!0},p(l,$){const _={};$&1&&(_.$$scope={dirty:$,ctx:l}),i.$set(_)},i(l){m||(P(i.$$.fragment,l),m=!0)},o(l){q(i.$$.fragment,l),m=!1},d(l){l&&(r(e),r(s),r(t),r(n)),H(i,l)}}}function Nr(d){let e=`
    Forme maForme = new Cercle(5);
    System.out.println(maForme.calculerSurface()); // Affiche la surface du cercle

    maForme = new Rectangle(4, 6);
    System.out.println(maForme.calculerSurface()); // Affiche la surface du rectangle
    `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Fr(d){let e,o="On peut maintenant utiliser le polymorphisme pour calculer la surface de différentes formes sans se soucier de leur type spécifique.",s,t,c;return t=new oe({props:{$$slots:{default:[Nr]},$$scope:{ctx:d}}}),{c(){e=h("p"),e.textContent=o,s=x(),S(t.$$.fragment)},l(n){e=C(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-og5e84"&&(e.textContent=o),s=v(n),T(t.$$.fragment,n)},m(n,i){a(n,e,i),a(n,s,i),M(t,n,i),c=!0},p(n,i){const m={};i&1&&(m.$$scope={dirty:i,ctx:n}),t.$set(m)},i(n){c||(P(t.$$.fragment,n),c=!0)},o(n){q(t.$$.fragment,n),c=!1},d(n){n&&(r(e),r(s)),H(t,n)}}}function Gr(d){let e,o="Utiliser le type le plus générique possible",s,t,c=`Lorsque vous codez des méthodes "polymorphiques", il est recommandé d'utiliser le type le plus générique possible. Cela permet de réutiliser le code plus facilement et de rendre le système plus flexible.`,n,i,m="Par exemple, si une méthode fonctionne pour un <code>Oiseau</code>, il est pertinent de se demander si elle pourrait s&#39;appliquer à tout <code>Animal</code> ou à une de ses interfaces.";return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),i=h("p"),i.innerHTML=m},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1gonlod"&&(e.textContent=o),s=v(l),t=C(l,"P",{"data-svelte-h":!0}),g(t)!=="svelte-4msycu"&&(t.textContent=c),n=v(l),i=C(l,"P",{"data-svelte-h":!0}),g(i)!=="svelte-17qf5k6"&&(i.innerHTML=m)},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),a(l,i,$)},p:z,d(l){l&&(r(e),r(s),r(t),r(n),r(i))}}}function Qr(d){let e,o="Polymorphisme",s,t,c,n,i,m,l,$,_,u,f,b,p,L,j,E,R;return t=new U({props:{$$slots:{default:[Dr]},$$scope:{ctx:d}}}),n=new U({props:{$$slots:{default:[kr]},$$scope:{ctx:d}}}),m=new U({props:{$$slots:{default:[Vr]},$$scope:{ctx:d}}}),$=new U({props:{$$slots:{default:[Ur]},$$scope:{ctx:d}}}),u=new U({props:{$$slots:{default:[Br]},$$scope:{ctx:d}}}),b=new U({props:{className:"smaller",$$slots:{default:[Rr]},$$scope:{ctx:d}}}),L=new U({props:{$$slots:{default:[Fr]},$$scope:{ctx:d}}}),E=new U({props:{$$slots:{default:[Gr]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment),c=x(),S(n.$$.fragment),i=x(),S(m.$$.fragment),l=x(),S($.$$.fragment),_=x(),S(u.$$.fragment),f=x(),S(b.$$.fragment),p=x(),S(L.$$.fragment),j=x(),S(E.$$.fragment)},l(V){e=C(V,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-18uzcw"&&(e.textContent=o),s=v(V),T(t.$$.fragment,V),c=v(V),T(n.$$.fragment,V),i=v(V),T(m.$$.fragment,V),l=v(V),T($.$$.fragment,V),_=v(V),T(u.$$.fragment,V),f=v(V),T(b.$$.fragment,V),p=v(V),T(L.$$.fragment,V),j=v(V),T(E.$$.fragment,V)},m(V,I){a(V,e,I),a(V,s,I),M(t,V,I),a(V,c,I),M(n,V,I),a(V,i,I),M(m,V,I),a(V,l,I),M($,V,I),a(V,_,I),M(u,V,I),a(V,f,I),M(b,V,I),a(V,p,I),M(L,V,I),a(V,j,I),M(E,V,I),R=!0},p(V,I){const k={};I&1&&(k.$$scope={dirty:I,ctx:V}),t.$set(k);const A={};I&1&&(A.$$scope={dirty:I,ctx:V}),n.$set(A);const F={};I&1&&(F.$$scope={dirty:I,ctx:V}),m.$set(F);const X={};I&1&&(X.$$scope={dirty:I,ctx:V}),$.$set(X);const J={};I&1&&(J.$$scope={dirty:I,ctx:V}),u.$set(J);const le={};I&1&&(le.$$scope={dirty:I,ctx:V}),b.$set(le);const D={};I&1&&(D.$$scope={dirty:I,ctx:V}),L.$set(D);const K={};I&1&&(K.$$scope={dirty:I,ctx:V}),E.$set(K)},i(V){R||(P(t.$$.fragment,V),P(n.$$.fragment,V),P(m.$$.fragment,V),P($.$$.fragment,V),P(u.$$.fragment,V),P(b.$$.fragment,V),P(L.$$.fragment,V),P(E.$$.fragment,V),R=!0)},o(V){q(t.$$.fragment,V),q(n.$$.fragment,V),q(m.$$.fragment,V),q($.$$.fragment,V),q(u.$$.fragment,V),q(b.$$.fragment,V),q(L.$$.fragment,V),q(E.$$.fragment,V),R=!1},d(V){V&&(r(e),r(s),r(c),r(i),r(l),r(_),r(f),r(p),r(j)),H(t,V),H(n,V),H(m,V),H($,V),H(u,V),H(b,V),H(L,V),H(E,V)}}}function yr(d){let e,o;return e=new U({props:{$$slots:{default:[Qr]},$$scope:{ctx:d}}}),{c(){S(e.$$.fragment)},l(s){T(e.$$.fragment,s)},m(s,t){M(e,s,t),o=!0},p(s,[t]){const c={};t&1&&(c.$$scope={dirty:t,ctx:s}),e.$set(c)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){q(e.$$.fragment,s),o=!1},d(s){H(e,s)}}}class Kr extends Me{constructor(e){super(),Te(this,e,null,yr,Pe,{})}}function Wr(d){let e,o=`Les membres statiques appartiennent à la classe plutôt qu'à une instance spécifique de la\r
			classe.`,s,t,c="Ils sont partagés par toutes les instances de la classe.",n,i,m="Cela signifie que vous pouvez accéder à un membre statique sans créer d'instance de la classe.";return{c(){e=h("p"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),i=h("p"),i.textContent=m},l(l){e=C(l,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1630q1j"&&(e.textContent=o),s=v(l),t=C(l,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1eojfzb"&&(t.textContent=c),n=v(l),i=C(l,"P",{"data-svelte-h":!0}),g(i)!=="svelte-5aucu0"&&(i.textContent=m)},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),a(l,i,$)},p:z,d(l){l&&(r(e),r(s),r(t),r(n),r(i))}}}function Zr(d){let e=`
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
			`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Yr(d){let e=`
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
			`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Xr(d){let e,o="Attributs statiques",s,t,c,n,i,m,l,$=`Notez qu&#39;il n&#39;est pas nécessaire de créer une instance de la classe <code>Compteur</code> pour accéder à l&#39;attribut statique <code>count</code>.
			En outre <code>count</code> est partagé entre toutes les instances de la classe <code>Compteur</code>.`,_;return c=new oe({props:{class:"language-java",$$slots:{default:[Zr]},$$scope:{ctx:d}}}),i=new oe({props:{$$slots:{default:[Yr]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("div"),S(c.$$.fragment),n=x(),S(i.$$.fragment),m=x(),l=h("p"),l.innerHTML=$,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-toavhx"&&(e.textContent=o),s=v(u),t=C(u,"DIV",{class:!0});var f=fe(t);T(c.$$.fragment,f),n=v(f),T(i.$$.fragment,f),f.forEach(r),m=v(u),l=C(u,"P",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-ub3qaw"&&(l.innerHTML=$),this.h()},h(){w(t,"class","flex flex-row "),w(l,"class","smaller")},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),M(c,t,null),Y(t,n),M(i,t,null),a(u,m,f),a(u,l,f),_=!0},p(u,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:u}),c.$set(b);const p={};f&1&&(p.$$scope={dirty:f,ctx:u}),i.$set(p)},i(u){_||(P(c.$$.fragment,u),P(i.$$.fragment,u),_=!0)},o(u){q(c.$$.fragment,u),q(i.$$.fragment,u),_=!1},d(u){u&&(r(e),r(s),r(t),r(m),r(l)),H(c),H(i)}}}function ea(d){let e=`
	class MathUtils {
		static int additionner(int a, int b) {
			return a + b;
		}
	}
	
	int result = MathUtils.additionner(3, 4);
	`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function ta(d){let e,o="Méthodes statiques",s,t,c,n,i=`La méthode <code>additionner</code> peut être appelée sans créer une instance de la classe
			<code>MathUtils</code>.`,m,l,$="Remarquez que vous utilisez <code>System.out.println()</code> sans créer d&#39;instance de la classe, il s&#39;agit 		d&#39;une méthode statique.",_;return t=new oe({props:{$$slots:{default:[ea]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment),c=x(),n=h("p"),n.innerHTML=i,m=x(),l=h("p"),l.innerHTML=$},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-n0ip6m"&&(e.textContent=o),s=v(u),T(t.$$.fragment,u),c=v(u),n=C(u,"P",{"data-svelte-h":!0}),g(n)!=="svelte-1ww0p7q"&&(n.innerHTML=i),m=v(u),l=C(u,"P",{"data-svelte-h":!0}),g(l)!=="svelte-17rashm"&&(l.innerHTML=$)},m(u,f){a(u,e,f),a(u,s,f),M(t,u,f),a(u,c,f),a(u,n,f),a(u,m,f),a(u,l,f),_=!0},p(u,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:u}),t.$set(b)},i(u){_||(P(t.$$.fragment,u),_=!0)},o(u){q(t.$$.fragment,u),_=!1},d(u){u&&(r(e),r(s),r(c),r(n),r(m),r(l)),H(t,u)}}}function sa(d){let e=`
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
			`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function la(d){let e,o="Limitation des méthodes statiques",s,t,c,n,i=`Une méthode statique ne peut pas accéder directement aux attributs ou méthodes non statiques de la classe. \r
			Cela est dû au fait que les méthodes statiques n'ont pas de référence à une instance spécifique de la classe.`,m;return t=new oe({props:{$$slots:{default:[sa]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment),c=x(),n=h("p"),n.textContent=i},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-mxao6o"&&(e.textContent=o),s=v(l),T(t.$$.fragment,l),c=v(l),n=C(l,"P",{"data-svelte-h":!0}),g(n)!=="svelte-38klnp"&&(n.textContent=i)},m(l,$){a(l,e,$),a(l,s,$),M(t,l,$),a(l,c,$),a(l,n,$),m=!0},p(l,$){const _={};$&1&&(_.$$scope={dirty:$,ctx:l}),t.$set(_)},i(l){m||(P(t.$$.fragment,l),m=!0)},o(l){q(t.$$.fragment,l),m=!1},d(l){l&&(r(e),r(s),r(c),r(n)),H(t,l)}}}function na(d){let e,o="Avantages des membres et méthodes statiques",s,t,c="<li>Partage des ressources : Les membres statiques sont partagés par toutes les instances de la classe, ce qui permet de partager des données ou des états communs.</li> <li>Accès sans instance : Les méthodes et attributs statiques peuvent être utilisés sans créer d&#39;instance de la classe, ce qui simplifie l&#39;accès aux utilitaires et aux constantes.</li> <li>Performance : L&#39;accès aux membres statiques peut être plus rapide car il n&#39;y a pas besoin de créer et de gérer des instances d&#39;objets.</li> <li>Organisation du code : Les méthodes statiques peuvent regrouper des fonctions utilitaires ou des opérations liées à la classe, améliorant ainsi la lisibilité et la maintenance du code.</li>";return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("ul"),t.innerHTML=c},l(n){e=C(n,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-12gnc3a"&&(e.textContent=o),s=v(n),t=C(n,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-1v701z"&&(t.innerHTML=c)},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function ia(d){let e,o="Les membres statiques",s,t,c,n,i,m,l,$,_,u,f;return t=new U({props:{$$slots:{default:[Wr]},$$scope:{ctx:d}}}),n=new U({props:{$$slots:{default:[Xr]},$$scope:{ctx:d}}}),m=new U({props:{$$slots:{default:[ta]},$$scope:{ctx:d}}}),$=new U({props:{$$slots:{default:[la]},$$scope:{ctx:d}}}),u=new U({props:{$$slots:{default:[na]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment),c=x(),S(n.$$.fragment),i=x(),S(m.$$.fragment),l=x(),S($.$$.fragment),_=x(),S(u.$$.fragment)},l(b){e=C(b,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-11qpvto"&&(e.textContent=o),s=v(b),T(t.$$.fragment,b),c=v(b),T(n.$$.fragment,b),i=v(b),T(m.$$.fragment,b),l=v(b),T($.$$.fragment,b),_=v(b),T(u.$$.fragment,b)},m(b,p){a(b,e,p),a(b,s,p),M(t,b,p),a(b,c,p),M(n,b,p),a(b,i,p),M(m,b,p),a(b,l,p),M($,b,p),a(b,_,p),M(u,b,p),f=!0},p(b,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:b}),t.$set(L);const j={};p&1&&(j.$$scope={dirty:p,ctx:b}),n.$set(j);const E={};p&1&&(E.$$scope={dirty:p,ctx:b}),m.$set(E);const R={};p&1&&(R.$$scope={dirty:p,ctx:b}),$.$set(R);const V={};p&1&&(V.$$scope={dirty:p,ctx:b}),u.$set(V)},i(b){f||(P(t.$$.fragment,b),P(n.$$.fragment,b),P(m.$$.fragment,b),P($.$$.fragment,b),P(u.$$.fragment,b),f=!0)},o(b){q(t.$$.fragment,b),q(n.$$.fragment,b),q(m.$$.fragment,b),q($.$$.fragment,b),q(u.$$.fragment,b),f=!1},d(b){b&&(r(e),r(s),r(c),r(i),r(l),r(_)),H(t,b),H(n,b),H(m,b),H($,b),H(u,b)}}}function ra(d){let e,o;return e=new U({props:{$$slots:{default:[ia]},$$scope:{ctx:d}}}),{c(){S(e.$$.fragment)},l(s){T(e.$$.fragment,s)},m(s,t){M(e,s,t),o=!0},p(s,[t]){const c={};t&1&&(c.$$scope={dirty:t,ctx:s}),e.$set(c)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){q(e.$$.fragment,s),o=!1},d(s){H(e,s)}}}class aa extends Me{constructor(e){super(),Te(this,e,null,ra,Pe,{})}}function ua(d){let e,o=`La généricité permet de créer des classes, des interfaces et des méthodes avec des types\r
			paramétrés.`,s,t,c="Cela permet de réutiliser du code avec différents types sans le dupliquer.";return{c(){e=h("p"),e.textContent=o,s=x(),t=h("p"),t.textContent=c},l(n){e=C(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-y92tkb"&&(e.textContent=o),s=v(n),t=C(n,"P",{"data-svelte-h":!0}),g(t)!=="svelte-xc0rvs"&&(t.textContent=c)},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function oa(d){let e=`
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
	`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function $a(d){let e,o="Classes génériques",s,t,c;return t=new oe({props:{$$slots:{default:[oa]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment)},l(n){e=C(n,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-uwteju"&&(e.textContent=o),s=v(n),T(t.$$.fragment,n)},m(n,i){a(n,e,i),a(n,s,i),M(t,n,i),c=!0},p(n,i){const m={};i&1&&(m.$$scope={dirty:i,ctx:n}),t.$set(m)},i(n){c||(P(t.$$.fragment,n),c=!0)},o(n){q(t.$$.fragment,n),c=!1},d(n){n&&(r(e),r(s)),H(t,n)}}}function fa(d){let e=`
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
	`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function ca(d){let e,o="Méthodes génériques",s,t,c;return t=new oe({props:{$$slots:{default:[fa]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment)},l(n){e=C(n,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-ippuop"&&(e.textContent=o),s=v(n),T(t.$$.fragment,n)},m(n,i){a(n,e,i),a(n,s,i),M(t,n,i),c=!0},p(n,i){const m={};i&1&&(m.$$scope={dirty:i,ctx:n}),t.$set(m)},i(n){c||(P(t.$$.fragment,n),c=!0)},o(n){q(t.$$.fragment,n),c=!1},d(n){n&&(r(e),r(s)),H(t,n)}}}function pa(d){let e=`
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
	`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function ma(d){let e,o="Interfaces génériques",s,t,c;return t=new oe({props:{$$slots:{default:[pa]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment)},l(n){e=C(n,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1vh4c50"&&(e.textContent=o),s=v(n),T(t.$$.fragment,n)},m(n,i){a(n,e,i),a(n,s,i),M(t,n,i),c=!0},p(n,i){const m={};i&1&&(m.$$scope={dirty:i,ctx:n}),t.$set(m)},i(n){c||(P(t.$$.fragment,n),c=!0)},o(n){q(t.$$.fragment,n),c=!1},d(n){n&&(r(e),r(s)),H(t,n)}}}function da(d){let e=`
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
		`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function va(d){let e,o="Contrôle de type sur les types génériques",s,t,c,n,i=`Le contrôle de type permet de s'assurer que les types utilisés avec les classes et méthodes\r
			génériques sont compatibles, évitant ainsi les erreurs de type à l'exécution.`,m;return t=new oe({props:{$$slots:{default:[da]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment),c=x(),n=h("p"),n.textContent=i,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-n7u5h7"&&(e.textContent=o),s=v(l),T(t.$$.fragment,l),c=v(l),n=C(l,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-gp9ffm"&&(n.textContent=i),this.h()},h(){w(n,"class","smaller")},m(l,$){a(l,e,$),a(l,s,$),M(t,l,$),a(l,c,$),a(l,n,$),m=!0},p(l,$){const _={};$&1&&(_.$$scope={dirty:$,ctx:l}),t.$set(_)},i(l){m||(P(t.$$.fragment,l),m=!0)},o(l){q(t.$$.fragment,l),m=!1},d(l){l&&(r(e),r(s),r(c),r(n)),H(t,l)}}}function xa(d){let e=`
    abstract class Animal 
    abstract class Oiseau extends Animal
    class Chien extends Animal
    class Colibri extends Oiseau
    class CageOiseau<T extends Oiseau>{
        T contenu
        void setContenu(T contenu)
    }
    `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function _a(d){let e=`
    public class CageOiseau<T extends Oiseau> {}

    CageOiseau<Oiseau> cageOiseau = new CageOiseau<>();
    cageOiseau.setContenu(new Oiseau());
    cageOiseau.setContenu(new Colibri());
    CageOiseau<Chien> cageChien = new CageOiseau<>(); // Erreur de compilation
    cageChien.setContenu(new Chien()); // Erreur de compilation
    `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Ca(d){let e,o="Restriction des types génériques",s,t,c='Il est possible de "filtrer" les types génériques en utilisant des contraintes.',n,i,m,l,$,_;return m=new De({props:{$$slots:{default:[xa]},$$scope:{ctx:d}}}),$=new oe({props:{$$slots:{default:[_a]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),i=h("div"),S(m.$$.fragment),l=x(),S($.$$.fragment)},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-7kmo2z"&&(e.textContent=o),s=v(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-h5rwf4"&&(t.textContent=c),n=v(u),i=C(u,"DIV",{});var f=fe(i);T(m.$$.fragment,f),l=v(f),T($.$$.fragment,f),f.forEach(r)},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),a(u,i,f),M(m,i,null),Y(i,l),M($,i,null),_=!0},p(u,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:u}),m.$set(b);const p={};f&1&&(p.$$scope={dirty:f,ctx:u}),$.$set(p)},i(u){_||(P(m.$$.fragment,u),P($.$$.fragment,u),_=!0)},o(u){q(m.$$.fragment,u),q($.$$.fragment,u),_=!1},d(u){u&&(r(e),r(s),r(t),r(n),r(i)),H(m),H($)}}}function ha(d){let e=`
        class Cage<T extends IVolant & Animal>
        class Oiseau extends Animal implements IVolant
        class Avion extends Vehicule implements IVolant 
        Cage --down[hidden]> IVolant
        
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function ga(d){let e=`
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
            
        
                
        `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function ba(d){let e,o="Restriction des types génériques",s,t,c,n,i,m;return c=new De({props:{$$slots:{default:[ha]},$$scope:{ctx:d}}}),i=new oe({props:{$$slots:{default:[ga]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("div"),S(c.$$.fragment),n=x(),S(i.$$.fragment),this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-7kmo2z"&&(e.textContent=o),s=v(l),t=C(l,"DIV",{class:!0});var $=fe(t);T(c.$$.fragment,$),n=v($),T(i.$$.fragment,$),$.forEach(r),this.h()},h(){w(t,"class","flex items-start")},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),M(c,t,null),Y(t,n),M(i,t,null),m=!0},p(l,$){const _={};$&1&&(_.$$scope={dirty:$,ctx:l}),c.$set(_);const u={};$&1&&(u.$$scope={dirty:$,ctx:l}),i.$set(u)},i(l){m||(P(c.$$.fragment,l),P(i.$$.fragment,l),m=!0)},o(l){q(c.$$.fragment,l),q(i.$$.fragment,l),m=!1},d(l){l&&(r(e),r(s),r(t)),H(c),H(i)}}}function La(d){let e=`
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
        `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function wa(d){let e,o="Classes génériques avec plusieurs types",s,t,c;return t=new oe({props:{$$slots:{default:[La]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment)},l(n){e=C(n,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1j91j4"&&(e.textContent=o),s=v(n),T(t.$$.fragment,n)},m(n,i){a(n,e,i),a(n,s,i),M(t,n,i),c=!0},p(n,i){const m={};i&1&&(m.$$scope={dirty:i,ctx:n}),t.$set(m)},i(n){c||(P(t.$$.fragment,n),c=!0)},o(n){q(t.$$.fragment,n),c=!1},d(n){n&&(r(e),r(s)),H(t,n)}}}function Ha(d){let e=`
        class Util {
            public static <T, U> void afficherDeux(T premier, U second) {
                System.out.println("Premier: " + premier);
                System.out.println("Second: " + second);
            }
        }

        Util.afficherDeux("Hello", 123);    // Affiche "Premier: Hello" et "Second: 123"
        Util.afficherDeux(3.14, true);      // Affiche "Premier: 3.14" et "Second: true"
        `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function qa(d){let e,o="Méthodes génériques avec plusieurs types",s,t,c;return t=new oe({props:{$$slots:{default:[Ha]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment)},l(n){e=C(n,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1btbcib"&&(e.textContent=o),s=v(n),T(t.$$.fragment,n)},m(n,i){a(n,e,i),a(n,s,i),M(t,n,i),c=!0},p(n,i){const m={};i&1&&(m.$$scope={dirty:i,ctx:n}),t.$set(m)},i(n){c||(P(t.$$.fragment,n),c=!0)},o(n){q(t.$$.fragment,n),c=!1},d(n){n&&(r(e),r(s)),H(t,n)}}}function Pa(d){let e,o="Généricité",s,t,c,n,i,m,l,$,_,u,f,b,p,L,j,E,R,V,I;return t=new U({props:{$$slots:{default:[ua]},$$scope:{ctx:d}}}),n=new U({props:{$$slots:{default:[$a]},$$scope:{ctx:d}}}),m=new U({props:{$$slots:{default:[ca]},$$scope:{ctx:d}}}),$=new U({props:{$$slots:{default:[ma]},$$scope:{ctx:d}}}),u=new U({props:{$$slots:{default:[va]},$$scope:{ctx:d}}}),b=new U({props:{$$slots:{default:[Ca]},$$scope:{ctx:d}}}),L=new U({props:{$$slots:{default:[ba]},$$scope:{ctx:d}}}),E=new U({props:{$$slots:{default:[wa]},$$scope:{ctx:d}}}),V=new U({props:{$$slots:{default:[qa]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment),c=x(),S(n.$$.fragment),i=x(),S(m.$$.fragment),l=x(),S($.$$.fragment),_=x(),S(u.$$.fragment),f=x(),S(b.$$.fragment),p=x(),S(L.$$.fragment),j=x(),S(E.$$.fragment),R=x(),S(V.$$.fragment)},l(k){e=C(k,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1konbvn"&&(e.textContent=o),s=v(k),T(t.$$.fragment,k),c=v(k),T(n.$$.fragment,k),i=v(k),T(m.$$.fragment,k),l=v(k),T($.$$.fragment,k),_=v(k),T(u.$$.fragment,k),f=v(k),T(b.$$.fragment,k),p=v(k),T(L.$$.fragment,k),j=v(k),T(E.$$.fragment,k),R=v(k),T(V.$$.fragment,k)},m(k,A){a(k,e,A),a(k,s,A),M(t,k,A),a(k,c,A),M(n,k,A),a(k,i,A),M(m,k,A),a(k,l,A),M($,k,A),a(k,_,A),M(u,k,A),a(k,f,A),M(b,k,A),a(k,p,A),M(L,k,A),a(k,j,A),M(E,k,A),a(k,R,A),M(V,k,A),I=!0},p(k,A){const F={};A&1&&(F.$$scope={dirty:A,ctx:k}),t.$set(F);const X={};A&1&&(X.$$scope={dirty:A,ctx:k}),n.$set(X);const J={};A&1&&(J.$$scope={dirty:A,ctx:k}),m.$set(J);const le={};A&1&&(le.$$scope={dirty:A,ctx:k}),$.$set(le);const D={};A&1&&(D.$$scope={dirty:A,ctx:k}),u.$set(D);const K={};A&1&&(K.$$scope={dirty:A,ctx:k}),b.$set(K);const $e={};A&1&&($e.$$scope={dirty:A,ctx:k}),L.$set($e);const pe={};A&1&&(pe.$$scope={dirty:A,ctx:k}),E.$set(pe);const Z={};A&1&&(Z.$$scope={dirty:A,ctx:k}),V.$set(Z)},i(k){I||(P(t.$$.fragment,k),P(n.$$.fragment,k),P(m.$$.fragment,k),P($.$$.fragment,k),P(u.$$.fragment,k),P(b.$$.fragment,k),P(L.$$.fragment,k),P(E.$$.fragment,k),P(V.$$.fragment,k),I=!0)},o(k){q(t.$$.fragment,k),q(n.$$.fragment,k),q(m.$$.fragment,k),q($.$$.fragment,k),q(u.$$.fragment,k),q(b.$$.fragment,k),q(L.$$.fragment,k),q(E.$$.fragment,k),q(V.$$.fragment,k),I=!1},d(k){k&&(r(e),r(s),r(c),r(i),r(l),r(_),r(f),r(p),r(j),r(R)),H(t,k),H(n,k),H(m,k),H($,k),H(u,k),H(b,k),H(L,k),H(E,k),H(V,k)}}}function Ma(d){let e,o;return e=new U({props:{$$slots:{default:[Pa]},$$scope:{ctx:d}}}),{c(){S(e.$$.fragment)},l(s){T(e.$$.fragment,s)},m(s,t){M(e,s,t),o=!0},p(s,[t]){const c={};t&1&&(c.$$scope={dirty:t,ctx:s}),e.$set(c)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){q(e.$$.fragment,s),o=!1},d(s){H(e,s)}}}class Ta extends Me{constructor(e){super(),Te(this,e,null,Ma,Pe,{})}}function Sa(d){let e,o="Présentation",s,t,c=`Les lambdas sont des fonctions anonymes qui permettent de simplifier le code en évitant de\r
			créer des classes ou des méthodes supplémentaires. Pensez à elles comme à des raccourcis pour\r
			écrire des fonctions.`,n,i,m=`Elles sont souvent utilisées pour implémenter des interfaces fonctionnelles, c'est-à-dire des\r
			interfaces qui ne contiennent qu'une seule méthode abstraite.`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),i=h("p"),i.textContent=m},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-14nafu8"&&(e.textContent=o),s=v(l),t=C(l,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1qr4dtq"&&(t.textContent=c),n=v(l),i=C(l,"P",{"data-svelte-h":!0}),g(i)!=="svelte-1lytgjw"&&(i.textContent=m)},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),a(l,i,$)},p:z,d(l){l&&(r(e),r(s),r(t),r(n),r(i))}}}function ja(d){let e=`
            (paramètres) -> expression
            (paramètres) -> { instructions }
            `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Aa(d){let e=`
            (int a, int b) -> a + b
            () -> System.out.println("Hello, world!")
            (String s) -> { System.out.println(s); }
            `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Ea(d){let e,o="Syntaxe des lambdas",s,t,c="La syntaxe des lambdas en Java est la suivante :",n,i,m,l,$="Exemple :",_,u,f;return i=new oe({props:{$$slots:{default:[ja]},$$scope:{ctx:d}}}),u=new oe({props:{$$slots:{default:[Aa]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),S(i.$$.fragment),m=x(),l=h("p"),l.textContent=$,_=x(),S(u.$$.fragment)},l(b){e=C(b,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1rhlr30"&&(e.textContent=o),s=v(b),t=C(b,"P",{"data-svelte-h":!0}),g(t)!=="svelte-12je3p4"&&(t.textContent=c),n=v(b),T(i.$$.fragment,b),m=v(b),l=C(b,"P",{"data-svelte-h":!0}),g(l)!=="svelte-14lz6sc"&&(l.textContent=$),_=v(b),T(u.$$.fragment,b)},m(b,p){a(b,e,p),a(b,s,p),a(b,t,p),a(b,n,p),M(i,b,p),a(b,m,p),a(b,l,p),a(b,_,p),M(u,b,p),f=!0},p(b,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:b}),i.$set(L);const j={};p&1&&(j.$$scope={dirty:p,ctx:b}),u.$set(j)},i(b){f||(P(i.$$.fragment,b),P(u.$$.fragment,b),f=!0)},o(b){q(i.$$.fragment,b),q(u.$$.fragment,b),f=!1},d(b){b&&(r(e),r(s),r(t),r(n),r(m),r(l),r(_)),H(i,b),H(u,b)}}}function Da(d){let e=`
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
            `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Ia(d){let e,o="Utilisation de la notation ::",s,t,c="La notation <code>::</code> en Java est utilisée pour faire référence à une méthode ou à un constructeur. Elle est souvent utilisée avec les lambdas pour simplifier le code.",n,i,m="Exemple :",l,$,_;return $=new oe({props:{$$slots:{default:[Da]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c,n=x(),i=h("p"),i.textContent=m,l=x(),S($.$$.fragment)},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-11teg0t"&&(e.textContent=o),s=v(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-70y9fa"&&(t.innerHTML=c),n=v(u),i=C(u,"P",{"data-svelte-h":!0}),g(i)!=="svelte-14lz6sc"&&(i.textContent=m),l=v(u),T($.$$.fragment,u)},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),a(u,i,f),a(u,l,f),M($,u,f),_=!0},p(u,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:u}),$.$set(b)},i(u){_||(P($.$$.fragment,u),_=!0)},o(u){q($.$$.fragment,u),_=!1},d(u){u&&(r(e),r(s),r(t),r(n),r(i),r(l)),H($,u)}}}function ka(d){let e=`
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
            `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Oa(d){let e,o="Exemple d'utilisation",s,t,c="Voici un exemple d'utilisation des lambdas avec une interface fonctionnelle :",n,i,m;return i=new oe({props:{$$slots:{default:[ka]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),S(i.$$.fragment)},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1masex2"&&(e.textContent=o),s=v(l),t=C(l,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1bzbp9"&&(t.textContent=c),n=v(l),T(i.$$.fragment,l)},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),M(i,l,$),m=!0},p(l,$){const _={};$&1&&(_.$$scope={dirty:$,ctx:l}),i.$set(_)},i(l){m||(P(i.$$.fragment,l),m=!0)},o(l){q(i.$$.fragment,l),m=!1},d(l){l&&(r(e),r(s),r(t),r(n)),H(i,l)}}}function Va(d){let e=`
            public class Lambda {
                public static void main(String[] args) {
                    List<Integer> nombres = Arrays.asList(1, 2, 3, 4, 5);
                    // Utilisation de la bibliothèque Stream
                    nombres.stream().filter(n -> n % 2 == 0).forEach(System.out::println);
                    // Affiche 2 et 4
                }
            }
            `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function za(d){let e,o="La bibliothèque Stream",s,t,c="La bibliothèque Stream permet de manipuler des collections de manière fonctionnelle.",n,i,m;return i=new oe({props:{$$slots:{default:[Va]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),S(i.$$.fragment)},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-3s5w1x"&&(e.textContent=o),s=v(l),t=C(l,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1w303ls"&&(t.textContent=c),n=v(l),T(i.$$.fragment,l)},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),M(i,l,$),m=!0},p(l,$){const _={};$&1&&(_.$$scope={dirty:$,ctx:l}),i.$set(_)},i(l){m||(P(i.$$.fragment,l),m=!0)},o(l){q(i.$$.fragment,l),m=!1},d(l){l&&(r(e),r(s),r(t),r(n)),H(i,l)}}}function Ua(d){let e,o="La bibliothèque Stream",s,t,c="Exemples de fonctions de <code>stream</code>",n,i,m="<li><code>filter</code> : filtre les éléments d&#39;un <code>stream</code></li> <li><code>map</code> : transforme les éléments d&#39;un <code>stream</code></li> <li><code>reduce</code> : réduit les éléments d&#39;un <code>stream</code></li> <li><code>collect</code> : collecte les éléments d&#39;un <code>stream</code></li>";return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("h4"),t.innerHTML=c,n=x(),i=h("ul"),i.innerHTML=m},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-3s5w1x"&&(e.textContent=o),s=v(l),t=C(l,"H4",{"data-svelte-h":!0}),g(t)!=="svelte-1jg16if"&&(t.innerHTML=c),n=v(l),i=C(l,"UL",{"data-svelte-h":!0}),g(i)!=="svelte-y0msi3"&&(i.innerHTML=m)},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),a(l,i,$)},p:z,d(l){l&&(r(e),r(s),r(t),r(n),r(i))}}}function Ba(d){let e=`
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
                `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Ja(d){let e=`
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
                `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Ra(d){let e,o="La bibliothèque Stream",s,t,c="Exemples complet",n,i,m,l,$="Utilisation de boucles",_,u,f,b,p,L="Utilisation de Stream",j,E,R;return u=new oe({props:{$$slots:{default:[Ba]},$$scope:{ctx:d}}}),E=new oe({props:{$$slots:{default:[Ja]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("h4"),t.textContent=c,n=x(),i=h("div"),m=h("div"),l=h("h6"),l.textContent=$,_=x(),S(u.$$.fragment),f=x(),b=h("div"),p=h("h6"),p.textContent=L,j=x(),S(E.$$.fragment),this.h()},l(V){e=C(V,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-3s5w1x"&&(e.textContent=o),s=v(V),t=C(V,"H4",{"data-svelte-h":!0}),g(t)!=="svelte-yapop1"&&(t.textContent=c),n=v(V),i=C(V,"DIV",{class:!0});var I=fe(i);m=C(I,"DIV",{class:!0});var k=fe(m);l=C(k,"H6",{"data-svelte-h":!0}),g(l)!=="svelte-1m83sp7"&&(l.textContent=$),_=v(k),T(u.$$.fragment,k),k.forEach(r),f=v(I),b=C(I,"DIV",{class:!0});var A=fe(b);p=C(A,"H6",{"data-svelte-h":!0}),g(p)!=="svelte-x4jzjq"&&(p.textContent=L),j=v(A),T(E.$$.fragment,A),A.forEach(r),I.forEach(r),this.h()},h(){w(m,"class","flex-1"),w(b,"class","flex-1"),w(i,"class","flex justify-center")},m(V,I){a(V,e,I),a(V,s,I),a(V,t,I),a(V,n,I),a(V,i,I),Y(i,m),Y(m,l),Y(m,_),M(u,m,null),Y(i,f),Y(i,b),Y(b,p),Y(b,j),M(E,b,null),R=!0},p(V,I){const k={};I&1&&(k.$$scope={dirty:I,ctx:V}),u.$set(k);const A={};I&1&&(A.$$scope={dirty:I,ctx:V}),E.$set(A)},i(V){R||(P(u.$$.fragment,V),P(E.$$.fragment,V),R=!0)},o(V){q(u.$$.fragment,V),q(E.$$.fragment,V),R=!1},d(V){V&&(r(e),r(s),r(t),r(n),r(i)),H(u),H(E)}}}function Na(d){let e,o="Généralitées sur les Lambda",s,t,c="<li>Les lambdas sont des fonctions anonymes</li> <li>Elles sont souvent utilisées pour implémenter des interfaces fonctionnelles</li> <li>Une interface fonctionnelle est une interface qui ne contient qu&#39;une seule méthode abstraite</li> <li>La bibliothèque Stream permet de manipuler des collections de manière fonctionnelle</li>";return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("ul"),t.innerHTML=c},l(n){e=C(n,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1yvkeux"&&(e.textContent=o),s=v(n),t=C(n,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-1o4wyjx"&&(t.innerHTML=c)},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function Fa(d){let e=`
                public class Lambda {
                    public static void main(String[] args) {
                        int a = 5;
                        Operation addition = (b) -> a + b;
                        System.out.println(addition.calculer(3)); // Affiche 8
                    }
                }
                `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Ga(d){let e=`
                public class Lambda {
                    public static void main(String[] args) {
                        int a = 5;
                        Operation addition = (b) -> a = a + b; // Erreur de compilation
                    }
                }
                `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Qa(d){let e,o="Portée des variables",s,t,c=`Les lambdas peuvent accéder aux variables locales et aux paramètres des méthodes dans\r
			lesquelles elles sont déclarées.`,n,i,m,l,$=`En revanche, elles ne peuvent pas modifier les variables locales et les paramètres des\r
			méthodes dans lesquelles elles sont déclarées.`,_,u,f;return i=new oe({props:{$$slots:{default:[Fa]},$$scope:{ctx:d}}}),u=new oe({props:{$$slots:{default:[Ga]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),S(i.$$.fragment),m=x(),l=h("p"),l.textContent=$,_=x(),S(u.$$.fragment)},l(b){e=C(b,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1e5jpuk"&&(e.textContent=o),s=v(b),t=C(b,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1kgzcpl"&&(t.textContent=c),n=v(b),T(i.$$.fragment,b),m=v(b),l=C(b,"P",{"data-svelte-h":!0}),g(l)!=="svelte-1ngamoe"&&(l.textContent=$),_=v(b),T(u.$$.fragment,b)},m(b,p){a(b,e,p),a(b,s,p),a(b,t,p),a(b,n,p),M(i,b,p),a(b,m,p),a(b,l,p),a(b,_,p),M(u,b,p),f=!0},p(b,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:b}),i.$set(L);const j={};p&1&&(j.$$scope={dirty:p,ctx:b}),u.$set(j)},i(b){f||(P(i.$$.fragment,b),P(u.$$.fragment,b),f=!0)},o(b){q(i.$$.fragment,b),q(u.$$.fragment,b),f=!1},d(b){b&&(r(e),r(s),r(t),r(n),r(m),r(l),r(_)),H(i,b),H(u,b)}}}function ya(d){let e,o="Les collecteurs",s,t,c="Les collecteurs sont utilisés pour accumuler les éléments d'un stream dans une collection, une chaîne de caractères, ou une autre structure de données.",n,i,m="Exemples de collecteurs :",l,$,_="<li><code>toList</code> : collecte les éléments dans une liste</li> <li><code>toSet</code> : collecte les éléments dans un ensemble</li> <li><code>joining</code> : concatène les éléments en une chaîne de caractères</li> <li><code>groupingBy</code> : groupe les éléments par une clé</li> <li><code>partitioningBy</code> : partitionne les éléments en deux groupes</li>";return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),i=h("p"),i.textContent=m,l=x(),$=h("ul"),$.innerHTML=_},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-g8ycxf"&&(e.textContent=o),s=v(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1s91i32"&&(t.textContent=c),n=v(u),i=C(u,"P",{"data-svelte-h":!0}),g(i)!=="svelte-ub31ev"&&(i.textContent=m),l=v(u),$=C(u,"UL",{"data-svelte-h":!0}),g($)!=="svelte-1usc45j"&&($.innerHTML=_)},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),a(u,i,f),a(u,l,f),a(u,$,f)},p:z,d(u){u&&(r(e),r(s),r(t),r(n),r(i),r(l),r($))}}}function Ka(d){let e=`
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
            `,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Wa(d){let e,o="Exemples de collecteurs",s,t,c="Voici quelques exemples d'utilisation des collecteurs :",n,i,m;return i=new oe({props:{$$slots:{default:[Ka]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),S(i.$$.fragment)},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1vo69jl"&&(e.textContent=o),s=v(l),t=C(l,"P",{"data-svelte-h":!0}),g(t)!=="svelte-jhz8lh"&&(t.textContent=c),n=v(l),T(i.$$.fragment,l)},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),M(i,l,$),m=!0},p(l,$){const _={};$&1&&(_.$$scope={dirty:$,ctx:l}),i.$set(_)},i(l){m||(P(i.$$.fragment,l),m=!0)},o(l){q(i.$$.fragment,l),m=!1},d(l){l&&(r(e),r(s),r(t),r(n)),H(i,l)}}}function Za(d){let e,o="Les intérêts des lambdas",s,t,c="<li>Les lambdas permettent de simplifier le code</li> <li>Elles permettent de rendre le code plus lisible</li> <li>Elles permettent de rendre le code plus concis</li> <li>Elles permettent de rendre le code plus maintenable</li>";return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("ul"),t.innerHTML=c},l(n){e=C(n,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1g293rx"&&(e.textContent=o),s=v(n),t=C(n,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-1a9dw6q"&&(t.innerHTML=c)},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function Ya(d){let e,o="Les lambdas",s,t,c,n,i,m,l,$,_,u,f,b,p,L,j,E,R,V,I,k,A,F,X,J,le;return t=new U({props:{$$slots:{default:[Sa]},$$scope:{ctx:d}}}),n=new U({props:{$$slots:{default:[Ea]},$$scope:{ctx:d}}}),m=new U({props:{$$slots:{default:[Ia]},$$scope:{ctx:d}}}),$=new U({props:{$$slots:{default:[Oa]},$$scope:{ctx:d}}}),u=new U({props:{$$slots:{default:[za]},$$scope:{ctx:d}}}),b=new U({props:{$$slots:{default:[Ua]},$$scope:{ctx:d}}}),L=new U({props:{$$slots:{default:[Ra]},$$scope:{ctx:d}}}),E=new U({props:{$$slots:{default:[Na]},$$scope:{ctx:d}}}),V=new U({props:{$$slots:{default:[Qa]},$$scope:{ctx:d}}}),k=new U({props:{$$slots:{default:[ya]},$$scope:{ctx:d}}}),F=new U({props:{$$slots:{default:[Wa]},$$scope:{ctx:d}}}),J=new U({props:{$$slots:{default:[Za]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment),c=x(),S(n.$$.fragment),i=x(),S(m.$$.fragment),l=x(),S($.$$.fragment),_=x(),S(u.$$.fragment),f=x(),S(b.$$.fragment),p=x(),S(L.$$.fragment),j=x(),S(E.$$.fragment),R=x(),S(V.$$.fragment),I=x(),S(k.$$.fragment),A=x(),S(F.$$.fragment),X=x(),S(J.$$.fragment)},l(D){e=C(D,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-pgwrm2"&&(e.textContent=o),s=v(D),T(t.$$.fragment,D),c=v(D),T(n.$$.fragment,D),i=v(D),T(m.$$.fragment,D),l=v(D),T($.$$.fragment,D),_=v(D),T(u.$$.fragment,D),f=v(D),T(b.$$.fragment,D),p=v(D),T(L.$$.fragment,D),j=v(D),T(E.$$.fragment,D),R=v(D),T(V.$$.fragment,D),I=v(D),T(k.$$.fragment,D),A=v(D),T(F.$$.fragment,D),X=v(D),T(J.$$.fragment,D)},m(D,K){a(D,e,K),a(D,s,K),M(t,D,K),a(D,c,K),M(n,D,K),a(D,i,K),M(m,D,K),a(D,l,K),M($,D,K),a(D,_,K),M(u,D,K),a(D,f,K),M(b,D,K),a(D,p,K),M(L,D,K),a(D,j,K),M(E,D,K),a(D,R,K),M(V,D,K),a(D,I,K),M(k,D,K),a(D,A,K),M(F,D,K),a(D,X,K),M(J,D,K),le=!0},p(D,K){const $e={};K&1&&($e.$$scope={dirty:K,ctx:D}),t.$set($e);const pe={};K&1&&(pe.$$scope={dirty:K,ctx:D}),n.$set(pe);const Z={};K&1&&(Z.$$scope={dirty:K,ctx:D}),m.$set(Z);const ne={};K&1&&(ne.$$scope={dirty:K,ctx:D}),$.$set(ne);const me={};K&1&&(me.$$scope={dirty:K,ctx:D}),u.$set(me);const y={};K&1&&(y.$$scope={dirty:K,ctx:D}),b.$set(y);const B={};K&1&&(B.$$scope={dirty:K,ctx:D}),L.$set(B);const ie={};K&1&&(ie.$$scope={dirty:K,ctx:D}),E.$set(ie);const de={};K&1&&(de.$$scope={dirty:K,ctx:D}),V.$set(de);const ve={};K&1&&(ve.$$scope={dirty:K,ctx:D}),k.$set(ve);const W={};K&1&&(W.$$scope={dirty:K,ctx:D}),F.$set(W);const ae={};K&1&&(ae.$$scope={dirty:K,ctx:D}),J.$set(ae)},i(D){le||(P(t.$$.fragment,D),P(n.$$.fragment,D),P(m.$$.fragment,D),P($.$$.fragment,D),P(u.$$.fragment,D),P(b.$$.fragment,D),P(L.$$.fragment,D),P(E.$$.fragment,D),P(V.$$.fragment,D),P(k.$$.fragment,D),P(F.$$.fragment,D),P(J.$$.fragment,D),le=!0)},o(D){q(t.$$.fragment,D),q(n.$$.fragment,D),q(m.$$.fragment,D),q($.$$.fragment,D),q(u.$$.fragment,D),q(b.$$.fragment,D),q(L.$$.fragment,D),q(E.$$.fragment,D),q(V.$$.fragment,D),q(k.$$.fragment,D),q(F.$$.fragment,D),q(J.$$.fragment,D),le=!1},d(D){D&&(r(e),r(s),r(c),r(i),r(l),r(_),r(f),r(p),r(j),r(R),r(I),r(A),r(X)),H(t,D),H(n,D),H(m,D),H($,D),H(u,D),H(b,D),H(L,D),H(E,D),H(V,D),H(k,D),H(F,D),H(J,D)}}}function Xa(d){let e,o;return e=new U({props:{$$slots:{default:[Ya]},$$scope:{ctx:d}}}),{c(){S(e.$$.fragment)},l(s){T(e.$$.fragment,s)},m(s,t){M(e,s,t),o=!0},p(s,[t]){const c={};t&1&&(c.$$scope={dirty:t,ctx:s}),e.$set(c)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){q(e.$$.fragment,s),o=!1},d(s){H(e,s)}}}class eu extends Me{constructor(e){super(),Te(this,e,null,Xa,Pe,{})}}function tu(d){let e,o="Présentation",s,t,c=`Les collections en Java sont des classes qui permettent de stocker et de manipuler des
			collections d&#39;objets. <br/>Elles offrent des fonctionnalités avancées pour gérer des
			collections de manière dynamique, en permettant d&#39;ajouter, de supprimer, de rechercher et de
			parcourir les éléments d&#39;une collection. <br/>Les collections en Java sont regroupées dans le
			paquetage <code>java.util</code>.`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c},l(n){e=C(n,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-14nafu8"&&(e.textContent=o),s=v(n),t=C(n,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1yibals"&&(t.innerHTML=c)},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function su(d){let e,o="Les différentes collections",s,t,c=`<li>Listes : <code>ArrayList</code>, <code>LinkedList</code>, <code>Vector</code>,
				<code>Stack</code></li> <li>Ensembles : <code>HashSet</code>, <code>LinkedHashSet</code>, <code>TreeSet</code></li> <li>Cartes : <code>HashMap</code>, <code>LinkedHashMap</code>, <code>TreeMap</code></li> <li>Files d&#39;attente : <code>PriorityQueue</code></li>`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("ul"),t.innerHTML=c},l(n){e=C(n,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1e6rpuq"&&(e.textContent=o),s=v(n),t=C(n,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-t9j7cd"&&(t.innerHTML=c)},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function lu(d){let e=`
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

`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function nu(d){let e,o,s;return o=new De({props:{$$slots:{default:[lu]},$$scope:{ctx:d}}}),{c(){e=h("div"),S(o.$$.fragment),this.h()},l(t){e=C(t,"DIV",{class:!0});var c=fe(e);T(o.$$.fragment,c),c.forEach(r),this.h()},h(){w(e,"class","flex mt-10 justify-center")},m(t,c){a(t,e,c),M(o,e,null),s=!0},p(t,c){const n={};c&1&&(n.$$scope={dirty:c,ctx:t}),o.$set(n)},i(t){s||(P(o.$$.fragment,t),s=!0)},o(t){q(o.$$.fragment,t),s=!1},d(t){t&&r(e),H(o)}}}function iu(d){let e,o="L&#39;interface <code>Iterable</code>",s,t,c=`L&#39;interface <code>Iterable</code> est une interface générique qui définit une méthode
			<code>iterator()</code> qui permet de parcourir les éléments d&#39;une collection. <br/>Elle est
			implémentée par toutes les classes qui représentent des collections d&#39;objets.`,n;return{c(){e=h("h3"),e.innerHTML=o,s=x(),t=h("p"),t.innerHTML=c,n=x()},l(i){e=C(i,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-uyrbon"&&(e.innerHTML=o),s=v(i),t=C(i,"P",{"data-svelte-h":!0}),g(t)!=="svelte-ndrmbw"&&(t.innerHTML=c),n=v(i)},m(i,m){a(i,e,m),a(i,s,m),a(i,t,m),a(i,n,m)},p:z,d(i){i&&(r(e),r(s),r(t),r(n))}}}function ru(d){let e,o="Les collections en Java",s,t,c="L&#39;interface <code>Collection</code>",n,i,m=`L&#39;interface <code>Collection</code> est une interface générique qui définit les méthodes
			permettant de manipuler une collection d&#39;objets. <br/>Elle étend l&#39;interface
			<code>Iterable</code>
			et définit des méthodes pour ajouter, supprimer, rechercher et parcourir les éléments d&#39;une collection.`;return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("h3"),t.innerHTML=c,n=x(),i=h("p"),i.innerHTML=m},l(l){e=C(l,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-l661wu"&&(e.textContent=o),s=v(l),t=C(l,"H3",{"data-svelte-h":!0}),g(t)!=="svelte-9yvwmh"&&(t.innerHTML=c),n=v(l),i=C(l,"P",{"data-svelte-h":!0}),g(i)!=="svelte-1pakf3f"&&(i.innerHTML=m)},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),a(l,i,$)},p:z,d(l){l&&(r(e),r(s),r(t),r(n),r(i))}}}function au(d){let e,o="L&#39;interface <code>List</code>, <code>Queue</code> et <code>Set</code>",s,t,c=`<p class="flex-1">L&#39;interface <code>List</code> définit les méthodes pour manipuler une collection d&#39;objets ordonnée
				et indexée.</p> <p class="flex-1">L&#39;interface <code>Queue</code> manipule une collection d&#39;objets organisée selon le principe de
				file d&#39;attente.</p> <p class="flex-1">L&#39;interface <code>Set</code> manipule une collection d&#39;objets sans doublons.</p>`;return{c(){e=h("h3"),e.innerHTML=o,s=x(),t=h("div"),t.innerHTML=c,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-w4a6ej"&&(e.innerHTML=o),s=v(n),t=C(n,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-w1y9z7"&&(t.innerHTML=c),this.h()},h(){w(t,"class","flex flex-row gap-4")},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function uu(d){let e,o="Les classes <code>ArrayList</code>, <code>PriorityQueue</code> et <code>TreeSet</code>",s,t,c=`<p class="flex-1">La classe <code>ArrayList</code> est une implémentation de l&#39;interface <code>List</code> qui
				stocke les éléments dans un tableau dynamique.</p> <p class="flex-1">La classe <code>PriorityQueue</code> est une implémentation de l&#39;interface
				<code>Queue</code> qui stocke les éléments dans une file d&#39;attente de priorité.</p> <p class="flex-1">La classe <code>TreeSet</code> est une implémentation de l&#39;interface <code>SortedSet</code> qui
				stocke les éléments dans un arbre binaire équilibré.</p>`;return{c(){e=h("h3"),e.innerHTML=o,s=x(),t=h("div"),t.innerHTML=c,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-lkcebm"&&(e.innerHTML=o),s=v(n),t=C(n,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1cjm5fg"&&(t.innerHTML=c),this.h()},h(){w(t,"class","flex flex-row gap-4")},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function ou(d){let e=`
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
`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function $u(d){let e,o="Diagramme de classes des collections en Java",s,t,c;return t=new De({props:{$$slots:{default:[ou]},$$scope:{ctx:d}}}),{c(){e=h("p"),e.textContent=o,s=x(),S(t.$$.fragment)},l(n){e=C(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-nh95aa"&&(e.textContent=o),s=v(n),T(t.$$.fragment,n)},m(n,i){a(n,e,i),a(n,s,i),M(t,n,i),c=!0},p(n,i){const m={};i&1&&(m.$$scope={dirty:i,ctx:n}),t.$set(m)},i(n){c||(P(t.$$.fragment,n),c=!0)},o(n){q(t.$$.fragment,n),c=!1},d(n){n&&(r(e),r(s)),H(t,n)}}}function fu(d){let e=`
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
		`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function cu(d){let e,o="Application",s,t,c;return t=new oe({props:{$$slots:{default:[fu]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment)},l(n){e=C(n,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-o4ufds"&&(e.textContent=o),s=v(n),T(t.$$.fragment,n)},m(n,i){a(n,e,i),a(n,s,i),M(t,n,i),c=!0},p(n,i){const m={};i&1&&(m.$$scope={dirty:i,ctx:n}),t.$set(m)},i(n){c||(P(t.$$.fragment,n),c=!0)},o(n){q(t.$$.fragment,n),c=!1},d(n){n&&(r(e),r(s)),H(t,n)}}}function pu(d){let e,o="Les collections en Java",s,t,c,n,i,m,l,$,_,u,f,b,p,L,j,E,R,V;return t=new U({props:{$$slots:{default:[tu]},$$scope:{ctx:d}}}),n=new U({props:{$$slots:{default:[su]},$$scope:{ctx:d}}}),m=new U({props:{$$slots:{default:[nu]},$$scope:{ctx:d}}}),$=new U({props:{$$slots:{default:[iu]},$$scope:{ctx:d}}}),_=new U({props:{$$slots:{default:[ru]},$$scope:{ctx:d}}}),f=new U({props:{$$slots:{default:[au]},$$scope:{ctx:d}}}),p=new U({props:{$$slots:{default:[uu]},$$scope:{ctx:d}}}),j=new U({props:{$$slots:{default:[$u]},$$scope:{ctx:d}}}),R=new U({props:{$$slots:{default:[cu]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment),c=x(),S(n.$$.fragment),i=x(),S(m.$$.fragment),l=x(),S($.$$.fragment),S(_.$$.fragment),u=x(),S(f.$$.fragment),b=x(),S(p.$$.fragment),L=x(),S(j.$$.fragment),E=x(),S(R.$$.fragment)},l(I){e=C(I,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1r7hpea"&&(e.textContent=o),s=v(I),T(t.$$.fragment,I),c=v(I),T(n.$$.fragment,I),i=v(I),T(m.$$.fragment,I),l=v(I),T($.$$.fragment,I),T(_.$$.fragment,I),u=v(I),T(f.$$.fragment,I),b=v(I),T(p.$$.fragment,I),L=v(I),T(j.$$.fragment,I),E=v(I),T(R.$$.fragment,I)},m(I,k){a(I,e,k),a(I,s,k),M(t,I,k),a(I,c,k),M(n,I,k),a(I,i,k),M(m,I,k),a(I,l,k),M($,I,k),M(_,I,k),a(I,u,k),M(f,I,k),a(I,b,k),M(p,I,k),a(I,L,k),M(j,I,k),a(I,E,k),M(R,I,k),V=!0},p(I,k){const A={};k&1&&(A.$$scope={dirty:k,ctx:I}),t.$set(A);const F={};k&1&&(F.$$scope={dirty:k,ctx:I}),n.$set(F);const X={};k&1&&(X.$$scope={dirty:k,ctx:I}),m.$set(X);const J={};k&1&&(J.$$scope={dirty:k,ctx:I}),$.$set(J);const le={};k&1&&(le.$$scope={dirty:k,ctx:I}),_.$set(le);const D={};k&1&&(D.$$scope={dirty:k,ctx:I}),f.$set(D);const K={};k&1&&(K.$$scope={dirty:k,ctx:I}),p.$set(K);const $e={};k&1&&($e.$$scope={dirty:k,ctx:I}),j.$set($e);const pe={};k&1&&(pe.$$scope={dirty:k,ctx:I}),R.$set(pe)},i(I){V||(P(t.$$.fragment,I),P(n.$$.fragment,I),P(m.$$.fragment,I),P($.$$.fragment,I),P(_.$$.fragment,I),P(f.$$.fragment,I),P(p.$$.fragment,I),P(j.$$.fragment,I),P(R.$$.fragment,I),V=!0)},o(I){q(t.$$.fragment,I),q(n.$$.fragment,I),q(m.$$.fragment,I),q($.$$.fragment,I),q(_.$$.fragment,I),q(f.$$.fragment,I),q(p.$$.fragment,I),q(j.$$.fragment,I),q(R.$$.fragment,I),V=!1},d(I){I&&(r(e),r(s),r(c),r(i),r(l),r(u),r(b),r(L),r(E)),H(t,I),H(n,I),H(m,I),H($,I),H(_,I),H(f,I),H(p,I),H(j,I),H(R,I)}}}function mu(d){let e,o;return e=new U({props:{$$slots:{default:[pu]},$$scope:{ctx:d}}}),{c(){S(e.$$.fragment)},l(s){T(e.$$.fragment,s)},m(s,t){M(e,s,t),o=!0},p(s,[t]){const c={};t&1&&(c.$$scope={dirty:t,ctx:s}),e.$set(c)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){q(e.$$.fragment,s),o=!1},d(s){H(e,s)}}}class du extends Me{constructor(e){super(),Te(this,e,null,mu,Pe,{})}}function vu(d){let e,o="Les annotations";return{c(){e=h("h3"),e.textContent=o},l(s){e=C(s,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-uycmsw"&&(e.textContent=o)},m(s,t){a(s,e,t)},p:z,d(s){s&&r(e)}}}function xu(d){let e=`
                @interface MyAnnotation {
                    String value();
                    int number();
                    Class type();
                }`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function _u(d){let e,o="Les annotations",s,t,c=`Sur la plate-forme Java, une annotation est une interface lors de sa déclaration et une
			instance d&#39;une classe qui implémente cette interface lors de son utilisation.<br/>
			La définition d&#39;une annotation nécessite une syntaxe particulière utilisant le mot clé @interface.
			Une annotation se déclare donc de façon similaire à une interface.`,n,i,m;return i=new oe({props:{$$slots:{default:[xu]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c,n=x(),S(i.$$.fragment)},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-uycmsw"&&(e.textContent=o),s=v(l),t=C(l,"P",{"data-svelte-h":!0}),g(t)!=="svelte-kanb15"&&(t.innerHTML=c),n=v(l),T(i.$$.fragment,l)},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),M(i,l,$),m=!0},p(l,$){const _={};$&1&&(_.$$scope={dirty:$,ctx:l}),i.$set(_)},i(l){m||(P(i.$$.fragment,l),m=!0)},o(l){q(i.$$.fragment,l),m=!1},d(l){l&&(r(e),r(s),r(t),r(n)),H(i,l)}}}function Cu(d){let e,o="Les annotations",s,t,c="À quoi ça sert ?",n,i,m=`À la manière des interfaces marqueur, les annotations permettent de marquer des éléments de\r
			code, que ce soit des méthodes ou des types, mais aussi de leur associer des informations\r
			supplémentaires.`,l,$,_=`<strong>Fondamentalement, c&#39;est un peu comme si vous déclariez une méthode getValue() dans une
				interface, et que vous l&#39;implémentiez dans chacune des classes concrètes.<br/>
				Toutefois, la différence est que vous n&#39;avez pas besoin de fournir une implémentation pour les
				méthodes de l&#39;annotation. En plus, l&#39;annotation va se comporter un peu comme une liste d&#39;attributs,
				or, vous savez qu&#39;on ne peut pas mettre d&#39;attributs dans une interface.</strong>`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("h4"),t.textContent=c,n=x(),i=h("p"),i.textContent=m,l=x(),$=h("p"),$.innerHTML=_},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-uycmsw"&&(e.textContent=o),s=v(u),t=C(u,"H4",{"data-svelte-h":!0}),g(t)!=="svelte-xuio5v"&&(t.textContent=c),n=v(u),i=C(u,"P",{"data-svelte-h":!0}),g(i)!=="svelte-1vagidc"&&(i.textContent=m),l=v(u),$=C(u,"P",{"data-svelte-h":!0}),g($)!=="svelte-17t72gl"&&($.innerHTML=_)},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),a(u,i,f),a(u,l,f),a(u,$,f)},p:z,d(u){u&&(r(e),r(s),r(t),r(n),r(i),r(l),r($))}}}function hu(d){let e,o="Les annotations",s,t,c="Les annotations prédéfinies",n,i,m=`Java définit un certain nombre d&#39;annotations prédéfinies, qui sont utilisées dans des
			contextes particuliers. Par exemple, l&#39;annotation <code>@Override</code> est utilisée pour indiquer
			qu&#39;une méthode redéfinit une méthode de la classe mère. Vous l&#39;avez déjà utilisée sans le savoir.`,l,$,_=`En l'occurrence, cette dernière ne sert pas à grand-chose, si ce n'est vous mettre un avertissement au\r
			cas où vous vous trompiez dans le nom de la méthode.`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("h4"),t.textContent=c,n=x(),i=h("p"),i.innerHTML=m,l=x(),$=h("p"),$.textContent=_},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-uycmsw"&&(e.textContent=o),s=v(u),t=C(u,"H4",{"data-svelte-h":!0}),g(t)!=="svelte-10nfps6"&&(t.textContent=c),n=v(u),i=C(u,"P",{"data-svelte-h":!0}),g(i)!=="svelte-17y0hf9"&&(i.innerHTML=m),l=v(u),$=C(u,"P",{"data-svelte-h":!0}),g($)!=="svelte-3k5h4h"&&($.textContent=_)},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),a(u,i,f),a(u,l,f),a(u,$,f)},p:z,d(u){u&&(r(e),r(s),r(t),r(n),r(i),r(l),r($))}}}function gu(d){let e,o="Les annotations",s,t,c=`Les annotations sont très utilisées dans les frameworks Java, comme Spring, Hibernate, JUnit,\r
			etc. Elles permettent de définir des comportements spécifiques à des classes, des méthodes,\r
			des attributs, etc.`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c},l(n){e=C(n,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-uycmsw"&&(e.textContent=o),s=v(n),t=C(n,"P",{"data-svelte-h":!0}),g(t)!=="svelte-bo7213"&&(t.textContent=c)},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function bu(d){let e,o="Les annotations",s,t,c="Utilisation avec Spring",n,i,m="@Service et @Autowired",l,$,_=`Imaginez que vous ayez une classe qui a besoin d&#39;une autre classe pour fonctionner. 
			Vous devrez la passer dans le constructeur à la création de votre objet.<br/>
			Par contre, si cette classe a aussi besoin de 5 autres classes, cela devient vite compliqué.`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("h4"),t.textContent=c,n=x(),i=h("h5"),i.textContent=m,l=x(),$=h("p"),$.innerHTML=_},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-uycmsw"&&(e.textContent=o),s=v(u),t=C(u,"H4",{"data-svelte-h":!0}),g(t)!=="svelte-1cjkyyt"&&(t.textContent=c),n=v(u),i=C(u,"H5",{"data-svelte-h":!0}),g(i)!=="svelte-1yhbv5q"&&(i.textContent=m),l=v(u),$=C(u,"P",{"data-svelte-h":!0}),g($)!=="svelte-1frhzwg"&&($.innerHTML=_)},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),a(u,i,f),a(u,l,f),a(u,$,f)},p:z,d(u){u&&(r(e),r(s),r(t),r(n),r(i),r(l),r($))}}}function Lu(d){let e=`
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
				`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function wu(d){let e,o="Les annotations",s,t,c="Utilisation avec Spring",n,i,m="@Service et @Autowired",l,$,_,u,f=`Dans le cadre du prochain TP, votre <code>GameStateService</code> sera injecté dans chacun de
			vos services.<br/>
			Les annotations <code>@Service</code> et <code>@Autowired</code> vous permettront de le faire automatiquement.`,b;return $=new De({props:{$$slots:{default:[Lu]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("h4"),t.textContent=c,n=x(),i=h("h5"),i.textContent=m,l=x(),S($.$$.fragment),_=x(),u=h("p"),u.innerHTML=f,this.h()},l(p){e=C(p,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-uycmsw"&&(e.textContent=o),s=v(p),t=C(p,"H4",{"data-svelte-h":!0}),g(t)!=="svelte-1cjkyyt"&&(t.textContent=c),n=v(p),i=C(p,"H5",{"data-svelte-h":!0}),g(i)!=="svelte-1yhbv5q"&&(i.textContent=m),l=v(p),T($.$$.fragment,p),_=v(p),u=C(p,"P",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-mx7ffi"&&(u.innerHTML=f),this.h()},h(){w(u,"class","smaller")},m(p,L){a(p,e,L),a(p,s,L),a(p,t,L),a(p,n,L),a(p,i,L),a(p,l,L),M($,p,L),a(p,_,L),a(p,u,L),b=!0},p(p,L){const j={};L&1&&(j.$$scope={dirty:L,ctx:p}),$.$set(j)},i(p){b||(P($.$$.fragment,p),b=!0)},o(p){q($.$$.fragment,p),b=!1},d(p){p&&(r(e),r(s),r(t),r(n),r(i),r(l),r(_),r(u)),H($,p)}}}function Hu(d){let e=`
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
				`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function qu(d){let e,o="Les annotations",s,t,c="Utilisation avec Spring",n,i,m="@Service et @Autowired",l,$,_,u,f=`Nous avons un service qui utilise un repository.<br/> Ce dernier utilise une connexion à la
			base de données, un truc et un machin. <br/>Spring va se charger de créer les instances de
			ces objets et de les injecter dans les classes qui en ont besoin.`,b;return $=new oe({props:{$$slots:{default:[Hu]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("h4"),t.textContent=c,n=x(),i=h("h5"),i.textContent=m,l=x(),S($.$$.fragment),_=x(),u=h("p"),u.innerHTML=f,this.h()},l(p){e=C(p,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-uycmsw"&&(e.textContent=o),s=v(p),t=C(p,"H4",{"data-svelte-h":!0}),g(t)!=="svelte-1cjkyyt"&&(t.textContent=c),n=v(p),i=C(p,"H5",{"data-svelte-h":!0}),g(i)!=="svelte-1yhbv5q"&&(i.textContent=m),l=v(p),T($.$$.fragment,p),_=v(p),u=C(p,"P",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-ytj90u"&&(u.innerHTML=f),this.h()},h(){w(u,"class","smaller")},m(p,L){a(p,e,L),a(p,s,L),a(p,t,L),a(p,n,L),a(p,i,L),a(p,l,L),M($,p,L),a(p,_,L),a(p,u,L),b=!0},p(p,L){const j={};L&1&&(j.$$scope={dirty:L,ctx:p}),$.$set(j)},i(p){b||(P($.$$.fragment,p),b=!0)},o(p){q($.$$.fragment,p),b=!1},d(p){p&&(r(e),r(s),r(t),r(n),r(i),r(l),r(_),r(u)),H($,p)}}}function Pu(d){let e=`
			 	IMovementService service = applicationContext.getBean(ZqsdKeyMovementService.class);	
				//Imaginez que ZqsdKeyMovementService ait un constructeur qui prend 50 paramètres, Spring va se charger de les injecter à votre place
			`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Mu(d){let e,o="Les annotations",s,t,c="Utilisation avec Spring",n,i,m="@Component et @Primary",l,$,_=`<p>Vous voulez utiliser le DP Strategy ?</p> <p>L&#39;annotation @Component permet de dire qu&#39;il pourra y avoir plusieurs classes qui
				implémentent la même interface.</p> <p>L&#39;annotation @Primary permet de dire que c&#39;est cette classe qui sera utilisée par défaut.</p> <p>Vous avez un <code>ApplicationContext</code> que vous pouvez injecter dans vos services et qui
				vous permet de demander une stratégie en fonction de son nom.</p>`,u,f,b;return f=new oe({props:{$$slots:{default:[Pu]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("h4"),t.textContent=c,n=x(),i=h("h5"),i.textContent=m,l=x(),$=h("div"),$.innerHTML=_,u=x(),S(f.$$.fragment),this.h()},l(p){e=C(p,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-uycmsw"&&(e.textContent=o),s=v(p),t=C(p,"H4",{"data-svelte-h":!0}),g(t)!=="svelte-1cjkyyt"&&(t.textContent=c),n=v(p),i=C(p,"H5",{"data-svelte-h":!0}),g(i)!=="svelte-1h7on3i"&&(i.textContent=m),l=v(p),$=C(p,"DIV",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-1hmkf1x"&&($.innerHTML=_),u=v(p),T(f.$$.fragment,p),this.h()},h(){w($,"class","smaller")},m(p,L){a(p,e,L),a(p,s,L),a(p,t,L),a(p,n,L),a(p,i,L),a(p,l,L),a(p,$,L),a(p,u,L),M(f,p,L),b=!0},p(p,L){const j={};L&1&&(j.$$scope={dirty:L,ctx:p}),f.$set(j)},i(p){b||(P(f.$$.fragment,p),b=!0)},o(p){q(f.$$.fragment,p),b=!1},d(p){p&&(r(e),r(s),r(t),r(n),r(i),r(l),r($),r(u)),H(f,p)}}}function Tu(d){let e=`
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
				`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Su(d){let e,o="Les annotations",s,t,c="Utilisation avec Spring",n,i,m="@Component et @Primary",l,$,_;return $=new oe({props:{class:"smaller",$$slots:{default:[Tu]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("h4"),t.textContent=c,n=x(),i=h("h5"),i.textContent=m,l=x(),S($.$$.fragment)},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-uycmsw"&&(e.textContent=o),s=v(u),t=C(u,"H4",{"data-svelte-h":!0}),g(t)!=="svelte-1cjkyyt"&&(t.textContent=c),n=v(u),i=C(u,"H5",{"data-svelte-h":!0}),g(i)!=="svelte-1h7on3i"&&(i.textContent=m),l=v(u),T($.$$.fragment,u)},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),a(u,i,f),a(u,l,f),M($,u,f),_=!0},p(u,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:u}),$.$set(b)},i(u){_||(P($.$$.fragment,u),_=!0)},o(u){q($.$$.fragment,u),_=!1},d(u){u&&(r(e),r(s),r(t),r(n),r(i),r(l)),H($,u)}}}function ju(d){let e,o="Les annotations",s,t,c="Utilisation avec Spring",n,i,m="Le principal avantage de Spring est que juste à l'aide d'annotations, vous pouvez définir des services qui seront utilisés par d'autres services.",l,$,_=`Si vous voulez déplacer du code qui devient complexe <strong>ou</strong> que vous voulez utiliser ailleurs, c&#39;est alors très simple, il suffit de faire une nouvelle classe, l&#39;anotter avec @Service
			et injecter ce service où vous voulez.`,u,f,b="Cette manière de coder est plus ou moins un Design Pattern appelé <strong>Dependency Injection</strong>";return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("h4"),t.textContent=c,n=x(),i=h("p"),i.textContent=m,l=x(),$=h("p"),$.innerHTML=_,u=x(),f=h("p"),f.innerHTML=b,this.h()},l(p){e=C(p,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-uycmsw"&&(e.textContent=o),s=v(p),t=C(p,"H4",{"data-svelte-h":!0}),g(t)!=="svelte-1cjkyyt"&&(t.textContent=c),n=v(p),i=C(p,"P",{"data-svelte-h":!0}),g(i)!=="svelte-18zogyt"&&(i.textContent=m),l=v(p),$=C(p,"P",{"data-svelte-h":!0}),g($)!=="svelte-84n48u"&&($.innerHTML=_),u=v(p),f=C(p,"P",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-13vmlio"&&(f.innerHTML=b),this.h()},h(){w(f,"class","text-important")},m(p,L){a(p,e,L),a(p,s,L),a(p,t,L),a(p,n,L),a(p,i,L),a(p,l,L),a(p,$,L),a(p,u,L),a(p,f,L)},p:z,d(p){p&&(r(e),r(s),r(t),r(n),r(i),r(l),r($),r(u),r(f))}}}function Au(d){let e,o,s,t,c,n,i,m,l,$,_,u,f,b,p,L,j,E,R,V,I,k;return e=new U({props:{$$slots:{default:[vu]},$$scope:{ctx:d}}}),s=new U({props:{$$slots:{default:[_u]},$$scope:{ctx:d}}}),c=new U({props:{$$slots:{default:[Cu]},$$scope:{ctx:d}}}),i=new U({props:{$$slots:{default:[hu]},$$scope:{ctx:d}}}),l=new U({props:{$$slots:{default:[gu]},$$scope:{ctx:d}}}),_=new U({props:{$$slots:{default:[bu]},$$scope:{ctx:d}}}),f=new U({props:{$$slots:{default:[wu]},$$scope:{ctx:d}}}),p=new U({props:{$$slots:{default:[qu]},$$scope:{ctx:d}}}),j=new U({props:{$$slots:{default:[Mu]},$$scope:{ctx:d}}}),R=new U({props:{$$slots:{default:[Su]},$$scope:{ctx:d}}}),I=new U({props:{$$slots:{default:[ju]},$$scope:{ctx:d}}}),{c(){S(e.$$.fragment),o=x(),S(s.$$.fragment),t=x(),S(c.$$.fragment),n=x(),S(i.$$.fragment),m=x(),S(l.$$.fragment),$=x(),S(_.$$.fragment),u=x(),S(f.$$.fragment),b=x(),S(p.$$.fragment),L=x(),S(j.$$.fragment),E=x(),S(R.$$.fragment),V=x(),S(I.$$.fragment)},l(A){T(e.$$.fragment,A),o=v(A),T(s.$$.fragment,A),t=v(A),T(c.$$.fragment,A),n=v(A),T(i.$$.fragment,A),m=v(A),T(l.$$.fragment,A),$=v(A),T(_.$$.fragment,A),u=v(A),T(f.$$.fragment,A),b=v(A),T(p.$$.fragment,A),L=v(A),T(j.$$.fragment,A),E=v(A),T(R.$$.fragment,A),V=v(A),T(I.$$.fragment,A)},m(A,F){M(e,A,F),a(A,o,F),M(s,A,F),a(A,t,F),M(c,A,F),a(A,n,F),M(i,A,F),a(A,m,F),M(l,A,F),a(A,$,F),M(_,A,F),a(A,u,F),M(f,A,F),a(A,b,F),M(p,A,F),a(A,L,F),M(j,A,F),a(A,E,F),M(R,A,F),a(A,V,F),M(I,A,F),k=!0},p(A,F){const X={};F&1&&(X.$$scope={dirty:F,ctx:A}),e.$set(X);const J={};F&1&&(J.$$scope={dirty:F,ctx:A}),s.$set(J);const le={};F&1&&(le.$$scope={dirty:F,ctx:A}),c.$set(le);const D={};F&1&&(D.$$scope={dirty:F,ctx:A}),i.$set(D);const K={};F&1&&(K.$$scope={dirty:F,ctx:A}),l.$set(K);const $e={};F&1&&($e.$$scope={dirty:F,ctx:A}),_.$set($e);const pe={};F&1&&(pe.$$scope={dirty:F,ctx:A}),f.$set(pe);const Z={};F&1&&(Z.$$scope={dirty:F,ctx:A}),p.$set(Z);const ne={};F&1&&(ne.$$scope={dirty:F,ctx:A}),j.$set(ne);const me={};F&1&&(me.$$scope={dirty:F,ctx:A}),R.$set(me);const y={};F&1&&(y.$$scope={dirty:F,ctx:A}),I.$set(y)},i(A){k||(P(e.$$.fragment,A),P(s.$$.fragment,A),P(c.$$.fragment,A),P(i.$$.fragment,A),P(l.$$.fragment,A),P(_.$$.fragment,A),P(f.$$.fragment,A),P(p.$$.fragment,A),P(j.$$.fragment,A),P(R.$$.fragment,A),P(I.$$.fragment,A),k=!0)},o(A){q(e.$$.fragment,A),q(s.$$.fragment,A),q(c.$$.fragment,A),q(i.$$.fragment,A),q(l.$$.fragment,A),q(_.$$.fragment,A),q(f.$$.fragment,A),q(p.$$.fragment,A),q(j.$$.fragment,A),q(R.$$.fragment,A),q(I.$$.fragment,A),k=!1},d(A){A&&(r(o),r(t),r(n),r(m),r($),r(u),r(b),r(L),r(E),r(V)),H(e,A),H(s,A),H(c,A),H(i,A),H(l,A),H(_,A),H(f,A),H(p,A),H(j,A),H(R,A),H(I,A)}}}function Eu(d){let e,o;return e=new U({props:{$$slots:{default:[Au]},$$scope:{ctx:d}}}),{c(){S(e.$$.fragment)},l(s){T(e.$$.fragment,s)},m(s,t){M(e,s,t),o=!0},p(s,[t]){const c={};t&1&&(c.$$scope={dirty:t,ctx:s}),e.$set(c)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){q(e.$$.fragment,s),o=!1},d(s){H(e,s)}}}class Du extends Me{constructor(e){super(),Te(this,e,null,Eu,Pe,{})}}function Iu(d){let e,o="Patrons de conception",s,t,c='Cours très bien expliqué : <a href="https://refactoring.guru/fr" target="_blank">Refactoring Guru</a>';return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c,this.h()},l(n){e=C(n,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-l6cb4s"&&(e.textContent=o),s=v(n),t=C(n,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-19668a8"&&(t.innerHTML=c),this.h()},h(){w(t,"class","fragment")},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function ku(d){let e,o="Qu'est-ce qu'un patron de conception ?",s,t,c=`Un patron de conception est une solution générale à un problème récurrent en conception\r
			logicielle.`,n,i,m="Les bons développeurs connaissent ces patrons et savent quand les utiliser.",l,$,_="En connaissant bien ces patrons, vous pouvez proposer des fonctionnalités supplémentaires sans surcoût.",u,f,b="Un DP bien identifié permet de communiquer plus facilement avec les autres développeurs !";return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),i=h("p"),i.textContent=m,l=x(),$=h("p"),$.textContent=_,u=x(),f=h("p"),f.textContent=b,this.h()},l(p){e=C(p,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-ac53e2"&&(e.textContent=o),s=v(p),t=C(p,"P",{"data-svelte-h":!0}),g(t)!=="svelte-klr3xc"&&(t.textContent=c),n=v(p),i=C(p,"P",{"data-svelte-h":!0}),g(i)!=="svelte-rif0m1"&&(i.textContent=m),l=v(p),$=C(p,"P",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-p9bw1x"&&($.textContent=_),u=v(p),f=C(p,"P",{"data-svelte-h":!0}),g(f)!=="svelte-12jq88p"&&(f.textContent=b),this.h()},h(){w($,"class","text-important")},m(p,L){a(p,e,L),a(p,s,L),a(p,t,L),a(p,n,L),a(p,i,L),a(p,l,L),a(p,$,L),a(p,u,L),a(p,f,L)},p:z,d(p){p&&(r(e),r(s),r(t),r(n),r(i),r(l),r($),r(u),r(f))}}}function Ou(d){let e,o="Les patrons de conception sont-ils indispensables ?",s,t,c="Non, mais ils sont très utiles pour résoudre des problèmes courants de manière efficace.",n,i,m="Il existe de nombreux patrons de conception, mais il est inutile de tous les connaître par cœur !",l,$,_=`C'est un peu comme si nous avions observé des bouts de code qui marchent bien, et que nous les\r
			avions classés et regroupés pour les proposer à tous.`,u,f,b="Vous utilisez probablement déjà des patrons de conception sans le savoir !";return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),i=h("p"),i.textContent=m,l=x(),$=h("p"),$.textContent=_,u=x(),f=h("p"),f.textContent=b,this.h()},l(p){e=C(p,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-qkdteq"&&(e.textContent=o),s=v(p),t=C(p,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1lzbry7"&&(t.textContent=c),n=v(p),i=C(p,"P",{"data-svelte-h":!0}),g(i)!=="svelte-1yjd8fx"&&(i.textContent=m),l=v(p),$=C(p,"P",{"data-svelte-h":!0}),g($)!=="svelte-1gcugiu"&&($.textContent=_),u=v(p),f=C(p,"P",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-1k895an"&&(f.textContent=b),this.h()},h(){w(f,"class","text-important")},m(p,L){a(p,e,L),a(p,s,L),a(p,t,L),a(p,n,L),a(p,i,L),a(p,l,L),a(p,$,L),a(p,u,L),a(p,f,L)},p:z,d(p){p&&(r(e),r(s),r(t),r(n),r(i),r(l),r($),r(u),r(f))}}}function Vu(d){let e,o="Analogie",s,t,c=`Une bonne analogie pour les patrons de conception en POO dans la vie réelle serait celle d'une\r
			cuisine professionnelle dans un restaurant. Voici comment cela fonctionne :`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c},l(n){e=C(n,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-gaiqh2"&&(e.textContent=o),s=v(n),t=C(n,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1e74hoy"&&(t.textContent=c)},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function zu(d){let e,o="Qui prépare les commandes ?",s,t,c="Singleton",n,i,m=`Le chef de cuisine est responsable de la préparation des commandes. Il doit y en avoir
			strictement <b>un seul</b>.<br/>`,l,$,_=`Si vous avez bien suivi, vous connaissez déjà une manière pour qu'un attribut soit partagé par\r
			toutes les instances d'une classe.`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("h4"),t.textContent=c,n=x(),i=h("p"),i.innerHTML=m,l=x(),$=h("p"),$.textContent=_,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1ymnqdo"&&(e.textContent=o),s=v(u),t=C(u,"H4",{"data-svelte-h":!0}),g(t)!=="svelte-ek6eep"&&(t.textContent=c),n=v(u),i=C(u,"P",{"data-svelte-h":!0}),g(i)!=="svelte-igcgyy"&&(i.innerHTML=m),l=v(u),$=C(u,"P",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-sen092"&&($.textContent=_),this.h()},h(){w($,"class","text-important")},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),a(u,i,f),a(u,l,f),a(u,$,f)},p:z,d(u){u&&(r(e),r(s),r(t),r(n),r(i),r(l),r($))}}}function Uu(d){let e,o="Qui prépare les commandes ?",s,t,c="Singleton",n,i,m=`Un singleton est une classe avec une méthode statique <code>getInstance</code> qui retourne la
			même instance de la classe à chaque appel.`,l,$,_=`Pour cela, le constructeur de la classe est privé, et la seule manière de créer une instance de
			la classe est d&#39;appeler la méthode <code>getInstance</code> qui fait un <code>new</code>.`,u,f,b='<img src="https://refactoring.guru/images/patterns/diagrams/singleton/structure-fr.png" alt="Singleton"/>';return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("h4"),t.textContent=c,n=x(),i=h("p"),i.innerHTML=m,l=x(),$=h("p"),$.innerHTML=_,u=x(),f=h("div"),f.innerHTML=b,this.h()},l(p){e=C(p,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1ymnqdo"&&(e.textContent=o),s=v(p),t=C(p,"H4",{"data-svelte-h":!0}),g(t)!=="svelte-ek6eep"&&(t.textContent=c),n=v(p),i=C(p,"P",{"data-svelte-h":!0}),g(i)!=="svelte-yw0ri4"&&(i.innerHTML=m),l=v(p),$=C(p,"P",{"data-svelte-h":!0}),g($)!=="svelte-lpvbic"&&($.innerHTML=_),u=v(p),f=C(p,"DIV",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-cupfnk"&&(f.innerHTML=b),this.h()},h(){w(f,"class","flex justify-center")},m(p,L){a(p,e,L),a(p,s,L),a(p,t,L),a(p,n,L),a(p,i,L),a(p,l,L),a(p,$,L),a(p,u,L),a(p,f,L)},p:z,d(p){p&&(r(e),r(s),r(t),r(n),r(i),r(l),r($),r(u),r(f))}}}function Bu(d){let e,o="Comment les serveurs passent commande ?",s,t,c="Factory",n,i,m=`Les serveurs prennent les commandes des clients et les transmettent au chef de cuisine. Ils ne\r
			savent pas comment les plats sont préparés, ils ne font que transmettre les commandes.`,l,$,_="Le patron de conception Factory permet de déléguer la création d'objets à une classe Factory.";return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("h4"),t.textContent=c,n=x(),i=h("p"),i.textContent=m,l=x(),$=h("p"),$.textContent=_,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-syq1eh"&&(e.textContent=o),s=v(u),t=C(u,"H4",{"data-svelte-h":!0}),g(t)!=="svelte-sjvco4"&&(t.textContent=c),n=v(u),i=C(u,"P",{"data-svelte-h":!0}),g(i)!=="svelte-k5nwdz"&&(i.textContent=m),l=v(u),$=C(u,"P",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-xcpn72"&&($.textContent=_),this.h()},h(){w($,"class","text-important")},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),a(u,i,f),a(u,l,f),a(u,$,f)},p:z,d(u){u&&(r(e),r(s),r(t),r(n),r(i),r(l),r($))}}}function Ju(d){let e,o="Comment les serveurs passent commande ?",s,t,c="Factory",n,i,m=`Le principe : Je dis au chef de préparer une <code>&quot;Pizza&quot;</code> ou un <code>&quot;Steak&quot;</code>,
			le serveur n&#39;instancie pas une classe &quot;Pizza&quot; car il devrait sinon savoir si on fait`,l,$,_="<li><code>new Pizza(Enum.BaseCreme,[&quot;saumon&quot;,&quot;aneth&quot;],180°, &quot;240 s&quot;)</code></li> <li><code>new Steak(tartare:false)</code></li>",u,f,b=`On préfère lui passer une information standardisée et une <b>Factory</b> utilisée par le chef de
			cuisine se chargera de créer l&#39;objet.`,p,L,j='<img src="https://refactoring.guru/images/patterns/diagrams/factory-method/solution2-fr.png" alt="Factory"/>';return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("h4"),t.textContent=c,n=x(),i=h("p"),i.innerHTML=m,l=x(),$=h("ul"),$.innerHTML=_,u=x(),f=h("p"),f.innerHTML=b,p=x(),L=h("div"),L.innerHTML=j,this.h()},l(E){e=C(E,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-syq1eh"&&(e.textContent=o),s=v(E),t=C(E,"H4",{"data-svelte-h":!0}),g(t)!=="svelte-sjvco4"&&(t.textContent=c),n=v(E),i=C(E,"P",{"data-svelte-h":!0}),g(i)!=="svelte-18f9g3y"&&(i.innerHTML=m),l=v(E),$=C(E,"UL",{"data-svelte-h":!0}),g($)!=="svelte-nyqhyx"&&($.innerHTML=_),u=v(E),f=C(E,"P",{"data-svelte-h":!0}),g(f)!=="svelte-1ea5q7v"&&(f.innerHTML=b),p=v(E),L=C(E,"DIV",{class:!0,"data-svelte-h":!0}),g(L)!=="svelte-110b8ns"&&(L.innerHTML=j),this.h()},h(){w(L,"class","flex justify-center")},m(E,R){a(E,e,R),a(E,s,R),a(E,t,R),a(E,n,R),a(E,i,R),a(E,l,R),a(E,$,R),a(E,u,R),a(E,f,R),a(E,p,R),a(E,L,R)},p:z,d(E){E&&(r(e),r(s),r(t),r(n),r(i),r(l),r($),r(u),r(f),r(p),r(L))}}}function Ru(d){let e=`
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
				`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Nu(d){let e,o="Comment les serveurs passent commande ?",s,t,c="Factory",n,i,m,l,$,_,u,f,b=`Dans notre cas, le chef est un singleton et la factory est une méthode de la classe Chef. Les\r
			DP se combinent !`,p;return _=new oe({props:{$$slots:{default:[Ru]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("h4"),t.textContent=c,n=x(),i=h("div"),m=h("img"),$=x(),S(_.$$.fragment),u=x(),f=h("p"),f.textContent=b,this.h()},l(L){e=C(L,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-syq1eh"&&(e.textContent=o),s=v(L),t=C(L,"H4",{"data-svelte-h":!0}),g(t)!=="svelte-sjvco4"&&(t.textContent=c),n=v(L),i=C(L,"DIV",{class:!0});var j=fe(i);m=C(j,"IMG",{class:!0,src:!0,alt:!0}),$=v(j),T(_.$$.fragment,j),j.forEach(r),u=v(L),f=C(L,"P",{"data-svelte-h":!0}),g(f)!=="svelte-cyiegd"&&(f.textContent=b),this.h()},h(){w(m,"class","w-2/5"),We(m.src,l="https://refactoring.guru/images/patterns/diagrams/factory-method/structure.png")||w(m,"src",l),w(m,"alt","Factory"),w(i,"class","flex items-center")},m(L,j){a(L,e,j),a(L,s,j),a(L,t,j),a(L,n,j),a(L,i,j),Y(i,m),Y(i,$),M(_,i,null),a(L,u,j),a(L,f,j),p=!0},p(L,j){const E={};j&1&&(E.$$scope={dirty:j,ctx:L}),_.$set(E)},i(L){p||(P(_.$$.fragment,L),p=!0)},o(L){q(_.$$.fragment,L),p=!1},d(L){L&&(r(e),r(s),r(t),r(n),r(i),r(u),r(f)),H(_)}}}function Fu(d){let e,o="Comment le chef prévient qu'il a fini ?",s,t,c="Observer",n,i,m=`Lorsque le chef a fini de préparer un plat, il le dépose sur le comptoir. Les serveurs sont\r
			notifiés et peuvent alors servir le plat aux clients.`,l,$,_=`Le patron de conception Observer permet de définir une relation de type "un à plusieurs" entre\r
			objets, de sorte que lorsqu'un objet change d'état, tous les objets qui en dépendent sont\r
			notifiés et mis à jour automatiquement.`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("h4"),t.textContent=c,n=x(),i=h("p"),i.textContent=m,l=x(),$=h("p"),$.textContent=_,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-l8jio1"&&(e.textContent=o),s=v(u),t=C(u,"H4",{"data-svelte-h":!0}),g(t)!=="svelte-ph591o"&&(t.textContent=c),n=v(u),i=C(u,"P",{"data-svelte-h":!0}),g(i)!=="svelte-4x45c1"&&(i.textContent=m),l=v(u),$=C(u,"P",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-1rn4b0j"&&($.textContent=_),this.h()},h(){w($,"class","text-important")},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),a(u,i,f),a(u,l,f),a(u,$,f)},p:z,d(u){u&&(r(e),r(s),r(t),r(n),r(i),r(l),r($))}}}function Gu(d){let e,o="Comment le chef prévient qu'il a fini ?",s,t,c="Observer",n,i,m=`Le chef ne va pas maintenir une liste de serveurs, puis lorsqu'il a fini de préparer un\r
			plat, appeler chacun d'entre eux, savoir s'ils sont disponibles. Imaginez qu'il ait en plus\r
			des serveurs des livreurs Deliveroo, c'est ingérable.`,l,$,_=`On va plutôt adopter une approche "Je préviens que j'ai fini, ceux que ça intéresse auront\r
			qu'à venir le chercher".`,u,f,b='<img src="https://refactoring.guru/images/patterns/content/observer/observer-comic-1-fr.png" alt="Observer"/>';return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("h4"),t.textContent=c,n=x(),i=h("p"),i.textContent=m,l=x(),$=h("p"),$.textContent=_,u=x(),f=h("div"),f.innerHTML=b,this.h()},l(p){e=C(p,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-l8jio1"&&(e.textContent=o),s=v(p),t=C(p,"H4",{"data-svelte-h":!0}),g(t)!=="svelte-ph591o"&&(t.textContent=c),n=v(p),i=C(p,"P",{"data-svelte-h":!0}),g(i)!=="svelte-qt5c9m"&&(i.textContent=m),l=v(p),$=C(p,"P",{"data-svelte-h":!0}),g($)!=="svelte-w799ge"&&($.textContent=_),u=v(p),f=C(p,"DIV",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-1u60quo"&&(f.innerHTML=b),this.h()},h(){w(f,"class","flex justify-center")},m(p,L){a(p,e,L),a(p,s,L),a(p,t,L),a(p,n,L),a(p,i,L),a(p,l,L),a(p,$,L),a(p,u,L),a(p,f,L)},p:z,d(p){p&&(r(e),r(s),r(t),r(n),r(i),r(l),r($),r(u),r(f))}}}function Qu(d){let e=`
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
				`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function yu(d){let e,o="Comment le chef prévient qu'il a fini ?",s,t,c="Observer",n,i,m,l,$,_,u,f,b=`Une fois encore, on a fait le choix que notre Publisher soit un singleton, mais on peut avoir\r
			plusieurs Publisher, par exemple un Publisher restaurant et un Publisher Deliveroo.`,p;return _=new oe({props:{$$slots:{default:[Qu]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("h4"),t.textContent=c,n=x(),i=h("div"),m=h("img"),$=x(),S(_.$$.fragment),u=x(),f=h("p"),f.textContent=b,this.h()},l(L){e=C(L,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-l8jio1"&&(e.textContent=o),s=v(L),t=C(L,"H4",{"data-svelte-h":!0}),g(t)!=="svelte-ph591o"&&(t.textContent=c),n=v(L),i=C(L,"DIV",{class:!0});var j=fe(i);m=C(j,"IMG",{class:!0,src:!0,alt:!0}),$=v(j),T(_.$$.fragment,j),j.forEach(r),u=v(L),f=C(L,"P",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-sfk3qa"&&(f.textContent=b),this.h()},h(){w(m,"class","w-2/5"),We(m.src,l="https://refactoring.guru/images/patterns/diagrams/observer/structure.png")||w(m,"src",l),w(m,"alt","Observer"),w(i,"class","flex items-center"),w(f,"class","smaller")},m(L,j){a(L,e,j),a(L,s,j),a(L,t,j),a(L,n,j),a(L,i,j),Y(i,m),Y(i,$),M(_,i,null),a(L,u,j),a(L,f,j),p=!0},p(L,j){const E={};j&1&&(E.$$scope={dirty:j,ctx:L}),_.$set(E)},i(L){p||(P(_.$$.fragment,L),p=!0)},o(L){q(_.$$.fragment,L),p=!1},d(L){L&&(r(e),r(s),r(t),r(n),r(i),r(u),r(f)),H(_)}}}function Ku(d){let e,o="Ce client qui fête son anniversaire",s,t,c="Decorator",n,i,m=`Un client fête son anniversaire et demande un gâteau. Le serveur lui apporte un gâteau simple,\r
			mais le client demande à ce qu'on y ajoute des bougies.`,l,$,_=`Le patron de conception Decorator permet d'attacher de nouvelles fonctionnalités à des objets\r
			existants de manière dynamique et transparente, sans affecter leur comportement.`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("h4"),t.textContent=c,n=x(),i=h("p"),i.textContent=m,l=x(),$=h("p"),$.textContent=_,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1bbzra2"&&(e.textContent=o),s=v(u),t=C(u,"H4",{"data-svelte-h":!0}),g(t)!=="svelte-1m84yt9"&&(t.textContent=c),n=v(u),i=C(u,"P",{"data-svelte-h":!0}),g(i)!=="svelte-su940i"&&(i.textContent=m),l=v(u),$=C(u,"P",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-1kbudz2"&&($.textContent=_),this.h()},h(){w($,"class","text-important")},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),a(u,i,f),a(u,l,f),a(u,$,f)},p:z,d(u){u&&(r(e),r(s),r(t),r(n),r(i),r(l),r($))}}}function Wu(d){let e,o="Ce client qui fête son anniversaire",s,t,c="Decorator",n,i,m=`Le serveur ne va pas demander au chef de préparer un gâteau avec bougies, puis un gâteau sans\r
			bougies, puis un gâteau avec bougies et chantilly, puis un gâteau avec bougies, chantilly et\r
			glaçage au chocolat.`,l,$,_=`Il va plutôt demander un gâteau simple, puis ajouter des décorations en fonction des demandes\r
			du client.`,u,f,b='<img src="https://refactoring.guru/images/patterns/content/decorator/decorator-comic-1.png" alt="Decorator"/>';return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("h4"),t.textContent=c,n=x(),i=h("p"),i.textContent=m,l=x(),$=h("p"),$.textContent=_,u=x(),f=h("div"),f.innerHTML=b,this.h()},l(p){e=C(p,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1bbzra2"&&(e.textContent=o),s=v(p),t=C(p,"H4",{"data-svelte-h":!0}),g(t)!=="svelte-1m84yt9"&&(t.textContent=c),n=v(p),i=C(p,"P",{"data-svelte-h":!0}),g(i)!=="svelte-rakciy"&&(i.textContent=m),l=v(p),$=C(p,"P",{"data-svelte-h":!0}),g($)!=="svelte-1ebgapo"&&($.textContent=_),u=v(p),f=C(p,"DIV",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-xlqfeu"&&(f.innerHTML=b),this.h()},h(){w(f,"class","flex justify-center")},m(p,L){a(p,e,L),a(p,s,L),a(p,t,L),a(p,n,L),a(p,i,L),a(p,l,L),a(p,$,L),a(p,u,L),a(p,f,L)},p:z,d(p){p&&(r(e),r(s),r(t),r(n),r(i),r(l),r($),r(u),r(f))}}}function Zu(d){let e=`
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
				`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Yu(d){let e,o="Ce client qui fête son anniversaire",s,t,c="Decorator",n,i,m,l,$,_,u;return _=new oe({props:{$$slots:{default:[Zu]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("h4"),t.textContent=c,n=x(),i=h("div"),m=h("img"),$=x(),S(_.$$.fragment),this.h()},l(f){e=C(f,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1bbzra2"&&(e.textContent=o),s=v(f),t=C(f,"H4",{"data-svelte-h":!0}),g(t)!=="svelte-1m84yt9"&&(t.textContent=c),n=v(f),i=C(f,"DIV",{class:!0});var b=fe(i);m=C(b,"IMG",{class:!0,src:!0,alt:!0}),$=v(b),T(_.$$.fragment,b),b.forEach(r),this.h()},h(){w(m,"class","w-2/5"),We(m.src,l="https://refactoring.guru/images/patterns/diagrams/decorator/structure.png")||w(m,"src",l),w(m,"alt","Decorator"),w(i,"class","flex items-center")},m(f,b){a(f,e,b),a(f,s,b),a(f,t,b),a(f,n,b),a(f,i,b),Y(i,m),Y(i,$),M(_,i,null),u=!0},p(f,b){const p={};b&1&&(p.$$scope={dirty:b,ctx:f}),_.$set(p)},i(f){u||(P(_.$$.fragment,f),u=!0)},o(f){q(_.$$.fragment,f),u=!1},d(f){f&&(r(e),r(s),r(t),r(n),r(i)),H(_)}}}function Xu(d){let e,o="Chacun paie sa part ou on divise ?",s,t,c="Strategy",n,i,m=`Un groupe de clients a fini de manger et doit payer l&#39;addition. Ils peuvent choisir de diviser
			l&#39;addition en parts égales ou de payer chacun sa part.<br/>
			En plus de ça, ils peuvent choisir de payer en liquide, par carte bancaire ou par ticket restaurant.`,l,$,_=`Le patron de conception Strategy permet de définir une famille d'algorithmes, de les\r
			encapsuler et de les rendre interchangeables.`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("h4"),t.textContent=c,n=x(),i=h("p"),i.innerHTML=m,l=x(),$=h("p"),$.textContent=_,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-18nb8g"&&(e.textContent=o),s=v(u),t=C(u,"H4",{"data-svelte-h":!0}),g(t)!=="svelte-26el53"&&(t.textContent=c),n=v(u),i=C(u,"P",{"data-svelte-h":!0}),g(i)!=="svelte-12g4z2l"&&(i.innerHTML=m),l=v(u),$=C(u,"P",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-1x3p561"&&($.textContent=_),this.h()},h(){w($,"class","text-important")},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),a(u,i,f),a(u,l,f),a(u,$,f)},p:z,d(u){u&&(r(e),r(s),r(t),r(n),r(i),r(l),r($))}}}function eo(d){let e,o="Chacun paie sa part ou on divise ?",s,t,c="Strategy",n,i,m=`Le serveur se charge de faire régler le client, mais comme il y a plein de cas de figure
			différents, il ne va pas faire un <code>if</code> pour chaque cas de figure.`,l,$,_="<li>Je veux payer par ticket resto <i>(valable que le midi)</i></li> <li>J&#39;ai la Mojjo <i>(il faut le prouver)</i></li> <li>En liquide mais gardez la monnaie <i>(l&#39;argent ne va pas dans la caisse directement)</i></li> <li>Sans contact <i>(le TPE fait un appel serveur pour vérifier le solde)</i></li>",u,f,b=`Extrayons chaque type de paiement dans une classe à part, et le serveur n&#39;aura qu&#39;à appeler la
			méthode <code>pay()</code> de l&#39;objet.`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("h4"),t.textContent=c,n=x(),i=h("p"),i.innerHTML=m,l=x(),$=h("ul"),$.innerHTML=_,u=x(),f=h("p"),f.innerHTML=b},l(p){e=C(p,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-18nb8g"&&(e.textContent=o),s=v(p),t=C(p,"H4",{"data-svelte-h":!0}),g(t)!=="svelte-26el53"&&(t.textContent=c),n=v(p),i=C(p,"P",{"data-svelte-h":!0}),g(i)!=="svelte-8soov1"&&(i.innerHTML=m),l=v(p),$=C(p,"UL",{"data-svelte-h":!0}),g($)!=="svelte-vzd0n5"&&($.innerHTML=_),u=v(p),f=C(p,"P",{"data-svelte-h":!0}),g(f)!=="svelte-soo1gl"&&(f.innerHTML=b)},m(p,L){a(p,e,L),a(p,s,L),a(p,t,L),a(p,n,L),a(p,i,L),a(p,l,L),a(p,$,L),a(p,u,L),a(p,f,L)},p:z,d(p){p&&(r(e),r(s),r(t),r(n),r(i),r(l),r($),r(u),r(f))}}}function to(d){let e,o="Chacun paie sa part ou on divise ?",s,t,c="Strategy",n,i,m=`Chaque stratégie de paiement est une classe qui implémente une interface <code>PaymentStrategy</code>
			qui contient une méthode <code>pay()</code>.`,l,$,_=`Le serveur n&#39;a pas à savoir comment chaque stratégie fonctionne, il lui suffit d&#39;appeler la
			méthode <code>pay()</code> de l&#39;objet.`,u,f,b='<img src="https://refactoring.guru/images/patterns/content/strategy/strategy-comic-1-fr.png" alt="Strategy"/>';return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("h4"),t.textContent=c,n=x(),i=h("p"),i.innerHTML=m,l=x(),$=h("p"),$.innerHTML=_,u=x(),f=h("div"),f.innerHTML=b,this.h()},l(p){e=C(p,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-18nb8g"&&(e.textContent=o),s=v(p),t=C(p,"H4",{"data-svelte-h":!0}),g(t)!=="svelte-26el53"&&(t.textContent=c),n=v(p),i=C(p,"P",{"data-svelte-h":!0}),g(i)!=="svelte-lvh3xh"&&(i.innerHTML=m),l=v(p),$=C(p,"P",{"data-svelte-h":!0}),g($)!=="svelte-3626e9"&&($.innerHTML=_),u=v(p),f=C(p,"DIV",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-1yf0ntb"&&(f.innerHTML=b),this.h()},h(){w(f,"class","flex justify-center")},m(p,L){a(p,e,L),a(p,s,L),a(p,t,L),a(p,n,L),a(p,i,L),a(p,l,L),a(p,$,L),a(p,u,L),a(p,f,L)},p:z,d(p){p&&(r(e),r(s),r(t),r(n),r(i),r(l),r($),r(u),r(f))}}}function so(d){let e=`
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
				`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function lo(d){let e,o="Chacun paie sa part ou on divise ?",s,t,c="Strategy",n,i,m,l,$,_,u,f,b=`On pourrait toujours Décorer les stratégies de paiement, pour ceux qui veulent le ticket de
			carte ou une facture TVA…<br/>Si ça devient trop compliqué, l&#39;extraire dans une Factory.`,p;return _=new oe({props:{$$slots:{default:[so]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),t=h("h4"),t.textContent=c,n=x(),i=h("div"),m=h("img"),$=x(),S(_.$$.fragment),u=x(),f=h("p"),f.innerHTML=b,this.h()},l(L){e=C(L,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-18nb8g"&&(e.textContent=o),s=v(L),t=C(L,"H4",{"data-svelte-h":!0}),g(t)!=="svelte-26el53"&&(t.textContent=c),n=v(L),i=C(L,"DIV",{class:!0});var j=fe(i);m=C(j,"IMG",{class:!0,src:!0,alt:!0}),$=v(j),T(_.$$.fragment,j),j.forEach(r),u=v(L),f=C(L,"P",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-100go0c"&&(f.innerHTML=b),this.h()},h(){w(m,"class","w-2/5"),We(m.src,l="https://refactoring.guru/images/patterns/diagrams/strategy/structure.png")||w(m,"src",l),w(m,"alt","Strategy"),w(i,"class","flex justify-center items-center"),w(f,"class","smaller")},m(L,j){a(L,e,j),a(L,s,j),a(L,t,j),a(L,n,j),a(L,i,j),Y(i,m),Y(i,$),M(_,i,null),a(L,u,j),a(L,f,j),p=!0},p(L,j){const E={};j&1&&(E.$$scope={dirty:j,ctx:L}),_.$set(E)},i(L){p||(P(_.$$.fragment,L),p=!0)},o(L){q(_.$$.fragment,L),p=!1},d(L){L&&(r(e),r(s),r(t),r(n),r(i),r(u),r(f)),H(_)}}}function no(d){let e,o="Conclusion",s,t,c="Les patrons de conception sont :",n,i,m="<li>Dispensables</li> <li>Très utiles</li> <li>Combinables</li> <li>Universels</li>";return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),i=h("ul"),i.innerHTML=m},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-d7kqkf"&&(e.textContent=o),s=v(l),t=C(l,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1lmqdm0"&&(t.textContent=c),n=v(l),i=C(l,"UL",{"data-svelte-h":!0}),g(i)!=="svelte-1vvkxff"&&(i.innerHTML=m)},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),a(l,i,$)},p:z,d(l){l&&(r(e),r(s),r(t),r(n),r(i))}}}function io(d){let e,o="Attendus",s,t,c="À l'aide du cours et du site présenté en début de chapitre, maîtrisez-en le plus possible.",n,i,m=`Sans les DP, vous savez coder en POO, mais c'est le niveau débutant. Les DP font de vous un "bien meilleur" développeur.`;return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),i=h("p"),i.textContent=m},l(l){e=C(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-7wwxn0"&&(e.textContent=o),s=v(l),t=C(l,"P",{"data-svelte-h":!0}),g(t)!=="svelte-thji73"&&(t.textContent=c),n=v(l),i=C(l,"P",{"data-svelte-h":!0}),g(i)!=="svelte-145t8ff"&&(i.textContent=m)},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),a(l,i,$)},p:z,d(l){l&&(r(e),r(s),r(t),r(n),r(i))}}}function ro(d){let e,o="Attendus",s,t,c="Si vous donnez le TP entier à faire à une IA, il est probable qu'elle vous donne une solution avec peu de DP mais qui répond immédiatement à la demande.",n,i,m="Quand on gère le cas de la carte Mojjo ou de l'anniversaire avec la bougie, si on n'a pas eu le réflexe dès le début d'utiliser les DP, on ne fait que casser son code et recommencer.",l,$,_="Pour le projet, faites le plus de DP possible ! S'il n'y en a pas, je vous demanderai de rajouter une nouvelle fonctionnalité qui cassera tout votre code jusqu'à ce que vous soyez assez prévoyant.";return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),i=h("p"),i.textContent=m,l=x(),$=h("p"),$.textContent=_,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-7wwxn0"&&(e.textContent=o),s=v(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-nke0b0"&&(t.textContent=c),n=v(u),i=C(u,"P",{"data-svelte-h":!0}),g(i)!=="svelte-29j97r"&&(i.textContent=m),l=v(u),$=C(u,"P",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-4djlv4"&&($.textContent=_),this.h()},h(){w($,"class","text-important")},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),a(u,i,f),a(u,l,f),a(u,$,f)},p:z,d(u){u&&(r(e),r(s),r(t),r(n),r(i),r(l),r($))}}}function ao(d){let e,o,s,t,c,n,i,m,l,$,_,u,f,b,p,L,j,E,R,V,I,k,A,F,X,J,le,D,K,$e,pe,Z,ne,me,y,B,ie,de,ve,W,ae,Ce,_e,he;return e=new U({props:{$$slots:{default:[Iu]},$$scope:{ctx:d}}}),s=new U({props:{$$slots:{default:[ku]},$$scope:{ctx:d}}}),c=new U({props:{$$slots:{default:[Ou]},$$scope:{ctx:d}}}),i=new U({props:{$$slots:{default:[Vu]},$$scope:{ctx:d}}}),l=new U({props:{$$slots:{default:[zu]},$$scope:{ctx:d}}}),_=new U({props:{$$slots:{default:[Uu]},$$scope:{ctx:d}}}),f=new U({props:{$$slots:{default:[Bu]},$$scope:{ctx:d}}}),p=new U({props:{className:"smaller",$$slots:{default:[Ju]},$$scope:{ctx:d}}}),j=new U({props:{$$slots:{default:[Nu]},$$scope:{ctx:d}}}),R=new U({props:{$$slots:{default:[Fu]},$$scope:{ctx:d}}}),I=new U({props:{$$slots:{default:[Gu]},$$scope:{ctx:d}}}),A=new U({props:{$$slots:{default:[yu]},$$scope:{ctx:d}}}),X=new U({props:{$$slots:{default:[Ku]},$$scope:{ctx:d}}}),le=new U({props:{$$slots:{default:[Wu]},$$scope:{ctx:d}}}),K=new U({props:{$$slots:{default:[Yu]},$$scope:{ctx:d}}}),pe=new U({props:{$$slots:{default:[Xu]},$$scope:{ctx:d}}}),ne=new U({props:{$$slots:{default:[eo]},$$scope:{ctx:d}}}),y=new U({props:{$$slots:{default:[to]},$$scope:{ctx:d}}}),ie=new U({props:{$$slots:{default:[lo]},$$scope:{ctx:d}}}),ve=new U({props:{$$slots:{default:[no]},$$scope:{ctx:d}}}),ae=new U({props:{data_background_color:"#00353F",$$slots:{default:[io]},$$scope:{ctx:d}}}),_e=new U({props:{data_background_color:"#00353F",$$slots:{default:[ro]},$$scope:{ctx:d}}}),{c(){S(e.$$.fragment),o=x(),S(s.$$.fragment),t=x(),S(c.$$.fragment),n=x(),S(i.$$.fragment),m=x(),S(l.$$.fragment),$=x(),S(_.$$.fragment),u=x(),S(f.$$.fragment),b=x(),S(p.$$.fragment),L=x(),S(j.$$.fragment),E=x(),S(R.$$.fragment),V=x(),S(I.$$.fragment),k=x(),S(A.$$.fragment),F=x(),S(X.$$.fragment),J=x(),S(le.$$.fragment),D=x(),S(K.$$.fragment),$e=x(),S(pe.$$.fragment),Z=x(),S(ne.$$.fragment),me=x(),S(y.$$.fragment),B=x(),S(ie.$$.fragment),de=x(),S(ve.$$.fragment),W=x(),S(ae.$$.fragment),Ce=x(),S(_e.$$.fragment)},l(G){T(e.$$.fragment,G),o=v(G),T(s.$$.fragment,G),t=v(G),T(c.$$.fragment,G),n=v(G),T(i.$$.fragment,G),m=v(G),T(l.$$.fragment,G),$=v(G),T(_.$$.fragment,G),u=v(G),T(f.$$.fragment,G),b=v(G),T(p.$$.fragment,G),L=v(G),T(j.$$.fragment,G),E=v(G),T(R.$$.fragment,G),V=v(G),T(I.$$.fragment,G),k=v(G),T(A.$$.fragment,G),F=v(G),T(X.$$.fragment,G),J=v(G),T(le.$$.fragment,G),D=v(G),T(K.$$.fragment,G),$e=v(G),T(pe.$$.fragment,G),Z=v(G),T(ne.$$.fragment,G),me=v(G),T(y.$$.fragment,G),B=v(G),T(ie.$$.fragment,G),de=v(G),T(ve.$$.fragment,G),W=v(G),T(ae.$$.fragment,G),Ce=v(G),T(_e.$$.fragment,G)},m(G,ue){M(e,G,ue),a(G,o,ue),M(s,G,ue),a(G,t,ue),M(c,G,ue),a(G,n,ue),M(i,G,ue),a(G,m,ue),M(l,G,ue),a(G,$,ue),M(_,G,ue),a(G,u,ue),M(f,G,ue),a(G,b,ue),M(p,G,ue),a(G,L,ue),M(j,G,ue),a(G,E,ue),M(R,G,ue),a(G,V,ue),M(I,G,ue),a(G,k,ue),M(A,G,ue),a(G,F,ue),M(X,G,ue),a(G,J,ue),M(le,G,ue),a(G,D,ue),M(K,G,ue),a(G,$e,ue),M(pe,G,ue),a(G,Z,ue),M(ne,G,ue),a(G,me,ue),M(y,G,ue),a(G,B,ue),M(ie,G,ue),a(G,de,ue),M(ve,G,ue),a(G,W,ue),M(ae,G,ue),a(G,Ce,ue),M(_e,G,ue),he=!0},p(G,ue){const xe={};ue&1&&(xe.$$scope={dirty:ue,ctx:G}),e.$set(xe);const N={};ue&1&&(N.$$scope={dirty:ue,ctx:G}),s.$set(N);const re={};ue&1&&(re.$$scope={dirty:ue,ctx:G}),c.$set(re);const we={};ue&1&&(we.$$scope={dirty:ue,ctx:G}),i.$set(we);const Q={};ue&1&&(Q.$$scope={dirty:ue,ctx:G}),l.$set(Q);const ce={};ue&1&&(ce.$$scope={dirty:ue,ctx:G}),_.$set(ce);const ge={};ue&1&&(ge.$$scope={dirty:ue,ctx:G}),f.$set(ge);const je={};ue&1&&(je.$$scope={dirty:ue,ctx:G}),p.$set(je);const He={};ue&1&&(He.$$scope={dirty:ue,ctx:G}),j.$set(He);const Ae={};ue&1&&(Ae.$$scope={dirty:ue,ctx:G}),R.$set(Ae);const qe={};ue&1&&(qe.$$scope={dirty:ue,ctx:G}),I.$set(qe);const Ee={};ue&1&&(Ee.$$scope={dirty:ue,ctx:G}),A.$set(Ee);const Se={};ue&1&&(Se.$$scope={dirty:ue,ctx:G}),X.$set(Se);const ze={};ue&1&&(ze.$$scope={dirty:ue,ctx:G}),le.$set(ze);const Ie={};ue&1&&(Ie.$$scope={dirty:ue,ctx:G}),K.$set(Ie);const Je={};ue&1&&(Je.$$scope={dirty:ue,ctx:G}),pe.$set(Je);const ke={};ue&1&&(ke.$$scope={dirty:ue,ctx:G}),ne.$set(ke);const Re={};ue&1&&(Re.$$scope={dirty:ue,ctx:G}),y.$set(Re);const Oe={};ue&1&&(Oe.$$scope={dirty:ue,ctx:G}),ie.$set(Oe);const Ne={};ue&1&&(Ne.$$scope={dirty:ue,ctx:G}),ve.$set(Ne);const Ve={};ue&1&&(Ve.$$scope={dirty:ue,ctx:G}),ae.$set(Ve);const Fe={};ue&1&&(Fe.$$scope={dirty:ue,ctx:G}),_e.$set(Fe)},i(G){he||(P(e.$$.fragment,G),P(s.$$.fragment,G),P(c.$$.fragment,G),P(i.$$.fragment,G),P(l.$$.fragment,G),P(_.$$.fragment,G),P(f.$$.fragment,G),P(p.$$.fragment,G),P(j.$$.fragment,G),P(R.$$.fragment,G),P(I.$$.fragment,G),P(A.$$.fragment,G),P(X.$$.fragment,G),P(le.$$.fragment,G),P(K.$$.fragment,G),P(pe.$$.fragment,G),P(ne.$$.fragment,G),P(y.$$.fragment,G),P(ie.$$.fragment,G),P(ve.$$.fragment,G),P(ae.$$.fragment,G),P(_e.$$.fragment,G),he=!0)},o(G){q(e.$$.fragment,G),q(s.$$.fragment,G),q(c.$$.fragment,G),q(i.$$.fragment,G),q(l.$$.fragment,G),q(_.$$.fragment,G),q(f.$$.fragment,G),q(p.$$.fragment,G),q(j.$$.fragment,G),q(R.$$.fragment,G),q(I.$$.fragment,G),q(A.$$.fragment,G),q(X.$$.fragment,G),q(le.$$.fragment,G),q(K.$$.fragment,G),q(pe.$$.fragment,G),q(ne.$$.fragment,G),q(y.$$.fragment,G),q(ie.$$.fragment,G),q(ve.$$.fragment,G),q(ae.$$.fragment,G),q(_e.$$.fragment,G),he=!1},d(G){G&&(r(o),r(t),r(n),r(m),r($),r(u),r(b),r(L),r(E),r(V),r(k),r(F),r(J),r(D),r($e),r(Z),r(me),r(B),r(de),r(W),r(Ce)),H(e,G),H(s,G),H(c,G),H(i,G),H(l,G),H(_,G),H(f,G),H(p,G),H(j,G),H(R,G),H(I,G),H(A,G),H(X,G),H(le,G),H(K,G),H(pe,G),H(ne,G),H(y,G),H(ie,G),H(ve,G),H(ae,G),H(_e,G)}}}function uo(d){let e,o;return e=new U({props:{$$slots:{default:[ao]},$$scope:{ctx:d}}}),{c(){S(e.$$.fragment)},l(s){T(e.$$.fragment,s)},m(s,t){M(e,s,t),o=!0},p(s,[t]){const c={};t&1&&(c.$$scope={dirty:t,ctx:s}),e.$set(c)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){q(e.$$.fragment,s),o=!1},d(s){H(e,s)}}}class oo extends Me{constructor(e){super(),Te(this,e,null,uo,Pe,{})}}function $o(d){let e,o="Usage de l’IA dans ce module",s,t,c="L’IA n’est <b>pas autorisée</b> pendant le module",n,i,m=`Les modalités d'évaluation sont pensées pour que l'IA ne vous apporte aucun avantage, voire\r
			vous desserve.`;return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("span"),t.innerHTML=c,n=x(),i=h("p"),i.textContent=m,this.h()},l(l){e=C(l,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-1gojwpb"&&(e.textContent=o),s=v(l),t=C(l,"SPAN",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-35mnki"&&(t.innerHTML=c),n=v(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-1ydzg9u"&&(i.textContent=m),this.h()},h(){w(t,"class","font-bold text-[2em] underline"),w(i,"class","note")},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),a(l,i,$)},p:z,d(l){l&&(r(e),r(s),r(t),r(n),r(i))}}}function fo(d){let e,o="Pourquoi l’IA pose problème à ce stade",s,t,c=`<li><b>1. La “dette cognitive”</b><br/>
				L’apprentissage repose sur la pratique, l’erreur et la métacognition.<br/>
				Déléguer ces étapes à l’IA court-circuite l’apprentissage :<br/>
				on obtient une réponse correcte, mais on ne progresse plus.</li> <li><b>2. Accélérateur pour les experts, béquille pour les débutants</b><br/>
				L’IA amplifie ceux qui maîtrisent déjà.<br/>
				Pour un débutant, elle empêche l’acquisition des bases.</li> <li><b>3. Même problème que les révolutions précédentes</b><br/>
				Comme la calculatrice ou Internet, l’IA n’est pas mauvaise en soi.<br/>
				C’est l’usage passif qui entraîne une perte de compétence.</li> <li><b>4. L’illusion de la facilité</b><br/>
				L’IA donne l’impression d’être plus rapide et plus efficace,<br/>
				mais masque le fait qu’on ne réfléchit plus aux étapes.</li>`,n,i,m="<p>Vidéo expliquant mieux que moi ces concepts</p>";return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("ul"),t.innerHTML=c,n=x(),i=h("a"),i.innerHTML=m,this.h()},l(l){e=C(l,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-16y47ua"&&(e.textContent=o),s=v(l),t=C(l,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-4azm9h"&&(t.innerHTML=c),n=v(l),i=C(l,"A",{href:!0,target:!0,"data-svelte-h":!0}),g(i)!=="svelte-1s9f4k"&&(i.innerHTML=m),this.h()},h(){w(i,"href","https://youtu.be/4xq6bVbS-Pw?si=bhTuVdU7iN5ijJzg&t=653"),w(i,"target","_blank")},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),a(l,i,$)},p:z,d(l){l&&(r(e),r(s),r(t),r(n),r(i))}}}function co(d){let e,o="Constat côté entreprise",s,t,c="<li>Des profils juniors très à l’aise avec l’IA</li> <li>Mais en difficulté dès qu’il faut :</li> <ul><li>débugger un problème</li> <li>expliquer un choix technique</li> <li>adapter une solution existante</li></ul>",n,i,m=`Le problème n’est pas l’IA,<br/>
			mais son usage trop précoce et non maîtrisé.`;return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("ul"),t.innerHTML=c,n=x(),i=h("p"),i.innerHTML=m,this.h()},l(l){e=C(l,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-qqrjer"&&(e.textContent=o),s=v(l),t=C(l,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-1cewx67"&&(t.innerHTML=c),n=v(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-1n46xu8"&&(i.innerHTML=m),this.h()},h(){w(i,"class","note")},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),a(l,i,$)},p:z,d(l){l&&(r(e),r(s),r(t),r(n),r(i))}}}function po(d){let e,o="Utiliser l’IA intelligemment",s,t,c="<li>IA utilisée comme <b>tuteur</b>, pas comme générateur</li> <li>Pas de réponses directes</li> <li>Questions, feedback, progression guidée</li>",n,i,m=`Apprendre correctement avec l’IA<br/>
			produit de meilleurs résultats<br/>
			que l’utiliser sans méthode.`,l,$,_='<p class="note">Source : AI Tutoring Outperforms Active Learning</p>';return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("ul"),t.innerHTML=c,n=x(),i=h("p"),i.innerHTML=m,l=x(),$=h("a"),$.innerHTML=_,this.h()},l(u){e=C(u,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-1nebpg"&&(e.textContent=o),s=v(u),t=C(u,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-1914kjj"&&(t.innerHTML=c),n=v(u),i=C(u,"P",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-1amodgb"&&(i.innerHTML=m),l=v(u),$=C(u,"A",{href:!0,"data-preview-link":!0,"data-svelte-h":!0}),g($)!=="svelte-16lrtro"&&($.innerHTML=_),this.h()},h(){w(i,"class","important"),w($,"href","https://www.nature.com/articles/s41598-025-97652-6.pdf"),w($,"data-preview-link","")},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),a(u,i,f),a(u,l,f),a(u,$,f)},p:z,d(u){u&&(r(e),r(s),r(t),r(n),r(i),r(l),r($))}}}function mo(d){let e,o="Importance des TD et TP",s,t,c="<li>Les TD construisent le raisonnement</li> <li>Les TP ancrent les concepts par la pratique</li> <li>Ce travail est indispensable pour la suite</li>",n,i,m=`Sans cette phase sérieuse,<br/>
			l’IA n’apporte que peu de valeur.`;return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("ul"),t.innerHTML=c,n=x(),i=h("p"),i.innerHTML=m,this.h()},l(l){e=C(l,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-1pqkdgp"&&(e.textContent=o),s=v(l),t=C(l,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-1dj8lr7"&&(t.innerHTML=c),n=v(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-x1j0a0"&&(i.innerHTML=m),this.h()},h(){w(i,"class","note")},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),a(l,i,$)},p:z,d(l){l&&(r(e),r(s),r(t),r(n),r(i))}}}function vo(d){let e,o="Phase projet",s,t,c="<li>Problème plus ouvert</li> <li>Mise en situation proche du monde professionnel</li> <li>Usage de l&#39;IA <b>possible</b> et encadré</li>",n,i,m=`Des bases solides permettent<br/>
			d&#39;utiliser l&#39;IA pour faire des choses intéressantes.`;return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("ul"),t.innerHTML=c,n=x(),i=h("p"),i.innerHTML=m,this.h()},l(l){e=C(l,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-1u8tpjh"&&(e.textContent=o),s=v(l),t=C(l,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-15ntht3"&&(t.innerHTML=c),n=v(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-e1d6gw"&&(i.innerHTML=m),this.h()},h(){w(i,"class","important")},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),a(l,i,$)},p:z,d(l){l&&(r(e),r(s),r(t),r(n),r(i))}}}function xo(d){let e,o="Un prompt vous sera fourni",s,t,c="Pour la phase projet, vous recevrez un <b>prompt</b> à utiliser avec l&#39;IA.",n,i,m='<li class="fragment">Il cadrera l&#39;IA pour qu&#39;elle vous <b>guide</b> sans donner les réponses</li> <li class="fragment">Il sera adapté au contexte du module POO</li>',l,$,_="Ce prompt sera communiqué au moment du projet.",u,f,b=`On vous donnera un prompt système qui transforme l'IA en tuteur.\r
			L'idée c'est de vous apprendre à utiliser l'IA intelligemment, pas à tricher.`;return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("p"),t.innerHTML=c,n=x(),i=h("ul"),i.innerHTML=m,l=x(),$=h("p"),$.textContent=_,u=x(),f=h("aside"),f.textContent=b,this.h()},l(p){e=C(p,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-1stl3ju"&&(e.textContent=o),s=v(p),t=C(p,"P",{"data-svelte-h":!0}),g(t)!=="svelte-e2ua8"&&(t.innerHTML=c),n=v(p),i=C(p,"UL",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-137qpea"&&(i.innerHTML=m),l=v(p),$=C(p,"P",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-kt4k15"&&($.textContent=_),u=v(p),f=C(p,"ASIDE",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-qtdytw"&&(f.textContent=b),this.h()},h(){w(i,"class","mt-6"),w($,"class","note fragment mt-8"),w(f,"class","notes")},m(p,L){a(p,e,L),a(p,s,L),a(p,t,L),a(p,n,L),a(p,i,L),a(p,l,L),a(p,$,L),a(p,u,L),a(p,f,L)},p:z,d(p){p&&(r(e),r(s),r(t),r(n),r(i),r(l),r($),r(u),r(f))}}}function _o(d){let e,o="En résumé",s,t,c='<div class="p-4 bg-pink-800 rounded-lg fragment"><h4 class="text-red-400">📚 TD/TP</h4> <p class="text-xl mt-2">Sans IA</p> <p class="text-sm text-white-400">Construire les bases</p></div> <div class="p-4 bg-orange-800 rounded-lg fragment"><h4 class="text-orange-400">🎯 Projet</h4> <p class="text-xl mt-2">IA encadrée</p> <p class="text-sm text-white-400">Avec le prompt fourni</p></div> <div class="p-4 bg-green-800 rounded-lg fragment"><h4 class="text-green-400">💼 Après CPE</h4> <p class="text-xl mt-2">IA maîtrisée</p> <p class="text-sm text-white-400">Vous savez quand et comment</p></div>',n,i,m=`C'est la progression. D'abord on apprend sans béquille, ensuite on apprend à utiliser l'outil correctement.\r
			À la fin, vous saurez quand l'IA vous aide vraiment et quand elle vous ralentit.`;return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("div"),t.innerHTML=c,n=x(),i=h("aside"),i.textContent=m,this.h()},l(l){e=C(l,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-11s1ixw"&&(e.textContent=o),s=v(l),t=C(l,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-16m7q19"&&(t.innerHTML=c),n=v(l),i=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-1xabxij"&&(i.textContent=m),this.h()},h(){w(t,"class","grid grid-cols-3 gap-6 mt-8"),w(i,"class","notes")},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),a(l,i,$)},p:z,d(l){l&&(r(e),r(s),r(t),r(n),r(i))}}}function Co(d){let e,o,s,t,c,n,i,m,l,$,_,u,f,b,p,L;return e=new U({props:{$$slots:{default:[$o]},$$scope:{ctx:d}}}),s=new U({props:{$$slots:{default:[fo]},$$scope:{ctx:d}}}),c=new U({props:{$$slots:{default:[co]},$$scope:{ctx:d}}}),i=new U({props:{$$slots:{default:[po]},$$scope:{ctx:d}}}),l=new U({props:{$$slots:{default:[mo]},$$scope:{ctx:d}}}),_=new U({props:{$$slots:{default:[vo]},$$scope:{ctx:d}}}),f=new U({props:{$$slots:{default:[xo]},$$scope:{ctx:d}}}),p=new U({props:{$$slots:{default:[_o]},$$scope:{ctx:d}}}),{c(){S(e.$$.fragment),o=x(),S(s.$$.fragment),t=x(),S(c.$$.fragment),n=x(),S(i.$$.fragment),m=x(),S(l.$$.fragment),$=x(),S(_.$$.fragment),u=x(),S(f.$$.fragment),b=x(),S(p.$$.fragment)},l(j){T(e.$$.fragment,j),o=v(j),T(s.$$.fragment,j),t=v(j),T(c.$$.fragment,j),n=v(j),T(i.$$.fragment,j),m=v(j),T(l.$$.fragment,j),$=v(j),T(_.$$.fragment,j),u=v(j),T(f.$$.fragment,j),b=v(j),T(p.$$.fragment,j)},m(j,E){M(e,j,E),a(j,o,E),M(s,j,E),a(j,t,E),M(c,j,E),a(j,n,E),M(i,j,E),a(j,m,E),M(l,j,E),a(j,$,E),M(_,j,E),a(j,u,E),M(f,j,E),a(j,b,E),M(p,j,E),L=!0},p(j,E){const R={};E&1&&(R.$$scope={dirty:E,ctx:j}),e.$set(R);const V={};E&1&&(V.$$scope={dirty:E,ctx:j}),s.$set(V);const I={};E&1&&(I.$$scope={dirty:E,ctx:j}),c.$set(I);const k={};E&1&&(k.$$scope={dirty:E,ctx:j}),i.$set(k);const A={};E&1&&(A.$$scope={dirty:E,ctx:j}),l.$set(A);const F={};E&1&&(F.$$scope={dirty:E,ctx:j}),_.$set(F);const X={};E&1&&(X.$$scope={dirty:E,ctx:j}),f.$set(X);const J={};E&1&&(J.$$scope={dirty:E,ctx:j}),p.$set(J)},i(j){L||(P(e.$$.fragment,j),P(s.$$.fragment,j),P(c.$$.fragment,j),P(i.$$.fragment,j),P(l.$$.fragment,j),P(_.$$.fragment,j),P(f.$$.fragment,j),P(p.$$.fragment,j),L=!0)},o(j){q(e.$$.fragment,j),q(s.$$.fragment,j),q(c.$$.fragment,j),q(i.$$.fragment,j),q(l.$$.fragment,j),q(_.$$.fragment,j),q(f.$$.fragment,j),q(p.$$.fragment,j),L=!1},d(j){j&&(r(o),r(t),r(n),r(m),r($),r(u),r(b)),H(e,j),H(s,j),H(c,j),H(i,j),H(l,j),H(_,j),H(f,j),H(p,j)}}}function ho(d){let e,o;return e=new U({props:{data_background_color:"#2B001A",$$slots:{default:[Co]},$$scope:{ctx:d}}}),{c(){S(e.$$.fragment)},l(s){T(e.$$.fragment,s)},m(s,t){M(e,s,t),o=!0},p(s,[t]){const c={};t&1&&(c.$$scope={dirty:t,ctx:s}),e.$set(c)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){q(e.$$.fragment,s),o=!1},d(s){H(e,s)}}}class go extends Me{constructor(e){super(),Te(this,e,null,ho,Pe,{})}}function bo(d){let e,o="Présentation du module",s,t,c=`<div><ul><li><b>Changer votre manière de penser le code</b></li> <li>Passer du procédural à l’orienté objet</li> <li>Modéliser avant de coder</li> <li>Préparer la suite de votre formation</li></ul> <p class="note">Ce module est simple à valider.<br/>
					Il est <b>fondamental</b> pour la suite.</p></div>`,n,i,m=`Pas obligé de coder en OO, juste une manière de faire différente - C'est une méthode qui\r
			simplifie la modélisation - Assez largement utilisée`;return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("div"),t.innerHTML=c,n=x(),i=h("aside"),i.textContent=m,this.h()},l(l){e=C(l,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-177x7c7"&&(e.textContent=o),s=v(l),t=C(l,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1ez6zyl"&&(t.innerHTML=c),n=v(l),i=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-viqv9x"&&(i.textContent=m),this.h()},h(){w(t,"class","two-columns"),w(i,"class","notes")},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),a(l,i,$)},p:z,d(l){l&&(r(e),r(s),r(t),r(n),r(i))}}}function Lo(d){let e,o="Ce que vous saurez faire à la fin",s,t,c='<div class="text-left"><h4 class="text-red-400 mb-4">❌ Avant ce module</h4> <ul class="text-xl"><li class="fragment">Code qui &quot;marche&quot; pour le TP</li> <li class="fragment">Difficile à reprendre 6 mois plus tard</li> <li class="fragment">Impossible à faire évoluer</li> <li class="fragment">Personne d&#39;autre ne comprend</li></ul></div> <div class="text-left"><h4 class="text-green-400 mb-4">✅ Après ce module</h4> <ul class="text-xl"><li class="fragment">Code qui dure des années</li> <li class="fragment">Maintenable par une équipe</li> <li class="fragment">Évolutif sans tout casser</li> <li class="fragment">Prêt pour le monde pro</li></ul></div>',n,i,m="En entreprise, le code vit 5, 10, 20 ans.<br/> <b>Vous devez apprendre à coder pour les autres, pas juste pour vous.</b>",l,$,_=`C'est la vraie différence. En école, on code pour valider un TP.\r
			En entreprise, le code doit survivre à votre départ, être repris par d'autres, évoluer.\r
			Ce module vous prépare à ça.`;return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("div"),t.innerHTML=c,n=x(),i=h("p"),i.innerHTML=m,l=x(),$=h("aside"),$.textContent=_,this.h()},l(u){e=C(u,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-1bz8gvd"&&(e.textContent=o),s=v(u),t=C(u,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-qhulsq"&&(t.innerHTML=c),n=v(u),i=C(u,"P",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-hffxe3"&&(i.innerHTML=m),l=v(u),$=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-14xcrd9"&&($.textContent=_),this.h()},h(){w(t,"class","grid grid-cols-2 gap-8 mt-8"),w(i,"class","fragment note mt-8"),w($,"class","notes")},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),a(u,i,f),a(u,l,f),a(u,$,f)},p:z,d(u){u&&(r(e),r(s),r(t),r(n),r(i),r(l),r($))}}}function wo(d){let e,o="Pourquoi vous pourriez décrocher",s,t,c=`<svg viewBox="0 0 600 300" width="100%" style="margin-top: 20px;"><line x1="50" y1="250" x2="550" y2="250" stroke="#ccc" stroke-width="2"></line><line x1="50" y1="50" x2="50" y2="250" stroke="#ccc" stroke-width="2"></line><text x="260" y="270" font-size="14" fill="#ffffff">Temps / Expérience</text><text x="-70" y="185" font-size="14" fill="#ffffff" transform="rotate(-90 15,160)">Niveau réel en programmation
				</text><g><path d="M50 200 C120 185, 180 175, 220 170" fill="none" stroke="#3498db" stroke-width="4"></path><path d="M50 200 C120 205, 180 210, 220 190" fill="none" stroke="#f39c12" stroke-width="4"></path></g><g class="fragment" data-fragment-index="0"><path d="M220 170 C260 170, 300 170, 340 170" fill="none" stroke="#3498db" stroke-width="4"></path><path d="M220 190 C260 170, 300 155, 340 145" fill="none" stroke="#f39c12" stroke-width="4"></path></g><g class="fragment" data-fragment-index="1"><path d="M340 145 C380 140, 400 140, 420 140" fill="none" stroke="#f39c12" stroke-width="4"></path><path d="M340 170 C380 168, 400 165, 420 140" fill="none" stroke="#3498db" stroke-width="4"></path></g><g class="fragment" data-fragment-index="2"><path d="M420 140 C470 140, 510 140, 550 140" fill="none" stroke="#f39c12" stroke-width="4"></path><path d="M420 140 C470 120, 510 70, 550 50" fill="none" stroke="#3498db" stroke-width="4"></path></g><text x="60" y="80" font-size="0.5em" fill="#f39c12">Procédural </text><text x="60" y="100" font-size="0.5em" fill="#3498db">POO</text></svg>`,n,i,m=`Si vous avez l’impression de devenir moins bons,<br/>
			c’est que vous êtes en train d’apprendre.`,l,$,_=`Au début ça semble plus simple que du C, vous avez pas à gérer les pointeurs, le langage est
			plus moderne<br/>
			Mais très vite régression, notamment car il y a des règles à respecter que vous n&#39;aviez pas avant,
			en // en C vous pouvez faire n&#39;importe quoi et ça marche<br/>
			Puis vous apprenez à maitriser Puis vous égalez votre précédent niveau, si vous sortez du module
			à ce niveau, vous n&#39;aurez rien appris de plus<br/>
			Restez motivés pour la suite, car après ça décolle vraiment<br/>`;return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("div"),t.innerHTML=c,n=x(),i=h("p"),i.innerHTML=m,l=x(),$=h("aside"),$.innerHTML=_,this.h()},l(u){e=C(u,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-1nk3rng"&&(e.textContent=o),s=v(u),t=C(u,"DIV",{"data-svelte-h":!0}),g(t)!=="svelte-1sp6g9p"&&(t.innerHTML=c),n=v(u),i=C(u,"P",{class:!0,"data-fragment-index":!0,"data-svelte-h":!0}),g(i)!=="svelte-117ka7n"&&(i.innerHTML=m),l=v(u),$=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-ji71yx"&&($.innerHTML=_),this.h()},h(){w(i,"class","note fragment"),w(i,"data-fragment-index","0"),w($,"class","notes")},m(u,f){a(u,e,f),a(u,s,f),a(u,t,f),a(u,n,f),a(u,i,f),a(u,l,f),a(u,$,f)},p:z,d(u){u&&(r(e),r(s),r(t),r(n),r(i),r(l),r($))}}}function Ho(d){let e,o="Déroulé",s,t,c="<li>CM en début de cours</li> <li>TD</li> <li>TP/Projet</li>";return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("ol"),t.innerHTML=c},l(n){e=C(n,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-171i1ti"&&(e.textContent=o),s=v(n),t=C(n,"OL",{"data-svelte-h":!0}),g(t)!=="svelte-se5tp"&&(t.innerHTML=c)},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function qo(d){let e,o="Modalités d’examen",s,t,c="<li>DS écrit <b>basé principalement sur les TD</b></li> <li>Projet en fin de module</li> <li>Contrôle continu sur la rigueur</li>",n,i,m="Ce qui est évalué, ce n’est pas le résultat.<br/> <b>C’est la démarche !</b>";return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("ul"),t.innerHTML=c,n=x(),i=h("p"),i.innerHTML=m,this.h()},l(l){e=C(l,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-33cx1h"&&(e.textContent=o),s=v(l),t=C(l,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-yqhay1"&&(t.innerHTML=c),n=v(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-dcky3d"&&(i.innerHTML=m),this.h()},h(){w(i,"class","important")},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),a(l,i,$)},p:z,d(l){l&&(r(e),r(s),r(t),r(n),r(i))}}}function Po(d){let e,o="Découpage du module",s,t,c=`<svg width="1000" height="500" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" style="flex: 1;background:#fafafa;font-family:sans-serif"><line x1="80" y1="50" x2="80" y2="430" stroke="#333"></line><line x1="80" y1="430" x2="950" y2="430" stroke="#333"></line><g fill="#333" font-size="12"><text x="40" y="430">0h</text><text x="40" y="370">2h</text><text x="40" y="310">4h</text><text x="40" y="250">6h</text><text x="40" y="190">8h</text></g><g font-size="13"><rect x="780" y="60" width="15" height="15" fill="#E85D75"></rect><text x="800" y="73">CM (18h)</text><rect x="780" y="85" width="15" height="15" fill="#456990"></rect><text x="800" y="98">TD (12h)</text><rect x="780" y="110" width="15" height="15" fill="#F28F3B"></rect><text x="800" y="123">TP (14h)</text><rect x="780" y="135" width="15" height="15" fill="#F6BD60"></rect><text x="800" y="148">Projet (18h)</text></g><g font-size="11" text-anchor="middle"><g transform="translate(110,430)"><rect y="-120" width="40" height="120" fill="#E85D75"></rect><rect y="-180" width="40" height="60" fill="#456990"></rect><rect y="-240" width="40" height="60" fill="#F28F3B"></rect><text y="20" text-anchor="middle">04/02</text></g><g transform="translate(180,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-120" width="40" height="60" fill="#456990"></rect><text y="20">25/02</text></g><g transform="translate(250,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-120" width="40" height="60" fill="#456990"></rect><rect y="-180" width="40" height="60" fill="#F28F3B"></rect><text y="20">04/03</text></g><g transform="translate(320,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-120" width="40" height="60" fill="#456990"></rect><rect y="-180" width="40" height="60" fill="#F28F3B"></rect><text y="20">18/03</text></g><g transform="translate(390,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-120" width="40" height="60" fill="#456990"></rect><rect y="-180" width="40" height="60" fill="#F28F3B"></rect><text y="20">24/03</text></g><g transform="translate(460,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-120" width="40" height="60" fill="#456990"></rect><rect y="-180" width="40" height="60" fill="#F28F3B"></rect><text y="20">25/03</text></g><g transform="translate(530,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-180" width="40" height="120" fill="#F28F3B"></rect><text y="20">31/03</text></g><g transform="translate(600,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-180" width="40" height="120" fill="#F6BD60"></rect><text y="20">01/04</text></g><g transform="translate(670,430)"><rect y="-180" width="40" height="180" fill="#F6BD60"></rect><text y="20">07/04</text></g><g transform="translate(740,430)"><rect y="-240" width="40" height="240" fill="#F6BD60"></rect><text y="20">05/05</text></g></g></svg> <div style="flex: 1;"><ul><li><b>CM</b> <br/>
						Théorie et introduction des concepts.</li> <li><b>TD</b> <br/> <b class="font-bold text-orange-400">Sans IDE !</b></li> <li><b>TP</b> <br/>
						Guidés, mais il faut improviser, tester, sortir du cadre.</li> <li><b>Projet</b> <br/>
						Mise en situation professionnelle.</li></ul></div>`,n,i,m="Relire le support du CM ne vous suffira pas à réussir l'examen";return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("div"),t.innerHTML=c,n=x(),i=h("p"),i.textContent=m,this.h()},l(l){e=C(l,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-g73up0"&&(e.textContent=o),s=v(l),t=C(l,"DIV",{style:!0,"data-svelte-h":!0}),g(t)!=="svelte-1synnof"&&(t.innerHTML=c),n=v(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-18g80m8"&&(i.textContent=m),this.h()},h(){Ze(t,"display","flex"),Ze(t,"gap","2rem"),Ze(t,"align-items","center"),w(i,"class","font-bold text-orange-400 note")},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),a(l,i,$)},p:z,d(l){l&&(r(e),r(s),r(t),r(n),r(i))}}}function Mo(d){let e,o="Mise en place des TDs/TPs",s,t,c="Les TD et TP sont à commit régulièrement sur votre dépôt git (voir démonstration)",n,i,m="Seul le projet est à réaliser en binôme";return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),i=h("p"),i.textContent=m},l(l){e=C(l,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-1xm0e99"&&(e.textContent=o),s=v(l),t=C(l,"P",{"data-svelte-h":!0}),g(t)!=="svelte-6avelo"&&(t.textContent=c),n=v(l),i=C(l,"P",{"data-svelte-h":!0}),g(i)!=="svelte-1ufx4cd"&&(i.textContent=m)},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),a(l,i,$)},p:z,d(l){l&&(r(e),r(s),r(t),r(n),r(i))}}}function To(d){let e,o,s,t,c,n,i,m,l,$,_,u,f,b;return e=new U({props:{$$slots:{default:[bo]},$$scope:{ctx:d}}}),s=new U({props:{$$slots:{default:[Lo]},$$scope:{ctx:d}}}),c=new U({props:{$$slots:{default:[wo]},$$scope:{ctx:d}}}),i=new U({props:{$$slots:{default:[Ho]},$$scope:{ctx:d}}}),l=new U({props:{$$slots:{default:[qo]},$$scope:{ctx:d}}}),_=new U({props:{$$slots:{default:[Po]},$$scope:{ctx:d}}}),f=new U({props:{$$slots:{default:[Mo]},$$scope:{ctx:d}}}),{c(){S(e.$$.fragment),o=x(),S(s.$$.fragment),t=x(),S(c.$$.fragment),n=x(),S(i.$$.fragment),m=x(),S(l.$$.fragment),$=x(),S(_.$$.fragment),u=x(),S(f.$$.fragment)},l(p){T(e.$$.fragment,p),o=v(p),T(s.$$.fragment,p),t=v(p),T(c.$$.fragment,p),n=v(p),T(i.$$.fragment,p),m=v(p),T(l.$$.fragment,p),$=v(p),T(_.$$.fragment,p),u=v(p),T(f.$$.fragment,p)},m(p,L){M(e,p,L),a(p,o,L),M(s,p,L),a(p,t,L),M(c,p,L),a(p,n,L),M(i,p,L),a(p,m,L),M(l,p,L),a(p,$,L),M(_,p,L),a(p,u,L),M(f,p,L),b=!0},p(p,L){const j={};L&1&&(j.$$scope={dirty:L,ctx:p}),e.$set(j);const E={};L&1&&(E.$$scope={dirty:L,ctx:p}),s.$set(E);const R={};L&1&&(R.$$scope={dirty:L,ctx:p}),c.$set(R);const V={};L&1&&(V.$$scope={dirty:L,ctx:p}),i.$set(V);const I={};L&1&&(I.$$scope={dirty:L,ctx:p}),l.$set(I);const k={};L&1&&(k.$$scope={dirty:L,ctx:p}),_.$set(k);const A={};L&1&&(A.$$scope={dirty:L,ctx:p}),f.$set(A)},i(p){b||(P(e.$$.fragment,p),P(s.$$.fragment,p),P(c.$$.fragment,p),P(i.$$.fragment,p),P(l.$$.fragment,p),P(_.$$.fragment,p),P(f.$$.fragment,p),b=!0)},o(p){q(e.$$.fragment,p),q(s.$$.fragment,p),q(c.$$.fragment,p),q(i.$$.fragment,p),q(l.$$.fragment,p),q(_.$$.fragment,p),q(f.$$.fragment,p),b=!1},d(p){p&&(r(o),r(t),r(n),r(m),r($),r(u)),H(e,p),H(s,p),H(c,p),H(i,p),H(l,p),H(_,p),H(f,p)}}}function So(d){let e,o;return e=new U({props:{data_background_color:"#00353F",$$slots:{default:[To]},$$scope:{ctx:d}}}),{c(){S(e.$$.fragment)},l(s){T(e.$$.fragment,s)},m(s,t){M(e,s,t),o=!0},p(s,[t]){const c={};t&1&&(c.$$scope={dirty:t,ctx:s}),e.$set(c)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){q(e.$$.fragment,s),o=!1},d(s){H(e,s)}}}class jo extends Me{constructor(e){super(),Te(this,e,null,So,Pe,{})}}function Ao(d){let e,o="Programmation Orientée Objet - CPE Lyon - 2026 - 3ICS",s,t,c,n="Lien vers les TP/TD",i,m,l,$=`- Lien de la présentation sur e-campus - Suivre depuis le projecteur - Montrer bouton d'aide -\r
		Overview (touche 'o')`;return{c(){e=h("h1"),s=te(o),t=x(),c=h("a"),c.textContent=n,i=h("br"),m=x(),l=h("aside"),l.textContent=$,this.h()},l(_){e=C(_,"H1",{class:!0});var u=fe(e);s=ee(u,o),u.forEach(r),t=v(_),c=C(_,"A",{class:!0,href:!0,"data-svelte-h":!0}),g(c)!=="svelte-g1grt8"&&(c.textContent=n),i=C(_,"BR",{}),m=v(_),l=C(_,"ASIDE",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-1dq3421"&&(l.textContent=$),this.h()},h(){w(e,"class","capitalize"),w(c,"class","print:hidden"),w(c,"href","#/exercices"),w(l,"class","notes")},m(_,u){a(_,e,u),Y(e,s),a(_,t,u),a(_,c,u),a(_,i,u),a(_,m,u),a(_,l,u)},p:z,d(_){_&&(r(e),r(t),r(c),r(i),r(m),r(l))}}}function Eo(d){let e,o="Les concepts de la POO",s,t,c="<li>Généralités</li> <li>L&#39;héritage</li> <li>La composition</li> <li>Les interfaces</li> <li>L&#39;encapsulation</li> <li>Le polymorphisme</li>";return{c(){e=h("h3"),e.textContent=o,s=x(),t=h("ol"),t.innerHTML=c},l(n){e=C(n,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1thzgzl"&&(e.textContent=o),s=v(n),t=C(n,"OL",{"data-svelte-h":!0}),g(t)!=="svelte-136at1n"&&(t.innerHTML=c)},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function Do(d){let e,o="Séance 2";return{c(){e=h("h3"),e.textContent=o},l(s){e=C(s,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-h3jurd"&&(e.textContent=o)},m(s,t){a(s,e,t)},p:z,d(s){s&&r(e)}}}function Io(d){let e,o="Quelle est la différence entre une classe mère et une classe fille ?",s,t,c=`Une classe mère est une classe dont les propriétés et méthodes peuvent être héritées par une
			classe fille. <br/>
			Une classe fille est une classe qui hérite des propriétés et méthodes d&#39;une classe mère.
			<br/> <span class="font-bold text-orange-400">D&#39;une manière générale on doit pouvoir dire &quot;Un chien est un animal&quot; ou &quot;Un bateau est un
				véhicule&quot; ; Animaux et véhicules sont des classes mères. Chien et bateau sont des classes
				filles.</span>`;return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("div"),t.innerHTML=c,this.h()},l(n){e=C(n,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-1vjx2bc"&&(e.textContent=o),s=v(n),t=C(n,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1obzin6"&&(t.innerHTML=c),this.h()},h(){w(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function ko(d){let e,o="Une classe peut-elle hériter de plusieurs classes ?",s,t,c=`Non, en Java une classe ne peut hériter que d'une seule classe. Cependant, elle peut\r
			implémenter plusieurs interfaces.`;return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("div"),t.textContent=c,this.h()},l(n){e=C(n,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-7y0j9h"&&(e.textContent=o),s=v(n),t=C(n,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1g53i9w"&&(t.textContent=c),this.h()},h(){w(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function Oo(d){let e,o="Qu'est ce qu'une classe abstraite ?",s,t,c=`Une classe abstraite est une classe qui ne peut pas être instanciée et qui peut contenir des
			méthodes abstraites, c&#39;est-à-dire des méthodes sans implémentation. <br/> <span class="font-bold text-orange-400">Généralement, on utilise une classe abstraite pour représenter un concept général qui ne
				peut être instancié directement.</span>`;return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("div"),t.innerHTML=c,this.h()},l(n){e=C(n,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-1g8priv"&&(e.textContent=o),s=v(n),t=C(n,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-18yooat"&&(t.innerHTML=c),this.h()},h(){w(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function Vo(d){let e=`
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
				`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function zo(d){let e,o="Comment redéfinir une méthode dans une classe fille ?",s,t,c,n,i;return n=new oe({props:{$$slots:{default:[Vo]},$$scope:{ctx:d}}}),{c(){e=h("h2"),e.textContent=o,s=x(),t=h("div"),c=te(`Pour redéfinir une méthode dans une classe fille, on utilise le mot-clé @Override au-dessus de\r
			la méthode redéfinie.\r
			`),S(n.$$.fragment),this.h()},l(m){e=C(m,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-ihc9m7"&&(e.textContent=o),s=v(m),t=C(m,"DIV",{class:!0});var l=fe(t);c=ee(l,`Pour redéfinir une méthode dans une classe fille, on utilise le mot-clé @Override au-dessus de\r
			la méthode redéfinie.\r
			`),T(n.$$.fragment,l),l.forEach(r),this.h()},h(){w(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(m,l){a(m,e,l),a(m,s,l),a(m,t,l),Y(t,c),M(n,t,null),i=!0},p(m,l){const $={};l&1&&($.$$scope={dirty:l,ctx:m}),n.$set($)},i(m){i||(P(n.$$.fragment,m),i=!0)},o(m){q(n.$$.fragment,m),i=!1},d(m){m&&(r(e),r(s),r(t)),H(n)}}}function Uo(d){let e,o="Qu'est-ce que l'encapsulation ? Pourquoi est-elle importante ?",s,t,c=`L&#39;encapsulation est un concept de la POO qui consiste à cacher les détails internes d&#39;une
			classe et à ne fournir qu&#39;une interface publique pour interagir avec cette classe. <br/> <span class="font-bold text-orange-400">Elle permet de protéger les données et de contrôler leur accès.</span>
			Par exemple, si l&#39;on a un attribut <code>taille</code> dans une classe <code>Personne</code>,
			on ne veut pas que la taille soit négative. On peut donc contrôler l&#39;accès à cet attribut en
			le déclarant privé et en fournissant des méthodes publiques pour y accéder et le modifier.`;return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("div"),t.innerHTML=c,this.h()},l(n){e=C(n,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-xg99l8"&&(e.textContent=o),s=v(n),t=C(n,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-10lcfdv"&&(t.innerHTML=c),this.h()},h(){w(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function Bo(d){let e=`
				class Personne {
					private String nom;

					public String getNom() {
						return nom;
					}

					public void setNom(String nom) {
						this.nom = nom;
					}				
				}
				`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Jo(d){let e,o="Comment implémenter l'encapsulation en Java ?",s,t,c,n,i="private",m,l,$="public",_,u,f="protected",b,p,L,j,E,R,V;return R=new oe({props:{$$slots:{default:[Bo]},$$scope:{ctx:d}}}),{c(){e=h("h2"),e.textContent=o,s=x(),t=h("div"),c=te("Pour implémenter l'encapsulation en Java, on utilise des modificateurs d'accès comme "),n=h("code"),n.textContent=i,m=te(", "),l=h("code"),l.textContent=$,_=te(", et "),u=h("code"),u.textContent=f,b=te(". "),p=h("br"),L=te(`\r
			Puis, on utilise des méthodes publiques, appelées accesseurs et mutateurs, pour accéder et modifier\r
			les attributs privés. `),j=h("br"),E=x(),S(R.$$.fragment),this.h()},l(I){e=C(I,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-3xw39a"&&(e.textContent=o),s=v(I),t=C(I,"DIV",{class:!0});var k=fe(t);c=ee(k,"Pour implémenter l'encapsulation en Java, on utilise des modificateurs d'accès comme "),n=C(k,"CODE",{"data-svelte-h":!0}),g(n)!=="svelte-1f3qn4i"&&(n.textContent=i),m=ee(k,", "),l=C(k,"CODE",{"data-svelte-h":!0}),g(l)!=="svelte-1bnzrax"&&(l.textContent=$),_=ee(k,", et "),u=C(k,"CODE",{"data-svelte-h":!0}),g(u)!=="svelte-cawnbs"&&(u.textContent=f),b=ee(k,". "),p=C(k,"BR",{}),L=ee(k,`\r
			Puis, on utilise des méthodes publiques, appelées accesseurs et mutateurs, pour accéder et modifier\r
			les attributs privés. `),j=C(k,"BR",{}),E=v(k),T(R.$$.fragment,k),k.forEach(r),this.h()},h(){w(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(I,k){a(I,e,k),a(I,s,k),a(I,t,k),Y(t,c),Y(t,n),Y(t,m),Y(t,l),Y(t,_),Y(t,u),Y(t,b),Y(t,p),Y(t,L),Y(t,j),Y(t,E),M(R,t,null),V=!0},p(I,k){const A={};k&1&&(A.$$scope={dirty:k,ctx:I}),R.$set(A)},i(I){V||(P(R.$$.fragment,I),V=!0)},o(I){q(R.$$.fragment,I),V=!1},d(I){I&&(r(e),r(s),r(t)),H(R)}}}function Ro(d){let e,o="Qu'est-ce qu'une interface en Java ?",s,t,c=`Une interface est un type de référence en Java qui ne contient que des méthodes sans
			implémentation. <br/> <span class="font-bold text-orange-400">Elle permet de définir un contrat que les classes doivent respecter.</span>`;return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("div"),t.innerHTML=c,this.h()},l(n){e=C(n,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-qhrkb2"&&(e.textContent=o),s=v(n),t=C(n,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1g1gl0r"&&(t.innerHTML=c),this.h()},h(){w(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function No(d){let e=`
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
				`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Fo(d){let e,o="Comment implémenter une interface en Java ?",s,t,c,n,i="implements",m,l,$,_,u;return _=new oe({props:{$$slots:{default:[No]},$$scope:{ctx:d}}}),{c(){e=h("h2"),e.textContent=o,s=x(),t=h("div"),c=te("Pour implémenter une interface en Java, une classe doit utiliser le mot-clé "),n=h("code"),n.textContent=i,m=te(`\r
			et fournir une implémentation pour toutes les méthodes de l'interface. `),l=h("br"),$=x(),S(_.$$.fragment),this.h()},l(f){e=C(f,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-p64hds"&&(e.textContent=o),s=v(f),t=C(f,"DIV",{class:!0});var b=fe(t);c=ee(b,"Pour implémenter une interface en Java, une classe doit utiliser le mot-clé "),n=C(b,"CODE",{"data-svelte-h":!0}),g(n)!=="svelte-1ljpoqf"&&(n.textContent=i),m=ee(b,`\r
			et fournir une implémentation pour toutes les méthodes de l'interface. `),l=C(b,"BR",{}),$=v(b),T(_.$$.fragment,b),b.forEach(r),this.h()},h(){w(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(f,b){a(f,e,b),a(f,s,b),a(f,t,b),Y(t,c),Y(t,n),Y(t,m),Y(t,l),Y(t,$),M(_,t,null),u=!0},p(f,b){const p={};b&1&&(p.$$scope={dirty:b,ctx:f}),_.$set(p)},i(f){u||(P(_.$$.fragment,f),u=!0)},o(f){q(_.$$.fragment,f),u=!1},d(f){f&&(r(e),r(s),r(t)),H(_)}}}function Go(d){let e,o="Quelle est la différence entre une classe abstraite et une interface ?",s,t,c=`Une classe abstraite peut contenir des méthodes avec une implémentation, tandis qu&#39;une
			interface ne contient que des méthodes abstraites. <br/> <span class="font-bold text-orange-400">Une classe peut hériter d&#39;une seule classe abstraite mais peut implémenter plusieurs
				interfaces.</span>`;return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("div"),t.innerHTML=c,this.h()},l(n){e=C(n,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-sppbab"&&(e.textContent=o),s=v(n),t=C(n,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1htd280"&&(t.innerHTML=c),this.h()},h(){w(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function Qo(d){let e,o="Commet choisir entre une classe abstraite et une interface ?",s,t,c=`Pour choisir entre une classe abstraite et une interface, il faut se poser la question de la
			relation entre les classes. <br/>
			Si la relation est de type &quot;est un&quot;, alors une classe abstraite est plus appropriée. <br/>
			Si la relation est de type &quot;peut faire&quot;, alors une interface est plus appropriée. <br/>
			Par exemple, un Avion et un Oiseau sont tous deux des objets qui peuvent voler, mais ils ne partagent
			pas nécessairement une relation de type &quot;est un&quot;. <br/>
			Dans ce cas, il est plus approprié d&#39;utiliser une interface <code>IVolant</code>.`;return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("div"),t.innerHTML=c,this.h()},l(n){e=C(n,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-15vllnj"&&(e.textContent=o),s=v(n),t=C(n,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-19rffgv"&&(t.innerHTML=c),this.h()},h(){w(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function yo(d){let e=`
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
				`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Ko(d){let e,o="Comment utiliser les interfaces pour simuler l'héritage multiple ?",s,t,c,n,i,m,l;return m=new oe({props:{$$slots:{default:[yo]},$$scope:{ctx:d}}}),{c(){e=h("h2"),e.textContent=o,s=x(),t=h("div"),c=te(`En Java, une classe ne peut hériter que d'une seule classe, mais elle peut implémenter\r
			plusieurs interfaces. Cela permet de simuler l'héritage multiple en définissant plusieurs\r
			interfaces que la classe doit implémenter. `),n=h("br"),i=x(),S(m.$$.fragment),this.h()},l($){e=C($,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-15pjdo"&&(e.textContent=o),s=v($),t=C($,"DIV",{class:!0});var _=fe(t);c=ee(_,`En Java, une classe ne peut hériter que d'une seule classe, mais elle peut implémenter\r
			plusieurs interfaces. Cela permet de simuler l'héritage multiple en définissant plusieurs\r
			interfaces que la classe doit implémenter. `),n=C(_,"BR",{}),i=v(_),T(m.$$.fragment,_),_.forEach(r),this.h()},h(){w(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m($,_){a($,e,_),a($,s,_),a($,t,_),Y(t,c),Y(t,n),Y(t,i),M(m,t,null),l=!0},p($,_){const u={};_&1&&(u.$$scope={dirty:_,ctx:$}),m.$set(u)},i($){l||(P(m.$$.fragment,$),l=!0)},o($){q(m.$$.fragment,$),l=!1},d($){$&&(r(e),r(s),r(t)),H(m)}}}function Wo(d){let e,o="Qu'est-ce que la composition en POO ?",s,t,c=`La composition est un concept de la POO qui permet de créer des objets complexes en combinant
			des objets plus simples. <br/> <span class="font-bold text-orange-400">Elle consiste à avoir des instances de classes en tant qu&#39;attributs d&#39;une autre classe.</span>`;return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("div"),t.innerHTML=c,this.h()},l(n){e=C(n,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-y5qgqo"&&(e.textContent=o),s=v(n),t=C(n,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1cj1jzg"&&(t.innerHTML=c),this.h()},h(){w(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function Zo(d){let e=`
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
				`,o;return{c(){o=te(e)},l(s){o=ee(s,e)},m(s,t){a(s,o,t)},p:z,d(s){s&&r(o)}}}function Yo(d){let e,o="Donnez un exemple de composition en Java.",s,t,c,n;return c=new oe({props:{$$slots:{default:[Zo]},$$scope:{ctx:d}}}),{c(){e=h("h2"),e.textContent=o,s=x(),t=h("div"),S(c.$$.fragment),this.h()},l(i){e=C(i,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-9ezb79"&&(e.textContent=o),s=v(i),t=C(i,"DIV",{class:!0});var m=fe(t);T(c.$$.fragment,m),m.forEach(r),this.h()},h(){w(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(i,m){a(i,e,m),a(i,s,m),a(i,t,m),M(c,t,null),n=!0},p(i,m){const l={};m&1&&(l.$$scope={dirty:m,ctx:i}),c.$set(l)},i(i){n||(P(c.$$.fragment,i),n=!0)},o(i){q(c.$$.fragment,i),n=!1},d(i){i&&(r(e),r(s),r(t)),H(c)}}}function Xo(d){let e,o="Qu'est-ce qu'une interface marqueur ?",s,t,c=`Une interface marqueur est une interface sans méthode, utilisée pour étiqueter une classe. <br/> <span class="font-bold text-orange-400">On découvrira plus tard que les annotations sont une alternative plus puissante aux
				interfaces marqueurs.</span>`;return{c(){e=h("h2"),e.textContent=o,s=x(),t=h("div"),t.innerHTML=c,this.h()},l(n){e=C(n,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-9are5n"&&(e.textContent=o),s=v(n),t=C(n,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1qoywxi"&&(t.innerHTML=c),this.h()},h(){w(t,"class","fragment border-l-4 border-white-500 pl-4 text-left w-full")},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function e$(d){let e,o="Révisions",s,t,c,n,i,m,l,$,_,u,f,b,p,L,j,E,R,V,I,k,A,F,X,J,le,D,K,$e,pe;return t=new U({props:{$$slots:{default:[Io]},$$scope:{ctx:d}}}),n=new U({props:{$$slots:{default:[ko]},$$scope:{ctx:d}}}),m=new U({props:{$$slots:{default:[Oo]},$$scope:{ctx:d}}}),$=new U({props:{$$slots:{default:[zo]},$$scope:{ctx:d}}}),u=new U({props:{$$slots:{default:[Uo]},$$scope:{ctx:d}}}),b=new U({props:{$$slots:{default:[Jo]},$$scope:{ctx:d}}}),L=new U({props:{$$slots:{default:[Ro]},$$scope:{ctx:d}}}),E=new U({props:{$$slots:{default:[Fo]},$$scope:{ctx:d}}}),V=new U({props:{$$slots:{default:[Go]},$$scope:{ctx:d}}}),k=new U({props:{$$slots:{default:[Qo]},$$scope:{ctx:d}}}),F=new U({props:{$$slots:{default:[Ko]},$$scope:{ctx:d}}}),J=new U({props:{$$slots:{default:[Wo]},$$scope:{ctx:d}}}),D=new U({props:{$$slots:{default:[Yo]},$$scope:{ctx:d}}}),$e=new U({props:{$$slots:{default:[Xo]},$$scope:{ctx:d}}}),{c(){e=h("h3"),e.textContent=o,s=x(),S(t.$$.fragment),c=x(),S(n.$$.fragment),i=x(),S(m.$$.fragment),l=x(),S($.$$.fragment),_=x(),S(u.$$.fragment),f=x(),S(b.$$.fragment),p=x(),S(L.$$.fragment),j=x(),S(E.$$.fragment),R=x(),S(V.$$.fragment),I=x(),S(k.$$.fragment),A=x(),S(F.$$.fragment),X=x(),S(J.$$.fragment),le=x(),S(D.$$.fragment),K=x(),S($e.$$.fragment)},l(Z){e=C(Z,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-zmditw"&&(e.textContent=o),s=v(Z),T(t.$$.fragment,Z),c=v(Z),T(n.$$.fragment,Z),i=v(Z),T(m.$$.fragment,Z),l=v(Z),T($.$$.fragment,Z),_=v(Z),T(u.$$.fragment,Z),f=v(Z),T(b.$$.fragment,Z),p=v(Z),T(L.$$.fragment,Z),j=v(Z),T(E.$$.fragment,Z),R=v(Z),T(V.$$.fragment,Z),I=v(Z),T(k.$$.fragment,Z),A=v(Z),T(F.$$.fragment,Z),X=v(Z),T(J.$$.fragment,Z),le=v(Z),T(D.$$.fragment,Z),K=v(Z),T($e.$$.fragment,Z)},m(Z,ne){a(Z,e,ne),a(Z,s,ne),M(t,Z,ne),a(Z,c,ne),M(n,Z,ne),a(Z,i,ne),M(m,Z,ne),a(Z,l,ne),M($,Z,ne),a(Z,_,ne),M(u,Z,ne),a(Z,f,ne),M(b,Z,ne),a(Z,p,ne),M(L,Z,ne),a(Z,j,ne),M(E,Z,ne),a(Z,R,ne),M(V,Z,ne),a(Z,I,ne),M(k,Z,ne),a(Z,A,ne),M(F,Z,ne),a(Z,X,ne),M(J,Z,ne),a(Z,le,ne),M(D,Z,ne),a(Z,K,ne),M($e,Z,ne),pe=!0},p(Z,ne){const me={};ne&1&&(me.$$scope={dirty:ne,ctx:Z}),t.$set(me);const y={};ne&1&&(y.$$scope={dirty:ne,ctx:Z}),n.$set(y);const B={};ne&1&&(B.$$scope={dirty:ne,ctx:Z}),m.$set(B);const ie={};ne&1&&(ie.$$scope={dirty:ne,ctx:Z}),$.$set(ie);const de={};ne&1&&(de.$$scope={dirty:ne,ctx:Z}),u.$set(de);const ve={};ne&1&&(ve.$$scope={dirty:ne,ctx:Z}),b.$set(ve);const W={};ne&1&&(W.$$scope={dirty:ne,ctx:Z}),L.$set(W);const ae={};ne&1&&(ae.$$scope={dirty:ne,ctx:Z}),E.$set(ae);const Ce={};ne&1&&(Ce.$$scope={dirty:ne,ctx:Z}),V.$set(Ce);const _e={};ne&1&&(_e.$$scope={dirty:ne,ctx:Z}),k.$set(_e);const he={};ne&1&&(he.$$scope={dirty:ne,ctx:Z}),F.$set(he);const G={};ne&1&&(G.$$scope={dirty:ne,ctx:Z}),J.$set(G);const ue={};ne&1&&(ue.$$scope={dirty:ne,ctx:Z}),D.$set(ue);const xe={};ne&1&&(xe.$$scope={dirty:ne,ctx:Z}),$e.$set(xe)},i(Z){pe||(P(t.$$.fragment,Z),P(n.$$.fragment,Z),P(m.$$.fragment,Z),P($.$$.fragment,Z),P(u.$$.fragment,Z),P(b.$$.fragment,Z),P(L.$$.fragment,Z),P(E.$$.fragment,Z),P(V.$$.fragment,Z),P(k.$$.fragment,Z),P(F.$$.fragment,Z),P(J.$$.fragment,Z),P(D.$$.fragment,Z),P($e.$$.fragment,Z),pe=!0)},o(Z){q(t.$$.fragment,Z),q(n.$$.fragment,Z),q(m.$$.fragment,Z),q($.$$.fragment,Z),q(u.$$.fragment,Z),q(b.$$.fragment,Z),q(L.$$.fragment,Z),q(E.$$.fragment,Z),q(V.$$.fragment,Z),q(k.$$.fragment,Z),q(F.$$.fragment,Z),q(J.$$.fragment,Z),q(D.$$.fragment,Z),q($e.$$.fragment,Z),pe=!1},d(Z){Z&&(r(e),r(s),r(c),r(i),r(l),r(_),r(f),r(p),r(j),r(R),r(I),r(A),r(X),r(le),r(K)),H(t,Z),H(n,Z),H(m,Z),H($,Z),H(u,Z),H(b,Z),H(L,Z),H(E,Z),H(V,Z),H(k,Z),H(F,Z),H(J,Z),H(D,Z),H($e,Z)}}}function t$(d){let e,o="Séance 3";return{c(){e=h("h3"),e.textContent=o},l(s){e=C(s,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1ycjlta"&&(e.textContent=o)},m(s,t){a(s,e,t)},p:z,d(s){s&&r(e)}}}function s$(d){let e,o="Nous avons vu les concepts de base de la POO en Java :",s,t,c="<li>L&#39;héritage</li> <li>La composition</li> <li>Les interfaces</li> <li>L&#39;encapsulation</li> <li>Le polymorphisme</li>",n,i,m="Assurez vous de savoir définir chacun de ce concepts et de savoir les différencier.";return{c(){e=h("p"),e.textContent=o,s=x(),t=h("ul"),t.innerHTML=c,n=x(),i=h("p"),i.textContent=m},l(l){e=C(l,"P",{"data-svelte-h":!0}),g(e)!=="svelte-amskfb"&&(e.textContent=o),s=v(l),t=C(l,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-1ddn4m5"&&(t.innerHTML=c),n=v(l),i=C(l,"P",{"data-svelte-h":!0}),g(i)!=="svelte-frup46"&&(i.textContent=m)},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),a(l,i,$)},p:z,d(l){l&&(r(e),r(s),r(t),r(n),r(i))}}}function l$(d){let e,o='En complément, nous avons abordé des notions "avancées" :',s,t,c="<li>La généricité</li> <li>Les collections</li> <li>Les lambdas / programmation fonctionnelle</li> <li>Les classes et méthodes statiques</li>";return{c(){e=h("p"),e.textContent=o,s=x(),t=h("ul"),t.innerHTML=c},l(n){e=C(n,"P",{"data-svelte-h":!0}),g(e)!=="svelte-18k7ohe"&&(e.textContent=o),s=v(n),t=C(n,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-1qhua8d"&&(t.innerHTML=c)},m(n,i){a(n,e,i),a(n,s,i),a(n,t,i)},p:z,d(n){n&&(r(e),r(s),r(t))}}}function n$(d){let e,o="Rappels",s,t,c,n,i;return t=new U({props:{$$slots:{default:[s$]},$$scope:{ctx:d}}}),n=new U({props:{$$slots:{default:[l$]},$$scope:{ctx:d}}}),{c(){e=h("h2"),e.textContent=o,s=x(),S(t.$$.fragment),c=x(),S(n.$$.fragment)},l(m){e=C(m,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-dv36h9"&&(e.textContent=o),s=v(m),T(t.$$.fragment,m),c=v(m),T(n.$$.fragment,m)},m(m,l){a(m,e,l),a(m,s,l),M(t,m,l),a(m,c,l),M(n,m,l),i=!0},p(m,l){const $={};l&1&&($.$$scope={dirty:l,ctx:m}),t.$set($);const _={};l&1&&(_.$$scope={dirty:l,ctx:m}),n.$set(_)},i(m){i||(P(t.$$.fragment,m),P(n.$$.fragment,m),i=!0)},o(m){q(t.$$.fragment,m),q(n.$$.fragment,m),i=!1},d(m){m&&(r(e),r(s),r(c)),H(t,m),H(n,m)}}}function i$(d){let e,o="Fin du cours";return{c(){e=h("h1"),e.textContent=o},l(s){e=C(s,"H1",{"data-svelte-h":!0}),g(e)!=="svelte-qfllbu"&&(e.textContent=o)},m(s,t){a(s,e,t)},p:z,d(s){s&&r(e)}}}function r$(d){let e,o="Merci de formuler un feedback sur le cours :",s,t,c=`Votre retour aide à améliorer le contenu, le rythme et les exercices. Indiquez ce qui était\r
		clair, ce qui mérite d'être approfondi et vos suggestions.`,n,i,m="Repondre au questionnaire";return{c(){e=h("p"),e.textContent=o,s=x(),t=h("p"),t.textContent=c,n=x(),i=h("a"),i.textContent=m,this.h()},l(l){e=C(l,"P",{"data-svelte-h":!0}),g(e)!=="svelte-16u3j20"&&(e.textContent=o),s=v(l),t=C(l,"P",{"data-svelte-h":!0}),g(t)!=="svelte-3dlhbn"&&(t.textContent=c),n=v(l),i=C(l,"A",{href:!0,title:!0,"data-preview-link":!0,"data-svelte-h":!0}),g(i)!=="svelte-3rm7p0"&&(i.textContent=m),this.h()},h(){w(i,"href","https://forms.gle/rajvogoRgbi4vWog7"),w(i,"title","Feedback"),w(i,"data-preview-link","")},m(l,$){a(l,e,$),a(l,s,$),a(l,t,$),a(l,n,$),a(l,i,$)},p:z,d(l){l&&(r(e),r(s),r(t),r(n),r(i))}}}function a$(d){let e,o="Annexes";return{c(){e=h("h1"),e.textContent=o},l(s){e=C(s,"H1",{"data-svelte-h":!0}),g(e)!=="svelte-lwu4ok"&&(e.textContent=o)},m(s,t){a(s,e,t)},p:z,d(s){s&&r(e)}}}function u$(d){let e,o,s,t;return e=new U({props:{$$slots:{default:[a$]},$$scope:{ctx:d}}}),s=new Er({}),{c(){S(e.$$.fragment),o=x(),S(s.$$.fragment)},l(c){T(e.$$.fragment,c),o=v(c),T(s.$$.fragment,c)},m(c,n){M(e,c,n),a(c,o,n),M(s,c,n),t=!0},p(c,n){const i={};n&1&&(i.$$scope={dirty:n,ctx:c}),e.$set(i)},i(c){t||(P(e.$$.fragment,c),P(s.$$.fragment,c),t=!0)},o(c){q(e.$$.fragment,c),q(s.$$.fragment,c),t=!1},d(c){c&&r(o),H(e,c),H(s,c)}}}function o$(d){let e,o,s,t,c,n,i,m,l,$,_,u,f,b,p,L,j,E,R,V,I,k,A,F,X,J,le,D,K,$e,pe,Z,ne,me,y,B,ie,de,ve,W,ae,Ce,_e,he,G,ue,xe,N,re,we;return e=new U({props:{animate:!0,$$slots:{default:[Ao]},$$scope:{ctx:d}}}),s=new jo({}),c=new go({}),i=new Ul({}),l=new U({props:{$$slots:{default:[Eo]},$$scope:{ctx:d}}}),_=new Ui({}),f=new Es({}),p=new vn({}),j=new Bn({}),R=new oi({}),I=new U({props:{id:"seance2",$$slots:{default:[Do]},$$scope:{ctx:d}}}),A=new U({props:{data_background_gradient:"linear-gradient(rgb(40 59 149), rgb(129 23 195 / 41%))",$$slots:{default:[e$]},$$scope:{ctx:d}}}),X=new Kr({}),le=new aa({}),K=new Ta({}),pe=new du({}),ne=new eu({}),y=new U({props:{id:"seance3",$$slots:{default:[t$]},$$scope:{ctx:d}}}),ie=new U({props:{$$slots:{default:[n$]},$$scope:{ctx:d}}}),ve=new oo({}),ae=new Du({}),_e=new U({props:{$$slots:{default:[i$]},$$scope:{ctx:d}}}),G=new tr({}),xe=new U({props:{id:"feedback",$$slots:{default:[r$]},$$scope:{ctx:d}}}),re=new U({props:{id:"annexes",$$slots:{default:[u$]},$$scope:{ctx:d}}}),{c(){S(e.$$.fragment),o=x(),S(s.$$.fragment),t=x(),S(c.$$.fragment),n=x(),S(i.$$.fragment),m=x(),S(l.$$.fragment),$=x(),S(_.$$.fragment),u=x(),S(f.$$.fragment),b=x(),S(p.$$.fragment),L=x(),S(j.$$.fragment),E=x(),S(R.$$.fragment),V=x(),S(I.$$.fragment),k=x(),S(A.$$.fragment),F=x(),S(X.$$.fragment),J=x(),S(le.$$.fragment),D=x(),S(K.$$.fragment),$e=x(),S(pe.$$.fragment),Z=x(),S(ne.$$.fragment),me=x(),S(y.$$.fragment),B=x(),S(ie.$$.fragment),de=x(),S(ve.$$.fragment),W=x(),S(ae.$$.fragment),Ce=x(),S(_e.$$.fragment),he=x(),S(G.$$.fragment),ue=x(),S(xe.$$.fragment),N=x(),S(re.$$.fragment)},l(Q){T(e.$$.fragment,Q),o=v(Q),T(s.$$.fragment,Q),t=v(Q),T(c.$$.fragment,Q),n=v(Q),T(i.$$.fragment,Q),m=v(Q),T(l.$$.fragment,Q),$=v(Q),T(_.$$.fragment,Q),u=v(Q),T(f.$$.fragment,Q),b=v(Q),T(p.$$.fragment,Q),L=v(Q),T(j.$$.fragment,Q),E=v(Q),T(R.$$.fragment,Q),V=v(Q),T(I.$$.fragment,Q),k=v(Q),T(A.$$.fragment,Q),F=v(Q),T(X.$$.fragment,Q),J=v(Q),T(le.$$.fragment,Q),D=v(Q),T(K.$$.fragment,Q),$e=v(Q),T(pe.$$.fragment,Q),Z=v(Q),T(ne.$$.fragment,Q),me=v(Q),T(y.$$.fragment,Q),B=v(Q),T(ie.$$.fragment,Q),de=v(Q),T(ve.$$.fragment,Q),W=v(Q),T(ae.$$.fragment,Q),Ce=v(Q),T(_e.$$.fragment,Q),he=v(Q),T(G.$$.fragment,Q),ue=v(Q),T(xe.$$.fragment,Q),N=v(Q),T(re.$$.fragment,Q)},m(Q,ce){M(e,Q,ce),a(Q,o,ce),M(s,Q,ce),a(Q,t,ce),M(c,Q,ce),a(Q,n,ce),M(i,Q,ce),a(Q,m,ce),M(l,Q,ce),a(Q,$,ce),M(_,Q,ce),a(Q,u,ce),M(f,Q,ce),a(Q,b,ce),M(p,Q,ce),a(Q,L,ce),M(j,Q,ce),a(Q,E,ce),M(R,Q,ce),a(Q,V,ce),M(I,Q,ce),a(Q,k,ce),M(A,Q,ce),a(Q,F,ce),M(X,Q,ce),a(Q,J,ce),M(le,Q,ce),a(Q,D,ce),M(K,Q,ce),a(Q,$e,ce),M(pe,Q,ce),a(Q,Z,ce),M(ne,Q,ce),a(Q,me,ce),M(y,Q,ce),a(Q,B,ce),M(ie,Q,ce),a(Q,de,ce),M(ve,Q,ce),a(Q,W,ce),M(ae,Q,ce),a(Q,Ce,ce),M(_e,Q,ce),a(Q,he,ce),M(G,Q,ce),a(Q,ue,ce),M(xe,Q,ce),a(Q,N,ce),M(re,Q,ce),we=!0},p(Q,[ce]){const ge={};ce&1&&(ge.$$scope={dirty:ce,ctx:Q}),e.$set(ge);const je={};ce&1&&(je.$$scope={dirty:ce,ctx:Q}),l.$set(je);const He={};ce&1&&(He.$$scope={dirty:ce,ctx:Q}),I.$set(He);const Ae={};ce&1&&(Ae.$$scope={dirty:ce,ctx:Q}),A.$set(Ae);const qe={};ce&1&&(qe.$$scope={dirty:ce,ctx:Q}),y.$set(qe);const Ee={};ce&1&&(Ee.$$scope={dirty:ce,ctx:Q}),ie.$set(Ee);const Se={};ce&1&&(Se.$$scope={dirty:ce,ctx:Q}),_e.$set(Se);const ze={};ce&1&&(ze.$$scope={dirty:ce,ctx:Q}),xe.$set(ze);const Ie={};ce&1&&(Ie.$$scope={dirty:ce,ctx:Q}),re.$set(Ie)},i(Q){we||(P(e.$$.fragment,Q),P(s.$$.fragment,Q),P(c.$$.fragment,Q),P(i.$$.fragment,Q),P(l.$$.fragment,Q),P(_.$$.fragment,Q),P(f.$$.fragment,Q),P(p.$$.fragment,Q),P(j.$$.fragment,Q),P(R.$$.fragment,Q),P(I.$$.fragment,Q),P(A.$$.fragment,Q),P(X.$$.fragment,Q),P(le.$$.fragment,Q),P(K.$$.fragment,Q),P(pe.$$.fragment,Q),P(ne.$$.fragment,Q),P(y.$$.fragment,Q),P(ie.$$.fragment,Q),P(ve.$$.fragment,Q),P(ae.$$.fragment,Q),P(_e.$$.fragment,Q),P(G.$$.fragment,Q),P(xe.$$.fragment,Q),P(re.$$.fragment,Q),we=!0)},o(Q){q(e.$$.fragment,Q),q(s.$$.fragment,Q),q(c.$$.fragment,Q),q(i.$$.fragment,Q),q(l.$$.fragment,Q),q(_.$$.fragment,Q),q(f.$$.fragment,Q),q(p.$$.fragment,Q),q(j.$$.fragment,Q),q(R.$$.fragment,Q),q(I.$$.fragment,Q),q(A.$$.fragment,Q),q(X.$$.fragment,Q),q(le.$$.fragment,Q),q(K.$$.fragment,Q),q(pe.$$.fragment,Q),q(ne.$$.fragment,Q),q(y.$$.fragment,Q),q(ie.$$.fragment,Q),q(ve.$$.fragment,Q),q(ae.$$.fragment,Q),q(_e.$$.fragment,Q),q(G.$$.fragment,Q),q(xe.$$.fragment,Q),q(re.$$.fragment,Q),we=!1},d(Q){Q&&(r(o),r(t),r(n),r(m),r($),r(u),r(b),r(L),r(E),r(V),r(k),r(F),r(J),r(D),r($e),r(Z),r(me),r(B),r(de),r(W),r(Ce),r(he),r(ue),r(N)),H(e,Q),H(s,Q),H(c,Q),H(i,Q),H(l,Q),H(_,Q),H(f,Q),H(p,Q),H(j,Q),H(R,Q),H(I,Q),H(A,Q),H(X,Q),H(le,Q),H(K,Q),H(pe,Q),H(ne,Q),H(y,Q),H(ie,Q),H(ve,Q),H(ae,Q),H(_e,Q),H(G,Q),H(xe,Q),H(re,Q)}}}class $$ extends Me{constructor(e){super(),Te(this,e,null,o$,Pe,{})}}function f$(d){let e,o;return e=new $$({}),{c(){S(e.$$.fragment)},l(s){T(e.$$.fragment,s)},m(s,t){M(e,s,t),o=!0},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){q(e.$$.fragment,s),o=!1},d(s){H(e,s)}}}function c$(d){let e,o,s,t,c;return document.title="Programmation Orientée Objet - CPE Lyon - 2026 - 3ICS - Alexis PICOT",t=new Rt({props:{$$slots:{default:[f$]},$$scope:{ctx:d}}}),{c(){e=h("link"),o=h("meta"),s=x(),S(t.$$.fragment),this.h()},l(n){const i=Jt("svelte-v7f1ci",document.head);e=C(i,"LINK",{rel:!0,href:!0}),o=C(i,"META",{name:!0,content:!0}),i.forEach(r),s=v(n),T(t.$$.fragment,n),this.h()},h(){w(e,"rel","icon"),w(e,"href","https://fav.farm/💻"),w(o,"name","timestamp"),w(o,"content",new Date(1769800152930).toLocaleString())},m(n,i){Y(document.head,e),Y(document.head,o),a(n,s,i),M(t,n,i),c=!0},p(n,[i]){const m={};i&1&&(m.$$scope={dirty:i,ctx:n}),t.$set(m)},i(n){c||(P(t.$$.fragment,n),c=!0)},o(n){q(t.$$.fragment,n),c=!1},d(n){n&&r(s),r(e),r(o),H(t,n)}}}function p$(d){switch(new URLSearchParams(window.location.search).get("r")){case"TD1":window.location.href=Qt;break;case"TD2":window.location.href=yt;break;case"TP1":window.location.href=Ot;break;case"TP2":window.location.href=Vt;break;case"Projet":window.location.href=zt;break}return[]}class C$ extends Me{constructor(e){super(),Te(this,e,p$,c$,Pe,{})}}export{C$ as component,_$ as universal};
