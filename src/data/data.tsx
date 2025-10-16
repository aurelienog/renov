
import { FaqEntry, Column, WorkStep, Service, BeforeAfterComparison, TrustStatistic, DetailedService, Project } from '@/lib/models/interfaces';
import Image from 'next/image';

// trust section statistics
import paint from '../../public/assets/icons/paint.svg';
import medal from '../../public/assets/icons/medal.svg';
import hourglass from '../../public/assets/icons/hourglass.svg';
import star from '../../public/assets/icons/star.svg';
import halfStar from '../../public/assets/icons/star-half.svg';

//services images
import autre from '../../public/assets/images/autre.webp';
import revetement from '../../public/assets/images/revetement.webp';
import interieur from '../../public/assets/images/interieur.webp';
import parquet from '../../public/assets/images/parquet.webp';
import preparation from '../../public/assets/images/preparation.webp';
import bois from '../../public/assets/images/bois.webp';
import enduit from '../../public/assets/images/enduit.webp';
import exterieur from '../../public/assets/images/exterieur.webp';

//last projects images 
import transparentImage from '../../public/assets/images/transparentImage.webp';
import murPapierPeint from '../../public/assets/images/projects/murs/papier-peint-living.webp';
import boiserieLiving from '../../public/assets/images/projects/boiseries/poutres2.webp';
import boiseriePeinture from '../../public/assets/images/projects/boiseries/peinture-boiseries.webp';

//timeline icons
import phone from '../../public/assets/icons/phone.svg';
import location from '../../public/assets/icons/location.svg';
import calendar from '../../public/assets/icons/calendar.svg';
import search from  '../../public/assets/icons/search.svg';
import paintRoll from '../../public/assets/icons/paint-roll.svg';
import clipboard from '../../public/assets/icons/clipboard.svg';
import donate  from '../../public/assets/icons/donate.svg';

//FAQ icons
import check from '../../public/assets/icons/check.svg';
import warning from '../../public/assets/icons/warning.svg';
import x from '../../public/assets/icons/x.svg';

//Before-after images
import beforeBedroom from '../../public/assets/images/before-after/before-chambre.webp';
import afterBedroom from '../../public/assets/images/before-after/after-chambre.webp';
import beforeLiving from '../../public/assets/images/before-after/before-studio.webp';
import afterliving from '../../public/assets/images/before-after/after-studio.webp';
import beforeOutdoor from '../../public/assets/images/before-after/before-ext.webp';
import afterOutdoor from '../../public/assets/images/before-after/after-ext.webp';

// detailed services
import murLiving from '../../public/assets/images/projects/murs/papier-peint-living.webp';
import intBedroom from '../../public/assets/images/projects/interieur/horizontal/chambre-deco5.webp';
import enduitBeton from '../../public/assets/images/projects/enduits/beton-cire4.webp';
import extPeinture from '../../public/assets/images/projects/exterieur/peinture-ext.webp';
import boiseriePorte from '../../public/assets/images/projects/boiseries/peinture-porte2.webp';
import solParquet from '../../public/assets/images/projects/sols/parquet-flottant.webp';
import divers from '../../public/assets/images/projects/autre/dressing.webp';

/* Update const columns to modify the comparison chart.
The first {} defines the criteria, the following {} are the elements to compare.
Each key is a line */

export const statistics : TrustStatistic[] = [{
  icon: medal,
  stat: 15,
  information: "ans d'expérience",
  prefix: "+",
  characters: 3
}, {
  icon: paint,
  stat: 400,
  information: " projets réalisés",
  prefix: "+",
  characters: 4
}, {
  icon: [star, star, star, star, halfStar],
  stat: 98,
  information: "de clients satisfaits",
  suffix: "%",
  characters: 4
}, {
  icon: hourglass,
  stat: 100,
  information: " des chantiers livrés à temps",
  suffix: "%",
  characters: 4
}, ]

