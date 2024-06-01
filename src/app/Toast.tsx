import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const icon = type === 'success' ? faClipboardCheck : faCircleXmark;
  const bgColor = type === 'success' ? 'bg-green-100' : 'bg-red-100';
  const borderColor = type === 'success' ? 'border-green-500' : 'border-red-500';
  const textColor = type === 'success' ? 'text-green-700' : 'text-red-700';

  return (
    <div className={`fixed bottom-5 right-5 flex items-center w-full max-w-xs p-4 ${textColor} ${bgColor} border-l-4 ${borderColor} rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 z-50`} role="alert">
      <FontAwesomeIcon icon={icon} className={`mr-2 ${textColor}`} />
      <div className="text-sm font-normal">
        {message}
      </div>
      <div className="flex items-center ms-auto space-x-2 rtl:space-x-reverse">
        <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" onClick={onClose} aria-label="Close">
          <span className="sr-only">Close</span>
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Toast;
