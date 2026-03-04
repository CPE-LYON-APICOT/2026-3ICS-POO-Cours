import{s as Pe,n as O}from"../chunks/scheduler.BOeCmP2X.js";import{S as Se,i as Ee,q as M,t as H,a as P,u as S,v as E,r as T,d as a,b as u,e as h,y as b,h as d,j as g,l as v,w,c as y,f as de,g as Y,k as Z,A as ge,B as be,x as et,z as jt}from"../chunks/index.DXsIxeDD.js";import{S as R,P as He,C as se,a as Dt}from"../chunks/plantUml.DxuaZt3S.js";const kt=!1,Ot=!0,$c=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ot,ssr:kt},Symbol.toStringTag,{value:"Module"}));function zt(_){let e,o="En POO, l'héritage est un mécanisme qui permet de créer une nouvelle classe à partir d'une classe existante.",s,t,f=`L'héritage, c'est comme dans la vraie vie : les enfants héritent des caractéristiques des parents.\r
			En code, une classe enfant récupère automatiquement tout ce que possède la classe parent.\r
			C'est un des piliers de la POO, introduit dès Simula en 1967 !`;return{c(){e=g("p"),e.textContent=o,s=v(),t=g("aside"),t.textContent=f,this.h()},l(r){e=h(r,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1cxtphb"&&(e.textContent=o),s=d(r),t=h(r,"ASIDE",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-58gjd2"&&(t.textContent=f),this.h()},h(){w(t,"class","notes")},m(r,i){u(r,e,i),u(r,s,i),u(r,t,i)},p:O,d(r){r&&(a(e),a(s),a(t))}}}function Vt(_){let e,o=`La classe existante est appelée <span class="text-important">classe mère</span> ou
			<span class="text-important">classe de base</span>.`,s,t,f=`On dit aussi "superclasse" en anglais (superclass). C'est le terme utilisé dans la documentation Java.\r
			La classe mère définit le comportement commun à toutes ses classes filles.`;return{c(){e=g("p"),e.innerHTML=o,s=v(),t=g("aside"),t.textContent=f,this.h()},l(r){e=h(r,"P",{"data-svelte-h":!0}),b(e)!=="svelte-17c6x0h"&&(e.innerHTML=o),s=d(r),t=h(r,"ASIDE",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-c2wodv"&&(t.textContent=f),this.h()},h(){w(t,"class","notes")},m(r,i){u(r,e,i),u(r,s,i),u(r,t,i)},p:O,d(r){r&&(a(e),a(s),a(t))}}}function Rt(_){let e,o=`La nouvelle classe est appelée <span class="text-important">classe fille</span> ou
			<span class="text-important">classe dérivée</span>.`,s,t,f="La classe fille peut aussi ajouter des attributs et des méthodes qui lui sont propres.",r,i,m=`On dit aussi "subclass" en anglais. La classe fille est une spécialisation de la classe mère.\r
			C'est la relation "est un" : un Chien est un Animal, donc Chien hérite d'Animal.\r
			En Java, toutes les classes héritent implicitement de Object. C'est la racine de l'arbre d'héritage.`;return{c(){e=g("p"),e.innerHTML=o,s=v(),t=g("p"),t.textContent=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1uk6o90"&&(e.innerHTML=o),s=d(l),t=h(l,"P",{"data-svelte-h":!0}),b(t)!=="svelte-hn2jyx"&&(t.textContent=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-1xkwxx4"&&(i.textContent=m),this.h()},h(){w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function Ut(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Nt(_){let e,o="Visualisons l'héritage",s,t,f,r,i="La flèche pointe vers la classe mère : <code>Chien</code> et <code>Chat</code> héritent de <code>Animal</code>.",m,l,$=`C'est la notation UML standard. La flèche avec un triangle vide pointe toujours vers le parent.\r
			Chien et Chat sont des spécialisations d'Animal.`,C;return t=new He({props:{$$slots:{default:[Ut]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("p"),r.innerHTML=i,m=v(),l=g("aside"),l.textContent=$,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-88th8y"&&(e.textContent=o),s=d(n),E(t.$$.fragment,n),f=d(n),r=h(n,"P",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-15afcpd"&&(r.innerHTML=i),m=d(n),l=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-r9k6a2"&&(l.textContent=$),this.h()},h(){w(r,"class","fragment"),w(l,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),S(t,n,p),u(n,f,p),u(n,r,p),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),t.$set(L)},i(n){C||(P(t.$$.fragment,n),C=!0)},o(n){H(t.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(f),a(r),a(m),a(l)),M(t,n)}}}function Jt(_){let e=`
class Animal {
    void crier() {
        System.out.println("Je suis un animal");
    }
}

class Chien extends Animal {
    boolean inscritLOF;
}
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Bt(_){let e,o="En code Java",s,t,f,r,i='On utilise le mot-clé <code class="code text-important">extends</code> pour hériter d&#39;une classe.',m,l,$="Le mot-clé extends, c'est le lien d'héritage. Chien étend Animal, donc Chien a tout ce qu'Animal a.",C;return t=new se({props:{$$slots:{default:[Jt]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("p"),r.innerHTML=i,m=v(),l=g("aside"),l.textContent=$,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1w10xpg"&&(e.textContent=o),s=d(n),E(t.$$.fragment,n),f=d(n),r=h(n,"P",{"data-svelte-h":!0}),b(r)!=="svelte-fb6via"&&(r.innerHTML=i),m=d(n),l=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1efpv08"&&(l.textContent=$),this.h()},h(){w(l,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),S(t,n,p),u(n,f,p),u(n,r,p),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),t.$set(L)},i(n){C||(P(t.$$.fragment,n),C=!0)},o(n){H(t.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(f),a(r),a(m),a(l)),M(t,n)}}}function Ft(_){let e,o=`La classe fille hérite des attributs et des méthodes de la classe mère. Elle peut aussi\r
			redéfinir les méthodes de la classe mère.`,s,t,f='Redéfinir une méthode s&#39;appelle <span class="text-important">redéfinition</span> (ou <em>override</em>).',r,i,m=`Attention à ne pas confondre redéfinition (override) et surcharge (overload) !\r
			Redéfinition : même signature, comportement différent dans la classe fille.\r
			Surcharge : même nom, signatures différentes (nombre/type de paramètres).`;return{c(){e=g("p"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1def0s3"&&(e.textContent=o),s=d(l),t=h(l,"P",{"data-svelte-h":!0}),b(t)!=="svelte-16p7trl"&&(t.innerHTML=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-1i21kkf"&&(i.textContent=m),this.h()},h(){w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function Gt(_){let e,o="Pourquoi redéfinir une méthode ?",s,t,f='<li class="fragment">Adapter le comportement de la méthode à la classe fille</li> <li class="fragment">Spécialiser un comportement générique</li>',r,i,m='<p class="text-accent-200">Exemple : Un animal crie, mais chaque animal crie différemment !</p>',l,$,C=`C'est là que la POO prend tout son sens. Le concept général est dans la classe mère, le détail dans la fille.\r
			Un Animal sait qu'il doit crier, mais seul le Chien sait qu'il aboie.\r
			C'est le Template Method Pattern : la structure dans le parent, les détails dans les enfants.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=f,r=v(),i=g("div"),i.innerHTML=m,l=v(),$=g("aside"),$.textContent=C,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-110ib47"&&(e.textContent=o),s=d(n),t=h(n,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-r58kxc"&&(t.innerHTML=f),r=d(n),i=h(n,"DIV",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-105ov4u"&&(i.innerHTML=m),l=d(n),$=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-1fg734m"&&($.textContent=C),this.h()},h(){w(i,"class","fragment mt-8"),w($,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),u(n,t,p),u(n,r,p),u(n,i,p),u(n,l,p),u(n,$,p)},p:O,d(n){n&&(a(e),a(s),a(t),a(r),a(i),a(l),a($))}}}function Qt(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Kt(_){let e,o="La redéfinition en pratique",s,t,f,r,i=`Regardez le @Override. C'est une annotation qui dit au compilateur : je redéfinis une méthode du parent.\r
			Si vous faites une faute de frappe dans le nom de la méthode, le compilateur vous préviendra.`,m;return t=new se({props:{lines:"1-5|7-11",$$slots:{default:[Qt]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("aside"),r.textContent=i,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1eurtkj"&&(e.textContent=o),s=d(l),E(t.$$.fragment,l),f=d(l),r=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-usptrd"&&(r.textContent=i),this.h()},h(){w(r,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),S(t,l,$),u(l,f,$),u(l,r,$),m=!0},p(l,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:l}),t.$set(C)},i(l){m||(P(t.$$.fragment,l),m=!0)},o(l){H(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a(f),a(r)),M(t,l)}}}function Xt(_){let e=`
void Crier() {  // Oups, majuscule !
    System.out.println("Wouaf");
}
// Compile... mais ne redéfinit rien !
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Wt(_){let e=`
@Override
void Crier() {  // Erreur de compilation !
    System.out.println("Wouaf");
}
// Le compilateur détecte l'erreur
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Yt(_){let e,o="L'annotation @Override",s,t,f='Bonne pratique : <b>toujours</b> utiliser <code class="text-important">@Override</code> lors d&#39;une redéfinition.',r,i,m,l,$="❌ Sans @Override",C,n,p,L,c,x="✅ Avec @Override",I,q,D,j,V=`Sans Override, si vous vous trompez dans le nom, vous créez une nouvelle méthode au lieu de redéfinir.\r
			Avec Override, le compilateur vérifie que la méthode existe bien dans le parent.`,W;return n=new se({props:{class:"language-java",$$slots:{default:[Xt]},$$scope:{ctx:_}}}),q=new se({props:{class:"language-java",$$slots:{default:[Wt]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),i=g("div"),m=g("div"),l=g("h4"),l.textContent=$,C=v(),T(n.$$.fragment),p=v(),L=g("div"),c=g("h4"),c.textContent=x,I=v(),T(q.$$.fragment),D=v(),j=g("aside"),j.textContent=V,this.h()},l(z){e=h(z,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-50lfmg"&&(e.textContent=o),s=d(z),t=h(z,"P",{"data-svelte-h":!0}),b(t)!=="svelte-d96ked"&&(t.innerHTML=f),r=d(z),i=h(z,"DIV",{class:!0});var U=de(i);m=h(U,"DIV",{});var te=de(m);l=h(te,"H4",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-15xopgk"&&(l.textContent=$),C=d(te),E(n.$$.fragment,te),te.forEach(a),p=d(U),L=h(U,"DIV",{});var A=de(L);c=h(A,"H4",{class:!0,"data-svelte-h":!0}),b(c)!=="svelte-1wl6p7j"&&(c.textContent=x),I=d(A),E(q.$$.fragment,A),A.forEach(a),U.forEach(a),D=d(z),j=h(z,"ASIDE",{class:!0,"data-svelte-h":!0}),b(j)!=="svelte-ggk4l5"&&(j.textContent=V),this.h()},h(){w(l,"class","text-red-400"),w(c,"class","text-green-400"),w(i,"class","grid grid-cols-2 gap-8 mt-6"),w(j,"class","notes")},m(z,U){u(z,e,U),u(z,s,U),u(z,t,U),u(z,r,U),u(z,i,U),y(i,m),y(m,l),y(m,C),S(n,m,null),y(i,p),y(i,L),y(L,c),y(L,I),S(q,L,null),u(z,D,U),u(z,j,U),W=!0},p(z,U){const te={};U&1&&(te.$$scope={dirty:U,ctx:z}),n.$set(te);const A={};U&1&&(A.$$scope={dirty:U,ctx:z}),q.$set(A)},i(z){W||(P(n.$$.fragment,z),P(q.$$.fragment,z),W=!0)},o(z){H(n.$$.fragment,z),H(q.$$.fragment,z),W=!1},d(z){z&&(a(e),a(s),a(t),a(r),a(i),a(D),a(j)),M(n),M(q)}}}function Zt(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function yt(_){let e,o="Appeler la méthode du parent : super",s,t,f='On peut appeler la méthode de la classe mère avec <code class="text-important">super</code>.',r,i,m,l,$="Super permet d'accéder au comportement du parent. Utile quand on veut étendre le comportement plutôt que le remplacer complètement.",C;return i=new se({props:{lines:"7-11",$$slots:{default:[Zt]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),T(i.$$.fragment),m=v(),l=g("aside"),l.textContent=$,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-qjr5g"&&(e.textContent=o),s=d(n),t=h(n,"P",{"data-svelte-h":!0}),b(t)!=="svelte-v8yuqg"&&(t.innerHTML=f),r=d(n),E(i.$$.fragment,n),m=d(n),l=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-o07epn"&&(l.textContent=$),this.h()},h(){w(l,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),u(n,t,p),u(n,r,p),S(i,n,p),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),i.$set(L)},i(n){C||(P(i.$$.fragment,n),C=!0)},o(n){H(i.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(t),a(r),a(m),a(l)),M(i,n)}}}function es(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function ts(_){let e,o="Le constructeur et super()",s,t,f="Le constructeur de la classe fille doit appeler celui de la classe mère.",r,i,m,l,$="<code>super()</code> doit être la <b>première instruction</b> du constructeur !",C,n,p=`C'est obligatoire. Le parent doit être construit avant l'enfant.\r
			Si vous oubliez super(), Java appelle super() sans argument par défaut.`,L;return i=new se({props:{lines:"1-6|8-13",$$slots:{default:[es]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),T(i.$$.fragment),m=v(),l=g("p"),l.innerHTML=$,C=v(),n=g("aside"),n.textContent=p,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-b6mdxj"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-kr896n"&&(t.textContent=f),r=d(c),E(i.$$.fragment,c),m=d(c),l=h(c,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-18u9zg8"&&(l.innerHTML=$),C=d(c),n=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-18qho2n"&&(n.textContent=p),this.h()},h(){w(l,"class","fragment text-accent-200"),w(n,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),S(i,c,x),u(c,m,x),u(c,l,x),u(c,C,x),u(c,n,x),L=!0},p(c,x){const I={};x&1&&(I.$$scope={dirty:x,ctx:c}),i.$set(I)},i(c){L||(P(i.$$.fragment,c),L=!0)},o(c){H(i.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(r),a(m),a(l),a(C),a(n)),M(i,c)}}}function ss(_){let e,o="Les classes abstraites",s,t,f="Quand on ne peut pas tout définir...",r,i,m=`Maintenant on passe à un concept plus avancé : l'abstraction.\r
			Parfois, une classe est trop générale pour être instanciée. C'est là qu'intervient abstract.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"H2",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-y699sq"&&(e.textContent=o),s=d(l),t=h(l,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1vlu38n"&&(t.textContent=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-1nw4dvg"&&(i.textContent=m),this.h()},h(){w(e,"class","text-5xl"),w(t,"class","text-2xl text-gray-400"),w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function ls(_){let e=`
abstract class Animal {
    abstract void crier();  // Pas d'implémentation !
}

// Animal a = new Animal();  // ❌ Erreur de compilation !
Chien c = new Chien();       // ✅ OK
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function ns(_){let e,o="Qu'est-ce qu'une classe abstraite ?",s,t,f='Une classe abstraite est une classe qui <span class="text-important">ne peut pas être instanciée</span>.',r,i,m="Elle est destinée à être héritée par d'autres classes.",l,$,C,n,p,L="{}",c,x,I;return $=new se({props:{class:"fragment",$$slots:{default:[ls]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),i=g("p"),i.textContent=m,l=v(),T($.$$.fragment),C=v(),n=g("aside"),p=Z(`Pensez-y comme un moule incomplet. On ne peut pas utiliser un moule incomplet pour fabriquer quelque chose.\r
			Mais les classes filles complètent le moule et deviennent utilisables.\r
			Une méthode abstraite n'a pas de corps `),c=Z(L),x=Z("  - juste une signature suivie de ;"),this.h()},l(q){e=h(q,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-ywas56"&&(e.textContent=o),s=d(q),t=h(q,"P",{"data-svelte-h":!0}),b(t)!=="svelte-uh1j94"&&(t.innerHTML=f),r=d(q),i=h(q,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-1e5hthq"&&(i.textContent=m),l=d(q),E($.$$.fragment,q),C=d(q),n=h(q,"ASIDE",{class:!0});var D=de(n);p=Y(D,`Pensez-y comme un moule incomplet. On ne peut pas utiliser un moule incomplet pour fabriquer quelque chose.\r
			Mais les classes filles complètent le moule et deviennent utilisables.\r
			Une méthode abstraite n'a pas de corps `),c=Y(D,L),x=Y(D,"  - juste une signature suivie de ;"),D.forEach(a),this.h()},h(){w(i,"class","fragment"),w(n,"class","notes")},m(q,D){u(q,e,D),u(q,s,D),u(q,t,D),u(q,r,D),u(q,i,D),u(q,l,D),S($,q,D),u(q,C,D),u(q,n,D),y(n,p),y(n,c),y(n,x),I=!0},p(q,D){const j={};D&1&&(j.$$scope={dirty:D,ctx:q}),$.$set(j)},i(q){I||(P($.$$.fragment,q),I=!0)},o(q){H($.$$.fragment,q),I=!1},d(q){q&&(a(e),a(s),a(t),a(r),a(i),a(l),a(C),a(n)),M($,q)}}}function is(_){let e,o="Pourquoi utiliser des classes abstraites ?",s,t,f='<li class="fragment">Pour définir un <b>contrat</b> que les classes filles doivent respecter</li> <li class="fragment">Pour <b>forcer</b> les classes filles à implémenter certaines méthodes</li> <li class="fragment">Parce qu&#39;il n&#39;a parfois <b>aucun sens</b> d&#39;instancier une classe</li>',r,i,m=`🤔 Comment calculer la surface d'une "Forme" générique ? C'est impossible !`,l,$,C=`C'est une question de sémantique. Une "Forme" c'est quoi ? Un cercle ? Un carré ? On ne sait pas.\r
			Donc on ne peut pas calculer sa surface. Mais on SAIT que toute forme a une surface.\r
			La classe abstraite dit : "Je ne sais pas comment, mais mes enfants sauront."`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=f,r=v(),i=g("p"),i.textContent=m,l=v(),$=g("aside"),$.textContent=C,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1fw1imw"&&(e.textContent=o),s=d(n),t=h(n,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-1f0ebwg"&&(t.innerHTML=f),r=d(n),i=h(n,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-9bhmml"&&(i.textContent=m),l=d(n),$=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-1fqfiay"&&($.textContent=C),this.h()},h(){w(i,"class","fragment mt-8 text-accent-200"),w($,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),u(n,t,p),u(n,r,p),u(n,i,p),u(n,l,p),u(n,$,p)},p:O,d(n){n&&(a(e),a(s),a(t),a(r),a(i),a(l),a($))}}}function as(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function rs(_){let e,o="Exemple : les formes géométriques",s,t,f,r,i=`Forme est abstraite car on ne sait pas calculer la surface d'une forme générique.\r
			Mais on sait que toute forme DOIT pouvoir calculer sa surface.`,m;return t=new He({props:{$$slots:{default:[as]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("aside"),r.textContent=i,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1l1b4vq"&&(e.textContent=o),s=d(l),E(t.$$.fragment,l),f=d(l),r=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-19i401s"&&(r.textContent=i),this.h()},h(){w(r,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),S(t,l,$),u(l,f,$),u(l,r,$),m=!0},p(l,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:l}),t.$set(C)},i(l){m||(P(t.$$.fragment,l),m=!0)},o(l){H(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a(f),a(r)),M(t,l)}}}function us(_){let e=`
abstract class Forme {
    abstract double calculerSurface();  // Pas de corps !
}
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function os(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function cs(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function $s(_){let e,o="En code Java",s,t,f,r,i,m,l,$;return t=new se({props:{$$slots:{default:[us]},$$scope:{ctx:_}}}),i=new se({props:{class:"language-java",$$slots:{default:[os]},$$scope:{ctx:_}}}),l=new se({props:{class:"language-java",$$slots:{default:[cs]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("div"),T(i.$$.fragment),m=v(),T(l.$$.fragment),this.h()},l(C){e=h(C,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1w10xpg"&&(e.textContent=o),s=d(C),E(t.$$.fragment,C),f=d(C),r=h(C,"DIV",{class:!0});var n=de(r);E(i.$$.fragment,n),m=d(n),E(l.$$.fragment,n),n.forEach(a),this.h()},h(){w(r,"class","flex flex-row gap-4 mt-4")},m(C,n){u(C,e,n),u(C,s,n),S(t,C,n),u(C,f,n),u(C,r,n),S(i,r,null),y(r,m),S(l,r,null),$=!0},p(C,n){const p={};n&1&&(p.$$scope={dirty:n,ctx:C}),t.$set(p);const L={};n&1&&(L.$$scope={dirty:n,ctx:C}),i.$set(L);const c={};n&1&&(c.$$scope={dirty:n,ctx:C}),l.$set(c)},i(C){$||(P(t.$$.fragment,C),P(i.$$.fragment,C),P(l.$$.fragment,C),$=!0)},o(C){H(t.$$.fragment,C),H(i.$$.fragment,C),H(l.$$.fragment,C),$=!1},d(C){C&&(a(e),a(s),a(f),a(r)),M(t,C),M(i),M(l)}}}function fs(_){let e,o="Ce qu'il faut retenir",s,t,f='La classe <code class="text-important">Forme</code> est abstraite car on ne peut pas calculer la surface d&#39;une forme générique.',r,i,m="Mais <b>toutes les formes</b> doivent pouvoir calculer leur surface → c&#39;est le contrat.",l,$,C="❌ <code>new Forme()</code> → Erreur !",n,p,L="✅ <code>new Cercle(5.0)</code> → OK";return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),i=g("p"),i.innerHTML=m,l=v(),$=g("p"),$.innerHTML=C,n=v(),p=g("p"),p.innerHTML=L,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1c3ns5x"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1aglhjf"&&(t.innerHTML=f),r=d(c),i=h(c,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-1yjmjvc"&&(i.innerHTML=m),l=d(c),$=h(c,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-1b5sfkh"&&($.innerHTML=C),n=d(c),p=h(c,"P",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-iu5ucw"&&(p.innerHTML=L),this.h()},h(){w(i,"class","fragment"),w($,"class","fragment mt-8 text-red-400"),w(p,"class","fragment text-green-400")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),u(c,i,x),u(c,l,x),u(c,$,x),u(c,n,x),u(c,p,x)},p:O,d(c){c&&(a(e),a(s),a(t),a(r),a(i),a(l),a($),a(n),a(p))}}}function ps(_){let e,o="⚠️ Quand NE PAS hériter",s,t,f="L'erreur classique du débutant",r,i,m=`Attention, l'héritage est puissant mais dangereux si mal utilisé.\r
			C'est l'une des erreurs les plus fréquentes chez les développeurs juniors.\r
			Même les seniors tombent dans le piège parfois !`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"H2",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-1drmq8k"&&(e.textContent=o),s=d(l),t=h(l,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-3u5bob"&&(t.textContent=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-d4fqpf"&&(i.textContent=m),this.h()},h(){w(e,"class","text-5xl"),w(t,"class","text-2xl text-gray-400"),w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function ms(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function ds(_){let e,o="Le piège de l'héritage abusif",s,t,f="L'héritage n'est pas toujours la bonne solution !",r,i,m,l,$="Une Pile n'est PAS une ArrayList, elle UTILISE une ArrayList !",C,n,p=`C'est le fameux exemple de Joshua Bloch dans "Effective Java". Il déconseille d'hériter des collections.\r
			Le problème : on expose des méthodes qui n'ont pas de sens pour une Pile (add, remove au milieu...).\r
			C'est une violation du principe de substitution de Liskov.`,L;return i=new se({props:{class:"language-java",$$slots:{default:[ms]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),T(i.$$.fragment),m=v(),l=g("p"),l.textContent=$,C=v(),n=g("aside"),n.textContent=p,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1hvzkw5"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-dgmjh5"&&(t.textContent=f),r=d(c),E(i.$$.fragment,c),m=d(c),l=h(c,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1pmyb7u"&&(l.textContent=$),C=d(c),n=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-2qwtt4"&&(n.textContent=p),this.h()},h(){w(l,"class","fragment text-red-400 font-bold"),w(n,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),S(i,c,x),u(c,m,x),u(c,l,x),u(c,C,x),u(c,n,x),L=!0},p(c,x){const I={};x&1&&(I.$$scope={dirty:x,ctx:c}),i.$set(I)},i(c){L||(P(i.$$.fragment,c),L=!0)},o(c){H(i.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(r),a(m),a(l),a(C),a(n)),M(i,c)}}}function vs(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function xs(_){let e,o="La bonne approche : composition",s,t,f,r,i="On expose uniquement ce qui a du sens pour une Pile.",m,l,$=`Voilà la solution propre. La Pile "a une" ArrayList, elle n'"est pas" une ArrayList.\r
			L'utilisateur ne peut faire que empiler et depiler. Impossible de corrompre l'état interne.\r
			C'est le principe d'encapsulation appliqué à l'architecture.`,C;return t=new se({props:{class:"language-java",$$slots:{default:[vs]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("p"),r.textContent=i,m=v(),l=g("aside"),l.textContent=$,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-7t2ot"&&(e.textContent=o),s=d(n),E(t.$$.fragment,n),f=d(n),r=h(n,"P",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-14pjpsh"&&(r.textContent=i),m=d(n),l=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-czhf2j"&&(l.textContent=$),this.h()},h(){w(r,"class","fragment text-green-400 font-bold"),w(l,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),S(t,n,p),u(n,f,p),u(n,r,p),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),t.$set(L)},i(n){C||(P(t.$$.fragment,n),C=!0)},o(n){H(t.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(f),a(r),a(m),a(l)),M(t,n)}}}function _s(_){let e,o="Comment choisir ?",s,t,f='<p class="fragment">🤔 Posez-vous la question :</p> <p class="fragment mt-4 text-3xl">&quot;Est-ce qu&#39;un <b>X</b> <span class="text-important">EST UN</span> <b>Y</b> ?&quot;</p> <div class="fragment mt-8"><p class="text-green-400">✅ Un Chien <b>est un</b> Animal → Héritage</p> <p class="text-green-400">✅ Un Cercle <b>est une</b> Forme → Héritage</p> <p class="text-red-400">❌ Une Pile <b>est une</b> ArrayList → NON !</p> <p class="text-blue-400">✅ Une Pile <b>a une</b> ArrayList → Composition</p></div>',r,i,m=`C'est la règle d'or. Si la phrase "X est un Y" sonne faux, n'héritez pas.\r
			On verra la composition dans le prochain chapitre.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1sib837"&&(e.textContent=o),s=d(l),t=h(l,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-b6u81r"&&(t.innerHTML=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-1dryqu3"&&(i.textContent=m),this.h()},h(){w(t,"class","text-2xl mt-8"),w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function Cs(_){let e,o="Récapitulatif : les mots-clés",s,t,f='<tr><td class="p-4"><code class="text-important">extends</code></td> <td class="p-4">Hériter d&#39;une classe</td></tr> <tr><td class="p-4"><code class="text-important">super</code></td> <td class="p-4">Accéder à la classe mère</td></tr> <tr><td class="p-4"><code class="text-important">super()</code></td> <td class="p-4">Appeler le constructeur parent</td></tr> <tr><td class="p-4"><code class="text-important">@Override</code></td> <td class="p-4">Redéfinir une méthode (annotation)</td></tr> <tr><td class="p-4"><code class="text-important">abstract</code></td> <td class="p-4">Classe/méthode non instanciable</td></tr>',r,i,m=`Ce sont les 5 mots-clés essentiels de l'héritage en Java. Apprenez-les par cœur !\r
			Extends pour hériter, super pour accéder au parent, @Override pour redéfinir proprement.\r
			Avec ça, vous couvrez 95% des cas d'utilisation de l'héritage.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("table"),t.innerHTML=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-18myzwu"&&(e.textContent=o),s=d(l),t=h(l,"TABLE",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1mjxyt9"&&(t.innerHTML=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-ij1jd2"&&(i.textContent=m),this.h()},h(){w(t,"class","text-xl"),w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function hs(_){let e,o="L'héritage",s,t,f,r,i,m,l,$,C,n,p,L,c,x,I,q,D,j,V,W,z,U,te,A,F,ce,pe,me,_e,oe,ve,fe,xe,G,ne,Q,ue,K,re,Ce,X,$e,he,J,ie;return t=new R({props:{$$slots:{default:[zt]},$$scope:{ctx:_}}}),r=new R({props:{$$slots:{default:[Vt]},$$scope:{ctx:_}}}),m=new R({props:{$$slots:{default:[Rt]},$$scope:{ctx:_}}}),$=new R({props:{$$slots:{default:[Nt]},$$scope:{ctx:_}}}),n=new R({props:{$$slots:{default:[Bt]},$$scope:{ctx:_}}}),L=new R({props:{$$slots:{default:[Ft]},$$scope:{ctx:_}}}),x=new R({props:{$$slots:{default:[Gt]},$$scope:{ctx:_}}}),q=new R({props:{$$slots:{default:[Kt]},$$scope:{ctx:_}}}),j=new R({props:{$$slots:{default:[Yt]},$$scope:{ctx:_}}}),W=new R({props:{$$slots:{default:[yt]},$$scope:{ctx:_}}}),U=new R({props:{$$slots:{default:[ts]},$$scope:{ctx:_}}}),A=new R({props:{data_background_color:"#1a1a2e",$$slots:{default:[ss]},$$scope:{ctx:_}}}),ce=new R({props:{$$slots:{default:[ns]},$$scope:{ctx:_}}}),me=new R({props:{$$slots:{default:[is]},$$scope:{ctx:_}}}),oe=new R({props:{$$slots:{default:[rs]},$$scope:{ctx:_}}}),fe=new R({props:{$$slots:{default:[$s]},$$scope:{ctx:_}}}),G=new R({props:{$$slots:{default:[fs]},$$scope:{ctx:_}}}),Q=new R({props:{data_background_color:"#3d1a1a",$$slots:{default:[ps]},$$scope:{ctx:_}}}),K=new R({props:{$$slots:{default:[ds]},$$scope:{ctx:_}}}),Ce=new R({props:{$$slots:{default:[xs]},$$scope:{ctx:_}}}),$e=new R({props:{$$slots:{default:[_s]},$$scope:{ctx:_}}}),J=new R({props:{$$slots:{default:[Cs]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),T(r.$$.fragment),i=v(),T(m.$$.fragment),l=v(),T($.$$.fragment),C=v(),T(n.$$.fragment),p=v(),T(L.$$.fragment),c=v(),T(x.$$.fragment),I=v(),T(q.$$.fragment),D=v(),T(j.$$.fragment),V=v(),T(W.$$.fragment),z=v(),T(U.$$.fragment),te=v(),T(A.$$.fragment),F=v(),T(ce.$$.fragment),pe=v(),T(me.$$.fragment),_e=v(),T(oe.$$.fragment),ve=v(),T(fe.$$.fragment),xe=v(),T(G.$$.fragment),ne=v(),T(Q.$$.fragment),ue=v(),T(K.$$.fragment),re=v(),T(Ce.$$.fragment),X=v(),T($e.$$.fragment),he=v(),T(J.$$.fragment)},l(B){e=h(B,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-taqcdc"&&(e.textContent=o),s=d(B),E(t.$$.fragment,B),f=d(B),E(r.$$.fragment,B),i=d(B),E(m.$$.fragment,B),l=d(B),E($.$$.fragment,B),C=d(B),E(n.$$.fragment,B),p=d(B),E(L.$$.fragment,B),c=d(B),E(x.$$.fragment,B),I=d(B),E(q.$$.fragment,B),D=d(B),E(j.$$.fragment,B),V=d(B),E(W.$$.fragment,B),z=d(B),E(U.$$.fragment,B),te=d(B),E(A.$$.fragment,B),F=d(B),E(ce.$$.fragment,B),pe=d(B),E(me.$$.fragment,B),_e=d(B),E(oe.$$.fragment,B),ve=d(B),E(fe.$$.fragment,B),xe=d(B),E(G.$$.fragment,B),ne=d(B),E(Q.$$.fragment,B),ue=d(B),E(K.$$.fragment,B),re=d(B),E(Ce.$$.fragment,B),X=d(B),E($e.$$.fragment,B),he=d(B),E(J.$$.fragment,B)},m(B,ae){u(B,e,ae),u(B,s,ae),S(t,B,ae),u(B,f,ae),S(r,B,ae),u(B,i,ae),S(m,B,ae),u(B,l,ae),S($,B,ae),u(B,C,ae),S(n,B,ae),u(B,p,ae),S(L,B,ae),u(B,c,ae),S(x,B,ae),u(B,I,ae),S(q,B,ae),u(B,D,ae),S(j,B,ae),u(B,V,ae),S(W,B,ae),u(B,z,ae),S(U,B,ae),u(B,te,ae),S(A,B,ae),u(B,F,ae),S(ce,B,ae),u(B,pe,ae),S(me,B,ae),u(B,_e,ae),S(oe,B,ae),u(B,ve,ae),S(fe,B,ae),u(B,xe,ae),S(G,B,ae),u(B,ne,ae),S(Q,B,ae),u(B,ue,ae),S(K,B,ae),u(B,re,ae),S(Ce,B,ae),u(B,X,ae),S($e,B,ae),u(B,he,ae),S(J,B,ae),ie=!0},p(B,ae){const Le={};ae&1&&(Le.$$scope={dirty:ae,ctx:B}),t.$set(Le);const we={};ae&1&&(we.$$scope={dirty:ae,ctx:B}),r.$set(we);const qe={};ae&1&&(qe.$$scope={dirty:ae,ctx:B}),m.$set(qe);const Me={};ae&1&&(Me.$$scope={dirty:ae,ctx:B}),$.$set(Me);const N={};ae&1&&(N.$$scope={dirty:ae,ctx:B}),n.$set(N);const le={};ae&1&&(le.$$scope={dirty:ae,ctx:B}),L.$set(le);const Ie={};ae&1&&(Ie.$$scope={dirty:ae,ctx:B}),x.$set(Ie);const Te={};ae&1&&(Te.$$scope={dirty:ae,ctx:B}),q.$set(Te);const ze={};ae&1&&(ze.$$scope={dirty:ae,ctx:B}),j.$set(ze);const Ae={};ae&1&&(Ae.$$scope={dirty:ae,ctx:B}),W.$set(Ae);const Ue={};ae&1&&(Ue.$$scope={dirty:ae,ctx:B}),U.$set(Ue);const je={};ae&1&&(je.$$scope={dirty:ae,ctx:B}),A.$set(je);const Ne={};ae&1&&(Ne.$$scope={dirty:ae,ctx:B}),ce.$set(Ne);const De={};ae&1&&(De.$$scope={dirty:ae,ctx:B}),me.$set(De);const Je={};ae&1&&(Je.$$scope={dirty:ae,ctx:B}),oe.$set(Je);const ke={};ae&1&&(ke.$$scope={dirty:ae,ctx:B}),fe.$set(ke);const Be={};ae&1&&(Be.$$scope={dirty:ae,ctx:B}),G.$set(Be);const Oe={};ae&1&&(Oe.$$scope={dirty:ae,ctx:B}),Q.$set(Oe);const Fe={};ae&1&&(Fe.$$scope={dirty:ae,ctx:B}),K.$set(Fe);const Ve={};ae&1&&(Ve.$$scope={dirty:ae,ctx:B}),Ce.$set(Ve);const Qe={};ae&1&&(Qe.$$scope={dirty:ae,ctx:B}),$e.$set(Qe);const Re={};ae&1&&(Re.$$scope={dirty:ae,ctx:B}),J.$set(Re)},i(B){ie||(P(t.$$.fragment,B),P(r.$$.fragment,B),P(m.$$.fragment,B),P($.$$.fragment,B),P(n.$$.fragment,B),P(L.$$.fragment,B),P(x.$$.fragment,B),P(q.$$.fragment,B),P(j.$$.fragment,B),P(W.$$.fragment,B),P(U.$$.fragment,B),P(A.$$.fragment,B),P(ce.$$.fragment,B),P(me.$$.fragment,B),P(oe.$$.fragment,B),P(fe.$$.fragment,B),P(G.$$.fragment,B),P(Q.$$.fragment,B),P(K.$$.fragment,B),P(Ce.$$.fragment,B),P($e.$$.fragment,B),P(J.$$.fragment,B),ie=!0)},o(B){H(t.$$.fragment,B),H(r.$$.fragment,B),H(m.$$.fragment,B),H($.$$.fragment,B),H(n.$$.fragment,B),H(L.$$.fragment,B),H(x.$$.fragment,B),H(q.$$.fragment,B),H(j.$$.fragment,B),H(W.$$.fragment,B),H(U.$$.fragment,B),H(A.$$.fragment,B),H(ce.$$.fragment,B),H(me.$$.fragment,B),H(oe.$$.fragment,B),H(fe.$$.fragment,B),H(G.$$.fragment,B),H(Q.$$.fragment,B),H(K.$$.fragment,B),H(Ce.$$.fragment,B),H($e.$$.fragment,B),H(J.$$.fragment,B),ie=!1},d(B){B&&(a(e),a(s),a(f),a(i),a(l),a(C),a(p),a(c),a(I),a(D),a(V),a(z),a(te),a(F),a(pe),a(_e),a(ve),a(xe),a(ne),a(ue),a(re),a(X),a(he)),M(t,B),M(r,B),M(m,B),M($,B),M(n,B),M(L,B),M(x,B),M(q,B),M(j,B),M(W,B),M(U,B),M(A,B),M(ce,B),M(me,B),M(oe,B),M(fe,B),M(G,B),M(Q,B),M(K,B),M(Ce,B),M($e,B),M(J,B)}}}function gs(_){let e,o;return e=new R({props:{$$slots:{default:[hs]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){E(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const f={};t&1&&(f.$$scope={dirty:t,ctx:s}),e.$set(f)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){H(e.$$.fragment,s),o=!1},d(s){M(e,s)}}}class bs extends Se{constructor(e){super(),Ee(this,e,null,gs,Pe,{})}}function Ls(_){let e,o,s,t,f,r,i,m,l,$,C,n,p,L,c,x,I,q,D,j;return{c(){e=be("svg"),o=be("g"),s=be("title"),t=Z("Layer 1"),f=be("g"),r=be("rect"),i=be("text"),m=Z("Données"),l=be("text"),$=Z("FonctionA"),C=be("text"),n=Z("FonctionB"),p=be("text"),L=Z("FonctionC"),c=be("text"),x=Z("FonctionD"),I=be("line"),q=be("line"),D=be("line"),j=be("line"),this.h()},l(V){e=ge(V,"svg",{width:!0,height:!0,xmlns:!0});var W=de(e);o=ge(W,"g",{});var z=de(o);s=ge(z,"title",{});var U=de(s);t=Y(U,"Layer 1"),U.forEach(a),f=ge(z,"g",{id:!0});var te=de(f);r=ge(te,"rect",{fill:!0,stroke:!0,x:!0,y:!0,width:!0,height:!0,id:!0}),de(r).forEach(a),i=ge(te,"text",{fill:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var A=de(i);m=Y(A,"Données"),A.forEach(a),l=ge(te,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var F=de(l);$=Y(F,"FonctionA"),F.forEach(a),C=ge(te,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var ce=de(C);n=Y(ce,"FonctionB"),ce.forEach(a),p=ge(te,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var pe=de(p);L=Y(pe,"FonctionC"),pe.forEach(a),c=ge(te,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var me=de(c);x=Y(me,"FonctionD"),me.forEach(a),I=ge(te,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),de(I).forEach(a),q=ge(te,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),de(q).forEach(a),D=ge(te,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),de(D).forEach(a),j=ge(te,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),de(j).forEach(a),te.forEach(a),z.forEach(a),W.forEach(a),this.h()},h(){w(r,"fill","#FFDFB8"),w(r,"stroke","none"),w(r,"x","170"),w(r,"y","0"),w(r,"width","150"),w(r,"height","300"),w(r,"id","svg_1"),w(i,"fill","black"),w(i,"stroke","black"),w(i,"x","205"),w(i,"y","150"),w(i,"id","svg_2"),w(i,"font-size","24"),w(i,"font-family","Noto Sans JP"),w(i,"text-anchor","start"),w(i,"xml:space","preserve"),w(l,"class","fill-current"),w(l,"stroke","none"),w(l,"x","0"),w(l,"y","50"),w(l,"id","svg_3"),w(l,"font-size","24"),w(l,"font-family","Noto Sans JP"),w(l,"text-anchor","start"),w(l,"xml:space","preserve"),w(C,"class","fill-current"),w(C,"stroke","none"),w(C,"x","0"),w(C,"y","109.99901"),w(C,"id","svg_4"),w(C,"font-size","24"),w(C,"font-family","Noto Sans JP"),w(C,"text-anchor","start"),w(C,"xml:space","preserve"),w(p,"class","fill-current"),w(p,"stroke","none"),w(p,"x","0"),w(p,"y","170"),w(p,"id","svg_5"),w(p,"font-size","24"),w(p,"font-family","Noto Sans JP"),w(p,"text-anchor","start"),w(p,"xml:space","preserve"),w(c,"class","fill-current"),w(c,"stroke","none"),w(c,"x","0"),w(c,"y","230"),w(c,"id","svg_6"),w(c,"font-size","24"),w(c,"font-family","Noto Sans JP"),w(c,"text-anchor","start"),w(c,"xml:space","preserve"),w(I,"stroke-width","5"),w(I,"class","stroke-current"),w(I,"x1","113.53031"),w(I,"y1","222.00012"),w(I,"x2","158.37456"),w(I,"y2","222.00012"),w(I,"id","svg_7"),w(q,"stroke-width","5"),w(q,"class","stroke-current"),w(q,"x1","113.53031"),w(q,"y1","162.00012"),w(q,"x2","158.37456"),w(q,"y2","162.00012"),w(q,"id","svg_8"),w(D,"stroke-width","5"),w(D,"class","stroke-current"),w(D,"x1","113.53031"),w(D,"y1","101.99914"),w(D,"x2","158.37456"),w(D,"y2","101.99914"),w(D,"id","svg_9"),w(j,"stroke-width","5"),w(j,"class","stroke-current"),w(j,"x1","113.53031"),w(j,"y1","42.00012"),w(j,"x2","158.37455"),w(j,"y2","42.00012"),w(j,"id","svg_10"),w(f,"id","svg_11"),w(e,"width","320"),w(e,"height","300"),w(e,"xmlns","http://www.w3.org/2000/svg")},m(V,W){u(V,e,W),y(e,o),y(o,s),y(s,t),y(o,f),y(f,r),y(f,i),y(i,m),y(f,l),y(l,$),y(f,C),y(C,n),y(f,p),y(p,L),y(f,c),y(c,x),y(f,I),y(f,q),y(f,D),y(f,j)},p:O,i:O,o:O,d(V){V&&a(e)}}}class ws extends Se{constructor(e){super(),Ee(this,e,null,Ls,Pe,{})}}function qs(_){let e,o,s,t,f,r,i,m,l,$,C,n,p,L,c,x,I,q,D,j,V,W,z,U;return{c(){e=be("svg"),o=be("g"),s=be("title"),t=Z("Layer 1"),f=be("g"),r=be("path"),i=be("text"),m=Z("Données"),l=be("text"),$=Z("MéthodeA"),C=be("text"),n=Z("MéthodeB"),p=be("line"),L=be("line"),c=be("g"),x=be("path"),I=be("text"),q=Z("Données"),D=be("text"),j=Z("MéthodeA"),V=be("text"),W=Z("MéthodeB"),z=be("line"),U=be("line"),this.h()},l(te){e=ge(te,"svg",{width:!0,height:!0,xmlns:!0});var A=de(e);o=ge(A,"g",{});var F=de(o);s=ge(F,"title",{});var ce=de(s);t=Y(ce,"Layer 1"),ce.forEach(a),f=ge(F,"g",{id:!0});var pe=de(f);r=ge(pe,"path",{id:!0,d:!0,opacity:!0,stroke:!0,fill:!0}),de(r).forEach(a),i=ge(pe,"text",{stroke:!0,fill:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var me=de(i);m=Y(me,"Données"),me.forEach(a),l=ge(pe,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var _e=de(l);$=Y(_e,"MéthodeA"),_e.forEach(a),C=ge(pe,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var oe=de(C);n=Y(oe,"MéthodeB"),oe.forEach(a),p=ge(pe,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),de(p).forEach(a),L=ge(pe,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),de(L).forEach(a),pe.forEach(a),c=ge(F,"g",{id:!0});var ve=de(c);x=ge(ve,"path",{id:!0,d:!0,opacity:!0,stroke:!0,fill:!0}),de(x).forEach(a),I=ge(ve,"text",{stroke:!0,fill:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var fe=de(I);q=Y(fe,"Données"),fe.forEach(a),D=ge(ve,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var xe=de(D);j=Y(xe,"MéthodeA"),xe.forEach(a),V=ge(ve,"text",{class:!0,stroke:!0,x:!0,y:!0,id:!0,"font-size":!0,"font-family":!0,"text-anchor":!0,"xml:space":!0});var G=de(V);W=Y(G,"MéthodeB"),G.forEach(a),z=ge(ve,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),de(z).forEach(a),U=ge(ve,"line",{"stroke-width":!0,class:!0,x1:!0,y1:!0,x2:!0,y2:!0,id:!0}),de(U).forEach(a),ve.forEach(a),F.forEach(a),A.forEach(a),this.h()},h(){w(r,"id","svg_1"),w(r,"d","m170,2.75867l150,0l0,116l-150,0l0,-116z"),w(r,"opacity","undefined"),w(r,"stroke","none"),w(r,"fill","#FFDFB8"),w(i,"stroke","black"),w(i,"fill","black"),w(i,"x","208"),w(i,"y","70"),w(i,"id","svg_2"),w(i,"font-size","24"),w(i,"font-family","Noto Sans JP"),w(i,"text-anchor","start"),w(i,"xml:space","preserve"),w(l,"class","fill-current"),w(l,"stroke","none"),w(l,"x","0"),w(l,"y","40"),w(l,"id","svg_3"),w(l,"font-size","24"),w(l,"font-family","Noto Sans JP"),w(l,"text-anchor","start"),w(l,"xml:space","preserve"),w(C,"class","fill-current"),w(C,"stroke","none"),w(C,"x","0"),w(C,"y","100"),w(C,"id","svg_4"),w(C,"font-size","24"),w(C,"font-family","Noto Sans JP"),w(C,"text-anchor","start"),w(C,"xml:space","preserve"),w(p,"stroke-width","5"),w(p,"class","stroke-current"),w(p,"x1","113.53031"),w(p,"y1","91.75781"),w(p,"x2","158.37456"),w(p,"y2","91.75781"),w(p,"id","svg_9"),w(L,"stroke-width","5"),w(L,"class","stroke-current"),w(L,"x1","113.53031"),w(L,"y1","31.75879"),w(L,"x2","158.37455"),w(L,"y2","31.75879"),w(L,"id","svg_10"),w(f,"id","svg_12"),w(x,"id","svg_13"),w(x,"d","m170,182.07234l150,0l0,116l-150,0l0,-116z"),w(x,"opacity","undefined"),w(x,"stroke","none"),w(x,"fill","#FFDFB8"),w(I,"stroke","black"),w(I,"fill","black"),w(I,"x","208"),w(I,"y","250"),w(I,"id","svg_14"),w(I,"font-size","24"),w(I,"font-family","Noto Sans JP"),w(I,"text-anchor","start"),w(I,"xml:space","preserve"),w(D,"class","fill-current"),w(D,"stroke","none"),w(D,"x","0"),w(D,"y","220"),w(D,"id","svg_15"),w(D,"font-size","24"),w(D,"font-family","Noto Sans JP"),w(D,"text-anchor","start"),w(D,"xml:space","preserve"),w(V,"class","fill-current"),w(V,"stroke","none"),w(V,"x","0"),w(V,"y","280"),w(V,"id","svg_16"),w(V,"font-size","24"),w(V,"font-family","Noto Sans JP"),w(V,"text-anchor","start"),w(V,"xml:space","preserve"),w(z,"stroke-width","5"),w(z,"class","stroke-current"),w(z,"x1","113.53031"),w(z,"y1","271.07148"),w(z,"x2","158.37456"),w(z,"y2","271.07148"),w(z,"id","svg_17"),w(U,"stroke-width","5"),w(U,"class","stroke-current"),w(U,"x1","113.53031"),w(U,"y1","211.07246"),w(U,"x2","158.37455"),w(U,"y2","211.07246"),w(U,"id","svg_18"),w(c,"id","svg_19"),w(e,"width","320"),w(e,"height","300"),w(e,"xmlns","http://www.w3.org/2000/svg")},m(te,A){u(te,e,A),y(e,o),y(o,s),y(s,t),y(o,f),y(f,r),y(f,i),y(i,m),y(f,l),y(l,$),y(f,C),y(C,n),y(f,p),y(f,L),y(o,c),y(c,x),y(c,I),y(I,q),y(c,D),y(D,j),y(c,V),y(V,W),y(c,z),y(c,U)},p:O,i:O,o:O,d(te){te&&a(e)}}}class Ms extends Se{constructor(e){super(),Ee(this,e,null,qs,Pe,{})}}function Hs(_){let e,o="Introduction";return{c(){e=g("h1"),e.textContent=o},l(s){e=h(s,"H1",{"data-svelte-h":!0}),b(e)!=="svelte-v1pk48"&&(e.textContent=o)},m(s,t){u(s,e,t)},p:O,d(s){s&&a(e)}}}function Ps(_){let e,o='La <span data-fragment-index="1" class="fragment highlight-red">Programmation</span> Orientée Objet',s,t,f="La programmation, c'est manipuler des données...",r,i,m="<i>Comment structurer ces données et les traitements associés ?</i>",l,$,C=`On commence par poser la question fondamentale. Peu importe le langage, peu importe le projet,
			on manipule toujours des données. La vraie question c'est : comment on organise tout ça ?`;return{c(){e=g("h2"),e.innerHTML=o,s=v(),t=g("p"),t.textContent=f,r=v(),i=g("p"),i.innerHTML=m,l=v(),$=g("aside"),$.textContent=C,this.h()},l(n){e=h(n,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-idwyvx"&&(e.innerHTML=o),s=d(n),t=h(n,"P",{"data-fragment-index":!0,class:!0,"data-svelte-h":!0}),b(t)!=="svelte-ccoak9"&&(t.textContent=f),r=d(n),i=h(n,"P",{"data-fragment-index":!0,class:!0,"data-svelte-h":!0}),b(i)!=="svelte-ja2tch"&&(i.innerHTML=m),l=d(n),$=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-16jpdmo"&&($.textContent=C),this.h()},h(){w(t,"data-fragment-index","1"),w(t,"class","fragment"),w(i,"data-fragment-index","2"),w(i,"class","fragment"),w($,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),u(n,t,p),u(n,r,p),u(n,i,p),u(n,l,p),u(n,$,p)},p:O,d(n){n&&(a(e),a(s),a(t),a(r),a(i),a(l),a($))}}}function Ss(_){let e,o="La POO en 3 mots",s,t,f='<div class="fragment flex flex-col items-center p-6 bg-accent-950 rounded-lg"><span class="text-6xl mb-4">📦</span> <span class="text-important font-bold">RANGER</span> <span class="text-xl mt-2 text-gray-400">Organiser le code</span></div> <div class="fragment flex flex-col items-center p-6 bg-accent-950 rounded-lg"><span class="text-6xl mb-4">🔒</span> <span class="text-important font-bold">PROTÉGER</span> <span class="text-xl mt-2 text-gray-400">Éviter les erreurs</span></div> <div class="fragment flex flex-col items-center p-6 bg-accent-950 rounded-lg"><span class="text-6xl mb-4">🌳</span> <span class="text-important font-bold">GÉNÉRALISER</span> <span class="text-xl mt-2 text-gray-400">Réutiliser le code</span></div>',r,i,m=`On va voir que la POO apporte 3 bénéfices majeurs, dans cet ordre précis. D'abord on range,
			ensuite on protège, et enfin on généralise. Ces 3 piliers sont la base de tout ce qu'on va
			voir dans ce module.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-1nirx80"&&(e.textContent=o),s=d(l),t=h(l,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-19dln6f"&&(t.innerHTML=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-49jgnd"&&(i.textContent=m),this.h()},h(){w(t,"class","flex flex-row justify-around items-center text-3xl mt-10"),w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function Es(_){let e,o="📦 RANGER",s,t,f="Premier pilier de la POO",r,i,m="On commence par le premier pilier : ranger. C'est le plus intuitif.";return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"H2",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-z32rqx"&&(e.textContent=o),s=d(l),t=h(l,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-kfijfp"&&(t.textContent=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-1eorlzr"&&(i.textContent=m),this.h()},h(){w(e,"class","text-6xl"),w(t,"class","text-3xl text-gray-400"),w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function Ts(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function As(_){let e,o='Le problème du code "en vrac"',s,t,f,r,i=`Regardez ce code. On a des variables partout, mélangées. Rien ne dit que nomClient va avec
			ageClient et emailClient. Quand le code grossit, c'est le chaos. On ne sait plus quelle
			variable va avec quelle autre.`,m;return t=new se({props:{$$slots:{default:[Ts]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("aside"),r.textContent=i,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1iow74n"&&(e.textContent=o),s=d(l),E(t.$$.fragment,l),f=d(l),r=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-vygygc"&&(r.textContent=i),this.h()},h(){w(r,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),S(t,l,$),u(l,f,$),u(l,r,$),m=!0},p(l,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:l}),t.$set(C)},i(l){m||(P(t.$$.fragment,l),m=!0)},o(l){H(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a(f),a(r)),M(t,l)}}}function Is(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function js(_){let e,o="La solution : regrouper dans des objets",s,t,f,r,i=`Avec la POO, on regroupe ce qui va ensemble. Un Client a un nom, un âge, un email. Un Produit
			a un nom, un prix, un stock. Chaque "boîte" contient ce qui lui appartient. C'est déjà plus
			clair, non ?`,m;return t=new se({props:{lines:"1-5|7-11|13-16|18-20",$$slots:{default:[Is]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("aside"),r.textContent=i,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-qf6jcc"&&(e.textContent=o),s=d(l),E(t.$$.fragment,l),f=d(l),r=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-1k8tbir"&&(r.textContent=i),this.h()},h(){w(r,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),S(t,l,$),u(l,f,$),u(l,r,$),m=!0},p(l,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:l}),t.$set(C)},i(l){m||(P(t.$$.fragment,l),m=!0)},o(l){H(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a(f),a(r)),M(t,l)}}}function Ds(_){let e,o,s="Programmation procédurale",t,f,r="Programmation orientée objet",i,m,l,$,C,n,p,L=`Visuellement, c'est ça la différence. À gauche, les données sont séparées des traitements. Les
			fonctions peuvent accéder à n'importe quelle donnée. À droite, chaque objet contient SES
			données ET SES traitements. C'est une vraie boîte autonome.`,c;return m=new ws({}),C=new Ms({}),{c(){e=g("div"),o=g("h3"),o.textContent=s,t=v(),f=g("h3"),f.textContent=r,i=v(),T(m.$$.fragment),l=v(),$=g("div"),T(C.$$.fragment),n=v(),p=g("aside"),p.textContent=L,this.h()},l(x){e=h(x,"DIV",{class:!0});var I=de(e);o=h(I,"H3",{"data-svelte-h":!0}),b(o)!=="svelte-cax56s"&&(o.textContent=s),t=d(I),f=h(I,"H3",{"data-fragment-index":!0,class:!0,"data-svelte-h":!0}),b(f)!=="svelte-1roygcu"&&(f.textContent=r),i=d(I),E(m.$$.fragment,I),l=d(I),$=h(I,"DIV",{"data-fragment-index":!0,class:!0});var q=de($);E(C.$$.fragment,q),q.forEach(a),I.forEach(a),n=d(x),p=h(x,"ASIDE",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-cw6e6u"&&(p.textContent=L),this.h()},h(){w(f,"data-fragment-index","1"),w(f,"class","fragment"),w($,"data-fragment-index","1"),w($,"class","fragment"),w(e,"class","grid-cols-2 grid justify-items-center items-start"),w(p,"class","notes")},m(x,I){u(x,e,I),y(e,o),y(e,t),y(e,f),y(e,i),S(m,e,null),y(e,l),y(e,$),S(C,$,null),u(x,n,I),u(x,p,I),c=!0},p:O,i(x){c||(P(m.$$.fragment,x),P(C.$$.fragment,x),c=!0)},o(x){H(m.$$.fragment,x),H(C.$$.fragment,x),c=!1},d(x){x&&(a(e),a(n),a(p)),M(m),M(C)}}}function ks(_){let e,o='<h3>Programmation procédurale</h3> <h3>Programmation orientée objet</h3> <ul><li>Les données et les traitements sont séparés</li> <li class="fragment">Les fonctions accèdent à <span class="text-red-400">tout</span></li> <li class="fragment">Difficile de savoir &quot;qui fait quoi&quot;</li></ul> <ul><li>Les données et les traitements sont regroupés dans un objet</li> <li class="fragment">Les méthodes n&#39;accèdent qu&#39;à <span class="text-green-400">leur objet</span></li> <li class="fragment">Chaque objet est responsable de lui-même</li></ul>',s,t,f="Premier intérêt : le code est mieux organisé",r,i,m=`En procédural, les fonctions peuvent accéder à tout. C'est pratique au début, mais ça devient
			vite le bazar. En POO, chaque objet est une entité autonome. Il gère ses propres données avec
			ses propres méthodes. C'est le premier bénéfice : on range, on organise.`;return{c(){e=g("div"),e.innerHTML=o,s=v(),t=g("p"),t.textContent=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"DIV",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-kmsvtl"&&(e.innerHTML=o),s=d(l),t=h(l,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-19jde0y"&&(t.textContent=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-1ezzhp6"&&(i.textContent=m),this.h()},h(){w(e,"class","grid-cols-2 grid justify-items-center items-start"),w(t,"class","fragment font-bold text-accent-200 mt-8"),w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function Os(_){let e,o="🔒 PROTÉGER",s,t,f="Deuxième pilier de la POO",r,i,m=`Maintenant qu'on a rangé, on va voir le deuxième pilier : protéger. C'est là que la POO
			devient vraiment puissante.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"H2",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-nrad46"&&(e.textContent=o),s=d(l),t=h(l,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1n91bqq"&&(t.textContent=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-5opokd"&&(i.textContent=m),this.h()},h(){w(e,"class","text-6xl"),w(t,"class","text-3xl text-gray-400"),w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function zs(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Vs(_){let e,o="Le problème : les erreurs silencieuses",s,t,f="En procédural, rien ne vous empêche de faire n'importe quoi...",r,i,m,l,$=`Regardez ce code. La fonction direBonjour attend un nom et un âge. Mais rien ne m'empêche de
			lui passer l'âge de Marie à la place de celui de Jean ! Le code compile, il s'exécute... mais
			le résultat est faux. C'est un bug silencieux, le pire type de bug.`,C;return i=new se({props:{class:"java",$$slots:{default:[zs]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),T(i.$$.fragment),m=v(),l=g("aside"),l.textContent=$,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-2a5yxe"&&(e.textContent=o),s=d(n),t=h(n,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1sotxef"&&(t.textContent=f),r=d(n),E(i.$$.fragment,n),m=d(n),l=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1va15cw"&&(l.textContent=$),this.h()},h(){w(l,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),u(n,t,p),u(n,r,p),S(i,n,p),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),i.$set(L)},i(n){C||(P(i.$$.fragment,n),C=!0)},o(n){H(i.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(t),a(r),a(m),a(l)),M(i,n)}}}function Rs(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Us(_){let e,o="Le problème empire avec le temps...",s,t,f,r,i="Plus le code grossit, plus on se trompe !",m,l,$=`6 mois plus tard, vous avez 50 variables, 30 fonctions. Vous ne savez plus quelle variable va
			avec quelle autre. Vous vous trompez de paramètre, le code compile, mais ça ne marche pas.
			Vous passez des heures à débugger.`,C;return t=new se({props:{class:"java",lines:"1-8|10-15",$$slots:{default:[Rs]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("p"),r.textContent=i,m=v(),l=g("aside"),l.textContent=$,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-12am7ex"&&(e.textContent=o),s=d(n),E(t.$$.fragment,n),f=d(n),r=h(n,"P",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-1u4dzf0"&&(r.textContent=i),m=d(n),l=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1oru7wz"&&(l.textContent=$),this.h()},h(){w(r,"class","fragment text-red-400 font-bold"),w(l,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),S(t,n,p),u(n,f,p),u(n,r,p),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),t.$set(L)},i(n){C||(P(t.$$.fragment,n),C=!0)},o(n){H(t.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(f),a(r),a(m),a(l)),M(t,n)}}}function Ns(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Js(_){let e,o="La solution POO : impossible de se tromper",s,t,f,r,i=`En POO, la méthode direBonjour est DANS l'objet Personne. Elle ne prend pas de paramètres,
			elle utilise directement les données de l'objet. Chaque personne a sa propre méthode qui
			utilise SES données. Impossible de mélanger les données de Jean et Marie.`,m;return t=new se({props:{class:"java",lines:"1-11|13-17",$$slots:{default:[Ns]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("aside"),r.textContent=i,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1l4bme7"&&(e.textContent=o),s=d(l),E(t.$$.fragment,l),f=d(l),r=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-ylwt9m"&&(r.textContent=i),this.h()},h(){w(r,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),S(t,l,$),u(l,f,$),u(l,r,$),m=!0},p(l,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:l}),t.$set(C)},i(l){m||(P(t.$$.fragment,l),m=!0)},o(l){H(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a(f),a(r)),M(t,l)}}}function Bs(_){let e=`
//
direBonjour(nom1, age1);  // OK
direBonjour(nom1, age2);  // BUG !
// Rien ne m'empêche de mélanger
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Fs(_){let e=`
//
jean.direBonjour();
marie.direBonjour();
// Chacun utilise SES données
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Gs(_){let e,o="Comparaison directe",s,t,f,r,i="❌ Procédural",m,l,$,C,n,p="✅ POO",L,c,x,I,q="Les méthodes ne manipulent que les données de LEUR objet",D,j,V=`C'est ça la vraie puissance. En procédural, vous pouvez mélanger les données de personnes
			différentes. En POO, chaque méthode n'accède qu'aux données de son objet. Jean utilise les
			données de Jean, Marie utilise les données de Marie. Impossible de se tromper.`,W;return l=new se({props:{class:"java",$$slots:{default:[Bs]},$$scope:{ctx:_}}}),c=new se({props:{class:"java",$$slots:{default:[Fs]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),f=g("div"),r=g("h4"),r.textContent=i,m=v(),T(l.$$.fragment),$=v(),C=g("div"),n=g("h4"),n.textContent=p,L=v(),T(c.$$.fragment),x=v(),I=g("p"),I.textContent=q,D=v(),j=g("aside"),j.textContent=V,this.h()},l(z){e=h(z,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-r1ae78"&&(e.textContent=o),s=d(z),t=h(z,"DIV",{class:!0});var U=de(t);f=h(U,"DIV",{});var te=de(f);r=h(te,"H4",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-14hrfbc"&&(r.textContent=i),m=d(te),E(l.$$.fragment,te),te.forEach(a),$=d(U),C=h(U,"DIV",{});var A=de(C);n=h(A,"H4",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-o82dwg"&&(n.textContent=p),L=d(A),E(c.$$.fragment,A),A.forEach(a),U.forEach(a),x=d(z),I=h(z,"P",{class:!0,"data-svelte-h":!0}),b(I)!=="svelte-2a01z8"&&(I.textContent=q),D=d(z),j=h(z,"ASIDE",{class:!0,"data-svelte-h":!0}),b(j)!=="svelte-1wg97bw"&&(j.textContent=V),this.h()},h(){w(r,"class","text-red-400"),w(n,"class","text-green-400"),w(t,"class","grid-cols-2 grid justify-items-center items-start gap-4"),w(I,"class","fragment text-accent-200 font-bold text-3xl mt-8"),w(j,"class","notes")},m(z,U){u(z,e,U),u(z,s,U),u(z,t,U),y(t,f),y(f,r),y(f,m),S(l,f,null),y(t,$),y(t,C),y(C,n),y(C,L),S(c,C,null),u(z,x,U),u(z,I,U),u(z,D,U),u(z,j,U),W=!0},p(z,U){const te={};U&1&&(te.$$scope={dirty:U,ctx:z}),l.$set(te);const A={};U&1&&(A.$$scope={dirty:U,ctx:z}),c.$set(A)},i(z){W||(P(l.$$.fragment,z),P(c.$$.fragment,z),W=!0)},o(z){H(l.$$.fragment,z),H(c.$$.fragment,z),W=!1},d(z){z&&(a(e),a(s),a(t),a(x),a(I),a(D),a(j)),M(l),M(c)}}}function Qs(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Ks(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Xs(_){let e,o="Exemple complet : avant / après",s,t,f,r="Procédural",i,m,l="Orienté Objet",$,C,n,p,L,c,x=`À gauche, on pourrait se tromper et appeler direBonjour avec nom et age2. Bug silencieux. À
			droite, chaque Personne est un objet autonome. Quand on appelle p1.direBonjour(), c'est
			TOUJOURS les données de p1 qui sont utilisées. Impossible de mélanger.`,I;return C=new se({props:{class:"java",$$slots:{default:[Qs]},$$scope:{ctx:_}}}),p=new se({props:{class:"java fragment","data-fragment-index":"1",lines:"1-9|10-13",$$slots:{default:[Ks]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),f=g("h4"),f.textContent=r,i=v(),m=g("h4"),m.textContent=l,$=v(),T(C.$$.fragment),n=v(),T(p.$$.fragment),L=v(),c=g("aside"),c.textContent=x,this.h()},l(q){e=h(q,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-11nvxg1"&&(e.textContent=o),s=d(q),t=h(q,"DIV",{class:!0});var D=de(t);f=h(D,"H4",{"data-svelte-h":!0}),b(f)!=="svelte-1bk3u6h"&&(f.textContent=r),i=d(D),m=h(D,"H4",{class:!0,"data-fragment-index":!0,"data-svelte-h":!0}),b(m)!=="svelte-1rzdg3v"&&(m.textContent=l),$=d(D),E(C.$$.fragment,D),n=d(D),E(p.$$.fragment,D),D.forEach(a),L=d(q),c=h(q,"ASIDE",{class:!0,"data-svelte-h":!0}),b(c)!=="svelte-1uzbf9k"&&(c.textContent=x),this.h()},h(){w(m,"class","fragment"),w(m,"data-fragment-index","1"),w(t,"class","grid-cols-2 grid justify-items-center items-start"),w(c,"class","notes")},m(q,D){u(q,e,D),u(q,s,D),u(q,t,D),y(t,f),y(t,i),y(t,m),y(t,$),S(C,t,null),y(t,n),S(p,t,null),u(q,L,D),u(q,c,D),I=!0},p(q,D){const j={};D&1&&(j.$$scope={dirty:D,ctx:q}),C.$set(j);const V={};D&1&&(V.$$scope={dirty:D,ctx:q}),p.$set(V)},i(q){I||(P(C.$$.fragment,q),P(p.$$.fragment,q),I=!0)},o(q){H(C.$$.fragment,q),H(p.$$.fragment,q),I=!1},d(q){q&&(a(e),a(s),a(t),a(L),a(c)),M(C),M(p)}}}function Ws(_){let e,o="Récapitulatif : Ranger + Protéger",s,t,f='<div class="p-6 bg-accent-950 rounded-lg"><h4 class="text-important">📦 RANGER</h4> <ul class="text-2xl"><li>Données regroupées par entité</li> <li>Code plus lisible</li> <li>Plus facile à maintenir</li></ul></div> <div class="p-6 bg-accent-950 rounded-lg"><h4 class="text-important">🔒 PROTÉGER</h4> <ul class="text-2xl"><li>Méthodes liées à leurs données</li> <li>Impossible de se tromper de paramètre</li> <li>Le compilateur vous aide</li></ul></div>',r,i,m="Mais ce n'est pas tout...",l,$,C=`On a vu les deux premiers piliers. On range le code, on le protège des erreurs. Mais la POO
			offre un troisième bénéfice, peut-être le plus puissant : la généralisation.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=f,r=v(),i=g("p"),i.textContent=m,l=v(),$=g("aside"),$.textContent=C,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-wok7w1"&&(e.textContent=o),s=d(n),t=h(n,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1hsd1m7"&&(t.innerHTML=f),r=d(n),i=h(n,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-3ya9un"&&(i.textContent=m),l=d(n),$=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-heeq8"&&($.textContent=C),this.h()},h(){w(t,"class","flex flex-row justify-around items-start mt-8"),w(i,"class","fragment text-3xl mt-8"),w($,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),u(n,t,p),u(n,r,p),u(n,i,p),u(n,l,p),u(n,$,p)},p:O,d(n){n&&(a(e),a(s),a(t),a(r),a(i),a(l),a($))}}}function Ys(_){let e,o="🌳 GÉNÉRALISER",s,t,f="Troisième pilier de la POO",r,i,m=`Le troisième pilier, c'est la généralisation. C'est là qu'on va parler d'héritage,
			d'abstraction. C'est ce qui rend la POO vraiment unique.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"H2",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-ptnj3f"&&(e.textContent=o),s=d(l),t=h(l,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-188gx3t"&&(t.textContent=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-m0kwia"&&(i.textContent=m),this.h()},h(){w(e,"class","text-6xl"),w(t,"class","text-3xl text-gray-400"),w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function Zs(_){let e,o="La programmation orientée objet",s,t,f="Qu'est-ce que c'est ?",r,i,m='La programmation orientée objet est un <span class="text-important">paradigme de programmation</span>, c&#39;est-à-dire une manière de programmer, qui repose sur la notion d&#39;objets.',l,$,C="Un objet est une entité qui regroupe des données et des traitements qui lui sont associés.",n,p,L='Un objet est censé représenter <span class="text-important">une entité du monde réel</span>.',c,x,I="Il n'est pas obligatoire de programmer en POO !",q,D,j=`La POO c'est un paradigme, une façon de penser le code. L'idée c'est de modéliser le monde
			réel : des personnes, des voitures, des produits... Ce n'est pas obligatoire, mais c'est très
			puissant quand on sait s'en servir.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("h3"),t.textContent=f,r=v(),i=g("p"),i.innerHTML=m,l=v(),$=g("p"),$.textContent=C,n=v(),p=g("p"),p.innerHTML=L,c=v(),x=g("p"),x.textContent=I,q=v(),D=g("aside"),D.textContent=j,this.h()},l(V){e=h(V,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-18a0qr8"&&(e.textContent=o),s=d(V),t=h(V,"H3",{"data-svelte-h":!0}),b(t)!=="svelte-a8zqi8"&&(t.textContent=f),r=d(V),i=h(V,"P",{"data-svelte-h":!0}),b(i)!=="svelte-3ymvqm"&&(i.innerHTML=m),l=d(V),$=h(V,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-18xem7k"&&($.textContent=C),n=d(V),p=h(V,"P",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-10wio1h"&&(p.innerHTML=L),c=d(V),x=h(V,"P",{class:!0,"data-svelte-h":!0}),b(x)!=="svelte-64ska2"&&(x.textContent=I),q=d(V),D=h(V,"ASIDE",{class:!0,"data-svelte-h":!0}),b(D)!=="svelte-zlkz96"&&(D.textContent=j),this.h()},h(){w($,"class","fragment"),w(p,"class","fragment"),w(x,"class","fragment text-accent-200 font-bold"),w(D,"class","notes")},m(V,W){u(V,e,W),u(V,s,W),u(V,t,W),u(V,r,W),u(V,i,W),u(V,l,W),u(V,$,W),u(V,n,W),u(V,p,W),u(V,c,W),u(V,x,W),u(V,q,W),u(V,D,W)},p:O,d(V){V&&(a(e),a(s),a(t),a(r),a(i),a(l),a($),a(n),a(p),a(c),a(x),a(q),a(D))}}}function ys(_){let e,o="Représenter le monde réel",s,t,f="Un objet est censé représenter une entité du monde réel.",r,i,m=`Par exemple, <span data-fragment-index="3" class="fragment highlight-red">un chien, un chat</span>,
			<span data-fragment-index="3" class="fragment highlight-green">une moto, une voiture</span>,
			<span data-fragment-index="3" class="fragment highlight-blue">un ennemi, un PNJ</span>`,l,$,C=`Ou plus <span class="underline font-bold">génériquement</span>, un
			<span class="text-red-500">animal</span>, un <span class="text-green-500">véhicule</span>, un
			<span class="text-blue-500">personnage</span>`,n,p,L=`On modélise le monde réel. Un chien, un chat, ce sont des objets. Mais on peut aller plus loin
			: un chien et un chat, c'est un animal. Une moto et une voiture, c'est un véhicule. C'est ça
			la généralisation : trouver le concept commun.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),i=g("p"),i.innerHTML=m,l=v(),$=g("p"),$.innerHTML=C,n=v(),p=g("aside"),p.textContent=L,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1nsqnl5"&&(e.textContent=o),s=d(c),t=h(c,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1te9lxn"&&(t.textContent=f),r=d(c),i=h(c,"P",{class:!0,"data-fragment-index":!0,"data-svelte-h":!0}),b(i)!=="svelte-12p87au"&&(i.innerHTML=m),l=d(c),$=h(c,"P",{class:!0,"data-fragment-index":!0,"data-svelte-h":!0}),b($)!=="svelte-68say8"&&($.innerHTML=C),n=d(c),p=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-1ad4dj1"&&(p.textContent=L),this.h()},h(){w(t,"class","font-bold text-accent-200"),w(i,"class","fragment"),w(i,"data-fragment-index","2"),w($,"class","fragment"),w($,"data-fragment-index","3"),w(p,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),u(c,i,x),u(c,l,x),u(c,$,x),u(c,n,x),u(c,p,x)},p:O,d(c){c&&(a(e),a(s),a(t),a(r),a(i),a(l),a($),a(n),a(p))}}}function el(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function tl(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function sl(_){let e,o="Pourquoi généraliser ?",s,t,f="Imaginons que vous codez un jeu vidéo...",r,i,m,l,$="❌ Sans généralisation",C,n,p,L,c,x="✅ Avec généralisation",I,q,D,j,V=`Sans généralisation, on duplique le code. Chaque personnage a sa méthode seDeplacer, même si
			c'est la même. Avec la généralisation, on met le code commun dans une classe parente. Si on
			change seDeplacer, on le change une seule fois, et tous les personnages en bénéficient.`,W;return n=new se({props:{class:"java",$$slots:{default:[el]},$$scope:{ctx:_}}}),q=new se({props:{class:"java",$$slots:{default:[tl]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),i=g("div"),m=g("div"),l=g("h4"),l.textContent=$,C=v(),T(n.$$.fragment),p=v(),L=g("div"),c=g("h4"),c.textContent=x,I=v(),T(q.$$.fragment),D=v(),j=g("aside"),j.textContent=V,this.h()},l(z){e=h(z,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1tyfy6u"&&(e.textContent=o),s=d(z),t=h(z,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1piptso"&&(t.textContent=f),r=d(z),i=h(z,"DIV",{class:!0});var U=de(i);m=h(U,"DIV",{class:!0});var te=de(m);l=h(te,"H4",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1dno5ot"&&(l.textContent=$),C=d(te),E(n.$$.fragment,te),te.forEach(a),p=d(U),L=h(U,"DIV",{class:!0});var A=de(L);c=h(A,"H4",{class:!0,"data-svelte-h":!0}),b(c)!=="svelte-11tuyq2"&&(c.textContent=x),I=d(A),E(q.$$.fragment,A),A.forEach(a),U.forEach(a),D=d(z),j=h(z,"ASIDE",{class:!0,"data-svelte-h":!0}),b(j)!=="svelte-qs469b"&&(j.textContent=V),this.h()},h(){w(l,"class","text-red-400"),w(m,"class","fragment"),w(c,"class","text-green-400"),w(L,"class","fragment"),w(i,"class","grid-cols-2 grid gap-8 mt-8"),w(j,"class","notes")},m(z,U){u(z,e,U),u(z,s,U),u(z,t,U),u(z,r,U),u(z,i,U),y(i,m),y(m,l),y(m,C),S(n,m,null),y(i,p),y(i,L),y(L,c),y(L,I),S(q,L,null),u(z,D,U),u(z,j,U),W=!0},p(z,U){const te={};U&1&&(te.$$scope={dirty:U,ctx:z}),n.$set(te);const A={};U&1&&(A.$$scope={dirty:U,ctx:z}),q.$set(A)},i(z){W||(P(n.$$.fragment,z),P(q.$$.fragment,z),W=!0)},o(z){H(n.$$.fragment,z),H(q.$$.fragment,z),W=!1},d(z){z&&(a(e),a(s),a(t),a(r),a(i),a(D),a(j)),M(n),M(q)}}}function ll(_){let e,o="La généricité",s,t,f="Généralisez vos concepts !",r,i,m='<ul><li><a href="#">Animal</a> <ul><li><a>Chien</a></li> <li><a>Chat</a></li></ul></li> <li><a href="#">Véhicule</a> <ul><li><a>Voiture</a></li> <li><a>Moto</a></li> <li class="fragment" data-fragment-index="1"><a>Bateau</a></li></ul></li> <li><a href="#">Personnage</a> <ul><li><a>Ennemi</a> <ul class="fragment" data-fragment-index="1"><li><a>Monstre</a></li> <li><a>Boss</a></li></ul></li> <li><a>PNJ</a></li></ul></li></ul>',l,$,C=`On peut représenter ça sous forme d'arbre. Animal se décline en Chien et Chat. Véhicule se
			décline en Voiture, Moto, et pourquoi pas Bateau demain. Personnage se décline en Ennemi et
			PNJ, et Ennemi peut lui-même se décliner en Monstre et Boss. C'est ce qu'on appelle l'héritage
			: les enfants héritent des caractéristiques du parent.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),i=g("div"),i.innerHTML=m,l=v(),$=g("aside"),$.textContent=C,this.h()},l(n){e=h(n,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-1t0g1h3"&&(e.textContent=o),s=d(n),t=h(n,"P",{"data-svelte-h":!0}),b(t)!=="svelte-ptm47t"&&(t.textContent=f),r=d(n),i=h(n,"DIV",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-18iior2"&&(i.innerHTML=m),l=d(n),$=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-1azk6ad"&&($.textContent=C),this.h()},h(){w(e,"class","uppercase"),w(i,"class","tree scale-150"),w($,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),u(n,t,p),u(n,r,p),u(n,i,p),u(n,l,p),u(n,$,p)},p:O,d(n){n&&(a(e),a(s),a(t),a(r),a(i),a(l),a($))}}}function nl(_){let e,o="L'héritage : le cœur de la POO",s,t,f="Quand <code>Voiture</code> hérite de <code>Véhicule</code> :",r,i,m='<li class="fragment">✅ Elle récupère automatiquement toutes les données de Véhicule</li> <li class="fragment">✅ Elle récupère automatiquement toutes les méthodes de Véhicule</li> <li class="fragment">✅ Elle peut ajouter ses propres données (nbPortes, nbPlaces...)</li> <li class="fragment">✅ Elle peut modifier le comportement hérité si besoin</li>',l,$,C="Écrivez le code une fois, réutilisez-le partout !",n,p,L=`L'héritage c'est ça : on écrit le code une fois dans le parent, et tous les enfants en
			bénéficient. Si on ajoute un attribut "couleur" à Véhicule, Voiture et Moto l'ont
			automatiquement. C'est un gain de temps énorme, et surtout, moins de bugs car moins de code
			dupliqué.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),i=g("ul"),i.innerHTML=m,l=v(),$=g("p"),$.textContent=C,n=v(),p=g("aside"),p.textContent=L,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1lb9yfa"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1bwq09e"&&(t.innerHTML=f),r=d(c),i=h(c,"UL",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-xxefp4"&&(i.innerHTML=m),l=d(c),$=h(c,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-74izuf"&&($.textContent=C),n=d(c),p=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-yxss4w"&&(p.textContent=L),this.h()},h(){w(i,"class","text-2xl"),w($,"class","fragment text-accent-200 font-bold mt-8"),w(p,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),u(c,i,x),u(c,l,x),u(c,$,x),u(c,n,x),u(c,p,x)},p:O,d(c){c&&(a(e),a(s),a(t),a(r),a(i),a(l),a($),a(n),a(p))}}}function il(_){let e,o="L'abstraction : penser au futur",s,t,f='En POO, généraliser s&#39;appelle <span class="text-important">abstraire, faire une abstraction</span>',r,i,m="C'est anticiper les évolutions de votre code.",l,$,C=`Abstraire, c'est trouver le concept commun entre plusieurs choses. Mais c'est aussi penser au
			futur : qu'est-ce que mon client va me demander demain ?`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),i=g("p"),i.textContent=m,l=v(),$=g("aside"),$.textContent=C,this.h()},l(n){e=h(n,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-1rpalwv"&&(e.textContent=o),s=d(n),t=h(n,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1n8l9pz"&&(t.innerHTML=f),r=d(n),i=h(n,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-44luki"&&(i.textContent=m),l=d(n),$=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-1ux1lwj"&&($.textContent=C),this.h()},h(){w(e,"class","uppercase"),w(i,"class","fragment"),w($,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),u(n,t,p),u(n,r,p),u(n,i,p),u(n,l,p),u(n,$,p)},p:O,d(n){n&&(a(e),a(s),a(t),a(r),a(i),a(l),a($))}}}function al(_){let e,o="Exemple concret : location de voiture",s,t,f=`<span class="text-important">Situation :</span> On vous demande de coder un système de
			location de voiture.<br/><br/> <span class="fragment">📅 <b>6 mois plus tard :</b> &quot;On aimerait aussi proposer des motos !&quot;</span><br/> <span class="fragment">📅 <b>1 an plus tard :</b> &quot;Et des vélos électriques !&quot;</span><br/> <span class="fragment">📅 <b>2 ans plus tard :</b> &quot;Et des accessoires : sièges auto, porte-vélos, chaînes neige...&quot;</span>`,r,i,m='Si vous aviez anticipé, vous auriez codé "Véhicule" dès le départ !',l,$,C=`C'est un scénario classique. On vous demande de gérer des voitures, mais évidemment, ça va
			évoluer. Motos, vélos, accessoires... Si vous codez "Voiture" partout, vous allez devoir tout
			refaire. Si vous codez "Véhicule" dès le départ, ajouter une Moto c'est 5 minutes.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),i=g("p"),i.textContent=m,l=v(),$=g("aside"),$.textContent=C,this.h()},l(n){e=h(n,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-1fhmnzb"&&(e.textContent=o),s=d(n),t=h(n,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-18xi090"&&(t.innerHTML=f),r=d(n),i=h(n,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-m4py0l"&&(i.textContent=m),l=d(n),$=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-s0c6jo"&&($.textContent=C),this.h()},h(){w(e,"class","uppercase"),w(t,"class","text-start text-[28px] p-4 bg-accent-950 font-serif rounded-lg"),w(i,"class","fragment text-accent-200 font-bold mt-6"),w($,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),u(n,t,p),u(n,r,p),u(n,i,p),u(n,l,p),u(n,$,p)},p:O,d(n){n&&(a(e),a(s),a(t),a(r),a(i),a(l),a($))}}}function rl(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function ul(_){let e,o="Le piège du code non généralisé",s,t,f,r,i="Demain on ajoute les motos... on doit tout dupliquer ? 😱",m,l,$=`Voilà le piège. On a codé tout autour de Voiture. Si on veut ajouter Moto, il faut créer
			louerMoto, retournerMoto, calculerPrixMoto... C'est du code dupliqué, c'est des bugs, c'est un
			cauchemar.`,C;return t=new se({props:{class:"java",$$slots:{default:[rl]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("p"),r.textContent=i,m=v(),l=g("aside"),l.textContent=$,this.h()},l(n){e=h(n,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-1h7w9x1"&&(e.textContent=o),s=d(n),E(t.$$.fragment,n),f=d(n),r=h(n,"P",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-1psvyp1"&&(r.textContent=i),m=d(n),l=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1drwx1z"&&(l.textContent=$),this.h()},h(){w(e,"class","uppercase"),w(r,"class","fragment text-red-400 font-bold"),w(l,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),S(t,n,p),u(n,f,p),u(n,r,p),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),t.$set(L)},i(n){C||(P(t.$$.fragment,n),C=!0)},o(n){H(t.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(f),a(r),a(m),a(l)),M(t,n)}}}function ol(_){let e=`
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
			`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function cl(_){let e,o="Étape 1 : Créer la hiérarchie Véhicule",s,t,f="On commence par regrouper Voiture et Moto sous Véhicule",r,i,m,l,$="<b>Voiture</b> est un <b>Véhicule</b> → elle hérite de prixJour, disponible, louer()...",C,n,p=`Première étape : on crée Véhicule qui contient tout ce qui est commun. Voiture et Moto
			héritent de Véhicule. Donc Voiture EST UN Véhicule. Elle a automatiquement prixJour,
			disponible, km, immatriculation. Elle a aussi les méthodes louer() et retourner() sans les
			recoder.`,L;return i=new He({props:{$$slots:{default:[ol]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),T(i.$$.fragment),m=v(),l=g("p"),l.innerHTML=$,C=v(),n=g("aside"),n.textContent=p,this.h()},l(c){e=h(c,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-1uw0g5w"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1ko5xlx"&&(t.textContent=f),r=d(c),E(i.$$.fragment,c),m=d(c),l=h(c,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1hq4dgl"&&(l.innerHTML=$),C=d(c),n=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1p5u5s8"&&(n.textContent=p),this.h()},h(){w(e,"class","uppercase"),w(l,"class","fragment text-accent-200"),w(n,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),S(i,c,x),u(c,m,x),u(c,l,x),u(c,C,x),u(c,n,x),L=!0},p(c,x){const I={};x&1&&(I.$$scope={dirty:x,ctx:c}),i.$set(I)},i(c){L||(P(i.$$.fragment,c),L=!0)},o(c){H(i.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(r),a(m),a(l),a(C),a(n)),M(i,c)}}}function $l(_){let e=`
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
			`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function fl(_){let e=`
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
			`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function pl(_){let e,o="Étape 2 : Ajouter les Accessoires",s,t,f="Les accessoires ont aussi un prix et une disponibilité...",r,i,m,l,$,C,n,p="⚠️ prixJour et disponible sont dupliqués dans Véhicule ET Accessoire !",L,c,x=`On ajoute les accessoires. SiègeAuto et PorteVelo héritent de Accessoire. Mais attendez...
			prixJour et disponible sont dans Véhicule ET dans Accessoire. C'est de la duplication ! On
			peut faire mieux.`,I;return m=new He({props:{$$slots:{default:[$l]},$$scope:{ctx:_}}}),$=new He({props:{$$slots:{default:[fl]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),i=g("div"),T(m.$$.fragment),l=v(),T($.$$.fragment),C=v(),n=g("p"),n.textContent=p,L=v(),c=g("aside"),c.textContent=x,this.h()},l(q){e=h(q,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-dpgmf6"&&(e.textContent=o),s=d(q),t=h(q,"P",{"data-svelte-h":!0}),b(t)!=="svelte-447yeq"&&(t.textContent=f),r=d(q),i=h(q,"DIV",{class:!0});var D=de(i);E(m.$$.fragment,D),l=d(D),E($.$$.fragment,D),D.forEach(a),C=d(q),n=h(q,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-138h9qb"&&(n.textContent=p),L=d(q),c=h(q,"ASIDE",{class:!0,"data-svelte-h":!0}),b(c)!=="svelte-6rnzlf"&&(c.textContent=x),this.h()},h(){w(e,"class","uppercase"),w(i,"class","flex flex-row justify-center items-start gap-8"),w(n,"class","fragment text-red-400 font-bold mt-4"),w(c,"class","notes")},m(q,D){u(q,e,D),u(q,s,D),u(q,t,D),u(q,r,D),u(q,i,D),S(m,i,null),y(i,l),S($,i,null),u(q,C,D),u(q,n,D),u(q,L,D),u(q,c,D),I=!0},p(q,D){const j={};D&1&&(j.$$scope={dirty:D,ctx:q}),m.$set(j);const V={};D&1&&(V.$$scope={dirty:D,ctx:q}),$.$set(V)},i(q){I||(P(m.$$.fragment,q),P($.$$.fragment,q),I=!0)},o(q){H(m.$$.fragment,q),H($.$$.fragment,q),I=!1},d(q){q&&(a(e),a(s),a(t),a(r),a(i),a(C),a(n),a(L),a(c)),M(m),M($)}}}function ml(_){let e=`
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
			`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function dl(_){let e,o="Étape 3 : Abstraire encore plus avec Louable",s,t,f='Véhicule et Accessoire ont des points communs → on crée <span class="text-important">Louable</span>',r,i,m,l,$=`On crée Louable qui contient prixJour, disponible, et les méthodes louer, retourner,
			calculerPrix. Véhicule hérite de Louable, et Accessoire aussi. Du coup Voiture hérite de
			Véhicule qui hérite de Louable : Voiture a TOUT !`,C;return i=new He({props:{$$slots:{default:[ml]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),T(i.$$.fragment),m=v(),l=g("aside"),l.textContent=$,this.h()},l(n){e=h(n,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-14ipspf"&&(e.textContent=o),s=d(n),t=h(n,"P",{"data-svelte-h":!0}),b(t)!=="svelte-qurtdv"&&(t.innerHTML=f),r=d(n),E(i.$$.fragment,n),m=d(n),l=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-hsu0uh"&&(l.textContent=$),this.h()},h(){w(e,"class","uppercase"),w(l,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),u(n,t,p),u(n,r,p),S(i,n,p),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),i.$set(L)},i(n){C||(P(i.$$.fragment,n),C=!0)},o(n){H(i.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(t),a(r),a(m),a(l)),M(i,n)}}}function vl(_){let e,o="Visualisons la chaîne d'héritage",s,t,f="Une <b>Voiture</b> c&#39;est quoi maintenant ?",r,i,m=`<div class="fragment p-4 bg-green-950 rounded-lg mb-2"><b>Voiture</b> hérite de <b>Véhicule</b></div> <div class="fragment text-4xl">↓</div> <div class="fragment p-4 bg-blue-950 rounded-lg mb-2"><b>Véhicule</b> hérite de <b>Louable</b></div> <div class="fragment text-4xl">↓</div> <div class="fragment p-4 bg-accent-950 rounded-lg">Donc <b>Voiture</b> a : prixJour, disponible, louer(), retourner(), km, immatriculation, nbPortes,
				nbPlaces</div>`,l,$,C="On n'a codé louer() qu'une seule fois, dans Louable !",n,p,L=`Suivons la chaîne. Voiture hérite de Véhicule. Véhicule hérite de Louable. Donc Voiture a tout
			: les attributs de Louable, plus ceux de Véhicule, plus les siens. Et surtout, la méthode
			louer() n'est codée qu'une seule fois, dans Louable. Voiture, Moto, SiègeAuto, PorteVelo...
			tous peuvent être loués avec le même code !`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),i=g("div"),i.innerHTML=m,l=v(),$=g("p"),$.textContent=C,n=v(),p=g("aside"),p.textContent=L,this.h()},l(c){e=h(c,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-13fx6rx"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1pgak5l"&&(t.innerHTML=f),r=d(c),i=h(c,"DIV",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-xx6qv0"&&(i.innerHTML=m),l=d(c),$=h(c,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-mgjp0b"&&($.textContent=C),n=d(c),p=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-b8vxpx"&&(p.textContent=L),this.h()},h(){w(e,"class","uppercase"),w(i,"class","flex flex-col items-center mt-8 text-2xl"),w($,"class","fragment text-accent-200 font-bold mt-6"),w(p,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),u(c,i,x),u(c,l,x),u(c,$,x),u(c,n,x),u(c,p,x)},p:O,d(c){c&&(a(e),a(s),a(t),a(r),a(i),a(l),a($),a(n),a(p))}}}function xl(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function _l(_){let e,o="Le code devient simple",s,t,f,r,i=`✅ Une seule méthode pour tout louer<br/>
			✅ Ajouter un nouveau type = quelques lignes<br/>
			✅ Zéro duplication de code`,m,l,$=`Regardez la puissance. Une seule méthode louer() qui fonctionne pour tout. Demain on ajoute
			VeloElectrique ? 3 lignes de code. Il hérite de tout le reste. C'est ça la vraie puissance de
			la POO : écrire moins, faire plus.`,C;return t=new se({props:{class:"java",$$slots:{default:[xl]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("p"),r.innerHTML=i,m=v(),l=g("aside"),l.textContent=$,this.h()},l(n){e=h(n,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-1bcwfrg"&&(e.textContent=o),s=d(n),E(t.$$.fragment,n),f=d(n),r=h(n,"P",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-fazfoj"&&(r.innerHTML=i),m=d(n),l=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-enkna"&&(l.textContent=$),this.h()},h(){w(e,"class","uppercase"),w(r,"class","fragment text-green-400 font-bold"),w(l,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),S(t,n,p),u(n,f,p),u(n,r,p),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),t.$set(L)},i(n){C||(P(t.$$.fragment,n),C=!0)},o(n){H(t.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(f),a(r),a(m),a(l)),M(t,n)}}}function Cl(_){let e,o="Le refactoring",s,t,f='L&#39;opération que l&#39;on vient de voir s&#39;appelle un <span class="text-important">refactoring</span>',r,i,m="C'est réorganiser le code sans changer son comportement.",l,$,C=`Si vous l&#39;aviez fait dès le départ, vous auriez gagné plus de temps que si vous devez le faire
			plus tard, c&#39;est une <u>certitude</u> !`,n,p,L=`Le refactoring, c'est améliorer la structure du code sans changer ce qu'il fait. C'est
			toujours plus facile de bien faire dès le début que de réparer après. Un code bien conçu,
			c'est des heures de debug en moins.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),i=g("p"),i.textContent=m,l=v(),$=g("p"),$.innerHTML=C,n=v(),p=g("aside"),p.textContent=L,this.h()},l(c){e=h(c,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-t8lx1u"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-u769cg"&&(t.innerHTML=f),r=d(c),i=h(c,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-1nmzwcc"&&(i.textContent=m),l=d(c),$=h(c,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-b3fier"&&($.innerHTML=C),n=d(c),p=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-v3296a"&&(p.textContent=L),this.h()},h(){w(e,"class","uppercase"),w(i,"class","fragment"),w($,"class","fragment"),w(p,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),u(c,i,x),u(c,l,x),u(c,$,x),u(c,n,x),u(c,p,x)},p:O,d(c){c&&(a(e),a(s),a(t),a(r),a(i),a(l),a($),a(n),a(p))}}}function hl(_){let e,o="BUILD vs RUN",s,t,f="Le temps d'implémentation (BUILD) augmente si vous faites beaucoup de POO",r,i,m="...mais la maintenance (RUN) coûte moins cher !",l,$,C='<div class="p-4 bg-red-950 rounded-lg"><h4 class="text-red-400">❌ Code vite fait</h4> <ul class="text-xl"><li>Rapide à écrire</li> <li>Difficile à maintenir</li> <li>Bugs fréquents</li> <li>Évolutions coûteuses</li></ul></div> <div class="p-4 bg-green-950 rounded-lg"><h4 class="text-green-400">✅ Code bien conçu</h4> <ul class="text-xl"><li>Plus long à écrire</li> <li>Facile à maintenir</li> <li>Moins de bugs</li> <li>Évolutions simples</li></ul></div>',n,p,L=`En entreprise, on parle de BUILD (le développement initial) et de RUN (la maintenance). Un
			code bien conçu coûte plus cher au BUILD mais beaucoup moins au RUN. Et le RUN, c'est souvent
			80% du coût total d'un projet !`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),i=g("p"),i.textContent=m,l=v(),$=g("div"),$.innerHTML=C,n=v(),p=g("aside"),p.textContent=L,this.h()},l(c){e=h(c,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-bv5mk1"&&(e.textContent=o),s=d(c),t=h(c,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-10nhqsg"&&(t.textContent=f),r=d(c),i=h(c,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-ywkeo"&&(i.textContent=m),l=d(c),$=h(c,"DIV",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-4svqpn"&&($.innerHTML=C),n=d(c),p=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-wpatcb"&&(p.textContent=L),this.h()},h(){w(e,"class","uppercase"),w(t,"class","text-important"),w(i,"class","fragment"),w($,"class","fragment grid grid-cols-2 gap-8 mt-8"),w(p,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),u(c,i,x),u(c,l,x),u(c,$,x),u(c,n,x),u(c,p,x)},p:O,d(c){c&&(a(e),a(s),a(t),a(r),a(i),a(l),a($),a(n),a(p))}}}function gl(_){let e,o="L'équilibre à trouver",s,t,f="Un <i>bon</i> ingénieur logiciel sait jusqu&#39;à quel niveau il convient d&#39;abstraire",r,i,m='<li class="fragment">❌ <b>Pas assez d&#39;abstraction :</b> vous devez tout casser pour ajouter une fonctionnalité</li> <li class="fragment">❌ <b>Trop d&#39;abstraction :</b> votre client paie pour du code qu&#39;il n&#39;utilisera jamais</li>',l,$,C="En entreprise, tout est question d'équilibre et vient avec l'expérience.",n,p,L=`C'est un équilibre à trouver. Pas assez d'abstraction, et chaque évolution est un cauchemar.
			Trop d'abstraction, et vous passez des semaines à coder des trucs inutiles. Ça vient avec
			l'expérience, avec les projets, avec les erreurs qu'on fait.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),i=g("ul"),i.innerHTML=m,l=v(),$=g("p"),$.textContent=C,n=v(),p=g("aside"),p.textContent=L,this.h()},l(c){e=h(c,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-1082o8n"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1yhe1kd"&&(t.innerHTML=f),r=d(c),i=h(c,"UL",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-1veku0x"&&(i.innerHTML=m),l=d(c),$=h(c,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-b8ucny"&&($.textContent=C),n=d(c),p=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-11bqu54"&&(p.textContent=L),this.h()},h(){w(e,"class","uppercase"),w(i,"class","mt-8"),w($,"class","fragment mt-8"),w(p,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),u(c,i,x),u(c,l,x),u(c,$,x),u(c,n,x),u(c,p,x)},p:O,d(c){c&&(a(e),a(s),a(t),a(r),a(i),a(l),a($),a(n),a(p))}}}function bl(_){let e,o="Dans ce module",s,t,f="Faites le plus de zèle possible, exagérez !",r,i,m="C'est en allant trop loin qu'on apprend où sont les limites.",l,$,C="Vous apprendrez à doser en entreprise, avec de vrais projets et de vraies contraintes.",n,p,L=`Dans ce module, je vous encourage à en faire trop. Abstraire partout, hériter de tout. C'est
			comme ça qu'on apprend où sont les limites. En entreprise, vous aurez des contraintes de
			temps, de budget. Là, vous apprendrez à doser. Ici, c'est le moment d'expérimenter.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),i=g("p"),i.textContent=m,l=v(),$=g("p"),$.textContent=C,n=v(),p=g("aside"),p.textContent=L,this.h()},l(c){e=h(c,"H3",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-x5naxz"&&(e.textContent=o),s=d(c),t=h(c,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1as3wu1"&&(t.textContent=f),r=d(c),i=h(c,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-lvdult"&&(i.textContent=m),l=d(c),$=h(c,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-1akob0d"&&($.textContent=C),n=d(c),p=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-kluukh"&&(p.textContent=L),this.h()},h(){w(e,"class","uppercase"),w(t,"class","text-important text-4xl"),w(i,"class","fragment mt-8 text-2xl"),w($,"class","fragment text-2xl"),w(p,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),u(c,i,x),u(c,l,x),u(c,$,x),u(c,n,x),u(c,p,x)},p:O,d(c){c&&(a(e),a(s),a(t),a(r),a(i),a(l),a($),a(n),a(p))}}}function Ll(_){let e,o="Récapitulatif",s,t,f='<div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">📦 RANGER</h4> <p class="text-xl">Données + méthodes<br/>dans un même objet</p></div> <div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">🔒 PROTÉGER</h4> <p class="text-xl">Chaque méthode n&#39;accède<br/>qu&#39;à son objet</p></div> <div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">🌳 GÉNÉRALISER</h4> <p class="text-xl">Héritage et abstraction<br/>pour réutiliser le code</p></div>',r,i,m=`On récapitule. La POO c'est 3 piliers. Ranger : on met ensemble ce qui va ensemble. Protéger :
			chaque méthode ne touche qu'à son objet, le compilateur vous aide. Généraliser : on écrit le
			code une fois, on le réutilise partout grâce à l'héritage.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-j5vxp9"&&(e.textContent=o),s=d(l),t=h(l,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-acu1zb"&&(t.innerHTML=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-17zzt5h"&&(i.textContent=m),this.h()},h(){w(t,"class","flex flex-row justify-around items-start mt-8"),w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function wl(_){let e,o="La POO, c'est quoi au final ?",s,t,f="Vous venez d'être confronté aux concepts fondamentaux de la POO :",r,i,m='<li><span class="text-important">L&#39;encapsulation</span> : ranger et protéger les données</li> <li><span class="text-important">L&#39;abstraction</span> : généraliser les concepts</li> <li><span class="text-important">L&#39;héritage</span> : réutiliser le code des parents</li>',l,$,C="Nous allons voir ces concepts en détail dans les chapitres suivants.",n,p,L=`On a vu les bases. Encapsulation, abstraction, héritage. Ce sont les piliers de la POO, et on
			va les approfondir tout au long du module. Chaque chapitre va détailler un de ces concepts.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),i=g("ul"),i.innerHTML=m,l=v(),$=g("p"),$.textContent=C,n=v(),p=g("aside"),p.textContent=L,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-5i67l6"&&(e.textContent=o),s=d(c),t=h(c,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1vfopav"&&(t.textContent=f),r=d(c),i=h(c,"UL",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-i42s8"&&(i.innerHTML=m),l=d(c),$=h(c,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-ko3lge"&&($.textContent=C),n=d(c),p=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-b4p3e"&&(p.textContent=L),this.h()},h(){w(t,"class","fragment"),w(i,"class","fragment text-2xl mt-4"),w($,"class","fragment mt-8"),w(p,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),u(c,i,x),u(c,l,x),u(c,$,x),u(c,n,x),u(c,p,x)},p:O,d(c){c&&(a(e),a(s),a(t),a(r),a(i),a(l),a($),a(n),a(p))}}}function ql(_){let e,o="Retenez ceci",s,t,f='La POO est un <span class="text-important">&quot;outil&quot;</span>.',r,i,m=`Si vous faites du Java, même en codant mal, vous faites de la POO compte tenu de la nature du
			langage.`,l,$,C=`Si la programmation n&#39;est qu&#39;une suite de blocs de code tels des <b>légos</b>, la POO, c&#39;est
			fabriquer des blocs <span class="text-important">intelligemment</span>
			que vous réutilisez, peu importe que vous construisiez un pont ou une maison.`,n,p,L=`La POO c'est un outil, pas une obligation. Mais c'est un outil puissant. En Java, vous faites
			de la POO que vous le vouliez ou non, c'est la nature du langage. L'idée c'est de fabriquer
			des briques réutilisables. Comme des légos bien conçus. Une brique "Véhicule" peut servir pour
			une voiture aujourd'hui, une moto demain, un vaisseau spatial dans 5 ans.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),i=g("p"),i.textContent=m,l=v(),$=g("p"),$.innerHTML=C,n=v(),p=g("aside"),p.textContent=L,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-79cey5"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-i0a1q0"&&(t.innerHTML=f),r=d(c),i=h(c,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-18j8tnm"&&(i.textContent=m),l=d(c),$=h(c,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-1ugi8k9"&&($.innerHTML=C),n=d(c),p=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-kw89mq"&&(p.textContent=L),this.h()},h(){w(i,"class","fragment"),w($,"class","fragment mt-8 text-2xl bg-accent-950 p-4 rounded-lg"),w(p,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),u(c,i,x),u(c,l,x),u(c,$,x),u(c,n,x),u(c,p,x)},p:O,d(c){c&&(a(e),a(s),a(t),a(r),a(i),a(l),a($),a(n),a(p))}}}function Ml(_){let e,o="À vous de jouer !",s,t,f="Dans les prochains chapitres, nous allons :",r,i,m='<li class="fragment">📦 Approfondir l&#39;<b>encapsulation</b> et la visibilité</li> <li class="fragment">🔗 Maîtriser l&#39;<b>héritage</b> et le polymorphisme</li> <li class="fragment">📋 Découvrir les <b>interfaces</b> et les classes abstraites</li> <li class="fragment">🎨 Apprendre les <b>Design Patterns</b> classiques</li>',l,$,C=`C'est parti pour la suite ! On va approfondir chaque concept. L'encapsulation, l'héritage, les
			interfaces, et même les Design Patterns. À la fin du module, vous saurez concevoir du code
			propre, évolutif, maintenable.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),i=g("ul"),i.innerHTML=m,l=v(),$=g("aside"),$.textContent=C,this.h()},l(n){e=h(n,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-cgpepy"&&(e.textContent=o),s=d(n),t=h(n,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-16xre1k"&&(t.textContent=f),r=d(n),i=h(n,"UL",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-m1w35p"&&(i.innerHTML=m),l=d(n),$=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-1kgc7yy"&&($.textContent=C),this.h()},h(){w(t,"class","text-3xl mt-8"),w(i,"class","text-2xl mt-4"),w($,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),u(n,t,p),u(n,r,p),u(n,i,p),u(n,l,p),u(n,$,p)},p:O,d(n){n&&(a(e),a(s),a(t),a(r),a(i),a(l),a($))}}}function Hl(_){let e,o,s,t,f,r,i,m,l,$,C,n,p,L,c,x,I,q,D,j,V,W,z,U,te,A,F,ce,pe,me,_e,oe,ve,fe,xe,G,ne,Q,ue,K,re,Ce,X,$e,he,J,ie,B,ae,Le,we,qe,Me,N,le,Ie,Te,ze,Ae,Ue,je,Ne,De,Je,ke,Be,Oe,Fe,Ve,Qe,Re,Ke,Ge,Xe;return e=new R({props:{$$slots:{default:[Hs]},$$scope:{ctx:_}}}),s=new R({props:{$$slots:{default:[Ps]},$$scope:{ctx:_}}}),f=new R({props:{$$slots:{default:[Ss]},$$scope:{ctx:_}}}),i=new R({props:{data_background_color:"#1a1a2e",$$slots:{default:[Es]},$$scope:{ctx:_}}}),l=new R({props:{$$slots:{default:[As]},$$scope:{ctx:_}}}),C=new R({props:{$$slots:{default:[js]},$$scope:{ctx:_}}}),p=new R({props:{$$slots:{default:[Ds]},$$scope:{ctx:_}}}),c=new R({props:{$$slots:{default:[ks]},$$scope:{ctx:_}}}),I=new R({props:{data_background_color:"#1a1a2e",$$slots:{default:[Os]},$$scope:{ctx:_}}}),D=new R({props:{$$slots:{default:[Vs]},$$scope:{ctx:_}}}),V=new R({props:{$$slots:{default:[Us]},$$scope:{ctx:_}}}),z=new R({props:{$$slots:{default:[Js]},$$scope:{ctx:_}}}),te=new R({props:{$$slots:{default:[Gs]},$$scope:{ctx:_}}}),F=new R({props:{$$slots:{default:[Xs]},$$scope:{ctx:_}}}),pe=new R({props:{$$slots:{default:[Ws]},$$scope:{ctx:_}}}),_e=new R({props:{data_background_color:"#1a1a2e",$$slots:{default:[Ys]},$$scope:{ctx:_}}}),ve=new R({props:{$$slots:{default:[Zs]},$$scope:{ctx:_}}}),xe=new R({props:{$$slots:{default:[ys]},$$scope:{ctx:_}}}),ne=new R({props:{$$slots:{default:[sl]},$$scope:{ctx:_}}}),ue=new R({props:{$$slots:{default:[ll]},$$scope:{ctx:_}}}),re=new R({props:{$$slots:{default:[nl]},$$scope:{ctx:_}}}),X=new R({props:{$$slots:{default:[il]},$$scope:{ctx:_}}}),he=new R({props:{$$slots:{default:[al]},$$scope:{ctx:_}}}),ie=new R({props:{$$slots:{default:[ul]},$$scope:{ctx:_}}}),ae=new R({props:{$$slots:{default:[cl]},$$scope:{ctx:_}}}),we=new R({props:{$$slots:{default:[pl]},$$scope:{ctx:_}}}),Me=new R({props:{$$slots:{default:[dl]},$$scope:{ctx:_}}}),le=new R({props:{$$slots:{default:[vl]},$$scope:{ctx:_}}}),Te=new R({props:{$$slots:{default:[_l]},$$scope:{ctx:_}}}),Ae=new R({props:{data_background_color:"#00353F",$$slots:{default:[Cl]},$$scope:{ctx:_}}}),je=new R({props:{data_background_color:"#00353F",$$slots:{default:[hl]},$$scope:{ctx:_}}}),De=new R({props:{data_background_color:"#00353F",$$slots:{default:[gl]},$$scope:{ctx:_}}}),ke=new R({props:{data_background_color:"#00353F",$$slots:{default:[bl]},$$scope:{ctx:_}}}),Oe=new R({props:{$$slots:{default:[Ll]},$$scope:{ctx:_}}}),Ve=new R({props:{$$slots:{default:[wl]},$$scope:{ctx:_}}}),Re=new R({props:{$$slots:{default:[ql]},$$scope:{ctx:_}}}),Ge=new R({props:{$$slots:{default:[Ml]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment),o=v(),T(s.$$.fragment),t=v(),T(f.$$.fragment),r=v(),T(i.$$.fragment),m=v(),T(l.$$.fragment),$=v(),T(C.$$.fragment),n=v(),T(p.$$.fragment),L=v(),T(c.$$.fragment),x=v(),T(I.$$.fragment),q=v(),T(D.$$.fragment),j=v(),T(V.$$.fragment),W=v(),T(z.$$.fragment),U=v(),T(te.$$.fragment),A=v(),T(F.$$.fragment),ce=v(),T(pe.$$.fragment),me=v(),T(_e.$$.fragment),oe=v(),T(ve.$$.fragment),fe=v(),T(xe.$$.fragment),G=v(),T(ne.$$.fragment),Q=v(),T(ue.$$.fragment),K=v(),T(re.$$.fragment),Ce=v(),T(X.$$.fragment),$e=v(),T(he.$$.fragment),J=v(),T(ie.$$.fragment),B=v(),T(ae.$$.fragment),Le=v(),T(we.$$.fragment),qe=v(),T(Me.$$.fragment),N=v(),T(le.$$.fragment),Ie=v(),T(Te.$$.fragment),ze=v(),T(Ae.$$.fragment),Ue=v(),T(je.$$.fragment),Ne=v(),T(De.$$.fragment),Je=v(),T(ke.$$.fragment),Be=v(),T(Oe.$$.fragment),Fe=v(),T(Ve.$$.fragment),Qe=v(),T(Re.$$.fragment),Ke=v(),T(Ge.$$.fragment)},l(k){E(e.$$.fragment,k),o=d(k),E(s.$$.fragment,k),t=d(k),E(f.$$.fragment,k),r=d(k),E(i.$$.fragment,k),m=d(k),E(l.$$.fragment,k),$=d(k),E(C.$$.fragment,k),n=d(k),E(p.$$.fragment,k),L=d(k),E(c.$$.fragment,k),x=d(k),E(I.$$.fragment,k),q=d(k),E(D.$$.fragment,k),j=d(k),E(V.$$.fragment,k),W=d(k),E(z.$$.fragment,k),U=d(k),E(te.$$.fragment,k),A=d(k),E(F.$$.fragment,k),ce=d(k),E(pe.$$.fragment,k),me=d(k),E(_e.$$.fragment,k),oe=d(k),E(ve.$$.fragment,k),fe=d(k),E(xe.$$.fragment,k),G=d(k),E(ne.$$.fragment,k),Q=d(k),E(ue.$$.fragment,k),K=d(k),E(re.$$.fragment,k),Ce=d(k),E(X.$$.fragment,k),$e=d(k),E(he.$$.fragment,k),J=d(k),E(ie.$$.fragment,k),B=d(k),E(ae.$$.fragment,k),Le=d(k),E(we.$$.fragment,k),qe=d(k),E(Me.$$.fragment,k),N=d(k),E(le.$$.fragment,k),Ie=d(k),E(Te.$$.fragment,k),ze=d(k),E(Ae.$$.fragment,k),Ue=d(k),E(je.$$.fragment,k),Ne=d(k),E(De.$$.fragment,k),Je=d(k),E(ke.$$.fragment,k),Be=d(k),E(Oe.$$.fragment,k),Fe=d(k),E(Ve.$$.fragment,k),Qe=d(k),E(Re.$$.fragment,k),Ke=d(k),E(Ge.$$.fragment,k)},m(k,ee){S(e,k,ee),u(k,o,ee),S(s,k,ee),u(k,t,ee),S(f,k,ee),u(k,r,ee),S(i,k,ee),u(k,m,ee),S(l,k,ee),u(k,$,ee),S(C,k,ee),u(k,n,ee),S(p,k,ee),u(k,L,ee),S(c,k,ee),u(k,x,ee),S(I,k,ee),u(k,q,ee),S(D,k,ee),u(k,j,ee),S(V,k,ee),u(k,W,ee),S(z,k,ee),u(k,U,ee),S(te,k,ee),u(k,A,ee),S(F,k,ee),u(k,ce,ee),S(pe,k,ee),u(k,me,ee),S(_e,k,ee),u(k,oe,ee),S(ve,k,ee),u(k,fe,ee),S(xe,k,ee),u(k,G,ee),S(ne,k,ee),u(k,Q,ee),S(ue,k,ee),u(k,K,ee),S(re,k,ee),u(k,Ce,ee),S(X,k,ee),u(k,$e,ee),S(he,k,ee),u(k,J,ee),S(ie,k,ee),u(k,B,ee),S(ae,k,ee),u(k,Le,ee),S(we,k,ee),u(k,qe,ee),S(Me,k,ee),u(k,N,ee),S(le,k,ee),u(k,Ie,ee),S(Te,k,ee),u(k,ze,ee),S(Ae,k,ee),u(k,Ue,ee),S(je,k,ee),u(k,Ne,ee),S(De,k,ee),u(k,Je,ee),S(ke,k,ee),u(k,Be,ee),S(Oe,k,ee),u(k,Fe,ee),S(Ve,k,ee),u(k,Qe,ee),S(Re,k,ee),u(k,Ke,ee),S(Ge,k,ee),Xe=!0},p(k,ee){const We={};ee&1&&(We.$$scope={dirty:ee,ctx:k}),e.$set(We);const Ye={};ee&1&&(Ye.$$scope={dirty:ee,ctx:k}),s.$set(Ye);const Ze={};ee&1&&(Ze.$$scope={dirty:ee,ctx:k}),f.$set(Ze);const ye={};ee&1&&(ye.$$scope={dirty:ee,ctx:k}),i.$set(ye);const tt={};ee&1&&(tt.$$scope={dirty:ee,ctx:k}),l.$set(tt);const st={};ee&1&&(st.$$scope={dirty:ee,ctx:k}),C.$set(st);const lt={};ee&1&&(lt.$$scope={dirty:ee,ctx:k}),p.$set(lt);const nt={};ee&1&&(nt.$$scope={dirty:ee,ctx:k}),c.$set(nt);const it={};ee&1&&(it.$$scope={dirty:ee,ctx:k}),I.$set(it);const at={};ee&1&&(at.$$scope={dirty:ee,ctx:k}),D.$set(at);const rt={};ee&1&&(rt.$$scope={dirty:ee,ctx:k}),V.$set(rt);const ut={};ee&1&&(ut.$$scope={dirty:ee,ctx:k}),z.$set(ut);const ot={};ee&1&&(ot.$$scope={dirty:ee,ctx:k}),te.$set(ot);const ct={};ee&1&&(ct.$$scope={dirty:ee,ctx:k}),F.$set(ct);const $t={};ee&1&&($t.$$scope={dirty:ee,ctx:k}),pe.$set($t);const ft={};ee&1&&(ft.$$scope={dirty:ee,ctx:k}),_e.$set(ft);const pt={};ee&1&&(pt.$$scope={dirty:ee,ctx:k}),ve.$set(pt);const mt={};ee&1&&(mt.$$scope={dirty:ee,ctx:k}),xe.$set(mt);const dt={};ee&1&&(dt.$$scope={dirty:ee,ctx:k}),ne.$set(dt);const vt={};ee&1&&(vt.$$scope={dirty:ee,ctx:k}),ue.$set(vt);const xt={};ee&1&&(xt.$$scope={dirty:ee,ctx:k}),re.$set(xt);const _t={};ee&1&&(_t.$$scope={dirty:ee,ctx:k}),X.$set(_t);const Ct={};ee&1&&(Ct.$$scope={dirty:ee,ctx:k}),he.$set(Ct);const ht={};ee&1&&(ht.$$scope={dirty:ee,ctx:k}),ie.$set(ht);const gt={};ee&1&&(gt.$$scope={dirty:ee,ctx:k}),ae.$set(gt);const bt={};ee&1&&(bt.$$scope={dirty:ee,ctx:k}),we.$set(bt);const Lt={};ee&1&&(Lt.$$scope={dirty:ee,ctx:k}),Me.$set(Lt);const wt={};ee&1&&(wt.$$scope={dirty:ee,ctx:k}),le.$set(wt);const qt={};ee&1&&(qt.$$scope={dirty:ee,ctx:k}),Te.$set(qt);const Mt={};ee&1&&(Mt.$$scope={dirty:ee,ctx:k}),Ae.$set(Mt);const Ht={};ee&1&&(Ht.$$scope={dirty:ee,ctx:k}),je.$set(Ht);const Pt={};ee&1&&(Pt.$$scope={dirty:ee,ctx:k}),De.$set(Pt);const St={};ee&1&&(St.$$scope={dirty:ee,ctx:k}),ke.$set(St);const Et={};ee&1&&(Et.$$scope={dirty:ee,ctx:k}),Oe.$set(Et);const Tt={};ee&1&&(Tt.$$scope={dirty:ee,ctx:k}),Ve.$set(Tt);const At={};ee&1&&(At.$$scope={dirty:ee,ctx:k}),Re.$set(At);const It={};ee&1&&(It.$$scope={dirty:ee,ctx:k}),Ge.$set(It)},i(k){Xe||(P(e.$$.fragment,k),P(s.$$.fragment,k),P(f.$$.fragment,k),P(i.$$.fragment,k),P(l.$$.fragment,k),P(C.$$.fragment,k),P(p.$$.fragment,k),P(c.$$.fragment,k),P(I.$$.fragment,k),P(D.$$.fragment,k),P(V.$$.fragment,k),P(z.$$.fragment,k),P(te.$$.fragment,k),P(F.$$.fragment,k),P(pe.$$.fragment,k),P(_e.$$.fragment,k),P(ve.$$.fragment,k),P(xe.$$.fragment,k),P(ne.$$.fragment,k),P(ue.$$.fragment,k),P(re.$$.fragment,k),P(X.$$.fragment,k),P(he.$$.fragment,k),P(ie.$$.fragment,k),P(ae.$$.fragment,k),P(we.$$.fragment,k),P(Me.$$.fragment,k),P(le.$$.fragment,k),P(Te.$$.fragment,k),P(Ae.$$.fragment,k),P(je.$$.fragment,k),P(De.$$.fragment,k),P(ke.$$.fragment,k),P(Oe.$$.fragment,k),P(Ve.$$.fragment,k),P(Re.$$.fragment,k),P(Ge.$$.fragment,k),Xe=!0)},o(k){H(e.$$.fragment,k),H(s.$$.fragment,k),H(f.$$.fragment,k),H(i.$$.fragment,k),H(l.$$.fragment,k),H(C.$$.fragment,k),H(p.$$.fragment,k),H(c.$$.fragment,k),H(I.$$.fragment,k),H(D.$$.fragment,k),H(V.$$.fragment,k),H(z.$$.fragment,k),H(te.$$.fragment,k),H(F.$$.fragment,k),H(pe.$$.fragment,k),H(_e.$$.fragment,k),H(ve.$$.fragment,k),H(xe.$$.fragment,k),H(ne.$$.fragment,k),H(ue.$$.fragment,k),H(re.$$.fragment,k),H(X.$$.fragment,k),H(he.$$.fragment,k),H(ie.$$.fragment,k),H(ae.$$.fragment,k),H(we.$$.fragment,k),H(Me.$$.fragment,k),H(le.$$.fragment,k),H(Te.$$.fragment,k),H(Ae.$$.fragment,k),H(je.$$.fragment,k),H(De.$$.fragment,k),H(ke.$$.fragment,k),H(Oe.$$.fragment,k),H(Ve.$$.fragment,k),H(Re.$$.fragment,k),H(Ge.$$.fragment,k),Xe=!1},d(k){k&&(a(o),a(t),a(r),a(m),a($),a(n),a(L),a(x),a(q),a(j),a(W),a(U),a(A),a(ce),a(me),a(oe),a(fe),a(G),a(Q),a(K),a(Ce),a($e),a(J),a(B),a(Le),a(qe),a(N),a(Ie),a(ze),a(Ue),a(Ne),a(Je),a(Be),a(Fe),a(Qe),a(Ke)),M(e,k),M(s,k),M(f,k),M(i,k),M(l,k),M(C,k),M(p,k),M(c,k),M(I,k),M(D,k),M(V,k),M(z,k),M(te,k),M(F,k),M(pe,k),M(_e,k),M(ve,k),M(xe,k),M(ne,k),M(ue,k),M(re,k),M(X,k),M(he,k),M(ie,k),M(ae,k),M(we,k),M(Me,k),M(le,k),M(Te,k),M(Ae,k),M(je,k),M(De,k),M(ke,k),M(Oe,k),M(Ve,k),M(Re,k),M(Ge,k)}}}function Pl(_){let e,o;return e=new R({props:{$$slots:{default:[Hl]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){E(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const f={};t&1&&(f.$$scope={dirty:t,ctx:s}),e.$set(f)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){H(e.$$.fragment,s),o=!1},d(s){M(e,s)}}}class Sl extends Se{constructor(e){super(),Ee(this,e,null,Pl,Pe,{})}}function El(_){let e,o="Et si on ne veut pas hériter ?",s,t,f="L'héritage, c'est puissant... mais pas toujours adapté.",r,i,m='<p class="text-2xl">🤔 Une Voiture <b>est un</b> Moteur ?</p> <p class="text-red-400 text-3xl fragment">❌ Non !</p>',l,$,C='<p class="text-2xl">🤔 Une Voiture <b>a un</b> Moteur ?</p> <p class="text-green-400 text-3xl fragment">✅ Oui !</p>',n,p,L='C&#39;est la <span class="text-important">composition</span> !';return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),i=g("div"),i.innerHTML=m,l=v(),$=g("div"),$.innerHTML=C,n=v(),p=g("p"),p.innerHTML=L,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-kyeugj"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-135l6z7"&&(t.textContent=f),r=d(c),i=h(c,"DIV",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-bjhwhv"&&(i.innerHTML=m),l=d(c),$=h(c,"DIV",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-1iidfrd"&&($.innerHTML=C),n=d(c),p=h(c,"P",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-11ppavm"&&(p.innerHTML=L),this.h()},h(){w(i,"class","fragment mt-8"),w($,"class","fragment mt-4"),w(p,"class","fragment mt-8 text-accent-200 font-bold")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),u(c,i,x),u(c,l,x),u(c,$,x),u(c,n,x),u(c,p,x)},p:O,d(c){c&&(a(e),a(s),a(t),a(r),a(i),a(l),a($),a(n),a(p))}}}function Tl(_){let e,o="Qu'est-ce que la composition ?",s,t,f="La composition permet de créer des objets complexes en combinant des objets plus simples.",r,i,m="C&#39;est comme assembler des <b>briques Lego</b> pour construire une structure plus grande.",l,$,C='En POO, la composition consiste à avoir des <span class="text-important">instances de classes en tant qu&#39;attributs</span> d&#39;une autre classe.',n,p,L=`Si vous connaissez les bases de données, c'est comme une clé étrangère. Un objet "possède" un
			autre objet.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),i=g("p"),i.innerHTML=m,l=v(),$=g("p"),$.innerHTML=C,n=v(),p=g("aside"),p.textContent=L,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1ey692r"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1j30nsj"&&(t.textContent=f),r=d(c),i=h(c,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-12yvhve"&&(i.innerHTML=m),l=d(c),$=h(c,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-1dofonx"&&($.innerHTML=C),n=d(c),p=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-1gjj4rn"&&(p.textContent=L),this.h()},h(){w(i,"class","fragment mt-4"),w($,"class","fragment mt-4"),w(p,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),u(c,i,x),u(c,l,x),u(c,$,x),u(c,n,x),u(c,p,x)},p:O,d(c){c&&(a(e),a(s),a(t),a(r),a(i),a(l),a($),a(n),a(p))}}}function Al(_){let e,o="Comment choisir : Héritage ou Composition ?",s,t,f='<div class="p-6 bg-accent-950 rounded-lg"><p class="fragment">🤔 &quot;Est-ce qu&#39;un X <b class="text-important">est un</b> Y ?&quot;</p> <p class="fragment text-green-400 ml-8">→ OUI : <b>Héritage</b> (extends)</p> <p class="fragment text-red-400 ml-8">→ NON : ↓</p> <p class="fragment mt-4">🤔 &quot;Est-ce qu&#39;un X <b class="text-important">a un</b> Y ?&quot;</p> <p class="fragment text-blue-400 ml-8">→ OUI : <b>Composition</b> (attribut)</p></div>',r,i,m=`C'est LA règle d'or. Apprenez-la par cœur. Si "X est un Y" sonne faux, n'héritez pas,
			composez.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1jpzxsy"&&(e.textContent=o),s=d(l),t=h(l,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1t58sxf"&&(t.innerHTML=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-1bu2hun"&&(i.textContent=m),this.h()},h(){w(t,"class","text-2xl mt-8"),w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function Il(_){let e,o="Exemples concrets",s,t,f='<thead><tr><th class="p-3">Question</th> <th class="p-3">Réponse</th> <th class="p-3">Relation</th></tr></thead> <tbody><tr class="fragment"><td class="p-3">Un Chien <b>est un</b> Animal ?</td> <td class="p-3 text-green-400">✅ Oui</td> <td class="p-3">Héritage</td></tr> <tr class="fragment"><td class="p-3">Une Voiture <b>est un</b> Moteur ?</td> <td class="p-3 text-red-400">❌ Non</td> <td class="p-3">-</td></tr> <tr class="fragment"><td class="p-3">Une Voiture <b>a un</b> Moteur ?</td> <td class="p-3 text-green-400">✅ Oui</td> <td class="p-3">Composition</td></tr> <tr class="fragment"><td class="p-3">Un Maître <b>a un</b> Animal ?</td> <td class="p-3 text-green-400">✅ Oui</td> <td class="p-3">Composition</td></tr></tbody>',r,i,m=`Faites cet exercice mental à chaque fois que vous modélisez. C'est automatique avec
			l'expérience. En entretien d'embauche, on vous demande souvent : "Pourquoi avoir choisi
			héritage ou composition ici ?" Réponse : "Parce que dire 'Une Voiture est un Moteur' n'a pas
			de sens."`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("table"),t.innerHTML=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1yrhyzi"&&(e.textContent=o),s=d(l),t=h(l,"TABLE",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1lueyjo"&&(t.innerHTML=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-ig6cyi"&&(i.textContent=m),this.h()},h(){w(t,"class","text-xl mt-6"),w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function jl(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Dl(_){let e,o="Exemple : Voiture et Moteur",s,t,f,r,i=`Le losange plein (◆) indique une <span class="text-important">composition</span> : la Voiture
			<b>possède</b> le Moteur.`,m;return t=new He({props:{$$slots:{default:[jl]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("p"),r.innerHTML=i,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-12o3qzv"&&(e.textContent=o),s=d(l),E(t.$$.fragment,l),f=d(l),r=h(l,"P",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-o544v4"&&(r.innerHTML=i),this.h()},h(){w(r,"class","fragment")},m(l,$){u(l,e,$),u(l,s,$),S(t,l,$),u(l,f,$),u(l,r,$),m=!0},p(l,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:l}),t.$set(C)},i(l){m||(P(t.$$.fragment,l),m=!0)},o(l){H(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a(f),a(r)),M(t,l)}}}function kl(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Ol(_){let e,o="En code Java",s,t,f;return t=new se({props:{lines:"1-8|10-20|22-25",$$slots:{default:[kl]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(r){e=h(r,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1w10xpg"&&(e.textContent=o),s=d(r),E(t.$$.fragment,r)},m(r,i){u(r,e,i),u(r,s,i),S(t,r,i),f=!0},p(r,i){const m={};i&1&&(m.$$scope={dirty:i,ctx:r}),t.$set(m)},i(r){f||(P(t.$$.fragment,r),f=!0)},o(r){H(t.$$.fragment,r),f=!1},d(r){r&&(a(e),a(s)),M(t,r)}}}function zl(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Vl(_){let e,o="Avantage : flexibilité",s,t,f="La composition favorise la <b>réutilisation</b> et la <b>flexibilité</b>.",r,i,m,l,$="On peut changer le moteur sans modifier la classe Voiture !",C,n,p=`C'est le principe "Composition over Inheritance" du Gang of Four. Préférez composer plutôt
			qu'hériter. L'héritage crée un couplage fort. La composition permet de changer de stratégie à
			l'exécution. C'est la base de nombreux Design Patterns : Strategy, Decorator, Adapter...`,L;return i=new se({props:{$$slots:{default:[zl]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),T(i.$$.fragment),m=v(),l=g("p"),l.textContent=$,C=v(),n=g("aside"),n.textContent=p,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1y64iq2"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-mbviv2"&&(t.innerHTML=f),r=d(c),E(i.$$.fragment,c),m=d(c),l=h(c,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-ybembw"&&(l.textContent=$),C=d(c),n=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1bwcsiy"&&(n.textContent=p),this.h()},h(){w(l,"class","fragment text-accent-200"),w(n,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),S(i,c,x),u(c,m,x),u(c,l,x),u(c,C,x),u(c,n,x),L=!0},p(c,x){const I={};x&1&&(I.$$scope={dirty:x,ctx:c}),i.$set(I)},i(c){L||(P(i.$$.fragment,c),L=!0)},o(c){H(i.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(r),a(m),a(l),a(C),a(n)),M(i,c)}}}function Rl(_){let e,o="Les deux relations fondamentales",s,t,f="Le cœur de l'architecture objet",r,i,m=`Tout le reste de la POO découle de ces deux relations. Maîtrisez-les et vous maîtrisez 80% de
			l'architecture objet. Quand vous lisez du code, cherchez ces relations. Quand vous concevez,
			posez-vous ces questions.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"H2",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-fh7ab8"&&(e.textContent=o),s=d(l),t=h(l,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1cmiiew"&&(t.textContent=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-tu4ua3"&&(i.textContent=m),this.h()},h(){w(e,"class","text-5xl"),w(t,"class","text-2xl text-gray-400"),w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function Ul(_){let e,o=`<p>L&#39;un des intérêts de la POO réside dans les <b>relations</b> entre les objets. Ces relations
				constituent l&#39;<span class="text-important">architecture</span> de votre application.</p> <dl class="mt-6 text-xl"><dt class="fragment"><strong class="text-important">&quot;est un&quot;</strong> (<em>is-a</em>)</dt><dd class="fragment ml-8"><p>Une classe peut être assimilée à une autre, plus générale. → <span class="text-important">Héritage</span></p> </dd><dt class="fragment mt-4"><strong class="text-important">&quot;a un&quot;</strong> (<em>has-a</em>)
				</dt><dd class="fragment ml-8"><p>Une classe dépend des services d&#39;une autre. → <span class="text-important">Composition</span></p></dd></dl>`,s,t,f=`Ces termes viennent de l'anglais et sont utilisés mondialement. Apprenez "is-a" et "has-a".
			Quand vous modélisez, reformulez toujours en français : "Un X est-il un Y ?" "Un X a-t-il un Y
			?" La réponse vous dit quelle relation utiliser. C'est mécanique.`;return{c(){e=g("div"),e.innerHTML=o,s=v(),t=g("aside"),t.textContent=f,this.h()},l(r){e=h(r,"DIV",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-1hproaj"&&(e.innerHTML=o),s=d(r),t=h(r,"ASIDE",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-db092m"&&(t.textContent=f),this.h()},h(){w(e,"class",""),w(t,"class","notes")},m(r,i){u(r,e,i),u(r,s,i),u(r,t,i)},p:O,d(r){r&&(a(e),a(s),a(t))}}}function Nl(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Jl(_){let e,o="Exemple : Maître et Animal",s,t,f="Un Maître <b>a un</b> Animal (composition), et l&#39;Animal peut être un Chien ou un Chat (héritage).",r,i,m,l,$=`Cet exemple combine les deux concepts. C'est typique d'une architecture réelle. Le Maître ne
			connaît pas le type exact de son animal. Il sait juste que c'est un Animal. C'est de
			l'injection de dépendance avant l'heure ! Les frameworks comme Spring font exactement ça.`,C;return i=new He({props:{$$slots:{default:[Nl]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),T(i.$$.fragment),m=v(),l=g("aside"),l.textContent=$,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1defcuq"&&(e.textContent=o),s=d(n),t=h(n,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1vsft0l"&&(t.innerHTML=f),r=d(n),E(i.$$.fragment,n),m=d(n),l=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-6gtlgp"&&(l.textContent=$),this.h()},h(){w(l,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),u(n,t,p),u(n,r,p),S(i,n,p),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),i.$set(L)},i(n){C||(P(i.$$.fragment,n),C=!0)},o(n){H(i.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(t),a(r),a(m),a(l)),M(i,n)}}}function Bl(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Fl(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Gl(_){let e,o="En code Java",s,t,f,r,i,m;return f=new se({props:{class:"language-java",$$slots:{default:[Bl]},$$scope:{ctx:_}}}),i=new se({props:{class:"language-java",$$slots:{default:[Fl]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),T(f.$$.fragment),r=v(),T(i.$$.fragment),this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1w10xpg"&&(e.textContent=o),s=d(l),t=h(l,"DIV",{class:!0});var $=de(t);E(f.$$.fragment,$),r=d($),E(i.$$.fragment,$),$.forEach(a),this.h()},h(){w(t,"class","flex flex-row items-start gap-4")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),S(f,t,null),y(t,r),S(i,t,null),m=!0},p(l,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:l}),f.$set(C);const n={};$&1&&(n.$$scope={dirty:$,ctx:l}),i.$set(n)},i(l){m||(P(f.$$.fragment,l),P(i.$$.fragment,l),m=!0)},o(l){H(f.$$.fragment,l),H(i.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a(t)),M(f),M(i)}}}function Ql(_){let e=`
Maitre jean = new Maitre(new Chien());
Maitre marie = new Maitre(new Chat());

jean.presenterAnimal();   // "Wouaf !"
marie.presenterAnimal();  // "Miaou !"

// On peut changer d'animal sans modifier la classe Maitre !
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Kl(_){let e,o="La puissance de la combinaison",s,t,f="Le Maître ne sait pas quel type d&#39;animal il a... et c&#39;est <b>voulu</b> !",r,i,m,l,$=`C&#39;est le <span class="text-important">polymorphisme</span> en action !<br/>
			(on le verra en détail plus tard)`,C,n,p=`C'est là que tout prend son sens. Composition + héritage + polymorphisme = architecture
			flexible. Si demain on ajoute un Perroquet, le code du Maître ne change pas. Zéro
			modification. C'est le principe Open/Closed en action : ouvert à l'extension, fermé à la
			modification.`,L;return i=new se({props:{$$slots:{default:[Ql]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),T(i.$$.fragment),m=v(),l=g("p"),l.innerHTML=$,C=v(),n=g("aside"),n.textContent=p,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-cj68oa"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-kzsg9e"&&(t.innerHTML=f),r=d(c),E(i.$$.fragment,c),m=d(c),l=h(c,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1rhcp8x"&&(l.innerHTML=$),C=d(c),n=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-atbhqx"&&(n.textContent=p),this.h()},h(){w(l,"class","fragment text-accent-200 font-bold"),w(n,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),S(i,c,x),u(c,m,x),u(c,l,x),u(c,C,x),u(c,n,x),L=!0},p(c,x){const I={};x&1&&(I.$$scope={dirty:x,ctx:c}),i.$set(I)},i(c){L||(P(i.$$.fragment,c),L=!0)},o(c){H(i.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(r),a(m),a(l),a(C),a(n)),M(i,c)}}}function Xl(_){let e,o="Composition vs Agrégation",s,t,f="Il existe une nuance importante :",r,i,m='<div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">◆ Composition</h4> <p class="text-xl mt-2">L&#39;objet contenu <b>appartient</b> à l&#39;objet conteneur.</p> <p class="text-sm text-gray-400 mt-2">Si la Voiture est détruite, le Moteur aussi.</p></div> <div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">◇ Agrégation</h4> <p class="text-xl mt-2">L&#39;objet contenu <b>existe indépendamment</b>.</p> <p class="text-sm text-gray-400 mt-2">Si l&#39;Équipe est dissoute, les Joueurs existent toujours.</p></div>',l,$,C=`En pratique, beaucoup de développeurs confondent les deux, et ce n'est pas grave. L'important
			c'est de se poser la question : "Si je supprime le conteneur, le contenu a-t-il encore un sens
			?" Une roue sans voiture = bizarre. Un joueur sans équipe = normal (il peut changer d'équipe).`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),i=g("div"),i.innerHTML=m,l=v(),$=g("aside"),$.textContent=C,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-s3132y"&&(e.textContent=o),s=d(n),t=h(n,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1v8b0oy"&&(t.textContent=f),r=d(n),i=h(n,"DIV",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-5t1llc"&&(i.innerHTML=m),l=d(n),$=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-2sj58"&&($.textContent=C),this.h()},h(){w(i,"class","grid grid-cols-2 gap-8 mt-6"),w($,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),u(n,t,p),u(n,r,p),u(n,i,p),u(n,l,p),u(n,$,p)},p:O,d(n){n&&(a(e),a(s),a(t),a(r),a(i),a(l),a($))}}}function Wl(_){let e=`
@startuml
class Voiture
class Moteur
class Equipe
class Joueur

Voiture *-- Moteur : composition
Equipe o-- Joueur : agrégation
@enduml
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Yl(_){let e,o="En UML",s,t,f,r,i="◆ = Composition (losange plein) | ◇ = Agrégation (losange vide)",m,l,$=`En pratique, la différence est subtile. L'important c'est de comprendre qui "possède" quoi. En
			composition, le conteneur crée l'objet. En agrégation, on le reçoit de l'extérieur.`,C;return t=new He({props:{$$slots:{default:[Wl]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("p"),r.textContent=i,m=v(),l=g("aside"),l.textContent=$,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1dfk95l"&&(e.textContent=o),s=d(n),E(t.$$.fragment,n),f=d(n),r=h(n,"P",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-ze7nvt"&&(r.textContent=i),m=d(n),l=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1iqya04"&&(l.textContent=$),this.h()},h(){w(r,"class","mt-4"),w(l,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),S(t,n,p),u(n,f,p),u(n,r,p),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),t.$set(L)},i(n){C||(P(t.$$.fragment,n),C=!0)},o(n){H(t.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(f),a(r),a(m),a(l)),M(t,n)}}}function Zl(_){let e=`
class Voiture {
    // Le moteur est CRÉÉ par la voiture
    private Moteur moteur = new Moteur();
    
    // Si Voiture est garbage collecté,
    // Moteur l'est aussi
}
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function yl(_){let e=`
class Equipe {
    // Les joueurs sont REÇUS de l'extérieur
    private List<Joueur> joueurs;
    
    void ajouterJoueur(Joueur j) {
        joueurs.add(j);
    }
    // Les joueurs existent avant/après
}
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function en(_){let e,o="En code : qui crée quoi ?",s,t,f,r,i="◆ Composition",m,l,$,C,n,p="◇ Agrégation",L,c,x;return l=new se({props:{class:"language-java",$$slots:{default:[Zl]},$$scope:{ctx:_}}}),c=new se({props:{class:"language-java",$$slots:{default:[yl]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),f=g("div"),r=g("h4"),r.textContent=i,m=v(),T(l.$$.fragment),$=v(),C=g("div"),n=g("h4"),n.textContent=p,L=v(),T(c.$$.fragment),this.h()},l(I){e=h(I,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-13g76yp"&&(e.textContent=o),s=d(I),t=h(I,"DIV",{class:!0});var q=de(t);f=h(q,"DIV",{});var D=de(f);r=h(D,"H4",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-13iofgd"&&(r.textContent=i),m=d(D),E(l.$$.fragment,D),D.forEach(a),$=d(q),C=h(q,"DIV",{});var j=de(C);n=h(j,"H4",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-b2romh"&&(n.textContent=p),L=d(j),E(c.$$.fragment,j),j.forEach(a),q.forEach(a),this.h()},h(){w(r,"class","text-important"),w(n,"class","text-important"),w(t,"class","grid grid-cols-2 gap-4")},m(I,q){u(I,e,q),u(I,s,q),u(I,t,q),y(t,f),y(f,r),y(f,m),S(l,f,null),y(t,$),y(t,C),y(C,n),y(C,L),S(c,C,null),x=!0},p(I,q){const D={};q&1&&(D.$$scope={dirty:q,ctx:I}),l.$set(D);const j={};q&1&&(j.$$scope={dirty:q,ctx:I}),c.$set(j)},i(I){x||(P(l.$$.fragment,I),P(c.$$.fragment,I),x=!0)},o(I){H(l.$$.fragment,I),H(c.$$.fragment,I),x=!1},d(I){I&&(a(e),a(s),a(t)),M(l),M(c)}}}function tn(_){let e,o="Récapitulatif",s,t,f='<thead><tr><th class="p-3">Relation</th> <th class="p-3">Question</th> <th class="p-3">Implémentation</th> <th class="p-3">UML</th></tr></thead> <tbody><tr class="fragment"><td class="p-3 text-important">Héritage</td> <td class="p-3">&quot;X est un Y&quot;</td> <td class="p-3"><code>extends</code></td> <td class="p-3">Flèche △</td></tr> <tr class="fragment"><td class="p-3 text-important">Composition</td> <td class="p-3">&quot;X a un Y&quot; (possède)</td> <td class="p-3">Attribut (créé)</td> <td class="p-3">Losange ◆</td></tr> <tr class="fragment"><td class="p-3 text-important">Agrégation</td> <td class="p-3">&quot;X a un Y&quot; (référence)</td> <td class="p-3">Attribut (reçu)</td> <td class="p-3">Losange ◇</td></tr></tbody>',r,i,m=`Gardez ce tableau en tête. C'est la base de toute modélisation objet. En UML, on utilise ces
			symboles. En entretien, on vous demandera de dessiner ces diagrammes. Prochaine étape : les
			interfaces, pour aller encore plus loin dans l'abstraction.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("table"),t.innerHTML=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-ri7iuh"&&(e.textContent=o),s=d(l),t=h(l,"TABLE",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-9czqcv"&&(t.innerHTML=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-1hwoc6u"&&(i.textContent=m),this.h()},h(){w(t,"class","text-xl"),w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function sn(_){let e,o="La composition",s,t,f,r,i,m,l,$,C,n,p,L,c,x,I,q,D,j,V,W,z,U,te,A,F,ce,pe,me,_e,oe,ve,fe,xe;return t=new R({props:{$$slots:{default:[El]},$$scope:{ctx:_}}}),r=new R({props:{$$slots:{default:[Tl]},$$scope:{ctx:_}}}),m=new R({props:{$$slots:{default:[Al]},$$scope:{ctx:_}}}),$=new R({props:{$$slots:{default:[Il]},$$scope:{ctx:_}}}),n=new R({props:{$$slots:{default:[Dl]},$$scope:{ctx:_}}}),L=new R({props:{$$slots:{default:[Ol]},$$scope:{ctx:_}}}),x=new R({props:{$$slots:{default:[Vl]},$$scope:{ctx:_}}}),q=new R({props:{data_background_color:"#1a1a2e",$$slots:{default:[Rl]},$$scope:{ctx:_}}}),j=new R({props:{$$slots:{default:[Ul]},$$scope:{ctx:_}}}),W=new R({props:{$$slots:{default:[Jl]},$$scope:{ctx:_}}}),U=new R({props:{$$slots:{default:[Gl]},$$scope:{ctx:_}}}),A=new R({props:{$$slots:{default:[Kl]},$$scope:{ctx:_}}}),ce=new R({props:{$$slots:{default:[Xl]},$$scope:{ctx:_}}}),me=new R({props:{$$slots:{default:[Yl]},$$scope:{ctx:_}}}),oe=new R({props:{$$slots:{default:[en]},$$scope:{ctx:_}}}),fe=new R({props:{$$slots:{default:[tn]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),T(r.$$.fragment),i=v(),T(m.$$.fragment),l=v(),T($.$$.fragment),C=v(),T(n.$$.fragment),p=v(),T(L.$$.fragment),c=v(),T(x.$$.fragment),I=v(),T(q.$$.fragment),D=v(),T(j.$$.fragment),V=v(),T(W.$$.fragment),z=v(),T(U.$$.fragment),te=v(),T(A.$$.fragment),F=v(),T(ce.$$.fragment),pe=v(),T(me.$$.fragment),_e=v(),T(oe.$$.fragment),ve=v(),T(fe.$$.fragment)},l(G){e=h(G,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1dl0775"&&(e.textContent=o),s=d(G),E(t.$$.fragment,G),f=d(G),E(r.$$.fragment,G),i=d(G),E(m.$$.fragment,G),l=d(G),E($.$$.fragment,G),C=d(G),E(n.$$.fragment,G),p=d(G),E(L.$$.fragment,G),c=d(G),E(x.$$.fragment,G),I=d(G),E(q.$$.fragment,G),D=d(G),E(j.$$.fragment,G),V=d(G),E(W.$$.fragment,G),z=d(G),E(U.$$.fragment,G),te=d(G),E(A.$$.fragment,G),F=d(G),E(ce.$$.fragment,G),pe=d(G),E(me.$$.fragment,G),_e=d(G),E(oe.$$.fragment,G),ve=d(G),E(fe.$$.fragment,G)},m(G,ne){u(G,e,ne),u(G,s,ne),S(t,G,ne),u(G,f,ne),S(r,G,ne),u(G,i,ne),S(m,G,ne),u(G,l,ne),S($,G,ne),u(G,C,ne),S(n,G,ne),u(G,p,ne),S(L,G,ne),u(G,c,ne),S(x,G,ne),u(G,I,ne),S(q,G,ne),u(G,D,ne),S(j,G,ne),u(G,V,ne),S(W,G,ne),u(G,z,ne),S(U,G,ne),u(G,te,ne),S(A,G,ne),u(G,F,ne),S(ce,G,ne),u(G,pe,ne),S(me,G,ne),u(G,_e,ne),S(oe,G,ne),u(G,ve,ne),S(fe,G,ne),xe=!0},p(G,ne){const Q={};ne&1&&(Q.$$scope={dirty:ne,ctx:G}),t.$set(Q);const ue={};ne&1&&(ue.$$scope={dirty:ne,ctx:G}),r.$set(ue);const K={};ne&1&&(K.$$scope={dirty:ne,ctx:G}),m.$set(K);const re={};ne&1&&(re.$$scope={dirty:ne,ctx:G}),$.$set(re);const Ce={};ne&1&&(Ce.$$scope={dirty:ne,ctx:G}),n.$set(Ce);const X={};ne&1&&(X.$$scope={dirty:ne,ctx:G}),L.$set(X);const $e={};ne&1&&($e.$$scope={dirty:ne,ctx:G}),x.$set($e);const he={};ne&1&&(he.$$scope={dirty:ne,ctx:G}),q.$set(he);const J={};ne&1&&(J.$$scope={dirty:ne,ctx:G}),j.$set(J);const ie={};ne&1&&(ie.$$scope={dirty:ne,ctx:G}),W.$set(ie);const B={};ne&1&&(B.$$scope={dirty:ne,ctx:G}),U.$set(B);const ae={};ne&1&&(ae.$$scope={dirty:ne,ctx:G}),A.$set(ae);const Le={};ne&1&&(Le.$$scope={dirty:ne,ctx:G}),ce.$set(Le);const we={};ne&1&&(we.$$scope={dirty:ne,ctx:G}),me.$set(we);const qe={};ne&1&&(qe.$$scope={dirty:ne,ctx:G}),oe.$set(qe);const Me={};ne&1&&(Me.$$scope={dirty:ne,ctx:G}),fe.$set(Me)},i(G){xe||(P(t.$$.fragment,G),P(r.$$.fragment,G),P(m.$$.fragment,G),P($.$$.fragment,G),P(n.$$.fragment,G),P(L.$$.fragment,G),P(x.$$.fragment,G),P(q.$$.fragment,G),P(j.$$.fragment,G),P(W.$$.fragment,G),P(U.$$.fragment,G),P(A.$$.fragment,G),P(ce.$$.fragment,G),P(me.$$.fragment,G),P(oe.$$.fragment,G),P(fe.$$.fragment,G),xe=!0)},o(G){H(t.$$.fragment,G),H(r.$$.fragment,G),H(m.$$.fragment,G),H($.$$.fragment,G),H(n.$$.fragment,G),H(L.$$.fragment,G),H(x.$$.fragment,G),H(q.$$.fragment,G),H(j.$$.fragment,G),H(W.$$.fragment,G),H(U.$$.fragment,G),H(A.$$.fragment,G),H(ce.$$.fragment,G),H(me.$$.fragment,G),H(oe.$$.fragment,G),H(fe.$$.fragment,G),xe=!1},d(G){G&&(a(e),a(s),a(f),a(i),a(l),a(C),a(p),a(c),a(I),a(D),a(V),a(z),a(te),a(F),a(pe),a(_e),a(ve)),M(t,G),M(r,G),M(m,G),M($,G),M(n,G),M(L,G),M(x,G),M(q,G),M(j,G),M(W,G),M(U,G),M(A,G),M(ce,G),M(me,G),M(oe,G),M(fe,G)}}}function ln(_){let e,o;return e=new R({props:{$$slots:{default:[sn]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){E(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const f={};t&1&&(f.$$scope={dirty:t,ctx:s}),e.$set(f)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){H(e.$$.fragment,s),o=!1},d(s){M(e,s)}}}class nn extends Se{constructor(e){super(),Ee(this,e,null,ln,Pe,{})}}function an(_){let e=`
                abstract class Animal {}
                abstract class AnimalVolant extends Animal {}
                abstract class AnimalNageur extends Animal {}
                class Canard extends AnimalVolant, AnimalNageur {}
            `,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function rn(_){let e,o="L'héritage multiple",s,t,f="Comment hériter de deux classes ?",r,i,m,l,$=`En Java, ce n&#39;est pas possible !
			<br/> En revanche, on peut utiliser une interface pour simuler l&#39;héritage multiple.`,C,n,p=`L'héritage multiple existe en C++, mais ça crée le fameux "problème du diamant" : si deux
			parents ont la même méthode, laquelle appeler ? Java a choisi d'interdire l'héritage multiple
			de classes pour éviter ces ambiguïtés. Le canard est l'exemple parfait : il vole ET il nage.
			Comment modéliser ça sans héritage multiple ?`,L;return i=new He({props:{$$slots:{default:[an]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),T(i.$$.fragment),m=v(),l=g("p"),l.innerHTML=$,C=v(),n=g("aside"),n.textContent=p,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-lz4bxy"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1py5itu"&&(t.textContent=f),r=d(c),E(i.$$.fragment,c),m=d(c),l=h(c,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-mtdftf"&&(l.innerHTML=$),C=d(c),n=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-11kv8kj"&&(n.textContent=p),this.h()},h(){w(l,"class","fragment"),w(n,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),S(i,c,x),u(c,m,x),u(c,l,x),u(c,C,x),u(c,n,x),L=!0},p(c,x){const I={};x&1&&(I.$$scope={dirty:x,ctx:c}),i.$set(I)},i(c){L||(P(i.$$.fragment,c),L=!0)},o(c){H(i.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(r),a(m),a(l),a(C),a(n)),M(i,c)}}}function un(_){let e,o;return e=new R({props:{$$slots:{default:[rn]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){E(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,t){const f={};t&1&&(f.$$scope={dirty:t,ctx:s}),e.$set(f)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){H(e.$$.fragment,s),o=!1},d(s){M(e,s)}}}function on(_){let e=`
    
    public interface ArticleLouable {
      float reserver(Date from, Date to); 
      float rendre(int penalite);    
    }
        `,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function cn(_){let e,o=`Une interface est un type de référence similaire à une classe abstraite qui ne contient que
			des méthodes abstraites.`,s,t,f=`Une interface n'a pas de code "par défaut", seulement des signatures de méthodes.`,r,i,m,l,$=`Une interface, c'est un "contrat". Elle dit : "Toute classe qui m'implémente DOIT avoir ces
			méthodes." C'est le niveau d'abstraction le plus élevé en Java. Aucune implémentation, juste
			des promesses. Depuis Java 8, on peut avoir des méthodes "default" avec du code, mais c'est
			l'exception, pas la règle.`,C;return i=new se({props:{$$slots:{default:[on]},$$scope:{ctx:_}}}),{c(){e=g("p"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),T(i.$$.fragment),m=v(),l=g("aside"),l.textContent=$,this.h()},l(n){e=h(n,"P",{"data-svelte-h":!0}),b(e)!=="svelte-zve5wp"&&(e.textContent=o),s=d(n),t=h(n,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1phkx1u"&&(t.textContent=f),r=d(n),E(i.$$.fragment,n),m=d(n),l=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-18c88ea"&&(l.textContent=$),this.h()},h(){w(l,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),u(n,t,p),u(n,r,p),S(i,n,p),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),i.$set(L)},i(n){C||(P(i.$$.fragment,n),C=!0)},o(n){H(i.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(t),a(r),a(m),a(l)),M(i,n)}}}function $n(_){let e,o="Implémentation d’une interface",s,t,f=`Une classe signale les interfaces qu’elle implémente grâce au mot-clé <code>implements</code>.
			Une classe concrète doit fournir une implémentation pour toutes les méthodes d’une interface,
			soit dans sa déclaration, soit parce qu’elle en hérite.`,r,i,m=`C'est la différence clé avec l'héritage : on "extends" une classe, on "implements" une
			interface. Et surtout : on peut implémenter PLUSIEURS interfaces, contrairement à l'héritage.
			Si vous oubliez d'implémenter une méthode, le compilateur vous le dira.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-6vv8ym"&&(e.textContent=o),s=d(l),t=h(l,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1vu2bky"&&(t.innerHTML=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-sn5kmm"&&(i.textContent=m),this.h()},h(){w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function fn(_){let e=`
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
    `,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function pn(_){let e,o="Implémentation d’une interface",s,t,f,r,i=`Notez qu'on peut combiner extends ET implements. SiegeAuto hérite d'Accessoire ET implémente
			ArticleLouable. C'est très courant en pratique. Une classe a souvent une hiérarchie ET des
			capacités additionnelles. L'ordre est important : extends AVANT implements !`,m;return t=new se({props:{className:"h-[70vh]",$$slots:{default:[fn]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("aside"),r.textContent=i,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-6vv8ym"&&(e.textContent=o),s=d(l),E(t.$$.fragment,l),f=d(l),r=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-qpvial"&&(r.textContent=i),this.h()},h(){w(r,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),S(t,l,$),u(l,f,$),u(l,r,$),m=!0},p(l,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:l}),t.$set(C)},i(l){m||(P(t.$$.fragment,l),m=!0)},o(l){H(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a(f),a(r)),M(t,l)}}}function mn(_){let e,o="Implémentation d’une interface",s,t,f=`Une interface permet de mutualiser une implémentation entre des classes qui n’ont pas de lien
			d’héritage.<br/>
			Si une classe implémente une interface, ses classes dérivées héritent de cette implémentation, mais
			il est toutefois possible de la surcharger.`,r,i,m=`C'est là toute la puissance des interfaces. Un Avion et un Oiseau n'ont rien en commun... sauf
			qu'ils volent. Avec une interface Volant, on peut les traiter de la même façon pour tout ce
			qui concerne le vol. C'est le principe de "programmation par contrat" : on programme contre
			une interface, pas une implémentation.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-6vv8ym"&&(e.textContent=o),s=d(l),t=h(l,"P",{"data-svelte-h":!0}),b(t)!=="svelte-cgrkq0"&&(t.innerHTML=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-1g9blqi"&&(i.textContent=m),this.h()},h(){w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function dn(_){let e,o="Comment choisir entre une classe abstraite et une interface ?",s,t,f=`<li><b>Classe abstraite</b> : Si, fondamentalement, on peut dire &quot;Un Dauphin est un Animal&quot;,
				alors, vous <i>pouvez</i> utiliser une classe abstraite.<br/></li> <li><b>Interface</b> : S&#39;il est plus juste de dire &quot;Un Dauphin peut nager&quot;, alors vous
				<i>devriez</i>
				utiliser une interface.
				<ul><li>Si quelque chose qui n&#39;aurait rien à voir avec vos animaux pouvait nager, utilisez une
						interface.<br/>
						Par exemple, un avion et un oiseau peuvent voler, mais ils n&#39;ont rien à voir l&#39;un avec l&#39;autre.</li> <li>Sinon, prévoyez plutôt une interface si vous pensez qu&#39;une classe fille pourrait avoir
						besoin d&#39;hériter de plusieurs classes.</li></ul></li>`,r,i,m=`C'est LA question qu'on vous posera en entretien d'embauche ! Retenez bien cette règle. "Est
			un" → classe abstraite (relation d'identité) "Peut faire" → interface (capacité) Dans le
			doute, préférez l'interface. C'est plus flexible et ça suit le principe de composition over
			inheritance.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-95djsx"&&(e.textContent=o),s=d(l),t=h(l,"UL",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1bl7mxh"&&(t.innerHTML=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-8pa8gb"&&(i.textContent=m),this.h()},h(){w(t,"class","text-4xl"),w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function vn(_){let e=`
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
        `,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function xn(_){let e=`
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

                `,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function _n(_){let e,o="Comment choisir entre une classe abstraite et une interface ?",s,t,f,r,i,m,l,$=`À gauche avec les interfaces : propre, flexible. À droite sans : explosion combinatoire de classes.
			C'est le fameux problème "Mammifère qui nage ET qui pond" → impossible sans interface.
			En pratique, les interfaces résolvent 90% des problèmes de modélisation complexe.`,C;return f=new He({props:{$$slots:{default:[vn]},$$scope:{ctx:_}}}),i=new He({props:{$$slots:{default:[xn]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),T(f.$$.fragment),r=v(),T(i.$$.fragment),m=v(),l=g("aside"),l.textContent=$,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-95djsx"&&(e.textContent=o),s=d(n),t=h(n,"DIV",{class:!0});var p=de(t);E(f.$$.fragment,p),r=d(p),E(i.$$.fragment,p),p.forEach(a),m=d(n),l=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-kyimvk"&&(l.textContent=$),this.h()},h(){w(t,"class","flex flex-row justify-center items-center"),w(l,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),u(n,t,p),S(f,t,null),y(t,r),S(i,t,null),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),f.$set(L);const c={};p&1&&(c.$$scope={dirty:p,ctx:n}),i.$set(c)},i(n){C||(P(f.$$.fragment,n),P(i.$$.fragment,n),C=!0)},o(n){H(f.$$.fragment,n),H(i.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(t),a(m),a(l)),M(f),M(i)}}}function Cn(_){let e=`
            public class BassinAquatique {
                public void faireNager(Nageur nageur) {
                    nageur.nager();
                    // Ici, qu'ils soient un humain, un dauphin ou un crocodile, 
                    // les instances de ces classes peuvent nager 
                    // peu importe que ce soit des mammifères ou des reptiles
                }
            }
            `,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function hn(_){let e,o="Préambule au polymorphisme",s,t,f=`Vos méthodes peuvent prendre en paramètre une interface, ce qui permet de passer n'importe
			quel objet qui l'implémente.`,r,i,m,l,$=`C'est ça la vraie puissance des interfaces ! Le code ne sait pas et n'a pas besoin de savoir
			ce qu'est un Nageur. Demain, vous ajoutez une classe Robot qui implémente Nageur → ça marche
			sans changer une ligne ! C'est le principe d'inversion de dépendance (le D de SOLID) :
			dépendez des abstractions, pas des implémentations.`,C;return i=new se({props:{class:" highlighter language-java",$$slots:{default:[Cn]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),T(i.$$.fragment),m=v(),l=g("aside"),l.textContent=$,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-mwdtiv"&&(e.textContent=o),s=d(n),t=h(n,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1xd6dcn"&&(t.textContent=f),r=d(n),E(i.$$.fragment,n),m=d(n),l=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1uux63m"&&(l.textContent=$),this.h()},h(){w(l,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),u(n,t,p),u(n,r,p),S(i,n,p),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),i.$set(L)},i(n){C||(P(i.$$.fragment,n),C=!0)},o(n){H(i.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(t),a(r),a(m),a(l)),M(i,n)}}}function gn(_){let e=`
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

            `,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function bn(_){let e,o="Héritage d’interface",s,t,f=`Une interface peut hériter d’une ou plusieurs autres interfaces. Dans ce cas, elle hérite de
			toutes les méthodes déclarées dans les interfaces parentes. Pour déclarer un héritage, on
			utilise le mot-clé <code>extends</code>.`,r,i,m;return i=new se({props:{className:"highlighter language-java",$$slots:{default:[gn]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),T(i.$$.fragment)},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-j0acen"&&(e.textContent=o),s=d(l),t=h(l,"P",{"data-svelte-h":!0}),b(t)!=="svelte-tpi5ka"&&(t.innerHTML=f),r=d(l),E(i.$$.fragment,l)},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),S(i,l,$),m=!0},p(l,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:l}),i.$set(C)},i(l){m||(P(i.$$.fragment,l),m=!0)},o(l){H(i.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a(t),a(r)),M(i,l)}}}function Ln(_){let e=`
                interface Omnivore extends Herbivore, Carnivore {...}
                class Humain implements Omnivore {...}

                var bob = new Humain();
                if (bob instanceof Carnivore) {
                    System.out.println("bob mange de la viande");
                }
                if (bob instanceof Herbivore) {
                    System.out.println("bob mange des plantes");
                }
            `,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function wn(_){let e,o="Héritage d’interface",s,t,f=`Comme chaque interface introduit un nouveau type, il est possible de contrôler, grâce au
			mot-clé <code>instanceof</code>, qu’une variable, un paramètre ou un attribut est bien une
			instance compatible avec cette interface.`,r,i,m;return i=new se({props:{className:"highlighter language-java",$$slots:{default:[Ln]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),T(i.$$.fragment)},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-j0acen"&&(e.textContent=o),s=d(l),t=h(l,"P",{"data-svelte-h":!0}),b(t)!=="svelte-6egy71"&&(t.innerHTML=f),r=d(l),E(i.$$.fragment,l)},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),S(i,l,$),m=!0},p(l,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:l}),i.$set(C)},i(l){m||(P(i.$$.fragment,l),m=!0)},o(l){H(i.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a(t),a(r)),M(i,l)}}}function qn(_){let e=`
            interface IConfidential {}
            class DossierMedical implements IConfidential {}
            ...
            void logguerDansUnFichier(Object p) {
                if (p instanceof IConfidential) {
                    return; // On ne loggue pas les informations confidentielles
                }
            }
            `,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Mn(_){let e,o="Les interfaces marqueurs",s,t,f=`Une interface sans méthode est appelée une interface marqueur. <br/>
			Elle est utilisée pour étiqueter une classe.`,r,i,m="On les utilise ainsi",l,$,C,n,p=`Rappelez-vous, comme on peut implémenter plusieurs interfaces, n'importe quelle classe peut
			implémenter une interface marqueur.`,L,c,x=`Historiquement, Java utilisait beaucoup ça : Serializable, Cloneable sont des interfaces
			marqueurs du JDK. Aujourd'hui, on préfère les annotations (@Confidential) qui sont plus
			puissantes et flexibles. Mais le concept reste valide et vous le verrez dans du code legacy.`,I;return $=new se({props:{className:"highlighter language-java",$$slots:{default:[qn]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),i=g("p"),i.textContent=m,l=v(),T($.$$.fragment),C=v(),n=g("p"),n.textContent=p,L=v(),c=g("aside"),c.textContent=x,this.h()},l(q){e=h(q,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-9j49lb"&&(e.textContent=o),s=d(q),t=h(q,"P",{"data-svelte-h":!0}),b(t)!=="svelte-tx7gvv"&&(t.innerHTML=f),r=d(q),i=h(q,"P",{"data-svelte-h":!0}),b(i)!=="svelte-1qt13hy"&&(i.textContent=m),l=d(q),E($.$$.fragment,q),C=d(q),n=h(q,"P",{"data-svelte-h":!0}),b(n)!=="svelte-7kxzjc"&&(n.textContent=p),L=d(q),c=h(q,"ASIDE",{class:!0,"data-svelte-h":!0}),b(c)!=="svelte-1rx16ok"&&(c.textContent=x),this.h()},h(){w(c,"class","notes")},m(q,D){u(q,e,D),u(q,s,D),u(q,t,D),u(q,r,D),u(q,i,D),u(q,l,D),S($,q,D),u(q,C,D),u(q,n,D),u(q,L,D),u(q,c,D),I=!0},p(q,D){const j={};D&1&&(j.$$scope={dirty:D,ctx:q}),$.$set(j)},i(q){I||(P($.$$.fragment,q),I=!0)},o(q){H($.$$.fragment,q),I=!1},d(q){q&&(a(e),a(s),a(t),a(r),a(i),a(l),a(C),a(n),a(L),a(c)),M($,q)}}}function Hn(_){let e,o="Conventions de nommage",s,t,f=`<li>Les interfaces sont nommées avec un nom qui commence par &quot;I&quot; suivi d&#39;un nom.</li> <li>Le nom est un adjectif ou un nom qui décrit un comportement.</li> <li>Exemple :
				<ul><li>IVolant</li> <li>IConfidentiel</li> <li><s>INageur</s></li> <li><s>Bateau</s></li> <li><s>Vitesse</s></li></ul></li>`,r,i,m=`Le préfixe "I" est une convention C#/Microsoft. En Java pur, on met souvent pas de préfixe.
			Mais dans beaucoup d'entreprises françaises, le "I" est la norme. Suivez la convention de
			votre équipe. Le JDK utilise des suffixes "-able" : Comparable, Serializable, Iterable. C'est
			aussi une bonne pratique.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1cx5ud7"&&(e.textContent=o),s=d(l),t=h(l,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-7652xk"&&(t.innerHTML=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-1js4lj4"&&(i.textContent=m),this.h()},h(){w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function Pn(_){let e,o="Les interfaces",s,t,f,r,i,m,l,$,C,n,p,L,c,x,I,q,D,j,V,W,z,U,te;return t=new R({props:{$$slots:{default:[cn]},$$scope:{ctx:_}}}),r=new R({props:{$$slots:{default:[$n]},$$scope:{ctx:_}}}),m=new R({props:{$$slots:{default:[pn]},$$scope:{ctx:_}}}),$=new R({props:{$$slots:{default:[mn]},$$scope:{ctx:_}}}),n=new R({props:{$$slots:{default:[dn]},$$scope:{ctx:_}}}),L=new R({props:{$$slots:{default:[_n]},$$scope:{ctx:_}}}),x=new R({props:{$$slots:{default:[hn]},$$scope:{ctx:_}}}),q=new R({props:{$$slots:{default:[bn]},$$scope:{ctx:_}}}),j=new R({props:{$$slots:{default:[wn]},$$scope:{ctx:_}}}),W=new R({props:{$$slots:{default:[Mn]},$$scope:{ctx:_}}}),U=new R({props:{$$slots:{default:[Hn]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),T(r.$$.fragment),i=v(),T(m.$$.fragment),l=v(),T($.$$.fragment),C=v(),T(n.$$.fragment),p=v(),T(L.$$.fragment),c=v(),T(x.$$.fragment),I=v(),T(q.$$.fragment),D=v(),T(j.$$.fragment),V=v(),T(W.$$.fragment),z=v(),T(U.$$.fragment)},l(A){e=h(A,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-lczfm4"&&(e.textContent=o),s=d(A),E(t.$$.fragment,A),f=d(A),E(r.$$.fragment,A),i=d(A),E(m.$$.fragment,A),l=d(A),E($.$$.fragment,A),C=d(A),E(n.$$.fragment,A),p=d(A),E(L.$$.fragment,A),c=d(A),E(x.$$.fragment,A),I=d(A),E(q.$$.fragment,A),D=d(A),E(j.$$.fragment,A),V=d(A),E(W.$$.fragment,A),z=d(A),E(U.$$.fragment,A)},m(A,F){u(A,e,F),u(A,s,F),S(t,A,F),u(A,f,F),S(r,A,F),u(A,i,F),S(m,A,F),u(A,l,F),S($,A,F),u(A,C,F),S(n,A,F),u(A,p,F),S(L,A,F),u(A,c,F),S(x,A,F),u(A,I,F),S(q,A,F),u(A,D,F),S(j,A,F),u(A,V,F),S(W,A,F),u(A,z,F),S(U,A,F),te=!0},p(A,F){const ce={};F&1&&(ce.$$scope={dirty:F,ctx:A}),t.$set(ce);const pe={};F&1&&(pe.$$scope={dirty:F,ctx:A}),r.$set(pe);const me={};F&1&&(me.$$scope={dirty:F,ctx:A}),m.$set(me);const _e={};F&1&&(_e.$$scope={dirty:F,ctx:A}),$.$set(_e);const oe={};F&1&&(oe.$$scope={dirty:F,ctx:A}),n.$set(oe);const ve={};F&1&&(ve.$$scope={dirty:F,ctx:A}),L.$set(ve);const fe={};F&1&&(fe.$$scope={dirty:F,ctx:A}),x.$set(fe);const xe={};F&1&&(xe.$$scope={dirty:F,ctx:A}),q.$set(xe);const G={};F&1&&(G.$$scope={dirty:F,ctx:A}),j.$set(G);const ne={};F&1&&(ne.$$scope={dirty:F,ctx:A}),W.$set(ne);const Q={};F&1&&(Q.$$scope={dirty:F,ctx:A}),U.$set(Q)},i(A){te||(P(t.$$.fragment,A),P(r.$$.fragment,A),P(m.$$.fragment,A),P($.$$.fragment,A),P(n.$$.fragment,A),P(L.$$.fragment,A),P(x.$$.fragment,A),P(q.$$.fragment,A),P(j.$$.fragment,A),P(W.$$.fragment,A),P(U.$$.fragment,A),te=!0)},o(A){H(t.$$.fragment,A),H(r.$$.fragment,A),H(m.$$.fragment,A),H($.$$.fragment,A),H(n.$$.fragment,A),H(L.$$.fragment,A),H(x.$$.fragment,A),H(q.$$.fragment,A),H(j.$$.fragment,A),H(W.$$.fragment,A),H(U.$$.fragment,A),te=!1},d(A){A&&(a(e),a(s),a(f),a(i),a(l),a(C),a(p),a(c),a(I),a(D),a(V),a(z)),M(t,A),M(r,A),M(m,A),M($,A),M(n,A),M(L,A),M(x,A),M(q,A),M(j,A),M(W,A),M(U,A)}}}function Sn(_){let e,o,s,t;return e=new R({props:{$$slots:{default:[un]},$$scope:{ctx:_}}}),s=new R({props:{$$slots:{default:[Pn]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment),o=v(),T(s.$$.fragment)},l(f){E(e.$$.fragment,f),o=d(f),E(s.$$.fragment,f)},m(f,r){S(e,f,r),u(f,o,r),S(s,f,r),t=!0},p(f,[r]){const i={};r&1&&(i.$$scope={dirty:r,ctx:f}),e.$set(i);const m={};r&1&&(m.$$scope={dirty:r,ctx:f}),s.$set(m)},i(f){t||(P(e.$$.fragment,f),P(s.$$.fragment,f),t=!0)},o(f){H(e.$$.fragment,f),H(s.$$.fragment,f),t=!1},d(f){f&&a(o),M(e,f),M(s,f)}}}class En extends Se{constructor(e){super(),Ee(this,e,null,Sn,Pe,{})}}function Tn(_){let e,o=`L'encapsulation est un concept fondamental de la programmation orientée objet. Elle consiste à
			cacher les détails internes d'une classe et à ne fournir qu'une interface publique pour
			interagir avec cette classe.`,s,t,f=`L'encapsulation, c'est comme une voiture : vous appuyez sur l'accélérateur, vous n'avez pas
			besoin de savoir comment fonctionne le moteur. C'est un principe de "boîte noire" : on expose
			ce qu'il faut, on cache le reste. Historiquement, ce concept vient de la modularité en génie
			logiciel des années 70.`;return{c(){e=g("p"),e.textContent=o,s=v(),t=g("aside"),t.textContent=f,this.h()},l(r){e=h(r,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1tljpvn"&&(e.textContent=o),s=d(r),t=h(r,"ASIDE",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1drycps"&&(t.textContent=f),this.h()},h(){w(t,"class","notes")},m(r,i){u(r,e,i),u(r,s,i),u(r,t,i)},p:O,d(r){r&&(a(e),a(s),a(t))}}}function An(_){let e,o=`L'encapsulation permet de protéger les données et de contrôler leur accès. Elle rend également
			le code plus modulaire et plus facile à maintenir.`,s,t,f=`En entreprise, c'est crucial. Imaginez une équipe de 20 développeurs : si tout le monde peut
			modifier n'importe quel attribut, c'est le chaos. L'encapsulation impose des "contrats" entre
			les développeurs. On définit ce qui peut être utilisé et comment. Anecdote : beaucoup de bugs
			critiques en production viennent de données modifiées "par accident" car non protégées.`;return{c(){e=g("p"),e.textContent=o,s=v(),t=g("aside"),t.textContent=f,this.h()},l(r){e=h(r,"P",{"data-svelte-h":!0}),b(e)!=="svelte-doneo5"&&(e.textContent=o),s=d(r),t=h(r,"ASIDE",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-niiwx"&&(t.textContent=f),this.h()},h(){w(t,"class","notes")},m(r,i){u(r,e,i),u(r,s,i),u(r,t,i)},p:O,d(r){r&&(a(e),a(s),a(t))}}}function In(_){let e,o=`Pour encapsuler des données, on utilise des modificateurs d'accès qui déterminent la
			visibilité des attributs et des méthodes d'une classe.`,s,t,f="<li><code>public</code> : accessible depuis n&#39;importe où</li> <li><code>private</code> : accessible uniquement depuis la classe elle-même</li> <li><code>protected</code> : accessible depuis la classe et ses sous-classes</li>",r,i,m=`Il existe aussi le niveau "package-private" (sans modificateur) : accessible uniquement dans
			le même package. En pratique, 90% du temps vous utiliserez private pour les attributs et
			public pour les méthodes d'interface. Le protected est surtout utile dans les
			bibliothèques/frameworks où on veut permettre l'extension par héritage.`;return{c(){e=g("p"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1dtmw8t"&&(e.textContent=o),s=d(l),t=h(l,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-be97eu"&&(t.innerHTML=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-wx1qlj"&&(i.textContent=m),this.h()},h(){w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function jn(_){let e=`
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
    `,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Dn(_){let e,o="Voici un exemple d'encapsulation en Java :",s,t,f,r,i=`C'est le pattern classique JavaBean. Vous le verrez partout dans les frameworks Java (Spring,
			Hibernate...). Les IDE génèrent ces getters/setters automatiquement : clic droit → Generate →
			Getters and Setters. Important : même si c'est "juste" un getter/setter, passez par ces
			méthodes. Ça vous permettra d'ajouter de la logique plus tard.`,m;return t=new se({props:{$$slots:{default:[jn]},$$scope:{ctx:_}}}),{c(){e=g("p"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("aside"),r.textContent=i,this.h()},l(l){e=h(l,"P",{"data-svelte-h":!0}),b(e)!=="svelte-sf7cl9"&&(e.textContent=o),s=d(l),E(t.$$.fragment,l),f=d(l),r=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-19iwzui"&&(r.textContent=i),this.h()},h(){w(r,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),S(t,l,$),u(l,f,$),u(l,r,$),m=!0},p(l,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:l}),t.$set(C)},i(l){m||(P(t.$$.fragment,l),m=!0)},o(l){H(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a(f),a(r)),M(t,l)}}}function kn(_){let e,o=`Dans cet exemple, les attributs <code>nom</code> et <code>age</code> sont privés et ne peuvent
			pas être accédés directement depuis l&#39;extérieur. On utilise des méthodes publiques,
			<code>getNom</code>, <code>setNom</code>, <code>getAge</code> et <code>setAge</code>, pour y
			accéder et les modifier.`,s,t,f=`Fondamentalement, <code>getNom</code> et <code>setNom</code> sont de simples méthodes, mais
			compte tenu de leur rôle, on les appelle des <i>accesseurs</i> et des <i>mutateurs</i>.`;return{c(){e=g("p"),e.innerHTML=o,s=v(),t=g("p"),t.innerHTML=f,this.h()},l(r){e=h(r,"P",{"data-svelte-h":!0}),b(e)!=="svelte-tuu3n3"&&(e.innerHTML=o),s=d(r),t=h(r,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-t116p3"&&(t.innerHTML=f),this.h()},h(){w(t,"class","text-important")},m(r,i){u(r,e,i),u(r,s,i),u(r,t,i)},p:O,d(r){r&&(a(e),a(s),a(t))}}}function On(_){let e=`
    public void setAge(int age) {
        if (age >= 0) {
            this.age = age;
        }
    }
    `,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function zn(_){let e,o=`L&#39;encapsulation permet de contrôler l&#39;accès aux données et de s&#39;assurer qu&#39;elles sont
			manipulées de manière cohérente. Par exemple, on peut ajouter des vérifications dans les
			méthodes <code>set</code> pour s&#39;assurer que les valeurs sont valides.`,s,t,f,r,i=`En pratique, vous pouvez aller plus loin : lever une exception, logger l'erreur, notifier
			l'utilisateur... Ce pattern s'appelle "defensive programming" - on se protège des mauvaises
			utilisations. Dans les frameworks modernes, on utilise souvent des annotations de validation
			(@NotNull, @Min, @Max) au lieu de coder à la main.`,m;return t=new se({props:{$$slots:{default:[On]},$$scope:{ctx:_}}}),{c(){e=g("p"),e.innerHTML=o,s=v(),T(t.$$.fragment),f=v(),r=g("aside"),r.textContent=i,this.h()},l(l){e=h(l,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1yoywng"&&(e.innerHTML=o),s=d(l),E(t.$$.fragment,l),f=d(l),r=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-phtreb"&&(r.textContent=i),this.h()},h(){w(r,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),S(t,l,$),u(l,f,$),u(l,r,$),m=!0},p(l,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:l}),t.$set(C)},i(l){m||(P(t.$$.fragment,l),m=!0)},o(l){H(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a(f),a(r)),M(t,l)}}}function Vn(_){let e,o=`L&#39;utilisation du modificateur <code>protected</code> permet aux classes dérivées d&#39;accéder aux attributs
			et méthodes de la classe parente. Cela est utile lorsque l&#39;on souhaite permettre à des sous-classes
			d&#39;utiliser ou de modifier des données tout en les protégeant de l&#39;accès direct extérieur.`,s,t,f=`Attention : protected ne veut pas dire "accessible seulement aux sous-classes". En Java,
			protected est aussi accessible depuis le même package ! C'est une subtilité souvent oubliée.
			Bonne pratique : préférez private + getter protected si vous voulez vraiment contrôler
			l'accès.`;return{c(){e=g("p"),e.innerHTML=o,s=v(),t=g("aside"),t.textContent=f,this.h()},l(r){e=h(r,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1om2flv"&&(e.innerHTML=o),s=d(r),t=h(r,"ASIDE",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1l5eyve"&&(t.textContent=f),this.h()},h(){w(t,"class","notes")},m(r,i){u(r,e,i),u(r,s,i),u(r,t,i)},p:O,d(r){r&&(a(e),a(s),a(t))}}}function Rn(_){let e=`
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
    `,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Un(_){let e,o,s,t=`Dans cet exemple, l&#39;attribut <code>nom</code> est protégé, ce qui permet à la classe
			<code>Chien</code>
			d&#39;y accéder dans sa méthode <code>aboyer</code>.`,f;return e=new se({props:{$$slots:{default:[Rn]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment),o=v(),s=g("p"),s.innerHTML=t},l(r){E(e.$$.fragment,r),o=d(r),s=h(r,"P",{"data-svelte-h":!0}),b(s)!=="svelte-pqjf38"&&(s.innerHTML=t)},m(r,i){S(e,r,i),u(r,o,i),u(r,s,i),f=!0},p(r,i){const m={};i&1&&(m.$$scope={dirty:i,ctx:r}),e.$set(m)},i(r){f||(P(e.$$.fragment,r),f=!0)},o(r){H(e.$$.fragment,r),f=!1},d(r){r&&(a(o),a(s)),M(e,r)}}}function Nn(_){let e=`
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
    `,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Jn(_){let e,o=`Les attributs privés sont utilisés pour restreindre l'accès direct aux données sensibles ou
			critiques, garantissant ainsi que seules des méthodes contrôlées peuvent les modifier.`,s,t,f,r,i=`Dans cet exemple, le solde du compte est privé et ne peut être modifié que par les méthodes <code>deposer</code>
			et <code>retirer</code>, lesquelles effectuent des vérifications.`,m,l,$=`C'est l'exemple classique ! Imaginez si le solde était public : compte.solde = -1000000.
			Catastrophe. Dans la vraie vie, les banques ajoutent aussi : logging, audit trail,
			notifications, limites de retrait... L'encapsulation permet d'ajouter tout ça sans changer
			l'interface publique.`,C;return t=new se({props:{$$slots:{default:[Nn]},$$scope:{ctx:_}}}),{c(){e=g("p"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("p"),r.innerHTML=i,m=v(),l=g("aside"),l.textContent=$,this.h()},l(n){e=h(n,"P",{"data-svelte-h":!0}),b(e)!=="svelte-usm7ui"&&(e.textContent=o),s=d(n),E(t.$$.fragment,n),f=d(n),r=h(n,"P",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-1hber6c"&&(r.innerHTML=i),m=d(n),l=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-ey8qs8"&&(l.textContent=$),this.h()},h(){w(r,"class","smaller"),w(l,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),S(t,n,p),u(n,f,p),u(n,r,p),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),t.$set(L)},i(n){C||(P(t.$$.fragment,n),C=!0)},o(n){H(t.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(f),a(r),a(m),a(l)),M(t,n)}}}function Bn(_){let e,o="Verbosité",s,t,f=`Le Java est parfois critiqué pour sa verbosité. En effet, le code Java peut sembler plus long
			et plus complexe que d'autres langages.`,r,i,m=`Vous devez écrire environ 7 lignes pour déclarer un simple attribut avec ses accesseurs et
			mutateurs.`,l,$,C=`C'est le principal reproche fait à Java. Python ou Kotlin font ça en 1 ligne. Mais Java 14+ a
			introduit les Records qui réduisent beaucoup ce boilerplate. Et les IDE modernes génèrent tout
			ça en 2 clics. En pratique, ce n'est plus vraiment un problème. Lombok est aussi très
			populaire : @Data génère tous les getters/setters automatiquement.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),i=g("p"),i.textContent=m,l=v(),$=g("aside"),$.textContent=C,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-11a3931"&&(e.textContent=o),s=d(n),t=h(n,"P",{"data-svelte-h":!0}),b(t)!=="svelte-eslzxf"&&(t.textContent=f),r=d(n),i=h(n,"P",{"data-svelte-h":!0}),b(i)!=="svelte-ishs47"&&(i.textContent=m),l=d(n),$=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-76j7no"&&($.textContent=C),this.h()},h(){w($,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),u(n,t,p),u(n,r,p),u(n,i,p),u(n,l,p),u(n,$,p)},p:O,d(n){n&&(a(e),a(s),a(t),a(r),a(i),a(l),a($))}}}function Fn(_){let e=`
        // C#
        class Personne {
            public string Nom { get; }
            public int Age    { get; set; }
            public int Taille {
                get; 
                set => field = value; 
            }
        }
        `,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Gn(_){let e=`
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
                `,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Qn(_){let e,o="D'autres langages permettent de déclarer des accesseurs et mutateurs de manière plus concise :",s,t,f,r,i,m,l,$=`En Java, un IDE peut générer automatiquement ces méthodes. Cela peut sembler pénible, mais il
			faut le faire.`,C;return f=new se({props:{$$slots:{default:[Fn]},$$scope:{ctx:_}}}),i=new se({props:{$$slots:{default:[Gn]},$$scope:{ctx:_}}}),{c(){e=g("p"),e.textContent=o,s=v(),t=g("div"),T(f.$$.fragment),r=v(),T(i.$$.fragment),m=v(),l=g("p"),l.textContent=$,this.h()},l(n){e=h(n,"P",{"data-svelte-h":!0}),b(e)!=="svelte-v898e4"&&(e.textContent=o),s=d(n),t=h(n,"DIV",{class:!0});var p=de(t);E(f.$$.fragment,p),r=d(p),E(i.$$.fragment,p),p.forEach(a),m=d(n),l=h(n,"P",{"data-svelte-h":!0}),b(l)!=="svelte-9ubtus"&&(l.textContent=$),this.h()},h(){w(t,"class","flex flex-row")},m(n,p){u(n,e,p),u(n,s,p),u(n,t,p),S(f,t,null),y(t,r),S(i,t,null),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),f.$set(L);const c={};p&1&&(c.$$scope={dirty:p,ctx:n}),i.$set(c)},i(n){C||(P(f.$$.fragment,n),P(i.$$.fragment,n),C=!0)},o(n){H(f.$$.fragment,n),H(i.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(t),a(m),a(l)),M(f),M(i)}}}function Kn(_){let e=`
    public void setMobilePhoneNumber(String mobilePhoneNumber) {
        this.mobilePhoneNumber = mobilePhoneNumber;
        envoyerEmailPourPrevenirUtilisateurDeLaModification(email, mobilePhoneNumber);
    }
    `,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Xn(_){let e,o="Maintenance",s,t,f=`En encapsulant les données et en contrôlant leur accès, vous facilitez la maintenance de votre
			code. Imaginez que vous avez laissé un attribut public et que vous le modifiez dans 50
			endroits différents. Si vous souhaitez désormais enregistrer chaque modification, vous devrez
			intervenir à ces 50 endroits.`,r,i,m,l,$=`C'est le principe Open/Closed : ouvert à l'extension, fermé à la modification. Dans les gros
			projets, c'est vital. J'ai vu des équipes passer des semaines à refactorer du code parce qu'un
			attribut était public. Avec un setter, on ajoute la logique à UN endroit. C'est le Single
			Point of Change.`,C;return i=new se({props:{$$slots:{default:[Kn]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),T(i.$$.fragment),m=v(),l=g("aside"),l.textContent=$,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1ky5g9v"&&(e.textContent=o),s=d(n),t=h(n,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1qmbise"&&(t.textContent=f),r=d(n),E(i.$$.fragment,n),m=d(n),l=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-gfpvu8"&&(l.textContent=$),this.h()},h(){w(l,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),u(n,t,p),u(n,r,p),S(i,n,p),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),i.$set(L)},i(n){C||(P(i.$$.fragment,n),C=!0)},o(n){H(i.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(t),a(r),a(m),a(l)),M(i,n)}}}function Wn(_){let e,o="Et maintenant ?",s,t,f="Vers la généralisation et l'héritage";return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,this.h()},l(r){e=h(r,"H2",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-1m9nj2p"&&(e.textContent=o),s=d(r),t=h(r,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-b0r7rg"&&(t.textContent=f),this.h()},h(){w(e,"class","text-5xl"),w(t,"class","text-2xl text-gray-400")},m(r,i){u(r,e,i),u(r,s,i),u(r,t,i)},p:O,d(r){r&&(a(e),a(s),a(t))}}}function Yn(_){let e=`
class CompteCourant {
    private String numero;
    private double solde;
    private String titulaire;
    
    void deposer(double m) {...}
    void retirer(double m) {...}
    void calculerInterets() {...}
}
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Zn(_){let e=`
class CompteEpargne {
    private String numero;
    private double solde;
    private String titulaire;
    
    void deposer(double m) {...}
    void retirer(double m) {...}
    void calculerInterets() {...}
}
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function yn(_){let e,o="Le problème de la duplication",s,t,f="Imaginez que vous devez modéliser plusieurs types de comptes bancaires :",r,i,m,l,$,C,n,p="😱 Beaucoup de code dupliqué !",L;return m=new se({props:{class:"language-java",$$slots:{default:[Yn]},$$scope:{ctx:_}}}),$=new se({props:{class:"language-java",$$slots:{default:[Zn]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),i=g("div"),T(m.$$.fragment),l=v(),T($.$$.fragment),C=v(),n=g("p"),n.textContent=p,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1121kts"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1k7fi1x"&&(t.textContent=f),r=d(c),i=h(c,"DIV",{class:!0});var x=de(i);E(m.$$.fragment,x),l=d(x),E($.$$.fragment,x),x.forEach(a),C=d(c),n=h(c,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1kobn2k"&&(n.textContent=p),this.h()},h(){w(i,"class","grid grid-cols-2 gap-4 mt-6"),w(n,"class","fragment text-red-400 mt-4 font-bold")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),u(c,i,x),S(m,i,null),y(i,l),S($,i,null),u(c,C,x),u(c,n,x),L=!0},p(c,x){const I={};x&1&&(I.$$scope={dirty:x,ctx:c}),m.$set(I);const q={};x&1&&(q.$$scope={dirty:x,ctx:c}),$.$set(q)},i(c){L||(P(m.$$.fragment,c),P($.$$.fragment,c),L=!0)},o(c){H(m.$$.fragment,c),H($.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(r),a(i),a(C),a(n)),M(m),M($)}}}function ei(_){let e,o="Généraliser les concepts",s,t,f='En observant les classes, on remarque des <span class="text-important">points communs</span> :',r,i,m='<li class="fragment">Tous les comptes ont un numéro, un solde, un titulaire</li> <li class="fragment">Tous peuvent déposer et retirer de l&#39;argent</li> <li class="fragment">Seul le calcul des intérêts diffère</li>',l,$,C=`💡 On peut extraire un concept <span class="text-important">plus général</span> :
			<code>CompteBancaire</code>`,n,p,L="C&#39;est la <b>généralisation</b> qui mène naturellement à l&#39;<b>héritage</b> !";return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),i=g("ul"),i.innerHTML=m,l=v(),$=g("p"),$.innerHTML=C,n=v(),p=g("p"),p.innerHTML=L,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-mkht2s"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-s94fqs"&&(t.innerHTML=f),r=d(c),i=h(c,"UL",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-1txundk"&&(i.innerHTML=m),l=d(c),$=h(c,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-mlbnsz"&&($.innerHTML=C),n=d(c),p=h(c,"P",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-1e3gzbu"&&(p.innerHTML=L),this.h()},h(){w(i,"class","text-xl mt-6"),w($,"class","fragment mt-8 text-accent-200 font-bold"),w(p,"class","fragment text-important")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),u(c,i,x),u(c,l,x),u(c,$,x),u(c,n,x),u(c,p,x)},p:O,d(c){c&&(a(e),a(s),a(t),a(r),a(i),a(l),a($),a(n),a(p))}}}function ti(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function si(_){let e,o="Visualiser la généralisation",s,t,f,r,i=`Les éléments <span class="text-important">communs</span> sont dans la classe générale,<br/>
			les <span class="text-important">spécificités</span> dans les classes dérivées.`,m;return t=new He({props:{$$slots:{default:[ti]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("p"),r.innerHTML=i,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-14isadv"&&(e.textContent=o),s=d(l),E(t.$$.fragment,l),f=d(l),r=h(l,"P",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-lecgmk"&&(r.innerHTML=i),this.h()},h(){w(r,"class","fragment mt-4")},m(l,$){u(l,e,$),u(l,s,$),S(t,l,$),u(l,f,$),u(l,r,$),m=!0},p(l,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:l}),t.$set(C)},i(l){m||(P(t.$$.fragment,l),m=!0)},o(l){H(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a(f),a(r)),M(t,l)}}}function li(_){let e,o="Récapitulatif",s,t,f='<p class="fragment">✅ L&#39;<span class="text-important">encapsulation</span> protège vos données</p> <p class="fragment mt-4">✅ La <span class="text-important">généralisation</span> évite la duplication</p> <p class="fragment mt-4">✅ L&#39;<span class="text-important">héritage</span> structure votre code</p>',r,i,m="🔮 Voyons maintenant comment implémenter cela en Java !";return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=f,r=v(),i=g("p"),i.textContent=m,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-ri7iuh"&&(e.textContent=o),s=d(l),t=h(l,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-126wtu4"&&(t.innerHTML=f),r=d(l),i=h(l,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-15gbfwm"&&(i.textContent=m),this.h()},h(){w(t,"class","text-xl"),w(i,"class","fragment mt-8 text-accent-200 text-2xl font-bold")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function ni(_){let e,o="Encapsulation",s,t,f,r,i,m,l,$,C,n,p,L,c,x,I,q,D,j,V,W,z,U,te,A,F,ce,pe,me,_e,oe,ve,fe,xe,G,ne;return t=new R({props:{$$slots:{default:[Tn]},$$scope:{ctx:_}}}),r=new R({props:{$$slots:{default:[An]},$$scope:{ctx:_}}}),m=new R({props:{$$slots:{default:[In]},$$scope:{ctx:_}}}),$=new R({props:{$$slots:{default:[Dn]},$$scope:{ctx:_}}}),n=new R({props:{$$slots:{default:[kn]},$$scope:{ctx:_}}}),L=new R({props:{$$slots:{default:[zn]},$$scope:{ctx:_}}}),x=new R({props:{$$slots:{default:[Vn]},$$scope:{ctx:_}}}),q=new R({props:{$$slots:{default:[Un]},$$scope:{ctx:_}}}),j=new R({props:{$$slots:{default:[Jn]},$$scope:{ctx:_}}}),W=new R({props:{data_background_color:"#00353F",$$slots:{default:[Bn]},$$scope:{ctx:_}}}),U=new R({props:{data_background_color:"#00353F",$$slots:{default:[Qn]},$$scope:{ctx:_}}}),A=new R({props:{$$slots:{default:[Xn]},$$scope:{ctx:_}}}),ce=new R({props:{data_background_color:"#1a1a2e",$$slots:{default:[Wn]},$$scope:{ctx:_}}}),me=new R({props:{$$slots:{default:[yn]},$$scope:{ctx:_}}}),oe=new R({props:{$$slots:{default:[ei]},$$scope:{ctx:_}}}),fe=new R({props:{$$slots:{default:[si]},$$scope:{ctx:_}}}),G=new R({props:{$$slots:{default:[li]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),T(r.$$.fragment),i=v(),T(m.$$.fragment),l=v(),T($.$$.fragment),C=v(),T(n.$$.fragment),p=v(),T(L.$$.fragment),c=v(),T(x.$$.fragment),I=v(),T(q.$$.fragment),D=v(),T(j.$$.fragment),V=v(),T(W.$$.fragment),z=v(),T(U.$$.fragment),te=v(),T(A.$$.fragment),F=v(),T(ce.$$.fragment),pe=v(),T(me.$$.fragment),_e=v(),T(oe.$$.fragment),ve=v(),T(fe.$$.fragment),xe=v(),T(G.$$.fragment)},l(Q){e=h(Q,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-d8x7o6"&&(e.textContent=o),s=d(Q),E(t.$$.fragment,Q),f=d(Q),E(r.$$.fragment,Q),i=d(Q),E(m.$$.fragment,Q),l=d(Q),E($.$$.fragment,Q),C=d(Q),E(n.$$.fragment,Q),p=d(Q),E(L.$$.fragment,Q),c=d(Q),E(x.$$.fragment,Q),I=d(Q),E(q.$$.fragment,Q),D=d(Q),E(j.$$.fragment,Q),V=d(Q),E(W.$$.fragment,Q),z=d(Q),E(U.$$.fragment,Q),te=d(Q),E(A.$$.fragment,Q),F=d(Q),E(ce.$$.fragment,Q),pe=d(Q),E(me.$$.fragment,Q),_e=d(Q),E(oe.$$.fragment,Q),ve=d(Q),E(fe.$$.fragment,Q),xe=d(Q),E(G.$$.fragment,Q)},m(Q,ue){u(Q,e,ue),u(Q,s,ue),S(t,Q,ue),u(Q,f,ue),S(r,Q,ue),u(Q,i,ue),S(m,Q,ue),u(Q,l,ue),S($,Q,ue),u(Q,C,ue),S(n,Q,ue),u(Q,p,ue),S(L,Q,ue),u(Q,c,ue),S(x,Q,ue),u(Q,I,ue),S(q,Q,ue),u(Q,D,ue),S(j,Q,ue),u(Q,V,ue),S(W,Q,ue),u(Q,z,ue),S(U,Q,ue),u(Q,te,ue),S(A,Q,ue),u(Q,F,ue),S(ce,Q,ue),u(Q,pe,ue),S(me,Q,ue),u(Q,_e,ue),S(oe,Q,ue),u(Q,ve,ue),S(fe,Q,ue),u(Q,xe,ue),S(G,Q,ue),ne=!0},p(Q,ue){const K={};ue&1&&(K.$$scope={dirty:ue,ctx:Q}),t.$set(K);const re={};ue&1&&(re.$$scope={dirty:ue,ctx:Q}),r.$set(re);const Ce={};ue&1&&(Ce.$$scope={dirty:ue,ctx:Q}),m.$set(Ce);const X={};ue&1&&(X.$$scope={dirty:ue,ctx:Q}),$.$set(X);const $e={};ue&1&&($e.$$scope={dirty:ue,ctx:Q}),n.$set($e);const he={};ue&1&&(he.$$scope={dirty:ue,ctx:Q}),L.$set(he);const J={};ue&1&&(J.$$scope={dirty:ue,ctx:Q}),x.$set(J);const ie={};ue&1&&(ie.$$scope={dirty:ue,ctx:Q}),q.$set(ie);const B={};ue&1&&(B.$$scope={dirty:ue,ctx:Q}),j.$set(B);const ae={};ue&1&&(ae.$$scope={dirty:ue,ctx:Q}),W.$set(ae);const Le={};ue&1&&(Le.$$scope={dirty:ue,ctx:Q}),U.$set(Le);const we={};ue&1&&(we.$$scope={dirty:ue,ctx:Q}),A.$set(we);const qe={};ue&1&&(qe.$$scope={dirty:ue,ctx:Q}),ce.$set(qe);const Me={};ue&1&&(Me.$$scope={dirty:ue,ctx:Q}),me.$set(Me);const N={};ue&1&&(N.$$scope={dirty:ue,ctx:Q}),oe.$set(N);const le={};ue&1&&(le.$$scope={dirty:ue,ctx:Q}),fe.$set(le);const Ie={};ue&1&&(Ie.$$scope={dirty:ue,ctx:Q}),G.$set(Ie)},i(Q){ne||(P(t.$$.fragment,Q),P(r.$$.fragment,Q),P(m.$$.fragment,Q),P($.$$.fragment,Q),P(n.$$.fragment,Q),P(L.$$.fragment,Q),P(x.$$.fragment,Q),P(q.$$.fragment,Q),P(j.$$.fragment,Q),P(W.$$.fragment,Q),P(U.$$.fragment,Q),P(A.$$.fragment,Q),P(ce.$$.fragment,Q),P(me.$$.fragment,Q),P(oe.$$.fragment,Q),P(fe.$$.fragment,Q),P(G.$$.fragment,Q),ne=!0)},o(Q){H(t.$$.fragment,Q),H(r.$$.fragment,Q),H(m.$$.fragment,Q),H($.$$.fragment,Q),H(n.$$.fragment,Q),H(L.$$.fragment,Q),H(x.$$.fragment,Q),H(q.$$.fragment,Q),H(j.$$.fragment,Q),H(W.$$.fragment,Q),H(U.$$.fragment,Q),H(A.$$.fragment,Q),H(ce.$$.fragment,Q),H(me.$$.fragment,Q),H(oe.$$.fragment,Q),H(fe.$$.fragment,Q),H(G.$$.fragment,Q),ne=!1},d(Q){Q&&(a(e),a(s),a(f),a(i),a(l),a(C),a(p),a(c),a(I),a(D),a(V),a(z),a(te),a(F),a(pe),a(_e),a(ve),a(xe)),M(t,Q),M(r,Q),M(m,Q),M($,Q),M(n,Q),M(L,Q),M(x,Q),M(q,Q),M(j,Q),M(W,Q),M(U,Q),M(A,Q),M(ce,Q),M(me,Q),M(oe,Q),M(fe,Q),M(G,Q)}}}function ii(_){let e,o;return e=new R({props:{$$slots:{default:[ni]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){E(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const f={};t&1&&(f.$$scope={dirty:t,ctx:s}),e.$set(f)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){H(e.$$.fragment,s),o=!1},d(s){M(e,s)}}}class ai extends Se{constructor(e){super(),Ee(this,e,null,ii,Pe,{})}}function ri(_){let e,o="Représenter le monde réel",s,t,f='La POO vise à <span class="text-important">modéliser des concepts du monde réel</span> dans notre code.',r,i,m='<div class="fragment"><h4 class="text-accent-200">🏢 En entreprise</h4> <ul class="text-xl"><li>Un <b>Client</b></li> <li>Une <b>Facture</b></li> <li>Une <b>Transaction</b></li> <li>Un <b>Produit</b></li></ul></div> <div class="fragment"><h4 class="text-accent-200">🎮 Dans un jeu</h4> <ul class="text-xl"><li>Un <b>Joueur</b></li> <li>Un <b>Ennemi</b></li> <li>Une <b>Arme</b></li> <li>Un <b>Niveau</b></li></ul></div>',l,$,C="Chaque concept devient une <b>classe</b>, chaque instance concrète devient un <b>objet</b>.",n,p,L=`La POO est née de ce besoin : les programmeurs voulaient modéliser le monde réel dans leurs programmes.\r
			Avant, on avait des structures de données et des fonctions séparées. Maintenant, tout est regroupé.\r
			C'est plus intuitif pour l'humain : on pense en termes d'objets, pas en termes de bits.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),i=g("div"),i.innerHTML=m,l=v(),$=g("p"),$.innerHTML=C,n=v(),p=g("aside"),p.textContent=L,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1nsqnl5"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-gu1hhe"&&(t.innerHTML=f),r=d(c),i=h(c,"DIV",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-ssqwsa"&&(i.innerHTML=m),l=d(c),$=h(c,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-ys061m"&&($.innerHTML=C),n=d(c),p=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-10ve9bx"&&(p.textContent=L),this.h()},h(){w(i,"class","grid grid-cols-2 gap-6 mt-8"),w($,"class","fragment mt-8 text-important font-bold"),w(p,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),u(c,i,x),u(c,l,x),u(c,$,x),u(c,n,x),u(c,p,x)},p:O,d(c){c&&(a(e),a(s),a(t),a(r),a(i),a(l),a($),a(n),a(p))}}}function ui(_){let e,o="Qu'est-ce qu'un objet ?",s,t,f='Un <span class="text-important">objet</span> est une entité qui regroupe :',r,i,m='<li class="fragment"><b>Des données</b> → les <span class="text-important">attributs</span></li> <li class="fragment"><b>Des comportements</b> → les <span class="text-important">méthodes</span></li>',l,$,C='Un objet est une <b>instance</b> d&#39;une <span class="text-important">classe</span>.',n,p,L=`La classe c'est le plan, l'objet c'est la maison construite à partir du plan.\r
			On peut construire plusieurs maisons à partir du même plan.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),i=g("ul"),i.innerHTML=m,l=v(),$=g("p"),$.innerHTML=C,n=v(),p=g("aside"),p.textContent=L,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1j2xnsl"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-ikoph5"&&(t.innerHTML=f),r=d(c),i=h(c,"UL",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-urcwzy"&&(i.innerHTML=m),l=d(c),$=h(c,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-126jdov"&&($.innerHTML=C),n=d(c),p=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-1j9siwx"&&(p.textContent=L),this.h()},h(){w(i,"class","mt-4"),w($,"class","fragment mt-6"),w(p,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),u(c,i,x),u(c,l,x),u(c,$,x),u(c,n,x),u(c,p,x)},p:O,d(c){c&&(a(e),a(s),a(t),a(r),a(i),a(l),a($),a(n),a(p))}}}function oi(_){let e=`
class Client {
    // Attributs (données)
    String nom;
    String email;
    List<Commande> commandes;
    
    // Méthodes (comportements)
    void passerCommande() {...}
    void consulterFactures() {...}
}
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function ci(_){let e,o="Exemple concret : un Client",s,t,f,r='<h4 class="text-accent-200">Dans le monde réel</h4> <ul class="text-xl"><li>Nom, prénom</li> <li>Email, téléphone</li> <li>Historique d&#39;achats</li> <li>Peut passer commande</li> <li>Peut consulter ses factures</li></ul>',i,m,l,$="En POO",C,n,p,L,c="💡 La classe modélise le <b>concept</b>, l&#39;objet représente une <b>instance concrète</b>.",x,I,q=`C'est un mapping 1:1 entre le métier et le code. Les analystes parlent de Client, les développeurs codent Client.\r
			C'est là toute la puissance de la POO : on parle le même langage que le métier.\r
			C'est la base du Domain-Driven Design (DDD) qu'on voit dans les entreprises modernes.`,D;return n=new se({props:{$$slots:{default:[oi]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),f=g("div"),f.innerHTML=r,i=v(),m=g("div"),l=g("h4"),l.textContent=$,C=v(),T(n.$$.fragment),p=v(),L=g("p"),L.innerHTML=c,x=v(),I=g("aside"),I.textContent=q,this.h()},l(j){e=h(j,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-19m1xis"&&(e.textContent=o),s=d(j),t=h(j,"DIV",{class:!0});var V=de(t);f=h(V,"DIV",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-b6jw6w"&&(f.innerHTML=r),i=d(V),m=h(V,"DIV",{class:!0});var W=de(m);l=h(W,"H4",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-zddvi7"&&(l.textContent=$),C=d(W),E(n.$$.fragment,W),W.forEach(a),V.forEach(a),p=d(j),L=h(j,"P",{class:!0,"data-svelte-h":!0}),b(L)!=="svelte-1afjqzm"&&(L.innerHTML=c),x=d(j),I=h(j,"ASIDE",{class:!0,"data-svelte-h":!0}),b(I)!=="svelte-1lbuzzl"&&(I.textContent=q),this.h()},h(){w(f,"class","flex-1"),w(l,"class","text-accent-200"),w(m,"class","flex-1 fragment"),w(t,"class","flex flex-row gap-8 items-center"),w(L,"class","fragment mt-6 text-important"),w(I,"class","notes")},m(j,V){u(j,e,V),u(j,s,V),u(j,t,V),y(t,f),y(t,i),y(t,m),y(m,l),y(m,C),S(n,m,null),u(j,p,V),u(j,L,V),u(j,x,V),u(j,I,V),D=!0},p(j,V){const W={};V&1&&(W.$$scope={dirty:V,ctx:j}),n.$set(W)},i(j){D||(P(n.$$.fragment,j),D=!0)},o(j){H(n.$$.fragment,j),D=!1},d(j){j&&(a(e),a(s),a(t),a(p),a(L),a(x),a(I)),M(n)}}}function $i(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function fi(_){let e,o="Classe vs Objet",s,t,f='<div class="p-4 bg-accent-950 rounded-lg"><h4 class="text-important">📐 Classe</h4> <p class="text-xl mt-2">Le <b>plan</b>, le modèle</p> <p class="text-sm text-gray-400 mt-2">Définit les attributs et méthodes</p></div> <div class="p-4 bg-accent-950 rounded-lg"><h4 class="text-important">🏠 Objet</h4> <p class="text-xl mt-2">L&#39;<b>instance</b>, la réalisation</p> <p class="text-sm text-gray-400 mt-2">Créé à partir de la classe</p></div>',r,i,m;return i=new He({props:{className:"mt-6 fragment",$$slots:{default:[$i]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=f,r=v(),T(i.$$.fragment),this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-aj9wlo"&&(e.textContent=o),s=d(l),t=h(l,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-17fw1f8"&&(t.innerHTML=f),r=d(l),E(i.$$.fragment,l),this.h()},h(){w(t,"class","grid grid-cols-2 gap-8 mt-6")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),S(i,l,$),m=!0},p(l,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:l}),i.$set(C)},i(l){m||(P(i.$$.fragment,l),m=!0)},o(l){H(i.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a(t),a(r)),M(i,l)}}}function pi(_){let e,o="Créer des objets",s,t,f="Le mot-clé new et les constructeurs",r,i,m=`Maintenant qu'on sait ce qu'est un objet, voyons comment en créer un.\r
			C'est la partie pratique : comment ça marche en mémoire, comment initialiser proprement.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"H2",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-1mkb5o2"&&(e.textContent=o),s=d(l),t=h(l,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-4k1pcc"&&(t.textContent=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-q4shbn"&&(i.textContent=m),this.h()},h(){w(e,"class","text-5xl"),w(t,"class","text-2xl text-gray-400"),w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function mi(_){let e=`
Personne jean = new Personne();
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function di(_){let e,o="Créer un objet avec new",s,t,f='Pour créer un objet, on utilise le mot-clé <code class="text-important">new</code> suivi du nom de la classe.',r,i,m,l,$='<p>Que se passe-t-il ?</p> <ol class="text-xl"><li class="fragment">Java alloue de la mémoire pour l&#39;objet</li> <li class="fragment">Le <b>constructeur</b> de la classe est appelé</li> <li class="fragment">L&#39;objet est prêt à être utilisé</li></ol>',C,n,p=`En interne, Java alloue de la mémoire dans le "heap" (tas). La variable jean contient une référence vers cet espace.\r
			Contrairement au C, vous n'avez pas à gérer la mémoire vous-même. Le Garbage Collector s'en charge.\r
			Chaque fois que vous écrivez "new", vous créez un NOUVEL objet en mémoire.`,L;return i=new se({props:{$$slots:{default:[mi]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),T(i.$$.fragment),m=v(),l=g("div"),l.innerHTML=$,C=v(),n=g("aside"),n.textContent=p,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1b88vsb"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1d9k2wi"&&(t.innerHTML=f),r=d(c),E(i.$$.fragment,c),m=d(c),l=h(c,"DIV",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-u2udmp"&&(l.innerHTML=$),C=d(c),n=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-11eo1e6"&&(n.textContent=p),this.h()},h(){w(l,"class","fragment mt-6"),w(n,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),S(i,c,x),u(c,m,x),u(c,l,x),u(c,C,x),u(c,n,x),L=!0},p(c,x){const I={};x&1&&(I.$$scope={dirty:x,ctx:c}),i.$set(I)},i(c){L||(P(i.$$.fragment,c),L=!0)},o(c){H(i.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(r),a(m),a(l),a(C),a(n)),M(i,c)}}}function vi(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function xi(_){let e,o="Le constructeur",s,t,f="Le constructeur est une <b>méthode spéciale</b> qui initialise l&#39;objet.",r,i,m,l,$=`Le constructeur a le même nom que la classe, et pas de type de retour.\r
			this fait référence à l'objet en cours de création.`,C;return i=new se({props:{lines:"5-9|12",$$slots:{default:[vi]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),T(i.$$.fragment),m=v(),l=g("aside"),l.textContent=$,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1mde0ng"&&(e.textContent=o),s=d(n),t=h(n,"P",{"data-svelte-h":!0}),b(t)!=="svelte-acm114"&&(t.innerHTML=f),r=d(n),E(i.$$.fragment,n),m=d(n),l=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-czfue9"&&(l.textContent=$),this.h()},h(){w(l,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),u(n,t,p),u(n,r,p),S(i,n,p),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),i.$set(L)},i(n){C||(P(i.$$.fragment,n),C=!0)},o(n){H(i.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(t),a(r),a(m),a(l)),M(i,n)}}}function _i(_){let e=`
public Personne(String nom, String prenom, int age) {
    this.nom = nom;      // this.nom = attribut de l'objet
    this.prenom = prenom; // nom = paramètre du constructeur
    this.age = age;
}
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Ci(_){let e,o="Le mot-clé this",s,t,f='<code class="text-important">this</code> fait référence à l&#39;objet <b>courant</b>.',r,i,m,l,$="<code>this</code> permet de distinguer l&#39;attribut du paramètre quand ils ont le même nom.",C,n,p=`C'est une convention très courante : donner le même nom au paramètre et à l'attribut.\r
			Sans "this", le paramètre "cache" l'attribut (shadowing). this lève l'ambiguïté.\r
			Certains préfèrent préfixer les paramètres (pNom) ou les attributs (_nom). C'est une question de convention d'équipe.`,L;return i=new se({props:{$$slots:{default:[_i]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),T(i.$$.fragment),m=v(),l=g("p"),l.innerHTML=$,C=v(),n=g("aside"),n.textContent=p,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-639qc6"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1d8cgp5"&&(t.innerHTML=f),r=d(c),E(i.$$.fragment,c),m=d(c),l=h(c,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-vxfnkp"&&(l.innerHTML=$),C=d(c),n=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1sk7s1j"&&(n.textContent=p),this.h()},h(){w(l,"class","fragment mt-4 text-accent-200"),w(n,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),S(i,c,x),u(c,m,x),u(c,l,x),u(c,C,x),u(c,n,x),L=!0},p(c,x){const I={};x&1&&(I.$$scope={dirty:x,ctx:c}),i.$set(I)},i(c){L||(P(i.$$.fragment,c),L=!0)},o(c){H(i.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(r),a(m),a(l),a(C),a(n)),M(i,c)}}}function hi(_){let e=`
public class Personne {
    String nom;
    int age;
    // Pas de constructeur défini → constructeur par défaut
}

Personne p = new Personne();  // ✅ OK
p.nom = "Jean";               // On initialise après
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function gi(_){let e,o="Constructeur par défaut",s,t,f="Si vous ne définissez aucun constructeur, Java en crée un <b>par défaut</b> (sans paramètres).",r,i,m,l,$="⚠️ Dès que vous définissez un constructeur, le constructeur par défaut disparaît !",C,n,p=`C'est un piège classique ! Si vous définissez Personne(String nom), alors new Personne() ne compile plus.\r
			Solution : définir explicitement un constructeur sans paramètres si vous en avez besoin.\r
			Les frameworks (Hibernate, Spring) ont souvent besoin du constructeur par défaut pour l'instanciation dynamique.`,L;return i=new se({props:{$$slots:{default:[hi]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),T(i.$$.fragment),m=v(),l=g("p"),l.textContent=$,C=v(),n=g("aside"),n.textContent=p,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-u9v1v7"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-m9el1s"&&(t.innerHTML=f),r=d(c),E(i.$$.fragment,c),m=d(c),l=h(c,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-108fh85"&&(l.textContent=$),C=d(c),n=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1442ab0"&&(n.textContent=p),this.h()},h(){w(l,"class","fragment text-red-400 mt-4"),w(n,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),S(i,c,x),u(c,m,x),u(c,l,x),u(c,C,x),u(c,n,x),L=!0},p(c,x){const I={};x&1&&(I.$$scope={dirty:x,ctx:c}),i.$set(I)},i(c){L||(P(i.$$.fragment,c),L=!0)},o(c){H(i.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(r),a(m),a(l),a(C),a(n)),M(i,c)}}}function bi(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Li(_){let e,o="Surcharge de constructeurs",s,t,f="Une classe peut avoir <b>plusieurs constructeurs</b> avec des paramètres différents.",r,i,m,l,$="<code>this(...)</code> permet d&#39;appeler un autre constructeur de la même classe.",C,n,p=`C'est le "constructor chaining". Très utile pour éviter la duplication de code.\r
			Le this() doit être la première instruction du constructeur, comme super().\r
			On voit souvent ça avec des valeurs par défaut : le constructeur simple appelle le complet.`,L;return i=new se({props:{lines:"6-10|12-15",$$slots:{default:[bi]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),T(i.$$.fragment),m=v(),l=g("p"),l.innerHTML=$,C=v(),n=g("aside"),n.textContent=p,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1v37pf9"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1x1viiv"&&(t.innerHTML=f),r=d(c),E(i.$$.fragment,c),m=d(c),l=h(c,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-sqjnx"&&(l.innerHTML=$),C=d(c),n=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1x33foq"&&(n.textContent=p),this.h()},h(){w(l,"class","fragment text-accent-200 mt-4"),w(n,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),S(i,c,x),u(c,m,x),u(c,l,x),u(c,C,x),u(c,n,x),L=!0},p(c,x){const I={};x&1&&(I.$$scope={dirty:x,ctx:c}),i.$set(I)},i(c){L||(P(i.$$.fragment,c),L=!0)},o(c){H(i.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(r),a(m),a(l),a(C),a(n)),M(i,c)}}}function wi(_){let e,o="Les références en Java",s,t,f="Comprendre ce que contient vraiment une variable",r,i,m=`Avant de continuer, il faut comprendre un concept fondamental.\r
			En Java, les variables d'objets ne contiennent pas l'objet lui-même... mais une référence vers l'objet.\r
			C'est comme une adresse postale vs la maison elle-même.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"H2",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-w9ik6f"&&(e.textContent=o),s=d(l),t=h(l,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-19x3pgb"&&(t.textContent=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-28inpz"&&(i.textContent=m),this.h()},h(){w(e,"class","text-5xl"),w(t,"class","text-2xl text-gray-400"),w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function qi(_){let e=`
Personne jean = new Personne("Jean");
Personne copie = jean;  // copie la RÉFÉRENCE, pas l'objet !

copie.setAge(30);
System.out.println(jean.getAge());  // Affiche 30 ! 😱
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Mi(_){let e,o="Une variable = une référence",s,t,f="Quand vous écrivez <code>Personne jean = new Personne();</code>, que se passe-t-il ?",r,i,m='<div class="fragment"><h4 class="text-accent-200">📍 La variable</h4> <p class="text-xl">Contient une <b>adresse mémoire</b></p> <p class="text-sm text-gray-400">(comme un numéro de casier)</p></div> <div class="fragment"><h4 class="text-accent-200">📦 L&#39;objet</h4> <p class="text-xl">Stocké ailleurs en mémoire (le <b>heap</b>)</p> <p class="text-sm text-gray-400">(le contenu du casier)</p></div>',l,$,C,n,p=`C'est LE piège des débutants. Deux variables peuvent pointer vers le même objet.\r
			Modifier via une variable modifie l'objet, visible depuis l'autre variable.\r
			C'est différent des types primitifs (int, double) qui sont copiés par valeur.`,L;return $=new se({props:{class:"fragment mt-6",$$slots:{default:[qi]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),i=g("div"),i.innerHTML=m,l=v(),T($.$$.fragment),C=v(),n=g("aside"),n.textContent=p,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1cxx8q6"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1led4kt"&&(t.innerHTML=f),r=d(c),i=h(c,"DIV",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-6gkr7d"&&(i.innerHTML=m),l=d(c),E($.$$.fragment,c),C=d(c),n=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-d4bv15"&&(n.textContent=p),this.h()},h(){w(i,"class","grid grid-cols-2 gap-8 mt-6"),w(n,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),u(c,i,x),u(c,l,x),S($,c,x),u(c,C,x),u(c,n,x),L=!0},p(c,x){const I={};x&1&&(I.$$scope={dirty:x,ctx:c}),$.$set(I)},i(c){L||(P($.$$.fragment,c),L=!0)},o(c){H($.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(r),a(i),a(l),a(C),a(n)),M($,c)}}}function Hi(_){let e=`
Personne personne = null;  // Aucun objet référencé

// C'est souvent le cas quand :
Personne resultat = chercherParNom("Toto");  // Pas trouvé → null
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Pi(_){let e,o="La valeur spéciale : null",s,t,f='Une variable peut ne pointer vers <b>rien</b>. C&#39;est la valeur <code class="text-important">null</code>.',r,i,m,l,$="⚠️ <code>null</code> signifie &quot;absence d&#39;objet&quot;. Ce n&#39;est pas un objet vide !",C,n,p=`Null c'est "rien", pas "vide". Une liste vide existe (0 éléments), null n'existe pas du tout.\r
			C'est une distinction cruciale. Null = pas de référence. Vide = objet qui ne contient rien.`,L;return i=new se({props:{$$slots:{default:[Hi]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),T(i.$$.fragment),m=v(),l=g("p"),l.innerHTML=$,C=v(),n=g("aside"),n.textContent=p,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-upq93p"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-2fjoo4"&&(t.innerHTML=f),r=d(c),E(i.$$.fragment,c),m=d(c),l=h(c,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-yi5ddp"&&(l.innerHTML=$),C=d(c),n=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-j2xogk"&&(n.textContent=p),this.h()},h(){w(l,"class","fragment mt-6 text-red-400 font-bold"),w(n,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),S(i,c,x),u(c,m,x),u(c,l,x),u(c,C,x),u(c,n,x),L=!0},p(c,x){const I={};x&1&&(I.$$scope={dirty:x,ctx:c}),i.$set(I)},i(c){L||(P(i.$$.fragment,c),L=!0)},o(c){H(i.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(r),a(m),a(l),a(C),a(n)),M(i,c)}}}function Si(_){let e=`
Personne personne = null;
personne.getNom();  // ❌ NullPointerException !

// Le message d'erreur :
// Exception in thread "main" java.lang.NullPointerException:
// Cannot invoke "Personne.getNom()" because "personne" is null
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Ei(_){let e=`
if (personne != null) {
    System.out.println(personne.getNom());
}
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Ti(_){let e,o="Le bug le plus fréquent : NullPointerException",s,t,f="Si vous appelez une méthode sur <code>null</code>... 💥",r,i,m,l,$,C="✅ Toujours vérifier avant d'utiliser :",n,p,L,c,x=`C'est LE bug numéro 1 en Java. Tony Hoare, l'inventeur de null, l'a appelé "son erreur à un milliard de dollars".\r
			Vous verrez NullPointerException des centaines de fois dans votre carrière. Apprenez à le débugger !\r
			Le message vous dit quelle variable est null. Remontez le fil pour comprendre pourquoi.`,I;return i=new se({props:{$$slots:{default:[Si]},$$scope:{ctx:_}}}),p=new se({props:{$$slots:{default:[Ei]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),T(i.$$.fragment),m=v(),l=g("div"),$=g("p"),$.textContent=C,n=v(),T(p.$$.fragment),L=v(),c=g("aside"),c.textContent=x,this.h()},l(q){e=h(q,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-v1skb"&&(e.textContent=o),s=d(q),t=h(q,"P",{"data-svelte-h":!0}),b(t)!=="svelte-rde3pg"&&(t.innerHTML=f),r=d(q),E(i.$$.fragment,q),m=d(q),l=h(q,"DIV",{class:!0});var D=de(l);$=h(D,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-10calxs"&&($.textContent=C),n=d(D),E(p.$$.fragment,D),D.forEach(a),L=d(q),c=h(q,"ASIDE",{class:!0,"data-svelte-h":!0}),b(c)!=="svelte-hug8y1"&&(c.textContent=x),this.h()},h(){w($,"class","text-green-400 font-bold"),w(l,"class","fragment mt-6"),w(c,"class","notes")},m(q,D){u(q,e,D),u(q,s,D),u(q,t,D),u(q,r,D),S(i,q,D),u(q,m,D),u(q,l,D),y(l,$),y(l,n),S(p,l,null),u(q,L,D),u(q,c,D),I=!0},p(q,D){const j={};D&1&&(j.$$scope={dirty:D,ctx:q}),i.$set(j);const V={};D&1&&(V.$$scope={dirty:D,ctx:q}),p.$set(V)},i(q){I||(P(i.$$.fragment,q),P(p.$$.fragment,q),I=!0)},o(q){H(i.$$.fragment,q),H(p.$$.fragment,q),I=!1},d(q){q&&(a(e),a(s),a(t),a(r),a(m),a(l),a(L),a(c)),M(i,q),M(p)}}}function Ai(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Ii(_){let e,o="Bonne pratique : programmation défensive",s,t,f,r,i="💡 En entreprise, beaucoup d&#39;erreurs viennent de <code>null</code> non géré.",m,l,$=`C'est la base de la "programmation défensive". Ne faites jamais confiance aux données entrantes.\r
			Les frameworks modernes (Spring) peuvent injecter @NonNull pour éviter ça.\r
			Depuis Java 8, on a Optional pour mieux gérer l'absence de valeur.`,C;return t=new se({props:{$$slots:{default:[Ai]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("p"),r.innerHTML=i,m=v(),l=g("aside"),l.textContent=$,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1o2ciiy"&&(e.textContent=o),s=d(n),E(t.$$.fragment,n),f=d(n),r=h(n,"P",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-i5ewro"&&(r.innerHTML=i),m=d(n),l=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1elh71j"&&(l.textContent=$),this.h()},h(){w(r,"class","fragment mt-4 text-accent-200"),w(l,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),S(t,n,p),u(n,f,p),u(n,r,p),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),t.$set(L)},i(n){C||(P(t.$$.fragment,n),C=!0)},o(n){H(t.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(f),a(r),a(m),a(l)),M(t,n)}}}function ji(_){let e,o="Comparer des objets",s,t,f="== vs equals() : le piège classique",r,i,m=`Maintenant qu'on sait ce qu'est une référence, on peut comprendre un autre piège majeur.\r
			Comment comparer deux objets ? C'est plus subtil qu'il n'y paraît.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"H2",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-14qtv6e"&&(e.textContent=o),s=d(l),t=h(l,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1plewz8"&&(t.textContent=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-5njids"&&(i.textContent=m),this.h()},h(){w(e,"class","text-5xl"),w(t,"class","text-2xl text-gray-400"),w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function Di(_){let e=`
String a = new String("Bonjour");
String b = new String("Bonjour");

System.out.println(a == b);  // false ! 😱
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function ki(_){let e=`
@startuml
object "a" as a
object "b" as b
object "String: Bonjour" as s1
object "String: Bonjour" as s2

a --> s1 : référence
b --> s2 : référence
@enduml
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Oi(_){let e,o="Le piège de ==",s,t,f,r,i="<code>==</code> compare les <b>références</b> (les adresses mémoire), pas le contenu !",m,l,$,C,n=`a et b pointent vers deux objets différents en mémoire. Même si le contenu est identique, ce sont deux casiers différents.\r
			C'est le piège classique des débutants avec les String. "Bonjour" == "Bonjour" mais new String != new String.`,p;return t=new se({props:{$$slots:{default:[Di]},$$scope:{ctx:_}}}),l=new He({props:{className:"fragment",$$slots:{default:[ki]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("p"),r.innerHTML=i,m=v(),T(l.$$.fragment),$=v(),C=g("aside"),C.textContent=n,this.h()},l(L){e=h(L,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-lc3ih1"&&(e.textContent=o),s=d(L),E(t.$$.fragment,L),f=d(L),r=h(L,"P",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-czybt8"&&(r.innerHTML=i),m=d(L),E(l.$$.fragment,L),$=d(L),C=h(L,"ASIDE",{class:!0,"data-svelte-h":!0}),b(C)!=="svelte-2rsw1p"&&(C.textContent=n),this.h()},h(){w(r,"class","fragment mt-6"),w(C,"class","notes")},m(L,c){u(L,e,c),u(L,s,c),S(t,L,c),u(L,f,c),u(L,r,c),u(L,m,c),S(l,L,c),u(L,$,c),u(L,C,c),p=!0},p(L,c){const x={};c&1&&(x.$$scope={dirty:c,ctx:L}),t.$set(x);const I={};c&1&&(I.$$scope={dirty:c,ctx:L}),l.$set(I)},i(L){p||(P(t.$$.fragment,L),P(l.$$.fragment,L),p=!0)},o(L){H(t.$$.fragment,L),H(l.$$.fragment,L),p=!1},d(L){L&&(a(e),a(s),a(f),a(r),a(m),a($),a(C)),M(t,L),M(l,L)}}}function zi(_){let e=`
String a = new String("Bonjour");
String b = new String("Bonjour");

System.out.println(a.equals(b));  // true ✅
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Vi(_){let e,o="La solution : equals()",s,t,f='Pour comparer le <b>contenu</b> des objets, utilisez la méthode <code class="text-important">equals()</code>.',r,i,m,l,$='<div class="p-4 bg-red-900/30 rounded-lg"><h4 class="text-red-400">== (double égal)</h4> <p class="text-sm">Compare les <b>références</b></p> <p class="text-xs text-gray-400">&quot;Est-ce le même objet ?&quot;</p></div> <div class="p-4 bg-green-900/30 rounded-lg"><h4 class="text-green-400">equals()</h4> <p class="text-sm">Compare le <b>contenu</b></p> <p class="text-xs text-gray-400">&quot;Ont-ils la même valeur ?&quot;</p></div>',C,n,p=`C'est LA règle à retenir. Pour les objets, utilisez equals(). Pour les primitifs (int, double), utilisez ==.\r
			String, Integer, toutes les classes du JDK redéfinissent equals() pour comparer le contenu.`,L;return i=new se({props:{$$slots:{default:[zi]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),T(i.$$.fragment),m=v(),l=g("div"),l.innerHTML=$,C=v(),n=g("aside"),n.textContent=p,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-15y6242"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-gx1ssy"&&(t.innerHTML=f),r=d(c),E(i.$$.fragment,c),m=d(c),l=h(c,"DIV",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1ccb8r3"&&(l.innerHTML=$),C=d(c),n=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1lxylnx"&&(n.textContent=p),this.h()},h(){w(l,"class","fragment mt-6 grid grid-cols-2 gap-4"),w(n,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),S(i,c,x),u(c,m,x),u(c,l,x),u(c,C,x),u(c,n,x),L=!0},p(c,x){const I={};x&1&&(I.$$scope={dirty:x,ctx:c}),i.$set(I)},i(c){L||(P(i.$$.fragment,c),L=!0)},o(c){H(i.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(r),a(m),a(l),a(C),a(n)),M(i,c)}}}function Ri(_){let e=`
String a = null;
String b = "Bonjour";

a.equals(b);  // ❌ NullPointerException !
b.equals(a);  // ✅ false (equals gère null)
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Ui(_){let e=`
// Pattern sécurisé avec une constante
"admin".equals(username);  // ✅ Jamais de NPE
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Ni(_){let e,o="⚠️ Attention à null avec equals()",s,t,f,r,i='💡 Astuce : mettez la valeur "sûre" (non-null) à gauche !',m,l,$,C,n=`C'est un pattern très courant. En mettant la constante à gauche, on évite le NPE.\r
			Depuis Java 7, on a aussi Objects.equals(a, b) qui gère null des deux côtés.`,p;return t=new se({props:{$$slots:{default:[Ri]},$$scope:{ctx:_}}}),l=new se({props:{class:"fragment",$$slots:{default:[Ui]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("p"),r.textContent=i,m=v(),T(l.$$.fragment),$=v(),C=g("aside"),C.textContent=n,this.h()},l(L){e=h(L,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-fvccpn"&&(e.textContent=o),s=d(L),E(t.$$.fragment,L),f=d(L),r=h(L,"P",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-eaq14x"&&(r.textContent=i),m=d(L),E(l.$$.fragment,L),$=d(L),C=h(L,"ASIDE",{class:!0,"data-svelte-h":!0}),b(C)!=="svelte-1qgora1"&&(C.textContent=n),this.h()},h(){w(r,"class","fragment mt-6 text-accent-200 font-bold"),w(C,"class","notes")},m(L,c){u(L,e,c),u(L,s,c),S(t,L,c),u(L,f,c),u(L,r,c),u(L,m,c),S(l,L,c),u(L,$,c),u(L,C,c),p=!0},p(L,c){const x={};c&1&&(x.$$scope={dirty:c,ctx:L}),t.$set(x);const I={};c&1&&(I.$$scope={dirty:c,ctx:L}),l.$set(I)},i(L){p||(P(t.$$.fragment,L),P(l.$$.fragment,L),p=!0)},o(L){H(t.$$.fragment,L),H(l.$$.fragment,L),p=!1},d(L){L&&(a(e),a(s),a(f),a(r),a(m),a($),a(C)),M(t,L),M(l,L)}}}function Ji(_){let e,o="Récapitulatif : comparaisons",s,t,f='<thead><tr><th class="p-3">Type</th> <th class="p-3">Opérateur</th> <th class="p-3">Exemple</th></tr></thead> <tbody><tr><td class="p-3">Primitifs (int, double...)</td> <td class="p-3"><code>==</code></td> <td class="p-3"><code>age == 25</code></td></tr> <tr><td class="p-3">Objets (contenu)</td> <td class="p-3"><code>equals()</code></td> <td class="p-3"><code>nom.equals(&quot;Jean&quot;)</code></td></tr> <tr><td class="p-3">Objets (même instance)</td> <td class="p-3"><code>==</code></td> <td class="p-3"><code>obj1 == obj2</code></td></tr> <tr><td class="p-3">Vérifier null</td> <td class="p-3"><code>==</code></td> <td class="p-3"><code>obj == null</code></td></tr></tbody>',r,i,m=`Retenez ce tableau ! Primitifs → ==. Objets contenu → equals(). Null check → ==.\r
			On verra plus tard comment redéfinir equals() pour vos propres classes.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("table"),t.innerHTML=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1fu33u2"&&(e.textContent=o),s=d(l),t=h(l,"TABLE",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1wzfw0k"&&(t.innerHTML=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-o2lw9f"&&(i.textContent=m),this.h()},h(){w(t,"class","text-xl"),w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function Bi(_){let e,o="Récapitulatif",s,t,f='<div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">📐 Classes</h4> <ul class="text-sm mt-2"><li>Classe = plan</li> <li>Objet = instance</li> <li>Attributs + méthodes</li></ul></div> <div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">🏗️ Création</h4> <ul class="text-sm mt-2"><li><code>new</code> crée un objet</li> <li>Constructeur initialise</li> <li><code>this</code> = objet courant</li></ul></div> <div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">🔗 Références</h4> <ul class="text-sm mt-2"><li>Variable = référence</li> <li><code>null</code> = rien</li> <li><code>equals()</code> pour comparer</li></ul></div>',r,i,m="🔮 Maintenant, voyons comment <b>protéger</b> nos données avec l&#39;encapsulation !",l,$,C=`Voilà les bases. Classe = moule, objet = instance concrète. New = création, constructeur = initialisation.\r
			Les variables contiennent des références, null = pas d'objet, equals() pour comparer le contenu.\r
			On passe à l'encapsulation pour apprendre à protéger nos données.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=f,r=v(),i=g("p"),i.innerHTML=m,l=v(),$=g("aside"),$.textContent=C,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-ri7iuh"&&(e.textContent=o),s=d(n),t=h(n,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1uwtkma"&&(t.innerHTML=f),r=d(n),i=h(n,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-1msb34k"&&(i.innerHTML=m),l=d(n),$=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-1oez020"&&($.textContent=C),this.h()},h(){w(t,"class","grid grid-cols-3 gap-4 mt-6"),w(i,"class","fragment mt-8 text-accent-200 text-xl"),w($,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),u(n,t,p),u(n,r,p),u(n,i,p),u(n,l,p),u(n,$,p)},p:O,d(n){n&&(a(e),a(s),a(t),a(r),a(i),a(l),a($))}}}function Fi(_){let e,o="Généralités sur la POO",s,t,f,r,i,m,l,$,C,n,p,L,c,x,I,q,D,j,V,W,z,U,te,A,F,ce,pe,me,_e,oe,ve,fe,xe,G,ne,Q,ue,K,re,Ce,X,$e,he;return t=new R({props:{$$slots:{default:[ri]},$$scope:{ctx:_}}}),r=new R({props:{$$slots:{default:[ui]},$$scope:{ctx:_}}}),m=new R({props:{$$slots:{default:[ci]},$$scope:{ctx:_}}}),$=new R({props:{$$slots:{default:[fi]},$$scope:{ctx:_}}}),n=new R({props:{data_background_color:"#1a1a2e",$$slots:{default:[pi]},$$scope:{ctx:_}}}),L=new R({props:{$$slots:{default:[di]},$$scope:{ctx:_}}}),x=new R({props:{$$slots:{default:[xi]},$$scope:{ctx:_}}}),q=new R({props:{$$slots:{default:[Ci]},$$scope:{ctx:_}}}),j=new R({props:{$$slots:{default:[gi]},$$scope:{ctx:_}}}),W=new R({props:{$$slots:{default:[Li]},$$scope:{ctx:_}}}),U=new R({props:{data_background_color:"#1a1a2e",$$slots:{default:[wi]},$$scope:{ctx:_}}}),A=new R({props:{$$slots:{default:[Mi]},$$scope:{ctx:_}}}),ce=new R({props:{$$slots:{default:[Pi]},$$scope:{ctx:_}}}),me=new R({props:{$$slots:{default:[Ti]},$$scope:{ctx:_}}}),oe=new R({props:{$$slots:{default:[Ii]},$$scope:{ctx:_}}}),fe=new R({props:{data_background_color:"#1a1a2e",$$slots:{default:[ji]},$$scope:{ctx:_}}}),G=new R({props:{$$slots:{default:[Oi]},$$scope:{ctx:_}}}),Q=new R({props:{$$slots:{default:[Vi]},$$scope:{ctx:_}}}),K=new R({props:{$$slots:{default:[Ni]},$$scope:{ctx:_}}}),Ce=new R({props:{$$slots:{default:[Ji]},$$scope:{ctx:_}}}),$e=new R({props:{$$slots:{default:[Bi]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),T(r.$$.fragment),i=v(),T(m.$$.fragment),l=v(),T($.$$.fragment),C=v(),T(n.$$.fragment),p=v(),T(L.$$.fragment),c=v(),T(x.$$.fragment),I=v(),T(q.$$.fragment),D=v(),T(j.$$.fragment),V=v(),T(W.$$.fragment),z=v(),T(U.$$.fragment),te=v(),T(A.$$.fragment),F=v(),T(ce.$$.fragment),pe=v(),T(me.$$.fragment),_e=v(),T(oe.$$.fragment),ve=v(),T(fe.$$.fragment),xe=v(),T(G.$$.fragment),ne=v(),T(Q.$$.fragment),ue=v(),T(K.$$.fragment),re=v(),T(Ce.$$.fragment),X=v(),T($e.$$.fragment)},l(J){e=h(J,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-lsottk"&&(e.textContent=o),s=d(J),E(t.$$.fragment,J),f=d(J),E(r.$$.fragment,J),i=d(J),E(m.$$.fragment,J),l=d(J),E($.$$.fragment,J),C=d(J),E(n.$$.fragment,J),p=d(J),E(L.$$.fragment,J),c=d(J),E(x.$$.fragment,J),I=d(J),E(q.$$.fragment,J),D=d(J),E(j.$$.fragment,J),V=d(J),E(W.$$.fragment,J),z=d(J),E(U.$$.fragment,J),te=d(J),E(A.$$.fragment,J),F=d(J),E(ce.$$.fragment,J),pe=d(J),E(me.$$.fragment,J),_e=d(J),E(oe.$$.fragment,J),ve=d(J),E(fe.$$.fragment,J),xe=d(J),E(G.$$.fragment,J),ne=d(J),E(Q.$$.fragment,J),ue=d(J),E(K.$$.fragment,J),re=d(J),E(Ce.$$.fragment,J),X=d(J),E($e.$$.fragment,J)},m(J,ie){u(J,e,ie),u(J,s,ie),S(t,J,ie),u(J,f,ie),S(r,J,ie),u(J,i,ie),S(m,J,ie),u(J,l,ie),S($,J,ie),u(J,C,ie),S(n,J,ie),u(J,p,ie),S(L,J,ie),u(J,c,ie),S(x,J,ie),u(J,I,ie),S(q,J,ie),u(J,D,ie),S(j,J,ie),u(J,V,ie),S(W,J,ie),u(J,z,ie),S(U,J,ie),u(J,te,ie),S(A,J,ie),u(J,F,ie),S(ce,J,ie),u(J,pe,ie),S(me,J,ie),u(J,_e,ie),S(oe,J,ie),u(J,ve,ie),S(fe,J,ie),u(J,xe,ie),S(G,J,ie),u(J,ne,ie),S(Q,J,ie),u(J,ue,ie),S(K,J,ie),u(J,re,ie),S(Ce,J,ie),u(J,X,ie),S($e,J,ie),he=!0},p(J,ie){const B={};ie&1&&(B.$$scope={dirty:ie,ctx:J}),t.$set(B);const ae={};ie&1&&(ae.$$scope={dirty:ie,ctx:J}),r.$set(ae);const Le={};ie&1&&(Le.$$scope={dirty:ie,ctx:J}),m.$set(Le);const we={};ie&1&&(we.$$scope={dirty:ie,ctx:J}),$.$set(we);const qe={};ie&1&&(qe.$$scope={dirty:ie,ctx:J}),n.$set(qe);const Me={};ie&1&&(Me.$$scope={dirty:ie,ctx:J}),L.$set(Me);const N={};ie&1&&(N.$$scope={dirty:ie,ctx:J}),x.$set(N);const le={};ie&1&&(le.$$scope={dirty:ie,ctx:J}),q.$set(le);const Ie={};ie&1&&(Ie.$$scope={dirty:ie,ctx:J}),j.$set(Ie);const Te={};ie&1&&(Te.$$scope={dirty:ie,ctx:J}),W.$set(Te);const ze={};ie&1&&(ze.$$scope={dirty:ie,ctx:J}),U.$set(ze);const Ae={};ie&1&&(Ae.$$scope={dirty:ie,ctx:J}),A.$set(Ae);const Ue={};ie&1&&(Ue.$$scope={dirty:ie,ctx:J}),ce.$set(Ue);const je={};ie&1&&(je.$$scope={dirty:ie,ctx:J}),me.$set(je);const Ne={};ie&1&&(Ne.$$scope={dirty:ie,ctx:J}),oe.$set(Ne);const De={};ie&1&&(De.$$scope={dirty:ie,ctx:J}),fe.$set(De);const Je={};ie&1&&(Je.$$scope={dirty:ie,ctx:J}),G.$set(Je);const ke={};ie&1&&(ke.$$scope={dirty:ie,ctx:J}),Q.$set(ke);const Be={};ie&1&&(Be.$$scope={dirty:ie,ctx:J}),K.$set(Be);const Oe={};ie&1&&(Oe.$$scope={dirty:ie,ctx:J}),Ce.$set(Oe);const Fe={};ie&1&&(Fe.$$scope={dirty:ie,ctx:J}),$e.$set(Fe)},i(J){he||(P(t.$$.fragment,J),P(r.$$.fragment,J),P(m.$$.fragment,J),P($.$$.fragment,J),P(n.$$.fragment,J),P(L.$$.fragment,J),P(x.$$.fragment,J),P(q.$$.fragment,J),P(j.$$.fragment,J),P(W.$$.fragment,J),P(U.$$.fragment,J),P(A.$$.fragment,J),P(ce.$$.fragment,J),P(me.$$.fragment,J),P(oe.$$.fragment,J),P(fe.$$.fragment,J),P(G.$$.fragment,J),P(Q.$$.fragment,J),P(K.$$.fragment,J),P(Ce.$$.fragment,J),P($e.$$.fragment,J),he=!0)},o(J){H(t.$$.fragment,J),H(r.$$.fragment,J),H(m.$$.fragment,J),H($.$$.fragment,J),H(n.$$.fragment,J),H(L.$$.fragment,J),H(x.$$.fragment,J),H(q.$$.fragment,J),H(j.$$.fragment,J),H(W.$$.fragment,J),H(U.$$.fragment,J),H(A.$$.fragment,J),H(ce.$$.fragment,J),H(me.$$.fragment,J),H(oe.$$.fragment,J),H(fe.$$.fragment,J),H(G.$$.fragment,J),H(Q.$$.fragment,J),H(K.$$.fragment,J),H(Ce.$$.fragment,J),H($e.$$.fragment,J),he=!1},d(J){J&&(a(e),a(s),a(f),a(i),a(l),a(C),a(p),a(c),a(I),a(D),a(V),a(z),a(te),a(F),a(pe),a(_e),a(ve),a(xe),a(ne),a(ue),a(re),a(X)),M(t,J),M(r,J),M(m,J),M($,J),M(n,J),M(L,J),M(x,J),M(q,J),M(j,J),M(W,J),M(U,J),M(A,J),M(ce,J),M(me,J),M(oe,J),M(fe,J),M(G,J),M(Q,J),M(K,J),M(Ce,J),M($e,J)}}}function Gi(_){let e,o;return e=new R({props:{$$slots:{default:[Fi]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){E(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const f={};t&1&&(f.$$scope={dirty:t,ctx:s}),e.$set(f)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){H(e.$$.fragment,s),o=!1},d(s){M(e,s)}}}class Qi extends Se{constructor(e){super(),Ee(this,e,null,Gi,Pe,{})}}function Ki(_){let e,o=`Le polymorphisme permet à des objets de types différents d'être traités\r
			de manière uniforme via un type commun.`,s,t,f=`Du grec <i>poly</i> (plusieurs) et <i>morphê</i> (formes) :
			un même appel de méthode peut produire des <span class="text-important">comportements différents</span>.`,r,i,m=`On en a eu un aperçu en séance 1 avec le BassinAquatique et le Maître/Animal.\r
			Maintenant on formalise. Le polymorphisme est ce qui rend la POO vraiment puissante.\r
			Sans lui, on écrirait des cascades de if/else partout.`;return{c(){e=g("p"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"P",{"data-svelte-h":!0}),b(e)!=="svelte-h5nfj"&&(e.textContent=o),s=d(l),t=h(l,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1vjbfnh"&&(t.innerHTML=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-y7ygsb"&&(i.textContent=m),this.h()},h(){w(t,"class","fragment"),w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function Xi(_){let e=`
class MathUtils {
    int additionner(int a, int b) {
        return a + b;
    }
    double additionner(double a, double b) {
        return a + b;
    }
}
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Wi(_){let e,o="Polymorphisme statique",s,t,f='Résolu à la <span class="text-important">compilation</span> : la surcharge de méthodes.',r,i,m,l,$="Le compilateur choisit la méthode selon le <b>nombre</b> et le <b>type</b> des paramètres.",C,n,p=`Attention : la surcharge ne se base PAS sur le type de retour. Deux méthodes avec la même\r
			signature mais un retour différent = erreur de compilation. C'est différent de @Override.`,L;return i=new se({props:{$$slots:{default:[Xi]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),T(i.$$.fragment),m=v(),l=g("p"),l.innerHTML=$,C=v(),n=g("aside"),n.textContent=p,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1vslke8"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1coyucb"&&(t.innerHTML=f),r=d(c),E(i.$$.fragment,c),m=d(c),l=h(c,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-qa2qkk"&&(l.innerHTML=$),C=d(c),n=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1owly6z"&&(n.textContent=p),this.h()},h(){w(l,"class","fragment"),w(n,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),S(i,c,x),u(c,m,x),u(c,l,x),u(c,C,x),u(c,n,x),L=!0},p(c,x){const I={};x&1&&(I.$$scope={dirty:x,ctx:c}),i.$set(I)},i(c){L||(P(i.$$.fragment,c),L=!0)},o(c){H(i.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(r),a(m),a(l),a(C),a(n)),M(i,c)}}}function Yi(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Zi(_){let e,o="Polymorphisme dynamique",s,t,f='Résolu à l&#39;<span class="text-important">exécution</span> : la redéfinition de méthodes.',r,i,m,l,$=`C'est la JVM qui décide à l'exécution quelle version appeler.\r
			C'est ce qu'on appelle la liaison tardive (late binding).`,C;return i=new se({props:{lines:"1-5|7-12|14-19",$$slots:{default:[Yi]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),T(i.$$.fragment),m=v(),l=g("aside"),l.textContent=$,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1tbr8tv"&&(e.textContent=o),s=d(n),t=h(n,"P",{"data-svelte-h":!0}),b(t)!=="svelte-aet2n2"&&(t.innerHTML=f),r=d(n),E(i.$$.fragment,n),m=d(n),l=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-19zy0lt"&&(l.textContent=$),this.h()},h(){w(l,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),u(n,t,p),u(n,r,p),S(i,n,p),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),i.$set(L)},i(n){C||(P(i.$$.fragment,n),C=!0)},o(n){H(i.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(t),a(r),a(m),a(l)),M(i,n)}}}function yi(_){let e=`
Animal a = new Chien();
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function ea(_){let e,o="Type statique vs type dynamique",s,t,f,r,i='<div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">Type statique</h4> <p class="text-xl mt-2">Le type de la <b>variable</b> : <code>Animal</code></p> <p class="text-sm text-gray-400">Connu à la compilation</p></div> <div class="fragment p-4 bg-accent-950 rounded-lg"><h4 class="text-important">Type dynamique</h4> <p class="text-xl mt-2">Le type de l&#39;<b>objet</b> : <code>Chien</code></p> <p class="text-sm text-gray-400">Connu à l&#39;exécution</p></div>',m,l,$="<code>a.faireDuBruit()</code> appelle la version de <code>Chien</code>, pas celle d&#39;<code>Animal</code>.",C,n,p=`C'est LA distinction fondamentale du polymorphisme. Le compilateur voit Animal, la JVM voit Chien.\r
			Le compilateur vérifie que la méthode existe dans Animal, la JVM exécute celle de Chien.`,L;return t=new se({props:{$$slots:{default:[yi]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("div"),r.innerHTML=i,m=v(),l=g("p"),l.innerHTML=$,C=v(),n=g("aside"),n.textContent=p,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-z5ohfk"&&(e.textContent=o),s=d(c),E(t.$$.fragment,c),f=d(c),r=h(c,"DIV",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-1rv2a8g"&&(r.innerHTML=i),m=d(c),l=h(c,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1oq395b"&&(l.innerHTML=$),C=d(c),n=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-11wljv3"&&(n.textContent=p),this.h()},h(){w(r,"class","grid grid-cols-2 gap-8 mt-8"),w(l,"class","fragment mt-6"),w(n,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),S(t,c,x),u(c,f,x),u(c,r,x),u(c,m,x),u(c,l,x),u(c,C,x),u(c,n,x),L=!0},p(c,x){const I={};x&1&&(I.$$scope={dirty:x,ctx:c}),t.$set(I)},i(c){L||(P(t.$$.fragment,c),L=!0)},o(c){H(t.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(f),a(r),a(m),a(l),a(C),a(n)),M(t,c)}}}function ta(_){let e=`
Animal a = new Chien();       // Upcasting implicite
Animal b = new Chat();        // Upcasting implicite

List<Animal> animaux = new ArrayList<>();
animaux.add(new Chien());     // Upcasting implicite
animaux.add(new Chat());      // Upcasting implicite
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function sa(_){let e,o="Upcasting",s,t,f="Affecter un objet d'une classe fille à une variable du type parent.",r,i,m,l,$=`L&#39;upcasting est <span class="text-important">toujours sûr</span> et <b>implicite</b> :
			un <code>Chien</code> est forcément un <code>Animal</code>.`,C,n,p=`C'est ce qu'on fait depuis la séance 1 sans le nommer. Maintenant on met un mot dessus.\r
			L'upcasting ne perd pas d'information : l'objet reste un Chien, on le voit juste\r
			"à travers les lunettes" Animal.`,L;return i=new se({props:{$$slots:{default:[ta]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),T(i.$$.fragment),m=v(),l=g("p"),l.innerHTML=$,C=v(),n=g("aside"),n.textContent=p,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-mn0ehs"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1kyo8s0"&&(t.textContent=f),r=d(c),E(i.$$.fragment,c),m=d(c),l=h(c,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-j5pmvp"&&(l.innerHTML=$),C=d(c),n=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-j1b3h8"&&(n.textContent=p),this.h()},h(){w(l,"class","fragment mt-4"),w(n,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),S(i,c,x),u(c,m,x),u(c,l,x),u(c,C,x),u(c,n,x),L=!0},p(c,x){const I={};x&1&&(I.$$scope={dirty:x,ctx:c}),i.$set(I)},i(c){L||(P(i.$$.fragment,c),L=!0)},o(c){H(i.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(r),a(m),a(l),a(C),a(n)),M(i,c)}}}function la(_){let e=`
Animal a = new Chien();

Chien c = (Chien) a;          // OK : a est bien un Chien
c.faireDuBruit();              // Wouaf

Chat chat = (Chat) a;          // ClassCastException !
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function na(_){let e,o="Downcasting",s,t,f='Affecter une variable du type parent à un type enfant : cast <span class="text-important">explicite</span>.',r,i,m,l,$="Le downcasting peut échouer si le type réel ne correspond pas.",C,n,p=`Le compilateur ne vérifie pas le cast, c'est à l'exécution que ça plante.\r
			ClassCastException est une RuntimeException. On doit toujours vérifier avant de downcaster.`,L;return i=new se({props:{$$slots:{default:[la]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),T(i.$$.fragment),m=v(),l=g("p"),l.textContent=$,C=v(),n=g("aside"),n.textContent=p,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1jt6myx"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-16sz18u"&&(t.innerHTML=f),r=d(c),E(i.$$.fragment,c),m=d(c),l=h(c,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-hyqav2"&&(l.textContent=$),C=d(c),n=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-92prr7"&&(n.textContent=p),this.h()},h(){w(l,"class","fragment mt-4 text-red-400"),w(n,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),S(i,c,x),u(c,m,x),u(c,l,x),u(c,C,x),u(c,n,x),L=!0},p(c,x){const I={};x&1&&(I.$$scope={dirty:x,ctx:c}),i.$set(I)},i(c){L||(P(i.$$.fragment,c),L=!0)},o(c){H(i.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(r),a(m),a(l),a(C),a(n)),M(i,c)}}}function ia(_){let e=`
Animal a = getAnimal();

if (a instanceof Chien) {
    Chien c = (Chien) a;
    c.rapporterBalle();
}
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function aa(_){let e=`
if (a instanceof Chien c) {
    c.rapporterBalle();  // c est déjà casté
}
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function ra(_){let e,o="Vérifier avant de caster",s,t,f,r,i,m='Depuis Java 16, le <span class="text-important">pattern matching</span> simplifie :',l,$,C,n,p=`Le pattern matching évite le cast redondant. Le compilateur crée la variable\r
			directement dans le bon type. C'est la syntaxe moderne à privilégier.`,L;return t=new se({props:{$$slots:{default:[ia]},$$scope:{ctx:_}}}),$=new se({props:{$$slots:{default:[aa]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("div"),i=g("p"),i.innerHTML=m,l=v(),T($.$$.fragment),C=v(),n=g("aside"),n.textContent=p,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1fmqy2b"&&(e.textContent=o),s=d(c),E(t.$$.fragment,c),f=d(c),r=h(c,"DIV",{class:!0});var x=de(r);i=h(x,"P",{"data-svelte-h":!0}),b(i)!=="svelte-8ft65n"&&(i.innerHTML=m),l=d(x),E($.$$.fragment,x),x.forEach(a),C=d(c),n=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-oy54ff"&&(n.textContent=p),this.h()},h(){w(r,"class","fragment mt-6"),w(n,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),S(t,c,x),u(c,f,x),u(c,r,x),y(r,i),y(r,l),S($,r,null),u(c,C,x),u(c,n,x),L=!0},p(c,x){const I={};x&1&&(I.$$scope={dirty:x,ctx:c}),t.$set(I);const q={};x&1&&(q.$$scope={dirty:x,ctx:c}),$.$set(q)},i(c){L||(P(t.$$.fragment,c),P($.$$.fragment,c),L=!0)},o(c){H(t.$$.fragment,c),H($.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(f),a(r),a(C),a(n)),M(t,c),M($)}}}function ua(_){let e=`
List<Animal> animaux = new ArrayList<>();
animaux.add(new Chien()); animaux.add(new Chat());

for (Animal a : animaux) {
    a.faireDuBruit();  // Chaque animal fait SON bruit
}

// Wouaf  puis  Miaou
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function oa(_){let e,o="Polymorphisme en action",s,t,f,r,i=`Le code ne connaît pas les types concrets. <br/>
			Ajouter un <code>Perroquet</code> demain ? <span class="text-important">Aucune ligne à modifier.</span>`,m,l,$=`C'est le principe Open/Closed en action : ouvert à l'extension, fermé à la modification.\r
			On verra SOLID en détail plus tard dans cette séance.`,C;return t=new se({props:{lines:"1-2|4-6|8",$$slots:{default:[ua]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("p"),r.innerHTML=i,m=v(),l=g("aside"),l.textContent=$,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-3wd1f5"&&(e.textContent=o),s=d(n),E(t.$$.fragment,n),f=d(n),r=h(n,"P",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-awrsyn"&&(r.innerHTML=i),m=d(n),l=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1wno0zp"&&(l.textContent=$),this.h()},h(){w(r,"class","fragment mt-4"),w(l,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),S(t,n,p),u(n,f,p),u(n,r,p),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),t.$set(L)},i(n){C||(P(t.$$.fragment,n),C=!0)},o(n){H(t.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(f),a(r),a(m),a(l)),M(t,n)}}}function ca(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function $a(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function fa(_){let e,o="Exemple : formes géométriques",s,t,f,r,i,m,l,$=`C'est un classique mais c'est exactement ce qu'on trouve dans un logiciel de dessin.\r
			Le rendu graphique parcourt la liste de formes et appelle draw() sur chacune.`,C;return f=new se({props:{$$slots:{default:[ca]},$$scope:{ctx:_}}}),i=new se({props:{$$slots:{default:[$a]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),T(f.$$.fragment),r=v(),T(i.$$.fragment),m=v(),l=g("aside"),l.textContent=$,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1veyxyy"&&(e.textContent=o),s=d(n),t=h(n,"DIV",{class:!0});var p=de(t);E(f.$$.fragment,p),r=d(p),E(i.$$.fragment,p),p.forEach(a),m=d(n),l=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-16feza2"&&(l.textContent=$),this.h()},h(){w(t,"class","flex flex-row gap-4"),w(l,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),u(n,t,p),S(f,t,null),y(t,r),S(i,t,null),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),f.$set(L);const c={};p&1&&(c.$$scope={dirty:p,ctx:n}),i.$set(c)},i(n){C||(P(f.$$.fragment,n),P(i.$$.fragment,n),C=!0)},o(n){H(f.$$.fragment,n),H(i.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(t),a(m),a(l)),M(f),M(i)}}}function pa(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function ma(_){let e,o="Utiliser le type le plus générique",s,t,f,r,i=`<code>autoriserDecollage</code> prend un <code>Volant</code>, pas un <code>Avion</code>.
			Demain, un <code>Drone</code> pourra décoller sans modifier la tour.`,m,l,$=`Le principe de substitution de Liskov : si votre code fonctionne avec le type parent,\r
			il doit fonctionner avec n'importe quel sous-type. Préférez toujours le type le plus\r
			générique possible dans les signatures de méthodes.`,C;return t=new He({props:{$$slots:{default:[pa]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("p"),r.innerHTML=i,m=v(),l=g("aside"),l.textContent=$,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-o5ol8a"&&(e.textContent=o),s=d(n),E(t.$$.fragment,n),f=d(n),r=h(n,"P",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-1mmudvq"&&(r.innerHTML=i),m=d(n),l=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1kk6c4o"&&(l.textContent=$),this.h()},h(){w(r,"class","fragment mt-4"),w(l,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),S(t,n,p),u(n,f,p),u(n,r,p),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),t.$set(L)},i(n){C||(P(t.$$.fragment,n),C=!0)},o(n){H(t.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(f),a(r),a(m),a(l)),M(t,n)}}}function da(_){let e,o="Récapitulatif",s,t,f='<tr><td class="p-3"><span class="text-important">Surcharge</span></td> <td class="p-3">Même nom, paramètres différents (compilation)</td></tr> <tr><td class="p-3"><span class="text-important">Redéfinition</span></td> <td class="p-3">Même signature dans la classe fille (exécution)</td></tr> <tr><td class="p-3"><span class="text-important">Upcasting</span></td> <td class="p-3">Enfant → Parent (implicite, sûr)</td></tr> <tr><td class="p-3"><span class="text-important">Downcasting</span></td> <td class="p-3">Parent → Enfant (explicite, risqué)</td></tr> <tr><td class="p-3"><span class="text-important">instanceof</span></td> <td class="p-3">Vérifier le type avant de caster</td></tr>',r,i,m=`Ce tableau est à connaître par coeur pour l'examen. Upcasting/downcasting sont des termes\r
			qu'on retrouve dans tous les langages typés.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("table"),t.innerHTML=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-ri7iuh"&&(e.textContent=o),s=d(l),t=h(l,"TABLE",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-da9plz"&&(t.innerHTML=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-fnqbme"&&(i.textContent=m),this.h()},h(){w(t,"class","text-xl"),w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function va(_){let e,o="Polymorphisme",s,t,f,r,i,m,l,$,C,n,p,L,c,x,I,q,D,j,V,W,z,U,te;return t=new R({props:{$$slots:{default:[Ki]},$$scope:{ctx:_}}}),r=new R({props:{$$slots:{default:[Wi]},$$scope:{ctx:_}}}),m=new R({props:{$$slots:{default:[Zi]},$$scope:{ctx:_}}}),$=new R({props:{$$slots:{default:[ea]},$$scope:{ctx:_}}}),n=new R({props:{$$slots:{default:[sa]},$$scope:{ctx:_}}}),L=new R({props:{$$slots:{default:[na]},$$scope:{ctx:_}}}),x=new R({props:{$$slots:{default:[ra]},$$scope:{ctx:_}}}),q=new R({props:{$$slots:{default:[oa]},$$scope:{ctx:_}}}),j=new R({props:{$$slots:{default:[fa]},$$scope:{ctx:_}}}),W=new R({props:{$$slots:{default:[ma]},$$scope:{ctx:_}}}),U=new R({props:{$$slots:{default:[da]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),T(r.$$.fragment),i=v(),T(m.$$.fragment),l=v(),T($.$$.fragment),C=v(),T(n.$$.fragment),p=v(),T(L.$$.fragment),c=v(),T(x.$$.fragment),I=v(),T(q.$$.fragment),D=v(),T(j.$$.fragment),V=v(),T(W.$$.fragment),z=v(),T(U.$$.fragment)},l(A){e=h(A,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-18uzcw"&&(e.textContent=o),s=d(A),E(t.$$.fragment,A),f=d(A),E(r.$$.fragment,A),i=d(A),E(m.$$.fragment,A),l=d(A),E($.$$.fragment,A),C=d(A),E(n.$$.fragment,A),p=d(A),E(L.$$.fragment,A),c=d(A),E(x.$$.fragment,A),I=d(A),E(q.$$.fragment,A),D=d(A),E(j.$$.fragment,A),V=d(A),E(W.$$.fragment,A),z=d(A),E(U.$$.fragment,A)},m(A,F){u(A,e,F),u(A,s,F),S(t,A,F),u(A,f,F),S(r,A,F),u(A,i,F),S(m,A,F),u(A,l,F),S($,A,F),u(A,C,F),S(n,A,F),u(A,p,F),S(L,A,F),u(A,c,F),S(x,A,F),u(A,I,F),S(q,A,F),u(A,D,F),S(j,A,F),u(A,V,F),S(W,A,F),u(A,z,F),S(U,A,F),te=!0},p(A,F){const ce={};F&1&&(ce.$$scope={dirty:F,ctx:A}),t.$set(ce);const pe={};F&1&&(pe.$$scope={dirty:F,ctx:A}),r.$set(pe);const me={};F&1&&(me.$$scope={dirty:F,ctx:A}),m.$set(me);const _e={};F&1&&(_e.$$scope={dirty:F,ctx:A}),$.$set(_e);const oe={};F&1&&(oe.$$scope={dirty:F,ctx:A}),n.$set(oe);const ve={};F&1&&(ve.$$scope={dirty:F,ctx:A}),L.$set(ve);const fe={};F&1&&(fe.$$scope={dirty:F,ctx:A}),x.$set(fe);const xe={};F&1&&(xe.$$scope={dirty:F,ctx:A}),q.$set(xe);const G={};F&1&&(G.$$scope={dirty:F,ctx:A}),j.$set(G);const ne={};F&1&&(ne.$$scope={dirty:F,ctx:A}),W.$set(ne);const Q={};F&1&&(Q.$$scope={dirty:F,ctx:A}),U.$set(Q)},i(A){te||(P(t.$$.fragment,A),P(r.$$.fragment,A),P(m.$$.fragment,A),P($.$$.fragment,A),P(n.$$.fragment,A),P(L.$$.fragment,A),P(x.$$.fragment,A),P(q.$$.fragment,A),P(j.$$.fragment,A),P(W.$$.fragment,A),P(U.$$.fragment,A),te=!0)},o(A){H(t.$$.fragment,A),H(r.$$.fragment,A),H(m.$$.fragment,A),H($.$$.fragment,A),H(n.$$.fragment,A),H(L.$$.fragment,A),H(x.$$.fragment,A),H(q.$$.fragment,A),H(j.$$.fragment,A),H(W.$$.fragment,A),H(U.$$.fragment,A),te=!1},d(A){A&&(a(e),a(s),a(f),a(i),a(l),a(C),a(p),a(c),a(I),a(D),a(V),a(z)),M(t,A),M(r,A),M(m,A),M($,A),M(n,A),M(L,A),M(x,A),M(q,A),M(j,A),M(W,A),M(U,A)}}}function xa(_){let e,o;return e=new R({props:{$$slots:{default:[va]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){E(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const f={};t&1&&(f.$$scope={dirty:t,ctx:s}),e.$set(f)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){H(e.$$.fragment,s),o=!1},d(s){M(e,s)}}}class _a extends Se{constructor(e){super(),Ee(this,e,null,xa,Pe,{})}}function Ca(_){let e,o=`Les membres statiques appartiennent à la classe plutôt qu'à une instance spécifique de la
			classe.`,s,t,f="Ils sont partagés par toutes les instances de la classe.",r,i,m="Cela signifie que vous pouvez accéder à un membre statique sans créer d'instance de la classe.",l,$,C=`Le mot "static" vient du fait que la mémoire est allouée une seule fois, au chargement de la
			classe. Contrairement aux attributs d'instance qui sont créés à chaque "new". C'est utile pour
			les constantes (Math.PI), les compteurs partagés, les méthodes utilitaires...`;return{c(){e=g("p"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),i=g("p"),i.textContent=m,l=v(),$=g("aside"),$.textContent=C,this.h()},l(n){e=h(n,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1630q1j"&&(e.textContent=o),s=d(n),t=h(n,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1eojfzb"&&(t.textContent=f),r=d(n),i=h(n,"P",{"data-svelte-h":!0}),b(i)!=="svelte-5aucu0"&&(i.textContent=m),l=d(n),$=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-1wrzvst"&&($.textContent=C),this.h()},h(){w($,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),u(n,t,p),u(n,r,p),u(n,i,p),u(n,l,p),u(n,$,p)},p:O,d(n){n&&(a(e),a(s),a(t),a(r),a(i),a(l),a($))}}}function ha(_){let e=`
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
			`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function ga(_){let e=`
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
			`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function ba(_){let e,o="Attributs statiques",s,t,f,r,i,m,l,$=`Notez qu&#39;il n&#39;est pas nécessaire de créer une instance de la classe <code>Compteur</code> pour
			accéder à l&#39;attribut statique <code>count</code>. En outre <code>count</code> est partagé
			entre toutes les instances de la classe <code>Compteur</code>.`,C;return f=new se({props:{class:"language-java",$$slots:{default:[ha]},$$scope:{ctx:_}}}),i=new se({props:{$$slots:{default:[ga]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),T(f.$$.fragment),r=v(),T(i.$$.fragment),m=v(),l=g("p"),l.innerHTML=$,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-toavhx"&&(e.textContent=o),s=d(n),t=h(n,"DIV",{class:!0});var p=de(t);E(f.$$.fragment,p),r=d(p),E(i.$$.fragment,p),p.forEach(a),m=d(n),l=h(n,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1ajty7n"&&(l.innerHTML=$),this.h()},h(){w(t,"class","flex flex-row"),w(l,"class","smaller")},m(n,p){u(n,e,p),u(n,s,p),u(n,t,p),S(f,t,null),y(t,r),S(i,t,null),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),f.$set(L);const c={};p&1&&(c.$$scope={dirty:p,ctx:n}),i.$set(c)},i(n){C||(P(f.$$.fragment,n),P(i.$$.fragment,n),C=!0)},o(n){H(f.$$.fragment,n),H(i.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(t),a(m),a(l)),M(f),M(i)}}}function La(_){let e=`
	class MathUtils {
		static int additionner(int a, int b) {
			return a + b;
		}
	}
	
	int result = MathUtils.additionner(3, 4);
	`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function wa(_){let e,o="Méthodes statiques",s,t,f,r,i=`La méthode <code>additionner</code> peut être appelée sans créer une instance de la classe
			<code>MathUtils</code>.`,m,l,$=`Remarquez que vous utilisez <code>System.out.println()</code> sans créer d&#39;instance de la classe,
			il s&#39;agit d&#39;une méthode statique.`,C,n,p=`Les classes utilitaires sont souvent pleines de méthodes statiques : Math, Arrays,
			Collections... C'est aussi le cas de System.out qui est un attribut statique de la classe
			System. En règle générale, si une méthode n'utilise pas "this", elle devrait probablement être
			statique.`,L;return t=new se({props:{$$slots:{default:[La]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("p"),r.innerHTML=i,m=v(),l=g("p"),l.innerHTML=$,C=v(),n=g("aside"),n.textContent=p,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-n0ip6m"&&(e.textContent=o),s=d(c),E(t.$$.fragment,c),f=d(c),r=h(c,"P",{"data-svelte-h":!0}),b(r)!=="svelte-1ww0p7q"&&(r.innerHTML=i),m=d(c),l=h(c,"P",{"data-svelte-h":!0}),b(l)!=="svelte-1v8o7l1"&&(l.innerHTML=$),C=d(c),n=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1wsetis"&&(n.textContent=p),this.h()},h(){w(n,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),S(t,c,x),u(c,f,x),u(c,r,x),u(c,m,x),u(c,l,x),u(c,C,x),u(c,n,x),L=!0},p(c,x){const I={};x&1&&(I.$$scope={dirty:x,ctx:c}),t.$set(I)},i(c){L||(P(t.$$.fragment,c),L=!0)},o(c){H(t.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(f),a(r),a(m),a(l),a(C),a(n)),M(t,c)}}}function qa(_){let e=`
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
			`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Ma(_){let e,o="Limitation des méthodes statiques",s,t,f,r,i=`Une méthode statique ne peut pas accéder directement aux attributs ou méthodes non statiques
			de la classe. Cela est dû au fait que les méthodes statiques n'ont pas de référence à une
			instance spécifique de la classe.`,m,l,$=`C'est logique : une méthode statique n'a pas de "this". Elle ne sait pas à quelle instance
			elle appartient. Si vous avez besoin d'accéder à des attributs d'instance, la méthode ne doit
			pas être statique. Ou alors, passez l'instance en paramètre de la méthode statique.`,C;return t=new se({props:{$$slots:{default:[qa]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("p"),r.textContent=i,m=v(),l=g("aside"),l.textContent=$,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-mxao6o"&&(e.textContent=o),s=d(n),E(t.$$.fragment,n),f=d(n),r=h(n,"P",{"data-svelte-h":!0}),b(r)!=="svelte-1r6nbc"&&(r.textContent=i),m=d(n),l=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-teq9db"&&(l.textContent=$),this.h()},h(){w(l,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),S(t,n,p),u(n,f,p),u(n,r,p),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),t.$set(L)},i(n){C||(P(t.$$.fragment,n),C=!0)},o(n){H(t.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(f),a(r),a(m),a(l)),M(t,n)}}}function Ha(_){let e,o="Avantages des membres et méthodes statiques",s,t,f=`<li>Partage des ressources : Les membres statiques sont partagés par toutes les instances de la
				classe, ce qui permet de partager des données ou des états communs.</li> <li>Accès sans instance : Les méthodes et attributs statiques peuvent être utilisés sans créer
				d&#39;instance de la classe, ce qui simplifie l&#39;accès aux utilitaires et aux constantes.</li> <li>Performance : L&#39;accès aux membres statiques peut être plus rapide car il n&#39;y a pas besoin de
				créer et de gérer des instances d&#39;objets.</li> <li>Organisation du code : Les méthodes statiques peuvent regrouper des fonctions utilitaires ou
				des opérations liées à la classe, améliorant ainsi la lisibilité et la maintenance du code.</li>`,r,i,m=`Attention : trop de static peut être un "code smell". Si tout est statique, vous écrivez du
			procédural, pas de l'objet. Le static casse aussi le polymorphisme : on ne peut pas redéfinir
			une méthode statique dans une classe fille. Utilisez static pour les utilitaires, les
			constantes, les factories. Pas pour le code métier principal.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-12gnc3a"&&(e.textContent=o),s=d(l),t=h(l,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-iw1vw3"&&(t.innerHTML=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-12j9kii"&&(i.textContent=m),this.h()},h(){w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function Pa(_){let e,o="Les membres statiques",s,t,f,r,i,m,l,$,C,n,p;return t=new R({props:{$$slots:{default:[Ca]},$$scope:{ctx:_}}}),r=new R({props:{$$slots:{default:[ba]},$$scope:{ctx:_}}}),m=new R({props:{$$slots:{default:[wa]},$$scope:{ctx:_}}}),$=new R({props:{$$slots:{default:[Ma]},$$scope:{ctx:_}}}),n=new R({props:{$$slots:{default:[Ha]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),T(r.$$.fragment),i=v(),T(m.$$.fragment),l=v(),T($.$$.fragment),C=v(),T(n.$$.fragment)},l(L){e=h(L,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-11qpvto"&&(e.textContent=o),s=d(L),E(t.$$.fragment,L),f=d(L),E(r.$$.fragment,L),i=d(L),E(m.$$.fragment,L),l=d(L),E($.$$.fragment,L),C=d(L),E(n.$$.fragment,L)},m(L,c){u(L,e,c),u(L,s,c),S(t,L,c),u(L,f,c),S(r,L,c),u(L,i,c),S(m,L,c),u(L,l,c),S($,L,c),u(L,C,c),S(n,L,c),p=!0},p(L,c){const x={};c&1&&(x.$$scope={dirty:c,ctx:L}),t.$set(x);const I={};c&1&&(I.$$scope={dirty:c,ctx:L}),r.$set(I);const q={};c&1&&(q.$$scope={dirty:c,ctx:L}),m.$set(q);const D={};c&1&&(D.$$scope={dirty:c,ctx:L}),$.$set(D);const j={};c&1&&(j.$$scope={dirty:c,ctx:L}),n.$set(j)},i(L){p||(P(t.$$.fragment,L),P(r.$$.fragment,L),P(m.$$.fragment,L),P($.$$.fragment,L),P(n.$$.fragment,L),p=!0)},o(L){H(t.$$.fragment,L),H(r.$$.fragment,L),H(m.$$.fragment,L),H($.$$.fragment,L),H(n.$$.fragment,L),p=!1},d(L){L&&(a(e),a(s),a(f),a(i),a(l),a(C)),M(t,L),M(r,L),M(m,L),M($,L),M(n,L)}}}function Sa(_){let e,o;return e=new R({props:{$$slots:{default:[Pa]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){E(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const f={};t&1&&(f.$$scope={dirty:t,ctx:s}),e.$set(f)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){H(e.$$.fragment,s),o=!1},d(s){M(e,s)}}}class Ea extends Se{constructor(e){super(),Ee(this,e,null,Sa,Pe,{})}}function Ta(_){let e,o="Usage de l’IA dans ce module",s,t,f="L’IA n’est <b>pas autorisée</b> pendant le module",r,i,m=`Les modalités d'évaluation sont pensées pour que l'IA ne vous apporte aucun avantage, voire
			vous desserve.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("span"),t.innerHTML=f,r=v(),i=g("p"),i.textContent=m,this.h()},l(l){e=h(l,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-1gojwpb"&&(e.textContent=o),s=d(l),t=h(l,"SPAN",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-35mnki"&&(t.innerHTML=f),r=d(l),i=h(l,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-1ydzg9u"&&(i.textContent=m),this.h()},h(){w(t,"class","font-bold text-[2em] underline"),w(i,"class","note")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function Aa(_){let e,o="Pourquoi l’IA pose problème à ce stade",s,t,f="<li><b>1. Dette cognitive</b> — L&#39;IA empêche d&#39;apprendre par la pratique et l&#39;erreur.</li> <li><b>2. Béquille pour débutants</b> — Elle favorise ceux qui maîtrisent déjà.</li> <li><b>3. Usage passif</b> — Risque de perte de compétences.</li> <li><b>4. Illusion de facilité</b> — On réfléchit moins aux étapes.</li>",r,i,m="<p>Vidéo explicative</p>";return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=f,r=v(),i=g("a"),i.innerHTML=m,this.h()},l(l){e=h(l,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-16y47ua"&&(e.textContent=o),s=d(l),t=h(l,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-dhzepp"&&(t.innerHTML=f),r=d(l),i=h(l,"A",{href:!0,target:!0,"data-svelte-h":!0}),b(i)!=="svelte-cz1rtj"&&(i.innerHTML=m),this.h()},h(){w(i,"href","https://youtu.be/4xq6bVbS-Pw?si=bhTuVdU7iN5ijJzg&t=653"),w(i,"target","_blank")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function Ia(_){let e,o="Constat côté entreprise",s,t,f="<li>Des profils juniors très à l’aise avec l’IA</li> <li>Mais en difficulté dès qu’il faut :</li> <ul><li>débugger un problème</li> <li>expliquer un choix technique</li> <li>adapter une solution existante</li></ul>",r,i,m=`Le problème n’est pas l’IA,<br/>
			mais son usage trop précoce et non maîtrisé.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=f,r=v(),i=g("p"),i.innerHTML=m,this.h()},l(l){e=h(l,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-qqrjer"&&(e.textContent=o),s=d(l),t=h(l,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-1cewx67"&&(t.innerHTML=f),r=d(l),i=h(l,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-1n46xu8"&&(i.innerHTML=m),this.h()},h(){w(i,"class","note")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function ja(_){let e,o="Utiliser l’IA intelligemment",s,t,f="<li>IA utilisée comme <b>tuteur</b>, pas comme générateur</li> <li>Pas de réponses directes</li> <li>Questions, feedback, progression guidée</li>",r,i,m=`Apprendre correctement avec l’IA<br/>
			produit de meilleurs résultats<br/>
			que l’utiliser sans méthode.`,l,$,C='<p class="note">Source : AI Tutoring Outperforms Active Learning</p>';return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=f,r=v(),i=g("p"),i.innerHTML=m,l=v(),$=g("a"),$.innerHTML=C,this.h()},l(n){e=h(n,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-1nebpg"&&(e.textContent=o),s=d(n),t=h(n,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-1914kjj"&&(t.innerHTML=f),r=d(n),i=h(n,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-1amodgb"&&(i.innerHTML=m),l=d(n),$=h(n,"A",{href:!0,"data-preview-link":!0,"data-svelte-h":!0}),b($)!=="svelte-16lrtro"&&($.innerHTML=C),this.h()},h(){w(i,"class","important"),w($,"href","https://www.nature.com/articles/s41598-025-97652-6.pdf"),w($,"data-preview-link","")},m(n,p){u(n,e,p),u(n,s,p),u(n,t,p),u(n,r,p),u(n,i,p),u(n,l,p),u(n,$,p)},p:O,d(n){n&&(a(e),a(s),a(t),a(r),a(i),a(l),a($))}}}function Da(_){let e,o="Importance des TD et TP",s,t,f="<li>Les TD construisent le raisonnement</li> <li>Les TP ancrent les concepts par la pratique</li> <li>Ce travail est indispensable pour la suite</li>",r,i,m=`Sans cette phase sérieuse,<br/>
			l’IA n’apporte que peu de valeur.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=f,r=v(),i=g("p"),i.innerHTML=m,this.h()},l(l){e=h(l,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-1pqkdgp"&&(e.textContent=o),s=d(l),t=h(l,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-1dj8lr7"&&(t.innerHTML=f),r=d(l),i=h(l,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-x1j0a0"&&(i.innerHTML=m),this.h()},h(){w(i,"class","note")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function ka(_){let e,o="Phase projet",s,t,f="<li>Problème plus ouvert</li> <li>Mise en situation proche du monde professionnel</li> <li>Usage de l&#39;IA <b>possible</b> et encadré</li>",r,i,m=`Des bases solides permettent<br/>
			d&#39;utiliser l&#39;IA pour faire des choses intéressantes.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=f,r=v(),i=g("p"),i.innerHTML=m,this.h()},l(l){e=h(l,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-1u8tpjh"&&(e.textContent=o),s=d(l),t=h(l,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-15ntht3"&&(t.innerHTML=f),r=d(l),i=h(l,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-e1d6gw"&&(i.innerHTML=m),this.h()},h(){w(i,"class","important")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function Oa(_){let e,o="Un prompt vous sera fourni",s,t,f="Pour la phase projet, vous recevrez un <b>prompt</b> à utiliser avec l&#39;IA.",r,i,m='<li class="fragment">Il cadrera l&#39;IA pour qu&#39;elle vous <b>guide</b> sans donner les réponses</li> <li class="fragment">Il sera adapté au contexte du module POO</li>',l,$,C="Ce prompt sera communiqué au moment du projet.",n,p,L=`On vous donnera un prompt système qui transforme l'IA en tuteur. L'idée c'est de vous
			apprendre à utiliser l'IA intelligemment, pas à tricher.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),i=g("ul"),i.innerHTML=m,l=v(),$=g("p"),$.textContent=C,n=v(),p=g("aside"),p.textContent=L,this.h()},l(c){e=h(c,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-1stl3ju"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-e2ua8"&&(t.innerHTML=f),r=d(c),i=h(c,"UL",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-1ipgytl"&&(i.innerHTML=m),l=d(c),$=h(c,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-116x1r6"&&($.textContent=C),n=d(c),p=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-6s6n1u"&&(p.textContent=L),this.h()},h(){w(i,"class","mt-6"),w($,"class","note fragment mt-8"),w(p,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),u(c,i,x),u(c,l,x),u(c,$,x),u(c,n,x),u(c,p,x)},p:O,d(c){c&&(a(e),a(s),a(t),a(r),a(i),a(l),a($),a(n),a(p))}}}function za(_){let e,o="En résumé",s,t,f='<div class="p-4 bg-pink-800 rounded-lg fragment"><h4 class="text-red-400">📚 TD/TP</h4> <p class="text-xl mt-2">Sans IA</p> <p class="text-sm text-white-400">Construire les bases</p></div> <div class="p-4 bg-orange-800 rounded-lg fragment"><h4 class="text-orange-400">🎯 Projet</h4> <p class="text-xl mt-2">IA encadrée</p> <p class="text-sm text-white-400">Avec le prompt fourni</p></div> <div class="p-4 bg-green-800 rounded-lg fragment"><h4 class="text-green-400">💼 Après CPE</h4> <p class="text-xl mt-2">IA maîtrisée</p> <p class="text-sm text-white-400">Vous savez quand et comment</p></div>',r,i,m=`C'est la progression. D'abord on apprend sans béquille, ensuite on apprend à utiliser l'outil
			correctement. À la fin, vous saurez quand l'IA vous aide vraiment et quand elle vous ralentit.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-11s1ixw"&&(e.textContent=o),s=d(l),t=h(l,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-16m7q19"&&(t.innerHTML=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-10vup29"&&(i.textContent=m),this.h()},h(){w(t,"class","grid grid-cols-3 gap-6 mt-8"),w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function Va(_){let e,o,s,t,f,r,i,m,l,$,C,n,p,L,c,x;return e=new R({props:{$$slots:{default:[Ta]},$$scope:{ctx:_}}}),s=new R({props:{$$slots:{default:[Aa]},$$scope:{ctx:_}}}),f=new R({props:{$$slots:{default:[Ia]},$$scope:{ctx:_}}}),i=new R({props:{$$slots:{default:[ja]},$$scope:{ctx:_}}}),l=new R({props:{$$slots:{default:[Da]},$$scope:{ctx:_}}}),C=new R({props:{$$slots:{default:[ka]},$$scope:{ctx:_}}}),p=new R({props:{$$slots:{default:[Oa]},$$scope:{ctx:_}}}),c=new R({props:{$$slots:{default:[za]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment),o=v(),T(s.$$.fragment),t=v(),T(f.$$.fragment),r=v(),T(i.$$.fragment),m=v(),T(l.$$.fragment),$=v(),T(C.$$.fragment),n=v(),T(p.$$.fragment),L=v(),T(c.$$.fragment)},l(I){E(e.$$.fragment,I),o=d(I),E(s.$$.fragment,I),t=d(I),E(f.$$.fragment,I),r=d(I),E(i.$$.fragment,I),m=d(I),E(l.$$.fragment,I),$=d(I),E(C.$$.fragment,I),n=d(I),E(p.$$.fragment,I),L=d(I),E(c.$$.fragment,I)},m(I,q){S(e,I,q),u(I,o,q),S(s,I,q),u(I,t,q),S(f,I,q),u(I,r,q),S(i,I,q),u(I,m,q),S(l,I,q),u(I,$,q),S(C,I,q),u(I,n,q),S(p,I,q),u(I,L,q),S(c,I,q),x=!0},p(I,q){const D={};q&1&&(D.$$scope={dirty:q,ctx:I}),e.$set(D);const j={};q&1&&(j.$$scope={dirty:q,ctx:I}),s.$set(j);const V={};q&1&&(V.$$scope={dirty:q,ctx:I}),f.$set(V);const W={};q&1&&(W.$$scope={dirty:q,ctx:I}),i.$set(W);const z={};q&1&&(z.$$scope={dirty:q,ctx:I}),l.$set(z);const U={};q&1&&(U.$$scope={dirty:q,ctx:I}),C.$set(U);const te={};q&1&&(te.$$scope={dirty:q,ctx:I}),p.$set(te);const A={};q&1&&(A.$$scope={dirty:q,ctx:I}),c.$set(A)},i(I){x||(P(e.$$.fragment,I),P(s.$$.fragment,I),P(f.$$.fragment,I),P(i.$$.fragment,I),P(l.$$.fragment,I),P(C.$$.fragment,I),P(p.$$.fragment,I),P(c.$$.fragment,I),x=!0)},o(I){H(e.$$.fragment,I),H(s.$$.fragment,I),H(f.$$.fragment,I),H(i.$$.fragment,I),H(l.$$.fragment,I),H(C.$$.fragment,I),H(p.$$.fragment,I),H(c.$$.fragment,I),x=!1},d(I){I&&(a(o),a(t),a(r),a(m),a($),a(n),a(L)),M(e,I),M(s,I),M(f,I),M(i,I),M(l,I),M(C,I),M(p,I),M(c,I)}}}function Ra(_){let e,o;return e=new R({props:{data_background_color:"#2B001A",$$slots:{default:[Va]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){E(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const f={};t&1&&(f.$$scope={dirty:t,ctx:s}),e.$set(f)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){H(e.$$.fragment,s),o=!1},d(s){M(e,s)}}}class Ua extends Se{constructor(e){super(),Ee(this,e,null,Ra,Pe,{})}}function Na(_){let e,o="Présentation du module",s,t,f=`<div><ul><li><b>Changer votre manière de penser le code</b></li> <li>Passer du procédural à l’orienté objet</li> <li>Modéliser avant de coder</li> <li>Préparer la suite de votre formation</li></ul> <p class="note">Ce module est simple à valider.<br/>
					Il est <b>fondamental</b> pour la suite.</p></div>`,r,i,m=`Pas obligé de coder en OO, juste une manière de faire différente - C'est une méthode qui
			simplifie la modélisation - Assez largement utilisée`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-177x7c7"&&(e.textContent=o),s=d(l),t=h(l,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1ez6zyl"&&(t.innerHTML=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-viqv9x"&&(i.textContent=m),this.h()},h(){w(t,"class","two-columns"),w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function Ja(_){let e,o="Ce que vous saurez faire à la fin",s,t,f='<div class="text-left"><h4 class="text-red-400 mb-4 text-3xl">❌ Avant ce module</h4> <ul class="text-2xl"><li class="fragment">Code qui &quot;marche&quot; pour des TPs CPE</li> <li class="fragment">Difficile à reprendre 6 mois plus tard</li> <li class="fragment">Impossible à faire évoluer</li> <li class="fragment">Personne d&#39;autre ne comprend</li></ul></div> <div class="text-left"><h4 class="text-green-400 mb-4 text-3xl">✅ Après ce module</h4> <ul class="text-2xl"><li class="fragment">Code qui dure des années</li> <li class="fragment">Maintenable par une équipe</li> <li class="fragment">Évolutif sans tout casser</li> <li class="fragment">Prêt pour le monde pro</li></ul></div>',r,i,m="En entreprise, le code vit 5, 10, 20 ans.<br/> <b>Vous devez apprendre à coder pour les autres, pas juste pour vous.</b>",l,$,C=`C'est la vraie différence. En école, on code pour valider un TP. En entreprise, le code doit
			survivre à votre départ, être repris par d'autres, évoluer. Ce module vous prépare à ça.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=f,r=v(),i=g("p"),i.innerHTML=m,l=v(),$=g("aside"),$.textContent=C,this.h()},l(n){e=h(n,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-1bz8gvd"&&(e.textContent=o),s=d(n),t=h(n,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-vlxvkk"&&(t.innerHTML=f),r=d(n),i=h(n,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-hffxe3"&&(i.innerHTML=m),l=d(n),$=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-1lbw1km"&&($.textContent=C),this.h()},h(){w(t,"class","flex justify-center gap-8 mt-8"),w(i,"class","fragment note mt-8"),w($,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),u(n,t,p),u(n,r,p),u(n,i,p),u(n,l,p),u(n,$,p)},p:O,d(n){n&&(a(e),a(s),a(t),a(r),a(i),a(l),a($))}}}function Ba(_){let e,o="Pourquoi vous pourriez décrocher",s,t,f=`<svg viewBox="0 0 600 300" width="100%" style="margin-top: 20px;"><line x1="50" y1="250" x2="550" y2="250" stroke="#ccc" stroke-width="2"></line><line x1="50" y1="50" x2="50" y2="250" stroke="#ccc" stroke-width="2"></line><text x="260" y="270" font-size="14" fill="#ffffff">Temps / Expérience</text><text x="-70" y="185" font-size="14" fill="#ffffff" transform="rotate(-90 15,160)">Niveau réel en programmation
				</text><g><path d="M50 200 C120 185, 180 175, 220 170" fill="none" stroke="#3498db" stroke-width="4"></path><path d="M50 200 C120 205, 180 210, 220 190" fill="none" stroke="#f39c12" stroke-width="4"></path></g><g class="fragment" data-fragment-index="0"><path d="M220 170 C260 170, 300 170, 340 170" fill="none" stroke="#3498db" stroke-width="4"></path><path d="M220 190 C260 170, 300 155, 340 145" fill="none" stroke="#f39c12" stroke-width="4"></path></g><g class="fragment" data-fragment-index="1"><path d="M340 145 C380 140, 400 140, 420 140" fill="none" stroke="#f39c12" stroke-width="4"></path><path d="M340 170 C380 168, 400 165, 420 140" fill="none" stroke="#3498db" stroke-width="4"></path></g><g class="fragment" data-fragment-index="2"><path d="M420 140 C470 140, 510 140, 550 140" fill="none" stroke="#f39c12" stroke-width="4"></path><path d="M420 140 C470 120, 510 70, 550 50" fill="none" stroke="#3498db" stroke-width="4"></path></g><text x="60" y="80" font-size="0.5em" fill="#f39c12">Procédural </text><text x="60" y="100" font-size="0.5em" fill="#3498db">POO</text></svg>`,r,i,m=`Si vous avez l’impression de devenir moins bons,<br/>
			c’est que vous êtes en train d’apprendre.`,l,$,C=`Au début ça semble plus simple que du C, vous avez pas à gérer les pointeurs, le langage est
			plus moderne<br/>
			Mais très vite régression, notamment car il y a des règles à respecter que vous n&#39;aviez pas avant,
			en // en C vous pouvez faire n&#39;importe quoi et ça marche<br/>
			Puis vous apprenez à maitriser Puis vous égalez votre précédent niveau, si vous sortez du module
			à ce niveau, vous n&#39;aurez rien appris de plus<br/>
			Restez motivés pour la suite, car après ça décolle vraiment<br/>`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=f,r=v(),i=g("p"),i.innerHTML=m,l=v(),$=g("aside"),$.innerHTML=C,this.h()},l(n){e=h(n,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-1nk3rng"&&(e.textContent=o),s=d(n),t=h(n,"DIV",{"data-svelte-h":!0}),b(t)!=="svelte-1sp6g9p"&&(t.innerHTML=f),r=d(n),i=h(n,"P",{class:!0,"data-fragment-index":!0,"data-svelte-h":!0}),b(i)!=="svelte-117ka7n"&&(i.innerHTML=m),l=d(n),$=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-ji71yx"&&($.innerHTML=C),this.h()},h(){w(i,"class","note fragment"),w(i,"data-fragment-index","0"),w($,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),u(n,t,p),u(n,r,p),u(n,i,p),u(n,l,p),u(n,$,p)},p:O,d(n){n&&(a(e),a(s),a(t),a(r),a(i),a(l),a($))}}}function Fa(_){let e,o="Déroulé",s,t,f="<li>CM en début de cours</li> <li>TD</li> <li>TP/Projet</li>";return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("ol"),t.innerHTML=f},l(r){e=h(r,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-171i1ti"&&(e.textContent=o),s=d(r),t=h(r,"OL",{"data-svelte-h":!0}),b(t)!=="svelte-se5tp"&&(t.innerHTML=f)},m(r,i){u(r,e,i),u(r,s,i),u(r,t,i)},p:O,d(r){r&&(a(e),a(s),a(t))}}}function Ga(_){let e,o="Modalités d’examen",s,t,f="<li>DS écrit <b>basé principalement sur les TD</b></li> <li>Projet en fin de module</li> <li>Contrôle continu sur la rigueur</li>",r,i,m="Ce qui est évalué, ce n’est pas le résultat.<br/> <b>C’est la démarche !</b>";return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=f,r=v(),i=g("p"),i.innerHTML=m,this.h()},l(l){e=h(l,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-33cx1h"&&(e.textContent=o),s=d(l),t=h(l,"UL",{"data-svelte-h":!0}),b(t)!=="svelte-yqhay1"&&(t.innerHTML=f),r=d(l),i=h(l,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-dcky3d"&&(i.innerHTML=m),this.h()},h(){w(i,"class","important")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function Qa(_){let e,o="Découpage du module",s,t,f=`<svg width="1000" height="500" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg" style="flex: 1;background:#fafafa;font-family:sans-serif"><line x1="80" y1="50" x2="80" y2="430" stroke="#333"></line><line x1="80" y1="430" x2="950" y2="430" stroke="#333"></line><g fill="#333" font-size="12"><text x="40" y="430">0h</text><text x="40" y="370">2h</text><text x="40" y="310">4h</text><text x="40" y="250">6h</text><text x="40" y="190">8h</text></g><g font-size="13"><rect x="780" y="60" width="15" height="15" fill="#E85D75"></rect><text x="800" y="73">CM (18h)</text><rect x="780" y="85" width="15" height="15" fill="#456990"></rect><text x="800" y="98">TD (12h)</text><rect x="780" y="110" width="15" height="15" fill="#F28F3B"></rect><text x="800" y="123">TP (14h)</text><rect x="780" y="135" width="15" height="15" fill="#F6BD60"></rect><text x="800" y="148">Projet (18h)</text></g><g font-size="11" text-anchor="middle"><g transform="translate(110,430)"><rect y="-120" width="40" height="120" fill="#E85D75"></rect><rect y="-180" width="40" height="60" fill="#456990"></rect><rect y="-240" width="40" height="60" fill="#F28F3B"></rect><text y="20" text-anchor="middle">04/02</text></g><g transform="translate(180,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-120" width="40" height="60" fill="#456990"></rect><text y="20">25/02</text></g><g transform="translate(250,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-120" width="40" height="60" fill="#456990"></rect><rect y="-180" width="40" height="60" fill="#F28F3B"></rect><text y="20">04/03</text></g><g transform="translate(320,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-120" width="40" height="60" fill="#456990"></rect><rect y="-180" width="40" height="60" fill="#F28F3B"></rect><text y="20">18/03</text></g><g transform="translate(390,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-120" width="40" height="60" fill="#456990"></rect><rect y="-180" width="40" height="60" fill="#F28F3B"></rect><text y="20">24/03</text></g><g transform="translate(460,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-120" width="40" height="60" fill="#456990"></rect><rect y="-180" width="40" height="60" fill="#F28F3B"></rect><text y="20">25/03</text></g><g transform="translate(530,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-180" width="40" height="120" fill="#F28F3B"></rect><text y="20">31/03</text></g><g transform="translate(600,430)"><rect y="-60" width="40" height="60" fill="#E85D75"></rect><rect y="-180" width="40" height="120" fill="#F6BD60"></rect><text y="20">01/04</text></g><g transform="translate(670,430)"><rect y="-180" width="40" height="180" fill="#F6BD60"></rect><text y="20">07/04</text></g><g transform="translate(740,430)"><rect y="-240" width="40" height="240" fill="#F6BD60"></rect><text y="20">05/05</text></g></g></svg> <div style="flex: 1;"><ul><li><b>CM</b> <br/>
						Théorie et introduction des concepts.</li> <li><b>TD</b> <br/> <b class="font-bold text-orange-400">Sans IDE !</b></li> <li><b>TP</b> <br/>
						Guidés, mais il faut improviser, tester, sortir du cadre.</li> <li><b>Projet</b> <br/>
						Mise en situation professionnelle.</li></ul></div>`,r,i,m="Relire le support du CM ne vous suffira pas à réussir l'examen";return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=f,r=v(),i=g("p"),i.textContent=m,this.h()},l(l){e=h(l,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-g73up0"&&(e.textContent=o),s=d(l),t=h(l,"DIV",{style:!0,"data-svelte-h":!0}),b(t)!=="svelte-xoywc5"&&(t.innerHTML=f),r=d(l),i=h(l,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-18g80m8"&&(i.textContent=m),this.h()},h(){et(t,"display","flex"),et(t,"gap","2rem"),et(t,"align-items","center"),et(t,"justify-content","center"),w(i,"class","font-bold text-orange-400 note")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function Ka(_){let e,o,s,t,f,r,i,m,l,$,C,n;return e=new R({props:{$$slots:{default:[Na]},$$scope:{ctx:_}}}),s=new R({props:{$$slots:{default:[Ja]},$$scope:{ctx:_}}}),f=new R({props:{$$slots:{default:[Ba]},$$scope:{ctx:_}}}),i=new R({props:{$$slots:{default:[Fa]},$$scope:{ctx:_}}}),l=new R({props:{$$slots:{default:[Ga]},$$scope:{ctx:_}}}),C=new R({props:{$$slots:{default:[Qa]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment),o=v(),T(s.$$.fragment),t=v(),T(f.$$.fragment),r=v(),T(i.$$.fragment),m=v(),T(l.$$.fragment),$=v(),T(C.$$.fragment)},l(p){E(e.$$.fragment,p),o=d(p),E(s.$$.fragment,p),t=d(p),E(f.$$.fragment,p),r=d(p),E(i.$$.fragment,p),m=d(p),E(l.$$.fragment,p),$=d(p),E(C.$$.fragment,p)},m(p,L){S(e,p,L),u(p,o,L),S(s,p,L),u(p,t,L),S(f,p,L),u(p,r,L),S(i,p,L),u(p,m,L),S(l,p,L),u(p,$,L),S(C,p,L),n=!0},p(p,L){const c={};L&1&&(c.$$scope={dirty:L,ctx:p}),e.$set(c);const x={};L&1&&(x.$$scope={dirty:L,ctx:p}),s.$set(x);const I={};L&1&&(I.$$scope={dirty:L,ctx:p}),f.$set(I);const q={};L&1&&(q.$$scope={dirty:L,ctx:p}),i.$set(q);const D={};L&1&&(D.$$scope={dirty:L,ctx:p}),l.$set(D);const j={};L&1&&(j.$$scope={dirty:L,ctx:p}),C.$set(j)},i(p){n||(P(e.$$.fragment,p),P(s.$$.fragment,p),P(f.$$.fragment,p),P(i.$$.fragment,p),P(l.$$.fragment,p),P(C.$$.fragment,p),n=!0)},o(p){H(e.$$.fragment,p),H(s.$$.fragment,p),H(f.$$.fragment,p),H(i.$$.fragment,p),H(l.$$.fragment,p),H(C.$$.fragment,p),n=!1},d(p){p&&(a(o),a(t),a(r),a(m),a($)),M(e,p),M(s,p),M(f,p),M(i,p),M(l,p),M(C,p)}}}function Xa(_){let e,o;return e=new R({props:{data_background_color:"#00353F",$$slots:{default:[Ka]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){E(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const f={};t&1&&(f.$$scope={dirty:t,ctx:s}),e.$set(f)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){H(e.$$.fragment,s),o=!1},d(s){M(e,s)}}}class Wa extends Se{constructor(e){super(),Ee(this,e,null,Xa,Pe,{})}}function Ya(_){let e,o="Exercice 1",s,t,f="Encapsulation et validation",r,i,m="⏱️ 10-15 minutes";return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),i=g("p"),i.textContent=m,this.h()},l(l){e=h(l,"H2",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-sq034p"&&(e.textContent=o),s=d(l),t=h(l,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-tg4x2t"&&(t.textContent=f),r=d(l),i=h(l,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-11o3260"&&(i.textContent=m),this.h()},h(){w(e,"class","text-5xl"),w(t,"class","text-2xl text-gray-400"),w(i,"class","text-xl mt-8")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function Za(_){let e,o="📝 Exercice 1 : Compte bancaire sécurisé",s,t,f=`<p class="font-bold text-accent-200">Objectif :</p> <p class="mb-4">Créer une classe <code>CompteBancaire</code> avec encapsulation correcte.</p> <p class="font-bold text-accent-200 mt-6">Consignes :</p> <ol class="space-y-2"><li>Créer une classe avec les attributs <code>numero</code>, <code>solde</code>,
					<code>titulaire</code></li> <li>Tous les attributs doivent être <code>private</code></li> <li>Créer un constructeur pour initialiser le compte</li> <li>Créer des getters pour tous les attributs</li> <li>Créer une méthode <code>deposer(double montant)</code> qui :
					<ul class="ml-6"><li>Vérifie que le montant est positif</li> <li>Ajoute le montant au solde</li></ul></li> <li>Créer une méthode <code>retirer(double montant)</code> qui :
					<ul class="ml-6"><li>Vérifie que le montant est positif</li> <li>Vérifie que le solde est suffisant</li> <li>Retire le montant du solde</li></ul></li></ol>`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=f,this.h()},l(r){e=h(r,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-n7as91"&&(e.textContent=o),s=d(r),t=h(r,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-114i2s5"&&(t.innerHTML=f),this.h()},h(){w(t,"class","text-left text-xl")},m(r,i){u(r,e,i),u(r,s,i),u(r,t,i)},p:O,d(r){r&&(a(e),a(s),a(t))}}}function ya(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function er(_){let e,o="💡 Indice",s,t,f;return t=new se({props:{$$slots:{default:[ya]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(r){e=h(r,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-s9gy6g"&&(e.textContent=o),s=d(r),E(t.$$.fragment,r)},m(r,i){u(r,e,i),u(r,s,i),S(t,r,i),f=!0},p(r,i){const m={};i&1&&(m.$$scope={dirty:i,ctx:r}),t.$set(m)},i(r){f||(P(t.$$.fragment,r),f=!0)},o(r){H(t.$$.fragment,r),f=!1},d(r){r&&(a(e),a(s)),M(t,r)}}}function tr(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function sr(_){let e,o="✅ Solution",s,t,f;return t=new se({props:{class:"language-java h-[70vh]",$$slots:{default:[tr]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(r){e=h(r,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1eu9efq"&&(e.textContent=o),s=d(r),E(t.$$.fragment,r)},m(r,i){u(r,e,i),u(r,s,i),S(t,r,i),f=!0},p(r,i){const m={};i&1&&(m.$$scope={dirty:i,ctx:r}),t.$set(m)},i(r){f||(P(t.$$.fragment,r),f=!0)},o(r){H(t.$$.fragment,r),f=!1},d(r){r&&(a(e),a(s)),M(t,r)}}}function lr(_){let e,o="🎯 Points clés",s,t,f='<li class="fragment">✅ Attributs <code>private</code> → protection des données</li> <li class="fragment">✅ Getters → lecture contrôlée</li> <li class="fragment">✅ Méthodes de modification → validation systématique</li> <li class="fragment">✅ Pas de setter pour le solde → cohérence métier</li> <li class="fragment">✅ Exceptions claires → facilite le debug</li>',r,i,m="💼 En entreprise, cette protection évite les bugs coûteux !";return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=f,r=v(),i=g("p"),i.textContent=m,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-gv6vvv"&&(e.textContent=o),s=d(l),t=h(l,"UL",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1x5lr41"&&(t.innerHTML=f),r=d(l),i=h(l,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-lzo0mv"&&(i.textContent=m),this.h()},h(){w(t,"class","text-xl"),w(i,"class","fragment mt-8 text-accent-200 font-bold")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function nr(_){let e,o="Exercice 2",s,t,f="Héritage et généralisation",r,i,m="⏱️ 15-20 minutes";return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),i=g("p"),i.textContent=m,this.h()},l(l){e=h(l,"H2",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-8xxy4y"&&(e.textContent=o),s=d(l),t=h(l,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1wfm6em"&&(t.textContent=f),r=d(l),i=h(l,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-1ij9449"&&(i.textContent=m),this.h()},h(){w(e,"class","text-5xl"),w(t,"class","text-2xl text-gray-400"),w(i,"class","text-xl mt-8")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function ir(_){let e,o="📝 Exercice 2 : Système de véhicules",s,t,f=`<p class="font-bold text-accent-200">Objectif :</p> <p class="mb-4">Modéliser une hiérarchie de véhicules avec héritage.</p> <p class="font-bold text-accent-200 mt-6">Consignes :</p> <ol class="space-y-2"><li>Créer une classe abstraite <code>Vehicule</code> avec :
					<ul class="ml-6"><li>Attributs : <code>marque</code>, <code>modele</code>, <code>vitesseMax</code></li> <li>Constructeur</li> <li>Méthode concrète : <code>demarrer()</code></li> <li>Méthode abstraite : <code>klaxonner()</code></li></ul></li> <li>Créer une classe <code>Voiture</code> qui hérite de <code>Vehicule</code> avec :
					<ul class="ml-6"><li>Attribut supplémentaire : <code>nbPortes</code></li> <li>Implémenter <code>klaxonner()</code> → affiche &quot;Tuuut tuuut !&quot;</li></ul></li> <li>Créer une classe <code>Moto</code> qui hérite de <code>Vehicule</code> avec :
					<ul class="ml-6"><li>Attribut supplémentaire : <code>avecSidecar</code></li> <li>Implémenter <code>klaxonner()</code> → affiche &quot;Beep beep !&quot;</li></ul></li></ol>`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=f,this.h()},l(r){e=h(r,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-y2rbbg"&&(e.textContent=o),s=d(r),t=h(r,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-wl8xd3"&&(t.innerHTML=f),this.h()},h(){w(t,"class","text-left text-xl")},m(r,i){u(r,e,i),u(r,s,i),u(r,t,i)},p:O,d(r){r&&(a(e),a(s),a(t))}}}function ar(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function rr(_){let e,o="🎨 Diagramme UML cible",s,t,f;return t=new He({props:{$$slots:{default:[ar]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(r){e=h(r,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-iafbxg"&&(e.textContent=o),s=d(r),E(t.$$.fragment,r)},m(r,i){u(r,e,i),u(r,s,i),S(t,r,i),f=!0},p(r,i){const m={};i&1&&(m.$$scope={dirty:i,ctx:r}),t.$set(m)},i(r){f||(P(t.$$.fragment,r),f=!0)},o(r){H(t.$$.fragment,r),f=!1},d(r){r&&(a(e),a(s)),M(t,r)}}}function ur(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function or(_){let e,o="💡 Indice",s,t,f;return t=new se({props:{$$slots:{default:[ur]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(r){e=h(r,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-s9gy6g"&&(e.textContent=o),s=d(r),E(t.$$.fragment,r)},m(r,i){u(r,e,i),u(r,s,i),S(t,r,i),f=!0},p(r,i){const m={};i&1&&(m.$$scope={dirty:i,ctx:r}),t.$set(m)},i(r){f||(P(t.$$.fragment,r),f=!0)},o(r){H(t.$$.fragment,r),f=!1},d(r){r&&(a(e),a(s)),M(t,r)}}}function cr(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function $r(_){let e,o="✅ Solution : Vehicule",s,t,f;return t=new se({props:{class:"language-java",$$slots:{default:[cr]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(r){e=h(r,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-zw7ek9"&&(e.textContent=o),s=d(r),E(t.$$.fragment,r)},m(r,i){u(r,e,i),u(r,s,i),S(t,r,i),f=!0},p(r,i){const m={};i&1&&(m.$$scope={dirty:i,ctx:r}),t.$set(m)},i(r){f||(P(t.$$.fragment,r),f=!0)},o(r){H(t.$$.fragment,r),f=!1},d(r){r&&(a(e),a(s)),M(t,r)}}}function fr(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function pr(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function mr(_){let e,o="✅ Solution : Voiture et Moto",s,t,f,r,i,m;return f=new se({props:{class:"language-java",$$slots:{default:[fr]},$$scope:{ctx:_}}}),i=new se({props:{class:"language-java",$$slots:{default:[pr]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),T(f.$$.fragment),r=v(),T(i.$$.fragment),this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1ywidnm"&&(e.textContent=o),s=d(l),t=h(l,"DIV",{class:!0});var $=de(t);E(f.$$.fragment,$),r=d($),E(i.$$.fragment,$),$.forEach(a),this.h()},h(){w(t,"class","flex flex-row gap-4")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),S(f,t,null),y(t,r),S(i,t,null),m=!0},p(l,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:l}),f.$set(C);const n={};$&1&&(n.$$scope={dirty:$,ctx:l}),i.$set(n)},i(l){m||(P(f.$$.fragment,l),P(i.$$.fragment,l),m=!0)},o(l){H(f.$$.fragment,l),H(i.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a(t)),M(f),M(i)}}}function dr(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function vr(_){let e,o="🧪 Test de votre code",s,t,f;return t=new se({props:{$$slots:{default:[dr]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(r){e=h(r,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1yizvu6"&&(e.textContent=o),s=d(r),E(t.$$.fragment,r)},m(r,i){u(r,e,i),u(r,s,i),S(t,r,i),f=!0},p(r,i){const m={};i&1&&(m.$$scope={dirty:i,ctx:r}),t.$set(m)},i(r){f||(P(t.$$.fragment,r),f=!0)},o(r){H(t.$$.fragment,r),f=!1},d(r){r&&(a(e),a(s)),M(t,r)}}}function xr(_){let e,o="🎯 Points clés",s,t,f='<li class="fragment">✅ <code>abstract class</code> → empêche l&#39;instanciation directe</li> <li class="fragment">✅ <code>abstract void klaxonner()</code> → contrat pour les sous-classes</li> <li class="fragment">✅ <code>super(...)</code> → appel du constructeur parent obligatoire</li> <li class="fragment">✅ <code>@Override</code> → sécurité lors de la redéfinition</li> <li class="fragment">✅ Code commun dans le parent → évite duplication</li>',r,i,m="💼 En entreprise : hiérarchies de produits, utilisateurs, transactions, etc.";return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=f,r=v(),i=g("p"),i.textContent=m,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-gv6vvv"&&(e.textContent=o),s=d(l),t=h(l,"UL",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1z0f2wo"&&(t.innerHTML=f),r=d(l),i=h(l,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-1fewxyy"&&(i.textContent=m),this.h()},h(){w(t,"class","text-xl"),w(i,"class","fragment mt-8 text-accent-200 font-bold")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function _r(_){let e,o="Exercice 3",s,t,f="Composition et Interfaces",r,i,m="⏱️ 20-25 minutes";return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),i=g("p"),i.textContent=m,this.h()},l(l){e=h(l,"H2",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-1033wpr"&&(e.textContent=o),s=d(l),t=h(l,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1hujr1a"&&(t.textContent=f),r=d(l),i=h(l,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-1n0lccm"&&(i.textContent=m),this.h()},h(){w(e,"class","text-5xl"),w(t,"class","text-2xl text-gray-400"),w(i,"class","text-xl mt-8")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function Cr(_){let e,o="📝 Exercice 3 : Système de location",s,t,f=`<p class="font-bold text-accent-200">Objectif :</p> <p class="mb-4">Combiner héritage, composition et interfaces dans un système réaliste.</p> <p class="font-bold text-accent-200 mt-6">Consignes :</p> <ol class="space-y-2"><li>Créer une interface <code>ILouable</code> avec :
					<ul class="ml-6"><li><code>double calculerPrixLocation(int nbJours)</code></li></ul></li> <li>Réutiliser vos classes <code>Vehicule</code>, <code>Voiture</code>, <code>Moto</code></li> <li>Faire implémenter <code>ILouable</code> par <code>Voiture</code> et <code>Moto</code> :
					<ul class="ml-6"><li>Voiture : 50€/jour</li> <li>Moto : 30€/jour</li></ul></li> <li>Créer une classe <code>AgenceLocation</code> avec :
					<ul class="ml-6"><li>Liste de véhicules louables</li> <li>Méthode <code>ajouterVehicule(ILouable v)</code></li> <li>Méthode <code>calculerRevenuTotal(int nbJours)</code></li></ul></li></ol>`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=f,this.h()},l(r){e=h(r,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1xzgz2g"&&(e.textContent=o),s=d(r),t=h(r,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-p07eid"&&(t.innerHTML=f),this.h()},h(){w(t,"class","text-left text-xl")},m(r,i){u(r,e,i),u(r,s,i),u(r,t,i)},p:O,d(r){r&&(a(e),a(s),a(t))}}}function hr(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function gr(_){let e,o="🎨 Diagramme UML cible",s,t,f;return t=new He({props:{$$slots:{default:[hr]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(r){e=h(r,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-iafbxg"&&(e.textContent=o),s=d(r),E(t.$$.fragment,r)},m(r,i){u(r,e,i),u(r,s,i),S(t,r,i),f=!0},p(r,i){const m={};i&1&&(m.$$scope={dirty:i,ctx:r}),t.$set(m)},i(r){f||(P(t.$$.fragment,r),f=!0)},o(r){H(t.$$.fragment,r),f=!1},d(r){r&&(a(e),a(s)),M(t,r)}}}function br(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Lr(_){let e,o="✅ Solution : Interface et implémentations",s,t,f;return t=new se({props:{class:"language-java h-[65vh]",$$slots:{default:[br]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(r){e=h(r,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-wjrqcr"&&(e.textContent=o),s=d(r),E(t.$$.fragment,r)},m(r,i){u(r,e,i),u(r,s,i),S(t,r,i),f=!0},p(r,i){const m={};i&1&&(m.$$scope={dirty:i,ctx:r}),t.$set(m)},i(r){f||(P(t.$$.fragment,r),f=!0)},o(r){H(t.$$.fragment,r),f=!1},d(r){r&&(a(e),a(s)),M(t,r)}}}function wr(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function qr(_){let e,o="✅ Solution : AgenceLocation",s,t,f;return t=new se({props:{class:"language-java",$$slots:{default:[wr]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(r){e=h(r,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-brhqh2"&&(e.textContent=o),s=d(r),E(t.$$.fragment,r)},m(r,i){u(r,e,i),u(r,s,i),S(t,r,i),f=!0},p(r,i){const m={};i&1&&(m.$$scope={dirty:i,ctx:r}),t.$set(m)},i(r){f||(P(t.$$.fragment,r),f=!0)},o(r){H(t.$$.fragment,r),f=!1},d(r){r&&(a(e),a(s)),M(t,r)}}}function Mr(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Hr(_){let e,o="🧪 Test complet",s,t,f;return t=new se({props:{$$slots:{default:[Mr]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(r){e=h(r,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1lbxuqe"&&(e.textContent=o),s=d(r),E(t.$$.fragment,r)},m(r,i){u(r,e,i),u(r,s,i),S(t,r,i),f=!0},p(r,i){const m={};i&1&&(m.$$scope={dirty:i,ctx:r}),t.$set(m)},i(r){f||(P(t.$$.fragment,r),f=!0)},o(r){H(t.$$.fragment,r),f=!1},d(r){r&&(a(e),a(s)),M(t,r)}}}function Pr(_){let e,o="🎯 Points clés",s,t,f='<li class="fragment">✅ Interface → contrat abstrait (<i>peut faire</i>)</li> <li class="fragment">✅ Héritage → hiérarchie logique (<i>est un</i>)</li> <li class="fragment">✅ Composition → AgenceLocation <i>a des</i> véhicules</li> <li class="fragment">✅ <code>List&lt;ILouable&gt;</code> → polymorphisme en action</li> <li class="fragment">✅ <code>static final</code> → constante de classe</li>',r,i,m="💼 Architecture typique en entreprise : services, DAO, entités métier";return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=f,r=v(),i=g("p"),i.textContent=m,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-gv6vvv"&&(e.textContent=o),s=d(l),t=h(l,"UL",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-193dcgm"&&(t.innerHTML=f),r=d(l),i=h(l,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-o7prxp"&&(i.textContent=m),this.h()},h(){w(t,"class","text-xl"),w(i,"class","fragment mt-8 text-accent-200 font-bold")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function Sr(_){let e,o="🏆 Challenge Bonus",s,t,f="Pour aller plus loin";return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,this.h()},l(r){e=h(r,"H2",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-uwrmmu"&&(e.textContent=o),s=d(r),t=h(r,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-saoopl"&&(t.textContent=f),this.h()},h(){w(e,"class","text-5xl"),w(t,"class","text-2xl text-gray-400")},m(r,i){u(r,e,i),u(r,s,i),u(r,t,i)},p:O,d(r){r&&(a(e),a(s),a(t))}}}function Er(_){let e,o="💪 Challenge : Système de réduction",s,t,f=`<p class="font-bold text-accent-200">Améliorez votre système de location :</p> <ol class="space-y-3 mt-4"><li>Ajouter une interface <code>IReductible</code> avec :
					<ul class="ml-6"><li><code>double appliquerReduction(double prix)</code></li></ul></li> <li>Créer des classes de réduction :
					<ul class="ml-6"><li><code>ReductionPourcentage</code> (ex: -20%)</li> <li><code>ReductionMontant</code> (ex: -50€)</li></ul></li> <li>Modifier <code>AgenceLocation</code> pour accepter une réduction</li> <li>Tester avec plusieurs scénarios</li></ol>`,r,i,m="💡 Indice : Strategy Pattern (on le verra plus tard dans les Design Patterns)";return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=f,r=v(),i=g("p"),i.textContent=m,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-11zr1pn"&&(e.textContent=o),s=d(l),t=h(l,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-122ga3f"&&(t.innerHTML=f),r=d(l),i=h(l,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-nkxlqz"&&(i.textContent=m),this.h()},h(){w(t,"class","text-left text-xl"),w(i,"class","fragment mt-6 text-accent-200")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function Tr(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Ar(_){let e,o="✅ Solution Challenge : Interfaces",s,t,f;return t=new se({props:{class:"language-java",$$slots:{default:[Tr]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(r){e=h(r,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1r3t153"&&(e.textContent=o),s=d(r),E(t.$$.fragment,r)},m(r,i){u(r,e,i),u(r,s,i),S(t,r,i),f=!0},p(r,i){const m={};i&1&&(m.$$scope={dirty:i,ctx:r}),t.$set(m)},i(r){f||(P(t.$$.fragment,r),f=!0)},o(r){H(t.$$.fragment,r),f=!1},d(r){r&&(a(e),a(s)),M(t,r)}}}function Ir(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function jr(_){let e,o="✅ Solution Challenge : AgenceLocation améliorée",s,t,f;return t=new se({props:{class:"language-java",$$slots:{default:[Ir]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(r){e=h(r,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1ou944c"&&(e.textContent=o),s=d(r),E(t.$$.fragment,r)},m(r,i){u(r,e,i),u(r,s,i),S(t,r,i),f=!0},p(r,i){const m={};i&1&&(m.$$scope={dirty:i,ctx:r}),t.$set(m)},i(r){f||(P(t.$$.fragment,r),f=!0)},o(r){H(t.$$.fragment,r),f=!1},d(r){r&&(a(e),a(s)),M(t,r)}}}function Dr(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function kr(_){let e,o="🧪 Test du challenge",s,t,f;return t=new se({props:{$$slots:{default:[Dr]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(r){e=h(r,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-ouoo1i"&&(e.textContent=o),s=d(r),E(t.$$.fragment,r)},m(r,i){u(r,e,i),u(r,s,i),S(t,r,i),f=!0},p(r,i){const m={};i&1&&(m.$$scope={dirty:i,ctx:r}),t.$set(m)},i(r){f||(P(t.$$.fragment,r),f=!0)},o(r){H(t.$$.fragment,r),f=!1},d(r){r&&(a(e),a(s)),M(t,r)}}}function Or(_){let e,o="🏋️ Exercices pratiques - Séance 1",s,t,f,r,i,m,l,$,C,n,p,L,c,x,I,q,D,j,V,W,z,U,te,A,F,ce,pe,me,_e,oe,ve,fe,xe,G,ne,Q,ue,K,re,Ce,X,$e,he,J,ie,B,ae,Le,we,qe,Me;return t=new R({props:{data_background_color:"#1a3a1a",$$slots:{default:[Ya]},$$scope:{ctx:_}}}),r=new R({props:{$$slots:{default:[Za]},$$scope:{ctx:_}}}),m=new R({props:{$$slots:{default:[er]},$$scope:{ctx:_}}}),$=new R({props:{$$slots:{default:[sr]},$$scope:{ctx:_}}}),n=new R({props:{$$slots:{default:[lr]},$$scope:{ctx:_}}}),L=new R({props:{data_background_color:"#1a1a3a",$$slots:{default:[nr]},$$scope:{ctx:_}}}),x=new R({props:{$$slots:{default:[ir]},$$scope:{ctx:_}}}),q=new R({props:{$$slots:{default:[rr]},$$scope:{ctx:_}}}),j=new R({props:{$$slots:{default:[or]},$$scope:{ctx:_}}}),W=new R({props:{$$slots:{default:[$r]},$$scope:{ctx:_}}}),U=new R({props:{$$slots:{default:[mr]},$$scope:{ctx:_}}}),A=new R({props:{$$slots:{default:[vr]},$$scope:{ctx:_}}}),ce=new R({props:{$$slots:{default:[xr]},$$scope:{ctx:_}}}),me=new R({props:{data_background_color:"#3a1a1a",$$slots:{default:[_r]},$$scope:{ctx:_}}}),oe=new R({props:{$$slots:{default:[Cr]},$$scope:{ctx:_}}}),fe=new R({props:{$$slots:{default:[gr]},$$scope:{ctx:_}}}),G=new R({props:{$$slots:{default:[Lr]},$$scope:{ctx:_}}}),Q=new R({props:{$$slots:{default:[qr]},$$scope:{ctx:_}}}),K=new R({props:{$$slots:{default:[Hr]},$$scope:{ctx:_}}}),Ce=new R({props:{$$slots:{default:[Pr]},$$scope:{ctx:_}}}),$e=new R({props:{data_background_color:"#2a2a1a",$$slots:{default:[Sr]},$$scope:{ctx:_}}}),J=new R({props:{$$slots:{default:[Er]},$$scope:{ctx:_}}}),B=new R({props:{$$slots:{default:[Ar]},$$scope:{ctx:_}}}),Le=new R({props:{$$slots:{default:[jr]},$$scope:{ctx:_}}}),qe=new R({props:{$$slots:{default:[kr]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),T(r.$$.fragment),i=v(),T(m.$$.fragment),l=v(),T($.$$.fragment),C=v(),T(n.$$.fragment),p=v(),T(L.$$.fragment),c=v(),T(x.$$.fragment),I=v(),T(q.$$.fragment),D=v(),T(j.$$.fragment),V=v(),T(W.$$.fragment),z=v(),T(U.$$.fragment),te=v(),T(A.$$.fragment),F=v(),T(ce.$$.fragment),pe=v(),T(me.$$.fragment),_e=v(),T(oe.$$.fragment),ve=v(),T(fe.$$.fragment),xe=v(),T(G.$$.fragment),ne=v(),T(Q.$$.fragment),ue=v(),T(K.$$.fragment),re=v(),T(Ce.$$.fragment),X=v(),T($e.$$.fragment),he=v(),T(J.$$.fragment),ie=v(),T(B.$$.fragment),ae=v(),T(Le.$$.fragment),we=v(),T(qe.$$.fragment)},l(N){e=h(N,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-lz1hvq"&&(e.textContent=o),s=d(N),E(t.$$.fragment,N),f=d(N),E(r.$$.fragment,N),i=d(N),E(m.$$.fragment,N),l=d(N),E($.$$.fragment,N),C=d(N),E(n.$$.fragment,N),p=d(N),E(L.$$.fragment,N),c=d(N),E(x.$$.fragment,N),I=d(N),E(q.$$.fragment,N),D=d(N),E(j.$$.fragment,N),V=d(N),E(W.$$.fragment,N),z=d(N),E(U.$$.fragment,N),te=d(N),E(A.$$.fragment,N),F=d(N),E(ce.$$.fragment,N),pe=d(N),E(me.$$.fragment,N),_e=d(N),E(oe.$$.fragment,N),ve=d(N),E(fe.$$.fragment,N),xe=d(N),E(G.$$.fragment,N),ne=d(N),E(Q.$$.fragment,N),ue=d(N),E(K.$$.fragment,N),re=d(N),E(Ce.$$.fragment,N),X=d(N),E($e.$$.fragment,N),he=d(N),E(J.$$.fragment,N),ie=d(N),E(B.$$.fragment,N),ae=d(N),E(Le.$$.fragment,N),we=d(N),E(qe.$$.fragment,N)},m(N,le){u(N,e,le),u(N,s,le),S(t,N,le),u(N,f,le),S(r,N,le),u(N,i,le),S(m,N,le),u(N,l,le),S($,N,le),u(N,C,le),S(n,N,le),u(N,p,le),S(L,N,le),u(N,c,le),S(x,N,le),u(N,I,le),S(q,N,le),u(N,D,le),S(j,N,le),u(N,V,le),S(W,N,le),u(N,z,le),S(U,N,le),u(N,te,le),S(A,N,le),u(N,F,le),S(ce,N,le),u(N,pe,le),S(me,N,le),u(N,_e,le),S(oe,N,le),u(N,ve,le),S(fe,N,le),u(N,xe,le),S(G,N,le),u(N,ne,le),S(Q,N,le),u(N,ue,le),S(K,N,le),u(N,re,le),S(Ce,N,le),u(N,X,le),S($e,N,le),u(N,he,le),S(J,N,le),u(N,ie,le),S(B,N,le),u(N,ae,le),S(Le,N,le),u(N,we,le),S(qe,N,le),Me=!0},p(N,le){const Ie={};le&1&&(Ie.$$scope={dirty:le,ctx:N}),t.$set(Ie);const Te={};le&1&&(Te.$$scope={dirty:le,ctx:N}),r.$set(Te);const ze={};le&1&&(ze.$$scope={dirty:le,ctx:N}),m.$set(ze);const Ae={};le&1&&(Ae.$$scope={dirty:le,ctx:N}),$.$set(Ae);const Ue={};le&1&&(Ue.$$scope={dirty:le,ctx:N}),n.$set(Ue);const je={};le&1&&(je.$$scope={dirty:le,ctx:N}),L.$set(je);const Ne={};le&1&&(Ne.$$scope={dirty:le,ctx:N}),x.$set(Ne);const De={};le&1&&(De.$$scope={dirty:le,ctx:N}),q.$set(De);const Je={};le&1&&(Je.$$scope={dirty:le,ctx:N}),j.$set(Je);const ke={};le&1&&(ke.$$scope={dirty:le,ctx:N}),W.$set(ke);const Be={};le&1&&(Be.$$scope={dirty:le,ctx:N}),U.$set(Be);const Oe={};le&1&&(Oe.$$scope={dirty:le,ctx:N}),A.$set(Oe);const Fe={};le&1&&(Fe.$$scope={dirty:le,ctx:N}),ce.$set(Fe);const Ve={};le&1&&(Ve.$$scope={dirty:le,ctx:N}),me.$set(Ve);const Qe={};le&1&&(Qe.$$scope={dirty:le,ctx:N}),oe.$set(Qe);const Re={};le&1&&(Re.$$scope={dirty:le,ctx:N}),fe.$set(Re);const Ke={};le&1&&(Ke.$$scope={dirty:le,ctx:N}),G.$set(Ke);const Ge={};le&1&&(Ge.$$scope={dirty:le,ctx:N}),Q.$set(Ge);const Xe={};le&1&&(Xe.$$scope={dirty:le,ctx:N}),K.$set(Xe);const k={};le&1&&(k.$$scope={dirty:le,ctx:N}),Ce.$set(k);const ee={};le&1&&(ee.$$scope={dirty:le,ctx:N}),$e.$set(ee);const We={};le&1&&(We.$$scope={dirty:le,ctx:N}),J.$set(We);const Ye={};le&1&&(Ye.$$scope={dirty:le,ctx:N}),B.$set(Ye);const Ze={};le&1&&(Ze.$$scope={dirty:le,ctx:N}),Le.$set(Ze);const ye={};le&1&&(ye.$$scope={dirty:le,ctx:N}),qe.$set(ye)},i(N){Me||(P(t.$$.fragment,N),P(r.$$.fragment,N),P(m.$$.fragment,N),P($.$$.fragment,N),P(n.$$.fragment,N),P(L.$$.fragment,N),P(x.$$.fragment,N),P(q.$$.fragment,N),P(j.$$.fragment,N),P(W.$$.fragment,N),P(U.$$.fragment,N),P(A.$$.fragment,N),P(ce.$$.fragment,N),P(me.$$.fragment,N),P(oe.$$.fragment,N),P(fe.$$.fragment,N),P(G.$$.fragment,N),P(Q.$$.fragment,N),P(K.$$.fragment,N),P(Ce.$$.fragment,N),P($e.$$.fragment,N),P(J.$$.fragment,N),P(B.$$.fragment,N),P(Le.$$.fragment,N),P(qe.$$.fragment,N),Me=!0)},o(N){H(t.$$.fragment,N),H(r.$$.fragment,N),H(m.$$.fragment,N),H($.$$.fragment,N),H(n.$$.fragment,N),H(L.$$.fragment,N),H(x.$$.fragment,N),H(q.$$.fragment,N),H(j.$$.fragment,N),H(W.$$.fragment,N),H(U.$$.fragment,N),H(A.$$.fragment,N),H(ce.$$.fragment,N),H(me.$$.fragment,N),H(oe.$$.fragment,N),H(fe.$$.fragment,N),H(G.$$.fragment,N),H(Q.$$.fragment,N),H(K.$$.fragment,N),H(Ce.$$.fragment,N),H($e.$$.fragment,N),H(J.$$.fragment,N),H(B.$$.fragment,N),H(Le.$$.fragment,N),H(qe.$$.fragment,N),Me=!1},d(N){N&&(a(e),a(s),a(f),a(i),a(l),a(C),a(p),a(c),a(I),a(D),a(V),a(z),a(te),a(F),a(pe),a(_e),a(ve),a(xe),a(ne),a(ue),a(re),a(X),a(he),a(ie),a(ae),a(we)),M(t,N),M(r,N),M(m,N),M($,N),M(n,N),M(L,N),M(x,N),M(q,N),M(j,N),M(W,N),M(U,N),M(A,N),M(ce,N),M(me,N),M(oe,N),M(fe,N),M(G,N),M(Q,N),M(K,N),M(Ce,N),M($e,N),M(J,N),M(B,N),M(Le,N),M(qe,N)}}}function zr(_){let e,o;return e=new R({props:{$$slots:{default:[Or]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){E(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const f={};t&1&&(f.$$scope={dirty:t,ctx:s}),e.$set(f)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){H(e.$$.fragment,s),o=!1},d(s){M(e,s)}}}class Vr extends Se{constructor(e){super(),Ee(this,e,null,zr,Pe,{})}}function Rr(_){let e,o="Gestion des erreurs",s,t,f="Les exceptions en Java";return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,this.h()},l(r){e=h(r,"H2",{class:!0,"data-svelte-h":!0}),b(e)!=="svelte-1nmax2r"&&(e.textContent=o),s=d(r),t=h(r,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1imhj9u"&&(t.textContent=f),this.h()},h(){w(e,"class","text-5xl"),w(t,"class","text-2xl text-gray-400")},m(r,i){u(r,e,i),u(r,s,i),u(r,t,i)},p:O,d(r){r&&(a(e),a(s),a(t))}}}function Ur(_){let e=`
int a = 10 / 0;  // ArithmeticException !

String s = null;
s.length();      // NullPointerException !

int[] tab = new int[5];
tab[10] = 42;    // ArrayIndexOutOfBoundsException !
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Nr(_){let e,o="Qu'est-ce qu'une exception ?",s,t,f=`Une <span class="text-important">exception</span> est une erreur qui survient pendant l&#39;exécution
			du programme.`,r,i,m,l,$="😱 Sans gestion, ces erreurs <b>crashent</b> votre programme !",C,n,p=`Les exceptions sont fondamentales en production. Un programme qui crashe = utilisateurs
			mécontents. L'idée : prévoir les problèmes et y réagir proprement au lieu de planter.
			Différence avec les erreurs de compilation : les exceptions arrivent à l'exécution.`,L;return i=new se({props:{$$slots:{default:[Ur]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),T(i.$$.fragment),m=v(),l=g("p"),l.innerHTML=$,C=v(),n=g("aside"),n.textContent=p,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1egq31j"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1hzkvsn"&&(t.innerHTML=f),r=d(c),E(i.$$.fragment,c),m=d(c),l=h(c,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1rs1tzg"&&(l.innerHTML=$),C=d(c),n=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1fl0e88"&&(n.textContent=p),this.h()},h(){w(l,"class","fragment mt-4 text-red-400 font-bold"),w(n,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),S(i,c,x),u(c,m,x),u(c,l,x),u(c,C,x),u(c,n,x),L=!0},p(c,x){const I={};x&1&&(I.$$scope={dirty:x,ctx:c}),i.$set(I)},i(c){L||(P(i.$$.fragment,c),L=!0)},o(c){H(i.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(r),a(m),a(l),a(C),a(n)),M(i,c)}}}function Jr(_){let e=`
public void virer(CompteBancaire source, CompteBancaire dest, double montant) {
    source.retirer(montant);
    dest.deposer(montant);    // 💥 Crash ici si dest est null !
}
// Le montant est débité mais jamais crédité !
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Br(_){let e,o="Le problème en entreprise",s,t,f,r="Imaginez un système bancaire :",i,m,l,$,C="❌ Résultat : argent perdu, clients furieux, responsabilités légales !",n,p,L='✅ Solution : gérer les erreurs avec des <span class="text-important">exceptions</span>',c,x,I=`Exemple réel : en 2012, Knight Capital a perdu 440 millions de dollars en 45 minutes à cause
			d'un bug. Les exceptions + transactions permettent le rollback : si ça échoue, on annule tout.
			C'est le principe ACID des bases de données.`,q;return m=new se({props:{class:"fragment",$$slots:{default:[Jr]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),f=g("p"),f.textContent=r,i=v(),T(m.$$.fragment),l=v(),$=g("p"),$.textContent=C,n=v(),p=g("p"),p.innerHTML=L,c=v(),x=g("aside"),x.textContent=I,this.h()},l(D){e=h(D,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-t2k3nu"&&(e.textContent=o),s=d(D),t=h(D,"DIV",{class:!0});var j=de(t);f=h(j,"P",{"data-svelte-h":!0}),b(f)!=="svelte-1kax0xz"&&(f.textContent=r),i=d(j),E(m.$$.fragment,j),l=d(j),$=h(j,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-195cml6"&&($.textContent=C),n=d(j),p=h(j,"P",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-l7uzpt"&&(p.innerHTML=L),j.forEach(a),c=d(D),x=h(D,"ASIDE",{class:!0,"data-svelte-h":!0}),b(x)!=="svelte-6opdw3"&&(x.textContent=I),this.h()},h(){w($,"class","fragment mt-6 text-red-400"),w(p,"class","fragment mt-4 text-accent-200"),w(t,"class","text-xl"),w(x,"class","notes")},m(D,j){u(D,e,j),u(D,s,j),u(D,t,j),y(t,f),y(t,i),S(m,t,null),y(t,l),y(t,$),y(t,n),y(t,p),u(D,c,j),u(D,x,j),q=!0},p(D,j){const V={};j&1&&(V.$$scope={dirty:j,ctx:D}),m.$set(V)},i(D){q||(P(m.$$.fragment,D),q=!0)},o(D){H(m.$$.fragment,D),q=!1},d(D){D&&(a(e),a(s),a(t),a(c),a(x)),M(m)}}}function Fr(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Gr(_){let e,o="try / catch / finally",s,t,f="On utilise des blocs pour <b>capturer</b> et <b>gérer</b> les exceptions.",r,i,m,l,$=`Le try délimite la zone de code surveillée. Le catch attrape l'exception. Le finally s'exécute
			MÊME si on fait un return dans le try ou le catch ! C'est la garantie que le nettoyage sera
			fait. Très important pour éviter les fuites mémoire.`,C;return i=new se({props:{lines:"1-4|5-8|9-12",$$slots:{default:[Fr]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),T(i.$$.fragment),m=v(),l=g("aside"),l.textContent=$,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1v9mfjh"&&(e.textContent=o),s=d(n),t=h(n,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1g5ymj1"&&(t.innerHTML=f),r=d(n),E(i.$$.fragment,n),m=d(n),l=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1c47ufk"&&(l.textContent=$),this.h()},h(){w(l,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),u(n,t,p),u(n,r,p),S(i,n,p),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),i.$set(L)},i(n){C||(P(i.$$.fragment,n),C=!0)},o(n){H(i.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(t),a(r),a(m),a(l)),M(i,n)}}}function Qr(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Kr(_){let e,o="Exemple : virement sécurisé",s,t,f;return t=new se({props:{$$slots:{default:[Qr]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(r){e=h(r,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-16qx2z5"&&(e.textContent=o),s=d(r),E(t.$$.fragment,r)},m(r,i){u(r,e,i),u(r,s,i),S(t,r,i),f=!0},p(r,i){const m={};i&1&&(m.$$scope={dirty:i,ctx:r}),t.$set(m)},i(r){f||(P(t.$$.fragment,r),f=!0)},o(r){H(t.$$.fragment,r),f=!1},d(r){r&&(a(e),a(s)),M(t,r)}}}function Xr(_){let e=`
public void setAge(int age) {
    if (age < 0) {
        throw new IllegalArgumentException("L'âge ne peut pas être négatif !");
    }
    if (age > 150) {
        throw new IllegalArgumentException("L'âge est irréaliste !");
    }
    this.age = age;
}
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Wr(_){let e,o="Lancer une exception avec throw",s,t,f="On peut <b>créer</b> et <b>lancer</b> nos propres exceptions.",r,i,m,l,$="💡 Cela permet de <b>valider les données</b> et d&#39;arrêter l&#39;exécution proprement.",C,n,p=`throw crée et lance l'exception. C'est vous qui décidez quand une situation est anormale.
			C'est le pattern "Fail Fast" : mieux vaut échouer tôt que propager des données invalides. Très
			utile pour valider les entrées utilisateur ou les paramètres de méthodes.`,L;return i=new se({props:{$$slots:{default:[Xr]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),T(i.$$.fragment),m=v(),l=g("p"),l.innerHTML=$,C=v(),n=g("aside"),n.textContent=p,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-axmwwj"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1g5b8i9"&&(t.innerHTML=f),r=d(c),E(i.$$.fragment,c),m=d(c),l=h(c,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-juat2d"&&(l.innerHTML=$),C=d(c),n=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-6k9ckz"&&(n.textContent=p),this.h()},h(){w(l,"class","fragment mt-4 text-accent-200"),w(n,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),S(i,c,x),u(c,m,x),u(c,l,x),u(c,C,x),u(c,n,x),L=!0},p(c,x){const I={};x&1&&(I.$$scope={dirty:x,ctx:c}),i.$set(I)},i(c){L||(P(i.$$.fragment,c),L=!0)},o(c){H(i.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(r),a(m),a(l),a(C),a(n)),M(i,c)}}}function Yr(_){let e=`
Personne p = new Personne("Jean");

try {
    p.setAge(-5);  // Lance une exception
} catch (IllegalArgumentException e) {
    System.out.println("Erreur : " + e.getMessage());
    // Affiche : "Erreur : L'âge ne peut pas être négatif !"
}

System.out.println("Programme continue...");
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Zr(_){let e,o="Utilisation",s,t,f,r,i="Sans le <code>try/catch</code>, le programme crasherait immédiatement.",m;return t=new se({props:{$$slots:{default:[Yr]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("p"),r.innerHTML=i,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-oc5s5"&&(e.textContent=o),s=d(l),E(t.$$.fragment,l),f=d(l),r=h(l,"P",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-ij3uuw"&&(r.innerHTML=i),this.h()},h(){w(r,"class","fragment mt-4")},m(l,$){u(l,e,$),u(l,s,$),S(t,l,$),u(l,f,$),u(l,r,$),m=!0},p(l,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:l}),t.$set(C)},i(l){m||(P(t.$$.fragment,l),m=!0)},o(l){H(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a(f),a(r)),M(t,l)}}}function yr(_){let e,o="Exceptions courantes",s,t,f='<tr class="fragment"><td class="p-3"><code>NullPointerException</code></td> <td class="p-3">Accès à un objet null</td></tr> <tr class="fragment"><td class="p-3"><code>ArrayIndexOutOfBoundsException</code></td> <td class="p-3">Index hors limites d&#39;un tableau</td></tr> <tr class="fragment"><td class="p-3"><code>ArithmeticException</code></td> <td class="p-3">Division par zéro</td></tr> <tr class="fragment"><td class="p-3"><code>IllegalArgumentException</code></td> <td class="p-3">Argument invalide</td></tr> <tr class="fragment"><td class="p-3"><code>IOException</code></td> <td class="p-3">Erreur d&#39;entrée/sortie (fichiers)</td></tr> <tr class="fragment"><td class="p-3"><code>SQLException</code></td> <td class="p-3">Erreur base de données</td></tr>',r,i,m=`NullPointerException est la plus fréquente ! Tony Hoare l'appelle son "erreur à un milliard de
			dollars". Java 14+ a amélioré les messages d'erreur NPE pour mieux identifier le problème. En
			entretien, on vous demandera souvent de citer des exceptions courantes.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("table"),t.innerHTML=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-lf1a5g"&&(e.textContent=o),s=d(l),t=h(l,"TABLE",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1tjk60m"&&(t.innerHTML=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-8hnm1r"&&(i.textContent=m),this.h()},h(){w(t,"class","text-xl"),w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function eu(_){let e=`
// IOException DOIT être gérée
public void lireFichier() 
    throws IOException {
    FileReader fr = 
        new FileReader("test.txt");
}
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function tu(_){let e=`
// Pas d'obligation
public void diviser(int a, int b) {
    return a / b;
    // Peut lancer ArithmeticException
}
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function su(_){let e,o="Exceptions vérifiées vs non-vérifiées",s,t,f,r,i="🔍 Checked (vérifiées)",m,l,$="Le compilateur <b>oblige</b> à les gérer",C,n,p,L,c="Exemples : <code>IOException</code>, <code>SQLException</code>",x,I,q,D="⚡ Unchecked (non-vérifiées)",j,V,W="Gestion <b>optionnelle</b>",z,U,te,A,F="Exemples : <code>NullPointerException</code>, <code>ArithmeticException</code>",ce,pe,me=`C'est un débat classique en Java. Certains pensent que les checked exceptions sont trop
			verbeuses. Les unchecked héritent de RuntimeException. Les checked héritent directement de
			Exception. En pratique moderne, on préfère souvent les unchecked pour moins de boilerplate.`,_e;return n=new se({props:{$$slots:{default:[eu]},$$scope:{ctx:_}}}),U=new se({props:{$$slots:{default:[tu]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),f=g("div"),r=g("h4"),r.textContent=i,m=v(),l=g("p"),l.innerHTML=$,C=v(),T(n.$$.fragment),p=v(),L=g("p"),L.innerHTML=c,x=v(),I=g("div"),q=g("h4"),q.textContent=D,j=v(),V=g("p"),V.innerHTML=W,z=v(),T(U.$$.fragment),te=v(),A=g("p"),A.innerHTML=F,ce=v(),pe=g("aside"),pe.textContent=me,this.h()},l(oe){e=h(oe,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1rgwfhb"&&(e.textContent=o),s=d(oe),t=h(oe,"DIV",{class:!0});var ve=de(t);f=h(ve,"DIV",{class:!0});var fe=de(f);r=h(fe,"H4",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-16tmvlx"&&(r.textContent=i),m=d(fe),l=h(fe,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1788pm1"&&(l.innerHTML=$),C=d(fe),E(n.$$.fragment,fe),p=d(fe),L=h(fe,"P",{class:!0,"data-svelte-h":!0}),b(L)!=="svelte-g6fb4e"&&(L.innerHTML=c),fe.forEach(a),x=d(ve),I=h(ve,"DIV",{class:!0});var xe=de(I);q=h(xe,"H4",{class:!0,"data-svelte-h":!0}),b(q)!=="svelte-7wdhub"&&(q.textContent=D),j=d(xe),V=h(xe,"P",{class:!0,"data-svelte-h":!0}),b(V)!=="svelte-63ot4u"&&(V.innerHTML=W),z=d(xe),E(U.$$.fragment,xe),te=d(xe),A=h(xe,"P",{class:!0,"data-svelte-h":!0}),b(A)!=="svelte-dhufwv"&&(A.innerHTML=F),xe.forEach(a),ve.forEach(a),ce=d(oe),pe=h(oe,"ASIDE",{class:!0,"data-svelte-h":!0}),b(pe)!=="svelte-1xkx1k0"&&(pe.textContent=me),this.h()},h(){w(r,"class","text-important"),w(l,"class","text-sm mt-2"),w(L,"class","text-sm mt-2"),w(f,"class","fragment p-4 bg-accent-950 rounded-lg"),w(q,"class","text-important"),w(V,"class","text-sm mt-2"),w(A,"class","text-sm mt-2"),w(I,"class","fragment p-4 bg-accent-950 rounded-lg"),w(t,"class","grid grid-cols-2 gap-6 mt-6"),w(pe,"class","notes")},m(oe,ve){u(oe,e,ve),u(oe,s,ve),u(oe,t,ve),y(t,f),y(f,r),y(f,m),y(f,l),y(f,C),S(n,f,null),y(f,p),y(f,L),y(t,x),y(t,I),y(I,q),y(I,j),y(I,V),y(I,z),S(U,I,null),y(I,te),y(I,A),u(oe,ce,ve),u(oe,pe,ve),_e=!0},p(oe,ve){const fe={};ve&1&&(fe.$$scope={dirty:ve,ctx:oe}),n.$set(fe);const xe={};ve&1&&(xe.$$scope={dirty:ve,ctx:oe}),U.$set(xe)},i(oe){_e||(P(n.$$.fragment,oe),P(U.$$.fragment,oe),_e=!0)},o(oe){H(n.$$.fragment,oe),H(U.$$.fragment,oe),_e=!1},d(oe){oe&&(a(e),a(s),a(t),a(ce),a(pe)),M(n),M(U)}}}function lu(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function nu(_){let e,o="Le mot-clé throws",s,t,f="Déclare qu&#39;une méthode <b>peut</b> lancer une exception (mais ne la gère pas).",r,i,m,l,$=`throws délègue la responsabilité. "Je sais que ça peut foirer, mais c'est à toi de gérer."
			Attention : throw (sans s) lance l'exception, throws (avec s) déclare la possibilité. On peut
			déclarer plusieurs exceptions : throws IOException, SQLException.`,C;return i=new se({props:{$$slots:{default:[lu]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),T(i.$$.fragment),m=v(),l=g("aside"),l.textContent=$,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1b7j9e9"&&(e.textContent=o),s=d(n),t=h(n,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1y0hxy3"&&(t.innerHTML=f),r=d(n),E(i.$$.fragment,n),m=d(n),l=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-17n9r8y"&&(l.textContent=$),this.h()},h(){w(l,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),u(n,t,p),u(n,r,p),S(i,n,p),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),i.$set(L)},i(n){C||(P(i.$$.fragment,n),C=!0)},o(n){H(i.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(t),a(r),a(m),a(l)),M(i,n)}}}function iu(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function au(_){let e,o="Créer ses propres exceptions",s,t,f="Pour des cas métier spécifiques, on peut créer nos propres exceptions.",r,i,m,l,$=`Les exceptions métier améliorent la lisibilité du code. SoldeInsuffisantException dit
			exactement ce qui se passe. On peut stocker des infos supplémentaires (solde, montant) pour
			mieux gérer l'erreur. Convention : le nom se termine par Exception.`,C;return i=new se({props:{$$slots:{default:[iu]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),T(i.$$.fragment),m=v(),l=g("aside"),l.textContent=$,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1m2x4bb"&&(e.textContent=o),s=d(n),t=h(n,"P",{"data-svelte-h":!0}),b(t)!=="svelte-19oc8nz"&&(t.textContent=f),r=d(n),E(i.$$.fragment,n),m=d(n),l=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-t8my84"&&(l.textContent=$),this.h()},h(){w(l,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),u(n,t,p),u(n,r,p),S(i,n,p),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),i.$set(L)},i(n){C||(P(i.$$.fragment,n),C=!0)},o(n){H(i.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(t),a(r),a(m),a(l)),M(i,n)}}}function ru(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function uu(_){let e,o="Utilisation de l'exception personnalisée",s,t,f;return t=new se({props:{$$slots:{default:[ru]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment)},l(r){e=h(r,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1966yd8"&&(e.textContent=o),s=d(r),E(t.$$.fragment,r)},m(r,i){u(r,e,i),u(r,s,i),S(t,r,i),f=!0},p(r,i){const m={};i&1&&(m.$$scope={dirty:i,ctx:r}),t.$set(m)},i(r){f||(P(t.$$.fragment,r),f=!0)},o(r){H(t.$$.fragment,r),f=!1},d(r){r&&(a(e),a(s)),M(t,r)}}}function ou(_){let e,o="Bonnes pratiques",s,t,f='<li class="fragment">✅ Attraper des exceptions <b>spécifiques</b> plutôt que <code>Exception</code></li> <li class="fragment">✅ Ne jamais laisser un <code>catch</code> vide</li> <li class="fragment">✅ Utiliser <code>finally</code> pour libérer les ressources</li> <li class="fragment">✅ Logger les exceptions pour le debug</li> <li class="fragment">✅ Créer des exceptions métier personnalisées</li> <li class="fragment">❌ Ne pas utiliser les exceptions pour le contrôle de flux normal</li>',r,i,m=`Le catch vide est le pire anti-pattern : on avale l'erreur et on ne sait jamais ce qui s'est
			passé. Pour le logging, utilisez un framework comme SLF4J/Logback en entreprise. Les
			exceptions sont coûteuses en performance, ne les utilisez pas pour le flux normal.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-uo4ex7"&&(e.textContent=o),s=d(l),t=h(l,"UL",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1uzwzbt"&&(t.innerHTML=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-1oakell"&&(i.textContent=m),this.h()},h(){w(t,"class","text-xl"),w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function cu(_){let e=`
try {
    // Un gros bloc de code
    compte.retirer(100);
    compte.deposer(50);
    compte.calculerInterets();
} catch (Exception e) {
    // Ne rien faire... 😱
}
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function $u(_){let e,o="❌ Mauvais exemple",s,t,f,r,i="Problèmes : catch trop large, pas de gestion, on masque les erreurs !",m;return t=new se({props:{$$slots:{default:[cu]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("p"),r.textContent=i,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-n6sp2k"&&(e.textContent=o),s=d(l),E(t.$$.fragment,l),f=d(l),r=h(l,"P",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-otctfb"&&(r.textContent=i),this.h()},h(){w(r,"class","fragment text-red-400 mt-4")},m(l,$){u(l,e,$),u(l,s,$),S(t,l,$),u(l,f,$),u(l,r,$),m=!0},p(l,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:l}),t.$set(C)},i(l){m||(P(t.$$.fragment,l),m=!0)},o(l){H(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a(f),a(r)),M(t,l)}}}function fu(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function pu(_){let e,o="✅ Bon exemple",s,t,f,r,i="✅ Exceptions spécifiques, gestion appropriée, logging, cleanup",m;return t=new se({props:{$$slots:{default:[fu]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("p"),r.textContent=i,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-vb4f5s"&&(e.textContent=o),s=d(l),E(t.$$.fragment,l),f=d(l),r=h(l,"P",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-oigkm9"&&(r.textContent=i),this.h()},h(){w(r,"class","fragment text-green-400 mt-4")},m(l,$){u(l,e,$),u(l,s,$),S(t,l,$),u(l,f,$),u(l,r,$),m=!0},p(l,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:l}),t.$set(C)},i(l){m||(P(t.$$.fragment,l),m=!0)},o(l){H(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a(f),a(r)),M(t,l)}}}function mu(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function du(_){let e=`
try (FileReader fr = 
        new FileReader("test.txt")) {
    // ... lecture ...
    // fr.close() automatique !
} catch (IOException e) {
    e.printStackTrace();
}
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function vu(_){let e,o="Try-with-resources (Java 7+)",s,t,f="Gestion automatique des ressources (fichiers, connexions...).",r,i,m,l,$="❌ Avant",C,n,p,L,c,x="✅ Maintenant",I,q,D,j,V=`try-with-resources est arrivé en Java 7. Plus jamais de finally pour fermer un fichier !
			L'objet doit implémenter AutoCloseable. close() est appelé automatiquement. On peut déclarer
			plusieurs ressources séparées par des points-virgules.`,W;return n=new se({props:{$$slots:{default:[mu]},$$scope:{ctx:_}}}),q=new se({props:{$$slots:{default:[du]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),i=g("div"),m=g("div"),l=g("h4"),l.textContent=$,C=v(),T(n.$$.fragment),p=v(),L=g("div"),c=g("h4"),c.textContent=x,I=v(),T(q.$$.fragment),D=v(),j=g("aside"),j.textContent=V,this.h()},l(z){e=h(z,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1lmaf9"&&(e.textContent=o),s=d(z),t=h(z,"P",{"data-svelte-h":!0}),b(t)!=="svelte-t32lk8"&&(t.textContent=f),r=d(z),i=h(z,"DIV",{class:!0});var U=de(i);m=h(U,"DIV",{});var te=de(m);l=h(te,"H4",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-m07bex"&&(l.textContent=$),C=d(te),E(n.$$.fragment,te),te.forEach(a),p=d(U),L=h(U,"DIV",{});var A=de(L);c=h(A,"H4",{class:!0,"data-svelte-h":!0}),b(c)!=="svelte-mz6dl9"&&(c.textContent=x),I=d(A),E(q.$$.fragment,A),A.forEach(a),U.forEach(a),D=d(z),j=h(z,"ASIDE",{class:!0,"data-svelte-h":!0}),b(j)!=="svelte-t382nm"&&(j.textContent=V),this.h()},h(){w(l,"class","text-red-400"),w(c,"class","text-green-400"),w(i,"class","grid grid-cols-2 gap-4"),w(j,"class","notes")},m(z,U){u(z,e,U),u(z,s,U),u(z,t,U),u(z,r,U),u(z,i,U),y(i,m),y(m,l),y(m,C),S(n,m,null),y(i,p),y(i,L),y(L,c),y(L,I),S(q,L,null),u(z,D,U),u(z,j,U),W=!0},p(z,U){const te={};U&1&&(te.$$scope={dirty:U,ctx:z}),n.$set(te);const A={};U&1&&(A.$$scope={dirty:U,ctx:z}),q.$set(A)},i(z){W||(P(n.$$.fragment,z),P(q.$$.fragment,z),W=!0)},o(z){H(n.$$.fragment,z),H(q.$$.fragment,z),W=!1},d(z){z&&(a(e),a(s),a(t),a(r),a(i),a(D),a(j)),M(n),M(q)}}}function xu(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function _u(_){let e,o="💼 Cas d'usage entreprise",s,t,f,r="API REST",i,m,l,$,C="Les exceptions permettent de renvoyer les <b>bons codes HTTP</b> !",n;return m=new se({props:{$$slots:{default:[xu]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),f=g("p"),f.textContent=r,i=v(),T(m.$$.fragment),l=v(),$=g("p"),$.innerHTML=C,this.h()},l(p){e=h(p,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-rsugml"&&(e.textContent=o),s=d(p),t=h(p,"DIV",{class:!0});var L=de(t);f=h(L,"P",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-19l5ylf"&&(f.textContent=r),i=d(L),E(m.$$.fragment,L),l=d(L),$=h(L,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-5yr5p"&&($.innerHTML=C),L.forEach(a),this.h()},h(){w(f,"class","font-bold text-accent-200"),w($,"class","fragment mt-4"),w(t,"class","text-xl")},m(p,L){u(p,e,L),u(p,s,L),u(p,t,L),y(t,f),y(t,i),S(m,t,null),y(t,l),y(t,$),n=!0},p(p,L){const c={};L&1&&(c.$$scope={dirty:L,ctx:p}),m.$set(c)},i(p){n||(P(m.$$.fragment,p),n=!0)},o(p){H(m.$$.fragment,p),n=!1},d(p){p&&(a(e),a(s),a(t)),M(m)}}}function Cu(_){let e,o="Récapitulatif",s,t,f='<tr><td class="p-3"><code class="text-important">try/catch</code></td> <td class="p-3">Gérer les exceptions</td></tr> <tr><td class="p-3"><code class="text-important">throw</code></td> <td class="p-3">Lancer une exception</td></tr> <tr><td class="p-3"><code class="text-important">throws</code></td> <td class="p-3">Déclarer qu&#39;une méthode peut lancer</td></tr> <tr><td class="p-3"><code class="text-important">finally</code></td> <td class="p-3">Code exécuté dans tous les cas</td></tr> <tr><td class="p-3"><code class="text-important">try-with-resources</code></td> <td class="p-3">Gestion automatique des ressources</td></tr>',r,i,m="💼 Les exceptions sont essentielles pour la robustesse des applications en production !",l,$,C=`Résumé à connaître par cœur pour l'examen. throw vs throws est une question classique. En
			entreprise, la gestion des exceptions fait partie du quotidien du développeur. Un code sans
			gestion d'erreur n'est pas un code professionnel.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("table"),t.innerHTML=f,r=v(),i=g("p"),i.textContent=m,l=v(),$=g("aside"),$.textContent=C,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-ri7iuh"&&(e.textContent=o),s=d(n),t=h(n,"TABLE",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-hswrc0"&&(t.innerHTML=f),r=d(n),i=h(n,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-q1m0ht"&&(i.textContent=m),l=d(n),$=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-14qpnat"&&($.textContent=C),this.h()},h(){w(t,"class","text-xl mt-4"),w(i,"class","fragment mt-8 text-accent-200 font-bold"),w($,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),u(n,t,p),u(n,r,p),u(n,i,p),u(n,l,p),u(n,$,p)},p:O,d(n){n&&(a(e),a(s),a(t),a(r),a(i),a(l),a($))}}}function hu(_){let e,o="Les Exceptions",s,t,f,r,i,m,l,$,C,n,p,L,c,x,I,q,D,j,V,W,z,U,te,A,F,ce,pe,me,_e,oe,ve,fe,xe,G,ne,Q,ue;return t=new R({props:{data_background_color:"#1a1a2e",$$slots:{default:[Rr]},$$scope:{ctx:_}}}),r=new R({props:{$$slots:{default:[Nr]},$$scope:{ctx:_}}}),m=new R({props:{$$slots:{default:[Br]},$$scope:{ctx:_}}}),$=new R({props:{$$slots:{default:[Gr]},$$scope:{ctx:_}}}),n=new R({props:{$$slots:{default:[Kr]},$$scope:{ctx:_}}}),L=new R({props:{$$slots:{default:[Wr]},$$scope:{ctx:_}}}),x=new R({props:{$$slots:{default:[Zr]},$$scope:{ctx:_}}}),q=new R({props:{$$slots:{default:[yr]},$$scope:{ctx:_}}}),j=new R({props:{$$slots:{default:[su]},$$scope:{ctx:_}}}),W=new R({props:{$$slots:{default:[nu]},$$scope:{ctx:_}}}),U=new R({props:{$$slots:{default:[au]},$$scope:{ctx:_}}}),A=new R({props:{$$slots:{default:[uu]},$$scope:{ctx:_}}}),ce=new R({props:{$$slots:{default:[ou]},$$scope:{ctx:_}}}),me=new R({props:{$$slots:{default:[$u]},$$scope:{ctx:_}}}),oe=new R({props:{$$slots:{default:[pu]},$$scope:{ctx:_}}}),fe=new R({props:{$$slots:{default:[vu]},$$scope:{ctx:_}}}),G=new R({props:{$$slots:{default:[_u]},$$scope:{ctx:_}}}),Q=new R({props:{$$slots:{default:[Cu]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),T(r.$$.fragment),i=v(),T(m.$$.fragment),l=v(),T($.$$.fragment),C=v(),T(n.$$.fragment),p=v(),T(L.$$.fragment),c=v(),T(x.$$.fragment),I=v(),T(q.$$.fragment),D=v(),T(j.$$.fragment),V=v(),T(W.$$.fragment),z=v(),T(U.$$.fragment),te=v(),T(A.$$.fragment),F=v(),T(ce.$$.fragment),pe=v(),T(me.$$.fragment),_e=v(),T(oe.$$.fragment),ve=v(),T(fe.$$.fragment),xe=v(),T(G.$$.fragment),ne=v(),T(Q.$$.fragment)},l(K){e=h(K,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-19gjztu"&&(e.textContent=o),s=d(K),E(t.$$.fragment,K),f=d(K),E(r.$$.fragment,K),i=d(K),E(m.$$.fragment,K),l=d(K),E($.$$.fragment,K),C=d(K),E(n.$$.fragment,K),p=d(K),E(L.$$.fragment,K),c=d(K),E(x.$$.fragment,K),I=d(K),E(q.$$.fragment,K),D=d(K),E(j.$$.fragment,K),V=d(K),E(W.$$.fragment,K),z=d(K),E(U.$$.fragment,K),te=d(K),E(A.$$.fragment,K),F=d(K),E(ce.$$.fragment,K),pe=d(K),E(me.$$.fragment,K),_e=d(K),E(oe.$$.fragment,K),ve=d(K),E(fe.$$.fragment,K),xe=d(K),E(G.$$.fragment,K),ne=d(K),E(Q.$$.fragment,K)},m(K,re){u(K,e,re),u(K,s,re),S(t,K,re),u(K,f,re),S(r,K,re),u(K,i,re),S(m,K,re),u(K,l,re),S($,K,re),u(K,C,re),S(n,K,re),u(K,p,re),S(L,K,re),u(K,c,re),S(x,K,re),u(K,I,re),S(q,K,re),u(K,D,re),S(j,K,re),u(K,V,re),S(W,K,re),u(K,z,re),S(U,K,re),u(K,te,re),S(A,K,re),u(K,F,re),S(ce,K,re),u(K,pe,re),S(me,K,re),u(K,_e,re),S(oe,K,re),u(K,ve,re),S(fe,K,re),u(K,xe,re),S(G,K,re),u(K,ne,re),S(Q,K,re),ue=!0},p(K,re){const Ce={};re&1&&(Ce.$$scope={dirty:re,ctx:K}),t.$set(Ce);const X={};re&1&&(X.$$scope={dirty:re,ctx:K}),r.$set(X);const $e={};re&1&&($e.$$scope={dirty:re,ctx:K}),m.$set($e);const he={};re&1&&(he.$$scope={dirty:re,ctx:K}),$.$set(he);const J={};re&1&&(J.$$scope={dirty:re,ctx:K}),n.$set(J);const ie={};re&1&&(ie.$$scope={dirty:re,ctx:K}),L.$set(ie);const B={};re&1&&(B.$$scope={dirty:re,ctx:K}),x.$set(B);const ae={};re&1&&(ae.$$scope={dirty:re,ctx:K}),q.$set(ae);const Le={};re&1&&(Le.$$scope={dirty:re,ctx:K}),j.$set(Le);const we={};re&1&&(we.$$scope={dirty:re,ctx:K}),W.$set(we);const qe={};re&1&&(qe.$$scope={dirty:re,ctx:K}),U.$set(qe);const Me={};re&1&&(Me.$$scope={dirty:re,ctx:K}),A.$set(Me);const N={};re&1&&(N.$$scope={dirty:re,ctx:K}),ce.$set(N);const le={};re&1&&(le.$$scope={dirty:re,ctx:K}),me.$set(le);const Ie={};re&1&&(Ie.$$scope={dirty:re,ctx:K}),oe.$set(Ie);const Te={};re&1&&(Te.$$scope={dirty:re,ctx:K}),fe.$set(Te);const ze={};re&1&&(ze.$$scope={dirty:re,ctx:K}),G.$set(ze);const Ae={};re&1&&(Ae.$$scope={dirty:re,ctx:K}),Q.$set(Ae)},i(K){ue||(P(t.$$.fragment,K),P(r.$$.fragment,K),P(m.$$.fragment,K),P($.$$.fragment,K),P(n.$$.fragment,K),P(L.$$.fragment,K),P(x.$$.fragment,K),P(q.$$.fragment,K),P(j.$$.fragment,K),P(W.$$.fragment,K),P(U.$$.fragment,K),P(A.$$.fragment,K),P(ce.$$.fragment,K),P(me.$$.fragment,K),P(oe.$$.fragment,K),P(fe.$$.fragment,K),P(G.$$.fragment,K),P(Q.$$.fragment,K),ue=!0)},o(K){H(t.$$.fragment,K),H(r.$$.fragment,K),H(m.$$.fragment,K),H($.$$.fragment,K),H(n.$$.fragment,K),H(L.$$.fragment,K),H(x.$$.fragment,K),H(q.$$.fragment,K),H(j.$$.fragment,K),H(W.$$.fragment,K),H(U.$$.fragment,K),H(A.$$.fragment,K),H(ce.$$.fragment,K),H(me.$$.fragment,K),H(oe.$$.fragment,K),H(fe.$$.fragment,K),H(G.$$.fragment,K),H(Q.$$.fragment,K),ue=!1},d(K){K&&(a(e),a(s),a(f),a(i),a(l),a(C),a(p),a(c),a(I),a(D),a(V),a(z),a(te),a(F),a(pe),a(_e),a(ve),a(xe),a(ne)),M(t,K),M(r,K),M(m,K),M($,K),M(n,K),M(L,K),M(x,K),M(q,K),M(j,K),M(W,K),M(U,K),M(A,K),M(ce,K),M(me,K),M(oe,K),M(fe,K),M(G,K),M(Q,K)}}}function gu(_){let e,o;return e=new R({props:{$$slots:{default:[hu]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){E(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const f={};t&1&&(f.$$scope={dirty:t,ctx:s}),e.$set(f)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){H(e.$$.fragment,s),o=!1},d(s){M(e,s)}}}class bu extends Se{constructor(e){super(),Ee(this,e,null,gu,Pe,{})}}function Lu(_){let e,o="Rappels",s,t,f="Un mois plus tard...",r,i,m=`On reprend après un mois de pause. L'objectif de ce bloc est de vérifier rapidement ce qui est acquis\r
			avant d'avancer. On ne va pas re-expliquer, juste tester et corriger si besoin.`;return{c(){e=g("h2"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"H2",{"data-svelte-h":!0}),b(e)!=="svelte-dv36h9"&&(e.textContent=o),s=d(l),t=h(l,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1dg8f9n"&&(t.textContent=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-zlrztb"&&(i.textContent=m),this.h()},h(){w(t,"class","text-2xl text-gray-400"),w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function wu(_){let e,o="Héritage, Composition ou Interface ?",s,t,f='<tbody><tr class="fragment"><td class="p-3">Un <code>Etudiant</code> <b>est une</b> <code>Personne</code></td> <td class="p-3 text-green-400">Héritage</td></tr> <tr class="fragment"><td class="p-3">Un <code>Ordinateur</code> <b>a un</b> <code>Processeur</code></td> <td class="p-3 text-blue-400">Composition</td></tr> <tr class="fragment"><td class="p-3">Un <code>Robot</code> <b>peut</b> <code>Nager</code></td> <td class="p-3 text-purple-400">Interface</td></tr> <tr class="fragment"><td class="p-3">Un <code>Livre</code> <b>a des</b> <code>Chapitres</code></td> <td class="p-3 text-blue-400">Composition</td></tr> <tr class="fragment"><td class="p-3">Un <code>CompteCourant</code> <b>est un</b> <code>CompteBancaire</code></td> <td class="p-3 text-green-400">Héritage</td></tr></tbody>',r,i,m="Faites voter les étudiants à main levée avant de révéler. C'est un bon indicateur de ce qui a été retenu.";return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("table"),t.innerHTML=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-owsg2x"&&(e.textContent=o),s=d(l),t=h(l,"TABLE",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1wazcyz"&&(t.innerHTML=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-1kk7v4q"&&(i.textContent=m),this.h()},h(){w(t,"class","text-xl mt-6"),w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function qu(_){let e=`
abstract class Forme {
    abstract double surface();
}

Forme f = new Forme();
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Mu(_){let e=`
class Canard extends Animal, Oiseau {
}
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Hu(_){let e,o="Ce code compile-t-il ?",s,t,f,r,i,m,l="Non : on ne peut pas instancier une classe abstraite",$,C,n,p,L,c="Non : héritage multiple interdit en Java",x,I,q=`Ce sont les deux pièges les plus classiques. Insister sur le fait que les interfaces sont\r
			la solution au second cas.`,D;return r=new se({props:{$$slots:{default:[qu]},$$scope:{ctx:_}}}),n=new se({props:{$$slots:{default:[Mu]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),f=g("div"),T(r.$$.fragment),i=v(),m=g("p"),m.textContent=l,$=v(),C=g("div"),T(n.$$.fragment),p=v(),L=g("p"),L.textContent=c,x=v(),I=g("aside"),I.textContent=q,this.h()},l(j){e=h(j,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-x2ptrw"&&(e.textContent=o),s=d(j),t=h(j,"DIV",{class:!0});var V=de(t);f=h(V,"DIV",{});var W=de(f);E(r.$$.fragment,W),i=d(W),m=h(W,"P",{class:!0,"data-svelte-h":!0}),b(m)!=="svelte-1h190km"&&(m.textContent=l),W.forEach(a),$=d(V),C=h(V,"DIV",{});var z=de(C);E(n.$$.fragment,z),p=d(z),L=h(z,"P",{class:!0,"data-svelte-h":!0}),b(L)!=="svelte-r8lrrf"&&(L.textContent=c),z.forEach(a),V.forEach(a),x=d(j),I=h(j,"ASIDE",{class:!0,"data-svelte-h":!0}),b(I)!=="svelte-1os8pen"&&(I.textContent=q),this.h()},h(){w(m,"class","fragment text-red-400 mt-2"),w(L,"class","fragment text-red-400 mt-2"),w(t,"class","grid grid-cols-2 gap-6"),w(I,"class","notes")},m(j,V){u(j,e,V),u(j,s,V),u(j,t,V),y(t,f),S(r,f,null),y(f,i),y(f,m),y(t,$),y(t,C),S(n,C,null),y(C,p),y(C,L),u(j,x,V),u(j,I,V),D=!0},p(j,V){const W={};V&1&&(W.$$scope={dirty:V,ctx:j}),r.$set(W);const z={};V&1&&(z.$$scope={dirty:V,ctx:j}),n.$set(z)},i(j){D||(P(r.$$.fragment,j),P(n.$$.fragment,j),D=!0)},o(j){H(r.$$.fragment,j),H(n.$$.fragment,j),D=!1},d(j){j&&(a(e),a(s),a(t),a(x),a(I)),M(r),M(n)}}}function Pu(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Su(_){let e,o="Que produit ce code ?",s,t,f,r,i="Affiche : <code>Miaou</code>",m,l,$=`On a vu ça à la fin de la séance 1 dans le chapitre Composition. C'est un teaser du polymorphisme.\r
			Si les étudiants répondent bien, on peut enchaîner directement.`,C;return t=new se({props:{$$slots:{default:[Pu]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("p"),r.innerHTML=i,m=v(),l=g("aside"),l.textContent=$,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-fa08gy"&&(e.textContent=o),s=d(n),E(t.$$.fragment,n),f=d(n),r=h(n,"P",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-scosmt"&&(r.innerHTML=i),m=d(n),l=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1eemjt1"&&(l.textContent=$),this.h()},h(){w(r,"class","fragment text-accent-200 text-3xl mt-4"),w(l,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),S(t,n,p),u(n,f,p),u(n,r,p),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),t.$set(L)},i(n){C||(P(t.$$.fragment,n),C=!0)},o(n){H(t.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(f),a(r),a(m),a(l)),M(t,n)}}}function Eu(_){let e,o="Aujourd'hui",s,t,f="<li>Polymorphisme</li> <li>Casting et conversions de types</li> <li>Records</li> <li>Exceptions</li> <li>Principes SOLID</li> <li>Refactoring en services</li> <li>Membres statiques</li>",r,i,m=`Programme chargé. On va construire sur les acquis de la séance 1.\r
			Le fil rouge : écrire du code qui est non seulement correct, mais bien structuré.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("ol"),t.innerHTML=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-o7wgo3"&&(e.textContent=o),s=d(l),t=h(l,"OL",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1kjng7v"&&(t.innerHTML=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-cqmn7l"&&(i.textContent=m),this.h()},h(){w(t,"class","text-2xl"),w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function Tu(_){let e,o,s,t,f,r,i,m,l,$;return e=new R({props:{data_background_gradient:"linear-gradient(rgb(40 59 149), rgb(129 23 195 / 41%))",$$slots:{default:[Lu]},$$scope:{ctx:_}}}),s=new R({props:{$$slots:{default:[wu]},$$scope:{ctx:_}}}),f=new R({props:{$$slots:{default:[Hu]},$$scope:{ctx:_}}}),i=new R({props:{$$slots:{default:[Su]},$$scope:{ctx:_}}}),l=new R({props:{$$slots:{default:[Eu]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment),o=v(),T(s.$$.fragment),t=v(),T(f.$$.fragment),r=v(),T(i.$$.fragment),m=v(),T(l.$$.fragment)},l(C){E(e.$$.fragment,C),o=d(C),E(s.$$.fragment,C),t=d(C),E(f.$$.fragment,C),r=d(C),E(i.$$.fragment,C),m=d(C),E(l.$$.fragment,C)},m(C,n){S(e,C,n),u(C,o,n),S(s,C,n),u(C,t,n),S(f,C,n),u(C,r,n),S(i,C,n),u(C,m,n),S(l,C,n),$=!0},p(C,n){const p={};n&1&&(p.$$scope={dirty:n,ctx:C}),e.$set(p);const L={};n&1&&(L.$$scope={dirty:n,ctx:C}),s.$set(L);const c={};n&1&&(c.$$scope={dirty:n,ctx:C}),f.$set(c);const x={};n&1&&(x.$$scope={dirty:n,ctx:C}),i.$set(x);const I={};n&1&&(I.$$scope={dirty:n,ctx:C}),l.$set(I)},i(C){$||(P(e.$$.fragment,C),P(s.$$.fragment,C),P(f.$$.fragment,C),P(i.$$.fragment,C),P(l.$$.fragment,C),$=!0)},o(C){H(e.$$.fragment,C),H(s.$$.fragment,C),H(f.$$.fragment,C),H(i.$$.fragment,C),H(l.$$.fragment,C),$=!1},d(C){C&&(a(o),a(t),a(r),a(m)),M(e,C),M(s,C),M(f,C),M(i,C),M(l,C)}}}function Au(_){let e,o;return e=new R({props:{$$slots:{default:[Tu]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){E(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const f={};t&1&&(f.$$scope={dirty:t,ctx:s}),e.$set(f)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){H(e.$$.fragment,s),o=!1},d(s){M(e,s)}}}class Iu extends Se{constructor(e){super(),Ee(this,e,null,Au,Pe,{})}}function ju(_){let e=`
List<int> nombres = new ArrayList<>();  // Erreur de compilation !
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Du(_){let e,o="Le problème",s,t,f="<code>int</code>, <code>double</code>, <code>boolean</code> ne sont pas des objets.",r,i,m,l,$='Les collections et les génériques ne fonctionnent qu&#39;avec des <span class="text-important">objets</span>.',C,n,p='Java fournit des <span class="text-important">classes enveloppes</span> (wrapper classes) pour chaque type primitif.',L,c,x=`Les types primitifs existent pour des raisons de performance : un int prend 4 octets,\r
			un Integer en prend 16. Mais les frameworks modernes travaillent avec des objets.\r
			D'où le besoin de "wrapper" les primitifs.`,I;return i=new se({props:{$$slots:{default:[ju]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),T(i.$$.fragment),m=v(),l=g("p"),l.innerHTML=$,C=v(),n=g("p"),n.innerHTML=p,L=v(),c=g("aside"),c.textContent=x,this.h()},l(q){e=h(q,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-133t5n2"&&(e.textContent=o),s=d(q),t=h(q,"P",{"data-svelte-h":!0}),b(t)!=="svelte-ygi40n"&&(t.innerHTML=f),r=d(q),E(i.$$.fragment,q),m=d(q),l=h(q,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-j2rpzp"&&(l.innerHTML=$),C=d(q),n=h(q,"P",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-dm920j"&&(n.innerHTML=p),L=d(q),c=h(q,"ASIDE",{class:!0,"data-svelte-h":!0}),b(c)!=="svelte-16xy75f"&&(c.textContent=x),this.h()},h(){w(l,"class","fragment mt-4"),w(n,"class","fragment"),w(c,"class","notes")},m(q,D){u(q,e,D),u(q,s,D),u(q,t,D),u(q,r,D),S(i,q,D),u(q,m,D),u(q,l,D),u(q,C,D),u(q,n,D),u(q,L,D),u(q,c,D),I=!0},p(q,D){const j={};D&1&&(j.$$scope={dirty:D,ctx:q}),i.$set(j)},i(q){I||(P(i.$$.fragment,q),I=!0)},o(q){H(i.$$.fragment,q),I=!1},d(q){q&&(a(e),a(s),a(t),a(r),a(m),a(l),a(C),a(n),a(L),a(c)),M(i,q)}}}function ku(_){let e,o="Correspondances",s,t,f='<thead><tr><th class="p-3">Primitif</th> <th class="p-3">Wrapper</th></tr></thead> <tbody><tr><td class="p-3"><code>int</code></td><td class="p-3"><code>Integer</code></td></tr> <tr><td class="p-3"><code>double</code></td><td class="p-3"><code>Double</code></td></tr> <tr><td class="p-3"><code>boolean</code></td><td class="p-3"><code>Boolean</code></td></tr> <tr><td class="p-3"><code>char</code></td><td class="p-3"><code>Character</code></td></tr> <tr><td class="p-3"><code>long</code></td><td class="p-3"><code>Long</code></td></tr> <tr><td class="p-3"><code>float</code></td><td class="p-3"><code>Float</code></td></tr></tbody>',r,i,m=`Les noms sont intuitifs sauf Integer et Character. Les Wrappers sont dans le package java.lang,\r
			pas besoin d'import.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("table"),t.innerHTML=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-12squc3"&&(e.textContent=o),s=d(l),t=h(l,"TABLE",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1xza75b"&&(t.innerHTML=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-i7wbx0"&&(i.textContent=m),this.h()},h(){w(t,"class","text-xl mt-4"),w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function Ou(_){let e=`
Integer a = 42;               // int → Integer (autoboxing)
Double d = 3.14;              // double → Double (autoboxing)

List<Integer> nombres = new ArrayList<>();
nombres.add(10);              // int 10 → Integer.valueOf(10)
nombres.add(20);
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function zu(_){let e,o="Autoboxing",s,t,f='Conversion <span class="text-important">automatique</span> d&#39;un primitif vers son wrapper.',r,i,m,l,$="Java insère l&#39;appel à <code>Integer.valueOf()</code> pour vous.",C,n,p=`Avant Java 5, il fallait écrire Integer.valueOf(42) explicitement partout.\r
			L'autoboxing a énormément simplifié le code. Mais il faut savoir que ça reste\r
			une conversion avec un coût.`,L;return i=new se({props:{$$slots:{default:[Ou]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),T(i.$$.fragment),m=v(),l=g("p"),l.innerHTML=$,C=v(),n=g("aside"),n.textContent=p,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1tnm3dk"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-s0556i"&&(t.innerHTML=f),r=d(c),E(i.$$.fragment,c),m=d(c),l=h(c,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-p8ncd7"&&(l.innerHTML=$),C=d(c),n=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1ksd67"&&(n.textContent=p),this.h()},h(){w(l,"class","fragment mt-4"),w(n,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),S(i,c,x),u(c,m,x),u(c,l,x),u(c,C,x),u(c,n,x),L=!0},p(c,x){const I={};x&1&&(I.$$scope={dirty:x,ctx:c}),i.$set(I)},i(c){L||(P(i.$$.fragment,c),L=!0)},o(c){H(i.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(r),a(m),a(l),a(C),a(n)),M(i,c)}}}function Vu(_){let e=`
Integer wrapped = 42;
int value = wrapped;           // Integer → int (unboxing)

List<Integer> nombres = List.of(10, 20, 30);
int premier = nombres.get(0);  // Integer → int (unboxing)
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Ru(_){let e,o="Unboxing",s,t,f='Conversion <span class="text-important">automatique</span> d&#39;un wrapper vers son primitif.',r,i,m,l,$="Java insère l&#39;appel à <code>intValue()</code> pour vous.",C,n,p=`L'unboxing est transparent mais pas gratuit : c'est un appel de méthode à chaque conversion.\r
			Dans une boucle de millions d'itérations, ça peut peser.`,L;return i=new se({props:{$$slots:{default:[Vu]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),T(i.$$.fragment),m=v(),l=g("p"),l.innerHTML=$,C=v(),n=g("aside"),n.textContent=p,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-43xif0"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1dwwjxa"&&(t.innerHTML=f),r=d(c),E(i.$$.fragment,c),m=d(c),l=h(c,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-124xcnt"&&(l.innerHTML=$),C=d(c),n=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1nylxne"&&(n.textContent=p),this.h()},h(){w(l,"class","fragment mt-4"),w(n,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),S(i,c,x),u(c,m,x),u(c,l,x),u(c,C,x),u(c,n,x),L=!0},p(c,x){const I={};x&1&&(I.$$scope={dirty:x,ctx:c}),i.$set(I)},i(c){L||(P(i.$$.fragment,c),L=!0)},o(c){H(i.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(r),a(m),a(l),a(C),a(n)),M(i,c)}}}function Uu(_){let e=`
Integer a = 127;
Integer b = 127;
System.out.println(a == b);    // true

Integer c = 128;
Integer d = 128;
System.out.println(c == d);    // false !
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Nu(_){let e,o="Le piège du cache Integer",s,t,f,r,i=`Java met en cache les <code>Integer</code> de <b>-128 à 127</b>.
			Au-delà, ce sont des objets différents.`,m,l,$="Toujours utiliser <code>.equals()</code> pour comparer des wrappers.",C,n,p=`C'est un piège classique en entretien d'embauche. == compare les références, pas les valeurs.\r
			Pour les Integer entre -128 et 127, valueOf() retourne le même objet (cache).\r
			Au-delà, c'est un new à chaque fois. Conclusion : toujours .equals() pour les objets.`,L;return t=new se({props:{$$slots:{default:[Uu]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("p"),r.innerHTML=i,m=v(),l=g("p"),l.innerHTML=$,C=v(),n=g("aside"),n.textContent=p,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-vx8qj5"&&(e.textContent=o),s=d(c),E(t.$$.fragment,c),f=d(c),r=h(c,"P",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-5yn9wi"&&(r.innerHTML=i),m=d(c),l=h(c,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1hw5k0h"&&(l.innerHTML=$),C=d(c),n=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-mxtxe3"&&(n.textContent=p),this.h()},h(){w(r,"class","fragment mt-4"),w(l,"class","fragment text-accent-200"),w(n,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),S(t,c,x),u(c,f,x),u(c,r,x),u(c,m,x),u(c,l,x),u(c,C,x),u(c,n,x),L=!0},p(c,x){const I={};x&1&&(I.$$scope={dirty:x,ctx:c}),t.$set(I)},i(c){L||(P(t.$$.fragment,c),L=!0)},o(c){H(t.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(f),a(r),a(m),a(l),a(C),a(n)),M(t,c)}}}function Ju(_){let e=`
Integer valeur = null;
int n = valeur;  // NullPointerException à l'unboxing !
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Bu(_){let e=`
Integer valeur = obtenirValeur();  // peut retourner null

if (valeur != null) {
    int n = valeur;  // unboxing sûr
}
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Fu(_){let e,o="Le piège du null",s,t,f,r,i,m="Protection :",l,$,C,n,p=`Un Integer peut être null, un int ne peut pas. L'unboxing d'un null lance un NPE.\r
			C'est un piège fréquent quand on récupère des données d'une base ou d'une API.`,L;return t=new se({props:{$$slots:{default:[Ju]},$$scope:{ctx:_}}}),$=new se({props:{$$slots:{default:[Bu]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("div"),i=g("p"),i.textContent=m,l=v(),T($.$$.fragment),C=v(),n=g("aside"),n.textContent=p,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-ao39te"&&(e.textContent=o),s=d(c),E(t.$$.fragment,c),f=d(c),r=h(c,"DIV",{class:!0});var x=de(r);i=h(x,"P",{"data-svelte-h":!0}),b(i)!=="svelte-1a74dtb"&&(i.textContent=m),l=d(x),E($.$$.fragment,x),x.forEach(a),C=d(c),n=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1navkz4"&&(n.textContent=p),this.h()},h(){w(r,"class","fragment mt-6"),w(n,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),S(t,c,x),u(c,f,x),u(c,r,x),y(r,i),y(r,l),S($,r,null),u(c,C,x),u(c,n,x),L=!0},p(c,x){const I={};x&1&&(I.$$scope={dirty:x,ctx:c}),t.$set(I);const q={};x&1&&(q.$$scope={dirty:x,ctx:c}),$.$set(q)},i(c){L||(P(t.$$.fragment,c),P($.$$.fragment,c),L=!0)},o(c){H(t.$$.fragment,c),H($.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(f),a(r),a(C),a(n)),M(t,c),M($)}}}function Gu(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Qu(_){let e,o="Performance",s,t,f,r,i="Utilisez les <b>primitifs</b> dans les boucles intensives, les <b>wrappers</b> dans les collections et API.",m,l,$=`La différence de performance peut être d'un facteur 5 à 10 dans les boucles.\r
			Règle : primitifs pour le calcul, wrappers quand on est obligé (collections, génériques).`,C;return t=new se({props:{$$slots:{default:[Gu]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("p"),r.innerHTML=i,m=v(),l=g("aside"),l.textContent=$,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-19y5698"&&(e.textContent=o),s=d(n),E(t.$$.fragment,n),f=d(n),r=h(n,"P",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-17o3k6r"&&(r.innerHTML=i),m=d(n),l=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-bxt9ex"&&(l.textContent=$),this.h()},h(){w(r,"class","fragment mt-4"),w(l,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),S(t,n,p),u(n,f,p),u(n,r,p),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),t.$set(L)},i(n){C||(P(t.$$.fragment,n),C=!0)},o(n){H(t.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(f),a(r),a(m),a(l)),M(t,n)}}}function Ku(_){let e,o="Récapitulatif",s,t,f='<tr><td class="p-3"><span class="text-important">Autoboxing</span></td> <td class="p-3"><code>int</code> → <code>Integer</code> (automatique)</td></tr> <tr><td class="p-3"><span class="text-important">Unboxing</span></td> <td class="p-3"><code>Integer</code> → <code>int</code> (automatique)</td></tr> <tr><td class="p-3"><span class="text-important">==</span></td> <td class="p-3">Compare les références (piège avec les wrappers !)</td></tr> <tr><td class="p-3"><span class="text-important">.equals()</span></td> <td class="p-3">Compare les valeurs (toujours l&#39;utiliser)</td></tr>',r,i,m="L'autoboxing est pratique mais pas magique. Connaître ses limites évite des bugs subtils.";return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("table"),t.innerHTML=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-ri7iuh"&&(e.textContent=o),s=d(l),t=h(l,"TABLE",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1q1z2gl"&&(t.innerHTML=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-104fxuw"&&(i.textContent=m),this.h()},h(){w(t,"class","text-xl"),w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function Xu(_){let e,o="Types primitifs et objets",s,t,f,r,i,m,l,$,C,n,p,L,c,x,I,q,D;return t=new R({props:{$$slots:{default:[Du]},$$scope:{ctx:_}}}),r=new R({props:{$$slots:{default:[ku]},$$scope:{ctx:_}}}),m=new R({props:{$$slots:{default:[zu]},$$scope:{ctx:_}}}),$=new R({props:{$$slots:{default:[Ru]},$$scope:{ctx:_}}}),n=new R({props:{$$slots:{default:[Nu]},$$scope:{ctx:_}}}),L=new R({props:{$$slots:{default:[Fu]},$$scope:{ctx:_}}}),x=new R({props:{$$slots:{default:[Qu]},$$scope:{ctx:_}}}),q=new R({props:{$$slots:{default:[Ku]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),T(r.$$.fragment),i=v(),T(m.$$.fragment),l=v(),T($.$$.fragment),C=v(),T(n.$$.fragment),p=v(),T(L.$$.fragment),c=v(),T(x.$$.fragment),I=v(),T(q.$$.fragment)},l(j){e=h(j,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-a5oucq"&&(e.textContent=o),s=d(j),E(t.$$.fragment,j),f=d(j),E(r.$$.fragment,j),i=d(j),E(m.$$.fragment,j),l=d(j),E($.$$.fragment,j),C=d(j),E(n.$$.fragment,j),p=d(j),E(L.$$.fragment,j),c=d(j),E(x.$$.fragment,j),I=d(j),E(q.$$.fragment,j)},m(j,V){u(j,e,V),u(j,s,V),S(t,j,V),u(j,f,V),S(r,j,V),u(j,i,V),S(m,j,V),u(j,l,V),S($,j,V),u(j,C,V),S(n,j,V),u(j,p,V),S(L,j,V),u(j,c,V),S(x,j,V),u(j,I,V),S(q,j,V),D=!0},p(j,V){const W={};V&1&&(W.$$scope={dirty:V,ctx:j}),t.$set(W);const z={};V&1&&(z.$$scope={dirty:V,ctx:j}),r.$set(z);const U={};V&1&&(U.$$scope={dirty:V,ctx:j}),m.$set(U);const te={};V&1&&(te.$$scope={dirty:V,ctx:j}),$.$set(te);const A={};V&1&&(A.$$scope={dirty:V,ctx:j}),n.$set(A);const F={};V&1&&(F.$$scope={dirty:V,ctx:j}),L.$set(F);const ce={};V&1&&(ce.$$scope={dirty:V,ctx:j}),x.$set(ce);const pe={};V&1&&(pe.$$scope={dirty:V,ctx:j}),q.$set(pe)},i(j){D||(P(t.$$.fragment,j),P(r.$$.fragment,j),P(m.$$.fragment,j),P($.$$.fragment,j),P(n.$$.fragment,j),P(L.$$.fragment,j),P(x.$$.fragment,j),P(q.$$.fragment,j),D=!0)},o(j){H(t.$$.fragment,j),H(r.$$.fragment,j),H(m.$$.fragment,j),H($.$$.fragment,j),H(n.$$.fragment,j),H(L.$$.fragment,j),H(x.$$.fragment,j),H(q.$$.fragment,j),D=!1},d(j){j&&(a(e),a(s),a(f),a(i),a(l),a(C),a(p),a(c),a(I)),M(t,j),M(r,j),M(m,j),M($,j),M(n,j),M(L,j),M(x,j),M(q,j)}}}function Wu(_){let e,o;return e=new R({props:{$$slots:{default:[Xu]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){E(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const f={};t&1&&(f.$$scope={dirty:t,ctx:s}),e.$set(f)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){H(e.$$.fragment,s),o=!1},d(s){M(e,s)}}}class Yu extends Se{constructor(e){super(),Ee(this,e,null,Wu,Pe,{})}}function Zu(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function yu(_){let e,o="Le problème de la verbosité",s,t,f="Pour stocker 2 données, combien de lignes faut-il ?",r,i,m,l,$="25 lignes pour 2 attributs...",C,n,p=`On a vu la verbosité de Java en séance 1 avec l'encapsulation. C'est un problème réel :\r
			80% du code est du boilerplate. Les IDE le génèrent, mais il faut le maintenir.\r
			Java 14 introduit une solution élégante.`,L;return i=new se({props:{$$slots:{default:[Zu]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),T(i.$$.fragment),m=v(),l=g("p"),l.textContent=$,C=v(),n=g("aside"),n.textContent=p,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-i8vwdr"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-14yppc4"&&(t.textContent=f),r=d(c),E(i.$$.fragment,c),m=d(c),l=h(c,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-i9i37g"&&(l.textContent=$),C=d(c),n=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-npcgop"&&(n.textContent=p),this.h()},h(){w(l,"class","fragment text-red-400 mt-2"),w(n,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),S(i,c,x),u(c,m,x),u(c,l,x),u(c,C,x),u(c,n,x),L=!0},p(c,x){const I={};x&1&&(I.$$scope={dirty:x,ctx:c}),i.$set(I)},i(c){L||(P(i.$$.fragment,c),L=!0)},o(c){H(i.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(r),a(m),a(l),a(C),a(n)),M(i,c)}}}function eo(_){let e=`
public record Point(int x, int y) {}
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function to(_){let e,o="La solution : record",s,t,f,r,i="Une seule ligne.",m,l,$='<p>Le compilateur génère automatiquement :</p> <ul class="text-xl"><li>Le constructeur <code>Point(int x, int y)</code></li> <li>Les accesseurs <code>x()</code> et <code>y()</code></li> <li><code>equals()</code>, <code>hashCode()</code>, <code>toString()</code></li></ul>',C,n,p=`Introduit en Java 14 (preview), stable en Java 16. Attention : les accesseurs s'appellent\r
			x() et y(), pas getX() et getY(). C'est une convention différente des JavaBeans.`,L;return t=new se({props:{$$slots:{default:[eo]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("p"),r.textContent=i,m=v(),l=g("div"),l.innerHTML=$,C=v(),n=g("aside"),n.textContent=p,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-xprrf5"&&(e.textContent=o),s=d(c),E(t.$$.fragment,c),f=d(c),r=h(c,"P",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-ojg6en"&&(r.textContent=i),m=d(c),l=h(c,"DIV",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-3xhv8g"&&(l.innerHTML=$),C=d(c),n=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1dgobkw"&&(n.textContent=p),this.h()},h(){w(r,"class","fragment mt-6 text-3xl"),w(l,"class","fragment mt-6"),w(n,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),S(t,c,x),u(c,f,x),u(c,r,x),u(c,m,x),u(c,l,x),u(c,C,x),u(c,n,x),L=!0},p(c,x){const I={};x&1&&(I.$$scope={dirty:x,ctx:c}),t.$set(I)},i(c){L||(P(t.$$.fragment,c),L=!0)},o(c){H(t.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(f),a(r),a(m),a(l),a(C),a(n)),M(t,c)}}}function so(_){let e=`
record Point(int x, int y) {}

Point p = new Point(3, 4);

System.out.println(p.x());        // 3
System.out.println(p.y());        // 4
System.out.println(p);            // Point[x=3, y=4]

Point p2 = new Point(3, 4);
System.out.println(p.equals(p2)); // true
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function lo(_){let e,o="Utilisation",s,t,f,r,i=`Notez que equals compare les valeurs automatiquement. C'est exactement ce qu'on veut\r
			pour des objets "données". Plus besoin de générer manuellement.`,m;return t=new se({props:{$$slots:{default:[so]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("aside"),r.textContent=i,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-oc5s5"&&(e.textContent=o),s=d(l),E(t.$$.fragment,l),f=d(l),r=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-sfmq45"&&(r.textContent=i),this.h()},h(){w(r,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),S(t,l,$),u(l,f,$),u(l,r,$),m=!0},p(l,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:l}),t.$set(C)},i(l){m||(P(t.$$.fragment,l),m=!0)},o(l){H(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a(f),a(r)),M(t,l)}}}function no(_){let e=`
record Point(int x, int y) {}

Point p = new Point(3, 4);
// p.x = 10;  // Erreur de compilation : pas de setter !

// Pour "modifier", on crée un nouvel objet
Point p2 = new Point(10, p.y());
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function io(_){let e,o="Records et immutabilité",s,t,f='Les composants d&#39;un record sont <span class="text-important">final</span> par définition.',r,i,m,l,$="Un record est <b>immuable</b> : une fois créé, il ne change plus.",C,n,p=`L'immutabilité est une bonne pratique : pas d'effets de bord, pas de bugs liés à des\r
			modifications inattendues. C'est aussi thread-safe par construction.`,L;return i=new se({props:{$$slots:{default:[no]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),T(i.$$.fragment),m=v(),l=g("p"),l.innerHTML=$,C=v(),n=g("aside"),n.textContent=p,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1kmsc4r"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-12jhovc"&&(t.innerHTML=f),r=d(c),E(i.$$.fragment,c),m=d(c),l=h(c,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-twq57f"&&(l.innerHTML=$),C=d(c),n=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1kc0nz5"&&(n.textContent=p),this.h()},h(){w(l,"class","fragment mt-4"),w(n,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),S(i,c,x),u(c,m,x),u(c,l,x),u(c,C,x),u(c,n,x),L=!0},p(c,x){const I={};x&1&&(I.$$scope={dirty:x,ctx:c}),i.$set(I)},i(c){L||(P(i.$$.fragment,c),L=!0)},o(c){H(i.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(r),a(m),a(l),a(C),a(n)),M(i,c)}}}function ao(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function ro(_){let e,o="Personnaliser un record",s,t,f="On peut ajouter de la validation dans le constructeur :",r,i,m,l,$="On peut aussi ajouter des méthodes, mais pas d'attributs d'instance supplémentaires.",C,n,p=`Le "compact constructor" n'a pas besoin de répéter les affectations this.valeur = valeur.\r
			Java le fait automatiquement après le bloc. On ne peut que valider ou transformer.`,L;return i=new se({props:{$$slots:{default:[ao]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),T(i.$$.fragment),m=v(),l=g("p"),l.textContent=$,C=v(),n=g("aside"),n.textContent=p,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-d9lxf7"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-4iqf9c"&&(t.textContent=f),r=d(c),E(i.$$.fragment,c),m=d(c),l=h(c,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-16l9l5j"&&(l.textContent=$),C=d(c),n=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-np8akg"&&(n.textContent=p),this.h()},h(){w(l,"class","fragment mt-4"),w(n,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),S(i,c,x),u(c,m,x),u(c,l,x),u(c,C,x),u(c,n,x),L=!0},p(c,x){const I={};x&1&&(I.$$scope={dirty:x,ctx:c}),i.$set(I)},i(c){L||(P(i.$$.fragment,c),L=!0)},o(c){H(i.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(r),a(m),a(l),a(C),a(n)),M(i,c)}}}function uo(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function oo(_){let e,o="Records et interfaces",s,t,f,r,i='Un record peut implémenter des interfaces, mais <span class="text-important">ne peut pas hériter</span> d&#39;une classe.',m,l,$=`Les records étendent implicitement java.lang.Record. Comme Java n'a pas d'héritage multiple,\r
			ils ne peuvent pas extends autre chose. Mais implements fonctionne normalement.\r
			Utile pour les DTOs dans les API REST.`,C;return t=new se({props:{$$slots:{default:[uo]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("p"),r.innerHTML=i,m=v(),l=g("aside"),l.textContent=$,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-moipzl"&&(e.textContent=o),s=d(n),E(t.$$.fragment,n),f=d(n),r=h(n,"P",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-x7joek"&&(r.innerHTML=i),m=d(n),l=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-q3aokm"&&(l.textContent=$),this.h()},h(){w(r,"class","fragment mt-2"),w(l,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),S(t,n,p),u(n,f,p),u(n,r,p),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),t.$set(L)},i(n){C||(P(t.$$.fragment,n),C=!0)},o(n){H(t.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(f),a(r),a(m),a(l)),M(t,n)}}}function co(_){let e,o="Quand utiliser un record ?",s,t,f='<div class="p-4 bg-accent-950 rounded-lg"><h4 class="text-green-400">Record</h4> <ul class="text-xl mt-2"><li>Données immuables</li> <li>DTOs, valeurs de retour</li> <li>Clés de Map</li> <li>Paramètres groupés</li></ul></div> <div class="p-4 bg-accent-950 rounded-lg"><h4 class="text-blue-400">Classe</h4> <ul class="text-xl mt-2"><li>Données modifiables</li> <li>Héritage nécessaire</li> <li>Logique métier complexe</li> <li>Entités JPA/Hibernate</li></ul></div>',r,i,m=`En pratique, les records sont parfaits pour les objets "valeur" : coordonnées, montants,\r
			résultats de requêtes. Pour les entités métier avec état mutable et comportement riche,\r
			gardez les classes classiques.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1p2mhab"&&(e.textContent=o),s=d(l),t=h(l,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-byvz3y"&&(t.innerHTML=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-yqh0sz"&&(i.textContent=m),this.h()},h(){w(t,"class","grid grid-cols-2 gap-8 mt-6"),w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function $o(_){let e,o="Les Records",s,t,f,r,i,m,l,$,C,n,p,L,c,x,I;return t=new R({props:{$$slots:{default:[yu]},$$scope:{ctx:_}}}),r=new R({props:{$$slots:{default:[to]},$$scope:{ctx:_}}}),m=new R({props:{$$slots:{default:[lo]},$$scope:{ctx:_}}}),$=new R({props:{$$slots:{default:[io]},$$scope:{ctx:_}}}),n=new R({props:{$$slots:{default:[ro]},$$scope:{ctx:_}}}),L=new R({props:{$$slots:{default:[oo]},$$scope:{ctx:_}}}),x=new R({props:{$$slots:{default:[co]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),T(r.$$.fragment),i=v(),T(m.$$.fragment),l=v(),T($.$$.fragment),C=v(),T(n.$$.fragment),p=v(),T(L.$$.fragment),c=v(),T(x.$$.fragment)},l(q){e=h(q,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1v8rvp4"&&(e.textContent=o),s=d(q),E(t.$$.fragment,q),f=d(q),E(r.$$.fragment,q),i=d(q),E(m.$$.fragment,q),l=d(q),E($.$$.fragment,q),C=d(q),E(n.$$.fragment,q),p=d(q),E(L.$$.fragment,q),c=d(q),E(x.$$.fragment,q)},m(q,D){u(q,e,D),u(q,s,D),S(t,q,D),u(q,f,D),S(r,q,D),u(q,i,D),S(m,q,D),u(q,l,D),S($,q,D),u(q,C,D),S(n,q,D),u(q,p,D),S(L,q,D),u(q,c,D),S(x,q,D),I=!0},p(q,D){const j={};D&1&&(j.$$scope={dirty:D,ctx:q}),t.$set(j);const V={};D&1&&(V.$$scope={dirty:D,ctx:q}),r.$set(V);const W={};D&1&&(W.$$scope={dirty:D,ctx:q}),m.$set(W);const z={};D&1&&(z.$$scope={dirty:D,ctx:q}),$.$set(z);const U={};D&1&&(U.$$scope={dirty:D,ctx:q}),n.$set(U);const te={};D&1&&(te.$$scope={dirty:D,ctx:q}),L.$set(te);const A={};D&1&&(A.$$scope={dirty:D,ctx:q}),x.$set(A)},i(q){I||(P(t.$$.fragment,q),P(r.$$.fragment,q),P(m.$$.fragment,q),P($.$$.fragment,q),P(n.$$.fragment,q),P(L.$$.fragment,q),P(x.$$.fragment,q),I=!0)},o(q){H(t.$$.fragment,q),H(r.$$.fragment,q),H(m.$$.fragment,q),H($.$$.fragment,q),H(n.$$.fragment,q),H(L.$$.fragment,q),H(x.$$.fragment,q),I=!1},d(q){q&&(a(e),a(s),a(f),a(i),a(l),a(C),a(p),a(c)),M(t,q),M(r,q),M(m,q),M($,q),M(n,q),M(L,q),M(x,q)}}}function fo(_){let e,o;return e=new R({props:{$$slots:{default:[$o]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){E(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const f={};t&1&&(f.$$scope={dirty:t,ctx:s}),e.$set(f)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){H(e.$$.fragment,s),o=!1},d(s){M(e,s)}}}class po extends Se{constructor(e){super(),Ee(this,e,null,fo,Pe,{})}}function mo(_){let e,o="SOLID est un ensemble de 5 principes de conception formulés par Robert C. Martin.",s,t,f=`Ils guident la création de code <span class="text-important">maintenable</span>,
			<span class="text-important">extensible</span> et <span class="text-important">testable</span>.`,r,i,m=`<span class="text-important">S</span> ·
			<span class="text-important">O</span> ·
			<span class="text-important">L</span> ·
			<span class="text-important">I</span> ·
			<span class="text-important">D</span>`,l,$,C=`Robert C. Martin, alias "Uncle Bob", a formalisé ces principes dans les années 2000.\r
			Ce n'est pas de la théorie abstraite : ces principes sont appliqués quotidiennement\r
			dans les entreprises qui font du code de qualité. Connaitre SOLID vous distingue\r
			d'un développeur junior.`;return{c(){e=g("p"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),i=g("div"),i.innerHTML=m,l=v(),$=g("aside"),$.textContent=C,this.h()},l(n){e=h(n,"P",{"data-svelte-h":!0}),b(e)!=="svelte-btqyvi"&&(e.textContent=o),s=d(n),t=h(n,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-kobcap"&&(t.innerHTML=f),r=d(n),i=h(n,"DIV",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-1lwnd9i"&&(i.innerHTML=m),l=d(n),$=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-1a4nao7"&&($.textContent=C),this.h()},h(){w(t,"class","fragment mt-4"),w(i,"class","fragment mt-8 text-3xl"),w($,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),u(n,t,p),u(n,r,p),u(n,i,p),u(n,l,p),u(n,$,p)},p:O,d(n){n&&(a(e),a(s),a(t),a(r),a(i),a(l),a($))}}}function vo(_){let e=`
// Violation : cette classe fait tout
class Commande {
    void calculerTotal() { ... }
    void envoyerEmailConfirmation() { ... }
    void sauvegarderEnBase() { ... }
    void genererFacturePDF() { ... }
}
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function xo(_){let e,o="S — Single Responsibility",s,t,f='Une classe ne doit avoir qu&#39;<span class="text-important">une seule raison de changer</span>.',r,i,m,l,$="4 responsabilités = 4 raisons de changer.",C,n,p=`Si le format de l'email change, on modifie Commande. Si le format PDF change aussi.\r
			Si le schéma de la base change, encore Commande. C'est un noeud de dépendances.\r
			Risque : changer l'email peut casser le calcul du total.`,L;return i=new se({props:{$$slots:{default:[vo]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),T(i.$$.fragment),m=v(),l=g("p"),l.textContent=$,C=v(),n=g("aside"),n.textContent=p,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-49dgxr"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-da1dqz"&&(t.innerHTML=f),r=d(c),E(i.$$.fragment,c),m=d(c),l=h(c,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1kh7due"&&(l.textContent=$),C=d(c),n=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-1789rwr"&&(n.textContent=p),this.h()},h(){w(l,"class","fragment mt-4 text-red-400"),w(n,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),S(i,c,x),u(c,m,x),u(c,l,x),u(c,C,x),u(c,n,x),L=!0},p(c,x){const I={};x&1&&(I.$$scope={dirty:x,ctx:c}),i.$set(I)},i(c){L||(P(i.$$.fragment,c),L=!0)},o(c){H(i.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(r),a(m),a(l),a(C),a(n)),M(i,c)}}}function _o(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Co(_){let e,o="S — Correction",s,t,f,r,i="Chaque classe a <b>une seule responsabilité</b> et donc <b>une seule raison de changer</b>.",m,l,$=`On verra dans le bloc Refactoring comment extraire ces services concrètement.\r
			L'IDE peut le faire semi-automatiquement.`,C;return t=new He({props:{$$slots:{default:[_o]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("p"),r.innerHTML=i,m=v(),l=g("aside"),l.textContent=$,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-12vjt33"&&(e.textContent=o),s=d(n),E(t.$$.fragment,n),f=d(n),r=h(n,"P",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-1nxjxj1"&&(r.innerHTML=i),m=d(n),l=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1v36s87"&&(l.textContent=$),this.h()},h(){w(r,"class","fragment mt-4"),w(l,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),S(t,n,p),u(n,f,p),u(n,r,p),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),t.$set(L)},i(n){C||(P(t.$$.fragment,n),C=!0)},o(n){H(t.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(f),a(r),a(m),a(l)),M(t,n)}}}function ho(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function go(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function bo(_){let e,o="O — Open/Closed",s,t,f=`Ouvert à l&#39;<span class="text-important">extension</span>,
			fermé à la <span class="text-important">modification</span>.`,r,i,m,l,$="Avant",C,n,p,L,c,x="Après",I,q,D,j,V=`Le code de gauche doit être modifié à chaque nouveau type. Celui de droite ne change jamais.\r
			C'est exactement le polymorphisme qu'on vient de voir. OCP est le principe formel derrière.`,W;return n=new se({props:{$$slots:{default:[ho]},$$scope:{ctx:_}}}),q=new se({props:{$$slots:{default:[go]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),i=g("div"),m=g("div"),l=g("h4"),l.textContent=$,C=v(),T(n.$$.fragment),p=v(),L=g("div"),c=g("h4"),c.textContent=x,I=v(),T(q.$$.fragment),D=v(),j=g("aside"),j.textContent=V,this.h()},l(z){e=h(z,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-lqfuaq"&&(e.textContent=o),s=d(z),t=h(z,"P",{"data-svelte-h":!0}),b(t)!=="svelte-zpgp4t"&&(t.innerHTML=f),r=d(z),i=h(z,"DIV",{class:!0});var U=de(i);m=h(U,"DIV",{});var te=de(m);l=h(te,"H4",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-mw7c45"&&(l.textContent=$),C=d(te),E(n.$$.fragment,te),te.forEach(a),p=d(U),L=h(U,"DIV",{});var A=de(L);c=h(A,"H4",{class:!0,"data-svelte-h":!0}),b(c)!=="svelte-1lh0iip"&&(c.textContent=x),I=d(A),E(q.$$.fragment,A),A.forEach(a),U.forEach(a),D=d(z),j=h(z,"ASIDE",{class:!0,"data-svelte-h":!0}),b(j)!=="svelte-981h21"&&(j.textContent=V),this.h()},h(){w(l,"class","text-red-400"),w(c,"class","text-green-400"),w(i,"class","grid grid-cols-2 gap-4 mt-6"),w(j,"class","notes")},m(z,U){u(z,e,U),u(z,s,U),u(z,t,U),u(z,r,U),u(z,i,U),y(i,m),y(m,l),y(m,C),S(n,m,null),y(i,p),y(i,L),y(L,c),y(L,I),S(q,L,null),u(z,D,U),u(z,j,U),W=!0},p(z,U){const te={};U&1&&(te.$$scope={dirty:U,ctx:z}),n.$set(te);const A={};U&1&&(A.$$scope={dirty:U,ctx:z}),q.$set(A)},i(z){W||(P(n.$$.fragment,z),P(q.$$.fragment,z),W=!0)},o(z){H(n.$$.fragment,z),H(q.$$.fragment,z),W=!1},d(z){z&&(a(e),a(s),a(t),a(r),a(i),a(D),a(j)),M(n),M(q)}}}function Lo(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function wo(_){let e,o="L — Liskov Substitution",s,t,f=`Un objet de type enfant doit pouvoir <span class="text-important">remplacer</span> un objet
			du type parent sans casser le programme.`,r,i,m,l="Le piège classique",$,C,n,p,L=`Si on passe un Carré là où on attend un Rectangle, setLargeur modifie aussi la hauteur.\r
			Le code qui fait r.setLargeur(5); r.setHauteur(3); s'attend à surface() == 15.\r
			Avec un Carré, surface() == 9. Le comportement est changé : Liskov est violé.`,c;return C=new se({props:{$$slots:{default:[Lo]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),i=g("div"),m=g("h4"),m.textContent=l,$=v(),T(C.$$.fragment),n=v(),p=g("aside"),p.textContent=L,this.h()},l(x){e=h(x,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-13zsocl"&&(e.textContent=o),s=d(x),t=h(x,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1eajx8k"&&(t.innerHTML=f),r=d(x),i=h(x,"DIV",{class:!0});var I=de(i);m=h(I,"H4",{class:!0,"data-svelte-h":!0}),b(m)!=="svelte-1j4x0cb"&&(m.textContent=l),$=d(I),E(C.$$.fragment,I),I.forEach(a),n=d(x),p=h(x,"ASIDE",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-z8lkhw"&&(p.textContent=L),this.h()},h(){w(m,"class","text-red-400"),w(i,"class","fragment mt-6"),w(p,"class","notes")},m(x,I){u(x,e,I),u(x,s,I),u(x,t,I),u(x,r,I),u(x,i,I),y(i,m),y(i,$),S(C,i,null),u(x,n,I),u(x,p,I),c=!0},p(x,I){const q={};I&1&&(q.$$scope={dirty:I,ctx:x}),C.$set(q)},i(x){c||(P(C.$$.fragment,x),c=!0)},o(x){H(C.$$.fragment,x),c=!1},d(x){x&&(a(e),a(s),a(t),a(r),a(i),a(n),a(p)),M(C)}}}function qo(_){let e=`
void testerRectangle(Rectangle r) {
    r.setLargeur(5);
    r.setHauteur(3);
    assert r.surface() == 15;  // Échoue avec un Carré !
}

testerRectangle(new Rectangle());  // OK
testerRectangle(new Carre());      // Assertion error !
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Mo(_){let e,o="L — Le problème",s,t,f,r,i=`Un <code>Carre</code> n&#39;est <b>pas substituable</b> à un <code>Rectangle</code>
			→ l&#39;héritage est <span class="text-important">mal choisi</span>.`,m,l,$=`Solution : ne pas faire hériter Carré de Rectangle. Utiliser une interface Forme commune,\r
			ou un record. Mathématiquement un carré est un rectangle, mais en POO la relation "est un"\r
			doit préserver le comportement, pas juste les propriétés mathématiques.`,C;return t=new se({props:{$$slots:{default:[qo]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("p"),r.innerHTML=i,m=v(),l=g("aside"),l.textContent=$,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-12nedy"&&(e.textContent=o),s=d(n),E(t.$$.fragment,n),f=d(n),r=h(n,"P",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-u6ns7n"&&(r.innerHTML=i),m=d(n),l=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-mq4vuv"&&(l.textContent=$),this.h()},h(){w(r,"class","fragment mt-4"),w(l,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),S(t,n,p),u(n,f,p),u(n,r,p),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),t.$set(L)},i(n){C||(P(t.$$.fragment,n),C=!0)},o(n){H(t.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(f),a(r),a(m),a(l)),M(t,n)}}}function Ho(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Po(_){let e,o="I — Interface Segregation",s,t,f=`Mieux vaut plusieurs <span class="text-important">petites interfaces</span>
			qu&#39;une grosse interface fourre-tout.`,r,i,m,l,$="L&#39;<code>ImprimanteSimple</code> n&#39;est pas forcée d&#39;implémenter <code>scanner()</code> et <code>faxer()</code>.",C,n,p=`Si on avait une seule interface MachineDeBureau avec imprimer(), scanner(), faxer(),\r
			une imprimante simple devrait implémenter scanner() en lançant une exception ou en ne faisant rien.\r
			C'est un "code smell". ISP rejoint ce qu'on a vu en séance 1 sur les interfaces ciblées.`,L;return i=new He({props:{$$slots:{default:[Ho]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),T(i.$$.fragment),m=v(),l=g("p"),l.innerHTML=$,C=v(),n=g("aside"),n.textContent=p,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-fpcdx0"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1pvhvzd"&&(t.innerHTML=f),r=d(c),E(i.$$.fragment,c),m=d(c),l=h(c,"P",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-jg27of"&&(l.innerHTML=$),C=d(c),n=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(n)!=="svelte-18ul45o"&&(n.textContent=p),this.h()},h(){w(l,"class","fragment mt-2"),w(n,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),S(i,c,x),u(c,m,x),u(c,l,x),u(c,C,x),u(c,n,x),L=!0},p(c,x){const I={};x&1&&(I.$$scope={dirty:x,ctx:c}),i.$set(I)},i(c){L||(P(i.$$.fragment,c),L=!0)},o(c){H(i.$$.fragment,c),L=!1},d(c){c&&(a(e),a(s),a(t),a(r),a(m),a(l),a(C),a(n)),M(i,c)}}}function So(_){let e=`
class NotificationService {
    private EmailSender sender 
        = new EmailSender();
        
    void notifier(String msg) {
        sender.envoyer(msg);
    }
}
// Impossible de changer 
// pour du SMS sans modifier
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Eo(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function To(_){let e,o="D — Dependency Inversion",s,t,f='Dépendre des <span class="text-important">abstractions</span>, pas des implémentations concrètes.',r,i,m,l,$="Couplé",C,n,p,L,c,x="Découplé",I,q,D,j,V=`À gauche, NotificationService est soudé à EmailSender. À droite, on injecte n'importe\r
			quelle implémentation de MessageSender. Demain SMS, push, Slack, webhook... sans rien modifier.\r
			C'est le principe qu'on a vu avec BassinAquatique(Nageur) en séance 1, mais formalisé.`,W;return n=new se({props:{$$slots:{default:[So]},$$scope:{ctx:_}}}),q=new se({props:{$$slots:{default:[Eo]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.innerHTML=f,r=v(),i=g("div"),m=g("div"),l=g("h4"),l.textContent=$,C=v(),T(n.$$.fragment),p=v(),L=g("div"),c=g("h4"),c.textContent=x,I=v(),T(q.$$.fragment),D=v(),j=g("aside"),j.textContent=V,this.h()},l(z){e=h(z,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1y9rhxc"&&(e.textContent=o),s=d(z),t=h(z,"P",{"data-svelte-h":!0}),b(t)!=="svelte-1exfegv"&&(t.innerHTML=f),r=d(z),i=h(z,"DIV",{class:!0});var U=de(i);m=h(U,"DIV",{});var te=de(m);l=h(te,"H4",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1straf9"&&(l.textContent=$),C=d(te),E(n.$$.fragment,te),te.forEach(a),p=d(U),L=h(U,"DIV",{});var A=de(L);c=h(A,"H4",{class:!0,"data-svelte-h":!0}),b(c)!=="svelte-129z7ng"&&(c.textContent=x),I=d(A),E(q.$$.fragment,A),A.forEach(a),U.forEach(a),D=d(z),j=h(z,"ASIDE",{class:!0,"data-svelte-h":!0}),b(j)!=="svelte-tx3y5r"&&(j.textContent=V),this.h()},h(){w(l,"class","text-red-400"),w(c,"class","text-green-400"),w(i,"class","grid grid-cols-2 gap-4 mt-6"),w(j,"class","notes")},m(z,U){u(z,e,U),u(z,s,U),u(z,t,U),u(z,r,U),u(z,i,U),y(i,m),y(m,l),y(m,C),S(n,m,null),y(i,p),y(i,L),y(L,c),y(L,I),S(q,L,null),u(z,D,U),u(z,j,U),W=!0},p(z,U){const te={};U&1&&(te.$$scope={dirty:U,ctx:z}),n.$set(te);const A={};U&1&&(A.$$scope={dirty:U,ctx:z}),q.$set(A)},i(z){W||(P(n.$$.fragment,z),P(q.$$.fragment,z),W=!0)},o(z){H(n.$$.fragment,z),H(q.$$.fragment,z),W=!1},d(z){z&&(a(e),a(s),a(t),a(r),a(i),a(D),a(j)),M(n),M(q)}}}function Ao(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Io(_){let e,o="D — En pratique",s,t,f,r,i=`C&#39;est le fondement de l&#39;<span class="text-important">injection de dépendances</span>
			utilisée par Spring, Guice, etc.`,m,l,$=`En Spring, vous n'écrivez même pas le new : le framework injecte automatiquement\r
			avec @Autowired. On le verra quand on abordera les annotations/frameworks.`,C;return t=new se({props:{$$slots:{default:[Ao]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("p"),r.innerHTML=i,m=v(),l=g("aside"),l.textContent=$,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-h7mrc0"&&(e.textContent=o),s=d(n),E(t.$$.fragment,n),f=d(n),r=h(n,"P",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-10d2qb"&&(r.innerHTML=i),m=d(n),l=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-1eahumj"&&(l.textContent=$),this.h()},h(){w(r,"class","fragment mt-4"),w(l,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),S(t,n,p),u(n,f,p),u(n,r,p),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),t.$set(L)},i(n){C||(P(t.$$.fragment,n),C=!0)},o(n){H(t.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(f),a(r),a(m),a(l)),M(t,n)}}}function jo(_){let e,o="Récapitulatif SOLID",s,t,f='<tr class="fragment"><td class="p-3 text-important font-bold">S</td> <td class="p-3">Single Responsibility</td> <td class="p-3 text-gray-400">Une classe = une responsabilité</td></tr> <tr class="fragment"><td class="p-3 text-important font-bold">O</td> <td class="p-3">Open/Closed</td> <td class="p-3 text-gray-400">Étendre sans modifier</td></tr> <tr class="fragment"><td class="p-3 text-important font-bold">L</td> <td class="p-3">Liskov Substitution</td> <td class="p-3 text-gray-400">Sous-type = substituable</td></tr> <tr class="fragment"><td class="p-3 text-important font-bold">I</td> <td class="p-3">Interface Segregation</td> <td class="p-3 text-gray-400">Interfaces petites et ciblées</td></tr> <tr class="fragment"><td class="p-3 text-important font-bold">D</td> <td class="p-3">Dependency Inversion</td> <td class="p-3 text-gray-400">Dépendre des abstractions</td></tr>',r,i,m=`Ce tableau est une référence à garder. En entretien, on attend que vous connaissiez au moins\r
			SRP et OCP. Les 5 montrent une vraie maturité en conception logicielle.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("table"),t.innerHTML=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1gyjac8"&&(e.textContent=o),s=d(l),t=h(l,"TABLE",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-rohai5"&&(t.innerHTML=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-7binn6"&&(i.textContent=m),this.h()},h(){w(t,"class","text-lg"),w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function Do(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function ko(_){let e,o="Quel principe est violé ?",s,t,f,r,i="<b>S</b> — 3 responsabilités : persistance, notification, logging.",m,l,$=`On pourrait aussi argumenter D (dépendances concrètes à JDBC et JavaMail).\r
			Mais la violation la plus flagrante est SRP.`,C;return t=new se({props:{$$slots:{default:[Do]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("p"),r.innerHTML=i,m=v(),l=g("aside"),l.textContent=$,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1ts5k23"&&(e.textContent=o),s=d(n),E(t.$$.fragment,n),f=d(n),r=h(n,"P",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-82c2oy"&&(r.innerHTML=i),m=d(n),l=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-173o6df"&&(l.textContent=$),this.h()},h(){w(r,"class","fragment mt-4 text-accent-200"),w(l,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),S(t,n,p),u(n,f,p),u(n,r,p),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),t.$set(L)},i(n){C||(P(t.$$.fragment,n),C=!0)},o(n){H(t.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(f),a(r),a(m),a(l)),M(t,n)}}}function Oo(_){let e,o="Les principes SOLID",s,t,f,r,i,m,l,$,C,n,p,L,c,x,I,q,D,j,V,W,z,U,te;return t=new R({props:{$$slots:{default:[mo]},$$scope:{ctx:_}}}),r=new R({props:{$$slots:{default:[xo]},$$scope:{ctx:_}}}),m=new R({props:{$$slots:{default:[Co]},$$scope:{ctx:_}}}),$=new R({props:{$$slots:{default:[bo]},$$scope:{ctx:_}}}),n=new R({props:{$$slots:{default:[wo]},$$scope:{ctx:_}}}),L=new R({props:{$$slots:{default:[Mo]},$$scope:{ctx:_}}}),x=new R({props:{$$slots:{default:[Po]},$$scope:{ctx:_}}}),q=new R({props:{$$slots:{default:[To]},$$scope:{ctx:_}}}),j=new R({props:{$$slots:{default:[Io]},$$scope:{ctx:_}}}),W=new R({props:{$$slots:{default:[jo]},$$scope:{ctx:_}}}),U=new R({props:{$$slots:{default:[ko]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),T(r.$$.fragment),i=v(),T(m.$$.fragment),l=v(),T($.$$.fragment),C=v(),T(n.$$.fragment),p=v(),T(L.$$.fragment),c=v(),T(x.$$.fragment),I=v(),T(q.$$.fragment),D=v(),T(j.$$.fragment),V=v(),T(W.$$.fragment),z=v(),T(U.$$.fragment)},l(A){e=h(A,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-l7ata"&&(e.textContent=o),s=d(A),E(t.$$.fragment,A),f=d(A),E(r.$$.fragment,A),i=d(A),E(m.$$.fragment,A),l=d(A),E($.$$.fragment,A),C=d(A),E(n.$$.fragment,A),p=d(A),E(L.$$.fragment,A),c=d(A),E(x.$$.fragment,A),I=d(A),E(q.$$.fragment,A),D=d(A),E(j.$$.fragment,A),V=d(A),E(W.$$.fragment,A),z=d(A),E(U.$$.fragment,A)},m(A,F){u(A,e,F),u(A,s,F),S(t,A,F),u(A,f,F),S(r,A,F),u(A,i,F),S(m,A,F),u(A,l,F),S($,A,F),u(A,C,F),S(n,A,F),u(A,p,F),S(L,A,F),u(A,c,F),S(x,A,F),u(A,I,F),S(q,A,F),u(A,D,F),S(j,A,F),u(A,V,F),S(W,A,F),u(A,z,F),S(U,A,F),te=!0},p(A,F){const ce={};F&1&&(ce.$$scope={dirty:F,ctx:A}),t.$set(ce);const pe={};F&1&&(pe.$$scope={dirty:F,ctx:A}),r.$set(pe);const me={};F&1&&(me.$$scope={dirty:F,ctx:A}),m.$set(me);const _e={};F&1&&(_e.$$scope={dirty:F,ctx:A}),$.$set(_e);const oe={};F&1&&(oe.$$scope={dirty:F,ctx:A}),n.$set(oe);const ve={};F&1&&(ve.$$scope={dirty:F,ctx:A}),L.$set(ve);const fe={};F&1&&(fe.$$scope={dirty:F,ctx:A}),x.$set(fe);const xe={};F&1&&(xe.$$scope={dirty:F,ctx:A}),q.$set(xe);const G={};F&1&&(G.$$scope={dirty:F,ctx:A}),j.$set(G);const ne={};F&1&&(ne.$$scope={dirty:F,ctx:A}),W.$set(ne);const Q={};F&1&&(Q.$$scope={dirty:F,ctx:A}),U.$set(Q)},i(A){te||(P(t.$$.fragment,A),P(r.$$.fragment,A),P(m.$$.fragment,A),P($.$$.fragment,A),P(n.$$.fragment,A),P(L.$$.fragment,A),P(x.$$.fragment,A),P(q.$$.fragment,A),P(j.$$.fragment,A),P(W.$$.fragment,A),P(U.$$.fragment,A),te=!0)},o(A){H(t.$$.fragment,A),H(r.$$.fragment,A),H(m.$$.fragment,A),H($.$$.fragment,A),H(n.$$.fragment,A),H(L.$$.fragment,A),H(x.$$.fragment,A),H(q.$$.fragment,A),H(j.$$.fragment,A),H(W.$$.fragment,A),H(U.$$.fragment,A),te=!1},d(A){A&&(a(e),a(s),a(f),a(i),a(l),a(C),a(p),a(c),a(I),a(D),a(V),a(z)),M(t,A),M(r,A),M(m,A),M($,A),M(n,A),M(L,A),M(x,A),M(q,A),M(j,A),M(W,A),M(U,A)}}}function zo(_){let e,o;return e=new R({props:{$$slots:{default:[Oo]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){E(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const f={};t&1&&(f.$$scope={dirty:t,ctx:s}),e.$set(f)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){H(e.$$.fragment,s),o=!1},d(s){M(e,s)}}}class Vo extends Se{constructor(e){super(),Ee(this,e,null,zo,Pe,{})}}function Ro(_){let e,o=`Appliquer SOLID concrètement, c&#39;est <span class="text-important">extraire</span> du code
			en classes dédiées : les <b>services</b>.`,s,t,f="Un service est une classe qui encapsule une responsabilité métier précise.",r,i,m=`Le terme "service" vient de l'architecture en couches. En Spring, les classes annotées @Service\r
			suivent exactement ce principe. Mais on n'a pas besoin de framework pour structurer son code.`;return{c(){e=g("p"),e.innerHTML=o,s=v(),t=g("p"),t.textContent=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"P",{"data-svelte-h":!0}),b(e)!=="svelte-1yvf1db"&&(e.innerHTML=o),s=d(l),t=h(l,"P",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-19lx5a7"&&(t.textContent=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-7yz7w5"&&(i.textContent=m),this.h()},h(){w(t,"class","fragment mt-4"),w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function Uo(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function No(_){let e,o="Avant : le code monolithique",s,t,f,r,i=`Cette classe fait tout : recherche, emprunt, notification, statistiques.\r
			Elle viole SRP. Voyons comment extraire étape par étape.`,m;return t=new se({props:{className:"text-sm",$$slots:{default:[Uo]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("aside"),r.textContent=i,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-xzoiqa"&&(e.textContent=o),s=d(l),E(t.$$.fragment,l),f=d(l),r=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-7mkk02"&&(r.textContent=i),this.h()},h(){w(r,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),S(t,l,$),u(l,f,$),u(l,r,$),m=!0},p(l,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:l}),t.$set(C)},i(l){m||(P(t.$$.fragment,l),m=!0)},o(l){H(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a(f),a(r)),M(t,l)}}}function Jo(_){let e,o="Identifier les responsabilités",s,t,f='<div class="p-4 bg-accent-950 rounded-lg fragment"><h4 class="text-blue-400">Recherche</h4> <p class="text-xl"><code>rechercherParTitre()</code></p></div> <div class="p-4 bg-accent-950 rounded-lg fragment"><h4 class="text-green-400">Emprunt</h4> <p class="text-xl"><code>emprunter()</code>, <code>retourner()</code></p></div> <div class="p-4 bg-accent-950 rounded-lg fragment"><h4 class="text-purple-400">Notification</h4> <p class="text-xl"><code>System.out.println(&quot;Email...&quot;)</code></p></div> <div class="p-4 bg-accent-950 rounded-lg fragment"><h4 class="text-orange-400">Statistiques</h4> <p class="text-xl"><code>afficherStatistiques()</code></p></div>',r,i,m="4 responsabilités = 4 raisons de changer = 4 services potentiels.",l,$,C=`En pratique, on ne crée pas toujours un service par méthode. L'idée est de regrouper ce qui\r
			change ensemble. Recherche et catalogue pourraient être dans le même service.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("div"),t.innerHTML=f,r=v(),i=g("p"),i.textContent=m,l=v(),$=g("aside"),$.textContent=C,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-12sovmo"&&(e.textContent=o),s=d(n),t=h(n,"DIV",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-7ixl75"&&(t.innerHTML=f),r=d(n),i=h(n,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-13x1d0b"&&(i.textContent=m),l=d(n),$=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-16v0o8j"&&($.textContent=C),this.h()},h(){w(t,"class","grid grid-cols-2 gap-4 mt-6"),w(i,"class","fragment mt-6"),w($,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),u(n,t,p),u(n,r,p),u(n,i,p),u(n,l,p),u(n,$,p)},p:O,d(n){n&&(a(e),a(s),a(t),a(r),a(i),a(l),a($))}}}function Bo(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Fo(_){let e,o="Extraire les services",s,t,f,r,i=`Le service reçoit ses dépendances par constructeur (Dependency Inversion).\r
			Il ne s'occupe que de la recherche. Il est facile à tester unitairement.`,m;return t=new se({props:{$$slots:{default:[Bo]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("aside"),r.textContent=i,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-8yd12y"&&(e.textContent=o),s=d(l),E(t.$$.fragment,l),f=d(l),r=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-1f42vp4"&&(r.textContent=i),this.h()},h(){w(r,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),S(t,l,$),u(l,f,$),u(l,r,$),m=!0},p(l,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:l}),t.$set(C)},i(l){m||(P(t.$$.fragment,l),m=!0)},o(l){H(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a(f),a(r)),M(t,l)}}}function Go(_){let e=`
interface NotificationService {
    void notifier(String destinataire, String message);
}

class EmailNotificationService implements NotificationService {
    public void notifier(String destinataire, String message) {
        System.out.println("Email à " + destinataire + " : " + message);
    }
}
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Qo(_){let e,o="Extraire les services",s,t,f,r,i=`On passe par une <b>interface</b> : demain on pourra envoyer des SMS
			sans modifier le code d&#39;emprunt.`,m,l,$=`C'est le D de SOLID en action. Le service d'emprunt dépendra de NotificationService,\r
			pas de EmailNotificationService. On injecte l'implémentation.`,C;return t=new se({props:{$$slots:{default:[Go]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("p"),r.innerHTML=i,m=v(),l=g("aside"),l.textContent=$,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-8yd12y"&&(e.textContent=o),s=d(n),E(t.$$.fragment,n),f=d(n),r=h(n,"P",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-rtm9ww"&&(r.innerHTML=i),m=d(n),l=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b(l)!=="svelte-9b0gd"&&(l.textContent=$),this.h()},h(){w(r,"class","fragment mt-4"),w(l,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),S(t,n,p),u(n,f,p),u(n,r,p),u(n,m,p),u(n,l,p),C=!0},p(n,p){const L={};p&1&&(L.$$scope={dirty:p,ctx:n}),t.$set(L)},i(n){C||(P(t.$$.fragment,n),C=!0)},o(n){H(t.$$.fragment,n),C=!1},d(n){n&&(a(e),a(s),a(f),a(r),a(m),a(l)),M(t,n)}}}function Ko(_){let e=`
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
`,o;return{c(){o=Z(e)},l(s){o=Y(s,e)},m(s,t){u(s,o,t)},p:O,d(s){s&&a(o)}}}function Xo(_){let e,o="Résultat",s,t,f,r,i=`La classe Bibliothèque devient un orchestrateur léger. Chaque service est testable\r
			indépendamment. On peut changer la notification sans toucher aux emprunts.`,m;return t=new He({props:{$$slots:{default:[Ko]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),r=g("aside"),r.textContent=i,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-8zmews"&&(e.textContent=o),s=d(l),E(t.$$.fragment,l),f=d(l),r=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(r)!=="svelte-1srymxr"&&(r.textContent=i),this.h()},h(){w(r,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),S(t,l,$),u(l,f,$),u(l,r,$),m=!0},p(l,$){const C={};$&1&&(C.$$scope={dirty:$,ctx:l}),t.$set(C)},i(l){m||(P(t.$$.fragment,l),m=!0)},o(l){H(t.$$.fragment,l),m=!1},d(l){l&&(a(e),a(s),a(f),a(r)),M(t,l)}}}function Wo(_){let e,o="L'IDE comme allié",s,t,f="Les IDE modernes automatisent ces extractions :",r,i,m='<li class="fragment"><span class="text-important">Extract Method</span> — sélectionnez du code → clic droit → Extract Method</li> <li class="fragment"><span class="text-important">Extract Class</span> — déplace des méthodes et attributs dans une nouvelle classe</li> <li class="fragment"><span class="text-important">Extract Interface</span> — crée une interface à partir des méthodes publiques</li> <li class="fragment"><span class="text-important">Move</span> — déplace une classe dans un autre package</li>',l,$,C="Raccourci IntelliJ : <code>Ctrl+Alt+M</code> (Extract Method)",n,p,L=`Montrer en live si possible. IntelliJ et VS Code avec les extensions Java font ça très bien.\r
			Le refactoring automatique préserve les références : pas de risque de casser le code.\r
			C'est plus rapide et plus sûr que de copier-coller à la main.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("p"),t.textContent=f,r=v(),i=g("ul"),i.innerHTML=m,l=v(),$=g("p"),$.innerHTML=C,n=v(),p=g("aside"),p.textContent=L,this.h()},l(c){e=h(c,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1y514a9"&&(e.textContent=o),s=d(c),t=h(c,"P",{"data-svelte-h":!0}),b(t)!=="svelte-v0lt24"&&(t.textContent=f),r=d(c),i=h(c,"UL",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-1i1giw0"&&(i.innerHTML=m),l=d(c),$=h(c,"P",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-1n18zy0"&&($.innerHTML=C),n=d(c),p=h(c,"ASIDE",{class:!0,"data-svelte-h":!0}),b(p)!=="svelte-1i706qj"&&(p.textContent=L),this.h()},h(){w(i,"class","text-xl mt-6"),w($,"class","fragment mt-6 text-accent-200"),w(p,"class","notes")},m(c,x){u(c,e,x),u(c,s,x),u(c,t,x),u(c,r,x),u(c,i,x),u(c,l,x),u(c,$,x),u(c,n,x),u(c,p,x)},p:O,d(c){c&&(a(e),a(s),a(t),a(r),a(i),a(l),a($),a(n),a(p))}}}function Yo(_){let e,o="Quand refactorer ?",s,t,f='<li class="fragment">Votre classe dépasse <b>100-150 lignes</b></li> <li class="fragment">Vous utilisez des commentaires pour séparer des &quot;blocs&quot; dans la classe</li> <li class="fragment">Deux modificateurs qui ne se connaissent pas touchent au même fichier</li> <li class="fragment">Un changement dans un coin casse un test dans un autre</li>',r,i,m=`Ces signaux sont des <span class="text-important">code smells</span> :
			des indicateurs qu&#39;il est temps de restructurer.`,l,$,C=`Le refactoring n'est pas un luxe : c'est de l'hygiène. Comme ranger son bureau régulièrement.\r
			Plus on attend, plus c'est coûteux. Martin Fowler recommande de refactorer en continu,\r
			pas en "sprint de nettoyage".`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("ul"),t.innerHTML=f,r=v(),i=g("p"),i.innerHTML=m,l=v(),$=g("aside"),$.textContent=C,this.h()},l(n){e=h(n,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-158gq6p"&&(e.textContent=o),s=d(n),t=h(n,"UL",{class:!0,"data-svelte-h":!0}),b(t)!=="svelte-1qfg4d8"&&(t.innerHTML=f),r=d(n),i=h(n,"P",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-1ty0ezy"&&(i.innerHTML=m),l=d(n),$=h(n,"ASIDE",{class:!0,"data-svelte-h":!0}),b($)!=="svelte-loh1uh"&&($.textContent=C),this.h()},h(){w(t,"class","text-xl mt-6"),w(i,"class","fragment mt-6 text-accent-200"),w($,"class","notes")},m(n,p){u(n,e,p),u(n,s,p),u(n,t,p),u(n,r,p),u(n,i,p),u(n,l,p),u(n,$,p)},p:O,d(n){n&&(a(e),a(s),a(t),a(r),a(i),a(l),a($))}}}function Zo(_){let e,o="Refactoring en services",s,t,f,r,i,m,l,$,C,n,p,L,c,x,I,q,D;return t=new R({props:{$$slots:{default:[Ro]},$$scope:{ctx:_}}}),r=new R({props:{$$slots:{default:[No]},$$scope:{ctx:_}}}),m=new R({props:{$$slots:{default:[Jo]},$$scope:{ctx:_}}}),$=new R({props:{$$slots:{default:[Fo]},$$scope:{ctx:_}}}),n=new R({props:{$$slots:{default:[Qo]},$$scope:{ctx:_}}}),L=new R({props:{$$slots:{default:[Xo]},$$scope:{ctx:_}}}),x=new R({props:{$$slots:{default:[Wo]},$$scope:{ctx:_}}}),q=new R({props:{$$slots:{default:[Yo]},$$scope:{ctx:_}}}),{c(){e=g("h3"),e.textContent=o,s=v(),T(t.$$.fragment),f=v(),T(r.$$.fragment),i=v(),T(m.$$.fragment),l=v(),T($.$$.fragment),C=v(),T(n.$$.fragment),p=v(),T(L.$$.fragment),c=v(),T(x.$$.fragment),I=v(),T(q.$$.fragment)},l(j){e=h(j,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-pnkd1v"&&(e.textContent=o),s=d(j),E(t.$$.fragment,j),f=d(j),E(r.$$.fragment,j),i=d(j),E(m.$$.fragment,j),l=d(j),E($.$$.fragment,j),C=d(j),E(n.$$.fragment,j),p=d(j),E(L.$$.fragment,j),c=d(j),E(x.$$.fragment,j),I=d(j),E(q.$$.fragment,j)},m(j,V){u(j,e,V),u(j,s,V),S(t,j,V),u(j,f,V),S(r,j,V),u(j,i,V),S(m,j,V),u(j,l,V),S($,j,V),u(j,C,V),S(n,j,V),u(j,p,V),S(L,j,V),u(j,c,V),S(x,j,V),u(j,I,V),S(q,j,V),D=!0},p(j,V){const W={};V&1&&(W.$$scope={dirty:V,ctx:j}),t.$set(W);const z={};V&1&&(z.$$scope={dirty:V,ctx:j}),r.$set(z);const U={};V&1&&(U.$$scope={dirty:V,ctx:j}),m.$set(U);const te={};V&1&&(te.$$scope={dirty:V,ctx:j}),$.$set(te);const A={};V&1&&(A.$$scope={dirty:V,ctx:j}),n.$set(A);const F={};V&1&&(F.$$scope={dirty:V,ctx:j}),L.$set(F);const ce={};V&1&&(ce.$$scope={dirty:V,ctx:j}),x.$set(ce);const pe={};V&1&&(pe.$$scope={dirty:V,ctx:j}),q.$set(pe)},i(j){D||(P(t.$$.fragment,j),P(r.$$.fragment,j),P(m.$$.fragment,j),P($.$$.fragment,j),P(n.$$.fragment,j),P(L.$$.fragment,j),P(x.$$.fragment,j),P(q.$$.fragment,j),D=!0)},o(j){H(t.$$.fragment,j),H(r.$$.fragment,j),H(m.$$.fragment,j),H($.$$.fragment,j),H(n.$$.fragment,j),H(L.$$.fragment,j),H(x.$$.fragment,j),H(q.$$.fragment,j),D=!1},d(j){j&&(a(e),a(s),a(f),a(i),a(l),a(C),a(p),a(c),a(I)),M(t,j),M(r,j),M(m,j),M($,j),M(n,j),M(L,j),M(x,j),M(q,j)}}}function yo(_){let e,o;return e=new R({props:{$$slots:{default:[Zo]},$$scope:{ctx:_}}}),{c(){T(e.$$.fragment)},l(s){E(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},p(s,[t]){const f={};t&1&&(f.$$scope={dirty:t,ctx:s}),e.$set(f)},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){H(e.$$.fragment,s),o=!1},d(s){M(e,s)}}}class ec extends Se{constructor(e){super(),Ee(this,e,null,yo,Pe,{})}}function tc(_){let e,o="3ICS 2026 - POO",s,t,f,r=`- Lien de la présentation sur e-campus - Suivre depuis le projecteur - Montrer bouton d'aide -
		Overview (touche 'o')`;return{c(){e=g("h1"),s=Z(o),t=v(),f=g("aside"),f.textContent=r,this.h()},l(i){e=h(i,"H1",{class:!0});var m=de(e);s=Y(m,o),m.forEach(a),t=d(i),f=h(i,"ASIDE",{class:!0,"data-svelte-h":!0}),b(f)!=="svelte-1dq3421"&&(f.textContent=r),this.h()},h(){w(e,"class","capitalize"),w(f,"class","notes")},m(i,m){u(i,e,m),y(e,s),u(i,t,m),u(i,f,m)},p:O,d(i){i&&(a(e),a(t),a(f))}}}function sc(_){let e,o="Les concepts de la POO",s,t,f="<li>Généralités</li> <li>L&#39;encapsulation</li> <li>L&#39;héritage</li> <li>La composition</li> <li>Les interfaces</li> <li>Le polymorphisme</li>",r,i,m=`Voici le fil rouge du cours. On va voir ces 6 concepts dans l'ordre. Chaque concept s'appuie sur
		le précédent. À la fin, vous saurez concevoir une architecture objet complète. Prenez des notes
		sur ce qui vous semble flou, on fera des pauses pour les questions.`;return{c(){e=g("h3"),e.textContent=o,s=v(),t=g("ol"),t.innerHTML=f,r=v(),i=g("aside"),i.textContent=m,this.h()},l(l){e=h(l,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-1thzgzl"&&(e.textContent=o),s=d(l),t=h(l,"OL",{"data-svelte-h":!0}),b(t)!=="svelte-vjnx6z"&&(t.innerHTML=f),r=d(l),i=h(l,"ASIDE",{class:!0,"data-svelte-h":!0}),b(i)!=="svelte-1evfkkj"&&(i.textContent=m),this.h()},h(){w(i,"class","notes")},m(l,$){u(l,e,$),u(l,s,$),u(l,t,$),u(l,r,$),u(l,i,$)},p:O,d(l){l&&(a(e),a(s),a(t),a(r),a(i))}}}function lc(_){let e,o="Séance 2";return{c(){e=g("h3"),e.textContent=o},l(s){e=h(s,"H3",{"data-svelte-h":!0}),b(e)!=="svelte-h3jurd"&&(e.textContent=o)},m(s,t){u(s,e,t)},p:O,d(s){s&&a(e)}}}function nc(_){let e,o,s,t,f,r,i,m,l,$,C,n,p,L,c,x,I,q,D,j,V,W,z,U,te,A,F,ce,pe,me,_e,oe,ve,fe,xe,G,ne,Q,ue,K,re,Ce;return e=new R({props:{animate:!0,$$slots:{default:[tc]},$$scope:{ctx:_}}}),s=new Wa({}),f=new Ua({}),i=new Sl({}),l=new R({props:{$$slots:{default:[sc]},$$scope:{ctx:_}}}),C=new Qi({}),p=new ai({}),c=new bs({}),I=new nn({}),D=new En({}),V=new Vr({}),z=new R({props:{id:"seance2",$$slots:{default:[lc]},$$scope:{ctx:_}}}),te=new Iu({}),F=new _a({}),pe=new Yu({}),_e=new po({}),ve=new bu({}),xe=new Vo({}),ne=new ec({}),ue=new Ea({}),{c(){T(e.$$.fragment),o=v(),T(s.$$.fragment),t=v(),T(f.$$.fragment),r=v(),T(i.$$.fragment),m=v(),T(l.$$.fragment),$=v(),T(C.$$.fragment),n=v(),T(p.$$.fragment),L=v(),T(c.$$.fragment),x=v(),T(I.$$.fragment),q=v(),T(D.$$.fragment),j=v(),T(V.$$.fragment),W=v(),T(z.$$.fragment),U=v(),T(te.$$.fragment),A=v(),T(F.$$.fragment),ce=v(),T(pe.$$.fragment),me=v(),T(_e.$$.fragment),oe=v(),T(ve.$$.fragment),fe=v(),T(xe.$$.fragment),G=v(),T(ne.$$.fragment),Q=v(),T(ue.$$.fragment),K=v(),re=g("section"),this.h()},l(X){E(e.$$.fragment,X),o=d(X),E(s.$$.fragment,X),t=d(X),E(f.$$.fragment,X),r=d(X),E(i.$$.fragment,X),m=d(X),E(l.$$.fragment,X),$=d(X),E(C.$$.fragment,X),n=d(X),E(p.$$.fragment,X),L=d(X),E(c.$$.fragment,X),x=d(X),E(I.$$.fragment,X),q=d(X),E(D.$$.fragment,X),j=d(X),E(V.$$.fragment,X),W=d(X),E(z.$$.fragment,X),U=d(X),E(te.$$.fragment,X),A=d(X),E(F.$$.fragment,X),ce=d(X),E(pe.$$.fragment,X),me=d(X),E(_e.$$.fragment,X),oe=d(X),E(ve.$$.fragment,X),fe=d(X),E(xe.$$.fragment,X),G=d(X),E(ne.$$.fragment,X),Q=d(X),E(ue.$$.fragment,X),K=d(X),re=h(X,"SECTION",{class:!0}),de(re).forEach(a),this.h()},h(){w(re,"class","idle-bg")},m(X,$e){S(e,X,$e),u(X,o,$e),S(s,X,$e),u(X,t,$e),S(f,X,$e),u(X,r,$e),S(i,X,$e),u(X,m,$e),S(l,X,$e),u(X,$,$e),S(C,X,$e),u(X,n,$e),S(p,X,$e),u(X,L,$e),S(c,X,$e),u(X,x,$e),S(I,X,$e),u(X,q,$e),S(D,X,$e),u(X,j,$e),S(V,X,$e),u(X,W,$e),S(z,X,$e),u(X,U,$e),S(te,X,$e),u(X,A,$e),S(F,X,$e),u(X,ce,$e),S(pe,X,$e),u(X,me,$e),S(_e,X,$e),u(X,oe,$e),S(ve,X,$e),u(X,fe,$e),S(xe,X,$e),u(X,G,$e),S(ne,X,$e),u(X,Q,$e),S(ue,X,$e),u(X,K,$e),u(X,re,$e),Ce=!0},p(X,[$e]){const he={};$e&1&&(he.$$scope={dirty:$e,ctx:X}),e.$set(he);const J={};$e&1&&(J.$$scope={dirty:$e,ctx:X}),l.$set(J);const ie={};$e&1&&(ie.$$scope={dirty:$e,ctx:X}),z.$set(ie)},i(X){Ce||(P(e.$$.fragment,X),P(s.$$.fragment,X),P(f.$$.fragment,X),P(i.$$.fragment,X),P(l.$$.fragment,X),P(C.$$.fragment,X),P(p.$$.fragment,X),P(c.$$.fragment,X),P(I.$$.fragment,X),P(D.$$.fragment,X),P(V.$$.fragment,X),P(z.$$.fragment,X),P(te.$$.fragment,X),P(F.$$.fragment,X),P(pe.$$.fragment,X),P(_e.$$.fragment,X),P(ve.$$.fragment,X),P(xe.$$.fragment,X),P(ne.$$.fragment,X),P(ue.$$.fragment,X),Ce=!0)},o(X){H(e.$$.fragment,X),H(s.$$.fragment,X),H(f.$$.fragment,X),H(i.$$.fragment,X),H(l.$$.fragment,X),H(C.$$.fragment,X),H(p.$$.fragment,X),H(c.$$.fragment,X),H(I.$$.fragment,X),H(D.$$.fragment,X),H(V.$$.fragment,X),H(z.$$.fragment,X),H(te.$$.fragment,X),H(F.$$.fragment,X),H(pe.$$.fragment,X),H(_e.$$.fragment,X),H(ve.$$.fragment,X),H(xe.$$.fragment,X),H(ne.$$.fragment,X),H(ue.$$.fragment,X),Ce=!1},d(X){X&&(a(o),a(t),a(r),a(m),a($),a(n),a(L),a(x),a(q),a(j),a(W),a(U),a(A),a(ce),a(me),a(oe),a(fe),a(G),a(Q),a(K),a(re)),M(e,X),M(s,X),M(f,X),M(i,X),M(l,X),M(C,X),M(p,X),M(c,X),M(I,X),M(D,X),M(V,X),M(z,X),M(te,X),M(F,X),M(pe,X),M(_e,X),M(ve,X),M(xe,X),M(ne,X),M(ue,X)}}}class ic extends Se{constructor(e){super(),Ee(this,e,null,nc,Pe,{})}}function ac(_){let e,o;return e=new ic({}),{c(){T(e.$$.fragment)},l(s){E(e.$$.fragment,s)},m(s,t){S(e,s,t),o=!0},i(s){o||(P(e.$$.fragment,s),o=!0)},o(s){H(e.$$.fragment,s),o=!1},d(s){M(e,s)}}}function rc(_){let e,o,s,t,f;return document.title="3ICS 2026 - POO - Alexis Picot",t=new Dt({props:{$$slots:{default:[ac]},$$scope:{ctx:_}}}),{c(){e=g("link"),o=g("meta"),s=v(),T(t.$$.fragment),this.h()},l(r){const i=jt("svelte-v7f1ci",document.head);e=h(i,"LINK",{rel:!0,href:!0}),o=h(i,"META",{name:!0,content:!0}),i.forEach(a),s=d(r),E(t.$$.fragment,r),this.h()},h(){w(e,"rel","icon"),w(e,"href","https://fav.farm/💻"),w(o,"name","timestamp"),w(o,"content",new Date(1772545315570).toLocaleString())},m(r,i){y(document.head,e),y(document.head,o),u(r,s,i),S(t,r,i),f=!0},p(r,[i]){const m={};i&1&&(m.$$scope={dirty:i,ctx:r}),t.$set(m)},i(r){f||(P(t.$$.fragment,r),f=!0)},o(r){H(t.$$.fragment,r),f=!1},d(r){r&&a(s),a(e),a(o),M(t,r)}}}class fc extends Se{constructor(e){super(),Ee(this,e,null,rc,Pe,{})}}export{fc as component,$c as universal};