export const columns: Column[] = [{
  title: '',
  one: 'Expérience & savoir-faire',
  two: 'Qualité & finitions',
  three: 'Conseils & accompagnement',
  four: 'Devis & transparence',
  five: `Délais & organisation`,
  six: 'Peintures & matériaux utilisés',
  seven: 'Tarifs',
  }, {
  title: 'Votre artisan',
  one: <span role='img' aria-label={`Point fort : + de 15 ans d'expérience`}>
  <Image src={check} alt='' width={24} height={24}/>
  + de 15 ans d{`'`}expérience
  </span>,
  two: <span role='img' aria-label={`Point fort : Préparations adaptées & finitions soignées`}>
  <Image src={check} alt='' width={24} height={24}/>
  Préparations adaptées & finitions soignées
  </span>,
  three: <span role='img' aria-label={`Point fort : Proche, disponible, conseils personnalisés`}>
  <Image src={check} alt='' width={24} height={24}/>
  Proche, disponible, conseils personnalisés
  </span>,
  four: <span role='img' aria-label={`Point fort : Devis détaillé, clair et sans surprise`}>
  <Image src={check} alt='' width={24} height={24}/>
  Devis détaillé, clair et sans surprise
  </span>,
  five: <span role='img' aria-label={`Point à nuancer : Planning respecté mais durée totale plus longue pour les gros chantiers (effectif réduit)`}>
  <Image src={warning} alt='' width={24} height={24}/>
  Planning respecté mais durée totale plus longue pour les gros chantiers (effectif réduit)
  </span>,
  six: <span role='img' aria-label={`Point fort : Peintures pro haut/milieu de gamme`}>
  <Image src={check} alt='' width={24} height={24}/>
  Peintures pro haut/milieu de gamme
  </span>,  
  seven: <span role='img' aria-label={`Point à nuancer : Tarif élevé mais cohérent avec la qualité et le temps consacré`}>
  <Image src={warning} alt='' width={24} height={24}/>
  Tarif élevé mais cohérent avec la qualité et le temps consacré
  </span>,
}, {
  title: 'Grande entreprise',
  one: <span role='img' aria-label={`Point à nuancer : Compétences variables selon les équipes`}>
  <Image src={warning} alt='' width={24} height={24}/>
  Compétences variables selon les équipes
  </span>,
  two: <span role='img' aria-label={`Point à nuancer : Méthodes standardisées, peu de souplesse en cas de besoins spécifiques`}>
  <Image src={warning} alt='' width={24} height={24}/>
  Méthodes standardisées, peu de souplesse en cas de besoins spécifiques
  </span>,
  three: <span role='img' aria-label={`Point faible : Relation impersonnelle`}>
  <Image src={x} alt='' width={24} height={24}/>
  Relation impersonnelle
  </span>,
  four: <span role='img' aria-label={`Point fort : Devis détaillé`}>
  <Image src={check} alt='' width={24} height={24}/>
  Devis détaillé
  </span>, 
  five: <span role='img' aria-label={`Point à nuancer : Dépend du planning`}>
  <Image src={warning} alt='' width={24} height={24}/>
  Dépend du planning
  </span>,
  six: <span role='img' aria-label={`Point fort : Peintures de qualité professionnelle`}>
  <Image src={check} alt='' width={24} height={24}/>
  Peintures de qualité professionnelle
  </span>,
  seven: <span role='img' aria-label={`Point à nuancer : Tarif élevé, lié à des frais fixes importants`}>
  <Image src={warning} alt='' width={24} height={24}/>
  Tarif élevé, lié à des frais fixes importants
  </span>, 
}, {
  title: 'Peintre bon marché',
  one: <span role='img' aria-label={`Point à nuancer : Parcours incertain`}>
  <Image src={warning} alt='' width={24} height={24}/>
  Parcours incertain
  </span>,
  two: <span role='img' aria-label={`Point faible : Préparations baclées, qualité et tenue dans le temps incertaine`}>
  <Image src={x} alt='' width={24} height={24}/>
  Préparations baclées, qualité et tenue dans le temps incertaine
  </span>,
  three: <span role='img'  aria-label={`Point à nuancer : Peu ou pas de conseils`}>
  <Image src={warning} alt='' width={24} height={24}/>
  Peu ou pas de conseils
  </span>, 
  four: <span role='img' aria-label={`Point à nuancer :Devis peu détaillé, frais cachés possibles`}>
  <Image src={warning} alt='' width={24} height={24}/>
  Devis peu détaillé, frais cachés possibles
  </span>,
  five: <span role='img' aria-label={`Point fort : Intervention rapide`}>
  <Image src={check} alt='' width={24} height={24}/>
  Intervention rapide
  </span>,
  six: <span role='img' aria-label={`Point faible :Produits souvent bas de gamme`}>
  <Image src={x} alt='' width={24} height={24}/>
  Produits souvent bas de gamme
  </span>,
  seven: <span role='img' aria-label={`Point fort : Tarif attractif, mais souvent au détriment de la qualité`}>
  <Image src={check} alt='' width={24} height={24}/>
  Tarif attractif, mais souvent au détriment de la qualité
  </span>, 
}];

