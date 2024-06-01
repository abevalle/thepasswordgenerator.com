"use client"
import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import Toast from './Toast'; // Adjust the import path as necessary
import ReactGA from 'react-ga4';

ReactGA.initialize('YOUR_GA_TRACKING_ID'); // Replace with your actual GA tracking ID

export default function CreateForm() {

    interface optsInterface {
        az: boolean,
        AZ: boolean,
        num: boolean,
        special: boolean,
        pwLength: number,
        ambiguous: boolean
    }

    const omitAmbiguous = (seed: string) => {
        let result = seed.replace(/[loIO01]/g, '')
        return result
    }

    const generatePassword = (opts: optsInterface) => {
        let result = ''
        let AZ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let az = "abcdefghijklmnopqrstuvwxyz"
        let num = "0123456789"
        let special = "!@$%&_"
        let chars = []

        if (opts.AZ) { chars.push(AZ) }
        if (opts.az) { chars.push(az) }
        if (opts.num) { chars.push(num) }
        if (opts.special) { chars.push(special) }

        let charList = chars.join("")
        if (opts.ambiguous) { charList = omitAmbiguous(charList) }
        let charListLength = charList.length
        let counter = 0
        while (counter < opts.pwLength) {
            result += charList.charAt(Math.floor(Math.random() * charListLength));
            counter += 1
        }
        return result;
    }

    const [passwordOpts, setPasswordOpts] = useState<optsInterface>({
        az: true,
        AZ: true,
        num: true,
        special: false,
        pwLength: 32,
        ambiguous: true
    });

    const [disabledOpts, setDisabledOpts] = useState<string[]>([]);
    const [toastMessage, setToastMessage] = useState<{ message: string, type: 'success' | 'error' } | null>(null);
    const [generatedPassword, setGeneratedPassword] = useState<string>("");

    const updateGeneratedPassword = useCallback((opts: optsInterface) => {
        const newPassword = generatePassword(opts);
        setGeneratedPassword(newPassword);
        ReactGA.event({
            category: 'User',
            action: 'Generated Password',
            label: `Length: ${opts.pwLength}`
        });
    }, []);

    useEffect(() => {
        updateGeneratedPassword(passwordOpts);
    }, [passwordOpts, updateGeneratedPassword]);

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newLength = +e.target.value;
        setPasswordOpts({ ...passwordOpts, pwLength: newLength });
        ReactGA.event({
            category: 'User',
            action: 'Changed Password Length',
            label: `Length: ${newLength}`
        });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newLength = +e.target.value;
        setPasswordOpts({ ...passwordOpts, pwLength: newLength });
        ReactGA.event({
            category: 'User',
            action: 'Changed Password Length',
            label: `Length: ${newLength}`
        });
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, checked } = e.target;
        const updatedOpts = { ...passwordOpts, [id]: checked };
        setPasswordOpts(updatedOpts);

        const enabledOptions = Object.keys(updatedOpts).filter(key => key !== 'pwLength' && key !== 'ambiguous' && updatedOpts[key as keyof optsInterface]);

        if (enabledOptions.length === 1) {
            setDisabledOpts(enabledOptions);
            setToastMessage({ message: `The ${enabledOptions[0]} option cannot be deselected.`, type: 'error' });
        } else {
            setDisabledOpts([]);
        }

        ReactGA.event({
            category: 'User',
            action: checked ? 'Enabled Option' : 'Disabled Option',
            label: id
        });
    };

    const handleCopyPassword = () => {
        navigator.clipboard.writeText(generatedPassword);
        setToastMessage({ message: 'Password copied to clipboard!', type: 'success' });
        ReactGA.event({
            category: 'User',
            action: 'Copied Password'
        });
    };

    const handleGeneratePasswordClick = () => {
        updateGeneratedPassword(passwordOpts);
    };

    return (
        <div className="flex flex-row items-center justify-center generator relative">
            {toastMessage && (
                <Toast message={toastMessage.message} type={toastMessage.type} onClose={() => setToastMessage(null)} />
            )}
            <form className="w-full max-w-sm bg-gray-800 p-5 rounded shadow">
                <div className="sm:flex rounded-md shadow-sm">
                    <input 
                        type="text" 
                        id="generatedPassword" 
                        value={generatedPassword} 
                        className="py-3 px-4 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" 
                        readOnly 
                    />
                    <span id="copypw" tabIndex={0} onClick={handleCopyPassword} className="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 copy">
                        Copy
                    </span>
                </div>
                <div className="mt-2 mb-2">
                    <label className="w-full block text-neutral-700 dark:text-neutral-200 mb-2">Password Length</label>
                    <div className="flex items-center">
                        <input type="number" min="8" max="256" value={passwordOpts.pwLength} onChange={handleInputChange} className="w-1/4 text-white bg-gray-800 border border-gray-700 rounded mr-2" />
                        <input type="range" min="8" max="256" value={passwordOpts.pwLength} onChange={handleSliderChange} className="transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600" />
                    </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type='checkbox' id="az" name="a-z" className="sr-only peer" defaultChecked={passwordOpts.az} onChange={handleCheckboxChange} disabled={disabledOpts.includes('az')}></input>
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">a-z</span>
                </label><br />
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type='checkbox' id="AZ" name="A-Z" className="sr-only peer" defaultChecked={passwordOpts.AZ} onChange={handleCheckboxChange} disabled={disabledOpts.includes('AZ')}></input>
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">A-Z</span>
                </label><br />
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type='checkbox' id="num" name="0-9" className="sr-only peer" defaultChecked={passwordOpts.num} onChange={handleCheckboxChange} disabled={disabledOpts.includes('num')}></input>
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">0-9</span>
                </label><br />
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type='checkbox' id="special" name="special" className="sr-only peer" defaultChecked={passwordOpts.special} onChange={handleCheckboxChange} disabled={disabledOpts.includes('special')}></input>
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">!@$%&</span>
                </label><br />
                <label className="relative inline-flex items-center cursor-pointer tooltip-container">
                    <input type='checkbox' id="ambiguous" name="ambiguous" className="sr-only peer" defaultChecked={passwordOpts.ambiguous} onChange={handleCheckboxChange}></input>
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Avoid Ambiguous Characters <FontAwesomeIcon icon={faCircleInfo} /></span>
                    <span className="tooltip-text">Avoid characters like &apos;0&apos;, &apos;O&apos;, &apos;I&apos;, and &apos;l&apos; to reduce ambiguity.</span>
                </label><br />
                <button type="button" id="submit" name="submit" className="w-full mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={handleGeneratePasswordClick}>Generate Password</button>
            </form>
        </div>
    );
}
