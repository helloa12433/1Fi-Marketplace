import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <div className="mt-6 flex flex-col items-center justify-center rounded-[20px] border border-red-100 bg-red-50/50 p-6 text-center">
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
        <AlertCircle className="h-6 w-6" />
      </div>
      <h4 className="text-base font-semibold text-gray-900">Failed to load marketplace</h4>
      <p className="mt-1 text-sm text-gray-500 max-w-xs">{message}</p>
      <button
        type="button"
        onClick={onRetry}
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-fi-purple px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-fi-darkPurple"
      >
        <RefreshCw className="h-3.5 w-3.5" />
        Retry
      </button>
    </div>
  );
};
