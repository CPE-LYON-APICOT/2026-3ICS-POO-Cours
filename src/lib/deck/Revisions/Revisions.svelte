<script>
	import Code from '../code.svelte'
	import PlantUml from '../plantUml.svelte'
	import Slide from '../slide.svelte'
</script>

<Slide data-background-color="white">
	<h1>Révisions</h1>
</Slide>

<Slide>
	<h2>Exercice 1 : Gestion d'une médiathèque</h2>
</Slide>

<Slide>
	<p>
		Dans cet exercice, on se propose de créer une application qui permet de répertorier l'ensemble
		de nos oeuvres.
	</p>
	<p>
		La ville de Lyon souhaite mettre en avant la culture et vous demande de créer un réseau social
		dans lequel vous pourrez répertorier des oeuvres que vous aimez.
	</p>

	<p>La plateforme doit permettre de répertorier des romans, des livres ou des BD par exemple.</p>

	<div class="fragment">
		<PlantUml
			>{`
            skinparam backgroundColor transparent

            abstract class Livre{}
            class BD extends Livre{}
            class Roman extends Livre{}
            `}</PlantUml
		>
	</div>
</Slide>

<Slide>
	<p>
		Votre application succite un engouement tel que Netflix et Audible vous contactent pour intégrer
		des films et des podcast qui pourront être lus directement sur votre plateforme.
	</p>

	<em>Proposez une solution pour intégrer ces nouvelles fonctionnalités</em>
	<div class="fragment">
		<PlantUml
			>{`
            skinparam backgroundColor transparent
            abstract class Oeuvre{}
            abstract class OeuvreMaterielle extends Oeuvre{}
            abstract class Livre extends OeuvreMaterielle{}
            class BD extends Livre{}
            class Roman extends Livre{}
            abstract class OeuvreNumérique extends Oeuvre{}
            class FilmNetflix extends OeuvreNumérique {}
            class PodcastAudible extends OeuvreNumérique{}

            `}
		</PlantUml>
	</div>
</Slide>
<Slide>
	<p>
		Votre appli à encore plus de succès, mais très vite, on vous reproche de résumer les oeuvres à
		des livres et de donner une part trop importante à la culture écrite et au dématérialisé.
	</p>

	<em>Proposez une solution pour intégrer des Vinyls, des CD, des Mangas et des Peintures</em>

	<div class="fragment">
		<PlantUml>
			{`

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
            abstract class PodcastAudible extends OeuvreNumérique{}`}
		</PlantUml>
	</div>
</Slide>
<Slide>
	<p>
		Il est temps de créer des classes qui représentent les différentes oeuvres que vous avez
		répertoriées.
	</p>
	<em>Créez les classes correspondantes </em>
	<div class="flex flex-row items-center">
		<dl>
			<dt>BD</dt>
			<dd>Asterix</dd>
			<dd>Blacksad</dd>
			<dt>Roman</dt>
			<dd>Harry Potter</dd>
			<dd>Don Quichotte</dd>
			<dt>Manga</dt>
			<dd>Dragon Ball</dd>
			<dt>Vinyl</dt>
			<dd>Dark Side of the Moon (Pink Floyd)</dd>
		</dl>
		<dl>
			<dt>CD</dt>
			<dd>Thriller (Michael Jackson)</dd>
			<dt>Peinture</dt>
			<dd>La Joconde</dd>
			<dd>Lapin anthropomorphe de John Tenniel (Noir et Blanc)</dd>
			<dt>Film Netflix</dt>
			<dd>Psychose</dd>
			<dd>Pulp Fiction</dd>
			<dt>Podcast</dt>
			<dd>Actus du jour</dd>
		</dl>
	</div>
</Slide>
<Slide>
	<PlantUml>
		{`
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
        `}
	</PlantUml>
</Slide>
<Slide>
	<p>Vous souhaitez maintenant créer des filtrages pour afficher les oeuvres par type.</p>
	<em>Il y a le filtre noir et blanc, anthropomorphe, audio et visuel</em>
</Slide>
<Slide>
	<PlantUml>
		{`

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


        `}
	</PlantUml>
</Slide>
<Slide>
	<p>
		Imaginez des fonctionnalités que vous pourriez ajouter à votre application pour la rendre plus
		attractive en vous appuyant sur les interfaces crées précédemment.
	</p>
	<ul>
		<li>Les oeuvres peuvent être adaptées</li>
		<li>Tout ce qui est visuel a un style artistique</li>
		<li>Tout ce qui est écoutable a une durée</li>
		<li>Les peintures ont toutes un support (toile, bois, etc.)</li>
		<li>En fait, les films ont aussi une durée</li>
	</ul>
</Slide>
<Slide>
	<PlantUml>
		{`

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


            `}
	</PlantUml>
</Slide>

<Slide>
	<h2>Exercice 2 : Création d'un programme de gestion d'animaux</h2>
</Slide>

