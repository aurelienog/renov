
import { Project } from '@/lib/models/interfaces';

// images "peinture intérieure"
import interieurEntreeCouloir1 from '../../public/assets/images/projects/interieur/entree-couloir.webp';
import interieurEntreeCouloir2 from '../../public/assets/images/projects/interieur/entree-couloir2.webp';
import interieurEntreeCouloir3 from '../../public/assets/images/projects/interieur/entree-couloir3.webp';
import interieurVertical from '../../public/assets/images/projects/interieur/int-vert.webp';
import interieurPeintureSDB1 from '../../public/assets/images/projects/interieur/peinture-sdb.webp';
import interieurPeintureSDB2 from '../../public/assets/images/projects/interieur/peinture-sdb2.webp';
import interieurChambreDeco1 from '../../public/assets/images/projects/interieur/horizontal/chambre-deco.webp';
import interieurChambreDeco2 from '../../public/assets/images/projects/interieur/horizontal/chambre-deco2.webp';
import interieurChambreDeco3 from '../../public/assets/images/projects/interieur/horizontal/chambre-deco3.webp';
import interieurChambreDeco4 from '../../public/assets/images/projects/interieur/horizontal/chambre-deco4.webp';
import interieurChambreDeco5 from '../../public/assets/images/projects/interieur/horizontal/chambre-deco5.webp';
import interieurChambreEnfants1 from '../../public/assets/images/projects/interieur/horizontal/chambre-enfants.webp';
import interieurChambreEnfants2 from '../../public/assets/images/projects/interieur/horizontal/chambre-enfants2.webp';
import interieurHor from '../../public/assets/images/projects/interieur/horizontal/int-hor.webp';
import interieurPeintureBureau1 from '../../public/assets/images/projects/interieur/horizontal/peinture-bureau.webp';
import interieurPeintureBureau2 from '../../public/assets/images/projects/interieur/horizontal/peinture-bureau2.webp';
import interieurPeintureLiving1 from '../../public/assets/images/projects/interieur/horizontal/peinture-living.webp';
import interieurPeintureLiving2 from '../../public/assets/images/projects/interieur/horizontal/peinture-living2.webp';
import interieurPeintureLiving3 from '../../public/assets/images/projects/interieur/horizontal/peinture-living.webp';
import interieurPeintureOffice1 from '../../public/assets/images/projects/interieur/horizontal/peinture-office.webp';
import interieurPeintureOffice2 from '../../public/assets/images/projects/interieur/horizontal/peinture-office2.webp';
import interieurPeintureOffice3 from '../../public/assets/images/projects/interieur/horizontal/peinture-office3.webp';
import interieurPeintureOffice4 from '../../public/assets/images/projects/interieur/horizontal/peinture-office4.webp';
import interieurPeintureSDB from '../../public/assets/images/projects/interieur/horizontal/peinture-sdb.webp';

// images "peinture extérieure"
import exterieurExt from '../../public/assets/images/projects/exterieur/peinture-ext.webp';

// images "murs"
import mursPapierPeint1 from '../../public/assets/images/projects/murs/papier-peint.webp';
import mursPapierPeint2 from '../../public/assets/images/projects/murs/papier-peint2.webp';
import mursPapierPeintChambre from '../../public/assets/images/projects/murs/papier-peint-chambre.webp';
import mursPapierPeintLiving from '../../public/assets/images/projects/murs/papier-peint-living.webp';
import mursToile from '../../public/assets/images/projects/murs/toile-de-verre.webp';

