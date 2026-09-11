/* ============================================================
   SUSHI GARDEN — data.js
   Base de dados do cardápio digital.
   - CATEGORIAS: lista de categorias, cada uma com seus itens.
   - Cada categoria tem uma imagem "fallback" (gerada em SVG,
     sem depender de internet) usada quando o item não tem
     campo "image" próprio.
   ============================================================ */

/**
 * Gera uma imagem de fallback (data URI SVG) para uma categoria,
 * seguindo a identidade visual do Sushi Garden.
 * @param {string} emoji - ícone representativo da categoria
 * @param {string} label - nome da categoria (exibido na imagem)
 */
function fallbackImg(emoji, label) {
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450" viewBox="0 0 600 450">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1A1A1A"/>
      <stop offset="100%" stop-color="#0A0A0A"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="38%" r="55%">
      <stop offset="0%" stop-color="#D4A843" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="#D4A843" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="600" height="450" fill="url(#bg)"/>
  <rect width="600" height="450" fill="url(#glow)"/>
  <circle cx="300" cy="178" r="112" fill="none" stroke="#D4A843" stroke-width="2" opacity="0.45"/>
  <circle cx="300" cy="178" r="90" fill="none" stroke="#CC1212" stroke-width="1.5" opacity="0.4"/>
  <text x="300" y="205" font-size="92" text-anchor="middle">${emoji}</text>
  <text x="300" y="332" font-size="26" font-family="Inter, Arial, sans-serif" font-weight="700" fill="#D4A843" text-anchor="middle" letter-spacing="1">${label.toUpperCase()}</text>
  <text x="300" y="366" font-size="13" font-family="Inter, Arial, sans-serif" fill="#A0A0A0" text-anchor="middle" letter-spacing="4">SUSHI GARDEN</text>
</svg>`.trim();
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const CATEGORIAS = [
  {
    id: "combos-sashimi",
    nome: "Combos de Sashimi",
    icone: "🍣",
    fallback: fallbackImg("🍣", "Combos de Sashimi"),
    itens: [
      { nome: "Sashimi Especial", desc: "8 fatias de takô (polvo), 8 fatias de peixe branco da estação, 8 fatias de kani, 8 fatias de salmão, 5 fatias de atum, 3 fatias de camarão", preco: 170.00, image: null },
      { nome: "Sashimi Executivo", desc: "4 fatias de kani, 4 fatias de salmão, 4 fatias de atum, 4 fatias de peixe branco da estação", preco: 84.00, image: null },
      { nome: "Sashimi Misto", desc: "5 fatias de kani, 5 fatias de atum, 5 fatias de salmão, 5 fatias de takô (polvo), 5 fatias de peixe branco", preco: 125.00, image: null }
    ]
  },
  {
    id: "combos-sushi-sashimi",
    nome: "Combos de Sushi e Sashimi",
    icone: "🍱",
    fallback: fallbackImg("🍱", "Sushi e Sashimi"),
    itens: [
      { nome: "Combinado Gunkan", desc: "2 gunkan salmão, 2 gunkan de camarão panko, 2 gunkan pepino com camarão flambado, 2 gunkan salmão com tartar de atum, 2 gunkan de salmão com tartar de kani e cream cheese", preco: 88.00, image: null },
      { nome: "Combinado Simples", desc: "8 hossomaki de salmão, 2 fatias de sashimi de peixe branco da estação, 2 fatias de sashimi de salmão, 2 fatias de sashimi de kani, 1 niguiri de peixe branco, 1 niguiri de salmão skin, 1 niguiri de salmão", preco: 88.00, image: null },
      { nome: "Combinado do Chef", desc: "10 uramaki filadelfia crispy, 4 acelgamaki atum filadelfia, 2 gunkan filadelfia, 2 gunkan camarão panko, 2 niguiri salmão maçaricado, 5 hot com crispy de alho poró, 5 peças sashimi atum trufado, 5 peças sashimi salmão trufado", preco: 175.00, image: null },
      { nome: "Combinado Especial", desc: "8 uramaki de filadelfia, 4 fatias de sashimi de peixe branco da estação, 4 fatias de sashimi de polvo, 4 fatias de sashimi de kani, 2 niguiri de salmão skin, 2 niguiri de peixe, 2 niguiri de camarão, 2 niguiri de salmão, 2 niguiri de kani, 2 niguiri de atum", preco: 150.00, image: null },
      { nome: "Combinado Executivo", desc: "3 fatias de sashimi de atum, 3 fatias de sashimi de kani, 2 niguiri de salmão, 2 niguiri de salmão, 2 niguiri de atum, 8 uramaki filadelfia, 3 fatias de sashimi de peixe branco da estação, 3 fatias de sashimi de salmão", preco: 125.00, image: null },
      { nome: "Combinado Gestante", desc: "5 hot filadelfia, 4 niguiri skin, 8 uramaki salmão grelhado, 2 niguiri salmão selado", preco: 85.00, image: null },
      { nome: "Combinado Hot", desc: "10 unidades de hot filadelfia, 6 unidades hot maki, 8 uramaki skin", preco: 90.00, image: null },
      { nome: "Combinado Misto", desc: "8 hossomaki de salmão, 5 fatias de sashimi de peixe branco da estação, 5 fatias de sashimi de salmão, 5 fatias de sashimi de atum, 5 fatias de sashimi de kani, 2 niguiri de salmão, 2 niguiri de peixe branco, 2 niguiri de kani", preco: 135.00, image: null },
      { nome: "Combinado Oiishii", desc: "5 fatias de sashimi salmão selado com crosta de gergelim e tarê, 10 uramaki garden salmão, cream cheese e salmão selado envolto no arroz, 2 gunkan salmão selado", preco: 90.00, image: null },
      { nome: "Combinado Premium", desc: "10 hot roll filadelfia, 8 uramaki filadelfia (salmão com cream cheese), 4 gunkan de salmão com cream cheese, 8 hossomaki camarão, 8 hossomaki salmão, 10 fatias de branco, 10 fatias de sashimi de salmão, 8 fatias de sashimi de atum, 10 uramaki filadelfia crispy, 4 niguiri de salmão, 2 niguiri de camarão, 4 niguiri de atum, 2 niguiri de polvo, 2 niguiri de salmão skin, 2 niguiri de peixe branco", preco: 355.00, image: null },
      { nome: "Combinado Sake", desc: "5 fatias de sashimi de salmão, 2 gunkan de salmão, 2 acelgamaki de salmão, 10 uramaki filadelfia especial, 5 hot roll filadelfia", preco: 125.00, image: null },
      { nome: "Combinado Super Garden", desc: "10 hot roll filadelfia crispy, 10 fatias de peixe branco, 8 fatias de atum, 8 uramaki filadelfia, 8 hossomaki salmão, 4 acelgamaki de salmão, 4 gunkan de salmão, 2 niguiri de camarão, 2 niguiri de atum, 2 niguiri de salmão", preco: 285.00, image: null },
      { nome: "Combinado Sushi Garden", desc: "8 uramaki de filadelfia, 8 fatias de sashimi de peixe branco da estação, 8 fatias de sashimi de takô (polvo), 8 uramaki filadelfia especial, 8 fatias de sashimi de salmão, 4 fatias de sashimi de atum, 3 niguiri de peixe branco, 3 niguiri de camarão, 3 niguiri de salmão, 3 niguiri de kani, 3 niguiri de atum", preco: 250.00, image: null },
      { nome: "Combinado Vegetariano", desc: "8 uramaki vegetariano, 6 futomaki shimeji, 6 hot vegetariano, 2 niguiri de tomate seco", preco: 80.00, image: null },
      { nome: "Combo Especial Salmão", desc: "10 fatias de sashimi de salmão, 8 uramaki de filadelfia, 8 niguiri de salmão, 4 acelgamaki de salmão, 3 gunkan de salmão, 3 hossomaki salmão, 3 gunkan de salmão com cream cheese", preco: 170.00, image: null },
      { nome: "Combo Mix", desc: "10 uramaki camarão especial, 8 uramaki tokio, 4 gunkan filadelfia, 4 gunkan crispy alho poró", preco: 165.00, image: null },
      { nome: "Sushi Especial", desc: "8 hossomaki de salmão, 8 uramaki filadelfia, 3 niguiri de kani, 3 niguiri de camarão, 3 niguiri de salmão, 3 niguiri de atum, 3 niguiri de peixe branco da estação", preco: 140.00, image: null },
      { nome: "Sushi Executivo", desc: "8 hossomaki de salmão, 3 niguiri de kani, 3 niguiri de salmão skin, 3 niguiri de salmão, 2 niguiri de peixe branco da estação", preco: 84.00, image: null },
      { nome: "Sushi Misto", desc: "8 hossomaki de salmão, 4 niguiri de kani, 4 niguiri de salmão, 3 niguiri de salmão skin, 3 niguiri de takô (polvo), 3 niguiri de peixe branco da estação", preco: 99.00, image: null }
    ]
  },
  {
    id: "temaki",
    nome: "Temaki (1 unidade)",
    icone: "🌯",
    fallback: fallbackImg("🌯", "Temaki"),
    itens: [
      { nome: "Temaki Doritos", desc: "Com cream cheese e doritos, com cebolinha, sem cream cheese", preco: 40.00, image: null },
      { nome: "Temaki Hot", desc: "Empanado na panko e frito, com cebolinha, com salmão frito, sem cream cheese, sem arroz", preco: 43.00, image: null },
      { nome: "Temaki sem alga", desc: "Salmão fila com cebolinha, salmão com cebolinha, só salmão e arroz, atum e arroz, camarão fila", preco: 40.00, image: null },
      { nome: "Temaki Aberto", desc: "6 unidades salmão selado, recheado com camarão alho e óleo, cream cheese e cebolinha", preco: 87.00, image: null },
      { nome: "Temaki Atum", desc: "Cream cheese e cebolinha, sem cream cheese, atum e cebolinha sem cream cheese, sem arroz com cream cheese, com creme cheese", preco: 39.00, image: null },
      { nome: "Temaki Califórnia", desc: "Pepino, manga e kani", preco: 35.00, image: null },
      { nome: "Temaki Camarão Alho e Óleo", desc: "Camarão alho e óleo, cebolinha e creme cheese", preco: 48.00, image: null },
      { nome: "Temaki Crocante", desc: "Cubos de salmão empanados na farinha panko, cream cheese e tarê", preco: 43.00, image: null },
      { nome: "Temaki de Camarão", desc: "Sem cream cheese, com cream cheese e cebolinha, com cream cheese, sem arroz", preco: 47.00, image: null },
      { nome: "Temaki de Kani", desc: "Normal, cream cheese", preco: 29.00, image: null },
      { nome: "Temaki de Salmão", desc: "Arroz e salmão, sem arroz, com cebolinha, com cebolinha e gergelim", preco: 40.00, image: null },
      { nome: "Temaki de Salmão com Shimeji e Cream Cheese", desc: "1 unidade", preco: 40.00, image: null },
      { nome: "Temaki Ebitem", desc: "Camarão empanado com cream cheese", preco: 44.00, image: null },
      { nome: "Temaki Filadelfia", desc: "Com cream cheese, sem arroz, com cebolinha, com cebolinha e gergelim, sem arroz e com cebolinha, creme cheese no arroz, com alho poró, salmão batido", preco: 41.00, image: null },
      { nome: "Temaki Japa", desc: "Salmão grelhado com cream cheese e cebolinha", preco: 40.00, image: null },
      { nome: "Temaki Kani", desc: "Sem creme X, com creme X", preco: 29.00, image: null },
      { nome: "Temaki Mix", desc: "Atum, polvo, camarão, cream cheese, azeite extra virgem, cebolinha e raspas de limão", preco: 48.00, image: null },
      { nome: "Temaki Morango com Goiabada e Nutella", desc: "Normal", preco: 30.00, image: null },
      { nome: "Temaki Oriental", desc: "Salmão, cream cheese, cebolinha, gengibre e gergelim", preco: 41.00, image: null },
      { nome: "Temaki Polvo", desc: "Cream cheese e cebolinha, sem cebolinha, com arroz sem Cb, sem cream cheese e sem Cb, sem cream cheese e sem cebolinha", preco: 47.00, image: null },
      { nome: "Temaki Salmão Skin", desc: "Pele de salmão grelhada, cream cheese e tarê", preco: 28.00, image: null },
      { nome: "Temaki Salmão Tabasco", desc: "Salmão, cebolinha, cream cheese e pimenta tabasco", preco: 40.00, image: null },
      { nome: "Temaki Shimeji", desc: "Cream cheese e cebolinha, sem cream cheese, shimeji com shitake e cream cheese", preco: 37.00, image: null },
      { nome: "Temaki Vegetariano", desc: "Tomate seco, rúcula e cream cheese", preco: 27.00, image: null }
    ]
  },
  {
    id: "sashimi",
    nome: "Sashimi",
    icone: "🐟",
    fallback: fallbackImg("🐟", "Sashimi"),
    itens: [
      { nome: "Barriga de Salmão", desc: "Selada em corte especial, azeite trufado, flor de sal, ovas e raspas de limão siciliano", preco: 90.00, image: null },
      { nome: "Sashimi ao Molho de Maracujá com Pimenta Chilli Sauce", desc: "10 unidades, 5 unidades", preco: 32.00, image: null },
      { nome: "Sashimi Atum", desc: "10 unidades, 5 unidades", preco: 30.00, image: null },
      { nome: "Sashimi de Salmão ao Molho de Ostra", desc: "10 unidades", preco: 62.00, image: null },
      { nome: "Sashimi Kani", desc: "10 unidades, 5 unidades", preco: 24.00, image: null },
      { nome: "Sashimi Peixe Branco", desc: "10 unidades, 5 unidades", preco: 27.00, image: null },
      { nome: "Sashimi Polvo", desc: "10 unidades, 5 unidades", preco: 33.00, image: null },
      { nome: "Sashimi Sake", desc: "10 fatias de salmão com raspas de limão siciliano, crispy de batata doce ralada e molho especial", preco: 64.00, image: null },
      { nome: "Sashimi Salmão", desc: "10 unidades, 5 unidades", preco: 30.00, image: null },
      { nome: "Sashimi Salmão Grelhado", desc: "10 unidades", preco: 60.00, image: null },
      { nome: "Sashimi Salmão ao Molho Especial", desc: "10 unidades, 5 unidades", preco: 32.00, image: null },
      { nome: "Sashimi Trufado", desc: "Salmão selado no maçarico, azeite trufado, flor de sal e raspas de limão siciliano", preco: 40.00, image: null }
    ]
  },
  {
    id: "chinesa",
    nome: "Chinesa",
    icone: "🥡",
    fallback: fallbackImg("🥡", "Chinesa"),
    itens: [
      { nome: "Carnes", desc: "Carne ao molho curry, carne com cebola, carne com brócolis, carne com batata, 1/2 carne batata", preco: 55.00, image: null },
      { nome: "Chop Suey", desc: "Frango, carne, camarão", preco: 84.00, image: null },
      { nome: "Frango Xadrez", desc: "Com legumes ao molho de soja, acompanha arroz branco", preco: 55.00, image: null },
      { nome: "Frutos do Mar", desc: "Salmão grelhado, lula alho e óleo, camarão apimentado, camarão alho e óleo, mix garden, 1/2 salmão grelhado", preco: 70.00, image: null },
      { nome: "Mix Garden", desc: "Mix garden camarão alho e óleo, legumes refogados, salada de alface com salmão, filé de salmão grelhado e arroz yakimeshi", preco: 155.00, image: null },
      { nome: "Salmão Grelhado", desc: "Inteiro, 1/2 porção, com yakimeshi", preco: 65.00, image: null },
      { nome: "Shimeji", desc: "Inteiro, 1/2 porção, com camarão, com shitake", preco: 22.00, image: null },
      { nome: "Shimeji com Camarão", desc: "", preco: 0, image: null },
      { nome: "Shitake", desc: "Normal, 1/2 porção, com shimeji", preco: 20.00, image: null },
      { nome: "Shitake com Brócolis", desc: "Normal, 1/2 porção", preco: 20.00, image: null },
      { nome: "Tempura", desc: "Frango empanado, lula empanada, frango e camarão, frutos do mar — lula, camarão, polvo, camarão no panko (12 unidades), salmão, tempura misto de peixes (salmão, branco, atum), 1/2 porção frango, 1/2 lula empanada na panko, 1/2 tempura de camarão panko 6 unidades", preco: 20.00, image: null },
      { nome: "Teppanyaki", desc: "Frango, carne, atum, peixe branco, salmão, camarão, frutos do mar — lula, camarão, polvo, kids — mini teppanyaki carne e frango, 1/2 teppan salmão, 1/2 camarão, frutos do mar com kani e legumes cozido, salmão com shimeji, 1/2 teppan frango", preco: 50.00, image: null },
      { nome: "Yakissoba", desc: "Legumes, misto (carne e frango), salmão e legumes, frutos do mar, camarão, 1/2 misto (carne e frango), 1/2 frutos do mar, 1/2 camarão, misto sem legumes, carne e legumes, frango e legumes, legumes e cogumelos, 1/2 salmão e legumes, 1/2 yakissoba legumes", preco: 40.00, image: null }
    ]
  },
  {
    id: "entradas",
    nome: "Entradas",
    icone: "🥟",
    fallback: fallbackImg("🥟", "Entradas"),
    itens: [
      { nome: "Batera", desc: "Sushi de salmão prensado com cebolinha e crispy de batata", preco: 35.00, image: null },
      { nome: "Bolinho de Bacalhau", desc: "8 unidades", preco: 34.00, image: null },
      { nome: "Carpaccio", desc: "Carpaccio salmão, carpaccio sake (crispy batata doce), carpaccio peixe branco, salmão com molho maracujá e pimenta, carpaccio salmão com ovas", preco: 58.00, image: null },
      { nome: "Ceviche", desc: "Garden (salmão, peixe branco e atum), só salmão, ceviche especial (camarão, polvo, lula), ceviche salmão molho de maracujá, só salmão e camarão", preco: 55.00, image: null },
      { nome: "Edamame", desc: "Inteiro", preco: 27.00, image: null },
      { nome: "Gohan", desc: "Normal", preco: 12.00, image: null },
      { nome: "Gyoza (pastelzinho japonês)", desc: "4 unidades, 2 unidades", preco: 13.00, image: null },
      { nome: "Hackepeter", desc: "Torradas, doritos, meio torrada/meio doritos, sem creme cheese, 1/2 porção doritos", preco: 30.00, image: null },
      { nome: "Molho à Parte", desc: "Geleia pimenta, molho tarê, molho especial", preco: 3.00, image: null },
      { nome: "Niwa Sake", desc: "4 unidades", preco: 37.00, image: null },
      { nome: "Palitinhos de Salmão", desc: "8 unidades", preco: 56.00, image: null },
      { nome: "Pão Chinês", desc: "2 unidades, 1/2 porção", preco: 6.00, image: null },
      { nome: "Rolinho", desc: "Primavera 4 unidades, queijo 4 unidades, filadelfia 4 unidades, camarão 4 unidades, romeu e julieta 4 unidades, chocolate 4 unidades, prima 2 unidades, queijo 2 unidades, camarão 2 unidades, salmão 2 unidades, choko 2 unidades, 2 primavera e 2 queijo, romeu e julieta 2 unidades", preco: 12.00, image: null },
      { nome: "Shimeji", desc: "Inteiro, 1/2 porção, com shitake", preco: 18.00, image: null },
      { nome: "Shitake", desc: "Inteiro, 1/2 porção, com brócolis, com shimeji", preco: 20.00, image: null },
      { nome: "Sunomono", desc: "Garden (polvo e kani), misto (atum, salmão, pb e kani), especial (salmão e camarão), só polvo, só salmão, só kani, salmão, polvo e camarão, só pepino", preco: 5.00, image: null },
      { nome: "Tatake", desc: "Garden (tarê) 10 unidades, mostarda 10 unidades, garden 5 unidades, atum garden (tarê) 10 unidades, molho maracujá com pimenta 10un., molho maracujá com pimenta 5 unidades", preco: 30.00, image: null },
      { nome: "Yakimeshi", desc: "Legumes, carne, camarão, vegetariano", preco: 23.00, image: null }
    ]
  },
  {
    id: "gunkan-acelga",
    nome: "Gunkan e Acelga",
    icone: "🍘",
    fallback: fallbackImg("🍘", "Gunkan e Acelga"),
    itens: [
      { nome: "Acelgamaki (8 Unidades)", desc: "Atum, salmão, salmão com doritos, com maionese e cebolinha, 4 unidades salmão, 4 unidades atum", preco: 20.00, image: null },
      { nome: "Djow Ebi", desc: "Camarão na panko, selado com azeite trufado, geleia de pimenta, tarê, cebolinha", preco: 28.00, image: null },
      { nome: "Gunkan Alho Poró", desc: "4 unidades, 2 unidades", preco: 15.00, image: null },
      { nome: "Gunkan Brie", desc: "4 unidades, 2 unidades", preco: 19.00, image: null },
      { nome: "Gunkan de Atum", desc: "4 unidades", preco: 28.00, image: null },
      { nome: "Gunkan de Shimeji Shake", desc: "Salmão selado, shimeji, cebolinha e cream cheese ao molho especial", preco: 15.00, image: null },
      { nome: "Gunkan Ebitem", desc: "Salmão selado e recheado com camarão batido, cebolinha e cream cheese ao molho especial", preco: 35.00, image: null },
      { nome: "Gunkan Filadelfia", desc: "4 unidades, 2 unidades", preco: 15.00, image: null },
      { nome: "Gunkan Garden", desc: "Salmão batido com cream cheese, tarê e crispy de couve", preco: 15.00, image: null },
      { nome: "Gunkan Geleia de Pimenta", desc: "Salmão, geleia de pimenta e flambado no licor", preco: 15.00, image: null },
      { nome: "Gunkan Goiabada com Nutella e Morango", desc: "Inteiro, 1/2 porção", preco: 11.00, image: null },
      { nome: "Gunkan Kiuri", desc: "Sushi envolto com pepino, recheio com salmão, arroz e creme cheese", preco: 14.00, image: null },
      { nome: "Gunkan Pepino com Camarão Flambado", desc: "Normal", preco: 33.00, image: null },
      { nome: "Gunkan Polvo com Salmão", desc: "4 unidades, 2 unidades", preco: 20.00, image: null },
      { nome: "Gunkan Salmão", desc: "4 unidades, 4 unid. com cebolinha, 2 unidades", preco: 15.00, image: null },
      { nome: "Gunkan Salmão com Camarão Batido", desc: "4 unidades, 2 unidades", preco: 18.00, image: null },
      { nome: "Gunkan Salmão com Tempura de Camarão Panko", desc: "Empanado farinha panko, 4 unidades", preco: 38.00, image: null }
    ]
  },
  {
    id: "uramaki",
    nome: "Uramaki (8 Unidades)",
    icone: "🍥",
    fallback: fallbackImg("🍥", "Uramaki"),
    itens: [
      { nome: "Uramaki Morango com Nutella", desc: "Morango e nutella", preco: 30.00, image: null },
      { nome: "Uramaki Salmão com Ovas", desc: "", preco: 0, image: null },
      { nome: "Uramaki Alaska", desc: "Salmão, cream cheese e pepino", preco: 40.00, image: null },
      { nome: "Uramaki Avocado", desc: "Recheio salmão, abacate e cream cheese", preco: 48.00, image: null },
      { nome: "Uramaki Brie", desc: "Salmão, cream cheese, queijo brie maçaricado e geleia de pimenta", preco: 55.00, image: null },
      { nome: "Uramaki Califórnia", desc: "Pepino, manga e kani", preco: 36.00, image: null },
      { nome: "Uramaki Crispy", desc: "Couve, ou, alho poró", preco: 53.00, image: null },
      { nome: "Uramaki de Atum", desc: "Sem creme cheese, com creme cheese", preco: 41.00, image: null },
      { nome: "Uramaki de Camarão", desc: "Sem cream cheese, com cream cheese, especial (salmão selado envolto no arroz)", preco: 56.00, image: null },
      { nome: "Uramaki de Polvo", desc: "Com cream cheese, sem cream cheese", preco: 60.00, image: null },
      { nome: "Uramaki de Salmão", desc: "8 unidades", preco: 40.00, image: null },
      { nome: "Uramaki Doritos", desc: "Salmão cream cheese coberto com doritos", preco: 39.00, image: null },
      { nome: "Uramaki Ebi Lemon", desc: "Recheado com camarão, cream cheese, envolto com salmão selado, raspa de limão, gergelim e tarê", preco: 57.00, image: null },
      { nome: "Uramaki Ebitem", desc: "Camarão empanado com cream cheese e alface", preco: 50.00, image: null },
      { nome: "Uramaki Ebitem Especial", desc: "Camarão empanado, cream cheese com salmão selado", preco: 53.00, image: null },
      { nome: "Uramaki Especial", desc: "Salmão envolto no arroz, recheado com salmão e cream cheese", preco: 45.00, image: null },
      { nome: "Uramaki Filadelfia", desc: "8 unidades, com salmão grelhado", preco: 40.00, image: null },
      { nome: "Uramaki Garden", desc: "Salmão selado envolto no arroz, cebolinha e tarê, cream cheese", preco: 52.00, image: null },
      { nome: "Uramaki Green", desc: "Salmão, tomate seco, rúcula e cream cheese", preco: 36.00, image: null },
      { nome: "Uramaki Hadock", desc: "10 unidades", preco: 55.00, image: null },
      { nome: "Uramaki Ika Maki", desc: "Lula empanada, envolto com salmão, com geleia", preco: 50.00, image: null },
      { nome: "Uramaki Kani", desc: "Sem cream cheese, com cream cheese", preco: 38.00, image: null },
      { nome: "Uramaki Morango com Nutella", desc: "8 unidades", preco: 34.00, image: null },
      { nome: "Uramaki Passion", desc: "Camarão empanado, cream cheese, envoltas por salmão com molho passion e quinoa", preco: 53.00, image: null },
      { nome: "Uramaki Premium", desc: "Salmão, atum, abacate, cream cheese, selado, molho de pimenta suave", preco: 55.00, image: null },
      { nome: "Uramaki Romeu e Julieta", desc: "Morango, cream cheese e goiabada", preco: 27.00, image: null },
      { nome: "Uramaki Salmão Skin", desc: "Pele de salmão grelhada, gergelim, cream cheese e tarê", preco: 36.00, image: null },
      { nome: "Uramaki Shimeji", desc: "Shitake refogado, cream cheese e cebolinha", preco: 38.00, image: null },
      { nome: "Uramaki Spice Tuna", desc: "Atum, pimenta sriracha, cream cheese e cebolinha", preco: 42.00, image: null },
      { nome: "Uramaki Tempurá", desc: "Camarão empanado, cream cheese coberto com salmão e maionese temperada", preco: 55.00, image: null },
      { nome: "Uramaki Tokio Maki", desc: "Enrolado na lâmina de salmão maçaricado e recheado com camarão, salmão e cream cheese coberto com tarê e cebolinha", preco: 55.00, image: null },
      { nome: "Uramaki Tropical", desc: "Salmão envolto no arroz recheado com salmão manga", preco: 53.00, image: null },
      { nome: "Uramaki Vegetariano", desc: "Tomate seco, rúcula e cream cheese", preco: 30.00, image: null }
    ]
  },
  {
    id: "hossomaki-futomaki",
    nome: "Hossomaki // Futomaki (8 Unidades)",
    icone: "🍚",
    fallback: fallbackImg("🍚", "Hossomaki / Futomaki"),
    itens: [
      { nome: "Futomaki 10 unidades", desc: "Garden salmão com cream cheese, pepino, alface, especial salmão, camarão, cream cheese, gergelim, vegetariano", preco: 30.00, image: null },
      { nome: "Hossomaki Atum", desc: "8 unidades", preco: 23.00, image: null },
      { nome: "Hossomaki Camarão", desc: "8 unidades", preco: 27.00, image: null },
      { nome: "Hossomaki Coberto com Ovas", desc: "8 unidades", preco: 38.00, image: null },
      { nome: "Hossomaki Filadelfia", desc: "8 unidades", preco: 25.00, image: null },
      { nome: "Hossomaki Kani", desc: "8 unidades", preco: 20.00, image: null },
      { nome: "Hossomaki Pepino", desc: "8 unidades", preco: 14.00, image: null },
      { nome: "Hossomaki Polvo", desc: "8 unidades", preco: 27.00, image: null },
      { nome: "Hossomaki Salmão", desc: "8 unidades", preco: 20.00, image: null }
    ]
  },
  {
    id: "niguiri",
    nome: "Niguiri (4 Unidades)",
    icone: "🍤",
    fallback: fallbackImg("🍤", "Niguiri"),
    itens: [
      { nome: "Niguiri Atum", desc: "4 unidades, 2 unidades", preco: 12.00, image: null },
      { nome: "Niguiri Camarão", desc: "4 unidades, 2 unidades", preco: 14.00, image: null },
      { nome: "Niguiri de Barriga Salmão", desc: "Selado", preco: 32.00, image: null },
      { nome: "Niguiri Especial", desc: "Selado com cream cheese e gergelim", preco: 28.00, image: null },
      { nome: "Niguiri Garden", desc: "Niguiri garden salmão selado, crispy de couve, gergelim e tarê", preco: 26.00, image: null },
      { nome: "Niguiri Kani", desc: "4 unidades", preco: 17.00, image: null },
      { nome: "Niguiri Peixe Branco", desc: "4 unidades", preco: 18.00, image: null },
      { nome: "Niguiri Polvo", desc: "4 unidades, 2 unidades, com molho de ostra 4 uni.", preco: 15.00, image: null },
      { nome: "Niguiri Salmão", desc: "4 unidades, 2 unidades", preco: 22.00, image: null },
      { nome: "Niguiri Skin", desc: "4 unidades, 2 unidades", preco: 8.00, image: null },
      { nome: "Niguiri Trufado", desc: "Salmão coberto com ovas e molho especial", preco: 30.00, image: null },
      { nome: "Niguiri Vegetariano", desc: "4 unidades", preco: 15.00, image: null }
    ]
  },
  {
    id: "hot",
    nome: "Hot (10 Unidades)",
    icone: "🔥",
    fallback: fallbackImg("🔥", "Hot Roll"),
    itens: [
      { nome: "Hot Sumer", desc: "Empanado com peixes variados e cream cheese", preco: 37.00, image: null },
      { nome: "Hot Banana", desc: "Empanado e frito com leite condensado e canela", preco: 16.00, image: null },
      { nome: "Hot Crispy", desc: "Salmão, arroz, cream cheese, empanado na farinha panko coberto com crispy de couve", preco: 22.00, image: null },
      { nome: "Hot Ebi", desc: "Empanado com salmão, camarão e cream cheese", preco: 24.00, image: null },
      { nome: "Hot Ebi Furai (8 unidades)", desc: "Hossomaki de salmão, empanado em farinha panko, tarê, cebolinha, cream cheese, coberto com camarão flambado", preco: 30.00, image: null },
      { nome: "Hot Filadelfia", desc: "Empanado com salmão, arroz e cream cheese", preco: 21.00, image: null },
      { nome: "Hot Maki (10 unidades)", desc: "Empanado com salmão, arroz e cream cheese e coberto com tartar salmão temperado", preco: 52.00, image: null },
      { nome: "Hot Nutela (8 unidades)", desc: "Banana, nutela, amendoim e raspas de limão siciliano", preco: 22.00, image: null },
      { nome: "Hot Prestígio", desc: "Inteiro", preco: 20.00, image: null },
      { nome: "Hot Vegetariano", desc: "10 unidades", preco: 37.00, image: null }
    ]
  },
  {
    id: "poke",
    nome: "Poke",
    icone: "🥗",
    fallback: fallbackImg("🥗", "Poke"),
    itens: [
      { nome: "Poke Atum", desc: "Atum marinado com molho clássico, arroz cebola roxa, sunomomo, manga, crispy alho poró, nori, cebolinha, gergelim, manga ou abacate", preco: 65.00, image: null },
      { nome: "Poke Camarão", desc: "Camarão crocante, salmão marinado com molho clássico, arroz japonês, sunomomo cenoura, cebola roxa, tarê, gergelim, manga ou abacate", preco: 72.00, image: null },
      { nome: "Poke Crocante", desc: "Salmão crocante, arroz japonês, molho especial, cebolinha, cebola roxa, sunomomo, tarê, gergelim, crispy de couve, manga ou abacate", preco: 65.00, image: null },
      { nome: "Poke Filadelfia", desc: "Arroz japonês, sunomomo, cenoura, cebola roxa, gergelim, crispe de cebola, gengibre, manga ou abacate, salmão com cream cheese ao molho da casa", preco: 65.00, image: null },
      { nome: "Poke Garden", desc: "Arroz japonês, cebola roxa, sunomomo, manga, crispy alho poró, nori, cebolinha, gergelim, salmão ao molho clássico", preco: 65.00, image: null },
      { nome: "Poke Vegano", desc: "Shimeji, arroz japonês, crispy de couve, cenoura, alface, sunomomo, gergelim, cebola roxa, cebolinha, manga ou abacate", preco: 48.00, image: null }
    ]
  },
  {
    id: "bebidas",
    nome: "Bebidas",
    icone: "🍹",
    fallback: fallbackImg("🍹", "Bebidas"),
    itens: [
      { nome: "Caipirinhas", desc: "Sem álcool tropical com H2O, vinho, bacardi, vodka, cachaça, steinhaeger, vodka morango, kiwi e limão", preco: 20.00, image: null },
      { nome: "Cervejas", desc: "Eisenbahn long, Heineken long, Bud long, Heineken zero", preco: 13.00, image: null },
      { nome: "Refrigerantes", desc: "Lata coca, lata guaraná, água sem gás, guaraná zero, coca zero, coca zero 600, tônica, sprite, tônica zero, coca 2lt, guaraná 2lt, fanta, citrus, H2O, água com gás, red bull, coca zero 2lt, CDCA 600", preco: 4.00, image: null },
      { nome: "Saquinhas", desc: "Limão, kiwi, morango, tropical, oriental, capo grande, capo baldo, sake garrafa dourado", preco: 24.00, image: null },
      { nome: "Sucos", desc: "Laranja, kiwi, maracujá, abacaxi, uva integral", preco: 9.00, image: null }
    ]
  },
  {
    id: "sobremesas",
    nome: "Sobremesas",
    icone: "🍰",
    fallback: fallbackImg("🍰", "Sobremesas"),
    itens: [
      { nome: "Gunkan Goiabada com Nutella e Morango", desc: "Normal", preco: 17.00, image: null },
      { nome: "Hot Prestígio", desc: "8 unidades", preco: 22.00, image: null },
      { nome: "Hot Banana", desc: "Hot banana empanado e frito com leite condensado e canela", preco: 16.00, image: null },
      { nome: "Hot Nutela", desc: "Hot nutela banana, nutela, amendoim, 8 unidades", preco: 20.00, image: null },
      { nome: "Petit Gâteau", desc: "Congelado sem sorvete, congelado com sorvete", preco: 12.00, image: null },
      { nome: "Rolinho de Chocolate 4 Unidades", desc: "4 unidades", preco: 20.00, image: null },
      { nome: "Rolinho Romeu e Julieta", desc: "4 unidades", preco: 18.00, image: null },
      { nome: "Tempura de Banana", desc: "Tempura de banana empanada na farinha panko coberto com nutela e morango, 8 unidades", preco: 20.00, image: null }
    ]
  },
  {
    id: "acompanhamentos",
    nome: "Acompanhamentos",
    icone: "🧂",
    fallback: fallbackImg("🧂", "Acompanhamentos"),
    itens: [
      { nome: "Acompanhamentos", desc: "Sunomomo (pepino), geleia de pimenta, wasabi extra 25g, molho tarê, hashi — palitinhos (escolha a quantidade), molho agridoce 6 sachês, crispy de couve, crispy alho poró, crispy batata doce, 10 sachê shoyu, crispy de cebola, gengibre extra 25g, gengibre extra 100g, molho de ostra, cream cheese, gengibre caramelizado 25g", preco: 0.01, image: null }
    ]
  }
];
