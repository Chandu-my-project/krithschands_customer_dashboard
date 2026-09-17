import postgres from 'postgres';
import { services, spares } from '../lib/placeholder-data';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedServices() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS services (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      service_name VARCHAR(255) NOT NULL,
      service_description TEXT NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `;

 
  const insertedServices = await Promise.all(
    services.map(
      (service) => sql`
        INSERT INTO services (service_name, service_description, image_url)
        VALUES (${service.service_name}, ${service.service_description}, ${service.image_url});
      `,
    ),
  );

  return insertedServices;
}

async function seedSpares() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await sql`
    CREATE TABLE IF NOT EXISTS spares (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      spare_part_name VARCHAR(255) NOT NULL,
      spare_part_specifications TEXT NOT NULL,
      spare_price INT NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `;

  // Removed custom ID parameter to prevent string-to-UUID casting errors
  const insertedSpares = await Promise.all(
    spares.map(
      (spare) => sql`
        INSERT INTO spares (spare_part_name, spare_part_specifications, spare_price, image_url)
        VALUES (${spare.spare_part_name}, ${spare.spare_part_specifications}, ${spare.spare_price}, ${spare.image_url});
      `,
    ),
  );

  return insertedSpares;
}

export async function GET() {
  try {
    await sql.begin(async (sql) => {
      await seedServices();
      await seedSpares();
    });

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
