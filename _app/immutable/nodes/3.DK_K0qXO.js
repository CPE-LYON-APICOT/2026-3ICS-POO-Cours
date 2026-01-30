import{s as He,n as w}from"../chunks/scheduler.D4WuhzBw.js";import{S as Ge,i as je,d as r,q as p,t as g,a as v,u as _,b as u,v as b,h as C,r as x,l as S,e as N,y as F,j as B,w as L,f as H,c as T,x as ve,g as y,k as q,z as Re}from"../chunks/index.BrheVP-q.js";import{S as O,P as ne,C as G,a as Ue}from"../chunks/plantUml.DxlSZiK4.js";const ze=!1,Je=!0,Gt=Object.freeze(Object.defineProperty({__proto__:null,prerender:Je,ssr:ze},Symbol.toStringTag,{value:"Module"}));function Qe(o){let t,n="Révisions";return{c(){t=B("h1"),t.textContent=n},l(e){t=N(e,"H1",{"data-svelte-h":!0}),F(t)!=="svelte-pagsw"&&(t.textContent=n)},m(e,a){u(e,t,a)},p:w,d(e){e&&r(t)}}}function We(o){let t,n="Exercice 1 : Gestion d'une médiathèque";return{c(){t=B("h2"),t.textContent=n},l(e){t=N(e,"H2",{"data-svelte-h":!0}),F(t)!=="svelte-e2gu5u"&&(t.textContent=n)},m(e,a){u(e,t,a)},p:w,d(e){e&&r(t)}}}function Ke(o){let t=`
            skinparam backgroundColor transparent

            abstract class Livre{}
            class BD extends Livre{}
            class Roman extends Livre{}
            `,n;return{c(){n=q(t)},l(e){n=y(e,t)},m(e,a){u(e,n,a)},p:w,d(e){e&&r(n)}}}function Xe(o){let t,n=`Dans cet exercice, on se propose de créer une application qui permet de répertorier l'ensemble\r
        de nos oeuvres.`,e,a,c=`La ville de Lyon souhaite mettre en avant la culture et vous demande de créer un réseau social\r
        dans lequel vous pourrez répertorier des oeuvres que vous aimez.`,i,m,A="La plateforme doit permettre de répertorier des romans, des livres ou des BD par exemple.",$,d,f,D;return f=new ne({props:{$$slots:{default:[Ke]},$$scope:{ctx:o}}}),{c(){t=B("p"),t.textContent=n,e=S(),a=B("p"),a.textContent=c,i=S(),m=B("p"),m.textContent=A,$=S(),d=B("div"),x(f.$$.fragment),this.h()},l(P){t=N(P,"P",{"data-svelte-h":!0}),F(t)!=="svelte-3aa3pd"&&(t.textContent=n),e=C(P),a=N(P,"P",{"data-svelte-h":!0}),F(a)!=="svelte-278yho"&&(a.textContent=c),i=C(P),m=N(P,"P",{"data-svelte-h":!0}),F(m)!=="svelte-1a1lm58"&&(m.textContent=A),$=C(P),d=N(P,"DIV",{class:!0});var h=H(d);b(f.$$.fragment,h),h.forEach(r),this.h()},h(){L(d,"class","fragment")},m(P,h){u(P,t,h),u(P,e,h),u(P,a,h),u(P,i,h),u(P,m,h),u(P,$,h),u(P,d,h),_(f,d,null),D=!0},p(P,h){const M={};h&1&&(M.$$scope={dirty:h,ctx:P}),f.$set(M)},i(P){D||(v(f.$$.fragment,P),D=!0)},o(P){g(f.$$.fragment,P),D=!1},d(P){P&&(r(t),r(e),r(a),r(i),r(m),r($),r(d)),p(f)}}}function Ye(o){let t=`
            skinparam backgroundColor transparent
            abstract class Oeuvre{}
            abstract class OeuvreMaterielle extends Oeuvre{}
            abstract class Livre extends OeuvreMaterielle{}
            class BD extends Livre{}
            class Roman extends Livre{}
            abstract class OeuvreNumérique extends Oeuvre{}
            class FilmNetflix extends OeuvreNumérique {}
            class PodcastAudible extends OeuvreNumérique{}

            `,n;return{c(){n=q(t)},l(e){n=y(e,t)},m(e,a){u(e,n,a)},p:w,d(e){e&&r(n)}}}function Ze(o){let t,n=`Votre application succite un engouement tel que Netflix et Audible vous contactent pour intégrer\r
        des films et des podcast qui pourront être lus directement sur votre plateforme.`,e,a,c="Proposez une solution pour intégrer ces nouvelles fonctionnalités",i,m,A,$;return A=new ne({props:{$$slots:{default:[Ye]},$$scope:{ctx:o}}}),{c(){t=B("p"),t.textContent=n,e=S(),a=B("em"),a.textContent=c,i=S(),m=B("div"),x(A.$$.fragment),this.h()},l(d){t=N(d,"P",{"data-svelte-h":!0}),F(t)!=="svelte-v8iihn"&&(t.textContent=n),e=C(d),a=N(d,"EM",{"data-svelte-h":!0}),F(a)!=="svelte-1sqgrn"&&(a.textContent=c),i=C(d),m=N(d,"DIV",{class:!0});var f=H(m);b(A.$$.fragment,f),f.forEach(r),this.h()},h(){L(m,"class","fragment")},m(d,f){u(d,t,f),u(d,e,f),u(d,a,f),u(d,i,f),u(d,m,f),_(A,m,null),$=!0},p(d,f){const D={};f&1&&(D.$$scope={dirty:f,ctx:d}),A.$set(D)},i(d){$||(v(A.$$.fragment,d),$=!0)},o(d){g(A.$$.fragment,d),$=!1},d(d){d&&(r(t),r(e),r(a),r(i),r(m)),p(A)}}}function et(o){let t=`

            skinparam backgroundColor transparent
            abstract class Oeuvre{}
            abstract class OeuvreMaterielle extends Oeuvre{}
            abstract class Livre extends OeuvreMaterielle{}
            abstract class BD extends Livre{}
            abstract class Roman extends Livre{}
            abstract class Manga extends Livre{}
            abstract class Album extends OeuvreMaterielle{}
            abstract class Vinyl extends Album{}
            abstract class CD extends Album{}
            abstract class Peinture extends OeuvreMaterielle{}
            abstract class OeuvreNumérique extends Oeuvre{}
            abstract class FilmNetflix extends OeuvreNumérique {}
            abstract class PodcastAudible extends OeuvreNumérique{}`,n;return{c(){n=q(t)},l(e){n=y(e,t)},m(e,a){u(e,n,a)},p:w,d(e){e&&r(n)}}}function tt(o){let t,n=`Votre appli à encore plus de succès, mais très vite, on vous reproche de résumer les oeuvres à\r
        des livres et de donner une part trop importante à la culture écrite et au dématérialisé.`,e,a,c="Proposez une solution pour intégrer des Vinyls, des CD, des Mangas et des Peintures",i,m,A,$;return A=new ne({props:{$$slots:{default:[et]},$$scope:{ctx:o}}}),{c(){t=B("p"),t.textContent=n,e=S(),a=B("em"),a.textContent=c,i=S(),m=B("div"),x(A.$$.fragment),this.h()},l(d){t=N(d,"P",{"data-svelte-h":!0}),F(t)!=="svelte-h67ef7"&&(t.textContent=n),e=C(d),a=N(d,"EM",{"data-svelte-h":!0}),F(a)!=="svelte-119quw8"&&(a.textContent=c),i=C(d),m=N(d,"DIV",{class:!0});var f=H(m);b(A.$$.fragment,f),f.forEach(r),this.h()},h(){L(m,"class","fragment")},m(d,f){u(d,t,f),u(d,e,f),u(d,a,f),u(d,i,f),u(d,m,f),_(A,m,null),$=!0},p(d,f){const D={};f&1&&(D.$$scope={dirty:f,ctx:d}),A.$set(D)},i(d){$||(v(A.$$.fragment,d),$=!0)},o(d){g(A.$$.fragment,d),$=!1},d(d){d&&(r(t),r(e),r(a),r(i),r(m)),p(A)}}}function nt(o){let t,n=`Il est temps de créer des classes qui représentent les différentes oeuvres que vous avez\r
        répertoriées.`,e,a,c="Créez les classes correspondantes",i,m,A="<dl><dt>BD</dt><dd>Asterix</dd><dd>Blacksad</dd><dt>Roman</dt><dd>Harry Potter</dd><dd>Don Quichotte</dd><dt>Manga</dt><dd>Dragon Ball</dd><dt>Vinyl</dt><dd>Dark Side of the Moon (Pink Floyd)</dd></dl> <dl><dt>CD</dt><dd>Thriller (Michael Jackson)</dd><dt>Peinture</dt><dd>La Joconde</dd><dd>Lapin anthropomorphe de John Tenniel (Noir et Blanc)</dd><dt>Film Netflix</dt><dd>Psychose</dd><dd>Pulp Fiction</dd><dt>Podcast</dt><dd>Actus du jour</dd></dl>";return{c(){t=B("p"),t.textContent=n,e=S(),a=B("em"),a.textContent=c,i=S(),m=B("div"),m.innerHTML=A,this.h()},l($){t=N($,"P",{"data-svelte-h":!0}),F(t)!=="svelte-dot2sv"&&(t.textContent=n),e=C($),a=N($,"EM",{"data-svelte-h":!0}),F(a)!=="svelte-rruqtp"&&(a.textContent=c),i=C($),m=N($,"DIV",{class:!0,"data-svelte-h":!0}),F(m)!=="svelte-m21t2w"&&(m.innerHTML=A),this.h()},h(){L(m,"class","flex flex-row items-center")},m($,d){u($,t,d),u($,e,d),u($,a,d),u($,i,d),u($,m,d)},p:w,d($){$&&(r(t),r(e),r(a),r(i),r(m))}}}function st(o){let t=`
        skinparam backgroundColor transparent
        abstract class Oeuvre{}
        abstract class OeuvreMaterielle extends Oeuvre{}
        abstract class Livre extends OeuvreMaterielle{}
        abstract class BD extends Livre{}
        abstract class Roman extends Livre{}
        abstract class Manga extends Livre{}
        abstract class Album extends OeuvreMaterielle{}
        abstract class Vinyl extends Album{}
        abstract class CD extends Album{}
        abstract class Peinture extends OeuvreMaterielle{}
        abstract class OeuvreNumérique extends Oeuvre{}
        abstract class FilmNetflix extends OeuvreNumérique {}
        abstract class PodcastAudible extends OeuvreNumérique{}


        class Asterix extends BD{}
        class Blacksad extends BD{}
        class HarryPotter extends Roman{}
        class DonQuichotte extends Roman{}
        class DragonBall extends Manga{}
        class DarkSideOfTheMoon extends Vinyl{}
        class Thriller extends CD{}
        class LaJoconde extends Peinture{}
        class LapinAnthropomorphe extends Peinture{}
        class Psychose extends FilmNetflix{}
        class PulpFiction extends FilmNetflix{}
        class ActusDuJour extends PodcastAudible{}
        `,n;return{c(){n=q(t)},l(e){n=y(e,t)},m(e,a){u(e,n,a)},p:w,d(e){e&&r(n)}}}function at(o){let t,n;return t=new ne({props:{$$slots:{default:[st]},$$scope:{ctx:o}}}),{c(){x(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,a){_(t,e,a),n=!0},p(e,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:e}),t.$set(c)},i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){p(t,e)}}}function lt(o){let t,n="Vous souhaitez maintenant créer des filtrages pour afficher les oeuvres par type.",e,a,c="Il y a le filtre noir et blanc, anthropomorphe, audio et visuel";return{c(){t=B("p"),t.textContent=n,e=S(),a=B("em"),a.textContent=c},l(i){t=N(i,"P",{"data-svelte-h":!0}),F(t)!=="svelte-rxzgk0"&&(t.textContent=n),e=C(i),a=N(i,"EM",{"data-svelte-h":!0}),F(a)!=="svelte-14hx2n6"&&(a.textContent=c)},m(i,m){u(i,t,m),u(i,e,m),u(i,a,m)},p:w,d(i){i&&(r(t),r(e),r(a))}}}function rt(o){let t=`

        skinparam backgroundColor transparent
        abstract class Oeuvre{}
        abstract class OeuvreMaterielle extends Oeuvre{}
        abstract class Livre extends OeuvreMaterielle{}
        abstract class BD extends Livre{}
        abstract class Roman extends Livre{}
        abstract class Manga extends Livre{}
        abstract class Album extends OeuvreMaterielle{}
        abstract class Vinyl extends Album{}
        abstract class CD extends Album{}
        abstract class Peinture extends OeuvreMaterielle{}
        abstract class OeuvreNumérique extends Oeuvre{}
        abstract class FilmNetflix extends OeuvreNumérique {}
        abstract class PodcastAudible extends OeuvreNumérique{}





        class Asterix extends BD{}
        class Blacksad extends BD{}
        class HarryPotter extends Roman{}
        class DonQuichotte extends Roman{}
        class DragonBall extends Manga{}
        class DarkSideOfTheMoon extends Vinyl{}
        class Thriller extends CD{}
        class LaJoconde extends Peinture{}
        class LapinAnthropomorphe extends Peinture{}
        class Psychose extends FilmNetflix{}
        class PulpFiction extends FilmNetflix{}
        class ActusDuJour extends PodcastAudible{}


        interface Filtre{}

        interface Visuel implements Filtre{}
        interface NoirEtBlanc implements Visuel{}
        interface Anthropomorphe implements Filtre{}
        interface Audio implements Filtre{}

        BD .up-|> Visuel
        Peinture .up-|> Visuel
        Album .up-|> Audio
        FilmNetflix .up-|> Visuel
        PodcastAudible .up-|> Audio

        LapinAnthropomorphe .up-|> Anthropomorphe
        Blacksad .up-|> Anthropomorphe
        HarryPotter .up-|> Anthropomorphe
        Manga .up-|> NoirEtBlanc
        Psychose ..up-|> NoirEtBlanc


        `,n;return{c(){n=q(t)},l(e){n=y(e,t)},m(e,a){u(e,n,a)},p:w,d(e){e&&r(n)}}}function it(o){let t,n;return t=new ne({props:{$$slots:{default:[rt]},$$scope:{ctx:o}}}),{c(){x(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,a){_(t,e,a),n=!0},p(e,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:e}),t.$set(c)},i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){p(t,e)}}}function ot(o){let t,n=`Imaginez des fonctionnalités que vous pourriez ajouter à votre application pour la rendre plus\r
        attractive en vous appuyant sur les interfaces crées précédemment.`,e,a,c="<li>Les oeuvres peuvent être adaptées</li> <li>Tout ce qui est visuel a un style artistique</li> <li>Tout ce qui est écoutable a une durée</li> <li>Les peintures ont toutes un support (toile, bois, etc.)</li> <li>En fait, les films ont aussi une durée</li>";return{c(){t=B("p"),t.textContent=n,e=S(),a=B("ul"),a.innerHTML=c},l(i){t=N(i,"P",{"data-svelte-h":!0}),F(t)!=="svelte-167gufh"&&(t.textContent=n),e=C(i),a=N(i,"UL",{"data-svelte-h":!0}),F(a)!=="svelte-7xxvql"&&(a.innerHTML=c)},m(i,m){u(i,t,m),u(i,e,m),u(i,a,m)},p:w,d(i){i&&(r(t),r(e),r(a))}}}function ut(o){let t=`

        skinparam backgroundColor transparent
        abstract class Oeuvre{
        + List<Oeuvre> getAdaptations()
            }
            abstract class OeuvreMaterielle extends Oeuvre{}
            abstract class Livre extends OeuvreMaterielle{}
            abstract class BD extends Livre{}
            abstract class Roman extends Livre{}
            abstract class Manga extends Livre{}
            abstract class Album extends OeuvreMaterielle{}
            abstract class Vinyl extends Album{}
            abstract class CD extends Album{}
            abstract class Peinture extends OeuvreMaterielle{
            + String getSupport()
            }
            abstract class OeuvreNumérique extends Oeuvre{}
            abstract class FilmNetflix extends OeuvreNumérique {}
            abstract class PodcastAudible extends OeuvreNumérique{}





            class Asterix extends BD{}
            class Blacksad extends BD{}
            class HarryPotter extends Roman{}
            class DonQuichotte extends Roman{}
            class DragonBall extends Manga{}
            class DarkSideOfTheMoon extends Vinyl{}
            class Thriller extends CD{}
            class LaJoconde extends Peinture{}
            class LapinAnthropomorphe extends Peinture{}
            class Psychose extends FilmNetflix{}
            class PulpFiction extends FilmNetflix{}
            class ActusDuJour extends PodcastAudible{}

            interface IDurée #orange{
            + int getDuree()
            }
            interface Filtre{}

            interface Visuel implements Filtre{
            + String getStyleArtistique()
            }
            interface NoirEtBlanc implements Visuel{}
            interface Anthropomorphe implements Filtre{}
            interface Audio implements Filtre, IDurée{}


            BD .up-|> Visuel
            Peinture .up-|> Visuel
            Album .up-|> Audio
            FilmNetflix .up-|> Visuel
            FilmNetflix .up-|> IDurée
            PodcastAudible .up-|> Audio

            LapinAnthropomorphe .up-|> Anthropomorphe
            Blacksad .up-|> Anthropomorphe
            HarryPotter .up-|> Anthropomorphe
            Manga .up-|> NoirEtBlanc
            Psychose ..up-|> NoirEtBlanc


            `,n;return{c(){n=q(t)},l(e){n=y(e,t)},m(e,a){u(e,n,a)},p:w,d(e){e&&r(n)}}}function ct(o){let t,n;return t=new ne({props:{$$slots:{default:[ut]},$$scope:{ctx:o}}}),{c(){x(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,a){_(t,e,a),n=!0},p(e,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:e}),t.$set(c)},i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){p(t,e)}}}function mt(o){let t,n="Exercice 2 : Création d'un programme de gestion d'animaux";return{c(){t=B("h2"),t.textContent=n},l(e){t=N(e,"H2",{"data-svelte-h":!0}),F(t)!=="svelte-31ei7l"&&(t.textContent=n)},m(e,a){u(e,t,a)},p:w,d(e){e&&r(t)}}}function dt(o){let t=`

        skinparam backgroundColor transparent
        interface IVoler {
        +fly()
        }

        abstract class Animal {
        -name: String
        -color: String
        +Animal(name: String, color: String)
        +getName(): String
        +setName(name: String): void
        +getColor(): String
        +makeSound(): void
        +canBeConsumed(food: Food): boolean
        +toString(): String
        }

        class Dog extends Animal {
        +Dog(name: String, color: String)
        +makeSound(): void
        +fetch(): void
        +canBeConsumed(food: Food): boolean
        }

        abstract class Bird extends Animal {
        +Bird(name: String, color: String)
        +makeSound(): void
        +canBeConsumed(food: Food): boolean
        }

        class Mesange extends Bird implements IVoler {
        +Mesange(name: String, color: String)
        +makeSound(): void
        +fly(): void
        +canBeConsumed(food: Food): boolean
        }

        class Penguin extends Bird {
        +Penguin(name: String, color: String)
        +makeSound(): void
        }

        interface Food {
        +consume(): void
        }

        class Meat implements Food {
        +consume(): void
        }

        class Fruit implements Food {
        +consume(): void
        }

        enum AnimalType {
        DOG,
        MESANGE,
        PENGUIN
        }

        class AnimalFactory {
        +createAnimal(type: AnimalType, name: String, color: String): Animal
        }


        `,n;return{c(){n=q(t)},l(e){n=y(e,t)},m(e,a){u(e,n,a)},p:w,d(e){e&&r(n)}}}function ft(o){let t,n;return t=new ne({props:{$$slots:{default:[dt]},$$scope:{ctx:o}}}),{c(){x(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,a){_(t,e,a),n=!0},p(e,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:e}),t.$set(c)},i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){p(t,e)}}}function $t(o){let t=`
   public abstract class Animal {
    private String name;
    private final String color;

    public Animal(String name, String color) {
        this.name = name;
        this.color = color;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getColor() {
        return color;
    }

    // Méthode abstraite à implémenter dans les classes dérivées
    public abstract void makeSound();

    // Méthode canBeConsumed pour vérifier si l'animal peut consommer la nourriture
    public abstract boolean canBeConsumed(Food food);

    @Override
    public String toString() {
        return "Name: " + name + ", Color: " + color;
    }
}
    `,n;return{c(){n=q(t)},l(e){n=y(e,t)},m(e,a){u(e,n,a)},p:w,d(e){e&&r(n)}}}function pt(o){let t,n;return t=new G({props:{class:"language-java",$$slots:{default:[$t]},$$scope:{ctx:o}}}),{c(){x(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,a){_(t,e,a),n=!0},p(e,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:e}),t.$set(c)},i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){p(t,e)}}}function gt(o){let t=`
        
public class Dog [???] {
    public Dog(String name, String color) {
        super(name, color);
    }

     [???]
    public void makeSound() {
        System.out.println(getName() 
          + " says: Woof!");
    }
    public void fetch() {
        System.out.println(getName() 
          + " is fetching the ball!");
    }

     [???]
    public boolean canBeConsumed( [???] food) {
        return food instanceof Meat;
    }
}

        `,n;return{c(){n=q(t)},l(e){n=y(e,t)},m(e,a){u(e,n,a)},p:w,d(e){e&&r(n)}}}function vt(o){let t=`
        
public abstract class Bird  [???] {
    public Bird(String name, String color) {
        super(name, color);
    }

     [???]
    public void makeSound() {
        System.out.println(getName() 
            + " says: Cui cui!");
    }

     [???]
    public  [???] canBeConsumed([???] food) {
        return food instanceof Fruit;
    }
}

        `,n;return{c(){n=q(t)},l(e){n=y(e,t)},m(e,a){u(e,n,a)},p:w,d(e){e&&r(n)}}}function _t(o){let t=`
        
public class Mesange  [???]  [???] {
    public Mesange(String name, String color) {
        super(name, color);
    }

     [???]
    public void makeSound() {
        System.out.println(getName() + " says: Cui cui!");
    }

     [???]
    public void  [???]() {
        System.out.println(getName() 
           + " is flying!");
    }

     [???]
    public boolean canBeConsumed( [???] food) {
        return food instanceof Meat || food instanceof Fruit;
    }
}

        `,n;return{c(){n=q(t)},l(e){n=y(e,t)},m(e,a){u(e,n,a)},p:w,d(e){e&&r(n)}}}function bt(o){let t=`
        
public class Penguin extends Bird {
    public Penguin(String name, String color) {
        super(name, color);
    }

     [???]
    public void makeSound() {
        System.out.println(getName() 
            + " says: Honk!");
    }
}


        `,n;return{c(){n=q(t)},l(e){n=y(e,t)},m(e,a){u(e,n,a)},p:w,d(e){e&&r(n)}}}function xt(o){let t,n,e,a,c,i,m,A,$,d,f,D,P;return e=new G({props:{class:"language-java",$$slots:{default:[gt]},$$scope:{ctx:o}}}),i=new G({props:{class:"language-java",$$slots:{default:[vt]},$$scope:{ctx:o}}}),$=new G({props:{class:"language-java",$$slots:{default:[_t]},$$scope:{ctx:o}}}),D=new G({props:{class:"language-java",$$slots:{default:[bt]},$$scope:{ctx:o}}}),{c(){t=B("div"),n=B("div"),x(e.$$.fragment),a=S(),c=B("div"),x(i.$$.fragment),m=S(),A=B("div"),x($.$$.fragment),d=S(),f=B("div"),x(D.$$.fragment),this.h()},l(h){t=N(h,"DIV",{style:!0});var M=H(t);n=N(M,"DIV",{class:!0});var V=H(n);b(e.$$.fragment,V),V.forEach(r),a=C(M),c=N(M,"DIV",{class:!0});var E=H(c);b(i.$$.fragment,E),E.forEach(r),m=C(M),A=N(M,"DIV",{class:!0});var I=H(A);b($.$$.fragment,I),I.forEach(r),d=C(M),f=N(M,"DIV",{class:!0});var k=H(f);b(D.$$.fragment,k),k.forEach(r),M.forEach(r),this.h()},h(){L(n,"class","fragment"),L(c,"class","fragment"),L(A,"class","fragment"),L(f,"class","fragment"),ve(t,"display","grid"),ve(t,"grid-template-columns","auto auto auto auto")},m(h,M){u(h,t,M),T(t,n),_(e,n,null),T(t,a),T(t,c),_(i,c,null),T(t,m),T(t,A),_($,A,null),T(t,d),T(t,f),_(D,f,null),P=!0},p(h,M){const V={};M&1&&(V.$$scope={dirty:M,ctx:h}),e.$set(V);const E={};M&1&&(E.$$scope={dirty:M,ctx:h}),i.$set(E);const I={};M&1&&(I.$$scope={dirty:M,ctx:h}),$.$set(I);const k={};M&1&&(k.$$scope={dirty:M,ctx:h}),D.$set(k)},i(h){P||(v(e.$$.fragment,h),v(i.$$.fragment,h),v($.$$.fragment,h),v(D.$$.fragment,h),P=!0)},o(h){g(e.$$.fragment,h),g(i.$$.fragment,h),g($.$$.fragment,h),g(D.$$.fragment,h),P=!1},d(h){h&&r(t),p(e),p(i),p($),p(D)}}}function ht(o){let t=`
        // Enum pour la Factory
enum AnimalType {
    DOG,
    MESANGE,
    PENGUIN
}

// Factory pour créer des instances d'Animal
public class AnimalFactory {
    public static Animal createAnimal(AnimalType type, String name, String color) {
        switch (type) {
            case DOG:
                return new Dog(name, color);
            case MESANGE:
                return new Mesange(name, color);
            case PENGUIN:
                return new Penguin(name, color);
            default:
                throw new IllegalArgumentException("Unknown animal type");
        }
    }
}
        `,n;return{c(){n=q(t)},l(e){n=y(e,t)},m(e,a){u(e,n,a)},p:w,d(e){e&&r(n)}}}function Ct(o){let t,n;return t=new G({props:{class:"language-java",$$slots:{default:[ht]},$$scope:{ctx:o}}}),{c(){x(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,a){_(t,e,a),n=!0},p(e,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:e}),t.$set(c)},i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){p(t,e)}}}function St(o){let t=`
        
interface Food {
    void consume();
}

// Première classe implémentant Food
public class Meat implements Food {
    @Override
    public [???] [???] {
        System.out.println("Eating meat!");
    }
}

// Deuxième classe implémentant Food
public class Fruit implements Food {
    @Override
    public [???]  [???] {
        System.out.println("Eating fruit!");
    }
}


        `,n;return{c(){n=q(t)},l(e){n=y(e,t)},m(e,a){u(e,n,a)},p:w,d(e){e&&r(n)}}}function At(o){let t,n;return t=new G({props:{class:"language-java",$$slots:{default:[St]},$$scope:{ctx:o}}}),{c(){x(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,a){_(t,e,a),n=!0},p(e,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:e}),t.$set(c)},i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){p(t,e)}}}function Pt(o){let t=`
        
public class Main {
    public static void main(String[] args) {
        Animal dog = AnimalFactory.createAnimal(AnimalType.DOG, "Buddy", "Brown");
        Animal mesange = AnimalFactory.createAnimal(AnimalType.MESANGE, "Chirpy", "Blue");
        Animal penguin = AnimalFactory.createAnimal(AnimalType.PENGUIN, "Pingu", "Black and White");

        [???][] animals = {dog, mesange, penguin};

        [???][] foods = {new Meat(), new Fruit()};

        for ([???] animal : animals) {
            System.out.println(animal); 
            for ([???] food : foods) {
                [???] consumed = animal.canBeConsumed(food);
                if (consumed) {
                    System.out.println(animal.getName() + " eats the " + food.getClass().getSimpleName().toLowerCase() + ".");
                    food.consume();
                } else {
                    System.out.println(animal.getName() + " doesn't eat the " + food.getClass().getSimpleName().toLowerCase() + ".");
                }
                System.out.println(); 
            }
            System.out.println(); 
            animal.makeSound();
            if (animal instanceof [???]) {
                (([???]) animal).fetch();
            } else if (animal instanceof [???]) {
                (([???]) animal).fly();
            }
        }
    }
}

        `,n;return{c(){n=q(t)},l(e){n=y(e,t)},m(e,a){u(e,n,a)},p:w,d(e){e&&r(n)}}}function Nt(o){let t,n;return t=new G({props:{class:"language-java",$$slots:{default:[Pt]},$$scope:{ctx:o}}}),{c(){x(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,a){_(t,e,a),n=!0},p(e,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:e}),t.$set(c)},i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){p(t,e)}}}function Bt(o){let t,n="Questions",e,a,c=`<li>Pourquoi on ne fait pas de set sur la couleur ?
                <ul><li class="fragment">Parce qu&#39;elle est marquée <code>final</code></li></ul></li> <li>Que peut manger le pingouin d&#39;après ce code ?
                <ul><li class="fragment">Tout ce qui est viande ou fruit</li></ul></li> <li>Pourquoi la méthode <code>canBeConsumed</code> est-elle abstraite dans <code>Animal</code> mais
                implémentée dans les sous-classes ?
                <ul><li class="fragment">Parce que chaque type d&#39;animal a des règles spécifiques pour déterminer ce
                        qu&#39;il peut consommer.</li></ul></li> <li>Pourquoi <code>IVoler</code> est une interface et non une classe abstraite ?
                <ul><li class="fragment">Parce qu&#39;elle représente un comportement transversal qui peut être partagé par
                        différentes hiérarchies de classes.</li></ul></li> <li>Pourquoi la classe <code>Penguin</code> n&#39;implémente-t-elle pas <code>IVoler</code> ?
                <ul><li class="fragment">Parce que les pingouins ne volent pas, donc ils ne doivent pas avoir la méthode
                        <code>fly</code>.</li></ul></li>`;return{c(){t=B("h2"),t.textContent=n,e=S(),a=B("ul"),a.innerHTML=c},l(i){t=N(i,"H2",{"data-svelte-h":!0}),F(t)!=="svelte-bo460d"&&(t.textContent=n),e=C(i),a=N(i,"UL",{"data-svelte-h":!0}),F(a)!=="svelte-1njspod"&&(a.innerHTML=c)},m(i,m){u(i,t,m),u(i,e,m),u(i,a,m)},p:w,d(i){i&&(r(t),r(e),r(a))}}}function Mt(o){let t,n="Questions",e,a,c=`<li>Pourquoi la méthode <code>fetch</code> n&#39;est-elle pas définie dans <code>Animal</code> ?
                    <ul><li class="fragment">Parce que tous les animaux ne savent pas rapporter des objets, cette
                            méthode est spécifique aux chiens.</li></ul></li> <li>Pourquoi utiliser une énumération <code>AnimalType</code> dans la factory au lieu de simples chaînes
                    de caractères ?
                    <ul><li class="fragment">Pour éviter les erreurs de saisie et garantir un ensemble limité de types
                            d&#39;animaux valides.</li></ul></li> <li>Pourquoi la méthode <code>consume</code> de <code>Food</code> est-elle abstraite ?
                    <ul><li class="fragment">Parce que chaque type de nourriture a une manière spécifique d&#39;être
                            consommée.</li></ul></li> <li>Pourquoi la méthode <code>toString</code> est-elle redéfinie dans <code>Animal</code> ?
                    <ul><li class="fragment">Pour fournir une représentation textuelle utile des objets
                            <code>Animal</code>, incluant leur nom et leur couleur.</li></ul></li> <li>Pourquoi la méthode <code>makeSound</code> est-elle redéfinie dans chaque sous-classe ?
                    <ul><li class="fragment">Parce que chaque animal a un son unique qui le caractérise.</li></ul></li>`;return{c(){t=B("h2"),t.textContent=n,e=S(),a=B("ul"),a.innerHTML=c},l(i){t=N(i,"H2",{"data-svelte-h":!0}),F(t)!=="svelte-bo460d"&&(t.textContent=n),e=C(i),a=N(i,"UL",{"data-svelte-h":!0}),F(a)!=="svelte-1c208t4"&&(a.innerHTML=c)},m(i,m){u(i,t,m),u(i,e,m),u(i,a,m)},p:w,d(i){i&&(r(t),r(e),r(a))}}}function wt(o){let t,n;return t=new O({props:{$$slots:{default:[Mt]},$$scope:{ctx:o}}}),{c(){x(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,a){_(t,e,a),n=!0},p(e,a){const c={};a&1&&(c.$$scope={dirty:a,ctx:e}),t.$set(c)},i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){p(t,e)}}}function Dt(o){let t,n="Correction";return{c(){t=B("h3"),t.textContent=n},l(e){t=N(e,"H3",{"data-svelte-h":!0}),F(t)!=="svelte-1e01wxw"&&(t.textContent=n)},m(e,a){u(e,t,a)},p:w,d(e){e&&r(t)}}}function Ot(o){let t=`
        
// Classe abstraite principale
public abstract class Animal {
    private String name;
    private final String color;

    public Animal(String name, String color) {
        this.name = name;
        this.color = color;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getColor() {
        return color;
    }

    // Méthode abstraite à implémenter dans les classes dérivées
    public abstract void makeSound();

    // Méthode canBeConsumed pour vérifier si l'animal peut consommer la nourriture
    public abstract boolean canBeConsumed(Food food);

    @Override
    public String toString() {
        return "Name: " + name + ", Color: " + color;
    }
}

// Interface IVoler
public interface IVoler {
    void fly();
}

// Classe concrète dérivée de Animal
public class Dog extends Animal {
    public Dog(String name, String color) {
        super(name, color);
    }

    @Override
    public void makeSound() {
        System.out.println(getName() + " says: Woof!");
    }

    // Méthode spécifique à Dog
    public void fetch() {
        System.out.println(getName() + " is fetching the ball!");
    }

    @Override
    public boolean canBeConsumed(Food food) {
        return food instanceof Meat;
    }
}

// Classe abstraite dérivée de Animal avec des implémentations concrètes
public abstract class Bird extends Animal {
    public Bird(String name, String color) {
        super(name, color);
    }

    @Override
    public void makeSound() {
        System.out.println(getName() + " says: Cui cui!");
    }

    @Override
    public boolean canBeConsumed(Food food) {
        return food instanceof Fruit;
    }
}

// Implémentation concrète de Bird
public class Mesange extends Bird implements IVoler {
    public Mesange(String name, String color) {
        super(name, color);
    }

    @Override
    public void makeSound() {
        System.out.println(getName() + " says: Cui cui!");
    }

    @Override
    public void fly() {
        System.out.println(getName() + " is flying!");
    }

    @Override
    public boolean canBeConsumed(Food food) {
        return food instanceof Meat || food instanceof Fruit;
    }
}

// Implémentation concrète de Bird avec une surcharge spécifique
public class Penguin extends Bird {
    public Penguin(String name, String color) {
        super(name, color);
    }

    @Override
    public void makeSound() {
        System.out.println(getName() + " says: Honk!");
    }
}

// Enum pour la Factory
enum AnimalType {
    DOG,
    MESANGE,
    PENGUIN
}

// Factory pour créer des instances d'Animal
public class AnimalFactory {
    public static Animal createAnimal(AnimalType type, String name, String color) {
        switch (type) {
            case DOG:
                return new Dog(name, color);
            case MESANGE:
                return new Mesange(name, color);
            case PENGUIN:
                return new Penguin(name, color);
            default:
                throw new IllegalArgumentException("Unknown animal type");
        }
    }
}

// Interface commune pour d'autres classes
interface Food {
    void consume();
}

// Première classe implémentant Food
public class Meat implements Food {
    @Override
    public void consume() {
        System.out.println("Eating meat!");
    }
}

// Deuxième classe implémentant Food
public class Fruit implements Food {
    @Override
    public void consume() {
        System.out.println("Eating fruit!");
    }
}

// Classe de test pour démontrer le fonctionnement
public class Main {
    public static void main(String[] args) {
        Animal dog = AnimalFactory.createAnimal(AnimalType.DOG, "Buddy", "Brown");
        Animal mesange = AnimalFactory.createAnimal(AnimalType.MESANGE, "Chirpy", "Blue");
        Animal penguin = AnimalFactory.createAnimal(AnimalType.PENGUIN, "Pingu", "Black and White");

        Animal[] animals = {dog, mesange, penguin};

        Food[] foods = {new Meat(), new Fruit()};

        for (Animal animal : animals) {
            System.out.println(animal); // Affichage de l'animal avant les repas
            for (Food food : foods) {
                boolean consumed = animal.canBeConsumed(food);
                if (consumed) {
                    System.out.println(animal.getName() + " eats the " + food.getClass().getSimpleName().toLowerCase() + ".");
                    food.consume();
                } else {
                    System.out.println(animal.getName() + " doesn't eat the " + food.getClass().getSimpleName().toLowerCase() + ".");
                }
                System.out.println(); // Saut de ligne entre chaque aliment
            }
            System.out.println(); // Deux sauts de ligne entre chaque animal
            animal.makeSound();
            if (animal instanceof Dog) {
                ((Dog) animal).fetch();
            } else if (animal instanceof IVoler) {
                ((IVoler) animal).fly();
            }
        }
    }
}

        `,n;return{c(){n=q(t)},l(e){n=y(e,t)},m(e,a){u(e,n,a)},p:w,d(e){e&&r(n)}}}function Ft(o){let t,n,e;return n=new G({props:{class:"language-java",$$slots:{default:[Ot]},$$scope:{ctx:o}}}),{c(){t=B("div"),x(n.$$.fragment),this.h()},l(a){t=N(a,"DIV",{style:!0});var c=H(t);b(n.$$.fragment,c),c.forEach(r),this.h()},h(){ve(t,"overflow","auto"),ve(t,"max-height","100vh")},m(a,c){u(a,t,c),_(n,t,null),e=!0},p(a,c){const i={};c&1&&(i.$$scope={dirty:c,ctx:a}),n.$set(i)},i(a){e||(v(n.$$.fragment,a),e=!0)},o(a){g(n.$$.fragment,a),e=!1},d(a){a&&r(t),p(n)}}}function yt(o){let t,n=`\r
Name: Buddy, Color: Brown\r
Buddy eats the meat!\r
Eating meat!\r
\r
Buddy eats the fruit!\r
Eating fruit!\r
\r
\r
Buddy says: Woof!\r
Buddy is fetching the ball!\r
\r
Name: Chirpy, Color: Blue\r
Chirpy eats the meat!\r
Eating meat!\r
\r
Chirpy eats the fruit!\r
Eating fruit!\r
\r
\r
Chirpy says: Cui cui!\r
Chirpy is flying!\r
\r
Name: Pingu, Color: Black and White\r
Pingu doesn't eat the meat.\r
\r
Pingu eats the fruit!\r
Eating fruit!\r
\r
\r
Pingu says: Honk!\r
\r
`;return{c(){t=B("pre"),t.textContent=n},l(e){t=N(e,"PRE",{"data-svelte-h":!0}),F(t)!=="svelte-18laalx"&&(t.textContent=n)},m(e,a){u(e,t,a)},p:w,d(e){e&&r(t)}}}function qt(o){let t,n,e,a,c,i,m,A,$,d,f,D,P,h,M,V,E,I,k,se,j,ae,R,le,U,re,z,ie,J,oe,Q,ue,W,ce,K,me,X,de,Y,fe,Z,$e,ee,pe,te,ge;return t=new O({props:{"data-background-color":"white",$$slots:{default:[Qe]},$$scope:{ctx:o}}}),e=new O({props:{$$slots:{default:[We]},$$scope:{ctx:o}}}),c=new O({props:{$$slots:{default:[Xe]},$$scope:{ctx:o}}}),m=new O({props:{$$slots:{default:[Ze]},$$scope:{ctx:o}}}),$=new O({props:{$$slots:{default:[tt]},$$scope:{ctx:o}}}),f=new O({props:{$$slots:{default:[nt]},$$scope:{ctx:o}}}),P=new O({props:{$$slots:{default:[at]},$$scope:{ctx:o}}}),M=new O({props:{$$slots:{default:[lt]},$$scope:{ctx:o}}}),E=new O({props:{$$slots:{default:[it]},$$scope:{ctx:o}}}),k=new O({props:{$$slots:{default:[ot]},$$scope:{ctx:o}}}),j=new O({props:{$$slots:{default:[ct]},$$scope:{ctx:o}}}),R=new O({props:{$$slots:{default:[mt]},$$scope:{ctx:o}}}),U=new O({props:{$$slots:{default:[ft]},$$scope:{ctx:o}}}),z=new O({props:{$$slots:{default:[pt]},$$scope:{ctx:o}}}),J=new O({props:{$$slots:{default:[xt]},$$scope:{ctx:o}}}),Q=new O({props:{$$slots:{default:[Ct]},$$scope:{ctx:o}}}),W=new O({props:{$$slots:{default:[At]},$$scope:{ctx:o}}}),K=new O({props:{$$slots:{default:[Nt]},$$scope:{ctx:o}}}),X=new O({props:{$$slots:{default:[Bt]},$$scope:{ctx:o}}}),Y=new O({props:{$$slots:{default:[wt]},$$scope:{ctx:o}}}),Z=new O({props:{$$slots:{default:[Dt]},$$scope:{ctx:o}}}),ee=new O({props:{$$slots:{default:[Ft]},$$scope:{ctx:o}}}),te=new O({props:{$$slots:{default:[yt]},$$scope:{ctx:o}}}),{c(){x(t.$$.fragment),n=S(),x(e.$$.fragment),a=S(),x(c.$$.fragment),i=S(),x(m.$$.fragment),A=S(),x($.$$.fragment),d=S(),x(f.$$.fragment),D=S(),x(P.$$.fragment),h=S(),x(M.$$.fragment),V=S(),x(E.$$.fragment),I=S(),x(k.$$.fragment),se=S(),x(j.$$.fragment),ae=S(),x(R.$$.fragment),le=S(),x(U.$$.fragment),re=S(),x(z.$$.fragment),ie=S(),x(J.$$.fragment),oe=S(),x(Q.$$.fragment),ue=S(),x(W.$$.fragment),ce=S(),x(K.$$.fragment),me=S(),x(X.$$.fragment),de=S(),x(Y.$$.fragment),fe=S(),x(Z.$$.fragment),$e=S(),x(ee.$$.fragment),pe=S(),x(te.$$.fragment)},l(s){b(t.$$.fragment,s),n=C(s),b(e.$$.fragment,s),a=C(s),b(c.$$.fragment,s),i=C(s),b(m.$$.fragment,s),A=C(s),b($.$$.fragment,s),d=C(s),b(f.$$.fragment,s),D=C(s),b(P.$$.fragment,s),h=C(s),b(M.$$.fragment,s),V=C(s),b(E.$$.fragment,s),I=C(s),b(k.$$.fragment,s),se=C(s),b(j.$$.fragment,s),ae=C(s),b(R.$$.fragment,s),le=C(s),b(U.$$.fragment,s),re=C(s),b(z.$$.fragment,s),ie=C(s),b(J.$$.fragment,s),oe=C(s),b(Q.$$.fragment,s),ue=C(s),b(W.$$.fragment,s),ce=C(s),b(K.$$.fragment,s),me=C(s),b(X.$$.fragment,s),de=C(s),b(Y.$$.fragment,s),fe=C(s),b(Z.$$.fragment,s),$e=C(s),b(ee.$$.fragment,s),pe=C(s),b(te.$$.fragment,s)},m(s,l){_(t,s,l),u(s,n,l),_(e,s,l),u(s,a,l),_(c,s,l),u(s,i,l),_(m,s,l),u(s,A,l),_($,s,l),u(s,d,l),_(f,s,l),u(s,D,l),_(P,s,l),u(s,h,l),_(M,s,l),u(s,V,l),_(E,s,l),u(s,I,l),_(k,s,l),u(s,se,l),_(j,s,l),u(s,ae,l),_(R,s,l),u(s,le,l),_(U,s,l),u(s,re,l),_(z,s,l),u(s,ie,l),_(J,s,l),u(s,oe,l),_(Q,s,l),u(s,ue,l),_(W,s,l),u(s,ce,l),_(K,s,l),u(s,me,l),_(X,s,l),u(s,de,l),_(Y,s,l),u(s,fe,l),_(Z,s,l),u(s,$e,l),_(ee,s,l),u(s,pe,l),_(te,s,l),ge=!0},p(s,[l]){const _e={};l&1&&(_e.$$scope={dirty:l,ctx:s}),t.$set(_e);const be={};l&1&&(be.$$scope={dirty:l,ctx:s}),e.$set(be);const xe={};l&1&&(xe.$$scope={dirty:l,ctx:s}),c.$set(xe);const he={};l&1&&(he.$$scope={dirty:l,ctx:s}),m.$set(he);const Ce={};l&1&&(Ce.$$scope={dirty:l,ctx:s}),$.$set(Ce);const Se={};l&1&&(Se.$$scope={dirty:l,ctx:s}),f.$set(Se);const Ae={};l&1&&(Ae.$$scope={dirty:l,ctx:s}),P.$set(Ae);const Pe={};l&1&&(Pe.$$scope={dirty:l,ctx:s}),M.$set(Pe);const Ne={};l&1&&(Ne.$$scope={dirty:l,ctx:s}),E.$set(Ne);const Be={};l&1&&(Be.$$scope={dirty:l,ctx:s}),k.$set(Be);const Me={};l&1&&(Me.$$scope={dirty:l,ctx:s}),j.$set(Me);const we={};l&1&&(we.$$scope={dirty:l,ctx:s}),R.$set(we);const De={};l&1&&(De.$$scope={dirty:l,ctx:s}),U.$set(De);const Oe={};l&1&&(Oe.$$scope={dirty:l,ctx:s}),z.$set(Oe);const Fe={};l&1&&(Fe.$$scope={dirty:l,ctx:s}),J.$set(Fe);const ye={};l&1&&(ye.$$scope={dirty:l,ctx:s}),Q.$set(ye);const qe={};l&1&&(qe.$$scope={dirty:l,ctx:s}),W.$set(qe);const Ee={};l&1&&(Ee.$$scope={dirty:l,ctx:s}),K.$set(Ee);const ke={};l&1&&(ke.$$scope={dirty:l,ctx:s}),X.$set(ke);const Le={};l&1&&(Le.$$scope={dirty:l,ctx:s}),Y.$set(Le);const Ve={};l&1&&(Ve.$$scope={dirty:l,ctx:s}),Z.$set(Ve);const Ie={};l&1&&(Ie.$$scope={dirty:l,ctx:s}),ee.$set(Ie);const Te={};l&1&&(Te.$$scope={dirty:l,ctx:s}),te.$set(Te)},i(s){ge||(v(t.$$.fragment,s),v(e.$$.fragment,s),v(c.$$.fragment,s),v(m.$$.fragment,s),v($.$$.fragment,s),v(f.$$.fragment,s),v(P.$$.fragment,s),v(M.$$.fragment,s),v(E.$$.fragment,s),v(k.$$.fragment,s),v(j.$$.fragment,s),v(R.$$.fragment,s),v(U.$$.fragment,s),v(z.$$.fragment,s),v(J.$$.fragment,s),v(Q.$$.fragment,s),v(W.$$.fragment,s),v(K.$$.fragment,s),v(X.$$.fragment,s),v(Y.$$.fragment,s),v(Z.$$.fragment,s),v(ee.$$.fragment,s),v(te.$$.fragment,s),ge=!0)},o(s){g(t.$$.fragment,s),g(e.$$.fragment,s),g(c.$$.fragment,s),g(m.$$.fragment,s),g($.$$.fragment,s),g(f.$$.fragment,s),g(P.$$.fragment,s),g(M.$$.fragment,s),g(E.$$.fragment,s),g(k.$$.fragment,s),g(j.$$.fragment,s),g(R.$$.fragment,s),g(U.$$.fragment,s),g(z.$$.fragment,s),g(J.$$.fragment,s),g(Q.$$.fragment,s),g(W.$$.fragment,s),g(K.$$.fragment,s),g(X.$$.fragment,s),g(Y.$$.fragment,s),g(Z.$$.fragment,s),g(ee.$$.fragment,s),g(te.$$.fragment,s),ge=!1},d(s){s&&(r(n),r(a),r(i),r(A),r(d),r(D),r(h),r(V),r(I),r(se),r(ae),r(le),r(re),r(ie),r(oe),r(ue),r(ce),r(me),r(de),r(fe),r($e),r(pe)),p(t,s),p(e,s),p(c,s),p(m,s),p($,s),p(f,s),p(P,s),p(M,s),p(E,s),p(k,s),p(j,s),p(R,s),p(U,s),p(z,s),p(J,s),p(Q,s),p(W,s),p(K,s),p(X,s),p(Y,s),p(Z,s),p(ee,s),p(te,s)}}}class Et extends Ge{constructor(t){super(),je(this,t,null,qt,He,{})}}function kt(o){let t,n;return t=new Et({}),{c(){x(t.$$.fragment)},l(e){b(t.$$.fragment,e)},m(e,a){_(t,e,a),n=!0},i(e){n||(v(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){p(t,e)}}}function Lt(o){let t,n,e,a,c;return document.title="Révisions - Alexis PICOT",a=new Ue({props:{$$slots:{default:[kt]},$$scope:{ctx:o}}}),{c(){t=B("link"),n=B("meta"),e=S(),x(a.$$.fragment),this.h()},l(i){const m=Re("svelte-rpuw3k",document.head);t=N(m,"LINK",{rel:!0,href:!0}),n=N(m,"META",{name:!0,content:!0}),m.forEach(r),e=C(i),b(a.$$.fragment,i),this.h()},h(){L(t,"rel","icon"),L(t,"href","https://fav.farm/💻"),L(n,"name","timestamp"),L(n,"content",new Date(1769785299033).toLocaleString())},m(i,m){T(document.head,t),T(document.head,n),u(i,e,m),_(a,i,m),c=!0},p(i,[m]){const A={};m&1&&(A.$$scope={dirty:m,ctx:i}),a.$set(A)},i(i){c||(v(a.$$.fragment,i),c=!0)},o(i){g(a.$$.fragment,i),c=!1},d(i){i&&r(e),r(t),r(n),p(a,i)}}}function Vt(o){return[]}class jt extends Ge{constructor(t){super(),je(this,t,Vt,Lt,He,{})}}export{jt as component,Gt as universal};