<Slide>
	<PlantUml>
		{`

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


        `}
	</PlantUml>
</Slide>

<Slide>
	<Code class="language-java">
		{`
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
    `}
	</Code>
</Slide>
<Slide>
	<div style="display: grid;grid-template-columns: auto auto auto auto;">
		<div class="fragment">
			<Code class="language-java">
				{`
        
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

        `}
			</Code>
		</div>

		<div class="fragment">
			<Code class="language-java">
				{`
        
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

        `}
			</Code>
		</div>

		<div class="fragment">
			<Code class="language-java">
				{`
        
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

        `}
			</Code>
		</div>

		<div class="fragment">
			<Code class="language-java">
				{`
        
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


        `}
			</Code>
		</div>
	</div>
</Slide>
<Slide>
	<Code class="language-java">
		{`
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
        `}
	</Code>
</Slide>
<Slide>
	<Code class="language-java">
		{`
        
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


        `}
	</Code>
</Slide>
<Slide>
	<Code class="language-java">
		{`
        
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

        `}
	</Code>
</Slide>
<Slide>
	<h2>Questions</h2>
	<ul>
		<li>
			Pourquoi on ne fait pas de set sur la couleur ?
			<ul>
				<li class="fragment">Parce qu'elle est marquée <code>final</code></li>
			</ul>
		</li>
		<li>
			Que peut manger le pingouin d'après ce code ?
			<ul>
				<li class="fragment">Tout ce qui est viande ou fruit</li>
			</ul>
		</li>

		<li>
			Pourquoi la méthode <code>canBeConsumed</code> est-elle abstraite dans <code>Animal</code>
			mais implémentée dans les sous-classes ?
			<ul>
				<li class="fragment">
					Parce que chaque type d'animal a des règles spécifiques pour déterminer ce qu'il peut
					consommer.
				</li>
			</ul>
		</li>
		<li>
			Pourquoi <code>IVoler</code> est une interface et non une classe abstraite ?
			<ul>
				<li class="fragment">
					Parce qu'elle représente un comportement transversal qui peut être partagé par différentes
					hiérarchies de classes.
				</li>
			</ul>
		</li>
		<li>
			Pourquoi la classe <code>Penguin</code> n'implémente-t-elle pas <code>IVoler</code> ?
			<ul>
				<li class="fragment">
					Parce que les pingouins ne volent pas, donc ils ne doivent pas avoir la méthode
					<code>fly</code>.
				</li>
			</ul>
		</li>
	</ul>
</Slide>
<Slide>
	<Slide>
		<h2>Questions</h2>
		<ul>
			<li>
				Pourquoi la méthode <code>fetch</code> n'est-elle pas définie dans <code>Animal</code> ?
				<ul>
					<li class="fragment">
						Parce que tous les animaux ne savent pas rapporter des objets, cette méthode est
						spécifique aux chiens.
					</li>
				</ul>
			</li>
			<li>
				Pourquoi utiliser une énumération <code>AnimalType</code> dans la factory au lieu de simples
				chaînes de caractères ?
				<ul>
					<li class="fragment">
						Pour éviter les erreurs de saisie et garantir un ensemble limité de types d'animaux
						valides.
					</li>
				</ul>
			</li>
			<li>
				Pourquoi la méthode <code>consume</code> de <code>Food</code> est-elle abstraite ?
				<ul>
					<li class="fragment">
						Parce que chaque type de nourriture a une manière spécifique d'être consommée.
					</li>
				</ul>
			</li>
			<li>
				Pourquoi la méthode <code>toString</code> est-elle redéfinie dans <code>Animal</code> ?
				<ul>
					<li class="fragment">
						Pour fournir une représentation textuelle utile des objets
						<code>Animal</code>, incluant leur nom et leur couleur.
					</li>
				</ul>
			</li>
			<li>
				Pourquoi la méthode <code>makeSound</code> est-elle redéfinie dans chaque sous-classe ?
				<ul>
					<li class="fragment">Parce que chaque animal a un son unique qui le caractérise.</li>
				</ul>
			</li>
		</ul>
	</Slide>
</Slide>
<Slide>
	<h3>Correction</h3>
</Slide>
<Slide>
	<div style="overflow: auto; max-height:100vh;">
		<Code class="language-java">
			{`
        
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

        `}
		</Code>
	</div>
</Slide>
<Slide>
	<pre>

Name: Buddy, Color: Brown
Buddy eats the meat!
Eating meat!

Buddy eats the fruit!
Eating fruit!


Buddy says: Woof!
Buddy is fetching the ball!

Name: Chirpy, Color: Blue
Chirpy eats the meat!
Eating meat!

Chirpy eats the fruit!
Eating fruit!


Chirpy says: Cui cui!
Chirpy is flying!

Name: Pingu, Color: Black and White
Pingu doesn't eat the meat.

Pingu eats the fruit!
Eating fruit!


Pingu says: Honk!

</pre>
</Slide>