export const faqEntries: FaqEntry[] = [{
  question: "Quels types de travaux proposez-vous ?",
  answer: <>
  <p>Je réalise tous types de travaux de peinture et décoration, pose de revêtements muraux et sols, ainsi que vos travaux divers de rénovation en intérieur comme en extérieur.</p>
  <p>J{`'`}interviens aussi bien chez les particuliers que les professionnels.</p>
  </>
}, {
  question: "Comment choisir la bonne couleur pour mon intérieur ?",
  answer: <>
  <p>Le choix des couleurs dépend de plusieurs facteurs : la luminosité, la taille de la pièce et l{`'`}ambiance que vous souhaitez créer.</p>
  <p>Je vous conseille gratuitement sur les harmonies de teintes et les finitions adaptées. Un nuancier est à votre disposition pour vous aider à visualiser et affiner vos choix.</p>
</>}, {
  question: "Dois-je préparer mon logement avant les travaux ?",
  answer: <>
    <p>Ce n{`'`}est pas nécessaire, je m{`'`}occupe de tout ! Il est néanmoins recommandé de :</p>
    <ul>
      <li>Déplacer les objets fragiles et petits meubles.</li>
      <li>Retirer les rideaux et cadres si possible.</li>
      <li>M{`'`}informer de toute contrainte particulière.</li>
    </ul>
    <p>Une fois la zone de travail libérée, je prends le relais :</p>
    <ul>
      <li>Protection des sols et du mobilier qui ne peut pas être retiré ou déplacé par vos soins.</li>
      <li>Démontage et remise en place en fin de travaux, des luminaires, prises, interrupteurs, poignées de porte, etc.</li>
      <li>Nettoyage complet de la zone de travail une fois les travaux terminés.</li>
    </ul>
  </>
}, {
  question: `Quelle est la durée moyenne d${"'"}un chantier ?`,
  answer: <>
    <p>La durée d{`'`}un chantier dépend de plusieurs facteurs : la surface à rénover, l{`'`}état des supports et le type de travaux à réaliser (préparations, finitions, etc.).</p>
    <p>Cependant pour vous permettre de vous organiser sereinement, je vous communique toujours une durée estimée des travaux dès l{`'`}établissement du devis.</p>
  </>
}, {
  question: "Faut-il quitter son logement pendant les travaux ?",
  answer: <>
  <p>Ce n{`'`}est pas nécessaire ! J{"'"}utilise des peintures sans odeur et j{"'"}organise le chantier pour limiter au maximum les nuisances.</p>
  <p>Je veille notamment à :</p>
  <ul>
    <li>respecter les horaires autorisés pour les travaux.</li>
    <li>rendre les pièces de vie accessibles en fin de journée ou pendant les repas (cuisine, salle de bains…).</li>
  </ul>
  </>}, {
  question: "Travaillez-vous avec des peintures écologiques ?",
  answer: <>
  <p>Oui, la plupart des produits que j{`'`}utilise (enduits, peintures) ont un faible niveau d{`'`}émission et sont classés A+.</p>
  <p>Pour aller plus loin, je propose également des peintures assainissantes détruisant le formaldéhyde dans vos intérieurs.</p>
  </>}, {
  question: `Quel est le prix moyen d${`'`}un chantier de peinture ?`,
  answer: <>
    <p>Le tarif dépend de plusieurs critères :</p>
    <ul>
      <li>La surface à peindre.</li>
      <li>L{`'`}état des murs (préparation nécessaire ou non).</li>
      <li>Le type de peinture et finition choisie.</li>
    </ul>
    <p>Je propose des devis gratuits et transparents. Contactez-moi !</p>
  </>
}, {
  question: "Proposez-vous des facilités de paiement ?",
  answer: <p>Oui, j{`'`}offre la possibilité de paiement en plusieurs fois selon le montant du chantier.</p>
}, {
  question: "Pouvez-vous intervenir rapidement ?",
  answer: <p>Mon planning varie selon la demande. Il est conseillé de réserver votre projet à l{`'`}avance. Contactez-moi pour connaître mes prochaines disponibilités !</p>
}, {
  question: "Comment demander un devis ?",
  answer: <p>Vous pouvez me joindre au numéro suivant : 06 67 23 08 15.</p>
}
]

