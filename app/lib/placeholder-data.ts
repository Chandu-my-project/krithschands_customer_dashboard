// app/lib/placeholder-data.ts

export const services = [
  {
    id: '1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6p',
    service_name: 'Industrial Engine Overhauling',
    service_description: 'Complete breakdown, cleaning, inspection, precision machining, and component replacement for heavy duty diesel and gas industrial engines.',
    image_url: '/services/engine-overhaul.jpg'
  },
  {
    id: '2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p7q',
    service_name: 'Hydraulic System Diagnostics & Repair',
    service_description: 'Advanced pressure testing, fault detection, cylinder honing, and valve calibrations for high-performance mobile and stationary hydraulic systems.',
    image_url: '/services/hydraulic-repair.jpg'
  },
  {
    id: '3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q8r',
    service_name: 'Preventative Machinery Maintenance',
    service_description: 'Scheduled fluid analysis, laser alignment, vibration tracking, and wear auditing to maximize machine uptime and prevent critical equipment failures.',
    image_url: '/services/preventative-maintenance.jpg'
  }
];

export const spares = [
  {
    id: 'a1b2c3d4-e5f6-7a8b-9c0d-1e2f3a4b5c6d',
    spare_part_name: 'High-Tensile Forged Piston Kit',
    spare_part_specifications: 'Diameter: 120mm | Material: Forged Alloy Steel | Includes: Rings, Pins, & Retainers | Compatibility: Series-K Industrial Engines',
    spare_price: 24500, // Stored in cents/paise or whole currency unit depending on preference ($245.00 / ₹24,500)
    image_url: '/spares/piston-kit.jpg'
  },
  {
    id: 'b2c3d4e5-f6a7-8b9c-0d1e-2f3a4b5c6d7e',
    spare_part_name: 'Heavy-Duty Hydraulic Gear Pump',
    spare_part_specifications: 'Max Pressure: 250 Bar | Flow Rate: 45 LPM @ 1500 RPM | Port Size: 1-1/4 BSP | Rotation: Clockwise',
    spare_price: 18750,
    image_url: '/spares/hydraulic-pump.jpg'
  },
  {
    id: 'c3d4e5f6-a7b8-9c0d-1e2f-3a4b5c6d7e8f',
    spare_part_name: 'Synthetic Fluoroelastomer Shaft Seal',
    spare_part_specifications: 'Inner Diameter: 45mm | Outer Diameter: 65mm | Width: 8mm | Material: Viton (FKM) | Temp Range: -20°C to 200°C',
    spare_price: 1250,
    image_url: '/spares/shaft-seal.jpg'
  }
];
