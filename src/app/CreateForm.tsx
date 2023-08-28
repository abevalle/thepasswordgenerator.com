"use client"

export default function  CreateForm () {

    interface optsInterface {
        az: boolean,
        AZ: boolean,
        num: boolean,
        special: boolean,
        pwLength: number
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

    return(
        <div className="flex items-center justify-center" onLoad={() => {updateRangeValue()}}>
            <form className="w-full max-w-sm">
                <input type="text" disabled placeholder='Password Will Show Here' id="generatedPassword" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input><br/>
                <label className="mb-2 inline-block text-neutral-700 dark:text-neutral-200">Password Length</label>
                <input type="range" min="8" max="256" id="pwLength" onChange={() => {updateRangeValue()}} className="transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600"/>
                <p id="pwLengthValue"></p>
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
                <button type="button" id="submit" name="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                    let opts = {
                        az: (document.getElementById('az') as HTMLInputElement).checked,
                        AZ: (document.getElementById('AZ') as HTMLInputElement).checked,
                        num: (document.getElementById('num') as HTMLInputElement).checked,
                        special: (document.getElementById('special') as HTMLInputElement).checked,
                        pwLength: +(document.getElementById('pwLength') as HTMLInputElement).value
                    }
                    generatePassword(opts)
                    }}>Generate Password</button>
            </form>
        </div>
    )
}