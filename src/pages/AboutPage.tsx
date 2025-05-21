import type React from "react"

const AboutPage: React.FC = () => {
  return (
    <div className="pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">About NyumbaSmart</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
            Transforming property management in Kenya
          </p>
        </div>

        <div className="mt-12 prose prose-lg dark:prose-invert mx-auto">
          <p>
            NyumbaSmart is a revolutionary property management platform designed specifically for the Kenyan market. Our
            mission is to simplify property management for landlords, provide a seamless experience for tenants, and
            create opportunities for agents and service providers.
          </p>
          <p>
            Founded in 2023, NyumbaSmart has quickly grown to become a trusted solution for property management across
            Kenya. Our platform combines innovative technology with local expertise to address the unique challenges of
            the Kenyan real estate market.
          </p>
          <h2>Our Vision</h2>
          <p>
            To be the leading property management platform in East Africa, empowering property owners, tenants, and
            service providers with technology that simplifies and enhances their experience.
          </p>
          <h2>Our Mission</h2>
          <p>
            To transform property management in Kenya by providing an all-in-one platform that streamlines rent
            collection, maintenance management, and communication between landlords and tenants.
          </p>
          <h2>Our Values</h2>
          <ul>
            <li>
              <strong>Innovation:</strong> We continuously seek new ways to improve our platform and solve real
              problems.
            </li>
            <li>
              <strong>Integrity:</strong> We operate with honesty and transparency in all our dealings.
            </li>
            <li>
              <strong>Customer-Centric:</strong> We put our users' needs at the center of everything we do.
            </li>
            <li>
              <strong>Collaboration:</strong> We believe in the power of working together to create better solutions.
            </li>
            <li>
              <strong>Excellence:</strong> We strive for excellence in all aspects of our service.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
