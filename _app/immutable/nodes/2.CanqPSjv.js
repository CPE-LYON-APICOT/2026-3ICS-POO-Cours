import{s as We,n as k,z as Rt}from"../chunks/scheduler.CoHlJ3bk.js";import{S as Xe,i as Ye,q,t as P,a as H,u as S,v as M,r as T,d as a,b as r,e as C,y as h,h as d,j as g,l as v,w,c as ne,f as Le,g as G,k as Q,A as Ge,B as Qe,x as Vt,z as Xt}from"../chunks/index.CPtYSGGs.js";import{S as z,P as Ke,C as Z,a as Yt}from"../chunks/plantUml.DeUj5SCa.js";const Zt=!1,yt=!0,mv=Object.freeze(Object.defineProperty({__proto__:null,prerender:yt,ssr:Zt},Symbol.toStringTag,{value:"Module"}));function es(_){let e,o="En POO, l'héritage est un mécanisme qui permet de créer une nouvelle classe à partir d'une classe existante.",s,t,p=`L'héritage, c'est comme dans la vraie vie : les enfants héritent des caractéristiques des parents.\r
			En code, une classe enfant récupère automatiquement tout ce que possède la classe parent.\r
			C'est un des piliers de la POO, introduit dès Simula en 1967 !`;return{c(){e=g("p"),e.textContent=o,s=v(),t=g("aside"),t.textContent=p,this.h()},l(i){e=C(i,"P",{"data-svelte-h":!0}),h(e)!=="svelte-1cxtphb"&&(e.textContent=o),s=d(i),t=C(i,"ASIDE",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-58gjd2"&&(t.textContent=p),this.h()},h(){w(t,"class","notes")},m(i,u){r(i,e,u),r(i,s,u),r(i,t,u)},p:k,d(i){i&&(a(e),a(s),a(t))}}}function ts(_){let e,o=`La classe existante est appelée <span class="text-important">classe mère</span> ou
			<span class="text-important">classe de base</span>.`,s,t,p=`On dit aussi "superclasse" en anglais (superclass). C'est le terme utilisé dans la documentation Java.\r
			La classe mère définit le comportement commun à toutes ses classes filles.`;return{c(){e=g("p"),e.innerHTML=o,s=v(),t=g("aside"),t.textContent=p,this.h()},l(i){e=C(i,"P",{"data-svelte-h":!0}),h(e)!=="svelte-17c6x0h"&&(e.innerHTML=o),s=d(i),t=C(i,"ASIDE",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-c2wodv"&&(t.textContent=p),this.h()},h(){w(t,"class","notes")},m(i,u){r(i,e,u),r(i,s,u),r(i,t,u)},p:k,d(i){i&&(a(e),a(s),a(t))}}}function ss(_){let e,o=`La nouvelle classe est appelée <span class="text-important">classe fille</span> ou
			<span class="text-important">classe dérivée</span>.`,s,t,p="La classe fille peut aussi ajouter des attributs et des méthodes qui lui sont propres.",i,u,m=`On dit aussi "subclass" en anglais. La classe fille est une spécialisation de la classe mère.\r
			C'est la relation "est un" : un Chien est un Animal, donc Chien hérite d'Animal.\r
			En Java, toutes les classes héritent implicitement de Object. C'est la racine de l'arbre d'héritage.`;return{c(){e=g("p"),e.innerHTML=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"P",{"data-svelte-h":!0}),h(e)!=="svelte-1uk6o90"&&(e.innerHTML=o),s=d(n),t=C(n,"P",{"data-svelte-h":!0}),h(t)!=="svelte-hn2jyx"&&(t.textContent=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1xkwxx4"&&(u.textContent=m),this.h()},h(){w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function ls(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function ns(_){let e,o="Visualisons l'héritage",s,t,p,i,u="La flèche pointe vers la classe mère : <code>Chien</code> et <code>Chat</code> héritent de <code>Animal</code>.",m,n,$=`C'est la notation UML standard. La flèche avec un triangle vide pointe toujours vers le parent.\r
			Chien et Chat sont des spécialisations d'Animal.`,x;return t=new Ke({props:{$$slots:{default:[ls]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-88th8y"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-15afcpd"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-r9k6a2"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function is(_){let e=`
class Animal {
    void crier() {
        System.out.println("Je suis un animal");
    }
}

class Chien extends Animal {
    boolean inscritLOF;
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function as(_){let e,o="En code Java",s,t,p,i,u='On utilise le mot-clé <code class="code text-important">extends</code> pour hériter d&#39;une classe.',m,n,$="Le mot-clé extends, c'est le lien d'héritage. Chien étend Animal, donc Chien a tout ce qu'Animal a.",x;return t=new Z({props:{$$slots:{default:[is]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1w10xpg"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{"data-svelte-h":!0}),h(i)!=="svelte-fb6via"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1efpv08"&&(n.textContent=$),this.h()},h(){w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function rs(_){let e,o=`La classe fille hérite des attributs et des méthodes de la classe mère. Elle peut aussi\r
			redéfinir les méthodes de la classe mère.`,s,t,p='Redéfinir une méthode s&#39;appelle <span class="text-important">redéfinition</span> (ou <em>override</em>).',i,u,m=`Attention à ne pas confondre redéfinition (override) et surcharge (overload) !\r
			Redéfinition : même signature, comportement différent dans la classe fille.\r
			Surcharge : même nom, signatures différentes (nombre/type de paramètres).`;return{c(){e=g("p"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"P",{"data-svelte-h":!0}),h(e)!=="svelte-1def0s3"&&(e.textContent=o),s=d(n),t=C(n,"P",{"data-svelte-h":!0}),h(t)!=="svelte-16p7trl"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1i21kkf"&&(u.textContent=m),this.h()},h(){w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function us(_){let e,o="Pourquoi redéfinir une méthode ?",s,t,p='<li class="fragment">Adapter le comportement de la méthode à la classe fille</li> <li class="fragment">Spécialiser un comportement générique</li>',i,u,m='<p class="text-accent-200">Exemple : Un animal crie, mais chaque animal crie différemment !</p>',n,$,x=`C'est là que la POO prend tout son sens. Le concept général est dans la classe mère, le détail dans la fille.\r
			Un Animal sait qu'il doit crier, mais seul le Chien sait qu'il aboie.\r
			C'est le Template Method Pattern : la structure dans le parent, les détails dans les enfants.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=p,i=v(),u=g("div"),u.innerHTML=m,n=v(),$=g("aside"),$.textContent=x,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-110ib47"&&(e.textContent=o),s=d(l),t=C(l,"UL",{"data-svelte-h":!0}),h(t)!=="svelte-r58kxc"&&(t.innerHTML=p),i=d(l),u=C(l,"DIV",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-105ov4u"&&(u.innerHTML=m),n=d(l),$=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-1fg734m"&&($.textContent=x),this.h()},h(){w(u,"class","fragment mt-8"),w($,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,u,f),r(l,n,f),r(l,$,f)},p:k,d(l){l&&(a(e),a(s),a(t),a(i),a(u),a(n),a($))}}}function os(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function $s(_){let e,o="La redéfinition en pratique",s,t,p,i,u=`Regardez le @Override. C'est une annotation qui dit au compilateur : je redéfinis une méthode du parent.\r
			Si vous faites une faute de frappe dans le nom de la méthode, le compilateur vous préviendra.`,m;return t=new Z({props:{lines:"1-5|7-11",$$slots:{default:[os]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("aside"),i.textContent=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1eurtkj"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-usptrd"&&(i.textContent=u),this.h()},h(){w(i,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function fs(_){let e=`
void Crier() {  // Oups, majuscule !
    System.out.println("Wouaf");
}
// Compile... mais ne redéfinit rien !
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function cs(_){let e=`
@Override
void Crier() {  // Erreur de compilation !
    System.out.println("Wouaf");
}
// Le compilateur détecte l'erreur
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function ps(_){let e,o="L'annotation @Override",s,t,p='Bonne pratique : <b>toujours</b> utiliser <code class="text-important">@Override</code> lors d&#39;une redéfinition.',i,u,m,n,$="❌ Sans @Override",x,l,f,L,c,b="✅ Avec @Override",I,E,O,A,D=`Sans Override, si vous vous trompez dans le nom, vous créez une nouvelle méthode au lieu de redéfinir.\r
			Avec Override, le compilateur vérifie que la méthode existe bien dans le parent.`,B;return l=new Z({props:{class:"language-java",$$slots:{default:[fs]},$$scope:{ctx:_}}}),E=new Z({props:{class:"language-java",$$slots:{default:[cs]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("div"),m=g("div"),n=g("h4"),n.textContent=$,x=v(),T(l.$$.fragment),f=v(),L=g("div"),c=g("h4"),c.textContent=b,I=v(),T(E.$$.fragment),O=v(),A=g("aside"),A.textContent=D,this.h()},l(V){e=C(V,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-50lfmg"&&(e.textContent=o),s=d(V),t=C(V,"P",{"data-svelte-h":!0}),h(t)!=="svelte-d96ked"&&(t.innerHTML=p),i=d(V),u=C(V,"DIV",{class:!0});var K=Le(u);m=C(K,"DIV",{});var ie=Le(m);n=C(ie,"H4",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-15xopgk"&&(n.textContent=$),x=d(ie),M(l.$$.fragment,ie),ie.forEach(a),f=d(K),L=C(K,"DIV",{});var j=Le(L);c=C(j,"H4",{class:!0,"data-svelte-h":!0}),h(c)!=="svelte-1wl6p7j"&&(c.textContent=b),I=d(j),M(E.$$.fragment,j),j.forEach(a),K.forEach(a),O=d(V),A=C(V,"ASIDE",{class:!0,"data-svelte-h":!0}),h(A)!=="svelte-ggk4l5"&&(A.textContent=D),this.h()},h(){w(n,"class","text-red-400"),w(c,"class","text-green-400"),w(u,"class","grid grid-cols-2 gap-8 mt-6"),w(A,"class","notes")},m(V,K){r(V,e,K),r(V,s,K),r(V,t,K),r(V,i,K),r(V,u,K),ne(u,m),ne(m,n),ne(m,x),S(l,m,null),ne(u,f),ne(u,L),ne(L,c),ne(L,I),S(E,L,null),r(V,O,K),r(V,A,K),B=!0},p(V,K){const ie={};K&1&&(ie.$$scope={dirty:K,ctx:V}),l.$set(ie);const j={};K&1&&(j.$$scope={dirty:K,ctx:V}),E.$set(j)},i(V){B||(H(l.$$.fragment,V),H(E.$$.fragment,V),B=!0)},o(V){P(l.$$.fragment,V),P(E.$$.fragment,V),B=!1},d(V){V&&(a(e),a(s),a(t),a(i),a(u),a(O),a(A)),q(l),q(E)}}}function ms(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function ds(_){let e,o="Appeler la méthode du parent : super",s,t,p='On peut appeler la méthode de la classe mère avec <code class="text-important">super</code>.',i,u,m,n,$="Super permet d'accéder au comportement du parent. Utile quand on veut étendre le comportement plutôt que le remplacer complètement.",x;return u=new Z({props:{lines:"7-11",$$slots:{default:[ms]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment),m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-qjr5g"&&(e.textContent=o),s=d(l),t=C(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-v8yuqg"&&(t.innerHTML=p),i=d(l),M(u.$$.fragment,l),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-o07epn"&&(n.textContent=$),this.h()},h(){w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),S(u,l,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),u.$set(L)},i(l){x||(H(u.$$.fragment,l),x=!0)},o(l){P(u.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(t),a(i),a(m),a(n)),q(u,l)}}}function vs(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function xs(_){let e,o="Le constructeur et super()",s,t,p="Le constructeur de la classe fille doit appeler celui de la classe mère.",i,u,m,n,$="<code>super()</code> doit être la <b>première instruction</b> du constructeur !",x,l,f=`C'est obligatoire. Le parent doit être construit avant l'enfant.\r
			Si vous oubliez super(), Java appelle super() sans argument par défaut.`,L;return u=new Z({props:{lines:"1-6|8-13",$$slots:{default:[vs]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),T(u.$$.fragment),m=v(),n=g("p"),n.innerHTML=$,x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-b6mdxj"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-kr896n"&&(t.textContent=p),i=d(c),M(u.$$.fragment,c),m=d(c),n=C(c,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-18u9zg8"&&(n.innerHTML=$),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-18qho2n"&&(l.textContent=f),this.h()},h(){w(n,"class","fragment text-accent-200"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),S(u,c,b),r(c,m,b),r(c,n,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),u.$set(I)},i(c){L||(H(u.$$.fragment,c),L=!0)},o(c){P(u.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(n),a(x),a(l)),q(u,c)}}}function _s(_){let e,o="Les classes abstraites",s,t,p="Quand on ne peut pas tout définir...",i,u,m=`Maintenant on passe à un concept plus avancé : l'abstraction.\r
			Parfois, une classe est trop générale pour être instanciée. C'est là qu'intervient abstract.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H2",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-y699sq"&&(e.textContent=o),s=d(n),t=C(n,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1vlu38n"&&(t.textContent=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1nw4dvg"&&(u.textContent=m),this.h()},h(){w(e,"class","text-5xl"),w(t,"class","text-2xl text-gray-400"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function Cs(_){let e=`
abstract class Animal {
    abstract void crier();  // Pas d'implémentation !
}

// Animal a = new Animal();  // ❌ Erreur de compilation !
Chien c = new Chien();       // ✅ OK
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function gs(_){let e,o="Qu'est-ce qu'une classe abstraite ?",s,t,p='Une classe abstraite est une classe qui <span class="text-important">ne peut pas être instanciée</span>.',i,u,m="Elle est destinée à être héritée par d'autres classes.",n,$,x,l,f,L="{}",c,b,I;return $=new Z({props:{class:"fragment",$$slots:{default:[Cs]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("p"),u.textContent=m,n=v(),T($.$$.fragment),x=v(),l=g("aside"),f=Q(`Pensez-y comme un moule incomplet. On ne peut pas utiliser un moule incomplet pour fabriquer quelque chose.\r
			Mais les classes filles complètent le moule et deviennent utilisables.\r
			Une méthode abstraite n'a pas de corps `),c=Q(L),b=Q("  - juste une signature suivie de ;"),this.h()},l(E){e=C(E,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-ywas56"&&(e.textContent=o),s=d(E),t=C(E,"P",{"data-svelte-h":!0}),h(t)!=="svelte-uh1j94"&&(t.innerHTML=p),i=d(E),u=C(E,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1e5hthq"&&(u.textContent=m),n=d(E),M($.$$.fragment,E),x=d(E),l=C(E,"ASIDE",{class:!0});var O=Le(l);f=G(O,`Pensez-y comme un moule incomplet. On ne peut pas utiliser un moule incomplet pour fabriquer quelque chose.\r
			Mais les classes filles complètent le moule et deviennent utilisables.\r
			Une méthode abstraite n'a pas de corps `),c=G(O,L),b=G(O,"  - juste une signature suivie de ;"),O.forEach(a),this.h()},h(){w(u,"class","fragment"),w(l,"class","notes")},m(E,O){r(E,e,O),r(E,s,O),r(E,t,O),r(E,i,O),r(E,u,O),r(E,n,O),S($,E,O),r(E,x,O),r(E,l,O),ne(l,f),ne(l,c),ne(l,b),I=!0},p(E,O){const A={};O&1&&(A.$$scope={dirty:O,ctx:E}),$.$set(A)},i(E){I||(H($.$$.fragment,E),I=!0)},o(E){P($.$$.fragment,E),I=!1},d(E){E&&(a(e),a(s),a(t),a(i),a(u),a(n),a(x),a(l)),q($,E)}}}function hs(_){let e,o="Pourquoi utiliser des classes abstraites ?",s,t,p='<li class="fragment">Pour définir un <b>contrat</b> que les classes filles doivent respecter</li> <li class="fragment">Pour <b>forcer</b> les classes filles à implémenter certaines méthodes</li> <li class="fragment">Parce qu&#39;il n&#39;a parfois <b>aucun sens</b> d&#39;instancier une classe</li>',i,u,m=`🤔 Comment calculer la surface d'une "Forme" générique ? C'est impossible !`,n,$,x=`C'est une question de sémantique. Une "Forme" c'est quoi ? Un cercle ? Un carré ? On ne sait pas.\r
			Donc on ne peut pas calculer sa surface. Mais on SAIT que toute forme a une surface.\r
			La classe abstraite dit : "Je ne sais pas comment, mais mes enfants sauront."`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=p,i=v(),u=g("p"),u.textContent=m,n=v(),$=g("aside"),$.textContent=x,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1fw1imw"&&(e.textContent=o),s=d(l),t=C(l,"UL",{"data-svelte-h":!0}),h(t)!=="svelte-1f0ebwg"&&(t.innerHTML=p),i=d(l),u=C(l,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-9bhmml"&&(u.textContent=m),n=d(l),$=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-1fqfiay"&&($.textContent=x),this.h()},h(){w(u,"class","fragment mt-8 text-accent-200"),w($,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,u,f),r(l,n,f),r(l,$,f)},p:k,d(l){l&&(a(e),a(s),a(t),a(i),a(u),a(n),a($))}}}function bs(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Ls(_){let e,o="Exemple : les formes géométriques",s,t,p,i,u=`Forme est abstraite car on ne sait pas calculer la surface d'une forme générique.\r
			Mais on sait que toute forme DOIT pouvoir calculer sa surface.`,m;return t=new Ke({props:{$$slots:{default:[bs]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("aside"),i.textContent=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1l1b4vq"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-19i401s"&&(i.textContent=u),this.h()},h(){w(i,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function ws(_){let e=`
abstract class Forme {
    abstract double calculerSurface();  // Pas de corps !
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function qs(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Ps(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Hs(_){let e,o="En code Java",s,t,p,i,u,m,n,$;return t=new Z({props:{$$slots:{default:[ws]},$$scope:{ctx:_}}}),u=new Z({props:{class:"language-java",$$slots:{default:[qs]},$$scope:{ctx:_}}}),n=new Z({props:{class:"language-java",$$slots:{default:[Ps]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("div"),T(u.$$.fragment),m=v(),T(n.$$.fragment),this.h()},l(x){e=C(x,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1w10xpg"&&(e.textContent=o),s=d(x),M(t.$$.fragment,x),p=d(x),i=C(x,"DIV",{class:!0});var l=Le(i);M(u.$$.fragment,l),m=d(l),M(n.$$.fragment,l),l.forEach(a),this.h()},h(){w(i,"class","flex flex-row gap-4 mt-4")},m(x,l){r(x,e,l),r(x,s,l),S(t,x,l),r(x,p,l),r(x,i,l),S(u,i,null),ne(i,m),S(n,i,null),$=!0},p(x,l){const f={};l&1&&(f.$$scope={dirty:l,ctx:x}),t.$set(f);const L={};l&1&&(L.$$scope={dirty:l,ctx:x}),u.$set(L);const c={};l&1&&(c.$$scope={dirty:l,ctx:x}),n.$set(c)},i(x){$||(H(t.$$.fragment,x),H(u.$$.fragment,x),H(n.$$.fragment,x),$=!0)},o(x){P(t.$$.fragment,x),P(u.$$.fragment,x),P(n.$$.fragment,x),$=!1},d(x){x&&(a(e),a(s),a(p),a(i)),q(t,x),q(u),q(n)}}}function Ss(_){let e,o="Ce qu'il faut retenir",s,t,p='La classe <code class="text-important">Forme</code> est abstraite car on ne peut pas calculer la surface d&#39;une forme générique.',i,u,m="Mais <b>toutes les formes</b> doivent pouvoir calculer leur surface → c&#39;est le contrat.",n,$,x="❌ <code>new Forme()</code> → Erreur !",l,f,L="✅ <code>new Cercle(5.0)</code> → OK";return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("p"),u.innerHTML=m,n=v(),$=g("p"),$.innerHTML=x,l=v(),f=g("p"),f.innerHTML=L,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1c3ns5x"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1aglhjf"&&(t.innerHTML=p),i=d(c),u=C(c,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1yjmjvc"&&(u.innerHTML=m),n=d(c),$=C(c,"P",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-1b5sfkh"&&($.innerHTML=x),l=d(c),f=C(c,"P",{class:!0,"data-svelte-h":!0}),h(f)!=="svelte-iu5ucw"&&(f.innerHTML=L),this.h()},h(){w(u,"class","fragment"),w($,"class","fragment mt-8 text-red-400"),w(f,"class","fragment text-green-400")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),r(c,u,b),r(c,n,b),r(c,$,b),r(c,l,b),r(c,f,b)},p:k,d(c){c&&(a(e),a(s),a(t),a(i),a(u),a(n),a($),a(l),a(f))}}}function Ms(_){let e,o="⚠️ Quand NE PAS hériter",s,t,p="L'erreur classique du débutant",i,u,m=`Attention, l'héritage est puissant mais dangereux si mal utilisé.\r
			C'est l'une des erreurs les plus fréquentes chez les développeurs juniors.\r
			Même les seniors tombent dans le piège parfois !`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H2",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-1drmq8k"&&(e.textContent=o),s=d(n),t=C(n,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-3u5bob"&&(t.textContent=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-d4fqpf"&&(u.textContent=m),this.h()},h(){w(e,"class","text-5xl"),w(t,"class","text-2xl text-gray-400"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function Ts(_){let e=`
// ❌ MAUVAISE IDÉE !
class Pile extends ArrayList {
    void empiler(Object o) { add(o); }
    Object depiler() { return remove(size() - 1); }
}

// Problème : on hérite de TOUT ArrayList !
Pile p = new Pile();
p.empiler("A");
p.add(0, "B");  //  On peut ajouter n'importe où !
p.clear();      //  On peut tout supprimer !
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Es(_){let e,o="Le piège de l'héritage abusif",s,t,p="L'héritage n'est pas toujours la bonne solution !",i,u,m,n,$="Une Pile n'est PAS une ArrayList, elle UTILISE une ArrayList !",x,l,f=`C'est le fameux exemple de Joshua Bloch dans "Effective Java". Il déconseille d'hériter des collections.\r
			Le problème : on expose des méthodes qui n'ont pas de sens pour une Pile (add, remove au milieu...).\r
			C'est une violation du principe de substitution de Liskov.`,L;return u=new Z({props:{class:"language-java",$$slots:{default:[Ts]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),T(u.$$.fragment),m=v(),n=g("p"),n.textContent=$,x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1hvzkw5"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-dgmjh5"&&(t.textContent=p),i=d(c),M(u.$$.fragment,c),m=d(c),n=C(c,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1pmyb7u"&&(n.textContent=$),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-2qwtt4"&&(l.textContent=f),this.h()},h(){w(n,"class","fragment text-red-400 font-bold"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),S(u,c,b),r(c,m,b),r(c,n,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),u.$set(I)},i(c){L||(H(u.$$.fragment,c),L=!0)},o(c){P(u.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(n),a(x),a(l)),q(u,c)}}}function As(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Is(_){let e,o="La bonne approche : composition",s,t,p,i,u="On expose uniquement ce qui a du sens pour une Pile.",m,n,$=`Voilà la solution propre. La Pile "a une" ArrayList, elle n'"est pas" une ArrayList.\r
			L'utilisateur ne peut faire que empiler et depiler. Impossible de corrompre l'état interne.\r
			C'est le principe d'encapsulation appliqué à l'architecture.`,x;return t=new Z({props:{class:"language-java",$$slots:{default:[As]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.textContent=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-7t2ot"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-14pjpsh"&&(i.textContent=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-czhf2j"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment text-green-400 font-bold"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function Ds(_){let e,o="Comment choisir ?",s,t,p='<p class="fragment">🤔 Posez-vous la question :</p> <p class="fragment mt-4 text-3xl">&quot;Est-ce qu&#39;un <b>X</b> <span class="text-important">EST UN</span> <b>Y</b> ?&quot;</p> <div class="fragment mt-8"><p class="text-green-400">✅ Un Chien <b>est un</b> Animal → Héritage</p> <p class="text-green-400">✅ Un Cercle <b>est une</b> Forme → Héritage</p> <p class="text-red-400">❌ Une Pile <b>est une</b> ArrayList → NON !</p> <p class="text-blue-400">✅ Une Pile <b>a une</b> ArrayList → Composition</p></div>',i,u,m=`C'est la règle d'or. Si la phrase "X est un Y" sonne faux, n'héritez pas.\r
			On verra la composition dans le prochain chapitre.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1sib837"&&(e.textContent=o),s=d(n),t=C(n,"DIV",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-b6u81r"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1dryqu3"&&(u.textContent=m),this.h()},h(){w(t,"class","text-2xl mt-8"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function js(_){let e,o="Récapitulatif : les mots-clés",s,t,p='<tr><td class="p-4"><code class="text-important">extends</code></td> <td class="p-4">Hériter d&#39;une classe</td></tr> <tr><td class="p-4"><code class="text-important">super</code></td> <td class="p-4">Accéder à la classe mère</td></tr> <tr><td class="p-4"><code class="text-important">super()</code></td> <td class="p-4">Appeler le constructeur parent</td></tr> <tr><td class="p-4"><code class="text-important">@Override</code></td> <td class="p-4">Redéfinir une méthode (annotation)</td></tr> <tr><td class="p-4"><code class="text-important">abstract</code></td> <td class="p-4">Classe/méthode non instanciable</td></tr>',i,u,m=`Ce sont les 5 mots-clés essentiels de l'héritage en Java. Apprenez-les par cœur !\r
			Extends pour hériter, super pour accéder au parent, @Override pour redéfinir proprement.\r
			Avec ça, vous couvrez 95% des cas d'utilisation de l'héritage.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("table"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-18myzwu"&&(e.textContent=o),s=d(n),t=C(n,"TABLE",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1mjxyt9"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-ij1jd2"&&(u.textContent=m),this.h()},h(){w(t,"class","text-xl"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function ks(_){let e,o="L'héritage",s,t,p,i,u,m,n,$,x,l,f,L,c,b,I,E,O,A,D,B,V,K,ie,j,se,_e,be,he,Pe,xe,we,ge,qe,ee,me,te,ve,le,de,He,Ee,Se,Ae,y,pe;return t=new z({props:{$$slots:{default:[es]},$$scope:{ctx:_}}}),i=new z({props:{$$slots:{default:[ts]},$$scope:{ctx:_}}}),m=new z({props:{$$slots:{default:[ss]},$$scope:{ctx:_}}}),$=new z({props:{$$slots:{default:[ns]},$$scope:{ctx:_}}}),l=new z({props:{$$slots:{default:[as]},$$scope:{ctx:_}}}),L=new z({props:{$$slots:{default:[rs]},$$scope:{ctx:_}}}),b=new z({props:{$$slots:{default:[us]},$$scope:{ctx:_}}}),E=new z({props:{$$slots:{default:[$s]},$$scope:{ctx:_}}}),A=new z({props:{$$slots:{default:[ps]},$$scope:{ctx:_}}}),B=new z({props:{$$slots:{default:[ds]},$$scope:{ctx:_}}}),K=new z({props:{$$slots:{default:[xs]},$$scope:{ctx:_}}}),j=new z({props:{data_background_color:"#1a1a2e",$$slots:{default:[_s]},$$scope:{ctx:_}}}),_e=new z({props:{$$slots:{default:[gs]},$$scope:{ctx:_}}}),he=new z({props:{$$slots:{default:[hs]},$$scope:{ctx:_}}}),xe=new z({props:{$$slots:{default:[Ls]},$$scope:{ctx:_}}}),ge=new z({props:{$$slots:{default:[Hs]},$$scope:{ctx:_}}}),ee=new z({props:{$$slots:{default:[Ss]},$$scope:{ctx:_}}}),te=new z({props:{data_background_color:"#3d1a1a",$$slots:{default:[Ms]},$$scope:{ctx:_}}}),le=new z({props:{$$slots:{default:[Es]},$$scope:{ctx:_}}}),He=new z({props:{$$slots:{default:[Is]},$$scope:{ctx:_}}}),Se=new z({props:{$$slots:{default:[Ds]},$$scope:{ctx:_}}}),y=new z({props:{$$slots:{default:[js]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),T(i.$$.fragment),u=v(),T(m.$$.fragment),n=v(),T($.$$.fragment),x=v(),T(l.$$.fragment),f=v(),T(L.$$.fragment),c=v(),T(b.$$.fragment),I=v(),T(E.$$.fragment),O=v(),T(A.$$.fragment),D=v(),T(B.$$.fragment),V=v(),T(K.$$.fragment),ie=v(),T(j.$$.fragment),se=v(),T(_e.$$.fragment),be=v(),T(he.$$.fragment),Pe=v(),T(xe.$$.fragment),we=v(),T(ge.$$.fragment),qe=v(),T(ee.$$.fragment),me=v(),T(te.$$.fragment),ve=v(),T(le.$$.fragment),de=v(),T(He.$$.fragment),Ee=v(),T(Se.$$.fragment),Ae=v(),T(y.$$.fragment)},l(Y){e=C(Y,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-taqcdc"&&(e.textContent=o),s=d(Y),M(t.$$.fragment,Y),p=d(Y),M(i.$$.fragment,Y),u=d(Y),M(m.$$.fragment,Y),n=d(Y),M($.$$.fragment,Y),x=d(Y),M(l.$$.fragment,Y),f=d(Y),M(L.$$.fragment,Y),c=d(Y),M(b.$$.fragment,Y),I=d(Y),M(E.$$.fragment,Y),O=d(Y),M(A.$$.fragment,Y),D=d(Y),M(B.$$.fragment,Y),V=d(Y),M(K.$$.fragment,Y),ie=d(Y),M(j.$$.fragment,Y),se=d(Y),M(_e.$$.fragment,Y),be=d(Y),M(he.$$.fragment,Y),Pe=d(Y),M(xe.$$.fragment,Y),we=d(Y),M(ge.$$.fragment,Y),qe=d(Y),M(ee.$$.fragment,Y),me=d(Y),M(te.$$.fragment,Y),ve=d(Y),M(le.$$.fragment,Y),de=d(Y),M(He.$$.fragment,Y),Ee=d(Y),M(Se.$$.fragment,Y),Ae=d(Y),M(y.$$.fragment,Y)},m(Y,ce){r(Y,e,ce),r(Y,s,ce),S(t,Y,ce),r(Y,p,ce),S(i,Y,ce),r(Y,u,ce),S(m,Y,ce),r(Y,n,ce),S($,Y,ce),r(Y,x,ce),S(l,Y,ce),r(Y,f,ce),S(L,Y,ce),r(Y,c,ce),S(b,Y,ce),r(Y,I,ce),S(E,Y,ce),r(Y,O,ce),S(A,Y,ce),r(Y,D,ce),S(B,Y,ce),r(Y,V,ce),S(K,Y,ce),r(Y,ie,ce),S(j,Y,ce),r(Y,se,ce),S(_e,Y,ce),r(Y,be,ce),S(he,Y,ce),r(Y,Pe,ce),S(xe,Y,ce),r(Y,we,ce),S(ge,Y,ce),r(Y,qe,ce),S(ee,Y,ce),r(Y,me,ce),S(te,Y,ce),r(Y,ve,ce),S(le,Y,ce),r(Y,de,ce),S(He,Y,ce),r(Y,Ee,ce),S(Se,Y,ce),r(Y,Ae,ce),S(y,Y,ce),pe=!0},p(Y,ce){const Me={};ce&1&&(Me.$$scope={dirty:ce,ctx:Y}),t.$set(Me);const Ie={};ce&1&&(Ie.$$scope={dirty:ce,ctx:Y}),i.$set(Ie);const Te={};ce&1&&(Te.$$scope={dirty:ce,ctx:Y}),m.$set(Te);const De={};ce&1&&(De.$$scope={dirty:ce,ctx:Y}),$.$set(De);const X={};ce&1&&(X.$$scope={dirty:ce,ctx:Y}),l.$set(X);const fe={};ce&1&&(fe.$$scope={dirty:ce,ctx:Y}),L.$set(fe);const je={};ce&1&&(je.$$scope={dirty:ce,ctx:Y}),b.$set(je);const ze={};ce&1&&(ze.$$scope={dirty:ce,ctx:Y}),E.$set(ze);const ke={};ce&1&&(ke.$$scope={dirty:ce,ctx:Y}),A.$set(ke);const Oe={};ce&1&&(Oe.$$scope={dirty:ce,ctx:Y}),B.$set(Oe);const Ve={};ce&1&&(Ve.$$scope={dirty:ce,ctx:Y}),K.$set(Ve);const Ue={};ce&1&&(Ue.$$scope={dirty:ce,ctx:Y}),j.$set(Ue);const Re={};ce&1&&(Re.$$scope={dirty:ce,ctx:Y}),_e.$set(Re);const W={};ce&1&&(W.$$scope={dirty:ce,ctx:Y}),he.$set(W);const Ce={};ce&1&&(Ce.$$scope={dirty:ce,ctx:Y}),xe.$set(Ce);const Be={};ce&1&&(Be.$$scope={dirty:ce,ctx:Y}),ge.$set(Be);const Je={};ce&1&&(Je.$$scope={dirty:ce,ctx:Y}),ee.$set(Je);const Ne={};ce&1&&(Ne.$$scope={dirty:ce,ctx:Y}),te.$set(Ne);const N={};ce&1&&(N.$$scope={dirty:ce,ctx:Y}),le.$set(N);const oe={};ce&1&&(oe.$$scope={dirty:ce,ctx:Y}),He.$set(oe);const F={};ce&1&&(F.$$scope={dirty:ce,ctx:Y}),Se.$set(F);const $e={};ce&1&&($e.$$scope={dirty:ce,ctx:Y}),y.$set($e)},i(Y){pe||(H(t.$$.fragment,Y),H(i.$$.fragment,Y),H(m.$$.fragment,Y),H($.$$.fragment,Y),H(l.$$.fragment,Y),H(L.$$.fragment,Y),H(b.$$.fragment,Y),H(E.$$.fragment,Y),H(A.$$.fragment,Y),H(B.$$.fragment,Y),H(K.$$.fragment,Y),H(j.$$.fragment,Y),H(_e.$$.fragment,Y),H(he.$$.fragment,Y),H(xe.$$.fragment,Y),H(ge.$$.fragment,Y),H(ee.$$.fragment,Y),H(te.$$.fragment,Y),H(le.$$.fragment,Y),H(He.$$.fragment,Y),H(Se.$$.fragment,Y),H(y.$$.fragment,Y),pe=!0)},o(Y){P(t.$$.fragment,Y),P(i.$$.fragment,Y),P(m.$$.fragment,Y),P($.$$.fragment,Y),P(l.$$.fragment,Y),P(L.$$.fragment,Y),P(b.$$.fragment,Y),P(E.$$.fragment,Y),P(A.$$.fragment,Y),P(B.$$.fragment,Y),P(K.$$.fragment,Y),P(j.$$.fragment,Y),P(_e.$$.fragment,Y),P(he.$$.fragment,Y),P(xe.$$.fragment,Y),P(ge.$$.fragment,Y),P(ee.$$.fragment,Y),P(te.$$.fragment,Y),P(le.$$.fragment,Y),P(He.$$.fragment,Y),P(Se.$$.fragment,Y),P(y.$$.fragment,Y),pe=!1},d(Y){Y&&(a(e),a(s),a(p),a(u),a(n),a(x),a(f),a(c),a(I),a(O),a(D),a(V),a(ie),a(se),a(be),a(Pe),a(we),a(qe),a(me),a(ve),a(de),a(Ee),a(Ae)),q(t,Y),q(i,Y),q(m,Y),q($,Y),q(l,Y),q(L,Y),q(b,Y),q(E,Y),q(A,Y),q(B,Y),q(K,Y),q(j,Y),q(_e,Y),q(he,Y),q(xe,Y),q(ge,Y),q(ee,Y),q(te,Y),q(le,Y),q(He,Y),q(Se,Y),q(y,Y)}}}function Os(_){let e,o;return e=new z({props:{$$slots:{default:[ks]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const p={};t&1&&(p.$$scope={dirty:t,ctx:s}),e.$set(p)},i(s){o||(H(e.$$.fragment,s),o=!0)},o(s){P(e.$$.fragment,s),o=!1},d(s){q(e,s)}}}class zs extends Xe{constructor(e){super(),Ye(this,e,null,Os,We,{})}}function Vs(_){let e,o,s,t,p,i,u,m,n,$,x,l,f,L,c,b,I,E,O,A;return{c(){e=Qe("svg"),o=Qe("g"),s=Qe("title"),t=Q("Layer 1"),p=Qe("g"),i=Qe("rect"),u=Qe("text"),m=Q("Données"),n=Qe("text"),$=Q("FonctionA"),x=Qe("text"),l=Q("FonctionB"),f=Qe("text"),L=Q("FonctionC"),c=Qe("text"),b=Q("FonctionD"),I=Qe("line"),E=Qe("line"),O=Qe("line"),A=Qe("line"),this.h()},l(D){e=Ge(D,"svg",{width:!0,height:!0,xmlns:!0});var B=Le(e);o=Ge(B,"g",{});var V=Le(o);s=Ge(V,"title",{});var K=Le(s);t=G(K,"Layer 1"),K.forEach(a),p=Ge(V,"g",{id:!0});var ie=Le(p);i=Ge(ie,"rect",{fill:!0,stroke:!0,x:!0,y:!0,width:!0,height:!0,id:!0}),Le(i).forEach(a),u=Ge(ie,"text",{fill:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var j=Le(u);m=G(j,"Données"),j.forEach(a),n=Ge(ie,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var se=Le(n);$=G(se,"FonctionA"),se.forEach(a),x=Ge(ie,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var _e=Le(x);l=G(_e,"FonctionB"),_e.forEach(a),f=Ge(ie,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var be=Le(f);L=G(be,"FonctionC"),be.forEach(a),c=Ge(ie,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var he=Le(c);b=G(he,"FonctionD"),he.forEach(a),I=Ge(ie,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),Le(I).forEach(a),E=Ge(ie,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),Le(E).forEach(a),O=Ge(ie,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),Le(O).forEach(a),A=Ge(ie,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),Le(A).forEach(a),ie.forEach(a),V.forEach(a),B.forEach(a),this.h()},h(){w(i,"fill","#FFDFB8"),w(i,"stroke","none"),w(i,"x","170"),w(i,"y","0"),w(i,"width","150"),w(i,"height","300"),w(i,"id","svg_1"),w(u,"fill","black"),w(u,"stroke","black"),w(u,"x","205"),w(u,"y","150"),w(u,"id","svg_2"),w(u,"font-size","24"),w(u,"font-family","Noto Sans JP"),w(u,"text-anchor","start"),w(u,"xml:space","preserve"),w(n,"class","fill-current"),w(n,"stroke","none"),w(n,"x","0"),w(n,"y","50"),w(n,"id","svg_3"),w(n,"font-size","24"),w(n,"font-family","Noto Sans JP"),w(n,"text-anchor","start"),w(n,"xml:space","preserve"),w(x,"class","fill-current"),w(x,"stroke","none"),w(x,"x","0"),w(x,"y","109.99901"),w(x,"id","svg_4"),w(x,"font-size","24"),w(x,"font-family","Noto Sans JP"),w(x,"text-anchor","start"),w(x,"xml:space","preserve"),w(f,"class","fill-current"),w(f,"stroke","none"),w(f,"x","0"),w(f,"y","170"),w(f,"id","svg_5"),w(f,"font-size","24"),w(f,"font-family","Noto Sans JP"),w(f,"text-anchor","start"),w(f,"xml:space","preserve"),w(c,"class","fill-current"),w(c,"stroke","none"),w(c,"x","0"),w(c,"y","230"),w(c,"id","svg_6"),w(c,"font-size","24"),w(c,"font-family","Noto Sans JP"),w(c,"text-anchor","start"),w(c,"xml:space","preserve"),w(I,"stroke-width","5"),w(I,"class","stroke-current"),w(I,"x1","113.53031"),w(I,"y1","222.00012"),w(I,"x2","158.37456"),w(I,"y2","222.00012"),w(I,"id","svg_7"),w(E,"stroke-width","5"),w(E,"class","stroke-current"),w(E,"x1","113.53031"),w(E,"y1","162.00012"),w(E,"x2","158.37456"),w(E,"y2","162.00012"),w(E,"id","svg_8"),w(O,"stroke-width","5"),w(O,"class","stroke-current"),w(O,"x1","113.53031"),w(O,"y1","101.99914"),w(O,"x2","158.37456"),w(O,"y2","101.99914"),w(O,"id","svg_9"),w(A,"stroke-width","5"),w(A,"class","stroke-current"),w(A,"x1","113.53031"),w(A,"y1","42.00012"),w(A,"x2","158.37455"),w(A,"y2","42.00012"),w(A,"id","svg_10"),w(p,"id","svg_11"),w(e,"width","320"),w(e,"height","300"),w(e,"xmlns","http://www.w3.org/2000/svg")},m(D,B){r(D,e,B),ne(e,o),ne(o,s),ne(s,t),ne(o,p),ne(p,i),ne(p,u),ne(u,m),ne(p,n),ne(n,$),ne(p,x),ne(x,l),ne(p,f),ne(f,L),ne(p,c),ne(c,b),ne(p,I),ne(p,E),ne(p,O),ne(p,A)},p:k,i:k,o:k,d(D){D&&a(e)}}}class Rs extends Xe{constructor(e){super(),Ye(this,e,null,Vs,We,{})}}function Us(_){let e,o,s,t,p,i,u,m,n,$,x,l,f,L,c,b,I,E,O,A,D,B,V,K;return{c(){e=Qe("svg"),o=Qe("g"),s=Qe("title"),t=Q("Layer 1"),p=Qe("g"),i=Qe("path"),u=Qe("text"),m=Q("Données"),n=Qe("text"),$=Q("MéthodeA"),x=Qe("text"),l=Q("MéthodeB"),f=Qe("line"),L=Qe("line"),c=Qe("g"),b=Qe("path"),I=Qe("text"),E=Q("Données"),O=Qe("text"),A=Q("MéthodeA"),D=Qe("text"),B=Q("MéthodeB"),V=Qe("line"),K=Qe("line"),this.h()},l(ie){e=Ge(ie,"svg",{width:!0,height:!0,xmlns:!0});var j=Le(e);o=Ge(j,"g",{});var se=Le(o);s=Ge(se,"title",{});var _e=Le(s);t=G(_e,"Layer 1"),_e.forEach(a),p=Ge(se,"g",{id:!0});var be=Le(p);i=Ge(be,"path",{id:!0,d:!0,opacity:!0,stroke:!0,fill:!0}),Le(i).forEach(a),u=Ge(be,"text",{stroke:!0,fill:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var he=Le(u);m=G(he,"Données"),he.forEach(a),n=Ge(be,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var Pe=Le(n);$=G(Pe,"MéthodeA"),Pe.forEach(a),x=Ge(be,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var xe=Le(x);l=G(xe,"MéthodeB"),xe.forEach(a),f=Ge(be,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),Le(f).forEach(a),L=Ge(be,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),Le(L).forEach(a),be.forEach(a),c=Ge(se,"g",{id:!0});var we=Le(c);b=Ge(we,"path",{id:!0,d:!0,opacity:!0,stroke:!0,fill:!0}),Le(b).forEach(a),I=Ge(we,"text",{stroke:!0,fill:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var ge=Le(I);E=G(ge,"Données"),ge.forEach(a),O=Ge(we,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var qe=Le(O);A=G(qe,"MéthodeA"),qe.forEach(a),D=Ge(we,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var ee=Le(D);B=G(ee,"MéthodeB"),ee.forEach(a),V=Ge(we,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),Le(V).forEach(a),K=Ge(we,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),Le(K).forEach(a),we.forEach(a),se.forEach(a),j.forEach(a),this.h()},h(){w(i,"id","svg_1"),w(i,"d","m170,2.75867l150,0l0,116l-150,0l0,-116z"),w(i,"opacity","undefined"),w(i,"stroke","none"),w(i,"fill","#FFDFB8"),w(u,"stroke","black"),w(u,"fill","black"),w(u,"x","208"),w(u,"y","70"),w(u,"id","svg_2"),w(u,"font-size","24"),w(u,"font-family","Noto Sans JP"),w(u,"text-anchor","start"),w(u,"xml:space","preserve"),w(n,"class","fill-current"),w(n,"stroke","none"),w(n,"x","0"),w(n,"y","40"),w(n,"id","svg_3"),w(n,"font-size","24"),w(n,"font-family","Noto Sans JP"),w(n,"text-anchor","start"),w(n,"xml:space","preserve"),w(x,"class","fill-current"),w(x,"stroke","none"),w(x,"x","0"),w(x,"y","100"),w(x,"id","svg_4"),w(x,"font-size","24"),w(x,"font-family","Noto Sans JP"),w(x,"text-anchor","start"),w(x,"xml:space","preserve"),w(f,"stroke-width","5"),w(f,"class","stroke-current"),w(f,"x1","113.53031"),w(f,"y1","91.75781"),w(f,"x2","158.37456"),w(f,"y2","91.75781"),w(f,"id","svg_9"),w(L,"stroke-width","5"),w(L,"class","stroke-current"),w(L,"x1","113.53031"),w(L,"y1","31.75879"),w(L,"x2","158.37455"),w(L,"y2","31.75879"),w(L,"id","svg_10"),w(p,"id","svg_12"),w(b,"id","svg_13"),w(b,"d","m170,182.07234l150,0l0,116l-150,0l0,-116z"),w(b,"opacity","undefined"),w(b,"stroke","none"),w(b,"fill","#FFDFB8"),w(I,"stroke","black"),w(I,"fill","black"),w(I,"x","208"),w(I,"y","250"),w(I,"id","svg_14"),w(I,"font-size","24"),w(I,"font-family","Noto Sans JP"),w(I,"text-anchor","start"),w(I,"xml:space","preserve"),w(O,"class","fill-current"),w(O,"stroke","none"),w(O,"x","0"),w(O,"y","220"),w(O,"id","svg_15"),w(O,"font-size","24"),w(O,"font-family","Noto Sans JP"),w(O,"text-anchor","start"),w(O,"xml:space","preserve"),w(D,"class","fill-current"),w(D,"stroke","none"),w(D,"x","0"),w(D,"y","280"),w(D,"id","svg_16"),w(D,"font-size","24"),w(D,"font-family","Noto Sans JP"),w(D,"text-anchor","start"),w(D,"xml:space","preserve"),w(V,"stroke-width","5"),w(V,"class","stroke-current"),w(V,"x1","113.53031"),w(V,"y1","271.07148"),w(V,"x2","158.37456"),w(V,"y2","271.07148"),w(V,"id","svg_17"),w(K,"stroke-width","5"),w(K,"class","stroke-current"),w(K,"x1","113.53031"),w(K,"y1","211.07246"),w(K,"x2","158.37455"),w(K,"y2","211.07246"),w(K,"id","svg_18"),w(c,"id","svg_19"),w(e,"width","320"),w(e,"height","300"),w(e,"xmlns","http://www.w3.org/2000/svg")},m(ie,j){r(ie,e,j),ne(e,o),ne(o,s),ne(s,t),ne(o,p),ne(p,i),ne(p,u),ne(u,m),ne(p,n),ne(n,$),ne(p,x),ne(x,l),ne(p,f),ne(p,L),ne(o,c),ne(c,b),ne(c,I),ne(I,E),ne(c,O),ne(O,A),ne(c,D),ne(D,B),ne(c,V),ne(c,K)},p:k,i:k,o:k,d(ie){ie&&a(e)}}}class Js extends Xe{constructor(e){super(),Ye(this,e,null,Us,We,{})}}function Bs(_){let e,o="Introduction";return{c(){e=g("h1"),e.textContent=o},l(s){e=C(s,"H1",{"data-svelte-h":!0}),h(e)!=="svelte-v1pk48"&&(e.textContent=o)},m(s,t){r(s,e,t)},p:k,d(s){s&&a(e)}}}function Ns(_){let e,o='La <span data-fragment-index="1" class="fragment highlight-red">Programmation</span> Orientée Objet',s,t,p="La programmation, c'est manipuler des données...",i,u,m="<i>Comment structurer ces données et les traitements associés ?</i>",n,$,x=`On commence par poser la question fondamentale. Peu importe le langage, peu importe le projet,
			on manipule toujours des données. La vraie question c'est : comment on organise tout ça ?`;return{c(){e=g("h2"),e.innerHTML=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("p"),u.innerHTML=m,n=v(),$=g("aside"),$.textContent=x,this.h()},l(l){e=C(l,"H2",{"data-svelte-h":!0}),h(e)!=="svelte-idwyvx"&&(e.innerHTML=o),s=d(l),t=C(l,"P",{"data-fragment-index":!0,class:!0,"data-svelte-h":!0}),h(t)!=="svelte-ccoak9"&&(t.textContent=p),i=d(l),u=C(l,"P",{"data-fragment-index":!0,class:!0,"data-svelte-h":!0}),h(u)!=="svelte-ja2tch"&&(u.innerHTML=m),n=d(l),$=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-16jpdmo"&&($.textContent=x),this.h()},h(){w(t,"data-fragment-index","1"),w(t,"class","fragment"),w(u,"data-fragment-index","2"),w(u,"class","fragment"),w($,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,u,f),r(l,n,f),r(l,$,f)},p:k,d(l){l&&(a(e),a(s),a(t),a(i),a(u),a(n),a($))}}}function Fs(_){let e,o="La POO en 3 mots",s,t,p='<div class="fragment flex flex-col items-center p-6 bg-accent-950 rounded-lg"><span class="text-6xl mb-4">📦</span> <span class="text-important font-bold">RANGER</span> <span class="text-xl mt-2 text-gray-400">Organiser le code</span></div> <div class="fragment flex flex-col items-center p-6 bg-accent-950 rounded-lg"><span class="text-6xl mb-4">🔒</span> <span class="text-important font-bold">PROTÉGER</span> <span class="text-xl mt-2 text-gray-400">Éviter les erreurs</span></div> <div class="fragment flex flex-col items-center p-6 bg-accent-950 rounded-lg"><span class="text-6xl mb-4">🌳</span> <span class="text-important font-bold">GÉNÉRALISER</span> <span class="text-xl mt-2 text-gray-400">Réutiliser le code</span></div>',i,u,m=`On va voir que la POO apporte 3 bénéfices majeurs, dans cet ordre précis. D'abord on range,
			ensuite on protège, et enfin on généralise. Ces 3 piliers sont la base de tout ce qu'on va
			voir dans ce module.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H2",{"data-svelte-h":!0}),h(e)!=="svelte-1nirx80"&&(e.textContent=o),s=d(n),t=C(n,"DIV",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-19dln6f"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-49jgnd"&&(u.textContent=m),this.h()},h(){w(t,"class","flex flex-row justify-around items-center text-3xl mt-10"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function Gs(_){let e,o="📦 RANGER",s,t,p="Premier pilier de la POO",i,u,m="On commence par le premier pilier : ranger. C'est le plus intuitif.";return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H2",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-z32rqx"&&(e.textContent=o),s=d(n),t=C(n,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-kfijfp"&&(t.textContent=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1eorlzr"&&(u.textContent=m),this.h()},h(){w(e,"class","text-6xl"),w(t,"class","text-3xl text-gray-400"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function Qs(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Ks(_){let e,o='Le problème du code "en vrac"',s,t,p,i,u=`Regardez ce code. On a des variables partout, mélangées. Rien ne dit que nomClient va avec
			ageClient et emailClient. Quand le code grossit, c'est le chaos. On ne sait plus quelle
			variable va avec quelle autre.`,m;return t=new Z({props:{$$slots:{default:[Qs]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("aside"),i.textContent=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1iow74n"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-vygygc"&&(i.textContent=u),this.h()},h(){w(i,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function Ws(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Xs(_){let e,o="La solution : regrouper dans des objets",s,t,p,i,u=`Avec la POO, on regroupe ce qui va ensemble. Un Client a un nom, un âge, un email. Un Produit
			a un nom, un prix, un stock. Chaque "boîte" contient ce qui lui appartient. C'est déjà plus
			clair, non ?`,m;return t=new Z({props:{lines:"1-5|7-11|13-16|18-20",$$slots:{default:[Ws]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("aside"),i.textContent=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-qf6jcc"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-1k8tbir"&&(i.textContent=u),this.h()},h(){w(i,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function Ys(_){let e,o,s="Programmation procédurale",t,p,i="Programmation orientée objet",u,m,n,$,x,l,f,L=`Visuellement, c'est ça la différence. À gauche, les données sont séparées des traitements. Les
			fonctions peuvent accéder à n'importe quelle donnée. À droite, chaque objet contient SES
			données ET SES traitements. C'est une vraie boîte autonome.`,c;return m=new Rs({}),x=new Js({}),{c(){e=g("div"),o=g("h3"),o.textContent=s,t=v(),p=g("h3"),p.textContent=i,u=v(),T(m.$$.fragment),n=v(),$=g("div"),T(x.$$.fragment),l=v(),f=g("aside"),f.textContent=L,this.h()},l(b){e=C(b,"DIV",{class:!0});var I=Le(e);o=C(I,"H3",{"data-svelte-h":!0}),h(o)!=="svelte-cax56s"&&(o.textContent=s),t=d(I),p=C(I,"H3",{"data-fragment-index":!0,class:!0,"data-svelte-h":!0}),h(p)!=="svelte-1roygcu"&&(p.textContent=i),u=d(I),M(m.$$.fragment,I),n=d(I),$=C(I,"DIV",{"data-fragment-index":!0,class:!0});var E=Le($);M(x.$$.fragment,E),E.forEach(a),I.forEach(a),l=d(b),f=C(b,"ASIDE",{class:!0,"data-svelte-h":!0}),h(f)!=="svelte-cw6e6u"&&(f.textContent=L),this.h()},h(){w(p,"data-fragment-index","1"),w(p,"class","fragment"),w($,"data-fragment-index","1"),w($,"class","fragment"),w(e,"class","grid-cols-2 grid justify-items-center items-start"),w(f,"class","notes")},m(b,I){r(b,e,I),ne(e,o),ne(e,t),ne(e,p),ne(e,u),S(m,e,null),ne(e,n),ne(e,$),S(x,$,null),r(b,l,I),r(b,f,I),c=!0},p:k,i(b){c||(H(m.$$.fragment,b),H(x.$$.fragment,b),c=!0)},o(b){P(m.$$.fragment,b),P(x.$$.fragment,b),c=!1},d(b){b&&(a(e),a(l),a(f)),q(m),q(x)}}}function Zs(_){let e,o='<h3>Programmation procédurale</h3> <h3>Programmation orientée objet</h3> <ul><li>Les données et les traitements sont séparés</li> <li class="fragment">Les fonctions accèdent à <span class="text-red-400">tout</span></li> <li class="fragment">Difficile de savoir &quot;qui fait quoi&quot;</li></ul> <ul><li>Les données et les traitements sont regroupés dans un objet</li> <li class="fragment">Les méthodes n&#39;accèdent qu&#39;à <span class="text-green-400">leur objet</span></li> <li class="fragment">Chaque objet est responsable de lui-même</li></ul>',s,t,p="Premier intérêt : le code est mieux organisé",i,u,m=`En procédural, les fonctions peuvent accéder à tout. C'est pratique au début, mais ça devient
			vite le bazar. En POO, chaque objet est une entité autonome. Il gère ses propres données avec
			ses propres méthodes. C'est le premier bénéfice : on range, on organise.`;return{c(){e=g("div"),e.innerHTML=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"DIV",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-kmsvtl"&&(e.innerHTML=o),s=d(n),t=C(n,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-19jde0y"&&(t.textContent=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1ezzhp6"&&(u.textContent=m),this.h()},h(){w(e,"class","grid-cols-2 grid justify-items-center items-start"),w(t,"class","fragment font-bold text-accent-200 mt-8"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function ys(_){let e,o="🔒 PROTÉGER",s,t,p="Deuxième pilier de la POO",i,u,m=`Maintenant qu'on a rangé, on va voir le deuxième pilier : protéger. C'est là que la POO
			devient vraiment puissante.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H2",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-nrad46"&&(e.textContent=o),s=d(n),t=C(n,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1n91bqq"&&(t.textContent=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-5opokd"&&(u.textContent=m),this.h()},h(){w(e,"class","text-6xl"),w(t,"class","text-3xl text-gray-400"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function el(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function tl(_){let e,o="Le problème : les erreurs silencieuses",s,t,p="En procédural, rien ne vous empêche de faire n'importe quoi...",i,u,m,n,$=`Regardez ce code. La fonction direBonjour attend un nom et un âge. Mais rien ne m'empêche de
			lui passer l'âge de Marie à la place de celui de Jean ! Le code compile, il s'exécute... mais
			le résultat est faux. C'est un bug silencieux, le pire type de bug.`,x;return u=new Z({props:{class:"java",$$slots:{default:[el]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),T(u.$$.fragment),m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-2a5yxe"&&(e.textContent=o),s=d(l),t=C(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1sotxef"&&(t.textContent=p),i=d(l),M(u.$$.fragment,l),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1va15cw"&&(n.textContent=$),this.h()},h(){w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),S(u,l,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),u.$set(L)},i(l){x||(H(u.$$.fragment,l),x=!0)},o(l){P(u.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(t),a(i),a(m),a(n)),q(u,l)}}}function sl(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function ll(_){let e,o="Le problème empire avec le temps...",s,t,p,i,u="Plus le code grossit, plus on se trompe !",m,n,$=`6 mois plus tard, vous avez 50 variables, 30 fonctions. Vous ne savez plus quelle variable va
			avec quelle autre. Vous vous trompez de paramètre, le code compile, mais ça ne marche pas.
			Vous passez des heures à débugger.`,x;return t=new Z({props:{class:"java",lines:"1-8|10-15",$$slots:{default:[sl]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.textContent=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-12am7ex"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-1u4dzf0"&&(i.textContent=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1oru7wz"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment text-red-400 font-bold"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function nl(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function il(_){let e,o="La solution POO : impossible de se tromper",s,t,p,i,u=`En POO, la méthode direBonjour est DANS l'objet Personne. Elle ne prend pas de paramètres,
			elle utilise directement les données de l'objet. Chaque personne a sa propre méthode qui
			utilise SES données. Impossible de mélanger les données de Jean et Marie.`,m;return t=new Z({props:{class:"java",lines:"1-11|13-17",$$slots:{default:[nl]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("aside"),i.textContent=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1l4bme7"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-ylwt9m"&&(i.textContent=u),this.h()},h(){w(i,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function al(_){let e=`
//
direBonjour(nom1, age1);  // OK
direBonjour(nom1, age2);  // BUG !
// Rien ne m'empêche de mélanger
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function rl(_){let e=`
//
jean.direBonjour();
marie.direBonjour();
// Chacun utilise SES données
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function ul(_){let e,o="Comparaison directe",s,t,p,i,u="❌ Procédural",m,n,$,x,l,f="✅ POO",L,c,b,I,E="Les méthodes ne manipulent que les données de LEUR objet",O,A,D=`C'est ça la vraie puissance. En procédural, vous pouvez mélanger les données de personnes
			différentes. En POO, chaque méthode n'accède qu'aux données de son objet. Jean utilise les
			données de Jean, Marie utilise les données de Marie. Impossible de se tromper.`,B;return n=new Z({props:{class:"java",$$slots:{default:[al]},$$scope:{ctx:_}}}),c=new Z({props:{class:"java",$$slots:{default:[rl]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),p=g("div"),i=g("h4"),i.textContent=u,m=v(),T(n.$$.fragment),$=v(),x=g("div"),l=g("h4"),l.textContent=f,L=v(),T(c.$$.fragment),b=v(),I=g("p"),I.textContent=E,O=v(),A=g("aside"),A.textContent=D,this.h()},l(V){e=C(V,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-r1ae78"&&(e.textContent=o),s=d(V),t=C(V,"DIV",{class:!0});var K=Le(t);p=C(K,"DIV",{});var ie=Le(p);i=C(ie,"H4",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-14hrfbc"&&(i.textContent=u),m=d(ie),M(n.$$.fragment,ie),ie.forEach(a),$=d(K),x=C(K,"DIV",{});var j=Le(x);l=C(j,"H4",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-o82dwg"&&(l.textContent=f),L=d(j),M(c.$$.fragment,j),j.forEach(a),K.forEach(a),b=d(V),I=C(V,"P",{class:!0,"data-svelte-h":!0}),h(I)!=="svelte-2a01z8"&&(I.textContent=E),O=d(V),A=C(V,"ASIDE",{class:!0,"data-svelte-h":!0}),h(A)!=="svelte-1wg97bw"&&(A.textContent=D),this.h()},h(){w(i,"class","text-red-400"),w(l,"class","text-green-400"),w(t,"class","grid-cols-2 grid justify-items-center items-start gap-4"),w(I,"class","fragment text-accent-200 font-bold text-3xl mt-8"),w(A,"class","notes")},m(V,K){r(V,e,K),r(V,s,K),r(V,t,K),ne(t,p),ne(p,i),ne(p,m),S(n,p,null),ne(t,$),ne(t,x),ne(x,l),ne(x,L),S(c,x,null),r(V,b,K),r(V,I,K),r(V,O,K),r(V,A,K),B=!0},p(V,K){const ie={};K&1&&(ie.$$scope={dirty:K,ctx:V}),n.$set(ie);const j={};K&1&&(j.$$scope={dirty:K,ctx:V}),c.$set(j)},i(V){B||(H(n.$$.fragment,V),H(c.$$.fragment,V),B=!0)},o(V){P(n.$$.fragment,V),P(c.$$.fragment,V),B=!1},d(V){V&&(a(e),a(s),a(t),a(b),a(I),a(O),a(A)),q(n),q(c)}}}function ol(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function $l(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function fl(_){let e,o="Exemple complet : avant / après",s,t,p,i="Procédural",u,m,n="Orienté Objet",$,x,l,f,L,c,b=`À gauche, on pourrait se tromper et appeler direBonjour avec nom et age2. Bug silencieux. À
			droite, chaque Personne est un objet autonome. Quand on appelle p1.direBonjour(), c'est
			TOUJOURS les données de p1 qui sont utilisées. Impossible de mélanger.`,I;return x=new Z({props:{class:"java",$$slots:{default:[ol]},$$scope:{ctx:_}}}),f=new Z({props:{class:"java fragment","data-fragment-index":"1",lines:"1-9|10-13",$$slots:{default:[$l]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),p=g("h4"),p.textContent=i,u=v(),m=g("h4"),m.textContent=n,$=v(),T(x.$$.fragment),l=v(),T(f.$$.fragment),L=v(),c=g("aside"),c.textContent=b,this.h()},l(E){e=C(E,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-11nvxg1"&&(e.textContent=o),s=d(E),t=C(E,"DIV",{class:!0});var O=Le(t);p=C(O,"H4",{"data-svelte-h":!0}),h(p)!=="svelte-1bk3u6h"&&(p.textContent=i),u=d(O),m=C(O,"H4",{class:!0,"data-fragment-index":!0,"data-svelte-h":!0}),h(m)!=="svelte-1rzdg3v"&&(m.textContent=n),$=d(O),M(x.$$.fragment,O),l=d(O),M(f.$$.fragment,O),O.forEach(a),L=d(E),c=C(E,"ASIDE",{class:!0,"data-svelte-h":!0}),h(c)!=="svelte-1uzbf9k"&&(c.textContent=b),this.h()},h(){w(m,"class","fragment"),w(m,"data-fragment-index","1"),w(t,"class","grid-cols-2 grid justify-items-center items-start"),w(c,"class","notes")},m(E,O){r(E,e,O),r(E,s,O),r(E,t,O),ne(t,p),ne(t,u),ne(t,m),ne(t,$),S(x,t,null),ne(t,l),S(f,t,null),r(E,L,O),r(E,c,O),I=!0},p(E,O){const A={};O&1&&(A.$$scope={dirty:O,ctx:E}),x.$set(A);const D={};O&1&&(D.$$scope={dirty:O,ctx:E}),f.$set(D)},i(E){I||(H(x.$$.fragment,E),H(f.$$.fragment,E),I=!0)},o(E){P(x.$$.fragment,E),P(f.$$.fragment,E),I=!1},d(E){E&&(a(e),a(s),a(t),a(L),a(c)),q(x),q(f)}}}function cl(_){let e,o="Récapitulatif : Ranger + Protéger",s,t,p='<div class="p-6 bg-accent-950 rounded-lg"><h4 class="text-important">📦 RANGER</h4> <ul class="text-2xl"><li>Données regroupées par entité</li> <li>Code plus lisible</li> <li>Plus facile à maintenir</li></ul></div> <div class="p-6 bg-accent-950 rounded-lg"><h4 class="text-important">🔒 PROTÉGER</h4> <ul class="text-2xl"><li>Méthodes liées à leurs données</li> <li>Impossible de se tromper de paramètre</li> <li>Le compilateur vous aide</li></ul></div>',i,u,m="Mais ce n'est pas tout...",n,$,x=`On a vu les deux premiers piliers. On range le code, on le protège des erreurs. Mais la POO
			offre un troisième bénéfice, peut-être le plus puissant : la généralisation.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=p,i=v(),u=g("p"),u.textContent=m,n=v(),$=g("aside"),$.textContent=x,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-wok7w1"&&(e.textContent=o),s=d(l),t=C(l,"DIV",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1hsd1m7"&&(t.innerHTML=p),i=d(l),u=C(l,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-3ya9un"&&(u.textContent=m),n=d(l),$=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-heeq8"&&($.textContent=x),this.h()},h(){w(t,"class","flex flex-row justify-around items-start mt-8"),w(u,"class","fragment text-3xl mt-8"),w($,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,u,f),r(l,n,f),r(l,$,f)},p:k,d(l){l&&(a(e),a(s),a(t),a(i),a(u),a(n),a($))}}}function pl(_){let e,o="🌳 GÉNÉRALISER",s,t,p="Troisième pilier de la POO",i,u,m=`Le troisième pilier, c'est la généralisation. C'est là qu'on va parler d'héritage,
			d'abstraction. C'est ce qui rend la POO vraiment unique.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H2",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-ptnj3f"&&(e.textContent=o),s=d(n),t=C(n,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-188gx3t"&&(t.textContent=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-m0kwia"&&(u.textContent=m),this.h()},h(){w(e,"class","text-6xl"),w(t,"class","text-3xl text-gray-400"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function ml(_){let e,o="La programmation orientée objet",s,t,p="Qu'est-ce que c'est ?",i,u,m='La programmation orientée objet est un <span class="text-important">paradigme de programmation</span>, c&#39;est-à-dire une manière de programmer, qui repose sur la notion d&#39;objets.',n,$,x="Un objet est une entité qui regroupe des données et des traitements qui lui sont associés.",l,f,L='Un objet est censé représenter <span class="text-important">une entité du monde réel</span>.',c,b,I="Il n'est pas obligatoire de programmer en POO !",E,O,A=`La POO c'est un paradigme, une façon de penser le code. L'idée c'est de modéliser le monde
			réel : des personnes, des voitures, des produits... Ce n'est pas obligatoire, mais c'est très
			puissant quand on sait s'en servir.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("h3"),t.textContent=p,i=v(),u=g("p"),u.innerHTML=m,n=v(),$=g("p"),$.textContent=x,l=v(),f=g("p"),f.innerHTML=L,c=v(),b=g("p"),b.textContent=I,E=v(),O=g("aside"),O.textContent=A,this.h()},l(D){e=C(D,"H2",{"data-svelte-h":!0}),h(e)!=="svelte-18a0qr8"&&(e.textContent=o),s=d(D),t=C(D,"H3",{"data-svelte-h":!0}),h(t)!=="svelte-a8zqi8"&&(t.textContent=p),i=d(D),u=C(D,"P",{"data-svelte-h":!0}),h(u)!=="svelte-3ymvqm"&&(u.innerHTML=m),n=d(D),$=C(D,"P",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-18xem7k"&&($.textContent=x),l=d(D),f=C(D,"P",{class:!0,"data-svelte-h":!0}),h(f)!=="svelte-10wio1h"&&(f.innerHTML=L),c=d(D),b=C(D,"P",{class:!0,"data-svelte-h":!0}),h(b)!=="svelte-64ska2"&&(b.textContent=I),E=d(D),O=C(D,"ASIDE",{class:!0,"data-svelte-h":!0}),h(O)!=="svelte-zlkz96"&&(O.textContent=A),this.h()},h(){w($,"class","fragment"),w(f,"class","fragment"),w(b,"class","fragment text-accent-200 font-bold"),w(O,"class","notes")},m(D,B){r(D,e,B),r(D,s,B),r(D,t,B),r(D,i,B),r(D,u,B),r(D,n,B),r(D,$,B),r(D,l,B),r(D,f,B),r(D,c,B),r(D,b,B),r(D,E,B),r(D,O,B)},p:k,d(D){D&&(a(e),a(s),a(t),a(i),a(u),a(n),a($),a(l),a(f),a(c),a(b),a(E),a(O))}}}function dl(_){let e,o="Représenter le monde réel",s,t,p="Un objet est censé représenter une entité du monde réel.",i,u,m=`Par exemple, <span data-fragment-index="3" class="fragment highlight-red">un chien, un chat</span>,
			<span data-fragment-index="3" class="fragment highlight-green">une moto, une voiture</span>,
			<span data-fragment-index="3" class="fragment highlight-blue">un ennemi, un PNJ</span>`,n,$,x=`Ou plus <span class="underline font-bold">génériquement</span>, un
			<span class="text-red-500">animal</span>, un <span class="text-green-500">véhicule</span>, un
			<span class="text-blue-500">personnage</span>`,l,f,L=`On modélise le monde réel. Un chien, un chat, ce sont des objets. Mais on peut aller plus loin
			: un chien et un chat, c'est un animal. Une moto et une voiture, c'est un véhicule. C'est ça
			la généralisation : trouver le concept commun.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("p"),u.innerHTML=m,n=v(),$=g("p"),$.innerHTML=x,l=v(),f=g("aside"),f.textContent=L,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1nsqnl5"&&(e.textContent=o),s=d(c),t=C(c,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1te9lxn"&&(t.textContent=p),i=d(c),u=C(c,"P",{class:!0,"data-fragment-index":!0,"data-svelte-h":!0}),h(u)!=="svelte-12p87au"&&(u.innerHTML=m),n=d(c),$=C(c,"P",{class:!0,"data-fragment-index":!0,"data-svelte-h":!0}),h($)!=="svelte-68say8"&&($.innerHTML=x),l=d(c),f=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(f)!=="svelte-1ad4dj1"&&(f.textContent=L),this.h()},h(){w(t,"class","font-bold text-accent-200"),w(u,"class","fragment"),w(u,"data-fragment-index","2"),w($,"class","fragment"),w($,"data-fragment-index","3"),w(f,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),r(c,u,b),r(c,n,b),r(c,$,b),r(c,l,b),r(c,f,b)},p:k,d(c){c&&(a(e),a(s),a(t),a(i),a(u),a(n),a($),a(l),a(f))}}}function vl(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function xl(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function _l(_){let e,o="Pourquoi généraliser ?",s,t,p="Imaginons que vous codez un jeu vidéo...",i,u,m,n,$="❌ Sans généralisation",x,l,f,L,c,b="✅ Avec généralisation",I,E,O,A,D=`Sans généralisation, on duplique le code. Chaque personnage a sa méthode seDeplacer, même si
			c'est la même. Avec la généralisation, on met le code commun dans une classe parente. Si on
			change seDeplacer, on le change une seule fois, et tous les personnages en bénéficient.`,B;return l=new Z({props:{class:"java",$$slots:{default:[vl]},$$scope:{ctx:_}}}),E=new Z({props:{class:"java",$$slots:{default:[xl]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("div"),m=g("div"),n=g("h4"),n.textContent=$,x=v(),T(l.$$.fragment),f=v(),L=g("div"),c=g("h4"),c.textContent=b,I=v(),T(E.$$.fragment),O=v(),A=g("aside"),A.textContent=D,this.h()},l(V){e=C(V,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1tyfy6u"&&(e.textContent=o),s=d(V),t=C(V,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1piptso"&&(t.textContent=p),i=d(V),u=C(V,"DIV",{class:!0});var K=Le(u);m=C(K,"DIV",{class:!0});var ie=Le(m);n=C(ie,"H4",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1dno5ot"&&(n.textContent=$),x=d(ie),M(l.$$.fragment,ie),ie.forEach(a),f=d(K),L=C(K,"DIV",{class:!0});var j=Le(L);c=C(j,"H4",{class:!0,"data-svelte-h":!0}),h(c)!=="svelte-11tuyq2"&&(c.textContent=b),I=d(j),M(E.$$.fragment,j),j.forEach(a),K.forEach(a),O=d(V),A=C(V,"ASIDE",{class:!0,"data-svelte-h":!0}),h(A)!=="svelte-qs469b"&&(A.textContent=D),this.h()},h(){w(n,"class","text-red-400"),w(m,"class","fragment"),w(c,"class","text-green-400"),w(L,"class","fragment"),w(u,"class","grid-cols-2 grid gap-8 mt-8"),w(A,"class","notes")},m(V,K){r(V,e,K),r(V,s,K),r(V,t,K),r(V,i,K),r(V,u,K),ne(u,m),ne(m,n),ne(m,x),S(l,m,null),ne(u,f),ne(u,L),ne(L,c),ne(L,I),S(E,L,null),r(V,O,K),r(V,A,K),B=!0},p(V,K){const ie={};K&1&&(ie.$$scope={dirty:K,ctx:V}),l.$set(ie);const j={};K&1&&(j.$$scope={dirty:K,ctx:V}),E.$set(j)},i(V){B||(H(l.$$.fragment,V),H(E.$$.fragment,V),B=!0)},o(V){P(l.$$.fragment,V),P(E.$$.fragment,V),B=!1},d(V){V&&(a(e),a(s),a(t),a(i),a(u),a(O),a(A)),q(l),q(E)}}}function Cl(_){let e,o="La généricité",s,t,p="Généralisez vos concepts !",i,u,m='<ul><li><a href="#">Animal</a> <ul><li><a>Chien</a></li> <li><a>Chat</a></li></ul></li> <li><a href="#">Véhicule</a> <ul><li><a>Voiture</a></li> <li><a>Moto</a></li> <li class="fragment" data-fragment-index="1"><a>Bateau</a></li></ul></li> <li><a href="#">Personnage</a> <ul><li><a>Ennemi</a> <ul class="fragment" data-fragment-index="1"><li><a>Monstre</a></li> <li><a>Boss</a></li></ul></li> <li><a>PNJ</a></li></ul></li></ul>',n,$,x=`On peut représenter ça sous forme d'arbre. Animal se décline en Chien et Chat. Véhicule se
			décline en Voiture, Moto, et pourquoi pas Bateau demain. Personnage se décline en Ennemi et
			PNJ, et Ennemi peut lui-même se décliner en Monstre et Boss. C'est ce qu'on appelle l'héritage
			: les enfants héritent des caractéristiques du parent.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("div"),u.innerHTML=m,n=v(),$=g("aside"),$.textContent=x,this.h()},l(l){e=C(l,"H3",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-1t0g1h3"&&(e.textContent=o),s=d(l),t=C(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-ptm47t"&&(t.textContent=p),i=d(l),u=C(l,"DIV",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-18iior2"&&(u.innerHTML=m),n=d(l),$=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-1azk6ad"&&($.textContent=x),this.h()},h(){w(e,"class","uppercase"),w(u,"class","tree scale-150"),w($,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,u,f),r(l,n,f),r(l,$,f)},p:k,d(l){l&&(a(e),a(s),a(t),a(i),a(u),a(n),a($))}}}function gl(_){let e,o="L'héritage : le cœur de la POO",s,t,p="Quand <code>Voiture</code> hérite de <code>Véhicule</code> :",i,u,m='<li class="fragment">✅ Elle récupère automatiquement toutes les données de Véhicule</li> <li class="fragment">✅ Elle récupère automatiquement toutes les méthodes de Véhicule</li> <li class="fragment">✅ Elle peut ajouter ses propres données (nbPortes, nbPlaces...)</li> <li class="fragment">✅ Elle peut modifier le comportement hérité si besoin</li>',n,$,x="Écrivez le code une fois, réutilisez-le partout !",l,f,L=`L'héritage c'est ça : on écrit le code une fois dans le parent, et tous les enfants en
			bénéficient. Si on ajoute un attribut "couleur" à Véhicule, Voiture et Moto l'ont
			automatiquement. C'est un gain de temps énorme, et surtout, moins de bugs car moins de code
			dupliqué.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("ul"),u.innerHTML=m,n=v(),$=g("p"),$.textContent=x,l=v(),f=g("aside"),f.textContent=L,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1lb9yfa"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1bwq09e"&&(t.innerHTML=p),i=d(c),u=C(c,"UL",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-xxefp4"&&(u.innerHTML=m),n=d(c),$=C(c,"P",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-74izuf"&&($.textContent=x),l=d(c),f=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(f)!=="svelte-yxss4w"&&(f.textContent=L),this.h()},h(){w(u,"class","text-2xl"),w($,"class","fragment text-accent-200 font-bold mt-8"),w(f,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),r(c,u,b),r(c,n,b),r(c,$,b),r(c,l,b),r(c,f,b)},p:k,d(c){c&&(a(e),a(s),a(t),a(i),a(u),a(n),a($),a(l),a(f))}}}function hl(_){let e,o="L'abstraction : penser au futur",s,t,p='En POO, généraliser s&#39;appelle <span class="text-important">abstraire, faire une abstraction</span>',i,u,m="C'est anticiper les évolutions de votre code.",n,$,x=`Abstraire, c'est trouver le concept commun entre plusieurs choses. Mais c'est aussi penser au
			futur : qu'est-ce que mon client va me demander demain ?`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("p"),u.textContent=m,n=v(),$=g("aside"),$.textContent=x,this.h()},l(l){e=C(l,"H3",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-1rpalwv"&&(e.textContent=o),s=d(l),t=C(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1n8l9pz"&&(t.innerHTML=p),i=d(l),u=C(l,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-44luki"&&(u.textContent=m),n=d(l),$=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-1ux1lwj"&&($.textContent=x),this.h()},h(){w(e,"class","uppercase"),w(u,"class","fragment"),w($,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,u,f),r(l,n,f),r(l,$,f)},p:k,d(l){l&&(a(e),a(s),a(t),a(i),a(u),a(n),a($))}}}function bl(_){let e,o="Exemple concret : location de voiture",s,t,p=`<span class="text-important">Situation :</span> On vous demande de coder un système de
			location de voiture.<br/><br/> <span class="fragment">📅 <b>6 mois plus tard :</b> &quot;On aimerait aussi proposer des motos !&quot;</span><br/> <span class="fragment">📅 <b>1 an plus tard :</b> &quot;Et des vélos électriques !&quot;</span><br/> <span class="fragment">📅 <b>2 ans plus tard :</b> &quot;Et des accessoires : sièges auto, porte-vélos, chaînes neige...&quot;</span>`,i,u,m='Si vous aviez anticipé, vous auriez codé "Véhicule" dès le départ !',n,$,x=`C'est un scénario classique. On vous demande de gérer des voitures, mais évidemment, ça va
			évoluer. Motos, vélos, accessoires... Si vous codez "Voiture" partout, vous allez devoir tout
			refaire. Si vous codez "Véhicule" dès le départ, ajouter une Moto c'est 5 minutes.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("p"),u.textContent=m,n=v(),$=g("aside"),$.textContent=x,this.h()},l(l){e=C(l,"H3",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-1fhmnzb"&&(e.textContent=o),s=d(l),t=C(l,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-18xi090"&&(t.innerHTML=p),i=d(l),u=C(l,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-m4py0l"&&(u.textContent=m),n=d(l),$=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-s0c6jo"&&($.textContent=x),this.h()},h(){w(e,"class","uppercase"),w(t,"class","text-start text-[28px] p-4 bg-accent-950 font-serif rounded-lg"),w(u,"class","fragment text-accent-200 font-bold mt-6"),w($,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,u,f),r(l,n,f),r(l,$,f)},p:k,d(l){l&&(a(e),a(s),a(t),a(i),a(u),a(n),a($))}}}function Ll(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function wl(_){let e,o="Le piège du code non généralisé",s,t,p,i,u="Demain on ajoute les motos... on doit tout dupliquer ?",m,n,$=`Voilà le piège. On a codé tout autour de Voiture. Si on veut ajouter Moto, il faut créer
			louerMoto, retournerMoto, calculerPrixMoto... C'est du code dupliqué, c'est des bugs, c'est un
			cauchemar.`,x;return t=new Z({props:{class:"java",$$slots:{default:[Ll]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.textContent=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-1h7w9x1"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-w1s16n"&&(i.textContent=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1drwx1z"&&(n.textContent=$),this.h()},h(){w(e,"class","uppercase"),w(i,"class","fragment text-red-400 font-bold"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function ql(_){let e=`
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
			`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Pl(_){let e,o="Étape 1 : Créer la hiérarchie Véhicule",s,t,p="On commence par regrouper Voiture et Moto sous Véhicule",i,u,m,n,$="<b>Voiture</b> est un <b>Véhicule</b> → elle hérite de prixJour, disponible, louer()...",x,l,f=`Première étape : on crée Véhicule qui contient tout ce qui est commun. Voiture et Moto
			héritent de Véhicule. Donc Voiture EST UN Véhicule. Elle a automatiquement prixJour,
			disponible, km, immatriculation. Elle a aussi les méthodes louer() et retourner() sans les
			recoder.`,L;return u=new Ke({props:{$$slots:{default:[ql]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),T(u.$$.fragment),m=v(),n=g("p"),n.innerHTML=$,x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-1uw0g5w"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1ko5xlx"&&(t.textContent=p),i=d(c),M(u.$$.fragment,c),m=d(c),n=C(c,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1hq4dgl"&&(n.innerHTML=$),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-1p5u5s8"&&(l.textContent=f),this.h()},h(){w(e,"class","uppercase"),w(n,"class","fragment text-accent-200"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),S(u,c,b),r(c,m,b),r(c,n,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),u.$set(I)},i(c){L||(H(u.$$.fragment,c),L=!0)},o(c){P(u.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(n),a(x),a(l)),q(u,c)}}}function Hl(_){let e=`
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
			`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Sl(_){let e=`
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
			`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Ml(_){let e,o="Étape 2 : Ajouter les Accessoires",s,t,p="Les accessoires ont aussi un prix et une disponibilité...",i,u,m,n,$,x,l,f="⚠️ prixJour et disponible sont dupliqués dans Véhicule ET Accessoire !",L,c,b=`On ajoute les accessoires. SiègeAuto et PorteVelo héritent de Accessoire. Mais attendez...
			prixJour et disponible sont dans Véhicule ET dans Accessoire. C'est de la duplication ! On
			peut faire mieux.`,I;return m=new Ke({props:{$$slots:{default:[Hl]},$$scope:{ctx:_}}}),$=new Ke({props:{$$slots:{default:[Sl]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("div"),T(m.$$.fragment),n=v(),T($.$$.fragment),x=v(),l=g("p"),l.textContent=f,L=v(),c=g("aside"),c.textContent=b,this.h()},l(E){e=C(E,"H3",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-dpgmf6"&&(e.textContent=o),s=d(E),t=C(E,"P",{"data-svelte-h":!0}),h(t)!=="svelte-447yeq"&&(t.textContent=p),i=d(E),u=C(E,"DIV",{class:!0});var O=Le(u);M(m.$$.fragment,O),n=d(O),M($.$$.fragment,O),O.forEach(a),x=d(E),l=C(E,"P",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-138h9qb"&&(l.textContent=f),L=d(E),c=C(E,"ASIDE",{class:!0,"data-svelte-h":!0}),h(c)!=="svelte-6rnzlf"&&(c.textContent=b),this.h()},h(){w(e,"class","uppercase"),w(u,"class","flex flex-row justify-center items-start gap-8"),w(l,"class","fragment text-red-400 font-bold mt-4"),w(c,"class","notes")},m(E,O){r(E,e,O),r(E,s,O),r(E,t,O),r(E,i,O),r(E,u,O),S(m,u,null),ne(u,n),S($,u,null),r(E,x,O),r(E,l,O),r(E,L,O),r(E,c,O),I=!0},p(E,O){const A={};O&1&&(A.$$scope={dirty:O,ctx:E}),m.$set(A);const D={};O&1&&(D.$$scope={dirty:O,ctx:E}),$.$set(D)},i(E){I||(H(m.$$.fragment,E),H($.$$.fragment,E),I=!0)},o(E){P(m.$$.fragment,E),P($.$$.fragment,E),I=!1},d(E){E&&(a(e),a(s),a(t),a(i),a(u),a(x),a(l),a(L),a(c)),q(m),q($)}}}function Tl(_){let e=`
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
			`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function El(_){let e,o="Étape 3 : Abstraire encore plus avec Louable",s,t,p='Véhicule et Accessoire ont des points communs → on crée <span class="text-important">Louable</span>',i,u,m,n,$=`On crée Louable qui contient prixJour, disponible, et les méthodes louer, retourner,
			calculerPrix. Véhicule hérite de Louable, et Accessoire aussi. Du coup Voiture hérite de
			Véhicule qui hérite de Louable : Voiture a TOUT !`,x;return u=new Ke({props:{$$slots:{default:[Tl]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment),m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-14ipspf"&&(e.textContent=o),s=d(l),t=C(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-qurtdv"&&(t.innerHTML=p),i=d(l),M(u.$$.fragment,l),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-hsu0uh"&&(n.textContent=$),this.h()},h(){w(e,"class","uppercase"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),S(u,l,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),u.$set(L)},i(l){x||(H(u.$$.fragment,l),x=!0)},o(l){P(u.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(t),a(i),a(m),a(n)),q(u,l)}}}function Al(_){let e,o="Visualisons la chaîne d'héritage",s,t,p="Une <b>Voiture</b> c&#39;est quoi maintenant ?",i,u,m=`<div class="fragment p-4 bg-green-950 rounded-lg mb-2"><b>Voiture</b> hérite de <b>Véhicule</b></div> <div class="fragment text-4xl">↓</div> <div class="fragment p-4 bg-blue-950 rounded-lg mb-2"><b>Véhicule</b> hérite de <b>Louable</b></div> <div class="fragment text-4xl">↓</div> <div class="fragment p-4 bg-accent-950 rounded-lg">Donc <b>Voiture</b> a : prixJour, disponible, louer(), retourner(), km, immatriculation, nbPortes,
				nbPlaces</div>`,n,$,x="On n'a codé louer() qu'une seule fois, dans Louable !",l,f,L=`Suivons la chaîne. Voiture hérite de Véhicule. Véhicule hérite de Louable. Donc Voiture a tout
			: les attributs de Louable, plus ceux de Véhicule, plus les siens. Et surtout, la méthode
			louer() n'est codée qu'une seule fois, dans Louable. Voiture, Moto, SiègeAuto, PorteVelo...
			tous peuvent être loués avec le même code !`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("div"),u.innerHTML=m,n=v(),$=g("p"),$.textContent=x,l=v(),f=g("aside"),f.textContent=L,this.h()},l(c){e=C(c,"H3",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-13fx6rx"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1pgak5l"&&(t.innerHTML=p),i=d(c),u=C(c,"DIV",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-xx6qv0"&&(u.innerHTML=m),n=d(c),$=C(c,"P",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-mgjp0b"&&($.textContent=x),l=d(c),f=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(f)!=="svelte-b8vxpx"&&(f.textContent=L),this.h()},h(){w(e,"class","uppercase"),w(u,"class","flex flex-col items-center mt-8 text-2xl"),w($,"class","fragment text-accent-200 font-bold mt-6"),w(f,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),r(c,u,b),r(c,n,b),r(c,$,b),r(c,l,b),r(c,f,b)},p:k,d(c){c&&(a(e),a(s),a(t),a(i),a(u),a(n),a($),a(l),a(f))}}}function Il(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Dl(_){let e,o="Le code devient simple",s,t,p,i,u=`✅ Une seule méthode pour tout louer<br/>
			✅ Ajouter un nouveau type = quelques lignes<br/>
			✅ Zéro duplication de code`,m,n,$=`Regardez la puissance. Une seule méthode louer() qui fonctionne pour tout. Demain on ajoute
			VeloElectrique ? 3 lignes de code. Il hérite de tout le reste. C'est ça la vraie puissance de
			la POO : écrire moins, faire plus.`,x;return t=new Z({props:{class:"java",$$slots:{default:[Il]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-1bcwfrg"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-fazfoj"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-enkna"&&(n.textContent=$),this.h()},h(){w(e,"class","uppercase"),w(i,"class","fragment text-green-400 font-bold"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function jl(_){let e,o="Le refactoring",s,t,p='L&#39;opération que l&#39;on vient de voir s&#39;appelle un <span class="text-important">refactoring</span>',i,u,m="C'est réorganiser le code sans changer son comportement.",n,$,x=`Si vous l&#39;aviez fait dès le départ, vous auriez gagné plus de temps que si vous devez le faire
			plus tard, c&#39;est une <u>certitude</u> !`,l,f,L=`Le refactoring, c'est améliorer la structure du code sans changer ce qu'il fait. C'est
			toujours plus facile de bien faire dès le début que de réparer après. Un code bien conçu,
			c'est des heures de debug en moins.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("p"),u.textContent=m,n=v(),$=g("p"),$.innerHTML=x,l=v(),f=g("aside"),f.textContent=L,this.h()},l(c){e=C(c,"H3",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-t8lx1u"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-u769cg"&&(t.innerHTML=p),i=d(c),u=C(c,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1nmzwcc"&&(u.textContent=m),n=d(c),$=C(c,"P",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-b3fier"&&($.innerHTML=x),l=d(c),f=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(f)!=="svelte-v3296a"&&(f.textContent=L),this.h()},h(){w(e,"class","uppercase"),w(u,"class","fragment"),w($,"class","fragment"),w(f,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),r(c,u,b),r(c,n,b),r(c,$,b),r(c,l,b),r(c,f,b)},p:k,d(c){c&&(a(e),a(s),a(t),a(i),a(u),a(n),a($),a(l),a(f))}}}function kl(_){let e,o="BUILD vs RUN",s,t,p="Le temps d'implémentation (BUILD) augmente si vous faites beaucoup de POO",i,u,m="...mais la maintenance (RUN) coûte moins cher !",n,$,x='<div class="p-4 bg-red-950 rounded-lg"><h4 class="text-red-400">❌ Code vite fait</h4> <ul class="text-xl"><li>Rapide à écrire</li> <li>Difficile à maintenir</li> <li>Bugs fréquents</li> <li>Évolutions coûteuses</li></ul></div> <div class="p-4 bg-green-950 rounded-lg"><h4 class="text-green-400">✅ Code bien conçu</h4> <ul class="text-xl"><li>Plus long à écrire</li> <li>Facile à maintenir</li> <li>Moins de bugs</li> <li>Évolutions simples</li></ul></div>',l,f,L=`En entreprise, on parle de BUILD (le développement initial) et de RUN (la maintenance). Un
			code bien conçu coûte plus cher au BUILD mais beaucoup moins au RUN. Et le RUN, c'est souvent
			80% du coût total d'un projet !`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("p"),u.textContent=m,n=v(),$=g("div"),$.innerHTML=x,l=v(),f=g("aside"),f.textContent=L,this.h()},l(c){e=C(c,"H3",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-bv5mk1"&&(e.textContent=o),s=d(c),t=C(c,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-10nhqsg"&&(t.textContent=p),i=d(c),u=C(c,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-ywkeo"&&(u.textContent=m),n=d(c),$=C(c,"DIV",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-4svqpn"&&($.innerHTML=x),l=d(c),f=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(f)!=="svelte-wpatcb"&&(f.textContent=L),this.h()},h(){w(e,"class","uppercase"),w(t,"class","text-important"),w(u,"class","fragment"),w($,"class","fragment grid grid-cols-2 gap-8 mt-8"),w(f,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),r(c,u,b),r(c,n,b),r(c,$,b),r(c,l,b),r(c,f,b)},p:k,d(c){c&&(a(e),a(s),a(t),a(i),a(u),a(n),a($),a(l),a(f))}}}function Ol(_){let e,o="L'équilibre à trouver",s,t,p="Un <i>bon</i> ingénieur logiciel sait jusqu&#39;à quel niveau il convient d&#39;abstraire",i,u,m='<li class="fragment">❌ <b>Pas assez d&#39;abstraction :</b> vous devez tout casser pour ajouter une fonctionnalité</li> <li class="fragment">❌ <b>Trop d&#39;abstraction :</b> votre client paie pour du code qu&#39;il n&#39;utilisera jamais</li>',n,$,x="En entreprise, tout est question d'équilibre et vient avec l'expérience.",l,f,L=`C'est un équilibre à trouver. Pas assez d'abstraction, et chaque évolution est un cauchemar.
			Trop d'abstraction, et vous passez des semaines à coder des trucs inutiles. Ça vient avec
			l'expérience, avec les projets, avec les erreurs qu'on fait.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("ul"),u.innerHTML=m,n=v(),$=g("p"),$.textContent=x,l=v(),f=g("aside"),f.textContent=L,this.h()},l(c){e=C(c,"H3",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-1082o8n"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1yhe1kd"&&(t.innerHTML=p),i=d(c),u=C(c,"UL",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1veku0x"&&(u.innerHTML=m),n=d(c),$=C(c,"P",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-b8ucny"&&($.textContent=x),l=d(c),f=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(f)!=="svelte-11bqu54"&&(f.textContent=L),this.h()},h(){w(e,"class","uppercase"),w(u,"class","mt-8"),w($,"class","fragment mt-8"),w(f,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),r(c,u,b),r(c,n,b),r(c,$,b),r(c,l,b),r(c,f,b)},p:k,d(c){c&&(a(e),a(s),a(t),a(i),a(u),a(n),a($),a(l),a(f))}}}function zl(_){let e,o="Dans ce module",s,t,p="Faites le plus de zèle possible, exagérez !",i,u,m="C'est en allant trop loin qu'on apprend où sont les limites.",n,$,x="Vous apprendrez à doser en entreprise, avec de vrais projets et de vraies contraintes.",l,f,L=`Dans ce module, je vous encourage à en faire trop. Abstraire partout, hériter de tout. C'est
			comme ça qu'on apprend où sont les limites. En entreprise, vous aurez des contraintes de
			temps, de budget. Là, vous apprendrez à doser. Ici, c'est le moment d'expérimenter.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("p"),u.textContent=m,n=v(),$=g("p"),$.textContent=x,l=v(),f=g("aside"),f.textContent=L,this.h()},l(c){e=C(c,"H3",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-x5naxz"&&(e.textContent=o),s=d(c),t=C(c,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1as3wu1"&&(t.textContent=p),i=d(c),u=C(c,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-lvdult"&&(u.textContent=m),n=d(c),$=C(c,"P",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-1akob0d"&&($.textContent=x),l=d(c),f=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(f)!=="svelte-kluukh"&&(f.textContent=L),this.h()},h(){w(e,"class","uppercase"),w(t,"class","text-important text-4xl"),w(u,"class","fragment mt-8 text-2xl"),w($,"class","fragment text-2xl"),w(f,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),r(c,u,b),r(c,n,b),r(c,$,b),r(c,l,b),r(c,f,b)},p:k,d(c){c&&(a(e),a(s),a(t),a(i),a(u),a(n),a($),a(l),a(f))}}}function Vl(_){let e,o="Récapitulatif",s,t,p='<div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">📦 RANGER</h4> <p class="text-xl">Données + méthodes<br/>dans un même objet</p></div> <div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">🔒 PROTÉGER</h4> <p class="text-xl">Chaque méthode n&#39;accède<br/>qu&#39;à son objet</p></div> <div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">🌳 GÉNÉRALISER</h4> <p class="text-xl">Héritage et abstraction<br/>pour réutiliser le code</p></div>',i,u,m=`On récapitule. La POO c'est 3 piliers. Ranger : on met ensemble ce qui va ensemble. Protéger :
			chaque méthode ne touche qu'à son objet, le compilateur vous aide. Généraliser : on écrit le
			code une fois, on le réutilise partout grâce à l'héritage.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H2",{"data-svelte-h":!0}),h(e)!=="svelte-j5vxp9"&&(e.textContent=o),s=d(n),t=C(n,"DIV",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-acu1zb"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-17zzt5h"&&(u.textContent=m),this.h()},h(){w(t,"class","flex flex-row justify-around items-start mt-8"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function Rl(_){let e,o="La POO, c'est quoi au final ?",s,t,p="Vous venez d'être confronté aux concepts fondamentaux de la POO :",i,u,m='<li><span class="text-important">L&#39;encapsulation</span> : ranger et protéger les données</li> <li><span class="text-important">L&#39;abstraction</span> : généraliser les concepts</li> <li><span class="text-important">L&#39;héritage</span> : réutiliser le code des parents</li>',n,$,x="Nous allons voir ces concepts en détail dans les chapitres suivants.",l,f,L=`On a vu les bases. Encapsulation, abstraction, héritage. Ce sont les piliers de la POO, et on
			va les approfondir tout au long du module. Chaque chapitre va détailler un de ces concepts.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("ul"),u.innerHTML=m,n=v(),$=g("p"),$.textContent=x,l=v(),f=g("aside"),f.textContent=L,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-5i67l6"&&(e.textContent=o),s=d(c),t=C(c,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1vfopav"&&(t.textContent=p),i=d(c),u=C(c,"UL",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-i42s8"&&(u.innerHTML=m),n=d(c),$=C(c,"P",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-ko3lge"&&($.textContent=x),l=d(c),f=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(f)!=="svelte-b4p3e"&&(f.textContent=L),this.h()},h(){w(t,"class","fragment"),w(u,"class","fragment text-2xl mt-4"),w($,"class","fragment mt-8"),w(f,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),r(c,u,b),r(c,n,b),r(c,$,b),r(c,l,b),r(c,f,b)},p:k,d(c){c&&(a(e),a(s),a(t),a(i),a(u),a(n),a($),a(l),a(f))}}}function Ul(_){let e,o="Retenez ceci",s,t,p='La POO est un <span class="text-important">&quot;outil&quot;</span>.',i,u,m=`Si vous faites du Java, même en codant mal, vous faites de la POO compte tenu de la nature du
			langage.`,n,$,x=`Si la programmation n&#39;est qu&#39;une suite de blocs de code tels des <b>légos</b>, la POO, c&#39;est
			fabriquer des blocs <span class="text-important">intelligemment</span>
			que vous réutilisez, peu importe que vous construisiez un pont ou une maison.`,l,f,L=`La POO c'est un outil, pas une obligation. Mais c'est un outil puissant. En Java, vous faites
			de la POO que vous le vouliez ou non, c'est la nature du langage. L'idée c'est de fabriquer
			des briques réutilisables. Comme des légos bien conçus. Une brique "Véhicule" peut servir pour
			une voiture aujourd'hui, une moto demain, un vaisseau spatial dans 5 ans.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("p"),u.textContent=m,n=v(),$=g("p"),$.innerHTML=x,l=v(),f=g("aside"),f.textContent=L,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-79cey5"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-i0a1q0"&&(t.innerHTML=p),i=d(c),u=C(c,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-18j8tnm"&&(u.textContent=m),n=d(c),$=C(c,"P",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-1ugi8k9"&&($.innerHTML=x),l=d(c),f=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(f)!=="svelte-kw89mq"&&(f.textContent=L),this.h()},h(){w(u,"class","fragment"),w($,"class","fragment mt-8 text-2xl bg-accent-950 p-4 rounded-lg"),w(f,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),r(c,u,b),r(c,n,b),r(c,$,b),r(c,l,b),r(c,f,b)},p:k,d(c){c&&(a(e),a(s),a(t),a(i),a(u),a(n),a($),a(l),a(f))}}}function Jl(_){let e,o="À vous de jouer !",s,t,p="Dans les prochains chapitres, nous allons :",i,u,m='<li class="fragment">📦 Approfondir l&#39;<b>encapsulation</b> et la visibilité</li> <li class="fragment">🔗 Maîtriser l&#39;<b>héritage</b> et le polymorphisme</li> <li class="fragment">📋 Découvrir les <b>interfaces</b> et les classes abstraites</li> <li class="fragment">🎨 Apprendre les <b>Design Patterns</b> classiques</li>',n,$,x=`C'est parti pour la suite ! On va approfondir chaque concept. L'encapsulation, l'héritage, les
			interfaces, et même les Design Patterns. À la fin du module, vous saurez concevoir du code
			propre, évolutif, maintenable.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("ul"),u.innerHTML=m,n=v(),$=g("aside"),$.textContent=x,this.h()},l(l){e=C(l,"H2",{"data-svelte-h":!0}),h(e)!=="svelte-cgpepy"&&(e.textContent=o),s=d(l),t=C(l,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-16xre1k"&&(t.textContent=p),i=d(l),u=C(l,"UL",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-m1w35p"&&(u.innerHTML=m),n=d(l),$=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-1kgc7yy"&&($.textContent=x),this.h()},h(){w(t,"class","text-3xl mt-8"),w(u,"class","text-2xl mt-4"),w($,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,u,f),r(l,n,f),r(l,$,f)},p:k,d(l){l&&(a(e),a(s),a(t),a(i),a(u),a(n),a($))}}}function Bl(_){let e,o,s,t,p,i,u,m,n,$,x,l,f,L,c,b,I,E,O,A,D,B,V,K,ie,j,se,_e,be,he,Pe,xe,we,ge,qe,ee,me,te,ve,le,de,He,Ee,Se,Ae,y,pe,Y,ce,Me,Ie,Te,De,X,fe,je,ze,ke,Oe,Ve,Ue,Re,W,Ce,Be,Je,Ne,N,oe,F,$e,Ze,Fe,ye;return e=new z({props:{$$slots:{default:[Bs]},$$scope:{ctx:_}}}),s=new z({props:{$$slots:{default:[Ns]},$$scope:{ctx:_}}}),p=new z({props:{$$slots:{default:[Fs]},$$scope:{ctx:_}}}),u=new z({props:{data_background_color:"#1a1a2e",$$slots:{default:[Gs]},$$scope:{ctx:_}}}),n=new z({props:{$$slots:{default:[Ks]},$$scope:{ctx:_}}}),x=new z({props:{$$slots:{default:[Xs]},$$scope:{ctx:_}}}),f=new z({props:{$$slots:{default:[Ys]},$$scope:{ctx:_}}}),c=new z({props:{$$slots:{default:[Zs]},$$scope:{ctx:_}}}),I=new z({props:{data_background_color:"#1a1a2e",$$slots:{default:[ys]},$$scope:{ctx:_}}}),O=new z({props:{$$slots:{default:[tl]},$$scope:{ctx:_}}}),D=new z({props:{$$slots:{default:[ll]},$$scope:{ctx:_}}}),V=new z({props:{$$slots:{default:[il]},$$scope:{ctx:_}}}),ie=new z({props:{$$slots:{default:[ul]},$$scope:{ctx:_}}}),se=new z({props:{$$slots:{default:[fl]},$$scope:{ctx:_}}}),be=new z({props:{$$slots:{default:[cl]},$$scope:{ctx:_}}}),Pe=new z({props:{data_background_color:"#1a1a2e",$$slots:{default:[pl]},$$scope:{ctx:_}}}),we=new z({props:{$$slots:{default:[ml]},$$scope:{ctx:_}}}),qe=new z({props:{$$slots:{default:[dl]},$$scope:{ctx:_}}}),me=new z({props:{$$slots:{default:[_l]},$$scope:{ctx:_}}}),ve=new z({props:{$$slots:{default:[Cl]},$$scope:{ctx:_}}}),de=new z({props:{$$slots:{default:[gl]},$$scope:{ctx:_}}}),Ee=new z({props:{$$slots:{default:[hl]},$$scope:{ctx:_}}}),Ae=new z({props:{$$slots:{default:[bl]},$$scope:{ctx:_}}}),pe=new z({props:{$$slots:{default:[wl]},$$scope:{ctx:_}}}),ce=new z({props:{$$slots:{default:[Pl]},$$scope:{ctx:_}}}),Ie=new z({props:{$$slots:{default:[Ml]},$$scope:{ctx:_}}}),De=new z({props:{$$slots:{default:[El]},$$scope:{ctx:_}}}),fe=new z({props:{$$slots:{default:[Al]},$$scope:{ctx:_}}}),ze=new z({props:{$$slots:{default:[Dl]},$$scope:{ctx:_}}}),Oe=new z({props:{data_background_color:"#00353F",$$slots:{default:[jl]},$$scope:{ctx:_}}}),Ue=new z({props:{data_background_color:"#00353F",$$slots:{default:[kl]},$$scope:{ctx:_}}}),W=new z({props:{data_background_color:"#00353F",$$slots:{default:[Ol]},$$scope:{ctx:_}}}),Be=new z({props:{data_background_color:"#00353F",$$slots:{default:[zl]},$$scope:{ctx:_}}}),Ne=new z({props:{$$slots:{default:[Vl]},$$scope:{ctx:_}}}),oe=new z({props:{$$slots:{default:[Rl]},$$scope:{ctx:_}}}),$e=new z({props:{$$slots:{default:[Ul]},$$scope:{ctx:_}}}),Fe=new z({props:{$$slots:{default:[Jl]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment),o=v(),T(s.$$.fragment),t=v(),T(p.$$.fragment),i=v(),T(u.$$.fragment),m=v(),T(n.$$.fragment),$=v(),T(x.$$.fragment),l=v(),T(f.$$.fragment),L=v(),T(c.$$.fragment),b=v(),T(I.$$.fragment),E=v(),T(O.$$.fragment),A=v(),T(D.$$.fragment),B=v(),T(V.$$.fragment),K=v(),T(ie.$$.fragment),j=v(),T(se.$$.fragment),_e=v(),T(be.$$.fragment),he=v(),T(Pe.$$.fragment),xe=v(),T(we.$$.fragment),ge=v(),T(qe.$$.fragment),ee=v(),T(me.$$.fragment),te=v(),T(ve.$$.fragment),le=v(),T(de.$$.fragment),He=v(),T(Ee.$$.fragment),Se=v(),T(Ae.$$.fragment),y=v(),T(pe.$$.fragment),Y=v(),T(ce.$$.fragment),Me=v(),T(Ie.$$.fragment),Te=v(),T(De.$$.fragment),X=v(),T(fe.$$.fragment),je=v(),T(ze.$$.fragment),ke=v(),T(Oe.$$.fragment),Ve=v(),T(Ue.$$.fragment),Re=v(),T(W.$$.fragment),Ce=v(),T(Be.$$.fragment),Je=v(),T(Ne.$$.fragment),N=v(),T(oe.$$.fragment),F=v(),T($e.$$.fragment),Ze=v(),T(Fe.$$.fragment)},l(J){M(e.$$.fragment,J),o=d(J),M(s.$$.fragment,J),t=d(J),M(p.$$.fragment,J),i=d(J),M(u.$$.fragment,J),m=d(J),M(n.$$.fragment,J),$=d(J),M(x.$$.fragment,J),l=d(J),M(f.$$.fragment,J),L=d(J),M(c.$$.fragment,J),b=d(J),M(I.$$.fragment,J),E=d(J),M(O.$$.fragment,J),A=d(J),M(D.$$.fragment,J),B=d(J),M(V.$$.fragment,J),K=d(J),M(ie.$$.fragment,J),j=d(J),M(se.$$.fragment,J),_e=d(J),M(be.$$.fragment,J),he=d(J),M(Pe.$$.fragment,J),xe=d(J),M(we.$$.fragment,J),ge=d(J),M(qe.$$.fragment,J),ee=d(J),M(me.$$.fragment,J),te=d(J),M(ve.$$.fragment,J),le=d(J),M(de.$$.fragment,J),He=d(J),M(Ee.$$.fragment,J),Se=d(J),M(Ae.$$.fragment,J),y=d(J),M(pe.$$.fragment,J),Y=d(J),M(ce.$$.fragment,J),Me=d(J),M(Ie.$$.fragment,J),Te=d(J),M(De.$$.fragment,J),X=d(J),M(fe.$$.fragment,J),je=d(J),M(ze.$$.fragment,J),ke=d(J),M(Oe.$$.fragment,J),Ve=d(J),M(Ue.$$.fragment,J),Re=d(J),M(W.$$.fragment,J),Ce=d(J),M(Be.$$.fragment,J),Je=d(J),M(Ne.$$.fragment,J),N=d(J),M(oe.$$.fragment,J),F=d(J),M($e.$$.fragment,J),Ze=d(J),M(Fe.$$.fragment,J)},m(J,ue){S(e,J,ue),r(J,o,ue),S(s,J,ue),r(J,t,ue),S(p,J,ue),r(J,i,ue),S(u,J,ue),r(J,m,ue),S(n,J,ue),r(J,$,ue),S(x,J,ue),r(J,l,ue),S(f,J,ue),r(J,L,ue),S(c,J,ue),r(J,b,ue),S(I,J,ue),r(J,E,ue),S(O,J,ue),r(J,A,ue),S(D,J,ue),r(J,B,ue),S(V,J,ue),r(J,K,ue),S(ie,J,ue),r(J,j,ue),S(se,J,ue),r(J,_e,ue),S(be,J,ue),r(J,he,ue),S(Pe,J,ue),r(J,xe,ue),S(we,J,ue),r(J,ge,ue),S(qe,J,ue),r(J,ee,ue),S(me,J,ue),r(J,te,ue),S(ve,J,ue),r(J,le,ue),S(de,J,ue),r(J,He,ue),S(Ee,J,ue),r(J,Se,ue),S(Ae,J,ue),r(J,y,ue),S(pe,J,ue),r(J,Y,ue),S(ce,J,ue),r(J,Me,ue),S(Ie,J,ue),r(J,Te,ue),S(De,J,ue),r(J,X,ue),S(fe,J,ue),r(J,je,ue),S(ze,J,ue),r(J,ke,ue),S(Oe,J,ue),r(J,Ve,ue),S(Ue,J,ue),r(J,Re,ue),S(W,J,ue),r(J,Ce,ue),S(Be,J,ue),r(J,Je,ue),S(Ne,J,ue),r(J,N,ue),S(oe,J,ue),r(J,F,ue),S($e,J,ue),r(J,Ze,ue),S(Fe,J,ue),ye=!0},p(J,ue){const et={};ue&1&&(et.$$scope={dirty:ue,ctx:J}),e.$set(et);const tt={};ue&1&&(tt.$$scope={dirty:ue,ctx:J}),s.$set(tt);const st={};ue&1&&(st.$$scope={dirty:ue,ctx:J}),p.$set(st);const U={};ue&1&&(U.$$scope={dirty:ue,ctx:J}),u.$set(U);const re={};ue&1&&(re.$$scope={dirty:ue,ctx:J}),n.$set(re);const nt={};ue&1&&(nt.$$scope={dirty:ue,ctx:J}),x.$set(nt);const lt={};ue&1&&(lt.$$scope={dirty:ue,ctx:J}),f.$set(lt);const it={};ue&1&&(it.$$scope={dirty:ue,ctx:J}),c.$set(it);const R={};ue&1&&(R.$$scope={dirty:ue,ctx:J}),I.$set(R);const ae={};ue&1&&(ae.$$scope={dirty:ue,ctx:J}),O.$set(ae);const at={};ue&1&&(at.$$scope={dirty:ue,ctx:J}),D.$set(at);const rt={};ue&1&&(rt.$$scope={dirty:ue,ctx:J}),V.$set(rt);const ut={};ue&1&&(ut.$$scope={dirty:ue,ctx:J}),ie.$set(ut);const ot={};ue&1&&(ot.$$scope={dirty:ue,ctx:J}),se.$set(ot);const $t={};ue&1&&($t.$$scope={dirty:ue,ctx:J}),be.$set($t);const ft={};ue&1&&(ft.$$scope={dirty:ue,ctx:J}),Pe.$set(ft);const ct={};ue&1&&(ct.$$scope={dirty:ue,ctx:J}),we.$set(ct);const pt={};ue&1&&(pt.$$scope={dirty:ue,ctx:J}),qe.$set(pt);const mt={};ue&1&&(mt.$$scope={dirty:ue,ctx:J}),me.$set(mt);const dt={};ue&1&&(dt.$$scope={dirty:ue,ctx:J}),ve.$set(dt);const vt={};ue&1&&(vt.$$scope={dirty:ue,ctx:J}),de.$set(vt);const xt={};ue&1&&(xt.$$scope={dirty:ue,ctx:J}),Ee.$set(xt);const _t={};ue&1&&(_t.$$scope={dirty:ue,ctx:J}),Ae.$set(_t);const Ct={};ue&1&&(Ct.$$scope={dirty:ue,ctx:J}),pe.$set(Ct);const gt={};ue&1&&(gt.$$scope={dirty:ue,ctx:J}),ce.$set(gt);const ht={};ue&1&&(ht.$$scope={dirty:ue,ctx:J}),Ie.$set(ht);const bt={};ue&1&&(bt.$$scope={dirty:ue,ctx:J}),De.$set(bt);const Lt={};ue&1&&(Lt.$$scope={dirty:ue,ctx:J}),fe.$set(Lt);const wt={};ue&1&&(wt.$$scope={dirty:ue,ctx:J}),ze.$set(wt);const qt={};ue&1&&(qt.$$scope={dirty:ue,ctx:J}),Oe.$set(qt);const Pt={};ue&1&&(Pt.$$scope={dirty:ue,ctx:J}),Ue.$set(Pt);const Ht={};ue&1&&(Ht.$$scope={dirty:ue,ctx:J}),W.$set(Ht);const St={};ue&1&&(St.$$scope={dirty:ue,ctx:J}),Be.$set(St);const Mt={};ue&1&&(Mt.$$scope={dirty:ue,ctx:J}),Ne.$set(Mt);const Tt={};ue&1&&(Tt.$$scope={dirty:ue,ctx:J}),oe.$set(Tt);const Et={};ue&1&&(Et.$$scope={dirty:ue,ctx:J}),$e.$set(Et);const At={};ue&1&&(At.$$scope={dirty:ue,ctx:J}),Fe.$set(At)},i(J){ye||(H(e.$$.fragment,J),H(s.$$.fragment,J),H(p.$$.fragment,J),H(u.$$.fragment,J),H(n.$$.fragment,J),H(x.$$.fragment,J),H(f.$$.fragment,J),H(c.$$.fragment,J),H(I.$$.fragment,J),H(O.$$.fragment,J),H(D.$$.fragment,J),H(V.$$.fragment,J),H(ie.$$.fragment,J),H(se.$$.fragment,J),H(be.$$.fragment,J),H(Pe.$$.fragment,J),H(we.$$.fragment,J),H(qe.$$.fragment,J),H(me.$$.fragment,J),H(ve.$$.fragment,J),H(de.$$.fragment,J),H(Ee.$$.fragment,J),H(Ae.$$.fragment,J),H(pe.$$.fragment,J),H(ce.$$.fragment,J),H(Ie.$$.fragment,J),H(De.$$.fragment,J),H(fe.$$.fragment,J),H(ze.$$.fragment,J),H(Oe.$$.fragment,J),H(Ue.$$.fragment,J),H(W.$$.fragment,J),H(Be.$$.fragment,J),H(Ne.$$.fragment,J),H(oe.$$.fragment,J),H($e.$$.fragment,J),H(Fe.$$.fragment,J),ye=!0)},o(J){P(e.$$.fragment,J),P(s.$$.fragment,J),P(p.$$.fragment,J),P(u.$$.fragment,J),P(n.$$.fragment,J),P(x.$$.fragment,J),P(f.$$.fragment,J),P(c.$$.fragment,J),P(I.$$.fragment,J),P(O.$$.fragment,J),P(D.$$.fragment,J),P(V.$$.fragment,J),P(ie.$$.fragment,J),P(se.$$.fragment,J),P(be.$$.fragment,J),P(Pe.$$.fragment,J),P(we.$$.fragment,J),P(qe.$$.fragment,J),P(me.$$.fragment,J),P(ve.$$.fragment,J),P(de.$$.fragment,J),P(Ee.$$.fragment,J),P(Ae.$$.fragment,J),P(pe.$$.fragment,J),P(ce.$$.fragment,J),P(Ie.$$.fragment,J),P(De.$$.fragment,J),P(fe.$$.fragment,J),P(ze.$$.fragment,J),P(Oe.$$.fragment,J),P(Ue.$$.fragment,J),P(W.$$.fragment,J),P(Be.$$.fragment,J),P(Ne.$$.fragment,J),P(oe.$$.fragment,J),P($e.$$.fragment,J),P(Fe.$$.fragment,J),ye=!1},d(J){J&&(a(o),a(t),a(i),a(m),a($),a(l),a(L),a(b),a(E),a(A),a(B),a(K),a(j),a(_e),a(he),a(xe),a(ge),a(ee),a(te),a(le),a(He),a(Se),a(y),a(Y),a(Me),a(Te),a(X),a(je),a(ke),a(Ve),a(Re),a(Ce),a(Je),a(N),a(F),a(Ze)),q(e,J),q(s,J),q(p,J),q(u,J),q(n,J),q(x,J),q(f,J),q(c,J),q(I,J),q(O,J),q(D,J),q(V,J),q(ie,J),q(se,J),q(be,J),q(Pe,J),q(we,J),q(qe,J),q(me,J),q(ve,J),q(de,J),q(Ee,J),q(Ae,J),q(pe,J),q(ce,J),q(Ie,J),q(De,J),q(fe,J),q(ze,J),q(Oe,J),q(Ue,J),q(W,J),q(Be,J),q(Ne,J),q(oe,J),q($e,J),q(Fe,J)}}}function Nl(_){let e,o;return e=new z({props:{$$slots:{default:[Bl]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const p={};t&1&&(p.$$scope={dirty:t,ctx:s}),e.$set(p)},i(s){o||(H(e.$$.fragment,s),o=!0)},o(s){P(e.$$.fragment,s),o=!1},d(s){q(e,s)}}}class Fl extends Xe{constructor(e){super(),Ye(this,e,null,Nl,We,{})}}function Gl(_){let e,o="Et si on ne veut pas hériter ?",s,t,p="L'héritage, c'est puissant... mais pas toujours adapté.",i,u,m='<p class="text-2xl">🤔 Une Voiture <b>est un</b> Moteur ?</p> <p class="text-red-400 text-3xl fragment">❌ Non !</p>',n,$,x='<p class="text-2xl">🤔 Une Voiture <b>a un</b> Moteur ?</p> <p class="text-green-400 text-3xl fragment">✅ Oui !</p>',l,f,L='C&#39;est la <span class="text-important">composition</span> !';return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("div"),u.innerHTML=m,n=v(),$=g("div"),$.innerHTML=x,l=v(),f=g("p"),f.innerHTML=L,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-kyeugj"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-135l6z7"&&(t.textContent=p),i=d(c),u=C(c,"DIV",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-bjhwhv"&&(u.innerHTML=m),n=d(c),$=C(c,"DIV",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-1iidfrd"&&($.innerHTML=x),l=d(c),f=C(c,"P",{class:!0,"data-svelte-h":!0}),h(f)!=="svelte-11ppavm"&&(f.innerHTML=L),this.h()},h(){w(u,"class","fragment mt-8"),w($,"class","fragment mt-4"),w(f,"class","fragment mt-8 text-accent-200 font-bold")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),r(c,u,b),r(c,n,b),r(c,$,b),r(c,l,b),r(c,f,b)},p:k,d(c){c&&(a(e),a(s),a(t),a(i),a(u),a(n),a($),a(l),a(f))}}}function Ql(_){let e,o="Qu'est-ce que la composition ?",s,t,p="La composition permet de créer des objets complexes en combinant des objets plus simples.",i,u,m="C&#39;est comme assembler des <b>briques Lego</b> pour construire une structure plus grande.",n,$,x='En POO, la composition consiste à avoir des <span class="text-important">instances de classes en tant qu&#39;attributs</span> d&#39;une autre classe.',l,f,L=`Si vous connaissez les bases de données, c'est comme une clé étrangère. Un objet "possède" un
			autre objet.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("p"),u.innerHTML=m,n=v(),$=g("p"),$.innerHTML=x,l=v(),f=g("aside"),f.textContent=L,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1ey692r"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1j30nsj"&&(t.textContent=p),i=d(c),u=C(c,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-12yvhve"&&(u.innerHTML=m),n=d(c),$=C(c,"P",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-1dofonx"&&($.innerHTML=x),l=d(c),f=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(f)!=="svelte-1gjj4rn"&&(f.textContent=L),this.h()},h(){w(u,"class","fragment mt-4"),w($,"class","fragment mt-4"),w(f,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),r(c,u,b),r(c,n,b),r(c,$,b),r(c,l,b),r(c,f,b)},p:k,d(c){c&&(a(e),a(s),a(t),a(i),a(u),a(n),a($),a(l),a(f))}}}function Kl(_){let e,o="Comment choisir : Héritage ou Composition ?",s,t,p='<div class="p-6 bg-accent-950 rounded-lg"><p class="fragment">🤔 &quot;Est-ce qu&#39;un X <b class="text-important">est un</b> Y ?&quot;</p> <p class="fragment text-green-400 ml-8">→ OUI : <b>Héritage</b> (extends)</p> <p class="fragment text-red-400 ml-8">→ NON : ↓</p> <p class="fragment mt-4">🤔 &quot;Est-ce qu&#39;un X <b class="text-important">a un</b> Y ?&quot;</p> <p class="fragment text-blue-400 ml-8">→ OUI : <b>Composition</b> (attribut)</p></div>',i,u,m=`C'est LA règle d'or. Apprenez-la par cœur. Si "X est un Y" sonne faux, n'héritez pas,
			composez.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1jpzxsy"&&(e.textContent=o),s=d(n),t=C(n,"DIV",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1t58sxf"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1bu2hun"&&(u.textContent=m),this.h()},h(){w(t,"class","text-2xl mt-8"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function Wl(_){let e,o="Exemples concrets",s,t,p='<thead><tr><th class="p-3">Question</th> <th class="p-3">Réponse</th> <th class="p-3">Relation</th></tr></thead> <tbody><tr class="fragment"><td class="p-3">Un Chien <b>est un</b> Animal ?</td> <td class="p-3 text-green-400">✅ Oui</td> <td class="p-3">Héritage</td></tr> <tr class="fragment"><td class="p-3">Une Voiture <b>est un</b> Moteur ?</td> <td class="p-3 text-red-400">❌ Non</td> <td class="p-3">-</td></tr> <tr class="fragment"><td class="p-3">Une Voiture <b>a un</b> Moteur ?</td> <td class="p-3 text-green-400">✅ Oui</td> <td class="p-3">Composition</td></tr> <tr class="fragment"><td class="p-3">Un Maître <b>a un</b> Animal ?</td> <td class="p-3 text-green-400">✅ Oui</td> <td class="p-3">Composition</td></tr></tbody>',i,u,m=`Faites cet exercice mental à chaque fois que vous modélisez. C'est automatique avec
			l'expérience. En entretien d'embauche, on vous demande souvent : "Pourquoi avoir choisi
			héritage ou composition ici ?" Réponse : "Parce que dire 'Une Voiture est un Moteur' n'a pas
			de sens."`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("table"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1yrhyzi"&&(e.textContent=o),s=d(n),t=C(n,"TABLE",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1lueyjo"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-ig6cyi"&&(u.textContent=m),this.h()},h(){w(t,"class","text-xl mt-6"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function Xl(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Yl(_){let e,o="Exemple : Voiture et Moteur",s,t,p,i,u=`Le losange plein (◆) indique une <span class="text-important">composition</span> : la Voiture
			<b>possède</b> le Moteur.`,m;return t=new Ke({props:{$$slots:{default:[Xl]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-12o3qzv"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-o544v4"&&(i.innerHTML=u),this.h()},h(){w(i,"class","fragment")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function Zl(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function yl(_){let e,o="En code Java",s,t,p;return t=new Z({props:{lines:"1-8|10-20|22-25",$$slots:{default:[Zl]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(i){e=C(i,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1w10xpg"&&(e.textContent=o),s=d(i),M(t.$$.fragment,i)},m(i,u){r(i,e,u),r(i,s,u),S(t,i,u),p=!0},p(i,u){const m={};u&1&&(m.$$scope={dirty:u,ctx:i}),t.$set(m)},i(i){p||(H(t.$$.fragment,i),p=!0)},o(i){P(t.$$.fragment,i),p=!1},d(i){i&&(a(e),a(s)),q(t,i)}}}function en(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function tn(_){let e,o="Avantage : flexibilité",s,t,p="La composition favorise la <b>réutilisation</b> et la <b>flexibilité</b>.",i,u,m,n,$="On peut changer le moteur sans modifier la classe Voiture !",x,l,f=`C'est le principe "Composition over Inheritance" du Gang of Four. Préférez composer plutôt
			qu'hériter. L'héritage crée un couplage fort. La composition permet de changer de stratégie à
			l'exécution. C'est la base de nombreux Design Patterns : Strategy, Decorator, Adapter...`,L;return u=new Z({props:{$$slots:{default:[en]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment),m=v(),n=g("p"),n.textContent=$,x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1y64iq2"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-mbviv2"&&(t.innerHTML=p),i=d(c),M(u.$$.fragment,c),m=d(c),n=C(c,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-ybembw"&&(n.textContent=$),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-1bwcsiy"&&(l.textContent=f),this.h()},h(){w(n,"class","fragment text-accent-200"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),S(u,c,b),r(c,m,b),r(c,n,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),u.$set(I)},i(c){L||(H(u.$$.fragment,c),L=!0)},o(c){P(u.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(n),a(x),a(l)),q(u,c)}}}function sn(_){let e,o="Les deux relations fondamentales",s,t,p="Le cœur de l'architecture objet",i,u,m=`Tout le reste de la POO découle de ces deux relations. Maîtrisez-les et vous maîtrisez 80% de
			l'architecture objet. Quand vous lisez du code, cherchez ces relations. Quand vous concevez,
			posez-vous ces questions.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H2",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-fh7ab8"&&(e.textContent=o),s=d(n),t=C(n,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1cmiiew"&&(t.textContent=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-tu4ua3"&&(u.textContent=m),this.h()},h(){w(e,"class","text-5xl"),w(t,"class","text-2xl text-gray-400"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function ln(_){let e,o=`<p>L&#39;un des intérêts de la POO réside dans les <b>relations</b> entre les objets. Ces relations
				constituent l&#39;<span class="text-important">architecture</span> de votre application.</p> <dl class="mt-6 text-xl"><dt class="fragment"><strong class="text-important">&quot;est un&quot;</strong> (<em>is-a</em>)</dt><dd class="fragment ml-8"><p>Une classe peut être assimilée à une autre, plus générale. → <span class="text-important">Héritage</span></p> </dd><dt class="fragment mt-4"><strong class="text-important">&quot;a un&quot;</strong> (<em>has-a</em>)
				</dt><dd class="fragment ml-8"><p>Une classe dépend des services d&#39;une autre. → <span class="text-important">Composition</span></p></dd></dl>`,s,t,p=`Ces termes viennent de l'anglais et sont utilisés mondialement. Apprenez "is-a" et "has-a".
			Quand vous modélisez, reformulez toujours en français : "Un X est-il un Y ?" "Un X a-t-il un Y
			?" La réponse vous dit quelle relation utiliser. C'est mécanique.`;return{c(){e=g("div"),e.innerHTML=o,s=v(),t=g("aside"),t.textContent=p,this.h()},l(i){e=C(i,"DIV",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-1hproaj"&&(e.innerHTML=o),s=d(i),t=C(i,"ASIDE",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-db092m"&&(t.textContent=p),this.h()},h(){w(e,"class",""),w(t,"class","notes")},m(i,u){r(i,e,u),r(i,s,u),r(i,t,u)},p:k,d(i){i&&(a(e),a(s),a(t))}}}function nn(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function an(_){let e,o="Exemple : Maître et Animal",s,t,p="Un Maître <b>a un</b> Animal (composition), et l&#39;Animal peut être un Chien ou un Chat (héritage).",i,u,m,n,$=`Cet exemple combine les deux concepts. C'est typique d'une architecture réelle. Le Maître ne
			connaît pas le type exact de son animal. Il sait juste que c'est un Animal. C'est de
			l'injection de dépendance avant l'heure ! Les frameworks comme Spring font exactement ça.`,x;return u=new Ke({props:{$$slots:{default:[nn]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment),m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1defcuq"&&(e.textContent=o),s=d(l),t=C(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1vsft0l"&&(t.innerHTML=p),i=d(l),M(u.$$.fragment,l),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-6gtlgp"&&(n.textContent=$),this.h()},h(){w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),S(u,l,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),u.$set(L)},i(l){x||(H(u.$$.fragment,l),x=!0)},o(l){P(u.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(t),a(i),a(m),a(n)),q(u,l)}}}function rn(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function un(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function on(_){let e,o="En code Java",s,t,p,i,u,m;return p=new Z({props:{class:"language-java",$$slots:{default:[rn]},$$scope:{ctx:_}}}),u=new Z({props:{class:"language-java",$$slots:{default:[un]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),T(p.$$.fragment),i=v(),T(u.$$.fragment),this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1w10xpg"&&(e.textContent=o),s=d(n),t=C(n,"DIV",{class:!0});var $=Le(t);M(p.$$.fragment,$),i=d($),M(u.$$.fragment,$),$.forEach(a),this.h()},h(){w(t,"class","flex flex-row items-start gap-4")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),S(p,t,null),ne(t,i),S(u,t,null),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),p.$set(x);const l={};$&1&&(l.$$scope={dirty:$,ctx:n}),u.$set(l)},i(n){m||(H(p.$$.fragment,n),H(u.$$.fragment,n),m=!0)},o(n){P(p.$$.fragment,n),P(u.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(t)),q(p),q(u)}}}function $n(_){let e=`
Maitre jean = new Maitre(new Chien());
Maitre marie = new Maitre(new Chat());

jean.presenterAnimal();   // "Wouaf !"
marie.presenterAnimal();  // "Miaou !"

// On peut changer d'animal sans modifier la classe Maitre !
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function fn(_){let e,o="La puissance de la combinaison",s,t,p="Le Maître ne sait pas quel type d&#39;animal il a... et c&#39;est <b>voulu</b> !",i,u,m,n,$=`C&#39;est le <span class="text-important">polymorphisme</span> en action !<br/>
			(on le verra en détail plus tard)`,x,l,f=`C'est là que tout prend son sens. Composition + héritage + polymorphisme = architecture
			flexible. Si demain on ajoute un Perroquet, le code du Maître ne change pas. Zéro
			modification. C'est le principe Open/Closed en action : ouvert à l'extension, fermé à la
			modification.`,L;return u=new Z({props:{$$slots:{default:[$n]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment),m=v(),n=g("p"),n.innerHTML=$,x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-cj68oa"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-kzsg9e"&&(t.innerHTML=p),i=d(c),M(u.$$.fragment,c),m=d(c),n=C(c,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1rhcp8x"&&(n.innerHTML=$),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-atbhqx"&&(l.textContent=f),this.h()},h(){w(n,"class","fragment text-accent-200 font-bold"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),S(u,c,b),r(c,m,b),r(c,n,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),u.$set(I)},i(c){L||(H(u.$$.fragment,c),L=!0)},o(c){P(u.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(n),a(x),a(l)),q(u,c)}}}function cn(_){let e,o="Composition vs Agrégation",s,t,p="Il existe une nuance importante :",i,u,m='<div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">◆ Composition</h4> <p class="text-xl mt-2">L&#39;objet contenu <b>appartient</b> à l&#39;objet conteneur.</p> <p class="text-sm text-gray-400 mt-2">Si la Voiture est détruite, le Moteur aussi.</p></div> <div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">◇ Agrégation</h4> <p class="text-xl mt-2">L&#39;objet contenu <b>existe indépendamment</b>.</p> <p class="text-sm text-gray-400 mt-2">Si l&#39;Équipe est dissoute, les Joueurs existent toujours.</p></div>',n,$,x=`En pratique, beaucoup de développeurs confondent les deux, et ce n'est pas grave. L'important
			c'est de se poser la question : "Si je supprime le conteneur, le contenu a-t-il encore un sens
			?" Une roue sans voiture = bizarre. Un joueur sans équipe = normal (il peut changer d'équipe).`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("div"),u.innerHTML=m,n=v(),$=g("aside"),$.textContent=x,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-s3132y"&&(e.textContent=o),s=d(l),t=C(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1v8b0oy"&&(t.textContent=p),i=d(l),u=C(l,"DIV",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-5t1llc"&&(u.innerHTML=m),n=d(l),$=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-2sj58"&&($.textContent=x),this.h()},h(){w(u,"class","grid grid-cols-2 gap-8 mt-6"),w($,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,u,f),r(l,n,f),r(l,$,f)},p:k,d(l){l&&(a(e),a(s),a(t),a(i),a(u),a(n),a($))}}}function pn(_){let e=`
@startuml
class Voiture
class Moteur
class Equipe
class Joueur

Voiture *-- Moteur : composition
Equipe o-- Joueur : agrégation
@enduml
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function mn(_){let e,o="En UML",s,t,p,i,u="◆ = Composition (losange plein) | ◇ = Agrégation (losange vide)",m,n,$=`En pratique, la différence est subtile. L'important c'est de comprendre qui "possède" quoi. En
			composition, le conteneur crée l'objet. En agrégation, on le reçoit de l'extérieur.`,x;return t=new Ke({props:{$$slots:{default:[pn]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.textContent=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1dfk95l"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-ze7nvt"&&(i.textContent=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1iqya04"&&(n.textContent=$),this.h()},h(){w(i,"class","mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function dn(_){let e=`
class Voiture {
    // Le moteur est CRÉÉ par la voiture
    private Moteur moteur = new Moteur();
    
    // Si Voiture est garbage collecté,
    // Moteur l'est aussi
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function vn(_){let e=`
class Equipe {
    // Les joueurs sont REÇUS de l'extérieur
    private List<Joueur> joueurs;
    
    void ajouterJoueur(Joueur j) {
        joueurs.add(j);
    }
    // Les joueurs existent avant/après
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function xn(_){let e,o="En code : qui crée quoi ?",s,t,p,i,u="◆ Composition",m,n,$,x,l,f="◇ Agrégation",L,c,b;return n=new Z({props:{class:"language-java",$$slots:{default:[dn]},$$scope:{ctx:_}}}),c=new Z({props:{class:"language-java",$$slots:{default:[vn]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),p=g("div"),i=g("h4"),i.textContent=u,m=v(),T(n.$$.fragment),$=v(),x=g("div"),l=g("h4"),l.textContent=f,L=v(),T(c.$$.fragment),this.h()},l(I){e=C(I,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-13g76yp"&&(e.textContent=o),s=d(I),t=C(I,"DIV",{class:!0});var E=Le(t);p=C(E,"DIV",{});var O=Le(p);i=C(O,"H4",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-13iofgd"&&(i.textContent=u),m=d(O),M(n.$$.fragment,O),O.forEach(a),$=d(E),x=C(E,"DIV",{});var A=Le(x);l=C(A,"H4",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-b2romh"&&(l.textContent=f),L=d(A),M(c.$$.fragment,A),A.forEach(a),E.forEach(a),this.h()},h(){w(i,"class","text-important"),w(l,"class","text-important"),w(t,"class","grid grid-cols-2 gap-4")},m(I,E){r(I,e,E),r(I,s,E),r(I,t,E),ne(t,p),ne(p,i),ne(p,m),S(n,p,null),ne(t,$),ne(t,x),ne(x,l),ne(x,L),S(c,x,null),b=!0},p(I,E){const O={};E&1&&(O.$$scope={dirty:E,ctx:I}),n.$set(O);const A={};E&1&&(A.$$scope={dirty:E,ctx:I}),c.$set(A)},i(I){b||(H(n.$$.fragment,I),H(c.$$.fragment,I),b=!0)},o(I){P(n.$$.fragment,I),P(c.$$.fragment,I),b=!1},d(I){I&&(a(e),a(s),a(t)),q(n),q(c)}}}function _n(_){let e,o="Récapitulatif",s,t,p='<thead><tr><th class="p-3">Relation</th> <th class="p-3">Question</th> <th class="p-3">Implémentation</th> <th class="p-3">UML</th></tr></thead> <tbody><tr class="fragment"><td class="p-3 text-important">Héritage</td> <td class="p-3">&quot;X est un Y&quot;</td> <td class="p-3"><code>extends</code></td> <td class="p-3">Flèche △</td></tr> <tr class="fragment"><td class="p-3 text-important">Composition</td> <td class="p-3">&quot;X a un Y&quot; (possède)</td> <td class="p-3">Attribut (créé)</td> <td class="p-3">Losange ◆</td></tr> <tr class="fragment"><td class="p-3 text-important">Agrégation</td> <td class="p-3">&quot;X a un Y&quot; (référence)</td> <td class="p-3">Attribut (reçu)</td> <td class="p-3">Losange ◇</td></tr></tbody>',i,u,m=`Gardez ce tableau en tête. C'est la base de toute modélisation objet. En UML, on utilise ces
			symboles. En entretien, on vous demandera de dessiner ces diagrammes. Prochaine étape : les
			interfaces, pour aller encore plus loin dans l'abstraction.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("table"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-ri7iuh"&&(e.textContent=o),s=d(n),t=C(n,"TABLE",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-9czqcv"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1hwoc6u"&&(u.textContent=m),this.h()},h(){w(t,"class","text-xl"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function Cn(_){let e,o="La composition",s,t,p,i,u,m,n,$,x,l,f,L,c,b,I,E,O,A,D,B,V,K,ie,j,se,_e,be,he,Pe,xe,we,ge,qe;return t=new z({props:{$$slots:{default:[Gl]},$$scope:{ctx:_}}}),i=new z({props:{$$slots:{default:[Ql]},$$scope:{ctx:_}}}),m=new z({props:{$$slots:{default:[Kl]},$$scope:{ctx:_}}}),$=new z({props:{$$slots:{default:[Wl]},$$scope:{ctx:_}}}),l=new z({props:{$$slots:{default:[Yl]},$$scope:{ctx:_}}}),L=new z({props:{$$slots:{default:[yl]},$$scope:{ctx:_}}}),b=new z({props:{$$slots:{default:[tn]},$$scope:{ctx:_}}}),E=new z({props:{data_background_color:"#1a1a2e",$$slots:{default:[sn]},$$scope:{ctx:_}}}),A=new z({props:{$$slots:{default:[ln]},$$scope:{ctx:_}}}),B=new z({props:{$$slots:{default:[an]},$$scope:{ctx:_}}}),K=new z({props:{$$slots:{default:[on]},$$scope:{ctx:_}}}),j=new z({props:{$$slots:{default:[fn]},$$scope:{ctx:_}}}),_e=new z({props:{$$slots:{default:[cn]},$$scope:{ctx:_}}}),he=new z({props:{$$slots:{default:[mn]},$$scope:{ctx:_}}}),xe=new z({props:{$$slots:{default:[xn]},$$scope:{ctx:_}}}),ge=new z({props:{$$slots:{default:[_n]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),T(i.$$.fragment),u=v(),T(m.$$.fragment),n=v(),T($.$$.fragment),x=v(),T(l.$$.fragment),f=v(),T(L.$$.fragment),c=v(),T(b.$$.fragment),I=v(),T(E.$$.fragment),O=v(),T(A.$$.fragment),D=v(),T(B.$$.fragment),V=v(),T(K.$$.fragment),ie=v(),T(j.$$.fragment),se=v(),T(_e.$$.fragment),be=v(),T(he.$$.fragment),Pe=v(),T(xe.$$.fragment),we=v(),T(ge.$$.fragment)},l(ee){e=C(ee,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1dl0775"&&(e.textContent=o),s=d(ee),M(t.$$.fragment,ee),p=d(ee),M(i.$$.fragment,ee),u=d(ee),M(m.$$.fragment,ee),n=d(ee),M($.$$.fragment,ee),x=d(ee),M(l.$$.fragment,ee),f=d(ee),M(L.$$.fragment,ee),c=d(ee),M(b.$$.fragment,ee),I=d(ee),M(E.$$.fragment,ee),O=d(ee),M(A.$$.fragment,ee),D=d(ee),M(B.$$.fragment,ee),V=d(ee),M(K.$$.fragment,ee),ie=d(ee),M(j.$$.fragment,ee),se=d(ee),M(_e.$$.fragment,ee),be=d(ee),M(he.$$.fragment,ee),Pe=d(ee),M(xe.$$.fragment,ee),we=d(ee),M(ge.$$.fragment,ee)},m(ee,me){r(ee,e,me),r(ee,s,me),S(t,ee,me),r(ee,p,me),S(i,ee,me),r(ee,u,me),S(m,ee,me),r(ee,n,me),S($,ee,me),r(ee,x,me),S(l,ee,me),r(ee,f,me),S(L,ee,me),r(ee,c,me),S(b,ee,me),r(ee,I,me),S(E,ee,me),r(ee,O,me),S(A,ee,me),r(ee,D,me),S(B,ee,me),r(ee,V,me),S(K,ee,me),r(ee,ie,me),S(j,ee,me),r(ee,se,me),S(_e,ee,me),r(ee,be,me),S(he,ee,me),r(ee,Pe,me),S(xe,ee,me),r(ee,we,me),S(ge,ee,me),qe=!0},p(ee,me){const te={};me&1&&(te.$$scope={dirty:me,ctx:ee}),t.$set(te);const ve={};me&1&&(ve.$$scope={dirty:me,ctx:ee}),i.$set(ve);const le={};me&1&&(le.$$scope={dirty:me,ctx:ee}),m.$set(le);const de={};me&1&&(de.$$scope={dirty:me,ctx:ee}),$.$set(de);const He={};me&1&&(He.$$scope={dirty:me,ctx:ee}),l.$set(He);const Ee={};me&1&&(Ee.$$scope={dirty:me,ctx:ee}),L.$set(Ee);const Se={};me&1&&(Se.$$scope={dirty:me,ctx:ee}),b.$set(Se);const Ae={};me&1&&(Ae.$$scope={dirty:me,ctx:ee}),E.$set(Ae);const y={};me&1&&(y.$$scope={dirty:me,ctx:ee}),A.$set(y);const pe={};me&1&&(pe.$$scope={dirty:me,ctx:ee}),B.$set(pe);const Y={};me&1&&(Y.$$scope={dirty:me,ctx:ee}),K.$set(Y);const ce={};me&1&&(ce.$$scope={dirty:me,ctx:ee}),j.$set(ce);const Me={};me&1&&(Me.$$scope={dirty:me,ctx:ee}),_e.$set(Me);const Ie={};me&1&&(Ie.$$scope={dirty:me,ctx:ee}),he.$set(Ie);const Te={};me&1&&(Te.$$scope={dirty:me,ctx:ee}),xe.$set(Te);const De={};me&1&&(De.$$scope={dirty:me,ctx:ee}),ge.$set(De)},i(ee){qe||(H(t.$$.fragment,ee),H(i.$$.fragment,ee),H(m.$$.fragment,ee),H($.$$.fragment,ee),H(l.$$.fragment,ee),H(L.$$.fragment,ee),H(b.$$.fragment,ee),H(E.$$.fragment,ee),H(A.$$.fragment,ee),H(B.$$.fragment,ee),H(K.$$.fragment,ee),H(j.$$.fragment,ee),H(_e.$$.fragment,ee),H(he.$$.fragment,ee),H(xe.$$.fragment,ee),H(ge.$$.fragment,ee),qe=!0)},o(ee){P(t.$$.fragment,ee),P(i.$$.fragment,ee),P(m.$$.fragment,ee),P($.$$.fragment,ee),P(l.$$.fragment,ee),P(L.$$.fragment,ee),P(b.$$.fragment,ee),P(E.$$.fragment,ee),P(A.$$.fragment,ee),P(B.$$.fragment,ee),P(K.$$.fragment,ee),P(j.$$.fragment,ee),P(_e.$$.fragment,ee),P(he.$$.fragment,ee),P(xe.$$.fragment,ee),P(ge.$$.fragment,ee),qe=!1},d(ee){ee&&(a(e),a(s),a(p),a(u),a(n),a(x),a(f),a(c),a(I),a(O),a(D),a(V),a(ie),a(se),a(be),a(Pe),a(we)),q(t,ee),q(i,ee),q(m,ee),q($,ee),q(l,ee),q(L,ee),q(b,ee),q(E,ee),q(A,ee),q(B,ee),q(K,ee),q(j,ee),q(_e,ee),q(he,ee),q(xe,ee),q(ge,ee)}}}function gn(_){let e,o;return e=new z({props:{$$slots:{default:[Cn]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const p={};t&1&&(p.$$scope={dirty:t,ctx:s}),e.$set(p)},i(s){o||(H(e.$$.fragment,s),o=!0)},o(s){P(e.$$.fragment,s),o=!1},d(s){q(e,s)}}}class hn extends Xe{constructor(e){super(),Ye(this,e,null,gn,We,{})}}function bn(_){let e=`
                abstract class Animal {}
                abstract class AnimalVolant extends Animal {}
                abstract class AnimalNageur extends Animal {}
                class Canard extends AnimalVolant, AnimalNageur {}
            `,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Ln(_){let e,o="L'héritage multiple",s,t,p="Comment hériter de deux classes ?",i,u,m,n,$=`En Java, ce n&#39;est pas possible !
			<br/> En revanche, on peut utiliser une interface pour simuler l&#39;héritage multiple.`,x,l,f=`L'héritage multiple existe en C++, mais ça crée le fameux "problème du diamant" : si deux
			parents ont la même méthode, laquelle appeler ? Java a choisi d'interdire l'héritage multiple
			de classes pour éviter ces ambiguïtés. Le canard est l'exemple parfait : il vole ET il nage.
			Comment modéliser ça sans héritage multiple ?`,L;return u=new Ke({props:{$$slots:{default:[bn]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),T(u.$$.fragment),m=v(),n=g("p"),n.innerHTML=$,x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-lz4bxy"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1py5itu"&&(t.textContent=p),i=d(c),M(u.$$.fragment,c),m=d(c),n=C(c,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-mtdftf"&&(n.innerHTML=$),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-11kv8kj"&&(l.textContent=f),this.h()},h(){w(n,"class","fragment"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),S(u,c,b),r(c,m,b),r(c,n,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),u.$set(I)},i(c){L||(H(u.$$.fragment,c),L=!0)},o(c){P(u.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(n),a(x),a(l)),q(u,c)}}}function wn(_){let e,o;return e=new z({props:{$$slots:{default:[Ln]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,t){const p={};t&1&&(p.$$scope={dirty:t,ctx:s}),e.$set(p)},i(s){o||(H(e.$$.fragment,s),o=!0)},o(s){P(e.$$.fragment,s),o=!1},d(s){q(e,s)}}}function qn(_){let e=`
    
    public interface ArticleLouable {
      float reserver(Date from, Date to); 
      float rendre(int penalite);    
    }
        `,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Pn(_){let e,o=`Une interface est un type de référence similaire à une classe abstraite qui ne contient que
			des méthodes abstraites.`,s,t,p=`Une interface n'a pas de code "par défaut", seulement des signatures de méthodes.`,i,u,m,n,$=`Une interface, c'est un "contrat". Elle dit : "Toute classe qui m'implémente DOIT avoir ces
			méthodes." C'est le niveau d'abstraction le plus élevé en Java. Aucune implémentation, juste
			des promesses. Depuis Java 8, on peut avoir des méthodes "default" avec du code, mais c'est
			l'exception, pas la règle.`,x;return u=new Z({props:{$$slots:{default:[qn]},$$scope:{ctx:_}}}),{c(){e=g("p"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),T(u.$$.fragment),m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"P",{"data-svelte-h":!0}),h(e)!=="svelte-zve5wp"&&(e.textContent=o),s=d(l),t=C(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1phkx1u"&&(t.textContent=p),i=d(l),M(u.$$.fragment,l),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-18c88ea"&&(n.textContent=$),this.h()},h(){w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),S(u,l,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),u.$set(L)},i(l){x||(H(u.$$.fragment,l),x=!0)},o(l){P(u.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(t),a(i),a(m),a(n)),q(u,l)}}}function Hn(_){let e,o="Implémentation d’une interface",s,t,p=`Une classe signale les interfaces qu’elle implémente grâce au mot-clé <code>implements</code>.
			Une classe concrète doit fournir une implémentation pour toutes les méthodes d’une interface,
			soit dans sa déclaration, soit parce qu’elle en hérite.`,i,u,m=`C'est la différence clé avec l'héritage : on "extends" une classe, on "implements" une
			interface. Et surtout : on peut implémenter PLUSIEURS interfaces, contrairement à l'héritage.
			Si vous oubliez d'implémenter une méthode, le compilateur vous le dira.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-6vv8ym"&&(e.textContent=o),s=d(n),t=C(n,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1vu2bky"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-sn5kmm"&&(u.textContent=m),this.h()},h(){w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function Sn(_){let e=`
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
    `,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Mn(_){let e,o="Implémentation d’une interface",s,t,p,i,u=`Notez qu'on peut combiner extends ET implements. SiegeAuto hérite d'Accessoire ET implémente
			ArticleLouable. C'est très courant en pratique. Une classe a souvent une hiérarchie ET des
			capacités additionnelles. L'ordre est important : extends AVANT implements !`,m;return t=new Z({props:{className:"h-[70vh]",$$slots:{default:[Sn]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("aside"),i.textContent=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-6vv8ym"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-qpvial"&&(i.textContent=u),this.h()},h(){w(i,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function Tn(_){let e,o="Implémentation d’une interface",s,t,p=`Une interface permet de mutualiser une implémentation entre des classes qui n’ont pas de lien
			d’héritage.<br/>
			Si une classe implémente une interface, ses classes dérivées héritent de cette implémentation, mais
			il est toutefois possible de la surcharger.`,i,u,m=`C'est là toute la puissance des interfaces. Un Avion et un Oiseau n'ont rien en commun... sauf
			qu'ils volent. Avec une interface Volant, on peut les traiter de la même façon pour tout ce
			qui concerne le vol. C'est le principe de "programmation par contrat" : on programme contre
			une interface, pas une implémentation.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-6vv8ym"&&(e.textContent=o),s=d(n),t=C(n,"P",{"data-svelte-h":!0}),h(t)!=="svelte-cgrkq0"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1g9blqi"&&(u.textContent=m),this.h()},h(){w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function En(_){let e,o="Comment choisir entre une classe abstraite et une interface ?",s,t,p=`<li><b>Classe abstraite</b> : Si, fondamentalement, on peut dire &quot;Un Dauphin est un Animal&quot;,
				alors, vous <i>pouvez</i> utiliser une classe abstraite.<br/></li> <li><b>Interface</b> : S&#39;il est plus juste de dire &quot;Un Dauphin peut nager&quot;, alors vous
				<i>devriez</i>
				utiliser une interface.
				<ul><li>Si quelque chose qui n&#39;aurait rien à voir avec vos animaux pouvait nager, utilisez une
						interface.<br/>
						Par exemple, un avion et un oiseau peuvent voler, mais ils n&#39;ont rien à voir l&#39;un avec l&#39;autre.</li> <li>Sinon, prévoyez plutôt une interface si vous pensez qu&#39;une classe fille pourrait avoir
						besoin d&#39;hériter de plusieurs classes.</li></ul></li>`,i,u,m=`C'est LA question qu'on vous posera en entretien d'embauche ! Retenez bien cette règle. "Est
			un" → classe abstraite (relation d'identité) "Peut faire" → interface (capacité) Dans le
			doute, préférez l'interface. C'est plus flexible et ça suit le principe de composition over
			inheritance.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-95djsx"&&(e.textContent=o),s=d(n),t=C(n,"UL",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1bl7mxh"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-8pa8gb"&&(u.textContent=m),this.h()},h(){w(t,"class","text-4xl"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function An(_){let e=`
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
        `,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function In(_){let e=`
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

                `,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Dn(_){let e,o="Comment choisir entre une classe abstraite et une interface ?",s,t,p,i,u,m,n,$=`À gauche avec les interfaces : propre, flexible. À droite sans : explosion combinatoire de classes.
			C'est le fameux problème "Mammifère qui nage ET qui pond" → impossible sans interface.
			En pratique, les interfaces résolvent 90% des problèmes de modélisation complexe.`,x;return p=new Ke({props:{$$slots:{default:[An]},$$scope:{ctx:_}}}),u=new Ke({props:{$$slots:{default:[In]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),T(p.$$.fragment),i=v(),T(u.$$.fragment),m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-95djsx"&&(e.textContent=o),s=d(l),t=C(l,"DIV",{class:!0});var f=Le(t);M(p.$$.fragment,f),i=d(f),M(u.$$.fragment,f),f.forEach(a),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-kyimvk"&&(n.textContent=$),this.h()},h(){w(t,"class","flex flex-row justify-center items-center"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),S(p,t,null),ne(t,i),S(u,t,null),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),p.$set(L);const c={};f&1&&(c.$$scope={dirty:f,ctx:l}),u.$set(c)},i(l){x||(H(p.$$.fragment,l),H(u.$$.fragment,l),x=!0)},o(l){P(p.$$.fragment,l),P(u.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(t),a(m),a(n)),q(p),q(u)}}}function jn(_){let e=`
            public class BassinAquatique {
                public void faireNager(Nageur nageur) {
                    nageur.nager();
                    // Ici, qu'ils soient un humain, un dauphin ou un crocodile, 
                    // les instances de ces classes peuvent nager 
                    // peu importe que ce soit des mammifères ou des reptiles
                }
            }
            `,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function kn(_){let e,o="Préambule au polymorphisme",s,t,p=`Vos méthodes peuvent prendre en paramètre une interface, ce qui permet de passer n'importe
			quel objet qui l'implémente.`,i,u,m,n,$=`C'est ça la vraie puissance des interfaces ! Le code ne sait pas et n'a pas besoin de savoir
			ce qu'est un Nageur. Demain, vous ajoutez une classe Robot qui implémente Nageur → ça marche
			sans changer une ligne ! C'est le principe d'inversion de dépendance (le D de SOLID) :
			dépendez des abstractions, pas des implémentations.`,x;return u=new Z({props:{class:" highlighter language-java",$$slots:{default:[jn]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),T(u.$$.fragment),m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-mwdtiv"&&(e.textContent=o),s=d(l),t=C(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1xd6dcn"&&(t.textContent=p),i=d(l),M(u.$$.fragment,l),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1uux63m"&&(n.textContent=$),this.h()},h(){w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),S(u,l,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),u.$set(L)},i(l){x||(H(u.$$.fragment,l),x=!0)},o(l){P(u.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(t),a(i),a(m),a(n)),q(u,l)}}}function On(_){let e=`
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

            `,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function zn(_){let e,o="Héritage d’interface",s,t,p=`Une interface peut hériter d’une ou plusieurs autres interfaces. Dans ce cas, elle hérite de
			toutes les méthodes déclarées dans les interfaces parentes. Pour déclarer un héritage, on
			utilise le mot-clé <code>extends</code>.`,i,u,m;return u=new Z({props:{className:"highlighter language-java",$$slots:{default:[On]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment)},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-j0acen"&&(e.textContent=o),s=d(n),t=C(n,"P",{"data-svelte-h":!0}),h(t)!=="svelte-tpi5ka"&&(t.innerHTML=p),i=d(n),M(u.$$.fragment,n)},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),S(u,n,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),u.$set(x)},i(n){m||(H(u.$$.fragment,n),m=!0)},o(n){P(u.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(t),a(i)),q(u,n)}}}function Vn(_){let e=`
                interface Omnivore extends Herbivore, Carnivore {...}
                class Humain implements Omnivore {...}

                var bob = new Humain();
                if (bob instanceof Carnivore) {
                    System.out.println("bob mange de la viande");
                }
                if (bob instanceof Herbivore) {
                    System.out.println("bob mange des plantes");
                }
            `,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Rn(_){let e,o="Héritage d’interface",s,t,p=`Comme chaque interface introduit un nouveau type, il est possible de contrôler, grâce au
			mot-clé <code>instanceof</code>, qu’une variable, un paramètre ou un attribut est bien une
			instance compatible avec cette interface.`,i,u,m;return u=new Z({props:{className:"highlighter language-java",$$slots:{default:[Vn]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment)},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-j0acen"&&(e.textContent=o),s=d(n),t=C(n,"P",{"data-svelte-h":!0}),h(t)!=="svelte-6egy71"&&(t.innerHTML=p),i=d(n),M(u.$$.fragment,n)},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),S(u,n,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),u.$set(x)},i(n){m||(H(u.$$.fragment,n),m=!0)},o(n){P(u.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(t),a(i)),q(u,n)}}}function Un(_){let e=`
            interface IConfidential {}
            class DossierMedical implements IConfidential {}
            ...
            void logguerDansUnFichier(Object p) {
                if (p instanceof IConfidential) {
                    return; // On ne loggue pas les informations confidentielles
                }
            }
            `,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Jn(_){let e,o="Les interfaces marqueurs",s,t,p=`Une interface sans méthode est appelée une interface marqueur. <br/>
			Elle est utilisée pour étiqueter une classe.`,i,u,m="On les utilise ainsi",n,$,x,l,f=`Rappelez-vous, comme on peut implémenter plusieurs interfaces, n'importe quelle classe peut
			implémenter une interface marqueur.`,L,c,b=`Historiquement, Java utilisait beaucoup ça : Serializable, Cloneable sont des interfaces
			marqueurs du JDK. Aujourd'hui, on préfère les annotations (@Confidential) qui sont plus
			puissantes et flexibles. Mais le concept reste valide et vous le verrez dans du code legacy.`,I;return $=new Z({props:{className:"highlighter language-java",$$slots:{default:[Un]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("p"),u.textContent=m,n=v(),T($.$$.fragment),x=v(),l=g("p"),l.textContent=f,L=v(),c=g("aside"),c.textContent=b,this.h()},l(E){e=C(E,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-9j49lb"&&(e.textContent=o),s=d(E),t=C(E,"P",{"data-svelte-h":!0}),h(t)!=="svelte-tx7gvv"&&(t.innerHTML=p),i=d(E),u=C(E,"P",{"data-svelte-h":!0}),h(u)!=="svelte-1qt13hy"&&(u.textContent=m),n=d(E),M($.$$.fragment,E),x=d(E),l=C(E,"P",{"data-svelte-h":!0}),h(l)!=="svelte-7kxzjc"&&(l.textContent=f),L=d(E),c=C(E,"ASIDE",{class:!0,"data-svelte-h":!0}),h(c)!=="svelte-1rx16ok"&&(c.textContent=b),this.h()},h(){w(c,"class","notes")},m(E,O){r(E,e,O),r(E,s,O),r(E,t,O),r(E,i,O),r(E,u,O),r(E,n,O),S($,E,O),r(E,x,O),r(E,l,O),r(E,L,O),r(E,c,O),I=!0},p(E,O){const A={};O&1&&(A.$$scope={dirty:O,ctx:E}),$.$set(A)},i(E){I||(H($.$$.fragment,E),I=!0)},o(E){P($.$$.fragment,E),I=!1},d(E){E&&(a(e),a(s),a(t),a(i),a(u),a(n),a(x),a(l),a(L),a(c)),q($,E)}}}function Bn(_){let e,o="Conventions de nommage",s,t,p=`<li>Les interfaces sont nommées avec un nom qui commence par &quot;I&quot; suivi d&#39;un nom.</li> <li>Le nom est un adjectif ou un nom qui décrit un comportement.</li> <li>Exemple :
				<ul><li>IVolant</li> <li>IConfidentiel</li> <li><s>INageur</s></li> <li><s>Bateau</s></li> <li><s>Vitesse</s></li></ul></li>`,i,u,m=`Le préfixe "I" est une convention C#/Microsoft. En Java pur, on met souvent pas de préfixe.
			Mais dans beaucoup d'entreprises françaises, le "I" est la norme. Suivez la convention de
			votre équipe. Le JDK utilise des suffixes "-able" : Comparable, Serializable, Iterable. C'est
			aussi une bonne pratique.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1cx5ud7"&&(e.textContent=o),s=d(n),t=C(n,"UL",{"data-svelte-h":!0}),h(t)!=="svelte-7652xk"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1js4lj4"&&(u.textContent=m),this.h()},h(){w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function Nn(_){let e,o="Les interfaces",s,t,p,i,u,m,n,$,x,l,f,L,c,b,I,E,O,A,D,B,V,K,ie;return t=new z({props:{$$slots:{default:[Pn]},$$scope:{ctx:_}}}),i=new z({props:{$$slots:{default:[Hn]},$$scope:{ctx:_}}}),m=new z({props:{$$slots:{default:[Mn]},$$scope:{ctx:_}}}),$=new z({props:{$$slots:{default:[Tn]},$$scope:{ctx:_}}}),l=new z({props:{$$slots:{default:[En]},$$scope:{ctx:_}}}),L=new z({props:{$$slots:{default:[Dn]},$$scope:{ctx:_}}}),b=new z({props:{$$slots:{default:[kn]},$$scope:{ctx:_}}}),E=new z({props:{$$slots:{default:[zn]},$$scope:{ctx:_}}}),A=new z({props:{$$slots:{default:[Rn]},$$scope:{ctx:_}}}),B=new z({props:{$$slots:{default:[Jn]},$$scope:{ctx:_}}}),K=new z({props:{$$slots:{default:[Bn]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),T(i.$$.fragment),u=v(),T(m.$$.fragment),n=v(),T($.$$.fragment),x=v(),T(l.$$.fragment),f=v(),T(L.$$.fragment),c=v(),T(b.$$.fragment),I=v(),T(E.$$.fragment),O=v(),T(A.$$.fragment),D=v(),T(B.$$.fragment),V=v(),T(K.$$.fragment)},l(j){e=C(j,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-lczfm4"&&(e.textContent=o),s=d(j),M(t.$$.fragment,j),p=d(j),M(i.$$.fragment,j),u=d(j),M(m.$$.fragment,j),n=d(j),M($.$$.fragment,j),x=d(j),M(l.$$.fragment,j),f=d(j),M(L.$$.fragment,j),c=d(j),M(b.$$.fragment,j),I=d(j),M(E.$$.fragment,j),O=d(j),M(A.$$.fragment,j),D=d(j),M(B.$$.fragment,j),V=d(j),M(K.$$.fragment,j)},m(j,se){r(j,e,se),r(j,s,se),S(t,j,se),r(j,p,se),S(i,j,se),r(j,u,se),S(m,j,se),r(j,n,se),S($,j,se),r(j,x,se),S(l,j,se),r(j,f,se),S(L,j,se),r(j,c,se),S(b,j,se),r(j,I,se),S(E,j,se),r(j,O,se),S(A,j,se),r(j,D,se),S(B,j,se),r(j,V,se),S(K,j,se),ie=!0},p(j,se){const _e={};se&1&&(_e.$$scope={dirty:se,ctx:j}),t.$set(_e);const be={};se&1&&(be.$$scope={dirty:se,ctx:j}),i.$set(be);const he={};se&1&&(he.$$scope={dirty:se,ctx:j}),m.$set(he);const Pe={};se&1&&(Pe.$$scope={dirty:se,ctx:j}),$.$set(Pe);const xe={};se&1&&(xe.$$scope={dirty:se,ctx:j}),l.$set(xe);const we={};se&1&&(we.$$scope={dirty:se,ctx:j}),L.$set(we);const ge={};se&1&&(ge.$$scope={dirty:se,ctx:j}),b.$set(ge);const qe={};se&1&&(qe.$$scope={dirty:se,ctx:j}),E.$set(qe);const ee={};se&1&&(ee.$$scope={dirty:se,ctx:j}),A.$set(ee);const me={};se&1&&(me.$$scope={dirty:se,ctx:j}),B.$set(me);const te={};se&1&&(te.$$scope={dirty:se,ctx:j}),K.$set(te)},i(j){ie||(H(t.$$.fragment,j),H(i.$$.fragment,j),H(m.$$.fragment,j),H($.$$.fragment,j),H(l.$$.fragment,j),H(L.$$.fragment,j),H(b.$$.fragment,j),H(E.$$.fragment,j),H(A.$$.fragment,j),H(B.$$.fragment,j),H(K.$$.fragment,j),ie=!0)},o(j){P(t.$$.fragment,j),P(i.$$.fragment,j),P(m.$$.fragment,j),P($.$$.fragment,j),P(l.$$.fragment,j),P(L.$$.fragment,j),P(b.$$.fragment,j),P(E.$$.fragment,j),P(A.$$.fragment,j),P(B.$$.fragment,j),P(K.$$.fragment,j),ie=!1},d(j){j&&(a(e),a(s),a(p),a(u),a(n),a(x),a(f),a(c),a(I),a(O),a(D),a(V)),q(t,j),q(i,j),q(m,j),q($,j),q(l,j),q(L,j),q(b,j),q(E,j),q(A,j),q(B,j),q(K,j)}}}function Fn(_){let e,o,s,t;return e=new z({props:{$$slots:{default:[wn]},$$scope:{ctx:_}}}),s=new z({props:{$$slots:{default:[Nn]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment),o=v(),T(s.$$.fragment)},l(p){M(e.$$.fragment,p),o=d(p),M(s.$$.fragment,p)},m(p,i){S(e,p,i),r(p,o,i),S(s,p,i),t=!0},p(p,[i]){const u={};i&1&&(u.$$scope={dirty:i,ctx:p}),e.$set(u);const m={};i&1&&(m.$$scope={dirty:i,ctx:p}),s.$set(m)},i(p){t||(H(e.$$.fragment,p),H(s.$$.fragment,p),t=!0)},o(p){P(e.$$.fragment,p),P(s.$$.fragment,p),t=!1},d(p){p&&a(o),q(e,p),q(s,p)}}}class Gn extends Xe{constructor(e){super(),Ye(this,e,null,Fn,We,{})}}function Qn(_){let e,o=`L'encapsulation est un concept fondamental de la programmation orientée objet. Elle consiste à
			cacher les détails internes d'une classe et à ne fournir qu'une interface publique pour
			interagir avec cette classe.`,s,t,p=`L'encapsulation, c'est comme une voiture : vous appuyez sur l'accélérateur, vous n'avez pas
			besoin de savoir comment fonctionne le moteur. C'est un principe de "boîte noire" : on expose
			ce qu'il faut, on cache le reste. Historiquement, ce concept vient de la modularité en génie
			logiciel des années 70.`;return{c(){e=g("p"),e.textContent=o,s=v(),t=g("aside"),t.textContent=p,this.h()},l(i){e=C(i,"P",{"data-svelte-h":!0}),h(e)!=="svelte-1tljpvn"&&(e.textContent=o),s=d(i),t=C(i,"ASIDE",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1drycps"&&(t.textContent=p),this.h()},h(){w(t,"class","notes")},m(i,u){r(i,e,u),r(i,s,u),r(i,t,u)},p:k,d(i){i&&(a(e),a(s),a(t))}}}function Kn(_){let e,o=`L'encapsulation permet de protéger les données et de contrôler leur accès. Elle rend également
			le code plus modulaire et plus facile à maintenir.`,s,t,p=`En entreprise, c'est crucial. Imaginez une équipe de 20 développeurs : si tout le monde peut
			modifier n'importe quel attribut, c'est le chaos. L'encapsulation impose des "contrats" entre
			les développeurs. On définit ce qui peut être utilisé et comment. Anecdote : beaucoup de bugs
			critiques en production viennent de données modifiées "par accident" car non protégées.`;return{c(){e=g("p"),e.textContent=o,s=v(),t=g("aside"),t.textContent=p,this.h()},l(i){e=C(i,"P",{"data-svelte-h":!0}),h(e)!=="svelte-doneo5"&&(e.textContent=o),s=d(i),t=C(i,"ASIDE",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-niiwx"&&(t.textContent=p),this.h()},h(){w(t,"class","notes")},m(i,u){r(i,e,u),r(i,s,u),r(i,t,u)},p:k,d(i){i&&(a(e),a(s),a(t))}}}function Wn(_){let e,o=`Pour encapsuler des données, on utilise des modificateurs d'accès qui déterminent la
			visibilité des attributs et des méthodes d'une classe.`,s,t,p="<li><code>public</code> : accessible depuis n&#39;importe où</li> <li><code>private</code> : accessible uniquement depuis la classe elle-même</li> <li><code>protected</code> : accessible depuis la classe et ses sous-classes</li>",i,u,m=`Il existe aussi le niveau "package-private" (sans modificateur) : accessible uniquement dans
			le même package. En pratique, 90% du temps vous utiliserez private pour les attributs et
			public pour les méthodes d'interface. Le protected est surtout utile dans les
			bibliothèques/frameworks où on veut permettre l'extension par héritage.`;return{c(){e=g("p"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"P",{"data-svelte-h":!0}),h(e)!=="svelte-1dtmw8t"&&(e.textContent=o),s=d(n),t=C(n,"UL",{"data-svelte-h":!0}),h(t)!=="svelte-be97eu"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-wx1qlj"&&(u.textContent=m),this.h()},h(){w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function Xn(_){let e=`
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
    `,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Yn(_){let e,o="Voici un exemple d'encapsulation en Java :",s,t,p,i,u=`C'est le pattern classique JavaBean. Vous le verrez partout dans les frameworks Java (Spring,
			Hibernate...). Les IDE génèrent ces getters/setters automatiquement : clic droit → Generate →
			Getters and Setters. Important : même si c'est "juste" un getter/setter, passez par ces
			méthodes. Ça vous permettra d'ajouter de la logique plus tard.`,m;return t=new Z({props:{$$slots:{default:[Xn]},$$scope:{ctx:_}}}),{c(){e=g("p"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("aside"),i.textContent=u,this.h()},l(n){e=C(n,"P",{"data-svelte-h":!0}),h(e)!=="svelte-sf7cl9"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-19iwzui"&&(i.textContent=u),this.h()},h(){w(i,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function Zn(_){let e,o=`Dans cet exemple, les attributs <code>nom</code> et <code>age</code> sont privés et ne peuvent
			pas être accédés directement depuis l&#39;extérieur. On utilise des méthodes publiques,
			<code>getNom</code>, <code>setNom</code>, <code>getAge</code> et <code>setAge</code>, pour y
			accéder et les modifier.`,s,t,p=`Fondamentalement, <code>getNom</code> et <code>setNom</code> sont de simples méthodes, mais
			compte tenu de leur rôle, on les appelle des <i>accesseurs</i> et des <i>mutateurs</i>.`;return{c(){e=g("p"),e.innerHTML=o,s=v(),t=g("p"),t.innerHTML=p,this.h()},l(i){e=C(i,"P",{"data-svelte-h":!0}),h(e)!=="svelte-tuu3n3"&&(e.innerHTML=o),s=d(i),t=C(i,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-t116p3"&&(t.innerHTML=p),this.h()},h(){w(t,"class","text-important")},m(i,u){r(i,e,u),r(i,s,u),r(i,t,u)},p:k,d(i){i&&(a(e),a(s),a(t))}}}function yn(_){let e=`
    public void setAge(int age) {
        if (age >= 0) {
            this.age = age;
        }
    }
    `,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function ei(_){let e,o=`L&#39;encapsulation permet de contrôler l&#39;accès aux données et de s&#39;assurer qu&#39;elles sont
			manipulées de manière cohérente. Par exemple, on peut ajouter des vérifications dans les
			méthodes <code>set</code> pour s&#39;assurer que les valeurs sont valides.`,s,t,p,i,u=`En pratique, vous pouvez aller plus loin : lever une exception, logger l'erreur, notifier
			l'utilisateur... Ce pattern s'appelle "defensive programming" - on se protège des mauvaises
			utilisations. Dans les frameworks modernes, on utilise souvent des annotations de validation
			(@NotNull, @Min, @Max) au lieu de coder à la main.`,m;return t=new Z({props:{$$slots:{default:[yn]},$$scope:{ctx:_}}}),{c(){e=g("p"),e.innerHTML=o,s=v(),T(t.$$.fragment),p=v(),i=g("aside"),i.textContent=u,this.h()},l(n){e=C(n,"P",{"data-svelte-h":!0}),h(e)!=="svelte-1yoywng"&&(e.innerHTML=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-phtreb"&&(i.textContent=u),this.h()},h(){w(i,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function ti(_){let e,o=`L&#39;utilisation du modificateur <code>protected</code> permet aux classes dérivées d&#39;accéder aux attributs
			et méthodes de la classe parente. Cela est utile lorsque l&#39;on souhaite permettre à des sous-classes
			d&#39;utiliser ou de modifier des données tout en les protégeant de l&#39;accès direct extérieur.`,s,t,p=`Attention : protected ne veut pas dire "accessible seulement aux sous-classes". En Java,
			protected est aussi accessible depuis le même package ! C'est une subtilité souvent oubliée.
			Bonne pratique : préférez private + getter protected si vous voulez vraiment contrôler
			l'accès.`;return{c(){e=g("p"),e.innerHTML=o,s=v(),t=g("aside"),t.textContent=p,this.h()},l(i){e=C(i,"P",{"data-svelte-h":!0}),h(e)!=="svelte-1om2flv"&&(e.innerHTML=o),s=d(i),t=C(i,"ASIDE",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1l5eyve"&&(t.textContent=p),this.h()},h(){w(t,"class","notes")},m(i,u){r(i,e,u),r(i,s,u),r(i,t,u)},p:k,d(i){i&&(a(e),a(s),a(t))}}}function si(_){let e=`
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
    `,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function li(_){let e,o,s,t=`Dans cet exemple, l&#39;attribut <code>nom</code> est protégé, ce qui permet à la classe
			<code>Chien</code>
			d&#39;y accéder dans sa méthode <code>aboyer</code>.`,p;return e=new Z({props:{$$slots:{default:[si]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment),o=v(),s=g("p"),s.innerHTML=t},l(i){M(e.$$.fragment,i),o=d(i),s=C(i,"P",{"data-svelte-h":!0}),h(s)!=="svelte-pqjf38"&&(s.innerHTML=t)},m(i,u){S(e,i,u),r(i,o,u),r(i,s,u),p=!0},p(i,u){const m={};u&1&&(m.$$scope={dirty:u,ctx:i}),e.$set(m)},i(i){p||(H(e.$$.fragment,i),p=!0)},o(i){P(e.$$.fragment,i),p=!1},d(i){i&&(a(o),a(s)),q(e,i)}}}function ni(_){let e=`
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
    `,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function ii(_){let e,o=`Les attributs privés sont utilisés pour restreindre l'accès direct aux données sensibles ou
			critiques, garantissant ainsi que seules des méthodes contrôlées peuvent les modifier.`,s,t,p,i,u=`Dans cet exemple, le solde du compte est privé et ne peut être modifié que par les méthodes <code>deposer</code>
			et <code>retirer</code>, lesquelles effectuent des vérifications.`,m,n,$=`C'est l'exemple classique ! Imaginez si le solde était public : compte.solde = -1000000.
			Catastrophe. Dans la vraie vie, les banques ajoutent aussi : logging, audit trail,
			notifications, limites de retrait... L'encapsulation permet d'ajouter tout ça sans changer
			l'interface publique.`,x;return t=new Z({props:{$$slots:{default:[ni]},$$scope:{ctx:_}}}),{c(){e=g("p"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"P",{"data-svelte-h":!0}),h(e)!=="svelte-usm7ui"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-1hber6c"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-ey8qs8"&&(n.textContent=$),this.h()},h(){w(i,"class","smaller"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function ai(_){let e,o="Verbosité",s,t,p=`Le Java est parfois critiqué pour sa verbosité. En effet, le code Java peut sembler plus long
			et plus complexe que d'autres langages.`,i,u,m=`Vous devez écrire environ 7 lignes pour déclarer un simple attribut avec ses accesseurs et
			mutateurs.`,n,$,x=`C'est le principal reproche fait à Java. Python ou Kotlin font ça en 1 ligne. Mais Java 14+ a
			introduit les Records qui réduisent beaucoup ce boilerplate. Et les IDE modernes génèrent tout
			ça en 2 clics. En pratique, ce n'est plus vraiment un problème. Lombok est aussi très
			populaire : @Data génère tous les getters/setters automatiquement.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("p"),u.textContent=m,n=v(),$=g("aside"),$.textContent=x,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-11a3931"&&(e.textContent=o),s=d(l),t=C(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-eslzxf"&&(t.textContent=p),i=d(l),u=C(l,"P",{"data-svelte-h":!0}),h(u)!=="svelte-ishs47"&&(u.textContent=m),n=d(l),$=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-76j7no"&&($.textContent=x),this.h()},h(){w($,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,u,f),r(l,n,f),r(l,$,f)},p:k,d(l){l&&(a(e),a(s),a(t),a(i),a(u),a(n),a($))}}}function ri(_){let e=`
        // C#
        class Personne {
            public string Nom { get; }
            public int Age    { get; set; }
            public int Taille {
                get; 
                set => field = value; 
            }
        }
        `,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function ui(_){let e=`
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
                `,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function oi(_){let e,o="D'autres langages permettent de déclarer des accesseurs et mutateurs de manière plus concise :",s,t,p,i,u,m,n,$=`En Java, un IDE peut générer automatiquement ces méthodes. Cela peut sembler pénible, mais il
			faut le faire.`,x;return p=new Z({props:{$$slots:{default:[ri]},$$scope:{ctx:_}}}),u=new Z({props:{$$slots:{default:[ui]},$$scope:{ctx:_}}}),{c(){e=g("p"),e.textContent=o,s=v(),t=g("div"),T(p.$$.fragment),i=v(),T(u.$$.fragment),m=v(),n=g("p"),n.textContent=$,this.h()},l(l){e=C(l,"P",{"data-svelte-h":!0}),h(e)!=="svelte-v898e4"&&(e.textContent=o),s=d(l),t=C(l,"DIV",{class:!0});var f=Le(t);M(p.$$.fragment,f),i=d(f),M(u.$$.fragment,f),f.forEach(a),m=d(l),n=C(l,"P",{"data-svelte-h":!0}),h(n)!=="svelte-9ubtus"&&(n.textContent=$),this.h()},h(){w(t,"class","flex flex-row")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),S(p,t,null),ne(t,i),S(u,t,null),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),p.$set(L);const c={};f&1&&(c.$$scope={dirty:f,ctx:l}),u.$set(c)},i(l){x||(H(p.$$.fragment,l),H(u.$$.fragment,l),x=!0)},o(l){P(p.$$.fragment,l),P(u.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(t),a(m),a(n)),q(p),q(u)}}}function $i(_){let e=`
    public void setMobilePhoneNumber(String mobilePhoneNumber) {
        this.mobilePhoneNumber = mobilePhoneNumber;
        envoyerEmailPourPrevenirUtilisateurDeLaModification(email, mobilePhoneNumber);
    }
    `,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function fi(_){let e,o="Maintenance",s,t,p=`En encapsulant les données et en contrôlant leur accès, vous facilitez la maintenance de votre
			code. Imaginez que vous avez laissé un attribut public et que vous le modifiez dans 50
			endroits différents. Si vous souhaitez désormais enregistrer chaque modification, vous devrez
			intervenir à ces 50 endroits.`,i,u,m,n,$=`C'est le principe Open/Closed : ouvert à l'extension, fermé à la modification. Dans les gros
			projets, c'est vital. J'ai vu des équipes passer des semaines à refactorer du code parce qu'un
			attribut était public. Avec un setter, on ajoute la logique à UN endroit. C'est le Single
			Point of Change.`,x;return u=new Z({props:{$$slots:{default:[$i]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),T(u.$$.fragment),m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1ky5g9v"&&(e.textContent=o),s=d(l),t=C(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1qmbise"&&(t.textContent=p),i=d(l),M(u.$$.fragment,l),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-gfpvu8"&&(n.textContent=$),this.h()},h(){w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),S(u,l,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),u.$set(L)},i(l){x||(H(u.$$.fragment,l),x=!0)},o(l){P(u.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(t),a(i),a(m),a(n)),q(u,l)}}}function ci(_){let e,o="Et maintenant ?",s,t,p="Vers la généralisation et l'héritage";return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,this.h()},l(i){e=C(i,"H2",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-1m9nj2p"&&(e.textContent=o),s=d(i),t=C(i,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-b0r7rg"&&(t.textContent=p),this.h()},h(){w(e,"class","text-5xl"),w(t,"class","text-2xl text-gray-400")},m(i,u){r(i,e,u),r(i,s,u),r(i,t,u)},p:k,d(i){i&&(a(e),a(s),a(t))}}}function pi(_){let e=`
class CompteCourant {
    private String numero;
    private double solde;
    private String titulaire;
    
    void deposer(double m) {...}
    void retirer(double m) {...}
    void calculerInterets() {...}
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function mi(_){let e=`
class CompteEpargne {
    private String numero;
    private double solde;
    private String titulaire;
    
    void deposer(double m) {...}
    void retirer(double m) {...}
    void calculerInterets() {...}
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function di(_){let e,o="Le problème de la duplication",s,t,p="Imaginez que vous devez modéliser plusieurs types de comptes bancaires :",i,u,m,n,$,x,l,f="Beaucoup de code dupliqué !",L;return m=new Z({props:{class:"language-java",$$slots:{default:[pi]},$$scope:{ctx:_}}}),$=new Z({props:{class:"language-java",$$slots:{default:[mi]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("div"),T(m.$$.fragment),n=v(),T($.$$.fragment),x=v(),l=g("p"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1121kts"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1k7fi1x"&&(t.textContent=p),i=d(c),u=C(c,"DIV",{class:!0});var b=Le(u);M(m.$$.fragment,b),n=d(b),M($.$$.fragment,b),b.forEach(a),x=d(c),l=C(c,"P",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-1s3d9iy"&&(l.textContent=f),this.h()},h(){w(u,"class","grid grid-cols-2 gap-4 mt-6"),w(l,"class","fragment text-red-400 mt-4 font-bold")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),r(c,u,b),S(m,u,null),ne(u,n),S($,u,null),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),m.$set(I);const E={};b&1&&(E.$$scope={dirty:b,ctx:c}),$.$set(E)},i(c){L||(H(m.$$.fragment,c),H($.$$.fragment,c),L=!0)},o(c){P(m.$$.fragment,c),P($.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(u),a(x),a(l)),q(m),q($)}}}function vi(_){let e,o="Généraliser les concepts",s,t,p='En observant les classes, on remarque des <span class="text-important">points communs</span> :',i,u,m='<li class="fragment">Tous les comptes ont un numéro, un solde, un titulaire</li> <li class="fragment">Tous peuvent déposer et retirer de l&#39;argent</li> <li class="fragment">Seul le calcul des intérêts diffère</li>',n,$,x=`💡 On peut extraire un concept <span class="text-important">plus général</span> :
			<code>CompteBancaire</code>`,l,f,L="C&#39;est la <b>généralisation</b> qui mène naturellement à l&#39;<b>héritage</b> !";return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("ul"),u.innerHTML=m,n=v(),$=g("p"),$.innerHTML=x,l=v(),f=g("p"),f.innerHTML=L,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-mkht2s"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-s94fqs"&&(t.innerHTML=p),i=d(c),u=C(c,"UL",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1txundk"&&(u.innerHTML=m),n=d(c),$=C(c,"P",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-mlbnsz"&&($.innerHTML=x),l=d(c),f=C(c,"P",{class:!0,"data-svelte-h":!0}),h(f)!=="svelte-1e3gzbu"&&(f.innerHTML=L),this.h()},h(){w(u,"class","text-xl mt-6"),w($,"class","fragment mt-8 text-accent-200 font-bold"),w(f,"class","fragment text-important")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),r(c,u,b),r(c,n,b),r(c,$,b),r(c,l,b),r(c,f,b)},p:k,d(c){c&&(a(e),a(s),a(t),a(i),a(u),a(n),a($),a(l),a(f))}}}function xi(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function _i(_){let e,o="Visualiser la généralisation",s,t,p,i,u=`Les éléments <span class="text-important">communs</span> sont dans la classe générale,<br/>
			les <span class="text-important">spécificités</span> dans les classes dérivées.`,m;return t=new Ke({props:{$$slots:{default:[xi]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-14isadv"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-lecgmk"&&(i.innerHTML=u),this.h()},h(){w(i,"class","fragment mt-4")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function Ci(_){let e,o="Récapitulatif",s,t,p='<p class="fragment">✅ L&#39;<span class="text-important">encapsulation</span> protège vos données</p> <p class="fragment mt-4">✅ La <span class="text-important">généralisation</span> évite la duplication</p> <p class="fragment mt-4">✅ L&#39;<span class="text-important">héritage</span> structure votre code</p>',i,u,m="🔮 Voyons maintenant comment implémenter cela en Java !";return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=p,i=v(),u=g("p"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-ri7iuh"&&(e.textContent=o),s=d(n),t=C(n,"DIV",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-126wtu4"&&(t.innerHTML=p),i=d(n),u=C(n,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-15gbfwm"&&(u.textContent=m),this.h()},h(){w(t,"class","text-xl"),w(u,"class","fragment mt-8 text-accent-200 text-2xl font-bold")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function gi(_){let e,o="Encapsulation",s,t,p,i,u,m,n,$,x,l,f,L,c,b,I,E,O,A,D,B,V,K,ie,j,se,_e,be,he,Pe,xe,we,ge,qe,ee,me;return t=new z({props:{$$slots:{default:[Qn]},$$scope:{ctx:_}}}),i=new z({props:{$$slots:{default:[Kn]},$$scope:{ctx:_}}}),m=new z({props:{$$slots:{default:[Wn]},$$scope:{ctx:_}}}),$=new z({props:{$$slots:{default:[Yn]},$$scope:{ctx:_}}}),l=new z({props:{$$slots:{default:[Zn]},$$scope:{ctx:_}}}),L=new z({props:{$$slots:{default:[ei]},$$scope:{ctx:_}}}),b=new z({props:{$$slots:{default:[ti]},$$scope:{ctx:_}}}),E=new z({props:{$$slots:{default:[li]},$$scope:{ctx:_}}}),A=new z({props:{$$slots:{default:[ii]},$$scope:{ctx:_}}}),B=new z({props:{data_background_color:"#00353F",$$slots:{default:[ai]},$$scope:{ctx:_}}}),K=new z({props:{data_background_color:"#00353F",$$slots:{default:[oi]},$$scope:{ctx:_}}}),j=new z({props:{$$slots:{default:[fi]},$$scope:{ctx:_}}}),_e=new z({props:{data_background_color:"#1a1a2e",$$slots:{default:[ci]},$$scope:{ctx:_}}}),he=new z({props:{$$slots:{default:[di]},$$scope:{ctx:_}}}),xe=new z({props:{$$slots:{default:[vi]},$$scope:{ctx:_}}}),ge=new z({props:{$$slots:{default:[_i]},$$scope:{ctx:_}}}),ee=new z({props:{$$slots:{default:[Ci]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),T(i.$$.fragment),u=v(),T(m.$$.fragment),n=v(),T($.$$.fragment),x=v(),T(l.$$.fragment),f=v(),T(L.$$.fragment),c=v(),T(b.$$.fragment),I=v(),T(E.$$.fragment),O=v(),T(A.$$.fragment),D=v(),T(B.$$.fragment),V=v(),T(K.$$.fragment),ie=v(),T(j.$$.fragment),se=v(),T(_e.$$.fragment),be=v(),T(he.$$.fragment),Pe=v(),T(xe.$$.fragment),we=v(),T(ge.$$.fragment),qe=v(),T(ee.$$.fragment)},l(te){e=C(te,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-d8x7o6"&&(e.textContent=o),s=d(te),M(t.$$.fragment,te),p=d(te),M(i.$$.fragment,te),u=d(te),M(m.$$.fragment,te),n=d(te),M($.$$.fragment,te),x=d(te),M(l.$$.fragment,te),f=d(te),M(L.$$.fragment,te),c=d(te),M(b.$$.fragment,te),I=d(te),M(E.$$.fragment,te),O=d(te),M(A.$$.fragment,te),D=d(te),M(B.$$.fragment,te),V=d(te),M(K.$$.fragment,te),ie=d(te),M(j.$$.fragment,te),se=d(te),M(_e.$$.fragment,te),be=d(te),M(he.$$.fragment,te),Pe=d(te),M(xe.$$.fragment,te),we=d(te),M(ge.$$.fragment,te),qe=d(te),M(ee.$$.fragment,te)},m(te,ve){r(te,e,ve),r(te,s,ve),S(t,te,ve),r(te,p,ve),S(i,te,ve),r(te,u,ve),S(m,te,ve),r(te,n,ve),S($,te,ve),r(te,x,ve),S(l,te,ve),r(te,f,ve),S(L,te,ve),r(te,c,ve),S(b,te,ve),r(te,I,ve),S(E,te,ve),r(te,O,ve),S(A,te,ve),r(te,D,ve),S(B,te,ve),r(te,V,ve),S(K,te,ve),r(te,ie,ve),S(j,te,ve),r(te,se,ve),S(_e,te,ve),r(te,be,ve),S(he,te,ve),r(te,Pe,ve),S(xe,te,ve),r(te,we,ve),S(ge,te,ve),r(te,qe,ve),S(ee,te,ve),me=!0},p(te,ve){const le={};ve&1&&(le.$$scope={dirty:ve,ctx:te}),t.$set(le);const de={};ve&1&&(de.$$scope={dirty:ve,ctx:te}),i.$set(de);const He={};ve&1&&(He.$$scope={dirty:ve,ctx:te}),m.$set(He);const Ee={};ve&1&&(Ee.$$scope={dirty:ve,ctx:te}),$.$set(Ee);const Se={};ve&1&&(Se.$$scope={dirty:ve,ctx:te}),l.$set(Se);const Ae={};ve&1&&(Ae.$$scope={dirty:ve,ctx:te}),L.$set(Ae);const y={};ve&1&&(y.$$scope={dirty:ve,ctx:te}),b.$set(y);const pe={};ve&1&&(pe.$$scope={dirty:ve,ctx:te}),E.$set(pe);const Y={};ve&1&&(Y.$$scope={dirty:ve,ctx:te}),A.$set(Y);const ce={};ve&1&&(ce.$$scope={dirty:ve,ctx:te}),B.$set(ce);const Me={};ve&1&&(Me.$$scope={dirty:ve,ctx:te}),K.$set(Me);const Ie={};ve&1&&(Ie.$$scope={dirty:ve,ctx:te}),j.$set(Ie);const Te={};ve&1&&(Te.$$scope={dirty:ve,ctx:te}),_e.$set(Te);const De={};ve&1&&(De.$$scope={dirty:ve,ctx:te}),he.$set(De);const X={};ve&1&&(X.$$scope={dirty:ve,ctx:te}),xe.$set(X);const fe={};ve&1&&(fe.$$scope={dirty:ve,ctx:te}),ge.$set(fe);const je={};ve&1&&(je.$$scope={dirty:ve,ctx:te}),ee.$set(je)},i(te){me||(H(t.$$.fragment,te),H(i.$$.fragment,te),H(m.$$.fragment,te),H($.$$.fragment,te),H(l.$$.fragment,te),H(L.$$.fragment,te),H(b.$$.fragment,te),H(E.$$.fragment,te),H(A.$$.fragment,te),H(B.$$.fragment,te),H(K.$$.fragment,te),H(j.$$.fragment,te),H(_e.$$.fragment,te),H(he.$$.fragment,te),H(xe.$$.fragment,te),H(ge.$$.fragment,te),H(ee.$$.fragment,te),me=!0)},o(te){P(t.$$.fragment,te),P(i.$$.fragment,te),P(m.$$.fragment,te),P($.$$.fragment,te),P(l.$$.fragment,te),P(L.$$.fragment,te),P(b.$$.fragment,te),P(E.$$.fragment,te),P(A.$$.fragment,te),P(B.$$.fragment,te),P(K.$$.fragment,te),P(j.$$.fragment,te),P(_e.$$.fragment,te),P(he.$$.fragment,te),P(xe.$$.fragment,te),P(ge.$$.fragment,te),P(ee.$$.fragment,te),me=!1},d(te){te&&(a(e),a(s),a(p),a(u),a(n),a(x),a(f),a(c),a(I),a(O),a(D),a(V),a(ie),a(se),a(be),a(Pe),a(we),a(qe)),q(t,te),q(i,te),q(m,te),q($,te),q(l,te),q(L,te),q(b,te),q(E,te),q(A,te),q(B,te),q(K,te),q(j,te),q(_e,te),q(he,te),q(xe,te),q(ge,te),q(ee,te)}}}function hi(_){let e,o;return e=new z({props:{$$slots:{default:[gi]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const p={};t&1&&(p.$$scope={dirty:t,ctx:s}),e.$set(p)},i(s){o||(H(e.$$.fragment,s),o=!0)},o(s){P(e.$$.fragment,s),o=!1},d(s){q(e,s)}}}class bi extends Xe{constructor(e){super(),Ye(this,e,null,hi,We,{})}}function Li(_){let e,o="Représenter le monde réel",s,t,p='La POO vise à <span class="text-important">modéliser des concepts du monde réel</span> dans notre code.',i,u,m='<div class="fragment"><h4 class="text-accent-200">🏢 En entreprise</h4> <ul class="text-xl"><li>Un <b>Client</b></li> <li>Une <b>Facture</b></li> <li>Une <b>Transaction</b></li> <li>Un <b>Produit</b></li></ul></div> <div class="fragment"><h4 class="text-accent-200">🎮 Dans un jeu</h4> <ul class="text-xl"><li>Un <b>Joueur</b></li> <li>Un <b>Ennemi</b></li> <li>Une <b>Arme</b></li> <li>Un <b>Niveau</b></li></ul></div>',n,$,x="Chaque concept devient une <b>classe</b>, chaque instance concrète devient un <b>objet</b>.",l,f,L=`La POO est née de ce besoin : les programmeurs voulaient modéliser le monde réel dans leurs programmes.\r
			Avant, on avait des structures de données et des fonctions séparées. Maintenant, tout est regroupé.\r
			C'est plus intuitif pour l'humain : on pense en termes d'objets, pas en termes de bits.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("div"),u.innerHTML=m,n=v(),$=g("p"),$.innerHTML=x,l=v(),f=g("aside"),f.textContent=L,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1nsqnl5"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-gu1hhe"&&(t.innerHTML=p),i=d(c),u=C(c,"DIV",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-ssqwsa"&&(u.innerHTML=m),n=d(c),$=C(c,"P",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-ys061m"&&($.innerHTML=x),l=d(c),f=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(f)!=="svelte-10ve9bx"&&(f.textContent=L),this.h()},h(){w(u,"class","grid grid-cols-2 gap-6 mt-8"),w($,"class","fragment mt-8 text-important font-bold"),w(f,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),r(c,u,b),r(c,n,b),r(c,$,b),r(c,l,b),r(c,f,b)},p:k,d(c){c&&(a(e),a(s),a(t),a(i),a(u),a(n),a($),a(l),a(f))}}}function wi(_){let e,o="Qu'est-ce qu'un objet ?",s,t,p='Un <span class="text-important">objet</span> est une entité qui regroupe :',i,u,m='<li class="fragment"><b>Des données</b> → les <span class="text-important">attributs</span></li> <li class="fragment"><b>Des comportements</b> → les <span class="text-important">méthodes</span></li>',n,$,x='Un objet est une <b>instance</b> d&#39;une <span class="text-important">classe</span>.',l,f,L=`La classe c'est le plan, l'objet c'est la maison construite à partir du plan.\r
			On peut construire plusieurs maisons à partir du même plan.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("ul"),u.innerHTML=m,n=v(),$=g("p"),$.innerHTML=x,l=v(),f=g("aside"),f.textContent=L,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1j2xnsl"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-ikoph5"&&(t.innerHTML=p),i=d(c),u=C(c,"UL",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-urcwzy"&&(u.innerHTML=m),n=d(c),$=C(c,"P",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-126jdov"&&($.innerHTML=x),l=d(c),f=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(f)!=="svelte-1j9siwx"&&(f.textContent=L),this.h()},h(){w(u,"class","mt-4"),w($,"class","fragment mt-6"),w(f,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),r(c,u,b),r(c,n,b),r(c,$,b),r(c,l,b),r(c,f,b)},p:k,d(c){c&&(a(e),a(s),a(t),a(i),a(u),a(n),a($),a(l),a(f))}}}function qi(_){let e=`
class Client {
    // Attributs (données)
    String nom;
    String email;
    List<Commande> commandes;
    
    // Méthodes (comportements)
    void passerCommande() {...}
    void consulterFactures() {...}
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Pi(_){let e,o="Exemple concret : un Client",s,t,p,i='<h4 class="text-accent-200">Dans le monde réel</h4> <ul class="text-xl"><li>Nom, prénom</li> <li>Email, téléphone</li> <li>Historique d&#39;achats</li> <li>Peut passer commande</li> <li>Peut consulter ses factures</li></ul>',u,m,n,$="En POO",x,l,f,L,c="💡 La classe modélise le <b>concept</b>, l&#39;objet représente une <b>instance concrète</b>.",b,I,E=`C'est un mapping 1:1 entre le métier et le code. Les analystes parlent de Client, les développeurs codent Client.\r
			C'est là toute la puissance de la POO : on parle le même langage que le métier.\r
			C'est la base du Domain-Driven Design (DDD) qu'on voit dans les entreprises modernes.`,O;return l=new Z({props:{$$slots:{default:[qi]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),p=g("div"),p.innerHTML=i,u=v(),m=g("div"),n=g("h4"),n.textContent=$,x=v(),T(l.$$.fragment),f=v(),L=g("p"),L.innerHTML=c,b=v(),I=g("aside"),I.textContent=E,this.h()},l(A){e=C(A,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-19m1xis"&&(e.textContent=o),s=d(A),t=C(A,"DIV",{class:!0});var D=Le(t);p=C(D,"DIV",{class:!0,"data-svelte-h":!0}),h(p)!=="svelte-b6jw6w"&&(p.innerHTML=i),u=d(D),m=C(D,"DIV",{class:!0});var B=Le(m);n=C(B,"H4",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-zddvi7"&&(n.textContent=$),x=d(B),M(l.$$.fragment,B),B.forEach(a),D.forEach(a),f=d(A),L=C(A,"P",{class:!0,"data-svelte-h":!0}),h(L)!=="svelte-1afjqzm"&&(L.innerHTML=c),b=d(A),I=C(A,"ASIDE",{class:!0,"data-svelte-h":!0}),h(I)!=="svelte-1lbuzzl"&&(I.textContent=E),this.h()},h(){w(p,"class","flex-1"),w(n,"class","text-accent-200"),w(m,"class","flex-1 fragment"),w(t,"class","flex flex-row gap-8 items-center"),w(L,"class","fragment mt-6 text-important"),w(I,"class","notes")},m(A,D){r(A,e,D),r(A,s,D),r(A,t,D),ne(t,p),ne(t,u),ne(t,m),ne(m,n),ne(m,x),S(l,m,null),r(A,f,D),r(A,L,D),r(A,b,D),r(A,I,D),O=!0},p(A,D){const B={};D&1&&(B.$$scope={dirty:D,ctx:A}),l.$set(B)},i(A){O||(H(l.$$.fragment,A),O=!0)},o(A){P(l.$$.fragment,A),O=!1},d(A){A&&(a(e),a(s),a(t),a(f),a(L),a(b),a(I)),q(l)}}}function Hi(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Si(_){let e,o="Classe vs Objet",s,t,p='<div class="p-4 bg-accent-950 rounded-lg"><h4 class="text-important">📐 Classe</h4> <p class="text-xl mt-2">Le <b>plan</b>, le modèle</p> <p class="text-sm text-gray-400 mt-2">Définit les attributs et méthodes</p></div> <div class="p-4 bg-accent-950 rounded-lg"><h4 class="text-important">🏠 Objet</h4> <p class="text-xl mt-2">L&#39;<b>instance</b>, la réalisation</p> <p class="text-sm text-gray-400 mt-2">Créé à partir de la classe</p></div>',i,u,m;return u=new Ke({props:{className:"mt-6 fragment",$$slots:{default:[Hi]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=p,i=v(),T(u.$$.fragment),this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-aj9wlo"&&(e.textContent=o),s=d(n),t=C(n,"DIV",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-17fw1f8"&&(t.innerHTML=p),i=d(n),M(u.$$.fragment,n),this.h()},h(){w(t,"class","grid grid-cols-2 gap-8 mt-6")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),S(u,n,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),u.$set(x)},i(n){m||(H(u.$$.fragment,n),m=!0)},o(n){P(u.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(t),a(i)),q(u,n)}}}function Mi(_){let e,o="Créer des objets",s,t,p="Le mot-clé new et les constructeurs",i,u,m=`Maintenant qu'on sait ce qu'est un objet, voyons comment en créer un.\r
			C'est la partie pratique : comment ça marche en mémoire, comment initialiser proprement.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H2",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-1mkb5o2"&&(e.textContent=o),s=d(n),t=C(n,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-4k1pcc"&&(t.textContent=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-q4shbn"&&(u.textContent=m),this.h()},h(){w(e,"class","text-5xl"),w(t,"class","text-2xl text-gray-400"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function Ti(_){let e=`
Personne jean = new Personne();
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Ei(_){let e,o="Créer un objet avec new",s,t,p='Pour créer un objet, on utilise le mot-clé <code class="text-important">new</code> suivi du nom de la classe.',i,u,m,n,$='<p>Que se passe-t-il ?</p> <ol class="text-xl"><li class="fragment">Java alloue de la mémoire pour l&#39;objet</li> <li class="fragment">Le <b>constructeur</b> de la classe est appelé</li> <li class="fragment">L&#39;objet est prêt à être utilisé</li></ol>',x,l,f=`En interne, Java alloue de la mémoire dans le "heap" (tas). La variable jean contient une référence vers cet espace.\r
			Contrairement au C, vous n'avez pas à gérer la mémoire vous-même. Le Garbage Collector s'en charge.\r
			Chaque fois que vous écrivez "new", vous créez un NOUVEL objet en mémoire.`,L;return u=new Z({props:{$$slots:{default:[Ti]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment),m=v(),n=g("div"),n.innerHTML=$,x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1b88vsb"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1d9k2wi"&&(t.innerHTML=p),i=d(c),M(u.$$.fragment,c),m=d(c),n=C(c,"DIV",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-u2udmp"&&(n.innerHTML=$),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-11eo1e6"&&(l.textContent=f),this.h()},h(){w(n,"class","fragment mt-6"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),S(u,c,b),r(c,m,b),r(c,n,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),u.$set(I)},i(c){L||(H(u.$$.fragment,c),L=!0)},o(c){P(u.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(n),a(x),a(l)),q(u,c)}}}function Ai(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Ii(_){let e,o="Le constructeur",s,t,p="Le constructeur est une <b>méthode spéciale</b> qui initialise l&#39;objet.",i,u,m,n,$=`Le constructeur a le même nom que la classe, et pas de type de retour.\r
			this fait référence à l'objet en cours de création.`,x;return u=new Z({props:{lines:"5-9|12",$$slots:{default:[Ai]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment),m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1mde0ng"&&(e.textContent=o),s=d(l),t=C(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-acm114"&&(t.innerHTML=p),i=d(l),M(u.$$.fragment,l),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-czfue9"&&(n.textContent=$),this.h()},h(){w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),S(u,l,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),u.$set(L)},i(l){x||(H(u.$$.fragment,l),x=!0)},o(l){P(u.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(t),a(i),a(m),a(n)),q(u,l)}}}function Di(_){let e=`
public Personne(String nom, String prenom, int age) {
    this.nom = nom;      // this.nom = attribut de l'objet
    this.prenom = prenom; // nom = paramètre du constructeur
    this.age = age;
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function ji(_){let e,o="Le mot-clé this",s,t,p='<code class="text-important">this</code> fait référence à l&#39;objet <b>courant</b>.',i,u,m,n,$="<code>this</code> permet de distinguer l&#39;attribut du paramètre quand ils ont le même nom.",x,l,f=`C'est une convention très courante : donner le même nom au paramètre et à l'attribut.\r
			Sans "this", le paramètre "cache" l'attribut (shadowing). this lève l'ambiguïté.\r
			Certains préfèrent préfixer les paramètres (pNom) ou les attributs (_nom). C'est une question de convention d'équipe.`,L;return u=new Z({props:{$$slots:{default:[Di]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment),m=v(),n=g("p"),n.innerHTML=$,x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-639qc6"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1d8cgp5"&&(t.innerHTML=p),i=d(c),M(u.$$.fragment,c),m=d(c),n=C(c,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-vxfnkp"&&(n.innerHTML=$),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-1sk7s1j"&&(l.textContent=f),this.h()},h(){w(n,"class","fragment mt-4 text-accent-200"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),S(u,c,b),r(c,m,b),r(c,n,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),u.$set(I)},i(c){L||(H(u.$$.fragment,c),L=!0)},o(c){P(u.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(n),a(x),a(l)),q(u,c)}}}function ki(_){let e=`
public class Personne {
    String nom;
    int age;
    // Pas de constructeur défini → constructeur par défaut
}

Personne p = new Personne();  // ✅ OK
p.nom = "Jean";               // On initialise après
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Oi(_){let e,o="Constructeur par défaut",s,t,p="Si vous ne définissez aucun constructeur, Java en crée un <b>par défaut</b> (sans paramètres).",i,u,m,n,$="⚠️ Dès que vous définissez un constructeur, le constructeur par défaut disparaît !",x,l,f=`C'est un piège classique ! Si vous définissez Personne(String nom), alors new Personne() ne compile plus.\r
			Solution : définir explicitement un constructeur sans paramètres si vous en avez besoin.\r
			Les frameworks (Hibernate, Spring) ont souvent besoin du constructeur par défaut pour l'instanciation dynamique.`,L;return u=new Z({props:{$$slots:{default:[ki]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment),m=v(),n=g("p"),n.textContent=$,x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-u9v1v7"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-m9el1s"&&(t.innerHTML=p),i=d(c),M(u.$$.fragment,c),m=d(c),n=C(c,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-108fh85"&&(n.textContent=$),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-1442ab0"&&(l.textContent=f),this.h()},h(){w(n,"class","fragment text-red-400 mt-4"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),S(u,c,b),r(c,m,b),r(c,n,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),u.$set(I)},i(c){L||(H(u.$$.fragment,c),L=!0)},o(c){P(u.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(n),a(x),a(l)),q(u,c)}}}function zi(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Vi(_){let e,o="Surcharge de constructeurs",s,t,p="Une classe peut avoir <b>plusieurs constructeurs</b> avec des paramètres différents.",i,u,m,n,$="<code>this(...)</code> permet d&#39;appeler un autre constructeur de la même classe.",x,l,f=`C'est le "constructor chaining". Très utile pour éviter la duplication de code.\r
			Le this() doit être la première instruction du constructeur, comme super().\r
			On voit souvent ça avec des valeurs par défaut : le constructeur simple appelle le complet.`,L;return u=new Z({props:{lines:"6-10|12-15",$$slots:{default:[zi]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment),m=v(),n=g("p"),n.innerHTML=$,x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1v37pf9"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1x1viiv"&&(t.innerHTML=p),i=d(c),M(u.$$.fragment,c),m=d(c),n=C(c,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-sqjnx"&&(n.innerHTML=$),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-1x33foq"&&(l.textContent=f),this.h()},h(){w(n,"class","fragment text-accent-200 mt-4"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),S(u,c,b),r(c,m,b),r(c,n,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),u.$set(I)},i(c){L||(H(u.$$.fragment,c),L=!0)},o(c){P(u.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(n),a(x),a(l)),q(u,c)}}}function Ri(_){let e,o="Les références en Java",s,t,p="Comprendre ce que contient vraiment une variable",i,u,m=`Avant de continuer, il faut comprendre un concept fondamental.\r
			En Java, les variables d'objets ne contiennent pas l'objet lui-même... mais une référence vers l'objet.\r
			C'est comme une adresse postale vs la maison elle-même.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H2",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-w9ik6f"&&(e.textContent=o),s=d(n),t=C(n,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-19x3pgb"&&(t.textContent=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-28inpz"&&(u.textContent=m),this.h()},h(){w(e,"class","text-5xl"),w(t,"class","text-2xl text-gray-400"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function Ui(_){let e=`
Personne jean = new Personne("Jean");
Personne copie = jean;  // copie la RÉFÉRENCE, pas l'objet !

copie.setAge(30);
System.out.println(jean.getAge());  // Affiche 30 ! 
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Ji(_){let e,o="Une variable = une référence",s,t,p="Quand vous écrivez <code>Personne jean = new Personne();</code>, que se passe-t-il ?",i,u,m='<div class="fragment"><h4 class="text-accent-200">📍 La variable</h4> <p class="text-xl">Contient une <b>adresse mémoire</b></p> <p class="text-sm text-gray-400">(comme un numéro de casier)</p></div> <div class="fragment"><h4 class="text-accent-200">📦 L&#39;objet</h4> <p class="text-xl">Stocké ailleurs en mémoire (le <b>heap</b>)</p> <p class="text-sm text-gray-400">(le contenu du casier)</p></div>',n,$,x,l,f=`C'est LE piège des débutants. Deux variables peuvent pointer vers le même objet.\r
			Modifier via une variable modifie l'objet, visible depuis l'autre variable.\r
			C'est différent des types primitifs (int, double) qui sont copiés par valeur.`,L;return $=new Z({props:{class:"fragment mt-6",$$slots:{default:[Ui]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("div"),u.innerHTML=m,n=v(),T($.$$.fragment),x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1cxx8q6"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1led4kt"&&(t.innerHTML=p),i=d(c),u=C(c,"DIV",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-6gkr7d"&&(u.innerHTML=m),n=d(c),M($.$$.fragment,c),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-d4bv15"&&(l.textContent=f),this.h()},h(){w(u,"class","grid grid-cols-2 gap-8 mt-6"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),r(c,u,b),r(c,n,b),S($,c,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),$.$set(I)},i(c){L||(H($.$$.fragment,c),L=!0)},o(c){P($.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(u),a(n),a(x),a(l)),q($,c)}}}function Bi(_){let e=`
Personne personne = null;  // Aucun objet référencé

// C'est souvent le cas quand :
Personne resultat = chercherParNom("Toto");  // Pas trouvé → null
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Ni(_){let e,o="La valeur spéciale : null",s,t,p='Une variable peut ne pointer vers <b>rien</b>. C&#39;est la valeur <code class="text-important">null</code>.',i,u,m,n,$="⚠️ <code>null</code> signifie &quot;absence d&#39;objet&quot;. Ce n&#39;est pas un objet vide !",x,l,f=`Null c'est "rien", pas "vide". Une liste vide existe (0 éléments), null n'existe pas du tout.\r
			C'est une distinction cruciale. Null = pas de référence. Vide = objet qui ne contient rien.`,L;return u=new Z({props:{$$slots:{default:[Bi]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment),m=v(),n=g("p"),n.innerHTML=$,x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-upq93p"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-2fjoo4"&&(t.innerHTML=p),i=d(c),M(u.$$.fragment,c),m=d(c),n=C(c,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-yi5ddp"&&(n.innerHTML=$),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-j2xogk"&&(l.textContent=f),this.h()},h(){w(n,"class","fragment mt-6 text-red-400 font-bold"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),S(u,c,b),r(c,m,b),r(c,n,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),u.$set(I)},i(c){L||(H(u.$$.fragment,c),L=!0)},o(c){P(u.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(n),a(x),a(l)),q(u,c)}}}function Fi(_){let e=`
Personne personne = null;
personne.getNom();  // ❌ NullPointerException !

// Le message d'erreur :
// Exception in thread "main" java.lang.NullPointerException:
// Cannot invoke "Personne.getNom()" because "personne" is null
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Gi(_){let e=`
if (personne != null) {
    System.out.println(personne.getNom());
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Qi(_){let e,o="Le bug le plus fréquent : NullPointerException",s,t,p="Si vous appelez une méthode sur <code>null</code>... 💥",i,u,m,n,$,x="✅ Toujours vérifier avant d'utiliser :",l,f,L,c,b=`C'est LE bug numéro 1 en Java. Tony Hoare, l'inventeur de null, l'a appelé "son erreur à un milliard de dollars".\r
			Vous verrez NullPointerException des centaines de fois dans votre carrière. Apprenez à le débugger !\r
			Le message vous dit quelle variable est null. Remontez le fil pour comprendre pourquoi.`,I;return u=new Z({props:{$$slots:{default:[Fi]},$$scope:{ctx:_}}}),f=new Z({props:{$$slots:{default:[Gi]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment),m=v(),n=g("div"),$=g("p"),$.textContent=x,l=v(),T(f.$$.fragment),L=v(),c=g("aside"),c.textContent=b,this.h()},l(E){e=C(E,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-v1skb"&&(e.textContent=o),s=d(E),t=C(E,"P",{"data-svelte-h":!0}),h(t)!=="svelte-rde3pg"&&(t.innerHTML=p),i=d(E),M(u.$$.fragment,E),m=d(E),n=C(E,"DIV",{class:!0});var O=Le(n);$=C(O,"P",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-10calxs"&&($.textContent=x),l=d(O),M(f.$$.fragment,O),O.forEach(a),L=d(E),c=C(E,"ASIDE",{class:!0,"data-svelte-h":!0}),h(c)!=="svelte-hug8y1"&&(c.textContent=b),this.h()},h(){w($,"class","text-green-400 font-bold"),w(n,"class","fragment mt-6"),w(c,"class","notes")},m(E,O){r(E,e,O),r(E,s,O),r(E,t,O),r(E,i,O),S(u,E,O),r(E,m,O),r(E,n,O),ne(n,$),ne(n,l),S(f,n,null),r(E,L,O),r(E,c,O),I=!0},p(E,O){const A={};O&1&&(A.$$scope={dirty:O,ctx:E}),u.$set(A);const D={};O&1&&(D.$$scope={dirty:O,ctx:E}),f.$set(D)},i(E){I||(H(u.$$.fragment,E),H(f.$$.fragment,E),I=!0)},o(E){P(u.$$.fragment,E),P(f.$$.fragment,E),I=!1},d(E){E&&(a(e),a(s),a(t),a(i),a(m),a(n),a(L),a(c)),q(u,E),q(f)}}}function Ki(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Wi(_){let e,o="Bonne pratique : programmation défensive",s,t,p,i,u="💡 En entreprise, beaucoup d&#39;erreurs viennent de <code>null</code> non géré.",m,n,$=`C'est la base de la "programmation défensive". Ne faites jamais confiance aux données entrantes.\r
			Les frameworks modernes (Spring) peuvent injecter @NonNull pour éviter ça.\r
			Depuis Java 8, on a Optional pour mieux gérer l'absence de valeur.`,x;return t=new Z({props:{$$slots:{default:[Ki]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1o2ciiy"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-i5ewro"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1elh71j"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4 text-accent-200"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function Xi(_){let e,o="Comparer des objets",s,t,p="== vs equals() : le piège classique",i,u,m=`Maintenant qu'on sait ce qu'est une référence, on peut comprendre un autre piège majeur.\r
			Comment comparer deux objets ? C'est plus subtil qu'il n'y paraît.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H2",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-14qtv6e"&&(e.textContent=o),s=d(n),t=C(n,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1plewz8"&&(t.textContent=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-5njids"&&(u.textContent=m),this.h()},h(){w(e,"class","text-5xl"),w(t,"class","text-2xl text-gray-400"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function Yi(_){let e=`
String a = new String("Bonjour");
String b = new String("Bonjour");

System.out.println(a == b);  // false ! 
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Zi(_){let e=`
@startuml
object "a" as a
object "b" as b
object "String: Bonjour" as s1
object "String: Bonjour" as s2

a --> s1 : référence
b --> s2 : référence
@enduml
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function yi(_){let e,o="Le piège de ==",s,t,p,i,u="<code>==</code> compare les <b>références</b> (les adresses mémoire), pas le contenu !",m,n,$,x,l=`a et b pointent vers deux objets différents en mémoire. Même si le contenu est identique, ce sont deux casiers différents.\r
			C'est le piège classique des débutants avec les String. "Bonjour" == "Bonjour" mais new String != new String.`,f;return t=new Z({props:{$$slots:{default:[Yi]},$$scope:{ctx:_}}}),n=new Ke({props:{className:"fragment",$$slots:{default:[Zi]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),T(n.$$.fragment),$=v(),x=g("aside"),x.textContent=l,this.h()},l(L){e=C(L,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-lc3ih1"&&(e.textContent=o),s=d(L),M(t.$$.fragment,L),p=d(L),i=C(L,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-czybt8"&&(i.innerHTML=u),m=d(L),M(n.$$.fragment,L),$=d(L),x=C(L,"ASIDE",{class:!0,"data-svelte-h":!0}),h(x)!=="svelte-2rsw1p"&&(x.textContent=l),this.h()},h(){w(i,"class","fragment mt-6"),w(x,"class","notes")},m(L,c){r(L,e,c),r(L,s,c),S(t,L,c),r(L,p,c),r(L,i,c),r(L,m,c),S(n,L,c),r(L,$,c),r(L,x,c),f=!0},p(L,c){const b={};c&1&&(b.$$scope={dirty:c,ctx:L}),t.$set(b);const I={};c&1&&(I.$$scope={dirty:c,ctx:L}),n.$set(I)},i(L){f||(H(t.$$.fragment,L),H(n.$$.fragment,L),f=!0)},o(L){P(t.$$.fragment,L),P(n.$$.fragment,L),f=!1},d(L){L&&(a(e),a(s),a(p),a(i),a(m),a($),a(x)),q(t,L),q(n,L)}}}function ea(_){let e=`
String a = new String("Bonjour");
String b = new String("Bonjour");

System.out.println(a.equals(b));  // true ✅
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function ta(_){let e,o="La solution : equals()",s,t,p='Pour comparer le <b>contenu</b> des objets, utilisez la méthode <code class="text-important">equals()</code>.',i,u,m,n,$='<div class="p-4 bg-red-900/30 rounded-lg"><h4 class="text-red-400">== (double égal)</h4> <p class="text-sm">Compare les <b>références</b></p> <p class="text-xs text-gray-400">&quot;Est-ce le même objet ?&quot;</p></div> <div class="p-4 bg-green-900/30 rounded-lg"><h4 class="text-green-400">equals()</h4> <p class="text-sm">Compare le <b>contenu</b></p> <p class="text-xs text-gray-400">&quot;Ont-ils la même valeur ?&quot;</p></div>',x,l,f=`C'est LA règle à retenir. Pour les objets, utilisez equals(). Pour les primitifs (int, double), utilisez ==.\r
			String, Integer, toutes les classes du JDK redéfinissent equals() pour comparer le contenu.`,L;return u=new Z({props:{$$slots:{default:[ea]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment),m=v(),n=g("div"),n.innerHTML=$,x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-15y6242"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-gx1ssy"&&(t.innerHTML=p),i=d(c),M(u.$$.fragment,c),m=d(c),n=C(c,"DIV",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1ccb8r3"&&(n.innerHTML=$),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-1lxylnx"&&(l.textContent=f),this.h()},h(){w(n,"class","fragment mt-6 grid grid-cols-2 gap-4"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),S(u,c,b),r(c,m,b),r(c,n,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),u.$set(I)},i(c){L||(H(u.$$.fragment,c),L=!0)},o(c){P(u.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(n),a(x),a(l)),q(u,c)}}}function sa(_){let e=`
String a = null;
String b = "Bonjour";

a.equals(b);  // ❌ NullPointerException !
b.equals(a);  // ✅ false (equals gère null)
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function la(_){let e=`
// Pattern sécurisé avec une constante
"admin".equals(username);  // ✅ Jamais de NPE
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function na(_){let e,o="⚠️ Attention à null avec equals()",s,t,p,i,u='💡 Astuce : mettez la valeur "sûre" (non-null) à gauche !',m,n,$,x,l=`C'est un pattern très courant. En mettant la constante à gauche, on évite le NPE.\r
			Depuis Java 7, on a aussi Objects.equals(a, b) qui gère null des deux côtés.`,f;return t=new Z({props:{$$slots:{default:[sa]},$$scope:{ctx:_}}}),n=new Z({props:{class:"fragment",$$slots:{default:[la]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.textContent=u,m=v(),T(n.$$.fragment),$=v(),x=g("aside"),x.textContent=l,this.h()},l(L){e=C(L,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-fvccpn"&&(e.textContent=o),s=d(L),M(t.$$.fragment,L),p=d(L),i=C(L,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-eaq14x"&&(i.textContent=u),m=d(L),M(n.$$.fragment,L),$=d(L),x=C(L,"ASIDE",{class:!0,"data-svelte-h":!0}),h(x)!=="svelte-1qgora1"&&(x.textContent=l),this.h()},h(){w(i,"class","fragment mt-6 text-accent-200 font-bold"),w(x,"class","notes")},m(L,c){r(L,e,c),r(L,s,c),S(t,L,c),r(L,p,c),r(L,i,c),r(L,m,c),S(n,L,c),r(L,$,c),r(L,x,c),f=!0},p(L,c){const b={};c&1&&(b.$$scope={dirty:c,ctx:L}),t.$set(b);const I={};c&1&&(I.$$scope={dirty:c,ctx:L}),n.$set(I)},i(L){f||(H(t.$$.fragment,L),H(n.$$.fragment,L),f=!0)},o(L){P(t.$$.fragment,L),P(n.$$.fragment,L),f=!1},d(L){L&&(a(e),a(s),a(p),a(i),a(m),a($),a(x)),q(t,L),q(n,L)}}}function ia(_){let e,o="Récapitulatif : comparaisons",s,t,p='<thead><tr><th class="p-3">Type</th> <th class="p-3">Opérateur</th> <th class="p-3">Exemple</th></tr></thead> <tbody><tr><td class="p-3">Primitifs (int, double...)</td> <td class="p-3"><code>==</code></td> <td class="p-3"><code>age == 25</code></td></tr> <tr><td class="p-3">Objets (contenu)</td> <td class="p-3"><code>equals()</code></td> <td class="p-3"><code>nom.equals(&quot;Jean&quot;)</code></td></tr> <tr><td class="p-3">Objets (même instance)</td> <td class="p-3"><code>==</code></td> <td class="p-3"><code>obj1 == obj2</code></td></tr> <tr><td class="p-3">Vérifier null</td> <td class="p-3"><code>==</code></td> <td class="p-3"><code>obj == null</code></td></tr></tbody>',i,u,m=`Retenez ce tableau ! Primitifs → ==. Objets contenu → equals(). Null check → ==.\r
			On verra plus tard comment redéfinir equals() pour vos propres classes.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("table"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1fu33u2"&&(e.textContent=o),s=d(n),t=C(n,"TABLE",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1wzfw0k"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-o2lw9f"&&(u.textContent=m),this.h()},h(){w(t,"class","text-xl"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function aa(_){let e,o="Récapitulatif",s,t,p='<div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">📐 Classes</h4> <ul class="text-sm mt-2"><li>Classe = plan</li> <li>Objet = instance</li> <li>Attributs + méthodes</li></ul></div> <div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">🏗️ Création</h4> <ul class="text-sm mt-2"><li><code>new</code> crée un objet</li> <li>Constructeur initialise</li> <li><code>this</code> = objet courant</li></ul></div> <div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">🔗 Références</h4> <ul class="text-sm mt-2"><li>Variable = référence</li> <li><code>null</code> = rien</li> <li><code>equals()</code> pour comparer</li></ul></div>',i,u,m="🔮 Maintenant, voyons comment <b>protéger</b> nos données avec l&#39;encapsulation !",n,$,x=`Voilà les bases. Classe = moule, objet = instance concrète. New = création, constructeur = initialisation.\r
			Les variables contiennent des références, null = pas d'objet, equals() pour comparer le contenu.\r
			On passe à l'encapsulation pour apprendre à protéger nos données.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=p,i=v(),u=g("p"),u.innerHTML=m,n=v(),$=g("aside"),$.textContent=x,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-ri7iuh"&&(e.textContent=o),s=d(l),t=C(l,"DIV",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1uwtkma"&&(t.innerHTML=p),i=d(l),u=C(l,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1msb34k"&&(u.innerHTML=m),n=d(l),$=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-1oez020"&&($.textContent=x),this.h()},h(){w(t,"class","grid grid-cols-3 gap-4 mt-6"),w(u,"class","fragment mt-8 text-accent-200 text-xl"),w($,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,u,f),r(l,n,f),r(l,$,f)},p:k,d(l){l&&(a(e),a(s),a(t),a(i),a(u),a(n),a($))}}}function ra(_){let e,o="Généralités sur la POO",s,t,p,i,u,m,n,$,x,l,f,L,c,b,I,E,O,A,D,B,V,K,ie,j,se,_e,be,he,Pe,xe,we,ge,qe,ee,me,te,ve,le,de,He,Ee,Se,Ae;return t=new z({props:{$$slots:{default:[Li]},$$scope:{ctx:_}}}),i=new z({props:{$$slots:{default:[wi]},$$scope:{ctx:_}}}),m=new z({props:{$$slots:{default:[Pi]},$$scope:{ctx:_}}}),$=new z({props:{$$slots:{default:[Si]},$$scope:{ctx:_}}}),l=new z({props:{data_background_color:"#1a1a2e",$$slots:{default:[Mi]},$$scope:{ctx:_}}}),L=new z({props:{$$slots:{default:[Ei]},$$scope:{ctx:_}}}),b=new z({props:{$$slots:{default:[Ii]},$$scope:{ctx:_}}}),E=new z({props:{$$slots:{default:[ji]},$$scope:{ctx:_}}}),A=new z({props:{$$slots:{default:[Oi]},$$scope:{ctx:_}}}),B=new z({props:{$$slots:{default:[Vi]},$$scope:{ctx:_}}}),K=new z({props:{data_background_color:"#1a1a2e",$$slots:{default:[Ri]},$$scope:{ctx:_}}}),j=new z({props:{$$slots:{default:[Ji]},$$scope:{ctx:_}}}),_e=new z({props:{$$slots:{default:[Ni]},$$scope:{ctx:_}}}),he=new z({props:{$$slots:{default:[Qi]},$$scope:{ctx:_}}}),xe=new z({props:{$$slots:{default:[Wi]},$$scope:{ctx:_}}}),ge=new z({props:{data_background_color:"#1a1a2e",$$slots:{default:[Xi]},$$scope:{ctx:_}}}),ee=new z({props:{$$slots:{default:[yi]},$$scope:{ctx:_}}}),te=new z({props:{$$slots:{default:[ta]},$$scope:{ctx:_}}}),le=new z({props:{$$slots:{default:[na]},$$scope:{ctx:_}}}),He=new z({props:{$$slots:{default:[ia]},$$scope:{ctx:_}}}),Se=new z({props:{$$slots:{default:[aa]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),T(i.$$.fragment),u=v(),T(m.$$.fragment),n=v(),T($.$$.fragment),x=v(),T(l.$$.fragment),f=v(),T(L.$$.fragment),c=v(),T(b.$$.fragment),I=v(),T(E.$$.fragment),O=v(),T(A.$$.fragment),D=v(),T(B.$$.fragment),V=v(),T(K.$$.fragment),ie=v(),T(j.$$.fragment),se=v(),T(_e.$$.fragment),be=v(),T(he.$$.fragment),Pe=v(),T(xe.$$.fragment),we=v(),T(ge.$$.fragment),qe=v(),T(ee.$$.fragment),me=v(),T(te.$$.fragment),ve=v(),T(le.$$.fragment),de=v(),T(He.$$.fragment),Ee=v(),T(Se.$$.fragment)},l(y){e=C(y,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-lsottk"&&(e.textContent=o),s=d(y),M(t.$$.fragment,y),p=d(y),M(i.$$.fragment,y),u=d(y),M(m.$$.fragment,y),n=d(y),M($.$$.fragment,y),x=d(y),M(l.$$.fragment,y),f=d(y),M(L.$$.fragment,y),c=d(y),M(b.$$.fragment,y),I=d(y),M(E.$$.fragment,y),O=d(y),M(A.$$.fragment,y),D=d(y),M(B.$$.fragment,y),V=d(y),M(K.$$.fragment,y),ie=d(y),M(j.$$.fragment,y),se=d(y),M(_e.$$.fragment,y),be=d(y),M(he.$$.fragment,y),Pe=d(y),M(xe.$$.fragment,y),we=d(y),M(ge.$$.fragment,y),qe=d(y),M(ee.$$.fragment,y),me=d(y),M(te.$$.fragment,y),ve=d(y),M(le.$$.fragment,y),de=d(y),M(He.$$.fragment,y),Ee=d(y),M(Se.$$.fragment,y)},m(y,pe){r(y,e,pe),r(y,s,pe),S(t,y,pe),r(y,p,pe),S(i,y,pe),r(y,u,pe),S(m,y,pe),r(y,n,pe),S($,y,pe),r(y,x,pe),S(l,y,pe),r(y,f,pe),S(L,y,pe),r(y,c,pe),S(b,y,pe),r(y,I,pe),S(E,y,pe),r(y,O,pe),S(A,y,pe),r(y,D,pe),S(B,y,pe),r(y,V,pe),S(K,y,pe),r(y,ie,pe),S(j,y,pe),r(y,se,pe),S(_e,y,pe),r(y,be,pe),S(he,y,pe),r(y,Pe,pe),S(xe,y,pe),r(y,we,pe),S(ge,y,pe),r(y,qe,pe),S(ee,y,pe),r(y,me,pe),S(te,y,pe),r(y,ve,pe),S(le,y,pe),r(y,de,pe),S(He,y,pe),r(y,Ee,pe),S(Se,y,pe),Ae=!0},p(y,pe){const Y={};pe&1&&(Y.$$scope={dirty:pe,ctx:y}),t.$set(Y);const ce={};pe&1&&(ce.$$scope={dirty:pe,ctx:y}),i.$set(ce);const Me={};pe&1&&(Me.$$scope={dirty:pe,ctx:y}),m.$set(Me);const Ie={};pe&1&&(Ie.$$scope={dirty:pe,ctx:y}),$.$set(Ie);const Te={};pe&1&&(Te.$$scope={dirty:pe,ctx:y}),l.$set(Te);const De={};pe&1&&(De.$$scope={dirty:pe,ctx:y}),L.$set(De);const X={};pe&1&&(X.$$scope={dirty:pe,ctx:y}),b.$set(X);const fe={};pe&1&&(fe.$$scope={dirty:pe,ctx:y}),E.$set(fe);const je={};pe&1&&(je.$$scope={dirty:pe,ctx:y}),A.$set(je);const ze={};pe&1&&(ze.$$scope={dirty:pe,ctx:y}),B.$set(ze);const ke={};pe&1&&(ke.$$scope={dirty:pe,ctx:y}),K.$set(ke);const Oe={};pe&1&&(Oe.$$scope={dirty:pe,ctx:y}),j.$set(Oe);const Ve={};pe&1&&(Ve.$$scope={dirty:pe,ctx:y}),_e.$set(Ve);const Ue={};pe&1&&(Ue.$$scope={dirty:pe,ctx:y}),he.$set(Ue);const Re={};pe&1&&(Re.$$scope={dirty:pe,ctx:y}),xe.$set(Re);const W={};pe&1&&(W.$$scope={dirty:pe,ctx:y}),ge.$set(W);const Ce={};pe&1&&(Ce.$$scope={dirty:pe,ctx:y}),ee.$set(Ce);const Be={};pe&1&&(Be.$$scope={dirty:pe,ctx:y}),te.$set(Be);const Je={};pe&1&&(Je.$$scope={dirty:pe,ctx:y}),le.$set(Je);const Ne={};pe&1&&(Ne.$$scope={dirty:pe,ctx:y}),He.$set(Ne);const N={};pe&1&&(N.$$scope={dirty:pe,ctx:y}),Se.$set(N)},i(y){Ae||(H(t.$$.fragment,y),H(i.$$.fragment,y),H(m.$$.fragment,y),H($.$$.fragment,y),H(l.$$.fragment,y),H(L.$$.fragment,y),H(b.$$.fragment,y),H(E.$$.fragment,y),H(A.$$.fragment,y),H(B.$$.fragment,y),H(K.$$.fragment,y),H(j.$$.fragment,y),H(_e.$$.fragment,y),H(he.$$.fragment,y),H(xe.$$.fragment,y),H(ge.$$.fragment,y),H(ee.$$.fragment,y),H(te.$$.fragment,y),H(le.$$.fragment,y),H(He.$$.fragment,y),H(Se.$$.fragment,y),Ae=!0)},o(y){P(t.$$.fragment,y),P(i.$$.fragment,y),P(m.$$.fragment,y),P($.$$.fragment,y),P(l.$$.fragment,y),P(L.$$.fragment,y),P(b.$$.fragment,y),P(E.$$.fragment,y),P(A.$$.fragment,y),P(B.$$.fragment,y),P(K.$$.fragment,y),P(j.$$.fragment,y),P(_e.$$.fragment,y),P(he.$$.fragment,y),P(xe.$$.fragment,y),P(ge.$$.fragment,y),P(ee.$$.fragment,y),P(te.$$.fragment,y),P(le.$$.fragment,y),P(He.$$.fragment,y),P(Se.$$.fragment,y),Ae=!1},d(y){y&&(a(e),a(s),a(p),a(u),a(n),a(x),a(f),a(c),a(I),a(O),a(D),a(V),a(ie),a(se),a(be),a(Pe),a(we),a(qe),a(me),a(ve),a(de),a(Ee)),q(t,y),q(i,y),q(m,y),q($,y),q(l,y),q(L,y),q(b,y),q(E,y),q(A,y),q(B,y),q(K,y),q(j,y),q(_e,y),q(he,y),q(xe,y),q(ge,y),q(ee,y),q(te,y),q(le,y),q(He,y),q(Se,y)}}}function ua(_){let e,o;return e=new z({props:{$$slots:{default:[ra]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const p={};t&1&&(p.$$scope={dirty:t,ctx:s}),e.$set(p)},i(s){o||(H(e.$$.fragment,s),o=!0)},o(s){P(e.$$.fragment,s),o=!1},d(s){q(e,s)}}}class oa extends Xe{constructor(e){super(),Ye(this,e,null,ua,We,{})}}function $a(_){let e,o=`Le polymorphisme permet à des objets de types différents d'être traités\r
			de manière uniforme via un type commun.`,s,t,p=`Du grec <i>poly</i> (plusieurs) et <i>morphê</i> (formes) :
			un même appel de méthode peut produire des <span class="text-important">comportements différents</span>.`,i,u,m=`On en a eu un aperçu en séance 1 avec le BassinAquatique et le Maître/Animal.\r
			Maintenant on formalise. Le polymorphisme est ce qui rend la POO vraiment puissante.\r
			Sans lui, on écrirait des cascades de if/else partout.`;return{c(){e=g("p"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"P",{"data-svelte-h":!0}),h(e)!=="svelte-h5nfj"&&(e.textContent=o),s=d(n),t=C(n,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1vjbfnh"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-y7ygsb"&&(u.textContent=m),this.h()},h(){w(t,"class","fragment"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function fa(_){let e=`
class MathUtils {
    int additionner(int a, int b) {
        return a + b;
    }
    double additionner(double a, double b) {
        return a + b;
    }
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function ca(_){let e,o="Polymorphisme statique",s,t,p='Résolu à la <span class="text-important">compilation</span> : la surcharge de méthodes.',i,u,m,n,$="Le compilateur choisit la méthode selon le <b>nombre</b> et le <b>type</b> des paramètres.",x,l,f=`Attention : la surcharge ne se base PAS sur le type de retour. Deux méthodes avec la même\r
			signature mais un retour différent = erreur de compilation. C'est différent de @Override.`,L;return u=new Z({props:{$$slots:{default:[fa]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment),m=v(),n=g("p"),n.innerHTML=$,x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1vslke8"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1coyucb"&&(t.innerHTML=p),i=d(c),M(u.$$.fragment,c),m=d(c),n=C(c,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-qa2qkk"&&(n.innerHTML=$),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-1owly6z"&&(l.textContent=f),this.h()},h(){w(n,"class","fragment"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),S(u,c,b),r(c,m,b),r(c,n,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),u.$set(I)},i(c){L||(H(u.$$.fragment,c),L=!0)},o(c){P(u.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(n),a(x),a(l)),q(u,c)}}}function pa(_){let e=`
class Animal {
    void faireDuBruit() {
        System.out.println("...");
    }
}

class Chien extends Animal {
    @Override
    void faireDuBruit() {
        System.out.println("Wouaf");
    }
}

class Chat extends Animal {
    @Override
    void faireDuBruit() {
        System.out.println("Miaou");
    }
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function ma(_){let e,o="Polymorphisme dynamique",s,t,p='Résolu à l&#39;<span class="text-important">exécution</span> : la redéfinition de méthodes.',i,u,m,n,$=`C'est la JVM qui décide à l'exécution quelle version appeler.\r
			C'est ce qu'on appelle la liaison tardive (late binding).`,x;return u=new Z({props:{lines:"1-5|7-12|14-19",$$slots:{default:[pa]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment),m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1tbr8tv"&&(e.textContent=o),s=d(l),t=C(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-aet2n2"&&(t.innerHTML=p),i=d(l),M(u.$$.fragment,l),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-19zy0lt"&&(n.textContent=$),this.h()},h(){w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),S(u,l,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),u.$set(L)},i(l){x||(H(u.$$.fragment,l),x=!0)},o(l){P(u.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(t),a(i),a(m),a(n)),q(u,l)}}}function da(_){let e=`
Animal a = new Chien();
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function va(_){let e,o="Type statique vs type dynamique",s,t,p,i,u='<div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">Type statique</h4> <p class="text-xl mt-2">Le type de la <b>variable</b> : <code>Animal</code></p> <p class="text-sm text-gray-400">Connu à la compilation</p></div> <div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">Type dynamique</h4> <p class="text-xl mt-2">Le type de l&#39;<b>objet</b> : <code>Chien</code></p> <p class="text-sm text-gray-400">Connu à l&#39;exécution</p></div>',m,n,$="<code>a.faireDuBruit()</code> appelle la version de <code>Chien</code>, pas celle d&#39;<code>Animal</code>.",x,l,f=`C'est LA distinction fondamentale du polymorphisme. Le compilateur voit Animal, la JVM voit Chien.\r
			Le compilateur vérifie que la méthode existe dans Animal, la JVM exécute celle de Chien.`,L;return t=new Z({props:{$$slots:{default:[da]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("div"),i.innerHTML=u,m=v(),n=g("p"),n.innerHTML=$,x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-z5ohfk"&&(e.textContent=o),s=d(c),M(t.$$.fragment,c),p=d(c),i=C(c,"DIV",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-1rv2a8g"&&(i.innerHTML=u),m=d(c),n=C(c,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1oq395b"&&(n.innerHTML=$),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-11wljv3"&&(l.textContent=f),this.h()},h(){w(i,"class","grid grid-cols-2 gap-8 mt-8"),w(n,"class","fragment mt-6"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),S(t,c,b),r(c,p,b),r(c,i,b),r(c,m,b),r(c,n,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),t.$set(I)},i(c){L||(H(t.$$.fragment,c),L=!0)},o(c){P(t.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(p),a(i),a(m),a(n),a(x),a(l)),q(t,c)}}}function xa(_){let e=`
Animal a = new Chien();       // Upcasting implicite
Animal b = new Chat();        // Upcasting implicite

List<Animal> animaux = new ArrayList<>();
animaux.add(new Chien());     // Upcasting implicite
animaux.add(new Chat());      // Upcasting implicite
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function _a(_){let e,o="Upcasting",s,t,p="Affecter un objet d'une classe fille à une variable du type parent.",i,u,m,n,$=`L&#39;upcasting est <span class="text-important">toujours sûr</span> et <b>implicite</b> :
			un <code>Chien</code> est forcément un <code>Animal</code>.`,x,l,f=`C'est ce qu'on fait depuis la séance 1 sans le nommer. Maintenant on met un mot dessus.\r
			L'upcasting ne perd pas d'information : l'objet reste un Chien, on le voit juste\r
			"à travers les lunettes" Animal.`,L;return u=new Z({props:{$$slots:{default:[xa]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),T(u.$$.fragment),m=v(),n=g("p"),n.innerHTML=$,x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-mn0ehs"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1kyo8s0"&&(t.textContent=p),i=d(c),M(u.$$.fragment,c),m=d(c),n=C(c,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-j5pmvp"&&(n.innerHTML=$),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-j1b3h8"&&(l.textContent=f),this.h()},h(){w(n,"class","fragment mt-4"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),S(u,c,b),r(c,m,b),r(c,n,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),u.$set(I)},i(c){L||(H(u.$$.fragment,c),L=!0)},o(c){P(u.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(n),a(x),a(l)),q(u,c)}}}function Ca(_){let e=`
Animal a = new Chien();

Chien c = (Chien) a;          // OK : a est bien un Chien
c.faireDuBruit();              // Wouaf

Chat chat = (Chat) a;          // ClassCastException !
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function ga(_){let e,o="Downcasting",s,t,p='Affecter une variable du type parent à un type enfant : cast <span class="text-important">explicite</span>.',i,u,m,n,$="Le downcasting peut échouer si le type réel ne correspond pas.",x,l,f=`Le compilateur ne vérifie pas le cast, c'est à l'exécution que ça plante.\r
			ClassCastException est une RuntimeException. On doit toujours vérifier avant de downcaster.`,L;return u=new Z({props:{$$slots:{default:[Ca]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment),m=v(),n=g("p"),n.textContent=$,x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1jt6myx"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-16sz18u"&&(t.innerHTML=p),i=d(c),M(u.$$.fragment,c),m=d(c),n=C(c,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-hyqav2"&&(n.textContent=$),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-92prr7"&&(l.textContent=f),this.h()},h(){w(n,"class","fragment mt-4 text-red-400"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),S(u,c,b),r(c,m,b),r(c,n,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),u.$set(I)},i(c){L||(H(u.$$.fragment,c),L=!0)},o(c){P(u.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(n),a(x),a(l)),q(u,c)}}}function ha(_){let e=`
Animal a = getAnimal();

if (a instanceof Chien) {
    Chien c = (Chien) a;
    c.rapporterBalle();
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function ba(_){let e=`
if (a instanceof Chien c) {
    c.rapporterBalle();  // c est déjà casté
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function La(_){let e,o="Vérifier avant de caster",s,t,p,i,u,m='Depuis Java 16, le <span class="text-important">pattern matching</span> simplifie :',n,$,x,l,f=`Le pattern matching évite le cast redondant. Le compilateur crée la variable\r
			directement dans le bon type. C'est la syntaxe moderne à privilégier.`,L;return t=new Z({props:{$$slots:{default:[ha]},$$scope:{ctx:_}}}),$=new Z({props:{$$slots:{default:[ba]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("div"),u=g("p"),u.innerHTML=m,n=v(),T($.$$.fragment),x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1fmqy2b"&&(e.textContent=o),s=d(c),M(t.$$.fragment,c),p=d(c),i=C(c,"DIV",{class:!0});var b=Le(i);u=C(b,"P",{"data-svelte-h":!0}),h(u)!=="svelte-8ft65n"&&(u.innerHTML=m),n=d(b),M($.$$.fragment,b),b.forEach(a),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-oy54ff"&&(l.textContent=f),this.h()},h(){w(i,"class","fragment mt-6"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),S(t,c,b),r(c,p,b),r(c,i,b),ne(i,u),ne(i,n),S($,i,null),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),t.$set(I);const E={};b&1&&(E.$$scope={dirty:b,ctx:c}),$.$set(E)},i(c){L||(H(t.$$.fragment,c),H($.$$.fragment,c),L=!0)},o(c){P(t.$$.fragment,c),P($.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(p),a(i),a(x),a(l)),q(t,c),q($)}}}function wa(_){let e=`
List<Animal> animaux = new ArrayList<>();
animaux.add(new Chien()); animaux.add(new Chat());

for (Animal a : animaux) {
    a.faireDuBruit();  // Chaque animal fait SON bruit
}

// Wouaf  puis  Miaou
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function qa(_){let e,o="Polymorphisme en action",s,t,p,i,u=`Le code ne connaît pas les types concrets. <br/>
			Ajouter un <code>Perroquet</code> demain ? <span class="text-important">Aucune ligne à modifier.</span>`,m,n,$=`C'est le principe Open/Closed en action : ouvert à l'extension, fermé à la modification.\r
			On verra SOLID en détail plus tard dans cette séance.`,x;return t=new Z({props:{lines:"1-2|4-6|8",$$slots:{default:[wa]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-3wd1f5"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-awrsyn"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1wno0zp"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function Pa(_){let e=`
abstract class Forme {
    abstract double surface();
}

class Cercle extends Forme {
    double rayon;
    Cercle(double r) { this.rayon = r; }
    double surface() {
        return Math.PI * rayon * rayon;
    }
}

class Rectangle extends Forme {
    double l, h;
    Rectangle(double l, double h) {
        this.l = l; this.h = h;
    }
    double surface() {
        return l * h;
    }
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Ha(_){let e=`
List<Forme> formes = List.of(
    new Cercle(5),
    new Rectangle(4, 6),
    new Cercle(2)
);

double total = 0;
for (Forme f : formes) {
    total += f.surface();
}
// Pas besoin de savoir ce qu'on
// calcule : cercle ou rectangle
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Sa(_){let e,o="Exemple : formes géométriques",s,t,p,i,u,m,n,$=`C'est un classique mais c'est exactement ce qu'on trouve dans un logiciel de dessin.\r
			Le rendu graphique parcourt la liste de formes et appelle draw() sur chacune.`,x;return p=new Z({props:{$$slots:{default:[Pa]},$$scope:{ctx:_}}}),u=new Z({props:{$$slots:{default:[Ha]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),T(p.$$.fragment),i=v(),T(u.$$.fragment),m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1veyxyy"&&(e.textContent=o),s=d(l),t=C(l,"DIV",{class:!0});var f=Le(t);M(p.$$.fragment,f),i=d(f),M(u.$$.fragment,f),f.forEach(a),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-16feza2"&&(n.textContent=$),this.h()},h(){w(t,"class","flex flex-row gap-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),S(p,t,null),ne(t,i),S(u,t,null),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),p.$set(L);const c={};f&1&&(c.$$scope={dirty:f,ctx:l}),u.$set(c)},i(l){x||(H(p.$$.fragment,l),H(u.$$.fragment,l),x=!0)},o(l){P(p.$$.fragment,l),P(u.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(t),a(m),a(n)),q(p),q(u)}}}function Ma(_){let e=`
@startuml
!theme crt-green
skinparam backgroundColor transparent

interface Volant {
  + voler(): void
}

class Oiseau implements Volant
class Avion implements Volant
class Drone implements Volant

class TourDeControle {
  + autoriserDecollage(v: Volant)
}

TourDeControle ..> Volant : utilise
@enduml
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Ta(_){let e,o="Utiliser le type le plus générique",s,t,p,i,u=`<code>autoriserDecollage</code> prend un <code>Volant</code>, pas un <code>Avion</code>.
			Demain, un <code>Drone</code> pourra décoller sans modifier la tour.`,m,n,$=`Le principe de substitution de Liskov : si votre code fonctionne avec le type parent,\r
			il doit fonctionner avec n'importe quel sous-type. Préférez toujours le type le plus\r
			générique possible dans les signatures de méthodes.`,x;return t=new Ke({props:{$$slots:{default:[Ma]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-o5ol8a"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-1mmudvq"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1kk6c4o"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function Ea(_){let e,o="Récapitulatif",s,t,p='<tr><td class="p-3"><span class="text-important">Surcharge</span></td> <td class="p-3">Même nom, paramètres différents (compilation)</td></tr> <tr><td class="p-3"><span class="text-important">Redéfinition</span></td> <td class="p-3">Même signature dans la classe fille (exécution)</td></tr> <tr><td class="p-3"><span class="text-important">Upcasting</span></td> <td class="p-3">Enfant → Parent (implicite, sûr)</td></tr> <tr><td class="p-3"><span class="text-important">Downcasting</span></td> <td class="p-3">Parent → Enfant (explicite, risqué)</td></tr> <tr><td class="p-3"><span class="text-important">instanceof</span></td> <td class="p-3">Vérifier le type avant de caster</td></tr>',i,u,m=`Ce tableau est à connaître par coeur pour l'examen. Upcasting/downcasting sont des termes\r
			qu'on retrouve dans tous les langages typés.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("table"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-ri7iuh"&&(e.textContent=o),s=d(n),t=C(n,"TABLE",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-da9plz"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-fnqbme"&&(u.textContent=m),this.h()},h(){w(t,"class","text-xl"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function Aa(_){let e,o="Polymorphisme",s,t,p,i,u,m,n,$,x,l,f,L,c,b,I,E,O,A,D,B,V,K,ie;return t=new z({props:{$$slots:{default:[$a]},$$scope:{ctx:_}}}),i=new z({props:{$$slots:{default:[ca]},$$scope:{ctx:_}}}),m=new z({props:{$$slots:{default:[ma]},$$scope:{ctx:_}}}),$=new z({props:{$$slots:{default:[va]},$$scope:{ctx:_}}}),l=new z({props:{$$slots:{default:[_a]},$$scope:{ctx:_}}}),L=new z({props:{$$slots:{default:[ga]},$$scope:{ctx:_}}}),b=new z({props:{$$slots:{default:[La]},$$scope:{ctx:_}}}),E=new z({props:{$$slots:{default:[qa]},$$scope:{ctx:_}}}),A=new z({props:{$$slots:{default:[Sa]},$$scope:{ctx:_}}}),B=new z({props:{$$slots:{default:[Ta]},$$scope:{ctx:_}}}),K=new z({props:{$$slots:{default:[Ea]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),T(i.$$.fragment),u=v(),T(m.$$.fragment),n=v(),T($.$$.fragment),x=v(),T(l.$$.fragment),f=v(),T(L.$$.fragment),c=v(),T(b.$$.fragment),I=v(),T(E.$$.fragment),O=v(),T(A.$$.fragment),D=v(),T(B.$$.fragment),V=v(),T(K.$$.fragment)},l(j){e=C(j,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-18uzcw"&&(e.textContent=o),s=d(j),M(t.$$.fragment,j),p=d(j),M(i.$$.fragment,j),u=d(j),M(m.$$.fragment,j),n=d(j),M($.$$.fragment,j),x=d(j),M(l.$$.fragment,j),f=d(j),M(L.$$.fragment,j),c=d(j),M(b.$$.fragment,j),I=d(j),M(E.$$.fragment,j),O=d(j),M(A.$$.fragment,j),D=d(j),M(B.$$.fragment,j),V=d(j),M(K.$$.fragment,j)},m(j,se){r(j,e,se),r(j,s,se),S(t,j,se),r(j,p,se),S(i,j,se),r(j,u,se),S(m,j,se),r(j,n,se),S($,j,se),r(j,x,se),S(l,j,se),r(j,f,se),S(L,j,se),r(j,c,se),S(b,j,se),r(j,I,se),S(E,j,se),r(j,O,se),S(A,j,se),r(j,D,se),S(B,j,se),r(j,V,se),S(K,j,se),ie=!0},p(j,se){const _e={};se&1&&(_e.$$scope={dirty:se,ctx:j}),t.$set(_e);const be={};se&1&&(be.$$scope={dirty:se,ctx:j}),i.$set(be);const he={};se&1&&(he.$$scope={dirty:se,ctx:j}),m.$set(he);const Pe={};se&1&&(Pe.$$scope={dirty:se,ctx:j}),$.$set(Pe);const xe={};se&1&&(xe.$$scope={dirty:se,ctx:j}),l.$set(xe);const we={};se&1&&(we.$$scope={dirty:se,ctx:j}),L.$set(we);const ge={};se&1&&(ge.$$scope={dirty:se,ctx:j}),b.$set(ge);const qe={};se&1&&(qe.$$scope={dirty:se,ctx:j}),E.$set(qe);const ee={};se&1&&(ee.$$scope={dirty:se,ctx:j}),A.$set(ee);const me={};se&1&&(me.$$scope={dirty:se,ctx:j}),B.$set(me);const te={};se&1&&(te.$$scope={dirty:se,ctx:j}),K.$set(te)},i(j){ie||(H(t.$$.fragment,j),H(i.$$.fragment,j),H(m.$$.fragment,j),H($.$$.fragment,j),H(l.$$.fragment,j),H(L.$$.fragment,j),H(b.$$.fragment,j),H(E.$$.fragment,j),H(A.$$.fragment,j),H(B.$$.fragment,j),H(K.$$.fragment,j),ie=!0)},o(j){P(t.$$.fragment,j),P(i.$$.fragment,j),P(m.$$.fragment,j),P($.$$.fragment,j),P(l.$$.fragment,j),P(L.$$.fragment,j),P(b.$$.fragment,j),P(E.$$.fragment,j),P(A.$$.fragment,j),P(B.$$.fragment,j),P(K.$$.fragment,j),ie=!1},d(j){j&&(a(e),a(s),a(p),a(u),a(n),a(x),a(f),a(c),a(I),a(O),a(D),a(V)),q(t,j),q(i,j),q(m,j),q($,j),q(l,j),q(L,j),q(b,j),q(E,j),q(A,j),q(B,j),q(K,j)}}}function Ia(_){let e,o;return e=new z({props:{$$slots:{default:[Aa]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const p={};t&1&&(p.$$scope={dirty:t,ctx:s}),e.$set(p)},i(s){o||(H(e.$$.fragment,s),o=!0)},o(s){P(e.$$.fragment,s),o=!1},d(s){q(e,s)}}}class Da extends Xe{constructor(e){super(),Ye(this,e,null,Ia,We,{})}}function ja(_){let e,o=`Les membres statiques appartiennent à la classe plutôt qu'à une instance spécifique de la
			classe.`,s,t,p="Ils sont partagés par toutes les instances de la classe.",i,u,m="Cela signifie que vous pouvez accéder à un membre statique sans créer d'instance de la classe.",n,$,x=`Le mot "static" vient du fait que la mémoire est allouée une seule fois, au chargement de la
			classe. Contrairement aux attributs d'instance qui sont créés à chaque "new". C'est utile pour
			les constantes (Math.PI), les compteurs partagés, les méthodes utilitaires...`;return{c(){e=g("p"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("p"),u.textContent=m,n=v(),$=g("aside"),$.textContent=x,this.h()},l(l){e=C(l,"P",{"data-svelte-h":!0}),h(e)!=="svelte-1630q1j"&&(e.textContent=o),s=d(l),t=C(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1eojfzb"&&(t.textContent=p),i=d(l),u=C(l,"P",{"data-svelte-h":!0}),h(u)!=="svelte-5aucu0"&&(u.textContent=m),n=d(l),$=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-1wrzvst"&&($.textContent=x),this.h()},h(){w($,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,u,f),r(l,n,f),r(l,$,f)},p:k,d(l){l&&(a(e),a(s),a(t),a(i),a(u),a(n),a($))}}}function ka(_){let e=`
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
			`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Oa(_){let e=`
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
			`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function za(_){let e,o="Attributs statiques",s,t,p,i,u,m,n,$=`Notez qu&#39;il n&#39;est pas nécessaire de créer une instance de la classe <code>Compteur</code> pour
			accéder à l&#39;attribut statique <code>count</code>. En outre <code>count</code> est partagé
			entre toutes les instances de la classe <code>Compteur</code>.`,x;return p=new Z({props:{class:"language-java",$$slots:{default:[ka]},$$scope:{ctx:_}}}),u=new Z({props:{$$slots:{default:[Oa]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),T(p.$$.fragment),i=v(),T(u.$$.fragment),m=v(),n=g("p"),n.innerHTML=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-toavhx"&&(e.textContent=o),s=d(l),t=C(l,"DIV",{class:!0});var f=Le(t);M(p.$$.fragment,f),i=d(f),M(u.$$.fragment,f),f.forEach(a),m=d(l),n=C(l,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1ajty7n"&&(n.innerHTML=$),this.h()},h(){w(t,"class","flex flex-row"),w(n,"class","smaller")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),S(p,t,null),ne(t,i),S(u,t,null),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),p.$set(L);const c={};f&1&&(c.$$scope={dirty:f,ctx:l}),u.$set(c)},i(l){x||(H(p.$$.fragment,l),H(u.$$.fragment,l),x=!0)},o(l){P(p.$$.fragment,l),P(u.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(t),a(m),a(n)),q(p),q(u)}}}function Va(_){let e=`
	class MathUtils {
		static int additionner(int a, int b) {
			return a + b;
		}
	}
	
	int result = MathUtils.additionner(3, 4);
	`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Ra(_){let e,o="Méthodes statiques",s,t,p,i,u=`La méthode <code>additionner</code> peut être appelée sans créer une instance de la classe
			<code>MathUtils</code>.`,m,n,$=`Remarquez que vous utilisez <code>System.out.println()</code> sans créer d&#39;instance de la classe,
			il s&#39;agit d&#39;une méthode statique.`,x,l,f=`Les classes utilitaires sont souvent pleines de méthodes statiques : Math, Arrays,
			Collections... C'est aussi le cas de System.out qui est un attribut statique de la classe
			System. En règle générale, si une méthode n'utilise pas "this", elle devrait probablement être
			statique.`,L;return t=new Z({props:{$$slots:{default:[Va]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("p"),n.innerHTML=$,x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-n0ip6m"&&(e.textContent=o),s=d(c),M(t.$$.fragment,c),p=d(c),i=C(c,"P",{"data-svelte-h":!0}),h(i)!=="svelte-1ww0p7q"&&(i.innerHTML=u),m=d(c),n=C(c,"P",{"data-svelte-h":!0}),h(n)!=="svelte-1v8o7l1"&&(n.innerHTML=$),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-1wsetis"&&(l.textContent=f),this.h()},h(){w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),S(t,c,b),r(c,p,b),r(c,i,b),r(c,m,b),r(c,n,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),t.$set(I)},i(c){L||(H(t.$$.fragment,c),L=!0)},o(c){P(t.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(p),a(i),a(m),a(n),a(x),a(l)),q(t,c)}}}function Ua(_){let e=`
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
			`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Ja(_){let e,o="Limitation des méthodes statiques",s,t,p,i,u=`Une méthode statique ne peut pas accéder directement aux attributs ou méthodes non statiques
			de la classe. Cela est dû au fait que les méthodes statiques n'ont pas de référence à une
			instance spécifique de la classe.`,m,n,$=`C'est logique : une méthode statique n'a pas de "this". Elle ne sait pas à quelle instance
			elle appartient. Si vous avez besoin d'accéder à des attributs d'instance, la méthode ne doit
			pas être statique. Ou alors, passez l'instance en paramètre de la méthode statique.`,x;return t=new Z({props:{$$slots:{default:[Ua]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.textContent=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-mxao6o"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{"data-svelte-h":!0}),h(i)!=="svelte-1r6nbc"&&(i.textContent=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-teq9db"&&(n.textContent=$),this.h()},h(){w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function Ba(_){let e,o="Avantages des membres et méthodes statiques",s,t,p=`<li>Partage des ressources : Les membres statiques sont partagés par toutes les instances de la
				classe, ce qui permet de partager des données ou des états communs.</li> <li>Accès sans instance : Les méthodes et attributs statiques peuvent être utilisés sans créer
				d&#39;instance de la classe, ce qui simplifie l&#39;accès aux utilitaires et aux constantes.</li> <li>Performance : L&#39;accès aux membres statiques peut être plus rapide car il n&#39;y a pas besoin de
				créer et de gérer des instances d&#39;objets.</li> <li>Organisation du code : Les méthodes statiques peuvent regrouper des fonctions utilitaires ou
				des opérations liées à la classe, améliorant ainsi la lisibilité et la maintenance du code.</li>`,i,u,m=`Attention : trop de static peut être un "code smell". Si tout est statique, vous écrivez du
			procédural, pas de l'objet. Le static casse aussi le polymorphisme : on ne peut pas redéfinir
			une méthode statique dans une classe fille. Utilisez static pour les utilitaires, les
			constantes, les factories. Pas pour le code métier principal.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-12gnc3a"&&(e.textContent=o),s=d(n),t=C(n,"UL",{"data-svelte-h":!0}),h(t)!=="svelte-iw1vw3"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-12j9kii"&&(u.textContent=m),this.h()},h(){w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function Na(_){let e,o="Les membres statiques",s,t,p,i,u,m,n,$,x,l,f;return t=new z({props:{$$slots:{default:[ja]},$$scope:{ctx:_}}}),i=new z({props:{$$slots:{default:[za]},$$scope:{ctx:_}}}),m=new z({props:{$$slots:{default:[Ra]},$$scope:{ctx:_}}}),$=new z({props:{$$slots:{default:[Ja]},$$scope:{ctx:_}}}),l=new z({props:{$$slots:{default:[Ba]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),T(i.$$.fragment),u=v(),T(m.$$.fragment),n=v(),T($.$$.fragment),x=v(),T(l.$$.fragment)},l(L){e=C(L,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-11qpvto"&&(e.textContent=o),s=d(L),M(t.$$.fragment,L),p=d(L),M(i.$$.fragment,L),u=d(L),M(m.$$.fragment,L),n=d(L),M($.$$.fragment,L),x=d(L),M(l.$$.fragment,L)},m(L,c){r(L,e,c),r(L,s,c),S(t,L,c),r(L,p,c),S(i,L,c),r(L,u,c),S(m,L,c),r(L,n,c),S($,L,c),r(L,x,c),S(l,L,c),f=!0},p(L,c){const b={};c&1&&(b.$$scope={dirty:c,ctx:L}),t.$set(b);const I={};c&1&&(I.$$scope={dirty:c,ctx:L}),i.$set(I);const E={};c&1&&(E.$$scope={dirty:c,ctx:L}),m.$set(E);const O={};c&1&&(O.$$scope={dirty:c,ctx:L}),$.$set(O);const A={};c&1&&(A.$$scope={dirty:c,ctx:L}),l.$set(A)},i(L){f||(H(t.$$.fragment,L),H(i.$$.fragment,L),H(m.$$.fragment,L),H($.$$.fragment,L),H(l.$$.fragment,L),f=!0)},o(L){P(t.$$.fragment,L),P(i.$$.fragment,L),P(m.$$.fragment,L),P($.$$.fragment,L),P(l.$$.fragment,L),f=!1},d(L){L&&(a(e),a(s),a(p),a(u),a(n),a(x)),q(t,L),q(i,L),q(m,L),q($,L),q(l,L)}}}function Fa(_){let e,o;return e=new z({props:{$$slots:{default:[Na]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const p={};t&1&&(p.$$scope={dirty:t,ctx:s}),e.$set(p)},i(s){o||(H(e.$$.fragment,s),o=!0)},o(s){P(e.$$.fragment,s),o=!1},d(s){q(e,s)}}}class Ga extends Xe{constructor(e){super(),Ye(this,e,null,Fa,We,{})}}function Qa(_){let e,o="La généricité",s,t,p="Écrire une fois, utiliser avec tous les types — en toute sécurité",i,u,m=`On entre dans un sujet qui a révolutionné Java en 2004 avec Java 5.
			Avant ça, les collections étaient des sacs fourre-tout : on y mettait n'importe quoi
			et on priait pour que le bon type revienne à la sortie. C'est comme une boîte à chaussures
			où quelqu'un aurait rangé des vis, des photos et un sandwich. La généricité, c'est mettre
			une étiquette sur la boîte — et interdire d'y mettre autre chose que ce qui est annoncé.
			C'est le fondement de tout ce qu'on va voir aujourd'hui : sans ça, les collections et les
			streams seraient inutilisables proprement.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H2",{"data-svelte-h":!0}),h(e)!=="svelte-14a69uc"&&(e.textContent=o),s=d(n),t=C(n,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-qkjzq0"&&(t.textContent=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-uha87r"&&(u.textContent=m),this.h()},h(){w(t,"class","text-2xl text-gray-200"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function Ka(_){let e=`
List produits = new ArrayList();
produits.add("Clavier");
produits.add(49.9);
produits.add(new Client("C001", "Ada"));
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Wa(_){let e,o="Le monde d'avant (Java < 5)",s,t,p,i,u='Cette liste accepte <span class="text-red-400">n&#39;importe quoi</span>. 😬',m,n,$=`Imaginez un tiroir-caisse dans lequel on peut mettre des billets, des bonbons et des clés USB.
			Techniquement ça rentre, mais quand on veut compter la recette... ça explose.
			Le compilateur ne bloque rien, et le problème est repoussé au moment de l'exécution,
			souvent découvert par un utilisateur en production. C'est exactement ce qu'on veut éviter.`,x;return t=new Z({props:{$$slots:{default:[Ka]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-ao1ihm"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-vwwd2x"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1rt6ryf"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-6 text-2xl"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function Xa(_){let e=`
List produits = new ArrayList();
produits.add("Clavier");

String nom = (String) produits.get(0);   // OK
Double prix = (Double) produits.get(0);  // 💥 ClassCastException !
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Ya(_){let e,o="Le bug arrive trop tard",s,t,p,i,u="Le code compile sans erreur... puis casse en production.",m,n,$=`C'est le pire scénario : le compilateur dit "tout va bien", mais à l'exécution, boum.
			Notre objectif avec la généricité, c'est de déplacer cette erreur le plus tôt possible,
			idéalement au moment où on écrit le code, pas quand le client l'utilise.
			Le compilateur doit être notre premier relecteur technique.`,x;return t=new Z({props:{$$slots:{default:[Xa]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.textContent=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1e3l2x4"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-1nmi2bd"&&(i.textContent=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1yt1ksa"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4 text-red-400"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function Za(_){let e=`
List<String> produits = new ArrayList<>();
produits.add("Clavier");
produits.add("Souris");

String premier = produits.get(0); // Pas de cast !
// produits.add(49.9);            // ❌ Erreur de compilation
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function ya(_){let e,o="La solution : typer la collection",s,t,p,i,u='On gagne à la fois en <span class="text-important">sécurité</span> et en <span class="text-important">lisibilité</span>.',m,n,$=`C'est comme si on avait mis un panneau sur la boîte : "Ici on ne range que des String".
			Le compilateur vérifie automatiquement que personne ne triche. Plus besoin de cast,
			plus de surprise à l'exécution. C'est la promesse des génériques : écrire une seule fois
			une structure, mais l'utiliser avec un type métier clair et garanti.`,x;return t=new Z({props:{$$slots:{default:[Za]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-wr4i6f"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-mw460c"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-9px5i4"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function er(_){let e,o="Les conventions de nommage",s,t,p='<tbody><tr class="fragment"><td class="p-3"><code>T</code></td> <td class="p-3">Type quelconque — le plus courant</td></tr> <tr class="fragment"><td class="p-3"><code>E</code></td> <td class="p-3">Element — dans les collections (<code>List&lt;E&gt;</code>)</td></tr> <tr class="fragment"><td class="p-3"><code>K</code> / <code>V</code></td> <td class="p-3">Key / Value — dans les maps</td></tr> <tr class="fragment"><td class="p-3"><code>R</code></td> <td class="p-3">Result — dans les interfaces fonctionnelles</td></tr></tbody>',i,u,m="Ce sont des conventions, pas des mots-clés.",n,$,x=`Quand vous ouvrez la Javadoc de List, vous voyez List<E>. Quand vous lisez Map,
			vous voyez Map<K, V>. Ces lettres sont comme un code universel entre développeurs Java.
			Vous pouvez techniquement écrire Boite<Banane> comme paramètre de type, mais personne
			ne fait ça. Respectez la convention, c'est un langage partagé.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("table"),t.innerHTML=p,i=v(),u=g("p"),u.textContent=m,n=v(),$=g("aside"),$.textContent=x,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-10y2mtf"&&(e.textContent=o),s=d(l),t=C(l,"TABLE",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-dzw3v9"&&(t.innerHTML=p),i=d(l),u=C(l,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-6u9uea"&&(u.textContent=m),n=d(l),$=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-1e3crxr"&&($.textContent=x),this.h()},h(){w(t,"class","text-xl mt-8 w-full"),w(u,"class","fragment mt-4 text-gray-400"),w($,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,u,f),r(l,n,f),r(l,$,f)},p:k,d(l){l&&(a(e),a(s),a(t),a(i),a(u),a(n),a($))}}}function tr(_){let e=`
class Boite<T> {
    private T contenu;

    public void setContenu(T contenu) {
        this.contenu = contenu;
    }

    public T getContenu() {
        return contenu;
    }
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function sr(_){let e,o="Ma première classe générique",s,t,p,i,u=`Pensez à T comme un trou dans un formulaire. Quand vous écrivez la classe, le trou est vide.
			Quand vous l'utilisez — Boite<String> ou Boite<Produit> — vous remplissez le trou.
			Le compilateur vérifie que tout ce qui passe par ce trou respecte le type annoncé.
			C'est un patron réutilisable : une seule classe, des dizaines d'usages.`,m;return t=new Z({props:{$$slots:{default:[tr]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("aside"),i.textContent=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-sxu0mc"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-n5gjbb"&&(i.textContent=u),this.h()},h(){w(i,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function lr(_){let e=`
Boite<Produit> vitrine = new Boite<>();
vitrine.setContenu(new Produit("CLAVIER", 49.9));

Produit produit = vitrine.getContenu();      // ✅ Pas de cast
// String texte = vitrine.getContenu();      // ❌ Erreur !
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function nr(_){let e,o="À l'usage",s,t,p,i,u='La contrainte de type est portée par <span class="text-important">l&#39;objet lui-même</span>.',m,n,$=`C'est ça la beauté du truc : la boîte "sait" ce qu'elle contient. On n'a plus besoin de
			caster, et on ne peut plus se tromper. C'est exactement le contrat qu'on veut pour du
			code professionnel maintenable.`,x;return t=new Z({props:{$$slots:{default:[lr]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-dttnyu"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-4yw5f0"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1cg7e3z"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4 text-2xl"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function ir(_){let e=`
record Resultat<T>(boolean succes, T valeur, String message) {}

Resultat<Client> resultat =
    new Resultat<>(true, client, "Client chargé");

Resultat<List<Produit>> catalogue =
    new Resultat<>(true, produits, "Catalogue chargé");
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function ar(_){let e,o="Et ce n'est pas que pour les collections !",s,t,p,i,u="Même structure technique, type métier différent selon le contexte.",m,n,$=`C'est un pattern qu'on retrouve partout en entreprise : les réponses d'API REST, les résultats
			de requêtes en base, les messages dans une file. On écrit la coquille une fois, et elle
			s'adapte à n'importe quel contenu typé. Notez qu'on peut même combiner record et généricité —
			c'est du Java moderne à son meilleur.`,x;return t=new Z({props:{$$slots:{default:[ir]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.textContent=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-gprbch"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-hd9211"&&(i.textContent=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-tch02w"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function rr(_){let e=`
List<Produit> produits =
    new ArrayList<Produit>();
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function ur(_){let e=`
List<Produit> produits =
    new ArrayList<>();
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function or(_){let e,o="Le diamond operator <code>&lt;&gt;</code>",s,t,p,i,u="❌ Redondant",m,n,$,x,l,f="✅ Moderne (Java 7+)",L,c,b,I,E=`Le compilateur sait déjà ce qu'on attend à gauche. Pourquoi le répéter à droite ?
			Le diamant vide <> dit "déduis-le toi-même". C'est plus propre à lire et ça évite
			le bruit visuel. Depuis Java 10, on peut même écrire var produits = new ArrayList<Produit>()
			mais attention, l'inférence à gauche oblige à être explicite à droite.`,O;return n=new Z({props:{$$slots:{default:[rr]},$$scope:{ctx:_}}}),c=new Z({props:{$$slots:{default:[ur]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.innerHTML=o,s=v(),t=g("div"),p=g("div"),i=g("h4"),i.textContent=u,m=v(),T(n.$$.fragment),$=v(),x=g("div"),l=g("h4"),l.textContent=f,L=v(),T(c.$$.fragment),b=v(),I=g("aside"),I.textContent=E,this.h()},l(A){e=C(A,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-h8wed3"&&(e.innerHTML=o),s=d(A),t=C(A,"DIV",{class:!0});var D=Le(t);p=C(D,"DIV",{});var B=Le(p);i=C(B,"H4",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-1d7s82e"&&(i.textContent=u),m=d(B),M(n.$$.fragment,B),B.forEach(a),$=d(D),x=C(D,"DIV",{});var V=Le(x);l=C(V,"H4",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-1g19e8l"&&(l.textContent=f),L=d(V),M(c.$$.fragment,V),V.forEach(a),D.forEach(a),b=d(A),I=C(A,"ASIDE",{class:!0,"data-svelte-h":!0}),h(I)!=="svelte-ydhl7c"&&(I.textContent=E),this.h()},h(){w(i,"class","text-red-400"),w(l,"class","text-green-400"),w(t,"class","grid grid-cols-2 gap-6 mt-6"),w(I,"class","notes")},m(A,D){r(A,e,D),r(A,s,D),r(A,t,D),ne(t,p),ne(p,i),ne(p,m),S(n,p,null),ne(t,$),ne(t,x),ne(x,l),ne(x,L),S(c,x,null),r(A,b,D),r(A,I,D),O=!0},p(A,D){const B={};D&1&&(B.$$scope={dirty:D,ctx:A}),n.$set(B);const V={};D&1&&(V.$$scope={dirty:D,ctx:A}),c.$set(V)},i(A){O||(H(n.$$.fragment,A),H(c.$$.fragment,A),O=!0)},o(A){P(n.$$.fragment,A),P(c.$$.fragment,A),O=!1},d(A){A&&(a(e),a(s),a(t),a(b),a(I)),q(n),q(c)}}}function $r(_){let e=`
class Outils {
    static <T> void afficherAvecTitre(String titre, T valeur) {
        System.out.println(titre + " : " + valeur);
    }
}

Outils.afficherAvecTitre("Client", new Client("C001", "Ada"));
Outils.afficherAvecTitre("Total", 129.90);
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function fr(_){let e,o="Méthode générique",s,t,p,i,u=`Ici, ce n'est pas la classe qui est générique, c'est une seule méthode. Le <T> est déclaré
			juste avant le type de retour. Cela veut dire : "cette méthode accepte n'importe quel type,
			et Java déduira automatiquement lequel en regardant ce qu'on lui passe".
			C'est utile quand on veut factoriser un comportement commun sans rendre toute la classe générique.`,m;return t=new Z({props:{$$slots:{default:[$r]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("aside"),i.textContent=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-szxi3d"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-16l59fh"&&(i.textContent=u),this.h()},h(){w(i,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function cr(_){let e=`
static <T> T premier(List<T> elements) {
    if (elements.isEmpty()) {
        throw new IllegalArgumentException("Liste vide");
    }
    return elements.get(0);
}

Produit p = premier(produits);   // → Produit
Client c  = premier(clients);   // → Client
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function pr(_){let e,o="Un cas très concret",s,t,p,i,u='Une seule méthode, plusieurs usages métier, <span class="text-important">zéro cast</span>.',m,n,$=`Ici, Java déduit T tout seul : si on passe une List<Produit>, il sait que T = Produit.
			C'est le bon niveau d'abstraction : on factorise un comportement commun sans perdre la
			précision du type retourné. Imaginez que vous avez 15 types métier et que chacun a besoin
			d'une méthode "donne-moi le premier". Sans généricité, c'est 15 méthodes ou un cast partout.`,x;return t=new Z({props:{$$slots:{default:[cr]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1xsbjxt"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-ceooqx"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1urvm0d"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function mr(_){let e=`
interface Repository<T> {
    void sauvegarder(T element);
    Optional<T> trouverParId(String id);
    List<T> trouverTous();
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function dr(_){let e,o="Interface générique",s,t,p,i,u=`On passe d'un exemple scolaire à un pattern d'architecture très courant en entreprise.
			Un Repository, c'est un peu comme un guichet d'accès aux données : on sait qu'on peut
			y déposer, y chercher, y lister. Mais le Repository de Produit et celui de Client
			manipulent des types différents. La généricité permet de définir le contrat une seule fois
			et de le décliner pour chaque type métier.`,m;return t=new Z({props:{$$slots:{default:[mr]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("aside"),i.textContent=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-6lk2wk"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-idm8hg"&&(i.textContent=u),this.h()},h(){w(i,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function vr(_){let e=`
class ProduitRepository implements Repository<Produit> { ... }
class ClientRepository implements Repository<Client> { ... }

Repository<Produit> catalogue = new ProduitRepository();
Repository<Client> annuaire = new ClientRepository();
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function xr(_){let e,o="Implémentation concrète",s,t,p,i,u="On réutilise la même abstraction, sans confondre les objets métier.",m,n,$=`Regardez la déclaration à gauche : Repository<Produit>. C'est exactement le même
			principe qu'on a vu avec les interfaces en Séance 1 — on programme contre le contrat,
			pas contre l'implémentation. Sauf que maintenant le contrat est paramétré par le type.
			C'est la POO bien typée : une architecture cohérente, réutilisable, et sans cast caché.`,x;return t=new Z({props:{$$slots:{default:[vr]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.textContent=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1a161rk"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-167b3rv"&&(i.textContent=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-4yx6q0"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4 text-2xl"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function _r(_){let e=`
var produits = List.of(
    new Produit("CLAVIER", 49.9),
    new Produit("SOURIS", 19.9)
);
// Java déduit : List<Produit>
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Cr(_){let e,o="<code>var</code> et l&#39;inférence de type",s,t,p,i,u="La sécurité du type est toujours là, même si on ne l'écrit pas explicitement.",m,n,$=`Depuis Java 10, le mot-clé var laisse le compilateur déduire le type. Attention, c'est
			de l'inférence locale, pas du typage dynamique. La variable est toujours fortement typée,
			simplement c'est Java qui fait le travail d'écriture à votre place. Utile pour les types
			longs comme Map<String, List<Produit>>, mais à utiliser avec modération
			pour ne pas perdre en lisibilité.`,x;return t=new Z({props:{$$slots:{default:[_r]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.innerHTML=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.textContent=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-7qg59y"&&(e.innerHTML=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-f72zjt"&&(i.textContent=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-bkd3xr"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function gr(_){let e=`
record Paire<K, V>(K cle, V valeur) {}

Paire<String, Integer> stock = new Paire<>("CLAVIER", 42);
Paire<Client, Double> remise = new Paire<>(client, 0.15);
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function hr(_){let e,o="Plusieurs paramètres de type",s,t,p,i,u=`Très fréquent avec les maps, les tuples techniques, les réponses d'API. C'est comme un
			formulaire à deux champs : le type de chaque champ est paramétrable. En Java standard,
			Map<K, V> est l'exemple le plus connu de classe à deux paramètres de type.`,m;return t=new Z({props:{$$slots:{default:[gr]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("aside"),i.textContent=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1dd5te2"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-qz6hj9"&&(i.textContent=u),this.h()},h(){w(i,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function br(_){let e=`
static <T extends Comparable<T>> T maximum(T a, T b) {
    return a.compareTo(b) >= 0 ? a : b;
}

maximum(4, 9);
maximum("Ada", "Zoe");
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Lr(_){let e,o="Contraindre le type : borne supérieure",s,t,p,i,u='<code>T</code> doit être <span class="text-important">comparable</span> — sinon comment trouver le max ?',m,n,$=`La généricité ce n'est pas "n'importe quoi". C'est "n'importe quel type qui respecte
			un contrat minimum". Ici, on dit : "T, je m'en fiche de ce que tu es exactement, mais
			tu dois savoir te comparer". C'est comme embaucher quelqu'un : "peu importe votre parcours,
			mais vous devez parler Java". Le extends ici ne veut pas dire héritage de classe,
			mais "implémente" ou "est un sous-type de".`,x;return t=new Z({props:{$$slots:{default:[br]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1wxxzcj"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-1w0irjh"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-jlrbr8"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function wr(_){let e=`
static <T> T maximum(T a, T b) {
    return a.compareTo(b) >= 0 ? a : b;
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function qr(_){let e=`
static <T extends Comparable<T>> T maximum(T a, T b) {
    return a.compareTo(b) >= 0 ? a : b;
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Pr(_){let e,o="Pourquoi cette contrainte est nécessaire",s,t,p,i,u="❌ Sans borne",m,n,$,x,l="Erreur : compareTo() inconnu",f,L,c,b="✅ Avec borne",I,E,O,A,D=`Le compilateur n'invente pas les méthodes disponibles. Sans la borne, il ne sait pas que T
			possède compareTo, donc il refuse. Avec la borne, il a la garantie du contrat.
			C'est exactement comme les interfaces en Séance 1 : le type annonce ce qu'il sait faire.`,B;return n=new Z({props:{$$slots:{default:[wr]},$$scope:{ctx:_}}}),E=new Z({props:{$$slots:{default:[qr]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),p=g("div"),i=g("h4"),i.textContent=u,m=v(),T(n.$$.fragment),$=v(),x=g("p"),x.textContent=l,f=v(),L=g("div"),c=g("h4"),c.textContent=b,I=v(),T(E.$$.fragment),O=v(),A=g("aside"),A.textContent=D,this.h()},l(V){e=C(V,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1g5mg34"&&(e.textContent=o),s=d(V),t=C(V,"DIV",{class:!0});var K=Le(t);p=C(K,"DIV",{});var ie=Le(p);i=C(ie,"H4",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-5cka6m"&&(i.textContent=u),m=d(ie),M(n.$$.fragment,ie),$=d(ie),x=C(ie,"P",{class:!0,"data-svelte-h":!0}),h(x)!=="svelte-ooj58x"&&(x.textContent=l),ie.forEach(a),f=d(K),L=C(K,"DIV",{});var j=Le(L);c=C(j,"H4",{class:!0,"data-svelte-h":!0}),h(c)!=="svelte-gi9m7x"&&(c.textContent=b),I=d(j),M(E.$$.fragment,j),j.forEach(a),K.forEach(a),O=d(V),A=C(V,"ASIDE",{class:!0,"data-svelte-h":!0}),h(A)!=="svelte-b9ozla"&&(A.textContent=D),this.h()},h(){w(i,"class","text-red-400"),w(x,"class","text-red-400 mt-2"),w(c,"class","text-green-400"),w(t,"class","grid grid-cols-2 gap-6 mt-6"),w(A,"class","notes")},m(V,K){r(V,e,K),r(V,s,K),r(V,t,K),ne(t,p),ne(p,i),ne(p,m),S(n,p,null),ne(p,$),ne(p,x),ne(t,f),ne(t,L),ne(L,c),ne(L,I),S(E,L,null),r(V,O,K),r(V,A,K),B=!0},p(V,K){const ie={};K&1&&(ie.$$scope={dirty:K,ctx:V}),n.$set(ie);const j={};K&1&&(j.$$scope={dirty:K,ctx:V}),E.$set(j)},i(V){B||(H(n.$$.fragment,V),H(E.$$.fragment,V),B=!0)},o(V){P(n.$$.fragment,V),P(E.$$.fragment,V),B=!1},d(V){V&&(a(e),a(s),a(t),a(O),a(A)),q(n),q(E)}}}function Hr(_){let e=`
static <T extends Number & Comparable<T>> T maxNumerique(T a, T b) {
    return a.compareTo(b) >= 0 ? a : b;
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Sr(_){let e,o="Bornes multiples",s,t,p,i,u="<code>T</code> doit être à la fois un <code>Number</code> et un <code>Comparable</code>.",m,n,$=`Moins fréquent, mais utile pour des API techniques. La règle est simple : la classe
			éventuelle doit apparaître en premier, puis les interfaces. On ne peut avoir qu'une seule
			classe dans les bornes (héritage simple en Java), mais autant d'interfaces qu'on veut.`,x;return t=new Z({props:{$$slots:{default:[Hr]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-xiz3i6"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-9k2xhc"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1f267qc"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function Mr(_){let e=`
List<String> noms = new ArrayList<>();
List<Object> objets = noms; // ❌ Erreur de compilation !
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Tr(_){let e,o="⚠️ Le point qui surprend tout le monde",s,t,p,i,u='<span class="text-important">List&lt;String&gt;</span> n&#39;est <b>PAS</b> un sous-type de <span class="text-important">List&lt;Object&gt;</span> !',m,n,$=`Ça surprend toujours. String hérite de Object, donc une liste de String devrait être une
			liste d'Object, non ? En fait non, et pour une très bonne raison. La généricité Java est
			dite "invariante" : le lien d'héritage entre les paramètres ne se transmet pas.
			C'est contre-intuitif, mais c'est une protection essentielle.`,x;return t=new Z({props:{$$slots:{default:[Mr]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1f8zbeq"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-wrh79a"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-r45gig"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4 text-2xl"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function Er(_){let e=`
List<String> noms = new ArrayList<>();
List<Object> objets = noms;   // Imaginons que ce soit autorisé...
objets.add(42);               // ... on ajoute un Integer

String premier = noms.get(0); // 💥 Quel type réel dans la liste ?
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Ar(_){let e,o="Pourquoi Java refuse ?",s,t,p,i,u="On casserait la promesse de sécurité du type.",m,n,$=`C'est comme si on avait un coffre-fort étiqueté "Bijoux" et qu'on autorisait quelqu'un
			à y accéder comme un coffre "Objets divers". Il pourrait y mettre un sandwich, et la
			prochaine personne qui ouvre le coffre s'attendant à des bijoux serait très surprise.
			Ce refus du compilateur n'est pas arbitraire : il protège l'intégrité de la collection.`,x;return t=new Z({props:{$$slots:{default:[Er]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.textContent=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-7osfld"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-1kczarp"&&(i.textContent=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-33ntql"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment text-red-400 mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function Ir(_){let e=`
void afficherTout(List<?> elements) {
    for (Object element : elements) {
        System.out.println(element);
    }
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Dr(_){let e,o="Wildcard non borné : <code>?</code>",s,t,p,i,u='<code>?</code> = &quot;je ne sais pas quel est le type exact, et <span class="text-important">ça m&#39;est égal</span>&quot;.',m,n,$=`🔍 Imaginez un guichetier qui doit tamponner tous les colis d'une file d'attente.
			Il n'a pas besoin de savoir ce qu'il y a dedans — il les prend un par un et appose le tampon.
			C'est exactement List<?> : on peut lire (chaque élément est au moins un Object), mais
			on ne peut PAS ajouter d'éléments typés, car on ne sait pas ce que la liste accepte réellement.
			Si on pouvait, on risquerait de mettre un colis alimentaire dans une file réservée aux colis fragiles.`,x;return t=new Z({props:{$$slots:{default:[Ir]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.innerHTML=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1si8wdj"&&(e.innerHTML=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-sz2au4"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-15j82a0"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function jr(_){let e=`
double totalPrix(List<? extends Produit> produits) {
    double total = 0;
    for (Produit produit : produits) {
        total += produit.prix();
    }
    return total;
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function kr(_){let e,o="Wildcard avec <code>extends</code> — lire en sécurité",s,t,p,i,u='On peut <span class="text-important">lire</span> des <code>Produit</code>, même si la liste contient des sous-types.',m,n,$=`📖 Pensez à un audit de prix dans un entrepôt. L'auditeur entre dans le rayon "Produit et dérivés"
			et relève le prix de chaque article, qu'il soit un ProduitPromo, un ProduitFragile ou un Produit standard.
			Il n'a pas besoin de connaître le sous-type exact — il lui suffit de savoir que tout article a un prix().
			Mais il n'a PAS le droit d'ajouter un article dans le rayon, car il pourrait mettre un ProduitFragile
			dans un rayon qui n'accepte que des ProduitPromo. Le ? extends autorise la lecture, pas l'écriture.`,x;return t=new Z({props:{$$slots:{default:[jr]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.innerHTML=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1sbw3ua"&&(e.innerHTML=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-cop60u"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-c4riw1"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function Or(_){let e=`
void ajouterClientsVIP(List<? super ClientPremium> cible) {
    cible.add(new ClientPremium("C900", "Grace"));
    cible.add(new ClientPremium("C901", "Linus"));
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function zr(_){let e,o="Wildcard avec <code>super</code> — écrire en sécurité",s,t,p,i,u='Si la liste accepte des parents de <code>ClientPremium</code>, on peut y <span class="text-important">insérer</span> un <code>ClientPremium</code>.',m,n,$=`✍️ Ici c'est l'inverse : on veut ÉCRIRE dans la liste, pas lire.
			Imaginez un entonnoir : si le contenant accepte "Client ou plus large", alors
			un ClientPremium (qui EST un Client) passe forcément. C'est comme poster une lettre
			dans une boîte marquée "Courrier" — ma lettre recommandée (sous-type) rentre sans problème.
			En revanche, ce qu'on SORT de cette liste, on ne sait pas exactement ce que c'est
			(Client ? Object ?), donc la lecture typée n'est pas garantie.`,x;return t=new Z({props:{$$slots:{default:[Or]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.innerHTML=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1mrm0li"&&(e.innerHTML=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-5if530"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-cmv84l"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function Vr(_){let e=`
static <T> void copier(List<? extends T> source, List<? super T> cible) {
    for (T element : source) {
        cible.add(element);
    }
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Rr(_){let e,o="Signature classique avec PECS",s,t,p,i,u='La source <span class="text-green-400">produit</span> des <code>T</code>, la cible <span class="text-blue-400">consomme</span> des <code>T</code>.',m,n,$=`🏭 L'analogie parfaite : une chaîne de production. La source est le tapis roulant d'où SORTENT
			les pièces (on lit → extends). La cible est le bac où TOMBENT les pièces (on écrit → super).
			Cette signature est celle de Collections.copy() dans le JDK — c'est du vrai code de production.
			Si un étudiant retient une seule chose sur les wildcards, c'est cette méthode.`,x;return t=new Z({props:{$$slots:{default:[Vr]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-14kxhk0"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-1nrv9qh"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-g2iow0"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function Ur(_){let e,o="PECS — le mémo à retenir 🧠",s,t,p='<div class="p-5 rounded-xl bg-accent-950"><h4 class="text-green-400">✅ Producer Extends</h4> <p class="mt-3">On <strong>lit</strong> des éléments → <code>? extends T</code></p> <p class="mt-1 text-base text-gray-400">&quot;Le tapis roulant me donne des pièces&quot;</p></div> <div class="p-5 rounded-xl bg-accent-950"><h4 class="text-blue-400">✅ Consumer Super</h4> <p class="mt-3">On <strong>écrit</strong> des éléments → <code>? super T</code></p> <p class="mt-1 text-base text-gray-400">&quot;Le bac reçoit les pièces que je lui donne&quot;</p></div>',i,u,m=`PECS est LE mémo à graver dans le marbre. Il a été popularisé par Joshua Bloch dans Effective Java.
			Si vous doutez, posez-vous la question : "est-ce que je LIS ou est-ce que j'ÉCRIS dans cette collection ?"
			Si c'est les deux… il faut un type exact, pas de wildcard.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-ym7k71"&&(e.textContent=o),s=d(n),t=C(n,"DIV",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1vn8zxe"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-98p1gc"&&(u.textContent=m),this.h()},h(){w(t,"class","grid grid-cols-2 gap-8 mt-8 text-xl"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function Jr(_){let e=`
@startuml
!theme crt-green
skinparam backgroundColor transparent

class Produit
class ProduitFragile extends Produit
class ProduitFrais extends Produit

class "List<Produit>"
class "List<ProduitFragile>"
class "List<? extends Produit>"

"List<? extends Produit>" ..> Produit : lecture sûre
"List<ProduitFragile>" --|> "List<? extends Produit>"
"List<Produit>" --|> "List<? extends Produit>"
@enduml
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Br(_){let e,o="Visualisation du problème",s,t,p,i,u=`⚠️ Attention, ce diagramme n'est PAS une hiérarchie réelle de classes Java — List<ProduitFragile>
			n'hérite pas de List<? extends Produit> au sens classique.
			C'est une représentation mentale pour montrer que le wildcard crée une "famille" de types
			acceptables. Le compilateur vérifie à chaque appel si le type concret appartient à cette famille.
			L'idée clé : le wildcard élargit ce qu'on peut PASSER à une méthode, sans trahir la sécurité.`,m;return t=new Ke({props:{$$slots:{default:[Jr]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("aside"),i.textContent=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1wppvep"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-1pto73e"&&(i.textContent=u),this.h()},h(){w(i,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function Nr(_){let e=`
List<String> noms = new ArrayList<>();
List<Integer> notes = new ArrayList<>();
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Fr(_){let e,o="Type erasure",s,t,p,i,u='À l&#39;exécution, Java ne garde <span class="text-red-400">aucune trace</span> de <code>String</code> ou <code>Integer</code>.',m,n,$='La généricité est une <span class="text-important">sécurité de compilation</span>, pas d&#39;exécution.',x,l,f=`🏭 Imaginez une usine où chaque boîte est étiquetée "Fragile" ou "Alimentaire" pendant le contrôle qualité
			(la compilation). Mais une fois sur le camion de livraison (la JVM), les étiquettes sont retirées.
			Le camion ne sait pas ce qu'il transporte — il voit juste des boîtes.
			C'est un choix historique de Java 5 (2004) : garder la compatibilité avec le bytecode existant.
			D'autres langages (C#, Kotlin natif) ont fait un choix différent avec la "reified generics".`,L;return t=new Z({props:{$$slots:{default:[Nr]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("p"),n.innerHTML=$,x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-9pf92v"&&(e.textContent=o),s=d(c),M(t.$$.fragment,c),p=d(c),i=C(c,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-19dwzox"&&(i.innerHTML=u),m=d(c),n=C(c,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-9ry01t"&&(n.innerHTML=$),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-2znn12"&&(l.textContent=f),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","fragment mt-4 text-2xl"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),S(t,c,b),r(c,p,b),r(c,i,b),r(c,m,b),r(c,n,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),t.$set(I)},i(c){L||(H(t.$$.fragment,c),L=!0)},o(c){P(t.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(p),a(i),a(m),a(n),a(x),a(l)),q(t,c)}}}function Gr(_){let e=`
// ❌ Interdit : instancier un type générique
// T element = new T();

// ❌ Interdit : tester le paramètre à l'exécution
// if (elements instanceof List<String>) { }

// ✅ Autorisé : wildcard non borné (pas d'info à vérifier)
if (elements instanceof List<?>) { }
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Qr(_){let e,o="Conséquences pratiques de l'erasure",s,t,p,i,u=`🚫 On ne peut ni instancier T directement, ni tester le paramètre générique à l'exécution.
			Pourquoi ? Parce que l'étiquette a été retirée ! Le camion ne sait plus ce qu'il transporte.
			Solutions courantes : passer une Class<T> en paramètre (le fameux "token de type"),
			ou utiliser une fabrique (Supplier<T>). On verra les Supplier dans le chapitre Lambda.`,m;return t=new Z({props:{$$slots:{default:[Gr]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("aside"),i.textContent=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-p5zssl"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-u5xusf"&&(i.textContent=u),this.h()},h(){w(i,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function Kr(_){let e=`
// ❌ Interdit
// T[] elements = new T[10];

// ✅ Solution : utiliser une List
List<T> elements = new ArrayList<>();
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Wr(_){let e,o="Pas de tableau générique non plus",s,t,p,i,u="En Java, quand on pense &quot;tableau générique&quot; → on utilise une <code>List</code>.",m,n,$=`💡 C'est d'ailleurs la transition parfaite vers le chapitre suivant : les Collections.
			Les tableaux Java sont "covariants" (String[] est un sous-type de Object[]), ce qui
			est historiquement une source de bugs. Les génériques ont corrigé ça en étant invariants.
			Morale : préférez List<T> à T[] dans du code moderne.`,x;return t=new Z({props:{$$slots:{default:[Kr]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-4mg1vx"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-1m2dmgg"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-ctvzd"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function Xr(_){let e,o="Faut-il tout rendre générique ? 🤔",s,t,p='"Ma classe manipule un type — dois-je la paramétrer ?"',i,u,m='<div class="fragment p-5 rounded-xl bg-accent-950"><p class="text-green-400">✅ Oui, si la classe doit être réutilisable avec plusieurs types</p> <p class="mt-2 text-base text-gray-400">Repository&lt;T&gt;, Convertisseur&lt;S, R&gt;</p></div> <div class="fragment p-5 rounded-xl bg-accent-950"><p class="text-blue-400">✅ Non, si un type métier concret suffit</p> <p class="mt-2 text-base text-gray-400">CatalogueVoitures, GestionnaireClients</p></div>',n,$,x=`🎯 Message de maturité important : la généricité n'est pas un objectif en soi.
			Si une classe ne sera jamais utilisée qu'avec un seul type, la rendre générique ajoute
			de la complexité pour rien. C'est comme installer une porte blindée sur un placard à balais.
			Une bonne règle : "ne généralisez que quand vous avez au moins deux cas d'usage concrets".`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("div"),u.innerHTML=m,n=v(),$=g("aside"),$.textContent=x,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1g9wkp6"&&(e.textContent=o),s=d(l),t=C(l,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-nigf82"&&(t.textContent=p),i=d(l),u=C(l,"DIV",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1pqow07"&&(u.innerHTML=m),n=d(l),$=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-lt8qc1"&&($.textContent=x),this.h()},h(){w(t,"class","text-2xl"),w(u,"class","mt-8 grid grid-cols-2 gap-8 text-xl"),w($,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,u,f),r(l,n,f),r(l,$,f)},p:k,d(l){l&&(a(e),a(s),a(t),a(i),a(u),a(n),a($))}}}function Yr(_){let e=`
List<String> noms = new ArrayList<>();
List brute = noms;         // Raw type : pas de paramètre !
brute.add(42);             // Aucune erreur de compilation 

String premier = noms.get(0); // 💥 ClassCastException à l'exécution
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Zr(_){let e,o="Le piège des raw types ⚠️",s,t,p,i,u="Un raw type réouvre la porte aux bugs qu'on voulait éviter.",m,n,$=`🚪 C'est comme si on avait installé une serrure sécurisée (les génériques) et qu'on laissait
			la porte grande ouverte (raw type). Le compilateur émet un warning "unchecked", mais ne bloque pas.
			Si vous voyez un type brut dans du code moderne, c'est un signal d'alarme : dette technique,
			code legacy, ou développeur qui n'a pas compris les génériques. Dans du code neuf, c'est interdit.`,x;return t=new Z({props:{$$slots:{default:[Yr]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.textContent=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-2g613o"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-nkefe0"&&(i.textContent=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-pcab9q"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4 text-red-400"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function yr(_){let e,o="Bonnes pratiques ✅",s,t,p='<li class="fragment">Programmer contre des interfaces génériques : <code>List&lt;Produit&gt;</code>, pas <code>ArrayList&lt;Produit&gt;</code></li> <li class="fragment">Nommer les paramètres de type clairement si <code>T</code> ne suffit pas (<code>K</code>/<code>V</code>, <code>E</code>, <code>R</code>)</li> <li class="fragment">N&#39;utiliser les wildcards que quand ils résolvent un <span class="text-important">vrai</span> problème d&#39;API</li> <li class="fragment">❌ Jamais de raw types dans du code neuf</li>',i,u,m=`🎯 Règle d'or : l'objectif n'est pas d'utiliser la syntaxe la plus "maligne", mais de rendre
			l'API lisible pour toute l'équipe. Si un collègue doit passer 5 minutes à comprendre
			votre signature, c'est probablement trop compliqué.
			Effective Java (Bloch, Item 31) : "Use bounded wildcards to increase API flexibility".`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-sgyguo"&&(e.textContent=o),s=d(n),t=C(n,"UL",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-lola3"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-ek11tf"&&(u.textContent=m),this.h()},h(){w(t,"class","text-xl mt-6"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function eu(_){let e,o="Ce qu'il faut retenir 🎯",s,t,p='<div><p class="fragment">🛡️ La généricité déplace les bugs de l&#39;exécution vers la <span class="text-important">compilation</span></p> <p class="fragment mt-4">🔁 Elle rend les API réutilisables sans perdre le type métier</p></div> <div><p class="fragment">📏 Les bornes et wildcards servent à écrire des signatures plus souples</p> <p class="fragment mt-4">🧠 PECS = le mémo à retenir pour les wildcards</p></div>',i,u,m=`💡 Si cette partie est bien comprise, le chapitre Collections devient naturel :
			List<Produit>, Map<String, Client>, Set<Commande>… tout se met en place.
			Si elle n'est pas comprise, les collections ressemblent à un catalogue de classes sans logique.
			Prenez le temps de poser vos questions maintenant !`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1yqpsne"&&(e.textContent=o),s=d(n),t=C(n,"DIV",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1pxlbmz"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-xurthn"&&(u.textContent=m),this.h()},h(){w(t,"class","grid grid-cols-2 gap-8 mt-8 text-xl"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function tu(_){let e,o="Généricité",s,t,p,i,u,m,n,$,x,l,f,L,c,b,I,E,O,A,D,B,V,K,ie,j,se,_e,be,he,Pe,xe,we,ge,qe,ee,me,te,ve,le,de,He,Ee,Se,Ae,y,pe,Y,ce,Me,Ie,Te,De,X,fe,je,ze,ke,Oe,Ve,Ue,Re,W,Ce,Be,Je,Ne,N,oe;return t=new z({props:{data_background_gradient:"linear-gradient(135deg, rgb(37 99 235), rgb(14 165 233))",$$slots:{default:[Qa]},$$scope:{ctx:_}}}),i=new z({props:{$$slots:{default:[Wa]},$$scope:{ctx:_}}}),m=new z({props:{$$slots:{default:[Ya]},$$scope:{ctx:_}}}),$=new z({props:{$$slots:{default:[ya]},$$scope:{ctx:_}}}),l=new z({props:{$$slots:{default:[er]},$$scope:{ctx:_}}}),L=new z({props:{$$slots:{default:[sr]},$$scope:{ctx:_}}}),b=new z({props:{$$slots:{default:[nr]},$$scope:{ctx:_}}}),E=new z({props:{$$slots:{default:[ar]},$$scope:{ctx:_}}}),A=new z({props:{$$slots:{default:[or]},$$scope:{ctx:_}}}),B=new z({props:{$$slots:{default:[fr]},$$scope:{ctx:_}}}),K=new z({props:{$$slots:{default:[pr]},$$scope:{ctx:_}}}),j=new z({props:{$$slots:{default:[dr]},$$scope:{ctx:_}}}),_e=new z({props:{$$slots:{default:[xr]},$$scope:{ctx:_}}}),he=new z({props:{$$slots:{default:[Cr]},$$scope:{ctx:_}}}),xe=new z({props:{$$slots:{default:[hr]},$$scope:{ctx:_}}}),ge=new z({props:{$$slots:{default:[Lr]},$$scope:{ctx:_}}}),ee=new z({props:{$$slots:{default:[Pr]},$$scope:{ctx:_}}}),te=new z({props:{$$slots:{default:[Sr]},$$scope:{ctx:_}}}),le=new z({props:{$$slots:{default:[Tr]},$$scope:{ctx:_}}}),He=new z({props:{$$slots:{default:[Ar]},$$scope:{ctx:_}}}),Se=new z({props:{$$slots:{default:[Dr]},$$scope:{ctx:_}}}),y=new z({props:{$$slots:{default:[kr]},$$scope:{ctx:_}}}),Y=new z({props:{$$slots:{default:[zr]},$$scope:{ctx:_}}}),Me=new z({props:{$$slots:{default:[Rr]},$$scope:{ctx:_}}}),Te=new z({props:{$$slots:{default:[Ur]},$$scope:{ctx:_}}}),X=new z({props:{$$slots:{default:[Br]},$$scope:{ctx:_}}}),je=new z({props:{$$slots:{default:[Fr]},$$scope:{ctx:_}}}),ke=new z({props:{$$slots:{default:[Qr]},$$scope:{ctx:_}}}),Ve=new z({props:{$$slots:{default:[Wr]},$$scope:{ctx:_}}}),Re=new z({props:{$$slots:{default:[Xr]},$$scope:{ctx:_}}}),Ce=new z({props:{$$slots:{default:[Zr]},$$scope:{ctx:_}}}),Je=new z({props:{$$slots:{default:[yr]},$$scope:{ctx:_}}}),N=new z({props:{$$slots:{default:[eu]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),T(i.$$.fragment),u=v(),T(m.$$.fragment),n=v(),T($.$$.fragment),x=v(),T(l.$$.fragment),f=v(),T(L.$$.fragment),c=v(),T(b.$$.fragment),I=v(),T(E.$$.fragment),O=v(),T(A.$$.fragment),D=v(),T(B.$$.fragment),V=v(),T(K.$$.fragment),ie=v(),T(j.$$.fragment),se=v(),T(_e.$$.fragment),be=v(),T(he.$$.fragment),Pe=v(),T(xe.$$.fragment),we=v(),T(ge.$$.fragment),qe=v(),T(ee.$$.fragment),me=v(),T(te.$$.fragment),ve=v(),T(le.$$.fragment),de=v(),T(He.$$.fragment),Ee=v(),T(Se.$$.fragment),Ae=v(),T(y.$$.fragment),pe=v(),T(Y.$$.fragment),ce=v(),T(Me.$$.fragment),Ie=v(),T(Te.$$.fragment),De=v(),T(X.$$.fragment),fe=v(),T(je.$$.fragment),ze=v(),T(ke.$$.fragment),Oe=v(),T(Ve.$$.fragment),Ue=v(),T(Re.$$.fragment),W=v(),T(Ce.$$.fragment),Be=v(),T(Je.$$.fragment),Ne=v(),T(N.$$.fragment)},l(F){e=C(F,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1konbvn"&&(e.textContent=o),s=d(F),M(t.$$.fragment,F),p=d(F),M(i.$$.fragment,F),u=d(F),M(m.$$.fragment,F),n=d(F),M($.$$.fragment,F),x=d(F),M(l.$$.fragment,F),f=d(F),M(L.$$.fragment,F),c=d(F),M(b.$$.fragment,F),I=d(F),M(E.$$.fragment,F),O=d(F),M(A.$$.fragment,F),D=d(F),M(B.$$.fragment,F),V=d(F),M(K.$$.fragment,F),ie=d(F),M(j.$$.fragment,F),se=d(F),M(_e.$$.fragment,F),be=d(F),M(he.$$.fragment,F),Pe=d(F),M(xe.$$.fragment,F),we=d(F),M(ge.$$.fragment,F),qe=d(F),M(ee.$$.fragment,F),me=d(F),M(te.$$.fragment,F),ve=d(F),M(le.$$.fragment,F),de=d(F),M(He.$$.fragment,F),Ee=d(F),M(Se.$$.fragment,F),Ae=d(F),M(y.$$.fragment,F),pe=d(F),M(Y.$$.fragment,F),ce=d(F),M(Me.$$.fragment,F),Ie=d(F),M(Te.$$.fragment,F),De=d(F),M(X.$$.fragment,F),fe=d(F),M(je.$$.fragment,F),ze=d(F),M(ke.$$.fragment,F),Oe=d(F),M(Ve.$$.fragment,F),Ue=d(F),M(Re.$$.fragment,F),W=d(F),M(Ce.$$.fragment,F),Be=d(F),M(Je.$$.fragment,F),Ne=d(F),M(N.$$.fragment,F)},m(F,$e){r(F,e,$e),r(F,s,$e),S(t,F,$e),r(F,p,$e),S(i,F,$e),r(F,u,$e),S(m,F,$e),r(F,n,$e),S($,F,$e),r(F,x,$e),S(l,F,$e),r(F,f,$e),S(L,F,$e),r(F,c,$e),S(b,F,$e),r(F,I,$e),S(E,F,$e),r(F,O,$e),S(A,F,$e),r(F,D,$e),S(B,F,$e),r(F,V,$e),S(K,F,$e),r(F,ie,$e),S(j,F,$e),r(F,se,$e),S(_e,F,$e),r(F,be,$e),S(he,F,$e),r(F,Pe,$e),S(xe,F,$e),r(F,we,$e),S(ge,F,$e),r(F,qe,$e),S(ee,F,$e),r(F,me,$e),S(te,F,$e),r(F,ve,$e),S(le,F,$e),r(F,de,$e),S(He,F,$e),r(F,Ee,$e),S(Se,F,$e),r(F,Ae,$e),S(y,F,$e),r(F,pe,$e),S(Y,F,$e),r(F,ce,$e),S(Me,F,$e),r(F,Ie,$e),S(Te,F,$e),r(F,De,$e),S(X,F,$e),r(F,fe,$e),S(je,F,$e),r(F,ze,$e),S(ke,F,$e),r(F,Oe,$e),S(Ve,F,$e),r(F,Ue,$e),S(Re,F,$e),r(F,W,$e),S(Ce,F,$e),r(F,Be,$e),S(Je,F,$e),r(F,Ne,$e),S(N,F,$e),oe=!0},p(F,$e){const Ze={};$e&1&&(Ze.$$scope={dirty:$e,ctx:F}),t.$set(Ze);const Fe={};$e&1&&(Fe.$$scope={dirty:$e,ctx:F}),i.$set(Fe);const ye={};$e&1&&(ye.$$scope={dirty:$e,ctx:F}),m.$set(ye);const J={};$e&1&&(J.$$scope={dirty:$e,ctx:F}),$.$set(J);const ue={};$e&1&&(ue.$$scope={dirty:$e,ctx:F}),l.$set(ue);const et={};$e&1&&(et.$$scope={dirty:$e,ctx:F}),L.$set(et);const tt={};$e&1&&(tt.$$scope={dirty:$e,ctx:F}),b.$set(tt);const st={};$e&1&&(st.$$scope={dirty:$e,ctx:F}),E.$set(st);const U={};$e&1&&(U.$$scope={dirty:$e,ctx:F}),A.$set(U);const re={};$e&1&&(re.$$scope={dirty:$e,ctx:F}),B.$set(re);const nt={};$e&1&&(nt.$$scope={dirty:$e,ctx:F}),K.$set(nt);const lt={};$e&1&&(lt.$$scope={dirty:$e,ctx:F}),j.$set(lt);const it={};$e&1&&(it.$$scope={dirty:$e,ctx:F}),_e.$set(it);const R={};$e&1&&(R.$$scope={dirty:$e,ctx:F}),he.$set(R);const ae={};$e&1&&(ae.$$scope={dirty:$e,ctx:F}),xe.$set(ae);const at={};$e&1&&(at.$$scope={dirty:$e,ctx:F}),ge.$set(at);const rt={};$e&1&&(rt.$$scope={dirty:$e,ctx:F}),ee.$set(rt);const ut={};$e&1&&(ut.$$scope={dirty:$e,ctx:F}),te.$set(ut);const ot={};$e&1&&(ot.$$scope={dirty:$e,ctx:F}),le.$set(ot);const $t={};$e&1&&($t.$$scope={dirty:$e,ctx:F}),He.$set($t);const ft={};$e&1&&(ft.$$scope={dirty:$e,ctx:F}),Se.$set(ft);const ct={};$e&1&&(ct.$$scope={dirty:$e,ctx:F}),y.$set(ct);const pt={};$e&1&&(pt.$$scope={dirty:$e,ctx:F}),Y.$set(pt);const mt={};$e&1&&(mt.$$scope={dirty:$e,ctx:F}),Me.$set(mt);const dt={};$e&1&&(dt.$$scope={dirty:$e,ctx:F}),Te.$set(dt);const vt={};$e&1&&(vt.$$scope={dirty:$e,ctx:F}),X.$set(vt);const xt={};$e&1&&(xt.$$scope={dirty:$e,ctx:F}),je.$set(xt);const _t={};$e&1&&(_t.$$scope={dirty:$e,ctx:F}),ke.$set(_t);const Ct={};$e&1&&(Ct.$$scope={dirty:$e,ctx:F}),Ve.$set(Ct);const gt={};$e&1&&(gt.$$scope={dirty:$e,ctx:F}),Re.$set(gt);const ht={};$e&1&&(ht.$$scope={dirty:$e,ctx:F}),Ce.$set(ht);const bt={};$e&1&&(bt.$$scope={dirty:$e,ctx:F}),Je.$set(bt);const Lt={};$e&1&&(Lt.$$scope={dirty:$e,ctx:F}),N.$set(Lt)},i(F){oe||(H(t.$$.fragment,F),H(i.$$.fragment,F),H(m.$$.fragment,F),H($.$$.fragment,F),H(l.$$.fragment,F),H(L.$$.fragment,F),H(b.$$.fragment,F),H(E.$$.fragment,F),H(A.$$.fragment,F),H(B.$$.fragment,F),H(K.$$.fragment,F),H(j.$$.fragment,F),H(_e.$$.fragment,F),H(he.$$.fragment,F),H(xe.$$.fragment,F),H(ge.$$.fragment,F),H(ee.$$.fragment,F),H(te.$$.fragment,F),H(le.$$.fragment,F),H(He.$$.fragment,F),H(Se.$$.fragment,F),H(y.$$.fragment,F),H(Y.$$.fragment,F),H(Me.$$.fragment,F),H(Te.$$.fragment,F),H(X.$$.fragment,F),H(je.$$.fragment,F),H(ke.$$.fragment,F),H(Ve.$$.fragment,F),H(Re.$$.fragment,F),H(Ce.$$.fragment,F),H(Je.$$.fragment,F),H(N.$$.fragment,F),oe=!0)},o(F){P(t.$$.fragment,F),P(i.$$.fragment,F),P(m.$$.fragment,F),P($.$$.fragment,F),P(l.$$.fragment,F),P(L.$$.fragment,F),P(b.$$.fragment,F),P(E.$$.fragment,F),P(A.$$.fragment,F),P(B.$$.fragment,F),P(K.$$.fragment,F),P(j.$$.fragment,F),P(_e.$$.fragment,F),P(he.$$.fragment,F),P(xe.$$.fragment,F),P(ge.$$.fragment,F),P(ee.$$.fragment,F),P(te.$$.fragment,F),P(le.$$.fragment,F),P(He.$$.fragment,F),P(Se.$$.fragment,F),P(y.$$.fragment,F),P(Y.$$.fragment,F),P(Me.$$.fragment,F),P(Te.$$.fragment,F),P(X.$$.fragment,F),P(je.$$.fragment,F),P(ke.$$.fragment,F),P(Ve.$$.fragment,F),P(Re.$$.fragment,F),P(Ce.$$.fragment,F),P(Je.$$.fragment,F),P(N.$$.fragment,F),oe=!1},d(F){F&&(a(e),a(s),a(p),a(u),a(n),a(x),a(f),a(c),a(I),a(O),a(D),a(V),a(ie),a(se),a(be),a(Pe),a(we),a(qe),a(me),a(ve),a(de),a(Ee),a(Ae),a(pe),a(ce),a(Ie),a(De),a(fe),a(ze),a(Oe),a(Ue),a(W),a(Be),a(Ne)),q(t,F),q(i,F),q(m,F),q($,F),q(l,F),q(L,F),q(b,F),q(E,F),q(A,F),q(B,F),q(K,F),q(j,F),q(_e,F),q(he,F),q(xe,F),q(ge,F),q(ee,F),q(te,F),q(le,F),q(He,F),q(Se,F),q(y,F),q(Y,F),q(Me,F),q(Te,F),q(X,F),q(je,F),q(ke,F),q(Ve,F),q(Re,F),q(Ce,F),q(Je,F),q(N,F)}}}function su(_){let e,o;return e=new z({props:{$$slots:{default:[tu]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const p={};t&1&&(p.$$scope={dirty:t,ctx:s}),e.$set(p)},i(s){o||(H(e.$$.fragment,s),o=!0)},o(s){P(e.$$.fragment,s),o=!1},d(s){q(e,s)}}}class lu extends Xe{constructor(e){super(),Ye(this,e,null,su,We,{})}}function nu(_){let e,o="Traiter les données sans noyer l'intention",s,t,p="Là où Java moderne devient vraiment agréable à lire",i,u,m=`On arrive à la partie qui transforme la façon d'écrire le code métier. Les lambdas et les streams
			ne remplacent pas la POO, ils la complètent.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H2",{"data-svelte-h":!0}),h(e)!=="svelte-1imlfv2"&&(e.textContent=o),s=d(n),t=C(n,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-8f94zv"&&(t.textContent=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-okgj6f"&&(u.textContent=m),this.h()},h(){w(t,"class","text-2xl text-gray-200"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function iu(_){let e=`
Collections.sort(catalogue, new Comparator<Produit>() {
    @Override
    public int compare(Produit a, Produit b) {
        return Double.compare(a.prix(), b.prix());
    }
});
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function au(_){let e,o="Pourquoi les lambdas ?",s,t,p,i,u="Beaucoup de bruit pour exprimer une règle très simple.",m,n,$=`Avant Java 8, on écrivait beaucoup de classes anonymes. C'est verbeux et cela masque la vraie
			intention métier.`,x;return t=new Z({props:{$$slots:{default:[iu]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.textContent=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-urhko5"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-klfr4j"&&(i.textContent=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-dqahtu"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function ru(_){let e=`
catalogue.sort((a, b) -> Double.compare(a.prix(), b.prix()));
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function uu(_){let e,o="La version lambda",s,t,p,i,u='On lit enfin la règle métier : <span class="text-important">trier par prix</span>.',m,n,$="La lambda retire le cérémonial inutile. Elle met en avant la logique importante, pas le conteneur.",x;return t=new Z({props:{$$slots:{default:[ru]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-11nw40o"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-glol5v"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-b0dh55"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-6 text-2xl"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function ou(_){let e=`
(parametres) -> expression
(parametres) -> {
    instructions;
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function $u(_){let e,o="Une lambda, c'est quoi ?",s,t,p="Une fonction anonyme qu'on peut passer comme valeur.",i,u,m,n,$=`En pratique, on fournit un comportement à une API : comment trier, comment filtrer, que faire
			pour chaque élément, comment transformer une valeur.`,x;return u=new Z({props:{$$slots:{default:[ou]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),T(u.$$.fragment),m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-kdrknk"&&(e.textContent=o),s=d(l),t=C(l,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-zd753m"&&(t.textContent=p),i=d(l),M(u.$$.fragment,l),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-8dduuo"&&(n.textContent=$),this.h()},h(){w(t,"class","text-2xl"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),S(u,l,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),u.$set(L)},i(l){x||(H(u.$$.fragment,l),x=!0)},o(l){P(u.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(t),a(i),a(m),a(n)),q(u,l)}}}function fu(_){let e=`
() -> System.out.println("Hello")
x -> x * 2
(a, b) -> a + b
(nom) -> {
    System.out.println(nom);
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function cu(_){let e,o="Exemples de syntaxe",s,t,p,i,u="Les types sont souvent inférés. Plus le contexte est clair, plus Java vous permet d'écrire court.",m;return t=new Z({props:{$$slots:{default:[fu]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("aside"),i.textContent=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-ll7qzm"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-1pr66ce"&&(i.textContent=u),this.h()},h(){w(i,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function pu(_){let e=`
@FunctionalInterface
interface CalculRemise {
    double appliquer(double montant);
}

CalculRemise remiseEtudiant = montant -> montant * 0.9;
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function mu(_){let e,o="Les lambdas s'appuient sur une interface fonctionnelle",s,t,p,i,u="Une interface fonctionnelle possède une seule méthode abstraite.",m,n,$="Le compilateur peut alors associer automatiquement la lambda à cette unique méthode.",x;return t=new Z({props:{$$slots:{default:[pu]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.textContent=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-jgb90d"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-5zm95q"&&(i.textContent=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1ylrbsq"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function du(_){let e,o="Interfaces fonctionnelles déjà fournies",s,t,p='<tbody><tr class="fragment"><td class="p-3"><code>Predicate&lt;T&gt;</code></td> <td class="p-3">Tester une condition</td></tr> <tr class="fragment"><td class="p-3"><code>Function&lt;T, R&gt;</code></td> <td class="p-3">Transformer une valeur</td></tr> <tr class="fragment"><td class="p-3"><code>Consumer&lt;T&gt;</code></td> <td class="p-3">Consommer une valeur sans rien retourner</td></tr> <tr class="fragment"><td class="p-3"><code>Supplier&lt;T&gt;</code></td> <td class="p-3">Produire une valeur</td></tr></tbody>',i,u,m=`Les connaître permet de lire et d'écrire énormément d'API modernes en Java sans créer d'interfaces
			personnalisées partout.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("table"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-e8wxth"&&(e.textContent=o),s=d(n),t=C(n,"TABLE",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-sst65i"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-qwcmhu"&&(u.textContent=m),this.h()},h(){w(t,"class","text-xl mt-6 w-full"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function vu(_){let e=`
Predicate<Produit> estCher = produit -> produit.prix() > 100;
Function<Produit, String> versReference = produit -> produit.reference();
Consumer<Produit> afficher = produit -> System.out.println(produit.reference());
Supplier<Produit> produitParDefaut = () -> new Produit("ND", 0);
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function xu(_){let e,o="Exemples concrets",s,t,p,i,u=`Très bon moment pour relier syntaxe et intention. Chaque interface fonctionnelle correspond à un
			verbe mental simple : tester, transformer, agir, fournir.`,m;return t=new Z({props:{$$slots:{default:[vu]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("aside"),i.textContent=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1yrhyzi"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-73kqlr"&&(i.textContent=u),this.h()},h(){w(i,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function _u(_){let e=`
catalogue.removeIf(produit -> produit.prix() <= 0);
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Cu(_){let e,o="Un exemple très concret : <code>removeIf</code>",s,t,p,i,u="Une lambda permet ici d'exprimer directement la règle de suppression.",m,n,$=`Bon exemple pour montrer que les lambdas ne vivent pas seulement dans les streams. Elles sont
			partout où une API attend un comportement ciblé.`,x;return t=new Z({props:{$$slots:{default:[_u]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.innerHTML=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.textContent=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1k9uus4"&&(e.innerHTML=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-1ksdas6"&&(i.textContent=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-e3e26u"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function gu(_){let e=`
produits.forEach(produit ->
    System.out.println(produit)
);
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function hu(_){let e=`
produits.forEach(System.out::println);
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function bu(_){let e,o="Référence de méthode",s,t,p,i,u="Lambda",m,n,$,x,l,f="Référence",L,c,b,I,E=`Quand la lambda ne fait qu'appeler une méthode existante avec les mêmes paramètres, la référence
			de méthode est souvent plus lisible. C'est un raccourci syntaxique, pas une nouvelle fonctionnalité.`,O;return n=new Z({props:{$$slots:{default:[gu]},$$scope:{ctx:_}}}),c=new Z({props:{$$slots:{default:[hu]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),p=g("div"),i=g("h4"),i.textContent=u,m=v(),T(n.$$.fragment),$=v(),x=g("div"),l=g("h4"),l.textContent=f,L=v(),T(c.$$.fragment),b=v(),I=g("aside"),I.textContent=E,this.h()},l(A){e=C(A,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-y1qlls"&&(e.textContent=o),s=d(A),t=C(A,"DIV",{class:!0});var D=Le(t);p=C(D,"DIV",{});var B=Le(p);i=C(B,"H4",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-fqngxk"&&(i.textContent=u),m=d(B),M(n.$$.fragment,B),B.forEach(a),$=d(D),x=C(D,"DIV",{});var V=Le(x);l=C(V,"H4",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-1iz030k"&&(l.textContent=f),L=d(V),M(c.$$.fragment,V),V.forEach(a),D.forEach(a),b=d(A),I=C(A,"ASIDE",{class:!0,"data-svelte-h":!0}),h(I)!=="svelte-1m4pe7c"&&(I.textContent=E),this.h()},h(){w(i,"class","text-red-400"),w(l,"class","text-green-400"),w(t,"class","grid grid-cols-2 gap-6 mt-6"),w(I,"class","notes")},m(A,D){r(A,e,D),r(A,s,D),r(A,t,D),ne(t,p),ne(p,i),ne(p,m),S(n,p,null),ne(t,$),ne(t,x),ne(x,l),ne(x,L),S(c,x,null),r(A,b,D),r(A,I,D),O=!0},p(A,D){const B={};D&1&&(B.$$scope={dirty:D,ctx:A}),n.$set(B);const V={};D&1&&(V.$$scope={dirty:D,ctx:A}),c.$set(V)},i(A){O||(H(n.$$.fragment,A),H(c.$$.fragment,A),O=!0)},o(A){P(n.$$.fragment,A),P(c.$$.fragment,A),O=!1},d(A){A&&(a(e),a(s),a(t),a(b),a(I)),q(n),q(c)}}}function Lu(_){let e,o="Les 4 types de références",s,t,p='<tbody><tr class="fragment"><td class="p-3">Méthode statique</td> <td class="p-3 text-accent-200"><code>Integer::parseInt</code></td></tr> <tr class="fragment"><td class="p-3">Méthode d&#39;instance (objet précis)</td> <td class="p-3 text-accent-200"><code>System.out::println</code></td></tr> <tr class="fragment"><td class="p-3">Méthode d&#39;instance (type arbitraire)</td> <td class="p-3 text-accent-200"><code>String::toUpperCase</code></td></tr> <tr class="fragment"><td class="p-3">Constructeur</td> <td class="p-3 text-accent-200"><code>ArrayList::new</code></td></tr></tbody>',i,u,m=`🎯 Les quatre formes à connaître. La plus surprenante est la référence de constructeur :
			ArrayList::new est équivalent à () -> new ArrayList<>(). On la croise souvent avec
			Collectors.toCollection(TreeSet::new) ou Supplier<T> en paramètre.
			String::toUpperCase est du type "instance method via le type" : Java comprend que
			la lambda implicite sera str -> str.toUpperCase().`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("table"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-3x9gb4"&&(e.textContent=o),s=d(n),t=C(n,"TABLE",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1kjp2vi"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-pcumz3"&&(u.textContent=m),this.h()},h(){w(t,"class","text-xl mt-6 w-full"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function wu(_){let e=`
double taux = 0.2;

Function<Double, Double> ttc = prix -> prix * (1 + taux);

// taux = 0.25; // Erreur si on le modifie ensuite
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function qu(_){let e,o="La règle “effectively final”",s,t,p,i,u="Une lambda peut lire une variable locale, pas la faire évoluer librement.",m,n,$=`Il faut éviter d'expliquer ça comme une punition syntaxique. C'est une règle de sécurité et de
			cohérence sur la capture des variables.`,x;return t=new Z({props:{$$slots:{default:[wu]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.textContent=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-ait6ye"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-1bdhuz5"&&(i.textContent=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1bx9unr"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function Pu(_){let e=`
catalogue.stream()
    .filter(produit -> produit.prix() > 100)
    .map(Produit::reference)
    .forEach(System.out::println);
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Hu(_){let e,o="Les Streams",s,t,p="Un stream décrit une chaîne de traitement sur des données.",i,u,m,n,$=`Idée centrale : on décrit ce qu'on veut faire sur un flux d'éléments, sans gérer à la main la
			boucle, l'index, l'accumulateur et les listes intermédiaires.`,x;return u=new Z({props:{$$slots:{default:[Pu]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),T(u.$$.fragment),m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-vz4svt"&&(e.textContent=o),s=d(l),t=C(l,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-n07s1q"&&(t.textContent=p),i=d(l),M(u.$$.fragment,l),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-bzy8ye"&&(n.textContent=$),this.h()},h(){w(t,"class","text-2xl"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),S(u,l,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),u.$set(L)},i(l){x||(H(u.$$.fragment,l),x=!0)},o(l){P(u.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(t),a(i),a(m),a(n)),q(u,l)}}}function Su(_){let e=`
Stream<Produit> flux = catalogue.stream();
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Mu(_){let e,o="Un stream ne stocke pas les données",s,t,p='Le stream est une <span class="text-important">vue de traitement</span>, pas une nouvelle collection.',i,u,m,n,$=`Important pour éviter une mauvaise intuition. Le stream n'est pas une structure métier durable,
			c'est un pipeline temporaire d'opérations.`,x;return u=new Z({props:{$$slots:{default:[Su]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment),m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-2b6u4r"&&(e.textContent=o),s=d(l),t=C(l,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-175qr52"&&(t.innerHTML=p),i=d(l),M(u.$$.fragment,l),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-2w7eoj"&&(n.textContent=$),this.h()},h(){w(t,"class","text-2xl"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),S(u,l,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),u.$set(L)},i(l){x||(H(u.$$.fragment,l),x=!0)},o(l){P(u.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(t),a(i),a(m),a(n)),q(u,l)}}}function Tu(_){let e=`
List<String> refs = new ArrayList<>();
for (Produit produit : catalogue) {
    if (produit.prix() > 100) {
        refs.add(produit.reference());
    }
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Eu(_){let e=`
List<String> refs = catalogue.stream()
    .filter(produit -> produit.prix() > 100)
    .map(Produit::reference)
    .toList();
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Au(_){let e,o="Avant / après",s,t,p,i,u="Impératif",m,n,$,x,l,f="Déclaratif",L,c,b,I,E=`Le stream n'est pas “magique”. Il externalise simplement le parcours et rend la chaîne d'intention
			plus visible. Ce n'est pas toujours plus court, mais c'est souvent plus lisible.`,O;return n=new Z({props:{$$slots:{default:[Tu]},$$scope:{ctx:_}}}),c=new Z({props:{$$slots:{default:[Eu]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),p=g("div"),i=g("h4"),i.textContent=u,m=v(),T(n.$$.fragment),$=v(),x=g("div"),l=g("h4"),l.textContent=f,L=v(),T(c.$$.fragment),b=v(),I=g("aside"),I.textContent=E,this.h()},l(A){e=C(A,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1r3502x"&&(e.textContent=o),s=d(A),t=C(A,"DIV",{class:!0});var D=Le(t);p=C(D,"DIV",{});var B=Le(p);i=C(B,"H4",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-qts8ce"&&(i.textContent=u),m=d(B),M(n.$$.fragment,B),B.forEach(a),$=d(D),x=C(D,"DIV",{});var V=Le(x);l=C(V,"H4",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-1hp84jm"&&(l.textContent=f),L=d(V),M(c.$$.fragment,V),V.forEach(a),D.forEach(a),b=d(A),I=C(A,"ASIDE",{class:!0,"data-svelte-h":!0}),h(I)!=="svelte-1hi3l1v"&&(I.textContent=E),this.h()},h(){w(i,"class","text-red-400"),w(l,"class","text-green-400"),w(t,"class","grid grid-cols-2 gap-6 mt-6"),w(I,"class","notes")},m(A,D){r(A,e,D),r(A,s,D),r(A,t,D),ne(t,p),ne(p,i),ne(p,m),S(n,p,null),ne(t,$),ne(t,x),ne(x,l),ne(x,L),S(c,x,null),r(A,b,D),r(A,I,D),O=!0},p(A,D){const B={};D&1&&(B.$$scope={dirty:D,ctx:A}),n.$set(B);const V={};D&1&&(V.$$scope={dirty:D,ctx:A}),c.$set(V)},i(A){O||(H(n.$$.fragment,A),H(c.$$.fragment,A),O=!0)},o(A){P(n.$$.fragment,A),P(c.$$.fragment,A),O=!1},d(A){A&&(a(e),a(s),a(t),a(b),a(I)),q(n),q(c)}}}function Iu(_){let e,o="Deux familles d'opérations",s,t,p='<div class="p-5 rounded-xl bg-accent-950"><h4 class="text-blue-400">Intermédiaires</h4> <p class="mt-3"><code>filter</code>, <code>map</code>, <code>sorted</code>, <code>distinct</code></p></div> <div class="p-5 rounded-xl bg-accent-950"><h4 class="text-green-400">Terminales</h4> <p class="mt-3"><code>toList</code>, <code>forEach</code>, <code>count</code>, <code>reduce</code></p></div>',i,u,m="Tant qu'il n'y a pas d'opération terminale, le pipeline n'est pas réellement exécuté.";return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-oaiflo"&&(e.textContent=o),s=d(n),t=C(n,"DIV",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-qfwaoi"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-mtw98i"&&(u.textContent=m),this.h()},h(){w(t,"class","grid grid-cols-2 gap-6 mt-6"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function Du(_){let e=`
catalogue.stream()
    .filter(produit -> {
        System.out.println("test " + produit.reference());
        return produit.prix() > 100;
    });
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function ju(_){let e,o="Exécution paresseuse",s,t,p,i,u="Ici, rien ne s'affiche : il manque une opération terminale.",m,n,$=`Très bon moment “ah oui”. Tant que le résultat final n'est pas demandé, le pipeline reste une
			description d'intention.`,x;return t=new Z({props:{$$slots:{default:[Du]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.textContent=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-oqcc"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-iazj3v"&&(i.textContent=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1igauxm"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4 text-red-400"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function ku(_){let e=`
List<Produit> chers = catalogue.stream()
    .filter(produit -> produit.prix() >= 100)
    .toList();
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Ou(_){let e,o="<code>filter</code>",s,t,p,i,u="On garde uniquement les éléments qui passent le test.",m,n,$="Très proche d'une clause WHERE en SQL. C'est généralement l'opération la plus facile à comprendre.",x;return t=new Z({props:{$$slots:{default:[ku]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.innerHTML=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.textContent=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-6ut9gv"&&(e.innerHTML=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-1j1zjc9"&&(i.textContent=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-z3tz14"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function zu(_){let e=`
List<String> references = catalogue.stream()
    .map(Produit::reference)
    .toList();
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Vu(_){let e,o="<code>map</code>",s,t,p,i,u="On transforme chaque élément en une autre représentation.",m,n,$=`Ici on passe d'une liste de Produit à une liste de String. Très utile pour préparer un affichage,
			un export ou une API.`,x;return t=new Z({props:{$$slots:{default:[zu]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.innerHTML=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.textContent=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-ob5fkl"&&(e.innerHTML=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-fehh7n"&&(i.textContent=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-6awy36"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function Ru(_){let e=`
List<Commande> commandes = List.of(commande1, commande2);

List<Produit> tousProduits = commandes.stream()
    .flatMap(commande -> commande.produits().stream())
    .toList();
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Uu(_){let e,o="<code>flatMap</code> — aplatir les structures imbriquées",s,t,p,i,u="Chaque commande contient une liste → <code>flatMap</code> &quot;déplie&quot; tout en un seul flux.",m,n,$=`📦 Imaginez des cartons de livraison : chaque carton contient plusieurs articles.
			map() vous donnerait une liste de cartons, flatMap() ouvre chaque carton et met
			tous les articles sur le même tapis roulant. C'est indispensable dès qu'on a des
			structures imbriquées : commandes → lignes, classes → méthodes, dossiers → fichiers.
			Sans flatMap, on se retrouve avec des Stream<Stream<T>> inutilisables.`,x;return t=new Z({props:{$$slots:{default:[Ru]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.innerHTML=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-dwfhv3"&&(e.innerHTML=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-1s02puj"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-7o3qmz"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function Ju(_){let e=`
List<String> referencesTriees = catalogue.stream()
    .map(Produit::reference)
    .distinct()
    .sorted()
    .toList();
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Bu(_){let e,o="<code>sorted</code> et <code>distinct</code>",s,t,p,i,u=`Pipeline très parlant : on extrait, on enlève les doublons, on trie. Chaque étape a une intention
			précise.`,m;return t=new Z({props:{$$slots:{default:[Ju]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.innerHTML=o,s=v(),T(t.$$.fragment),p=v(),i=g("aside"),i.textContent=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-oqln32"&&(e.innerHTML=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-1l9eo7j"&&(i.textContent=u),this.h()},h(){w(i,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function Nu(_){let e=`
long nbPromos = catalogue.stream()
    .filter(produit -> produit.prix() < 20)
    .count();

boolean auMoinsUnCher = catalogue.stream()
    .anyMatch(produit -> produit.prix() > 500);
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Fu(_){let e,o="<code>count</code>, <code>anyMatch</code>, <code>allMatch</code>",s,t,p,i,u=`Très utile pour des règles métier simples : y a-t-il au moins un élément ? Tous respectent-ils
			la contrainte ? Combien sont concernés ?`,m;return t=new Z({props:{$$slots:{default:[Nu]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.innerHTML=o,s=v(),T(t.$$.fragment),p=v(),i=g("aside"),i.textContent=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-l5it1n"&&(e.innerHTML=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-ikfghv"&&(i.textContent=u),this.h()},h(){w(i,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function Gu(_){let e=`
double total = catalogue.stream()
    .map(Produit::prix)
    .reduce(0.0, Double::sum);
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Qu(_){let e,o="<code>reduce</code>",s,t,p,i,u="On agrège un ensemble de valeurs en un résultat unique.",m,n,$=`La plupart du temps, pour les nombres, map + reduce est très lisible. On peut aussi utiliser des
			méthodes spécialisées comme mapToDouble().sum().`,x;return t=new Z({props:{$$slots:{default:[Gu]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.innerHTML=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.textContent=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-hlx4xb"&&(e.innerHTML=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-nh32oc"&&(i.textContent=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1lvdekx"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function Ku(_){let e=`
double total = catalogue.stream()
    .mapToDouble(Produit::prix)
    .sum();
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Wu(_){let e,o="Version spécialisée pour les nombres",s,t,p,i,u="Quand l'intention est purement numérique, l'API dédiée est souvent la plus lisible.",m,n,$=`Bon réflexe pour éviter des pipelines trop verbeux. Il faut montrer qu'on choisit aussi parmi les
			formes disponibles.`,x;return t=new Z({props:{$$slots:{default:[Ku]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.textContent=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-ga9ubj"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-koh8ig"&&(i.textContent=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1t3jpg3"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function Xu(_){let e=`
List<String> refs = catalogue.stream()
    .map(Produit::reference)
    .toList();

Set<String> refsUniques = catalogue.stream()
    .map(Produit::reference)
    .collect(Collectors.toSet());
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Yu(_){let e,o="Collectors fréquents",s,t,p,i,u=`On montre à la fois toList(), moderne et simple, et Collectors.toSet() pour introduire les
			collecteurs plus riches.`,m;return t=new Z({props:{$$slots:{default:[Xu]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("aside"),i.textContent=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-mfrg3v"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-1d6hg3w"&&(i.textContent=u),this.h()},h(){w(i,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function Zu(_){let e=`
String listeReferences = catalogue.stream()
    .map(Produit::reference)
    .collect(Collectors.joining(", "));

// "CLAVIER, SOURIS, ECRAN"
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function yu(_){let e,o="<code>joining</code> — construire une chaîne",s,t,p,i,u="Idéal pour produire des affichages, des logs ou des exports CSV.",m,n,$=`🧵 Un des collecteurs les plus utilisés en pratique. Il remplace avantageusement les
			StringBuilder manuels avec des boucles et des "if pas le dernier, ajouter une virgule".
			On peut aussi passer un préfixe et un suffixe : joining(", ", "[", "]") → "[A, B, C]".`,x;return t=new Z({props:{$$slots:{default:[Zu]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.innerHTML=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.textContent=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-6xzlis"&&(e.innerHTML=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-cn9pq2"&&(i.textContent=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-145oud8"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function eo(_){let e=`
Map<String, Double> prixParRef = catalogue.stream()
    .collect(Collectors.toMap(
        Produit::reference,
        Produit::prix
    ));
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function to(_){let e,o="<code>toMap</code> — construire un dictionnaire",s,t,p,i,u="On passe d&#39;une liste à une <code>Map</code> en une seule opération.",m,n,$=`⚠️ Attention : si deux éléments ont la même clé, toMap lance une exception par défaut.
			Il faut alors passer un "merge function" en troisième paramètre :
			toMap(Produit::reference, Produit::prix, (a, b) -> a) pour garder le premier.
			C'est un piège classique en DS et en entreprise !`,x;return t=new Z({props:{$$slots:{default:[eo]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.innerHTML=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1xz3hpw"&&(e.innerHTML=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-4m7dl4"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-12t3s4i"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function so(_){let e=`
Map<String, List<Commande>> commandesParVille = commandes.stream()
    .collect(Collectors.groupingBy(Commande::villeLivraison));
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function lo(_){let e,o="<code>groupingBy</code>",s,t,p,i,u="Très utile pour préparer des statistiques, des rapports ou des tournées.",m,n,$="C'est l'un des collecteurs les plus “wow” pour les étudiants car il montre une vraie valeur métier.",x;return t=new Z({props:{$$slots:{default:[so]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.innerHTML=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.textContent=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-mdhj1p"&&(e.innerHTML=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-38nvao"&&(i.textContent=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1f86m9j"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function no(_){let e=`
Map<String, Long> nbCommandesParVille = commandes.stream()
    .collect(Collectors.groupingBy(
        Commande::villeLivraison,
        Collectors.counting()
    ));
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function io(_){let e,o="Préparer un tableau de bord",s,t,p,i,u="On produit directement une structure exploitable pour un reporting.",m,n,$=`On montre ici que les streams ne servent pas seulement à “faire joli”, mais à préparer des données
			très proches de ce qu'utilisent les équipes produit ou métier.`,x;return t=new Z({props:{$$slots:{default:[no]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.textContent=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-rli95y"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-1jhtzpy"&&(i.textContent=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1l0wzkv"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function ao(_){let e=`
Map<Boolean, List<Commande>> resultat = commandes.stream()
    .collect(Collectors.partitioningBy(Commande::estUrgente));
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function ro(_){let e,o="<code>partitioningBy</code>",s,t,p,i,u="On sépare en deux groupes : vrai / faux.",m,n,$="Très pratique dès qu'on a un critère binaire : urgent ou non, payé ou non, actif ou non.",x;return t=new Z({props:{$$slots:{default:[ao]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.innerHTML=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.textContent=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1tjvlsm"&&(e.innerHTML=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-p34r8h"&&(i.textContent=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-16tmblv"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function uo(_){let e,o="Attention : un stream ne remplace pas tout",s,t,p='<li class="fragment">Pour une logique simple, un <code>for</code> peut rester plus lisible</li> <li class="fragment">Un pipeline trop long devient illisible</li> <li class="fragment">Les effets de bord dans <code>map</code> ou <code>filter</code> sont à éviter</li>',i,u,m="Message important : on n'est pas dans la religion du stream. On choisit l'outil qui clarifie le code.";return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-4svldb"&&(e.textContent=o),s=d(n),t=C(n,"UL",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-duk7v4"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-c14tc7"&&(u.textContent=m),this.h()},h(){w(t,"class","text-xl mt-6"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function oo(_){let e=`
Optional<Client> client = annuaire.trouverParId("C001");
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function $o(_){let e,o="Optional",s,t,p,i,u="<code>Optional&lt;T&gt;</code> exprime explicitement : “il y a peut-être une valeur, peut-être pas”.",m,n,$=`Le but n'est pas de supprimer tout null du monde Java, mais de rendre l'absence explicite dans les
			points où elle est normale et attendue.`,x;return t=new Z({props:{$$slots:{default:[oo]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-d8idac"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-vivc60"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-a7jj2o"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function fo(_){let e=`
Client client = annuaire.trouverParId("C001")
    .orElse(new Client("INCONNU", "Client inconnu"));

annuaire.trouverParId("C002")
    .ifPresent(c -> System.out.println(c.nom()));
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function co(_){let e,o="Utilisation saine d'Optional",s,t,p,i,u=`Deux usages très fréquents : fournir une valeur par défaut, ou faire quelque chose seulement si la
			valeur existe.`,m;return t=new Z({props:{$$slots:{default:[fo]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("aside"),i.textContent=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1imsryo"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-p4win5"&&(i.textContent=u),this.h()},h(){w(i,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function po(_){let e=`
Client client = annuaire.trouverParId("C001")
    .orElseGet(() -> chargerClientParDefaut());
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function mo(_){let e,o="<code>orElse</code> vs <code>orElseGet</code>",s,t,p,i,u="<code>orElseGet</code> diffère le calcul de la valeur de secours jusqu&#39;au moment où elle est vraiment nécessaire.",m,n,$="Slide un peu plus avancée, mais utile pour montrer qu'Optional va plus loin qu'un simple test de null.",x;return t=new Z({props:{$$slots:{default:[po]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.innerHTML=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-15vz61j"&&(e.innerHTML=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-7tonj"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1eiktle"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function vo(_){let e,o="Quand ne pas utiliser Optional",s,t,p='<li class="fragment">Pas comme attribut de tous les objets métier</li> <li class="fragment">Pas pour éviter de prendre une vraie décision de conception</li> <li class="fragment">Surtout utile en retour de méthode, moins comme conteneur universel</li>',i,u,m="Très bon message de maturité. Optional n'est pas un sticker “code moderne” à coller partout.";return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-17946h1"&&(e.textContent=o),s=d(n),t=C(n,"UL",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1855lzk"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1h3h637"&&(u.textContent=m),this.h()},h(){w(t,"class","text-xl mt-6"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function xo(_){let e=`
Optional<Client> client = annuaire.trouverParId("C001");
Client c = client.get();
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function _o(_){let e,o="Le piège à éviter",s,t,p,i,u="<code>get()</code> sans test revient souvent à recréer un problème de null autrement.",m,n,$="Optional ne sert à rien si on l'utilise comme une boîte qu'on ouvre brutalement sans vérifier.",x;return t=new Z({props:{$$slots:{default:[xo]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-pu5thv"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-y9hmzb"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1v5ftmd"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4 text-red-400"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function Co(_){let e=`
String nom = annuaire.trouverParId("C001")
    .map(Client::nom)
    .orElse("Inconnu");
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function go(_){let e,o="Chaîner Optional et Stream",s,t,p,i,u="Même idée : transformer proprement sans cascade de <code>if (x != null)</code>.",m,n,$="Très bonne transition mentale : map sur Optional ressemble à map sur Stream, mais avec zéro ou un élément.",x;return t=new Z({props:{$$slots:{default:[Co]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-uudl3c"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-96fqg"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-a2eb4z"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function ho(_){let e,o="Ce qu'il faut retenir",s,t,p='<div><p class="fragment">Les lambdas permettent de passer un comportement</p> <p class="fragment">Les streams rendent les traitements lisibles par étapes</p></div> <div><p class="fragment">Optional rend l&#39;absence explicite</p> <p class="fragment">Le but final reste la lisibilité du code métier</p></div>',i,u,m=`La vraie question n'est jamais “est-ce que je peux écrire ça en stream ?”, mais “est-ce que cette
			forme aide mon équipe à comprendre le traitement ?”.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1c3ns5x"&&(e.textContent=o),s=d(n),t=C(n,"DIV",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-xx5fq3"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-t260zr"&&(u.textContent=m),this.h()},h(){w(t,"class","grid grid-cols-2 gap-8 mt-8 text-xl"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function bo(_){let e,o="Lambda, Streams et Optional",s,t,p,i,u,m,n,$,x,l,f,L,c,b,I,E,O,A,D,B,V,K,ie,j,se,_e,be,he,Pe,xe,we,ge,qe,ee,me,te,ve,le,de,He,Ee,Se,Ae,y,pe,Y,ce,Me,Ie,Te,De,X,fe,je,ze,ke,Oe,Ve,Ue,Re,W,Ce,Be,Je,Ne,N,oe,F,$e,Ze,Fe,ye,J,ue,et,tt,st;return t=new z({props:{data_background_gradient:"linear-gradient(135deg, rgb(180 83 9), rgb(194 65 12))",$$slots:{default:[nu]},$$scope:{ctx:_}}}),i=new z({props:{$$slots:{default:[au]},$$scope:{ctx:_}}}),m=new z({props:{$$slots:{default:[uu]},$$scope:{ctx:_}}}),$=new z({props:{$$slots:{default:[$u]},$$scope:{ctx:_}}}),l=new z({props:{$$slots:{default:[cu]},$$scope:{ctx:_}}}),L=new z({props:{$$slots:{default:[mu]},$$scope:{ctx:_}}}),b=new z({props:{$$slots:{default:[du]},$$scope:{ctx:_}}}),E=new z({props:{$$slots:{default:[xu]},$$scope:{ctx:_}}}),A=new z({props:{$$slots:{default:[Cu]},$$scope:{ctx:_}}}),B=new z({props:{$$slots:{default:[bu]},$$scope:{ctx:_}}}),K=new z({props:{$$slots:{default:[Lu]},$$scope:{ctx:_}}}),j=new z({props:{$$slots:{default:[qu]},$$scope:{ctx:_}}}),_e=new z({props:{$$slots:{default:[Hu]},$$scope:{ctx:_}}}),he=new z({props:{$$slots:{default:[Mu]},$$scope:{ctx:_}}}),xe=new z({props:{$$slots:{default:[Au]},$$scope:{ctx:_}}}),ge=new z({props:{$$slots:{default:[Iu]},$$scope:{ctx:_}}}),ee=new z({props:{$$slots:{default:[ju]},$$scope:{ctx:_}}}),te=new z({props:{$$slots:{default:[Ou]},$$scope:{ctx:_}}}),le=new z({props:{$$slots:{default:[Vu]},$$scope:{ctx:_}}}),He=new z({props:{$$slots:{default:[Uu]},$$scope:{ctx:_}}}),Se=new z({props:{$$slots:{default:[Bu]},$$scope:{ctx:_}}}),y=new z({props:{$$slots:{default:[Fu]},$$scope:{ctx:_}}}),Y=new z({props:{$$slots:{default:[Qu]},$$scope:{ctx:_}}}),Me=new z({props:{$$slots:{default:[Wu]},$$scope:{ctx:_}}}),Te=new z({props:{$$slots:{default:[Yu]},$$scope:{ctx:_}}}),X=new z({props:{$$slots:{default:[yu]},$$scope:{ctx:_}}}),je=new z({props:{$$slots:{default:[to]},$$scope:{ctx:_}}}),ke=new z({props:{$$slots:{default:[lo]},$$scope:{ctx:_}}}),Ve=new z({props:{$$slots:{default:[io]},$$scope:{ctx:_}}}),Re=new z({props:{$$slots:{default:[ro]},$$scope:{ctx:_}}}),Ce=new z({props:{$$slots:{default:[uo]},$$scope:{ctx:_}}}),Je=new z({props:{$$slots:{default:[$o]},$$scope:{ctx:_}}}),N=new z({props:{$$slots:{default:[co]},$$scope:{ctx:_}}}),F=new z({props:{$$slots:{default:[mo]},$$scope:{ctx:_}}}),Ze=new z({props:{$$slots:{default:[vo]},$$scope:{ctx:_}}}),ye=new z({props:{$$slots:{default:[_o]},$$scope:{ctx:_}}}),ue=new z({props:{$$slots:{default:[go]},$$scope:{ctx:_}}}),tt=new z({props:{$$slots:{default:[ho]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),T(i.$$.fragment),u=v(),T(m.$$.fragment),n=v(),T($.$$.fragment),x=v(),T(l.$$.fragment),f=v(),T(L.$$.fragment),c=v(),T(b.$$.fragment),I=v(),T(E.$$.fragment),O=v(),T(A.$$.fragment),D=v(),T(B.$$.fragment),V=v(),T(K.$$.fragment),ie=v(),T(j.$$.fragment),se=v(),T(_e.$$.fragment),be=v(),T(he.$$.fragment),Pe=v(),T(xe.$$.fragment),we=v(),T(ge.$$.fragment),qe=v(),T(ee.$$.fragment),me=v(),T(te.$$.fragment),ve=v(),T(le.$$.fragment),de=v(),T(He.$$.fragment),Ee=v(),T(Se.$$.fragment),Ae=v(),T(y.$$.fragment),pe=v(),T(Y.$$.fragment),ce=v(),T(Me.$$.fragment),Ie=v(),T(Te.$$.fragment),De=v(),T(X.$$.fragment),fe=v(),T(je.$$.fragment),ze=v(),T(ke.$$.fragment),Oe=v(),T(Ve.$$.fragment),Ue=v(),T(Re.$$.fragment),W=v(),T(Ce.$$.fragment),Be=v(),T(Je.$$.fragment),Ne=v(),T(N.$$.fragment),oe=v(),T(F.$$.fragment),$e=v(),T(Ze.$$.fragment),Fe=v(),T(ye.$$.fragment),J=v(),T(ue.$$.fragment),et=v(),T(tt.$$.fragment)},l(U){e=C(U,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1w6pxcr"&&(e.textContent=o),s=d(U),M(t.$$.fragment,U),p=d(U),M(i.$$.fragment,U),u=d(U),M(m.$$.fragment,U),n=d(U),M($.$$.fragment,U),x=d(U),M(l.$$.fragment,U),f=d(U),M(L.$$.fragment,U),c=d(U),M(b.$$.fragment,U),I=d(U),M(E.$$.fragment,U),O=d(U),M(A.$$.fragment,U),D=d(U),M(B.$$.fragment,U),V=d(U),M(K.$$.fragment,U),ie=d(U),M(j.$$.fragment,U),se=d(U),M(_e.$$.fragment,U),be=d(U),M(he.$$.fragment,U),Pe=d(U),M(xe.$$.fragment,U),we=d(U),M(ge.$$.fragment,U),qe=d(U),M(ee.$$.fragment,U),me=d(U),M(te.$$.fragment,U),ve=d(U),M(le.$$.fragment,U),de=d(U),M(He.$$.fragment,U),Ee=d(U),M(Se.$$.fragment,U),Ae=d(U),M(y.$$.fragment,U),pe=d(U),M(Y.$$.fragment,U),ce=d(U),M(Me.$$.fragment,U),Ie=d(U),M(Te.$$.fragment,U),De=d(U),M(X.$$.fragment,U),fe=d(U),M(je.$$.fragment,U),ze=d(U),M(ke.$$.fragment,U),Oe=d(U),M(Ve.$$.fragment,U),Ue=d(U),M(Re.$$.fragment,U),W=d(U),M(Ce.$$.fragment,U),Be=d(U),M(Je.$$.fragment,U),Ne=d(U),M(N.$$.fragment,U),oe=d(U),M(F.$$.fragment,U),$e=d(U),M(Ze.$$.fragment,U),Fe=d(U),M(ye.$$.fragment,U),J=d(U),M(ue.$$.fragment,U),et=d(U),M(tt.$$.fragment,U)},m(U,re){r(U,e,re),r(U,s,re),S(t,U,re),r(U,p,re),S(i,U,re),r(U,u,re),S(m,U,re),r(U,n,re),S($,U,re),r(U,x,re),S(l,U,re),r(U,f,re),S(L,U,re),r(U,c,re),S(b,U,re),r(U,I,re),S(E,U,re),r(U,O,re),S(A,U,re),r(U,D,re),S(B,U,re),r(U,V,re),S(K,U,re),r(U,ie,re),S(j,U,re),r(U,se,re),S(_e,U,re),r(U,be,re),S(he,U,re),r(U,Pe,re),S(xe,U,re),r(U,we,re),S(ge,U,re),r(U,qe,re),S(ee,U,re),r(U,me,re),S(te,U,re),r(U,ve,re),S(le,U,re),r(U,de,re),S(He,U,re),r(U,Ee,re),S(Se,U,re),r(U,Ae,re),S(y,U,re),r(U,pe,re),S(Y,U,re),r(U,ce,re),S(Me,U,re),r(U,Ie,re),S(Te,U,re),r(U,De,re),S(X,U,re),r(U,fe,re),S(je,U,re),r(U,ze,re),S(ke,U,re),r(U,Oe,re),S(Ve,U,re),r(U,Ue,re),S(Re,U,re),r(U,W,re),S(Ce,U,re),r(U,Be,re),S(Je,U,re),r(U,Ne,re),S(N,U,re),r(U,oe,re),S(F,U,re),r(U,$e,re),S(Ze,U,re),r(U,Fe,re),S(ye,U,re),r(U,J,re),S(ue,U,re),r(U,et,re),S(tt,U,re),st=!0},p(U,re){const nt={};re&1&&(nt.$$scope={dirty:re,ctx:U}),t.$set(nt);const lt={};re&1&&(lt.$$scope={dirty:re,ctx:U}),i.$set(lt);const it={};re&1&&(it.$$scope={dirty:re,ctx:U}),m.$set(it);const R={};re&1&&(R.$$scope={dirty:re,ctx:U}),$.$set(R);const ae={};re&1&&(ae.$$scope={dirty:re,ctx:U}),l.$set(ae);const at={};re&1&&(at.$$scope={dirty:re,ctx:U}),L.$set(at);const rt={};re&1&&(rt.$$scope={dirty:re,ctx:U}),b.$set(rt);const ut={};re&1&&(ut.$$scope={dirty:re,ctx:U}),E.$set(ut);const ot={};re&1&&(ot.$$scope={dirty:re,ctx:U}),A.$set(ot);const $t={};re&1&&($t.$$scope={dirty:re,ctx:U}),B.$set($t);const ft={};re&1&&(ft.$$scope={dirty:re,ctx:U}),K.$set(ft);const ct={};re&1&&(ct.$$scope={dirty:re,ctx:U}),j.$set(ct);const pt={};re&1&&(pt.$$scope={dirty:re,ctx:U}),_e.$set(pt);const mt={};re&1&&(mt.$$scope={dirty:re,ctx:U}),he.$set(mt);const dt={};re&1&&(dt.$$scope={dirty:re,ctx:U}),xe.$set(dt);const vt={};re&1&&(vt.$$scope={dirty:re,ctx:U}),ge.$set(vt);const xt={};re&1&&(xt.$$scope={dirty:re,ctx:U}),ee.$set(xt);const _t={};re&1&&(_t.$$scope={dirty:re,ctx:U}),te.$set(_t);const Ct={};re&1&&(Ct.$$scope={dirty:re,ctx:U}),le.$set(Ct);const gt={};re&1&&(gt.$$scope={dirty:re,ctx:U}),He.$set(gt);const ht={};re&1&&(ht.$$scope={dirty:re,ctx:U}),Se.$set(ht);const bt={};re&1&&(bt.$$scope={dirty:re,ctx:U}),y.$set(bt);const Lt={};re&1&&(Lt.$$scope={dirty:re,ctx:U}),Y.$set(Lt);const wt={};re&1&&(wt.$$scope={dirty:re,ctx:U}),Me.$set(wt);const qt={};re&1&&(qt.$$scope={dirty:re,ctx:U}),Te.$set(qt);const Pt={};re&1&&(Pt.$$scope={dirty:re,ctx:U}),X.$set(Pt);const Ht={};re&1&&(Ht.$$scope={dirty:re,ctx:U}),je.$set(Ht);const St={};re&1&&(St.$$scope={dirty:re,ctx:U}),ke.$set(St);const Mt={};re&1&&(Mt.$$scope={dirty:re,ctx:U}),Ve.$set(Mt);const Tt={};re&1&&(Tt.$$scope={dirty:re,ctx:U}),Re.$set(Tt);const Et={};re&1&&(Et.$$scope={dirty:re,ctx:U}),Ce.$set(Et);const At={};re&1&&(At.$$scope={dirty:re,ctx:U}),Je.$set(At);const It={};re&1&&(It.$$scope={dirty:re,ctx:U}),N.$set(It);const Dt={};re&1&&(Dt.$$scope={dirty:re,ctx:U}),F.$set(Dt);const jt={};re&1&&(jt.$$scope={dirty:re,ctx:U}),Ze.$set(jt);const kt={};re&1&&(kt.$$scope={dirty:re,ctx:U}),ye.$set(kt);const Ot={};re&1&&(Ot.$$scope={dirty:re,ctx:U}),ue.$set(Ot);const zt={};re&1&&(zt.$$scope={dirty:re,ctx:U}),tt.$set(zt)},i(U){st||(H(t.$$.fragment,U),H(i.$$.fragment,U),H(m.$$.fragment,U),H($.$$.fragment,U),H(l.$$.fragment,U),H(L.$$.fragment,U),H(b.$$.fragment,U),H(E.$$.fragment,U),H(A.$$.fragment,U),H(B.$$.fragment,U),H(K.$$.fragment,U),H(j.$$.fragment,U),H(_e.$$.fragment,U),H(he.$$.fragment,U),H(xe.$$.fragment,U),H(ge.$$.fragment,U),H(ee.$$.fragment,U),H(te.$$.fragment,U),H(le.$$.fragment,U),H(He.$$.fragment,U),H(Se.$$.fragment,U),H(y.$$.fragment,U),H(Y.$$.fragment,U),H(Me.$$.fragment,U),H(Te.$$.fragment,U),H(X.$$.fragment,U),H(je.$$.fragment,U),H(ke.$$.fragment,U),H(Ve.$$.fragment,U),H(Re.$$.fragment,U),H(Ce.$$.fragment,U),H(Je.$$.fragment,U),H(N.$$.fragment,U),H(F.$$.fragment,U),H(Ze.$$.fragment,U),H(ye.$$.fragment,U),H(ue.$$.fragment,U),H(tt.$$.fragment,U),st=!0)},o(U){P(t.$$.fragment,U),P(i.$$.fragment,U),P(m.$$.fragment,U),P($.$$.fragment,U),P(l.$$.fragment,U),P(L.$$.fragment,U),P(b.$$.fragment,U),P(E.$$.fragment,U),P(A.$$.fragment,U),P(B.$$.fragment,U),P(K.$$.fragment,U),P(j.$$.fragment,U),P(_e.$$.fragment,U),P(he.$$.fragment,U),P(xe.$$.fragment,U),P(ge.$$.fragment,U),P(ee.$$.fragment,U),P(te.$$.fragment,U),P(le.$$.fragment,U),P(He.$$.fragment,U),P(Se.$$.fragment,U),P(y.$$.fragment,U),P(Y.$$.fragment,U),P(Me.$$.fragment,U),P(Te.$$.fragment,U),P(X.$$.fragment,U),P(je.$$.fragment,U),P(ke.$$.fragment,U),P(Ve.$$.fragment,U),P(Re.$$.fragment,U),P(Ce.$$.fragment,U),P(Je.$$.fragment,U),P(N.$$.fragment,U),P(F.$$.fragment,U),P(Ze.$$.fragment,U),P(ye.$$.fragment,U),P(ue.$$.fragment,U),P(tt.$$.fragment,U),st=!1},d(U){U&&(a(e),a(s),a(p),a(u),a(n),a(x),a(f),a(c),a(I),a(O),a(D),a(V),a(ie),a(se),a(be),a(Pe),a(we),a(qe),a(me),a(ve),a(de),a(Ee),a(Ae),a(pe),a(ce),a(Ie),a(De),a(fe),a(ze),a(Oe),a(Ue),a(W),a(Be),a(Ne),a(oe),a($e),a(Fe),a(J),a(et)),q(t,U),q(i,U),q(m,U),q($,U),q(l,U),q(L,U),q(b,U),q(E,U),q(A,U),q(B,U),q(K,U),q(j,U),q(_e,U),q(he,U),q(xe,U),q(ge,U),q(ee,U),q(te,U),q(le,U),q(He,U),q(Se,U),q(y,U),q(Y,U),q(Me,U),q(Te,U),q(X,U),q(je,U),q(ke,U),q(Ve,U),q(Re,U),q(Ce,U),q(Je,U),q(N,U),q(F,U),q(Ze,U),q(ye,U),q(ue,U),q(tt,U)}}}function Lo(_){let e,o;return e=new z({props:{$$slots:{default:[bo]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const p={};t&1&&(p.$$scope={dirty:t,ctx:s}),e.$set(p)},i(s){o||(H(e.$$.fragment,s),o=!0)},o(s){P(e.$$.fragment,s),o=!1},d(s){q(e,s)}}}class wo extends Xe{constructor(e){super(),Ye(this,e,null,Lo,We,{})}}function qo(_){let e,o="Choisir la bonne structure",s,t,p="La plupart des bugs ne viennent pas de Java, mais d'un mauvais choix de collection",i,u,m=`Maintenant qu'on sait typer proprement, il faut choisir la bonne structure de données. C'est une
			décision de modélisation autant qu'une décision technique.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H2",{"data-svelte-h":!0}),h(e)!=="svelte-h5k873"&&(e.textContent=o),s=d(n),t=C(n,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-19ifl5m"&&(t.textContent=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1gpy9tm"&&(u.textContent=m),this.h()},h(){w(t,"class","text-2xl text-gray-200"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function Po(_){let e=`
Produit[] produits = new Produit[2];
produits[0] = new Produit("CLAVIER", 49.9);
produits[1] = new Produit("SOURIS", 19.9);

// Besoin d'un troisième produit ?
// Il faut recopier dans un nouveau tableau
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Ho(_){let e,o="Pourquoi pas juste des tableaux ?",s,t,p,i,u="Les tableaux ont une taille fixe. Les besoins métier, eux, changent en permanence.",m,n,$=`Les tableaux restent utiles, mais pour la plupart des applications métier, on a besoin de taille
			dynamique, de recherche, de tri, d'unicité et de structures plus riches.`,x;return t=new Z({props:{$$slots:{default:[Po]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.textContent=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-b2522y"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-1ne4i06"&&(i.textContent=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-pwi51k"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function So(_){let e,o="Le framework Collections",s,t,p="Java fournit dans <code>java.util</code> des interfaces et implémentations pour représenter des ensembles d&#39;objets.",i,u,m='<li class="fragment"><code>List</code> : ordre + index</li> <li class="fragment"><code>Set</code> : unicité</li> <li class="fragment"><code>Map</code> : association clé → valeur</li> <li class="fragment"><code>Queue</code> / <code>Deque</code> : traitement en file</li>',n,$,x=`Le plus important n'est pas de retenir 25 classes, mais de comprendre le besoin métier que chaque
			famille résout.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("ul"),u.innerHTML=m,n=v(),$=g("aside"),$.textContent=x,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-3v32xi"&&(e.textContent=o),s=d(l),t=C(l,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-gfocob"&&(t.innerHTML=p),i=d(l),u=C(l,"UL",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-vpyic6"&&(u.innerHTML=m),n=d(l),$=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-1r1yfq8"&&($.textContent=x),this.h()},h(){w(t,"class","text-2xl"),w(u,"class","text-xl mt-6"),w($,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,u,f),r(l,n,f),r(l,$,f)},p:k,d(l){l&&(a(e),a(s),a(t),a(i),a(u),a(n),a($))}}}function Mo(_){let e=`
@startuml
!theme crt-green
skinparam backgroundColor transparent

interface Iterable
interface Collection
interface List
interface Set
interface Queue
interface Deque
interface Map

class ArrayList
class LinkedList
class HashSet
class TreeSet
class HashMap
class TreeMap
class PriorityQueue

Iterable <|.. Collection
Collection <|.. List
Collection <|.. Set
Collection <|.. Queue
Queue <|.. Deque
List <|.. ArrayList
List <|.. LinkedList
Set <|.. HashSet
Set <|.. TreeSet
Queue <|.. LinkedList
Queue <|.. PriorityQueue
Map <|.. HashMap
Map <|.. TreeMap
@enduml
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function To(_){let e,o="Vue d'ensemble",s,t,p,i,u=`Map est volontairement à part : ce n'est pas une Collection au sens Java, même si on l'utilise au
			quotidien comme telle dans l'esprit.`,m;return t=new Ke({props:{$$slots:{default:[Mo]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("aside"),i.textContent=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-zreck6"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-z917jl"&&(i.textContent=u),this.h()},h(){w(i,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function Eo(_){let e=`
List<Produit> catalogue = new ArrayList<>();
Set<String> emails = new HashSet<>();
Map<String, Client> clientsParId = new HashMap<>();
Queue<Commande> urgences = new PriorityQueue<>();
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Ao(_){let e,o="On programme contre l'interface",s,t,p,i,u='Le type à gauche exprime le <span class="text-important">contrat</span>, pas l&#39;implémentation choisie aujourd&#39;hui.',m,n,$=`Même idée qu'avec les interfaces en POO. On découple le code appelant de la structure concrète.
			Cela rend les remplacements et les tests plus simples.`,x;return t=new Z({props:{$$slots:{default:[Eo]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1p2bvjm"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-1se62u4"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-r65u7k"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function Io(_){let e=`
List<String> roles = List.of("ETUDIANT", "TUTEUR", "ADMIN");
Set<String> statuts = Set.of("ACTIF", "INACTIF", "SUSPENDU");
Map<String, Integer> limites = Map.of("STANDARD", 5, "PREMIUM", 20);

// roles.add("SUPER_ADMIN"); // ❌ UnsupportedOperationException
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Do(_){let e,o="Collections immuables",s,t,p,i,u="Très utile pour des constantes métier ou des données de référence.",m,n,$=`🛡️ On n'a pas toujours besoin d'une structure modifiable. Les collections immuables évitent
			des mutations accidentelles — c'est comme plastifier un document : on peut le lire, pas le gribouiller.
			List.of(), Set.of() et Map.of() sont disponibles depuis Java 9. Pour plus de 10 entrées
			dans une Map, on utilise Map.ofEntries() avec Map.entry(clé, valeur).`,x;return t=new Z({props:{$$slots:{default:[Io]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.textContent=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-4uumqi"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-19hbzgg"&&(i.textContent=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-hr1e9m"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function jo(_){let e,o="Quand choisir quoi ?",s,t,p='<tbody><tr class="fragment"><td class="p-3">J&#39;ai besoin d&#39;un ordre d&#39;insertion et d&#39;un accès par index</td> <td class="p-3 text-accent-200">List</td></tr> <tr class="fragment"><td class="p-3">Je veux éviter les doublons</td> <td class="p-3 text-accent-200">Set</td></tr> <tr class="fragment"><td class="p-3">Je retrouve vite une valeur à partir d&#39;une clé</td> <td class="p-3 text-accent-200">Map</td></tr> <tr class="fragment"><td class="p-3">Je traite les éléments dans un ordre de priorité ou FIFO</td> <td class="p-3 text-accent-200">Queue</td></tr></tbody>',i,u,m="Si les étudiants retiennent vraiment cette slide, ils ont déjà le réflexe essentiel pour choisir.";return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("table"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-fvighr"&&(e.textContent=o),s=d(n),t=C(n,"TABLE",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-n04zop"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1gb7v07"&&(u.textContent=m),this.h()},h(){w(t,"class","text-xl mt-6 w-full"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function ko(_){let e=`
List<String> references = new ArrayList<>();
references.add("CLAVIER");
references.add("SOURIS");
references.add("CLAVIER");

System.out.println(references.get(0)); // CLAVIER
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Oo(_){let e,o="List",s,t,p="Une <code>List</code> est ordonnée, indexée, et accepte les doublons.",i,u,m,n,$=`Très bien pour des catalogues, historiques, paniers, séquences d'actions. Le doublon n'est pas
			un bug ici, c'est parfois une information utile.`,x;return u=new Z({props:{$$slots:{default:[ko]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment),m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-dgdv1w"&&(e.textContent=o),s=d(l),t=C(l,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1jrercg"&&(t.innerHTML=p),i=d(l),M(u.$$.fragment,l),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1pc2w53"&&(n.textContent=$),this.h()},h(){w(t,"class","text-2xl"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),S(u,l,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),u.$set(L)},i(l){x||(H(u.$$.fragment,l),x=!0)},o(l){P(u.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(t),a(i),a(m),a(n)),q(u,l)}}}function zo(_){let e,o="ArrayList vs LinkedList",s,t,p='<div class="p-5 rounded-xl bg-accent-950"><h4 class="text-green-400">ArrayList</h4> <ul class="text-lg mt-3"><li>Très bon accès par index</li> <li>Excellent choix par défaut</li> <li>Base de nombreux cas métier</li></ul></div> <div class="p-5 rounded-xl bg-accent-950"><h4 class="text-blue-400">LinkedList</h4> <ul class="text-lg mt-3"><li>Peut servir comme file ou deque</li> <li>Moins bonne localité mémoire</li> <li>Plus rare en pratique</li></ul></div>',i,u,m='Règle simple : <span class="text-important">commencer par ArrayList</span>.',n,$,x=`En entreprise, LinkedList est beaucoup moins fréquent qu'en cours d'algorithmique. On évite de
			compliquer tant qu'on n'a pas une raison mesurée de le faire.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=p,i=v(),u=g("p"),u.innerHTML=m,n=v(),$=g("aside"),$.textContent=x,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-357c89"&&(e.textContent=o),s=d(l),t=C(l,"DIV",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1l7z0eq"&&(t.innerHTML=p),i=d(l),u=C(l,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-14ss8oc"&&(u.innerHTML=m),n=d(l),$=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-gqk0jj"&&($.textContent=x),this.h()},h(){w(t,"class","grid grid-cols-2 gap-6 mt-6"),w(u,"class","fragment mt-6 text-2xl"),w($,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,u,f),r(l,n,f),r(l,$,f)},p:k,d(l){l&&(a(e),a(s),a(t),a(i),a(u),a(n),a($))}}}function Vo(_){let e,o="Réflexe pratique",s,t,p='<tbody><tr class="fragment"><td class="p-3">Je stocke une séquence classique d&#39;objets métier</td> <td class="p-3 text-accent-200">ArrayList</td></tr> <tr class="fragment"><td class="p-3">J&#39;ai besoin d&#39;une file d&#39;attente double extrémité</td> <td class="p-3 text-accent-200">Deque / LinkedList ou ArrayDeque</td></tr> <tr class="fragment"><td class="p-3">Je veux surtout l&#39;unicité</td> <td class="p-3 text-accent-200">HashSet</td></tr></tbody>',i,u,m="On simplifie volontairement. L'idée est de donner un arbre de décision utilisable dès demain.";return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("table"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1jr8qqc"&&(e.textContent=o),s=d(n),t=C(n,"TABLE",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-19jogt0"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-9k03yd"&&(u.textContent=m),this.h()},h(){w(t,"class","text-xl mt-6 w-full"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function Ro(_){let e=`
List<Produit> panier = new ArrayList<>();
panier.add(produit1);
panier.add(produit2);

panier.set(1, produitPromo);
panier.remove(0);

for (Produit produit : panier) {
    System.out.println(produit.reference());
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Uo(_){let e,o="Opérations courantes sur List",s,t,p,i,u="On reste sur les opérations métier usuelles, pas sur l'exhaustivité de l'API.",m;return t=new Z({props:{$$slots:{default:[Ro]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("aside"),i.textContent=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1d2ulrk"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-10h0en9"&&(i.textContent=u),this.h()},h(){w(i,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function Jo(_){let e=`
for (Produit produit : panier) {
    if (produit.prix() == 0) {
        panier.remove(produit); // ConcurrentModificationException
    }
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Bo(_){let e,o="Le piège de la suppression",s,t,p,i,u="On ne modifie pas la collection pendant un for-each.",m,n,$=`Bug classique. Le for-each s'appuie sur un iterator interne. Si la structure change pendant le
			parcours, Java protège en levant une exception.`,x;return t=new Z({props:{$$slots:{default:[Jo]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.textContent=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1ja2rvz"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-1nk29uy"&&(i.textContent=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-btwdcb"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4 text-red-400"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function No(_){let e=`
Iterator<Produit> iterator = panier.iterator();

while (iterator.hasNext()) {
    Produit produit = iterator.next();
    if (produit.prix() == 0) {
        iterator.remove();
    }
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Fo(_){let e,o="La bonne approche",s,t,p,i,u=`Quand on doit supprimer pendant le parcours, c'est l'iterator qui gère l'opération en sécurité.
			On verra plus tard que removeIf() simplifie souvent encore davantage.`,m;return t=new Z({props:{$$slots:{default:[No]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("aside"),i.textContent=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-t1er91"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-1pkxjgg"&&(i.textContent=u),this.h()},h(){w(i,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function Go(_){let e=`
Set<String> emails = new HashSet<>();
emails.add("ada@cpe.fr");
emails.add("ada@cpe.fr");

System.out.println(emails.size()); // 1
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Qo(_){let e,o="Set",s,t,p='Un <code>Set</code> stocke des éléments <span class="text-important">sans doublons</span>.',i,u,m,n,$=`Parfait pour emails, identifiants, tags, références uniques, droits d'accès. On exprime une
			contrainte métier directement dans la structure.`,x;return u=new Z({props:{$$slots:{default:[Go]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment),m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1pcp3ha"&&(e.textContent=o),s=d(l),t=C(l,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1p2yx94"&&(t.innerHTML=p),i=d(l),M(u.$$.fragment,l),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-croz9r"&&(n.textContent=$),this.h()},h(){w(t,"class","text-2xl"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),S(u,l,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),u.$set(L)},i(l){x||(H(u.$$.fragment,l),x=!0)},o(l){P(u.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(t),a(i),a(m),a(n)),q(u,l)}}}function Ko(_){let e,o="HashSet ou TreeSet ?",s,t,p='<div class="p-5 rounded-xl bg-accent-950"><h4 class="text-green-400">HashSet</h4> <p class="mt-3">Pas d&#39;ordre garanti, très courant</p></div> <div class="p-5 rounded-xl bg-accent-950"><h4 class="text-blue-400">TreeSet</h4> <p class="mt-3">Éléments triés, utile pour produire un ordre métier</p></div>',i,u,m=`Encore une fois : HashSet par défaut si l'ordre ne compte pas. TreeSet seulement si l'ordre trié
			fait partie du besoin.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1tc6eod"&&(e.textContent=o),s=d(n),t=C(n,"DIV",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1mb1me2"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-boy70q"&&(u.textContent=m),this.h()},h(){w(t,"class","grid grid-cols-2 gap-6 mt-6"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function Wo(_){let e=`
record Produit(String reference, double prix) {}

Set<Produit> produits = new HashSet<>();
produits.add(new Produit("CLAVIER", 49.9));
produits.add(new Produit("CLAVIER", 49.9));
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Xo(_){let e,o="Le piège avec les objets métier",s,t,p,i,u="Ici, le doublon est bien détecté car le <code>record</code> fournit <code>equals()</code> et <code>hashCode()</code>.",m,n,$=`Très bon pont avec la séance 2. Les records sont particulièrement pratiques comme clés ou éléments
			de Set parce qu'ils implémentent correctement l'égalité par valeur.`,x;return t=new Z({props:{$$slots:{default:[Wo]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-nis60e"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-nw8lmc"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-p6zxlz"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function Yo(_){let e=`
class Client {
    private String id;
    private String nom;
}

Set<Client> clients = new HashSet<>();
clients.add(new Client("C001", "Ada"));
clients.add(new Client("C001", "Ada"));
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Zo(_){let e,o="Et avec une classe classique ?",s,t,p,i,u="Sans redéfinir <code>equals()</code> et <code>hashCode()</code>, le Set considère souvent ces objets comme différents.",m,n,$=`Point crucial pour comprendre HashSet et HashMap. Si l'égalité métier n'est pas codée, la structure
			ne peut pas deviner votre intention.`,x;return t=new Z({props:{$$slots:{default:[Yo]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1u3gwhs"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-i9zm1l"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1uesxca"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4 text-red-400"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function yo(_){let e=`
Set<String> tags = new LinkedHashSet<>();
Map<String, Client> clients = new LinkedHashMap<>();
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function e$(_){let e,o="LinkedHashSet et LinkedHashMap",s,t,p='Quand on veut à la fois l&#39;unicité ou l&#39;accès par clé, <span class="text-important">et</span> l&#39;ordre d&#39;insertion.',i,u,m,n,$=`Très bon compromis quand l'ordre d'affichage compte, par exemple pour des exports ou des tableaux
			lus par les utilisateurs.`,x;return u=new Z({props:{$$slots:{default:[yo]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment),m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-8rrklx"&&(e.textContent=o),s=d(l),t=C(l,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1pw64lt"&&(t.innerHTML=p),i=d(l),M(u.$$.fragment,l),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1qm4sy9"&&(n.textContent=$),this.h()},h(){w(t,"class","text-2xl"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),S(u,l,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),u.$set(L)},i(l){x||(H(u.$$.fragment,l),x=!0)},o(l){P(u.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(t),a(i),a(m),a(n)),q(u,l)}}}function t$(_){let e=`
Map<String, Client> clientsParId = new HashMap<>();
clientsParId.put("C001", new Client("C001", "Ada"));
clientsParId.put("C002", new Client("C002", "Linus"));

Client client = clientsParId.get("C001");
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function s$(_){let e,o="Map",s,t,p='Une <code>Map</code> associe une <span class="text-important">clé</span> à une <span class="text-important">valeur</span>.',i,u,m,n,$=`C'est le bon choix dès qu'on veut retrouver rapidement une valeur à partir d'un identifiant métier.
			Très fréquent dans les couches services et repositories.`,x;return u=new Z({props:{$$slots:{default:[t$]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment),m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-11h8hs"&&(e.textContent=o),s=d(l),t=C(l,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1fe6ytk"&&(t.innerHTML=p),i=d(l),M(u.$$.fragment,l),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1wnr1dh"&&(n.textContent=$),this.h()},h(){w(t,"class","text-2xl"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),S(u,l,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),u.$set(L)},i(l){x||(H(u.$$.fragment,l),x=!0)},o(l){P(u.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(t),a(i),a(m),a(n)),q(u,l)}}}function l$(_){let e=`
Client trouve = null;
for (Client client : clients) {
    if (client.id().equals("C001")) {
        trouve = client;
        break;
    }
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function n$(_){let e=`
Client trouve =
    clientsParId.get("C001");
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function i$(_){let e,o="Pourquoi pas une List ?",s,t,p,i,u="Avec List",m,n,$,x,l,f="Avec Map",L,c,b,I,E=`Le gain n'est pas seulement en performance. Le code exprime aussi plus clairement l'intention :
			on fait une recherche par clé.`,O;return n=new Z({props:{$$slots:{default:[l$]},$$scope:{ctx:_}}}),c=new Z({props:{$$slots:{default:[n$]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),p=g("div"),i=g("h4"),i.textContent=u,m=v(),T(n.$$.fragment),$=v(),x=g("div"),l=g("h4"),l.textContent=f,L=v(),T(c.$$.fragment),b=v(),I=g("aside"),I.textContent=E,this.h()},l(A){e=C(A,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-6pnwo3"&&(e.textContent=o),s=d(A),t=C(A,"DIV",{class:!0});var D=Le(t);p=C(D,"DIV",{});var B=Le(p);i=C(B,"H4",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-1vwqq08"&&(i.textContent=u),m=d(B),M(n.$$.fragment,B),B.forEach(a),$=d(D),x=C(D,"DIV",{});var V=Le(x);l=C(V,"H4",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-ytb0aq"&&(l.textContent=f),L=d(V),M(c.$$.fragment,V),V.forEach(a),D.forEach(a),b=d(A),I=C(A,"ASIDE",{class:!0,"data-svelte-h":!0}),h(I)!=="svelte-12dnwk5"&&(I.textContent=E),this.h()},h(){w(i,"class","text-red-400"),w(l,"class","text-green-400"),w(t,"class","grid grid-cols-2 gap-6 mt-6"),w(I,"class","notes")},m(A,D){r(A,e,D),r(A,s,D),r(A,t,D),ne(t,p),ne(p,i),ne(p,m),S(n,p,null),ne(t,$),ne(t,x),ne(x,l),ne(x,L),S(c,x,null),r(A,b,D),r(A,I,D),O=!0},p(A,D){const B={};D&1&&(B.$$scope={dirty:D,ctx:A}),n.$set(B);const V={};D&1&&(V.$$scope={dirty:D,ctx:A}),c.$set(V)},i(A){O||(H(n.$$.fragment,A),H(c.$$.fragment,A),O=!0)},o(A){P(n.$$.fragment,A),P(c.$$.fragment,A),O=!1},d(A){A&&(a(e),a(s),a(t),a(b),a(I)),q(n),q(c)}}}function a$(_){let e=`
for (Map.Entry<String, Client> entry : clientsParId.entrySet()) {
    System.out.println(entry.getKey() + " -> " + entry.getValue().nom());
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function r$(_){let e,o="Parcourir une Map",s,t,p,i,u="Trois vues utiles : <code>keySet()</code>, <code>values()</code>, <code>entrySet()</code>.",m,n,$="entrySet() est souvent la vue la plus pratique quand on a besoin à la fois de la clé et de la valeur.",x;return t=new Z({props:{$$slots:{default:[a$]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1v6vz6p"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-wc3sf0"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-12uvyh8"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function u$(_){let e,o="HashMap ou TreeMap ?",s,t,p='<div class="p-5 rounded-xl bg-accent-950"><h4 class="text-green-400">HashMap</h4> <p class="mt-3">Pas d&#39;ordre garanti, très utilisé</p></div> <div class="p-5 rounded-xl bg-accent-950"><h4 class="text-blue-400">TreeMap</h4> <p class="mt-3">Clés triées, utile pour affichage ou rapports</p></div>',i,u,m="Même logique que HashSet vs TreeSet. On paie le tri seulement quand il sert réellement au métier.";return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-wyrnet"&&(e.textContent=o),s=d(n),t=C(n,"DIV",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-vsz0yg"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-13nw3zl"&&(u.textContent=m),this.h()},h(){w(t,"class","grid grid-cols-2 gap-6 mt-6"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function o$(_){let e=`
Queue<Commande> commandes = new LinkedList<>();
commandes.offer(commande1);
commandes.offer(commande2);

Commande suivante = commandes.poll();
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function $$(_){let e,o="Queue",s,t,p="Une <code>Queue</code> modélise une file d&#39;attente.",i,u,m,n,$="Méthodes utiles : <code>offer()</code>, <code>peek()</code>, <code>poll()</code>.",x,l,f=`Très utile pour modéliser traitement asynchrone, files d'impression, pipeline de tâches,
			préparation de commandes.`,L;return u=new Z({props:{$$slots:{default:[o$]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment),m=v(),n=g("p"),n.innerHTML=$,x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1pz2rvv"&&(e.textContent=o),s=d(c),t=C(c,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1a1ar4v"&&(t.innerHTML=p),i=d(c),M(u.$$.fragment,c),m=d(c),n=C(c,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-ios9wa"&&(n.innerHTML=$),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-qysrnr"&&(l.textContent=f),this.h()},h(){w(t,"class","text-2xl"),w(n,"class","fragment mt-4"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),S(u,c,b),r(c,m,b),r(c,n,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),u.$set(I)},i(c){L||(H(u.$$.fragment,c),L=!0)},o(c){P(u.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(n),a(x),a(l)),q(u,c)}}}function f$(_){let e=`
Deque<String> historique = new ArrayDeque<>();
historique.addFirst("connexion");
historique.addLast("commande");

String dernier = historique.removeLast();
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function c$(_){let e,o="Deque",s,t,p,i,u='Une <code>Deque</code> permet d&#39;ajouter ou retirer en tête <span class="text-important">et</span> en queue.',m,n,$=`Pratique pour historique, undo/redo, pile, file double extrémité. C'est une structure souvent plus
			utile que ce qu'on pense au premier abord.`,x;return t=new Z({props:{$$slots:{default:[f$]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-k8zxs6"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-ve3oko"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1j2eqs7"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function p$(_){let e=`
Queue<TicketSupport> tickets =
    new PriorityQueue<>(Comparator.comparingInt(TicketSupport::priorite).reversed());

tickets.offer(new TicketSupport("Paiement KO", 5));
tickets.offer(new TicketSupport("Couleur bouton", 1));

TicketSupport premier = tickets.poll();
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function m$(_){let e,o="PriorityQueue",s,t,p,i,u='On ne traite plus par ordre d&#39;arrivée, mais par <span class="text-important">priorité métier</span>.',m,n,$="Bon exemple “pro” : support, incidents, logistique urgente. L'ordre est piloté par une règle métier.",x;return t=new Z({props:{$$slots:{default:[p$]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-4fb8p7"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-11870xs"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-niyvzh"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function d$(_){let e=`
for (Produit produit : catalogue) {
    System.out.println(produit.reference());
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function v$(_){let e,o="Iterable et for-each",s,t,p,i,u="Le for-each fonctionne parce que les collections sont <code>Iterable</code>.",m,n,$=`C'est le point d'entrée le plus simple pour parcourir. L'iterator existe dessous, même si on ne
			le voit pas directement.`,x;return t=new Z({props:{$$slots:{default:[d$]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-rl48i"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-wjbiqr"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-a7zrl8"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function x$(_){let e=`
catalogue.sort(Comparator.comparingDouble(Produit::prix));
catalogue.sort(Comparator.comparing(Produit::reference));
catalogue.sort(
    Comparator.comparingDouble(Produit::prix).reversed()
);
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function _$(_){let e,o="Trier une liste",s,t,p,i,u=`Excellent pont vers les lambdas. Le tri est un cas métier ultra courant et très parlant pour
			montrer la puissance des comparators modernes.`,m;return t=new Z({props:{$$slots:{default:[x$]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("aside"),i.textContent=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-yez8fv"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-bbxjlq"&&(i.textContent=u),this.h()},h(){w(i,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function C$(_){let e,o="Comparator vs Comparable",s,t,p='<div class="p-5 rounded-xl bg-accent-950"><h4 class="text-green-400">Comparable</h4> <p class="mt-3">Ordre naturel défini <span class="text-important">dans</span> la classe</p></div> <div class="p-5 rounded-xl bg-accent-950"><h4 class="text-blue-400">Comparator</h4> <p class="mt-3">Ordre externe, selon le <span class="text-important">contexte</span> métier</p></div>',i,u,m=`🎯 Comparable = "je sais naturellement me comparer" (comme les nombres, les dates).
			Comparator = "quelqu'un d'autre définit l'ordre" (comme un jury qui note selon ses critères).
			Un produit peut avoir plusieurs ordres pertinents : par prix, par référence, par popularité.
			Comparable fixe UN ordre naturel, Comparator en définit autant qu'on veut.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-br7yvp"&&(e.textContent=o),s=d(n),t=C(n,"DIV",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-141ftq3"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1nirecg"&&(u.textContent=m),this.h()},h(){w(t,"class","grid grid-cols-2 gap-6 mt-6"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function g$(_){let e=`
class Produit implements Comparable<Produit> {
    private String reference;
    private double prix;

    @Override
    public int compareTo(Produit autre) {
        return Double.compare(this.prix, autre.prix);
    }
}

List<Produit> catalogue = new ArrayList<>();
Collections.sort(catalogue); // Utilise l'ordre naturel (par prix)
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function h$(_){let e,o="Implémenter Comparable",s,t,p,i,u=`📏 compareTo() renvoie un nombre négatif, zéro ou positif — comme une balance :
			"je suis plus léger" (<0), "égalité" (0), "je suis plus lourd" (>0).
			C'est l'ordre naturel de la classe : celui utilisé par défaut par Collections.sort(),
			TreeSet, TreeMap, etc. Si un seul ordre a du sens métier, Comparable suffit.
			Si plusieurs ordres sont nécessaires, on ajoute des Comparator à côté.`,m;return t=new Z({props:{$$slots:{default:[g$]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("aside"),i.textContent=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-10dl6yq"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-18my5uh"&&(i.textContent=u),this.h()},h(){w(i,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function b$(_){let e=`
catalogue.contains(produit);
catalogue.isEmpty();
catalogue.size();
catalogue.removeIf(p -> p.prix() == 0);

Collections.sort(catalogue, Comparator.comparing(Produit::reference));
Collections.unmodifiableList(catalogue);
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function L$(_){let e,o="Petites méthodes très utiles",s,t,p,i,u="Pas besoin d'apprendre toute l'API par coeur, mais ces méthodes-là reviennent constamment.",m;return t=new Z({props:{$$slots:{default:[b$]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("aside"),i.textContent=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-14x9q9s"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-gpmv94"&&(i.textContent=u),this.h()},h(){w(i,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function w$(_){let e,o="Ordres de grandeur à retenir",s,t,p='<div><p class="fragment">Accès par clé dans HashMap : très rapide en pratique</p> <p class="fragment">Recherche manuelle dans une List : plus coûteuse quand ça grandit</p></div> <div><p class="fragment">Structures triées : utiles, mais on paie le maintien de l&#39;ordre</p> <p class="fragment">Commencer simple, puis mesurer si besoin</p></div>',i,u,m=`On évite les notations complexes si ce n'est pas l'objectif du cours, mais on donne l'intuition
			de coût et de choix d'architecture.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1jh9jof"&&(e.textContent=o),s=d(n),t=C(n,"DIV",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-rgxyy0"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1qhd75q"&&(u.textContent=m),this.h()},h(){w(t,"class","grid grid-cols-2 gap-8 mt-8 text-xl"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function q$(_){let e,o="Choix de structure et impact métier",s,t,p='<div><p class="fragment">Une mauvaise structure rend le code plus lent et surtout moins clair</p> <p class="fragment">Une bonne structure encode déjà une partie des règles métier</p></div> <div><p class="fragment">List pour la séquence</p> <p class="fragment">Set pour l&#39;unicité</p> <p class="fragment">Map pour l&#39;accès par clé</p> <p class="fragment">Queue pour l&#39;ordre de traitement</p></div>',i,u,m="La structure choisie raconte déjà une partie du domaine. C'est aussi ça, faire de la bonne POO.";return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-tmlbd8"&&(e.textContent=o),s=d(n),t=C(n,"DIV",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-beh9hd"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-f4xbnn"&&(u.textContent=m),this.h()},h(){w(t,"class","grid grid-cols-2 gap-8 mt-8 text-xl"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function P$(_){let e,o="Collections",s,t,p,i,u,m,n,$,x,l,f,L,c,b,I,E,O,A,D,B,V,K,ie,j,se,_e,be,he,Pe,xe,we,ge,qe,ee,me,te,ve,le,de,He,Ee,Se,Ae,y,pe,Y,ce,Me,Ie,Te,De,X,fe,je,ze,ke,Oe,Ve,Ue,Re,W,Ce,Be,Je,Ne;return t=new z({props:{data_background_gradient:"linear-gradient(135deg, rgb(21 128 61), rgb(22 101 52))",$$slots:{default:[qo]},$$scope:{ctx:_}}}),i=new z({props:{$$slots:{default:[Ho]},$$scope:{ctx:_}}}),m=new z({props:{$$slots:{default:[So]},$$scope:{ctx:_}}}),$=new z({props:{$$slots:{default:[To]},$$scope:{ctx:_}}}),l=new z({props:{$$slots:{default:[Ao]},$$scope:{ctx:_}}}),L=new z({props:{$$slots:{default:[Do]},$$scope:{ctx:_}}}),b=new z({props:{$$slots:{default:[jo]},$$scope:{ctx:_}}}),E=new z({props:{$$slots:{default:[Oo]},$$scope:{ctx:_}}}),A=new z({props:{$$slots:{default:[zo]},$$scope:{ctx:_}}}),B=new z({props:{$$slots:{default:[Vo]},$$scope:{ctx:_}}}),K=new z({props:{$$slots:{default:[Uo]},$$scope:{ctx:_}}}),j=new z({props:{$$slots:{default:[Bo]},$$scope:{ctx:_}}}),_e=new z({props:{$$slots:{default:[Fo]},$$scope:{ctx:_}}}),he=new z({props:{$$slots:{default:[Qo]},$$scope:{ctx:_}}}),xe=new z({props:{$$slots:{default:[Ko]},$$scope:{ctx:_}}}),ge=new z({props:{$$slots:{default:[Xo]},$$scope:{ctx:_}}}),ee=new z({props:{$$slots:{default:[Zo]},$$scope:{ctx:_}}}),te=new z({props:{$$slots:{default:[e$]},$$scope:{ctx:_}}}),le=new z({props:{$$slots:{default:[s$]},$$scope:{ctx:_}}}),He=new z({props:{$$slots:{default:[i$]},$$scope:{ctx:_}}}),Se=new z({props:{$$slots:{default:[r$]},$$scope:{ctx:_}}}),y=new z({props:{$$slots:{default:[u$]},$$scope:{ctx:_}}}),Y=new z({props:{$$slots:{default:[$$]},$$scope:{ctx:_}}}),Me=new z({props:{$$slots:{default:[c$]},$$scope:{ctx:_}}}),Te=new z({props:{$$slots:{default:[m$]},$$scope:{ctx:_}}}),X=new z({props:{$$slots:{default:[v$]},$$scope:{ctx:_}}}),je=new z({props:{$$slots:{default:[_$]},$$scope:{ctx:_}}}),ke=new z({props:{$$slots:{default:[C$]},$$scope:{ctx:_}}}),Ve=new z({props:{$$slots:{default:[h$]},$$scope:{ctx:_}}}),Re=new z({props:{$$slots:{default:[L$]},$$scope:{ctx:_}}}),Ce=new z({props:{$$slots:{default:[w$]},$$scope:{ctx:_}}}),Je=new z({props:{$$slots:{default:[q$]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),T(i.$$.fragment),u=v(),T(m.$$.fragment),n=v(),T($.$$.fragment),x=v(),T(l.$$.fragment),f=v(),T(L.$$.fragment),c=v(),T(b.$$.fragment),I=v(),T(E.$$.fragment),O=v(),T(A.$$.fragment),D=v(),T(B.$$.fragment),V=v(),T(K.$$.fragment),ie=v(),T(j.$$.fragment),se=v(),T(_e.$$.fragment),be=v(),T(he.$$.fragment),Pe=v(),T(xe.$$.fragment),we=v(),T(ge.$$.fragment),qe=v(),T(ee.$$.fragment),me=v(),T(te.$$.fragment),ve=v(),T(le.$$.fragment),de=v(),T(He.$$.fragment),Ee=v(),T(Se.$$.fragment),Ae=v(),T(y.$$.fragment),pe=v(),T(Y.$$.fragment),ce=v(),T(Me.$$.fragment),Ie=v(),T(Te.$$.fragment),De=v(),T(X.$$.fragment),fe=v(),T(je.$$.fragment),ze=v(),T(ke.$$.fragment),Oe=v(),T(Ve.$$.fragment),Ue=v(),T(Re.$$.fragment),W=v(),T(Ce.$$.fragment),Be=v(),T(Je.$$.fragment)},l(N){e=C(N,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1u5iy19"&&(e.textContent=o),s=d(N),M(t.$$.fragment,N),p=d(N),M(i.$$.fragment,N),u=d(N),M(m.$$.fragment,N),n=d(N),M($.$$.fragment,N),x=d(N),M(l.$$.fragment,N),f=d(N),M(L.$$.fragment,N),c=d(N),M(b.$$.fragment,N),I=d(N),M(E.$$.fragment,N),O=d(N),M(A.$$.fragment,N),D=d(N),M(B.$$.fragment,N),V=d(N),M(K.$$.fragment,N),ie=d(N),M(j.$$.fragment,N),se=d(N),M(_e.$$.fragment,N),be=d(N),M(he.$$.fragment,N),Pe=d(N),M(xe.$$.fragment,N),we=d(N),M(ge.$$.fragment,N),qe=d(N),M(ee.$$.fragment,N),me=d(N),M(te.$$.fragment,N),ve=d(N),M(le.$$.fragment,N),de=d(N),M(He.$$.fragment,N),Ee=d(N),M(Se.$$.fragment,N),Ae=d(N),M(y.$$.fragment,N),pe=d(N),M(Y.$$.fragment,N),ce=d(N),M(Me.$$.fragment,N),Ie=d(N),M(Te.$$.fragment,N),De=d(N),M(X.$$.fragment,N),fe=d(N),M(je.$$.fragment,N),ze=d(N),M(ke.$$.fragment,N),Oe=d(N),M(Ve.$$.fragment,N),Ue=d(N),M(Re.$$.fragment,N),W=d(N),M(Ce.$$.fragment,N),Be=d(N),M(Je.$$.fragment,N)},m(N,oe){r(N,e,oe),r(N,s,oe),S(t,N,oe),r(N,p,oe),S(i,N,oe),r(N,u,oe),S(m,N,oe),r(N,n,oe),S($,N,oe),r(N,x,oe),S(l,N,oe),r(N,f,oe),S(L,N,oe),r(N,c,oe),S(b,N,oe),r(N,I,oe),S(E,N,oe),r(N,O,oe),S(A,N,oe),r(N,D,oe),S(B,N,oe),r(N,V,oe),S(K,N,oe),r(N,ie,oe),S(j,N,oe),r(N,se,oe),S(_e,N,oe),r(N,be,oe),S(he,N,oe),r(N,Pe,oe),S(xe,N,oe),r(N,we,oe),S(ge,N,oe),r(N,qe,oe),S(ee,N,oe),r(N,me,oe),S(te,N,oe),r(N,ve,oe),S(le,N,oe),r(N,de,oe),S(He,N,oe),r(N,Ee,oe),S(Se,N,oe),r(N,Ae,oe),S(y,N,oe),r(N,pe,oe),S(Y,N,oe),r(N,ce,oe),S(Me,N,oe),r(N,Ie,oe),S(Te,N,oe),r(N,De,oe),S(X,N,oe),r(N,fe,oe),S(je,N,oe),r(N,ze,oe),S(ke,N,oe),r(N,Oe,oe),S(Ve,N,oe),r(N,Ue,oe),S(Re,N,oe),r(N,W,oe),S(Ce,N,oe),r(N,Be,oe),S(Je,N,oe),Ne=!0},p(N,oe){const F={};oe&1&&(F.$$scope={dirty:oe,ctx:N}),t.$set(F);const $e={};oe&1&&($e.$$scope={dirty:oe,ctx:N}),i.$set($e);const Ze={};oe&1&&(Ze.$$scope={dirty:oe,ctx:N}),m.$set(Ze);const Fe={};oe&1&&(Fe.$$scope={dirty:oe,ctx:N}),$.$set(Fe);const ye={};oe&1&&(ye.$$scope={dirty:oe,ctx:N}),l.$set(ye);const J={};oe&1&&(J.$$scope={dirty:oe,ctx:N}),L.$set(J);const ue={};oe&1&&(ue.$$scope={dirty:oe,ctx:N}),b.$set(ue);const et={};oe&1&&(et.$$scope={dirty:oe,ctx:N}),E.$set(et);const tt={};oe&1&&(tt.$$scope={dirty:oe,ctx:N}),A.$set(tt);const st={};oe&1&&(st.$$scope={dirty:oe,ctx:N}),B.$set(st);const U={};oe&1&&(U.$$scope={dirty:oe,ctx:N}),K.$set(U);const re={};oe&1&&(re.$$scope={dirty:oe,ctx:N}),j.$set(re);const nt={};oe&1&&(nt.$$scope={dirty:oe,ctx:N}),_e.$set(nt);const lt={};oe&1&&(lt.$$scope={dirty:oe,ctx:N}),he.$set(lt);const it={};oe&1&&(it.$$scope={dirty:oe,ctx:N}),xe.$set(it);const R={};oe&1&&(R.$$scope={dirty:oe,ctx:N}),ge.$set(R);const ae={};oe&1&&(ae.$$scope={dirty:oe,ctx:N}),ee.$set(ae);const at={};oe&1&&(at.$$scope={dirty:oe,ctx:N}),te.$set(at);const rt={};oe&1&&(rt.$$scope={dirty:oe,ctx:N}),le.$set(rt);const ut={};oe&1&&(ut.$$scope={dirty:oe,ctx:N}),He.$set(ut);const ot={};oe&1&&(ot.$$scope={dirty:oe,ctx:N}),Se.$set(ot);const $t={};oe&1&&($t.$$scope={dirty:oe,ctx:N}),y.$set($t);const ft={};oe&1&&(ft.$$scope={dirty:oe,ctx:N}),Y.$set(ft);const ct={};oe&1&&(ct.$$scope={dirty:oe,ctx:N}),Me.$set(ct);const pt={};oe&1&&(pt.$$scope={dirty:oe,ctx:N}),Te.$set(pt);const mt={};oe&1&&(mt.$$scope={dirty:oe,ctx:N}),X.$set(mt);const dt={};oe&1&&(dt.$$scope={dirty:oe,ctx:N}),je.$set(dt);const vt={};oe&1&&(vt.$$scope={dirty:oe,ctx:N}),ke.$set(vt);const xt={};oe&1&&(xt.$$scope={dirty:oe,ctx:N}),Ve.$set(xt);const _t={};oe&1&&(_t.$$scope={dirty:oe,ctx:N}),Re.$set(_t);const Ct={};oe&1&&(Ct.$$scope={dirty:oe,ctx:N}),Ce.$set(Ct);const gt={};oe&1&&(gt.$$scope={dirty:oe,ctx:N}),Je.$set(gt)},i(N){Ne||(H(t.$$.fragment,N),H(i.$$.fragment,N),H(m.$$.fragment,N),H($.$$.fragment,N),H(l.$$.fragment,N),H(L.$$.fragment,N),H(b.$$.fragment,N),H(E.$$.fragment,N),H(A.$$.fragment,N),H(B.$$.fragment,N),H(K.$$.fragment,N),H(j.$$.fragment,N),H(_e.$$.fragment,N),H(he.$$.fragment,N),H(xe.$$.fragment,N),H(ge.$$.fragment,N),H(ee.$$.fragment,N),H(te.$$.fragment,N),H(le.$$.fragment,N),H(He.$$.fragment,N),H(Se.$$.fragment,N),H(y.$$.fragment,N),H(Y.$$.fragment,N),H(Me.$$.fragment,N),H(Te.$$.fragment,N),H(X.$$.fragment,N),H(je.$$.fragment,N),H(ke.$$.fragment,N),H(Ve.$$.fragment,N),H(Re.$$.fragment,N),H(Ce.$$.fragment,N),H(Je.$$.fragment,N),Ne=!0)},o(N){P(t.$$.fragment,N),P(i.$$.fragment,N),P(m.$$.fragment,N),P($.$$.fragment,N),P(l.$$.fragment,N),P(L.$$.fragment,N),P(b.$$.fragment,N),P(E.$$.fragment,N),P(A.$$.fragment,N),P(B.$$.fragment,N),P(K.$$.fragment,N),P(j.$$.fragment,N),P(_e.$$.fragment,N),P(he.$$.fragment,N),P(xe.$$.fragment,N),P(ge.$$.fragment,N),P(ee.$$.fragment,N),P(te.$$.fragment,N),P(le.$$.fragment,N),P(He.$$.fragment,N),P(Se.$$.fragment,N),P(y.$$.fragment,N),P(Y.$$.fragment,N),P(Me.$$.fragment,N),P(Te.$$.fragment,N),P(X.$$.fragment,N),P(je.$$.fragment,N),P(ke.$$.fragment,N),P(Ve.$$.fragment,N),P(Re.$$.fragment,N),P(Ce.$$.fragment,N),P(Je.$$.fragment,N),Ne=!1},d(N){N&&(a(e),a(s),a(p),a(u),a(n),a(x),a(f),a(c),a(I),a(O),a(D),a(V),a(ie),a(se),a(be),a(Pe),a(we),a(qe),a(me),a(ve),a(de),a(Ee),a(Ae),a(pe),a(ce),a(Ie),a(De),a(fe),a(ze),a(Oe),a(Ue),a(W),a(Be)),q(t,N),q(i,N),q(m,N),q($,N),q(l,N),q(L,N),q(b,N),q(E,N),q(A,N),q(B,N),q(K,N),q(j,N),q(_e,N),q(he,N),q(xe,N),q(ge,N),q(ee,N),q(te,N),q(le,N),q(He,N),q(Se,N),q(y,N),q(Y,N),q(Me,N),q(Te,N),q(X,N),q(je,N),q(ke,N),q(Ve,N),q(Re,N),q(Ce,N),q(Je,N)}}}function H$(_){let e,o;return e=new z({props:{$$slots:{default:[P$]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const p={};t&1&&(p.$$scope={dirty:t,ctx:s}),e.$set(p)},i(s){o||(H(e.$$.fragment,s),o=!0)},o(s){P(e.$$.fragment,s),o=!1},d(s){q(e,s)}}}class S$ extends Xe{constructor(e){super(),Ye(this,e,null,H$,We,{})}}function M$(_){let e,o="Les annotations",s,t,p="Des métadonnées pour rendre le code plus sûr et extensible",i,u,m=`Les annotations sont un mécanisme de métadonnées en Java.
			On va voir les deux plus importantes que vous utilisez déjà ou allez utiliser :
			@Override et @FunctionalInterface. Puis on verra comment les librairies
			s'en servent pour rendre le code extensible.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H2",{"data-svelte-h":!0}),h(e)!=="svelte-ixo5zc"&&(e.textContent=o),s=d(n),t=C(n,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-x79r33"&&(t.textContent=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-zcl8jy"&&(u.textContent=m),this.h()},h(){w(t,"class","text-2xl text-gray-300"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function T$(_){let e,o="C'est quoi une annotation ?",s,t,p=`Une annotation est une <span class="text-important">métadonnée</span> qu&#39;on place sur un élément
			de code (classe, méthode, attribut...).`,i,u,m="Elle commence toujours par <code>@</code>",n,$,x=`Elle ne modifie pas le comportement du code directement, mais donne des
			<strong>informations</strong> au compilateur ou aux librairies.`,l,f,L=`Pensez aux annotations comme des post-it qu'on colle sur le code.
			Le compilateur ou un framework peut lire ces post-it et agir en conséquence.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("p"),u.innerHTML=m,n=v(),$=g("p"),$.innerHTML=x,l=v(),f=g("aside"),f.textContent=L,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1re7qcs"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-q9jjfm"&&(t.innerHTML=p),i=d(c),u=C(c,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1yuh7hl"&&(u.innerHTML=m),n=d(c),$=C(c,"P",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-zehj6e"&&($.innerHTML=x),l=d(c),f=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(f)!=="svelte-f0qsg1"&&(f.textContent=L),this.h()},h(){w(u,"class","fragment"),w($,"class","fragment"),w(f,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),r(c,u,b),r(c,n,b),r(c,$,b),r(c,l,b),r(c,f,b)},p:k,d(c){c&&(a(e),a(s),a(t),a(i),a(u),a(n),a($),a(l),a(f))}}}function E$(_){let e=`
public class Animal {
    public String parler() {
        return "...";
    }
}

public class Chien extends Animal {
    @Override
    public String parler() {
        return "Woof !";
    }
}`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function A$(_){let e,o="@Override",s,t,p="Vous l&#39;utilisez déjà ! Elle indique qu&#39;une méthode <strong>redéfinit</strong> une méthode de la classe mère.",i,u,m,n,$=`@Override est vérifiée à la compilation. Si la méthode n'existe pas dans la classe mère,
			ça ne compile pas. C'est un filet de sécurité.`,x;return u=new Z({props:{$$slots:{default:[E$]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment),m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1980avm"&&(e.textContent=o),s=d(l),t=C(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1255bml"&&(t.innerHTML=p),i=d(l),M(u.$$.fragment,l),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1o9lp9r"&&(n.textContent=$),this.h()},h(){w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),S(u,l,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),u.$set(L)},i(l){x||(H(u.$$.fragment,l),x=!0)},o(l){P(u.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(t),a(i),a(m),a(n)),q(u,l)}}}function I$(_){let e=`
public class Chien extends Animal {
    // Pas d'erreur... mais ça ne redéfinit rien !
    public String parlre() {
        return "Woof !";
    }
}`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function D$(_){let e,o="@Override — pourquoi c'est utile ?",s,t,p="Sans <code>@Override</code>, une faute de frappe passe inaperçue :",i,u,m,n,$="Avec <code>@Override</code>, le compilateur détecte l&#39;erreur immédiatement.",x,l,f="Règle : toujours mettre @Override quand on redéfinit une méthode.",L,c,b=`C'est une bonne pratique universelle. Tous les IDE modernes ajoutent @Override
			automatiquement. Ça protège aussi quand la classe parente change : si la méthode
			est renommée ou supprimée, on le sait immédiatement.`,I;return u=new Z({props:{$$slots:{default:[I$]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment),m=v(),n=g("p"),n.innerHTML=$,x=v(),l=g("p"),l.textContent=f,L=v(),c=g("aside"),c.textContent=b,this.h()},l(E){e=C(E,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-12azvj8"&&(e.textContent=o),s=d(E),t=C(E,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1mm54fi"&&(t.innerHTML=p),i=d(E),M(u.$$.fragment,E),m=d(E),n=C(E,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-qzwkw3"&&(n.innerHTML=$),x=d(E),l=C(E,"P",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-flyfvk"&&(l.textContent=f),L=d(E),c=C(E,"ASIDE",{class:!0,"data-svelte-h":!0}),h(c)!=="svelte-1muuafk"&&(c.textContent=b),this.h()},h(){w(n,"class","fragment"),w(l,"class","fragment text-important"),w(c,"class","notes")},m(E,O){r(E,e,O),r(E,s,O),r(E,t,O),r(E,i,O),S(u,E,O),r(E,m,O),r(E,n,O),r(E,x,O),r(E,l,O),r(E,L,O),r(E,c,O),I=!0},p(E,O){const A={};O&1&&(A.$$scope={dirty:O,ctx:E}),u.$set(A)},i(E){I||(H(u.$$.fragment,E),I=!0)},o(E){P(u.$$.fragment,E),I=!1},d(E){E&&(a(e),a(s),a(t),a(i),a(m),a(n),a(x),a(l),a(L),a(c)),q(u,E)}}}function j$(_){let e=`
@FunctionalInterface
public interface Filtre<T> {
    boolean tester(T element);
}`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function k$(_){let e,o="@FunctionalInterface",s,t,p="Indique qu&#39;une interface ne contient <strong>qu&#39;une seule méthode</strong>.",i,u,m='Elle pourra donc être utilisée avec une <span class="text-important">expression lambda</span>.',n,$,x,l,f=`Si quelqu'un ajoute une deuxième méthode abstraite par erreur,
			le compilateur refuse de compiler. Comme @Override, c'est un filet de sécurité.`,L;return $=new Z({props:{$$slots:{default:[j$]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("p"),u.innerHTML=m,n=v(),T($.$$.fragment),x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-k97h8"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-8jj312"&&(t.innerHTML=p),i=d(c),u=C(c,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1990egt"&&(u.innerHTML=m),n=d(c),M($.$$.fragment,c),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-t0woxy"&&(l.textContent=f),this.h()},h(){w(u,"class","fragment"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),r(c,u,b),r(c,n,b),S($,c,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),$.$set(I)},i(c){L||(H($.$$.fragment,c),L=!0)},o(c){P($.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(u),a(n),a(x),a(l)),q($,c)}}}function O$(_){let e=`
List<String> noms = List.of("Alice", "Bob", "Charlie");

// Le filtre est une lambda qui implémente Filtre<String>
Filtre<String> filtreLong = nom -> nom.length() > 3;

noms.stream()
    .filter(nom -> filtreLong.tester(nom))
    .forEach(System.out::println);
// Alice, Charlie`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function z$(_){let e,o="@FunctionalInterface — utilisation",s,t,p="Grâce à cette annotation, on peut passer un lambda :",i,u,m,n,$=`Sans <code>@FunctionalInterface</code>, ça marche aussi... mais on perd la
			<strong>garantie</strong> qu&#39;il n&#39;y a qu&#39;une méthode.`,x,l,f=`C'est exactement comme ça que fonctionne Predicate dans java.util.function.
			Predicate est annoté @FunctionalInterface. Comparator aussi.`,L;return u=new Z({props:{$$slots:{default:[O$]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),T(u.$$.fragment),m=v(),n=g("p"),n.innerHTML=$,x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1ornkat"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1u4xor6"&&(t.textContent=p),i=d(c),M(u.$$.fragment,c),m=d(c),n=C(c,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-voubbj"&&(n.innerHTML=$),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-1r9eg3t"&&(l.textContent=f),this.h()},h(){w(n,"class","fragment"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),S(u,c,b),r(c,m,b),r(c,n,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),u.$set(I)},i(c){L||(H(u.$$.fragment,c),L=!0)},o(c){P(u.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(n),a(x),a(l)),q(u,c)}}}function V$(_){let e,o="Les annotations dans les librairies",s,t,p=`Les annotations sont le mécanisme qui permet aux librairies Java de
			<span class="text-important">scanner votre code</span> et d&#39;agir automatiquement.`,i,u,m="Quelques exemples concrets :",n,$,x='<li class="fragment"><strong>JUnit</strong> : <code>@Test</code> → la méthode est un test à exécuter</li> <li class="fragment"><strong>JPA/Hibernate</strong> : <code>@Entity</code> → la classe correspond à une table en BDD</li> <li class="fragment"><strong>Spring</strong> : <code>@Service</code> → la classe est instanciée et gérée automatiquement</li> <li class="fragment"><strong>Jackson</strong> : <code>@JsonProperty</code> → contrôle la sérialisation JSON</li>',l,f,L=`Le point commun : vous ne changez pas votre logique métier, vous ajoutez juste
			une annotation et la librairie fait le reste. C'est ça la puissance des annotations.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("p"),u.textContent=m,n=v(),$=g("ul"),$.innerHTML=x,l=v(),f=g("aside"),f.textContent=L,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-17ocv4g"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-71ixch"&&(t.innerHTML=p),i=d(c),u=C(c,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-154ytye"&&(u.textContent=m),n=d(c),$=C(c,"UL",{"data-svelte-h":!0}),h($)!=="svelte-73k1ym"&&($.innerHTML=x),l=d(c),f=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(f)!=="svelte-14mspu4"&&(f.textContent=L),this.h()},h(){w(u,"class","fragment"),w(f,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),r(c,u,b),r(c,n,b),r(c,$,b),r(c,l,b),r(c,f,b)},p:k,d(c){c&&(a(e),a(s),a(t),a(i),a(u),a(n),a($),a(l),a(f))}}}function R$(_){let e=`
public class CalculatriceTest {

    @Test
    void testAddition() {
        Calculatrice calc = new Calculatrice();
        assertEquals(4, calc.additionner(2, 2));
    }

    @Test
    void testDivision() {
        Calculatrice calc = new Calculatrice();
        assertEquals(5, calc.diviser(10, 2));
    }
}`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function U$(_){let e,o="Exemple concret : JUnit",s,t,p="Comment JUnit sait quelles méthodes lancer ?",i,u,m,n,$=`JUnit scanne la classe, trouve les méthodes annotées <code>@Test</code>,
			et les exécute automatiquement.`,x,l,f=`Sans annotations, il faudrait écrire du code pour dire "exécute cette méthode,
			puis celle-ci". L'annotation rend le code déclaratif : on dit QUOI faire, pas COMMENT.`,L;return u=new Z({props:{$$slots:{default:[R$]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),T(u.$$.fragment),m=v(),n=g("p"),n.innerHTML=$,x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1y13re6"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-xvc912"&&(t.textContent=p),i=d(c),M(u.$$.fragment,c),m=d(c),n=C(c,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1t11ca"&&(n.innerHTML=$),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-14iqw87"&&(l.textContent=f),this.h()},h(){w(n,"class","fragment"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),S(u,c,b),r(c,m,b),r(c,n,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),u.$set(I)},i(c){L||(H(u.$$.fragment,c),L=!0)},o(c){P(u.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(n),a(x),a(l)),q(u,c)}}}function J$(_){let e=`
@Entity
@Table(name = "etudiants")
public class Etudiant {
    @Id
    @GeneratedValue
    private Long id;

    @Column(name = "nom")
    private String nom;

    @Column(name = "prenom")
    private String prenom;
}`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function B$(_){let e,o="Exemple concret : JPA",s,t,p="Comment Hibernate sait que votre classe est une table ?",i,u,m,n,$=`Hibernate lit les annotations et génère automatiquement les requêtes SQL.
			<br/>Vous n&#39;écrivez <strong>aucune ligne de SQL</strong>.`,x,l,f=`C'est un ORM : Object-Relational Mapping. La classe Java est mappée sur la table SQL
			grâce aux annotations. On verra ça plus en détail en 4ICS.`,L;return u=new Z({props:{$$slots:{default:[J$]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),T(u.$$.fragment),m=v(),n=g("p"),n.innerHTML=$,x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-8gbob5"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-hgsmtb"&&(t.textContent=p),i=d(c),M(u.$$.fragment,c),m=d(c),n=C(c,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-4mo7h7"&&(n.innerHTML=$),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-1hx23jf"&&(l.textContent=f),this.h()},h(){w(n,"class","fragment"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),S(u,c,b),r(c,m,b),r(c,n,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),u.$set(I)},i(c){L||(H(u.$$.fragment,c),L=!0)},o(c){P(u.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(n),a(x),a(l)),q(u,c)}}}function N$(_){let e,o="Pourquoi les annotations ?",s,t,p="Rendre le code extensible sans le modifier",i,u,m="Vous écrivez votre logique métier normalement.",n,$,x="Vous ajoutez des annotations pour que les librairies comprennent votre code.",l,f,L="La librairie change ? Votre code métier reste le même.",c,b,I=`C&#39;est une forme du <strong>Open/Closed Principle</strong> :
			ouvert à l&#39;extension, fermé à la modification.`,E,O,A=`C'est la raison principale de l'existence des annotations. Elles découplent
			votre code de la librairie. C'est ce qui rend le code Java moderne si déclaratif
			et modulaire. En entreprise, vous verrez des annotations partout.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("p"),u.textContent=m,n=v(),$=g("p"),$.textContent=x,l=v(),f=g("p"),f.textContent=L,c=v(),b=g("p"),b.innerHTML=I,E=v(),O=g("aside"),O.textContent=A,this.h()},l(D){e=C(D,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1vnr9qv"&&(e.textContent=o),s=d(D),t=C(D,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1fcv22v"&&(t.textContent=p),i=d(D),u=C(D,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1trf2u7"&&(u.textContent=m),n=d(D),$=C(D,"P",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-1dwuo7e"&&($.textContent=x),l=d(D),f=C(D,"P",{class:!0,"data-svelte-h":!0}),h(f)!=="svelte-1l19k2j"&&(f.textContent=L),c=d(D),b=C(D,"P",{class:!0,"data-svelte-h":!0}),h(b)!=="svelte-1bs879a"&&(b.innerHTML=I),E=d(D),O=C(D,"ASIDE",{class:!0,"data-svelte-h":!0}),h(O)!=="svelte-1mea77x"&&(O.textContent=A),this.h()},h(){w(t,"class","text-important"),w(u,"class","fragment"),w($,"class","fragment"),w(f,"class","fragment"),w(b,"class","fragment"),w(O,"class","notes")},m(D,B){r(D,e,B),r(D,s,B),r(D,t,B),r(D,i,B),r(D,u,B),r(D,n,B),r(D,$,B),r(D,l,B),r(D,f,B),r(D,c,B),r(D,b,B),r(D,E,B),r(D,O,B)},p:k,d(D){D&&(a(e),a(s),a(t),a(i),a(u),a(n),a($),a(l),a(f),a(c),a(b),a(E),a(O))}}}function F$(_){let e,o,s,t,p,i,u,m,n,$,x,l,f,L,c,b,I,E,O,A;return e=new z({props:{data_background_color:"#1a1a2e",$$slots:{default:[M$]},$$scope:{ctx:_}}}),s=new z({props:{$$slots:{default:[T$]},$$scope:{ctx:_}}}),p=new z({props:{$$slots:{default:[A$]},$$scope:{ctx:_}}}),u=new z({props:{$$slots:{default:[D$]},$$scope:{ctx:_}}}),n=new z({props:{$$slots:{default:[k$]},$$scope:{ctx:_}}}),x=new z({props:{$$slots:{default:[z$]},$$scope:{ctx:_}}}),f=new z({props:{$$slots:{default:[V$]},$$scope:{ctx:_}}}),c=new z({props:{$$slots:{default:[U$]},$$scope:{ctx:_}}}),I=new z({props:{$$slots:{default:[B$]},$$scope:{ctx:_}}}),O=new z({props:{$$slots:{default:[N$]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment),o=v(),T(s.$$.fragment),t=v(),T(p.$$.fragment),i=v(),T(u.$$.fragment),m=v(),T(n.$$.fragment),$=v(),T(x.$$.fragment),l=v(),T(f.$$.fragment),L=v(),T(c.$$.fragment),b=v(),T(I.$$.fragment),E=v(),T(O.$$.fragment)},l(D){M(e.$$.fragment,D),o=d(D),M(s.$$.fragment,D),t=d(D),M(p.$$.fragment,D),i=d(D),M(u.$$.fragment,D),m=d(D),M(n.$$.fragment,D),$=d(D),M(x.$$.fragment,D),l=d(D),M(f.$$.fragment,D),L=d(D),M(c.$$.fragment,D),b=d(D),M(I.$$.fragment,D),E=d(D),M(O.$$.fragment,D)},m(D,B){S(e,D,B),r(D,o,B),S(s,D,B),r(D,t,B),S(p,D,B),r(D,i,B),S(u,D,B),r(D,m,B),S(n,D,B),r(D,$,B),S(x,D,B),r(D,l,B),S(f,D,B),r(D,L,B),S(c,D,B),r(D,b,B),S(I,D,B),r(D,E,B),S(O,D,B),A=!0},p(D,B){const V={};B&1&&(V.$$scope={dirty:B,ctx:D}),e.$set(V);const K={};B&1&&(K.$$scope={dirty:B,ctx:D}),s.$set(K);const ie={};B&1&&(ie.$$scope={dirty:B,ctx:D}),p.$set(ie);const j={};B&1&&(j.$$scope={dirty:B,ctx:D}),u.$set(j);const se={};B&1&&(se.$$scope={dirty:B,ctx:D}),n.$set(se);const _e={};B&1&&(_e.$$scope={dirty:B,ctx:D}),x.$set(_e);const be={};B&1&&(be.$$scope={dirty:B,ctx:D}),f.$set(be);const he={};B&1&&(he.$$scope={dirty:B,ctx:D}),c.$set(he);const Pe={};B&1&&(Pe.$$scope={dirty:B,ctx:D}),I.$set(Pe);const xe={};B&1&&(xe.$$scope={dirty:B,ctx:D}),O.$set(xe)},i(D){A||(H(e.$$.fragment,D),H(s.$$.fragment,D),H(p.$$.fragment,D),H(u.$$.fragment,D),H(n.$$.fragment,D),H(x.$$.fragment,D),H(f.$$.fragment,D),H(c.$$.fragment,D),H(I.$$.fragment,D),H(O.$$.fragment,D),A=!0)},o(D){P(e.$$.fragment,D),P(s.$$.fragment,D),P(p.$$.fragment,D),P(u.$$.fragment,D),P(n.$$.fragment,D),P(x.$$.fragment,D),P(f.$$.fragment,D),P(c.$$.fragment,D),P(I.$$.fragment,D),P(O.$$.fragment,D),A=!1},d(D){D&&(a(o),a(t),a(i),a(m),a($),a(l),a(L),a(b),a(E)),q(e,D),q(s,D),q(p,D),q(u,D),q(n,D),q(x,D),q(f,D),q(c,D),q(I,D),q(O,D)}}}function G$(_){let e,o;return e=new z({props:{$$slots:{default:[F$]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const p={};t&1&&(p.$$scope={dirty:t,ctx:s}),e.$set(p)},i(s){o||(H(e.$$.fragment,s),o=!0)},o(s){P(e.$$.fragment,s),o=!1},d(s){q(e,s)}}}class Q$ extends Xe{constructor(e){super(),Ye(this,e,null,G$,We,{})}}function K$(_){let e,o="Patrons de conception",s,t,p='Cours très bien expliqué : <a href="https://refactoring.guru/fr" target="_blank">Refactoring Guru</a>',i,u,m=`Le "Gang of Four" (GoF) a défini 23 patterns en 1994 dans leur livre célèbre. Refactoring Guru
			est une ressource moderne excellente avec des exemples en Java. On ne verra que les patterns
			les plus utiles au quotidien.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H2",{"data-svelte-h":!0}),h(e)!=="svelte-l6cb4s"&&(e.textContent=o),s=d(n),t=C(n,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-19668a8"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1rskdmi"&&(u.textContent=m),this.h()},h(){w(t,"class","fragment"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function W$(_){let e,o="Qu'est-ce qu'un patron de conception ?",s,t,p=`Un patron de conception est une <span class="text-important">solution éprouvée</span> à un problème
			récurrent en conception logicielle.`,i,u,m="Les bons développeurs connaissent ces patrons et savent quand les utiliser.",n,$,x="Un DP bien identifié permet de communiquer plus facilement avec les autres développeurs !",l,f,L=`C'est un vocabulaire commun. Dire "c'est un Singleton" est plus clair que d'expliquer tout le
			mécanisme. En revue de code ou en entretien, connaître les DP fait la différence. Mais
			attention : ne pas forcer un pattern où il n'est pas nécessaire (over-engineering).`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("p"),u.textContent=m,n=v(),$=g("p"),$.textContent=x,l=v(),f=g("aside"),f.textContent=L,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-ac53e2"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-bk152s"&&(t.innerHTML=p),i=d(c),u=C(c,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-v3oh7e"&&(u.textContent=m),n=d(c),$=C(c,"P",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-5y4sz1"&&($.textContent=x),l=d(c),f=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(f)!=="svelte-1rw29t4"&&(f.textContent=L),this.h()},h(){w(u,"class","fragment"),w($,"class","fragment text-important"),w(f,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),r(c,u,b),r(c,n,b),r(c,$,b),r(c,l,b),r(c,f,b)},p:k,d(c){c&&(a(e),a(s),a(t),a(i),a(u),a(n),a($),a(l),a(f))}}}function X$(_){let e,o="Sont-ils indispensables ?",s,t,p="Non, mais ils sont très utiles pour résoudre des problèmes courants de manière efficace.",i,u,m=`C'est un peu comme si nous avions observé des bouts de code qui marchent bien, et que nous les
			avions classés et regroupés pour les proposer à tous.`,n,$,x="Vous utilisez probablement déjà des patrons de conception sans le savoir !";return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("p"),u.textContent=m,n=v(),$=g("p"),$.textContent=x,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-ewtcvs"&&(e.textContent=o),s=d(l),t=C(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1lzbry7"&&(t.textContent=p),i=d(l),u=C(l,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-rjcphj"&&(u.textContent=m),n=d(l),$=C(l,"P",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-1bi4lwv"&&($.textContent=x),this.h()},h(){w(u,"class","fragment"),w($,"class","fragment text-important")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,u,f),r(l,n,f),r(l,$,f)},p:k,d(l){l&&(a(e),a(s),a(t),a(i),a(u),a(n),a($))}}}function Y$(_){let e,o="Fil rouge",s,t,p="On développe le système informatique d'un restaurant.",i,u,m=`Caisse, commandes, cuisine, paiements, options...<br/>
			Chaque fonctionnalité va poser un problème d&#39;architecture.`,n,$,x=`On va construire ce système feature par feature. À chaque problème, on verra d'abord
			l'approche naïve et pourquoi elle casse, puis le DP qui résout proprement.
			L'objectif : qu'à la lecture d'un cahier des charges, vous sachiez identifier quel pattern utiliser.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("p"),u.innerHTML=m,n=v(),$=g("aside"),$.textContent=x,this.h()},l(l){e=C(l,"H2",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-1gmk383"&&(e.textContent=o),s=d(l),t=C(l,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-y74vg7"&&(t.textContent=p),i=d(l),u=C(l,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-n48xnr"&&(u.innerHTML=m),n=d(l),$=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-yph3xz"&&($.textContent=x),this.h()},h(){w(e,"class","text-5xl"),w(t,"class","text-2xl text-gray-300"),w(u,"class","fragment text-xl text-gray-400 mt-4"),w($,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,u,f),r(l,n,f),r(l,$,f)},p:k,d(l){l&&(a(e),a(s),a(t),a(i),a(u),a(n),a($))}}}function Z$(_){let e,o="Le cahier des charges",s,t,p='<thead><tr><th class="p-3">Fonctionnalité</th> <th class="p-3">Problème</th> <th class="p-3">Pattern</th></tr></thead> <tbody><tr class="fragment"><td class="p-3">Gérer le stock (chargé depuis la BDD)</td> <td class="p-3 text-red-400">Coûteux à créer, doit être unique</td> <td class="p-3 text-accent-200">Singleton</td></tr> <tr class="fragment"><td class="p-3">Préparer différents types de plats</td> <td class="p-3 text-red-400">switch/case partout, couplage fort</td> <td class="p-3 text-accent-200">Factory</td></tr> <tr class="fragment"><td class="p-3">Prévenir cuisine + bar quand une commande arrive</td> <td class="p-3 text-red-400">Appels codés en dur, inextensible</td> <td class="p-3 text-accent-200">Observer</td></tr> <tr class="fragment"><td class="p-3">Accepter CB, Lydia, espèces, ticket resto</td> <td class="p-3 text-red-400">Cascade de if/else</td> <td class="p-3 text-accent-200">Strategy</td></tr> <tr class="fragment"><td class="p-3">Ajouter options (emballage, supplément, anniversaire)</td> <td class="p-3 text-red-400">Explosion de sous-classes</td> <td class="p-3 text-accent-200">Decorator</td></tr></tbody>',i,u,m=`Voilà la feuille de route. Chaque ligne du cahier des charges cache un problème d'architecture.
			On va les traiter un par un.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("table"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-u59mxm"&&(e.textContent=o),s=d(n),t=C(n,"TABLE",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-s3t1nj"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-13nvvyd"&&(u.textContent=m),this.h()},h(){w(t,"class","text-xl mt-4"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function y$(_){let e,o="Problème n°1",s,t,p="Gérer le stock du restaurant";return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("h3"),t.textContent=p,this.h()},l(i){e=C(i,"H2",{"data-svelte-h":!0}),h(e)!=="svelte-bjocam"&&(e.textContent=o),s=d(i),t=C(i,"H3",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1453yvv"&&(t.textContent=p),this.h()},h(){w(t,"class","text-gray-400")},m(i,u){r(i,e,u),r(i,s,u),r(i,t,u)},p:k,d(i){i&&(a(e),a(s),a(t))}}}function ef(_){let e=`
GestionnaireStock stockCaisse = new GestionnaireStock();
// Charge la BDD ⏳ (lent)
stockCaisse.verifier("Saumon");

GestionnaireStock stockCuisine = new GestionnaireStock();
// Re-charge la BDD ⏳ (encore !)
stockCuisine.consommer("Saumon", 1);

// La caisse ne voit pas le changement !
stockCaisse.verifier("Saumon"); // Données périmées 💥
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function tf(_){let e,o="Le stock : l'approche naïve",s,t,p="Chaque service crée sa propre instance du gestionnaire de stock :",i,u,m,n,$=`Deux problèmes : 1) On charge la base de données à chaque fois, c'est lent.
			2) Les deux instances ont des données différentes, c'est incohérent.
			C'est comme si chaque serveur avait sa propre copie du tableau des stocks
			écrit au crayon. Personne ne voit les modifications des autres.`,x;return u=new Z({props:{$$slots:{default:[ef]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),T(u.$$.fragment),m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-xnoa6t"&&(e.textContent=o),s=d(l),t=C(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1oju64i"&&(t.textContent=p),i=d(l),M(u.$$.fragment,l),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-170dacz"&&(n.textContent=$),this.h()},h(){w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),S(u,l,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),u.$set(L)},i(l){x||(H(u.$$.fragment,l),x=!0)},o(l){P(u.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(t),a(i),a(m),a(n)),q(u,l)}}}function sf(_){let e=`
@startuml
object "stockCaisse : GestionnaireStock" as a {
  saumon = 5
}
object "stockCuisine : GestionnaireStock" as b {
  saumon = 4
}
object "Base de données" as db {
  saumon = 4
}
a -[hidden]right- b
a ..> db : chargé à t=0
b ..> db : chargé à t=1
@enduml
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function lf(_){let e,o="Pourquoi c'est un problème ?",s,t,p,i,u=`Deux instances = deux vérités différentes.
			<br/>La caisse vend un plat qui n&#39;a plus d&#39;ingrédients !`,m;return t=new Ke({props:{$$slots:{default:[sf]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-jmise3"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-m5o4eo"&&(i.innerHTML=u),this.h()},h(){w(i,"class","fragment text-red-400 font-bold mt-4")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function nf(_){let e,o='<a href="https://refactoring.guru/fr/design-patterns/singleton" target="_blank">Singleton</a>',s,t,p=`Le Singleton garantit qu&#39;<span class="text-important">une seule instance</span> d&#39;une classe existe,
		avec un point d&#39;accès global.`,i,u,m='<img alt="Singleton" src="https://refactoring.guru/images/patterns/content/singleton/singleton-comic-1-fr-1.5x.png?id=fb4a24934b5ca4ae16fa0ebb834f99a2"/>';return{c(){e=g("h3"),e.innerHTML=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("div"),u.innerHTML=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-8iggdr"&&(e.innerHTML=o),s=d(n),t=C(n,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1effpv2"&&(t.innerHTML=p),i=d(n),u=C(n,"DIV",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1icmfk1"&&(u.innerHTML=m),this.h()},h(){w(u,"class","flex items-center justify-center gap-6 mt-4")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function af(_){let e=`
@startuml
class GestionnaireStock {
  - {static} instance : GestionnaireStock
  - stocks : Map<String, Integer>
  - GestionnaireStock()
  + {static} getInstance() : GestionnaireStock
  + verifier(ingredient : String) : boolean
  + consommer(ingredient : String, qte : int)
}
note right of GestionnaireStock::GestionnaireStock
  Constructeur PRIVÉ :
  impossible de faire new
end note
@enduml
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function rf(_){let e,o='<a href="https://refactoring.guru/fr/design-patterns/singleton" target="_blank">Singleton</a>',s,t,p=`Le Singleton garantit qu&#39;<span class="text-important">une seule instance</span> d&#39;une classe existe,
			avec un point d&#39;accès global.`,i,u,m,n,$,x,l,f,L=`Le constructeur est privé : personne ne peut faire new GestionnaireStock().
			On passe obligatoirement par getInstance() qui crée l'instance au premier appel,
			puis retourne toujours la même. C'est le "lazy initialization".`,c;return x=new Ke({props:{$$slots:{default:[af]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.innerHTML=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("div"),m=g("img"),$=v(),T(x.$$.fragment),l=v(),f=g("aside"),f.textContent=L,this.h()},l(b){e=C(b,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-8iggdr"&&(e.innerHTML=o),s=d(b),t=C(b,"P",{"data-svelte-h":!0}),h(t)!=="svelte-2sifkv"&&(t.innerHTML=p),i=d(b),u=C(b,"DIV",{class:!0});var I=Le(u);m=C(I,"IMG",{class:!0,src:!0,alt:!0}),$=d(I),M(x.$$.fragment,I),I.forEach(a),l=d(b),f=C(b,"ASIDE",{class:!0,"data-svelte-h":!0}),h(f)!=="svelte-eqhq90"&&(f.textContent=L),this.h()},h(){w(m,"class","w-1/3"),Rt(m.src,n="https://refactoring.guru/images/patterns/diagrams/singleton/structure-fr.png")||w(m,"src",n),w(m,"alt","Singleton"),w(u,"class","flex items-center gap-6 mt-4"),w(f,"class","notes")},m(b,I){r(b,e,I),r(b,s,I),r(b,t,I),r(b,i,I),r(b,u,I),ne(u,m),ne(u,$),S(x,u,null),r(b,l,I),r(b,f,I),c=!0},p(b,I){const E={};I&1&&(E.$$scope={dirty:I,ctx:b}),x.$set(E)},i(b){c||(H(x.$$.fragment,b),c=!0)},o(b){P(x.$$.fragment,b),c=!1},d(b){b&&(a(e),a(s),a(t),a(i),a(u),a(l),a(f)),q(x)}}}function uf(_){let e=`
public class GestionnaireStock {
    private static GestionnaireStock instance;
    private Map<String, Integer> stocks;

    private GestionnaireStock() {
        // Chargement coûteux depuis la base de données
        this.stocks = BaseDeDonnees.chargerStocks();
    }

    public static GestionnaireStock getInstance() {
        if (instance == null) {
            instance = new GestionnaireStock();
        }
        return instance;
    }

    public boolean verifier(String ingredient, int quantite) {
        return stocks.getOrDefault(ingredient, 0) >= quantite;
    }
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function of(_){let e,o="Singleton — en code",s,t,p;return t=new Z({props:{lines:"1-4|6-12|14-16",$$slots:{default:[uf]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(i){e=C(i,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-3ck2ud"&&(e.textContent=o),s=d(i),M(t.$$.fragment,i)},m(i,u){r(i,e,u),r(i,s,u),S(t,i,u),p=!0},p(i,u){const m={};u&1&&(m.$$scope={dirty:u,ctx:i}),t.$set(m)},i(i){p||(H(t.$$.fragment,i),p=!0)},o(i){P(t.$$.fragment,i),p=!1},d(i){i&&(a(e),a(s)),q(t,i)}}}function $f(_){let e=`
// Partout dans l'application, c'est LA MÊME instance :
GestionnaireStock stock = GestionnaireStock.getInstance();
stock.verifier("Saumon", 1); // true

GestionnaireStock.getInstance().consommer("Saumon", 1);
GestionnaireStock.getInstance().verifier("Saumon", 1);
// Donnée à jour partout ✅
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function ff(_){let e,o="Singleton — utilisation",s,t,p,i,u="Un seul chargement BDD. Une seule source de vérité.",m,n,$="Imaginez maintenant que je veuille consulter le stock depuis le site web du restaurant... Le Singleton me permet d'accéder facilement à cette instance depuis n'importe quelle classe, même celles qui n'ont pas de lien direct avec la gestion du stock.",x;return t=new Z({props:{$$slots:{default:[$f]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.textContent=u,m=v(),n=g("p"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-tg55u6"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-10jcybs"&&(i.textContent=u),m=d(l),n=C(l,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1tdoknn"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4 text-accent-200"),w(n,"class","fragment")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function cf(_){let e,o="Problème n°2",s,t,p="Préparer les plats";return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("h3"),t.textContent=p,this.h()},l(i){e=C(i,"H2",{"data-svelte-h":!0}),h(e)!=="svelte-1d889in"&&(e.textContent=o),s=d(i),t=C(i,"H3",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-4s7ql6"&&(t.textContent=p),this.h()},h(){w(t,"class","text-gray-400")},m(i,u){r(i,e,u),r(i,s,u),r(i,t,u)},p:k,d(i){i&&(a(e),a(s),a(t))}}}function pf(_){let e=`
Plat plat;
if (choix.equals("Pizza")) {
    plat = new Pizza("Margherita", BaseSauce.TOMATE, 180, 240);
} else if (choix.equals("Steak")) {
    plat = new Steak("Entrecôte", Cuisson.A_POINT, true);
} else if (choix.equals("Salade")) {
    plat = new Salade("César", true, "Parmesan");
}
// Et si demain on ajoute des Sushis ? 😬
// → Ce switch/case est dupliqué partout !
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function mf(_){let e,o="La cuisine : l'approche naïve",s,t,p="Le serveur doit savoir comment créer chaque type de plat :",i,u,m,n,$=`Le serveur ne devrait pas avoir à savoir comment chaque plat est fabriqué.
			En plus, ce switch sera dupliqué partout où on crée des plats.
			Et chaque nouveau plat oblige à modifier tous ces endroits.`,x;return u=new Z({props:{$$slots:{default:[pf]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),T(u.$$.fragment),m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-kk20kh"&&(e.textContent=o),s=d(l),t=C(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1jdxrmu"&&(t.textContent=p),i=d(l),M(u.$$.fragment,l),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-iprrw6"&&(n.textContent=$),this.h()},h(){w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),S(u,l,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),u.$set(L)},i(l){x||(H(u.$$.fragment,l),x=!0)},o(l){P(u.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(t),a(i),a(m),a(n)),q(u,l)}}}function df(_){let e,o='<a href="https://refactoring.guru/fr/design-patterns/factory-method" target="_blank">Factory</a>',s,t,p=`La Factory <span class="text-important">délègue la création</span> d&#39;objets à une classe spécialisée.
			L&#39;appelant ne connaît pas les détails de construction.`,i,u,m='<img alt="Factory" src="https://refactoring.guru/images/patterns/content/factory-method/factory-method-fr-1.5x.png"/>';return{c(){e=g("h3"),e.innerHTML=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("div"),u.innerHTML=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-5epmdf"&&(e.innerHTML=o),s=d(n),t=C(n,"P",{"data-svelte-h":!0}),h(t)!=="svelte-dyvi7y"&&(t.innerHTML=p),i=d(n),u=C(n,"DIV",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-iu2u65"&&(u.innerHTML=m),this.h()},h(){w(u,"class","flex items-center justify-center gap-6 mt-4")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function vf(_){let e=`
@startuml
abstract class Plat {
  - nom : String
  - prix : double
  + {abstract} preparer() : void
}
class Pizza extends Plat {
  + preparer()
}
class Steak extends Plat {
  + preparer()
}
class Salade extends Plat {
  + preparer()
}
class Cuisine {
  + {static} creerPlat(type : String) : Plat
}
Cuisine ..> Plat : crée
@enduml
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function xf(_){let e,o='<a href="https://refactoring.guru/fr/design-patterns/factory-method" target="_blank">Factory</a>',s,t,p=`La Factory <span class="text-important">délègue la création</span> d&#39;objets à une classe spécialisée.
			L&#39;appelant ne connaît pas les détails de construction.`,i,u,m,n,$,x,l;return x=new Ke({props:{$$slots:{default:[vf]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.innerHTML=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("div"),m=g("img"),$=v(),T(x.$$.fragment),this.h()},l(f){e=C(f,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-5epmdf"&&(e.innerHTML=o),s=d(f),t=C(f,"P",{"data-svelte-h":!0}),h(t)!=="svelte-dyvi7y"&&(t.innerHTML=p),i=d(f),u=C(f,"DIV",{class:!0});var L=Le(u);m=C(L,"IMG",{class:!0,src:!0,alt:!0}),$=d(L),M(x.$$.fragment,L),L.forEach(a),this.h()},h(){w(m,"class","w-2/5"),Rt(m.src,n="https://refactoring.guru/images/patterns/diagrams/factory-method/solution1-1.5x.png?id=22d3b6bb74e966d1cb3a4d8f380cefa3")||w(m,"src",n),w(m,"alt","Factory"),w(u,"class","flex justify-center mb-4")},m(f,L){r(f,e,L),r(f,s,L),r(f,t,L),r(f,i,L),r(f,u,L),ne(u,m),ne(u,$),S(x,u,null),l=!0},p(f,L){const c={};L&1&&(c.$$scope={dirty:L,ctx:f}),x.$set(c)},i(f){l||(H(x.$$.fragment,f),l=!0)},o(f){P(x.$$.fragment,f),l=!1},d(f){f&&(a(e),a(s),a(t),a(i),a(u)),q(x)}}}function _f(_){let e=`
public abstract class Plat {
    private String nom;
    private double prix;
    public abstract void preparer();
}

public class Pizza extends Plat {
    @Override
    public void preparer() {
        System.out.println("Pâte, sauce tomate, garniture, four 180°C");
    }
}

public class Cuisine {
    public static Plat creerPlat(String type) {
        return switch (type) {
            case "Pizza" -> new Pizza("Margherita", BaseSauce.TOMATE, 180, 240);
            case "Steak" -> new Steak("Entrecôte", Cuisson.A_POINT, true);
            case "Salade" -> new Salade("César", true, "Parmesan");
            default -> throw new IllegalArgumentException("Plat inconnu : " + type);
        };
    }
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Cf(_){let e,o="Factory — en code",s,t,p;return t=new Z({props:{lines:"1-9|11-19",$$slots:{default:[_f]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(i){e=C(i,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-kmiqj0"&&(e.textContent=o),s=d(i),M(t.$$.fragment,i)},m(i,u){r(i,e,u),r(i,s,u),S(t,i,u),p=!0},p(i,u){const m={};u&1&&(m.$$scope={dirty:u,ctx:i}),t.$set(m)},i(i){p||(H(t.$$.fragment,i),p=!0)},o(i){P(t.$$.fragment,i),p=!1},d(i){i&&(a(e),a(s)),q(t,i)}}}function gf(_){let e=`
// Le serveur ne sait rien de la construction :
Plat commande = Cuisine.creerPlat("Pizza");
commande.preparer();

// Ajouter un Sushi ? Modifier uniquement la Factory.
// Aucun autre code à toucher. ✅
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function hf(_){let e,o="Factory — utilisation",s,t,p,i,u="Le <code>switch</code> existe toujours… mais à <b>un seul endroit</b>, dans la Factory.",m,n,$="Imaginez que je veuille rajouter un nouveau plat, il me suffit d'enrichir la Factory. Aucun autre code à toucher, même pas celui de la cuisine !",x,l,f=`On centralise la complexité de création. Le serveur manipule des Plat sans savoir
			si c'est une Pizza ou un Steak. C'est du polymorphisme en action.`,L;return t=new Z({props:{$$slots:{default:[gf]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("p"),n.textContent=$,x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-6t868r"&&(e.textContent=o),s=d(c),M(t.$$.fragment,c),p=d(c),i=C(c,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-ov89fz"&&(i.innerHTML=u),m=d(c),n=C(c,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-17q9s3c"&&(n.textContent=$),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-1vqcvnx"&&(l.textContent=f),this.h()},h(){w(i,"class","fragment text-accent-200 mt-4"),w(n,"class","fragment"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),S(t,c,b),r(c,p,b),r(c,i,b),r(c,m,b),r(c,n,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),t.$set(I)},i(c){L||(H(t.$$.fragment,c),L=!0)},o(c){P(t.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(p),a(i),a(m),a(n),a(x),a(l)),q(t,c)}}}function bf(_){let e,o="Problème n°3",s,t,p="Notifier les postes quand une commande arrive";return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("h3"),t.textContent=p,this.h()},l(i){e=C(i,"H2",{"data-svelte-h":!0}),h(e)!=="svelte-qfnq7s"&&(e.textContent=o),s=d(i),t=C(i,"H3",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-60rudz"&&(t.textContent=p),this.h()},h(){w(t,"class","text-gray-400")},m(i,u){r(i,e,u),r(i,s,u),r(i,t,u)},p:k,d(i){i&&(a(e),a(s),a(t))}}}function Lf(_){let e=`
public class Caisse {
    private PosteCuisine cuisine = new PosteCuisine();
    private PosteBar bar = new PosteBar();

    public void enregistrerCommande(Commande cmd) {
        cuisine.recevoirCommande(cmd);
        bar.recevoirCommande(cmd);
        // Demain : Deliveroo ? Uber Eats ? Le KDS du chef ?
        // → Modifier cette classe à chaque fois 😬
    }
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function wf(_){let e,o="Les notifications : l'approche naïve",s,t,p="La caisse appelle directement chaque poste :",i,u,m,n,$=`La caisse connaît tous les postes en dur. Ajouter un poste = modifier la caisse.
			C'est une violation du principe Open/Closed : la classe devrait être ouverte à
			l'extension mais fermée à la modification.`,x;return u=new Z({props:{$$slots:{default:[Lf]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),T(u.$$.fragment),m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-133hxma"&&(e.textContent=o),s=d(l),t=C(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1v9rsv4"&&(t.textContent=p),i=d(l),M(u.$$.fragment,l),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1dughxl"&&(n.textContent=$),this.h()},h(){w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),S(u,l,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),u.$set(L)},i(l){x||(H(u.$$.fragment,l),x=!0)},o(l){P(u.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(t),a(i),a(m),a(n)),q(u,l)}}}function qf(_){let e,o='<a href="https://refactoring.guru/fr/design-patterns/observer" target="_blank">Observer</a>',s,t,p=`L&#39;Observer définit une relation <span class="text-important">un-à-plusieurs</span> :
			quand un objet change d&#39;état, tous ses abonnés sont notifiés automatiquement.`,i,u,m='<img alt="Observer" src="https://refactoring.guru/images/patterns/content/observer/observer-comic-1-fr-1.5x.png"/>';return{c(){e=g("h3"),e.innerHTML=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("div"),u.innerHTML=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1lhtn3z"&&(e.innerHTML=o),s=d(n),t=C(n,"P",{"data-svelte-h":!0}),h(t)!=="svelte-w88cwz"&&(t.innerHTML=p),i=d(n),u=C(n,"DIV",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1takh1d"&&(u.innerHTML=m),this.h()},h(){w(u,"class","flex items-center justify-center gap-6 mt-4")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function Pf(_){let e=`
@startuml
interface ObservateurCommande {
  + nouvelleCommande(cmd : Commande)
}
class Caisse {
  - observateurs : List<ObservateurCommande>
  + abonner(obs : ObservateurCommande)
  + desabonner(obs : ObservateurCommande)
  + enregistrerCommande(cmd : Commande)
}
class PosteCuisine implements ObservateurCommande
class PosteBar implements ObservateurCommande
class PosteLivraison implements ObservateurCommande
Caisse --> "0..*" ObservateurCommande : notifie
@enduml
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Hf(_){let e,o='<a href="https://refactoring.guru/fr/design-patterns/observer" target="_blank">Observer</a>',s,t,p=`L&#39;Observer définit une relation <span class="text-important">un-à-plusieurs</span> :
			quand un objet change d&#39;état, tous ses abonnés sont notifiés automatiquement.`,i,u,m,n,$,x,l;return x=new Ke({props:{$$slots:{default:[Pf]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.innerHTML=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("div"),m=g("img"),$=v(),T(x.$$.fragment),this.h()},l(f){e=C(f,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1lhtn3z"&&(e.innerHTML=o),s=d(f),t=C(f,"P",{"data-svelte-h":!0}),h(t)!=="svelte-w88cwz"&&(t.innerHTML=p),i=d(f),u=C(f,"DIV",{class:!0});var L=Le(u);m=C(L,"IMG",{class:!0,src:!0,alt:!0}),$=d(L),M(x.$$.fragment,L),L.forEach(a),this.h()},h(){w(m,"class","w-2/5"),Rt(m.src,n="https://refactoring.guru/images/patterns/diagrams/observer/solution1-fr-1.5x.png?id=4d40a8f8f1fe59b34580a4c341766b03")||w(m,"src",n),w(m,"alt","Observer"),w(u,"class","flex justify-center mb-4")},m(f,L){r(f,e,L),r(f,s,L),r(f,t,L),r(f,i,L),r(f,u,L),ne(u,m),ne(u,$),S(x,u,null),l=!0},p(f,L){const c={};L&1&&(c.$$scope={dirty:L,ctx:f}),x.$set(c)},i(f){l||(H(x.$$.fragment,f),l=!0)},o(f){P(x.$$.fragment,f),l=!1},d(f){f&&(a(e),a(s),a(t),a(i),a(u)),q(x)}}}function Sf(_){let e=`
public interface ObservateurCommande {
    void nouvelleCommande(Commande commande);
}

public class Caisse {
    private List<ObservateurCommande> observateurs = new ArrayList<>();

    public void abonner(ObservateurCommande obs) {
        observateurs.add(obs);
    }

    public void enregistrerCommande(Commande cmd) {
        // Traitement de la commande...
        for (ObservateurCommande obs : observateurs) {
            obs.nouvelleCommande(cmd);
        }
    }
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Mf(_){let e,o="Observer — en code",s,t,p;return t=new Z({props:{lines:"1-3|5-18",$$slots:{default:[Sf]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(i){e=C(i,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-13ary26"&&(e.textContent=o),s=d(i),M(t.$$.fragment,i)},m(i,u){r(i,e,u),r(i,s,u),S(t,i,u),p=!0},p(i,u){const m={};u&1&&(m.$$scope={dirty:u,ctx:i}),t.$set(m)},i(i){p||(H(t.$$.fragment,i),p=!0)},o(i){P(t.$$.fragment,i),p=!1},d(i){i&&(a(e),a(s)),q(t,i)}}}function Tf(_){let e=`
public class PosteCuisine implements ObservateurCommande {
    @Override
    public void nouvelleCommande(Commande cmd) {
        System.out.println("Cuisine : préparer " + cmd.getPlat());
    }
}

public class PosteBar implements ObservateurCommande {
    @Override
    public void nouvelleCommande(Commande cmd) {
        if (cmd.contientBoisson()) {
            System.out.println("Bar : préparer " + cmd.getBoisson());
        }
    }
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Ef(_){let e,o="Observer — les abonnés",s,t,p,i,u=`Ajouter Deliveroo ? Créer <code>PosteLivraison implements ObservateurCommande</code>.
			<br/><b>Zéro modification</b> de la Caisse.`,m;return t=new Z({props:{$$slots:{default:[Tf]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-9wd0w2"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-1vjmoec"&&(i.innerHTML=u),this.h()},h(){w(i,"class","fragment text-accent-200 mt-4")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function Af(_){let e=`
Caisse caisse = new Caisse();
caisse.abonner(new PosteCuisine());
caisse.abonner(new PosteBar());
caisse.abonner(new PosteLivraison()); // Nouveau ! Sans toucher Caisse

Commande cmd = new Commande("Pizza", "Mojito");
caisse.enregistrerCommande(cmd);
// Cuisine : préparer Pizza
// Bar : préparer Mojito
// Livraison : commande reçue
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function If(_){let e,o="Observer — utilisation",s,t,p,i,u="Imaginez que l'on veuille prévenir les livreurs Deliveroo lorsqu'une commande est prête à être livrée. Avec l'Observer, il suffit de créer un nouveau poste de livraison qui s'abonne à la caisse. Aucun code existant à modifier, on respecte le principe Open/Closed.",m,n,$=`C'est le pattern des événements : addEventListener en JavaScript, les listeners en Java Swing.
			En Java moderne, Spring Events utilise exactement ce pattern avec @EventListener.`,x;return t=new Z({props:{$$slots:{default:[Af]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.textContent=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1e5ybk3"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-1l14tgj"&&(i.textContent=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1f5aw4x"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function Df(_){let e,o="Problème n°4",s,t,p="Régler l'addition";return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("h3"),t.textContent=p,this.h()},l(i){e=C(i,"H2",{"data-svelte-h":!0}),h(e)!=="svelte-19zqtp5"&&(e.textContent=o),s=d(i),t=C(i,"H3",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-mbfs53"&&(t.textContent=p),this.h()},h(){w(t,"class","text-gray-400")},m(i,u){r(i,e,u),r(i,s,u),r(i,t,u)},p:k,d(i){i&&(a(e),a(s),a(t))}}}function jf(_){let e=`
public void reglerAddition(Commande cmd, String moyenPaiement) {
    if (moyenPaiement.equals("CB")) {
        // Connexion au TPE, vérification...
    } else if (moyenPaiement.equals("Especes")) {
        // Vérifier le montant, rendre la monnaie...
    } else if (moyenPaiement.equals("TicketResto")) {
        // Vérifier validité, plafond midi...
    } else if (moyenPaiement.equals("Lydia")) {
        // Appel API, notification...
    }
    // Et Apple Pay ? Et le chèque vacances ?
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function kf(_){let e,o="Le paiement : l'approche naïve",s,t,p,i,u="Chaque nouveau moyen de paiement allonge cette méthode.",m;return t=new Z({props:{$$slots:{default:[jf]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.textContent=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1hmej0y"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-1e076up"&&(i.textContent=u),this.h()},h(){w(i,"class","fragment text-red-400 mt-2")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function Of(_){let e,o='<a href="https://refactoring.guru/fr/design-patterns/strategy" target="_blank">Strategy</a>',s,t,p=`La Strategy <span class="text-important">encapsule des algorithmes interchangeables</span>
			derrière une interface commune.`,i,u,m='<img alt="Strategy" src="https://refactoring.guru/images/patterns/content/strategy/strategy-comic-1-fr-1.5x.png"/>';return{c(){e=g("h3"),e.innerHTML=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("div"),u.innerHTML=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1ha575b"&&(e.innerHTML=o),s=d(n),t=C(n,"P",{"data-svelte-h":!0}),h(t)!=="svelte-nnqjdx"&&(t.innerHTML=p),i=d(n),u=C(n,"DIV",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1nmjlge"&&(u.innerHTML=m),this.h()},h(){w(u,"class","flex items-center justify-center gap-6 mt-4")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function zf(_){let e=`
@startuml
interface StrategiePaiement {
  + payer(montant : double) : boolean
}
class PaiementCB implements StrategiePaiement {
  + payer(montant : double) : boolean
}
class PaiementEspeces implements StrategiePaiement {
  + payer(montant : double) : boolean
}
class PaiementTicketResto implements StrategiePaiement {
  + payer(montant : double) : boolean
}
class PaiementLydia implements StrategiePaiement {
  + payer(montant : double) : boolean
}
class Caisse {
  + reglerAddition(cmd : Commande, strategie : StrategiePaiement)
}
Caisse ..> StrategiePaiement : utilise
@enduml
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Vf(_){let e,o='<a href="https://refactoring.guru/fr/design-patterns/strategy" target="_blank">Strategy</a>',s,t,p=`La Strategy <span class="text-important">encapsule des algorithmes interchangeables</span>
			derrière une interface commune.`,i,u,m='<img class="w-2/5" src="https://refactoring.guru/images/patterns/diagrams/strategy/solution-1.5x.png?id=ce3d4e57f4a2a06ebc96f2607b3d6691" alt="Strategy"/>',n,$,x;return $=new Ke({props:{$$slots:{default:[zf]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.innerHTML=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("div"),u.innerHTML=m,n=v(),T($.$$.fragment),this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1ha575b"&&(e.innerHTML=o),s=d(l),t=C(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-nnqjdx"&&(t.innerHTML=p),i=d(l),u=C(l,"DIV",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-jd8wtp"&&(u.innerHTML=m),n=d(l),M($.$$.fragment,l),this.h()},h(){w(u,"class","flex items-center justify-center gap-6 mt-4")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,u,f),r(l,n,f),S($,l,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),$.$set(L)},i(l){x||(H($.$$.fragment,l),x=!0)},o(l){P($.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(t),a(i),a(u),a(n)),q($,l)}}}function Rf(_){let e=`
public interface StrategiePaiement {
    boolean payer(double montant);
}

public class PaiementCB implements StrategiePaiement {
    @Override
    public boolean payer(double montant) {
        System.out.println("Connexion TPE...");
        System.out.println("Paiement CB : " + montant + "€ ✅");
        return true;
    }
}

public class PaiementTicketResto implements StrategiePaiement {
    @Override
    public boolean payer(double montant) {
        if (!estMidi()) {
            throw new IllegalStateException("Valable le midi uniquement !");
        }
        System.out.println("Ticket resto : " + montant + "€ ✅");
        return true;
    }
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Uf(_){let e,o="Strategy — en code",s,t,p;return t=new Z({props:{lines:"1-3|5-13|15-22",$$slots:{default:[Rf]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(i){e=C(i,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-110y71l"&&(e.textContent=o),s=d(i),M(t.$$.fragment,i)},m(i,u){r(i,e,u),r(i,s,u),S(t,i,u),p=!0},p(i,u){const m={};u&1&&(m.$$scope={dirty:u,ctx:i}),t.$set(m)},i(i){p||(H(t.$$.fragment,i),p=!0)},o(i){P(t.$$.fragment,i),p=!1},d(i){i&&(a(e),a(s)),q(t,i)}}}function Jf(_){let e=`
public void reglerAddition(Commande cmd, StrategiePaiement strategie) {
    double montant = cmd.getTotal();
    strategie.payer(montant);  // On ne sait pas COMMENT ça paie
}

// Le client choisit son moyen de paiement
reglerAddition(cmd, new PaiementCB());
reglerAddition(cmd, new PaiementTicketResto());
reglerAddition(cmd, new PaiementLydia());

// Ajouter Apple Pay ? Créer PaiementApplePay.
// Zéro modification de la méthode reglerAddition ✅
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Bf(_){let e,o="Strategy — utilisation",s,t,p,i,u="Le <code>if/else</code> a disparu. Chaque stratégie gère ses propres règles.",m,n,$="Imaginez que je veuille proposer un nouveau moyen de paiement. Avec la Strategy, il me suffit de créer une nouvelle classe PaiementCarteCrous qui implémente l'interface StrategiePaiement. Aucun code existant à modifier, même pas celui de la caisse !",x,l,f=`On pourrait même choisir la stratégie à l'exécution en fonction de l'interface utilisateur.
			C'est exactement ce que font les applications de paiement.`,L;return t=new Z({props:{$$slots:{default:[Jf]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("p"),n.textContent=$,x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-6pnai0"&&(e.textContent=o),s=d(c),M(t.$$.fragment,c),p=d(c),i=C(c,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-14jbw6f"&&(i.innerHTML=u),m=d(c),n=C(c,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-14rahvr"&&(n.textContent=$),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-aoqvg5"&&(l.textContent=f),this.h()},h(){w(i,"class","fragment text-accent-200 mt-4"),w(n,"class","fragment"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),S(t,c,b),r(c,p,b),r(c,i,b),r(c,m,b),r(c,n,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),t.$set(I)},i(c){L||(H(t.$$.fragment,c),L=!0)},o(c){P(t.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(p),a(i),a(m),a(n),a(x),a(l)),q(t,c)}}}function Nf(_){let e,o="Problème n°5",s,t,p="Les options sur une commande";return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("h3"),t.textContent=p,this.h()},l(i){e=C(i,"H2",{"data-svelte-h":!0}),h(e)!=="svelte-t1darm"&&(e.textContent=o),s=d(i),t=C(i,"H3",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1nlhh3p"&&(t.textContent=p),this.h()},h(){w(t,"class","text-gray-400")},m(i,u){r(i,e,u),r(i,s,u),r(i,t,u)},p:k,d(i){i&&(a(e),a(s),a(t))}}}function Ff(_){let e=`
class Commande { }
class CommandeEmballageCadeau extends Commande { }
class CommandeSupplementFromage extends Commande { }
class CommandeAnniversaire extends Commande { }
class CommandeEmballageEtFromage extends Commande { }
class CommandeEmballageEtAnniversaire extends Commande { }
class CommandeFromageEtAnniversaire extends Commande { }
class CommandeEmballageFromageAnniversaire extends Commande { }
// 2^n sous-classes pour n options !
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Gf(_){let e,o="Les options : l'approche naïve",s,t,p=`Un client veut un emballage cadeau. Un autre un supplément fromage.
			Un troisième fête son anniversaire…`,i,u,m;return u=new Z({props:{$$slots:{default:[Ff]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),T(u.$$.fragment)},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-dg9blc"&&(e.textContent=o),s=d(n),t=C(n,"P",{"data-svelte-h":!0}),h(t)!=="svelte-lli0mj"&&(t.textContent=p),i=d(n),M(u.$$.fragment,n)},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),S(u,n,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),u.$set(x)},i(n){m||(H(u.$$.fragment,n),m=!0)},o(n){P(u.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(t),a(i)),q(u,n)}}}function Qf(_){let e,o='<a href="https://refactoring.guru/fr/design-patterns/decorator" target="_blank">Decorator</a>',s,t,p=`Le Decorator <span class="text-important">empile des fonctionnalités</span> sur un objet existant,
			dynamiquement, sans modifier sa classe.`,i,u,m='<img alt="Decorator" src="https://refactoring.guru/images/patterns/content/decorator/decorator-1.5x.png"/>';return{c(){e=g("h3"),e.innerHTML=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("div"),u.innerHTML=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-zclbbz"&&(e.innerHTML=o),s=d(n),t=C(n,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1j66oow"&&(t.innerHTML=p),i=d(n),u=C(n,"DIV",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-jqvg5j"&&(u.innerHTML=m),this.h()},h(){w(u,"class","flex items-center justify-center gap-6 mt-4")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function Kf(_){let e=`
@startuml
abstract class Commande {
  + {abstract} getDescription() : String
  + {abstract} getPrix() : double
}
class CommandeSimple extends Commande {
  + getDescription() : String
  + getPrix() : double
}
abstract class OptionCommande extends Commande {
  # commandeDecoree : Commande
}
class EmballageCadeau extends OptionCommande {
  + getDescription() : String
  + getPrix() : double
}
class SupplementFromage extends OptionCommande {
  + getDescription() : String
  + getPrix() : double
}
OptionCommande o--> Commande : décore
@enduml
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Wf(_){let e,o='<a href="https://refactoring.guru/fr/design-patterns/decorator" target="_blank">Decorator</a>',s,t,p=`Le Decorator <span class="text-important">empile des fonctionnalités</span> sur un objet existant,
			dynamiquement, sans modifier sa classe.`,i,u,m,n,$,x,l;return x=new Ke({props:{$$slots:{default:[Kf]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.innerHTML=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("div"),m=g("img"),$=v(),T(x.$$.fragment),this.h()},l(f){e=C(f,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-zclbbz"&&(e.innerHTML=o),s=d(f),t=C(f,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1j66oow"&&(t.innerHTML=p),i=d(f),u=C(f,"DIV",{class:!0});var L=Le(u);m=C(L,"IMG",{class:!0,src:!0,alt:!0}),$=d(L),M(x.$$.fragment,L),L.forEach(a),this.h()},h(){w(m,"class","w-2/5"),Rt(m.src,n="https://refactoring.guru/images/patterns/diagrams/decorator/solution2-1.5x.png")||w(m,"src",n),w(m,"alt","Decorator"),w(u,"class","flex justify-center mb-4")},m(f,L){r(f,e,L),r(f,s,L),r(f,t,L),r(f,i,L),r(f,u,L),ne(u,m),ne(u,$),S(x,u,null),l=!0},p(f,L){const c={};L&1&&(c.$$scope={dirty:L,ctx:f}),x.$set(c)},i(f){l||(H(x.$$.fragment,f),l=!0)},o(f){P(x.$$.fragment,f),l=!1},d(f){f&&(a(e),a(s),a(t),a(i),a(u)),q(x)}}}function Xf(_){let e=`
public abstract class Commande {
    public abstract String getDescription();
    public abstract double getPrix();
}

public class CommandeSimple extends Commande {
    private Plat plat;
    public CommandeSimple(Plat plat) { this.plat = plat; }
    @Override
    public String getDescription() { return plat.getNom(); }
    @Override
    public double getPrix() { return plat.getPrix(); }
}

public abstract class OptionCommande extends Commande {
    protected Commande commandeDecoree;
    public OptionCommande(Commande cmd) {
        this.commandeDecoree = cmd;
    }
}

public class EmballageCadeau extends OptionCommande {
    public EmballageCadeau(Commande cmd) { super(cmd); }
    @Override
    public String getDescription() {
        return commandeDecoree.getDescription() + " + emballage cadeau";
    }
    @Override
    public double getPrix() {
        return commandeDecoree.getPrix() + 2.50;
    }
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Yf(_){let e,o="Decorator — en code",s,t,p;return t=new Z({props:{lines:"1-4|6-15|17-24",$$slots:{default:[Xf]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(i){e=C(i,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-5xfxw1"&&(e.textContent=o),s=d(i),M(t.$$.fragment,i)},m(i,u){r(i,e,u),r(i,s,u),S(t,i,u),p=!0},p(i,u){const m={};u&1&&(m.$$scope={dirty:u,ctx:i}),t.$set(m)},i(i){p||(H(t.$$.fragment,i),p=!0)},o(i){P(t.$$.fragment,i),p=!1},d(i){i&&(a(e),a(s)),q(t,i)}}}function Zf(_){let e=`
Plat pizza = Cuisine.creerPlat("Pizza");           // Factory !

Commande cmd = new CommandeSimple(pizza);
// "Pizza" — 12.00€

cmd = new SupplementFromage(cmd);
// "Pizza + supplément fromage" — 13.50€

cmd = new EmballageCadeau(cmd);
// "Pizza + supplément fromage + emballage cadeau" — 16.00€

System.out.println(cmd.getDescription());
System.out.println(cmd.getPrix() + "€");
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function yf(_){let e,o="Decorator — utilisation",s,t,p,i,u=`On empile les options comme des poupées russes.<br/>
			N&#39;importe quelle combinaison, zéro sous-classe supplémentaire.`,m,n,$=`Exemple Java célèbre : les I/O streams.
			new BufferedReader(new InputStreamReader(new FileInputStream("f.txt")))
			C'est du Decorator ! Chaque couche ajoute une fonctionnalité.`,x;return t=new Z({props:{$$slots:{default:[Zf]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-pkvorm"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-yc8ht0"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-2zpozy"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment text-accent-200 mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function ec(_){let e,o="Ils se combinent !",s,t,p="Un seul système, plusieurs patterns";return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,this.h()},l(i){e=C(i,"H2",{"data-svelte-h":!0}),h(e)!=="svelte-185fzbk"&&(e.textContent=o),s=d(i),t=C(i,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1fcnxez"&&(t.textContent=p),this.h()},h(){w(t,"class","text-gray-400 text-2xl")},m(i,u){r(i,e,u),r(i,s,u),r(i,t,u)},p:k,d(i){i&&(a(e),a(s),a(t))}}}function tc(_){let e=`
// Le stock est un Singleton
GestionnaireStock.getInstance().verifier("Saumon", 1);

// La cuisine utilise une Factory
Plat plat = Cuisine.creerPlat("Pizza");

// On décore la commande (Decorator)
Commande cmd = new EmballageCadeau(new CommandeSimple(plat));

// La caisse notifie les postes (Observer)
caisse.enregistrerCommande(cmd);

// Le client paie avec sa Strategy
caisse.reglerAddition(cmd, new PaiementLydia());
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function sc(_){let e,o="Vue d'ensemble",s,t,p,i,u="5 patterns, 0 conflit. Chacun résout <b>son</b> problème.",m;return t=new Z({props:{$$slots:{default:[tc]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-zreck6"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-1kxl0ii"&&(i.innerHTML=u),this.h()},h(){w(i,"class","fragment text-accent-200 mt-4")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function lc(_){let e,o="Conclusion",s,t,p="Les patrons de conception sont :",i,u,m='<li class="fragment"><b>Dispensables</b> — on peut coder sans, mais on galère</li> <li class="fragment"><b>Très utiles</b> — ils résolvent des problèmes réels</li> <li class="fragment"><b>Combinables</b> — ils n&#39;entrent pas en conflit</li> <li class="fragment"><b>Universels</b> — même principe en Java, C#, Python, TypeScript…</li>',n,$,x=`Ne les appliquez pas systématiquement. "YAGNI" — You Ain't Gonna Need It.
			Mais quand le besoin se présente, c'est super puissant de les reconnaître.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("ul"),u.innerHTML=m,n=v(),$=g("aside"),$.textContent=x,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-d7kqkf"&&(e.textContent=o),s=d(l),t=C(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1lmqdm0"&&(t.textContent=p),i=d(l),u=C(l,"UL",{"data-svelte-h":!0}),h(u)!=="svelte-4wj3zh"&&(u.innerHTML=m),n=d(l),$=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-37jx1e"&&($.textContent=x),this.h()},h(){w($,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,u,f),r(l,n,f),r(l,$,f)},p:k,d(l){l&&(a(e),a(s),a(t),a(i),a(u),a(n),a($))}}}function nc(_){let e,o="Attendus",s,t,p="À l'aide du cours et du site présenté en début de chapitre, maîtrisez-en le plus possible.",i,u,m=`Sans les DP, vous savez coder en POO, mais c'est le niveau débutant. Les DP font de vous un
			"bien meilleur" développeur.`,n,$,x=`En entreprise, vous les croiserez partout. Spring en utilise plein. Entraînez-vous à les
			reconnaître dans du code existant.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("p"),u.textContent=m,n=v(),$=g("aside"),$.textContent=x,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-7wwxn0"&&(e.textContent=o),s=d(l),t=C(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-sco4s6"&&(t.textContent=p),i=d(l),u=C(l,"P",{"data-svelte-h":!0}),h(u)!=="svelte-1nb32vx"&&(u.textContent=m),n=d(l),$=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-1ddbp1t"&&($.textContent=x),this.h()},h(){w($,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,u,f),r(l,n,f),r(l,$,f)},p:k,d(l){l&&(a(e),a(s),a(t),a(i),a(u),a(n),a($))}}}function ic(_){let e,o="Attendus",s,t,p=`Si vous donnez le TP entier à faire à une IA, il est probable qu'elle vous donne une solution
			avec peu de DP mais qui répond immédiatement à la demande.`,i,u,m=`Quand on gère le cas de l'anniversaire ou l'ajout d'un nouveau moyen de paiement, si on n'a pas eu
			le réflexe dès le début d'utiliser les DP, on ne fait que casser son code et recommencer.`,n,$,x=`Pour le projet, faites le plus de DP possible ! S'il n'y en a pas, je vous demanderai de
			rajouter une nouvelle fonctionnalité qui cassera tout votre code jusqu'à ce que vous soyez
			assez prévoyant.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("p"),u.textContent=m,n=v(),$=g("p"),$.textContent=x,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-7wwxn0"&&(e.textContent=o),s=d(l),t=C(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1sj8obk"&&(t.textContent=p),i=d(l),u=C(l,"P",{"data-svelte-h":!0}),h(u)!=="svelte-oup2ct"&&(u.textContent=m),n=d(l),$=C(l,"P",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-71dxlz"&&($.textContent=x),this.h()},h(){w($,"class","text-important")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,u,f),r(l,n,f),r(l,$,f)},p:k,d(l){l&&(a(e),a(s),a(t),a(i),a(u),a(n),a($))}}}function ac(_){let e,o,s,t,p,i,u,m,n,$,x,l,f,L,c,b,I,E,O,A,D,B,V,K,ie,j,se,_e,be,he,Pe,xe,we,ge,qe,ee,me,te,ve,le,de,He,Ee,Se,Ae,y,pe,Y,ce,Me,Ie,Te,De,X,fe,je,ze,ke,Oe,Ve,Ue,Re,W,Ce,Be,Je,Ne,N,oe,F,$e,Ze,Fe,ye,J,ue,et,tt,st,U,re,nt,lt,it;return e=new z({props:{$$slots:{default:[K$]},$$scope:{ctx:_}}}),s=new z({props:{$$slots:{default:[W$]},$$scope:{ctx:_}}}),p=new z({props:{$$slots:{default:[X$]},$$scope:{ctx:_}}}),u=new z({props:{data_background_color:"#1a1a2e",$$slots:{default:[Y$]},$$scope:{ctx:_}}}),n=new z({props:{$$slots:{default:[Z$]},$$scope:{ctx:_}}}),x=new z({props:{data_background_color:"#1a1a2e",$$slots:{default:[y$]},$$scope:{ctx:_}}}),f=new z({props:{$$slots:{default:[tf]},$$scope:{ctx:_}}}),c=new z({props:{$$slots:{default:[lf]},$$scope:{ctx:_}}}),I=new z({props:{$$slots:{default:[nf]},$$scope:{ctx:_}}}),O=new z({props:{$$slots:{default:[rf]},$$scope:{ctx:_}}}),D=new z({props:{$$slots:{default:[of]},$$scope:{ctx:_}}}),V=new z({props:{$$slots:{default:[ff]},$$scope:{ctx:_}}}),ie=new z({props:{data_background_color:"#1a1a2e",$$slots:{default:[cf]},$$scope:{ctx:_}}}),se=new z({props:{$$slots:{default:[mf]},$$scope:{ctx:_}}}),be=new z({props:{$$slots:{default:[df]},$$scope:{ctx:_}}}),Pe=new z({props:{$$slots:{default:[xf]},$$scope:{ctx:_}}}),we=new z({props:{$$slots:{default:[Cf]},$$scope:{ctx:_}}}),qe=new z({props:{$$slots:{default:[hf]},$$scope:{ctx:_}}}),me=new z({props:{data_background_color:"#1a1a2e",$$slots:{default:[bf]},$$scope:{ctx:_}}}),ve=new z({props:{$$slots:{default:[wf]},$$scope:{ctx:_}}}),de=new z({props:{$$slots:{default:[qf]},$$scope:{ctx:_}}}),Ee=new z({props:{$$slots:{default:[Hf]},$$scope:{ctx:_}}}),Ae=new z({props:{$$slots:{default:[Mf]},$$scope:{ctx:_}}}),pe=new z({props:{$$slots:{default:[Ef]},$$scope:{ctx:_}}}),ce=new z({props:{$$slots:{default:[If]},$$scope:{ctx:_}}}),Ie=new z({props:{data_background_color:"#1a1a2e",$$slots:{default:[Df]},$$scope:{ctx:_}}}),De=new z({props:{$$slots:{default:[kf]},$$scope:{ctx:_}}}),fe=new z({props:{$$slots:{default:[Of]},$$scope:{ctx:_}}}),ze=new z({props:{$$slots:{default:[Vf]},$$scope:{ctx:_}}}),Oe=new z({props:{$$slots:{default:[Uf]},$$scope:{ctx:_}}}),Ue=new z({props:{$$slots:{default:[Bf]},$$scope:{ctx:_}}}),W=new z({props:{data_background_color:"#1a1a2e",$$slots:{default:[Nf]},$$scope:{ctx:_}}}),Be=new z({props:{$$slots:{default:[Gf]},$$scope:{ctx:_}}}),Ne=new z({props:{$$slots:{default:[Qf]},$$scope:{ctx:_}}}),oe=new z({props:{$$slots:{default:[Wf]},$$scope:{ctx:_}}}),$e=new z({props:{$$slots:{default:[Yf]},$$scope:{ctx:_}}}),Fe=new z({props:{$$slots:{default:[yf]},$$scope:{ctx:_}}}),J=new z({props:{data_background_color:"#1a1a2e",$$slots:{default:[ec]},$$scope:{ctx:_}}}),et=new z({props:{$$slots:{default:[sc]},$$scope:{ctx:_}}}),st=new z({props:{$$slots:{default:[lc]},$$scope:{ctx:_}}}),re=new z({props:{data_background_color:"#00353F",$$slots:{default:[nc]},$$scope:{ctx:_}}}),lt=new z({props:{data_background_color:"#00353F",$$slots:{default:[ic]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment),o=v(),T(s.$$.fragment),t=v(),T(p.$$.fragment),i=v(),T(u.$$.fragment),m=v(),T(n.$$.fragment),$=v(),T(x.$$.fragment),l=v(),T(f.$$.fragment),L=v(),T(c.$$.fragment),b=v(),T(I.$$.fragment),E=v(),T(O.$$.fragment),A=v(),T(D.$$.fragment),B=v(),T(V.$$.fragment),K=v(),T(ie.$$.fragment),j=v(),T(se.$$.fragment),_e=v(),T(be.$$.fragment),he=v(),T(Pe.$$.fragment),xe=v(),T(we.$$.fragment),ge=v(),T(qe.$$.fragment),ee=v(),T(me.$$.fragment),te=v(),T(ve.$$.fragment),le=v(),T(de.$$.fragment),He=v(),T(Ee.$$.fragment),Se=v(),T(Ae.$$.fragment),y=v(),T(pe.$$.fragment),Y=v(),T(ce.$$.fragment),Me=v(),T(Ie.$$.fragment),Te=v(),T(De.$$.fragment),X=v(),T(fe.$$.fragment),je=v(),T(ze.$$.fragment),ke=v(),T(Oe.$$.fragment),Ve=v(),T(Ue.$$.fragment),Re=v(),T(W.$$.fragment),Ce=v(),T(Be.$$.fragment),Je=v(),T(Ne.$$.fragment),N=v(),T(oe.$$.fragment),F=v(),T($e.$$.fragment),Ze=v(),T(Fe.$$.fragment),ye=v(),T(J.$$.fragment),ue=v(),T(et.$$.fragment),tt=v(),T(st.$$.fragment),U=v(),T(re.$$.fragment),nt=v(),T(lt.$$.fragment)},l(R){M(e.$$.fragment,R),o=d(R),M(s.$$.fragment,R),t=d(R),M(p.$$.fragment,R),i=d(R),M(u.$$.fragment,R),m=d(R),M(n.$$.fragment,R),$=d(R),M(x.$$.fragment,R),l=d(R),M(f.$$.fragment,R),L=d(R),M(c.$$.fragment,R),b=d(R),M(I.$$.fragment,R),E=d(R),M(O.$$.fragment,R),A=d(R),M(D.$$.fragment,R),B=d(R),M(V.$$.fragment,R),K=d(R),M(ie.$$.fragment,R),j=d(R),M(se.$$.fragment,R),_e=d(R),M(be.$$.fragment,R),he=d(R),M(Pe.$$.fragment,R),xe=d(R),M(we.$$.fragment,R),ge=d(R),M(qe.$$.fragment,R),ee=d(R),M(me.$$.fragment,R),te=d(R),M(ve.$$.fragment,R),le=d(R),M(de.$$.fragment,R),He=d(R),M(Ee.$$.fragment,R),Se=d(R),M(Ae.$$.fragment,R),y=d(R),M(pe.$$.fragment,R),Y=d(R),M(ce.$$.fragment,R),Me=d(R),M(Ie.$$.fragment,R),Te=d(R),M(De.$$.fragment,R),X=d(R),M(fe.$$.fragment,R),je=d(R),M(ze.$$.fragment,R),ke=d(R),M(Oe.$$.fragment,R),Ve=d(R),M(Ue.$$.fragment,R),Re=d(R),M(W.$$.fragment,R),Ce=d(R),M(Be.$$.fragment,R),Je=d(R),M(Ne.$$.fragment,R),N=d(R),M(oe.$$.fragment,R),F=d(R),M($e.$$.fragment,R),Ze=d(R),M(Fe.$$.fragment,R),ye=d(R),M(J.$$.fragment,R),ue=d(R),M(et.$$.fragment,R),tt=d(R),M(st.$$.fragment,R),U=d(R),M(re.$$.fragment,R),nt=d(R),M(lt.$$.fragment,R)},m(R,ae){S(e,R,ae),r(R,o,ae),S(s,R,ae),r(R,t,ae),S(p,R,ae),r(R,i,ae),S(u,R,ae),r(R,m,ae),S(n,R,ae),r(R,$,ae),S(x,R,ae),r(R,l,ae),S(f,R,ae),r(R,L,ae),S(c,R,ae),r(R,b,ae),S(I,R,ae),r(R,E,ae),S(O,R,ae),r(R,A,ae),S(D,R,ae),r(R,B,ae),S(V,R,ae),r(R,K,ae),S(ie,R,ae),r(R,j,ae),S(se,R,ae),r(R,_e,ae),S(be,R,ae),r(R,he,ae),S(Pe,R,ae),r(R,xe,ae),S(we,R,ae),r(R,ge,ae),S(qe,R,ae),r(R,ee,ae),S(me,R,ae),r(R,te,ae),S(ve,R,ae),r(R,le,ae),S(de,R,ae),r(R,He,ae),S(Ee,R,ae),r(R,Se,ae),S(Ae,R,ae),r(R,y,ae),S(pe,R,ae),r(R,Y,ae),S(ce,R,ae),r(R,Me,ae),S(Ie,R,ae),r(R,Te,ae),S(De,R,ae),r(R,X,ae),S(fe,R,ae),r(R,je,ae),S(ze,R,ae),r(R,ke,ae),S(Oe,R,ae),r(R,Ve,ae),S(Ue,R,ae),r(R,Re,ae),S(W,R,ae),r(R,Ce,ae),S(Be,R,ae),r(R,Je,ae),S(Ne,R,ae),r(R,N,ae),S(oe,R,ae),r(R,F,ae),S($e,R,ae),r(R,Ze,ae),S(Fe,R,ae),r(R,ye,ae),S(J,R,ae),r(R,ue,ae),S(et,R,ae),r(R,tt,ae),S(st,R,ae),r(R,U,ae),S(re,R,ae),r(R,nt,ae),S(lt,R,ae),it=!0},p(R,ae){const at={};ae&1&&(at.$$scope={dirty:ae,ctx:R}),e.$set(at);const rt={};ae&1&&(rt.$$scope={dirty:ae,ctx:R}),s.$set(rt);const ut={};ae&1&&(ut.$$scope={dirty:ae,ctx:R}),p.$set(ut);const ot={};ae&1&&(ot.$$scope={dirty:ae,ctx:R}),u.$set(ot);const $t={};ae&1&&($t.$$scope={dirty:ae,ctx:R}),n.$set($t);const ft={};ae&1&&(ft.$$scope={dirty:ae,ctx:R}),x.$set(ft);const ct={};ae&1&&(ct.$$scope={dirty:ae,ctx:R}),f.$set(ct);const pt={};ae&1&&(pt.$$scope={dirty:ae,ctx:R}),c.$set(pt);const mt={};ae&1&&(mt.$$scope={dirty:ae,ctx:R}),I.$set(mt);const dt={};ae&1&&(dt.$$scope={dirty:ae,ctx:R}),O.$set(dt);const vt={};ae&1&&(vt.$$scope={dirty:ae,ctx:R}),D.$set(vt);const xt={};ae&1&&(xt.$$scope={dirty:ae,ctx:R}),V.$set(xt);const _t={};ae&1&&(_t.$$scope={dirty:ae,ctx:R}),ie.$set(_t);const Ct={};ae&1&&(Ct.$$scope={dirty:ae,ctx:R}),se.$set(Ct);const gt={};ae&1&&(gt.$$scope={dirty:ae,ctx:R}),be.$set(gt);const ht={};ae&1&&(ht.$$scope={dirty:ae,ctx:R}),Pe.$set(ht);const bt={};ae&1&&(bt.$$scope={dirty:ae,ctx:R}),we.$set(bt);const Lt={};ae&1&&(Lt.$$scope={dirty:ae,ctx:R}),qe.$set(Lt);const wt={};ae&1&&(wt.$$scope={dirty:ae,ctx:R}),me.$set(wt);const qt={};ae&1&&(qt.$$scope={dirty:ae,ctx:R}),ve.$set(qt);const Pt={};ae&1&&(Pt.$$scope={dirty:ae,ctx:R}),de.$set(Pt);const Ht={};ae&1&&(Ht.$$scope={dirty:ae,ctx:R}),Ee.$set(Ht);const St={};ae&1&&(St.$$scope={dirty:ae,ctx:R}),Ae.$set(St);const Mt={};ae&1&&(Mt.$$scope={dirty:ae,ctx:R}),pe.$set(Mt);const Tt={};ae&1&&(Tt.$$scope={dirty:ae,ctx:R}),ce.$set(Tt);const Et={};ae&1&&(Et.$$scope={dirty:ae,ctx:R}),Ie.$set(Et);const At={};ae&1&&(At.$$scope={dirty:ae,ctx:R}),De.$set(At);const It={};ae&1&&(It.$$scope={dirty:ae,ctx:R}),fe.$set(It);const Dt={};ae&1&&(Dt.$$scope={dirty:ae,ctx:R}),ze.$set(Dt);const jt={};ae&1&&(jt.$$scope={dirty:ae,ctx:R}),Oe.$set(jt);const kt={};ae&1&&(kt.$$scope={dirty:ae,ctx:R}),Ue.$set(kt);const Ot={};ae&1&&(Ot.$$scope={dirty:ae,ctx:R}),W.$set(Ot);const zt={};ae&1&&(zt.$$scope={dirty:ae,ctx:R}),Be.$set(zt);const Ut={};ae&1&&(Ut.$$scope={dirty:ae,ctx:R}),Ne.$set(Ut);const Jt={};ae&1&&(Jt.$$scope={dirty:ae,ctx:R}),oe.$set(Jt);const Bt={};ae&1&&(Bt.$$scope={dirty:ae,ctx:R}),$e.$set(Bt);const Nt={};ae&1&&(Nt.$$scope={dirty:ae,ctx:R}),Fe.$set(Nt);const Ft={};ae&1&&(Ft.$$scope={dirty:ae,ctx:R}),J.$set(Ft);const Gt={};ae&1&&(Gt.$$scope={dirty:ae,ctx:R}),et.$set(Gt);const Qt={};ae&1&&(Qt.$$scope={dirty:ae,ctx:R}),st.$set(Qt);const Kt={};ae&1&&(Kt.$$scope={dirty:ae,ctx:R}),re.$set(Kt);const Wt={};ae&1&&(Wt.$$scope={dirty:ae,ctx:R}),lt.$set(Wt)},i(R){it||(H(e.$$.fragment,R),H(s.$$.fragment,R),H(p.$$.fragment,R),H(u.$$.fragment,R),H(n.$$.fragment,R),H(x.$$.fragment,R),H(f.$$.fragment,R),H(c.$$.fragment,R),H(I.$$.fragment,R),H(O.$$.fragment,R),H(D.$$.fragment,R),H(V.$$.fragment,R),H(ie.$$.fragment,R),H(se.$$.fragment,R),H(be.$$.fragment,R),H(Pe.$$.fragment,R),H(we.$$.fragment,R),H(qe.$$.fragment,R),H(me.$$.fragment,R),H(ve.$$.fragment,R),H(de.$$.fragment,R),H(Ee.$$.fragment,R),H(Ae.$$.fragment,R),H(pe.$$.fragment,R),H(ce.$$.fragment,R),H(Ie.$$.fragment,R),H(De.$$.fragment,R),H(fe.$$.fragment,R),H(ze.$$.fragment,R),H(Oe.$$.fragment,R),H(Ue.$$.fragment,R),H(W.$$.fragment,R),H(Be.$$.fragment,R),H(Ne.$$.fragment,R),H(oe.$$.fragment,R),H($e.$$.fragment,R),H(Fe.$$.fragment,R),H(J.$$.fragment,R),H(et.$$.fragment,R),H(st.$$.fragment,R),H(re.$$.fragment,R),H(lt.$$.fragment,R),it=!0)},o(R){P(e.$$.fragment,R),P(s.$$.fragment,R),P(p.$$.fragment,R),P(u.$$.fragment,R),P(n.$$.fragment,R),P(x.$$.fragment,R),P(f.$$.fragment,R),P(c.$$.fragment,R),P(I.$$.fragment,R),P(O.$$.fragment,R),P(D.$$.fragment,R),P(V.$$.fragment,R),P(ie.$$.fragment,R),P(se.$$.fragment,R),P(be.$$.fragment,R),P(Pe.$$.fragment,R),P(we.$$.fragment,R),P(qe.$$.fragment,R),P(me.$$.fragment,R),P(ve.$$.fragment,R),P(de.$$.fragment,R),P(Ee.$$.fragment,R),P(Ae.$$.fragment,R),P(pe.$$.fragment,R),P(ce.$$.fragment,R),P(Ie.$$.fragment,R),P(De.$$.fragment,R),P(fe.$$.fragment,R),P(ze.$$.fragment,R),P(Oe.$$.fragment,R),P(Ue.$$.fragment,R),P(W.$$.fragment,R),P(Be.$$.fragment,R),P(Ne.$$.fragment,R),P(oe.$$.fragment,R),P($e.$$.fragment,R),P(Fe.$$.fragment,R),P(J.$$.fragment,R),P(et.$$.fragment,R),P(st.$$.fragment,R),P(re.$$.fragment,R),P(lt.$$.fragment,R),it=!1},d(R){R&&(a(o),a(t),a(i),a(m),a($),a(l),a(L),a(b),a(E),a(A),a(B),a(K),a(j),a(_e),a(he),a(xe),a(ge),a(ee),a(te),a(le),a(He),a(Se),a(y),a(Y),a(Me),a(Te),a(X),a(je),a(ke),a(Ve),a(Re),a(Ce),a(Je),a(N),a(F),a(Ze),a(ye),a(ue),a(tt),a(U),a(nt)),q(e,R),q(s,R),q(p,R),q(u,R),q(n,R),q(x,R),q(f,R),q(c,R),q(I,R),q(O,R),q(D,R),q(V,R),q(ie,R),q(se,R),q(be,R),q(Pe,R),q(we,R),q(qe,R),q(me,R),q(ve,R),q(de,R),q(Ee,R),q(Ae,R),q(pe,R),q(ce,R),q(Ie,R),q(De,R),q(fe,R),q(ze,R),q(Oe,R),q(Ue,R),q(W,R),q(Be,R),q(Ne,R),q(oe,R),q($e,R),q(Fe,R),q(J,R),q(et,R),q(st,R),q(re,R),q(lt,R)}}}function rc(_){let e,o;return e=new z({props:{$$slots:{default:[ac]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const p={};t&1&&(p.$$scope={dirty:t,ctx:s}),e.$set(p)},i(s){o||(H(e.$$.fragment,s),o=!0)},o(s){P(e.$$.fragment,s),o=!1},d(s){q(e,s)}}}class uc extends Xe{constructor(e){super(),Ye(this,e,null,rc,We,{})}}function oc(_){let e,o="Usage de l’IA dans ce module",s,t,p="L’IA n’est <b>pas autorisée</b> pendant le module",i,u,m=`Les modalités d'évaluation sont pensées pour que l'IA ne vous apporte aucun avantage, voire
			vous desserve.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("span"),t.innerHTML=p,i=v(),u=g("p"),u.textContent=m,this.h()},l(n){e=C(n,"H2",{"data-svelte-h":!0}),h(e)!=="svelte-1gojwpb"&&(e.textContent=o),s=d(n),t=C(n,"SPAN",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-35mnki"&&(t.innerHTML=p),i=d(n),u=C(n,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1ydzg9u"&&(u.textContent=m),this.h()},h(){w(t,"class","font-bold text-[2em] underline"),w(u,"class","note")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function $c(_){let e,o="Pourquoi l’IA pose problème à ce stade",s,t,p="<li><b>1. Dette cognitive</b> — L&#39;IA empêche d&#39;apprendre par la pratique et l&#39;erreur.</li> <li><b>2. Béquille pour débutants</b> — Elle favorise ceux qui maîtrisent déjà.</li> <li><b>3. Usage passif</b> — Risque de perte de compétences.</li> <li><b>4. Illusion de facilité</b> — On réfléchit moins aux étapes.</li>",i,u,m="<p>Vidéo explicative</p>";return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=p,i=v(),u=g("a"),u.innerHTML=m,this.h()},l(n){e=C(n,"H2",{"data-svelte-h":!0}),h(e)!=="svelte-16y47ua"&&(e.textContent=o),s=d(n),t=C(n,"UL",{"data-svelte-h":!0}),h(t)!=="svelte-dhzepp"&&(t.innerHTML=p),i=d(n),u=C(n,"A",{href:!0,target:!0,"data-svelte-h":!0}),h(u)!=="svelte-cz1rtj"&&(u.innerHTML=m),this.h()},h(){w(u,"href","https://youtu.be/4xq6bVbS-Pw?si=bhTuVdU7iN5ijJzg&t=653"),w(u,"target","_blank")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function fc(_){let e,o="Constat côté entreprise",s,t,p="<li>Des profils juniors très à l’aise avec l’IA</li> <li>Mais en difficulté dès qu’il faut :</li> <ul><li>débugger un problème</li> <li>expliquer un choix technique</li> <li>adapter une solution existante</li></ul>",i,u,m=`Le problème n’est pas l’IA,<br/>
			mais son usage trop précoce et non maîtrisé.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=p,i=v(),u=g("p"),u.innerHTML=m,this.h()},l(n){e=C(n,"H2",{"data-svelte-h":!0}),h(e)!=="svelte-qqrjer"&&(e.textContent=o),s=d(n),t=C(n,"UL",{"data-svelte-h":!0}),h(t)!=="svelte-1cewx67"&&(t.innerHTML=p),i=d(n),u=C(n,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1n46xu8"&&(u.innerHTML=m),this.h()},h(){w(u,"class","note")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function cc(_){let e,o="Utiliser l’IA intelligemment",s,t,p="<li>IA utilisée comme <b>tuteur</b>, pas comme générateur</li> <li>Pas de réponses directes</li> <li>Questions, feedback, progression guidée</li>",i,u,m=`Apprendre correctement avec l’IA<br/>
			produit de meilleurs résultats<br/>
			que l’utiliser sans méthode.`,n,$,x='<p class="note">Source : AI Tutoring Outperforms Active Learning</p>';return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=p,i=v(),u=g("p"),u.innerHTML=m,n=v(),$=g("a"),$.innerHTML=x,this.h()},l(l){e=C(l,"H2",{"data-svelte-h":!0}),h(e)!=="svelte-1nebpg"&&(e.textContent=o),s=d(l),t=C(l,"UL",{"data-svelte-h":!0}),h(t)!=="svelte-1914kjj"&&(t.innerHTML=p),i=d(l),u=C(l,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1amodgb"&&(u.innerHTML=m),n=d(l),$=C(l,"A",{href:!0,"data-preview-link":!0,"data-svelte-h":!0}),h($)!=="svelte-16lrtro"&&($.innerHTML=x),this.h()},h(){w(u,"class","important"),w($,"href","https://www.nature.com/articles/s41598-025-97652-6.pdf"),w($,"data-preview-link","")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,u,f),r(l,n,f),r(l,$,f)},p:k,d(l){l&&(a(e),a(s),a(t),a(i),a(u),a(n),a($))}}}function pc(_){let e,o="Importance des TD et TP",s,t,p="<li>Les TD construisent le raisonnement</li> <li>Les TP ancrent les concepts par la pratique</li> <li>Ce travail est indispensable pour la suite</li>",i,u,m=`Sans cette phase sérieuse,<br/>
			l’IA n’apporte que peu de valeur.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=p,i=v(),u=g("p"),u.innerHTML=m,this.h()},l(n){e=C(n,"H2",{"data-svelte-h":!0}),h(e)!=="svelte-1pqkdgp"&&(e.textContent=o),s=d(n),t=C(n,"UL",{"data-svelte-h":!0}),h(t)!=="svelte-1dj8lr7"&&(t.innerHTML=p),i=d(n),u=C(n,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-x1j0a0"&&(u.innerHTML=m),this.h()},h(){w(u,"class","note")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function mc(_){let e,o="Phase projet",s,t,p="<li>Problème plus ouvert</li> <li>Mise en situation proche du monde professionnel</li> <li>Usage de l&#39;IA <b>possible</b> et encadré</li>",i,u,m=`Des bases solides permettent<br/>
			d&#39;utiliser l&#39;IA pour faire des choses intéressantes.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=p,i=v(),u=g("p"),u.innerHTML=m,this.h()},l(n){e=C(n,"H2",{"data-svelte-h":!0}),h(e)!=="svelte-1u8tpjh"&&(e.textContent=o),s=d(n),t=C(n,"UL",{"data-svelte-h":!0}),h(t)!=="svelte-15ntht3"&&(t.innerHTML=p),i=d(n),u=C(n,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-e1d6gw"&&(u.innerHTML=m),this.h()},h(){w(u,"class","important")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function dc(_){let e,o="Un prompt vous sera fourni",s,t,p="Pour la phase projet, vous recevrez un <b>prompt</b> à utiliser avec l&#39;IA.",i,u,m='<li class="fragment">Il cadrera l&#39;IA pour qu&#39;elle vous <b>guide</b> sans donner les réponses</li> <li class="fragment">Il sera adapté au contexte du module POO</li>',n,$,x="Ce prompt sera communiqué au moment du projet.",l,f,L=`On vous donnera un prompt système qui transforme l'IA en tuteur. L'idée c'est de vous
			apprendre à utiliser l'IA intelligemment, pas à tricher.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("ul"),u.innerHTML=m,n=v(),$=g("p"),$.textContent=x,l=v(),f=g("aside"),f.textContent=L,this.h()},l(c){e=C(c,"H2",{"data-svelte-h":!0}),h(e)!=="svelte-1stl3ju"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-e2ua8"&&(t.innerHTML=p),i=d(c),u=C(c,"UL",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1ipgytl"&&(u.innerHTML=m),n=d(c),$=C(c,"P",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-116x1r6"&&($.textContent=x),l=d(c),f=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(f)!=="svelte-6s6n1u"&&(f.textContent=L),this.h()},h(){w(u,"class","mt-6"),w($,"class","note fragment mt-8"),w(f,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),r(c,u,b),r(c,n,b),r(c,$,b),r(c,l,b),r(c,f,b)},p:k,d(c){c&&(a(e),a(s),a(t),a(i),a(u),a(n),a($),a(l),a(f))}}}function vc(_){let e,o="En résumé",s,t,p='<div class="p-4 bg-pink-800 rounded-lg fragment"><h4 class="text-red-400">📚 TD/TP</h4> <p class="text-xl mt-2">Sans IA</p> <p class="text-sm text-white-400">Construire les bases</p></div> <div class="p-4 bg-orange-800 rounded-lg fragment"><h4 class="text-orange-400">🎯 Projet</h4> <p class="text-xl mt-2">IA encadrée</p> <p class="text-sm text-white-400">Avec le prompt fourni</p></div> <div class="p-4 bg-green-800 rounded-lg fragment"><h4 class="text-green-400">💼 Après CPE</h4> <p class="text-xl mt-2">IA maîtrisée</p> <p class="text-sm text-white-400">Vous savez quand et comment</p></div>',i,u,m=`C'est la progression. D'abord on apprend sans béquille, ensuite on apprend à utiliser l'outil
			correctement. À la fin, vous saurez quand l'IA vous aide vraiment et quand elle vous ralentit.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H2",{"data-svelte-h":!0}),h(e)!=="svelte-11s1ixw"&&(e.textContent=o),s=d(n),t=C(n,"DIV",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-16m7q19"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-10vup29"&&(u.textContent=m),this.h()},h(){w(t,"class","grid grid-cols-3 gap-6 mt-8"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function xc(_){let e,o,s,t,p,i,u,m,n,$,x,l,f,L,c,b;return e=new z({props:{$$slots:{default:[oc]},$$scope:{ctx:_}}}),s=new z({props:{$$slots:{default:[$c]},$$scope:{ctx:_}}}),p=new z({props:{$$slots:{default:[fc]},$$scope:{ctx:_}}}),u=new z({props:{$$slots:{default:[cc]},$$scope:{ctx:_}}}),n=new z({props:{$$slots:{default:[pc]},$$scope:{ctx:_}}}),x=new z({props:{$$slots:{default:[mc]},$$scope:{ctx:_}}}),f=new z({props:{$$slots:{default:[dc]},$$scope:{ctx:_}}}),c=new z({props:{$$slots:{default:[vc]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment),o=v(),T(s.$$.fragment),t=v(),T(p.$$.fragment),i=v(),T(u.$$.fragment),m=v(),T(n.$$.fragment),$=v(),T(x.$$.fragment),l=v(),T(f.$$.fragment),L=v(),T(c.$$.fragment)},l(I){M(e.$$.fragment,I),o=d(I),M(s.$$.fragment,I),t=d(I),M(p.$$.fragment,I),i=d(I),M(u.$$.fragment,I),m=d(I),M(n.$$.fragment,I),$=d(I),M(x.$$.fragment,I),l=d(I),M(f.$$.fragment,I),L=d(I),M(c.$$.fragment,I)},m(I,E){S(e,I,E),r(I,o,E),S(s,I,E),r(I,t,E),S(p,I,E),r(I,i,E),S(u,I,E),r(I,m,E),S(n,I,E),r(I,$,E),S(x,I,E),r(I,l,E),S(f,I,E),r(I,L,E),S(c,I,E),b=!0},p(I,E){const O={};E&1&&(O.$$scope={dirty:E,ctx:I}),e.$set(O);const A={};E&1&&(A.$$scope={dirty:E,ctx:I}),s.$set(A);const D={};E&1&&(D.$$scope={dirty:E,ctx:I}),p.$set(D);const B={};E&1&&(B.$$scope={dirty:E,ctx:I}),u.$set(B);const V={};E&1&&(V.$$scope={dirty:E,ctx:I}),n.$set(V);const K={};E&1&&(K.$$scope={dirty:E,ctx:I}),x.$set(K);const ie={};E&1&&(ie.$$scope={dirty:E,ctx:I}),f.$set(ie);const j={};E&1&&(j.$$scope={dirty:E,ctx:I}),c.$set(j)},i(I){b||(H(e.$$.fragment,I),H(s.$$.fragment,I),H(p.$$.fragment,I),H(u.$$.fragment,I),H(n.$$.fragment,I),H(x.$$.fragment,I),H(f.$$.fragment,I),H(c.$$.fragment,I),b=!0)},o(I){P(e.$$.fragment,I),P(s.$$.fragment,I),P(p.$$.fragment,I),P(u.$$.fragment,I),P(n.$$.fragment,I),P(x.$$.fragment,I),P(f.$$.fragment,I),P(c.$$.fragment,I),b=!1},d(I){I&&(a(o),a(t),a(i),a(m),a($),a(l),a(L)),q(e,I),q(s,I),q(p,I),q(u,I),q(n,I),q(x,I),q(f,I),q(c,I)}}}function _c(_){let e,o;return e=new z({props:{data_background_color:"#2B001A",$$slots:{default:[xc]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const p={};t&1&&(p.$$scope={dirty:t,ctx:s}),e.$set(p)},i(s){o||(H(e.$$.fragment,s),o=!0)},o(s){P(e.$$.fragment,s),o=!1},d(s){q(e,s)}}}class Cc extends Xe{constructor(e){super(),Ye(this,e,null,_c,We,{})}}function gc(_){let e,o="Présentation du module",s,t,p=`<div><ul><li><b>Changer votre manière de penser le code</b></li> <li>Passer du procédural à l’orienté objet</li> <li>Modéliser avant de coder</li> <li>Préparer la suite de votre formation</li></ul> <p class="note">Ce module est simple à valider.<br/>
					Il est <b>fondamental</b> pour la suite.</p></div>`,i,u,m=`Pas obligé de coder en OO, juste une manière de faire différente - C'est une méthode qui
			simplifie la modélisation - Assez largement utilisée`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H2",{"data-svelte-h":!0}),h(e)!=="svelte-177x7c7"&&(e.textContent=o),s=d(n),t=C(n,"DIV",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1ez6zyl"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-viqv9x"&&(u.textContent=m),this.h()},h(){w(t,"class","two-columns"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function hc(_){let e,o="Ce que vous saurez faire à la fin",s,t,p='<div class="text-left"><h4 class="text-red-400 mb-4 text-3xl">❌ Avant ce module</h4> <ul class="text-2xl"><li class="fragment">Code qui &quot;marche&quot; pour des TPs CPE</li> <li class="fragment">Difficile à reprendre 6 mois plus tard</li> <li class="fragment">Impossible à faire évoluer</li> <li class="fragment">Personne d&#39;autre ne comprend</li></ul></div> <div class="text-left"><h4 class="text-green-400 mb-4 text-3xl">✅ Après ce module</h4> <ul class="text-2xl"><li class="fragment">Code qui dure des années</li> <li class="fragment">Maintenable par une équipe</li> <li class="fragment">Évolutif sans tout casser</li> <li class="fragment">Prêt pour le monde pro</li></ul></div>',i,u,m="En entreprise, le code vit 5, 10, 20 ans.<br/> <b>Vous devez apprendre à coder pour les autres, pas juste pour vous.</b>",n,$,x=`C'est la vraie différence. En école, on code pour valider un TP. En entreprise, le code doit
			survivre à votre départ, être repris par d'autres, évoluer. Ce module vous prépare à ça.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=p,i=v(),u=g("p"),u.innerHTML=m,n=v(),$=g("aside"),$.textContent=x,this.h()},l(l){e=C(l,"H2",{"data-svelte-h":!0}),h(e)!=="svelte-1bz8gvd"&&(e.textContent=o),s=d(l),t=C(l,"DIV",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-vlxvkk"&&(t.innerHTML=p),i=d(l),u=C(l,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-hffxe3"&&(u.innerHTML=m),n=d(l),$=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-1lbw1km"&&($.textContent=x),this.h()},h(){w(t,"class","flex justify-center gap-8 mt-8"),w(u,"class","fragment note mt-8"),w($,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,u,f),r(l,n,f),r(l,$,f)},p:k,d(l){l&&(a(e),a(s),a(t),a(i),a(u),a(n),a($))}}}function bc(_){let e,o="Pourquoi vous pourriez décrocher",s,t,p=`<svg viewBox="0 0 600 300" width="100%" style="margin-top: 20px;"><line x1="50" y1="250" x2="550" y2="250" stroke="#ccc" stroke-width="2"></line><line x1="50" y1="50" x2="50" y2="250" stroke="#ccc" stroke-width="2"></line><text x="260" y="270" font-size="14" fill="#ffffff">Temps / Expérience</text><text x="-70" y="185" font-size="14" fill="#ffffff" transform="rotate(-90 15,160)">Niveau réel en programmation
				</text><g><path d="M50 200 C120 185, 180 175, 220 170" fill="none" stroke="#3498db" stroke-width="4"></path><path d="M50 200 C120 205, 180 210, 220 190" fill="none" stroke="#f39c12" stroke-width="4"></path></g><g class="fragment" data-fragment-index="0"><path d="M220 170 C260 170, 300 170, 340 170" fill="none" stroke="#3498db" stroke-width="4"></path><path d="M220 190 C260 170, 300 155, 340 145" fill="none" stroke="#f39c12" stroke-width="4"></path></g><g class="fragment" data-fragment-index="1"><path d="M340 145 C380 140, 400 140, 420 140" fill="none" stroke="#f39c12" stroke-width="4"></path><path d="M340 170 C380 168, 400 165, 420 140" fill="none" stroke="#3498db" stroke-width="4"></path></g><g class="fragment" data-fragment-index="2"><path d="M420 140 C470 140, 510 140, 550 140" fill="none" stroke="#f39c12" stroke-width="4"></path><path d="M420 140 C470 120, 510 70, 550 50" fill="none" stroke="#3498db" stroke-width="4"></path></g><text x="60" y="80" font-size="0.5em" fill="#f39c12">Procédural </text><text x="60" y="100" font-size="0.5em" fill="#3498db">POO</text></svg>`,i,u,m=`Si vous avez l’impression de devenir moins bons,<br/>
			c’est que vous êtes en train d’apprendre.`,n,$,x=`Au début ça semble plus simple que du C, vous avez pas à gérer les pointeurs, le langage est
			plus moderne<br/>
			Mais très vite régression, notamment car il y a des règles à respecter que vous n&#39;aviez pas avant,
			en // en C vous pouvez faire n&#39;importe quoi et ça marche<br/>
			Puis vous apprenez à maitriser Puis vous égalez votre précédent niveau, si vous sortez du module
			à ce niveau, vous n&#39;aurez rien appris de plus<br/>
			Restez motivés pour la suite, car après ça décolle vraiment<br/>`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=p,i=v(),u=g("p"),u.innerHTML=m,n=v(),$=g("aside"),$.innerHTML=x,this.h()},l(l){e=C(l,"H2",{"data-svelte-h":!0}),h(e)!=="svelte-1nk3rng"&&(e.textContent=o),s=d(l),t=C(l,"DIV",{"data-svelte-h":!0}),h(t)!=="svelte-1sp6g9p"&&(t.innerHTML=p),i=d(l),u=C(l,"P",{class:!0,"data-fragment-index":!0,"data-svelte-h":!0}),h(u)!=="svelte-117ka7n"&&(u.innerHTML=m),n=d(l),$=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-ji71yx"&&($.innerHTML=x),this.h()},h(){w(u,"class","note fragment"),w(u,"data-fragment-index","0"),w($,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,u,f),r(l,n,f),r(l,$,f)},p:k,d(l){l&&(a(e),a(s),a(t),a(i),a(u),a(n),a($))}}}function Lc(_){let e,o="Déroulé",s,t,p="<li>CM en début de cours</li> <li>TD</li> <li>TP/Projet</li>";return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("ol"),t.innerHTML=p},l(i){e=C(i,"H2",{"data-svelte-h":!0}),h(e)!=="svelte-171i1ti"&&(e.textContent=o),s=d(i),t=C(i,"OL",{"data-svelte-h":!0}),h(t)!=="svelte-se5tp"&&(t.innerHTML=p)},m(i,u){r(i,e,u),r(i,s,u),r(i,t,u)},p:k,d(i){i&&(a(e),a(s),a(t))}}}function wc(_){let e,o="Modalités d’examen",s,t,p="<li>DS écrit <b>basé principalement sur les TD</b></li> <li>Projet en fin de module</li> <li>Contrôle continu sur la rigueur</li>",i,u,m="Ce qui est évalué, ce n’est pas le résultat.<br/> <b>C’est la démarche !</b>";return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=p,i=v(),u=g("p"),u.innerHTML=m,this.h()},l(n){e=C(n,"H2",{"data-svelte-h":!0}),h(e)!=="svelte-33cx1h"&&(e.textContent=o),s=d(n),t=C(n,"UL",{"data-svelte-h":!0}),h(t)!=="svelte-yqhay1"&&(t.innerHTML=p),i=d(n),u=C(n,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-dcky3d"&&(u.innerHTML=m),this.h()},h(){w(u,"class","important")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function qc(_){let e,o="Découpage du module",s,t,p=`<svg width="1000" height="500" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" style="flex: 1;background:#fafafa;font-family:sans-serif"><line x1="80" y1="50" x2="80" y2="430" stroke="#333"></line><line x1="80" y1="430" x2="950" y2="430" stroke="#333"></line><g fill="#333" font-size="12"><text x="40" y="430">0h</text><text x="40" y="370">2h</text><text x="40" y="310">4h</text><text x="40" y="250">6h</text><text x="40" y="190">8h</text></g><g font-size="13"><rect x="780" y="60" width="15" height="15" fill="#E85D75"></rect><text x="800" y="73">CM (18h)</text><rect x="780" y="85" width="15" height="15" fill="#456990"></rect><text x="800" y="98">TD (12h)</text><rect x="780" y="110" width="15" height="15" fill="#F28F3B"></rect><text x="800" y="123">TP (14h)</text><rect x="780" y="135" width="15" height="15" fill="#F6BD60"></rect><text x="800" y="148">Projet (18h)</text></g><g font-size="11" text-anchor="middle"><g transform="translate(110,430)"><rect y="-120" width="40" height="120" fill="#E85D75"></rect><rect y="-180" width="40" height="60" fill="#456990"></rect><rect y="-240" width="40" height="60" fill="#F28F3B"></rect><text y="20" text-anchor="middle">04/02</text></g><g transform="translate(180,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-120" width="40" height="60" fill="#456990"></rect><text y="20">25/02</text></g><g transform="translate(250,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-120" width="40" height="60" fill="#456990"></rect><rect y="-180" width="40" height="60" fill="#F28F3B"></rect><text y="20">04/03</text></g><g transform="translate(320,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-120" width="40" height="60" fill="#456990"></rect><rect y="-180" width="40" height="60" fill="#F28F3B"></rect><text y="20">18/03</text></g><g transform="translate(390,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-120" width="40" height="60" fill="#456990"></rect><rect y="-180" width="40" height="60" fill="#F28F3B"></rect><text y="20">24/03</text></g><g transform="translate(460,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-120" width="40" height="60" fill="#456990"></rect><rect y="-180" width="40" height="60" fill="#F28F3B"></rect><text y="20">25/03</text></g><g transform="translate(530,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-180" width="40" height="120" fill="#F28F3B"></rect><text y="20">31/03</text></g><g transform="translate(600,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-180" width="40" height="120" fill="#F6BD60"></rect><text y="20">01/04</text></g><g transform="translate(670,430)"><rect y="-180" width="40" height="180" fill="#F6BD60"></rect><text y="20">07/04</text></g><g transform="translate(740,430)"><rect y="-240" width="40" height="240" fill="#F6BD60"></rect><text y="20">05/05</text></g></g></svg> <div style="flex: 1;"><ul><li><b>CM</b> <br/>
						Théorie et introduction des concepts.</li> <li><b>TD</b> <br/> <b class="font-bold text-orange-400">Sans IDE !</b></li> <li><b>TP</b> <br/>
						Guidés, mais il faut improviser, tester, sortir du cadre.</li> <li><b>Projet</b> <br/>
						Mise en situation professionnelle.</li></ul></div>`,i,u,m="Relire le support du CM ne vous suffira pas à réussir l'examen";return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=p,i=v(),u=g("p"),u.textContent=m,this.h()},l(n){e=C(n,"H2",{"data-svelte-h":!0}),h(e)!=="svelte-g73up0"&&(e.textContent=o),s=d(n),t=C(n,"DIV",{style:!0,"data-svelte-h":!0}),h(t)!=="svelte-xoywc5"&&(t.innerHTML=p),i=d(n),u=C(n,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-18g80m8"&&(u.textContent=m),this.h()},h(){Vt(t,"display","flex"),Vt(t,"gap","2rem"),Vt(t,"align-items","center"),Vt(t,"justify-content","center"),w(u,"class","font-bold text-orange-400 note")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function Pc(_){let e,o,s,t,p,i,u,m,n,$,x,l;return e=new z({props:{$$slots:{default:[gc]},$$scope:{ctx:_}}}),s=new z({props:{$$slots:{default:[hc]},$$scope:{ctx:_}}}),p=new z({props:{$$slots:{default:[bc]},$$scope:{ctx:_}}}),u=new z({props:{$$slots:{default:[Lc]},$$scope:{ctx:_}}}),n=new z({props:{$$slots:{default:[wc]},$$scope:{ctx:_}}}),x=new z({props:{$$slots:{default:[qc]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment),o=v(),T(s.$$.fragment),t=v(),T(p.$$.fragment),i=v(),T(u.$$.fragment),m=v(),T(n.$$.fragment),$=v(),T(x.$$.fragment)},l(f){M(e.$$.fragment,f),o=d(f),M(s.$$.fragment,f),t=d(f),M(p.$$.fragment,f),i=d(f),M(u.$$.fragment,f),m=d(f),M(n.$$.fragment,f),$=d(f),M(x.$$.fragment,f)},m(f,L){S(e,f,L),r(f,o,L),S(s,f,L),r(f,t,L),S(p,f,L),r(f,i,L),S(u,f,L),r(f,m,L),S(n,f,L),r(f,$,L),S(x,f,L),l=!0},p(f,L){const c={};L&1&&(c.$$scope={dirty:L,ctx:f}),e.$set(c);const b={};L&1&&(b.$$scope={dirty:L,ctx:f}),s.$set(b);const I={};L&1&&(I.$$scope={dirty:L,ctx:f}),p.$set(I);const E={};L&1&&(E.$$scope={dirty:L,ctx:f}),u.$set(E);const O={};L&1&&(O.$$scope={dirty:L,ctx:f}),n.$set(O);const A={};L&1&&(A.$$scope={dirty:L,ctx:f}),x.$set(A)},i(f){l||(H(e.$$.fragment,f),H(s.$$.fragment,f),H(p.$$.fragment,f),H(u.$$.fragment,f),H(n.$$.fragment,f),H(x.$$.fragment,f),l=!0)},o(f){P(e.$$.fragment,f),P(s.$$.fragment,f),P(p.$$.fragment,f),P(u.$$.fragment,f),P(n.$$.fragment,f),P(x.$$.fragment,f),l=!1},d(f){f&&(a(o),a(t),a(i),a(m),a($)),q(e,f),q(s,f),q(p,f),q(u,f),q(n,f),q(x,f)}}}function Hc(_){let e,o;return e=new z({props:{data_background_color:"#00353F",$$slots:{default:[Pc]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const p={};t&1&&(p.$$scope={dirty:t,ctx:s}),e.$set(p)},i(s){o||(H(e.$$.fragment,s),o=!0)},o(s){P(e.$$.fragment,s),o=!1},d(s){q(e,s)}}}class Sc extends Xe{constructor(e){super(),Ye(this,e,null,Hc,We,{})}}function Mc(_){let e,o="Exercice 1",s,t,p="Encapsulation et validation",i,u,m="⏱️ 10-15 minutes";return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("p"),u.textContent=m,this.h()},l(n){e=C(n,"H2",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-sq034p"&&(e.textContent=o),s=d(n),t=C(n,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-tg4x2t"&&(t.textContent=p),i=d(n),u=C(n,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-11o3260"&&(u.textContent=m),this.h()},h(){w(e,"class","text-5xl"),w(t,"class","text-2xl text-gray-400"),w(u,"class","text-xl mt-8")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function Tc(_){let e,o="📝 Exercice 1 : Compte bancaire sécurisé",s,t,p=`<p class="font-bold text-accent-200">Objectif :</p> <p class="mb-4">Créer une classe <code>CompteBancaire</code> avec encapsulation correcte.</p> <p class="font-bold text-accent-200 mt-6">Consignes :</p> <ol class="space-y-2"><li>Créer une classe avec les attributs <code>numero</code>, <code>solde</code>,
					<code>titulaire</code></li> <li>Tous les attributs doivent être <code>private</code></li> <li>Créer un constructeur pour initialiser le compte</li> <li>Créer des getters pour tous les attributs</li> <li>Créer une méthode <code>deposer(double montant)</code> qui :
					<ul class="ml-6"><li>Vérifie que le montant est positif</li> <li>Ajoute le montant au solde</li></ul></li> <li>Créer une méthode <code>retirer(double montant)</code> qui :
					<ul class="ml-6"><li>Vérifie que le montant est positif</li> <li>Vérifie que le solde est suffisant</li> <li>Retire le montant du solde</li></ul></li></ol>`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=p,this.h()},l(i){e=C(i,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-n7as91"&&(e.textContent=o),s=d(i),t=C(i,"DIV",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-114i2s5"&&(t.innerHTML=p),this.h()},h(){w(t,"class","text-left text-xl")},m(i,u){r(i,e,u),r(i,s,u),r(i,t,u)},p:k,d(i){i&&(a(e),a(s),a(t))}}}function Ec(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Ac(_){let e,o="💡 Indice",s,t,p;return t=new Z({props:{$$slots:{default:[Ec]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(i){e=C(i,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-s9gy6g"&&(e.textContent=o),s=d(i),M(t.$$.fragment,i)},m(i,u){r(i,e,u),r(i,s,u),S(t,i,u),p=!0},p(i,u){const m={};u&1&&(m.$$scope={dirty:u,ctx:i}),t.$set(m)},i(i){p||(H(t.$$.fragment,i),p=!0)},o(i){P(t.$$.fragment,i),p=!1},d(i){i&&(a(e),a(s)),q(t,i)}}}function Ic(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Dc(_){let e,o="✅ Solution",s,t,p;return t=new Z({props:{class:"language-java h-[70vh]",$$slots:{default:[Ic]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(i){e=C(i,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1eu9efq"&&(e.textContent=o),s=d(i),M(t.$$.fragment,i)},m(i,u){r(i,e,u),r(i,s,u),S(t,i,u),p=!0},p(i,u){const m={};u&1&&(m.$$scope={dirty:u,ctx:i}),t.$set(m)},i(i){p||(H(t.$$.fragment,i),p=!0)},o(i){P(t.$$.fragment,i),p=!1},d(i){i&&(a(e),a(s)),q(t,i)}}}function jc(_){let e,o="🎯 Points clés",s,t,p='<li class="fragment">✅ Attributs <code>private</code> → protection des données</li> <li class="fragment">✅ Getters → lecture contrôlée</li> <li class="fragment">✅ Méthodes de modification → validation systématique</li> <li class="fragment">✅ Pas de setter pour le solde → cohérence métier</li> <li class="fragment">✅ Exceptions claires → facilite le debug</li>',i,u,m="💼 En entreprise, cette protection évite les bugs coûteux !";return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=p,i=v(),u=g("p"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-gv6vvv"&&(e.textContent=o),s=d(n),t=C(n,"UL",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1x5lr41"&&(t.innerHTML=p),i=d(n),u=C(n,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-lzo0mv"&&(u.textContent=m),this.h()},h(){w(t,"class","text-xl"),w(u,"class","fragment mt-8 text-accent-200 font-bold")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function kc(_){let e,o="Exercice 2",s,t,p="Héritage et généralisation",i,u,m="⏱️ 15-20 minutes";return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("p"),u.textContent=m,this.h()},l(n){e=C(n,"H2",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-8xxy4y"&&(e.textContent=o),s=d(n),t=C(n,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1wfm6em"&&(t.textContent=p),i=d(n),u=C(n,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1ij9449"&&(u.textContent=m),this.h()},h(){w(e,"class","text-5xl"),w(t,"class","text-2xl text-gray-400"),w(u,"class","text-xl mt-8")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function Oc(_){let e,o="📝 Exercice 2 : Système de véhicules",s,t,p=`<p class="font-bold text-accent-200">Objectif :</p> <p class="mb-4">Modéliser une hiérarchie de véhicules avec héritage.</p> <p class="font-bold text-accent-200 mt-6">Consignes :</p> <ol class="space-y-2"><li>Créer une classe abstraite <code>Vehicule</code> avec :
					<ul class="ml-6"><li>Attributs : <code>marque</code>, <code>modele</code>, <code>vitesseMax</code></li> <li>Constructeur</li> <li>Méthode concrète : <code>demarrer()</code></li> <li>Méthode abstraite : <code>klaxonner()</code></li></ul></li> <li>Créer une classe <code>Voiture</code> qui hérite de <code>Vehicule</code> avec :
					<ul class="ml-6"><li>Attribut supplémentaire : <code>nbPortes</code></li> <li>Implémenter <code>klaxonner()</code> → affiche &quot;Tuuut tuuut !&quot;</li></ul></li> <li>Créer une classe <code>Moto</code> qui hérite de <code>Vehicule</code> avec :
					<ul class="ml-6"><li>Attribut supplémentaire : <code>avecSidecar</code></li> <li>Implémenter <code>klaxonner()</code> → affiche &quot;Beep beep !&quot;</li></ul></li></ol>`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=p,this.h()},l(i){e=C(i,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-y2rbbg"&&(e.textContent=o),s=d(i),t=C(i,"DIV",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-wl8xd3"&&(t.innerHTML=p),this.h()},h(){w(t,"class","text-left text-xl")},m(i,u){r(i,e,u),r(i,s,u),r(i,t,u)},p:k,d(i){i&&(a(e),a(s),a(t))}}}function zc(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Vc(_){let e,o="🎨 Diagramme UML cible",s,t,p;return t=new Ke({props:{$$slots:{default:[zc]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(i){e=C(i,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-iafbxg"&&(e.textContent=o),s=d(i),M(t.$$.fragment,i)},m(i,u){r(i,e,u),r(i,s,u),S(t,i,u),p=!0},p(i,u){const m={};u&1&&(m.$$scope={dirty:u,ctx:i}),t.$set(m)},i(i){p||(H(t.$$.fragment,i),p=!0)},o(i){P(t.$$.fragment,i),p=!1},d(i){i&&(a(e),a(s)),q(t,i)}}}function Rc(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Uc(_){let e,o="💡 Indice",s,t,p;return t=new Z({props:{$$slots:{default:[Rc]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(i){e=C(i,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-s9gy6g"&&(e.textContent=o),s=d(i),M(t.$$.fragment,i)},m(i,u){r(i,e,u),r(i,s,u),S(t,i,u),p=!0},p(i,u){const m={};u&1&&(m.$$scope={dirty:u,ctx:i}),t.$set(m)},i(i){p||(H(t.$$.fragment,i),p=!0)},o(i){P(t.$$.fragment,i),p=!1},d(i){i&&(a(e),a(s)),q(t,i)}}}function Jc(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Bc(_){let e,o="✅ Solution : Vehicule",s,t,p;return t=new Z({props:{class:"language-java",$$slots:{default:[Jc]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(i){e=C(i,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-zw7ek9"&&(e.textContent=o),s=d(i),M(t.$$.fragment,i)},m(i,u){r(i,e,u),r(i,s,u),S(t,i,u),p=!0},p(i,u){const m={};u&1&&(m.$$scope={dirty:u,ctx:i}),t.$set(m)},i(i){p||(H(t.$$.fragment,i),p=!0)},o(i){P(t.$$.fragment,i),p=!1},d(i){i&&(a(e),a(s)),q(t,i)}}}function Nc(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Fc(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Gc(_){let e,o="✅ Solution : Voiture et Moto",s,t,p,i,u,m;return p=new Z({props:{class:"language-java",$$slots:{default:[Nc]},$$scope:{ctx:_}}}),u=new Z({props:{class:"language-java",$$slots:{default:[Fc]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),T(p.$$.fragment),i=v(),T(u.$$.fragment),this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1ywidnm"&&(e.textContent=o),s=d(n),t=C(n,"DIV",{class:!0});var $=Le(t);M(p.$$.fragment,$),i=d($),M(u.$$.fragment,$),$.forEach(a),this.h()},h(){w(t,"class","flex flex-row gap-4")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),S(p,t,null),ne(t,i),S(u,t,null),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),p.$set(x);const l={};$&1&&(l.$$scope={dirty:$,ctx:n}),u.$set(l)},i(n){m||(H(p.$$.fragment,n),H(u.$$.fragment,n),m=!0)},o(n){P(p.$$.fragment,n),P(u.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(t)),q(p),q(u)}}}function Qc(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Kc(_){let e,o="🧪 Test de votre code",s,t,p;return t=new Z({props:{$$slots:{default:[Qc]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(i){e=C(i,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1yizvu6"&&(e.textContent=o),s=d(i),M(t.$$.fragment,i)},m(i,u){r(i,e,u),r(i,s,u),S(t,i,u),p=!0},p(i,u){const m={};u&1&&(m.$$scope={dirty:u,ctx:i}),t.$set(m)},i(i){p||(H(t.$$.fragment,i),p=!0)},o(i){P(t.$$.fragment,i),p=!1},d(i){i&&(a(e),a(s)),q(t,i)}}}function Wc(_){let e,o="🎯 Points clés",s,t,p='<li class="fragment">✅ <code>abstract class</code> → empêche l&#39;instanciation directe</li> <li class="fragment">✅ <code>abstract void klaxonner()</code> → contrat pour les sous-classes</li> <li class="fragment">✅ <code>super(...)</code> → appel du constructeur parent obligatoire</li> <li class="fragment">✅ <code>@Override</code> → sécurité lors de la redéfinition</li> <li class="fragment">✅ Code commun dans le parent → évite duplication</li>',i,u,m="💼 En entreprise : hiérarchies de produits, utilisateurs, transactions, etc.";return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=p,i=v(),u=g("p"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-gv6vvv"&&(e.textContent=o),s=d(n),t=C(n,"UL",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1z0f2wo"&&(t.innerHTML=p),i=d(n),u=C(n,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1fewxyy"&&(u.textContent=m),this.h()},h(){w(t,"class","text-xl"),w(u,"class","fragment mt-8 text-accent-200 font-bold")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function Xc(_){let e,o="Exercice 3",s,t,p="Composition et Interfaces",i,u,m="⏱️ 20-25 minutes";return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("p"),u.textContent=m,this.h()},l(n){e=C(n,"H2",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-1033wpr"&&(e.textContent=o),s=d(n),t=C(n,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1hujr1a"&&(t.textContent=p),i=d(n),u=C(n,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1n0lccm"&&(u.textContent=m),this.h()},h(){w(e,"class","text-5xl"),w(t,"class","text-2xl text-gray-400"),w(u,"class","text-xl mt-8")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function Yc(_){let e,o="📝 Exercice 3 : Système de location",s,t,p=`<p class="font-bold text-accent-200">Objectif :</p> <p class="mb-4">Combiner héritage, composition et interfaces dans un système réaliste.</p> <p class="font-bold text-accent-200 mt-6">Consignes :</p> <ol class="space-y-2"><li>Créer une interface <code>ILouable</code> avec :
					<ul class="ml-6"><li><code>double calculerPrixLocation(int nbJours)</code></li></ul></li> <li>Réutiliser vos classes <code>Vehicule</code>, <code>Voiture</code>, <code>Moto</code></li> <li>Faire implémenter <code>ILouable</code> par <code>Voiture</code> et <code>Moto</code> :
					<ul class="ml-6"><li>Voiture : 50€/jour</li> <li>Moto : 30€/jour</li></ul></li> <li>Créer une classe <code>AgenceLocation</code> avec :
					<ul class="ml-6"><li>Liste de véhicules louables</li> <li>Méthode <code>ajouterVehicule(ILouable v)</code></li> <li>Méthode <code>calculerRevenuTotal(int nbJours)</code></li></ul></li></ol>`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=p,this.h()},l(i){e=C(i,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1xzgz2g"&&(e.textContent=o),s=d(i),t=C(i,"DIV",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-p07eid"&&(t.innerHTML=p),this.h()},h(){w(t,"class","text-left text-xl")},m(i,u){r(i,e,u),r(i,s,u),r(i,t,u)},p:k,d(i){i&&(a(e),a(s),a(t))}}}function Zc(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function yc(_){let e,o="🎨 Diagramme UML cible",s,t,p;return t=new Ke({props:{$$slots:{default:[Zc]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(i){e=C(i,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-iafbxg"&&(e.textContent=o),s=d(i),M(t.$$.fragment,i)},m(i,u){r(i,e,u),r(i,s,u),S(t,i,u),p=!0},p(i,u){const m={};u&1&&(m.$$scope={dirty:u,ctx:i}),t.$set(m)},i(i){p||(H(t.$$.fragment,i),p=!0)},o(i){P(t.$$.fragment,i),p=!1},d(i){i&&(a(e),a(s)),q(t,i)}}}function ep(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function tp(_){let e,o="✅ Solution : Interface et implémentations",s,t,p;return t=new Z({props:{class:"language-java h-[65vh]",$$slots:{default:[ep]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(i){e=C(i,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-wjrqcr"&&(e.textContent=o),s=d(i),M(t.$$.fragment,i)},m(i,u){r(i,e,u),r(i,s,u),S(t,i,u),p=!0},p(i,u){const m={};u&1&&(m.$$scope={dirty:u,ctx:i}),t.$set(m)},i(i){p||(H(t.$$.fragment,i),p=!0)},o(i){P(t.$$.fragment,i),p=!1},d(i){i&&(a(e),a(s)),q(t,i)}}}function sp(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function lp(_){let e,o="✅ Solution : AgenceLocation",s,t,p;return t=new Z({props:{class:"language-java",$$slots:{default:[sp]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(i){e=C(i,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-brhqh2"&&(e.textContent=o),s=d(i),M(t.$$.fragment,i)},m(i,u){r(i,e,u),r(i,s,u),S(t,i,u),p=!0},p(i,u){const m={};u&1&&(m.$$scope={dirty:u,ctx:i}),t.$set(m)},i(i){p||(H(t.$$.fragment,i),p=!0)},o(i){P(t.$$.fragment,i),p=!1},d(i){i&&(a(e),a(s)),q(t,i)}}}function np(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function ip(_){let e,o="🧪 Test complet",s,t,p;return t=new Z({props:{$$slots:{default:[np]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(i){e=C(i,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1lbxuqe"&&(e.textContent=o),s=d(i),M(t.$$.fragment,i)},m(i,u){r(i,e,u),r(i,s,u),S(t,i,u),p=!0},p(i,u){const m={};u&1&&(m.$$scope={dirty:u,ctx:i}),t.$set(m)},i(i){p||(H(t.$$.fragment,i),p=!0)},o(i){P(t.$$.fragment,i),p=!1},d(i){i&&(a(e),a(s)),q(t,i)}}}function ap(_){let e,o="🎯 Points clés",s,t,p='<li class="fragment">✅ Interface → contrat abstrait (<i>peut faire</i>)</li> <li class="fragment">✅ Héritage → hiérarchie logique (<i>est un</i>)</li> <li class="fragment">✅ Composition → AgenceLocation <i>a des</i> véhicules</li> <li class="fragment">✅ <code>List&lt;ILouable&gt;</code> → polymorphisme en action</li> <li class="fragment">✅ <code>static final</code> → constante de classe</li>',i,u,m="💼 Architecture typique en entreprise : services, DAO, entités métier";return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=p,i=v(),u=g("p"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-gv6vvv"&&(e.textContent=o),s=d(n),t=C(n,"UL",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-193dcgm"&&(t.innerHTML=p),i=d(n),u=C(n,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-o7prxp"&&(u.textContent=m),this.h()},h(){w(t,"class","text-xl"),w(u,"class","fragment mt-8 text-accent-200 font-bold")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function rp(_){let e,o="🏆 Challenge Bonus",s,t,p="Pour aller plus loin";return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,this.h()},l(i){e=C(i,"H2",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-uwrmmu"&&(e.textContent=o),s=d(i),t=C(i,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-saoopl"&&(t.textContent=p),this.h()},h(){w(e,"class","text-5xl"),w(t,"class","text-2xl text-gray-400")},m(i,u){r(i,e,u),r(i,s,u),r(i,t,u)},p:k,d(i){i&&(a(e),a(s),a(t))}}}function up(_){let e,o="💪 Challenge : Système de réduction",s,t,p=`<p class="font-bold text-accent-200">Améliorez votre système de location :</p> <ol class="space-y-3 mt-4"><li>Ajouter une interface <code>IReductible</code> avec :
					<ul class="ml-6"><li><code>double appliquerReduction(double prix)</code></li></ul></li> <li>Créer des classes de réduction :
					<ul class="ml-6"><li><code>ReductionPourcentage</code> (ex: -20%)</li> <li><code>ReductionMontant</code> (ex: -50€)</li></ul></li> <li>Modifier <code>AgenceLocation</code> pour accepter une réduction</li> <li>Tester avec plusieurs scénarios</li></ol>`,i,u,m="💡 Indice : Strategy Pattern (on le verra plus tard dans les Design Patterns)";return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=p,i=v(),u=g("p"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-11zr1pn"&&(e.textContent=o),s=d(n),t=C(n,"DIV",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-122ga3f"&&(t.innerHTML=p),i=d(n),u=C(n,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-nkxlqz"&&(u.textContent=m),this.h()},h(){w(t,"class","text-left text-xl"),w(u,"class","fragment mt-6 text-accent-200")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function op(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function $p(_){let e,o="✅ Solution Challenge : Interfaces",s,t,p;return t=new Z({props:{class:"language-java",$$slots:{default:[op]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(i){e=C(i,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1r3t153"&&(e.textContent=o),s=d(i),M(t.$$.fragment,i)},m(i,u){r(i,e,u),r(i,s,u),S(t,i,u),p=!0},p(i,u){const m={};u&1&&(m.$$scope={dirty:u,ctx:i}),t.$set(m)},i(i){p||(H(t.$$.fragment,i),p=!0)},o(i){P(t.$$.fragment,i),p=!1},d(i){i&&(a(e),a(s)),q(t,i)}}}function fp(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function cp(_){let e,o="✅ Solution Challenge : AgenceLocation améliorée",s,t,p;return t=new Z({props:{class:"language-java",$$slots:{default:[fp]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(i){e=C(i,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1ou944c"&&(e.textContent=o),s=d(i),M(t.$$.fragment,i)},m(i,u){r(i,e,u),r(i,s,u),S(t,i,u),p=!0},p(i,u){const m={};u&1&&(m.$$scope={dirty:u,ctx:i}),t.$set(m)},i(i){p||(H(t.$$.fragment,i),p=!0)},o(i){P(t.$$.fragment,i),p=!1},d(i){i&&(a(e),a(s)),q(t,i)}}}function pp(_){let e=`
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
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function mp(_){let e,o="🧪 Test du challenge",s,t,p;return t=new Z({props:{$$slots:{default:[pp]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(i){e=C(i,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-ouoo1i"&&(e.textContent=o),s=d(i),M(t.$$.fragment,i)},m(i,u){r(i,e,u),r(i,s,u),S(t,i,u),p=!0},p(i,u){const m={};u&1&&(m.$$scope={dirty:u,ctx:i}),t.$set(m)},i(i){p||(H(t.$$.fragment,i),p=!0)},o(i){P(t.$$.fragment,i),p=!1},d(i){i&&(a(e),a(s)),q(t,i)}}}function dp(_){let e,o="🏋️ Exercices pratiques - Séance 1",s,t,p,i,u,m,n,$,x,l,f,L,c,b,I,E,O,A,D,B,V,K,ie,j,se,_e,be,he,Pe,xe,we,ge,qe,ee,me,te,ve,le,de,He,Ee,Se,Ae,y,pe,Y,ce,Me,Ie,Te,De;return t=new z({props:{data_background_color:"#1a3a1a",$$slots:{default:[Mc]},$$scope:{ctx:_}}}),i=new z({props:{$$slots:{default:[Tc]},$$scope:{ctx:_}}}),m=new z({props:{$$slots:{default:[Ac]},$$scope:{ctx:_}}}),$=new z({props:{$$slots:{default:[Dc]},$$scope:{ctx:_}}}),l=new z({props:{$$slots:{default:[jc]},$$scope:{ctx:_}}}),L=new z({props:{data_background_color:"#1a1a3a",$$slots:{default:[kc]},$$scope:{ctx:_}}}),b=new z({props:{$$slots:{default:[Oc]},$$scope:{ctx:_}}}),E=new z({props:{$$slots:{default:[Vc]},$$scope:{ctx:_}}}),A=new z({props:{$$slots:{default:[Uc]},$$scope:{ctx:_}}}),B=new z({props:{$$slots:{default:[Bc]},$$scope:{ctx:_}}}),K=new z({props:{$$slots:{default:[Gc]},$$scope:{ctx:_}}}),j=new z({props:{$$slots:{default:[Kc]},$$scope:{ctx:_}}}),_e=new z({props:{$$slots:{default:[Wc]},$$scope:{ctx:_}}}),he=new z({props:{data_background_color:"#3a1a1a",$$slots:{default:[Xc]},$$scope:{ctx:_}}}),xe=new z({props:{$$slots:{default:[Yc]},$$scope:{ctx:_}}}),ge=new z({props:{$$slots:{default:[yc]},$$scope:{ctx:_}}}),ee=new z({props:{$$slots:{default:[tp]},$$scope:{ctx:_}}}),te=new z({props:{$$slots:{default:[lp]},$$scope:{ctx:_}}}),le=new z({props:{$$slots:{default:[ip]},$$scope:{ctx:_}}}),He=new z({props:{$$slots:{default:[ap]},$$scope:{ctx:_}}}),Se=new z({props:{data_background_color:"#2a2a1a",$$slots:{default:[rp]},$$scope:{ctx:_}}}),y=new z({props:{$$slots:{default:[up]},$$scope:{ctx:_}}}),Y=new z({props:{$$slots:{default:[$p]},$$scope:{ctx:_}}}),Me=new z({props:{$$slots:{default:[cp]},$$scope:{ctx:_}}}),Te=new z({props:{$$slots:{default:[mp]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),T(i.$$.fragment),u=v(),T(m.$$.fragment),n=v(),T($.$$.fragment),x=v(),T(l.$$.fragment),f=v(),T(L.$$.fragment),c=v(),T(b.$$.fragment),I=v(),T(E.$$.fragment),O=v(),T(A.$$.fragment),D=v(),T(B.$$.fragment),V=v(),T(K.$$.fragment),ie=v(),T(j.$$.fragment),se=v(),T(_e.$$.fragment),be=v(),T(he.$$.fragment),Pe=v(),T(xe.$$.fragment),we=v(),T(ge.$$.fragment),qe=v(),T(ee.$$.fragment),me=v(),T(te.$$.fragment),ve=v(),T(le.$$.fragment),de=v(),T(He.$$.fragment),Ee=v(),T(Se.$$.fragment),Ae=v(),T(y.$$.fragment),pe=v(),T(Y.$$.fragment),ce=v(),T(Me.$$.fragment),Ie=v(),T(Te.$$.fragment)},l(X){e=C(X,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-lz1hvq"&&(e.textContent=o),s=d(X),M(t.$$.fragment,X),p=d(X),M(i.$$.fragment,X),u=d(X),M(m.$$.fragment,X),n=d(X),M($.$$.fragment,X),x=d(X),M(l.$$.fragment,X),f=d(X),M(L.$$.fragment,X),c=d(X),M(b.$$.fragment,X),I=d(X),M(E.$$.fragment,X),O=d(X),M(A.$$.fragment,X),D=d(X),M(B.$$.fragment,X),V=d(X),M(K.$$.fragment,X),ie=d(X),M(j.$$.fragment,X),se=d(X),M(_e.$$.fragment,X),be=d(X),M(he.$$.fragment,X),Pe=d(X),M(xe.$$.fragment,X),we=d(X),M(ge.$$.fragment,X),qe=d(X),M(ee.$$.fragment,X),me=d(X),M(te.$$.fragment,X),ve=d(X),M(le.$$.fragment,X),de=d(X),M(He.$$.fragment,X),Ee=d(X),M(Se.$$.fragment,X),Ae=d(X),M(y.$$.fragment,X),pe=d(X),M(Y.$$.fragment,X),ce=d(X),M(Me.$$.fragment,X),Ie=d(X),M(Te.$$.fragment,X)},m(X,fe){r(X,e,fe),r(X,s,fe),S(t,X,fe),r(X,p,fe),S(i,X,fe),r(X,u,fe),S(m,X,fe),r(X,n,fe),S($,X,fe),r(X,x,fe),S(l,X,fe),r(X,f,fe),S(L,X,fe),r(X,c,fe),S(b,X,fe),r(X,I,fe),S(E,X,fe),r(X,O,fe),S(A,X,fe),r(X,D,fe),S(B,X,fe),r(X,V,fe),S(K,X,fe),r(X,ie,fe),S(j,X,fe),r(X,se,fe),S(_e,X,fe),r(X,be,fe),S(he,X,fe),r(X,Pe,fe),S(xe,X,fe),r(X,we,fe),S(ge,X,fe),r(X,qe,fe),S(ee,X,fe),r(X,me,fe),S(te,X,fe),r(X,ve,fe),S(le,X,fe),r(X,de,fe),S(He,X,fe),r(X,Ee,fe),S(Se,X,fe),r(X,Ae,fe),S(y,X,fe),r(X,pe,fe),S(Y,X,fe),r(X,ce,fe),S(Me,X,fe),r(X,Ie,fe),S(Te,X,fe),De=!0},p(X,fe){const je={};fe&1&&(je.$$scope={dirty:fe,ctx:X}),t.$set(je);const ze={};fe&1&&(ze.$$scope={dirty:fe,ctx:X}),i.$set(ze);const ke={};fe&1&&(ke.$$scope={dirty:fe,ctx:X}),m.$set(ke);const Oe={};fe&1&&(Oe.$$scope={dirty:fe,ctx:X}),$.$set(Oe);const Ve={};fe&1&&(Ve.$$scope={dirty:fe,ctx:X}),l.$set(Ve);const Ue={};fe&1&&(Ue.$$scope={dirty:fe,ctx:X}),L.$set(Ue);const Re={};fe&1&&(Re.$$scope={dirty:fe,ctx:X}),b.$set(Re);const W={};fe&1&&(W.$$scope={dirty:fe,ctx:X}),E.$set(W);const Ce={};fe&1&&(Ce.$$scope={dirty:fe,ctx:X}),A.$set(Ce);const Be={};fe&1&&(Be.$$scope={dirty:fe,ctx:X}),B.$set(Be);const Je={};fe&1&&(Je.$$scope={dirty:fe,ctx:X}),K.$set(Je);const Ne={};fe&1&&(Ne.$$scope={dirty:fe,ctx:X}),j.$set(Ne);const N={};fe&1&&(N.$$scope={dirty:fe,ctx:X}),_e.$set(N);const oe={};fe&1&&(oe.$$scope={dirty:fe,ctx:X}),he.$set(oe);const F={};fe&1&&(F.$$scope={dirty:fe,ctx:X}),xe.$set(F);const $e={};fe&1&&($e.$$scope={dirty:fe,ctx:X}),ge.$set($e);const Ze={};fe&1&&(Ze.$$scope={dirty:fe,ctx:X}),ee.$set(Ze);const Fe={};fe&1&&(Fe.$$scope={dirty:fe,ctx:X}),te.$set(Fe);const ye={};fe&1&&(ye.$$scope={dirty:fe,ctx:X}),le.$set(ye);const J={};fe&1&&(J.$$scope={dirty:fe,ctx:X}),He.$set(J);const ue={};fe&1&&(ue.$$scope={dirty:fe,ctx:X}),Se.$set(ue);const et={};fe&1&&(et.$$scope={dirty:fe,ctx:X}),y.$set(et);const tt={};fe&1&&(tt.$$scope={dirty:fe,ctx:X}),Y.$set(tt);const st={};fe&1&&(st.$$scope={dirty:fe,ctx:X}),Me.$set(st);const U={};fe&1&&(U.$$scope={dirty:fe,ctx:X}),Te.$set(U)},i(X){De||(H(t.$$.fragment,X),H(i.$$.fragment,X),H(m.$$.fragment,X),H($.$$.fragment,X),H(l.$$.fragment,X),H(L.$$.fragment,X),H(b.$$.fragment,X),H(E.$$.fragment,X),H(A.$$.fragment,X),H(B.$$.fragment,X),H(K.$$.fragment,X),H(j.$$.fragment,X),H(_e.$$.fragment,X),H(he.$$.fragment,X),H(xe.$$.fragment,X),H(ge.$$.fragment,X),H(ee.$$.fragment,X),H(te.$$.fragment,X),H(le.$$.fragment,X),H(He.$$.fragment,X),H(Se.$$.fragment,X),H(y.$$.fragment,X),H(Y.$$.fragment,X),H(Me.$$.fragment,X),H(Te.$$.fragment,X),De=!0)},o(X){P(t.$$.fragment,X),P(i.$$.fragment,X),P(m.$$.fragment,X),P($.$$.fragment,X),P(l.$$.fragment,X),P(L.$$.fragment,X),P(b.$$.fragment,X),P(E.$$.fragment,X),P(A.$$.fragment,X),P(B.$$.fragment,X),P(K.$$.fragment,X),P(j.$$.fragment,X),P(_e.$$.fragment,X),P(he.$$.fragment,X),P(xe.$$.fragment,X),P(ge.$$.fragment,X),P(ee.$$.fragment,X),P(te.$$.fragment,X),P(le.$$.fragment,X),P(He.$$.fragment,X),P(Se.$$.fragment,X),P(y.$$.fragment,X),P(Y.$$.fragment,X),P(Me.$$.fragment,X),P(Te.$$.fragment,X),De=!1},d(X){X&&(a(e),a(s),a(p),a(u),a(n),a(x),a(f),a(c),a(I),a(O),a(D),a(V),a(ie),a(se),a(be),a(Pe),a(we),a(qe),a(me),a(ve),a(de),a(Ee),a(Ae),a(pe),a(ce),a(Ie)),q(t,X),q(i,X),q(m,X),q($,X),q(l,X),q(L,X),q(b,X),q(E,X),q(A,X),q(B,X),q(K,X),q(j,X),q(_e,X),q(he,X),q(xe,X),q(ge,X),q(ee,X),q(te,X),q(le,X),q(He,X),q(Se,X),q(y,X),q(Y,X),q(Me,X),q(Te,X)}}}function vp(_){let e,o;return e=new z({props:{$$slots:{default:[dp]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const p={};t&1&&(p.$$scope={dirty:t,ctx:s}),e.$set(p)},i(s){o||(H(e.$$.fragment,s),o=!0)},o(s){P(e.$$.fragment,s),o=!1},d(s){q(e,s)}}}class xp extends Xe{constructor(e){super(),Ye(this,e,null,vp,We,{})}}function _p(_){let e,o="Gestion des erreurs",s,t,p="Les exceptions en Java";return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,this.h()},l(i){e=C(i,"H2",{class:!0,"data-svelte-h":!0}),h(e)!=="svelte-1nmax2r"&&(e.textContent=o),s=d(i),t=C(i,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1imhj9u"&&(t.textContent=p),this.h()},h(){w(e,"class","text-5xl"),w(t,"class","text-2xl text-gray-400")},m(i,u){r(i,e,u),r(i,s,u),r(i,t,u)},p:k,d(i){i&&(a(e),a(s),a(t))}}}function Cp(_){let e=`
int a = 10 / 0;  // ArithmeticException !

String s = null;
s.length();      // NullPointerException !

int[] tab = new int[5];
tab[10] = 42;    // ArrayIndexOutOfBoundsException !
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function gp(_){let e,o="Qu'est-ce qu'une exception ?",s,t,p=`Une <span class="text-important">exception</span> est une erreur qui survient pendant l&#39;exécution
			du programme.`,i,u,m,n,$="Sans gestion, ces erreurs <b>crashent</b> votre programme !",x,l,f=`Les exceptions sont fondamentales en production. Un programme qui crashe = utilisateurs
			mécontents. L'idée : prévoir les problèmes et y réagir proprement au lieu de planter.
			Différence avec les erreurs de compilation : les exceptions arrivent à l'exécution.`,L;return u=new Z({props:{$$slots:{default:[Cp]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment),m=v(),n=g("p"),n.innerHTML=$,x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1egq31j"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1hzkvsn"&&(t.innerHTML=p),i=d(c),M(u.$$.fragment,c),m=d(c),n=C(c,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-fuep6"&&(n.innerHTML=$),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-1fl0e88"&&(l.textContent=f),this.h()},h(){w(n,"class","fragment mt-4 text-red-400 font-bold"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),S(u,c,b),r(c,m,b),r(c,n,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),u.$set(I)},i(c){L||(H(u.$$.fragment,c),L=!0)},o(c){P(u.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(n),a(x),a(l)),q(u,c)}}}function hp(_){let e=`
public void virer(CompteBancaire source, CompteBancaire dest, double montant) {
    source.retirer(montant);
    dest.deposer(montant);    // 💥 Crash ici si dest est null !
}
// Le montant est débité mais jamais crédité !
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function bp(_){let e,o="Le problème en entreprise",s,t,p,i="Imaginez un système bancaire :",u,m,n,$,x="❌ Résultat : argent perdu, clients furieux, responsabilités légales !",l,f,L='✅ Solution : gérer les erreurs avec des <span class="text-important">exceptions</span>',c,b,I=`Exemple réel : en 2012, Knight Capital a perdu 440 millions de dollars en 45 minutes à cause
			d'un bug. Les exceptions + transactions permettent le rollback : si ça échoue, on annule tout.
			C'est le principe ACID des bases de données.`,E;return m=new Z({props:{class:"fragment",$$slots:{default:[hp]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),p=g("p"),p.textContent=i,u=v(),T(m.$$.fragment),n=v(),$=g("p"),$.textContent=x,l=v(),f=g("p"),f.innerHTML=L,c=v(),b=g("aside"),b.textContent=I,this.h()},l(O){e=C(O,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-t2k3nu"&&(e.textContent=o),s=d(O),t=C(O,"DIV",{class:!0});var A=Le(t);p=C(A,"P",{"data-svelte-h":!0}),h(p)!=="svelte-1kax0xz"&&(p.textContent=i),u=d(A),M(m.$$.fragment,A),n=d(A),$=C(A,"P",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-195cml6"&&($.textContent=x),l=d(A),f=C(A,"P",{class:!0,"data-svelte-h":!0}),h(f)!=="svelte-l7uzpt"&&(f.innerHTML=L),A.forEach(a),c=d(O),b=C(O,"ASIDE",{class:!0,"data-svelte-h":!0}),h(b)!=="svelte-6opdw3"&&(b.textContent=I),this.h()},h(){w($,"class","fragment mt-6 text-red-400"),w(f,"class","fragment mt-4 text-accent-200"),w(t,"class","text-xl"),w(b,"class","notes")},m(O,A){r(O,e,A),r(O,s,A),r(O,t,A),ne(t,p),ne(t,u),S(m,t,null),ne(t,n),ne(t,$),ne(t,l),ne(t,f),r(O,c,A),r(O,b,A),E=!0},p(O,A){const D={};A&1&&(D.$$scope={dirty:A,ctx:O}),m.$set(D)},i(O){E||(H(m.$$.fragment,O),E=!0)},o(O){P(m.$$.fragment,O),E=!1},d(O){O&&(a(e),a(s),a(t),a(c),a(b)),q(m)}}}function Lp(_){let e=`
try {
    // Code qui peut générer une exception
    int resultat = 10 / 0;
    System.out.println(resultat);
} catch (ArithmeticException e) {
    // Code exécuté SI une exception se produit
    System.out.println("Erreur : division par zéro !");
}
finally {
    // Code exécuté TOUJOURS (avec ou sans exception)
    System.out.println("Nettoyage des ressources");
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function wp(_){let e,o="try / catch / finally",s,t,p="On utilise des blocs pour <b>capturer</b> et <b>gérer</b> les exceptions.",i,u,m,n,$=`Le try délimite la zone de code surveillée. Le catch attrape l'exception. Le finally s'exécute
			MÊME si on fait un return dans le try ou le catch ! C'est la garantie que le nettoyage sera
			fait. Très important pour éviter les fuites mémoire.`,x;return u=new Z({props:{lines:"1-4|5-8|9-12",$$slots:{default:[Lp]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment),m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1v9mfjh"&&(e.textContent=o),s=d(l),t=C(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1g5ymj1"&&(t.innerHTML=p),i=d(l),M(u.$$.fragment,l),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1c47ufk"&&(n.textContent=$),this.h()},h(){w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),S(u,l,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),u.$set(L)},i(l){x||(H(u.$$.fragment,l),x=!0)},o(l){P(u.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(t),a(i),a(m),a(n)),q(u,l)}}}function qp(_){let e=`
public void virer(CompteBancaire source, CompteBancaire dest, double montant) {
    try {
        if (source == null || dest == null) {
            throw new IllegalArgumentException("Compte null");
        }
        
        source.retirer(montant);
        dest.deposer(montant);
        
        System.out.println("Virement réussi");
    } catch (IllegalArgumentException e) {
        System.err.println("Erreur : " + e.getMessage());
        // On peut logger, alerter, annuler la transaction...
    } catch (Exception e) {
        System.err.println("Erreur inattendue : " + e.getMessage());
        // Rollback, notification admin...
    } finally {
        // Fermer connexions, libérer ressources...
    }
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Pp(_){let e,o="Exemple : virement sécurisé",s,t,p;return t=new Z({props:{$$slots:{default:[qp]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(i){e=C(i,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-16qx2z5"&&(e.textContent=o),s=d(i),M(t.$$.fragment,i)},m(i,u){r(i,e,u),r(i,s,u),S(t,i,u),p=!0},p(i,u){const m={};u&1&&(m.$$scope={dirty:u,ctx:i}),t.$set(m)},i(i){p||(H(t.$$.fragment,i),p=!0)},o(i){P(t.$$.fragment,i),p=!1},d(i){i&&(a(e),a(s)),q(t,i)}}}function Hp(_){let e=`
public void setAge(int age) {
    if (age < 0) {
        throw new IllegalArgumentException("L'âge ne peut pas être négatif !");
    }
    if (age > 150) {
        throw new IllegalArgumentException("L'âge est irréaliste !");
    }
    this.age = age;
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Sp(_){let e,o="Lancer une exception avec throw",s,t,p="On peut <b>créer</b> et <b>lancer</b> nos propres exceptions.",i,u,m,n,$="💡 Cela permet de <b>valider les données</b> et d&#39;arrêter l&#39;exécution proprement.",x,l,f=`throw crée et lance l'exception. C'est vous qui décidez quand une situation est anormale.
			C'est le pattern "Fail Fast" : mieux vaut échouer tôt que propager des données invalides. Très
			utile pour valider les entrées utilisateur ou les paramètres de méthodes.`,L;return u=new Z({props:{$$slots:{default:[Hp]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment),m=v(),n=g("p"),n.innerHTML=$,x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-axmwwj"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1g5b8i9"&&(t.innerHTML=p),i=d(c),M(u.$$.fragment,c),m=d(c),n=C(c,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-juat2d"&&(n.innerHTML=$),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-6k9ckz"&&(l.textContent=f),this.h()},h(){w(n,"class","fragment mt-4 text-accent-200"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),S(u,c,b),r(c,m,b),r(c,n,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),u.$set(I)},i(c){L||(H(u.$$.fragment,c),L=!0)},o(c){P(u.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(n),a(x),a(l)),q(u,c)}}}function Mp(_){let e=`
Personne p = new Personne("Jean");

try {
    p.setAge(-5);  // Lance une exception
} catch (IllegalArgumentException e) {
    System.out.println("Erreur : " + e.getMessage());
    // Affiche : "Erreur : L'âge ne peut pas être négatif !"
}

System.out.println("Programme continue...");
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Tp(_){let e,o="Utilisation",s,t,p,i,u="Sans le <code>try/catch</code>, le programme crasherait immédiatement.",m;return t=new Z({props:{$$slots:{default:[Mp]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-oc5s5"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-ij3uuw"&&(i.innerHTML=u),this.h()},h(){w(i,"class","fragment mt-4")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function Ep(_){let e,o="Exceptions courantes",s,t,p='<tr class="fragment"><td class="p-3"><code>NullPointerException</code></td> <td class="p-3">Accès à un objet null</td></tr> <tr class="fragment"><td class="p-3"><code>ArrayIndexOutOfBoundsException</code></td> <td class="p-3">Index hors limites d&#39;un tableau</td></tr> <tr class="fragment"><td class="p-3"><code>ArithmeticException</code></td> <td class="p-3">Division par zéro</td></tr> <tr class="fragment"><td class="p-3"><code>IllegalArgumentException</code></td> <td class="p-3">Argument invalide</td></tr> <tr class="fragment"><td class="p-3"><code>IOException</code></td> <td class="p-3">Erreur d&#39;entrée/sortie (fichiers)</td></tr> <tr class="fragment"><td class="p-3"><code>SQLException</code></td> <td class="p-3">Erreur base de données</td></tr>',i,u,m=`NullPointerException est la plus fréquente ! Tony Hoare l'appelle son "erreur à un milliard de
			dollars". Java 14+ a amélioré les messages d'erreur NPE pour mieux identifier le problème. En
			entretien, on vous demandera souvent de citer des exceptions courantes.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("table"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-lf1a5g"&&(e.textContent=o),s=d(n),t=C(n,"TABLE",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1tjk60m"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-8hnm1r"&&(u.textContent=m),this.h()},h(){w(t,"class","text-xl"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function Ap(_){let e=`
// IOException DOIT être gérée
public void lireFichier() 
    throws IOException {
    FileReader fr = 
        new FileReader("test.txt");
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Ip(_){let e=`
// Pas d'obligation
public void diviser(int a, int b) {
    return a / b;
    // Peut lancer ArithmeticException
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Dp(_){let e,o="Exceptions vérifiées vs non-vérifiées",s,t,p,i,u="🔍 Checked (vérifiées)",m,n,$="Le compilateur <b>oblige</b> à les gérer",x,l,f,L,c="Exemples : <code>IOException</code>, <code>SQLException</code>",b,I,E,O="⚡ Unchecked (non-vérifiées)",A,D,B="Gestion <b>optionnelle</b>",V,K,ie,j,se="Exemples : <code>NullPointerException</code>, <code>ArithmeticException</code>",_e,be,he=`C'est un débat classique en Java. Certains pensent que les checked exceptions sont trop
			verbeuses. Les unchecked héritent de RuntimeException. Les checked héritent directement de
			Exception. En pratique moderne, on préfère souvent les unchecked pour moins de boilerplate.`,Pe;return l=new Z({props:{$$slots:{default:[Ap]},$$scope:{ctx:_}}}),K=new Z({props:{$$slots:{default:[Ip]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),p=g("div"),i=g("h4"),i.textContent=u,m=v(),n=g("p"),n.innerHTML=$,x=v(),T(l.$$.fragment),f=v(),L=g("p"),L.innerHTML=c,b=v(),I=g("div"),E=g("h4"),E.textContent=O,A=v(),D=g("p"),D.innerHTML=B,V=v(),T(K.$$.fragment),ie=v(),j=g("p"),j.innerHTML=se,_e=v(),be=g("aside"),be.textContent=he,this.h()},l(xe){e=C(xe,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1rgwfhb"&&(e.textContent=o),s=d(xe),t=C(xe,"DIV",{class:!0});var we=Le(t);p=C(we,"DIV",{class:!0});var ge=Le(p);i=C(ge,"H4",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-16tmvlx"&&(i.textContent=u),m=d(ge),n=C(ge,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1788pm1"&&(n.innerHTML=$),x=d(ge),M(l.$$.fragment,ge),f=d(ge),L=C(ge,"P",{class:!0,"data-svelte-h":!0}),h(L)!=="svelte-g6fb4e"&&(L.innerHTML=c),ge.forEach(a),b=d(we),I=C(we,"DIV",{class:!0});var qe=Le(I);E=C(qe,"H4",{class:!0,"data-svelte-h":!0}),h(E)!=="svelte-7wdhub"&&(E.textContent=O),A=d(qe),D=C(qe,"P",{class:!0,"data-svelte-h":!0}),h(D)!=="svelte-63ot4u"&&(D.innerHTML=B),V=d(qe),M(K.$$.fragment,qe),ie=d(qe),j=C(qe,"P",{class:!0,"data-svelte-h":!0}),h(j)!=="svelte-dhufwv"&&(j.innerHTML=se),qe.forEach(a),we.forEach(a),_e=d(xe),be=C(xe,"ASIDE",{class:!0,"data-svelte-h":!0}),h(be)!=="svelte-1xkx1k0"&&(be.textContent=he),this.h()},h(){w(i,"class","text-important"),w(n,"class","text-sm mt-2"),w(L,"class","text-sm mt-2"),w(p,"class","fragment p-4 bg-accent-950 rounded-lg"),w(E,"class","text-important"),w(D,"class","text-sm mt-2"),w(j,"class","text-sm mt-2"),w(I,"class","fragment p-4 bg-accent-950 rounded-lg"),w(t,"class","grid grid-cols-2 gap-6 mt-6"),w(be,"class","notes")},m(xe,we){r(xe,e,we),r(xe,s,we),r(xe,t,we),ne(t,p),ne(p,i),ne(p,m),ne(p,n),ne(p,x),S(l,p,null),ne(p,f),ne(p,L),ne(t,b),ne(t,I),ne(I,E),ne(I,A),ne(I,D),ne(I,V),S(K,I,null),ne(I,ie),ne(I,j),r(xe,_e,we),r(xe,be,we),Pe=!0},p(xe,we){const ge={};we&1&&(ge.$$scope={dirty:we,ctx:xe}),l.$set(ge);const qe={};we&1&&(qe.$$scope={dirty:we,ctx:xe}),K.$set(qe)},i(xe){Pe||(H(l.$$.fragment,xe),H(K.$$.fragment,xe),Pe=!0)},o(xe){P(l.$$.fragment,xe),P(K.$$.fragment,xe),Pe=!1},d(xe){xe&&(a(e),a(s),a(t),a(_e),a(be)),q(l),q(K)}}}function jp(_){let e=`
public void lireFichier(String chemin) throws IOException {
    FileReader fr = new FileReader(chemin);
    // ... lecture ...
    fr.close();
}

// L'appelant DOIT gérer l'exception
public void main() {
    try {
        lireFichier("data.txt");
    } catch (IOException e) {
        System.err.println("Impossible de lire le fichier");
    }
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function kp(_){let e,o="Le mot-clé throws",s,t,p="Déclare qu&#39;une méthode <b>peut</b> lancer une exception (mais ne la gère pas).",i,u,m,n,$=`throws délègue la responsabilité. "Je sais que ça peut foirer, mais c'est à toi de gérer."
			Attention : throw (sans s) lance l'exception, throws (avec s) déclare la possibilité. On peut
			déclarer plusieurs exceptions : throws IOException, SQLException.`,x;return u=new Z({props:{$$slots:{default:[jp]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment),m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1b7j9e9"&&(e.textContent=o),s=d(l),t=C(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1y0hxy3"&&(t.innerHTML=p),i=d(l),M(u.$$.fragment,l),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-17n9r8y"&&(n.textContent=$),this.h()},h(){w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),S(u,l,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),u.$set(L)},i(l){x||(H(u.$$.fragment,l),x=!0)},o(l){P(u.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(t),a(i),a(m),a(n)),q(u,l)}}}function Op(_){let e=`
public class SoldeInsuffisantException extends Exception {
    private double solde;
    private double montantDemande;
    
    public SoldeInsuffisantException(double solde, double montant) {
        super("Solde insuffisant : " + solde + " € disponible, " + montant + " € demandé");
        this.solde = solde;
        this.montantDemande = montant;
    }
    
    public double getSoldeManquant() {
        return montantDemande - solde;
    }
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function zp(_){let e,o="Créer ses propres exceptions",s,t,p="Pour des cas métier spécifiques, on peut créer nos propres exceptions.",i,u,m,n,$=`Les exceptions métier améliorent la lisibilité du code. SoldeInsuffisantException dit
			exactement ce qui se passe. On peut stocker des infos supplémentaires (solde, montant) pour
			mieux gérer l'erreur. Convention : le nom se termine par Exception.`,x;return u=new Z({props:{$$slots:{default:[Op]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),T(u.$$.fragment),m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1m2x4bb"&&(e.textContent=o),s=d(l),t=C(l,"P",{"data-svelte-h":!0}),h(t)!=="svelte-19oc8nz"&&(t.textContent=p),i=d(l),M(u.$$.fragment,l),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-t8my84"&&(n.textContent=$),this.h()},h(){w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),S(u,l,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),u.$set(L)},i(l){x||(H(u.$$.fragment,l),x=!0)},o(l){P(u.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(t),a(i),a(m),a(n)),q(u,l)}}}function Vp(_){let e=`
public class CompteBancaire {
    private double solde;
    
    public void retirer(double montant) throws SoldeInsuffisantException {
        if (montant > solde) {
            throw new SoldeInsuffisantException(solde, montant);
        }
        solde -= montant;
    }
}

// Utilisation
try {
    compte.retirer(500);
} catch (SoldeInsuffisantException e) {
    System.out.println(e.getMessage());
    System.out.println("Il manque " + e.getSoldeManquant() + " €");
    // On peut proposer un crédit, envoyer une alerte...
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Rp(_){let e,o="Utilisation de l'exception personnalisée",s,t,p;return t=new Z({props:{$$slots:{default:[Vp]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(i){e=C(i,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1966yd8"&&(e.textContent=o),s=d(i),M(t.$$.fragment,i)},m(i,u){r(i,e,u),r(i,s,u),S(t,i,u),p=!0},p(i,u){const m={};u&1&&(m.$$scope={dirty:u,ctx:i}),t.$set(m)},i(i){p||(H(t.$$.fragment,i),p=!0)},o(i){P(t.$$.fragment,i),p=!1},d(i){i&&(a(e),a(s)),q(t,i)}}}function Up(_){let e,o="Bonnes pratiques",s,t,p='<li class="fragment">✅ Attraper des exceptions <b>spécifiques</b> plutôt que <code>Exception</code></li> <li class="fragment">✅ Ne jamais laisser un <code>catch</code> vide</li> <li class="fragment">✅ Utiliser <code>finally</code> pour libérer les ressources</li> <li class="fragment">✅ Logger les exceptions pour le debug</li> <li class="fragment">✅ Créer des exceptions métier personnalisées</li> <li class="fragment">❌ Ne pas utiliser les exceptions pour le contrôle de flux normal</li>',i,u,m=`Le catch vide est le pire anti-pattern : on avale l'erreur et on ne sait jamais ce qui s'est
			passé. Pour le logging, utilisez un framework comme SLF4J/Logback en entreprise. Les
			exceptions sont coûteuses en performance, ne les utilisez pas pour le flux normal.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-uo4ex7"&&(e.textContent=o),s=d(n),t=C(n,"UL",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1uzwzbt"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1oakell"&&(u.textContent=m),this.h()},h(){w(t,"class","text-xl"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function Jp(_){let e=`
try {
    // Un gros bloc de code
    compte.retirer(100);
    compte.deposer(50);
    compte.calculerInterets();
} catch (Exception e) {
    // Ne rien faire... 
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Bp(_){let e,o="❌ Mauvais exemple",s,t,p,i,u="Problèmes : catch trop large, pas de gestion, on masque les erreurs !",m;return t=new Z({props:{$$slots:{default:[Jp]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.textContent=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-n6sp2k"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-otctfb"&&(i.textContent=u),this.h()},h(){w(i,"class","fragment text-red-400 mt-4")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function Np(_){let e=`
try {
    compte.retirer(100);
} catch (SoldeInsuffisantException e) {
    logger.error("Retrait impossible", e);
    notifierClient(e.getMessage());
} catch (CompteBloque e) {
    logger.warn("Compte bloqué", e);
    redirigerVersSupport();
} finally {
    connexionBD.close();
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Fp(_){let e,o="✅ Bon exemple",s,t,p,i,u="✅ Exceptions spécifiques, gestion appropriée, logging, cleanup",m;return t=new Z({props:{$$slots:{default:[Np]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.textContent=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-vb4f5s"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-oigkm9"&&(i.textContent=u),this.h()},h(){w(i,"class","fragment text-green-400 mt-4")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function Gp(_){let e=`
FileReader fr = null;
try {
    fr = new FileReader("test.txt");
    // ... lecture ...
} catch (IOException e) {
    e.printStackTrace();
} finally {
    if (fr != null) {
        try {
            fr.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Qp(_){let e=`
try (FileReader fr = 
        new FileReader("test.txt")) {
    // ... lecture ...
    // fr.close() automatique !
} catch (IOException e) {
    e.printStackTrace();
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Kp(_){let e,o="Try-with-resources (Java 7+)",s,t,p="Gestion automatique des ressources (fichiers, connexions...).",i,u,m,n,$="❌ Avant",x,l,f,L,c,b="✅ Maintenant",I,E,O,A,D=`try-with-resources est arrivé en Java 7. Plus jamais de finally pour fermer un fichier !
			L'objet doit implémenter AutoCloseable. close() est appelé automatiquement. On peut déclarer
			plusieurs ressources séparées par des points-virgules.`,B;return l=new Z({props:{$$slots:{default:[Gp]},$$scope:{ctx:_}}}),E=new Z({props:{$$slots:{default:[Qp]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("div"),m=g("div"),n=g("h4"),n.textContent=$,x=v(),T(l.$$.fragment),f=v(),L=g("div"),c=g("h4"),c.textContent=b,I=v(),T(E.$$.fragment),O=v(),A=g("aside"),A.textContent=D,this.h()},l(V){e=C(V,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1lmaf9"&&(e.textContent=o),s=d(V),t=C(V,"P",{"data-svelte-h":!0}),h(t)!=="svelte-t32lk8"&&(t.textContent=p),i=d(V),u=C(V,"DIV",{class:!0});var K=Le(u);m=C(K,"DIV",{});var ie=Le(m);n=C(ie,"H4",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-m07bex"&&(n.textContent=$),x=d(ie),M(l.$$.fragment,ie),ie.forEach(a),f=d(K),L=C(K,"DIV",{});var j=Le(L);c=C(j,"H4",{class:!0,"data-svelte-h":!0}),h(c)!=="svelte-mz6dl9"&&(c.textContent=b),I=d(j),M(E.$$.fragment,j),j.forEach(a),K.forEach(a),O=d(V),A=C(V,"ASIDE",{class:!0,"data-svelte-h":!0}),h(A)!=="svelte-t382nm"&&(A.textContent=D),this.h()},h(){w(n,"class","text-red-400"),w(c,"class","text-green-400"),w(u,"class","grid grid-cols-2 gap-4"),w(A,"class","notes")},m(V,K){r(V,e,K),r(V,s,K),r(V,t,K),r(V,i,K),r(V,u,K),ne(u,m),ne(m,n),ne(m,x),S(l,m,null),ne(u,f),ne(u,L),ne(L,c),ne(L,I),S(E,L,null),r(V,O,K),r(V,A,K),B=!0},p(V,K){const ie={};K&1&&(ie.$$scope={dirty:K,ctx:V}),l.$set(ie);const j={};K&1&&(j.$$scope={dirty:K,ctx:V}),E.$set(j)},i(V){B||(H(l.$$.fragment,V),H(E.$$.fragment,V),B=!0)},o(V){P(l.$$.fragment,V),P(E.$$.fragment,V),B=!1},d(V){V&&(a(e),a(s),a(t),a(i),a(u),a(O),a(A)),q(l),q(E)}}}function Wp(_){let e=`
@PostMapping("/comptes/{id}/retrait")
public ResponseEntity<?> retirer(@PathVariable Long id, @RequestBody double montant) {
    try {
        compteService.retirer(id, montant);
        return ResponseEntity.ok("Retrait effectué");
    } catch (SoldeInsuffisantException e) {
        return ResponseEntity.status(400).body(e.getMessage());
    } catch (CompteIntrouvableException e) {
        return ResponseEntity.status(404).body(e.getMessage());
    } catch (Exception e) {
        logger.error("Erreur serveur", e);
        return ResponseEntity.status(500).body("Erreur interne");
    }
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Xp(_){let e,o="💼 Cas d'usage entreprise",s,t,p,i="API REST",u,m,n,$,x="Les exceptions permettent de renvoyer les <b>bons codes HTTP</b> !",l;return m=new Z({props:{$$slots:{default:[Wp]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),p=g("p"),p.textContent=i,u=v(),T(m.$$.fragment),n=v(),$=g("p"),$.innerHTML=x,this.h()},l(f){e=C(f,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-rsugml"&&(e.textContent=o),s=d(f),t=C(f,"DIV",{class:!0});var L=Le(t);p=C(L,"P",{class:!0,"data-svelte-h":!0}),h(p)!=="svelte-19l5ylf"&&(p.textContent=i),u=d(L),M(m.$$.fragment,L),n=d(L),$=C(L,"P",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-5yr5p"&&($.innerHTML=x),L.forEach(a),this.h()},h(){w(p,"class","font-bold text-accent-200"),w($,"class","fragment mt-4"),w(t,"class","text-xl")},m(f,L){r(f,e,L),r(f,s,L),r(f,t,L),ne(t,p),ne(t,u),S(m,t,null),ne(t,n),ne(t,$),l=!0},p(f,L){const c={};L&1&&(c.$$scope={dirty:L,ctx:f}),m.$set(c)},i(f){l||(H(m.$$.fragment,f),l=!0)},o(f){P(m.$$.fragment,f),l=!1},d(f){f&&(a(e),a(s),a(t)),q(m)}}}function Yp(_){let e,o="Récapitulatif",s,t,p='<tr><td class="p-3"><code class="text-important">try/catch</code></td> <td class="p-3">Gérer les exceptions</td></tr> <tr><td class="p-3"><code class="text-important">throw</code></td> <td class="p-3">Lancer une exception</td></tr> <tr><td class="p-3"><code class="text-important">throws</code></td> <td class="p-3">Déclarer qu&#39;une méthode peut lancer</td></tr> <tr><td class="p-3"><code class="text-important">finally</code></td> <td class="p-3">Code exécuté dans tous les cas</td></tr> <tr><td class="p-3"><code class="text-important">try-with-resources</code></td> <td class="p-3">Gestion automatique des ressources</td></tr>',i,u,m="💼 Les exceptions sont essentielles pour la robustesse des applications en production !",n,$,x=`Résumé à connaître par cœur pour l'examen. throw vs throws est une question classique. En
			entreprise, la gestion des exceptions fait partie du quotidien du développeur. Un code sans
			gestion d'erreur n'est pas un code professionnel.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("table"),t.innerHTML=p,i=v(),u=g("p"),u.textContent=m,n=v(),$=g("aside"),$.textContent=x,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-ri7iuh"&&(e.textContent=o),s=d(l),t=C(l,"TABLE",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-hswrc0"&&(t.innerHTML=p),i=d(l),u=C(l,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-q1m0ht"&&(u.textContent=m),n=d(l),$=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-14qpnat"&&($.textContent=x),this.h()},h(){w(t,"class","text-xl mt-4"),w(u,"class","fragment mt-8 text-accent-200 font-bold"),w($,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,u,f),r(l,n,f),r(l,$,f)},p:k,d(l){l&&(a(e),a(s),a(t),a(i),a(u),a(n),a($))}}}function Zp(_){let e,o="Les Exceptions",s,t,p,i,u,m,n,$,x,l,f,L,c,b,I,E,O,A,D,B,V,K,ie,j,se,_e,be,he,Pe,xe,we,ge,qe,ee,me,te,ve;return t=new z({props:{data_background_color:"#1a1a2e",$$slots:{default:[_p]},$$scope:{ctx:_}}}),i=new z({props:{$$slots:{default:[gp]},$$scope:{ctx:_}}}),m=new z({props:{$$slots:{default:[bp]},$$scope:{ctx:_}}}),$=new z({props:{$$slots:{default:[wp]},$$scope:{ctx:_}}}),l=new z({props:{$$slots:{default:[Pp]},$$scope:{ctx:_}}}),L=new z({props:{$$slots:{default:[Sp]},$$scope:{ctx:_}}}),b=new z({props:{$$slots:{default:[Tp]},$$scope:{ctx:_}}}),E=new z({props:{$$slots:{default:[Ep]},$$scope:{ctx:_}}}),A=new z({props:{$$slots:{default:[Dp]},$$scope:{ctx:_}}}),B=new z({props:{$$slots:{default:[kp]},$$scope:{ctx:_}}}),K=new z({props:{$$slots:{default:[zp]},$$scope:{ctx:_}}}),j=new z({props:{$$slots:{default:[Rp]},$$scope:{ctx:_}}}),_e=new z({props:{$$slots:{default:[Up]},$$scope:{ctx:_}}}),he=new z({props:{$$slots:{default:[Bp]},$$scope:{ctx:_}}}),xe=new z({props:{$$slots:{default:[Fp]},$$scope:{ctx:_}}}),ge=new z({props:{$$slots:{default:[Kp]},$$scope:{ctx:_}}}),ee=new z({props:{$$slots:{default:[Xp]},$$scope:{ctx:_}}}),te=new z({props:{$$slots:{default:[Yp]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),T(i.$$.fragment),u=v(),T(m.$$.fragment),n=v(),T($.$$.fragment),x=v(),T(l.$$.fragment),f=v(),T(L.$$.fragment),c=v(),T(b.$$.fragment),I=v(),T(E.$$.fragment),O=v(),T(A.$$.fragment),D=v(),T(B.$$.fragment),V=v(),T(K.$$.fragment),ie=v(),T(j.$$.fragment),se=v(),T(_e.$$.fragment),be=v(),T(he.$$.fragment),Pe=v(),T(xe.$$.fragment),we=v(),T(ge.$$.fragment),qe=v(),T(ee.$$.fragment),me=v(),T(te.$$.fragment)},l(le){e=C(le,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-19gjztu"&&(e.textContent=o),s=d(le),M(t.$$.fragment,le),p=d(le),M(i.$$.fragment,le),u=d(le),M(m.$$.fragment,le),n=d(le),M($.$$.fragment,le),x=d(le),M(l.$$.fragment,le),f=d(le),M(L.$$.fragment,le),c=d(le),M(b.$$.fragment,le),I=d(le),M(E.$$.fragment,le),O=d(le),M(A.$$.fragment,le),D=d(le),M(B.$$.fragment,le),V=d(le),M(K.$$.fragment,le),ie=d(le),M(j.$$.fragment,le),se=d(le),M(_e.$$.fragment,le),be=d(le),M(he.$$.fragment,le),Pe=d(le),M(xe.$$.fragment,le),we=d(le),M(ge.$$.fragment,le),qe=d(le),M(ee.$$.fragment,le),me=d(le),M(te.$$.fragment,le)},m(le,de){r(le,e,de),r(le,s,de),S(t,le,de),r(le,p,de),S(i,le,de),r(le,u,de),S(m,le,de),r(le,n,de),S($,le,de),r(le,x,de),S(l,le,de),r(le,f,de),S(L,le,de),r(le,c,de),S(b,le,de),r(le,I,de),S(E,le,de),r(le,O,de),S(A,le,de),r(le,D,de),S(B,le,de),r(le,V,de),S(K,le,de),r(le,ie,de),S(j,le,de),r(le,se,de),S(_e,le,de),r(le,be,de),S(he,le,de),r(le,Pe,de),S(xe,le,de),r(le,we,de),S(ge,le,de),r(le,qe,de),S(ee,le,de),r(le,me,de),S(te,le,de),ve=!0},p(le,de){const He={};de&1&&(He.$$scope={dirty:de,ctx:le}),t.$set(He);const Ee={};de&1&&(Ee.$$scope={dirty:de,ctx:le}),i.$set(Ee);const Se={};de&1&&(Se.$$scope={dirty:de,ctx:le}),m.$set(Se);const Ae={};de&1&&(Ae.$$scope={dirty:de,ctx:le}),$.$set(Ae);const y={};de&1&&(y.$$scope={dirty:de,ctx:le}),l.$set(y);const pe={};de&1&&(pe.$$scope={dirty:de,ctx:le}),L.$set(pe);const Y={};de&1&&(Y.$$scope={dirty:de,ctx:le}),b.$set(Y);const ce={};de&1&&(ce.$$scope={dirty:de,ctx:le}),E.$set(ce);const Me={};de&1&&(Me.$$scope={dirty:de,ctx:le}),A.$set(Me);const Ie={};de&1&&(Ie.$$scope={dirty:de,ctx:le}),B.$set(Ie);const Te={};de&1&&(Te.$$scope={dirty:de,ctx:le}),K.$set(Te);const De={};de&1&&(De.$$scope={dirty:de,ctx:le}),j.$set(De);const X={};de&1&&(X.$$scope={dirty:de,ctx:le}),_e.$set(X);const fe={};de&1&&(fe.$$scope={dirty:de,ctx:le}),he.$set(fe);const je={};de&1&&(je.$$scope={dirty:de,ctx:le}),xe.$set(je);const ze={};de&1&&(ze.$$scope={dirty:de,ctx:le}),ge.$set(ze);const ke={};de&1&&(ke.$$scope={dirty:de,ctx:le}),ee.$set(ke);const Oe={};de&1&&(Oe.$$scope={dirty:de,ctx:le}),te.$set(Oe)},i(le){ve||(H(t.$$.fragment,le),H(i.$$.fragment,le),H(m.$$.fragment,le),H($.$$.fragment,le),H(l.$$.fragment,le),H(L.$$.fragment,le),H(b.$$.fragment,le),H(E.$$.fragment,le),H(A.$$.fragment,le),H(B.$$.fragment,le),H(K.$$.fragment,le),H(j.$$.fragment,le),H(_e.$$.fragment,le),H(he.$$.fragment,le),H(xe.$$.fragment,le),H(ge.$$.fragment,le),H(ee.$$.fragment,le),H(te.$$.fragment,le),ve=!0)},o(le){P(t.$$.fragment,le),P(i.$$.fragment,le),P(m.$$.fragment,le),P($.$$.fragment,le),P(l.$$.fragment,le),P(L.$$.fragment,le),P(b.$$.fragment,le),P(E.$$.fragment,le),P(A.$$.fragment,le),P(B.$$.fragment,le),P(K.$$.fragment,le),P(j.$$.fragment,le),P(_e.$$.fragment,le),P(he.$$.fragment,le),P(xe.$$.fragment,le),P(ge.$$.fragment,le),P(ee.$$.fragment,le),P(te.$$.fragment,le),ve=!1},d(le){le&&(a(e),a(s),a(p),a(u),a(n),a(x),a(f),a(c),a(I),a(O),a(D),a(V),a(ie),a(se),a(be),a(Pe),a(we),a(qe),a(me)),q(t,le),q(i,le),q(m,le),q($,le),q(l,le),q(L,le),q(b,le),q(E,le),q(A,le),q(B,le),q(K,le),q(j,le),q(_e,le),q(he,le),q(xe,le),q(ge,le),q(ee,le),q(te,le)}}}function yp(_){let e,o;return e=new z({props:{$$slots:{default:[Zp]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const p={};t&1&&(p.$$scope={dirty:t,ctx:s}),e.$set(p)},i(s){o||(H(e.$$.fragment,s),o=!0)},o(s){P(e.$$.fragment,s),o=!1},d(s){q(e,s)}}}class em extends Xe{constructor(e){super(),Ye(this,e,null,yp,We,{})}}function tm(_){let e,o="Rappels",s,t,p="Un mois plus tard...",i,u,m=`On reprend après un mois de pause. L'objectif de ce bloc est de vérifier rapidement ce qui est acquis\r
			avant d'avancer. On ne va pas re-expliquer, juste tester et corriger si besoin.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H2",{"data-svelte-h":!0}),h(e)!=="svelte-dv36h9"&&(e.textContent=o),s=d(n),t=C(n,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1dg8f9n"&&(t.textContent=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-zlrztb"&&(u.textContent=m),this.h()},h(){w(t,"class","text-2xl text-gray-400"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function sm(_){let e,o="Héritage, Composition ou Interface ?",s,t,p='<tbody><tr class="fragment"><td class="p-3">Un <code>Etudiant</code> <b>est une</b> <code>Personne</code></td> <td class="p-3 text-green-400">Héritage</td></tr> <tr class="fragment"><td class="p-3">Un <code>Ordinateur</code> <b>a un</b> <code>Processeur</code></td> <td class="p-3 text-blue-400">Composition</td></tr> <tr class="fragment"><td class="p-3">Un <code>Robot</code> <b>peut</b> <code>Nager</code></td> <td class="p-3 text-purple-400">Interface</td></tr> <tr class="fragment"><td class="p-3">Un <code>Livre</code> <b>a des</b> <code>Chapitres</code></td> <td class="p-3 text-blue-400">Composition</td></tr> <tr class="fragment"><td class="p-3">Un <code>CompteCourant</code> <b>est un</b> <code>CompteBancaire</code></td> <td class="p-3 text-green-400">Héritage</td></tr></tbody>',i,u,m="Faites voter les étudiants à main levée avant de révéler. C'est un bon indicateur de ce qui a été retenu.";return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("table"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-owsg2x"&&(e.textContent=o),s=d(n),t=C(n,"TABLE",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1wazcyz"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1kk7v4q"&&(u.textContent=m),this.h()},h(){w(t,"class","text-xl mt-6"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function lm(_){let e=`
abstract class Forme {
    abstract double surface();
}

Forme f = new Forme();
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function nm(_){let e=`
class Canard extends Animal, Oiseau {
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function im(_){let e,o="Ce code compile-t-il ?",s,t,p,i,u,m,n="Non : on ne peut pas instancier une classe abstraite",$,x,l,f,L,c="Non : héritage multiple interdit en Java",b,I,E=`Ce sont les deux pièges les plus classiques. Insister sur le fait que les interfaces sont\r
			la solution au second cas.`,O;return i=new Z({props:{$$slots:{default:[lm]},$$scope:{ctx:_}}}),l=new Z({props:{$$slots:{default:[nm]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),p=g("div"),T(i.$$.fragment),u=v(),m=g("p"),m.textContent=n,$=v(),x=g("div"),T(l.$$.fragment),f=v(),L=g("p"),L.textContent=c,b=v(),I=g("aside"),I.textContent=E,this.h()},l(A){e=C(A,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-x2ptrw"&&(e.textContent=o),s=d(A),t=C(A,"DIV",{class:!0});var D=Le(t);p=C(D,"DIV",{});var B=Le(p);M(i.$$.fragment,B),u=d(B),m=C(B,"P",{class:!0,"data-svelte-h":!0}),h(m)!=="svelte-1h190km"&&(m.textContent=n),B.forEach(a),$=d(D),x=C(D,"DIV",{});var V=Le(x);M(l.$$.fragment,V),f=d(V),L=C(V,"P",{class:!0,"data-svelte-h":!0}),h(L)!=="svelte-r8lrrf"&&(L.textContent=c),V.forEach(a),D.forEach(a),b=d(A),I=C(A,"ASIDE",{class:!0,"data-svelte-h":!0}),h(I)!=="svelte-1os8pen"&&(I.textContent=E),this.h()},h(){w(m,"class","fragment text-red-400 mt-2"),w(L,"class","fragment text-red-400 mt-2"),w(t,"class","grid grid-cols-2 gap-6"),w(I,"class","notes")},m(A,D){r(A,e,D),r(A,s,D),r(A,t,D),ne(t,p),S(i,p,null),ne(p,u),ne(p,m),ne(t,$),ne(t,x),S(l,x,null),ne(x,f),ne(x,L),r(A,b,D),r(A,I,D),O=!0},p(A,D){const B={};D&1&&(B.$$scope={dirty:D,ctx:A}),i.$set(B);const V={};D&1&&(V.$$scope={dirty:D,ctx:A}),l.$set(V)},i(A){O||(H(i.$$.fragment,A),H(l.$$.fragment,A),O=!0)},o(A){P(i.$$.fragment,A),P(l.$$.fragment,A),O=!1},d(A){A&&(a(e),a(s),a(t),a(b),a(I)),q(i),q(l)}}}function am(_){let e=`
abstract class Animal {
    abstract void crier();
}
class Chien extends Animal {
    void crier() { System.out.println("Wouaf"); }
}
class Chat extends Animal {
    void crier() { System.out.println("Miaou"); }
}

class Maitre {
    private Animal animal;
    Maitre(Animal a) { this.animal = a; }
    void presenter() { animal.crier(); }
}

new Maitre(new Chat()).presenter();
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function rm(_){let e,o="Que produit ce code ?",s,t,p,i,u="Affiche : <code>Miaou</code>",m,n,$=`On a vu ça à la fin de la séance 1 dans le chapitre Composition. C'est un teaser du polymorphisme.\r
			Si les étudiants répondent bien, on peut enchaîner directement.`,x;return t=new Z({props:{$$slots:{default:[am]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-fa08gy"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-scosmt"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1eemjt1"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment text-accent-200 text-3xl mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function um(_){let e,o="Aujourd'hui",s,t,p="<li>Polymorphisme</li> <li>Casting et conversions de types</li> <li>Records</li> <li>Exceptions</li> <li>Principes SOLID</li> <li>Refactoring en services</li> <li>Membres statiques</li>",i,u,m=`Programme chargé. On va construire sur les acquis de la séance 1.\r
			Le fil rouge : écrire du code qui est non seulement correct, mais bien structuré.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("ol"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-o7wgo3"&&(e.textContent=o),s=d(n),t=C(n,"OL",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1kjng7v"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-cqmn7l"&&(u.textContent=m),this.h()},h(){w(t,"class","text-2xl"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function om(_){let e,o,s,t,p,i,u,m,n,$;return e=new z({props:{data_background_gradient:"linear-gradient(rgb(40 59 149), rgb(129 23 195 / 41%))",$$slots:{default:[tm]},$$scope:{ctx:_}}}),s=new z({props:{$$slots:{default:[sm]},$$scope:{ctx:_}}}),p=new z({props:{$$slots:{default:[im]},$$scope:{ctx:_}}}),u=new z({props:{$$slots:{default:[rm]},$$scope:{ctx:_}}}),n=new z({props:{$$slots:{default:[um]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment),o=v(),T(s.$$.fragment),t=v(),T(p.$$.fragment),i=v(),T(u.$$.fragment),m=v(),T(n.$$.fragment)},l(x){M(e.$$.fragment,x),o=d(x),M(s.$$.fragment,x),t=d(x),M(p.$$.fragment,x),i=d(x),M(u.$$.fragment,x),m=d(x),M(n.$$.fragment,x)},m(x,l){S(e,x,l),r(x,o,l),S(s,x,l),r(x,t,l),S(p,x,l),r(x,i,l),S(u,x,l),r(x,m,l),S(n,x,l),$=!0},p(x,l){const f={};l&1&&(f.$$scope={dirty:l,ctx:x}),e.$set(f);const L={};l&1&&(L.$$scope={dirty:l,ctx:x}),s.$set(L);const c={};l&1&&(c.$$scope={dirty:l,ctx:x}),p.$set(c);const b={};l&1&&(b.$$scope={dirty:l,ctx:x}),u.$set(b);const I={};l&1&&(I.$$scope={dirty:l,ctx:x}),n.$set(I)},i(x){$||(H(e.$$.fragment,x),H(s.$$.fragment,x),H(p.$$.fragment,x),H(u.$$.fragment,x),H(n.$$.fragment,x),$=!0)},o(x){P(e.$$.fragment,x),P(s.$$.fragment,x),P(p.$$.fragment,x),P(u.$$.fragment,x),P(n.$$.fragment,x),$=!1},d(x){x&&(a(o),a(t),a(i),a(m)),q(e,x),q(s,x),q(p,x),q(u,x),q(n,x)}}}function $m(_){let e,o;return e=new z({props:{$$slots:{default:[om]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const p={};t&1&&(p.$$scope={dirty:t,ctx:s}),e.$set(p)},i(s){o||(H(e.$$.fragment,s),o=!0)},o(s){P(e.$$.fragment,s),o=!1},d(s){q(e,s)}}}class fm extends Xe{constructor(e){super(),Ye(this,e,null,$m,We,{})}}function cm(_){let e,o="Rappels de la Séance 2",s,t,p=`Avant d'attaquer les collections et les streams, on revient sur trois notions clés de la\r
			séance précédente. L'idée c'est pas de piéger, c'est de s'assurer qu'on parle tous le même\r
			langage. Les records, le polymorphisme et les exceptions sont les briques qu'on va réutiliser\r
			toute la séance. Si quelque chose vous semble encore flou, c'est le moment de poser la question.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("aside"),t.textContent=p,this.h()},l(i){e=C(i,"H2",{"data-svelte-h":!0}),h(e)!=="svelte-jx4byy"&&(e.textContent=o),s=d(i),t=C(i,"ASIDE",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1n2k4e6"&&(t.textContent=p),this.h()},h(){w(t,"class","notes")},m(i,u){r(i,e,u),r(i,s,u),r(i,t,u)},p:k,d(i){i&&(a(e),a(s),a(t))}}}function pm(_){let e=`
record Produit(String reference, double prix) {}

Produit p1 = new Produit("CLAVIER", 49.9);
Produit p2 = new Produit("CLAVIER", 49.9);

System.out.println(p1 == p2);
System.out.println(p1.equals(p2));
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function mm(_){let e,o="Que vaut ce code ?",s,t,p,i,u='<p class="fragment"><code>==</code> compare les références → <span class="text-red-400">false</span></p> <p class="fragment"><code>equals()</code> compare les valeurs d&#39;un record → <span class="text-green-400">true</span></p>',m,n,$=`Ce rappel est crucial pour la suite. Imaginez un registre d'inscrits à un événement :\r
			si deux personnes donnent le même nom et le même email, est-ce la même inscription ?\r
			Avec ==, Java dit "non, c'est deux fiches physiquement différentes en mémoire".\r
			Avec equals() sur un record, Java dit "oui, le contenu est identique".\r
			Les Set et les Map qu'on va voir juste après reposent entièrement sur equals() et hashCode().\r
			Les records les implémentent automatiquement. Les classes classiques, non.\r
			Retenez ça, c'est un piège classique en entretien technique et en entreprise.`,x;return t=new Z({props:{$$slots:{default:[pm]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("div"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-jcd8gv"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"DIV",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-1vs5ekj"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1fe82cl"&&(n.textContent=$),this.h()},h(){w(i,"class","mt-6 text-2xl"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function dm(_){let e=`
abstract class Animal{
	abstract void faireDuBruit();
}
class Chien extends Animal{
	public void faireDuBruit(){}
}
class Chat extends Animal{
	public void faireDuBruit(){}
}	

Animal a = new Chien();
a.faireDuBruit();
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function vm(_){let e=`
List<Animal> animaux = List.of(
    new Chien(), new Chat()
);
for (Animal a : animaux) {
    a.faireDuBruit();
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function xm(_){let e,o="Ce code compile-t-il ?",s,t,p,i,u,m,n="✅ Polymorphisme, liaison dynamique",$,x,l,f,L,c="✅ Collection polymorphe",b,I,E=`Voilà exactement la brique qu'on va exploiter toute la séance. Les collections sans\r
			polymorphisme, c'est comme un classeur où tous les dossiers auraient la même couverture\r
			mais des contenus incompatibles. Le polymorphisme, c'est ce qui fait qu'on peut manipuler\r
			une liste d'animaux sans savoir à l'avance si ce sont des chiens ou des chats.\r
			C'est la puissance du type commun.`,O;return i=new Z({props:{$$slots:{default:[dm]},$$scope:{ctx:_}}}),l=new Z({props:{$$slots:{default:[vm]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),p=g("div"),T(i.$$.fragment),u=v(),m=g("p"),m.textContent=n,$=v(),x=g("div"),T(l.$$.fragment),f=v(),L=g("p"),L.textContent=c,b=v(),I=g("aside"),I.textContent=E,this.h()},l(A){e=C(A,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-x2ptrw"&&(e.textContent=o),s=d(A),t=C(A,"DIV",{class:!0});var D=Le(t);p=C(D,"DIV",{});var B=Le(p);M(i.$$.fragment,B),u=d(B),m=C(B,"P",{class:!0,"data-svelte-h":!0}),h(m)!=="svelte-98s23q"&&(m.textContent=n),B.forEach(a),$=d(D),x=C(D,"DIV",{});var V=Le(x);M(l.$$.fragment,V),f=d(V),L=C(V,"P",{class:!0,"data-svelte-h":!0}),h(L)!=="svelte-18unjjj"&&(L.textContent=c),V.forEach(a),D.forEach(a),b=d(A),I=C(A,"ASIDE",{class:!0,"data-svelte-h":!0}),h(I)!=="svelte-p6c14q"&&(I.textContent=E),this.h()},h(){w(m,"class","fragment text-green-400 mt-2"),w(L,"class","fragment text-green-400 mt-2"),w(t,"class","grid grid-cols-2 gap-6"),w(I,"class","notes")},m(A,D){r(A,e,D),r(A,s,D),r(A,t,D),ne(t,p),S(i,p,null),ne(p,u),ne(p,m),ne(t,$),ne(t,x),S(l,x,null),ne(x,f),ne(x,L),r(A,b,D),r(A,I,D),O=!0},p(A,D){const B={};D&1&&(B.$$scope={dirty:D,ctx:A}),i.$set(B);const V={};D&1&&(V.$$scope={dirty:D,ctx:A}),l.$set(V)},i(A){O||(H(i.$$.fragment,A),H(l.$$.fragment,A),O=!0)},o(A){P(i.$$.fragment,A),P(l.$$.fragment,A),O=!1},d(A){A&&(a(e),a(s),a(t),a(b),a(I)),q(i),q(l)}}}function _m(_){let e=`
public void ajouterProduit(Produit produit) {
    catalogue.add(produit);
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Cm(_){let e=`
public void ajouterProduit(Produit produit) {
    if (produit == null) {
        throw new IllegalArgumentException("Produit obligatoire");
    }
    catalogue.add(produit);
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function gm(_){let e,o="Quel problème ici ?",s,t,p,i,u="Si <code>produit</code> est <code>null</code>, on pollue le catalogue en silence.",m,n,$,x,l,f='On préfère <span class="text-important">échouer tôt</span> plutôt que propager des données invalides.',L,c,b=`C'est le principe "fail fast". C'est comme un contrôle qualité à l'entrée d'une usine :\r
			mieux vaut refuser une pièce défectueuse à la réception que de la découvrir sur la chaîne\r
			de montage quand le produit est à moitié assemblé. Ce réflexe sera encore plus important\r
			avec les Streams et Optional qu'on verra en fin de séance.`,I;return t=new Z({props:{$$slots:{default:[_m]},$$scope:{ctx:_}}}),$=new Z({props:{$$slots:{default:[Cm]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("div"),T($.$$.fragment),x=v(),l=g("p"),l.innerHTML=f,L=v(),c=g("aside"),c.textContent=b,this.h()},l(E){e=C(E,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1ad8m1s"&&(e.textContent=o),s=d(E),M(t.$$.fragment,E),p=d(E),i=C(E,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-igc0br"&&(i.innerHTML=u),m=d(E),n=C(E,"DIV",{class:!0});var O=Le(n);M($.$$.fragment,O),x=d(O),l=C(O,"P",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-pdpb2g"&&(l.innerHTML=f),O.forEach(a),L=d(E),c=C(E,"ASIDE",{class:!0,"data-svelte-h":!0}),h(c)!=="svelte-zhk65w"&&(c.textContent=b),this.h()},h(){w(i,"class","fragment mt-4 text-red-400"),w(l,"class","mt-2"),w(n,"class","fragment mt-4"),w(c,"class","notes")},m(E,O){r(E,e,O),r(E,s,O),S(t,E,O),r(E,p,O),r(E,i,O),r(E,m,O),r(E,n,O),S($,n,null),ne(n,x),ne(n,l),r(E,L,O),r(E,c,O),I=!0},p(E,O){const A={};O&1&&(A.$$scope={dirty:O,ctx:E}),t.$set(A);const D={};O&1&&(D.$$scope={dirty:O,ctx:E}),$.$set(D)},i(E){I||(H(t.$$.fragment,E),H($.$$.fragment,E),I=!0)},o(E){P(t.$$.fragment,E),P($.$$.fragment,E),I=!1},d(E){E&&(a(e),a(s),a(p),a(i),a(m),a(n),a(L),a(c)),q(t,E),q($)}}}function hm(_){let e,o="Programme de la séance",s,t,p='<li class="fragment"><span class="text-important">Généricité</span> — sécuriser les types sans perdre la réutilisation</li> <li class="fragment"><span class="text-important">Collections</span> — choisir la bonne structure de données</li> <li class="fragment"><span class="text-important">Lambda et Streams</span> — exprimer les traitements de façon déclarative</li>',i,u,m=`L'ordre n'est pas un hasard : sans généricité, les collections sont dangereuses.\r
			Sans collections, les streams sont abstraits.`,n,$,x=`On construit par couches, comme un immeuble. La généricité c'est les fondations : le système\r
			de types. Les collections c'est la structure : les murs, les pièces. Les lambdas et streams\r
			c'est l'électricité et la plomberie : ça fait circuler les données intelligemment dans la\r
			structure. Chaque étage s'appuie sur le précédent. À la fin de la séance, vous saurez lire\r
			une signature générique, choisir entre List/Set/Map, et écrire un pipeline stream simple.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("ol"),t.innerHTML=p,i=v(),u=g("p"),u.textContent=m,n=v(),$=g("aside"),$.textContent=x,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-ce2yaf"&&(e.textContent=o),s=d(l),t=C(l,"OL",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1x1wi3t"&&(t.innerHTML=p),i=d(l),u=C(l,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-frn28u"&&(u.textContent=m),n=d(l),$=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-6j7icj"&&($.textContent=x),this.h()},h(){w(t,"class","text-2xl mt-6"),w(u,"class","fragment mt-8 text-xl text-gray-400"),w($,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,u,f),r(l,n,f),r(l,$,f)},p:k,d(l){l&&(a(e),a(s),a(t),a(i),a(u),a(n),a($))}}}function bm(_){let e,o,s,t,p,i,u,m,n,$;return e=new z({props:{data_background_gradient:"linear-gradient(rgb(40 59 149), rgb(129 23 195 / 41%))",$$slots:{default:[cm]},$$scope:{ctx:_}}}),s=new z({props:{$$slots:{default:[mm]},$$scope:{ctx:_}}}),p=new z({props:{$$slots:{default:[xm]},$$scope:{ctx:_}}}),u=new z({props:{$$slots:{default:[gm]},$$scope:{ctx:_}}}),n=new z({props:{$$slots:{default:[hm]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment),o=v(),T(s.$$.fragment),t=v(),T(p.$$.fragment),i=v(),T(u.$$.fragment),m=v(),T(n.$$.fragment)},l(x){M(e.$$.fragment,x),o=d(x),M(s.$$.fragment,x),t=d(x),M(p.$$.fragment,x),i=d(x),M(u.$$.fragment,x),m=d(x),M(n.$$.fragment,x)},m(x,l){S(e,x,l),r(x,o,l),S(s,x,l),r(x,t,l),S(p,x,l),r(x,i,l),S(u,x,l),r(x,m,l),S(n,x,l),$=!0},p(x,l){const f={};l&1&&(f.$$scope={dirty:l,ctx:x}),e.$set(f);const L={};l&1&&(L.$$scope={dirty:l,ctx:x}),s.$set(L);const c={};l&1&&(c.$$scope={dirty:l,ctx:x}),p.$set(c);const b={};l&1&&(b.$$scope={dirty:l,ctx:x}),u.$set(b);const I={};l&1&&(I.$$scope={dirty:l,ctx:x}),n.$set(I)},i(x){$||(H(e.$$.fragment,x),H(s.$$.fragment,x),H(p.$$.fragment,x),H(u.$$.fragment,x),H(n.$$.fragment,x),$=!0)},o(x){P(e.$$.fragment,x),P(s.$$.fragment,x),P(p.$$.fragment,x),P(u.$$.fragment,x),P(n.$$.fragment,x),$=!1},d(x){x&&(a(o),a(t),a(i),a(m)),q(e,x),q(s,x),q(p,x),q(u,x),q(n,x)}}}function Lm(_){let e,o;return e=new z({props:{$$slots:{default:[bm]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const p={};t&1&&(p.$$scope={dirty:t,ctx:s}),e.$set(p)},i(s){o||(H(e.$$.fragment,s),o=!0)},o(s){P(e.$$.fragment,s),o=!1},d(s){q(e,s)}}}class wm extends Xe{constructor(e){super(),Ye(this,e,null,Lm,We,{})}}function qm(_){let e=`
List<int> nombres = new ArrayList<>();  // Erreur de compilation !
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Pm(_){let e,o="Le problème",s,t,p="<code>int</code>, <code>double</code>, <code>boolean</code> ne sont pas des objets.",i,u,m,n,$='Les collections et les génériques ne fonctionnent qu&#39;avec des <span class="text-important">objets</span>.',x,l,f='Java fournit des <span class="text-important">classes enveloppes</span> (wrapper classes) pour chaque type primitif.',L,c,b=`Les types primitifs existent pour des raisons de performance : un int prend 4 octets,\r
			un Integer en prend 16. Mais les frameworks modernes travaillent avec des objets.\r
			D'où le besoin de "wrapper" les primitifs.`,I;return u=new Z({props:{$$slots:{default:[qm]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment),m=v(),n=g("p"),n.innerHTML=$,x=v(),l=g("p"),l.innerHTML=f,L=v(),c=g("aside"),c.textContent=b,this.h()},l(E){e=C(E,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-133t5n2"&&(e.textContent=o),s=d(E),t=C(E,"P",{"data-svelte-h":!0}),h(t)!=="svelte-ygi40n"&&(t.innerHTML=p),i=d(E),M(u.$$.fragment,E),m=d(E),n=C(E,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-j2rpzp"&&(n.innerHTML=$),x=d(E),l=C(E,"P",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-dm920j"&&(l.innerHTML=f),L=d(E),c=C(E,"ASIDE",{class:!0,"data-svelte-h":!0}),h(c)!=="svelte-16xy75f"&&(c.textContent=b),this.h()},h(){w(n,"class","fragment mt-4"),w(l,"class","fragment"),w(c,"class","notes")},m(E,O){r(E,e,O),r(E,s,O),r(E,t,O),r(E,i,O),S(u,E,O),r(E,m,O),r(E,n,O),r(E,x,O),r(E,l,O),r(E,L,O),r(E,c,O),I=!0},p(E,O){const A={};O&1&&(A.$$scope={dirty:O,ctx:E}),u.$set(A)},i(E){I||(H(u.$$.fragment,E),I=!0)},o(E){P(u.$$.fragment,E),I=!1},d(E){E&&(a(e),a(s),a(t),a(i),a(m),a(n),a(x),a(l),a(L),a(c)),q(u,E)}}}function Hm(_){let e,o="Correspondances",s,t,p='<thead><tr><th class="p-3">Primitif</th> <th class="p-3">Wrapper</th></tr></thead> <tbody><tr><td class="p-3"><code>int</code></td><td class="p-3"><code>Integer</code></td></tr> <tr><td class="p-3"><code>double</code></td><td class="p-3"><code>Double</code></td></tr> <tr><td class="p-3"><code>boolean</code></td><td class="p-3"><code>Boolean</code></td></tr> <tr><td class="p-3"><code>char</code></td><td class="p-3"><code>Character</code></td></tr> <tr><td class="p-3"><code>long</code></td><td class="p-3"><code>Long</code></td></tr> <tr><td class="p-3"><code>float</code></td><td class="p-3"><code>Float</code></td></tr></tbody>',i,u,m=`Les noms sont intuitifs sauf Integer et Character. Les Wrappers sont dans le package java.lang,\r
			pas besoin d'import.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("table"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-12squc3"&&(e.textContent=o),s=d(n),t=C(n,"TABLE",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1xza75b"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-i7wbx0"&&(u.textContent=m),this.h()},h(){w(t,"class","text-xl mt-4"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function Sm(_){let e=`
Integer a = 42;               // int → Integer (autoboxing)
Double d = 3.14;              // double → Double (autoboxing)

List<Integer> nombres = new ArrayList<>();
nombres.add(10);              // int 10 → Integer.valueOf(10)
nombres.add(20);
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Mm(_){let e,o="Autoboxing",s,t,p='Conversion <span class="text-important">automatique</span> d&#39;un primitif vers son wrapper.',i,u,m,n,$="Java insère l&#39;appel à <code>Integer.valueOf()</code> pour vous.",x,l,f=`Avant Java 5, il fallait écrire Integer.valueOf(42) explicitement partout.\r
			L'autoboxing a énormément simplifié le code. Mais il faut savoir que ça reste\r
			une conversion avec un coût.`,L;return u=new Z({props:{$$slots:{default:[Sm]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment),m=v(),n=g("p"),n.innerHTML=$,x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1tnm3dk"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-s0556i"&&(t.innerHTML=p),i=d(c),M(u.$$.fragment,c),m=d(c),n=C(c,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-p8ncd7"&&(n.innerHTML=$),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-1ksd67"&&(l.textContent=f),this.h()},h(){w(n,"class","fragment mt-4"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),S(u,c,b),r(c,m,b),r(c,n,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),u.$set(I)},i(c){L||(H(u.$$.fragment,c),L=!0)},o(c){P(u.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(n),a(x),a(l)),q(u,c)}}}function Tm(_){let e=`
Integer wrapped = 42;
int value = wrapped;           // Integer → int (unboxing)

List<Integer> nombres = List.of(10, 20, 30);
int premier = nombres.get(0);  // Integer → int (unboxing)
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Em(_){let e,o="Unboxing",s,t,p='Conversion <span class="text-important">automatique</span> d&#39;un wrapper vers son primitif.',i,u,m,n,$="Java insère l&#39;appel à <code>intValue()</code> pour vous.",x,l,f=`L'unboxing est transparent mais pas gratuit : c'est un appel de méthode à chaque conversion.\r
			Dans une boucle de millions d'itérations, ça peut peser.`,L;return u=new Z({props:{$$slots:{default:[Tm]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment),m=v(),n=g("p"),n.innerHTML=$,x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-43xif0"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1dwwjxa"&&(t.innerHTML=p),i=d(c),M(u.$$.fragment,c),m=d(c),n=C(c,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-124xcnt"&&(n.innerHTML=$),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-1nylxne"&&(l.textContent=f),this.h()},h(){w(n,"class","fragment mt-4"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),S(u,c,b),r(c,m,b),r(c,n,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),u.$set(I)},i(c){L||(H(u.$$.fragment,c),L=!0)},o(c){P(u.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(n),a(x),a(l)),q(u,c)}}}function Am(_){let e=`
Integer a = 127;
Integer b = 127;
System.out.println(a == b);    // true

Integer c = 128;
Integer d = 128;
System.out.println(c == d);    // false !
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Im(_){let e,o="Le piège du cache Integer",s,t,p,i,u=`Java met en cache les <code>Integer</code> de <b>-128 à 127</b>.
			Au-delà, ce sont des objets différents.`,m,n,$="Toujours utiliser <code>.equals()</code> pour comparer des wrappers.",x,l,f=`C'est un piège classique en entretien d'embauche. == compare les références, pas les valeurs.\r
			Pour les Integer entre -128 et 127, valueOf() retourne le même objet (cache).\r
			Au-delà, c'est un new à chaque fois. Conclusion : toujours .equals() pour les objets.`,L;return t=new Z({props:{$$slots:{default:[Am]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("p"),n.innerHTML=$,x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-vx8qj5"&&(e.textContent=o),s=d(c),M(t.$$.fragment,c),p=d(c),i=C(c,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-5yn9wi"&&(i.innerHTML=u),m=d(c),n=C(c,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1hw5k0h"&&(n.innerHTML=$),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-mxtxe3"&&(l.textContent=f),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","fragment text-accent-200"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),S(t,c,b),r(c,p,b),r(c,i,b),r(c,m,b),r(c,n,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),t.$set(I)},i(c){L||(H(t.$$.fragment,c),L=!0)},o(c){P(t.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(p),a(i),a(m),a(n),a(x),a(l)),q(t,c)}}}function Dm(_){let e=`
Integer valeur = null;
int n = valeur;  // NullPointerException à l'unboxing !
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function jm(_){let e=`
Integer valeur = obtenirValeur();  // peut retourner null

if (valeur != null) {
    int n = valeur;  // unboxing sûr
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function km(_){let e,o="Le piège du null",s,t,p,i,u,m="Protection :",n,$,x,l,f=`Un Integer peut être null, un int ne peut pas. L'unboxing d'un null lance un NPE.\r
			C'est un piège fréquent quand on récupère des données d'une base ou d'une API.`,L;return t=new Z({props:{$$slots:{default:[Dm]},$$scope:{ctx:_}}}),$=new Z({props:{$$slots:{default:[jm]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("div"),u=g("p"),u.textContent=m,n=v(),T($.$$.fragment),x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-ao39te"&&(e.textContent=o),s=d(c),M(t.$$.fragment,c),p=d(c),i=C(c,"DIV",{class:!0});var b=Le(i);u=C(b,"P",{"data-svelte-h":!0}),h(u)!=="svelte-1a74dtb"&&(u.textContent=m),n=d(b),M($.$$.fragment,b),b.forEach(a),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-1navkz4"&&(l.textContent=f),this.h()},h(){w(i,"class","fragment mt-6"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),S(t,c,b),r(c,p,b),r(c,i,b),ne(i,u),ne(i,n),S($,i,null),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),t.$set(I);const E={};b&1&&(E.$$scope={dirty:b,ctx:c}),$.$set(E)},i(c){L||(H(t.$$.fragment,c),H($.$$.fragment,c),L=!0)},o(c){P(t.$$.fragment,c),P($.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(p),a(i),a(x),a(l)),q(t,c),q($)}}}function Om(_){let e=`
// Lent : autoboxing à chaque itération
Long somme = 0L;
for (int i = 0; i < 1_000_000; i++) {
    somme += i;  // unboxing + addition + autoboxing
}

// Rapide : type primitif
long somme = 0L;
for (int i = 0; i < 1_000_000; i++) {
    somme += i;  // addition simple
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function zm(_){let e,o="Performance",s,t,p,i,u="Utilisez les <b>primitifs</b> dans les boucles intensives, les <b>wrappers</b> dans les collections et API.",m,n,$=`La différence de performance peut être d'un facteur 5 à 10 dans les boucles.\r
			Règle : primitifs pour le calcul, wrappers quand on est obligé (collections, génériques).`,x;return t=new Z({props:{$$slots:{default:[Om]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-19y5698"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-17o3k6r"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-bxt9ex"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function Vm(_){let e,o="Récapitulatif",s,t,p='<tr><td class="p-3"><span class="text-important">Autoboxing</span></td> <td class="p-3"><code>int</code> → <code>Integer</code> (automatique)</td></tr> <tr><td class="p-3"><span class="text-important">Unboxing</span></td> <td class="p-3"><code>Integer</code> → <code>int</code> (automatique)</td></tr> <tr><td class="p-3"><span class="text-important">==</span></td> <td class="p-3">Compare les références (piège avec les wrappers !)</td></tr> <tr><td class="p-3"><span class="text-important">.equals()</span></td> <td class="p-3">Compare les valeurs (toujours l&#39;utiliser)</td></tr>',i,u,m="L'autoboxing est pratique mais pas magique. Connaître ses limites évite des bugs subtils.";return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("table"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-ri7iuh"&&(e.textContent=o),s=d(n),t=C(n,"TABLE",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1q1z2gl"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-104fxuw"&&(u.textContent=m),this.h()},h(){w(t,"class","text-xl"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function Rm(_){let e,o="Types primitifs et objets",s,t,p,i,u,m,n,$,x,l,f,L,c,b,I,E,O;return t=new z({props:{$$slots:{default:[Pm]},$$scope:{ctx:_}}}),i=new z({props:{$$slots:{default:[Hm]},$$scope:{ctx:_}}}),m=new z({props:{$$slots:{default:[Mm]},$$scope:{ctx:_}}}),$=new z({props:{$$slots:{default:[Em]},$$scope:{ctx:_}}}),l=new z({props:{$$slots:{default:[Im]},$$scope:{ctx:_}}}),L=new z({props:{$$slots:{default:[km]},$$scope:{ctx:_}}}),b=new z({props:{$$slots:{default:[zm]},$$scope:{ctx:_}}}),E=new z({props:{$$slots:{default:[Vm]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),T(i.$$.fragment),u=v(),T(m.$$.fragment),n=v(),T($.$$.fragment),x=v(),T(l.$$.fragment),f=v(),T(L.$$.fragment),c=v(),T(b.$$.fragment),I=v(),T(E.$$.fragment)},l(A){e=C(A,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-a5oucq"&&(e.textContent=o),s=d(A),M(t.$$.fragment,A),p=d(A),M(i.$$.fragment,A),u=d(A),M(m.$$.fragment,A),n=d(A),M($.$$.fragment,A),x=d(A),M(l.$$.fragment,A),f=d(A),M(L.$$.fragment,A),c=d(A),M(b.$$.fragment,A),I=d(A),M(E.$$.fragment,A)},m(A,D){r(A,e,D),r(A,s,D),S(t,A,D),r(A,p,D),S(i,A,D),r(A,u,D),S(m,A,D),r(A,n,D),S($,A,D),r(A,x,D),S(l,A,D),r(A,f,D),S(L,A,D),r(A,c,D),S(b,A,D),r(A,I,D),S(E,A,D),O=!0},p(A,D){const B={};D&1&&(B.$$scope={dirty:D,ctx:A}),t.$set(B);const V={};D&1&&(V.$$scope={dirty:D,ctx:A}),i.$set(V);const K={};D&1&&(K.$$scope={dirty:D,ctx:A}),m.$set(K);const ie={};D&1&&(ie.$$scope={dirty:D,ctx:A}),$.$set(ie);const j={};D&1&&(j.$$scope={dirty:D,ctx:A}),l.$set(j);const se={};D&1&&(se.$$scope={dirty:D,ctx:A}),L.$set(se);const _e={};D&1&&(_e.$$scope={dirty:D,ctx:A}),b.$set(_e);const be={};D&1&&(be.$$scope={dirty:D,ctx:A}),E.$set(be)},i(A){O||(H(t.$$.fragment,A),H(i.$$.fragment,A),H(m.$$.fragment,A),H($.$$.fragment,A),H(l.$$.fragment,A),H(L.$$.fragment,A),H(b.$$.fragment,A),H(E.$$.fragment,A),O=!0)},o(A){P(t.$$.fragment,A),P(i.$$.fragment,A),P(m.$$.fragment,A),P($.$$.fragment,A),P(l.$$.fragment,A),P(L.$$.fragment,A),P(b.$$.fragment,A),P(E.$$.fragment,A),O=!1},d(A){A&&(a(e),a(s),a(p),a(u),a(n),a(x),a(f),a(c),a(I)),q(t,A),q(i,A),q(m,A),q($,A),q(l,A),q(L,A),q(b,A),q(E,A)}}}function Um(_){let e,o;return e=new z({props:{$$slots:{default:[Rm]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const p={};t&1&&(p.$$scope={dirty:t,ctx:s}),e.$set(p)},i(s){o||(H(e.$$.fragment,s),o=!0)},o(s){P(e.$$.fragment,s),o=!1},d(s){q(e,s)}}}class Jm extends Xe{constructor(e){super(),Ye(this,e,null,Um,We,{})}}function Bm(_){let e=`
public class Point {
    private final int x;
    private final int y;

    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public int getX() { return x; }
    public int getY() { return y; }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Point p)) return false;
        return x == p.x && y == p.y;
    }

    @Override
    public int hashCode() { return Objects.hash(x, y); }

    @Override
    public String toString() { return "Point[x=" + x + ", y=" + y + "]"; }
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Nm(_){let e,o="Le problème de la verbosité",s,t,p="Pour stocker 2 données, combien de lignes faut-il ?",i,u,m,n,$="25 lignes pour 2 attributs...",x,l,f=`On a vu la verbosité de Java en séance 1 avec l'encapsulation. C'est un problème réel :\r
			80% du code est du boilerplate. Les IDE le génèrent, mais il faut le maintenir.\r
			Java 14 introduit une solution élégante.`,L;return u=new Z({props:{$$slots:{default:[Bm]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),T(u.$$.fragment),m=v(),n=g("p"),n.textContent=$,x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-i8vwdr"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-14yppc4"&&(t.textContent=p),i=d(c),M(u.$$.fragment,c),m=d(c),n=C(c,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-i9i37g"&&(n.textContent=$),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-npcgop"&&(l.textContent=f),this.h()},h(){w(n,"class","fragment text-red-400 mt-2"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),S(u,c,b),r(c,m,b),r(c,n,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),u.$set(I)},i(c){L||(H(u.$$.fragment,c),L=!0)},o(c){P(u.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(n),a(x),a(l)),q(u,c)}}}function Fm(_){let e=`
public record Point(int x, int y) {}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Gm(_){let e,o="La solution : record",s,t,p,i,u="Une seule ligne.",m,n,$='<p>Le compilateur génère automatiquement :</p> <ul class="text-xl"><li>Le constructeur <code>Point(int x, int y)</code></li> <li>Les accesseurs <code>x()</code> et <code>y()</code></li> <li><code>equals()</code>, <code>hashCode()</code>, <code>toString()</code></li></ul>',x,l,f=`Introduit en Java 14 (preview), stable en Java 16. Attention : les accesseurs s'appellent\r
			x() et y(), pas getX() et getY(). C'est une convention différente des JavaBeans.`,L;return t=new Z({props:{$$slots:{default:[Fm]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.textContent=u,m=v(),n=g("div"),n.innerHTML=$,x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-xprrf5"&&(e.textContent=o),s=d(c),M(t.$$.fragment,c),p=d(c),i=C(c,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-ojg6en"&&(i.textContent=u),m=d(c),n=C(c,"DIV",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-3xhv8g"&&(n.innerHTML=$),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-1dgobkw"&&(l.textContent=f),this.h()},h(){w(i,"class","fragment mt-6 text-3xl"),w(n,"class","fragment mt-6"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),S(t,c,b),r(c,p,b),r(c,i,b),r(c,m,b),r(c,n,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),t.$set(I)},i(c){L||(H(t.$$.fragment,c),L=!0)},o(c){P(t.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(p),a(i),a(m),a(n),a(x),a(l)),q(t,c)}}}function Qm(_){let e=`
record Point(int x, int y) {}

Point p = new Point(3, 4);

System.out.println(p.x());        // 3
System.out.println(p.y());        // 4
System.out.println(p);            // Point[x=3, y=4]

Point p2 = new Point(3, 4);
System.out.println(p.equals(p2)); // true
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Km(_){let e,o="Utilisation",s,t,p,i,u=`Notez que equals compare les valeurs automatiquement. C'est exactement ce qu'on veut\r
			pour des objets "données". Plus besoin de générer manuellement.`,m;return t=new Z({props:{$$slots:{default:[Qm]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("aside"),i.textContent=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-oc5s5"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-sfmq45"&&(i.textContent=u),this.h()},h(){w(i,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function Wm(_){let e=`
record Point(int x, int y) {}

Point p = new Point(3, 4);
// p.x = 10;  // Erreur de compilation : pas de setter !

// Pour "modifier", on crée un nouvel objet
Point p2 = new Point(10, p.y());
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Xm(_){let e,o="Records et immutabilité",s,t,p='Les composants d&#39;un record sont <span class="text-important">final</span> par définition.',i,u,m,n,$="Un record est <b>immuable</b> : une fois créé, il ne change plus.",x,l,f=`L'immutabilité est une bonne pratique : pas d'effets de bord, pas de bugs liés à des\r
			modifications inattendues. C'est aussi thread-safe par construction.`,L;return u=new Z({props:{$$slots:{default:[Wm]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment),m=v(),n=g("p"),n.innerHTML=$,x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1kmsc4r"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-12jhovc"&&(t.innerHTML=p),i=d(c),M(u.$$.fragment,c),m=d(c),n=C(c,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-twq57f"&&(n.innerHTML=$),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-1kc0nz5"&&(l.textContent=f),this.h()},h(){w(n,"class","fragment mt-4"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),S(u,c,b),r(c,m,b),r(c,n,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),u.$set(I)},i(c){L||(H(u.$$.fragment,c),L=!0)},o(c){P(u.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(n),a(x),a(l)),q(u,c)}}}function Ym(_){let e=`
record Age(int valeur) {
    Age {  // "compact constructor"
        if (valeur < 0 || valeur > 150) {
            throw new IllegalArgumentException(
                "Age invalide : " + valeur);
        }
    }
}

new Age(25);   // OK
new Age(-5);   // IllegalArgumentException !
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Zm(_){let e,o="Personnaliser un record",s,t,p="On peut ajouter de la validation dans le constructeur :",i,u,m,n,$="On peut aussi ajouter des méthodes, mais pas d'attributs d'instance supplémentaires.",x,l,f=`Le "compact constructor" n'a pas besoin de répéter les affectations this.valeur = valeur.\r
			Java le fait automatiquement après le bloc. On ne peut que valider ou transformer.`,L;return u=new Z({props:{$$slots:{default:[Ym]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),T(u.$$.fragment),m=v(),n=g("p"),n.textContent=$,x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-d9lxf7"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-4iqf9c"&&(t.textContent=p),i=d(c),M(u.$$.fragment,c),m=d(c),n=C(c,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-16l9l5j"&&(n.textContent=$),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-np8akg"&&(l.textContent=f),this.h()},h(){w(n,"class","fragment mt-4"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),S(u,c,b),r(c,m,b),r(c,n,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),u.$set(I)},i(c){L||(H(u.$$.fragment,c),L=!0)},o(c){P(u.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(n),a(x),a(l)),q(u,c)}}}function ym(_){let e=`
interface Mesurable {
    double mesurer();
}

record Cercle(double rayon) implements Mesurable {
    public double mesurer() {
        return Math.PI * rayon * rayon;
    }
}

record Rectangle(double l, double h) implements Mesurable {
    public double mesurer() {
        return l * h;
    }
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function ed(_){let e,o="Records et interfaces",s,t,p,i,u='Un record peut implémenter des interfaces, mais <span class="text-important">ne peut pas hériter</span> d&#39;une classe.',m,n,$=`Les records étendent implicitement java.lang.Record. Comme Java n'a pas d'héritage multiple,\r
			ils ne peuvent pas extends autre chose. Mais implements fonctionne normalement.\r
			Utile pour les DTOs dans les API REST.`,x;return t=new Z({props:{$$slots:{default:[ym]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-moipzl"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-x7joek"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-q3aokm"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-2"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function td(_){let e,o="Quand utiliser un record ?",s,t,p='<div class="p-4 bg-accent-950 rounded-lg"><h4 class="text-green-400">Record</h4> <ul class="text-xl mt-2"><li>Données immuables</li> <li>DTOs, valeurs de retour</li> <li>Clés de Map</li> <li>Paramètres groupés</li></ul></div> <div class="p-4 bg-accent-950 rounded-lg"><h4 class="text-blue-400">Classe</h4> <ul class="text-xl mt-2"><li>Données modifiables</li> <li>Héritage nécessaire</li> <li>Logique métier complexe</li> <li>Entités JPA/Hibernate</li></ul></div>',i,u,m=`En pratique, les records sont parfaits pour les objets "valeur" : coordonnées, montants,\r
			résultats de requêtes. Pour les entités métier avec état mutable et comportement riche,\r
			gardez les classes classiques.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1p2mhab"&&(e.textContent=o),s=d(n),t=C(n,"DIV",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-byvz3y"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-yqh0sz"&&(u.textContent=m),this.h()},h(){w(t,"class","grid grid-cols-2 gap-8 mt-6"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function sd(_){let e,o="Les Records",s,t,p,i,u,m,n,$,x,l,f,L,c,b,I;return t=new z({props:{$$slots:{default:[Nm]},$$scope:{ctx:_}}}),i=new z({props:{$$slots:{default:[Gm]},$$scope:{ctx:_}}}),m=new z({props:{$$slots:{default:[Km]},$$scope:{ctx:_}}}),$=new z({props:{$$slots:{default:[Xm]},$$scope:{ctx:_}}}),l=new z({props:{$$slots:{default:[Zm]},$$scope:{ctx:_}}}),L=new z({props:{$$slots:{default:[ed]},$$scope:{ctx:_}}}),b=new z({props:{$$slots:{default:[td]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),T(i.$$.fragment),u=v(),T(m.$$.fragment),n=v(),T($.$$.fragment),x=v(),T(l.$$.fragment),f=v(),T(L.$$.fragment),c=v(),T(b.$$.fragment)},l(E){e=C(E,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1v8rvp4"&&(e.textContent=o),s=d(E),M(t.$$.fragment,E),p=d(E),M(i.$$.fragment,E),u=d(E),M(m.$$.fragment,E),n=d(E),M($.$$.fragment,E),x=d(E),M(l.$$.fragment,E),f=d(E),M(L.$$.fragment,E),c=d(E),M(b.$$.fragment,E)},m(E,O){r(E,e,O),r(E,s,O),S(t,E,O),r(E,p,O),S(i,E,O),r(E,u,O),S(m,E,O),r(E,n,O),S($,E,O),r(E,x,O),S(l,E,O),r(E,f,O),S(L,E,O),r(E,c,O),S(b,E,O),I=!0},p(E,O){const A={};O&1&&(A.$$scope={dirty:O,ctx:E}),t.$set(A);const D={};O&1&&(D.$$scope={dirty:O,ctx:E}),i.$set(D);const B={};O&1&&(B.$$scope={dirty:O,ctx:E}),m.$set(B);const V={};O&1&&(V.$$scope={dirty:O,ctx:E}),$.$set(V);const K={};O&1&&(K.$$scope={dirty:O,ctx:E}),l.$set(K);const ie={};O&1&&(ie.$$scope={dirty:O,ctx:E}),L.$set(ie);const j={};O&1&&(j.$$scope={dirty:O,ctx:E}),b.$set(j)},i(E){I||(H(t.$$.fragment,E),H(i.$$.fragment,E),H(m.$$.fragment,E),H($.$$.fragment,E),H(l.$$.fragment,E),H(L.$$.fragment,E),H(b.$$.fragment,E),I=!0)},o(E){P(t.$$.fragment,E),P(i.$$.fragment,E),P(m.$$.fragment,E),P($.$$.fragment,E),P(l.$$.fragment,E),P(L.$$.fragment,E),P(b.$$.fragment,E),I=!1},d(E){E&&(a(e),a(s),a(p),a(u),a(n),a(x),a(f),a(c)),q(t,E),q(i,E),q(m,E),q($,E),q(l,E),q(L,E),q(b,E)}}}function ld(_){let e,o;return e=new z({props:{$$slots:{default:[sd]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const p={};t&1&&(p.$$scope={dirty:t,ctx:s}),e.$set(p)},i(s){o||(H(e.$$.fragment,s),o=!0)},o(s){P(e.$$.fragment,s),o=!1},d(s){q(e,s)}}}class nd extends Xe{constructor(e){super(),Ye(this,e,null,ld,We,{})}}function id(_){let e,o="SOLID est un ensemble de 5 principes de conception formulés par Robert C. Martin.",s,t,p=`Ils guident la création de code <span class="text-important">maintenable</span>,
			<span class="text-important">extensible</span> et <span class="text-important">testable</span>.`,i,u,m=`<span class="text-important">S</span> ·
			<span class="text-important">O</span> ·
			<span class="text-important">L</span> ·
			<span class="text-important">I</span> ·
			<span class="text-important">D</span>`,n,$,x=`Robert C. Martin, alias "Uncle Bob", a formalisé ces principes dans les années 2000.\r
			Ce n'est pas de la théorie abstraite : ces principes sont appliqués quotidiennement\r
			dans les entreprises qui font du code de qualité. Connaitre SOLID vous distingue\r
			d'un développeur junior.`;return{c(){e=g("p"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("div"),u.innerHTML=m,n=v(),$=g("aside"),$.textContent=x,this.h()},l(l){e=C(l,"P",{"data-svelte-h":!0}),h(e)!=="svelte-btqyvi"&&(e.textContent=o),s=d(l),t=C(l,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-kobcap"&&(t.innerHTML=p),i=d(l),u=C(l,"DIV",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1lwnd9i"&&(u.innerHTML=m),n=d(l),$=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-1a4nao7"&&($.textContent=x),this.h()},h(){w(t,"class","fragment mt-4"),w(u,"class","fragment mt-8 text-3xl"),w($,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,u,f),r(l,n,f),r(l,$,f)},p:k,d(l){l&&(a(e),a(s),a(t),a(i),a(u),a(n),a($))}}}function ad(_){let e=`
// Violation : cette classe fait tout
class Commande {
    void calculerTotal() { ... }
    void envoyerEmailConfirmation() { ... }
    void sauvegarderEnBase() { ... }
    void genererFacturePDF() { ... }
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function rd(_){let e,o="S — Single Responsibility",s,t,p='Une classe ne doit avoir qu&#39;<span class="text-important">une seule raison de changer</span>.',i,u,m,n,$="4 responsabilités = 4 raisons de changer.",x,l,f=`Si le format de l'email change, on modifie Commande. Si le format PDF change aussi.\r
			Si le schéma de la base change, encore Commande. C'est un noeud de dépendances.\r
			Risque : changer l'email peut casser le calcul du total.`,L;return u=new Z({props:{$$slots:{default:[ad]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment),m=v(),n=g("p"),n.textContent=$,x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-49dgxr"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-da1dqz"&&(t.innerHTML=p),i=d(c),M(u.$$.fragment,c),m=d(c),n=C(c,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1kh7due"&&(n.textContent=$),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-1789rwr"&&(l.textContent=f),this.h()},h(){w(n,"class","fragment mt-4 text-red-400"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),S(u,c,b),r(c,m,b),r(c,n,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),u.$set(I)},i(c){L||(H(u.$$.fragment,c),L=!0)},o(c){P(u.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(n),a(x),a(l)),q(u,c)}}}function ud(_){let e=`
@startuml
!theme crt-green
skinparam backgroundColor transparent

class Commande {
  + calculerTotal(): double
}

class EmailService {
  + envoyerConfirmation(c: Commande)
}

class CommandeRepository {
  + sauvegarder(c: Commande)
}

class FactureService {
  + genererPDF(c: Commande)
}

EmailService ..> Commande
CommandeRepository ..> Commande
FactureService ..> Commande
@enduml
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function od(_){let e,o="S — Correction",s,t,p,i,u="Chaque classe a <b>une seule responsabilité</b> et donc <b>une seule raison de changer</b>.",m,n,$=`On verra dans le bloc Refactoring comment extraire ces services concrètement.\r
			L'IDE peut le faire semi-automatiquement.`,x;return t=new Ke({props:{$$slots:{default:[ud]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-12vjt33"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-1nxjxj1"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1v36s87"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function $d(_){let e=`
class Calculateur {
    double surface(Object forme) {
        if (forme instanceof Cercle c)
            return Math.PI * c.r * c.r;
        if (forme instanceof Rectangle r)
            return r.l * r.h;
        // Ajouter Triangle ici ?
        // Puis Losange ?
        // Puis Pentagone ?...
        return 0;
    }
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function fd(_){let e=`
abstract class Forme {
    abstract double surface();
}

class Calculateur {
    double surfaceTotale(
            List<Forme> formes) {
        double total = 0;
        for (Forme f : formes)
            total += f.surface();
        return total;
    }
}
// Ajouter Triangle ? 
// 0 modification ici.
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function cd(_){let e,o="O — Open/Closed",s,t,p=`Ouvert à l&#39;<span class="text-important">extension</span>,
			fermé à la <span class="text-important">modification</span>.`,i,u,m,n,$="Avant",x,l,f,L,c,b="Après",I,E,O,A,D=`Le code de gauche doit être modifié à chaque nouveau type. Celui de droite ne change jamais.\r
			C'est exactement le polymorphisme qu'on vient de voir. OCP est le principe formel derrière.`,B;return l=new Z({props:{$$slots:{default:[$d]},$$scope:{ctx:_}}}),E=new Z({props:{$$slots:{default:[fd]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("div"),m=g("div"),n=g("h4"),n.textContent=$,x=v(),T(l.$$.fragment),f=v(),L=g("div"),c=g("h4"),c.textContent=b,I=v(),T(E.$$.fragment),O=v(),A=g("aside"),A.textContent=D,this.h()},l(V){e=C(V,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-lqfuaq"&&(e.textContent=o),s=d(V),t=C(V,"P",{"data-svelte-h":!0}),h(t)!=="svelte-zpgp4t"&&(t.innerHTML=p),i=d(V),u=C(V,"DIV",{class:!0});var K=Le(u);m=C(K,"DIV",{});var ie=Le(m);n=C(ie,"H4",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-mw7c45"&&(n.textContent=$),x=d(ie),M(l.$$.fragment,ie),ie.forEach(a),f=d(K),L=C(K,"DIV",{});var j=Le(L);c=C(j,"H4",{class:!0,"data-svelte-h":!0}),h(c)!=="svelte-1lh0iip"&&(c.textContent=b),I=d(j),M(E.$$.fragment,j),j.forEach(a),K.forEach(a),O=d(V),A=C(V,"ASIDE",{class:!0,"data-svelte-h":!0}),h(A)!=="svelte-981h21"&&(A.textContent=D),this.h()},h(){w(n,"class","text-red-400"),w(c,"class","text-green-400"),w(u,"class","grid grid-cols-2 gap-4 mt-6"),w(A,"class","notes")},m(V,K){r(V,e,K),r(V,s,K),r(V,t,K),r(V,i,K),r(V,u,K),ne(u,m),ne(m,n),ne(m,x),S(l,m,null),ne(u,f),ne(u,L),ne(L,c),ne(L,I),S(E,L,null),r(V,O,K),r(V,A,K),B=!0},p(V,K){const ie={};K&1&&(ie.$$scope={dirty:K,ctx:V}),l.$set(ie);const j={};K&1&&(j.$$scope={dirty:K,ctx:V}),E.$set(j)},i(V){B||(H(l.$$.fragment,V),H(E.$$.fragment,V),B=!0)},o(V){P(l.$$.fragment,V),P(E.$$.fragment,V),B=!1},d(V){V&&(a(e),a(s),a(t),a(i),a(u),a(O),a(A)),q(l),q(E)}}}function pd(_){let e=`
class Rectangle {
    int largeur, hauteur;
    void setLargeur(int l) { this.largeur = l; }
    void setHauteur(int h) { this.hauteur = h; }
    int surface() { return largeur * hauteur; }
}

class Carre extends Rectangle {
    void setLargeur(int l) { largeur = l; hauteur = l; }
    void setHauteur(int h) { largeur = h; hauteur = h; }
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function md(_){let e,o="L — Liskov Substitution",s,t,p=`Un objet de type enfant doit pouvoir <span class="text-important">remplacer</span> un objet
			du type parent sans casser le programme.`,i,u,m,n="Le piège classique",$,x,l,f,L=`Si on passe un Carré là où on attend un Rectangle, setLargeur modifie aussi la hauteur.\r
			Le code qui fait r.setLargeur(5); r.setHauteur(3); s'attend à surface() == 15.\r
			Avec un Carré, surface() == 9. Le comportement est changé : Liskov est violé.`,c;return x=new Z({props:{$$slots:{default:[pd]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("div"),m=g("h4"),m.textContent=n,$=v(),T(x.$$.fragment),l=v(),f=g("aside"),f.textContent=L,this.h()},l(b){e=C(b,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-13zsocl"&&(e.textContent=o),s=d(b),t=C(b,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1eajx8k"&&(t.innerHTML=p),i=d(b),u=C(b,"DIV",{class:!0});var I=Le(u);m=C(I,"H4",{class:!0,"data-svelte-h":!0}),h(m)!=="svelte-1j4x0cb"&&(m.textContent=n),$=d(I),M(x.$$.fragment,I),I.forEach(a),l=d(b),f=C(b,"ASIDE",{class:!0,"data-svelte-h":!0}),h(f)!=="svelte-z8lkhw"&&(f.textContent=L),this.h()},h(){w(m,"class","text-red-400"),w(u,"class","fragment mt-6"),w(f,"class","notes")},m(b,I){r(b,e,I),r(b,s,I),r(b,t,I),r(b,i,I),r(b,u,I),ne(u,m),ne(u,$),S(x,u,null),r(b,l,I),r(b,f,I),c=!0},p(b,I){const E={};I&1&&(E.$$scope={dirty:I,ctx:b}),x.$set(E)},i(b){c||(H(x.$$.fragment,b),c=!0)},o(b){P(x.$$.fragment,b),c=!1},d(b){b&&(a(e),a(s),a(t),a(i),a(u),a(l),a(f)),q(x)}}}function dd(_){let e=`
void testerRectangle(Rectangle r) {
    r.setLargeur(5);
    r.setHauteur(3);
    assert r.surface() == 15;  // Échoue avec un Carré !
}

testerRectangle(new Rectangle());  // OK
testerRectangle(new Carre());      // Assertion error !
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function vd(_){let e,o="L — Le problème",s,t,p,i,u=`Un <code>Carre</code> n&#39;est <b>pas substituable</b> à un <code>Rectangle</code>
			→ l&#39;héritage est <span class="text-important">mal choisi</span>.`,m,n,$=`Solution : ne pas faire hériter Carré de Rectangle. Utiliser une interface Forme commune,\r
			ou un record. Mathématiquement un carré est un rectangle, mais en POO la relation "est un"\r
			doit préserver le comportement, pas juste les propriétés mathématiques.`,x;return t=new Z({props:{$$slots:{default:[dd]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-12nedy"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-u6ns7n"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-mq4vuv"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function xd(_){let e=`
@startuml
!theme crt-green
skinparam backgroundColor transparent

interface Imprimable {
  + imprimer()
}
interface Scannable {
  + scanner()
}
interface Faxable {
  + faxer()
}

class ImprimanteSimple implements Imprimable
class ImprimanteMulti implements Imprimable, Scannable, Faxable

@enduml
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function _d(_){let e,o="I — Interface Segregation",s,t,p=`Mieux vaut plusieurs <span class="text-important">petites interfaces</span>
			qu&#39;une grosse interface fourre-tout.`,i,u,m,n,$="L&#39;<code>ImprimanteSimple</code> n&#39;est pas forcée d&#39;implémenter <code>scanner()</code> et <code>faxer()</code>.",x,l,f=`Si on avait une seule interface MachineDeBureau avec imprimer(), scanner(), faxer(),\r
			une imprimante simple devrait implémenter scanner() en lançant une exception ou en ne faisant rien.\r
			C'est un "code smell". ISP rejoint ce qu'on a vu en séance 1 sur les interfaces ciblées.`,L;return u=new Ke({props:{$$slots:{default:[xd]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),T(u.$$.fragment),m=v(),n=g("p"),n.innerHTML=$,x=v(),l=g("aside"),l.textContent=f,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-fpcdx0"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1pvhvzd"&&(t.innerHTML=p),i=d(c),M(u.$$.fragment,c),m=d(c),n=C(c,"P",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-jg27of"&&(n.innerHTML=$),x=d(c),l=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(l)!=="svelte-18ul45o"&&(l.textContent=f),this.h()},h(){w(n,"class","fragment mt-2"),w(l,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),S(u,c,b),r(c,m,b),r(c,n,b),r(c,x,b),r(c,l,b),L=!0},p(c,b){const I={};b&1&&(I.$$scope={dirty:b,ctx:c}),u.$set(I)},i(c){L||(H(u.$$.fragment,c),L=!0)},o(c){P(u.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(i),a(m),a(n),a(x),a(l)),q(u,c)}}}function Cd(_){let e=`
class NotificationService {
    private EmailSender sender 
        = new EmailSender();
        
    void notifier(String msg) {
        sender.envoyer(msg);
    }
}
// Impossible de changer 
// pour du SMS sans modifier
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function gd(_){let e=`
class NotificationService {
    private MessageSender sender;
    
    NotificationService(
            MessageSender s) {
        this.sender = s;
    }
    void notifier(String msg) {
        sender.envoyer(msg);
    }
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function hd(_){let e,o="D — Dependency Inversion",s,t,p='Dépendre des <span class="text-important">abstractions</span>, pas des implémentations concrètes.',i,u,m,n,$="Couplé",x,l,f,L,c,b="Découplé",I,E,O,A,D=`À gauche, NotificationService est soudé à EmailSender. À droite, on injecte n'importe\r
			quelle implémentation de MessageSender. Demain SMS, push, Slack, webhook... sans rien modifier.\r
			C'est le principe qu'on a vu avec BassinAquatique(Nageur) en séance 1, mais formalisé.`,B;return l=new Z({props:{$$slots:{default:[Cd]},$$scope:{ctx:_}}}),E=new Z({props:{$$slots:{default:[gd]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=p,i=v(),u=g("div"),m=g("div"),n=g("h4"),n.textContent=$,x=v(),T(l.$$.fragment),f=v(),L=g("div"),c=g("h4"),c.textContent=b,I=v(),T(E.$$.fragment),O=v(),A=g("aside"),A.textContent=D,this.h()},l(V){e=C(V,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1y9rhxc"&&(e.textContent=o),s=d(V),t=C(V,"P",{"data-svelte-h":!0}),h(t)!=="svelte-1exfegv"&&(t.innerHTML=p),i=d(V),u=C(V,"DIV",{class:!0});var K=Le(u);m=C(K,"DIV",{});var ie=Le(m);n=C(ie,"H4",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1straf9"&&(n.textContent=$),x=d(ie),M(l.$$.fragment,ie),ie.forEach(a),f=d(K),L=C(K,"DIV",{});var j=Le(L);c=C(j,"H4",{class:!0,"data-svelte-h":!0}),h(c)!=="svelte-129z7ng"&&(c.textContent=b),I=d(j),M(E.$$.fragment,j),j.forEach(a),K.forEach(a),O=d(V),A=C(V,"ASIDE",{class:!0,"data-svelte-h":!0}),h(A)!=="svelte-tx3y5r"&&(A.textContent=D),this.h()},h(){w(n,"class","text-red-400"),w(c,"class","text-green-400"),w(u,"class","grid grid-cols-2 gap-4 mt-6"),w(A,"class","notes")},m(V,K){r(V,e,K),r(V,s,K),r(V,t,K),r(V,i,K),r(V,u,K),ne(u,m),ne(m,n),ne(m,x),S(l,m,null),ne(u,f),ne(u,L),ne(L,c),ne(L,I),S(E,L,null),r(V,O,K),r(V,A,K),B=!0},p(V,K){const ie={};K&1&&(ie.$$scope={dirty:K,ctx:V}),l.$set(ie);const j={};K&1&&(j.$$scope={dirty:K,ctx:V}),E.$set(j)},i(V){B||(H(l.$$.fragment,V),H(E.$$.fragment,V),B=!0)},o(V){P(l.$$.fragment,V),P(E.$$.fragment,V),B=!1},d(V){V&&(a(e),a(s),a(t),a(i),a(u),a(O),a(A)),q(l),q(E)}}}function bd(_){let e=`
interface MessageSender {
    void envoyer(String message);
}

class EmailSender implements MessageSender {
    public void envoyer(String msg) { /* envoi email */ }
}
class SmsSender implements MessageSender {
    public void envoyer(String msg) { /* envoi SMS */ }
}

// Injection par le constructeur
var service = new NotificationService(new SmsSender());
service.notifier("Votre colis est prêt");
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Ld(_){let e,o="D — En pratique",s,t,p,i,u=`C&#39;est le fondement de l&#39;<span class="text-important">injection de dépendances</span>
			utilisée par Spring, Guice, etc.`,m,n,$=`En Spring, vous n'écrivez même pas le new : le framework injecte automatiquement\r
			avec @Autowired. On le verra quand on abordera les annotations/frameworks.`,x;return t=new Z({props:{$$slots:{default:[bd]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-h7mrc0"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-10d2qb"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1eahumj"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function wd(_){let e,o="Récapitulatif SOLID",s,t,p='<tr class="fragment"><td class="p-3 text-important font-bold">S</td> <td class="p-3">Single Responsibility</td> <td class="p-3 text-gray-400">Une classe = une responsabilité</td></tr> <tr class="fragment"><td class="p-3 text-important font-bold">O</td> <td class="p-3">Open/Closed</td> <td class="p-3 text-gray-400">Étendre sans modifier</td></tr> <tr class="fragment"><td class="p-3 text-important font-bold">L</td> <td class="p-3">Liskov Substitution</td> <td class="p-3 text-gray-400">Sous-type = substituable</td></tr> <tr class="fragment"><td class="p-3 text-important font-bold">I</td> <td class="p-3">Interface Segregation</td> <td class="p-3 text-gray-400">Interfaces petites et ciblées</td></tr> <tr class="fragment"><td class="p-3 text-important font-bold">D</td> <td class="p-3">Dependency Inversion</td> <td class="p-3 text-gray-400">Dépendre des abstractions</td></tr>',i,u,m=`Ce tableau est une référence à garder. En entretien, on attend que vous connaissiez au moins\r
			SRP et OCP. Les 5 montrent une vraie maturité en conception logicielle.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("table"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1gyjac8"&&(e.textContent=o),s=d(n),t=C(n,"TABLE",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-rohai5"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-7binn6"&&(u.textContent=m),this.h()},h(){w(t,"class","text-lg"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function qd(_){let e=`
class UserService {
    void creerUtilisateur(String nom) {
        // Sauvegarde en base
        Connection conn = DriverManager.getConnection("jdbc:...");
        PreparedStatement ps = conn.prepareStatement("INSERT INTO ...");
        ps.executeUpdate();
        // Envoi d'email
        Transport.send(new MimeMessage(...));
        // Log
        System.out.println("Utilisateur créé : " + nom);
    }
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Pd(_){let e,o="Quel principe est violé ?",s,t,p,i,u="<b>S</b> — 3 responsabilités : persistance, notification, logging.",m,n,$=`On pourrait aussi argumenter D (dépendances concrètes à JDBC et JavaMail).\r
			Mais la violation la plus flagrante est SRP.`,x;return t=new Z({props:{$$slots:{default:[qd]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1ts5k23"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-82c2oy"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-173o6df"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4 text-accent-200"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function Hd(_){let e,o="Les principes SOLID",s,t,p,i,u,m,n,$,x,l,f,L,c,b,I,E,O,A,D,B,V,K,ie;return t=new z({props:{$$slots:{default:[id]},$$scope:{ctx:_}}}),i=new z({props:{$$slots:{default:[rd]},$$scope:{ctx:_}}}),m=new z({props:{$$slots:{default:[od]},$$scope:{ctx:_}}}),$=new z({props:{$$slots:{default:[cd]},$$scope:{ctx:_}}}),l=new z({props:{$$slots:{default:[md]},$$scope:{ctx:_}}}),L=new z({props:{$$slots:{default:[vd]},$$scope:{ctx:_}}}),b=new z({props:{$$slots:{default:[_d]},$$scope:{ctx:_}}}),E=new z({props:{$$slots:{default:[hd]},$$scope:{ctx:_}}}),A=new z({props:{$$slots:{default:[Ld]},$$scope:{ctx:_}}}),B=new z({props:{$$slots:{default:[wd]},$$scope:{ctx:_}}}),K=new z({props:{$$slots:{default:[Pd]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),T(i.$$.fragment),u=v(),T(m.$$.fragment),n=v(),T($.$$.fragment),x=v(),T(l.$$.fragment),f=v(),T(L.$$.fragment),c=v(),T(b.$$.fragment),I=v(),T(E.$$.fragment),O=v(),T(A.$$.fragment),D=v(),T(B.$$.fragment),V=v(),T(K.$$.fragment)},l(j){e=C(j,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-l7ata"&&(e.textContent=o),s=d(j),M(t.$$.fragment,j),p=d(j),M(i.$$.fragment,j),u=d(j),M(m.$$.fragment,j),n=d(j),M($.$$.fragment,j),x=d(j),M(l.$$.fragment,j),f=d(j),M(L.$$.fragment,j),c=d(j),M(b.$$.fragment,j),I=d(j),M(E.$$.fragment,j),O=d(j),M(A.$$.fragment,j),D=d(j),M(B.$$.fragment,j),V=d(j),M(K.$$.fragment,j)},m(j,se){r(j,e,se),r(j,s,se),S(t,j,se),r(j,p,se),S(i,j,se),r(j,u,se),S(m,j,se),r(j,n,se),S($,j,se),r(j,x,se),S(l,j,se),r(j,f,se),S(L,j,se),r(j,c,se),S(b,j,se),r(j,I,se),S(E,j,se),r(j,O,se),S(A,j,se),r(j,D,se),S(B,j,se),r(j,V,se),S(K,j,se),ie=!0},p(j,se){const _e={};se&1&&(_e.$$scope={dirty:se,ctx:j}),t.$set(_e);const be={};se&1&&(be.$$scope={dirty:se,ctx:j}),i.$set(be);const he={};se&1&&(he.$$scope={dirty:se,ctx:j}),m.$set(he);const Pe={};se&1&&(Pe.$$scope={dirty:se,ctx:j}),$.$set(Pe);const xe={};se&1&&(xe.$$scope={dirty:se,ctx:j}),l.$set(xe);const we={};se&1&&(we.$$scope={dirty:se,ctx:j}),L.$set(we);const ge={};se&1&&(ge.$$scope={dirty:se,ctx:j}),b.$set(ge);const qe={};se&1&&(qe.$$scope={dirty:se,ctx:j}),E.$set(qe);const ee={};se&1&&(ee.$$scope={dirty:se,ctx:j}),A.$set(ee);const me={};se&1&&(me.$$scope={dirty:se,ctx:j}),B.$set(me);const te={};se&1&&(te.$$scope={dirty:se,ctx:j}),K.$set(te)},i(j){ie||(H(t.$$.fragment,j),H(i.$$.fragment,j),H(m.$$.fragment,j),H($.$$.fragment,j),H(l.$$.fragment,j),H(L.$$.fragment,j),H(b.$$.fragment,j),H(E.$$.fragment,j),H(A.$$.fragment,j),H(B.$$.fragment,j),H(K.$$.fragment,j),ie=!0)},o(j){P(t.$$.fragment,j),P(i.$$.fragment,j),P(m.$$.fragment,j),P($.$$.fragment,j),P(l.$$.fragment,j),P(L.$$.fragment,j),P(b.$$.fragment,j),P(E.$$.fragment,j),P(A.$$.fragment,j),P(B.$$.fragment,j),P(K.$$.fragment,j),ie=!1},d(j){j&&(a(e),a(s),a(p),a(u),a(n),a(x),a(f),a(c),a(I),a(O),a(D),a(V)),q(t,j),q(i,j),q(m,j),q($,j),q(l,j),q(L,j),q(b,j),q(E,j),q(A,j),q(B,j),q(K,j)}}}function Sd(_){let e,o;return e=new z({props:{$$slots:{default:[Hd]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const p={};t&1&&(p.$$scope={dirty:t,ctx:s}),e.$set(p)},i(s){o||(H(e.$$.fragment,s),o=!0)},o(s){P(e.$$.fragment,s),o=!1},d(s){q(e,s)}}}class Md extends Xe{constructor(e){super(),Ye(this,e,null,Sd,We,{})}}function Td(_){let e,o=`Appliquer SOLID concrètement, c&#39;est <span class="text-important">extraire</span> du code
			en classes dédiées : les <b>services</b>.`,s,t,p="Un service est une classe qui encapsule une responsabilité métier précise.",i,u,m=`Le terme "service" vient de l'architecture en couches. En Spring, les classes annotées @Service\r
			suivent exactement ce principe. Mais on n'a pas besoin de framework pour structurer son code.`;return{c(){e=g("p"),e.innerHTML=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"P",{"data-svelte-h":!0}),h(e)!=="svelte-1yvf1db"&&(e.innerHTML=o),s=d(n),t=C(n,"P",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-19lx5a7"&&(t.textContent=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-7yz7w5"&&(u.textContent=m),this.h()},h(){w(t,"class","fragment mt-4"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function Ed(_){let e=`
class GestionBibliotheque {
    List<Livre> catalogue = new ArrayList<>();
    Map<String, List<Livre>> emprunts = new HashMap<>();

    Livre rechercherParTitre(String titre) {
        for (Livre l : catalogue)
            if (l.getTitre().contains(titre)) return l;
        return null;
    }

    void emprunter(String adherent, Livre livre) {
        if (!catalogue.contains(livre)) throw new RuntimeException("Livre inconnu");
        emprunts.computeIfAbsent(adherent, k -> new ArrayList<>()).add(livre);
        catalogue.remove(livre);
        System.out.println("Email envoyé à " + adherent);
    }

    void retourner(String adherent, Livre livre) {
        emprunts.getOrDefault(adherent, List.of()).remove(livre);
        catalogue.add(livre);
    }

    void afficherStatistiques() {
        System.out.println("Livres disponibles : " + catalogue.size());
        System.out.println("Emprunts en cours : " + emprunts.values().stream()
            .mapToInt(List::size).sum());
    }
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Ad(_){let e,o="Avant : le code monolithique",s,t,p,i,u=`Cette classe fait tout : recherche, emprunt, notification, statistiques.\r
			Elle viole SRP. Voyons comment extraire étape par étape.`,m;return t=new Z({props:{className:"text-sm",$$slots:{default:[Ed]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("aside"),i.textContent=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-xzoiqa"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-7mkk02"&&(i.textContent=u),this.h()},h(){w(i,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function Id(_){let e,o="Identifier les responsabilités",s,t,p='<div class="p-4 bg-accent-950 rounded-lg fragment"><h4 class="text-blue-400">Recherche</h4> <p class="text-xl"><code>rechercherParTitre()</code></p></div> <div class="p-4 bg-accent-950 rounded-lg fragment"><h4 class="text-green-400">Emprunt</h4> <p class="text-xl"><code>emprunter()</code>, <code>retourner()</code></p></div> <div class="p-4 bg-accent-950 rounded-lg fragment"><h4 class="text-purple-400">Notification</h4> <p class="text-xl"><code>System.out.println(&quot;Email...&quot;)</code></p></div> <div class="p-4 bg-accent-950 rounded-lg fragment"><h4 class="text-orange-400">Statistiques</h4> <p class="text-xl"><code>afficherStatistiques()</code></p></div>',i,u,m="4 responsabilités = 4 raisons de changer = 4 services potentiels.",n,$,x=`En pratique, on ne crée pas toujours un service par méthode. L'idée est de regrouper ce qui\r
			change ensemble. Recherche et catalogue pourraient être dans le même service.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=p,i=v(),u=g("p"),u.textContent=m,n=v(),$=g("aside"),$.textContent=x,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-12sovmo"&&(e.textContent=o),s=d(l),t=C(l,"DIV",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-7ixl75"&&(t.innerHTML=p),i=d(l),u=C(l,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-13x1d0b"&&(u.textContent=m),n=d(l),$=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-16v0o8j"&&($.textContent=x),this.h()},h(){w(t,"class","grid grid-cols-2 gap-4 mt-6"),w(u,"class","fragment mt-6"),w($,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,u,f),r(l,n,f),r(l,$,f)},p:k,d(l){l&&(a(e),a(s),a(t),a(i),a(u),a(n),a($))}}}function Dd(_){let e=`
class RechercheService {
    private final List<Livre> catalogue;

    RechercheService(List<Livre> catalogue) {
        this.catalogue = catalogue;
    }

    Livre rechercherParTitre(String titre) {
        for (Livre l : catalogue)
            if (l.getTitre().contains(titre)) return l;
        return null;
    }
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function jd(_){let e,o="Extraire les services",s,t,p,i,u=`Le service reçoit ses dépendances par constructeur (Dependency Inversion).\r
			Il ne s'occupe que de la recherche. Il est facile à tester unitairement.`,m;return t=new Z({props:{$$slots:{default:[Dd]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("aside"),i.textContent=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-8yd12y"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-1f42vp4"&&(i.textContent=u),this.h()},h(){w(i,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function kd(_){let e=`
interface NotificationService {
    void notifier(String destinataire, String message);
}

class EmailNotificationService implements NotificationService {
    public void notifier(String destinataire, String message) {
        System.out.println("Email à " + destinataire + " : " + message);
    }
}
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Od(_){let e,o="Extraire les services",s,t,p,i,u=`On passe par une <b>interface</b> : demain on pourra envoyer des SMS
			sans modifier le code d&#39;emprunt.`,m,n,$=`C'est le D de SOLID en action. Le service d'emprunt dépendra de NotificationService,\r
			pas de EmailNotificationService. On injecte l'implémentation.`,x;return t=new Z({props:{$$slots:{default:[kd]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-8yd12y"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-rtm9ww"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-9b0gd"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function zd(_){let e=`
@startuml
!theme crt-green
skinparam backgroundColor transparent

class Bibliotheque {
  - recherche: RechercheService
  - emprunt: EmpruntService
  - stats: StatistiquesService
}

class RechercheService {
  + rechercherParTitre(titre): Livre
}

class EmpruntService {
  + emprunter(adherent, livre)
  + retourner(adherent, livre)
}

interface NotificationService {
  + notifier(dest, msg)
}

class StatistiquesService {
  + afficher()
}

Bibliotheque *-- RechercheService
Bibliotheque *-- EmpruntService
Bibliotheque *-- StatistiquesService
EmpruntService ..> NotificationService
@enduml
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Vd(_){let e,o="Résultat",s,t,p,i,u=`La classe Bibliothèque devient un orchestrateur léger. Chaque service est testable\r
			indépendamment. On peut changer la notification sans toucher aux emprunts.`,m;return t=new Ke({props:{$$slots:{default:[zd]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("aside"),i.textContent=u,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-8zmews"&&(e.textContent=o),s=d(n),M(t.$$.fragment,n),p=d(n),i=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-1srymxr"&&(i.textContent=u),this.h()},h(){w(i,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),S(t,n,$),r(n,p,$),r(n,i,$),m=!0},p(n,$){const x={};$&1&&(x.$$scope={dirty:$,ctx:n}),t.$set(x)},i(n){m||(H(t.$$.fragment,n),m=!0)},o(n){P(t.$$.fragment,n),m=!1},d(n){n&&(a(e),a(s),a(p),a(i)),q(t,n)}}}function Rd(_){let e,o="L'IDE comme allié",s,t,p="Les IDE modernes automatisent ces extractions :",i,u,m='<li class="fragment"><span class="text-important">Extract Method</span> — sélectionnez du code → clic droit → Extract Method</li> <li class="fragment"><span class="text-important">Extract Class</span> — déplace des méthodes et attributs dans une nouvelle classe</li> <li class="fragment"><span class="text-important">Extract Interface</span> — crée une interface à partir des méthodes publiques</li> <li class="fragment"><span class="text-important">Move</span> — déplace une classe dans un autre package</li>',n,$,x="Raccourci IntelliJ : <code>Ctrl+Alt+M</code> (Extract Method)",l,f,L=`Montrer en live si possible. IntelliJ et VS Code avec les extensions Java font ça très bien.\r
			Le refactoring automatique préserve les références : pas de risque de casser le code.\r
			C'est plus rapide et plus sûr que de copier-coller à la main.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=p,i=v(),u=g("ul"),u.innerHTML=m,n=v(),$=g("p"),$.innerHTML=x,l=v(),f=g("aside"),f.textContent=L,this.h()},l(c){e=C(c,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1y514a9"&&(e.textContent=o),s=d(c),t=C(c,"P",{"data-svelte-h":!0}),h(t)!=="svelte-v0lt24"&&(t.textContent=p),i=d(c),u=C(c,"UL",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1i1giw0"&&(u.innerHTML=m),n=d(c),$=C(c,"P",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-1n18zy0"&&($.innerHTML=x),l=d(c),f=C(c,"ASIDE",{class:!0,"data-svelte-h":!0}),h(f)!=="svelte-1i706qj"&&(f.textContent=L),this.h()},h(){w(u,"class","text-xl mt-6"),w($,"class","fragment mt-6 text-accent-200"),w(f,"class","notes")},m(c,b){r(c,e,b),r(c,s,b),r(c,t,b),r(c,i,b),r(c,u,b),r(c,n,b),r(c,$,b),r(c,l,b),r(c,f,b)},p:k,d(c){c&&(a(e),a(s),a(t),a(i),a(u),a(n),a($),a(l),a(f))}}}function Ud(_){let e,o="Quand refactorer ?",s,t,p='<li class="fragment">Votre classe dépasse <b>100-150 lignes</b></li> <li class="fragment">Vous utilisez des commentaires pour séparer des &quot;blocs&quot; dans la classe</li> <li class="fragment">Deux modificateurs qui ne se connaissent pas touchent au même fichier</li> <li class="fragment">Un changement dans un coin casse un test dans un autre</li>',i,u,m=`Ces signaux sont des <span class="text-important">code smells</span> :
			des indicateurs qu&#39;il est temps de restructurer.`,n,$,x=`Le refactoring n'est pas un luxe : c'est de l'hygiène. Comme ranger son bureau régulièrement.\r
			Plus on attend, plus c'est coûteux. Martin Fowler recommande de refactorer en continu,\r
			pas en "sprint de nettoyage".`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=p,i=v(),u=g("p"),u.innerHTML=m,n=v(),$=g("aside"),$.textContent=x,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-158gq6p"&&(e.textContent=o),s=d(l),t=C(l,"UL",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1qfg4d8"&&(t.innerHTML=p),i=d(l),u=C(l,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1ty0ezy"&&(u.innerHTML=m),n=d(l),$=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-loh1uh"&&($.textContent=x),this.h()},h(){w(t,"class","text-xl mt-6"),w(u,"class","fragment mt-6 text-accent-200"),w($,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,u,f),r(l,n,f),r(l,$,f)},p:k,d(l){l&&(a(e),a(s),a(t),a(i),a(u),a(n),a($))}}}function Jd(_){let e,o="Refactoring en services",s,t,p,i,u,m,n,$,x,l,f,L,c,b,I,E,O;return t=new z({props:{$$slots:{default:[Td]},$$scope:{ctx:_}}}),i=new z({props:{$$slots:{default:[Ad]},$$scope:{ctx:_}}}),m=new z({props:{$$slots:{default:[Id]},$$scope:{ctx:_}}}),$=new z({props:{$$slots:{default:[jd]},$$scope:{ctx:_}}}),l=new z({props:{$$slots:{default:[Od]},$$scope:{ctx:_}}}),L=new z({props:{$$slots:{default:[Vd]},$$scope:{ctx:_}}}),b=new z({props:{$$slots:{default:[Rd]},$$scope:{ctx:_}}}),E=new z({props:{$$slots:{default:[Ud]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),T(i.$$.fragment),u=v(),T(m.$$.fragment),n=v(),T($.$$.fragment),x=v(),T(l.$$.fragment),f=v(),T(L.$$.fragment),c=v(),T(b.$$.fragment),I=v(),T(E.$$.fragment)},l(A){e=C(A,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-pnkd1v"&&(e.textContent=o),s=d(A),M(t.$$.fragment,A),p=d(A),M(i.$$.fragment,A),u=d(A),M(m.$$.fragment,A),n=d(A),M($.$$.fragment,A),x=d(A),M(l.$$.fragment,A),f=d(A),M(L.$$.fragment,A),c=d(A),M(b.$$.fragment,A),I=d(A),M(E.$$.fragment,A)},m(A,D){r(A,e,D),r(A,s,D),S(t,A,D),r(A,p,D),S(i,A,D),r(A,u,D),S(m,A,D),r(A,n,D),S($,A,D),r(A,x,D),S(l,A,D),r(A,f,D),S(L,A,D),r(A,c,D),S(b,A,D),r(A,I,D),S(E,A,D),O=!0},p(A,D){const B={};D&1&&(B.$$scope={dirty:D,ctx:A}),t.$set(B);const V={};D&1&&(V.$$scope={dirty:D,ctx:A}),i.$set(V);const K={};D&1&&(K.$$scope={dirty:D,ctx:A}),m.$set(K);const ie={};D&1&&(ie.$$scope={dirty:D,ctx:A}),$.$set(ie);const j={};D&1&&(j.$$scope={dirty:D,ctx:A}),l.$set(j);const se={};D&1&&(se.$$scope={dirty:D,ctx:A}),L.$set(se);const _e={};D&1&&(_e.$$scope={dirty:D,ctx:A}),b.$set(_e);const be={};D&1&&(be.$$scope={dirty:D,ctx:A}),E.$set(be)},i(A){O||(H(t.$$.fragment,A),H(i.$$.fragment,A),H(m.$$.fragment,A),H($.$$.fragment,A),H(l.$$.fragment,A),H(L.$$.fragment,A),H(b.$$.fragment,A),H(E.$$.fragment,A),O=!0)},o(A){P(t.$$.fragment,A),P(i.$$.fragment,A),P(m.$$.fragment,A),P($.$$.fragment,A),P(l.$$.fragment,A),P(L.$$.fragment,A),P(b.$$.fragment,A),P(E.$$.fragment,A),O=!1},d(A){A&&(a(e),a(s),a(p),a(u),a(n),a(x),a(f),a(c),a(I)),q(t,A),q(i,A),q(m,A),q($,A),q(l,A),q(L,A),q(b,A),q(E,A)}}}function Bd(_){let e,o;return e=new z({props:{$$slots:{default:[Jd]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const p={};t&1&&(p.$$scope={dirty:t,ctx:s}),e.$set(p)},i(s){o||(H(e.$$.fragment,s),o=!0)},o(s){P(e.$$.fragment,s),o=!1},d(s){q(e,s)}}}class Nd extends Xe{constructor(e){super(),Ye(this,e,null,Bd,We,{})}}function Fd(_){let e,o="Rappels de la Séance 3",s,t,p=`Dernier rappel du semestre. On vérifie les acquis sur la généricité, les collections\r
			et les lambdas avant d'attaquer les Design Patterns. Ces trois notions seront utilisées\r
			dans les exemples de DP.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("aside"),t.textContent=p,this.h()},l(i){e=C(i,"H2",{"data-svelte-h":!0}),h(e)!=="svelte-1uvrvg5"&&(e.textContent=o),s=d(i),t=C(i,"ASIDE",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-qqfakf"&&(t.textContent=p),this.h()},h(){w(t,"class","notes")},m(i,u){r(i,e,u),r(i,s,u),r(i,t,u)},p:k,d(i){i&&(a(e),a(s),a(t))}}}function Gd(_){let e=`
List<String> noms = new ArrayList<>();
noms.add("Alice");
noms.add(42);
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Qd(_){let e,o="Ce code compile-t-il ?",s,t,p,i,u=`Non : <code>42</code> n&#39;est pas un <code>String</code>.<br/>
			La généricité bloque à la compilation.`,m,n,$=`C'est tout l'intérêt de la généricité : on attrape l'erreur avant l'exécution.\r
			Sans le type paramétré, ce code compilerait et crasherait plus tard avec un ClassCastException.`,x;return t=new Z({props:{$$slots:{default:[Gd]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("p"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-x2ptrw"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"P",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-q0wl7i"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-1nj6yl4"&&(n.textContent=$),this.h()},h(){w(i,"class","fragment mt-4 text-red-400"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function Kd(_){let e,o="List, Set ou Map ?",s,t,p='<tbody><tr class="fragment"><td class="p-3">Stocker les commandes d&#39;un client <b>dans l&#39;ordre</b></td> <td class="p-3 text-green-400">List</td></tr> <tr class="fragment"><td class="p-3">Les emails uniques des inscrits à un événement</td> <td class="p-3 text-blue-400">Set</td></tr> <tr class="fragment"><td class="p-3">Associer un code produit à son prix</td> <td class="p-3 text-purple-400">Map</td></tr> <tr class="fragment"><td class="p-3">La file d&#39;attente d&#39;un service client</td> <td class="p-3 text-orange-400">Queue</td></tr></tbody>',i,u,m=`Faites voter à main levée. L'objectif est de vérifier l'intuition\r
			"quel besoin métier → quelle collection".`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("table"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-xb9iib"&&(e.textContent=o),s=d(n),t=C(n,"TABLE",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-15w4kgh"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-s9x6lr"&&(u.textContent=m),this.h()},h(){w(t,"class","text-xl mt-6"),w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function Wd(_){let e=`
List<String> plats = List.of("Pizza", "Steak", "Salade", "Pizza", "Sushi");

long resultat = plats.stream()
    .filter(p -> p.length() > 4)
    .distinct()
    .count();
`,o;return{c(){o=Q(e)},l(s){o=G(s,e)},m(s,t){r(s,o,t)},p:k,d(s){s&&a(o)}}}function Xd(_){let e,o="Que produit ce stream ?",s,t,p,i,u='<p class="fragment"><code>filter(p -&gt; p.length() &gt; 4)</code> → garde <code>[&quot;Pizza&quot;, &quot;Steak&quot;, &quot;Salade&quot;, &quot;Pizza&quot;, &quot;Sushi&quot;]</code></p> <p class="fragment"><code>distinct()</code> → retire le doublon → <code>[&quot;Pizza&quot;, &quot;Steak&quot;, &quot;Salade&quot;, &quot;Sushi&quot;]</code></p> <p class="fragment"><code>count()</code> → <span class="text-accent-200 font-bold">4</span></p>',m,n,$=`On déroule le pipeline étape par étape. C'est la clé pour lire un stream : le découper mentalement.\r
			filter garde les éléments avec plus de 4 caractères (tous ici).\r
			distinct retire le doublon "Pizza". count donne 4.`,x;return t=new Z({props:{$$slots:{default:[Wd]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),p=v(),i=g("div"),i.innerHTML=u,m=v(),n=g("aside"),n.textContent=$,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1f032tp"&&(e.textContent=o),s=d(l),M(t.$$.fragment,l),p=d(l),i=C(l,"DIV",{class:!0,"data-svelte-h":!0}),h(i)!=="svelte-1i91yk3"&&(i.innerHTML=u),m=d(l),n=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h(n)!=="svelte-17ywd0x"&&(n.textContent=$),this.h()},h(){w(i,"class","mt-6"),w(n,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),S(t,l,f),r(l,p,f),r(l,i,f),r(l,m,f),r(l,n,f),x=!0},p(l,f){const L={};f&1&&(L.$$scope={dirty:f,ctx:l}),t.$set(L)},i(l){x||(H(t.$$.fragment,l),x=!0)},o(l){P(t.$$.fragment,l),x=!1},d(l){l&&(a(e),a(s),a(p),a(i),a(m),a(n)),q(t,l)}}}function Yd(_){let e,o="Programme de la séance",s,t,p='<li class="fragment"><span class="text-important">Design Patterns</span> — des solutions éprouvées aux problèmes récurrents</li> <li class="fragment"><span class="text-important">Annotations</span> — comment les frameworks industrialisent ces patterns</li>',i,u,m=`Les DP utilisent tout ce qu'on a vu : héritage, interfaces, composition, polymorphisme.\r
			C'est la synthèse du cours.`,n,$,x=`On va voir 5 patterns classiques à travers un seul fil rouge : un système de gestion de restaurant.\r
			Chaque pattern répond à un problème concret identifiable dès le cahier des charges.\r
			À la fin, on verra comment Spring utilise les annotations pour automatiser certains de ces patterns.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("ol"),t.innerHTML=p,i=v(),u=g("p"),u.textContent=m,n=v(),$=g("aside"),$.textContent=x,this.h()},l(l){e=C(l,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-ce2yaf"&&(e.textContent=o),s=d(l),t=C(l,"OL",{class:!0,"data-svelte-h":!0}),h(t)!=="svelte-1wukpgb"&&(t.innerHTML=p),i=d(l),u=C(l,"P",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-3y7ztz"&&(u.textContent=m),n=d(l),$=C(l,"ASIDE",{class:!0,"data-svelte-h":!0}),h($)!=="svelte-17pipqy"&&($.textContent=x),this.h()},h(){w(t,"class","text-2xl mt-6"),w(u,"class","fragment mt-8 text-xl text-gray-400"),w($,"class","notes")},m(l,f){r(l,e,f),r(l,s,f),r(l,t,f),r(l,i,f),r(l,u,f),r(l,n,f),r(l,$,f)},p:k,d(l){l&&(a(e),a(s),a(t),a(i),a(u),a(n),a($))}}}function Zd(_){let e,o,s,t,p,i,u,m,n,$;return e=new z({props:{data_background_gradient:"linear-gradient(rgb(40 59 149), rgb(129 23 195 / 41%))",$$slots:{default:[Fd]},$$scope:{ctx:_}}}),s=new z({props:{$$slots:{default:[Qd]},$$scope:{ctx:_}}}),p=new z({props:{$$slots:{default:[Kd]},$$scope:{ctx:_}}}),u=new z({props:{$$slots:{default:[Xd]},$$scope:{ctx:_}}}),n=new z({props:{$$slots:{default:[Yd]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment),o=v(),T(s.$$.fragment),t=v(),T(p.$$.fragment),i=v(),T(u.$$.fragment),m=v(),T(n.$$.fragment)},l(x){M(e.$$.fragment,x),o=d(x),M(s.$$.fragment,x),t=d(x),M(p.$$.fragment,x),i=d(x),M(u.$$.fragment,x),m=d(x),M(n.$$.fragment,x)},m(x,l){S(e,x,l),r(x,o,l),S(s,x,l),r(x,t,l),S(p,x,l),r(x,i,l),S(u,x,l),r(x,m,l),S(n,x,l),$=!0},p(x,l){const f={};l&1&&(f.$$scope={dirty:l,ctx:x}),e.$set(f);const L={};l&1&&(L.$$scope={dirty:l,ctx:x}),s.$set(L);const c={};l&1&&(c.$$scope={dirty:l,ctx:x}),p.$set(c);const b={};l&1&&(b.$$scope={dirty:l,ctx:x}),u.$set(b);const I={};l&1&&(I.$$scope={dirty:l,ctx:x}),n.$set(I)},i(x){$||(H(e.$$.fragment,x),H(s.$$.fragment,x),H(p.$$.fragment,x),H(u.$$.fragment,x),H(n.$$.fragment,x),$=!0)},o(x){P(e.$$.fragment,x),P(s.$$.fragment,x),P(p.$$.fragment,x),P(u.$$.fragment,x),P(n.$$.fragment,x),$=!1},d(x){x&&(a(o),a(t),a(i),a(m)),q(e,x),q(s,x),q(p,x),q(u,x),q(n,x)}}}function yd(_){let e,o;return e=new z({props:{$$slots:{default:[Zd]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const p={};t&1&&(p.$$scope={dirty:t,ctx:s}),e.$set(p)},i(s){o||(H(e.$$.fragment,s),o=!0)},o(s){P(e.$$.fragment,s),o=!1},d(s){q(e,s)}}}class ev extends Xe{constructor(e){super(),Ye(this,e,null,yd,We,{})}}function tv(_){let e,o="3ICS 2026 - POO",s,t,p,i=`- Lien de la présentation sur e-campus - Suivre depuis le projecteur - Montrer bouton d'aide -
		Overview (touche 'o')`;return{c(){e=g("h1"),s=Q(o),t=v(),p=g("aside"),p.textContent=i,this.h()},l(u){e=C(u,"H1",{class:!0});var m=Le(e);s=G(m,o),m.forEach(a),t=d(u),p=C(u,"ASIDE",{class:!0,"data-svelte-h":!0}),h(p)!=="svelte-1dq3421"&&(p.textContent=i),this.h()},h(){w(e,"class","capitalize"),w(p,"class","notes")},m(u,m){r(u,e,m),ne(e,s),r(u,t,m),r(u,p,m)},p:k,d(u){u&&(a(e),a(t),a(p))}}}function sv(_){let e,o="Les concepts de la POO",s,t,p="<li>Généralités</li> <li>L&#39;encapsulation</li> <li>L&#39;héritage</li> <li>La composition</li> <li>Les interfaces</li> <li>Le polymorphisme</li>",i,u,m=`Voici le fil rouge du cours. On va voir ces 6 concepts dans l'ordre. Chaque concept s'appuie sur
		le précédent. À la fin, vous saurez concevoir une architecture objet complète. Prenez des notes
		sur ce qui vous semble flou, on fera des pauses pour les questions.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("ol"),t.innerHTML=p,i=v(),u=g("aside"),u.textContent=m,this.h()},l(n){e=C(n,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1thzgzl"&&(e.textContent=o),s=d(n),t=C(n,"OL",{"data-svelte-h":!0}),h(t)!=="svelte-vjnx6z"&&(t.innerHTML=p),i=d(n),u=C(n,"ASIDE",{class:!0,"data-svelte-h":!0}),h(u)!=="svelte-1evfkkj"&&(u.textContent=m),this.h()},h(){w(u,"class","notes")},m(n,$){r(n,e,$),r(n,s,$),r(n,t,$),r(n,i,$),r(n,u,$)},p:k,d(n){n&&(a(e),a(s),a(t),a(i),a(u))}}}function lv(_){let e,o="Séance 2";return{c(){e=g("h3"),e.textContent=o},l(s){e=C(s,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-h3jurd"&&(e.textContent=o)},m(s,t){r(s,e,t)},p:k,d(s){s&&a(e)}}}function nv(_){let e,o="Séance 3";return{c(){e=g("h3"),e.textContent=o},l(s){e=C(s,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-1ycjlta"&&(e.textContent=o)},m(s,t){r(s,e,t)},p:k,d(s){s&&a(e)}}}function iv(_){let e,o="Séance 4";return{c(){e=g("h3"),e.textContent=o},l(s){e=C(s,"H3",{"data-svelte-h":!0}),h(e)!=="svelte-3l1v67"&&(e.textContent=o)},m(s,t){r(s,e,t)},p:k,d(s){s&&a(e)}}}function av(_){let e,o="Fin du cours";return{c(){e=g("h1"),e.textContent=o},l(s){e=C(s,"H1",{"data-svelte-h":!0}),h(e)!=="svelte-qfllbu"&&(e.textContent=o)},m(s,t){r(s,e,t)},p:k,d(s){s&&a(e)}}}function rv(_){let e,o,s,t,p,i,u,m,n,$,x,l,f,L,c,b,I,E,O,A,D,B,V,K,ie,j,se,_e,be,he,Pe,xe,we,ge,qe,ee,me,te,ve,le,de,He,Ee,Se,Ae,y,pe,Y,ce,Me,Ie,Te,De,X,fe,je,ze,ke,Oe,Ve,Ue,Re;return e=new z({props:{animate:!0,$$slots:{default:[tv]},$$scope:{ctx:_}}}),s=new Sc({}),p=new Cc({}),u=new Fl({}),n=new z({props:{$$slots:{default:[sv]},$$scope:{ctx:_}}}),x=new oa({}),f=new bi({}),c=new zs({}),I=new hn({}),O=new Gn({}),D=new xp({}),V=new z({props:{id:"seance2",$$slots:{default:[lv]},$$scope:{ctx:_}}}),ie=new fm({}),se=new Da({}),be=new Jm({}),Pe=new nd({}),we=new em({}),qe=new Md({}),me=new Nd({}),ve=new Ga({}),de=new z({props:{id:"seance3",$$slots:{default:[nv]},$$scope:{ctx:_}}}),Ee=new wm({}),Ae=new lu({}),pe=new S$({}),ce=new wo({}),Ie=new z({props:{id:"seance4",$$slots:{default:[iv]},$$scope:{ctx:_}}}),De=new ev({}),fe=new uc({}),ze=new Q$({}),Oe=new z({props:{$$slots:{default:[av]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment),o=v(),T(s.$$.fragment),t=v(),T(p.$$.fragment),i=v(),T(u.$$.fragment),m=v(),T(n.$$.fragment),$=v(),T(x.$$.fragment),l=v(),T(f.$$.fragment),L=v(),T(c.$$.fragment),b=v(),T(I.$$.fragment),E=v(),T(O.$$.fragment),A=v(),T(D.$$.fragment),B=v(),T(V.$$.fragment),K=v(),T(ie.$$.fragment),j=v(),T(se.$$.fragment),_e=v(),T(be.$$.fragment),he=v(),T(Pe.$$.fragment),xe=v(),T(we.$$.fragment),ge=v(),T(qe.$$.fragment),ee=v(),T(me.$$.fragment),te=v(),T(ve.$$.fragment),le=v(),T(de.$$.fragment),He=v(),T(Ee.$$.fragment),Se=v(),T(Ae.$$.fragment),y=v(),T(pe.$$.fragment),Y=v(),T(ce.$$.fragment),Me=v(),T(Ie.$$.fragment),Te=v(),T(De.$$.fragment),X=v(),T(fe.$$.fragment),je=v(),T(ze.$$.fragment),ke=v(),T(Oe.$$.fragment),Ve=v(),Ue=g("section"),this.h()},l(W){M(e.$$.fragment,W),o=d(W),M(s.$$.fragment,W),t=d(W),M(p.$$.fragment,W),i=d(W),M(u.$$.fragment,W),m=d(W),M(n.$$.fragment,W),$=d(W),M(x.$$.fragment,W),l=d(W),M(f.$$.fragment,W),L=d(W),M(c.$$.fragment,W),b=d(W),M(I.$$.fragment,W),E=d(W),M(O.$$.fragment,W),A=d(W),M(D.$$.fragment,W),B=d(W),M(V.$$.fragment,W),K=d(W),M(ie.$$.fragment,W),j=d(W),M(se.$$.fragment,W),_e=d(W),M(be.$$.fragment,W),he=d(W),M(Pe.$$.fragment,W),xe=d(W),M(we.$$.fragment,W),ge=d(W),M(qe.$$.fragment,W),ee=d(W),M(me.$$.fragment,W),te=d(W),M(ve.$$.fragment,W),le=d(W),M(de.$$.fragment,W),He=d(W),M(Ee.$$.fragment,W),Se=d(W),M(Ae.$$.fragment,W),y=d(W),M(pe.$$.fragment,W),Y=d(W),M(ce.$$.fragment,W),Me=d(W),M(Ie.$$.fragment,W),Te=d(W),M(De.$$.fragment,W),X=d(W),M(fe.$$.fragment,W),je=d(W),M(ze.$$.fragment,W),ke=d(W),M(Oe.$$.fragment,W),Ve=d(W),Ue=C(W,"SECTION",{class:!0}),Le(Ue).forEach(a),this.h()},h(){w(Ue,"class","idle-bg")},m(W,Ce){S(e,W,Ce),r(W,o,Ce),S(s,W,Ce),r(W,t,Ce),S(p,W,Ce),r(W,i,Ce),S(u,W,Ce),r(W,m,Ce),S(n,W,Ce),r(W,$,Ce),S(x,W,Ce),r(W,l,Ce),S(f,W,Ce),r(W,L,Ce),S(c,W,Ce),r(W,b,Ce),S(I,W,Ce),r(W,E,Ce),S(O,W,Ce),r(W,A,Ce),S(D,W,Ce),r(W,B,Ce),S(V,W,Ce),r(W,K,Ce),S(ie,W,Ce),r(W,j,Ce),S(se,W,Ce),r(W,_e,Ce),S(be,W,Ce),r(W,he,Ce),S(Pe,W,Ce),r(W,xe,Ce),S(we,W,Ce),r(W,ge,Ce),S(qe,W,Ce),r(W,ee,Ce),S(me,W,Ce),r(W,te,Ce),S(ve,W,Ce),r(W,le,Ce),S(de,W,Ce),r(W,He,Ce),S(Ee,W,Ce),r(W,Se,Ce),S(Ae,W,Ce),r(W,y,Ce),S(pe,W,Ce),r(W,Y,Ce),S(ce,W,Ce),r(W,Me,Ce),S(Ie,W,Ce),r(W,Te,Ce),S(De,W,Ce),r(W,X,Ce),S(fe,W,Ce),r(W,je,Ce),S(ze,W,Ce),r(W,ke,Ce),S(Oe,W,Ce),r(W,Ve,Ce),r(W,Ue,Ce),Re=!0},p(W,[Ce]){const Be={};Ce&1&&(Be.$$scope={dirty:Ce,ctx:W}),e.$set(Be);const Je={};Ce&1&&(Je.$$scope={dirty:Ce,ctx:W}),n.$set(Je);const Ne={};Ce&1&&(Ne.$$scope={dirty:Ce,ctx:W}),V.$set(Ne);const N={};Ce&1&&(N.$$scope={dirty:Ce,ctx:W}),de.$set(N);const oe={};Ce&1&&(oe.$$scope={dirty:Ce,ctx:W}),Ie.$set(oe);const F={};Ce&1&&(F.$$scope={dirty:Ce,ctx:W}),Oe.$set(F)},i(W){Re||(H(e.$$.fragment,W),H(s.$$.fragment,W),H(p.$$.fragment,W),H(u.$$.fragment,W),H(n.$$.fragment,W),H(x.$$.fragment,W),H(f.$$.fragment,W),H(c.$$.fragment,W),H(I.$$.fragment,W),H(O.$$.fragment,W),H(D.$$.fragment,W),H(V.$$.fragment,W),H(ie.$$.fragment,W),H(se.$$.fragment,W),H(be.$$.fragment,W),H(Pe.$$.fragment,W),H(we.$$.fragment,W),H(qe.$$.fragment,W),H(me.$$.fragment,W),H(ve.$$.fragment,W),H(de.$$.fragment,W),H(Ee.$$.fragment,W),H(Ae.$$.fragment,W),H(pe.$$.fragment,W),H(ce.$$.fragment,W),H(Ie.$$.fragment,W),H(De.$$.fragment,W),H(fe.$$.fragment,W),H(ze.$$.fragment,W),H(Oe.$$.fragment,W),Re=!0)},o(W){P(e.$$.fragment,W),P(s.$$.fragment,W),P(p.$$.fragment,W),P(u.$$.fragment,W),P(n.$$.fragment,W),P(x.$$.fragment,W),P(f.$$.fragment,W),P(c.$$.fragment,W),P(I.$$.fragment,W),P(O.$$.fragment,W),P(D.$$.fragment,W),P(V.$$.fragment,W),P(ie.$$.fragment,W),P(se.$$.fragment,W),P(be.$$.fragment,W),P(Pe.$$.fragment,W),P(we.$$.fragment,W),P(qe.$$.fragment,W),P(me.$$.fragment,W),P(ve.$$.fragment,W),P(de.$$.fragment,W),P(Ee.$$.fragment,W),P(Ae.$$.fragment,W),P(pe.$$.fragment,W),P(ce.$$.fragment,W),P(Ie.$$.fragment,W),P(De.$$.fragment,W),P(fe.$$.fragment,W),P(ze.$$.fragment,W),P(Oe.$$.fragment,W),Re=!1},d(W){W&&(a(o),a(t),a(i),a(m),a($),a(l),a(L),a(b),a(E),a(A),a(B),a(K),a(j),a(_e),a(he),a(xe),a(ge),a(ee),a(te),a(le),a(He),a(Se),a(y),a(Y),a(Me),a(Te),a(X),a(je),a(ke),a(Ve),a(Ue)),q(e,W),q(s,W),q(p,W),q(u,W),q(n,W),q(x,W),q(f,W),q(c,W),q(I,W),q(O,W),q(D,W),q(V,W),q(ie,W),q(se,W),q(be,W),q(Pe,W),q(we,W),q(qe,W),q(me,W),q(ve,W),q(de,W),q(Ee,W),q(Ae,W),q(pe,W),q(ce,W),q(Ie,W),q(De,W),q(fe,W),q(ze,W),q(Oe,W)}}}class uv extends Xe{constructor(e){super(),Ye(this,e,null,rv,We,{})}}function ov(_){let e,o;return e=new uv({}),{c(){T(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},i(s){o||(H(e.$$.fragment,s),o=!0)},o(s){P(e.$$.fragment,s),o=!1},d(s){q(e,s)}}}function $v(_){let e,o,s,t,p;return document.title="3ICS 2026 - POO - Alexis Picot",t=new Yt({props:{$$slots:{default:[ov]},$$scope:{ctx:_}}}),{c(){e=g("link"),o=g("meta"),s=v(),T(t.$$.fragment),this.h()},l(i){const u=Xt("svelte-v7f1ci",document.head);e=C(u,"LINK",{rel:!0,href:!0}),o=C(u,"META",{name:!0,content:!0}),u.forEach(a),s=d(i),M(t.$$.fragment,i),this.h()},h(){w(e,"rel","icon"),w(e,"href","https://fav.farm/💻"),w(o,"name","timestamp"),w(o,"content",new Date(1774345044418).toLocaleString())},m(i,u){ne(document.head,e),ne(document.head,o),r(i,s,u),S(t,i,u),p=!0},p(i,[u]){const m={};u&1&&(m.$$scope={dirty:u,ctx:i}),t.$set(m)},i(i){p||(H(t.$$.fragment,i),p=!0)},o(i){P(t.$$.fragment,i),p=!1},d(i){i&&a(s),a(e),a(o),q(t,i)}}}class dv extends Xe{constructor(e){super(),Ye(this,e,null,$v,We,{})}}export{dv as component,mv as universal};