export const services: Service[] = [ 
  {
    name: 'Revêtements muraux',
    image: revetement,
    rank: 3,
    id: 'mur'
  }, {
    name: 'Revêtements de sols',
    image: parquet,
    rank: 4,
    id: 'sol'
  }, {
    name: 'Rénovation de boiseries',
    image: bois,
    rank: 5,
    id: 'boiserie'  
  }, {
    name: 'Peinture intérieure',
    image: interieur,
    rank:  1,
    id: 'peinture-interieure' 
  }, {
    name: 'Peinture extérieure',
    image: exterieur,
    rank:  2,
    id: 'peinture-exterieure' 
  }, {
    name: 'Préparation des supports',
    image: preparation,
    rank: 6,
    id: ''  
  }, {
    name: 'Enduits décoratifs',
    image: enduit,
    rank: 7,
    id: 'enduit'  
  }, {
    name: 'Rénovations diverses',
    image: autre,
    rank: 8,
    id: 'autre'  
}];

// services descriptions for "prestation" page
export const detailedServices: DetailedService[] = [{
  title: 'Revêtements muraux',
  intro : 'Redonnez du caractère à vos murs avec une pose soignée de revêtements : papier peint, toile de verre ou intissé.',
  details: <>
  <p>Je m{`'`}occupe de tout, de la dépose à la finition :</p>
  <ul>
    <li>Retrait de l{`'`}ancien revêtement et mise en décharge professionnelle</li>
    <li>Préparation du support (rebouchage, enduit, ponçage)</li>
    <li>Application d{`'`}une couche d{"'"}impression</li>
    <li>Pose du nouveau revêtement</li>
  </ul>
  </>,
  result: `Un mur bien préparé, c'est un résultat qui dure.`,
  prestation: 'mur',
  image: murLiving,
  id:'mur',
}, {
  title: 'Peinture intérieure',
  intro : 'Mettez en valeur vos espaces avec une peinture soignée et durable, adaptée à chaque pièce de votre intérieur.',
  details: <>
  <p> Je m{`'`}occupe de tout, du retrait des anciens revêtements à la dernière couche de finition :</p>
  <ul>
    <li>Retrait éventuel des anciens revêtements et mise en décharge professionnelle</li>
    <li>Préparation minutieuse des murs (rebouchage, traitement localisé ou général des fissures, enduit, ponçage)</li>
    <li>Application d{`'`}une couche d{"'"}impression</li>
    <li>Application de 2 couches de peinture acrylique de finition (adaptée au support et à la couleur choisie)</li>
  </ul>
  </>,
  result: 'Une finition nette et élégante pour un intérieur qui vous ressemble.',
    prestation: 'interieur',
  image: intBedroom,
  id:'peinture-interieure',
}, {
  title: 'Enduits décoratifs & peintures à effet',
  intro : 'Pour un intérieur unique, optez pour des textures originales comme le béton ciré, le stuc ou les peintures métallisées.',
  details: <>
  <p> Je m{`'`}occupe de tout, de la préparation du mur aux finitions spécifiques selon le produit :</p>
  <ul>
    <li>Préparation du support (rebouchage, traitement localisé ou général des fissures, enduit, ponçage)</li>
    <li>Application d{`'`}une couche d{"'"}impression</li>
    <li>Application d{`'`}un enduit décoratif en deux couches (béton ciré, stuc, tadelakt, etc.)</li>
    <li>Finitions spécifiques selon le produit (bouche-pore, vernis bi-composant, cire de finition...)</li>
    <li>Application de deux couches de peinture à effet (peinture métalisée, sablée, pailletée)</li>
  </ul>
  </>,
  result: 'Des surfaces qui deviennent de véritables éléments de décoration.',
      prestation: 'enduit',
  image: enduitBeton,
  id:'enduit',
  cta: `d'enduits décoratifs & peintures à effet`,
}, {
  title: 'Peinture extérieure',
  intro : `Protégez et valorisez vos façades, boiseries ou ferronneries avec des peintures durables, adaptées à l'extérieur.`,
  details: <>
  <p>Je m{`'`}occupe de tout, de la préparation du support aux deux couches de finition adaptées à l{`'`}extérieur :</p>
  <ul>
    <li>Préparation des supports (rebouchage, ponçage, traitement spécifique)</li>
    <li>Application de sous-couche technique (fongicide, anti-rouille…)</li>
    <li>Application de deux couches de peinture acrylique ou glycero de finition adaptée au support (Microporeuse, hydrofuge...)</li>
  </ul>
  </>,
  result: 'Une protection efficace, un rendu impeccable.',
      prestation: 'exterieur',
  image: extPeinture,
  id:'peinture-exterieure',
}, {
  title: 'Rénovation de boiseries',
  intro : 'Redonnez vie à vos boiseries intérieures ou extérieures : portes, volets, escaliers, meubles...',
  details: <>
  <p>Je m{`'`}occupe de tout, du ponçage à la finition selon le type de bois et son usage :</p>
  <ul>
    <li>Ponçage, rebouchage, traitement du bois</li>
    <li>Sous-couche selon la finition souhaitée (lasure, vernis, vitrificateur)</li>
    <li>Finition en 2 couches résistantes et esthétiques (Lasure à haute resistance aux rayons U.V en exterieur, vitrificateur au sol ou escalier en intérieur, Vernis sur mobilier)</li>
  </ul>
  </>,
  result: 'Un travail soigné pour préserver et valoriser vos boiseries.',
      prestation: 'boiserie',
  image: boiseriePorte,
  id:'boiserie'
}, {
  title: 'Revêtements de sol',
  intro : `Parquet, vinyle, stratifié… Je vous accompagne dans le choix et la pose d'un sol adapté à vos besoins.`,
  details: <>
  <p>Je m{"'"}occupe de tout, de l{"'"}enlèvement de l{"'"}ancien sol à la pose des finitions comme les plinthes :</p>
  <ul>
    <li>Retrait de l{"'"}ancien sol et mise en décharge professionnelle</li>
    <li>Préparation du support (fixateur + ragréage)</li>
    <li>Pose du nouveau revêtement (parquet, sol stratifié, lames vyniles...)</li>
    <li>Pose de plinthes & barres de seuil assorties ou à peindre</li>
  </ul>
  </>,
  result: 'Un sol résistant, confortable et esthétique.',
      prestation: 'sol',
  image: solParquet,
  id:'sol',
}, {
  title: 'Travaux divers de rénovation',
  intro : 'Des ajustements utiles pour finaliser votre projet :',
  details: <>
  <p>Voici un aperçu des services proposés pour répondre à vos besoins complémentaires:</p>
  <ul>
    <li>Électricité : modification à partir du réseau existant (déplacement de prises ou luminaires ), remplacement d{"'"}appareillages</li>
    <li>Plâtrerie : création, modification, suppression de cloisons en placostyl ou carreaux de plâtre. <span>Création d{"'"}ouvertures (cloison uniquement) ou de faux plafonds suspendus/autoportants</span> </li>
    <li>Menuiserie : installations diverses : portes de placard battantes/coulissantes, coffrages, rangements, portes de placard. Création de coffrages/aménagements sur-mesure.</li>
    <li>Autres : pose de luminaires, étagères, petits aménagements</li>
  </ul>
  </>,
  result: 'Des finitions complètes pour un intérieur fonctionnel et harmonieux.',
      prestation: 'autre',
  image: divers,
  id: 'autre',
  cta: ' '
}
]

