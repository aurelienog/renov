import React from 'react'

function GalleryFilter( { query }: { query?: string}) {
  return (
    <form>
      <label>Choisissez une prestation</label>
      <select value={`${query}`}>
        <option value="">Toutes</option> 
        <option value="boiserie">Rénovation de boiseries</option> 
        <option value="sol">Revêtements de sols</option> 
        <option value="mur">Revêtements muraux</option> 
        <option value="extérieur">Peinture extérieure</option> 
        <option value="intérieur">Peinture intérieure</option> 
        <option value="enduit">Enduits décoratifs & peintures à effet</option> 
        <option value="autre">Rénovation diverse</option> 
      </select>
    </form>
  )
}

export default GalleryFilter