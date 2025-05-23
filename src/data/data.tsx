
import { FaqEntry, Column, WorkStep, Service, BeforeAfterComparison, TrustStatistic, DetailedService } from '@/models/interfaces';
import Image, { StaticImageData } from 'next/image';

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
import wood from '../../public/assets/images/wood.webp';
import realisation from '../../public/assets/images/realisation.webp';
import indoor from '../../public/assets/images/indoor.webp';

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
import beforeToit from '../../public/assets/images/toit-avant.webp';
import afterToit from '../../public/assets/images/toit-apres.webp';
import beforeLiving from '../../public/assets/images/livingBefore.webp';
import afterliving from '../../public/assets/images/livingAfter.webp';
import bedroomBefore from '../../public/assets/images/bedroomBefore.webp';
import bedroomAfter from '../../public/assets/images/bedroomAfter.webp';

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
  one: 'Expérience',
  two: 'Qualité des finitions',
  three: 'Accompagnement & conseils',
  four: 'Devis et transparence',
  five: 'Flexibilité & relation client',
  six: 'Matériaux utilisés',
  seven: 'Respect des délais',
  eight: 'Suivi après travaux'
  }, {
  title: 'Votre artisan',
  one: <>
  <Image src={check} alt='' width={24} height={24}/>
  <span>+ de 15 ans d’expérience</span>
  </>,
  two: <>
  <Image src={check} alt='' width={24} height={24}/>
  <span>Travail soigné et sur-mesure</span>
  </>,
  three: <>
  <Image src={check} alt='' width={24} height={24}/>
  <span>Conseils personnalisés (couleurs, finitions)</span>
  </>,
  four: <>
  <Image src={check} alt='' width={24} height={24}/>
  <span>Devis clair, sans surprise</span>
  </>,
  five: <>
  <Image src={check} alt='' width={24} height={24}/>
  <span>Relation directe, à l’écoute</span>
  </>,
  six: <>
  <Image src={check} alt='' width={24} height={24}/>
  <span>Peintures de qualité pro</span>
  </>,
  seven: <>
  <Image src={check} alt='' width={24} height={24}/>
  <span>Engagement respecté</span>
  </>,
  eight: <>
  <Image src={check} alt='' width={24} height={24}/>
  <span>Garantie et retouches si besoin</span>
  </>,
}, {
  title: 'Grande entreprise',
  one: <>
  <Image src={warning} alt='' width={24} height={24}/>
  <span>Variable selon les employés</span>
  </>,
  two: <>
  <Image src={warning} alt='' width={24} height={24}/>
  <span>Standardisé, dépend des équipes</span>
  </>,
  three: <>
  <Image src={warning} alt='' width={24} height={24}/>
  <span>Souvent impersonnel</span>
  </>,
  four: <>
  <Image src={warning} alt='' width={24} height={24}/>
  <span>Frais cachés possibles</span>
  </>, 
  five: <>
  <Image src={warning} alt='' width={24} height={24}/>
  <span>Délais longs, peu de personnalisation</span>
  </>,
  six: <>
  <Image src={warning} alt='' width={24} height={24}/>
  <span>Qualité variable selon le contrat</span>
  </>,
  seven: <>
  <Image src={warning} alt='' width={24} height={24}/>
  <span>Dépend du planning chargé</span>
  </>, 
  eight: <>
  <Image src={warning} alt='' width={24} height={24}/>
  <span>Service après-vente variable</span>
  </>, 
}, {
  title: 'Peintre Low-Cost',
  one: <>
  <Image src={x} alt='' width={24} height={24}/>
  <span>Manque d’expérience</span>
  </>,
  two: <>
  <Image src={x} alt='' width={24} height={24}/>
  <span>Peuvent être bâclées pour gagner du temps</span>
  </>,
  three: <>
  <Image src={x} alt='' width={24} height={24}/>
  <span>Peu ou pas de conseils</span>
  </>, 
  four: <>
  <Image src={x} alt='' width={24} height={24}/>
  <span>Tarifs très bas mais qualité incertaine</span>
  </>,
  five: <>
  <Image src={x} alt='' width={24} height={24}/>
  <span>Flexible mais parfois peu fiable</span>
  </>,
  six: <>
  <Image src={x} alt='' width={24} height={24}/>
  <span>Produits souvent bas de gamme</span>
  </>,
  seven: <>
  <Image src={x} alt='' width={24} height={24}/>
  <span>Souvent des retards</span>
  </>, 
  eight: <>
  <Image src={x} alt='' width={24} height={24}/>
  <span>Pas de suivi</span>
  </>, 
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
  answer: <p>Nos plannings varient selon la demande. Il est conseillé de réserver votre projet à l{`'`}avance. Contactez-moi pour connaître mes prochaines disponibilités !</p>
}, {
  question: "Comment demander un devis ?",
  answer: <p>Appelez-nous au 06 00 00 00 00.</p>
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
    name: 'Rénovation diverse',
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
  image: autre,
  id:'mur',
}, {
  title: 'Peinture intérieure',
  intro : 'Mettez en valeur vos espaces avec une peinture soignée et durable, adaptée à chaque pièce de votre intérieur.',
  details: <>
  <ul>
    <li>Retrait éventuelle des anciens revêtements et mise en décharge professionnelle</li>
    <li>Préparation minutieuse des murs (rebouchage, traitement localisé ou général des fissures, enduit, ponçage)</li>
    <li>Application d{`'`}une couche d{"'"}impression</li>
    <li>Application de 2 couches de peinture acrylique de finition (adaptée au support et à la couleur choisie)</li>
  </ul>
  </>,
  result: 'Une finition nette et élégante pour un intérieur qui vous ressemble.',
  image: autre,
  id:'peinture-interieure',
}, {
  title: 'Enduits décoratifs & peintures à effet',
  intro : 'Pour un intérieur unique, optez pour des textures originales comme le béton ciré, le stuc ou les peintures métallisées.',
  details: <>
  <ul>
    <li>Préparation du support (rebouchage, traitement localisé ou général des fissures, enduit, ponçage)</li>
    <li>Application d{`'`}une couche d{"'"}impression</li>
    <li>Application d{`'`}un enduit décoratif en deux couches (béton ciré, stuc, tadelakt, etc.)</li>
    <li>Finitions spécifiques selon le produit (bouche-pore, vernis bi-composant, cire de finition...)</li>
    <li>Application de deux couches de peinture à effet (peinture métalisée, sablée, pailletée)</li>
  </ul>
  </>,
  result: 'Des murs qui deviennent de véritables éléments de décoration.',
  image: autre,
  id:'enduit',
}, {
  title: 'Peinture extérieure',
  intro : `Protégez et valorisez vos façades, boiseries ou ferronneries avec des peintures durables, adaptées à l'extérieur.`,
  details: <>
  <ul>
    <li>Préparation des supports (rebouchage, ponçage, traitement spécifique)</li>
    <li>Application de sous-couche technique (fongicide, anti-rouille…)</li>
    <li>Application de deux couches de peinture acrylique ou glycero de finition adaptée au support (Microporeuse, hydrofuge...)</li>
  </ul>
  </>,
  result: 'Une protection efficace, un rendu impeccable.',
  image: autre,
  id:'peinture-exterieure',
}, {
  title: 'Rénovation de boiseries',
  intro : 'Redonnez vie à vos boiseries intérieures ou extérieures : portes, volets, escaliers, meubles...',
  details: <>
  <ul>
    <li>Ponçage, rebouchage, traitement du bois</li>
    <li>Sous-couche selon la finition souhaitée (lasure, vernis, vitrificateur)</li>
    <li>Finition en 2 couches résistantes et esthétiques (Lasure à haute resistance aux rayons U.V en exterieur, vitrificateur au sol ou escalier en intérieur, Vernis sur mobilier)</li>
  </ul>
  </>,
  result: 'Un travail soigné pour préserver et valoriser vos boiseries.',
  image: autre,
  id:'boiserie'
}, {
  title: 'Revêtements de sol',
  intro : `Parquet, vinyle, stratifié… Je vous accompagne dans le choix et la pose d'un sol adapté à vos besoins.`,
  details: <>
  <ul>
    <li>Retrait de l{"'"}ancien sol et mise en décharge professionnelle</li>
    <li>Préparation du support (fixateur + ragréage P3 ou P4S)</li>
    <li>Pose du nouveau revêtement (parquet, sol stratifié, lames vyniles...)</li>
    <li>Pose de plinthes & barres de seuil assorties ou à peindre</li>
  </ul>
  </>,
  result: 'Un sol résistant, confortable et esthétique.',
  image: autre,
  id:'sol',
}, {
  title: 'Travaux de rénovation diverse',
  intro : 'Des ajustements utiles pour finaliser votre projet :',
  details: <>
  <ul>
    <li>Électricité : modification à partir du réseau existant (déplacement de prises ou luminaires ), remplacement d{"'"}appareillages</li>
    <li>Plâtrerie : création, modification, suppression de cloisons en placostyl ou carreaux de plâtre. <span>Création d{"'"}ouvertures (cloison uniquement) ou de faux plafonds suspendus/autoportants</span> </li>
    <li>Menuiserie : installations diverses : portes de placard battantes/coulissantes, coffrages, rangements, portes de placard. Création de coffrages/aménagements sur-mesure.</li>
    <li>Autres : pose de luminaires, étagères, petits aménagements</li>
  </ul>
  </>,
  result: 'Des finitions complètes pour un intérieur fonctionnel et harmonieux.',
  image: autre,
  id: 'autre'
}
]

//the second element of the array is a tranparent png so the reveal for the first element is longer
export const lastProjects: StaticImageData[] = [indoor, transparentImage, wood, transparentImage, realisation, transparentImage, ];

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
  name: 'bathroom',
  before: beforeToit,
  after: afterToit,
},
{
  name: 'bedroom',
  before: bedroomBefore,
  after: bedroomAfter,
},
{
  name: 'living',
  before: beforeLiving,
  after: afterliving,
}]