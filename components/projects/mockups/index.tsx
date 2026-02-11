// Project mockups - visual representations of each project

import { PulseMockup } from "./Pulse";
import { BloomMockup } from "./Bloom";
import { AtlasMockup } from "./Atlas";
import { NomadMockup } from "./Nomad";
import { VoltMockup } from "./Volt";
import { MedixMockup } from "./Medix";
import { BaristaMockup } from "./Barista";
import { LuxeMockup } from "./Luxe";
import { BazaarMockup } from "./Bazaar";

// Generic mockup for projects without specific designs
function GenericMockup({ name, gradient }: { name: string; gradient: string }) {
  return (
    <div className="project-mockup generic-mockup">
      <div className="mockup-browser">
        <div className="mockup-header">
          <div className="mockup-dots">
            <span />
            <span />
            <span />
          </div>
          <div className="mockup-url">
            {name.toLowerCase().replace(/\s/g, ".")}
          </div>
        </div>
        <div className="mockup-content" style={{ background: gradient }}>
          <div className="mockup-center">
            <div className="mockup-logo">{name.slice(0, 2).toUpperCase()}</div>
            <div className="mockup-title">{name}</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .generic-mockup {
          width: 100%;
          height: 100%;
        }
        .mockup-browser {
          width: 100%;
          height: 100%;
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .mockup-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
        }
        .mockup-dots {
          display: flex;
          gap: 6px;
        }
        .mockup-dots span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
        }
        .mockup-url {
          flex: 1;
          height: 6px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
          max-width: 150px;
        }
        .mockup-content {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mockup-center {
          text-align: center;
          color: white;
        }
        .mockup-logo {
          width: 80px;
          height: 80px;
          margin: 0 auto 20px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          font-weight: 800;
          backdrop-filter: blur(10px);
        }
        .mockup-title {
          font-size: 24px;
          font-weight: 700;
        }
      `}</style>
    </div>
  );
}

// Mockup configurations
const mockupConfig = {
  pulse: {
    component: PulseMockup,
    gradient: "linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)",
  },
  bloom: {
    component: BloomMockup,
    gradient: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)",
  },
  atlas: {
    component: AtlasMockup,
    gradient: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
  },
  nomad: {
    component: NomadMockup,
    gradient: "linear-gradient(135deg, #f43f5e 0%, #fb7185 100%)",
  },
  volt: {
    component: VoltMockup,
    gradient: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
  },
  medix: {
    component: MedixMockup,
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
  },
  barista: {
    component: BaristaMockup,
    gradient: "linear-gradient(135deg, #1a5632 0%, #2d7a4f 100%)",
  },
  luxe: {
    component: LuxeMockup,
    gradient: "linear-gradient(135deg, #8b6f47 0%, #d4a574 100%)",
  },
  bazaar: {
    component: BazaarMockup,
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #e94560 100%)",
  },
};

// Variant configurations for each project
export const projectVariants: Record<string, { id: string; label: string }[]> =
  {
    pulse: [
      { id: "dashboard", label: "Dashboard" },
      { id: "reports", label: "Reports" },
      { id: "team", label: "Team" },
      { id: "receipts", label: "Receipts" },
    ],
    bloom: [
      { id: "home", label: "Home" },
      { id: "products", label: "Products" },
      { id: "detail", label: "Product Detail" },
      { id: "ar-view", label: "AR View" },
    ],
    atlas: [
      { id: "dashboard", label: "Dashboard" },
      { id: "contacts", label: "Contacts" },
      { id: "pipeline", label: "Pipeline" },
      { id: "reports", label: "Reports" },
    ],
    nomad: [
      { id: "search", label: "Search" },
      { id: "results", label: "Results" },
      { id: "detail", label: "Property" },
      { id: "booking", label: "Booking" },
    ],
    volt: [
      { id: "home", label: "Home" },
      { id: "workout", label: "Workout" },
      { id: "exercise", label: "Exercise" },
      { id: "progress", label: "Progress" },
    ],
    medix: [
      { id: "dashboard", label: "Dashboard" },
      { id: "booking", label: "Booking" },
      { id: "consultation", label: "Consultation" },
      { id: "records", label: "Records" },
    ],
    barista: [
      { id: "home", label: "Home" },
      { id: "products", label: "Shop" },
      { id: "services", label: "Services" },
      { id: "gallery", label: "Gallery" },
    ],
    luxe: [
      { id: "home", label: "Home" },
      { id: "products", label: "Products" },
      { id: "cart", label: "Cart" },
      { id: "checkout", label: "Checkout" },
    ],
    bazaar: [
      { id: "home", label: "Home" },
      { id: "categories", label: "Categories" },
      { id: "products", label: "Products" },
      { id: "branches", label: "Branches" },
    ],
  };

export function getProjectMockup(slug: string, variant?: string) {
  const config = mockupConfig[slug as keyof typeof mockupConfig];
  if (!config) return null;

  const { component: MockupComponent, gradient } = config;

  if (MockupComponent) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return <MockupComponent variant={variant as any} />;
  }

  // Use generic mockup for projects without specific designs
  const projectName = slug.charAt(0).toUpperCase() + slug.slice(1);
  return <GenericMockup name={projectName} gradient={gradient} />;
}

export {
  PulseMockup,
  BloomMockup,
  AtlasMockup,
  NomadMockup,
  VoltMockup,
  MedixMockup,
  BaristaMockup,
  LuxeMockup,
  BazaarMockup,
};
