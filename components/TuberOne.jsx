/* This example requires Tailwind CSS v2.0+ */
import {
  AnnotationIcon,
  CashIcon,
  CurrencyDollarIcon,
  DocumentReportIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Sponsorship Acquisition & Retention",
    description:
      "We secure lucrative media sponsorship deals for your channels and send offers your way.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Billing and Payment",
    description:
      "Our system makes it seamless to collect and disburse payments between creators and their sponsors",
    icon: CashIcon,
  },
  {
    name: "Communication & Creative Tools",
    description:
      "Integrated tools makes it easy for our creators to communicate at any stage in the process with their sponsors.",
    icon: AnnotationIcon,
  },
  {
    name: "Transparent Report Sheet",
    description:
      "See what, where and how things are progressing with our transparent reporting tools.",
    icon: DocumentReportIcon,
  },
];

export default function Marketing() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Creators</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Here's a better way to manage sponsorships
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our services span across all facets of sponsorship for both sponsors and creators. From
            planning, accomplishing tasks, and achieving sponsorship goals. Our services include but
            are not limited to:
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
