import { Product } from '../types/marketplace';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod-iphone-16-pro',
    name: 'Apple iPhone 16 Pro',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&auto=format&fit=crop&q=80',
    price: 119900,
    description: 'Grade 5 Titanium design with larger 6.3-inch Super Retina XDR display, Camera Control, 4K 120 fps Dolby Vision, and A18 Pro chip.',
    details: [
      '6.3-inch Super Retina XDR OLED Display with ProMotion',
      'A18 Pro chip with 6-core GPU',
      'Pro camera system: 48MP Fusion, 48MP Ultra Wide, 12MP 5x Telephoto',
      'Up to 27 hours video playback',
      'Ceramic Shield front, textured matte glass back'
    ],
    variantGroups: [
      {
        name: 'Storage',
        options: [
          {
            id: 'storage-128',
            name: '128 GB',
            priceDelta: 0,
            detailSnippet: 'Storage: 128 GB high-speed NVMe flash',
          },
          {
            id: 'storage-256',
            name: '256 GB',
            priceDelta: 10000,
            detailSnippet: 'Storage: 256 GB high-speed NVMe flash',
          },
          {
            id: 'storage-512',
            name: '512 GB',
            priceDelta: 30000,
            detailSnippet: 'Storage: 512 GB high-speed NVMe flash',
          },
          {
            id: 'storage-1tb',
            name: '1 TB',
            priceDelta: 50000,
            detailSnippet: 'Storage: 1 TB high-speed NVMe flash for 4K ProRes',
          }
        ]
      },
      {
        name: 'Color',
        options: [
          {
            id: 'color-natural',
            name: 'Natural Titanium',
            image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&auto=format&fit=crop&q=80',
            detailSnippet: 'Finish: Natural Titanium aerospace alloy',
          },
          {
            id: 'color-black',
            name: 'Black Titanium',
            image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600&auto=format&fit=crop&q=80',
            detailSnippet: 'Finish: Space Black Titanium PVD coated',
          },
          {
            id: 'color-desert',
            name: 'Desert Titanium',
            image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&auto=format&fit=crop&q=80',
            detailSnippet: 'Finish: Desert Gold Titanium anodized',
          },
          {
            id: 'color-white',
            name: 'White Titanium',
            image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=80',
            detailSnippet: 'Finish: Pure White Titanium frosted glass',
          }
        ]
      }
    ],
    emiPlans: [
      { id: 'emi-3m', tenureMonths: 3, isNoCost: true, interestRate: 0 },
      { id: 'emi-6m', tenureMonths: 6, isNoCost: true, interestRate: 0 },
      { id: 'emi-9m', tenureMonths: 9, isNoCost: false, interestRate: 12 },
      { id: 'emi-12m', tenureMonths: 12, isNoCost: false, interestRate: 12 }
    ]
  },
  {
    id: 'prod-macbook-air-m3',
    name: 'Apple MacBook Air 13" (M3)',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80',
    price: 114900,
    description: 'Strikingly thin and fast with the M3 chip. Built for Apple Intelligence with up to 18 hours of battery life.',
    details: [
      'Apple M3 chip (8-core CPU, 10-core GPU)',
      '13.6-inch Liquid Retina display with 500 nits brightness',
      'MagSafe 3 charging port and two Thunderbolt / USB 4 ports',
      '1080p FaceTime HD camera and three-mic array',
      'Up to 18 hours battery life'
    ],
    variantGroups: [
      {
        name: 'Storage',
        options: [
          {
            id: 'cfg-256',
            name: '256 GB SSD',
            priceDelta: 0,
            detailSnippet: 'Storage: 256 GB ultra-fast SSD storage',
          },
          {
            id: 'cfg-512',
            name: '512 GB SSD',
            priceDelta: 20000,
            detailSnippet: 'Storage: 512 GB ultra-fast SSD storage',
          },
          {
            id: 'cfg-1tb',
            name: '1 TB SSD',
            priceDelta: 40000,
            detailSnippet: 'Storage: 1 TB high-capacity SSD storage',
          }
        ]
      },
      {
        name: 'Color',
        options: [
          {
            id: 'color-midnight',
            name: 'Midnight',
            image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&auto=format&fit=crop&q=80',
            detailSnippet: 'Finish: Midnight dark aluminum with anti-fingerprint seal',
          },
          {
            id: 'color-spacegray',
            name: 'Space Gray',
            image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&auto=format&fit=crop&q=80',
            detailSnippet: 'Finish: Classic Space Gray anodized finish',
          },
          {
            id: 'color-starlight',
            name: 'Starlight',
            image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&auto=format&fit=crop&q=80',
            detailSnippet: 'Finish: Warm champagne Starlight aluminum',
          },
          {
            id: 'color-silver',
            name: 'Silver',
            image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=80',
            detailSnippet: 'Finish: Pure Silver polished aluminum',
          }
        ]
      }
    ],
    emiPlans: [
      { id: 'emi-3m', tenureMonths: 3, isNoCost: true, interestRate: 0 },
      { id: 'emi-6m', tenureMonths: 6, isNoCost: true, interestRate: 0 },
      { id: 'emi-12m', tenureMonths: 12, isNoCost: false, interestRate: 12 },
      { id: 'emi-18m', tenureMonths: 18, isNoCost: false, interestRate: 14 }
    ]
  },
  {
    id: 'prod-sony-wh1000xm5',
    name: 'Sony WH-1000XM5 Headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80',
    price: 29990,
    description: 'Industry-leading noise cancellation with two processors and eight microphones for unprecedented sound quality.',
    details: [
      'Dual Processor noise cancelling: V1 and QN1',
      'Crystal clear hands-free calling with 4 beamforming mics',
      'Up to 30 hours battery life with quick charging (3 min for 3 hours)',
      'Ultra-comfortable lightweight design in soft fit leather',
      'Multipoint connection for seamless device switching'
    ],
    variantGroups: [
      {
        name: 'Package',
        options: [
          {
            id: 'edition-standard',
            name: 'Standard Edition',
            priceDelta: 0,
            detailSnippet: 'Package: Includes premium collapsible carry case & AUX cable',
          },
          {
            id: 'edition-pro-bundle',
            name: 'Pro Traveler Bundle',
            priceDelta: 3000,
            detailSnippet: 'Package: Includes hard-shell case, airline adapter & fast charger',
          }
        ]
      },
      {
        name: 'Color',
        options: [
          {
            id: 'color-black',
            name: 'Black',
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80',
            detailSnippet: 'Color: Matte Black with soft-touch earcups',
          },
          {
            id: 'color-silver',
            name: 'Platinum Silver',
            image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&auto=format&fit=crop&q=80',
            detailSnippet: 'Color: Platinum Silver with gold accent trims',
          },
          {
            id: 'color-pink',
            name: 'Smoky Pink',
            image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&auto=format&fit=crop&q=80',
            detailSnippet: 'Color: Smoky Pink pastel edition',
          }
        ]
      }
    ],
    emiPlans: [
      { id: 'emi-3m', tenureMonths: 3, isNoCost: true, interestRate: 0 },
      { id: 'emi-6m', tenureMonths: 6, isNoCost: true, interestRate: 0 },
      { id: 'emi-9m', tenureMonths: 9, isNoCost: false, interestRate: 12 }
    ]
  },
  {
    id: 'prod-galaxy-s25-ultra',
    name: 'Samsung Galaxy S25 Ultra',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&auto=format&fit=crop&q=80',
    price: 129999,
    description: 'Galaxy AI powerhouse with Snapdragon 8 Elite, built-in S Pen, and 200MP quad telephoto camera system.',
    details: [
      '6.8-inch Dynamic AMOLED 2X, 120Hz, 2600 nits',
      'Snapdragon 8 Elite Mobile Platform',
      '200MP Main + 50MP Periscope Telephoto + 50MP Ultra Wide',
      'Built-in S Pen stylus included',
      '5000mAh battery with 45W fast charging'
    ],
    variantGroups: [
      {
        name: 'Storage',
        options: [
          {
            id: 'storage-256',
            name: '256 GB / 12 GB',
            priceDelta: 0,
            detailSnippet: 'Storage: 256 GB UFS 4.0 Storage with 12 GB LPDDR5X RAM',
          },
          {
            id: 'storage-512',
            name: '512 GB / 12 GB',
            priceDelta: 15000,
            detailSnippet: 'Storage: 512 GB UFS 4.0 Storage with 12 GB LPDDR5X RAM',
          },
          {
            id: 'storage-1tb',
            name: '1 TB / 16 GB',
            priceDelta: 35000,
            detailSnippet: 'Storage: 1 TB UFS 4.0 Storage with 16 GB High-Performance RAM',
          }
        ]
      },
      {
        name: 'Color',
        options: [
          {
            id: 'color-titanium-gray',
            name: 'Titanium Gray',
            image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&auto=format&fit=crop&q=80',
            detailSnippet: 'Finish: Titanium Gray with brushed frame',
          },
          {
            id: 'color-titanium-black',
            name: 'Titanium Black',
            image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop&q=80',
            detailSnippet: 'Finish: Titanium Black satin finish',
          },
          {
            id: 'color-titanium-silver',
            name: 'Titanium Silver',
            image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600&auto=format&fit=crop&q=80',
            detailSnippet: 'Finish: Titanium Silver frosted glass',
          }
        ]
      }
    ],
    emiPlans: [
      { id: 'emi-3m', tenureMonths: 3, isNoCost: true, interestRate: 0 },
      { id: 'emi-6m', tenureMonths: 6, isNoCost: true, interestRate: 0 },
      { id: 'emi-9m', tenureMonths: 9, isNoCost: false, interestRate: 12 },
      { id: 'emi-12m', tenureMonths: 12, isNoCost: false, interestRate: 12 }
    ]
  },
  {
    id: 'prod-ipad-air-m2',
    name: 'Apple iPad Air 11" (M2)',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&auto=format&fit=crop&q=80',
    price: 59900,
    description: 'Supercharged by the blazing-fast Apple M2 chip. Stunning Liquid Retina display and landscape front camera.',
    details: [
      '11-inch Liquid Retina display with P3 wide color',
      'Apple M2 chip with 8-core CPU and 10-core GPU',
      '12MP Center Stage landscape front camera',
      'Supports Apple Pencil Pro and Magic Keyboard',
      'All-day battery life with USB-C'
    ],
    variantGroups: [
      {
        name: 'Storage',
        options: [
          {
            id: 'opt-128-wifi',
            name: '128 GB (Wi-Fi)',
            priceDelta: 0,
            detailSnippet: 'Storage & Connectivity: 128 GB flash with Wi-Fi 6E',
          },
          {
            id: 'opt-256-wifi',
            name: '256 GB (Wi-Fi)',
            priceDelta: 10000,
            detailSnippet: 'Storage & Connectivity: 256 GB flash with Wi-Fi 6E',
          },
          {
            id: 'opt-512-cell',
            name: '512 GB (Cellular)',
            priceDelta: 25000,
            detailSnippet: 'Storage & Connectivity: 512 GB flash with 5G Cellular + Wi-Fi',
          }
        ]
      },
      {
        name: 'Color',
        options: [
          {
            id: 'color-spacegray',
            name: 'Space Gray',
            image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&auto=format&fit=crop&q=80',
            detailSnippet: 'Finish: Space Gray recycled aluminum',
          },
          {
            id: 'color-blue',
            name: 'Blue',
            image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=600&auto=format&fit=crop&q=80',
            detailSnippet: 'Finish: Sky Blue pastel aluminum',
          },
          {
            id: 'color-purple',
            name: 'Purple',
            image: 'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=600&auto=format&fit=crop&q=80',
            detailSnippet: 'Finish: Lavender Purple aluminum',
          },
          {
            id: 'color-starlight',
            name: 'Starlight',
            image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80',
            detailSnippet: 'Finish: Starlight warm silver aluminum',
          }
        ]
      }
    ],
    emiPlans: [
      { id: 'emi-3m', tenureMonths: 3, isNoCost: true, interestRate: 0 },
      { id: 'emi-6m', tenureMonths: 6, isNoCost: true, interestRate: 0 },
      { id: 'emi-9m', tenureMonths: 9, isNoCost: false, interestRate: 12 }
    ]
  },
  {
    id: 'prod-dyson-v12',
    name: 'Dyson V12 Detect Slim Vacuum',
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600&auto=format&fit=crop&q=80',
    price: 54900,
    description: 'Dyson lightweight cordless vacuum with Fluffy Optic cleaner head reveals invisible dust on hard floors.',
    details: [
      'Illumination technology reveals microscopic dust',
      'Piezo sensor sizes and counts dust particles',
      'Hyperdymium motor spins up to 125,000 rpm',
      'Up to 60 minutes run time with click-in battery',
      'Single-button power control'
    ],
    variantGroups: [
      {
        name: 'Package',
        options: [
          {
            id: 'pkg-standard',
            name: 'Standard Edition',
            priceDelta: 0,
            detailSnippet: 'Package: Includes Motorbar cleaner head & combination tool',
          },
          {
            id: 'pkg-bundle',
            name: 'Extra Battery Bundle',
            priceDelta: 6000,
            detailSnippet: 'Package: Includes secondary click-in battery & HEPA post-filter',
          }
        ]
      },
      {
        name: 'Color',
        options: [
          {
            id: 'color-yellow',
            name: 'Nickel / Yellow',
            image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?w=600&auto=format&fit=crop&q=80',
            detailSnippet: 'Edition: Signature Yellow and Nickel accents',
          },
          {
            id: 'color-blue-copper',
            name: 'Prussian Blue / Copper',
            image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&auto=format&fit=crop&q=80',
            detailSnippet: 'Edition: Exclusive Prussian Blue and Copper accents',
          }
        ]
      }
    ],
    emiPlans: [
      { id: 'emi-3m', tenureMonths: 3, isNoCost: true, interestRate: 0 },
      { id: 'emi-6m', tenureMonths: 6, isNoCost: true, interestRate: 0 },
      { id: 'emi-12m', tenureMonths: 12, isNoCost: false, interestRate: 12 }
    ]
  }
];
