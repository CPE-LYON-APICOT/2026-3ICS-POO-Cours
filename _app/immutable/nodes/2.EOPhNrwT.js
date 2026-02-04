import{s as Ve,n as N}from"../chunks/scheduler.BOeCmP2X.js";import{S as Oe,i as Ue,q as H,t as j,a as A,u as T,v as E,r as S,d as i,b as r,e as C,y as g,h as d,j as _,l as v,w as h,c as ee,f as ue,g as Z,k as y,A as xe,B as Ce,x as Xe,z as Dt}from"../chunks/index.DXsIxeDD.js";import{S as J,P as je,C as ie,a as It}from"../chunks/plantUml.kDHu58qr.js";const kt=!1,zt=!0,ya=Object.freeze(Object.defineProperty({__proto__:null,prerender:zt,ssr:kt},Symbol.toStringTag,{value:"Module"}));function Vt(x){let e,o="En POO, l'héritage est un mécanisme qui permet de créer une nouvelle classe à partir d'une classe existante.",l,t,$=`L'héritage, c'est comme dans la vraie vie : les enfants héritent des caractéristiques des parents.\r
			En code, une classe enfant récupère automatiquement tout ce que possède la classe parent.\r
			C'est un des piliers de la POO, introduit dès Simula en 1967 !`;return{c(){e=_("p"),e.textContent=o,l=v(),t=_("aside"),t.textContent=$,this.h()},l(a){e=C(a,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1cxtphb"&&(e.textContent=o),l=d(a),t=C(a,"ASIDE",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-58gjd2"&&(t.textContent=$),this.h()},h(){h(t,"class","notes")},m(a,n){r(a,e,n),r(a,l,n),r(a,t,n)},p:N,d(a){a&&(i(e),i(l),i(t))}}}function Ot(x){let e,o=`La classe existante est appelée <span class="text-important">classe mère</span> ou
			<span class="text-important">classe de base</span>.`,l,t,$=`On dit aussi "superclasse" en anglais (superclass). C'est le terme utilisé dans la documentation Java.\r
			La classe mère définit le comportement commun à toutes ses classes filles.`;return{c(){e=_("p"),e.innerHTML=o,l=v(),t=_("aside"),t.textContent=$,this.h()},l(a){e=C(a,"P",{"data-svelte-h":!0}),g(e)!=="svelte-17c6x0h"&&(e.innerHTML=o),l=d(a),t=C(a,"ASIDE",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-c2wodv"&&(t.textContent=$),this.h()},h(){h(t,"class","notes")},m(a,n){r(a,e,n),r(a,l,n),r(a,t,n)},p:N,d(a){a&&(i(e),i(l),i(t))}}}function Ut(x){let e,o=`La nouvelle classe est appelée <span class="text-important">classe fille</span> ou
			<span class="text-important">classe dérivée</span>.`,l,t,$="La classe fille peut aussi ajouter des attributs et des méthodes qui lui sont propres.",a,n,m=`On dit aussi "subclass" en anglais. La classe fille est une spécialisation de la classe mère.\r
			C'est la relation "est un" : un Chien est un Animal, donc Chien hérite d'Animal.\r
			En Java, toutes les classes héritent implicitement de Object. C'est la racine de l'arbre d'héritage.`;return{c(){e=_("p"),e.innerHTML=o,l=v(),t=_("p"),t.textContent=$,a=v(),n=_("aside"),n.textContent=m,this.h()},l(s){e=C(s,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1uk6o90"&&(e.innerHTML=o),l=d(s),t=C(s,"P",{"data-svelte-h":!0}),g(t)!=="svelte-hn2jyx"&&(t.textContent=$),a=d(s),n=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1xkwxx4"&&(n.textContent=m),this.h()},h(){h(n,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function Rt(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Nt(x){let e,o="Visualisons l'héritage",l,t,$,a,n="La flèche pointe vers la classe mère : <code>Chien</code> et <code>Chat</code> héritent de <code>Animal</code>.",m,s,c=`C'est la notation UML standard. La flèche avec un triangle vide pointe toujours vers le parent.\r
			Chien et Chat sont des spécialisations d'Animal.`,b;return t=new je({props:{$$slots:{default:[Rt]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),S(t.$$.fragment),$=v(),a=_("p"),a.innerHTML=n,m=v(),s=_("aside"),s.textContent=c,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-88th8y"&&(e.textContent=o),l=d(u),E(t.$$.fragment,u),$=d(u),a=C(u,"P",{class:!0,"data-svelte-h":!0}),g(a)!=="svelte-15afcpd"&&(a.innerHTML=n),m=d(u),s=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-r9k6a2"&&(s.textContent=c),this.h()},h(){h(a,"class","fragment"),h(s,"class","notes")},m(u,p){r(u,e,p),r(u,l,p),T(t,u,p),r(u,$,p),r(u,a,p),r(u,m,p),r(u,s,p),b=!0},p(u,p){const q={};p&1&&(q.$$scope={dirty:p,ctx:u}),t.$set(q)},i(u){b||(A(t.$$.fragment,u),b=!0)},o(u){j(t.$$.fragment,u),b=!1},d(u){u&&(i(e),i(l),i($),i(a),i(m),i(s)),H(t,u)}}}function Jt(x){let e=`
class Animal {
    void crier() {
        System.out.println("Je suis un animal");
    }
}

class Chien extends Animal {
    boolean inscritLOF;
}
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Bt(x){let e,o="En code Java",l,t,$,a,n='On utilise le mot-clé <code class="code text-important">extends</code> pour hériter d&#39;une classe.',m,s,c="Le mot-clé extends, c'est le lien d'héritage. Chien étend Animal, donc Chien a tout ce qu'Animal a.",b;return t=new ie({props:{$$slots:{default:[Jt]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),S(t.$$.fragment),$=v(),a=_("p"),a.innerHTML=n,m=v(),s=_("aside"),s.textContent=c,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1w10xpg"&&(e.textContent=o),l=d(u),E(t.$$.fragment,u),$=d(u),a=C(u,"P",{"data-svelte-h":!0}),g(a)!=="svelte-fb6via"&&(a.innerHTML=n),m=d(u),s=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-1efpv08"&&(s.textContent=c),this.h()},h(){h(s,"class","notes")},m(u,p){r(u,e,p),r(u,l,p),T(t,u,p),r(u,$,p),r(u,a,p),r(u,m,p),r(u,s,p),b=!0},p(u,p){const q={};p&1&&(q.$$scope={dirty:p,ctx:u}),t.$set(q)},i(u){b||(A(t.$$.fragment,u),b=!0)},o(u){j(t.$$.fragment,u),b=!1},d(u){u&&(i(e),i(l),i($),i(a),i(m),i(s)),H(t,u)}}}function Ft(x){let e,o=`La classe fille hérite des attributs et des méthodes de la classe mère. Elle peut aussi\r
			redéfinir les méthodes de la classe mère.`,l,t,$='Redéfinir une méthode s&#39;appelle <span class="text-important">redéfinition</span> (ou <em>override</em>).',a,n,m=`Attention à ne pas confondre redéfinition (override) et surcharge (overload) !\r
			Redéfinition : même signature, comportement différent dans la classe fille.\r
			Surcharge : même nom, signatures différentes (nombre/type de paramètres).`;return{c(){e=_("p"),e.textContent=o,l=v(),t=_("p"),t.innerHTML=$,a=v(),n=_("aside"),n.textContent=m,this.h()},l(s){e=C(s,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1def0s3"&&(e.textContent=o),l=d(s),t=C(s,"P",{"data-svelte-h":!0}),g(t)!=="svelte-16p7trl"&&(t.innerHTML=$),a=d(s),n=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1i21kkf"&&(n.textContent=m),this.h()},h(){h(n,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function Gt(x){let e,o="Pourquoi redéfinir une méthode ?",l,t,$='<li class="fragment">Adapter le comportement de la méthode à la classe fille</li> <li class="fragment">Spécialiser un comportement générique</li>',a,n,m='<p class="text-accent-200">Exemple : Un animal crie, mais chaque animal crie différemment !</p>',s,c,b=`C'est là que la POO prend tout son sens. Le concept général est dans la classe mère, le détail dans la fille.\r
			Un Animal sait qu'il doit crier, mais seul le Chien sait qu'il aboie.\r
			C'est le Template Method Pattern : la structure dans le parent, les détails dans les enfants.`;return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("ul"),t.innerHTML=$,a=v(),n=_("div"),n.innerHTML=m,s=v(),c=_("aside"),c.textContent=b,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-110ib47"&&(e.textContent=o),l=d(u),t=C(u,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-r58kxc"&&(t.innerHTML=$),a=d(u),n=C(u,"DIV",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-105ov4u"&&(n.innerHTML=m),s=d(u),c=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-1fg734m"&&(c.textContent=b),this.h()},h(){h(n,"class","fragment mt-8"),h(c,"class","notes")},m(u,p){r(u,e,p),r(u,l,p),r(u,t,p),r(u,a,p),r(u,n,p),r(u,s,p),r(u,c,p)},p:N,d(u){u&&(i(e),i(l),i(t),i(a),i(n),i(s),i(c))}}}function Qt(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Kt(x){let e,o="La redéfinition en pratique",l,t,$,a,n=`Regardez le @Override. C'est une annotation qui dit au compilateur : je redéfinis une méthode du parent.\r
			Si vous faites une faute de frappe dans le nom de la méthode, le compilateur vous préviendra.`,m;return t=new ie({props:{lines:"1-5|7-11",$$slots:{default:[Qt]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),S(t.$$.fragment),$=v(),a=_("aside"),a.textContent=n,this.h()},l(s){e=C(s,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1eurtkj"&&(e.textContent=o),l=d(s),E(t.$$.fragment,s),$=d(s),a=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(a)!=="svelte-usptrd"&&(a.textContent=n),this.h()},h(){h(a,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),T(t,s,c),r(s,$,c),r(s,a,c),m=!0},p(s,c){const b={};c&1&&(b.$$scope={dirty:c,ctx:s}),t.$set(b)},i(s){m||(A(t.$$.fragment,s),m=!0)},o(s){j(t.$$.fragment,s),m=!1},d(s){s&&(i(e),i(l),i($),i(a)),H(t,s)}}}function Yt(x){let e=`
void Crier() {  // Oups, majuscule !
    System.out.println("Wouaf");
}
// Compile... mais ne redéfinit rien !
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Xt(x){let e=`
@Override
void Crier() {  // Erreur de compilation !
    System.out.println("Wouaf");
}
// Le compilateur détecte l'erreur
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Wt(x){let e,o="L'annotation @Override",l,t,$='Bonne pratique : <b>toujours</b> utiliser <code class="text-important">@Override</code> lors d&#39;une redéfinition.',a,n,m,s,c="❌ Sans @Override",b,u,p,q,f,L="✅ Avec @Override",M,w,I,B,Q=`Sans Override, si vous vous trompez dans le nom, vous créez une nouvelle méthode au lieu de redéfinir.\r
			Avec Override, le compilateur vérifie que la méthode existe bien dans le parent.`,K;return u=new ie({props:{class:"language-java",$$slots:{default:[Yt]},$$scope:{ctx:x}}}),w=new ie({props:{class:"language-java",$$slots:{default:[Xt]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.innerHTML=$,a=v(),n=_("div"),m=_("div"),s=_("h4"),s.textContent=c,b=v(),S(u.$$.fragment),p=v(),q=_("div"),f=_("h4"),f.textContent=L,M=v(),S(w.$$.fragment),I=v(),B=_("aside"),B.textContent=Q,this.h()},l(D){e=C(D,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-50lfmg"&&(e.textContent=o),l=d(D),t=C(D,"P",{"data-svelte-h":!0}),g(t)!=="svelte-d96ked"&&(t.innerHTML=$),a=d(D),n=C(D,"DIV",{class:!0});var F=ue(n);m=C(F,"DIV",{});var ne=ue(m);s=C(ne,"H4",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-15xopgk"&&(s.textContent=c),b=d(ne),E(u.$$.fragment,ne),ne.forEach(i),p=d(F),q=C(F,"DIV",{});var O=ue(q);f=C(O,"H4",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-1wl6p7j"&&(f.textContent=L),M=d(O),E(w.$$.fragment,O),O.forEach(i),F.forEach(i),I=d(D),B=C(D,"ASIDE",{class:!0,"data-svelte-h":!0}),g(B)!=="svelte-ggk4l5"&&(B.textContent=Q),this.h()},h(){h(s,"class","text-red-400"),h(f,"class","text-green-400"),h(n,"class","grid grid-cols-2 gap-8 mt-6"),h(B,"class","notes")},m(D,F){r(D,e,F),r(D,l,F),r(D,t,F),r(D,a,F),r(D,n,F),ee(n,m),ee(m,s),ee(m,b),T(u,m,null),ee(n,p),ee(n,q),ee(q,f),ee(q,M),T(w,q,null),r(D,I,F),r(D,B,F),K=!0},p(D,F){const ne={};F&1&&(ne.$$scope={dirty:F,ctx:D}),u.$set(ne);const O={};F&1&&(O.$$scope={dirty:F,ctx:D}),w.$set(O)},i(D){K||(A(u.$$.fragment,D),A(w.$$.fragment,D),K=!0)},o(D){j(u.$$.fragment,D),j(w.$$.fragment,D),K=!1},d(D){D&&(i(e),i(l),i(t),i(a),i(n),i(I),i(B)),H(u),H(w)}}}function Zt(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function yt(x){let e,o="Appeler la méthode du parent : super",l,t,$='On peut appeler la méthode de la classe mère avec <code class="text-important">super</code>.',a,n,m,s,c="Super permet d'accéder au comportement du parent. Utile quand on veut étendre le comportement plutôt que le remplacer complètement.",b;return n=new ie({props:{lines:"7-11",$$slots:{default:[Zt]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.innerHTML=$,a=v(),S(n.$$.fragment),m=v(),s=_("aside"),s.textContent=c,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-qjr5g"&&(e.textContent=o),l=d(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-v8yuqg"&&(t.innerHTML=$),a=d(u),E(n.$$.fragment,u),m=d(u),s=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-o07epn"&&(s.textContent=c),this.h()},h(){h(s,"class","notes")},m(u,p){r(u,e,p),r(u,l,p),r(u,t,p),r(u,a,p),T(n,u,p),r(u,m,p),r(u,s,p),b=!0},p(u,p){const q={};p&1&&(q.$$scope={dirty:p,ctx:u}),n.$set(q)},i(u){b||(A(n.$$.fragment,u),b=!0)},o(u){j(n.$$.fragment,u),b=!1},d(u){u&&(i(e),i(l),i(t),i(a),i(m),i(s)),H(n,u)}}}function es(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function ts(x){let e,o="Le constructeur et super()",l,t,$="Le constructeur de la classe fille doit appeler celui de la classe mère.",a,n,m,s,c="<code>super()</code> doit être la <b>première instruction</b> du constructeur !",b,u,p=`C'est obligatoire. Le parent doit être construit avant l'enfant.\r
			Si vous oubliez super(), Java appelle super() sans argument par défaut.`,q;return n=new ie({props:{lines:"1-6|8-13",$$slots:{default:[es]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.textContent=$,a=v(),S(n.$$.fragment),m=v(),s=_("p"),s.innerHTML=c,b=v(),u=_("aside"),u.textContent=p,this.h()},l(f){e=C(f,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-b6mdxj"&&(e.textContent=o),l=d(f),t=C(f,"P",{"data-svelte-h":!0}),g(t)!=="svelte-kr896n"&&(t.textContent=$),a=d(f),E(n.$$.fragment,f),m=d(f),s=C(f,"P",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-18u9zg8"&&(s.innerHTML=c),b=d(f),u=C(f,"ASIDE",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-18qho2n"&&(u.textContent=p),this.h()},h(){h(s,"class","fragment text-accent-200"),h(u,"class","notes")},m(f,L){r(f,e,L),r(f,l,L),r(f,t,L),r(f,a,L),T(n,f,L),r(f,m,L),r(f,s,L),r(f,b,L),r(f,u,L),q=!0},p(f,L){const M={};L&1&&(M.$$scope={dirty:L,ctx:f}),n.$set(M)},i(f){q||(A(n.$$.fragment,f),q=!0)},o(f){j(n.$$.fragment,f),q=!1},d(f){f&&(i(e),i(l),i(t),i(a),i(m),i(s),i(b),i(u)),H(n,f)}}}function ss(x){let e,o="Les classes abstraites",l,t,$="Quand on ne peut pas tout définir...",a,n,m=`Maintenant on passe à un concept plus avancé : l'abstraction.\r
			Parfois, une classe est trop générale pour être instanciée. C'est là qu'intervient abstract.`;return{c(){e=_("h2"),e.textContent=o,l=v(),t=_("p"),t.textContent=$,a=v(),n=_("aside"),n.textContent=m,this.h()},l(s){e=C(s,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-y699sq"&&(e.textContent=o),l=d(s),t=C(s,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1vlu38n"&&(t.textContent=$),a=d(s),n=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1nw4dvg"&&(n.textContent=m),this.h()},h(){h(e,"class","text-5xl"),h(t,"class","text-2xl text-gray-400"),h(n,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function ls(x){let e=`
abstract class Animal {
    abstract void crier();  // Pas d'implémentation !
}

// Animal a = new Animal();  // ❌ Erreur de compilation !
Chien c = new Chien();       // ✅ OK
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function ns(x){let e,o="Qu'est-ce qu'une classe abstraite ?",l,t,$='Une classe abstraite est une classe qui <span class="text-important">ne peut pas être instanciée</span>.',a,n,m="Elle est destinée à être héritée par d'autres classes.",s,c,b,u,p,q="{}",f,L,M;return c=new ie({props:{class:"fragment",$$slots:{default:[ls]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.innerHTML=$,a=v(),n=_("p"),n.textContent=m,s=v(),S(c.$$.fragment),b=v(),u=_("aside"),p=y(`Pensez-y comme un moule incomplet. On ne peut pas utiliser un moule incomplet pour fabriquer quelque chose.\r
			Mais les classes filles complètent le moule et deviennent utilisables.\r
			Une méthode abstraite n'a pas de corps `),f=y(q),L=y("  - juste une signature suivie de ;"),this.h()},l(w){e=C(w,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-ywas56"&&(e.textContent=o),l=d(w),t=C(w,"P",{"data-svelte-h":!0}),g(t)!=="svelte-uh1j94"&&(t.innerHTML=$),a=d(w),n=C(w,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1e5hthq"&&(n.textContent=m),s=d(w),E(c.$$.fragment,w),b=d(w),u=C(w,"ASIDE",{class:!0});var I=ue(u);p=Z(I,`Pensez-y comme un moule incomplet. On ne peut pas utiliser un moule incomplet pour fabriquer quelque chose.\r
			Mais les classes filles complètent le moule et deviennent utilisables.\r
			Une méthode abstraite n'a pas de corps `),f=Z(I,q),L=Z(I,"  - juste une signature suivie de ;"),I.forEach(i),this.h()},h(){h(n,"class","fragment"),h(u,"class","notes")},m(w,I){r(w,e,I),r(w,l,I),r(w,t,I),r(w,a,I),r(w,n,I),r(w,s,I),T(c,w,I),r(w,b,I),r(w,u,I),ee(u,p),ee(u,f),ee(u,L),M=!0},p(w,I){const B={};I&1&&(B.$$scope={dirty:I,ctx:w}),c.$set(B)},i(w){M||(A(c.$$.fragment,w),M=!0)},o(w){j(c.$$.fragment,w),M=!1},d(w){w&&(i(e),i(l),i(t),i(a),i(n),i(s),i(b),i(u)),H(c,w)}}}function is(x){let e,o="Pourquoi utiliser des classes abstraites ?",l,t,$='<li class="fragment">Pour définir un <b>contrat</b> que les classes filles doivent respecter</li> <li class="fragment">Pour <b>forcer</b> les classes filles à implémenter certaines méthodes</li> <li class="fragment">Parce qu&#39;il n&#39;a parfois <b>aucun sens</b> d&#39;instancier une classe</li>',a,n,m=`🤔 Comment calculer la surface d'une "Forme" générique ? C'est impossible !`,s,c,b=`C'est une question de sémantique. Une "Forme" c'est quoi ? Un cercle ? Un carré ? On ne sait pas.\r
			Donc on ne peut pas calculer sa surface. Mais on SAIT que toute forme a une surface.\r
			La classe abstraite dit : "Je ne sais pas comment, mais mes enfants sauront."`;return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("ul"),t.innerHTML=$,a=v(),n=_("p"),n.textContent=m,s=v(),c=_("aside"),c.textContent=b,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1fw1imw"&&(e.textContent=o),l=d(u),t=C(u,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-1f0ebwg"&&(t.innerHTML=$),a=d(u),n=C(u,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-9bhmml"&&(n.textContent=m),s=d(u),c=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-1fqfiay"&&(c.textContent=b),this.h()},h(){h(n,"class","fragment mt-8 text-accent-200"),h(c,"class","notes")},m(u,p){r(u,e,p),r(u,l,p),r(u,t,p),r(u,a,p),r(u,n,p),r(u,s,p),r(u,c,p)},p:N,d(u){u&&(i(e),i(l),i(t),i(a),i(n),i(s),i(c))}}}function as(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function rs(x){let e,o="Exemple : les formes géométriques",l,t,$,a,n=`Forme est abstraite car on ne sait pas calculer la surface d'une forme générique.\r
			Mais on sait que toute forme DOIT pouvoir calculer sa surface.`,m;return t=new je({props:{$$slots:{default:[as]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),S(t.$$.fragment),$=v(),a=_("aside"),a.textContent=n,this.h()},l(s){e=C(s,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1l1b4vq"&&(e.textContent=o),l=d(s),E(t.$$.fragment,s),$=d(s),a=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(a)!=="svelte-19i401s"&&(a.textContent=n),this.h()},h(){h(a,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),T(t,s,c),r(s,$,c),r(s,a,c),m=!0},p(s,c){const b={};c&1&&(b.$$scope={dirty:c,ctx:s}),t.$set(b)},i(s){m||(A(t.$$.fragment,s),m=!0)},o(s){j(t.$$.fragment,s),m=!1},d(s){s&&(i(e),i(l),i($),i(a)),H(t,s)}}}function us(x){let e=`
abstract class Forme {
    abstract double calculerSurface();  // Pas de corps !
}
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function os(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function fs(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function cs(x){let e,o="En code Java",l,t,$,a,n,m,s,c;return t=new ie({props:{$$slots:{default:[us]},$$scope:{ctx:x}}}),n=new ie({props:{class:"language-java",$$slots:{default:[os]},$$scope:{ctx:x}}}),s=new ie({props:{class:"language-java",$$slots:{default:[fs]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),S(t.$$.fragment),$=v(),a=_("div"),S(n.$$.fragment),m=v(),S(s.$$.fragment),this.h()},l(b){e=C(b,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1w10xpg"&&(e.textContent=o),l=d(b),E(t.$$.fragment,b),$=d(b),a=C(b,"DIV",{class:!0});var u=ue(a);E(n.$$.fragment,u),m=d(u),E(s.$$.fragment,u),u.forEach(i),this.h()},h(){h(a,"class","flex flex-row gap-4 mt-4")},m(b,u){r(b,e,u),r(b,l,u),T(t,b,u),r(b,$,u),r(b,a,u),T(n,a,null),ee(a,m),T(s,a,null),c=!0},p(b,u){const p={};u&1&&(p.$$scope={dirty:u,ctx:b}),t.$set(p);const q={};u&1&&(q.$$scope={dirty:u,ctx:b}),n.$set(q);const f={};u&1&&(f.$$scope={dirty:u,ctx:b}),s.$set(f)},i(b){c||(A(t.$$.fragment,b),A(n.$$.fragment,b),A(s.$$.fragment,b),c=!0)},o(b){j(t.$$.fragment,b),j(n.$$.fragment,b),j(s.$$.fragment,b),c=!1},d(b){b&&(i(e),i(l),i($),i(a)),H(t,b),H(n),H(s)}}}function $s(x){let e,o="Ce qu'il faut retenir",l,t,$='La classe <code class="text-important">Forme</code> est abstraite car on ne peut pas calculer la surface d&#39;une forme générique.',a,n,m="Mais <b>toutes les formes</b> doivent pouvoir calculer leur surface → c&#39;est le contrat.",s,c,b="❌ <code>new Forme()</code> → Erreur !",u,p,q="✅ <code>new Cercle(5.0)</code> → OK";return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.innerHTML=$,a=v(),n=_("p"),n.innerHTML=m,s=v(),c=_("p"),c.innerHTML=b,u=v(),p=_("p"),p.innerHTML=q,this.h()},l(f){e=C(f,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1c3ns5x"&&(e.textContent=o),l=d(f),t=C(f,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1aglhjf"&&(t.innerHTML=$),a=d(f),n=C(f,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1yjmjvc"&&(n.innerHTML=m),s=d(f),c=C(f,"P",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-1b5sfkh"&&(c.innerHTML=b),u=d(f),p=C(f,"P",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-iu5ucw"&&(p.innerHTML=q),this.h()},h(){h(n,"class","fragment"),h(c,"class","fragment mt-8 text-red-400"),h(p,"class","fragment text-green-400")},m(f,L){r(f,e,L),r(f,l,L),r(f,t,L),r(f,a,L),r(f,n,L),r(f,s,L),r(f,c,L),r(f,u,L),r(f,p,L)},p:N,d(f){f&&(i(e),i(l),i(t),i(a),i(n),i(s),i(c),i(u),i(p))}}}function ps(x){let e,o="⚠️ Quand NE PAS hériter",l,t,$="L'erreur classique du débutant",a,n,m=`Attention, l'héritage est puissant mais dangereux si mal utilisé.\r
			C'est l'une des erreurs les plus fréquentes chez les développeurs juniors.\r
			Même les seniors tombent dans le piège parfois !`;return{c(){e=_("h2"),e.textContent=o,l=v(),t=_("p"),t.textContent=$,a=v(),n=_("aside"),n.textContent=m,this.h()},l(s){e=C(s,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1drmq8k"&&(e.textContent=o),l=d(s),t=C(s,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-3u5bob"&&(t.textContent=$),a=d(s),n=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-d4fqpf"&&(n.textContent=m),this.h()},h(){h(e,"class","text-5xl"),h(t,"class","text-2xl text-gray-400"),h(n,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function ms(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function ds(x){let e,o="Le piège de l'héritage abusif",l,t,$="L'héritage n'est pas toujours la bonne solution !",a,n,m,s,c="Une Pile n'est PAS une ArrayList, elle UTILISE une ArrayList !",b,u,p=`C'est le fameux exemple de Joshua Bloch dans "Effective Java". Il déconseille d'hériter des collections.\r
			Le problème : on expose des méthodes qui n'ont pas de sens pour une Pile (add, remove au milieu...).\r
			C'est une violation du principe de substitution de Liskov.`,q;return n=new ie({props:{class:"language-java",$$slots:{default:[ms]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.textContent=$,a=v(),S(n.$$.fragment),m=v(),s=_("p"),s.textContent=c,b=v(),u=_("aside"),u.textContent=p,this.h()},l(f){e=C(f,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1hvzkw5"&&(e.textContent=o),l=d(f),t=C(f,"P",{"data-svelte-h":!0}),g(t)!=="svelte-dgmjh5"&&(t.textContent=$),a=d(f),E(n.$$.fragment,f),m=d(f),s=C(f,"P",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-1pmyb7u"&&(s.textContent=c),b=d(f),u=C(f,"ASIDE",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-2qwtt4"&&(u.textContent=p),this.h()},h(){h(s,"class","fragment text-red-400 font-bold"),h(u,"class","notes")},m(f,L){r(f,e,L),r(f,l,L),r(f,t,L),r(f,a,L),T(n,f,L),r(f,m,L),r(f,s,L),r(f,b,L),r(f,u,L),q=!0},p(f,L){const M={};L&1&&(M.$$scope={dirty:L,ctx:f}),n.$set(M)},i(f){q||(A(n.$$.fragment,f),q=!0)},o(f){j(n.$$.fragment,f),q=!1},d(f){f&&(i(e),i(l),i(t),i(a),i(m),i(s),i(b),i(u)),H(n,f)}}}function vs(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function xs(x){let e,o="La bonne approche : composition",l,t,$,a,n="On expose uniquement ce qui a du sens pour une Pile.",m,s,c=`Voilà la solution propre. La Pile "a une" ArrayList, elle n'"est pas" une ArrayList.\r
			L'utilisateur ne peut faire que empiler et depiler. Impossible de corrompre l'état interne.\r
			C'est le principe d'encapsulation appliqué à l'architecture.`,b;return t=new ie({props:{class:"language-java",$$slots:{default:[vs]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),S(t.$$.fragment),$=v(),a=_("p"),a.textContent=n,m=v(),s=_("aside"),s.textContent=c,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-7t2ot"&&(e.textContent=o),l=d(u),E(t.$$.fragment,u),$=d(u),a=C(u,"P",{class:!0,"data-svelte-h":!0}),g(a)!=="svelte-14pjpsh"&&(a.textContent=n),m=d(u),s=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-czhf2j"&&(s.textContent=c),this.h()},h(){h(a,"class","fragment text-green-400 font-bold"),h(s,"class","notes")},m(u,p){r(u,e,p),r(u,l,p),T(t,u,p),r(u,$,p),r(u,a,p),r(u,m,p),r(u,s,p),b=!0},p(u,p){const q={};p&1&&(q.$$scope={dirty:p,ctx:u}),t.$set(q)},i(u){b||(A(t.$$.fragment,u),b=!0)},o(u){j(t.$$.fragment,u),b=!1},d(u){u&&(i(e),i(l),i($),i(a),i(m),i(s)),H(t,u)}}}function Cs(x){let e,o="Comment choisir ?",l,t,$='<p class="fragment">🤔 Posez-vous la question :</p> <p class="fragment mt-4 text-3xl">&quot;Est-ce qu&#39;un <b>X</b> <span class="text-important">EST UN</span> <b>Y</b> ?&quot;</p> <div class="fragment mt-8"><p class="text-green-400">✅ Un Chien <b>est un</b> Animal → Héritage</p> <p class="text-green-400">✅ Un Cercle <b>est une</b> Forme → Héritage</p> <p class="text-red-400">❌ Une Pile <b>est une</b> ArrayList → NON !</p> <p class="text-blue-400">✅ Une Pile <b>a une</b> ArrayList → Composition</p></div>',a,n,m=`C'est la règle d'or. Si la phrase "X est un Y" sonne faux, n'héritez pas.\r
			On verra la composition dans le prochain chapitre.`;return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("div"),t.innerHTML=$,a=v(),n=_("aside"),n.textContent=m,this.h()},l(s){e=C(s,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1sib837"&&(e.textContent=o),l=d(s),t=C(s,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-b6u81r"&&(t.innerHTML=$),a=d(s),n=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1dryqu3"&&(n.textContent=m),this.h()},h(){h(t,"class","text-2xl mt-8"),h(n,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function _s(x){let e,o="Récapitulatif : les mots-clés",l,t,$='<tr><td class="p-4"><code class="text-important">extends</code></td> <td class="p-4">Hériter d&#39;une classe</td></tr> <tr><td class="p-4"><code class="text-important">super</code></td> <td class="p-4">Accéder à la classe mère</td></tr> <tr><td class="p-4"><code class="text-important">super()</code></td> <td class="p-4">Appeler le constructeur parent</td></tr> <tr><td class="p-4"><code class="text-important">@Override</code></td> <td class="p-4">Redéfinir une méthode (annotation)</td></tr> <tr><td class="p-4"><code class="text-important">abstract</code></td> <td class="p-4">Classe/méthode non instanciable</td></tr>',a,n,m=`Ce sont les 5 mots-clés essentiels de l'héritage en Java. Apprenez-les par cœur !\r
			Extends pour hériter, super pour accéder au parent, @Override pour redéfinir proprement.\r
			Avec ça, vous couvrez 95% des cas d'utilisation de l'héritage.`;return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("table"),t.innerHTML=$,a=v(),n=_("aside"),n.textContent=m,this.h()},l(s){e=C(s,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-18myzwu"&&(e.textContent=o),l=d(s),t=C(s,"TABLE",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1mjxyt9"&&(t.innerHTML=$),a=d(s),n=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-ij1jd2"&&(n.textContent=m),this.h()},h(){h(t,"class","text-xl"),h(n,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function hs(x){let e,o="L'héritage",l,t,$,a,n,m,s,c,b,u,p,q,f,L,M,w,I,B,Q,K,D,F,ne,O,le,ae,ce,re,pe,oe,$e,fe,me,U,te,R,se,de,_e,V,W,ve,he,z,X;return t=new J({props:{$$slots:{default:[Vt]},$$scope:{ctx:x}}}),a=new J({props:{$$slots:{default:[Ot]},$$scope:{ctx:x}}}),m=new J({props:{$$slots:{default:[Ut]},$$scope:{ctx:x}}}),c=new J({props:{$$slots:{default:[Nt]},$$scope:{ctx:x}}}),u=new J({props:{$$slots:{default:[Bt]},$$scope:{ctx:x}}}),q=new J({props:{$$slots:{default:[Ft]},$$scope:{ctx:x}}}),L=new J({props:{$$slots:{default:[Gt]},$$scope:{ctx:x}}}),w=new J({props:{$$slots:{default:[Kt]},$$scope:{ctx:x}}}),B=new J({props:{$$slots:{default:[Wt]},$$scope:{ctx:x}}}),K=new J({props:{$$slots:{default:[yt]},$$scope:{ctx:x}}}),F=new J({props:{$$slots:{default:[ts]},$$scope:{ctx:x}}}),O=new J({props:{data_background_color:"#1a1a2e",$$slots:{default:[ss]},$$scope:{ctx:x}}}),ae=new J({props:{$$slots:{default:[ns]},$$scope:{ctx:x}}}),re=new J({props:{$$slots:{default:[is]},$$scope:{ctx:x}}}),oe=new J({props:{$$slots:{default:[rs]},$$scope:{ctx:x}}}),fe=new J({props:{$$slots:{default:[cs]},$$scope:{ctx:x}}}),U=new J({props:{$$slots:{default:[$s]},$$scope:{ctx:x}}}),R=new J({props:{data_background_color:"#3d1a1a",$$slots:{default:[ps]},$$scope:{ctx:x}}}),de=new J({props:{$$slots:{default:[ds]},$$scope:{ctx:x}}}),V=new J({props:{$$slots:{default:[xs]},$$scope:{ctx:x}}}),ve=new J({props:{$$slots:{default:[Cs]},$$scope:{ctx:x}}}),z=new J({props:{$$slots:{default:[_s]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),S(t.$$.fragment),$=v(),S(a.$$.fragment),n=v(),S(m.$$.fragment),s=v(),S(c.$$.fragment),b=v(),S(u.$$.fragment),p=v(),S(q.$$.fragment),f=v(),S(L.$$.fragment),M=v(),S(w.$$.fragment),I=v(),S(B.$$.fragment),Q=v(),S(K.$$.fragment),D=v(),S(F.$$.fragment),ne=v(),S(O.$$.fragment),le=v(),S(ae.$$.fragment),ce=v(),S(re.$$.fragment),pe=v(),S(oe.$$.fragment),$e=v(),S(fe.$$.fragment),me=v(),S(U.$$.fragment),te=v(),S(R.$$.fragment),se=v(),S(de.$$.fragment),_e=v(),S(V.$$.fragment),W=v(),S(ve.$$.fragment),he=v(),S(z.$$.fragment)},l(k){e=C(k,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-taqcdc"&&(e.textContent=o),l=d(k),E(t.$$.fragment,k),$=d(k),E(a.$$.fragment,k),n=d(k),E(m.$$.fragment,k),s=d(k),E(c.$$.fragment,k),b=d(k),E(u.$$.fragment,k),p=d(k),E(q.$$.fragment,k),f=d(k),E(L.$$.fragment,k),M=d(k),E(w.$$.fragment,k),I=d(k),E(B.$$.fragment,k),Q=d(k),E(K.$$.fragment,k),D=d(k),E(F.$$.fragment,k),ne=d(k),E(O.$$.fragment,k),le=d(k),E(ae.$$.fragment,k),ce=d(k),E(re.$$.fragment,k),pe=d(k),E(oe.$$.fragment,k),$e=d(k),E(fe.$$.fragment,k),me=d(k),E(U.$$.fragment,k),te=d(k),E(R.$$.fragment,k),se=d(k),E(de.$$.fragment,k),_e=d(k),E(V.$$.fragment,k),W=d(k),E(ve.$$.fragment,k),he=d(k),E(z.$$.fragment,k)},m(k,Y){r(k,e,Y),r(k,l,Y),T(t,k,Y),r(k,$,Y),T(a,k,Y),r(k,n,Y),T(m,k,Y),r(k,s,Y),T(c,k,Y),r(k,b,Y),T(u,k,Y),r(k,p,Y),T(q,k,Y),r(k,f,Y),T(L,k,Y),r(k,M,Y),T(w,k,Y),r(k,I,Y),T(B,k,Y),r(k,Q,Y),T(K,k,Y),r(k,D,Y),T(F,k,Y),r(k,ne,Y),T(O,k,Y),r(k,le,Y),T(ae,k,Y),r(k,ce,Y),T(re,k,Y),r(k,pe,Y),T(oe,k,Y),r(k,$e,Y),T(fe,k,Y),r(k,me,Y),T(U,k,Y),r(k,te,Y),T(R,k,Y),r(k,se,Y),T(de,k,Y),r(k,_e,Y),T(V,k,Y),r(k,W,Y),T(ve,k,Y),r(k,he,Y),T(z,k,Y),X=!0},p(k,Y){const qe={};Y&1&&(qe.$$scope={dirty:Y,ctx:k}),t.$set(qe);const ge={};Y&1&&(ge.$$scope={dirty:Y,ctx:k}),a.$set(ge);const we={};Y&1&&(we.$$scope={dirty:Y,ctx:k}),m.$set(we);const be={};Y&1&&(be.$$scope={dirty:Y,ctx:k}),c.$set(be);const Ae={};Y&1&&(Ae.$$scope={dirty:Y,ctx:k}),u.$set(Ae);const Le={};Y&1&&(Le.$$scope={dirty:Y,ctx:k}),q.$set(Le);const Te={};Y&1&&(Te.$$scope={dirty:Y,ctx:k}),L.$set(Te);const Pe={};Y&1&&(Pe.$$scope={dirty:Y,ctx:k}),w.$set(Pe);const Ie={};Y&1&&(Ie.$$scope={dirty:Y,ctx:k}),B.$set(Ie);const Me={};Y&1&&(Me.$$scope={dirty:Y,ctx:k}),K.$set(Me);const ke={};Y&1&&(ke.$$scope={dirty:Y,ctx:k}),F.$set(ke);const He={};Y&1&&(He.$$scope={dirty:Y,ctx:k}),O.$set(He);const ze={};Y&1&&(ze.$$scope={dirty:Y,ctx:k}),ae.$set(ze);const Ee={};Y&1&&(Ee.$$scope={dirty:Y,ctx:k}),re.$set(Ee);const Je={};Y&1&&(Je.$$scope={dirty:Y,ctx:k}),oe.$set(Je);const Se={};Y&1&&(Se.$$scope={dirty:Y,ctx:k}),fe.$set(Se);const Be={};Y&1&&(Be.$$scope={dirty:Y,ctx:k}),U.$set(Be);const De={};Y&1&&(De.$$scope={dirty:Y,ctx:k}),R.$set(De);const Fe={};Y&1&&(Fe.$$scope={dirty:Y,ctx:k}),de.$set(Fe);const Re={};Y&1&&(Re.$$scope={dirty:Y,ctx:k}),V.$set(Re);const Qe={};Y&1&&(Qe.$$scope={dirty:Y,ctx:k}),ve.$set(Qe);const Ne={};Y&1&&(Ne.$$scope={dirty:Y,ctx:k}),z.$set(Ne)},i(k){X||(A(t.$$.fragment,k),A(a.$$.fragment,k),A(m.$$.fragment,k),A(c.$$.fragment,k),A(u.$$.fragment,k),A(q.$$.fragment,k),A(L.$$.fragment,k),A(w.$$.fragment,k),A(B.$$.fragment,k),A(K.$$.fragment,k),A(F.$$.fragment,k),A(O.$$.fragment,k),A(ae.$$.fragment,k),A(re.$$.fragment,k),A(oe.$$.fragment,k),A(fe.$$.fragment,k),A(U.$$.fragment,k),A(R.$$.fragment,k),A(de.$$.fragment,k),A(V.$$.fragment,k),A(ve.$$.fragment,k),A(z.$$.fragment,k),X=!0)},o(k){j(t.$$.fragment,k),j(a.$$.fragment,k),j(m.$$.fragment,k),j(c.$$.fragment,k),j(u.$$.fragment,k),j(q.$$.fragment,k),j(L.$$.fragment,k),j(w.$$.fragment,k),j(B.$$.fragment,k),j(K.$$.fragment,k),j(F.$$.fragment,k),j(O.$$.fragment,k),j(ae.$$.fragment,k),j(re.$$.fragment,k),j(oe.$$.fragment,k),j(fe.$$.fragment,k),j(U.$$.fragment,k),j(R.$$.fragment,k),j(de.$$.fragment,k),j(V.$$.fragment,k),j(ve.$$.fragment,k),j(z.$$.fragment,k),X=!1},d(k){k&&(i(e),i(l),i($),i(n),i(s),i(b),i(p),i(f),i(M),i(I),i(Q),i(D),i(ne),i(le),i(ce),i(pe),i($e),i(me),i(te),i(se),i(_e),i(W),i(he)),H(t,k),H(a,k),H(m,k),H(c,k),H(u,k),H(q,k),H(L,k),H(w,k),H(B,k),H(K,k),H(F,k),H(O,k),H(ae,k),H(re,k),H(oe,k),H(fe,k),H(U,k),H(R,k),H(de,k),H(V,k),H(ve,k),H(z,k)}}}function gs(x){let e,o;return e=new J({props:{$$slots:{default:[hs]},$$scope:{ctx:x}}}),{c(){S(e.$$.fragment)},l(l){E(e.$$.fragment,l)},m(l,t){T(e,l,t),o=!0},p(l,[t]){const $={};t&1&&($.$$scope={dirty:t,ctx:l}),e.$set($)},i(l){o||(A(e.$$.fragment,l),o=!0)},o(l){j(e.$$.fragment,l),o=!1},d(l){H(e,l)}}}class bs extends Oe{constructor(e){super(),Ue(this,e,null,gs,Ve,{})}}function Ls(x){let e,o,l,t,$,a,n,m,s,c,b,u,p,q,f,L,M,w,I,B;return{c(){e=Ce("svg"),o=Ce("g"),l=Ce("title"),t=y("Layer 1"),$=Ce("g"),a=Ce("rect"),n=Ce("text"),m=y("Données"),s=Ce("text"),c=y("FonctionA"),b=Ce("text"),u=y("FonctionB"),p=Ce("text"),q=y("FonctionC"),f=Ce("text"),L=y("FonctionD"),M=Ce("line"),w=Ce("line"),I=Ce("line"),B=Ce("line"),this.h()},l(Q){e=xe(Q,"svg",{width:!0,height:!0,xmlns:!0});var K=ue(e);o=xe(K,"g",{});var D=ue(o);l=xe(D,"title",{});var F=ue(l);t=Z(F,"Layer 1"),F.forEach(i),$=xe(D,"g",{id:!0});var ne=ue($);a=xe(ne,"rect",{fill:!0,stroke:!0,x:!0,y:!0,width:!0,height:!0,id:!0}),ue(a).forEach(i),n=xe(ne,"text",{fill:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var O=ue(n);m=Z(O,"Données"),O.forEach(i),s=xe(ne,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var le=ue(s);c=Z(le,"FonctionA"),le.forEach(i),b=xe(ne,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var ae=ue(b);u=Z(ae,"FonctionB"),ae.forEach(i),p=xe(ne,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var ce=ue(p);q=Z(ce,"FonctionC"),ce.forEach(i),f=xe(ne,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var re=ue(f);L=Z(re,"FonctionD"),re.forEach(i),M=xe(ne,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),ue(M).forEach(i),w=xe(ne,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),ue(w).forEach(i),I=xe(ne,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),ue(I).forEach(i),B=xe(ne,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),ue(B).forEach(i),ne.forEach(i),D.forEach(i),K.forEach(i),this.h()},h(){h(a,"fill","#FFDFB8"),h(a,"stroke","none"),h(a,"x","170"),h(a,"y","0"),h(a,"width","150"),h(a,"height","300"),h(a,"id","svg_1"),h(n,"fill","black"),h(n,"stroke","black"),h(n,"x","205"),h(n,"y","150"),h(n,"id","svg_2"),h(n,"font-size","24"),h(n,"font-family","Noto Sans JP"),h(n,"text-anchor","start"),h(n,"xml:space","preserve"),h(s,"class","fill-current"),h(s,"stroke","none"),h(s,"x","0"),h(s,"y","50"),h(s,"id","svg_3"),h(s,"font-size","24"),h(s,"font-family","Noto Sans JP"),h(s,"text-anchor","start"),h(s,"xml:space","preserve"),h(b,"class","fill-current"),h(b,"stroke","none"),h(b,"x","0"),h(b,"y","109.99901"),h(b,"id","svg_4"),h(b,"font-size","24"),h(b,"font-family","Noto Sans JP"),h(b,"text-anchor","start"),h(b,"xml:space","preserve"),h(p,"class","fill-current"),h(p,"stroke","none"),h(p,"x","0"),h(p,"y","170"),h(p,"id","svg_5"),h(p,"font-size","24"),h(p,"font-family","Noto Sans JP"),h(p,"text-anchor","start"),h(p,"xml:space","preserve"),h(f,"class","fill-current"),h(f,"stroke","none"),h(f,"x","0"),h(f,"y","230"),h(f,"id","svg_6"),h(f,"font-size","24"),h(f,"font-family","Noto Sans JP"),h(f,"text-anchor","start"),h(f,"xml:space","preserve"),h(M,"stroke-width","5"),h(M,"class","stroke-current"),h(M,"x1","113.53031"),h(M,"y1","222.00012"),h(M,"x2","158.37456"),h(M,"y2","222.00012"),h(M,"id","svg_7"),h(w,"stroke-width","5"),h(w,"class","stroke-current"),h(w,"x1","113.53031"),h(w,"y1","162.00012"),h(w,"x2","158.37456"),h(w,"y2","162.00012"),h(w,"id","svg_8"),h(I,"stroke-width","5"),h(I,"class","stroke-current"),h(I,"x1","113.53031"),h(I,"y1","101.99914"),h(I,"x2","158.37456"),h(I,"y2","101.99914"),h(I,"id","svg_9"),h(B,"stroke-width","5"),h(B,"class","stroke-current"),h(B,"x1","113.53031"),h(B,"y1","42.00012"),h(B,"x2","158.37455"),h(B,"y2","42.00012"),h(B,"id","svg_10"),h($,"id","svg_11"),h(e,"width","320"),h(e,"height","300"),h(e,"xmlns","http://www.w3.org/2000/svg")},m(Q,K){r(Q,e,K),ee(e,o),ee(o,l),ee(l,t),ee(o,$),ee($,a),ee($,n),ee(n,m),ee($,s),ee(s,c),ee($,b),ee(b,u),ee($,p),ee(p,q),ee($,f),ee(f,L),ee($,M),ee($,w),ee($,I),ee($,B)},p:N,i:N,o:N,d(Q){Q&&i(e)}}}class qs extends Oe{constructor(e){super(),Ue(this,e,null,Ls,Ve,{})}}function ws(x){let e,o,l,t,$,a,n,m,s,c,b,u,p,q,f,L,M,w,I,B,Q,K,D,F;return{c(){e=Ce("svg"),o=Ce("g"),l=Ce("title"),t=y("Layer 1"),$=Ce("g"),a=Ce("path"),n=Ce("text"),m=y("Données"),s=Ce("text"),c=y("MéthodeA"),b=Ce("text"),u=y("MéthodeB"),p=Ce("line"),q=Ce("line"),f=Ce("g"),L=Ce("path"),M=Ce("text"),w=y("Données"),I=Ce("text"),B=y("MéthodeA"),Q=Ce("text"),K=y("MéthodeB"),D=Ce("line"),F=Ce("line"),this.h()},l(ne){e=xe(ne,"svg",{width:!0,height:!0,xmlns:!0});var O=ue(e);o=xe(O,"g",{});var le=ue(o);l=xe(le,"title",{});var ae=ue(l);t=Z(ae,"Layer 1"),ae.forEach(i),$=xe(le,"g",{id:!0});var ce=ue($);a=xe(ce,"path",{id:!0,d:!0,opacity:!0,stroke:!0,fill:!0}),ue(a).forEach(i),n=xe(ce,"text",{stroke:!0,fill:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var re=ue(n);m=Z(re,"Données"),re.forEach(i),s=xe(ce,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var pe=ue(s);c=Z(pe,"MéthodeA"),pe.forEach(i),b=xe(ce,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var oe=ue(b);u=Z(oe,"MéthodeB"),oe.forEach(i),p=xe(ce,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),ue(p).forEach(i),q=xe(ce,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),ue(q).forEach(i),ce.forEach(i),f=xe(le,"g",{id:!0});var $e=ue(f);L=xe($e,"path",{id:!0,d:!0,opacity:!0,stroke:!0,fill:!0}),ue(L).forEach(i),M=xe($e,"text",{stroke:!0,fill:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var fe=ue(M);w=Z(fe,"Données"),fe.forEach(i),I=xe($e,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var me=ue(I);B=Z(me,"MéthodeA"),me.forEach(i),Q=xe($e,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var U=ue(Q);K=Z(U,"MéthodeB"),U.forEach(i),D=xe($e,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),ue(D).forEach(i),F=xe($e,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),ue(F).forEach(i),$e.forEach(i),le.forEach(i),O.forEach(i),this.h()},h(){h(a,"id","svg_1"),h(a,"d","m170,2.75867l150,0l0,116l-150,0l0,-116z"),h(a,"opacity","undefined"),h(a,"stroke","none"),h(a,"fill","#FFDFB8"),h(n,"stroke","black"),h(n,"fill","black"),h(n,"x","208"),h(n,"y","70"),h(n,"id","svg_2"),h(n,"font-size","24"),h(n,"font-family","Noto Sans JP"),h(n,"text-anchor","start"),h(n,"xml:space","preserve"),h(s,"class","fill-current"),h(s,"stroke","none"),h(s,"x","0"),h(s,"y","40"),h(s,"id","svg_3"),h(s,"font-size","24"),h(s,"font-family","Noto Sans JP"),h(s,"text-anchor","start"),h(s,"xml:space","preserve"),h(b,"class","fill-current"),h(b,"stroke","none"),h(b,"x","0"),h(b,"y","100"),h(b,"id","svg_4"),h(b,"font-size","24"),h(b,"font-family","Noto Sans JP"),h(b,"text-anchor","start"),h(b,"xml:space","preserve"),h(p,"stroke-width","5"),h(p,"class","stroke-current"),h(p,"x1","113.53031"),h(p,"y1","91.75781"),h(p,"x2","158.37456"),h(p,"y2","91.75781"),h(p,"id","svg_9"),h(q,"stroke-width","5"),h(q,"class","stroke-current"),h(q,"x1","113.53031"),h(q,"y1","31.75879"),h(q,"x2","158.37455"),h(q,"y2","31.75879"),h(q,"id","svg_10"),h($,"id","svg_12"),h(L,"id","svg_13"),h(L,"d","m170,182.07234l150,0l0,116l-150,0l0,-116z"),h(L,"opacity","undefined"),h(L,"stroke","none"),h(L,"fill","#FFDFB8"),h(M,"stroke","black"),h(M,"fill","black"),h(M,"x","208"),h(M,"y","250"),h(M,"id","svg_14"),h(M,"font-size","24"),h(M,"font-family","Noto Sans JP"),h(M,"text-anchor","start"),h(M,"xml:space","preserve"),h(I,"class","fill-current"),h(I,"stroke","none"),h(I,"x","0"),h(I,"y","220"),h(I,"id","svg_15"),h(I,"font-size","24"),h(I,"font-family","Noto Sans JP"),h(I,"text-anchor","start"),h(I,"xml:space","preserve"),h(Q,"class","fill-current"),h(Q,"stroke","none"),h(Q,"x","0"),h(Q,"y","280"),h(Q,"id","svg_16"),h(Q,"font-size","24"),h(Q,"font-family","Noto Sans JP"),h(Q,"text-anchor","start"),h(Q,"xml:space","preserve"),h(D,"stroke-width","5"),h(D,"class","stroke-current"),h(D,"x1","113.53031"),h(D,"y1","271.07148"),h(D,"x2","158.37456"),h(D,"y2","271.07148"),h(D,"id","svg_17"),h(F,"stroke-width","5"),h(F,"class","stroke-current"),h(F,"x1","113.53031"),h(F,"y1","211.07246"),h(F,"x2","158.37455"),h(F,"y2","211.07246"),h(F,"id","svg_18"),h(f,"id","svg_19"),h(e,"width","320"),h(e,"height","300"),h(e,"xmlns","http://www.w3.org/2000/svg")},m(ne,O){r(ne,e,O),ee(e,o),ee(o,l),ee(l,t),ee(o,$),ee($,a),ee($,n),ee(n,m),ee($,s),ee(s,c),ee($,b),ee(b,u),ee($,p),ee($,q),ee(o,f),ee(f,L),ee(f,M),ee(M,w),ee(f,I),ee(I,B),ee(f,Q),ee(Q,K),ee(f,D),ee(f,F)},p:N,i:N,o:N,d(ne){ne&&i(e)}}}class Ps extends Oe{constructor(e){super(),Ue(this,e,null,ws,Ve,{})}}function Ms(x){let e,o="Introduction";return{c(){e=_("h1"),e.textContent=o},l(l){e=C(l,"H1",{"data-svelte-h":!0}),g(e)!=="svelte-v1pk48"&&(e.textContent=o)},m(l,t){r(l,e,t)},p:N,d(l){l&&i(e)}}}function Hs(x){let e,o='La <span data-fragment-index="1" class="fragment highlight-red">Programmation</span> Orientée Objet',l,t,$="La programmation, c'est manipuler des données...",a,n,m="<i>Comment structurer ces données et les traitements associés ?</i>",s,c,b=`On commence par poser la question fondamentale. Peu importe le langage, peu importe le projet,
			on manipule toujours des données. La vraie question c'est : comment on organise tout ça ?`;return{c(){e=_("h2"),e.innerHTML=o,l=v(),t=_("p"),t.textContent=$,a=v(),n=_("p"),n.innerHTML=m,s=v(),c=_("aside"),c.textContent=b,this.h()},l(u){e=C(u,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-idwyvx"&&(e.innerHTML=o),l=d(u),t=C(u,"P",{"data-fragment-index":!0,class:!0,"data-svelte-h":!0}),g(t)!=="svelte-ccoak9"&&(t.textContent=$),a=d(u),n=C(u,"P",{"data-fragment-index":!0,class:!0,"data-svelte-h":!0}),g(n)!=="svelte-ja2tch"&&(n.innerHTML=m),s=d(u),c=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-16jpdmo"&&(c.textContent=b),this.h()},h(){h(t,"data-fragment-index","1"),h(t,"class","fragment"),h(n,"data-fragment-index","2"),h(n,"class","fragment"),h(c,"class","notes")},m(u,p){r(u,e,p),r(u,l,p),r(u,t,p),r(u,a,p),r(u,n,p),r(u,s,p),r(u,c,p)},p:N,d(u){u&&(i(e),i(l),i(t),i(a),i(n),i(s),i(c))}}}function js(x){let e,o="La POO en 3 mots",l,t,$='<div class="fragment flex flex-col items-center p-6 bg-accent-950 rounded-lg"><span class="text-6xl mb-4">📦</span> <span class="text-important font-bold">RANGER</span> <span class="text-xl mt-2 text-gray-400">Organiser le code</span></div> <div class="fragment flex flex-col items-center p-6 bg-accent-950 rounded-lg"><span class="text-6xl mb-4">🔒</span> <span class="text-important font-bold">PROTÉGER</span> <span class="text-xl mt-2 text-gray-400">Éviter les erreurs</span></div> <div class="fragment flex flex-col items-center p-6 bg-accent-950 rounded-lg"><span class="text-6xl mb-4">🌳</span> <span class="text-important font-bold">GÉNÉRALISER</span> <span class="text-xl mt-2 text-gray-400">Réutiliser le code</span></div>',a,n,m=`On va voir que la POO apporte 3 bénéfices majeurs, dans cet ordre précis. D'abord on range,
			ensuite on protège, et enfin on généralise. Ces 3 piliers sont la base de tout ce qu'on va
			voir dans ce module.`;return{c(){e=_("h2"),e.textContent=o,l=v(),t=_("div"),t.innerHTML=$,a=v(),n=_("aside"),n.textContent=m,this.h()},l(s){e=C(s,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-1nirx80"&&(e.textContent=o),l=d(s),t=C(s,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-19dln6f"&&(t.innerHTML=$),a=d(s),n=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-49jgnd"&&(n.textContent=m),this.h()},h(){h(t,"class","flex flex-row justify-around items-center text-3xl mt-10"),h(n,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function As(x){let e,o="📦 RANGER",l,t,$="Premier pilier de la POO",a,n,m="On commence par le premier pilier : ranger. C'est le plus intuitif.";return{c(){e=_("h2"),e.textContent=o,l=v(),t=_("p"),t.textContent=$,a=v(),n=_("aside"),n.textContent=m,this.h()},l(s){e=C(s,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-z32rqx"&&(e.textContent=o),l=d(s),t=C(s,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-kfijfp"&&(t.textContent=$),a=d(s),n=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1eorlzr"&&(n.textContent=m),this.h()},h(){h(e,"class","text-6xl"),h(t,"class","text-3xl text-gray-400"),h(n,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function Ts(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Es(x){let e,o='Le problème du code "en vrac"',l,t,$,a,n=`Regardez ce code. On a des variables partout, mélangées. Rien ne dit que nomClient va avec
			ageClient et emailClient. Quand le code grossit, c'est le chaos. On ne sait plus quelle
			variable va avec quelle autre.`,m;return t=new ie({props:{$$slots:{default:[Ts]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),S(t.$$.fragment),$=v(),a=_("aside"),a.textContent=n,this.h()},l(s){e=C(s,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1iow74n"&&(e.textContent=o),l=d(s),E(t.$$.fragment,s),$=d(s),a=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(a)!=="svelte-vygygc"&&(a.textContent=n),this.h()},h(){h(a,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),T(t,s,c),r(s,$,c),r(s,a,c),m=!0},p(s,c){const b={};c&1&&(b.$$scope={dirty:c,ctx:s}),t.$set(b)},i(s){m||(A(t.$$.fragment,s),m=!0)},o(s){j(t.$$.fragment,s),m=!1},d(s){s&&(i(e),i(l),i($),i(a)),H(t,s)}}}function Ss(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Ds(x){let e,o="La solution : regrouper dans des objets",l,t,$,a,n=`Avec la POO, on regroupe ce qui va ensemble. Un Client a un nom, un âge, un email. Un Produit
			a un nom, un prix, un stock. Chaque "boîte" contient ce qui lui appartient. C'est déjà plus
			clair, non ?`,m;return t=new ie({props:{lines:"1-5|7-11|13-16|18-20",$$slots:{default:[Ss]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),S(t.$$.fragment),$=v(),a=_("aside"),a.textContent=n,this.h()},l(s){e=C(s,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-qf6jcc"&&(e.textContent=o),l=d(s),E(t.$$.fragment,s),$=d(s),a=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(a)!=="svelte-1k8tbir"&&(a.textContent=n),this.h()},h(){h(a,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),T(t,s,c),r(s,$,c),r(s,a,c),m=!0},p(s,c){const b={};c&1&&(b.$$scope={dirty:c,ctx:s}),t.$set(b)},i(s){m||(A(t.$$.fragment,s),m=!0)},o(s){j(t.$$.fragment,s),m=!1},d(s){s&&(i(e),i(l),i($),i(a)),H(t,s)}}}function Is(x){let e,o,l="Programmation procédurale",t,$,a="Programmation orientée objet",n,m,s,c,b,u,p,q=`Visuellement, c'est ça la différence. À gauche, les données sont séparées des traitements. Les
			fonctions peuvent accéder à n'importe quelle donnée. À droite, chaque objet contient SES
			données ET SES traitements. C'est une vraie boîte autonome.`,f;return m=new qs({}),b=new Ps({}),{c(){e=_("div"),o=_("h3"),o.textContent=l,t=v(),$=_("h3"),$.textContent=a,n=v(),S(m.$$.fragment),s=v(),c=_("div"),S(b.$$.fragment),u=v(),p=_("aside"),p.textContent=q,this.h()},l(L){e=C(L,"DIV",{class:!0});var M=ue(e);o=C(M,"H3",{"data-svelte-h":!0}),g(o)!=="svelte-cax56s"&&(o.textContent=l),t=d(M),$=C(M,"H3",{"data-fragment-index":!0,class:!0,"data-svelte-h":!0}),g($)!=="svelte-1roygcu"&&($.textContent=a),n=d(M),E(m.$$.fragment,M),s=d(M),c=C(M,"DIV",{"data-fragment-index":!0,class:!0});var w=ue(c);E(b.$$.fragment,w),w.forEach(i),M.forEach(i),u=d(L),p=C(L,"ASIDE",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-cw6e6u"&&(p.textContent=q),this.h()},h(){h($,"data-fragment-index","1"),h($,"class","fragment"),h(c,"data-fragment-index","1"),h(c,"class","fragment"),h(e,"class","grid-cols-2 grid justify-items-center items-start"),h(p,"class","notes")},m(L,M){r(L,e,M),ee(e,o),ee(e,t),ee(e,$),ee(e,n),T(m,e,null),ee(e,s),ee(e,c),T(b,c,null),r(L,u,M),r(L,p,M),f=!0},p:N,i(L){f||(A(m.$$.fragment,L),A(b.$$.fragment,L),f=!0)},o(L){j(m.$$.fragment,L),j(b.$$.fragment,L),f=!1},d(L){L&&(i(e),i(u),i(p)),H(m),H(b)}}}function ks(x){let e,o='<h3>Programmation procédurale</h3> <h3>Programmation orientée objet</h3> <ul><li>Les données et les traitements sont séparés</li> <li class="fragment">Les fonctions accèdent à <span class="text-red-400">tout</span></li> <li class="fragment">Difficile de savoir &quot;qui fait quoi&quot;</li></ul> <ul><li>Les données et les traitements sont regroupés dans un objet</li> <li class="fragment">Les méthodes n&#39;accèdent qu&#39;à <span class="text-green-400">leur objet</span></li> <li class="fragment">Chaque objet est responsable de lui-même</li></ul>',l,t,$="Premier intérêt : le code est mieux organisé",a,n,m=`En procédural, les fonctions peuvent accéder à tout. C'est pratique au début, mais ça devient
			vite le bazar. En POO, chaque objet est une entité autonome. Il gère ses propres données avec
			ses propres méthodes. C'est le premier bénéfice : on range, on organise.`;return{c(){e=_("div"),e.innerHTML=o,l=v(),t=_("p"),t.textContent=$,a=v(),n=_("aside"),n.textContent=m,this.h()},l(s){e=C(s,"DIV",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-kmsvtl"&&(e.innerHTML=o),l=d(s),t=C(s,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-19jde0y"&&(t.textContent=$),a=d(s),n=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1ezzhp6"&&(n.textContent=m),this.h()},h(){h(e,"class","grid-cols-2 grid justify-items-center items-start"),h(t,"class","fragment font-bold text-accent-200 mt-8"),h(n,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function zs(x){let e,o="🔒 PROTÉGER",l,t,$="Deuxième pilier de la POO",a,n,m=`Maintenant qu'on a rangé, on va voir le deuxième pilier : protéger. C'est là que la POO
			devient vraiment puissante.`;return{c(){e=_("h2"),e.textContent=o,l=v(),t=_("p"),t.textContent=$,a=v(),n=_("aside"),n.textContent=m,this.h()},l(s){e=C(s,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-nrad46"&&(e.textContent=o),l=d(s),t=C(s,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1n91bqq"&&(t.textContent=$),a=d(s),n=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-5opokd"&&(n.textContent=m),this.h()},h(){h(e,"class","text-6xl"),h(t,"class","text-3xl text-gray-400"),h(n,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function Vs(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Os(x){let e,o="Le problème : les erreurs silencieuses",l,t,$="En procédural, rien ne vous empêche de faire n'importe quoi...",a,n,m,s,c=`Regardez ce code. La fonction direBonjour attend un nom et un âge. Mais rien ne m'empêche de
			lui passer l'âge de Marie à la place de celui de Jean ! Le code compile, il s'exécute... mais
			le résultat est faux. C'est un bug silencieux, le pire type de bug.`,b;return n=new ie({props:{class:"java",$$slots:{default:[Vs]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.textContent=$,a=v(),S(n.$$.fragment),m=v(),s=_("aside"),s.textContent=c,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-2a5yxe"&&(e.textContent=o),l=d(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1sotxef"&&(t.textContent=$),a=d(u),E(n.$$.fragment,u),m=d(u),s=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-1va15cw"&&(s.textContent=c),this.h()},h(){h(s,"class","notes")},m(u,p){r(u,e,p),r(u,l,p),r(u,t,p),r(u,a,p),T(n,u,p),r(u,m,p),r(u,s,p),b=!0},p(u,p){const q={};p&1&&(q.$$scope={dirty:p,ctx:u}),n.$set(q)},i(u){b||(A(n.$$.fragment,u),b=!0)},o(u){j(n.$$.fragment,u),b=!1},d(u){u&&(i(e),i(l),i(t),i(a),i(m),i(s)),H(n,u)}}}function Us(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Rs(x){let e,o="Le problème empire avec le temps...",l,t,$,a,n="Plus le code grossit, plus on se trompe !",m,s,c=`6 mois plus tard, vous avez 50 variables, 30 fonctions. Vous ne savez plus quelle variable va
			avec quelle autre. Vous vous trompez de paramètre, le code compile, mais ça ne marche pas.
			Vous passez des heures à débugger.`,b;return t=new ie({props:{class:"java",lines:"1-8|10-15",$$slots:{default:[Us]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),S(t.$$.fragment),$=v(),a=_("p"),a.textContent=n,m=v(),s=_("aside"),s.textContent=c,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-12am7ex"&&(e.textContent=o),l=d(u),E(t.$$.fragment,u),$=d(u),a=C(u,"P",{class:!0,"data-svelte-h":!0}),g(a)!=="svelte-1u4dzf0"&&(a.textContent=n),m=d(u),s=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-1oru7wz"&&(s.textContent=c),this.h()},h(){h(a,"class","fragment text-red-400 font-bold"),h(s,"class","notes")},m(u,p){r(u,e,p),r(u,l,p),T(t,u,p),r(u,$,p),r(u,a,p),r(u,m,p),r(u,s,p),b=!0},p(u,p){const q={};p&1&&(q.$$scope={dirty:p,ctx:u}),t.$set(q)},i(u){b||(A(t.$$.fragment,u),b=!0)},o(u){j(t.$$.fragment,u),b=!1},d(u){u&&(i(e),i(l),i($),i(a),i(m),i(s)),H(t,u)}}}function Ns(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Js(x){let e,o="La solution POO : impossible de se tromper",l,t,$,a,n=`En POO, la méthode direBonjour est DANS l'objet Personne. Elle ne prend pas de paramètres,
			elle utilise directement les données de l'objet. Chaque personne a sa propre méthode qui
			utilise SES données. Impossible de mélanger les données de Jean et Marie.`,m;return t=new ie({props:{class:"java",lines:"1-11|13-17",$$slots:{default:[Ns]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),S(t.$$.fragment),$=v(),a=_("aside"),a.textContent=n,this.h()},l(s){e=C(s,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1l4bme7"&&(e.textContent=o),l=d(s),E(t.$$.fragment,s),$=d(s),a=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(a)!=="svelte-ylwt9m"&&(a.textContent=n),this.h()},h(){h(a,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),T(t,s,c),r(s,$,c),r(s,a,c),m=!0},p(s,c){const b={};c&1&&(b.$$scope={dirty:c,ctx:s}),t.$set(b)},i(s){m||(A(t.$$.fragment,s),m=!0)},o(s){j(t.$$.fragment,s),m=!1},d(s){s&&(i(e),i(l),i($),i(a)),H(t,s)}}}function Bs(x){let e=`
//
direBonjour(nom1, age1);  // OK
direBonjour(nom1, age2);  // BUG !
// Rien ne m'empêche de mélanger
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Fs(x){let e=`
//
jean.direBonjour();
marie.direBonjour();
// Chacun utilise SES données
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Gs(x){let e,o="Comparaison directe",l,t,$,a,n="❌ Procédural",m,s,c,b,u,p="✅ POO",q,f,L,M,w="Les méthodes ne manipulent que les données de LEUR objet",I,B,Q=`C'est ça la vraie puissance. En procédural, vous pouvez mélanger les données de personnes
			différentes. En POO, chaque méthode n'accède qu'aux données de son objet. Jean utilise les
			données de Jean, Marie utilise les données de Marie. Impossible de se tromper.`,K;return s=new ie({props:{class:"java",$$slots:{default:[Bs]},$$scope:{ctx:x}}}),f=new ie({props:{class:"java",$$slots:{default:[Fs]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("div"),$=_("div"),a=_("h4"),a.textContent=n,m=v(),S(s.$$.fragment),c=v(),b=_("div"),u=_("h4"),u.textContent=p,q=v(),S(f.$$.fragment),L=v(),M=_("p"),M.textContent=w,I=v(),B=_("aside"),B.textContent=Q,this.h()},l(D){e=C(D,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-r1ae78"&&(e.textContent=o),l=d(D),t=C(D,"DIV",{class:!0});var F=ue(t);$=C(F,"DIV",{});var ne=ue($);a=C(ne,"H4",{class:!0,"data-svelte-h":!0}),g(a)!=="svelte-14hrfbc"&&(a.textContent=n),m=d(ne),E(s.$$.fragment,ne),ne.forEach(i),c=d(F),b=C(F,"DIV",{});var O=ue(b);u=C(O,"H4",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-o82dwg"&&(u.textContent=p),q=d(O),E(f.$$.fragment,O),O.forEach(i),F.forEach(i),L=d(D),M=C(D,"P",{class:!0,"data-svelte-h":!0}),g(M)!=="svelte-2a01z8"&&(M.textContent=w),I=d(D),B=C(D,"ASIDE",{class:!0,"data-svelte-h":!0}),g(B)!=="svelte-1wg97bw"&&(B.textContent=Q),this.h()},h(){h(a,"class","text-red-400"),h(u,"class","text-green-400"),h(t,"class","grid-cols-2 grid justify-items-center items-start gap-4"),h(M,"class","fragment text-accent-200 font-bold text-3xl mt-8"),h(B,"class","notes")},m(D,F){r(D,e,F),r(D,l,F),r(D,t,F),ee(t,$),ee($,a),ee($,m),T(s,$,null),ee(t,c),ee(t,b),ee(b,u),ee(b,q),T(f,b,null),r(D,L,F),r(D,M,F),r(D,I,F),r(D,B,F),K=!0},p(D,F){const ne={};F&1&&(ne.$$scope={dirty:F,ctx:D}),s.$set(ne);const O={};F&1&&(O.$$scope={dirty:F,ctx:D}),f.$set(O)},i(D){K||(A(s.$$.fragment,D),A(f.$$.fragment,D),K=!0)},o(D){j(s.$$.fragment,D),j(f.$$.fragment,D),K=!1},d(D){D&&(i(e),i(l),i(t),i(L),i(M),i(I),i(B)),H(s),H(f)}}}function Qs(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Ks(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Ys(x){let e,o="Exemple complet : avant / après",l,t,$,a="Procédural",n,m,s="Orienté Objet",c,b,u,p,q,f,L=`À gauche, on pourrait se tromper et appeler direBonjour avec nom et age2. Bug silencieux. À
			droite, chaque Personne est un objet autonome. Quand on appelle p1.direBonjour(), c'est
			TOUJOURS les données de p1 qui sont utilisées. Impossible de mélanger.`,M;return b=new ie({props:{class:"java",$$slots:{default:[Qs]},$$scope:{ctx:x}}}),p=new ie({props:{class:"java fragment","data-fragment-index":"1",lines:"1-9|10-13",$$slots:{default:[Ks]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("div"),$=_("h4"),$.textContent=a,n=v(),m=_("h4"),m.textContent=s,c=v(),S(b.$$.fragment),u=v(),S(p.$$.fragment),q=v(),f=_("aside"),f.textContent=L,this.h()},l(w){e=C(w,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-11nvxg1"&&(e.textContent=o),l=d(w),t=C(w,"DIV",{class:!0});var I=ue(t);$=C(I,"H4",{"data-svelte-h":!0}),g($)!=="svelte-1bk3u6h"&&($.textContent=a),n=d(I),m=C(I,"H4",{class:!0,"data-fragment-index":!0,"data-svelte-h":!0}),g(m)!=="svelte-1rzdg3v"&&(m.textContent=s),c=d(I),E(b.$$.fragment,I),u=d(I),E(p.$$.fragment,I),I.forEach(i),q=d(w),f=C(w,"ASIDE",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-1uzbf9k"&&(f.textContent=L),this.h()},h(){h(m,"class","fragment"),h(m,"data-fragment-index","1"),h(t,"class","grid-cols-2 grid justify-items-center items-start"),h(f,"class","notes")},m(w,I){r(w,e,I),r(w,l,I),r(w,t,I),ee(t,$),ee(t,n),ee(t,m),ee(t,c),T(b,t,null),ee(t,u),T(p,t,null),r(w,q,I),r(w,f,I),M=!0},p(w,I){const B={};I&1&&(B.$$scope={dirty:I,ctx:w}),b.$set(B);const Q={};I&1&&(Q.$$scope={dirty:I,ctx:w}),p.$set(Q)},i(w){M||(A(b.$$.fragment,w),A(p.$$.fragment,w),M=!0)},o(w){j(b.$$.fragment,w),j(p.$$.fragment,w),M=!1},d(w){w&&(i(e),i(l),i(t),i(q),i(f)),H(b),H(p)}}}function Xs(x){let e,o="Récapitulatif : Ranger + Protéger",l,t,$='<div class="p-6 bg-accent-950 rounded-lg"><h4 class="text-important">📦 RANGER</h4> <ul class="text-2xl"><li>Données regroupées par entité</li> <li>Code plus lisible</li> <li>Plus facile à maintenir</li></ul></div> <div class="p-6 bg-accent-950 rounded-lg"><h4 class="text-important">🔒 PROTÉGER</h4> <ul class="text-2xl"><li>Méthodes liées à leurs données</li> <li>Impossible de se tromper de paramètre</li> <li>Le compilateur vous aide</li></ul></div>',a,n,m="Mais ce n'est pas tout...",s,c,b=`On a vu les deux premiers piliers. On range le code, on le protège des erreurs. Mais la POO
			offre un troisième bénéfice, peut-être le plus puissant : la généralisation.`;return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("div"),t.innerHTML=$,a=v(),n=_("p"),n.textContent=m,s=v(),c=_("aside"),c.textContent=b,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-wok7w1"&&(e.textContent=o),l=d(u),t=C(u,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1hsd1m7"&&(t.innerHTML=$),a=d(u),n=C(u,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-3ya9un"&&(n.textContent=m),s=d(u),c=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-heeq8"&&(c.textContent=b),this.h()},h(){h(t,"class","flex flex-row justify-around items-start mt-8"),h(n,"class","fragment text-3xl mt-8"),h(c,"class","notes")},m(u,p){r(u,e,p),r(u,l,p),r(u,t,p),r(u,a,p),r(u,n,p),r(u,s,p),r(u,c,p)},p:N,d(u){u&&(i(e),i(l),i(t),i(a),i(n),i(s),i(c))}}}function Ws(x){let e,o="🌳 GÉNÉRALISER",l,t,$="Troisième pilier de la POO",a,n,m=`Le troisième pilier, c'est la généralisation. C'est là qu'on va parler d'héritage,
			d'abstraction. C'est ce qui rend la POO vraiment unique.`;return{c(){e=_("h2"),e.textContent=o,l=v(),t=_("p"),t.textContent=$,a=v(),n=_("aside"),n.textContent=m,this.h()},l(s){e=C(s,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-ptnj3f"&&(e.textContent=o),l=d(s),t=C(s,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-188gx3t"&&(t.textContent=$),a=d(s),n=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-m0kwia"&&(n.textContent=m),this.h()},h(){h(e,"class","text-6xl"),h(t,"class","text-3xl text-gray-400"),h(n,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function Zs(x){let e,o="La programmation orientée objet",l,t,$="Qu'est-ce que c'est ?",a,n,m='La programmation orientée objet est un <span class="text-important">paradigme de programmation</span>, c&#39;est-à-dire une manière de programmer, qui repose sur la notion d&#39;objets.',s,c,b="Un objet est une entité qui regroupe des données et des traitements qui lui sont associés.",u,p,q='Un objet est censé représenter <span class="text-important">une entité du monde réel</span>.',f,L,M="Il n'est pas obligatoire de programmer en POO !",w,I,B=`La POO c'est un paradigme, une façon de penser le code. L'idée c'est de modéliser le monde
			réel : des personnes, des voitures, des produits... Ce n'est pas obligatoire, mais c'est très
			puissant quand on sait s'en servir.`;return{c(){e=_("h2"),e.textContent=o,l=v(),t=_("h3"),t.textContent=$,a=v(),n=_("p"),n.innerHTML=m,s=v(),c=_("p"),c.textContent=b,u=v(),p=_("p"),p.innerHTML=q,f=v(),L=_("p"),L.textContent=M,w=v(),I=_("aside"),I.textContent=B,this.h()},l(Q){e=C(Q,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-18a0qr8"&&(e.textContent=o),l=d(Q),t=C(Q,"H3",{"data-svelte-h":!0}),g(t)!=="svelte-a8zqi8"&&(t.textContent=$),a=d(Q),n=C(Q,"P",{"data-svelte-h":!0}),g(n)!=="svelte-3ymvqm"&&(n.innerHTML=m),s=d(Q),c=C(Q,"P",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-18xem7k"&&(c.textContent=b),u=d(Q),p=C(Q,"P",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-10wio1h"&&(p.innerHTML=q),f=d(Q),L=C(Q,"P",{class:!0,"data-svelte-h":!0}),g(L)!=="svelte-64ska2"&&(L.textContent=M),w=d(Q),I=C(Q,"ASIDE",{class:!0,"data-svelte-h":!0}),g(I)!=="svelte-zlkz96"&&(I.textContent=B),this.h()},h(){h(c,"class","fragment"),h(p,"class","fragment"),h(L,"class","fragment text-accent-200 font-bold"),h(I,"class","notes")},m(Q,K){r(Q,e,K),r(Q,l,K),r(Q,t,K),r(Q,a,K),r(Q,n,K),r(Q,s,K),r(Q,c,K),r(Q,u,K),r(Q,p,K),r(Q,f,K),r(Q,L,K),r(Q,w,K),r(Q,I,K)},p:N,d(Q){Q&&(i(e),i(l),i(t),i(a),i(n),i(s),i(c),i(u),i(p),i(f),i(L),i(w),i(I))}}}function ys(x){let e,o="Représenter le monde réel",l,t,$="Un objet est censé représenter une entité du monde réel.",a,n,m=`Par exemple, <span data-fragment-index="3" class="fragment highlight-red">un chien, un chat</span>,
			<span data-fragment-index="3" class="fragment highlight-green">une moto, une voiture</span>,
			<span data-fragment-index="3" class="fragment highlight-blue">un ennemi, un PNJ</span>`,s,c,b=`Ou plus <span class="underline font-bold">génériquement</span>, un
			<span class="text-red-500">animal</span>, un <span class="text-green-500">véhicule</span>, un
			<span class="text-blue-500">personnage</span>`,u,p,q=`On modélise le monde réel. Un chien, un chat, ce sont des objets. Mais on peut aller plus loin
			: un chien et un chat, c'est un animal. Une moto et une voiture, c'est un véhicule. C'est ça
			la généralisation : trouver le concept commun.`;return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.textContent=$,a=v(),n=_("p"),n.innerHTML=m,s=v(),c=_("p"),c.innerHTML=b,u=v(),p=_("aside"),p.textContent=q,this.h()},l(f){e=C(f,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1nsqnl5"&&(e.textContent=o),l=d(f),t=C(f,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1te9lxn"&&(t.textContent=$),a=d(f),n=C(f,"P",{class:!0,"data-fragment-index":!0,"data-svelte-h":!0}),g(n)!=="svelte-12p87au"&&(n.innerHTML=m),s=d(f),c=C(f,"P",{class:!0,"data-fragment-index":!0,"data-svelte-h":!0}),g(c)!=="svelte-68say8"&&(c.innerHTML=b),u=d(f),p=C(f,"ASIDE",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-1ad4dj1"&&(p.textContent=q),this.h()},h(){h(t,"class","font-bold text-accent-200"),h(n,"class","fragment"),h(n,"data-fragment-index","2"),h(c,"class","fragment"),h(c,"data-fragment-index","3"),h(p,"class","notes")},m(f,L){r(f,e,L),r(f,l,L),r(f,t,L),r(f,a,L),r(f,n,L),r(f,s,L),r(f,c,L),r(f,u,L),r(f,p,L)},p:N,d(f){f&&(i(e),i(l),i(t),i(a),i(n),i(s),i(c),i(u),i(p))}}}function el(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function tl(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function sl(x){let e,o="Pourquoi généraliser ?",l,t,$="Imaginons que vous codez un jeu vidéo...",a,n,m,s,c="❌ Sans généralisation",b,u,p,q,f,L="✅ Avec généralisation",M,w,I,B,Q=`Sans généralisation, on duplique le code. Chaque personnage a sa méthode seDeplacer, même si
			c'est la même. Avec la généralisation, on met le code commun dans une classe parente. Si on
			change seDeplacer, on le change une seule fois, et tous les personnages en bénéficient.`,K;return u=new ie({props:{class:"java",$$slots:{default:[el]},$$scope:{ctx:x}}}),w=new ie({props:{class:"java",$$slots:{default:[tl]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.textContent=$,a=v(),n=_("div"),m=_("div"),s=_("h4"),s.textContent=c,b=v(),S(u.$$.fragment),p=v(),q=_("div"),f=_("h4"),f.textContent=L,M=v(),S(w.$$.fragment),I=v(),B=_("aside"),B.textContent=Q,this.h()},l(D){e=C(D,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1tyfy6u"&&(e.textContent=o),l=d(D),t=C(D,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1piptso"&&(t.textContent=$),a=d(D),n=C(D,"DIV",{class:!0});var F=ue(n);m=C(F,"DIV",{class:!0});var ne=ue(m);s=C(ne,"H4",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-1dno5ot"&&(s.textContent=c),b=d(ne),E(u.$$.fragment,ne),ne.forEach(i),p=d(F),q=C(F,"DIV",{class:!0});var O=ue(q);f=C(O,"H4",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-11tuyq2"&&(f.textContent=L),M=d(O),E(w.$$.fragment,O),O.forEach(i),F.forEach(i),I=d(D),B=C(D,"ASIDE",{class:!0,"data-svelte-h":!0}),g(B)!=="svelte-qs469b"&&(B.textContent=Q),this.h()},h(){h(s,"class","text-red-400"),h(m,"class","fragment"),h(f,"class","text-green-400"),h(q,"class","fragment"),h(n,"class","grid-cols-2 grid gap-8 mt-8"),h(B,"class","notes")},m(D,F){r(D,e,F),r(D,l,F),r(D,t,F),r(D,a,F),r(D,n,F),ee(n,m),ee(m,s),ee(m,b),T(u,m,null),ee(n,p),ee(n,q),ee(q,f),ee(q,M),T(w,q,null),r(D,I,F),r(D,B,F),K=!0},p(D,F){const ne={};F&1&&(ne.$$scope={dirty:F,ctx:D}),u.$set(ne);const O={};F&1&&(O.$$scope={dirty:F,ctx:D}),w.$set(O)},i(D){K||(A(u.$$.fragment,D),A(w.$$.fragment,D),K=!0)},o(D){j(u.$$.fragment,D),j(w.$$.fragment,D),K=!1},d(D){D&&(i(e),i(l),i(t),i(a),i(n),i(I),i(B)),H(u),H(w)}}}function ll(x){let e,o="La généricité",l,t,$="Généralisez vos concepts !",a,n,m='<ul><li><a href="#">Animal</a> <ul><li><a>Chien</a></li> <li><a>Chat</a></li></ul></li> <li><a href="#">Véhicule</a> <ul><li><a>Voiture</a></li> <li><a>Moto</a></li> <li class="fragment" data-fragment-index="1"><a>Bateau</a></li></ul></li> <li><a href="#">Personnage</a> <ul><li><a>Ennemi</a> <ul class="fragment" data-fragment-index="1"><li><a>Monstre</a></li> <li><a>Boss</a></li></ul></li> <li><a>PNJ</a></li></ul></li></ul>',s,c,b=`On peut représenter ça sous forme d'arbre. Animal se décline en Chien et Chat. Véhicule se
			décline en Voiture, Moto, et pourquoi pas Bateau demain. Personnage se décline en Ennemi et
			PNJ, et Ennemi peut lui-même se décliner en Monstre et Boss. C'est ce qu'on appelle l'héritage
			: les enfants héritent des caractéristiques du parent.`;return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.textContent=$,a=v(),n=_("div"),n.innerHTML=m,s=v(),c=_("aside"),c.textContent=b,this.h()},l(u){e=C(u,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1t0g1h3"&&(e.textContent=o),l=d(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-ptm47t"&&(t.textContent=$),a=d(u),n=C(u,"DIV",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-18iior2"&&(n.innerHTML=m),s=d(u),c=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-1azk6ad"&&(c.textContent=b),this.h()},h(){h(e,"class","uppercase"),h(n,"class","tree scale-150"),h(c,"class","notes")},m(u,p){r(u,e,p),r(u,l,p),r(u,t,p),r(u,a,p),r(u,n,p),r(u,s,p),r(u,c,p)},p:N,d(u){u&&(i(e),i(l),i(t),i(a),i(n),i(s),i(c))}}}function nl(x){let e,o="L'héritage : le cœur de la POO",l,t,$="Quand <code>Voiture</code> hérite de <code>Véhicule</code> :",a,n,m='<li class="fragment">✅ Elle récupère automatiquement toutes les données de Véhicule</li> <li class="fragment">✅ Elle récupère automatiquement toutes les méthodes de Véhicule</li> <li class="fragment">✅ Elle peut ajouter ses propres données (nbPortes, nbPlaces...)</li> <li class="fragment">✅ Elle peut modifier le comportement hérité si besoin</li>',s,c,b="Écrivez le code une fois, réutilisez-le partout !",u,p,q=`L'héritage c'est ça : on écrit le code une fois dans le parent, et tous les enfants en
			bénéficient. Si on ajoute un attribut "couleur" à Véhicule, Voiture et Moto l'ont
			automatiquement. C'est un gain de temps énorme, et surtout, moins de bugs car moins de code
			dupliqué.`;return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.innerHTML=$,a=v(),n=_("ul"),n.innerHTML=m,s=v(),c=_("p"),c.textContent=b,u=v(),p=_("aside"),p.textContent=q,this.h()},l(f){e=C(f,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1lb9yfa"&&(e.textContent=o),l=d(f),t=C(f,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1bwq09e"&&(t.innerHTML=$),a=d(f),n=C(f,"UL",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-xxefp4"&&(n.innerHTML=m),s=d(f),c=C(f,"P",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-74izuf"&&(c.textContent=b),u=d(f),p=C(f,"ASIDE",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-yxss4w"&&(p.textContent=q),this.h()},h(){h(n,"class","text-2xl"),h(c,"class","fragment text-accent-200 font-bold mt-8"),h(p,"class","notes")},m(f,L){r(f,e,L),r(f,l,L),r(f,t,L),r(f,a,L),r(f,n,L),r(f,s,L),r(f,c,L),r(f,u,L),r(f,p,L)},p:N,d(f){f&&(i(e),i(l),i(t),i(a),i(n),i(s),i(c),i(u),i(p))}}}function il(x){let e,o="L'abstraction : penser au futur",l,t,$='En POO, généraliser s&#39;appelle <span class="text-important">abstraire, faire une abstraction</span>',a,n,m="C'est anticiper les évolutions de votre code.",s,c,b=`Abstraire, c'est trouver le concept commun entre plusieurs choses. Mais c'est aussi penser au
			futur : qu'est-ce que mon client va me demander demain ?`;return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.innerHTML=$,a=v(),n=_("p"),n.textContent=m,s=v(),c=_("aside"),c.textContent=b,this.h()},l(u){e=C(u,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1rpalwv"&&(e.textContent=o),l=d(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1n8l9pz"&&(t.innerHTML=$),a=d(u),n=C(u,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-44luki"&&(n.textContent=m),s=d(u),c=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-1ux1lwj"&&(c.textContent=b),this.h()},h(){h(e,"class","uppercase"),h(n,"class","fragment"),h(c,"class","notes")},m(u,p){r(u,e,p),r(u,l,p),r(u,t,p),r(u,a,p),r(u,n,p),r(u,s,p),r(u,c,p)},p:N,d(u){u&&(i(e),i(l),i(t),i(a),i(n),i(s),i(c))}}}function al(x){let e,o="Exemple concret : location de voiture",l,t,$=`<span class="text-important">Situation :</span> On vous demande de coder un système de
			location de voiture.<br/><br/> <span class="fragment">📅 <b>6 mois plus tard :</b> &quot;On aimerait aussi proposer des motos !&quot;</span><br/> <span class="fragment">📅 <b>1 an plus tard :</b> &quot;Et des vélos électriques !&quot;</span><br/> <span class="fragment">📅 <b>2 ans plus tard :</b> &quot;Et des accessoires : sièges auto, porte-vélos, chaînes neige...&quot;</span>`,a,n,m='Si vous aviez anticipé, vous auriez codé "Véhicule" dès le départ !',s,c,b=`C'est un scénario classique. On vous demande de gérer des voitures, mais évidemment, ça va
			évoluer. Motos, vélos, accessoires... Si vous codez "Voiture" partout, vous allez devoir tout
			refaire. Si vous codez "Véhicule" dès le départ, ajouter une Moto c'est 5 minutes.`;return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.innerHTML=$,a=v(),n=_("p"),n.textContent=m,s=v(),c=_("aside"),c.textContent=b,this.h()},l(u){e=C(u,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1fhmnzb"&&(e.textContent=o),l=d(u),t=C(u,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-18xi090"&&(t.innerHTML=$),a=d(u),n=C(u,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-m4py0l"&&(n.textContent=m),s=d(u),c=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-s0c6jo"&&(c.textContent=b),this.h()},h(){h(e,"class","uppercase"),h(t,"class","text-start text-[28px] p-4 bg-accent-950 font-serif rounded-lg"),h(n,"class","fragment text-accent-200 font-bold mt-6"),h(c,"class","notes")},m(u,p){r(u,e,p),r(u,l,p),r(u,t,p),r(u,a,p),r(u,n,p),r(u,s,p),r(u,c,p)},p:N,d(u){u&&(i(e),i(l),i(t),i(a),i(n),i(s),i(c))}}}function rl(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function ul(x){let e,o="Le piège du code non généralisé",l,t,$,a,n="Demain on ajoute les motos... on doit tout dupliquer ? 😱",m,s,c=`Voilà le piège. On a codé tout autour de Voiture. Si on veut ajouter Moto, il faut créer
			louerMoto, retournerMoto, calculerPrixMoto... C'est du code dupliqué, c'est des bugs, c'est un
			cauchemar.`,b;return t=new ie({props:{class:"java",$$slots:{default:[rl]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),S(t.$$.fragment),$=v(),a=_("p"),a.textContent=n,m=v(),s=_("aside"),s.textContent=c,this.h()},l(u){e=C(u,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1h7w9x1"&&(e.textContent=o),l=d(u),E(t.$$.fragment,u),$=d(u),a=C(u,"P",{class:!0,"data-svelte-h":!0}),g(a)!=="svelte-1psvyp1"&&(a.textContent=n),m=d(u),s=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-1drwx1z"&&(s.textContent=c),this.h()},h(){h(e,"class","uppercase"),h(a,"class","fragment text-red-400 font-bold"),h(s,"class","notes")},m(u,p){r(u,e,p),r(u,l,p),T(t,u,p),r(u,$,p),r(u,a,p),r(u,m,p),r(u,s,p),b=!0},p(u,p){const q={};p&1&&(q.$$scope={dirty:p,ctx:u}),t.$set(q)},i(u){b||(A(t.$$.fragment,u),b=!0)},o(u){j(t.$$.fragment,u),b=!1},d(u){u&&(i(e),i(l),i($),i(a),i(m),i(s)),H(t,u)}}}function ol(x){let e=`
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
			`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function fl(x){let e,o="Étape 1 : Créer la hiérarchie Véhicule",l,t,$="On commence par regrouper Voiture et Moto sous Véhicule",a,n,m,s,c="<b>Voiture</b> est un <b>Véhicule</b> → elle hérite de prixJour, disponible, louer()...",b,u,p=`Première étape : on crée Véhicule qui contient tout ce qui est commun. Voiture et Moto
			héritent de Véhicule. Donc Voiture EST UN Véhicule. Elle a automatiquement prixJour,
			disponible, km, immatriculation. Elle a aussi les méthodes louer() et retourner() sans les
			recoder.`,q;return n=new je({props:{$$slots:{default:[ol]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.textContent=$,a=v(),S(n.$$.fragment),m=v(),s=_("p"),s.innerHTML=c,b=v(),u=_("aside"),u.textContent=p,this.h()},l(f){e=C(f,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1uw0g5w"&&(e.textContent=o),l=d(f),t=C(f,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1ko5xlx"&&(t.textContent=$),a=d(f),E(n.$$.fragment,f),m=d(f),s=C(f,"P",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-1hq4dgl"&&(s.innerHTML=c),b=d(f),u=C(f,"ASIDE",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-1p5u5s8"&&(u.textContent=p),this.h()},h(){h(e,"class","uppercase"),h(s,"class","fragment text-accent-200"),h(u,"class","notes")},m(f,L){r(f,e,L),r(f,l,L),r(f,t,L),r(f,a,L),T(n,f,L),r(f,m,L),r(f,s,L),r(f,b,L),r(f,u,L),q=!0},p(f,L){const M={};L&1&&(M.$$scope={dirty:L,ctx:f}),n.$set(M)},i(f){q||(A(n.$$.fragment,f),q=!0)},o(f){j(n.$$.fragment,f),q=!1},d(f){f&&(i(e),i(l),i(t),i(a),i(m),i(s),i(b),i(u)),H(n,f)}}}function cl(x){let e=`
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
			`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function $l(x){let e=`
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
			`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function pl(x){let e,o="Étape 2 : Ajouter les Accessoires",l,t,$="Les accessoires ont aussi un prix et une disponibilité...",a,n,m,s,c,b,u,p="⚠️ prixJour et disponible sont dupliqués dans Véhicule ET Accessoire !",q,f,L=`On ajoute les accessoires. SiègeAuto et PorteVelo héritent de Accessoire. Mais attendez...
			prixJour et disponible sont dans Véhicule ET dans Accessoire. C'est de la duplication ! On
			peut faire mieux.`,M;return m=new je({props:{$$slots:{default:[cl]},$$scope:{ctx:x}}}),c=new je({props:{$$slots:{default:[$l]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.textContent=$,a=v(),n=_("div"),S(m.$$.fragment),s=v(),S(c.$$.fragment),b=v(),u=_("p"),u.textContent=p,q=v(),f=_("aside"),f.textContent=L,this.h()},l(w){e=C(w,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-dpgmf6"&&(e.textContent=o),l=d(w),t=C(w,"P",{"data-svelte-h":!0}),g(t)!=="svelte-447yeq"&&(t.textContent=$),a=d(w),n=C(w,"DIV",{class:!0});var I=ue(n);E(m.$$.fragment,I),s=d(I),E(c.$$.fragment,I),I.forEach(i),b=d(w),u=C(w,"P",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-138h9qb"&&(u.textContent=p),q=d(w),f=C(w,"ASIDE",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-6rnzlf"&&(f.textContent=L),this.h()},h(){h(e,"class","uppercase"),h(n,"class","flex flex-row justify-center items-start gap-8"),h(u,"class","fragment text-red-400 font-bold mt-4"),h(f,"class","notes")},m(w,I){r(w,e,I),r(w,l,I),r(w,t,I),r(w,a,I),r(w,n,I),T(m,n,null),ee(n,s),T(c,n,null),r(w,b,I),r(w,u,I),r(w,q,I),r(w,f,I),M=!0},p(w,I){const B={};I&1&&(B.$$scope={dirty:I,ctx:w}),m.$set(B);const Q={};I&1&&(Q.$$scope={dirty:I,ctx:w}),c.$set(Q)},i(w){M||(A(m.$$.fragment,w),A(c.$$.fragment,w),M=!0)},o(w){j(m.$$.fragment,w),j(c.$$.fragment,w),M=!1},d(w){w&&(i(e),i(l),i(t),i(a),i(n),i(b),i(u),i(q),i(f)),H(m),H(c)}}}function ml(x){let e=`
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
			`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function dl(x){let e,o="Étape 3 : Abstraire encore plus avec Louable",l,t,$='Véhicule et Accessoire ont des points communs → on crée <span class="text-important">Louable</span>',a,n,m,s,c=`On crée Louable qui contient prixJour, disponible, et les méthodes louer, retourner,
			calculerPrix. Véhicule hérite de Louable, et Accessoire aussi. Du coup Voiture hérite de
			Véhicule qui hérite de Louable : Voiture a TOUT !`,b;return n=new je({props:{$$slots:{default:[ml]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.innerHTML=$,a=v(),S(n.$$.fragment),m=v(),s=_("aside"),s.textContent=c,this.h()},l(u){e=C(u,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-14ipspf"&&(e.textContent=o),l=d(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-qurtdv"&&(t.innerHTML=$),a=d(u),E(n.$$.fragment,u),m=d(u),s=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-hsu0uh"&&(s.textContent=c),this.h()},h(){h(e,"class","uppercase"),h(s,"class","notes")},m(u,p){r(u,e,p),r(u,l,p),r(u,t,p),r(u,a,p),T(n,u,p),r(u,m,p),r(u,s,p),b=!0},p(u,p){const q={};p&1&&(q.$$scope={dirty:p,ctx:u}),n.$set(q)},i(u){b||(A(n.$$.fragment,u),b=!0)},o(u){j(n.$$.fragment,u),b=!1},d(u){u&&(i(e),i(l),i(t),i(a),i(m),i(s)),H(n,u)}}}function vl(x){let e,o="Visualisons la chaîne d'héritage",l,t,$="Une <b>Voiture</b> c&#39;est quoi maintenant ?",a,n,m=`<div class="fragment p-4 bg-green-950 rounded-lg mb-2"><b>Voiture</b> hérite de <b>Véhicule</b></div> <div class="fragment text-4xl">↓</div> <div class="fragment p-4 bg-blue-950 rounded-lg mb-2"><b>Véhicule</b> hérite de <b>Louable</b></div> <div class="fragment text-4xl">↓</div> <div class="fragment p-4 bg-accent-950 rounded-lg">Donc <b>Voiture</b> a : prixJour, disponible, louer(), retourner(), km, immatriculation, nbPortes,
				nbPlaces</div>`,s,c,b="On n'a codé louer() qu'une seule fois, dans Louable !",u,p,q=`Suivons la chaîne. Voiture hérite de Véhicule. Véhicule hérite de Louable. Donc Voiture a tout
			: les attributs de Louable, plus ceux de Véhicule, plus les siens. Et surtout, la méthode
			louer() n'est codée qu'une seule fois, dans Louable. Voiture, Moto, SiègeAuto, PorteVelo...
			tous peuvent être loués avec le même code !`;return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.innerHTML=$,a=v(),n=_("div"),n.innerHTML=m,s=v(),c=_("p"),c.textContent=b,u=v(),p=_("aside"),p.textContent=q,this.h()},l(f){e=C(f,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-13fx6rx"&&(e.textContent=o),l=d(f),t=C(f,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1pgak5l"&&(t.innerHTML=$),a=d(f),n=C(f,"DIV",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-xx6qv0"&&(n.innerHTML=m),s=d(f),c=C(f,"P",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-mgjp0b"&&(c.textContent=b),u=d(f),p=C(f,"ASIDE",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-b8vxpx"&&(p.textContent=q),this.h()},h(){h(e,"class","uppercase"),h(n,"class","flex flex-col items-center mt-8 text-2xl"),h(c,"class","fragment text-accent-200 font-bold mt-6"),h(p,"class","notes")},m(f,L){r(f,e,L),r(f,l,L),r(f,t,L),r(f,a,L),r(f,n,L),r(f,s,L),r(f,c,L),r(f,u,L),r(f,p,L)},p:N,d(f){f&&(i(e),i(l),i(t),i(a),i(n),i(s),i(c),i(u),i(p))}}}function xl(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Cl(x){let e,o="Le code devient simple",l,t,$,a,n=`✅ Une seule méthode pour tout louer<br/>
			✅ Ajouter un nouveau type = quelques lignes<br/>
			✅ Zéro duplication de code`,m,s,c=`Regardez la puissance. Une seule méthode louer() qui fonctionne pour tout. Demain on ajoute
			VeloElectrique ? 3 lignes de code. Il hérite de tout le reste. C'est ça la vraie puissance de
			la POO : écrire moins, faire plus.`,b;return t=new ie({props:{class:"java",$$slots:{default:[xl]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),S(t.$$.fragment),$=v(),a=_("p"),a.innerHTML=n,m=v(),s=_("aside"),s.textContent=c,this.h()},l(u){e=C(u,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1bcwfrg"&&(e.textContent=o),l=d(u),E(t.$$.fragment,u),$=d(u),a=C(u,"P",{class:!0,"data-svelte-h":!0}),g(a)!=="svelte-fazfoj"&&(a.innerHTML=n),m=d(u),s=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-enkna"&&(s.textContent=c),this.h()},h(){h(e,"class","uppercase"),h(a,"class","fragment text-green-400 font-bold"),h(s,"class","notes")},m(u,p){r(u,e,p),r(u,l,p),T(t,u,p),r(u,$,p),r(u,a,p),r(u,m,p),r(u,s,p),b=!0},p(u,p){const q={};p&1&&(q.$$scope={dirty:p,ctx:u}),t.$set(q)},i(u){b||(A(t.$$.fragment,u),b=!0)},o(u){j(t.$$.fragment,u),b=!1},d(u){u&&(i(e),i(l),i($),i(a),i(m),i(s)),H(t,u)}}}function _l(x){let e,o="Le refactoring",l,t,$='L&#39;opération que l&#39;on vient de voir s&#39;appelle un <span class="text-important">refactoring</span>',a,n,m="C'est réorganiser le code sans changer son comportement.",s,c,b=`Si vous l&#39;aviez fait dès le départ, vous auriez gagné plus de temps que si vous devez le faire
			plus tard, c&#39;est une <u>certitude</u> !`,u,p,q=`Le refactoring, c'est améliorer la structure du code sans changer ce qu'il fait. C'est
			toujours plus facile de bien faire dès le début que de réparer après. Un code bien conçu,
			c'est des heures de debug en moins.`;return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.innerHTML=$,a=v(),n=_("p"),n.textContent=m,s=v(),c=_("p"),c.innerHTML=b,u=v(),p=_("aside"),p.textContent=q,this.h()},l(f){e=C(f,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-t8lx1u"&&(e.textContent=o),l=d(f),t=C(f,"P",{"data-svelte-h":!0}),g(t)!=="svelte-u769cg"&&(t.innerHTML=$),a=d(f),n=C(f,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1nmzwcc"&&(n.textContent=m),s=d(f),c=C(f,"P",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-b3fier"&&(c.innerHTML=b),u=d(f),p=C(f,"ASIDE",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-v3296a"&&(p.textContent=q),this.h()},h(){h(e,"class","uppercase"),h(n,"class","fragment"),h(c,"class","fragment"),h(p,"class","notes")},m(f,L){r(f,e,L),r(f,l,L),r(f,t,L),r(f,a,L),r(f,n,L),r(f,s,L),r(f,c,L),r(f,u,L),r(f,p,L)},p:N,d(f){f&&(i(e),i(l),i(t),i(a),i(n),i(s),i(c),i(u),i(p))}}}function hl(x){let e,o="BUILD vs RUN",l,t,$="Le temps d'implémentation (BUILD) augmente si vous faites beaucoup de POO",a,n,m="...mais la maintenance (RUN) coûte moins cher !",s,c,b='<div class="p-4 bg-red-950 rounded-lg"><h4 class="text-red-400">❌ Code vite fait</h4> <ul class="text-xl"><li>Rapide à écrire</li> <li>Difficile à maintenir</li> <li>Bugs fréquents</li> <li>Évolutions coûteuses</li></ul></div> <div class="p-4 bg-green-950 rounded-lg"><h4 class="text-green-400">✅ Code bien conçu</h4> <ul class="text-xl"><li>Plus long à écrire</li> <li>Facile à maintenir</li> <li>Moins de bugs</li> <li>Évolutions simples</li></ul></div>',u,p,q=`En entreprise, on parle de BUILD (le développement initial) et de RUN (la maintenance). Un
			code bien conçu coûte plus cher au BUILD mais beaucoup moins au RUN. Et le RUN, c'est souvent
			80% du coût total d'un projet !`;return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.textContent=$,a=v(),n=_("p"),n.textContent=m,s=v(),c=_("div"),c.innerHTML=b,u=v(),p=_("aside"),p.textContent=q,this.h()},l(f){e=C(f,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-bv5mk1"&&(e.textContent=o),l=d(f),t=C(f,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-10nhqsg"&&(t.textContent=$),a=d(f),n=C(f,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-ywkeo"&&(n.textContent=m),s=d(f),c=C(f,"DIV",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-4svqpn"&&(c.innerHTML=b),u=d(f),p=C(f,"ASIDE",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-wpatcb"&&(p.textContent=q),this.h()},h(){h(e,"class","uppercase"),h(t,"class","text-important"),h(n,"class","fragment"),h(c,"class","fragment grid grid-cols-2 gap-8 mt-8"),h(p,"class","notes")},m(f,L){r(f,e,L),r(f,l,L),r(f,t,L),r(f,a,L),r(f,n,L),r(f,s,L),r(f,c,L),r(f,u,L),r(f,p,L)},p:N,d(f){f&&(i(e),i(l),i(t),i(a),i(n),i(s),i(c),i(u),i(p))}}}function gl(x){let e,o="L'équilibre à trouver",l,t,$="Un <i>bon</i> ingénieur logiciel sait jusqu&#39;à quel niveau il convient d&#39;abstraire",a,n,m='<li class="fragment">❌ <b>Pas assez d&#39;abstraction :</b> vous devez tout casser pour ajouter une fonctionnalité</li> <li class="fragment">❌ <b>Trop d&#39;abstraction :</b> votre client paie pour du code qu&#39;il n&#39;utilisera jamais</li>',s,c,b="En entreprise, tout est question d'équilibre et vient avec l'expérience.",u,p,q=`C'est un équilibre à trouver. Pas assez d'abstraction, et chaque évolution est un cauchemar.
			Trop d'abstraction, et vous passez des semaines à coder des trucs inutiles. Ça vient avec
			l'expérience, avec les projets, avec les erreurs qu'on fait.`;return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.innerHTML=$,a=v(),n=_("ul"),n.innerHTML=m,s=v(),c=_("p"),c.textContent=b,u=v(),p=_("aside"),p.textContent=q,this.h()},l(f){e=C(f,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1082o8n"&&(e.textContent=o),l=d(f),t=C(f,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1yhe1kd"&&(t.innerHTML=$),a=d(f),n=C(f,"UL",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1veku0x"&&(n.innerHTML=m),s=d(f),c=C(f,"P",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-b8ucny"&&(c.textContent=b),u=d(f),p=C(f,"ASIDE",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-11bqu54"&&(p.textContent=q),this.h()},h(){h(e,"class","uppercase"),h(n,"class","mt-8"),h(c,"class","fragment mt-8"),h(p,"class","notes")},m(f,L){r(f,e,L),r(f,l,L),r(f,t,L),r(f,a,L),r(f,n,L),r(f,s,L),r(f,c,L),r(f,u,L),r(f,p,L)},p:N,d(f){f&&(i(e),i(l),i(t),i(a),i(n),i(s),i(c),i(u),i(p))}}}function bl(x){let e,o="Dans ce module",l,t,$="Faites le plus de zèle possible, exagérez !",a,n,m="C'est en allant trop loin qu'on apprend où sont les limites.",s,c,b="Vous apprendrez à doser en entreprise, avec de vrais projets et de vraies contraintes.",u,p,q=`Dans ce module, je vous encourage à en faire trop. Abstraire partout, hériter de tout. C'est
			comme ça qu'on apprend où sont les limites. En entreprise, vous aurez des contraintes de
			temps, de budget. Là, vous apprendrez à doser. Ici, c'est le moment d'expérimenter.`;return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.textContent=$,a=v(),n=_("p"),n.textContent=m,s=v(),c=_("p"),c.textContent=b,u=v(),p=_("aside"),p.textContent=q,this.h()},l(f){e=C(f,"H3",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-x5naxz"&&(e.textContent=o),l=d(f),t=C(f,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1as3wu1"&&(t.textContent=$),a=d(f),n=C(f,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-lvdult"&&(n.textContent=m),s=d(f),c=C(f,"P",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-1akob0d"&&(c.textContent=b),u=d(f),p=C(f,"ASIDE",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-kluukh"&&(p.textContent=q),this.h()},h(){h(e,"class","uppercase"),h(t,"class","text-important text-4xl"),h(n,"class","fragment mt-8 text-2xl"),h(c,"class","fragment text-2xl"),h(p,"class","notes")},m(f,L){r(f,e,L),r(f,l,L),r(f,t,L),r(f,a,L),r(f,n,L),r(f,s,L),r(f,c,L),r(f,u,L),r(f,p,L)},p:N,d(f){f&&(i(e),i(l),i(t),i(a),i(n),i(s),i(c),i(u),i(p))}}}function Ll(x){let e,o="Récapitulatif",l,t,$='<div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">📦 RANGER</h4> <p class="text-xl">Données + méthodes<br/>dans un même objet</p></div> <div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">🔒 PROTÉGER</h4> <p class="text-xl">Chaque méthode n&#39;accède<br/>qu&#39;à son objet</p></div> <div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">🌳 GÉNÉRALISER</h4> <p class="text-xl">Héritage et abstraction<br/>pour réutiliser le code</p></div>',a,n,m=`On récapitule. La POO c'est 3 piliers. Ranger : on met ensemble ce qui va ensemble. Protéger :
			chaque méthode ne touche qu'à son objet, le compilateur vous aide. Généraliser : on écrit le
			code une fois, on le réutilise partout grâce à l'héritage.`;return{c(){e=_("h2"),e.textContent=o,l=v(),t=_("div"),t.innerHTML=$,a=v(),n=_("aside"),n.textContent=m,this.h()},l(s){e=C(s,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-j5vxp9"&&(e.textContent=o),l=d(s),t=C(s,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-acu1zb"&&(t.innerHTML=$),a=d(s),n=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-17zzt5h"&&(n.textContent=m),this.h()},h(){h(t,"class","flex flex-row justify-around items-start mt-8"),h(n,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function ql(x){let e,o="La POO, c'est quoi au final ?",l,t,$="Vous venez d'être confronté aux concepts fondamentaux de la POO :",a,n,m='<li><span class="text-important">L&#39;encapsulation</span> : ranger et protéger les données</li> <li><span class="text-important">L&#39;abstraction</span> : généraliser les concepts</li> <li><span class="text-important">L&#39;héritage</span> : réutiliser le code des parents</li>',s,c,b="Nous allons voir ces concepts en détail dans les chapitres suivants.",u,p,q=`On a vu les bases. Encapsulation, abstraction, héritage. Ce sont les piliers de la POO, et on
			va les approfondir tout au long du module. Chaque chapitre va détailler un de ces concepts.`;return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.textContent=$,a=v(),n=_("ul"),n.innerHTML=m,s=v(),c=_("p"),c.textContent=b,u=v(),p=_("aside"),p.textContent=q,this.h()},l(f){e=C(f,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-5i67l6"&&(e.textContent=o),l=d(f),t=C(f,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1vfopav"&&(t.textContent=$),a=d(f),n=C(f,"UL",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-i42s8"&&(n.innerHTML=m),s=d(f),c=C(f,"P",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-ko3lge"&&(c.textContent=b),u=d(f),p=C(f,"ASIDE",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-b4p3e"&&(p.textContent=q),this.h()},h(){h(t,"class","fragment"),h(n,"class","fragment text-2xl mt-4"),h(c,"class","fragment mt-8"),h(p,"class","notes")},m(f,L){r(f,e,L),r(f,l,L),r(f,t,L),r(f,a,L),r(f,n,L),r(f,s,L),r(f,c,L),r(f,u,L),r(f,p,L)},p:N,d(f){f&&(i(e),i(l),i(t),i(a),i(n),i(s),i(c),i(u),i(p))}}}function wl(x){let e,o="Retenez ceci",l,t,$='La POO est un <span class="text-important">&quot;outil&quot;</span>.',a,n,m=`Si vous faites du Java, même en codant mal, vous faites de la POO compte tenu de la nature du
			langage.`,s,c,b=`Si la programmation n&#39;est qu&#39;une suite de blocs de code tels des <b>légos</b>, la POO, c&#39;est
			fabriquer des blocs <span class="text-important">intelligemment</span>
			que vous réutilisez, peu importe que vous construisiez un pont ou une maison.`,u,p,q=`La POO c'est un outil, pas une obligation. Mais c'est un outil puissant. En Java, vous faites
			de la POO que vous le vouliez ou non, c'est la nature du langage. L'idée c'est de fabriquer
			des briques réutilisables. Comme des légos bien conçus. Une brique "Véhicule" peut servir pour
			une voiture aujourd'hui, une moto demain, un vaisseau spatial dans 5 ans.`;return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.innerHTML=$,a=v(),n=_("p"),n.textContent=m,s=v(),c=_("p"),c.innerHTML=b,u=v(),p=_("aside"),p.textContent=q,this.h()},l(f){e=C(f,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-79cey5"&&(e.textContent=o),l=d(f),t=C(f,"P",{"data-svelte-h":!0}),g(t)!=="svelte-i0a1q0"&&(t.innerHTML=$),a=d(f),n=C(f,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-18j8tnm"&&(n.textContent=m),s=d(f),c=C(f,"P",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-1ugi8k9"&&(c.innerHTML=b),u=d(f),p=C(f,"ASIDE",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-kw89mq"&&(p.textContent=q),this.h()},h(){h(n,"class","fragment"),h(c,"class","fragment mt-8 text-2xl bg-accent-950 p-4 rounded-lg"),h(p,"class","notes")},m(f,L){r(f,e,L),r(f,l,L),r(f,t,L),r(f,a,L),r(f,n,L),r(f,s,L),r(f,c,L),r(f,u,L),r(f,p,L)},p:N,d(f){f&&(i(e),i(l),i(t),i(a),i(n),i(s),i(c),i(u),i(p))}}}function Pl(x){let e,o="À vous de jouer !",l,t,$="Dans les prochains chapitres, nous allons :",a,n,m='<li class="fragment">📦 Approfondir l&#39;<b>encapsulation</b> et la visibilité</li> <li class="fragment">🔗 Maîtriser l&#39;<b>héritage</b> et le polymorphisme</li> <li class="fragment">📋 Découvrir les <b>interfaces</b> et les classes abstraites</li> <li class="fragment">🎨 Apprendre les <b>Design Patterns</b> classiques</li>',s,c,b=`C'est parti pour la suite ! On va approfondir chaque concept. L'encapsulation, l'héritage, les
			interfaces, et même les Design Patterns. À la fin du module, vous saurez concevoir du code
			propre, évolutif, maintenable.`;return{c(){e=_("h2"),e.textContent=o,l=v(),t=_("p"),t.textContent=$,a=v(),n=_("ul"),n.innerHTML=m,s=v(),c=_("aside"),c.textContent=b,this.h()},l(u){e=C(u,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-cgpepy"&&(e.textContent=o),l=d(u),t=C(u,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-16xre1k"&&(t.textContent=$),a=d(u),n=C(u,"UL",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-m1w35p"&&(n.innerHTML=m),s=d(u),c=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-1kgc7yy"&&(c.textContent=b),this.h()},h(){h(t,"class","text-3xl mt-8"),h(n,"class","text-2xl mt-4"),h(c,"class","notes")},m(u,p){r(u,e,p),r(u,l,p),r(u,t,p),r(u,a,p),r(u,n,p),r(u,s,p),r(u,c,p)},p:N,d(u){u&&(i(e),i(l),i(t),i(a),i(n),i(s),i(c))}}}function Ml(x){let e,o,l,t,$,a,n,m,s,c,b,u,p,q,f,L,M,w,I,B,Q,K,D,F,ne,O,le,ae,ce,re,pe,oe,$e,fe,me,U,te,R,se,de,_e,V,W,ve,he,z,X,k,Y,qe,ge,we,be,Ae,Le,Te,Pe,Ie,Me,ke,He,ze,Ee,Je,Se,Be,De,Fe,Re,Qe,Ne,Ke,Ge,Ye;return e=new J({props:{$$slots:{default:[Ms]},$$scope:{ctx:x}}}),l=new J({props:{$$slots:{default:[Hs]},$$scope:{ctx:x}}}),$=new J({props:{$$slots:{default:[js]},$$scope:{ctx:x}}}),n=new J({props:{data_background_color:"#1a1a2e",$$slots:{default:[As]},$$scope:{ctx:x}}}),s=new J({props:{$$slots:{default:[Es]},$$scope:{ctx:x}}}),b=new J({props:{$$slots:{default:[Ds]},$$scope:{ctx:x}}}),p=new J({props:{$$slots:{default:[Is]},$$scope:{ctx:x}}}),f=new J({props:{$$slots:{default:[ks]},$$scope:{ctx:x}}}),M=new J({props:{data_background_color:"#1a1a2e",$$slots:{default:[zs]},$$scope:{ctx:x}}}),I=new J({props:{$$slots:{default:[Os]},$$scope:{ctx:x}}}),Q=new J({props:{$$slots:{default:[Rs]},$$scope:{ctx:x}}}),D=new J({props:{$$slots:{default:[Js]},$$scope:{ctx:x}}}),ne=new J({props:{$$slots:{default:[Gs]},$$scope:{ctx:x}}}),le=new J({props:{$$slots:{default:[Ys]},$$scope:{ctx:x}}}),ce=new J({props:{$$slots:{default:[Xs]},$$scope:{ctx:x}}}),pe=new J({props:{data_background_color:"#1a1a2e",$$slots:{default:[Ws]},$$scope:{ctx:x}}}),$e=new J({props:{$$slots:{default:[Zs]},$$scope:{ctx:x}}}),me=new J({props:{$$slots:{default:[ys]},$$scope:{ctx:x}}}),te=new J({props:{$$slots:{default:[sl]},$$scope:{ctx:x}}}),se=new J({props:{$$slots:{default:[ll]},$$scope:{ctx:x}}}),_e=new J({props:{$$slots:{default:[nl]},$$scope:{ctx:x}}}),W=new J({props:{$$slots:{default:[il]},$$scope:{ctx:x}}}),he=new J({props:{$$slots:{default:[al]},$$scope:{ctx:x}}}),X=new J({props:{$$slots:{default:[ul]},$$scope:{ctx:x}}}),Y=new J({props:{$$slots:{default:[fl]},$$scope:{ctx:x}}}),ge=new J({props:{$$slots:{default:[pl]},$$scope:{ctx:x}}}),be=new J({props:{$$slots:{default:[dl]},$$scope:{ctx:x}}}),Le=new J({props:{$$slots:{default:[vl]},$$scope:{ctx:x}}}),Pe=new J({props:{$$slots:{default:[Cl]},$$scope:{ctx:x}}}),Me=new J({props:{data_background_color:"#00353F",$$slots:{default:[_l]},$$scope:{ctx:x}}}),He=new J({props:{data_background_color:"#00353F",$$slots:{default:[hl]},$$scope:{ctx:x}}}),Ee=new J({props:{data_background_color:"#00353F",$$slots:{default:[gl]},$$scope:{ctx:x}}}),Se=new J({props:{data_background_color:"#00353F",$$slots:{default:[bl]},$$scope:{ctx:x}}}),De=new J({props:{$$slots:{default:[Ll]},$$scope:{ctx:x}}}),Re=new J({props:{$$slots:{default:[ql]},$$scope:{ctx:x}}}),Ne=new J({props:{$$slots:{default:[wl]},$$scope:{ctx:x}}}),Ge=new J({props:{$$slots:{default:[Pl]},$$scope:{ctx:x}}}),{c(){S(e.$$.fragment),o=v(),S(l.$$.fragment),t=v(),S($.$$.fragment),a=v(),S(n.$$.fragment),m=v(),S(s.$$.fragment),c=v(),S(b.$$.fragment),u=v(),S(p.$$.fragment),q=v(),S(f.$$.fragment),L=v(),S(M.$$.fragment),w=v(),S(I.$$.fragment),B=v(),S(Q.$$.fragment),K=v(),S(D.$$.fragment),F=v(),S(ne.$$.fragment),O=v(),S(le.$$.fragment),ae=v(),S(ce.$$.fragment),re=v(),S(pe.$$.fragment),oe=v(),S($e.$$.fragment),fe=v(),S(me.$$.fragment),U=v(),S(te.$$.fragment),R=v(),S(se.$$.fragment),de=v(),S(_e.$$.fragment),V=v(),S(W.$$.fragment),ve=v(),S(he.$$.fragment),z=v(),S(X.$$.fragment),k=v(),S(Y.$$.fragment),qe=v(),S(ge.$$.fragment),we=v(),S(be.$$.fragment),Ae=v(),S(Le.$$.fragment),Te=v(),S(Pe.$$.fragment),Ie=v(),S(Me.$$.fragment),ke=v(),S(He.$$.fragment),ze=v(),S(Ee.$$.fragment),Je=v(),S(Se.$$.fragment),Be=v(),S(De.$$.fragment),Fe=v(),S(Re.$$.fragment),Qe=v(),S(Ne.$$.fragment),Ke=v(),S(Ge.$$.fragment)},l(P){E(e.$$.fragment,P),o=d(P),E(l.$$.fragment,P),t=d(P),E($.$$.fragment,P),a=d(P),E(n.$$.fragment,P),m=d(P),E(s.$$.fragment,P),c=d(P),E(b.$$.fragment,P),u=d(P),E(p.$$.fragment,P),q=d(P),E(f.$$.fragment,P),L=d(P),E(M.$$.fragment,P),w=d(P),E(I.$$.fragment,P),B=d(P),E(Q.$$.fragment,P),K=d(P),E(D.$$.fragment,P),F=d(P),E(ne.$$.fragment,P),O=d(P),E(le.$$.fragment,P),ae=d(P),E(ce.$$.fragment,P),re=d(P),E(pe.$$.fragment,P),oe=d(P),E($e.$$.fragment,P),fe=d(P),E(me.$$.fragment,P),U=d(P),E(te.$$.fragment,P),R=d(P),E(se.$$.fragment,P),de=d(P),E(_e.$$.fragment,P),V=d(P),E(W.$$.fragment,P),ve=d(P),E(he.$$.fragment,P),z=d(P),E(X.$$.fragment,P),k=d(P),E(Y.$$.fragment,P),qe=d(P),E(ge.$$.fragment,P),we=d(P),E(be.$$.fragment,P),Ae=d(P),E(Le.$$.fragment,P),Te=d(P),E(Pe.$$.fragment,P),Ie=d(P),E(Me.$$.fragment,P),ke=d(P),E(He.$$.fragment,P),ze=d(P),E(Ee.$$.fragment,P),Je=d(P),E(Se.$$.fragment,P),Be=d(P),E(De.$$.fragment,P),Fe=d(P),E(Re.$$.fragment,P),Qe=d(P),E(Ne.$$.fragment,P),Ke=d(P),E(Ge.$$.fragment,P)},m(P,G){T(e,P,G),r(P,o,G),T(l,P,G),r(P,t,G),T($,P,G),r(P,a,G),T(n,P,G),r(P,m,G),T(s,P,G),r(P,c,G),T(b,P,G),r(P,u,G),T(p,P,G),r(P,q,G),T(f,P,G),r(P,L,G),T(M,P,G),r(P,w,G),T(I,P,G),r(P,B,G),T(Q,P,G),r(P,K,G),T(D,P,G),r(P,F,G),T(ne,P,G),r(P,O,G),T(le,P,G),r(P,ae,G),T(ce,P,G),r(P,re,G),T(pe,P,G),r(P,oe,G),T($e,P,G),r(P,fe,G),T(me,P,G),r(P,U,G),T(te,P,G),r(P,R,G),T(se,P,G),r(P,de,G),T(_e,P,G),r(P,V,G),T(W,P,G),r(P,ve,G),T(he,P,G),r(P,z,G),T(X,P,G),r(P,k,G),T(Y,P,G),r(P,qe,G),T(ge,P,G),r(P,we,G),T(be,P,G),r(P,Ae,G),T(Le,P,G),r(P,Te,G),T(Pe,P,G),r(P,Ie,G),T(Me,P,G),r(P,ke,G),T(He,P,G),r(P,ze,G),T(Ee,P,G),r(P,Je,G),T(Se,P,G),r(P,Be,G),T(De,P,G),r(P,Fe,G),T(Re,P,G),r(P,Qe,G),T(Ne,P,G),r(P,Ke,G),T(Ge,P,G),Ye=!0},p(P,G){const We={};G&1&&(We.$$scope={dirty:G,ctx:P}),e.$set(We);const Ze={};G&1&&(Ze.$$scope={dirty:G,ctx:P}),l.$set(Ze);const ye={};G&1&&(ye.$$scope={dirty:G,ctx:P}),$.$set(ye);const et={};G&1&&(et.$$scope={dirty:G,ctx:P}),n.$set(et);const tt={};G&1&&(tt.$$scope={dirty:G,ctx:P}),s.$set(tt);const st={};G&1&&(st.$$scope={dirty:G,ctx:P}),b.$set(st);const lt={};G&1&&(lt.$$scope={dirty:G,ctx:P}),p.$set(lt);const nt={};G&1&&(nt.$$scope={dirty:G,ctx:P}),f.$set(nt);const it={};G&1&&(it.$$scope={dirty:G,ctx:P}),M.$set(it);const at={};G&1&&(at.$$scope={dirty:G,ctx:P}),I.$set(at);const rt={};G&1&&(rt.$$scope={dirty:G,ctx:P}),Q.$set(rt);const ut={};G&1&&(ut.$$scope={dirty:G,ctx:P}),D.$set(ut);const ot={};G&1&&(ot.$$scope={dirty:G,ctx:P}),ne.$set(ot);const ft={};G&1&&(ft.$$scope={dirty:G,ctx:P}),le.$set(ft);const ct={};G&1&&(ct.$$scope={dirty:G,ctx:P}),ce.$set(ct);const $t={};G&1&&($t.$$scope={dirty:G,ctx:P}),pe.$set($t);const pt={};G&1&&(pt.$$scope={dirty:G,ctx:P}),$e.$set(pt);const mt={};G&1&&(mt.$$scope={dirty:G,ctx:P}),me.$set(mt);const dt={};G&1&&(dt.$$scope={dirty:G,ctx:P}),te.$set(dt);const vt={};G&1&&(vt.$$scope={dirty:G,ctx:P}),se.$set(vt);const xt={};G&1&&(xt.$$scope={dirty:G,ctx:P}),_e.$set(xt);const Ct={};G&1&&(Ct.$$scope={dirty:G,ctx:P}),W.$set(Ct);const _t={};G&1&&(_t.$$scope={dirty:G,ctx:P}),he.$set(_t);const ht={};G&1&&(ht.$$scope={dirty:G,ctx:P}),X.$set(ht);const gt={};G&1&&(gt.$$scope={dirty:G,ctx:P}),Y.$set(gt);const bt={};G&1&&(bt.$$scope={dirty:G,ctx:P}),ge.$set(bt);const Lt={};G&1&&(Lt.$$scope={dirty:G,ctx:P}),be.$set(Lt);const qt={};G&1&&(qt.$$scope={dirty:G,ctx:P}),Le.$set(qt);const wt={};G&1&&(wt.$$scope={dirty:G,ctx:P}),Pe.$set(wt);const Pt={};G&1&&(Pt.$$scope={dirty:G,ctx:P}),Me.$set(Pt);const Mt={};G&1&&(Mt.$$scope={dirty:G,ctx:P}),He.$set(Mt);const Ht={};G&1&&(Ht.$$scope={dirty:G,ctx:P}),Ee.$set(Ht);const jt={};G&1&&(jt.$$scope={dirty:G,ctx:P}),Se.$set(jt);const At={};G&1&&(At.$$scope={dirty:G,ctx:P}),De.$set(At);const Tt={};G&1&&(Tt.$$scope={dirty:G,ctx:P}),Re.$set(Tt);const Et={};G&1&&(Et.$$scope={dirty:G,ctx:P}),Ne.$set(Et);const St={};G&1&&(St.$$scope={dirty:G,ctx:P}),Ge.$set(St)},i(P){Ye||(A(e.$$.fragment,P),A(l.$$.fragment,P),A($.$$.fragment,P),A(n.$$.fragment,P),A(s.$$.fragment,P),A(b.$$.fragment,P),A(p.$$.fragment,P),A(f.$$.fragment,P),A(M.$$.fragment,P),A(I.$$.fragment,P),A(Q.$$.fragment,P),A(D.$$.fragment,P),A(ne.$$.fragment,P),A(le.$$.fragment,P),A(ce.$$.fragment,P),A(pe.$$.fragment,P),A($e.$$.fragment,P),A(me.$$.fragment,P),A(te.$$.fragment,P),A(se.$$.fragment,P),A(_e.$$.fragment,P),A(W.$$.fragment,P),A(he.$$.fragment,P),A(X.$$.fragment,P),A(Y.$$.fragment,P),A(ge.$$.fragment,P),A(be.$$.fragment,P),A(Le.$$.fragment,P),A(Pe.$$.fragment,P),A(Me.$$.fragment,P),A(He.$$.fragment,P),A(Ee.$$.fragment,P),A(Se.$$.fragment,P),A(De.$$.fragment,P),A(Re.$$.fragment,P),A(Ne.$$.fragment,P),A(Ge.$$.fragment,P),Ye=!0)},o(P){j(e.$$.fragment,P),j(l.$$.fragment,P),j($.$$.fragment,P),j(n.$$.fragment,P),j(s.$$.fragment,P),j(b.$$.fragment,P),j(p.$$.fragment,P),j(f.$$.fragment,P),j(M.$$.fragment,P),j(I.$$.fragment,P),j(Q.$$.fragment,P),j(D.$$.fragment,P),j(ne.$$.fragment,P),j(le.$$.fragment,P),j(ce.$$.fragment,P),j(pe.$$.fragment,P),j($e.$$.fragment,P),j(me.$$.fragment,P),j(te.$$.fragment,P),j(se.$$.fragment,P),j(_e.$$.fragment,P),j(W.$$.fragment,P),j(he.$$.fragment,P),j(X.$$.fragment,P),j(Y.$$.fragment,P),j(ge.$$.fragment,P),j(be.$$.fragment,P),j(Le.$$.fragment,P),j(Pe.$$.fragment,P),j(Me.$$.fragment,P),j(He.$$.fragment,P),j(Ee.$$.fragment,P),j(Se.$$.fragment,P),j(De.$$.fragment,P),j(Re.$$.fragment,P),j(Ne.$$.fragment,P),j(Ge.$$.fragment,P),Ye=!1},d(P){P&&(i(o),i(t),i(a),i(m),i(c),i(u),i(q),i(L),i(w),i(B),i(K),i(F),i(O),i(ae),i(re),i(oe),i(fe),i(U),i(R),i(de),i(V),i(ve),i(z),i(k),i(qe),i(we),i(Ae),i(Te),i(Ie),i(ke),i(ze),i(Je),i(Be),i(Fe),i(Qe),i(Ke)),H(e,P),H(l,P),H($,P),H(n,P),H(s,P),H(b,P),H(p,P),H(f,P),H(M,P),H(I,P),H(Q,P),H(D,P),H(ne,P),H(le,P),H(ce,P),H(pe,P),H($e,P),H(me,P),H(te,P),H(se,P),H(_e,P),H(W,P),H(he,P),H(X,P),H(Y,P),H(ge,P),H(be,P),H(Le,P),H(Pe,P),H(Me,P),H(He,P),H(Ee,P),H(Se,P),H(De,P),H(Re,P),H(Ne,P),H(Ge,P)}}}function Hl(x){let e,o;return e=new J({props:{$$slots:{default:[Ml]},$$scope:{ctx:x}}}),{c(){S(e.$$.fragment)},l(l){E(e.$$.fragment,l)},m(l,t){T(e,l,t),o=!0},p(l,[t]){const $={};t&1&&($.$$scope={dirty:t,ctx:l}),e.$set($)},i(l){o||(A(e.$$.fragment,l),o=!0)},o(l){j(e.$$.fragment,l),o=!1},d(l){H(e,l)}}}class jl extends Oe{constructor(e){super(),Ue(this,e,null,Hl,Ve,{})}}function Al(x){let e,o="Et si on ne veut pas hériter ?",l,t,$="L'héritage, c'est puissant... mais pas toujours adapté.",a,n,m='<p class="text-2xl">🤔 Une Voiture <b>est un</b> Moteur ?</p> <p class="text-red-400 text-3xl fragment">❌ Non !</p>',s,c,b='<p class="text-2xl">🤔 Une Voiture <b>a un</b> Moteur ?</p> <p class="text-green-400 text-3xl fragment">✅ Oui !</p>',u,p,q='C&#39;est la <span class="text-important">composition</span> !';return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.textContent=$,a=v(),n=_("div"),n.innerHTML=m,s=v(),c=_("div"),c.innerHTML=b,u=v(),p=_("p"),p.innerHTML=q,this.h()},l(f){e=C(f,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-kyeugj"&&(e.textContent=o),l=d(f),t=C(f,"P",{"data-svelte-h":!0}),g(t)!=="svelte-135l6z7"&&(t.textContent=$),a=d(f),n=C(f,"DIV",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-bjhwhv"&&(n.innerHTML=m),s=d(f),c=C(f,"DIV",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-1iidfrd"&&(c.innerHTML=b),u=d(f),p=C(f,"P",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-11ppavm"&&(p.innerHTML=q),this.h()},h(){h(n,"class","fragment mt-8"),h(c,"class","fragment mt-4"),h(p,"class","fragment mt-8 text-accent-200 font-bold")},m(f,L){r(f,e,L),r(f,l,L),r(f,t,L),r(f,a,L),r(f,n,L),r(f,s,L),r(f,c,L),r(f,u,L),r(f,p,L)},p:N,d(f){f&&(i(e),i(l),i(t),i(a),i(n),i(s),i(c),i(u),i(p))}}}function Tl(x){let e,o="Qu'est-ce que la composition ?",l,t,$="La composition permet de créer des objets complexes en combinant des objets plus simples.",a,n,m="C&#39;est comme assembler des <b>briques Lego</b> pour construire une structure plus grande.",s,c,b='En POO, la composition consiste à avoir des <span class="text-important">instances de classes en tant qu&#39;attributs</span> d&#39;une autre classe.',u,p,q=`Si vous connaissez les bases de données, c'est comme une clé étrangère. Un objet "possède" un
			autre objet.`;return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.textContent=$,a=v(),n=_("p"),n.innerHTML=m,s=v(),c=_("p"),c.innerHTML=b,u=v(),p=_("aside"),p.textContent=q,this.h()},l(f){e=C(f,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1ey692r"&&(e.textContent=o),l=d(f),t=C(f,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1j30nsj"&&(t.textContent=$),a=d(f),n=C(f,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-12yvhve"&&(n.innerHTML=m),s=d(f),c=C(f,"P",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-1dofonx"&&(c.innerHTML=b),u=d(f),p=C(f,"ASIDE",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-1gjj4rn"&&(p.textContent=q),this.h()},h(){h(n,"class","fragment mt-4"),h(c,"class","fragment mt-4"),h(p,"class","notes")},m(f,L){r(f,e,L),r(f,l,L),r(f,t,L),r(f,a,L),r(f,n,L),r(f,s,L),r(f,c,L),r(f,u,L),r(f,p,L)},p:N,d(f){f&&(i(e),i(l),i(t),i(a),i(n),i(s),i(c),i(u),i(p))}}}function El(x){let e,o="Comment choisir : Héritage ou Composition ?",l,t,$='<div class="p-6 bg-accent-950 rounded-lg"><p class="fragment">🤔 &quot;Est-ce qu&#39;un X <b class="text-important">est un</b> Y ?&quot;</p> <p class="fragment text-green-400 ml-8">→ OUI : <b>Héritage</b> (extends)</p> <p class="fragment text-red-400 ml-8">→ NON : ↓</p> <p class="fragment mt-4">🤔 &quot;Est-ce qu&#39;un X <b class="text-important">a un</b> Y ?&quot;</p> <p class="fragment text-blue-400 ml-8">→ OUI : <b>Composition</b> (attribut)</p></div>',a,n,m=`C'est LA règle d'or. Apprenez-la par cœur. Si "X est un Y" sonne faux, n'héritez pas,
			composez.`;return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("div"),t.innerHTML=$,a=v(),n=_("aside"),n.textContent=m,this.h()},l(s){e=C(s,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1jpzxsy"&&(e.textContent=o),l=d(s),t=C(s,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1t58sxf"&&(t.innerHTML=$),a=d(s),n=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1bu2hun"&&(n.textContent=m),this.h()},h(){h(t,"class","text-2xl mt-8"),h(n,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function Sl(x){let e,o="Exemples concrets",l,t,$='<thead><tr><th class="p-3">Question</th> <th class="p-3">Réponse</th> <th class="p-3">Relation</th></tr></thead> <tbody><tr class="fragment"><td class="p-3">Un Chien <b>est un</b> Animal ?</td> <td class="p-3 text-green-400">✅ Oui</td> <td class="p-3">Héritage</td></tr> <tr class="fragment"><td class="p-3">Une Voiture <b>est un</b> Moteur ?</td> <td class="p-3 text-red-400">❌ Non</td> <td class="p-3">-</td></tr> <tr class="fragment"><td class="p-3">Une Voiture <b>a un</b> Moteur ?</td> <td class="p-3 text-green-400">✅ Oui</td> <td class="p-3">Composition</td></tr> <tr class="fragment"><td class="p-3">Un Maître <b>a un</b> Animal ?</td> <td class="p-3 text-green-400">✅ Oui</td> <td class="p-3">Composition</td></tr></tbody>',a,n,m=`Faites cet exercice mental à chaque fois que vous modélisez. C'est automatique avec
			l'expérience. En entretien d'embauche, on vous demande souvent : "Pourquoi avoir choisi
			héritage ou composition ici ?" Réponse : "Parce que dire 'Une Voiture est un Moteur' n'a pas
			de sens."`;return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("table"),t.innerHTML=$,a=v(),n=_("aside"),n.textContent=m,this.h()},l(s){e=C(s,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1yrhyzi"&&(e.textContent=o),l=d(s),t=C(s,"TABLE",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1lueyjo"&&(t.innerHTML=$),a=d(s),n=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-ig6cyi"&&(n.textContent=m),this.h()},h(){h(t,"class","text-xl mt-6"),h(n,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function Dl(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Il(x){let e,o="Exemple : Voiture et Moteur",l,t,$,a,n=`Le losange plein (◆) indique une <span class="text-important">composition</span> : la Voiture
			<b>possède</b> le Moteur.`,m;return t=new je({props:{$$slots:{default:[Dl]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),S(t.$$.fragment),$=v(),a=_("p"),a.innerHTML=n,this.h()},l(s){e=C(s,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-12o3qzv"&&(e.textContent=o),l=d(s),E(t.$$.fragment,s),$=d(s),a=C(s,"P",{class:!0,"data-svelte-h":!0}),g(a)!=="svelte-o544v4"&&(a.innerHTML=n),this.h()},h(){h(a,"class","fragment")},m(s,c){r(s,e,c),r(s,l,c),T(t,s,c),r(s,$,c),r(s,a,c),m=!0},p(s,c){const b={};c&1&&(b.$$scope={dirty:c,ctx:s}),t.$set(b)},i(s){m||(A(t.$$.fragment,s),m=!0)},o(s){j(t.$$.fragment,s),m=!1},d(s){s&&(i(e),i(l),i($),i(a)),H(t,s)}}}function kl(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function zl(x){let e,o="En code Java",l,t,$;return t=new ie({props:{lines:"1-8|10-20|22-25",$$slots:{default:[kl]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),S(t.$$.fragment)},l(a){e=C(a,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1w10xpg"&&(e.textContent=o),l=d(a),E(t.$$.fragment,a)},m(a,n){r(a,e,n),r(a,l,n),T(t,a,n),$=!0},p(a,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:a}),t.$set(m)},i(a){$||(A(t.$$.fragment,a),$=!0)},o(a){j(t.$$.fragment,a),$=!1},d(a){a&&(i(e),i(l)),H(t,a)}}}function Vl(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Ol(x){let e,o="Avantage : flexibilité",l,t,$="La composition favorise la <b>réutilisation</b> et la <b>flexibilité</b>.",a,n,m,s,c="On peut changer le moteur sans modifier la classe Voiture !",b,u,p=`C'est le principe "Composition over Inheritance" du Gang of Four. Préférez composer plutôt
			qu'hériter. L'héritage crée un couplage fort. La composition permet de changer de stratégie à
			l'exécution. C'est la base de nombreux Design Patterns : Strategy, Decorator, Adapter...`,q;return n=new ie({props:{$$slots:{default:[Vl]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.innerHTML=$,a=v(),S(n.$$.fragment),m=v(),s=_("p"),s.textContent=c,b=v(),u=_("aside"),u.textContent=p,this.h()},l(f){e=C(f,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1y64iq2"&&(e.textContent=o),l=d(f),t=C(f,"P",{"data-svelte-h":!0}),g(t)!=="svelte-mbviv2"&&(t.innerHTML=$),a=d(f),E(n.$$.fragment,f),m=d(f),s=C(f,"P",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-ybembw"&&(s.textContent=c),b=d(f),u=C(f,"ASIDE",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-1bwcsiy"&&(u.textContent=p),this.h()},h(){h(s,"class","fragment text-accent-200"),h(u,"class","notes")},m(f,L){r(f,e,L),r(f,l,L),r(f,t,L),r(f,a,L),T(n,f,L),r(f,m,L),r(f,s,L),r(f,b,L),r(f,u,L),q=!0},p(f,L){const M={};L&1&&(M.$$scope={dirty:L,ctx:f}),n.$set(M)},i(f){q||(A(n.$$.fragment,f),q=!0)},o(f){j(n.$$.fragment,f),q=!1},d(f){f&&(i(e),i(l),i(t),i(a),i(m),i(s),i(b),i(u)),H(n,f)}}}function Ul(x){let e,o="Les deux relations fondamentales",l,t,$="Le cœur de l'architecture objet",a,n,m=`Tout le reste de la POO découle de ces deux relations. Maîtrisez-les et vous maîtrisez 80% de
			l'architecture objet. Quand vous lisez du code, cherchez ces relations. Quand vous concevez,
			posez-vous ces questions.`;return{c(){e=_("h2"),e.textContent=o,l=v(),t=_("p"),t.textContent=$,a=v(),n=_("aside"),n.textContent=m,this.h()},l(s){e=C(s,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-fh7ab8"&&(e.textContent=o),l=d(s),t=C(s,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1cmiiew"&&(t.textContent=$),a=d(s),n=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-tu4ua3"&&(n.textContent=m),this.h()},h(){h(e,"class","text-5xl"),h(t,"class","text-2xl text-gray-400"),h(n,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function Rl(x){let e,o=`<p>L&#39;un des intérêts de la POO réside dans les <b>relations</b> entre les objets. Ces relations
				constituent l&#39;<span class="text-important">architecture</span> de votre application.</p> <dl class="mt-6 text-xl"><dt class="fragment"><strong class="text-important">&quot;est un&quot;</strong> (<em>is-a</em>)</dt><dd class="fragment ml-8"><p>Une classe peut être assimilée à une autre, plus générale. → <span class="text-important">Héritage</span></p> </dd><dt class="fragment mt-4"><strong class="text-important">&quot;a un&quot;</strong> (<em>has-a</em>)
				</dt><dd class="fragment ml-8"><p>Une classe dépend des services d&#39;une autre. → <span class="text-important">Composition</span></p></dd></dl>`,l,t,$=`Ces termes viennent de l'anglais et sont utilisés mondialement. Apprenez "is-a" et "has-a".
			Quand vous modélisez, reformulez toujours en français : "Un X est-il un Y ?" "Un X a-t-il un Y
			?" La réponse vous dit quelle relation utiliser. C'est mécanique.`;return{c(){e=_("div"),e.innerHTML=o,l=v(),t=_("aside"),t.textContent=$,this.h()},l(a){e=C(a,"DIV",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1hproaj"&&(e.innerHTML=o),l=d(a),t=C(a,"ASIDE",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-db092m"&&(t.textContent=$),this.h()},h(){h(e,"class",""),h(t,"class","notes")},m(a,n){r(a,e,n),r(a,l,n),r(a,t,n)},p:N,d(a){a&&(i(e),i(l),i(t))}}}function Nl(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Jl(x){let e,o="Exemple : Maître et Animal",l,t,$="Un Maître <b>a un</b> Animal (composition), et l&#39;Animal peut être un Chien ou un Chat (héritage).",a,n,m,s,c=`Cet exemple combine les deux concepts. C'est typique d'une architecture réelle. Le Maître ne
			connaît pas le type exact de son animal. Il sait juste que c'est un Animal. C'est de
			l'injection de dépendance avant l'heure ! Les frameworks comme Spring font exactement ça.`,b;return n=new je({props:{$$slots:{default:[Nl]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.innerHTML=$,a=v(),S(n.$$.fragment),m=v(),s=_("aside"),s.textContent=c,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1defcuq"&&(e.textContent=o),l=d(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1vsft0l"&&(t.innerHTML=$),a=d(u),E(n.$$.fragment,u),m=d(u),s=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-6gtlgp"&&(s.textContent=c),this.h()},h(){h(s,"class","notes")},m(u,p){r(u,e,p),r(u,l,p),r(u,t,p),r(u,a,p),T(n,u,p),r(u,m,p),r(u,s,p),b=!0},p(u,p){const q={};p&1&&(q.$$scope={dirty:p,ctx:u}),n.$set(q)},i(u){b||(A(n.$$.fragment,u),b=!0)},o(u){j(n.$$.fragment,u),b=!1},d(u){u&&(i(e),i(l),i(t),i(a),i(m),i(s)),H(n,u)}}}function Bl(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Fl(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Gl(x){let e,o="En code Java",l,t,$,a,n,m;return $=new ie({props:{class:"language-java",$$slots:{default:[Bl]},$$scope:{ctx:x}}}),n=new ie({props:{class:"language-java",$$slots:{default:[Fl]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("div"),S($.$$.fragment),a=v(),S(n.$$.fragment),this.h()},l(s){e=C(s,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1w10xpg"&&(e.textContent=o),l=d(s),t=C(s,"DIV",{class:!0});var c=ue(t);E($.$$.fragment,c),a=d(c),E(n.$$.fragment,c),c.forEach(i),this.h()},h(){h(t,"class","flex flex-row items-start gap-4")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),T($,t,null),ee(t,a),T(n,t,null),m=!0},p(s,c){const b={};c&1&&(b.$$scope={dirty:c,ctx:s}),$.$set(b);const u={};c&1&&(u.$$scope={dirty:c,ctx:s}),n.$set(u)},i(s){m||(A($.$$.fragment,s),A(n.$$.fragment,s),m=!0)},o(s){j($.$$.fragment,s),j(n.$$.fragment,s),m=!1},d(s){s&&(i(e),i(l),i(t)),H($),H(n)}}}function Ql(x){let e=`
Maitre jean = new Maitre(new Chien());
Maitre marie = new Maitre(new Chat());

jean.presenterAnimal();   // "Wouaf !"
marie.presenterAnimal();  // "Miaou !"

// On peut changer d'animal sans modifier la classe Maitre !
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Kl(x){let e,o="La puissance de la combinaison",l,t,$="Le Maître ne sait pas quel type d&#39;animal il a... et c&#39;est <b>voulu</b> !",a,n,m,s,c=`C&#39;est le <span class="text-important">polymorphisme</span> en action !<br/>
			(on le verra en détail plus tard)`,b,u,p=`C'est là que tout prend son sens. Composition + héritage + polymorphisme = architecture
			flexible. Si demain on ajoute un Perroquet, le code du Maître ne change pas. Zéro
			modification. C'est le principe Open/Closed en action : ouvert à l'extension, fermé à la
			modification.`,q;return n=new ie({props:{$$slots:{default:[Ql]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.innerHTML=$,a=v(),S(n.$$.fragment),m=v(),s=_("p"),s.innerHTML=c,b=v(),u=_("aside"),u.textContent=p,this.h()},l(f){e=C(f,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-cj68oa"&&(e.textContent=o),l=d(f),t=C(f,"P",{"data-svelte-h":!0}),g(t)!=="svelte-kzsg9e"&&(t.innerHTML=$),a=d(f),E(n.$$.fragment,f),m=d(f),s=C(f,"P",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-1rhcp8x"&&(s.innerHTML=c),b=d(f),u=C(f,"ASIDE",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-atbhqx"&&(u.textContent=p),this.h()},h(){h(s,"class","fragment text-accent-200 font-bold"),h(u,"class","notes")},m(f,L){r(f,e,L),r(f,l,L),r(f,t,L),r(f,a,L),T(n,f,L),r(f,m,L),r(f,s,L),r(f,b,L),r(f,u,L),q=!0},p(f,L){const M={};L&1&&(M.$$scope={dirty:L,ctx:f}),n.$set(M)},i(f){q||(A(n.$$.fragment,f),q=!0)},o(f){j(n.$$.fragment,f),q=!1},d(f){f&&(i(e),i(l),i(t),i(a),i(m),i(s),i(b),i(u)),H(n,f)}}}function Yl(x){let e,o="Composition vs Agrégation",l,t,$="Il existe une nuance importante :",a,n,m='<div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">◆ Composition</h4> <p class="text-xl mt-2">L&#39;objet contenu <b>appartient</b> à l&#39;objet conteneur.</p> <p class="text-sm text-gray-400 mt-2">Si la Voiture est détruite, le Moteur aussi.</p></div> <div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">◇ Agrégation</h4> <p class="text-xl mt-2">L&#39;objet contenu <b>existe indépendamment</b>.</p> <p class="text-sm text-gray-400 mt-2">Si l&#39;Équipe est dissoute, les Joueurs existent toujours.</p></div>',s,c,b=`En pratique, beaucoup de développeurs confondent les deux, et ce n'est pas grave. L'important
			c'est de se poser la question : "Si je supprime le conteneur, le contenu a-t-il encore un sens
			?" Une roue sans voiture = bizarre. Un joueur sans équipe = normal (il peut changer d'équipe).`;return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.textContent=$,a=v(),n=_("div"),n.innerHTML=m,s=v(),c=_("aside"),c.textContent=b,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-s3132y"&&(e.textContent=o),l=d(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1v8b0oy"&&(t.textContent=$),a=d(u),n=C(u,"DIV",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-5t1llc"&&(n.innerHTML=m),s=d(u),c=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-2sj58"&&(c.textContent=b),this.h()},h(){h(n,"class","grid grid-cols-2 gap-8 mt-6"),h(c,"class","notes")},m(u,p){r(u,e,p),r(u,l,p),r(u,t,p),r(u,a,p),r(u,n,p),r(u,s,p),r(u,c,p)},p:N,d(u){u&&(i(e),i(l),i(t),i(a),i(n),i(s),i(c))}}}function Xl(x){let e=`
@startuml
class Voiture
class Moteur
class Equipe
class Joueur

Voiture *-- Moteur : composition
Equipe o-- Joueur : agrégation
@enduml
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Wl(x){let e,o="En UML",l,t,$,a,n="◆ = Composition (losange plein) | ◇ = Agrégation (losange vide)",m,s,c=`En pratique, la différence est subtile. L'important c'est de comprendre qui "possède" quoi. En
			composition, le conteneur crée l'objet. En agrégation, on le reçoit de l'extérieur.`,b;return t=new je({props:{$$slots:{default:[Xl]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),S(t.$$.fragment),$=v(),a=_("p"),a.textContent=n,m=v(),s=_("aside"),s.textContent=c,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1dfk95l"&&(e.textContent=o),l=d(u),E(t.$$.fragment,u),$=d(u),a=C(u,"P",{class:!0,"data-svelte-h":!0}),g(a)!=="svelte-ze7nvt"&&(a.textContent=n),m=d(u),s=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-1iqya04"&&(s.textContent=c),this.h()},h(){h(a,"class","mt-4"),h(s,"class","notes")},m(u,p){r(u,e,p),r(u,l,p),T(t,u,p),r(u,$,p),r(u,a,p),r(u,m,p),r(u,s,p),b=!0},p(u,p){const q={};p&1&&(q.$$scope={dirty:p,ctx:u}),t.$set(q)},i(u){b||(A(t.$$.fragment,u),b=!0)},o(u){j(t.$$.fragment,u),b=!1},d(u){u&&(i(e),i(l),i($),i(a),i(m),i(s)),H(t,u)}}}function Zl(x){let e=`
class Voiture {
    // Le moteur est CRÉÉ par la voiture
    private Moteur moteur = new Moteur();
    
    // Si Voiture est garbage collecté,
    // Moteur l'est aussi
}
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function yl(x){let e=`
class Equipe {
    // Les joueurs sont REÇUS de l'extérieur
    private List<Joueur> joueurs;
    
    void ajouterJoueur(Joueur j) {
        joueurs.add(j);
    }
    // Les joueurs existent avant/après
}
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function en(x){let e,o="En code : qui crée quoi ?",l,t,$,a,n="◆ Composition",m,s,c,b,u,p="◇ Agrégation",q,f,L;return s=new ie({props:{class:"language-java",$$slots:{default:[Zl]},$$scope:{ctx:x}}}),f=new ie({props:{class:"language-java",$$slots:{default:[yl]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("div"),$=_("div"),a=_("h4"),a.textContent=n,m=v(),S(s.$$.fragment),c=v(),b=_("div"),u=_("h4"),u.textContent=p,q=v(),S(f.$$.fragment),this.h()},l(M){e=C(M,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-13g76yp"&&(e.textContent=o),l=d(M),t=C(M,"DIV",{class:!0});var w=ue(t);$=C(w,"DIV",{});var I=ue($);a=C(I,"H4",{class:!0,"data-svelte-h":!0}),g(a)!=="svelte-13iofgd"&&(a.textContent=n),m=d(I),E(s.$$.fragment,I),I.forEach(i),c=d(w),b=C(w,"DIV",{});var B=ue(b);u=C(B,"H4",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-b2romh"&&(u.textContent=p),q=d(B),E(f.$$.fragment,B),B.forEach(i),w.forEach(i),this.h()},h(){h(a,"class","text-important"),h(u,"class","text-important"),h(t,"class","grid grid-cols-2 gap-4")},m(M,w){r(M,e,w),r(M,l,w),r(M,t,w),ee(t,$),ee($,a),ee($,m),T(s,$,null),ee(t,c),ee(t,b),ee(b,u),ee(b,q),T(f,b,null),L=!0},p(M,w){const I={};w&1&&(I.$$scope={dirty:w,ctx:M}),s.$set(I);const B={};w&1&&(B.$$scope={dirty:w,ctx:M}),f.$set(B)},i(M){L||(A(s.$$.fragment,M),A(f.$$.fragment,M),L=!0)},o(M){j(s.$$.fragment,M),j(f.$$.fragment,M),L=!1},d(M){M&&(i(e),i(l),i(t)),H(s),H(f)}}}function tn(x){let e,o="Récapitulatif",l,t,$='<thead><tr><th class="p-3">Relation</th> <th class="p-3">Question</th> <th class="p-3">Implémentation</th> <th class="p-3">UML</th></tr></thead> <tbody><tr class="fragment"><td class="p-3 text-important">Héritage</td> <td class="p-3">&quot;X est un Y&quot;</td> <td class="p-3"><code>extends</code></td> <td class="p-3">Flèche △</td></tr> <tr class="fragment"><td class="p-3 text-important">Composition</td> <td class="p-3">&quot;X a un Y&quot; (possède)</td> <td class="p-3">Attribut (créé)</td> <td class="p-3">Losange ◆</td></tr> <tr class="fragment"><td class="p-3 text-important">Agrégation</td> <td class="p-3">&quot;X a un Y&quot; (référence)</td> <td class="p-3">Attribut (reçu)</td> <td class="p-3">Losange ◇</td></tr></tbody>',a,n,m=`Gardez ce tableau en tête. C'est la base de toute modélisation objet. En UML, on utilise ces
			symboles. En entretien, on vous demandera de dessiner ces diagrammes. Prochaine étape : les
			interfaces, pour aller encore plus loin dans l'abstraction.`;return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("table"),t.innerHTML=$,a=v(),n=_("aside"),n.textContent=m,this.h()},l(s){e=C(s,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-ri7iuh"&&(e.textContent=o),l=d(s),t=C(s,"TABLE",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-9czqcv"&&(t.innerHTML=$),a=d(s),n=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1hwoc6u"&&(n.textContent=m),this.h()},h(){h(t,"class","text-xl"),h(n,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function sn(x){let e,o="La composition",l,t,$,a,n,m,s,c,b,u,p,q,f,L,M,w,I,B,Q,K,D,F,ne,O,le,ae,ce,re,pe,oe,$e,fe,me;return t=new J({props:{$$slots:{default:[Al]},$$scope:{ctx:x}}}),a=new J({props:{$$slots:{default:[Tl]},$$scope:{ctx:x}}}),m=new J({props:{$$slots:{default:[El]},$$scope:{ctx:x}}}),c=new J({props:{$$slots:{default:[Sl]},$$scope:{ctx:x}}}),u=new J({props:{$$slots:{default:[Il]},$$scope:{ctx:x}}}),q=new J({props:{$$slots:{default:[zl]},$$scope:{ctx:x}}}),L=new J({props:{$$slots:{default:[Ol]},$$scope:{ctx:x}}}),w=new J({props:{data_background_color:"#1a1a2e",$$slots:{default:[Ul]},$$scope:{ctx:x}}}),B=new J({props:{$$slots:{default:[Rl]},$$scope:{ctx:x}}}),K=new J({props:{$$slots:{default:[Jl]},$$scope:{ctx:x}}}),F=new J({props:{$$slots:{default:[Gl]},$$scope:{ctx:x}}}),O=new J({props:{$$slots:{default:[Kl]},$$scope:{ctx:x}}}),ae=new J({props:{$$slots:{default:[Yl]},$$scope:{ctx:x}}}),re=new J({props:{$$slots:{default:[Wl]},$$scope:{ctx:x}}}),oe=new J({props:{$$slots:{default:[en]},$$scope:{ctx:x}}}),fe=new J({props:{$$slots:{default:[tn]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),S(t.$$.fragment),$=v(),S(a.$$.fragment),n=v(),S(m.$$.fragment),s=v(),S(c.$$.fragment),b=v(),S(u.$$.fragment),p=v(),S(q.$$.fragment),f=v(),S(L.$$.fragment),M=v(),S(w.$$.fragment),I=v(),S(B.$$.fragment),Q=v(),S(K.$$.fragment),D=v(),S(F.$$.fragment),ne=v(),S(O.$$.fragment),le=v(),S(ae.$$.fragment),ce=v(),S(re.$$.fragment),pe=v(),S(oe.$$.fragment),$e=v(),S(fe.$$.fragment)},l(U){e=C(U,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1dl0775"&&(e.textContent=o),l=d(U),E(t.$$.fragment,U),$=d(U),E(a.$$.fragment,U),n=d(U),E(m.$$.fragment,U),s=d(U),E(c.$$.fragment,U),b=d(U),E(u.$$.fragment,U),p=d(U),E(q.$$.fragment,U),f=d(U),E(L.$$.fragment,U),M=d(U),E(w.$$.fragment,U),I=d(U),E(B.$$.fragment,U),Q=d(U),E(K.$$.fragment,U),D=d(U),E(F.$$.fragment,U),ne=d(U),E(O.$$.fragment,U),le=d(U),E(ae.$$.fragment,U),ce=d(U),E(re.$$.fragment,U),pe=d(U),E(oe.$$.fragment,U),$e=d(U),E(fe.$$.fragment,U)},m(U,te){r(U,e,te),r(U,l,te),T(t,U,te),r(U,$,te),T(a,U,te),r(U,n,te),T(m,U,te),r(U,s,te),T(c,U,te),r(U,b,te),T(u,U,te),r(U,p,te),T(q,U,te),r(U,f,te),T(L,U,te),r(U,M,te),T(w,U,te),r(U,I,te),T(B,U,te),r(U,Q,te),T(K,U,te),r(U,D,te),T(F,U,te),r(U,ne,te),T(O,U,te),r(U,le,te),T(ae,U,te),r(U,ce,te),T(re,U,te),r(U,pe,te),T(oe,U,te),r(U,$e,te),T(fe,U,te),me=!0},p(U,te){const R={};te&1&&(R.$$scope={dirty:te,ctx:U}),t.$set(R);const se={};te&1&&(se.$$scope={dirty:te,ctx:U}),a.$set(se);const de={};te&1&&(de.$$scope={dirty:te,ctx:U}),m.$set(de);const _e={};te&1&&(_e.$$scope={dirty:te,ctx:U}),c.$set(_e);const V={};te&1&&(V.$$scope={dirty:te,ctx:U}),u.$set(V);const W={};te&1&&(W.$$scope={dirty:te,ctx:U}),q.$set(W);const ve={};te&1&&(ve.$$scope={dirty:te,ctx:U}),L.$set(ve);const he={};te&1&&(he.$$scope={dirty:te,ctx:U}),w.$set(he);const z={};te&1&&(z.$$scope={dirty:te,ctx:U}),B.$set(z);const X={};te&1&&(X.$$scope={dirty:te,ctx:U}),K.$set(X);const k={};te&1&&(k.$$scope={dirty:te,ctx:U}),F.$set(k);const Y={};te&1&&(Y.$$scope={dirty:te,ctx:U}),O.$set(Y);const qe={};te&1&&(qe.$$scope={dirty:te,ctx:U}),ae.$set(qe);const ge={};te&1&&(ge.$$scope={dirty:te,ctx:U}),re.$set(ge);const we={};te&1&&(we.$$scope={dirty:te,ctx:U}),oe.$set(we);const be={};te&1&&(be.$$scope={dirty:te,ctx:U}),fe.$set(be)},i(U){me||(A(t.$$.fragment,U),A(a.$$.fragment,U),A(m.$$.fragment,U),A(c.$$.fragment,U),A(u.$$.fragment,U),A(q.$$.fragment,U),A(L.$$.fragment,U),A(w.$$.fragment,U),A(B.$$.fragment,U),A(K.$$.fragment,U),A(F.$$.fragment,U),A(O.$$.fragment,U),A(ae.$$.fragment,U),A(re.$$.fragment,U),A(oe.$$.fragment,U),A(fe.$$.fragment,U),me=!0)},o(U){j(t.$$.fragment,U),j(a.$$.fragment,U),j(m.$$.fragment,U),j(c.$$.fragment,U),j(u.$$.fragment,U),j(q.$$.fragment,U),j(L.$$.fragment,U),j(w.$$.fragment,U),j(B.$$.fragment,U),j(K.$$.fragment,U),j(F.$$.fragment,U),j(O.$$.fragment,U),j(ae.$$.fragment,U),j(re.$$.fragment,U),j(oe.$$.fragment,U),j(fe.$$.fragment,U),me=!1},d(U){U&&(i(e),i(l),i($),i(n),i(s),i(b),i(p),i(f),i(M),i(I),i(Q),i(D),i(ne),i(le),i(ce),i(pe),i($e)),H(t,U),H(a,U),H(m,U),H(c,U),H(u,U),H(q,U),H(L,U),H(w,U),H(B,U),H(K,U),H(F,U),H(O,U),H(ae,U),H(re,U),H(oe,U),H(fe,U)}}}function ln(x){let e,o;return e=new J({props:{$$slots:{default:[sn]},$$scope:{ctx:x}}}),{c(){S(e.$$.fragment)},l(l){E(e.$$.fragment,l)},m(l,t){T(e,l,t),o=!0},p(l,[t]){const $={};t&1&&($.$$scope={dirty:t,ctx:l}),e.$set($)},i(l){o||(A(e.$$.fragment,l),o=!0)},o(l){j(e.$$.fragment,l),o=!1},d(l){H(e,l)}}}class nn extends Oe{constructor(e){super(),Ue(this,e,null,ln,Ve,{})}}function an(x){let e=`
                abstract class Animal {}
                abstract class AnimalVolant extends Animal {}
                abstract class AnimalNageur extends Animal {}
                class Canard extends AnimalVolant, AnimalNageur {}
            `,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function rn(x){let e,o="L'héritage multiple",l,t,$="Comment hériter de deux classes ?",a,n,m,s,c=`En Java, ce n&#39;est pas possible !
			<br/> En revanche, on peut utiliser une interface pour simuler l&#39;héritage multiple.`,b,u,p=`L'héritage multiple existe en C++, mais ça crée le fameux "problème du diamant" : si deux
			parents ont la même méthode, laquelle appeler ? Java a choisi d'interdire l'héritage multiple
			de classes pour éviter ces ambiguïtés. Le canard est l'exemple parfait : il vole ET il nage.
			Comment modéliser ça sans héritage multiple ?`,q;return n=new je({props:{$$slots:{default:[an]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.textContent=$,a=v(),S(n.$$.fragment),m=v(),s=_("p"),s.innerHTML=c,b=v(),u=_("aside"),u.textContent=p,this.h()},l(f){e=C(f,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-lz4bxy"&&(e.textContent=o),l=d(f),t=C(f,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1py5itu"&&(t.textContent=$),a=d(f),E(n.$$.fragment,f),m=d(f),s=C(f,"P",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-mtdftf"&&(s.innerHTML=c),b=d(f),u=C(f,"ASIDE",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-11kv8kj"&&(u.textContent=p),this.h()},h(){h(s,"class","fragment"),h(u,"class","notes")},m(f,L){r(f,e,L),r(f,l,L),r(f,t,L),r(f,a,L),T(n,f,L),r(f,m,L),r(f,s,L),r(f,b,L),r(f,u,L),q=!0},p(f,L){const M={};L&1&&(M.$$scope={dirty:L,ctx:f}),n.$set(M)},i(f){q||(A(n.$$.fragment,f),q=!0)},o(f){j(n.$$.fragment,f),q=!1},d(f){f&&(i(e),i(l),i(t),i(a),i(m),i(s),i(b),i(u)),H(n,f)}}}function un(x){let e,o;return e=new J({props:{$$slots:{default:[rn]},$$scope:{ctx:x}}}),{c(){S(e.$$.fragment)},l(l){E(e.$$.fragment,l)},m(l,t){T(e,l,t),o=!0},p(l,t){const $={};t&1&&($.$$scope={dirty:t,ctx:l}),e.$set($)},i(l){o||(A(e.$$.fragment,l),o=!0)},o(l){j(e.$$.fragment,l),o=!1},d(l){H(e,l)}}}function on(x){let e=`
    
    public interface ArticleLouable {
      float reserver(Date from, Date to); 
      float rendre(int penalite);    
    }
        `,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function fn(x){let e,o=`Une interface est un type de référence similaire à une classe abstraite qui ne contient que
			des méthodes abstraites.`,l,t,$=`Une interface n'a pas de code "par défaut", seulement des signatures de méthodes.`,a,n,m,s,c=`Une interface, c'est un "contrat". Elle dit : "Toute classe qui m'implémente DOIT avoir ces
			méthodes." C'est le niveau d'abstraction le plus élevé en Java. Aucune implémentation, juste
			des promesses. Depuis Java 8, on peut avoir des méthodes "default" avec du code, mais c'est
			l'exception, pas la règle.`,b;return n=new ie({props:{$$slots:{default:[on]},$$scope:{ctx:x}}}),{c(){e=_("p"),e.textContent=o,l=v(),t=_("p"),t.textContent=$,a=v(),S(n.$$.fragment),m=v(),s=_("aside"),s.textContent=c,this.h()},l(u){e=C(u,"P",{"data-svelte-h":!0}),g(e)!=="svelte-zve5wp"&&(e.textContent=o),l=d(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1phkx1u"&&(t.textContent=$),a=d(u),E(n.$$.fragment,u),m=d(u),s=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-18c88ea"&&(s.textContent=c),this.h()},h(){h(s,"class","notes")},m(u,p){r(u,e,p),r(u,l,p),r(u,t,p),r(u,a,p),T(n,u,p),r(u,m,p),r(u,s,p),b=!0},p(u,p){const q={};p&1&&(q.$$scope={dirty:p,ctx:u}),n.$set(q)},i(u){b||(A(n.$$.fragment,u),b=!0)},o(u){j(n.$$.fragment,u),b=!1},d(u){u&&(i(e),i(l),i(t),i(a),i(m),i(s)),H(n,u)}}}function cn(x){let e,o="Implémentation d’une interface",l,t,$=`Une classe signale les interfaces qu’elle implémente grâce au mot-clé <code>implements</code>.
			Une classe concrète doit fournir une implémentation pour toutes les méthodes d’une interface,
			soit dans sa déclaration, soit parce qu’elle en hérite.`,a,n,m=`C'est la différence clé avec l'héritage : on "extends" une classe, on "implements" une
			interface. Et surtout : on peut implémenter PLUSIEURS interfaces, contrairement à l'héritage.
			Si vous oubliez d'implémenter une méthode, le compilateur vous le dira.`;return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.innerHTML=$,a=v(),n=_("aside"),n.textContent=m,this.h()},l(s){e=C(s,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-6vv8ym"&&(e.textContent=o),l=d(s),t=C(s,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1vu2bky"&&(t.innerHTML=$),a=d(s),n=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-sn5kmm"&&(n.textContent=m),this.h()},h(){h(n,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function $n(x){let e=`
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
    `,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function pn(x){let e,o="Implémentation d’une interface",l,t,$,a,n=`Notez qu'on peut combiner extends ET implements. SiegeAuto hérite d'Accessoire ET implémente
			ArticleLouable. C'est très courant en pratique. Une classe a souvent une hiérarchie ET des
			capacités additionnelles. L'ordre est important : extends AVANT implements !`,m;return t=new ie({props:{className:"h-[70vh]",$$slots:{default:[$n]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),S(t.$$.fragment),$=v(),a=_("aside"),a.textContent=n,this.h()},l(s){e=C(s,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-6vv8ym"&&(e.textContent=o),l=d(s),E(t.$$.fragment,s),$=d(s),a=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(a)!=="svelte-qpvial"&&(a.textContent=n),this.h()},h(){h(a,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),T(t,s,c),r(s,$,c),r(s,a,c),m=!0},p(s,c){const b={};c&1&&(b.$$scope={dirty:c,ctx:s}),t.$set(b)},i(s){m||(A(t.$$.fragment,s),m=!0)},o(s){j(t.$$.fragment,s),m=!1},d(s){s&&(i(e),i(l),i($),i(a)),H(t,s)}}}function mn(x){let e,o="Implémentation d’une interface",l,t,$=`Une interface permet de mutualiser une implémentation entre des classes qui n’ont pas de lien
			d’héritage.<br/>
			Si une classe implémente une interface, ses classes dérivées héritent de cette implémentation, mais
			il est toutefois possible de la surcharger.`,a,n,m=`C'est là toute la puissance des interfaces. Un Avion et un Oiseau n'ont rien en commun... sauf
			qu'ils volent. Avec une interface Volant, on peut les traiter de la même façon pour tout ce
			qui concerne le vol. C'est le principe de "programmation par contrat" : on programme contre
			une interface, pas une implémentation.`;return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.innerHTML=$,a=v(),n=_("aside"),n.textContent=m,this.h()},l(s){e=C(s,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-6vv8ym"&&(e.textContent=o),l=d(s),t=C(s,"P",{"data-svelte-h":!0}),g(t)!=="svelte-cgrkq0"&&(t.innerHTML=$),a=d(s),n=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1g9blqi"&&(n.textContent=m),this.h()},h(){h(n,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function dn(x){let e,o="Comment choisir entre une classe abstraite et une interface ?",l,t,$=`<li><b>Classe abstraite</b> : Si, fondamentalement, on peut dire &quot;Un Dauphin est un Animal&quot;,
				alors, vous <i>pouvez</i> utiliser une classe abstraite.<br/></li> <li><b>Interface</b> : S&#39;il est plus juste de dire &quot;Un Dauphin peut nager&quot;, alors vous
				<i>devriez</i>
				utiliser une interface.
				<ul><li>Si quelque chose qui n&#39;aurait rien à voir avec vos animaux pouvait nager, utilisez une
						interface.<br/>
						Par exemple, un avion et un oiseau peuvent voler, mais ils n&#39;ont rien à voir l&#39;un avec l&#39;autre.</li> <li>Sinon, prévoyez plutôt une interface si vous pensez qu&#39;une classe fille pourrait avoir
						besoin d&#39;hériter de plusieurs classes.</li></ul></li>`,a,n,m=`C'est LA question qu'on vous posera en entretien d'embauche ! Retenez bien cette règle. "Est
			un" → classe abstraite (relation d'identité) "Peut faire" → interface (capacité) Dans le
			doute, préférez l'interface. C'est plus flexible et ça suit le principe de composition over
			inheritance.`;return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("ul"),t.innerHTML=$,a=v(),n=_("aside"),n.textContent=m,this.h()},l(s){e=C(s,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-95djsx"&&(e.textContent=o),l=d(s),t=C(s,"UL",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1bl7mxh"&&(t.innerHTML=$),a=d(s),n=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-8pa8gb"&&(n.textContent=m),this.h()},h(){h(t,"class","text-4xl"),h(n,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function vn(x){let e=`
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
        `,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function xn(x){let e=`
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

                `,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Cn(x){let e,o="Comment choisir entre une classe abstraite et une interface ?",l,t,$,a,n,m,s,c=`À gauche avec les interfaces : propre, flexible. À droite sans : explosion combinatoire de classes.
			C'est le fameux problème "Mammifère qui nage ET qui pond" → impossible sans interface.
			En pratique, les interfaces résolvent 90% des problèmes de modélisation complexe.`,b;return $=new je({props:{$$slots:{default:[vn]},$$scope:{ctx:x}}}),n=new je({props:{$$slots:{default:[xn]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("div"),S($.$$.fragment),a=v(),S(n.$$.fragment),m=v(),s=_("aside"),s.textContent=c,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-95djsx"&&(e.textContent=o),l=d(u),t=C(u,"DIV",{class:!0});var p=ue(t);E($.$$.fragment,p),a=d(p),E(n.$$.fragment,p),p.forEach(i),m=d(u),s=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-kyimvk"&&(s.textContent=c),this.h()},h(){h(t,"class","flex flex-row justify-center items-center"),h(s,"class","notes")},m(u,p){r(u,e,p),r(u,l,p),r(u,t,p),T($,t,null),ee(t,a),T(n,t,null),r(u,m,p),r(u,s,p),b=!0},p(u,p){const q={};p&1&&(q.$$scope={dirty:p,ctx:u}),$.$set(q);const f={};p&1&&(f.$$scope={dirty:p,ctx:u}),n.$set(f)},i(u){b||(A($.$$.fragment,u),A(n.$$.fragment,u),b=!0)},o(u){j($.$$.fragment,u),j(n.$$.fragment,u),b=!1},d(u){u&&(i(e),i(l),i(t),i(m),i(s)),H($),H(n)}}}function _n(x){let e=`
            public class BassinAquatique {
                public void faireNager(Nageur nageur) {
                    nageur.nager();
                    // Ici, qu'ils soient un humain, un dauphin ou un crocodile, 
                    // les instances de ces classes peuvent nager 
                    // peu importe que ce soit des mammifères ou des reptiles
                }
            }
            `,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function hn(x){let e,o="Préambule au polymorphisme",l,t,$=`Vos méthodes peuvent prendre en paramètre une interface, ce qui permet de passer n'importe
			quel objet qui l'implémente.`,a,n,m,s,c=`C'est ça la vraie puissance des interfaces ! Le code ne sait pas et n'a pas besoin de savoir
			ce qu'est un Nageur. Demain, vous ajoutez une classe Robot qui implémente Nageur → ça marche
			sans changer une ligne ! C'est le principe d'inversion de dépendance (le D de SOLID) :
			dépendez des abstractions, pas des implémentations.`,b;return n=new ie({props:{class:" highlighter language-java",$$slots:{default:[_n]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.textContent=$,a=v(),S(n.$$.fragment),m=v(),s=_("aside"),s.textContent=c,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-mwdtiv"&&(e.textContent=o),l=d(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1xd6dcn"&&(t.textContent=$),a=d(u),E(n.$$.fragment,u),m=d(u),s=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-1uux63m"&&(s.textContent=c),this.h()},h(){h(s,"class","notes")},m(u,p){r(u,e,p),r(u,l,p),r(u,t,p),r(u,a,p),T(n,u,p),r(u,m,p),r(u,s,p),b=!0},p(u,p){const q={};p&1&&(q.$$scope={dirty:p,ctx:u}),n.$set(q)},i(u){b||(A(n.$$.fragment,u),b=!0)},o(u){j(n.$$.fragment,u),b=!1},d(u){u&&(i(e),i(l),i(t),i(a),i(m),i(s)),H(n,u)}}}function gn(x){let e=`
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

            `,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function bn(x){let e,o="Héritage d’interface",l,t,$=`Une interface peut hériter d’une ou plusieurs autres interfaces. Dans ce cas, elle hérite de
			toutes les méthodes déclarées dans les interfaces parentes. Pour déclarer un héritage, on
			utilise le mot-clé <code>extends</code>.`,a,n,m;return n=new ie({props:{className:"highlighter language-java",$$slots:{default:[gn]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.innerHTML=$,a=v(),S(n.$$.fragment)},l(s){e=C(s,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-j0acen"&&(e.textContent=o),l=d(s),t=C(s,"P",{"data-svelte-h":!0}),g(t)!=="svelte-tpi5ka"&&(t.innerHTML=$),a=d(s),E(n.$$.fragment,s)},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),T(n,s,c),m=!0},p(s,c){const b={};c&1&&(b.$$scope={dirty:c,ctx:s}),n.$set(b)},i(s){m||(A(n.$$.fragment,s),m=!0)},o(s){j(n.$$.fragment,s),m=!1},d(s){s&&(i(e),i(l),i(t),i(a)),H(n,s)}}}function Ln(x){let e=`
                interface Omnivore extends Herbivore, Carnivore {...}
                class Humain implements Omnivore {...}

                var bob = new Humain();
                if (bob instanceof Carnivore) {
                    System.out.println("bob mange de la viande");
                }
                if (bob instanceof Herbivore) {
                    System.out.println("bob mange des plantes");
                }
            `,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function qn(x){let e,o="Héritage d’interface",l,t,$=`Comme chaque interface introduit un nouveau type, il est possible de contrôler, grâce au
			mot-clé <code>instanceof</code>, qu’une variable, un paramètre ou un attribut est bien une
			instance compatible avec cette interface.`,a,n,m;return n=new ie({props:{className:"highlighter language-java",$$slots:{default:[Ln]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.innerHTML=$,a=v(),S(n.$$.fragment)},l(s){e=C(s,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-j0acen"&&(e.textContent=o),l=d(s),t=C(s,"P",{"data-svelte-h":!0}),g(t)!=="svelte-6egy71"&&(t.innerHTML=$),a=d(s),E(n.$$.fragment,s)},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),T(n,s,c),m=!0},p(s,c){const b={};c&1&&(b.$$scope={dirty:c,ctx:s}),n.$set(b)},i(s){m||(A(n.$$.fragment,s),m=!0)},o(s){j(n.$$.fragment,s),m=!1},d(s){s&&(i(e),i(l),i(t),i(a)),H(n,s)}}}function wn(x){let e=`
            interface IConfidential {}
            class DossierMedical implements IConfidential {}
            ...
            void logguerDansUnFichier(Object p) {
                if (p instanceof IConfidential) {
                    return; // On ne loggue pas les informations confidentielles
                }
            }
            `,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Pn(x){let e,o="Les interfaces marqueurs",l,t,$=`Une interface sans méthode est appelée une interface marqueur. <br/>
			Elle est utilisée pour étiqueter une classe.`,a,n,m="On les utilise ainsi",s,c,b,u,p=`Rappelez-vous, comme on peut implémenter plusieurs interfaces, n'importe quelle classe peut
			implémenter une interface marqueur.`,q,f,L=`Historiquement, Java utilisait beaucoup ça : Serializable, Cloneable sont des interfaces
			marqueurs du JDK. Aujourd'hui, on préfère les annotations (@Confidential) qui sont plus
			puissantes et flexibles. Mais le concept reste valide et vous le verrez dans du code legacy.`,M;return c=new ie({props:{className:"highlighter language-java",$$slots:{default:[wn]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.innerHTML=$,a=v(),n=_("p"),n.textContent=m,s=v(),S(c.$$.fragment),b=v(),u=_("p"),u.textContent=p,q=v(),f=_("aside"),f.textContent=L,this.h()},l(w){e=C(w,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-9j49lb"&&(e.textContent=o),l=d(w),t=C(w,"P",{"data-svelte-h":!0}),g(t)!=="svelte-tx7gvv"&&(t.innerHTML=$),a=d(w),n=C(w,"P",{"data-svelte-h":!0}),g(n)!=="svelte-1qt13hy"&&(n.textContent=m),s=d(w),E(c.$$.fragment,w),b=d(w),u=C(w,"P",{"data-svelte-h":!0}),g(u)!=="svelte-7kxzjc"&&(u.textContent=p),q=d(w),f=C(w,"ASIDE",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-1rx16ok"&&(f.textContent=L),this.h()},h(){h(f,"class","notes")},m(w,I){r(w,e,I),r(w,l,I),r(w,t,I),r(w,a,I),r(w,n,I),r(w,s,I),T(c,w,I),r(w,b,I),r(w,u,I),r(w,q,I),r(w,f,I),M=!0},p(w,I){const B={};I&1&&(B.$$scope={dirty:I,ctx:w}),c.$set(B)},i(w){M||(A(c.$$.fragment,w),M=!0)},o(w){j(c.$$.fragment,w),M=!1},d(w){w&&(i(e),i(l),i(t),i(a),i(n),i(s),i(b),i(u),i(q),i(f)),H(c,w)}}}function Mn(x){let e,o="Conventions de nommage",l,t,$=`<li>Les interfaces sont nommées avec un nom qui commence par &quot;I&quot; suivi d&#39;un nom.</li> <li>Le nom est un adjectif ou un nom qui décrit un comportement.</li> <li>Exemple :
				<ul><li>IVolant</li> <li>IConfidentiel</li> <li><s>INageur</s></li> <li><s>Bateau</s></li> <li><s>Vitesse</s></li></ul></li>`,a,n,m=`Le préfixe "I" est une convention C#/Microsoft. En Java pur, on met souvent pas de préfixe.
			Mais dans beaucoup d'entreprises françaises, le "I" est la norme. Suivez la convention de
			votre équipe. Le JDK utilise des suffixes "-able" : Comparable, Serializable, Iterable. C'est
			aussi une bonne pratique.`;return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("ul"),t.innerHTML=$,a=v(),n=_("aside"),n.textContent=m,this.h()},l(s){e=C(s,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1cx5ud7"&&(e.textContent=o),l=d(s),t=C(s,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-7652xk"&&(t.innerHTML=$),a=d(s),n=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1js4lj4"&&(n.textContent=m),this.h()},h(){h(n,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function Hn(x){let e,o="Les interfaces",l,t,$,a,n,m,s,c,b,u,p,q,f,L,M,w,I,B,Q,K,D,F,ne;return t=new J({props:{$$slots:{default:[fn]},$$scope:{ctx:x}}}),a=new J({props:{$$slots:{default:[cn]},$$scope:{ctx:x}}}),m=new J({props:{$$slots:{default:[pn]},$$scope:{ctx:x}}}),c=new J({props:{$$slots:{default:[mn]},$$scope:{ctx:x}}}),u=new J({props:{$$slots:{default:[dn]},$$scope:{ctx:x}}}),q=new J({props:{$$slots:{default:[Cn]},$$scope:{ctx:x}}}),L=new J({props:{$$slots:{default:[hn]},$$scope:{ctx:x}}}),w=new J({props:{$$slots:{default:[bn]},$$scope:{ctx:x}}}),B=new J({props:{$$slots:{default:[qn]},$$scope:{ctx:x}}}),K=new J({props:{$$slots:{default:[Pn]},$$scope:{ctx:x}}}),F=new J({props:{$$slots:{default:[Mn]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),S(t.$$.fragment),$=v(),S(a.$$.fragment),n=v(),S(m.$$.fragment),s=v(),S(c.$$.fragment),b=v(),S(u.$$.fragment),p=v(),S(q.$$.fragment),f=v(),S(L.$$.fragment),M=v(),S(w.$$.fragment),I=v(),S(B.$$.fragment),Q=v(),S(K.$$.fragment),D=v(),S(F.$$.fragment)},l(O){e=C(O,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-lczfm4"&&(e.textContent=o),l=d(O),E(t.$$.fragment,O),$=d(O),E(a.$$.fragment,O),n=d(O),E(m.$$.fragment,O),s=d(O),E(c.$$.fragment,O),b=d(O),E(u.$$.fragment,O),p=d(O),E(q.$$.fragment,O),f=d(O),E(L.$$.fragment,O),M=d(O),E(w.$$.fragment,O),I=d(O),E(B.$$.fragment,O),Q=d(O),E(K.$$.fragment,O),D=d(O),E(F.$$.fragment,O)},m(O,le){r(O,e,le),r(O,l,le),T(t,O,le),r(O,$,le),T(a,O,le),r(O,n,le),T(m,O,le),r(O,s,le),T(c,O,le),r(O,b,le),T(u,O,le),r(O,p,le),T(q,O,le),r(O,f,le),T(L,O,le),r(O,M,le),T(w,O,le),r(O,I,le),T(B,O,le),r(O,Q,le),T(K,O,le),r(O,D,le),T(F,O,le),ne=!0},p(O,le){const ae={};le&1&&(ae.$$scope={dirty:le,ctx:O}),t.$set(ae);const ce={};le&1&&(ce.$$scope={dirty:le,ctx:O}),a.$set(ce);const re={};le&1&&(re.$$scope={dirty:le,ctx:O}),m.$set(re);const pe={};le&1&&(pe.$$scope={dirty:le,ctx:O}),c.$set(pe);const oe={};le&1&&(oe.$$scope={dirty:le,ctx:O}),u.$set(oe);const $e={};le&1&&($e.$$scope={dirty:le,ctx:O}),q.$set($e);const fe={};le&1&&(fe.$$scope={dirty:le,ctx:O}),L.$set(fe);const me={};le&1&&(me.$$scope={dirty:le,ctx:O}),w.$set(me);const U={};le&1&&(U.$$scope={dirty:le,ctx:O}),B.$set(U);const te={};le&1&&(te.$$scope={dirty:le,ctx:O}),K.$set(te);const R={};le&1&&(R.$$scope={dirty:le,ctx:O}),F.$set(R)},i(O){ne||(A(t.$$.fragment,O),A(a.$$.fragment,O),A(m.$$.fragment,O),A(c.$$.fragment,O),A(u.$$.fragment,O),A(q.$$.fragment,O),A(L.$$.fragment,O),A(w.$$.fragment,O),A(B.$$.fragment,O),A(K.$$.fragment,O),A(F.$$.fragment,O),ne=!0)},o(O){j(t.$$.fragment,O),j(a.$$.fragment,O),j(m.$$.fragment,O),j(c.$$.fragment,O),j(u.$$.fragment,O),j(q.$$.fragment,O),j(L.$$.fragment,O),j(w.$$.fragment,O),j(B.$$.fragment,O),j(K.$$.fragment,O),j(F.$$.fragment,O),ne=!1},d(O){O&&(i(e),i(l),i($),i(n),i(s),i(b),i(p),i(f),i(M),i(I),i(Q),i(D)),H(t,O),H(a,O),H(m,O),H(c,O),H(u,O),H(q,O),H(L,O),H(w,O),H(B,O),H(K,O),H(F,O)}}}function jn(x){let e,o,l,t;return e=new J({props:{$$slots:{default:[un]},$$scope:{ctx:x}}}),l=new J({props:{$$slots:{default:[Hn]},$$scope:{ctx:x}}}),{c(){S(e.$$.fragment),o=v(),S(l.$$.fragment)},l($){E(e.$$.fragment,$),o=d($),E(l.$$.fragment,$)},m($,a){T(e,$,a),r($,o,a),T(l,$,a),t=!0},p($,[a]){const n={};a&1&&(n.$$scope={dirty:a,ctx:$}),e.$set(n);const m={};a&1&&(m.$$scope={dirty:a,ctx:$}),l.$set(m)},i($){t||(A(e.$$.fragment,$),A(l.$$.fragment,$),t=!0)},o($){j(e.$$.fragment,$),j(l.$$.fragment,$),t=!1},d($){$&&i(o),H(e,$),H(l,$)}}}class An extends Oe{constructor(e){super(),Ue(this,e,null,jn,Ve,{})}}function Tn(x){let e,o=`L'encapsulation est un concept fondamental de la programmation orientée objet. Elle consiste à
			cacher les détails internes d'une classe et à ne fournir qu'une interface publique pour
			interagir avec cette classe.`,l,t,$=`L'encapsulation, c'est comme une voiture : vous appuyez sur l'accélérateur, vous n'avez pas
			besoin de savoir comment fonctionne le moteur. C'est un principe de "boîte noire" : on expose
			ce qu'il faut, on cache le reste. Historiquement, ce concept vient de la modularité en génie
			logiciel des années 70.`;return{c(){e=_("p"),e.textContent=o,l=v(),t=_("aside"),t.textContent=$,this.h()},l(a){e=C(a,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1tljpvn"&&(e.textContent=o),l=d(a),t=C(a,"ASIDE",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1drycps"&&(t.textContent=$),this.h()},h(){h(t,"class","notes")},m(a,n){r(a,e,n),r(a,l,n),r(a,t,n)},p:N,d(a){a&&(i(e),i(l),i(t))}}}function En(x){let e,o=`L'encapsulation permet de protéger les données et de contrôler leur accès. Elle rend également
			le code plus modulaire et plus facile à maintenir.`,l,t,$=`En entreprise, c'est crucial. Imaginez une équipe de 20 développeurs : si tout le monde peut
			modifier n'importe quel attribut, c'est le chaos. L'encapsulation impose des "contrats" entre
			les développeurs. On définit ce qui peut être utilisé et comment. Anecdote : beaucoup de bugs
			critiques en production viennent de données modifiées "par accident" car non protégées.`;return{c(){e=_("p"),e.textContent=o,l=v(),t=_("aside"),t.textContent=$,this.h()},l(a){e=C(a,"P",{"data-svelte-h":!0}),g(e)!=="svelte-doneo5"&&(e.textContent=o),l=d(a),t=C(a,"ASIDE",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-niiwx"&&(t.textContent=$),this.h()},h(){h(t,"class","notes")},m(a,n){r(a,e,n),r(a,l,n),r(a,t,n)},p:N,d(a){a&&(i(e),i(l),i(t))}}}function Sn(x){let e,o=`Pour encapsuler des données, on utilise des modificateurs d'accès qui déterminent la
			visibilité des attributs et des méthodes d'une classe.`,l,t,$="<li><code>public</code> : accessible depuis n&#39;importe où</li> <li><code>private</code> : accessible uniquement depuis la classe elle-même</li> <li><code>protected</code> : accessible depuis la classe et ses sous-classes</li>",a,n,m=`Il existe aussi le niveau "package-private" (sans modificateur) : accessible uniquement dans
			le même package. En pratique, 90% du temps vous utiliserez private pour les attributs et
			public pour les méthodes d'interface. Le protected est surtout utile dans les
			bibliothèques/frameworks où on veut permettre l'extension par héritage.`;return{c(){e=_("p"),e.textContent=o,l=v(),t=_("ul"),t.innerHTML=$,a=v(),n=_("aside"),n.textContent=m,this.h()},l(s){e=C(s,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1dtmw8t"&&(e.textContent=o),l=d(s),t=C(s,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-be97eu"&&(t.innerHTML=$),a=d(s),n=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-wx1qlj"&&(n.textContent=m),this.h()},h(){h(n,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function Dn(x){let e=`
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
    `,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function In(x){let e,o="Voici un exemple d'encapsulation en Java :",l,t,$,a,n=`C'est le pattern classique JavaBean. Vous le verrez partout dans les frameworks Java (Spring,
			Hibernate...). Les IDE génèrent ces getters/setters automatiquement : clic droit → Generate →
			Getters and Setters. Important : même si c'est "juste" un getter/setter, passez par ces
			méthodes. Ça vous permettra d'ajouter de la logique plus tard.`,m;return t=new ie({props:{$$slots:{default:[Dn]},$$scope:{ctx:x}}}),{c(){e=_("p"),e.textContent=o,l=v(),S(t.$$.fragment),$=v(),a=_("aside"),a.textContent=n,this.h()},l(s){e=C(s,"P",{"data-svelte-h":!0}),g(e)!=="svelte-sf7cl9"&&(e.textContent=o),l=d(s),E(t.$$.fragment,s),$=d(s),a=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(a)!=="svelte-19iwzui"&&(a.textContent=n),this.h()},h(){h(a,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),T(t,s,c),r(s,$,c),r(s,a,c),m=!0},p(s,c){const b={};c&1&&(b.$$scope={dirty:c,ctx:s}),t.$set(b)},i(s){m||(A(t.$$.fragment,s),m=!0)},o(s){j(t.$$.fragment,s),m=!1},d(s){s&&(i(e),i(l),i($),i(a)),H(t,s)}}}function kn(x){let e,o=`Dans cet exemple, les attributs <code>nom</code> et <code>age</code> sont privés et ne peuvent
			pas être accédés directement depuis l&#39;extérieur. On utilise des méthodes publiques,
			<code>getNom</code>, <code>setNom</code>, <code>getAge</code> et <code>setAge</code>, pour y
			accéder et les modifier.`,l,t,$=`Fondamentalement, <code>getNom</code> et <code>setNom</code> sont de simples méthodes, mais
			compte tenu de leur rôle, on les appelle des <i>accesseurs</i> et des <i>mutateurs</i>.`;return{c(){e=_("p"),e.innerHTML=o,l=v(),t=_("p"),t.innerHTML=$,this.h()},l(a){e=C(a,"P",{"data-svelte-h":!0}),g(e)!=="svelte-tuu3n3"&&(e.innerHTML=o),l=d(a),t=C(a,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-t116p3"&&(t.innerHTML=$),this.h()},h(){h(t,"class","text-important")},m(a,n){r(a,e,n),r(a,l,n),r(a,t,n)},p:N,d(a){a&&(i(e),i(l),i(t))}}}function zn(x){let e=`
    public void setAge(int age) {
        if (age >= 0) {
            this.age = age;
        }
    }
    `,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Vn(x){let e,o=`L&#39;encapsulation permet de contrôler l&#39;accès aux données et de s&#39;assurer qu&#39;elles sont
			manipulées de manière cohérente. Par exemple, on peut ajouter des vérifications dans les
			méthodes <code>set</code> pour s&#39;assurer que les valeurs sont valides.`,l,t,$,a,n=`En pratique, vous pouvez aller plus loin : lever une exception, logger l'erreur, notifier
			l'utilisateur... Ce pattern s'appelle "defensive programming" - on se protège des mauvaises
			utilisations. Dans les frameworks modernes, on utilise souvent des annotations de validation
			(@NotNull, @Min, @Max) au lieu de coder à la main.`,m;return t=new ie({props:{$$slots:{default:[zn]},$$scope:{ctx:x}}}),{c(){e=_("p"),e.innerHTML=o,l=v(),S(t.$$.fragment),$=v(),a=_("aside"),a.textContent=n,this.h()},l(s){e=C(s,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1yoywng"&&(e.innerHTML=o),l=d(s),E(t.$$.fragment,s),$=d(s),a=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(a)!=="svelte-phtreb"&&(a.textContent=n),this.h()},h(){h(a,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),T(t,s,c),r(s,$,c),r(s,a,c),m=!0},p(s,c){const b={};c&1&&(b.$$scope={dirty:c,ctx:s}),t.$set(b)},i(s){m||(A(t.$$.fragment,s),m=!0)},o(s){j(t.$$.fragment,s),m=!1},d(s){s&&(i(e),i(l),i($),i(a)),H(t,s)}}}function On(x){let e,o=`L&#39;utilisation du modificateur <code>protected</code> permet aux classes dérivées d&#39;accéder aux attributs
			et méthodes de la classe parente. Cela est utile lorsque l&#39;on souhaite permettre à des sous-classes
			d&#39;utiliser ou de modifier des données tout en les protégeant de l&#39;accès direct extérieur.`,l,t,$=`Attention : protected ne veut pas dire "accessible seulement aux sous-classes". En Java,
			protected est aussi accessible depuis le même package ! C'est une subtilité souvent oubliée.
			Bonne pratique : préférez private + getter protected si vous voulez vraiment contrôler
			l'accès.`;return{c(){e=_("p"),e.innerHTML=o,l=v(),t=_("aside"),t.textContent=$,this.h()},l(a){e=C(a,"P",{"data-svelte-h":!0}),g(e)!=="svelte-1om2flv"&&(e.innerHTML=o),l=d(a),t=C(a,"ASIDE",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1l5eyve"&&(t.textContent=$),this.h()},h(){h(t,"class","notes")},m(a,n){r(a,e,n),r(a,l,n),r(a,t,n)},p:N,d(a){a&&(i(e),i(l),i(t))}}}function Un(x){let e=`
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
    `,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Rn(x){let e,o,l,t=`Dans cet exemple, l&#39;attribut <code>nom</code> est protégé, ce qui permet à la classe
			<code>Chien</code>
			d&#39;y accéder dans sa méthode <code>aboyer</code>.`,$;return e=new ie({props:{$$slots:{default:[Un]},$$scope:{ctx:x}}}),{c(){S(e.$$.fragment),o=v(),l=_("p"),l.innerHTML=t},l(a){E(e.$$.fragment,a),o=d(a),l=C(a,"P",{"data-svelte-h":!0}),g(l)!=="svelte-pqjf38"&&(l.innerHTML=t)},m(a,n){T(e,a,n),r(a,o,n),r(a,l,n),$=!0},p(a,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:a}),e.$set(m)},i(a){$||(A(e.$$.fragment,a),$=!0)},o(a){j(e.$$.fragment,a),$=!1},d(a){a&&(i(o),i(l)),H(e,a)}}}function Nn(x){let e=`
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
    `,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Jn(x){let e,o=`Les attributs privés sont utilisés pour restreindre l'accès direct aux données sensibles ou
			critiques, garantissant ainsi que seules des méthodes contrôlées peuvent les modifier.`,l,t,$,a,n=`Dans cet exemple, le solde du compte est privé et ne peut être modifié que par les méthodes <code>deposer</code>
			et <code>retirer</code>, lesquelles effectuent des vérifications.`,m,s,c=`C'est l'exemple classique ! Imaginez si le solde était public : compte.solde = -1000000.
			Catastrophe. Dans la vraie vie, les banques ajoutent aussi : logging, audit trail,
			notifications, limites de retrait... L'encapsulation permet d'ajouter tout ça sans changer
			l'interface publique.`,b;return t=new ie({props:{$$slots:{default:[Nn]},$$scope:{ctx:x}}}),{c(){e=_("p"),e.textContent=o,l=v(),S(t.$$.fragment),$=v(),a=_("p"),a.innerHTML=n,m=v(),s=_("aside"),s.textContent=c,this.h()},l(u){e=C(u,"P",{"data-svelte-h":!0}),g(e)!=="svelte-usm7ui"&&(e.textContent=o),l=d(u),E(t.$$.fragment,u),$=d(u),a=C(u,"P",{class:!0,"data-svelte-h":!0}),g(a)!=="svelte-1hber6c"&&(a.innerHTML=n),m=d(u),s=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-ey8qs8"&&(s.textContent=c),this.h()},h(){h(a,"class","smaller"),h(s,"class","notes")},m(u,p){r(u,e,p),r(u,l,p),T(t,u,p),r(u,$,p),r(u,a,p),r(u,m,p),r(u,s,p),b=!0},p(u,p){const q={};p&1&&(q.$$scope={dirty:p,ctx:u}),t.$set(q)},i(u){b||(A(t.$$.fragment,u),b=!0)},o(u){j(t.$$.fragment,u),b=!1},d(u){u&&(i(e),i(l),i($),i(a),i(m),i(s)),H(t,u)}}}function Bn(x){let e,o="Verbosité",l,t,$=`Le Java est parfois critiqué pour sa verbosité. En effet, le code Java peut sembler plus long
			et plus complexe que d'autres langages.`,a,n,m=`Vous devez écrire environ 7 lignes pour déclarer un simple attribut avec ses accesseurs et
			mutateurs.`,s,c,b=`C'est le principal reproche fait à Java. Python ou Kotlin font ça en 1 ligne. Mais Java 14+ a
			introduit les Records qui réduisent beaucoup ce boilerplate. Et les IDE modernes génèrent tout
			ça en 2 clics. En pratique, ce n'est plus vraiment un problème. Lombok est aussi très
			populaire : @Data génère tous les getters/setters automatiquement.`;return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.textContent=$,a=v(),n=_("p"),n.textContent=m,s=v(),c=_("aside"),c.textContent=b,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-11a3931"&&(e.textContent=o),l=d(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-eslzxf"&&(t.textContent=$),a=d(u),n=C(u,"P",{"data-svelte-h":!0}),g(n)!=="svelte-ishs47"&&(n.textContent=m),s=d(u),c=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-76j7no"&&(c.textContent=b),this.h()},h(){h(c,"class","notes")},m(u,p){r(u,e,p),r(u,l,p),r(u,t,p),r(u,a,p),r(u,n,p),r(u,s,p),r(u,c,p)},p:N,d(u){u&&(i(e),i(l),i(t),i(a),i(n),i(s),i(c))}}}function Fn(x){let e=`
        // C#
        class Personne {
            public string Nom { get; }
            public int Age    { get; set; }
            public int Taille {
                get; 
                set => field = value; 
            }
        }
        `,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Gn(x){let e=`
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
                `,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Qn(x){let e,o="D'autres langages permettent de déclarer des accesseurs et mutateurs de manière plus concise :",l,t,$,a,n,m,s,c=`En Java, un IDE peut générer automatiquement ces méthodes. Cela peut sembler pénible, mais il
			faut le faire.`,b;return $=new ie({props:{$$slots:{default:[Fn]},$$scope:{ctx:x}}}),n=new ie({props:{$$slots:{default:[Gn]},$$scope:{ctx:x}}}),{c(){e=_("p"),e.textContent=o,l=v(),t=_("div"),S($.$$.fragment),a=v(),S(n.$$.fragment),m=v(),s=_("p"),s.textContent=c,this.h()},l(u){e=C(u,"P",{"data-svelte-h":!0}),g(e)!=="svelte-v898e4"&&(e.textContent=o),l=d(u),t=C(u,"DIV",{class:!0});var p=ue(t);E($.$$.fragment,p),a=d(p),E(n.$$.fragment,p),p.forEach(i),m=d(u),s=C(u,"P",{"data-svelte-h":!0}),g(s)!=="svelte-9ubtus"&&(s.textContent=c),this.h()},h(){h(t,"class","flex flex-row")},m(u,p){r(u,e,p),r(u,l,p),r(u,t,p),T($,t,null),ee(t,a),T(n,t,null),r(u,m,p),r(u,s,p),b=!0},p(u,p){const q={};p&1&&(q.$$scope={dirty:p,ctx:u}),$.$set(q);const f={};p&1&&(f.$$scope={dirty:p,ctx:u}),n.$set(f)},i(u){b||(A($.$$.fragment,u),A(n.$$.fragment,u),b=!0)},o(u){j($.$$.fragment,u),j(n.$$.fragment,u),b=!1},d(u){u&&(i(e),i(l),i(t),i(m),i(s)),H($),H(n)}}}function Kn(x){let e=`
    public void setMobilePhoneNumber(String mobilePhoneNumber) {
        this.mobilePhoneNumber = mobilePhoneNumber;
        envoyerEmailPourPrevenirUtilisateurDeLaModification(email, mobilePhoneNumber);
    }
    `,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Yn(x){let e,o="Maintenance",l,t,$=`En encapsulant les données et en contrôlant leur accès, vous facilitez la maintenance de votre
			code. Imaginez que vous avez laissé un attribut public et que vous le modifiez dans 50
			endroits différents. Si vous souhaitez désormais enregistrer chaque modification, vous devrez
			intervenir à ces 50 endroits.`,a,n,m,s,c=`C'est le principe Open/Closed : ouvert à l'extension, fermé à la modification. Dans les gros
			projets, c'est vital. J'ai vu des équipes passer des semaines à refactorer du code parce qu'un
			attribut était public. Avec un setter, on ajoute la logique à UN endroit. C'est le Single
			Point of Change.`,b;return n=new ie({props:{$$slots:{default:[Kn]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.textContent=$,a=v(),S(n.$$.fragment),m=v(),s=_("aside"),s.textContent=c,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1ky5g9v"&&(e.textContent=o),l=d(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1qmbise"&&(t.textContent=$),a=d(u),E(n.$$.fragment,u),m=d(u),s=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-gfpvu8"&&(s.textContent=c),this.h()},h(){h(s,"class","notes")},m(u,p){r(u,e,p),r(u,l,p),r(u,t,p),r(u,a,p),T(n,u,p),r(u,m,p),r(u,s,p),b=!0},p(u,p){const q={};p&1&&(q.$$scope={dirty:p,ctx:u}),n.$set(q)},i(u){b||(A(n.$$.fragment,u),b=!0)},o(u){j(n.$$.fragment,u),b=!1},d(u){u&&(i(e),i(l),i(t),i(a),i(m),i(s)),H(n,u)}}}function Xn(x){let e,o="Et maintenant ?",l,t,$="Vers la généralisation et l'héritage";return{c(){e=_("h2"),e.textContent=o,l=v(),t=_("p"),t.textContent=$,this.h()},l(a){e=C(a,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1m9nj2p"&&(e.textContent=o),l=d(a),t=C(a,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-b0r7rg"&&(t.textContent=$),this.h()},h(){h(e,"class","text-5xl"),h(t,"class","text-2xl text-gray-400")},m(a,n){r(a,e,n),r(a,l,n),r(a,t,n)},p:N,d(a){a&&(i(e),i(l),i(t))}}}function Wn(x){let e=`
class CompteCourant {
    private String numero;
    private double solde;
    private String titulaire;
    
    void deposer(double m) {...}
    void retirer(double m) {...}
    void calculerInterets() {...}
}
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Zn(x){let e=`
class CompteEpargne {
    private String numero;
    private double solde;
    private String titulaire;
    
    void deposer(double m) {...}
    void retirer(double m) {...}
    void calculerInterets() {...}
}
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function yn(x){let e,o="Le problème de la duplication",l,t,$="Imaginez que vous devez modéliser plusieurs types de comptes bancaires :",a,n,m,s,c,b,u,p="😱 Beaucoup de code dupliqué !",q;return m=new ie({props:{class:"language-java",$$slots:{default:[Wn]},$$scope:{ctx:x}}}),c=new ie({props:{class:"language-java",$$slots:{default:[Zn]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.textContent=$,a=v(),n=_("div"),S(m.$$.fragment),s=v(),S(c.$$.fragment),b=v(),u=_("p"),u.textContent=p,this.h()},l(f){e=C(f,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1121kts"&&(e.textContent=o),l=d(f),t=C(f,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1k7fi1x"&&(t.textContent=$),a=d(f),n=C(f,"DIV",{class:!0});var L=ue(n);E(m.$$.fragment,L),s=d(L),E(c.$$.fragment,L),L.forEach(i),b=d(f),u=C(f,"P",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-1kobn2k"&&(u.textContent=p),this.h()},h(){h(n,"class","grid grid-cols-2 gap-4 mt-6"),h(u,"class","fragment text-red-400 mt-4 font-bold")},m(f,L){r(f,e,L),r(f,l,L),r(f,t,L),r(f,a,L),r(f,n,L),T(m,n,null),ee(n,s),T(c,n,null),r(f,b,L),r(f,u,L),q=!0},p(f,L){const M={};L&1&&(M.$$scope={dirty:L,ctx:f}),m.$set(M);const w={};L&1&&(w.$$scope={dirty:L,ctx:f}),c.$set(w)},i(f){q||(A(m.$$.fragment,f),A(c.$$.fragment,f),q=!0)},o(f){j(m.$$.fragment,f),j(c.$$.fragment,f),q=!1},d(f){f&&(i(e),i(l),i(t),i(a),i(n),i(b),i(u)),H(m),H(c)}}}function ei(x){let e,o="Généraliser les concepts",l,t,$='En observant les classes, on remarque des <span class="text-important">points communs</span> :',a,n,m='<li class="fragment">Tous les comptes ont un numéro, un solde, un titulaire</li> <li class="fragment">Tous peuvent déposer et retirer de l&#39;argent</li> <li class="fragment">Seul le calcul des intérêts diffère</li>',s,c,b=`💡 On peut extraire un concept <span class="text-important">plus général</span> :
			<code>CompteBancaire</code>`,u,p,q="C&#39;est la <b>généralisation</b> qui mène naturellement à l&#39;<b>héritage</b> !";return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.innerHTML=$,a=v(),n=_("ul"),n.innerHTML=m,s=v(),c=_("p"),c.innerHTML=b,u=v(),p=_("p"),p.innerHTML=q,this.h()},l(f){e=C(f,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-mkht2s"&&(e.textContent=o),l=d(f),t=C(f,"P",{"data-svelte-h":!0}),g(t)!=="svelte-s94fqs"&&(t.innerHTML=$),a=d(f),n=C(f,"UL",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1txundk"&&(n.innerHTML=m),s=d(f),c=C(f,"P",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-mlbnsz"&&(c.innerHTML=b),u=d(f),p=C(f,"P",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-1e3gzbu"&&(p.innerHTML=q),this.h()},h(){h(n,"class","text-xl mt-6"),h(c,"class","fragment mt-8 text-accent-200 font-bold"),h(p,"class","fragment text-important")},m(f,L){r(f,e,L),r(f,l,L),r(f,t,L),r(f,a,L),r(f,n,L),r(f,s,L),r(f,c,L),r(f,u,L),r(f,p,L)},p:N,d(f){f&&(i(e),i(l),i(t),i(a),i(n),i(s),i(c),i(u),i(p))}}}function ti(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function si(x){let e,o="Visualiser la généralisation",l,t,$,a,n=`Les éléments <span class="text-important">communs</span> sont dans la classe générale,<br/>
			les <span class="text-important">spécificités</span> dans les classes dérivées.`,m;return t=new je({props:{$$slots:{default:[ti]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),S(t.$$.fragment),$=v(),a=_("p"),a.innerHTML=n,this.h()},l(s){e=C(s,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-14isadv"&&(e.textContent=o),l=d(s),E(t.$$.fragment,s),$=d(s),a=C(s,"P",{class:!0,"data-svelte-h":!0}),g(a)!=="svelte-lecgmk"&&(a.innerHTML=n),this.h()},h(){h(a,"class","fragment mt-4")},m(s,c){r(s,e,c),r(s,l,c),T(t,s,c),r(s,$,c),r(s,a,c),m=!0},p(s,c){const b={};c&1&&(b.$$scope={dirty:c,ctx:s}),t.$set(b)},i(s){m||(A(t.$$.fragment,s),m=!0)},o(s){j(t.$$.fragment,s),m=!1},d(s){s&&(i(e),i(l),i($),i(a)),H(t,s)}}}function li(x){let e,o="Récapitulatif",l,t,$='<p class="fragment">✅ L&#39;<span class="text-important">encapsulation</span> protège vos données</p> <p class="fragment mt-4">✅ La <span class="text-important">généralisation</span> évite la duplication</p> <p class="fragment mt-4">✅ L&#39;<span class="text-important">héritage</span> structure votre code</p>',a,n,m="🔮 Voyons maintenant comment implémenter cela en Java !";return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("div"),t.innerHTML=$,a=v(),n=_("p"),n.textContent=m,this.h()},l(s){e=C(s,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-ri7iuh"&&(e.textContent=o),l=d(s),t=C(s,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-126wtu4"&&(t.innerHTML=$),a=d(s),n=C(s,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-15gbfwm"&&(n.textContent=m),this.h()},h(){h(t,"class","text-xl"),h(n,"class","fragment mt-8 text-accent-200 text-2xl font-bold")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function ni(x){let e,o="Encapsulation",l,t,$,a,n,m,s,c,b,u,p,q,f,L,M,w,I,B,Q,K,D,F,ne,O,le,ae,ce,re,pe,oe,$e,fe,me,U,te;return t=new J({props:{$$slots:{default:[Tn]},$$scope:{ctx:x}}}),a=new J({props:{$$slots:{default:[En]},$$scope:{ctx:x}}}),m=new J({props:{$$slots:{default:[Sn]},$$scope:{ctx:x}}}),c=new J({props:{$$slots:{default:[In]},$$scope:{ctx:x}}}),u=new J({props:{$$slots:{default:[kn]},$$scope:{ctx:x}}}),q=new J({props:{$$slots:{default:[Vn]},$$scope:{ctx:x}}}),L=new J({props:{$$slots:{default:[On]},$$scope:{ctx:x}}}),w=new J({props:{$$slots:{default:[Rn]},$$scope:{ctx:x}}}),B=new J({props:{$$slots:{default:[Jn]},$$scope:{ctx:x}}}),K=new J({props:{data_background_color:"#00353F",$$slots:{default:[Bn]},$$scope:{ctx:x}}}),F=new J({props:{data_background_color:"#00353F",$$slots:{default:[Qn]},$$scope:{ctx:x}}}),O=new J({props:{$$slots:{default:[Yn]},$$scope:{ctx:x}}}),ae=new J({props:{data_background_color:"#1a1a2e",$$slots:{default:[Xn]},$$scope:{ctx:x}}}),re=new J({props:{$$slots:{default:[yn]},$$scope:{ctx:x}}}),oe=new J({props:{$$slots:{default:[ei]},$$scope:{ctx:x}}}),fe=new J({props:{$$slots:{default:[si]},$$scope:{ctx:x}}}),U=new J({props:{$$slots:{default:[li]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),S(t.$$.fragment),$=v(),S(a.$$.fragment),n=v(),S(m.$$.fragment),s=v(),S(c.$$.fragment),b=v(),S(u.$$.fragment),p=v(),S(q.$$.fragment),f=v(),S(L.$$.fragment),M=v(),S(w.$$.fragment),I=v(),S(B.$$.fragment),Q=v(),S(K.$$.fragment),D=v(),S(F.$$.fragment),ne=v(),S(O.$$.fragment),le=v(),S(ae.$$.fragment),ce=v(),S(re.$$.fragment),pe=v(),S(oe.$$.fragment),$e=v(),S(fe.$$.fragment),me=v(),S(U.$$.fragment)},l(R){e=C(R,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-d8x7o6"&&(e.textContent=o),l=d(R),E(t.$$.fragment,R),$=d(R),E(a.$$.fragment,R),n=d(R),E(m.$$.fragment,R),s=d(R),E(c.$$.fragment,R),b=d(R),E(u.$$.fragment,R),p=d(R),E(q.$$.fragment,R),f=d(R),E(L.$$.fragment,R),M=d(R),E(w.$$.fragment,R),I=d(R),E(B.$$.fragment,R),Q=d(R),E(K.$$.fragment,R),D=d(R),E(F.$$.fragment,R),ne=d(R),E(O.$$.fragment,R),le=d(R),E(ae.$$.fragment,R),ce=d(R),E(re.$$.fragment,R),pe=d(R),E(oe.$$.fragment,R),$e=d(R),E(fe.$$.fragment,R),me=d(R),E(U.$$.fragment,R)},m(R,se){r(R,e,se),r(R,l,se),T(t,R,se),r(R,$,se),T(a,R,se),r(R,n,se),T(m,R,se),r(R,s,se),T(c,R,se),r(R,b,se),T(u,R,se),r(R,p,se),T(q,R,se),r(R,f,se),T(L,R,se),r(R,M,se),T(w,R,se),r(R,I,se),T(B,R,se),r(R,Q,se),T(K,R,se),r(R,D,se),T(F,R,se),r(R,ne,se),T(O,R,se),r(R,le,se),T(ae,R,se),r(R,ce,se),T(re,R,se),r(R,pe,se),T(oe,R,se),r(R,$e,se),T(fe,R,se),r(R,me,se),T(U,R,se),te=!0},p(R,se){const de={};se&1&&(de.$$scope={dirty:se,ctx:R}),t.$set(de);const _e={};se&1&&(_e.$$scope={dirty:se,ctx:R}),a.$set(_e);const V={};se&1&&(V.$$scope={dirty:se,ctx:R}),m.$set(V);const W={};se&1&&(W.$$scope={dirty:se,ctx:R}),c.$set(W);const ve={};se&1&&(ve.$$scope={dirty:se,ctx:R}),u.$set(ve);const he={};se&1&&(he.$$scope={dirty:se,ctx:R}),q.$set(he);const z={};se&1&&(z.$$scope={dirty:se,ctx:R}),L.$set(z);const X={};se&1&&(X.$$scope={dirty:se,ctx:R}),w.$set(X);const k={};se&1&&(k.$$scope={dirty:se,ctx:R}),B.$set(k);const Y={};se&1&&(Y.$$scope={dirty:se,ctx:R}),K.$set(Y);const qe={};se&1&&(qe.$$scope={dirty:se,ctx:R}),F.$set(qe);const ge={};se&1&&(ge.$$scope={dirty:se,ctx:R}),O.$set(ge);const we={};se&1&&(we.$$scope={dirty:se,ctx:R}),ae.$set(we);const be={};se&1&&(be.$$scope={dirty:se,ctx:R}),re.$set(be);const Ae={};se&1&&(Ae.$$scope={dirty:se,ctx:R}),oe.$set(Ae);const Le={};se&1&&(Le.$$scope={dirty:se,ctx:R}),fe.$set(Le);const Te={};se&1&&(Te.$$scope={dirty:se,ctx:R}),U.$set(Te)},i(R){te||(A(t.$$.fragment,R),A(a.$$.fragment,R),A(m.$$.fragment,R),A(c.$$.fragment,R),A(u.$$.fragment,R),A(q.$$.fragment,R),A(L.$$.fragment,R),A(w.$$.fragment,R),A(B.$$.fragment,R),A(K.$$.fragment,R),A(F.$$.fragment,R),A(O.$$.fragment,R),A(ae.$$.fragment,R),A(re.$$.fragment,R),A(oe.$$.fragment,R),A(fe.$$.fragment,R),A(U.$$.fragment,R),te=!0)},o(R){j(t.$$.fragment,R),j(a.$$.fragment,R),j(m.$$.fragment,R),j(c.$$.fragment,R),j(u.$$.fragment,R),j(q.$$.fragment,R),j(L.$$.fragment,R),j(w.$$.fragment,R),j(B.$$.fragment,R),j(K.$$.fragment,R),j(F.$$.fragment,R),j(O.$$.fragment,R),j(ae.$$.fragment,R),j(re.$$.fragment,R),j(oe.$$.fragment,R),j(fe.$$.fragment,R),j(U.$$.fragment,R),te=!1},d(R){R&&(i(e),i(l),i($),i(n),i(s),i(b),i(p),i(f),i(M),i(I),i(Q),i(D),i(ne),i(le),i(ce),i(pe),i($e),i(me)),H(t,R),H(a,R),H(m,R),H(c,R),H(u,R),H(q,R),H(L,R),H(w,R),H(B,R),H(K,R),H(F,R),H(O,R),H(ae,R),H(re,R),H(oe,R),H(fe,R),H(U,R)}}}function ii(x){let e,o;return e=new J({props:{$$slots:{default:[ni]},$$scope:{ctx:x}}}),{c(){S(e.$$.fragment)},l(l){E(e.$$.fragment,l)},m(l,t){T(e,l,t),o=!0},p(l,[t]){const $={};t&1&&($.$$scope={dirty:t,ctx:l}),e.$set($)},i(l){o||(A(e.$$.fragment,l),o=!0)},o(l){j(e.$$.fragment,l),o=!1},d(l){H(e,l)}}}class ai extends Oe{constructor(e){super(),Ue(this,e,null,ii,Ve,{})}}function ri(x){let e,o="Représenter le monde réel",l,t,$='La POO vise à <span class="text-important">modéliser des concepts du monde réel</span> dans notre code.',a,n,m='<div class="fragment"><h4 class="text-accent-200">🏢 En entreprise</h4> <ul class="text-xl"><li>Un <b>Client</b></li> <li>Une <b>Facture</b></li> <li>Une <b>Transaction</b></li> <li>Un <b>Produit</b></li></ul></div> <div class="fragment"><h4 class="text-accent-200">🎮 Dans un jeu</h4> <ul class="text-xl"><li>Un <b>Joueur</b></li> <li>Un <b>Ennemi</b></li> <li>Une <b>Arme</b></li> <li>Un <b>Niveau</b></li></ul></div>',s,c,b="Chaque concept devient une <b>classe</b>, chaque instance concrète devient un <b>objet</b>.",u,p,q=`La POO est née de ce besoin : les programmeurs voulaient modéliser le monde réel dans leurs programmes.\r
			Avant, on avait des structures de données et des fonctions séparées. Maintenant, tout est regroupé.\r
			C'est plus intuitif pour l'humain : on pense en termes d'objets, pas en termes de bits.`;return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.innerHTML=$,a=v(),n=_("div"),n.innerHTML=m,s=v(),c=_("p"),c.innerHTML=b,u=v(),p=_("aside"),p.textContent=q,this.h()},l(f){e=C(f,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1nsqnl5"&&(e.textContent=o),l=d(f),t=C(f,"P",{"data-svelte-h":!0}),g(t)!=="svelte-gu1hhe"&&(t.innerHTML=$),a=d(f),n=C(f,"DIV",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-ssqwsa"&&(n.innerHTML=m),s=d(f),c=C(f,"P",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-ys061m"&&(c.innerHTML=b),u=d(f),p=C(f,"ASIDE",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-10ve9bx"&&(p.textContent=q),this.h()},h(){h(n,"class","grid grid-cols-2 gap-6 mt-8"),h(c,"class","fragment mt-8 text-important font-bold"),h(p,"class","notes")},m(f,L){r(f,e,L),r(f,l,L),r(f,t,L),r(f,a,L),r(f,n,L),r(f,s,L),r(f,c,L),r(f,u,L),r(f,p,L)},p:N,d(f){f&&(i(e),i(l),i(t),i(a),i(n),i(s),i(c),i(u),i(p))}}}function ui(x){let e,o="Qu'est-ce qu'un objet ?",l,t,$='Un <span class="text-important">objet</span> est une entité qui regroupe :',a,n,m='<li class="fragment"><b>Des données</b> → les <span class="text-important">attributs</span></li> <li class="fragment"><b>Des comportements</b> → les <span class="text-important">méthodes</span></li>',s,c,b='Un objet est une <b>instance</b> d&#39;une <span class="text-important">classe</span>.',u,p,q=`La classe c'est le plan, l'objet c'est la maison construite à partir du plan.\r
			On peut construire plusieurs maisons à partir du même plan.`;return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.innerHTML=$,a=v(),n=_("ul"),n.innerHTML=m,s=v(),c=_("p"),c.innerHTML=b,u=v(),p=_("aside"),p.textContent=q,this.h()},l(f){e=C(f,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1j2xnsl"&&(e.textContent=o),l=d(f),t=C(f,"P",{"data-svelte-h":!0}),g(t)!=="svelte-ikoph5"&&(t.innerHTML=$),a=d(f),n=C(f,"UL",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-urcwzy"&&(n.innerHTML=m),s=d(f),c=C(f,"P",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-126jdov"&&(c.innerHTML=b),u=d(f),p=C(f,"ASIDE",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-1j9siwx"&&(p.textContent=q),this.h()},h(){h(n,"class","mt-4"),h(c,"class","fragment mt-6"),h(p,"class","notes")},m(f,L){r(f,e,L),r(f,l,L),r(f,t,L),r(f,a,L),r(f,n,L),r(f,s,L),r(f,c,L),r(f,u,L),r(f,p,L)},p:N,d(f){f&&(i(e),i(l),i(t),i(a),i(n),i(s),i(c),i(u),i(p))}}}function oi(x){let e=`
class Client {
    // Attributs (données)
    String nom;
    String email;
    List<Commande> commandes;
    
    // Méthodes (comportements)
    void passerCommande() {...}
    void consulterFactures() {...}
}
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function fi(x){let e,o="Exemple concret : un Client",l,t,$,a='<h4 class="text-accent-200">Dans le monde réel</h4> <ul class="text-xl"><li>Nom, prénom</li> <li>Email, téléphone</li> <li>Historique d&#39;achats</li> <li>Peut passer commande</li> <li>Peut consulter ses factures</li></ul>',n,m,s,c="En POO",b,u,p,q,f="💡 La classe modélise le <b>concept</b>, l&#39;objet représente une <b>instance concrète</b>.",L,M,w=`C'est un mapping 1:1 entre le métier et le code. Les analystes parlent de Client, les développeurs codent Client.\r
			C'est là toute la puissance de la POO : on parle le même langage que le métier.\r
			C'est la base du Domain-Driven Design (DDD) qu'on voit dans les entreprises modernes.`,I;return u=new ie({props:{$$slots:{default:[oi]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("div"),$=_("div"),$.innerHTML=a,n=v(),m=_("div"),s=_("h4"),s.textContent=c,b=v(),S(u.$$.fragment),p=v(),q=_("p"),q.innerHTML=f,L=v(),M=_("aside"),M.textContent=w,this.h()},l(B){e=C(B,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-19m1xis"&&(e.textContent=o),l=d(B),t=C(B,"DIV",{class:!0});var Q=ue(t);$=C(Q,"DIV",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-b6jw6w"&&($.innerHTML=a),n=d(Q),m=C(Q,"DIV",{class:!0});var K=ue(m);s=C(K,"H4",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-zddvi7"&&(s.textContent=c),b=d(K),E(u.$$.fragment,K),K.forEach(i),Q.forEach(i),p=d(B),q=C(B,"P",{class:!0,"data-svelte-h":!0}),g(q)!=="svelte-1afjqzm"&&(q.innerHTML=f),L=d(B),M=C(B,"ASIDE",{class:!0,"data-svelte-h":!0}),g(M)!=="svelte-1lbuzzl"&&(M.textContent=w),this.h()},h(){h($,"class","flex-1"),h(s,"class","text-accent-200"),h(m,"class","flex-1 fragment"),h(t,"class","flex flex-row gap-8 items-center"),h(q,"class","fragment mt-6 text-important"),h(M,"class","notes")},m(B,Q){r(B,e,Q),r(B,l,Q),r(B,t,Q),ee(t,$),ee(t,n),ee(t,m),ee(m,s),ee(m,b),T(u,m,null),r(B,p,Q),r(B,q,Q),r(B,L,Q),r(B,M,Q),I=!0},p(B,Q){const K={};Q&1&&(K.$$scope={dirty:Q,ctx:B}),u.$set(K)},i(B){I||(A(u.$$.fragment,B),I=!0)},o(B){j(u.$$.fragment,B),I=!1},d(B){B&&(i(e),i(l),i(t),i(p),i(q),i(L),i(M)),H(u)}}}function ci(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function $i(x){let e,o="Classe vs Objet",l,t,$='<div class="p-4 bg-accent-950 rounded-lg"><h4 class="text-important">📐 Classe</h4> <p class="text-xl mt-2">Le <b>plan</b>, le modèle</p> <p class="text-sm text-gray-400 mt-2">Définit les attributs et méthodes</p></div> <div class="p-4 bg-accent-950 rounded-lg"><h4 class="text-important">🏠 Objet</h4> <p class="text-xl mt-2">L&#39;<b>instance</b>, la réalisation</p> <p class="text-sm text-gray-400 mt-2">Créé à partir de la classe</p></div>',a,n,m;return n=new je({props:{className:"mt-6 fragment",$$slots:{default:[ci]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("div"),t.innerHTML=$,a=v(),S(n.$$.fragment),this.h()},l(s){e=C(s,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-aj9wlo"&&(e.textContent=o),l=d(s),t=C(s,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-17fw1f8"&&(t.innerHTML=$),a=d(s),E(n.$$.fragment,s),this.h()},h(){h(t,"class","grid grid-cols-2 gap-8 mt-6")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),T(n,s,c),m=!0},p(s,c){const b={};c&1&&(b.$$scope={dirty:c,ctx:s}),n.$set(b)},i(s){m||(A(n.$$.fragment,s),m=!0)},o(s){j(n.$$.fragment,s),m=!1},d(s){s&&(i(e),i(l),i(t),i(a)),H(n,s)}}}function pi(x){let e,o="Créer des objets",l,t,$="Le mot-clé new et les constructeurs",a,n,m=`Maintenant qu'on sait ce qu'est un objet, voyons comment en créer un.\r
			C'est la partie pratique : comment ça marche en mémoire, comment initialiser proprement.`;return{c(){e=_("h2"),e.textContent=o,l=v(),t=_("p"),t.textContent=$,a=v(),n=_("aside"),n.textContent=m,this.h()},l(s){e=C(s,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1mkb5o2"&&(e.textContent=o),l=d(s),t=C(s,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-4k1pcc"&&(t.textContent=$),a=d(s),n=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-q4shbn"&&(n.textContent=m),this.h()},h(){h(e,"class","text-5xl"),h(t,"class","text-2xl text-gray-400"),h(n,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function mi(x){let e=`
Personne jean = new Personne();
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function di(x){let e,o="Créer un objet avec new",l,t,$='Pour créer un objet, on utilise le mot-clé <code class="text-important">new</code> suivi du nom de la classe.',a,n,m,s,c='<p>Que se passe-t-il ?</p> <ol class="text-xl"><li class="fragment">Java alloue de la mémoire pour l&#39;objet</li> <li class="fragment">Le <b>constructeur</b> de la classe est appelé</li> <li class="fragment">L&#39;objet est prêt à être utilisé</li></ol>',b,u,p=`En interne, Java alloue de la mémoire dans le "heap" (tas). La variable jean contient une référence vers cet espace.\r
			Contrairement au C, vous n'avez pas à gérer la mémoire vous-même. Le Garbage Collector s'en charge.\r
			Chaque fois que vous écrivez "new", vous créez un NOUVEL objet en mémoire.`,q;return n=new ie({props:{$$slots:{default:[mi]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.innerHTML=$,a=v(),S(n.$$.fragment),m=v(),s=_("div"),s.innerHTML=c,b=v(),u=_("aside"),u.textContent=p,this.h()},l(f){e=C(f,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1b88vsb"&&(e.textContent=o),l=d(f),t=C(f,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1d9k2wi"&&(t.innerHTML=$),a=d(f),E(n.$$.fragment,f),m=d(f),s=C(f,"DIV",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-u2udmp"&&(s.innerHTML=c),b=d(f),u=C(f,"ASIDE",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-11eo1e6"&&(u.textContent=p),this.h()},h(){h(s,"class","fragment mt-6"),h(u,"class","notes")},m(f,L){r(f,e,L),r(f,l,L),r(f,t,L),r(f,a,L),T(n,f,L),r(f,m,L),r(f,s,L),r(f,b,L),r(f,u,L),q=!0},p(f,L){const M={};L&1&&(M.$$scope={dirty:L,ctx:f}),n.$set(M)},i(f){q||(A(n.$$.fragment,f),q=!0)},o(f){j(n.$$.fragment,f),q=!1},d(f){f&&(i(e),i(l),i(t),i(a),i(m),i(s),i(b),i(u)),H(n,f)}}}function vi(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function xi(x){let e,o="Le constructeur",l,t,$="Le constructeur est une <b>méthode spéciale</b> qui initialise l&#39;objet.",a,n,m,s,c=`Le constructeur a le même nom que la classe, et pas de type de retour.\r
			this fait référence à l'objet en cours de création.`,b;return n=new ie({props:{lines:"5-9|12",$$slots:{default:[vi]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.innerHTML=$,a=v(),S(n.$$.fragment),m=v(),s=_("aside"),s.textContent=c,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1mde0ng"&&(e.textContent=o),l=d(u),t=C(u,"P",{"data-svelte-h":!0}),g(t)!=="svelte-acm114"&&(t.innerHTML=$),a=d(u),E(n.$$.fragment,u),m=d(u),s=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-czfue9"&&(s.textContent=c),this.h()},h(){h(s,"class","notes")},m(u,p){r(u,e,p),r(u,l,p),r(u,t,p),r(u,a,p),T(n,u,p),r(u,m,p),r(u,s,p),b=!0},p(u,p){const q={};p&1&&(q.$$scope={dirty:p,ctx:u}),n.$set(q)},i(u){b||(A(n.$$.fragment,u),b=!0)},o(u){j(n.$$.fragment,u),b=!1},d(u){u&&(i(e),i(l),i(t),i(a),i(m),i(s)),H(n,u)}}}function Ci(x){let e=`
public Personne(String nom, String prenom, int age) {
    this.nom = nom;      // this.nom = attribut de l'objet
    this.prenom = prenom; // nom = paramètre du constructeur
    this.age = age;
}
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function _i(x){let e,o="Le mot-clé this",l,t,$='<code class="text-important">this</code> fait référence à l&#39;objet <b>courant</b>.',a,n,m,s,c="<code>this</code> permet de distinguer l&#39;attribut du paramètre quand ils ont le même nom.",b,u,p=`C'est une convention très courante : donner le même nom au paramètre et à l'attribut.\r
			Sans "this", le paramètre "cache" l'attribut (shadowing). this lève l'ambiguïté.\r
			Certains préfèrent préfixer les paramètres (pNom) ou les attributs (_nom). C'est une question de convention d'équipe.`,q;return n=new ie({props:{$$slots:{default:[Ci]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.innerHTML=$,a=v(),S(n.$$.fragment),m=v(),s=_("p"),s.innerHTML=c,b=v(),u=_("aside"),u.textContent=p,this.h()},l(f){e=C(f,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-639qc6"&&(e.textContent=o),l=d(f),t=C(f,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1d8cgp5"&&(t.innerHTML=$),a=d(f),E(n.$$.fragment,f),m=d(f),s=C(f,"P",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-vxfnkp"&&(s.innerHTML=c),b=d(f),u=C(f,"ASIDE",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-1sk7s1j"&&(u.textContent=p),this.h()},h(){h(s,"class","fragment mt-4 text-accent-200"),h(u,"class","notes")},m(f,L){r(f,e,L),r(f,l,L),r(f,t,L),r(f,a,L),T(n,f,L),r(f,m,L),r(f,s,L),r(f,b,L),r(f,u,L),q=!0},p(f,L){const M={};L&1&&(M.$$scope={dirty:L,ctx:f}),n.$set(M)},i(f){q||(A(n.$$.fragment,f),q=!0)},o(f){j(n.$$.fragment,f),q=!1},d(f){f&&(i(e),i(l),i(t),i(a),i(m),i(s),i(b),i(u)),H(n,f)}}}function hi(x){let e=`
public class Personne {
    String nom;
    int age;
    // Pas de constructeur défini → constructeur par défaut
}

Personne p = new Personne();  // ✅ OK
p.nom = "Jean";               // On initialise après
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function gi(x){let e,o="Constructeur par défaut",l,t,$="Si vous ne définissez aucun constructeur, Java en crée un <b>par défaut</b> (sans paramètres).",a,n,m,s,c="⚠️ Dès que vous définissez un constructeur, le constructeur par défaut disparaît !",b,u,p=`C'est un piège classique ! Si vous définissez Personne(String nom), alors new Personne() ne compile plus.\r
			Solution : définir explicitement un constructeur sans paramètres si vous en avez besoin.\r
			Les frameworks (Hibernate, Spring) ont souvent besoin du constructeur par défaut pour l'instanciation dynamique.`,q;return n=new ie({props:{$$slots:{default:[hi]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.innerHTML=$,a=v(),S(n.$$.fragment),m=v(),s=_("p"),s.textContent=c,b=v(),u=_("aside"),u.textContent=p,this.h()},l(f){e=C(f,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-u9v1v7"&&(e.textContent=o),l=d(f),t=C(f,"P",{"data-svelte-h":!0}),g(t)!=="svelte-m9el1s"&&(t.innerHTML=$),a=d(f),E(n.$$.fragment,f),m=d(f),s=C(f,"P",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-108fh85"&&(s.textContent=c),b=d(f),u=C(f,"ASIDE",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-1442ab0"&&(u.textContent=p),this.h()},h(){h(s,"class","fragment text-red-400 mt-4"),h(u,"class","notes")},m(f,L){r(f,e,L),r(f,l,L),r(f,t,L),r(f,a,L),T(n,f,L),r(f,m,L),r(f,s,L),r(f,b,L),r(f,u,L),q=!0},p(f,L){const M={};L&1&&(M.$$scope={dirty:L,ctx:f}),n.$set(M)},i(f){q||(A(n.$$.fragment,f),q=!0)},o(f){j(n.$$.fragment,f),q=!1},d(f){f&&(i(e),i(l),i(t),i(a),i(m),i(s),i(b),i(u)),H(n,f)}}}function bi(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Li(x){let e,o="Surcharge de constructeurs",l,t,$="Une classe peut avoir <b>plusieurs constructeurs</b> avec des paramètres différents.",a,n,m,s,c="<code>this(...)</code> permet d&#39;appeler un autre constructeur de la même classe.",b,u,p=`C'est le "constructor chaining". Très utile pour éviter la duplication de code.\r
			Le this() doit être la première instruction du constructeur, comme super().\r
			On voit souvent ça avec des valeurs par défaut : le constructeur simple appelle le complet.`,q;return n=new ie({props:{lines:"6-10|12-15",$$slots:{default:[bi]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.innerHTML=$,a=v(),S(n.$$.fragment),m=v(),s=_("p"),s.innerHTML=c,b=v(),u=_("aside"),u.textContent=p,this.h()},l(f){e=C(f,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1v37pf9"&&(e.textContent=o),l=d(f),t=C(f,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1x1viiv"&&(t.innerHTML=$),a=d(f),E(n.$$.fragment,f),m=d(f),s=C(f,"P",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-sqjnx"&&(s.innerHTML=c),b=d(f),u=C(f,"ASIDE",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-1x33foq"&&(u.textContent=p),this.h()},h(){h(s,"class","fragment text-accent-200 mt-4"),h(u,"class","notes")},m(f,L){r(f,e,L),r(f,l,L),r(f,t,L),r(f,a,L),T(n,f,L),r(f,m,L),r(f,s,L),r(f,b,L),r(f,u,L),q=!0},p(f,L){const M={};L&1&&(M.$$scope={dirty:L,ctx:f}),n.$set(M)},i(f){q||(A(n.$$.fragment,f),q=!0)},o(f){j(n.$$.fragment,f),q=!1},d(f){f&&(i(e),i(l),i(t),i(a),i(m),i(s),i(b),i(u)),H(n,f)}}}function qi(x){let e,o="Les références en Java",l,t,$="Comprendre ce que contient vraiment une variable",a,n,m=`Avant de continuer, il faut comprendre un concept fondamental.\r
			En Java, les variables d'objets ne contiennent pas l'objet lui-même... mais une référence vers l'objet.\r
			C'est comme une adresse postale vs la maison elle-même.`;return{c(){e=_("h2"),e.textContent=o,l=v(),t=_("p"),t.textContent=$,a=v(),n=_("aside"),n.textContent=m,this.h()},l(s){e=C(s,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-w9ik6f"&&(e.textContent=o),l=d(s),t=C(s,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-19x3pgb"&&(t.textContent=$),a=d(s),n=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-28inpz"&&(n.textContent=m),this.h()},h(){h(e,"class","text-5xl"),h(t,"class","text-2xl text-gray-400"),h(n,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function wi(x){let e=`
Personne jean = new Personne("Jean");
Personne copie = jean;  // copie la RÉFÉRENCE, pas l'objet !

copie.setAge(30);
System.out.println(jean.getAge());  // Affiche 30 ! 😱
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Pi(x){let e,o="Une variable = une référence",l,t,$="Quand vous écrivez <code>Personne jean = new Personne();</code>, que se passe-t-il ?",a,n,m='<div class="fragment"><h4 class="text-accent-200">📍 La variable</h4> <p class="text-xl">Contient une <b>adresse mémoire</b></p> <p class="text-sm text-gray-400">(comme un numéro de casier)</p></div> <div class="fragment"><h4 class="text-accent-200">📦 L&#39;objet</h4> <p class="text-xl">Stocké ailleurs en mémoire (le <b>heap</b>)</p> <p class="text-sm text-gray-400">(le contenu du casier)</p></div>',s,c,b,u,p=`C'est LE piège des débutants. Deux variables peuvent pointer vers le même objet.\r
			Modifier via une variable modifie l'objet, visible depuis l'autre variable.\r
			C'est différent des types primitifs (int, double) qui sont copiés par valeur.`,q;return c=new ie({props:{class:"fragment mt-6",$$slots:{default:[wi]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.innerHTML=$,a=v(),n=_("div"),n.innerHTML=m,s=v(),S(c.$$.fragment),b=v(),u=_("aside"),u.textContent=p,this.h()},l(f){e=C(f,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1cxx8q6"&&(e.textContent=o),l=d(f),t=C(f,"P",{"data-svelte-h":!0}),g(t)!=="svelte-1led4kt"&&(t.innerHTML=$),a=d(f),n=C(f,"DIV",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-6gkr7d"&&(n.innerHTML=m),s=d(f),E(c.$$.fragment,f),b=d(f),u=C(f,"ASIDE",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-d4bv15"&&(u.textContent=p),this.h()},h(){h(n,"class","grid grid-cols-2 gap-8 mt-6"),h(u,"class","notes")},m(f,L){r(f,e,L),r(f,l,L),r(f,t,L),r(f,a,L),r(f,n,L),r(f,s,L),T(c,f,L),r(f,b,L),r(f,u,L),q=!0},p(f,L){const M={};L&1&&(M.$$scope={dirty:L,ctx:f}),c.$set(M)},i(f){q||(A(c.$$.fragment,f),q=!0)},o(f){j(c.$$.fragment,f),q=!1},d(f){f&&(i(e),i(l),i(t),i(a),i(n),i(s),i(b),i(u)),H(c,f)}}}function Mi(x){let e=`
Personne personne = null;  // Aucun objet référencé

// C'est souvent le cas quand :
Personne resultat = chercherParNom("Toto");  // Pas trouvé → null
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Hi(x){let e,o="La valeur spéciale : null",l,t,$='Une variable peut ne pointer vers <b>rien</b>. C&#39;est la valeur <code class="text-important">null</code>.',a,n,m,s,c="⚠️ <code>null</code> signifie &quot;absence d&#39;objet&quot;. Ce n&#39;est pas un objet vide !",b,u,p=`Null c'est "rien", pas "vide". Une liste vide existe (0 éléments), null n'existe pas du tout.\r
			C'est une distinction cruciale. Null = pas de référence. Vide = objet qui ne contient rien.`,q;return n=new ie({props:{$$slots:{default:[Mi]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.innerHTML=$,a=v(),S(n.$$.fragment),m=v(),s=_("p"),s.innerHTML=c,b=v(),u=_("aside"),u.textContent=p,this.h()},l(f){e=C(f,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-upq93p"&&(e.textContent=o),l=d(f),t=C(f,"P",{"data-svelte-h":!0}),g(t)!=="svelte-2fjoo4"&&(t.innerHTML=$),a=d(f),E(n.$$.fragment,f),m=d(f),s=C(f,"P",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-yi5ddp"&&(s.innerHTML=c),b=d(f),u=C(f,"ASIDE",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-j2xogk"&&(u.textContent=p),this.h()},h(){h(s,"class","fragment mt-6 text-red-400 font-bold"),h(u,"class","notes")},m(f,L){r(f,e,L),r(f,l,L),r(f,t,L),r(f,a,L),T(n,f,L),r(f,m,L),r(f,s,L),r(f,b,L),r(f,u,L),q=!0},p(f,L){const M={};L&1&&(M.$$scope={dirty:L,ctx:f}),n.$set(M)},i(f){q||(A(n.$$.fragment,f),q=!0)},o(f){j(n.$$.fragment,f),q=!1},d(f){f&&(i(e),i(l),i(t),i(a),i(m),i(s),i(b),i(u)),H(n,f)}}}function ji(x){let e=`
Personne personne = null;
personne.getNom();  // ❌ NullPointerException !

// Le message d'erreur :
// Exception in thread "main" java.lang.NullPointerException:
// Cannot invoke "Personne.getNom()" because "personne" is null
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Ai(x){let e=`
if (personne != null) {
    System.out.println(personne.getNom());
}
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Ti(x){let e,o="Le bug le plus fréquent : NullPointerException",l,t,$="Si vous appelez une méthode sur <code>null</code>... 💥",a,n,m,s,c,b="✅ Toujours vérifier avant d'utiliser :",u,p,q,f,L=`C'est LE bug numéro 1 en Java. Tony Hoare, l'inventeur de null, l'a appelé "son erreur à un milliard de dollars".\r
			Vous verrez NullPointerException des centaines de fois dans votre carrière. Apprenez à le débugger !\r
			Le message vous dit quelle variable est null. Remontez le fil pour comprendre pourquoi.`,M;return n=new ie({props:{$$slots:{default:[ji]},$$scope:{ctx:x}}}),p=new ie({props:{$$slots:{default:[Ai]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.innerHTML=$,a=v(),S(n.$$.fragment),m=v(),s=_("div"),c=_("p"),c.textContent=b,u=v(),S(p.$$.fragment),q=v(),f=_("aside"),f.textContent=L,this.h()},l(w){e=C(w,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-v1skb"&&(e.textContent=o),l=d(w),t=C(w,"P",{"data-svelte-h":!0}),g(t)!=="svelte-rde3pg"&&(t.innerHTML=$),a=d(w),E(n.$$.fragment,w),m=d(w),s=C(w,"DIV",{class:!0});var I=ue(s);c=C(I,"P",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-10calxs"&&(c.textContent=b),u=d(I),E(p.$$.fragment,I),I.forEach(i),q=d(w),f=C(w,"ASIDE",{class:!0,"data-svelte-h":!0}),g(f)!=="svelte-hug8y1"&&(f.textContent=L),this.h()},h(){h(c,"class","text-green-400 font-bold"),h(s,"class","fragment mt-6"),h(f,"class","notes")},m(w,I){r(w,e,I),r(w,l,I),r(w,t,I),r(w,a,I),T(n,w,I),r(w,m,I),r(w,s,I),ee(s,c),ee(s,u),T(p,s,null),r(w,q,I),r(w,f,I),M=!0},p(w,I){const B={};I&1&&(B.$$scope={dirty:I,ctx:w}),n.$set(B);const Q={};I&1&&(Q.$$scope={dirty:I,ctx:w}),p.$set(Q)},i(w){M||(A(n.$$.fragment,w),A(p.$$.fragment,w),M=!0)},o(w){j(n.$$.fragment,w),j(p.$$.fragment,w),M=!1},d(w){w&&(i(e),i(l),i(t),i(a),i(m),i(s),i(q),i(f)),H(n,w),H(p)}}}function Ei(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Si(x){let e,o="Bonne pratique : programmation défensive",l,t,$,a,n="💡 En entreprise, beaucoup d&#39;erreurs viennent de <code>null</code> non géré.",m,s,c=`C'est la base de la "programmation défensive". Ne faites jamais confiance aux données entrantes.\r
			Les frameworks modernes (Spring) peuvent injecter @NonNull pour éviter ça.\r
			Depuis Java 8, on a Optional pour mieux gérer l'absence de valeur.`,b;return t=new ie({props:{$$slots:{default:[Ei]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),S(t.$$.fragment),$=v(),a=_("p"),a.innerHTML=n,m=v(),s=_("aside"),s.textContent=c,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1o2ciiy"&&(e.textContent=o),l=d(u),E(t.$$.fragment,u),$=d(u),a=C(u,"P",{class:!0,"data-svelte-h":!0}),g(a)!=="svelte-i5ewro"&&(a.innerHTML=n),m=d(u),s=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-1elh71j"&&(s.textContent=c),this.h()},h(){h(a,"class","fragment mt-4 text-accent-200"),h(s,"class","notes")},m(u,p){r(u,e,p),r(u,l,p),T(t,u,p),r(u,$,p),r(u,a,p),r(u,m,p),r(u,s,p),b=!0},p(u,p){const q={};p&1&&(q.$$scope={dirty:p,ctx:u}),t.$set(q)},i(u){b||(A(t.$$.fragment,u),b=!0)},o(u){j(t.$$.fragment,u),b=!1},d(u){u&&(i(e),i(l),i($),i(a),i(m),i(s)),H(t,u)}}}function Di(x){let e,o="Comparer des objets",l,t,$="== vs equals() : le piège classique",a,n,m=`Maintenant qu'on sait ce qu'est une référence, on peut comprendre un autre piège majeur.\r
			Comment comparer deux objets ? C'est plus subtil qu'il n'y paraît.`;return{c(){e=_("h2"),e.textContent=o,l=v(),t=_("p"),t.textContent=$,a=v(),n=_("aside"),n.textContent=m,this.h()},l(s){e=C(s,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-14qtv6e"&&(e.textContent=o),l=d(s),t=C(s,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1plewz8"&&(t.textContent=$),a=d(s),n=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-5njids"&&(n.textContent=m),this.h()},h(){h(e,"class","text-5xl"),h(t,"class","text-2xl text-gray-400"),h(n,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function Ii(x){let e=`
String a = new String("Bonjour");
String b = new String("Bonjour");

System.out.println(a == b);  // false ! 😱
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function ki(x){let e=`
@startuml
object "a" as a
object "b" as b
object "String: Bonjour" as s1
object "String: Bonjour" as s2

a --> s1 : référence
b --> s2 : référence
@enduml
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function zi(x){let e,o="Le piège de ==",l,t,$,a,n="<code>==</code> compare les <b>références</b> (les adresses mémoire), pas le contenu !",m,s,c,b,u=`a et b pointent vers deux objets différents en mémoire. Même si le contenu est identique, ce sont deux casiers différents.\r
			C'est le piège classique des débutants avec les String. "Bonjour" == "Bonjour" mais new String != new String.`,p;return t=new ie({props:{$$slots:{default:[Ii]},$$scope:{ctx:x}}}),s=new je({props:{className:"fragment",$$slots:{default:[ki]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),S(t.$$.fragment),$=v(),a=_("p"),a.innerHTML=n,m=v(),S(s.$$.fragment),c=v(),b=_("aside"),b.textContent=u,this.h()},l(q){e=C(q,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-lc3ih1"&&(e.textContent=o),l=d(q),E(t.$$.fragment,q),$=d(q),a=C(q,"P",{class:!0,"data-svelte-h":!0}),g(a)!=="svelte-czybt8"&&(a.innerHTML=n),m=d(q),E(s.$$.fragment,q),c=d(q),b=C(q,"ASIDE",{class:!0,"data-svelte-h":!0}),g(b)!=="svelte-2rsw1p"&&(b.textContent=u),this.h()},h(){h(a,"class","fragment mt-6"),h(b,"class","notes")},m(q,f){r(q,e,f),r(q,l,f),T(t,q,f),r(q,$,f),r(q,a,f),r(q,m,f),T(s,q,f),r(q,c,f),r(q,b,f),p=!0},p(q,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:q}),t.$set(L);const M={};f&1&&(M.$$scope={dirty:f,ctx:q}),s.$set(M)},i(q){p||(A(t.$$.fragment,q),A(s.$$.fragment,q),p=!0)},o(q){j(t.$$.fragment,q),j(s.$$.fragment,q),p=!1},d(q){q&&(i(e),i(l),i($),i(a),i(m),i(c),i(b)),H(t,q),H(s,q)}}}function Vi(x){let e=`
String a = new String("Bonjour");
String b = new String("Bonjour");

System.out.println(a.equals(b));  // true ✅
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Oi(x){let e,o="La solution : equals()",l,t,$='Pour comparer le <b>contenu</b> des objets, utilisez la méthode <code class="text-important">equals()</code>.',a,n,m,s,c='<div class="p-4 bg-red-900/30 rounded-lg"><h4 class="text-red-400">== (double égal)</h4> <p class="text-sm">Compare les <b>références</b></p> <p class="text-xs text-gray-400">&quot;Est-ce le même objet ?&quot;</p></div> <div class="p-4 bg-green-900/30 rounded-lg"><h4 class="text-green-400">equals()</h4> <p class="text-sm">Compare le <b>contenu</b></p> <p class="text-xs text-gray-400">&quot;Ont-ils la même valeur ?&quot;</p></div>',b,u,p=`C'est LA règle à retenir. Pour les objets, utilisez equals(). Pour les primitifs (int, double), utilisez ==.\r
			String, Integer, toutes les classes du JDK redéfinissent equals() pour comparer le contenu.`,q;return n=new ie({props:{$$slots:{default:[Vi]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),t=_("p"),t.innerHTML=$,a=v(),S(n.$$.fragment),m=v(),s=_("div"),s.innerHTML=c,b=v(),u=_("aside"),u.textContent=p,this.h()},l(f){e=C(f,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-15y6242"&&(e.textContent=o),l=d(f),t=C(f,"P",{"data-svelte-h":!0}),g(t)!=="svelte-gx1ssy"&&(t.innerHTML=$),a=d(f),E(n.$$.fragment,f),m=d(f),s=C(f,"DIV",{class:!0,"data-svelte-h":!0}),g(s)!=="svelte-1ccb8r3"&&(s.innerHTML=c),b=d(f),u=C(f,"ASIDE",{class:!0,"data-svelte-h":!0}),g(u)!=="svelte-1lxylnx"&&(u.textContent=p),this.h()},h(){h(s,"class","fragment mt-6 grid grid-cols-2 gap-4"),h(u,"class","notes")},m(f,L){r(f,e,L),r(f,l,L),r(f,t,L),r(f,a,L),T(n,f,L),r(f,m,L),r(f,s,L),r(f,b,L),r(f,u,L),q=!0},p(f,L){const M={};L&1&&(M.$$scope={dirty:L,ctx:f}),n.$set(M)},i(f){q||(A(n.$$.fragment,f),q=!0)},o(f){j(n.$$.fragment,f),q=!1},d(f){f&&(i(e),i(l),i(t),i(a),i(m),i(s),i(b),i(u)),H(n,f)}}}function Ui(x){let e=`
String a = null;
String b = "Bonjour";

a.equals(b);  // ❌ NullPointerException !
b.equals(a);  // ✅ false (equals gère null)
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Ri(x){let e=`
// Pattern sécurisé avec une constante
"admin".equals(username);  // ✅ Jamais de NPE
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Ni(x){let e,o="⚠️ Attention à null avec equals()",l,t,$,a,n='💡 Astuce : mettez la valeur "sûre" (non-null) à gauche !',m,s,c,b,u=`C'est un pattern très courant. En mettant la constante à gauche, on évite le NPE.\r
			Depuis Java 7, on a aussi Objects.equals(a, b) qui gère null des deux côtés.`,p;return t=new ie({props:{$$slots:{default:[Ui]},$$scope:{ctx:x}}}),s=new ie({props:{class:"fragment",$$slots:{default:[Ri]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),S(t.$$.fragment),$=v(),a=_("p"),a.textContent=n,m=v(),S(s.$$.fragment),c=v(),b=_("aside"),b.textContent=u,this.h()},l(q){e=C(q,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-fvccpn"&&(e.textContent=o),l=d(q),E(t.$$.fragment,q),$=d(q),a=C(q,"P",{class:!0,"data-svelte-h":!0}),g(a)!=="svelte-eaq14x"&&(a.textContent=n),m=d(q),E(s.$$.fragment,q),c=d(q),b=C(q,"ASIDE",{class:!0,"data-svelte-h":!0}),g(b)!=="svelte-1qgora1"&&(b.textContent=u),this.h()},h(){h(a,"class","fragment mt-6 text-accent-200 font-bold"),h(b,"class","notes")},m(q,f){r(q,e,f),r(q,l,f),T(t,q,f),r(q,$,f),r(q,a,f),r(q,m,f),T(s,q,f),r(q,c,f),r(q,b,f),p=!0},p(q,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:q}),t.$set(L);const M={};f&1&&(M.$$scope={dirty:f,ctx:q}),s.$set(M)},i(q){p||(A(t.$$.fragment,q),A(s.$$.fragment,q),p=!0)},o(q){j(t.$$.fragment,q),j(s.$$.fragment,q),p=!1},d(q){q&&(i(e),i(l),i($),i(a),i(m),i(c),i(b)),H(t,q),H(s,q)}}}function Ji(x){let e,o="Récapitulatif : comparaisons",l,t,$='<thead><tr><th class="p-3">Type</th> <th class="p-3">Opérateur</th> <th class="p-3">Exemple</th></tr></thead> <tbody><tr><td class="p-3">Primitifs (int, double...)</td> <td class="p-3"><code>==</code></td> <td class="p-3"><code>age == 25</code></td></tr> <tr><td class="p-3">Objets (contenu)</td> <td class="p-3"><code>equals()</code></td> <td class="p-3"><code>nom.equals(&quot;Jean&quot;)</code></td></tr> <tr><td class="p-3">Objets (même instance)</td> <td class="p-3"><code>==</code></td> <td class="p-3"><code>obj1 == obj2</code></td></tr> <tr><td class="p-3">Vérifier null</td> <td class="p-3"><code>==</code></td> <td class="p-3"><code>obj == null</code></td></tr></tbody>',a,n,m=`Retenez ce tableau ! Primitifs → ==. Objets contenu → equals(). Null check → ==.\r
			On verra plus tard comment redéfinir equals() pour vos propres classes.`;return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("table"),t.innerHTML=$,a=v(),n=_("aside"),n.textContent=m,this.h()},l(s){e=C(s,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1fu33u2"&&(e.textContent=o),l=d(s),t=C(s,"TABLE",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1wzfw0k"&&(t.innerHTML=$),a=d(s),n=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-o2lw9f"&&(n.textContent=m),this.h()},h(){h(t,"class","text-xl"),h(n,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function Bi(x){let e,o="Récapitulatif",l,t,$='<div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">📐 Classes</h4> <ul class="text-sm mt-2"><li>Classe = plan</li> <li>Objet = instance</li> <li>Attributs + méthodes</li></ul></div> <div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">🏗️ Création</h4> <ul class="text-sm mt-2"><li><code>new</code> crée un objet</li> <li>Constructeur initialise</li> <li><code>this</code> = objet courant</li></ul></div> <div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">🔗 Références</h4> <ul class="text-sm mt-2"><li>Variable = référence</li> <li><code>null</code> = rien</li> <li><code>equals()</code> pour comparer</li></ul></div>',a,n,m="🔮 Maintenant, voyons comment <b>protéger</b> nos données avec l&#39;encapsulation !",s,c,b=`Voilà les bases. Classe = moule, objet = instance concrète. New = création, constructeur = initialisation.\r
			Les variables contiennent des références, null = pas d'objet, equals() pour comparer le contenu.\r
			On passe à l'encapsulation pour apprendre à protéger nos données.`;return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("div"),t.innerHTML=$,a=v(),n=_("p"),n.innerHTML=m,s=v(),c=_("aside"),c.textContent=b,this.h()},l(u){e=C(u,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-ri7iuh"&&(e.textContent=o),l=d(u),t=C(u,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1uwtkma"&&(t.innerHTML=$),a=d(u),n=C(u,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1msb34k"&&(n.innerHTML=m),s=d(u),c=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-1oez020"&&(c.textContent=b),this.h()},h(){h(t,"class","grid grid-cols-3 gap-4 mt-6"),h(n,"class","fragment mt-8 text-accent-200 text-xl"),h(c,"class","notes")},m(u,p){r(u,e,p),r(u,l,p),r(u,t,p),r(u,a,p),r(u,n,p),r(u,s,p),r(u,c,p)},p:N,d(u){u&&(i(e),i(l),i(t),i(a),i(n),i(s),i(c))}}}function Fi(x){let e,o="Généralités sur la POO",l,t,$,a,n,m,s,c,b,u,p,q,f,L,M,w,I,B,Q,K,D,F,ne,O,le,ae,ce,re,pe,oe,$e,fe,me,U,te,R,se,de,_e,V,W,ve,he;return t=new J({props:{$$slots:{default:[ri]},$$scope:{ctx:x}}}),a=new J({props:{$$slots:{default:[ui]},$$scope:{ctx:x}}}),m=new J({props:{$$slots:{default:[fi]},$$scope:{ctx:x}}}),c=new J({props:{$$slots:{default:[$i]},$$scope:{ctx:x}}}),u=new J({props:{data_background_color:"#1a1a2e",$$slots:{default:[pi]},$$scope:{ctx:x}}}),q=new J({props:{$$slots:{default:[di]},$$scope:{ctx:x}}}),L=new J({props:{$$slots:{default:[xi]},$$scope:{ctx:x}}}),w=new J({props:{$$slots:{default:[_i]},$$scope:{ctx:x}}}),B=new J({props:{$$slots:{default:[gi]},$$scope:{ctx:x}}}),K=new J({props:{$$slots:{default:[Li]},$$scope:{ctx:x}}}),F=new J({props:{data_background_color:"#1a1a2e",$$slots:{default:[qi]},$$scope:{ctx:x}}}),O=new J({props:{$$slots:{default:[Pi]},$$scope:{ctx:x}}}),ae=new J({props:{$$slots:{default:[Hi]},$$scope:{ctx:x}}}),re=new J({props:{$$slots:{default:[Ti]},$$scope:{ctx:x}}}),oe=new J({props:{$$slots:{default:[Si]},$$scope:{ctx:x}}}),fe=new J({props:{data_background_color:"#1a1a2e",$$slots:{default:[Di]},$$scope:{ctx:x}}}),U=new J({props:{$$slots:{default:[zi]},$$scope:{ctx:x}}}),R=new J({props:{$$slots:{default:[Oi]},$$scope:{ctx:x}}}),de=new J({props:{$$slots:{default:[Ni]},$$scope:{ctx:x}}}),V=new J({props:{$$slots:{default:[Ji]},$$scope:{ctx:x}}}),ve=new J({props:{$$slots:{default:[Bi]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),S(t.$$.fragment),$=v(),S(a.$$.fragment),n=v(),S(m.$$.fragment),s=v(),S(c.$$.fragment),b=v(),S(u.$$.fragment),p=v(),S(q.$$.fragment),f=v(),S(L.$$.fragment),M=v(),S(w.$$.fragment),I=v(),S(B.$$.fragment),Q=v(),S(K.$$.fragment),D=v(),S(F.$$.fragment),ne=v(),S(O.$$.fragment),le=v(),S(ae.$$.fragment),ce=v(),S(re.$$.fragment),pe=v(),S(oe.$$.fragment),$e=v(),S(fe.$$.fragment),me=v(),S(U.$$.fragment),te=v(),S(R.$$.fragment),se=v(),S(de.$$.fragment),_e=v(),S(V.$$.fragment),W=v(),S(ve.$$.fragment)},l(z){e=C(z,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-lsottk"&&(e.textContent=o),l=d(z),E(t.$$.fragment,z),$=d(z),E(a.$$.fragment,z),n=d(z),E(m.$$.fragment,z),s=d(z),E(c.$$.fragment,z),b=d(z),E(u.$$.fragment,z),p=d(z),E(q.$$.fragment,z),f=d(z),E(L.$$.fragment,z),M=d(z),E(w.$$.fragment,z),I=d(z),E(B.$$.fragment,z),Q=d(z),E(K.$$.fragment,z),D=d(z),E(F.$$.fragment,z),ne=d(z),E(O.$$.fragment,z),le=d(z),E(ae.$$.fragment,z),ce=d(z),E(re.$$.fragment,z),pe=d(z),E(oe.$$.fragment,z),$e=d(z),E(fe.$$.fragment,z),me=d(z),E(U.$$.fragment,z),te=d(z),E(R.$$.fragment,z),se=d(z),E(de.$$.fragment,z),_e=d(z),E(V.$$.fragment,z),W=d(z),E(ve.$$.fragment,z)},m(z,X){r(z,e,X),r(z,l,X),T(t,z,X),r(z,$,X),T(a,z,X),r(z,n,X),T(m,z,X),r(z,s,X),T(c,z,X),r(z,b,X),T(u,z,X),r(z,p,X),T(q,z,X),r(z,f,X),T(L,z,X),r(z,M,X),T(w,z,X),r(z,I,X),T(B,z,X),r(z,Q,X),T(K,z,X),r(z,D,X),T(F,z,X),r(z,ne,X),T(O,z,X),r(z,le,X),T(ae,z,X),r(z,ce,X),T(re,z,X),r(z,pe,X),T(oe,z,X),r(z,$e,X),T(fe,z,X),r(z,me,X),T(U,z,X),r(z,te,X),T(R,z,X),r(z,se,X),T(de,z,X),r(z,_e,X),T(V,z,X),r(z,W,X),T(ve,z,X),he=!0},p(z,X){const k={};X&1&&(k.$$scope={dirty:X,ctx:z}),t.$set(k);const Y={};X&1&&(Y.$$scope={dirty:X,ctx:z}),a.$set(Y);const qe={};X&1&&(qe.$$scope={dirty:X,ctx:z}),m.$set(qe);const ge={};X&1&&(ge.$$scope={dirty:X,ctx:z}),c.$set(ge);const we={};X&1&&(we.$$scope={dirty:X,ctx:z}),u.$set(we);const be={};X&1&&(be.$$scope={dirty:X,ctx:z}),q.$set(be);const Ae={};X&1&&(Ae.$$scope={dirty:X,ctx:z}),L.$set(Ae);const Le={};X&1&&(Le.$$scope={dirty:X,ctx:z}),w.$set(Le);const Te={};X&1&&(Te.$$scope={dirty:X,ctx:z}),B.$set(Te);const Pe={};X&1&&(Pe.$$scope={dirty:X,ctx:z}),K.$set(Pe);const Ie={};X&1&&(Ie.$$scope={dirty:X,ctx:z}),F.$set(Ie);const Me={};X&1&&(Me.$$scope={dirty:X,ctx:z}),O.$set(Me);const ke={};X&1&&(ke.$$scope={dirty:X,ctx:z}),ae.$set(ke);const He={};X&1&&(He.$$scope={dirty:X,ctx:z}),re.$set(He);const ze={};X&1&&(ze.$$scope={dirty:X,ctx:z}),oe.$set(ze);const Ee={};X&1&&(Ee.$$scope={dirty:X,ctx:z}),fe.$set(Ee);const Je={};X&1&&(Je.$$scope={dirty:X,ctx:z}),U.$set(Je);const Se={};X&1&&(Se.$$scope={dirty:X,ctx:z}),R.$set(Se);const Be={};X&1&&(Be.$$scope={dirty:X,ctx:z}),de.$set(Be);const De={};X&1&&(De.$$scope={dirty:X,ctx:z}),V.$set(De);const Fe={};X&1&&(Fe.$$scope={dirty:X,ctx:z}),ve.$set(Fe)},i(z){he||(A(t.$$.fragment,z),A(a.$$.fragment,z),A(m.$$.fragment,z),A(c.$$.fragment,z),A(u.$$.fragment,z),A(q.$$.fragment,z),A(L.$$.fragment,z),A(w.$$.fragment,z),A(B.$$.fragment,z),A(K.$$.fragment,z),A(F.$$.fragment,z),A(O.$$.fragment,z),A(ae.$$.fragment,z),A(re.$$.fragment,z),A(oe.$$.fragment,z),A(fe.$$.fragment,z),A(U.$$.fragment,z),A(R.$$.fragment,z),A(de.$$.fragment,z),A(V.$$.fragment,z),A(ve.$$.fragment,z),he=!0)},o(z){j(t.$$.fragment,z),j(a.$$.fragment,z),j(m.$$.fragment,z),j(c.$$.fragment,z),j(u.$$.fragment,z),j(q.$$.fragment,z),j(L.$$.fragment,z),j(w.$$.fragment,z),j(B.$$.fragment,z),j(K.$$.fragment,z),j(F.$$.fragment,z),j(O.$$.fragment,z),j(ae.$$.fragment,z),j(re.$$.fragment,z),j(oe.$$.fragment,z),j(fe.$$.fragment,z),j(U.$$.fragment,z),j(R.$$.fragment,z),j(de.$$.fragment,z),j(V.$$.fragment,z),j(ve.$$.fragment,z),he=!1},d(z){z&&(i(e),i(l),i($),i(n),i(s),i(b),i(p),i(f),i(M),i(I),i(Q),i(D),i(ne),i(le),i(ce),i(pe),i($e),i(me),i(te),i(se),i(_e),i(W)),H(t,z),H(a,z),H(m,z),H(c,z),H(u,z),H(q,z),H(L,z),H(w,z),H(B,z),H(K,z),H(F,z),H(O,z),H(ae,z),H(re,z),H(oe,z),H(fe,z),H(U,z),H(R,z),H(de,z),H(V,z),H(ve,z)}}}function Gi(x){let e,o;return e=new J({props:{$$slots:{default:[Fi]},$$scope:{ctx:x}}}),{c(){S(e.$$.fragment)},l(l){E(e.$$.fragment,l)},m(l,t){T(e,l,t),o=!0},p(l,[t]){const $={};t&1&&($.$$scope={dirty:t,ctx:l}),e.$set($)},i(l){o||(A(e.$$.fragment,l),o=!0)},o(l){j(e.$$.fragment,l),o=!1},d(l){H(e,l)}}}class Qi extends Oe{constructor(e){super(),Ue(this,e,null,Gi,Ve,{})}}function Ki(x){let e,o="Usage de l’IA dans ce module",l,t,$="L’IA n’est <b>pas autorisée</b> pendant le module",a,n,m=`Les modalités d'évaluation sont pensées pour que l'IA ne vous apporte aucun avantage, voire
			vous desserve.`;return{c(){e=_("h2"),e.textContent=o,l=v(),t=_("span"),t.innerHTML=$,a=v(),n=_("p"),n.textContent=m,this.h()},l(s){e=C(s,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-1gojwpb"&&(e.textContent=o),l=d(s),t=C(s,"SPAN",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-35mnki"&&(t.innerHTML=$),a=d(s),n=C(s,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1ydzg9u"&&(n.textContent=m),this.h()},h(){h(t,"class","font-bold text-[2em] underline"),h(n,"class","note")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function Yi(x){let e,o="Pourquoi l’IA pose problème à ce stade",l,t,$="<li><b>1. Dette cognitive</b> — L&#39;IA empêche d&#39;apprendre par la pratique et l&#39;erreur.</li> <li><b>2. Béquille pour débutants</b> — Elle favorise ceux qui maîtrisent déjà.</li> <li><b>3. Usage passif</b> — Risque de perte de compétences.</li> <li><b>4. Illusion de facilité</b> — On réfléchit moins aux étapes.</li>",a,n,m="<p>Vidéo explicative</p>";return{c(){e=_("h2"),e.textContent=o,l=v(),t=_("ul"),t.innerHTML=$,a=v(),n=_("a"),n.innerHTML=m,this.h()},l(s){e=C(s,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-16y47ua"&&(e.textContent=o),l=d(s),t=C(s,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-dhzepp"&&(t.innerHTML=$),a=d(s),n=C(s,"A",{href:!0,target:!0,"data-svelte-h":!0}),g(n)!=="svelte-cz1rtj"&&(n.innerHTML=m),this.h()},h(){h(n,"href","https://youtu.be/4xq6bVbS-Pw?si=bhTuVdU7iN5ijJzg&t=653"),h(n,"target","_blank")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function Xi(x){let e,o="Constat côté entreprise",l,t,$="<li>Des profils juniors très à l’aise avec l’IA</li> <li>Mais en difficulté dès qu’il faut :</li> <ul><li>débugger un problème</li> <li>expliquer un choix technique</li> <li>adapter une solution existante</li></ul>",a,n,m=`Le problème n’est pas l’IA,<br/>
			mais son usage trop précoce et non maîtrisé.`;return{c(){e=_("h2"),e.textContent=o,l=v(),t=_("ul"),t.innerHTML=$,a=v(),n=_("p"),n.innerHTML=m,this.h()},l(s){e=C(s,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-qqrjer"&&(e.textContent=o),l=d(s),t=C(s,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-1cewx67"&&(t.innerHTML=$),a=d(s),n=C(s,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1n46xu8"&&(n.innerHTML=m),this.h()},h(){h(n,"class","note")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function Wi(x){let e,o="Utiliser l’IA intelligemment",l,t,$="<li>IA utilisée comme <b>tuteur</b>, pas comme générateur</li> <li>Pas de réponses directes</li> <li>Questions, feedback, progression guidée</li>",a,n,m=`Apprendre correctement avec l’IA<br/>
			produit de meilleurs résultats<br/>
			que l’utiliser sans méthode.`,s,c,b='<p class="note">Source : AI Tutoring Outperforms Active Learning</p>';return{c(){e=_("h2"),e.textContent=o,l=v(),t=_("ul"),t.innerHTML=$,a=v(),n=_("p"),n.innerHTML=m,s=v(),c=_("a"),c.innerHTML=b,this.h()},l(u){e=C(u,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-1nebpg"&&(e.textContent=o),l=d(u),t=C(u,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-1914kjj"&&(t.innerHTML=$),a=d(u),n=C(u,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1amodgb"&&(n.innerHTML=m),s=d(u),c=C(u,"A",{href:!0,"data-preview-link":!0,"data-svelte-h":!0}),g(c)!=="svelte-16lrtro"&&(c.innerHTML=b),this.h()},h(){h(n,"class","important"),h(c,"href","https://www.nature.com/articles/s41598-025-97652-6.pdf"),h(c,"data-preview-link","")},m(u,p){r(u,e,p),r(u,l,p),r(u,t,p),r(u,a,p),r(u,n,p),r(u,s,p),r(u,c,p)},p:N,d(u){u&&(i(e),i(l),i(t),i(a),i(n),i(s),i(c))}}}function Zi(x){let e,o="Importance des TD et TP",l,t,$="<li>Les TD construisent le raisonnement</li> <li>Les TP ancrent les concepts par la pratique</li> <li>Ce travail est indispensable pour la suite</li>",a,n,m=`Sans cette phase sérieuse,<br/>
			l’IA n’apporte que peu de valeur.`;return{c(){e=_("h2"),e.textContent=o,l=v(),t=_("ul"),t.innerHTML=$,a=v(),n=_("p"),n.innerHTML=m,this.h()},l(s){e=C(s,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-1pqkdgp"&&(e.textContent=o),l=d(s),t=C(s,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-1dj8lr7"&&(t.innerHTML=$),a=d(s),n=C(s,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-x1j0a0"&&(n.innerHTML=m),this.h()},h(){h(n,"class","note")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function yi(x){let e,o="Phase projet",l,t,$="<li>Problème plus ouvert</li> <li>Mise en situation proche du monde professionnel</li> <li>Usage de l&#39;IA <b>possible</b> et encadré</li>",a,n,m=`Des bases solides permettent<br/>
			d&#39;utiliser l&#39;IA pour faire des choses intéressantes.`;return{c(){e=_("h2"),e.textContent=o,l=v(),t=_("ul"),t.innerHTML=$,a=v(),n=_("p"),n.innerHTML=m,this.h()},l(s){e=C(s,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-1u8tpjh"&&(e.textContent=o),l=d(s),t=C(s,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-15ntht3"&&(t.innerHTML=$),a=d(s),n=C(s,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-e1d6gw"&&(n.innerHTML=m),this.h()},h(){h(n,"class","important")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function ea(x){let e,o="Un prompt vous sera fourni",l,t,$="Pour la phase projet, vous recevrez un <b>prompt</b> à utiliser avec l&#39;IA.",a,n,m='<li class="fragment">Il cadrera l&#39;IA pour qu&#39;elle vous <b>guide</b> sans donner les réponses</li> <li class="fragment">Il sera adapté au contexte du module POO</li>',s,c,b="Ce prompt sera communiqué au moment du projet.",u,p,q=`On vous donnera un prompt système qui transforme l'IA en tuteur. L'idée c'est de vous
			apprendre à utiliser l'IA intelligemment, pas à tricher.`;return{c(){e=_("h2"),e.textContent=o,l=v(),t=_("p"),t.innerHTML=$,a=v(),n=_("ul"),n.innerHTML=m,s=v(),c=_("p"),c.textContent=b,u=v(),p=_("aside"),p.textContent=q,this.h()},l(f){e=C(f,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-1stl3ju"&&(e.textContent=o),l=d(f),t=C(f,"P",{"data-svelte-h":!0}),g(t)!=="svelte-e2ua8"&&(t.innerHTML=$),a=d(f),n=C(f,"UL",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1ipgytl"&&(n.innerHTML=m),s=d(f),c=C(f,"P",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-116x1r6"&&(c.textContent=b),u=d(f),p=C(f,"ASIDE",{class:!0,"data-svelte-h":!0}),g(p)!=="svelte-6s6n1u"&&(p.textContent=q),this.h()},h(){h(n,"class","mt-6"),h(c,"class","note fragment mt-8"),h(p,"class","notes")},m(f,L){r(f,e,L),r(f,l,L),r(f,t,L),r(f,a,L),r(f,n,L),r(f,s,L),r(f,c,L),r(f,u,L),r(f,p,L)},p:N,d(f){f&&(i(e),i(l),i(t),i(a),i(n),i(s),i(c),i(u),i(p))}}}function ta(x){let e,o="En résumé",l,t,$='<div class="p-4 bg-pink-800 rounded-lg fragment"><h4 class="text-red-400">📚 TD/TP</h4> <p class="text-xl mt-2">Sans IA</p> <p class="text-sm text-white-400">Construire les bases</p></div> <div class="p-4 bg-orange-800 rounded-lg fragment"><h4 class="text-orange-400">🎯 Projet</h4> <p class="text-xl mt-2">IA encadrée</p> <p class="text-sm text-white-400">Avec le prompt fourni</p></div> <div class="p-4 bg-green-800 rounded-lg fragment"><h4 class="text-green-400">💼 Après CPE</h4> <p class="text-xl mt-2">IA maîtrisée</p> <p class="text-sm text-white-400">Vous savez quand et comment</p></div>',a,n,m=`C'est la progression. D'abord on apprend sans béquille, ensuite on apprend à utiliser l'outil
			correctement. À la fin, vous saurez quand l'IA vous aide vraiment et quand elle vous ralentit.`;return{c(){e=_("h2"),e.textContent=o,l=v(),t=_("div"),t.innerHTML=$,a=v(),n=_("aside"),n.textContent=m,this.h()},l(s){e=C(s,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-11s1ixw"&&(e.textContent=o),l=d(s),t=C(s,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-16m7q19"&&(t.innerHTML=$),a=d(s),n=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-10vup29"&&(n.textContent=m),this.h()},h(){h(t,"class","grid grid-cols-3 gap-6 mt-8"),h(n,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function sa(x){let e,o,l,t,$,a,n,m,s,c,b,u,p,q,f,L;return e=new J({props:{$$slots:{default:[Ki]},$$scope:{ctx:x}}}),l=new J({props:{$$slots:{default:[Yi]},$$scope:{ctx:x}}}),$=new J({props:{$$slots:{default:[Xi]},$$scope:{ctx:x}}}),n=new J({props:{$$slots:{default:[Wi]},$$scope:{ctx:x}}}),s=new J({props:{$$slots:{default:[Zi]},$$scope:{ctx:x}}}),b=new J({props:{$$slots:{default:[yi]},$$scope:{ctx:x}}}),p=new J({props:{$$slots:{default:[ea]},$$scope:{ctx:x}}}),f=new J({props:{$$slots:{default:[ta]},$$scope:{ctx:x}}}),{c(){S(e.$$.fragment),o=v(),S(l.$$.fragment),t=v(),S($.$$.fragment),a=v(),S(n.$$.fragment),m=v(),S(s.$$.fragment),c=v(),S(b.$$.fragment),u=v(),S(p.$$.fragment),q=v(),S(f.$$.fragment)},l(M){E(e.$$.fragment,M),o=d(M),E(l.$$.fragment,M),t=d(M),E($.$$.fragment,M),a=d(M),E(n.$$.fragment,M),m=d(M),E(s.$$.fragment,M),c=d(M),E(b.$$.fragment,M),u=d(M),E(p.$$.fragment,M),q=d(M),E(f.$$.fragment,M)},m(M,w){T(e,M,w),r(M,o,w),T(l,M,w),r(M,t,w),T($,M,w),r(M,a,w),T(n,M,w),r(M,m,w),T(s,M,w),r(M,c,w),T(b,M,w),r(M,u,w),T(p,M,w),r(M,q,w),T(f,M,w),L=!0},p(M,w){const I={};w&1&&(I.$$scope={dirty:w,ctx:M}),e.$set(I);const B={};w&1&&(B.$$scope={dirty:w,ctx:M}),l.$set(B);const Q={};w&1&&(Q.$$scope={dirty:w,ctx:M}),$.$set(Q);const K={};w&1&&(K.$$scope={dirty:w,ctx:M}),n.$set(K);const D={};w&1&&(D.$$scope={dirty:w,ctx:M}),s.$set(D);const F={};w&1&&(F.$$scope={dirty:w,ctx:M}),b.$set(F);const ne={};w&1&&(ne.$$scope={dirty:w,ctx:M}),p.$set(ne);const O={};w&1&&(O.$$scope={dirty:w,ctx:M}),f.$set(O)},i(M){L||(A(e.$$.fragment,M),A(l.$$.fragment,M),A($.$$.fragment,M),A(n.$$.fragment,M),A(s.$$.fragment,M),A(b.$$.fragment,M),A(p.$$.fragment,M),A(f.$$.fragment,M),L=!0)},o(M){j(e.$$.fragment,M),j(l.$$.fragment,M),j($.$$.fragment,M),j(n.$$.fragment,M),j(s.$$.fragment,M),j(b.$$.fragment,M),j(p.$$.fragment,M),j(f.$$.fragment,M),L=!1},d(M){M&&(i(o),i(t),i(a),i(m),i(c),i(u),i(q)),H(e,M),H(l,M),H($,M),H(n,M),H(s,M),H(b,M),H(p,M),H(f,M)}}}function la(x){let e,o;return e=new J({props:{data_background_color:"#2B001A",$$slots:{default:[sa]},$$scope:{ctx:x}}}),{c(){S(e.$$.fragment)},l(l){E(e.$$.fragment,l)},m(l,t){T(e,l,t),o=!0},p(l,[t]){const $={};t&1&&($.$$scope={dirty:t,ctx:l}),e.$set($)},i(l){o||(A(e.$$.fragment,l),o=!0)},o(l){j(e.$$.fragment,l),o=!1},d(l){H(e,l)}}}class na extends Oe{constructor(e){super(),Ue(this,e,null,la,Ve,{})}}function ia(x){let e,o="Présentation du module",l,t,$=`<div><ul><li><b>Changer votre manière de penser le code</b></li> <li>Passer du procédural à l’orienté objet</li> <li>Modéliser avant de coder</li> <li>Préparer la suite de votre formation</li></ul> <p class="note">Ce module est simple à valider.<br/>
					Il est <b>fondamental</b> pour la suite.</p></div>`,a,n,m=`Pas obligé de coder en OO, juste une manière de faire différente - C'est une méthode qui
			simplifie la modélisation - Assez largement utilisée`;return{c(){e=_("h2"),e.textContent=o,l=v(),t=_("div"),t.innerHTML=$,a=v(),n=_("aside"),n.textContent=m,this.h()},l(s){e=C(s,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-177x7c7"&&(e.textContent=o),l=d(s),t=C(s,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1ez6zyl"&&(t.innerHTML=$),a=d(s),n=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-viqv9x"&&(n.textContent=m),this.h()},h(){h(t,"class","two-columns"),h(n,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function aa(x){let e,o="Ce que vous saurez faire à la fin",l,t,$='<div class="text-left"><h4 class="text-red-400 mb-4 text-3xl">❌ Avant ce module</h4> <ul class="text-2xl"><li class="fragment">Code qui &quot;marche&quot; pour des TPs CPE</li> <li class="fragment">Difficile à reprendre 6 mois plus tard</li> <li class="fragment">Impossible à faire évoluer</li> <li class="fragment">Personne d&#39;autre ne comprend</li></ul></div> <div class="text-left"><h4 class="text-green-400 mb-4 text-3xl">✅ Après ce module</h4> <ul class="text-2xl"><li class="fragment">Code qui dure des années</li> <li class="fragment">Maintenable par une équipe</li> <li class="fragment">Évolutif sans tout casser</li> <li class="fragment">Prêt pour le monde pro</li></ul></div>',a,n,m="En entreprise, le code vit 5, 10, 20 ans.<br/> <b>Vous devez apprendre à coder pour les autres, pas juste pour vous.</b>",s,c,b=`C'est la vraie différence. En école, on code pour valider un TP. En entreprise, le code doit
			survivre à votre départ, être repris par d'autres, évoluer. Ce module vous prépare à ça.`;return{c(){e=_("h2"),e.textContent=o,l=v(),t=_("div"),t.innerHTML=$,a=v(),n=_("p"),n.innerHTML=m,s=v(),c=_("aside"),c.textContent=b,this.h()},l(u){e=C(u,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-1bz8gvd"&&(e.textContent=o),l=d(u),t=C(u,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-vlxvkk"&&(t.innerHTML=$),a=d(u),n=C(u,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-hffxe3"&&(n.innerHTML=m),s=d(u),c=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-1lbw1km"&&(c.textContent=b),this.h()},h(){h(t,"class","flex justify-center gap-8 mt-8"),h(n,"class","fragment note mt-8"),h(c,"class","notes")},m(u,p){r(u,e,p),r(u,l,p),r(u,t,p),r(u,a,p),r(u,n,p),r(u,s,p),r(u,c,p)},p:N,d(u){u&&(i(e),i(l),i(t),i(a),i(n),i(s),i(c))}}}function ra(x){let e,o="Pourquoi vous pourriez décrocher",l,t,$=`<svg viewBox="0 0 600 300" width="100%" style="margin-top: 20px;"><line x1="50" y1="250" x2="550" y2="250" stroke="#ccc" stroke-width="2"></line><line x1="50" y1="50" x2="50" y2="250" stroke="#ccc" stroke-width="2"></line><text x="260" y="270" font-size="14" fill="#ffffff">Temps / Expérience</text><text x="-70" y="185" font-size="14" fill="#ffffff" transform="rotate(-90 15,160)">Niveau réel en programmation
				</text><g><path d="M50 200 C120 185, 180 175, 220 170" fill="none" stroke="#3498db" stroke-width="4"></path><path d="M50 200 C120 205, 180 210, 220 190" fill="none" stroke="#f39c12" stroke-width="4"></path></g><g class="fragment" data-fragment-index="0"><path d="M220 170 C260 170, 300 170, 340 170" fill="none" stroke="#3498db" stroke-width="4"></path><path d="M220 190 C260 170, 300 155, 340 145" fill="none" stroke="#f39c12" stroke-width="4"></path></g><g class="fragment" data-fragment-index="1"><path d="M340 145 C380 140, 400 140, 420 140" fill="none" stroke="#f39c12" stroke-width="4"></path><path d="M340 170 C380 168, 400 165, 420 140" fill="none" stroke="#3498db" stroke-width="4"></path></g><g class="fragment" data-fragment-index="2"><path d="M420 140 C470 140, 510 140, 550 140" fill="none" stroke="#f39c12" stroke-width="4"></path><path d="M420 140 C470 120, 510 70, 550 50" fill="none" stroke="#3498db" stroke-width="4"></path></g><text x="60" y="80" font-size="0.5em" fill="#f39c12">Procédural </text><text x="60" y="100" font-size="0.5em" fill="#3498db">POO</text></svg>`,a,n,m=`Si vous avez l’impression de devenir moins bons,<br/>
			c’est que vous êtes en train d’apprendre.`,s,c,b=`Au début ça semble plus simple que du C, vous avez pas à gérer les pointeurs, le langage est
			plus moderne<br/>
			Mais très vite régression, notamment car il y a des règles à respecter que vous n&#39;aviez pas avant,
			en // en C vous pouvez faire n&#39;importe quoi et ça marche<br/>
			Puis vous apprenez à maitriser Puis vous égalez votre précédent niveau, si vous sortez du module
			à ce niveau, vous n&#39;aurez rien appris de plus<br/>
			Restez motivés pour la suite, car après ça décolle vraiment<br/>`;return{c(){e=_("h2"),e.textContent=o,l=v(),t=_("div"),t.innerHTML=$,a=v(),n=_("p"),n.innerHTML=m,s=v(),c=_("aside"),c.innerHTML=b,this.h()},l(u){e=C(u,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-1nk3rng"&&(e.textContent=o),l=d(u),t=C(u,"DIV",{"data-svelte-h":!0}),g(t)!=="svelte-1sp6g9p"&&(t.innerHTML=$),a=d(u),n=C(u,"P",{class:!0,"data-fragment-index":!0,"data-svelte-h":!0}),g(n)!=="svelte-117ka7n"&&(n.innerHTML=m),s=d(u),c=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),g(c)!=="svelte-ji71yx"&&(c.innerHTML=b),this.h()},h(){h(n,"class","note fragment"),h(n,"data-fragment-index","0"),h(c,"class","notes")},m(u,p){r(u,e,p),r(u,l,p),r(u,t,p),r(u,a,p),r(u,n,p),r(u,s,p),r(u,c,p)},p:N,d(u){u&&(i(e),i(l),i(t),i(a),i(n),i(s),i(c))}}}function ua(x){let e,o="Déroulé",l,t,$="<li>CM en début de cours</li> <li>TD</li> <li>TP/Projet</li>";return{c(){e=_("h2"),e.textContent=o,l=v(),t=_("ol"),t.innerHTML=$},l(a){e=C(a,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-171i1ti"&&(e.textContent=o),l=d(a),t=C(a,"OL",{"data-svelte-h":!0}),g(t)!=="svelte-se5tp"&&(t.innerHTML=$)},m(a,n){r(a,e,n),r(a,l,n),r(a,t,n)},p:N,d(a){a&&(i(e),i(l),i(t))}}}function oa(x){let e,o="Modalités d’examen",l,t,$="<li>DS écrit <b>basé principalement sur les TD</b></li> <li>Projet en fin de module</li> <li>Contrôle continu sur la rigueur</li>",a,n,m="Ce qui est évalué, ce n’est pas le résultat.<br/> <b>C’est la démarche !</b>";return{c(){e=_("h2"),e.textContent=o,l=v(),t=_("ul"),t.innerHTML=$,a=v(),n=_("p"),n.innerHTML=m,this.h()},l(s){e=C(s,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-33cx1h"&&(e.textContent=o),l=d(s),t=C(s,"UL",{"data-svelte-h":!0}),g(t)!=="svelte-yqhay1"&&(t.innerHTML=$),a=d(s),n=C(s,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-dcky3d"&&(n.innerHTML=m),this.h()},h(){h(n,"class","important")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function fa(x){let e,o="Découpage du module",l,t,$=`<svg width="1000" height="500" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" style="flex: 1;background:#fafafa;font-family:sans-serif"><line x1="80" y1="50" x2="80" y2="430" stroke="#333"></line><line x1="80" y1="430" x2="950" y2="430" stroke="#333"></line><g fill="#333" font-size="12"><text x="40" y="430">0h</text><text x="40" y="370">2h</text><text x="40" y="310">4h</text><text x="40" y="250">6h</text><text x="40" y="190">8h</text></g><g font-size="13"><rect x="780" y="60" width="15" height="15" fill="#E85D75"></rect><text x="800" y="73">CM (18h)</text><rect x="780" y="85" width="15" height="15" fill="#456990"></rect><text x="800" y="98">TD (12h)</text><rect x="780" y="110" width="15" height="15" fill="#F28F3B"></rect><text x="800" y="123">TP (14h)</text><rect x="780" y="135" width="15" height="15" fill="#F6BD60"></rect><text x="800" y="148">Projet (18h)</text></g><g font-size="11" text-anchor="middle"><g transform="translate(110,430)"><rect y="-120" width="40" height="120" fill="#E85D75"></rect><rect y="-180" width="40" height="60" fill="#456990"></rect><rect y="-240" width="40" height="60" fill="#F28F3B"></rect><text y="20" text-anchor="middle">04/02</text></g><g transform="translate(180,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-120" width="40" height="60" fill="#456990"></rect><text y="20">25/02</text></g><g transform="translate(250,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-120" width="40" height="60" fill="#456990"></rect><rect y="-180" width="40" height="60" fill="#F28F3B"></rect><text y="20">04/03</text></g><g transform="translate(320,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-120" width="40" height="60" fill="#456990"></rect><rect y="-180" width="40" height="60" fill="#F28F3B"></rect><text y="20">18/03</text></g><g transform="translate(390,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-120" width="40" height="60" fill="#456990"></rect><rect y="-180" width="40" height="60" fill="#F28F3B"></rect><text y="20">24/03</text></g><g transform="translate(460,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-120" width="40" height="60" fill="#456990"></rect><rect y="-180" width="40" height="60" fill="#F28F3B"></rect><text y="20">25/03</text></g><g transform="translate(530,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-180" width="40" height="120" fill="#F28F3B"></rect><text y="20">31/03</text></g><g transform="translate(600,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-180" width="40" height="120" fill="#F6BD60"></rect><text y="20">01/04</text></g><g transform="translate(670,430)"><rect y="-180" width="40" height="180" fill="#F6BD60"></rect><text y="20">07/04</text></g><g transform="translate(740,430)"><rect y="-240" width="40" height="240" fill="#F6BD60"></rect><text y="20">05/05</text></g></g></svg> <div style="flex: 1;"><ul><li><b>CM</b> <br/>
						Théorie et introduction des concepts.</li> <li><b>TD</b> <br/> <b class="font-bold text-orange-400">Sans IDE !</b></li> <li><b>TP</b> <br/>
						Guidés, mais il faut improviser, tester, sortir du cadre.</li> <li><b>Projet</b> <br/>
						Mise en situation professionnelle.</li></ul></div>`,a,n,m="Relire le support du CM ne vous suffira pas à réussir l'examen";return{c(){e=_("h2"),e.textContent=o,l=v(),t=_("div"),t.innerHTML=$,a=v(),n=_("p"),n.textContent=m,this.h()},l(s){e=C(s,"H2",{"data-svelte-h":!0}),g(e)!=="svelte-g73up0"&&(e.textContent=o),l=d(s),t=C(s,"DIV",{style:!0,"data-svelte-h":!0}),g(t)!=="svelte-xoywc5"&&(t.innerHTML=$),a=d(s),n=C(s,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-18g80m8"&&(n.textContent=m),this.h()},h(){Xe(t,"display","flex"),Xe(t,"gap","2rem"),Xe(t,"align-items","center"),Xe(t,"justify-content","center"),h(n,"class","font-bold text-orange-400 note")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function ca(x){let e,o,l,t,$,a,n,m,s,c,b,u;return e=new J({props:{$$slots:{default:[ia]},$$scope:{ctx:x}}}),l=new J({props:{$$slots:{default:[aa]},$$scope:{ctx:x}}}),$=new J({props:{$$slots:{default:[ra]},$$scope:{ctx:x}}}),n=new J({props:{$$slots:{default:[ua]},$$scope:{ctx:x}}}),s=new J({props:{$$slots:{default:[oa]},$$scope:{ctx:x}}}),b=new J({props:{$$slots:{default:[fa]},$$scope:{ctx:x}}}),{c(){S(e.$$.fragment),o=v(),S(l.$$.fragment),t=v(),S($.$$.fragment),a=v(),S(n.$$.fragment),m=v(),S(s.$$.fragment),c=v(),S(b.$$.fragment)},l(p){E(e.$$.fragment,p),o=d(p),E(l.$$.fragment,p),t=d(p),E($.$$.fragment,p),a=d(p),E(n.$$.fragment,p),m=d(p),E(s.$$.fragment,p),c=d(p),E(b.$$.fragment,p)},m(p,q){T(e,p,q),r(p,o,q),T(l,p,q),r(p,t,q),T($,p,q),r(p,a,q),T(n,p,q),r(p,m,q),T(s,p,q),r(p,c,q),T(b,p,q),u=!0},p(p,q){const f={};q&1&&(f.$$scope={dirty:q,ctx:p}),e.$set(f);const L={};q&1&&(L.$$scope={dirty:q,ctx:p}),l.$set(L);const M={};q&1&&(M.$$scope={dirty:q,ctx:p}),$.$set(M);const w={};q&1&&(w.$$scope={dirty:q,ctx:p}),n.$set(w);const I={};q&1&&(I.$$scope={dirty:q,ctx:p}),s.$set(I);const B={};q&1&&(B.$$scope={dirty:q,ctx:p}),b.$set(B)},i(p){u||(A(e.$$.fragment,p),A(l.$$.fragment,p),A($.$$.fragment,p),A(n.$$.fragment,p),A(s.$$.fragment,p),A(b.$$.fragment,p),u=!0)},o(p){j(e.$$.fragment,p),j(l.$$.fragment,p),j($.$$.fragment,p),j(n.$$.fragment,p),j(s.$$.fragment,p),j(b.$$.fragment,p),u=!1},d(p){p&&(i(o),i(t),i(a),i(m),i(c)),H(e,p),H(l,p),H($,p),H(n,p),H(s,p),H(b,p)}}}function $a(x){let e,o;return e=new J({props:{data_background_color:"#00353F",$$slots:{default:[ca]},$$scope:{ctx:x}}}),{c(){S(e.$$.fragment)},l(l){E(e.$$.fragment,l)},m(l,t){T(e,l,t),o=!0},p(l,[t]){const $={};t&1&&($.$$scope={dirty:t,ctx:l}),e.$set($)},i(l){o||(A(e.$$.fragment,l),o=!0)},o(l){j(e.$$.fragment,l),o=!1},d(l){H(e,l)}}}class pa extends Oe{constructor(e){super(),Ue(this,e,null,$a,Ve,{})}}function ma(x){let e,o="Exercice 1",l,t,$="Encapsulation et validation",a,n,m="⏱️ 10-15 minutes";return{c(){e=_("h2"),e.textContent=o,l=v(),t=_("p"),t.textContent=$,a=v(),n=_("p"),n.textContent=m,this.h()},l(s){e=C(s,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-sq034p"&&(e.textContent=o),l=d(s),t=C(s,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-tg4x2t"&&(t.textContent=$),a=d(s),n=C(s,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-11o3260"&&(n.textContent=m),this.h()},h(){h(e,"class","text-5xl"),h(t,"class","text-2xl text-gray-400"),h(n,"class","text-xl mt-8")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function da(x){let e,o="📝 Exercice 1 : Compte bancaire sécurisé",l,t,$=`<p class="font-bold text-accent-200">Objectif :</p> <p class="mb-4">Créer une classe <code>CompteBancaire</code> avec encapsulation correcte.</p> <p class="font-bold text-accent-200 mt-6">Consignes :</p> <ol class="space-y-2"><li>Créer une classe avec les attributs <code>numero</code>, <code>solde</code>,
					<code>titulaire</code></li> <li>Tous les attributs doivent être <code>private</code></li> <li>Créer un constructeur pour initialiser le compte</li> <li>Créer des getters pour tous les attributs</li> <li>Créer une méthode <code>deposer(double montant)</code> qui :
					<ul class="ml-6"><li>Vérifie que le montant est positif</li> <li>Ajoute le montant au solde</li></ul></li> <li>Créer une méthode <code>retirer(double montant)</code> qui :
					<ul class="ml-6"><li>Vérifie que le montant est positif</li> <li>Vérifie que le solde est suffisant</li> <li>Retire le montant du solde</li></ul></li></ol>`;return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("div"),t.innerHTML=$,this.h()},l(a){e=C(a,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-n7as91"&&(e.textContent=o),l=d(a),t=C(a,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-114i2s5"&&(t.innerHTML=$),this.h()},h(){h(t,"class","text-left text-xl")},m(a,n){r(a,e,n),r(a,l,n),r(a,t,n)},p:N,d(a){a&&(i(e),i(l),i(t))}}}function va(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function xa(x){let e,o="💡 Indice",l,t,$;return t=new ie({props:{$$slots:{default:[va]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),S(t.$$.fragment)},l(a){e=C(a,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-s9gy6g"&&(e.textContent=o),l=d(a),E(t.$$.fragment,a)},m(a,n){r(a,e,n),r(a,l,n),T(t,a,n),$=!0},p(a,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:a}),t.$set(m)},i(a){$||(A(t.$$.fragment,a),$=!0)},o(a){j(t.$$.fragment,a),$=!1},d(a){a&&(i(e),i(l)),H(t,a)}}}function Ca(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function _a(x){let e,o="✅ Solution",l,t,$;return t=new ie({props:{class:"language-java h-[70vh]",$$slots:{default:[Ca]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),S(t.$$.fragment)},l(a){e=C(a,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1eu9efq"&&(e.textContent=o),l=d(a),E(t.$$.fragment,a)},m(a,n){r(a,e,n),r(a,l,n),T(t,a,n),$=!0},p(a,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:a}),t.$set(m)},i(a){$||(A(t.$$.fragment,a),$=!0)},o(a){j(t.$$.fragment,a),$=!1},d(a){a&&(i(e),i(l)),H(t,a)}}}function ha(x){let e,o="🎯 Points clés",l,t,$='<li class="fragment">✅ Attributs <code>private</code> → protection des données</li> <li class="fragment">✅ Getters → lecture contrôlée</li> <li class="fragment">✅ Méthodes de modification → validation systématique</li> <li class="fragment">✅ Pas de setter pour le solde → cohérence métier</li> <li class="fragment">✅ Exceptions claires → facilite le debug</li>',a,n,m="💼 En entreprise, cette protection évite les bugs coûteux !";return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("ul"),t.innerHTML=$,a=v(),n=_("p"),n.textContent=m,this.h()},l(s){e=C(s,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-gv6vvv"&&(e.textContent=o),l=d(s),t=C(s,"UL",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1x5lr41"&&(t.innerHTML=$),a=d(s),n=C(s,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-lzo0mv"&&(n.textContent=m),this.h()},h(){h(t,"class","text-xl"),h(n,"class","fragment mt-8 text-accent-200 font-bold")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function ga(x){let e,o="Exercice 2",l,t,$="Héritage et généralisation",a,n,m="⏱️ 15-20 minutes";return{c(){e=_("h2"),e.textContent=o,l=v(),t=_("p"),t.textContent=$,a=v(),n=_("p"),n.textContent=m,this.h()},l(s){e=C(s,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-8xxy4y"&&(e.textContent=o),l=d(s),t=C(s,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1wfm6em"&&(t.textContent=$),a=d(s),n=C(s,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1ij9449"&&(n.textContent=m),this.h()},h(){h(e,"class","text-5xl"),h(t,"class","text-2xl text-gray-400"),h(n,"class","text-xl mt-8")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function ba(x){let e,o="📝 Exercice 2 : Système de véhicules",l,t,$=`<p class="font-bold text-accent-200">Objectif :</p> <p class="mb-4">Modéliser une hiérarchie de véhicules avec héritage.</p> <p class="font-bold text-accent-200 mt-6">Consignes :</p> <ol class="space-y-2"><li>Créer une classe abstraite <code>Vehicule</code> avec :
					<ul class="ml-6"><li>Attributs : <code>marque</code>, <code>modele</code>, <code>vitesseMax</code></li> <li>Constructeur</li> <li>Méthode concrète : <code>demarrer()</code></li> <li>Méthode abstraite : <code>klaxonner()</code></li></ul></li> <li>Créer une classe <code>Voiture</code> qui hérite de <code>Vehicule</code> avec :
					<ul class="ml-6"><li>Attribut supplémentaire : <code>nbPortes</code></li> <li>Implémenter <code>klaxonner()</code> → affiche &quot;Tuuut tuuut !&quot;</li></ul></li> <li>Créer une classe <code>Moto</code> qui hérite de <code>Vehicule</code> avec :
					<ul class="ml-6"><li>Attribut supplémentaire : <code>avecSidecar</code></li> <li>Implémenter <code>klaxonner()</code> → affiche &quot;Beep beep !&quot;</li></ul></li></ol>`;return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("div"),t.innerHTML=$,this.h()},l(a){e=C(a,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-y2rbbg"&&(e.textContent=o),l=d(a),t=C(a,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-wl8xd3"&&(t.innerHTML=$),this.h()},h(){h(t,"class","text-left text-xl")},m(a,n){r(a,e,n),r(a,l,n),r(a,t,n)},p:N,d(a){a&&(i(e),i(l),i(t))}}}function La(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function qa(x){let e,o="🎨 Diagramme UML cible",l,t,$;return t=new je({props:{$$slots:{default:[La]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),S(t.$$.fragment)},l(a){e=C(a,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-iafbxg"&&(e.textContent=o),l=d(a),E(t.$$.fragment,a)},m(a,n){r(a,e,n),r(a,l,n),T(t,a,n),$=!0},p(a,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:a}),t.$set(m)},i(a){$||(A(t.$$.fragment,a),$=!0)},o(a){j(t.$$.fragment,a),$=!1},d(a){a&&(i(e),i(l)),H(t,a)}}}function wa(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Pa(x){let e,o="💡 Indice",l,t,$;return t=new ie({props:{$$slots:{default:[wa]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),S(t.$$.fragment)},l(a){e=C(a,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-s9gy6g"&&(e.textContent=o),l=d(a),E(t.$$.fragment,a)},m(a,n){r(a,e,n),r(a,l,n),T(t,a,n),$=!0},p(a,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:a}),t.$set(m)},i(a){$||(A(t.$$.fragment,a),$=!0)},o(a){j(t.$$.fragment,a),$=!1},d(a){a&&(i(e),i(l)),H(t,a)}}}function Ma(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Ha(x){let e,o="🧪 Test de votre code",l,t,$;return t=new ie({props:{$$slots:{default:[Ma]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),S(t.$$.fragment)},l(a){e=C(a,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1yizvu6"&&(e.textContent=o),l=d(a),E(t.$$.fragment,a)},m(a,n){r(a,e,n),r(a,l,n),T(t,a,n),$=!0},p(a,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:a}),t.$set(m)},i(a){$||(A(t.$$.fragment,a),$=!0)},o(a){j(t.$$.fragment,a),$=!1},d(a){a&&(i(e),i(l)),H(t,a)}}}function ja(x){let e,o="🎯 Points clés",l,t,$='<li class="fragment">✅ <code>abstract class</code> → empêche l&#39;instanciation directe</li> <li class="fragment">✅ <code>abstract void klaxonner()</code> → contrat pour les sous-classes</li> <li class="fragment">✅ <code>super(...)</code> → appel du constructeur parent obligatoire</li> <li class="fragment">✅ <code>@Override</code> → sécurité lors de la redéfinition</li> <li class="fragment">✅ Code commun dans le parent → évite duplication</li>',a,n,m="💼 En entreprise : hiérarchies de produits, utilisateurs, transactions, etc.";return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("ul"),t.innerHTML=$,a=v(),n=_("p"),n.textContent=m,this.h()},l(s){e=C(s,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-gv6vvv"&&(e.textContent=o),l=d(s),t=C(s,"UL",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1z0f2wo"&&(t.innerHTML=$),a=d(s),n=C(s,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1fewxyy"&&(n.textContent=m),this.h()},h(){h(t,"class","text-xl"),h(n,"class","fragment mt-8 text-accent-200 font-bold")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function Aa(x){let e,o="Exercice 3",l,t,$="Composition et Interfaces",a,n,m="⏱️ 20-25 minutes";return{c(){e=_("h2"),e.textContent=o,l=v(),t=_("p"),t.textContent=$,a=v(),n=_("p"),n.textContent=m,this.h()},l(s){e=C(s,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-1033wpr"&&(e.textContent=o),l=d(s),t=C(s,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-1hujr1a"&&(t.textContent=$),a=d(s),n=C(s,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1n0lccm"&&(n.textContent=m),this.h()},h(){h(e,"class","text-5xl"),h(t,"class","text-2xl text-gray-400"),h(n,"class","text-xl mt-8")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function Ta(x){let e,o="📝 Exercice 3 : Système de location",l,t,$=`<p class="font-bold text-accent-200">Objectif :</p> <p class="mb-4">Combiner héritage, composition et interfaces dans un système réaliste.</p> <p class="font-bold text-accent-200 mt-6">Consignes :</p> <ol class="space-y-2"><li>Créer une interface <code>ILouable</code> avec :
					<ul class="ml-6"><li><code>double calculerPrixLocation(int nbJours)</code></li></ul></li> <li>Réutiliser vos classes <code>Vehicule</code>, <code>Voiture</code>, <code>Moto</code></li> <li>Faire implémenter <code>ILouable</code> par <code>Voiture</code> et <code>Moto</code> :
					<ul class="ml-6"><li>Voiture : 50€/jour</li> <li>Moto : 30€/jour</li></ul></li> <li>Créer une classe <code>AgenceLocation</code> avec :
					<ul class="ml-6"><li>Liste de véhicules louables</li> <li>Méthode <code>ajouterVehicule(ILouable v)</code></li> <li>Méthode <code>calculerRevenuTotal(int nbJours)</code></li></ul></li></ol>`;return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("div"),t.innerHTML=$,this.h()},l(a){e=C(a,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1xzgz2g"&&(e.textContent=o),l=d(a),t=C(a,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-p07eid"&&(t.innerHTML=$),this.h()},h(){h(t,"class","text-left text-xl")},m(a,n){r(a,e,n),r(a,l,n),r(a,t,n)},p:N,d(a){a&&(i(e),i(l),i(t))}}}function Ea(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Sa(x){let e,o="🎨 Diagramme UML cible",l,t,$;return t=new je({props:{$$slots:{default:[Ea]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),S(t.$$.fragment)},l(a){e=C(a,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-iafbxg"&&(e.textContent=o),l=d(a),E(t.$$.fragment,a)},m(a,n){r(a,e,n),r(a,l,n),T(t,a,n),$=!0},p(a,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:a}),t.$set(m)},i(a){$||(A(t.$$.fragment,a),$=!0)},o(a){j(t.$$.fragment,a),$=!1},d(a){a&&(i(e),i(l)),H(t,a)}}}function Da(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Ia(x){let e,o="🧪 Test complet",l,t,$;return t=new ie({props:{$$slots:{default:[Da]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),S(t.$$.fragment)},l(a){e=C(a,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1lbxuqe"&&(e.textContent=o),l=d(a),E(t.$$.fragment,a)},m(a,n){r(a,e,n),r(a,l,n),T(t,a,n),$=!0},p(a,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:a}),t.$set(m)},i(a){$||(A(t.$$.fragment,a),$=!0)},o(a){j(t.$$.fragment,a),$=!1},d(a){a&&(i(e),i(l)),H(t,a)}}}function ka(x){let e,o="🎯 Points clés",l,t,$='<li class="fragment">✅ Interface → contrat abstrait (<i>peut faire</i>)</li> <li class="fragment">✅ Héritage → hiérarchie logique (<i>est un</i>)</li> <li class="fragment">✅ Composition → AgenceLocation <i>a des</i> véhicules</li> <li class="fragment">✅ <code>List&lt;ILouable&gt;</code> → polymorphisme en action</li> <li class="fragment">✅ <code>static final</code> → constante de classe</li>',a,n,m="💼 Architecture typique en entreprise : services, DAO, entités métier";return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("ul"),t.innerHTML=$,a=v(),n=_("p"),n.textContent=m,this.h()},l(s){e=C(s,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-gv6vvv"&&(e.textContent=o),l=d(s),t=C(s,"UL",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-193dcgm"&&(t.innerHTML=$),a=d(s),n=C(s,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-o7prxp"&&(n.textContent=m),this.h()},h(){h(t,"class","text-xl"),h(n,"class","fragment mt-8 text-accent-200 font-bold")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function za(x){let e,o="🏆 Challenge Bonus",l,t,$="Pour aller plus loin";return{c(){e=_("h2"),e.textContent=o,l=v(),t=_("p"),t.textContent=$,this.h()},l(a){e=C(a,"H2",{class:!0,"data-svelte-h":!0}),g(e)!=="svelte-uwrmmu"&&(e.textContent=o),l=d(a),t=C(a,"P",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-saoopl"&&(t.textContent=$),this.h()},h(){h(e,"class","text-5xl"),h(t,"class","text-2xl text-gray-400")},m(a,n){r(a,e,n),r(a,l,n),r(a,t,n)},p:N,d(a){a&&(i(e),i(l),i(t))}}}function Va(x){let e,o="💪 Challenge : Système de réduction",l,t,$=`<p class="font-bold text-accent-200">Améliorez votre système de location :</p> <ol class="space-y-3 mt-4"><li>Ajouter une interface <code>IReductible</code> avec :
					<ul class="ml-6"><li><code>double appliquerReduction(double prix)</code></li></ul></li> <li>Créer des classes de réduction :
					<ul class="ml-6"><li><code>ReductionPourcentage</code> (ex: -20%)</li> <li><code>ReductionMontant</code> (ex: -50€)</li></ul></li> <li>Modifier <code>AgenceLocation</code> pour accepter une réduction</li> <li>Tester avec plusieurs scénarios</li></ol>`,a,n,m="💡 Indice : Strategy Pattern (on le verra plus tard dans les Design Patterns)";return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("div"),t.innerHTML=$,a=v(),n=_("p"),n.textContent=m,this.h()},l(s){e=C(s,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-11zr1pn"&&(e.textContent=o),l=d(s),t=C(s,"DIV",{class:!0,"data-svelte-h":!0}),g(t)!=="svelte-122ga3f"&&(t.innerHTML=$),a=d(s),n=C(s,"P",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-nkxlqz"&&(n.textContent=m),this.h()},h(){h(t,"class","text-left text-xl"),h(n,"class","fragment mt-6 text-accent-200")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function Oa(x){let e=`
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
`,o;return{c(){o=y(e)},l(l){o=Z(l,e)},m(l,t){r(l,o,t)},p:N,d(l){l&&i(o)}}}function Ua(x){let e,o="🧪 Test du challenge",l,t,$;return t=new ie({props:{$$slots:{default:[Oa]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),S(t.$$.fragment)},l(a){e=C(a,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-ouoo1i"&&(e.textContent=o),l=d(a),E(t.$$.fragment,a)},m(a,n){r(a,e,n),r(a,l,n),T(t,a,n),$=!0},p(a,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:a}),t.$set(m)},i(a){$||(A(t.$$.fragment,a),$=!0)},o(a){j(t.$$.fragment,a),$=!1},d(a){a&&(i(e),i(l)),H(t,a)}}}function Ra(x){let e,o="🏋️ Exercices pratiques - Séance 1",l,t,$,a,n,m,s,c,b,u,p,q,f,L,M,w,I,B,Q,K,D,F,ne,O,le,ae,ce,re,pe,oe,$e,fe,me,U,te,R,se,de,_e;return t=new J({props:{data_background_color:"#1a3a1a",$$slots:{default:[ma]},$$scope:{ctx:x}}}),a=new J({props:{$$slots:{default:[da]},$$scope:{ctx:x}}}),m=new J({props:{$$slots:{default:[xa]},$$scope:{ctx:x}}}),c=new J({props:{$$slots:{default:[_a]},$$scope:{ctx:x}}}),u=new J({props:{$$slots:{default:[ha]},$$scope:{ctx:x}}}),q=new J({props:{data_background_color:"#1a1a3a",$$slots:{default:[ga]},$$scope:{ctx:x}}}),L=new J({props:{$$slots:{default:[ba]},$$scope:{ctx:x}}}),w=new J({props:{$$slots:{default:[qa]},$$scope:{ctx:x}}}),B=new J({props:{$$slots:{default:[Pa]},$$scope:{ctx:x}}}),K=new J({props:{$$slots:{default:[Ha]},$$scope:{ctx:x}}}),F=new J({props:{$$slots:{default:[ja]},$$scope:{ctx:x}}}),O=new J({props:{data_background_color:"#3a1a1a",$$slots:{default:[Aa]},$$scope:{ctx:x}}}),ae=new J({props:{$$slots:{default:[Ta]},$$scope:{ctx:x}}}),re=new J({props:{$$slots:{default:[Sa]},$$scope:{ctx:x}}}),oe=new J({props:{$$slots:{default:[Ia]},$$scope:{ctx:x}}}),fe=new J({props:{$$slots:{default:[ka]},$$scope:{ctx:x}}}),U=new J({props:{data_background_color:"#2a2a1a",$$slots:{default:[za]},$$scope:{ctx:x}}}),R=new J({props:{$$slots:{default:[Va]},$$scope:{ctx:x}}}),de=new J({props:{$$slots:{default:[Ua]},$$scope:{ctx:x}}}),{c(){e=_("h3"),e.textContent=o,l=v(),S(t.$$.fragment),$=v(),S(a.$$.fragment),n=v(),S(m.$$.fragment),s=v(),S(c.$$.fragment),b=v(),S(u.$$.fragment),p=v(),S(q.$$.fragment),f=v(),S(L.$$.fragment),M=v(),S(w.$$.fragment),I=v(),S(B.$$.fragment),Q=v(),S(K.$$.fragment),D=v(),S(F.$$.fragment),ne=v(),S(O.$$.fragment),le=v(),S(ae.$$.fragment),ce=v(),S(re.$$.fragment),pe=v(),S(oe.$$.fragment),$e=v(),S(fe.$$.fragment),me=v(),S(U.$$.fragment),te=v(),S(R.$$.fragment),se=v(),S(de.$$.fragment)},l(V){e=C(V,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-lz1hvq"&&(e.textContent=o),l=d(V),E(t.$$.fragment,V),$=d(V),E(a.$$.fragment,V),n=d(V),E(m.$$.fragment,V),s=d(V),E(c.$$.fragment,V),b=d(V),E(u.$$.fragment,V),p=d(V),E(q.$$.fragment,V),f=d(V),E(L.$$.fragment,V),M=d(V),E(w.$$.fragment,V),I=d(V),E(B.$$.fragment,V),Q=d(V),E(K.$$.fragment,V),D=d(V),E(F.$$.fragment,V),ne=d(V),E(O.$$.fragment,V),le=d(V),E(ae.$$.fragment,V),ce=d(V),E(re.$$.fragment,V),pe=d(V),E(oe.$$.fragment,V),$e=d(V),E(fe.$$.fragment,V),me=d(V),E(U.$$.fragment,V),te=d(V),E(R.$$.fragment,V),se=d(V),E(de.$$.fragment,V)},m(V,W){r(V,e,W),r(V,l,W),T(t,V,W),r(V,$,W),T(a,V,W),r(V,n,W),T(m,V,W),r(V,s,W),T(c,V,W),r(V,b,W),T(u,V,W),r(V,p,W),T(q,V,W),r(V,f,W),T(L,V,W),r(V,M,W),T(w,V,W),r(V,I,W),T(B,V,W),r(V,Q,W),T(K,V,W),r(V,D,W),T(F,V,W),r(V,ne,W),T(O,V,W),r(V,le,W),T(ae,V,W),r(V,ce,W),T(re,V,W),r(V,pe,W),T(oe,V,W),r(V,$e,W),T(fe,V,W),r(V,me,W),T(U,V,W),r(V,te,W),T(R,V,W),r(V,se,W),T(de,V,W),_e=!0},p(V,W){const ve={};W&1&&(ve.$$scope={dirty:W,ctx:V}),t.$set(ve);const he={};W&1&&(he.$$scope={dirty:W,ctx:V}),a.$set(he);const z={};W&1&&(z.$$scope={dirty:W,ctx:V}),m.$set(z);const X={};W&1&&(X.$$scope={dirty:W,ctx:V}),c.$set(X);const k={};W&1&&(k.$$scope={dirty:W,ctx:V}),u.$set(k);const Y={};W&1&&(Y.$$scope={dirty:W,ctx:V}),q.$set(Y);const qe={};W&1&&(qe.$$scope={dirty:W,ctx:V}),L.$set(qe);const ge={};W&1&&(ge.$$scope={dirty:W,ctx:V}),w.$set(ge);const we={};W&1&&(we.$$scope={dirty:W,ctx:V}),B.$set(we);const be={};W&1&&(be.$$scope={dirty:W,ctx:V}),K.$set(be);const Ae={};W&1&&(Ae.$$scope={dirty:W,ctx:V}),F.$set(Ae);const Le={};W&1&&(Le.$$scope={dirty:W,ctx:V}),O.$set(Le);const Te={};W&1&&(Te.$$scope={dirty:W,ctx:V}),ae.$set(Te);const Pe={};W&1&&(Pe.$$scope={dirty:W,ctx:V}),re.$set(Pe);const Ie={};W&1&&(Ie.$$scope={dirty:W,ctx:V}),oe.$set(Ie);const Me={};W&1&&(Me.$$scope={dirty:W,ctx:V}),fe.$set(Me);const ke={};W&1&&(ke.$$scope={dirty:W,ctx:V}),U.$set(ke);const He={};W&1&&(He.$$scope={dirty:W,ctx:V}),R.$set(He);const ze={};W&1&&(ze.$$scope={dirty:W,ctx:V}),de.$set(ze)},i(V){_e||(A(t.$$.fragment,V),A(a.$$.fragment,V),A(m.$$.fragment,V),A(c.$$.fragment,V),A(u.$$.fragment,V),A(q.$$.fragment,V),A(L.$$.fragment,V),A(w.$$.fragment,V),A(B.$$.fragment,V),A(K.$$.fragment,V),A(F.$$.fragment,V),A(O.$$.fragment,V),A(ae.$$.fragment,V),A(re.$$.fragment,V),A(oe.$$.fragment,V),A(fe.$$.fragment,V),A(U.$$.fragment,V),A(R.$$.fragment,V),A(de.$$.fragment,V),_e=!0)},o(V){j(t.$$.fragment,V),j(a.$$.fragment,V),j(m.$$.fragment,V),j(c.$$.fragment,V),j(u.$$.fragment,V),j(q.$$.fragment,V),j(L.$$.fragment,V),j(w.$$.fragment,V),j(B.$$.fragment,V),j(K.$$.fragment,V),j(F.$$.fragment,V),j(O.$$.fragment,V),j(ae.$$.fragment,V),j(re.$$.fragment,V),j(oe.$$.fragment,V),j(fe.$$.fragment,V),j(U.$$.fragment,V),j(R.$$.fragment,V),j(de.$$.fragment,V),_e=!1},d(V){V&&(i(e),i(l),i($),i(n),i(s),i(b),i(p),i(f),i(M),i(I),i(Q),i(D),i(ne),i(le),i(ce),i(pe),i($e),i(me),i(te),i(se)),H(t,V),H(a,V),H(m,V),H(c,V),H(u,V),H(q,V),H(L,V),H(w,V),H(B,V),H(K,V),H(F,V),H(O,V),H(ae,V),H(re,V),H(oe,V),H(fe,V),H(U,V),H(R,V),H(de,V)}}}function Na(x){let e,o;return e=new J({props:{$$slots:{default:[Ra]},$$scope:{ctx:x}}}),{c(){S(e.$$.fragment)},l(l){E(e.$$.fragment,l)},m(l,t){T(e,l,t),o=!0},p(l,[t]){const $={};t&1&&($.$$scope={dirty:t,ctx:l}),e.$set($)},i(l){o||(A(e.$$.fragment,l),o=!0)},o(l){j(e.$$.fragment,l),o=!1},d(l){H(e,l)}}}class Ja extends Oe{constructor(e){super(),Ue(this,e,null,Na,Ve,{})}}function Ba(x){let e,o="3ICS 2026 - POO",l,t,$,a=`- Lien de la présentation sur e-campus - Suivre depuis le projecteur - Montrer bouton d'aide -
		Overview (touche 'o')`;return{c(){e=_("h1"),l=y(o),t=v(),$=_("aside"),$.textContent=a,this.h()},l(n){e=C(n,"H1",{class:!0});var m=ue(e);l=Z(m,o),m.forEach(i),t=d(n),$=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),g($)!=="svelte-1dq3421"&&($.textContent=a),this.h()},h(){h(e,"class","capitalize"),h($,"class","notes")},m(n,m){r(n,e,m),ee(e,l),r(n,t,m),r(n,$,m)},p:N,d(n){n&&(i(e),i(t),i($))}}}function Fa(x){let e,o="Les concepts de la POO",l,t,$="<li>Généralités</li> <li>L&#39;encapsulation</li> <li>L&#39;héritage</li> <li>La composition</li> <li>Les interfaces</li> <li>Le polymorphisme</li>",a,n,m=`Voici le fil rouge du cours. On va voir ces 6 concepts dans l'ordre. Chaque concept s'appuie sur
		le précédent. À la fin, vous saurez concevoir une architecture objet complète. Prenez des notes
		sur ce qui vous semble flou, on fera des pauses pour les questions.`;return{c(){e=_("h3"),e.textContent=o,l=v(),t=_("ol"),t.innerHTML=$,a=v(),n=_("aside"),n.textContent=m,this.h()},l(s){e=C(s,"H3",{"data-svelte-h":!0}),g(e)!=="svelte-1thzgzl"&&(e.textContent=o),l=d(s),t=C(s,"OL",{"data-svelte-h":!0}),g(t)!=="svelte-vjnx6z"&&(t.innerHTML=$),a=d(s),n=C(s,"ASIDE",{class:!0,"data-svelte-h":!0}),g(n)!=="svelte-1evfkkj"&&(n.textContent=m),this.h()},h(){h(n,"class","notes")},m(s,c){r(s,e,c),r(s,l,c),r(s,t,c),r(s,a,c),r(s,n,c)},p:N,d(s){s&&(i(e),i(l),i(t),i(a),i(n))}}}function Ga(x){let e,o,l,t,$,a,n,m,s,c,b,u,p,q,f,L,M,w,I,B,Q,K;return e=new J({props:{animate:!0,$$slots:{default:[Ba]},$$scope:{ctx:x}}}),l=new pa({}),$=new na({}),n=new jl({}),s=new J({props:{$$slots:{default:[Fa]},$$scope:{ctx:x}}}),b=new Qi({}),p=new ai({}),f=new bs({}),M=new nn({}),I=new An({}),Q=new Ja({}),{c(){S(e.$$.fragment),o=v(),S(l.$$.fragment),t=v(),S($.$$.fragment),a=v(),S(n.$$.fragment),m=v(),S(s.$$.fragment),c=v(),S(b.$$.fragment),u=v(),S(p.$$.fragment),q=v(),S(f.$$.fragment),L=v(),S(M.$$.fragment),w=v(),S(I.$$.fragment),B=v(),S(Q.$$.fragment)},l(D){E(e.$$.fragment,D),o=d(D),E(l.$$.fragment,D),t=d(D),E($.$$.fragment,D),a=d(D),E(n.$$.fragment,D),m=d(D),E(s.$$.fragment,D),c=d(D),E(b.$$.fragment,D),u=d(D),E(p.$$.fragment,D),q=d(D),E(f.$$.fragment,D),L=d(D),E(M.$$.fragment,D),w=d(D),E(I.$$.fragment,D),B=d(D),E(Q.$$.fragment,D)},m(D,F){T(e,D,F),r(D,o,F),T(l,D,F),r(D,t,F),T($,D,F),r(D,a,F),T(n,D,F),r(D,m,F),T(s,D,F),r(D,c,F),T(b,D,F),r(D,u,F),T(p,D,F),r(D,q,F),T(f,D,F),r(D,L,F),T(M,D,F),r(D,w,F),T(I,D,F),r(D,B,F),T(Q,D,F),K=!0},p(D,[F]){const ne={};F&1&&(ne.$$scope={dirty:F,ctx:D}),e.$set(ne);const O={};F&1&&(O.$$scope={dirty:F,ctx:D}),s.$set(O)},i(D){K||(A(e.$$.fragment,D),A(l.$$.fragment,D),A($.$$.fragment,D),A(n.$$.fragment,D),A(s.$$.fragment,D),A(b.$$.fragment,D),A(p.$$.fragment,D),A(f.$$.fragment,D),A(M.$$.fragment,D),A(I.$$.fragment,D),A(Q.$$.fragment,D),K=!0)},o(D){j(e.$$.fragment,D),j(l.$$.fragment,D),j($.$$.fragment,D),j(n.$$.fragment,D),j(s.$$.fragment,D),j(b.$$.fragment,D),j(p.$$.fragment,D),j(f.$$.fragment,D),j(M.$$.fragment,D),j(I.$$.fragment,D),j(Q.$$.fragment,D),K=!1},d(D){D&&(i(o),i(t),i(a),i(m),i(c),i(u),i(q),i(L),i(w),i(B)),H(e,D),H(l,D),H($,D),H(n,D),H(s,D),H(b,D),H(p,D),H(f,D),H(M,D),H(I,D),H(Q,D)}}}class Qa extends Oe{constructor(e){super(),Ue(this,e,null,Ga,Ve,{})}}function Ka(x){let e,o;return e=new Qa({}),{c(){S(e.$$.fragment)},l(l){E(e.$$.fragment,l)},m(l,t){T(e,l,t),o=!0},i(l){o||(A(e.$$.fragment,l),o=!0)},o(l){j(e.$$.fragment,l),o=!1},d(l){H(e,l)}}}function Ya(x){let e,o,l,t,$;return document.title="3ICS 2026 - POO - Alexis Picot",t=new It({props:{$$slots:{default:[Ka]},$$scope:{ctx:x}}}),{c(){e=_("link"),o=_("meta"),l=v(),S(t.$$.fragment),this.h()},l(a){const n=Dt("svelte-v7f1ci",document.head);e=C(n,"LINK",{rel:!0,href:!0}),o=C(n,"META",{name:!0,content:!0}),n.forEach(i),l=d(a),E(t.$$.fragment,a),this.h()},h(){h(e,"rel","icon"),h(e,"href","https://fav.farm/💻"),h(o,"name","timestamp"),h(o,"content",new Date(1770202128772).toLocaleString())},m(a,n){ee(document.head,e),ee(document.head,o),r(a,l,n),T(t,a,n),$=!0},p(a,[n]){const m={};n&1&&(m.$$scope={dirty:n,ctx:a}),t.$set(m)},i(a){$||(A(t.$$.fragment,a),$=!0)},o(a){j(t.$$.fragment,a),$=!1},d(a){a&&i(l),i(e),i(o),H(t,a)}}}class er extends Oe{constructor(e){super(),Ue(this,e,null,Ya,Ve,{})}}export{er as component,ya as universal};