//the second element of the array is a tranparent png, which makes revealing the first element take longer
export const lastProjects: Project[] = [{
  image: murPapierPeint,
  service: 'mur',
  description: `Photo d'une salle à manger. Le mur principal est recouvert d'un papier peint beige clair à motif linéaire évoquant des herbes hautes, créant une ambiance naturelle et sereine.`
}, {
  image: transparentImage,
  service: null,
  description: ``
}, {
  image: boiseriePeinture,
  service: null,
  description:`Photo d'un palier d'escalier. On distingue immédiatement les boiseries peintes en blanc immaculé, particulièrement la balustrade de l'escalier. La peinture est fraîche et uniforme, suggérant une rénovation soignée qui donne un aspect propre et moderne à l'ensemble.`
}, {
  image: transparentImage,
  service: null,
  description:``
}, {
  image: boiserieLiving,
  service: null,
  description: `Photo d'un intérieur rénové dont le charme réside dans ses poutres apparentes. Ces poutres en bois, d'une teinte marron chaleureuse, ont été soigneusement mises en valeur par une peinture et un traitement récent. Elles contrastent agréablement avec le plafond blanc et illuminent l'espace, témoignant d'un travail de rénovation soigné qui a su préserver et sublimer le cachet rustique de la pièce.`
}, {
  image: transparentImage,
  service: null,
  description: ``
}, ];

