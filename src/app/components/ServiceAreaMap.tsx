"use client";

const SERVICE_AREAS = [
  "Rancho Cucamonga",
  "Riverside",
  "Anaheim",
  "Irvine",
  "Huntington Beach",
  "Ontario",
  "Fontana",
  "San Bernardino",
  "Moreno Valley",
  "Corona",
  "Temecula",
  "Murrieta",
  "Palm Springs",
  "Redlands",
  "Chino Hills",
];

export function ServiceAreaMap() {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-[60%] rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d693000!2d-117.6!3d33.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1"
            width="100%"
            height="450"
            style={{ border: 0, pointerEvents: "none" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Service area - Inland Empire, Orange County, Southern California"
          />
        </div>
        <div className="w-full md:w-[40%] flex flex-col gap-2">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Areas We Serve</h3>
          {SERVICE_AREAS.map((city) => (
            <div key={city} className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 rounded-full bg-red-600 flex-shrink-0" />
              <span className="text-sm font-medium">{city}</span>
            </div>
          ))}
          <p className="text-xs text-gray-500 mt-3">...and surrounding areas</p>
        </div>
      </div>
      <div className="p-4 bg-white rounded-2xl mt-4 overflow-hidden shadow-lg">
        <p className="font-semibold text-brand-black">
          Serving Pomona to Temecula · Huntington Beach to Palm Springs
        </p>
        <p className="text-sm text-gray-600">
          Inland Empire • Orange County • Southern California
        </p>
      </div>
    </div>
  );
}
