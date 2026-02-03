import{s as Ne,n as O}from"../chunks/scheduler.BOeCmP2X.js";import{S as Be,i as Fe,q as H,t as j,a as A,u as T,v as S,r as E,d as a,b as r,e as _,y as b,h as d,j as C,l as v,w as g,c as ee,f as ue,g as Z,k as y,A as _e,B as Ce,x as lt,z as It}from"../chunks/index.DXsIxeDD.js";import{S as B,P as Ie,C as ie,a as Dt}from"../chunks/plantUml.OhmpBw-q.js";const Vt=!1,kt=!0,mr=Object.freeze(Object.defineProperty({__proto__:null,prerender:kt,ssr:Vt},Symbol.toStringTag,{value:"Module"}));function zt(x){let e,o="En POO, l'héritage est un mécanisme qui permet de créer une nouvelle classe à partir d'une classe existante.",s,t,$=`L'héritage, c'est comme dans la vraie vie : les enfants héritent des caractéristiques des parents.\r
			En code, une classe enfant récupère automatiquement tout ce que possède la classe parent.\r
			C'est un des piliers de la POO, introduit dès Simula en 1967 !`;return{c(){e=C("p"),e.textContent=o,s=v(),t=C("aside"),t.textContent=$,this.h()},l(i){e=_(i,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1cxtphb"&&(e.textContent=o),s=d(i),t=_(i,"ASIDE",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-58gjd2"&&(t.textContent=$),this.h()},h(){g(t,"class","notes")},m(i,n){r(i,e,n),r(i,s,n),r(i,t,n)},p:O,d(i){i&&(a(e),a(s),a(t))}}}function Ot(x){let e,o=`La classe existante est appelée <span class="text-important">classe mère</span> ou
			<span class="text-important">classe de base</span>.`,s,t,$=`On dit aussi "superclasse" en anglais (superclass). C'est le terme utilisé dans la documentation Java.\r
			La classe mère définit le comportement commun à toutes ses classes filles.`;return{c(){e=C("p"),e.innerHTML=o,s=v(),t=C("aside"),t.textContent=$,this.h()},l(i){e=_(i,"P",{"data-svelte-h":!0}),b(e)!=="svelte-17c6x0h"&&(e.innerHTML=o),s=d(i),t=_(i,"ASIDE",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-c2wodv"&&(t.textContent=$),this.h()},h(){g(t,"class","notes")},m(i,n){r(i,e,n),r(i,s,n),r(i,t,n)},p:O,d(i){i&&(a(e),a(s),a(t))}}}function Ut(x){let e,o=`La nouvelle classe est appelée <span class="text-important">classe fille</span> ou
			<span class="text-important">classe dérivée</span>.`,s,t,$="La classe fille peut aussi ajouter des attributs et des méthodes qui lui sont propres.",i,n,m=`On dit aussi "subclass" en anglais. La classe fille est une spécialisation de la classe mère.\r
			C'est la relation "est un" : un Chien est un Animal, donc Chien hérite d'Animal.\r
			En Java, toutes les classes héritent implicitement de Object. C'est la racine de l'arbre d'héritage.`;return{c(){e=C("p"),e.innerHTML=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1uk6o90"&&(e.innerHTML=o),s=d(l),t=_(l,"P",{"data-svelte-h":!0}),b(t)!=="svelte-hn2jyx"&&(t.textContent=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1xkwxx4"&&(n.textContent=m),this.h()},h(){g(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function Rt(x){let e=`
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
			Chien et Chat sont des spécialisations d'Animal.`,L;return t=new Ie({props:{$$slots:{default:[Rt]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment),$=v(),i=C("p"),i.innerHTML=n,m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-88th8y"&&(e.textContent=o),s=d(u),S(t.$$.fragment,u),$=d(u),i=_(u,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-15afcpd"&&(i.innerHTML=n),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-r9k6a2"&&(l.textContent=f),this.h()},h(){g(i,"class","fragment"),g(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),T(t,u,p),r(u,$,p),r(u,i,p),r(u,m,p),r(u,l,p),L=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),t.$set(w)},i(u){L||(A(t.$$.fragment,u),L=!0)},o(u){j(t.$$.fragment,u),L=!1},d(u){u&&(a(e),a(s),a($),a(i),a(m),a(l)),H(t,u)}}}function Nt(x){let e=`
class Animal {
    void crier() {
        System.out.println("Je suis un animal");
    }
}

class Chien extends Animal {
    boolean inscritLOF;
}
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Bt(x){let e,o="En code Java",s,t,$,i,n='On utilise le mot-clé <code class="code text-important">extends</code> pour hériter d&#39;une classe.',m,l,f="Le mot-clé extends, c'est le lien d'héritage. Chien étend Animal, donc Chien a tout ce qu'Animal a.",L;return t=new ie({props:{$$slots:{default:[Nt]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment),$=v(),i=C("p"),i.innerHTML=n,m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1w10xpg"&&(e.textContent=o),s=d(u),S(t.$$.fragment,u),$=d(u),i=_(u,"P",{"data-svelte-h":!0}),b(i)!=="svelte-fb6via"&&(i.innerHTML=n),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1efpv08"&&(l.textContent=f),this.h()},h(){g(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),T(t,u,p),r(u,$,p),r(u,i,p),r(u,m,p),r(u,l,p),L=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),t.$set(w)},i(u){L||(A(t.$$.fragment,u),L=!0)},o(u){j(t.$$.fragment,u),L=!1},d(u){u&&(a(e),a(s),a($),a(i),a(m),a(l)),H(t,u)}}}function Ft(x){let e,o=`La classe fille hérite des attributs et des méthodes de la classe mère. Elle peut aussi\r
			redéfinir les méthodes de la classe mère.`,s,t,$='Redéfinir une méthode s&#39;appelle <span class="text-important">redéfinition</span> (ou <em>override</em>).',i,n,m=`Attention à ne pas confondre redéfinition (override) et surcharge (overload) !\r
			Redéfinition : même signature, comportement différent dans la classe fille.\r
			Surcharge : même nom, signatures différentes (nombre/type de paramètres).`;return{c(){e=C("p"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1def0s3"&&(e.textContent=o),s=d(l),t=_(l,"P",{"data-svelte-h":!0}),b(t)!=="svelte-16p7trl"&&(t.innerHTML=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1i21kkf"&&(n.textContent=m),this.h()},h(){g(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function Gt(x){let e,o="Pourquoi redéfinir une méthode ?",s,t,$='<li class="fragment">Adapter le comportement de la méthode à la classe fille</li> <li class="fragment">Spécialiser un comportement générique</li>',i,n,m='<p class="text-accent-200">Exemple : Un animal crie, mais chaque animal crie différemment !</p>',l,f,L=`C'est là que la POO prend tout son sens. Le concept général est dans la classe mère, le détail dans la fille.\r
			Un Animal sait qu'il doit crier, mais seul le Chien sait qu'il aboie.\r
			C'est le Template Method Pattern : la structure dans le parent, les détails dans les enfants.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("ul"),t.innerHTML=$,i=v(),n=C("div"),n.innerHTML=m,l=v(),f=C("aside"),f.textContent=L,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-110ib47"&&(e.textContent=o),s=d(u),t=_(u,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-r58kxc"&&(t.innerHTML=$),i=d(u),n=_(u,"DIV",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-105ov4u"&&(n.innerHTML=m),l=d(u),f=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-1fg734m"&&(f.textContent=L),this.h()},h(){g(n,"class","fragment mt-8"),g(f,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),r(u,n,p),r(u,l,p),r(u,f,p)},p:O,d(u){u&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f))}}}function Qt(x){let e=`
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
			Si vous faites une faute de frappe dans le nom de la méthode, le compilateur vous préviendra.`,m;return t=new ie({props:{lines:"1-5|7-11",$$slots:{default:[Qt]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment),$=v(),i=C("aside"),i.textContent=n,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1eurtkj"&&(e.textContent=o),s=d(l),S(t.$$.fragment,l),$=d(l),i=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-usptrd"&&(i.textContent=n),this.h()},h(){g(i,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),T(t,l,f),r(l,$,f),r(l,i,f),m=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){m||(A(t.$$.fragment,l),m=!0)},o(l){j(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a($),a(i)),H(t,l)}}}function Xt(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Wt(x){let e,o="L'annotation @Override",s,t,$='Bonne pratique : <b>toujours</b> utiliser <code class="text-important">@Override</code> lors d&#39;une redéfinition.',i,n,m,l,f="❌ Sans @Override",L,u,p,w,c,h="✅ Avec @Override",M,q,I,N,Q=`Sans Override, si vous vous trompez dans le nom, vous créez une nouvelle méthode au lieu de redéfinir.\r
			Avec Override, le compilateur vérifie que la méthode existe bien dans le parent.`,X;return u=new ie({props:{class:"language-java",$$slots:{default:[Xt]},$$scope:{ctx:x}}}),q=new ie({props:{class:"language-java",$$slots:{default:[Yt]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("div"),m=C("div"),l=C("h4"),l.textContent=f,L=v(),E(u.$$.fragment),p=v(),w=C("div"),c=C("h4"),c.textContent=h,M=v(),E(q.$$.fragment),I=v(),N=C("aside"),N.textContent=Q,this.h()},l(V){e=_(V,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-50lfmg"&&(e.textContent=o),s=d(V),t=_(V,"P",{"data-svelte-h":!0}),b(t)!=="svelte-d96ked"&&(t.innerHTML=$),i=d(V),n=_(V,"DIV",{class:!0});var F=ue(n);m=_(F,"DIV",{});var ne=ue(m);l=_(ne,"H4",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-15xopgk"&&(l.textContent=f),L=d(ne),S(u.$$.fragment,ne),ne.forEach(a),p=d(F),w=_(F,"DIV",{});var U=ue(w);c=_(U,"H4",{class:!0,"data-svelte-h":!0}),b(c)!=="svelte-1wl6p7j"&&(c.textContent=h),M=d(U),S(q.$$.fragment,U),U.forEach(a),F.forEach(a),I=d(V),N=_(V,"ASIDE",{class:!0,"data-svelte-h":!0}),b(N)!=="svelte-ggk4l5"&&(N.textContent=Q),this.h()},h(){g(l,"class","text-red-400"),g(c,"class","text-green-400"),g(n,"class","grid grid-cols-2 gap-8 mt-6"),g(N,"class","notes")},m(V,F){r(V,e,F),r(V,s,F),r(V,t,F),r(V,i,F),r(V,n,F),ee(n,m),ee(m,l),ee(m,L),T(u,m,null),ee(n,p),ee(n,w),ee(w,c),ee(w,M),T(q,w,null),r(V,I,F),r(V,N,F),X=!0},p(V,F){const ne={};F&1&&(ne.$$scope={dirty:F,ctx:V}),u.$set(ne);const U={};F&1&&(U.$$scope={dirty:F,ctx:V}),q.$set(U)},i(V){X||(A(u.$$.fragment,V),A(q.$$.fragment,V),X=!0)},o(V){j(u.$$.fragment,V),j(q.$$.fragment,V),X=!1},d(V){V&&(a(e),a(s),a(t),a(i),a(n),a(I),a(N)),H(u),H(q)}}}function Zt(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function yt(x){let e,o="Appeler la méthode du parent : super",s,t,$='On peut appeler la méthode de la classe mère avec <code class="text-important">super</code>.',i,n,m,l,f="Super permet d'accéder au comportement du parent. Utile quand on veut étendre le comportement plutôt que le remplacer complètement.",L;return n=new ie({props:{lines:"7-11",$$slots:{default:[Zt]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),E(n.$$.fragment),m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-qjr5g"&&(e.textContent=o),s=d(u),t=_(u,"P",{"data-svelte-h":!0}),b(t)!=="svelte-v8yuqg"&&(t.innerHTML=$),i=d(u),S(n.$$.fragment,u),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-o07epn"&&(l.textContent=f),this.h()},h(){g(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),T(n,u,p),r(u,m,p),r(u,l,p),L=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),n.$set(w)},i(u){L||(A(n.$$.fragment,u),L=!0)},o(u){j(n.$$.fragment,u),L=!1},d(u){u&&(a(e),a(s),a(t),a(i),a(m),a(l)),H(n,u)}}}function es(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function ts(x){let e,o="Le constructeur et super()",s,t,$="Le constructeur de la classe fille doit appeler celui de la classe mère.",i,n,m,l,f="<code>super()</code> doit être la <b>première instruction</b> du constructeur !",L,u,p=`C'est obligatoire. Le parent doit être construit avant l'enfant.\r
			Si vous oubliez super(), Java appelle super() sans argument par défaut.`,w;return n=new ie({props:{lines:"1-6|8-13",$$slots:{default:[es]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),E(n.$$.fragment),m=v(),l=C("p"),l.innerHTML=f,L=v(),u=C("aside"),u.textContent=p,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-b6mdxj"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-kr896n"&&(t.textContent=$),i=d(c),S(n.$$.fragment,c),m=d(c),l=_(c,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-18u9zg8"&&(l.innerHTML=f),L=d(c),u=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(u)!=="svelte-18qho2n"&&(u.textContent=p),this.h()},h(){g(l,"class","fragment text-accent-200"),g(u,"class","notes")},m(c,h){r(c,e,h),r(c,s,h),r(c,t,h),r(c,i,h),T(n,c,h),r(c,m,h),r(c,l,h),r(c,L,h),r(c,u,h),w=!0},p(c,h){const M={};h&1&&(M.$$scope={dirty:h,ctx:c}),n.$set(M)},i(c){w||(A(n.$$.fragment,c),w=!0)},o(c){j(n.$$.fragment,c),w=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(l),a(L),a(u)),H(n,c)}}}function ss(x){let e,o="Les classes abstraites",s,t,$="Quand on ne peut pas tout définir...",i,n,m=`Maintenant on passe à un concept plus avancé : l'abstraction.\r
			Parfois, une classe est trop générale pour être instanciée. C'est là qu'intervient abstract.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-y699sq"&&(e.textContent=o),s=d(l),t=_(l,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1vlu38n"&&(t.textContent=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1nw4dvg"&&(n.textContent=m),this.h()},h(){g(e,"class","text-5xl"),g(t,"class","text-2xl text-gray-400"),g(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function ls(x){let e=`
abstract class Animal {
    abstract void crier();  // Pas d'implémentation !
}

// Animal a = new Animal();  // ❌ Erreur de compilation !
Chien c = new Chien();       // ✅ OK
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function ns(x){let e,o="Qu'est-ce qu'une classe abstraite ?",s,t,$='Une classe abstraite est une classe qui <span class="text-important">ne peut pas être instanciée</span>.',i,n,m="Elle est destinée à être héritée par d'autres classes.",l,f,L,u,p,w="{}",c,h,M;return f=new ie({props:{class:"fragment",$$slots:{default:[ls]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("p"),n.textContent=m,l=v(),E(f.$$.fragment),L=v(),u=C("aside"),p=y(`Pensez-y comme un moule incomplet. On ne peut pas utiliser un moule incomplet pour fabriquer quelque chose.\r
			Mais les classes filles complètent le moule et deviennent utilisables.\r
			Une méthode abstraite n'a pas de corps `),c=y(w),h=y("  - juste une signature suivie de ;"),this.h()},l(q){e=_(q,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-ywas56"&&(e.textContent=o),s=d(q),t=_(q,"P",{"data-svelte-h":!0}),b(t)!=="svelte-uh1j94"&&(t.innerHTML=$),i=d(q),n=_(q,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1e5hthq"&&(n.textContent=m),l=d(q),S(f.$$.fragment,q),L=d(q),u=_(q,"ASIDE",{class:!0});var I=ue(u);p=Z(I,`Pensez-y comme un moule incomplet. On ne peut pas utiliser un moule incomplet pour fabriquer quelque chose.\r
			Mais les classes filles complètent le moule et deviennent utilisables.\r
			Une méthode abstraite n'a pas de corps `),c=Z(I,w),h=Z(I,"  - juste une signature suivie de ;"),I.forEach(a),this.h()},h(){g(n,"class","fragment"),g(u,"class","notes")},m(q,I){r(q,e,I),r(q,s,I),r(q,t,I),r(q,i,I),r(q,n,I),r(q,l,I),T(f,q,I),r(q,L,I),r(q,u,I),ee(u,p),ee(u,c),ee(u,h),M=!0},p(q,I){const N={};I&1&&(N.$$scope={dirty:I,ctx:q}),f.$set(N)},i(q){M||(A(f.$$.fragment,q),M=!0)},o(q){j(f.$$.fragment,q),M=!1},d(q){q&&(a(e),a(s),a(t),a(i),a(n),a(l),a(L),a(u)),H(f,q)}}}function is(x){let e,o="Pourquoi utiliser des classes abstraites ?",s,t,$='<li class="fragment">Pour définir un <b>contrat</b> que les classes filles doivent respecter</li> <li class="fragment">Pour <b>forcer</b> les classes filles à implémenter certaines méthodes</li> <li class="fragment">Parce qu&#39;il n&#39;a parfois <b>aucun sens</b> d&#39;instancier une classe</li>',i,n,m=`🤔 Comment calculer la surface d'une "Forme" générique ? C'est impossible !`,l,f,L=`C'est une question de sémantique. Une "Forme" c'est quoi ? Un cercle ? Un carré ? On ne sait pas.\r
			Donc on ne peut pas calculer sa surface. Mais on SAIT que toute forme a une surface.\r
			La classe abstraite dit : "Je ne sais pas comment, mais mes enfants sauront."`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("ul"),t.innerHTML=$,i=v(),n=C("p"),n.textContent=m,l=v(),f=C("aside"),f.textContent=L,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1fw1imw"&&(e.textContent=o),s=d(u),t=_(u,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-1f0ebwg"&&(t.innerHTML=$),i=d(u),n=_(u,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-9bhmml"&&(n.textContent=m),l=d(u),f=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-1fqfiay"&&(f.textContent=L),this.h()},h(){g(n,"class","fragment mt-8 text-accent-200"),g(f,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),r(u,n,p),r(u,l,p),r(u,f,p)},p:O,d(u){u&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f))}}}function as(x){let e=`
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
			Mais on sait que toute forme DOIT pouvoir calculer sa surface.`,m;return t=new Ie({props:{$$slots:{default:[as]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment),$=v(),i=C("aside"),i.textContent=n,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1l1b4vq"&&(e.textContent=o),s=d(l),S(t.$$.fragment,l),$=d(l),i=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-19i401s"&&(i.textContent=n),this.h()},h(){g(i,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),T(t,l,f),r(l,$,f),r(l,i,f),m=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){m||(A(t.$$.fragment,l),m=!0)},o(l){j(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a($),a(i)),H(t,l)}}}function us(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function fs(x){let e,o="En code Java",s,t,$,i,n,m,l,f;return t=new ie({props:{$$slots:{default:[us]},$$scope:{ctx:x}}}),n=new ie({props:{class:"language-java",$$slots:{default:[os]},$$scope:{ctx:x}}}),l=new ie({props:{class:"language-java",$$slots:{default:[cs]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment),$=v(),i=C("div"),E(n.$$.fragment),m=v(),E(l.$$.fragment),this.h()},l(L){e=_(L,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1w10xpg"&&(e.textContent=o),s=d(L),S(t.$$.fragment,L),$=d(L),i=_(L,"DIV",{class:!0});var u=ue(i);S(n.$$.fragment,u),m=d(u),S(l.$$.fragment,u),u.forEach(a),this.h()},h(){g(i,"class","flex flex-row gap-4 mt-4")},m(L,u){r(L,e,u),r(L,s,u),T(t,L,u),r(L,$,u),r(L,i,u),T(n,i,null),ee(i,m),T(l,i,null),f=!0},p(L,u){const p={};u&1&&(p.$$scope={dirty:u,ctx:L}),t.$set(p);const w={};u&1&&(w.$$scope={dirty:u,ctx:L}),n.$set(w);const c={};u&1&&(c.$$scope={dirty:u,ctx:L}),l.$set(c)},i(L){f||(A(t.$$.fragment,L),A(n.$$.fragment,L),A(l.$$.fragment,L),f=!0)},o(L){j(t.$$.fragment,L),j(n.$$.fragment,L),j(l.$$.fragment,L),f=!1},d(L){L&&(a(e),a(s),a($),a(i)),H(t,L),H(n),H(l)}}}function $s(x){let e,o="Ce qu'il faut retenir",s,t,$='La classe <code class="text-important">Forme</code> est abstraite car on ne peut pas calculer la surface d&#39;une forme générique.',i,n,m="Mais <b>toutes les formes</b> doivent pouvoir calculer leur surface → c&#39;est le contrat.",l,f,L="❌ <code>new Forme()</code> → Erreur !",u,p,w="✅ <code>new Cercle(5.0)</code> → OK";return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("p"),n.innerHTML=m,l=v(),f=C("p"),f.innerHTML=L,u=v(),p=C("p"),p.innerHTML=w,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1c3ns5x"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1aglhjf"&&(t.innerHTML=$),i=d(c),n=_(c,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1yjmjvc"&&(n.innerHTML=m),l=d(c),f=_(c,"P",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-1b5sfkh"&&(f.innerHTML=L),u=d(c),p=_(c,"P",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-iu5ucw"&&(p.innerHTML=w),this.h()},h(){g(n,"class","fragment"),g(f,"class","fragment mt-8 text-red-400"),g(p,"class","fragment text-green-400")},m(c,h){r(c,e,h),r(c,s,h),r(c,t,h),r(c,i,h),r(c,n,h),r(c,l,h),r(c,f,h),r(c,u,h),r(c,p,h)},p:O,d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f),a(u),a(p))}}}function ps(x){let e,o="⚠️ Quand NE PAS hériter",s,t,$="L'erreur classique du débutant",i,n,m=`Attention, l'héritage est puissant mais dangereux si mal utilisé.\r
			C'est l'une des erreurs les plus fréquentes chez les développeurs juniors.\r
			Même les seniors tombent dans le piège parfois !`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-1drmq8k"&&(e.textContent=o),s=d(l),t=_(l,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-3u5bob"&&(t.textContent=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-d4fqpf"&&(n.textContent=m),this.h()},h(){g(e,"class","text-5xl"),g(t,"class","text-2xl text-gray-400"),g(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function ms(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function ds(x){let e,o="Le piège de l'héritage abusif",s,t,$="L'héritage n'est pas toujours la bonne solution !",i,n,m,l,f="Une Pile n'est PAS une ArrayList, elle UTILISE une ArrayList !",L,u,p=`C'est le fameux exemple de Joshua Bloch dans "Effective Java". Il déconseille d'hériter des collections.\r
			Le problème : on expose des méthodes qui n'ont pas de sens pour une Pile (add, remove au milieu...).\r
			C'est une violation du principe de substitution de Liskov.`,w;return n=new ie({props:{class:"language-java",$$slots:{default:[ms]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),E(n.$$.fragment),m=v(),l=C("p"),l.textContent=f,L=v(),u=C("aside"),u.textContent=p,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1hvzkw5"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-dgmjh5"&&(t.textContent=$),i=d(c),S(n.$$.fragment,c),m=d(c),l=_(c,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1pmyb7u"&&(l.textContent=f),L=d(c),u=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(u)!=="svelte-2qwtt4"&&(u.textContent=p),this.h()},h(){g(l,"class","fragment text-red-400 font-bold"),g(u,"class","notes")},m(c,h){r(c,e,h),r(c,s,h),r(c,t,h),r(c,i,h),T(n,c,h),r(c,m,h),r(c,l,h),r(c,L,h),r(c,u,h),w=!0},p(c,h){const M={};h&1&&(M.$$scope={dirty:h,ctx:c}),n.$set(M)},i(c){w||(A(n.$$.fragment,c),w=!0)},o(c){j(n.$$.fragment,c),w=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(l),a(L),a(u)),H(n,c)}}}function vs(x){let e=`
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
			C'est le principe d'encapsulation appliqué à l'architecture.`,L;return t=new ie({props:{class:"language-java",$$slots:{default:[vs]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment),$=v(),i=C("p"),i.textContent=n,m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-7t2ot"&&(e.textContent=o),s=d(u),S(t.$$.fragment,u),$=d(u),i=_(u,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-14pjpsh"&&(i.textContent=n),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-czhf2j"&&(l.textContent=f),this.h()},h(){g(i,"class","fragment text-green-400 font-bold"),g(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),T(t,u,p),r(u,$,p),r(u,i,p),r(u,m,p),r(u,l,p),L=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),t.$set(w)},i(u){L||(A(t.$$.fragment,u),L=!0)},o(u){j(t.$$.fragment,u),L=!1},d(u){u&&(a(e),a(s),a($),a(i),a(m),a(l)),H(t,u)}}}function _s(x){let e,o="Comment choisir ?",s,t,$='<p class="fragment">🤔 Posez-vous la question :</p> <p class="fragment mt-4 text-3xl">&quot;Est-ce qu&#39;un <b>X</b> <span class="text-important">EST UN</span> <b>Y</b> ?&quot;</p> <div class="fragment mt-8"><p class="text-green-400">✅ Un Chien <b>est un</b> Animal → Héritage</p> <p class="text-green-400">✅ Un Cercle <b>est une</b> Forme → Héritage</p> <p class="text-red-400">❌ Une Pile <b>est une</b> ArrayList → NON !</p> <p class="text-blue-400">✅ Une Pile <b>a une</b> ArrayList → Composition</p></div>',i,n,m=`C'est la règle d'or. Si la phrase "X est un Y" sonne faux, n'héritez pas.\r
			On verra la composition dans le prochain chapitre.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("div"),t.innerHTML=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1sib837"&&(e.textContent=o),s=d(l),t=_(l,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-b6u81r"&&(t.innerHTML=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1dryqu3"&&(n.textContent=m),this.h()},h(){g(t,"class","text-2xl mt-8"),g(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function Cs(x){let e,o="Récapitulatif : les mots-clés",s,t,$='<tr><td class="p-4"><code class="text-important">extends</code></td> <td class="p-4">Hériter d&#39;une classe</td></tr> <tr><td class="p-4"><code class="text-important">super</code></td> <td class="p-4">Accéder à la classe mère</td></tr> <tr><td class="p-4"><code class="text-important">super()</code></td> <td class="p-4">Appeler le constructeur parent</td></tr> <tr><td class="p-4"><code class="text-important">@Override</code></td> <td class="p-4">Redéfinir une méthode (annotation)</td></tr> <tr><td class="p-4"><code class="text-important">abstract</code></td> <td class="p-4">Classe/méthode non instanciable</td></tr>',i,n,m=`Ce sont les 5 mots-clés essentiels de l'héritage en Java. Apprenez-les par cœur !\r
			Extends pour hériter, super pour accéder au parent, @Override pour redéfinir proprement.\r
			Avec ça, vous couvrez 95% des cas d'utilisation de l'héritage.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("table"),t.innerHTML=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-18myzwu"&&(e.textContent=o),s=d(l),t=_(l,"TABLE",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1mjxyt9"&&(t.innerHTML=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-ij1jd2"&&(n.textContent=m),this.h()},h(){g(t,"class","text-xl"),g(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function hs(x){let e,o="L'héritage",s,t,$,i,n,m,l,f,L,u,p,w,c,h,M,q,I,N,Q,X,V,F,ne,U,le,ae,fe,re,pe,oe,$e,ce,me,R,te,J,se,de,he,ve,ge,xe,be,z,W;return t=new B({props:{$$slots:{default:[zt]},$$scope:{ctx:x}}}),i=new B({props:{$$slots:{default:[Ot]},$$scope:{ctx:x}}}),m=new B({props:{$$slots:{default:[Ut]},$$scope:{ctx:x}}}),f=new B({props:{$$slots:{default:[Jt]},$$scope:{ctx:x}}}),u=new B({props:{$$slots:{default:[Bt]},$$scope:{ctx:x}}}),w=new B({props:{$$slots:{default:[Ft]},$$scope:{ctx:x}}}),h=new B({props:{$$slots:{default:[Gt]},$$scope:{ctx:x}}}),q=new B({props:{$$slots:{default:[Kt]},$$scope:{ctx:x}}}),N=new B({props:{$$slots:{default:[Wt]},$$scope:{ctx:x}}}),X=new B({props:{$$slots:{default:[yt]},$$scope:{ctx:x}}}),F=new B({props:{$$slots:{default:[ts]},$$scope:{ctx:x}}}),U=new B({props:{data_background_color:"#1a1a2e",$$slots:{default:[ss]},$$scope:{ctx:x}}}),ae=new B({props:{$$slots:{default:[ns]},$$scope:{ctx:x}}}),re=new B({props:{$$slots:{default:[is]},$$scope:{ctx:x}}}),oe=new B({props:{$$slots:{default:[rs]},$$scope:{ctx:x}}}),ce=new B({props:{$$slots:{default:[fs]},$$scope:{ctx:x}}}),R=new B({props:{$$slots:{default:[$s]},$$scope:{ctx:x}}}),J=new B({props:{data_background_color:"#3d1a1a",$$slots:{default:[ps]},$$scope:{ctx:x}}}),de=new B({props:{$$slots:{default:[ds]},$$scope:{ctx:x}}}),ve=new B({props:{$$slots:{default:[xs]},$$scope:{ctx:x}}}),xe=new B({props:{$$slots:{default:[_s]},$$scope:{ctx:x}}}),z=new B({props:{$$slots:{default:[Cs]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment),$=v(),E(i.$$.fragment),n=v(),E(m.$$.fragment),l=v(),E(f.$$.fragment),L=v(),E(u.$$.fragment),p=v(),E(w.$$.fragment),c=v(),E(h.$$.fragment),M=v(),E(q.$$.fragment),I=v(),E(N.$$.fragment),Q=v(),E(X.$$.fragment),V=v(),E(F.$$.fragment),ne=v(),E(U.$$.fragment),le=v(),E(ae.$$.fragment),fe=v(),E(re.$$.fragment),pe=v(),E(oe.$$.fragment),$e=v(),E(ce.$$.fragment),me=v(),E(R.$$.fragment),te=v(),E(J.$$.fragment),se=v(),E(de.$$.fragment),he=v(),E(ve.$$.fragment),ge=v(),E(xe.$$.fragment),be=v(),E(z.$$.fragment)},l(k){e=_(k,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-taqcdc"&&(e.textContent=o),s=d(k),S(t.$$.fragment,k),$=d(k),S(i.$$.fragment,k),n=d(k),S(m.$$.fragment,k),l=d(k),S(f.$$.fragment,k),L=d(k),S(u.$$.fragment,k),p=d(k),S(w.$$.fragment,k),c=d(k),S(h.$$.fragment,k),M=d(k),S(q.$$.fragment,k),I=d(k),S(N.$$.fragment,k),Q=d(k),S(X.$$.fragment,k),V=d(k),S(F.$$.fragment,k),ne=d(k),S(U.$$.fragment,k),le=d(k),S(ae.$$.fragment,k),fe=d(k),S(re.$$.fragment,k),pe=d(k),S(oe.$$.fragment,k),$e=d(k),S(ce.$$.fragment,k),me=d(k),S(R.$$.fragment,k),te=d(k),S(J.$$.fragment,k),se=d(k),S(de.$$.fragment,k),he=d(k),S(ve.$$.fragment,k),ge=d(k),S(xe.$$.fragment,k),be=d(k),S(z.$$.fragment,k)},m(k,Y){r(k,e,Y),r(k,s,Y),T(t,k,Y),r(k,$,Y),T(i,k,Y),r(k,n,Y),T(m,k,Y),r(k,l,Y),T(f,k,Y),r(k,L,Y),T(u,k,Y),r(k,p,Y),T(w,k,Y),r(k,c,Y),T(h,k,Y),r(k,M,Y),T(q,k,Y),r(k,I,Y),T(N,k,Y),r(k,Q,Y),T(X,k,Y),r(k,V,Y),T(F,k,Y),r(k,ne,Y),T(U,k,Y),r(k,le,Y),T(ae,k,Y),r(k,fe,Y),T(re,k,Y),r(k,pe,Y),T(oe,k,Y),r(k,$e,Y),T(ce,k,Y),r(k,me,Y),T(R,k,Y),r(k,te,Y),T(J,k,Y),r(k,se,Y),T(de,k,Y),r(k,he,Y),T(ve,k,Y),r(k,ge,Y),T(xe,k,Y),r(k,be,Y),T(z,k,Y),W=!0},p(k,Y){const Le={};Y&1&&(Le.$$scope={dirty:Y,ctx:k}),t.$set(Le);const we={};Y&1&&(we.$$scope={dirty:Y,ctx:k}),i.$set(we);const qe={};Y&1&&(qe.$$scope={dirty:Y,ctx:k}),m.$set(qe);const Pe={};Y&1&&(Pe.$$scope={dirty:Y,ctx:k}),f.$set(Pe);const Me={};Y&1&&(Me.$$scope={dirty:Y,ctx:k}),u.$set(Me);const He={};Y&1&&(He.$$scope={dirty:Y,ctx:k}),w.$set(He);const D={};Y&1&&(D.$$scope={dirty:Y,ctx:k}),h.$set(D);const K={};Y&1&&(K.$$scope={dirty:Y,ctx:k}),q.$set(K);const ke={};Y&1&&(ke.$$scope={dirty:Y,ctx:k}),N.$set(ke);const je={};Y&1&&(je.$$scope={dirty:Y,ctx:k}),X.$set(je);const ze={};Y&1&&(ze.$$scope={dirty:Y,ctx:k}),F.$set(ze);const Ae={};Y&1&&(Ae.$$scope={dirty:Y,ctx:k}),U.$set(Ae);const Oe={};Y&1&&(Oe.$$scope={dirty:Y,ctx:k}),ae.$set(Oe);const Te={};Y&1&&(Te.$$scope={dirty:Y,ctx:k}),re.$set(Te);const Ue={};Y&1&&(Ue.$$scope={dirty:Y,ctx:k}),oe.$set(Ue);const Se={};Y&1&&(Se.$$scope={dirty:Y,ctx:k}),ce.$set(Se);const Re={};Y&1&&(Re.$$scope={dirty:Y,ctx:k}),R.$set(Re);const Ee={};Y&1&&(Ee.$$scope={dirty:Y,ctx:k}),J.$set(Ee);const Je={};Y&1&&(Je.$$scope={dirty:Y,ctx:k}),de.$set(Je);const De={};Y&1&&(De.$$scope={dirty:Y,ctx:k}),ve.$set(De);const Qe={};Y&1&&(Qe.$$scope={dirty:Y,ctx:k}),xe.$set(Qe);const Ve={};Y&1&&(Ve.$$scope={dirty:Y,ctx:k}),z.$set(Ve)},i(k){W||(A(t.$$.fragment,k),A(i.$$.fragment,k),A(m.$$.fragment,k),A(f.$$.fragment,k),A(u.$$.fragment,k),A(w.$$.fragment,k),A(h.$$.fragment,k),A(q.$$.fragment,k),A(N.$$.fragment,k),A(X.$$.fragment,k),A(F.$$.fragment,k),A(U.$$.fragment,k),A(ae.$$.fragment,k),A(re.$$.fragment,k),A(oe.$$.fragment,k),A(ce.$$.fragment,k),A(R.$$.fragment,k),A(J.$$.fragment,k),A(de.$$.fragment,k),A(ve.$$.fragment,k),A(xe.$$.fragment,k),A(z.$$.fragment,k),W=!0)},o(k){j(t.$$.fragment,k),j(i.$$.fragment,k),j(m.$$.fragment,k),j(f.$$.fragment,k),j(u.$$.fragment,k),j(w.$$.fragment,k),j(h.$$.fragment,k),j(q.$$.fragment,k),j(N.$$.fragment,k),j(X.$$.fragment,k),j(F.$$.fragment,k),j(U.$$.fragment,k),j(ae.$$.fragment,k),j(re.$$.fragment,k),j(oe.$$.fragment,k),j(ce.$$.fragment,k),j(R.$$.fragment,k),j(J.$$.fragment,k),j(de.$$.fragment,k),j(ve.$$.fragment,k),j(xe.$$.fragment,k),j(z.$$.fragment,k),W=!1},d(k){k&&(a(e),a(s),a($),a(n),a(l),a(L),a(p),a(c),a(M),a(I),a(Q),a(V),a(ne),a(le),a(fe),a(pe),a($e),a(me),a(te),a(se),a(he),a(ge),a(be)),H(t,k),H(i,k),H(m,k),H(f,k),H(u,k),H(w,k),H(h,k),H(q,k),H(N,k),H(X,k),H(F,k),H(U,k),H(ae,k),H(re,k),H(oe,k),H(ce,k),H(R,k),H(J,k),H(de,k),H(ve,k),H(xe,k),H(z,k)}}}function gs(x){let e,o;return e=new B({props:{$$slots:{default:[hs]},$$scope:{ctx:x}}}),{c(){E(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,t){T(e,s,t),o=!0},p(s,[t]){const $={};t&1&&($.$$scope={dirty:t,ctx:s}),e.$set($)},i(s){o||(A(e.$$.fragment,s),o=!0)},o(s){j(e.$$.fragment,s),o=!1},d(s){H(e,s)}}}class bs extends Be{constructor(e){super(),Fe(this,e,null,gs,Ne,{})}}function Ls(x){let e,o,s,t,$,i,n,m,l,f,L,u,p,w,c,h,M,q,I,N;return{c(){e=Ce("svg"),o=Ce("g"),s=Ce("title"),t=y("Layer 1"),$=Ce("g"),i=Ce("rect"),n=Ce("text"),m=y("Données"),l=Ce("text"),f=y("FonctionA"),L=Ce("text"),u=y("FonctionB"),p=Ce("text"),w=y("FonctionC"),c=Ce("text"),h=y("FonctionD"),M=Ce("line"),q=Ce("line"),I=Ce("line"),N=Ce("line"),this.h()},l(Q){e=_e(Q,"svg",{width:!0,height:!0,xmlns:!0});var X=ue(e);o=_e(X,"g",{});var V=ue(o);s=_e(V,"title",{});var F=ue(s);t=Z(F,"Layer 1"),F.forEach(a),$=_e(V,"g",{id:!0});var ne=ue($);i=_e(ne,"rect",{fill:!0,stroke:!0,x:!0,y:!0,width:!0,height:!0,id:!0}),ue(i).forEach(a),n=_e(ne,"text",{fill:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var U=ue(n);m=Z(U,"Données"),U.forEach(a),l=_e(ne,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var le=ue(l);f=Z(le,"FonctionA"),le.forEach(a),L=_e(ne,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var ae=ue(L);u=Z(ae,"FonctionB"),ae.forEach(a),p=_e(ne,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var fe=ue(p);w=Z(fe,"FonctionC"),fe.forEach(a),c=_e(ne,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var re=ue(c);h=Z(re,"FonctionD"),re.forEach(a),M=_e(ne,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),ue(M).forEach(a),q=_e(ne,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),ue(q).forEach(a),I=_e(ne,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),ue(I).forEach(a),N=_e(ne,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),ue(N).forEach(a),ne.forEach(a),V.forEach(a),X.forEach(a),this.h()},h(){g(i,"fill","#FFDFB8"),g(i,"stroke","none"),g(i,"x","170"),g(i,"y","0"),g(i,"width","150"),g(i,"height","300"),g(i,"id","svg_1"),g(n,"fill","black"),g(n,"stroke","black"),g(n,"x","205"),g(n,"y","150"),g(n,"id","svg_2"),g(n,"font-size","24"),g(n,"font-family","Noto Sans JP"),g(n,"text-anchor","start"),g(n,"xml:space","preserve"),g(l,"class","fill-current"),g(l,"stroke","none"),g(l,"x","0"),g(l,"y","50"),g(l,"id","svg_3"),g(l,"font-size","24"),g(l,"font-family","Noto Sans JP"),g(l,"text-anchor","start"),g(l,"xml:space","preserve"),g(L,"class","fill-current"),g(L,"stroke","none"),g(L,"x","0"),g(L,"y","109.99901"),g(L,"id","svg_4"),g(L,"font-size","24"),g(L,"font-family","Noto Sans JP"),g(L,"text-anchor","start"),g(L,"xml:space","preserve"),g(p,"class","fill-current"),g(p,"stroke","none"),g(p,"x","0"),g(p,"y","170"),g(p,"id","svg_5"),g(p,"font-size","24"),g(p,"font-family","Noto Sans JP"),g(p,"text-anchor","start"),g(p,"xml:space","preserve"),g(c,"class","fill-current"),g(c,"stroke","none"),g(c,"x","0"),g(c,"y","230"),g(c,"id","svg_6"),g(c,"font-size","24"),g(c,"font-family","Noto Sans JP"),g(c,"text-anchor","start"),g(c,"xml:space","preserve"),g(M,"stroke-width","5"),g(M,"class","stroke-current"),g(M,"x1","113.53031"),g(M,"y1","222.00012"),g(M,"x2","158.37456"),g(M,"y2","222.00012"),g(M,"id","svg_7"),g(q,"stroke-width","5"),g(q,"class","stroke-current"),g(q,"x1","113.53031"),g(q,"y1","162.00012"),g(q,"x2","158.37456"),g(q,"y2","162.00012"),g(q,"id","svg_8"),g(I,"stroke-width","5"),g(I,"class","stroke-current"),g(I,"x1","113.53031"),g(I,"y1","101.99914"),g(I,"x2","158.37456"),g(I,"y2","101.99914"),g(I,"id","svg_9"),g(N,"stroke-width","5"),g(N,"class","stroke-current"),g(N,"x1","113.53031"),g(N,"y1","42.00012"),g(N,"x2","158.37455"),g(N,"y2","42.00012"),g(N,"id","svg_10"),g($,"id","svg_11"),g(e,"width","320"),g(e,"height","300"),g(e,"xmlns","http://www.w3.org/2000/svg")},m(Q,X){r(Q,e,X),ee(e,o),ee(o,s),ee(s,t),ee(o,$),ee($,i),ee($,n),ee(n,m),ee($,l),ee(l,f),ee($,L),ee(L,u),ee($,p),ee(p,w),ee($,c),ee(c,h),ee($,M),ee($,q),ee($,I),ee($,N)},p:O,i:O,o:O,d(Q){Q&&a(e)}}}class ws extends Be{constructor(e){super(),Fe(this,e,null,Ls,Ne,{})}}function qs(x){let e,o,s,t,$,i,n,m,l,f,L,u,p,w,c,h,M,q,I,N,Q,X,V,F;return{c(){e=Ce("svg"),o=Ce("g"),s=Ce("title"),t=y("Layer 1"),$=Ce("g"),i=Ce("path"),n=Ce("text"),m=y("Données"),l=Ce("text"),f=y("MéthodeA"),L=Ce("text"),u=y("MéthodeB"),p=Ce("line"),w=Ce("line"),c=Ce("g"),h=Ce("path"),M=Ce("text"),q=y("Données"),I=Ce("text"),N=y("MéthodeA"),Q=Ce("text"),X=y("MéthodeB"),V=Ce("line"),F=Ce("line"),this.h()},l(ne){e=_e(ne,"svg",{width:!0,height:!0,xmlns:!0});var U=ue(e);o=_e(U,"g",{});var le=ue(o);s=_e(le,"title",{});var ae=ue(s);t=Z(ae,"Layer 1"),ae.forEach(a),$=_e(le,"g",{id:!0});var fe=ue($);i=_e(fe,"path",{id:!0,d:!0,opacity:!0,stroke:!0,fill:!0}),ue(i).forEach(a),n=_e(fe,"text",{stroke:!0,fill:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var re=ue(n);m=Z(re,"Données"),re.forEach(a),l=_e(fe,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var pe=ue(l);f=Z(pe,"MéthodeA"),pe.forEach(a),L=_e(fe,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var oe=ue(L);u=Z(oe,"MéthodeB"),oe.forEach(a),p=_e(fe,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),ue(p).forEach(a),w=_e(fe,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),ue(w).forEach(a),fe.forEach(a),c=_e(le,"g",{id:!0});var $e=ue(c);h=_e($e,"path",{id:!0,d:!0,opacity:!0,stroke:!0,fill:!0}),ue(h).forEach(a),M=_e($e,"text",{stroke:!0,fill:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var ce=ue(M);q=Z(ce,"Données"),ce.forEach(a),I=_e($e,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var me=ue(I);N=Z(me,"MéthodeA"),me.forEach(a),Q=_e($e,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var R=ue(Q);X=Z(R,"MéthodeB"),R.forEach(a),V=_e($e,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),ue(V).forEach(a),F=_e($e,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),ue(F).forEach(a),$e.forEach(a),le.forEach(a),U.forEach(a),this.h()},h(){g(i,"id","svg_1"),g(i,"d","m170,2.75867l150,0l0,116l-150,0l0,-116z"),g(i,"opacity","undefined"),g(i,"stroke","none"),g(i,"fill","#FFDFB8"),g(n,"stroke","black"),g(n,"fill","black"),g(n,"x","208"),g(n,"y","70"),g(n,"id","svg_2"),g(n,"font-size","24"),g(n,"font-family","Noto Sans JP"),g(n,"text-anchor","start"),g(n,"xml:space","preserve"),g(l,"class","fill-current"),g(l,"stroke","none"),g(l,"x","0"),g(l,"y","40"),g(l,"id","svg_3"),g(l,"font-size","24"),g(l,"font-family","Noto Sans JP"),g(l,"text-anchor","start"),g(l,"xml:space","preserve"),g(L,"class","fill-current"),g(L,"stroke","none"),g(L,"x","0"),g(L,"y","100"),g(L,"id","svg_4"),g(L,"font-size","24"),g(L,"font-family","Noto Sans JP"),g(L,"text-anchor","start"),g(L,"xml:space","preserve"),g(p,"stroke-width","5"),g(p,"class","stroke-current"),g(p,"x1","113.53031"),g(p,"y1","91.75781"),g(p,"x2","158.37456"),g(p,"y2","91.75781"),g(p,"id","svg_9"),g(w,"stroke-width","5"),g(w,"class","stroke-current"),g(w,"x1","113.53031"),g(w,"y1","31.75879"),g(w,"x2","158.37455"),g(w,"y2","31.75879"),g(w,"id","svg_10"),g($,"id","svg_12"),g(h,"id","svg_13"),g(h,"d","m170,182.07234l150,0l0,116l-150,0l0,-116z"),g(h,"opacity","undefined"),g(h,"stroke","none"),g(h,"fill","#FFDFB8"),g(M,"stroke","black"),g(M,"fill","black"),g(M,"x","208"),g(M,"y","250"),g(M,"id","svg_14"),g(M,"font-size","24"),g(M,"font-family","Noto Sans JP"),g(M,"text-anchor","start"),g(M,"xml:space","preserve"),g(I,"class","fill-current"),g(I,"stroke","none"),g(I,"x","0"),g(I,"y","220"),g(I,"id","svg_15"),g(I,"font-size","24"),g(I,"font-family","Noto Sans JP"),g(I,"text-anchor","start"),g(I,"xml:space","preserve"),g(Q,"class","fill-current"),g(Q,"stroke","none"),g(Q,"x","0"),g(Q,"y","280"),g(Q,"id","svg_16"),g(Q,"font-size","24"),g(Q,"font-family","Noto Sans JP"),g(Q,"text-anchor","start"),g(Q,"xml:space","preserve"),g(V,"stroke-width","5"),g(V,"class","stroke-current"),g(V,"x1","113.53031"),g(V,"y1","271.07148"),g(V,"x2","158.37456"),g(V,"y2","271.07148"),g(V,"id","svg_17"),g(F,"stroke-width","5"),g(F,"class","stroke-current"),g(F,"x1","113.53031"),g(F,"y1","211.07246"),g(F,"x2","158.37455"),g(F,"y2","211.07246"),g(F,"id","svg_18"),g(c,"id","svg_19"),g(e,"width","320"),g(e,"height","300"),g(e,"xmlns","http://www.w3.org/2000/svg")},m(ne,U){r(ne,e,U),ee(e,o),ee(o,s),ee(s,t),ee(o,$),ee($,i),ee($,n),ee(n,m),ee($,l),ee(l,f),ee($,L),ee(L,u),ee($,p),ee($,w),ee(o,c),ee(c,h),ee(c,M),ee(M,q),ee(c,I),ee(I,N),ee(c,Q),ee(Q,X),ee(c,V),ee(c,F)},p:O,i:O,o:O,d(ne){ne&&a(e)}}}class Ps extends Be{constructor(e){super(),Fe(this,e,null,qs,Ne,{})}}function Ms(x){let e,o="Introduction";return{c(){e=C("h1"),e.textContent=o},l(s){e=_(s,"H1",{"data-svelte-h":!0}),b(e)!=="svelte-v1pk48"&&(e.textContent=o)},m(s,t){r(s,e,t)},p:O,d(s){s&&a(e)}}}function Hs(x){let e,o='La <span data-fragment-index="1" class="fragment highlight-red">Programmation</span> Orientée Objet',s,t,$="La programmation, c'est manipuler des données...",i,n,m="<i>Comment structurer ces données et les traitements associés ?</i>",l,f,L=`On commence par poser la question fondamentale. Peu importe le langage, peu importe le projet,
			on manipule toujours des données. La vraie question c'est : comment on organise tout ça ?`;return{c(){e=C("h2"),e.innerHTML=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("p"),n.innerHTML=m,l=v(),f=C("aside"),f.textContent=L,this.h()},l(u){e=_(u,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-idwyvx"&&(e.innerHTML=o),s=d(u),t=_(u,"P",{"data-fragment-index":!0,class:!0,"data-svelte-h":!0}),b(t)!=="svelte-ccoak9"&&(t.textContent=$),i=d(u),n=_(u,"P",{"data-fragment-index":!0,class:!0,"data-svelte-h":!0}),b(n)!=="svelte-ja2tch"&&(n.innerHTML=m),l=d(u),f=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-16jpdmo"&&(f.textContent=L),this.h()},h(){g(t,"data-fragment-index","1"),g(t,"class","fragment"),g(n,"data-fragment-index","2"),g(n,"class","fragment"),g(f,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),r(u,n,p),r(u,l,p),r(u,f,p)},p:O,d(u){u&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f))}}}function js(x){let e,o="La POO en 3 mots",s,t,$='<div class="fragment flex flex-col items-center p-6 bg-accent-950 rounded-lg"><span class="text-6xl mb-4">📦</span> <span class="text-important font-bold">RANGER</span> <span class="text-xl mt-2 text-gray-400">Organiser le code</span></div> <div class="fragment flex flex-col items-center p-6 bg-accent-950 rounded-lg"><span class="text-6xl mb-4">🔒</span> <span class="text-important font-bold">PROTÉGER</span> <span class="text-xl mt-2 text-gray-400">Éviter les erreurs</span></div> <div class="fragment flex flex-col items-center p-6 bg-accent-950 rounded-lg"><span class="text-6xl mb-4">🌳</span> <span class="text-important font-bold">GÉNÉRALISER</span> <span class="text-xl mt-2 text-gray-400">Réutiliser le code</span></div>',i,n,m=`On va voir que la POO apporte 3 bénéfices majeurs, dans cet ordre précis. D'abord on range,
			ensuite on protège, et enfin on généralise. Ces 3 piliers sont la base de tout ce qu'on va
			voir dans ce module.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("div"),t.innerHTML=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-1nirx80"&&(e.textContent=o),s=d(l),t=_(l,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-19dln6f"&&(t.innerHTML=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-49jgnd"&&(n.textContent=m),this.h()},h(){g(t,"class","flex flex-row justify-around items-center text-3xl mt-10"),g(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function As(x){let e,o="📦 RANGER",s,t,$="Premier pilier de la POO",i,n,m="On commence par le premier pilier : ranger. C'est le plus intuitif.";return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-z32rqx"&&(e.textContent=o),s=d(l),t=_(l,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-kfijfp"&&(t.textContent=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1eorlzr"&&(n.textContent=m),this.h()},h(){g(e,"class","text-6xl"),g(t,"class","text-3xl text-gray-400"),g(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function Ts(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Ss(x){let e,o='Le problème du code "en vrac"',s,t,$,i,n=`Regardez ce code. On a des variables partout, mélangées. Rien ne dit que nomClient va avec
			ageClient et emailClient. Quand le code grossit, c'est le chaos. On ne sait plus quelle
			variable va avec quelle autre.`,m;return t=new ie({props:{$$slots:{default:[Ts]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment),$=v(),i=C("aside"),i.textContent=n,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1iow74n"&&(e.textContent=o),s=d(l),S(t.$$.fragment,l),$=d(l),i=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-vygygc"&&(i.textContent=n),this.h()},h(){g(i,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),T(t,l,f),r(l,$,f),r(l,i,f),m=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){m||(A(t.$$.fragment,l),m=!0)},o(l){j(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a($),a(i)),H(t,l)}}}function Es(x){let e=`
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
			clair, non ?`,m;return t=new ie({props:{lines:"1-5|7-11|13-16|18-20",$$slots:{default:[Es]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment),$=v(),i=C("aside"),i.textContent=n,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-qf6jcc"&&(e.textContent=o),s=d(l),S(t.$$.fragment,l),$=d(l),i=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-1k8tbir"&&(i.textContent=n),this.h()},h(){g(i,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),T(t,l,f),r(l,$,f),r(l,i,f),m=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){m||(A(t.$$.fragment,l),m=!0)},o(l){j(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a($),a(i)),H(t,l)}}}function Ds(x){let e,o,s="Programmation procédurale",t,$,i="Programmation orientée objet",n,m,l,f,L,u,p,w=`Visuellement, c'est ça la différence. À gauche, les données sont séparées des traitements. Les
			fonctions peuvent accéder à n'importe quelle donnée. À droite, chaque objet contient SES
			données ET SES traitements. C'est une vraie boîte autonome.`,c;return m=new ws({}),L=new Ps({}),{c(){e=C("div"),o=C("h3"),o.textContent=s,t=v(),$=C("h3"),$.textContent=i,n=v(),E(m.$$.fragment),l=v(),f=C("div"),E(L.$$.fragment),u=v(),p=C("aside"),p.textContent=w,this.h()},l(h){e=_(h,"DIV",{class:!0});var M=ue(e);o=_(M,"H3",{"data-svelte-h":!0}),b(o)!=="svelte-cax56s"&&(o.textContent=s),t=d(M),$=_(M,"H3",{"data-fragment-index":!0,class:!0,"data-svelte-h":!0}),b($)!=="svelte-1roygcu"&&($.textContent=i),n=d(M),S(m.$$.fragment,M),l=d(M),f=_(M,"DIV",{"data-fragment-index":!0,class:!0});var q=ue(f);S(L.$$.fragment,q),q.forEach(a),M.forEach(a),u=d(h),p=_(h,"ASIDE",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-cw6e6u"&&(p.textContent=w),this.h()},h(){g($,"data-fragment-index","1"),g($,"class","fragment"),g(f,"data-fragment-index","1"),g(f,"class","fragment"),g(e,"class","grid-cols-2 grid justify-items-center items-start"),g(p,"class","notes")},m(h,M){r(h,e,M),ee(e,o),ee(e,t),ee(e,$),ee(e,n),T(m,e,null),ee(e,l),ee(e,f),T(L,f,null),r(h,u,M),r(h,p,M),c=!0},p:O,i(h){c||(A(m.$$.fragment,h),A(L.$$.fragment,h),c=!0)},o(h){j(m.$$.fragment,h),j(L.$$.fragment,h),c=!1},d(h){h&&(a(e),a(u),a(p)),H(m),H(L)}}}function Vs(x){let e,o='<h3>Programmation procédurale</h3> <h3>Programmation orientée objet</h3> <ul><li>Les données et les traitements sont séparés</li> <li class="fragment">Les fonctions accèdent à <span class="text-red-400">tout</span></li> <li class="fragment">Difficile de savoir &quot;qui fait quoi&quot;</li></ul> <ul><li>Les données et les traitements sont regroupés dans un objet</li> <li class="fragment">Les méthodes n&#39;accèdent qu&#39;à <span class="text-green-400">leur objet</span></li> <li class="fragment">Chaque objet est responsable de lui-même</li></ul>',s,t,$="Premier intérêt : le code est mieux organisé",i,n,m=`En procédural, les fonctions peuvent accéder à tout. C'est pratique au début, mais ça devient
			vite le bazar. En POO, chaque objet est une entité autonome. Il gère ses propres données avec
			ses propres méthodes. C'est le premier bénéfice : on range, on organise.`;return{c(){e=C("div"),e.innerHTML=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"DIV",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-kmsvtl"&&(e.innerHTML=o),s=d(l),t=_(l,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-19jde0y"&&(t.textContent=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1ezzhp6"&&(n.textContent=m),this.h()},h(){g(e,"class","grid-cols-2 grid justify-items-center items-start"),g(t,"class","fragment font-bold text-accent-200 mt-8"),g(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function ks(x){let e,o="🔒 PROTÉGER",s,t,$="Deuxième pilier de la POO",i,n,m=`Maintenant qu'on a rangé, on va voir le deuxième pilier : protéger. C'est là que la POO
			devient vraiment puissante.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-nrad46"&&(e.textContent=o),s=d(l),t=_(l,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1n91bqq"&&(t.textContent=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-5opokd"&&(n.textContent=m),this.h()},h(){g(e,"class","text-6xl"),g(t,"class","text-3xl text-gray-400"),g(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function zs(x){let e=`
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
			le résultat est faux. C'est un bug silencieux, le pire type de bug.`,L;return n=new ie({props:{class:"java",$$slots:{default:[zs]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),E(n.$$.fragment),m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-2a5yxe"&&(e.textContent=o),s=d(u),t=_(u,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1sotxef"&&(t.textContent=$),i=d(u),S(n.$$.fragment,u),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1va15cw"&&(l.textContent=f),this.h()},h(){g(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),T(n,u,p),r(u,m,p),r(u,l,p),L=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),n.$set(w)},i(u){L||(A(n.$$.fragment,u),L=!0)},o(u){j(n.$$.fragment,u),L=!1},d(u){u&&(a(e),a(s),a(t),a(i),a(m),a(l)),H(n,u)}}}function Us(x){let e=`
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
			Vous passez des heures à débugger.`,L;return t=new ie({props:{class:"java",lines:"1-8|10-15",$$slots:{default:[Us]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment),$=v(),i=C("p"),i.textContent=n,m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-12am7ex"&&(e.textContent=o),s=d(u),S(t.$$.fragment,u),$=d(u),i=_(u,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-1u4dzf0"&&(i.textContent=n),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1oru7wz"&&(l.textContent=f),this.h()},h(){g(i,"class","fragment text-red-400 font-bold"),g(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),T(t,u,p),r(u,$,p),r(u,i,p),r(u,m,p),r(u,l,p),L=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),t.$set(w)},i(u){L||(A(t.$$.fragment,u),L=!0)},o(u){j(t.$$.fragment,u),L=!1},d(u){u&&(a(e),a(s),a($),a(i),a(m),a(l)),H(t,u)}}}function Js(x){let e=`
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
			utilise SES données. Impossible de mélanger les données de Jean et Marie.`,m;return t=new ie({props:{class:"java",lines:"1-11|13-17",$$slots:{default:[Js]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment),$=v(),i=C("aside"),i.textContent=n,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1l4bme7"&&(e.textContent=o),s=d(l),S(t.$$.fragment,l),$=d(l),i=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-ylwt9m"&&(i.textContent=n),this.h()},h(){g(i,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),T(t,l,f),r(l,$,f),r(l,i,f),m=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){m||(A(t.$$.fragment,l),m=!0)},o(l){j(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a($),a(i)),H(t,l)}}}function Bs(x){let e=`
//
direBonjour(nom1, age1);  // OK
direBonjour(nom1, age2);  // BUG !
// Rien ne m'empêche de mélanger
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Fs(x){let e=`
//
jean.direBonjour();
marie.direBonjour();
// Chacun utilise SES données
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Gs(x){let e,o="Comparaison directe",s,t,$,i,n="❌ Procédural",m,l,f,L,u,p="✅ POO",w,c,h,M,q="Les méthodes ne manipulent que les données de LEUR objet",I,N,Q=`C'est ça la vraie puissance. En procédural, vous pouvez mélanger les données de personnes
			différentes. En POO, chaque méthode n'accède qu'aux données de son objet. Jean utilise les
			données de Jean, Marie utilise les données de Marie. Impossible de se tromper.`,X;return l=new ie({props:{class:"java",$$slots:{default:[Bs]},$$scope:{ctx:x}}}),c=new ie({props:{class:"java",$$slots:{default:[Fs]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("div"),$=C("div"),i=C("h4"),i.textContent=n,m=v(),E(l.$$.fragment),f=v(),L=C("div"),u=C("h4"),u.textContent=p,w=v(),E(c.$$.fragment),h=v(),M=C("p"),M.textContent=q,I=v(),N=C("aside"),N.textContent=Q,this.h()},l(V){e=_(V,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-r1ae78"&&(e.textContent=o),s=d(V),t=_(V,"DIV",{class:!0});var F=ue(t);$=_(F,"DIV",{});var ne=ue($);i=_(ne,"H4",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-14hrfbc"&&(i.textContent=n),m=d(ne),S(l.$$.fragment,ne),ne.forEach(a),f=d(F),L=_(F,"DIV",{});var U=ue(L);u=_(U,"H4",{class:!0,"data-svelte-h":!0}),b(u)!=="svelte-o82dwg"&&(u.textContent=p),w=d(U),S(c.$$.fragment,U),U.forEach(a),F.forEach(a),h=d(V),M=_(V,"P",{class:!0,"data-svelte-h":!0}),b(M)!=="svelte-2a01z8"&&(M.textContent=q),I=d(V),N=_(V,"ASIDE",{class:!0,"data-svelte-h":!0}),b(N)!=="svelte-1wg97bw"&&(N.textContent=Q),this.h()},h(){g(i,"class","text-red-400"),g(u,"class","text-green-400"),g(t,"class","grid-cols-2 grid justify-items-center items-start gap-4"),g(M,"class","fragment text-accent-200 font-bold text-3xl mt-8"),g(N,"class","notes")},m(V,F){r(V,e,F),r(V,s,F),r(V,t,F),ee(t,$),ee($,i),ee($,m),T(l,$,null),ee(t,f),ee(t,L),ee(L,u),ee(L,w),T(c,L,null),r(V,h,F),r(V,M,F),r(V,I,F),r(V,N,F),X=!0},p(V,F){const ne={};F&1&&(ne.$$scope={dirty:F,ctx:V}),l.$set(ne);const U={};F&1&&(U.$$scope={dirty:F,ctx:V}),c.$set(U)},i(V){X||(A(l.$$.fragment,V),A(c.$$.fragment,V),X=!0)},o(V){j(l.$$.fragment,V),j(c.$$.fragment,V),X=!1},d(V){V&&(a(e),a(s),a(t),a(h),a(M),a(I),a(N)),H(l),H(c)}}}function Qs(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Xs(x){let e,o="Exemple complet : avant / après",s,t,$,i="Procédural",n,m,l="Orienté Objet",f,L,u,p,w,c,h=`À gauche, on pourrait se tromper et appeler direBonjour avec nom et age2. Bug silencieux. À
			droite, chaque Personne est un objet autonome. Quand on appelle p1.direBonjour(), c'est
			TOUJOURS les données de p1 qui sont utilisées. Impossible de mélanger.`,M;return L=new ie({props:{class:"java",$$slots:{default:[Qs]},$$scope:{ctx:x}}}),p=new ie({props:{class:"java fragment","data-fragment-index":"1",lines:"1-9|10-13",$$slots:{default:[Ks]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("div"),$=C("h4"),$.textContent=i,n=v(),m=C("h4"),m.textContent=l,f=v(),E(L.$$.fragment),u=v(),E(p.$$.fragment),w=v(),c=C("aside"),c.textContent=h,this.h()},l(q){e=_(q,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-11nvxg1"&&(e.textContent=o),s=d(q),t=_(q,"DIV",{class:!0});var I=ue(t);$=_(I,"H4",{"data-svelte-h":!0}),b($)!=="svelte-1bk3u6h"&&($.textContent=i),n=d(I),m=_(I,"H4",{class:!0,"data-fragment-index":!0,"data-svelte-h":!0}),b(m)!=="svelte-1rzdg3v"&&(m.textContent=l),f=d(I),S(L.$$.fragment,I),u=d(I),S(p.$$.fragment,I),I.forEach(a),w=d(q),c=_(q,"ASIDE",{class:!0,"data-svelte-h":!0}),b(c)!=="svelte-1uzbf9k"&&(c.textContent=h),this.h()},h(){g(m,"class","fragment"),g(m,"data-fragment-index","1"),g(t,"class","grid-cols-2 grid justify-items-center items-start"),g(c,"class","notes")},m(q,I){r(q,e,I),r(q,s,I),r(q,t,I),ee(t,$),ee(t,n),ee(t,m),ee(t,f),T(L,t,null),ee(t,u),T(p,t,null),r(q,w,I),r(q,c,I),M=!0},p(q,I){const N={};I&1&&(N.$$scope={dirty:I,ctx:q}),L.$set(N);const Q={};I&1&&(Q.$$scope={dirty:I,ctx:q}),p.$set(Q)},i(q){M||(A(L.$$.fragment,q),A(p.$$.fragment,q),M=!0)},o(q){j(L.$$.fragment,q),j(p.$$.fragment,q),M=!1},d(q){q&&(a(e),a(s),a(t),a(w),a(c)),H(L),H(p)}}}function Ys(x){let e,o="Récapitulatif : Ranger + Protéger",s,t,$='<div class="p-6 bg-accent-950 rounded-lg"><h4 class="text-important">📦 RANGER</h4> <ul class="text-2xl"><li>Données regroupées par entité</li> <li>Code plus lisible</li> <li>Plus facile à maintenir</li></ul></div> <div class="p-6 bg-accent-950 rounded-lg"><h4 class="text-important">🔒 PROTÉGER</h4> <ul class="text-2xl"><li>Méthodes liées à leurs données</li> <li>Impossible de se tromper de paramètre</li> <li>Le compilateur vous aide</li></ul></div>',i,n,m="Mais ce n'est pas tout...",l,f,L=`On a vu les deux premiers piliers. On range le code, on le protège des erreurs. Mais la POO
			offre un troisième bénéfice, peut-être le plus puissant : la généralisation.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("div"),t.innerHTML=$,i=v(),n=C("p"),n.textContent=m,l=v(),f=C("aside"),f.textContent=L,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-wok7w1"&&(e.textContent=o),s=d(u),t=_(u,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1hsd1m7"&&(t.innerHTML=$),i=d(u),n=_(u,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-3ya9un"&&(n.textContent=m),l=d(u),f=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-heeq8"&&(f.textContent=L),this.h()},h(){g(t,"class","flex flex-row justify-around items-start mt-8"),g(n,"class","fragment text-3xl mt-8"),g(f,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),r(u,n,p),r(u,l,p),r(u,f,p)},p:O,d(u){u&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f))}}}function Ws(x){let e,o="🌳 GÉNÉRALISER",s,t,$="Troisième pilier de la POO",i,n,m=`Le troisième pilier, c'est la généralisation. C'est là qu'on va parler d'héritage,
			d'abstraction. C'est ce qui rend la POO vraiment unique.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-ptnj3f"&&(e.textContent=o),s=d(l),t=_(l,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-188gx3t"&&(t.textContent=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-m0kwia"&&(n.textContent=m),this.h()},h(){g(e,"class","text-6xl"),g(t,"class","text-3xl text-gray-400"),g(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function Zs(x){let e,o="La programmation orientée objet",s,t,$="Qu'est-ce que c'est ?",i,n,m='La programmation orientée objet est un <span class="text-important">paradigme de programmation</span>, c&#39;est-à-dire une manière de programmer, qui repose sur la notion d&#39;objets.',l,f,L="Un objet est une entité qui regroupe des données et des traitements qui lui sont associés.",u,p,w='Un objet est censé représenter <span class="text-important">une entité du monde réel</span>.',c,h,M="Il n'est pas obligatoire de programmer en POO !",q,I,N=`La POO c'est un paradigme, une façon de penser le code. L'idée c'est de modéliser le monde
			réel : des personnes, des voitures, des produits... Ce n'est pas obligatoire, mais c'est très
			puissant quand on sait s'en servir.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("h3"),t.textContent=$,i=v(),n=C("p"),n.innerHTML=m,l=v(),f=C("p"),f.textContent=L,u=v(),p=C("p"),p.innerHTML=w,c=v(),h=C("p"),h.textContent=M,q=v(),I=C("aside"),I.textContent=N,this.h()},l(Q){e=_(Q,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-18a0qr8"&&(e.textContent=o),s=d(Q),t=_(Q,"H3",{"data-svelte-h":!0}),b(t)!=="svelte-a8zqi8"&&(t.textContent=$),i=d(Q),n=_(Q,"P",{"data-svelte-h":!0}),b(n)!=="svelte-3ymvqm"&&(n.innerHTML=m),l=d(Q),f=_(Q,"P",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-18xem7k"&&(f.textContent=L),u=d(Q),p=_(Q,"P",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-10wio1h"&&(p.innerHTML=w),c=d(Q),h=_(Q,"P",{class:!0,"data-svelte-h":!0}),b(h)!=="svelte-64ska2"&&(h.textContent=M),q=d(Q),I=_(Q,"ASIDE",{class:!0,"data-svelte-h":!0}),b(I)!=="svelte-zlkz96"&&(I.textContent=N),this.h()},h(){g(f,"class","fragment"),g(p,"class","fragment"),g(h,"class","fragment text-accent-200 font-bold"),g(I,"class","notes")},m(Q,X){r(Q,e,X),r(Q,s,X),r(Q,t,X),r(Q,i,X),r(Q,n,X),r(Q,l,X),r(Q,f,X),r(Q,u,X),r(Q,p,X),r(Q,c,X),r(Q,h,X),r(Q,q,X),r(Q,I,X)},p:O,d(Q){Q&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f),a(u),a(p),a(c),a(h),a(q),a(I))}}}function ys(x){let e,o="Représenter le monde réel",s,t,$="Un objet est censé représenter une entité du monde réel.",i,n,m=`Par exemple, <span data-fragment-index="3" class="fragment highlight-red">un chien, un chat</span>,
			<span data-fragment-index="3" class="fragment highlight-green">une moto, une voiture</span>,
			<span data-fragment-index="3" class="fragment highlight-blue">un ennemi, un PNJ</span>`,l,f,L=`Ou plus <span class="underline font-bold">génériquement</span>, un
			<span class="text-red-500">animal</span>, un <span class="text-green-500">véhicule</span>, un
			<span class="text-blue-500">personnage</span>`,u,p,w=`On modélise le monde réel. Un chien, un chat, ce sont des objets. Mais on peut aller plus loin
			: un chien et un chat, c'est un animal. Une moto et une voiture, c'est un véhicule. C'est ça
			la généralisation : trouver le concept commun.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("p"),n.innerHTML=m,l=v(),f=C("p"),f.innerHTML=L,u=v(),p=C("aside"),p.textContent=w,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1nsqnl5"&&(e.textContent=o),s=d(c),t=_(c,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1te9lxn"&&(t.textContent=$),i=d(c),n=_(c,"P",{class:!0,"data-fragment-index":!0,"data-svelte-h":!0}),b(n)!=="svelte-12p87au"&&(n.innerHTML=m),l=d(c),f=_(c,"P",{class:!0,"data-fragment-index":!0,"data-svelte-h":!0}),b(f)!=="svelte-68say8"&&(f.innerHTML=L),u=d(c),p=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-1ad4dj1"&&(p.textContent=w),this.h()},h(){g(t,"class","font-bold text-accent-200"),g(n,"class","fragment"),g(n,"data-fragment-index","2"),g(f,"class","fragment"),g(f,"data-fragment-index","3"),g(p,"class","notes")},m(c,h){r(c,e,h),r(c,s,h),r(c,t,h),r(c,i,h),r(c,n,h),r(c,l,h),r(c,f,h),r(c,u,h),r(c,p,h)},p:O,d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f),a(u),a(p))}}}function el(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function sl(x){let e,o="Pourquoi généraliser ?",s,t,$="Imaginons que vous codez un jeu vidéo...",i,n,m,l,f="❌ Sans généralisation",L,u,p,w,c,h="✅ Avec généralisation",M,q,I,N,Q=`Sans généralisation, on duplique le code. Chaque personnage a sa méthode seDeplacer, même si
			c'est la même. Avec la généralisation, on met le code commun dans une classe parente. Si on
			change seDeplacer, on le change une seule fois, et tous les personnages en bénéficient.`,X;return u=new ie({props:{class:"java",$$slots:{default:[el]},$$scope:{ctx:x}}}),q=new ie({props:{class:"java",$$slots:{default:[tl]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("div"),m=C("div"),l=C("h4"),l.textContent=f,L=v(),E(u.$$.fragment),p=v(),w=C("div"),c=C("h4"),c.textContent=h,M=v(),E(q.$$.fragment),I=v(),N=C("aside"),N.textContent=Q,this.h()},l(V){e=_(V,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1tyfy6u"&&(e.textContent=o),s=d(V),t=_(V,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1piptso"&&(t.textContent=$),i=d(V),n=_(V,"DIV",{class:!0});var F=ue(n);m=_(F,"DIV",{class:!0});var ne=ue(m);l=_(ne,"H4",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1dno5ot"&&(l.textContent=f),L=d(ne),S(u.$$.fragment,ne),ne.forEach(a),p=d(F),w=_(F,"DIV",{class:!0});var U=ue(w);c=_(U,"H4",{class:!0,"data-svelte-h":!0}),b(c)!=="svelte-11tuyq2"&&(c.textContent=h),M=d(U),S(q.$$.fragment,U),U.forEach(a),F.forEach(a),I=d(V),N=_(V,"ASIDE",{class:!0,"data-svelte-h":!0}),b(N)!=="svelte-qs469b"&&(N.textContent=Q),this.h()},h(){g(l,"class","text-red-400"),g(m,"class","fragment"),g(c,"class","text-green-400"),g(w,"class","fragment"),g(n,"class","grid-cols-2 grid gap-8 mt-8"),g(N,"class","notes")},m(V,F){r(V,e,F),r(V,s,F),r(V,t,F),r(V,i,F),r(V,n,F),ee(n,m),ee(m,l),ee(m,L),T(u,m,null),ee(n,p),ee(n,w),ee(w,c),ee(w,M),T(q,w,null),r(V,I,F),r(V,N,F),X=!0},p(V,F){const ne={};F&1&&(ne.$$scope={dirty:F,ctx:V}),u.$set(ne);const U={};F&1&&(U.$$scope={dirty:F,ctx:V}),q.$set(U)},i(V){X||(A(u.$$.fragment,V),A(q.$$.fragment,V),X=!0)},o(V){j(u.$$.fragment,V),j(q.$$.fragment,V),X=!1},d(V){V&&(a(e),a(s),a(t),a(i),a(n),a(I),a(N)),H(u),H(q)}}}function ll(x){let e,o="La généricité",s,t,$="Généralisez vos concepts !",i,n,m='<ul><li><a href="#">Animal</a> <ul><li><a>Chien</a></li> <li><a>Chat</a></li></ul></li> <li><a href="#">Véhicule</a> <ul><li><a>Voiture</a></li> <li><a>Moto</a></li> <li class="fragment" data-fragment-index="1"><a>Bateau</a></li></ul></li> <li><a href="#">Personnage</a> <ul><li><a>Ennemi</a> <ul class="fragment" data-fragment-index="1"><li><a>Monstre</a></li> <li><a>Boss</a></li></ul></li> <li><a>PNJ</a></li></ul></li></ul>',l,f,L=`On peut représenter ça sous forme d'arbre. Animal se décline en Chien et Chat. Véhicule se
			décline en Voiture, Moto, et pourquoi pas Bateau demain. Personnage se décline en Ennemi et
			PNJ, et Ennemi peut lui-même se décliner en Monstre et Boss. C'est ce qu'on appelle l'héritage
			: les enfants héritent des caractéristiques du parent.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("div"),n.innerHTML=m,l=v(),f=C("aside"),f.textContent=L,this.h()},l(u){e=_(u,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-1t0g1h3"&&(e.textContent=o),s=d(u),t=_(u,"P",{"data-svelte-h":!0}),b(t)!=="svelte-ptm47t"&&(t.textContent=$),i=d(u),n=_(u,"DIV",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-18iior2"&&(n.innerHTML=m),l=d(u),f=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-1azk6ad"&&(f.textContent=L),this.h()},h(){g(e,"class","uppercase"),g(n,"class","tree scale-150"),g(f,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),r(u,n,p),r(u,l,p),r(u,f,p)},p:O,d(u){u&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f))}}}function nl(x){let e,o="L'héritage : le cœur de la POO",s,t,$="Quand <code>Voiture</code> hérite de <code>Véhicule</code> :",i,n,m='<li class="fragment">✅ Elle récupère automatiquement toutes les données de Véhicule</li> <li class="fragment">✅ Elle récupère automatiquement toutes les méthodes de Véhicule</li> <li class="fragment">✅ Elle peut ajouter ses propres données (nbPortes, nbPlaces...)</li> <li class="fragment">✅ Elle peut modifier le comportement hérité si besoin</li>',l,f,L="Écrivez le code une fois, réutilisez-le partout !",u,p,w=`L'héritage c'est ça : on écrit le code une fois dans le parent, et tous les enfants en
			bénéficient. Si on ajoute un attribut "couleur" à Véhicule, Voiture et Moto l'ont
			automatiquement. C'est un gain de temps énorme, et surtout, moins de bugs car moins de code
			dupliqué.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("ul"),n.innerHTML=m,l=v(),f=C("p"),f.textContent=L,u=v(),p=C("aside"),p.textContent=w,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1lb9yfa"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1bwq09e"&&(t.innerHTML=$),i=d(c),n=_(c,"UL",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-xxefp4"&&(n.innerHTML=m),l=d(c),f=_(c,"P",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-74izuf"&&(f.textContent=L),u=d(c),p=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-yxss4w"&&(p.textContent=w),this.h()},h(){g(n,"class","text-2xl"),g(f,"class","fragment text-accent-200 font-bold mt-8"),g(p,"class","notes")},m(c,h){r(c,e,h),r(c,s,h),r(c,t,h),r(c,i,h),r(c,n,h),r(c,l,h),r(c,f,h),r(c,u,h),r(c,p,h)},p:O,d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f),a(u),a(p))}}}function il(x){let e,o="L'abstraction : penser au futur",s,t,$='En POO, généraliser s&#39;appelle <span class="text-important">abstraire, faire une abstraction</span>',i,n,m="C'est anticiper les évolutions de votre code.",l,f,L=`Abstraire, c'est trouver le concept commun entre plusieurs choses. Mais c'est aussi penser au
			futur : qu'est-ce que mon client va me demander demain ?`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("p"),n.textContent=m,l=v(),f=C("aside"),f.textContent=L,this.h()},l(u){e=_(u,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-1rpalwv"&&(e.textContent=o),s=d(u),t=_(u,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1n8l9pz"&&(t.innerHTML=$),i=d(u),n=_(u,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-44luki"&&(n.textContent=m),l=d(u),f=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-1ux1lwj"&&(f.textContent=L),this.h()},h(){g(e,"class","uppercase"),g(n,"class","fragment"),g(f,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),r(u,n,p),r(u,l,p),r(u,f,p)},p:O,d(u){u&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f))}}}function al(x){let e,o="Exemple concret : location de voiture",s,t,$=`<span class="text-important">Situation :</span> On vous demande de coder un système de
			location de voiture.<br/><br/> <span class="fragment">📅 <b>6 mois plus tard :</b> &quot;On aimerait aussi proposer des motos !&quot;</span><br/> <span class="fragment">📅 <b>1 an plus tard :</b> &quot;Et des vélos électriques !&quot;</span><br/> <span class="fragment">📅 <b>2 ans plus tard :</b> &quot;Et des accessoires : sièges auto, porte-vélos, chaînes neige...&quot;</span>`,i,n,m='Si vous aviez anticipé, vous auriez codé "Véhicule" dès le départ !',l,f,L=`C'est un scénario classique. On vous demande de gérer des voitures, mais évidemment, ça va
			évoluer. Motos, vélos, accessoires... Si vous codez "Voiture" partout, vous allez devoir tout
			refaire. Si vous codez "Véhicule" dès le départ, ajouter une Moto c'est 5 minutes.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("p"),n.textContent=m,l=v(),f=C("aside"),f.textContent=L,this.h()},l(u){e=_(u,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-1fhmnzb"&&(e.textContent=o),s=d(u),t=_(u,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-18xi090"&&(t.innerHTML=$),i=d(u),n=_(u,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-m4py0l"&&(n.textContent=m),l=d(u),f=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-s0c6jo"&&(f.textContent=L),this.h()},h(){g(e,"class","uppercase"),g(t,"class","text-start text-[28px] p-4 bg-accent-950 font-serif rounded-lg"),g(n,"class","fragment text-accent-200 font-bold mt-6"),g(f,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),r(u,n,p),r(u,l,p),r(u,f,p)},p:O,d(u){u&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f))}}}function rl(x){let e=`
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
			cauchemar.`,L;return t=new ie({props:{class:"java",$$slots:{default:[rl]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment),$=v(),i=C("p"),i.textContent=n,m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-1h7w9x1"&&(e.textContent=o),s=d(u),S(t.$$.fragment,u),$=d(u),i=_(u,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-1psvyp1"&&(i.textContent=n),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1drwx1z"&&(l.textContent=f),this.h()},h(){g(e,"class","uppercase"),g(i,"class","fragment text-red-400 font-bold"),g(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),T(t,u,p),r(u,$,p),r(u,i,p),r(u,m,p),r(u,l,p),L=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),t.$set(w)},i(u){L||(A(t.$$.fragment,u),L=!0)},o(u){j(t.$$.fragment,u),L=!1},d(u){u&&(a(e),a(s),a($),a(i),a(m),a(l)),H(t,u)}}}function ol(x){let e=`
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
			`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function cl(x){let e,o="Étape 1 : Créer la hiérarchie Véhicule",s,t,$="On commence par regrouper Voiture et Moto sous Véhicule",i,n,m,l,f="<b>Voiture</b> est un <b>Véhicule</b> → elle hérite de prixJour, disponible, louer()...",L,u,p=`Première étape : on crée Véhicule qui contient tout ce qui est commun. Voiture et Moto
			héritent de Véhicule. Donc Voiture EST UN Véhicule. Elle a automatiquement prixJour,
			disponible, km, immatriculation. Elle a aussi les méthodes louer() et retourner() sans les
			recoder.`,w;return n=new Ie({props:{$$slots:{default:[ol]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),E(n.$$.fragment),m=v(),l=C("p"),l.innerHTML=f,L=v(),u=C("aside"),u.textContent=p,this.h()},l(c){e=_(c,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-1uw0g5w"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1ko5xlx"&&(t.textContent=$),i=d(c),S(n.$$.fragment,c),m=d(c),l=_(c,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1hq4dgl"&&(l.innerHTML=f),L=d(c),u=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(u)!=="svelte-1p5u5s8"&&(u.textContent=p),this.h()},h(){g(e,"class","uppercase"),g(l,"class","fragment text-accent-200"),g(u,"class","notes")},m(c,h){r(c,e,h),r(c,s,h),r(c,t,h),r(c,i,h),T(n,c,h),r(c,m,h),r(c,l,h),r(c,L,h),r(c,u,h),w=!0},p(c,h){const M={};h&1&&(M.$$scope={dirty:h,ctx:c}),n.$set(M)},i(c){w||(A(n.$$.fragment,c),w=!0)},o(c){j(n.$$.fragment,c),w=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(l),a(L),a(u)),H(n,c)}}}function fl(x){let e=`
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
			`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function pl(x){let e,o="Étape 2 : Ajouter les Accessoires",s,t,$="Les accessoires ont aussi un prix et une disponibilité...",i,n,m,l,f,L,u,p="⚠️ prixJour et disponible sont dupliqués dans Véhicule ET Accessoire !",w,c,h=`On ajoute les accessoires. SiègeAuto et PorteVelo héritent de Accessoire. Mais attendez...
			prixJour et disponible sont dans Véhicule ET dans Accessoire. C'est de la duplication ! On
			peut faire mieux.`,M;return m=new Ie({props:{$$slots:{default:[fl]},$$scope:{ctx:x}}}),f=new Ie({props:{$$slots:{default:[$l]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("div"),E(m.$$.fragment),l=v(),E(f.$$.fragment),L=v(),u=C("p"),u.textContent=p,w=v(),c=C("aside"),c.textContent=h,this.h()},l(q){e=_(q,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-dpgmf6"&&(e.textContent=o),s=d(q),t=_(q,"P",{"data-svelte-h":!0}),b(t)!=="svelte-447yeq"&&(t.textContent=$),i=d(q),n=_(q,"DIV",{class:!0});var I=ue(n);S(m.$$.fragment,I),l=d(I),S(f.$$.fragment,I),I.forEach(a),L=d(q),u=_(q,"P",{class:!0,"data-svelte-h":!0}),b(u)!=="svelte-138h9qb"&&(u.textContent=p),w=d(q),c=_(q,"ASIDE",{class:!0,"data-svelte-h":!0}),b(c)!=="svelte-6rnzlf"&&(c.textContent=h),this.h()},h(){g(e,"class","uppercase"),g(n,"class","flex flex-row justify-center items-start gap-8"),g(u,"class","fragment text-red-400 font-bold mt-4"),g(c,"class","notes")},m(q,I){r(q,e,I),r(q,s,I),r(q,t,I),r(q,i,I),r(q,n,I),T(m,n,null),ee(n,l),T(f,n,null),r(q,L,I),r(q,u,I),r(q,w,I),r(q,c,I),M=!0},p(q,I){const N={};I&1&&(N.$$scope={dirty:I,ctx:q}),m.$set(N);const Q={};I&1&&(Q.$$scope={dirty:I,ctx:q}),f.$set(Q)},i(q){M||(A(m.$$.fragment,q),A(f.$$.fragment,q),M=!0)},o(q){j(m.$$.fragment,q),j(f.$$.fragment,q),M=!1},d(q){q&&(a(e),a(s),a(t),a(i),a(n),a(L),a(u),a(w),a(c)),H(m),H(f)}}}function ml(x){let e=`
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
			Véhicule qui hérite de Louable : Voiture a TOUT !`,L;return n=new Ie({props:{$$slots:{default:[ml]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),E(n.$$.fragment),m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-14ipspf"&&(e.textContent=o),s=d(u),t=_(u,"P",{"data-svelte-h":!0}),b(t)!=="svelte-qurtdv"&&(t.innerHTML=$),i=d(u),S(n.$$.fragment,u),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-hsu0uh"&&(l.textContent=f),this.h()},h(){g(e,"class","uppercase"),g(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),T(n,u,p),r(u,m,p),r(u,l,p),L=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),n.$set(w)},i(u){L||(A(n.$$.fragment,u),L=!0)},o(u){j(n.$$.fragment,u),L=!1},d(u){u&&(a(e),a(s),a(t),a(i),a(m),a(l)),H(n,u)}}}function vl(x){let e,o="Visualisons la chaîne d'héritage",s,t,$="Une <b>Voiture</b> c&#39;est quoi maintenant ?",i,n,m=`<div class="fragment p-4 bg-green-950 rounded-lg mb-2"><b>Voiture</b> hérite de <b>Véhicule</b></div> <div class="fragment text-4xl">↓</div> <div class="fragment p-4 bg-blue-950 rounded-lg mb-2"><b>Véhicule</b> hérite de <b>Louable</b></div> <div class="fragment text-4xl">↓</div> <div class="fragment p-4 bg-accent-950 rounded-lg">Donc <b>Voiture</b> a : prixJour, disponible, louer(), retourner(), km, immatriculation, nbPortes,
				nbPlaces</div>`,l,f,L="On n'a codé louer() qu'une seule fois, dans Louable !",u,p,w=`Suivons la chaîne. Voiture hérite de Véhicule. Véhicule hérite de Louable. Donc Voiture a tout
			: les attributs de Louable, plus ceux de Véhicule, plus les siens. Et surtout, la méthode
			louer() n'est codée qu'une seule fois, dans Louable. Voiture, Moto, SiègeAuto, PorteVelo...
			tous peuvent être loués avec le même code !`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("div"),n.innerHTML=m,l=v(),f=C("p"),f.textContent=L,u=v(),p=C("aside"),p.textContent=w,this.h()},l(c){e=_(c,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-13fx6rx"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1pgak5l"&&(t.innerHTML=$),i=d(c),n=_(c,"DIV",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-xx6qv0"&&(n.innerHTML=m),l=d(c),f=_(c,"P",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-mgjp0b"&&(f.textContent=L),u=d(c),p=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-b8vxpx"&&(p.textContent=w),this.h()},h(){g(e,"class","uppercase"),g(n,"class","flex flex-col items-center mt-8 text-2xl"),g(f,"class","fragment text-accent-200 font-bold mt-6"),g(p,"class","notes")},m(c,h){r(c,e,h),r(c,s,h),r(c,t,h),r(c,i,h),r(c,n,h),r(c,l,h),r(c,f,h),r(c,u,h),r(c,p,h)},p:O,d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f),a(u),a(p))}}}function xl(x){let e=`
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
			la POO : écrire moins, faire plus.`,L;return t=new ie({props:{class:"java",$$slots:{default:[xl]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment),$=v(),i=C("p"),i.innerHTML=n,m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-1bcwfrg"&&(e.textContent=o),s=d(u),S(t.$$.fragment,u),$=d(u),i=_(u,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-fazfoj"&&(i.innerHTML=n),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-enkna"&&(l.textContent=f),this.h()},h(){g(e,"class","uppercase"),g(i,"class","fragment text-green-400 font-bold"),g(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),T(t,u,p),r(u,$,p),r(u,i,p),r(u,m,p),r(u,l,p),L=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),t.$set(w)},i(u){L||(A(t.$$.fragment,u),L=!0)},o(u){j(t.$$.fragment,u),L=!1},d(u){u&&(a(e),a(s),a($),a(i),a(m),a(l)),H(t,u)}}}function Cl(x){let e,o="Le refactoring",s,t,$='L&#39;opération que l&#39;on vient de voir s&#39;appelle un <span class="text-important">refactoring</span>',i,n,m="C'est réorganiser le code sans changer son comportement.",l,f,L=`Si vous l&#39;aviez fait dès le départ, vous auriez gagné plus de temps que si vous devez le faire
			plus tard, c&#39;est une <u>certitude</u> !`,u,p,w=`Le refactoring, c'est améliorer la structure du code sans changer ce qu'il fait. C'est
			toujours plus facile de bien faire dès le début que de réparer après. Un code bien conçu,
			c'est des heures de debug en moins.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("p"),n.textContent=m,l=v(),f=C("p"),f.innerHTML=L,u=v(),p=C("aside"),p.textContent=w,this.h()},l(c){e=_(c,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-t8lx1u"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-u769cg"&&(t.innerHTML=$),i=d(c),n=_(c,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1nmzwcc"&&(n.textContent=m),l=d(c),f=_(c,"P",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-b3fier"&&(f.innerHTML=L),u=d(c),p=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-v3296a"&&(p.textContent=w),this.h()},h(){g(e,"class","uppercase"),g(n,"class","fragment"),g(f,"class","fragment"),g(p,"class","notes")},m(c,h){r(c,e,h),r(c,s,h),r(c,t,h),r(c,i,h),r(c,n,h),r(c,l,h),r(c,f,h),r(c,u,h),r(c,p,h)},p:O,d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f),a(u),a(p))}}}function hl(x){let e,o="BUILD vs RUN",s,t,$="Le temps d'implémentation (BUILD) augmente si vous faites beaucoup de POO",i,n,m="...mais la maintenance (RUN) coûte moins cher !",l,f,L='<div class="p-4 bg-red-950 rounded-lg"><h4 class="text-red-400">❌ Code vite fait</h4> <ul class="text-xl"><li>Rapide à écrire</li> <li>Difficile à maintenir</li> <li>Bugs fréquents</li> <li>Évolutions coûteuses</li></ul></div> <div class="p-4 bg-green-950 rounded-lg"><h4 class="text-green-400">✅ Code bien conçu</h4> <ul class="text-xl"><li>Plus long à écrire</li> <li>Facile à maintenir</li> <li>Moins de bugs</li> <li>Évolutions simples</li></ul></div>',u,p,w=`En entreprise, on parle de BUILD (le développement initial) et de RUN (la maintenance). Un
			code bien conçu coûte plus cher au BUILD mais beaucoup moins au RUN. Et le RUN, c'est souvent
			80% du coût total d'un projet !`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("p"),n.textContent=m,l=v(),f=C("div"),f.innerHTML=L,u=v(),p=C("aside"),p.textContent=w,this.h()},l(c){e=_(c,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-bv5mk1"&&(e.textContent=o),s=d(c),t=_(c,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-10nhqsg"&&(t.textContent=$),i=d(c),n=_(c,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-ywkeo"&&(n.textContent=m),l=d(c),f=_(c,"DIV",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-4svqpn"&&(f.innerHTML=L),u=d(c),p=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-wpatcb"&&(p.textContent=w),this.h()},h(){g(e,"class","uppercase"),g(t,"class","text-important"),g(n,"class","fragment"),g(f,"class","fragment grid grid-cols-2 gap-8 mt-8"),g(p,"class","notes")},m(c,h){r(c,e,h),r(c,s,h),r(c,t,h),r(c,i,h),r(c,n,h),r(c,l,h),r(c,f,h),r(c,u,h),r(c,p,h)},p:O,d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f),a(u),a(p))}}}function gl(x){let e,o="L'équilibre à trouver",s,t,$="Un <i>bon</i> ingénieur logiciel sait jusqu&#39;à quel niveau il convient d&#39;abstraire",i,n,m='<li class="fragment">❌ <b>Pas assez d&#39;abstraction :</b> vous devez tout casser pour ajouter une fonctionnalité</li> <li class="fragment">❌ <b>Trop d&#39;abstraction :</b> votre client paie pour du code qu&#39;il n&#39;utilisera jamais</li>',l,f,L="En entreprise, tout est question d'équilibre et vient avec l'expérience.",u,p,w=`C'est un équilibre à trouver. Pas assez d'abstraction, et chaque évolution est un cauchemar.
			Trop d'abstraction, et vous passez des semaines à coder des trucs inutiles. Ça vient avec
			l'expérience, avec les projets, avec les erreurs qu'on fait.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("ul"),n.innerHTML=m,l=v(),f=C("p"),f.textContent=L,u=v(),p=C("aside"),p.textContent=w,this.h()},l(c){e=_(c,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-1082o8n"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1yhe1kd"&&(t.innerHTML=$),i=d(c),n=_(c,"UL",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1veku0x"&&(n.innerHTML=m),l=d(c),f=_(c,"P",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-b8ucny"&&(f.textContent=L),u=d(c),p=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-11bqu54"&&(p.textContent=w),this.h()},h(){g(e,"class","uppercase"),g(n,"class","mt-8"),g(f,"class","fragment mt-8"),g(p,"class","notes")},m(c,h){r(c,e,h),r(c,s,h),r(c,t,h),r(c,i,h),r(c,n,h),r(c,l,h),r(c,f,h),r(c,u,h),r(c,p,h)},p:O,d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f),a(u),a(p))}}}function bl(x){let e,o="Dans ce module",s,t,$="Faites le plus de zèle possible, exagérez !",i,n,m="C'est en allant trop loin qu'on apprend où sont les limites.",l,f,L="Vous apprendrez à doser en entreprise, avec de vrais projets et de vraies contraintes.",u,p,w=`Dans ce module, je vous encourage à en faire trop. Abstraire partout, hériter de tout. C'est
			comme ça qu'on apprend où sont les limites. En entreprise, vous aurez des contraintes de
			temps, de budget. Là, vous apprendrez à doser. Ici, c'est le moment d'expérimenter.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("p"),n.textContent=m,l=v(),f=C("p"),f.textContent=L,u=v(),p=C("aside"),p.textContent=w,this.h()},l(c){e=_(c,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-x5naxz"&&(e.textContent=o),s=d(c),t=_(c,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1as3wu1"&&(t.textContent=$),i=d(c),n=_(c,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-lvdult"&&(n.textContent=m),l=d(c),f=_(c,"P",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-1akob0d"&&(f.textContent=L),u=d(c),p=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-kluukh"&&(p.textContent=w),this.h()},h(){g(e,"class","uppercase"),g(t,"class","text-important text-4xl"),g(n,"class","fragment mt-8 text-2xl"),g(f,"class","fragment text-2xl"),g(p,"class","notes")},m(c,h){r(c,e,h),r(c,s,h),r(c,t,h),r(c,i,h),r(c,n,h),r(c,l,h),r(c,f,h),r(c,u,h),r(c,p,h)},p:O,d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f),a(u),a(p))}}}function Ll(x){let e,o="Récapitulatif",s,t,$='<div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">📦 RANGER</h4> <p class="text-xl">Données + méthodes<br/>dans un même objet</p></div> <div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">🔒 PROTÉGER</h4> <p class="text-xl">Chaque méthode n&#39;accède<br/>qu&#39;à son objet</p></div> <div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">🌳 GÉNÉRALISER</h4> <p class="text-xl">Héritage et abstraction<br/>pour réutiliser le code</p></div>',i,n,m=`On récapitule. La POO c'est 3 piliers. Ranger : on met ensemble ce qui va ensemble. Protéger :
			chaque méthode ne touche qu'à son objet, le compilateur vous aide. Généraliser : on écrit le
			code une fois, on le réutilise partout grâce à l'héritage.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("div"),t.innerHTML=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-j5vxp9"&&(e.textContent=o),s=d(l),t=_(l,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-acu1zb"&&(t.innerHTML=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-17zzt5h"&&(n.textContent=m),this.h()},h(){g(t,"class","flex flex-row justify-around items-start mt-8"),g(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function wl(x){let e,o="La POO, c'est quoi au final ?",s,t,$="Vous venez d'être confronté aux concepts fondamentaux de la POO :",i,n,m='<li><span class="text-important">L&#39;encapsulation</span> : ranger et protéger les données</li> <li><span class="text-important">L&#39;abstraction</span> : généraliser les concepts</li> <li><span class="text-important">L&#39;héritage</span> : réutiliser le code des parents</li>',l,f,L="Nous allons voir ces concepts en détail dans les chapitres suivants.",u,p,w=`On a vu les bases. Encapsulation, abstraction, héritage. Ce sont les piliers de la POO, et on
			va les approfondir tout au long du module. Chaque chapitre va détailler un de ces concepts.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("ul"),n.innerHTML=m,l=v(),f=C("p"),f.textContent=L,u=v(),p=C("aside"),p.textContent=w,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-5i67l6"&&(e.textContent=o),s=d(c),t=_(c,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1vfopav"&&(t.textContent=$),i=d(c),n=_(c,"UL",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-i42s8"&&(n.innerHTML=m),l=d(c),f=_(c,"P",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-ko3lge"&&(f.textContent=L),u=d(c),p=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-b4p3e"&&(p.textContent=w),this.h()},h(){g(t,"class","fragment"),g(n,"class","fragment text-2xl mt-4"),g(f,"class","fragment mt-8"),g(p,"class","notes")},m(c,h){r(c,e,h),r(c,s,h),r(c,t,h),r(c,i,h),r(c,n,h),r(c,l,h),r(c,f,h),r(c,u,h),r(c,p,h)},p:O,d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f),a(u),a(p))}}}function ql(x){let e,o="Retenez ceci",s,t,$='La POO est un <span class="text-important">&quot;outil&quot;</span>.',i,n,m=`Si vous faites du Java, même en codant mal, vous faites de la POO compte tenu de la nature du
			langage.`,l,f,L=`Si la programmation n&#39;est qu&#39;une suite de blocs de code tels des <b>légos</b>, la POO, c&#39;est
			fabriquer des blocs <span class="text-important">intelligemment</span>
			que vous réutilisez, peu importe que vous construisiez un pont ou une maison.`,u,p,w=`La POO c'est un outil, pas une obligation. Mais c'est un outil puissant. En Java, vous faites
			de la POO que vous le vouliez ou non, c'est la nature du langage. L'idée c'est de fabriquer
			des briques réutilisables. Comme des légos bien conçus. Une brique "Véhicule" peut servir pour
			une voiture aujourd'hui, une moto demain, un vaisseau spatial dans 5 ans.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("p"),n.textContent=m,l=v(),f=C("p"),f.innerHTML=L,u=v(),p=C("aside"),p.textContent=w,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-79cey5"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-i0a1q0"&&(t.innerHTML=$),i=d(c),n=_(c,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-18j8tnm"&&(n.textContent=m),l=d(c),f=_(c,"P",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-1ugi8k9"&&(f.innerHTML=L),u=d(c),p=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-kw89mq"&&(p.textContent=w),this.h()},h(){g(n,"class","fragment"),g(f,"class","fragment mt-8 text-2xl bg-accent-950 p-4 rounded-lg"),g(p,"class","notes")},m(c,h){r(c,e,h),r(c,s,h),r(c,t,h),r(c,i,h),r(c,n,h),r(c,l,h),r(c,f,h),r(c,u,h),r(c,p,h)},p:O,d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f),a(u),a(p))}}}function Pl(x){let e,o="À vous de jouer !",s,t,$="Dans les prochains chapitres, nous allons :",i,n,m='<li class="fragment">📦 Approfondir l&#39;<b>encapsulation</b> et la visibilité</li> <li class="fragment">🔗 Maîtriser l&#39;<b>héritage</b> et le polymorphisme</li> <li class="fragment">📋 Découvrir les <b>interfaces</b> et les classes abstraites</li> <li class="fragment">🎨 Apprendre les <b>Design Patterns</b> classiques</li>',l,f,L=`C'est parti pour la suite ! On va approfondir chaque concept. L'encapsulation, l'héritage, les
			interfaces, et même les Design Patterns. À la fin du module, vous saurez concevoir du code
			propre, évolutif, maintenable.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("ul"),n.innerHTML=m,l=v(),f=C("aside"),f.textContent=L,this.h()},l(u){e=_(u,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-cgpepy"&&(e.textContent=o),s=d(u),t=_(u,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-16xre1k"&&(t.textContent=$),i=d(u),n=_(u,"UL",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-m1w35p"&&(n.innerHTML=m),l=d(u),f=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-1kgc7yy"&&(f.textContent=L),this.h()},h(){g(t,"class","text-3xl mt-8"),g(n,"class","text-2xl mt-4"),g(f,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),r(u,n,p),r(u,l,p),r(u,f,p)},p:O,d(u){u&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f))}}}function Ml(x){let e,o,s,t,$,i,n,m,l,f,L,u,p,w,c,h,M,q,I,N,Q,X,V,F,ne,U,le,ae,fe,re,pe,oe,$e,ce,me,R,te,J,se,de,he,ve,ge,xe,be,z,W,k,Y,Le,we,qe,Pe,Me,He,D,K,ke,je,ze,Ae,Oe,Te,Ue,Se,Re,Ee,Je,De,Qe,Ve,Ke,Ge,Xe;return e=new B({props:{$$slots:{default:[Ms]},$$scope:{ctx:x}}}),s=new B({props:{$$slots:{default:[Hs]},$$scope:{ctx:x}}}),$=new B({props:{$$slots:{default:[js]},$$scope:{ctx:x}}}),n=new B({props:{data_background_color:"#1a1a2e",$$slots:{default:[As]},$$scope:{ctx:x}}}),l=new B({props:{$$slots:{default:[Ss]},$$scope:{ctx:x}}}),L=new B({props:{$$slots:{default:[Is]},$$scope:{ctx:x}}}),p=new B({props:{$$slots:{default:[Ds]},$$scope:{ctx:x}}}),c=new B({props:{$$slots:{default:[Vs]},$$scope:{ctx:x}}}),M=new B({props:{data_background_color:"#1a1a2e",$$slots:{default:[ks]},$$scope:{ctx:x}}}),I=new B({props:{$$slots:{default:[Os]},$$scope:{ctx:x}}}),Q=new B({props:{$$slots:{default:[Rs]},$$scope:{ctx:x}}}),V=new B({props:{$$slots:{default:[Ns]},$$scope:{ctx:x}}}),ne=new B({props:{$$slots:{default:[Gs]},$$scope:{ctx:x}}}),le=new B({props:{$$slots:{default:[Xs]},$$scope:{ctx:x}}}),fe=new B({props:{$$slots:{default:[Ys]},$$scope:{ctx:x}}}),pe=new B({props:{data_background_color:"#1a1a2e",$$slots:{default:[Ws]},$$scope:{ctx:x}}}),$e=new B({props:{$$slots:{default:[Zs]},$$scope:{ctx:x}}}),me=new B({props:{$$slots:{default:[ys]},$$scope:{ctx:x}}}),te=new B({props:{$$slots:{default:[sl]},$$scope:{ctx:x}}}),se=new B({props:{$$slots:{default:[ll]},$$scope:{ctx:x}}}),he=new B({props:{$$slots:{default:[nl]},$$scope:{ctx:x}}}),ge=new B({props:{$$slots:{default:[il]},$$scope:{ctx:x}}}),be=new B({props:{$$slots:{default:[al]},$$scope:{ctx:x}}}),W=new B({props:{$$slots:{default:[ul]},$$scope:{ctx:x}}}),Y=new B({props:{$$slots:{default:[cl]},$$scope:{ctx:x}}}),we=new B({props:{$$slots:{default:[pl]},$$scope:{ctx:x}}}),Pe=new B({props:{$$slots:{default:[dl]},$$scope:{ctx:x}}}),He=new B({props:{$$slots:{default:[vl]},$$scope:{ctx:x}}}),K=new B({props:{$$slots:{default:[_l]},$$scope:{ctx:x}}}),je=new B({props:{data_background_color:"#00353F",$$slots:{default:[Cl]},$$scope:{ctx:x}}}),Ae=new B({props:{data_background_color:"#00353F",$$slots:{default:[hl]},$$scope:{ctx:x}}}),Te=new B({props:{data_background_color:"#00353F",$$slots:{default:[gl]},$$scope:{ctx:x}}}),Se=new B({props:{data_background_color:"#00353F",$$slots:{default:[bl]},$$scope:{ctx:x}}}),Ee=new B({props:{$$slots:{default:[Ll]},$$scope:{ctx:x}}}),De=new B({props:{$$slots:{default:[wl]},$$scope:{ctx:x}}}),Ve=new B({props:{$$slots:{default:[ql]},$$scope:{ctx:x}}}),Ge=new B({props:{$$slots:{default:[Pl]},$$scope:{ctx:x}}}),{c(){E(e.$$.fragment),o=v(),E(s.$$.fragment),t=v(),E($.$$.fragment),i=v(),E(n.$$.fragment),m=v(),E(l.$$.fragment),f=v(),E(L.$$.fragment),u=v(),E(p.$$.fragment),w=v(),E(c.$$.fragment),h=v(),E(M.$$.fragment),q=v(),E(I.$$.fragment),N=v(),E(Q.$$.fragment),X=v(),E(V.$$.fragment),F=v(),E(ne.$$.fragment),U=v(),E(le.$$.fragment),ae=v(),E(fe.$$.fragment),re=v(),E(pe.$$.fragment),oe=v(),E($e.$$.fragment),ce=v(),E(me.$$.fragment),R=v(),E(te.$$.fragment),J=v(),E(se.$$.fragment),de=v(),E(he.$$.fragment),ve=v(),E(ge.$$.fragment),xe=v(),E(be.$$.fragment),z=v(),E(W.$$.fragment),k=v(),E(Y.$$.fragment),Le=v(),E(we.$$.fragment),qe=v(),E(Pe.$$.fragment),Me=v(),E(He.$$.fragment),D=v(),E(K.$$.fragment),ke=v(),E(je.$$.fragment),ze=v(),E(Ae.$$.fragment),Oe=v(),E(Te.$$.fragment),Ue=v(),E(Se.$$.fragment),Re=v(),E(Ee.$$.fragment),Je=v(),E(De.$$.fragment),Qe=v(),E(Ve.$$.fragment),Ke=v(),E(Ge.$$.fragment)},l(P){S(e.$$.fragment,P),o=d(P),S(s.$$.fragment,P),t=d(P),S($.$$.fragment,P),i=d(P),S(n.$$.fragment,P),m=d(P),S(l.$$.fragment,P),f=d(P),S(L.$$.fragment,P),u=d(P),S(p.$$.fragment,P),w=d(P),S(c.$$.fragment,P),h=d(P),S(M.$$.fragment,P),q=d(P),S(I.$$.fragment,P),N=d(P),S(Q.$$.fragment,P),X=d(P),S(V.$$.fragment,P),F=d(P),S(ne.$$.fragment,P),U=d(P),S(le.$$.fragment,P),ae=d(P),S(fe.$$.fragment,P),re=d(P),S(pe.$$.fragment,P),oe=d(P),S($e.$$.fragment,P),ce=d(P),S(me.$$.fragment,P),R=d(P),S(te.$$.fragment,P),J=d(P),S(se.$$.fragment,P),de=d(P),S(he.$$.fragment,P),ve=d(P),S(ge.$$.fragment,P),xe=d(P),S(be.$$.fragment,P),z=d(P),S(W.$$.fragment,P),k=d(P),S(Y.$$.fragment,P),Le=d(P),S(we.$$.fragment,P),qe=d(P),S(Pe.$$.fragment,P),Me=d(P),S(He.$$.fragment,P),D=d(P),S(K.$$.fragment,P),ke=d(P),S(je.$$.fragment,P),ze=d(P),S(Ae.$$.fragment,P),Oe=d(P),S(Te.$$.fragment,P),Ue=d(P),S(Se.$$.fragment,P),Re=d(P),S(Ee.$$.fragment,P),Je=d(P),S(De.$$.fragment,P),Qe=d(P),S(Ve.$$.fragment,P),Ke=d(P),S(Ge.$$.fragment,P)},m(P,G){T(e,P,G),r(P,o,G),T(s,P,G),r(P,t,G),T($,P,G),r(P,i,G),T(n,P,G),r(P,m,G),T(l,P,G),r(P,f,G),T(L,P,G),r(P,u,G),T(p,P,G),r(P,w,G),T(c,P,G),r(P,h,G),T(M,P,G),r(P,q,G),T(I,P,G),r(P,N,G),T(Q,P,G),r(P,X,G),T(V,P,G),r(P,F,G),T(ne,P,G),r(P,U,G),T(le,P,G),r(P,ae,G),T(fe,P,G),r(P,re,G),T(pe,P,G),r(P,oe,G),T($e,P,G),r(P,ce,G),T(me,P,G),r(P,R,G),T(te,P,G),r(P,J,G),T(se,P,G),r(P,de,G),T(he,P,G),r(P,ve,G),T(ge,P,G),r(P,xe,G),T(be,P,G),r(P,z,G),T(W,P,G),r(P,k,G),T(Y,P,G),r(P,Le,G),T(we,P,G),r(P,qe,G),T(Pe,P,G),r(P,Me,G),T(He,P,G),r(P,D,G),T(K,P,G),r(P,ke,G),T(je,P,G),r(P,ze,G),T(Ae,P,G),r(P,Oe,G),T(Te,P,G),r(P,Ue,G),T(Se,P,G),r(P,Re,G),T(Ee,P,G),r(P,Je,G),T(De,P,G),r(P,Qe,G),T(Ve,P,G),r(P,Ke,G),T(Ge,P,G),Xe=!0},p(P,G){const Ye={};G&1&&(Ye.$$scope={dirty:G,ctx:P}),e.$set(Ye);const We={};G&1&&(We.$$scope={dirty:G,ctx:P}),s.$set(We);const Ze={};G&1&&(Ze.$$scope={dirty:G,ctx:P}),$.$set(Ze);const ye={};G&1&&(ye.$$scope={dirty:G,ctx:P}),n.$set(ye);const et={};G&1&&(et.$$scope={dirty:G,ctx:P}),l.$set(et);const tt={};G&1&&(tt.$$scope={dirty:G,ctx:P}),L.$set(tt);const st={};G&1&&(st.$$scope={dirty:G,ctx:P}),p.$set(st);const nt={};G&1&&(nt.$$scope={dirty:G,ctx:P}),c.$set(nt);const it={};G&1&&(it.$$scope={dirty:G,ctx:P}),M.$set(it);const at={};G&1&&(at.$$scope={dirty:G,ctx:P}),I.$set(at);const rt={};G&1&&(rt.$$scope={dirty:G,ctx:P}),Q.$set(rt);const ut={};G&1&&(ut.$$scope={dirty:G,ctx:P}),V.$set(ut);const ot={};G&1&&(ot.$$scope={dirty:G,ctx:P}),ne.$set(ot);const ct={};G&1&&(ct.$$scope={dirty:G,ctx:P}),le.$set(ct);const ft={};G&1&&(ft.$$scope={dirty:G,ctx:P}),fe.$set(ft);const $t={};G&1&&($t.$$scope={dirty:G,ctx:P}),pe.$set($t);const pt={};G&1&&(pt.$$scope={dirty:G,ctx:P}),$e.$set(pt);const mt={};G&1&&(mt.$$scope={dirty:G,ctx:P}),me.$set(mt);const dt={};G&1&&(dt.$$scope={dirty:G,ctx:P}),te.$set(dt);const vt={};G&1&&(vt.$$scope={dirty:G,ctx:P}),se.$set(vt);const xt={};G&1&&(xt.$$scope={dirty:G,ctx:P}),he.$set(xt);const _t={};G&1&&(_t.$$scope={dirty:G,ctx:P}),ge.$set(_t);const Ct={};G&1&&(Ct.$$scope={dirty:G,ctx:P}),be.$set(Ct);const ht={};G&1&&(ht.$$scope={dirty:G,ctx:P}),W.$set(ht);const gt={};G&1&&(gt.$$scope={dirty:G,ctx:P}),Y.$set(gt);const bt={};G&1&&(bt.$$scope={dirty:G,ctx:P}),we.$set(bt);const Lt={};G&1&&(Lt.$$scope={dirty:G,ctx:P}),Pe.$set(Lt);const wt={};G&1&&(wt.$$scope={dirty:G,ctx:P}),He.$set(wt);const qt={};G&1&&(qt.$$scope={dirty:G,ctx:P}),K.$set(qt);const Pt={};G&1&&(Pt.$$scope={dirty:G,ctx:P}),je.$set(Pt);const Mt={};G&1&&(Mt.$$scope={dirty:G,ctx:P}),Ae.$set(Mt);const Ht={};G&1&&(Ht.$$scope={dirty:G,ctx:P}),Te.$set(Ht);const jt={};G&1&&(jt.$$scope={dirty:G,ctx:P}),Se.$set(jt);const At={};G&1&&(At.$$scope={dirty:G,ctx:P}),Ee.$set(At);const Tt={};G&1&&(Tt.$$scope={dirty:G,ctx:P}),De.$set(Tt);const St={};G&1&&(St.$$scope={dirty:G,ctx:P}),Ve.$set(St);const Et={};G&1&&(Et.$$scope={dirty:G,ctx:P}),Ge.$set(Et)},i(P){Xe||(A(e.$$.fragment,P),A(s.$$.fragment,P),A($.$$.fragment,P),A(n.$$.fragment,P),A(l.$$.fragment,P),A(L.$$.fragment,P),A(p.$$.fragment,P),A(c.$$.fragment,P),A(M.$$.fragment,P),A(I.$$.fragment,P),A(Q.$$.fragment,P),A(V.$$.fragment,P),A(ne.$$.fragment,P),A(le.$$.fragment,P),A(fe.$$.fragment,P),A(pe.$$.fragment,P),A($e.$$.fragment,P),A(me.$$.fragment,P),A(te.$$.fragment,P),A(se.$$.fragment,P),A(he.$$.fragment,P),A(ge.$$.fragment,P),A(be.$$.fragment,P),A(W.$$.fragment,P),A(Y.$$.fragment,P),A(we.$$.fragment,P),A(Pe.$$.fragment,P),A(He.$$.fragment,P),A(K.$$.fragment,P),A(je.$$.fragment,P),A(Ae.$$.fragment,P),A(Te.$$.fragment,P),A(Se.$$.fragment,P),A(Ee.$$.fragment,P),A(De.$$.fragment,P),A(Ve.$$.fragment,P),A(Ge.$$.fragment,P),Xe=!0)},o(P){j(e.$$.fragment,P),j(s.$$.fragment,P),j($.$$.fragment,P),j(n.$$.fragment,P),j(l.$$.fragment,P),j(L.$$.fragment,P),j(p.$$.fragment,P),j(c.$$.fragment,P),j(M.$$.fragment,P),j(I.$$.fragment,P),j(Q.$$.fragment,P),j(V.$$.fragment,P),j(ne.$$.fragment,P),j(le.$$.fragment,P),j(fe.$$.fragment,P),j(pe.$$.fragment,P),j($e.$$.fragment,P),j(me.$$.fragment,P),j(te.$$.fragment,P),j(se.$$.fragment,P),j(he.$$.fragment,P),j(ge.$$.fragment,P),j(be.$$.fragment,P),j(W.$$.fragment,P),j(Y.$$.fragment,P),j(we.$$.fragment,P),j(Pe.$$.fragment,P),j(He.$$.fragment,P),j(K.$$.fragment,P),j(je.$$.fragment,P),j(Ae.$$.fragment,P),j(Te.$$.fragment,P),j(Se.$$.fragment,P),j(Ee.$$.fragment,P),j(De.$$.fragment,P),j(Ve.$$.fragment,P),j(Ge.$$.fragment,P),Xe=!1},d(P){P&&(a(o),a(t),a(i),a(m),a(f),a(u),a(w),a(h),a(q),a(N),a(X),a(F),a(U),a(ae),a(re),a(oe),a(ce),a(R),a(J),a(de),a(ve),a(xe),a(z),a(k),a(Le),a(qe),a(Me),a(D),a(ke),a(ze),a(Oe),a(Ue),a(Re),a(Je),a(Qe),a(Ke)),H(e,P),H(s,P),H($,P),H(n,P),H(l,P),H(L,P),H(p,P),H(c,P),H(M,P),H(I,P),H(Q,P),H(V,P),H(ne,P),H(le,P),H(fe,P),H(pe,P),H($e,P),H(me,P),H(te,P),H(se,P),H(he,P),H(ge,P),H(be,P),H(W,P),H(Y,P),H(we,P),H(Pe,P),H(He,P),H(K,P),H(je,P),H(Ae,P),H(Te,P),H(Se,P),H(Ee,P),H(De,P),H(Ve,P),H(Ge,P)}}}function Hl(x){let e,o;return e=new B({props:{$$slots:{default:[Ml]},$$scope:{ctx:x}}}),{c(){E(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,t){T(e,s,t),o=!0},p(s,[t]){const $={};t&1&&($.$$scope={dirty:t,ctx:s}),e.$set($)},i(s){o||(A(e.$$.fragment,s),o=!0)},o(s){j(e.$$.fragment,s),o=!1},d(s){H(e,s)}}}class jl extends Be{constructor(e){super(),Fe(this,e,null,Hl,Ne,{})}}function Al(x){let e,o="Et si on ne veut pas hériter ?",s,t,$="L'héritage, c'est puissant... mais pas toujours adapté.",i,n,m='<p class="text-2xl">🤔 Une Voiture <b>est un</b> Moteur ?</p> <p class="text-red-400 text-3xl fragment">❌ Non !</p>',l,f,L='<p class="text-2xl">🤔 Une Voiture <b>a un</b> Moteur ?</p> <p class="text-green-400 text-3xl fragment">✅ Oui !</p>',u,p,w='C&#39;est la <span class="text-important">composition</span> !';return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("div"),n.innerHTML=m,l=v(),f=C("div"),f.innerHTML=L,u=v(),p=C("p"),p.innerHTML=w,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-kyeugj"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-135l6z7"&&(t.textContent=$),i=d(c),n=_(c,"DIV",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-bjhwhv"&&(n.innerHTML=m),l=d(c),f=_(c,"DIV",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-1iidfrd"&&(f.innerHTML=L),u=d(c),p=_(c,"P",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-11ppavm"&&(p.innerHTML=w),this.h()},h(){g(n,"class","fragment mt-8"),g(f,"class","fragment mt-4"),g(p,"class","fragment mt-8 text-accent-200 font-bold")},m(c,h){r(c,e,h),r(c,s,h),r(c,t,h),r(c,i,h),r(c,n,h),r(c,l,h),r(c,f,h),r(c,u,h),r(c,p,h)},p:O,d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f),a(u),a(p))}}}function Tl(x){let e,o="Qu'est-ce que la composition ?",s,t,$="La composition permet de créer des objets complexes en combinant des objets plus simples.",i,n,m="C&#39;est comme assembler des <b>briques Lego</b> pour construire une structure plus grande.",l,f,L='En POO, la composition consiste à avoir des <span class="text-important">instances de classes en tant qu&#39;attributs</span> d&#39;une autre classe.',u,p,w=`Si vous connaissez les bases de données, c'est comme une clé étrangère. Un objet "possède" un
			autre objet.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("p"),n.innerHTML=m,l=v(),f=C("p"),f.innerHTML=L,u=v(),p=C("aside"),p.textContent=w,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1ey692r"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1j30nsj"&&(t.textContent=$),i=d(c),n=_(c,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-12yvhve"&&(n.innerHTML=m),l=d(c),f=_(c,"P",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-1dofonx"&&(f.innerHTML=L),u=d(c),p=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-1gjj4rn"&&(p.textContent=w),this.h()},h(){g(n,"class","fragment mt-4"),g(f,"class","fragment mt-4"),g(p,"class","notes")},m(c,h){r(c,e,h),r(c,s,h),r(c,t,h),r(c,i,h),r(c,n,h),r(c,l,h),r(c,f,h),r(c,u,h),r(c,p,h)},p:O,d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f),a(u),a(p))}}}function Sl(x){let e,o="Comment choisir : Héritage ou Composition ?",s,t,$='<div class="p-6 bg-accent-950 rounded-lg"><p class="fragment">🤔 &quot;Est-ce qu&#39;un X <b class="text-important">est un</b> Y ?&quot;</p> <p class="fragment text-green-400 ml-8">→ OUI : <b>Héritage</b> (extends)</p> <p class="fragment text-red-400 ml-8">→ NON : ↓</p> <p class="fragment mt-4">🤔 &quot;Est-ce qu&#39;un X <b class="text-important">a un</b> Y ?&quot;</p> <p class="fragment text-blue-400 ml-8">→ OUI : <b>Composition</b> (attribut)</p></div>',i,n,m=`C'est LA règle d'or. Apprenez-la par cœur. Si "X est un Y" sonne faux, n'héritez pas,
			composez.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("div"),t.innerHTML=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1jpzxsy"&&(e.textContent=o),s=d(l),t=_(l,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1t58sxf"&&(t.innerHTML=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1bu2hun"&&(n.textContent=m),this.h()},h(){g(t,"class","text-2xl mt-8"),g(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function El(x){let e,o="Exemples concrets",s,t,$='<thead><tr><th class="p-3">Question</th> <th class="p-3">Réponse</th> <th class="p-3">Relation</th></tr></thead> <tbody><tr class="fragment"><td class="p-3">Un Chien <b>est un</b> Animal ?</td> <td class="p-3 text-green-400">✅ Oui</td> <td class="p-3">Héritage</td></tr> <tr class="fragment"><td class="p-3">Une Voiture <b>est un</b> Moteur ?</td> <td class="p-3 text-red-400">❌ Non</td> <td class="p-3">-</td></tr> <tr class="fragment"><td class="p-3">Une Voiture <b>a un</b> Moteur ?</td> <td class="p-3 text-green-400">✅ Oui</td> <td class="p-3">Composition</td></tr> <tr class="fragment"><td class="p-3">Un Maître <b>a un</b> Animal ?</td> <td class="p-3 text-green-400">✅ Oui</td> <td class="p-3">Composition</td></tr></tbody>',i,n,m=`Faites cet exercice mental à chaque fois que vous modélisez. C'est automatique avec
			l'expérience. En entretien d'embauche, on vous demande souvent : "Pourquoi avoir choisi
			héritage ou composition ici ?" Réponse : "Parce que dire 'Une Voiture est un Moteur' n'a pas
			de sens."`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("table"),t.innerHTML=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1yrhyzi"&&(e.textContent=o),s=d(l),t=_(l,"TABLE",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1lueyjo"&&(t.innerHTML=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-ig6cyi"&&(n.textContent=m),this.h()},h(){g(t,"class","text-xl mt-6"),g(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function Il(x){let e=`
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
			<b>possède</b> le Moteur.`,m;return t=new Ie({props:{$$slots:{default:[Il]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment),$=v(),i=C("p"),i.innerHTML=n,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-12o3qzv"&&(e.textContent=o),s=d(l),S(t.$$.fragment,l),$=d(l),i=_(l,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-o544v4"&&(i.innerHTML=n),this.h()},h(){g(i,"class","fragment")},m(l,f){r(l,e,f),r(l,s,f),T(t,l,f),r(l,$,f),r(l,i,f),m=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){m||(A(t.$$.fragment,l),m=!0)},o(l){j(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a($),a(i)),H(t,l)}}}function Vl(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function kl(x){let e,o="En code Java",s,t,$;return t=new ie({props:{lines:"1-8|10-20|22-25",$$slots:{default:[Vl]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment)},l(i){e=_(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1w10xpg"&&(e.textContent=o),s=d(i),S(t.$$.fragment,i)},m(i,n){r(i,e,n),r(i,s,n),T(t,i,n),$=!0},p(i,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:i}),t.$set(m)},i(i){$||(A(t.$$.fragment,i),$=!0)},o(i){j(t.$$.fragment,i),$=!1},d(i){i&&(a(e),a(s)),H(t,i)}}}function zl(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Ol(x){let e,o="Avantage : flexibilité",s,t,$="La composition favorise la <b>réutilisation</b> et la <b>flexibilité</b>.",i,n,m,l,f="On peut changer le moteur sans modifier la classe Voiture !",L,u,p=`C'est le principe "Composition over Inheritance" du Gang of Four. Préférez composer plutôt
			qu'hériter. L'héritage crée un couplage fort. La composition permet de changer de stratégie à
			l'exécution. C'est la base de nombreux Design Patterns : Strategy, Decorator, Adapter...`,w;return n=new ie({props:{$$slots:{default:[zl]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),E(n.$$.fragment),m=v(),l=C("p"),l.textContent=f,L=v(),u=C("aside"),u.textContent=p,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1y64iq2"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-mbviv2"&&(t.innerHTML=$),i=d(c),S(n.$$.fragment,c),m=d(c),l=_(c,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-ybembw"&&(l.textContent=f),L=d(c),u=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(u)!=="svelte-1bwcsiy"&&(u.textContent=p),this.h()},h(){g(l,"class","fragment text-accent-200"),g(u,"class","notes")},m(c,h){r(c,e,h),r(c,s,h),r(c,t,h),r(c,i,h),T(n,c,h),r(c,m,h),r(c,l,h),r(c,L,h),r(c,u,h),w=!0},p(c,h){const M={};h&1&&(M.$$scope={dirty:h,ctx:c}),n.$set(M)},i(c){w||(A(n.$$.fragment,c),w=!0)},o(c){j(n.$$.fragment,c),w=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(l),a(L),a(u)),H(n,c)}}}function Ul(x){let e,o="Les deux relations fondamentales",s,t,$="Le cœur de l'architecture objet",i,n,m=`Tout le reste de la POO découle de ces deux relations. Maîtrisez-les et vous maîtrisez 80% de
			l'architecture objet. Quand vous lisez du code, cherchez ces relations. Quand vous concevez,
			posez-vous ces questions.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-fh7ab8"&&(e.textContent=o),s=d(l),t=_(l,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1cmiiew"&&(t.textContent=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-tu4ua3"&&(n.textContent=m),this.h()},h(){g(e,"class","text-5xl"),g(t,"class","text-2xl text-gray-400"),g(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function Rl(x){let e,o=`<p>L&#39;un des intérêts de la POO réside dans les <b>relations</b> entre les objets. Ces relations
				constituent l&#39;<span class="text-important">architecture</span> de votre application.</p> <dl class="mt-6 text-xl"><dt class="fragment"><strong class="text-important">&quot;est un&quot;</strong> (<em>is-a</em>)</dt><dd class="fragment ml-8"><p>Une classe peut être assimilée à une autre, plus générale. → <span class="text-important">Héritage</span></p> </dd><dt class="fragment mt-4"><strong class="text-important">&quot;a un&quot;</strong> (<em>has-a</em>)
				</dt><dd class="fragment ml-8"><p>Une classe dépend des services d&#39;une autre. → <span class="text-important">Composition</span></p></dd></dl>`,s,t,$=`Ces termes viennent de l'anglais et sont utilisés mondialement. Apprenez "is-a" et "has-a".
			Quand vous modélisez, reformulez toujours en français : "Un X est-il un Y ?" "Un X a-t-il un Y
			?" La réponse vous dit quelle relation utiliser. C'est mécanique.`;return{c(){e=C("div"),e.innerHTML=o,s=v(),t=C("aside"),t.textContent=$,this.h()},l(i){e=_(i,"DIV",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-1hproaj"&&(e.innerHTML=o),s=d(i),t=_(i,"ASIDE",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-db092m"&&(t.textContent=$),this.h()},h(){g(e,"class",""),g(t,"class","notes")},m(i,n){r(i,e,n),r(i,s,n),r(i,t,n)},p:O,d(i){i&&(a(e),a(s),a(t))}}}function Jl(x){let e=`
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
			l'injection de dépendance avant l'heure ! Les frameworks comme Spring font exactement ça.`,L;return n=new Ie({props:{$$slots:{default:[Jl]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),E(n.$$.fragment),m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1defcuq"&&(e.textContent=o),s=d(u),t=_(u,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1vsft0l"&&(t.innerHTML=$),i=d(u),S(n.$$.fragment,u),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-6gtlgp"&&(l.textContent=f),this.h()},h(){g(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),T(n,u,p),r(u,m,p),r(u,l,p),L=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),n.$set(w)},i(u){L||(A(n.$$.fragment,u),L=!0)},o(u){j(n.$$.fragment,u),L=!1},d(u){u&&(a(e),a(s),a(t),a(i),a(m),a(l)),H(n,u)}}}function Bl(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Gl(x){let e,o="En code Java",s,t,$,i,n,m;return $=new ie({props:{class:"language-java",$$slots:{default:[Bl]},$$scope:{ctx:x}}}),n=new ie({props:{class:"language-java",$$slots:{default:[Fl]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("div"),E($.$$.fragment),i=v(),E(n.$$.fragment),this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1w10xpg"&&(e.textContent=o),s=d(l),t=_(l,"DIV",{class:!0});var f=ue(t);S($.$$.fragment,f),i=d(f),S(n.$$.fragment,f),f.forEach(a),this.h()},h(){g(t,"class","flex flex-row items-start gap-4")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),T($,t,null),ee(t,i),T(n,t,null),m=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),$.$set(L);const u={};f&1&&(u.$$scope={dirty:f,ctx:l}),n.$set(u)},i(l){m||(A($.$$.fragment,l),A(n.$$.fragment,l),m=!0)},o(l){j($.$$.fragment,l),j(n.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a(t)),H($),H(n)}}}function Ql(x){let e=`
Maitre jean = new Maitre(new Chien());
Maitre marie = new Maitre(new Chat());

jean.presenterAnimal();   // "Wouaf !"
marie.presenterAnimal();  // "Miaou !"

// On peut changer d'animal sans modifier la classe Maitre !
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Kl(x){let e,o="La puissance de la combinaison",s,t,$="Le Maître ne sait pas quel type d&#39;animal il a... et c&#39;est <b>voulu</b> !",i,n,m,l,f=`C&#39;est le <span class="text-important">polymorphisme</span> en action !<br/>
			(on le verra en détail plus tard)`,L,u,p=`C'est là que tout prend son sens. Composition + héritage + polymorphisme = architecture
			flexible. Si demain on ajoute un Perroquet, le code du Maître ne change pas. Zéro
			modification. C'est le principe Open/Closed en action : ouvert à l'extension, fermé à la
			modification.`,w;return n=new ie({props:{$$slots:{default:[Ql]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),E(n.$$.fragment),m=v(),l=C("p"),l.innerHTML=f,L=v(),u=C("aside"),u.textContent=p,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-cj68oa"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-kzsg9e"&&(t.innerHTML=$),i=d(c),S(n.$$.fragment,c),m=d(c),l=_(c,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1rhcp8x"&&(l.innerHTML=f),L=d(c),u=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(u)!=="svelte-atbhqx"&&(u.textContent=p),this.h()},h(){g(l,"class","fragment text-accent-200 font-bold"),g(u,"class","notes")},m(c,h){r(c,e,h),r(c,s,h),r(c,t,h),r(c,i,h),T(n,c,h),r(c,m,h),r(c,l,h),r(c,L,h),r(c,u,h),w=!0},p(c,h){const M={};h&1&&(M.$$scope={dirty:h,ctx:c}),n.$set(M)},i(c){w||(A(n.$$.fragment,c),w=!0)},o(c){j(n.$$.fragment,c),w=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(l),a(L),a(u)),H(n,c)}}}function Xl(x){let e,o="Composition vs Agrégation",s,t,$="Il existe une nuance importante :",i,n,m='<div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">◆ Composition</h4> <p class="text-xl mt-2">L&#39;objet contenu <b>appartient</b> à l&#39;objet conteneur.</p> <p class="text-sm text-gray-400 mt-2">Si la Voiture est détruite, le Moteur aussi.</p></div> <div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">◇ Agrégation</h4> <p class="text-xl mt-2">L&#39;objet contenu <b>existe indépendamment</b>.</p> <p class="text-sm text-gray-400 mt-2">Si l&#39;Équipe est dissoute, les Joueurs existent toujours.</p></div>',l,f,L=`En pratique, beaucoup de développeurs confondent les deux, et ce n'est pas grave. L'important
			c'est de se poser la question : "Si je supprime le conteneur, le contenu a-t-il encore un sens
			?" Une roue sans voiture = bizarre. Un joueur sans équipe = normal (il peut changer d'équipe).`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("div"),n.innerHTML=m,l=v(),f=C("aside"),f.textContent=L,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-s3132y"&&(e.textContent=o),s=d(u),t=_(u,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1v8b0oy"&&(t.textContent=$),i=d(u),n=_(u,"DIV",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-5t1llc"&&(n.innerHTML=m),l=d(u),f=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-2sj58"&&(f.textContent=L),this.h()},h(){g(n,"class","grid grid-cols-2 gap-8 mt-6"),g(f,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),r(u,n,p),r(u,l,p),r(u,f,p)},p:O,d(u){u&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f))}}}function Yl(x){let e=`
@startuml
class Voiture
class Moteur
class Equipe
class Joueur

Voiture *-- Moteur : composition
Equipe o-- Joueur : agrégation
@enduml
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Wl(x){let e,o="En UML",s,t,$,i,n="◆ = Composition (losange plein) | ◇ = Agrégation (losange vide)",m,l,f=`En pratique, la différence est subtile. L'important c'est de comprendre qui "possède" quoi. En
			composition, le conteneur crée l'objet. En agrégation, on le reçoit de l'extérieur.`,L;return t=new Ie({props:{$$slots:{default:[Yl]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment),$=v(),i=C("p"),i.textContent=n,m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1dfk95l"&&(e.textContent=o),s=d(u),S(t.$$.fragment,u),$=d(u),i=_(u,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-ze7nvt"&&(i.textContent=n),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1iqya04"&&(l.textContent=f),this.h()},h(){g(i,"class","mt-4"),g(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),T(t,u,p),r(u,$,p),r(u,i,p),r(u,m,p),r(u,l,p),L=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),t.$set(w)},i(u){L||(A(t.$$.fragment,u),L=!0)},o(u){j(t.$$.fragment,u),L=!1},d(u){u&&(a(e),a(s),a($),a(i),a(m),a(l)),H(t,u)}}}function Zl(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function en(x){let e,o="En code : qui crée quoi ?",s,t,$,i,n="◆ Composition",m,l,f,L,u,p="◇ Agrégation",w,c,h;return l=new ie({props:{class:"language-java",$$slots:{default:[Zl]},$$scope:{ctx:x}}}),c=new ie({props:{class:"language-java",$$slots:{default:[yl]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("div"),$=C("div"),i=C("h4"),i.textContent=n,m=v(),E(l.$$.fragment),f=v(),L=C("div"),u=C("h4"),u.textContent=p,w=v(),E(c.$$.fragment),this.h()},l(M){e=_(M,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-13g76yp"&&(e.textContent=o),s=d(M),t=_(M,"DIV",{class:!0});var q=ue(t);$=_(q,"DIV",{});var I=ue($);i=_(I,"H4",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-13iofgd"&&(i.textContent=n),m=d(I),S(l.$$.fragment,I),I.forEach(a),f=d(q),L=_(q,"DIV",{});var N=ue(L);u=_(N,"H4",{class:!0,"data-svelte-h":!0}),b(u)!=="svelte-b2romh"&&(u.textContent=p),w=d(N),S(c.$$.fragment,N),N.forEach(a),q.forEach(a),this.h()},h(){g(i,"class","text-important"),g(u,"class","text-important"),g(t,"class","grid grid-cols-2 gap-4")},m(M,q){r(M,e,q),r(M,s,q),r(M,t,q),ee(t,$),ee($,i),ee($,m),T(l,$,null),ee(t,f),ee(t,L),ee(L,u),ee(L,w),T(c,L,null),h=!0},p(M,q){const I={};q&1&&(I.$$scope={dirty:q,ctx:M}),l.$set(I);const N={};q&1&&(N.$$scope={dirty:q,ctx:M}),c.$set(N)},i(M){h||(A(l.$$.fragment,M),A(c.$$.fragment,M),h=!0)},o(M){j(l.$$.fragment,M),j(c.$$.fragment,M),h=!1},d(M){M&&(a(e),a(s),a(t)),H(l),H(c)}}}function tn(x){let e,o="Récapitulatif",s,t,$='<thead><tr><th class="p-3">Relation</th> <th class="p-3">Question</th> <th class="p-3">Implémentation</th> <th class="p-3">UML</th></tr></thead> <tbody><tr class="fragment"><td class="p-3 text-important">Héritage</td> <td class="p-3">&quot;X est un Y&quot;</td> <td class="p-3"><code>extends</code></td> <td class="p-3">Flèche △</td></tr> <tr class="fragment"><td class="p-3 text-important">Composition</td> <td class="p-3">&quot;X a un Y&quot; (possède)</td> <td class="p-3">Attribut (créé)</td> <td class="p-3">Losange ◆</td></tr> <tr class="fragment"><td class="p-3 text-important">Agrégation</td> <td class="p-3">&quot;X a un Y&quot; (référence)</td> <td class="p-3">Attribut (reçu)</td> <td class="p-3">Losange ◇</td></tr></tbody>',i,n,m=`Gardez ce tableau en tête. C'est la base de toute modélisation objet. En UML, on utilise ces
			symboles. En entretien, on vous demandera de dessiner ces diagrammes. Prochaine étape : les
			interfaces, pour aller encore plus loin dans l'abstraction.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("table"),t.innerHTML=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-ri7iuh"&&(e.textContent=o),s=d(l),t=_(l,"TABLE",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-9czqcv"&&(t.innerHTML=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1hwoc6u"&&(n.textContent=m),this.h()},h(){g(t,"class","text-xl"),g(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function sn(x){let e,o="La composition",s,t,$,i,n,m,l,f,L,u,p,w,c,h,M,q,I,N,Q,X,V,F,ne,U,le,ae,fe,re,pe,oe,$e,ce,me;return t=new B({props:{$$slots:{default:[Al]},$$scope:{ctx:x}}}),i=new B({props:{$$slots:{default:[Tl]},$$scope:{ctx:x}}}),m=new B({props:{$$slots:{default:[Sl]},$$scope:{ctx:x}}}),f=new B({props:{$$slots:{default:[El]},$$scope:{ctx:x}}}),u=new B({props:{$$slots:{default:[Dl]},$$scope:{ctx:x}}}),w=new B({props:{$$slots:{default:[kl]},$$scope:{ctx:x}}}),h=new B({props:{$$slots:{default:[Ol]},$$scope:{ctx:x}}}),q=new B({props:{data_background_color:"#1a1a2e",$$slots:{default:[Ul]},$$scope:{ctx:x}}}),N=new B({props:{$$slots:{default:[Rl]},$$scope:{ctx:x}}}),X=new B({props:{$$slots:{default:[Nl]},$$scope:{ctx:x}}}),F=new B({props:{$$slots:{default:[Gl]},$$scope:{ctx:x}}}),U=new B({props:{$$slots:{default:[Kl]},$$scope:{ctx:x}}}),ae=new B({props:{$$slots:{default:[Xl]},$$scope:{ctx:x}}}),re=new B({props:{$$slots:{default:[Wl]},$$scope:{ctx:x}}}),oe=new B({props:{$$slots:{default:[en]},$$scope:{ctx:x}}}),ce=new B({props:{$$slots:{default:[tn]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment),$=v(),E(i.$$.fragment),n=v(),E(m.$$.fragment),l=v(),E(f.$$.fragment),L=v(),E(u.$$.fragment),p=v(),E(w.$$.fragment),c=v(),E(h.$$.fragment),M=v(),E(q.$$.fragment),I=v(),E(N.$$.fragment),Q=v(),E(X.$$.fragment),V=v(),E(F.$$.fragment),ne=v(),E(U.$$.fragment),le=v(),E(ae.$$.fragment),fe=v(),E(re.$$.fragment),pe=v(),E(oe.$$.fragment),$e=v(),E(ce.$$.fragment)},l(R){e=_(R,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1dl0775"&&(e.textContent=o),s=d(R),S(t.$$.fragment,R),$=d(R),S(i.$$.fragment,R),n=d(R),S(m.$$.fragment,R),l=d(R),S(f.$$.fragment,R),L=d(R),S(u.$$.fragment,R),p=d(R),S(w.$$.fragment,R),c=d(R),S(h.$$.fragment,R),M=d(R),S(q.$$.fragment,R),I=d(R),S(N.$$.fragment,R),Q=d(R),S(X.$$.fragment,R),V=d(R),S(F.$$.fragment,R),ne=d(R),S(U.$$.fragment,R),le=d(R),S(ae.$$.fragment,R),fe=d(R),S(re.$$.fragment,R),pe=d(R),S(oe.$$.fragment,R),$e=d(R),S(ce.$$.fragment,R)},m(R,te){r(R,e,te),r(R,s,te),T(t,R,te),r(R,$,te),T(i,R,te),r(R,n,te),T(m,R,te),r(R,l,te),T(f,R,te),r(R,L,te),T(u,R,te),r(R,p,te),T(w,R,te),r(R,c,te),T(h,R,te),r(R,M,te),T(q,R,te),r(R,I,te),T(N,R,te),r(R,Q,te),T(X,R,te),r(R,V,te),T(F,R,te),r(R,ne,te),T(U,R,te),r(R,le,te),T(ae,R,te),r(R,fe,te),T(re,R,te),r(R,pe,te),T(oe,R,te),r(R,$e,te),T(ce,R,te),me=!0},p(R,te){const J={};te&1&&(J.$$scope={dirty:te,ctx:R}),t.$set(J);const se={};te&1&&(se.$$scope={dirty:te,ctx:R}),i.$set(se);const de={};te&1&&(de.$$scope={dirty:te,ctx:R}),m.$set(de);const he={};te&1&&(he.$$scope={dirty:te,ctx:R}),f.$set(he);const ve={};te&1&&(ve.$$scope={dirty:te,ctx:R}),u.$set(ve);const ge={};te&1&&(ge.$$scope={dirty:te,ctx:R}),w.$set(ge);const xe={};te&1&&(xe.$$scope={dirty:te,ctx:R}),h.$set(xe);const be={};te&1&&(be.$$scope={dirty:te,ctx:R}),q.$set(be);const z={};te&1&&(z.$$scope={dirty:te,ctx:R}),N.$set(z);const W={};te&1&&(W.$$scope={dirty:te,ctx:R}),X.$set(W);const k={};te&1&&(k.$$scope={dirty:te,ctx:R}),F.$set(k);const Y={};te&1&&(Y.$$scope={dirty:te,ctx:R}),U.$set(Y);const Le={};te&1&&(Le.$$scope={dirty:te,ctx:R}),ae.$set(Le);const we={};te&1&&(we.$$scope={dirty:te,ctx:R}),re.$set(we);const qe={};te&1&&(qe.$$scope={dirty:te,ctx:R}),oe.$set(qe);const Pe={};te&1&&(Pe.$$scope={dirty:te,ctx:R}),ce.$set(Pe)},i(R){me||(A(t.$$.fragment,R),A(i.$$.fragment,R),A(m.$$.fragment,R),A(f.$$.fragment,R),A(u.$$.fragment,R),A(w.$$.fragment,R),A(h.$$.fragment,R),A(q.$$.fragment,R),A(N.$$.fragment,R),A(X.$$.fragment,R),A(F.$$.fragment,R),A(U.$$.fragment,R),A(ae.$$.fragment,R),A(re.$$.fragment,R),A(oe.$$.fragment,R),A(ce.$$.fragment,R),me=!0)},o(R){j(t.$$.fragment,R),j(i.$$.fragment,R),j(m.$$.fragment,R),j(f.$$.fragment,R),j(u.$$.fragment,R),j(w.$$.fragment,R),j(h.$$.fragment,R),j(q.$$.fragment,R),j(N.$$.fragment,R),j(X.$$.fragment,R),j(F.$$.fragment,R),j(U.$$.fragment,R),j(ae.$$.fragment,R),j(re.$$.fragment,R),j(oe.$$.fragment,R),j(ce.$$.fragment,R),me=!1},d(R){R&&(a(e),a(s),a($),a(n),a(l),a(L),a(p),a(c),a(M),a(I),a(Q),a(V),a(ne),a(le),a(fe),a(pe),a($e)),H(t,R),H(i,R),H(m,R),H(f,R),H(u,R),H(w,R),H(h,R),H(q,R),H(N,R),H(X,R),H(F,R),H(U,R),H(ae,R),H(re,R),H(oe,R),H(ce,R)}}}function ln(x){let e,o;return e=new B({props:{$$slots:{default:[sn]},$$scope:{ctx:x}}}),{c(){E(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,t){T(e,s,t),o=!0},p(s,[t]){const $={};t&1&&($.$$scope={dirty:t,ctx:s}),e.$set($)},i(s){o||(A(e.$$.fragment,s),o=!0)},o(s){j(e.$$.fragment,s),o=!1},d(s){H(e,s)}}}class nn extends Be{constructor(e){super(),Fe(this,e,null,ln,Ne,{})}}function an(x){let e=`
                abstract class Animal {}
                abstract class AnimalVolant extends Animal {}
                abstract class AnimalNageur extends Animal {}
                class Canard extends AnimalVolant, AnimalNageur {}
            `,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function rn(x){let e,o="L'héritage multiple",s,t,$="Comment hériter de deux classes ?",i,n,m,l,f=`En Java, ce n&#39;est pas possible !
			<br/> En revanche, on peut utiliser une interface pour simuler l&#39;héritage multiple.`,L,u,p=`L'héritage multiple existe en C++, mais ça crée le fameux "problème du diamant" : si deux
			parents ont la même méthode, laquelle appeler ? Java a choisi d'interdire l'héritage multiple
			de classes pour éviter ces ambiguïtés. Le canard est l'exemple parfait : il vole ET il nage.
			Comment modéliser ça sans héritage multiple ?`,w;return n=new Ie({props:{$$slots:{default:[an]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),E(n.$$.fragment),m=v(),l=C("p"),l.innerHTML=f,L=v(),u=C("aside"),u.textContent=p,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-lz4bxy"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1py5itu"&&(t.textContent=$),i=d(c),S(n.$$.fragment,c),m=d(c),l=_(c,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-mtdftf"&&(l.innerHTML=f),L=d(c),u=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(u)!=="svelte-11kv8kj"&&(u.textContent=p),this.h()},h(){g(l,"class","fragment"),g(u,"class","notes")},m(c,h){r(c,e,h),r(c,s,h),r(c,t,h),r(c,i,h),T(n,c,h),r(c,m,h),r(c,l,h),r(c,L,h),r(c,u,h),w=!0},p(c,h){const M={};h&1&&(M.$$scope={dirty:h,ctx:c}),n.$set(M)},i(c){w||(A(n.$$.fragment,c),w=!0)},o(c){j(n.$$.fragment,c),w=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(l),a(L),a(u)),H(n,c)}}}function un(x){let e,o;return e=new B({props:{$$slots:{default:[rn]},$$scope:{ctx:x}}}),{c(){E(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,t){T(e,s,t),o=!0},p(s,t){const $={};t&1&&($.$$scope={dirty:t,ctx:s}),e.$set($)},i(s){o||(A(e.$$.fragment,s),o=!0)},o(s){j(e.$$.fragment,s),o=!1},d(s){H(e,s)}}}function on(x){let e=`
    
    public interface ArticleLouable {
      float reserver(Date from, Date to); 
      float rendre(int penalite);    
    }
        `,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function cn(x){let e,o=`Une interface est un type de référence similaire à une classe abstraite qui ne contient que
			des méthodes abstraites.`,s,t,$=`Une interface n'a pas de code "par défaut", seulement des signatures de méthodes.`,i,n,m,l,f=`Une interface, c'est un "contrat". Elle dit : "Toute classe qui m'implémente DOIT avoir ces
			méthodes." C'est le niveau d'abstraction le plus élevé en Java. Aucune implémentation, juste
			des promesses. Depuis Java 8, on peut avoir des méthodes "default" avec du code, mais c'est
			l'exception, pas la règle.`,L;return n=new ie({props:{$$slots:{default:[on]},$$scope:{ctx:x}}}),{c(){e=C("p"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),E(n.$$.fragment),m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"P",{"data-svelte-h":!0}),b(e)!=="svelte-zve5wp"&&(e.textContent=o),s=d(u),t=_(u,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1phkx1u"&&(t.textContent=$),i=d(u),S(n.$$.fragment,u),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-18c88ea"&&(l.textContent=f),this.h()},h(){g(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),T(n,u,p),r(u,m,p),r(u,l,p),L=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),n.$set(w)},i(u){L||(A(n.$$.fragment,u),L=!0)},o(u){j(n.$$.fragment,u),L=!1},d(u){u&&(a(e),a(s),a(t),a(i),a(m),a(l)),H(n,u)}}}function fn(x){let e,o="Implémentation d’une interface",s,t,$=`Une classe signale les interfaces qu’elle implémente grâce au mot-clé <code>implements</code>.
			Une classe concrète doit fournir une implémentation pour toutes les méthodes d’une interface,
			soit dans sa déclaration, soit parce qu’elle en hérite.`,i,n,m=`C'est la différence clé avec l'héritage : on "extends" une classe, on "implements" une
			interface. Et surtout : on peut implémenter PLUSIEURS interfaces, contrairement à l'héritage.
			Si vous oubliez d'implémenter une méthode, le compilateur vous le dira.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-6vv8ym"&&(e.textContent=o),s=d(l),t=_(l,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1vu2bky"&&(t.innerHTML=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-sn5kmm"&&(n.textContent=m),this.h()},h(){g(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function $n(x){let e=`
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
			capacités additionnelles. L'ordre est important : extends AVANT implements !`,m;return t=new ie({props:{className:"h-[70vh]",$$slots:{default:[$n]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment),$=v(),i=C("aside"),i.textContent=n,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-6vv8ym"&&(e.textContent=o),s=d(l),S(t.$$.fragment,l),$=d(l),i=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-qpvial"&&(i.textContent=n),this.h()},h(){g(i,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),T(t,l,f),r(l,$,f),r(l,i,f),m=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){m||(A(t.$$.fragment,l),m=!0)},o(l){j(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a($),a(i)),H(t,l)}}}function mn(x){let e,o="Implémentation d’une interface",s,t,$=`Une interface permet de mutualiser une implémentation entre des classes qui n’ont pas de lien
			d’héritage.<br/>
			Si une classe implémente une interface, ses classes dérivées héritent de cette implémentation, mais
			il est toutefois possible de la surcharger.`,i,n,m=`C'est là toute la puissance des interfaces. Un Avion et un Oiseau n'ont rien en commun... sauf
			qu'ils volent. Avec une interface Volant, on peut les traiter de la même façon pour tout ce
			qui concerne le vol. C'est le principe de "programmation par contrat" : on programme contre
			une interface, pas une implémentation.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-6vv8ym"&&(e.textContent=o),s=d(l),t=_(l,"P",{"data-svelte-h":!0}),b(t)!=="svelte-cgrkq0"&&(t.innerHTML=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1g9blqi"&&(n.textContent=m),this.h()},h(){g(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function dn(x){let e,o="Comment choisir entre une classe abstraite et une interface ?",s,t,$=`<li><b>Classe abstraite</b> : Si, fondamentalement, on peut dire &quot;Un Dauphin est un Animal&quot;,
				alors, vous <i>pouvez</i> utiliser une classe abstraite.<br/></li> <li><b>Interface</b> : S&#39;il est plus juste de dire &quot;Un Dauphin peut nager&quot;, alors vous
				<i>devriez</i>
				utiliser une interface.
				<ul><li>Si quelque chose qui n&#39;aurait rien à voir avec vos animaux pouvait nager, utilisez une
						interface.<br/>
						Par exemple, un avion et un oiseau peuvent voler, mais ils n&#39;ont rien à voir l&#39;un avec l&#39;autre.</li> <li>Sinon, prévoyez plutôt une interface si vous pensez qu&#39;une classe fille pourrait avoir
						besoin d&#39;hériter de plusieurs classes.</li></ul></li>`,i,n,m=`C'est LA question qu'on vous posera en entretien d'embauche ! Retenez bien cette règle. "Est
			un" → classe abstraite (relation d'identité) "Peut faire" → interface (capacité) Dans le
			doute, préférez l'interface. C'est plus flexible et ça suit le principe de composition over
			inheritance.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("ul"),t.innerHTML=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-95djsx"&&(e.textContent=o),s=d(l),t=_(l,"UL",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1bl7mxh"&&(t.innerHTML=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-8pa8gb"&&(n.textContent=m),this.h()},h(){g(t,"class","text-4xl"),g(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function vn(x){let e=`
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
			En pratique, les interfaces résolvent 90% des problèmes de modélisation complexe.`,L;return $=new Ie({props:{$$slots:{default:[vn]},$$scope:{ctx:x}}}),n=new Ie({props:{$$slots:{default:[xn]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("div"),E($.$$.fragment),i=v(),E(n.$$.fragment),m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-95djsx"&&(e.textContent=o),s=d(u),t=_(u,"DIV",{class:!0});var p=ue(t);S($.$$.fragment,p),i=d(p),S(n.$$.fragment,p),p.forEach(a),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-kyimvk"&&(l.textContent=f),this.h()},h(){g(t,"class","flex flex-row justify-center items-center"),g(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),T($,t,null),ee(t,i),T(n,t,null),r(u,m,p),r(u,l,p),L=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),$.$set(w);const c={};p&1&&(c.$$scope={dirty:p,ctx:u}),n.$set(c)},i(u){L||(A($.$$.fragment,u),A(n.$$.fragment,u),L=!0)},o(u){j($.$$.fragment,u),j(n.$$.fragment,u),L=!1},d(u){u&&(a(e),a(s),a(t),a(m),a(l)),H($),H(n)}}}function Cn(x){let e=`
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
			dépendez des abstractions, pas des implémentations.`,L;return n=new ie({props:{class:" highlighter language-java",$$slots:{default:[Cn]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),E(n.$$.fragment),m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-mwdtiv"&&(e.textContent=o),s=d(u),t=_(u,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1xd6dcn"&&(t.textContent=$),i=d(u),S(n.$$.fragment,u),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1uux63m"&&(l.textContent=f),this.h()},h(){g(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),T(n,u,p),r(u,m,p),r(u,l,p),L=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),n.$set(w)},i(u){L||(A(n.$$.fragment,u),L=!0)},o(u){j(n.$$.fragment,u),L=!1},d(u){u&&(a(e),a(s),a(t),a(i),a(m),a(l)),H(n,u)}}}function gn(x){let e=`
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
			utilise le mot-clé <code>extends</code>.`,i,n,m;return n=new ie({props:{className:"highlighter language-java",$$slots:{default:[gn]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),E(n.$$.fragment)},l(l){e=_(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-j0acen"&&(e.textContent=o),s=d(l),t=_(l,"P",{"data-svelte-h":!0}),b(t)!=="svelte-tpi5ka"&&(t.innerHTML=$),i=d(l),S(n.$$.fragment,l)},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),T(n,l,f),m=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),n.$set(L)},i(l){m||(A(n.$$.fragment,l),m=!0)},o(l){j(n.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a(t),a(i)),H(n,l)}}}function Ln(x){let e=`
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
			instance compatible avec cette interface.`,i,n,m;return n=new ie({props:{className:"highlighter language-java",$$slots:{default:[Ln]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),E(n.$$.fragment)},l(l){e=_(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-j0acen"&&(e.textContent=o),s=d(l),t=_(l,"P",{"data-svelte-h":!0}),b(t)!=="svelte-6egy71"&&(t.innerHTML=$),i=d(l),S(n.$$.fragment,l)},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),T(n,l,f),m=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),n.$set(L)},i(l){m||(A(n.$$.fragment,l),m=!0)},o(l){j(n.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a(t),a(i)),H(n,l)}}}function qn(x){let e=`
            interface IConfidential {}
            class DossierMedical implements IConfidential {}
            ...
            void logguerDansUnFichier(Object p) {
                if (p instanceof IConfidential) {
                    return; // On ne loggue pas les informations confidentielles
                }
            }
            `,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Pn(x){let e,o="Les interfaces marqueurs",s,t,$=`Une interface sans méthode est appelée une interface marqueur. <br/>
			Elle est utilisée pour étiqueter une classe.`,i,n,m="On les utilise ainsi",l,f,L,u,p=`Rappelez-vous, comme on peut implémenter plusieurs interfaces, n'importe quelle classe peut
			implémenter une interface marqueur.`,w,c,h=`Historiquement, Java utilisait beaucoup ça : Serializable, Cloneable sont des interfaces
			marqueurs du JDK. Aujourd'hui, on préfère les annotations (@Confidential) qui sont plus
			puissantes et flexibles. Mais le concept reste valide et vous le verrez dans du code legacy.`,M;return f=new ie({props:{className:"highlighter language-java",$$slots:{default:[qn]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("p"),n.textContent=m,l=v(),E(f.$$.fragment),L=v(),u=C("p"),u.textContent=p,w=v(),c=C("aside"),c.textContent=h,this.h()},l(q){e=_(q,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-9j49lb"&&(e.textContent=o),s=d(q),t=_(q,"P",{"data-svelte-h":!0}),b(t)!=="svelte-tx7gvv"&&(t.innerHTML=$),i=d(q),n=_(q,"P",{"data-svelte-h":!0}),b(n)!=="svelte-1qt13hy"&&(n.textContent=m),l=d(q),S(f.$$.fragment,q),L=d(q),u=_(q,"P",{"data-svelte-h":!0}),b(u)!=="svelte-7kxzjc"&&(u.textContent=p),w=d(q),c=_(q,"ASIDE",{class:!0,"data-svelte-h":!0}),b(c)!=="svelte-1rx16ok"&&(c.textContent=h),this.h()},h(){g(c,"class","notes")},m(q,I){r(q,e,I),r(q,s,I),r(q,t,I),r(q,i,I),r(q,n,I),r(q,l,I),T(f,q,I),r(q,L,I),r(q,u,I),r(q,w,I),r(q,c,I),M=!0},p(q,I){const N={};I&1&&(N.$$scope={dirty:I,ctx:q}),f.$set(N)},i(q){M||(A(f.$$.fragment,q),M=!0)},o(q){j(f.$$.fragment,q),M=!1},d(q){q&&(a(e),a(s),a(t),a(i),a(n),a(l),a(L),a(u),a(w),a(c)),H(f,q)}}}function Mn(x){let e,o="Conventions de nommage",s,t,$=`<li>Les interfaces sont nommées avec un nom qui commence par &quot;I&quot; suivi d&#39;un nom.</li> <li>Le nom est un adjectif ou un nom qui décrit un comportement.</li> <li>Exemple :
				<ul><li>IVolant</li> <li>IConfidentiel</li> <li><s>INageur</s></li> <li><s>Bateau</s></li> <li><s>Vitesse</s></li></ul></li>`,i,n,m=`Le préfixe "I" est une convention C#/Microsoft. En Java pur, on met souvent pas de préfixe.
			Mais dans beaucoup d'entreprises françaises, le "I" est la norme. Suivez la convention de
			votre équipe. Le JDK utilise des suffixes "-able" : Comparable, Serializable, Iterable. C'est
			aussi une bonne pratique.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("ul"),t.innerHTML=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1cx5ud7"&&(e.textContent=o),s=d(l),t=_(l,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-7652xk"&&(t.innerHTML=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1js4lj4"&&(n.textContent=m),this.h()},h(){g(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function Hn(x){let e,o="Les interfaces",s,t,$,i,n,m,l,f,L,u,p,w,c,h,M,q,I,N,Q,X,V,F,ne;return t=new B({props:{$$slots:{default:[cn]},$$scope:{ctx:x}}}),i=new B({props:{$$slots:{default:[fn]},$$scope:{ctx:x}}}),m=new B({props:{$$slots:{default:[pn]},$$scope:{ctx:x}}}),f=new B({props:{$$slots:{default:[mn]},$$scope:{ctx:x}}}),u=new B({props:{$$slots:{default:[dn]},$$scope:{ctx:x}}}),w=new B({props:{$$slots:{default:[_n]},$$scope:{ctx:x}}}),h=new B({props:{$$slots:{default:[hn]},$$scope:{ctx:x}}}),q=new B({props:{$$slots:{default:[bn]},$$scope:{ctx:x}}}),N=new B({props:{$$slots:{default:[wn]},$$scope:{ctx:x}}}),X=new B({props:{$$slots:{default:[Pn]},$$scope:{ctx:x}}}),F=new B({props:{$$slots:{default:[Mn]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment),$=v(),E(i.$$.fragment),n=v(),E(m.$$.fragment),l=v(),E(f.$$.fragment),L=v(),E(u.$$.fragment),p=v(),E(w.$$.fragment),c=v(),E(h.$$.fragment),M=v(),E(q.$$.fragment),I=v(),E(N.$$.fragment),Q=v(),E(X.$$.fragment),V=v(),E(F.$$.fragment)},l(U){e=_(U,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-lczfm4"&&(e.textContent=o),s=d(U),S(t.$$.fragment,U),$=d(U),S(i.$$.fragment,U),n=d(U),S(m.$$.fragment,U),l=d(U),S(f.$$.fragment,U),L=d(U),S(u.$$.fragment,U),p=d(U),S(w.$$.fragment,U),c=d(U),S(h.$$.fragment,U),M=d(U),S(q.$$.fragment,U),I=d(U),S(N.$$.fragment,U),Q=d(U),S(X.$$.fragment,U),V=d(U),S(F.$$.fragment,U)},m(U,le){r(U,e,le),r(U,s,le),T(t,U,le),r(U,$,le),T(i,U,le),r(U,n,le),T(m,U,le),r(U,l,le),T(f,U,le),r(U,L,le),T(u,U,le),r(U,p,le),T(w,U,le),r(U,c,le),T(h,U,le),r(U,M,le),T(q,U,le),r(U,I,le),T(N,U,le),r(U,Q,le),T(X,U,le),r(U,V,le),T(F,U,le),ne=!0},p(U,le){const ae={};le&1&&(ae.$$scope={dirty:le,ctx:U}),t.$set(ae);const fe={};le&1&&(fe.$$scope={dirty:le,ctx:U}),i.$set(fe);const re={};le&1&&(re.$$scope={dirty:le,ctx:U}),m.$set(re);const pe={};le&1&&(pe.$$scope={dirty:le,ctx:U}),f.$set(pe);const oe={};le&1&&(oe.$$scope={dirty:le,ctx:U}),u.$set(oe);const $e={};le&1&&($e.$$scope={dirty:le,ctx:U}),w.$set($e);const ce={};le&1&&(ce.$$scope={dirty:le,ctx:U}),h.$set(ce);const me={};le&1&&(me.$$scope={dirty:le,ctx:U}),q.$set(me);const R={};le&1&&(R.$$scope={dirty:le,ctx:U}),N.$set(R);const te={};le&1&&(te.$$scope={dirty:le,ctx:U}),X.$set(te);const J={};le&1&&(J.$$scope={dirty:le,ctx:U}),F.$set(J)},i(U){ne||(A(t.$$.fragment,U),A(i.$$.fragment,U),A(m.$$.fragment,U),A(f.$$.fragment,U),A(u.$$.fragment,U),A(w.$$.fragment,U),A(h.$$.fragment,U),A(q.$$.fragment,U),A(N.$$.fragment,U),A(X.$$.fragment,U),A(F.$$.fragment,U),ne=!0)},o(U){j(t.$$.fragment,U),j(i.$$.fragment,U),j(m.$$.fragment,U),j(f.$$.fragment,U),j(u.$$.fragment,U),j(w.$$.fragment,U),j(h.$$.fragment,U),j(q.$$.fragment,U),j(N.$$.fragment,U),j(X.$$.fragment,U),j(F.$$.fragment,U),ne=!1},d(U){U&&(a(e),a(s),a($),a(n),a(l),a(L),a(p),a(c),a(M),a(I),a(Q),a(V)),H(t,U),H(i,U),H(m,U),H(f,U),H(u,U),H(w,U),H(h,U),H(q,U),H(N,U),H(X,U),H(F,U)}}}function jn(x){let e,o,s,t;return e=new B({props:{$$slots:{default:[un]},$$scope:{ctx:x}}}),s=new B({props:{$$slots:{default:[Hn]},$$scope:{ctx:x}}}),{c(){E(e.$$.fragment),o=v(),E(s.$$.fragment)},l($){S(e.$$.fragment,$),o=d($),S(s.$$.fragment,$)},m($,i){T(e,$,i),r($,o,i),T(s,$,i),t=!0},p($,[i]){const n={};i&1&&(n.$$scope={dirty:i,ctx:$}),e.$set(n);const m={};i&1&&(m.$$scope={dirty:i,ctx:$}),s.$set(m)},i($){t||(A(e.$$.fragment,$),A(s.$$.fragment,$),t=!0)},o($){j(e.$$.fragment,$),j(s.$$.fragment,$),t=!1},d($){$&&a(o),H(e,$),H(s,$)}}}class An extends Be{constructor(e){super(),Fe(this,e,null,jn,Ne,{})}}function Tn(x){let e,o=`L'encapsulation est un concept fondamental de la programmation orientée objet. Elle consiste à
			cacher les détails internes d'une classe et à ne fournir qu'une interface publique pour
			interagir avec cette classe.`,s,t,$=`L'encapsulation, c'est comme une voiture : vous appuyez sur l'accélérateur, vous n'avez pas
			besoin de savoir comment fonctionne le moteur. C'est un principe de "boîte noire" : on expose
			ce qu'il faut, on cache le reste. Historiquement, ce concept vient de la modularité en génie
			logiciel des années 70.`;return{c(){e=C("p"),e.textContent=o,s=v(),t=C("aside"),t.textContent=$,this.h()},l(i){e=_(i,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1tljpvn"&&(e.textContent=o),s=d(i),t=_(i,"ASIDE",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1drycps"&&(t.textContent=$),this.h()},h(){g(t,"class","notes")},m(i,n){r(i,e,n),r(i,s,n),r(i,t,n)},p:O,d(i){i&&(a(e),a(s),a(t))}}}function Sn(x){let e,o=`L'encapsulation permet de protéger les données et de contrôler leur accès. Elle rend également
			le code plus modulaire et plus facile à maintenir.`,s,t,$=`En entreprise, c'est crucial. Imaginez une équipe de 20 développeurs : si tout le monde peut
			modifier n'importe quel attribut, c'est le chaos. L'encapsulation impose des "contrats" entre
			les développeurs. On définit ce qui peut être utilisé et comment. Anecdote : beaucoup de bugs
			critiques en production viennent de données modifiées "par accident" car non protégées.`;return{c(){e=C("p"),e.textContent=o,s=v(),t=C("aside"),t.textContent=$,this.h()},l(i){e=_(i,"P",{"data-svelte-h":!0}),b(e)!=="svelte-doneo5"&&(e.textContent=o),s=d(i),t=_(i,"ASIDE",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-niiwx"&&(t.textContent=$),this.h()},h(){g(t,"class","notes")},m(i,n){r(i,e,n),r(i,s,n),r(i,t,n)},p:O,d(i){i&&(a(e),a(s),a(t))}}}function En(x){let e,o=`Pour encapsuler des données, on utilise des modificateurs d'accès qui déterminent la
			visibilité des attributs et des méthodes d'une classe.`,s,t,$="<li><code>public</code> : accessible depuis n&#39;importe où</li> <li><code>private</code> : accessible uniquement depuis la classe elle-même</li> <li><code>protected</code> : accessible depuis la classe et ses sous-classes</li>",i,n,m=`Il existe aussi le niveau "package-private" (sans modificateur) : accessible uniquement dans
			le même package. En pratique, 90% du temps vous utiliserez private pour les attributs et
			public pour les méthodes d'interface. Le protected est surtout utile dans les
			bibliothèques/frameworks où on veut permettre l'extension par héritage.`;return{c(){e=C("p"),e.textContent=o,s=v(),t=C("ul"),t.innerHTML=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1dtmw8t"&&(e.textContent=o),s=d(l),t=_(l,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-be97eu"&&(t.innerHTML=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-wx1qlj"&&(n.textContent=m),this.h()},h(){g(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function In(x){let e=`
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
			méthodes. Ça vous permettra d'ajouter de la logique plus tard.`,m;return t=new ie({props:{$$slots:{default:[In]},$$scope:{ctx:x}}}),{c(){e=C("p"),e.textContent=o,s=v(),E(t.$$.fragment),$=v(),i=C("aside"),i.textContent=n,this.h()},l(l){e=_(l,"P",{"data-svelte-h":!0}),b(e)!=="svelte-sf7cl9"&&(e.textContent=o),s=d(l),S(t.$$.fragment,l),$=d(l),i=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-19iwzui"&&(i.textContent=n),this.h()},h(){g(i,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),T(t,l,f),r(l,$,f),r(l,i,f),m=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){m||(A(t.$$.fragment,l),m=!0)},o(l){j(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a($),a(i)),H(t,l)}}}function Vn(x){let e,o=`Dans cet exemple, les attributs <code>nom</code> et <code>age</code> sont privés et ne peuvent
			pas être accédés directement depuis l&#39;extérieur. On utilise des méthodes publiques,
			<code>getNom</code>, <code>setNom</code>, <code>getAge</code> et <code>setAge</code>, pour y
			accéder et les modifier.`,s,t,$=`Fondamentalement, <code>getNom</code> et <code>setNom</code> sont de simples méthodes, mais
			compte tenu de leur rôle, on les appelle des <i>accesseurs</i> et des <i>mutateurs</i>.`;return{c(){e=C("p"),e.innerHTML=o,s=v(),t=C("p"),t.innerHTML=$,this.h()},l(i){e=_(i,"P",{"data-svelte-h":!0}),b(e)!=="svelte-tuu3n3"&&(e.innerHTML=o),s=d(i),t=_(i,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-t116p3"&&(t.innerHTML=$),this.h()},h(){g(t,"class","text-important")},m(i,n){r(i,e,n),r(i,s,n),r(i,t,n)},p:O,d(i){i&&(a(e),a(s),a(t))}}}function kn(x){let e=`
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
			(@NotNull, @Min, @Max) au lieu de coder à la main.`,m;return t=new ie({props:{$$slots:{default:[kn]},$$scope:{ctx:x}}}),{c(){e=C("p"),e.innerHTML=o,s=v(),E(t.$$.fragment),$=v(),i=C("aside"),i.textContent=n,this.h()},l(l){e=_(l,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1yoywng"&&(e.innerHTML=o),s=d(l),S(t.$$.fragment,l),$=d(l),i=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-phtreb"&&(i.textContent=n),this.h()},h(){g(i,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),T(t,l,f),r(l,$,f),r(l,i,f),m=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){m||(A(t.$$.fragment,l),m=!0)},o(l){j(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a($),a(i)),H(t,l)}}}function On(x){let e,o=`L&#39;utilisation du modificateur <code>protected</code> permet aux classes dérivées d&#39;accéder aux attributs
			et méthodes de la classe parente. Cela est utile lorsque l&#39;on souhaite permettre à des sous-classes
			d&#39;utiliser ou de modifier des données tout en les protégeant de l&#39;accès direct extérieur.`,s,t,$=`Attention : protected ne veut pas dire "accessible seulement aux sous-classes". En Java,
			protected est aussi accessible depuis le même package ! C'est une subtilité souvent oubliée.
			Bonne pratique : préférez private + getter protected si vous voulez vraiment contrôler
			l'accès.`;return{c(){e=C("p"),e.innerHTML=o,s=v(),t=C("aside"),t.textContent=$,this.h()},l(i){e=_(i,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1om2flv"&&(e.innerHTML=o),s=d(i),t=_(i,"ASIDE",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1l5eyve"&&(t.textContent=$),this.h()},h(){g(t,"class","notes")},m(i,n){r(i,e,n),r(i,s,n),r(i,t,n)},p:O,d(i){i&&(a(e),a(s),a(t))}}}function Un(x){let e=`
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
			d&#39;y accéder dans sa méthode <code>aboyer</code>.`,$;return e=new ie({props:{$$slots:{default:[Un]},$$scope:{ctx:x}}}),{c(){E(e.$$.fragment),o=v(),s=C("p"),s.innerHTML=t},l(i){S(e.$$.fragment,i),o=d(i),s=_(i,"P",{"data-svelte-h":!0}),b(s)!=="svelte-pqjf38"&&(s.innerHTML=t)},m(i,n){T(e,i,n),r(i,o,n),r(i,s,n),$=!0},p(i,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:i}),e.$set(m)},i(i){$||(A(e.$$.fragment,i),$=!0)},o(i){j(e.$$.fragment,i),$=!1},d(i){i&&(a(o),a(s)),H(e,i)}}}function Jn(x){let e=`
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
			l'interface publique.`,L;return t=new ie({props:{$$slots:{default:[Jn]},$$scope:{ctx:x}}}),{c(){e=C("p"),e.textContent=o,s=v(),E(t.$$.fragment),$=v(),i=C("p"),i.innerHTML=n,m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"P",{"data-svelte-h":!0}),b(e)!=="svelte-usm7ui"&&(e.textContent=o),s=d(u),S(t.$$.fragment,u),$=d(u),i=_(u,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-1hber6c"&&(i.innerHTML=n),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-ey8qs8"&&(l.textContent=f),this.h()},h(){g(i,"class","smaller"),g(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),T(t,u,p),r(u,$,p),r(u,i,p),r(u,m,p),r(u,l,p),L=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),t.$set(w)},i(u){L||(A(t.$$.fragment,u),L=!0)},o(u){j(t.$$.fragment,u),L=!1},d(u){u&&(a(e),a(s),a($),a(i),a(m),a(l)),H(t,u)}}}function Bn(x){let e,o="Verbosité",s,t,$=`Le Java est parfois critiqué pour sa verbosité. En effet, le code Java peut sembler plus long
			et plus complexe que d'autres langages.`,i,n,m=`Vous devez écrire environ 7 lignes pour déclarer un simple attribut avec ses accesseurs et
			mutateurs.`,l,f,L=`C'est le principal reproche fait à Java. Python ou Kotlin font ça en 1 ligne. Mais Java 14+ a
			introduit les Records qui réduisent beaucoup ce boilerplate. Et les IDE modernes génèrent tout
			ça en 2 clics. En pratique, ce n'est plus vraiment un problème. Lombok est aussi très
			populaire : @Data génère tous les getters/setters automatiquement.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("p"),n.textContent=m,l=v(),f=C("aside"),f.textContent=L,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-11a3931"&&(e.textContent=o),s=d(u),t=_(u,"P",{"data-svelte-h":!0}),b(t)!=="svelte-eslzxf"&&(t.textContent=$),i=d(u),n=_(u,"P",{"data-svelte-h":!0}),b(n)!=="svelte-ishs47"&&(n.textContent=m),l=d(u),f=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-76j7no"&&(f.textContent=L),this.h()},h(){g(f,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),r(u,n,p),r(u,l,p),r(u,f,p)},p:O,d(u){u&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f))}}}function Fn(x){let e=`
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
			faut le faire.`,L;return $=new ie({props:{$$slots:{default:[Fn]},$$scope:{ctx:x}}}),n=new ie({props:{$$slots:{default:[Gn]},$$scope:{ctx:x}}}),{c(){e=C("p"),e.textContent=o,s=v(),t=C("div"),E($.$$.fragment),i=v(),E(n.$$.fragment),m=v(),l=C("p"),l.textContent=f,this.h()},l(u){e=_(u,"P",{"data-svelte-h":!0}),b(e)!=="svelte-v898e4"&&(e.textContent=o),s=d(u),t=_(u,"DIV",{class:!0});var p=ue(t);S($.$$.fragment,p),i=d(p),S(n.$$.fragment,p),p.forEach(a),m=d(u),l=_(u,"P",{"data-svelte-h":!0}),b(l)!=="svelte-9ubtus"&&(l.textContent=f),this.h()},h(){g(t,"class","flex flex-row")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),T($,t,null),ee(t,i),T(n,t,null),r(u,m,p),r(u,l,p),L=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),$.$set(w);const c={};p&1&&(c.$$scope={dirty:p,ctx:u}),n.$set(c)},i(u){L||(A($.$$.fragment,u),A(n.$$.fragment,u),L=!0)},o(u){j($.$$.fragment,u),j(n.$$.fragment,u),L=!1},d(u){u&&(a(e),a(s),a(t),a(m),a(l)),H($),H(n)}}}function Kn(x){let e=`
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
			Point of Change.`,L;return n=new ie({props:{$$slots:{default:[Kn]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),E(n.$$.fragment),m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1ky5g9v"&&(e.textContent=o),s=d(u),t=_(u,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1qmbise"&&(t.textContent=$),i=d(u),S(n.$$.fragment,u),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-gfpvu8"&&(l.textContent=f),this.h()},h(){g(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),T(n,u,p),r(u,m,p),r(u,l,p),L=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),n.$set(w)},i(u){L||(A(n.$$.fragment,u),L=!0)},o(u){j(n.$$.fragment,u),L=!1},d(u){u&&(a(e),a(s),a(t),a(i),a(m),a(l)),H(n,u)}}}function Yn(x){let e,o="Et maintenant ?",s,t,$="Vers la généralisation et l'héritage";return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,this.h()},l(i){e=_(i,"H2",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-1m9nj2p"&&(e.textContent=o),s=d(i),t=_(i,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-b0r7rg"&&(t.textContent=$),this.h()},h(){g(e,"class","text-5xl"),g(t,"class","text-2xl text-gray-400")},m(i,n){r(i,e,n),r(i,s,n),r(i,t,n)},p:O,d(i){i&&(a(e),a(s),a(t))}}}function Wn(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function yn(x){let e,o="Le problème de la duplication",s,t,$="Imaginez que vous devez modéliser plusieurs types de comptes bancaires :",i,n,m,l,f,L,u,p="😱 Beaucoup de code dupliqué !",w;return m=new ie({props:{class:"language-java",$$slots:{default:[Wn]},$$scope:{ctx:x}}}),f=new ie({props:{class:"language-java",$$slots:{default:[Zn]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("div"),E(m.$$.fragment),l=v(),E(f.$$.fragment),L=v(),u=C("p"),u.textContent=p,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1121kts"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1k7fi1x"&&(t.textContent=$),i=d(c),n=_(c,"DIV",{class:!0});var h=ue(n);S(m.$$.fragment,h),l=d(h),S(f.$$.fragment,h),h.forEach(a),L=d(c),u=_(c,"P",{class:!0,"data-svelte-h":!0}),b(u)!=="svelte-1kobn2k"&&(u.textContent=p),this.h()},h(){g(n,"class","grid grid-cols-2 gap-4 mt-6"),g(u,"class","fragment text-red-400 mt-4 font-bold")},m(c,h){r(c,e,h),r(c,s,h),r(c,t,h),r(c,i,h),r(c,n,h),T(m,n,null),ee(n,l),T(f,n,null),r(c,L,h),r(c,u,h),w=!0},p(c,h){const M={};h&1&&(M.$$scope={dirty:h,ctx:c}),m.$set(M);const q={};h&1&&(q.$$scope={dirty:h,ctx:c}),f.$set(q)},i(c){w||(A(m.$$.fragment,c),A(f.$$.fragment,c),w=!0)},o(c){j(m.$$.fragment,c),j(f.$$.fragment,c),w=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(L),a(u)),H(m),H(f)}}}function ei(x){let e,o="Généraliser les concepts",s,t,$='En observant les classes, on remarque des <span class="text-important">points communs</span> :',i,n,m='<li class="fragment">Tous les comptes ont un numéro, un solde, un titulaire</li> <li class="fragment">Tous peuvent déposer et retirer de l&#39;argent</li> <li class="fragment">Seul le calcul des intérêts diffère</li>',l,f,L=`💡 On peut extraire un concept <span class="text-important">plus général</span> :
			<code>CompteBancaire</code>`,u,p,w="C&#39;est la <b>généralisation</b> qui mène naturellement à l&#39;<b>héritage</b> !";return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("ul"),n.innerHTML=m,l=v(),f=C("p"),f.innerHTML=L,u=v(),p=C("p"),p.innerHTML=w,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-mkht2s"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-s94fqs"&&(t.innerHTML=$),i=d(c),n=_(c,"UL",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1txundk"&&(n.innerHTML=m),l=d(c),f=_(c,"P",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-mlbnsz"&&(f.innerHTML=L),u=d(c),p=_(c,"P",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-1e3gzbu"&&(p.innerHTML=w),this.h()},h(){g(n,"class","text-xl mt-6"),g(f,"class","fragment mt-8 text-accent-200 font-bold"),g(p,"class","fragment text-important")},m(c,h){r(c,e,h),r(c,s,h),r(c,t,h),r(c,i,h),r(c,n,h),r(c,l,h),r(c,f,h),r(c,u,h),r(c,p,h)},p:O,d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f),a(u),a(p))}}}function ti(x){let e=`
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
			les <span class="text-important">spécificités</span> dans les classes dérivées.`,m;return t=new Ie({props:{$$slots:{default:[ti]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment),$=v(),i=C("p"),i.innerHTML=n,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-14isadv"&&(e.textContent=o),s=d(l),S(t.$$.fragment,l),$=d(l),i=_(l,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-lecgmk"&&(i.innerHTML=n),this.h()},h(){g(i,"class","fragment mt-4")},m(l,f){r(l,e,f),r(l,s,f),T(t,l,f),r(l,$,f),r(l,i,f),m=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){m||(A(t.$$.fragment,l),m=!0)},o(l){j(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a($),a(i)),H(t,l)}}}function li(x){let e,o="Récapitulatif",s,t,$='<p class="fragment">✅ L&#39;<span class="text-important">encapsulation</span> protège vos données</p> <p class="fragment mt-4">✅ La <span class="text-important">généralisation</span> évite la duplication</p> <p class="fragment mt-4">✅ L&#39;<span class="text-important">héritage</span> structure votre code</p>',i,n,m="🔮 Voyons maintenant comment implémenter cela en Java !";return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("div"),t.innerHTML=$,i=v(),n=C("p"),n.textContent=m,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-ri7iuh"&&(e.textContent=o),s=d(l),t=_(l,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-126wtu4"&&(t.innerHTML=$),i=d(l),n=_(l,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-15gbfwm"&&(n.textContent=m),this.h()},h(){g(t,"class","text-xl"),g(n,"class","fragment mt-8 text-accent-200 text-2xl font-bold")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function ni(x){let e,o="Encapsulation",s,t,$,i,n,m,l,f,L,u,p,w,c,h,M,q,I,N,Q,X,V,F,ne,U,le,ae,fe,re,pe,oe,$e,ce,me,R,te;return t=new B({props:{$$slots:{default:[Tn]},$$scope:{ctx:x}}}),i=new B({props:{$$slots:{default:[Sn]},$$scope:{ctx:x}}}),m=new B({props:{$$slots:{default:[En]},$$scope:{ctx:x}}}),f=new B({props:{$$slots:{default:[Dn]},$$scope:{ctx:x}}}),u=new B({props:{$$slots:{default:[Vn]},$$scope:{ctx:x}}}),w=new B({props:{$$slots:{default:[zn]},$$scope:{ctx:x}}}),h=new B({props:{$$slots:{default:[On]},$$scope:{ctx:x}}}),q=new B({props:{$$slots:{default:[Rn]},$$scope:{ctx:x}}}),N=new B({props:{$$slots:{default:[Nn]},$$scope:{ctx:x}}}),X=new B({props:{data_background_color:"#00353F",$$slots:{default:[Bn]},$$scope:{ctx:x}}}),F=new B({props:{data_background_color:"#00353F",$$slots:{default:[Qn]},$$scope:{ctx:x}}}),U=new B({props:{$$slots:{default:[Xn]},$$scope:{ctx:x}}}),ae=new B({props:{data_background_color:"#1a1a2e",$$slots:{default:[Yn]},$$scope:{ctx:x}}}),re=new B({props:{$$slots:{default:[yn]},$$scope:{ctx:x}}}),oe=new B({props:{$$slots:{default:[ei]},$$scope:{ctx:x}}}),ce=new B({props:{$$slots:{default:[si]},$$scope:{ctx:x}}}),R=new B({props:{$$slots:{default:[li]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment),$=v(),E(i.$$.fragment),n=v(),E(m.$$.fragment),l=v(),E(f.$$.fragment),L=v(),E(u.$$.fragment),p=v(),E(w.$$.fragment),c=v(),E(h.$$.fragment),M=v(),E(q.$$.fragment),I=v(),E(N.$$.fragment),Q=v(),E(X.$$.fragment),V=v(),E(F.$$.fragment),ne=v(),E(U.$$.fragment),le=v(),E(ae.$$.fragment),fe=v(),E(re.$$.fragment),pe=v(),E(oe.$$.fragment),$e=v(),E(ce.$$.fragment),me=v(),E(R.$$.fragment)},l(J){e=_(J,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-d8x7o6"&&(e.textContent=o),s=d(J),S(t.$$.fragment,J),$=d(J),S(i.$$.fragment,J),n=d(J),S(m.$$.fragment,J),l=d(J),S(f.$$.fragment,J),L=d(J),S(u.$$.fragment,J),p=d(J),S(w.$$.fragment,J),c=d(J),S(h.$$.fragment,J),M=d(J),S(q.$$.fragment,J),I=d(J),S(N.$$.fragment,J),Q=d(J),S(X.$$.fragment,J),V=d(J),S(F.$$.fragment,J),ne=d(J),S(U.$$.fragment,J),le=d(J),S(ae.$$.fragment,J),fe=d(J),S(re.$$.fragment,J),pe=d(J),S(oe.$$.fragment,J),$e=d(J),S(ce.$$.fragment,J),me=d(J),S(R.$$.fragment,J)},m(J,se){r(J,e,se),r(J,s,se),T(t,J,se),r(J,$,se),T(i,J,se),r(J,n,se),T(m,J,se),r(J,l,se),T(f,J,se),r(J,L,se),T(u,J,se),r(J,p,se),T(w,J,se),r(J,c,se),T(h,J,se),r(J,M,se),T(q,J,se),r(J,I,se),T(N,J,se),r(J,Q,se),T(X,J,se),r(J,V,se),T(F,J,se),r(J,ne,se),T(U,J,se),r(J,le,se),T(ae,J,se),r(J,fe,se),T(re,J,se),r(J,pe,se),T(oe,J,se),r(J,$e,se),T(ce,J,se),r(J,me,se),T(R,J,se),te=!0},p(J,se){const de={};se&1&&(de.$$scope={dirty:se,ctx:J}),t.$set(de);const he={};se&1&&(he.$$scope={dirty:se,ctx:J}),i.$set(he);const ve={};se&1&&(ve.$$scope={dirty:se,ctx:J}),m.$set(ve);const ge={};se&1&&(ge.$$scope={dirty:se,ctx:J}),f.$set(ge);const xe={};se&1&&(xe.$$scope={dirty:se,ctx:J}),u.$set(xe);const be={};se&1&&(be.$$scope={dirty:se,ctx:J}),w.$set(be);const z={};se&1&&(z.$$scope={dirty:se,ctx:J}),h.$set(z);const W={};se&1&&(W.$$scope={dirty:se,ctx:J}),q.$set(W);const k={};se&1&&(k.$$scope={dirty:se,ctx:J}),N.$set(k);const Y={};se&1&&(Y.$$scope={dirty:se,ctx:J}),X.$set(Y);const Le={};se&1&&(Le.$$scope={dirty:se,ctx:J}),F.$set(Le);const we={};se&1&&(we.$$scope={dirty:se,ctx:J}),U.$set(we);const qe={};se&1&&(qe.$$scope={dirty:se,ctx:J}),ae.$set(qe);const Pe={};se&1&&(Pe.$$scope={dirty:se,ctx:J}),re.$set(Pe);const Me={};se&1&&(Me.$$scope={dirty:se,ctx:J}),oe.$set(Me);const He={};se&1&&(He.$$scope={dirty:se,ctx:J}),ce.$set(He);const D={};se&1&&(D.$$scope={dirty:se,ctx:J}),R.$set(D)},i(J){te||(A(t.$$.fragment,J),A(i.$$.fragment,J),A(m.$$.fragment,J),A(f.$$.fragment,J),A(u.$$.fragment,J),A(w.$$.fragment,J),A(h.$$.fragment,J),A(q.$$.fragment,J),A(N.$$.fragment,J),A(X.$$.fragment,J),A(F.$$.fragment,J),A(U.$$.fragment,J),A(ae.$$.fragment,J),A(re.$$.fragment,J),A(oe.$$.fragment,J),A(ce.$$.fragment,J),A(R.$$.fragment,J),te=!0)},o(J){j(t.$$.fragment,J),j(i.$$.fragment,J),j(m.$$.fragment,J),j(f.$$.fragment,J),j(u.$$.fragment,J),j(w.$$.fragment,J),j(h.$$.fragment,J),j(q.$$.fragment,J),j(N.$$.fragment,J),j(X.$$.fragment,J),j(F.$$.fragment,J),j(U.$$.fragment,J),j(ae.$$.fragment,J),j(re.$$.fragment,J),j(oe.$$.fragment,J),j(ce.$$.fragment,J),j(R.$$.fragment,J),te=!1},d(J){J&&(a(e),a(s),a($),a(n),a(l),a(L),a(p),a(c),a(M),a(I),a(Q),a(V),a(ne),a(le),a(fe),a(pe),a($e),a(me)),H(t,J),H(i,J),H(m,J),H(f,J),H(u,J),H(w,J),H(h,J),H(q,J),H(N,J),H(X,J),H(F,J),H(U,J),H(ae,J),H(re,J),H(oe,J),H(ce,J),H(R,J)}}}function ii(x){let e,o;return e=new B({props:{$$slots:{default:[ni]},$$scope:{ctx:x}}}),{c(){E(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,t){T(e,s,t),o=!0},p(s,[t]){const $={};t&1&&($.$$scope={dirty:t,ctx:s}),e.$set($)},i(s){o||(A(e.$$.fragment,s),o=!0)},o(s){j(e.$$.fragment,s),o=!1},d(s){H(e,s)}}}class ai extends Be{constructor(e){super(),Fe(this,e,null,ii,Ne,{})}}function ri(x){let e,o="Représenter le monde réel",s,t,$='La POO vise à <span class="text-important">modéliser des concepts du monde réel</span> dans notre code.',i,n,m='<div class="fragment"><h4 class="text-accent-200">🏢 En entreprise</h4> <ul class="text-xl"><li>Un <b>Client</b></li> <li>Une <b>Facture</b></li> <li>Une <b>Transaction</b></li> <li>Un <b>Produit</b></li></ul></div> <div class="fragment"><h4 class="text-accent-200">🎮 Dans un jeu</h4> <ul class="text-xl"><li>Un <b>Joueur</b></li> <li>Un <b>Ennemi</b></li> <li>Une <b>Arme</b></li> <li>Un <b>Niveau</b></li></ul></div>',l,f,L="Chaque concept devient une <b>classe</b>, chaque instance concrète devient un <b>objet</b>.",u,p,w=`La POO est née de ce besoin : les programmeurs voulaient modéliser le monde réel dans leurs programmes.\r
			Avant, on avait des structures de données et des fonctions séparées. Maintenant, tout est regroupé.\r
			C'est plus intuitif pour l'humain : on pense en termes d'objets, pas en termes de bits.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("div"),n.innerHTML=m,l=v(),f=C("p"),f.innerHTML=L,u=v(),p=C("aside"),p.textContent=w,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1nsqnl5"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-gu1hhe"&&(t.innerHTML=$),i=d(c),n=_(c,"DIV",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-ssqwsa"&&(n.innerHTML=m),l=d(c),f=_(c,"P",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-ys061m"&&(f.innerHTML=L),u=d(c),p=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-10ve9bx"&&(p.textContent=w),this.h()},h(){g(n,"class","grid grid-cols-2 gap-6 mt-8"),g(f,"class","fragment mt-8 text-important font-bold"),g(p,"class","notes")},m(c,h){r(c,e,h),r(c,s,h),r(c,t,h),r(c,i,h),r(c,n,h),r(c,l,h),r(c,f,h),r(c,u,h),r(c,p,h)},p:O,d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f),a(u),a(p))}}}function ui(x){let e,o="Qu'est-ce qu'un objet ?",s,t,$='Un <span class="text-important">objet</span> est une entité qui regroupe :',i,n,m='<li class="fragment"><b>Des données</b> → les <span class="text-important">attributs</span></li> <li class="fragment"><b>Des comportements</b> → les <span class="text-important">méthodes</span></li>',l,f,L='Un objet est une <b>instance</b> d&#39;une <span class="text-important">classe</span>.',u,p,w=`La classe c'est le plan, l'objet c'est la maison construite à partir du plan.\r
			On peut construire plusieurs maisons à partir du même plan.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("ul"),n.innerHTML=m,l=v(),f=C("p"),f.innerHTML=L,u=v(),p=C("aside"),p.textContent=w,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1j2xnsl"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-ikoph5"&&(t.innerHTML=$),i=d(c),n=_(c,"UL",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-urcwzy"&&(n.innerHTML=m),l=d(c),f=_(c,"P",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-126jdov"&&(f.innerHTML=L),u=d(c),p=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-1j9siwx"&&(p.textContent=w),this.h()},h(){g(n,"class","mt-4"),g(f,"class","fragment mt-6"),g(p,"class","notes")},m(c,h){r(c,e,h),r(c,s,h),r(c,t,h),r(c,i,h),r(c,n,h),r(c,l,h),r(c,f,h),r(c,u,h),r(c,p,h)},p:O,d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f),a(u),a(p))}}}function oi(x){let e=`
class Client {
    // Attributs (données)
    String nom;
    String email;
    List<Commande> commandes;
    
    // Méthodes (comportements)
    void passerCommande() {...}
    void consulterFactures() {...}
}
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function ci(x){let e,o="Exemple concret : un Client",s,t,$,i='<h4 class="text-accent-200">Dans le monde réel</h4> <ul class="text-xl"><li>Nom, prénom</li> <li>Email, téléphone</li> <li>Historique d&#39;achats</li> <li>Peut passer commande</li> <li>Peut consulter ses factures</li></ul>',n,m,l,f="En POO",L,u,p,w,c="💡 La classe modélise le <b>concept</b>, l&#39;objet représente une <b>instance concrète</b>.",h,M,q=`C'est un mapping 1:1 entre le métier et le code. Les analystes parlent de Client, les développeurs codent Client.\r
			C'est là toute la puissance de la POO : on parle le même langage que le métier.\r
			C'est la base du Domain-Driven Design (DDD) qu'on voit dans les entreprises modernes.`,I;return u=new ie({props:{$$slots:{default:[oi]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("div"),$=C("div"),$.innerHTML=i,n=v(),m=C("div"),l=C("h4"),l.textContent=f,L=v(),E(u.$$.fragment),p=v(),w=C("p"),w.innerHTML=c,h=v(),M=C("aside"),M.textContent=q,this.h()},l(N){e=_(N,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-19m1xis"&&(e.textContent=o),s=d(N),t=_(N,"DIV",{class:!0});var Q=ue(t);$=_(Q,"DIV",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-b6jw6w"&&($.innerHTML=i),n=d(Q),m=_(Q,"DIV",{class:!0});var X=ue(m);l=_(X,"H4",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-zddvi7"&&(l.textContent=f),L=d(X),S(u.$$.fragment,X),X.forEach(a),Q.forEach(a),p=d(N),w=_(N,"P",{class:!0,"data-svelte-h":!0}),b(w)!=="svelte-1afjqzm"&&(w.innerHTML=c),h=d(N),M=_(N,"ASIDE",{class:!0,"data-svelte-h":!0}),b(M)!=="svelte-1lbuzzl"&&(M.textContent=q),this.h()},h(){g($,"class","flex-1"),g(l,"class","text-accent-200"),g(m,"class","flex-1 fragment"),g(t,"class","flex flex-row gap-8 items-center"),g(w,"class","fragment mt-6 text-important"),g(M,"class","notes")},m(N,Q){r(N,e,Q),r(N,s,Q),r(N,t,Q),ee(t,$),ee(t,n),ee(t,m),ee(m,l),ee(m,L),T(u,m,null),r(N,p,Q),r(N,w,Q),r(N,h,Q),r(N,M,Q),I=!0},p(N,Q){const X={};Q&1&&(X.$$scope={dirty:Q,ctx:N}),u.$set(X)},i(N){I||(A(u.$$.fragment,N),I=!0)},o(N){j(u.$$.fragment,N),I=!1},d(N){N&&(a(e),a(s),a(t),a(p),a(w),a(h),a(M)),H(u)}}}function fi(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function $i(x){let e,o="Classe vs Objet",s,t,$='<div class="p-4 bg-accent-950 rounded-lg"><h4 class="text-important">📐 Classe</h4> <p class="text-xl mt-2">Le <b>plan</b>, le modèle</p> <p class="text-sm text-gray-400 mt-2">Définit les attributs et méthodes</p></div> <div class="p-4 bg-accent-950 rounded-lg"><h4 class="text-important">🏠 Objet</h4> <p class="text-xl mt-2">L&#39;<b>instance</b>, la réalisation</p> <p class="text-sm text-gray-400 mt-2">Créé à partir de la classe</p></div>',i,n,m;return n=new Ie({props:{className:"mt-6 fragment",$$slots:{default:[fi]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("div"),t.innerHTML=$,i=v(),E(n.$$.fragment),this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-aj9wlo"&&(e.textContent=o),s=d(l),t=_(l,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-17fw1f8"&&(t.innerHTML=$),i=d(l),S(n.$$.fragment,l),this.h()},h(){g(t,"class","grid grid-cols-2 gap-8 mt-6")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),T(n,l,f),m=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),n.$set(L)},i(l){m||(A(n.$$.fragment,l),m=!0)},o(l){j(n.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a(t),a(i)),H(n,l)}}}function pi(x){let e,o="Créer des objets",s,t,$="Le mot-clé new et les constructeurs",i,n,m=`Maintenant qu'on sait ce qu'est un objet, voyons comment en créer un.\r
			C'est la partie pratique : comment ça marche en mémoire, comment initialiser proprement.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-1mkb5o2"&&(e.textContent=o),s=d(l),t=_(l,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-4k1pcc"&&(t.textContent=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-q4shbn"&&(n.textContent=m),this.h()},h(){g(e,"class","text-5xl"),g(t,"class","text-2xl text-gray-400"),g(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function mi(x){let e=`
Personne jean = new Personne();
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function di(x){let e,o="Créer un objet avec new",s,t,$='Pour créer un objet, on utilise le mot-clé <code class="text-important">new</code> suivi du nom de la classe.',i,n,m,l,f='<p>Que se passe-t-il ?</p> <ol class="text-xl"><li class="fragment">Java alloue de la mémoire pour l&#39;objet</li> <li class="fragment">Le <b>constructeur</b> de la classe est appelé</li> <li class="fragment">L&#39;objet est prêt à être utilisé</li></ol>',L,u,p=`En interne, Java alloue de la mémoire dans le "heap" (tas). La variable jean contient une référence vers cet espace.\r
			Contrairement au C, vous n'avez pas à gérer la mémoire vous-même. Le Garbage Collector s'en charge.\r
			Chaque fois que vous écrivez "new", vous créez un NOUVEL objet en mémoire.`,w;return n=new ie({props:{$$slots:{default:[mi]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),E(n.$$.fragment),m=v(),l=C("div"),l.innerHTML=f,L=v(),u=C("aside"),u.textContent=p,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1b88vsb"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1d9k2wi"&&(t.innerHTML=$),i=d(c),S(n.$$.fragment,c),m=d(c),l=_(c,"DIV",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-u2udmp"&&(l.innerHTML=f),L=d(c),u=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(u)!=="svelte-11eo1e6"&&(u.textContent=p),this.h()},h(){g(l,"class","fragment mt-6"),g(u,"class","notes")},m(c,h){r(c,e,h),r(c,s,h),r(c,t,h),r(c,i,h),T(n,c,h),r(c,m,h),r(c,l,h),r(c,L,h),r(c,u,h),w=!0},p(c,h){const M={};h&1&&(M.$$scope={dirty:h,ctx:c}),n.$set(M)},i(c){w||(A(n.$$.fragment,c),w=!0)},o(c){j(n.$$.fragment,c),w=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(l),a(L),a(u)),H(n,c)}}}function vi(x){let e=`
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
			this fait référence à l'objet en cours de création.`,L;return n=new ie({props:{lines:"5-9|12",$$slots:{default:[vi]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),E(n.$$.fragment),m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1mde0ng"&&(e.textContent=o),s=d(u),t=_(u,"P",{"data-svelte-h":!0}),b(t)!=="svelte-acm114"&&(t.innerHTML=$),i=d(u),S(n.$$.fragment,u),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-czfue9"&&(l.textContent=f),this.h()},h(){g(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),T(n,u,p),r(u,m,p),r(u,l,p),L=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),n.$set(w)},i(u){L||(A(n.$$.fragment,u),L=!0)},o(u){j(n.$$.fragment,u),L=!1},d(u){u&&(a(e),a(s),a(t),a(i),a(m),a(l)),H(n,u)}}}function _i(x){let e=`
public Personne(String nom, String prenom, int age) {
    this.nom = nom;      // this.nom = attribut de l'objet
    this.prenom = prenom; // nom = paramètre du constructeur
    this.age = age;
}
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Ci(x){let e,o="Le mot-clé this",s,t,$='<code class="text-important">this</code> fait référence à l&#39;objet <b>courant</b>.',i,n,m,l,f="<code>this</code> permet de distinguer l&#39;attribut du paramètre quand ils ont le même nom.",L,u,p=`C'est une convention très courante : donner le même nom au paramètre et à l'attribut.\r
			Sans "this", le paramètre "cache" l'attribut (shadowing). this lève l'ambiguïté.\r
			Certains préfèrent préfixer les paramètres (pNom) ou les attributs (_nom). C'est une question de convention d'équipe.`,w;return n=new ie({props:{$$slots:{default:[_i]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),E(n.$$.fragment),m=v(),l=C("p"),l.innerHTML=f,L=v(),u=C("aside"),u.textContent=p,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-639qc6"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1d8cgp5"&&(t.innerHTML=$),i=d(c),S(n.$$.fragment,c),m=d(c),l=_(c,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-vxfnkp"&&(l.innerHTML=f),L=d(c),u=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(u)!=="svelte-1sk7s1j"&&(u.textContent=p),this.h()},h(){g(l,"class","fragment mt-4 text-accent-200"),g(u,"class","notes")},m(c,h){r(c,e,h),r(c,s,h),r(c,t,h),r(c,i,h),T(n,c,h),r(c,m,h),r(c,l,h),r(c,L,h),r(c,u,h),w=!0},p(c,h){const M={};h&1&&(M.$$scope={dirty:h,ctx:c}),n.$set(M)},i(c){w||(A(n.$$.fragment,c),w=!0)},o(c){j(n.$$.fragment,c),w=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(l),a(L),a(u)),H(n,c)}}}function hi(x){let e=`
public class Personne {
    String nom;
    int age;
    // Pas de constructeur défini → constructeur par défaut
}

Personne p = new Personne();  // ✅ OK
p.nom = "Jean";               // On initialise après
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function gi(x){let e,o="Constructeur par défaut",s,t,$="Si vous ne définissez aucun constructeur, Java en crée un <b>par défaut</b> (sans paramètres).",i,n,m,l,f="⚠️ Dès que vous définissez un constructeur, le constructeur par défaut disparaît !",L,u,p=`C'est un piège classique ! Si vous définissez Personne(String nom), alors new Personne() ne compile plus.\r
			Solution : définir explicitement un constructeur sans paramètres si vous en avez besoin.\r
			Les frameworks (Hibernate, Spring) ont souvent besoin du constructeur par défaut pour l'instanciation dynamique.`,w;return n=new ie({props:{$$slots:{default:[hi]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),E(n.$$.fragment),m=v(),l=C("p"),l.textContent=f,L=v(),u=C("aside"),u.textContent=p,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-u9v1v7"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-m9el1s"&&(t.innerHTML=$),i=d(c),S(n.$$.fragment,c),m=d(c),l=_(c,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-108fh85"&&(l.textContent=f),L=d(c),u=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(u)!=="svelte-1442ab0"&&(u.textContent=p),this.h()},h(){g(l,"class","fragment text-red-400 mt-4"),g(u,"class","notes")},m(c,h){r(c,e,h),r(c,s,h),r(c,t,h),r(c,i,h),T(n,c,h),r(c,m,h),r(c,l,h),r(c,L,h),r(c,u,h),w=!0},p(c,h){const M={};h&1&&(M.$$scope={dirty:h,ctx:c}),n.$set(M)},i(c){w||(A(n.$$.fragment,c),w=!0)},o(c){j(n.$$.fragment,c),w=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(l),a(L),a(u)),H(n,c)}}}function bi(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Li(x){let e,o="Surcharge de constructeurs",s,t,$="Une classe peut avoir <b>plusieurs constructeurs</b> avec des paramètres différents.",i,n,m,l,f="<code>this(...)</code> permet d&#39;appeler un autre constructeur de la même classe.",L,u,p=`C'est le "constructor chaining". Très utile pour éviter la duplication de code.\r
			Le this() doit être la première instruction du constructeur, comme super().\r
			On voit souvent ça avec des valeurs par défaut : le constructeur simple appelle le complet.`,w;return n=new ie({props:{lines:"6-10|12-15",$$slots:{default:[bi]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),E(n.$$.fragment),m=v(),l=C("p"),l.innerHTML=f,L=v(),u=C("aside"),u.textContent=p,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1v37pf9"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1x1viiv"&&(t.innerHTML=$),i=d(c),S(n.$$.fragment,c),m=d(c),l=_(c,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-sqjnx"&&(l.innerHTML=f),L=d(c),u=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(u)!=="svelte-1x33foq"&&(u.textContent=p),this.h()},h(){g(l,"class","fragment text-accent-200 mt-4"),g(u,"class","notes")},m(c,h){r(c,e,h),r(c,s,h),r(c,t,h),r(c,i,h),T(n,c,h),r(c,m,h),r(c,l,h),r(c,L,h),r(c,u,h),w=!0},p(c,h){const M={};h&1&&(M.$$scope={dirty:h,ctx:c}),n.$set(M)},i(c){w||(A(n.$$.fragment,c),w=!0)},o(c){j(n.$$.fragment,c),w=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(l),a(L),a(u)),H(n,c)}}}function wi(x){let e,o="Les références en Java",s,t,$="Comprendre ce que contient vraiment une variable",i,n,m=`Avant de continuer, il faut comprendre un concept fondamental.\r
			En Java, les variables d'objets ne contiennent pas l'objet lui-même... mais une référence vers l'objet.\r
			C'est comme une adresse postale vs la maison elle-même.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-w9ik6f"&&(e.textContent=o),s=d(l),t=_(l,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-19x3pgb"&&(t.textContent=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-28inpz"&&(n.textContent=m),this.h()},h(){g(e,"class","text-5xl"),g(t,"class","text-2xl text-gray-400"),g(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function qi(x){let e=`
Personne jean = new Personne("Jean");
Personne copie = jean;  // copie la RÉFÉRENCE, pas l'objet !

copie.setAge(30);
System.out.println(jean.getAge());  // Affiche 30 ! 😱
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Pi(x){let e,o="Une variable = une référence",s,t,$="Quand vous écrivez <code>Personne jean = new Personne();</code>, que se passe-t-il ?",i,n,m='<div class="fragment"><h4 class="text-accent-200">📍 La variable</h4> <p class="text-xl">Contient une <b>adresse mémoire</b></p> <p class="text-sm text-gray-400">(comme un numéro de casier)</p></div> <div class="fragment"><h4 class="text-accent-200">📦 L&#39;objet</h4> <p class="text-xl">Stocké ailleurs en mémoire (le <b>heap</b>)</p> <p class="text-sm text-gray-400">(le contenu du casier)</p></div>',l,f,L,u,p=`C'est LE piège des débutants. Deux variables peuvent pointer vers le même objet.\r
			Modifier via une variable modifie l'objet, visible depuis l'autre variable.\r
			C'est différent des types primitifs (int, double) qui sont copiés par valeur.`,w;return f=new ie({props:{class:"fragment mt-6",$$slots:{default:[qi]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("div"),n.innerHTML=m,l=v(),E(f.$$.fragment),L=v(),u=C("aside"),u.textContent=p,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1cxx8q6"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1led4kt"&&(t.innerHTML=$),i=d(c),n=_(c,"DIV",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-6gkr7d"&&(n.innerHTML=m),l=d(c),S(f.$$.fragment,c),L=d(c),u=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(u)!=="svelte-d4bv15"&&(u.textContent=p),this.h()},h(){g(n,"class","grid grid-cols-2 gap-8 mt-6"),g(u,"class","notes")},m(c,h){r(c,e,h),r(c,s,h),r(c,t,h),r(c,i,h),r(c,n,h),r(c,l,h),T(f,c,h),r(c,L,h),r(c,u,h),w=!0},p(c,h){const M={};h&1&&(M.$$scope={dirty:h,ctx:c}),f.$set(M)},i(c){w||(A(f.$$.fragment,c),w=!0)},o(c){j(f.$$.fragment,c),w=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(l),a(L),a(u)),H(f,c)}}}function Mi(x){let e=`
Personne personne = null;  // Aucun objet référencé

// C'est souvent le cas quand :
Personne resultat = chercherParNom("Toto");  // Pas trouvé → null
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Hi(x){let e,o="La valeur spéciale : null",s,t,$='Une variable peut ne pointer vers <b>rien</b>. C&#39;est la valeur <code class="text-important">null</code>.',i,n,m,l,f="⚠️ <code>null</code> signifie &quot;absence d&#39;objet&quot;. Ce n&#39;est pas un objet vide !",L,u,p=`Null c'est "rien", pas "vide". Une liste vide existe (0 éléments), null n'existe pas du tout.\r
			C'est une distinction cruciale. Null = pas de référence. Vide = objet qui ne contient rien.`,w;return n=new ie({props:{$$slots:{default:[Mi]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),E(n.$$.fragment),m=v(),l=C("p"),l.innerHTML=f,L=v(),u=C("aside"),u.textContent=p,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-upq93p"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-2fjoo4"&&(t.innerHTML=$),i=d(c),S(n.$$.fragment,c),m=d(c),l=_(c,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-yi5ddp"&&(l.innerHTML=f),L=d(c),u=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(u)!=="svelte-j2xogk"&&(u.textContent=p),this.h()},h(){g(l,"class","fragment mt-6 text-red-400 font-bold"),g(u,"class","notes")},m(c,h){r(c,e,h),r(c,s,h),r(c,t,h),r(c,i,h),T(n,c,h),r(c,m,h),r(c,l,h),r(c,L,h),r(c,u,h),w=!0},p(c,h){const M={};h&1&&(M.$$scope={dirty:h,ctx:c}),n.$set(M)},i(c){w||(A(n.$$.fragment,c),w=!0)},o(c){j(n.$$.fragment,c),w=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(l),a(L),a(u)),H(n,c)}}}function ji(x){let e=`
Personne personne = null;
personne.getNom();  // ❌ NullPointerException !

// Le message d'erreur :
// Exception in thread "main" java.lang.NullPointerException:
// Cannot invoke "Personne.getNom()" because "personne" is null
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Ai(x){let e=`
if (personne != null) {
    System.out.println(personne.getNom());
}
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Ti(x){let e,o="Le bug le plus fréquent : NullPointerException",s,t,$="Si vous appelez une méthode sur <code>null</code>... 💥",i,n,m,l,f,L="✅ Toujours vérifier avant d'utiliser :",u,p,w,c,h=`C'est LE bug numéro 1 en Java. Tony Hoare, l'inventeur de null, l'a appelé "son erreur à un milliard de dollars".\r
			Vous verrez NullPointerException des centaines de fois dans votre carrière. Apprenez à le débugger !\r
			Le message vous dit quelle variable est null. Remontez le fil pour comprendre pourquoi.`,M;return n=new ie({props:{$$slots:{default:[ji]},$$scope:{ctx:x}}}),p=new ie({props:{$$slots:{default:[Ai]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),E(n.$$.fragment),m=v(),l=C("div"),f=C("p"),f.textContent=L,u=v(),E(p.$$.fragment),w=v(),c=C("aside"),c.textContent=h,this.h()},l(q){e=_(q,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-v1skb"&&(e.textContent=o),s=d(q),t=_(q,"P",{"data-svelte-h":!0}),b(t)!=="svelte-rde3pg"&&(t.innerHTML=$),i=d(q),S(n.$$.fragment,q),m=d(q),l=_(q,"DIV",{class:!0});var I=ue(l);f=_(I,"P",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-10calxs"&&(f.textContent=L),u=d(I),S(p.$$.fragment,I),I.forEach(a),w=d(q),c=_(q,"ASIDE",{class:!0,"data-svelte-h":!0}),b(c)!=="svelte-hug8y1"&&(c.textContent=h),this.h()},h(){g(f,"class","text-green-400 font-bold"),g(l,"class","fragment mt-6"),g(c,"class","notes")},m(q,I){r(q,e,I),r(q,s,I),r(q,t,I),r(q,i,I),T(n,q,I),r(q,m,I),r(q,l,I),ee(l,f),ee(l,u),T(p,l,null),r(q,w,I),r(q,c,I),M=!0},p(q,I){const N={};I&1&&(N.$$scope={dirty:I,ctx:q}),n.$set(N);const Q={};I&1&&(Q.$$scope={dirty:I,ctx:q}),p.$set(Q)},i(q){M||(A(n.$$.fragment,q),A(p.$$.fragment,q),M=!0)},o(q){j(n.$$.fragment,q),j(p.$$.fragment,q),M=!1},d(q){q&&(a(e),a(s),a(t),a(i),a(m),a(l),a(w),a(c)),H(n,q),H(p)}}}function Si(x){let e=`
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
			Depuis Java 8, on a Optional pour mieux gérer l'absence de valeur.`,L;return t=new ie({props:{$$slots:{default:[Si]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment),$=v(),i=C("p"),i.innerHTML=n,m=v(),l=C("aside"),l.textContent=f,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1o2ciiy"&&(e.textContent=o),s=d(u),S(t.$$.fragment,u),$=d(u),i=_(u,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-i5ewro"&&(i.innerHTML=n),m=d(u),l=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1elh71j"&&(l.textContent=f),this.h()},h(){g(i,"class","fragment mt-4 text-accent-200"),g(l,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),T(t,u,p),r(u,$,p),r(u,i,p),r(u,m,p),r(u,l,p),L=!0},p(u,p){const w={};p&1&&(w.$$scope={dirty:p,ctx:u}),t.$set(w)},i(u){L||(A(t.$$.fragment,u),L=!0)},o(u){j(t.$$.fragment,u),L=!1},d(u){u&&(a(e),a(s),a($),a(i),a(m),a(l)),H(t,u)}}}function Ii(x){let e,o="Comparer des objets",s,t,$="== vs equals() : le piège classique",i,n,m=`Maintenant qu'on sait ce qu'est une référence, on peut comprendre un autre piège majeur.\r
			Comment comparer deux objets ? C'est plus subtil qu'il n'y paraît.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-14qtv6e"&&(e.textContent=o),s=d(l),t=_(l,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1plewz8"&&(t.textContent=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-5njids"&&(n.textContent=m),this.h()},h(){g(e,"class","text-5xl"),g(t,"class","text-2xl text-gray-400"),g(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function Di(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function ki(x){let e,o="Le piège de ==",s,t,$,i,n="<code>==</code> compare les <b>références</b> (les adresses mémoire), pas le contenu !",m,l,f,L,u=`a et b pointent vers deux objets différents en mémoire. Même si le contenu est identique, ce sont deux casiers différents.\r
			C'est le piège classique des débutants avec les String. "Bonjour" == "Bonjour" mais new String != new String.`,p;return t=new ie({props:{$$slots:{default:[Di]},$$scope:{ctx:x}}}),l=new Ie({props:{class:"fragment",$$slots:{default:[Vi]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment),$=v(),i=C("p"),i.innerHTML=n,m=v(),E(l.$$.fragment),f=v(),L=C("aside"),L.textContent=u,this.h()},l(w){e=_(w,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-lc3ih1"&&(e.textContent=o),s=d(w),S(t.$$.fragment,w),$=d(w),i=_(w,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-czybt8"&&(i.innerHTML=n),m=d(w),S(l.$$.fragment,w),f=d(w),L=_(w,"ASIDE",{class:!0,"data-svelte-h":!0}),b(L)!=="svelte-2rsw1p"&&(L.textContent=u),this.h()},h(){g(i,"class","fragment mt-6"),g(L,"class","notes")},m(w,c){r(w,e,c),r(w,s,c),T(t,w,c),r(w,$,c),r(w,i,c),r(w,m,c),T(l,w,c),r(w,f,c),r(w,L,c),p=!0},p(w,c){const h={};c&1&&(h.$$scope={dirty:c,ctx:w}),t.$set(h);const M={};c&1&&(M.$$scope={dirty:c,ctx:w}),l.$set(M)},i(w){p||(A(t.$$.fragment,w),A(l.$$.fragment,w),p=!0)},o(w){j(t.$$.fragment,w),j(l.$$.fragment,w),p=!1},d(w){w&&(a(e),a(s),a($),a(i),a(m),a(f),a(L)),H(t,w),H(l,w)}}}function zi(x){let e=`
String a = new String("Bonjour");
String b = new String("Bonjour");

System.out.println(a.equals(b));  // true ✅
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Oi(x){let e,o="La solution : equals()",s,t,$='Pour comparer le <b>contenu</b> des objets, utilisez la méthode <code class="text-important">equals()</code>.',i,n,m,l,f='<div class="p-4 bg-red-900/30 rounded-lg"><h4 class="text-red-400">== (double égal)</h4> <p class="text-sm">Compare les <b>références</b></p> <p class="text-xs text-gray-400">&quot;Est-ce le même objet ?&quot;</p></div> <div class="p-4 bg-green-900/30 rounded-lg"><h4 class="text-green-400">equals()</h4> <p class="text-sm">Compare le <b>contenu</b></p> <p class="text-xs text-gray-400">&quot;Ont-ils la même valeur ?&quot;</p></div>',L,u,p=`C'est LA règle à retenir. Pour les objets, utilisez equals(). Pour les primitifs (int, double), utilisez ==.\r
			String, Integer, toutes les classes du JDK redéfinissent equals() pour comparer le contenu.`,w;return n=new ie({props:{$$slots:{default:[zi]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),E(n.$$.fragment),m=v(),l=C("div"),l.innerHTML=f,L=v(),u=C("aside"),u.textContent=p,this.h()},l(c){e=_(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-15y6242"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-gx1ssy"&&(t.innerHTML=$),i=d(c),S(n.$$.fragment,c),m=d(c),l=_(c,"DIV",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1ccb8r3"&&(l.innerHTML=f),L=d(c),u=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(u)!=="svelte-1lxylnx"&&(u.textContent=p),this.h()},h(){g(l,"class","fragment mt-6 grid grid-cols-2 gap-4"),g(u,"class","notes")},m(c,h){r(c,e,h),r(c,s,h),r(c,t,h),r(c,i,h),T(n,c,h),r(c,m,h),r(c,l,h),r(c,L,h),r(c,u,h),w=!0},p(c,h){const M={};h&1&&(M.$$scope={dirty:h,ctx:c}),n.$set(M)},i(c){w||(A(n.$$.fragment,c),w=!0)},o(c){j(n.$$.fragment,c),w=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(l),a(L),a(u)),H(n,c)}}}function Ui(x){let e=`
String a = null;
String b = "Bonjour";

a.equals(b);  // ❌ NullPointerException !
b.equals(a);  // ✅ false (equals gère null)
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Ri(x){let e=`
// Pattern sécurisé avec une constante
"admin".equals(username);  // ✅ Jamais de NPE
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Ji(x){let e,o="⚠️ Attention à null avec equals()",s,t,$,i,n='💡 Astuce : mettez la valeur "sûre" (non-null) à gauche !',m,l,f,L,u=`C'est un pattern très courant. En mettant la constante à gauche, on évite le NPE.\r
			Depuis Java 7, on a aussi Objects.equals(a, b) qui gère null des deux côtés.`,p;return t=new ie({props:{$$slots:{default:[Ui]},$$scope:{ctx:x}}}),l=new ie({props:{class:"fragment",$$slots:{default:[Ri]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment),$=v(),i=C("p"),i.textContent=n,m=v(),E(l.$$.fragment),f=v(),L=C("aside"),L.textContent=u,this.h()},l(w){e=_(w,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-fvccpn"&&(e.textContent=o),s=d(w),S(t.$$.fragment,w),$=d(w),i=_(w,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-eaq14x"&&(i.textContent=n),m=d(w),S(l.$$.fragment,w),f=d(w),L=_(w,"ASIDE",{class:!0,"data-svelte-h":!0}),b(L)!=="svelte-1qgora1"&&(L.textContent=u),this.h()},h(){g(i,"class","fragment mt-6 text-accent-200 font-bold"),g(L,"class","notes")},m(w,c){r(w,e,c),r(w,s,c),T(t,w,c),r(w,$,c),r(w,i,c),r(w,m,c),T(l,w,c),r(w,f,c),r(w,L,c),p=!0},p(w,c){const h={};c&1&&(h.$$scope={dirty:c,ctx:w}),t.$set(h);const M={};c&1&&(M.$$scope={dirty:c,ctx:w}),l.$set(M)},i(w){p||(A(t.$$.fragment,w),A(l.$$.fragment,w),p=!0)},o(w){j(t.$$.fragment,w),j(l.$$.fragment,w),p=!1},d(w){w&&(a(e),a(s),a($),a(i),a(m),a(f),a(L)),H(t,w),H(l,w)}}}function Ni(x){let e,o="Récapitulatif : comparaisons",s,t,$='<thead><tr><th class="p-3">Type</th> <th class="p-3">Opérateur</th> <th class="p-3">Exemple</th></tr></thead> <tbody><tr><td class="p-3">Primitifs (int, double...)</td> <td class="p-3"><code>==</code></td> <td class="p-3"><code>age == 25</code></td></tr> <tr><td class="p-3">Objets (contenu)</td> <td class="p-3"><code>equals()</code></td> <td class="p-3"><code>nom.equals(&quot;Jean&quot;)</code></td></tr> <tr><td class="p-3">Objets (même instance)</td> <td class="p-3"><code>==</code></td> <td class="p-3"><code>obj1 == obj2</code></td></tr> <tr><td class="p-3">Vérifier null</td> <td class="p-3"><code>==</code></td> <td class="p-3"><code>obj == null</code></td></tr></tbody>',i,n,m=`Retenez ce tableau ! Primitifs → ==. Objets contenu → equals(). Null check → ==.\r
			On verra plus tard comment redéfinir equals() pour vos propres classes.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("table"),t.innerHTML=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1fu33u2"&&(e.textContent=o),s=d(l),t=_(l,"TABLE",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1wzfw0k"&&(t.innerHTML=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-o2lw9f"&&(n.textContent=m),this.h()},h(){g(t,"class","text-xl"),g(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function Bi(x){let e,o="Récapitulatif",s,t,$='<div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">📐 Classes</h4> <ul class="text-sm mt-2"><li>Classe = plan</li> <li>Objet = instance</li> <li>Attributs + méthodes</li></ul></div> <div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">🏗️ Création</h4> <ul class="text-sm mt-2"><li><code>new</code> crée un objet</li> <li>Constructeur initialise</li> <li><code>this</code> = objet courant</li></ul></div> <div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">🔗 Références</h4> <ul class="text-sm mt-2"><li>Variable = référence</li> <li><code>null</code> = rien</li> <li><code>equals()</code> pour comparer</li></ul></div>',i,n,m="🔮 Maintenant, voyons comment <b>protéger</b> nos données avec l&#39;encapsulation !",l,f,L=`Voilà les bases. Classe = moule, objet = instance concrète. New = création, constructeur = initialisation.\r
			Les variables contiennent des références, null = pas d'objet, equals() pour comparer le contenu.\r
			On passe à l'encapsulation pour apprendre à protéger nos données.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("div"),t.innerHTML=$,i=v(),n=C("p"),n.innerHTML=m,l=v(),f=C("aside"),f.textContent=L,this.h()},l(u){e=_(u,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-ri7iuh"&&(e.textContent=o),s=d(u),t=_(u,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1uwtkma"&&(t.innerHTML=$),i=d(u),n=_(u,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1msb34k"&&(n.innerHTML=m),l=d(u),f=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-1oez020"&&(f.textContent=L),this.h()},h(){g(t,"class","grid grid-cols-3 gap-4 mt-6"),g(n,"class","fragment mt-8 text-accent-200 text-xl"),g(f,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),r(u,n,p),r(u,l,p),r(u,f,p)},p:O,d(u){u&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f))}}}function Fi(x){let e,o="Généralités sur la POO",s,t,$,i,n,m,l,f,L,u,p,w,c,h,M,q,I,N,Q,X,V,F,ne,U,le,ae,fe,re,pe,oe,$e,ce,me,R,te,J,se,de,he,ve,ge,xe,be;return t=new B({props:{$$slots:{default:[ri]},$$scope:{ctx:x}}}),i=new B({props:{$$slots:{default:[ui]},$$scope:{ctx:x}}}),m=new B({props:{$$slots:{default:[ci]},$$scope:{ctx:x}}}),f=new B({props:{$$slots:{default:[$i]},$$scope:{ctx:x}}}),u=new B({props:{data_background_color:"#1a1a2e",$$slots:{default:[pi]},$$scope:{ctx:x}}}),w=new B({props:{$$slots:{default:[di]},$$scope:{ctx:x}}}),h=new B({props:{$$slots:{default:[xi]},$$scope:{ctx:x}}}),q=new B({props:{$$slots:{default:[Ci]},$$scope:{ctx:x}}}),N=new B({props:{$$slots:{default:[gi]},$$scope:{ctx:x}}}),X=new B({props:{$$slots:{default:[Li]},$$scope:{ctx:x}}}),F=new B({props:{data_background_color:"#1a1a2e",$$slots:{default:[wi]},$$scope:{ctx:x}}}),U=new B({props:{$$slots:{default:[Pi]},$$scope:{ctx:x}}}),ae=new B({props:{$$slots:{default:[Hi]},$$scope:{ctx:x}}}),re=new B({props:{$$slots:{default:[Ti]},$$scope:{ctx:x}}}),oe=new B({props:{$$slots:{default:[Ei]},$$scope:{ctx:x}}}),ce=new B({props:{data_background_color:"#1a1a2e",$$slots:{default:[Ii]},$$scope:{ctx:x}}}),R=new B({props:{$$slots:{default:[ki]},$$scope:{ctx:x}}}),J=new B({props:{$$slots:{default:[Oi]},$$scope:{ctx:x}}}),de=new B({props:{$$slots:{default:[Ji]},$$scope:{ctx:x}}}),ve=new B({props:{$$slots:{default:[Ni]},$$scope:{ctx:x}}}),xe=new B({props:{$$slots:{default:[Bi]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment),$=v(),E(i.$$.fragment),n=v(),E(m.$$.fragment),l=v(),E(f.$$.fragment),L=v(),E(u.$$.fragment),p=v(),E(w.$$.fragment),c=v(),E(h.$$.fragment),M=v(),E(q.$$.fragment),I=v(),E(N.$$.fragment),Q=v(),E(X.$$.fragment),V=v(),E(F.$$.fragment),ne=v(),E(U.$$.fragment),le=v(),E(ae.$$.fragment),fe=v(),E(re.$$.fragment),pe=v(),E(oe.$$.fragment),$e=v(),E(ce.$$.fragment),me=v(),E(R.$$.fragment),te=v(),E(J.$$.fragment),se=v(),E(de.$$.fragment),he=v(),E(ve.$$.fragment),ge=v(),E(xe.$$.fragment)},l(z){e=_(z,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-lsottk"&&(e.textContent=o),s=d(z),S(t.$$.fragment,z),$=d(z),S(i.$$.fragment,z),n=d(z),S(m.$$.fragment,z),l=d(z),S(f.$$.fragment,z),L=d(z),S(u.$$.fragment,z),p=d(z),S(w.$$.fragment,z),c=d(z),S(h.$$.fragment,z),M=d(z),S(q.$$.fragment,z),I=d(z),S(N.$$.fragment,z),Q=d(z),S(X.$$.fragment,z),V=d(z),S(F.$$.fragment,z),ne=d(z),S(U.$$.fragment,z),le=d(z),S(ae.$$.fragment,z),fe=d(z),S(re.$$.fragment,z),pe=d(z),S(oe.$$.fragment,z),$e=d(z),S(ce.$$.fragment,z),me=d(z),S(R.$$.fragment,z),te=d(z),S(J.$$.fragment,z),se=d(z),S(de.$$.fragment,z),he=d(z),S(ve.$$.fragment,z),ge=d(z),S(xe.$$.fragment,z)},m(z,W){r(z,e,W),r(z,s,W),T(t,z,W),r(z,$,W),T(i,z,W),r(z,n,W),T(m,z,W),r(z,l,W),T(f,z,W),r(z,L,W),T(u,z,W),r(z,p,W),T(w,z,W),r(z,c,W),T(h,z,W),r(z,M,W),T(q,z,W),r(z,I,W),T(N,z,W),r(z,Q,W),T(X,z,W),r(z,V,W),T(F,z,W),r(z,ne,W),T(U,z,W),r(z,le,W),T(ae,z,W),r(z,fe,W),T(re,z,W),r(z,pe,W),T(oe,z,W),r(z,$e,W),T(ce,z,W),r(z,me,W),T(R,z,W),r(z,te,W),T(J,z,W),r(z,se,W),T(de,z,W),r(z,he,W),T(ve,z,W),r(z,ge,W),T(xe,z,W),be=!0},p(z,W){const k={};W&1&&(k.$$scope={dirty:W,ctx:z}),t.$set(k);const Y={};W&1&&(Y.$$scope={dirty:W,ctx:z}),i.$set(Y);const Le={};W&1&&(Le.$$scope={dirty:W,ctx:z}),m.$set(Le);const we={};W&1&&(we.$$scope={dirty:W,ctx:z}),f.$set(we);const qe={};W&1&&(qe.$$scope={dirty:W,ctx:z}),u.$set(qe);const Pe={};W&1&&(Pe.$$scope={dirty:W,ctx:z}),w.$set(Pe);const Me={};W&1&&(Me.$$scope={dirty:W,ctx:z}),h.$set(Me);const He={};W&1&&(He.$$scope={dirty:W,ctx:z}),q.$set(He);const D={};W&1&&(D.$$scope={dirty:W,ctx:z}),N.$set(D);const K={};W&1&&(K.$$scope={dirty:W,ctx:z}),X.$set(K);const ke={};W&1&&(ke.$$scope={dirty:W,ctx:z}),F.$set(ke);const je={};W&1&&(je.$$scope={dirty:W,ctx:z}),U.$set(je);const ze={};W&1&&(ze.$$scope={dirty:W,ctx:z}),ae.$set(ze);const Ae={};W&1&&(Ae.$$scope={dirty:W,ctx:z}),re.$set(Ae);const Oe={};W&1&&(Oe.$$scope={dirty:W,ctx:z}),oe.$set(Oe);const Te={};W&1&&(Te.$$scope={dirty:W,ctx:z}),ce.$set(Te);const Ue={};W&1&&(Ue.$$scope={dirty:W,ctx:z}),R.$set(Ue);const Se={};W&1&&(Se.$$scope={dirty:W,ctx:z}),J.$set(Se);const Re={};W&1&&(Re.$$scope={dirty:W,ctx:z}),de.$set(Re);const Ee={};W&1&&(Ee.$$scope={dirty:W,ctx:z}),ve.$set(Ee);const Je={};W&1&&(Je.$$scope={dirty:W,ctx:z}),xe.$set(Je)},i(z){be||(A(t.$$.fragment,z),A(i.$$.fragment,z),A(m.$$.fragment,z),A(f.$$.fragment,z),A(u.$$.fragment,z),A(w.$$.fragment,z),A(h.$$.fragment,z),A(q.$$.fragment,z),A(N.$$.fragment,z),A(X.$$.fragment,z),A(F.$$.fragment,z),A(U.$$.fragment,z),A(ae.$$.fragment,z),A(re.$$.fragment,z),A(oe.$$.fragment,z),A(ce.$$.fragment,z),A(R.$$.fragment,z),A(J.$$.fragment,z),A(de.$$.fragment,z),A(ve.$$.fragment,z),A(xe.$$.fragment,z),be=!0)},o(z){j(t.$$.fragment,z),j(i.$$.fragment,z),j(m.$$.fragment,z),j(f.$$.fragment,z),j(u.$$.fragment,z),j(w.$$.fragment,z),j(h.$$.fragment,z),j(q.$$.fragment,z),j(N.$$.fragment,z),j(X.$$.fragment,z),j(F.$$.fragment,z),j(U.$$.fragment,z),j(ae.$$.fragment,z),j(re.$$.fragment,z),j(oe.$$.fragment,z),j(ce.$$.fragment,z),j(R.$$.fragment,z),j(J.$$.fragment,z),j(de.$$.fragment,z),j(ve.$$.fragment,z),j(xe.$$.fragment,z),be=!1},d(z){z&&(a(e),a(s),a($),a(n),a(l),a(L),a(p),a(c),a(M),a(I),a(Q),a(V),a(ne),a(le),a(fe),a(pe),a($e),a(me),a(te),a(se),a(he),a(ge)),H(t,z),H(i,z),H(m,z),H(f,z),H(u,z),H(w,z),H(h,z),H(q,z),H(N,z),H(X,z),H(F,z),H(U,z),H(ae,z),H(re,z),H(oe,z),H(ce,z),H(R,z),H(J,z),H(de,z),H(ve,z),H(xe,z)}}}function Gi(x){let e,o;return e=new B({props:{$$slots:{default:[Fi]},$$scope:{ctx:x}}}),{c(){E(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,t){T(e,s,t),o=!0},p(s,[t]){const $={};t&1&&($.$$scope={dirty:t,ctx:s}),e.$set($)},i(s){o||(A(e.$$.fragment,s),o=!0)},o(s){j(e.$$.fragment,s),o=!1},d(s){H(e,s)}}}class Qi extends Be{constructor(e){super(),Fe(this,e,null,Gi,Ne,{})}}function Ki(x){let e,o="Usage de l’IA dans ce module",s,t,$="L’IA n’est <b>pas autorisée</b> pendant le module",i,n,m=`Les modalités d'évaluation sont pensées pour que l'IA ne vous apporte aucun avantage, voire
			vous desserve.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("span"),t.innerHTML=$,i=v(),n=C("p"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-1gojwpb"&&(e.textContent=o),s=d(l),t=_(l,"SPAN",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-35mnki"&&(t.innerHTML=$),i=d(l),n=_(l,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1ydzg9u"&&(n.textContent=m),this.h()},h(){g(t,"class","font-bold text-[2em] underline"),g(n,"class","note")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function Xi(x){let e,o="Pourquoi l’IA pose problème à ce stade",s,t,$="<li><b>1. Dette cognitive</b> — L&#39;IA empêche d&#39;apprendre par la pratique et l&#39;erreur.</li> <li><b>2. Béquille pour débutants</b> — Elle favorise ceux qui maîtrisent déjà.</li> <li><b>3. Usage passif</b> — Risque de perte de compétences.</li> <li><b>4. Illusion de facilité</b> — On réfléchit moins aux étapes.</li>",i,n,m="<p>Vidéo explicative</p>";return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("ul"),t.innerHTML=$,i=v(),n=C("a"),n.innerHTML=m,this.h()},l(l){e=_(l,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-16y47ua"&&(e.textContent=o),s=d(l),t=_(l,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-dhzepp"&&(t.innerHTML=$),i=d(l),n=_(l,"A",{href:!0,target:!0,"data-svelte-h":!0}),b(n)!=="svelte-cz1rtj"&&(n.innerHTML=m),this.h()},h(){g(n,"href","https://youtu.be/4xq6bVbS-Pw?si=bhTuVdU7iN5ijJzg&t=653"),g(n,"target","_blank")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function Yi(x){let e,o="Constat côté entreprise",s,t,$="<li>Des profils juniors très à l’aise avec l’IA</li> <li>Mais en difficulté dès qu’il faut :</li> <ul><li>débugger un problème</li> <li>expliquer un choix technique</li> <li>adapter une solution existante</li></ul>",i,n,m=`Le problème n’est pas l’IA,<br/>
			mais son usage trop précoce et non maîtrisé.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("ul"),t.innerHTML=$,i=v(),n=C("p"),n.innerHTML=m,this.h()},l(l){e=_(l,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-qqrjer"&&(e.textContent=o),s=d(l),t=_(l,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-1cewx67"&&(t.innerHTML=$),i=d(l),n=_(l,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1n46xu8"&&(n.innerHTML=m),this.h()},h(){g(n,"class","note")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function Wi(x){let e,o="Utiliser l’IA intelligemment",s,t,$="<li>IA utilisée comme <b>tuteur</b>, pas comme générateur</li> <li>Pas de réponses directes</li> <li>Questions, feedback, progression guidée</li>",i,n,m=`Apprendre correctement avec l’IA<br/>
			produit de meilleurs résultats<br/>
			que l’utiliser sans méthode.`,l,f,L='<p class="note">Source : AI Tutoring Outperforms Active Learning</p>';return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("ul"),t.innerHTML=$,i=v(),n=C("p"),n.innerHTML=m,l=v(),f=C("a"),f.innerHTML=L,this.h()},l(u){e=_(u,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-1nebpg"&&(e.textContent=o),s=d(u),t=_(u,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-1914kjj"&&(t.innerHTML=$),i=d(u),n=_(u,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1amodgb"&&(n.innerHTML=m),l=d(u),f=_(u,"A",{href:!0,"data-preview-link":!0,"data-svelte-h":!0}),b(f)!=="svelte-16lrtro"&&(f.innerHTML=L),this.h()},h(){g(n,"class","important"),g(f,"href","https://www.nature.com/articles/s41598-025-97652-6.pdf"),g(f,"data-preview-link","")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),r(u,n,p),r(u,l,p),r(u,f,p)},p:O,d(u){u&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f))}}}function Zi(x){let e,o="Importance des TD et TP",s,t,$="<li>Les TD construisent le raisonnement</li> <li>Les TP ancrent les concepts par la pratique</li> <li>Ce travail est indispensable pour la suite</li>",i,n,m=`Sans cette phase sérieuse,<br/>
			l’IA n’apporte que peu de valeur.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("ul"),t.innerHTML=$,i=v(),n=C("p"),n.innerHTML=m,this.h()},l(l){e=_(l,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-1pqkdgp"&&(e.textContent=o),s=d(l),t=_(l,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-1dj8lr7"&&(t.innerHTML=$),i=d(l),n=_(l,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-x1j0a0"&&(n.innerHTML=m),this.h()},h(){g(n,"class","note")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function yi(x){let e,o="Phase projet",s,t,$="<li>Problème plus ouvert</li> <li>Mise en situation proche du monde professionnel</li> <li>Usage de l&#39;IA <b>possible</b> et encadré</li>",i,n,m=`Des bases solides permettent<br/>
			d&#39;utiliser l&#39;IA pour faire des choses intéressantes.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("ul"),t.innerHTML=$,i=v(),n=C("p"),n.innerHTML=m,this.h()},l(l){e=_(l,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-1u8tpjh"&&(e.textContent=o),s=d(l),t=_(l,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-15ntht3"&&(t.innerHTML=$),i=d(l),n=_(l,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-e1d6gw"&&(n.innerHTML=m),this.h()},h(){g(n,"class","important")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function ea(x){let e,o="Un prompt vous sera fourni",s,t,$="Pour la phase projet, vous recevrez un <b>prompt</b> à utiliser avec l&#39;IA.",i,n,m='<li class="fragment">Il cadrera l&#39;IA pour qu&#39;elle vous <b>guide</b> sans donner les réponses</li> <li class="fragment">Il sera adapté au contexte du module POO</li>',l,f,L="Ce prompt sera communiqué au moment du projet.",u,p,w=`On vous donnera un prompt système qui transforme l'IA en tuteur. L'idée c'est de vous
			apprendre à utiliser l'IA intelligemment, pas à tricher.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("p"),t.innerHTML=$,i=v(),n=C("ul"),n.innerHTML=m,l=v(),f=C("p"),f.textContent=L,u=v(),p=C("aside"),p.textContent=w,this.h()},l(c){e=_(c,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-1stl3ju"&&(e.textContent=o),s=d(c),t=_(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-e2ua8"&&(t.innerHTML=$),i=d(c),n=_(c,"UL",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1ipgytl"&&(n.innerHTML=m),l=d(c),f=_(c,"P",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-116x1r6"&&(f.textContent=L),u=d(c),p=_(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-6s6n1u"&&(p.textContent=w),this.h()},h(){g(n,"class","mt-6"),g(f,"class","note fragment mt-8"),g(p,"class","notes")},m(c,h){r(c,e,h),r(c,s,h),r(c,t,h),r(c,i,h),r(c,n,h),r(c,l,h),r(c,f,h),r(c,u,h),r(c,p,h)},p:O,d(c){c&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f),a(u),a(p))}}}function ta(x){let e,o="En résumé",s,t,$='<div class="p-4 bg-pink-800 rounded-lg fragment"><h4 class="text-red-400">📚 TD/TP</h4> <p class="text-xl mt-2">Sans IA</p> <p class="text-sm text-white-400">Construire les bases</p></div> <div class="p-4 bg-orange-800 rounded-lg fragment"><h4 class="text-orange-400">🎯 Projet</h4> <p class="text-xl mt-2">IA encadrée</p> <p class="text-sm text-white-400">Avec le prompt fourni</p></div> <div class="p-4 bg-green-800 rounded-lg fragment"><h4 class="text-green-400">💼 Après CPE</h4> <p class="text-xl mt-2">IA maîtrisée</p> <p class="text-sm text-white-400">Vous savez quand et comment</p></div>',i,n,m=`C'est la progression. D'abord on apprend sans béquille, ensuite on apprend à utiliser l'outil
			correctement. À la fin, vous saurez quand l'IA vous aide vraiment et quand elle vous ralentit.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("div"),t.innerHTML=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-11s1ixw"&&(e.textContent=o),s=d(l),t=_(l,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-16m7q19"&&(t.innerHTML=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-10vup29"&&(n.textContent=m),this.h()},h(){g(t,"class","grid grid-cols-3 gap-6 mt-8"),g(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function sa(x){let e,o,s,t,$,i,n,m,l,f,L,u,p,w,c,h;return e=new B({props:{$$slots:{default:[Ki]},$$scope:{ctx:x}}}),s=new B({props:{$$slots:{default:[Xi]},$$scope:{ctx:x}}}),$=new B({props:{$$slots:{default:[Yi]},$$scope:{ctx:x}}}),n=new B({props:{$$slots:{default:[Wi]},$$scope:{ctx:x}}}),l=new B({props:{$$slots:{default:[Zi]},$$scope:{ctx:x}}}),L=new B({props:{$$slots:{default:[yi]},$$scope:{ctx:x}}}),p=new B({props:{$$slots:{default:[ea]},$$scope:{ctx:x}}}),c=new B({props:{$$slots:{default:[ta]},$$scope:{ctx:x}}}),{c(){E(e.$$.fragment),o=v(),E(s.$$.fragment),t=v(),E($.$$.fragment),i=v(),E(n.$$.fragment),m=v(),E(l.$$.fragment),f=v(),E(L.$$.fragment),u=v(),E(p.$$.fragment),w=v(),E(c.$$.fragment)},l(M){S(e.$$.fragment,M),o=d(M),S(s.$$.fragment,M),t=d(M),S($.$$.fragment,M),i=d(M),S(n.$$.fragment,M),m=d(M),S(l.$$.fragment,M),f=d(M),S(L.$$.fragment,M),u=d(M),S(p.$$.fragment,M),w=d(M),S(c.$$.fragment,M)},m(M,q){T(e,M,q),r(M,o,q),T(s,M,q),r(M,t,q),T($,M,q),r(M,i,q),T(n,M,q),r(M,m,q),T(l,M,q),r(M,f,q),T(L,M,q),r(M,u,q),T(p,M,q),r(M,w,q),T(c,M,q),h=!0},p(M,q){const I={};q&1&&(I.$$scope={dirty:q,ctx:M}),e.$set(I);const N={};q&1&&(N.$$scope={dirty:q,ctx:M}),s.$set(N);const Q={};q&1&&(Q.$$scope={dirty:q,ctx:M}),$.$set(Q);const X={};q&1&&(X.$$scope={dirty:q,ctx:M}),n.$set(X);const V={};q&1&&(V.$$scope={dirty:q,ctx:M}),l.$set(V);const F={};q&1&&(F.$$scope={dirty:q,ctx:M}),L.$set(F);const ne={};q&1&&(ne.$$scope={dirty:q,ctx:M}),p.$set(ne);const U={};q&1&&(U.$$scope={dirty:q,ctx:M}),c.$set(U)},i(M){h||(A(e.$$.fragment,M),A(s.$$.fragment,M),A($.$$.fragment,M),A(n.$$.fragment,M),A(l.$$.fragment,M),A(L.$$.fragment,M),A(p.$$.fragment,M),A(c.$$.fragment,M),h=!0)},o(M){j(e.$$.fragment,M),j(s.$$.fragment,M),j($.$$.fragment,M),j(n.$$.fragment,M),j(l.$$.fragment,M),j(L.$$.fragment,M),j(p.$$.fragment,M),j(c.$$.fragment,M),h=!1},d(M){M&&(a(o),a(t),a(i),a(m),a(f),a(u),a(w)),H(e,M),H(s,M),H($,M),H(n,M),H(l,M),H(L,M),H(p,M),H(c,M)}}}function la(x){let e,o;return e=new B({props:{data_background_color:"#2B001A",$$slots:{default:[sa]},$$scope:{ctx:x}}}),{c(){E(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,t){T(e,s,t),o=!0},p(s,[t]){const $={};t&1&&($.$$scope={dirty:t,ctx:s}),e.$set($)},i(s){o||(A(e.$$.fragment,s),o=!0)},o(s){j(e.$$.fragment,s),o=!1},d(s){H(e,s)}}}class na extends Be{constructor(e){super(),Fe(this,e,null,la,Ne,{})}}function ia(x){let e,o="Présentation du module",s,t,$=`<div><ul><li><b>Changer votre manière de penser le code</b></li> <li>Passer du procédural à l’orienté objet</li> <li>Modéliser avant de coder</li> <li>Préparer la suite de votre formation</li></ul> <p class="note">Ce module est simple à valider.<br/>
					Il est <b>fondamental</b> pour la suite.</p></div>`,i,n,m=`Pas obligé de coder en OO, juste une manière de faire différente - C'est une méthode qui
			simplifie la modélisation - Assez largement utilisée`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("div"),t.innerHTML=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-177x7c7"&&(e.textContent=o),s=d(l),t=_(l,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1ez6zyl"&&(t.innerHTML=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-viqv9x"&&(n.textContent=m),this.h()},h(){g(t,"class","two-columns"),g(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function aa(x){let e,o="Ce que vous saurez faire à la fin",s,t,$='<div class="text-left"><h4 class="text-red-400 mb-4 text-3xl">❌ Avant ce module</h4> <ul class="text-2xl"><li class="fragment">Code qui &quot;marche&quot; pour des TPs CPE</li> <li class="fragment">Difficile à reprendre 6 mois plus tard</li> <li class="fragment">Impossible à faire évoluer</li> <li class="fragment">Personne d&#39;autre ne comprend</li></ul></div> <div class="text-left"><h4 class="text-green-400 mb-4 text-3xl">✅ Après ce module</h4> <ul class="text-2xl"><li class="fragment">Code qui dure des années</li> <li class="fragment">Maintenable par une équipe</li> <li class="fragment">Évolutif sans tout casser</li> <li class="fragment">Prêt pour le monde pro</li></ul></div>',i,n,m="En entreprise, le code vit 5, 10, 20 ans.<br/> <b>Vous devez apprendre à coder pour les autres, pas juste pour vous.</b>",l,f,L=`C'est la vraie différence. En école, on code pour valider un TP. En entreprise, le code doit
			survivre à votre départ, être repris par d'autres, évoluer. Ce module vous prépare à ça.`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("div"),t.innerHTML=$,i=v(),n=C("p"),n.innerHTML=m,l=v(),f=C("aside"),f.textContent=L,this.h()},l(u){e=_(u,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-1bz8gvd"&&(e.textContent=o),s=d(u),t=_(u,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-vlxvkk"&&(t.innerHTML=$),i=d(u),n=_(u,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-hffxe3"&&(n.innerHTML=m),l=d(u),f=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-1lbw1km"&&(f.textContent=L),this.h()},h(){g(t,"class","flex justify-center gap-8 mt-8"),g(n,"class","fragment note mt-8"),g(f,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),r(u,n,p),r(u,l,p),r(u,f,p)},p:O,d(u){u&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f))}}}function ra(x){let e,o="Pourquoi vous pourriez décrocher",s,t,$=`<svg viewBox="0 0 600 300" width="100%" style="margin-top: 20px;"><line x1="50" y1="250" x2="550" y2="250" stroke="#ccc" stroke-width="2"></line><line x1="50" y1="50" x2="50" y2="250" stroke="#ccc" stroke-width="2"></line><text x="260" y="270" font-size="14" fill="#ffffff">Temps / Expérience</text><text x="-70" y="185" font-size="14" fill="#ffffff" transform="rotate(-90 15,160)">Niveau réel en programmation
				</text><g><path d="M50 200 C120 185, 180 175, 220 170" fill="none" stroke="#3498db" stroke-width="4"></path><path d="M50 200 C120 205, 180 210, 220 190" fill="none" stroke="#f39c12" stroke-width="4"></path></g><g class="fragment" data-fragment-index="0"><path d="M220 170 C260 170, 300 170, 340 170" fill="none" stroke="#3498db" stroke-width="4"></path><path d="M220 190 C260 170, 300 155, 340 145" fill="none" stroke="#f39c12" stroke-width="4"></path></g><g class="fragment" data-fragment-index="1"><path d="M340 145 C380 140, 400 140, 420 140" fill="none" stroke="#f39c12" stroke-width="4"></path><path d="M340 170 C380 168, 400 165, 420 140" fill="none" stroke="#3498db" stroke-width="4"></path></g><g class="fragment" data-fragment-index="2"><path d="M420 140 C470 140, 510 140, 550 140" fill="none" stroke="#f39c12" stroke-width="4"></path><path d="M420 140 C470 120, 510 70, 550 50" fill="none" stroke="#3498db" stroke-width="4"></path></g><text x="60" y="80" font-size="0.5em" fill="#f39c12">Procédural </text><text x="60" y="100" font-size="0.5em" fill="#3498db">POO</text></svg>`,i,n,m=`Si vous avez l’impression de devenir moins bons,<br/>
			c’est que vous êtes en train d’apprendre.`,l,f,L=`Au début ça semble plus simple que du C, vous avez pas à gérer les pointeurs, le langage est
			plus moderne<br/>
			Mais très vite régression, notamment car il y a des règles à respecter que vous n&#39;aviez pas avant,
			en // en C vous pouvez faire n&#39;importe quoi et ça marche<br/>
			Puis vous apprenez à maitriser Puis vous égalez votre précédent niveau, si vous sortez du module
			à ce niveau, vous n&#39;aurez rien appris de plus<br/>
			Restez motivés pour la suite, car après ça décolle vraiment<br/>`;return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("div"),t.innerHTML=$,i=v(),n=C("p"),n.innerHTML=m,l=v(),f=C("aside"),f.innerHTML=L,this.h()},l(u){e=_(u,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-1nk3rng"&&(e.textContent=o),s=d(u),t=_(u,"DIV",{"data-svelte-h":!0}),b(t)!=="svelte-1sp6g9p"&&(t.innerHTML=$),i=d(u),n=_(u,"P",{class:!0,"data-fragment-index":!0,"data-svelte-h":!0}),b(n)!=="svelte-117ka7n"&&(n.innerHTML=m),l=d(u),f=_(u,"ASIDE",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-ji71yx"&&(f.innerHTML=L),this.h()},h(){g(n,"class","note fragment"),g(n,"data-fragment-index","0"),g(f,"class","notes")},m(u,p){r(u,e,p),r(u,s,p),r(u,t,p),r(u,i,p),r(u,n,p),r(u,l,p),r(u,f,p)},p:O,d(u){u&&(a(e),a(s),a(t),a(i),a(n),a(l),a(f))}}}function ua(x){let e,o="Déroulé",s,t,$="<li>CM en début de cours</li> <li>TD</li> <li>TP/Projet</li>";return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("ol"),t.innerHTML=$},l(i){e=_(i,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-171i1ti"&&(e.textContent=o),s=d(i),t=_(i,"OL",{"data-svelte-h":!0}),b(t)!=="svelte-se5tp"&&(t.innerHTML=$)},m(i,n){r(i,e,n),r(i,s,n),r(i,t,n)},p:O,d(i){i&&(a(e),a(s),a(t))}}}function oa(x){let e,o="Modalités d’examen",s,t,$="<li>DS écrit <b>basé principalement sur les TD</b></li> <li>Projet en fin de module</li> <li>Contrôle continu sur la rigueur</li>",i,n,m="Ce qui est évalué, ce n’est pas le résultat.<br/> <b>C’est la démarche !</b>";return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("ul"),t.innerHTML=$,i=v(),n=C("p"),n.innerHTML=m,this.h()},l(l){e=_(l,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-33cx1h"&&(e.textContent=o),s=d(l),t=_(l,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-yqhay1"&&(t.innerHTML=$),i=d(l),n=_(l,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-dcky3d"&&(n.innerHTML=m),this.h()},h(){g(n,"class","important")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function ca(x){let e,o="Découpage du module",s,t,$=`<svg width="1000" height="500" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" style="flex: 1;background:#fafafa;font-family:sans-serif"><line x1="80" y1="50" x2="80" y2="430" stroke="#333"></line><line x1="80" y1="430" x2="950" y2="430" stroke="#333"></line><g fill="#333" font-size="12"><text x="40" y="430">0h</text><text x="40" y="370">2h</text><text x="40" y="310">4h</text><text x="40" y="250">6h</text><text x="40" y="190">8h</text></g><g font-size="13"><rect x="780" y="60" width="15" height="15" fill="#E85D75"></rect><text x="800" y="73">CM (18h)</text><rect x="780" y="85" width="15" height="15" fill="#456990"></rect><text x="800" y="98">TD (12h)</text><rect x="780" y="110" width="15" height="15" fill="#F28F3B"></rect><text x="800" y="123">TP (14h)</text><rect x="780" y="135" width="15" height="15" fill="#F6BD60"></rect><text x="800" y="148">Projet (18h)</text></g><g font-size="11" text-anchor="middle"><g transform="translate(110,430)"><rect y="-120" width="40" height="120" fill="#E85D75"></rect><rect y="-180" width="40" height="60" fill="#456990"></rect><rect y="-240" width="40" height="60" fill="#F28F3B"></rect><text y="20" text-anchor="middle">04/02</text></g><g transform="translate(180,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-120" width="40" height="60" fill="#456990"></rect><text y="20">25/02</text></g><g transform="translate(250,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-120" width="40" height="60" fill="#456990"></rect><rect y="-180" width="40" height="60" fill="#F28F3B"></rect><text y="20">04/03</text></g><g transform="translate(320,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-120" width="40" height="60" fill="#456990"></rect><rect y="-180" width="40" height="60" fill="#F28F3B"></rect><text y="20">18/03</text></g><g transform="translate(390,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-120" width="40" height="60" fill="#456990"></rect><rect y="-180" width="40" height="60" fill="#F28F3B"></rect><text y="20">24/03</text></g><g transform="translate(460,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-120" width="40" height="60" fill="#456990"></rect><rect y="-180" width="40" height="60" fill="#F28F3B"></rect><text y="20">25/03</text></g><g transform="translate(530,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-180" width="40" height="120" fill="#F28F3B"></rect><text y="20">31/03</text></g><g transform="translate(600,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-180" width="40" height="120" fill="#F6BD60"></rect><text y="20">01/04</text></g><g transform="translate(670,430)"><rect y="-180" width="40" height="180" fill="#F6BD60"></rect><text y="20">07/04</text></g><g transform="translate(740,430)"><rect y="-240" width="40" height="240" fill="#F6BD60"></rect><text y="20">05/05</text></g></g></svg> <div style="flex: 1;"><ul><li><b>CM</b> <br/>
						Théorie et introduction des concepts.</li> <li><b>TD</b> <br/> <b class="font-bold text-orange-400">Sans IDE !</b></li> <li><b>TP</b> <br/>
						Guidés, mais il faut improviser, tester, sortir du cadre.</li> <li><b>Projet</b> <br/>
						Mise en situation professionnelle.</li></ul></div>`,i,n,m="Relire le support du CM ne vous suffira pas à réussir l'examen";return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("div"),t.innerHTML=$,i=v(),n=C("p"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-g73up0"&&(e.textContent=o),s=d(l),t=_(l,"DIV",{style:!0,"data-svelte-h":!0}),b(t)!=="svelte-xoywc5"&&(t.innerHTML=$),i=d(l),n=_(l,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-18g80m8"&&(n.textContent=m),this.h()},h(){lt(t,"display","flex"),lt(t,"gap","2rem"),lt(t,"align-items","center"),lt(t,"justify-content","center"),g(n,"class","font-bold text-orange-400 note")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function fa(x){let e,o="Mise en place des TDs/TPs",s,t,$="Les TD et TP sont à commit régulièrement sur votre dépôt git (voir démonstration)",i,n,m="Seul le projet est à réaliser en binôme";return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("p"),n.textContent=m},l(l){e=_(l,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-1xm0e99"&&(e.textContent=o),s=d(l),t=_(l,"P",{"data-svelte-h":!0}),b(t)!=="svelte-6avelo"&&(t.textContent=$),i=d(l),n=_(l,"P",{"data-svelte-h":!0}),b(n)!=="svelte-1ufx4cd"&&(n.textContent=m)},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function $a(x){let e,o,s,t,$,i,n,m,l,f,L,u,p,w;return e=new B({props:{$$slots:{default:[ia]},$$scope:{ctx:x}}}),s=new B({props:{$$slots:{default:[aa]},$$scope:{ctx:x}}}),$=new B({props:{$$slots:{default:[ra]},$$scope:{ctx:x}}}),n=new B({props:{$$slots:{default:[ua]},$$scope:{ctx:x}}}),l=new B({props:{$$slots:{default:[oa]},$$scope:{ctx:x}}}),L=new B({props:{$$slots:{default:[ca]},$$scope:{ctx:x}}}),p=new B({props:{$$slots:{default:[fa]},$$scope:{ctx:x}}}),{c(){E(e.$$.fragment),o=v(),E(s.$$.fragment),t=v(),E($.$$.fragment),i=v(),E(n.$$.fragment),m=v(),E(l.$$.fragment),f=v(),E(L.$$.fragment),u=v(),E(p.$$.fragment)},l(c){S(e.$$.fragment,c),o=d(c),S(s.$$.fragment,c),t=d(c),S($.$$.fragment,c),i=d(c),S(n.$$.fragment,c),m=d(c),S(l.$$.fragment,c),f=d(c),S(L.$$.fragment,c),u=d(c),S(p.$$.fragment,c)},m(c,h){T(e,c,h),r(c,o,h),T(s,c,h),r(c,t,h),T($,c,h),r(c,i,h),T(n,c,h),r(c,m,h),T(l,c,h),r(c,f,h),T(L,c,h),r(c,u,h),T(p,c,h),w=!0},p(c,h){const M={};h&1&&(M.$$scope={dirty:h,ctx:c}),e.$set(M);const q={};h&1&&(q.$$scope={dirty:h,ctx:c}),s.$set(q);const I={};h&1&&(I.$$scope={dirty:h,ctx:c}),$.$set(I);const N={};h&1&&(N.$$scope={dirty:h,ctx:c}),n.$set(N);const Q={};h&1&&(Q.$$scope={dirty:h,ctx:c}),l.$set(Q);const X={};h&1&&(X.$$scope={dirty:h,ctx:c}),L.$set(X);const V={};h&1&&(V.$$scope={dirty:h,ctx:c}),p.$set(V)},i(c){w||(A(e.$$.fragment,c),A(s.$$.fragment,c),A($.$$.fragment,c),A(n.$$.fragment,c),A(l.$$.fragment,c),A(L.$$.fragment,c),A(p.$$.fragment,c),w=!0)},o(c){j(e.$$.fragment,c),j(s.$$.fragment,c),j($.$$.fragment,c),j(n.$$.fragment,c),j(l.$$.fragment,c),j(L.$$.fragment,c),j(p.$$.fragment,c),w=!1},d(c){c&&(a(o),a(t),a(i),a(m),a(f),a(u)),H(e,c),H(s,c),H($,c),H(n,c),H(l,c),H(L,c),H(p,c)}}}function pa(x){let e,o;return e=new B({props:{data_background_color:"#00353F",$$slots:{default:[$a]},$$scope:{ctx:x}}}),{c(){E(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,t){T(e,s,t),o=!0},p(s,[t]){const $={};t&1&&($.$$scope={dirty:t,ctx:s}),e.$set($)},i(s){o||(A(e.$$.fragment,s),o=!0)},o(s){j(e.$$.fragment,s),o=!1},d(s){H(e,s)}}}class ma extends Be{constructor(e){super(),Fe(this,e,null,pa,Ne,{})}}function da(x){let e,o="Exercice 1",s,t,$="Encapsulation et validation",i,n,m="⏱️ 10-15 minutes";return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("p"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-sq034p"&&(e.textContent=o),s=d(l),t=_(l,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-tg4x2t"&&(t.textContent=$),i=d(l),n=_(l,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-11o3260"&&(n.textContent=m),this.h()},h(){g(e,"class","text-5xl"),g(t,"class","text-2xl text-gray-400"),g(n,"class","text-xl mt-8")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function va(x){let e,o="📝 Exercice 1 : Compte bancaire sécurisé",s,t,$=`<p class="font-bold text-accent-200">Objectif :</p> <p class="mb-4">Créer une classe <code>CompteBancaire</code> avec encapsulation correcte.</p> <p class="font-bold text-accent-200 mt-6">Consignes :</p> <ol class="space-y-2"><li>Créer une classe avec les attributs <code>numero</code>, <code>solde</code>,
					<code>titulaire</code></li> <li>Tous les attributs doivent être <code>private</code></li> <li>Créer un constructeur pour initialiser le compte</li> <li>Créer des getters pour tous les attributs</li> <li>Créer une méthode <code>deposer(double montant)</code> qui :
					<ul class="ml-6"><li>Vérifie que le montant est positif</li> <li>Ajoute le montant au solde</li></ul></li> <li>Créer une méthode <code>retirer(double montant)</code> qui :
					<ul class="ml-6"><li>Vérifie que le montant est positif</li> <li>Vérifie que le solde est suffisant</li> <li>Retire le montant du solde</li></ul></li></ol>`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("div"),t.innerHTML=$,this.h()},l(i){e=_(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-n7as91"&&(e.textContent=o),s=d(i),t=_(i,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-114i2s5"&&(t.innerHTML=$),this.h()},h(){g(t,"class","text-left text-xl")},m(i,n){r(i,e,n),r(i,s,n),r(i,t,n)},p:O,d(i){i&&(a(e),a(s),a(t))}}}function xa(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function _a(x){let e,o="💡 Indice",s,t,$;return t=new ie({props:{$$slots:{default:[xa]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment)},l(i){e=_(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-s9gy6g"&&(e.textContent=o),s=d(i),S(t.$$.fragment,i)},m(i,n){r(i,e,n),r(i,s,n),T(t,i,n),$=!0},p(i,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:i}),t.$set(m)},i(i){$||(A(t.$$.fragment,i),$=!0)},o(i){j(t.$$.fragment,i),$=!1},d(i){i&&(a(e),a(s)),H(t,i)}}}function Ca(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function ha(x){let e,o="✅ Solution",s,t,$;return t=new ie({props:{class:"language-java h-[70vh]",$$slots:{default:[Ca]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment)},l(i){e=_(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1eu9efq"&&(e.textContent=o),s=d(i),S(t.$$.fragment,i)},m(i,n){r(i,e,n),r(i,s,n),T(t,i,n),$=!0},p(i,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:i}),t.$set(m)},i(i){$||(A(t.$$.fragment,i),$=!0)},o(i){j(t.$$.fragment,i),$=!1},d(i){i&&(a(e),a(s)),H(t,i)}}}function ga(x){let e,o="🎯 Points clés",s,t,$='<li class="fragment">✅ Attributs <code>private</code> → protection des données</li> <li class="fragment">✅ Getters → lecture contrôlée</li> <li class="fragment">✅ Méthodes de modification → validation systématique</li> <li class="fragment">✅ Pas de setter pour le solde → cohérence métier</li> <li class="fragment">✅ Exceptions claires → facilite le debug</li>',i,n,m="💼 En entreprise, cette protection évite les bugs coûteux !";return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("ul"),t.innerHTML=$,i=v(),n=C("p"),n.textContent=m,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-gv6vvv"&&(e.textContent=o),s=d(l),t=_(l,"UL",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1x5lr41"&&(t.innerHTML=$),i=d(l),n=_(l,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-lzo0mv"&&(n.textContent=m),this.h()},h(){g(t,"class","text-xl"),g(n,"class","fragment mt-8 text-accent-200 font-bold")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function ba(x){let e,o="Exercice 2",s,t,$="Héritage et généralisation",i,n,m="⏱️ 15-20 minutes";return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("p"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-8xxy4y"&&(e.textContent=o),s=d(l),t=_(l,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1wfm6em"&&(t.textContent=$),i=d(l),n=_(l,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1ij9449"&&(n.textContent=m),this.h()},h(){g(e,"class","text-5xl"),g(t,"class","text-2xl text-gray-400"),g(n,"class","text-xl mt-8")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function La(x){let e,o="📝 Exercice 2 : Système de véhicules",s,t,$=`<p class="font-bold text-accent-200">Objectif :</p> <p class="mb-4">Modéliser une hiérarchie de véhicules avec héritage.</p> <p class="font-bold text-accent-200 mt-6">Consignes :</p> <ol class="space-y-2"><li>Créer une classe abstraite <code>Vehicule</code> avec :
					<ul class="ml-6"><li>Attributs : <code>marque</code>, <code>modele</code>, <code>vitesseMax</code></li> <li>Constructeur</li> <li>Méthode concrète : <code>demarrer()</code></li> <li>Méthode abstraite : <code>klaxonner()</code></li></ul></li> <li>Créer une classe <code>Voiture</code> qui hérite de <code>Vehicule</code> avec :
					<ul class="ml-6"><li>Attribut supplémentaire : <code>nbPortes</code></li> <li>Implémenter <code>klaxonner()</code> → affiche &quot;Tuuut tuuut !&quot;</li></ul></li> <li>Créer une classe <code>Moto</code> qui hérite de <code>Vehicule</code> avec :
					<ul class="ml-6"><li>Attribut supplémentaire : <code>avecSidecar</code></li> <li>Implémenter <code>klaxonner()</code> → affiche &quot;Beep beep !&quot;</li></ul></li></ol>`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("div"),t.innerHTML=$,this.h()},l(i){e=_(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-y2rbbg"&&(e.textContent=o),s=d(i),t=_(i,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-wl8xd3"&&(t.innerHTML=$),this.h()},h(){g(t,"class","text-left text-xl")},m(i,n){r(i,e,n),r(i,s,n),r(i,t,n)},p:O,d(i){i&&(a(e),a(s),a(t))}}}function wa(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function qa(x){let e,o="🎨 Diagramme UML cible",s,t,$;return t=new Ie({props:{$$slots:{default:[wa]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment)},l(i){e=_(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-iafbxg"&&(e.textContent=o),s=d(i),S(t.$$.fragment,i)},m(i,n){r(i,e,n),r(i,s,n),T(t,i,n),$=!0},p(i,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:i}),t.$set(m)},i(i){$||(A(t.$$.fragment,i),$=!0)},o(i){j(t.$$.fragment,i),$=!1},d(i){i&&(a(e),a(s)),H(t,i)}}}function Pa(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Ma(x){let e,o="💡 Indice",s,t,$;return t=new ie({props:{$$slots:{default:[Pa]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment)},l(i){e=_(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-s9gy6g"&&(e.textContent=o),s=d(i),S(t.$$.fragment,i)},m(i,n){r(i,e,n),r(i,s,n),T(t,i,n),$=!0},p(i,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:i}),t.$set(m)},i(i){$||(A(t.$$.fragment,i),$=!0)},o(i){j(t.$$.fragment,i),$=!1},d(i){i&&(a(e),a(s)),H(t,i)}}}function Ha(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function ja(x){let e,o="✅ Solution : Vehicule",s,t,$;return t=new ie({props:{class:"language-java",$$slots:{default:[Ha]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment)},l(i){e=_(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-zw7ek9"&&(e.textContent=o),s=d(i),S(t.$$.fragment,i)},m(i,n){r(i,e,n),r(i,s,n),T(t,i,n),$=!0},p(i,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:i}),t.$set(m)},i(i){$||(A(t.$$.fragment,i),$=!0)},o(i){j(t.$$.fragment,i),$=!1},d(i){i&&(a(e),a(s)),H(t,i)}}}function Aa(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Ta(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Sa(x){let e,o="✅ Solution : Voiture et Moto",s,t,$,i,n,m;return $=new ie({props:{class:"language-java",$$slots:{default:[Aa]},$$scope:{ctx:x}}}),n=new ie({props:{class:"language-java",$$slots:{default:[Ta]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),t=C("div"),E($.$$.fragment),i=v(),E(n.$$.fragment),this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1ywidnm"&&(e.textContent=o),s=d(l),t=_(l,"DIV",{class:!0});var f=ue(t);S($.$$.fragment,f),i=d(f),S(n.$$.fragment,f),f.forEach(a),this.h()},h(){g(t,"class","flex flex-row gap-4")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),T($,t,null),ee(t,i),T(n,t,null),m=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),$.$set(L);const u={};f&1&&(u.$$scope={dirty:f,ctx:l}),n.$set(u)},i(l){m||(A($.$$.fragment,l),A(n.$$.fragment,l),m=!0)},o(l){j($.$$.fragment,l),j(n.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a(t)),H($),H(n)}}}function Ea(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Ia(x){let e,o="🧪 Test de votre code",s,t,$;return t=new ie({props:{$$slots:{default:[Ea]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment)},l(i){e=_(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1yizvu6"&&(e.textContent=o),s=d(i),S(t.$$.fragment,i)},m(i,n){r(i,e,n),r(i,s,n),T(t,i,n),$=!0},p(i,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:i}),t.$set(m)},i(i){$||(A(t.$$.fragment,i),$=!0)},o(i){j(t.$$.fragment,i),$=!1},d(i){i&&(a(e),a(s)),H(t,i)}}}function Da(x){let e,o="🎯 Points clés",s,t,$='<li class="fragment">✅ <code>abstract class</code> → empêche l&#39;instanciation directe</li> <li class="fragment">✅ <code>abstract void klaxonner()</code> → contrat pour les sous-classes</li> <li class="fragment">✅ <code>super(...)</code> → appel du constructeur parent obligatoire</li> <li class="fragment">✅ <code>@Override</code> → sécurité lors de la redéfinition</li> <li class="fragment">✅ Code commun dans le parent → évite duplication</li>',i,n,m="💼 En entreprise : hiérarchies de produits, utilisateurs, transactions, etc.";return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("ul"),t.innerHTML=$,i=v(),n=C("p"),n.textContent=m,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-gv6vvv"&&(e.textContent=o),s=d(l),t=_(l,"UL",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1z0f2wo"&&(t.innerHTML=$),i=d(l),n=_(l,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1fewxyy"&&(n.textContent=m),this.h()},h(){g(t,"class","text-xl"),g(n,"class","fragment mt-8 text-accent-200 font-bold")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function Va(x){let e,o="Exercice 3",s,t,$="Composition et Interfaces",i,n,m="⏱️ 20-25 minutes";return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,i=v(),n=C("p"),n.textContent=m,this.h()},l(l){e=_(l,"H2",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-1033wpr"&&(e.textContent=o),s=d(l),t=_(l,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1hujr1a"&&(t.textContent=$),i=d(l),n=_(l,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1n0lccm"&&(n.textContent=m),this.h()},h(){g(e,"class","text-5xl"),g(t,"class","text-2xl text-gray-400"),g(n,"class","text-xl mt-8")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function ka(x){let e,o="📝 Exercice 3 : Système de location",s,t,$=`<p class="font-bold text-accent-200">Objectif :</p> <p class="mb-4">Combiner héritage, composition et interfaces dans un système réaliste.</p> <p class="font-bold text-accent-200 mt-6">Consignes :</p> <ol class="space-y-2"><li>Créer une interface <code>ILouable</code> avec :
					<ul class="ml-6"><li><code>double calculerPrixLocation(int nbJours)</code></li></ul></li> <li>Réutiliser vos classes <code>Vehicule</code>, <code>Voiture</code>, <code>Moto</code></li> <li>Faire implémenter <code>ILouable</code> par <code>Voiture</code> et <code>Moto</code> :
					<ul class="ml-6"><li>Voiture : 50€/jour</li> <li>Moto : 30€/jour</li></ul></li> <li>Créer une classe <code>AgenceLocation</code> avec :
					<ul class="ml-6"><li>Liste de véhicules louables</li> <li>Méthode <code>ajouterVehicule(ILouable v)</code></li> <li>Méthode <code>calculerRevenuTotal(int nbJours)</code></li></ul></li></ol>`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("div"),t.innerHTML=$,this.h()},l(i){e=_(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1xzgz2g"&&(e.textContent=o),s=d(i),t=_(i,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-p07eid"&&(t.innerHTML=$),this.h()},h(){g(t,"class","text-left text-xl")},m(i,n){r(i,e,n),r(i,s,n),r(i,t,n)},p:O,d(i){i&&(a(e),a(s),a(t))}}}function za(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Oa(x){let e,o="🎨 Diagramme UML cible",s,t,$;return t=new Ie({props:{$$slots:{default:[za]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment)},l(i){e=_(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-iafbxg"&&(e.textContent=o),s=d(i),S(t.$$.fragment,i)},m(i,n){r(i,e,n),r(i,s,n),T(t,i,n),$=!0},p(i,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:i}),t.$set(m)},i(i){$||(A(t.$$.fragment,i),$=!0)},o(i){j(t.$$.fragment,i),$=!1},d(i){i&&(a(e),a(s)),H(t,i)}}}function Ua(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Ra(x){let e,o="✅ Solution : Interface et implémentations",s,t,$;return t=new ie({props:{class:"language-java h-[65vh]",$$slots:{default:[Ua]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment)},l(i){e=_(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-wjrqcr"&&(e.textContent=o),s=d(i),S(t.$$.fragment,i)},m(i,n){r(i,e,n),r(i,s,n),T(t,i,n),$=!0},p(i,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:i}),t.$set(m)},i(i){$||(A(t.$$.fragment,i),$=!0)},o(i){j(t.$$.fragment,i),$=!1},d(i){i&&(a(e),a(s)),H(t,i)}}}function Ja(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Na(x){let e,o="✅ Solution : AgenceLocation",s,t,$;return t=new ie({props:{class:"language-java",$$slots:{default:[Ja]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment)},l(i){e=_(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-brhqh2"&&(e.textContent=o),s=d(i),S(t.$$.fragment,i)},m(i,n){r(i,e,n),r(i,s,n),T(t,i,n),$=!0},p(i,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:i}),t.$set(m)},i(i){$||(A(t.$$.fragment,i),$=!0)},o(i){j(t.$$.fragment,i),$=!1},d(i){i&&(a(e),a(s)),H(t,i)}}}function Ba(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Fa(x){let e,o="🧪 Test complet",s,t,$;return t=new ie({props:{$$slots:{default:[Ba]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment)},l(i){e=_(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1lbxuqe"&&(e.textContent=o),s=d(i),S(t.$$.fragment,i)},m(i,n){r(i,e,n),r(i,s,n),T(t,i,n),$=!0},p(i,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:i}),t.$set(m)},i(i){$||(A(t.$$.fragment,i),$=!0)},o(i){j(t.$$.fragment,i),$=!1},d(i){i&&(a(e),a(s)),H(t,i)}}}function Ga(x){let e,o="🎯 Points clés",s,t,$='<li class="fragment">✅ Interface → contrat abstrait (<i>peut faire</i>)</li> <li class="fragment">✅ Héritage → hiérarchie logique (<i>est un</i>)</li> <li class="fragment">✅ Composition → AgenceLocation <i>a des</i> véhicules</li> <li class="fragment">✅ <code>List&lt;ILouable&gt;</code> → polymorphisme en action</li> <li class="fragment">✅ <code>static final</code> → constante de classe</li>',i,n,m="💼 Architecture typique en entreprise : services, DAO, entités métier";return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("ul"),t.innerHTML=$,i=v(),n=C("p"),n.textContent=m,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-gv6vvv"&&(e.textContent=o),s=d(l),t=_(l,"UL",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-193dcgm"&&(t.innerHTML=$),i=d(l),n=_(l,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-o7prxp"&&(n.textContent=m),this.h()},h(){g(t,"class","text-xl"),g(n,"class","fragment mt-8 text-accent-200 font-bold")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function Qa(x){let e,o="🏆 Challenge Bonus",s,t,$="Pour aller plus loin";return{c(){e=C("h2"),e.textContent=o,s=v(),t=C("p"),t.textContent=$,this.h()},l(i){e=_(i,"H2",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-uwrmmu"&&(e.textContent=o),s=d(i),t=_(i,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-saoopl"&&(t.textContent=$),this.h()},h(){g(e,"class","text-5xl"),g(t,"class","text-2xl text-gray-400")},m(i,n){r(i,e,n),r(i,s,n),r(i,t,n)},p:O,d(i){i&&(a(e),a(s),a(t))}}}function Ka(x){let e,o="💪 Challenge : Système de réduction",s,t,$=`<p class="font-bold text-accent-200">Améliorez votre système de location :</p> <ol class="space-y-3 mt-4"><li>Ajouter une interface <code>IReductible</code> avec :
					<ul class="ml-6"><li><code>double appliquerReduction(double prix)</code></li></ul></li> <li>Créer des classes de réduction :
					<ul class="ml-6"><li><code>ReductionPourcentage</code> (ex: -20%)</li> <li><code>ReductionMontant</code> (ex: -50€)</li></ul></li> <li>Modifier <code>AgenceLocation</code> pour accepter une réduction</li> <li>Tester avec plusieurs scénarios</li></ol>`,i,n,m="💡 Indice : Strategy Pattern (on le verra plus tard dans les Design Patterns)";return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("div"),t.innerHTML=$,i=v(),n=C("p"),n.textContent=m,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-11zr1pn"&&(e.textContent=o),s=d(l),t=_(l,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-122ga3f"&&(t.innerHTML=$),i=d(l),n=_(l,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-nkxlqz"&&(n.textContent=m),this.h()},h(){g(t,"class","text-left text-xl"),g(n,"class","fragment mt-6 text-accent-200")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function Xa(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Ya(x){let e,o="✅ Solution Challenge : Interfaces",s,t,$;return t=new ie({props:{class:"language-java",$$slots:{default:[Xa]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment)},l(i){e=_(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1r3t153"&&(e.textContent=o),s=d(i),S(t.$$.fragment,i)},m(i,n){r(i,e,n),r(i,s,n),T(t,i,n),$=!0},p(i,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:i}),t.$set(m)},i(i){$||(A(t.$$.fragment,i),$=!0)},o(i){j(t.$$.fragment,i),$=!1},d(i){i&&(a(e),a(s)),H(t,i)}}}function Wa(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function Za(x){let e,o="✅ Solution Challenge : AgenceLocation améliorée",s,t,$;return t=new ie({props:{class:"language-java",$$slots:{default:[Wa]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment)},l(i){e=_(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1ou944c"&&(e.textContent=o),s=d(i),S(t.$$.fragment,i)},m(i,n){r(i,e,n),r(i,s,n),T(t,i,n),$=!0},p(i,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:i}),t.$set(m)},i(i){$||(A(t.$$.fragment,i),$=!0)},o(i){j(t.$$.fragment,i),$=!1},d(i){i&&(a(e),a(s)),H(t,i)}}}function ya(x){let e=`
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
`,o;return{c(){o=y(e)},l(s){o=Z(s,e)},m(s,t){r(s,o,t)},p:O,d(s){s&&a(o)}}}function er(x){let e,o="🧪 Test du challenge",s,t,$;return t=new ie({props:{$$slots:{default:[ya]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment)},l(i){e=_(i,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-ouoo1i"&&(e.textContent=o),s=d(i),S(t.$$.fragment,i)},m(i,n){r(i,e,n),r(i,s,n),T(t,i,n),$=!0},p(i,n){const m={};n&1&&(m.$$scope={dirty:n,ctx:i}),t.$set(m)},i(i){$||(A(t.$$.fragment,i),$=!0)},o(i){j(t.$$.fragment,i),$=!1},d(i){i&&(a(e),a(s)),H(t,i)}}}function tr(x){let e,o="🎓 Récapitulatif des exercices",s,t,$='<thead><tr><th class="p-3">Exercice</th> <th class="p-3">Concepts</th> <th class="p-3">Temps</th></tr></thead> <tbody><tr><td class="p-3">1. Compte bancaire</td> <td class="p-3">Encapsulation, validation</td> <td class="p-3">15 min</td></tr> <tr><td class="p-3">2. Véhicules</td> <td class="p-3">Héritage, classes abstraites</td> <td class="p-3">20 min</td></tr> <tr><td class="p-3">3. Location</td> <td class="p-3">Interfaces, composition</td> <td class="p-3">25 min</td></tr> <tr><td class="p-3">Bonus. Réductions</td> <td class="p-3">Strategy pattern</td> <td class="p-3">15 min</td></tr></tbody>',i,n,m="💼 Ces patterns sont utilisés quotidiennement dans l'industrie !";return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("table"),t.innerHTML=$,i=v(),n=C("p"),n.textContent=m,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-197pzpn"&&(e.textContent=o),s=d(l),t=_(l,"TABLE",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1esjeaf"&&(t.innerHTML=$),i=d(l),n=_(l,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1tfdww3"&&(n.textContent=m),this.h()},h(){g(t,"class","text-lg mt-4"),g(n,"class","mt-6 text-accent-200 font-bold")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function sr(x){let e,o="🏋️ Exercices pratiques - Séance 1",s,t,$,i,n,m,l,f,L,u,p,w,c,h,M,q,I,N,Q,X,V,F,ne,U,le,ae,fe,re,pe,oe,$e,ce,me,R,te,J,se,de,he,ve,ge,xe,be,z,W,k,Y,Le,we,qe,Pe,Me,He;return t=new B({props:{data_background_color:"#1a3a1a",$$slots:{default:[da]},$$scope:{ctx:x}}}),i=new B({props:{$$slots:{default:[va]},$$scope:{ctx:x}}}),m=new B({props:{$$slots:{default:[_a]},$$scope:{ctx:x}}}),f=new B({props:{$$slots:{default:[ha]},$$scope:{ctx:x}}}),u=new B({props:{$$slots:{default:[ga]},$$scope:{ctx:x}}}),w=new B({props:{data_background_color:"#1a1a3a",$$slots:{default:[ba]},$$scope:{ctx:x}}}),h=new B({props:{$$slots:{default:[La]},$$scope:{ctx:x}}}),q=new B({props:{$$slots:{default:[qa]},$$scope:{ctx:x}}}),N=new B({props:{$$slots:{default:[Ma]},$$scope:{ctx:x}}}),X=new B({props:{$$slots:{default:[ja]},$$scope:{ctx:x}}}),F=new B({props:{$$slots:{default:[Sa]},$$scope:{ctx:x}}}),U=new B({props:{$$slots:{default:[Ia]},$$scope:{ctx:x}}}),ae=new B({props:{$$slots:{default:[Da]},$$scope:{ctx:x}}}),re=new B({props:{data_background_color:"#3a1a1a",$$slots:{default:[Va]},$$scope:{ctx:x}}}),oe=new B({props:{$$slots:{default:[ka]},$$scope:{ctx:x}}}),ce=new B({props:{$$slots:{default:[Oa]},$$scope:{ctx:x}}}),R=new B({props:{$$slots:{default:[Ra]},$$scope:{ctx:x}}}),J=new B({props:{$$slots:{default:[Na]},$$scope:{ctx:x}}}),de=new B({props:{$$slots:{default:[Fa]},$$scope:{ctx:x}}}),ve=new B({props:{$$slots:{default:[Ga]},$$scope:{ctx:x}}}),xe=new B({props:{data_background_color:"#2a2a1a",$$slots:{default:[Qa]},$$scope:{ctx:x}}}),z=new B({props:{$$slots:{default:[Ka]},$$scope:{ctx:x}}}),k=new B({props:{$$slots:{default:[Ya]},$$scope:{ctx:x}}}),Le=new B({props:{$$slots:{default:[Za]},$$scope:{ctx:x}}}),qe=new B({props:{$$slots:{default:[er]},$$scope:{ctx:x}}}),Me=new B({props:{$$slots:{default:[tr]},$$scope:{ctx:x}}}),{c(){e=C("h3"),e.textContent=o,s=v(),E(t.$$.fragment),$=v(),E(i.$$.fragment),n=v(),E(m.$$.fragment),l=v(),E(f.$$.fragment),L=v(),E(u.$$.fragment),p=v(),E(w.$$.fragment),c=v(),E(h.$$.fragment),M=v(),E(q.$$.fragment),I=v(),E(N.$$.fragment),Q=v(),E(X.$$.fragment),V=v(),E(F.$$.fragment),ne=v(),E(U.$$.fragment),le=v(),E(ae.$$.fragment),fe=v(),E(re.$$.fragment),pe=v(),E(oe.$$.fragment),$e=v(),E(ce.$$.fragment),me=v(),E(R.$$.fragment),te=v(),E(J.$$.fragment),se=v(),E(de.$$.fragment),he=v(),E(ve.$$.fragment),ge=v(),E(xe.$$.fragment),be=v(),E(z.$$.fragment),W=v(),E(k.$$.fragment),Y=v(),E(Le.$$.fragment),we=v(),E(qe.$$.fragment),Pe=v(),E(Me.$$.fragment)},l(D){e=_(D,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-lz1hvq"&&(e.textContent=o),s=d(D),S(t.$$.fragment,D),$=d(D),S(i.$$.fragment,D),n=d(D),S(m.$$.fragment,D),l=d(D),S(f.$$.fragment,D),L=d(D),S(u.$$.fragment,D),p=d(D),S(w.$$.fragment,D),c=d(D),S(h.$$.fragment,D),M=d(D),S(q.$$.fragment,D),I=d(D),S(N.$$.fragment,D),Q=d(D),S(X.$$.fragment,D),V=d(D),S(F.$$.fragment,D),ne=d(D),S(U.$$.fragment,D),le=d(D),S(ae.$$.fragment,D),fe=d(D),S(re.$$.fragment,D),pe=d(D),S(oe.$$.fragment,D),$e=d(D),S(ce.$$.fragment,D),me=d(D),S(R.$$.fragment,D),te=d(D),S(J.$$.fragment,D),se=d(D),S(de.$$.fragment,D),he=d(D),S(ve.$$.fragment,D),ge=d(D),S(xe.$$.fragment,D),be=d(D),S(z.$$.fragment,D),W=d(D),S(k.$$.fragment,D),Y=d(D),S(Le.$$.fragment,D),we=d(D),S(qe.$$.fragment,D),Pe=d(D),S(Me.$$.fragment,D)},m(D,K){r(D,e,K),r(D,s,K),T(t,D,K),r(D,$,K),T(i,D,K),r(D,n,K),T(m,D,K),r(D,l,K),T(f,D,K),r(D,L,K),T(u,D,K),r(D,p,K),T(w,D,K),r(D,c,K),T(h,D,K),r(D,M,K),T(q,D,K),r(D,I,K),T(N,D,K),r(D,Q,K),T(X,D,K),r(D,V,K),T(F,D,K),r(D,ne,K),T(U,D,K),r(D,le,K),T(ae,D,K),r(D,fe,K),T(re,D,K),r(D,pe,K),T(oe,D,K),r(D,$e,K),T(ce,D,K),r(D,me,K),T(R,D,K),r(D,te,K),T(J,D,K),r(D,se,K),T(de,D,K),r(D,he,K),T(ve,D,K),r(D,ge,K),T(xe,D,K),r(D,be,K),T(z,D,K),r(D,W,K),T(k,D,K),r(D,Y,K),T(Le,D,K),r(D,we,K),T(qe,D,K),r(D,Pe,K),T(Me,D,K),He=!0},p(D,K){const ke={};K&1&&(ke.$$scope={dirty:K,ctx:D}),t.$set(ke);const je={};K&1&&(je.$$scope={dirty:K,ctx:D}),i.$set(je);const ze={};K&1&&(ze.$$scope={dirty:K,ctx:D}),m.$set(ze);const Ae={};K&1&&(Ae.$$scope={dirty:K,ctx:D}),f.$set(Ae);const Oe={};K&1&&(Oe.$$scope={dirty:K,ctx:D}),u.$set(Oe);const Te={};K&1&&(Te.$$scope={dirty:K,ctx:D}),w.$set(Te);const Ue={};K&1&&(Ue.$$scope={dirty:K,ctx:D}),h.$set(Ue);const Se={};K&1&&(Se.$$scope={dirty:K,ctx:D}),q.$set(Se);const Re={};K&1&&(Re.$$scope={dirty:K,ctx:D}),N.$set(Re);const Ee={};K&1&&(Ee.$$scope={dirty:K,ctx:D}),X.$set(Ee);const Je={};K&1&&(Je.$$scope={dirty:K,ctx:D}),F.$set(Je);const De={};K&1&&(De.$$scope={dirty:K,ctx:D}),U.$set(De);const Qe={};K&1&&(Qe.$$scope={dirty:K,ctx:D}),ae.$set(Qe);const Ve={};K&1&&(Ve.$$scope={dirty:K,ctx:D}),re.$set(Ve);const Ke={};K&1&&(Ke.$$scope={dirty:K,ctx:D}),oe.$set(Ke);const Ge={};K&1&&(Ge.$$scope={dirty:K,ctx:D}),ce.$set(Ge);const Xe={};K&1&&(Xe.$$scope={dirty:K,ctx:D}),R.$set(Xe);const P={};K&1&&(P.$$scope={dirty:K,ctx:D}),J.$set(P);const G={};K&1&&(G.$$scope={dirty:K,ctx:D}),de.$set(G);const Ye={};K&1&&(Ye.$$scope={dirty:K,ctx:D}),ve.$set(Ye);const We={};K&1&&(We.$$scope={dirty:K,ctx:D}),xe.$set(We);const Ze={};K&1&&(Ze.$$scope={dirty:K,ctx:D}),z.$set(Ze);const ye={};K&1&&(ye.$$scope={dirty:K,ctx:D}),k.$set(ye);const et={};K&1&&(et.$$scope={dirty:K,ctx:D}),Le.$set(et);const tt={};K&1&&(tt.$$scope={dirty:K,ctx:D}),qe.$set(tt);const st={};K&1&&(st.$$scope={dirty:K,ctx:D}),Me.$set(st)},i(D){He||(A(t.$$.fragment,D),A(i.$$.fragment,D),A(m.$$.fragment,D),A(f.$$.fragment,D),A(u.$$.fragment,D),A(w.$$.fragment,D),A(h.$$.fragment,D),A(q.$$.fragment,D),A(N.$$.fragment,D),A(X.$$.fragment,D),A(F.$$.fragment,D),A(U.$$.fragment,D),A(ae.$$.fragment,D),A(re.$$.fragment,D),A(oe.$$.fragment,D),A(ce.$$.fragment,D),A(R.$$.fragment,D),A(J.$$.fragment,D),A(de.$$.fragment,D),A(ve.$$.fragment,D),A(xe.$$.fragment,D),A(z.$$.fragment,D),A(k.$$.fragment,D),A(Le.$$.fragment,D),A(qe.$$.fragment,D),A(Me.$$.fragment,D),He=!0)},o(D){j(t.$$.fragment,D),j(i.$$.fragment,D),j(m.$$.fragment,D),j(f.$$.fragment,D),j(u.$$.fragment,D),j(w.$$.fragment,D),j(h.$$.fragment,D),j(q.$$.fragment,D),j(N.$$.fragment,D),j(X.$$.fragment,D),j(F.$$.fragment,D),j(U.$$.fragment,D),j(ae.$$.fragment,D),j(re.$$.fragment,D),j(oe.$$.fragment,D),j(ce.$$.fragment,D),j(R.$$.fragment,D),j(J.$$.fragment,D),j(de.$$.fragment,D),j(ve.$$.fragment,D),j(xe.$$.fragment,D),j(z.$$.fragment,D),j(k.$$.fragment,D),j(Le.$$.fragment,D),j(qe.$$.fragment,D),j(Me.$$.fragment,D),He=!1},d(D){D&&(a(e),a(s),a($),a(n),a(l),a(L),a(p),a(c),a(M),a(I),a(Q),a(V),a(ne),a(le),a(fe),a(pe),a($e),a(me),a(te),a(se),a(he),a(ge),a(be),a(W),a(Y),a(we),a(Pe)),H(t,D),H(i,D),H(m,D),H(f,D),H(u,D),H(w,D),H(h,D),H(q,D),H(N,D),H(X,D),H(F,D),H(U,D),H(ae,D),H(re,D),H(oe,D),H(ce,D),H(R,D),H(J,D),H(de,D),H(ve,D),H(xe,D),H(z,D),H(k,D),H(Le,D),H(qe,D),H(Me,D)}}}function lr(x){let e,o;return e=new B({props:{$$slots:{default:[sr]},$$scope:{ctx:x}}}),{c(){E(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,t){T(e,s,t),o=!0},p(s,[t]){const $={};t&1&&($.$$scope={dirty:t,ctx:s}),e.$set($)},i(s){o||(A(e.$$.fragment,s),o=!0)},o(s){j(e.$$.fragment,s),o=!1},d(s){H(e,s)}}}class nr extends Be{constructor(e){super(),Fe(this,e,null,lr,Ne,{})}}function ir(x){let e,o="3ICS 2026 - POO",s,t,$,i="Version imprimable 🖨",n,m,l,f="Version défilable",L,u,p,w="Lien vers les TP/TD",c,h,M,q=`- Lien de la présentation sur e-campus - Suivre depuis le projecteur - Montrer bouton d'aide -
		Overview (touche 'o')`;return{c(){e=C("h1"),s=y(o),t=v(),$=C("a"),$.textContent=i,n=C("br"),m=v(),l=C("a"),l.textContent=f,L=C("br"),u=v(),p=C("a"),p.textContent=w,c=C("br"),h=v(),M=C("aside"),M.textContent=q,this.h()},l(I){e=_(I,"H1",{class:!0});var N=ue(e);s=Z(N,o),N.forEach(a),t=d(I),$=_(I,"A",{class:!0,href:!0,target:!0,"data-svelte-h":!0}),b($)!=="svelte-mxju2i"&&($.textContent=i),n=_(I,"BR",{}),m=d(I),l=_(I,"A",{class:!0,href:!0,target:!0,"data-svelte-h":!0}),b(l)!=="svelte-1ei5a4k"&&(l.textContent=f),L=_(I,"BR",{}),u=d(I),p=_(I,"A",{class:!0,href:!0,"data-svelte-h":!0}),b(p)!=="svelte-g1grt8"&&(p.textContent=w),c=_(I,"BR",{}),h=d(I),M=_(I,"ASIDE",{class:!0,"data-svelte-h":!0}),b(M)!=="svelte-1dq3421"&&(M.textContent=q),this.h()},h(){g(e,"class","capitalize"),g($,"class","print:hidden"),g($,"href","/?print-pdf"),g($,"target","_blank"),g(l,"class","print:hidden"),g(l,"href","/?view=scroll"),g(l,"target","_blank"),g(p,"class","print:hidden"),g(p,"href","#/exercices"),g(M,"class","notes")},m(I,N){r(I,e,N),ee(e,s),r(I,t,N),r(I,$,N),r(I,n,N),r(I,m,N),r(I,l,N),r(I,L,N),r(I,u,N),r(I,p,N),r(I,c,N),r(I,h,N),r(I,M,N)},p:O,d(I){I&&(a(e),a(t),a($),a(n),a(m),a(l),a(L),a(u),a(p),a(c),a(h),a(M))}}}function ar(x){let e,o="Les concepts de la POO",s,t,$="<li>Généralités</li> <li>L&#39;encapsulation</li> <li>L&#39;héritage</li> <li>La composition</li> <li>Les interfaces</li> <li>Le polymorphisme</li>",i,n,m=`Voici le fil rouge du cours. On va voir ces 6 concepts dans l'ordre. Chaque concept s'appuie sur
		le précédent. À la fin, vous saurez concevoir une architecture objet complète. Prenez des notes
		sur ce qui vous semble flou, on fera des pauses pour les questions.`;return{c(){e=C("h3"),e.textContent=o,s=v(),t=C("ol"),t.innerHTML=$,i=v(),n=C("aside"),n.textContent=m,this.h()},l(l){e=_(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1thzgzl"&&(e.textContent=o),s=d(l),t=_(l,"OL",{"data-svelte-h":!0}),b(t)!=="svelte-vjnx6z"&&(t.innerHTML=$),i=d(l),n=_(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1evfkkj"&&(n.textContent=m),this.h()},h(){g(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,n,f)},p:O,d(l){l&&(a(e),a(s),a(t),a(i),a(n))}}}function rr(x){let e,o,s,t,$,i,n,m,l,f,L,u,p,w,c,h,M,q,I,N,Q,X;return e=new B({props:{animate:!0,$$slots:{default:[ir]},$$scope:{ctx:x}}}),s=new ma({}),$=new na({}),n=new jl({}),l=new B({props:{$$slots:{default:[ar]},$$scope:{ctx:x}}}),L=new Qi({}),p=new ai({}),c=new bs({}),M=new nn({}),I=new An({}),Q=new nr({}),{c(){E(e.$$.fragment),o=v(),E(s.$$.fragment),t=v(),E($.$$.fragment),i=v(),E(n.$$.fragment),m=v(),E(l.$$.fragment),f=v(),E(L.$$.fragment),u=v(),E(p.$$.fragment),w=v(),E(c.$$.fragment),h=v(),E(M.$$.fragment),q=v(),E(I.$$.fragment),N=v(),E(Q.$$.fragment)},l(V){S(e.$$.fragment,V),o=d(V),S(s.$$.fragment,V),t=d(V),S($.$$.fragment,V),i=d(V),S(n.$$.fragment,V),m=d(V),S(l.$$.fragment,V),f=d(V),S(L.$$.fragment,V),u=d(V),S(p.$$.fragment,V),w=d(V),S(c.$$.fragment,V),h=d(V),S(M.$$.fragment,V),q=d(V),S(I.$$.fragment,V),N=d(V),S(Q.$$.fragment,V)},m(V,F){T(e,V,F),r(V,o,F),T(s,V,F),r(V,t,F),T($,V,F),r(V,i,F),T(n,V,F),r(V,m,F),T(l,V,F),r(V,f,F),T(L,V,F),r(V,u,F),T(p,V,F),r(V,w,F),T(c,V,F),r(V,h,F),T(M,V,F),r(V,q,F),T(I,V,F),r(V,N,F),T(Q,V,F),X=!0},p(V,[F]){const ne={};F&1&&(ne.$$scope={dirty:F,ctx:V}),e.$set(ne);const U={};F&1&&(U.$$scope={dirty:F,ctx:V}),l.$set(U)},i(V){X||(A(e.$$.fragment,V),A(s.$$.fragment,V),A($.$$.fragment,V),A(n.$$.fragment,V),A(l.$$.fragment,V),A(L.$$.fragment,V),A(p.$$.fragment,V),A(c.$$.fragment,V),A(M.$$.fragment,V),A(I.$$.fragment,V),A(Q.$$.fragment,V),X=!0)},o(V){j(e.$$.fragment,V),j(s.$$.fragment,V),j($.$$.fragment,V),j(n.$$.fragment,V),j(l.$$.fragment,V),j(L.$$.fragment,V),j(p.$$.fragment,V),j(c.$$.fragment,V),j(M.$$.fragment,V),j(I.$$.fragment,V),j(Q.$$.fragment,V),X=!1},d(V){V&&(a(o),a(t),a(i),a(m),a(f),a(u),a(w),a(h),a(q),a(N)),H(e,V),H(s,V),H($,V),H(n,V),H(l,V),H(L,V),H(p,V),H(c,V),H(M,V),H(I,V),H(Q,V)}}}class ur extends Be{constructor(e){super(),Fe(this,e,null,rr,Ne,{})}}function or(x){let e,o;return e=new ur({}),{c(){E(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,t){T(e,s,t),o=!0},i(s){o||(A(e.$$.fragment,s),o=!0)},o(s){j(e.$$.fragment,s),o=!1},d(s){H(e,s)}}}function cr(x){let e,o,s,t,$;return document.title="3ICS 2026 - POO - Alexis Picot",t=new Dt({props:{$$slots:{default:[or]},$$scope:{ctx:x}}}),{c(){e=C("link"),o=C("meta"),s=v(),E(t.$$.fragment),this.h()},l(i){const n=It("svelte-v7f1ci",document.head);e=_(n,"LINK",{rel:!0,href:!0}),o=_(n,"META",{name:!0,content:!0}),n.forEach(a),s=d(i),S(t.$$.fragment,i),this.h()},h(){g(e,"rel","icon"),g(e,"href","https://fav.farm/💻"),g(o,"name","timestamp"),g(o,"content",new Date(1770080743442).toLocaleString())},m(i,n){ee(document.head,e),ee(document.head,o),r(i,s,n),T(t,i,n),$=!0},p(i,[n]){const m={};n&1&&(m.$$scope={dirty:n,ctx:i}),t.$set(m)},i(i){$||(A(t.$$.fragment,i),$=!0)},o(i){j(t.$$.fragment,i),$=!1},d(i){i&&a(s),a(e),a(o),H(t,i)}}}class dr extends Be{constructor(e){super(),Fe(this,e,null,cr,Ne,{})}}export{dr as component,mr as universal};
