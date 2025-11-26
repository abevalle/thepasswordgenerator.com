"use client"
import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import Toast from './Toast'; // Adjust the import path as necessary
import ReactGA from 'react-ga4';

ReactGA.initialize('G-4HNF0DRJMG');

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

    const generatePassword = useCallback((opts: optsInterface) => {
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
    }, [])

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
    const [isBatchMode, setIsBatchMode] = useState<boolean>(false);
    const [batchCount, setBatchCount] = useState<number>(10);
    const [batchPasswords, setBatchPasswords] = useState<string[]>([]);
    const [isCustomBatch, setIsCustomBatch] = useState<boolean>(false);
    const [customBatchCount, setCustomBatchCount] = useState<number>(25);

    const updateGeneratedPassword = useCallback((opts: optsInterface) => {
        const newPassword = generatePassword(opts);
        setGeneratedPassword(newPassword);
        ReactGA.event({
            category: 'User',
            action: 'Generated Password',
            label: `Length: ${opts.pwLength}`
        });
    }, [generatePassword]);

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

    const generateBatchPasswords = (count: number) => {
        const actualCount = isCustomBatch ? customBatchCount : count;
        const passwords: string[] = [];
        for (let i = 0; i < actualCount; i++) {
            passwords.push(generatePassword(passwordOpts));
        }
        setBatchPasswords(passwords);
        ReactGA.event({
            category: 'User',
            action: 'Generated Batch Passwords',
            label: `Count: ${actualCount}`
        });
    };

    const handleGeneratePasswordClick = () => {
        if (isBatchMode) {
            generateBatchPasswords(batchCount);
        } else {
            updateGeneratedPassword(passwordOpts);
        }
    };

    const handleCopyAllPasswords = () => {
        const allPasswords = batchPasswords.join('\n');
        navigator.clipboard.writeText(allPasswords);
        setToastMessage({ message: `${batchPasswords.length} passwords copied to clipboard!`, type: 'success' });
        ReactGA.event({
            category: 'User',
            action: 'Copied Batch Passwords',
            label: `Count: ${batchPasswords.length}`
        });
    };

    const handleDownloadPasswords = () => {
        const content = batchPasswords.join('\n');
        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `passwords_${new Date().getTime()}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        ReactGA.event({
            category: 'User',
            action: 'Downloaded Batch Passwords',
            label: `Count: ${batchPasswords.length}`
        });
    };

    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center generator relative gap-4">
            {toastMessage && (
                <Toast message={toastMessage.message} type={toastMessage.type} onClose={() => setToastMessage(null)} />
            )}
            <form className="generator-form w-full max-w-md p-4 sm:p-8 rounded-2xl">
                {!isBatchMode && (
                    <div className="flex flex-col sm:flex-row rounded-xl overflow-hidden mb-6 sm:mb-8 group">
                        <input 
                            type="text" 
                            id="generatedPassword" 
                            value={generatedPassword} 
                            className="password-input py-3 sm:py-4 px-3 sm:px-4 block w-full text-lg sm:text-xl text-purple-100 rounded-xl sm:rounded-l-xl sm:rounded-r-none mb-2 sm:mb-0" 
                            readOnly 
                        />
                        <button
                            type="button"
                            onClick={handleCopyPassword}
                            className="neon-button w-full sm:w-auto px-4 sm:px-8 py-3 sm:py-4 text-white font-semibold whitespace-nowrap"
                        >
                            Copy
                        </button>
                    </div>
                )}
                
                <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <label className="text-neutral-200 font-medium">Generation Mode</label>
                        <div className="inline-flex rounded-lg bg-gray-800 p-1">
                            <button
                                type="button"
                                onClick={() => setIsBatchMode(false)}
                                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                                    !isBatchMode 
                                        ? 'bg-purple-600 text-white shadow-lg' 
                                        : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                Single
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsBatchMode(true)}
                                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                                    isBatchMode 
                                        ? 'bg-purple-600 text-white shadow-lg' 
                                        : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                Batch
                            </button>
                        </div>
                    </div>
                    
                    {isBatchMode && (
                        <div className="flex items-center justify-between">
                            <label className="text-neutral-400 text-sm">Quantity</label>
                            <div className="flex items-center gap-2">
                                <div className="inline-flex rounded-lg bg-gray-800 p-1">
                                    <button
                                        type="button"
                                        onClick={() => { setBatchCount(10); setIsCustomBatch(false); }}
                                        className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                                            batchCount === 10 && !isCustomBatch
                                                ? 'bg-purple-600 text-white shadow-lg' 
                                                : 'text-gray-400 hover:text-white'
                                        }`}
                                    >
                                        10
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => { setBatchCount(50); setIsCustomBatch(false); }}
                                        className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                                            batchCount === 50 && !isCustomBatch
                                                ? 'bg-purple-600 text-white shadow-lg' 
                                                : 'text-gray-400 hover:text-white'
                                        }`}
                                    >
                                        50
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => { setBatchCount(100); setIsCustomBatch(false); }}
                                        className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                                            batchCount === 100 && !isCustomBatch
                                                ? 'bg-purple-600 text-white shadow-lg' 
                                                : 'text-gray-400 hover:text-white'
                                        }`}
                                    >
                                        100
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setIsCustomBatch(true)}
                                        className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
                                            isCustomBatch
                                                ? 'bg-purple-600 text-white shadow-lg' 
                                                : 'text-gray-400 hover:text-white'
                                        }`}
                                    >
                                        Custom
                                    </button>
                                </div>
                                {isCustomBatch && (
                                    <input
                                        type="number"
                                        min="1"
                                        max="1000"
                                        value={customBatchCount}
                                        onChange={(e) => setCustomBatchCount(Math.min(1000, Math.max(1, parseInt(e.target.value) || 1)))}
                                        className="w-20 px-2 py-1 text-sm text-white bg-gray-800 border border-gray-600 rounded-md focus:border-purple-500 focus:outline-none"
                                    />
                                )}
                            </div>
                        </div>
                    )}
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
                <button 
                    type="button" 
                    onClick={handleGeneratePasswordClick} 
                    className="neon-button w-full mt-8 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                    {isBatchMode ? `Generate ${isCustomBatch ? customBatchCount : batchCount} Passwords` : 'Generate Password'}
                </button>
            </form>
            
            {isBatchMode && batchPasswords.length > 0 && (
                <div className="generator-form w-full max-w-md p-4 sm:p-8 rounded-2xl">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-gray-200">Generated {batchPasswords.length} Passwords</h3>
                        <div className="flex gap-2">
                            <button
                                type="button"
                                onClick={handleCopyAllPasswords}
                                className="neon-button px-4 py-2 text-sm text-white font-semibold rounded-lg"
                            >
                                Copy All
                            </button>
                            <button
                                type="button"
                                onClick={handleDownloadPasswords}
                                className="neon-button px-4 py-2 text-sm text-white font-semibold rounded-lg"
                            >
                                Download
                            </button>
                        </div>
                    </div>
                    <div className="max-h-96 overflow-y-auto bg-gray-900 rounded-xl p-4 border border-gray-700">
                        {batchPasswords.map((password, index) => (
                            <div key={index} className="flex justify-between items-center py-2 hover:bg-gray-800 px-2 rounded">
                                <span className="text-purple-100 font-mono text-sm break-all mr-2">{password}</span>
                                <button
                                    type="button"
                                    onClick={() => {
                                        navigator.clipboard.writeText(password);
                                        setToastMessage({ message: 'Password copied!', type: 'success' });
                                    }}
                                    className="text-xs px-3 py-1 text-purple-300 hover:text-purple-100 transition-colors shrink-0"
                                >
                                    Copy
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
