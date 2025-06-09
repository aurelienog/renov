
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
    service: 'intérieur',
    description: ''
  }, {
    image: interieurEntreeCouloir2,
    service: 'intérieur',
    description: ''
  }, {
    image: interieurEntreeCouloir3,
    service: 'intérieur',
    description: ''
  }, {
    image: interieurVertical,
    service: 'intérieur',
    description: ''
  }, {
    image: interieurPeintureSDB1,
    service: 'intérieur',
    description: ''
  }, {
    image: interieurPeintureSDB2,
    service: 'intérieur',
    description: ''
  }, {
    image: interieurChambreDeco1,
    service: 'intérieur',
    description: ''
  }, {
    image: interieurChambreDeco2,
    service: 'intérieur',
    description: ''
  }, {
    image: interieurChambreDeco3,
    service: 'intérieur',
    description: ''
  }, {
    image: interieurChambreDeco4,
    service: 'intérieur',
    description: ''
  }, {
    image: interieurChambreDeco5,
    service: 'intérieur',
    description: ''
  },   {
    image: interieurChambreEnfants1,
    service: 'intérieur',
    description: ''
  }, {
    image: interieurChambreEnfants2,
    service: 'intérieur',
    description: ''
  }, {
    image: interieurHor,
    service: 'intérieur',
    description: ''
  }, {
    image: interieurPeintureBureau1,
    service: 'intérieur',
    description: ''
  }, {
    image: interieurPeintureBureau2,
    service: 'intérieur',
    description: ''
  }, {
    image: interieurPeintureLiving1,
    service: 'intérieur',
    description: ''
  }, {
    image: interieurPeintureLiving2,
    service: 'intérieur',
    description: ''
  }, {
    image: interieurPeintureLiving3,
    service: 'intérieur',
    description: ''
  }, {
    image: interieurPeintureOffice1,
    service: 'intérieur',
    description: ''
  }, {
    image: interieurPeintureOffice2,
    service: 'intérieur',
    description: ''
  }, {
    image: interieurPeintureOffice3,
    service: 'intérieur',
    description: ''
  }, {
    image: interieurPeintureOffice4,
    service: 'intérieur',
    description: ''
  }, {
    image: interieurPeintureSDB,
    service: 'intérieur',
    description: ''
  },

  // extérieur
  {
    image: exterieurExt,
    service: 'extérieur',
    description: ''
  },

  // murs
  {
    image: mursPapierPeint1,
    service: 'mur',
    description: ''
  }, {
    image: mursPapierPeint2,
    service: 'mur',
    description: ''
  }, {
    image: mursPapierPeintChambre,
    service: 'mur',
    description: ''
  }, {
    image: mursPapierPeintLiving,
    service: 'mur',
    description: ''
  }, {
    image: mursToile,
    service: 'mur',
    description: ''
  },

  // sols
{
    image: solsSol1,
    service: 'sol',
    description: ''
  }, {
    image: solsSol2,
    service: 'sol',
    description: ''
  }, {
    image: solsParquetColle1,
    service: 'sol',
    description: ''
  },   {
    image: solsParquetColle2,
    service: 'sol',
    description: ''
  }, {
    image: solsParquetColle3,
    service: 'sol',
    description: ''
  }, {
    image: solsParquetFlottant1,
    service: 'sol',
    description: ''
  }, {
    image: solsParquetFlottant2,
    service: 'sol',
    description: ''
  }, {
    image: solsParquetFlottant3,
    service: 'sol',
    description: ''
  }, {
    image: solsParquetStratifie1,
    service: 'sol',
    description: ''
  }, {
    image: solsParquetStratifie2,
    service: 'sol',
    description: ''
  }, {
    image: solsParquetStratifie3,
    service: 'sol',
    description: ''
  }, {
    image: solsParquetStratifie4,
    service: 'sol',
    description: ''
  }, 

  // boiseries
  {
    image: boiseriesEscalierVitrification1,
    service: 'boiserie',
    description: ''
  }, {
    image: boiseriesEscalierVitrification2,
    service: 'boiserie',
    description: ''
  }, {
    image: boiseriesEscalierVitrification3,
    service: 'boiserie',
    description: ''
  },   {
    image: boiseriesPeinture,
    service: 'boiserie',
    description: ''
  }, {
    image: boiseriesPeinturePlacard,
    service: 'boiserie',
    description: ''
  }, {
    image: boiseriesPeinturePorte1,
    service: 'boiserie',
    description: ''
  }, {
    image: boiseriesPeinturePorte2,
    service: 'boiserie',
    description: ''
  }, {
    image: boiseriesPeinturePorte3,
    service: 'boiserie',
    description: ''
  }, {
    image: boiseriesPeinturePorte4,
    service: 'boiserie',
    description: ''
  }, {
    image: boiseriesPeintureSDB,
    service: 'boiserie',
    description: ''
  }, {
    image: boiseriesPoncageParquet1,
    service: 'boiserie',
    description: ''
  }, {
    image: boiseriesPoncageParquet2,
    service: 'boiserie',
    description: ''
  }, {
    image: boiseriesPoutres1,
    service: 'boiserie',
    description: ''
  }, {
    image: boiseriesPoutres2,
    service: 'boiserie',
    description: ''
  }, {
    image: boiseriesVitrificationParquet,
    service: 'boiserie',
    description: ''
  },

  // enduits
    {
    image: enduitsBetonCire1,
    service: 'enduit',
    description: ''
  }, {
    image: enduitsBetonCire2,
    service: 'enduit',
    description: ''
  }, {
    image: enduitsBetonCire3,
    service: 'enduit',
    description: ''
  },   {
    image: enduitsBetonCire4,
    service: 'enduit',
    description: ''
  }, {
    image: enduitsMurBetonCire,
    service: 'enduit',
    description: ''
  }, {
    image: enduitsTassaux,
    service: 'enduit',
    description: ''
  },
  // autre
  {
    image: autreDressing1,
    service: 'autre',
    description: ''
  }, {
    image: autreDressing2,
    service: 'autre',
    description: ''
  }, {
    image: autreMeuble1,
    service: 'autre',
    description: ''
  },   {
    image: autreMeuble2,
    service: 'autre',
    description: ''
  }, {
    image: autreMeuble3,
    service: 'autre',
    description: ''
  },
]