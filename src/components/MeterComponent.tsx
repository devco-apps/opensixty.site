interface Offering {
  name: string;
  value: number;
}

interface MeterComponentProps {
  offeringsData: Offering[];
}

const MeterComponent: React.FC<MeterComponentProps> = ({ offeringsData }) => {
  return (
    <div className="space-y-6">
      {offeringsData.map((offering, index) => (
        <div key={index}>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-gray-900">
              {offering.name}
            </span>
            <span className="text-sm font-medium text-gray-900">
              {offering.value}%
            </span>
          </div>
          <div className="border border-gray-200 rounded-lg p-1">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gray-900 h-2 rounded-full bg-linear-to-r from-orange-500 to-yellow-500"
                style={{ width: `${offering.value}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MeterComponent;
