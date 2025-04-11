// src/components/TemplateSelector.js
import React from 'react';

const TemplateSelector = ({ onSelect }) => {
  return (
    <div className="flex justify-center my-6 space-x-4">
      <button onClick={() => onSelect("template1")} className="px-4 py-2 bg-blue-600 text-white rounded">Template 1</button>
      <button onClick={() => onSelect("template2")} className="px-4 py-2 bg-gray-700 text-white rounded">Template 2 </button>
      <button onClick={() => onSelect('jake')} className="px-4 py-2 bg-gray-700 text-white rounded">Jake Template</button>
      <button onClick={() => onSelect('modern')} className="px-4 py-2 bg-gray-700 text-white rounded">Jake Template</button>
      <button onClick={() => onSelect('creative')} className="px-4 py-2 bg-gray-700 text-white rounded">Jake Template</button>
      <button onClick={() => onSelect('executive')} className="px-4 py-2 bg-gray-700 text-white rounded">Jake Template</button>
    </div>
  );
};

export default TemplateSelector;
