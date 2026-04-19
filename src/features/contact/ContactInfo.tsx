import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

const contactDetails = [
  {
    icon: <Mail size={24} className="text-primary" />,
    title: "Email Support",
    text: "info@opensixty.co.zw",
    bgColor: "bg-gray-800",
  },
  {
    icon: <Phone size={24} className="text-primary" />,
    title: "Call Our Office",
    text: "+263 77 123 4567",
    bgColor: "bg-gray-800",
  },
  {
    icon: <MapPin size={24} className="text-secondary" />,
    title: "Visit Our Office",
    text: "11 Rhodesville Road, Eastlea - Harare, Zimbabwe",
    bgColor: "bg-primary",
  },
  {
    icon: <MessageSquare size={24} className="text-primary" />,
    title: "WhatsApp",
    text: "+263 78 957 9040",
    bgColor: "bg-gray-800",
  },
];

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-800">
        Let&apos;s Talk Together
      </h2>
      <p className="text-gray-600">
        We are here to help you with any questions you may have. Feel free to
        reach out to us, and we will get back to you as soon as possible.
      </p>
      <div className="space-y-4">
        {contactDetails.map((detail, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-4 border-b border-gray-200 last:border-b-0"
          >
            <div className={`p-3 rounded-lg ${detail.bgColor}`}>
              {detail.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                {detail.title}
              </h3>
              <p className="text-gray-600">{detail.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