// images "sols"
import solsSol1 from '../../public/assets/images/projects/sols/sol1.webp';
import solsSol2 from '../../public/assets/images/projects/sols/sol2.webp';
import solsParquetColle1 from '../../public/assets/images/projects/sols/parquet-colle.webp';
import solsParquetColle2 from '../../public/assets/images/projects/sols/parquet-colle2.webp';
import solsParquetColle3 from '../../public/assets/images/projects/sols/parquet-colle3.webp';
import solsParquetFlottant1 from '../../public/assets/images/projects/sols/parquet-flottant.webp';
import solsParquetFlottant2 from '../../public/assets/images/projects/sols/parquet-flottant2.webp';
import solsParquetFlottant3 from '../../public/assets/images/projects/sols/parquet-flottant3.webp';
import solsParquetStratifie1 from '../../public/assets/images/projects/sols/parquet-stratifie.webp';
import solsParquetStratifie2 from '../../public/assets/images/projects/sols/parquet-stratifie2.webp';
import solsParquetStratifie3 from '../../public/assets/images/projects/sols/parquet-stratifie3.webp';
import solsParquetStratifie4 from '../../public/assets/images/projects/sols/parquet-stratifie4.webp';

// images "enduits"
import enduitsBetonCire1 from '../../public/assets/images/projects/enduits/beton-cire.webp';
import enduitsBetonCire2 from '../../public/assets/images/projects/enduits/beton-cire2.webp';
import enduitsBetonCire3 from '../../public/assets/images/projects/enduits/beton-cire3.webp';
import enduitsBetonCire4 from '../../public/assets/images/projects/enduits/beton-cire4.webp';
import enduitsMurBetonCire from '../../public/assets/images/projects/enduits/mur-beton-cire.webp';
import enduitsTassaux from '../../public/assets/images/projects/enduits/decor-tassaux.webp';

// images "boiseries"
import boiseriesEscalierVitrification1 from '../../public/assets/images/projects/boiseries/escalier-vitrification.webp';
import boiseriesEscalierVitrification2 from '../../public/assets/images/projects/boiseries/escalier-vitrification2.webp';
import boiseriesEscalierVitrification3 from '../../public/assets/images/projects/boiseries/escalier-vitrification3.webp';
import boiseriesPeinture from '../../public/assets/images/projects/boiseries/peinture-boiseries.webp';
import boiseriesPeinturePlacard from '../../public/assets/images/projects/boiseries/peinture-placard.webp'; // wrong orientation
import boiseriesPeinturePorte1 from '../../public/assets/images/projects/boiseries/peinture-porte.webp';
import boiseriesPeinturePorte2 from '../../public/assets/images/projects/boiseries/peinture-porte2.webp';
import boiseriesPeinturePorte3 from '../../public/assets/images/projects/boiseries/peinture-porte3.webp';
import boiseriesPeinturePorte4 from '../../public/assets/images/projects/boiseries/peinture-porte4.webp';
import boiseriesPeintureSDB from '../../public/assets/images/projects/boiseries/peinture-sdb.webp';
import boiseriesPoncageParquet1 from '../../public/assets/images/projects/boiseries/poncage-parquet.webp';
import boiseriesPoncageParquet2 from '../../public/assets/images/projects/boiseries/poncage-parquet2.webp';
import boiseriesPoutres1 from '../../public/assets/images/projects/boiseries/poutres1.webp';
import boiseriesPoutres2 from '../../public/assets/images/projects/boiseries/poutres2.webp';
import boiseriesVitrificationParquet from '../../public/assets/images/projects/boiseries/vitrification-parquet.webp';

// images "autre"
import autreDressing1 from '../../public/assets/images/projects/autre/dressing.webp';
import autreDressing2 from '../../public/assets/images/projects/autre/dressing2.webp';
import autreMeuble1 from '../../public/assets/images/projects/autre/meuble1.webp';
import autreMeuble2 from '../../public/assets/images/projects/autre/meuble2.webp';
import autreMeuble3 from '../../public/assets/images/projects/autre/meuble3.webp';


