import{s as Ne,n as O}from"../chunks/scheduler.BOeCmP2X.js";import{S as Be,i as Fe,q as M,t as H,a as j,u as A,v as S,r as T,d as a,b as r,e as _,y as g,h as d,j as C,l as v,w as h,c as ee,f as ue,g as Z,k as y,A as _e,B as Ce,x as lt,z as It}from"../chunks/index.DXsIxeDD.js";import{S as N,P as Ie,C as ie,a as Dt}from"../chunks/plantUml.kDHu58qr.js";const Vt=!1,kt=!0,pr=Object.freeze(Object.defineProperty({__proto__:null,prerender:kt,ssr:Vt},Symbol.toStringTag,{value:"Module"}));function zt(x){let e,o="En POO, l'héritage est un mécanisme qui permet de créer une nouvelle classe à partir d'une classe existante.",s,t,$=`L'héritage, c'est comme dans la vraie vie : les enfants héritent des caractéristiques des parents.\r
			En code, une classe enfant récupère automatiquement tout ce que possède la classe parent.\r
			C'est un des piliers de la POO, introduit dès Simula en 1967 !`;return{c(){e=C("p"),e.textContent=o,s=v(),t=C("aside"),t.textContent=$,this.h()},l(i){e=_(i,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1cxtphb"&&(e.textContent=o),s=d(i),t=_(i,"ASIDE",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-58gjd2"&&(t.textContent=$),this.h()},h(){h(t,"class","notes")},m(i,n){r(i,e,n),r(i,s,n),r(i,t,n)},p:O,d(i){i&&(a(e),a(s),a(t))}}}function Ot(x){let e,o=`La classe existante est appelée <span class="text-important">classe mère</span> ou
			<span class="text-important">classe de base</span>.`,s,t,$=`On dit aussi "superclasse" en anglais (superclass). C'est le terme utilisé dans la documentation Java.\r
			La classe mère définit le comportement commun à toutes ses classes filles.`;return{c(){e=C("p"),e.innerHTML=o,s=v(),t=C("aside"),t.textContent=$,this.h()},l(i){e=_(i,"P",{"data-svelte-h":!0}),g(e)!=="svelte-17c6x0h"&&(e.innerHTML=o),s=d(i),t=_(i,"ASIDE",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-c2wodv"&&(t.textContent=$),this.h()},h(){h(t,"class","notes")},m(i,n){r(i,e,n),r(i,s,n),r(i,t,n)},p:O,d(i){i&&(a(e),a(s),a(t))}}}function Ut(x){let e,o=`La nouvelle classe est appelée <span class="text-important">classe fille</span> ou
			<span class="text-important">classe dérivée</span>.`,s,t,$="La classe fille peut aussi ajouter des attributs et des méthodes qui lui sont propres.",i,n,m=`On dit aussi "subclass" en anglais. La classe fille est une spécialisation de la classe mère.\r
			C'est la relation "est un" : un Chien est un Animal, donc Chien hérite d'Animal.\r
			En Java, toutes les classes héritent implicitement de Object. C'est la racine de l'arbre d'héritage.`;return{c(){e=C("p"),e.innerHTML=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1uk6o90"&&(e.innerHTML=o),s=d(l),t=_(l,"P",{"data-svelte-h":!0}),g(t)!=="svelte-hn2jyx"&&(t.textContent=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1xkwxx4"&&(n.textContent=m),this.h()},h(){h(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function Rt(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Jt(x){let e,o="Visualisons l'héritage",s,t,$,i,n="La flèche pointe vers la classe mère : <code>Chien</code> et <code>Chat</code> héritent de <code>Animal</code>.",m,l,f=`C'est la notation UML standard. La flèche avec un triangle vide pointe toujours vers le parent.\r
			Chien et Chat sont des spécialisations d'Animal.`,b;return t=new Ie({props:{$$slots:{default:[Rt]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment),$=v(),i=C("p"),i.innerHTML=n,m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-88th8y"&&(e.textContent=o),s=d(u),S(t.$$.fragment,u),$=d(u),i=_(u,"P",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-15afcpd"&&(i.innerHTML=n),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-r9k6a2"&&(l.textContent=f),this.h()},h(){h(i,"class","fragment"),h(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),A(t,u,p),r(u,$,p),r(u,i,p),r(u,m,p),r(u,l,p),b=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),t.$set(w)},i(u){b||(j(t.$$.fragment,u),b=!0)},o(u){H(t.$$.fragment,u),b=!1},d(u){u&&(a(e),a(s),a($),a(i),a(m),a(l)),M(t,u)}}}function Nt(x){let e=`
class Animal {
    void crier() {
        System.out.println("Je suis un animal");
    }
}

class Chien extends Animal {
    boolean inscritLOF;
}
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Bt(x){let e,o="En code Java",s,t,$,i,n='On utilise le mot-clé <code class="code text-important">extends</code> pour hériter d&#39;une classe.',m,l,f="Le mot-clé extends, c'est le lien d'héritage. Chien étend Animal, donc Chien a tout ce qu'Animal a.",b;return t=new ie({props:{$$slots:{default:[Nt]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment),$=v(),i=C("p"),i.innerHTML=n,m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1w10xpg"&&(e.textContent=o),s=d(u),S(t.$$.fragment,u),$=d(u),i=_(u,"P",{"data-svelte-h":!0}),g(i)!=="svelte-fb6via"&&(i.innerHTML=n),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-1efpv08"&&(l.textContent=f),this.h()},h(){h(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),A(t,u,p),r(u,$,p),r(u,i,p),r(u,m,p),r(u,l,p),b=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),t.$set(w)},i(u){b||(j(t.$$.fragment,u),b=!0)},o(u){H(t.$$.fragment,u),b=!1},d(u){u&&(a(e),a(s),a($),a(i),a(m),a(l)),M(t,u)}}}function Ft(x){let e,o=`La classe fille hérite des attributs et des méthodes de la classe mère. Elle peut aussi\r
			redéfinir les méthodes de la classe mère.`,s,t,$='Redéfinir une méthode s&#39;appelle <span class="text-important">redéfinition</span> (ou <em>override</em>).',i,n,m=`Attention à ne pas confondre redéfinition (override) et surcharge (overload) !\r
			Redéfinition : même signature, comportement différent dans la classe fille.\r
			Surcharge : même nom, signatures différentes (nombre/type de paramètres).`;return{c(){e=C("p"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1def0s3"&&(e.textContent=o),s=d(l),t=_(l,"P",{"data-svelte-h":!0}),g(t)!=="svelte-16p7trl"&&(t.innerHTML=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1i21kkf"&&(n.textContent=m),this.h()},h(){h(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function Gt(x){let e,o="Pourquoi redéfinir une méthode ?",s,t,$='<li class="fragment">Adapter le comportement de la méthode à la classe fille</li> <li class="fragment">Spécialiser un comportement générique</li>',i,n,m='<p class="text-accent-200">Exemple : Un animal crie, mais chaque animal crie différemment !</p>',l,f,b=`C'est là que la POO prend tout son sens. Le concept général est dans la classe mère, le détail dans la fille.\r
			Un Animal sait qu'il doit crier, mais seul le Chien sait qu'il aboie.\r
			C'est le Template Method Pattern : la structure dans le parent, les détails dans les enfants.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("ul"),t.innerHTML=$,i=v(),n=C("div"),n.innerHTML=m,l=v(),f=C("aside"),f.textContent=b,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-110ib47"&&(e.textContent=o),s=d(u),t=_(u,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-r58kxc"&&(t.innerHTML=$),i=d(u),n=_(u,"DIV",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-105ov4u"&&(n.innerHTML=m),l=d(u),f=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-1fg734m"&&(f.textContent=b),this.h()},h(){h(n,"class","fragment mt-8"),h(f,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),r(u,n,p),r(u,l,p),r(u,f,p)},p:O,d(u){u&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f))}}}function Qt(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Kt(x){let e,o="La redéfinition en pratique",s,t,$,i,n=`Regardez le @Override. C'est une annotation qui dit au compilateur : je redéfinis une méthode du parent.\r
			Si vous faites une faute de frappe dans le nom de la méthode, le compilateur vous préviendra.`,m;return t=new ie({props:{lines:"1-5|7-11",$$slots:{default:[Qt]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment),$=v(),i=C("aside"),i.textContent=n,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1eurtkj"&&(e.textContent=o),s=d(l),S(t.$$.fragment,l),$=d(l),i=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-usptrd"&&(i.textContent=n),this.h()},h(){h(i,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),A(t,l,f),r(l,$,f),r(l,i,f),m=!0},p(l,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:l}),t.$set(b)},i(l){m||(j(t.$$.fragment,l),m=!0)},o(l){H(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a($),a(i)),M(t,l)}}}function Xt(x){let e=`
void Crier() {  // Oups, majuscule !
    System.out.println("Wouaf");
}
// Compile... mais ne redéfinit rien !
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Yt(x){let e=`
@Override
void Crier() {  // Erreur de compilation !
    System.out.println("Wouaf");
}
// Le compilateur détecte l'erreur
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Wt(x){let e,o="L'annotation @Override",s,t,$='Bonne pratique : <b>toujours</b> utiliser <code class="text-important">@Override</code> lors d&#39;une redéfinition.',i,n,m,l,f="❌ Sans @Override",b,u,p,w,c,L="✅ Avec @Override",E,q,V,B,Q=`Sans Override, si vous vous trompez dans le nom, vous créez une nouvelle méthode au lieu de redéfinir.\r
			Avec Override, le compilateur vérifie que la méthode existe bien dans le parent.`,Y;return u=new ie({props:{class:"language-java",$$slots:{default:[Xt]},$$scope:{ctx:x}}}),q=new ie({props:{class:"language-java",$$slots:{default:[Yt]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("div"),m=C("div"),l=C("h4"),l.textContent=f,b=v(),T(u.$$.fragment),p=v(),w=C("div"),c=C("h4"),c.textContent=L,E=v(),T(q.$$.fragment),V=v(),B=C("aside"),B.textContent=Q,this.h()},l(D){e=_(D,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-50lfmg"&&(e.textContent=o),s=d(D),t=_(D,"P",{"data-svelte-h":!0}),g(t)!=="svelte-d96ked"&&(t.innerHTML=$),i=d(D),n=_(D,"DIV",{class:!0});var F=ue(n);m=_(F,"DIV",{});var ne=ue(m);l=_(ne,"H4",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-15xopgk"&&(l.textContent=f),b=d(ne),S(u.$$.fragment,ne),ne.forEach(a),p=d(F),w=_(F,"DIV",{});var U=ue(w);c=_(U,"H4",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-1wl6p7j"&&(c.textContent=L),E=d(U),S(q.$$.fragment,U),U.forEach(a),F.forEach(a),V=d(D),B=_(D,"ASIDE",{class:!0,"data-svelte-h":!0}),g(B)!=="svelte-ggk4l5"&&(B.textContent=Q),this.h()},h(){h(l,"class","text-red-400"),h(c,"class","text-green-400"),h(n,"class","grid grid-cols-2 gap-8 mt-6"),h(B,"class","notes")},m(D,F){r(D,e,F),r(D,s,F),r(D,t,F),r(D,i,F),r(D,n,F),ee(n,m),ee(m,l),ee(m,b),A(u,m,null),ee(n,p),ee(n,w),ee(w,c),ee(w,E),A(q,w,null),r(D,V,F),r(D,B,F),Y=!0},p(D,F){const ne={};F&1&&(ne.$$scope={dirty:F,ctx:D}),u.$set(ne);const U={};F&1&&(U.$$scope={dirty:F,ctx:D}),q.$set(U)},i(D){Y||(j(u.$$.fragment,D),j(q.$$.fragment,D),Y=!0)},o(D){H(u.$$.fragment,D),H(q.$$.fragment,D),Y=!1},d(D){D&&(a(e),a(s),a(t),a(i),a(n),a(V),a(B)),M(u),M(q)}}}function Zt(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function yt(x){let e,o="Appeler la méthode du parent : super",s,t,$='On peut appeler la méthode de la classe mère avec <code class="text-important">super</code>.',i,n,m,l,f="Super permet d'accéder au comportement du parent. Utile quand on veut étendre le comportement plutôt que le remplacer complètement.",b;return n=new ie({props:{lines:"7-11",$$slots:{default:[Zt]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),T(n.$$.fragment),m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-qjr5g"&&(e.textContent=o),s=d(u),t=_(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-v8yuqg"&&(t.innerHTML=$),i=d(u),S(n.$$.fragment,u),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-o07epn"&&(l.textContent=f),this.h()},h(){h(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),A(n,u,p),r(u,m,p),r(u,l,p),b=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),n.$set(w)},i(u){b||(j(n.$$.fragment,u),b=!0)},o(u){H(n.$$.fragment,u),b=!1},d(u){u&&(a(e),a(s),a(t),a(i),a(m),a(l)),M(n,u)}}}function es(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function ts(x){let e,o="Le constructeur et super()",s,t,$="Le constructeur de la classe fille doit appeler celui de la classe mère.",i,n,m,l,f="<code>super()</code> doit être la <b>première instruction</b> du constructeur !",b,u,p=`C'est obligatoire. Le parent doit être construit avant l'enfant.\r
			Si vous oubliez super(), Java appelle super() sans argument par défaut.`,w;return n=new ie({props:{lines:"1-6|8-13",$$slots:{default:[es]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),T(n.$$.fragment),m=v(),l=C("p"),l.innerHTML=f,b=v(),u=C("aside"),u.textContent=p,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-b6mdxj"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),g(t)!=="svelte-kr896n"&&(t.textContent=$),i=d(c),S(n.$$.fragment,c),m=d(c),l=_(c,"P",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-18u9zg8"&&(l.innerHTML=f),b=d(c),u=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-18qho2n"&&(u.textContent=p),this.h()},h(){h(l,"class","fragment text-accent-200"),h(u,"class","notes")},m(c,L){r(c,e,L),r(c,s,L),r(c,t,L),r(c,i,L),A(n,c,L),r(c,m,L),r(c,l,L),r(c,b,L),r(c,u,L),w=!0},p(c,L){const E={};L&1&&(E.$$scope={dirty:L,ctx:c}),n.$set(E)},i(c){w||(j(n.$$.fragment,c),w=!0)},o(c){H(n.$$.fragment,c),w=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(l),a(b),a(u)),M(n,c)}}}function ss(x){let e,o="Les classes abstraites",s,t,$="Quand on ne peut pas tout définir...",i,n,m=`Maintenant on passe à un concept plus avancé : l'abstraction.\r
			Parfois, une classe est trop générale pour être instanciée. C'est là qu'intervient abstract.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-y699sq"&&(e.textContent=o),s=d(l),t=_(l,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1vlu38n"&&(t.textContent=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1nw4dvg"&&(n.textContent=m),this.h()},h(){h(e,"class","text-5xl"),h(t,"class","text-2xl text-gray-400"),h(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function ls(x){let e=`
abstract class Animal {
    abstract void crier();  // Pas d'implémentation !
}

// Animal a = new Animal();  // ❌ Erreur de compilation !
Chien c = new Chien();       // ✅ OK
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function ns(x){let e,o="Qu'est-ce qu'une classe abstraite ?",s,t,$='Une classe abstraite est une classe qui <span class="text-important">ne peut pas être instanciée</span>.',i,n,m="Elle est destinée à être héritée par d'autres classes.",l,f,b,u,p,w="{}",c,L,E;return f=new ie({props:{class:"fragment",$$slots:{default:[ls]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("p"),n.textContent=m,l=v(),T(f.$$.fragment),b=v(),u=C("aside"),p=y(`Pensez-y comme un moule incomplet. On ne peut pas utiliser un moule incomplet pour fabriquer quelque chose.\r
			Mais les classes filles complètent le moule et deviennent utilisables.\r
			Une méthode abstraite n'a pas de corps `),c=y(w),L=y("  - juste une signature suivie de ;"),this.h()},l(q){e=_(q,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-ywas56"&&(e.textContent=o),s=d(q),t=_(q,"P",{"data-svelte-h":!0}),g(t)!=="svelte-uh1j94"&&(t.innerHTML=$),i=d(q),n=_(q,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1e5hthq"&&(n.textContent=m),l=d(q),S(f.$$.fragment,q),b=d(q),u=_(q,"ASIDE",{class:!0});var V=ue(u);p=Z(V,`Pensez-y comme un moule incomplet. On ne peut pas utiliser un moule incomplet pour fabriquer quelque chose.\r
			Mais les classes filles complètent le moule et deviennent utilisables.\r
			Une méthode abstraite n'a pas de corps `),c=Z(V,w),L=Z(V,"  - juste une signature suivie de ;"),V.forEach(a),this.h()},h(){h(n,"class","fragment"),h(u,"class","notes")},m(q,V){r(q,e,V),r(q,s,V),r(q,t,V),r(q,i,V),r(q,n,V),r(q,l,V),A(f,q,V),r(q,b,V),r(q,u,V),ee(u,p),ee(u,c),ee(u,L),E=!0},p(q,V){const B={};V&1&&(B.$$scope={dirty:V,ctx:q}),f.$set(B)},i(q){E||(j(f.$$.fragment,q),E=!0)},o(q){H(f.$$.fragment,q),E=!1},d(q){q&&(a(e),a(s),a(t),a(i),a(n),a(l),a(b),a(u)),M(f,q)}}}function is(x){let e,o="Pourquoi utiliser des classes abstraites ?",s,t,$='<li class="fragment">Pour définir un <b>contrat</b> que les classes filles doivent respecter</li> <li class="fragment">Pour <b>forcer</b> les classes filles à implémenter certaines méthodes</li> <li class="fragment">Parce qu&#39;il n&#39;a parfois <b>aucun sens</b> d&#39;instancier une classe</li>',i,n,m=`🤔 Comment calculer la surface d'une "Forme" générique ? C'est impossible !`,l,f,b=`C'est une question de sémantique. Une "Forme" c'est quoi ? Un cercle ? Un carré ? On ne sait pas.\r
			Donc on ne peut pas calculer sa surface. Mais on SAIT que toute forme a une surface.\r
			La classe abstraite dit : "Je ne sais pas comment, mais mes enfants sauront."`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("ul"),t.innerHTML=$,i=v(),n=C("p"),n.textContent=m,l=v(),f=C("aside"),f.textContent=b,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1fw1imw"&&(e.textContent=o),s=d(u),t=_(u,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-1f0ebwg"&&(t.innerHTML=$),i=d(u),n=_(u,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-9bhmml"&&(n.textContent=m),l=d(u),f=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-1fqfiay"&&(f.textContent=b),this.h()},h(){h(n,"class","fragment mt-8 text-accent-200"),h(f,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),r(u,n,p),r(u,l,p),r(u,f,p)},p:O,d(u){u&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f))}}}function as(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function rs(x){let e,o="Exemple : les formes géométriques",s,t,$,i,n=`Forme est abstraite car on ne sait pas calculer la surface d'une forme générique.\r
			Mais on sait que toute forme DOIT pouvoir calculer sa surface.`,m;return t=new Ie({props:{$$slots:{default:[as]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment),$=v(),i=C("aside"),i.textContent=n,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1l1b4vq"&&(e.textContent=o),s=d(l),S(t.$$.fragment,l),$=d(l),i=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-19i401s"&&(i.textContent=n),this.h()},h(){h(i,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),A(t,l,f),r(l,$,f),r(l,i,f),m=!0},p(l,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:l}),t.$set(b)},i(l){m||(j(t.$$.fragment,l),m=!0)},o(l){H(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a($),a(i)),M(t,l)}}}function us(x){let e=`
abstract class Forme {
    abstract double calculerSurface();  // Pas de corps !
}
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function os(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function cs(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function fs(x){let e,o="En code Java",s,t,$,i,n,m,l,f;return t=new ie({props:{$$slots:{default:[us]},$$scope:{ctx:x}}}),n=new ie({props:{class:"language-java",$$slots:{default:[os]},$$scope:{ctx:x}}}),l=new ie({props:{class:"language-java",$$slots:{default:[cs]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment),$=v(),i=C("div"),T(n.$$.fragment),m=v(),T(l.$$.fragment),this.h()},l(b){e=_(b,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1w10xpg"&&(e.textContent=o),s=d(b),S(t.$$.fragment,b),$=d(b),i=_(b,"DIV",{class:!0});var u=ue(i);S(n.$$.fragment,u),m=d(u),S(l.$$.fragment,u),u.forEach(a),this.h()},h(){h(i,"class","flex flex-row gap-4 mt-4")},m(b,u){r(b,e,u),r(b,s,u),A(t,b,u),r(b,$,u),r(b,i,u),A(n,i,null),ee(i,m),A(l,i,null),f=!0},p(b,u){const p={};u&1&&(p.$$scope={dirty:u,ctx:b}),t.$set(p);const w={};u&1&&(w.$$scope={dirty:u,ctx:b}),n.$set(w);const c={};u&1&&(c.$$scope={dirty:u,ctx:b}),l.$set(c)},i(b){f||(j(t.$$.fragment,b),j(n.$$.fragment,b),j(l.$$.fragment,b),f=!0)},o(b){H(t.$$.fragment,b),H(n.$$.fragment,b),H(l.$$.fragment,b),f=!1},d(b){b&&(a(e),a(s),a($),a(i)),M(t,b),M(n),M(l)}}}function $s(x){let e,o="Ce qu'il faut retenir",s,t,$='La classe <code class="text-important">Forme</code> est abstraite car on ne peut pas calculer la surface d&#39;une forme générique.',i,n,m="Mais <b>toutes les formes</b> doivent pouvoir calculer leur surface → c&#39;est le contrat.",l,f,b="❌ <code>new Forme()</code> → Erreur !",u,p,w="✅ <code>new Cercle(5.0)</code> → OK";return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("p"),n.innerHTML=m,l=v(),f=C("p"),f.innerHTML=b,u=v(),p=C("p"),p.innerHTML=w,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1c3ns5x"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1aglhjf"&&(t.innerHTML=$),i=d(c),n=_(c,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1yjmjvc"&&(n.innerHTML=m),l=d(c),f=_(c,"P",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-1b5sfkh"&&(f.innerHTML=b),u=d(c),p=_(c,"P",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-iu5ucw"&&(p.innerHTML=w),this.h()},h(){h(n,"class","fragment"),h(f,"class","fragment mt-8 text-red-400"),h(p,"class","fragment text-green-400")},m(c,L){r(c,e,L),r(c,s,L),r(c,t,L),r(c,i,L),r(c,n,L),r(c,l,L),r(c,f,L),r(c,u,L),r(c,p,L)},p:O,d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f),a(u),a(p))}}}function ps(x){let e,o="⚠️ Quand NE PAS hériter",s,t,$="L'erreur classique du débutant",i,n,m=`Attention, l'héritage est puissant mais dangereux si mal utilisé.\r
			C'est l'une des erreurs les plus fréquentes chez les développeurs juniors.\r
			Même les seniors tombent dans le piège parfois !`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1drmq8k"&&(e.textContent=o),s=d(l),t=_(l,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-3u5bob"&&(t.textContent=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-d4fqpf"&&(n.textContent=m),this.h()},h(){h(e,"class","text-5xl"),h(t,"class","text-2xl text-gray-400"),h(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function ms(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function ds(x){let e,o="Le piège de l'héritage abusif",s,t,$="L'héritage n'est pas toujours la bonne solution !",i,n,m,l,f="Une Pile n'est PAS une ArrayList, elle UTILISE une ArrayList !",b,u,p=`C'est le fameux exemple de Joshua Bloch dans "Effective Java". Il déconseille d'hériter des collections.\r
			Le problème : on expose des méthodes qui n'ont pas de sens pour une Pile (add, remove au milieu...).\r
			C'est une violation du principe de substitution de Liskov.`,w;return n=new ie({props:{class:"language-java",$$slots:{default:[ms]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),T(n.$$.fragment),m=v(),l=C("p"),l.textContent=f,b=v(),u=C("aside"),u.textContent=p,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1hvzkw5"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),g(t)!=="svelte-dgmjh5"&&(t.textContent=$),i=d(c),S(n.$$.fragment,c),m=d(c),l=_(c,"P",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-1pmyb7u"&&(l.textContent=f),b=d(c),u=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-2qwtt4"&&(u.textContent=p),this.h()},h(){h(l,"class","fragment text-red-400 font-bold"),h(u,"class","notes")},m(c,L){r(c,e,L),r(c,s,L),r(c,t,L),r(c,i,L),A(n,c,L),r(c,m,L),r(c,l,L),r(c,b,L),r(c,u,L),w=!0},p(c,L){const E={};L&1&&(E.$$scope={dirty:L,ctx:c}),n.$set(E)},i(c){w||(j(n.$$.fragment,c),w=!0)},o(c){H(n.$$.fragment,c),w=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(l),a(b),a(u)),M(n,c)}}}function vs(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function xs(x){let e,o="La bonne approche : composition",s,t,$,i,n="On expose uniquement ce qui a du sens pour une Pile.",m,l,f=`Voilà la solution propre. La Pile "a une" ArrayList, elle n'"est pas" une ArrayList.\r
			L'utilisateur ne peut faire que empiler et depiler. Impossible de corrompre l'état interne.\r
			C'est le principe d'encapsulation appliqué à l'architecture.`,b;return t=new ie({props:{class:"language-java",$$slots:{default:[vs]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment),$=v(),i=C("p"),i.textContent=n,m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-7t2ot"&&(e.textContent=o),s=d(u),S(t.$$.fragment,u),$=d(u),i=_(u,"P",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-14pjpsh"&&(i.textContent=n),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-czhf2j"&&(l.textContent=f),this.h()},h(){h(i,"class","fragment text-green-400 font-bold"),h(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),A(t,u,p),r(u,$,p),r(u,i,p),r(u,m,p),r(u,l,p),b=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),t.$set(w)},i(u){b||(j(t.$$.fragment,u),b=!0)},o(u){H(t.$$.fragment,u),b=!1},d(u){u&&(a(e),a(s),a($),a(i),a(m),a(l)),M(t,u)}}}function _s(x){let e,o="Comment choisir ?",s,t,$='<p class="fragment">🤔 Posez-vous la question :</p> <p class="fragment mt-4 text-3xl">&quot;Est-ce qu&#39;un <b>X</b> <span class="text-important">EST UN</span> <b>Y</b> ?&quot;</p> <div class="fragment mt-8"><p class="text-green-400">✅ Un Chien <b>est un</b> Animal → Héritage</p> <p class="text-green-400">✅ Un Cercle <b>est une</b> Forme → Héritage</p> <p class="text-red-400">❌ Une Pile <b>est une</b> ArrayList → NON !</p> <p class="text-blue-400">✅ Une Pile <b>a une</b> ArrayList → Composition</p></div>',i,n,m=`C'est la règle d'or. Si la phrase "X est un Y" sonne faux, n'héritez pas.\r
			On verra la composition dans le prochain chapitre.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("div"),t.innerHTML=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1sib837"&&(e.textContent=o),s=d(l),t=_(l,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-b6u81r"&&(t.innerHTML=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1dryqu3"&&(n.textContent=m),this.h()},h(){h(t,"class","text-2xl mt-8"),h(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function Cs(x){let e,o="Récapitulatif : les mots-clés",s,t,$='<tr><td class="p-4"><code class="text-important">extends</code></td> <td class="p-4">Hériter d&#39;une classe</td></tr> <tr><td class="p-4"><code class="text-important">super</code></td> <td class="p-4">Accéder à la classe mère</td></tr> <tr><td class="p-4"><code class="text-important">super()</code></td> <td class="p-4">Appeler le constructeur parent</td></tr> <tr><td class="p-4"><code class="text-important">@Override</code></td> <td class="p-4">Redéfinir une méthode (annotation)</td></tr> <tr><td class="p-4"><code class="text-important">abstract</code></td> <td class="p-4">Classe/méthode non instanciable</td></tr>',i,n,m=`Ce sont les 5 mots-clés essentiels de l'héritage en Java. Apprenez-les par cœur !\r
			Extends pour hériter, super pour accéder au parent, @Override pour redéfinir proprement.\r
			Avec ça, vous couvrez 95% des cas d'utilisation de l'héritage.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("table"),t.innerHTML=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-18myzwu"&&(e.textContent=o),s=d(l),t=_(l,"TABLE",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1mjxyt9"&&(t.innerHTML=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-ij1jd2"&&(n.textContent=m),this.h()},h(){h(t,"class","text-xl"),h(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function hs(x){let e,o="L'héritage",s,t,$,i,n,m,l,f,b,u,p,w,c,L,E,q,V,B,Q,Y,D,F,ne,U,le,ae,fe,re,pe,oe,$e,ce,me,R,te,J,se,de,he,ve,ge,xe,be,z,W;return t=new N({props:{$$slots:{default:[zt]},$$scope:{ctx:x}}}),i=new N({props:{$$slots:{default:[Ot]},$$scope:{ctx:x}}}),m=new N({props:{$$slots:{default:[Ut]},$$scope:{ctx:x}}}),f=new N({props:{$$slots:{default:[Jt]},$$scope:{ctx:x}}}),u=new N({props:{$$slots:{default:[Bt]},$$scope:{ctx:x}}}),w=new N({props:{$$slots:{default:[Ft]},$$scope:{ctx:x}}}),L=new N({props:{$$slots:{default:[Gt]},$$scope:{ctx:x}}}),q=new N({props:{$$slots:{default:[Kt]},$$scope:{ctx:x}}}),B=new N({props:{$$slots:{default:[Wt]},$$scope:{ctx:x}}}),Y=new N({props:{$$slots:{default:[yt]},$$scope:{ctx:x}}}),F=new N({props:{$$slots:{default:[ts]},$$scope:{ctx:x}}}),U=new N({props:{data_background_color:"#1a1a2e",$$slots:{default:[ss]},$$scope:{ctx:x}}}),ae=new N({props:{$$slots:{default:[ns]},$$scope:{ctx:x}}}),re=new N({props:{$$slots:{default:[is]},$$scope:{ctx:x}}}),oe=new N({props:{$$slots:{default:[rs]},$$scope:{ctx:x}}}),ce=new N({props:{$$slots:{default:[fs]},$$scope:{ctx:x}}}),R=new N({props:{$$slots:{default:[$s]},$$scope:{ctx:x}}}),J=new N({props:{data_background_color:"#3d1a1a",$$slots:{default:[ps]},$$scope:{ctx:x}}}),de=new N({props:{$$slots:{default:[ds]},$$scope:{ctx:x}}}),ve=new N({props:{$$slots:{default:[xs]},$$scope:{ctx:x}}}),xe=new N({props:{$$slots:{default:[_s]},$$scope:{ctx:x}}}),z=new N({props:{$$slots:{default:[Cs]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment),$=v(),T(i.$$.fragment),n=v(),T(m.$$.fragment),l=v(),T(f.$$.fragment),b=v(),T(u.$$.fragment),p=v(),T(w.$$.fragment),c=v(),T(L.$$.fragment),E=v(),T(q.$$.fragment),V=v(),T(B.$$.fragment),Q=v(),T(Y.$$.fragment),D=v(),T(F.$$.fragment),ne=v(),T(U.$$.fragment),le=v(),T(ae.$$.fragment),fe=v(),T(re.$$.fragment),pe=v(),T(oe.$$.fragment),$e=v(),T(ce.$$.fragment),me=v(),T(R.$$.fragment),te=v(),T(J.$$.fragment),se=v(),T(de.$$.fragment),he=v(),T(ve.$$.fragment),ge=v(),T(xe.$$.fragment),be=v(),T(z.$$.fragment)},l(k){e=_(k,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-taqcdc"&&(e.textContent=o),s=d(k),S(t.$$.fragment,k),$=d(k),S(i.$$.fragment,k),n=d(k),S(m.$$.fragment,k),l=d(k),S(f.$$.fragment,k),b=d(k),S(u.$$.fragment,k),p=d(k),S(w.$$.fragment,k),c=d(k),S(L.$$.fragment,k),E=d(k),S(q.$$.fragment,k),V=d(k),S(B.$$.fragment,k),Q=d(k),S(Y.$$.fragment,k),D=d(k),S(F.$$.fragment,k),ne=d(k),S(U.$$.fragment,k),le=d(k),S(ae.$$.fragment,k),fe=d(k),S(re.$$.fragment,k),pe=d(k),S(oe.$$.fragment,k),$e=d(k),S(ce.$$.fragment,k),me=d(k),S(R.$$.fragment,k),te=d(k),S(J.$$.fragment,k),se=d(k),S(de.$$.fragment,k),he=d(k),S(ve.$$.fragment,k),ge=d(k),S(xe.$$.fragment,k),be=d(k),S(z.$$.fragment,k)},m(k,X){r(k,e,X),r(k,s,X),A(t,k,X),r(k,$,X),A(i,k,X),r(k,n,X),A(m,k,X),r(k,l,X),A(f,k,X),r(k,b,X),A(u,k,X),r(k,p,X),A(w,k,X),r(k,c,X),A(L,k,X),r(k,E,X),A(q,k,X),r(k,V,X),A(B,k,X),r(k,Q,X),A(Y,k,X),r(k,D,X),A(F,k,X),r(k,ne,X),A(U,k,X),r(k,le,X),A(ae,k,X),r(k,fe,X),A(re,k,X),r(k,pe,X),A(oe,k,X),r(k,$e,X),A(ce,k,X),r(k,me,X),A(R,k,X),r(k,te,X),A(J,k,X),r(k,se,X),A(de,k,X),r(k,he,X),A(ve,k,X),r(k,ge,X),A(xe,k,X),r(k,be,X),A(z,k,X),W=!0},p(k,X){const Le={};X&1&&(Le.$$scope={dirty:X,ctx:k}),t.$set(Le);const we={};X&1&&(we.$$scope={dirty:X,ctx:k}),i.$set(we);const qe={};X&1&&(qe.$$scope={dirty:X,ctx:k}),m.$set(qe);const Pe={};X&1&&(Pe.$$scope={dirty:X,ctx:k}),f.$set(Pe);const Me={};X&1&&(Me.$$scope={dirty:X,ctx:k}),u.$set(Me);const He={};X&1&&(He.$$scope={dirty:X,ctx:k}),w.$set(He);const I={};X&1&&(I.$$scope={dirty:X,ctx:k}),L.$set(I);const K={};X&1&&(K.$$scope={dirty:X,ctx:k}),q.$set(K);const ke={};X&1&&(ke.$$scope={dirty:X,ctx:k}),B.$set(ke);const je={};X&1&&(je.$$scope={dirty:X,ctx:k}),Y.$set(je);const ze={};X&1&&(ze.$$scope={dirty:X,ctx:k}),F.$set(ze);const Ae={};X&1&&(Ae.$$scope={dirty:X,ctx:k}),U.$set(Ae);const Oe={};X&1&&(Oe.$$scope={dirty:X,ctx:k}),ae.$set(Oe);const Se={};X&1&&(Se.$$scope={dirty:X,ctx:k}),re.$set(Se);const Ue={};X&1&&(Ue.$$scope={dirty:X,ctx:k}),oe.$set(Ue);const Te={};X&1&&(Te.$$scope={dirty:X,ctx:k}),ce.$set(Te);const Re={};X&1&&(Re.$$scope={dirty:X,ctx:k}),R.$set(Re);const Ee={};X&1&&(Ee.$$scope={dirty:X,ctx:k}),J.$set(Ee);const Je={};X&1&&(Je.$$scope={dirty:X,ctx:k}),de.$set(Je);const De={};X&1&&(De.$$scope={dirty:X,ctx:k}),ve.$set(De);const Qe={};X&1&&(Qe.$$scope={dirty:X,ctx:k}),xe.$set(Qe);const Ve={};X&1&&(Ve.$$scope={dirty:X,ctx:k}),z.$set(Ve)},i(k){W||(j(t.$$.fragment,k),j(i.$$.fragment,k),j(m.$$.fragment,k),j(f.$$.fragment,k),j(u.$$.fragment,k),j(w.$$.fragment,k),j(L.$$.fragment,k),j(q.$$.fragment,k),j(B.$$.fragment,k),j(Y.$$.fragment,k),j(F.$$.fragment,k),j(U.$$.fragment,k),j(ae.$$.fragment,k),j(re.$$.fragment,k),j(oe.$$.fragment,k),j(ce.$$.fragment,k),j(R.$$.fragment,k),j(J.$$.fragment,k),j(de.$$.fragment,k),j(ve.$$.fragment,k),j(xe.$$.fragment,k),j(z.$$.fragment,k),W=!0)},o(k){H(t.$$.fragment,k),H(i.$$.fragment,k),H(m.$$.fragment,k),H(f.$$.fragment,k),H(u.$$.fragment,k),H(w.$$.fragment,k),H(L.$$.fragment,k),H(q.$$.fragment,k),H(B.$$.fragment,k),H(Y.$$.fragment,k),H(F.$$.fragment,k),H(U.$$.fragment,k),H(ae.$$.fragment,k),H(re.$$.fragment,k),H(oe.$$.fragment,k),H(ce.$$.fragment,k),H(R.$$.fragment,k),H(J.$$.fragment,k),H(de.$$.fragment,k),H(ve.$$.fragment,k),H(xe.$$.fragment,k),H(z.$$.fragment,k),W=!1},d(k){k&&(a(e),a(s),a($),a(n),a(l),a(b),a(p),a(c),a(E),a(V),a(Q),a(D),a(ne),a(le),a(fe),a(pe),a($e),a(me),a(te),a(se),a(he),a(ge),a(be)),M(t,k),M(i,k),M(m,k),M(f,k),M(u,k),M(w,k),M(L,k),M(q,k),M(B,k),M(Y,k),M(F,k),M(U,k),M(ae,k),M(re,k),M(oe,k),M(ce,k),M(R,k),M(J,k),M(de,k),M(ve,k),M(xe,k),M(z,k)}}}function gs(x){let e,o;return e=new N({props:{$$slots:{default:[hs]},$$scope:{ctx:x}}}),{c(){T(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,t){A(e,s,t),o=!0},p(s,[t]){const $={};t&1&&($.$$scope={dirty:t,ctx:s}),e.$set($)},i(s){o||(j(e.$$.fragment,s),o=!0)},o(s){H(e.$$.fragment,s),o=!1},d(s){M(e,s)}}}class bs extends Be{constructor(e){super(),Fe(this,e,null,gs,Ne,{})}}function Ls(x){let e,o,s,t,$,i,n,m,l,f,b,u,p,w,c,L,E,q,V,B;return{c(){e=Ce("svg"),o=Ce("g"),s=Ce("title"),t=y("Layer 1"),$=Ce("g"),i=Ce("rect"),n=Ce("text"),m=y("Données"),l=Ce("text"),f=y("FonctionA"),b=Ce("text"),u=y("FonctionB"),p=Ce("text"),w=y("FonctionC"),c=Ce("text"),L=y("FonctionD"),E=Ce("line"),q=Ce("line"),V=Ce("line"),B=Ce("line"),this.h()},l(Q){e=_e(Q,"svg",{width:!0,height:!0,xmlns:!0});var Y=ue(e);o=_e(Y,"g",{});var D=ue(o);s=_e(D,"title",{});var F=ue(s);t=Z(F,"Layer 1"),F.forEach(a),$=_e(D,"g",{id:!0});var ne=ue($);i=_e(ne,"rect",{fill:!0,stroke:!0,x:!0,y:!0,width:!0,height:!0,id:!0}),ue(i).forEach(a),n=_e(ne,"text",{fill:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var U=ue(n);m=Z(U,"Données"),U.forEach(a),l=_e(ne,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var le=ue(l);f=Z(le,"FonctionA"),le.forEach(a),b=_e(ne,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var ae=ue(b);u=Z(ae,"FonctionB"),ae.forEach(a),p=_e(ne,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var fe=ue(p);w=Z(fe,"FonctionC"),fe.forEach(a),c=_e(ne,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var re=ue(c);L=Z(re,"FonctionD"),re.forEach(a),E=_e(ne,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),ue(E).forEach(a),q=_e(ne,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),ue(q).forEach(a),V=_e(ne,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),ue(V).forEach(a),B=_e(ne,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),ue(B).forEach(a),ne.forEach(a),D.forEach(a),Y.forEach(a),this.h()},h(){h(i,"fill","#FFDFB8"),h(i,"stroke","none"),h(i,"x","170"),h(i,"y","0"),h(i,"width","150"),h(i,"height","300"),h(i,"id","svg_1"),h(n,"fill","black"),h(n,"stroke","black"),h(n,"x","205"),h(n,"y","150"),h(n,"id","svg_2"),h(n,"font-size","24"),h(n,"font-family","Noto Sans JP"),h(n,"text-anchor","start"),h(n,"xml:space","preserve"),h(l,"class","fill-current"),h(l,"stroke","none"),h(l,"x","0"),h(l,"y","50"),h(l,"id","svg_3"),h(l,"font-size","24"),h(l,"font-family","Noto Sans JP"),h(l,"text-anchor","start"),h(l,"xml:space","preserve"),h(b,"class","fill-current"),h(b,"stroke","none"),h(b,"x","0"),h(b,"y","109.99901"),h(b,"id","svg_4"),h(b,"font-size","24"),h(b,"font-family","Noto Sans JP"),h(b,"text-anchor","start"),h(b,"xml:space","preserve"),h(p,"class","fill-current"),h(p,"stroke","none"),h(p,"x","0"),h(p,"y","170"),h(p,"id","svg_5"),h(p,"font-size","24"),h(p,"font-family","Noto Sans JP"),h(p,"text-anchor","start"),h(p,"xml:space","preserve"),h(c,"class","fill-current"),h(c,"stroke","none"),h(c,"x","0"),h(c,"y","230"),h(c,"id","svg_6"),h(c,"font-size","24"),h(c,"font-family","Noto Sans JP"),h(c,"text-anchor","start"),h(c,"xml:space","preserve"),h(E,"stroke-width","5"),h(E,"class","stroke-current"),h(E,"x1","113.53031"),h(E,"y1","222.00012"),h(E,"x2","158.37456"),h(E,"y2","222.00012"),h(E,"id","svg_7"),h(q,"stroke-width","5"),h(q,"class","stroke-current"),h(q,"x1","113.53031"),h(q,"y1","162.00012"),h(q,"x2","158.37456"),h(q,"y2","162.00012"),h(q,"id","svg_8"),h(V,"stroke-width","5"),h(V,"class","stroke-current"),h(V,"x1","113.53031"),h(V,"y1","101.99914"),h(V,"x2","158.37456"),h(V,"y2","101.99914"),h(V,"id","svg_9"),h(B,"stroke-width","5"),h(B,"class","stroke-current"),h(B,"x1","113.53031"),h(B,"y1","42.00012"),h(B,"x2","158.37455"),h(B,"y2","42.00012"),h(B,"id","svg_10"),h($,"id","svg_11"),h(e,"width","320"),h(e,"height","300"),h(e,"xmlns","http://www.w3.org/2000/svg")},m(Q,Y){r(Q,e,Y),ee(e,o),ee(o,s),ee(s,t),ee(o,$),ee($,i),ee($,n),ee(n,m),ee($,l),ee(l,f),ee($,b),ee(b,u),ee($,p),ee(p,w),ee($,c),ee(c,L),ee($,E),ee($,q),ee($,V),ee($,B)},p:O,i:O,o:O,d(Q){Q&&a(e)}}}class ws extends Be{constructor(e){super(),Fe(this,e,null,Ls,Ne,{})}}function qs(x){let e,o,s,t,$,i,n,m,l,f,b,u,p,w,c,L,E,q,V,B,Q,Y,D,F;return{c(){e=Ce("svg"),o=Ce("g"),s=Ce("title"),t=y("Layer 1"),$=Ce("g"),i=Ce("path"),n=Ce("text"),m=y("Données"),l=Ce("text"),f=y("MéthodeA"),b=Ce("text"),u=y("MéthodeB"),p=Ce("line"),w=Ce("line"),c=Ce("g"),L=Ce("path"),E=Ce("text"),q=y("Données"),V=Ce("text"),B=y("MéthodeA"),Q=Ce("text"),Y=y("MéthodeB"),D=Ce("line"),F=Ce("line"),this.h()},l(ne){e=_e(ne,"svg",{width:!0,height:!0,xmlns:!0});var U=ue(e);o=_e(U,"g",{});var le=ue(o);s=_e(le,"title",{});var ae=ue(s);t=Z(ae,"Layer 1"),ae.forEach(a),$=_e(le,"g",{id:!0});var fe=ue($);i=_e(fe,"path",{id:!0,d:!0,opacity:!0,stroke:!0,fill:!0}),ue(i).forEach(a),n=_e(fe,"text",{stroke:!0,fill:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var re=ue(n);m=Z(re,"Données"),re.forEach(a),l=_e(fe,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var pe=ue(l);f=Z(pe,"MéthodeA"),pe.forEach(a),b=_e(fe,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var oe=ue(b);u=Z(oe,"MéthodeB"),oe.forEach(a),p=_e(fe,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),ue(p).forEach(a),w=_e(fe,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),ue(w).forEach(a),fe.forEach(a),c=_e(le,"g",{id:!0});var $e=ue(c);L=_e($e,"path",{id:!0,d:!0,opacity:!0,stroke:!0,fill:!0}),ue(L).forEach(a),E=_e($e,"text",{stroke:!0,fill:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var ce=ue(E);q=Z(ce,"Données"),ce.forEach(a),V=_e($e,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var me=ue(V);B=Z(me,"MéthodeA"),me.forEach(a),Q=_e($e,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var R=ue(Q);Y=Z(R,"MéthodeB"),R.forEach(a),D=_e($e,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),ue(D).forEach(a),F=_e($e,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),ue(F).forEach(a),$e.forEach(a),le.forEach(a),U.forEach(a),this.h()},h(){h(i,"id","svg_1"),h(i,"d","m170,2.75867l150,0l0,116l-150,0l0,-116z"),h(i,"opacity","undefined"),h(i,"stroke","none"),h(i,"fill","#FFDFB8"),h(n,"stroke","black"),h(n,"fill","black"),h(n,"x","208"),h(n,"y","70"),h(n,"id","svg_2"),h(n,"font-size","24"),h(n,"font-family","Noto Sans JP"),h(n,"text-anchor","start"),h(n,"xml:space","preserve"),h(l,"class","fill-current"),h(l,"stroke","none"),h(l,"x","0"),h(l,"y","40"),h(l,"id","svg_3"),h(l,"font-size","24"),h(l,"font-family","Noto Sans JP"),h(l,"text-anchor","start"),h(l,"xml:space","preserve"),h(b,"class","fill-current"),h(b,"stroke","none"),h(b,"x","0"),h(b,"y","100"),h(b,"id","svg_4"),h(b,"font-size","24"),h(b,"font-family","Noto Sans JP"),h(b,"text-anchor","start"),h(b,"xml:space","preserve"),h(p,"stroke-width","5"),h(p,"class","stroke-current"),h(p,"x1","113.53031"),h(p,"y1","91.75781"),h(p,"x2","158.37456"),h(p,"y2","91.75781"),h(p,"id","svg_9"),h(w,"stroke-width","5"),h(w,"class","stroke-current"),h(w,"x1","113.53031"),h(w,"y1","31.75879"),h(w,"x2","158.37455"),h(w,"y2","31.75879"),h(w,"id","svg_10"),h($,"id","svg_12"),h(L,"id","svg_13"),h(L,"d","m170,182.07234l150,0l0,116l-150,0l0,-116z"),h(L,"opacity","undefined"),h(L,"stroke","none"),h(L,"fill","#FFDFB8"),h(E,"stroke","black"),h(E,"fill","black"),h(E,"x","208"),h(E,"y","250"),h(E,"id","svg_14"),h(E,"font-size","24"),h(E,"font-family","Noto Sans JP"),h(E,"text-anchor","start"),h(E,"xml:space","preserve"),h(V,"class","fill-current"),h(V,"stroke","none"),h(V,"x","0"),h(V,"y","220"),h(V,"id","svg_15"),h(V,"font-size","24"),h(V,"font-family","Noto Sans JP"),h(V,"text-anchor","start"),h(V,"xml:space","preserve"),h(Q,"class","fill-current"),h(Q,"stroke","none"),h(Q,"x","0"),h(Q,"y","280"),h(Q,"id","svg_16"),h(Q,"font-size","24"),h(Q,"font-family","Noto Sans JP"),h(Q,"text-anchor","start"),h(Q,"xml:space","preserve"),h(D,"stroke-width","5"),h(D,"class","stroke-current"),h(D,"x1","113.53031"),h(D,"y1","271.07148"),h(D,"x2","158.37456"),h(D,"y2","271.07148"),h(D,"id","svg_17"),h(F,"stroke-width","5"),h(F,"class","stroke-current"),h(F,"x1","113.53031"),h(F,"y1","211.07246"),h(F,"x2","158.37455"),h(F,"y2","211.07246"),h(F,"id","svg_18"),h(c,"id","svg_19"),h(e,"width","320"),h(e,"height","300"),h(e,"xmlns","http://www.w3.org/2000/svg")},m(ne,U){r(ne,e,U),ee(e,o),ee(o,s),ee(s,t),ee(o,$),ee($,i),ee($,n),ee(n,m),ee($,l),ee(l,f),ee($,b),ee(b,u),ee($,p),ee($,w),ee(o,c),ee(c,L),ee(c,E),ee(E,q),ee(c,V),ee(V,B),ee(c,Q),ee(Q,Y),ee(c,D),ee(c,F)},p:O,i:O,o:O,d(ne){ne&&a(e)}}}class Ps extends Be{constructor(e){super(),Fe(this,e,null,qs,Ne,{})}}function Ms(x){let e,o="Introduction";return{c(){e=C("h1"),e.textContent=o},l(s){e=_(s,"H1",{"data-svelte-h":!0}),g(e)!=="svelte-v1pk48"&&(e.textContent=o)},m(s,t){r(s,e,t)},p:O,d(s){s&&a(e)}}}function Hs(x){let e,o='La <span data-fragment-index="1" class="fragment highlight-red">Programmation</span> Orientée Objet',s,t,$="La programmation, c'est manipuler des données...",i,n,m="<i>Comment structurer ces données et les traitements associés ?</i>",l,f,b=`On commence par poser la question fondamentale. Peu importe le langage, peu importe le projet,
			on manipule toujours des données. La vraie question c'est : comment on organise tout ça ?`;return{c(){e=C("h2"),e.innerHTML=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("p"),n.innerHTML=m,l=v(),f=C("aside"),f.textContent=b,this.h()},l(u){e=_(u,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-idwyvx"&&(e.innerHTML=o),s=d(u),t=_(u,"P",{"data-fragment-index":!0,class:!0,"data-svelte-h":!0}),g(t)!=="svelte-ccoak9"&&(t.textContent=$),i=d(u),n=_(u,"P",{"data-fragment-index":!0,class:!0,"data-svelte-h":!0}),g(n)!=="svelte-ja2tch"&&(n.innerHTML=m),l=d(u),f=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-16jpdmo"&&(f.textContent=b),this.h()},h(){h(t,"data-fragment-index","1"),h(t,"class","fragment"),h(n,"data-fragment-index","2"),h(n,"class","fragment"),h(f,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),r(u,n,p),r(u,l,p),r(u,f,p)},p:O,d(u){u&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f))}}}function js(x){let e,o="La POO en 3 mots",s,t,$='<div class="fragment flex flex-col items-center p-6 bg-accent-950 rounded-lg"><span class="text-6xl mb-4">📦</span> <span class="text-important font-bold">RANGER</span> <span class="text-xl mt-2 text-gray-400">Organiser le code</span></div> <div class="fragment flex flex-col items-center p-6 bg-accent-950 rounded-lg"><span class="text-6xl mb-4">🔒</span> <span class="text-important font-bold">PROTÉGER</span> <span class="text-xl mt-2 text-gray-400">Éviter les erreurs</span></div> <div class="fragment flex flex-col items-center p-6 bg-accent-950 rounded-lg"><span class="text-6xl mb-4">🌳</span> <span class="text-important font-bold">GÉNÉRALISER</span> <span class="text-xl mt-2 text-gray-400">Réutiliser le code</span></div>',i,n,m=`On va voir que la POO apporte 3 bénéfices majeurs, dans cet ordre précis. D'abord on range,
			ensuite on protège, et enfin on généralise. Ces 3 piliers sont la base de tout ce qu'on va
			voir dans ce module.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("div"),t.innerHTML=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-1nirx80"&&(e.textContent=o),s=d(l),t=_(l,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-19dln6f"&&(t.innerHTML=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-49jgnd"&&(n.textContent=m),this.h()},h(){h(t,"class","flex flex-row justify-around items-center text-3xl mt-10"),h(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function As(x){let e,o="📦 RANGER",s,t,$="Premier pilier de la POO",i,n,m="On commence par le premier pilier : ranger. C'est le plus intuitif.";return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-z32rqx"&&(e.textContent=o),s=d(l),t=_(l,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-kfijfp"&&(t.textContent=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1eorlzr"&&(n.textContent=m),this.h()},h(){h(e,"class","text-6xl"),h(t,"class","text-3xl text-gray-400"),h(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function Ss(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Ts(x){let e,o='Le problème du code "en vrac"',s,t,$,i,n=`Regardez ce code. On a des variables partout, mélangées. Rien ne dit que nomClient va avec
			ageClient et emailClient. Quand le code grossit, c'est le chaos. On ne sait plus quelle
			variable va avec quelle autre.`,m;return t=new ie({props:{$$slots:{default:[Ss]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment),$=v(),i=C("aside"),i.textContent=n,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1iow74n"&&(e.textContent=o),s=d(l),S(t.$$.fragment,l),$=d(l),i=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-vygygc"&&(i.textContent=n),this.h()},h(){h(i,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),A(t,l,f),r(l,$,f),r(l,i,f),m=!0},p(l,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:l}),t.$set(b)},i(l){m||(j(t.$$.fragment,l),m=!0)},o(l){H(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a($),a(i)),M(t,l)}}}function Es(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Is(x){let e,o="La solution : regrouper dans des objets",s,t,$,i,n=`Avec la POO, on regroupe ce qui va ensemble. Un Client a un nom, un âge, un email. Un Produit
			a un nom, un prix, un stock. Chaque "boîte" contient ce qui lui appartient. C'est déjà plus
			clair, non ?`,m;return t=new ie({props:{lines:"1-5|7-11|13-16|18-20",$$slots:{default:[Es]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment),$=v(),i=C("aside"),i.textContent=n,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-qf6jcc"&&(e.textContent=o),s=d(l),S(t.$$.fragment,l),$=d(l),i=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-1k8tbir"&&(i.textContent=n),this.h()},h(){h(i,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),A(t,l,f),r(l,$,f),r(l,i,f),m=!0},p(l,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:l}),t.$set(b)},i(l){m||(j(t.$$.fragment,l),m=!0)},o(l){H(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a($),a(i)),M(t,l)}}}function Ds(x){let e,o,s="Programmation procédurale",t,$,i="Programmation orientée objet",n,m,l,f,b,u,p,w=`Visuellement, c'est ça la différence. À gauche, les données sont séparées des traitements. Les
			fonctions peuvent accéder à n'importe quelle donnée. À droite, chaque objet contient SES
			données ET SES traitements. C'est une vraie boîte autonome.`,c;return m=new ws({}),b=new Ps({}),{c(){e=C("div"),o=C("h3"),o.textContent=s,t=v(),$=C("h3"),$.textContent=i,n=v(),T(m.$$.fragment),l=v(),f=C("div"),T(b.$$.fragment),u=v(),p=C("aside"),p.textContent=w,this.h()},l(L){e=_(L,"DIV",{class:!0});var E=ue(e);o=_(E,"H3",{"data-svelte-h":!0}),g(o)!=="svelte-cax56s"&&(o.textContent=s),t=d(E),$=_(E,"H3",{"data-fragment-index":!0,class:!0,"data-svelte-h":!0}),g($)!=="svelte-1roygcu"&&($.textContent=i),n=d(E),S(m.$$.fragment,E),l=d(E),f=_(E,"DIV",{"data-fragment-index":!0,class:!0});var q=ue(f);S(b.$$.fragment,q),q.forEach(a),E.forEach(a),u=d(L),p=_(L,"ASIDE",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-cw6e6u"&&(p.textContent=w),this.h()},h(){h($,"data-fragment-index","1"),h($,"class","fragment"),h(f,"data-fragment-index","1"),h(f,"class","fragment"),h(e,"class","grid-cols-2 grid justify-items-center items-start"),h(p,"class","notes")},m(L,E){r(L,e,E),ee(e,o),ee(e,t),ee(e,$),ee(e,n),A(m,e,null),ee(e,l),ee(e,f),A(b,f,null),r(L,u,E),r(L,p,E),c=!0},p:O,i(L){c||(j(m.$$.fragment,L),j(b.$$.fragment,L),c=!0)},o(L){H(m.$$.fragment,L),H(b.$$.fragment,L),c=!1},d(L){L&&(a(e),a(u),a(p)),M(m),M(b)}}}function Vs(x){let e,o='<h3>Programmation procédurale</h3> <h3>Programmation orientée objet</h3> <ul><li>Les données et les traitements sont séparés</li> <li class="fragment">Les fonctions accèdent à <span class="text-red-400">tout</span></li> <li class="fragment">Difficile de savoir &quot;qui fait quoi&quot;</li></ul> <ul><li>Les données et les traitements sont regroupés dans un objet</li> <li class="fragment">Les méthodes n&#39;accèdent qu&#39;à <span class="text-green-400">leur objet</span></li> <li class="fragment">Chaque objet est responsable de lui-même</li></ul>',s,t,$="Premier intérêt : le code est mieux organisé",i,n,m=`En procédural, les fonctions peuvent accéder à tout. C'est pratique au début, mais ça devient
			vite le bazar. En POO, chaque objet est une entité autonome. Il gère ses propres données avec
			ses propres méthodes. C'est le premier bénéfice : on range, on organise.`;return{c(){e=C("div"),e.innerHTML=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"DIV",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-kmsvtl"&&(e.innerHTML=o),s=d(l),t=_(l,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-19jde0y"&&(t.textContent=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1ezzhp6"&&(n.textContent=m),this.h()},h(){h(e,"class","grid-cols-2 grid justify-items-center items-start"),h(t,"class","fragment font-bold text-accent-200 mt-8"),h(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function ks(x){let e,o="🔒 PROTÉGER",s,t,$="Deuxième pilier de la POO",i,n,m=`Maintenant qu'on a rangé, on va voir le deuxième pilier : protéger. C'est là que la POO
			devient vraiment puissante.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-nrad46"&&(e.textContent=o),s=d(l),t=_(l,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1n91bqq"&&(t.textContent=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-5opokd"&&(n.textContent=m),this.h()},h(){h(e,"class","text-6xl"),h(t,"class","text-3xl text-gray-400"),h(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function zs(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Os(x){let e,o="Le problème : les erreurs silencieuses",s,t,$="En procédural, rien ne vous empêche de faire n'importe quoi...",i,n,m,l,f=`Regardez ce code. La fonction direBonjour attend un nom et un âge. Mais rien ne m'empêche de
			lui passer l'âge de Marie à la place de celui de Jean ! Le code compile, il s'exécute... mais
			le résultat est faux. C'est un bug silencieux, le pire type de bug.`,b;return n=new ie({props:{class:"java",$$slots:{default:[zs]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),T(n.$$.fragment),m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-2a5yxe"&&(e.textContent=o),s=d(u),t=_(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1sotxef"&&(t.textContent=$),i=d(u),S(n.$$.fragment,u),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-1va15cw"&&(l.textContent=f),this.h()},h(){h(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),A(n,u,p),r(u,m,p),r(u,l,p),b=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),n.$set(w)},i(u){b||(j(n.$$.fragment,u),b=!0)},o(u){H(n.$$.fragment,u),b=!1},d(u){u&&(a(e),a(s),a(t),a(i),a(m),a(l)),M(n,u)}}}function Us(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Rs(x){let e,o="Le problème empire avec le temps...",s,t,$,i,n="Plus le code grossit, plus on se trompe !",m,l,f=`6 mois plus tard, vous avez 50 variables, 30 fonctions. Vous ne savez plus quelle variable va
			avec quelle autre. Vous vous trompez de paramètre, le code compile, mais ça ne marche pas.
			Vous passez des heures à débugger.`,b;return t=new ie({props:{class:"java",lines:"1-8|10-15",$$slots:{default:[Us]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment),$=v(),i=C("p"),i.textContent=n,m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-12am7ex"&&(e.textContent=o),s=d(u),S(t.$$.fragment,u),$=d(u),i=_(u,"P",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-1u4dzf0"&&(i.textContent=n),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-1oru7wz"&&(l.textContent=f),this.h()},h(){h(i,"class","fragment text-red-400 font-bold"),h(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),A(t,u,p),r(u,$,p),r(u,i,p),r(u,m,p),r(u,l,p),b=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),t.$set(w)},i(u){b||(j(t.$$.fragment,u),b=!0)},o(u){H(t.$$.fragment,u),b=!1},d(u){u&&(a(e),a(s),a($),a(i),a(m),a(l)),M(t,u)}}}function Js(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Ns(x){let e,o="La solution POO : impossible de se tromper",s,t,$,i,n=`En POO, la méthode direBonjour est DANS l'objet Personne. Elle ne prend pas de paramètres,
			elle utilise directement les données de l'objet. Chaque personne a sa propre méthode qui
			utilise SES données. Impossible de mélanger les données de Jean et Marie.`,m;return t=new ie({props:{class:"java",lines:"1-11|13-17",$$slots:{default:[Js]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment),$=v(),i=C("aside"),i.textContent=n,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1l4bme7"&&(e.textContent=o),s=d(l),S(t.$$.fragment,l),$=d(l),i=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-ylwt9m"&&(i.textContent=n),this.h()},h(){h(i,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),A(t,l,f),r(l,$,f),r(l,i,f),m=!0},p(l,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:l}),t.$set(b)},i(l){m||(j(t.$$.fragment,l),m=!0)},o(l){H(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a($),a(i)),M(t,l)}}}function Bs(x){let e=`
//
direBonjour(nom1, age1);  // OK
direBonjour(nom1, age2);  // BUG !
// Rien ne m'empêche de mélanger
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Fs(x){let e=`
//
jean.direBonjour();
marie.direBonjour();
// Chacun utilise SES données
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Gs(x){let e,o="Comparaison directe",s,t,$,i,n="❌ Procédural",m,l,f,b,u,p="✅ POO",w,c,L,E,q="Les méthodes ne manipulent que les données de LEUR objet",V,B,Q=`C'est ça la vraie puissance. En procédural, vous pouvez mélanger les données de personnes
			différentes. En POO, chaque méthode n'accède qu'aux données de son objet. Jean utilise les
			données de Jean, Marie utilise les données de Marie. Impossible de se tromper.`,Y;return l=new ie({props:{class:"java",$$slots:{default:[Bs]},$$scope:{ctx:x}}}),c=new ie({props:{class:"java",$$slots:{default:[Fs]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("div"),$=C("div"),i=C("h4"),i.textContent=n,m=v(),T(l.$$.fragment),f=v(),b=C("div"),u=C("h4"),u.textContent=p,w=v(),T(c.$$.fragment),L=v(),E=C("p"),E.textContent=q,V=v(),B=C("aside"),B.textContent=Q,this.h()},l(D){e=_(D,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-r1ae78"&&(e.textContent=o),s=d(D),t=_(D,"DIV",{class:!0});var F=ue(t);$=_(F,"DIV",{});var ne=ue($);i=_(ne,"H4",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-14hrfbc"&&(i.textContent=n),m=d(ne),S(l.$$.fragment,ne),ne.forEach(a),f=d(F),b=_(F,"DIV",{});var U=ue(b);u=_(U,"H4",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-o82dwg"&&(u.textContent=p),w=d(U),S(c.$$.fragment,U),U.forEach(a),F.forEach(a),L=d(D),E=_(D,"P",{class:!0,"data-svelte-h":!0}),g(E)!=="svelte-2a01z8"&&(E.textContent=q),V=d(D),B=_(D,"ASIDE",{class:!0,"data-svelte-h":!0}),g(B)!=="svelte-1wg97bw"&&(B.textContent=Q),this.h()},h(){h(i,"class","text-red-400"),h(u,"class","text-green-400"),h(t,"class","grid-cols-2 grid justify-items-center items-start gap-4"),h(E,"class","fragment text-accent-200 font-bold text-3xl mt-8"),h(B,"class","notes")},m(D,F){r(D,e,F),r(D,s,F),r(D,t,F),ee(t,$),ee($,i),ee($,m),A(l,$,null),ee(t,f),ee(t,b),ee(b,u),ee(b,w),A(c,b,null),r(D,L,F),r(D,E,F),r(D,V,F),r(D,B,F),Y=!0},p(D,F){const ne={};F&1&&(ne.$$scope={dirty:F,ctx:D}),l.$set(ne);const U={};F&1&&(U.$$scope={dirty:F,ctx:D}),c.$set(U)},i(D){Y||(j(l.$$.fragment,D),j(c.$$.fragment,D),Y=!0)},o(D){H(l.$$.fragment,D),H(c.$$.fragment,D),Y=!1},d(D){D&&(a(e),a(s),a(t),a(L),a(E),a(V),a(B)),M(l),M(c)}}}function Qs(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Ks(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Xs(x){let e,o="Exemple complet : avant / après",s,t,$,i="Procédural",n,m,l="Orienté Objet",f,b,u,p,w,c,L=`À gauche, on pourrait se tromper et appeler direBonjour avec nom et age2. Bug silencieux. À
			droite, chaque Personne est un objet autonome. Quand on appelle p1.direBonjour(), c'est
			TOUJOURS les données de p1 qui sont utilisées. Impossible de mélanger.`,E;return b=new ie({props:{class:"java",$$slots:{default:[Qs]},$$scope:{ctx:x}}}),p=new ie({props:{class:"java fragment","data-fragment-index":"1",lines:"1-9|10-13",$$slots:{default:[Ks]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("div"),$=C("h4"),$.textContent=i,n=v(),m=C("h4"),m.textContent=l,f=v(),T(b.$$.fragment),u=v(),T(p.$$.fragment),w=v(),c=C("aside"),c.textContent=L,this.h()},l(q){e=_(q,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-11nvxg1"&&(e.textContent=o),s=d(q),t=_(q,"DIV",{class:!0});var V=ue(t);$=_(V,"H4",{"data-svelte-h":!0}),g($)!=="svelte-1bk3u6h"&&($.textContent=i),n=d(V),m=_(V,"H4",{class:!0,"data-fragment-index":!0,"data-svelte-h":!0}),g(m)!=="svelte-1rzdg3v"&&(m.textContent=l),f=d(V),S(b.$$.fragment,V),u=d(V),S(p.$$.fragment,V),V.forEach(a),w=d(q),c=_(q,"ASIDE",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-1uzbf9k"&&(c.textContent=L),this.h()},h(){h(m,"class","fragment"),h(m,"data-fragment-index","1"),h(t,"class","grid-cols-2 grid justify-items-center items-start"),h(c,"class","notes")},m(q,V){r(q,e,V),r(q,s,V),r(q,t,V),ee(t,$),ee(t,n),ee(t,m),ee(t,f),A(b,t,null),ee(t,u),A(p,t,null),r(q,w,V),r(q,c,V),E=!0},p(q,V){const B={};V&1&&(B.$$scope={dirty:V,ctx:q}),b.$set(B);const Q={};V&1&&(Q.$$scope={dirty:V,ctx:q}),p.$set(Q)},i(q){E||(j(b.$$.fragment,q),j(p.$$.fragment,q),E=!0)},o(q){H(b.$$.fragment,q),H(p.$$.fragment,q),E=!1},d(q){q&&(a(e),a(s),a(t),a(w),a(c)),M(b),M(p)}}}function Ys(x){let e,o="Récapitulatif : Ranger + Protéger",s,t,$='<div class="p-6 bg-accent-950 rounded-lg"><h4 class="text-important">📦 RANGER</h4> <ul class="text-2xl"><li>Données regroupées par entité</li> <li>Code plus lisible</li> <li>Plus facile à maintenir</li></ul></div> <div class="p-6 bg-accent-950 rounded-lg"><h4 class="text-important">🔒 PROTÉGER</h4> <ul class="text-2xl"><li>Méthodes liées à leurs données</li> <li>Impossible de se tromper de paramètre</li> <li>Le compilateur vous aide</li></ul></div>',i,n,m="Mais ce n'est pas tout...",l,f,b=`On a vu les deux premiers piliers. On range le code, on le protège des erreurs. Mais la POO
			offre un troisième bénéfice, peut-être le plus puissant : la généralisation.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("div"),t.innerHTML=$,i=v(),n=C("p"),n.textContent=m,l=v(),f=C("aside"),f.textContent=b,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-wok7w1"&&(e.textContent=o),s=d(u),t=_(u,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1hsd1m7"&&(t.innerHTML=$),i=d(u),n=_(u,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-3ya9un"&&(n.textContent=m),l=d(u),f=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-heeq8"&&(f.textContent=b),this.h()},h(){h(t,"class","flex flex-row justify-around items-start mt-8"),h(n,"class","fragment text-3xl mt-8"),h(f,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),r(u,n,p),r(u,l,p),r(u,f,p)},p:O,d(u){u&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f))}}}function Ws(x){let e,o="🌳 GÉNÉRALISER",s,t,$="Troisième pilier de la POO",i,n,m=`Le troisième pilier, c'est la généralisation. C'est là qu'on va parler d'héritage,
			d'abstraction. C'est ce qui rend la POO vraiment unique.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-ptnj3f"&&(e.textContent=o),s=d(l),t=_(l,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-188gx3t"&&(t.textContent=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-m0kwia"&&(n.textContent=m),this.h()},h(){h(e,"class","text-6xl"),h(t,"class","text-3xl text-gray-400"),h(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function Zs(x){let e,o="La programmation orientée objet",s,t,$="Qu'est-ce que c'est ?",i,n,m='La programmation orientée objet est un <span class="text-important">paradigme de programmation</span>, c&#39;est-à-dire une manière de programmer, qui repose sur la notion d&#39;objets.',l,f,b="Un objet est une entité qui regroupe des données et des traitements qui lui sont associés.",u,p,w='Un objet est censé représenter <span class="text-important">une entité du monde réel</span>.',c,L,E="Il n'est pas obligatoire de programmer en POO !",q,V,B=`La POO c'est un paradigme, une façon de penser le code. L'idée c'est de modéliser le monde
			réel : des personnes, des voitures, des produits... Ce n'est pas obligatoire, mais c'est très
			puissant quand on sait s'en servir.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("h3"),t.textContent=$,i=v(),n=C("p"),n.innerHTML=m,l=v(),f=C("p"),f.textContent=b,u=v(),p=C("p"),p.innerHTML=w,c=v(),L=C("p"),L.textContent=E,q=v(),V=C("aside"),V.textContent=B,this.h()},l(Q){e=_(Q,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-18a0qr8"&&(e.textContent=o),s=d(Q),t=_(Q,"H3",{"data-svelte-h":!0}),g(t)!=="svelte-a8zqi8"&&(t.textContent=$),i=d(Q),n=_(Q,"P",{"data-svelte-h":!0}),g(n)!=="svelte-3ymvqm"&&(n.innerHTML=m),l=d(Q),f=_(Q,"P",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-18xem7k"&&(f.textContent=b),u=d(Q),p=_(Q,"P",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-10wio1h"&&(p.innerHTML=w),c=d(Q),L=_(Q,"P",{class:!0,"data-svelte-h":!0}),g(L)!=="svelte-64ska2"&&(L.textContent=E),q=d(Q),V=_(Q,"ASIDE",{class:!0,"data-svelte-h":!0}),g(V)!=="svelte-zlkz96"&&(V.textContent=B),this.h()},h(){h(f,"class","fragment"),h(p,"class","fragment"),h(L,"class","fragment text-accent-200 font-bold"),h(V,"class","notes")},m(Q,Y){r(Q,e,Y),r(Q,s,Y),r(Q,t,Y),r(Q,i,Y),r(Q,n,Y),r(Q,l,Y),r(Q,f,Y),r(Q,u,Y),r(Q,p,Y),r(Q,c,Y),r(Q,L,Y),r(Q,q,Y),r(Q,V,Y)},p:O,d(Q){Q&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f),a(u),a(p),a(c),a(L),a(q),a(V))}}}function ys(x){let e,o="Représenter le monde réel",s,t,$="Un objet est censé représenter une entité du monde réel.",i,n,m=`Par exemple, <span data-fragment-index="3" class="fragment highlight-red">un chien, un chat</span>,
			<span data-fragment-index="3" class="fragment highlight-green">une moto, une voiture</span>,
			<span data-fragment-index="3" class="fragment highlight-blue">un ennemi, un PNJ</span>`,l,f,b=`Ou plus <span class="underline font-bold">génériquement</span>, un
			<span class="text-red-500">animal</span>, un <span class="text-green-500">véhicule</span>, un
			<span class="text-blue-500">personnage</span>`,u,p,w=`On modélise le monde réel. Un chien, un chat, ce sont des objets. Mais on peut aller plus loin
			: un chien et un chat, c'est un animal. Une moto et une voiture, c'est un véhicule. C'est ça
			la généralisation : trouver le concept commun.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("p"),n.innerHTML=m,l=v(),f=C("p"),f.innerHTML=b,u=v(),p=C("aside"),p.textContent=w,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1nsqnl5"&&(e.textContent=o),s=d(c),t=_(c,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1te9lxn"&&(t.textContent=$),i=d(c),n=_(c,"P",{class:!0,"data-fragment-index":!0,"data-svelte-h":!0}),g(n)!=="svelte-12p87au"&&(n.innerHTML=m),l=d(c),f=_(c,"P",{class:!0,"data-fragment-index":!0,"data-svelte-h":!0}),g(f)!=="svelte-68say8"&&(f.innerHTML=b),u=d(c),p=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-1ad4dj1"&&(p.textContent=w),this.h()},h(){h(t,"class","font-bold text-accent-200"),h(n,"class","fragment"),h(n,"data-fragment-index","2"),h(f,"class","fragment"),h(f,"data-fragment-index","3"),h(p,"class","notes")},m(c,L){r(c,e,L),r(c,s,L),r(c,t,L),r(c,i,L),r(c,n,L),r(c,l,L),r(c,f,L),r(c,u,L),r(c,p,L)},p:O,d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f),a(u),a(p))}}}function el(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function tl(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function sl(x){let e,o="Pourquoi généraliser ?",s,t,$="Imaginons que vous codez un jeu vidéo...",i,n,m,l,f="❌ Sans généralisation",b,u,p,w,c,L="✅ Avec généralisation",E,q,V,B,Q=`Sans généralisation, on duplique le code. Chaque personnage a sa méthode seDeplacer, même si
			c'est la même. Avec la généralisation, on met le code commun dans une classe parente. Si on
			change seDeplacer, on le change une seule fois, et tous les personnages en bénéficient.`,Y;return u=new ie({props:{class:"java",$$slots:{default:[el]},$$scope:{ctx:x}}}),q=new ie({props:{class:"java",$$slots:{default:[tl]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("div"),m=C("div"),l=C("h4"),l.textContent=f,b=v(),T(u.$$.fragment),p=v(),w=C("div"),c=C("h4"),c.textContent=L,E=v(),T(q.$$.fragment),V=v(),B=C("aside"),B.textContent=Q,this.h()},l(D){e=_(D,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1tyfy6u"&&(e.textContent=o),s=d(D),t=_(D,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1piptso"&&(t.textContent=$),i=d(D),n=_(D,"DIV",{class:!0});var F=ue(n);m=_(F,"DIV",{class:!0});var ne=ue(m);l=_(ne,"H4",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-1dno5ot"&&(l.textContent=f),b=d(ne),S(u.$$.fragment,ne),ne.forEach(a),p=d(F),w=_(F,"DIV",{class:!0});var U=ue(w);c=_(U,"H4",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-11tuyq2"&&(c.textContent=L),E=d(U),S(q.$$.fragment,U),U.forEach(a),F.forEach(a),V=d(D),B=_(D,"ASIDE",{class:!0,"data-svelte-h":!0}),g(B)!=="svelte-qs469b"&&(B.textContent=Q),this.h()},h(){h(l,"class","text-red-400"),h(m,"class","fragment"),h(c,"class","text-green-400"),h(w,"class","fragment"),h(n,"class","grid-cols-2 grid gap-8 mt-8"),h(B,"class","notes")},m(D,F){r(D,e,F),r(D,s,F),r(D,t,F),r(D,i,F),r(D,n,F),ee(n,m),ee(m,l),ee(m,b),A(u,m,null),ee(n,p),ee(n,w),ee(w,c),ee(w,E),A(q,w,null),r(D,V,F),r(D,B,F),Y=!0},p(D,F){const ne={};F&1&&(ne.$$scope={dirty:F,ctx:D}),u.$set(ne);const U={};F&1&&(U.$$scope={dirty:F,ctx:D}),q.$set(U)},i(D){Y||(j(u.$$.fragment,D),j(q.$$.fragment,D),Y=!0)},o(D){H(u.$$.fragment,D),H(q.$$.fragment,D),Y=!1},d(D){D&&(a(e),a(s),a(t),a(i),a(n),a(V),a(B)),M(u),M(q)}}}function ll(x){let e,o="La généricité",s,t,$="Généralisez vos concepts !",i,n,m='<ul><li><a href="#">Animal</a> <ul><li><a>Chien</a></li> <li><a>Chat</a></li></ul></li> <li><a href="#">Véhicule</a> <ul><li><a>Voiture</a></li> <li><a>Moto</a></li> <li class="fragment" data-fragment-index="1"><a>Bateau</a></li></ul></li> <li><a href="#">Personnage</a> <ul><li><a>Ennemi</a> <ul class="fragment" data-fragment-index="1"><li><a>Monstre</a></li> <li><a>Boss</a></li></ul></li> <li><a>PNJ</a></li></ul></li></ul>',l,f,b=`On peut représenter ça sous forme d'arbre. Animal se décline en Chien et Chat. Véhicule se
			décline en Voiture, Moto, et pourquoi pas Bateau demain. Personnage se décline en Ennemi et
			PNJ, et Ennemi peut lui-même se décliner en Monstre et Boss. C'est ce qu'on appelle l'héritage
			: les enfants héritent des caractéristiques du parent.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("div"),n.innerHTML=m,l=v(),f=C("aside"),f.textContent=b,this.h()},l(u){e=_(u,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1t0g1h3"&&(e.textContent=o),s=d(u),t=_(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-ptm47t"&&(t.textContent=$),i=d(u),n=_(u,"DIV",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-18iior2"&&(n.innerHTML=m),l=d(u),f=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-1azk6ad"&&(f.textContent=b),this.h()},h(){h(e,"class","uppercase"),h(n,"class","tree scale-150"),h(f,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),r(u,n,p),r(u,l,p),r(u,f,p)},p:O,d(u){u&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f))}}}function nl(x){let e,o="L'héritage : le cœur de la POO",s,t,$="Quand <code>Voiture</code> hérite de <code>Véhicule</code> :",i,n,m='<li class="fragment">✅ Elle récupère automatiquement toutes les données de Véhicule</li> <li class="fragment">✅ Elle récupère automatiquement toutes les méthodes de Véhicule</li> <li class="fragment">✅ Elle peut ajouter ses propres données (nbPortes, nbPlaces...)</li> <li class="fragment">✅ Elle peut modifier le comportement hérité si besoin</li>',l,f,b="Écrivez le code une fois, réutilisez-le partout !",u,p,w=`L'héritage c'est ça : on écrit le code une fois dans le parent, et tous les enfants en
			bénéficient. Si on ajoute un attribut "couleur" à Véhicule, Voiture et Moto l'ont
			automatiquement. C'est un gain de temps énorme, et surtout, moins de bugs car moins de code
			dupliqué.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("ul"),n.innerHTML=m,l=v(),f=C("p"),f.textContent=b,u=v(),p=C("aside"),p.textContent=w,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1lb9yfa"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1bwq09e"&&(t.innerHTML=$),i=d(c),n=_(c,"UL",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-xxefp4"&&(n.innerHTML=m),l=d(c),f=_(c,"P",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-74izuf"&&(f.textContent=b),u=d(c),p=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-yxss4w"&&(p.textContent=w),this.h()},h(){h(n,"class","text-2xl"),h(f,"class","fragment text-accent-200 font-bold mt-8"),h(p,"class","notes")},m(c,L){r(c,e,L),r(c,s,L),r(c,t,L),r(c,i,L),r(c,n,L),r(c,l,L),r(c,f,L),r(c,u,L),r(c,p,L)},p:O,d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f),a(u),a(p))}}}function il(x){let e,o="L'abstraction : penser au futur",s,t,$='En POO, généraliser s&#39;appelle <span class="text-important">abstraire, faire une abstraction</span>',i,n,m="C'est anticiper les évolutions de votre code.",l,f,b=`Abstraire, c'est trouver le concept commun entre plusieurs choses. Mais c'est aussi penser au
			futur : qu'est-ce que mon client va me demander demain ?`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("p"),n.textContent=m,l=v(),f=C("aside"),f.textContent=b,this.h()},l(u){e=_(u,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1rpalwv"&&(e.textContent=o),s=d(u),t=_(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1n8l9pz"&&(t.innerHTML=$),i=d(u),n=_(u,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-44luki"&&(n.textContent=m),l=d(u),f=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-1ux1lwj"&&(f.textContent=b),this.h()},h(){h(e,"class","uppercase"),h(n,"class","fragment"),h(f,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),r(u,n,p),r(u,l,p),r(u,f,p)},p:O,d(u){u&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f))}}}function al(x){let e,o="Exemple concret : location de voiture",s,t,$=`<span class="text-important">Situation :</span> On vous demande de coder un système de
			location de voiture.<br/><br/> <span class="fragment">📅 <b>6 mois plus tard :</b> &quot;On aimerait aussi proposer des motos !&quot;</span><br/> <span class="fragment">📅 <b>1 an plus tard :</b> &quot;Et des vélos électriques !&quot;</span><br/> <span class="fragment">📅 <b>2 ans plus tard :</b> &quot;Et des accessoires : sièges auto, porte-vélos, chaînes neige...&quot;</span>`,i,n,m='Si vous aviez anticipé, vous auriez codé "Véhicule" dès le départ !',l,f,b=`C'est un scénario classique. On vous demande de gérer des voitures, mais évidemment, ça va
			évoluer. Motos, vélos, accessoires... Si vous codez "Voiture" partout, vous allez devoir tout
			refaire. Si vous codez "Véhicule" dès le départ, ajouter une Moto c'est 5 minutes.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("p"),n.textContent=m,l=v(),f=C("aside"),f.textContent=b,this.h()},l(u){e=_(u,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1fhmnzb"&&(e.textContent=o),s=d(u),t=_(u,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-18xi090"&&(t.innerHTML=$),i=d(u),n=_(u,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-m4py0l"&&(n.textContent=m),l=d(u),f=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-s0c6jo"&&(f.textContent=b),this.h()},h(){h(e,"class","uppercase"),h(t,"class","text-start text-[28px] p-4 bg-accent-950 font-serif rounded-lg"),h(n,"class","fragment text-accent-200 font-bold mt-6"),h(f,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),r(u,n,p),r(u,l,p),r(u,f,p)},p:O,d(u){u&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f))}}}function rl(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function ul(x){let e,o="Le piège du code non généralisé",s,t,$,i,n="Demain on ajoute les motos... on doit tout dupliquer ? 😱",m,l,f=`Voilà le piège. On a codé tout autour de Voiture. Si on veut ajouter Moto, il faut créer
			louerMoto, retournerMoto, calculerPrixMoto... C'est du code dupliqué, c'est des bugs, c'est un
			cauchemar.`,b;return t=new ie({props:{class:"java",$$slots:{default:[rl]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment),$=v(),i=C("p"),i.textContent=n,m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1h7w9x1"&&(e.textContent=o),s=d(u),S(t.$$.fragment,u),$=d(u),i=_(u,"P",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-1psvyp1"&&(i.textContent=n),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-1drwx1z"&&(l.textContent=f),this.h()},h(){h(e,"class","uppercase"),h(i,"class","fragment text-red-400 font-bold"),h(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),A(t,u,p),r(u,$,p),r(u,i,p),r(u,m,p),r(u,l,p),b=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),t.$set(w)},i(u){b||(j(t.$$.fragment,u),b=!0)},o(u){H(t.$$.fragment,u),b=!1},d(u){u&&(a(e),a(s),a($),a(i),a(m),a(l)),M(t,u)}}}function ol(x){let e=`
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
			`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function cl(x){let e,o="Étape 1 : Créer la hiérarchie Véhicule",s,t,$="On commence par regrouper Voiture et Moto sous Véhicule",i,n,m,l,f="<b>Voiture</b> est un <b>Véhicule</b> → elle hérite de prixJour, disponible, louer()...",b,u,p=`Première étape : on crée Véhicule qui contient tout ce qui est commun. Voiture et Moto
			héritent de Véhicule. Donc Voiture EST UN Véhicule. Elle a automatiquement prixJour,
			disponible, km, immatriculation. Elle a aussi les méthodes louer() et retourner() sans les
			recoder.`,w;return n=new Ie({props:{$$slots:{default:[ol]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),T(n.$$.fragment),m=v(),l=C("p"),l.innerHTML=f,b=v(),u=C("aside"),u.textContent=p,this.h()},l(c){e=_(c,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1uw0g5w"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1ko5xlx"&&(t.textContent=$),i=d(c),S(n.$$.fragment,c),m=d(c),l=_(c,"P",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-1hq4dgl"&&(l.innerHTML=f),b=d(c),u=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-1p5u5s8"&&(u.textContent=p),this.h()},h(){h(e,"class","uppercase"),h(l,"class","fragment text-accent-200"),h(u,"class","notes")},m(c,L){r(c,e,L),r(c,s,L),r(c,t,L),r(c,i,L),A(n,c,L),r(c,m,L),r(c,l,L),r(c,b,L),r(c,u,L),w=!0},p(c,L){const E={};L&1&&(E.$$scope={dirty:L,ctx:c}),n.$set(E)},i(c){w||(j(n.$$.fragment,c),w=!0)},o(c){H(n.$$.fragment,c),w=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(l),a(b),a(u)),M(n,c)}}}function fl(x){let e=`
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
			`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function $l(x){let e=`
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
			`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function pl(x){let e,o="Étape 2 : Ajouter les Accessoires",s,t,$="Les accessoires ont aussi un prix et une disponibilité...",i,n,m,l,f,b,u,p="⚠️ prixJour et disponible sont dupliqués dans Véhicule ET Accessoire !",w,c,L=`On ajoute les accessoires. SiègeAuto et PorteVelo héritent de Accessoire. Mais attendez...
			prixJour et disponible sont dans Véhicule ET dans Accessoire. C'est de la duplication ! On
			peut faire mieux.`,E;return m=new Ie({props:{$$slots:{default:[fl]},$$scope:{ctx:x}}}),f=new Ie({props:{$$slots:{default:[$l]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("div"),T(m.$$.fragment),l=v(),T(f.$$.fragment),b=v(),u=C("p"),u.textContent=p,w=v(),c=C("aside"),c.textContent=L,this.h()},l(q){e=_(q,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-dpgmf6"&&(e.textContent=o),s=d(q),t=_(q,"P",{"data-svelte-h":!0}),g(t)!=="svelte-447yeq"&&(t.textContent=$),i=d(q),n=_(q,"DIV",{class:!0});var V=ue(n);S(m.$$.fragment,V),l=d(V),S(f.$$.fragment,V),V.forEach(a),b=d(q),u=_(q,"P",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-138h9qb"&&(u.textContent=p),w=d(q),c=_(q,"ASIDE",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-6rnzlf"&&(c.textContent=L),this.h()},h(){h(e,"class","uppercase"),h(n,"class","flex flex-row justify-center items-start gap-8"),h(u,"class","fragment text-red-400 font-bold mt-4"),h(c,"class","notes")},m(q,V){r(q,e,V),r(q,s,V),r(q,t,V),r(q,i,V),r(q,n,V),A(m,n,null),ee(n,l),A(f,n,null),r(q,b,V),r(q,u,V),r(q,w,V),r(q,c,V),E=!0},p(q,V){const B={};V&1&&(B.$$scope={dirty:V,ctx:q}),m.$set(B);const Q={};V&1&&(Q.$$scope={dirty:V,ctx:q}),f.$set(Q)},i(q){E||(j(m.$$.fragment,q),j(f.$$.fragment,q),E=!0)},o(q){H(m.$$.fragment,q),H(f.$$.fragment,q),E=!1},d(q){q&&(a(e),a(s),a(t),a(i),a(n),a(b),a(u),a(w),a(c)),M(m),M(f)}}}function ml(x){let e=`
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
			`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function dl(x){let e,o="Étape 3 : Abstraire encore plus avec Louable",s,t,$='Véhicule et Accessoire ont des points communs → on crée <span class="text-important">Louable</span>',i,n,m,l,f=`On crée Louable qui contient prixJour, disponible, et les méthodes louer, retourner,
			calculerPrix. Véhicule hérite de Louable, et Accessoire aussi. Du coup Voiture hérite de
			Véhicule qui hérite de Louable : Voiture a TOUT !`,b;return n=new Ie({props:{$$slots:{default:[ml]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),T(n.$$.fragment),m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-14ipspf"&&(e.textContent=o),s=d(u),t=_(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-qurtdv"&&(t.innerHTML=$),i=d(u),S(n.$$.fragment,u),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-hsu0uh"&&(l.textContent=f),this.h()},h(){h(e,"class","uppercase"),h(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),A(n,u,p),r(u,m,p),r(u,l,p),b=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),n.$set(w)},i(u){b||(j(n.$$.fragment,u),b=!0)},o(u){H(n.$$.fragment,u),b=!1},d(u){u&&(a(e),a(s),a(t),a(i),a(m),a(l)),M(n,u)}}}function vl(x){let e,o="Visualisons la chaîne d'héritage",s,t,$="Une <b>Voiture</b> c&#39;est quoi maintenant ?",i,n,m=`<div class="fragment p-4 bg-green-950 rounded-lg mb-2"><b>Voiture</b> hérite de <b>Véhicule</b></div> <div class="fragment text-4xl">↓</div> <div class="fragment p-4 bg-blue-950 rounded-lg mb-2"><b>Véhicule</b> hérite de <b>Louable</b></div> <div class="fragment text-4xl">↓</div> <div class="fragment p-4 bg-accent-950 rounded-lg">Donc <b>Voiture</b> a : prixJour, disponible, louer(), retourner(), km, immatriculation, nbPortes,
				nbPlaces</div>`,l,f,b="On n'a codé louer() qu'une seule fois, dans Louable !",u,p,w=`Suivons la chaîne. Voiture hérite de Véhicule. Véhicule hérite de Louable. Donc Voiture a tout
			: les attributs de Louable, plus ceux de Véhicule, plus les siens. Et surtout, la méthode
			louer() n'est codée qu'une seule fois, dans Louable. Voiture, Moto, SiègeAuto, PorteVelo...
			tous peuvent être loués avec le même code !`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("div"),n.innerHTML=m,l=v(),f=C("p"),f.textContent=b,u=v(),p=C("aside"),p.textContent=w,this.h()},l(c){e=_(c,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-13fx6rx"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1pgak5l"&&(t.innerHTML=$),i=d(c),n=_(c,"DIV",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-xx6qv0"&&(n.innerHTML=m),l=d(c),f=_(c,"P",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-mgjp0b"&&(f.textContent=b),u=d(c),p=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-b8vxpx"&&(p.textContent=w),this.h()},h(){h(e,"class","uppercase"),h(n,"class","flex flex-col items-center mt-8 text-2xl"),h(f,"class","fragment text-accent-200 font-bold mt-6"),h(p,"class","notes")},m(c,L){r(c,e,L),r(c,s,L),r(c,t,L),r(c,i,L),r(c,n,L),r(c,l,L),r(c,f,L),r(c,u,L),r(c,p,L)},p:O,d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f),a(u),a(p))}}}function xl(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function _l(x){let e,o="Le code devient simple",s,t,$,i,n=`✅ Une seule méthode pour tout louer<br/>
			✅ Ajouter un nouveau type = quelques lignes<br/>
			✅ Zéro duplication de code`,m,l,f=`Regardez la puissance. Une seule méthode louer() qui fonctionne pour tout. Demain on ajoute
			VeloElectrique ? 3 lignes de code. Il hérite de tout le reste. C'est ça la vraie puissance de
			la POO : écrire moins, faire plus.`,b;return t=new ie({props:{class:"java",$$slots:{default:[xl]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment),$=v(),i=C("p"),i.innerHTML=n,m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1bcwfrg"&&(e.textContent=o),s=d(u),S(t.$$.fragment,u),$=d(u),i=_(u,"P",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-fazfoj"&&(i.innerHTML=n),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-enkna"&&(l.textContent=f),this.h()},h(){h(e,"class","uppercase"),h(i,"class","fragment text-green-400 font-bold"),h(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),A(t,u,p),r(u,$,p),r(u,i,p),r(u,m,p),r(u,l,p),b=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),t.$set(w)},i(u){b||(j(t.$$.fragment,u),b=!0)},o(u){H(t.$$.fragment,u),b=!1},d(u){u&&(a(e),a(s),a($),a(i),a(m),a(l)),M(t,u)}}}function Cl(x){let e,o="Le refactoring",s,t,$='L&#39;opération que l&#39;on vient de voir s&#39;appelle un <span class="text-important">refactoring</span>',i,n,m="C'est réorganiser le code sans changer son comportement.",l,f,b=`Si vous l&#39;aviez fait dès le départ, vous auriez gagné plus de temps que si vous devez le faire
			plus tard, c&#39;est une <u>certitude</u> !`,u,p,w=`Le refactoring, c'est améliorer la structure du code sans changer ce qu'il fait. C'est
			toujours plus facile de bien faire dès le début que de réparer après. Un code bien conçu,
			c'est des heures de debug en moins.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("p"),n.textContent=m,l=v(),f=C("p"),f.innerHTML=b,u=v(),p=C("aside"),p.textContent=w,this.h()},l(c){e=_(c,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-t8lx1u"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),g(t)!=="svelte-u769cg"&&(t.innerHTML=$),i=d(c),n=_(c,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1nmzwcc"&&(n.textContent=m),l=d(c),f=_(c,"P",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-b3fier"&&(f.innerHTML=b),u=d(c),p=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-v3296a"&&(p.textContent=w),this.h()},h(){h(e,"class","uppercase"),h(n,"class","fragment"),h(f,"class","fragment"),h(p,"class","notes")},m(c,L){r(c,e,L),r(c,s,L),r(c,t,L),r(c,i,L),r(c,n,L),r(c,l,L),r(c,f,L),r(c,u,L),r(c,p,L)},p:O,d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f),a(u),a(p))}}}function hl(x){let e,o="BUILD vs RUN",s,t,$="Le temps d'implémentation (BUILD) augmente si vous faites beaucoup de POO",i,n,m="...mais la maintenance (RUN) coûte moins cher !",l,f,b='<div class="p-4 bg-red-950 rounded-lg"><h4 class="text-red-400">❌ Code vite fait</h4> <ul class="text-xl"><li>Rapide à écrire</li> <li>Difficile à maintenir</li> <li>Bugs fréquents</li> <li>Évolutions coûteuses</li></ul></div> <div class="p-4 bg-green-950 rounded-lg"><h4 class="text-green-400">✅ Code bien conçu</h4> <ul class="text-xl"><li>Plus long à écrire</li> <li>Facile à maintenir</li> <li>Moins de bugs</li> <li>Évolutions simples</li></ul></div>',u,p,w=`En entreprise, on parle de BUILD (le développement initial) et de RUN (la maintenance). Un
			code bien conçu coûte plus cher au BUILD mais beaucoup moins au RUN. Et le RUN, c'est souvent
			80% du coût total d'un projet !`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("p"),n.textContent=m,l=v(),f=C("div"),f.innerHTML=b,u=v(),p=C("aside"),p.textContent=w,this.h()},l(c){e=_(c,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-bv5mk1"&&(e.textContent=o),s=d(c),t=_(c,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-10nhqsg"&&(t.textContent=$),i=d(c),n=_(c,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-ywkeo"&&(n.textContent=m),l=d(c),f=_(c,"DIV",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-4svqpn"&&(f.innerHTML=b),u=d(c),p=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-wpatcb"&&(p.textContent=w),this.h()},h(){h(e,"class","uppercase"),h(t,"class","text-important"),h(n,"class","fragment"),h(f,"class","fragment grid grid-cols-2 gap-8 mt-8"),h(p,"class","notes")},m(c,L){r(c,e,L),r(c,s,L),r(c,t,L),r(c,i,L),r(c,n,L),r(c,l,L),r(c,f,L),r(c,u,L),r(c,p,L)},p:O,d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f),a(u),a(p))}}}function gl(x){let e,o="L'équilibre à trouver",s,t,$="Un <i>bon</i> ingénieur logiciel sait jusqu&#39;à quel niveau il convient d&#39;abstraire",i,n,m='<li class="fragment">❌ <b>Pas assez d&#39;abstraction :</b> vous devez tout casser pour ajouter une fonctionnalité</li> <li class="fragment">❌ <b>Trop d&#39;abstraction :</b> votre client paie pour du code qu&#39;il n&#39;utilisera jamais</li>',l,f,b="En entreprise, tout est question d'équilibre et vient avec l'expérience.",u,p,w=`C'est un équilibre à trouver. Pas assez d'abstraction, et chaque évolution est un cauchemar.
			Trop d'abstraction, et vous passez des semaines à coder des trucs inutiles. Ça vient avec
			l'expérience, avec les projets, avec les erreurs qu'on fait.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("ul"),n.innerHTML=m,l=v(),f=C("p"),f.textContent=b,u=v(),p=C("aside"),p.textContent=w,this.h()},l(c){e=_(c,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1082o8n"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1yhe1kd"&&(t.innerHTML=$),i=d(c),n=_(c,"UL",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1veku0x"&&(n.innerHTML=m),l=d(c),f=_(c,"P",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-b8ucny"&&(f.textContent=b),u=d(c),p=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-11bqu54"&&(p.textContent=w),this.h()},h(){h(e,"class","uppercase"),h(n,"class","mt-8"),h(f,"class","fragment mt-8"),h(p,"class","notes")},m(c,L){r(c,e,L),r(c,s,L),r(c,t,L),r(c,i,L),r(c,n,L),r(c,l,L),r(c,f,L),r(c,u,L),r(c,p,L)},p:O,d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f),a(u),a(p))}}}function bl(x){let e,o="Dans ce module",s,t,$="Faites le plus de zèle possible, exagérez !",i,n,m="C'est en allant trop loin qu'on apprend où sont les limites.",l,f,b="Vous apprendrez à doser en entreprise, avec de vrais projets et de vraies contraintes.",u,p,w=`Dans ce module, je vous encourage à en faire trop. Abstraire partout, hériter de tout. C'est
			comme ça qu'on apprend où sont les limites. En entreprise, vous aurez des contraintes de
			temps, de budget. Là, vous apprendrez à doser. Ici, c'est le moment d'expérimenter.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("p"),n.textContent=m,l=v(),f=C("p"),f.textContent=b,u=v(),p=C("aside"),p.textContent=w,this.h()},l(c){e=_(c,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-x5naxz"&&(e.textContent=o),s=d(c),t=_(c,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1as3wu1"&&(t.textContent=$),i=d(c),n=_(c,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-lvdult"&&(n.textContent=m),l=d(c),f=_(c,"P",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-1akob0d"&&(f.textContent=b),u=d(c),p=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-kluukh"&&(p.textContent=w),this.h()},h(){h(e,"class","uppercase"),h(t,"class","text-important text-4xl"),h(n,"class","fragment mt-8 text-2xl"),h(f,"class","fragment text-2xl"),h(p,"class","notes")},m(c,L){r(c,e,L),r(c,s,L),r(c,t,L),r(c,i,L),r(c,n,L),r(c,l,L),r(c,f,L),r(c,u,L),r(c,p,L)},p:O,d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f),a(u),a(p))}}}function Ll(x){let e,o="Récapitulatif",s,t,$='<div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">📦 RANGER</h4> <p class="text-xl">Données + méthodes<br/>dans un même objet</p></div> <div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">🔒 PROTÉGER</h4> <p class="text-xl">Chaque méthode n&#39;accède<br/>qu&#39;à son objet</p></div> <div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">🌳 GÉNÉRALISER</h4> <p class="text-xl">Héritage et abstraction<br/>pour réutiliser le code</p></div>',i,n,m=`On récapitule. La POO c'est 3 piliers. Ranger : on met ensemble ce qui va ensemble. Protéger :
			chaque méthode ne touche qu'à son objet, le compilateur vous aide. Généraliser : on écrit le
			code une fois, on le réutilise partout grâce à l'héritage.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("div"),t.innerHTML=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-j5vxp9"&&(e.textContent=o),s=d(l),t=_(l,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-acu1zb"&&(t.innerHTML=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-17zzt5h"&&(n.textContent=m),this.h()},h(){h(t,"class","flex flex-row justify-around items-start mt-8"),h(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function wl(x){let e,o="La POO, c'est quoi au final ?",s,t,$="Vous venez d'être confronté aux concepts fondamentaux de la POO :",i,n,m='<li><span class="text-important">L&#39;encapsulation</span> : ranger et protéger les données</li> <li><span class="text-important">L&#39;abstraction</span> : généraliser les concepts</li> <li><span class="text-important">L&#39;héritage</span> : réutiliser le code des parents</li>',l,f,b="Nous allons voir ces concepts en détail dans les chapitres suivants.",u,p,w=`On a vu les bases. Encapsulation, abstraction, héritage. Ce sont les piliers de la POO, et on
			va les approfondir tout au long du module. Chaque chapitre va détailler un de ces concepts.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("ul"),n.innerHTML=m,l=v(),f=C("p"),f.textContent=b,u=v(),p=C("aside"),p.textContent=w,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-5i67l6"&&(e.textContent=o),s=d(c),t=_(c,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1vfopav"&&(t.textContent=$),i=d(c),n=_(c,"UL",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-i42s8"&&(n.innerHTML=m),l=d(c),f=_(c,"P",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-ko3lge"&&(f.textContent=b),u=d(c),p=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-b4p3e"&&(p.textContent=w),this.h()},h(){h(t,"class","fragment"),h(n,"class","fragment text-2xl mt-4"),h(f,"class","fragment mt-8"),h(p,"class","notes")},m(c,L){r(c,e,L),r(c,s,L),r(c,t,L),r(c,i,L),r(c,n,L),r(c,l,L),r(c,f,L),r(c,u,L),r(c,p,L)},p:O,d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f),a(u),a(p))}}}function ql(x){let e,o="Retenez ceci",s,t,$='La POO est un <span class="text-important">&quot;outil&quot;</span>.',i,n,m=`Si vous faites du Java, même en codant mal, vous faites de la POO compte tenu de la nature du
			langage.`,l,f,b=`Si la programmation n&#39;est qu&#39;une suite de blocs de code tels des <b>légos</b>, la POO, c&#39;est
			fabriquer des blocs <span class="text-important">intelligemment</span>
			que vous réutilisez, peu importe que vous construisiez un pont ou une maison.`,u,p,w=`La POO c'est un outil, pas une obligation. Mais c'est un outil puissant. En Java, vous faites
			de la POO que vous le vouliez ou non, c'est la nature du langage. L'idée c'est de fabriquer
			des briques réutilisables. Comme des légos bien conçus. Une brique "Véhicule" peut servir pour
			une voiture aujourd'hui, une moto demain, un vaisseau spatial dans 5 ans.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("p"),n.textContent=m,l=v(),f=C("p"),f.innerHTML=b,u=v(),p=C("aside"),p.textContent=w,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-79cey5"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),g(t)!=="svelte-i0a1q0"&&(t.innerHTML=$),i=d(c),n=_(c,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-18j8tnm"&&(n.textContent=m),l=d(c),f=_(c,"P",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-1ugi8k9"&&(f.innerHTML=b),u=d(c),p=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-kw89mq"&&(p.textContent=w),this.h()},h(){h(n,"class","fragment"),h(f,"class","fragment mt-8 text-2xl bg-accent-950 p-4 rounded-lg"),h(p,"class","notes")},m(c,L){r(c,e,L),r(c,s,L),r(c,t,L),r(c,i,L),r(c,n,L),r(c,l,L),r(c,f,L),r(c,u,L),r(c,p,L)},p:O,d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f),a(u),a(p))}}}function Pl(x){let e,o="À vous de jouer !",s,t,$="Dans les prochains chapitres, nous allons :",i,n,m='<li class="fragment">📦 Approfondir l&#39;<b>encapsulation</b> et la visibilité</li> <li class="fragment">🔗 Maîtriser l&#39;<b>héritage</b> et le polymorphisme</li> <li class="fragment">📋 Découvrir les <b>interfaces</b> et les classes abstraites</li> <li class="fragment">🎨 Apprendre les <b>Design Patterns</b> classiques</li>',l,f,b=`C'est parti pour la suite ! On va approfondir chaque concept. L'encapsulation, l'héritage, les
			interfaces, et même les Design Patterns. À la fin du module, vous saurez concevoir du code
			propre, évolutif, maintenable.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("ul"),n.innerHTML=m,l=v(),f=C("aside"),f.textContent=b,this.h()},l(u){e=_(u,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-cgpepy"&&(e.textContent=o),s=d(u),t=_(u,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-16xre1k"&&(t.textContent=$),i=d(u),n=_(u,"UL",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-m1w35p"&&(n.innerHTML=m),l=d(u),f=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-1kgc7yy"&&(f.textContent=b),this.h()},h(){h(t,"class","text-3xl mt-8"),h(n,"class","text-2xl mt-4"),h(f,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),r(u,n,p),r(u,l,p),r(u,f,p)},p:O,d(u){u&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f))}}}function Ml(x){let e,o,s,t,$,i,n,m,l,f,b,u,p,w,c,L,E,q,V,B,Q,Y,D,F,ne,U,le,ae,fe,re,pe,oe,$e,ce,me,R,te,J,se,de,he,ve,ge,xe,be,z,W,k,X,Le,we,qe,Pe,Me,He,I,K,ke,je,ze,Ae,Oe,Se,Ue,Te,Re,Ee,Je,De,Qe,Ve,Ke,Ge,Xe;return e=new N({props:{$$slots:{default:[Ms]},$$scope:{ctx:x}}}),s=new N({props:{$$slots:{default:[Hs]},$$scope:{ctx:x}}}),$=new N({props:{$$slots:{default:[js]},$$scope:{ctx:x}}}),n=new N({props:{data_background_color:"#1a1a2e",$$slots:{default:[As]},$$scope:{ctx:x}}}),l=new N({props:{$$slots:{default:[Ts]},$$scope:{ctx:x}}}),b=new N({props:{$$slots:{default:[Is]},$$scope:{ctx:x}}}),p=new N({props:{$$slots:{default:[Ds]},$$scope:{ctx:x}}}),c=new N({props:{$$slots:{default:[Vs]},$$scope:{ctx:x}}}),E=new N({props:{data_background_color:"#1a1a2e",$$slots:{default:[ks]},$$scope:{ctx:x}}}),V=new N({props:{$$slots:{default:[Os]},$$scope:{ctx:x}}}),Q=new N({props:{$$slots:{default:[Rs]},$$scope:{ctx:x}}}),D=new N({props:{$$slots:{default:[Ns]},$$scope:{ctx:x}}}),ne=new N({props:{$$slots:{default:[Gs]},$$scope:{ctx:x}}}),le=new N({props:{$$slots:{default:[Xs]},$$scope:{ctx:x}}}),fe=new N({props:{$$slots:{default:[Ys]},$$scope:{ctx:x}}}),pe=new N({props:{data_background_color:"#1a1a2e",$$slots:{default:[Ws]},$$scope:{ctx:x}}}),$e=new N({props:{$$slots:{default:[Zs]},$$scope:{ctx:x}}}),me=new N({props:{$$slots:{default:[ys]},$$scope:{ctx:x}}}),te=new N({props:{$$slots:{default:[sl]},$$scope:{ctx:x}}}),se=new N({props:{$$slots:{default:[ll]},$$scope:{ctx:x}}}),he=new N({props:{$$slots:{default:[nl]},$$scope:{ctx:x}}}),ge=new N({props:{$$slots:{default:[il]},$$scope:{ctx:x}}}),be=new N({props:{$$slots:{default:[al]},$$scope:{ctx:x}}}),W=new N({props:{$$slots:{default:[ul]},$$scope:{ctx:x}}}),X=new N({props:{$$slots:{default:[cl]},$$scope:{ctx:x}}}),we=new N({props:{$$slots:{default:[pl]},$$scope:{ctx:x}}}),Pe=new N({props:{$$slots:{default:[dl]},$$scope:{ctx:x}}}),He=new N({props:{$$slots:{default:[vl]},$$scope:{ctx:x}}}),K=new N({props:{$$slots:{default:[_l]},$$scope:{ctx:x}}}),je=new N({props:{data_background_color:"#00353F",$$slots:{default:[Cl]},$$scope:{ctx:x}}}),Ae=new N({props:{data_background_color:"#00353F",$$slots:{default:[hl]},$$scope:{ctx:x}}}),Se=new N({props:{data_background_color:"#00353F",$$slots:{default:[gl]},$$scope:{ctx:x}}}),Te=new N({props:{data_background_color:"#00353F",$$slots:{default:[bl]},$$scope:{ctx:x}}}),Ee=new N({props:{$$slots:{default:[Ll]},$$scope:{ctx:x}}}),De=new N({props:{$$slots:{default:[wl]},$$scope:{ctx:x}}}),Ve=new N({props:{$$slots:{default:[ql]},$$scope:{ctx:x}}}),Ge=new N({props:{$$slots:{default:[Pl]},$$scope:{ctx:x}}}),{c(){T(e.$$.fragment),o=v(),T(s.$$.fragment),t=v(),T($.$$.fragment),i=v(),T(n.$$.fragment),m=v(),T(l.$$.fragment),f=v(),T(b.$$.fragment),u=v(),T(p.$$.fragment),w=v(),T(c.$$.fragment),L=v(),T(E.$$.fragment),q=v(),T(V.$$.fragment),B=v(),T(Q.$$.fragment),Y=v(),T(D.$$.fragment),F=v(),T(ne.$$.fragment),U=v(),T(le.$$.fragment),ae=v(),T(fe.$$.fragment),re=v(),T(pe.$$.fragment),oe=v(),T($e.$$.fragment),ce=v(),T(me.$$.fragment),R=v(),T(te.$$.fragment),J=v(),T(se.$$.fragment),de=v(),T(he.$$.fragment),ve=v(),T(ge.$$.fragment),xe=v(),T(be.$$.fragment),z=v(),T(W.$$.fragment),k=v(),T(X.$$.fragment),Le=v(),T(we.$$.fragment),qe=v(),T(Pe.$$.fragment),Me=v(),T(He.$$.fragment),I=v(),T(K.$$.fragment),ke=v(),T(je.$$.fragment),ze=v(),T(Ae.$$.fragment),Oe=v(),T(Se.$$.fragment),Ue=v(),T(Te.$$.fragment),Re=v(),T(Ee.$$.fragment),Je=v(),T(De.$$.fragment),Qe=v(),T(Ve.$$.fragment),Ke=v(),T(Ge.$$.fragment)},l(P){S(e.$$.fragment,P),o=d(P),S(s.$$.fragment,P),t=d(P),S($.$$.fragment,P),i=d(P),S(n.$$.fragment,P),m=d(P),S(l.$$.fragment,P),f=d(P),S(b.$$.fragment,P),u=d(P),S(p.$$.fragment,P),w=d(P),S(c.$$.fragment,P),L=d(P),S(E.$$.fragment,P),q=d(P),S(V.$$.fragment,P),B=d(P),S(Q.$$.fragment,P),Y=d(P),S(D.$$.fragment,P),F=d(P),S(ne.$$.fragment,P),U=d(P),S(le.$$.fragment,P),ae=d(P),S(fe.$$.fragment,P),re=d(P),S(pe.$$.fragment,P),oe=d(P),S($e.$$.fragment,P),ce=d(P),S(me.$$.fragment,P),R=d(P),S(te.$$.fragment,P),J=d(P),S(se.$$.fragment,P),de=d(P),S(he.$$.fragment,P),ve=d(P),S(ge.$$.fragment,P),xe=d(P),S(be.$$.fragment,P),z=d(P),S(W.$$.fragment,P),k=d(P),S(X.$$.fragment,P),Le=d(P),S(we.$$.fragment,P),qe=d(P),S(Pe.$$.fragment,P),Me=d(P),S(He.$$.fragment,P),I=d(P),S(K.$$.fragment,P),ke=d(P),S(je.$$.fragment,P),ze=d(P),S(Ae.$$.fragment,P),Oe=d(P),S(Se.$$.fragment,P),Ue=d(P),S(Te.$$.fragment,P),Re=d(P),S(Ee.$$.fragment,P),Je=d(P),S(De.$$.fragment,P),Qe=d(P),S(Ve.$$.fragment,P),Ke=d(P),S(Ge.$$.fragment,P)},m(P,G){A(e,P,G),r(P,o,G),A(s,P,G),r(P,t,G),A($,P,G),r(P,i,G),A(n,P,G),r(P,m,G),A(l,P,G),r(P,f,G),A(b,P,G),r(P,u,G),A(p,P,G),r(P,w,G),A(c,P,G),r(P,L,G),A(E,P,G),r(P,q,G),A(V,P,G),r(P,B,G),A(Q,P,G),r(P,Y,G),A(D,P,G),r(P,F,G),A(ne,P,G),r(P,U,G),A(le,P,G),r(P,ae,G),A(fe,P,G),r(P,re,G),A(pe,P,G),r(P,oe,G),A($e,P,G),r(P,ce,G),A(me,P,G),r(P,R,G),A(te,P,G),r(P,J,G),A(se,P,G),r(P,de,G),A(he,P,G),r(P,ve,G),A(ge,P,G),r(P,xe,G),A(be,P,G),r(P,z,G),A(W,P,G),r(P,k,G),A(X,P,G),r(P,Le,G),A(we,P,G),r(P,qe,G),A(Pe,P,G),r(P,Me,G),A(He,P,G),r(P,I,G),A(K,P,G),r(P,ke,G),A(je,P,G),r(P,ze,G),A(Ae,P,G),r(P,Oe,G),A(Se,P,G),r(P,Ue,G),A(Te,P,G),r(P,Re,G),A(Ee,P,G),r(P,Je,G),A(De,P,G),r(P,Qe,G),A(Ve,P,G),r(P,Ke,G),A(Ge,P,G),Xe=!0},p(P,G){const Ye={};G&1&&(Ye.$$scope={dirty:G,ctx:P}),e.$set(Ye);const We={};G&1&&(We.$$scope={dirty:G,ctx:P}),s.$set(We);const Ze={};G&1&&(Ze.$$scope={dirty:G,ctx:P}),$.$set(Ze);const ye={};G&1&&(ye.$$scope={dirty:G,ctx:P}),n.$set(ye);const et={};G&1&&(et.$$scope={dirty:G,ctx:P}),l.$set(et);const tt={};G&1&&(tt.$$scope={dirty:G,ctx:P}),b.$set(tt);const st={};G&1&&(st.$$scope={dirty:G,ctx:P}),p.$set(st);const nt={};G&1&&(nt.$$scope={dirty:G,ctx:P}),c.$set(nt);const it={};G&1&&(it.$$scope={dirty:G,ctx:P}),E.$set(it);const at={};G&1&&(at.$$scope={dirty:G,ctx:P}),V.$set(at);const rt={};G&1&&(rt.$$scope={dirty:G,ctx:P}),Q.$set(rt);const ut={};G&1&&(ut.$$scope={dirty:G,ctx:P}),D.$set(ut);const ot={};G&1&&(ot.$$scope={dirty:G,ctx:P}),ne.$set(ot);const ct={};G&1&&(ct.$$scope={dirty:G,ctx:P}),le.$set(ct);const ft={};G&1&&(ft.$$scope={dirty:G,ctx:P}),fe.$set(ft);const $t={};G&1&&($t.$$scope={dirty:G,ctx:P}),pe.$set($t);const pt={};G&1&&(pt.$$scope={dirty:G,ctx:P}),$e.$set(pt);const mt={};G&1&&(mt.$$scope={dirty:G,ctx:P}),me.$set(mt);const dt={};G&1&&(dt.$$scope={dirty:G,ctx:P}),te.$set(dt);const vt={};G&1&&(vt.$$scope={dirty:G,ctx:P}),se.$set(vt);const xt={};G&1&&(xt.$$scope={dirty:G,ctx:P}),he.$set(xt);const _t={};G&1&&(_t.$$scope={dirty:G,ctx:P}),ge.$set(_t);const Ct={};G&1&&(Ct.$$scope={dirty:G,ctx:P}),be.$set(Ct);const ht={};G&1&&(ht.$$scope={dirty:G,ctx:P}),W.$set(ht);const gt={};G&1&&(gt.$$scope={dirty:G,ctx:P}),X.$set(gt);const bt={};G&1&&(bt.$$scope={dirty:G,ctx:P}),we.$set(bt);const Lt={};G&1&&(Lt.$$scope={dirty:G,ctx:P}),Pe.$set(Lt);const wt={};G&1&&(wt.$$scope={dirty:G,ctx:P}),He.$set(wt);const qt={};G&1&&(qt.$$scope={dirty:G,ctx:P}),K.$set(qt);const Pt={};G&1&&(Pt.$$scope={dirty:G,ctx:P}),je.$set(Pt);const Mt={};G&1&&(Mt.$$scope={dirty:G,ctx:P}),Ae.$set(Mt);const Ht={};G&1&&(Ht.$$scope={dirty:G,ctx:P}),Se.$set(Ht);const jt={};G&1&&(jt.$$scope={dirty:G,ctx:P}),Te.$set(jt);const At={};G&1&&(At.$$scope={dirty:G,ctx:P}),Ee.$set(At);const St={};G&1&&(St.$$scope={dirty:G,ctx:P}),De.$set(St);const Tt={};G&1&&(Tt.$$scope={dirty:G,ctx:P}),Ve.$set(Tt);const Et={};G&1&&(Et.$$scope={dirty:G,ctx:P}),Ge.$set(Et)},i(P){Xe||(j(e.$$.fragment,P),j(s.$$.fragment,P),j($.$$.fragment,P),j(n.$$.fragment,P),j(l.$$.fragment,P),j(b.$$.fragment,P),j(p.$$.fragment,P),j(c.$$.fragment,P),j(E.$$.fragment,P),j(V.$$.fragment,P),j(Q.$$.fragment,P),j(D.$$.fragment,P),j(ne.$$.fragment,P),j(le.$$.fragment,P),j(fe.$$.fragment,P),j(pe.$$.fragment,P),j($e.$$.fragment,P),j(me.$$.fragment,P),j(te.$$.fragment,P),j(se.$$.fragment,P),j(he.$$.fragment,P),j(ge.$$.fragment,P),j(be.$$.fragment,P),j(W.$$.fragment,P),j(X.$$.fragment,P),j(we.$$.fragment,P),j(Pe.$$.fragment,P),j(He.$$.fragment,P),j(K.$$.fragment,P),j(je.$$.fragment,P),j(Ae.$$.fragment,P),j(Se.$$.fragment,P),j(Te.$$.fragment,P),j(Ee.$$.fragment,P),j(De.$$.fragment,P),j(Ve.$$.fragment,P),j(Ge.$$.fragment,P),Xe=!0)},o(P){H(e.$$.fragment,P),H(s.$$.fragment,P),H($.$$.fragment,P),H(n.$$.fragment,P),H(l.$$.fragment,P),H(b.$$.fragment,P),H(p.$$.fragment,P),H(c.$$.fragment,P),H(E.$$.fragment,P),H(V.$$.fragment,P),H(Q.$$.fragment,P),H(D.$$.fragment,P),H(ne.$$.fragment,P),H(le.$$.fragment,P),H(fe.$$.fragment,P),H(pe.$$.fragment,P),H($e.$$.fragment,P),H(me.$$.fragment,P),H(te.$$.fragment,P),H(se.$$.fragment,P),H(he.$$.fragment,P),H(ge.$$.fragment,P),H(be.$$.fragment,P),H(W.$$.fragment,P),H(X.$$.fragment,P),H(we.$$.fragment,P),H(Pe.$$.fragment,P),H(He.$$.fragment,P),H(K.$$.fragment,P),H(je.$$.fragment,P),H(Ae.$$.fragment,P),H(Se.$$.fragment,P),H(Te.$$.fragment,P),H(Ee.$$.fragment,P),H(De.$$.fragment,P),H(Ve.$$.fragment,P),H(Ge.$$.fragment,P),Xe=!1},d(P){P&&(a(o),a(t),a(i),a(m),a(f),a(u),a(w),a(L),a(q),a(B),a(Y),a(F),a(U),a(ae),a(re),a(oe),a(ce),a(R),a(J),a(de),a(ve),a(xe),a(z),a(k),a(Le),a(qe),a(Me),a(I),a(ke),a(ze),a(Oe),a(Ue),a(Re),a(Je),a(Qe),a(Ke)),M(e,P),M(s,P),M($,P),M(n,P),M(l,P),M(b,P),M(p,P),M(c,P),M(E,P),M(V,P),M(Q,P),M(D,P),M(ne,P),M(le,P),M(fe,P),M(pe,P),M($e,P),M(me,P),M(te,P),M(se,P),M(he,P),M(ge,P),M(be,P),M(W,P),M(X,P),M(we,P),M(Pe,P),M(He,P),M(K,P),M(je,P),M(Ae,P),M(Se,P),M(Te,P),M(Ee,P),M(De,P),M(Ve,P),M(Ge,P)}}}function Hl(x){let e,o;return e=new N({props:{$$slots:{default:[Ml]},$$scope:{ctx:x}}}),{c(){T(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,t){A(e,s,t),o=!0},p(s,[t]){const $={};t&1&&($.$$scope={dirty:t,ctx:s}),e.$set($)},i(s){o||(j(e.$$.fragment,s),o=!0)},o(s){H(e.$$.fragment,s),o=!1},d(s){M(e,s)}}}class jl extends Be{constructor(e){super(),Fe(this,e,null,Hl,Ne,{})}}function Al(x){let e,o="Et si on ne veut pas hériter ?",s,t,$="L'héritage, c'est puissant... mais pas toujours adapté.",i,n,m='<p class="text-2xl">🤔 Une Voiture <b>est un</b> Moteur ?</p> <p class="text-red-400 text-3xl fragment">❌ Non !</p>',l,f,b='<p class="text-2xl">🤔 Une Voiture <b>a un</b> Moteur ?</p> <p class="text-green-400 text-3xl fragment">✅ Oui !</p>',u,p,w='C&#39;est la <span class="text-important">composition</span> !';return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("div"),n.innerHTML=m,l=v(),f=C("div"),f.innerHTML=b,u=v(),p=C("p"),p.innerHTML=w,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-kyeugj"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),g(t)!=="svelte-135l6z7"&&(t.textContent=$),i=d(c),n=_(c,"DIV",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-bjhwhv"&&(n.innerHTML=m),l=d(c),f=_(c,"DIV",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-1iidfrd"&&(f.innerHTML=b),u=d(c),p=_(c,"P",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-11ppavm"&&(p.innerHTML=w),this.h()},h(){h(n,"class","fragment mt-8"),h(f,"class","fragment mt-4"),h(p,"class","fragment mt-8 text-accent-200 font-bold")},m(c,L){r(c,e,L),r(c,s,L),r(c,t,L),r(c,i,L),r(c,n,L),r(c,l,L),r(c,f,L),r(c,u,L),r(c,p,L)},p:O,d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f),a(u),a(p))}}}function Sl(x){let e,o="Qu'est-ce que la composition ?",s,t,$="La composition permet de créer des objets complexes en combinant des objets plus simples.",i,n,m="C&#39;est comme assembler des <b>briques Lego</b> pour construire une structure plus grande.",l,f,b='En POO, la composition consiste à avoir des <span class="text-important">instances de classes en tant qu&#39;attributs</span> d&#39;une autre classe.',u,p,w=`Si vous connaissez les bases de données, c'est comme une clé étrangère. Un objet "possède" un
			autre objet.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("p"),n.innerHTML=m,l=v(),f=C("p"),f.innerHTML=b,u=v(),p=C("aside"),p.textContent=w,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1ey692r"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1j30nsj"&&(t.textContent=$),i=d(c),n=_(c,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-12yvhve"&&(n.innerHTML=m),l=d(c),f=_(c,"P",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-1dofonx"&&(f.innerHTML=b),u=d(c),p=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-1gjj4rn"&&(p.textContent=w),this.h()},h(){h(n,"class","fragment mt-4"),h(f,"class","fragment mt-4"),h(p,"class","notes")},m(c,L){r(c,e,L),r(c,s,L),r(c,t,L),r(c,i,L),r(c,n,L),r(c,l,L),r(c,f,L),r(c,u,L),r(c,p,L)},p:O,d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f),a(u),a(p))}}}function Tl(x){let e,o="Comment choisir : Héritage ou Composition ?",s,t,$='<div class="p-6 bg-accent-950 rounded-lg"><p class="fragment">🤔 &quot;Est-ce qu&#39;un X <b class="text-important">est un</b> Y ?&quot;</p> <p class="fragment text-green-400 ml-8">→ OUI : <b>Héritage</b> (extends)</p> <p class="fragment text-red-400 ml-8">→ NON : ↓</p> <p class="fragment mt-4">🤔 &quot;Est-ce qu&#39;un X <b class="text-important">a un</b> Y ?&quot;</p> <p class="fragment text-blue-400 ml-8">→ OUI : <b>Composition</b> (attribut)</p></div>',i,n,m=`C'est LA règle d'or. Apprenez-la par cœur. Si "X est un Y" sonne faux, n'héritez pas,
			composez.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("div"),t.innerHTML=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1jpzxsy"&&(e.textContent=o),s=d(l),t=_(l,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1t58sxf"&&(t.innerHTML=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1bu2hun"&&(n.textContent=m),this.h()},h(){h(t,"class","text-2xl mt-8"),h(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function El(x){let e,o="Exemples concrets",s,t,$='<thead><tr><th class="p-3">Question</th> <th class="p-3">Réponse</th> <th class="p-3">Relation</th></tr></thead> <tbody><tr class="fragment"><td class="p-3">Un Chien <b>est un</b> Animal ?</td> <td class="p-3 text-green-400">✅ Oui</td> <td class="p-3">Héritage</td></tr> <tr class="fragment"><td class="p-3">Une Voiture <b>est un</b> Moteur ?</td> <td class="p-3 text-red-400">❌ Non</td> <td class="p-3">-</td></tr> <tr class="fragment"><td class="p-3">Une Voiture <b>a un</b> Moteur ?</td> <td class="p-3 text-green-400">✅ Oui</td> <td class="p-3">Composition</td></tr> <tr class="fragment"><td class="p-3">Un Maître <b>a un</b> Animal ?</td> <td class="p-3 text-green-400">✅ Oui</td> <td class="p-3">Composition</td></tr></tbody>',i,n,m=`Faites cet exercice mental à chaque fois que vous modélisez. C'est automatique avec
			l'expérience. En entretien d'embauche, on vous demande souvent : "Pourquoi avoir choisi
			héritage ou composition ici ?" Réponse : "Parce que dire 'Une Voiture est un Moteur' n'a pas
			de sens."`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("table"),t.innerHTML=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1yrhyzi"&&(e.textContent=o),s=d(l),t=_(l,"TABLE",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1lueyjo"&&(t.innerHTML=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-ig6cyi"&&(n.textContent=m),this.h()},h(){h(t,"class","text-xl mt-6"),h(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function Il(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Dl(x){let e,o="Exemple : Voiture et Moteur",s,t,$,i,n=`Le losange plein (◆) indique une <span class="text-important">composition</span> : la Voiture
			<b>possède</b> le Moteur.`,m;return t=new Ie({props:{$$slots:{default:[Il]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment),$=v(),i=C("p"),i.innerHTML=n,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-12o3qzv"&&(e.textContent=o),s=d(l),S(t.$$.fragment,l),$=d(l),i=_(l,"P",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-o544v4"&&(i.innerHTML=n),this.h()},h(){h(i,"class","fragment")},m(l,f){r(l,e,f),r(l,s,f),A(t,l,f),r(l,$,f),r(l,i,f),m=!0},p(l,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:l}),t.$set(b)},i(l){m||(j(t.$$.fragment,l),m=!0)},o(l){H(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a($),a(i)),M(t,l)}}}function Vl(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function kl(x){let e,o="En code Java",s,t,$;return t=new ie({props:{lines:"1-8|10-20|22-25",$$slots:{default:[Vl]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(i){e=_(i,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1w10xpg"&&(e.textContent=o),s=d(i),S(t.$$.fragment,i)},m(i,n){r(i,e,n),r(i,s,n),A(t,i,n),$=!0},p(i,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:i}),t.$set(m)},i(i){$||(j(t.$$.fragment,i),$=!0)},o(i){H(t.$$.fragment,i),$=!1},d(i){i&&(a(e),a(s)),M(t,i)}}}function zl(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Ol(x){let e,o="Avantage : flexibilité",s,t,$="La composition favorise la <b>réutilisation</b> et la <b>flexibilité</b>.",i,n,m,l,f="On peut changer le moteur sans modifier la classe Voiture !",b,u,p=`C'est le principe "Composition over Inheritance" du Gang of Four. Préférez composer plutôt
			qu'hériter. L'héritage crée un couplage fort. La composition permet de changer de stratégie à
			l'exécution. C'est la base de nombreux Design Patterns : Strategy, Decorator, Adapter...`,w;return n=new ie({props:{$$slots:{default:[zl]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),T(n.$$.fragment),m=v(),l=C("p"),l.textContent=f,b=v(),u=C("aside"),u.textContent=p,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1y64iq2"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),g(t)!=="svelte-mbviv2"&&(t.innerHTML=$),i=d(c),S(n.$$.fragment,c),m=d(c),l=_(c,"P",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-ybembw"&&(l.textContent=f),b=d(c),u=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-1bwcsiy"&&(u.textContent=p),this.h()},h(){h(l,"class","fragment text-accent-200"),h(u,"class","notes")},m(c,L){r(c,e,L),r(c,s,L),r(c,t,L),r(c,i,L),A(n,c,L),r(c,m,L),r(c,l,L),r(c,b,L),r(c,u,L),w=!0},p(c,L){const E={};L&1&&(E.$$scope={dirty:L,ctx:c}),n.$set(E)},i(c){w||(j(n.$$.fragment,c),w=!0)},o(c){H(n.$$.fragment,c),w=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(l),a(b),a(u)),M(n,c)}}}function Ul(x){let e,o="Les deux relations fondamentales",s,t,$="Le cœur de l'architecture objet",i,n,m=`Tout le reste de la POO découle de ces deux relations. Maîtrisez-les et vous maîtrisez 80% de
			l'architecture objet. Quand vous lisez du code, cherchez ces relations. Quand vous concevez,
			posez-vous ces questions.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-fh7ab8"&&(e.textContent=o),s=d(l),t=_(l,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1cmiiew"&&(t.textContent=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-tu4ua3"&&(n.textContent=m),this.h()},h(){h(e,"class","text-5xl"),h(t,"class","text-2xl text-gray-400"),h(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function Rl(x){let e,o=`<p>L&#39;un des intérêts de la POO réside dans les <b>relations</b> entre les objets. Ces relations
				constituent l&#39;<span class="text-important">architecture</span> de votre application.</p> <dl class="mt-6 text-xl"><dt class="fragment"><strong class="text-important">&quot;est un&quot;</strong> (<em>is-a</em>)</dt><dd class="fragment ml-8"><p>Une classe peut être assimilée à une autre, plus générale. → <span class="text-important">Héritage</span></p> </dd><dt class="fragment mt-4"><strong class="text-important">&quot;a un&quot;</strong> (<em>has-a</em>)
				</dt><dd class="fragment ml-8"><p>Une classe dépend des services d&#39;une autre. → <span class="text-important">Composition</span></p></dd></dl>`,s,t,$=`Ces termes viennent de l'anglais et sont utilisés mondialement. Apprenez "is-a" et "has-a".
			Quand vous modélisez, reformulez toujours en français : "Un X est-il un Y ?" "Un X a-t-il un Y
			?" La réponse vous dit quelle relation utiliser. C'est mécanique.`;return{c(){e=C("div"),e.innerHTML=o,s=v(),t=C("aside"),t.textContent=$,this.h()},l(i){e=_(i,"DIV",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1hproaj"&&(e.innerHTML=o),s=d(i),t=_(i,"ASIDE",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-db092m"&&(t.textContent=$),this.h()},h(){h(e,"class",""),h(t,"class","notes")},m(i,n){r(i,e,n),r(i,s,n),r(i,t,n)},p:O,d(i){i&&(a(e),a(s),a(t))}}}function Jl(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Nl(x){let e,o="Exemple : Maître et Animal",s,t,$="Un Maître <b>a un</b> Animal (composition), et l&#39;Animal peut être un Chien ou un Chat (héritage).",i,n,m,l,f=`Cet exemple combine les deux concepts. C'est typique d'une architecture réelle. Le Maître ne
			connaît pas le type exact de son animal. Il sait juste que c'est un Animal. C'est de
			l'injection de dépendance avant l'heure ! Les frameworks comme Spring font exactement ça.`,b;return n=new Ie({props:{$$slots:{default:[Jl]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),T(n.$$.fragment),m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1defcuq"&&(e.textContent=o),s=d(u),t=_(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1vsft0l"&&(t.innerHTML=$),i=d(u),S(n.$$.fragment,u),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-6gtlgp"&&(l.textContent=f),this.h()},h(){h(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),A(n,u,p),r(u,m,p),r(u,l,p),b=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),n.$set(w)},i(u){b||(j(n.$$.fragment,u),b=!0)},o(u){H(n.$$.fragment,u),b=!1},d(u){u&&(a(e),a(s),a(t),a(i),a(m),a(l)),M(n,u)}}}function Bl(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Fl(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Gl(x){let e,o="En code Java",s,t,$,i,n,m;return $=new ie({props:{class:"language-java",$$slots:{default:[Bl]},$$scope:{ctx:x}}}),n=new ie({props:{class:"language-java",$$slots:{default:[Fl]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("div"),T($.$$.fragment),i=v(),T(n.$$.fragment),this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1w10xpg"&&(e.textContent=o),s=d(l),t=_(l,"DIV",{class:!0});var f=ue(t);S($.$$.fragment,f),i=d(f),S(n.$$.fragment,f),f.forEach(a),this.h()},h(){h(t,"class","flex flex-row items-start gap-4")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),A($,t,null),ee(t,i),A(n,t,null),m=!0},p(l,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:l}),$.$set(b);const u={};f&1&&(u.$$scope={dirty:f,ctx:l}),n.$set(u)},i(l){m||(j($.$$.fragment,l),j(n.$$.fragment,l),m=!0)},o(l){H($.$$.fragment,l),H(n.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a(t)),M($),M(n)}}}function Ql(x){let e=`
Maitre jean = new Maitre(new Chien());
Maitre marie = new Maitre(new Chat());

jean.presenterAnimal();   // "Wouaf !"
marie.presenterAnimal();  // "Miaou !"

// On peut changer d'animal sans modifier la classe Maitre !
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Kl(x){let e,o="La puissance de la combinaison",s,t,$="Le Maître ne sait pas quel type d&#39;animal il a... et c&#39;est <b>voulu</b> !",i,n,m,l,f=`C&#39;est le <span class="text-important">polymorphisme</span> en action !<br/>
			(on le verra en détail plus tard)`,b,u,p=`C'est là que tout prend son sens. Composition + héritage + polymorphisme = architecture
			flexible. Si demain on ajoute un Perroquet, le code du Maître ne change pas. Zéro
			modification. C'est le principe Open/Closed en action : ouvert à l'extension, fermé à la
			modification.`,w;return n=new ie({props:{$$slots:{default:[Ql]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),T(n.$$.fragment),m=v(),l=C("p"),l.innerHTML=f,b=v(),u=C("aside"),u.textContent=p,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-cj68oa"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),g(t)!=="svelte-kzsg9e"&&(t.innerHTML=$),i=d(c),S(n.$$.fragment,c),m=d(c),l=_(c,"P",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-1rhcp8x"&&(l.innerHTML=f),b=d(c),u=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-atbhqx"&&(u.textContent=p),this.h()},h(){h(l,"class","fragment text-accent-200 font-bold"),h(u,"class","notes")},m(c,L){r(c,e,L),r(c,s,L),r(c,t,L),r(c,i,L),A(n,c,L),r(c,m,L),r(c,l,L),r(c,b,L),r(c,u,L),w=!0},p(c,L){const E={};L&1&&(E.$$scope={dirty:L,ctx:c}),n.$set(E)},i(c){w||(j(n.$$.fragment,c),w=!0)},o(c){H(n.$$.fragment,c),w=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(l),a(b),a(u)),M(n,c)}}}function Xl(x){let e,o="Composition vs Agrégation",s,t,$="Il existe une nuance importante :",i,n,m='<div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">◆ Composition</h4> <p class="text-xl mt-2">L&#39;objet contenu <b>appartient</b> à l&#39;objet conteneur.</p> <p class="text-sm text-gray-400 mt-2">Si la Voiture est détruite, le Moteur aussi.</p></div> <div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">◇ Agrégation</h4> <p class="text-xl mt-2">L&#39;objet contenu <b>existe indépendamment</b>.</p> <p class="text-sm text-gray-400 mt-2">Si l&#39;Équipe est dissoute, les Joueurs existent toujours.</p></div>',l,f,b=`En pratique, beaucoup de développeurs confondent les deux, et ce n'est pas grave. L'important
			c'est de se poser la question : "Si je supprime le conteneur, le contenu a-t-il encore un sens
			?" Une roue sans voiture = bizarre. Un joueur sans équipe = normal (il peut changer d'équipe).`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("div"),n.innerHTML=m,l=v(),f=C("aside"),f.textContent=b,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-s3132y"&&(e.textContent=o),s=d(u),t=_(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1v8b0oy"&&(t.textContent=$),i=d(u),n=_(u,"DIV",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-5t1llc"&&(n.innerHTML=m),l=d(u),f=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-2sj58"&&(f.textContent=b),this.h()},h(){h(n,"class","grid grid-cols-2 gap-8 mt-6"),h(f,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),r(u,n,p),r(u,l,p),r(u,f,p)},p:O,d(u){u&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f))}}}function Yl(x){let e=`
@startuml
class Voiture
class Moteur
class Equipe
class Joueur

Voiture *-- Moteur : composition
Equipe o-- Joueur : agrégation
@enduml
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Wl(x){let e,o="En UML",s,t,$,i,n="◆ = Composition (losange plein) | ◇ = Agrégation (losange vide)",m,l,f=`En pratique, la différence est subtile. L'important c'est de comprendre qui "possède" quoi. En
			composition, le conteneur crée l'objet. En agrégation, on le reçoit de l'extérieur.`,b;return t=new Ie({props:{$$slots:{default:[Yl]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment),$=v(),i=C("p"),i.textContent=n,m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1dfk95l"&&(e.textContent=o),s=d(u),S(t.$$.fragment,u),$=d(u),i=_(u,"P",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-ze7nvt"&&(i.textContent=n),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-1iqya04"&&(l.textContent=f),this.h()},h(){h(i,"class","mt-4"),h(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),A(t,u,p),r(u,$,p),r(u,i,p),r(u,m,p),r(u,l,p),b=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),t.$set(w)},i(u){b||(j(t.$$.fragment,u),b=!0)},o(u){H(t.$$.fragment,u),b=!1},d(u){u&&(a(e),a(s),a($),a(i),a(m),a(l)),M(t,u)}}}function Zl(x){let e=`
class Voiture {
    // Le moteur est CRÉÉ par la voiture
    private Moteur moteur = new Moteur();
    
    // Si Voiture est garbage collecté,
    // Moteur l'est aussi
}
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function yl(x){let e=`
class Equipe {
    // Les joueurs sont REÇUS de l'extérieur
    private List<Joueur> joueurs;
    
    void ajouterJoueur(Joueur j) {
        joueurs.add(j);
    }
    // Les joueurs existent avant/après
}
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function en(x){let e,o="En code : qui crée quoi ?",s,t,$,i,n="◆ Composition",m,l,f,b,u,p="◇ Agrégation",w,c,L;return l=new ie({props:{class:"language-java",$$slots:{default:[Zl]},$$scope:{ctx:x}}}),c=new ie({props:{class:"language-java",$$slots:{default:[yl]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("div"),$=C("div"),i=C("h4"),i.textContent=n,m=v(),T(l.$$.fragment),f=v(),b=C("div"),u=C("h4"),u.textContent=p,w=v(),T(c.$$.fragment),this.h()},l(E){e=_(E,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-13g76yp"&&(e.textContent=o),s=d(E),t=_(E,"DIV",{class:!0});var q=ue(t);$=_(q,"DIV",{});var V=ue($);i=_(V,"H4",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-13iofgd"&&(i.textContent=n),m=d(V),S(l.$$.fragment,V),V.forEach(a),f=d(q),b=_(q,"DIV",{});var B=ue(b);u=_(B,"H4",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-b2romh"&&(u.textContent=p),w=d(B),S(c.$$.fragment,B),B.forEach(a),q.forEach(a),this.h()},h(){h(i,"class","text-important"),h(u,"class","text-important"),h(t,"class","grid grid-cols-2 gap-4")},m(E,q){r(E,e,q),r(E,s,q),r(E,t,q),ee(t,$),ee($,i),ee($,m),A(l,$,null),ee(t,f),ee(t,b),ee(b,u),ee(b,w),A(c,b,null),L=!0},p(E,q){const V={};q&1&&(V.$$scope={dirty:q,ctx:E}),l.$set(V);const B={};q&1&&(B.$$scope={dirty:q,ctx:E}),c.$set(B)},i(E){L||(j(l.$$.fragment,E),j(c.$$.fragment,E),L=!0)},o(E){H(l.$$.fragment,E),H(c.$$.fragment,E),L=!1},d(E){E&&(a(e),a(s),a(t)),M(l),M(c)}}}function tn(x){let e,o="Récapitulatif",s,t,$='<thead><tr><th class="p-3">Relation</th> <th class="p-3">Question</th> <th class="p-3">Implémentation</th> <th class="p-3">UML</th></tr></thead> <tbody><tr class="fragment"><td class="p-3 text-important">Héritage</td> <td class="p-3">&quot;X est un Y&quot;</td> <td class="p-3"><code>extends</code></td> <td class="p-3">Flèche △</td></tr> <tr class="fragment"><td class="p-3 text-important">Composition</td> <td class="p-3">&quot;X a un Y&quot; (possède)</td> <td class="p-3">Attribut (créé)</td> <td class="p-3">Losange ◆</td></tr> <tr class="fragment"><td class="p-3 text-important">Agrégation</td> <td class="p-3">&quot;X a un Y&quot; (référence)</td> <td class="p-3">Attribut (reçu)</td> <td class="p-3">Losange ◇</td></tr></tbody>',i,n,m=`Gardez ce tableau en tête. C'est la base de toute modélisation objet. En UML, on utilise ces
			symboles. En entretien, on vous demandera de dessiner ces diagrammes. Prochaine étape : les
			interfaces, pour aller encore plus loin dans l'abstraction.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("table"),t.innerHTML=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-ri7iuh"&&(e.textContent=o),s=d(l),t=_(l,"TABLE",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-9czqcv"&&(t.innerHTML=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1hwoc6u"&&(n.textContent=m),this.h()},h(){h(t,"class","text-xl"),h(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function sn(x){let e,o="La composition",s,t,$,i,n,m,l,f,b,u,p,w,c,L,E,q,V,B,Q,Y,D,F,ne,U,le,ae,fe,re,pe,oe,$e,ce,me;return t=new N({props:{$$slots:{default:[Al]},$$scope:{ctx:x}}}),i=new N({props:{$$slots:{default:[Sl]},$$scope:{ctx:x}}}),m=new N({props:{$$slots:{default:[Tl]},$$scope:{ctx:x}}}),f=new N({props:{$$slots:{default:[El]},$$scope:{ctx:x}}}),u=new N({props:{$$slots:{default:[Dl]},$$scope:{ctx:x}}}),w=new N({props:{$$slots:{default:[kl]},$$scope:{ctx:x}}}),L=new N({props:{$$slots:{default:[Ol]},$$scope:{ctx:x}}}),q=new N({props:{data_background_color:"#1a1a2e",$$slots:{default:[Ul]},$$scope:{ctx:x}}}),B=new N({props:{$$slots:{default:[Rl]},$$scope:{ctx:x}}}),Y=new N({props:{$$slots:{default:[Nl]},$$scope:{ctx:x}}}),F=new N({props:{$$slots:{default:[Gl]},$$scope:{ctx:x}}}),U=new N({props:{$$slots:{default:[Kl]},$$scope:{ctx:x}}}),ae=new N({props:{$$slots:{default:[Xl]},$$scope:{ctx:x}}}),re=new N({props:{$$slots:{default:[Wl]},$$scope:{ctx:x}}}),oe=new N({props:{$$slots:{default:[en]},$$scope:{ctx:x}}}),ce=new N({props:{$$slots:{default:[tn]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment),$=v(),T(i.$$.fragment),n=v(),T(m.$$.fragment),l=v(),T(f.$$.fragment),b=v(),T(u.$$.fragment),p=v(),T(w.$$.fragment),c=v(),T(L.$$.fragment),E=v(),T(q.$$.fragment),V=v(),T(B.$$.fragment),Q=v(),T(Y.$$.fragment),D=v(),T(F.$$.fragment),ne=v(),T(U.$$.fragment),le=v(),T(ae.$$.fragment),fe=v(),T(re.$$.fragment),pe=v(),T(oe.$$.fragment),$e=v(),T(ce.$$.fragment)},l(R){e=_(R,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1dl0775"&&(e.textContent=o),s=d(R),S(t.$$.fragment,R),$=d(R),S(i.$$.fragment,R),n=d(R),S(m.$$.fragment,R),l=d(R),S(f.$$.fragment,R),b=d(R),S(u.$$.fragment,R),p=d(R),S(w.$$.fragment,R),c=d(R),S(L.$$.fragment,R),E=d(R),S(q.$$.fragment,R),V=d(R),S(B.$$.fragment,R),Q=d(R),S(Y.$$.fragment,R),D=d(R),S(F.$$.fragment,R),ne=d(R),S(U.$$.fragment,R),le=d(R),S(ae.$$.fragment,R),fe=d(R),S(re.$$.fragment,R),pe=d(R),S(oe.$$.fragment,R),$e=d(R),S(ce.$$.fragment,R)},m(R,te){r(R,e,te),r(R,s,te),A(t,R,te),r(R,$,te),A(i,R,te),r(R,n,te),A(m,R,te),r(R,l,te),A(f,R,te),r(R,b,te),A(u,R,te),r(R,p,te),A(w,R,te),r(R,c,te),A(L,R,te),r(R,E,te),A(q,R,te),r(R,V,te),A(B,R,te),r(R,Q,te),A(Y,R,te),r(R,D,te),A(F,R,te),r(R,ne,te),A(U,R,te),r(R,le,te),A(ae,R,te),r(R,fe,te),A(re,R,te),r(R,pe,te),A(oe,R,te),r(R,$e,te),A(ce,R,te),me=!0},p(R,te){const J={};te&1&&(J.$$scope={dirty:te,ctx:R}),t.$set(J);const se={};te&1&&(se.$$scope={dirty:te,ctx:R}),i.$set(se);const de={};te&1&&(de.$$scope={dirty:te,ctx:R}),m.$set(de);const he={};te&1&&(he.$$scope={dirty:te,ctx:R}),f.$set(he);const ve={};te&1&&(ve.$$scope={dirty:te,ctx:R}),u.$set(ve);const ge={};te&1&&(ge.$$scope={dirty:te,ctx:R}),w.$set(ge);const xe={};te&1&&(xe.$$scope={dirty:te,ctx:R}),L.$set(xe);const be={};te&1&&(be.$$scope={dirty:te,ctx:R}),q.$set(be);const z={};te&1&&(z.$$scope={dirty:te,ctx:R}),B.$set(z);const W={};te&1&&(W.$$scope={dirty:te,ctx:R}),Y.$set(W);const k={};te&1&&(k.$$scope={dirty:te,ctx:R}),F.$set(k);const X={};te&1&&(X.$$scope={dirty:te,ctx:R}),U.$set(X);const Le={};te&1&&(Le.$$scope={dirty:te,ctx:R}),ae.$set(Le);const we={};te&1&&(we.$$scope={dirty:te,ctx:R}),re.$set(we);const qe={};te&1&&(qe.$$scope={dirty:te,ctx:R}),oe.$set(qe);const Pe={};te&1&&(Pe.$$scope={dirty:te,ctx:R}),ce.$set(Pe)},i(R){me||(j(t.$$.fragment,R),j(i.$$.fragment,R),j(m.$$.fragment,R),j(f.$$.fragment,R),j(u.$$.fragment,R),j(w.$$.fragment,R),j(L.$$.fragment,R),j(q.$$.fragment,R),j(B.$$.fragment,R),j(Y.$$.fragment,R),j(F.$$.fragment,R),j(U.$$.fragment,R),j(ae.$$.fragment,R),j(re.$$.fragment,R),j(oe.$$.fragment,R),j(ce.$$.fragment,R),me=!0)},o(R){H(t.$$.fragment,R),H(i.$$.fragment,R),H(m.$$.fragment,R),H(f.$$.fragment,R),H(u.$$.fragment,R),H(w.$$.fragment,R),H(L.$$.fragment,R),H(q.$$.fragment,R),H(B.$$.fragment,R),H(Y.$$.fragment,R),H(F.$$.fragment,R),H(U.$$.fragment,R),H(ae.$$.fragment,R),H(re.$$.fragment,R),H(oe.$$.fragment,R),H(ce.$$.fragment,R),me=!1},d(R){R&&(a(e),a(s),a($),a(n),a(l),a(b),a(p),a(c),a(E),a(V),a(Q),a(D),a(ne),a(le),a(fe),a(pe),a($e)),M(t,R),M(i,R),M(m,R),M(f,R),M(u,R),M(w,R),M(L,R),M(q,R),M(B,R),M(Y,R),M(F,R),M(U,R),M(ae,R),M(re,R),M(oe,R),M(ce,R)}}}function ln(x){let e,o;return e=new N({props:{$$slots:{default:[sn]},$$scope:{ctx:x}}}),{c(){T(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,t){A(e,s,t),o=!0},p(s,[t]){const $={};t&1&&($.$$scope={dirty:t,ctx:s}),e.$set($)},i(s){o||(j(e.$$.fragment,s),o=!0)},o(s){H(e.$$.fragment,s),o=!1},d(s){M(e,s)}}}class nn extends Be{constructor(e){super(),Fe(this,e,null,ln,Ne,{})}}function an(x){let e=`
                abstract class Animal {}
                abstract class AnimalVolant extends Animal {}
                abstract class AnimalNageur extends Animal {}
                class Canard extends AnimalVolant, AnimalNageur {}
            `,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function rn(x){let e,o="L'héritage multiple",s,t,$="Comment hériter de deux classes ?",i,n,m,l,f=`En Java, ce n&#39;est pas possible !
			<br/> En revanche, on peut utiliser une interface pour simuler l&#39;héritage multiple.`,b,u,p=`L'héritage multiple existe en C++, mais ça crée le fameux "problème du diamant" : si deux
			parents ont la même méthode, laquelle appeler ? Java a choisi d'interdire l'héritage multiple
			de classes pour éviter ces ambiguïtés. Le canard est l'exemple parfait : il vole ET il nage.
			Comment modéliser ça sans héritage multiple ?`,w;return n=new Ie({props:{$$slots:{default:[an]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),T(n.$$.fragment),m=v(),l=C("p"),l.innerHTML=f,b=v(),u=C("aside"),u.textContent=p,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-lz4bxy"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1py5itu"&&(t.textContent=$),i=d(c),S(n.$$.fragment,c),m=d(c),l=_(c,"P",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-mtdftf"&&(l.innerHTML=f),b=d(c),u=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-11kv8kj"&&(u.textContent=p),this.h()},h(){h(l,"class","fragment"),h(u,"class","notes")},m(c,L){r(c,e,L),r(c,s,L),r(c,t,L),r(c,i,L),A(n,c,L),r(c,m,L),r(c,l,L),r(c,b,L),r(c,u,L),w=!0},p(c,L){const E={};L&1&&(E.$$scope={dirty:L,ctx:c}),n.$set(E)},i(c){w||(j(n.$$.fragment,c),w=!0)},o(c){H(n.$$.fragment,c),w=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(l),a(b),a(u)),M(n,c)}}}function un(x){let e,o;return e=new N({props:{$$slots:{default:[rn]},$$scope:{ctx:x}}}),{c(){T(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,t){A(e,s,t),o=!0},p(s,t){const $={};t&1&&($.$$scope={dirty:t,ctx:s}),e.$set($)},i(s){o||(j(e.$$.fragment,s),o=!0)},o(s){H(e.$$.fragment,s),o=!1},d(s){M(e,s)}}}function on(x){let e=`
    
    public interface ArticleLouable {
      float reserver(Date from, Date to); 
      float rendre(int penalite);    
    }
        `,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function cn(x){let e,o=`Une interface est un type de référence similaire à une classe abstraite qui ne contient que
			des méthodes abstraites.`,s,t,$=`Une interface n'a pas de code "par défaut", seulement des signatures de méthodes.`,i,n,m,l,f=`Une interface, c'est un "contrat". Elle dit : "Toute classe qui m'implémente DOIT avoir ces
			méthodes." C'est le niveau d'abstraction le plus élevé en Java. Aucune implémentation, juste
			des promesses. Depuis Java 8, on peut avoir des méthodes "default" avec du code, mais c'est
			l'exception, pas la règle.`,b;return n=new ie({props:{$$slots:{default:[on]},$$scope:{ctx:x}}}),{c(){e=C("p"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),T(n.$$.fragment),m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"P",{"data-svelte-h":!0}),g(e)!=="svelte-zve5wp"&&(e.textContent=o),s=d(u),t=_(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1phkx1u"&&(t.textContent=$),i=d(u),S(n.$$.fragment,u),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-18c88ea"&&(l.textContent=f),this.h()},h(){h(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),A(n,u,p),r(u,m,p),r(u,l,p),b=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),n.$set(w)},i(u){b||(j(n.$$.fragment,u),b=!0)},o(u){H(n.$$.fragment,u),b=!1},d(u){u&&(a(e),a(s),a(t),a(i),a(m),a(l)),M(n,u)}}}function fn(x){let e,o="Implémentation d’une interface",s,t,$=`Une classe signale les interfaces qu’elle implémente grâce au mot-clé <code>implements</code>.
			Une classe concrète doit fournir une implémentation pour toutes les méthodes d’une interface,
			soit dans sa déclaration, soit parce qu’elle en hérite.`,i,n,m=`C'est la différence clé avec l'héritage : on "extends" une classe, on "implements" une
			interface. Et surtout : on peut implémenter PLUSIEURS interfaces, contrairement à l'héritage.
			Si vous oubliez d'implémenter une méthode, le compilateur vous le dira.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-6vv8ym"&&(e.textContent=o),s=d(l),t=_(l,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1vu2bky"&&(t.innerHTML=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-sn5kmm"&&(n.textContent=m),this.h()},h(){h(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function $n(x){let e=`
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
    `,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function pn(x){let e,o="Implémentation d’une interface",s,t,$,i,n=`Notez qu'on peut combiner extends ET implements. SiegeAuto hérite d'Accessoire ET implémente
			ArticleLouable. C'est très courant en pratique. Une classe a souvent une hiérarchie ET des
			capacités additionnelles. L'ordre est important : extends AVANT implements !`,m;return t=new ie({props:{className:"h-[70vh]",$$slots:{default:[$n]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment),$=v(),i=C("aside"),i.textContent=n,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-6vv8ym"&&(e.textContent=o),s=d(l),S(t.$$.fragment,l),$=d(l),i=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-qpvial"&&(i.textContent=n),this.h()},h(){h(i,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),A(t,l,f),r(l,$,f),r(l,i,f),m=!0},p(l,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:l}),t.$set(b)},i(l){m||(j(t.$$.fragment,l),m=!0)},o(l){H(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a($),a(i)),M(t,l)}}}function mn(x){let e,o="Implémentation d’une interface",s,t,$=`Une interface permet de mutualiser une implémentation entre des classes qui n’ont pas de lien
			d’héritage.<br/>
			Si une classe implémente une interface, ses classes dérivées héritent de cette implémentation, mais
			il est toutefois possible de la surcharger.`,i,n,m=`C'est là toute la puissance des interfaces. Un Avion et un Oiseau n'ont rien en commun... sauf
			qu'ils volent. Avec une interface Volant, on peut les traiter de la même façon pour tout ce
			qui concerne le vol. C'est le principe de "programmation par contrat" : on programme contre
			une interface, pas une implémentation.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-6vv8ym"&&(e.textContent=o),s=d(l),t=_(l,"P",{"data-svelte-h":!0}),g(t)!=="svelte-cgrkq0"&&(t.innerHTML=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1g9blqi"&&(n.textContent=m),this.h()},h(){h(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function dn(x){let e,o="Comment choisir entre une classe abstraite et une interface ?",s,t,$=`<li><b>Classe abstraite</b> : Si, fondamentalement, on peut dire &quot;Un Dauphin est un Animal&quot;,
				alors, vous <i>pouvez</i> utiliser une classe abstraite.<br/></li> <li><b>Interface</b> : S&#39;il est plus juste de dire &quot;Un Dauphin peut nager&quot;, alors vous
				<i>devriez</i>
				utiliser une interface.
				<ul><li>Si quelque chose qui n&#39;aurait rien à voir avec vos animaux pouvait nager, utilisez une
						interface.<br/>
						Par exemple, un avion et un oiseau peuvent voler, mais ils n&#39;ont rien à voir l&#39;un avec l&#39;autre.</li> <li>Sinon, prévoyez plutôt une interface si vous pensez qu&#39;une classe fille pourrait avoir
						besoin d&#39;hériter de plusieurs classes.</li></ul></li>`,i,n,m=`C'est LA question qu'on vous posera en entretien d'embauche ! Retenez bien cette règle. "Est
			un" → classe abstraite (relation d'identité) "Peut faire" → interface (capacité) Dans le
			doute, préférez l'interface. C'est plus flexible et ça suit le principe de composition over
			inheritance.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("ul"),t.innerHTML=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-95djsx"&&(e.textContent=o),s=d(l),t=_(l,"UL",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1bl7mxh"&&(t.innerHTML=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-8pa8gb"&&(n.textContent=m),this.h()},h(){h(t,"class","text-4xl"),h(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function vn(x){let e=`
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
        `,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function xn(x){let e=`
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

                `,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function _n(x){let e,o="Comment choisir entre une classe abstraite et une interface ?",s,t,$,i,n,m,l,f=`À gauche avec les interfaces : propre, flexible. À droite sans : explosion combinatoire de classes.
			C'est le fameux problème "Mammifère qui nage ET qui pond" → impossible sans interface.
			En pratique, les interfaces résolvent 90% des problèmes de modélisation complexe.`,b;return $=new Ie({props:{$$slots:{default:[vn]},$$scope:{ctx:x}}}),n=new Ie({props:{$$slots:{default:[xn]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("div"),T($.$$.fragment),i=v(),T(n.$$.fragment),m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-95djsx"&&(e.textContent=o),s=d(u),t=_(u,"DIV",{class:!0});var p=ue(t);S($.$$.fragment,p),i=d(p),S(n.$$.fragment,p),p.forEach(a),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-kyimvk"&&(l.textContent=f),this.h()},h(){h(t,"class","flex flex-row justify-center items-center"),h(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),A($,t,null),ee(t,i),A(n,t,null),r(u,m,p),r(u,l,p),b=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),$.$set(w);const c={};p&1&&(c.$$scope={dirty:p,ctx:u}),n.$set(c)},i(u){b||(j($.$$.fragment,u),j(n.$$.fragment,u),b=!0)},o(u){H($.$$.fragment,u),H(n.$$.fragment,u),b=!1},d(u){u&&(a(e),a(s),a(t),a(m),a(l)),M($),M(n)}}}function Cn(x){let e=`
            public class BassinAquatique {
                public void faireNager(Nageur nageur) {
                    nageur.nager();
                    // Ici, qu'ils soient un humain, un dauphin ou un crocodile, 
                    // les instances de ces classes peuvent nager 
                    // peu importe que ce soit des mammifères ou des reptiles
                }
            }
            `,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function hn(x){let e,o="Préambule au polymorphisme",s,t,$=`Vos méthodes peuvent prendre en paramètre une interface, ce qui permet de passer n'importe
			quel objet qui l'implémente.`,i,n,m,l,f=`C'est ça la vraie puissance des interfaces ! Le code ne sait pas et n'a pas besoin de savoir
			ce qu'est un Nageur. Demain, vous ajoutez une classe Robot qui implémente Nageur → ça marche
			sans changer une ligne ! C'est le principe d'inversion de dépendance (le D de SOLID) :
			dépendez des abstractions, pas des implémentations.`,b;return n=new ie({props:{class:" highlighter language-java",$$slots:{default:[Cn]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),T(n.$$.fragment),m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-mwdtiv"&&(e.textContent=o),s=d(u),t=_(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1xd6dcn"&&(t.textContent=$),i=d(u),S(n.$$.fragment,u),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-1uux63m"&&(l.textContent=f),this.h()},h(){h(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),A(n,u,p),r(u,m,p),r(u,l,p),b=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),n.$set(w)},i(u){b||(j(n.$$.fragment,u),b=!0)},o(u){H(n.$$.fragment,u),b=!1},d(u){u&&(a(e),a(s),a(t),a(i),a(m),a(l)),M(n,u)}}}function gn(x){let e=`
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

            `,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function bn(x){let e,o="Héritage d’interface",s,t,$=`Une interface peut hériter d’une ou plusieurs autres interfaces. Dans ce cas, elle hérite de
			toutes les méthodes déclarées dans les interfaces parentes. Pour déclarer un héritage, on
			utilise le mot-clé <code>extends</code>.`,i,n,m;return n=new ie({props:{className:"highlighter language-java",$$slots:{default:[gn]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),T(n.$$.fragment)},l(l){e=_(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-j0acen"&&(e.textContent=o),s=d(l),t=_(l,"P",{"data-svelte-h":!0}),g(t)!=="svelte-tpi5ka"&&(t.innerHTML=$),i=d(l),S(n.$$.fragment,l)},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),A(n,l,f),m=!0},p(l,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:l}),n.$set(b)},i(l){m||(j(n.$$.fragment,l),m=!0)},o(l){H(n.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a(t),a(i)),M(n,l)}}}function Ln(x){let e=`
                interface Omnivore extends Herbivore, Carnivore {...}
                class Humain implements Omnivore {...}

                var bob = new Humain();
                if (bob instanceof Carnivore) {
                    System.out.println("bob mange de la viande");
                }
                if (bob instanceof Herbivore) {
                    System.out.println("bob mange des plantes");
                }
            `,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function wn(x){let e,o="Héritage d’interface",s,t,$=`Comme chaque interface introduit un nouveau type, il est possible de contrôler, grâce au
			mot-clé <code>instanceof</code>, qu’une variable, un paramètre ou un attribut est bien une
			instance compatible avec cette interface.`,i,n,m;return n=new ie({props:{className:"highlighter language-java",$$slots:{default:[Ln]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),T(n.$$.fragment)},l(l){e=_(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-j0acen"&&(e.textContent=o),s=d(l),t=_(l,"P",{"data-svelte-h":!0}),g(t)!=="svelte-6egy71"&&(t.innerHTML=$),i=d(l),S(n.$$.fragment,l)},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),A(n,l,f),m=!0},p(l,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:l}),n.$set(b)},i(l){m||(j(n.$$.fragment,l),m=!0)},o(l){H(n.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a(t),a(i)),M(n,l)}}}function qn(x){let e=`
            interface IConfidential {}
            class DossierMedical implements IConfidential {}
            ...
            void logguerDansUnFichier(Object p) {
                if (p instanceof IConfidential) {
                    return; // On ne loggue pas les informations confidentielles
                }
            }
            `,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Pn(x){let e,o="Les interfaces marqueurs",s,t,$=`Une interface sans méthode est appelée une interface marqueur. <br/>
			Elle est utilisée pour étiqueter une classe.`,i,n,m="On les utilise ainsi",l,f,b,u,p=`Rappelez-vous, comme on peut implémenter plusieurs interfaces, n'importe quelle classe peut
			implémenter une interface marqueur.`,w,c,L=`Historiquement, Java utilisait beaucoup ça : Serializable, Cloneable sont des interfaces
			marqueurs du JDK. Aujourd'hui, on préfère les annotations (@Confidential) qui sont plus
			puissantes et flexibles. Mais le concept reste valide et vous le verrez dans du code legacy.`,E;return f=new ie({props:{className:"highlighter language-java",$$slots:{default:[qn]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("p"),n.textContent=m,l=v(),T(f.$$.fragment),b=v(),u=C("p"),u.textContent=p,w=v(),c=C("aside"),c.textContent=L,this.h()},l(q){e=_(q,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-9j49lb"&&(e.textContent=o),s=d(q),t=_(q,"P",{"data-svelte-h":!0}),g(t)!=="svelte-tx7gvv"&&(t.innerHTML=$),i=d(q),n=_(q,"P",{"data-svelte-h":!0}),g(n)!=="svelte-1qt13hy"&&(n.textContent=m),l=d(q),S(f.$$.fragment,q),b=d(q),u=_(q,"P",{"data-svelte-h":!0}),g(u)!=="svelte-7kxzjc"&&(u.textContent=p),w=d(q),c=_(q,"ASIDE",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-1rx16ok"&&(c.textContent=L),this.h()},h(){h(c,"class","notes")},m(q,V){r(q,e,V),r(q,s,V),r(q,t,V),r(q,i,V),r(q,n,V),r(q,l,V),A(f,q,V),r(q,b,V),r(q,u,V),r(q,w,V),r(q,c,V),E=!0},p(q,V){const B={};V&1&&(B.$$scope={dirty:V,ctx:q}),f.$set(B)},i(q){E||(j(f.$$.fragment,q),E=!0)},o(q){H(f.$$.fragment,q),E=!1},d(q){q&&(a(e),a(s),a(t),a(i),a(n),a(l),a(b),a(u),a(w),a(c)),M(f,q)}}}function Mn(x){let e,o="Conventions de nommage",s,t,$=`<li>Les interfaces sont nommées avec un nom qui commence par &quot;I&quot; suivi d&#39;un nom.</li> <li>Le nom est un adjectif ou un nom qui décrit un comportement.</li> <li>Exemple :
				<ul><li>IVolant</li> <li>IConfidentiel</li> <li><s>INageur</s></li> <li><s>Bateau</s></li> <li><s>Vitesse</s></li></ul></li>`,i,n,m=`Le préfixe "I" est une convention C#/Microsoft. En Java pur, on met souvent pas de préfixe.
			Mais dans beaucoup d'entreprises françaises, le "I" est la norme. Suivez la convention de
			votre équipe. Le JDK utilise des suffixes "-able" : Comparable, Serializable, Iterable. C'est
			aussi une bonne pratique.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("ul"),t.innerHTML=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1cx5ud7"&&(e.textContent=o),s=d(l),t=_(l,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-7652xk"&&(t.innerHTML=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1js4lj4"&&(n.textContent=m),this.h()},h(){h(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function Hn(x){let e,o="Les interfaces",s,t,$,i,n,m,l,f,b,u,p,w,c,L,E,q,V,B,Q,Y,D,F,ne;return t=new N({props:{$$slots:{default:[cn]},$$scope:{ctx:x}}}),i=new N({props:{$$slots:{default:[fn]},$$scope:{ctx:x}}}),m=new N({props:{$$slots:{default:[pn]},$$scope:{ctx:x}}}),f=new N({props:{$$slots:{default:[mn]},$$scope:{ctx:x}}}),u=new N({props:{$$slots:{default:[dn]},$$scope:{ctx:x}}}),w=new N({props:{$$slots:{default:[_n]},$$scope:{ctx:x}}}),L=new N({props:{$$slots:{default:[hn]},$$scope:{ctx:x}}}),q=new N({props:{$$slots:{default:[bn]},$$scope:{ctx:x}}}),B=new N({props:{$$slots:{default:[wn]},$$scope:{ctx:x}}}),Y=new N({props:{$$slots:{default:[Pn]},$$scope:{ctx:x}}}),F=new N({props:{$$slots:{default:[Mn]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment),$=v(),T(i.$$.fragment),n=v(),T(m.$$.fragment),l=v(),T(f.$$.fragment),b=v(),T(u.$$.fragment),p=v(),T(w.$$.fragment),c=v(),T(L.$$.fragment),E=v(),T(q.$$.fragment),V=v(),T(B.$$.fragment),Q=v(),T(Y.$$.fragment),D=v(),T(F.$$.fragment)},l(U){e=_(U,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-lczfm4"&&(e.textContent=o),s=d(U),S(t.$$.fragment,U),$=d(U),S(i.$$.fragment,U),n=d(U),S(m.$$.fragment,U),l=d(U),S(f.$$.fragment,U),b=d(U),S(u.$$.fragment,U),p=d(U),S(w.$$.fragment,U),c=d(U),S(L.$$.fragment,U),E=d(U),S(q.$$.fragment,U),V=d(U),S(B.$$.fragment,U),Q=d(U),S(Y.$$.fragment,U),D=d(U),S(F.$$.fragment,U)},m(U,le){r(U,e,le),r(U,s,le),A(t,U,le),r(U,$,le),A(i,U,le),r(U,n,le),A(m,U,le),r(U,l,le),A(f,U,le),r(U,b,le),A(u,U,le),r(U,p,le),A(w,U,le),r(U,c,le),A(L,U,le),r(U,E,le),A(q,U,le),r(U,V,le),A(B,U,le),r(U,Q,le),A(Y,U,le),r(U,D,le),A(F,U,le),ne=!0},p(U,le){const ae={};le&1&&(ae.$$scope={dirty:le,ctx:U}),t.$set(ae);const fe={};le&1&&(fe.$$scope={dirty:le,ctx:U}),i.$set(fe);const re={};le&1&&(re.$$scope={dirty:le,ctx:U}),m.$set(re);const pe={};le&1&&(pe.$$scope={dirty:le,ctx:U}),f.$set(pe);const oe={};le&1&&(oe.$$scope={dirty:le,ctx:U}),u.$set(oe);const $e={};le&1&&($e.$$scope={dirty:le,ctx:U}),w.$set($e);const ce={};le&1&&(ce.$$scope={dirty:le,ctx:U}),L.$set(ce);const me={};le&1&&(me.$$scope={dirty:le,ctx:U}),q.$set(me);const R={};le&1&&(R.$$scope={dirty:le,ctx:U}),B.$set(R);const te={};le&1&&(te.$$scope={dirty:le,ctx:U}),Y.$set(te);const J={};le&1&&(J.$$scope={dirty:le,ctx:U}),F.$set(J)},i(U){ne||(j(t.$$.fragment,U),j(i.$$.fragment,U),j(m.$$.fragment,U),j(f.$$.fragment,U),j(u.$$.fragment,U),j(w.$$.fragment,U),j(L.$$.fragment,U),j(q.$$.fragment,U),j(B.$$.fragment,U),j(Y.$$.fragment,U),j(F.$$.fragment,U),ne=!0)},o(U){H(t.$$.fragment,U),H(i.$$.fragment,U),H(m.$$.fragment,U),H(f.$$.fragment,U),H(u.$$.fragment,U),H(w.$$.fragment,U),H(L.$$.fragment,U),H(q.$$.fragment,U),H(B.$$.fragment,U),H(Y.$$.fragment,U),H(F.$$.fragment,U),ne=!1},d(U){U&&(a(e),a(s),a($),a(n),a(l),a(b),a(p),a(c),a(E),a(V),a(Q),a(D)),M(t,U),M(i,U),M(m,U),M(f,U),M(u,U),M(w,U),M(L,U),M(q,U),M(B,U),M(Y,U),M(F,U)}}}function jn(x){let e,o,s,t;return e=new N({props:{$$slots:{default:[un]},$$scope:{ctx:x}}}),s=new N({props:{$$slots:{default:[Hn]},$$scope:{ctx:x}}}),{c(){T(e.$$.fragment),o=v(),T(s.$$.fragment)},l($){S(e.$$.fragment,$),o=d($),S(s.$$.fragment,$)},m($,i){A(e,$,i),r($,o,i),A(s,$,i),t=!0},p($,[i]){const n={};i&1&&(n.$$scope={dirty:i,ctx:$}),e.$set(n);const m={};i&1&&(m.$$scope={dirty:i,ctx:$}),s.$set(m)},i($){t||(j(e.$$.fragment,$),j(s.$$.fragment,$),t=!0)},o($){H(e.$$.fragment,$),H(s.$$.fragment,$),t=!1},d($){$&&a(o),M(e,$),M(s,$)}}}class An extends Be{constructor(e){super(),Fe(this,e,null,jn,Ne,{})}}function Sn(x){let e,o=`L'encapsulation est un concept fondamental de la programmation orientée objet. Elle consiste à
			cacher les détails internes d'une classe et à ne fournir qu'une interface publique pour
			interagir avec cette classe.`,s,t,$=`L'encapsulation, c'est comme une voiture : vous appuyez sur l'accélérateur, vous n'avez pas
			besoin de savoir comment fonctionne le moteur. C'est un principe de "boîte noire" : on expose
			ce qu'il faut, on cache le reste. Historiquement, ce concept vient de la modularité en génie
			logiciel des années 70.`;return{c(){e=C("p"),e.textContent=o,s=v(),t=C("aside"),t.textContent=$,this.h()},l(i){e=_(i,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1tljpvn"&&(e.textContent=o),s=d(i),t=_(i,"ASIDE",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1drycps"&&(t.textContent=$),this.h()},h(){h(t,"class","notes")},m(i,n){r(i,e,n),r(i,s,n),r(i,t,n)},p:O,d(i){i&&(a(e),a(s),a(t))}}}function Tn(x){let e,o=`L'encapsulation permet de protéger les données et de contrôler leur accès. Elle rend également
			le code plus modulaire et plus facile à maintenir.`,s,t,$=`En entreprise, c'est crucial. Imaginez une équipe de 20 développeurs : si tout le monde peut
			modifier n'importe quel attribut, c'est le chaos. L'encapsulation impose des "contrats" entre
			les développeurs. On définit ce qui peut être utilisé et comment. Anecdote : beaucoup de bugs
			critiques en production viennent de données modifiées "par accident" car non protégées.`;return{c(){e=C("p"),e.textContent=o,s=v(),t=C("aside"),t.textContent=$,this.h()},l(i){e=_(i,"P",{"data-svelte-h":!0}),g(e)!=="svelte-doneo5"&&(e.textContent=o),s=d(i),t=_(i,"ASIDE",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-niiwx"&&(t.textContent=$),this.h()},h(){h(t,"class","notes")},m(i,n){r(i,e,n),r(i,s,n),r(i,t,n)},p:O,d(i){i&&(a(e),a(s),a(t))}}}function En(x){let e,o=`Pour encapsuler des données, on utilise des modificateurs d'accès qui déterminent la
			visibilité des attributs et des méthodes d'une classe.`,s,t,$="<li><code>public</code> : accessible depuis n&#39;importe où</li> <li><code>private</code> : accessible uniquement depuis la classe elle-même</li> <li><code>protected</code> : accessible depuis la classe et ses sous-classes</li>",i,n,m=`Il existe aussi le niveau "package-private" (sans modificateur) : accessible uniquement dans
			le même package. En pratique, 90% du temps vous utiliserez private pour les attributs et
			public pour les méthodes d'interface. Le protected est surtout utile dans les
			bibliothèques/frameworks où on veut permettre l'extension par héritage.`;return{c(){e=C("p"),e.textContent=o,s=v(),t=C("ul"),t.innerHTML=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1dtmw8t"&&(e.textContent=o),s=d(l),t=_(l,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-be97eu"&&(t.innerHTML=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-wx1qlj"&&(n.textContent=m),this.h()},h(){h(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function In(x){let e=`
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
    `,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Dn(x){let e,o="Voici un exemple d'encapsulation en Java :",s,t,$,i,n=`C'est le pattern classique JavaBean. Vous le verrez partout dans les frameworks Java (Spring,
			Hibernate...). Les IDE génèrent ces getters/setters automatiquement : clic droit → Generate →
			Getters and Setters. Important : même si c'est "juste" un getter/setter, passez par ces
			méthodes. Ça vous permettra d'ajouter de la logique plus tard.`,m;return t=new ie({props:{$$slots:{default:[In]},$$scope:{ctx:x}}}),{c(){e=C("p"),e.textContent=o,s=v(),T(t.$$.fragment),$=v(),i=C("aside"),i.textContent=n,this.h()},l(l){e=_(l,"P",{"data-svelte-h":!0}),g(e)!=="svelte-sf7cl9"&&(e.textContent=o),s=d(l),S(t.$$.fragment,l),$=d(l),i=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-19iwzui"&&(i.textContent=n),this.h()},h(){h(i,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),A(t,l,f),r(l,$,f),r(l,i,f),m=!0},p(l,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:l}),t.$set(b)},i(l){m||(j(t.$$.fragment,l),m=!0)},o(l){H(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a($),a(i)),M(t,l)}}}function Vn(x){let e,o=`Dans cet exemple, les attributs <code>nom</code> et <code>age</code> sont privés et ne peuvent
			pas être accédés directement depuis l&#39;extérieur. On utilise des méthodes publiques,
			<code>getNom</code>, <code>setNom</code>, <code>getAge</code> et <code>setAge</code>, pour y
			accéder et les modifier.`,s,t,$=`Fondamentalement, <code>getNom</code> et <code>setNom</code> sont de simples méthodes, mais
			compte tenu de leur rôle, on les appelle des <i>accesseurs</i> et des <i>mutateurs</i>.`;return{c(){e=C("p"),e.innerHTML=o,s=v(),t=C("p"),t.innerHTML=$,this.h()},l(i){e=_(i,"P",{"data-svelte-h":!0}),g(e)!=="svelte-tuu3n3"&&(e.innerHTML=o),s=d(i),t=_(i,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-t116p3"&&(t.innerHTML=$),this.h()},h(){h(t,"class","text-important")},m(i,n){r(i,e,n),r(i,s,n),r(i,t,n)},p:O,d(i){i&&(a(e),a(s),a(t))}}}function kn(x){let e=`
    public void setAge(int age) {
        if (age >= 0) {
            this.age = age;
        }
    }
    `,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function zn(x){let e,o=`L&#39;encapsulation permet de contrôler l&#39;accès aux données et de s&#39;assurer qu&#39;elles sont
			manipulées de manière cohérente. Par exemple, on peut ajouter des vérifications dans les
			méthodes <code>set</code> pour s&#39;assurer que les valeurs sont valides.`,s,t,$,i,n=`En pratique, vous pouvez aller plus loin : lever une exception, logger l'erreur, notifier
			l'utilisateur... Ce pattern s'appelle "defensive programming" - on se protège des mauvaises
			utilisations. Dans les frameworks modernes, on utilise souvent des annotations de validation
			(@NotNull, @Min, @Max) au lieu de coder à la main.`,m;return t=new ie({props:{$$slots:{default:[kn]},$$scope:{ctx:x}}}),{c(){e=C("p"),e.innerHTML=o,s=v(),T(t.$$.fragment),$=v(),i=C("aside"),i.textContent=n,this.h()},l(l){e=_(l,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1yoywng"&&(e.innerHTML=o),s=d(l),S(t.$$.fragment,l),$=d(l),i=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-phtreb"&&(i.textContent=n),this.h()},h(){h(i,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),A(t,l,f),r(l,$,f),r(l,i,f),m=!0},p(l,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:l}),t.$set(b)},i(l){m||(j(t.$$.fragment,l),m=!0)},o(l){H(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a($),a(i)),M(t,l)}}}function On(x){let e,o=`L&#39;utilisation du modificateur <code>protected</code> permet aux classes dérivées d&#39;accéder aux attributs
			et méthodes de la classe parente. Cela est utile lorsque l&#39;on souhaite permettre à des sous-classes
			d&#39;utiliser ou de modifier des données tout en les protégeant de l&#39;accès direct extérieur.`,s,t,$=`Attention : protected ne veut pas dire "accessible seulement aux sous-classes". En Java,
			protected est aussi accessible depuis le même package ! C'est une subtilité souvent oubliée.
			Bonne pratique : préférez private + getter protected si vous voulez vraiment contrôler
			l'accès.`;return{c(){e=C("p"),e.innerHTML=o,s=v(),t=C("aside"),t.textContent=$,this.h()},l(i){e=_(i,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1om2flv"&&(e.innerHTML=o),s=d(i),t=_(i,"ASIDE",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1l5eyve"&&(t.textContent=$),this.h()},h(){h(t,"class","notes")},m(i,n){r(i,e,n),r(i,s,n),r(i,t,n)},p:O,d(i){i&&(a(e),a(s),a(t))}}}function Un(x){let e=`
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
    `,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Rn(x){let e,o,s,t=`Dans cet exemple, l&#39;attribut <code>nom</code> est protégé, ce qui permet à la classe
			<code>Chien</code>
			d&#39;y accéder dans sa méthode <code>aboyer</code>.`,$;return e=new ie({props:{$$slots:{default:[Un]},$$scope:{ctx:x}}}),{c(){T(e.$$.fragment),o=v(),s=C("p"),s.innerHTML=t},l(i){S(e.$$.fragment,i),o=d(i),s=_(i,"P",{"data-svelte-h":!0}),g(s)!=="svelte-pqjf38"&&(s.innerHTML=t)},m(i,n){A(e,i,n),r(i,o,n),r(i,s,n),$=!0},p(i,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:i}),e.$set(m)},i(i){$||(j(e.$$.fragment,i),$=!0)},o(i){H(e.$$.fragment,i),$=!1},d(i){i&&(a(o),a(s)),M(e,i)}}}function Jn(x){let e=`
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
    `,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Nn(x){let e,o=`Les attributs privés sont utilisés pour restreindre l'accès direct aux données sensibles ou
			critiques, garantissant ainsi que seules des méthodes contrôlées peuvent les modifier.`,s,t,$,i,n=`Dans cet exemple, le solde du compte est privé et ne peut être modifié que par les méthodes <code>deposer</code>
			et <code>retirer</code>, lesquelles effectuent des vérifications.`,m,l,f=`C'est l'exemple classique ! Imaginez si le solde était public : compte.solde = -1000000.
			Catastrophe. Dans la vraie vie, les banques ajoutent aussi : logging, audit trail,
			notifications, limites de retrait... L'encapsulation permet d'ajouter tout ça sans changer
			l'interface publique.`,b;return t=new ie({props:{$$slots:{default:[Jn]},$$scope:{ctx:x}}}),{c(){e=C("p"),e.textContent=o,s=v(),T(t.$$.fragment),$=v(),i=C("p"),i.innerHTML=n,m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"P",{"data-svelte-h":!0}),g(e)!=="svelte-usm7ui"&&(e.textContent=o),s=d(u),S(t.$$.fragment,u),$=d(u),i=_(u,"P",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-1hber6c"&&(i.innerHTML=n),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-ey8qs8"&&(l.textContent=f),this.h()},h(){h(i,"class","smaller"),h(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),A(t,u,p),r(u,$,p),r(u,i,p),r(u,m,p),r(u,l,p),b=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),t.$set(w)},i(u){b||(j(t.$$.fragment,u),b=!0)},o(u){H(t.$$.fragment,u),b=!1},d(u){u&&(a(e),a(s),a($),a(i),a(m),a(l)),M(t,u)}}}function Bn(x){let e,o="Verbosité",s,t,$=`Le Java est parfois critiqué pour sa verbosité. En effet, le code Java peut sembler plus long
			et plus complexe que d'autres langages.`,i,n,m=`Vous devez écrire environ 7 lignes pour déclarer un simple attribut avec ses accesseurs et
			mutateurs.`,l,f,b=`C'est le principal reproche fait à Java. Python ou Kotlin font ça en 1 ligne. Mais Java 14+ a
			introduit les Records qui réduisent beaucoup ce boilerplate. Et les IDE modernes génèrent tout
			ça en 2 clics. En pratique, ce n'est plus vraiment un problème. Lombok est aussi très
			populaire : @Data génère tous les getters/setters automatiquement.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("p"),n.textContent=m,l=v(),f=C("aside"),f.textContent=b,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-11a3931"&&(e.textContent=o),s=d(u),t=_(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-eslzxf"&&(t.textContent=$),i=d(u),n=_(u,"P",{"data-svelte-h":!0}),g(n)!=="svelte-ishs47"&&(n.textContent=m),l=d(u),f=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-76j7no"&&(f.textContent=b),this.h()},h(){h(f,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),r(u,n,p),r(u,l,p),r(u,f,p)},p:O,d(u){u&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f))}}}function Fn(x){let e=`
        // C#
        class Personne {
            public string Nom { get; }
            public int Age    { get; set; }
            public int Taille {
                get; 
                set => field = value; 
            }
        }
        `,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Gn(x){let e=`
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
                `,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Qn(x){let e,o="D'autres langages permettent de déclarer des accesseurs et mutateurs de manière plus concise :",s,t,$,i,n,m,l,f=`En Java, un IDE peut générer automatiquement ces méthodes. Cela peut sembler pénible, mais il
			faut le faire.`,b;return $=new ie({props:{$$slots:{default:[Fn]},$$scope:{ctx:x}}}),n=new ie({props:{$$slots:{default:[Gn]},$$scope:{ctx:x}}}),{c(){e=C("p"),e.textContent=o,s=v(),t=C("div"),T($.$$.fragment),i=v(),T(n.$$.fragment),m=v(),l=C("p"),l.textContent=f,this.h()},l(u){e=_(u,"P",{"data-svelte-h":!0}),g(e)!=="svelte-v898e4"&&(e.textContent=o),s=d(u),t=_(u,"DIV",{class:!0});var p=ue(t);S($.$$.fragment,p),i=d(p),S(n.$$.fragment,p),p.forEach(a),m=d(u),l=_(u,"P",{"data-svelte-h":!0}),g(l)!=="svelte-9ubtus"&&(l.textContent=f),this.h()},h(){h(t,"class","flex flex-row")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),A($,t,null),ee(t,i),A(n,t,null),r(u,m,p),r(u,l,p),b=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),$.$set(w);const c={};p&1&&(c.$$scope={dirty:p,ctx:u}),n.$set(c)},i(u){b||(j($.$$.fragment,u),j(n.$$.fragment,u),b=!0)},o(u){H($.$$.fragment,u),H(n.$$.fragment,u),b=!1},d(u){u&&(a(e),a(s),a(t),a(m),a(l)),M($),M(n)}}}function Kn(x){let e=`
    public void setMobilePhoneNumber(String mobilePhoneNumber) {
        this.mobilePhoneNumber = mobilePhoneNumber;
        envoyerEmailPourPrevenirUtilisateurDeLaModification(email, mobilePhoneNumber);
    }
    `,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Xn(x){let e,o="Maintenance",s,t,$=`En encapsulant les données et en contrôlant leur accès, vous facilitez la maintenance de votre
			code. Imaginez que vous avez laissé un attribut public et que vous le modifiez dans 50
			endroits différents. Si vous souhaitez désormais enregistrer chaque modification, vous devrez
			intervenir à ces 50 endroits.`,i,n,m,l,f=`C'est le principe Open/Closed : ouvert à l'extension, fermé à la modification. Dans les gros
			projets, c'est vital. J'ai vu des équipes passer des semaines à refactorer du code parce qu'un
			attribut était public. Avec un setter, on ajoute la logique à UN endroit. C'est le Single
			Point of Change.`,b;return n=new ie({props:{$$slots:{default:[Kn]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),T(n.$$.fragment),m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1ky5g9v"&&(e.textContent=o),s=d(u),t=_(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1qmbise"&&(t.textContent=$),i=d(u),S(n.$$.fragment,u),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-gfpvu8"&&(l.textContent=f),this.h()},h(){h(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),A(n,u,p),r(u,m,p),r(u,l,p),b=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),n.$set(w)},i(u){b||(j(n.$$.fragment,u),b=!0)},o(u){H(n.$$.fragment,u),b=!1},d(u){u&&(a(e),a(s),a(t),a(i),a(m),a(l)),M(n,u)}}}function Yn(x){let e,o="Et maintenant ?",s,t,$="Vers la généralisation et l'héritage";return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,this.h()},l(i){e=_(i,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1m9nj2p"&&(e.textContent=o),s=d(i),t=_(i,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-b0r7rg"&&(t.textContent=$),this.h()},h(){h(e,"class","text-5xl"),h(t,"class","text-2xl text-gray-400")},m(i,n){r(i,e,n),r(i,s,n),r(i,t,n)},p:O,d(i){i&&(a(e),a(s),a(t))}}}function Wn(x){let e=`
class CompteCourant {
    private String numero;
    private double solde;
    private String titulaire;
    
    void deposer(double m) {...}
    void retirer(double m) {...}
    void calculerInterets() {...}
}
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Zn(x){let e=`
class CompteEpargne {
    private String numero;
    private double solde;
    private String titulaire;
    
    void deposer(double m) {...}
    void retirer(double m) {...}
    void calculerInterets() {...}
}
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function yn(x){let e,o="Le problème de la duplication",s,t,$="Imaginez que vous devez modéliser plusieurs types de comptes bancaires :",i,n,m,l,f,b,u,p="😱 Beaucoup de code dupliqué !",w;return m=new ie({props:{class:"language-java",$$slots:{default:[Wn]},$$scope:{ctx:x}}}),f=new ie({props:{class:"language-java",$$slots:{default:[Zn]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("div"),T(m.$$.fragment),l=v(),T(f.$$.fragment),b=v(),u=C("p"),u.textContent=p,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1121kts"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1k7fi1x"&&(t.textContent=$),i=d(c),n=_(c,"DIV",{class:!0});var L=ue(n);S(m.$$.fragment,L),l=d(L),S(f.$$.fragment,L),L.forEach(a),b=d(c),u=_(c,"P",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-1kobn2k"&&(u.textContent=p),this.h()},h(){h(n,"class","grid grid-cols-2 gap-4 mt-6"),h(u,"class","fragment text-red-400 mt-4 font-bold")},m(c,L){r(c,e,L),r(c,s,L),r(c,t,L),r(c,i,L),r(c,n,L),A(m,n,null),ee(n,l),A(f,n,null),r(c,b,L),r(c,u,L),w=!0},p(c,L){const E={};L&1&&(E.$$scope={dirty:L,ctx:c}),m.$set(E);const q={};L&1&&(q.$$scope={dirty:L,ctx:c}),f.$set(q)},i(c){w||(j(m.$$.fragment,c),j(f.$$.fragment,c),w=!0)},o(c){H(m.$$.fragment,c),H(f.$$.fragment,c),w=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(b),a(u)),M(m),M(f)}}}function ei(x){let e,o="Généraliser les concepts",s,t,$='En observant les classes, on remarque des <span class="text-important">points communs</span> :',i,n,m='<li class="fragment">Tous les comptes ont un numéro, un solde, un titulaire</li> <li class="fragment">Tous peuvent déposer et retirer de l&#39;argent</li> <li class="fragment">Seul le calcul des intérêts diffère</li>',l,f,b=`💡 On peut extraire un concept <span class="text-important">plus général</span> :
			<code>CompteBancaire</code>`,u,p,w="C&#39;est la <b>généralisation</b> qui mène naturellement à l&#39;<b>héritage</b> !";return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("ul"),n.innerHTML=m,l=v(),f=C("p"),f.innerHTML=b,u=v(),p=C("p"),p.innerHTML=w,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-mkht2s"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),g(t)!=="svelte-s94fqs"&&(t.innerHTML=$),i=d(c),n=_(c,"UL",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1txundk"&&(n.innerHTML=m),l=d(c),f=_(c,"P",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-mlbnsz"&&(f.innerHTML=b),u=d(c),p=_(c,"P",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-1e3gzbu"&&(p.innerHTML=w),this.h()},h(){h(n,"class","text-xl mt-6"),h(f,"class","fragment mt-8 text-accent-200 font-bold"),h(p,"class","fragment text-important")},m(c,L){r(c,e,L),r(c,s,L),r(c,t,L),r(c,i,L),r(c,n,L),r(c,l,L),r(c,f,L),r(c,u,L),r(c,p,L)},p:O,d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f),a(u),a(p))}}}function ti(x){let e=`
@startuml
class CompteBancaire {
  - numero: String
  - solde: double
  - titulaire: String
  + deposer(montant)
  + retirer(montant)
  {abstract} + calculerInterets()
}

class CompteCourant extends CompteBancaire {
  + calculerInterets()
}

class CompteEpargne extends CompteBancaire {
  - tauxInteret: double
  + calculerInterets()
}
@enduml
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function si(x){let e,o="Visualiser la généralisation",s,t,$,i,n=`Les éléments <span class="text-important">communs</span> sont dans la classe générale,<br/>
			les <span class="text-important">spécificités</span> dans les classes dérivées.`,m;return t=new Ie({props:{$$slots:{default:[ti]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment),$=v(),i=C("p"),i.innerHTML=n,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-14isadv"&&(e.textContent=o),s=d(l),S(t.$$.fragment,l),$=d(l),i=_(l,"P",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-lecgmk"&&(i.innerHTML=n),this.h()},h(){h(i,"class","fragment mt-4")},m(l,f){r(l,e,f),r(l,s,f),A(t,l,f),r(l,$,f),r(l,i,f),m=!0},p(l,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:l}),t.$set(b)},i(l){m||(j(t.$$.fragment,l),m=!0)},o(l){H(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a($),a(i)),M(t,l)}}}function li(x){let e,o="Récapitulatif",s,t,$='<p class="fragment">✅ L&#39;<span class="text-important">encapsulation</span> protège vos données</p> <p class="fragment mt-4">✅ La <span class="text-important">généralisation</span> évite la duplication</p> <p class="fragment mt-4">✅ L&#39;<span class="text-important">héritage</span> structure votre code</p>',i,n,m="🔮 Voyons maintenant comment implémenter cela en Java !";return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("div"),t.innerHTML=$,i=v(),n=C("p"),n.textContent=m,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-ri7iuh"&&(e.textContent=o),s=d(l),t=_(l,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-126wtu4"&&(t.innerHTML=$),i=d(l),n=_(l,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-15gbfwm"&&(n.textContent=m),this.h()},h(){h(t,"class","text-xl"),h(n,"class","fragment mt-8 text-accent-200 text-2xl font-bold")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function ni(x){let e,o="Encapsulation",s,t,$,i,n,m,l,f,b,u,p,w,c,L,E,q,V,B,Q,Y,D,F,ne,U,le,ae,fe,re,pe,oe,$e,ce,me,R,te;return t=new N({props:{$$slots:{default:[Sn]},$$scope:{ctx:x}}}),i=new N({props:{$$slots:{default:[Tn]},$$scope:{ctx:x}}}),m=new N({props:{$$slots:{default:[En]},$$scope:{ctx:x}}}),f=new N({props:{$$slots:{default:[Dn]},$$scope:{ctx:x}}}),u=new N({props:{$$slots:{default:[Vn]},$$scope:{ctx:x}}}),w=new N({props:{$$slots:{default:[zn]},$$scope:{ctx:x}}}),L=new N({props:{$$slots:{default:[On]},$$scope:{ctx:x}}}),q=new N({props:{$$slots:{default:[Rn]},$$scope:{ctx:x}}}),B=new N({props:{$$slots:{default:[Nn]},$$scope:{ctx:x}}}),Y=new N({props:{data_background_color:"#00353F",$$slots:{default:[Bn]},$$scope:{ctx:x}}}),F=new N({props:{data_background_color:"#00353F",$$slots:{default:[Qn]},$$scope:{ctx:x}}}),U=new N({props:{$$slots:{default:[Xn]},$$scope:{ctx:x}}}),ae=new N({props:{data_background_color:"#1a1a2e",$$slots:{default:[Yn]},$$scope:{ctx:x}}}),re=new N({props:{$$slots:{default:[yn]},$$scope:{ctx:x}}}),oe=new N({props:{$$slots:{default:[ei]},$$scope:{ctx:x}}}),ce=new N({props:{$$slots:{default:[si]},$$scope:{ctx:x}}}),R=new N({props:{$$slots:{default:[li]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment),$=v(),T(i.$$.fragment),n=v(),T(m.$$.fragment),l=v(),T(f.$$.fragment),b=v(),T(u.$$.fragment),p=v(),T(w.$$.fragment),c=v(),T(L.$$.fragment),E=v(),T(q.$$.fragment),V=v(),T(B.$$.fragment),Q=v(),T(Y.$$.fragment),D=v(),T(F.$$.fragment),ne=v(),T(U.$$.fragment),le=v(),T(ae.$$.fragment),fe=v(),T(re.$$.fragment),pe=v(),T(oe.$$.fragment),$e=v(),T(ce.$$.fragment),me=v(),T(R.$$.fragment)},l(J){e=_(J,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-d8x7o6"&&(e.textContent=o),s=d(J),S(t.$$.fragment,J),$=d(J),S(i.$$.fragment,J),n=d(J),S(m.$$.fragment,J),l=d(J),S(f.$$.fragment,J),b=d(J),S(u.$$.fragment,J),p=d(J),S(w.$$.fragment,J),c=d(J),S(L.$$.fragment,J),E=d(J),S(q.$$.fragment,J),V=d(J),S(B.$$.fragment,J),Q=d(J),S(Y.$$.fragment,J),D=d(J),S(F.$$.fragment,J),ne=d(J),S(U.$$.fragment,J),le=d(J),S(ae.$$.fragment,J),fe=d(J),S(re.$$.fragment,J),pe=d(J),S(oe.$$.fragment,J),$e=d(J),S(ce.$$.fragment,J),me=d(J),S(R.$$.fragment,J)},m(J,se){r(J,e,se),r(J,s,se),A(t,J,se),r(J,$,se),A(i,J,se),r(J,n,se),A(m,J,se),r(J,l,se),A(f,J,se),r(J,b,se),A(u,J,se),r(J,p,se),A(w,J,se),r(J,c,se),A(L,J,se),r(J,E,se),A(q,J,se),r(J,V,se),A(B,J,se),r(J,Q,se),A(Y,J,se),r(J,D,se),A(F,J,se),r(J,ne,se),A(U,J,se),r(J,le,se),A(ae,J,se),r(J,fe,se),A(re,J,se),r(J,pe,se),A(oe,J,se),r(J,$e,se),A(ce,J,se),r(J,me,se),A(R,J,se),te=!0},p(J,se){const de={};se&1&&(de.$$scope={dirty:se,ctx:J}),t.$set(de);const he={};se&1&&(he.$$scope={dirty:se,ctx:J}),i.$set(he);const ve={};se&1&&(ve.$$scope={dirty:se,ctx:J}),m.$set(ve);const ge={};se&1&&(ge.$$scope={dirty:se,ctx:J}),f.$set(ge);const xe={};se&1&&(xe.$$scope={dirty:se,ctx:J}),u.$set(xe);const be={};se&1&&(be.$$scope={dirty:se,ctx:J}),w.$set(be);const z={};se&1&&(z.$$scope={dirty:se,ctx:J}),L.$set(z);const W={};se&1&&(W.$$scope={dirty:se,ctx:J}),q.$set(W);const k={};se&1&&(k.$$scope={dirty:se,ctx:J}),B.$set(k);const X={};se&1&&(X.$$scope={dirty:se,ctx:J}),Y.$set(X);const Le={};se&1&&(Le.$$scope={dirty:se,ctx:J}),F.$set(Le);const we={};se&1&&(we.$$scope={dirty:se,ctx:J}),U.$set(we);const qe={};se&1&&(qe.$$scope={dirty:se,ctx:J}),ae.$set(qe);const Pe={};se&1&&(Pe.$$scope={dirty:se,ctx:J}),re.$set(Pe);const Me={};se&1&&(Me.$$scope={dirty:se,ctx:J}),oe.$set(Me);const He={};se&1&&(He.$$scope={dirty:se,ctx:J}),ce.$set(He);const I={};se&1&&(I.$$scope={dirty:se,ctx:J}),R.$set(I)},i(J){te||(j(t.$$.fragment,J),j(i.$$.fragment,J),j(m.$$.fragment,J),j(f.$$.fragment,J),j(u.$$.fragment,J),j(w.$$.fragment,J),j(L.$$.fragment,J),j(q.$$.fragment,J),j(B.$$.fragment,J),j(Y.$$.fragment,J),j(F.$$.fragment,J),j(U.$$.fragment,J),j(ae.$$.fragment,J),j(re.$$.fragment,J),j(oe.$$.fragment,J),j(ce.$$.fragment,J),j(R.$$.fragment,J),te=!0)},o(J){H(t.$$.fragment,J),H(i.$$.fragment,J),H(m.$$.fragment,J),H(f.$$.fragment,J),H(u.$$.fragment,J),H(w.$$.fragment,J),H(L.$$.fragment,J),H(q.$$.fragment,J),H(B.$$.fragment,J),H(Y.$$.fragment,J),H(F.$$.fragment,J),H(U.$$.fragment,J),H(ae.$$.fragment,J),H(re.$$.fragment,J),H(oe.$$.fragment,J),H(ce.$$.fragment,J),H(R.$$.fragment,J),te=!1},d(J){J&&(a(e),a(s),a($),a(n),a(l),a(b),a(p),a(c),a(E),a(V),a(Q),a(D),a(ne),a(le),a(fe),a(pe),a($e),a(me)),M(t,J),M(i,J),M(m,J),M(f,J),M(u,J),M(w,J),M(L,J),M(q,J),M(B,J),M(Y,J),M(F,J),M(U,J),M(ae,J),M(re,J),M(oe,J),M(ce,J),M(R,J)}}}function ii(x){let e,o;return e=new N({props:{$$slots:{default:[ni]},$$scope:{ctx:x}}}),{c(){T(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,t){A(e,s,t),o=!0},p(s,[t]){const $={};t&1&&($.$$scope={dirty:t,ctx:s}),e.$set($)},i(s){o||(j(e.$$.fragment,s),o=!0)},o(s){H(e.$$.fragment,s),o=!1},d(s){M(e,s)}}}class ai extends Be{constructor(e){super(),Fe(this,e,null,ii,Ne,{})}}function ri(x){let e,o="Représenter le monde réel",s,t,$='La POO vise à <span class="text-important">modéliser des concepts du monde réel</span> dans notre code.',i,n,m='<div class="fragment"><h4 class="text-accent-200">🏢 En entreprise</h4> <ul class="text-xl"><li>Un <b>Client</b></li> <li>Une <b>Facture</b></li> <li>Une <b>Transaction</b></li> <li>Un <b>Produit</b></li></ul></div> <div class="fragment"><h4 class="text-accent-200">🎮 Dans un jeu</h4> <ul class="text-xl"><li>Un <b>Joueur</b></li> <li>Un <b>Ennemi</b></li> <li>Une <b>Arme</b></li> <li>Un <b>Niveau</b></li></ul></div>',l,f,b="Chaque concept devient une <b>classe</b>, chaque instance concrète devient un <b>objet</b>.",u,p,w=`La POO est née de ce besoin : les programmeurs voulaient modéliser le monde réel dans leurs programmes.\r
			Avant, on avait des structures de données et des fonctions séparées. Maintenant, tout est regroupé.\r
			C'est plus intuitif pour l'humain : on pense en termes d'objets, pas en termes de bits.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("div"),n.innerHTML=m,l=v(),f=C("p"),f.innerHTML=b,u=v(),p=C("aside"),p.textContent=w,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1nsqnl5"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),g(t)!=="svelte-gu1hhe"&&(t.innerHTML=$),i=d(c),n=_(c,"DIV",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-ssqwsa"&&(n.innerHTML=m),l=d(c),f=_(c,"P",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-ys061m"&&(f.innerHTML=b),u=d(c),p=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-10ve9bx"&&(p.textContent=w),this.h()},h(){h(n,"class","grid grid-cols-2 gap-6 mt-8"),h(f,"class","fragment mt-8 text-important font-bold"),h(p,"class","notes")},m(c,L){r(c,e,L),r(c,s,L),r(c,t,L),r(c,i,L),r(c,n,L),r(c,l,L),r(c,f,L),r(c,u,L),r(c,p,L)},p:O,d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f),a(u),a(p))}}}function ui(x){let e,o="Qu'est-ce qu'un objet ?",s,t,$='Un <span class="text-important">objet</span> est une entité qui regroupe :',i,n,m='<li class="fragment"><b>Des données</b> → les <span class="text-important">attributs</span></li> <li class="fragment"><b>Des comportements</b> → les <span class="text-important">méthodes</span></li>',l,f,b='Un objet est une <b>instance</b> d&#39;une <span class="text-important">classe</span>.',u,p,w=`La classe c'est le plan, l'objet c'est la maison construite à partir du plan.\r
			On peut construire plusieurs maisons à partir du même plan.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("ul"),n.innerHTML=m,l=v(),f=C("p"),f.innerHTML=b,u=v(),p=C("aside"),p.textContent=w,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1j2xnsl"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),g(t)!=="svelte-ikoph5"&&(t.innerHTML=$),i=d(c),n=_(c,"UL",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-urcwzy"&&(n.innerHTML=m),l=d(c),f=_(c,"P",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-126jdov"&&(f.innerHTML=b),u=d(c),p=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-1j9siwx"&&(p.textContent=w),this.h()},h(){h(n,"class","mt-4"),h(f,"class","fragment mt-6"),h(p,"class","notes")},m(c,L){r(c,e,L),r(c,s,L),r(c,t,L),r(c,i,L),r(c,n,L),r(c,l,L),r(c,f,L),r(c,u,L),r(c,p,L)},p:O,d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f),a(u),a(p))}}}function oi(x){let e=`
class Client {
    // Attributs (données)
    String nom;
    String email;
    List<Commande> commandes;
    
    // Méthodes (comportements)
    void passerCommande() {...}
    void consulterFactures() {...}
}
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function ci(x){let e,o="Exemple concret : un Client",s,t,$,i='<h4 class="text-accent-200">Dans le monde réel</h4> <ul class="text-xl"><li>Nom, prénom</li> <li>Email, téléphone</li> <li>Historique d&#39;achats</li> <li>Peut passer commande</li> <li>Peut consulter ses factures</li></ul>',n,m,l,f="En POO",b,u,p,w,c="💡 La classe modélise le <b>concept</b>, l&#39;objet représente une <b>instance concrète</b>.",L,E,q=`C'est un mapping 1:1 entre le métier et le code. Les analystes parlent de Client, les développeurs codent Client.\r
			C'est là toute la puissance de la POO : on parle le même langage que le métier.\r
			C'est la base du Domain-Driven Design (DDD) qu'on voit dans les entreprises modernes.`,V;return u=new ie({props:{$$slots:{default:[oi]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("div"),$=C("div"),$.innerHTML=i,n=v(),m=C("div"),l=C("h4"),l.textContent=f,b=v(),T(u.$$.fragment),p=v(),w=C("p"),w.innerHTML=c,L=v(),E=C("aside"),E.textContent=q,this.h()},l(B){e=_(B,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-19m1xis"&&(e.textContent=o),s=d(B),t=_(B,"DIV",{class:!0});var Q=ue(t);$=_(Q,"DIV",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-b6jw6w"&&($.innerHTML=i),n=d(Q),m=_(Q,"DIV",{class:!0});var Y=ue(m);l=_(Y,"H4",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-zddvi7"&&(l.textContent=f),b=d(Y),S(u.$$.fragment,Y),Y.forEach(a),Q.forEach(a),p=d(B),w=_(B,"P",{class:!0,"data-svelte-h":!0}),g(w)!=="svelte-1afjqzm"&&(w.innerHTML=c),L=d(B),E=_(B,"ASIDE",{class:!0,"data-svelte-h":!0}),g(E)!=="svelte-1lbuzzl"&&(E.textContent=q),this.h()},h(){h($,"class","flex-1"),h(l,"class","text-accent-200"),h(m,"class","flex-1 fragment"),h(t,"class","flex flex-row gap-8 items-center"),h(w,"class","fragment mt-6 text-important"),h(E,"class","notes")},m(B,Q){r(B,e,Q),r(B,s,Q),r(B,t,Q),ee(t,$),ee(t,n),ee(t,m),ee(m,l),ee(m,b),A(u,m,null),r(B,p,Q),r(B,w,Q),r(B,L,Q),r(B,E,Q),V=!0},p(B,Q){const Y={};Q&1&&(Y.$$scope={dirty:Q,ctx:B}),u.$set(Y)},i(B){V||(j(u.$$.fragment,B),V=!0)},o(B){H(u.$$.fragment,B),V=!1},d(B){B&&(a(e),a(s),a(t),a(p),a(w),a(L),a(E)),M(u)}}}function fi(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function $i(x){let e,o="Classe vs Objet",s,t,$='<div class="p-4 bg-accent-950 rounded-lg"><h4 class="text-important">📐 Classe</h4> <p class="text-xl mt-2">Le <b>plan</b>, le modèle</p> <p class="text-sm text-gray-400 mt-2">Définit les attributs et méthodes</p></div> <div class="p-4 bg-accent-950 rounded-lg"><h4 class="text-important">🏠 Objet</h4> <p class="text-xl mt-2">L&#39;<b>instance</b>, la réalisation</p> <p class="text-sm text-gray-400 mt-2">Créé à partir de la classe</p></div>',i,n,m;return n=new Ie({props:{className:"mt-6 fragment",$$slots:{default:[fi]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("div"),t.innerHTML=$,i=v(),T(n.$$.fragment),this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-aj9wlo"&&(e.textContent=o),s=d(l),t=_(l,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-17fw1f8"&&(t.innerHTML=$),i=d(l),S(n.$$.fragment,l),this.h()},h(){h(t,"class","grid grid-cols-2 gap-8 mt-6")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),A(n,l,f),m=!0},p(l,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:l}),n.$set(b)},i(l){m||(j(n.$$.fragment,l),m=!0)},o(l){H(n.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a(t),a(i)),M(n,l)}}}function pi(x){let e,o="Créer des objets",s,t,$="Le mot-clé new et les constructeurs",i,n,m=`Maintenant qu'on sait ce qu'est un objet, voyons comment en créer un.\r
			C'est la partie pratique : comment ça marche en mémoire, comment initialiser proprement.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1mkb5o2"&&(e.textContent=o),s=d(l),t=_(l,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-4k1pcc"&&(t.textContent=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-q4shbn"&&(n.textContent=m),this.h()},h(){h(e,"class","text-5xl"),h(t,"class","text-2xl text-gray-400"),h(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function mi(x){let e=`
Personne jean = new Personne();
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function di(x){let e,o="Créer un objet avec new",s,t,$='Pour créer un objet, on utilise le mot-clé <code class="text-important">new</code> suivi du nom de la classe.',i,n,m,l,f='<p>Que se passe-t-il ?</p> <ol class="text-xl"><li class="fragment">Java alloue de la mémoire pour l&#39;objet</li> <li class="fragment">Le <b>constructeur</b> de la classe est appelé</li> <li class="fragment">L&#39;objet est prêt à être utilisé</li></ol>',b,u,p=`En interne, Java alloue de la mémoire dans le "heap" (tas). La variable jean contient une référence vers cet espace.\r
			Contrairement au C, vous n'avez pas à gérer la mémoire vous-même. Le Garbage Collector s'en charge.\r
			Chaque fois que vous écrivez "new", vous créez un NOUVEL objet en mémoire.`,w;return n=new ie({props:{$$slots:{default:[mi]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),T(n.$$.fragment),m=v(),l=C("div"),l.innerHTML=f,b=v(),u=C("aside"),u.textContent=p,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1b88vsb"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1d9k2wi"&&(t.innerHTML=$),i=d(c),S(n.$$.fragment,c),m=d(c),l=_(c,"DIV",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-u2udmp"&&(l.innerHTML=f),b=d(c),u=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-11eo1e6"&&(u.textContent=p),this.h()},h(){h(l,"class","fragment mt-6"),h(u,"class","notes")},m(c,L){r(c,e,L),r(c,s,L),r(c,t,L),r(c,i,L),A(n,c,L),r(c,m,L),r(c,l,L),r(c,b,L),r(c,u,L),w=!0},p(c,L){const E={};L&1&&(E.$$scope={dirty:L,ctx:c}),n.$set(E)},i(c){w||(j(n.$$.fragment,c),w=!0)},o(c){H(n.$$.fragment,c),w=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(l),a(b),a(u)),M(n,c)}}}function vi(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function xi(x){let e,o="Le constructeur",s,t,$="Le constructeur est une <b>méthode spéciale</b> qui initialise l&#39;objet.",i,n,m,l,f=`Le constructeur a le même nom que la classe, et pas de type de retour.\r
			this fait référence à l'objet en cours de création.`,b;return n=new ie({props:{lines:"5-9|12",$$slots:{default:[vi]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),T(n.$$.fragment),m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1mde0ng"&&(e.textContent=o),s=d(u),t=_(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-acm114"&&(t.innerHTML=$),i=d(u),S(n.$$.fragment,u),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-czfue9"&&(l.textContent=f),this.h()},h(){h(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),A(n,u,p),r(u,m,p),r(u,l,p),b=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),n.$set(w)},i(u){b||(j(n.$$.fragment,u),b=!0)},o(u){H(n.$$.fragment,u),b=!1},d(u){u&&(a(e),a(s),a(t),a(i),a(m),a(l)),M(n,u)}}}function _i(x){let e=`
public Personne(String nom, String prenom, int age) {
    this.nom = nom;      // this.nom = attribut de l'objet
    this.prenom = prenom; // nom = paramètre du constructeur
    this.age = age;
}
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Ci(x){let e,o="Le mot-clé this",s,t,$='<code class="text-important">this</code> fait référence à l&#39;objet <b>courant</b>.',i,n,m,l,f="<code>this</code> permet de distinguer l&#39;attribut du paramètre quand ils ont le même nom.",b,u,p=`C'est une convention très courante : donner le même nom au paramètre et à l'attribut.\r
			Sans "this", le paramètre "cache" l'attribut (shadowing). this lève l'ambiguïté.\r
			Certains préfèrent préfixer les paramètres (pNom) ou les attributs (_nom). C'est une question de convention d'équipe.`,w;return n=new ie({props:{$$slots:{default:[_i]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),T(n.$$.fragment),m=v(),l=C("p"),l.innerHTML=f,b=v(),u=C("aside"),u.textContent=p,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-639qc6"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1d8cgp5"&&(t.innerHTML=$),i=d(c),S(n.$$.fragment,c),m=d(c),l=_(c,"P",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-vxfnkp"&&(l.innerHTML=f),b=d(c),u=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-1sk7s1j"&&(u.textContent=p),this.h()},h(){h(l,"class","fragment mt-4 text-accent-200"),h(u,"class","notes")},m(c,L){r(c,e,L),r(c,s,L),r(c,t,L),r(c,i,L),A(n,c,L),r(c,m,L),r(c,l,L),r(c,b,L),r(c,u,L),w=!0},p(c,L){const E={};L&1&&(E.$$scope={dirty:L,ctx:c}),n.$set(E)},i(c){w||(j(n.$$.fragment,c),w=!0)},o(c){H(n.$$.fragment,c),w=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(l),a(b),a(u)),M(n,c)}}}function hi(x){let e=`
public class Personne {
    String nom;
    int age;
    // Pas de constructeur défini → constructeur par défaut
}

Personne p = new Personne();  // ✅ OK
p.nom = "Jean";               // On initialise après
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function gi(x){let e,o="Constructeur par défaut",s,t,$="Si vous ne définissez aucun constructeur, Java en crée un <b>par défaut</b> (sans paramètres).",i,n,m,l,f="⚠️ Dès que vous définissez un constructeur, le constructeur par défaut disparaît !",b,u,p=`C'est un piège classique ! Si vous définissez Personne(String nom), alors new Personne() ne compile plus.\r
			Solution : définir explicitement un constructeur sans paramètres si vous en avez besoin.\r
			Les frameworks (Hibernate, Spring) ont souvent besoin du constructeur par défaut pour l'instanciation dynamique.`,w;return n=new ie({props:{$$slots:{default:[hi]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),T(n.$$.fragment),m=v(),l=C("p"),l.textContent=f,b=v(),u=C("aside"),u.textContent=p,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-u9v1v7"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),g(t)!=="svelte-m9el1s"&&(t.innerHTML=$),i=d(c),S(n.$$.fragment,c),m=d(c),l=_(c,"P",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-108fh85"&&(l.textContent=f),b=d(c),u=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-1442ab0"&&(u.textContent=p),this.h()},h(){h(l,"class","fragment text-red-400 mt-4"),h(u,"class","notes")},m(c,L){r(c,e,L),r(c,s,L),r(c,t,L),r(c,i,L),A(n,c,L),r(c,m,L),r(c,l,L),r(c,b,L),r(c,u,L),w=!0},p(c,L){const E={};L&1&&(E.$$scope={dirty:L,ctx:c}),n.$set(E)},i(c){w||(j(n.$$.fragment,c),w=!0)},o(c){H(n.$$.fragment,c),w=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(l),a(b),a(u)),M(n,c)}}}function bi(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Li(x){let e,o="Surcharge de constructeurs",s,t,$="Une classe peut avoir <b>plusieurs constructeurs</b> avec des paramètres différents.",i,n,m,l,f="<code>this(...)</code> permet d&#39;appeler un autre constructeur de la même classe.",b,u,p=`C'est le "constructor chaining". Très utile pour éviter la duplication de code.\r
			Le this() doit être la première instruction du constructeur, comme super().\r
			On voit souvent ça avec des valeurs par défaut : le constructeur simple appelle le complet.`,w;return n=new ie({props:{lines:"6-10|12-15",$$slots:{default:[bi]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),T(n.$$.fragment),m=v(),l=C("p"),l.innerHTML=f,b=v(),u=C("aside"),u.textContent=p,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1v37pf9"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1x1viiv"&&(t.innerHTML=$),i=d(c),S(n.$$.fragment,c),m=d(c),l=_(c,"P",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-sqjnx"&&(l.innerHTML=f),b=d(c),u=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-1x33foq"&&(u.textContent=p),this.h()},h(){h(l,"class","fragment text-accent-200 mt-4"),h(u,"class","notes")},m(c,L){r(c,e,L),r(c,s,L),r(c,t,L),r(c,i,L),A(n,c,L),r(c,m,L),r(c,l,L),r(c,b,L),r(c,u,L),w=!0},p(c,L){const E={};L&1&&(E.$$scope={dirty:L,ctx:c}),n.$set(E)},i(c){w||(j(n.$$.fragment,c),w=!0)},o(c){H(n.$$.fragment,c),w=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(l),a(b),a(u)),M(n,c)}}}function wi(x){let e,o="Les références en Java",s,t,$="Comprendre ce que contient vraiment une variable",i,n,m=`Avant de continuer, il faut comprendre un concept fondamental.\r
			En Java, les variables d'objets ne contiennent pas l'objet lui-même... mais une référence vers l'objet.\r
			C'est comme une adresse postale vs la maison elle-même.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-w9ik6f"&&(e.textContent=o),s=d(l),t=_(l,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-19x3pgb"&&(t.textContent=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-28inpz"&&(n.textContent=m),this.h()},h(){h(e,"class","text-5xl"),h(t,"class","text-2xl text-gray-400"),h(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function qi(x){let e=`
Personne jean = new Personne("Jean");
Personne copie = jean;  // copie la RÉFÉRENCE, pas l'objet !

copie.setAge(30);
System.out.println(jean.getAge());  // Affiche 30 ! 😱
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Pi(x){let e,o="Une variable = une référence",s,t,$="Quand vous écrivez <code>Personne jean = new Personne();</code>, que se passe-t-il ?",i,n,m='<div class="fragment"><h4 class="text-accent-200">📍 La variable</h4> <p class="text-xl">Contient une <b>adresse mémoire</b></p> <p class="text-sm text-gray-400">(comme un numéro de casier)</p></div> <div class="fragment"><h4 class="text-accent-200">📦 L&#39;objet</h4> <p class="text-xl">Stocké ailleurs en mémoire (le <b>heap</b>)</p> <p class="text-sm text-gray-400">(le contenu du casier)</p></div>',l,f,b,u,p=`C'est LE piège des débutants. Deux variables peuvent pointer vers le même objet.\r
			Modifier via une variable modifie l'objet, visible depuis l'autre variable.\r
			C'est différent des types primitifs (int, double) qui sont copiés par valeur.`,w;return f=new ie({props:{class:"fragment mt-6",$$slots:{default:[qi]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("div"),n.innerHTML=m,l=v(),T(f.$$.fragment),b=v(),u=C("aside"),u.textContent=p,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1cxx8q6"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1led4kt"&&(t.innerHTML=$),i=d(c),n=_(c,"DIV",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-6gkr7d"&&(n.innerHTML=m),l=d(c),S(f.$$.fragment,c),b=d(c),u=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-d4bv15"&&(u.textContent=p),this.h()},h(){h(n,"class","grid grid-cols-2 gap-8 mt-6"),h(u,"class","notes")},m(c,L){r(c,e,L),r(c,s,L),r(c,t,L),r(c,i,L),r(c,n,L),r(c,l,L),A(f,c,L),r(c,b,L),r(c,u,L),w=!0},p(c,L){const E={};L&1&&(E.$$scope={dirty:L,ctx:c}),f.$set(E)},i(c){w||(j(f.$$.fragment,c),w=!0)},o(c){H(f.$$.fragment,c),w=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(l),a(b),a(u)),M(f,c)}}}function Mi(x){let e=`
Personne personne = null;  // Aucun objet référencé

// C'est souvent le cas quand :
Personne resultat = chercherParNom("Toto");  // Pas trouvé → null
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Hi(x){let e,o="La valeur spéciale : null",s,t,$='Une variable peut ne pointer vers <b>rien</b>. C&#39;est la valeur <code class="text-important">null</code>.',i,n,m,l,f="⚠️ <code>null</code> signifie &quot;absence d&#39;objet&quot;. Ce n&#39;est pas un objet vide !",b,u,p=`Null c'est "rien", pas "vide". Une liste vide existe (0 éléments), null n'existe pas du tout.\r
			C'est une distinction cruciale. Null = pas de référence. Vide = objet qui ne contient rien.`,w;return n=new ie({props:{$$slots:{default:[Mi]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),T(n.$$.fragment),m=v(),l=C("p"),l.innerHTML=f,b=v(),u=C("aside"),u.textContent=p,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-upq93p"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),g(t)!=="svelte-2fjoo4"&&(t.innerHTML=$),i=d(c),S(n.$$.fragment,c),m=d(c),l=_(c,"P",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-yi5ddp"&&(l.innerHTML=f),b=d(c),u=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-j2xogk"&&(u.textContent=p),this.h()},h(){h(l,"class","fragment mt-6 text-red-400 font-bold"),h(u,"class","notes")},m(c,L){r(c,e,L),r(c,s,L),r(c,t,L),r(c,i,L),A(n,c,L),r(c,m,L),r(c,l,L),r(c,b,L),r(c,u,L),w=!0},p(c,L){const E={};L&1&&(E.$$scope={dirty:L,ctx:c}),n.$set(E)},i(c){w||(j(n.$$.fragment,c),w=!0)},o(c){H(n.$$.fragment,c),w=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(l),a(b),a(u)),M(n,c)}}}function ji(x){let e=`
Personne personne = null;
personne.getNom();  // ❌ NullPointerException !

// Le message d'erreur :
// Exception in thread "main" java.lang.NullPointerException:
// Cannot invoke "Personne.getNom()" because "personne" is null
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Ai(x){let e=`
if (personne != null) {
    System.out.println(personne.getNom());
}
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Si(x){let e,o="Le bug le plus fréquent : NullPointerException",s,t,$="Si vous appelez une méthode sur <code>null</code>... 💥",i,n,m,l,f,b="✅ Toujours vérifier avant d'utiliser :",u,p,w,c,L=`C'est LE bug numéro 1 en Java. Tony Hoare, l'inventeur de null, l'a appelé "son erreur à un milliard de dollars".\r
			Vous verrez NullPointerException des centaines de fois dans votre carrière. Apprenez à le débugger !\r
			Le message vous dit quelle variable est null. Remontez le fil pour comprendre pourquoi.`,E;return n=new ie({props:{$$slots:{default:[ji]},$$scope:{ctx:x}}}),p=new ie({props:{$$slots:{default:[Ai]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),T(n.$$.fragment),m=v(),l=C("div"),f=C("p"),f.textContent=b,u=v(),T(p.$$.fragment),w=v(),c=C("aside"),c.textContent=L,this.h()},l(q){e=_(q,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-v1skb"&&(e.textContent=o),s=d(q),t=_(q,"P",{"data-svelte-h":!0}),g(t)!=="svelte-rde3pg"&&(t.innerHTML=$),i=d(q),S(n.$$.fragment,q),m=d(q),l=_(q,"DIV",{class:!0});var V=ue(l);f=_(V,"P",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-10calxs"&&(f.textContent=b),u=d(V),S(p.$$.fragment,V),V.forEach(a),w=d(q),c=_(q,"ASIDE",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-hug8y1"&&(c.textContent=L),this.h()},h(){h(f,"class","text-green-400 font-bold"),h(l,"class","fragment mt-6"),h(c,"class","notes")},m(q,V){r(q,e,V),r(q,s,V),r(q,t,V),r(q,i,V),A(n,q,V),r(q,m,V),r(q,l,V),ee(l,f),ee(l,u),A(p,l,null),r(q,w,V),r(q,c,V),E=!0},p(q,V){const B={};V&1&&(B.$$scope={dirty:V,ctx:q}),n.$set(B);const Q={};V&1&&(Q.$$scope={dirty:V,ctx:q}),p.$set(Q)},i(q){E||(j(n.$$.fragment,q),j(p.$$.fragment,q),E=!0)},o(q){H(n.$$.fragment,q),H(p.$$.fragment,q),E=!1},d(q){q&&(a(e),a(s),a(t),a(i),a(m),a(l),a(w),a(c)),M(n,q),M(p)}}}function Ti(x){let e=`
public void afficherClient(Client client) {
    // ❌ Risqué
    System.out.println(client.getNom());
    
    // ✅ Défensif
    if (client == null) {
        System.out.println("Aucun client");
        return;
    }
    System.out.println(client.getNom());
}
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Ei(x){let e,o="Bonne pratique : programmation défensive",s,t,$,i,n="💡 En entreprise, beaucoup d&#39;erreurs viennent de <code>null</code> non géré.",m,l,f=`C'est la base de la "programmation défensive". Ne faites jamais confiance aux données entrantes.\r
			Les frameworks modernes (Spring) peuvent injecter @NonNull pour éviter ça.\r
			Depuis Java 8, on a Optional pour mieux gérer l'absence de valeur.`,b;return t=new ie({props:{$$slots:{default:[Ti]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment),$=v(),i=C("p"),i.innerHTML=n,m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1o2ciiy"&&(e.textContent=o),s=d(u),S(t.$$.fragment,u),$=d(u),i=_(u,"P",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-i5ewro"&&(i.innerHTML=n),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-1elh71j"&&(l.textContent=f),this.h()},h(){h(i,"class","fragment mt-4 text-accent-200"),h(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),A(t,u,p),r(u,$,p),r(u,i,p),r(u,m,p),r(u,l,p),b=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),t.$set(w)},i(u){b||(j(t.$$.fragment,u),b=!0)},o(u){H(t.$$.fragment,u),b=!1},d(u){u&&(a(e),a(s),a($),a(i),a(m),a(l)),M(t,u)}}}function Ii(x){let e,o="Comparer des objets",s,t,$="== vs equals() : le piège classique",i,n,m=`Maintenant qu'on sait ce qu'est une référence, on peut comprendre un autre piège majeur.\r
			Comment comparer deux objets ? C'est plus subtil qu'il n'y paraît.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-14qtv6e"&&(e.textContent=o),s=d(l),t=_(l,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1plewz8"&&(t.textContent=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-5njids"&&(n.textContent=m),this.h()},h(){h(e,"class","text-5xl"),h(t,"class","text-2xl text-gray-400"),h(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function Di(x){let e=`
String a = new String("Bonjour");
String b = new String("Bonjour");

System.out.println(a == b);  // false ! 😱
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Vi(x){let e=`
@startuml
object "a" as a
object "b" as b
object "String: Bonjour" as s1
object "String: Bonjour" as s2

a --> s1 : référence
b --> s2 : référence
@enduml
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function ki(x){let e,o="Le piège de ==",s,t,$,i,n="<code>==</code> compare les <b>références</b> (les adresses mémoire), pas le contenu !",m,l,f,b,u=`a et b pointent vers deux objets différents en mémoire. Même si le contenu est identique, ce sont deux casiers différents.\r
			C'est le piège classique des débutants avec les String. "Bonjour" == "Bonjour" mais new String != new String.`,p;return t=new ie({props:{$$slots:{default:[Di]},$$scope:{ctx:x}}}),l=new Ie({props:{className:"fragment",$$slots:{default:[Vi]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment),$=v(),i=C("p"),i.innerHTML=n,m=v(),T(l.$$.fragment),f=v(),b=C("aside"),b.textContent=u,this.h()},l(w){e=_(w,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-lc3ih1"&&(e.textContent=o),s=d(w),S(t.$$.fragment,w),$=d(w),i=_(w,"P",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-czybt8"&&(i.innerHTML=n),m=d(w),S(l.$$.fragment,w),f=d(w),b=_(w,"ASIDE",{class:!0,"data-svelte-h":!0}),g(b)!=="svelte-2rsw1p"&&(b.textContent=u),this.h()},h(){h(i,"class","fragment mt-6"),h(b,"class","notes")},m(w,c){r(w,e,c),r(w,s,c),A(t,w,c),r(w,$,c),r(w,i,c),r(w,m,c),A(l,w,c),r(w,f,c),r(w,b,c),p=!0},p(w,c){const L={};c&1&&(L.$$scope={dirty:c,ctx:w}),t.$set(L);const E={};c&1&&(E.$$scope={dirty:c,ctx:w}),l.$set(E)},i(w){p||(j(t.$$.fragment,w),j(l.$$.fragment,w),p=!0)},o(w){H(t.$$.fragment,w),H(l.$$.fragment,w),p=!1},d(w){w&&(a(e),a(s),a($),a(i),a(m),a(f),a(b)),M(t,w),M(l,w)}}}function zi(x){let e=`
String a = new String("Bonjour");
String b = new String("Bonjour");

System.out.println(a.equals(b));  // true ✅
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Oi(x){let e,o="La solution : equals()",s,t,$='Pour comparer le <b>contenu</b> des objets, utilisez la méthode <code class="text-important">equals()</code>.',i,n,m,l,f='<div class="p-4 bg-red-900/30 rounded-lg"><h4 class="text-red-400">== (double égal)</h4> <p class="text-sm">Compare les <b>références</b></p> <p class="text-xs text-gray-400">&quot;Est-ce le même objet ?&quot;</p></div> <div class="p-4 bg-green-900/30 rounded-lg"><h4 class="text-green-400">equals()</h4> <p class="text-sm">Compare le <b>contenu</b></p> <p class="text-xs text-gray-400">&quot;Ont-ils la même valeur ?&quot;</p></div>',b,u,p=`C'est LA règle à retenir. Pour les objets, utilisez equals(). Pour les primitifs (int, double), utilisez ==.\r
			String, Integer, toutes les classes du JDK redéfinissent equals() pour comparer le contenu.`,w;return n=new ie({props:{$$slots:{default:[zi]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),T(n.$$.fragment),m=v(),l=C("div"),l.innerHTML=f,b=v(),u=C("aside"),u.textContent=p,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-15y6242"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),g(t)!=="svelte-gx1ssy"&&(t.innerHTML=$),i=d(c),S(n.$$.fragment,c),m=d(c),l=_(c,"DIV",{class:!0,"data-svelte-h":!0}),g(l)!=="svelte-1ccb8r3"&&(l.innerHTML=f),b=d(c),u=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-1lxylnx"&&(u.textContent=p),this.h()},h(){h(l,"class","fragment mt-6 grid grid-cols-2 gap-4"),h(u,"class","notes")},m(c,L){r(c,e,L),r(c,s,L),r(c,t,L),r(c,i,L),A(n,c,L),r(c,m,L),r(c,l,L),r(c,b,L),r(c,u,L),w=!0},p(c,L){const E={};L&1&&(E.$$scope={dirty:L,ctx:c}),n.$set(E)},i(c){w||(j(n.$$.fragment,c),w=!0)},o(c){H(n.$$.fragment,c),w=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(l),a(b),a(u)),M(n,c)}}}function Ui(x){let e=`
String a = null;
String b = "Bonjour";

a.equals(b);  // ❌ NullPointerException !
b.equals(a);  // ✅ false (equals gère null)
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Ri(x){let e=`
// Pattern sécurisé avec une constante
"admin".equals(username);  // ✅ Jamais de NPE
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Ji(x){let e,o="⚠️ Attention à null avec equals()",s,t,$,i,n='💡 Astuce : mettez la valeur "sûre" (non-null) à gauche !',m,l,f,b,u=`C'est un pattern très courant. En mettant la constante à gauche, on évite le NPE.\r
			Depuis Java 7, on a aussi Objects.equals(a, b) qui gère null des deux côtés.`,p;return t=new ie({props:{$$slots:{default:[Ui]},$$scope:{ctx:x}}}),l=new ie({props:{class:"fragment",$$slots:{default:[Ri]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment),$=v(),i=C("p"),i.textContent=n,m=v(),T(l.$$.fragment),f=v(),b=C("aside"),b.textContent=u,this.h()},l(w){e=_(w,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-fvccpn"&&(e.textContent=o),s=d(w),S(t.$$.fragment,w),$=d(w),i=_(w,"P",{class:!0,"data-svelte-h":!0}),g(i)!=="svelte-eaq14x"&&(i.textContent=n),m=d(w),S(l.$$.fragment,w),f=d(w),b=_(w,"ASIDE",{class:!0,"data-svelte-h":!0}),g(b)!=="svelte-1qgora1"&&(b.textContent=u),this.h()},h(){h(i,"class","fragment mt-6 text-accent-200 font-bold"),h(b,"class","notes")},m(w,c){r(w,e,c),r(w,s,c),A(t,w,c),r(w,$,c),r(w,i,c),r(w,m,c),A(l,w,c),r(w,f,c),r(w,b,c),p=!0},p(w,c){const L={};c&1&&(L.$$scope={dirty:c,ctx:w}),t.$set(L);const E={};c&1&&(E.$$scope={dirty:c,ctx:w}),l.$set(E)},i(w){p||(j(t.$$.fragment,w),j(l.$$.fragment,w),p=!0)},o(w){H(t.$$.fragment,w),H(l.$$.fragment,w),p=!1},d(w){w&&(a(e),a(s),a($),a(i),a(m),a(f),a(b)),M(t,w),M(l,w)}}}function Ni(x){let e,o="Récapitulatif : comparaisons",s,t,$='<thead><tr><th class="p-3">Type</th> <th class="p-3">Opérateur</th> <th class="p-3">Exemple</th></tr></thead> <tbody><tr><td class="p-3">Primitifs (int, double...)</td> <td class="p-3"><code>==</code></td> <td class="p-3"><code>age == 25</code></td></tr> <tr><td class="p-3">Objets (contenu)</td> <td class="p-3"><code>equals()</code></td> <td class="p-3"><code>nom.equals(&quot;Jean&quot;)</code></td></tr> <tr><td class="p-3">Objets (même instance)</td> <td class="p-3"><code>==</code></td> <td class="p-3"><code>obj1 == obj2</code></td></tr> <tr><td class="p-3">Vérifier null</td> <td class="p-3"><code>==</code></td> <td class="p-3"><code>obj == null</code></td></tr></tbody>',i,n,m=`Retenez ce tableau ! Primitifs → ==. Objets contenu → equals(). Null check → ==.\r
			On verra plus tard comment redéfinir equals() pour vos propres classes.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("table"),t.innerHTML=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1fu33u2"&&(e.textContent=o),s=d(l),t=_(l,"TABLE",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1wzfw0k"&&(t.innerHTML=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-o2lw9f"&&(n.textContent=m),this.h()},h(){h(t,"class","text-xl"),h(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function Bi(x){let e,o="Récapitulatif",s,t,$='<div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">📐 Classes</h4> <ul class="text-sm mt-2"><li>Classe = plan</li> <li>Objet = instance</li> <li>Attributs + méthodes</li></ul></div> <div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">🏗️ Création</h4> <ul class="text-sm mt-2"><li><code>new</code> crée un objet</li> <li>Constructeur initialise</li> <li><code>this</code> = objet courant</li></ul></div> <div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">🔗 Références</h4> <ul class="text-sm mt-2"><li>Variable = référence</li> <li><code>null</code> = rien</li> <li><code>equals()</code> pour comparer</li></ul></div>',i,n,m="🔮 Maintenant, voyons comment <b>protéger</b> nos données avec l&#39;encapsulation !",l,f,b=`Voilà les bases. Classe = moule, objet = instance concrète. New = création, constructeur = initialisation.\r
			Les variables contiennent des références, null = pas d'objet, equals() pour comparer le contenu.\r
			On passe à l'encapsulation pour apprendre à protéger nos données.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("div"),t.innerHTML=$,i=v(),n=C("p"),n.innerHTML=m,l=v(),f=C("aside"),f.textContent=b,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-ri7iuh"&&(e.textContent=o),s=d(u),t=_(u,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1uwtkma"&&(t.innerHTML=$),i=d(u),n=_(u,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1msb34k"&&(n.innerHTML=m),l=d(u),f=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-1oez020"&&(f.textContent=b),this.h()},h(){h(t,"class","grid grid-cols-3 gap-4 mt-6"),h(n,"class","fragment mt-8 text-accent-200 text-xl"),h(f,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),r(u,n,p),r(u,l,p),r(u,f,p)},p:O,d(u){u&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f))}}}function Fi(x){let e,o="Généralités sur la POO",s,t,$,i,n,m,l,f,b,u,p,w,c,L,E,q,V,B,Q,Y,D,F,ne,U,le,ae,fe,re,pe,oe,$e,ce,me,R,te,J,se,de,he,ve,ge,xe,be;return t=new N({props:{$$slots:{default:[ri]},$$scope:{ctx:x}}}),i=new N({props:{$$slots:{default:[ui]},$$scope:{ctx:x}}}),m=new N({props:{$$slots:{default:[ci]},$$scope:{ctx:x}}}),f=new N({props:{$$slots:{default:[$i]},$$scope:{ctx:x}}}),u=new N({props:{data_background_color:"#1a1a2e",$$slots:{default:[pi]},$$scope:{ctx:x}}}),w=new N({props:{$$slots:{default:[di]},$$scope:{ctx:x}}}),L=new N({props:{$$slots:{default:[xi]},$$scope:{ctx:x}}}),q=new N({props:{$$slots:{default:[Ci]},$$scope:{ctx:x}}}),B=new N({props:{$$slots:{default:[gi]},$$scope:{ctx:x}}}),Y=new N({props:{$$slots:{default:[Li]},$$scope:{ctx:x}}}),F=new N({props:{data_background_color:"#1a1a2e",$$slots:{default:[wi]},$$scope:{ctx:x}}}),U=new N({props:{$$slots:{default:[Pi]},$$scope:{ctx:x}}}),ae=new N({props:{$$slots:{default:[Hi]},$$scope:{ctx:x}}}),re=new N({props:{$$slots:{default:[Si]},$$scope:{ctx:x}}}),oe=new N({props:{$$slots:{default:[Ei]},$$scope:{ctx:x}}}),ce=new N({props:{data_background_color:"#1a1a2e",$$slots:{default:[Ii]},$$scope:{ctx:x}}}),R=new N({props:{$$slots:{default:[ki]},$$scope:{ctx:x}}}),J=new N({props:{$$slots:{default:[Oi]},$$scope:{ctx:x}}}),de=new N({props:{$$slots:{default:[Ji]},$$scope:{ctx:x}}}),ve=new N({props:{$$slots:{default:[Ni]},$$scope:{ctx:x}}}),xe=new N({props:{$$slots:{default:[Bi]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment),$=v(),T(i.$$.fragment),n=v(),T(m.$$.fragment),l=v(),T(f.$$.fragment),b=v(),T(u.$$.fragment),p=v(),T(w.$$.fragment),c=v(),T(L.$$.fragment),E=v(),T(q.$$.fragment),V=v(),T(B.$$.fragment),Q=v(),T(Y.$$.fragment),D=v(),T(F.$$.fragment),ne=v(),T(U.$$.fragment),le=v(),T(ae.$$.fragment),fe=v(),T(re.$$.fragment),pe=v(),T(oe.$$.fragment),$e=v(),T(ce.$$.fragment),me=v(),T(R.$$.fragment),te=v(),T(J.$$.fragment),se=v(),T(de.$$.fragment),he=v(),T(ve.$$.fragment),ge=v(),T(xe.$$.fragment)},l(z){e=_(z,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-lsottk"&&(e.textContent=o),s=d(z),S(t.$$.fragment,z),$=d(z),S(i.$$.fragment,z),n=d(z),S(m.$$.fragment,z),l=d(z),S(f.$$.fragment,z),b=d(z),S(u.$$.fragment,z),p=d(z),S(w.$$.fragment,z),c=d(z),S(L.$$.fragment,z),E=d(z),S(q.$$.fragment,z),V=d(z),S(B.$$.fragment,z),Q=d(z),S(Y.$$.fragment,z),D=d(z),S(F.$$.fragment,z),ne=d(z),S(U.$$.fragment,z),le=d(z),S(ae.$$.fragment,z),fe=d(z),S(re.$$.fragment,z),pe=d(z),S(oe.$$.fragment,z),$e=d(z),S(ce.$$.fragment,z),me=d(z),S(R.$$.fragment,z),te=d(z),S(J.$$.fragment,z),se=d(z),S(de.$$.fragment,z),he=d(z),S(ve.$$.fragment,z),ge=d(z),S(xe.$$.fragment,z)},m(z,W){r(z,e,W),r(z,s,W),A(t,z,W),r(z,$,W),A(i,z,W),r(z,n,W),A(m,z,W),r(z,l,W),A(f,z,W),r(z,b,W),A(u,z,W),r(z,p,W),A(w,z,W),r(z,c,W),A(L,z,W),r(z,E,W),A(q,z,W),r(z,V,W),A(B,z,W),r(z,Q,W),A(Y,z,W),r(z,D,W),A(F,z,W),r(z,ne,W),A(U,z,W),r(z,le,W),A(ae,z,W),r(z,fe,W),A(re,z,W),r(z,pe,W),A(oe,z,W),r(z,$e,W),A(ce,z,W),r(z,me,W),A(R,z,W),r(z,te,W),A(J,z,W),r(z,se,W),A(de,z,W),r(z,he,W),A(ve,z,W),r(z,ge,W),A(xe,z,W),be=!0},p(z,W){const k={};W&1&&(k.$$scope={dirty:W,ctx:z}),t.$set(k);const X={};W&1&&(X.$$scope={dirty:W,ctx:z}),i.$set(X);const Le={};W&1&&(Le.$$scope={dirty:W,ctx:z}),m.$set(Le);const we={};W&1&&(we.$$scope={dirty:W,ctx:z}),f.$set(we);const qe={};W&1&&(qe.$$scope={dirty:W,ctx:z}),u.$set(qe);const Pe={};W&1&&(Pe.$$scope={dirty:W,ctx:z}),w.$set(Pe);const Me={};W&1&&(Me.$$scope={dirty:W,ctx:z}),L.$set(Me);const He={};W&1&&(He.$$scope={dirty:W,ctx:z}),q.$set(He);const I={};W&1&&(I.$$scope={dirty:W,ctx:z}),B.$set(I);const K={};W&1&&(K.$$scope={dirty:W,ctx:z}),Y.$set(K);const ke={};W&1&&(ke.$$scope={dirty:W,ctx:z}),F.$set(ke);const je={};W&1&&(je.$$scope={dirty:W,ctx:z}),U.$set(je);const ze={};W&1&&(ze.$$scope={dirty:W,ctx:z}),ae.$set(ze);const Ae={};W&1&&(Ae.$$scope={dirty:W,ctx:z}),re.$set(Ae);const Oe={};W&1&&(Oe.$$scope={dirty:W,ctx:z}),oe.$set(Oe);const Se={};W&1&&(Se.$$scope={dirty:W,ctx:z}),ce.$set(Se);const Ue={};W&1&&(Ue.$$scope={dirty:W,ctx:z}),R.$set(Ue);const Te={};W&1&&(Te.$$scope={dirty:W,ctx:z}),J.$set(Te);const Re={};W&1&&(Re.$$scope={dirty:W,ctx:z}),de.$set(Re);const Ee={};W&1&&(Ee.$$scope={dirty:W,ctx:z}),ve.$set(Ee);const Je={};W&1&&(Je.$$scope={dirty:W,ctx:z}),xe.$set(Je)},i(z){be||(j(t.$$.fragment,z),j(i.$$.fragment,z),j(m.$$.fragment,z),j(f.$$.fragment,z),j(u.$$.fragment,z),j(w.$$.fragment,z),j(L.$$.fragment,z),j(q.$$.fragment,z),j(B.$$.fragment,z),j(Y.$$.fragment,z),j(F.$$.fragment,z),j(U.$$.fragment,z),j(ae.$$.fragment,z),j(re.$$.fragment,z),j(oe.$$.fragment,z),j(ce.$$.fragment,z),j(R.$$.fragment,z),j(J.$$.fragment,z),j(de.$$.fragment,z),j(ve.$$.fragment,z),j(xe.$$.fragment,z),be=!0)},o(z){H(t.$$.fragment,z),H(i.$$.fragment,z),H(m.$$.fragment,z),H(f.$$.fragment,z),H(u.$$.fragment,z),H(w.$$.fragment,z),H(L.$$.fragment,z),H(q.$$.fragment,z),H(B.$$.fragment,z),H(Y.$$.fragment,z),H(F.$$.fragment,z),H(U.$$.fragment,z),H(ae.$$.fragment,z),H(re.$$.fragment,z),H(oe.$$.fragment,z),H(ce.$$.fragment,z),H(R.$$.fragment,z),H(J.$$.fragment,z),H(de.$$.fragment,z),H(ve.$$.fragment,z),H(xe.$$.fragment,z),be=!1},d(z){z&&(a(e),a(s),a($),a(n),a(l),a(b),a(p),a(c),a(E),a(V),a(Q),a(D),a(ne),a(le),a(fe),a(pe),a($e),a(me),a(te),a(se),a(he),a(ge)),M(t,z),M(i,z),M(m,z),M(f,z),M(u,z),M(w,z),M(L,z),M(q,z),M(B,z),M(Y,z),M(F,z),M(U,z),M(ae,z),M(re,z),M(oe,z),M(ce,z),M(R,z),M(J,z),M(de,z),M(ve,z),M(xe,z)}}}function Gi(x){let e,o;return e=new N({props:{$$slots:{default:[Fi]},$$scope:{ctx:x}}}),{c(){T(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,t){A(e,s,t),o=!0},p(s,[t]){const $={};t&1&&($.$$scope={dirty:t,ctx:s}),e.$set($)},i(s){o||(j(e.$$.fragment,s),o=!0)},o(s){H(e.$$.fragment,s),o=!1},d(s){M(e,s)}}}class Qi extends Be{constructor(e){super(),Fe(this,e,null,Gi,Ne,{})}}function Ki(x){let e,o="Usage de l’IA dans ce module",s,t,$="L’IA n’est <b>pas autorisée</b> pendant le module",i,n,m=`Les modalités d'évaluation sont pensées pour que l'IA ne vous apporte aucun avantage, voire
			vous desserve.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("span"),t.innerHTML=$,i=v(),n=C("p"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-1gojwpb"&&(e.textContent=o),s=d(l),t=_(l,"SPAN",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-35mnki"&&(t.innerHTML=$),i=d(l),n=_(l,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1ydzg9u"&&(n.textContent=m),this.h()},h(){h(t,"class","font-bold text-[2em] underline"),h(n,"class","note")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function Xi(x){let e,o="Pourquoi l’IA pose problème à ce stade",s,t,$="<li><b>1. Dette cognitive</b> — L&#39;IA empêche d&#39;apprendre par la pratique et l&#39;erreur.</li> <li><b>2. Béquille pour débutants</b> — Elle favorise ceux qui maîtrisent déjà.</li> <li><b>3. Usage passif</b> — Risque de perte de compétences.</li> <li><b>4. Illusion de facilité</b> — On réfléchit moins aux étapes.</li>",i,n,m="<p>Vidéo explicative</p>";return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("ul"),t.innerHTML=$,i=v(),n=C("a"),n.innerHTML=m,this.h()},l(l){e=_(l,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-16y47ua"&&(e.textContent=o),s=d(l),t=_(l,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-dhzepp"&&(t.innerHTML=$),i=d(l),n=_(l,"A",{href:!0,target:!0,"data-svelte-h":!0}),g(n)!=="svelte-cz1rtj"&&(n.innerHTML=m),this.h()},h(){h(n,"href","https://youtu.be/4xq6bVbS-Pw?si=bhTuVdU7iN5ijJzg&t=653"),h(n,"target","_blank")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function Yi(x){let e,o="Constat côté entreprise",s,t,$="<li>Des profils juniors très à l’aise avec l’IA</li> <li>Mais en difficulté dès qu’il faut :</li> <ul><li>débugger un problème</li> <li>expliquer un choix technique</li> <li>adapter une solution existante</li></ul>",i,n,m=`Le problème n’est pas l’IA,<br/>
			mais son usage trop précoce et non maîtrisé.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("ul"),t.innerHTML=$,i=v(),n=C("p"),n.innerHTML=m,this.h()},l(l){e=_(l,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-qqrjer"&&(e.textContent=o),s=d(l),t=_(l,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-1cewx67"&&(t.innerHTML=$),i=d(l),n=_(l,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1n46xu8"&&(n.innerHTML=m),this.h()},h(){h(n,"class","note")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function Wi(x){let e,o="Utiliser l’IA intelligemment",s,t,$="<li>IA utilisée comme <b>tuteur</b>, pas comme générateur</li> <li>Pas de réponses directes</li> <li>Questions, feedback, progression guidée</li>",i,n,m=`Apprendre correctement avec l’IA<br/>
			produit de meilleurs résultats<br/>
			que l’utiliser sans méthode.`,l,f,b='<p class="note">Source : AI Tutoring Outperforms Active Learning</p>';return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("ul"),t.innerHTML=$,i=v(),n=C("p"),n.innerHTML=m,l=v(),f=C("a"),f.innerHTML=b,this.h()},l(u){e=_(u,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-1nebpg"&&(e.textContent=o),s=d(u),t=_(u,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-1914kjj"&&(t.innerHTML=$),i=d(u),n=_(u,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1amodgb"&&(n.innerHTML=m),l=d(u),f=_(u,"A",{href:!0,"data-preview-link":!0,"data-svelte-h":!0}),g(f)!=="svelte-16lrtro"&&(f.innerHTML=b),this.h()},h(){h(n,"class","important"),h(f,"href","https://www.nature.com/articles/s41598-025-97652-6.pdf"),h(f,"data-preview-link","")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),r(u,n,p),r(u,l,p),r(u,f,p)},p:O,d(u){u&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f))}}}function Zi(x){let e,o="Importance des TD et TP",s,t,$="<li>Les TD construisent le raisonnement</li> <li>Les TP ancrent les concepts par la pratique</li> <li>Ce travail est indispensable pour la suite</li>",i,n,m=`Sans cette phase sérieuse,<br/>
			l’IA n’apporte que peu de valeur.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("ul"),t.innerHTML=$,i=v(),n=C("p"),n.innerHTML=m,this.h()},l(l){e=_(l,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-1pqkdgp"&&(e.textContent=o),s=d(l),t=_(l,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-1dj8lr7"&&(t.innerHTML=$),i=d(l),n=_(l,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-x1j0a0"&&(n.innerHTML=m),this.h()},h(){h(n,"class","note")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function yi(x){let e,o="Phase projet",s,t,$="<li>Problème plus ouvert</li> <li>Mise en situation proche du monde professionnel</li> <li>Usage de l&#39;IA <b>possible</b> et encadré</li>",i,n,m=`Des bases solides permettent<br/>
			d&#39;utiliser l&#39;IA pour faire des choses intéressantes.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("ul"),t.innerHTML=$,i=v(),n=C("p"),n.innerHTML=m,this.h()},l(l){e=_(l,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-1u8tpjh"&&(e.textContent=o),s=d(l),t=_(l,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-15ntht3"&&(t.innerHTML=$),i=d(l),n=_(l,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-e1d6gw"&&(n.innerHTML=m),this.h()},h(){h(n,"class","important")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function ea(x){let e,o="Un prompt vous sera fourni",s,t,$="Pour la phase projet, vous recevrez un <b>prompt</b> à utiliser avec l&#39;IA.",i,n,m='<li class="fragment">Il cadrera l&#39;IA pour qu&#39;elle vous <b>guide</b> sans donner les réponses</li> <li class="fragment">Il sera adapté au contexte du module POO</li>',l,f,b="Ce prompt sera communiqué au moment du projet.",u,p,w=`On vous donnera un prompt système qui transforme l'IA en tuteur. L'idée c'est de vous
			apprendre à utiliser l'IA intelligemment, pas à tricher.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("ul"),n.innerHTML=m,l=v(),f=C("p"),f.textContent=b,u=v(),p=C("aside"),p.textContent=w,this.h()},l(c){e=_(c,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-1stl3ju"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),g(t)!=="svelte-e2ua8"&&(t.innerHTML=$),i=d(c),n=_(c,"UL",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1ipgytl"&&(n.innerHTML=m),l=d(c),f=_(c,"P",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-116x1r6"&&(f.textContent=b),u=d(c),p=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-6s6n1u"&&(p.textContent=w),this.h()},h(){h(n,"class","mt-6"),h(f,"class","note fragment mt-8"),h(p,"class","notes")},m(c,L){r(c,e,L),r(c,s,L),r(c,t,L),r(c,i,L),r(c,n,L),r(c,l,L),r(c,f,L),r(c,u,L),r(c,p,L)},p:O,d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f),a(u),a(p))}}}function ta(x){let e,o="En résumé",s,t,$='<div class="p-4 bg-pink-800 rounded-lg fragment"><h4 class="text-red-400">📚 TD/TP</h4> <p class="text-xl mt-2">Sans IA</p> <p class="text-sm text-white-400">Construire les bases</p></div> <div class="p-4 bg-orange-800 rounded-lg fragment"><h4 class="text-orange-400">🎯 Projet</h4> <p class="text-xl mt-2">IA encadrée</p> <p class="text-sm text-white-400">Avec le prompt fourni</p></div> <div class="p-4 bg-green-800 rounded-lg fragment"><h4 class="text-green-400">💼 Après CPE</h4> <p class="text-xl mt-2">IA maîtrisée</p> <p class="text-sm text-white-400">Vous savez quand et comment</p></div>',i,n,m=`C'est la progression. D'abord on apprend sans béquille, ensuite on apprend à utiliser l'outil
			correctement. À la fin, vous saurez quand l'IA vous aide vraiment et quand elle vous ralentit.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("div"),t.innerHTML=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-11s1ixw"&&(e.textContent=o),s=d(l),t=_(l,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-16m7q19"&&(t.innerHTML=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-10vup29"&&(n.textContent=m),this.h()},h(){h(t,"class","grid grid-cols-3 gap-6 mt-8"),h(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function sa(x){let e,o,s,t,$,i,n,m,l,f,b,u,p,w,c,L;return e=new N({props:{$$slots:{default:[Ki]},$$scope:{ctx:x}}}),s=new N({props:{$$slots:{default:[Xi]},$$scope:{ctx:x}}}),$=new N({props:{$$slots:{default:[Yi]},$$scope:{ctx:x}}}),n=new N({props:{$$slots:{default:[Wi]},$$scope:{ctx:x}}}),l=new N({props:{$$slots:{default:[Zi]},$$scope:{ctx:x}}}),b=new N({props:{$$slots:{default:[yi]},$$scope:{ctx:x}}}),p=new N({props:{$$slots:{default:[ea]},$$scope:{ctx:x}}}),c=new N({props:{$$slots:{default:[ta]},$$scope:{ctx:x}}}),{c(){T(e.$$.fragment),o=v(),T(s.$$.fragment),t=v(),T($.$$.fragment),i=v(),T(n.$$.fragment),m=v(),T(l.$$.fragment),f=v(),T(b.$$.fragment),u=v(),T(p.$$.fragment),w=v(),T(c.$$.fragment)},l(E){S(e.$$.fragment,E),o=d(E),S(s.$$.fragment,E),t=d(E),S($.$$.fragment,E),i=d(E),S(n.$$.fragment,E),m=d(E),S(l.$$.fragment,E),f=d(E),S(b.$$.fragment,E),u=d(E),S(p.$$.fragment,E),w=d(E),S(c.$$.fragment,E)},m(E,q){A(e,E,q),r(E,o,q),A(s,E,q),r(E,t,q),A($,E,q),r(E,i,q),A(n,E,q),r(E,m,q),A(l,E,q),r(E,f,q),A(b,E,q),r(E,u,q),A(p,E,q),r(E,w,q),A(c,E,q),L=!0},p(E,q){const V={};q&1&&(V.$$scope={dirty:q,ctx:E}),e.$set(V);const B={};q&1&&(B.$$scope={dirty:q,ctx:E}),s.$set(B);const Q={};q&1&&(Q.$$scope={dirty:q,ctx:E}),$.$set(Q);const Y={};q&1&&(Y.$$scope={dirty:q,ctx:E}),n.$set(Y);const D={};q&1&&(D.$$scope={dirty:q,ctx:E}),l.$set(D);const F={};q&1&&(F.$$scope={dirty:q,ctx:E}),b.$set(F);const ne={};q&1&&(ne.$$scope={dirty:q,ctx:E}),p.$set(ne);const U={};q&1&&(U.$$scope={dirty:q,ctx:E}),c.$set(U)},i(E){L||(j(e.$$.fragment,E),j(s.$$.fragment,E),j($.$$.fragment,E),j(n.$$.fragment,E),j(l.$$.fragment,E),j(b.$$.fragment,E),j(p.$$.fragment,E),j(c.$$.fragment,E),L=!0)},o(E){H(e.$$.fragment,E),H(s.$$.fragment,E),H($.$$.fragment,E),H(n.$$.fragment,E),H(l.$$.fragment,E),H(b.$$.fragment,E),H(p.$$.fragment,E),H(c.$$.fragment,E),L=!1},d(E){E&&(a(o),a(t),a(i),a(m),a(f),a(u),a(w)),M(e,E),M(s,E),M($,E),M(n,E),M(l,E),M(b,E),M(p,E),M(c,E)}}}function la(x){let e,o;return e=new N({props:{data_background_color:"#2B001A",$$slots:{default:[sa]},$$scope:{ctx:x}}}),{c(){T(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,t){A(e,s,t),o=!0},p(s,[t]){const $={};t&1&&($.$$scope={dirty:t,ctx:s}),e.$set($)},i(s){o||(j(e.$$.fragment,s),o=!0)},o(s){H(e.$$.fragment,s),o=!1},d(s){M(e,s)}}}class na extends Be{constructor(e){super(),Fe(this,e,null,la,Ne,{})}}function ia(x){let e,o="Présentation du module",s,t,$=`<div><ul><li><b>Changer votre manière de penser le code</b></li> <li>Passer du procédural à l’orienté objet</li> <li>Modéliser avant de coder</li> <li>Préparer la suite de votre formation</li></ul> <p class="note">Ce module est simple à valider.<br/>
					Il est <b>fondamental</b> pour la suite.</p></div>`,i,n,m=`Pas obligé de coder en OO, juste une manière de faire différente - C'est une méthode qui
			simplifie la modélisation - Assez largement utilisée`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("div"),t.innerHTML=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-177x7c7"&&(e.textContent=o),s=d(l),t=_(l,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1ez6zyl"&&(t.innerHTML=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-viqv9x"&&(n.textContent=m),this.h()},h(){h(t,"class","two-columns"),h(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function aa(x){let e,o="Ce que vous saurez faire à la fin",s,t,$='<div class="text-left"><h4 class="text-red-400 mb-4 text-3xl">❌ Avant ce module</h4> <ul class="text-2xl"><li class="fragment">Code qui &quot;marche&quot; pour des TPs CPE</li> <li class="fragment">Difficile à reprendre 6 mois plus tard</li> <li class="fragment">Impossible à faire évoluer</li> <li class="fragment">Personne d&#39;autre ne comprend</li></ul></div> <div class="text-left"><h4 class="text-green-400 mb-4 text-3xl">✅ Après ce module</h4> <ul class="text-2xl"><li class="fragment">Code qui dure des années</li> <li class="fragment">Maintenable par une équipe</li> <li class="fragment">Évolutif sans tout casser</li> <li class="fragment">Prêt pour le monde pro</li></ul></div>',i,n,m="En entreprise, le code vit 5, 10, 20 ans.<br/> <b>Vous devez apprendre à coder pour les autres, pas juste pour vous.</b>",l,f,b=`C'est la vraie différence. En école, on code pour valider un TP. En entreprise, le code doit
			survivre à votre départ, être repris par d'autres, évoluer. Ce module vous prépare à ça.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("div"),t.innerHTML=$,i=v(),n=C("p"),n.innerHTML=m,l=v(),f=C("aside"),f.textContent=b,this.h()},l(u){e=_(u,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-1bz8gvd"&&(e.textContent=o),s=d(u),t=_(u,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-vlxvkk"&&(t.innerHTML=$),i=d(u),n=_(u,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-hffxe3"&&(n.innerHTML=m),l=d(u),f=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-1lbw1km"&&(f.textContent=b),this.h()},h(){h(t,"class","flex justify-center gap-8 mt-8"),h(n,"class","fragment note mt-8"),h(f,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),r(u,n,p),r(u,l,p),r(u,f,p)},p:O,d(u){u&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f))}}}function ra(x){let e,o="Pourquoi vous pourriez décrocher",s,t,$=`<svg viewBox="0 0 600 300" width="100%" style="margin-top: 20px;"><line x1="50" y1="250" x2="550" y2="250" stroke="#ccc" stroke-width="2"></line><line x1="50" y1="50" x2="50" y2="250" stroke="#ccc" stroke-width="2"></line><text x="260" y="270" font-size="14" fill="#ffffff">Temps / Expérience</text><text x="-70" y="185" font-size="14" fill="#ffffff" transform="rotate(-90 15,160)">Niveau réel en programmation
				</text><g><path d="M50 200 C120 185, 180 175, 220 170" fill="none" stroke="#3498db" stroke-width="4"></path><path d="M50 200 C120 205, 180 210, 220 190" fill="none" stroke="#f39c12" stroke-width="4"></path></g><g class="fragment" data-fragment-index="0"><path d="M220 170 C260 170, 300 170, 340 170" fill="none" stroke="#3498db" stroke-width="4"></path><path d="M220 190 C260 170, 300 155, 340 145" fill="none" stroke="#f39c12" stroke-width="4"></path></g><g class="fragment" data-fragment-index="1"><path d="M340 145 C380 140, 400 140, 420 140" fill="none" stroke="#f39c12" stroke-width="4"></path><path d="M340 170 C380 168, 400 165, 420 140" fill="none" stroke="#3498db" stroke-width="4"></path></g><g class="fragment" data-fragment-index="2"><path d="M420 140 C470 140, 510 140, 550 140" fill="none" stroke="#f39c12" stroke-width="4"></path><path d="M420 140 C470 120, 510 70, 550 50" fill="none" stroke="#3498db" stroke-width="4"></path></g><text x="60" y="80" font-size="0.5em" fill="#f39c12">Procédural </text><text x="60" y="100" font-size="0.5em" fill="#3498db">POO</text></svg>`,i,n,m=`Si vous avez l’impression de devenir moins bons,<br/>
			c’est que vous êtes en train d’apprendre.`,l,f,b=`Au début ça semble plus simple que du C, vous avez pas à gérer les pointeurs, le langage est
			plus moderne<br/>
			Mais très vite régression, notamment car il y a des règles à respecter que vous n&#39;aviez pas avant,
			en // en C vous pouvez faire n&#39;importe quoi et ça marche<br/>
			Puis vous apprenez à maitriser Puis vous égalez votre précédent niveau, si vous sortez du module
			à ce niveau, vous n&#39;aurez rien appris de plus<br/>
			Restez motivés pour la suite, car après ça décolle vraiment<br/>`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("div"),t.innerHTML=$,i=v(),n=C("p"),n.innerHTML=m,l=v(),f=C("aside"),f.innerHTML=b,this.h()},l(u){e=_(u,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-1nk3rng"&&(e.textContent=o),s=d(u),t=_(u,"DIV",{"data-svelte-h":!0}),g(t)!=="svelte-1sp6g9p"&&(t.innerHTML=$),i=d(u),n=_(u,"P",{class:!0,"data-fragment-index":!0,"data-svelte-h":!0}),g(n)!=="svelte-117ka7n"&&(n.innerHTML=m),l=d(u),f=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-ji71yx"&&(f.innerHTML=b),this.h()},h(){h(n,"class","note fragment"),h(n,"data-fragment-index","0"),h(f,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),r(u,n,p),r(u,l,p),r(u,f,p)},p:O,d(u){u&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f))}}}function ua(x){let e,o="Déroulé",s,t,$="<li>CM en début de cours</li> <li>TD</li> <li>TP/Projet</li>";return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("ol"),t.innerHTML=$},l(i){e=_(i,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-171i1ti"&&(e.textContent=o),s=d(i),t=_(i,"OL",{"data-svelte-h":!0}),g(t)!=="svelte-se5tp"&&(t.innerHTML=$)},m(i,n){r(i,e,n),r(i,s,n),r(i,t,n)},p:O,d(i){i&&(a(e),a(s),a(t))}}}function oa(x){let e,o="Modalités d’examen",s,t,$="<li>DS écrit <b>basé principalement sur les TD</b></li> <li>Projet en fin de module</li> <li>Contrôle continu sur la rigueur</li>",i,n,m="Ce qui est évalué, ce n’est pas le résultat.<br/> <b>C’est la démarche !</b>";return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("ul"),t.innerHTML=$,i=v(),n=C("p"),n.innerHTML=m,this.h()},l(l){e=_(l,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-33cx1h"&&(e.textContent=o),s=d(l),t=_(l,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-yqhay1"&&(t.innerHTML=$),i=d(l),n=_(l,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-dcky3d"&&(n.innerHTML=m),this.h()},h(){h(n,"class","important")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function ca(x){let e,o="Découpage du module",s,t,$=`<svg width="1000" height="500" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" style="flex: 1;background:#fafafa;font-family:sans-serif"><line x1="80" y1="50" x2="80" y2="430" stroke="#333"></line><line x1="80" y1="430" x2="950" y2="430" stroke="#333"></line><g fill="#333" font-size="12"><text x="40" y="430">0h</text><text x="40" y="370">2h</text><text x="40" y="310">4h</text><text x="40" y="250">6h</text><text x="40" y="190">8h</text></g><g font-size="13"><rect x="780" y="60" width="15" height="15" fill="#E85D75"></rect><text x="800" y="73">CM (18h)</text><rect x="780" y="85" width="15" height="15" fill="#456990"></rect><text x="800" y="98">TD (12h)</text><rect x="780" y="110" width="15" height="15" fill="#F28F3B"></rect><text x="800" y="123">TP (14h)</text><rect x="780" y="135" width="15" height="15" fill="#F6BD60"></rect><text x="800" y="148">Projet (18h)</text></g><g font-size="11" text-anchor="middle"><g transform="translate(110,430)"><rect y="-120" width="40" height="120" fill="#E85D75"></rect><rect y="-180" width="40" height="60" fill="#456990"></rect><rect y="-240" width="40" height="60" fill="#F28F3B"></rect><text y="20" text-anchor="middle">04/02</text></g><g transform="translate(180,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-120" width="40" height="60" fill="#456990"></rect><text y="20">25/02</text></g><g transform="translate(250,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-120" width="40" height="60" fill="#456990"></rect><rect y="-180" width="40" height="60" fill="#F28F3B"></rect><text y="20">04/03</text></g><g transform="translate(320,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-120" width="40" height="60" fill="#456990"></rect><rect y="-180" width="40" height="60" fill="#F28F3B"></rect><text y="20">18/03</text></g><g transform="translate(390,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-120" width="40" height="60" fill="#456990"></rect><rect y="-180" width="40" height="60" fill="#F28F3B"></rect><text y="20">24/03</text></g><g transform="translate(460,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-120" width="40" height="60" fill="#456990"></rect><rect y="-180" width="40" height="60" fill="#F28F3B"></rect><text y="20">25/03</text></g><g transform="translate(530,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-180" width="40" height="120" fill="#F28F3B"></rect><text y="20">31/03</text></g><g transform="translate(600,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-180" width="40" height="120" fill="#F6BD60"></rect><text y="20">01/04</text></g><g transform="translate(670,430)"><rect y="-180" width="40" height="180" fill="#F6BD60"></rect><text y="20">07/04</text></g><g transform="translate(740,430)"><rect y="-240" width="40" height="240" fill="#F6BD60"></rect><text y="20">05/05</text></g></g></svg> <div style="flex: 1;"><ul><li><b>CM</b> <br/>
						Théorie et introduction des concepts.</li> <li><b>TD</b> <br/> <b class="font-bold text-orange-400">Sans IDE !</b></li> <li><b>TP</b> <br/>
						Guidés, mais il faut improviser, tester, sortir du cadre.</li> <li><b>Projet</b> <br/>
						Mise en situation professionnelle.</li></ul></div>`,i,n,m="Relire le support du CM ne vous suffira pas à réussir l'examen";return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("div"),t.innerHTML=$,i=v(),n=C("p"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-g73up0"&&(e.textContent=o),s=d(l),t=_(l,"DIV",{style:!0,"data-svelte-h":!0}),g(t)!=="svelte-xoywc5"&&(t.innerHTML=$),i=d(l),n=_(l,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-18g80m8"&&(n.textContent=m),this.h()},h(){lt(t,"display","flex"),lt(t,"gap","2rem"),lt(t,"align-items","center"),lt(t,"justify-content","center"),h(n,"class","font-bold text-orange-400 note")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function fa(x){let e,o,s,t,$,i,n,m,l,f,b,u;return e=new N({props:{$$slots:{default:[ia]},$$scope:{ctx:x}}}),s=new N({props:{$$slots:{default:[aa]},$$scope:{ctx:x}}}),$=new N({props:{$$slots:{default:[ra]},$$scope:{ctx:x}}}),n=new N({props:{$$slots:{default:[ua]},$$scope:{ctx:x}}}),l=new N({props:{$$slots:{default:[oa]},$$scope:{ctx:x}}}),b=new N({props:{$$slots:{default:[ca]},$$scope:{ctx:x}}}),{c(){T(e.$$.fragment),o=v(),T(s.$$.fragment),t=v(),T($.$$.fragment),i=v(),T(n.$$.fragment),m=v(),T(l.$$.fragment),f=v(),T(b.$$.fragment)},l(p){S(e.$$.fragment,p),o=d(p),S(s.$$.fragment,p),t=d(p),S($.$$.fragment,p),i=d(p),S(n.$$.fragment,p),m=d(p),S(l.$$.fragment,p),f=d(p),S(b.$$.fragment,p)},m(p,w){A(e,p,w),r(p,o,w),A(s,p,w),r(p,t,w),A($,p,w),r(p,i,w),A(n,p,w),r(p,m,w),A(l,p,w),r(p,f,w),A(b,p,w),u=!0},p(p,w){const c={};w&1&&(c.$$scope={dirty:w,ctx:p}),e.$set(c);const L={};w&1&&(L.$$scope={dirty:w,ctx:p}),s.$set(L);const E={};w&1&&(E.$$scope={dirty:w,ctx:p}),$.$set(E);const q={};w&1&&(q.$$scope={dirty:w,ctx:p}),n.$set(q);const V={};w&1&&(V.$$scope={dirty:w,ctx:p}),l.$set(V);const B={};w&1&&(B.$$scope={dirty:w,ctx:p}),b.$set(B)},i(p){u||(j(e.$$.fragment,p),j(s.$$.fragment,p),j($.$$.fragment,p),j(n.$$.fragment,p),j(l.$$.fragment,p),j(b.$$.fragment,p),u=!0)},o(p){H(e.$$.fragment,p),H(s.$$.fragment,p),H($.$$.fragment,p),H(n.$$.fragment,p),H(l.$$.fragment,p),H(b.$$.fragment,p),u=!1},d(p){p&&(a(o),a(t),a(i),a(m),a(f)),M(e,p),M(s,p),M($,p),M(n,p),M(l,p),M(b,p)}}}function $a(x){let e,o;return e=new N({props:{data_background_color:"#00353F",$$slots:{default:[fa]},$$scope:{ctx:x}}}),{c(){T(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,t){A(e,s,t),o=!0},p(s,[t]){const $={};t&1&&($.$$scope={dirty:t,ctx:s}),e.$set($)},i(s){o||(j(e.$$.fragment,s),o=!0)},o(s){H(e.$$.fragment,s),o=!1},d(s){M(e,s)}}}class pa extends Be{constructor(e){super(),Fe(this,e,null,$a,Ne,{})}}function ma(x){let e,o="Exercice 1",s,t,$="Encapsulation et validation",i,n,m="⏱️ 10-15 minutes";return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("p"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-sq034p"&&(e.textContent=o),s=d(l),t=_(l,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-tg4x2t"&&(t.textContent=$),i=d(l),n=_(l,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-11o3260"&&(n.textContent=m),this.h()},h(){h(e,"class","text-5xl"),h(t,"class","text-2xl text-gray-400"),h(n,"class","text-xl mt-8")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function da(x){let e,o="📝 Exercice 1 : Compte bancaire sécurisé",s,t,$=`<p class="font-bold text-accent-200">Objectif :</p> <p class="mb-4">Créer une classe <code>CompteBancaire</code> avec encapsulation correcte.</p> <p class="font-bold text-accent-200 mt-6">Consignes :</p> <ol class="space-y-2"><li>Créer une classe avec les attributs <code>numero</code>, <code>solde</code>,
					<code>titulaire</code></li> <li>Tous les attributs doivent être <code>private</code></li> <li>Créer un constructeur pour initialiser le compte</li> <li>Créer des getters pour tous les attributs</li> <li>Créer une méthode <code>deposer(double montant)</code> qui :
					<ul class="ml-6"><li>Vérifie que le montant est positif</li> <li>Ajoute le montant au solde</li></ul></li> <li>Créer une méthode <code>retirer(double montant)</code> qui :
					<ul class="ml-6"><li>Vérifie que le montant est positif</li> <li>Vérifie que le solde est suffisant</li> <li>Retire le montant du solde</li></ul></li></ol>`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("div"),t.innerHTML=$,this.h()},l(i){e=_(i,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-n7as91"&&(e.textContent=o),s=d(i),t=_(i,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-114i2s5"&&(t.innerHTML=$),this.h()},h(){h(t,"class","text-left text-xl")},m(i,n){r(i,e,n),r(i,s,n),r(i,t,n)},p:O,d(i){i&&(a(e),a(s),a(t))}}}function va(x){let e=`
public class CompteBancaire {
    private String numero;
    private double solde;
    private String titulaire;
    
    public CompteBancaire(String numero, String titulaire) {
        // À compléter
    }
    
    public void deposer(double montant) {
        // À compléter : vérification + ajout
    }
    
    public void retirer(double montant) {
        // À compléter : vérifications + retrait
    }
    
    // Ajouter les getters
}
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function xa(x){let e,o="💡 Indice",s,t,$;return t=new ie({props:{$$slots:{default:[va]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(i){e=_(i,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-s9gy6g"&&(e.textContent=o),s=d(i),S(t.$$.fragment,i)},m(i,n){r(i,e,n),r(i,s,n),A(t,i,n),$=!0},p(i,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:i}),t.$set(m)},i(i){$||(j(t.$$.fragment,i),$=!0)},o(i){H(t.$$.fragment,i),$=!1},d(i){i&&(a(e),a(s)),M(t,i)}}}function _a(x){let e=`
public class CompteBancaire {
    private String numero;
    private double solde;
    private String titulaire;
    
    public CompteBancaire(String numero, String titulaire) {
        this.numero = numero;
        this.titulaire = titulaire;
        this.solde = 0.0;
    }
    
    public String getNumero() {
        return numero;
    }
    
    public double getSolde() {
        return solde;
    }
    
    public String getTitulaire() {
        return titulaire;
    }
    
    public void deposer(double montant) {
        if (montant <= 0) {
            throw new IllegalArgumentException("Le montant doit être positif");
        }
        solde += montant;
    }
    
    public void retirer(double montant) {
        if (montant <= 0) {
            throw new IllegalArgumentException("Le montant doit être positif");
        }
        if (montant > solde) {
            throw new IllegalArgumentException("Solde insuffisant");
        }
        solde -= montant;
    }
}
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Ca(x){let e,o="✅ Solution",s,t,$;return t=new ie({props:{class:"language-java h-[70vh]",$$slots:{default:[_a]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(i){e=_(i,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1eu9efq"&&(e.textContent=o),s=d(i),S(t.$$.fragment,i)},m(i,n){r(i,e,n),r(i,s,n),A(t,i,n),$=!0},p(i,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:i}),t.$set(m)},i(i){$||(j(t.$$.fragment,i),$=!0)},o(i){H(t.$$.fragment,i),$=!1},d(i){i&&(a(e),a(s)),M(t,i)}}}function ha(x){let e,o="🎯 Points clés",s,t,$='<li class="fragment">✅ Attributs <code>private</code> → protection des données</li> <li class="fragment">✅ Getters → lecture contrôlée</li> <li class="fragment">✅ Méthodes de modification → validation systématique</li> <li class="fragment">✅ Pas de setter pour le solde → cohérence métier</li> <li class="fragment">✅ Exceptions claires → facilite le debug</li>',i,n,m="💼 En entreprise, cette protection évite les bugs coûteux !";return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("ul"),t.innerHTML=$,i=v(),n=C("p"),n.textContent=m,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-gv6vvv"&&(e.textContent=o),s=d(l),t=_(l,"UL",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1x5lr41"&&(t.innerHTML=$),i=d(l),n=_(l,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-lzo0mv"&&(n.textContent=m),this.h()},h(){h(t,"class","text-xl"),h(n,"class","fragment mt-8 text-accent-200 font-bold")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function ga(x){let e,o="Exercice 2",s,t,$="Héritage et généralisation",i,n,m="⏱️ 15-20 minutes";return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("p"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-8xxy4y"&&(e.textContent=o),s=d(l),t=_(l,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1wfm6em"&&(t.textContent=$),i=d(l),n=_(l,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1ij9449"&&(n.textContent=m),this.h()},h(){h(e,"class","text-5xl"),h(t,"class","text-2xl text-gray-400"),h(n,"class","text-xl mt-8")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function ba(x){let e,o="📝 Exercice 2 : Système de véhicules",s,t,$=`<p class="font-bold text-accent-200">Objectif :</p> <p class="mb-4">Modéliser une hiérarchie de véhicules avec héritage.</p> <p class="font-bold text-accent-200 mt-6">Consignes :</p> <ol class="space-y-2"><li>Créer une classe abstraite <code>Vehicule</code> avec :
					<ul class="ml-6"><li>Attributs : <code>marque</code>, <code>modele</code>, <code>vitesseMax</code></li> <li>Constructeur</li> <li>Méthode concrète : <code>demarrer()</code></li> <li>Méthode abstraite : <code>klaxonner()</code></li></ul></li> <li>Créer une classe <code>Voiture</code> qui hérite de <code>Vehicule</code> avec :
					<ul class="ml-6"><li>Attribut supplémentaire : <code>nbPortes</code></li> <li>Implémenter <code>klaxonner()</code> → affiche &quot;Tuuut tuuut !&quot;</li></ul></li> <li>Créer une classe <code>Moto</code> qui hérite de <code>Vehicule</code> avec :
					<ul class="ml-6"><li>Attribut supplémentaire : <code>avecSidecar</code></li> <li>Implémenter <code>klaxonner()</code> → affiche &quot;Beep beep !&quot;</li></ul></li></ol>`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("div"),t.innerHTML=$,this.h()},l(i){e=_(i,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-y2rbbg"&&(e.textContent=o),s=d(i),t=_(i,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-wl8xd3"&&(t.innerHTML=$),this.h()},h(){h(t,"class","text-left text-xl")},m(i,n){r(i,e,n),r(i,s,n),r(i,t,n)},p:O,d(i){i&&(a(e),a(s),a(t))}}}function La(x){let e=`
@startuml
abstract class Vehicule {
  - marque: String
  - modele: String
  - vitesseMax: int
  + Vehicule(marque, modele, vitesseMax)
  + demarrer()
  {abstract} + klaxonner()
}

class Voiture extends Vehicule {
  - nbPortes: int
  + Voiture(marque, modele, vitesseMax, nbPortes)
  + klaxonner()
}

class Moto extends Vehicule {
  - avecSidecar: boolean
  + Moto(marque, modele, vitesseMax, avecSidecar)
  + klaxonner()
}
@enduml
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function wa(x){let e,o="🎨 Diagramme UML cible",s,t,$;return t=new Ie({props:{$$slots:{default:[La]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(i){e=_(i,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-iafbxg"&&(e.textContent=o),s=d(i),S(t.$$.fragment,i)},m(i,n){r(i,e,n),r(i,s,n),A(t,i,n),$=!0},p(i,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:i}),t.$set(m)},i(i){$||(j(t.$$.fragment,i),$=!0)},o(i){H(t.$$.fragment,i),$=!1},d(i){i&&(a(e),a(s)),M(t,i)}}}function qa(x){let e=`
public abstract class Vehicule {
    private String marque;
    private String modele;
    private int vitesseMax;
    
    public Vehicule(String marque, String modele, int vitesseMax) {
        // À compléter
    }
    
    public void demarrer() {
        System.out.println("Le véhicule démarre...");
    }
    
    // Méthode abstraite à déclarer
}
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Pa(x){let e,o="💡 Indice",s,t,$;return t=new ie({props:{$$slots:{default:[qa]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(i){e=_(i,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-s9gy6g"&&(e.textContent=o),s=d(i),S(t.$$.fragment,i)},m(i,n){r(i,e,n),r(i,s,n),A(t,i,n),$=!0},p(i,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:i}),t.$set(m)},i(i){$||(j(t.$$.fragment,i),$=!0)},o(i){H(t.$$.fragment,i),$=!1},d(i){i&&(a(e),a(s)),M(t,i)}}}function Ma(x){let e=`
public abstract class Vehicule {
    private String marque;
    private String modele;
    private int vitesseMax;
    
    public Vehicule(String marque, String modele, int vitesseMax) {
        this.marque = marque;
        this.modele = modele;
        this.vitesseMax = vitesseMax;
    }
    
    public void demarrer() {
        System.out.println(marque + " " + modele + " démarre...");
    }
    
    public abstract void klaxonner();
    
    // Getters
    public String getMarque() { return marque; }
    public String getModele() { return modele; }
    public int getVitesseMax() { return vitesseMax; }
}
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Ha(x){let e,o="✅ Solution : Vehicule",s,t,$;return t=new ie({props:{class:"language-java",$$slots:{default:[Ma]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(i){e=_(i,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-zw7ek9"&&(e.textContent=o),s=d(i),S(t.$$.fragment,i)},m(i,n){r(i,e,n),r(i,s,n),A(t,i,n),$=!0},p(i,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:i}),t.$set(m)},i(i){$||(j(t.$$.fragment,i),$=!0)},o(i){H(t.$$.fragment,i),$=!1},d(i){i&&(a(e),a(s)),M(t,i)}}}function ja(x){let e=`
public class Voiture extends Vehicule {
    private int nbPortes;
    
    public Voiture(String marque, 
                   String modele, 
                   int vitesseMax, 
                   int nbPortes) {
        super(marque, modele, vitesseMax);
        this.nbPortes = nbPortes;
    }
    
    @Override
    public void klaxonner() {
        System.out.println("Tuuut tuuut !");
    }
    
    public int getNbPortes() {
        return nbPortes;
    }
}
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Aa(x){let e=`
public class Moto extends Vehicule {
    private boolean avecSidecar;
    
    public Moto(String marque, 
                String modele, 
                int vitesseMax, 
                boolean avecSidecar) {
        super(marque, modele, vitesseMax);
        this.avecSidecar = avecSidecar;
    }
    
    @Override
    public void klaxonner() {
        System.out.println("Beep beep !");
    }
    
    public boolean hasAvecSidecar() {
        return avecSidecar;
    }
}
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Sa(x){let e,o="✅ Solution : Voiture et Moto",s,t,$,i,n,m;return $=new ie({props:{class:"language-java",$$slots:{default:[ja]},$$scope:{ctx:x}}}),n=new ie({props:{class:"language-java",$$slots:{default:[Aa]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("div"),T($.$$.fragment),i=v(),T(n.$$.fragment),this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1ywidnm"&&(e.textContent=o),s=d(l),t=_(l,"DIV",{class:!0});var f=ue(t);S($.$$.fragment,f),i=d(f),S(n.$$.fragment,f),f.forEach(a),this.h()},h(){h(t,"class","flex flex-row gap-4")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),A($,t,null),ee(t,i),A(n,t,null),m=!0},p(l,f){const b={};f&1&&(b.$$scope={dirty:f,ctx:l}),$.$set(b);const u={};f&1&&(u.$$scope={dirty:f,ctx:l}),n.$set(u)},i(l){m||(j($.$$.fragment,l),j(n.$$.fragment,l),m=!0)},o(l){H($.$$.fragment,l),H(n.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a(t)),M($),M(n)}}}function Ta(x){let e=`
public class Main {
    public static void main(String[] args) {
        Voiture v = new Voiture("Peugeot", "208", 180, 5);
        Moto m = new Moto("Harley-Davidson", "Road King", 160, true);
        
        v.demarrer();      // "Peugeot 208 démarre..."
        v.klaxonner();     // "Tuuut tuuut !"
        
        m.demarrer();      // "Harley-Davidson Road King démarre..."
        m.klaxonner();     // "Beep beep !"
        
        // On ne peut PAS instancier Vehicule directement
        // Vehicule x = new Vehicule("Test", "Test", 100); // ❌ Erreur !
    }
}
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Ea(x){let e,o="🧪 Test de votre code",s,t,$;return t=new ie({props:{$$slots:{default:[Ta]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(i){e=_(i,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1yizvu6"&&(e.textContent=o),s=d(i),S(t.$$.fragment,i)},m(i,n){r(i,e,n),r(i,s,n),A(t,i,n),$=!0},p(i,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:i}),t.$set(m)},i(i){$||(j(t.$$.fragment,i),$=!0)},o(i){H(t.$$.fragment,i),$=!1},d(i){i&&(a(e),a(s)),M(t,i)}}}function Ia(x){let e,o="🎯 Points clés",s,t,$='<li class="fragment">✅ <code>abstract class</code> → empêche l&#39;instanciation directe</li> <li class="fragment">✅ <code>abstract void klaxonner()</code> → contrat pour les sous-classes</li> <li class="fragment">✅ <code>super(...)</code> → appel du constructeur parent obligatoire</li> <li class="fragment">✅ <code>@Override</code> → sécurité lors de la redéfinition</li> <li class="fragment">✅ Code commun dans le parent → évite duplication</li>',i,n,m="💼 En entreprise : hiérarchies de produits, utilisateurs, transactions, etc.";return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("ul"),t.innerHTML=$,i=v(),n=C("p"),n.textContent=m,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-gv6vvv"&&(e.textContent=o),s=d(l),t=_(l,"UL",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1z0f2wo"&&(t.innerHTML=$),i=d(l),n=_(l,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1fewxyy"&&(n.textContent=m),this.h()},h(){h(t,"class","text-xl"),h(n,"class","fragment mt-8 text-accent-200 font-bold")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function Da(x){let e,o="Exercice 3",s,t,$="Composition et Interfaces",i,n,m="⏱️ 20-25 minutes";return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("p"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1033wpr"&&(e.textContent=o),s=d(l),t=_(l,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1hujr1a"&&(t.textContent=$),i=d(l),n=_(l,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1n0lccm"&&(n.textContent=m),this.h()},h(){h(e,"class","text-5xl"),h(t,"class","text-2xl text-gray-400"),h(n,"class","text-xl mt-8")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function Va(x){let e,o="📝 Exercice 3 : Système de location",s,t,$=`<p class="font-bold text-accent-200">Objectif :</p> <p class="mb-4">Combiner héritage, composition et interfaces dans un système réaliste.</p> <p class="font-bold text-accent-200 mt-6">Consignes :</p> <ol class="space-y-2"><li>Créer une interface <code>ILouable</code> avec :
					<ul class="ml-6"><li><code>double calculerPrixLocation(int nbJours)</code></li></ul></li> <li>Réutiliser vos classes <code>Vehicule</code>, <code>Voiture</code>, <code>Moto</code></li> <li>Faire implémenter <code>ILouable</code> par <code>Voiture</code> et <code>Moto</code> :
					<ul class="ml-6"><li>Voiture : 50€/jour</li> <li>Moto : 30€/jour</li></ul></li> <li>Créer une classe <code>AgenceLocation</code> avec :
					<ul class="ml-6"><li>Liste de véhicules louables</li> <li>Méthode <code>ajouterVehicule(ILouable v)</code></li> <li>Méthode <code>calculerRevenuTotal(int nbJours)</code></li></ul></li></ol>`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("div"),t.innerHTML=$,this.h()},l(i){e=_(i,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1xzgz2g"&&(e.textContent=o),s=d(i),t=_(i,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-p07eid"&&(t.innerHTML=$),this.h()},h(){h(t,"class","text-left text-xl")},m(i,n){r(i,e,n),r(i,s,n),r(i,t,n)},p:O,d(i){i&&(a(e),a(s),a(t))}}}function ka(x){let e=`
@startuml
interface ILouable {
  + calculerPrixLocation(nbJours): double
}

abstract class Vehicule {
  - marque: String
  - modele: String
  + demarrer()
  {abstract} + klaxonner()
}

class Voiture extends Vehicule implements ILouable {
  + calculerPrixLocation(nbJours): double
}

class Moto extends Vehicule implements ILouable {
  + calculerPrixLocation(nbJours): double
}

class AgenceLocation {
  - vehicules: List<ILouable>
  + ajouterVehicule(v: ILouable)
  + calculerRevenuTotal(nbJours): double
}

AgenceLocation o-- "0..*" ILouable
@enduml
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function za(x){let e,o="🎨 Diagramme UML cible",s,t,$;return t=new Ie({props:{$$slots:{default:[ka]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(i){e=_(i,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-iafbxg"&&(e.textContent=o),s=d(i),S(t.$$.fragment,i)},m(i,n){r(i,e,n),r(i,s,n),A(t,i,n),$=!0},p(i,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:i}),t.$set(m)},i(i){$||(j(t.$$.fragment,i),$=!0)},o(i){H(t.$$.fragment,i),$=!1},d(i){i&&(a(e),a(s)),M(t,i)}}}function Oa(x){let e=`
public interface ILouable {
    double calculerPrixLocation(int nbJours);
}

public class Voiture extends Vehicule implements ILouable {
    private int nbPortes;
    private static final double PRIX_JOUR = 50.0;
    
    // ... constructeur, klaxonner(), etc.
    
    @Override
    public double calculerPrixLocation(int nbJours) {
        return nbJours * PRIX_JOUR;
    }
}

public class Moto extends Vehicule implements ILouable {
    private boolean avecSidecar;
    private static final double PRIX_JOUR = 30.0;
    
    // ... constructeur, klaxonner(), etc.
    
    @Override
    public double calculerPrixLocation(int nbJours) {
        return nbJours * PRIX_JOUR;
    }
}
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Ua(x){let e,o="✅ Solution : Interface et implémentations",s,t,$;return t=new ie({props:{class:"language-java h-[65vh]",$$slots:{default:[Oa]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(i){e=_(i,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-wjrqcr"&&(e.textContent=o),s=d(i),S(t.$$.fragment,i)},m(i,n){r(i,e,n),r(i,s,n),A(t,i,n),$=!0},p(i,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:i}),t.$set(m)},i(i){$||(j(t.$$.fragment,i),$=!0)},o(i){H(t.$$.fragment,i),$=!1},d(i){i&&(a(e),a(s)),M(t,i)}}}function Ra(x){let e=`
import java.util.ArrayList;
import java.util.List;

public class AgenceLocation {
    private List<ILouable> vehicules;
    
    public AgenceLocation() {
        this.vehicules = new ArrayList<>();
    }
    
    public void ajouterVehicule(ILouable vehicule) {
        vehicules.add(vehicule);
    }
    
    public double calculerRevenuTotal(int nbJours) {
        double total = 0;
        for (ILouable vehicule : vehicules) {
            total += vehicule.calculerPrixLocation(nbJours);
        }
        return total;
    }
    
    public int getNombreVehicules() {
        return vehicules.size();
    }
}
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Ja(x){let e,o="✅ Solution : AgenceLocation",s,t,$;return t=new ie({props:{class:"language-java",$$slots:{default:[Ra]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(i){e=_(i,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-brhqh2"&&(e.textContent=o),s=d(i),S(t.$$.fragment,i)},m(i,n){r(i,e,n),r(i,s,n),A(t,i,n),$=!0},p(i,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:i}),t.$set(m)},i(i){$||(j(t.$$.fragment,i),$=!0)},o(i){H(t.$$.fragment,i),$=!1},d(i){i&&(a(e),a(s)),M(t,i)}}}function Na(x){let e=`
public class Main {
    public static void main(String[] args) {
        AgenceLocation agence = new AgenceLocation();
        
        Voiture v1 = new Voiture("Peugeot", "208", 180, 5);
        Voiture v2 = new Voiture("Renault", "Clio", 170, 5);
        Moto m1 = new Moto("Yamaha", "MT-07", 200, false);
        
        agence.ajouterVehicule(v1);
        agence.ajouterVehicule(v2);
        agence.ajouterVehicule(m1);
        
        System.out.println("Nombre de véhicules : " + agence.getNombreVehicules());
        // Affiche : 3
        
        System.out.println("Revenu pour 7 jours : " + agence.calculerRevenuTotal(7) + "€");
        // Affiche : 910.0€ (50*7 + 50*7 + 30*7)
    }
}
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Ba(x){let e,o="🧪 Test complet",s,t,$;return t=new ie({props:{$$slots:{default:[Na]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(i){e=_(i,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1lbxuqe"&&(e.textContent=o),s=d(i),S(t.$$.fragment,i)},m(i,n){r(i,e,n),r(i,s,n),A(t,i,n),$=!0},p(i,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:i}),t.$set(m)},i(i){$||(j(t.$$.fragment,i),$=!0)},o(i){H(t.$$.fragment,i),$=!1},d(i){i&&(a(e),a(s)),M(t,i)}}}function Fa(x){let e,o="🎯 Points clés",s,t,$='<li class="fragment">✅ Interface → contrat abstrait (<i>peut faire</i>)</li> <li class="fragment">✅ Héritage → hiérarchie logique (<i>est un</i>)</li> <li class="fragment">✅ Composition → AgenceLocation <i>a des</i> véhicules</li> <li class="fragment">✅ <code>List&lt;ILouable&gt;</code> → polymorphisme en action</li> <li class="fragment">✅ <code>static final</code> → constante de classe</li>',i,n,m="💼 Architecture typique en entreprise : services, DAO, entités métier";return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("ul"),t.innerHTML=$,i=v(),n=C("p"),n.textContent=m,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-gv6vvv"&&(e.textContent=o),s=d(l),t=_(l,"UL",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-193dcgm"&&(t.innerHTML=$),i=d(l),n=_(l,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-o7prxp"&&(n.textContent=m),this.h()},h(){h(t,"class","text-xl"),h(n,"class","fragment mt-8 text-accent-200 font-bold")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function Ga(x){let e,o="🏆 Challenge Bonus",s,t,$="Pour aller plus loin";return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,this.h()},l(i){e=_(i,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-uwrmmu"&&(e.textContent=o),s=d(i),t=_(i,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-saoopl"&&(t.textContent=$),this.h()},h(){h(e,"class","text-5xl"),h(t,"class","text-2xl text-gray-400")},m(i,n){r(i,e,n),r(i,s,n),r(i,t,n)},p:O,d(i){i&&(a(e),a(s),a(t))}}}function Qa(x){let e,o="💪 Challenge : Système de réduction",s,t,$=`<p class="font-bold text-accent-200">Améliorez votre système de location :</p> <ol class="space-y-3 mt-4"><li>Ajouter une interface <code>IReductible</code> avec :
					<ul class="ml-6"><li><code>double appliquerReduction(double prix)</code></li></ul></li> <li>Créer des classes de réduction :
					<ul class="ml-6"><li><code>ReductionPourcentage</code> (ex: -20%)</li> <li><code>ReductionMontant</code> (ex: -50€)</li></ul></li> <li>Modifier <code>AgenceLocation</code> pour accepter une réduction</li> <li>Tester avec plusieurs scénarios</li></ol>`,i,n,m="💡 Indice : Strategy Pattern (on le verra plus tard dans les Design Patterns)";return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("div"),t.innerHTML=$,i=v(),n=C("p"),n.textContent=m,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-11zr1pn"&&(e.textContent=o),s=d(l),t=_(l,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-122ga3f"&&(t.innerHTML=$),i=d(l),n=_(l,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-nkxlqz"&&(n.textContent=m),this.h()},h(){h(t,"class","text-left text-xl"),h(n,"class","fragment mt-6 text-accent-200")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function Ka(x){let e=`
public interface IReductible {
    double appliquerReduction(double prix);
}

public class ReductionPourcentage implements IReductible {
    private double pourcentage;
    
    public ReductionPourcentage(double pourcentage) {
        this.pourcentage = pourcentage;
    }
    
    @Override
    public double appliquerReduction(double prix) {
        return prix * (1 - pourcentage / 100);
    }
}

public class ReductionMontant implements IReductible {
    private double montant;
    
    public ReductionMontant(double montant) {
        this.montant = montant;
    }
    
    @Override
    public double appliquerReduction(double prix) {
        return Math.max(0, prix - montant);
    }
}
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Xa(x){let e,o="✅ Solution Challenge : Interfaces",s,t,$;return t=new ie({props:{class:"language-java",$$slots:{default:[Ka]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(i){e=_(i,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1r3t153"&&(e.textContent=o),s=d(i),S(t.$$.fragment,i)},m(i,n){r(i,e,n),r(i,s,n),A(t,i,n),$=!0},p(i,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:i}),t.$set(m)},i(i){$||(j(t.$$.fragment,i),$=!0)},o(i){H(t.$$.fragment,i),$=!1},d(i){i&&(a(e),a(s)),M(t,i)}}}function Ya(x){let e=`
public class AgenceLocation {
    private List<ILouable> vehicules;
    private IReductible reduction;
    
    public AgenceLocation() {
        this.vehicules = new ArrayList<>();
        this.reduction = null;
    }
    
    public void setReduction(IReductible reduction) {
        this.reduction = reduction;
    }
    
    public double calculerRevenuTotal(int nbJours) {
        double total = 0;
        for (ILouable vehicule : vehicules) {
            double prix = vehicule.calculerPrixLocation(nbJours);
            if (reduction != null) {
                prix = reduction.appliquerReduction(prix);
            }
            total += prix;
        }
        return total;
    }
}
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Wa(x){let e,o="✅ Solution Challenge : AgenceLocation améliorée",s,t,$;return t=new ie({props:{class:"language-java",$$slots:{default:[Ya]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(i){e=_(i,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1ou944c"&&(e.textContent=o),s=d(i),S(t.$$.fragment,i)},m(i,n){r(i,e,n),r(i,s,n),A(t,i,n),$=!0},p(i,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:i}),t.$set(m)},i(i){$||(j(t.$$.fragment,i),$=!0)},o(i){H(t.$$.fragment,i),$=!1},d(i){i&&(a(e),a(s)),M(t,i)}}}function Za(x){let e=`
public class Main {
    public static void main(String[] args) {
        AgenceLocation agence = new AgenceLocation();
        
        agence.ajouterVehicule(new Voiture("Peugeot", "208", 180, 5));
        agence.ajouterVehicule(new Moto("Yamaha", "MT-07", 200, false));
        
        // Sans réduction
        System.out.println("Prix normal : " + agence.calculerRevenuTotal(7) + "€");
        // 560€ (50*7 + 30*7)
        
        // Avec réduction de 20%
        agence.setReduction(new ReductionPourcentage(20));
        System.out.println("Avec -20% : " + agence.calculerRevenuTotal(7) + "€");
        // 448€ (560 * 0.8)
        
        // Avec réduction de 100€
        agence.setReduction(new ReductionMontant(100));
        System.out.println("Avec -100€ : " + agence.calculerRevenuTotal(7) + "€");
        // 460€ (560 - 100)
    }
}
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function ya(x){let e,o="🧪 Test du challenge",s,t,$;return t=new ie({props:{$$slots:{default:[Za]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(i){e=_(i,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-ouoo1i"&&(e.textContent=o),s=d(i),S(t.$$.fragment,i)},m(i,n){r(i,e,n),r(i,s,n),A(t,i,n),$=!0},p(i,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:i}),t.$set(m)},i(i){$||(j(t.$$.fragment,i),$=!0)},o(i){H(t.$$.fragment,i),$=!1},d(i){i&&(a(e),a(s)),M(t,i)}}}function er(x){let e,o="🎓 Récapitulatif des exercices",s,t,$='<thead><tr><th class="p-3">Exercice</th> <th class="p-3">Concepts</th> <th class="p-3">Temps</th></tr></thead> <tbody><tr><td class="p-3">1. Compte bancaire</td> <td class="p-3">Encapsulation, validation</td> <td class="p-3">15 min</td></tr> <tr><td class="p-3">2. Véhicules</td> <td class="p-3">Héritage, classes abstraites</td> <td class="p-3">20 min</td></tr> <tr><td class="p-3">3. Location</td> <td class="p-3">Interfaces, composition</td> <td class="p-3">25 min</td></tr> <tr><td class="p-3">Bonus. Réductions</td> <td class="p-3">Strategy pattern</td> <td class="p-3">15 min</td></tr></tbody>',i,n,m="💼 Ces patterns sont utilisés quotidiennement dans l'industrie !";return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("table"),t.innerHTML=$,i=v(),n=C("p"),n.textContent=m,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-197pzpn"&&(e.textContent=o),s=d(l),t=_(l,"TABLE",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1esjeaf"&&(t.innerHTML=$),i=d(l),n=_(l,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1tfdww3"&&(n.textContent=m),this.h()},h(){h(t,"class","text-lg mt-4"),h(n,"class","mt-6 text-accent-200 font-bold")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function tr(x){let e,o="🏋️ Exercices pratiques - Séance 1",s,t,$,i,n,m,l,f,b,u,p,w,c,L,E,q,V,B,Q,Y,D,F,ne,U,le,ae,fe,re,pe,oe,$e,ce,me,R,te,J,se,de,he,ve,ge,xe,be,z,W,k,X,Le,we,qe,Pe,Me,He;return t=new N({props:{data_background_color:"#1a3a1a",$$slots:{default:[ma]},$$scope:{ctx:x}}}),i=new N({props:{$$slots:{default:[da]},$$scope:{ctx:x}}}),m=new N({props:{$$slots:{default:[xa]},$$scope:{ctx:x}}}),f=new N({props:{$$slots:{default:[Ca]},$$scope:{ctx:x}}}),u=new N({props:{$$slots:{default:[ha]},$$scope:{ctx:x}}}),w=new N({props:{data_background_color:"#1a1a3a",$$slots:{default:[ga]},$$scope:{ctx:x}}}),L=new N({props:{$$slots:{default:[ba]},$$scope:{ctx:x}}}),q=new N({props:{$$slots:{default:[wa]},$$scope:{ctx:x}}}),B=new N({props:{$$slots:{default:[Pa]},$$scope:{ctx:x}}}),Y=new N({props:{$$slots:{default:[Ha]},$$scope:{ctx:x}}}),F=new N({props:{$$slots:{default:[Sa]},$$scope:{ctx:x}}}),U=new N({props:{$$slots:{default:[Ea]},$$scope:{ctx:x}}}),ae=new N({props:{$$slots:{default:[Ia]},$$scope:{ctx:x}}}),re=new N({props:{data_background_color:"#3a1a1a",$$slots:{default:[Da]},$$scope:{ctx:x}}}),oe=new N({props:{$$slots:{default:[Va]},$$scope:{ctx:x}}}),ce=new N({props:{$$slots:{default:[za]},$$scope:{ctx:x}}}),R=new N({props:{$$slots:{default:[Ua]},$$scope:{ctx:x}}}),J=new N({props:{$$slots:{default:[Ja]},$$scope:{ctx:x}}}),de=new N({props:{$$slots:{default:[Ba]},$$scope:{ctx:x}}}),ve=new N({props:{$$slots:{default:[Fa]},$$scope:{ctx:x}}}),xe=new N({props:{data_background_color:"#2a2a1a",$$slots:{default:[Ga]},$$scope:{ctx:x}}}),z=new N({props:{$$slots:{default:[Qa]},$$scope:{ctx:x}}}),k=new N({props:{$$slots:{default:[Xa]},$$scope:{ctx:x}}}),Le=new N({props:{$$slots:{default:[Wa]},$$scope:{ctx:x}}}),qe=new N({props:{$$slots:{default:[ya]},$$scope:{ctx:x}}}),Me=new N({props:{$$slots:{default:[er]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),T(t.$$.fragment),$=v(),T(i.$$.fragment),n=v(),T(m.$$.fragment),l=v(),T(f.$$.fragment),b=v(),T(u.$$.fragment),p=v(),T(w.$$.fragment),c=v(),T(L.$$.fragment),E=v(),T(q.$$.fragment),V=v(),T(B.$$.fragment),Q=v(),T(Y.$$.fragment),D=v(),T(F.$$.fragment),ne=v(),T(U.$$.fragment),le=v(),T(ae.$$.fragment),fe=v(),T(re.$$.fragment),pe=v(),T(oe.$$.fragment),$e=v(),T(ce.$$.fragment),me=v(),T(R.$$.fragment),te=v(),T(J.$$.fragment),se=v(),T(de.$$.fragment),he=v(),T(ve.$$.fragment),ge=v(),T(xe.$$.fragment),be=v(),T(z.$$.fragment),W=v(),T(k.$$.fragment),X=v(),T(Le.$$.fragment),we=v(),T(qe.$$.fragment),Pe=v(),T(Me.$$.fragment)},l(I){e=_(I,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-lz1hvq"&&(e.textContent=o),s=d(I),S(t.$$.fragment,I),$=d(I),S(i.$$.fragment,I),n=d(I),S(m.$$.fragment,I),l=d(I),S(f.$$.fragment,I),b=d(I),S(u.$$.fragment,I),p=d(I),S(w.$$.fragment,I),c=d(I),S(L.$$.fragment,I),E=d(I),S(q.$$.fragment,I),V=d(I),S(B.$$.fragment,I),Q=d(I),S(Y.$$.fragment,I),D=d(I),S(F.$$.fragment,I),ne=d(I),S(U.$$.fragment,I),le=d(I),S(ae.$$.fragment,I),fe=d(I),S(re.$$.fragment,I),pe=d(I),S(oe.$$.fragment,I),$e=d(I),S(ce.$$.fragment,I),me=d(I),S(R.$$.fragment,I),te=d(I),S(J.$$.fragment,I),se=d(I),S(de.$$.fragment,I),he=d(I),S(ve.$$.fragment,I),ge=d(I),S(xe.$$.fragment,I),be=d(I),S(z.$$.fragment,I),W=d(I),S(k.$$.fragment,I),X=d(I),S(Le.$$.fragment,I),we=d(I),S(qe.$$.fragment,I),Pe=d(I),S(Me.$$.fragment,I)},m(I,K){r(I,e,K),r(I,s,K),A(t,I,K),r(I,$,K),A(i,I,K),r(I,n,K),A(m,I,K),r(I,l,K),A(f,I,K),r(I,b,K),A(u,I,K),r(I,p,K),A(w,I,K),r(I,c,K),A(L,I,K),r(I,E,K),A(q,I,K),r(I,V,K),A(B,I,K),r(I,Q,K),A(Y,I,K),r(I,D,K),A(F,I,K),r(I,ne,K),A(U,I,K),r(I,le,K),A(ae,I,K),r(I,fe,K),A(re,I,K),r(I,pe,K),A(oe,I,K),r(I,$e,K),A(ce,I,K),r(I,me,K),A(R,I,K),r(I,te,K),A(J,I,K),r(I,se,K),A(de,I,K),r(I,he,K),A(ve,I,K),r(I,ge,K),A(xe,I,K),r(I,be,K),A(z,I,K),r(I,W,K),A(k,I,K),r(I,X,K),A(Le,I,K),r(I,we,K),A(qe,I,K),r(I,Pe,K),A(Me,I,K),He=!0},p(I,K){const ke={};K&1&&(ke.$$scope={dirty:K,ctx:I}),t.$set(ke);const je={};K&1&&(je.$$scope={dirty:K,ctx:I}),i.$set(je);const ze={};K&1&&(ze.$$scope={dirty:K,ctx:I}),m.$set(ze);const Ae={};K&1&&(Ae.$$scope={dirty:K,ctx:I}),f.$set(Ae);const Oe={};K&1&&(Oe.$$scope={dirty:K,ctx:I}),u.$set(Oe);const Se={};K&1&&(Se.$$scope={dirty:K,ctx:I}),w.$set(Se);const Ue={};K&1&&(Ue.$$scope={dirty:K,ctx:I}),L.$set(Ue);const Te={};K&1&&(Te.$$scope={dirty:K,ctx:I}),q.$set(Te);const Re={};K&1&&(Re.$$scope={dirty:K,ctx:I}),B.$set(Re);const Ee={};K&1&&(Ee.$$scope={dirty:K,ctx:I}),Y.$set(Ee);const Je={};K&1&&(Je.$$scope={dirty:K,ctx:I}),F.$set(Je);const De={};K&1&&(De.$$scope={dirty:K,ctx:I}),U.$set(De);const Qe={};K&1&&(Qe.$$scope={dirty:K,ctx:I}),ae.$set(Qe);const Ve={};K&1&&(Ve.$$scope={dirty:K,ctx:I}),re.$set(Ve);const Ke={};K&1&&(Ke.$$scope={dirty:K,ctx:I}),oe.$set(Ke);const Ge={};K&1&&(Ge.$$scope={dirty:K,ctx:I}),ce.$set(Ge);const Xe={};K&1&&(Xe.$$scope={dirty:K,ctx:I}),R.$set(Xe);const P={};K&1&&(P.$$scope={dirty:K,ctx:I}),J.$set(P);const G={};K&1&&(G.$$scope={dirty:K,ctx:I}),de.$set(G);const Ye={};K&1&&(Ye.$$scope={dirty:K,ctx:I}),ve.$set(Ye);const We={};K&1&&(We.$$scope={dirty:K,ctx:I}),xe.$set(We);const Ze={};K&1&&(Ze.$$scope={dirty:K,ctx:I}),z.$set(Ze);const ye={};K&1&&(ye.$$scope={dirty:K,ctx:I}),k.$set(ye);const et={};K&1&&(et.$$scope={dirty:K,ctx:I}),Le.$set(et);const tt={};K&1&&(tt.$$scope={dirty:K,ctx:I}),qe.$set(tt);const st={};K&1&&(st.$$scope={dirty:K,ctx:I}),Me.$set(st)},i(I){He||(j(t.$$.fragment,I),j(i.$$.fragment,I),j(m.$$.fragment,I),j(f.$$.fragment,I),j(u.$$.fragment,I),j(w.$$.fragment,I),j(L.$$.fragment,I),j(q.$$.fragment,I),j(B.$$.fragment,I),j(Y.$$.fragment,I),j(F.$$.fragment,I),j(U.$$.fragment,I),j(ae.$$.fragment,I),j(re.$$.fragment,I),j(oe.$$.fragment,I),j(ce.$$.fragment,I),j(R.$$.fragment,I),j(J.$$.fragment,I),j(de.$$.fragment,I),j(ve.$$.fragment,I),j(xe.$$.fragment,I),j(z.$$.fragment,I),j(k.$$.fragment,I),j(Le.$$.fragment,I),j(qe.$$.fragment,I),j(Me.$$.fragment,I),He=!0)},o(I){H(t.$$.fragment,I),H(i.$$.fragment,I),H(m.$$.fragment,I),H(f.$$.fragment,I),H(u.$$.fragment,I),H(w.$$.fragment,I),H(L.$$.fragment,I),H(q.$$.fragment,I),H(B.$$.fragment,I),H(Y.$$.fragment,I),H(F.$$.fragment,I),H(U.$$.fragment,I),H(ae.$$.fragment,I),H(re.$$.fragment,I),H(oe.$$.fragment,I),H(ce.$$.fragment,I),H(R.$$.fragment,I),H(J.$$.fragment,I),H(de.$$.fragment,I),H(ve.$$.fragment,I),H(xe.$$.fragment,I),H(z.$$.fragment,I),H(k.$$.fragment,I),H(Le.$$.fragment,I),H(qe.$$.fragment,I),H(Me.$$.fragment,I),He=!1},d(I){I&&(a(e),a(s),a($),a(n),a(l),a(b),a(p),a(c),a(E),a(V),a(Q),a(D),a(ne),a(le),a(fe),a(pe),a($e),a(me),a(te),a(se),a(he),a(ge),a(be),a(W),a(X),a(we),a(Pe)),M(t,I),M(i,I),M(m,I),M(f,I),M(u,I),M(w,I),M(L,I),M(q,I),M(B,I),M(Y,I),M(F,I),M(U,I),M(ae,I),M(re,I),M(oe,I),M(ce,I),M(R,I),M(J,I),M(de,I),M(ve,I),M(xe,I),M(z,I),M(k,I),M(Le,I),M(qe,I),M(Me,I)}}}function sr(x){let e,o;return e=new N({props:{$$slots:{default:[tr]},$$scope:{ctx:x}}}),{c(){T(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,t){A(e,s,t),o=!0},p(s,[t]){const $={};t&1&&($.$$scope={dirty:t,ctx:s}),e.$set($)},i(s){o||(j(e.$$.fragment,s),o=!0)},o(s){H(e.$$.fragment,s),o=!1},d(s){M(e,s)}}}class lr extends Be{constructor(e){super(),Fe(this,e,null,sr,Ne,{})}}function nr(x){let e,o="3ICS 2026 - POO",s,t,$,i=`- Lien de la présentation sur e-campus - Suivre depuis le projecteur - Montrer bouton d'aide -
		Overview (touche 'o')`;return{c(){e=C("h1"),s=y(o),t=v(),$=C("aside"),$.textContent=i,this.h()},l(n){e=_(n,"H1",{class:!0});var m=ue(e);s=Z(m,o),m.forEach(a),t=d(n),$=_(n,"ASIDE",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-1dq3421"&&($.textContent=i),this.h()},h(){h(e,"class","capitalize"),h($,"class","notes")},m(n,m){r(n,e,m),ee(e,s),r(n,t,m),r(n,$,m)},p:O,d(n){n&&(a(e),a(t),a($))}}}function ir(x){let e,o="Les concepts de la POO",s,t,$="<li>Généralités</li> <li>L&#39;encapsulation</li> <li>L&#39;héritage</li> <li>La composition</li> <li>Les interfaces</li> <li>Le polymorphisme</li>",i,n,m=`Voici le fil rouge du cours. On va voir ces 6 concepts dans l'ordre. Chaque concept s'appuie sur
		le précédent. À la fin, vous saurez concevoir une architecture objet complète. Prenez des notes
		sur ce qui vous semble flou, on fera des pauses pour les questions.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("ol"),t.innerHTML=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1thzgzl"&&(e.textContent=o),s=d(l),t=_(l,"OL",{"data-svelte-h":!0}),g(t)!=="svelte-vjnx6z"&&(t.innerHTML=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1evfkkj"&&(n.textContent=m),this.h()},h(){h(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function ar(x){let e,o,s,t,$,i,n,m,l,f,b,u,p,w,c,L,E,q,V,B,Q,Y;return e=new N({props:{animate:!0,$$slots:{default:[nr]},$$scope:{ctx:x}}}),s=new pa({}),$=new na({}),n=new jl({}),l=new N({props:{$$slots:{default:[ir]},$$scope:{ctx:x}}}),b=new Qi({}),p=new ai({}),c=new bs({}),E=new nn({}),V=new An({}),Q=new lr({}),{c(){T(e.$$.fragment),o=v(),T(s.$$.fragment),t=v(),T($.$$.fragment),i=v(),T(n.$$.fragment),m=v(),T(l.$$.fragment),f=v(),T(b.$$.fragment),u=v(),T(p.$$.fragment),w=v(),T(c.$$.fragment),L=v(),T(E.$$.fragment),q=v(),T(V.$$.fragment),B=v(),T(Q.$$.fragment)},l(D){S(e.$$.fragment,D),o=d(D),S(s.$$.fragment,D),t=d(D),S($.$$.fragment,D),i=d(D),S(n.$$.fragment,D),m=d(D),S(l.$$.fragment,D),f=d(D),S(b.$$.fragment,D),u=d(D),S(p.$$.fragment,D),w=d(D),S(c.$$.fragment,D),L=d(D),S(E.$$.fragment,D),q=d(D),S(V.$$.fragment,D),B=d(D),S(Q.$$.fragment,D)},m(D,F){A(e,D,F),r(D,o,F),A(s,D,F),r(D,t,F),A($,D,F),r(D,i,F),A(n,D,F),r(D,m,F),A(l,D,F),r(D,f,F),A(b,D,F),r(D,u,F),A(p,D,F),r(D,w,F),A(c,D,F),r(D,L,F),A(E,D,F),r(D,q,F),A(V,D,F),r(D,B,F),A(Q,D,F),Y=!0},p(D,[F]){const ne={};F&1&&(ne.$$scope={dirty:F,ctx:D}),e.$set(ne);const U={};F&1&&(U.$$scope={dirty:F,ctx:D}),l.$set(U)},i(D){Y||(j(e.$$.fragment,D),j(s.$$.fragment,D),j($.$$.fragment,D),j(n.$$.fragment,D),j(l.$$.fragment,D),j(b.$$.fragment,D),j(p.$$.fragment,D),j(c.$$.fragment,D),j(E.$$.fragment,D),j(V.$$.fragment,D),j(Q.$$.fragment,D),Y=!0)},o(D){H(e.$$.fragment,D),H(s.$$.fragment,D),H($.$$.fragment,D),H(n.$$.fragment,D),H(l.$$.fragment,D),H(b.$$.fragment,D),H(p.$$.fragment,D),H(c.$$.fragment,D),H(E.$$.fragment,D),H(V.$$.fragment,D),H(Q.$$.fragment,D),Y=!1},d(D){D&&(a(o),a(t),a(i),a(m),a(f),a(u),a(w),a(L),a(q),a(B)),M(e,D),M(s,D),M($,D),M(n,D),M(l,D),M(b,D),M(p,D),M(c,D),M(E,D),M(V,D),M(Q,D)}}}class rr extends Be{constructor(e){super(),Fe(this,e,null,ar,Ne,{})}}function ur(x){let e,o;return e=new rr({}),{c(){T(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,t){A(e,s,t),o=!0},i(s){o||(j(e.$$.fragment,s),o=!0)},o(s){H(e.$$.fragment,s),o=!1},d(s){M(e,s)}}}function or(x){let e,o,s,t,$;return document.title="3ICS 2026 - POO - Alexis Picot",t=new Dt({props:{$$slots:{default:[ur]},$$scope:{ctx:x}}}),{c(){e=C("link"),o=C("meta"),s=v(),T(t.$$.fragment),this.h()},l(i){const n=It("svelte-v7f1ci",document.head);e=_(n,"LINK",{rel:!0,href:!0}),o=_(n,"META",{name:!0,content:!0}),n.forEach(a),s=d(i),S(t.$$.fragment,i),this.h()},h(){h(e,"rel","icon"),h(e,"href","https://fav.farm/💻"),h(o,"name","timestamp"),h(o,"content",new Date(1770198430451).toLocaleString())},m(i,n){ee(document.head,e),ee(document.head,o),r(i,s,n),A(t,i,n),$=!0},p(i,[n]){const m={};n&1&&(m.$$scope={dirty:n,ctx:i}),t.$set(m)},i(i){$||(j(t.$$.fragment,i),$=!0)},o(i){H(t.$$.fragment,i),$=!1},d(i){i&&a(s),a(e),a(o),M(t,i)}}}class mr extends Be{constructor(e){super(),Fe(this,e,null,or,Ne,{})}}export{mr as component,pr as universal};