export const workSteps: WorkStep[] = [{
  name: 'Prise de contact',
  description: 'Vous me contactez par téléphone ou via le formulaire en ligne pour me parler de votre projet. Nous échangeons brièvement pour comprendre vos besoins.',
  icon : phone,

}, {
  name: 'Visite sur place',
  description: `Nous convenons d${"'"}un rendez-vous à votre domicile pour évaluer précisément les surfaces à peindre, vos envies (teintes, finitions…), et les éventuelles contraintes techniques.`,
  icon: location,
}, {
  name: 'Devis personnalisé & transparent',
  description: 'Sous quelques jours, vous recevez un devis clair, détaillé et sans surprise. Il comprend le choix des matériaux, le planning prévisionnel, et le coût total.',
  icon: clipboard
}, {
  name: 'Validation & planification',
  description: 'Après votre accord, nous fixons ensemble la date de début des travaux. Vous êtes tenu(e) informé(e) de chaque étape.',
  icon: calendar,
}, {
  name: 'Réalisation des travaux',
  description: 'Les travaux sont réalisés avec soin, dans le respect des délais et de votre intérieur. Je protège vos meubles et la zone de chantier est nettoyée chaque jour.',
  icon : paintRoll,
}, {
  name: 'Contrôle qualité & finitions',
  description: 'Avant la remise, une vérification minutieuse est faite. Je corrige les moindres détails si nécessaire pour un résultat impeccable.',
  icon : search,
}, {
  name: 'Livraison du chantier & suivi',
  description: 'Le chantier est livré propre et finalisé. Je reste disponible en cas de retouche ou de question après la prestation.',
  icon: donate
}]

export const beforeAfterPhotos: BeforeAfterComparison[] = [{
  name: `d'un salon`,
  before: beforeLiving,
  after: afterliving,
  descriptionBefore: `La pièce est en très mauvais état. Les murs présentent des signes de dégradation avec des restes de papiers peints et d'enduits arrachés. Le plafond est tout aussi abîmé. Le sol est recouvert d'une bâche de protection mais il sera également rénové. 
`, 
  descriptionAfter: `Les murs et le plafond sont fraîchement peints d'une couleur crème claire, donnant une impression de propreté et de luminosité. Le sol est recouvert d'un parquet en chevron brun foncé et brillant, qui apporte une touche d'élégance et de classicisme à la pièce. L'état général est impeccable et suggère un espace neuf et prêt à être aménagé.`
},{
  name: `d'une chambre`,
  before: beforeBedroom,
  after: afterBedroom,
  descriptionBefore: `La chambre est dans un état de délabrement avancé. Les murs sont recouverts d'un vieux papier peint sale et détérioré, présentant des tâches importantes et des signes d'humidité. Le sol est recouvert d'une moquette rouge usagée.`, 
  descriptionAfter: 'Chambre rénovée avec une peinture irréprochable : un mur beige clair et un autre vert foncé créent un contraste subtil et élégant. Plafond uniformément peint, plinthes blanches parfaitement alignées, et sol en parquet clair posé avec soin pour une finition soignée.'
},
{
  name: 'de boiseries extérieures',
  before: beforeOutdoor,
  after: afterOutdoor,
  descriptionBefore: `Façade extérieure d'une maison montrant des balustrades et boiseries en mauvais état, avec une peinture écaillée ou décolorée laissant apparaître des zones de bois brut.`, 
  descriptionAfter: 'Balustrades et volets fraîchement repeints en blanc, offrant un aspect propre, soigné et impeccable.'
},]