export const projects: Project[] = [
  // intérieur
  {
    image: interieurEntreeCouloir1,
    service: 'interieur',
    description: 'Couloir aux murs bleu-gris pâle avec moulures blanches, créant une ambiance élégante et sophistiquée grâce à des éléments de style classique.'
  }, {
    image: interieurEntreeCouloir2,
    service: 'interieur',
    description: "Vue d'un autre angle du couloir aux murs bleu-gris pâle et moulures blanches. Les lignes classiques et les tons doux renforcent l'élégance de l'espace."
  }, {
    image: interieurEntreeCouloir3,
    service: 'interieur',
    description: 'Autre perspective du couloir, mettant en valeur le contraste subtil entre les murs bleu-gris et les moulures blanches, dans une ambiance sobre et raffinée.'
  }, {
    image: interieurHor,
    service: 'interieur',
    description: "Entrée spacieuse aux murs bleu-gris. Un grand miroir au centre est entouré d'un cadre sculpté peint en blanc. Des boiseries blanches ornées soulignent élégamment le bas des murs."
  }, {
    image: interieurChambreEnfants1,
    service: 'interieur',
    description: ''
  }, {
    image: interieurChambreEnfants2,
    service: 'interieur',
    description: ''
  }, {
    image: interieurPeintureBureau1,
    service: 'interieur',
    description: ''
  }, {
    image: interieurPeintureBureau2,
    service: 'interieur',
    description: ''
  }, {
    image: interieurPeintureSDB1,
    service: 'interieur',
    description: 'Salle de bain contemporaine avec un meuble vasque peint dans le même ton rose poudré que les murs. Une arche peinte en blanc encadre élégamment le miroir, créant un contraste subtil et raffiné.'
  }, {
    image: interieurPeintureSDB,
    service: 'interieur',
    description: 'Salle de bain avec meuble vasque rose poudré et mur habillé de carreaux blancs.'
  }, {
    image: interieurPeintureSDB2,
    service: 'interieur',
    description: "Autre vue d'une salle de bain contemporaine où le meuble vasque se fond dans les murs rose poudré. L'arche blanche autour du miroir apporte contraste et élégance."
  }, {
    image: interieurChambreDeco1,
    service: 'interieur',
    description: 'Chambre rénovée avec un mur en tasseaux peint en taupe, les autres murs en gris clair et parquet immitation bois.'
  }, {
    image: interieurChambreDeco2,
    service: 'interieur',
    description: 'Chambre récemment rénovée. Les murs sont gris clair, et le plafond blanc renforce la luminosité. Le sol est en parquet imitation bois clair, ajoutant une touche chaleureuse.'
  }, {
    image: interieurChambreDeco3,
    service: 'interieur',
    description: 'Chambre rénovée aux murs gris clair et parquet immitation bois.'
  }, {
    image: interieurChambreDeco4,
    service: 'interieur',
    description: "Chambre rénovée avec un mur en tasseaux peint en taupe, les autres murs en gris clair."
  }, {
    image: interieurChambreDeco5,
    service: 'interieur',
    description: 'Chambre récemment rénovée. Le mur principal, peint en taupe, est habillé de tasseaux en relief formant un motif géométrique élégant.'
  }, {
    image: interieurPeintureLiving1,
    service: 'interieur',
    description: ''
  }, {
    image: interieurPeintureLiving2,
    service: 'interieur',
    description: 'Salon avec murs fraîchement repeints en blanc et poutres apparentes peintes en gris clair.'
  }, {
    image: interieurPeintureLiving3,
    service: 'interieur',
    description: ''
  }, {
    image: interieurPeintureOffice1,
    service: 'interieur',
    description: ''
  }, {
    image: interieurPeintureOffice2,
    service: 'interieur',
    description: ''
  }, {
    image: interieurVertical,
    service: 'interieur',
    description: "Pièce aux murs peints en blanc, finition légèrement satinée qui capte subtilement la lumière du jour, apportant clarté et douceur à l'espace."
  }, {
    image: interieurPeintureOffice3,
    service: 'interieur',
    description: ''
  }, {
    image: interieurPeintureOffice4,
    service: 'interieur',
    description: ''
  }, 

  // extérieur
  {
    image: exterieurExt,
    service: 'exterieur',
    description: 'Balustrades et volets fraîchement repeints en blanc, offrant un aspect propre, soigné et impeccable.'
  },

  // murs
  {
    image: mursPapierPeint1,
    service: 'mur',
    description: "Chambre récemment rénovée avec un mur habillé d'un papier peint imitation brique gris clair, apportant du caractère à l'espace. Les autres murs sont peints en rose pâle, créant une ambiance douce et contemporaine."
  }, {
    image: mursPapierPeint2,
    service: 'mur',
    description: "Vue d'angle sur une chambre rénovée, mettant en valeur le contraste entre le mur en papier peint imitation brique gris clair et les murs rose pâle. Ambiance moderne et apaisante."
  }, {
    image: mursPapierPeintChambre,
    service: 'mur',
    description: 'Papier peint beige clair à motif géométrique en relief, pose soignée avec raccords parfaits, texture mise en valeur par la lumière.'
  }, {
    image: mursPapierPeintLiving,
    service: 'mur',
    description: 'Papier peint beige clair à motif linéaire évoquant des herbes hautes stylisées. Pose soignée, sans défauts visibles, avec un alignement régulier du motif.'
  }, {
    image: mursToile,
    service: 'mur',
    description: 'Kitchenette avec murs recouverts de toile de verre. Revêtement posé proprement, surface uniforme et finitions soignées'
  },

  // sols
{
    image: solsSol1,
    service: 'sol',
    description: "Parquet en bois clair, collé en pose droite."
  }, {
    image: solsSol2,
    service: 'sol',
    description: "Sol en parquet collé, pose droite. Parquet en bois clair apportant luminosité et douceur à la pièce. Pose précise, alignement impeccable des lames."
  }, {
    image: solsParquetColle1,
    service: 'sol',
    description: "Sol en parquet collé, pose droite. Les lames sont parfaitement alignées, sans espacement visible entre elles. Travail précis et soigné."
  },   {
    image: solsParquetColle2,
    service: 'sol',
    description: "Sol en parquet collé, pose droite. De couleur brun, le parquet donne une impression de chaleur et d'élégance à la pièce."
  }, {
    image: solsParquetColle3,
    service: 'sol',
    description: 'Sol en parquet collé, pose droite. Parquet brun au rendu élégant, chaleureux, avec des lames parfaitement alignées et une pose soignée.'
  }, {
    image: solsParquetFlottant1,
    service: 'sol',
    description: 'Parquet flottant en bois clair, pose droite. Finition élégante et uniforme, lames bien ajustées pour un rendu harmonieux.'
  }, {
    image: solsParquetFlottant2,
    service: 'sol',
    description: 'Sol en parquet flottant, bois clair. Pose droite soignée avec un alignement précis des lames, offrant une ambiance douce et moderne.'
  }, {
    image: solsParquetFlottant3,
    service: 'sol',
    description: "Parquet flottant clair, installé en pose droite. Lames sans défauts d'espacement, travail net et professionnel."
  }, {
    image: solsParquetStratifie1,
    service: 'sol',
    description: 'Parquet stratifié blanc, pose flottante droite. Lames bien alignées, rendu lumineux et contemporain.'
  }, {
    image: solsParquetStratifie2,
    service: 'sol',
    description: 'Sol en parquet stratifié blanc, pose droite précise. Finition lisse et uniforme, parfait pour un intérieur épuré.'
  }, {
    image: solsParquetStratifie3,
    service: 'sol',
    description: 'Parquet stratifié clair, teinte blanche. Pose flottante impeccable, lames jointives pour un effet visuel net et soigné.'
  }, {
    image: solsParquetStratifie4,
    service: 'sol',
    description: 'Parquet stratifié blanc en pose droite. Aspect propre et lumineux, lames parfaitement ajustées pour un rendu élégant et moderne.'
  }, 

  // boiseries
  {
    image: boiseriesEscalierVitrification1,
    service: 'boiserie',
    description: `Escalier en bois récemment rénové. Les marches sont en bois brun foncé, avec des contremarches blanches. Du ruban de masquage est visible au sol, suggérant que des travaux de peinture ou de finition sont en cours ou viennent d'être terminés. L'accent est mis sur le bois riche et la netteté des lignes, mettant en valeur la qualité de la rénovation.`
  }, {
    image: boiseriesEscalierVitrification2,
    service: 'boiserie',
    description: `Escalier rénové, vu du haut. Les marches sont en bois brun foncé, et la rampe est blanche. La rénovation met en valeur le contraste entre le bois foncé et le blanc de la rampe, ainsi que la couleur vive du mur. L'ensemble donne une impression de modernité et de propreté.`
  }, {
    image: boiseriesEscalierVitrification3,
    service: 'boiserie',
    description: `Escalier récemment rénové dans une maison lumineuse. Les marches en bois foncé contrastent élégamment avec les contremarches blanches immaculées et la rampe, créant un aspect moderne et soigné.`
  },   {
    image: boiseriesPeinture,
    service: 'boiserie',
    description: `Rambarde d'escalier peinte en blanc. La rambarde présente un aspect soigné et moderne, avec une finition lisse et régulière. Le contraste entre le blanc de la rambarde et le sol en bois foncé met en valeur la qualité de la rénovation, apportant une touche de fraîcheur et de luminosité à l'espace.`
  }, {
    image: boiseriesPeinturePlacard,
    service: 'boiserie',
    description: `Placard encastré peint en gris anthracite, qui s'étend sur toute la hauteur du mur. La peinture semble uniforme et lisse, avec une finition qui réfléchit légèrement la lumière. Le travail de peinture donne au placard un aspect moderne et élégant.`
  }, {
    image: boiseriesPeinturePorte1,
    service: 'boiserie',
    description: `Porte intérieure blanche au rendu soigné, avec une finition de peinture uniforme et précise. Trois lignes verticales vertes, discrètement intégrées dans les rainures, apportent une touche graphique élégante.`
  }, {
    image: boiseriesPeinturePorte2,
    service: 'boiserie',
    description: `montre un couloir avec plusieurs portes. La particularité réside dans la peinture des portes blanches, où les rainures sont accentuées par une couleur plus foncée, créant un effet de design et de contraste. Cela met en valeur les motifs et la texture des portes.`
  }, {
    image: boiseriesPeinturePorte3,
    service: 'boiserie',
    description: `Couloir fraîchement peint avec une porte blanche moderne ornée de lignes courbes en relief. Les rainures sont mises en valeur par une teinte plus foncée, apportant un contraste subtil et une touche contemporaine à l'ensemble.`
  }, {
    image: boiseriesPeinturePorte4,
    service: 'boiserie',
    description: `Couloir rénové avec porte blanche moderne : lignes courbes en relief aux rainures soulignées d${`'`}une teinte foncée. Plinthes de plafond et encadrement assortis, créant une harmonie élégante et contemporaine.`
  }, {
    image: boiseriesPeintureSDB,
    service: 'boiserie',
    description: `Salle de bain moderne et élégante. On y voit une vasque rectangulaire blanche posée sur un meuble sous-vasque rose poudré. La qualité de la peinture des meubles est impeccable, lisse et uniforme.`
  }, {
    image: boiseriesPoncageParquet1,
    service: 'boiserie',
    description: `Grand salon vide avec un magnifique parquet en bois clair. Le sol est impeccablement poncé et vitrifié, révélant la beauté naturelle du bois et son grain fin.`
  }, {
    image: boiseriesPoncageParquet2,
    service: 'boiserie',
    description: `Vaste espace de vie avec un parquet clair en bois, récemment poncé et parfaitement lisse. La lumière met en valeur la qualité du bois et la finesse du travail de ponçage.`
  }, {
    image: boiseriesPoutres1,
    service: 'boiserie',
    description: `Poutres en bois apparentes, de couleur brun-roux, qui forment une charpente imposante et élégante.  La rénovation met en avant la beauté du bois et du matériau d'origine, créant un espace harmonieux entre tradition et modernité.`
  }, {
    image: boiseriesPoutres2,
    service: 'boiserie',
    description: `Grand espace de vie ouvert et lumineux, rénové avec goût. Les poutres apparentes en bois foncé, restaurées et mises en valeur, constituent l'élément central de l'architecture, ajoutant un charme rustique et authentique à l'intérieur moderne et épuré.`
  }, {
    image: boiseriesVitrificationParquet,
    service: 'boiserie',
    description: `Sol en parquet chevron, récemment vitrifié. Le parquet, de couleur brun foncé, présente un aspect brillant et lisse témoignant d'une finition soignée. La disposition en chevrons est régulière et nette.`
  },

  // enduits
    {
    image: enduitsBetonCire1,
    service: 'enduit',
    description: 'Escalier en béton ciré gris foncé, avec un enduit décoratif. Les marches sont plates et régulières, formant un escalier en colimaçon. Vue de face'
  }, {
    image: enduitsBetonCire2,
    service: 'enduit',
    description: 'Escalier en béton ciré gris foncé, avec un enduit décoratif. Les marches sont plates et régulières, formant un escalier en colimaçon. Vue plongeante'
  }, {
    image: enduitsBetonCire3,
    service: 'enduit',
    description: 'Escalier en béton ciré gris foncé, avec un enduit décoratif. Les marches sont plates et régulières, formant un escalier en colimaçon. Vue latérale'
  },   {
    image: enduitsBetonCire4,
    service: 'enduit',
    description: `Escalier en béton décoratif, avec enduit gris foncé.  Les marches sont d'une forme géométrique. La couleur de l'enduit est uniforme et présente une légère texture.`
  }, {
    image: enduitsMurBetonCire,
    service: 'enduit',
    description: `Salle de bain dont les murs sont entièrement recouverts d'un enduit décoratif gris, dont les nuances subtiles et les textures légèrement irrégulières apportent une profondeur visuelle et un aspect artisanal très élégant. Une cabine de douche en verre, un lavabo en céramique blanche sur un meuble en bois clair, et un miroir rond complètent la pièce.`
  }, {
    image: enduitsTassaux,
    service: 'enduit',
    description: `Chambre entièrement rénovée, avec un nouveau revêtement de sol et une peinture fraîche. L'un des murs se distingue par un habillage mural décoratif de couleur beige clair. Ce revêtement est composé de panneaux rectangulaires disposés en un motif géométrique qui crée une sensation de profondeur et une texture élégante à l'espace.`
  },
  // autre
  {
    image: autreMeuble1,
    service: 'autre',
    description: `Meuble sur mesure en bois clair, en phase de construction. On aperçoit une structure à deux niveaux avec des étagères et des fixations apparentes.`
  },   {
    image: autreMeuble2,
    service: 'autre',
    description: `Placard sur mesure en phase de construction. Deux panneaux de particules beige clair sont assemblés, décorés d'un motif géométrique composé de lignes de bois clair disposées en diagonale, créant un motif en losanges. Le meuble est posé sur un sol avec des matériaux de construction.`
  }, {
    image: autreMeuble3,
    service: 'autre',
    description: 'Placard mural fait sur mesure, peint en couleur rose pâle, avec un design géométrique composé de lignes et de formes rectangulaires.'
  }, {
    image: autreDressing1,
    service: 'autre',
    description: `Photo d'un aménagement intérieur sur mesure. Des meubles, bleu foncé, sont intégrés dans un petit espace. On distingue un bureau, une partie armoire et un espace rangement. La disposition est optimisée selon l'espace.`
  }, {
    image: autreDressing2,
    service: 'autre',
    description: `Photo d'un aménagement intérieur sur mesure. Des meubles aux couleurs bleu foncé et bois clair sont disposés dans une pièce. On observe un bureau, des armoires murales et une disposition optimisant l'espace.`
  }
]