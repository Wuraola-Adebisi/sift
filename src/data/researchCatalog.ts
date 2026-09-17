// This is the demo decision engine behind Sift's MVP.
//
// The product's real architecture is: brief -> AI interprets requirements ->
// AI researches/compares live options -> AI generates the shortlist with
// reasoning. That AI layer (an LLM on Bedrock) isn't wired in yet, so this
// module mimics its output with a small, hand-written product catalog and a
// keyword matcher standing in for requirement extraction. When the AI layer
// lands, `matchCategory` and the catalog below are what it replaces —
// everything downstream (the UI, the verdict model, the reasoning fields)
// stays the same.

export type Verdict = 'Buy' | 'Consider' | 'Skip'

export interface Spec {
  label: string
  value: string
}

export interface ProductResult {
  rank: string
  name: string
  category: string
  price: string
  verdict: Verdict
  whyItFits: string
  whereItFallsShort: string
  whatWouldChangeThis: string
  specs: Spec[]
}

export interface Criterion {
  label: string
  value: string
}

export interface ResearchCategory {
  id: string
  keywords: string[]
  exampleBrief: string
  criteria: Criterion[]
  takeaway: string
  results: ProductResult[]
}

export const categories: ResearchCategory[] = [
  {
    id: 'jewelry',
    keywords: ['necklace', 'pendant', 'jewelry', 'jewellery', 'chain', 'gold'],
    exampleBrief:
      'I need a gold necklace for everyday wear. Something simple but not boring. Around $300.',
    criteria: [
      { label: 'Use case', value: 'Everyday wear' },
      { label: 'Budget', value: 'Around $300' },
      { label: 'Priority', value: 'Durability' },
      { label: 'Style', value: 'Simple but distinctive' },
    ],
    takeaway:
      'The solid gold option is the closest match because durability is important and it stays close to your budget. Vermeil gives you a meaningful price saving if you are willing to accept more maintenance.',
    results: [
      {
        rank: '01',
        name: '14k Solid Gold Pendant',
        category: 'Jewelry',
        price: '$295',
        verdict: 'Buy',
        whyItFits:
          'Fits the budget closely, works for everyday wear, and solid gold makes durability a stronger point than plated alternatives.',
        whereItFallsShort:
          'Offers less visual variety at this price than plated pieces — fewer style options to choose from.',
        whatWouldChangeThis:
          'If design variety mattered more than material durability, the vermeil chain would move ahead of this.',
        specs: [
          { label: 'Material', value: '14k solid gold' },
          { label: 'Length', value: '16–18in, adjustable' },
        ],
      },
      {
        rank: '02',
        name: 'Gold Vermeil Chain',
        category: 'Jewelry',
        price: '$185',
        verdict: 'Consider',
        whyItFits:
          'Gives you the gold look at a lower price while keeping the design simple, leaving room in the budget.',
        whereItFallsShort:
          'The finish can wear over time, particularly with frequent exposure to water and skincare products.',
        whatWouldChangeThis:
          'If budget was the dominant constraint rather than daily durability, this becomes the clear pick.',
        specs: [
          { label: 'Material', value: 'Vermeil (gold over sterling silver)' },
          { label: 'Length', value: '18in, fixed' },
        ],
      },
      {
        rank: '03',
        name: 'Gold-Plated Pendant',
        category: 'Jewelry',
        price: '$95',
        verdict: 'Skip',
        whyItFits:
          'Leaves substantial room in the budget and offers a wide range of styles to pick from.',
        whereItFallsShort:
          'Plating wears down noticeably with daily contact, which works against the everyday-wear requirement.',
        whatWouldChangeThis:
          'If this were for occasional wear rather than daily, plating would be a perfectly reasonable choice.',
        specs: [
          { label: 'Material', value: 'Gold-plated brass' },
          { label: 'Length', value: '16in, fixed' },
        ],
      },
    ],
  },
  {
    id: 'headphones',
    keywords: [
      'headphone',
      'headphones',
      'earbud',
      'earbuds',
      'anc',
      'noise cancellation',
      'noise-cancelling',
      'noise cancelling',
      'commut',
    ],
    exampleBrief:
      'I need headphones for commuting. Good noise cancellation matters. Under $400.',
    criteria: [
      { label: 'Use case', value: 'Commuting' },
      { label: 'Budget', value: 'Under $400' },
      { label: 'Priority', value: 'Noise cancellation' },
      { label: "Doesn't matter", value: 'Gaming features' },
    ],
    takeaway:
      'The Sony leads on the two things you said matter most — ANC and battery life — and comes in under budget. The Bose is a close second if comfort during long wear outweighs the price gap.',
    results: [
      {
        rank: '01',
        name: 'Sony WH-1000XM6',
        category: 'Headphones',
        price: '$399',
        verdict: 'Buy',
        whyItFits:
          'Class-leading noise cancellation for commuting, the longest battery life of the three (up to 30h), and it comes in right under your budget.',
        whereItFallsShort:
          'The design leans utilitarian rather than premium, and the touch controls take some getting used to.',
        whatWouldChangeThis:
          'If long-session comfort mattered more to you than ANC strength, the Bose would move ahead of this.',
        specs: [
          { label: 'ANC', value: 'Excellent' },
          { label: 'Battery', value: 'Up to 30h' },
          { label: 'Weight', value: '254g' },
        ],
      },
      {
        rank: '02',
        name: 'Bose QuietComfort Ultra',
        category: 'Headphones',
        price: '$349',
        verdict: 'Consider',
        whyItFits:
          "Bose's ANC sits right behind Sony's, and comfort over long wear is widely regarded as best-in-class.",
        whereItFallsShort:
          'Shorter battery life (24h) than the Sony, with a broadly similar feature set otherwise.',
        whatWouldChangeThis:
          'If all-day comfort mattered more to you than squeezing out the last bit of battery life, this is the better pick.',
        specs: [
          { label: 'ANC', value: 'Excellent' },
          { label: 'Battery', value: 'Up to 24h' },
          { label: 'Weight', value: '252g' },
        ],
      },
      {
        rank: '03',
        name: 'AirPods Max',
        category: 'Headphones',
        price: '$549',
        verdict: 'Skip',
        whyItFits:
          'Tightest integration with iPhone and very good build quality.',
        whereItFallsShort:
          'Goes over your stated budget, is noticeably heavier than the other two, and both ANC and battery life trail the leaders.',
        whatWouldChangeThis:
          'If iOS integration mattered more to you than staying under budget or best-in-class ANC, this is still worth a look.',
        specs: [
          { label: 'ANC', value: 'Very good' },
          { label: 'Battery', value: 'Up to 20h' },
          { label: 'Weight', value: '384g' },
        ],
      },
    ],
  },
  {
    id: 'furniture',
    keywords: ['sofa', 'couch', 'living room', 'settee'],
    exampleBrief:
      'I need a sofa for a small living room. Neutral colour, comfortable, easy to clean, under $1,500.',
    criteria: [
      { label: 'Use case', value: 'Small living room' },
      { label: 'Budget', value: 'Under $1,500' },
      { label: 'Priority', value: 'Easy to clean' },
      { label: 'Style', value: 'Neutral colour' },
    ],
    takeaway:
      'The Ashford is the closest match for a smaller room and stays easy to clean without sacrificing much comfort. The Sven is worth a look if you prefer leather and can live with it showing more wear.',
    results: [
      {
        rank: '01',
        name: 'Castlery Ashford 3-Seater',
        category: 'Furniture',
        price: '$1,299',
        verdict: 'Buy',
        whyItFits:
          'Performance fabric wipes clean easily, the frame is compact enough for a smaller room, and it comes in under budget.',
        whereItFallsShort:
          'Colour range is limited mostly to neutrals — fewer bold options if you change your mind on style later.',
        whatWouldChangeThis:
          "If floor space wasn't tight, a deeper lounge-style sofa would likely score higher on comfort.",
        specs: [
          { label: 'Width', value: '82in' },
          { label: 'Upholstery', value: 'Performance weave fabric' },
        ],
      },
      {
        rank: '02',
        name: 'Article Sven Sofa',
        category: 'Furniture',
        price: '$1,399',
        verdict: 'Consider',
        whyItFits:
          'Genuine leather that ages well and wipes clean quickly, with an iconic silhouette.',
        whereItFallsShort:
          'Leather runs warmer to sit on and shows scuffs more visibly than a fabric weave over time.',
        whatWouldChangeThis:
          "If a quick wipe-down mattered more to you than upholstery softness, this moves ahead of the Ashford.",
        specs: [
          { label: 'Width', value: '87in' },
          { label: 'Upholstery', value: 'Leather' },
        ],
      },
      {
        rank: '03',
        name: 'IKEA Kivik 3-Seater',
        category: 'Furniture',
        price: '$899',
        verdict: 'Skip',
        whyItFits:
          'Lowest price of the three and the widest range of cover colours.',
        whereItFallsShort:
          "Cotton-blend cover isn't as stain-resistant, and the frame runs bulkier than a small room likely wants.",
        whatWouldChangeThis:
          'If budget was the dominant constraint rather than space or cleaning ease, this would rank higher.',
        specs: [
          { label: 'Width', value: '93in' },
          { label: 'Upholstery', value: 'Cotton blend' },
        ],
      },
    ],
  },
  {
    id: 'running-shoes',
    keywords: [
      'running shoe',
      'running shoes',
      'road run',
      'sneaker',
      'sneakers',
      'trainer',
      'trainers',
      'shoes',
    ],
    exampleBrief:
      'I need running shoes for daily road runs. Comfortable and durable. Under $180.',
    criteria: [
      { label: 'Use case', value: 'Daily road running' },
      { label: 'Budget', value: 'Under $180' },
      { label: 'Priority', value: 'Durability' },
      { label: 'Also wants', value: 'Comfort' },
    ],
    takeaway:
      'The Ghost Max is built specifically for daily mileage and comes in under budget. The Gel-Nimbus is worth the stretch if a little extra cushioning matters more to you than staying exactly on budget.',
    results: [
      {
        rank: '01',
        name: 'Brooks Ghost Max',
        category: 'Running shoes',
        price: '$160',
        verdict: 'Buy',
        whyItFits:
          'Built for daily mileage — the cushioning holds up over hundreds of miles — and it comes in under your budget.',
        whereItFallsShort:
          'Heavier than race-focused trainers, which matters if speed work is ever part of your routine.',
        whatWouldChangeThis:
          'If occasional speed sessions mattered more to you than daily comfort, a lighter trainer would fit better.',
        specs: [
          { label: 'Drop', value: '6mm' },
          { label: 'Weight', value: '10.7oz' },
        ],
      },
      {
        rank: '02',
        name: 'ASICS Gel-Nimbus 27',
        category: 'Running shoes',
        price: '$190',
        verdict: 'Consider',
        whyItFits:
          'Plush cushioning and strong reviews for daily-training durability.',
        whereItFallsShort:
          'Runs $10 over your stated ceiling.',
        whatWouldChangeThis:
          'If your budget has a little flex, this edges ahead on cushioning alone.',
        specs: [
          { label: 'Drop', value: '8mm' },
          { label: 'Weight', value: '10.4oz' },
        ],
      },
      {
        rank: '03',
        name: 'New Balance Fresh Foam X 1080v13',
        category: 'Running shoes',
        price: '$200',
        verdict: 'Skip',
        whyItFits: 'Excellent cushioning, particularly for recovery-pace runs.',
        whereItFallsShort:
          'The largest budget overrun of the three, and it leans more toward recovery runs than daily durability.',
        whatWouldChangeThis:
          'If recovery-run comfort mattered more to you than daily durability or price, this could still work.',
        specs: [
          { label: 'Drop', value: '6mm' },
          { label: 'Weight', value: '10.3oz' },
        ],
      },
    ],
  },
]

function scoreCategory(brief: string, category: ResearchCategory): number {
  const text = brief.toLowerCase()
  return category.keywords.reduce(
    (total, keyword) => (text.includes(keyword) ? total + 1 : total),
    0,
  )
}

/**
 * Stand-in for the AI requirement-matching step. Scores the brief against
 * each category's keywords and returns the best match, or null if nothing
 * in the demo catalog applies.
 */
export function matchCategory(brief: string): ResearchCategory | null {
  if (!brief.trim()) return null

  const scored = categories
    .map((category) => ({ category, score: scoreCategory(brief, category) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)

  return scored[0]?.category ?? null
}