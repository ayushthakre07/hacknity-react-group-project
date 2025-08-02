import React from "react";

function DashCardData({ Icon, dataTitle, data, customTextStyle }) {
  return (
    <div className="space-y-1 flex gap-2">
      <div className="w-7 h-7 p-1.5 rounded-full bg-gradient-to-br from-white to-gray-200 flex items-center border border-gray-200 justify-center">
        <Icon />
      </div>
      <div className={`flex items-baseline gap-2 ${customTextStyle}`}>
        <p className="flex items-center gap-2 font-semibold text-gray-800">
          {dataTitle}
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">{data}</p>
      </div>
    </div>
  );
}

export default DashCardData;
