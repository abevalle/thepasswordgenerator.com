"use client"
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'


export default function  CreateForm () {

    interface optsInterface {
        az: boolean,
        AZ: boolean,
        num: boolean,
        special: boolean,
        pwLength: number,
        ambiguous: boolean
    }

    

    const omitAmbiguous = (seed:string) => {
        let result = seed.replace(/[loIO01]/g, '')
        return result
    }

    const generatePassword = (opts:optsInterface) => {

        let result = ''
        let AZ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let az = "abcdefghijklmnopqrstuvwxyz"
        let num = "0123456789"
        let special ="!@$%&_"
        let chars = []

        if (opts.AZ) {chars.push(AZ)}
        if (opts.az) {chars.push(az)}
        if (opts.num) {chars.push(num)}
        if (opts.special) {chars.push(special)}

        let charList = chars.join("")
        if (opts.ambiguous) { charList = omitAmbiguous(charList) }
        let charListLength = charList.length
        let counter = 0
        while (counter < opts.pwLength) {
            result += charList.charAt(Math.floor(Math.random()*charListLength));
            counter += 1
        }
        (document.getElementById('generatedPassword') as HTMLInputElement)!.value = result

    }

    const updateRangeValue = () => {
        let newValue = (document.getElementById('pwLength') as HTMLInputElement)!.value
        let target = document.getElementById('pwLengthValue')
        target!.innerHTML = newValue
    }

    const load = (opts:optsInterface) => {
        updateRangeValue()
        generatePassword(opts)
    }

    const holdFocus = () => {
        let button = document.getElementById('copypw');
        button!.onclick = function () {
            console.log('copied')
            button?.focus();
            window.setTimeout(function () {
                button?.blur();
            }, 500)
        }
    }

    useEffect(() => {
        load({az: true, AZ: true, num: true, special: false, pwLength: 32, ambiguous: true})
    })

    return(
        <div className="flex flex-row  items-center justify-center generator" onLoad={() => {}}>
            <form className="w-full max-w-sm bg-gray-800 p-5 rounded shadow">
                <div className="sm:flex rounded-md shadow-sm">
                    <input type="text" id="generatedPassword" className="py-3 px-4 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"/>
                    <span id="copypw" tabIndex={0} onClick={() => {let password = (document.getElementById('generatedPassword') as HTMLInputElement)!.value; navigator.clipboard.writeText(password); holdFocus()}} className="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400 copy"></span>
                </div>
                <div className="mt-2 mb-2">
                    <label className="w-full block text-neutral-700 dark:text-neutral-200">Password Length</label>
                    <label id="pwLengthValue" className="w-1/4 inline mr-12 text-white static"></label>
                    <input type="range" min="8" max="256" id="pwLength" onChange={() => {updateRangeValue()}} className="transparent h-[4px] inline w-3/4 cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600"/>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                <input type='checkbox' id="az" name="a-z"  className="sr-only peer" defaultChecked></input>
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">a-z</span>
                </label><br/>

                <label className="relative inline-flex items-center cursor-pointer">
                <input type='checkbox' id="AZ" name="A-Z"  className="sr-only peer" defaultChecked></input>
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">A-Z</span>
                </label><br/>

                <label className="relative inline-flex items-center cursor-pointer">
                <input type='checkbox' id="num" name="0-9" className="sr-only peer" defaultChecked></input>
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">0-9</span>
                </label><br/>

                <label className="relative inline-flex items-center cursor-pointer">
                <input type='checkbox' id="special" name="special" className="sr-only peer"></input>
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">!@$%&</span>
                </label><br/>

                <label className="relative inline-flex items-center cursor-pointer">
                <input type='checkbox' id="ambiguous" name="ambiguous" className="sr-only peer"></input>
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Avoid Ambiguous Characters <FontAwesomeIcon icon={faCircleInfo} /></span>
                </label><br/>


                <button type="button" id="submit" name="submit" className="w-full mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                    let opts = {
                        az: (document.getElementById('az') as HTMLInputElement).checked,
                        AZ: (document.getElementById('AZ') as HTMLInputElement).checked,
                        num: (document.getElementById('num') as HTMLInputElement).checked,
                        special: (document.getElementById('special') as HTMLInputElement).checked,
                        pwLength: +(document.getElementById('pwLength') as HTMLInputElement).value,
                        ambiguous: (document.getElementById('ambiguous') as HTMLInputElement).checked
                    }
                    generatePassword(opts)
                    }}>Generate Password</button>
            </form>
        </div>
    )
}